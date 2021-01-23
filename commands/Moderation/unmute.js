const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Moderation",
    description: "unmute someone along you are a moderator",
    expectedArgs: '<users @>',
    requiredPermissions: ['KICK_MEMBERS'],
    callback: async ({ message, args, text, client, prefix, instance }) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let role = message.guild.roles.cache.find(x => x.name === "Muted");

if(!user.roles.cache.has(role)) return message.channel.send("This member isn't muted").then(m => m.delete({ timeout: 5000}));

user.roles.remove(role);

const Emmeme = new MessageEmbed()
.setTitle(`${user} has been unmuted`)
.setColor('RANDOM')
message.channel.send(Emmeme).then(m => m.delete({ timeout: 5000}));
}}