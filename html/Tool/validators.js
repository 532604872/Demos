/**
 * edtion : 0.0.1
 * upDate : 2015/6/5
 * name : maomao
 * createTime : 2015/6/5
 *
 **/
 var verify = {

 };
 /****************验证类型——对象*****************/

	var verifyType = {
		isNonEmpty : function (value, error){
			if( value == ''){
				return error || '不能为空';
			}
		},
		minLength : function (value, length, error){
			if(value.length < length){
				return error || '长度不能小于' + length + '位';
			}
		},
		maxLength : function (value, length, error){
			if(value.length > length){
				return error || '长度不能大于' + length + '位';
			}
		},
		isPhone : function (value, error){
			if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
				return error || '手机号码格式不正确';
			}
		},
		isEmail : function (value error){
			if(!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)){
				return error || '邮箱格式不正确';
			}
		}
	};

/*************validators 类***************/

	var validators = function(){
		this.cache = [];

		this.add = function(dom, rules){
			var self =this;
			try{
				for( var i = 0 , rule ;rule = rules[i++];){
					(function(rule){
						var typeAry = rule.type.split(':');
						var error = rule.error;

						self.cache.push(function(){
							var type = typeAry.shift();
							typeAry.unshift(dom.value);
							typeAry.push(error);
							return verifyType[type].apply(null, typeAry);
						});
					})(rule);
				}
			}
			catch(error){
				console.log('Errot:' + error + '。');
			}
			
		},
		this.start = function(dom, rules){
			var self = this;
			var out = {
				2 : function(){
					self.add(dom, rules);
				},
				init : function(){
					for(var i = 0, validatorsFunc; validatorsFunc = this.cache[ i++];){
						var error = validatorsFunc();
						if(error){
							return error;
						}
					}
				}
			};
			try{
				out[arguments.length];
				out.init();	
			}
			catch(error){
				console.log('Errot:' + error + '。');
			}		
		}
	};

/*****************客户调用代码*****************/

	// var registerForm = document.getElementById('registerForm');
	// var validator = new validators();
	// var validataFunc = function(){		

	// 	validator.add(registerForm.userName, [{
	// 		type : 'isNonEmpty',
	// 		error : '用户名不能为空'
	// 	},{
	// 		type : 'minLength:10',
	// 		error : '用户名长度不能小于10位'
	// 	}]);

	// 	validator.add(registerForm.password, [{
	// 		type : 'minLength:6',
	// 		error : '密码不能小于6位'
	// 	}]);

	// 	validator.add(registerForm.phoneNumber, [{
	// 		type : 'isMobile',
	// 		error : '手机号码格式不正确'
	// 	}]);

	// 	var error = validator.start();
	// 	return error;				
	// }

	// registerForm.onsubmit = function(){
	// 	var error = validataFunc();

	// 	if(error){
	// 		alert(error);
	// 		return false;
	// 	}
	// };
	// registerForm.userName.onblur = function(){
	// 	if(this.value == '')return false;
	// 	var error = validator.start(registerForm.userName, [{
	// 		type : 'isNonEmpty',
	// 		error : '用户名不能为空'
	// 	},{
	// 		type : 'minLength:10',
	// 		error : '用户名长度不能小于10位'
	// 	}]);
	// 	if(error){
	// 		alert(error);
	// 		return false;
	// 	}
	// };

/*****************客户调用代码——结束*****************/	
	