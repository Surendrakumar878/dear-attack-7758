const jwt = require("jsonwebtoken");
exports.checkAdmin = async (req, res, next) => {
  const isToken = req.headers["authorization"];
  if (!isToken) {
    return res.json({
      status: false,
      message: "Please provide a token.",
    });
  } else {
    let isBearer = isToken.split(" ")[0];
    console.log("isBearer", isBearer);
    if (isBearer !== "Bearer") {
      return res.json({
        status: false,
        message: "Invalid token, Please provide a valid bearer token",
      });
    } else {
      let decodedToken = jwt.decode(isToken.split(" ")[1]);
      console.log("decoded", decodedToken);
      if (decodedToken["user"] == "admin") {
        const verifyToken = jwt.verify(isToken.split(" ")[1], "ecom-secret");
        if (!verifyToken) {
          return res.json({
            status: false,
            message: "Please provide a valid token.",
          });
        } else {
          next();
        }
      } else {
        return res.json({
          status: false,
          message: "Please provide a valid token.",
        });
      }
    }
  }
};
