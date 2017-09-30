var mongoose = require('mongoose'),
  DB_URL = 'mongodb://127.0.0.1:27017/test';
var db = mongoose.connection;
db.on("error",console.error.bind(console, "connection error:"));
db.once("open", function () {
    // 已连接！
});
