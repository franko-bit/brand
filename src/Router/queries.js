const { query } = require("express");
const exp = require("express");
const contro = require("../controller/Queriescontroller.js");
const router = exp.Router();
const verifyToken = require("../middlewares/Auth.js");
router.get("/queries", verifyToken, contro.GetQuery);
router.post("/create_queries", contro.createQuery);
router.get("/query/:_id", contro.findQuery);
module.exports = router;
