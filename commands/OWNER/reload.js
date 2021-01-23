const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
const msg = await message.channel.send(`Restarting bot`)
process.exit();


    }
}