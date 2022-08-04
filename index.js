import * as dotenv from "dotenv";
import Tgfancy from "tgfancy";
import fetch from "node-fetch";

dotenv.config();

const TWITTER_URL = /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/gim;
const bot = new Tgfancy(process.env.BOT_TOKEN, { polling: true });

// 1. Match Twitter links
bot.onText(TWITTER_URL, (msg, match, error) => {
  // 2. Get the current Chat ID
  const chatId = msg.chat.id;

  // 3. Get message text to parse links from
  const msgText = msg.text;

  // 4. Iterate through all links in the message
  msgText.match(TWITTER_URL).forEach((link) => {
              callback_data: link
       });


bot.on("callback_query", async (answer) => {
  const chatId = answer.message.chat.id;
  const msgId = answer.message.message_id;
  const link = answer.data;

  const expandedLink = link.replace("twitter.com", "vxtwitter.com");

  // 6b. Replace the reply with an expanded Tweet link
  bot.editMessageText(expandedLink, {
    chat_id: chatId,
    message_id: msgId,
  });
};
