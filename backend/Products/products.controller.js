const Product = require("./product.model");
exports.addProduct = async (req, res) => {
  if (!req.body.name || req.body.name == "") {
    return res.json({
      status: false,
      message: "Product cannot be created without a name",
    });
  }
  if (!req.body.product_code || req.body.product_code == "") {
    return res.json({
      status: false,
      message: "Product cannot be created without a code",
    });
  }
  if (!req.body.brand || req.body.brand == "") {
    return res.json({
      status: false,
      message: "Product cannot be created without a brand",
    });
  }
  if (!req.body.category || req.body.category == "") {
    return res.json({
      status: false,
      message: "Product cannot be created without a category",
    });
  }
  if (!req.file) {
    return res.json({
      status: false,
      message: "Image for the product is required for procedding.",
    });
  }
  let alreadyProduct = await Product.findOne({
    product_code: req.body.product_code,
  });
  if (alreadyProduct) {
    return res.json({
      status: false,
      message:
        "Product with this code is already present. Try again with different code.",
    });
  } else {
    const newProduct = await new Product({
      name: req.body.name,
      category: req.body.category,
      brand: req.body.brand,
      product_code: req.body.product_code,
      image: req.file,
    }).save();
    return res.json({
      status: true,
      message: "Product has been created successfully.",
      id: newProduct.id,
    });
  }
};

exports.getOne = async (req, res) => {
  let foundProduct = await Product.findById(req.params.id);
  if (foundProduct) {
    res.json({
      status: true,
      product: foundProduct,
    });
  } else {
    res.json({
      status: false,
      message: "No product found with this id",
    });
  }
};
exports.getAll = async (req, res) => {
  let products = await Product.find();
  if (!products.length) {
    res.json({
      status: false,
      message: "No products found.",
    });
  } else {
    res.json({
      status: true,
      products,
    });
  }
};

exports.update = async (req, res) => {
  let foundProduct = await Product.findById(req.params.id);
  if (!foundProduct) {
    return res.json({
      status: false,
      messager: "No product found with this id.",
    });
  } else {
    if (!req.file) {
      let updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: { ...req.body },
      });
    } else {
      let updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set: { ...req.body, image: req.file.path },
      });
    }
    return res.json({
      status: true,
      message: "Product has been updated successfully.",
    });
  }
};

exports.activateProduct = async (req, res) => {
  let foundProduct = await Product.findByIdAndUpdate(req.params.id, {
    $set: { status: 1 },
  });
  if (!foundProduct) {
    return res.json({
      status: false,
      message: "No product found with this id.",
    });
  } else {
    return res.json({
      status: true,
      message: "Product has been updated successfully.",
    });
  }
};

exports.delete = async (req, res) => {
  let foundProduct = await Product.findByIdAndDelete(req.params.id);
  if (!foundProduct) {
    return res.json({
      status: false,
      message: "No product found with this id",
    });
  } else {
    return res.json({
      status: true,
      message: "Product deleted successfully.",
    });
  }
};
