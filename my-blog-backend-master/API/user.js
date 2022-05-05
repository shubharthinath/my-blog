const express = require("express");
const mongoose = require("mongoose");
const User = require("../db/user");
const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, comments} = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.comments = comments;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = router;
