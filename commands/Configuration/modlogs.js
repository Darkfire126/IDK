  
const Discord = require('discord.js');
const Guild = require('../../schemas/guild-schema')
const mongoose = require('mongoose') 
module.exports = {
    minArgs: 1,
    expectedArgs:'<enable/disable> <channel>',
    description: 'When a moderation action happens it will log it to a channel!',
    category: 'Configuration',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        let toggling = ["disable", "enable"];
        const channel = await message.mentions.channels.first();
        if (!args[1]) {
            return message.channel.send(new Discord.MessageEmbed()
            .setColor("#16E9F3")
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .addField("Usage", "`modlogs <enable | disable> <channel mention>`")
            .setDescription("Please include a valid option `enable`, `disable`"));
        }
        if (!channel)
            return message.channel.send('I cannot find that channel. Please mention a channel within this server.').then(m => m.delete({timeout: 5000}));
            if (args[1].toLowerCase() !== 'disable' && args[0].toLowerCase() !== 'enable') {
                return message.channel.send(new Discord.MessageEmbed()
                .setColor("#16E9F3")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .addField("Usage", "`modlogs <enable | disable> <channel mention>`")
                )
                }
                if (args[1].toLowerCase() === "enable") {
                    await Guild.findOne({
                        guildID: message.guild.id
                    }, async (err, guild) => {
                        if (err) console.error(err);
                        if (!guild) {
                            const newGuild = new Guild({
                                guildID: message.guild.id,
                                logChannelID: channel.id
                            });
            
                            await newGuild.save()
                            .then(result => console.log(result))
                            .catch(err => console.error(err));
            
                            return message.channel.send(`The mod logs channel has been set to ${channel}`);
                        } else {
                            guild.updateOne({
                                logChannelID: channel.id
                            })
                            .then(result => console.log(result))
                            .catch(err => console.error(err));
            
                            return message.channel.send(`The mod logs channel has been set to ${channel}`);
                        };
                    });
                }
                if (args[0].toLowerCase() === "disable") {
                    Guild.findOneAndDelete({
                        logChannelID
                    })
                        return message.channel.send("The mod log has been disabled.");
                    }
                
            }
                }