/*CMD
  command: /swap
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
  Api.sendMessage({
    text: `Your *swap* ${json.amount} ${json.currency1} to receive ${json.amount2} ${json.currency2} 
      Fee: ${json.Fee} ${json.currency1}\n\n-You have 1 minute to Confirm\n*Confirmation ID*: ${json.id}`,
    reply_markup: {
      inline_keyboard: [
        [{ text: "✅ CONFIRM", callback_data: "/confirm " + json.id }]
      ]
    },
    parse_mode: "markdown"
  })
  return
}

const [amount, currency1, currency2] = params.split(" ")
if (amount == "undefined") {
  Bot.sendMessage(`*Enter Amount in ${currency1}*`)
  Bot.run({
    command: "/onSwap",
    options: { currency1, currency2 }
  })
  return
}

HTTP.post({
  url: "https://api.bots.business/v2/bots/1280450/web-app/Connect",
  body: {
    method: "swap",
    privatekey: PRIVATEKEY,
    currency1,
    currency2,
    amount
  },
  success: "/swap",
  folow_redirects: true
})
