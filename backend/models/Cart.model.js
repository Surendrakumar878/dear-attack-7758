const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  day: String,
  brand: String,
  name: String,
  weight: String,
  price: String,
  URL_1: String,
  URL2: String,
  ImgSrc: String
});

const CartModel = mongoose.model("cartItems", cartSchema);

module.exports = {
  CartModel
};