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
  "https://api.bots.business/v1/bots/1280450/new-webhook?&command=connect&public_user_token=c2546dca245da24878bcdc1e1bf3a02a&user_id=34657290"
var url = User.getProperty("URL", urls)
var privateKey = User.getProperty("privateKey")
