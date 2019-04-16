
const mongoose                    = require("mongoose");

const MessageSchema = new mongoose.Schema({

    name      : {type: String},
    email      : {type: String},
    phone       : {type: String},
    date              : {type: Date,   default: Date.now},
    message       : {type: String}
    
});

module.exports = mongoose.model("Message", MessageSchema);