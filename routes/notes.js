const express = require("express");
const router = express.Router();
const note_contoller = require("../controllers/notes")
const auth = require("../middleware/auth")
const noteSchema = require("../schemas/noteSchema");
const validate = require("../middleware/validate");

router.get("/", auth, note_contoller.index)
router.get("/:id", note_contoller.show)
router.post("/" , auth, validate(noteSchema.note), note_contoller.create)
router.put("/:id", note_contoller.update);
router.delete("/:id", note_contoller.destroy);

module.exports = router;
