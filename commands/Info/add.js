const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "Fun",
    description: "add's two number",
    callback: async ({ message, args, text, client, prefix, instance }) => {

        const num1 = +args[0]
        const num2 = +args[1]
    
        message.reply(`The sum is ${num1 + num2}`)
    }}