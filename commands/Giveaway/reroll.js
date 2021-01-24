

const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    commands: ['reroll', 'greroll'],
    expectedArgs: '<giveaway message id>',
    description: 'Reroll a giveaway!',
    category: 'Giveaway',
    requiredPermissions: ['MANAGE_MESSAGES'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {

if(!args[0]) return message.channel.send('Please specify a message id')

const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args[0]);
if(!giveaway) return message.channel.send('Couldn\'t find the giveaway.')

client.giveaways.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send("Giveaway rerolled");
    })
    .catch(err => {
        console.log(err)
    })
}
}