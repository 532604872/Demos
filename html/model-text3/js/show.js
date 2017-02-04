window.onload = function(){
	/*
	  *  下面两种获取节点内容的方式都可以。
	  *  由于 IE6, IE7 不支持 contentDocument 属性，所以此处用了通用的
	  *  window.frames["iframe Name"] or window.frames[index]
	  */
	 var iframe = window.frames;
	 for(var i = 0; i < iframe.length; i++){
		 var d = iframe[i].document;
		 var body = d.body.innerHTML;
		 document.body.removeChild(document.getElementsByTagName('iframe')[i]);
		 document.body.innerHTML += body;
	 }
	 // d.getElementsByTagName('h1')[0].innerHTML = 'pp';
	 // alert(d.getElementsByTagName('h1')[0].firstChild.data);

	  // var iframe = window.frames;
	  // for(var i in iframe){
	 	//  var doc = iframe[i].document;
	 	//  document.body.removeChild(doc);
	 	//  var body = doc.getElementsByTagName('body').innerHTML;
	 	//  document.body.innerHTML += body;
	  // }
}

