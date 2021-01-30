import { Discord, Description, On, ArgsOf } from "@typeit/discord";

@Discord("!")
@Description("Debug tasks")
export abstract class Everything {
  @On("ready")
  initialize(): void {
    console.log("Bot logged in.");
  }

  @On("message")
  recievedMessage([message]: ArgsOf<"message">): void {
    console.log("Got message", message.content);
  }
}
