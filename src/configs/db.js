const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://skale0181:sagar@@cluster0.wqpjq.mongodb.net/Urben-Outfitters?retryWrites=true&w=majority"
  );
}