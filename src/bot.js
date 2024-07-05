const { Telegraf } = require('telegraf');
const { botToken } = require('./config');
const { handleWeatherRequest } = require('./controllers/weatherController');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

const bot = new Telegraf(botToken);

bot.use(errorHandler);

bot.start((ctx) => ctx.reply('Welcome! Send me a city name to get the current weather.'));

bot.on('text', handleWeatherRequest);

bot.launch().then(() => logger.info('Bot is running...')).catch(error => logger.error(`Failed to launch bot: ${error.message}`));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
