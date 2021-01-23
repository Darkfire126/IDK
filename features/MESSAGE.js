const Discord = require("discord.js");
const client = new Discord.Client
client.on('messageDelete', message => {
    console.log(`${message.id} was deleted!`);
    // Partial messages do not contain any content so skip them
    if (!message.partial) {
      console.log(`It had content: "${message.content}"`);
    }
  });
  module.exports.config = {
    displayName: 'Test', // Can be changed any time
    dbName: 'TEST', // Should be unique and NEVER be changed once set
    loadDBFirst: true, // Wait for the database connection to be present
  }