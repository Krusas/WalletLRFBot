/*CMD
  command: /confirm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Swap
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!params && content) {
  var json = JSON.parse(JSON.parse(content).answer)
  if (json.message) {
    Bot.sendMessage(json.message)
    return
  }
  Bot.sendMessage(
    `Your *swap* ${json.amount} ${json.currency1} to receive ${json.amount2} ${json.currency2} has been Confirmed\n\nHash: ${json.hash}`
  )
  return
}
HTTP.post({
  url: "https://api.bots.business/v2/bots/1280450/web-app/Connect",
  body: {
    method: "swap",
    id: params
  },
  success: "/confirm"
})
