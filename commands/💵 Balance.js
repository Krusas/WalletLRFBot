/*CMD
  command: 💵 Balance
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
    { title: "USDT", command: "/balance USDT" },
    { title: "DGB", command: "/balance DGB" },
    { title: "DASH", command: "/balance DASH" }
  ],
  [
    { title: "MATIC", command: "/balance MATIC" },
    { title: "SOL", command: "/balance SOL" },
    { title: "RVN", command: "/balance RVN" }
  ],
  [
    { title: "BNB", command: "/balance BNB" },
    { title: "LTC", command: "/balance LTC" },
    { title: "BCH", command: "/balance BCH" }
  ],
  [{ title: "LTCT (TEST)", command: "/balance LTCT" },{ title: "TON", command: "/balance TON" }]
]

Bot.sendInlineKeyboard(
  buttons,
  "Please make a choice. After that, another command `/balance` will be started with USDT"
)
