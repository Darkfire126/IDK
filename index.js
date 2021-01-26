const discord = require('discord.js');
require('dotenv').config()
const DisTube = require('distube');
const WOKCommands = require("wokcommands")
const { GiveawaysManager } = require("discord-giveaways")
const { token } = require("../yesomn/config.json")
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


 client.on('ready', () => {
  console.log(client.user.tag + ' has logged in.');
 client.user.setPresence({ activity:
  { name: `s.help` ,
 type: "WATCHING" }, 
  status: webmoblie 
})
 })
 client.on("message", async message => {
  const prefix = process.env.PREFIX
  if(message.mentions.users.first() === client.user){
    const embed = new discord.MessageEmbed()
    .setAuthor(`${message.author.username}` , message.author.displayAvatarURL({dynamic : true}))
    .setColor("#16E9F3")
    .setDescription(`Hey there 👋 my prefix for everything is \`${prefix}\`!
    To get started just do \`${prefix}help\` for commands! Unless one of the server's admins set a prefix please contact them for more info!`)
    message.channel.send(embed)
    .then(msg => {
        msg.delete({ timeout: 15000 })
    })
}})
 client.login(token)