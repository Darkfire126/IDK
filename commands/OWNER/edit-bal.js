const { GuildMember } = require("discord.js")
const economy = require("../../util/economy")
const getTarget = require("../../util/get-target")

module.exports = {
    ownerOnly: true,
    description: 'SMH',
    category: 'OWNER',
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
       const target = await message.mentions.users.first() || await message.client.users.fetch(args[0])

        const coins = args[1]
        if (isNaN(coins)) return message.reply('Please provide a valid number of coins.')
        const newCoins = await economy.addCoins(message.guild.id, target.id, coins)
        message.reply(`You have given ${target} ${coins} ${coins == 1 ? 'coin' : 'coins'}. They now have ${newCoins} ${newCoins == 1 ? 'coin' : 'coins'}.`)
        }
    }