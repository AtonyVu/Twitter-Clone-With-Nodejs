const express = require("express");
const Router = express.Router();
const path = require("path");
const { create } = require("../Model/UserModel");
const signInDirectory = path.join(
  __dirname,
  "../public/src/signInTemplate/signIn.html"
);
const user = require("../Model/UserModel");
Router.route("/")
  .get((req, res) => {
    res.sendFile(signInDirectory);
  })
  .post(async (req, res) => {
    const { User, Password, Email, Name } = req.body;
    try {
      const checkUser = await user.findOne({ User });
      //   const checkEmail = await user.findOne({ Email });
      console.log("okokok", checkUser);
      if (checkUser) {
        return res.status(400).json({
          status: "errror",
          massaged: "tai khoan da ton tai ",
        });
      }
    } catch (error) {}

    const creatUser = new user({
      User,
      Password,
      Email,
      Name,
    });
    console.log(creatUser);
    try {
      await creatUser.save();
    } catch (error) {
      //   res.status(404).json({
      //     status: " ko ok",
      //     data: req.body,
      //   });
    }
    res.status(200).json(creatUser);
  });
module.exports = Router;
