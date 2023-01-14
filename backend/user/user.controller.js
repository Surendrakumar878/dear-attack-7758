const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
exports.test = async (req, res) => {
  let users = await User.find();
  return res.json({
    status: true,
    users,
  });
};
exports.signup = async (req, res) => {
  if (!req.body) {
    return res.json({
      success: false,
      message: "Empty body is not permitted.",
    });
  }
  if (!req.body.name || req.body.name == "") {
    return res.json({
      status: false,
      message: "Name is required for proceeding.",
    });
  }
  if (!req.body.email || req.body.email == "") {
    return res.json({
      status: false,
      message: "Email is required for proceeding.",
    });
  }
  if (!req.body.password || req.body.password == "") {
    return res.json({
      status: false,
      message: "Password is required for proceeding.",
    });
  }
  if (!req.body.phone_number || req.body.phone_number == "") {
    return res.json({
      status: false,
      message: "Phone number is required for proceeding.",
    });
  } else {
    let foundUser = await User.findOne({
      $or: [{ email: req.body.email }, { phone_number: req.body.phone_number }],
    });
    if (foundUser) {
      return res.json({
        status: false,
        message: "User with this email already exists.",
      });
    }
    let newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone_number: req.body.phone_number,
    }).save();
    return res.json({
      status: true,
      message: "User has been created successfully.",
      id: newUser.id,
    });
  }
};

exports.login = async (req, res) => {
  if (!req.body) {
    return res.json({
      status: false,
      message: "Cannot accept empty body.",
    });
  }
  if (!req.body.email || req.body.email == "") {
    return res.json({
      status: false,
      message: "Email is required for proceeding.",
    });
  }
  if (!req.body.password || req.body.password == "") {
    return res.json({
      status: false,
      message: "Password is required for proceeding.",
    });
  }
  let foundUser = await User.findOne({
    email: req.body.email,
  });
  if (!foundUser) {
    return res.json({
      status: false,
      message: "User not found.",
    });
  } else {
    console.log("req.body.password", req.body.password);
    console.log("foundUser.password", foundUser.password);
    let checkPass = await bcrypt.compare(req.body.password, foundUser.password);
    console.log("checkPass", checkPass);
    if (checkPass) {
      let payload = { id: foundUser.id, user: "user" };
      let token = jwt.sign(payload, "ecom-secret");
      return res.json({
        status: true,
        message: "User logged in successfully.",
        token,
      });
    } else {
      return res.json({
        status: false,
        message: "Incorrect password.",
      });
    }
  }
};
