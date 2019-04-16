const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..
const Blog          = require("../models/blogModel");
const About         = require("../models/aboutModel");
const Contact       = require("../models/contactModel");

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
    About.findOne({}, (err, foundAbout) => {
        if(err){
            console.log(foundAbout);
            res.status(404).json(foundAbout);
            res.redirect("home");
        } else {
            console.log(foundAbout);
            res.render("about", {foundAbout:foundAbout} ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
        }
    });
});

router.get("/contact", (req, res) => {
    Contact.findOne({}, (err, foundContact) => {
        if(err){
            console.log(foundContact);
            res.status(404).json(foundContact);
            res.redirect("home");
        } else {
            console.log(foundContact);
            res.render("contact", {foundContact:foundContact} ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
        }
    });
});

router.get("/resume", (req, res) => {
    res.render("resume"); 
});

module.exports = router; // router'i disariya aktarabildik..