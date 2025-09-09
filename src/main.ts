import { Client, Events, GatewayIntentBits, GuildChannel } from 'discord.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, client => {
	console.log(`Ready! Logged in as ${client.user.tag}`)

    const channel = client
        .channels
        .cache
        .filter(channel => (channel as GuildChannel).name == "teste")
        .first()

    if (channel?.isSendable()) {
        channel.send("Hello World")
    }
});

client.login(process.env.TOKEN)