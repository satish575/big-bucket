const router=require("express").Router();

router.get('/',require("../../controller/ProductController/GetAllProduct"));
router.post('/',require("../../controller/ProductController/AddNewProducts"));
router.get('/:id',require("../../controller/ProductController/GetProductById"));
router.get('/category/:category',require("../../controller/ProductController/GetProductCategory"));

module.exports=router;