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
  //  bot.sendMessage(chatId, "Expand this Tweet?", {
      // reply_to_message_id: msg.message_id,
      // reply_markup: {
      //  inline_keyboard: [
      //    [
      //      {
      //        text: "✅ Yes",
   //             callback_data: link;
              // callback_data has a 64 byte limit!!!
      //      },
       //     {
         //     text: "❌ No",
         //     callback_data: `no`,
        //    },
        //  ],
      //  ],
     // },
    // });
  // });
// }
                                    // );
                
  

// 5. React to inline keyboard reply
  const chatId = message.chat.id;
  const msgId = message.message_id;
  //const link = data;

  //if (link === "no") {
    // 6a. Delete the bot reply so it doesn’t spam the chat
   // bot.deleteMessage(chatId, msgId);
   // fetch(`https://qckm.io?m=twitter.link.cancel&v=1&k=${process.env.QUICKMETRICS_TOKEN}`);
  //  return;
  //}

  const expandedLink = link.replace("twitter.com", "vxtwitter.com");
  
  // 6b. Replace the reply with an expanded Tweet link
  bot.editMessageText(expandedLink, {
    chat_id: chatId,
    message_id: msgId,
  });
}};
