const exp = require("express");
const controller = require("../controller/controllerAuth.js");
// const verifyToken = require("../middlewares/Auth.js");
const router = exp.Router();
// router.post("/auth", verifyToken, controller.postsss);
router.post("/auth/log", controller.loginn);
module.exports = router;
