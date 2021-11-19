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
  Note.findById(req.params.id, (err, note) => {
      if (err) 
        return next(err);
      res.send(note);
    })
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
