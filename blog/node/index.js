/*导入需要用到的nodejs库*/
var http = require("http");
var url = require("url");
var qs = require('querystring');

// test
var requestHandlers = require("./requestHandlers");

// sign up
var signUp = require('./signUp');

// publish
var publish = require('./publish');

// blog
var blog = require('./blog');

/**
 * 简单配置个路由 用来检测无用的请求 仅符合路由规则的才能被接受
 * 自己可以按照需要定义
 * @type {{string: function}}
 */
var handle = {
	'/' : requestHandlers.start,
	'/start' : requestHandlers.start,
	'/upload' : requestHandlers.upload,
	'/show' : requestHandlers.show,
	'/test' : requestHandlers.test,

	'/signUp' : signUp.signUp,
	'/login' : signUp.login,

	'/upload/img' : publish.upload_img,
	'/sub_blog' : publish.sub_blog,
	
	'/blogDetail' : blog.blogDetail,
	'/relatedBlog' : blog.relatedBlog,
	'/blogs' : blog.blogs
};

// 正则匹配值
var regexp = {
	// 上传临时文件
	'^/tmp/img/[0-9a-z]{32}\\.(jpg|png|jpeg|gif)$': publish.show_img,
	// 获取blog详情
	'^/api/blog/[0-9a-z]{24}/edit$': blog.blogEdit,
	// 删除blog
	'^/api/blog/[0-9a-z]{24}/delete$': blog.blogDelete
};

http.createServer(onRequest).listen(1337, function () {
	console.log("Server has started.");
});

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname.replace('/api', '');
	console.log("Request for " + request.url + " received.");

	if (typeof handle[pathname] === 'function') {
		handle[pathname](response, request);
	} else if (regexpMethod(request.url)) {
		othe(response, request);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("404 Not found");
		response.end();
	}
}

// 正则匹配方法
var othe = function () {};
function regexpMethod(v) {
	for (var i in regexp) {
		if (new RegExp(i).test(v)) {
			othe = regexp[i];
			return 1;
		}
	}
	return 0;
}