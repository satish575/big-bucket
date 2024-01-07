const productModel=require("../../model/product.model");
const getAllProducts=async(req,res,next)=>{
    
    const productData=await productModel.find();
    res.status(200).json(productData);
}

module.exports=getAllProducts;