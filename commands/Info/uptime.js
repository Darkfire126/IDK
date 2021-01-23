const ms = require("ms")
module.exports = {
    category: "Info",
    description: "Look at the bot uptime!",
    callback: async ({ message, args, text, client, prefix, instance }) => {
message.channel.send(`My uptime is \`${ms(client.uptime, { long: true })}\``);
}}