import log4js from 'log4js'
const logger = log4js.getLogger();
logger.level = process.env.LOGLEVEL || 'debug';

export default logger
