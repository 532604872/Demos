/**
 *表单类型滑动（向下）提示
 *
 **/
 var sildeTips = function(options){
	var defaultMethod = {
		conflrmModal : function(contentId){
			$(contentId).each(function(me){
				var text = $('input[type==text]', me).applyAttr().addEvent('blur', function(o){
					var str = o.value;
					if(str != ''){
						if(str - 0 < o.minvalue - 0){
							tipsing('不能小于最低价钱', o);
						}
						else if(/\D/.test(str)){
							tipsing('输入格式有误', o);
						}
						else if(!!o.tips){
							o.tips.style.display = 'none';
						}
					}
				});
				$('input[type==submit]', me).addEvent('click', function(){
					var input = text[0];
					var str = input.value;
					if(str == ''){
						tipsing('不能为空', input);
						input.select();
					}
					else if(/\D/.test(str)){
						tipsing('输入格式有误', o);
					}
					else if(str - 0 < input.minvalue - 0){
						tipsing('不能小于最低价钱', input);
						input.select();
					}
					else{
						var method = contentId.replace(/\#/, '');
						ajaxMethod[method](me);
					}				
				});
				$('.minvalue', me)[0].innerHTML = '<string>' + text[0].minvalue + '</string>元';
			});
		},
		examineModal : function(contentId){
			$(contentId).each(function(me){
				var group = $('.ctl-group', me);
				var btn = $('.ctl-bar .btn', me).each(function(me, i){
					me.input = $('input', me.parentNode)[0];
				}).addEvent('click', function(me, i){
					var j = me.input.value - 0, _primary = 'btn-primary', _default = 'btn-default';
					if(j == i){
						i = (j)? 0 : 1;
						replaceClassName(btn[i], _primary, _default);
						replaceClassName(btn[j], _default, _primary);
						me.input.value = i;
						text[0].name = (i)? money: '';
						group[2].style.display = (i)? 'block': 'none';						
					}
				});
				var area = $('textarea', me).applyAttr().addEvent('input', function(e){
					var self = this,
					maxlength = self.maxlength;
					if (self.value.length > maxlength) {
						e = e || window.event;
						if (e.preventDefault) {
							e.preventDefault();
						} else {
							e.returnValue = false;
						}
						return false;
						self.value = self.value.substring(0, maxlength);
					}
					tipsing(self.value.length + "/" + maxlength, self);
				},true);
				var text = $('input[type==text]', me).applyAttr().addEvent('blur', function(o){
					var str = o.value;
					if(str != ''){						
						if(/\D/.test(str)){
							tipsing('输入格式有误', o);
						}
						else if(!!o.tips){
							o.tips.style.display = 'none';
						}
					}
				});
				var money = text[0].name;
				$('input[type==submit]', me).addEvent('click', function(){
					var input = text[0], textarea = area[0];
					var str = input.value;
					if(textarea.value == ''){
						tipsing('不能为空', textarea);
						textarea.select();
					}
					else if(btn[0].input.value - 0 && str == ''){
						tipsing('不能为空', input);
						input.select();
					}
					else if(/\D/.test(str)){
						tipsing('输入格式有误', o);
					}
					else{
						var method = contentId.replace(/\#/, '');
						ajaxMethod[method](me);
					}				
				});
			});
		},
		tipsDeleteModal : function(contentId){
			$(contentId).each(function(me){
				$('input[type==submit]', me).addEvent('click', function(){
					var method = contentId.replace(/\#/, '');
					ajaxMethod[method](me);
				});					
			});		
		},
		resetPasswordModal : function(contentId){
			$(contentId).each(function(me){				
				var regPassword = new RegExp(/^.{8,32}$/);
				var info = $('input[type==password]', me).applyAttr().addEvent('blur', function(o){
					var str = o.value;
					if(str != ''){						
						if(!regPassword.test(str)){
							tipsing('输入格式有误', o);
						}
						else if(!!o.tips){
							o.tips.style.display = 'none';
						}
					}
				}).addEvent("keyup", function (e) {
					e = e || window.event;
					if (e.keyCode == "13") {
						return submit();
					}
				}, true);
				function submit(){
					var newPass = info[0], confirmPass = info[1];
					if(newPass.value == ""){
						tipsing("不能为空", newPass);
						newPass.select();
					}
					else if (!regPassword.test(newPass.value)) {
						tipsing("密码长度在8-32位之间", newPass);
						newPass.select();
					}
					else if (newPass.value != confirmPass.value){
						tipsing("两次密码不相同", confirmPass);
						confirmPass.select();
					}
					else {
						var method = contentId.replace(/\#/, '');
						ajaxMethod[method](me);
					}
				}
				$('input[type==submit]', me).addEvent('click', submit);
			});
		}
		
	};
	
	this.silde = {
		cache : [],
		init : function(options){					
			$(backdrop).addEvent('click', this.closeModal);
		},
		closeModal : function (){
			dialog.style.position = 'relative';
			if(!$().is.IE){
				$(modal).animate({opacity:0}, 300, 0, 0, function(){
					modal.style.display = 'none';
				});					
			}
			else{
				modal.style.display = 'none';
			}		
			$(dialog).animate({top:scrollTop}, 300);
		},
		show : function (contentId){
			var self = this;
			
			dialog.innerHTML = '';					
			self.addCache(contentId);
			var method = contentId.replace(/\#/, '');
			if(defaultMethod[method])
			defaultMethod[method](contentId);
			
			$('button', modal).addEvent('click', self.closeModal);
			if(modal.style.display == 'none'){
				if(!$().is.IE){
					$(modal).opacity(0);
				}
				modal.style.display = 'block';
				if(scrollTop == '')scrollTop = 0 - dialog.offsetTop;
				dialog.style.top =  scrollTop + 'px';
				if(!$().is.IE){					
					$(modal).animate({opacity: 1}, 400);					
				}				
				$(dialog).animate({top: 0}, 400);
			}
		},
		addCache : function(contentId){
			var _cache = this.cache; 
			
			if(_cache.length > 0){
				for(var i = 0; i < _cache.length; i++){
					if(_cache[i][0] == contentId){
						dialog.appendChild(_cache[i][1].cloneNode(true));//克隆								
						return ;
					}
				}
			}
			
			var content = $(contentId)[0];
			if(content.style.display == 'none') {
				content.style.display = 'block';//
				//$(content).opacity(1);
			}
			dialog.appendChild(content);
			var newCache = [];
			newCache.push(contentId);
			newCache.push(content.cloneNode(true));
			_cache.push(newCache);
		}
		
	};
	
	this.config = {
		buttonId : '#payment',
		modal : 'modal',
		backdrop : 'modal-backdrop fade in',
		dialog : 'modal-dialog'
	};			
	
	for(var attir in options || {}){
		this.config[attir] = options[attir];
	}
	
	var _config = this.config;
	var modal = $().createTag('div', _config.modal);
	modal.style.display = 'none';
	var backdrop =  $().createTag('div', _config.backdrop);
	modal.appendChild(backdrop);
	var dialog = $().createTag('div', _config.dialog);
	modal.appendChild(dialog);			
	document.body.appendChild(modal);
	var scrollTop = '';	
	
	this.silde.init(this.config);
	
};

/**
 *确认类型滑动（向下）提示
 *
 **/
var confirmSildeTips = function(options){
	this.config = {
		buttonId : '#payment',
		modal : 'modal',
		backdrop : 'modal-backdrop fade in',
		dialog : 'modal-dialog'
	};
	this.silde = {
		parameter : {
			contentId : null,
			type : 'tipsDisableModal',
			title : '删除漏洞',
			question : '是否删除',
			confirmText : '删除'
		},
		cache : {
			title : null,
			question : null,
			confirmText : null
		},
		init : function(){
			var self = this;
			self.createModal();
			$(backdrop).addEvent('click', this.closeModal);
		},
		closeModal : function (){
			dialog.style.position = 'relative';
			if(!$().is.IE){
				$(modal).animate({opacity:0}, 300, 0, 0, function(){
					modal.style.display = 'none';
				});					
			}
			else{
				modal.style.display = 'none';
			}		
			$(dialog).animate({top:scrollTop}, 300);
		},
		show : function (options){
			var self = this;
			self.compare(self.parameter, options);			
			self.updataContent();
			self.start();
		},
		createModal : function(){
			var self = this, _cache = self.cache;
			var modal = $().createTag('div', 'modal-content lift-test-wrap join-project');
			dialog.appendChild(modal);
			var header = $().createTag('div', 'modal-header');
				header.append('button', 'close', '<span>×</span><span class="sr-only">Close</span>');
				var tipsTitle = $().createTag('h4', 'modal-title');
				header.appendChild(tipsTitle);
				_cache.title = tipsTitle;
			modal.appendChild(header);
			var horizontal = $().createTag('div', 'form-horizontal');
			modal.appendChild(horizontal);
				var group = $().createTag('div', 'ctl-group');
				horizontal.appendChild(group);
					var bar = $().createTag('div', 'ctl-bar');
						var span = $().createTag('span');
						bar.appendChild(span);
						_cache.question = span;
					group.appendChild(bar);
				var footer = $().createTag('div', 'modal-footer');
				horizontal.appendChild(footer);
						footer.append('p', 'tips-wrong msg_notice');
						var submit = $().createTag('input', 'btn btn-primary');
						submit.type = 'submit';
						footer.appendChild(submit);
						_cache.confirmText = submit;						
						$(submit).addEvent('click', function(){
							self.submit();							
						});						
						footer.append('button', 'btn btn-default fr', '取消');			
		},
		compare : function(config, options){
			for(var attir in options || {}){
				config[attir] = options[attir];
			}
		},
		submit : function(){
			var self = this, method = self.parameter.type, contentId = self.parameter.contentId;
			if(typeof contentId == 'string'){
				contentId = $(contentId)[0];
			}			
			if(ajaxMethod[method])
				ajaxMethod[method](contentId, self._ajax);
		},
		updataContent : function(){
			var self = this,
				_cache = self.cache,
				_parameter = self.parameter;
			for(var attr in _cache){
				var val = _parameter[attr],
					node = _cache[attr];
				if(node.nodeName == "input".toUpperCase() || node.nodeName == "button".toUpperCase()){
					node.value = val;
				}
				else{
					node.innerHTML = val;
				}				
			}
		},
		start : function(){
			var self = this;
			$('button', modal).addEvent('click', self.closeModal);
			if(modal.style.display == 'none'){
				if(!$().is.IE){
					$(modal).opacity(0);
				}
				modal.style.display = 'block';
				if(scrollTop == '')scrollTop = 0 - dialog.offsetTop;
				dialog.style.top =  scrollTop + 'px';
				if(!$().is.IE){					
					$(modal).animate({opacity: 1}, 400);					
				}				
				$(dialog).animate({top: 0}, 400);
			}
		},
		_ajax : {
			type : 'get',
			url : null,
			error : 'message',
			success : undefined,
			messsage : undefined
		},
		ajax : function(options){
			var self = this, a = self._ajax;
			for(var attr in options){
				a[attr] = options[attr];				
			}
		}		
	};
	var ajaxMethod = {
			close : function(){
				backdrop.click();
			},
			runAjax : function(ajax, correctFun, errorFun){
				var self = this;
				(new Ajax)[ajax.type](ajax.url, '', function(data){
					data = eval('(' + data + ')');
					//var data = {'success': true, 'message': '操作失败', 'url': '../model/login.html'};	
					if(data.success){
						if(correctFun) correctFun();
						if(ajax.success) ajax.success(data);
					}
					else{
						window.top.tips.show({type: 'warn', text: data[ajax.error]});
						if(errorFun) errorFun();
						if(ajax.message) ajax.message(data);
					}					
				});
			},
			tipsDeleteModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					var tr = node.parentNode.parentNode;
					var td = $("td", tr);
					for(var i = 0; i < td.length; i++){
						tr.removeChild(td[i]);
					}
					var del = $().createTag('td', '', '删除成功');
					del.setAttribute('align', 'center');
					del.setAttribute('colspan', '8');
					tr.appendChild(del);				
				});
				self.close();
			},
			tipsDisableModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					var statu = $('.statu', node.parentNode.parentNode)[0];
					if(node.isBool){
						if(statu)
							statu.innerHTML = statu.innerHTML.replace('已禁用', '正常');
						node.innerHTML = node.innerHTML.replace('取消禁用', '禁用');
						node.setAttribute('onclick', 'dis(this, ' + node._id + ', 0)');
					}
					else{
						if(statu)
							statu.innerHTML = statu.innerHTML.replace('正常', '已禁用');
						node.innerHTML = node.innerHTML.replace('禁用', '取消禁用');
						node.setAttribute('onclick', 'dis(this, ' + node._id + ', 1)');
					}
				});
				self.close();
				
			},
			bugdetailDeleteModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					$('.btn-submit', node.parentNode).removeEvent('click', submit, true).each(function(me, i){
						replaceClassName(me, 'btn-success', 'btn-default');
						replaceClassName(me, 'btn-primary', 'btn-default');
					});
					window.top.tips.show({type: 'ok', text: '删除成功'});
				});
				self.close();
			},
			bugdetailPaymentModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					window.top.tips.show({type: 'ok', text: '付款成功'});
				});
				self.close();
			},
			bugdetailRepairModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					window.top.tips.show({type: 'ok', text: '操作成功'});
				});
				self.close();
			},
			tipsResetModal : function(node, ajax){
				var self = this;
				self.runAjax(ajax, function(){
					window.top.tips.show({type: 'ok', text: '重置成功'});
				});
				self.close();				
			}
		};
	
	var _config = this.config;
	var modal = $().createTag('div', _config.modal);
	modal.style.display = 'none';
	var backdrop =  $().createTag('div', _config.backdrop);
	modal.appendChild(backdrop);
	var dialog = $().createTag('div', _config.dialog);
	modal.appendChild(dialog);			
	document.body.appendChild(modal);
	var scrollTop = '';	
		
	this.silde.init();
	
};




