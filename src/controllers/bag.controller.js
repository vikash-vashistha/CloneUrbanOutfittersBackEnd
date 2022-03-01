const express = require("express");

const Bag = require("../models/bag.model");

const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    // console.log(req.user, req.user._id);
    // console.log(req.headers);
    //  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //    new: true,
    //  });
    console.log(req.body);
    // const user_id = req.user._id;
    const bag = await Bag.create(
      {
        user_id: req.body.user_id,
        img1: req.body.img1,
        img2: req.body.img2,
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        size: req.body.size,
        color: req.body.color,
        brand: req.body.brand,
      }
      // {
      //   new: true,
      // }
    );

    return res.send(bag);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);

//     const bag = await Bag.find({ user_id: { $eq: req.params.id } })
//       .lean()
//       .exec();
//     console.log(bag);
//     return res.send(bag);
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

router.get("", authenticate, async (req, res) => {
  try {
    console.log(req.params.id);

    const bag = await Bag.find({ user_id: { $eq: req.user._id } })
      .lean()
      .exec();
    console.log(bag);
    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const bag = await Bag.findByIdAndDelete(req.params.id).lean().exec();
    console.log(bag);
    return res.send(bag);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
