/*导入需要用到的nodejs库*/
var method = require("./methods").method,
	formidable = require("../../modules/node_modules/formidable");

// link to capped db
var myDB,
	database = require('./database').method;
database.connect('myDB', function (db) {
	myDB = db;
});

// sign up
function signUp(response, request) {
	console.log("<!--- signUp --->");
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/signUp', 'POST')) return method.writeOut(response, 406, d);

	var form = new formidable.IncomingForm();
	form.parse(request, function (err, fields, files) {
	   console.log('IncomingForm: ');
	   console.log(fields);
	});

	method.getRequestData(request, function (fields) {
		// 当没有users集合时，会自动创建
		myDB.collection('users', function (err, nebulae) {
			if (!err) {
				nebulae.insert(fields, function (err, result) {
					if (!err) {
						d.status = 1;
						console.log('Insert: ');
						console.log(result);
					} else {
						console.log(err);
					}
					method.writeOut(response, d.status? 200: 409, d);
				});
			} else {
				console.log(err);
			}
		});
	});
}

// login
function login(response, request) {
	console.log("<!--- login --->");
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/login', 'GET')) return method.writeOut(response, 406, d);

	method.getRequestData(request, function (fields) {
		// 访问 users 集合
		myDB.collection('users', function (err, nebulae) {
			if (!err) {
				nebulae.findOne(fields, function (err, result) {
					if (!err) {
						d.status = 1;
						d['id'] = result._id;
						console.log('find: ');
						console.log(result);
					} else {
						console.log(err);
					}
					method.writeOut(response, d.status? 200: 409, d);
				});
			} else {
				console.log(err);
			}
		});
	});
}

exports.login = login;
exports.signUp = signUp;
