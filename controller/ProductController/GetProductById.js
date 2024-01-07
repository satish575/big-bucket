const productModel=require("../../model/product.model");

const GetProductById=async(req,res,next)=>{
    const productId=req.params.id;
    res.status(200).json(await productModel.find({_id:productId}));
}
module.exports=GetProductById;