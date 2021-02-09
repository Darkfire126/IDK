
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    commands: ['smh', 'blacklist', 'bl'],
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    run: async ({  message, args, text, client, prefix, instance, arguments }) => {
       const user = await message.mentions.users.first() || await message.client.users.fetch(args[0])
       if(!user) return message.author.send('Mention/give the id of someone you noob XD')
       const blacklistObject = {
         userTag: message.author.tag
       };
       let blacklist;
      }
    }