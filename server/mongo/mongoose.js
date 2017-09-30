var mongoose = require('mongoose'); //引用mongoose模块
var db = mongoose.createConnection('localhost', 'test'); //创建一个数据库连接
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
  console.log('数据库连接成功')
});

// 定义一个Schema
var PersonSchema = new mongoose.Schema({
  name: String //定义一个属性name，类型为String
});

// 将该Schema发布为Model
var PersonModel = db.model('Per', PersonSchema);


// 用Model创建Entity
var personEntity = new PersonModel({ name: 'Krouky' });
//打印这个实体的名字看看
console.log(personEntity); //Krouky

// 将数据保存的数据库，此时数据库便有数据了
personEntity.save()