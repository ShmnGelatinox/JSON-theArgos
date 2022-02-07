require("dotenv").config();

const port = 3001;
const cors = require("cors");
const express = require("express");
const app = express();
const db = require("./services/Db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Handle CORS requests
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Handle JSON post data
app.use(express.json());

app.get("/api/home", async (req, res) => {
  res.send(await db.$queryRaw`SELECT * FROM users`);
});

app.get("/api/royal-family", async (req, res) => {
  res.send(await db.$queryRaw`SELECT * FROM family`);
});

app.get("/api/royal-assets", async (req, res) => {
  res.send(
    await db.$queryRaw`SELECT assets.*, types.name AS typeName FROM assets JOIN types ON types.id = type_id`
  );
});

app.get("/api/javelin-world-cup", async (req, res) => {
  res.send(await db.$queryRaw`SELECT * FROM javelin`);
});

app.get("/api/contact-us", async (req, res) => {
  res.send(await db.$queryRaw`SELECT * FROM contact`);
});

app.post("/api/contact-us", async (req, res) => {
  // recup données postées
  const { firstname, email, message } = req.body;

  // executer notre requete d'insertion en BDD
  try {
    await db.$queryRaw`INSERT INTO contact (firstname, email, message) VALUES (${firstname}, ${email}, ${message})`;
    res.status(201).send("ok");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
