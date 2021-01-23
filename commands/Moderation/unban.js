const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Moderation",
    description: "unban someone along you are a moderator",
    expectedArgs: "<targeted users id>",
    requiredPermissions: ['BAN_MEMBERS'],
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if(message.author.bot || message.channel.type === "dm") return;
let toBan = await client.users.fetch(args[0])

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I need BAN_MEMBERS permission or ADMINISTRATOR permission to execute this command!").then(m => m.delete({ timeout: 5000}));

const reason = args[1] || "There was no reason!";

message.guild.members.unban(toBan, reason)
const Messaesda = new MessageEmbed()
.setTitle(`${toBan} has been unbanned from the server!`)
.setColor('RANDOM')
message.channel.send(Messaesda).then(m => m.delete({ timeout: 5000}));
}

}