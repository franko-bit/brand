const moduls = require("../models/modelQueries.js");
const { valid, QuerySchema } = require("../validation/validationQueries.js");
exports.GetQuery = async (req, res) => {
  const modules = await moduls.find();
  res.send({ data: modules });
};
exports.createQuery = async (req, res) => {
  try {
    const result = QuerySchema.validate(req.body, (err) => {
      if (err) {
        res.send("Validation fail");
      }
    });
    const data = new moduls(req.body);
    await data.save((err, data) => {
      if (err) {
        res.send("Data not saved try again");
      }
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
exports.findQuery = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  res.send({ data: modulees });
};
