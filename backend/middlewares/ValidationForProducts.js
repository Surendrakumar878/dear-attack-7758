const jwt = require("jsonwebtoken");
require('dotenv').config();

const ValidationForProducts = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, process.env.key);
        if (decoded.adminID) {
            console.log("adminid", decoded.adminID);
            next();
        }
        else {
            res.send({ msg: "You are not admin!" });
        }
    }
    else {
        res.send("You are not admin!");
    }
};

module.exports = { ValidationForProducts };