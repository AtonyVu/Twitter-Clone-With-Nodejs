const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const publicDirectory = path.join(__dirname, "./public");
const loginDirectory = path.join(
  __dirname,
  "./public/src/loginTemplate/login.html"
);
const signInDirectory = path.join(
  __dirname,
  "./public/src/signInTemplate/signIn.html"
);
const userRoutes = require("./Routes/userRouter");
const app = express();
app.use(bodyParser.json());
app.use("/", express.static(publicDirectory));
app.use("/login", express.static(loginDirectory));
app.use("/signIn", express.static(signInDirectory));
app.use("/api/v1/users", userRoutes);
module.exports = app;
