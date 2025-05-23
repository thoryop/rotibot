import { ChatInputCommandInteraction, Message } from 'discord.js';

export const data = {
    name: 'tag',
    description: 'Create a tag in the server',
    async execute(messageOrInteraction: ChatInputCommandInteraction<'cached'> | Message<true>) {
        const rickrollGifUrl = 'https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif';
        if (messageOrInteraction instanceof ChatInputCommandInteraction) {
            await messageOrInteraction.reply({ content: rickrollGifUrl, ephemeral: true });
        } else if (messageOrInteraction instanceof Message) {
            await messageOrInteraction.reply(rickrollGifUrl);
        }
    },
};
