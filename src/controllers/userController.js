
const logger = require('log4js').getLogger();

exports.helloWorld = async (req, res) => {
  logger.info(`saying yo to tha world`)
  res.status(200).send('hey mr world')
}
