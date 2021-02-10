module.exports = {
    description: 'Sim a join',
    category: 'Configuration',
    requiredPermissions: ['ADMINISTRATOR'],
    callback: (message, args, text, client) => {
      client.emit('guildMemberAdd', message.member)
    },
  }