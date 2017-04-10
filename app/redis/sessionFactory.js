var client = require('./connect.js').getClient();
var uuid = require('node-uuid'); 

module.exports = {
	//openid 和 secretKey
	hmset: function(os) {
		var key = uuid.v1();
		client.hmset(key, os);
		client.expire(key, 60*60*24);
		return key;
	},
	set: function(os) {
		var key = uuid.v1();
		client.set(key, os);
		client.expire(key, 60*60*24);
		return key;
	},
	del: function(key) {
		client.del(key);
	},
	/**
		callback(err, reply)
	**/
	get: function(key, callback) {
		client.get(key, callback);
	}
}