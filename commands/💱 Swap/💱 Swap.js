/*CMD
  command: 💱 Swap
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💱 Swap
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!PRIVATEKEY) return

var buttons = [
  [
    { title: "TON/USDT", command: "/swap undefined TON USDT" },
    { title: "DGB/USDT", command: "/swap undefined DGB USDT" },
    { title: "DASH/USDT", command: "/swap undefined DASH USDT" }
  ],
  [
    { title: "MATIC/USDT", command: "/swap undefined MATIC USDT" },
    { title: "SOL/USDT", command: "/swap undefined SOL USDT" },
    { title: "RVN/USDT", command: "/swap undefined RVN USDT" }
  ],
  [
    { title: "BNB/USDT", command: "/swap undefined BNB USDT" },
    { title: "LTC/USDT", command: "/swap undefined LTC USDT" },
    { title: "BCH/USDT", command: "/swap undefined BCH USDT" }
  ],
  [
    { title: "PIVX/USDT", command: "/swap undefined PIVX USDT" },
    { title: "XVG/USDT", command: "/swap undefined XVG USDT" },
    { title: "SYS/USDT", command: "/swap undefined SYS USDT" }
  ]
]

Bot.sendInlineKeyboard(
  buttons,
  "Please make a choice. After that, another command `/swap` will be started with Amount, currency1, currency2 (*E.g.* `/swap 1 TON USDT`)"
)
