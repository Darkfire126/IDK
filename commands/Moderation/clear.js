const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Moderation",
    description: "clear messages along you are a moderator",
    requiredPermissions: ['MANAGE_MESSAGES'],
    expectedArgs: "<messages to delete>",
    aliases: ['purge'],
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        if (!args[0]) {
            return message.channel.send(`Please enter a amount 1 to 100`).then(m => m.delete({ timeout: 5000}));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);

        const embed = new MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`successfully deleted ${deleteAmount}`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed).then(m => m.delete({ timeout: 5000}));
    }
}