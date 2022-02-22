const express = require("express");

const Product = require("../models/productModel");

const router = express.Router();

router.post("", async(req,res)=>{
    try {

        const product = await Product.create(req.body);

        return res.status(200).send(product);
        
    } catch (err) {
        console.log("error is : ", err);

        return res.status(500).json(err.massage);
    }
})

module.exports = router;