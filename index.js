require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/rubber-rubber-bot-ping", async ({ ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `Pong!\nLatency: ${latency}ms`
  });
});
app.command("/rubber-rubber-bot-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
      "*RUBBER-RUBBER BOT — COMMANDS*\n\n" +
      "*Ping*\n" +
      "`/rubber-rubber-bot-ping` — Check bot latency\n\n" +
      "*Help*\n" +
      "`/rubber-rubber-bot-help` — Show this command menu\n\n" +
      "*Hello*\n" +
      "`/rubber-rubber-bot-hello` — Say hello to the bot\n\n" +
      "*About*\n" +
      "`/rubber-rubber-bot-about` — Learn more about the bot and its creator\n\n" +
      "*8-Ball*\n" +
      "`/rubber-rubber-bot-8ball` — Ask a question and get a random answer\n\n" +
      "*Fact*\n" +
      "`/rubber-rubber-bot-fact` — Get a random fact\n\n" 
      
  });
});

app.command("/rubber-rubber-bot-hello", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: "Yo!  Rubber-Rubber Bot is online and ready!"
  });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();


app.command("/rubber-rubber-bot-about", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
      "*RUBBER-RUBBER BOT — ABOUT*\n\n" +
      "Built by red0x.\n\n" +
      "Rubber-Rubber Bot is a custom Slack bot made for experimenting, learning, and adding random useful stuff to the workspace.\n\n" +
      "*Creator:* red0x\n" +
      "*Status:* Online\n" +
      "*Built with:* Node.js + Slack Bolt\n\n" +
      "Still a work in progress. More commands coming soon."
  });
});

app.command("/rubber-rubber-bot-8ball", async ({ ack, respond, command }) => {
  await ack();

  const question = command.text.trim();

  if (!question) {
    await respond({
      text: "Ask me a question first.\nExample: `/rubber-rubber-bot-8ball will I become rich?`"
    });
    return;
  }

  const answers = [
    "Definitely.",
    "Most likely.",
    "Yeah, probably.",
    "The odds look good.",
    "Ask me again later.",
    "Not sure about that one.",
    "Maybe.",
    "Probably not.",
    "I wouldn't count on it.",
    "Nope.",
  ];

  const answer = answers[Math.floor(Math.random() * answers.length)];

  await respond({
    text: `*8-BALL*\n\nQuestion: ${question}\nAnswer: ${answer}`
  });
});

app.command("/rubber-rubber-bot-fact", async ({ ack, respond }) => {
  await ack();

  const facts = [
   "Octopuses have three hearts(basically three life spawns).",
  "Sharks existed before trees.",
  "A cloud can weigh more than a million pounds.",
  "There are volcanoes on the ocean floor.",
  "The shortest war in recorded history lasted less than an hour.",
  "Sound travels faster through water than in air.",
  "The fingerprints of koala are suprisingly similar to human fingerprints.",
  "Some turtles can breath through their skin."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  await respond({
    text: `FACT\n${randomFact}`
  });
});

