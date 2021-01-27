const canvacord = require('canvacord')
const levels = require('discord-xp')
const Discord = require('discord.js')
module.exports = {
    commands: ['leaderboard', 'xp-leaderboard'],
    description: 'Shows the xp lb in your current guild!',
    category: 'Info',
    guildOnly: true,
    run: async ({ message, text }) => {
const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
 
if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
 
const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
 
const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.
 
message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
    }
}