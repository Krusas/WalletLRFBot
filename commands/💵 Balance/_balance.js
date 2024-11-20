/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💵 Balance
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (params && content) {
  const { ok, balance, currency, message } = JSON.parse(
    JSON.parse(content).answer
  )

  ok
    ? Bot.sendMessage(`Available Balance: *${balance} ${currency}*`)
    : Bot.inspect("Error: " + message)

  return
}

// url and privateKey setup at command @

HTTP.post({
  url: URL,
  body: { key: "balance", currency: params, private_key: PRIVATEKEY },
  success: `/balance ${params}`,
  folow_redirects: true
})
