var express = require('express');
var http = require('http');
var timer = require('./routers/timer.js');
var user = require('./routers/user.js');

var port = 5000;
var app = express();

// 配置路由
app.use('/timer', timer);
app.use('/user', user);


// 创建应用服务器
var server = http.createServer(app);

server.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('启动成功');
});