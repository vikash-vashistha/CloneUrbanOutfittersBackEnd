
const mongoose = require("mongoose");

module.exports = () => {

  return mongoose.connect("mongodb+srv://asif:asif_456@cluster0.ep2by.mongodb.net/mails?retryWrites=true&w=majority");
}

