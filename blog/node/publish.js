/*导入需要用到的nodejs库*/
var method = require('./methods').method,
	querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("../../modules/node_modules/formidable");

// link to capped db
var myDB,
	database = require('./database').method;
database.connect('myDB', function (db) {
	myDB = db;
});

// upload img
function upload_img(response, request) {
	console.log("<!--- Request handler 'upload' was called --->");
	var d = {'status': 0};

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(err, fields, files) {
		if (!err) {
			try {
				console.log("parsing done");
				var image = files.upload.path.match(/[0-9a-z]{32}$/).pop() + files.upload.name.match(/\.(jpg|png|jpeg|gif)$/).shift();
				console.log('image name: ');
				console.log(image);
				if (!fs.existsSync('/tmp/img')) {
					fs.mkdir('/tmp/img', function (err) {
						if (err) {
							console.log('mkdir is fail.');
							console.log(err);
						} else {
							console.log('mkdir is done.');
						}
					});
				}
				image = '/tmp/img/' + image;
				fs.renameSync(files.upload.path, image);
				d.status = 1;
				d['url'] = image;
			} catch(e) {
				console.log(e);
			}
		} else {
			console.log("parsing fail: ");
			console.log(err);
		}
		method.writeOut(response, d.status? 200 : 409, d);
	});
}

// show upload img
function show_img(response, request) {
	console.log("<!--- Request handler 'show' was called --->");

	fs.readFile(request.url, "binary", function(error, file) {
	  if (error) {
	  	console.log('<!--- read file fail --->');
	    response.writeHead(500, {"Content-Type": "text/plain"});
	    response.write(error + "\n");
	    response.end();
	  } else {
	  	console.log('<!--- read file done --->');
	    response.writeHead(200, {"Content-Type": "image/" + request.url.match(/\.(jpg|png|jpeg|gif)$/).shift()});
	    response.write(file, "binary");
	    response.end();
	  }
	});
}

// submit blog data
function sub_blog(response, request) {
	console.log('<!--- submit blog --->');
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/sub_blog', 'POST')) return method.writeOut(response, 406, d);

	method.getRequestData(request, function (fields) {
		// 改变临时图片
		if (fields.cover !== '') {
			fields.cover = move_image(fields.cover);
			if (fields.cover === '') return method.writeOut(response, 406, d);
		}
		// 检查标签
		var query = fields['tags[]'];
		if (method.getClass(query) !== 'Array') query = [query];
		// 设置时间
		if (!fields.time) fields['time'] = new Date() * 1;

		myDB.collection('blogs', function (err, nebulae) {
			if (err) {
				console.log(err);
			} else {
				nebulae.insert(fields, function (err, result) {
					if (err) {
						console.log('insert blog database fail: ');
						console.log(err);
					} else {
						d.status = 1;
						d['id'] = result[0]._id;
						console.log('insert blog database done.');
					}
					method.writeOut(response, d.status? 200: 409, d);
				});
			}
		});
	});
}

/*
 * 转移图片
 * 移动目录：“/usr/local/node/Demos/client/images”
 */
function move_image(path) {
	var targetPath = '/usr/local/node/Demos/client/images',
		filePath = path.match(/\/[0-9a-z]{32}\.(jpg|jpeg|png|gif)/).shift();
	if (!fs.existsSync(targetPath)) {
		fs.mkdir(targetPath, function (err) {
			if (err) {
				console.log('mkdir is fail.');
				console.log(err);
			} else {
				console.log('mkdir is done.');
			}
		});
	}
	try{
		return !fs.renameSync(path, targetPath + filePath)? '/images' + filePath : '';
	} catch(e) {
		console.log(e);
		return '';
	}
}

exports.upload_img = upload_img;
exports.show_img = show_img;
exports.sub_blog = sub_blog;