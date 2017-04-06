var config = require('./config');
var mongoose = require('mongoose');

var conn = 'mongodb://localhost/fmTimmer'

module.exports = function() {
    return new Promise(function(resolve, reject) {
        // 创建数据库链接
        mongoose.connect(conn);
        var db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));

        // 打开数据库链接
        db.once('open', function() {
            console.log('mongoose open...');
            resolve();
        }); 

        //载入实体
        require('./models/tasks.js');
        require('./models/users.js');

    });

}