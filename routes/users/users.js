const router=require("express").Router();

router.post('/registration',
        require("../../controller/users/Validation"),
        require("../../controller/users/Registration"));
router.post('/login',require("../../controller/users/Auth"));   


module.exports=router;