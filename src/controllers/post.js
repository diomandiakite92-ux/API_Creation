// @ts-ignore
const mongoose = require("mongoose");
const post = require("../models/post");

module.exports = {
  // @ts-ignore
  async findPosts(req, res) {
    try {
      const posts = await post.find({});
      res.send(posts);
    } catch (e) {
      res.send(e);
    }
  },
  // @ts-ignore
  async createPost(req, res) {
    try {
      console.log(req.body);
      // @ts-ignore
      const post = await new post(req.body);
      await post.save();
      res.send("new post successfully added");
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
  // @ts-ignore
  async findOnePost(req, res) {
    try {
      // @ts-ignore
      const post = await post.findOne({ _id: req.params.id });
      res.send(post);
    } catch {
      res.status(404);
      res.send({ error: "Post doesn't exist!" });
    }
  },
  // @ts-ignore
  async findOnePostAndUpdate(req, res) {
    try {
      const query = { _id: req.params.id };
      const update = req.body;
      console.log(req.body);
      // @ts-ignore
      const post = await post.findOneAndUpdate(query, update);

      await post.save();

      res.send("new post successfully edited");
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
  // @ts-ignore
  async findOnePostAndDelete(req, res) {
    try {
      const query = { _id: req.params.id };
      await post.findOneAndDelete(query);
      res.send("new post successfully deleted");
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
};
