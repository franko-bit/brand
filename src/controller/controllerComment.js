const comment = require("../models/comment.js");
exports.Getcomment = async (req, res) => {
  const modules = await comment.find();
  res.send({ data: modules });
};
exports.createComment = async (req, res) => {
  const data = new comment(req.body);
  await data.save((err, data) => {
    if (err) {
      res.send("Data not saved try again");
    }
    console.log(data);
    res.send(data);
  });
};
exports.findcomment = async (req, res) => {
  const data = new comment(req.body);
  const modulees = await comment.findById(req.params._id);
  res.send({ data: modulees });
};
exports.deleteComment = async (req, res) => {
  const data = new comment(req.body);
  await modulees.remove(data);
  const modulees = await comment.findById(req.params._id);

  res.send({ data: modulees });
};
