const { MessageEmbed: Embed } = require('discord.js');

let answers = [
  'Yes, definitely so.',
  'No, definitely not.',
  'Ask again later.',
  'It is uncertain.',
  'Odds are not in your favor.',
];

module.exports = {
  commands: '8b',
  category: 'Fun',
  description: 'You already know',
  aliases: ['8ball', '8b'],
  callback: async ({ message, args, text, client, prefix, instance }) => {
    let question = args.slice().join(' ');
    var embed = new Embed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addField(`Question`, question);

    if (!question[1]) {
      return await message.delete().then(() => {
        message.channel.send('Please ask a full question.');
      });
    }

    let number = Math.floor(Math.random() * answers.length);

    if (number == 0) {
      embed.addField(`Answer`, answers[0]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
    if (number == 1) {
      embed.addField(`Answer`, answers[1]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
    if (number == 2) {
      embed.addField(`Answer`, answers[2]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
    if (number == 3) {
      embed.addField(`Answer`, answers[3]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
    if (number == 4) {
      embed.addField(`Answer`, answers[4]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
    if (number == 5) {
      embed.addField(`Answer`, answers[5]);

      return await message.delete().then(() => {
        message.channel.send(embed);
      });
    }
  },
};
