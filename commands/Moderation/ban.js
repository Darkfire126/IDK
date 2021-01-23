const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Moderation",
    description: "Ban someone along you are a moderator",
    requiredPermissions: ['BAN_MEMBERS'],
    expectedArgs: "<@user> <reason>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        const mslice = args.slice(0).join(" ")
        const member = message.guild.members.cache.get(mslice);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const banembed = new MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}