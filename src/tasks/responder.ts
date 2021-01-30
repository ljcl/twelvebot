import { Discord, Description, On, ArgsOf, Guard } from "@typeit/discord";
import { NotBot } from "../utils/NotBot";
import { responseRandomiser } from "../utils/responseRandomiser";

@Discord("!")
@Description("Respond to people saying things")
export abstract class Responder {
  @On("message")
  @Guard(NotBot)
  recievedMessage([message]: ArgsOf<"message">): void {
    responseRandomiser(message, /\bhuh\b/, [
      "https://i.imgur.com/yokKUht.jpg",
      "https://i.imgur.com/Cryd37j.gif",
      "https://i.imgur.com/43dUzmi.jpg",
      "https://i.imgur.com/glZqBIh.png",
      "https://i.imgur.com/IoiZHx3.jpg",
      "https://i.imgur.com/gCKLrsx.gif",
      "https://i.imgur.com/2kAUT1w.png",
      "https://i.imgur.com/NXTJUEb.gif",
      "https://i.imgur.com/liUYz6Q.jpg",
      "https://i.imgur.com/PufkXZ3.jpg",
      "https://i.imgur.com/kkoKt0v.jpg",
      "https://i.imgur.com/QeU9bHy.gif",
    ]);
    responseRandomiser(message, /\bonion\b/, [
      "https://www.youtube.com/watch?v=Lt1u6N7lueM",
    ]);
    responseRandomiser(message, /\bbad at maths?\b/, [
      "https://i.imgur.com/ROS8oXA.jpg",
    ]);
    responseRandomiser(message, /\b(bevs?|beers?|bevington|beerio)\b/, [
      "https://i.imgur.com/8sGs5oL.jpg",
    ]);
    responseRandomiser(message, /\b(rube|rube\s?mobile)\b/, [
      "https://i.imgur.com/tNQB1wq.png",
    ]);
    responseRandomiser(message, /\bfriday lizard\b/, [
      "https://i.imgur.com/fcYoyDr.jpg",
    ]);
    responseRandomiser(message, /\bthere it is\b/, [
      "https://i.imgur.com/RG0BS1U.gifv",
    ]);
    responseRandomiser(message, /\bfinds a way\b/, [
      "https://i.imgur.com/ZXn0rOu.gifv",
      "https://i.imgur.com/lNpjSrz.gifv",
    ]);
  }
}
