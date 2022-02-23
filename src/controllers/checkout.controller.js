const express=require('express');

const router=express.Router();

router.post("",async(req,res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        console.log("error.message")
    }
})

module.exports=router;