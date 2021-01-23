module.exports = {
    category: "Info",
    description: "get bot inv and support server inv!",
    aliases: ['inv'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
        message.channel.send(`
        Bot Invite: https://discord.com/oauth2/authorize?client_id=799779495581843575&scope=bot&permissions=805314622
        Support Server Invite:  https://discord.gg/MVfMS96mRN
        `)
    }}