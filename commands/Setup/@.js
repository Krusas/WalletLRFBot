/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// << ADMIN >>
var admin = "7487397851";

// << PAYMENTS >>
var urls = "https://api.bots.business/v1/bots/1280450/new-webhook?&command=connect&public_user_token=753a0d91706eca664fb7f121db27001f&user_id=34657290";

// CHANGE PAYMENTS URL TO NOTIFY EVERY REQUEST TO SET URL COMMAND: /url
var url = User.getProperty("URL") || urls;
var privateKey = User.getProperty("privateKey");

// << BROADCAST >>
var urlBroadcast = "https://api.bots.business/v1/bots/1280450/new-webhook?&command=%2FonWebhook&public_user_token=ea9fec9540c07c505cce1ee457e1f23f&user_id=34657290";

// MAKE DIFFERENT NAME TO AVOID MERGE.
var dataName = "DATA_" + bot.name;
