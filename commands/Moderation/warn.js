
const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')
module.exports = {
    category: 'Moderation',
    expectedArgs: "<Target user's @> <reason>",
    description: "warn someone aslong as you are a Moderator",
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: "<@user> <reason>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        if(user.id === message.author.id) return message.channel.send("Why warn yourself?")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(new MessageEmbed()
            .setDescription(`You have been warned for ${reason}`)
            .setColor("RED")
            .setFooter(`You have been warned in ${message.guild.name}`)
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`Warned ${user} for ${reason}`).setColor('BLUE')
        )
    }
}