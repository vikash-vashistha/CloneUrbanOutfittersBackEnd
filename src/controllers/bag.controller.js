const express = require("express");

const Bag = require("../models/bag.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post("", authenticate, authorise(), async (req, res) => {
  try {
    //  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //    new: true,
    //  });
    console.log(req.body);
    const user_id = req.user._id;
    const bag = await Bag.create(
      {
        user_id: user_id,
        img1: req.body.img1,
        img2: req.body.img2,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        size: req.body.size,
        color: req.body.color,
        brand: req.body.brand,
      },
      {
        new: true,
      }
    );

    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", authenticate, async (req, res) => {
  try {
    const bag = await Bag.find().lean().exec();

    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
