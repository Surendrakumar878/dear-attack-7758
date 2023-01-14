const express = require("express");
const router = express.Router();
const adminController = require("./admin.controller");
router.post("/login", adminController.login);

module.exports = router;
