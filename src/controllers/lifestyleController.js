const express = require("express");

const Lifestyle = require("../models/lifestyleModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const lifestyle = await Lifestyle.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(lifestyle);
        
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

        const lifestyles = await Lifestyle.find()
        .skip((page-1)*size)
        .limit(size)
        .lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(lifestyles);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

//---------------------------get all lifestyles----------------------------------------//

// router.get("", async(req,res)=>{
//     try {

//         const lifestyle = await Lifestyle.find().lean().exec();
//         // const user = await User.create(req.body);

//         return res.status(200).send(lifestyle);
        
//     } catch (err) {
//         console.log("error is : ", err);

//         return res.status(500).json(err.massage);
//     }
// })

module.exports = router;