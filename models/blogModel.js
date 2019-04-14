const mongoose      = require("mongoose");

const BlogSchema = new mongoose.Schema({
    
    title           : {type: String, required:"Cannot be empty"},    
    comSentence     : {type: String, required:"Cannot be empty"},
    comImage        : {type: String},
    blog            : {type: String, required:"Cannot be empty"},
    date            : {type: Date,   default: Date.now},
    author          : {type: String},
    
});

module.exports = mongoose.model("Blog", BlogSchema);