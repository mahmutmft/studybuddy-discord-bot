module.exports = {
    name: 'addtask',
    description: 'Adds a task to the task list',
    execute(message, args) {
        const task = args.join(' ');
        if (!task) {
            return message.reply('Please specify a task!');
        }
        message.reply(`Task added: ${task}`);
    },
};
