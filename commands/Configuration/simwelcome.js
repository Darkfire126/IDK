module.exports = {
    requiredPermissions: ['ADMINISTRATOR'],
    category: "Configuration",
    aliases: ['simjoin'],
    description: "set the welcome! channel",
    callback: async ({ message, args, text, client, prefix, instance }) => {
      client.emit('guildMemberAdd', message.member)
    },
  }