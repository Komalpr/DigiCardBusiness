var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const card = require('./models/card');
var path = require('path');
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine','ejs');

const URI = "mongodb+srv://HamzaAkram:Hamza123@cluster0.swxnp.mongodb.net/DigiCards?retryWrites=true&w=majority";
mongoose.connect(URI, { useUnifiedTopology:true})
.then((result)=>console.log('Connected to the database'))
.catch((err)=> console.log(err))
var db = mongoose.connection;
db.once('open',()=>console.log("Connected to database"));

app.post('/add-data',(req,res)=>{
  const Cards = new card({
     firstname : ""+req.body.firstname,
     lastname : ""+req.body.lastname,
     email : ""+req.body.email,
     password : ""+req.body.password
  });
  Cards.save()/*
  .then((result)=> ({
      res.send(result)
  })
  .catch((err)=>{
      console.log(err)
  })
})*/
})

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