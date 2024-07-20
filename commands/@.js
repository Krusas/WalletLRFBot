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
  "https://api.bots.business/v1/bots/1280450/new-webhook?&command=connect&public_user_token=c2546dca245da24878bcdc1e1bf3a02a&user_id=34657290" // CHANGE URL USE COMMAND /url TO CHANGE URL
//YOU WILL RECEIVE YOUR PAYMENT SUCCESSFUL AND FAILED

// PAYMENTS
var url = User.getProperty("URL", urls)
var privateKey = User.getProperty("privateKey")
var admin = "6963873891"

// BROADCAST 
var urlBroadcast = "https://api.bots.business/v1/bots/1280450/new-webhook?&command=%2FonWebhook&public_user_token=bb39443c77bb89f8566d24b9a6a1edb0" // NOT RECOMMEND TO CHANGE URL
var data_name = "DATA_BASE_OF_WALLETLRF" //OWN NAME DATA BASE TO STORE USERS
// EVERYONE HAS ACCESS CAN DELETE OR SAVE NEW USER IF YOU LEAK YOUR DATA NAME SAVIT IT PRIVATELY ALSO YOUR BOT TOKEN
