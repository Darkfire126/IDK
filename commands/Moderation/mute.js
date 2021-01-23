const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "Moderation",
    description: "mute someone along you are a moderator",
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: '<users @> <reason> ',
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

if(!user) message.channel.send("This user can't be found anywhere in this server").then(m => m.delete({ timeout: 5000}));

if(user.id === message.author.id) return message.channel.send("You cannot mute yourself").then(m => m.delete({ timeout: 5000}));

let role = message.guild.roles.cache.find(x => x.name === "Muted");

if(!role) return message.channel.send("Cannot find the muted role, called Muted (Note make sure this role has no permission to talk in channels!)").then(m => m.delete({ timeout: 5000}));

let reason = args.slice(1).join(" ");
if(reason === null) reason = "Unspecified"

user.roles.add(role);
const conrs = new MessageEmbed()
.setTitle(`${message.author.tag} has been muted for the following reason: ${reason}`)
.setColor("RANDOM")
await message.channel.send(conrs).then(m => m.delete({ timeout: 10000}));

user.send(`Hello there. You have been muted from ${message.guild.name} for the following reason: ${reason}`);
}
}