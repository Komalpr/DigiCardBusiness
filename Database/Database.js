
var mongoose = require("mongoose")
const URI = "mongodb+srv://HamzaAkram:Hamza123@cluster0.swxnp.mongodb.net/DigiCards?retryWrites=true&w=majority";
mongoose.connect(URI, { useUnifiedTopology:true})
.then((result)=>console.log('Connected to the database'))
.catch((err)=> console.log(err))
var db = mongoose.connection;
db.once('open',()=>console.log("Connected to database"));
