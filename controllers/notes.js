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

  exports.index = (req, res, next) => {
    Note.find({}, (err, notes) => {
      if (err) {
        return next(err);
      }
      res.send(notes);
    });
  };
  
};