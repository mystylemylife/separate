var express = require('express');
var router = express.Router();

// 该路由使用的中间件
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// 定义网站主页的路由
router.get('/list', function(req, res) {
  res.send('list home');
});
// 定义 about 页面的路由
router.get('/list/about', function(req, res) {
  res.send('About list');
});

module.exports = router;