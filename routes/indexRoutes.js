const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..
const Blog          = require("../models/blogModel");

router.get("/", (req, res) => {
    Blog.find({}, (err, foundBlogs) => { // find({}) -> Tum Bloglari Al
        if(err){
            console.log("================================ERROR ERROR ERROR================================ ");
            console.log(err);
        } else {
            console.log("================================ALL BLOGS================================ ");
            console.log(foundBlogs);
            res.render("home", {foundBlogs:foundBlogs});
        }
    })

     // bu saydaki degislen isim : alinacak degisken sayfadaki 
});

router.get("/about", (req, res) => {
    res.render("about"); 
});

router.get("/contact", (req, res) => {
    res.render("contact"); 
});

router.get("/resume", (req, res) => {
    res.render("resume"); 
});

module.exports = router; // router'i disariya aktarabildik..