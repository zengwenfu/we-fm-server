var connect = require('./connect.js');


connect().then(function() {
	console.log('ok');
	try {
		var userDao = require('./dao/users.js');
	} catch(e) {
		console.log(e);
	}
	
	var data = {
		//头像
		avatarUrl: "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqBVsqgZuGsIe29qXl9xiaLcbQcPqovHiacQAwPuMmqaMSrribAibZ5LDAV1UBow4bgLckmKu8qj0biasw/0",
		//城市
		city: "Shenzhen",
		//国家
		country: "CN",
		//性别 0：未知、1：男、2：女
		gender: 1,
		//语言
		language: "zh_CN",
		//昵称
		nickName: "小虫巨蟹",
		//省份
		province: "Guangdong",
	}


	userDao.save('id', data).then(function(model) {
		console.log(model);
	});
});

