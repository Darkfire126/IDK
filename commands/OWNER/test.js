const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')
module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
   const name = args.slice(1).join(" ")
        message.guild.channels
        .create(name, {
          type: 'text',
        })
        .then((channel) => {
          const categoryId = args[0]
          channel.setParent(categoryId)
        })
    }

   
    }
    
