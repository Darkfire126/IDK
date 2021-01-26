
const guildSchema = require('../../models/guild-schema')

module.exports = {
    commands: ['setmutedrole', 'setmuterole'],
    minArgs: 1,
    expectedArgs:'<role ping|role id|\'none\'>',
    description: 'set the servers muted role!',
    category: 'Configuration',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        if (text === 'none') {
            await guildSchema.findOneAndUpdate(
                { _id: message.guild.id },
                { mutedRoleId: null },
            )
            return message.reply('the muted role for this server has been successfully unset.')
        }
        const mutedRole = await message.mentions.roles.first() || await message.guild.roles.fetch(text)
        if (!mutedRole) return message.reply('invalid role ID, please try again with a valid id')
        const result = await guildSchema.findOneAndUpdate(
            { _id: message.guild.id },
            { mutedRoleId: mutedRole.id },
            {
                upsert: true,
                new: true,
            }
        )
        message.reply(`role \`${mutedRole.name}\` has been set as this server's muted role.`)
    }
}