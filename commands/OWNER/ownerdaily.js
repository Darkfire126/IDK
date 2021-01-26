const { MessageEmbed } = require("discord.js")
const economy = require("../../util/economy")

module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    globalCooldown: '1m',
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const DailyEmbed = new MessageEmbed()
        .setTitle("Added " + message.author.tag + "1e+300 coins")
        .setColor("RANDOM")
        .setDescription("2000 coins have been added to your balance!")
        await economy.addCoins(message.guild.id, message.author.id, 1e+300)
        return message.channel.send(DailyEmbed)
    }
}