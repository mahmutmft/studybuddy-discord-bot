const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const commands = new Map();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

client.on('messageCreate', (message) => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commands.has(commandName)) {
        const command = commands.get(commandName);
        command.execute(message, args);
    }
});
