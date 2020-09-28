const mongoosee = require("mongoose");

const schemaArticle = new mongoosee.Schema({
  photo: { type: String, required: true },
  title: { type: String, required: true },
  article: { type: String, required: true },
  like: Number,
  comments: [{ type: mongoosee.Types.ObjectId, ref: "Comment" }],
});
module.exports = mongoosee.model("postt", schemaArticle);
