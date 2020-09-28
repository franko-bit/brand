const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
// app.get("/api", (req, res) => {
//   res.json({
//     message: "welcome to the api",
//   });
// });
// exports.postsss = async (req, res) => {
// //   const post = {
// //     Auth: req.userData.user,
// //   };

// //   res.status(200).json(post);
// // };
exports.loginn = async (req, res) => {
  //mock user
  const user = {
    id: 1,
    username: process.env.USERNAME,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  };
  if (req.body.email !== user.email) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email",
    });
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email or password",
    });
  }
  const token = jwt.sign(
    {
      user: user,
    },
    process.env.SECRET
  );
  res.json({
    token: token,
  });
};
// module.exports = app;
