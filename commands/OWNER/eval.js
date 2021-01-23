const Discord = require("discord.js")
module.exports = {
    category: "OWNER",
    description: "SMH",
    aliases: ['e'],
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
      message.delete()
const embed = new Discord.MessageEmbed()
.addField("Input", "```js\n" + args.join(" ") + "```")

try {
const code = args.join(" ").replace(/```js/g, "").replace(/```/g, "");
if (!code) return message.channel.send("Please include the code.");
let evaled;

if (code.includes(`process.env.TOKEN`) || code.includes(`token`) || code.includes(`client.token`)) {
evaled = null;
} else {
evaled = eval(code);
}

if (typeof evaled !== "string") evaled = require("util").inspect(evaled, {depth: 0});

let output = clean(evaled);
if (output.length > 1024) {
const {body} = await post("https://hastebin.com/documents").send(output);
embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("#76f7fb");
} else {
embed.addField("Output", "```js\n" + output + "```").setColor("#76f7fb").addField(`Type:`, `\`\`\`js
${typeof evaled}
\`\`\``)
}

const msg = await message.channel.send(embed);
await msg.react("❌") 

let filter = (reaction, user) => {
    return user.id === message.author.id;
  };
  let collector = msg.createReactionCollector(filter, { time: 60000 });
  collector.on("collect", (reaction, user) => {
    switch (reaction.emoji.name) {

      case "❌":
          const e = new Discord.MessageEmbed()
          .setColor("#76f7fb")
            .setDescription(`\`\`\`
Hidden :C
\`\`\``)
        msg.edit(e)
        break;
    }
}) 
} catch (error) {
let err = clean(error);
if (err.length > 1024) {
const {body} = await post("https://hastebin.com/documents").send(err);
embed.addField("Output", `https://hastebin.com/${body.key}.js`).setColor("RED");
} else {
embed.addField("Output", "```js\n" + err + "```").setColor("RED");
}

message.channel.send(embed);
}
}




}
function clean(string) {
if (typeof text === "string") {
return string.replace(/`/g, "`" + String.fromCharCode(8203))
.replace(/@/g, "@" + String.fromCharCode(8203))
} else {
return string;
}}