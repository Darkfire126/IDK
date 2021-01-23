



module.exports = {
    category: "Music",
    description: "set volume",
    callback: async ({ message, args, text, client, prefix, instance }) => {


   client.distube.setVolume(message, args[0]);
    }}