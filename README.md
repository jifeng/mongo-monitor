mongo-monitor
=============

## 举例
    var mongo_monitor = require('mongo-monitor');
    var mongoServer = '127.0.0.1:27015'//mongodb的IP和端口
    mongo_monitor.fetchMongoREST(mongoServer, function (err, data) {
      // to 
    });

## 安装
npm install mongo-monitor

## 原理
封装了 mongodb 原生的REST 监控服务
具体参见[monitoring](http://docs.mongodb.org/manual/administration/monitoring/)



