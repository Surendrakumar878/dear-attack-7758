const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");
const { addAdminId } = require("../middlewares/addAdminId.middleware");
const { AuthValidator } = require("../middlewares/Auth.middleware");
const { ValidationForProducts } = require("../middlewares/ValidationForProducts");
require('dotenv').config();


const userRouter = express.Router();
userRouter.use(addAdminId);


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            console.log(user);
            if (user.adminID) {
                bcrypt.compare(password, user.password, async (err, result) => {

                    if (result) {
                        const token = jwt.sign({ userID: user._id, adminID: user.adminID }, process.env.key);
                        res.send({ 
                            message: "Admin Login Successful",
                            adminID: user.adminID, 
                            userKey: user._id, 
                            token 
                        });
                    }
                    else {
                        res.send("Wrong admin credential!");
                    }
                });
            }
            else {
                bcrypt.compare(password, user.password, async (err, result) => {

                    if (result) {
                        const token = jwt.sign({ userID: user._id }, process.env.key);
                        res.send({ 
                            message: "User Login Successful", 
                            userKey: user._id, 
                            token 
                        });
                    }
                    else {
                        res.send("Wrong user credential!");
                    }
                });
            }
        }
        else {
            res.send("Wrong credential!");
        }
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


userRouter.post("/admin/signup", async (req, res) => {
    const { username, email, password, adminID } = req.body;
    const isAlready = await UserModel.findOne({ "email": email });

    try {
        if (isAlready === null || isAlready.email !== email) {
            bcrypt.hash(password, 4, async (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send("Err");
                }
                else {
                    let user = new UserModel({ username, email, password: hash, adminID });
                    await user.save();
                    res.send("Admin Registered!");
                    console.log(user);
                }
            });
        }
        else {
            res.send("Admin already registered!");
        }
    }
    catch (err) {
        res.send("Admin Registration Failed!");
        console.log(err);
    }
});


userRouter.post("/user/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const isAlready = await UserModel.findOne({ "email": email });

    try {
        if (isAlready === null || isAlready.email !== email) {
            bcrypt.hash(password, 4, async (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send("Err");
                }
                else {
                    let user = new UserModel({ username, email, password: hash });
                    await user.save();
                    res.send("User Registered!");
                    console.log(user);
                }
            });
        }
        else {
            res.send("User already registered!");
        }
    }
    catch (err) {
        res.send("User Registration Failed!");
        console.log(err);
    }
});


// validation for users to get their profile only
userRouter.use(AuthValidator);

userRouter.get("/profile/:userKey", async (req, res) => {
    const { userKey } = req.params;
    const token = req.headers["authorization"].split(" ")[0];
    console.log("Userkey:", userKey);
    try {
        const singleUser = await UserModel.findById({ "_id": userKey });
        res.send(singleUser);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


// After this validation only admin can perform actions
userRouter.use(ValidationForProducts);

userRouter.get("/", async (req, res) => {
    try {
        let user = await UserModel.find();
        res.send(user);
        console.log("data is there");
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


userRouter.delete("/deletemany", async (req, res) => {
    try {
        await UserModel.deleteMany();
        res.send("All users deleted!");
    }
    catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


userRouter.patch("/update/:id", async (req, res) => {
    let id = req.params.id;
    let payload = req.body;
    try {
        await UserModel.findByIdAndUpdate({ "_id": id }, payload);
        res.send("User updated");
    }
    catch (err) {
        res.send("Something went wrong");
        console.log(err);
    }
});


userRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try {
        await UserModel.findByIdAndDelete({ "_id": id });
        res.send("User deleted");
    }
    catch (err) {
        res.send("Something went wrong");
        console.log(err);
    }
});

module.exports = {
    userRouter
};