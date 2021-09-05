const config = require('./secret.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

const isGonk = (message) => {
    let i = 0, j = 0;
    const gonk = 'gonk';
    while (i < gonk.length && j < message.length) {
        if (gonk[i] === message[j]) i++;
        j++;
    }
    return i === gonk.length;
};

const removeUrl = (string) => `${string}`.replace(/http\/?[^(\s|$)]+(\s|$)/g, ''); 

const formatMessage = (message) => {
    message = message.toLowerCase();
    return removeUrl(message);
}

client.on('message', (message) => {
    const formattedMessage = formatMessage(message.content);
    if (isGonk(formattedMessage) && message.author.id !== client.user.id) {
        message.channel.send('GONK!');
    }
});

client.login(config.token);