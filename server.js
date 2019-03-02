const express = require('express');
const bodyParser = require("body-parser");
const nlu = require('./nluService');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index', { data: false });
});

app.post('/', (req, res) => {
<<<<<<< HEAD
	let req_url = req.body.url;
	nlu.get(req_url, {}, (persons, emails, locations, err) => {
		console.log(persons);
		console.log(emails);
		console.log(locations);
		if (err) {
			res.render('index', { data: true});
		}
		res.render('index', { data: true, emails: emails, persons:persons, locations: locations});
=======
	let reqUrl = req.body.url;
	let reqText = req.body.text;

	nlu.get(reqUrl || reqText, {}, (persons, emails, err) => {
		if (err) {
			res.render('index', { data: true});
		}
		res.render('index', { data: true, url:reqUrl, text:reqText, emails: emails, persons:persons  });
>>>>>>> 981dd7040622d16ac7febdab088effe11cc8e61e
	});
});

let listener = app.listen(8008, () => {
	console.log('Your app is listening on http://localhost:' + listener.address().port);
});
