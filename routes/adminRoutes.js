const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..

router.get("/signin", (req, res) => {
    res.render("admin/signin"); 
});

router.post("/signin", (req, res) => {

});

router.get("/signup", (req, res) => {
    res.render("admin/signup"); 
});

router.post("/signup", (req, res) => {
    
});


module.exports = router; // router'i disariya aktarabildik..