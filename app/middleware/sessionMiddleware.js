var sessionFactory = require('../redis/sessionFactory.js');
var parseRes = require('../tools/parseRes.js');
var parseSuccess = parseRes.parseSuccess;
var parseError = parseRes.parseError;

//用户模块错误码按照00编码
//未登录
const ERROR_SESSIONID = parseRes.ERROR_SESSIONID;
const ERROR_SESSIONID_MSG = parseRes.ERROR_SESSIONID_MSG;
//读取session失败
const ERROR_READ_SESSION = parseRes.ERROR_READ_SESSION;
const ERROR_READ_SESSION_MSG = parseRes.ERROR_READ_SESSION_MSG;

module.exports = function(req, res, next) {
	var sessionid = req.body.sessionid || req.param('sessionid');
	if(!sessionid) {
		res.send(parseError(ERROR_SESSIONID, ERROR_SESSIONID_MSG));
		return;
	}
	//查询openid
	sessionFactory.get(sessionid, function(err, reply) {
		if(!err) {
			console.log(reply);
			if(!reply) {
				res.send(parseError(ERROR_SESSIONID, ERROR_SESSIONID_MSG));
			}
			var ses = JSON.parse(reply);
			req.openid = ses.openid;
			next();
		} else {
			res.send(parseError(ERROR_READ_SESSION, ERROR_READ_SESSION_MSG));
		}
	});

}