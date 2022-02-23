const express = require("express");
const connect = require("./configs/db");
const app = express();
const checkoutcontroller=require("./controllers/checkout.controller.js")
app.use(express.json());


app.use("/checkout",checkoutcontroller);

app.listen(4000, async function () {
  try {


    await connect();
    console.log("app is listening on port 4000");
  } catch (err) {
    console.log(err.message);
  }
});
