function createDIV(className, innerHTML) {
    innerHTML = innerHTML || "";
    var div = document.createElement("div");
    div.className = className;
    div.innerHTML = innerHTML;
    return div;
}

function numFormat(num) {
    return (Math.abs(num) < 10) ? "0" + parseInt(num) : num;
}
function scrollYTo(y) {
    y = y || 0;
    $(document.body).scrollTo({ scrollTop: y }, 200);
}

function compareDate(date1, date2) {
    if (date1 == date2) {
        return 0;
    }
    else {

        if (date1.getYear() == date2.getYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
            return 0;
        }
        else if (date1 > date2) {
            return 1;
        }
        else if (date1 < date2) {
            return 2;
        }
    }
}

function breakEvent(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

function getDateFixString(time) {
    var nowDate = new Date();
    var date = new Date();
    date.setTime(time);
    var dateString = numFormat(date.getHours()) + ":" + numFormat(date.getMinutes());
    if (compareDate(date, nowDate) != 0) {
        dateString = numFormat(date.getMonth() + 1) + "月" + numFormat(date.getDate()) + "日 " + dateString;
        if (date.getFullYear() != nowDate.getFullYear()) {
            dateString = date.getFullYear() + "年" + dateString;
        }
    }
    return dateString;
}





function Pager(page, onPage) {
    if (page.pages <= 1) {
        return false;
    }
    var base = $("#pager")[0];
    onPage = onPage || function () { }
    base.append = function (tag, className, innerHTML) {
        return base.appendChild($().createTag(tag, className, innerHTML));
    }
    var prev = base.append("a", "", "<i class=\"fa fa-chevron-left\"></i>");
    $(prev).addEvent("click", function () {
        if (page.curr > 1) {
            pageTo(page.curr - 1);
        }
    })
    var first = base.append("a", "", "1");
    $(first).addEvent("click", function () {
        pageTo(1);
    })

    var pageList = base.append("div", "di");
    
    var last = base.append("a", "", page.pages);
    $(last).addEvent("click", function () {
        pageTo(page.pages);
    })
    var next = base.append("a", "", "<i class=\"fa fa-chevron-right\"></i>")
    $(next).addEvent("click", function () {
        if (page.curr < page.pages) {
            pageTo(page.curr + 1);
        }
    })

    var pageTo = this.pageTo = function (p, firstLoad) {
        if (p < 1) return false;
        if (!firstLoad) {
            pageList.innerHTML = "";
            onPage(p);
        }
        page.curr = p;
        var start, end;

        if (page.pages <= 7 || p <= 4) {
            start = 2;
            end = Math.min(page.pages, 7);
        }
        else if (page.pages - p < 4) {
            start = page.pages - 5;
            end = page.pages;
        }
        else {
            start = p - 2;
            end = p + 3;
        }

        for (var i = start; i < end; i++) {
            var newPage = pageList.append("a", "", i);
            newPage.p = i;
            $(newPage).addEvent("click", function (o) {
                pageTo(o.p);
            })
            if (i == p) {
                newPage.className = "pagination-current";
            }
        }
        if (p == 1) {
            prev.className = "pagination-disabled";
            next.className = "";
            first.className = "pagination-current";
            last.className = "";
        }
        else if (p == page.pages) {
            prev.className = "";
            next.className = "pagination-disabled";
            first.className = "";
            last.className = "pagination-current";
        }
        else {
            prev.className = "";
            next.className = "";
            first.className = "";
            last.className = "";
        }
    }

    pageTo(page.curr, 1);

}


function selector(id) {
    var defaultType = {
        year: function (o) {
            var output = {};
            o.start = o.start || "now";
            if (o.start.indexOf("now") >= 0) {
                o.start = eval(o.start.replace("now", (new Date()).getFullYear()));
            }
            o.end = o.end || "now";
            if (o.end.indexOf("now") >= 0) {
                o.end = eval(o.end.replace("now", (new Date()).getFullYear()));
            }
            var step = (o.end - o.start) / Math.abs(o.end - o.start);
            for (var i = 0; i <= Math.abs(o.end - o.start); i++) {
                output["#" + (o.start + step * i)] = o.start + step * i;
            }
            return output;
        },
        month: function (o) {
            var output = {};
            o.start = o.start || "now";
            if (o.start.indexOf("now") >= 0) {
                o.start = eval(o.start.replace("now", (new Date()).getMonth()));
            }

            var month;
            for (var i = 0; i < 12; i++) {
                month = (o.start + i) % 12 + 1
                output["#" + month] = month;
            }
            return output;
        },
        number: function (o) {
            var output = {};
            o.start = eval(o.start);
            o.end = eval(o.end);
            var step = (o.end - o.start) / Math.abs(o.end - o.start);
            for (var i = 0; i <= Math.abs(o.end - o.start); i++) {
                output["#" + (o.start + step * i)] = o.start + step * i;
            }
            return output;
        }
    }
    var id = $(id).applyAttr().each(function (o) {
        o.suffix = o.suffix || "";
        o.maxlength = o.maxlength || 8;
        o.options = [];
        o.append = function (tag, className, innerHTML) {
            return o.appendChild($().createTag(tag, className, innerHTML))
        }
        o.style.position = "relative";
        o.text = o.append("p", "");
        var title = o.value;
        if (o.value == "" || !o.value) {
            title = o.title;
            o.text.innerHTML = o.placeholder;
        }
        else {
            o.title = o.value;
        }



        o.append("div", "dlr");

        var defaultValue = o.value;
        o.value = o.append("input");
        o.value.name = o.name;
        o.value.type = "hidden";
        o.value.value = defaultValue;

        o.list = o.append("div", "drop-box");
        o.list.style.cssText += "position: absolute; left: -1px; display: none;";
        o.list.style.width = $(o).css("width")[0] + "px";

        o.selectOptions = function (key) {
            var option = o.optionsJson[key];
            if (o.checked) {
                o.checked.className = "";
            }
            o.checked = option;
            option.className = "sel";
            o.value.value = option.value;
            o.title = option.innerHTML;
            o.text.innerHTML = option.innerHTML;
            if (o.select)
                eval(o.select)(o);
        }
        o.resetType = function (type) {
            o.setOptions(defaultType[type](o));
        }
        o.setOptions = function (inputs) {
            o.options = [];
            o.optionsJson = {};
            o.list.innerHTML = "";
            for (var key in inputs) {
                var option = o.list.append("div", "", inputs[key] + o.suffix);
                option.value = inputs[key];
                option.title = option.innerHTML;
                o.options.push(option);
                o.optionsJson[key.replace(/^#/, "")] = option;
                if (key.replace(/^#/, "") == o.value.value) {
                    o.title = option.title;
                    o.text.innerHTML = option.title;
                    option.className = "sel"
                    o.checked = option;
                }
            }
            $(o.options).addEvent("click", function (option) {
                if (o.checked) {
                    o.checked.className = "";
                }
                o.checked = option;
                option.className = "sel";
                o.value.value = option.value;
                o.title = option.innerHTML;
                o.text.innerHTML = option.innerHTML;
                o.close = true;
                if (o.select)
                    eval(o.select)(o);
                closeOptions();
            })
        }
        if (defaultType[o.type]) {
            var inputs = defaultType[o.type](o);
            o.setOptions(inputs);
        }


    }).addEvent("click", function (o) {
        if (window.activedSelecter) {
            window.activedSelecter.list.style.display = "none";
        }

        window.activedSelecter = o;
        o.list.style.top = o.offsetHeight - 1 + "px";
        o.list.style.display = "block";
        if (o.options.length > o.maxlength) {
            o.list.style.overflowY = "scroll";
            o.list.style.height = o.maxlength * o.options[0].offsetHeight + "px";
        }

        $(window).addEvent("click", closeOptions, 1);
    }).addEvent("mouseover", function (o) {
        o.close = false;
    }).addEvent("mouseout", function (o) {
        o.close = true;
    })
    
    function closeOptions() {
        if (window.activedSelecter.close) {
            window.activedSelecter.list.style.display = "none";
            $(window).removeEvent("click", closeOptions);
        }
    }
    return id;
}


function radiobox(id) {
    $(id).applyAttr().each(function (o) {
        var items = $("item", o).applyAttr();
        o.innerHTML = "";
        var outer = o.appendChild($().createTag("div", "ctl-bar")).append("div", "check-group");
        o.value = outer.append("input");
        o.value.name = o.name;
        o.value.type = "hidden";

        o.items = [];
        for (var i = 0; i < items.length; i++) {
            var item = outer.append("div", "check-box");
            o.items.push(item);
            item.title = items[i].text;
            item.value = items[i].value;
            item.operator = item.append("span", "la-crbox");
            item.text = item.append("text", "", item.title);
            if (items[i].selected) {
                item.operator.className += " sel";
                o.checked = item;
            }
        }
        $(o.items).addEvent("click", function (item) {
            if (o.checked) {
                o.checked.operator.className = "la-crbox";
            }
            o.checked = item;
            item.operator.className += " sel";
            o.value.value = item.value;
        })
    })
}
function textarea(id) {
    var eventInput = "input";
    if ($().is.IE) {
        eventInput = "propertychange"
    }
    $(id).applyAttr().each(function (o) {
        var input = o.innerHTML;
        o.innerHTML = "";
        o.value = o.appendChild($().createTag("div", "ctl-bar"))
                    .append("div", "edit-textarea")
                    .append("textarea", "wbox");
        o.value.value = input;
        o.value.name = o.name;
        o.count = o.appendChild($().createTag("div", "main-mail-bottomreply-info-submit-num", input.length + "/" + o.maxlength));
        $(o.value).addEvent(eventInput, function (e) {
            if (o.value.value.length > o.maxlength) {
                e = e || window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                o.value.value = o.value.value.substring(0, o.maxlength);
            }
            o.count.innerHTML = o.value.value.length + "/" + o.maxlength;
        }, true);

    })
}

function createHighLightKey(key) {
    if (key.length == 0) {
        return "";
    }
    var reg = "(";
    for (var i = 0; i < key.length; i++) {
        reg += key[i] + "|";
    }
    return reg.substr(0, reg.length - 1) + ")";
}

function highLightKey(key, text, style) {
    if (key == "()") return text;
    style = style || "";
    reg = new RegExp(key, "g");
    text = text.replace(reg, "<span clase=\"" + style + "\">$1</span>");
    return text;
}

function floating(id) {
    function setTop(o) {
        var scrollY = getPageScroll().Y;
        if (o.top > scrollY + o.offsetY) {
            o.style.top = o.top - scrollY - o.offsetY + "px";
        }
        else {
            o.style.top = "0px";
        }
    }
    $(id).applyAttr().each(function (o) {
        if (!o.top || o.top == "self") {
            o.top = $(o).getTop();
        }
        o.offsetY = parseInt(o.offsetY);
        o.style.marginTop = o.offsetY + "px";
        o.style.position = "fixed";
        setTop(o);
        $(window).addEvent("scroll", function () {
            setTop(o);
        })
    })
}
var eventInput = "input";
if ($().is.IE) {
    eventInput = "propertychange"
}
function tipsInput(obj) {
    $(obj).applyAttr().each(function (o) {
        o.value = $("input", o)[0];

        if (o.value.value != "") {
            o.holder.style.display = "none";
        }

        o.style.position = "relative";
        var tips = $().createTag("div", "placeholder-tips");
        o.appendChild(tips);
        o.style.overflow = "visible";
        tips.style.cssText = "padding:3px 8px;overflow:hidden;background:#fff;border:1px solid #e6e6e6;text-align:left;display:none;position:absolute;z-index:1200;left:1px;";
        tips.value = o.value;

        $(o.value).addEvent(eventInput, function (value) {
            o.timer = setTimeout(function () {
                trigerTips(tips, o.tips, o);
            }, 1500)
        }).addEvent("keydown", function () {
            clearTimeout(o.timer);
        }).addEvent("blur", function () {
            if (!tips.selecting) {
                tips.style.display = "none";
                tips.selecting = false;
            }
            clearTimeout(o.timer);
        }).addEvent("focus", function (value) {
            if (value.value != "") {
                trigerTips(tips, o.tips, o)
            }
            
        });
        $(tips).addEvent("mouseover", function () {
            tips.selecting = true;
        }).addEvent("mouseout", function () {
            tips.selecting = false;
        })
    });
    function trigerTips(tips, urlTip, form) {
        (new Ajax).post(urlTip, form, function (data) {
            // var data = [{ value: 1 }, { value: 2}];
			 data = eval("("+data+")");
            createTips(data, tips, form)
        })
    }
    function createTips(data, tips, form) {
        tips.innerHTML = "";

        if (data.length > 0) {
            if (data.length > 8) {
                tips.style.height = "196px";
                tips.style.overflowY = "scroll";
            }
            else {
                tips.style.height = "auto";
                tips.style.overflowY = "visible";
            }
            tips.style.width = $(tips.value).css("width")[0];
            tips.style.display = "block";
            for (var i = 0; i < data.length; i++) {
                var itemTips = createDIV("placeholder-tips-item", data[i].value);
                itemTips.data = data[i];
                itemTips.style.cssText = "line-height:24px;height:24px;z-index:780;cursor:pointer;color:#555;overflow:hidden;padding:2px 4px;";
                $(itemTips).addEvent("mouseover", function (me) {
                    me.style.background = "#f5f5f5";
                }).addEvent("mouseout", function (me) {
                    me.style.background = "#fff";
                })
                tips.appendChild(itemTips);
                $(itemTips).addEvent("click", function (t) {
                    form.value.value = t.innerHTML;
                    tips.style.width = (form.value.offsetWidth - 20) + "px";
                    tips.style.top = (form.value.offsetHeight + 2) + "px";
                    tips.style.display = "none";
                    tips.selecting = false;
                    clearTimeout(form.timer);
                })
            }
        }
    }
}


function placeholder(obj, callback) {
    $(obj).applyAttr().each(function (o) {
        o.place = $("input", o)[0];
        o.holder = $("p", o).addEvent("click", function () {
            o.place.focus();
        })[0];
		/////到时有输入问题，就删除这里(只针对搜索框)
		if(o.holder.className=="header-search-label"){
			$("p", o).addEvent("mousedown", function () {//这里
				o.place.style.background="none repeat scroll 0 0 #fff";						
			}).addEvent("mouseup",function(){						
				o.place.focus();
				o.place.style.background="";	
			})[0];		
			o.btn=$('div',o).addEvent("mousedown", function () {//这里
				o.place.style.background="none repeat scroll 0 0 #fff";						
			}).addEvent("mouseup",function(){						
				o.place.focus();
				o.place.style.background="";	
			})[0];		
		}
		/////
        if (o.place.value != "") {
            o.holder.style.display = "none";
        }

        $(o.place).addEvent("blur", function (me) {
            if (me.value == "") {
                o.holder.style.display = "block";
            }
            else {
                o.holder.style.display = "none";
            }
        }).addEvent("keydown", function (me) {
            if (me.value == "") {
                o.holder.style.display = "block";
            }
            else {
                o.holder.style.display = "none";
            }
        }).addEvent("keyup", function (me) {
            if (me.value == "") {
                o.holder.style.display = "block";
            }
            else {
                o.holder.style.display = "none";
            }
        }).addEvent("focus", function (me) {//////

            if (me.value == "") {
                o.holder.style.display = "block";
            }
            else {
                o.holder.style.display = "none";
            }
        }).addEvent("change", function (me) {
            if (o.place.value.length == 0)
                o.holder.style.display = "block";
            else
                o.holder.style.display = "none";
        }).addEvent(eventInput, function (me) {//只针对火狐
            if (o.place.value.length == 0)
                o.holder.style.display = "block";
            else
                o.holder.style.display = "none";
        })

        if (o.tips) {
            callback = callback || {};
            o.style.position = "relative";
            var tips = createDIV("placeholder-tips");
            o.appendChild(tips);
            o.style.position = "relative";
            o.style.overflow = "visible";
            tips.style.cssText = "padding:3px 8px;overflow:hidden;background:#fff;border:1px solid #e6e6e6;text-align:left;display:none;position:absolute;z-index:1200;left:1px;";
            tips.place = o.place;
			if (!callback.focusInput) {
                callback.focusInput = function () { return false };
            }
			// $(o.place).addEvent(eventInput, function (place) {
			 // o.timer = setTimeout(function () {
                    // alert(1)
                    // trigerTips(tips, o.tips, o);
                // }, 1500)
            // })
			
			
			
			
            $(o.place).addEvent(eventInput, function (place) {
                o.timer = setTimeout(function () {
                    trigerTips(tips, o.tips, o);
                }, 150)
            }).addEvent("keydown", function (place) {
                clearTimeout(o.timer);
            }).addEvent("blur", function (place) {
                if (!tips.selecting) {
                    tips.style.display = "none";
                    tips.selecting = false;
                }
                clearTimeout(o.timer);
            }).addEvent("focus", function (place) {
                if (place.value != "") {
                    trigerTips(tips, o.tips, o)
                }
                else {
                    var focusResult = callback.focusInput();
                    if (focusResult) {
                        createTips(focusResult, tips, o);
                    }
                }
            });
            $(tips).addEvent("mouseover", function () {
                tips.selecting = true;
            }).addEvent("mouseout", function () {
                tips.selecting = false;
            })
        }

    });
    function trigerTips(tips, urlTip, form) {
        (new Ajax).post(urlTip, form, function (data) {
            //var data = [{ value: "a2a", unit: "22" }, { value: "bb", unit: "33"}];
			var data = eval("("+data+")"); 
            createTips(data, tips, form)
        })
    }
    function createTips(data, tips, form) {
        tips.innerHTML = "";
		 if (data.length > 8) {
            tips.style.height = "196px";
            tips.style.overflowY = "scroll";
        }
        else {
            tips.style.height = "auto";
            tips.style.overflowY = "visible";
        }
		if(data.length > 0){
			tips.style.width = tips.place.scrollWidth + "px";
            tips.style.display = "block";
			for (var i = 0; i < data.length; i++) {
				var itemTips = createDIV("placeholder-tips-item", data[i].name);
				itemTips.data = data[i];
				itemTips.style.cssText = "line-height:24px;height:24px;z-index:780;cursor:pointer;color:#555;overflow:hidden;padding:2px 4px;";
				$(itemTips).addEvent("mouseover", function (me) {
					me.style.background = "#f5f5f5";
				}).addEvent("mouseout", function (me) {
					me.style.background = "#fff";
				})
				tips.appendChild(itemTips);
				$(itemTips).addEvent("click", function (t) {
					if (callback.clickTipItem) {
						callback.clickTipItem(t.data);
					}
					form.place.value = t.innerHTML;
					form.holder.style.display = "none";
					tips.style.width = (form.place.offsetWidth - 20) + "px";
					tips.style.top = (form.place.offsetHeight + 2) + "px";
					tips.style.display = "none";
					tips.selecting = false;
					clearTimeout(form.timer);
				})
			}
			
		}
	}
}

/* maomao
 *
 *功能：所有的用户名称点击后能出现 【用户菜单】
 *
 *调用方法：usersMenu('按钮标签类名','显示标签类名');
 */

function usersMenu(butId,showId){
	var select = false,show = $(showId).css('display','none');
	if(show.length == 0) return false;
	$(butId).addEvent('mouseover',function(me){
		select = false;
	}).addEvent('mouseout',function(){
		select = true;
	}).addEvent('click',function(me){
		if(show[0].style.display == 'none'){
			show[0].style.display = 'block';					
			$(document.body).addEvent('click', dropdown, 1);
		}
		else{
			select = true;
		}				
	});
	var dropdown = function(){
		if(select){
			select = false;
			show[0].style.display = 'none';
			$(document.body).removeEvent('click', dropdown);
		}
	};
}

/* maomao
 *
 *功能：当body高度小于窗口高度，调整最底部样式
 *
 */
function minWindowHeight(){
	var page = getPageSize();
	var cp = $('body .cp')[0];
	var footer = $('body .footer')[0];
	if(window.fixeHeight < page.WinH){
		if(cp){
			cp.style.cssText += "bottom: 0;position: absolute;width: 100%;";
		}
		if(footer){
			footer.style.cssText += "bottom:" + cp.offsetHeight + "px;position: absolute;width: 100%;";
		}		
	}
	else{
		if(cp){
			cp.style.cssText = "";
		}
		if(footer){
			footer.style.cssText = "";
		}
	}
};
$(window).addEvent('resize', minWindowHeight);
/* maomao
 *
 *功能：添加、删除、替换类名
 *
 */
var addClassName = function(node, name, fun){
		try{
			reg = new RegExp(name);
			if(!reg.test(node.className)){			
				node.className += (node.className != '')? ' ' + name : name;
				if(fun) fun();
			}
		}
		catch(err){
			console.log("Error: " + err + ".");
		}
	},
	removeClassName = function(node, name, fun){
		try{
			reg = new RegExp(name);
			if(reg.test(node.className)){
				if(node.className.indexOf(name) > 0){
					node.className = node.className.replace(' ' + name, '').replace(name, '');
				}
				else{
					node.removeAttribute('class');
				}
				if(fun) fun();
			}
		}
		catch(err){
			console.log("Error: " + err + ".");
		}
	},
	replaceClassName = function(node, source, target, fun){
		try{
			if(!target) target = '';
			reg = new RegExp(source), exp = new RegExp(target);
			if(reg.test(node.className)&&!exp.test(node.className)){
				node.className = node.className.replace(new RegExp(source), target);
				if(fun) fun();			
			}
		}
		catch(err){
			console.log("Error: " + err + ".");
		}
	};
	
/* maomao
 *
 *功能：菜单/按钮 初选择
 *
 */	
function selectMenu(){
	var otherMenu = {
		primary : function(index){
			var _primary = 'btn-primary', _default = 'btn-default';
			$('.tab-nav01 a').each(function(me, i){
				replaceClassName(me, _primary, _default);
				if(index == i){
					replaceClassName(me, _default, _primary);
				}
			});
		},
		wraper02 : function(index){
			var _active = ' active';
			$('.btn-group.tab-wraper02 a').each(function(me, i){
				removeClassName(me, _active);
				if(index == i){
					addClassName(me, _active);
				}
			});
		},
		mybugs : function(index){
			this.wraper02(index);
		},
		allbug : function(index){
			this.wraper02(index);
		},
		allfirm : function(index){
			this.wraper02(index);
		},
		allhack : function(index){
			this.wraper02(index);
		},
		rank : function(index){
			this.primary(index);
		},
		cms : function(index){
			this.wraper02(index);
		}
	};
	var contentMenu = {
		changeClaaName : function(index){
			var change = 'current';
			var menu = $('.accordion li').each(function(me){
				removeClassName(me, change);
			});
			if(menu[index])
			menu[index].className = change;			
		},
		arrayFind : function(menuList){
			for(var i in menuList){
				if(menuList[i] == str){
					this.changeClaaName(i);
				}
			}
		},
		hack : function(){
			if(basicMenu[str])return basicMenu[str](2);
			var menuList = ['hack', 'mybugs', '', 'profile', 'money', 'phone', 'password'];
			this.arrayFind(menuList);
		},
		firm : function(){
			if(basicMenu[str])return basicMenu[str](3);
			var menuList = ['firm', 'mybugs', '', 'profile', 'password'];
			this.arrayFind(menuList);
		},
		admin : function(){
			this.changeClaaName(0);
		},
		allbug : function(){
			this.changeClaaName(1);
		},
		allhack : function(){
			this.changeClaaName(2);
		},
		allfirm : function(){
			this.changeClaaName(3);
		}		
	};
	var basicMenu = {
		menulist : function(index){
			var _active = ' active';
			$('.menupl .menulist li').each(function(me, i){
				removeClassName(me, _active);
				if(index == i){
					addClassName(me, _active);
				}
			});
		},
		rank : function(index){
			this.menulist(index);
		},
		firmlists : function(){
			this.menulist(3);
		},
		create : function(){
			this.menulist(1);
		},
		aboutus : function(){
			this.menulist(4);
		},
		bug : function(){
			return false;
		}
	};
	var docName = document.URL.split('/'), un = 1;
	var str =docName[docName.length - un++].replace( new RegExp(/.html$/), '');			
	if(/^\d/.test(str)){
		var index = str.replace(/\?.*/,'');
		str = docName[docName.length - un++];
		if(otherMenu[str]){
			otherMenu[str](index);
		}
	}
	var isBool = true;
	for(var j = 0; j < docName.length; j++){
		var userType = docName[j];
		if(contentMenu[userType]){
			contentMenu[userType]();
			isBool = false;
		}
	}
	if(isBool){
		if(/^\d/.test(str)) str = docName[docName.length - un++];
		if(basicMenu[str]){
			basicMenu[str]();
		}
		else if(str == ''){
			basicMenu["menulist"](0);
		}
	}
}
/****** 开始 *****/
$().ready(function(){
	window.fixeHeight = document.body.offsetHeight;
	minWindowHeight();
	selectMenu();
	usersMenu('.account .name','.account .dropdown-menu');	
});
/****** 结束 *****/

/* maomao
 *
 *功能：IE版本判断
 *
 */
$().is['IEVersion'] = function(index){
	if (!this.IE) return false;
	var groups = navigator.userAgent.split(";");
	for(var i in groups){
		if(/MSIE/.test(groups[i])){
			var versions =  groups[i].replace(/MSIE/, '') | 0;
			return (!index)? versions: (index == versions);
		}
	}   
}; 