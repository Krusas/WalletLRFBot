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
var admin = "7487397851"

// << PAYMENTS >>
var urls =
  "https://api.bots.business/v1/bots/1280450/new-webhook?&command=connect&public_user_token=6fa1ea88aa1bdbc601e00ff220286ee1&user_id=34657290"
// CHANGE PAYMENTS URL TO GET NOTIFICATIONS EVERY REQUEST TO SET COMMAND: /url
var url = User.getProperty("URL", urls)
var privateKey = User.getProperty("privateKey")

// << BROADCAST >>
var urlBroadcast =
  "https://api.bots.business/v1/bots/1280450/new-webhook?&command=%2FonWebhook&public_user_token=f662298ba9bb9676f757fd562cb58cd1"

// MAKE DIFFERENT NAME TO AVOID MERGE.
var data_name = "DATA_" + bot.name

