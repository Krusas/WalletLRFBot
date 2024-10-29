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
var ADMIN = "7487397851";

// << PAYMENTS >>
var PAYMENTSURL = "https://api.bots.business/v1/bots/1280450/new-webhook?command=connect&public_user_token=6fa1ea88aa1bdbc601e00ff220286ee1&user_id=34657290";

var PRIVATEKEY = User.getProperty("privateKey");

// << BROADCAST >>
var BROADCASTURL = "https://api.bots.business/v1/bots/1280450/new-webhook?command=%2FonWebhook&public_user_token=f662298ba9bb9676f757fd562cb58cd1";

// MAKE DIFFERENT NAME TO AVOID MERGE.
var DATANAME = "DATA_" + bot.name;
