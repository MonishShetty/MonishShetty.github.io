var express=require("express");
var router=express.Router;

router.get('/',(req,res)=>{
    res.send('API Working')
})
module.exports=router;