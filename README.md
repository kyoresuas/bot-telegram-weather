# Telegram Weather Bot

Telegram bot that provides detailed weather updates using the OpenWeatherMap API.

## Features

- Get current weather information for any city.
- Detailed weather information including temperature, feels like temperature, humidity, and wind speed.
- Robust error handling and logging.
- Scalable and modular architecture for easy maintenance and expansion.

## Getting Started

Follow these instructions to set up and run the Telegram Weather Bot on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Telegram Bot Token](https://core.telegram.org/bots#3-how-do-i-create-a-bot) from BotFather
- [OpenWeatherMap API Key](https://home.openweathermap.org/users/sign_up)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/telegram-weather-bot.git
   cd telegram-weather-bot
   ```
   
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add the Telegram Bot token and OpenWeatherMap API key to the .env file:**

   ```plaintext
   BOT_TOKEN=your_telegram_bot_token
   WEATHER_API_KEY=your_openweathermap_api_key
   ```

### Usage

1. **Running a bot:**

   ```bash
   npm start
   ```

2. **Interaction with a bot in Telegram:**

   - **Running a bot:**

     Send `/start` to the bot to receive a welcome message.

   - **Get weather information:**

     Send the name of any city to the bot to get the current weather for that city.   

### Commands

- `/start` - Initiate a conversation with the bot. The bot will greet you and provide instructions on how to use it.
- `<city_name>` - Send the name of any city to get the current weather details for that city.

### Example Interaction

1. **User:** `/start`
   **Bot:** `Welcome! Send me a city name to get the current weather.`

2. **User:** `London`
   **Bot:**
   ```
   Weather in London:
   Description: clear sky
   Temperature: 15°C
   Feels Like: 14°C
   Humidity: 60%
   Wind Speed: 3 m/s
   ```

## Project Structure

The project is structured in a modular way to ensure scalability and ease of maintenance:

```plaintext
telegram-weather-bot/
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── src/
│   ├── config/
│   │   └── index.js
│   ├── controllers/
│   │   └── weatherController.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── apiClient.js
│   │   └── logger.js
│   └── bot.js
└── .env
```

- **config/** - Configuration files and environment variable setup.
- **controllers/** - Contains the weather controller which handles user requests.
- **middlewares/** - Middleware for handling errors.
- **services/** - Contains the weather service which interacts with the OpenWeatherMap API.
- **utils/** - Utility modules for API client setup and logging.
- **bot.js** - The main bot launch file.

## Contact

For questions or feedback, please reach out to **Kyoresuas@tellery.ru**.

---

By following this README, you should be able to set up and run the Telegram Weather Bot effortlessly. Enjoy!
