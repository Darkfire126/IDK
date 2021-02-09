const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js'); 
const client = new Discord.Client

client.on('messageDelete', async (message) => { 
    if (message.partial) await message.fetch(); 
    if (message.author.bot || (!message.guild)) return; 
    const channelsname = message.guild.channels.cache.find(channel => channel.name === "s-modlog") 
    const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Message Deleted!')
    .setDescription(`Message deleted in <#${message.channel.id}> by **${message.author.username}** \n **Content:** ${message.content}`)
    .setTimestamp() 
    if (!channelsname) return; 
    return channelsname.send(embed)
 })

  module.exports.config = {
    displayName: 'Test', // Can be changed any time
    dbName: 'TEST', // Should be unique and NEVER be changed once set
    loadDBFirst: true, // Wait for the database connection to be present
  }