const { MessageEmbed } = require("discord.js")
const ms = require('ms')

module.exports = {
    commands: ['giveaway', 'gcreate'],
    expectedArgs: '<@channel> <duration> <winners> <prize>',
    description: 'Start a giveaway!',
    category: 'Giveaway',
    requiredPermissions: ['MANAGE_MESSAGES'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
              
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('Please specify a channel')

        const duration = args[1]
        if(!duration) return message.channel.send('please enter a valid duration')

        const winners = args[2]
        if(!winners) return message.channel.send('Please specify an amount of winners')

        const prize = args.slice(3).join(" ")
        if(!prize) return message.channel.send('Please sepcify a prize to win')

        client.giveaways.start(channel, {
            time : ms(duration),
            prize : prize,
            winnerCount: winners,
            hostedBy: message.author.tag,
            messages: {
                giveaway: ("@everyone\n\n" + '') + "Giveaway",
                giveawayEnd: ("@everyone\n\n" + '') + "Giveaway Ended",
                timeRemaining: "Time Remaining **{duration}**",
                inviteToParticipate: "React with 🎉 to join the giveaway",
                winMessage: "Congrats {winners}, you have  won the giveaway",
                embedFooter: "Giveaway Time!",
                noWinner: "Could not determine a winner",
                hostedBy: 'Hosted by {user}',
                winners: "winners",
                endedAt: 'Ends at',
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: 'hours',
                    days: 'days',
                    pluralS: false
                }
            },
           
        })
        message.channel.send(`Giveaway is starting in ${channel}`)
    }
}