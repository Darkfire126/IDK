const { MessageEmbed } = require("discord.js")

module.exports = {
    category: 'Info',
    description: "Get the bot ping!",
    aliases: ['pinging'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
      let m = await message.channel.send(
        new MessageEmbed().setDescription("Pinging").setColor("#9400D3")
      );
      let ping = m.createdTimestamp - message.createdTimestamp;
      let beforeCall = Date.now();
      let dbping = Date.now() - beforeCall;
      let embed = new MessageEmbed()
      .setAuthor(`${message.author.username}` , message.author.displayAvatarURL({dynamic : true}))
        .setColor(`#16E9F3`)
        .addField(
          "Bot Ping",
          `${ping <= 200 ? "🟢" : ping <= 400 ? "🟡" : "🔴"} ${ping} ms `
        )
        .addField(
          "Api Ping",
          `${client.ws.ping <= 200 ? "🟢" : client.ws.ping >= 400 ? "🟡" : "🔴"} ${
            client.ws.ping
          } ms`
        )
      m.edit(embed)
    }
}