const exp = require("express");
const controller = require("../controller/controllerComment.js");
const router = exp.Router();
router.post("/comment/:_id", controller.createComment);
router.get("/comment", controller.Getcomment);
router.get("/comment/_:id", controller.findcomment);
router.delete("/Deletecomment", controller.deleteComment);
module.exports = router;
