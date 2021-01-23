const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Info",
    description: "Look at the botinfo!",
    aliases: ['bi'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
const embed = new MessageEmbed()
.setThumbnail(client.user.displayAvatarURL())
.setTitle('Bot Stats')
.setColor('#000000')
.addFields(
    {
        name: '🌐 Servers',
        value: `Serving ${client.guilds.cache.size} servers.`,
        inline: true
    },
    {
        name: '📺 Channels',
        value: `Serving ${client.channels.cache.size} channels.`,
        inline: true
    },
    {
        name: '👥 Server Users',
        value: `Serving ${client.users.cache.size}`,
        inline: true
    },
    {
        name: '⏳ Ping',
        value: `${Math.round(client.ws.ping)}ms`,
        inline: true
    },
    {
        name: 'Join Date',
        value: client.user.createdAt,
        inline: true
    }
)
.setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())

await message.channel.send(embed)
}
}