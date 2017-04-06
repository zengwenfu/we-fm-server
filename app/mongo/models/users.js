var mongoose = require('mongoose');
var schema = mongoose.Schema;

// 任务
var modelName = 'Users';
var tableName = 'users';

var tableSchema = new mongoose.Schema({
	//微信用户标识 也就是openid
	userid: String,
	//头像
	avatarUrl: String,
	//城市
	city: String,
	//国家
	country: String,
	//性别 0：未知、1：男、2：女
	gender: Number,
	//语言
	language: String,
	//昵称
	nickName: String,
	//省份
	province: String,
	//加入时间
	inTime: String,
	//更新时间
	updateTime: String
});

mongoose.model(modelName, tableSchema, tableName);