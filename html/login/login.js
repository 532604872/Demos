/**
 * edtion : 0.0.1
 * upDate : 2015/5/4
 * name : maomao
 * createTime : 2015/4/30
 * /

/**
 * 邮箱自动提示插件
 * @constructor EmailAutoComplete
 * @ options {object} 可配置项
 */  
function EmailAutoComplete(options) {

	this.config = {
		targetCls      :  '.inputElem',       // 目标input元素
		parentCls      :  '.parentCls',       // 当前input元素的父级类
		searchForm     :  '.jqtransformdone', // form表单
		hoverBg        :  'hoverBg',          // 鼠标移上去的背景
		inputValColor  :  'red',              // 输入框输入提示颜色
		tipsAttribute  :  'data-heml',        // 提示属性
		
		showId         :  'autoCompleteList', // 显示区域ID
		showClass      :  'auto-tip',         // 显示区域类名
		
		whole          :  'p-index',          // 显示整体
		before         :  'output-num',       // 显示前部分
		beforeTitle    :  'spen',             // 显示前部分标签
		after          :  'em',               // 显示后部分
		afterTitle     :  'em',               // 显示后部分标签
		
		mailArr        : ["@qq.com","@qq2.com","@gmail.com","@126.com","@163.com","@hotmail.com","@yahoo.com","@yahoo.com.cn","@live.com","@sohu.com","@sina.com"], //邮箱数组
		isSelect       : false,               // 选择 默认为false
		isSelectHide   : true,                // 是否隐藏 默认为true
		callback       : null                 // 点击某一项回调函数
	};
	
	this.cache = {
		onlyFlag            : true,     // 只渲染一次
		upOrDown            : false,    // 控制方向键
		current             : -1,		// 当前指数
		old                 : -1        // 老指数
	};

	this.init(options);
}
EmailAutoComplete.prototype = {

	constructor: EmailAutoComplete,
	init : function(options){
		for(var attir in options || {}){
			this.config[attir] = options[attir];
		}
		var self = this,
			_config = self.config,
			_cache = self.cache;
		
		$(_config.targetCls).each(function(index,item) {
			index.tip = self.createUl();
			document.body.appendChild(index.tip);
		
			$(index).addEvent('mouseover',function(){
				index._ReadyToSelect = false;
			}).addEvent('mouseout',function(){
				index._ReadyToSelect = true;
			}).addEvent('keydown',function(e){
				self._keydown(e,index);
			},true).addEvent('input',function(){				
				self._input(index);
			}).addEvent('keyup',function(e){
				self._keyup(e,index);
			},true).addEvent('keypress',function(e){
				//self._keyup(e,index);
			},true);
			
		});
		
		// 阻止form表单默认enter键提交
		$(_config.searchForm).each(function(index,item) {
            $(index).addEvent('keydown',function(e){
                if(e.keyCode == 13) {
                    return false;
                }
            },true);
		});
	},
	
	_keydown : function(e,me){
		var self = this,
			_config = self.config;
		e = e || window.event;
		var code = e.keyCode;
		if(!_config.isSelectHide && (code == '38' || code == '40')){
			self.stopDefault(e);
		}
		if((code >= '65' && code <= '90') || (code >= '48' && code <= '57') ||
		(code >= '96' && code <= '111') || (code >= '186' && code <= '222')){
			me.setAttribute('autocomplete','off');
			me.setAttribute('disableautocomplete','');
		}
	},
	
    stopDefault : function (e) {
		//如果提供了事件对象，则这是一个非IE浏览器
		if(e && e.preventDefault) {
		　　//阻止默认浏览器动作(W3C)
		　　e.preventDefault();
		} else {
		　　//IE中阻止函数器默认动作的方式
		　　window.event.returnValue = false;
		}		
		return false;
    },

	_keyup : function(e,me){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		//if(me.value.trim() == ''){
		//	me.removeAttribute('autocomplete');
		//	me.removeAttribute('disableautocomplete');
		//}
		
		if(_config.isSelectHide) return false;
		
		e = e || window.event;
		var code = e.keyCode || e.which;		
		
		if(code == '38'){//up
			_cache.upOrDown = true;
			self._up(me);
			
		}
		if(code == '40'){//down
			_cache.upOrDown = true;
			self._down(me);			
			
		}
		if(code == '13'){//enter
			self._enter(me);
			
		}
		if(code == '27'){//esc
			me.value = me.getAttribute(_config.tipsAttribute);
			if(_config.isSelect)
			_config.isSelect.className = _config.isSelect.opClass;
			_config.isSelect = false;
			
		}
		_cache.upOrDown = false;
		
	},
	
	_down : function(me){
		var self = this,
			_config = self.config,
			select = _config.isSelect;
		
		if(!select){
			_config.isSelect = me.li[0];

		}
		else{
			select.className = select.opClass;
			_config.isSelect = select.nextSibling;
			
			if(!_config.isSelect) self._down(me);

		}
		
		self.handle(me);		
	},
	
	_up : function(me){
		var self = this,
			_config = self.config,
			select = _config.isSelect;
		
		if(!select){
			me.tip.scrollTop = me.tip.scrollTopMax;
			_config.isSelect = me.li[me.li.length - 1];

		}
		else{
			select.className = select.opClass;
			_config.isSelect = select.previousSibling;
			
			if(!_config.isSelect) self._up(me);

		}
		
		self.handle(me);
	},
	
	handle : function(me){
		var self = this,
			_config = self.config,
			select = _config.isSelect,
			firstV = select.firstChild.innerHTML;
			
		self.addClassName(select,_config.hoverBg);
		me.value = firstV + select.lastChild.innerHTML;
		self.setCaretToPos(me, firstV.length, me.value.length);
	},
	
	_enter : function(me){
		var self = this,
			_config = self.config,
			select = _config.isSelect;
		if(!!select){
			me.value = select.firstChild.innerHTML + select.lastChild.innerHTML;
			me.setAttribute(_config.tipsAttribute,string);
			
			if(_config.callback) _config.callback();
		}
		self.cloce(me);
		me.blur();
		
	},
	
	_input : function(me){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		
		if(_cache.upOrDown) return _cache.upOrDown = false;
		
		
		var cls = me.parentNode;
			cls.style.position = 'relative';
		
		_config.isSelectHide = self.addSelect(me);
		
		self.setPosition(me);
		self.bodyClick(me);
		_config.isSelect = false;

	},
	
	addSelect : function(me){
		var self = this,
			_config = self.config,
			sub = me.value.trim();
			
		me.setAttribute(_config.tipsAttribute ,sub);
		
		if(sub != ''){
			var newMatch = self.matching(me);
			
			if(me.tip) me.tip.innerHTML = '';
			
			if(newMatch.length > 0){
				me.li = self.createLi(me,newMatch);
				
				for(var i = 0; i < me.li.length; i++){
					var li = me.li[i]; 
					var span = li.firstChild;
					span.innerHTML = sub;
					var em = li.lastChild;
					var val = sub + em.innerHTML;
					li.setAttribute(_config.tipsAttribute ,val);
					li.title = val;
					if(em.innerHTML == '') return true;
				}
				return false;
			}						
		}
		else{			
			me.removeAttribute('autocomplete');
			me.removeAttribute('disableautocomplete');
			return true;
			
		}
		
	},

	matching : function(me){
		var self = this,
			_config = self.config,
			mailArr = _config.mailArr,
			sub = me.value,
			position = sub.indexOf('@');
			
		if(position >= 0){
			var retain = sub.substr(position,sub.length);
			for(var i = 0 ; i < retain.length ; i++){
				var str = retain.substr(i,1);
				mailArr = self.match(str,mailArr);
			}
		}
		return mailArr;
		
	},
	
	match : function(str,newArr){
		var arr = [];
		for(var j = 0 ; j < newArr.length ; j++){
			var sub = newArr[j].substr(0,1);
			if(str == sub){
				arr.push(newArr[j].replace(sub,''));
			}
		}
		return arr;
	},
	
	createUl : function(){
		var self = this,
			_config = self.config;
			
		var tip = $().createTag('div',_config.showClass);
		tip.id = _config.showId;
		tip.opClass = tip.className;
		return tip;
		
	},
	
	createLi : function(me,mailArr){
		var self = this,
			_config = self.config;
			
		var arr = [];	
		for(var i =0 ;i < mailArr.length ;i++){
			var list = $().createTag('div',_config.whole + i);
			list.opClass = list.className;
			
			var span = $().createTag(_config.beforeTitle,_config.before);
			span.style.color = _config.inputValColor;
			list.appendChild(span);
			
			var em = $().createTag(_config.afterTitle,_config.after);
			em.setAttribute(_config.tipsAttribute ,mailArr[i]);
			em.innerHTML = mailArr[i];
			list.appendChild(em);
			
			$(list).addEvent('mouseover',function(o){				
				if(_config.isSelect)
					_config.isSelect.className = _config.isSelect.opClass;
				self.addClassName(o,_config.hoverBg);
				_config.isSelect = o;
				//me.value = o.title;
				
			}).addEvent('mouseout',function(o){
				//o.className = o.opClass;
			}).addEvent('click',function(o){
				me.value = o.title;
				self._enter(me);
				
			});
			
			me.tip.appendChild(list);
			arr.push(list);
		}
		return arr;
		
	},
	
	bodyClick : function(me){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		
		var selectHide = function(){
			if (me._ReadyToSelect){
				me.tip.style.cssText = '';
				document.body.removeEventListener("click", selectHide,true);
				_cache.onlyFlag = true;
				_config.isSelectHide = false;
			}
		};
		_cache.selectHide = selectHide;
		if(!_config.isSelectHide){
			if(_cache.onlyFlag){
				document.body.addEventListener("click", selectHide, true);
				_cache.onlyFlag = false;
			}
		}
		else{
			self._selectClick(me);
			
		}
		
	},
	
	_selectClick : function(me){
		var self = this,
			_config = self.config,
			_cache = self.cache;
		
		self.cloce(me);
		document.body.removeEventListener("click", _cache.selectHide,true);
		
	},
	
	setPosition : function(me){
		var self = this,
			_config = self.config;
		if(!_config.isSelectHide){
			var width = me.clientWidth,
				height = me.clientHeight,
				distance = self.getDistance(me),
				left = distance.x,
				top = distance.y + height;
			me.tip.style.cssText = "left :" + left + "px;top :" + top + "px;width :" + width + "px;display : block;";		
		}
		else{			
			me.tip.style.cssText = '';
		}		
	},
		
	getDistance : function(e){  
		var x = e.offsetLeft,
			y = e.offsetTop;  
		while(e = e.offsetParent){  
			x += e.offsetLeft;  
			y += e.offsetTop;
		}  
	 return {"x": x, "y": y};  
	},
	
	cloce : function(me){
		var self = this,
			_config = self.config;
			
		me.tip.style.cssText = '';
		_config.isSelectHide = true;
		_config.isSelect = false;
		me.removeAttribute('autocomplete');
		me.removeAttribute('disableautocomplete');
	},
	
	addClassName : function(node,name,fun){
		try{
			reg = new RegExp(name);
			if(!reg.test(node.className)){			
				node.className += ' ' + name;
				if(fun)fun();
			}
		}
		catch(err){
			console.log("Error: " + err + ".");
		}
	},
	
	setSelectionRange : function (input, selectionStart, selectionEnd) {
	  if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	  }
	  else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	  }
	},
	
	setCaretToPos : function (input, pos, end) {
		var self = this;
		self.setSelectionRange(input, pos, end);
	}
}

