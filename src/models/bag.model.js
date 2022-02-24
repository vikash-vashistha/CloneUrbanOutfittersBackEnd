const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema({
  img1: { type: String, required: false },
  img2: { type: String, required: false },
  name: { type: String, required: false },
  price: { type: String, required: false },
  discount: { type: String, required: false },
  size: { type: String, required: false },
  color: { type: String, required: false },
  brand: { type: String, required: false },
  user_id: { type: String, required: false },
});

const Bag = mongoose.model("bag", bagSchema); // user => users

module.exports = Bag;
