module.exports = {
    category: "Music",
    description: "plays some music",
    callback: async ({ message, args, text, client, prefix, instance }) => {
client.distube.play(message, args.join(" "));
    }}