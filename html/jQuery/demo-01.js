$(document).ready(function () {
	console.log("Hello word!");
	console.log("------------------------------");
	var header = $("header")[0];
	console.log(header.getAttribute('type'));
	console.log("------------------------------");
	var ul_first = $("ul li:first")[0].setAttribute('data', 'first');
	var ul_last = $("ul li:last")[0].setAttribute('data', 'last');
	var a_list = $("[data ^= 'a-']");
	for (var i = 0; i < a_list.length; i++) {
		console.log(a_list[i].getAttribute("data"));
	}
	console.log("------------------------------");
	$("section .main").css('background-color', 'blue');
	console.log("背景颜色变红，采用.css()方法。");
	console.log("------------------------------");
	$(".zhiding.bottom-right").click(function () {
		$("section .main").hide(function () {
			console.log("隐藏");
		});
	});
	console.log("------------------------------");
	$('.bottom-right.fwrx').dblclick(function () {
		$('section .main').toggle(function () {
			console.log("切换显示");
		});
	});
	console.log("------------------------------");
	$('.bottom-right.fankui').mouseover(function () {
		$('section .main').fadeOut(function () {
			console.log('淡出');
		});
	});
	console.log("------------------------------");
	$('.bottom-right.fankui').dblclick(function () {
		$('section .main').fadeTo('slow', 0.5, function () {
			console.log('透明度');
		});
	});
	console.log("------------------------------");
	$('.elevator-kefu').click(function () {
		$('section').slideToggle(function () {
			console.log('切换滑动');
		});
	});
	console.log("------------------------------");
	$('.elevator-kefu2').click(function () {
		$('section .main').animate({
			height: '0'
		}, 3000, function () {
			this.style['backgroundColor'] = "red";
			this.className += ' a';

			console.log('动画');
		});
	}).mouseout(function () {
		$('section .main').stop(function () {
			console.log('暂停动画');
		});
	});
	console.log("------------------------------");
	$('.elevator-weixin').click(function () {
		$('section .main')
			.css('color', 'red')
			.slideUp(2000)
			.slideDown(2000, function () {
				this.style['backgroundColor'] = 'red';
				$(this).css('color', 'black');
			});
	})
	console.log("------------------------------");
		console.log($('section').text());
		console.log($('section').html());
		console.log($('input').val());
		console.log($('input').attr('placeholder'));
	console.log("------------------------------");
	$(".elevator-fankui").click(function () {
		$("section .main")
			.css('color', 'red')
			.text("1234");
		$("#demo-01").html("<b>abcd</b>");
		$("input").val("别逗我*******");
		$(this).attr("href", "#");
	});
	console.log("------------------------------");
	$(".elevator-weibo").click(function () {
		$("section .main").text(function (i, origText) {
			console.log("Old text: " + origText + " New text: Hello world! (index: " + i + ")");
		});
		$("#demo-01").html(function (i, origText) {
			console.log("Old text: " + origText + " New text: Hello world! (index: " + i + ")");
		});
		$("input").val(function (i, origText) {
			console.log("Old text: " + origText + " New text: Hello world! (index: " + i + ")");
		});
		$(this).attr("href", "http://i.bugbank.cn");
		$(this).attr({
			"title": "别摸我",
			"data": "再摸我我会打你的",
			"href": function (i, origText) {
				return origText + "/532604872@qq.com";
			}
		});
	})
	console.log("------------------------------");
	$(".elevator-top").dblclick(function () {
		console.log(this.timeout);
		clearTimeout(this.timeout);
		$("section .main")
		.prepend("这个真好吃，")
		.append("老板再来一份烤串。");
		$("section").append(createElement_append);
	});
	function createElement_append() {
		var e_1 = "<div>e_1</div>";
		var e_2 = $("<div></div>").text("e_2");
		var e_3 = document.createElement("div");
		e_3.innerHTML = "e_3";
		this.me = e_2;
		$(this).append(e_1, e_2, e_3);
	}
	console.log("------------------------------");
	$(".elevator-top").click(function () {
		clearTimeout(this.timeout);
		this.timeout = window.setTimeout(function () {
			$("section .main")
			.after("这个真好吃，")
			.before("老板再来一份烤串。");
			$("section").after(createElement_after);
		}, 500);
		console.log(this.timeout);
	});
	function createElement_after() {
		var o_1 = "<div>o_1</div>";
		var o_2 = $("<div></div>").text("o_2");
		var o_3 = document.createElement("div");
		o_3.innerHTML = "o_3";
		this.me = o_2;
		$(this).append(o_1, o_2, o_3);
	}
	console.log("------------------------------");

});

