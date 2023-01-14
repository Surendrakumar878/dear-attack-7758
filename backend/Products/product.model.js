const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  product_code: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    required: true,
    type: Number,
    enum: [0, 1], // 0-> Inactive Product, 1 -> Active Product
    default: 0,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
