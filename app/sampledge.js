require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const compression = require("compression");
// const twig=require("twig");
let publicDir = __dirname.split("/").slice(0, -1).join("/") + "/public";

app = express();
// console.log(process.env.mongodb);
mongoose.connect(process.env.mongodb,{useNewUrlParser: true})
.then(()=>{
    app.use(compression());
    app.set('view-engine', 'twig');
    if(process.env.mode == "dev"){
        const livereload = require("livereload");
        const connectLivereload = require("connect-livereload");
        const server = livereload.createServer();
        server.watch(publicDir);
        app.use(connectLivereload());
    }
    app
    .use(express.static(publicDir))
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .use(session({
        secret:'sampledge',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        }
    }))
    // .use(logs)
    // .use(autologin)
    .use(require("./routes/routes.js"))
    .listen(process.env.port,()=>{
        console.log("Server is running on port " + process.env.port);
    })
})
function logs(req,res,next){
    console.log(req.method + " " + req.url);
    next();
}
// autologin=function (req,res,next){
//     console.log(req.session.user);
//     if(req.session.user){
//          next();
//     }
//     else{
//         res.redirect("/autologin");
//     }
// }