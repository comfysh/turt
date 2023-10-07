# turt: Comfy Discord Bot

Have you ever thought "*Wow, I wish that comfy.sh had a Discord bot with a range of miscellaneous commands for me to use*"? Well now we do!

The functionality is TBD but boy oh boy is the framework there!

## How to run

turt is running on a [Node.js](https://nodejs.org/) backend utilizing [discord.js](https://discord.js.org/), so make sure that you are running the required version of Node.js (as of writing this is 16.11.0). Given some other utility and misc functions, this may be higher, so take this all with a grain of salt and check out [package.json](package.json) for the full requirements.

- Clone the repo to your machine
- Run `node install` to download all dependencies
- Create a `.env` file in the project directory to hold your Discord bot token and client id (labelled with variables `TOKEN` and `CLIENT_ID`)
  - This can similarly be done with regular environment variables, but [dotenv](https://www.npmjs.com/package/dotenv) exists to help drastically with running this locally
- Finally, run `npm start` to get the bot going!

If you would like to make any new slash functions, use `deploy-commands.js` to upload those new slash functions to any servers the bot is in (this can also be done on a server-by-server basis, but we're reckless).
