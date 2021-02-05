const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
module.exports = {
  description: "bot will remind your of something!",
  category: "Fun",
  callback: async ({ message, args, text, client, prefix, instance }) => {
    let timeuser = args[0];
    let reason = args.slice(1).join(" ");

    if (!timeuser)
      return message.reply(":x: You should enter time EXAMPLE: 1m 1s 1d");

    if (!reason) return message.reply(":x: You should enter reason");

    db.set(`remind.${message.author.id}`, Date.now() + ms(timeuser));
    message.channel.send(`Alright, I will remind you in ` + timeuser + ` for ` + reason);
    const interval = setInterval(function () {
      if (Date.now() > db.fetch(`remind.${message.author.id}`)) {
        db.delete(`remind.${message.author.id}`);
        const nnwing = new MessageEmbed()
        .setTitle("Reminding you")
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`**Remind:** \n${reason}`)
        message.author
          .send(nnwing)
          .catch((e) => console.log(e));
        clearInterval(interval);
      }
    }, 1000);
  },
};
