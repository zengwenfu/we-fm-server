var express = require('express');
var router = express.Router();
var request = require('../tools/request.js');

const appid = 'wxd6ff269439135e84';
const secret = '3dde33e4a3a04a4839212c0bc81cdee6';

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
	var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code';
	request({
		url: url,
		callback: function(data) {
			res.send(data);
		}
	}, null);
});


module.exports = router;