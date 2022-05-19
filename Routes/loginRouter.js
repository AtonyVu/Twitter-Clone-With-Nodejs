const express = require("express");
const app = express();
const Router = express.Router();
const path = require("path");
const user = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const loginDirectory = path.join(
  __dirname,
  "../public/src/loginTemplate/login.html"
);
// app.set("view engine", "html");
// app.set("public", "public");
Router.route("/")
  .get((req, res) => {
    res.sendFile(loginDirectory);
  })
  .post(async (req, res) => {
    let check;
    const { User, Password } = req.body;
    try {
      check = await user.findOne({ User });
    } catch (error) {}

    if (check) {
      const token = jwt.sign(
        { id: check.id, User: check.user },
        "supersecretkey",
        { expiresIn: "2h" }
      );
      return res.status(200).json({ token });
    }
    return res.status(400).send({ message: "tài khoản ko tồn tại" });
  });

module.exports = Router;
