const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  brand: String,
  name: String,
  weight: String,
  price: Number,
  mrp: Number,
  ImgSrc: String,
  category: String,
  sasta: String,
  packet: String,
  offers: String,
  isavailable: Boolean,
  quantity: Number
});

const CartModel = mongoose.model("cartItems", cartSchema);

module.exports = {
  CartModel
};