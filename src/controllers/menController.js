const express = require("express");

const Men = require("../models/menModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const men = await Men.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(men);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

//---------------------------get all mens----------------------------------------//

router.get("", async(req,res)=>{
    try {

        const men = await Men.find().lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(men);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

module.exports = router;