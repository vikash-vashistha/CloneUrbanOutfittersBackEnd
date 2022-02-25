const mongoose = require("mongoose");

const lifestyleSchema = new mongoose.Schema(
    {

      
            img1:{type:String, required:true},
            img2:{type:String, required:false},
            name:{type:String, required:true},
            price:{type:String, required:true},
            discount:{type:String, required:false},
            size:{type:String, required:false, default:"M"},
            color:{type:String, required:false},
            brand:{type:String, required:false},
    
       
    }

)

module.exports = mongoose.model("lifestle", lifestyleSchema);