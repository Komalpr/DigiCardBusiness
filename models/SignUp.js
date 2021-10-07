const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SignUpSchema = new Schema({
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

const SignUp= mongoose.model('SignUp', SignUpSchema)
module.exports = SignUp;