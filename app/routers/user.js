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
const ERROR_SESSIONID = parseRes.ERROR_SESSIONID;
const ERROR_SESSIONID_MSG = parseRes.ERROR_SESSIONID_MSG;
//读取session失败
const ERROR_READ_SESSION = parseRes.ERROR_READ_SESSION;
const ERROR_READ_SESSION_MSG = parseRes.ERROR_READ_SESSION_MSG;

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

//检查该用户是否已经注册过
function checkHasRegister(sessionid, data) {
	return new Promise(resolve, reject) {
		sessionFactory.get(sessionid, function(err, reply) {
			if(!err) {
				//删掉无用的
				sessionFactory.del(sessionid);
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
	}
}

/**
*  登录
*/
router.post('/login', function(req, res, next) {
	var code = req.body.code;
	
	//原先的会话id
	var sessionid = req.body.sessionid;
	
	jscode(code).then(function(data) {
		data = data.toString;
		var key = sessionFactory.set(data);
		if(!sessionid) {
			res.send(parseSuccess({
				sessionid: key,
				registered: '0'
			}));
		} else {
			checkHasRegister(sessionid, data).then(function(registered) {
				res.send(parseSuccess({
					sessionid: key,
					registered: registered ? '1' : '0'
				}));
			});
		}
		
	});
});



module.exports = router;