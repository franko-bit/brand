//FORMAT OF TOKEN
//Authorization:bearee <access_token>

const jwt = require("jsonwebtoken");

//verify token
const verifyy = function verifyToken(req, res, next) {
  try {
    const bearerHeader = req.headers["authorization"];
    let token = " ";

    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      //get token from array
      token = bearer[1];
    } else {
      return res.sendStatus(403);
    }

    const data = jwt.verify(token, "secretkey");
    req.userData = data;
    next();
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: 403,
      message: "Invalid token",
      error,
    });
  }
};
module.exports = verifyy;
