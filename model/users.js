const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = Schema({
  firstname: { type: String, required: true, max: 50 },
  lastname: { type: String, required: true, max: 50 },
  username: { type: String, required: true, min: 8 },
  password: { type: String, required: true },
  identification: { type: Number, required: true },
  photo: { type: String, required: true },
  active: { type: Boolean, required: true },
  token: { type: String },
});

module.exports = mongoose.model("User", UserSchema);