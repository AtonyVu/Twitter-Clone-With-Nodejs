const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const publicDirectory = path.join(__dirname, "./public");
const loginRouter = require("./Routes/loginRouter");
const signInRouter = require("./Routes/signInRouter");
const signInDirectory = path.join(
  __dirname,
  "./public/src/signInTemplate/signIn.html"
);
const userRoutes = require("./Routes/userRouter");
const app = express();
app.use(bodyParser.json());
app.use("/", express.static(publicDirectory));
app.use("/login", loginRouter);
app.use("/signIn", signInRouter);
app.use("/api/v1/users", userRoutes);
module.exports = app;
