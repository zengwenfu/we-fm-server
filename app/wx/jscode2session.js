var config = require('./config.js');
var httpsRequest = require('../tools/httpsRequest.js');

var url = 'https://api.weixin.qq.com/sns/jscode2session';

module.exports = function(code) {
	return new Promise(function(resolve, reject) {
		httpsRequest.get(url, {
			'appid': config.appid,
			'secret': config.secret,
			'js_code': code,
			'grant_type': 'authorization_code'
		}, function(err, data) {
			if(!err) {
				resolve(data);
			}
		});
	});
}