// // 基本ajax请求
// function function_name() {
// 	$.ajax({
// 		url: '',
// 		dataType: 'json',
// 		data: {},
// 		type: 'GET',
// 		beforeSend: function () {
// 			// 请求前的处理
// 		},
// 		complete: function (data) {
// 			ajax_inbound(data);
// 			//请求成功的处理
// 			var data = {

// 			};//假数据

// 			function concat() {
// 				var fragment = document.createDocumentFragment();
// 				for (var i = 0; i < data.data.length; i++) {
// 					var d = data.data[i];
// 					var str = '';
// 					var li = $('<li></li>')
// 							.addClass('item')
// 							.html(str)[0];
// 					fragment.appendChild(li);
// 				}
// 				return fragment;
// 			}
// 			$('#list').html('').append(concat());
// 		},
// 		success: function (obj, string) {
// 			ajax_outbound(obj);
// 			//请求完成的处理
// 		},
// 		error: function (data) {
// 			//请求出错的处理
// 			console.log("err_neme: " + data.err_neme + "n err_msg: " + data.err_msg);
// 		}
// 	});
// }
// // 带有分页样式的ajax请求
// $(document).ready(function () {
// 	// $('#page').hide();
// 	// req_search('', 1)
// 	iniDataList({
// 		url: function () {
// 			// ajax请求地址
// 			return '';
// 		},
// 		callback: function (data) {
// 			// ajax回传数据

// 			return data;
// 		},
// 		create: function (d) {
// 			// ajax返回单条数据
// 		}
// 	}, 0, {
// 		callback: {
// 			error: function (xhr) {
// 				// xhr.result 获得返回对象
				
// 			}
// 		}
// 	});
// });

// function get_id() {/*获取 uid*/
// 	// var arr = window.location.pathname.split('/');
// 	// return arr[arr.length - 1];

//    var url = location.search; //获取url中"?"符后的字串
//    if(url == '')return '';
//    var theRequest = new Object();
//    if (url.indexOf("?") != -1) {
//       var str = url.substr(1);
//       strs = str.split("&");
//       for(var i = 0; i < strs.length; i ++) {
//          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
//       }
//    }
//    return theRequest.bid;
// }


//闭包
function Person(name, age) {
    this.getName = function() { 
    	return name;
     };
    this.setName = function(newName) { name = newName; };
    this.getAge = function() { return age; };
    this.setAge = function(newAge) { age = newAge; };

    //未在构造函数中初始化的属性
    var occupation;
    this.getOccupation = function() { return occupation; };
    this.setOccupation = function(newOcc) { occupation = 
                         newOcc; };
}
Person('maomao', '25');
console.log('Me Name Is ' + getName());

// 自调用匿名函数
(function(){
    // some private code that will be executed automatically
})();
(function(a,b){
    var result = a+b;
    return result;
})(10,20);

// 获得数组中的随机值
var items = [12, 548 , 0, 'h', 2 , 5478 , 'a039','fooa039', , 8852, , 'a039','Doea039', , 2145 , 119];

var  randomItem = items[Math.floor(Math.random() * items.length)];
console.log(randomItem);

// trim函数 去除字符中的空格
String.prototype.trim = function(){
	return this.replace(/\s/g, '');
};
console.log('abc bef ghi jkl mno pqr stu vwx yz'.trim());

// 避免在遍历一个对象属性的时候访问原型的属性
var object = {
	1: '1',
	2: '2',
	3: '3',
	4: '4'
};
for (var name in object) {
    if (object.hasOwnProperty(name)) {
        console.log(name);
    }
}

// 基于JSON的序列化和反序列化
var a = JSON.stringify(object),
	b = JSON.parse(a);
console.log(a);
console.log(b);

/*-----------------------------------------------*/
function People(name)
{
  this.name=name;
  //对象方法
  this.Introduce=function(){
    console.log("My name is "+this.name);
  }
}
//类方法
People.Run=function(){
  console.log("I can run");
}
//原型方法
People.prototype.IntroduceChinese=function(){
  console.log("我的名字是"+this.name);
}

 

//测试

var p1=new People("Windking");

p1.Introduce();

People.Run();

p1.IntroduceChinese();