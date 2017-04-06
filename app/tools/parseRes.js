
module.exports = {
	/*******用户模块00xx******************/
	// 未登录
	ERROR_SESSIONID: '0001',
	ERROR_SESSIONID_MSG: '未登录',
	// 读取session失败
	ERROR_READ_SESSION: '0002',
	ERROR_READ_SESSION_MSG: '读取session失败',

	// 封装返回结果
	parseSuccess: function(data) {
		var result = {
			code: '0',
			msg: '',
			data: data
		};
		return JSON.stringify(result);
	},
	parseError: function(code, msg) {
		var result = {
			code: code,
			msg: msg
		};
		return JSON.stringify(result);
	}
}