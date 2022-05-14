const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firtName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  userName: { type: String, require: true, unique: true },
  password: { type: String, require: true, unique: true, minLength: 6 },
});
