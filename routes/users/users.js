const router=require("express").Router();

router.post('/registration',
        require("../../controller/users/Validation"),
        require("../../controller/users/Registration"));


module.exports=router;