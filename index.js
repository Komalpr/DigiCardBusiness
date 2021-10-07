var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var fs = require('fs');
var http = require('http')
const contact = require('./models/contact');
const card = require('./models/card');
var path = require('path');
var db = require('./Database/Database');
const SignUp = require("./models/SignUp");
const { fstat } = require("fs");
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine','ejs');



app.post('/add-data',(req,res)=>{
  const Signup = new SignUp({
     firstname : ""+req.body.firstname,
     lastname : ""+req.body.lastname,
     email : ""+req.body.email,
     password : ""+req.body.password
    });
    Signup.save()
        .then((result)=> {
            response.writeHead(302, {
                'Location': '/public/Signup.html'
                //add other headers here...
              });
              response.end();
        })
        .catch((err)=>{
            console.log(err);
        });
    })
app.post('/add-contact',(req,res)=>{
    const Contact = new contact({
       name : ""+req.body.name,
       phone : ""+req.body.phone,
       email : ""+req.body.email,
       message : ""+req.body.message
    });
Contact.save()
    .then((result)=> {
        response.writeHead(302, {
            'Location': 'Signup.html'
            //add other headers here...
          });
          response.end();
    })
    .catch((err)=>{
        console.log(err);
    });
})
app.post('/add-card',(req,res)=>{
    const Card = new card({
       Name : ""+req.body.Name,
       BName : ""+req.body.BName,
       Email : ""+req.body.Email,
       Phone : ""+req.body.Phone,
       Details : ""+req.body.Details,
       cardcheck : ""+req.body.cardcheck
    });
Card.save()
    .then((result)=> {
        res.render('/public/Card.ejs', {
            layout: false,
            locals: {
                Name: result.Name
            }
        });
      
    })
    .catch((err)=>{
        console.log(err);
    });
})
app.get('/login',function(req, res) {
var Username = req.body.email
var Password = req.body.password

   var Query = card.findOne({$or: [{email:Username},{password:Password}]})
    .then((result)=> {
      console.log(Query);
    })
})
   
  
 
  //db.emails.find({"from.address" : "i.st20@gmail.com", "tos.address" : "ron@gmail.com"})
/*
const connectDB = async()=>{
    await mongoose.connect(URI);
}
module.exports = connectDB;
var db = mongoose.connection;
db.on('error',()=>console.log("Error in connecting to database"));
db.once('open',()=>console.log("Connected to database"));
app.post("/signup",(req,res)=>{
     var name = req.body.name;
     var email = req.body.email;
     var phone = req.body.phno;
     var password = req.body.password;
     var data = {
         "name" : name,
         "email" : email,
         "phno" : phno,
         "password" : password
     }
     db.collection('users').insertOne(data,(err,collection)=>{
         if(err){
             throw err;
         }
         console.log("Record inserted");
     });

     return res.redirect('signup_success.html')
})*/

/*
app.get("/",(req,res) =>{
    res.set({
        "Allow-access-Allow-origin": '*'
    })
    return res.redirect('/index.html'); 
}).listen(3000);

console.log("Listening to port 3000")
var http = require('http'),
    fs = require('fs');


fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});*/
app.listen(3000);