// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/login',function(req,res){
	res.sendFile(__dirname + '/views/login.html');
  var req_url=req.body.url;
  console.log("URL = "+req_url);
  res.end("yes");
});

// listen for requests :)
var listener = app.listen(8008, function() {
  console.log('Your app is listening on port http://localhost:' + listener.address().port);
});
