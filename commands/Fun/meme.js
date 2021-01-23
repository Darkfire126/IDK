const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  description: "Get a meme!",
  category: "Fun",
  callback: async ({ message, args, text, client, prefix, instance }) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};