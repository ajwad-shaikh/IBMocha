const NLU = require('watson-developer-cloud/natural-language-understanding/v1.js');
const api = require('./config.json');
const BASE_URL = api.url;
const API_KEY = api.key;
const nlu = new NLU({
    version: '2018-11-16',
    iam_apikey: API_KEY,
    url: BASE_URL
});


exports.get = function(url,features,callback){
    let parameters = {
        'url': url,
        'features': {
            'sentiment':{},
            'categories':{},
            'concepts':{},
            'keywords':{},
            'entities':{}
        },
    };
    
    nlu.analyze(parameters,(err, res)=>{
        if(err){
            console.error(err);
            return;
        }
        if(callback){
            callback(res);
        }
    });
}


