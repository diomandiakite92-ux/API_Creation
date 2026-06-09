const express = require("express");
const app = express();
// @ts-ignore
const data = [];
const port = process.env.PORT || 5000;

/** @type {any[]} */
let posts = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", (req, res) => {
  // @ts-ignore
  const data_posts = [...posts, ...data];
  res.json(data_posts);
});

app.post(`/posts/create`, (req, res) => {
  posts = [...posts, ...req.body];
  res.send("New post created");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
