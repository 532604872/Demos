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

// 获取blog详情
function blogDetail(response, request) {
	console.log('<!--- blog detail --->');
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/blogDetail', 'GET')) return method.writeOut(response, 406, d);

	method.getRequestData(request, function (fields) {
		var _id = method.ObjectId(fields.bid);
		if (!_id) return method.writeOut(response, d.status? 200: 409, d);
		// 访问 blogs 集合
		myDB.collection('blogs', function (err, nebulae) {
			if (!err) {
				nebulae.findOne({'_id': _id}, function (err, result) {
					if (err) {
						console.log(err);
					} else {
						d.status = 1;
						d['data'] = method.resultClear(result);
						console.log('result time: ');
						console.log(result.time);

						nebulae.findOne({$and: [ {time: {$gt: result.time}}, {'_id': {$ne: _id}} ]}, {sort: {time: 1}, fields: {_id: 1, title: 1}},function (err, res) {
							if (err) {
								console.log(err);
							} else {
								console.log('next result: ');
								console.log(res);
								if (res) {
									d.data['next'] = method.resultClear(res);
								} else {
									console.log('next result null');
								}
							}
							nebulae.findOne({$and: [ {time: {$lt: result.time}}, {'_id': {$ne: _id}} ]}, {sort: {time: -1}, fields: {_id: 1, title: 1}}, function (err, r) {
								if (err) {
									console.log(err);
								} else {
									console.log('pare result: ');
									console.log(r);
									if (r) {
										d.data['pare'] = method.resultClear(r);
									} else {
										console.log('pare result null');
									}
								}
								method.writeOut(response, d.status? 200: 409, d);
							});
						});
					}
				});
			} else {
				console.log(err);
			}
		});
	});
}

// 通过标签获取标签相关blog
function relatedBlog(response, request) {
	console.log('<!--- related blog --->');
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/relatedBlog', 'GET')) return method.writeOut(response, 406, d);
	
	method.getRequestData(request, function (fields) {
		// 访问 blogs 集合
		myDB.collection('blogs', function (err, nebulae) {
			if (!err) {
				var query = fields['tags[]'];
				if (method.getClass(query) !== 'Array') query = [query];

				nebulae.find({'tags[]': {$in: query}}, {sort: {time: -1}, fields: {id: 1,time: 1, title: 1}, limit: 6},function (err, cursor) {
					if (!err) {
						if (cursor) {
							d.status = 1;
							d['data'] = [];
							cursor.each(function (err, result) {
								if(result != null) {
									d.data.push(method.resultClear(result));
								} else {
									method.writeOut(response, d.status? 200: 409, d);
								}
							});
						} else {
							console.log('search cursor null');
						}
					} else {
						console.log(err);
					}
				});
			} else {
				console.log(err);
			}
		});
	});
}

// blog 列表
function blogs(response, request) {
	console.log('<!--- blogs --->');
	var d = {'status': 0};

	// 判断是否符合要求
	if (method.checkRepuest(request, '/api/blogs', 'GET')) return method.writeOut(response, 406, d);

	method.getRequestData(request, function (fields) {
		myDB.collection('blogs', function (err, nebulae) {
			nebulae.count(function (err, total) {
				if (err) {
					console.log(err);
				} else {
					d['page'] = {
						'p': fields.p,
						'total': Math.ceil(total/10)
					};
				}
			});
			var cursor = nebulae.find({del: {$ne: 1}}, {sort: {time: -1},limit: 10, skip: (fields.p - 1) * 10});
			if (cursor) {
				d.status = 1;
				d['data'] = [];
				cursor.each(function (err, item) {
					if (item != null) {
						d.data.push(method.resultClear(item));
					} else {
						method.writeOut(response, d.status? 200: 409, d);
					}
				});
			} else {
				console.log('search cursor null');
				method.writeOut(response, d.status? 200: 409, d);
			}
		});
	});
}

// blod edit 编辑
function blogEdit(response, request) {
	console.log('<!--- blog edit --->');
	var d = {'status': 0};

	if (method.checkRepuest(request, '/api/blog/[0-9a-z]{24}/edit', 'POST')) return method.writeOut(response, 406, d);
	
	var id = request.url.match(/[0-9a-z]{23}[^\/|\.]/).shift(),
		_id = method.ObjectId(id);
	if (!_id) return method.writeOut(response, d.status? 200: 409, d);

	method.getRequestData(request, function (fields) {
		// 设置时间
		fields['time'] = new Date() * 1;

		myDB.collection('blogs', function (err, nebulae) {
			nebulae.update({_id: _id}, {$set: fields}, {upsert: false, multi: true, w: 1}, function (err, results) {
				if (err) {
					console.log(err);
				} else {
					d.status = 1;
					d['id'] = id;
					method.writeOut(response, d.status? 200: 409, d);
				}
			});
		});
	});
}

// blog delete 删除
function blogDelete(response, request) {
	console.log('<!--- blog delete --->');
	var d = {'status': 0};

	if (method.checkRepuest(request, '/api/blog/[0-9a-z]{24}/delete', 'DELETE')) return method.writeOut(response, 406, d);
	
	var id = request.url.match(/[0-9a-z]{23}[^\/|\.]/).shift(),
		_id = method.ObjectId(id);
	if (!_id) return method.writeOut(response, d.status? 200: 409, d);

	myDB.collection('blogs', function (err, nebulae) {
		// 硬删除
		/*nebulae.remove({_id: _id}, function (err, results) {
			if (err) {
				console.log(err);
			} else {
				d.status = 1;
				method.writeOut(response, d.status? 200: 409, d);
			}
		});*/
		// 软删除
		/*
		 * 方法一：在删除文档中插入字段【del】，列出时把文档中含有【del】排除在外.
		 * 方法二：在新增文档时，多添加字段【del】，默认值0；删除时把【del】变为1；列出时把文档中含有【del】排除在外.
		 */
		 nebulae.update({_id: _id}, {$set: {del: 1}}, {upsert: false, multi: true, w: 1}, function (err, results) {
			if (err) {
				console.log(err);
			} else {
				d.status = 1;
				method.writeOut(response, d.status? 200: 409, d);
			}
		});
	});
}

exports.blogDetail = blogDetail;
exports.relatedBlog = relatedBlog;
exports.blogs = blogs;
exports.blogEdit = blogEdit;
exports.blogDelete = blogDelete;