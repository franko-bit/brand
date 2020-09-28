const moduls = require("../models/modelArticle.js");

const { valid, authSchema } = require("../validation/validationBlog.js");
const path = require("path");
const { resolve } = require("path");
exports.GetArticle = async (req, res) => {
  const modules = await moduls.find();
  res.send({ data: modules });
};

exports.createArticle = async (req, res) => {
  try {
    const result = await authSchema.validateAsync(req.body, (err, data) => {
      if (err) {
        res.send(" Validation fail");
      } else {
        console.log(data);
      }
    });

    const data = new moduls({
      ...req.body,
      photo: req.image,
    });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.likeArticle = async (req, res) => {
  const modulees = await moduls.findById(req.params._id);

  const data = moduls.findOneAndUpdate(
    { _id: res._id },
    { $inc: { "modulees.like": 1 } },
    { new: true }
  );
  console.log(modulees);
  res.send({ data: modulees });
};
exports.findArticle = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  res.send({ data: modulees });
};
exports.updateArticle = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  Object.assign(modulees, req.body);
  await data.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.send({ data: modulees });
  });
};
exports.deleteArticle = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  await modulees.remove();
  res.send({ data: modulees });
};
