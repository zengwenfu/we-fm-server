var redis = require('redis');
var client = redis.createClient();
var connected = false;


module.exports = function(callback) {

	//已经连接过
	if(connected) {
		callback(null, client);
	}

	//连接成功
	client.on('connect', function() {
	    console.log('redis connected');
	    connected = true;
	    callback(null, client)
	});


	//连接失败
	client.on('error', function(err) {
		console.log(err);
		callback(err);
	});
}

