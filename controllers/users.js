const User = require("../model/users");

exports.create = (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    identification: req.body.identification,
    password: encryptedPassword,
    photo: req.body.photo,
    active: req.body.active,
  })

  newUser.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("User has been created");
  });

};

exports.index = (req, res, next) => {
    User.find({}, (err, users) => {
      if (err)
        return next(err);
      res.send(users);
    })
};

exports.show = (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
      if (err) 
        return next(err);
      res.send(user);
    })
};

exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err)
      return next(err);
    res.send("User updated successfully");
  });
};

exports.destroy = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      return next(err);
    }
    res.send("User deleted successfully");
  });
};
