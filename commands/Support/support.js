const { DiscordAPIError } = require("discord.js");

module.exports = {
    commands: ['support', 'yesing'],
    expectedArgs:'<What to report.>',
    description: 'Shot a dm to the owner of the bot!',
    category: 'Support',
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
   const slice = args.slice().join(" ")
   const discord = require('discord.js')

   const Messafe = new discord.MessageEmbed()
   .setTitle("New Report By, " + message.author.id + ", " + message.author.username + " ")
   .setColor('RANDOM')
   .setDescription( ` **Problem:**`+ `\n `, slice)
   .setFooter('Report')
   client.users.cache.get('725010310922240007').send(Messafe);
  message.author.send("Ok report sent, please do not spam it.")
 
   
   
   
   
   
    }
}