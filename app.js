const TelegramBot = require('node-telegram-bot-api');
const chalk = require('chalk')
require('dotenv').config();
const {generateAnswer} = require(`./chatGPT`)

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const start = async () => {
    await bot.setMyCommands([
        {command: '/start', description: 'Start'},
    ])

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const message = msg.text

        if (message === '/start') {
            return bot.sendMessage(chatId, 'Ты нажал старт');
        }


        const text = await generateAnswer(message)

        return bot.sendMessage(chatId, text);
    })

    const text = chalk.bgGreen(`             `) + chalk.green(` Telegram bot is running  => `) + chalk.green(new Date().toLocaleTimeString())
    console.log(text)
}

start()