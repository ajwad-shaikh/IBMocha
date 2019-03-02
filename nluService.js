const NLU = require('watson-developer-cloud/natural-language-understanding/v1.js');
const api = require('./config.json');
const BASE_URL = api.url;
const API_KEY = api.key;
const nlu = new NLU({
    version: '2018-11-16',
    iam_apikey: API_KEY,
    url: BASE_URL
});


exports.get = (str, features, callback) => {
    let parameters = {
        
        'features': {
            // 'sentiment': {},
            // 'categories': {},
            // 'concepts': {},
            // 'keywords': {},
            'entities': {},
        },
    };

    if(validURL(str)){
        parameters.url = str;
    }
    else{
        parameters.text = str;
    }


    nlu.analyze(parameters, (err, res) => {
        if (err) {
            console.error(err);
            callback([],[], err);
            return;            
        }
        let persons = res.entities.filter(ele => ele.type=="Person");
        persons.sort((a, b) => {return b.relevance - a.relevance})
        let emails = res.entities.filter(ele => ele.type=="EmailAddress" )
        emails.sort((a, b) => {return b.relevance - a.relevance})        
        console.log({persons});    
        console.log({emails});    

        if (callback) {
            callback(persons, emails, err);
        }
    });
}


function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(str);
  }

