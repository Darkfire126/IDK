const db = require('quick.db')
const ms = require("ms")
const Discord = require('discord.js')
const { de } = require('date-fns/locale')

module.exports = {
    category: "Moderation",
    description: "mute someone along you are a moderator",
    requiredPermissions: ['KICK_MEMBERS'],
    expectedArgs: '<users @> <reason> ',
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
    let mutedrole = db.get(`moderation.${message.guild.id}.muterole`)
    if(!mutedrole) return message.channel.send(`
    No Muterole found try doing <your prefix>muterole enable <@mute role id>
    
    `)

    let toggle = mutedrole.toggle
    if (!toggle || toggle == null || toggle == false) return message.channel.send(`
    No Muterole found try doing <your prefix>muterole enable <@mute role id>
    
    `)
    
    var User = message.mentions.users.first();
    if(!User) return message.channel.send(`
    
    Please mention a user!
    Usage: <your prefix>mute <@user> <time> <reason>
    `)
    db.fetch(`mutes_${user.id}`)


 let member = await message.guild.members.fetch(User);

 if(!member) return message.reply('They are not in the server!')
var rawime = args[1];
var time = ms(rawime)
if(!time) return message.reply(`

No time found!
Usage: <your prefix>mute <@user> <time> <reason>
`)

var reason = args.splice(2).join(' ')
if(!reason) return message.reply(`
No reason!
Usage: <your prefix>mute <@user> <time> <reason>


`)

const embed = new Discord.MessageEmbed()
.setTitle(`You were muted! in ` + message.guild.name)
.addField(`Expires:`, rawime, true)
.addField('Reason', reason, true)



    user.send(embed);

    const role = message.guild.roles.cache.find(r => r.id === mutedrole.role)

    member.roles.add(role)
const cosnt = new Discord.MessageEmbed()
.setTitle(user + ` has been muted!`)
.setColor('RANDOM')
    message.channel.send(cosnt)
    db.add(`mutes_${user.id}`, 1)

     setTimeout(async() => {
        member.roles.remove(role)
    }, time);
    }}