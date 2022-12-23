const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true},
    imageOne:{type:Array,required:true},
    imageTwo:{type:Array,required:true},
    imageThree:{type:Array,required:true},
    imageFour:{type:Array,required:true},
    size:{type:Array,required:true},
    quantity:{type:Number,required:true,default:1},
    price:{type:Number,required:true},
    inStock:{type:Boolean,required:true,default:true}
},{timestamps:true})

module.exports = mongoose.model("product",productSchema);