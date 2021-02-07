const discord = require('discord.js');
require('dotenv').config()
const Guild = require('./schemas/guild-schema')
const WOKCommands = require("wokcommands")
const Levels = require("discord-xp");
const express = require('express')
const { GiveawaysManager } = require("discord-giveaways")
const client = new discord.Client({
  partials: ['MESSAGE', 'REACTION'],
  
});

 
client.giveaways = new GiveawaysManager(client, {
  storage: "../../Downloads/giveaways.json",
  updateCountdownEvery: 5000,
  embedColor: `RANDOM`,
  reaction: '🎉'
})

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.on('ready', () => {
  // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = ''
  
  // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

  // Initialize WOKCommands with specific folders and MongoDB
 new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,// Show start up warnings
    dbOptions
  })
// Set your MongoDB connection path
.setMongoPath(process.env.MONGO_URI)
// Set the default prefix for your bot, it is . by default
.setDefaultPrefix(process.env.PREFIX)
// Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
.setColor(0xff0000)
.setBotOwner('725010310922240007')
.setCategorySettings([
    {
      name: 'Fun',
      emoji: '🎮'
    },
    {
      name: 'Economy',
      emoji: '💸'
    },
    {
      name: 'Info',
      emoji: 'ℹ️'
    },
    {
      name: 'Music',
      emoji: '🎶'
    },
    {
      // You can change the default emojis as well
      name: 'Configuration',
      emoji: '🚧',
      // You can also hide a category from the help menu
      // Admins bypass this
      hidden: true
    },
    {
        name: 'Moderation',
        emoji: '🚔'
    },
    {
      name: 'OWNER',
      emoji: '🅾️',
      hidden: true
    },
    {
      name: 'Giveaway',
      emoji: '🎉'
    },
    {
      name: "Support",
      emoji: '🧾'
    }
  ])
})
const Constants = require('./node_modules/discord.js/src/util/Constants');
const webmoblie = Constants.DefaultOptions.ws.properties.$browser = `Discord Android`; //or Discord iOS
 //Ran whenever a supported database connection is connected

  let TOserver = client.guilds.cache.size; 

const Acr = [
  'You',
  'type s.help',
]
  client.on('ready', async () => {
    let index = 0;
    setInterval(() => {
if(index === Acr[index]) index = 0;
const status = Acr[index];

client.user.setActivity(status, {type: 'WATCHING'})
index++;
    }, 5000)
    client.user.setStatus(webmoblie)
  console.log(client.user.tag + ' has logged in.');
  })
 Levels.setURL(process.env.MONGO_URI);
  client.on("message", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  
  const randomAmountOfXp = Math.floor(Math.random() * 9) + 1; // Min 1, Max 30
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.channel.send(`${message.author.username}, congratulations! You have leveled up to **${user.level}**. :tada:`).then(m => m.delete({ timeout: 15000}));
  }
});
const { MessageEmbed } = require('discord.js');
// client.on('messageDelete', async (message) => {
//   if (message.partial) await message.fetch();
//   await Guild.findOne({
//     logChannelID
// }, async (err, guild) => {
//     if (err) console.error(err);
//     if (!guild) {
//       return message.channel.send("Please set a modlog!")
//   }
 
// if (message.channel.id === Guild.logChannelID);
// const embed = new MessageEmbed()
//   .setColor('#0099ff')
//   .setTitle('Message Deleted!')
//   .setDescription(`Message deleted in <#${message.channel.id}> by **${message.author.username}** \n ${message.content}`)
//  .setTimestamp()
//   const memes = message.guild.channels.cache.get(Guild.logChannelID)
//   return Guild.logChannelID.send(embed)
//    })
//   })
const precies = 's.' || '.' || '!' || '/' || '?' || '>' || '>>' || '//' || '??' || '!!' || 's!' || 'x!'
client.on('message', async(message) => {
  const db = require("quick.db")
  let blacklist = await db.fetch(`blacklist_${message.author.id}`)

  const { MessageEmbed } = require('discord.js');
  if (!message.content.startsWith(prefix)) return;
 

      const errorE = new MessageEmbed()
      .setTitle('You are blacklisted!')
      .setColor('#000000')
      .setDescription('You are blacklisted from using commands!')

      if (blacklist === "Blacklisted") return message.channel.send(errorE)

   
})

 client.login(process.env.TOKEN)