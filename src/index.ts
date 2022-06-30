// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { responseRandomiser } from './utils/responseRandomiser';
import { CronJob } from 'cron';

if (!process.env.DISCORD_BOT_ID) {
  throw new Error('You need to set the `DISCORD_BOT_ID` environment variable');
}

var job = new CronJob(
  '00 16 * * 5',
  async function () {
    const channel = await client.channels.fetch('157040349972267008');
    if (channel) {
      // @ts-ignore
      await channel.send(
        'https://i.kym-cdn.com/entries/icons/original/000/021/686/Cn8qj2oVIAIIQhT.jpg'
      );
    }
  },
  null,
  true,
  'Australia/Sydney'
);

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', async () => {
  console.log('Ready!');

  job.start();
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  responseRandomiser(message, /\bonion\b/i, [
    'https://www.youtube.com/watch?v=Lt1u6N7lueM',
  ]);
  responseRandomiser(message, /\bbad at maths?\b/i, [
    'https://i.imgur.com/ROS8oXA.jpg',
  ]);
  responseRandomiser(message, /\b(bevs?|beers?|bevington|beerio)\b/i, [
    'https://i.imgur.com/8sGs5oL.jpg',
  ]);
  responseRandomiser(message, /\b(rube|rube\s?mobile)\b/i, [
    'https://i.imgur.com/tNQB1wq.png',
  ]);
  responseRandomiser(message, /\bfriday lizard\b/i, [
    'https://i.imgur.com/fcYoyDr.jpg',
  ]);
  responseRandomiser(message, /\bthere it is\b/i, [
    'https://i.imgur.com/RG0BS1U.gifv',
  ]);
  responseRandomiser(message, /\bfinds a way\b/i, [
    'https://i.imgur.com/ZXn0rOu.gifv',
    'https://i.imgur.com/lNpjSrz.gifv',
  ]);
});

client.login(process.env.DISCORD_BOT_ID);
