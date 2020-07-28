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
        if (message.slice(j, j + 4) === "http") {
            while (true) {
                j++
                if (message[j] === " ") break;
            };
        }

        if (gonk[i] === message[j]) i++;
        j++;
    }
    return i === gonk.length;
};

client.on('message', (message) => {

    const formattedMessage = message.content.toLowerCase();
    if (isGonk(formattedMessage) && message.author.id !== client.user.id) {
        message.channel.send('GONK!');
    }
});

client.login(config.token);