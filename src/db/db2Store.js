const logger = require('log4js').getLogger();
class db2Store {

  constructor(conf) {
    logger.debug(conf)
    this._setupDB(conf)
  }

  async getValue(key) {
    logger.debug(`getValue for key ${key}`);
    try {
      logger.info('yo')
    } catch (e) {
        logger.error(`getValue failed with error: ${e}`);
        throw new Error(e.error);
    }
  }

  async set(value) {
    logger.debug(`creating new entry`);
    try {
      logger.info(`yo ${value}`)
    } catch (e) {
      throw new Error('Database insert failed - ' + e.message);
    }
  }

  async deleteValue(key) {
    logger.debug(`deleteValue for key: ${key}`)
    try {
      logger.info(`yo ${key}`)
    } catch (e) {
      logger.error(`deleteValue: ${key}, ERROR: ${e.error}`);
      throw new Error(e.error);
    }

  }
}
module.exports = db2Store;