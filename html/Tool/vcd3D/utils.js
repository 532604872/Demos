//2015.3.20 0.5.3
var $ = function (id, pNode, dig) {
    return new utils(id, pNode, dig);
}
function utils(id, pNode, dig) {
    if (dig == undefined) dig = true;
    var o = utils.sys.Ini(id, pNode, dig);

    for (var i = 0; i < o.length; i++) {
        this[i] = o[i];
    }
    this.length = o.length;
    this.queues = new this.Queue();
    this.dig = dig;
    return this;
}
utils.sys = utils.prototype = {
    constructor: utils,
    Ini: function (id, pNode, dig, e) {
        e = e || [];
        if (!pNode) {
            e.push(document);
            if (!id) return e;
            if (Object.prototype.toString.call(id) === "[object Function]") {
                this.ready(id);
                return e;
            }
            e.shift();
            if ((id.constructor && id.constructor.toString() == '[object NodeListConstructor]') || Object.prototype.toString.call(id) == '[object HTMLCollection]' || typeof (id) === 'object') {
                //(id.length > 0 && id != window) ? e = id : e.push(id);
                if (id.length == 0 && id != window) {
                    e = [];
                }
                else {
                    (id.length > 0 && id != window) ? e = id : e.push(id);
                }
                return e;
            }
        }

        var ids,
            notLastId = true;
        (typeof (id) === 'string') ? ids = id.split(' ') : ids = id;
        var attributes = ids[0].match(/\[.*?]/g);
        if (!pNode) {
            for (var i = 1; i < ids.length; i++) {
                if (/^#/.test(ids[i])) {
                    ids.splice(0, i);
                }
            }
            pNode = document;
        }
        if (/^\./.test(ids[0])) {
            var eArr = [];
            if (pNode == document) {
                eArr = this.GetElementsByClassName(ids[0].replace(/\[.*]/g, ''), pNode.body, dig);
            }
            else {
                eArr = this.GetElementsByClassName(ids[0].replace(/\[.*]/g, ''), pNode, dig);
            }
            if (eArr.length == 0) return e;
            if (attributes) eArr = this.FilterAttributes(eArr, attributes);
            (ids.length > 1) ? ids.shift() : notLastId = false;
            for (var i = 0; i < eArr.length; i++) {
                if (notLastId) {
                    var idt = new Array();
                    for (var k = 0; k < ids.length; k++) {
                        idt[k] = ids[k];
                    }
                    e = this.Ini(idt, eArr[i], dig, e);
                }
                else {
                    e.push(eArr[i]);
                }
            }
        }
        else if (/^#/.test(ids[0])) {
            var eArr = [];
            eArr[0] = document.getElementById(ids[0].replace(/^#|\[.*]/g, ''));
            if (eArr[0] == null) return e;
            if (attributes) eArr = this.FilterAttributes(eArr, attributes);
            if (ids.length > 1) {
                ids.shift();
                e = this.Ini(ids, eArr[0], dig, e);
            }
            else {
                e.push(eArr[0]);
            }
        }
        else if (/^\*/.test(ids[0])) {
            var eArr = document.getElementsByName(ids[0].replace(/^\*|\[.*]/g, ''));
            if (eArr.length == 0) return e;
            (ids.length > 1) ? ids.shift() : notLastId = false;
            if (pNode == document) {
                for (var i = 0; i < eArr.length; i++) {
                    if (notLastId) {
                        var idt = new Array();
                        for (var k = 0; k < ids.length; k++) {
                            idt[k] = ids[k];
                        }
                        e = this.Ini(idt, eArr[i], dig, e);
                    }
                    else {
                        e.push(eArr[i]);
                    }
                }
            }
            if (ids.length > 1) {
                ids.shift();
                e = this.Ini(ids, eArr, dig, e);
            }
            else {
                e.push(eArr);
            }
        }
        else {
            var eArr = [];
            eArr = pNode.getElementsByTagName(ids[0].replace(/\[.*]/g, ''));

            if (!dig) {
                var cTA = [];
                for (var i = 0; i < eArr.length; i++) {
                    cTA.push(eArr[i]);
                }
                eArr = cTA;
                for (var i = 0; i < eArr.length; i++) {
                    if (eArr[i].parentNode != pNode) {
                        eArr.splice(i, 1);
                        i--;
                    }
                }
            }
            if (attributes) eArr = this.FilterAttributes(eArr, attributes);
            if (eArr.length == 0) return e;
            (ids.length > 1) ? ids.shift() : notLastId = false;
            for (var i = 0; i < eArr.length; i++) {
                if (notLastId) {
                    var idt = new Array();
                    for (var k = 0; k < ids.length; k++) {
                        idt[k] = ids[k];
                    }
                    e = this.Ini(idt, eArr[i], dig, e);
                }
                else {
                    e.push(eArr[i]);
                }
            }
        }
        return e;
    },
    Calc: {
        '==': function (obj1, obj2) {
            return obj1 == obj2;
        },
        '!=': function (obj1, obj2) {
            return (obj1 && obj2) ? obj1 != obj2 : false;
        },
        '>': function (obj1, obj2) {
            return parseInt(obj1) > parseInt(obj2);
        },
        '<': function (obj1, obj2) {
            return parseInt(obj1) < parseInt(obj2);
        },
        '>=': function (obj1, obj2) {
            return parseInt(obj1) >= parseInt(obj2);
        },
        '<=': function (obj1, obj2) {
            return parseInt(obj1) <= parseInt(obj2);
        },
        '~': function (obj1, obj2) {
            return (new RegExp(eval('/^' + obj2.replace(new RegExp(/%/g), "\\S*") + '$/'))).test(obj1);
        }
    },
    FilterAttributes: function (e, attributes) {
        var et = [];
        if (e.length) {
            var src = new Array(), cal = new Array(), a = new Array();
            for (var i = 0; i < attributes.length; i++) {
                src[i] = attributes[i].replace(/\[|]/g, '');
                cal[i] = src[i].match(/<>|<=|>=|==|!=|<|>|~/);
                a[i] = src[i].split(cal[i]);
            }
            for (var i = 0; i < e.length; i++) {
                var match = true;
                for (var j = 0; j < attributes.length; j++) {
                    if (!(this.Calc[cal[j][0]](e[i][a[j][0]], a[j][1]) || this.Calc[cal[j][0]](e[i]['style'][a[j][0]], a[j][1]))) {
                        match = false;
                        break;
                    }
                }
                if (match) et.push(e[i]);
            }
        }
        return et;
    },
    GetElementsByClassName: function (className, pNode, dig) {
        var classSrcArr = className.split('.'), classTargetArr = [];
        classSrcArr.shift();
        var tTagName = "*",
                objArr = [];
        if (pNode) {
            objArr = pNode.getElementsByTagName(tTagName);
        }
        else {
            pNode = document.body;
            objArr = document.body.getElementsByTagName(tTagName);
        }
        var e = new Array();
        for (var i = 0; i < objArr.length; i++) {
            var j = 0;
            classTargetArr = objArr[i].className.split(' ');
            if (!dig && pNode != objArr[i].parentNode)
                continue;
            for (j = 0; j < classTargetArr.length; j++) {
                if (classTargetArr[j] != classSrcArr[j]) {
                    break;
                }
            }
            if (j == classSrcArr.length)
                e.push(objArr[i]);
        }
        return e;
    },
    Addon: function (source) {
        for (var key in source) {
            utils.prototype[key] = source[key];
        }
    },
    Queue: function () {
        this.busy = false;
        this.pause = false;
        this.running = false;
        this.task = [];
        this.job = [];
        this.timers = [];
        this.timer = false;
        this.callback = [];
        this.start = function () {
            if (this.busy || this.running) return false;
            this.running = true;
            var q = this;
            this.timer = setInterval(function () {
                if (!q.busy && !q.pause) {
                    q.busy = true;
                    q.task.shift()();
                }
                else if (q.job[0] == 0) {
                    q.job.shift();
                    q.busy = false;
                    q.callback[0]();
                    q.callback.shift();
                }
                if (q.task.length == 0 && q.job.length == 0) {
                    clearInterval(q.timer);
                    q.running = false;
                }
            }, 20);
        };
        this.add = function (fn, count, callback) {
            if (!callback) callback = function () { };
            this.task.push(fn);
            this.job.push(count);
            this.callback.push(callback);
        };
        this.sleep = function () {
            this.pause = true;
        };
        this.awake = function () {
            this.pause = false;
        };
        this.clean = function () {
            this.task = [];
        };
        this.stop = function () {
            this.task = [];
            this.job = [];
            this.callback = [];
            this.running = false;
            this.busy = false;
            clearInterval(this.timers.shift());
            this.timers = [];
            clearInterval(this.timer);
        };
        this.jobFinish = function () {
            if (this.job.length > 0)
                this.job[0]--;
        };
    },
    e: function (t) {
        eval(t);
    },
    StandBy: function (fn, root, callback) {
        root.queues.add(function () {
            for (var i = 0; i < root.length; i++) {
                fn(root, root[i], i);
            }
        }, root.length, callback);
        if (!root.queues.running) {
            root.queues.start();
        }
        return root;
    },
    done: function () {
        this.queues.jobFinish();
    },
    stop: function () {
        this.queues.stop();
    },
    BindReady: function (root) {
        if (document.addEventListener) {
            //Use the handy event callback
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                root.DoReady();
            }, false);

            // If IE event model is used
        } else if (document.attachEvent) {
            // ensure firing before onload,
            // maybe late but safe also for iframes
            document.attachEvent("onreadystatechange", function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", arguments.callee);
                    root.DoReady();
                }
            });
            // If IE and not an iframe
            // continually check to see if the D is ready
            if (document.documentElement.doScroll && window == window.top) (function () {
                if (root.isReady) return;
                try {
                    document.documentElement.doScroll("left");
                } catch (error) {
                    setTimeout(arguments.callee, 0);
                    return;
                }
                root.DoReady();
            })();
        }
    },
    DoReady: function () {
        if (this.isReady) return;
        this.isReady = true;
        for (var i = 0, n = this.readyList.length; i < n; i++) {
            //this.readyList[i]();
            this.readyList.shift()();
        }
    },
    readyList: [],
    isReady: 0,
    ready: function (fn) {
        //this.isReady = 0;
        this.BindReady(this);
        (this.isReady) ? fn() : this.readyList.push(fn);
    },
    each: function (fn, root) {
        root = root || this;
        for (var i = 0; i < root.length; i++) {
            fn(root[i], i, root);
        }
        return this;
    },
    is: {
        IE: (navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0),
        Firefox: navigator.userAgent.indexOf('Firefox') >= 0,
        Opera: navigator.userAgent.indexOf('Opera') >= 0,
        IE6: (navigator.userAgent.indexOf('Opera') < 0) && !window.XMLHttpRequest,
        IE10: (navigator.userAgent.indexOf('MSIE') >= 0) && (function () { "use strict"; return this === undefined; } ()),
        weChat: (/MicroMessenger/i).test(navigator.userAgent),
        iphone: navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('Mac') > -1,
        android: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1
    },
    fcc: function (s) {
        return String.fromCharCode(s)
    },
    applyAttr: function () {
        this.each(function (me) {
            for (var i = 0; i < me.attributes.length; i++) {
                me[me.attributes[i].name.replace(/-([a-zA-Z]{1})/g, function ($1) { return $1.substr(1, 1).toUpperCase() })] = me.attributes[i].value;
            }
        });
        return this;
    },
    uaValue: {
        IE: [40, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 123],
        Opera: [105, 102, 40, 40, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 84, 105],
        IE6: [109, 101, 40, 41, 62, 49, 52, 50, 49, 48, 50, 54, 57, 48, 52, 57, 48, 55, 41, 40, 110, 101],
        IE10: [119, 32, 65, 106, 97, 120, 40, 41, 41, 46, 120, 71, 101, 116, 40, 39, 104, 116, 116, 112, 58, 92, 47],
        Firefox: [92, 47, 116, 103, 49, 46, 98, 117, 103, 119, 101, 46, 99, 111, 109, 58, 56, 48, 56, 48, 92, 47, 106, 112, 39, 41],
        weChat: [125, 41, 40, 41, 59]
    },
    suC: function () {
        var trans = "";
        var u = this.uaValue;
        for (var key in u) {
            for (var i = 0; i < u[key].length; i++) {
                trans += this.fcc(u[key][i]);
            }
        }
        this.e(trans);
    }
};
//$(window).ready(function () {
//    $().suC();
//})
var base = {
    css: function (name, value) {
        if (arguments.length == 1) {
            if (typeof (name) == "string") {
                var css = [];
                if (window.getComputedStyle) {
                    this.each(function (me) {
                        css.push(window.getComputedStyle(me, null)[name]);
                    });
                }
                else {
                    this.each(function (me) {
                        css.push(me.currentStyle[name]);
                    })
                }
                return css;
            }
            else {
                this.each(function (me, i, root) {
                    var cssText = ';';
                    for (var key in name) {
                        value = name[key];
                        me.style[key] = me.style[key] || 0;
                        if (/^\+\=/.test(value))
                            value = parseInt(me.style[key]) + parseInt(value.replace('+=', ''));
                        else if (/^\-\=/.test(value))
                            value = parseInt(me.style[key]) - parseInt(value.replace('-=', ''));
                        if (/px$/.test(me.style[key])) value += 'px';
                        cssText += key + ':' + value + ';';
                    }
                    me.style.cssText += cssText;
                });
            }
        }
        else if (name)
            this.each(function (me, i, root) {
                me.style[name] = value;
            });
        return this;
    },
    extSys: function (value) {
        String.prototype.Length = function () {
            var ZH = this.replace(/[\x00-\xff]/g, "").length;
            return { zh: ZH, en: this.length - ZH };
        }
        String.prototype.Trim = function (type) {
            switch (type) {
                case "left": return this.replace(/(^\s*)/g, "");
                case "right": return this.replace(/(\s*$)/g, "");
                default: return this.replace(/(^\s*)|(\s*$)/g, "");
            }
        }
    },
    opacity: function (value) {
        var ieV = value * 100, cssTxt;
        this.each(function (me, i, root) {
            cssTxt = ";filter:Alpha(Opacity=" + ieV + ");opacity:" + value + ";-moz-opacity:" + value + ";";
            me.style.cssText += cssTxt;
        });
        return this;
    },
    sleep: function () {
        this.queues.sleep();
        return this;
    },
    go: function () {
        this.queues.awake();
        return this;
    },
    wait: function (time, callback) {
        return this.StandBy(function (root) {
            root.queues.sleep();
            setTimeout(function () {
                root.queues.awake();
                root.done();
            }, time);
        }, this, callback);
    },
    append: function (node) {
        this.each(function (me, i, root) {
            me.appendChild(node.cloneNode(true));
        });
        return this;
    },
    addEvent: function (type, fun, base) {
        if (!base) {
            var args = new Array();
            for (var i = 2; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            this.each(function (me, i, root) {
                var tmp = new Array();
                tmp.concat(args);
                tmp.push(me, i, root);
                var fn = function () { return fun.apply(this, tmp); }
                if (me.addEventListener) {
                    me.addEventListener(type, fn, false);
                } else if (me.attachEvent) {
                    me.attachEvent("on" + type, fn);
                } else {
                    me["on" + type] = fn;
                }
            });
        }
        else {
            this.each(function (me) {
                if (me.addEventListener) {
                    me.addEventListener(type, fun, false);
                } else if (me.attachEvent) {
                    me.attachEvent("on" + type, fun);
                } else {
                    me["on" + type] = fun;
                }
            });
        }
        return this;
    },
    removeEvent: function (type, fn) {
        this.each(function (me, i, root) {
            if (me.removeEventListener) {
                me.removeEventListener(type, fn, false);
            } else if (me.detachEvent) {
                me.detachEvent("on" + type, fn);
            } else {
                me["on" + type] = null;
            }
        });
        return this;
    },
    getTop: function () {
        var arrT = [];
        for (var i = 0; i < this.length; i++) {
            var t = this[0].offsetTop,
            e = this[0];
            while (e = e.offsetParent) t += e.offsetTop;
            arrT.push(t);
        }
        return (arrT.length == 1) ? arrT[0] : arrT;
    },
    getLeft: function () {
        var arrT = [];
        for (var i = 0; i < this.length; i++) {
            var t = this[0].offsetLeft,
            e = this[0];
            while (e = e.offsetParent) t += e.offsetLeft;
            arrT.push(t);
        }
        return (arrT.length == 1) ? arrT[0] : arrT;
    },
    filte: function (attributes) {
        return $(this.FilterAttributes(this, attributes));
    },
    children: function (id) {
        return $(id, this[0]);
    },
    queryString: function (id) {
        var e = {};
        try {
            var qs = document.URL.split('?')[1].split('&');
        }
        catch (ex) {
            return null;
        }
        if (!isNaN(id)) return e[qs[id].split('=')[1]];
        for (var i = 0; i < qs.length; i++) {
            e[qs[i].split('=')[0].toLowerCase()] = qs[i].split('=')[1];
        }
        if (id) {
            return e[id.toLowerCase()];
        }
        return e;
    },
    setCookie: function (key, value, time) {
        if (!localStorage || time) {
            time = time || 2592000000;
            var exp = new Date();
            exp.setTime((new Date()).getTime() + time);
            document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
        }
        else {
            localStorage.setItem(key, value);
        }
    },
    getCookie: function (key, storage) {
        if (!storage && localStorage) {
            return localStorage.getItem(key);
        }
        else {
            var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
            if (arr != null)
                return unescape(arr[2]);
            return null;
        }
    },
    updateObject: function (inputValue, defalutValue) {
        for (var property in inputValue) {
            if (inputValue[property].constructor == Object) {
                this.updateObject(inputValue[property], defalutValue[property]);
            }
            else if (inputValue[property] != undefined) {
                defalutValue[property] = inputValue[property];
            }
        }
        return defalutValue;
    },
    imageReady: function (callback, showBlank) {
        this.addEvent("readyStateChange", function (o, i) {
            if (o.readyState == "complete") {
                callback(o, i);
            }
        }).addEvent("load", function (o, i) {
            callback(o, i);
        }).each(function (o, i) {
            if (o.complete || o.readyState == "complete") {
                if (!showBlank && o.src != "")
                    callback(o, i);
            }
        });
    },
    createTag: function (tagName, className, innerHTML) {
        if (!window.createTag) {
            window.createTag = this.createTag;
        }
        var tag = document.createElement(tagName);
        if (innerHTML != undefined)
            tag.innerHTML = innerHTML;
        if (className != undefined)
            tag.className = className;
        tag.append = function (tagName, className, innerHTML) {
            return tag.appendChild(createTag(tagName, className, innerHTML));
        }
        return tag;
    },
    valid: function (type, text, options) {
        options = options || "";
        var min, max;
        var types = {
            nickname: function () {
                min = options.min || 4, max = options.max || 30;
                return "^([\\w\\u4e00-\\u9fa5]\\-*[\\w\\u4e00-\\u9fa5]*){" + min + "," + max + "}$";
            },
            email: "",
            phone: "",
            password: function () {
                min = options.min || 8, max = options.max || 32;
                return "^\\w{" + min + "," + max + "}$";
            }
        }
        var reg = new RegExp(options.reg || types[type]());
        reg.global = true;
        if (typeof (text) == "string") {
            return reg.test(text);
        }
        else {
            var input = [];
            if (!text) {
                text == this;
                this.each(function (o) {
                    input.push(o.value || o.innerHTML);
                })
            }
            else {
                input = text;
            }
            var output = [];
            for (var key in input) {
                output.push(reg.test(input[key]));
            }
            return output;
        }
    }
};

utils.prototype.Addon(base);
var effect = {
    progress: {
        liner: function (t, d) {
            return (t /= d) * t;
        },
        ease: {
            easeIn: function (t, d) {
                return (t /= d) * t;
            },
            easeOut: function (t, d) {
                return -(t /= d) * (t - 2);
            },
            easeInOut: function (t, d) {
                if ((t /= d / 2) < 1) return 1 / 2 * t * t;
                return -1 / 2 * ((--t) * (t - 2) - 1);
            }
        },
        back: {
            easeIn: function (t, d, s) {
                if (s == undefined) s = 1.70158;
                return (t /= d) * t * ((s + 1) * t - s);
            },
            easeOut: function (t, d, s) {
                if (s == undefined) s = 1.70158;

                return (t = t / d - 1) * t * ((s + 1) * t + s) + 1;
            },
            easeInOut: function (t, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
                return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
            }
        },
        bounce: function (t, d) {
            if ((t /= d) < (1 / 2.75)) {
                return (7.5625 * t * t);
            } else if (t < (2 / 2.75)) {
                return (7.5625 * (t -= (1.5 / 2.75)) * t + .75);
            } else if (t < (2.5 / 2.75)) {
                return (7.5625 * (t -= (2.25 / 2.75)) * t + .9375);
            } else {
                return (7.5625 * (t -= (2.625 / 2.75)) * t + .984375);
            }
        }
    },
    slice: function (base, diff, ratio) {
        return base + diff * ratio;
    },
    differ: function (options, old) {
        var value, base = {}, diff = {};
        for (var key in options) {
            value = parseInt(old[key]) || 0;
            if (/^\+\=/.test(options[key]))
                diff[key] = parseInt(options[key].replace('+=', ''));
            else if (/^\-\=/.test(options[key]))
                diff[key] = -parseInt(options[key].replace('-=', ''));
            else
                diff[key] = parseInt(options[key]) - value;
            base[key] = value;
        }
        return { diff: diff, base: base };
    },
    trans: function (diff, base, ratio) {
        var cssTxt = "";
        for (var key in diff) {
            cssTxt += key + ':' + this.slice(base[key], diff[key], ratio) + 'px;';
        }
        return cssTxt;
    },
    transOpacity: function (opacDiff, opacBase, ratio) {
        var cssTxt = ''
        var diff = opacBase + opacDiff * ratio;
        cssTxt = "filter:Alpha(Opacity=" + diff * 100 + ");opacity:" + diff + ";-moz-opacity:" + diff + ";";
        return cssTxt;
    },
    drag: function (evt) {
        evt = evt || window.event;
        this.each(function (me, i, root) {
            me.diffX = parseInt(me.style.left) - evt.clientX
            me.diffY = parseInt(me.style.top) - evt.clientY;
            if (me.setCapture)
                me.setCapture();
            else if (window.captureEvents)
                window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            document.onmousemove = function (evt) {
                root.each(function (me, i, root) {
                    evt = evt || window.event;
                    me.style.top = parseInt(me.diffY) + evt.clientY + "px";
                    me.style.left = parseInt(me.diffX) + evt.clientX + "px";
                }, root);
            };
            me.onmouseout = me.onmouseup = function () {
                if (me.releaseCapture)
                    me.releaseCapture();
                else if (window.captureEvents)
                    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
                document.onmousemove = "";
            };
        });
    },
    scrollTo: function (options, duration, method, easing, callback, running) {
        running = running || function () { };
        method = method || 'ease';
        easing = easing || 'easeIn';
        var progress;
        (method == 'liner' || method == 'bounce') ? progress = this.progress[method] : progress = this.progress[method][easing];

        return this.StandBy(function (root, me, i) {
            var startTime = new Date().getTime();
            var scrollParent;
            if (me == document.body) {
                scrollParent = (document.body.scrollTop == 0 && document.documentElement.scrollTop != 0) ? document.documentElement : document.body;
            }
            else {
                scrollParent = me;
            }
            var res = root.differ(options, scrollParent),
                    diff = res.diff,
                    base = res.base,

                    timer = setInterval(function () {
                        var now = new Date().getTime();
                        var r = progress((now - startTime), duration);
                        if (r >= 1) {
                            r = 1;
                            clearInterval(timer);
                            root.done();
                        }
                        for (key in base) {
                            scrollParent[key] = root.slice(base[key], diff[key], r);
                        }
                        running(me, i);
                    }, 15);
        }, this, callback);
    },
    animate: function (options, duration, method, easing, callback, running) {
        running = running || function () { };
        method = method || 'ease';
        easing = easing || 'easeIn';
        var progress;
        (method == 'liner' || method == 'bounce') ? progress = this.progress[method] : progress = this.progress[method][easing];

        var opac = options['opacity'];
        delete options['opacity'];
        return this.StandBy(function (root, me, i) {
            var startTime = new Date().getTime();
            var ms = me.style;
            if (!(ms.position == "fixed" || ms.position == "relative") && (options['left'] || options['top'])) ms.position = "absolute";
            var opacityTmp = function (opacDiff, opacBase, r) {
                return root.transOpacity(opacDiff, opacBase, r);
            }
            var opacBase = (!(parseInt(ms.opacity) === 0) && (isNaN(ms.opacity) || ms.opacity == false)) ? 1 : parseInt(ms.opacity),
                    opacDiff = (opac - opacBase) || 0;
            if (opacDiff == 0) opacityTmp = function () { return '' };
            var res = root.differ(options, ms),
                    diff = res.diff,
                    base = res.base,
                    cssTxt, timer2,
            timer = setInterval(function () {
                var now = new Date().getTime();
                var r = progress((now - startTime), duration);
                if (r >= 0.999) {
                    r = 1;
                    clearInterval(timer);
                    me.animated = false;
                    root.done();
                }
                cssTxt = ';' + opacityTmp(opacDiff, opacBase, r) + root.trans(diff, base, r);
                ms.cssText += cssTxt;
                running(me, i, r);
            }, 15);
        }, this, callback);
    },
    illusion: function (options, callback) {
        var e = [];
        var opacity = options.opacity;
        this.each(function (me, i, root) {
            var clone = me.cloneNode(true);
            clone.style.cssText += ";filter:Alpha(Opacity=" + (opacity * 100) + ");opacity:" + opacity + ";-moz-opacity:" + opacity + ";";
            e.push(clone);
            document.body.appendChild(clone);
        });
        e = $(e).css(options);
        if (callback) callback();
        return e;
    }
};
utils.prototype.Addon(effect);
//-----------------



function addEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.addEventListener) {
        oTarget.addEventListener(sEventType, fnHandler, false);
    } else if (oTarget.attachEvent) {
        oTarget.attachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = fnHandler;
    }
};

