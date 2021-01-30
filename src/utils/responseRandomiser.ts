import { Message } from "discord.js";

/** Randomly pick one item from an array and reply to the discord message */
const responseRandomiser = (
  message: Message,
  /** Single word to trigger responses for */
  matcher: RegExp,
  /** List of response to randomise from */
  responses: string[]
) => {
  if (matcher.exec(message.content)) {
    message.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
};

export { responseRandomiser };
