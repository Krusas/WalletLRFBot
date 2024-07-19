/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (params && content) {
  Bot.sendMessage(
    "Available Balance: *" +
      JSON.parse(content).answer +
      " " +
      params.toUpperCase() +
      "*"
  )
  return
}
HTTP.post({
  url: url,
  body: {
    key: "balance",
    currency: params,
    private_key: privateKey
  },
  success: "/balance " + params
})
