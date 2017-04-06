var express = require('express');
var router = express.Router();
var jscode = require('../wx/jscode2session.js');
var sessionFactory = require('../redis/sessionFactory.js');
var parseRes = require('../tools/parseRes.js');
var parseSuccess = parseRes.parseSuccess;
var parseError = parseRes.parseError;
var userDao = require('../mongo/dao/users.js');

//用户模块错误码按照00编码
//session_id不合法
const ERROR_SESSIONID = '0001';
const ERROR_SESSIONID_MSG = 'session_id不合法';
//读取session失败
const ERROR_READ_SESSION = '0002';
const ERROR_READ_SESSION_MSG = '读取session失败';

/**
	初次登录，需要注册用户
*/
router.post('/register', function(req, res, next) {
	var data = JSON.parse(req.body.data);
	var sessionid = req.body.sessionid;
	//查询openid
	sessionFactory.get(sessionid, function(err, reply) {
		if(!err) {
			if(!reply) {
				res.send(parseError(ERROR_SESSIONID, ERROR_SESSIONID_MSG));
			}
			var ses = JSON.parse(reply);
			userDao.save(ses.openid, data).then(function() {
				res.send(parseSuccess({}));
			});
		} else {
			res.send(parseError(ERROR_READ_SESSION, ERROR_READ_SESSION_MSG));
		}
	});
});


/**
*  登录
*/
router.post('/login', function(req, res, next) {
	var code = req.body.code;
	jscode(code).then(function(data) {
		var key = sessionFactory.set(data.toString());
		res.send(parseSuccess({
			sessionid: key
		}));
	});
});


module.exports = router;