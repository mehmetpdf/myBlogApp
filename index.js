const express       = require("express");
const app           = express();
const mongoose      = require("mongoose");

// Routes
const indexRoutes = require("./routes/indexRoutes");


// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));


// Routes Using
app.use(indexRoutes);

// ===================== *SERVER* ==========================
const server = app.listen(3000, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("App Started.. Port Number %d : ", server.address().port);
    }
})