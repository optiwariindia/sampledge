const router = require('express').Router();
const mongoose = require('mongoose');
const md5 = require('md5');
const User = mongoose.model("users", require("../modal/User.js"));
const fs=require("fs");
router.use((req,res,next)=>{
    if((!req.session.user) & (req.path != "/autologin")){
        res.redirect("/autologin");
        return;
    }
    data={};
    data.user=req.session.user;
    data.project=JSON.parse(fs.readFileSync("./config/project.json"));
    req.data=data;
    next();
})
router
    .route("/")
    .get((req, res) => {
        data = req.data || {}; 
        if (req.session.user)
            res.render("index.twig", data);
        else
            res.render("login.twig", data);
    })
    .post(async (req, res) => {
        data = req.data || {};
        user = await User.find({ user: req.body.user, pass: md5(req.body.pass) });
        if (user.length != 1) {
            data.form = req.body;
            data.error = "Invalid user or password";
            res.render("login.twig", data);
            return;
        }
        req.session.user = user[0];
        res.redirect("/");
    });
router.use("/autologin", async (req,res)=>{
    user = await User.find({ user: "opt" });
    req.session.user = user[0];
    data=req.data || {};
    
    // res.json(data);
    res.render("index.twig", data);
})
router.get("/adduser", (req, res) => {
    new User({
        user: "opt",
        pass: md5("1q2w3e$R"),
        name: {
            first: "Om",
            last: "Tiwari"
        },
        email: "om.tiwari@frequentresearch.com",
        domain: "frequentresearch.com",
        phone: "+918888888888"
    }).save();
})
module.exports = router;