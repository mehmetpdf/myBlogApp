const mongoose                    = require("mongoose");

const SiteSchema = new mongoose.Schema({
    homeImage: {type: String, required="Cannot be empty"},

    aboutmage   : {type: String, required="Cannot be empty"},
    aboutText   : {type: String, required="Cannot be empty"},
    contactImage: {type: String, required="Cannot be empty"},
    contactText : {type: String, required="Cannot be empty"},
    
});

module.exports = mongoose.model("Site", SiteSchema);