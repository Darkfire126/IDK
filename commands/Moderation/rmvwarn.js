const {MessageEmbed} = require('discord.js')
const db = require('../../models/warns')
module.exports = {
    commands: ['rmvwarn', 'rwarn', 'removewarn', 'deletewarn'],
    category: 'Moderation',
    expectedArgs: "<Target user's @>",
    description: "remove someones warn someone aslong as you are a Administrator",
    requiredPermissions: ['ADMINISTRATOR'],
    expectedArgs: "<@user>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
    
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        const messae = new MessageEmbed()
        .setTitle(' :warning: ERROR ERROR :warning: ')
        .setColor('RED')
        .setDescription('No data FOUND, No warnings found!')
        .setTimestamp()
        const messaeg = new MessageEmbed()
        .setTitle(' :thumbsup: Done :thumbsup: ')
        .setColor('Black')
        .setDescription(`Removed ${user.user.name} warn, There tag + Id ${user.user.id}, ${user.user.tag}`)
        .setTimestamp()
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('deleted the warn')
                data.save()
            } else {
                message.channel.send(messae)
            }
        })
    }
}