
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let NoteSchema = Schema({
  title: { type: String, required: true, max: 100 },
  comment: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("Note", NoteSchema);