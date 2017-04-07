var mongoose = require('mongoose');
var taskModel = mongoose.model('Tasks');

// 根据日期查询
function findByDate(date, userid) {
	return new Promise(function(resolve, reject) {
		taskModel.find({ date: date, userid: userid }).sort({ start:'asc' }).exec(function(err, data) {
			resolve(data);
		});
	});
}

// 保存或更新
function saveOrUpdate(data) {
	return new Promise(function(resolve, reject) {
		if(!data._id) { //保存
            var entity = new taskModel(data);
            entity.save(function(err) {

                if (err != null) {
                    console.log(err);
                    reject(err);
                }
                
                resolve(entity._id);
            });
        } else {
            var id = data._id;
            delete data._id;
            taskModel.update({ _id: id }, {'$set': data}, function(err, num) {
                if (err != null) {
                    console.log(err);
                    reject(err);
                }
               resolve(id);
            });
        }
	});
}

// 删除
function deleteById(id) {
	return new Promise(function(resolve, reject) {
		if(id != null && id != '') {
	        taskModel.remove({ _id: id }, function(err) {
	            if (err != null) {
	               reject(err);
	            } else {
	                resolve();
	            }
	        });
	    } else {
	       reject('id不能为空');
	    }
	})
}

module.exports = {
	findByDate: findByDate,
	saveOrUpdate: saveOrUpdate,
	deleteById: deleteById
}