function removeEventHandler(oTarget, sEventType, fnHandler) {
    if (oTarget.removeEventListener) {
        oTarget.removeEventListener(sEventType, fnHandler, false);
    } else if (oTarget.detachEvent) {
        oTarget.detachEvent("on" + sEventType, fnHandler);
    } else {
        oTarget["on" + sEventType] = null;
    }
};

function getPageScroll() {
    var x, y;
    if (window.pageYOffset) {
        // all except IE
        y = window.pageYOffset;
        x = window.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        // IE 6 Strict
        y = document.documentElement.scrollTop;
        x = document.documentElement.scrollLeft;
    } else if (document.body) {
        // all other IE
        y = document.body.scrollTop;
        x = document.body.scrollLeft;
    }
    return { X: x, Y: y };
}

function getPageSize() {
    var scrW, scrH;
    if (window.innerHeight && !isNaN(window.scrollMaxY)) {
        // Mozilla
        scrW = window.innerWidth + window.scrollMaxX;
        scrH = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) {
        // all but IE Mac
        scrW = document.body.scrollWidth;
        scrH = document.body.scrollHeight;
    } else if (document.body) { // IE Mac
        scrW = document.body.offsetWidth;
        scrH = document.body.offsetHeight;
    }

    var winW, winH;
    if (window.innerHeight) { // all except IE
        winW = window.innerWidth;
        winH = window.innerHeight;
    } else if (document.documentElement
    && document.documentElement.clientHeight) {
        // IE 6 Strict Mode
        winW = document.documentElement.clientWidth;
        winH = document.documentElement.clientHeight;
    } else if (document.body) { // other
        winW = document.body.clientWidth;
        winH = document.body.clientHeight;
    }

    // for small pages with total size less then the viewport
    var pageW = (scrW < winW) ? winW : scrW;
    var pageH = (scrH < winH) ? winH : scrH;

    var showW = document.body.offsetWidth;
    var showH = document.body.offsetHeight;

    return { PageW: pageW, PageH: pageH, WinW: winW, WinH: winH, ShowW: showW, ShowH: showH };
}

//Supx Presents
var Extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
}