module.exports = {
    requiredPermissions: ['ADMINISTRATOR'],
    category: "Configuration",
    description: "set the welcome! channel",
    callback: async ({ message, args, text, client, prefix, instance }) => {
      client.emit('guildMemberAdd', message.member)
    },
  }