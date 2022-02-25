const express = require("express");

const Home = require("../models/homeModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const home = await Home.create(req.body);
        // const user = await User.create(req.body);

        return res.status(200).send(home);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})
//---------------------------pagination work----------------------------------------//

router.get("", async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 50;

        const homes = await Home.find()
        .skip((page-1)*size)
        .limit(size)
        .lean().exec();
        // const user = await User.create(req.body);

        return res.status(200).send(homes);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})


//---------------------------get all homes----------------------------------------//

// router.get("", async(req,res)=>{
//     try {

//         const home = await Home.find().lean().exec();
//         // const user = await User.create(req.body);

//         return res.status(200).send(home);
        
//     } catch (err) {
//         console.log("error is : ", err);

//         return res.status(500).json(err.massage);
//     }
// })

module.exports = router;