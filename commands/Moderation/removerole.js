
module.exports = {
    minArgs: 2,
    category: 'Moderation',
    expectedArgs: "<Target user's @> <The role name>",
    description: "Remove someone's aslong as you are a Moderator",
    permissions: ['MANAGE_ROLES'],
    aliases: ['rrole'],
    expectedArgs: "<@user> <role name>",
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
      const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to remove a role from.').then(m => m.delete({ timeout: 5000}));
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
  
      if (member.roles.cache.get(role.id)) {
        member.roles.remove(role)
        message.reply(`That user no longer has the ${roleName} role`).then(m => m.delete({ timeout: 5000}));
      } else {
        message.reply(`That user does not have the ${roleName} role`).then(m => m.delete({ timeout: 5000}));
      }
    },
  }