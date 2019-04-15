const mongoose      = require("mongoose");

const BlogSchema = new mongoose.Schema({
    
    title           : {type: String},    
    comSentence     : {type: String},
    comImage        : {type: String},
    blog            : {type: String},
    date            : {type: Date,   default: Date.now},
    author          : {type: String}
    
});

module.exports = mongoose.model("Blog", BlogSchema);