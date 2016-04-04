'use strict';

var request = require('request'),
		cheerio = require('cheerio'),
				 fs = require('fs');

var events = [];

var requestEventsHandler = (function() {

	request('http://www.colorado.com/events', function(err, res, body) {
		if(!err && res.statusCode === 200) {

			var $ = cheerio.load(body);
			
			$('span.date', 'div.item-list').each(function() {
				events.push($(this).text());
			});

			return writeToFile(events);
		}
	});
})(); 


var writeToFile = function(events) {
	fs.writeFile('events.txt', events, 'utf8', function(err) {
			if(err) {
				throw err;
			}

			console.log('it\'s saved!');
		});
};

