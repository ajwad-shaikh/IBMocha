const express = require('express');
const bodyParser = require("body-parser");
const nlu = require('./nluService');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
	res.render('index', { data: false });
})

app.post('/', (req, res) => {
	let req_url = req.body.url;
	nlu.get(req_url, {}, (data, err) => {
		console.log(data);
		if (err) {
			res.render('index', { data: true});
		}
		res.render('index', { data: true, res: JSON.stringify(data) });
	});
})

let listener = app.listen(8008, () => {
	console.log('Your app is listening on http://localhost:' + listener.address().port);
});
