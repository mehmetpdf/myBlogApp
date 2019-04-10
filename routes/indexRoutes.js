const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..

// test
let data = [
    {
        postTitle : "Blog Title - 1",
        postSubTitle : "This is a blog testing - 1",
        image : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
    },
    {
        postTitle : "Blog Title - 2",
        postSubTitle : "This is a blog testing - 2",
        image : "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
    },
    {
        postTitle : "Blog Title - 3",
        postSubTitle : "This is a blog testing - 3",
        image : "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
]

router.get("/", (req, res) => {
    res.render("home", {data: data}); // bu saydaki degislen isim : alinacak degisken sayfadaki 
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