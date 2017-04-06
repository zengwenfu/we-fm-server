var mongoose = require('mongoose');
var schema = mongoose.Schema;

// 任务
var modelName = 'Tasks';
var tableName = 'tasks';

var tableSchema = new mongoose.Schema({
	//微信用户标识 也就是openid
	userid: String,
	//类型1，2，3，4（重要紧急，紧急不重要，不紧急重要，不紧急不重要）
	type: String,
	//date日期 yyyy/MM/dd
	date: String,
	//标题
	title: String,
	//描述
	discript: String,
	//开始时间 HH:mm
	start: String,
	//结束时间 HH:mm
	end: String,
	//完成标志0，1（未完成，完成）
	finished: String,
	//扩展字段1
	extend1: String,
	//扩展字段2
	extend2: String
});

mongoose.model(modelName, tableSchema, tableName);