"use strict";
const express = require('express');
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
const http = require('http');
const secure = require('express-force-https');
const app = express();
const log4js = require('log4js');
const bodyParser = require('body-parser');
const jsonLayout = require('log4js-json-layout');
const secret = process.env.SECRET;

// If running locally, the .env file is used as config
if (appEnv.isLocal) {
  require('dotenv').config();
} else {
  // configure log
  log4js.addLayout('json', jsonLayout);
  log4js.configure({
    appenders: { out: { type: 'console', layout: { type: 'json' } } },
    categories: { default: { appenders: ['out'], level: process.env.LOG_LEVEL || 'info' } }
  });
}
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || 'trace';

// configure app
app.use(log4js.connectLogger(logger, { level: 'debug' }));
app.use(secure);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({ defaultCharset: "utf-8" }));

let server = http.createServer(app);

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Access-Token,Authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', "true");
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.get("/ping", (req, res) => res.send("all good"));
app.use('/api/v1', require('./src/routes'));
let port = process.env.PORT || 3000
server.listen(port, () => {
  logger.info('server started on ' + port);
});
