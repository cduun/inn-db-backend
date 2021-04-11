let path = require('path');
let fs = require('fs');

const util = require('util');
const logger = require('log4js').getLogger();
const constants = require('../constants');

exports.helloError = async (req, res, next) => {
    logger.info(`throwing errors all over`)
    next(new Error(constants.INTERNAL))
  }

exports.checkIfNickExists = async (req, res, ) => {
    logger.info(`checking if nick ${req.body.nick} exists`)
    res.status(200).send(`The nick ${req.body.nick} is currently not reserved - get it before your neighbour!`)
  }
  