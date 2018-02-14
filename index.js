//Express
let express = require("express"); // Pulling in the express package
let app = express(); //initializing an express application and saving in the variable 'app' and then we can use it in our application
const router = express.Router();
const path = require ("path"); 
const authentication = require('./routes/authentication')(router);
const trajets = require ('./routes/trajets')(router);




//Body Parser
const bodyParser =  require ("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Static Folders
app.use(express.static(__dirname + '/client/dist'));// we give access of angular app to server
app.use('/authentication', authentication);
app.use('/trajets', trajets);


//mongoose
let mongoose = require('mongoose');
const config = require('./config/dataBase'); // import ./config/dataBase   we assigned it to the const of CONFIG
// mongoose.Promise = global.Promis; //configuration issus with mongoose
mongoose.connect(config.uri, (err) => { // now we can connect to the URI in the  ./config/dataBase  and after adding sth for connection errors 
    if(err) {
        console.log('Could NOT connect to databse :', err);
    } else {
    //    console.log(config.secret)
        console.log('Connected to databse :' + config.db)
    }
});

// //Mongo DB
// let mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/UserSchema');

// let UserSchema = new mongoose.Schema({
//     first_name :{type:String, require : true},
//     last_name :{type:String, require : true},
//     email :{type:String, require : true},
//     editable :{type:Boolean, require : true}
// })

// mongoose.model ("User", UserSchema);
// let User = mongoose.model("User");

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200'
}))


app.get('*', (req, res) => { //any time user send get request 
    res.sendFile(path.join(__dirname + '/client/dist/index.html')); // we are going to respond with sth(here is index.html file)
});
  
 
  // Server Listening @ 8080 => http://localhost:8080
app.listen(8080, () => console.log("Server runnig at 8080"));