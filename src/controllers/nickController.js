let path = require('path');
let fs = require('fs');

const util = require('util');
const logger = require('log4js').getLogger();
const constants = require('../constants');

exports.helloError = async (req, res) => {
    logger.info(`throwing errors all over`)
    throw new Error(constants.internal)
  }
  