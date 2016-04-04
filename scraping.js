'use strict';

var request = require('request'),
		cheerio = require('cheerio'),
				 fs = require('fs');

var events = [];

request
	.get('http://www.colorado.com/events')
	.on('success', function() {

		var $ = cheerio.load(body);
	
		$('span.date', 'div.item-list').each(function(index, element) {
			events.push($(this).text());
		});

		return events;

	})
	.on('error', function(err) { console.log(err); })
	.pipe(fs.writeFile('events.txt', events, 'utf8', function(err) { if(err) throw err; console.log('It\'s saved!'); }));

