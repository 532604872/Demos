/* 目前只适用jquery.scroll.js */

!function (_) {
	_.extend({
		scroll: Scroll
	});
	var _config = {// 以下都是默认值
		container: 'scroll-container',
		wrapper: 'scroll-wrapper',
		width: '',
		height: '',
		scrollWidth: '6',
		ScrollHeight: '6',
		direction: 'auto'
	},
	_setting = {
		
	},
	method = {
		/* create element 
		* param: tagName 标签名
		* param: props 
		*/
		tag: function (tagName, props) {
			var tag = document.createElement(tagName);
            if (typeof (props) == "string") {
                tag.className = props;
            }
            else {
                if (props != undefined) {
                    if(props.style) {
                        method.updateObject(props.style, tag.style);
                        delete props.style;
                    }
                    method.updateObject(props, tag);
                }
            }
            tag.append = function (tagName, props) {
                return tag.appendChild(method.tag(tagName, props));
            }
            return tag;
		},
		updateObject: function (newObject, defaultValue) {
            if (defaultValue === null || defaultValue === undefined) {
                defaultValue = newObject;
            }
            else {
                for (var property in newObject) {
                    if (newObject[property] && newObject[property].constructor == Object && typeof defaultValue[property] != "array") {
                        defaultValue[property] = this.updateObject(newObject[property], defaultValue[property]);
                    }
                    else if (newObject[property] != undefined) {
                        defaultValue[property] = newObject[property];
                    }
                }
            }
            return defaultValue;
        },
        // 参数检查
        paramChack: function () {
        	typeof _config.container === 'string' && (_config.container = $('*[class*=' + _config.container +']')[0]);
        	typeof _config.wrapper === 'string' && (_config.wrapper = $('*[class*=' + _config.wrapper +']')[0]);
        },
        // 创建水平滚动条
        createHorizontal: function () {
        	
        },
        createVertical: function () {
        	var vertical = method.tag('div', {
        		className: 'scroll-vertical',
        		style: {
        			width: _config.scrollWidth + 'px'
        		}
        	});
        	var cont = vertical.append('div', {
        		className: 'dragger-container',
        		id: 'dragger-container'
        	});
        	var dragger = cont.append('div', {
        		className: 'dragger-vertical',
        		id: 'dragger-vertical',
        		style: {
        			height: (_config.container.offsetHeight*_config.container.offsetHeight/_config.wrapper.offsetHeight) + 'px'
        		}
        	});
        	dragger.append('div', {
        		className: 'dragger-bar',
        		id: 'dragger-bar',
        		style: {
        			width: _config.scrollWidth/2 + 'px',
        			left: 0,
        			top: 0
        		}
        	});
        	cont.append('div', {
        		className: 'dragger-rail',
        		style: {
        			width: _config.scrollWidth/2 + 'px'
        		}
        	});
        	_config.container.appendChild(vertical);

        	_config.wrapper.style.width = (_config.wrapper.offsetWidth - _config.scrollWidth) + 'px';
        },
        drapDrop: function () {
		    var box = $("#dragger-container")[0]; //获取外围BOX
		    var dragBox = $("#dragger-vertical")[0];//获取需要拖动的BOX
		    var dragging = null; //初始化对象
		    function drag(event) { //事件执行函数
		        event = event || window.event;
		        var target = event.target || event.srcElement;
		        switch (event.type) {//判断事件类型
			        case "mousedown":
			            if(target.id == "dragger-bar"){ //当事件对象的ID等于要拖动的BOX的ID时
			                dragging = target; //赋值到拖动目标
			            }
			            break;
			        case "mousemove":
			            if(dragging){ //当有拖动目标时执行
			                sTop = document.documentElement.scrollTop || document.body.scrollTop; //当有滚动条的时候卷去页面的高度
			                dragging.style.left = (event.clientX - box.offsetLeft - dragBox.offsetWidth/2) + "px";
			                dragging.style.top = (event.clientY + sTop - box.offsetTop  - dragBox.offsetHeight/2 ) + "px";
			                var left = parseInt(dragging.style.left);
			                var top = parseInt(dragging.style.top);
			                //console.log("left:"+left+"-----top:"+top + "-------sTop:"+sTop);
			                // 比较坐标是否超出外围的BOX
			                if(left < 0){
			                    dragging.style.left = 0 +"px";
			                }
			                if(top < 0){
			                    dragging.style.top = 0+"px";
			                }
			                if(left > box.offsetWidth - dragBox.offsetWidth){
			                    dragging.style.left = (box.offsetWidth - dragBox.offsetWidth - 2 )+"px";
			                }
			                if(top >  box.offsetHeight - dragBox.offsetHeight){
			                    dragging.style.top =( box.offsetHeight - dragBox.offsetHeight  - 2 )+"px";
			                }
			            }
			            break;
			        case "mouseup":
			            // 清空拖动目标
			            dragging = null;
			            break;
			    }
		    };
			// 绑定事件
			$(box).mousedown(drag);
			$(box).mousemove(drag);
			$(box).mouseup(drag);
			// VVG.DOM.bindEvent(document, "mousedown", drag);
			// VVG.DOM.bindEvent(document, "mousemove", drag);
			// VVG.DOM.bindEvent(document, "mouseup", drag);
        }
	};

	function Scroll(config) {
		_config = method.updateObject(config, _config);

		method.paramChack();
		
		// 判断 container 滚动条是 水平（horizontal）|| 垂直（vertical）
		if (_config.direction === 'horizontal') {
			method.createHorizontal();
		} else if (_config.direction === 'vertical') {
			method.createVertical();
		} else if (_config.direction === 'auto') {
			method.createHorizontal();
			method.createVertical();
		}

		method.drapDrop();
	}
}(jQuery);