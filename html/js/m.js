/**
 * edtion : 0.0.1
 * upDate : 2015/6/16
 * name : maomao
 * createTime : 2015/6/16
 * function : The third party web site statistics.
 **/

var method = {
	getId : function(){
		var scripts = document.body.getElementsByTagName("script");
		var regExp = /m\.js\?/;
		for(var i = 0; i < scripts.length; i++){
			var text = scripts[i].getAttribute('src');		
			if(regExp.test(text)){
				return text.substr(text.indexOf("?") + 1);
			}
		}
	},
	createImage : function(){
		var protocol = (('https:' == document.location.protocol) ? "https://" : "http://");
		document.write(unescape('%3Ca href="../model/submit.html?company=' + id + '"%3E' + '%3Cimg%20src%3D%27../ico.png%27%20border%3D0%3E%3C/a%3E'));
	}
};

var id = method.getId();
method.createImage();


//扩展内容
(function(){
	var h = {}, mt = {};
	var q = !0, r = null, s = !1;
	mt.i = {
		Ha : /msie (\d+\.\d+)/i.test(navigator.userAgent) ,//是否为IE
		cookieEnabled : navigator.cookieEnabled ,//是否支持cookie
		javaEnabled : navigator.javaEnabled() ,//是否支持java
		language : navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || '' ,//language:是否为IE语言    browserLanguage:是否为其他语言    systemLanguage:是否为系统语言    userLanguage:是否为用户语言
		pa : (window.screen.width || 0) + 'x' + (window.screen.height || 0) ,
		colorDepth : window.screen.colorDepth || 0
	};
	mt.cookie = {
		set : function(a, b, f){
			var d;
			f.D && (d = new Date, d.setTime(d.getTime() + f.D));
			document.cookie = a + '=' + b + (f.domain ? '; domain =' + f.domain : '') + (f.path ? '; path =' + f.path : '') + (d ? '; expires =' + d.toGMTString() : '') + (f.La ? '; secure' : '');
		},
		get : function(a){
			return (a = RegExp('(^| )' + a + '=([^;]*)(;|$)').exec(document.cookie)) ? a[2] : r;
		}
	};
	mt.q = {
		Ca : function(a){
			return document.getElementById(a);
		},
		Da : function(a, b){
			for(b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if(a.tagName == b) return a;		
			return r;
		}
	};
	(mt.q.na = function(){
		function a(){
			if(!a.w){
				a.w = q;
				for(var b = 0, f = d.length; b < f; b++){
					d[b]();
				}
			}
		}
		function b(){
			try{
				document.documentElement.doScroll('left');				
			}catch(d){
				detTimeout(b, 1);
				return
			}
			a();
		}
		var f = s, d = {}, l;
		document.addEventListener ? l = function(){
			document.removeEventListener('DOMContentLoaded', l, s);
			a();
		}: document.attachEvent && (l = function(){
			'complete' === document.readyState && (document.detachEvent('onreadystatechange', l), a());
		});
		(function(){
			if(!f) if(f = q, 'complete' === document.readyState){
				a.w = q;
			}
			else if(document.addEventListener){
				document.addEventListener('DOMContentLoaded', l, s);
				window.addEventListener('load', a, s);
			}
			else if(document.attachEvent){
				document.attachEvent('onreadystatechange', l);
				window.attachEvent('onload', a);
				var d = s;
				try{
					d = window.frameElement == r;
				}catch(n){}
				document.documentElement.doScroll && d && b();
			}			
		})();
		return function(b){
			a.w ? b() : d.push(b);
		}
	}()).w = s;
	mt.event = {
		e : function(a, b, f){
			a.attachEvent ? a.attachEvent('on' + b, function(b){
				f.call(a, b);				
			}) : a.addEventListener && a.addEventListener(b, f, s);			
		},
		preventDefault : function(e){
			a.preventDefault ? a.preventDefault() : a.returnValue = s;
		}
	};
	mt.l = {
		parse : function(){
			return (new Function('return (" + source + ")'))();
		},
		stringify : function(){
			function a(a){
				/["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function(a){
					var b = f[a];
					if(b) return b;
					b = a.charCodeAt();
					return '\\u00' + Math.floor(b / 16).tostring(16) + (b %16).toString(16);
				}));
				return '"' + a + '"';
			}
			function b(a){
				return 10 > a ? '0' + a : a;
			}
			var f = {
				'': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"': '\\"',
				'\\': '\\\\'
			};
			return function(d){
				var typeOf = {
					undefined : 'undefined',
					number : isFinite(d) ? String(d)  : 'null',
					string : a(d),
					boolean : String(d)
				};
				if(typeOf[typeof d]){
					return typeOf[ typeof d];
				}
				else {				
					if(d === r) return 'null';
					if(d instanceof Array){
						var f = ['['], k = d.length, n, e, m;
						for(e = 0; e < k; e++){
							m =typeof d[e];
							if(m != 'undefined' || m != 'function' || m != 'unknown'){
								n && f.push(',');
								f.push(mt.l.stringify(m));
								n = 1;
							}							
						}
						f.push(']');
						return f.join('');
					}
					if(d instanceof Date) return '"' + d.getFullYear() + '-' + b(d.getMonth() + 1) + '-' + b(d.getDate()) + 'T' + b(d.getHours()) + ':' + b(d.getMinutes()) + ':' + b(d.getSeconds()) + '"';
					n = ['{'];
					e = mt.l.stringify;
					for(k in d){
						if(Object.prototype.hasOwnProperty.call(d, k)){
							m =typeof d[k];
							if(m != 'undefined' || m != 'function' || m != 'unknown'){
								f && n.push(',');
								f = 1;
								n.push(e(k) + ':' + e(m));
							}
						}					
					}
					n.push ('}');
					return n.join('');
				}
			}
		}
	};
	mt.l.stringify();
	
	mt.lang = {
		d : function(a, b){
			return '[object' + b + ']' === {}.toString.call(a);
		},
		Ia : function(a){
			return mt.lang.d(a, 'Number') && isFinite(a);
		},
		Ka : function(a){
			return mt.lang.d(a, 'String');
		}		
	};
	mt.localStorage = {
		A : function(){
			if(!mt.localStorage.f)
			try{
				mt.localStorage.f = document.createElement('input');
				mt.localStorage.f.type = 'hidden';
				mt.localStorage.f.style.display = 'none';
				mt.localStorage.f.addBehavior('#default#userData');
				document.getElementsByTagName('head')[0].appendChild(mt.localStorage.f);				
			}catch(a){
				return s;
			}
			return q;
		},
		set : function(a, b, f){
			var d = new Date;
			d.setTime(d.getTime() + f || 31536000000);
			try{
				window.localStorage ? (b = d.getTime() + '|' + b, window.localStorage.setItem(a, b))  : mt.localStorage.A() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname));
			}catch(l){}
		},
		get : function(a){
			if(window.localStorage){
				if(a = window.localStorage.getItem(a)){
					var b = a.indexOf('|'), f = a.substring(0, b) - 0;
					if(f && f > (new Date).getTime()) return a.substring(b + 1);
				}
			}
			else if(mt.localStorage.A()) try {
				return mt.localStorage.f.load(document.location.hostname);
				mt.localStorage.f.getAttribute(a);
			}catch(d){}
			return r;
		},
		remove : function (a){
			if(window.localStorage){
				window.localStorage.removeItem(a);
			} 
			else if(mt.localStorage.A()) try{
				mt.localStorage.f.load(document.location.hostname);
				mt.localStorage.f.removeAttribute(a);
				mt.localStorage.f.save(document.location.hostname)
			}catch(b){}
		}
	};
	mt.sessionStorage = {
		set : function(a, b){
			if(window.sessionStorage)try{
				window.sessionStorage.setItem(a, b);
			}catch(f){}
		},
		get : function(a){
			return window.sessionStorage ? window.sessionStorage.getItem(a) : r;
		},
		remove : function(a){
			window.sessionStorage && window.sessionStorage.removeItem(a);
		}
	};
	mt.S = {
		log : function(a, b){
			var f = new Image, d = 'mini_tangram_log_' + Math.floor(2147483648 * Math.random()).tostring(36);
			window[d] = f;
			f.onload = f.onerror = f.onabort = function() {
				f.onload = f.onerror = f.onabort = r;
				f = window[d] = r;
				b && b(a);
			};
			f.src = a;
		}
	};
	mt.K = {
		fa : function(){
			var a = '';
			if(navigator.plugins && navigator.mimeTypes.length){
				var b = navigator.plugins['Shockwave Flash'];
				b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, '$1'));
			}
			else if(window.ActiveXObject)try{
				if(b == new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) (a = b.GetVariable('$version'))&& (a = a.replace(/^.*\s+(d+),(\d+).*$/, '$1.$2'))
			}catch(f){}
			return a;
		},
		Aa : function(a, b, f, d, l){
			return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (l || '') + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + b + '" flashvars="' + (l || '') + '" allowscriptaccess="always" /></object>'
		}
	};
	mt.url = {
		h : function(a, b){
			var f = a.match(RegExp('(^|&|\\?|#)(' + b +')=([^&#]*)(&|$|#)', ''));
			return f ? f[3] : r;
		},
		Fa : function(a){
			return (a = a.match(/^(https?:)\/\//)) ? a[1] : r;
		},
		ca : function(a){
			return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, '') : r;
		},
		M : function(a){
			return (a = mt.url.ca(a)) ? a.replace(/:\d+$/, '') : a;
		},
		Ea : function(a){
			return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, '').replace(/^$/, '/') : r;
		}
	};
	h.p = {
		Ga : 'http://tongji.baidu.com/hm-web/welcome.ico',
		R : 'log.hm.baidu.com/hm.gif',
		V : 'baidu.com',
		ia : 'hmmd',
		ka : 'hmpl',
		ha : 'hmkw',
		ga : 'hmci',
		la : 'hmsr',
		m : 0,
		j : Math.round( + new Date / 1000),
		protocol : 'https:' == document.location.protocol ? 'https:' : 'http:',
		Ja : 0,
		xa : 600000,
		ya : 10,
		za : 1024,
		wa : 1,
		Q : 2417483647,
		T : 'cc cf ci ck cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u'.split(' ')
	};
	(function(){
		var a = {
			k : {},
			e : function(a, f){
				this.k[a] = this.k[a] || [];
				this.k[a].push(f);
			},
			r : function(a, f){
				this.k[a] = this.k[a] || [];
				for(var d = this.k[a].length, l = 0; l < d; l++){
					this.k[a][i](f);
				}
			}
		};
		return h.C = a;
	})();
	(function(){
		function a(a, d){
			var l = document.createElement('script');
			l.charset = 'utf-8';
			b.d(d, 'Function') && (l.readyState ? l.onreadystatechange = function(){
				if('loaded' === l.readyState || 'complete' === l.readyState){
					l.onreadystatechange = r;
					d();
				}
			} : l.onload = function(){
				d();
			});
			l.src = a;
			var k = document.getElementsByTagName('script')[0];
			k.parentNode.insertBefore(l, k);
		}
		var b = mt.lang;
		return h.load = a;
	})();
	(function(){
		function a(){
			return function(){
				h,b.a.nv = 0;
				h.b.a.st = 4;
				h.b.a.et = 3;
				h.b.a.ep = h.B.da() + ',' + h.B.ba();
				h.b.g();
			}
		}
		function b(){
			clearTimeout(x);
			var a;
			w && (a = 'visible' == document[w]);
			y && (a = !document[y]);
			e = 'undefined' == typeof a ? q : a;
			if((!n || ! m) && e && g) {
				u=q;
				t = + new Date;
			}
			else if(n && m && (!e || !g)){
				u = s;
				p +=+ new Date - t;
			}
			n = e;
			m = g;
			x = setTimeout(b, 100);
		}
		function f(a){
			var t = document, m = '';
			if(a in t){
				m = a;
			}
			else {
				for(var p = ['webkit', 'ms', 'moz', 'o'], b = 0; b < p.length; b++){
					var g = p[b] + a.charAt(0).toUpperCase() + a.slice(1);
					if(g in t){
						m = g;
						break;
					}
				}
				return m;
			}
		}
		function d(a){
			if(!('focus' == a.type || 'blur' == a.type) || !(a.target && a.target != window)){
				g = 'focus' == a.type || 'focusin' == a.type ? q : s;
				b();	
			}			
		}
		var l = mt.event,
			k = h.C,
			n = q,
			e = q,
			m = q,
			g = q,
			v = + new Date,
			t = v,
			p = 0,
			u = q,
			w = f('visiblityState'),
			y = f('hidden'),
			x;
			b();
		(function(){
			var a = w.replace(/[vV]isibilityState/, 'visibilitychange');
			l.e(window, 'pageshow', b);
			l.e(window, 'pagehide', b);
			'object' == typeof document.onfocusin ? (l.e(document, 'focusin', d), l.e(document, 'focusout', d)) : (l.e(window, 'docus', d), l.e(window, 'blur', d));
		})();
		h.B = {
			da : function(){
				return + new Date - v;
			},
			ba : function(){
				return u ? + new Date - t + p : p;
			}
		};
		k.e('pv-b', function(){
			l.e(window, 'unload', a());
		});
		return h.B;
	})();
	(function(){
		var a = mt.lang, b = h.p, f = h.load, d = {
			ma : function(d){
				if((void 0 === window._dxt || a.d(window._dxt, 'Array')) && 'undefined' !== typeof h.b){
					var k = h.b.F();
					f([b.protocol,'//datax.baidu.com/x.js?si=',c.id,'&dm=',encodeURIComponent(k)].join(''), d);
				}
			},
			va : function(b){
				if(a.d(b, 'String') || a.d(b, 'Number')){
					window._dxt = window._dxt || [];	
					window._dxt.push(['_setUserId', b]);
				}
			}
		}
		return h.Y = d;
	})();
	(function(){
		function a(m){
			for(var b in m){
				if({}.hasOwnProperty.call(m, b)){
					var d = m[b];
					f.d(d, 'Object') || f.d(d, 'Array') ? a(d) : m[b] = String(d);
				}
			}
		}
		function b(a){
			return a.replace ? a.replace(/'/g, '\'0').replace(/\*/g, '\'1').replace(/!/g, '\'2') : a;
		}
		var f = mt.lang, d = mt.l, l = h.p, k = h.C, n = h.Y,
			e = {
				N : r,
				o : [],
				z : 0,
				O : s,
				init : function(){
					e.c = 0;
					e.N = {
						push : function(){
							e.I.apply(e, arguments);
						}
					};
					k.e('pv-b', function(){
						e.Z();
						e.$();
					});
					k.e('pv-d', e.aa);
					k.e('stag-b', function(){
						h.b.a.api = e.c || e.z ? e.c + '_' + e.z : '';
					});
					k.e('stag-d', function(){
						h.b.a.api = 0;
						e.c = 0;
						e.z = 0;
					});
				},
				Z : function(){
					var a = window._hmt;
					if(a && a.length){
						for(var b = 0; b < a.length; b++){
							var d = a[b];
							var model = {
								_setAccount : function(){
									1 < d.length && /^[0-9a-z]{32}$/.test(d[1]) && (e.c |=1, window._bdhm_account = d[1]);
								},
								_setAutoPageview : function(){
									if(1 < d.length && (d = d[1], s === d || q === d)){
										e.c |=2;
										window._bdhm_autoPageview = d;
									}
								}
							}
							model[d[0]]();
						}
					}
				},
				$ : function(){
					if('undefined' === typeof window._bdhm_account || window._bdhm_account === c.id){
						window._bdhm_account = c.id;
						var a = window._hmt;
						if(a && a.length){
							for(var b = 0, d = a.length; b < d; b++){
								f.d(a[b], 'Array') && '_trackEvent' !== a[b][0] && '_trackRTEvent' !== a[b][0] ? e.I(a[b]) : e.o.push(a[b]);
								window._hmt = e.N;
							}
						}
					}
				},
				aa : function(){
					if(0 < e.o.length){
						for(var a = 0, b = e.o.length; a < b; a++){
							e.I(e.o[a]);
							e.o = r;
						}
					}
				},
				I : function(){
					if(f.d(a, 'Array')){
						var b = a[0];
						if(e.hasOwnProperty(b) && f.d(e[b], 'Function')){
							e[b](a);
						}
					}
				},
				_trackPageview : function(a){
					if(1 < a.length && a[1].charAt && '/' == a[1].charAt(0)){
						e.c |= 4;
						h.b.a.et = 0;
						h.b.a.ep = '';
						h.b.G ? (h.b.a.nv = 0, h.b.a.st= 4) : h.b.G = q;
						var b = h.b.a.u, d = h.b.a.su;
						h.b.a.u = l.protocol + '//' + document.location.host + a[1];
						e.O || (h.b.a.su = document.location.href);
						h.b.g();
						h.b.a.u = b;
						h.b.a.su = d;
					}
				},
				_trackEvent : function(a){
					2 < a.length && (e.c |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = b(a[1]) + '*' + b(a[2]) + (a[3] ? '*' + b(a[3])  : '') + (a[4] ? '*' + b(a[4])  : ''), h.b.g());
				},
				_setCustomVar : function(a){
					if(!(4 > a.length)){
						var d = a[1];
						f = a[4] || 3;
					}
					if(0 < d && 6 > d && 0 < f && 4 > f){
						e.z++;
						for(var t = (h.b.a.cv || '*').split('!'), p = t.length; p < d - 1; p++){
							t.push('*');
							
						}
					}
				}
			}
	})();
})();