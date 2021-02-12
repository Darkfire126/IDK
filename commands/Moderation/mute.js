const { MessageEmbed } = require("discord.js")
const ms = require("ms")
const guildSchema = require("../../schemas/guild-schema")
const muteSchema = require("../../schemas/mute-schema")
const niceDates = require('../../util/nice-dates')
module.exports = {
    category: "Moderation",
    description: 'mutes a user (gives them muted role)',
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: '<user ping|id> <time|\'forever\'> [reason]',
    minArgs: 2,
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        if (!message.guild) return
        const [user, timeString, ...reason] = args
        let { mutedRoleId } = await guildSchema.findOne({ _id: message.guild.id }) || null
        let add = false, end = false
        const target = message.mentions.members.first() || message.guild.members.fetch(args[0])

        if (!mutedRoleId) {
            const sentMessage = await message.reply('this server does not have a muted role set up. Do you want me to create one? (react for yes)')
                sentMessage.react('✔')
                const collected = await sentMessage.awaitReactions((reaction, user) => reaction.emoji.name === '✔' && user.id === message.author.id, { max: 1, time: 5000 })
                if (collected.size > 0) add = true
                else return message.reply(`not adding a muted role or muting ${target}.`)

            if (end) return
            if (add) {
                const mutedRole = await message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        permissions: 1115136,
                        hoist: false,
                        mentionable: false,
                    },
                    reason: `adding muted role, requested by ${message.author.tag}`
                })

                await guildSchema.findOneAndUpdate(
                    { _id: message.guild.id },
                    {
                        _id: message.guild.id,
                        mutedRoleId: mutedRole.id,
                    },
                    { upsert: true }
                )
                message.reply(`${mutedRole} is now the muted role for this server.`)
                mutedRoleId = mutedRole.id
            }
        }
        
        const duration = timeString === 'forever' ? null : ms(timeString)

        if (target === message.member) return message.reply('Please do not mute yourself!')

        let muteSuccess = true
        await target.roles.add(mutedRoleId, `muted by ${message.author.tag} - ${reason}`).then(async () => {
            if (timeString) {
                await muteSchema.create(
                    {
                        guildId: message.guild.id,
                        userId: target.id,
                        endTime: Date.now() + duration
                    }
                )
            }
        }).catch((err) => {
            muteSuccess = false
            message.reply('I cannot mute that member.')
            if (err) console.log(err)
        })
        
        const formatDate = new Date(ms(timeString))
        const formatString = timeString === 'forever' ? 'Forever' : niceDates(formatDate.getTime())
        if (muteSuccess) message.reply(`muted ${target.user.tag} for ${formatString}`)
        
        const muteEmbed = new MessageEmbed()
            .setTitle(`Muted in ${message.guild.name}`)
            .addFields(
                {
                    name: 'Muted by',
                    value: message.author,
                },
                {
                    name: 'Reason',
                    value: `\`${reason.join(' ')}\``,
                },
                {
                    name: 'Duration',
                    value: formatString,
                }
            )
            .setTimestamp()
        
        if (muteSuccess) target.user.send(muteEmbed).catch(() => {})
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            await channel.createOverwrite(mutedRoleId, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                SPEAK: false
            })
        });
    }
}