module.exports = {
    description: "become afk! ",
    category: "Fun",
      
    callback: async ({ message, args, text, client, prefix, instance }) => {
    if (!message.member.displayName.includes('[AFK]')) {
        const nicknameArgs = message.member.displayName
        message.member.setNickname(`[AFK] ${nicknameArgs}`).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
    } else {
        const nickname = message.member.displayName.split(' ').slice(1).join(' ')
        message.member.setNickname(nickname).catch(err => message.reply('I cannot change your nickname! Please check my permissions.'))
    }
}
}