const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  adminID: String
});

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel
};