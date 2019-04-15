const mongoose                    = require("mongoose");

const AboutSchema = new mongoose.Schema({

    aboutTitle      : {type: String},
    aboutImage      : {type: String},
    aboutText       : {type: String},
    date            : {type: Date,   default: Date.now},
    comSentence     : {type: String},
    author          : {type: String}
    
});

module.exports = mongoose.model("About", AboutSchema);