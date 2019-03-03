const express = require('express');
const bodyParser = require("body-parser");
const nlu = require('./nluService');
const app = express();
// const extractor = require('phone-number-extractor');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	res.render('index', { data: false });
});

app.post('/', (req, res) => {
	let reqUrl = req.body.url;
	let reqText = req.body.text;

	nlu.get(reqUrl || reqText, {}, (persons, emails, locations, err) => {
		console.log(persons);
		console.log(emails);
		console.log(locations);
		if (err) {
			res.render('index', { data: true});
		}
		res.render('index', { data: true, emails: emails, persons:persons, locations: locations, url:reqUrl, text:reqText});
	});
});

let listener = app.listen(8008, () => {
	console.log('Your app is listening on http://localhost:' + listener.address().port);
});
