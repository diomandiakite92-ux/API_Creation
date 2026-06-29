const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Post = require("./models");
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
  try {
    const newPost = new Post(req.body);
    newPost.save();
    res.send("Post created successfully");
  } catch (error) {
    console.error(error);
    res.send("Error creating post");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose.connect("mongodb://127.0.0.1:27017/database").then(() => {
    console.log("Connected to MongoDB");
  });
});
