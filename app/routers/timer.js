var express = require('express');
var router = express.Router();

// 根据日期查询
function getByDate(date, userid) {
	var data =  [
			{
				id:'1',
				type: '1',
				title: '处理老板的邮件',
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				finished: '0', 
				start: '09:00',
				end: '10:00'
			}, {
				id:'2',
				type: '1',
				title: '处理老板的邮件',
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				finished: '1', 
				start: '09:00',
				end: '10:00'
			}, {
				id:'3',
				type: '1',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'4',
				type: '1',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'5',
				type: '2',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'6',
				type: '2',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'7',
				type: '3',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'8',
				type: '3',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'9',
				type: '4',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}, {
				id:'10',
				type: '4',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '09:00',
				end: '10:00'
			}
		];

	return data;
}

/**
*	获取用户当天日程
*	入参：userid
*   返回：
	{
		code: '0', //成功
		msg: '',
		data: [
			{
				type: '1',
				title: '处理老板的邮件',
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				finished: '0', 
				start: '2017/03/30 09:00',
				end: '2017/03/30 10:00'
			}, {
				type: '1',
				title: '处理老板的邮件',
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				finished: '1', 
				start: '2017/03/30 09:00',
				end: '2017/03/30 10:00'
			}, {
				type: '1',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '2017/03/30 09:00',
				end: '2017/03/30 10:00'
			}, {
				type: '1',
				title: '处理老板的邮件',
				finished: '0', 
				discript: '这件事情非常紧急，如果不及时处理，又被辞退的风险',
				start: '2017/03/30 09:00',
				end: '2017/03/30 10:00'
			}
		]	
	}
*/
router.get('/getToday', function(req, res, next) {
	// mock数据
	var data = getByDate();
	data = {
		code: '0',
		msg: '',
		data: {
			list: data,
			date: '2017/03/30'
		}
	};
	res.send(JSON.stringify(data));
});

router.get('/getByDate', function(req, res, next) {
	// mock数据
	var data = getByDate();
	data = {
		code: '0',
		msg: '',
		data: {
			list: data,
			date: '2017/03/30'
		}
	};
	res.send(JSON.stringify(data));
});




/**
	增加日程
*/
router.post('/addTask', function(req, res, next) {
	var data = {
		code: '0',
		msg: '',
		data: {

		}
	};
	res.send(JSON.stringify(data));
});

/**
	标记日程
*/
router.post('/editTask', function(req, res, next) {
	var data = {
		code: '0',
		msg: '',
		data: {

		}
	};
	res.send(JSON.stringify(data));
});

/**
	删除日程
*/
router.post('/deleteTask', function(req, res, next) {
	var data = {
		code: '0',
		msg: '',
		data: {

		}
	};
	res.send(JSON.stringify(data));
})


module.exports = router;