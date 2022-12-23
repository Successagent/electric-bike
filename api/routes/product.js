const Product = require('../models/Product');
const router = require('express').Router();
const { verifyToken, verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/assets/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

//create a new product;
router.post('/', verifyTokenAdmin, upload.array('photos', 12), async(req,res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json("Product Added");
        console.log(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

//update product;
router.put("/:id", verifyTokenAdmin, async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

//delete product;
router.post("/delete/:id", verifyTokenAdmin, async (req,res)=>{
    try{
        const deletedProduct = await Product.findByIdAndDelete({_id:req.params.id});
        res.status(200).json({deletedProduct,message:"Product deleted"});
    }
    catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

//get product
router.get("/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

//get all products;
router.get('/', async (req,res)=>{
    try{
        const products = await Product.find();
        const total = products.length;
        res.status(200).json({products:products, total:total});
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
});

module.exports = router