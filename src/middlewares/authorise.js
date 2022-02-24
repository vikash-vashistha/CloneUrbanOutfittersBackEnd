module.exports = function () {
  return function (req, res, next) {
     
    // first get the user from the req
    const user = req.user;
    console.log(req.body.user_id, user._id);
    // console.log(user);
    if (req.body.user_id != user._id) {
      return res.status(403).send({ message: "Permission denied" });
    }
    return next();
  };
};
