var express = require('express');
var app = express();
var Mock = require('mockjs');
var code = require('./mock/list');
var routes = require('./routes');

// 跨域
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type"); //预检请求使用
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); //预检请求使用
  next();
});
// var data = Mock.mock(code)

// app.use('/article', article);
routes(app);


// app.get('/list', function(req, res) {
//   res.send(data);
// });

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
