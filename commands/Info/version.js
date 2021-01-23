const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Info",
    description: "Look at the bots version!",
    aliases: ['ABR'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const fqa = new MessageEmbed()
        .setTitle("**Version SADLY** PRERELEASE 1.0")
        .setDescription(`**BUGFIXS** 
        ADDING ALL COMMANDS: 0.0.1 beta
        FIXING COMMANDS 0.0.9 BETA
        ADDING MORE COMMANDS 0.1 ALPHA
        **PRERELEASE 1.0**  < CURRENT VERSION
         `)
        .setColor('RANDOM')
        message.channel.send(fqa)
    }}