/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (admin == user.telegramid) {
  Bot.sendInlineKeyboard(
    [
      {
        title: "➡️ Forward to broadcast",
        url:
          "https://t.me/share/url?text=/broadcast " +
          data_name +
          " " +
          bot.token
      }
    ],
    "To Broadcast send forward to @PayLowRateFeeBot! don't forward with anyone."
  )
  return
}
Bot.sendMessage("Not admin")
