const debug = require("debug")("userscrud:usercontroller");
const User = require("../model/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

exports.create = async (req, res, next) => {
  const exist = await User.findOne({
    identification: req.body.identification,
  });

  if (exist) {
    return res.status("409").send("User already exist");
  }

  let encryptedPassword = await bcrypt.hash(req.body.password, 10);

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

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      res.status(400).send("Username and password are required");
    }
  
    const user = await User.findOne({ username });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      const { _id, firstname, lastname, identification, photo, active } =
        user;
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKENSECRET,
        { expiresIn: "2h" }
      );
      user.token = token;
      res.status(200).json({
        _id,
        username,
        firstname,
        lastname,
        identification,
        photo,
        active,
        token,
      });
    } else {
      res.status(400).send("invalid credentials");
    }
  };
  
