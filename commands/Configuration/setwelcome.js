const welcomeSchema = require('../../schemas/Welcome-schema')

const cache = new Map()

const loadData = async () => {
  const results = await welcomeSchema.find()

  for (const result of results) {
    cache.set(result._id, result.channelId)
  }
}
loadData()

module.exports = {
    description: 'set the servers channel id!',
    category: 'Configuration',
  requiredPermissions: ['ADMINISTRATOR'],
  callback: async (message) => {
    const { guild, channel } = message

    await welcomeSchema.findOneAndUpdate(
      {
        _id: guild.id,
      },
      {
        _id: guild.id,
        channelId: channel.id,
      },
      {
        upsert: true,
      }
    )

    cache.set(guild.id, channel.id)

    message.reply(`The welcome channel has been set to, `, channel.name + ` ` + channel.id)
  },
}

module.exports.getChannelId = (guildId) => {
  return cache.get(guildId)
}