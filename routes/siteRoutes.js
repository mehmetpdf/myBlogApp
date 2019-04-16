const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..
const About         = require("../models/aboutModel");
const Contact       = require("../models/contactModel");
const Message       = require("../models/messageModel");

router.get("/editAbout", isLoggedIn, (req, res) => {
    About.findOne({author:req.user.username}, (err, foundAbout) => {
        if(err){
            console.log(foundAbout);
            res.status(404).json(foundAbout);
            res.redirect("home");
        } else {

            if(foundAbout == null) {
                foundAbout = {
                    aboutTitle : "",
                    aboutImage : "",
                    aboutText : "",
                    date : Date.now,
                    comSentence : "", 
                    author : req.user.username
                }
            }

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


router.get("/editContact", isLoggedIn, (req, res) => {
    Contact.findOne({author:req.user.username}, (err, foundContact) => {
        if(err){
            console.log(foundContact);
            res.status(404).json(foundContact);
            res.redirect("home");
        } else {
            console.log(foundContact);

            if(foundContact == null) {
                foundContact = {
                    contactTitle : "",
                    contactImage : "",
                    contactText : "",
                    date : Date.now,
                    comSentence : "", 
                    author : req.user.username
                }
            }

            res.render("site/editContact", {foundContact:foundContact} ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
        }
    });
    
});

router.post("/editContact", isLoggedIn, (req, res) => { 
    let contactImage   = req.body.data.contactImage;
    let contactText = req.body.data.contactText;
    let author   = req.body.data.author;
    let comSentence   = req.body.data.comSentence;
    let contactTitle   = req.body.data.contactTitle;

    let newContact = { contactTitle:contactTitle, contactImage:contactImage, contactText:contactText, author:author, comSentence:comSentence };


    Contact.deleteMany({author:author}, (err, deletedContact) => {
        if(err){
            console.log(deletedContact);
            res.status(404).json(deletedContact);
            res.redirect("home");
        } else {
            console.log(deletedContact);
        }
    });

    Contact.create(newContact)
        .then((newContact) => {
            console.log(newContact);
            res.status(201).json(newContact);
            res.redirect("home");

        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.sendStatus(err);
        });
});

router.get("/listAllMessages", isLoggedIn, (req, res) => {
    Message.find({}, (err, foundMessages) => {
        if(err) {
            console.log(err);
            res.sendStatus(404).json(foundMessages);
        } else {
            res.render("site/listAllMessages", {foundMessages:foundMessages});
        }
    });
});

router.post("/sendMessage", (req, res) => { 
    let name   = req.body.data.name;
    let email = req.body.data.email;
    let phone   = req.body.data.phone;
    let message   = req.body.data.message;

    let newMessage = { name:name, email:email, phone:phone, message:message };

    Message.create(newMessage)
        .then((newMessage) => {
            console.log(newMessage);
            res.status(201).json(newMessage);
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