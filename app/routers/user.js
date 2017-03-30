var express = require('express');
var router = express.Router();

/**
	初次登录，需要注册用户
*/
router.post('/register', function(req, res, next) {
	var data = {
		code: '0',
		msg: '',
		data: {

		}
	};
	res.send(JSON.stringify(data));
});


module.exports = router;