const discord = require('discord.js');
require('dotenv').config()
const logs = require('./schemas/guild-schema')
const WOKCommands = require("wokcommands")
const Levels = require("discord-xp");
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
    }
  ])
})
const Constants = require('./node_modules/discord.js/src/util/Constants');
const webmoblie = Constants.DefaultOptions.ws.properties.$browser = `Discord Android`; //or Discord iOS
 //Ran whenever a supported database connection is connected

  let TOserver = client.guilds.cache.size; 


  client.on('ready', async () => {
  console.log(client.user.tag + ' has logged in.');
 client.user.setPresence({ activity:
  { name: `s.help` ,
 type: "WATCHING" }, 
  status: webmoblie 
})
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
const { MessageEmbed } = require('discord.js')
client.on('messageDelete', async (message) => {
  if (message.partial) await message.fetch();
  logs.findOne({

    logChannelID: logs.logChannelID,
    guildID: logs.guildID
  })
  console.log(logChannelID, guildID)
if(!logChannelID, guildID) {
  return message.channel.send("There is no modlogs!")
}
if (message.channel.id === logChannelID.channel.id);
const embed = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Message Deleted!')
  .setDescription(`Message deleted in <#${message.channel.id}> by **${message.author.username}** \n ${message.content}`)
 .setTimestamp()
  return message.guild.channels.cache.get(logChannelID.channel).send(embed)
})



 client.login(process.env.TOKEN)