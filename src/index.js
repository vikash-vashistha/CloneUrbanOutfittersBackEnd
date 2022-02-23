const express=require("express");
const app=express();
const userController=require("./controllers/checkout.controller")
const nodemailer = require("nodemailer");
const connect=require("./configs/db");
app.use(express.json());
app.use("/users",userController);
   

app.listen("8766",async()=>{
    await connect()
    console.log("listening at port 8766");
});
