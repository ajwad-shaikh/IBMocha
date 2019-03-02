var express = require('express');
var bodyParser = require("body-parser");
const nlu = require('./nluService');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
	res.render('index', { data: false });
})


app.post('/', function (req, res0, body) {

	let req_url = req.body.url;
	nlu.get(req_url, {}, (res) => {
		console.log(res);
		res0.render('index', { data: true, res:JSON.stringify(res) });
	});
})

var listener = app.listen(8008, function () {
	console.log('Your app is listening on port http://localhost:' + listener.address().port);
});
