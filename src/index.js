const express = require("express");
const connect = require("./configs/db")

const womenController = require("./controllers/womenController")
const womenshoeController = require("./controllers/womenshoeController")
const menController = require("./controllers/menController")
const homeController = require("./controllers/homeController")

const app = express();

app.use(express.json());

app.use("/womens", womenController);
app.use("/womenshoes", womenshoeController);
app.use("/mens", menController);
app.use("/homes", homeController);

app.listen(5252, async()=>{
    try {
        
        await connect();

        console.log("listening to port 5252");

    } catch (err) {
        console.log("error:", err)
    }
})