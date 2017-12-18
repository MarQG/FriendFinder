//Imports
var express = require('express');
var bodyParser = require('body-parser');
var PORT = 8080;
var app = express();


// Express Config

app.use(express.static(__dirname + "/app"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routes
require("./app/routing/htmlRoutes")(app);
require('./app/routing/apiRoutes')(app);

//Listener
app.listen(process.env.PORT || PORT, function(){
    console.log("Server listening on port:" + PORT);
});