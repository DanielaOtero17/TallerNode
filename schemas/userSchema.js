const joi = require("joi");

const userSchema = {
  user: joi.object().keys({
    firstname: joi.string().alphanum().min(3).required(),
    lastname: joi.string().alphanum().min(3).required(),
    username: joi.string().alphanum().min(8).required(),
    identification: joi.number().required(),
    password: joi.string().alphanum().required(),
    photo: joi.string().required(),
    active: joi.boolean().required(),
    token: [joi.string().alphanum(), joi.number()],
  }),
};

module.exports = userSchema;