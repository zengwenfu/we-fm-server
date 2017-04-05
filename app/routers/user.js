var express = require('express');
var router = express.Router();
var jscode = require('../wx/jscode2session.js');

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
		res.send(data);
	});
});


module.exports = router;