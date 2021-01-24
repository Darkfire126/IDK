const ms = require('ms')

module.exports = {
    commands: ['end', 'gend'],
    expectedArgs: '<giveaway message id>',
    description: 'End a giveaway!',
    category: 'Giveaway',
    requiredPermissions: ['MANAGE_MESSAGES'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        if(!args[0]) return message.channel.send('Please specify a message id')

        const giveaway = client.giveaways.giveaways.find((g) => g.messageID === args.join(" "))
        if(!giveaway) return message.channel.send('Giveaway not found')

        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now()
        }).catch(err => {
            console.log(err)
            message.channel.send('An error occured')
        })
        
    }
}