var sf = require('./sessionFactory.js');

sf.set('helloword', function(key) {
	console.log(key);
	sf.get(key, function(err, reply) {
		console.log(reply.toString());
	});
});