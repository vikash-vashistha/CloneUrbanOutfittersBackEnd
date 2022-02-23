const express=require("express");
const router=express.Router();
const nodemailer = require("nodemailer");

const User=require("../models/checkout.model.js");

var user;
router.post("",async(req,res)=>{
    try {
        console.log("jhgukgk")
          user=await User.create(req.body);
        let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 587,
            secure: false, 
            auth: {
              user: "16324d4056999e", 
              pass: "33bb6885159b00", 
            },
          });
            
          
          let info = await transporter.sendMail({
            from: 'urbanoutfitter@.com', 
             to: user.email, 
            subject: `thank you for purchasing ${user.first_name} ${user.last_name}`, 
            text: `Hi ${user.first_name},please confirm your details`, 
          });
         
          return res.status(201).send(["mail sent",user]);
    } 
    catch (error) {
        return res.status(500).send(error.message);
    }
})
 


module.exports=router;