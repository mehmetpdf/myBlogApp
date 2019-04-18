const express       = require("express");
const router        = express.Router();     //Bu route'yi yani file'i extarct etmeye yarayacak..
const Blog          = require("../models/blogModel");

router.get("/addNewBlog", isLoggedIn, (req, res) => {
    res.render("blog/newBlog" ); // bu saydaki degislen isim : alinacak degisken sayfadaki 
});

router.post("/addNewBlog", isLoggedIn, (req, res) => {
    let title       = req.body.data.blogTitle;
    let comSentence = req.body.data.comSentence;
    let comImage    = req.body.data.blogImage;
    let blog        = req.body.data.blog;
    let author      = req.body.data.author;

    let newBlog = { title:title, comSentence:comSentence, comImage:comImage, blog:blog, author:author };

    Blog.create(newBlog)
        .then((newBlog) => {
            console.log(newBlog);
            res.status(201).json(newBlog);
            res.redirect("home");
        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.sendStatus(err);
        });
        
});

router.get("/listAllBlog", isLoggedIn, (req, res) => {
    Blog.find({}, (err, foundBlogs) => {
        if(err){
            console.log("================================ERROR ERROR ERROR================================")
            console.log(err);
        } else {
            res.render("home", {foundBlogs: foundBlogs})
        }
    });
});

router.get("/editBlog/:blogId", isLoggedIn, (req, res) => {
    Blog.findById(req.params.blogId)
        .then((foundBlog) => {
            res.render("blog/editBlog", {foundBlog:foundBlog});
        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.send(err);
        })
});

router.put("/editBlog/:id", isLoggedIn, (req, res) => {
    let title       = req.body.data.blogTitle;
    let comSentence = req.body.data.comSentence;
    let comImage    = req.body.data.blogImage;
    let blog        = req.body.data.blog;

    let editBlog = { title:title, comSentence:comSentence, comImage:comImage, blog:blog};

   Blog.findByIdAndUpdate(req.params.id, editBlog, (err, updatedBlog) => {
       if(err){
           console.log(err);
       } else {
           res.redirect("/");
       }
   });
});

router.get("/deleteBlog/:blogId", isLoggedIn, (req, res) => {
    Blog.findById(req.params.blogId)
        .then((foundBlog) => {
            Blog.remove({_id:req.params.blogId}, (err) => {
                if(err){
                    console.log("================================ERROR ERROR ERROR================================ ")
                    console.log(err);
                    res.send(err);
                } else {
                    console.log(foundBlog);
                    Blog.find({}, (err, foundBlogs) => {
                        if(err){
                            console.log("================================ERROR ERROR ERROR================================")
                            console.log(err);
                        } else {
                            res.redirect("/");
                        }
                    });
                }
            });          
        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.send(err);
        })
});

router.get('/blogs/:blogId', (req, res) => {
    Blog.findById(req.params.blogId)
        .then ((foundBlog) => {
            res.render("blog/showBlog", {foundBlog:foundBlog});
        })
        .catch((err) => {
            console.log("================================ERROR ERROR ERROR================================ ")
            console.log(err);
            res.send(err);
        })
});

router.get("/testing", (req, res) => {
    Blog.find()
        .then((foundBlogs) => {
            res.json(foundBlogs);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect("/sign");
    }
}

module.exports = router; // router'i disariya aktarabildik..