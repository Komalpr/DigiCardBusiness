const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cardSchema = new Schema({
    firstname :{
        type: String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Card = mongoose.model('Cards', cardSchema)
module.exports = Card;