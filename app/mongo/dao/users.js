var mongoose = require('mongoose');
var userModel = mongoose.model('Users');
var dateTool = require('../../tools/dateTool.js');

module.exports = {
	/**
		保存
	*/
	save: function(openid, data) {
		return new Promise(function(resolve, reject) {
			userModel.findOne({ userid: openid }).exec(function(err, model) {
				//已经存在了，就不再保存了
				if(model) {
					resolve();
				} else {
					data.userid = openid;
					var nowDate = dateTool.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
					console.log(nowDate);
					data.inTime = nowDate;
					data.updateTime = nowDate;
					var entity = new userModel(data);
					entity.save(function(err) {
		                if (err != null) {
		                	console.log(err);
		                }
		                resolve(entity._id)
			        });
				}
	        });
		});
	}
}