const { GuildMember } = require('discord.js')
const levels = require('discord-xp')
const getTarget = require('../../util/get-target')

module.exports = {
    commands: 'setlevel',
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    minArgs: 2,
    expectedArgs: '<user> <level>',
    run: async ({ message, args, instance }) => {
        let target = await message.mentions.users.first() || message.author; // Grab the target.
        if (!target) return message.channel.send('No user id!')
        levels.setLevel(target.id, message.guild.id, args[1]);
        }
    }