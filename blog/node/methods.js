/*导入需要用到的nodejs库*/
var url = require("url"),
	qs = require('querystring'),
	mongodb = require('../../mongodb');

// 获取请求数据
function getRequestData(request, callback) {
	var query = '';
	if (request.method.toUpperCase() == 'POST') {
	    /**
	     * 因为post方式的数据不太一样可能很庞大复杂，
	     * 所以要添加监听来获取传递的数据
	     * 也可写作 request.on("data",function(data){});
	     */
	    request.on("data", function (data) {
	        query += data;
	    });
	    /**
	     * 这个是如果数据读取完毕就会执行的监听方法
	     */
	    request.on("end", function () {
	        query = qs.parse(query);
	    	console.log('POST: ');
	    	console.log(query);
	    	typeof callback === 'function' ? callback(query) : console.log('error in callback type!');
	    });
	} else if (request.method.toUpperCase() == 'GET') {
	    /**
	     * 也可使用var query=qs.parse(url.parse(request.url).query);
	     * 区别就是url.parse的arguments[1]为true：
	     * ...也能达到‘querystring库’的解析效果，而且不使用querystring
	     */
	    query = url.parse(request.url, true).query;
	    console.log('GET: ');
	    console.log(query);
	    typeof callback === 'function' ? callback(query) : console.log('error in callback type!');
	} else {
	    //head put delete options etc.
	}
}

/**
 * 照样输出json格式的数据
 * @param response
 * @param status
 * @param query
 */
function writeOut(response, status, query) {
 	console.log('<!--- write out --->');
 	response.writeHead(status, {'Content-Type': 'text/html'});
    query && response.write(JSON.stringify(query));
    response.end();
}

/**
 * 匹配URL地址内容
 * @param string 目标字符串
 * @param string 比较内容
 */
function checkRepuest(request, url, method) {
	var reg = new RegExp('^' + url);
	return !reg.test(request.url) || request.method !== method;
}

/**
 * 实例化 ObjectId 对象
 * @param string
 */
function ObjectId(s) {
	if (!/^[0-9a-z]{24}$/.test(s)) return 0;
	var BSON = mongodb.BSONPure,
		ObjectID = mongodb.ObjectID,
		b_id = BSON.ObjectID.createFromHexString(s),
		o_id = ObjectID(s);
	return b_id === o_id? o_id: b_id;
}

/**
 * 获取时间标志
 * param objectId
 */
function getTimestamp(objectId) {
	return new Date(objectId.getTimestamp()) * 1;
}

/**
 * 清除结果
 * @param object
 */
function resultClear(obj) {
	var method = {
		'_id': function () {
			if (!obj.time) obj['time'] = getTimestamp(obj._id);
			obj['id'] = obj._id;
			delete obj._id;
		},
		'[]': function (name) {
			if (typeof obj[name] === 'string') {
				obj[name] = [obj[name]];
			}
			obj[name.replace('[]', '')] = obj[name];
			delete obj[name];
		}
	};
	for (var i in obj){
		method[i] && method[i]();
		/\[\]$/.test(i) && method['[]'](i);
	}

	return obj;	
}

/**
 * Returns internal [[Class]] property of an object
 *
 * Ecma-262, 15.2.4.2
 * Object.prototype.toString( )
 *
 * When the toString method is called, the following steps are taken: 
 * 1. Get the [[Class]] property of this object. 
 * 2. Compute a string value by concatenating the three strings "[object ", Result (1), and "]". 
 * 3. Return Result (2).
 *
 * __getClass(5); // => "Number"
 * __getClass({}); // => "Object"
 * __getClass(/foo/); // => "RegExp"
 * __getClass(''); // => "String"
 * __getClass(true); // => "Boolean"
 * __getClass([]); // => "Array"
 * __getClass(undefined); // => "Window"
 * __getClass(Element); // => "Constructor"
 *
 */
function __getClass(object){
   return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
};

exports.method = {
	getRequestData : getRequestData,
	writeOut : writeOut,
	checkRepuest : checkRepuest,
	ObjectId : ObjectId,
	getTimestamp : getTimestamp,
	resultClear : resultClear,
	getClass : __getClass
};