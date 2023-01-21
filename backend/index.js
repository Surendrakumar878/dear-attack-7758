const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route");
const { productRouter } = require("./routes/Product.route");
const { cartRouter } = require("./routes/Cart.route");

const app = express();
app.use(cors({
    origin: "*"
}));

app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to the Database");
    }
    catch (err) {
        console.log(err);
        console.log("Connection Failed!");
    }
    console.log(`Running at port ${process.env.port}`);
});