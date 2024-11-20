/*CMD
  command: /onSwap
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 💱 Swap
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var currency1 = options.currency1
var currency2 = options.currency2
HTTP.post({
  url: "https://api.bots.business/v2/bots/1280450/web-app/Connect",
  body: {
    method: "swap",
    privatekey: PRIVATEKEY,
    currency1,
    currency2,
    amount: message
  },
  success: "/swap"
})

