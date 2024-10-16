/*CMD
  command: ➖ Withdrawal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!privateKey)  return;

var buttons = [
  [
    { title: "USDT", command: "/withdraw false USDT false" },
    { title: "DGB", command: "/withdraw false DGB false" },
    { title: "DASH", command: "/withdraw false DASH false" }
  ],
  [
    { title: "MATIC", command: "/withdraw false MATIC false" },
    { title: "SOL", command: "/withdraw false SOL false" },
    { title: "RVN", command: "/withdraw false RVN false" }
  ],
  [
    { title: "BNB", command: "/withdraw false BNB false" },
    { title: "LTC", command: "/withdraw false LTC false" },
    { title: "BCH", command: "/withdraw false BCH false" }
  ],
  [{ title: "LTCT (TEST)", command: "/withdraw false LTCT false" },{ title: "TON", command: "/withdraw false TON false" }]
];

Bot.sendInlineKeyboard(
  buttons,
  "Please make a choice. After that, another command `/withdraw` will be started with Amount, Currency and Address."
);
