let jwt = require('jsonwebtoken');
let logger = require('log4js').getLogger();

const constants = require('../constants');
const secret = '28WhatIsTheAverageAirSpeedVelocityOfAnUnladenSwallow83';

exports.authBasic = async (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) {
    return res.status(401).send("Missing auth header");
  }

  const tmp = auth.split(' ');
  const buf = new Buffer.from(tmp[1], 'base64');
  const plain_auth = buf.toString();

  const creds = plain_auth.split(':');
  const username = encodeURIComponent(creds[0]) || "";
  const password = encodeURIComponent(creds[1]) || "";

  try {
    let user = await userStore.getUser(username);
    if (password === user.password && user.role === 'basic') {
      return next();
    }
    throw new Error("wrong credentials");

  } catch (e) {
    res.status(401).send("Unauthorized");
  }
}

exports.login = async (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  if (req.body.username && req.body.password) {
    const username = encodeURIComponent(req.body.username);
    const password = encodeURIComponent(req.body.password);

    try {
      let user = await userStore.getUser(username);
      if (user.password !== password || (user.role !== 'user' && user.role !== 'admin')) {
        throw new Error("wrong credentials");
      }

      var profile = {
        username,
        adid: username,
        role: user.role
      };

      const token = jwt.sign(profile, secret, { expiresIn: constants.TOKEN_EXPIRE });
      return res.status(200).json({ token: token, username: username });

    } catch (e) {
      logger.error("user credentials error: " + e)
      return res.status(400).json({
        errorMsg: "wrong credentials"
      })
    }
  } else {
    return res.status(400).json({
      errorMsg: "missing credentials"
    })
  }
}

exports.authorize = async (req, res, next) => {

  let token = (req.headers['x-access-token'] || req.headers['authorization']);
  // remove bearer from token string

  if (!token) {
    res.status(401);
    return res.json({
      'status': 401,
      'message': "Invalid or missing token"
    });
  }
  token = encodeURIComponent(token.slice(7, token.length));
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        'status': 401,
        'message': "Invalid token"
      });
    }
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
}

exports.adminOnly = async (req, res, next) => {

  if (req && req.role && req.role === 'admin') {
    return next();
  }
  res.status(403);
  return res.json({
    'status': 403,
    'message': "Need admin privilege"
  });
}
