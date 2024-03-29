const db = require('../../models/warns')
const { Message, MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['warns', 'infractions'],
    category: 'Moderation',
    expectedArgs: "<Target user's @>",
    description: "view someones warns aslong as you are a Moderator",
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: "<@user>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const messae = new MessageEmbed()
        .setTitle(' :warning: ERROR ERROR :warning: ')
        .setColor('RED')
        .setDescription('No data FOUND!')
        .setTimestamp()

      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if(!user) return message.channel.send('User not found.')
      const reason = args.slice(1).join(" ")
      db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
          if(err) throw err;
          if(data) {
              message.channel.send(new MessageEmbed()
                  .setTitle(`${user.user.tag}'s warns`)
                  .setDescription(
                      data.content.map(
                          (w, i) => 
                          `\`${i + 1}\` |  Moderator  : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                      )
                  )
                  .setColor("BLUE")
              )
          } else {
              message.channel.send(messae)
          }

      })
  }
}