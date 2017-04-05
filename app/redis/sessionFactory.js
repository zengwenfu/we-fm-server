var connect = require('./connect.js');
var uuid = require('node-uuid'); 

module.exports = {
	//openid 和 secretKey
	set: function(os, callback) {
		var key = uuid.v1();
		connect(function(err, client) {
			if(!err) {
				client.set(key, os);
				client.expire(key, 60*60*24);
				callback(key);
			} 
		});
	},
	/**
		callback(err, reply)
	**/
	get: function(key, callback) {
		connect(function(err, client) {
			if(!err) {
				client.get(key, callback);
			}
		})
	}
}