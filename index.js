const config = require("./secret.json");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

const isGonk = (message, i = 0) => {
    const gonk = 'gonk';
    for (let j = 0; i < gonk.length && j < message.length; ++j)
        if (gonk[i] == message[j]) ++i;
    return i == gonk.length;
};

client.on('message', (message) => {
    const formattedMessage = message.content.toLowerCase();
    if (isGonk(formattedMessage)) {
        if (message.author.id === client.user.id) return;
        message.channel.send('GONK!');
    }
});

client.login(config.token);