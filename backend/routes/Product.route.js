const express = require("express");
const { ValidationForProducts } = require("../middlewares/ValidationForProducts");
const { ProductModel } = require("../models/Products.model");
const productRouter = express.Router();


productRouter.get("/", async (req, res) => {
    const price_low = req.query.price_low;
    const price_high = req.query.price_high;
    if (price_low && price_high) {
        try {
            let products = await ProductModel.find({ $and: [{ price: { $gt: price_low } }, { price: { $lt: price_high } }] });
            res.send(products);
        }
        catch (err) {
            console.log(err);
            res.send({ "err": "Something went wrong" });
        }
    }
    else {
        try {
            let data = await ProductModel.find();
            res.send(data);
        }
        catch (err) {
            console.log(err);
            res.send({ "err": "Something went wrong" });
        }
    }
});


// Sorting Asc or Desc
productRouter.get("/q", async (req, res) => {
    let query = req.query;
    try {
        if(query.sortBy){
            const sortedData = await ProductModel.find(query).sort({ price: query.sortBy });
            res.send(sortedData);
        }else{
            const data = await ProductModel.find(query);
            res.send(data);
        }
    }
    catch (err) {
        console.log(err);
        res.send({ "err": "Something went wrong" })
    }
});


// Insert many
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
});

// All product delete
productRouter.delete("/deletemany", async (req, res) => {
    try {
        await ProductModel.deleteMany();
        res.send("All Products deleted!");
    } 
    catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
})



// Validation these operation could only be done by admin only
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
        res.send({ msg: "something went wrong" });
    }
});


productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await ProductModel.findByIdAndDelete({ "_id": id });
        res.send("Product Deleted!");
    } catch (error) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


module.exports = { productRouter };