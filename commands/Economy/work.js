const { MessageEmbed } = require('discord.js');
const economy = require('../../util/economy')

module.exports = {
    commands: 'work',
    expectedArgs: '',
    description: 'work cmd',
    category: 'Economy',
    guildOnly: true,
    run: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const Coins = Math.floor(Math.random() * 300);
        const amount = Coins;
const Jobs = ["Model", "Freelance Developer", "Programmer", "Youtuber", "Developer"];
const Job = Jobs[Math.floor(Math.random() * (Jobs.length))];
const Messagesagsaad = new MessageEmbed()
.setTitle(message.author.tag + " Worked")
.setColor('RANDOM')
.setDescription(`You worked as a ${Job} and earned ${amount}`)
message.channel.send(Messagesagsaad)
return await economy.addCoins(message.guild.id, message.author.id, +amount)
    }}