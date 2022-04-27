const router=require('express').Router();
router
    .use("/",require("./index.js"))
    .use("/company",require("./company.js"))
    .use("/project",require("./project.js"))
    .use((req,res)=>{
        // res.status(404).json();
        res.render("index.twig",req.data||{});
    })
module.exports=router;