const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CardSchema = new Schema({
    Name :{
        type: String,
        required : true
    },
    BName : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Phone : {
        type : String,
        required : true
    },
    Details : {
        type : String,
        required : true
    },
    cardcheck : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Card = mongoose.model('Cards', CardSchema)
module.exports = Card;