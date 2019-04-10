const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..

router.get("/addNewBlog", (req, res) => {
    res.render("blog/newBlog", ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
});


module.exports = router; // router'i disariya aktarabildik..