const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js'); 
const client = new Discord.Client

client.on('guildMemberAdd', async(message, client) => {

})


  module.exports.config = {
    displayName: 'Welcome', // Can be changed any time
    dbName: 'Welcome', // Should be unique and NEVER be changed once set
    loadDBFirst: true, // Wait for the database connection to be present
  }