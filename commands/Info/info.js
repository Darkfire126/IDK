module.exports = {
    category: "Info",
    description: "get the bot info!",
    aliases: ['information', 'i'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const {MessageEmbed} = require('discord.js')
      return  message.channel.send(new MessageEmbed()
        .setAuthor(`Information | ${client.user.username}`,  client.user.displayAvatarURL())
        .addField('Bot ID: ', client.user.id, true)
        .addField('Bot Tag: ', client.user.tag, true)
        .addField('Server Count: ', (await client.shard.fetchClientValues('guilds.cache.size')).reduce((a, b) => b + a), true)
        .addField('User Count: ', (await client.shard.fetchClientValues('users.cache.size')).reduce((a, b) => b + a), true)
      .setThumbnail(client.user.displayAvatarURL())
        )


    }
}