const verifyDeleteAndEdit = (req, res, next) => {
    if (!(req.params.id == req.user.user_id)) {
      return res
        .status(403)
        .send("You do not have permission to edit or delete a user");
    }
    return next();
  };
  
  module.exports = verifyDeleteAndEdit;
  