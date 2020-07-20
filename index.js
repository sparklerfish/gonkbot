const config = require("./secret.json");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', (message) => {
    const formattedMessage = message.content.toLowerCase().split(" ").join("");
    if (formattedMessage.indexOf('gonk') !== -1) {
        if (message.author.id === client.user.id) return;
        message.channel.send('GONK!');
    }
});

client.login(config.token);