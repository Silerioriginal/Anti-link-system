module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot) return;

        if(message.content.includes("https://") ||  message.content.includes("http://") || message.content.includes("discorg.gg")) {
            message.delete();

            message.channel.send({content: `${message.author}, non ci provare, non puoi inviare link qui!`});

        }
    }
}