const axios = require('axios');
const logger = require('./logger');

const apiClient = axios.create({
  timeout: 5000
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    logger.error(`API request failed: ${error.message}`);
    return Promise.reject(error);
  }
);

module.exports = apiClient;
