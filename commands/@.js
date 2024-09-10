/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var urls =
  "https://api.bots.business/v1/bots/1280450/new-webhook?&command=connect&public_user_token=6fa1ea88aa1bdbc601e00ff220286ee1&user_id=34657290" // CHANGE URL USE COMMAND /url TO CHANGE URL
//YOU WILL RECEIVE YOUR PAYMENT SUCCESSFUL AND FAILED

// PAYMENTS
var url = User.getProperty("URL", urls)
var privateKey = User.getProperty("privateKey")
var admin = "6963873891"

// BROADCAST 
var urlBroadcast = "https://api.bots.business/v1/bots/1280450/new-webhook?&command=%2FonWebhook&public_user_token=f662298ba9bb9676f757fd562cb58cd1" // NOT RECOMMEND TO CHANGE URL
var data_name = "DATA_BASE_OF_WALLETLRF" //OWN NAME DATA BASE TO STORE USERS
// EVERYONE HAS ACCESS CAN DELETE OR SAVE NEW USER, IF YOU LEAK YOUR DATA NAME, SO SAVE IT PRIVATELY ALSO YOUR BOT TOKEN
