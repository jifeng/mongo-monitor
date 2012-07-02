/*!
 * smclient - lib/client.js
 * Copyright(c) 2012 Taobao.com
 * Author: jifeng.zjd <jifeng.zjd@taobao.com>
 */

/**
 * 监控 mongodb
 * Module dependencies.
 */
var urllib = require('urllib');
/**
 * 得到mongodb REST 的相关数据
 * @param  {[type]}   url      ['10.232.36.110:10001']
 * @param  {Function} callback [description]
 * err, data
 */
function fetchMongoREST(url, callback) {
  if (!(/^\d+\.\d+\.\d+\.\d+\:\d+/.test(url))) {
    return callback(new Error('url is invalid'));
  }
  var spices = url.split(':');
  var host = spices[0];
  var port = parseInt(spices[1], 10) + 1000;
  var mongodbRESTURL = 'http://' + host + ':' + port;
  urllib.request(mongodbRESTURL, callback);
}

exports.fetchMongoREST = fetchMongoREST;