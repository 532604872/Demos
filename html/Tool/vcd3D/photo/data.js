var data = [];

var dataStr = '1、人<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
2、青蛙<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
3、飞机<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
4、热气球<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
5、阅读<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
6、开心果<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
8、沉思<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
9、偷笑<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
10、扮鬼脸<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
11、合集<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
12、背景<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
13、福星网<br>\
<br>\
suffix:png<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
14、沙滩<br>\
<br>\
suffix:jpg<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
15、空<br>\
<br>\
suffix:png<br>\
<br>\
导演：茂茂<br>\
<br>\
<br>\
16、杯具了<br>\
<br>\
suffix:png<br>\
<br>\
导演：茂茂<br>\
';
var d = dataStr.split('<br><br><br>');
for(var i = 0; i < d.length; i++){
	var c = d[i].split('<br><br>');
	data.push({
		img : c[0].replace('、',' ') + '.' + c[1].split(':')[1],
		caption : c[0].split('、')[1],
		desc : c[2]
	});
	console.log(c[0].replace('、',' ') + '.' + c[1].split(':')[1]);
}