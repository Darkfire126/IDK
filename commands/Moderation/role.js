module.exports = {
    minArgs: 2,
    category: 'Moderation',
    expectedArgs: "<Target user's @> <The role name>",
    description: "Give someone's role aslong as you are a Moderator",
    requiredPermissions: ['MANAGE_ROLES'],
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
      const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to give a role to.').then(m => m.delete({ timeout: 5000}));
        return
      }
  
      args.shift()
  
      const roleName = args.join(' ')
      const { guild } = message
  
      const role = guild.roles.cache.find((role) => {
        return role.name === roleName
      })
      if (!role) {
        message.reply(`There is no role with the name "${roleName}"`).then(m => m.delete({ timeout: 5000}));
        return
      }
  
      const member = guild.members.cache.get(targetUser.id)
      member.roles.add(role)
  
      message.reply(`that user now has the "${roleName}" role`).then(m => m.delete({ timeout: 5000}));
    },
  }