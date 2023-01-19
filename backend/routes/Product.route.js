const express = require("express");
const { ValidationForProducts } = require("../middlewares/ValidationForProducts");
const { ProductModel } = require("../models/Products.model");
const productRouter = express.Router();


productRouter.get("/data", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.send(products);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});

productRouter.post("/addmany", async (req, res) => {
    const payload = req.body;
    try {
        await ProductModel.insertMany(payload);
        res.send("Products added!");
        console.log(product);
    } catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
})


productRouter.use(ValidationForProducts);


productRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
        const product = new ProductModel(payload);
        await product.save();
        res.send("Product added!");
        console.log(product);
    } catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


productRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;

    try {
        await ProductModel.findByIdAndUpdate({ "_id": id }, payload);
        res.send("product Updated!");
    }
    catch (error) {
        console.log(err);
        res.send({ msg: "soething went wrong" });
    }
});


productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await ProductModel.findByIdAndDelete({ "_id": id });
        res.send("Product Deleted!");
    } catch (error) {
        console.log(err);
        res.send({ msg: "soething went wrong" });
    }
});


module.exports = { productRouter };