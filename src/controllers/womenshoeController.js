const express = require("express");

const Womenshoe = require("../models/womenshoeModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const womenshoe = await Womenshoe.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(womenshoe);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

//---------------------------pagination work----------------------------------------//

router.get("", async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 20;

        const womenshoes = await Womenshoe.find()
        .skip((page-1)*size)
        .limit(size)
        .lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(womenshoes);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

//---------------------------get all womenshoes----------------------------------------//

// router.get("", async(req,res)=>{
//     try {

//         const womenshoe = await Womenshoe.find().lean().exec();
//         // const user = await User.create(req.body);

//         return res.status(200).send(womenshoe);
        
//     } catch (err) {
//         console.log("error is : ", err);

//         return res.status(500).json(err.massage);
//     }
// })

module.exports = router;