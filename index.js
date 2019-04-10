const express       = require("express");
const app           = express();
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const passport      = require("passport");
const LocalStrategy = require("passport-local");
const expressSession= require("express-session");
const User          = require("./models/userModel");

// Routes
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");

// App Config
mongoose.connect("mongodb://localhost/BlogApp")
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))

// Pasword Config
app.use(require("express-session")({
    secret: "Bu Bizim Güvenlik Cümlemizdir",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Share current user info within all routes
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

// Routes Using
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);

// ===================== *SERVER* ==========================
const server = app.listen(3000, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("App Started.. Port Number %d : ", server.address().port);
    }
})