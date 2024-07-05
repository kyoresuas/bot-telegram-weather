const logger = require('../utils/logger');

const errorHandler = (ctx, next) => {
  return next().catch(err => {
    logger.error(`Bot error: ${err.message}`);
    ctx.reply('An error occurred. Please try again later.');
  });
};

module.exports = errorHandler;
