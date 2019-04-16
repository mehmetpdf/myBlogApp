const express       = require("express");
const app           = express();
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const passport      = require("passport");
const LocalStrategy = require("passport-local");
const expressSession= require("express-session");
const dotenv = require('dotenv');
const User          = require("./models/userModel");
const methodOverride= require("method-override");

// Routes
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const siteRoutes = require("./routes/siteRoutes");


// App Config
dotenv.config();
console.log(`Your mongodb server address is ${process.env.MONGODB_STRING}`);
mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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
app.use(siteRoutes)

// ===================== *SERVER* ==========================
const server = app.listen(3000, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("App Started.. Port Number %d : ", server.address().port);
    }
})
