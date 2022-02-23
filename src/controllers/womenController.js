const express = require("express");

const Women = require("../models/womenModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const women = await Women.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(women);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

//---------------------------get all womens----------------------------------------//

router.get("", async(req,res)=>{
    try {

        const women = await Women.find().lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(women);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

module.exports = router;