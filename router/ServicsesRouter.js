const express = require("express");
const { UpdateService, 
        PostServicese,
        GetAllServices ,
        GetByIdService , resizeImage
        ,DeleteService , UploadImg} = 
require("../controller/servicesControllar");
 
const router = express.Router();


router.get(    "/"    , GetAllServices)
router.get(    "/:id" , GetByIdService)
router.put(    "/:id" , UpdateService)
router.post(   "/"    ,  UploadImg ,resizeImage, PostServicese)
router.delete( "/:id" , DeleteService)


module.exports = router;
