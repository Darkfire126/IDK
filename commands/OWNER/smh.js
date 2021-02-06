
const blacklist = require('../../models/Schema')

module.exports = {
    commands: ['smh', 'blacklist', 'bl'],
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    run: async ({  message, args, text, client, prefix, instance, arguments }) => {
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`${User.user.tag} has been added to blacklist.`)
            }
           
        })
    }
}