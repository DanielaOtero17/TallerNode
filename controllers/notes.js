const Note = require("../model/notes");

exports.create = (req, res, next) => {
  let newNt = new Note({
    title: req.body.title,
    comment: req.body.comment,
  })

  newNt.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Note has been created");
  });

};

exports.index = (req, res, next) => {
    Note.find({}, (err, notes) => {
      if (err)
        return next(err);
      res.send(notes);
    })
};

exports.show = (req, res, next) => {
    Note.findById(req.params.id)
    .then((note) => {
      if (note == null) {
        res.status(404).send({ error: "Note not found" });
      } else {
        res.json(note);
      }
    })
    .catch((error) => {
      debug(error);
      res.status(500).send({ error: error.message });
    });

};

exports.update = (req, res, next) => {
  Note.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err)
      return next(err);
    res.send("Note updated successfully");
  });
};

exports.destroy = (req, res, next) => {
  Note.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      return next(err);
    }
    res.send("Note deleted successfully");
  });
};
