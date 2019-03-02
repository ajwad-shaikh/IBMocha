const rp = require('request-promise');
const $ = require('cheerio');

const url = 'https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-India?page=';
//https://engineering.careers360.com/colleges/list-of-engineering-colleges-in-India?page=1
var c = 0;

var func = function(i){
	if(i<213){
		let url_ = url + i;
		rp(url_)
		.then((html)=>{
			console.log('Page : ' + i);
			console.log('url : ' + url_)
			
			$('.new-searchcollegeListing',html).each( (i_,li) => {
				console.log('>>> ' + c)
				console.log($('.title',li).text())
				console.log($('.clg-state',li).text())
				c++;
			})
			func(i+1)
		})
		.catch((err) => {
        	func(i)
    	});

	}
}

func(0)

//class apachesolr_search-features
//new-searchcollegeListing search-result sponsored has_review