const mongoosee = require("mongoose");

const schemaComment = new mongoosee.Schema({
  comment: String,
});
module.exports = mongoosee.model("comment", schemaComment);
