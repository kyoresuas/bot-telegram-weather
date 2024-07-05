const { getWeather } = require('../services/weatherService');
const logger = require('../utils/logger');

const handleWeatherRequest = async (ctx) => {
  const city = ctx.message.text;

  try {
    const weather = await getWeather(city);
    const weatherMessage = `
      Weather in ${weather.city}:
      Description: ${weather.description}
      Temperature: ${weather.temperature}°C
      Feels Like: ${weather.feelsLike}°C
      Humidity: ${weather.humidity}%
      Wind Speed: ${weather.windSpeed} m/s
    `;
    ctx.reply(weatherMessage);
  } catch (error) {
    logger.error(`Failed to get weather for ${city}: ${error.message}`);
    ctx.reply(`Could not retrieve weather data for ${city}. Please try again.`);
  }
};

module.exports = { handleWeatherRequest };
