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
 const jss = JSON.parse(content)
  const jk = JSON.parse(jss).answer
  const json = JSON.parse(jk)
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
    privatekey: PRIVATEKEY,
    id: params
  },
  success: "/confirm",
  folow_redirects: true
})

