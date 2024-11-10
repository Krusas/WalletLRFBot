/*CMD
  command: /testWithdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const webhook = Libs.Webhooks.getUrlFor({
  command: "/completeWithdraw",
  user_id: user.id
})
HTTP.post({
  url: webhook,
  body: {
    ok: true,
    amount: 0.1,
    currency: "TON",
    to: "addressmeee",
    hash: "Testhash75jhffggh"
  }
})

