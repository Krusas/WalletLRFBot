/*CMD
  command: /testDeposit
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
  command: "/deposit",
  user_id: user.id
})

HTTP.post({
  url: webhook,
  body: {
    amount: 0.1,
    currency: "TON",
    hash: "Testhash526273hdjddj"
    // Error catch
     // ,message:"error message"
  }
})

