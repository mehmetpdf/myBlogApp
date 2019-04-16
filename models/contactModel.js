
const mongoose                    = require("mongoose");

const ContactSchema = new mongoose.Schema({

    contactTitle      : {type: String},
    contactImage      : {type: String},
    contactText       : {type: String},
    date              : {type: Date,   default: Date.now},
    comSentence       : {type: String},
    author            : {type: String}
    
});

module.exports = mongoose.model("Contact", ContactSchema);