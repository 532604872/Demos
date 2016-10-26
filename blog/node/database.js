/*导入需要用到的nodejs库*/


// link to capped db
var MongoClient = require('../../mongodb').MongoClient;

/* 
 * 连接数据库
 * @param string 数据库名
 * 初始链接数据库 'myDB'
 */
function connect(name, callback) {
	MongoClient.connect('mongodb://localhost:27017/', function (err, db) {
		callback(db.db(name));
	});
};

/*
 * 更新连接数据库
 * @parm string 数据库名
 */
function update(db, name, callback) {
	db.close(function () {
		console.log('close database');
		connect(name, callback);
	});
}


exports.method = {
	connect: connect,
	update: update
}