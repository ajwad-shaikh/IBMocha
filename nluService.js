const NLU = require('watson-developer-cloud/natural-language-understanding/v1.js');
const api = require('./config.json');
const BASE_URL = api.url;
const API_KEY = api.key;
const nlu = new NLU({
    version: '2018-11-16',
    iam_apikey: API_KEY,
    url: BASE_URL
});


exports.get = (url, features, callback) => {
    let parameters = {
        'url': url,
        'features': {
            // 'sentiment': {},
            // 'categories': {},
            // 'concepts': {},
            // 'keywords': {},
            'entities': {},
        },
    };

    nlu.analyze(parameters, (err, res) => {
        if (err) console.error(err);

        let persons = res.entities.filter(ele => ele.type=="Person");
        persons.sort((a, b) => {return b.relevance - a.relevance})
        let emails = res.entities.filter(ele => ele.type=="EmailAddress" )
        emails.sort((a, b) => {return b.relevance - a.relevance})
        let locations = res.entities.filter(ele => ele.type=="Location" )
        locations.sort((a, b) => {return b.relevance - a.relevance})
        // console.log({persons});
        // console.log({emails});
        // console.log('entites',res.entities);
        // console.log('keyword',res.keywords);

        if (callback) {
            callback(persons, emails, locations, err);
        }
    });
}
