var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var connectRedis = require('./app/redis/connect.js').connect;
var connectMongo = require('./app/mongo/connect.js');
var sessionMiddleware = require('./app/middleware/sessionMiddleware.js');



var port = 5000;
var app = express();

app.use(express.static(path.join(__dirname, '/doc')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//连接redis 连接mongo  完了之后配置路由
connectRedis().then(function() {
	return connectMongo();
}).then(function() {

	// 登录态拦截
	app.use('/timer/*', sessionMiddleware);

	// 用户相关接口(不需要登录态)
	app.use('/user', require('./app/routers/user.js'));
	app.use('/timer', require('./app/routers/timer.js'));
});


// 创建应用服务器
var server = http.createServer(app);

server.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('启动成功');
});