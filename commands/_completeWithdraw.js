/*CMD
  command: /completeWithdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  return
}

const json = JSON.parse(content)

if (json.ok) {
  Bot.sendMessage(`Withdrawal complete *${json.amount} ${json.currency}* to ${json.to}\n\n${json.hash}`
  )
  return
}

Bot.inspect(content)

