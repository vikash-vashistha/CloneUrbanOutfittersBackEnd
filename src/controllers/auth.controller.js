require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors;
      newErrors = errors.array().map((err) => {
        return { key: err.param, message: err.message };
      });
      return res.status(400).send({ errors: newErrors });
    }

    let user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user) {
      return res.status(400).send({ message: "please try with other email" });
    }

    user = await User.create(req.body);
    const token = newToken(user);
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors;
      newErrors = errors.array().map((err) => {
        return { key: err.param, message: err.message };
      });
      return res.status(400).send({ errors: newErrors });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "please try again" });
    const match = user.checkPassword(req.body.password);
    if (!match) {
      return res.status(400).send({ message: "please try again" });
    }
    const token = newToken(user);

    // res.cookie("jwt", token, {
    //   expires: new Date(date.now() + 3000000),
    //   httpOnly: true,
    // });
    // res.cookie("token", token).json({ user }).send({ user, token });

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
module.exports = { register, login };
