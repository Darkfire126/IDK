module.exports = {
    category: "Info",
    description: "get bot inv and support server inv!",
    aliases: ['inv'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const { MessageEmbed } = require('discord.js')


        const messsssssssssssssss = new MessageEmbed()
        .setTitle('The Bot Invite Here!')
        .setDescription("[Bot Invite](https://discord.com/oauth2/authorize?client_id=799779495581843575&scope=bot&permissions=805314622) \n [Support](https://discord.gg/MVfMS96mRN) " )
        message.channel.send(messsssssssssssssss)
    }}