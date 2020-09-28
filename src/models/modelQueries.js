const mongoosee = require("mongoose");
const schema = new mongoosee.Schema({
  fname: { type: String, required: true },
  Email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});
module.exports = mongoosee.model("post", schema);
