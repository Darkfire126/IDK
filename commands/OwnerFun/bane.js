const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "Guild Owner Fun!",
    description: "SMH",
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if(message.author.id != message.guild.ownerID) return; 
    }
}