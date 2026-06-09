const express = require("express");
const app = express();
// @ts-ignore
const data = [];
const port = process.env.PORT || 5000;

app.use(express.json());

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

app.post("/posts/create", (req, res) => {
  console.log(req.body); // doit afficher le JSON
  res.json({ message: "New post created", data: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
