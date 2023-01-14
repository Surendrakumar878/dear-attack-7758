let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const userRoutes = require("./user/user.routes");
const adminRoutes = require("./admin/admin.routes");
const productRoutes = require("./Products/product.routes");
// const adminMiddleware = require("./admin/admin.middleware");

// const Admin = require("./admin/admin.model");
let app = express();
app.use(cors());
// app.use(cors({
//   origin: '*'
// }))

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/ecomDB", {
  useNewUrlParser: "true",
  family: 4,
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
app.get("/", (req, res) => {
  return res.json({
    status: true,
    message: "Welcome to the API.",
  });
});
app.get("/getdata", (req, res) => {
  res.send("data")
  return res.json({
    status: true,
    message: "Welcome to the API.",
  });
});
app.use("/user", userRoutes.userRoutes);
app.use("/admin", adminRoutes);
app.use("/product", productRoutes);
app.post("/",async (req, res, next) => {
  let foundAdmin = await Admin.findOne({ email: "admin@admin.com" });
  if (foundAdmin) {
    next();
  } else {
    let newAdmin = await new Admin({
      email: "admin@admin.com",
      password: "admin@123",
    }).save();
    console.log("admin created", newAdmin);
    next();
  }
});
app.listen(2080, () => {
  console.log("Server running!");
});
