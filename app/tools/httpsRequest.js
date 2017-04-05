var https = require('https');
var querystring = require('querystring');


module.exports = {
	get: function(url, params, callback) {

		if(params) {
			url = url + '?' + querystring.stringify(params);
		}

		https.get(url, function(res) {

			res.on('data', function(data){
		        callback(null, data);
		    });

		}).on('error', function(err){
		    console.error(err);
		    callback(err);
		});
	}
}