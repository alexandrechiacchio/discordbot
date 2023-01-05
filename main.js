const { Client, Intent } = require('discord.js');
const client = new Client({ intents: 514}); // GUILD_MEMBERS & GUILD_MESSAGES MSK
const config = require("./config.json");


client.on("ready", () => {
    console.log(`Usuários: ${client.users.cache.size}, Canais: ${client.channels.cache.size}, Servers: ${client.guilds.cache.size}`);
    client.user.setPresence({game: { name: 'comando', type: 1, url: ''}})
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Latência: ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }

});

client.login(config.token);