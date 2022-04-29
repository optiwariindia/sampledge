const router=require('express').Router();
router.route("/create").get((req,res)=>{
    data=req.data || {};
    data.page={
        theme:"project/create.twig"
    }
    res.render("forms.twig",data);
})
module.exports=router;