# 接口说明
所有接口返回格式为：
```
    {
        code: '0', //0表示成功
        msg: '', //错误信息
        data: {} // data
    }
```
以下的所有接口返回值说明 只包括data中的内容
## 获取当前用户当日日程
1）请求类型：get    
2）url:   http://we.facemagic888.com/timer/getToday [测试](http://we.facemagic888.com/timer/getToday)  
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| useid | 从微信获取的唯一标识 | string |  |  


4）返回值说明：

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |   
| date | 日期 | string |  |
| list | 任务列表| array | |

**以下是list中的任务项字段：**

| 字段 | 说明 | 类型 | 备注 |  
| --- | --- | --- | --- |    
| id | id | string | 用于删除修改 |
| type | 类型 | string | 1：重要紧急，2：紧急不重要，3：不紧急重要，4：不紧急不重要 |  
| title | 标题 | string |  |
| discript | 描述 | string |  |
| start | 开始时间 | string |  |
| end | 结束时间 | string |  |
| finished | 完成标志 | string | 0：未完成，1：完成  |

5）返回实例
```
    {
        "code": "0", 
        "msg": "", 
        "data": {
            "list": [
                {
                    "type": "1", 
                    "title": "测试任务", 
                    "discript": "任务描述", 
                    "start": "10:00", 
                    "end": "11:00", 
                    "userid": "oUv8K0dIqAgjh9aCUvagBpdTYac0", 
                    "finished": "1", 
                    "date": "2017/04/07", 
                    "_id": "58e70a4d74b549052ae2a7f5", 
                    "__v": 0
                }
            ], 
            "date": "2017/04/07"
        }
    }
```
6) 调用实例(在微信请求不需要显示输入sessionid)
```
    http://localhost:5000/timer/getToday?sessionid=16dd9eb0-1a78-11e7-a93b-97017328f40e
```
## 查询当前用户某日日程
1）请求类型：get    
2）url:   http://we.facemagic888.com/timer/getBydate [测试](http://we.facemagic888.com/timer/getBydate)  
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| useid | 从微信获取的唯一标识 | string |  |  
| date | 日期 | string | 格式：2013/03/30 | 

4) 返回值说明，同上
5）调用实例
```
    http://localhost:5000/timer/getByDate?sessionid=16dd9eb0-1a78-11e7-a93b-97017328f40e&date=2017/04/07
```

## 增加日程   
1）请求类型：post    
2）url:   http://we.facemagic888.com/timer/addTask    
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| useid | 从微信获取的唯一标识 | string |  |  
| title | 标题 | string |  | 
| discript | 描述 | string |  | 
| type | 类型 | string |  | 
| date | 日期 | string |  | 
| start | 开始时间 | string |  | 
| end | 结束时间 | string |  | 

4) 调用实例：
```
    var data = {
        //类型1，2，3，4（重要紧急，紧急不重要，不紧急重要，不紧急不重要）
        type: '1',
        //标题
        title: '测试任务',
        //描述
        discript: '任务描述',
        //开始时间 HH:mm
        start: '10:00',
        //结束时间 HH:mm
        end: '11:00'
    }

    $.post('/timer/addTask', {
        data: JSON.stringify(data),
        sessionid: '16dd9eb0-1a78-11e7-a93b-97017328f40e'
    }, function(id) {
        console.log(id);
    });
```
## 编辑日程
1）请求类型：post    
2）url:   http://we.facemagic888.com/timer/editTask    
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| id | id | string |  | 
| title | 标题 | string |  | 
| discript | 描述 | string |  | 
| type | 类型 | string |  | 
| start | 开始时间 | string |  | 
| end | 结束时间 | string |  | 
| finished | 完成标志 | string |  | 


4) 调用实例：
```
    var data = {
        _id: '58e70a4d74b549052ae2a7f5',
        finished: '1' 
    }


    $.post('/timer/editTask', {
        data: JSON.stringify(data),
        sessionid: '16dd9eb0-1a78-11e7-a93b-97017328f40e'
    }, function(id) {
        console.log(id);
    });
```
## 删除日程
1）请求类型：post    
2）url:   http://we.facemagic888.com/timer/deleteTask    
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| id | id | string |  | 


4) 调用实例：
```
    $.post('/timer/deleteTask', {
        id: '58e70a0d8b53b00503359833', sessionid:'16dd9eb0-1a78-11e7-a93b-97017328f40e'
    }, function() {

    });
```
## 注册
1）请求类型：post    
2）url:   http://we.facemagic888.com/user/register    
3）入参说明:     

| 字段 | 说明 | 类型 | 备注 |      
| --- | --- | --- | --- |    
| userid | 微信用户的唯一标识 | string |  | 
| username | 微信用户名 | string |  | 


4) 返回实例：
```
    {
        code: '0',
        msg: '',
        data: {

        }
    }
```