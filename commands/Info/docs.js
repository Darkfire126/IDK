
const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js")
module.exports = {
    category: "Info",
    description: "get discord docs",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        let [query, branch] = args;
if (!query) return message.channel.send("Please include a search query!");
if (!branch) branch = "master";

fetch(`https://djsdocs.sorta.moe/v2/embed?src=${branch}&q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(json => {
        if (!json) return message.channel.send("Not found!");

        message.channel.send({ embed: json });
    })
    .catch(() => {
        message.channel.send("Couldn't fetch docs!");
    })}}