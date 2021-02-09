const fs = require('fs')
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
     let blacklist = await JSON.parse(fs.readFileSync(`../../blacklist.
     json`, 'utf-8'));
     if(!blacklist) return console.warn('No blacklist.json')
     if(!blacklist[user.id]) blacklist[user] = 
     blacklistObject;

     try {
       await fs.writeFile('../../blacklist.json', JSON.stringify
       (blacklist, null, 2))
     } catch (err) {
      return console.log(err)
     }
     }
      }