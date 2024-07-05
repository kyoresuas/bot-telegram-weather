const apiClient = require('../utils/apiClient');
const { weatherApiUrl, weatherApiKey } = require('../config');

const getWeather = async (city) => {
  const url = `${weatherApiUrl}?q=${city}&units=metric&appid=${weatherApiKey}`;
  const response = await apiClient.get(url);
  const data = response.data;

  return {
    city: data.name,
    description: data.weather[0].description,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed
  };
};

module.exports = { getWeather };
