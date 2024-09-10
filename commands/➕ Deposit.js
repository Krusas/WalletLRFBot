/*CMD
  command: ➕ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!privateKey) {
  return
}
var buttons = [
  [
    { title: "USDT", command: "/deposit USDT" },
    { title: "DGB", command: "/deposit DGB" },
    { title: "DASH", command: "/deposit DASH" }
  ],
  [
    { title: "MATIC", command: "/deposit MATIC" },
    { title: "SOL", command: "/deposit SOL" },
    { title: "RVN", command: "/deposit RVN" }
  ],
  [
    { title: "BNB", command: "/deposit BNB" },
    { title: "LTC", command: "/deposit LTC" },
    { title: "BCH", command: "/deposit BCH" }
  ],
  [{ title: "LTCT (TEST)", command: "/deposit LTCT" },{ title: "TON", command: "/deposit TON" }]
]

Bot.sendInlineKeyboard(
  buttons,
  "Please make a choice. After that, another command `/deposit` will be started with USDT"
)
