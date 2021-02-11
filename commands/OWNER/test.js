const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')
module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
       const {channel} = message
       
       
        channel.setTopic(args.slice(0).join)
    }

   
    }
    
