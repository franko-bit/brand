const Joi = require("@hapi/joi");
const authSchema = Joi.object({
  title: Joi.string().required().min(2),
  article: Joi.string().required().min(2),
});
module.exports = {
  authSchema,
};
