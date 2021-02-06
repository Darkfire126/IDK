const blacklist = require('../../models/blacklist')

module.exports = {
    commands: ['smh-r', 'blacklist-remove', 'bl-r'],
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    run: async ({  message, args, text, client, prefix, instance, arguments }) => {
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** has been removed from blacklist.`)
            } else {
               message.channel.send(`**${User.displayName}** is not blacklisted.`)
            }
           
        })
    }
}
