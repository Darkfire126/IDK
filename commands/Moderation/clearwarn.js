const db = require('../../models/warns')
const {MessageEmbed} = require('discord.js')
module.exports = {
    commands: ['clearwarn', 'cwarn', 'clearwarns', 'remove-all-warns'],
    category: 'Moderation',
    expectedArgs: "<Target user's @>",
    description: "remove someones warn someone aslong as you are a Administrator",
    requiredPermissions: ['ADMINISTRATOR'],
    expectedArgs: "<@user>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const messae = new MessageEmbed()
        .setTitle(' :warning: ERROR ERROR :warning: ')
        .setColor('RED')
        .setDescription('No data FOUND, No warnings found!')
        .setTimestamp()

       
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        const messaeg = new MessageEmbed()
        .setTitle(' :thumbsup: Done :thumbsup: ')
        .setColor('Black')
        .setDescription(`Cleared ${user.user.name} warns, There tag + Id ${user.user.id}, ${user.user.tag}`)
        .setTimestamp()
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(messaeg)
            } else {
                message.channel.send(messae)
            }
        })
    }
}