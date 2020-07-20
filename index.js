const config = require("./secret.json");
const Discord = require('discord-js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('message', (msg) => {
    if (msg.content.toLowerCase().indexOf('gonk') !== -1) {
        msg.channel.send('GONK!')
    }
});

client.login(config.token);