const express = require("express");
const connect = require("./configs/db")

const productController = require("./controllers/productController")

const app = express();

app.use(express.json());

app.use("/products", productController);

app.listen(5252, async()=>{
    try {
        
        await connect();

        console.log("listening to port 5252");

    } catch (err) {
        console.log("error:", err)
    }
})