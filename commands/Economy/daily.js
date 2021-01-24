const { MessageEmbed } = require("discord.js")
const economy = require("../../util/economy")
const { MessageEmbed } = require("discord.js")
module.exports = {
    commands: 'daily',
    description: 'Gives you your daily reward of money',
    expectedArgs: '',
    category: 'Economy',
    globalCooldown: '1d',
    guildOnly: true,
    run: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const DailyEmbed = new MessageEmbed()
        .setTitle("Added " + message.author.tag + "2k coins")
        .setColor("RANDOM")
        .setDescription("2000 coins have been added to your balance!")
        await economy.addCoins(message.guild.id, message.author.id, 2000)
        return message.channel.send(DailyEmbed)
    }
}