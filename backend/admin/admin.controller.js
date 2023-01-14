const express = require("express");
const admin = require("./admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  if (!req.body) {
    return res.json({
      status: false,
      message: "Connot proceed with an empty body.",
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
      message: "Password is required for proceeding",
    });
  }
  let foundAdmin = await admin.findOne({ email: req.body.email });
  if (!foundAdmin) {
    return res.json({
      status: false,
      message: "No admin account found with this email",
    });
  } else {
    let checkPass = await bcrypt.compare(
      req.body.password,
      foundAdmin.password
    );
    if (!checkPass) {
      return res.json({
        status: false,
        message: "Incorrect password.",
      });
    } else {
      let token = jwt.sign({ id: foundAdmin.id, user: "admin" }, "ecom-secret");
      return res.json({
        status: true,
        message: "Admin logged in successfully.",
        id: foundAdmin.id,
        token,
      });
    }
  }
};
