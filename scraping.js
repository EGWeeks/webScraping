'use strict';

var request = require('request'),
		cheerio = require('cheerio'),
				 fs = require('fs');

var events = [];

request('http://www.colorado.com/events', function(err, res, body) {
	if(!err && res.statusCode === 200) {

		var $ = cheerio.load(body);
		$('span', 'div.item-list').text();
	}
});
