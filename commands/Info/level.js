const canvacord = require('canvacord')
const levels = require('discord-xp')
const Discord = require('discord.js')
module.exports = {
    commands: ['rank', 'level'],
    description: 'shows your level in the server.',
    category: 'Info',
    expectedArgs: '<@user>',
    guildOnly: true,
    run: async ({ message, text }) => {

                const target = message.mentions.users.first() || message.author; // Grab the target.
                const user = await levels.fetch(target.id, message.guild.id); // Selects the target from the database.

                const neededXp = levels.xpFor(parseInt(user.level) + 1);
         
        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.
        const rank = new canvacord.Rank()
        .setAvatar(target.displayAvatarURL({ format: 'png' }))
        .setCurrentXP(user.xp)
        .setLevel(user.level)
        .setRequiredXP(neededXp)
        .setProgressBar('#FFFFFF', 'COLOR', true)
        .setUsername(target.username)
        .setDiscriminator(target.discriminator)
        .setBackground('COLOR', '#36393F')
        .setOverlay('#36393F', 0, false)
        .setProgressBar('#e8064d', 'COLOR', true)
        rank.build()
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, 'level.png')
            message.channel.send(attachment)
        })
    }
}