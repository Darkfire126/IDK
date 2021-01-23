module.exports = {
    category: "Info",
    description: "NPM packages",
    callback: async ({ message, args, text, client, prefix, instance }) => {
    const package = args.slice(0).join
    if(!package) return User.send("Please use a npm package example: <PREFIX>npm discord.js")
    message.channel.send(`https://npmjs.com/package/${package}`)
    
    
    
    
    
    
    }}