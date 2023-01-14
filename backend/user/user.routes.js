const userController = require("./user.controller");
const express = require("express");
const router = express.Router();
router.get("/users", userController.test);
router.post("/", userController.signup);
router.post("/login", userController.login);
exports.userRoutes = router;
