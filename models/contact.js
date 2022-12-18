const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        trime:true
    },
    phone:{
        type: Number,
        trime:true
    },
    email:{
        type:String,
        trime:true
    },
    linkedin:{
        type:String,
        trime:true
    }
})

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;