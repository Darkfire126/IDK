const { GuildMember } = require('discord.js')
const levels = require('../../features/levels')
const memberSchema = require('../../models/member-schema')
const getTarget = require('../../util/get-target')
const level = require('../Info/level')

module.exports = {
    commands: 'setlevel',
    category: 'OWNER',
    description: 'Owner only command that sets the level of a user',
    ownerOnly: true,
    minArgs: 2,
    expectedArgs: '<user> <level>',
    run: async ({ message, args, instance }) => {
        let target = await getTarget.firstArgPingID(message, args, instance)
        target = target instanceof GuildMember ? target.user : target
        if (!target) return

        const levelToSet = args[1]

        const newInfo = await levels.setLevel(message.guild.id, target.id, levelToSet)

        message.reply(`set ${target}'s level to level ${level}.`), {
            TARGET: target,
            LEVEL: newInfo.level,
        }
    }
}