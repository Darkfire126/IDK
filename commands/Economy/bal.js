const economy = require('../../util/economy')
const getTarget = require('../../util/get-target')
const { GuildMember, MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['balance', 'bal', 'coins'],
    maxArgs: 1,
    expectedArgs: '<@user>',
    description: 'shows your (or the pinged user\'s) balance',
    category: 'Economy',
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        let target = await getTarget.firstArgOrSelf(message, args, instance)
        target = target instanceof GuildMember ? target.user : target

        const coins = await economy.getCoins(message.guild.id, target.id)
const Messgaess = new MessageEmbed()
.setTitle(message.author.tag + " Balance")
.setColor('RANDOM')
.setDescription(  `${target === message.author ? 'you have' : `${target} has`} ${coins} coins`, {
    allowedMentions: {
        users: [message.author.id]
    }
})
        message.channel.send(Messgaess)
      
    }
}