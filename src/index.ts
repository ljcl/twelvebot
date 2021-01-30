import { Client } from "@typeit/discord";

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static start(): void {
    if (!process.env.DISCORD_BOT_ID) {
      throw new Error(
        "You need to set the `DISCORD_BOT_ID` environment variable"
      );
    }
    this._client = new Client();

    this._client.login(
      process.env.DISCORD_BOT_ID,
      `${__dirname}/tasks/*.ts`,
      `${__dirname}/tasks/*.js`
    );
  }
}

Main.start();
