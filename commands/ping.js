const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Test response time of turt'),
	async execute(interaction) {
        // Reply with a pong and how long it took
		await interaction.reply(`Pong!\`${Date.now() - interaction.createdTimestamp}ms\``);
	},
};
