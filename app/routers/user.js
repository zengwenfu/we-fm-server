var express = require('express');
var router = express.Router();
var jscode = require('../wx/jscode2session.js');
var sessionFactory = require('../redis/sessionFactory.js');

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


/**
*  登录
*/
router.post('/login', function(req, res, next) {
	var code = req.body.code;
	jscode(code).then(function(data) {
		var key = sessionFactory.set(data.toString());
		res.send(key);
	});
});


module.exports = router;