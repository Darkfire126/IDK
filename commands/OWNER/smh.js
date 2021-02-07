
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    commands: ['smh', 'blacklist', 'bl'],
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    run: async ({  message, args, text, client, prefix, instance, arguments }) => {
        const User = message.guild.members.cache.get(args[0])
        const user = message.mentions.users.first()
        if (!user) return message.reply("Please mention someone!")
        
        let blacklist = await db.fetch(`blacklist_${user.id}`)
        
        if (blacklist === "Not") {
          db.set(`blacklist_${user.id}`, "Blacklisted") 
          let embed = new Discord.MessageEmbed()
          .setDescription(`${user} has been blacklisted!`)
          
          message.channel.send(embed)
        } else if (blacklist === "Blacklisted") {
           db.set(`blacklist_${user.id}`, "Not") 
          let embed = new Discord.MessageEmbed()
          .setDescription(`${user} has been unblacklisted!`)
          
          message.channel.send(embed)
        } else {
           db.set(`blacklist_${user.id}`, "Not") 
          let embed = new Discord.MessageEmbed()
          .setDescription(`Set up data for ${user}!`)
          
          message.channel.send(embed)
        }
      }
    }