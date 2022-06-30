import { Message } from 'discord.js';

const recentLog = new Map<string, boolean>();

/**
 * Randomly pick one item from an array and reply to the discord message
 *
 * Won't send more than one response per channel/author every 10 seconds
 */
const responseRandomiser = (
  message: Message,
  /** Single word to trigger responses for */
  matcher: RegExp,
  /** List of response to randomise from */
  responses: string[]
) => {
  if (matcher.exec(message.content)) {
    const identifier = `${message.channelId}-${message.guildId}-${message.author.id}`;

    if (!recentLog.get(identifier)) {
      message.reply(responses[Math.floor(Math.random() * responses.length)]);
    }

    recentLog.set(identifier, true);

    setTimeout(() => {
      recentLog.delete(identifier);
    }, 10000);
  }
};

export { responseRandomiser };
