const config = require("./config");
const tmi = require("tmi.js");
const { isClientTwitch, setClientTwitch } = require("./tools/global/global");
const connectTwitch = async () => {
  if (!isClientTwitch()) {
    const client = new tmi.Client({
      options: { debug: true },
      identity: {
        username: config.username,
        password: config.token,
      },
      channels: config.channels,
    });

    await client.connect();
    setClientTwitch(client);
  }
};
module.exports = connectTwitch;
