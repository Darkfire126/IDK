const guildSchema = require("../../schemas/guild-schema")
const muteSchema = require("../../schemas/mute-schema")
const setMutedRole = require('../../commands/Configuration/muterole')

module.exports = {
    category: "Moderation",
    description: 'unmutes a user',
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: '<user ping>',
    minArgs: 1,
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
if (!message.mentions.users.first()) return message.reply('please mention a user to unmute')
const target = message.mentions.members.first()
const { mutedRoleId } = await guildSchema.findOne({ _id: message.guild.id })
if (!mutedRoleId) return message.reply(`this server does not have a muted role set up. run \`${prefix} setmutedrole ${setMutedRole.expectedArgs}\``)
if (!target.roles.cache.has(mutedRoleId)) return message.reply('this member is not currently muted.')

await target.roles.remove(mutedRoleId)
// if it was a timed mute, delete it.
await muteSchema.findOneAndDelete({
    guildId: message.guild.id,
    userId: target.id,
})
message.reply(`${target} has successfully been unmuted.`)
}
}