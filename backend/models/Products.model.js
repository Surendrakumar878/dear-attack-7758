const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  day: String,
  brand: String,
  name: String,
  weight: String,
  price: String,
  URL_1: String,
  URL2: String,
  ImgSrc: String
});

const ProductModel = mongoose.model("products", productsSchema);

module.exports = {
  ProductModel
};