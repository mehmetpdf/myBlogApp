const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..
const About          = require("../models/aboutModel");

router.get("/editAbout", isLoggedIn, (req, res) => {
    About.findOne({author:req.user.username}, (err, foundAbout) => {
        if(err){
            console.log(foundAbout);
            res.status(404).json(foundAbout);
            res.redirect("home");
        } else {
            console.log(foundAbout);
            res.render("site/editAbout", {foundAbout:foundAbout} ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
        }
    });
    
});


router.post("/editAbout", isLoggedIn, (req, res) => {

    let aboutImage   = req.body.data.aboutImage;
    let aboutText = req.body.data.aboutText;
    let author   = req.body.data.author;
    let comSentence   = req.body.data.comSentence;
    let aboutTitle   = req.body.data.aboutTitle;

    let newAbout = { aboutTitle:aboutTitle, aboutImage:aboutImage, aboutText:aboutText, author:author, comSentence:comSentence };


    About.deleteMany({author:author}, (err, deletedAbout) => {
        if(err){
            console.log(deletedAbout);
            res.status(404).json(deletedAbout);
            res.redirect("home");
        } else {
            console.log(deletedAbout);
        }
    });

    About.create(newAbout)
        .then((newAbout) => {
            console.log(newAbout);
            res.status(201).json(newAbout);
            res.redirect("home");

        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.sendStatus(err);
        });
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/sign");
    }
}

module.exports = router; // router'i disariya aktarabildik..