const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Used to make new collection using Schema
//Developed by Komal Preet

const contactSchema = new Schema({
    name :{
        type: String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact;
