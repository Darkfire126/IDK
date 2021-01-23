const { MessageEmved } = require('discord.js')

module.exports = {
    description: "Sniper",
    category: "Fun",
    callback: async ({ message, args, text, client, prefix, instance }) => {
    const msg = client.snipes.get(message.channel.id)
    const embed = new MessageEmbed()
    .setAuthor(msg.author, msg.member.user.displayAvatarURL())
    .setDescription(msg.content)
    .setFooter('Get Sniped lol')
    .setTimestamp();
    message.channel.send(embed);
}

}