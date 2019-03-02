var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const nlu = require('./nluService');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/login',function(req,res){
  var req_url=req.body.url;
  console.log("URL = "+req_url);
  nlu.get(req_url,{},(res)=>{
    console.log(res);
  });
	res.sendFile(__dirname + '/views/login.html');
  res.end("yes");
});

var listener = app.listen(8008, function() {
  console.log('Your app is listening on port http://localhost:' + listener.address().port);
});
