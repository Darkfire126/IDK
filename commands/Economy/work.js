const { MessageEmbed } = require('discord.js');
const economy = require('../../util/economy')
const { MessageEmbed } = require("discord.js")
module.exports = {
    commands: 'work',
    expectedArgs: '',
    description: 'work cmd',
    category: 'Economy',
    globalCooldown: '5m',
    guildOnly: true,
    run: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const amount = 300;
const Jobs = ["Pepe", "Bot", "Programmer", "Youtuber", "Developer"];
const Job = Jobs[Math.floor(Math.random() * (Jobs.length))];
const Messagesagsaad = new MessageEmbed()
.setTitle(message.author.tag + " Worked")
.setColor('RANDOM')
.setDescription(`You worked as a ${job} and earned $300`)
message.channel.send(Messagesagsaad)
return await economy.addCoins(message.guild.id, message.author.id, +amount)
    }}