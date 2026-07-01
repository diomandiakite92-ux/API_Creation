const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Post = require("./models");
// @ts-ignore
const data = [];
const port = process.env.PORT || 5000;

app.use(express.json());

/** @type {any[]} */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/posts", async (req, res) => {
  // @ts-ignore
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching posts");
  }
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
