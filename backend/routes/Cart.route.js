const express = require("express");
const { CartModel } = require("../models/Cart.model");
const { ProductModel } = require("../models/Products.model");
const cartRouter = express.Router();


cartRouter.get("/cartItems", async (req, res) => {
    try {
        let cartItems = await CartModel.find();
        res.send(cartItems);
    }
    catch (err) {
        res.send("Something went wrong!");
        console.log(err);
    }
});


cartRouter.post("/addcartItem/:id", async (req, res) => {
    const id = req.params.id;
    const item = await ProductModel.findById({ "_id": id });

    try {
        const cartItem = new CartModel({
            day: item.day,
            brand: item.brand,
            name: item.name,
            weight: item.weight,
            price: item.price,
            URL_1: item.URL_1,
            URL2: item.URL2,
            ImgSrc: item.ImgSrc
        });
        await cartItem.save();
        res.send("Item added to cart!");
    }
    catch (err) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


cartRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    try {
        await CartModel.findByIdAndDelete({ "_id": id });
        res.send("Cart Item Deleted!");
    } catch (error) {
        console.log(err);
        res.send({ msg: "something went wrong" });
    }
});


module.exports = { cartRouter };