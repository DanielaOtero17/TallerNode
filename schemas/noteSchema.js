const joi = require("joi");

const noteSchema = {
  note: joi.object().keys({
    title: joi.string().min(3).required(),
    comment: joi.string().min(3).required(),
  }),
};

module.exports = noteSchema;