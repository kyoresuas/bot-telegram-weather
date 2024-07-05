require('dotenv').config();

const config = {
  botToken: process.env.BOT_TOKEN,
  weatherApiKey: process.env.WEATHER_API_KEY,
  weatherApiUrl: 'http://api.openweathermap.org/data/2.5/weather',
  logLevel: 'info'
};

module.exports = config;
