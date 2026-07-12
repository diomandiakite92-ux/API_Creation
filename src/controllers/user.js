// @ts-nocheck
const bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/user");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {
  async register(req, res) {
    console.log("BODY REÇU :", req.body);
    try {
      const newUser = await new user(req.body);
      newUser.hashedPassword = bcrypt.hashSync(req.body.password, salt);
      await newUser.save();
      const userObj = newUser.toObject();
      delete userObj.hashedPassword;
      res.json(userObj);
    } catch (e) {
      res.json("Error while registering new account :" + e);
    }
  },
  async login(req, res) {
    try {
      const foundUser = await user.findOne({ email: req.body.email });

      if (!foundUser) {
        return res.status(401).json("No user account found");
      }

      const match = await foundUser.comparePassword(req.body.password);

      if (!match) {
        return res
          .status(401)
          .json("Authentication failed. Invalid user or password");
      }

      return res.json({
        token: jwt.sign(
          {
            email: foundUser.email,
            fullName: foundUser.fullName,
            _id: foundUser._id,
          },
          process.env.TOKEN_SECRET,
        ),
      });
    } catch (e) {
      res.json(e);
    }
  },
};
