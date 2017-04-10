var client = require('./connect.js').getClient();
var uuid = require('node-uuid'); 

module.exports = {
	//openid 和 secretKey
	hmset: function(os) {
		var key = uuid.v1();
		client.hmset(key, os);
		// client.expire(key, 60*60*24);
		return key;
	},
	set: function(os) {
		var key = uuid.v1();
		client.set(key, os);
		// client.expire(key, 60*60*24);
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
	},

	checkHasRegister: function(sessionid, data) {
		var self = this;
		return new Promise(function(resolve, reject) {
			self.get(sessionid, function(err, reply) {
				if(!err) {
					//删掉无用的
					self.del(sessionid);
					if(!reply) {
						resolve(false);
						return;
					}
					data = JSON.parse(data);
					reply = JSON.parse(reply);
					if(data.openid === reply.openid) {
						resolve(true);
					} else {
						resolve(false);
					}
				} else {
					resolve(false);
				}
			});
		}) 
	}
}