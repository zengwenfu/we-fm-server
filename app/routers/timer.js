var express = require('express');
var router = express.Router();
var taskDao = require('../mongo/dao/tasks.js');
var dateTool = require('../tools/dateTool.js');
var parseRes = require('../tools/parseRes.js');
var parseSuccess = parseRes.parseSuccess;
var parseError = parseRes.parseError;

// 根据日期查询
function getByDate(date, userid) {
	return new Promise(function(resolve, reject) {
		taskDao.findByDate(date, userid).then(function(data) {
			resolve(data);
		});
	});
}

/**
*	获取用户当天日程
*
*/
router.get('/getToday', function(req, res, next) {

	var date = dateTool.format(new Date(), 'yyyy/MM/dd');
	var userid = req.openid;

	getByDate(date, userid).then(function(data) {
		console.log(data);
		var result = parseSuccess({
			list: data,
			date: date
		});
		res.send(result);
	});
});

/**
*	获取某日日程
*/
router.get('/getByDate', function(req, res, next) {
	var date = req.param('date');
	var userid = req.openid;
	getByDate(date, userid).then(function(data) {
		console.log(data);
		var result = parseSuccess({
			list: data,
			date: date
		});
		res.send(result);
	});
});


/**
	增加日程
*/
router.post('/addTask', function(req, res, next) {
	var data = JSON.parse(req.body.data);
	var userid = req.openid;
	var date = dateTool.format(new Date(), 'yyyy/MM/dd');
	data.userid = userid;
	data.finished = '0';
	data.date = date;
	taskDao.saveOrUpdate(data).then(function(id) {
		res.send(parseSuccess({id: id}));
	})
});

/**
	标记日程
*/
router.post('/editTask', function(req, res, next) {
	var data = JSON.parse(req.body.data);
	console.log(data);
	taskDao.saveOrUpdate(data).then(function(id) {
		res.send(parseSuccess({id: id}));
	});
});

/**
	删除日程
*/
router.post('/deleteTask', function(req, res, next) {
	var id = req.body.id
	taskDao.deleteById(id).then(function() {
		res.send(parseSuccess({}));
	});
})


module.exports = router;