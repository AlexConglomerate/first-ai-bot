const {Configuration, OpenAIApi} = require("openai");
require('dotenv').config()
const {text2} = require(`./text`)

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    format: 'json',
});

const openai = new OpenAIApi(configuration);

exports.generateAnswer = async (prompt) => {
    const text1 = text2(prompt)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text1,
        max_tokens: 100,
    })
    const {text} = response.data.choices[0]
    return text
}


