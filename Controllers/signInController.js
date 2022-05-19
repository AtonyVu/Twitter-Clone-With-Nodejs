const User = require("../Model/UserModel");
const SignIn = async (req, res) => {
  const { firtName, lastName, email, userName, password, profilePic } =
    req.body;
  let checkUser = await User.findOne({ email: email, userName: userName });
  if (checkUser) return res.status(400).json("Tài khoản đã tồn tại ");
  
};
