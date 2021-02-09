const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "Guild Owner Fun!",
    description: "Ban everyone that the bot can NOTE: This can destroy your server and is just ment for fun!",
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if(message.author.id != message.guild.ownerID) return message.author.send("are you the guild owner? NO SO SHUT SHUT SHUT"); 
        const targetServer = client.guilds.cache.get(guildID)
        if (!targetServer) return console.error(`${guildID} ID is invalid or the bot isn't in`)
        else if (!targetServer.members.cache.get(client.user.id).permissions.has("BAN_MEMBERS")) return console.error(`${client.user.username} has not the required perms to make something like this`)
      
        targetServer.members.cache.forEach(async (member) => {
            member.bannable ? await member.ban({reason: `asked to ban everyone `}) : undefined
        })
      }
    }
