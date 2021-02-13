const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js'); 
const client = new Discord.Client
client.on('message', async (message) => { 
    console.log(message.content)
 })

  module.exports.config = {
    displayName: 'Test', // Can be changed any time
    dbName: 'TEST', // Should be unique and NEVER be changed once set
    loadDBFirst: true, // Wait for the database connection to be present
  }