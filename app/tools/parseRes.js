
module.exports = {
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