var redis = require('redis');
var client = redis.createClient();

 
function connect() {
	return new Promise(function(resolve, reject) {
		//连接成功
		client.on('connect', function() {
			console.log('redis connected');
			resolve(client);
		});


		//连接失败
		client.on('error', function(err) {
			console.log(err);
		});
	});
	
}


module.exports = {
	connect: connect,
	getClient: function() {
		return client;
	}
}

