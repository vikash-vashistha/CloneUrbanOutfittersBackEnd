const express = require("express");
const EventEmitter  = require("events");


const User = require("../models/user.model");

const {verificationMail, welcomeMail} = require("../utils")

const router = express.Router();

const eventEmitter = new EventEmitter()

router.post("",async(req,res)=>{
    try{
        const user = await User.create(req.body)
        console.log(user)

        //when user registers
        ///verification email is sent to user
        eventEmitter.on("User Registered", verificationMail)
        //welcome email is sent to user
        eventEmitter.on("User Registered", welcomeMail)

        eventEmitter.emit("User Registered", {
            from: "santhosh@masai.com", to:user.email,
            user,
        })
        return res.send("mail sent")

    }
    catch (err){
        return res.status(500).send({message: err.message})
    }
})



module.exports = router;
