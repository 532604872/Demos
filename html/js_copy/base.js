PLOVR_MODULE_INFO = {
    "page-index": ["common"],
    "common": ["base"],
    "page-settings": ["common"],
    "page-main": ["common"],
    "page-profile": ["common"],
    "base": [],
    "richtexteditor": ["common"],
    "page-mobile-live": ["base"],
    "page-org-settings": ["common"],
    "page-roundtable": ["common"],
    "page-misc": ["common"],
    "page-org-signup": ["common"],
    "page-mobile-question": ["base"]
};
PLOVR_MODULE_URIS = {
    "page-index": "/static/revved/-/js/closure/page-index.c143904f.js",
    "common": "/static/revved/-/js/closure/common.e69719af.js",
    "page-settings": "/static/revved/-/js/closure/page-settings.8fa6d44c.js",
    "page-main": "/static/revved/-/js/closure/page-main.ee505e21.js",
    "page-profile": "/static/revved/-/js/closure/page-profile.8eeabf78.js",
    "base": "/static/revved/-/js/closure/base.618fdc41.js",
    "richtexteditor": "/static/revved/-/js/closure/richtexteditor.06781843.js",
    "page-mobile-live": "/static/revved/-/js/closure/page-mobile-live.5a928eaa.js",
    "page-org-settings": "/static/revved/-/js/closure/page-org-settings.89f6a95f.js",
    "page-roundtable": "/static/revved/-/js/closure/page-roundtable.a49ae335.js",
    "page-misc": "/static/revved/-/js/closure/page-misc.f3b755d0.js",
    "page-org-signup": "/static/revved/-/js/closure/page-org-signup.f03cffb9.js",
    "page-mobile-question": "/static/revved/-/js/closure/page-mobile-question.ea1e6ca6.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
var __z_z__ = {}; (function(z) {
    var ea,
    ga,
    wa,
    Ea;
    z.aa = function(a) {
        return function() {
            return z.ba[a].apply(this, arguments)
        }
    };
    var da = function() {
        ea.Symbol || (ea.Symbol = fa);
        da = function() {}
    };
    var fa = function(a) {
        return "jscomp_symbol_" + a + ga++
    };
    var ha = function() {
        da();
        ea.Symbol.iterator || (ea.Symbol.iterator = ea.Symbol("iterator"));
        ha = function() {}
    };
    z.ia = function(a) {
        ha();
        if (a[ea.Symbol.iterator]) return a[ea.Symbol.iterator]();
        if (! (a instanceof Array || "string" == typeof a || a instanceof String)) throw new TypeError(a + " is not iterable");
        var b = 0;
        return {
            next: function() {
                return b == a.length ? {
                    done: !0
                }: {
                    done: !1,
                    value: a[b++]
                }
            }
        }
    };
    var ja = function(a) {
        if (! (a instanceof Array)) {
            a = z.ia(a);
            for (var b, c = []; ! (b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    z.l = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        for (var d in b) if (ea.Object.defineProperties) {
            var f = ea.Object.getOwnPropertyDescriptor(b, d);
            void 0 !== f && ea.Object.defineProperty(a, d, f)
        } else a[d] = b[d]
    };
    z.ka = function(a) {
        return void 0 !== a
    };
    z.p = function() {};
    z.la = function(a) {
        a.ba = function() {
            return a.Vj ? a.Vj: a.Vj = new a
        }
    };
    z.ma = function(a) {
        var b = typeof a;
        if ("object" == b) if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    };
    z.na = function(a) {
        return "array" == z.ma(a)
    };
    z.oa = function(a) {
        var b = z.ma(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    z.pa = function(a) {
        return "string" == typeof a
    };
    z.qa = function(a) {
        return "number" == typeof a
    };
    z.sa = function(a) {
        return "function" == z.ma(a)
    };
    z.ta = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    z.ua = function(a) {
        return a[z.va] || (a[z.va] = ++wa)
    };
    var ya = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    var Aa = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    z.q = function(a, b, c) {
        z.q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya: Aa;
        return z.q.apply(null, arguments)
    };
    z.Ba = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    };
    z.Ca = function(a, b) {
        for (var c in b) a[c] = b[c]
    };
    var Da = function(a) {
        if (z.t.execScript) z.t.execScript(a, "JavaScript");
        else if (z.t.eval) {
            if (null == Ea) if (z.t.eval("var _evalTest_ \x3d 1;"), "undefined" != typeof z.t._evalTest_) {
                try {
                    delete z.t._evalTest_
                } catch(d) {}
                Ea = !0
            } else Ea = !1;
            if (Ea) z.t.eval(a);
            else {
                var b = z.t.document,
                c = b.createElement("SCRIPT");
                c.type = "text/javascript";
                c.defer = !1;
                c.appendChild(b.createTextNode(a));
                b.body.appendChild(c);
                b.body.removeChild(c)
            }
        } else throw Error("goog.globalEval not available");
    };
    z.u = function(a, b) {
        b && (a = a.replace(/\{\$([^}]+)}/g, 
        function(a, d) {
            return null != b && d in b ? b[d] : a
        }));
        return a
    };
    z.v = function(a, b) {
        var c = a.split("."),
        d = z.t;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());) ! c.length && z.ka(b) ? d[f] = b: d = d[f] ? d[f] : d[f] = {}
    };
    z.x = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.v = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.sY = function(a, c, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[c].apply(a, h)
        }
    };
    var Fa = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    };
    var Ga = function(a) {
        if (!a) return ! 1;
        try {
            return !! a.$goog_Thenable
        } catch(b) {
            return ! 1
        }
    };
    var Ia = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ia);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    z.Ja = function(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    z.Ka = function(a, b) {
        for (var c = a.split("%s"), d = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length;) d += c.shift() + f.shift();
        return d + c.join("%s")
    };
    z.La = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    };
    z.Ma = function(a) {
        return a.replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")
    };
    z.Na = function(a) {
        if (!Oa.test(a)) return a; - 1 != a.indexOf("\x26") && (a = a.replace(Pa, "\x26amp;")); - 1 != a.indexOf("\x3c") && (a = a.replace(Qa, "\x26lt;")); - 1 != a.indexOf("\x3e") && (a = a.replace(Ra, "\x26gt;")); - 1 != a.indexOf('"') && (a = a.replace(Sa, "\x26quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ta, "\x26#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ua, "\x26#0;"));
        return a
    };
    z.Va = function(a, b) {
        return - 1 != a.indexOf(b)
    };
    z.Wa = function(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    var Ya = function(a, b) {
        var c = z.ka(void 0) ? a.toFixed(void 0) : String(a),
        d = c.indexOf("."); - 1 == d && (d = c.length);
        return Za("0", Math.max(0, b - d)) + c
    };
    z.$a = function(a, b) {
        for (var c = 0, d = (0, z.ab)(String(a)).split("."), f = (0, z.ab)(String(b)).split("."), g = Math.max(d.length, f.length), h = 0; 0 == c && h < g; h++) {
            var k = d[h] || "",
            m = f[h] || "",
            n = /(\d*)(\D*)/g,
            r = /(\d*)(\D*)/g;
            do {
                var w = n.exec(k) || ["", "", ""],
                H = r.exec(m) || ["", "", ""];
                if (0 == w[0].length && 0 == H[0].length) break;
                c = bb(0 == w[1].length ? 0: (0, window.parseInt)(w[1], 10), 0 == H[1].length ? 0: (0, window.parseInt)(H[1], 10)) || bb(0 == w[2].length, 0 == H[2].length) || bb(w[2], H[2])
            }
            while (0 == c)
        }
        return c
    };
    var bb = function(a, b) {
        return a < b ? -1: a > b ? 1: 0
    };
    z.db = function(a) {
        return String(a).replace(/\-([a-z])/g, 
        function(a, c) {
            return c.toUpperCase()
        })
    };
    var eb = function(a) {
        var b = z.pa(void 0) ? z.Wa(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+": "") + ")([a-z])", "g"), 
        function(a, b, f) {
            return b + f.toUpperCase()
        })
    };
    var fb = function(a, b, c) {
        this.SR = c;
        this.XN = a;
        this.Gp = b;
        this.Kt = 0;
        this.Is = null
    };
    var gb = function() {
        this.lv = this.Vm = null
    };
    var hb = function() {
        this.next = this.scope = this.fn = null
    };
    z.ib = function(a) {
        return function() {
            return a
        }
    };
    var jb = function(a) {
        return function() {
            throw Error(a);
        }
    };
    z.kb = function(a) {
        return a[a.length - 1]
    };
    z.lb = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    z.y = function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    };
    z.mb = function(a, b, c) {
        return Array.prototype.filter.call(a, b, c)
    };
    z.nb = function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    };
    z.ob = function(a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    };
    z.pb = function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    };
    z.qb = function(a, b) {
        var c = z.rb(a, b, void 0);
        return 0 > c ? null: z.pa(a) ? a.charAt(c) : a[c]
    };
    z.rb = function(a, b, c) {
        for (var d = a.length, f = z.pa(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return g;
        return - 1
    };
    z.A = function(a, b) {
        return 0 <= z.lb(a, b)
    };
    z.sb = function(a, b) {
        z.A(a, b) || a.push(b)
    };
    z.tb = function(a, b) {
        var c = z.lb(a, b),
        d; (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
        return d
    };
    z.ub = function(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    };
    z.vb = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    z.wb = function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (z.oa(d)) {
                var f = a.length || 0,
                g = d.length || 0;
                a.length = f + g;
                for (var h = 0; h < g; h++) a[f + h] = d[h]
            } else a.push(d)
        }
    };
    z.xb = function(a, b, c, d) {
        Array.prototype.splice.apply(a, z.yb(arguments, 1))
    };
    z.yb = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var zb = function(a, b) {
        for (var c = b || a, d = {},
        f = 0, g = 0; g < a.length;) {
            var h = a[g++],
            k;
            k = h;
            k = z.ta(k) ? "o" + z.ua(k) : (typeof k).charAt(0) + k;
            Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, c[f++] = h)
        }
        c.length = f
    };
    z.Ab = function(a) {
        return z.Va(z.Bb, a)
    };
    var Cb = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    z.Db = function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    };
    var Eb = function(a) {
        var b = Boolean,
        c = {},
        d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    };
    z.Fb = function(a, b) {
        for (var c in a) if (b.call(void 0, a[c], c, a)) return ! 0;
        return ! 1
    };
    z.Gb = function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = a[d];
        return b
    };
    z.Hb = function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = d;
        return b
    };
    var Ib = function(a, b) {
        return null !== a && b in a
    };
    z.Jb = function(a) {
        for (var b in a) return ! 1;
        return ! 0
    };
    z.Kb = function(a, b) {
        b in a && delete a[b]
    };
    z.Lb = function(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    };
    z.Mb = function(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < Nb.length; g++) c = Nb[g],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ob = function(a) {
        var b = arguments.length;
        if (1 == b && z.na(arguments[0])) return Ob.apply(null, arguments[0]);
        for (var c = {},
        d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
    var Pb = function() {
        return z.Ab("Opera") || z.Ab("OPR")
    };
    var Qb = function() {
        return z.Ab("Trident") || z.Ab("MSIE")
    };
    var Rb = function() {
        return z.Ab("Firefox")
    };
    var Sb = function() {
        return (z.Ab("Chrome") || z.Ab("CriOS")) && !Pb() && !z.Ab("Edge")
    };
    var Tb = function() {
        function a(a) {
            a = z.qb(a, d);
            return c[a] || ""
        }
        var b = z.Bb;
        if (Qb()) return Ub(b);
        var b = Cb(b),
        c = {};
        z.y(b, 
        function(a) {
            c[a[0]] = a[1]
        });
        var d = z.Ba(Ib, c);
        return Pb() ? a(["Version", "Opera", "OPR"]) : z.Ab("Edge") ? a(["Edge"]) : Sb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    };
    var Ub = function(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        var b = "",
        c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) if (a && a[1]) switch (a[1]) {
        case "4.0":
            b = "8.0";
            break;
        case "5.0":
            b = "9.0";
            break;
        case "6.0":
            b = "10.0";
            break;
        case "7.0":
            b = "11.0"
        } else b = "7.0";
        else b = c[1];
        return b
    };
    var Vb = function(a) {
        z.t.setTimeout(function() {
            throw a;
        },
        0)
    };
    var Wb = function() {
        var a = z.t.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z.Ab("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var b = a.contentWindow,
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*": b.location.protocol + "//" + b.location.host,
            a = (0, z.q)(function(a) {
                if (("*" == 
                d || a.origin == d) && a.data == c) this.port1.onmessage()
            },
            this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !Qb()) {
            var b = new a,
            c = {},
            d = c;
            b.port1.onmessage = function() {
                if (z.ka(c.next)) {
                    c = c.next;
                    var a = c.RD;
                    c.RD = null;
                    a()
                }
            };
            return function(a) {
                d.next = {
                    RD: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? 
        function(a) {
            var b = window.document.createElement("SCRIPT");
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(b)
        }: function(a) {
            z.t.setTimeout(a, 0)
        }
    };
    var Xb = function(a, b) {
        Yb || Zb();
        $b || (Yb(), $b = !0);
        ac.add(a, b)
    };
    var Zb = function() {
        if (z.t.Promise && z.t.Promise.resolve) {
            var a = z.t.Promise.resolve(void 0);
            Yb = function() {
                a.then(bc)
            }
        } else Yb = function() {
            var a = bc; ! z.sa(z.t.setImmediate) || z.t.Window && z.t.Window.prototype && !z.Ab("Edge") && z.t.Window.prototype.setImmediate == z.t.setImmediate ? (cc || (cc = Wb()), cc(a)) : z.t.setImmediate(a)
        }
    };
    var bc = function() {
        for (var a = null; a = ac.remove();) {
            try {
                a.fn.call(a.scope)
            } catch(b) {
                Vb(b)
            }
            dc.put(a)
        }
        $b = !1
    };
    var ec = function(a, b) {
        this.N = fc;
        this.th = void 0;
        this.el = this.Wh = this.Ra = null;
        this.ss = this.Cx = !1;
        if (a != z.p) try {
            var c = this;
            a.call(b, 
            function(a) {
                gc(c, hc, a)
            },
            function(a) {
                gc(c, ic, a)
            })
        } catch(d) {
            gc(this, ic, d)
        }
    };
    var jc = function() {
        this.next = this.context = this.jm = this.ip = this.ij = null;
        this.always = !1
    };
    var kc = function(a, b, c) {
        var d = lc.get();
        d.ip = a;
        d.jm = b;
        d.context = c;
        return d
    };
    var mc = function(a, b) {
        if (a.N == fc) if (a.Ra) {
            var c = a.Ra;
            if (c.Wh) {
                for (var d = 0, f = null, g = null, h = c.Wh; h && (h.always || (d++, h.ij == a && (f = h), !(f && 1 < d))); h = h.next) f || (g = h);
                f && (c.N == fc && 1 == d ? mc(c, b) : (g ? (d = g, d.next == c.el && (c.el = d), d.next = d.next.next) : nc(c), oc(c, f, ic, b)))
            }
            a.Ra = null
        } else gc(a, ic, b)
    };
    var pc = function(a, b) {
        a.Wh || a.N != hc && a.N != ic || qc(a);
        a.el ? a.el.next = b: a.Wh = b;
        a.el = b
    };
    var rc = function(a, b, c, d) {
        var f = kc(null, null, null);
        f.ij = new ec(function(a, h) {
            f.ip = b ? 
            function(c) {
                try {
                    var f = b.call(d, c);
                    a(f)
                } catch(n) {
                    h(n)
                }
            }: a;
            f.jm = c ? 
            function(b) {
                try {
                    var f = c.call(d, b); ! z.ka(f) && b instanceof sc ? h(b) : a(f)
                } catch(n) {
                    h(n)
                }
            }: h
        });
        f.ij.Ra = a;
        pc(a, f);
        return f.ij
    };
    var gc = function(a, b, c) {
        if (a.N == fc) {
            a == c && (b = ic, c = new TypeError("Promise cannot resolve to itself"));
            a.N = 1;
            var d;
            a: {
                var f = c,
                g = a.JW,
                h = a.KW;
                if (f instanceof ec) pc(f, kc(g || z.p, h || null, a)),
                d = !0;
                else if (Ga(f)) f.then(g, h, a),
                d = !0;
                else {
                    if (z.ta(f)) try {
                        var k = f.then;
                        if (z.sa(k)) {
                            tc(f, k, g, h, a);
                            d = !0;
                            break a
                        }
                    } catch(m) {
                        h.call(a, m);
                        d = !0;
                        break a
                    }
                    d = !1
                }
            }
            d || (a.th = c, a.N = b, a.Ra = null, qc(a), b != ic || c instanceof sc || uc(a, c))
        }
    };
    var tc = function(a, b, c, d, f) {
        function g(a) {
            k || (k = !0, d.call(f, a))
        }
        function h(a) {
            k || (k = !0, c.call(f, a))
        }
        var k = !1;
        try {
            b.call(a, h, g)
        } catch(m) {
            g(m)
        }
    };
    var qc = function(a) {
        a.Cx || (a.Cx = !0, Xb(a.as, a))
    };
    var nc = function(a) {
        var b = null;
        a.Wh && (b = a.Wh, a.Wh = b.next, b.next = null);
        a.Wh || (a.el = null);
        return b
    };
    var oc = function(a, b, c, d) {
        if (c == ic && b.jm && !b.always) for (; a && a.ss; a = a.Ra) a.ss = !1;
        if (b.ij) b.ij.Ra = null,
        vc(b, c, d);
        else try {
            b.always ? b.ip.call(b.context) : vc(b, c, d)
        } catch(f) {
            wc.call(null, f)
        }
        lc.put(b)
    };
    var vc = function(a, b, c) {
        b == hc ? a.ip.call(a.context, c) : a.jm && a.jm.call(a.context, c)
    };
    var uc = function(a, b) {
        a.ss = !0;
        Xb(function() {
            a.ss && wc.call(null, b)
        })
    };
    var sc = function(a) {
        Ia.call(this, a)
    };
    z.xc = function() {
        0 != yc && (zc[z.ua(this)] = this);
        this.Fd = this.Fd;
        this.mk = this.mk
    };
    z.Ac = function(a, b) {
        z.Bc(a, z.Ba(z.Cc, b))
    };
    z.Bc = function(a, b, c) {
        a.Fd ? b.call(c) : (a.mk || (a.mk = []), a.mk.push(z.ka(c) ? (0, z.q)(b, c) : b))
    };
    z.Cc = function(a) {
        a && "function" == typeof a.H && a.H()
    };
    z.Dc = function(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var d = arguments[b];
            z.oa(d) ? z.Dc.apply(null, d) : z.Cc(d)
        }
    };
    z.Ec = function() {
        return z.Ab("iPhone") && !z.Ab("iPod") && !z.Ab("iPad")
    };
    var Fc = function() {
        var a = z.Bb;
        if (z.B) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (z.Gc) return /Edge\/([\d\.]+)/.exec(a);
        if (z.C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (z.D) return /WebKit\/(\S+)/.exec(a)
    };
    var Hc = function() {
        var a = z.t.document;
        return a ? a.documentMode: void 0
    };
    z.E = function(a) {
        return Ic[a] || (Ic[a] = 0 <= z.$a(z.Jc, a))
    };
    var Kc = function(a) {
        this.id = a
    };
    z.Lc = function(a, b) {
        this.type = a instanceof Kc ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.uk = !1;
        this.BJ = !0
    };
    var Mc = function(a) {
        a.preventDefault()
    };
    var Nc = function(a) {
        Nc[" "](a);
        return a
    };
    z.Oc = function(a, b) {
        try {
            return Nc(a[b]),
            !0
        } catch(c) {}
        return ! 1
    };
    z.Pc = function(a, b) {
        z.Lc.call(this, a ? a.type: "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.BA = !1;
        this.gc = null;
        a && this.init(a, b)
    };
    z.Qc = function(a, b) {
        return Rc ? a.gc.button == b: "click" == a.type ? 0 == b: !!(a.gc.button & Sc[b])
    };
    z.Tc = function(a) {
        return z.Qc(a, 0) && !(z.D && z.Uc && a.ctrlKey)
    };
    z.Vc = function(a) {
        return ! (!a || !a[Wc])
    };
    var Xc = function(a, b, c, d, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.gl = !!d;
        this.of = f;
        this.key = ++Yc;
        this.sm = this.qr = !1
    };
    var Zc = function(a) {
        a.sm = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.of = null
    };
    z.$c = function(a) {
        this.src = a;
        this.ic = {};
        this.rq = 0
    };
    var ad = function(a, b) {
        var c = b.type;
        if (! (c in a.ic)) return ! 1;
        var d = z.tb(a.ic[c], b);
        d && (Zc(b), 0 == a.ic[c].length && (delete a.ic[c], a.rq--));
        return d
    };
    var bd = function(a, b, c, d) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.sm && g.listener == b && g.gl == !!c && g.of == d) return f
        }
        return - 1
    };
    z.F = function(a, b, c, d, f) {
        if (z.na(b)) {
            for (var g = 0; g < b.length; g++) z.F(a, b[g], c, d, f);
            return null
        }
        c = z.cd(c);
        return z.Vc(a) ? a.g(b, c, d, f) : dd(a, b, c, !1, d, f)
    };
    var dd = function(a, b, c, d, f, g) {
        if (!b) throw Error("Invalid event type");
        var h = !!f,
        k = z.ed(a);
        k || (a[fd] = k = new z.$c(a));
        c = k.add(b, c, d, f, g);
        if (c.proxy) return c;
        d = gd();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) a.addEventListener(b.toString(), d, h);
        else if (a.attachEvent) a.attachEvent(hd(b.toString()), d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        id++;
        return c
    };
    var gd = function() {
        var a = jd,
        b = kd ? 
        function(c) {
            return a.call(b.src, b.listener, c)
        }: function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
        return b
    };
    z.ld = function(a, b, c, d, f) {
        if (z.na(b)) {
            for (var g = 0; g < b.length; g++) z.ld(a, b[g], c, d, f);
            return null
        }
        c = z.cd(c);
        return z.Vc(a) ? a.ya(b, c, d, f) : dd(a, b, c, !0, d, f)
    };
    z.md = function(a, b, c, d, f) {
        if (z.na(b)) for (var g = 0; g < b.length; g++) z.md(a, b[g], c, d, f);
        else c = z.cd(c),
        z.Vc(a) ? a.qa(b, c, d, f) : a && (a = z.ed(a)) && (b = a.bo(b, c, !!d, f)) && z.nd(b)
    };
    z.nd = function(a) {
        if (z.qa(a) || !a || a.sm) return ! 1;
        var b = a.src;
        if (z.Vc(b)) return ad(b.ae, a);
        var c = a.type,
        d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.gl) : b.detachEvent && b.detachEvent(hd(c), d);
        id--; (c = z.ed(b)) ? (ad(c, a), 0 == c.rq && (c.src = null, b[fd] = null)) : Zc(a);
        return ! 0
    };
    var hd = function(a) {
        return a in od ? od[a] : od[a] = "on" + a
    };
    z.pd = function(a, b, c, d) {
        var f = !0;
        if (a = z.ed(a)) if (b = a.ic[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
            var g = b[a];
            g && g.gl == c && !g.sm && (g = qd(g, d), f = f && !1 !== g)
        }
        return f
    };
    var qd = function(a, b) {
        var c = a.listener,
        d = a.of || a.src;
        a.qr && z.nd(a);
        return c.call(d, b)
    };
    var jd = function(a, b) {
        if (a.sm) return ! 0;
        if (!kd) {
            var c;
            if (! (c = b)) a: {
                c = ["window", "event"];
                for (var d = z.t, f; f = c.shift();) if (null != d[f]) d = d[f];
                else {
                    c = null;
                    break a
                }
                c = d
            }
            f = c;
            c = new z.Pc(f, this);
            d = !0;
            if (! (0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var g = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch(m) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (g = c.currentTarget; g; g = g.parentNode) f.push(g);
                for (var g = a.type, h = f.length - 1; ! c.uk && 0 <= h; h--) {
                    c.currentTarget = f[h];
                    var k = z.pd(f[h], g, !0, c),
                    d = d && k
                }
                for (h = 
                0; ! c.uk && h < f.length; h++) c.currentTarget = f[h],
                k = z.pd(f[h], g, !1, c),
                d = d && k
            }
            return d
        }
        return qd(a, new z.Pc(b, this))
    };
    z.ed = function(a) {
        a = a[fd];
        return a instanceof z.$c ? a: null
    };
    z.cd = function(a) {
        if (z.sa(a)) return a;
        a[rd] || (a[rd] = function(b) {
            return a.handleEvent(b)
        });
        return a[rd]
    };
    z.G = function() {
        z.xc.call(this);
        this.ae = new z.$c(this);
        this.sM = this;
        this.uA = null
    };
    z.sd = function(a, b, c, d) {
        b = a.ae.ic[String(b)];
        if (!b) return ! 0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.sm && h.gl == c) {
                var k = h.listener,
                m = h.of || h.src;
                h.qr && ad(a.ae, h);
                f = !1 !== k.call(m, d) && f
            }
        }
        return f && 0 != d.BJ
    };
    z.td = function(a, b) {
        z.G.call(this);
        this.bh = a || 1;
        this.Nm = b || z.ud;
        this.uw = (0, z.q)(this.tW, this);
        this.Az = (0, z.I)()
    };
    z.vd = function(a, b, c) {
        if (z.sa(a)) c && (a = (0, z.q)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, z.q)(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1: z.ud.setTimeout(a, b || 0)
    };
    z.wd = function(a) {
        z.ud.clearTimeout(a)
    };
    z.xd = function(a) {
        z.xc.call(this);
        this.ga = a;
        this.Za = {}
    };
    z.yd = function(a, b, c, d, f, g) {
        z.na(c) || (c && (zd[0] = c.toString()), c = zd);
        for (var h = 0; h < c.length; h++) {
            var k = z.F(b, c[h], d || a.handleEvent, f || !1, g || a.ga || a);
            if (!k) break;
            a.Za[k.key] = k
        }
        return a
    };
    var Ad = function(a, b, c, d, f, g) {
        if (z.na(c)) for (var h = 0; h < c.length; h++) Ad(a, b, c[h], d, f, g);
        else {
            b = z.ld(b, c, d || a.handleEvent, f, g || a.ga || a);
            if (!b) return a;
            a.Za[b.key] = b
        }
        return a
    };
    z.Bd = function() {
        this.HA = "";
        this.TL = z.Cd
    };
    z.Dd = function() {
        this.tk = "";
        this.SL = Fd;
        this.LE = null
    };
    z.Gd = function(a) {
        return a instanceof z.Dd && a.constructor === z.Dd && a.SL === Fd ? a.tk: "type_error:SafeHtml"
    };
    z.Hd = function(a, b) {
        return (new z.Dd).zo(a, b)
    };
    z.Id = function(a) {
        if (a.Wc && "function" == typeof a.Wc) return a.Wc();
        if (z.pa(a)) return a.split("");
        if (z.oa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return z.Gb(a)
    };
    z.Jd = function(a) {
        if (a.ld && "function" == typeof a.ld) return a.ld();
        if (!a.Wc || "function" != typeof a.Wc) {
            if (z.oa(a) || z.pa(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return z.Hb(a)
        }
    };
    var Kd = function(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (z.oa(a) || z.pa(a)) z.y(a, b, c);
        else for (var d = z.Jd(a), f = z.Id(a), g = f.length, h = 0; h < g; h++) b.call(c, f[h], d && d[h], a)
    };
    z.Ld = function() {};
    z.Nd = function(a) {
        if (a instanceof z.Ld) return a;
        if ("function" == typeof a.gd) return a.gd(!1);
        if (z.oa(a)) {
            var b = 0,
            c = new z.Ld;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw z.Od;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    };
    z.Pd = function(a, b, c) {
        if (z.oa(a)) try {
            z.y(a, b, c)
        } catch(d) {
            if (d !== z.Od) throw d;
        } else {
            a = z.Nd(a);
            try {
                for (;;) b.call(c, a.next(), void 0, a)
            } catch(d) {
                if (d !== z.Od) throw d;
            }
        }
    };
    z.Qd = function(a) {
        if (z.oa(a)) return z.vb(a);
        a = z.Nd(a);
        var b = [];
        z.Pd(a, 
        function(a) {
            b.push(a)
        });
        return b
    };
    z.Rd = function(a, b) {
        this.Ib = {};
        this.Za = [];
        this.yq = this.Ka = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    var Sd = function(a, b) {
        return a === b
    };
    z.Td = function(a) {
        if (a.Ka != a.Za.length) {
            for (var b = 0, c = 0; b < a.Za.length;) {
                var d = a.Za[b];
                z.Ud(a.Ib, d) && (a.Za[c++] = d);
                b++
            }
            a.Za.length = c
        }
        if (a.Ka != a.Za.length) {
            for (var f = {},
            c = b = 0; b < a.Za.length;) d = a.Za[b],
            z.Ud(f, d) || (a.Za[c++] = d, f[d] = 1),
            b++;
            a.Za.length = c
        }
    };
    z.Ud = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Vd = function(a) {
        z.xc.call(this);
        this.Jk = a;
        this.tu = []
    };
    var Wd = function() {};
    var Xd = function(a) {
        var b; (b = a.MD) || (b = {},
        Yd(a) && (b[0] = !0, b[1] = !0), b = a.MD = b);
        return b
    };
    var Zd = function() {};
    var $d = function(a) {
        return (a = Yd(a)) ? new window.ActiveXObject(a) : new window.XMLHttpRequest
    };
    var Yd = function(a) {
        if (!a.CG && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new window.ActiveXObject(d),
                    a.CG = d
                } catch(f) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.CG
    };
    var ae = function(a, b) {
        if (a) for (var c = a.split("\x26"), d = 0; d < c.length; d++) {
            var f = c[d].indexOf("\x3d"),
            g = null,
            h = null;
            0 <= f ? (g = c[d].substring(0, f), h = c[d].substring(f + 1)) : g = c[d];
            b(g, h ? (0, window.decodeURIComponent)(h.replace(/\+/g, " ")) : "")
        }
    };
    z.be = function(a, b) {
        var c = a.search(ce),
        d;
        a: {
            d = 0;
            for (var f = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var g = a.charCodeAt(d - 1);
                if (38 == g || 63 == g) if (g = a.charCodeAt(d + f), !g || 61 == g || 38 == g || 35 == g) break a;
                d += f + 1
            }
            d = -1
        }
        if (0 > d) return null;
        f = a.indexOf("\x26", d);
        if (0 > f || f > c) f = c;
        d += b.length + 1;
        return (0, window.decodeURIComponent)(a.substr(d, f - d).replace(/\+/g, " "))
    };
    z.de = function(a) {
        z.G.call(this);
        this.headers = new z.Rd;
        this.nv = a || null;
        this.Nh = !1;
        this.mv = this.ea = null;
        this.gt = this.zz = "";
        this.Qj = this.Oy = this.Ps = this.xx = !1;
        this.Wu = 0;
        this.Vu = null;
        this.wJ = ee;
        this.kC = this.DU = this.hX = !1
    };
    var fe = function(a) {
        return z.C && z.E(9) && z.qa(a.timeout) && z.ka(a.ontimeout)
    };
    var ge = function(a) {
        return "content-type" == a.toLowerCase()
    };
    var he = function(a) {
        a.xx || (a.xx = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
    var ie = function(a) {
        if (a.Nh && "undefined" != typeof z.je && (!a.mv[1] || 4 != ke(a) || 2 != le(a))) if (a.Ps && 4 == ke(a)) z.vd(a.BI, 0, a);
        else if (a.dispatchEvent("readystatechange"), a.Je()) {
            a.Nh = !1;
            try {
                if (ne(a)) a.dispatchEvent("complete"),
                a.dispatchEvent("success");
                else {
                    var b;
                    try {
                        b = 2 < ke(a) ? a.ea.statusText: ""
                    } catch(c) {
                        b = ""
                    }
                    a.gt = b + " [" + le(a) + "]";
                    he(a)
                }
            } finally {
                oe(a)
            }
        }
    };
    var pe = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    };
    var oe = function(a, b) {
        if (a.ea) {
            qe(a);
            var c = a.ea,
            d = a.mv[0] ? z.p: null;
            a.ea = null;
            a.mv = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch(f) {}
        }
    };
    var qe = function(a) {
        a.ea && a.kC && (a.ea.ontimeout = null);
        z.qa(a.Vu) && (z.wd(a.Vu), a.Vu = null)
    };
    var ne = function(a) {
        var b = le(a),
        c;
        a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            c = !0;
            break a;
        default:
            c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.zz).match(z.re)[1] || null,
            !a && z.t.self && z.t.self.location && (a = z.t.self.location.protocol, a = a.substr(0, a.length - 1)),
            b = !se.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    };
    var ke = function(a) {
        return a.ea ? a.ea.readyState: 0
    };
    var le = function(a) {
        try {
            return 2 < ke(a) ? a.ea.status: -1
        } catch(b) {
            return - 1
        }
    };
    z.te = function(a) {
        try {
            return a.ea ? a.ea.responseText: ""
        } catch(b) {
            return ""
        }
    };
    var ue = function(a) {
        z.G.call(this);
        this.Rl = new Vd(a);
        this.T = new z.xd(this)
    };
    var ve = function(a, b) {
        this.Cu = [];
        this.mI = a;
        this.GE = b || null;
        this.fo = this.hi = !1;
        this.th = void 0;
        this.tB = this.lN = this.qw = !1;
        this.ev = 0;
        this.Ra = null;
        this.vw = 0
    };
    var we = function(a, b, c) {
        a.hi = !0;
        a.th = c;
        a.fo = !b;
        xe(a)
    };
    var ye = function(a, b) {
        a.Xh();
        we(a, !1, b)
    };
    var ze = function(a, b, c, d) {
        a.Cu.push([b, c, d]);
        a.hi && xe(a)
    };
    var Ae = function(a) {
        return z.pb(a.Cu, 
        function(a) {
            return z.sa(a[1])
        })
    };
    var xe = function(a) {
        if (a.ev && a.hi && Ae(a)) {
            var b = a.ev,
            c = Be[b];
            c && (z.t.clearTimeout(c.qb), delete Be[b]);
            a.ev = 0
        }
        a.Ra && (a.Ra.vw--, delete a.Ra);
        for (var b = a.th, d = c = !1; a.Cu.length && !a.qw;) {
            var f = a.Cu.shift(),
            g = f[0],
            h = f[1],
            f = f[2];
            if (g = a.fo ? h: g) try {
                var k = g.call(f || a.GE, b);
                z.ka(k) && (a.fo = a.fo && (k == b || k instanceof Error), a.th = b = k);
                if (Ga(b) || "function" === typeof z.t.Promise && b instanceof z.t.Promise) d = !0,
                a.qw = !0
            } catch(m) {
                b = m,
                a.fo = !0,
                Ae(a) || (c = !0)
            }
        }
        a.th = b;
        d && (k = (0, z.q)(a.nE, a, !0), d = (0, z.q)(a.nE, a, !1), b instanceof
        ve ? (ze(b, k, d), b.lN = !0) : b.then(k, d));
        c && (b = new Ce(b), Be[b.qb] = b, a.ev = b.qb)
    };
    var De = function(a) {
        Ia.call(this);
        this.deferred = a
    };
    var Ee = function(a) {
        Ia.call(this);
        this.deferred = a
    };
    var Ce = function(a) {
        this.qb = z.t.setTimeout((0, z.q)(this.rW, this), 0);
        this.Xr = a
    };
    z.Fe = function(a, b) {
        a.innerHTML = z.Gd(b)
    };
    z.Ge = function(a, b) {
        this.x = z.ka(a) ? a: 0;
        this.y = z.ka(b) ? b: 0
    };
    z.He = function(a, b) {
        this.width = a;
        this.height = b
    };
    z.J = function(a) {
        return a ? new z.Ie(z.Je(a)) : Ke || (Ke = new z.Ie)
    };
    z.L = function(a) {
        return z.pa(a) ? window.document.getElementById(a) : a
    };
    z.Le = function(a, b, c) {
        return z.Me(window.document, a, b, c)
    };
    z.N = function(a, b) {
        var c = b || window.document,
        d = null;
        return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : z.Me(window.document, "*", a, b)[0]) || null
    };
    z.Me = function(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c: ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var f = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[f++] = h);
                d.length = f;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = f = 0; h = a[g]; g++) b = h.className,
            "function" == typeof b.split && z.A(b.split(/\s+/), c) && (d[f++] = h);
            d.length = f;
            return d
        }
        return a
    };
    var Ne = function(a, b) {
        z.Db(b, 
        function(b, d) {
            "style" == d ? a.style.cssText = b: "class" == d ? a.className = b: "for" == d ? a.htmlFor = b: Oe.hasOwnProperty(d) ? a.setAttribute(Oe[d], b) : z.Ja(d, "aria-") || z.Ja(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    };
    z.Pe = function(a) {
        a = (a || window).document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement: a.body;
        return new z.He(a.clientWidth, a.clientHeight)
    };
    z.Qe = function(a) {
        var b = z.Re(a);
        a = a.parentWindow || a.defaultView;
        return z.C && z.E("10") && a.pageYOffset != b.scrollTop ? new z.Ge(b.scrollLeft, b.scrollTop) : new z.Ge(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    z.Re = function(a) {
        return a.scrollingElement ? a.scrollingElement: z.D || "CSS1Compat" != a.compatMode ? a.body || a.documentElement: a.documentElement
    };
    z.Se = function(a) {
        return a ? a.parentWindow || a.defaultView: window
    };
    z.O = function(a, b, c) {
        return Te(window.document, arguments)
    };
    var Te = function(a, b) {
        var c = b[0],
        d = b[1];
        if (!Ue && d && (d.name || d.type)) {
            c = ["\x3c", c];
            d.name && c.push(' name\x3d"', z.Na(d.name), '"');
            if (d.type) {
                c.push(' type\x3d"', z.Na(d.type), '"');
                var f = {};
                z.Mb(f, d);
                delete f.type;
                d = f
            }
            c.push("\x3e");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (z.pa(d) ? c.className = d: z.na(d) ? c.className = d.join(" ") : Ne(c, d));
        2 < b.length && Ve(a, c, b, 2);
        return c
    };
    var Ve = function(a, b, c, d) {
        function f(c) {
            c && b.appendChild(z.pa(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var g = c[d]; ! z.oa(g) || z.ta(g) && 0 < g.nodeType ? f(g) : z.y(We(g) ? z.vb(g) : g, f)
        }
    };
    z.Xe = function(a) {
        return z.Ye(window.document, a)
    };
    z.Ye = function(a, b) {
        var c = a.createElement("DIV");
        z.C ? (c.innerHTML = "\x3cbr\x3e" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
            c = d
        }
        return c
    };
    z.Ze = function(a) {
        if (1 != a.nodeType) return ! 1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return ! 1
        }
        return ! 0
    };
    z.$e = function(a, b) {
        Ve(z.Je(a), a, arguments, 1)
    };
    z.af = function(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    z.bf = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    };
    z.cf = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    z.df = function(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    };
    z.P = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    z.ef = function(a) {
        var b,
        c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (; b = a.firstChild;) c.insertBefore(b, a);
            return z.P(a)
        }
    };
    z.ff = function(a) {
        return gf && void 0 != a.children ? a.children: z.mb(a.childNodes, 
        function(a) {
            return 1 == a.nodeType
        })
    };
    z.hf = function(a) {
        return z.ka(a.firstElementChild) ? a.firstElementChild: z.jf(a.firstChild, !0)
    };
    z.jf = function(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling: a.previousSibling;
        return a
    };
    z.kf = function(a) {
        return z.ta(a) && 1 == a.nodeType
    };
    var lf = function(a) {
        return z.ta(a) && a.window == a
    };
    z.mf = function(a, b) {
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    z.Je = function(a) {
        return 9 == a.nodeType ? a: a.ownerDocument || a.document
    };
    z.nf = function(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else z.af(a),
        a.appendChild(z.Je(a).createTextNode(String(b)))
    };
    z.of = function(a, b) {
        b ? a.tabIndex = 0: (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    };
    z.pf = function(a) {
        if (qf && "innerText" in a) a = z.La(a.innerText);
        else {
            var b = [];
            z.rf(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        qf || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    };
    z.rf = function(a, b, c) {
        if (! (a.nodeName in sf)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in tf) b.push(tf[a.nodeName]);
        else for (a = a.firstChild; a;) z.rf(a, b, c),
        a = a.nextSibling
    };
    var We = function(a) {
        if (a && "number" == typeof a.length) {
            if (z.ta(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (z.sa(a)) return "function" == typeof a.item
        }
        return ! 1
    };
    z.uf = function(a, b, c, d) {
        if (!b && !c) return null;
        var f = b ? b.toUpperCase() : null;
        return z.vf(a, 
        function(a) {
            return (!f || a.nodeName == f) && (!c || z.pa(a.className) && z.A(a.className.split(/\s+/), c))
        },
        !0, d)
    };
    z.vf = function(a, b, c, d) {
        c || (a = a.parentNode);
        c = null == d;
        for (var f = 0; a && (c || f <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            f++
        }
        return null
    };
    z.Ie = function(a) {
        this.La = a || z.t.document || window.document
    };
    z.wf = function(a) {
        return z.Qe(a.La)
    };
    var xf = function(a) {
        if (a.length) {
            var b = yf.length;
            z.wb(yf, a);
            if (!b) {
                a = yf;
                var c = function() {
                    var b = a.shift(),
                    b = zf(b);
                    a.length && ze(b, c, c, void 0);
                    return b
                };
                c()
            }
        } else(new ve).Vh(null)
    };
    var zf = function(a) {
        var b = {},
        c = b.document || window.document,
        d = window.document.createElement("SCRIPT"),
        f = {
            IJ: d,
            iq: void 0
        },
        g = new ve(Af, f),
        h = null,
        k = null != b.timeout ? b.timeout: 5E3;
        0 < k && (h = window.setTimeout(function() {
            Bf(d, !0);
            ye(g, new Cf(Df, "Timeout reached for loading script " + a))
        },
        k), f.iq = h);
        d.onload = d.onreadystatechange = function() {
            d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (Bf(d, b.uY || !1, h), g.Vh(null))
        };
        d.onerror = function() {
            Bf(d, !0, h);
            ye(g, new Cf(Ef, "Error while loading script " + 
            a))
        };
        f = b.attributes || {};
        z.Mb(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        Ne(d, f);
        Ff(c).appendChild(d);
        return g
    };
    var Ff = function(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    };
    var Af = function() {
        if (this && this.IJ) {
            var a = this.IJ;
            a && "SCRIPT" == a.tagName && Bf(a, !0, this.iq)
        }
    };
    var Bf = function(a, b, c) {
        null != c && z.t.clearTimeout(c);
        a.onload = z.p;
        a.onerror = z.p;
        a.onreadystatechange = z.p;
        b && window.setTimeout(function() {
            z.P(a)
        },
        0)
    };
    var Cf = function(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Ia.call(this, c);
        this.code = a
    };
    var Gf = function() {
        z.G.call(this);
        this.T = new z.xd(this);
        this.mh = {}
    };
    var Hf = function(a, b) {
        a.dispatchEvent(new If);
        var c = a.mh[b],
        d = c.uJ,
        f = c.UA,
        g = null;
        try {
            if (a.cK || a.Mr && (z.Jf || Rb() && 0 <= z.$a(Tb(), "36"))) for (var h = 0; h < d.length; h++) Da(f[h] + " //@ sourceURL\x3d" + d[h]);
            else Da(f.join("\n"))
        } catch(k) {
            g = k
        }
        a.dispatchEvent(new Kf);
        g ? (c = c.yx, a.dispatchEvent(new Lf(0, g)), c && c(null)) : c.HB && c.HB();
        delete a.mh[b]
    };
    var Kf = function() {
        z.Lc.call(this, Mf)
    };
    var If = function() {
        z.Lc.call(this, Nf)
    };
    var Lf = function(a, b) {
        z.Lc.call(this, Of);
        this.error = b || null
    };
    var Pf = function() {
        this.UA = this.uJ = null;
        this.DH = !1;
        this.yx = this.HB = null
    };
    var Qf = function(a, b) {
        z.xc.call(this);
        this.SE = this.rE = null;
        this.JH = b;
        this.Aj = [];
        if (a > this.JH) throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
        for (var c = 0; c < a; c++) this.Aj.push(this.Fn())
    };
    var Rf = function(a, b) {
        a.Aj.length < a.JH ? a.Aj.push(b) : a.kx(b)
    };
    z.Sf = function() {
        this.Uf = [];
        this.qA = new z.Rd;
        this.av = this.yK = this.zK = this.gK = 0;
        this.Ck = new z.Rd;
        this.Kw = this.xK = 0;
        this.Wz = 1;
        this.Yr = new Qf(0, 4E3);
        this.Yr.Fn = function() {
            return new Tf
        };
        this.AB = new Qf(0, 50);
        this.AB.Fn = function() {
            return new Uf
        };
        var a = this;
        this.Fy = new Qf(0, 2E3);
        this.Fy.Fn = function() {
            return String(a.Wz++)
        };
        this.Fy.kx = function() {}
    };
    var Uf = function() {
        this.lC = this.time = this.count = 0
    };
    var Tf = function() {};
    var Vf = function(a, b, c, d) {
        var f = []; - 1 == c ? f.push("    ") : f.push(Wf(a.Zr - c));
        f.push(" ", Xf(a.Zr - b));
        0 == a.$r ? f.push(" Start        ") : 1 == a.$r ? (f.push(" Done "), f.push(Wf(a.aZ - a.startTime), " ms ")) : f.push(" Comment      ");
        f.push(d, a);
        0 < a.vK && f.push("[VarAlloc ", a.vK, "] ");
        return f.join("")
    };
    var Wf = function(a) {
        a = Math.round(a);
        var b = "";
        1E3 > a && (b = " ");
        100 > a && (b = "  ");
        10 > a && (b = "   ");
        return b + a
    };
    var Xf = function(a) {
        a = Math.round(a);
        return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
    };
    var Yf = function() {
        z.xc.call(this)
    };
    var Zf = function(a, b) {
        this.js = a;
        this.ga = b
    };
    var $f = function(a, b) {
        z.xc.call(this);
        this.IE = a;
        this.qb = b;
        this.lA = [];
        this.dA = [];
        this.YE = []
    };
    var ag = function(a, b) {
        a.nu(a.dA, b, void 0)
    };
    var bg = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) try {
            a[d].lF(b)
        } catch(f) {
            Vb(f),
            c.push(f)
        }
        a.length = 0;
        return c.length ? c: null
    };
    var cg = function() {
        z.xc.call(this);
        this.Zc = {};
        this.xi = [];
        this.sh = [];
        this.Ep = [];
        this.ud = [];
        this.Sm = [];
        this.rr = {};
        this.CE = this.nr = new $f([], "");
        this.pH = null;
        this.Bo = new ve;
        this.ON = this.ED = !1;
        this.Gz = null;
        this.Ar = 0;
        this.WK = this.nH = !1;
        this.XH = null
    };
    var dg = function(a) {
        var b = a.uc();
        b != a.nH && (a.as(b ? "active": "idle"), a.nH = b);
        b = 0 < a.Sm.length;
        b != a.WK && (a.as(b ? "userActive": "userIdle"), a.WK = b)
    };
    var eg = function(a, b, c, d, f) {
        c.yp(f.Vh, f);
        ag(c, 
        function(a) {
            ye(f, Error(a))
        });
        fg(a, b) ? d && (gg(a, b), dg(a)) : d && gg(a, b)
    };
    var hg = function(a, b) {
        if (a.ON) {
            var c = (0, z.q)(a.ut, a, b);
            ze(a.Bo, c, null, void 0)
        } else 0 == a.xi.length ? a.ut(b) : (a.ud.push(b), dg(a))
    };
    var ig = function(a, b) {
        for (var c = 0; c < b.length; c++) if (a.Zc[b[c]].vc()) throw Error("Module already loaded: " + b[c]);
        for (var d = [], c = 0; c < b.length; c++) d = d.concat(jg(a, b[c]));
        zb(d);
        return ! a.ED && 1 < d.length ? (c = d.shift(), a.ud = z.nb(d, 
        function(a) {
            return [a]
        }).concat(a.ud), [c]) : d
    };
    var jg = function(a, b) {
        var c = [];
        z.A(a.Ep, b) || c.push(b);
        for (var d = z.vb(a.Zc[b].IE); d.length;) {
            var f = d.pop();
            a.Zc[f].vc() || z.A(a.Ep, f) || (c.unshift(f), Array.prototype.unshift.apply(d, a.Zc[f].IE))
        }
        zb(c);
        return c
    };
    z.kg = function(a) {
        var b = cg.ba();
        b.Fd || (b.Zc[a].mp((0, z.q)(b.OF, b)) && lg(b, mg), z.tb(b.Sm, a), z.tb(b.xi, a), 0 == b.xi.length && ng(b), b.pH && a == b.pH && (b.Bo.hi || b.Bo.Vh()), dg(b))
    };
    var fg = function(a, b) {
        if (z.A(a.xi, b)) return ! 0;
        for (var c = 0; c < a.ud.length; c++) if (z.A(a.ud[c], b)) return ! 0;
        return ! 1
    };
    var gg = function(a, b) {
        z.A(a.Sm, b) || a.Sm.push(b)
    };
    var og = function(a, b) {
        1 < a.sh.length ? a.ud = z.nb(a.sh, 
        function(a) {
            return [a]
        }).concat(a.ud) : lg(a, b)
    };
    var lg = function(a, b) {
        var c = a.sh;
        a.xi.length = 0;
        for (var d = [], f = 0; f < a.ud.length; f++) {
            var g = z.mb(a.ud[f], 
            function(a) {
                var b = jg(this, a);
                return z.pb(c, 
                function(a) {
                    return z.A(b, a)
                })
            },
            a);
            z.wb(d, g)
        }
        for (f = 0; f < c.length; f++) z.sb(d, c[f]);
        for (f = 0; f < d.length; f++) {
            for (g = 0; g < a.ud.length; g++) z.tb(a.ud[g], d[f]);
            z.tb(a.Sm, d[f])
        }
        var h = a.rr.error;
        if (h) for (f = 0; f < h.length; f++) for (var k = h[f], g = 0; g < d.length; g++) k("error", d[g], b);
        for (f = 0; f < c.length; f++) a.Zc[c[f]] && a.Zc[c[f]].cA(b);
        a.sh.length = 0;
        dg(a)
    };
    var ng = function(a) {
        for (; a.ud.length;) {
            var b = z.mb(a.ud.shift(), 
            function(a) {
                return ! this.Zc[a].vc()
            },
            a);
            if (0 < b.length) {
                a.ut(b);
                return
            }
        }
        dg(a)
    };
    z.pg = function(a, b) {
        var c = cg.ba(),
        d = c.Zc[a];
        d.vc() ? (0, window.setTimeout)(b) : (0, window.$)('script[src*\x3d"' + d.Jk.replace(/^\/static\//, "") + '"]').length ? d.yp(b) : (d = c.Zc[a], d.vc() ? (c = new Zf(b, void 0), window.setTimeout((0, z.q)(c.lF, c), 0)) : fg(c, a) ? d.yp(b, void 0) : (d.yp(b, void 0), hg(c, [a])))
    };
    z.qg = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    z.rg = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    z.sg = function(a, b, c) {
        if (z.pa(b))(b = z.tg(a, b)) && (a.style[b] = c);
        else for (var d in b) {
            c = a;
            var f = b[d],
            g = z.tg(c, d);
            g && (c.style[g] = f)
        }
    };
    z.tg = function(a, b) {
        var c = ug[b];
        if (!c) {
            var d = z.db(b),
            c = d;
            void 0 === a.style[d] && (d = (z.D ? "Webkit": z.B ? "Moz": z.C ? "ms": z.vg ? "O": null) + eb(d), void 0 !== a.style[d] && (c = d));
            ug[b] = c
        }
        return c
    };
    z.wg = function(a, b) {
        var c = z.Je(a);
        return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "": ""
    };
    z.xg = function(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    };
    z.yg = function(a, b) {
        return z.wg(a, b) || z.xg(a, b) || a.style && a.style[b]
    };
    z.zg = function(a) {
        return z.yg(a, "position")
    };
    z.Ag = function(a, b, c) {
        var d;
        b instanceof z.Ge ? (d = b.x, b = b.y) : (d = b, b = c);
        a.style.left = z.Bg(d, !1);
        a.style.top = z.Bg(b, !1)
    };
    z.Cg = function(a) {
        var b;
        try {
            b = a.getBoundingClientRect()
        } catch(c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        z.C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    };
    z.Dg = function(a, b) {
        var c = z.Eg(a),
        d = z.Eg(b);
        return new z.Ge(c.x - d.x, c.y - d.y)
    };
    z.Fg = function(a) {
        a = z.Cg(a);
        return new z.Ge(a.left, a.top)
    };
    z.Eg = function(a) {
        if (1 == a.nodeType) return z.Fg(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new z.Ge(a.clientX, a.clientY)
    };
    z.Gg = function(a, b, c) {
        if (b instanceof z.He) c = b.height,
        b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = z.Bg(b, !0);
        a.style.height = z.Bg(c, !0)
    };
    z.Bg = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    var Hg = function(a) {
        return z.Ig(a)
    };
    z.Ig = function(a) {
        var b = Jg;
        if ("none" != z.yg(a, "display")) return b(a);
        var c = a.style,
        d = c.display,
        f = c.visibility,
        g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = f;
        return a
    };
    var Jg = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight,
        d = z.D && !b && !c;
        return z.ka(b) && !d || !a.getBoundingClientRect ? new z.He(b, c) : (a = z.Cg(a), new z.He(a.right - a.left, a.bottom - a.top))
    };
    z.Kg = function(a, b) {
        var c = a.style;
        "opacity" in c ? c.opacity = b: "MozOpacity" in c ? c.MozOpacity = b: "filter" in c && (c.filter = "" === b ? "": "alpha(opacity\x3d" + 100 * b + ")")
    };
    z.Q = function(a, b) {
        a.style.display = b ? "": "none"
    };
    z.Lg = function(a) {
        return "none" != a.style.display
    };
    z.Mg = function(a, b) {
        var c = z.J(b),
        d = null,
        f = c.ua();
        if (z.C && f.createStyleSheet) c = d = f.createStyleSheet(),
        z.C && z.ka(c.cssText) ? c.cssText = a: c.innerHTML = a;
        else {
            f = z.Me(c.La, "HEAD", void 0, void 0)[0];
            f || (d = z.Me(c.La, "BODY", void 0, void 0)[0], f = c.B("HEAD"), d.parentNode.insertBefore(f, d));
            var g = d = c.B("STYLE");
            z.C && z.ka(g.cssText) ? g.cssText = a: g.innerHTML = a;
            c.appendChild(f, d)
        }
    };
    z.Ng = function(a) {
        return "rtl" == z.yg(a, "direction")
    };
    z.Og = function(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return (0, window.parseInt)(b, 10);
        var f = a.style[c],
        g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = f;
        a.runtimeStyle[c] = g;
        return b
    };
    var Pg = function(a, b) {
        var c = z.xg(a, b);
        return c ? z.Og(a, c, "left", "pixelLeft") : 0
    };
    z.Qg = function(a) {
        if (z.C) {
            var b = Pg(a, "paddingLeft"),
            c = Pg(a, "paddingRight"),
            d = Pg(a, "paddingTop");
            a = Pg(a, "paddingBottom");
            return new z.qg(d, c, a, b)
        }
        b = z.wg(a, "paddingLeft");
        c = z.wg(a, "paddingRight");
        d = z.wg(a, "paddingTop");
        a = z.wg(a, "paddingBottom");
        return new z.qg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    var Rg = function(a, b) {
        if ("none" == z.xg(a, b + "Style")) return 0;
        var c = z.xg(a, b + "Width");
        return c in Sg ? Sg[c] : z.Og(a, c, "left", "pixelLeft")
    };
    z.Tg = function(a) {
        if (z.C && !(9 <= z.Ug)) {
            var b = Rg(a, "borderLeft"),
            c = Rg(a, "borderRight"),
            d = Rg(a, "borderTop");
            a = Rg(a, "borderBottom");
            return new z.qg(d, c, a, b)
        }
        b = z.wg(a, "borderLeftWidth");
        c = z.wg(a, "borderRightWidth");
        d = z.wg(a, "borderTopWidth");
        a = z.wg(a, "borderBottomWidth");
        return new z.qg((0, window.parseFloat)(d), (0, window.parseFloat)(c), (0, window.parseFloat)(a), (0, window.parseFloat)(b))
    };
    z.Vg = function() {
        var a = window.document.createElement("DIV");
        a.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px";
        var b = window.document.createElement("DIV");
        z.Gg(b, "200px", "200px");
        a.appendChild(b);
        window.document.body.appendChild(a);
        b = a.offsetWidth - a.clientWidth;
        z.P(a);
        return b
    };
    z.Wg = function() {};
    z.Xg = function(a) {
        return ":" + (a.Wz++).toString(36)
    };
    z.R = function(a) {
        z.G.call(this);
        this.da = a || z.J();
        this.rg = Yg;
        this.qb = null;
        this.wa = !1;
        this.h = null;
        this.pi = void 0;
        this.Xe = this.Rc = this.Ra = this.Rz = null;
        this.cL = !1
    };
    z.Zg = function(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        if (b && a.Ra && a.qb && z.$g(a.Ra, a.qb) && a.Ra != b) throw Error("Unable to set parent component");
        a.Ra = b;
        z.R.v.Db.call(a, b)
    };
    z.ah = function(a) {
        return a.Rc ? a.Rc.length: 0
    };
    z.$g = function(a, b) {
        var c;
        a.Xe && b ? (c = a.Xe, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
        return c
    };
    z.bh = function(a, b) {
        return a.Rc ? a.Rc[b] || null: null
    };
    z.ch = function(a, b, c) {
        a.Rc && z.y(a.Rc, b, c)
    };
    z.dh = function(a) {
        function b() {
            f.onload = f.onerror = f.onreadystatechange = null;
            window.document.body.removeChild(f)
        }
        function c() {
            b();
            d.resolve()
        }
        var d = window.$.Deferred(),
        f = window.document.createElement("script");
        f.onload = c;
        f.onerror = function() {
            b();
            d.reject()
        };
        f.onreadystatechange = function() {
            "loaded" !== f.readyState && "complete" !== f.readyState || c()
        };
        f.src = a;
        window.document.body.appendChild(f);
        return d.promise()
    };
    z.eh = function() {
        z.fh && z.dh(window.location.protocol + "//res.wx.qq.com/open/js/jweixin-1.0.0.js").then(function() {
            window.wx && (gh(), hh())
        })
    };
    var gh = function() {
        window.$.get("/wechat/jssdkconfig", {
            url: window.location.href.split("#")[0]
        }).then(function(a) {
            window.wx.config(Object.assign({},
            a, {
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
            }))
        })
    };
    var hh = function() {
        window.wx.ready(function() {
            ih().then(function(a) {
                var b = Object.assign({},
                jh, a.timeline);
                window.wx.onMenuShareTimeline(b);
                a = Object.assign({},
                jh, a.appMessage);
                window.wx.onMenuShareAppMessage(a)
            })
        })
    };
    var ih = function() {
        var a = "",
        b = "";
        kh ? (a = "answer", b = kh.urlToken) : z.S ? (a = "question", b = z.S.bb) : z.lh ? (a = "collection", b = z.lh.bb) : z.mh ? (a = "people", b = z.mh.bb) : z.nh ? (a = "roundtable", b = z.nh.slug) : z.oh && window.location.pathname.match(/\/topic\/\d+$/) ? (a = "topic", b = z.oh[0][1]) : ph && (a = "lives", b = ph.urlToken);
        return a && b ? window.$.get("/" + a + "/" + b + "/wechat_share_info") : window.Promise.resolve(jh)
    };
    z.qh = function(a, b) {
        this.Pg = this.oe = this.Gi = "";
        this.om = null;
        this.zj = this.Ne = "";
        this.Fe = this.DR = !1;
        var c;
        if (a instanceof z.qh) this.Fe = z.ka(b) ? b: a.Fe,
        rh(this, a.Gi),
        c = a.oe,
        z.sh(this),
        this.oe = c,
        c = a.Pg,
        z.sh(this),
        this.Pg = c,
        th(this, a.om),
        c = a.Ne,
        z.sh(this),
        this.Ne = c,
        uh(this, a.Ce().clone()),
        c = a.zj,
        z.sh(this),
        this.zj = c;
        else if (a && (c = String(a).match(z.re))) {
            this.Fe = !!b;
            rh(this, c[1] || "", !0);
            var d = c[2] || "";
            z.sh(this);
            this.oe = vh(d);
            d = c[3] || "";
            z.sh(this);
            this.Pg = vh(d, !0);
            th(this, c[4]);
            d = c[5] || "";
            z.sh(this);
            this.Ne = 
            vh(d, !0);
            uh(this, c[6] || "", !0);
            c = c[7] || "";
            z.sh(this);
            this.zj = vh(c)
        } else this.Fe = !!b,
        this.le = new z.wh(null, 0, this.Fe)
    };
    var rh = function(a, b, c) {
        z.sh(a);
        a.Gi = c ? vh(b, !0) : b;
        a.Gi && (a.Gi = a.Gi.replace(/:$/, ""))
    };
    var th = function(a, b) {
        z.sh(a);
        if (b) {
            b = Number(b);
            if ((0, window.isNaN)(b) || 0 > b) throw Error("Bad port number " + b);
            a.om = b
        } else a.om = null
    };
    var uh = function(a, b, c) {
        z.sh(a);
        b instanceof z.wh ? (a.le = b, a.le.jB(a.Fe)) : (c || (b = xh(b, yh)), a.le = new z.wh(b, 0, a.Fe));
        return a
    };
    z.sh = function(a) {
        if (a.DR) throw Error("Tried to modify a read-only Uri");
    };
    var Ah = function() {
        var a = window.location;
        return a instanceof z.qh ? a.clone() : new z.qh(a, void 0)
    };
    var vh = function(a, b) {
        return a ? b ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
    };
    var xh = function(a, b, c) {
        return z.pa(a) ? (a = (0, window.encodeURI)(a).replace(b, Bh), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    };
    var Bh = function(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    z.wh = function(a, b, c) {
        this.Ka = this.Lb = null;
        this.$d = a || null;
        this.Fe = !!c
    };
    var Ch = function(a) {
        a.Lb || (a.Lb = new z.Rd, a.Ka = 0, a.$d && ae(a.$d, 
        function(b, c) {
            a.add((0, window.decodeURIComponent)(b.replace(/\+/g, " ")), c)
        }))
    };
    var Dh = function(a, b) {
        var c = String(b);
        a.Fe && (c = c.toLowerCase());
        return c
    };
    var Eh = function() {};
    var Fh = function() {};
    var Gh = function(a) {
        this.Oc = a
    };
    var Hh = function() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch(b) {}
        this.Oc = a
    };
    var Ih = function() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch(b) {}
        this.Oc = a
    };
    var Jh = function(a, b) {
        this.jK = a;
        this.xd = null;
        if (z.C && !(9 <= z.Ug)) {
            Kh || (Kh = new z.Rd);
            this.xd = Kh.get(a);
            this.xd || (b ? this.xd = window.document.getElementById(b) : (this.xd = window.document.createElement("userdata"), this.xd.addBehavior("#default#userData"), window.document.body.appendChild(this.xd)), Kh.set(a, this.xd));
            try {
                this.xd.load(this.jK)
            } catch(c) {
                this.xd = null
            }
        }
    };
    var Lh = function(a) {
        return "_" + (0, window.encodeURIComponent)(a).replace(/[.!~*'()%]/g, 
        function(a) {
            return Mh[a]
        })
    };
    var Nh = function(a) {
        try {
            a.xd.save(a.jK)
        } catch(b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };
    var Oh = function(a) {
        return a.xd.XMLDocument.documentElement
    };
    var Ph = function(a, b) {
        this.Wo = a;
        this.pm = b + "::"
    };
    var Qh = function(a, b) {
        this.rz = "continuation:" + a;
        this.Oc = b || z.Rh;
        this.tG = []
    };
    var Sh = function(a, b) {
        var c = a.gb();
        c.push(b);
        try {
            a.Oc.set(a.rz, JSON.stringify(c))
        } catch(d) {}
    };
    var Th = function(a, b, c, d, f, g) {
        z.pa(a) ? (this.Ud = a == Uh ? b: 0, this.Ld = a == Vh ? b: 0, this.Ed = a == Wh ? b: 0, this.od = a == Xh ? b: 0, this.rd = a == Yh ? b: 0, this.vd = a == Zh ? b: 0) : (this.Ud = a || 0, this.Ld = b || 0, this.Ed = c || 0, this.od = d || 0, this.rd = f || 0, this.vd = g || 0)
    };
    var $h = function(a, b, c) {
        z.qa(a) ? (this.fa = ai(a, b || 0, c || 1), bi(this, c || 1)) : z.ta(a) ? (this.fa = ai(a.getFullYear(), a.getMonth(), a.getDate()), bi(this, a.getDate())) : (this.fa = new Date((0, z.I)()), a = this.fa.getDate(), this.fa.setHours(0), this.fa.setMinutes(0), this.fa.setSeconds(0), this.fa.setMilliseconds(0), bi(this, a))
    };
    var ai = function(a, b, c) {
        b = new Date(a, b, c);
        0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
        return b
    };
    var ci = function(a) {
        a = a.getTimezoneOffset();
        if (0 == a) a = "Z";
        else {
            var b = Math.abs(a) / 60,
            c = Math.floor(b),
            b = 60 * (b - c);
            a = (0 < a ? "-": "+") + Ya(c, 2) + ":" + Ya(b, 2)
        }
        return a
    };
    var bi = function(a, b) {
        a.getDate() != b && a.fa.setUTCHours(a.fa.getUTCHours() + (a.getDate() < b ? 1: -1))
    };
    var di = function(a, b, c, d, f, g, h) {
        this.fa = z.qa(a) ? new Date(a, b || 0, c || 1, d || 0, f || 0, g || 0, h || 0) : new Date(a ? a.getTime() : (0, z.I)())
    };
    var ei = function() {};
    var fi = function(a) {
        if ("number" == typeof a) {
            var b = new ei;
            b.Mu = a;
            var c;
            c = a;
            if (0 == c) c = "Etc/GMT";
            else {
                var d = ["Etc/GMT", 0 > c ? "-": "+"];
                c = Math.abs(c);
                d.push(Math.floor(c / 60) % 100);
                c %= 60;
                0 != c && d.push(":", Ya(c, 2));
                c = d.join("")
            }
            b.PB = c;
            c = a;
            0 == c ? c = "UTC": (d = ["UTC", 0 > c ? "+": "-"], c = Math.abs(c), d.push(Math.floor(c / 60) % 100), c %= 60, 0 != c && d.push(":", c), c = d.join(""));
            a = gi(a);
            b.ZB = [c, c];
            b.Ik = {
                cY: a,
                UC: a
            };
            b.dv = [];
            return b
        }
        b = new ei;
        b.PB = a.id;
        b.Mu = -a.std_offset;
        b.ZB = a.names;
        b.Ik = a.names_ext;
        b.dv = a.transitions;
        return b
    };
    var gi = function(a) {
        var b = ["GMT"];
        b.push(0 >= a ? "+": "-");
        a = Math.abs(a);
        b.push(Ya(Math.floor(a / 60) % 100, 2), ":", Ya(a % 60, 2));
        return b.join("")
    };
    var hi = function(a, b) {
        for (var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, d = 0; d < a.dv.length && c >= a.dv[d];) d += 2;
        return 0 == d ? 0: a.dv[d - 1]
    };
    var ji = function(a, b) {
        this.Xt = [];
        this.zb = b || ki;
        "number" == typeof a ? li(this, a) : mi(this, a)
    };
    var mi = function(a, b) {
        for (ni && (b = b.replace(/\u200f/g, "")); b;) for (var c = 0; c < oi.length; ++c) {
            var d = b.match(oi[c]);
            if (d) {
                d = d[0];
                b = b.substring(d.length);
                0 == c && ("''" == d ? d = "'": (d = d.substring(1, d.length - 1), d = d.replace(/\'\'/, "'")));
                a.Xt.push({
                    text: d,
                    type: c
                });
                break
            }
        }
    };
    var li = function(a, b) {
        var c;
        if (4 > b) c = a.zb.QC[b];
        else if (8 > b) c = a.zb.VC[b - 4];
        else if (12 > b) c = a.zb.JL[b - 8],
        c = c.replace("{1}", a.zb.QC[b - 8]),
        c = c.replace("{0}", a.zb.VC[b - 8]);
        else {
            li(a, 10);
            return
        }
        mi(a, c)
    };
    var pi = function(a, b) {
        var c;
        c = String(b);
        var d = a.zb || ki;
        if (void 0 !== d.nM) {
            for (var f = [], g = 0; g < c.length; g++) {
                var h = c.charCodeAt(g);
                f.push(48 <= h && 57 >= h ? String.fromCharCode(d.nM + h - 48) : c.charAt(g))
            }
            c = f.join("")
        }
        return c
    };
    var qi = function(a) {
        if (! (a.getHours && a.getSeconds && a.getMinutes)) throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
    };
    var ri = function(a, b, c, d, f, g) {
        var h = b.length;
        switch (b.charAt(0)) {
        case "G":
            return c = 0 < d.getFullYear() ? 1: 0,
            4 <= h ? a.zb.LL[c] : a.zb.ML[c];
        case "y":
            return c = d.getFullYear(),
            0 > c && (c = -c),
            2 == h && (c %= 100),
            pi(a, Ya(c, h));
        case "M":
            a:
            switch (c = d.getMonth(), h) {
            case 5:
                h = a.zb.QL[c];
                break a;
            case 4:
                h = a.zb.NL[c];
                break a;
            case 3:
                h = a.zb.WL[c];
                break a;
            default:
                h = pi(a, Ya(c + 1, h))
            }
            return h;
        case "k":
            return qi(f),
            pi(a, Ya(f.getHours() || 24, h));
        case "S":
            return pi(a, (f.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? Ya(0, h - 3) : 
            ""));
        case "E":
            return c = d.getDay(),
            4 <= h ? a.zb.mM[c] : a.zb.YL[c];
        case "a":
            return qi(f),
            h = f.getHours(),
            a.zb.IL[12 <= h && 24 > h ? 1: 0];
        case "h":
            return qi(f),
            pi(a, Ya(f.getHours() % 12 || 12, h));
        case "K":
            return qi(f),
            pi(a, Ya(f.getHours() % 12, h));
        case "H":
            return qi(f),
            pi(a, Ya(f.getHours(), h));
        case "c":
            a:
            switch (c = d.getDay(), h) {
            case 5:
                h = a.zb.bM[c];
                break a;
            case 4:
                h = a.zb.eM[c];
                break a;
            case 3:
                h = a.zb.dM[c];
                break a;
            default:
                h = pi(a, Ya(c, 1))
            }
            return h;
        case "L":
            a:
            switch (c = d.getMonth(), h) {
            case 5:
                h = a.zb.aM[c];
                break a;
            case 4:
                h = a.zb.$L[c];
                break a;
            case 3:
                h = a.zb.cM[c];
                break a;
            default:
                h = pi(a, Ya(c + 1, h))
            }
            return h;
        case "Q":
            return c = Math.floor(d.getMonth() / 3),
            4 > h ? a.zb.XL[c] : a.zb.RL[c];
        case "d":
            return pi(a, Ya(d.getDate(), h));
        case "m":
            return qi(f),
            pi(a, Ya(f.getMinutes(), h));
        case "s":
            return qi(f),
            pi(a, Ya(f.getSeconds(), h));
        case "v":
            return h = g || fi(c.getTimezoneOffset()),
            h.PB;
        case "V":
            return a = g || fi(c.getTimezoneOffset()),
            2 >= h ? a.PB: 0 < hi(a, c) ? z.ka(a.Ik.KL) ? a.Ik.KL: a.Ik.DST_GENERIC_LOCATION: z.ka(a.Ik.UC) ? a.Ik.UC: a.Ik.STD_GENERIC_LOCATION;
        case "w":
            return c = 
            a.zb.SC,
            f = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
            b = a.zb.RC || 0,
            c = f.valueOf() + 864E5 * (((z.ka(c) ? c: 3) - b + 7) % 7 - ((f.getDay() + 6) % 7 - b + 7) % 7),
            pi(a, Ya(Math.floor(Math.round((c - (new Date((new Date(c)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1, h));
        case "z":
            return a = g || fi(c.getTimezoneOffset()),
            4 > h ? a.ZB[0 < hi(a, c) ? 2: 0] : a.ZB[0 < hi(a, c) ? 3: 1];
        case "Z":
            return f = g || fi(c.getTimezoneOffset()),
            4 > h ? (h = -(f.Mu - hi(f, c)), a = [0 > h ? "-": "+"], h = Math.abs(h), a.push(Ya(Math.floor(h / 60) % 100, 2), Ya(h % 60, 2)), h = a.join("")) : h = pi(a, 
            gi(f.Mu - hi(f, c))),
            h;
        default:
            return ""
        }
    };
    var si = function(a) {
        var b;
        if ("string" === typeof a) {
            b = new di(2E3);
            a = (0, z.ab)(a);
            a = a.split( - 1 == a.indexOf("T") ? " ": "T");
            var c;
            var d = a[0].match(ti);
            if (d) {
                var f = Number(d[2]),
                g = Number(d[3]),
                h = Number(d[4]);
                c = Number(d[5]);
                var k = Number(d[6]) || 1;
                b.setFullYear(Number(d[1]));
                h ? (b.setDate(1), b.setMonth(0), b.add(new Th(Wh, h - 1))) : c ? (b.setMonth(0), b.setDate(1), d = b.getDay() || 7, b.add(new Th(Wh, (4 >= d ? 1 - d: 8 - d) + (Number(k) + 7 * (Number(c) - 1)) - 1))) : (f && (b.setDate(1), b.setMonth(f - 1)), g && b.setDate(g));
                c = !0
            } else c = !1;
            c && !(c = 2 > 
            a.length) && (a = a[1], c = a.match(ui), k = 0, c && ("Z" != c[0] && (k = 60 * c[2] + Number(c[3]), k *= "-" == c[1] ? 1: -1), k -= b.getTimezoneOffset(), a = a.substr(0, a.length - c[0].length)), (c = a.match(vi)) ? (b.setHours(Number(c[1])), b.setMinutes(Number(c[2]) || 0), b.setSeconds(Number(c[3]) || 0), b.setMilliseconds(c[4] ? 1E3 * c[4] : 0), 0 != k && b.setTime(b.getTime() + 6E4 * k), c = !0) : c = !1);
            b = (c ? b: null).fa
        } else b = new Date(a);
        return b
    };
    z.wi = function(a, b) {
        a = void 0 === a ? new Date: a;
        b = void 0 === b ? new Date: b;
        a = si(a);
        b = si(b);
        var c = (b - a) / 1E3;
        if (60 > c) return "刚刚";
        c = (0, window.parseInt)(c / 60);
        if (60 > c) return c + " 分钟前";
        c = (0, window.parseInt)(c / 60);
        if (24 > c) return c + " 小时前";
        var c = b.getFullYear() - a.getFullYear(),
        d = b.getMonth() - a.getMonth(),
        f = b.getDate() - a.getDate();
        return 0 === c && 0 === d ? f + " 天前": 0 === c && 1 === d || 1 === c && -11 === d ? 0 > f ? (new Date(a.getFullYear(), a.getMonth() + 1, 0)).getDate() + f + " 天前": "1 月前": 2 > c ? 1 === c && 0 <= d ? "1 年前": 12 * c + d + " 月前": c + " 年前"
    };
    var xi = function(a, b) {
        return (new ji(void 0 === b ? "yyyy-MM-dd HH:mm:ss": b)).format(new Date(a))
    };
    z.yi = function(a) {
        if (window.za.collect && z.ta(a) && a.action) {
            var b = {
                eventAction: a.action,
                eventCategory: a.category,
                eventLabel: a.label,
                eventValue: a.value && (0, window.parseInt)(a.value, 10),
                eventAttributes: a.attributes,
                nonInteractionType: !!a.hI
            };
            a.xc ? Sh(zi, b) : window.za.collect("event", b)
        }
    };
    z.Ai = function(a, b, c, d, f) {
        z.yi({
            category: a,
            action: b,
            label: c,
            value: d,
            hI: f,
            attributes: void 0
        })
    };
    z.Bi = function(a, b, c, d, f) {
        z.yi({
            xc: !0,
            category: a,
            action: b,
            label: c,
            value: d,
            hI: f,
            attributes: void 0
        })
    };
    var Ci = function() { (0, window.$)(window.document).on("click", "a[data-za-a]", 
        function(a) {
            var b = (0, window.$)(a.target);
            if (a = b.data("za-a")) {
                var c = b.data("za-c"),
                d = b.data("za-l"),
                b = b.data("za-v");
                z.Bi(c, a, d, b)
            }
        })
    };
    var Di = function(a) {
        return function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
            if (!window.zap) Ei.push({
                fn: a,
                XM: c
            });
            else if (window.zap.SUPPORTED) try {
                a.apply(null, [].concat(ja(c)))
            } catch(f) {
                window.console && window.console.error(f)
            }
        }
    };
    var Fi = function(a) {
        a = (0, window.$)(a.m ? a.m() : a);
        var b = [],
        c = [];
        a.add(a.parents()).filter("[data-za-module]").get().reverse().forEach(function(a) {
            var f = a.getAttribute("data-za-module");
            if (f) {
                var g = a.getAttribute("data-za-index");
                "" === g && (g = (0, window.$)(a).siblings("[data-za-index]").andSelf().index(a));
                b.push({
                    module: f,
                    index: g
                });
                a = (0, window.$.data)(a, "zaRespondMoudleFn");
                c.push("function" === typeof a && a() || {})
            }
        });
        return {
            path: b,
            module: c
        }
    };
    var Gi = function() { (0, window.$)(window.document).on("click", "a[href]", 
        function(a) {
            var b = a.currentTarget,
            c = b.getAttribute("href"); ! c || c.startsWith("#") || "http:" !== b.protocol && "https:" !== b.protocol || (0, z.Hi)(b, {
                action: "OpenUrl",
                element: "IMG" === a.target.nodeName ? "Image": "Link"
            },
            {
                link: {
                    url: b.href
                }
            })
        })
    };
    var Ii = function() {
        var a;
        window.localStorage && window.ArrayBuffer && window.Uint8Array && window.DataView ? (window.localStorage.removeItem("zap:enabled"), a = !0) : a = !1;
        a && window.$.ajax({
            url: "//zhstatic.zhihu.com/assets/zap/1.6.4/zap.js",
            dataType: "script",
            cache: !0
        }).then(function() {
            var a;
            try {
                a = "1" === window.localStorage.getItem("zap:logenabled")
            } catch(c) {
                a = !1
            }
            for ((0, z.Ji)({
                logUrl: Ki,
                enableLog: a,
                userId: z.T.dI,
                responseId: (0, window.$)('meta[http-equiv\x3d"X-Za-Response-Id"]').attr("content"),
                product: "Zhihu"
            }); Ei.length;) a = 
            Ei.shift(),
            a.fn.apply(a, [].concat(ja(a.XM)));
            Li();
            Gi()
        })
    };
    z.U = function(a, b, c, d, f) {
        "feed" === a && z.Va(window.location.href, "topstory") && (a = "topstory");
        var g = (0, window.$)("#zh-question-list");
        "feed" === a && g.length && "topstory" === g.attr("data-feedtype") && (a = "topstory");
        Mi.track(a, b, c, d, !!f);
        z.Ai(a, b, c, d, !!f);
        z.Ni && window.console && window.console.log("trackEvent(new)", z.vb(arguments))
    };
    z.Oi = function() { (0, window.$)("#js-openInApp").on("click", 
        function() {
            z.Pi();
            z.U("app-promotion", "click_zhihu_ios_open_dl_link", "header_not_logged_in")
        });
        var a = Ah(),
        b = a.Ne;
        "/openinapp_instruction" === b ? (0, window.$)(".openinapp-instruction-page").data("open") && (a = a.Ce(), a.lb() && Qi(a.get("app-argument"))) : Ri.test(b) && Qi(b.substring(1))
    };
    z.Pi = function() {
        var a = !z.fh && !Si,
        b;
        if (b = (b = (0, window.$)('meta[name\x3d"apple-itunes-app"]').attr("content")) && b.replace(/,\s*/, "\x26")) b = new z.wh(b),
        a ? Qi(b.get("app-argument")) : (b.add("origin", window.location.href), window.location.href = "/openinapp_instruction?" + b.toString())
    };
    var Qi = function(a) {
        if (a) if ( - 1 === a.indexOf("zhihu://") && (a = "zhihu://" + a), Ti) Ui(a);
        else if (window.location.href = a, z.Vi && !z.E(9)) {
            var b = !1;
            window.setTimeout(function() {
                b = !0;
                window.location.href = "http://api.zhihu.com/client/download?ct\x3dtop_right_corner\x26utm_source\x3dtop_right_corner\x26utm_medium\x3dmobile_web\x26utm_campaign\x3ddownloadlink"
            },
            200);
            window.setTimeout(function() {
                b && window.location.reload()
            },
            1E3)
        }
    };
    var Ui = function(a) {
        var b = a.replace(/^zhihu/, "intent") + "/#Intent;scheme\x3dzhihu;package\x3dcom.zhihu.android;end",
        c = window.navigator.userAgent.match(/Chrome\/(\d+)/);
        25 <= (c && c[1]) ? window.location = b: Wi(a)
    };
    var Wi = function(a) {
        var b = window.document.createElement("iframe");
        b.hidden = !0;
        b.src = a;
        window.document.body.appendChild(b);
        var c = (0, z.I)();
        window.setTimeout(function() {
            600 > (0, z.I)() - c && (window.location = Xi.rY)
        },
        400)
    };
    z.Yi = function(a) {
        this.La = a
    };
    z.Zi = function(a) {
        a = (a.La.cookie || "").split($i);
        for (var b = [], c = [], d, f, g = 0; f = a[g]; g++) d = f.indexOf("\x3d"),
        -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var aj = function() {
        z.bj.remove("actioncontinuationhash", "/")
    };
    z.cj = function(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    };
    z.dj = function(a, b, c) {
        z.na(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (ej || (ej = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = ej, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    z.fj = function(a, b) {
        var c = a.getAttribute("aria-" + b);
        return null == c || void 0 == c ? "": String(c)
    };
    z.gj = function(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return z.pa(a) && a.match(/\S+/g) || []
    };
    z.hj = function(a, b) {
        return a.classList ? a.classList.contains(b) : z.A(z.gj(a), b)
    };
    z.ij = function(a, b) {
        a.classList ? a.classList.add(b) : z.hj(a, b) || (a.className += 0 < a.className.length ? " " + b: b)
    };
    z.jj = function(a, b) {
        if (a.classList) z.y(b, 
        function(b) {
            z.ij(a, b)
        });
        else {
            var c = {};
            z.y(z.gj(a), 
            function(a) {
                c[a] = !0
            });
            z.y(b, 
            function(a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d: d
        }
    };
    z.kj = function(a, b) {
        a.classList ? a.classList.remove(b) : z.hj(a, b) && (a.className = z.mb(z.gj(a), 
        function(a) {
            return a != b
        }).join(" "))
    };
    z.lj = function(a, b) {
        a.classList ? z.y(b, 
        function(b) {
            z.kj(a, b)
        }) : a.className = z.mb(z.gj(a), 
        function(a) {
            return ! z.A(b, a)
        }).join(" ")
    };
    z.mj = function(a) {
        if (z.B) a = nj(a);
        else if (z.Uc && z.D) a: switch (a) {
        case 93:
            a = 91;
            break a
        }
        return a
    };
    var nj = function(a) {
        switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
        }
    };
    z.oj = function(a) {
        var b = a.offsetLeft,
        c = a.offsetParent;
        c || "fixed" != z.zg(a) || (c = z.Je(a).documentElement);
        if (!c) return b;
        if (z.B) var d = z.Tg(c),
        b = b + d.left;
        else 8 <= z.Ug && !(9 <= z.Ug) && (d = z.Tg(c), b -= d.left);
        return z.Ng(c) ? c.clientWidth - (b + a.offsetWidth) : b
    };
    z.pj = function(a, b, c) {
        z.G.call(this);
        this.target = a;
        this.handle = b || a;
        this.pt = c || new z.rg(window.NaN, window.NaN, window.NaN, window.NaN);
        this.La = z.Je(a);
        this.T = new z.xd(this);
        z.Ac(this, this.T);
        this.deltaY = this.deltaX = this.Pu = this.Ou = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.ec = !0;
        this.pj = !1;
        this.aJ = !0;
        this.Ey = 0;
        this.Ti = this.TQ = !1;
        z.F(this.handle, ["touchstart", "mousedown"], this.Km, !1, this)
    };
    var qj = function(a) {
        z.ka(a.rg) || (a.rg = z.Ng(a.target));
        return a.rg
    };
    var rj = function(a, b, c) {
        var d = z.wf(z.J(a.La));
        b += d.x - a.sA.x;
        c += d.y - a.sA.y;
        a.sA = d;
        a.deltaX += b;
        a.deltaY += c;
        return new z.Ge(sj(a, a.deltaX), tj(a, a.deltaY))
    };
    var uj = function(a, b, c, d) {
        a.ax(c, d);
        a.dispatchEvent(new vj("drag", a, b.clientX, b.clientY, b, c, d))
    };
    var sj = function(a, b) {
        var c = a.pt,
        d = (0, window.isNaN)(c.left) ? null: c.left,
        c = (0, window.isNaN)(c.width) ? 0: c.width;
        return Math.min(null != d ? d + c: window.Infinity, Math.max(null != d ? d: -window.Infinity, b))
    };
    var tj = function(a, b) {
        var c = a.pt,
        d = (0, window.isNaN)(c.top) ? null: c.top,
        c = (0, window.isNaN)(c.height) ? 0: c.height;
        return Math.min(null != d ? d + c: window.Infinity, Math.max(null != d ? d: -window.Infinity, b))
    };
    var vj = function(a, b, c, d, f, g, h) {
        z.Lc.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.KD = f;
        this.left = z.ka(g) ? g: b.deltaX;
        this.top = z.ka(h) ? h: b.deltaY;
        this.Ur = b
    };
    z.wj = function(a) {
        z.G.call(this);
        this.h = a;
        a = z.C ? "focusout": "blur";
        this.XR = z.F(this.h, z.C ? "focusin": "focus", this, !z.C);
        this.YR = z.F(this.h, a, this, !z.C)
    };
    var xj = function(a, b) {
        this.h = a;
        this.da = b
    };
    var yj = function(a, b) {
        z.R.call(this, b);
        this.XW = !!a;
        this.cm = null
    };
    var zj = function(a) {
        a.Pe || (a.Pe = a.K().createElement("SPAN"), z.Q(a.Pe, !1), z.of(a.Pe, !0), a.Pe.style.position = "absolute")
    };
    var Aj = function(a, b) {
        a.WH || (a.WH = new xj(a.h, a.da));
        var c = a.WH;
        if (b) {
            c.Sl || (c.Sl = []);
            for (var d = c.da.ZO(c.da.ua().body), f = 0; f < d.length; f++) {
                var g = d[f];
                g == c.h || z.fj(g, "hidden") || (z.dj(g, "hidden", !0), c.Sl.push(g))
            }
        } else if (c.Sl) {
            for (f = 0; f < c.Sl.length; f++) c.Sl[f].removeAttribute("aria-hidden");
            c.Sl = null
        }
    };
    var Bj = function(a, b) {
        a.Ac && z.Q(a.Ac, b);
        a.Qc && z.Q(a.Qc, b);
        z.Q(a.m(), b);
        z.Q(a.Pe, b)
    };
    z.Cj = function(a, b, c) {
        yj.call(this, b, c);
        this.Sc = a || "modal-dialog";
        this.pc = z.Dj()
    };
    z.Ej = function(a) {
        a.m() || a.render()
    };
    var Fj = function(a) {
        z.Ej(a);
        return a.dd
    };
    z.Gj = function(a) {
        z.Ej(a);
        return a.yd
    };
    var Hj = function(a, b) {
        a.kr = b;
        if (a.m()) {
            var c = a.Cj();
            c && z.Kg(c, a.kr)
        }
    };
    var Ij = function(a, b) {
        a.fm = b;
        if (a.wa) {
            var c = a.K(),
            d = a.Cj(),
            f = a.Ac;
            b ? (f && c.Ys(f, a.m()), c.Ys(d, a.m())) : (c.removeNode(f), c.removeNode(d))
        }
        a.V() && Aj(a, b)
    };
    var Jj = function(a, b) {
        var c = (0, z.ab)(a.Sc + "-title-draggable").split(" ");
        a.m() && (b ? z.jj(a.zd, c) : z.lj(a.zd, c));
        b && !a.Jb ? (a.Jb = new z.pj(a.m(), a.zd), z.jj(a.zd, c), z.F(a.Jb, "start", a.KV, !1, a)) : !b && a.Jb && (a.Jb.H(), a.Jb = null)
    };
    var Kj = function(a) {
        if (a.Dy) {
            var b = a.pc,
            c = b && b.Cw;
            c ? (b = b.get(c), a.dispatchEvent(new Lj(c, b)) && a.G(!1)) : a.G(!1)
        }
    };
    z.Mj = function(a, b) {
        a.pc = b;
        if (a.oc) {
            if (a.pc) {
                var c = a.pc;
                c.h = a.oc;
                c.render()
            } else z.Fe(a.oc, Nj);
            z.Q(a.oc, !!a.pc)
        }
    };
    var Lj = function(a, b) {
        this.type = z.Oj;
        this.key = a;
        this.caption = b
    };
    z.Pj = function(a) {
        this.da = a || z.J();
        z.Rd.call(this)
    };
    z.Dj = function() {
        return (new z.Pj).Bd(Qj.Cg, !0).Bd(Qj.Te, !1, !0)
    };
    z.Rj = function(a) {
        var b = !1,
        c;
        return function() {
            if (b) return c;
            b = !0;
            return c = a.apply(this, arguments)
        }
    };
    z.V = function(a) {
        z.Cj.call(this, a);
        this.pc = null;
        Sj(this)
    };
    var Sj = function(a) {
        var b = window.document.documentElement;
        a.o().g(a, "beforeshow", 
        function() {
            this.fm && (window.document.body.clientWidth < window.innerWidth && z.W.add(b, "modal-doc-overflow"), this.mx = !1, Jj(this, !1), z.W.add(b, "modal-open"), this.fk || ((0, window.$)(this.m()).wrap('\x3cdiv class\x3d"modal-wrapper"\x3e'), this.fk = this.m().parentNode), this.vF && z.W.add(this.m(), "centered"), this.fk.removeAttribute("hidden"))
        }).g(a, "hide", 
        function() {
            this.fm && (1 === (0, window.$)(".modal-wrapper:visible").length && (z.W.remove(b, 
            "modal-open"), z.W.remove(b, "modal-doc-overflow")), this.fk && this.fk.setAttribute("hidden", ""))
        });
        z.Bc(a, 
        function() {
            this.fk && (z.P(this.fk), this.fk = null)
        },
        a);
        a.qR()
    };
    z.Tj = function(a) {
        a.Zk && a.o().g(a.Qc || a.Ac, "click", 
        function() {
            this.Zk && this.G(!1)
        })
    };
    z.Uj = function(a, b) {
        a.h && a.wa && z.qa(b) && (!z.Vj || z.Wj) && (a.h.style.width = z.Bg(b, !0), a.fL = b);
        z.pa(b) && (a.h.style.width = b)
    };
    z.X = function(a, b) {
        b = void 0 === b ? z.p: b;
        var c = new z.V,
        d = ["yes", "ok"],
        f = Object.assign({
            open: !0,
            modal: !1,
            title: "消息",
            content: "",
            className: "",
            disposeOnHide: !0,
            buttons: {
                yes: "确认",
                cancel: "取消"
            }
        },
        a); (function(a, b) {
            b = void 0 === b ? {}: b;
            for (var c = Object.entries(Eb(b)).sort(function(a, b) {
                var c = z.ia(a).next().value,
                f = z.ia(b).next().value;
                return d.indexOf(c) - d.indexOf(f)
            }), f = new z.Pj, n = z.ia(c), r = n.next(); ! r.done; r = n.next()) {
                var w = z.ia(r.value),
                r = w.next().value,
                w = w.next().value;
                f.set(r, w, -1 !== d.indexOf(r))
            }
            z.Mj(a, f);
            z.W.enable(a.ii(), "with-button", !!c.length)
        })(c, f.buttons);
        c.g(z.Oj, 
        function(a) {
            return b.call(c, -1 !== d.indexOf(a.key))
        });
        z.W.add(c.ii(), f.className);
        c.Oa(f.title);
        c.Qp(f.modal);
        c.ia(f.content);
        c.G(f.open);
        c.Df(f.disposeOnHide);
        f.ha && c.ha();
        return c
    };
    var Xj = function(a) {
        var b = null;
        return function(c) {
            for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
            b && !b.Fd && b.H();
            return b = a.apply(null, [].concat(ja(d)))
        }
    };
    z.Yj = function() {
        z.G.call(this)
    };
    var Zj = function() {
        z.G.call(this);
        this.last = 0
    };
    z.ak = function(a, b) {
        this.type = a;
        this.yf = b
    };
    z.bk = function(a) {
        var b = {
            qq: "/oauth/redirect/login/qqconn?next\x3d",
            sina: "/oauth/redirect/login/sina?next\x3d",
            wechat: z.fh ? "/oauth/redirect/login/wechat_mp?next\x3d": "/oauth/redirect/login/wechat?next\x3d"
        } [a];
        ck || z.fh || "sina" === a ? window.location.href = b + "/oauth/account_callback\x26from\x3d" + (0, window.encodeURIComponent)(z.be(window.location.href, "next") || window.location.pathname) : window.open(b + "/oauth/account_callback", "_blank", "top\x3d200,left\x3d400,width\x3d600,height\x3d550,directories\x3dno,menubar\x3dno,toolbar\x3dno")
    };
    z.dk = function(a, b) {
        a.g(z.Y, "accountcallback", b)
    };
    z.ek = function(a) {
        z.R.call(this);
        this.Xb = a;
        this.eC = "antispam" === a ? "/antispam/captcha": "/captcha.gif";
        this.Lz = 8
    };
    var fk = function(a) {
        var b = [],
        c = a.Lz; (0, window.$)(".Captcha-mark", a.X).each(function(a, f) {
            var g = (0, window.$)(f);
            b.push([(0, window.parseFloat)(g.css("left")) + c, (0, window.parseFloat)(g.css("top")) + c])
        });
        a.yF.input_points = b;
        b.length ? a.$i.val(JSON.stringify(a.yF)) : a.$i.val("")
    };
    var gk = function(a) {
        a.Rm && (a.yF = {
            img_size: [a.Nk.width(), a.Nk.height()]
        },
        a.$i.val(""), hk(a), (0, window.$)(".Captcha-mark", a.X).remove())
    };
    var hk = function(a) {
        a.yL.removeClass("is-hidden");
        a.$i.next(".error").remove()
    };
    z.ik = function(a) {
        "1" !== z.bj.get("login" === a.Xb ? "l_n_c": "n_c") ? a.$i.attr("name", "").addClass("is-ignoreValidation") : (a.$i.attr("name", "captcha").removeClass("is-ignoreValidation"), a.mu(), a.bK && (a.Nk.load(function() {
            return a.X.slideDown(300)
        }), a.trackEvent("show", "Image")))
    };
    z.jk = function(a) {
        var b = kk;
        return function() {
            var c = this || z.t,
            c = c[lk] || (c[lk] = {}),
            d = b(z.ua(a), arguments);
            return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    };
    var kk = function(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };
    var mk = function(a, b, c) {
        z.G.call(this);
        this.X = (0, window.$)(a);
        this.AW = b;
        this.duration = c
    };
    var nk = function(a) {
        z.V.call(this, "mutiview-dialog");
        this.AD = [];
        this.$I = [];
        this.ZI = [];
        this.YT = a;
        this.Df(!0);
        this.xU = !0
    };
    var ok = function(a, b) {
        var c = (0, window.$)(a.Cj()),
        d = (0, window.$)(b.Cj()),
        f = c.clone();
        f.appendTo("body");
        c.css("visibility", "hidden");
        d.css("visibility", "hidden");
        b.o().g(b, pk, 
        function() {
            f.remove();
            d.css("visibility", "visible")
        });
        a.xU && a.mi() && b.Db(a.mi());
        a.G(!1);
        a.o().g(a, z.qk, 
        function() {
            b.G(!0)
        })
    };
    var rk = function(a, b, c, d) {
        var f = a.Xi,
        g = a.Mk;
        c = c || f.next(".view");
        d = d || g.next(".title");
        c.length && d.length && (sk(a), c.css("visibility", "visible").removeClass("right"), d.css("visibility", "visible").removeClass("right"), f.addClass("left").onTransitionEnd(function() {
            f.css("visibility", "hidden")
        },
        300), g.addClass("left").onTransitionEnd(function() {
            g.css("visibility", "hidden")
        },
        300), a.Xi = c, a.Mk = d, a.$I.push(f), a.ZI.push(g), a.AD.push(a.Aq.hasClass("show")), tk(a, b), a.St())
    };
    var tk = function(a, b) {
        var c = a.Aq;
        b !== a.Aq.hasClass("show") && (b ? c.css("visibility", "visible").addClass("show") : window.Modernizr.csstransitions ? c.onTransitionEnd(function() {
            c.css("visibility", "hidden")
        },
        300).removeClass("show") : c.css("visibility", "hidden"))
    };
    var sk = function(a) {
        var b = a.Pc;
        b.addClass("transition").height(b.outerHeight()); (0, window.setTimeout)(function() {
            b.height(a.Xi.outerHeight()).onTransitionEnd(function() {
                return b.removeClass("transition").css("height", "")
            },
            300)
        },
        17)
    };
    z.uk = function(a, b, c, d, f) {
        function g() {
            var a = b - r;
            0 < a ? (k.text(z.Ka(c(!0, n), a)), r += 1) : h(a)
        }
        function h(a) {
            a = void 0 === a ? b - r: a;
            m.stop();
            n += 1;
            k.text(z.Ka(c(!1, n), a));
            k.removeClass("disabled");
            r = 0
        }
        f = void 0 === f ? !1: f;
        var k = (0, window.$)(a),
        m = new z.td(1E3),
        n = 0,
        r = 0;
        k.click(function(a) {
            m.enabled || d && !1 === d.call(this, a) || (m.start(), g(), k.addClass("disabled"))
        });
        m.addEventListener("tick", g, !1);
        f && (g(), k.addClass("disabled"));
        m.cancel = h;
        return m
    };
    z.vk = function(a, b) {
        var c = (0, window.$)(a);
        return function() {
            if (!c.hasClass("btn-pending")) {
                var a = b.apply(this, arguments),
                f = function() {
                    c.removeClass("btn-pending")
                };
                a && a.then && (c.addClass("btn-pending"), a.then(f, f))
            }
            return ! 1
        }
    };
    z.wk = function(a, b) {
        a && (this.input = a, "string" === typeof b && (b = {
            text: b
        }), z.Mb(this.J = {},
        this.defaults, b || {}), this.Yg = null, xk(this))
    };
    var xk = function(a) {
        var b = a.input,
        c = a.J;
        c.text || (c.text = b.getAttribute("placeholder"));
        if (z.yk) a.zk(c.text);
        else {
            var d = a.label = zk(a);
            a.zk(c.text);
            a.offsetParent().appendChild(d);
            var f = a.Yg = new z.xd(a);
            f.g(b, "blur", a.check);
            f.g(b, "focus", a.hide);
            c.xD && f.g(b, "keydown", a.hide);
            f.g(d, "click", 
            function() {
                this.hide();
                z.Lg(b) && b.focus()
            });
            b.QY = (0, z.q)(a.check, a);
            Ak(a);
            a.position();
            a.check()
        }
    };
    var Bk = function(a) {
        if (function(a) {
            return "labels" in a ? a.labels.length: a.id && z.pb(window.document.getElementsByTagName("label"), 
            function(c) {
                return c.htmlFor === a.id
            })
        } (a) || z.fj(a, "label") || z.fj(a, "labelledby")) return ! 0
    };
    var Ck = function(a, b) {
        return z.wg(a, b) || z.xg(a, b) || a.style[b]
    };
    var zk = function(a) {
        var b = a.input,
        c = z.Tg(b),
        d = z.O("label"),
        f = z.Dg(b, a.offsetParent());
        z.sg(d, {
            color: "gray",
            cursor: "text",
            position: "absolute",
            left: f.x + c.left + "px",
            top: f.y + c.top + "px",
            display: a.dh() ? "block": "none",
            width: Ck(b, "width"),
            fontSize: Ck(b, "fontSize"),
            lineHeight: Ck(b, "lineHeight"),
            fontFamily: Ck(b, "fontFamily")
        });
        return d
    };
    var Ak = function(a) {
        var b = a.input;
        a = a.label;
        Bk(b) || (b.id ? a.htmlFor = b.id: (a.id = z.Xg(z.Wg.ba()), z.dj(b, "labelledby", a.id)))
    };
    z.Dk = function(a) {
        nk.call(this, "SignFlow " + (void 0 === a ? "": a))
    };
    z.Ek = function(a) {
        a = void 0 === a ? {}: a;
        z.Dk.call(this);
        this.options = a
    };
    var Fk = function(a) {
        a.Vs((0, window.$)(".send-code", a.h), 
        function() {
            window.$.post("/send_login_two_step_verification_code/sms", {
                phone_num: a.options.data.phone_num
            },
            function(b) {
                b.r && a.showErrors(b.data)
            })
        }).start()
    };
    z.Gk = function(a) {
        z.Dk.call(this, "unable-login");
        this.jw = a
    };
    var Hk = function(a) {
        a.IC = (0, window.$)(".view.start", a.Pc);
        z.Ik ? (z.ik(a.su), rk(a, !1, a.Cv, a.GC)) : ((0, window.$)("button.reset-password", a.IC).click(function() {
            z.ik(a.su);
            rk(a, !0, a.Cv, a.GC)
        }), (0, window.$)("button.sms-login", a.IC).click(function() {
            z.ik(a.Nv);
            rk(a, !0, a.pv, a.oL)
        }))
    };
    var Jk = function(a) {
        a.Kq = (0, window.$)(".view.reset-password", a.Pc);
        a.BL = (0, window.$)(".title.reset-password", a.Se);
        var b = (0, window.$)("form", a.Kq);
        a.Ge(b, a.uT);
        a.Ws(b);
        var c = (0, window.$)('input[name\x3d"account"]', b),
        d = (0, window.$)('input[name\x3d"verification_code"]', b),
        f = (0, window.$)(".send-code", b);
        a.cV = a.Vs(f, 
        function() {
            var a = c.val(),
            f,
            k;
            this.rf(a) ? (f = "/send_login_verification_code/email", a = {
                email: a
            },
            k = "邮箱收到的 6 位数验证码") : (f = "/send_login_verification_code/sms", a = {
                phone_num: a
            },
            k = "手机收到的 6 位数验证码");
            window.$.get(f, 
            a, 
            function(a) {
                a.r && b.data("validator").showErrors(a.data)
            });
            d.val("").attr("placeholder", k)
        })
    };
    var Kk = function(a) {
        a.qv = (0, window.$)(".view.sms-login", a.Pc);
        a.nL = (0, window.$)(".title.sms-login", a.Se);
        var b = (0, window.$)("form", a.qv);
        a.Ge(b, a.wT);
        var c = (0, window.$)('input[name\x3d"phone_num"]', b),
        d = (0, window.$)(".send-code", b);
        a.ZL = a.Vs(d, 
        function() {
            var a = this;
            window.$.get("/send_login_verification_code/sms", {
                phone_num: c.val()
            },
            function(c) {
                c.r && (c = c.data, a.wb(c, "account", "phone_num"), b.data("validator").showErrors(c))
            })
        })
    };
    z.Lk = function(a) {
        z.Dk.call(this, "oauth-register");
        this.Bh = a
    };
    var Mk = function(a) {
        a.Mf = (0, window.$)(".view.register", a.Pc);
        a.zL = (0, window.$)(".title.register", a.Se);
        var b = (0, window.$)("form", a.Mf);
        a.Ge(b, a.pp);
        b = (0, window.$)(".captcha-module", a.Mf).get(0);
        a.Cc = new z.ek;
        a.Cc.w(b);
        z.ik(a.Cc)
    };
    var Nk = function(a) {
        a.rv = (0, window.$)(".view.bind-login", a.Pc);
        a.pL = (0, window.$)(".title.bind-login", a.Se);
        var b = (0, window.$)("form", a.rv);
        a.Ge(b, a.MS);
        a.Ws(b); (0, window.$)("input.account", b).val(a.Bh.account); (0, window.$)("button.unable-login", a.rv).click(function() {
            var b = new z.Gk;
            ok(a, b)
        })
    };
    var Ok = function(a) {
        a.tv = (0, window.$)(".view.bound", a.Pc);
        a.qL = (0, window.$)(".title.bound", a.Se);
        var b = {
            sina: "微博",
            qqconn: " QQ ",
            wechat: "微信",
            wechat_mp: "微信"
        } [a.Bh.type],
        c = z.Ka("该%s曾绑定过以下知乎帐号", b),
        b = z.Ka("不绑定，用%s创建新帐号", b); (0, window.$)("h2", a.qL).text(c); (0, window.$)(".name", a.tv).text(a.Bh.fullname); (0, window.$)("img", a.tv).attr("src", a.Bh.avatar_path); (0, window.$)("button.register", a.tv).text(b)
    };
    var Pk = function(a) {
        a.FC = (0, window.$)(".view.registered", a.Pc);
        a.AL = (0, window.$)(".title.registered", a.Se);
        var b = z.Ka("%s 已注册至如下帐号", a.Bh.account); (0, window.$)("h2", a.AL).text(b); (0, window.$)(".name", a.FC).text(a.Bh.fullname); (0, window.$)("img", a.FC).attr("src", a.Bh.avatar_path)
    };
    var Qk = function(a) {
        return {
            qqconn: "qq",
            wechat: "wechat",
            sina: "weibo",
            wechat_mp: "wechat_mp"
        } [a.Bh.type]
    };
    z.Rk = function(a) {
        a = void 0 === a ? {}: a;
        z.R.call(this);
        this.options = a
    };
    z.Sk = function(a) {
        a = void 0 === a ? {}: a;
        z.Dk.call(this, "login");
        this.options = a
    };
    z.Tk = function(a) {
        z.xc.call(this);
        this.xv = a;
        this.Lo = !1
    };
    z.Uk = function(a) {
        z.R.call(this);
        this.ug = a
    };
    z.Vk = function(a, b) {
        z.R.call(this);
        this.Vn = a;
        this.ug = b
    };
    z.Wk = function(a) {
        z.Dk.call(this, "register");
        this.ug = a
    };
    var Xk = function(a) {
        var b = (0, window.$)(".view.register", a.S()),
        c = new z.Uk(a.ug);
        a.L(c);
        c.bd(a.Jf);
        c.w(b[0]);
        c.g("success", 
        function(b) {
            rk(a, !0);
            var c = b.data;
            b = (0, window.$)(".view.verification", a.S());
            c = new z.Vk(c, a.ug);
            a.L(c);
            c.bd(a.Jf);
            c.w(b[0])
        });
        b.on("click", ".switch-to-login", 
        function() {
            var c = (0, window.$)('input[name\x3d"account"]', b),
            c = new z.Sk({
                data: {
                    account: c.val()
                }
            });
            c.bd(a.Jf);
            a.na({
                category: "sign_in",
                action: "switch_to_sign_in_box_appear"
            });
            c.Db(a);
            ok(a, c)
        })
    };
    var Yk = function(a) {
        z.G.call(this);
        this.view = this.name = null;
        z.Mb(this.options = {},
        this.defaults, a || {})
    };
    var Zk = function(a, b) {
        function c(b) {
            Yk.call(this, b);
            this.name = a
        }
        z.x(c, Yk);
        z.Ca(c.prototype, b);
        $k[a] = c
    };
    var al = function(a, b) {
        var c = $k[a];
        if (!c) throw Error("Cannot find constructor");
        return new c(b)
    };
    z.bl = function(a) {
        z.R.call(this);
        z.Mb(this.J = {},
        this.defaults, a || {});
        this.source = this.J.source;
        this.promise = window.$.Deferred().resolve();
        this.Rb = {}
    };
    var cl = function(a, b, c) {
        a.wa && z.y(a.gb(), b, c);
        a.o().g(a, "itemcreated", 
        function(a) {
            b.call(c, a.item)
        })
    };
    var dl = function(a) {
        a.Bc && (z.P(a.Bc), a.Bc = null);
        a.dispatchEvent("complete")
    };
    z.el = function(a, b) {
        var c = Array.prototype.slice.call(arguments),
        d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, 
        function(a, b, d, k, m, n, r, w) {
            if ("%" == n) return "%";
            var H = c.shift();
            if ("undefined" == typeof H) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = H;
            return fl[n].apply(null, arguments)
        })
    };
    z.gl = function(a, b, c) {
        z.xc.call(this);
        this.bk = null != c ? (0, z.q)(a, c) : a;
        this.bh = b;
        this.fl = (0, z.q)(this.HT, this);
        this.hw = []
    };
    z.hl = function(a) {
        z.G.call(this);
        this.viewport = a || window;
        this.size = null;
        this.mN = z.Qg(window.document.body).top;
        this.ga = new z.xd(this);
        this.hq = null;
        this.hO = 250;
        this.hc(); (0, window.setTimeout)((0, z.q)(this.update, this))
    };
    var il = function(a, b, c) {
        b.o().g(a, "update", 
        function(a) {
            var f;
            z.Vc(b) ? f = b.hasListener("nearbottom", void 0) : (f = z.ed(b), f = !!f && f.hasListener("nearbottom", void 0));
            f && c(a.target.size) && b.dispatchEvent("nearbottom")
        })
    };
    var jl = function(a) {
        z.G.call(this);
        this.Mn = this.Dm = {};
        this.jt = 0;
        this.fP = Ob(kl);
        this.oW = Ob(ll);
        this.jD = !0;
        this.KM = this.OM = !1;
        this.sS = !0;
        this.NM = !1;
        this.Rv = null;
        this.gh = a;
        z.F(this.gh, "keydown", this.lf, !1, this);
        z.B && z.F(this.gh, "keyup", this.bG, !1, this);
        z.ml && !z.B && (z.F(this.gh, "keypress", this.qG, !1, this), z.F(this.gh, "keyup", this.rG, !1, this))
    };
    var nl = function(a) {
        this.Ff = a || null;
        this.next = a ? null: {}
    };
    var ol = function(a, b) {
        var c;
        if (z.pa(b[a])) c = z.nb(pl(b[a]), 
        function(a) {
            return a.keyCode & 255 | a.tS << 8
        });
        else {
            var d = b,
            f = a;
            z.na(b[a]) && (d = b[a], f = 0);
            for (c = []; f < d.length; f += 2) c.push(d[f] & 255 | d[f + 1] << 8)
        }
        return c
    };
    var pl = function(a) {
        a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
        a = a.split(" ");
        for (var b = [], c, d = 0; c = a[d]; d++) {
            var f = c.split("+"),
            g = null;
            c = 0;
            for (var h, k = 0; h = f[k]; k++) {
                switch (h) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
                }
                f = h;
                if (!ql) {
                    g = {};
                    h = void 0;
                    for (h in z.rl) g[z.rl[h]] = z.mj((0, window.parseInt)(h, 10));
                    ql = g
                }
                g = ql[f];
                break
            }
            b.push({
                keyCode: g,
                tS: c
            })
        }
        return b
    };
    var sl = function(a) {
        return z.ml && !z.B && a.ctrlKey && a.altKey && !a.shiftKey
    };
    var tl = function(a, b, c) {
        var d = b.shift(),
        f = a[d];
        if (f && (0 == b.length || f.Ff)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        b.length ? (d = d.toString(), f = new nl, f = d in a ? a[d] : a[d] = f, tl(f.next, b, c)) : a[d] = new nl(c)
    };
    var ul = function(a, b) {
        var c = b.shift(),
        d = a[c];
        d && (0 == b.length ? d.Ff && delete a[c] : d.next && (ul(d.next, b), z.Jb(d.next) && delete a[c]))
    };
    var vl = function(a, b, c) {
        z.Lc.call(this, a, c);
        this.identifier = b
    };
    var wl = function(a) {
        z.xc.call(this);
        this.hc(a)
    };
    z.xl = function(a, b) {
        a.pn.Vb = b;
        return a
    };
    var yl = function(a) {
        z.R.call(this);
        this.Rj = -1;
        z.Mb(this.J = {},
        this.defaults, a || {})
    };
    var zl = function(a, b) {
        if (b !== a.index()) {
            var c = a.size(),
            d = c - 1;
            a.J.AN && (b > d ? b = 0: 0 > b && (b = d));
            a.dispatchEvent({
                data: {
                    index: b,
                    size: c
                },
                type: "action"
            });
            0 > b || b > d || (a.Rj = b, a.hp(Al(a)))
        }
    };
    var Al = function(a) {
        return a.items()[a.index()]
    };
    z.Bl = function(a) {
        yl.call(this, a);
        this.CL = (0, window.$)("html, body")
    };
    var Cl = function(a) {
        return {
            k: {
                action: a.prev,
                Vb: {
                    group: "导航",
                    name: "上一条目"
                }
            },
            j: {
                action: a.next,
                Vb: {
                    group: "导航",
                    name: "下一条目"
                }
            },
            "g g": {
                action: a.first,
                Vb: {
                    group: "导航",
                    name: "第一个条目"
                }
            },
            "shift+g": {
                action: a.last,
                Vb: {
                    group: "导航",
                    name: "最后一个条目"
                }
            },
            "shift+k": {
                action: a.wV,
                Vb: {
                    group: "导航",
                    name: "屏幕上移"
                }
            },
            "shift+j": {
                action: a.rV,
                Vb: {
                    group: "导航",
                    name: "屏幕下移"
                }
            }
        }
    };
    z.Dl = function(a) {
        z.bl.call(this, a)
    };
    z.ba = [];
    ea = "undefined" != typeof window && window === this ? this: "undefined" != typeof window.global ? window.global: this;
    ga = 0;
    z.je = z.je || {};
    z.t = this;
    z.va = "closure_uid_" + (1E9 * Math.random() >>> 0);
    wa = 0;
    z.I = Date.now || 
    function() {
        return + new Date
    };
    Ea = null;
    var Ke;
    z.x(Ia, Error);
    Ia.prototype.name = "CustomError";
    var Pa,
    Qa,
    Ra,
    Sa,
    Ta,
    Ua,
    Oa,
    Za;
    z.ab = String.prototype.trim ? 
    function(a) {
        return a.trim()
    }: function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    Pa = /&/g;
    Qa = /</g;
    Ra = />/g;
    Sa = /"/g;
    Ta = /'/g;
    Ua = /\x00/g;
    Oa = /[\x00&<>"']/;
    Za = String.prototype.repeat ? 
    function(a, b) {
        return a.repeat(b)
    }: function(a, b) {
        return Array(b + 1).join(a)
    };
    z.El = 2147483648 * Math.random() | 0;
    fb.prototype.get = function() {
        var a;
        0 < this.Kt ? (this.Kt--, a = this.Is, this.Is = a.next, a.next = null) : a = this.XN();
        return a
    };
    fb.prototype.put = function(a) {
        this.Gp(a);
        this.Kt < this.SR && (this.Kt++, a.next = this.Is, this.Is = a)
    };
    var dc = new fb(function() {
        return new hb
    },
    function(a) {
        a.reset()
    },
    100);
    gb.prototype.add = function(a, b) {
        var c = dc.get();
        c.set(a, b);
        this.lv ? this.lv.next = c: this.Vm = c;
        this.lv = c
    };
    gb.prototype.remove = function() {
        var a = null;
        this.Vm && (a = this.Vm, this.Vm = this.Vm.next, this.Vm || (this.lv = null), a.next = null);
        return a
    };
    hb.prototype.set = function(a, b) {
        this.fn = a;
        this.scope = b;
        this.next = null
    };
    hb.prototype.reset = function() {
        this.next = this.scope = this.fn = null
    };
    z.Fl = z.ib(!1);
    z.Gl = z.ib(!0);
    z.Hl = z.ib(null);
    a: {
        var Il = z.t.navigator;
        if (Il) {
            var Jl = Il.userAgent;
            if (Jl) {
                z.Bb = Jl;
                break a
            }
        }
        z.Bb = ""
    };
    var Nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var cc;
    var Yb,
    $b = !1,
    ac = new gb;
    var fc = 0,
    hc = 2,
    ic = 3;
    jc.prototype.reset = function() {
        this.context = this.jm = this.ip = this.ij = null;
        this.always = !1
    };
    var lc = new fb(function() {
        return new jc
    },
    function(a) {
        a.reset()
    },
    100);
    ec.prototype.then = function(a, b, c) {
        return rc(this, z.sa(a) ? a: null, z.sa(b) ? b: null, c)
    };
    Fa(ec);
    ec.prototype.cancel = function(a) {
        this.N == fc && Xb(function() {
            var b = new sc(a);
            mc(this, b)
        },
        this)
    };
    ec.prototype.JW = function(a) {
        this.N = fc;
        gc(this, hc, a)
    };
    ec.prototype.KW = function(a) {
        this.N = fc;
        gc(this, ic, a)
    };
    ec.prototype.as = function() {
        for (var a = null; a = nc(this);) oc(this, a, this.N, this.th);
        this.Cx = !1
    };
    var wc = Vb;
    z.x(sc, Ia);
    sc.prototype.name = "cancel";
    var yc = 0,
    zc = {};
    z.xc.prototype.Fd = !1;
    z.xc.prototype.H = function() {
        if (!this.Fd && (this.Fd = !0, this.D(), 0 != yc)) {
            var a = z.ua(this);
            delete zc[a]
        }
    };
    z.xc.prototype.D = function() {
        if (this.mk) for (; this.mk.length;) this.mk.shift()()
    };
    var Ic,
    Nl;
    z.vg = Pb();
    z.C = Qb();
    z.Gc = z.Ab("Edge");
    z.Kl = z.Gc || z.C;
    z.B = z.Ab("Gecko") && !(z.Va(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge")) && !(z.Ab("Trident") || z.Ab("MSIE")) && !z.Ab("Edge");
    z.D = z.Va(z.Bb.toLowerCase(), "webkit") && !z.Ab("Edge");
    z.Vj = z.D && z.Ab("Mobile");
    z.Uc = z.Ab("Macintosh");
    z.ml = z.Ab("Windows");
    z.Ll = z.Ab("Linux") || z.Ab("CrOS");
    z.Ml = z.Ec();
    z.Jc = function() {
        if (z.vg && z.t.opera) {
            var a;
            var b = z.t.opera.version;
            try {
                a = b()
            } catch(c) {
                a = b
            }
            return a
        }
        a = ""; (b = Fc()) && (a = b ? b[1] : "");
        return z.C && (b = Hc(), b > (0, window.parseFloat)(a)) ? String(b) : a
    } ();
    Ic = {};
    Nl = z.t.document;
    z.Ug = Nl && z.C ? Hc() || ("CSS1Compat" == Nl.compatMode ? (0, window.parseInt)(z.Jc, 10) : 5) : void 0;
    var Rc = !z.C || 9 <= z.Ug,
    kd = !z.C || 9 <= z.Ug,
    Ol = z.C && !z.E("9"); ! z.D || z.E("528");
    z.B && z.E("1.9b") || z.C && z.E("8") || z.vg && z.E("9.5") || z.D && z.E("528");
    z.B && !z.E("8") || z.C && z.E("9");
    Kc.prototype.toString = function() {
        return this.id
    };
    z.Lc.prototype.stopPropagation = function() {
        this.uk = !0
    };
    z.Lc.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.BJ = !1
    };
    z.Pl = z.C ? "focusin": "DOMFocusIn";
    Nc[" "] = z.p;
    z.x(z.Pc, z.Lc);
    var Sc = [1, 4, 2];
    z.Pc.prototype.init = function(a, b) {
        var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var f = a.relatedTarget;
        f ? z.B && (z.Oc(f, "nodeName") || (f = null)) : "mouseover" == c ? f = a.fromElement: "mouseout" == c && (f = a.toElement);
        this.relatedTarget = f;
        null === d ? (this.offsetX = z.D || void 0 !== a.offsetX ? a.offsetX: a.layerX, this.offsetY = z.D || void 0 !== a.offsetY ? a.offsetY: a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX: a.pageX, this.clientY = void 0 !== a.clientY ? 
        a.clientY: a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX: d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY: d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode: 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.BA = z.Uc ? a.metaKey: a.ctrlKey;
        this.state = a.state;
        this.gc = a;
        a.defaultPrevented && this.preventDefault()
    };
    z.Pc.prototype.stopPropagation = function() {
        z.Pc.v.stopPropagation.call(this);
        this.gc.stopPropagation ? this.gc.stopPropagation() : this.gc.cancelBubble = !0
    };
    z.Pc.prototype.preventDefault = function() {
        z.Pc.v.preventDefault.call(this);
        var a = this.gc;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ol) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch(b) {}
    };
    z.Pc.prototype.DF = z.aa(0);
    var Wc = "closure_listenable_" + (1E6 * Math.random() | 0),
    Yc = 0;
    z.e = z.$c.prototype;
    z.e.add = function(a, b, c, d, f) {
        var g = a.toString();
        a = this.ic[g];
        a || (a = this.ic[g] = [], this.rq++);
        var h = bd(a, b, d, f); - 1 < h ? (b = a[h], c || (b.qr = !1)) : (b = new Xc(b, this.src, g, !!d, f), b.qr = c, a.push(b));
        return b
    };
    z.e.remove = function(a, b, c, d) {
        a = a.toString();
        if (! (a in this.ic)) return ! 1;
        var f = this.ic[a];
        b = bd(f, b, c, d);
        return - 1 < b ? (Zc(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.ic[a], this.rq--), !0) : !1
    };
    z.e.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
        c;
        for (c in this.ic) if (!a || c == a) {
            for (var d = this.ic[c], f = 0; f < d.length; f++)++b,
            Zc(d[f]);
            delete this.ic[c];
            this.rq--
        }
        return b
    };
    z.e.Il = z.aa(2);
    z.e.bo = function(a, b, c, d) {
        a = this.ic[a.toString()];
        var f = -1;
        a && (f = bd(a, b, c, d));
        return - 1 < f ? a[f] : null
    };
    z.e.hasListener = function(a, b) {
        var c = z.ka(a),
        d = c ? a.toString() : "",
        f = z.ka(b);
        return z.Fb(this.ic, 
        function(a) {
            for (var h = 0; h < a.length; ++h) if (! (c && a[h].type != d || f && a[h].gl != b)) return ! 0;
            return ! 1
        })
    };
    var fd = "closure_lm_" + (1E6 * Math.random() | 0),
    od = {},
    id = 0,
    rd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    z.x(z.G, z.xc);
    z.G.prototype[Wc] = !0;
    z.e = z.G.prototype;
    z.e.mi = function() {
        return this.uA
    };
    z.e.Db = function(a) {
        this.uA = a
    };
    z.e.addEventListener = function(a, b, c, d) {
        z.F(this, a, b, c, d)
    };
    z.e.removeEventListener = function(a, b, c, d) {
        z.md(this, a, b, c, d)
    };
    z.e.dispatchEvent = function(a) {
        var b,
        c = this.mi();
        if (c) for (b = []; c; c = c.mi()) b.push(c);
        var c = this.sM,
        d = a.type || a;
        if (z.pa(a)) a = new z.Lc(a, c);
        else if (a instanceof z.Lc) a.target = a.target || c;
        else {
            var f = a;
            a = new z.Lc(d, c);
            z.Mb(a, f)
        }
        var f = !0,
        g;
        if (b) for (var h = b.length - 1; ! a.uk && 0 <= h; h--) g = a.currentTarget = b[h],
        f = z.sd(g, d, !0, a) && f;
        a.uk || (g = a.currentTarget = c, f = z.sd(g, d, !0, a) && f, a.uk || (f = z.sd(g, d, !1, a) && f));
        if (b) for (h = 0; ! a.uk && h < b.length; h++) g = a.currentTarget = b[h],
        f = z.sd(g, d, !1, a) && f;
        return f
    };
    z.e.D = function() {
        z.G.v.D.call(this);
        this.ae && this.ae.removeAll(void 0);
        this.uA = null
    };
    z.e.g = function(a, b, c, d) {
        return this.ae.add(String(a), b, !1, c, d)
    };
    z.e.ya = function(a, b, c, d) {
        return this.ae.add(String(a), b, !0, c, d)
    };
    z.e.qa = function(a, b, c, d) {
        return this.ae.remove(String(a), b, c, d)
    };
    z.e.Il = z.aa(1);
    z.e.bo = function(a, b, c, d) {
        return this.ae.bo(String(a), b, c, d)
    };
    z.e.hasListener = function(a, b) {
        return this.ae.hasListener(z.ka(a) ? String(a) : void 0, b)
    };
    z.x(z.td, z.G);
    z.td.prototype.enabled = !1;
    z.ud = z.t;
    z.e = z.td.prototype;
    z.e.ma = null;
    z.e.setInterval = function(a) {
        this.bh = a;
        this.ma && this.enabled ? (this.stop(), this.start()) : this.ma && this.stop()
    };
    z.e.tW = function() {
        if (this.enabled) {
            var a = (0, z.I)() - this.Az;
            0 < a && a < .8 * this.bh ? this.ma = this.Nm.setTimeout(this.uw, this.bh - a) : (this.ma && (this.Nm.clearTimeout(this.ma), this.ma = null), this.dispatchEvent("tick"), this.enabled && (this.ma = this.Nm.setTimeout(this.uw, this.bh), this.Az = (0, z.I)()))
        }
    };
    z.e.start = function() {
        this.enabled = !0;
        this.ma || (this.ma = this.Nm.setTimeout(this.uw, this.bh), this.Az = (0, z.I)())
    };
    z.e.stop = function() {
        this.enabled = !1;
        this.ma && (this.Nm.clearTimeout(this.ma), this.ma = null)
    };
    z.e.D = function() {
        z.td.v.D.call(this);
        this.stop();
        delete this.Nm
    };
    z.x(z.xd, z.xc);
    var zd = [];
    z.e = z.xd.prototype;
    z.e.g = function(a, b, c, d) {
        return z.yd(this, a, b, c, d)
    };
    z.e.ya = function(a, b, c, d) {
        return Ad(this, a, b, c, d)
    };
    z.e.qa = function(a, b, c, d, f) {
        if (z.na(b)) for (var g = 0; g < b.length; g++) this.qa(a, b[g], c, d, f);
        else c = c || this.handleEvent,
        f = f || this.ga || this,
        c = z.cd(c),
        d = !!d,
        b = z.Vc(a) ? a.bo(b, c, d, f) : a ? (a = z.ed(a)) ? a.bo(b, c, d, f) : null: null,
        b && (z.nd(b), delete this.Za[b.key]);
        return this
    };
    z.e.removeAll = function() {
        z.Db(this.Za, 
        function(a, b) {
            this.Za.hasOwnProperty(b) && z.nd(a)
        },
        this);
        this.Za = {}
    };
    z.e.D = function() {
        z.xd.v.D.call(this);
        this.removeAll()
    };
    z.e.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    z.Bd.prototype.Pj = !0;
    z.Cd = {};
    z.Bd.prototype.Xg = function() {
        return this.HA
    };
    z.Bd.prototype.zo = function(a) {
        this.HA = a;
        return this
    };
    z.Ql = (new z.Bd).zo("");
    z.Dd.prototype.Ny = !0;
    z.Dd.prototype.Fl = z.aa(3);
    z.Dd.prototype.Pj = !0;
    z.Dd.prototype.Xg = function() {
        return this.tk
    };
    var Fd = {};
    z.Dd.prototype.zo = function(a, b) {
        this.tk = a;
        this.LE = b;
        return this
    };
    z.Hd("\x3c!DOCTYPE html\x3e", 0);
    var Nj = z.Hd("", 0);
    z.Rl = Math.sign || 
    function(a) {
        return 0 < a ? 1: 0 > a ? -1: a
    };
    z.Od = "StopIteration" in z.t ? z.t.StopIteration: {
        message: "StopIteration",
        stack: ""
    };
    z.Ld.prototype.next = function() {
        throw z.Od;
    };
    z.Ld.prototype.gd = function() {
        return this
    };
    z.e = z.Rd.prototype;
    z.e.lb = function() {
        return this.Ka
    };
    z.e.Wc = function() {
        z.Td(this);
        for (var a = [], b = 0; b < this.Za.length; b++) a.push(this.Ib[this.Za[b]]);
        return a
    };
    z.e.ld = function() {
        z.Td(this);
        return this.Za.concat()
    };
    z.e.Qf = function(a) {
        return z.Ud(this.Ib, a)
    };
    z.e.ai = z.aa(6);
    z.e.equals = function(a, b) {
        if (this === a) return ! 0;
        if (this.Ka != a.lb()) return ! 1;
        var c = b || Sd;
        z.Td(this);
        for (var d, f = 0; d = this.Za[f]; f++) if (!c(this.get(d), a.get(d))) return ! 1;
        return ! 0
    };
    z.e.dh = function() {
        return 0 == this.Ka
    };
    z.e.clear = function() {
        this.Ib = {};
        this.yq = this.Ka = this.Za.length = 0
    };
    z.e.remove = function(a) {
        return z.Ud(this.Ib, a) ? (delete this.Ib[a], this.Ka--, this.yq++, this.Za.length > 2 * this.Ka && z.Td(this), !0) : !1
    };
    z.e.get = function(a, b) {
        return z.Ud(this.Ib, a) ? this.Ib[a] : b
    };
    z.e.set = function(a, b) {
        z.Ud(this.Ib, a) || (this.Ka++, this.Za.push(a), this.yq++);
        this.Ib[a] = b
    };
    z.e.addAll = function(a) {
        var b;
        a instanceof z.Rd ? (b = a.ld(), a = a.Wc()) : (b = z.Hb(a), a = z.Gb(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    z.e.forEach = function(a, b) {
        for (var c = this.ld(), d = 0; d < c.length; d++) {
            var f = c[d],
            g = this.get(f);
            a.call(b, g, f, this)
        }
    };
    z.e.clone = function() {
        return new z.Rd(this)
    };
    z.e.gd = function(a) {
        z.Td(this);
        var b = 0,
        c = this.yq,
        d = this,
        f = new z.Ld;
        f.next = function() {
            if (c != d.yq) throw Error("The map has changed since the iterator was created");
            if (b >= d.Za.length) throw z.Od;
            var f = d.Za[b++];
            return a ? f: d.Ib[f]
        };
        return f
    };
    z.x(Vd, z.xc);
    Vd.prototype.dy = function() {
        return this.tu
    };
    Vd.prototype.D = function() {
        Vd.v.D.call(this);
        this.tu = this.Jk = null
    };
    z.Sl = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
    Wd.prototype.MD = null;
    var Tl;
    z.x(Zd, Wd);
    Tl = new Zd;
    var ce;
    z.re = /^(?:([^:/ ? #.] + ) : ) ? ( ? :\ / \ / ( ? :([ ^ /?#]*)@)?([^/# ? ] * ?)( ? ::([0 - 9] + )) ? ( ? =[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/; ce = /#|$/; z.x(z.de, z.G);
    var ee = "", se = /^https?$/i, Ul = ["POST", "PUT"]; z.e = z.de.prototype;
    z.e.send = function(a, b, c, d) {
        if (this.ea) throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.zz + "; newUri\x3d" + a);
        b = b ? b.toUpperCase() : "GET";
        this.zz = a;
        this.gt = "";
        this.xx = !1;
        this.Nh = !0;
        this.ea = this.nv ? $d(this.nv) : $d(Tl);
        this.mv = this.nv ? Xd(this.nv) : Xd(Tl);
        this.ea.onreadystatechange = (0, z.q)(this.BI, this);
        this.DU && "onprogress" in this.ea && (this.ea.onprogress = (0, z.q)(function(a) {
            this.AI(a, !0)
        },
        this), this.ea.upload && (this.ea.upload.onprogress = (0, z.q)(this.AI, this)));
        try {
            this.Oy = !0,
            this.ea.open(b, String(a), !0),
            this.Oy = !1
        } catch(g) {
            this.Xr(5, g);
            return
        }
        a = c || "";
        var f = this.headers.clone();
        d && Kd(d, 
        function(a, b) {
            f.set(b, a)
        });
        d = z.qb(f.ld(), ge);
        c = z.t.FormData && a instanceof z.t.FormData; ! z.A(Ul, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
        f.forEach(function(a, b) {
            this.ea.setRequestHeader(b, a)
        },
        this);
        this.wJ && (this.ea.responseType = this.wJ);
        Ib(this.ea, "withCredentials") && (this.ea.withCredentials = this.hX);
        try {
            qe(this),
            0 < this.Wu && ((this.kC = fe(this.ea)) ? 
            (this.ea.timeout = this.Wu, this.ea.ontimeout = (0, z.q)(this.iq, this)) : this.Vu = z.vd(this.iq, this.Wu, this)),
            this.Ps = !0,
            this.ea.send(a),
            this.Ps = !1
        } catch(g) {
            this.Xr(5, g)
        }
    }; z.e.iq = function() {
        "undefined" != typeof z.je && this.ea && (this.gt = "Timed out after " + this.Wu + "ms, aborting", this.dispatchEvent("timeout"), this.abort(8))
    }; z.e.Xr = function(a, b) {
        this.Nh = !1;
        this.ea && (this.Qj = !0, this.ea.abort(), this.Qj = !1);
        this.gt = b;
        he(this);
        oe(this)
    };
    z.e.abort = function() {
        this.ea && this.Nh && (this.Nh = !1, this.Qj = !0, this.ea.abort(), this.Qj = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), oe(this))
    }; z.e.D = function() {
        this.ea && (this.Nh && (this.Nh = !1, this.Qj = !0, this.ea.abort(), this.Qj = !1), oe(this, !0));
        z.de.v.D.call(this)
    }; z.e.BI = function() {
        this.Fd || (this.Oy || this.Ps || this.Qj ? ie(this) : this.qT())
    }; z.e.qT = function() {
        ie(this)
    }; z.e.AI = function(a, b) {
        this.dispatchEvent(pe(a, "progress"));
        this.dispatchEvent(pe(a, b ? "downloadprogress": "uploadprogress"))
    };
    z.e.uc = function() {
        return !! this.ea
    }; z.e.Je = function() {
        return 4 == ke(this)
    }; z.e.getResponseHeader = function(a) {
        return this.ea && this.Je() ? this.ea.getResponseHeader(a) : void 0
    }; z.e.getAllResponseHeaders = function() {
        return this.ea && this.Je() ? this.ea.getAllResponseHeaders() : ""
    }; z.x(ue, z.G); z.e = ue.prototype; z.e.dy = function() {
        return this.Rl.dy()
    }; z.e.load = function() {
        for (var a = this.T, b = this.Rl.Jk, c = 0; c < b.length; c++) {
            var d = new z.de;
            a.g(d, "complete", (0, z.q)(this.NP, this, c));
            d.send(b[c])
        }
    }; z.e.NP = function(a, b) {
        var c = b.target;
        ne(c) ? this.yy(a, c) : this.qy(a, c)
    }; z.e.yy = function(a, b) {
        var c = z.te(b);
        this.Rl.tu[a] = c;
        a: {
            var d = this.Rl,
            c = d.tu;
            if (c.length == d.Jk.length) {
                for (d = 0; d < c.length; d++) if (null == c[d]) {
                    c = !1;
                    break a
                }
                c = !0
            } else c = !1
        }
        c && this.dispatchEvent("success");
        b.H()
    };
    z.e.qy = function(a, b) {
        this.dispatchEvent("error");
        b.H()
    }; z.e.D = function() {
        ue.v.D.call(this);
        this.T.H();
        this.T = null;
        this.Rl.H();
        this.Rl = null
    };
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    z.e = ve.prototype; z.e.cancel = function(a) {
        if (this.hi) this.th instanceof ve && this.th.cancel();
        else {
            if (this.Ra) {
                var b = this.Ra;
                delete this.Ra;
                a ? b.cancel(a) : (b.vw--, 0 >= b.vw && b.cancel())
            }
            this.mI ? this.mI.call(this.GE, this) : this.tB = !0;
            this.hi || ye(this, new Ee(this))
        }
    }; z.e.nE = function(a, b) {
        this.qw = !1;
        we(this, a, b)
    }; z.e.Xh = function() {
        if (this.hi) {
            if (!this.tB) throw new De(this);
            this.tB = !1
        }
    }; z.e.Vh = function(a) {
        this.Xh();
        we(this, !0, a)
    };
    z.e.then = function(a, b, c) {
        var d,
        f,
        g = new ec(function(a, b) {
            d = a;
            f = b
        });
        ze(this, d, 
        function(a) {
            a instanceof Ee ? g.cancel() : f(a)
        });
        return g.then(a, b, c)
    }; Fa(ve); z.x(De, Ia); De.prototype.message = "Deferred has already fired"; De.prototype.name = "AlreadyCalledError"; z.x(Ee, Ia); Ee.prototype.message = "Deferred was canceled"; Ee.prototype.name = "CanceledError"; Ce.prototype.rW = function() {
        delete Be[this.qb];
        throw this.Xr;
    };
    var Be = {};
    var Ue, gf, qf; Ue = !z.C || 9 <= z.Ug; gf = !z.B && !z.C || z.C && 9 <= z.Ug || z.B && z.E("1.9.1"); qf = z.C && !z.E("9"); z.Vl = z.C && !(9 <= z.Ug); z.e = z.Ge.prototype; z.e.clone = function() {
        return new z.Ge(this.x, this.y)
    }; z.e.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }; z.e.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }; z.e.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }; z.e.translate = function(a, b) {
        a instanceof z.Ge ? (this.x += a.x, this.y += a.y) : (this.x += a, z.qa(b) && (this.y += b));
        return this
    };
    z.e.scale = function(a, b) {
        var c = z.qa(b) ? b: a;
        this.x *= a;
        this.y *= c;
        return this
    }; z.e = z.He.prototype; z.e.clone = function() {
        return new z.He(this.width, this.height)
    }; z.e.WM = function() {
        return this.width * this.height
    }; z.e.dh = function() {
        return ! this.WM()
    }; z.e.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }; z.e.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }; z.e.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    z.e.scale = function(a, b) {
        var c = z.qa(b) ? b: a;
        this.width *= a;
        this.height *= c;
        return this
    };
    var Oe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    sf = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    tf = {
        IMG: " ",
        BR: "\n"
    }; z.e = z.Ie.prototype; z.e.K = z.J; z.e.ua = function() {
        return this.La
    }; z.e.m = function(a) {
        return z.pa(a) ? this.La.getElementById(a) : a
    }; z.e.$ = z.Ie.prototype.m; z.e.$f = z.aa(8);
    z.e.B = function(a, b, c) {
        return Te(this.La, arguments)
    }; z.e.createElement = function(a) {
        return this.La.createElement(a)
    }; z.e.createTextNode = function(a) {
        return this.La.createTextNode(String(a))
    }; z.e.Qw = z.aa(9); z.e.Va = function() {
        var a = this.La;
        return a.parentWindow || a.defaultView
    }; z.e.Dl = z.aa(10); z.e.appendChild = function(a, b) {
        a.appendChild(b)
    }; z.e.append = z.$e; z.e.canHaveChildren = z.Ze; z.e.Bp = z.af; z.e.Ys = z.bf; z.e.fz = z.cf; z.e.removeNode = z.P; z.e.LO = z.ef; z.e.ZO = z.ff; z.e.LF = z.hf; z.e.isElement = z.kf;
    z.e.isWindow = lf; z.e.contains = z.mf; z.e.eg = z.aa(12); z.e.XO = z.uf;
    var yf = [], Ef = 0, Df = 1; z.x(Cf, Ia); z.Wl = Rb(); z.Vi = z.Ec() || z.Ab("iPod"); z.Wj = z.Ab("iPad"); z.Xl = z.Ab("Android") && !(Sb() || Rb() || Pb() || z.Ab("Silk")); z.Jf = Sb(); z.Yl = z.Ab("Safari") && !(Sb() || z.Ab("Coast") || Pb() || z.Ab("Edge") || z.Ab("Silk") || z.Ab("Android")) && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod")); z.x(Gf, z.G); z.e = Gf.prototype; z.e.Mr = !1; z.e.cK = !1; z.e.$R = function(a, b, c, d) {
        var f = this.mh[a] || new Pf;
        f.DH = !0;
        f.HB = c || null;
        f.yx = d || null;
        if (this.mh[a]) null != f.UA && Hf(this, a);
        else {
            this.mh[a] = f;
            c = [];
            for (d = 0; d < a.length; d++) z.wb(c, b[a[d]].Jk); ! this.Mr || this.cK || this.Mr && (z.Jf || Rb() && 0 <= z.$a(Tb(), "36")) ? (this.mh[a].uJ = c, b = new ue(c), c = this.T, c.g(b, "success", (0, z.q)(this.yy, this, b, a)), c.g(b, "error", (0, z.q)(this.qy, this, b, a)), b.load()) : xf(c)
        }
    };
    z.e.yy = function(a, b) {
        var c = this.mh[b];
        c.UA = a.dy();
        c.DH && Hf(this, b);
        z.vd(a.H, 5, a)
    }; z.e.qy = function(a, b, c) {
        var d = this.mh[b];
        d && (delete this.mh[b], b = d.yx, this.dispatchEvent(new Lf(0, void 0)), b && b(c));
        z.vd(a.H, 5, a)
    }; z.e.D = function() {
        Gf.v.D.call(this);
        this.T.H();
        this.T = null
    };
    var Mf = new Kc("a"), Nf = new Kc("b"), Of = new Kc("c"); z.x(Kf, z.Lc); z.x(If, z.Lc); z.x(Lf, z.Lc); z.x(Qf, z.xc); Qf.prototype.Fn = function() {
        return this.rE ? this.rE() : {}
    }; Qf.prototype.kx = function(a) {
        if (this.SE) this.SE(a);
        else if (z.ta(a)) if (z.sa(a.H)) a.H();
        else for (var b in a) delete a[b]
    }; Qf.prototype.D = function() {
        Qf.v.D.call(this);
        for (var a = this.Aj; a.length;) this.kx(a.pop());
        delete this.Aj
    }; Uf.prototype.toString = function() {
        var a = [];
        a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
        this.lC && a.push(" [VarAlloc \x3d ", this.lC, "]");
        return a.join("")
    }; Tf.prototype.toString = function() {
        return null == this.type ? this.dE: "[" + this.type + "] " + this.dE
    };
    z.Sf.prototype.reset = function() {
        for (var a = 0; a < this.Uf.length; a++) {
            var b = this.Yr.id;
            b && Rf(this.Fy, b);
            Rf(this.Yr, this.Uf[a])
        }
        this.Uf.length = 0;
        this.qA.clear();
        this.gK = (0, z.I)();
        this.Kw = this.xK = this.av = this.yK = this.zK = 0;
        b = this.Ck.ld();
        for (a = 0; a < b.length; a++) {
            var c = this.Ck.get(b[a]);
            c.count = 0;
            c.time = 0;
            c.lC = 0;
            Rf(this.AB, c)
        }
        this.Ck.clear()
    }; z.Sf.prototype.Sq = z.aa(13);
    z.Sf.prototype.toString = function() {
        for (var a = [], b = -1, c = [], d = 0; d < this.Uf.length; d++) {
            var f = this.Uf[d];
            1 == f.$r && c.pop();
            a.push(" ", Vf(f, this.gK, b, c.join("")));
            b = f.Zr;
            a.push("\n");
            0 == f.$r && c.push("|  ")
        }
        if (0 != this.qA.lb()) {
            var g = (0, z.I)();
            a.push(" Unstopped timers:\n");
            z.Pd(this.qA, 
            function(b) {
                a.push("  ", b, " (", g - b.startTime, " ms, started at ", Xf(b.startTime), ")\n")
            })
        }
        b = this.Ck.ld();
        for (d = 0; d < b.length; d++) c = this.Ck.get(b[d]),
        1 < c.count && a.push(" TOTAL ", c, "\n");
        a.push("Total tracers created ", this.xK, 
        "\n", "Total comments created ", this.Kw, "\n", "Overhead start: ", this.zK, " ms\n", "Overhead end: ", this.yK, " ms\n", "Overhead comment: ", this.av, " ms\n");
        return a.join("")
    }; new z.Sf; z.x(Yf, z.xc); Zf.prototype.lF = function(a) {
        this.js && (this.js.call(this.ga || null, a), this.js = this.ga = null)
    }; Zf.prototype.abort = function() {
        this.ga = this.js = null
    }; z.x($f, z.xc); z.e = $f.prototype; z.e.Jk = null; z.e.uS = Yf; z.e.Sz = null; z.e.fe = function() {
        return this.qb
    }; z.e.yp = function(a, b) {
        return this.nu(this.lA, a, b)
    }; z.e.nu = function(a, b, c) {
        b = new Zf(b, c);
        a.push(b);
        return b
    }; z.e.vc = function() {
        return !! this.Sz
    }; z.e.mp = function(a) {
        var b = new this.uS;
        a();
        this.Sz = b;
        b = (b = !!bg(this.YE, a())) || !!bg(this.lA, a());
        b || (this.dA.length = 0);
        return b
    }; z.e.cA = function(a) { (a = bg(this.dA, a)) && window.setTimeout(jb("Module errback failures: " + a), 0);
        this.YE.length = 0;
        this.lA.length = 0
    };
    z.e.D = function() {
        $f.v.D.call(this);
        z.Cc(this.Sz)
    }; z.x(cg, z.xc); z.la(cg); cg.prototype.OF = function() {
        return this.XH
    }; cg.prototype.uc = function() {
        return 0 < this.xi.length
    }; cg.prototype.ut = function(a, b, c) {
        b || (this.Ar = 0);
        this.xi = b = ig(this, a);
        this.sh = this.ED ? a: z.vb(b);
        dg(this);
        0 != b.length && (this.Ep.push.apply(this.Ep, b), a = (0, z.q)(this.Gz.$R, this.Gz, z.vb(b), this.Zc, null, (0, z.q)(this.bQ, this, this.sh, b), (0, z.q)(this.cQ, this), !!c), (c = 5E3 * Math.pow(this.Ar, 2)) ? window.setTimeout(a, c) : a())
    };
    cg.prototype.load = function(a, b) {
        var c = [];
        zb([a], c);
        for (var d = [], f = {},
        g = 0; g < c.length; g++) {
            var h = c[g],
            k = this.Zc[h];
            if (!k) throw Error("Unknown module: " + h);
            var m = new ve;
            f[h] = m;
            k.vc() ? m.Vh(this.XH) : (eg(this, h, k, !!b, m), fg(this, h) || d.push(h))
        }
        0 < d.length && hg(this, d);
        return f[a]
    };
    var mg = 4; z.e = cg.prototype; z.e.bQ = function(a, b, c) {
        this.Ar++;
        this.sh = a;
        z.y(b, z.Ba(z.tb, this.Ep), this);
        401 == c ? (lg(this, 0), this.ud.length = 0) : 410 == c ? (og(this, 3), ng(this)) : 3 <= this.Ar ? (og(this, 1), ng(this)) : this.ut(this.sh, !0, 8001 == c)
    };
    z.e.cQ = function() {
        og(this, 2);
        ng(this)
    }; z.e.yp = function(a, b) {
        z.na(a) || (a = [a]);
        for (var c = 0; c < a.length; c++) this.nu(a[c], b)
    }; z.e.nu = function(a, b) {
        var c = this.rr;
        c[a] || (c[a] = []);
        c[a].push(b)
    }; z.e.as = function(a) {
        for (var b = this.rr[a], c = 0; b && c < b.length; c++) b[c](a)
    }; z.e.D = function() {
        cg.v.D.call(this);
        z.Dc(z.Gb(this.Zc), this.nr);
        this.rr = this.ud = this.Sm = this.sh = this.xi = this.Zc = null
    };
    var Zl = cg.ba(), $l = new Gf; $l.Mr = !1; Zl.Gz = $l;
    var am = z.t.PLOVR_MODULE_INFO, bm;
    for (bm in am) Zl.Zc[bm] = new $f(am[bm], bm); Zl.Bo.hi || Zl.Bo.Vh(); Zl.CE == Zl.nr && (Zl.CE = null, Zl.nr.mp((0, z.q)(Zl.OF, Zl)) && lg(Zl, mg), dg(Zl));
    var cm = z.t.PLOVR_MODULE_URIS, dm;
    for (dm in cm) Zl.Zc[dm].Jk = cm[dm]; z.kg("base");
    (function() {
        function a(b, c) {
            return c.length ? a(b[c.shift()], c) : b
        } (0, window.$)(function() {
            var b = (0, window.$)('meta[name\x3d"entry"]'),
            c = b.attr("content");
            if (c) {
                var d = b.data("moduleId");
                if (d) {
                    var f = b.data("params");
                    z.pg(d, 
                    function() {
                        var b = c && a(window, c.split("."));
                        b && b(f)
                    })
                } else window.console.warn("Module id not found!")
            } else window.console.warn("Entry \x3cmeta\x3e not found!")
        })
    })();
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !window.requestAnimationFrame; ++b) window.requestAnimationFrame = window[c + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"];
        if (!window.requestAnimationFrame) {
            var d = 0;
            window.requestAnimationFrame = function(a) {
                var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - d));
                d = b + c;
                return window.setTimeout(function() {
                    a(b + c)
                },
                c)
            };
            window.cancelAnimationFrame || (window.cancelAnimationFrame = 
            function(a) { (0, window.clearTimeout)(a)
            })
        }
    })(); (function() {
        var a = /^\/node\//;
        window.$.ajaxPrefilter(function(b, c) {
            var d = c.data,
            f = d && d.params;
            f && "object" === window.$.type(f) && a.test(c.url) && (d.params = JSON.stringify(f), b.data = window.$.param(d))
        })
    })(); z.e = z.qg.prototype; z.e.clone = function() {
        return new z.qg(this.top, this.right, this.bottom, this.left)
    }; z.e.contains = function(a) {
        return this && a ? a instanceof z.qg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom: !1
    }; z.e.expand = function(a, b, c, d) {
        z.ta(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
        return this
    };
    z.e.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    }; z.e.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    }; z.e.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    z.e.translate = function(a, b) {
        a instanceof z.Ge ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, z.qa(b) && (this.top += b, this.bottom += b));
        return this
    }; z.e.scale = function(a, b) {
        var c = z.qa(b) ? b: a;
        this.left *= a;
        this.right *= a;
        this.top *= c;
        this.bottom *= c;
        return this
    }; z.e = z.rg.prototype; z.e.clone = function() {
        return new z.rg(this.left, this.top, this.width, this.height)
    }; z.e.gz = z.aa(14); z.e.contains = function(a) {
        return a instanceof z.rg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height: a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
    }; z.e.Wg = z.aa(15);
    z.e.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }; z.e.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }; z.e.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    z.e.translate = function(a, b) {
        a instanceof z.Ge ? (this.left += a.x, this.top += a.y) : (this.left += a, z.qa(b) && (this.top += b));
        return this
    }; z.e.scale = function(a, b) {
        var c = z.qa(b) ? b: a;
        this.left *= a;
        this.width *= a;
        this.top *= c;
        this.height *= c;
        return this
    };
    var ug, Sg; ug = {}; z.em = z.B ? "MozUserSelect": z.D || z.Gc ? "WebkitUserSelect": null; Sg = {
        thin: 2,
        medium: 4,
        thick: 6
    }; z.la(z.Wg); z.Wg.prototype.Wz = 0; z.x(z.R, z.G); z.R.prototype.SQ = z.Wg.ba();
    var Yg = null; z.e = z.R.prototype; z.e.fe = function() {
        return this.qb || (this.qb = z.Xg(this.SQ))
    }; z.e.m = function() {
        return this.h
    }; z.e.$f = z.aa(7); z.e.o = function() {
        this.pi || (this.pi = new z.xd(this));
        return this.pi
    }; z.e.getParent = function() {
        return this.Ra
    }; z.e.Db = function(a) {
        if (this.Ra && this.Ra != a) throw Error("Method not supported");
        z.R.v.Db.call(this, a)
    }; z.e.K = function() {
        return this.da
    }; z.e.B = function() {
        this.h = this.da.createElement("DIV")
    }; z.e.render = function(a) {
        this.Cp(a)
    };
    z.e.Cp = function(a, b) {
        if (this.wa) throw Error("Component already rendered");
        this.h || this.B();
        a ? a.insertBefore(this.h, b || null) : this.da.ua().body.appendChild(this.h);
        this.Ra && !this.Ra.wa || this.C()
    }; z.e.w = function(a) {
        if (this.wa) throw Error("Component already rendered");
        if (a && this.Ob(a)) {
            this.cL = !0;
            var b = z.Je(a);
            this.da && this.da.ua() == b || (this.da = z.J(a));
            this.Z(a);
            this.C()
        } else throw Error("Invalid element to decorate");
    }; z.e.Ob = function() {
        return ! 0
    }; z.e.Z = function(a) {
        this.h = a
    };
    z.e.C = function() {
        this.wa = !0;
        z.ch(this, 
        function(a) { ! a.wa && a.m() && a.C()
        })
    }; z.e.Hb = function() {
        z.ch(this, 
        function(a) {
            a.wa && a.Hb()
        });
        this.pi && this.pi.removeAll();
        this.wa = !1
    }; z.e.D = function() {
        this.wa && this.Hb();
        this.pi && (this.pi.H(), delete this.pi);
        z.ch(this, 
        function(a) {
            a.H()
        }); ! this.cL && this.h && z.P(this.h);
        this.Ra = this.Rz = this.h = this.Xe = this.Rc = null;
        z.R.v.D.call(this)
    }; z.e.L = function(a, b) {
        this.Uk(a, z.ah(this), b)
    };
    z.e.Uk = function(a, b, c) {
        if (a.wa && (c || !this.wa)) throw Error("Component already rendered");
        if (0 > b || b > z.ah(this)) throw Error("Child component index out of bounds");
        this.Xe && this.Rc || (this.Xe = {},
        this.Rc = []);
        if (a.getParent() == this) {
            var d = a.fe();
            this.Xe[d] = a;
            z.tb(this.Rc, a)
        } else z.Lb(this.Xe, a.fe(), a);
        z.Zg(a, this);
        z.xb(this.Rc, b, 0, a);
        a.wa && this.wa && a.getParent() == this ? (c = this.S(), b = c.childNodes[b] || null, b != a.m() && c.insertBefore(a.m(), b)) : c ? (this.h || this.B(), b = z.bh(this, b + 1), a.Cp(this.S(), b ? b.h: null)) : this.wa && 
        !a.wa && a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.C()
    }; z.e.S = function() {
        return this.h
    }; z.e.qd = z.aa(16); z.e.Ah = z.aa(17); z.e.removeChild = function(a, b) {
        if (a) {
            var c = z.pa(a) ? a: a.fe();
            a = z.$g(this, c);
            c && a && (z.Kb(this.Xe, c), z.tb(this.Rc, a), b && (a.Hb(), a.h && z.P(a.h)), z.Zg(a, null))
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    }; z.e.Bp = z.aa(11);
    var fm;
    (function(a) {
        fm = "div[contenteditable];.ac-row;.ac-row *;.goog-menu *;.goog-menu-button *;.goog-toolbar-button *;.goog-link-button *;.ee-menu-palette-cell *;.ee-palette-cell *".split(";");
        if (a) {
            var b = a.prototype.needsClick,
            c;
            if (window.HTMLElement) {
                var d = z.qb(["matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector"], 
                function(a) {
                    return window.HTMLElement.prototype[a]
                });
                c = d && window.HTMLElement.prototype[d]
            }
            var f = c ? 
            function(a, b) {
                return c.call(a, b)
            }: function(a, b) {
                return (0, window.$)(a).is(b)
            };
            a.prototype.needsClick = 
            function(a) {
                return z.pb(fm, 
                function(b) {
                    return f(a, b)
                }) ? !0: b.call(this, a)
            }
        }
    })(window.FastClick); z.gm = "/update"; z.Ni = !1;
    var kh, ph, om, pm; z.hm = {}; z.sm = {}; z.tm = z.ob((0, window.$)("script.json-inline"), 
    function(a, b) {
        var c = (0, window.$)(b).data("name");
        a[c] = JSON.parse(b.text);
        return a
    },
    {});
    (function(a) {
        z.T = [];
        z.T.Fb = function() {
            return ! 1
        };
        z.T.de = function() {
            return ""
        };
        z.Ik = !1;
        z.Db(a, 
        function(a, c) {
            switch (c) {
            case "redirect_to":
                z.im = a;
                break;
            case "current_user":
                z.T = a;
                z.T.AF = a[0];
                z.T.Fb = function() {
                    return "-1" !== z.T.ig
                };
                z.T.zD = a[2];
                z.T.ig = a[3];
                z.T.wG = a[4];
                z.T.ue = a[7];
                z.T.Pn = a[8];
                z.T.NY = a[9];
                z.T.JY = a[10];
                z.T.Vz = a[11];
                z.T.Hs = a[12];
                z.T.IY = a[13];
                z.T.de = function(a) {
                    var b = z.T.zD;
                    return a ? b.replace("_s", "_" + a) : b
                };
                z.T.dI = a[14];
                z.T.Jd = a[15];
                break;
            case "user_status":
                z.jm = a;
                z.jm.eF = a[0];
                z.jm.pw = a[1];
                break;
                case "env":
                z.Mb(z.sm, {
                    DJ: a[0],
                    zn: ("https:" === window.document.location.protocol ? "https://": "http://") + a[1],
                    Ab: a[2],
                    TG: a[3],
                    BB: ("https:" === window.document.location.protocol ? "https://static.": "http://static.") + a[0] + "/static",
                    uq: ("https:" === window.document.location.protocol ? "https://upload.": "http://upload.") + a[0] + ":" + window.location.port,
                    jH: !1,
                    AR: a[4]
                });
                break;
            case "current_question":
                z.S = {
                    pa: a.qid,
                    bb: a.urlToken,
                    status: a.status,
                    mz: a.isLocked,
                    hn: a.askAboutMember,
                    uO: a.editPermission,
                    rb: a.isAnon,
                    XV: a.showInvitePanel,
                    yY: a.detailEditReasonRequired,
                    Ho: a.isEditLocked,
                    Jd: a.isOrg,
                    xe: 0,
                    wr: 0,
                    Pm: null,
                    vY: 0,
                    LY: !1,
                    cZ: !0,
                    rh: [],
                    qY: []
                };
                break;
            case "current_question_bio":
                z.km = a;
                break;
            case "my_answer":
                z.lm = a;
                break;
            case "current_question_owner":
                z.T.rh = a;
                break;
            case "current_answer":
                kh = a;
                break;
            case "bio":
                z.mm = a;
                break;
            case "current_topic":
                z.oh = a;
                break;
            case "current_people":
                z.mh = a;
                z.mh.AF = a[0];
                z.mh.bb = a[1];
                z.mh.id = a[3];
                break;
            case "current_roundtable":
                z.nh = a;
                break;
            case "current_list":
                z.lh = a;
                z.lh.bb = a[2];
                break;
            case "current_live":
                ph = 
                a;
                break;
            case "block_topic":
                z.nm = a;
                break;
            case "draft":
                z.hm.Wd = a.length ? a: null;
                break;
            case "disabled_components":
                om = a;
                break;
            case "comet_path":
                z.gm = a;
                break;
            case "is_org_page":
                z.Ik = !!a;
                break;
            case "permissions":
                pm = a,
                z.qm = function(a) {
                    return z.A(pm, a)
                }
            }
        });
        z.S && (z.S.ZG = !1);
        z.rm = function(a) {
            return !! om && z.A(om, a)
        };
        window.navigator.userAgent.match(/iPad/i) && (z.sm.jH = !0, z.sm.Ab = !0);
        if (z.sm.DJ) try {
            window.document.domain = z.sm.DJ
        } catch(b) {
            window.console && window.console.warn(b)
        }
        z.sm.zn && (z.gm = z.sm.zn + z.gm)
    })(z.tm);
    var Ti, Si, ck; z.um = /iPad|iPhone/.test(window.navigator.userAgent); z.vm = z.sm.AR; Ti = /Android/.test(window.navigator.userAgent); z.wm = z.sm.Ab; z.fh = /MicroMessenger/.test(window.navigator.userAgent); Si = /Weibo/.test(window.navigator.userAgent); z.xm = /UCBrowser/.test(window.navigator.userAgent); ck = /Mobile/.test(window.navigator.userAgent) && /CriOS/.test(window.navigator.userAgent); z.ym = z.um && !!window.indexedDB;
    var jh = {
        title: window.document.title,
        desc: "与世界分享你的知识、经验和见解",
        link: window.location.href,
        imgUrl: window.location.protocol + "//" + window.location.hostname + "/static/revved/img/wechat-share-image.6e8f6318.png",
        type: "link"
    }; z.e = z.qh.prototype; z.e.toString = function() {
        var a = [],
        b = this.Gi;
        b && a.push(xh(b, zm, !0), ":");
        var c = this.Pg;
        if (c || "file" == b) a.push("//"),
        (b = this.oe) && a.push(xh(b, zm, !0), "@"),
        a.push((0, window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c = this.om,
        null != c && a.push(":", String(c));
        if (c = this.Ne) this.Pg && "/" != c.charAt(0) && a.push("/"),
        a.push(xh(c, "/" == c.charAt(0) ? Am: Bm, !0)); (c = this.le.toString()) && a.push("?", c); (c = this.zj) && a.push("#", xh(c, Cm));
        return a.join("")
    };
    z.e.resolve = function(a) {
        var b = this.clone(),
        c = !!a.Gi;
        c ? rh(b, a.Gi) : c = !!a.oe;
        if (c) {
            var d = a.oe;
            z.sh(b);
            b.oe = d
        } else c = !!a.Pg;
        c ? (d = a.Pg, z.sh(b), b.Pg = d) : c = null != a.om;
        d = a.Ne;
        if (c) th(b, a.om);
        else if (c = !!a.Ne) {
            if ("/" != d.charAt(0)) if (this.Pg && !this.Ne) d = "/" + d;
            else {
                var f = b.Ne.lastIndexOf("/"); - 1 != f && (d = b.Ne.substr(0, f + 1) + d)
            }
            f = d;
            if (".." == f || "." == f) d = "";
            else if (z.Va(f, "./") || z.Va(f, "/.")) {
                for (var d = z.Ja(f, "/"), f = f.split("/"), g = [], h = 0; h < f.length;) {
                    var k = f[h++];
                    "." == k ? d && h == f.length && g.push("") : ".." == k ? ((1 < g.length || 
                    1 == g.length && "" != g[0]) && g.pop(), d && h == f.length && g.push("")) : (g.push(k), d = !0)
                }
                d = g.join("/")
            } else d = f
        }
        c ? (z.sh(b), b.Ne = d) : c = "" !== a.le.toString();
        c ? uh(b, vh(a.le.toString())) : c = !!a.zj;
        c && (a = a.zj, z.sh(b), b.zj = a);
        return b
    }; z.e.clone = function() {
        return new z.qh(this)
    }; z.e.Ce = function() {
        return this.le
    }; z.e.jB = function(a) {
        this.Fe = a;
        this.le && this.le.jB(a);
        return this
    };
    var zm = /[#\/\?@]/g, Bm = /[\#\?:]/g, Am = /[\#\?]/g, yh = /[\#\?@]/g, Cm = /#/g; z.e = z.wh.prototype; z.e.lb = function() {
        Ch(this);
        return this.Ka
    };
    z.e.add = function(a, b) {
        Ch(this);
        this.$d = null;
        a = Dh(this, a);
        var c = this.Lb.get(a);
        c || this.Lb.set(a, c = []);
        c.push(b);
        this.Ka++;
        return this
    }; z.e.remove = function(a) {
        Ch(this);
        a = Dh(this, a);
        return this.Lb.Qf(a) ? (this.$d = null, this.Ka -= this.Lb.get(a).length, this.Lb.remove(a)) : !1
    }; z.e.clear = function() {
        this.Lb = this.$d = null;
        this.Ka = 0
    }; z.e.dh = function() {
        Ch(this);
        return 0 == this.Ka
    }; z.e.Qf = function(a) {
        Ch(this);
        a = Dh(this, a);
        return this.Lb.Qf(a)
    }; z.e.ai = z.aa(5);
    z.e.ld = function() {
        Ch(this);
        for (var a = this.Lb.Wc(), b = this.Lb.ld(), c = [], d = 0; d < b.length; d++) for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
        return c
    }; z.e.Wc = function(a) {
        Ch(this);
        var b = [];
        if (z.pa(a)) this.Qf(a) && (b = z.ub(b, this.Lb.get(Dh(this, a))));
        else {
            a = this.Lb.Wc();
            for (var c = 0; c < a.length; c++) b = z.ub(b, a[c])
        }
        return b
    }; z.e.set = function(a, b) {
        Ch(this);
        this.$d = null;
        a = Dh(this, a);
        this.Qf(a) && (this.Ka -= this.Lb.get(a).length);
        this.Lb.set(a, [b]);
        this.Ka++;
        return this
    };
    z.e.get = function(a, b) {
        var c = a ? this.Wc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }; z.e.toString = function() {
        if (this.$d) return this.$d;
        if (!this.Lb) return "";
        for (var a = [], b = this.Lb.ld(), c = 0; c < b.length; c++) for (var d = b[c], f = (0, window.encodeURIComponent)(String(d)), d = this.Wc(d), g = 0; g < d.length; g++) {
            var h = f;
            "" !== d[g] && (h += "\x3d" + (0, window.encodeURIComponent)(String(d[g])));
            a.push(h)
        }
        return this.$d = a.join("\x26")
    }; z.e.clone = function() {
        var a = new z.wh;
        a.$d = this.$d;
        this.Lb && (a.Lb = this.Lb.clone(), a.Ka = this.Ka);
        return a
    };
    z.e.jB = function(a) {
        a && !this.Fe && (Ch(this), this.$d = null, this.Lb.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.$d = null, this.Lb.set(Dh(this, d), z.vb(a)), this.Ka += a.length))
        },
        this));
        this.Fe = a
    }; z.e.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Kd(arguments[b], 
        function(a, b) {
            this.add(b, a)
        },
        this)
    }; z.x(Fh, Eh); Fh.prototype.lb = function() {
        var a = 0;
        z.Pd(this.gd(!0), 
        function() {
            a++
        });
        return a
    }; Fh.prototype.clear = function() {
        var a = z.Qd(this.gd(!0)),
        b = this;
        z.y(a, 
        function(a) {
            b.remove(a)
        })
    }; z.x(Gh, Fh); z.e = Gh.prototype; z.e.$l = function() {
        if (!this.Oc) return ! 1;
        try {
            return this.Oc.setItem("__sak", "1"),
            this.Oc.removeItem("__sak"),
            !0
        } catch(a) {
            return ! 1
        }
    }; z.e.set = function(a, b) {
        try {
            this.Oc.setItem(a, b)
        } catch(c) {
            if (0 == this.Oc.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }; z.e.get = function(a) {
        a = this.Oc.getItem(a);
        if (!z.pa(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    }; z.e.remove = function(a) {
        this.Oc.removeItem(a)
    };
    z.e.lb = function() {
        return this.Oc.length
    }; z.e.gd = function(a) {
        var b = 0,
        c = this.Oc,
        d = new z.Ld;
        d.next = function() {
            if (b >= c.length) throw z.Od;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!z.pa(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    }; z.e.clear = function() {
        this.Oc.clear()
    }; z.e.key = function(a) {
        return this.Oc.key(a)
    }; z.x(Hh, Gh); z.x(Ih, Gh); z.x(Jh, Fh);
    var Mh = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
    },
    Kh = null; z.e = Jh.prototype; z.e.$l = function() {
        return !! this.xd
    }; z.e.set = function(a, b) {
        this.xd.setAttribute(Lh(a), b);
        Nh(this)
    }; z.e.get = function(a) {
        a = this.xd.getAttribute(Lh(a));
        if (!z.pa(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    }; z.e.remove = function(a) {
        this.xd.removeAttribute(Lh(a));
        Nh(this)
    }; z.e.lb = function() {
        return Oh(this).attributes.length
    };
    z.e.gd = function(a) {
        var b = 0,
        c = Oh(this).attributes,
        d = new z.Ld;
        d.next = function() {
            if (b >= c.length) throw z.Od;
            var d = c[b++];
            if (a) return (0, window.decodeURIComponent)(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!z.pa(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    }; z.e.clear = function() {
        for (var a = Oh(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Nh(this)
    }; z.x(Ph, Fh); Ph.prototype.set = function(a, b) {
        this.Wo.set(this.pm + a, b)
    }; Ph.prototype.get = function(a) {
        return this.Wo.get(this.pm + a)
    }; Ph.prototype.remove = function(a) {
        this.Wo.remove(this.pm + a)
    }; Ph.prototype.gd = function(a) {
        var b = this.Wo.gd(!0),
        c = this,
        d = new z.Ld;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.pm.length) != c.pm;) d = b.next();
            return a ? d.substr(c.pm.length) : c.Wo.get(d)
        };
        return d
    };
    var Dm = {
        kM: "UserDataSharedStore",
        create: function(a) {
            return Dm.VN(a) || Dm.WN(a)
        },
        VN: function(a) {
            var b = new Hh;
            return b.$l() ? a ? new Ph(b, a) : b: null
        },
        xY: function(a) {
            var b = new Ih;
            return b.$l() ? a ? new Ph(b, a) : b: null
        },
        WN: function(a) {
            a = new Jh(a || Dm.kM);
            return a.$l() ? a: null
        }
    }; z.Em = {}; z.Ca(z.Em, Dm); z.Em.create = function(a) { (a = Dm.create(a)) || (a = {
            $l: z.Fl,
            get: z.Hl,
            set: z.p,
            remove: z.p
        });
        return a
    }; z.Rh = z.Em.create(); Qh.prototype.gb = function() {
        var a = this.Oc.get(this.rz);
        return a ? JSON.parse(a) : []
    }; Qh.prototype.g = function(a) {
        this.tG.push(a)
    }; Qh.prototype.Ot = function(a) {
        this.tG.forEach(function(b) {
            return b(a)
        })
    }; Qh.prototype.restore = function() {
        var a = this.gb();
        a.length && (this.Ot(a), this.Oc.remove(this.rz))
    };
    var ki;
    ki = {
        ML: ["BC", "AD"],
        LL: ["Before Christ", "Anno Domini"],
        QL: "JFMAMJJASOND".split(""),
        aM: "JFMAMJJASOND".split(""),
        NL: "January February March April May June July August September October November December".split(" "),
        $L: "January February March April May June July August September October November December".split(" "),
        WL: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        cM: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        mM: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        eM: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        YL: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        dM: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        VX: "SMTWTFS".split(""),
        bM: "SMTWTFS".split(""),
        XL: ["Q1", "Q2", "Q3", "Q4"],
        RL: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        IL: ["AM", "PM"],
        QC: ["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"],
        VC: ["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"],
        JL: ["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"],
        RC: 6,
        nY: [5, 6],
        SC: 5
    };
    var ti = /^(\d{4})(?:(?:-?(\d{2})(?:-?(\d{2}))?)|(?:-?(\d{3}))|(?:-?W(\d{2})(?:-?([1-7]))?))?$/, vi = /^(\d{2})(?::?(\d{2})(?::?(\d{2})(\.\d+)?)?)?$/, ui = /Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/;
    Th.prototype.jq = function(a) {
        var b = Math.min(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd),
        c = Math.max(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd);
        if (0 > b && 0 < c) return null;
        if (!a && 0 == b && 0 == c) return "PT0S";
        c = [];
        0 > b && c.push("-");
        c.push("P"); (this.Ud || a) && c.push(Math.abs(this.Ud) + "Y"); (this.Ld || a) && c.push(Math.abs(this.Ld) + "M"); (this.Ed || a) && c.push(Math.abs(this.Ed) + "D");
        if (this.od || this.rd || this.vd || a) c.push("T"),
        (this.od || a) && c.push(Math.abs(this.od) + "H"),
        (this.rd || a) && c.push(Math.abs(this.rd) + "M"),
        (this.vd || a) && c.push(Math.abs(this.vd) + "S");
        return c.join("")
    }; Th.prototype.equals = function(a) {
        return a.Ud == this.Ud && a.Ld == this.Ld && a.Ed == this.Ed && a.od == this.od && a.rd == this.rd && a.vd == this.vd
    }; Th.prototype.clone = function() {
        return new Th(this.Ud, this.Ld, this.Ed, this.od, this.rd, this.vd)
    };
    var Uh = "y", Vh = "m", Wh = "d", Xh = "h", Yh = "n", Zh = "s"; Th.prototype.vW = function(a) {
        return new Th(this.Ud * a, this.Ld * a, this.Ed * a, this.od * a, this.rd * a, this.vd * a)
    };
    Th.prototype.add = function(a) {
        this.Ud += a.Ud;
        this.Ld += a.Ld;
        this.Ed += a.Ed;
        this.od += a.od;
        this.rd += a.rd;
        this.vd += a.vd
    }; z.e = $h.prototype; z.e.gs = ki.RC; z.e.hs = ki.SC; z.e.clone = function() {
        var a = new $h(this.fa);
        a.gs = this.gs;
        a.hs = this.hs;
        return a
    }; z.e.getFullYear = function() {
        return this.fa.getFullYear()
    }; z.e.getYear = function() {
        return this.getFullYear()
    }; z.e.getMonth = function() {
        return this.fa.getMonth()
    }; z.e.getDate = function() {
        return this.fa.getDate()
    }; z.e.getTime = function() {
        return this.fa.getTime()
    };
    z.e.getDay = function() {
        return this.fa.getDay()
    }; z.e.getUTCFullYear = function() {
        return this.fa.getUTCFullYear()
    }; z.e.getUTCMonth = function() {
        return this.fa.getUTCMonth()
    }; z.e.getUTCDate = function() {
        return this.fa.getUTCDate()
    }; z.e.getUTCDay = function() {
        return this.fa.getDay()
    }; z.e.getUTCHours = function() {
        return this.fa.getUTCHours()
    }; z.e.getUTCMinutes = function() {
        return this.fa.getUTCMinutes()
    }; z.e.getTimezoneOffset = function() {
        return this.fa.getTimezoneOffset()
    };
    z.e.set = function(a) {
        this.fa = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    }; z.e.setFullYear = function(a) {
        this.fa.setFullYear(a)
    }; z.e.setYear = function(a) {
        this.setFullYear(a)
    }; z.e.setMonth = function(a) {
        this.fa.setMonth(a)
    }; z.e.setDate = function(a) {
        this.fa.setDate(a)
    }; z.e.setTime = function(a) {
        this.fa.setTime(a)
    }; z.e.setUTCFullYear = function(a) {
        this.fa.setUTCFullYear(a)
    }; z.e.setUTCMonth = function(a) {
        this.fa.setUTCMonth(a)
    }; z.e.setUTCDate = function(a) {
        this.fa.setUTCDate(a)
    };
    z.e.add = function(a) {
        if (a.Ud || a.Ld) {
            var b = this.getMonth() + a.Ld + 12 * a.Ud,
            c = this.getYear() + Math.floor(b / 12),
            b = b % 12;
            0 > b && (b += 12);
            var d;
            a: {
                switch (b) {
                case 1:
                    d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28: 29;
                    break a;
                case 5:
                case 8:
                case 10:
                case 3:
                    d = 30;
                    break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.setDate(1);
            this.setFullYear(c);
            this.setMonth(b);
            this.setDate(d)
        }
        a.Ed && (a = new Date((new Date(this.getYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.Ed), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), 
        this.setDate(a.getDate()), bi(this, a.getDate()))
    }; z.e.jq = function(a, b) {
        return [this.getFullYear(), Ya(this.getMonth() + 1, 2), Ya(this.getDate(), 2)].join(a ? "-": "") + (b ? ci(this) : "")
    }; z.e.equals = function(a) {
        return ! (!a || this.getYear() != a.getYear() || this.getMonth() != a.getMonth() || this.getDate() != a.getDate())
    }; z.e.toString = function() {
        return this.jq()
    }; z.e.valueOf = function() {
        return this.fa.valueOf()
    }; z.x(di, $h); z.e = di.prototype; z.e.getHours = function() {
        return this.fa.getHours()
    }; z.e.getMinutes = function() {
        return this.fa.getMinutes()
    };
    z.e.getSeconds = function() {
        return this.fa.getSeconds()
    }; z.e.getMilliseconds = function() {
        return this.fa.getMilliseconds()
    }; z.e.getUTCDay = function() {
        return this.fa.getUTCDay()
    }; z.e.getUTCHours = function() {
        return this.fa.getUTCHours()
    }; z.e.getUTCMinutes = function() {
        return this.fa.getUTCMinutes()
    }; z.e.getUTCSeconds = function() {
        return this.fa.getUTCSeconds()
    }; z.e.getUTCMilliseconds = function() {
        return this.fa.getUTCMilliseconds()
    }; z.e.setHours = function(a) {
        this.fa.setHours(a)
    }; z.e.setMinutes = function(a) {
        this.fa.setMinutes(a)
    };
    z.e.setSeconds = function(a) {
        this.fa.setSeconds(a)
    }; z.e.setMilliseconds = function(a) {
        this.fa.setMilliseconds(a)
    }; z.e.setUTCHours = function(a) {
        this.fa.setUTCHours(a)
    }; z.e.setUTCMinutes = function(a) {
        this.fa.setUTCMinutes(a)
    }; z.e.setUTCSeconds = function(a) {
        this.fa.setUTCSeconds(a)
    }; z.e.setUTCMilliseconds = function(a) {
        this.fa.setUTCMilliseconds(a)
    };
    z.e.add = function(a) {
        $h.prototype.add.call(this, a);
        a.od && this.setUTCHours(this.fa.getUTCHours() + a.od);
        a.rd && this.setUTCMinutes(this.fa.getUTCMinutes() + a.rd);
        a.vd && this.setUTCSeconds(this.fa.getUTCSeconds() + a.vd)
    }; z.e.jq = function(a, b) {
        var c = $h.prototype.jq.call(this, a);
        return a ? c + " " + Ya(this.getHours(), 2) + ":" + Ya(this.getMinutes(), 2) + ":" + Ya(this.getSeconds(), 2) + (b ? ci(this) : "") : c + "T" + Ya(this.getHours(), 2) + Ya(this.getMinutes(), 2) + Ya(this.getSeconds(), 2) + (b ? ci(this) : "")
    };
    z.e.equals = function(a) {
        return this.getTime() == a.getTime()
    }; z.e.toString = function() {
        return this.jq()
    }; z.e.clone = function() {
        var a = new di(this.fa);
        a.gs = this.gs;
        a.hs = this.hs;
        return a
    };
    var oi = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|V+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvVwzZ]+/];
    ji.prototype.format = function(a, b) {
        if (!a) throw Error("The date to format must be non-null.");
        var c = b ? 6E4 * (a.getTimezoneOffset() - (b.Mu - hi(b, a))) : 0,
        d = c ? new Date(a.getTime() + c) : a,
        f = d;
        b && d.getTimezoneOffset() != a.getTimezoneOffset() && (d = new Date(d.getTime() + 6E4 * (d.getTimezoneOffset() - a.getTimezoneOffset())), f = new Date(a.getTime() + (c + (0 < c ? -864E5: 864E5))));
        for (var c = [], g = 0; g < this.Xt.length; ++g) {
            var h = this.Xt[g].text;
            1 == this.Xt[g].type ? c.push(ri(this, h, a, d, f, b)) : c.push(h)
        }
        return c.join("")
    };
    var ni = !1; z.v("ZH.date.parse", si); z.v("ZH.date.fromNow", z.wi); z.v("ZH.date.format", xi);
    var Mi = {}; window._gaq = window._gaq || [];
    var Fm = new Qh("ga"); Fm.g(function(a) {
        z.y(a, 
        function(a) {
            Mi.track.apply(Mi, a)
        })
    }); Mi.track = function(a, b, c, d, f) {
        c && (c = "" + c);
        d && (d = (0, window.parseInt)(d, 10));
        window._gaq.push(["_trackEvent", a, b, c, d, !!f])
    }; Mi.FW = function() {
        window._gaq.push(["_trackPageview"])
    }; Mi.Lm = function(a, b, c, d, f) {
        Sh(Fm, [a, b, c, d, f])
    }; Mi.FV = function() {
        Fm.restore()
    };
    Mi.yV = function() {
        var a = window._gaq;
        a.push(["_addOrganic", "baidu", "word"]);
        a.push(["_addOrganic", "baidu", "wd"]);
        a.push(["_addOrganic", "sogou", "query"]);
        a.push(["_addOrganic", "so.360.cn", "q"]);
        a.push(["_addOrganic", "so.com", "q"]);
        a.push(["_addOrganic", "soso", "w"]);
        a.push(["_addOrganic", "google", "q"]);
        a.push(["_addOrganic", "sm", "q"]);
        a.push(["_addIgnoredOrganic", "知乎"]);
        a.push(["_addIgnoredOrganic", "知乎网"]);
        a.push(["_addIgnoredOrganic", "zhihu"]);
        a.push(["_addIgnoredOrganic", "zhihu.com"]);
        a.push(["_addIgnoredOrganic", 
        "www.zhihu.com"])
    };
    Mi.tM = function() {
        var a = window._gaq,
        b = z.tm.ga_vars,
        c = b.user_attr.join("");
        a.push(["_setVar", c]);
        a.push(["_setCustomVar", 1, "user_attr", c, 3]);
        var d = c = 9E12;
        b.user_created && (d = b.user_created, a.push(["_setCustomVar", 2, "registration_date", xi(d, "yyyyMMdd"), 1]));
        var f = window.document.cookie.match(/q_c1=(\w+)\|(\w+)\|(\d+)/);
        f && (c = +f[3]);
        b.now && a.push(["_setCustomVar", 3, "entry_date", xi(Math.min(c, d, b.now), "yyyyMMdd"), 1]);
        b.abtest_mask && a.push(["_setCustomVar", 4, "abtest_group", b.abtest_mask, 3]); (b = window.document.cookie.match(/ng_rid=(\d+)/)) && 
        a.push(["_setCustomVar", 5, "Web Type", 50 >= (0, window.parseInt)(b[1], 10) ? "nweb": "zhihu_web", 3])
    }; Mi.MV = function() {
        var a = window._gaq;
        a.push(["_setAccount", "UA-20961733-1"]);
        a.push(["_setDomainName", ".zhihu.com"]);
        Mi.yV();
        Mi.tM()
    }; Mi.Tq = function() {
        var a = window.document.createElement("script");
        a.async = !0;
        a.src = ("https:" === window.document.location.protocol ? "https://ssl": "http://www") + ".google-analytics.com/ga.js";
        var b = window.document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    };
    Mi.init = function() {
        Mi.MV();
        Mi.FV();
        Mi.FW();
        Mi.Tq()
    };
    var Gm; window.za = window.za || [];
    var zi = new Qh("za"); zi.g(function(a) {
        z.y(a, 
        function(a) {
            window.za.collect("event", a)
        })
    });
    Gm = function() {
        var a = window.za = window.za || [];
        if (a.tR) return void(window.console && window.console.error && window.console.error("Zhihu Analytics snippet included twice."));
        a.tR = !0;
        a.methods = ["init", "collect", "set", "get"];
        a.factory = function(b) {
            return function() {
                var c = Array.prototype.slice.call(arguments);
                return c.unshift(b),
                a.push(c),
                a
            }
        };
        for (var b = 0; b < a.methods.length; b++) {
            var c = a.methods[b];
            a[c] = a.factory(c)
        }
        a.load = function() {
            var a = window.document.createElement("script");
            a.type = "text/javascript";
            a.async = 
            !0;
            a.src = ("https:" === window.document.location.protocol ? "https://": "http://") + "zhstatic.zhihu.com/za/za-0.1.1.min.js";
            var b = window.document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b)
        };
        a.aY = "0.0.9";
        a.init("ZA-11427260206", "https://zhihu-web-analytics.zhihu.com");
        a.set({
            userID: z.T.dI || null
        });
        a.collect("pageview");
        return a.load
    } ();
    var Ki, Ei, Li; Ki = "www4.zhihu.com" === window.location.hostname ? "https://ws01.aws.dev/logs/batch": "https://zhihu-web-analytics.zhihu.com/logs/batch"; Ei = []; Li = Di(function(a, b) {
        window.zap.trackPageShow(a, b)
    }); z.Hm = Di(function(a, b, c) {
        a = Fi(a);
        var d = a.module;
        window.zap.trackCardShow(Object.assign({},
        b, {
            path: a.path
        }), Object.assign({},
        c, {
            module: d
        }))
    }); z.Hi = Di(function(a, b, c) {
        a = Fi(a);
        var d = a.module;
        window.zap.trackEvent(Object.assign({},
        b, {
            path: a.path
        }), Object.assign({},
        c, {
            module: d
        }))
    }); z.Ji = Di(function(a) {
        window.zap.config(a)
    }); z.U.Lm = function(a, b, c, d, f) {
        Mi.Lm(a, b, c, d, f);
        z.Bi(a, b, c, d, f)
    }; z.U.init = function() {
        z.U.mn(); (0, window.setTimeout)(function() {
            Mi.init();
            window.$.support.cors && (Gm(), zi.restore(), Ci())
        });
        Ii()
    };
    z.U.mn = function() {
        function a(a) {
            return {
                member: "people",
                favlist: "collection"
            } [a] || a
        } (0, window.$)(window.document).on("click", "a.video-box", 
        function() {
            z.U("video", "click_videobox_open")
        }); (0, window.$)("#zh-top-link-logo").click(function() {
            z.U("navigation", "visit_home", "top_logo")
        }); (0, window.$)("#zh-top-link-home").click(function() {
            z.U("navigation", "visit_home", "top_nav_home")
        }); (0, window.$)("#top-nav-dd-topic").click(function() {
            z.U("navigation", "visit_topics_activities", "top_nav_topic")
        }); (0, window.$)("#ga_sidebar_topic_all").click(function() {
            z.U("navigation", 
            "visit_topics_activities", "sidebar_topic_all")
        });
        var b = (0, window.$)("#zh-trendings");
        b.on("click", 'li a[href^\x3d"/topic/"]', 
        function(a) {
            a = (0, window.$)(a.target).closest("li").index() + 1;
            z.U("navigation", "visit_topic", "sidebar_intresting_people_" + a + "_topic")
        });
        b.on("click", 'li a[href^\x3d"/people"]', 
        function(a) {
            a = (0, window.$)(a.target).closest("li").index() + 1;
            z.U("navigation", "visit_people_profile", "sidebar_interesting_people_" + a)
        }); (0, window.$)("#zh-single-question-page .zm-tag-editor-labels a.zm-item-tag").click(function() {
            z.U("question_answer", 
            "visit_topic", "question_topic")
        });
        z.F(z.Y, "ga_serach_select", 
        function(a) {
            "topic" === a.data.type && z.U("search", "visit_topic", "top_search_list_" + (a.data.index + 1))
        });
        var c = (0, window.$)(".zm-topic-list-container").on("click", '.subtopic a[href^\x3d"/topic/"]', 
        function() {
            z.U("topic", "visit_topic", "topic_activity_children_topic")
        }); (0, window.$)(".zm-side-section-inner.child-topic").on("click", 'a.zm-item-tag[href^\x3d"/topic/"]', 
        function() {
            z.U("topic", "visit_topic", "topic_sidebar_children_topic")
        }); (0, window.$)(".zm-topic-cat-hot").on("click", 
        'a[href^\x3d"/topic/"]', 
        function() {
            z.U("topic", "visit_topic", "topic_square_sidebar")
        }); (0, window.$)(".zm-topic-cat-sub").on("click", 'a[href^\x3d"/topic/"]', 
        function() {
            z.U("topic", "visit_topic", "topic_square_list_item")
        }); (0, window.$)('a.zm-side-nav-link[href\x3d"/topics"]').click(function() {
            z.U("navigation", "visit_topic_square", "sidebar_topic_square")
        }); (0, window.$)("#zh-tooltip").on("click", ".zh-profile-card.member .avatar-link", 
        function() {
            z.U("navigation", "visit_people_profile", "hovercard_people_name")
        });
        var d = (0, window.$)("#zh-top-nav-live-new").on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-list-content-medium a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_follower_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"FOLLOW"] .zm-item-link-avatar', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_follower_people_avatar")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_vote_thank_people_name")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_invitation_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_qcomment_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_acomment_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_new_answer_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/people"]', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_edit_people_name")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .user-block a', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_new_article")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .column_link', 
        function() {
            z.U("notification", "visit_column", "top_nav_noti_message_new_article")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ARTICLE_PUBLISH"] .post-link', 
        function() {
            z.U("notification", "visit_article", "top_nav_noti_message_new_article")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .user-block a', 
        function() {
            z.U("notification", "visit_people_profile", "top_nav_noti_message_publication")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"PUBLICATION_PUBLISH"] .question_link', 
        function() {
            z.U("notification", "visit_publication", "top_nav_noti_message_publication")
        });
        var f = (0, window.$)("#js-home-feed-list");
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .source a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_answer_vote_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] \x3e.avatar a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_answer_vote_source_people_avatar")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_answer_vote_author_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] .source a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_answer_answer_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] \x3e.avatar a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_answer_answer_source_people_avatar")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] .source a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_question_follow_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] \x3e.avatar a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_question_follow_source_people_avatar")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] .source a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_question_ask_source_people_name")
        });
        f.on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] \x3e.avatar a[href^\x3d"/people"]', 
        function() {
            z.U("feed", "visit_people_profile", "feed_question_ask_source_people_avatar")
        });
        var g = (0, window.$)("#zh-question-answer-wrap").on("click", '.zm-item-answer-author-info \x3ea[href^\x3d"/people"]', 
        function() {
            z.U("question_answer", "visit_people_profile", "question_answer_author_name")
        }).on("click", ".zm-item-answer-author-info img.zm-list-avatar", 
        function() {
            z.U("question_answer", "visit_people_profile", "question_answer_author_avatar")
        });
        g.on("click", ".voters a", 
        function() {
            var a = (0, window.$)(this).parents(".voters").find("a").index(this) + 1;
            z.U("question_answer", "visit_people_profile", "question_answer_voters_" + a)
        });
        g.on("click", '.zm-comment-hd a[href^\x3d"/people"]', 
        function() {
            z.U("question_answer", "visit_people_profile", "question_answer_comment_author_name")
        }).on("click", ".zm-comment-list img.zm-item-img-avatar", 
        function() {
            z.U("question_answer", 
            "visit_people_profile", "question_answer_comment_author_avatar")
        }); (0, window.$)(".zh-question-followers-sidebar", 'a[href^\x3d"/people"]', 
        function() {
            z.U("question_answer", "visit_people_profile", "question_sidebar_followers_avatar")
        });
        z.F(z.Y, "ga_serach_select", 
        function(a) {
            "people" === a.data.type && z.U("search", "visit_people_profile", "top_search_list_" + (a.data.index + 1))
        }); (0, window.$)("#zh-topic-top-answerer").on("click", '.zm-topic-side-person-item-content a[href^\x3d"/people/"]', 
        function() {
            z.U("topic", 
            "visit_people_profile", "topic_sidebar_top_answerer_people_name")
        }).on("click", "img.zm-list-avatar", 
        function() {
            z.U("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_avatar")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"VOTE_THANK"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question", "top_nav_noti_vote_thank_question")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"INVITE"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question", 
            "top_nav_noti_message_invitation_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION_COMMENT"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question", "top_nav_noti_message_qcomment_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER_COMMENT"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question", "top_nav_noti_message_acomment_question")
        }).on("click", '.zm-noti7-content-item[data-notigroupname\x3d"ANSWER"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question", "top_nav_noti_message_new_answser_question")
        });
        f.on("click", 'div[data-feedtype\x3d"ROUNDTABLE_ADD_RELATED"] h2 a[href^\x3d"/question"]', 
        function() {
            var a = "q" === (0, window.$)(this).closest("div[data-feedtype]").data("type");
            z.U("feed", "visit_question", a ? "roundtable_question_add": "roundtable_answer_add")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] h2 a[href^\x3d"/question"]', 
        function() {
            z.U("feed", "visit_question", "feed_answer_vote_question")
        }).on("click", 
        'div[data-feedtype\x3d"ANSWER_CREATE"] h2 a[href^\x3d"/question"]', 
        function() {
            z.U("feed", "visit_question", "feed_answer_answer_question")
        }).on("click", 'div[data-feedtype\x3d"QUESTION_FOLLOW"] h2 a[href^\x3d"/question"]', 
        function() {
            z.U("feed", "visit_question", "feed_question_follow_question")
        }).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] a.meta-item[href^\x3d"/question"]', 
        function() {
            var a = (0, window.parseInt)((0, window.$)(this).text(), 10);
            a ? z.U("feed", "visit_question", "feed_question_follow_has_answers", 
            a) : z.U("feed", "visit_question", "feed_question_follow_has_no_answer")
        }).on("click", 'div[data-feedtype\x3d"QUESTION_CREATE"] h2 a[href^\x3d"/question"]', 
        function() {
            z.U("feed", "visit_question", "feed_question_ask_question")
        });
        z.F(z.Y, "ga_serach_select", 
        function(a) {
            "question" === a.data.type && z.U("search", "visit_question", "top_search_list_" + (a.data.index + 1))
        }); (0, window.$)("#zh-question-related-questions").on("click", "a", 
        function(a) {
            a = (0, window.$)(a.delegateTarget).find("a").index(this) + 1;
            z.U.Lm("question_answer", 
            "visit_question", "question_answer_sidebar_related_questions_" + a)
        }); (0, window.$)('#zh-question-followers-sidebar a[href^\x3d"/question"][href$\x3d"/followers"]').click(function() {
            z.U("question_answer", "visit_question_followers", "question_followers_count")
        });
        d.on("click", '.zm-noti7-content-item[data-notigroupname\x3d"QUESTION"] a[href^\x3d"/question"]', 
        function() {
            z.U("notification", "visit_question_log", "top_nav_noti_message_edit_question")
        }); (0, window.$)('.zu-main-sidebar a[href^\x3d"/question"][href$\x3d"/log"]').click(function() {
            z.U("question_answer", 
            "visit_question_log", "question_log")
        }); (0, window.$)('div[data-feedtype\x3d"ANSWER_CREATE"] .answer-date-link').click(function() {
            z.U("feed", "visit_answer", "feed_answer_answer_date")
        }); (0, window.$)('div[data-feedtype\x3d"ANSWER_VOTE_UP"] .answer-date-link').click(function() {
            z.U("feed", "visit_answer", "feed_answer_vote_date")
        }); (0, window.$)("zh-single-question-page .answer-date-link").click(function() {
            z.U("question_answer", "visit_answer", "question_answer_date")
        }); (0, window.$)('a.zm-side-nav-link[href\x3d"/draft"]').click(function() {
            var a = 
            (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation", "visit_draft", "sidebar_my_draft", a)
        }); (0, window.$)('a.zm-side-nav-link[href\x3d"/collections"]').click(function() {
            var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation", "visit_collections", "sidebar_my_collections", a)
        }); (0, window.$)('a.zm-side-nav-link[href\x3d"/question/invited"]').click(function() {
            var a = (0, window.parseInt)((0, window.$)(this).find(".zg-num").text() || 0, 10);
            z.U("navigation", 
            "visit_question_invited", "sidebar_question_invited", a)
        }); (0, window.$)('a[href\x3d"http://creativecommons.org"]').click(function() {
            z.U("navigation", "visit_cc_license")
        });
        z.F(z.Y, "ga_click_back_to_top", 
        function() {
            z.U("navigation", "click_back_to_top")
        });
        z.F(z.Y, "ga_click_collapse_answer", 
        function() {
            z.U("navigation", "click_collapse_answer")
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            if ("people" === a.data.type && a.data.Yj) {
                var c = (0, window.$)(a.target);
                0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 
                1, z.U("notification", "click_follow_people", "top_nav_noti_follower_follow", a)) : 0 < c.parents("#zh-tooltip").length ? z.U("navigation", "click_follow_people", "hovercard_follow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.U("navigation", "click_follow_people", "sidebar_intresting_people_" + a + "_follow")) : 0 < c.parents("#zh-topic-top-answerer").length ? z.U("topic", "click_follow_people", "topic_sidebar_top_answerer_follow") : z.U("navigation", "click_follow_people", "other_follow")
            }
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            if ("people" === a.data.type && !a.data.Yj) {
                var c = (0, window.$)(a.target);
                0 < c.parents("#zh-top-nav-live-new").length ? (a = d.find('a[name\x3d"focus"]').index(a.target) + 1, z.U("notification", "click_unfollow_people", "top_nav_noti_follower_unfollow", a)) : 0 < c.parents("#zh-tooltip").length ? z.U("navigation", "click_unfollow_people", "hovercard_unfollow") : 0 < c.parents("#zh-trendings").length ? (a = b.find("a.follow").index(a.target) + 1, z.U("navigation", "click_unfollow_people", "sidebar_intresting_people_" + 
                a + "_unfollow")) : 0 < c.parents("#zh-topic-top-answerer").length && z.U("topic", "click_unfollow_people", "topic_sidebar_top_answerer_unfollow")
            }
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            "question" === a.data.type && a.data.Yj && (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.U("feed", "click_follow_question", "feed_answer_vote_follow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.U("feed", "click_follow_question", "feed_answer_answer_follow_question") : 
            0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? z.U("feed", "click_follow_question", "feed_question_follow_follow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.U("feed", "click_follow_question", "feed_question_ask_follow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.U("question_answer", "click_follow_question", "question_follow_question") : 0 < a.parents(".zm-topic-list-container").length && z.U("topic", "click_follow_question", "topic_activity_follow_question"))
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            "question" !== a.data.type || a.data.Yj || (a = (0, window.$)(a.target), 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? z.U("feed", "click_unfollow_question", "feed_answer_vote_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? z.U("feed", "click_unfollow_question", "feed_answer_answer_unfollow_question") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_unFOLLOW"]').length ? z.U("feed", "click_unfollow_question", "feed_question_follow_unfollow_question") : 
            0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length ? z.U("feed", "click_unfollow_question", "feed_question_ask_unfollow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? z.U("question_answer", "click_unfollow_question", "question_unfollow_question") : 0 < a.parents(".zm-topic-list-container").length && z.U("topic", "click_unfollow_question", "topic_activity_unfollow_question"))
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            "topic" === a.data.type && a.data.Yj && (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ? 
            z.U("search", "click_follow_topic", "search_result_card_topic_follow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.U("topstory", "click_follow_topic", "topstory_answer_promote"))
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            "topic" !== a.data.type || a.data.Yj || (a = (0, window.$)(a.target), 0 < a.parents(".zm-search-result-topic-wrap").length ? z.U("search", "click_unfollow_topic", "search_result_card_topic_unfollow") : a.hasClass("zu-edit-button") && a.parent().hasClass("source") && z.U("topstory", "click_unfollow_topic", 
            "topstory_answer_promote"))
        });
        z.F(z.Y, "ga_click_follow", 
        function(a) {
            "favlist" === a.data.type && (a.data.Yj ? z.U("collection", "click_follow_collection", "collection_follow") : z.U("collection", "click_unfollow_collection", "collection_follow"))
        });
        z.F(z.Y, "ga_click_top_nav_noti", 
        function(a) {
            0 < a.data.HK ? z.U("notification", "click_top_nav_noti", "top_nav_noti_alert", a.data.HK) : z.U("notification", "click_top_nav_noti", "top_nav_noti_no_alert")
        });
        z.F(z.Y, "ga_click_top_nav_noti_tab", 
        function(a) {
            z.U("notification", "click_top_nav_noti_tab", 
            ["top_nav_noti_tab_message", "top_nav_noti_tab_follower", "top_nav_noti_tab_vote"][a.data.tab])
        });
        z.F(z.Y, "ga_click_enlarge_image", 
        function(a) {
            a = (0, window.$)(a.target).parents("div[data-feedtype]").attr("data-feedtype");
            "ANSWER_CREATE" === a ? z.U("navigation", "click_enlarge_image", "feed_answer_answer_image") : "ANSWER_VOTE_UP" === a && z.U("navigation", "click_enlarge_image", "feed_answer_vote_image")
        });
        z.F(z.Y, "ga_click_topic_more", 
        function(a) {
            var b = "activity"; - 1 < window.location.href.indexOf("questions") && (b = 
            "questions");
            a.data && a.data.Fo ? z.U("feed", "click_topic_more", "topic_" + b + "_more_button") : z.U("feed", "click_topic_more", "topic_" + b + "_more_auto_load")
        });
        f.on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.inline-block[name\x3d"toggleExpanded"]', 
        function() {
            z.U("feed", "click_expand", "feed_answer_vote_expand")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_VOTE_UP"] a.zm-item-vote-count[name\x3d"toggleExpanded"]', 
        function() {
            z.U("feed", "click_expand", "feed_answer_vote_vote_count")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.inline-block[name\x3d"toggleExpanded"]', 
        function() {
            z.U("feed", "click_expand", "feed_answer_answer_expand")
        }).on("click", 'div[data-feedtype\x3d"ANSWER_CREATE"] a.zm-item-vote-count[name\x3d"toggleExpanded"]', 
        function() {
            z.U("feed", "click_expand", "feed_answer_answer_vote_count")
        });
        g = (0, window.$)("zh-single-question-page").on("click", '#zh-question-detail a.inline-block[name\x3d"expand"]', 
        function() {
            z.U("question_answer", "click_expand", "question_supplement_expand")
        });
        g.on("click", '.zm-item-answer a[name\x3d"more"]', 
        function() {
            z.U("question_answer", 
            "click_expand", "question_answer_voters_more")
        });
        g.on("click", "#zh-question-collapsed-switcher", 
        function() {
            z.U("question_answer", "click_expand", "question_answer_folded_expand")
        });
        c.on("click", 'a.inline-block[name\x3d"expand"]', 
        function() {
            z.U("topic", "click_expand", "topic_activity_expand")
        }).on("click", 'a.zm-item-vote-count[name\x3d"expand"]', 
        function() {
            z.U("topic", "click_expand", "topic_activity_vote_count")
        });
        z.F(z.Y, "ga_click_sorter_item", 
        function(a) { (a = {
                added_time: "time",
                vote: "vote"
            } [a.data.key]) && 
            z.U("question_answer", "click_sort_answer", "question_answer_sorting_" + a)
        });
        z.F(z.Y, "ga_click_vote_up", 
        function(a) {
            a = (0, window.$)(a.target.m());
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_up";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_up";
            else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_up";
            else return;
            z.U("vote", "click_vote_up_answer", a)
        });
        z.F(z.Y, "ga_click_vote_down", 
        function(a) {
            a = 
            (0, window.$)(a.target.m());
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_down";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_down";
            else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_down";
            else return;
            z.U("vote", "click_vote_down_answer", a)
        });
        z.F(z.Y, "ga_click_thank_answer", 
        function(a) {
            a = (0, window.$)(a.target);
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_thank";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_thank";
            else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_thank";
            else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_thank";
            else return;
            z.U("vote", "click_thank_answer", a)
        });
        z.F(z.Y, "ga_click_report_box", 
        function(b) {
            z.U("report", "click_report_" + a(b.data.type) + "_box")
        });
        z.F(z.Y, "ga_click_report", 
        function(b) {
            z.U("report", "click_report_" + a(b.data.type))
        });
        z.F(z.Y, "ga_click_collect_answer_box", 
        function(a) {
            a = (0, window.$)(a.target);
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_collect";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_collect";
            else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_collect";
            else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_collect";
            else return;
            z.U("collection", "click_collect_answer_box", a)
        });
        z.F(z.Y, "ga_click_collect_answer", 
        function(a) {
            z.U("collection", 
            "click_collect_answer", "collection_count", a.data.count)
        });
        z.F(z.Y, "ga_click_add_collection", 
        function() {
            z.U("collection", "click_add_collection", "collect_answer_window_add_collection")
        });
        z.F(z.Y, "ga_click_answer_not_helpful", 
        function(a) {
            a = (0, window.$)(a.target);
            if (0 < a.closest('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_not_helpful";
            else if (0 < a.closest('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_not_helpful";
            else if (0 < a.closest("#zh-question-answer-wrap").length) a = 
            "question_answer_not_helpful";
            else if (0 < a.closest(".zm-topic-list-container").length) a = "topic_activity_not_helpful";
            else return;
            z.U("vote", "click_answer_not_helpful", a)
        });
        f.on("click");
        z.F(z.Y, "ga_click_question_ignore", 
        function(a) {
            a = (0, window.$)(a.target);
            if (0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_ignore_question";
            else if (0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length) a = "feed_answer_answer_ignore_question";
            else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length) a = 
            "feed_question_follow_ignore_question";
            else if (0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length) a = "feed_question_ask_ignore_question";
            else return;
            z.U("feed", "click_question_ignore", a)
        });
        z.F(z.Y, "ga_question_topic_edit_start", 
        function() {
            z.U("edit", "click_edit_question_topic", "question_topic_edit_start")
        });
        z.F(z.Y, "ga_question_topic_edit_finish_changed", 
        function() {
            z.U("edit", "click_edit_question_topic", "question_topic_edit_finish_changed")
        });
        z.F(z.Y, "ga_question_title_edit_start", 
        function() {
            z.U("edit", 
            "click_edit_question_titile", "question_title_edit_start")
        });
        z.F(z.Y, "ga_question_title_edit_cancel", 
        function() {
            z.U("edit", "click_edit_question_titile", "question_title_edit_cancel")
        });
        z.F(z.Y, "ga_question_title_edit_save_changed", 
        function() {
            z.U("edit", "click_edit_question_titile", "question_title_edit_save_changed")
        });
        z.F(z.Y, "ga_question_title_edit_save_unchanged", 
        function() {
            z.U("edit", "click_edit_question_titile", "question_title_edit_save_unchanged")
        });
        z.F(z.Y, "ga_question_supplement_edit_start", 
        function() {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_start")
        });
        z.F(z.Y, "ga_question_supplement_edit_cancel", 
        function() {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_cancel")
        });
        z.F(z.Y, "ga_question_supplement_edit_save_changed", 
        function() {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_save_changed")
        });
        z.F(z.Y, "ga_question_supplement_edit_save_unchanged", 
        function() {
            z.U("edit", "click_edit_question_supplement", "question_supplement_edit_save_unchanged")
        });
        (0, window.$)("#zu-top-add-question").click(function() {
            z.U("question_answer", "click_add_question", "top_nav_question_add_start")
        });
        z.F(z.Y, "ga_click_add_question", 
        function(a) {
            z.U("question_answer", "click_add_question", "question_add_submit_with_topics", a.data.total);
            z.U("question_answer", "click_add_question", "question_add_submit_with_suggested_topics", a.data.Ru);
            z.U("question_answer", "click_add_question", "question_add_submit_with_suggested_topics_percent", Math.round(a.data.Ru / a.data.total * 100))
        }); (0, window.$)("#zh-question-answer-form-wrap .editable").focus(function() {
            z.U("question_answer", 
            "click_add_answer", "question_answer_add_start")
        }); (0, window.$)("#zh-question-answer-form-wrap .submit-button").click(function() {
            z.U("question_answer", "click_add_answer", "question_answer_add_publish")
        });
        z.F(z.Y, "ga_hover_hovercard", 
        function(a) {
            a = (0, window.$)(a.target);
            var c,
            d,
            f;
            a.is('[data-tip^\x3d"p$"]') ? (d = "hover_people_hovercard", 0 < a.parents("div[data-feedtype]").length ? (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ANSWER_VOTE_UP"]').length ? 0 < a.parents(".zm-item-answer-author-info").length ? f = "feed_answer_vote_author_name": 
            0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_vote_source_people_avatar": "feed_answer_vote_author_name") : 0 < a.parents('div[data-feedtype\x3d"ANSWER_CREATE"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_answer_answer_source_people_avatar": "feed_answer_answer_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_FOLLOW"]').length ? 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_follow_source_people_avatar": 
            "feed_question_follow_source_people_name") : 0 < a.parents('div[data-feedtype\x3d"QUESTION_CREATE"]').length && 0 < a.parents("div.source").length && (f = 0 < a.find("img").length ? "feed_question_ask_source_people_avatar": "feed_question_ask_source_people_name")) : 0 < a.parents("#zh-trendings").length ? (c = "navigation", window.$.contains(b.find("li:nth-child(1)").get(0), a.get(0)) ? f = "sidebar_intresting_people_1": window.$.contains(b.find("li:nth-child(2)").get(0), a.get(0)) ? f = "sidebar_intresting_people_2": window.$.contains(b.find("li:nth-child(3)").get(0), 
            a.get(0)) && (f = "sidebar_intresting_people_3")) : 0 < a.parents("#zh-single-question-page").length ? (c = "question_answer", 0 < a.parents(".zm-item-answer-author-info").length ? f = 0 < a.find("img").length ? "question_answer_author_avatar": "question_answer_author_name": 0 < a.parents(".voters").length ? (f = a.parents(".voters").find('a[href^\x3d"/people"]').index(a.get(0)) + 1, f = "question_answer_voters_" + f) : 0 < a.parents(".zm-comment-list").length && (f = 0 < a.find("img").length ? "question_answer_comment_author_avatar": "question_answer_comment_author_name")) : 
            0 < a.parents("#zh-topic-top-answerer").length && (c = "topic", f = 0 < a.find("img").length ? "topic_sidebar_top_answerer_people_avatar": "topic_sidebar_top_answerer_people_name")) : a.is('[data-tip^\x3d"t$"]') ? (d = "hover_topic_hovercard", 0 < a.parents("#zh-single-question-page").length && (c = "question_answer", f = "question_topic")) : a.is('[data-tip^\x3d"c$"]') ? (d = "hover_column_hovercard", 0 < a.parents("div[data-feedtype]").length && (c = "feed", 0 < a.parents('div[data-feedtype\x3d"ARTICLE_VOTE_UP"]').length ? f = "feed_article_vote": 
            0 < a.parents('div[data-feedtype\x3d"ARTICLE_CREATE"]').length && (f = "feed_article_create"))) : a.is('[data-tip^\x3d"r$"]') && (d = "hover_roundtable_hovercard", c = "feed", 0 < a.parents('div[data-feedtype\x3d"MEMBER_FOLLOW_ROUNDTABLE"]').length ? f = "feed_follow_roundtable": 0 < a.parents('div[data-feedtype^\x3d"ROUNDTABLE"]').length && (f = "feed_roundtable_others"));
            c && d && f && z.U(c, d, f, void 0, !0)
        });
        z.F(z.Y, "ga_click_sign_in", 
        function(a) {
            a.data && a.data.label ? z.U("sign_in", "click_sign_in", a.data.label) : z.U("sign_in", "click_sign_in")
        });
        z.F(z.Y, "ga_click_sign_in_close", 
        function() {
            z.U("sign_in", "click_sign_in_close", "sign_in_box_main")
        });
        z.F(z.Y, "ga_click_sign_in_weibo", 
        function(a) {
            z.U("sign_in", "click_sign_in_weibo", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_qq", 
        function(a) {
            z.U("sign_in", "click_sign_in_qq", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_switch", 
        function(a) {
            "signin" === a.data ? z.U("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_in") : "signup" === a.data && z.U("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_up")
        });
        z.F(z.Y, "ga_click_sign_in_link_account", 
        function(a) {
            a.target ? (a = (0, window.$)(a.target), z.Va(a.parent().text(), "该邮箱已注册") ? z.U("sign_in", "click_sign_in_link_account", "sign_up_error_user_exists_link_account") : z.Va(a.parent().text(), "如果你已有知乎帐号") ? (0, window.$)(".view-warmup").is(":visible") ? z.U("sign_in", "click_sign_in_link_account", "sign_in_box_splash_link_account") : (0, window.$)(".view-info").is(":visible") && z.U("sign_in", "click_sign_in_link_account", "sign_in_box_sign_up_link_account") : z.Va(a.text(), "返回注册") && 
            z.U("sign_in", "click_sign_in_link_account", "sign_in_box_link_account_back")) : a.label && z.U("sign_in", "click_sign_in_link_account", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_connect", 
        function(a) {
            z.U("sign_in", "click_sign_in_weibo", a.label)
        });
        z.F(z.Y, "ga_click_sign_in_avatar", 
        function() {
            z.U("sign_in", "click_sign_in_avatar", "sign_in_avatar_upload")
        });
        z.F(z.Y, "ga_click_sign_in_previous_step", 
        function() {
            z.U("sign_in", "click_sign_in_previous_step", "sign_in_box_follow_user_previous")
        });
        z.F(z.Y, "ga_click_follow_topic", 
        function(a) {
            0 < a.data ? z.U("sign_in", "click_follow_topic", "sign_in_box_follow_topic_next", a.data) : 0 === a.data && z.U("sign_in", "click_follow_topic", "sign_in_box_follow_topic_skip")
        });
        z.F(z.Y, "ga_click_follow_people", 
        function(a) {
            0 < a.data ? z.U("sign_in", "click_follow_people", "sign_in_box_follow_people_next", a.data) : 0 === a.data && z.U("sign_in", "click_follow_people", "sign_in_box_follow_people_skip")
        });
        z.F(z.Y, "ga_click_play_video", 
        function(a) {
            z.U("video", "click_play_video", a.label)
        });
        z.F(z.Y, "ga_visit_home_video", 
        function() {
            z.U("video", "visit_home_video", "home_play_video_auto")
        });
        z.F(z.Y, "ga_click_close_video", 
        function(a) {
            z.U("video", "click_close_video", a.label)
        });
        z.F(z.Y, "ga_click_share_video", 
        function(a) {
            z.U("video", "click_share_video", a.label)
        })
    };
    var Xi = {},
    Ri = /^\/lives\//;
    var $i = /\s*;\s*/; z.e = z.Yi.prototype; z.e.isEnabled = function() {
        return window.navigator.cookieEnabled
    }; z.e.set = function(a, b, c, d, f, g) {
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        z.ka(c) || (c = -1);
        f = f ? ";domain\x3d" + f: "";
        d = d ? ";path\x3d" + d: "";
        g = g ? ";secure": "";
        c = 0 > c ? "": 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0, z.I)() + 1E3 * c)).toUTCString();
        this.La.cookie = a + "\x3d" + b + f + d + c + g
    };
    z.e.get = function(a, b) {
        for (var c = a + "\x3d", d = (this.La.cookie || "").split($i), f = 0, g; g = d[f]; f++) {
            if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
            if (g == a) return ""
        }
        return b
    }; z.e.remove = function(a, b, c) {
        var d = this.Qf(a);
        this.set(a, "", 0, b, c);
        return d
    }; z.e.ld = function() {
        return z.Zi(this).keys
    }; z.e.Wc = function() {
        return z.Zi(this).values
    }; z.e.dh = function() {
        return ! this.La.cookie
    }; z.e.lb = function() {
        return this.La.cookie ? (this.La.cookie || "").split($i).length: 0
    }; z.e.Qf = function(a) {
        return z.ka(this.get(a))
    };
    z.e.ai = z.aa(4); z.e.clear = function() {
        for (var a = z.Zi(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    }; z.bj = new z.Yi(window.document); z.bj.SX = 3950; aj(); z.W = {
        set: function(a, b) {
            a.className = b
        },
        get: function(a) {
            a = a.className;
            return z.pa(a) && a.match(/\S+/g) || []
        },
        add: function(a, b) {
            var c = z.W.get(a),
            d = z.yb(arguments, 1),
            f = c.length + d.length;
            z.W.Tq(c, d);
            z.W.set(a, c.join(" "));
            return c.length == f
        },
        remove: function(a, b) {
            var c = z.W.get(a),
            d = z.yb(arguments, 1),
            f = z.W.JF(c, d);
            z.W.set(a, f.join(" "));
            return f.length == c.length - d.length
        },
        Tq: function(a, b) {
            for (var c = 0; c < b.length; c++) z.A(a, b[c]) || a.push(b[c])
        },
        JF: function(a, b) {
            return z.mb(a, 
            function(a) {
                return ! z.A(b, a)
            })
        },
        bZ: function(a, 
        b, c) {
            for (var d = z.W.get(a), f = !1, g = 0; g < d.length; g++) d[g] == b && (z.xb(d, g--, 1), f = !0);
            f && (d.push(c), z.W.set(a, d.join(" ")));
            return f
        },
        Wv: function(a, b, c) {
            var d = z.W.get(a);
            z.pa(b) ? z.tb(d, b) : z.na(b) && (d = z.W.JF(d, b));
            z.pa(c) && !z.A(d, c) ? d.push(c) : z.na(c) && z.W.Tq(d, c);
            z.W.set(a, d.join(" "))
        },
        has: function(a, b) {
            return z.A(z.W.get(a), b)
        },
        enable: function(a, b, c) {
            c ? z.W.add(a, b) : z.W.remove(a, b)
        },
        toggle: function(a, b) {
            var c = !z.W.has(a, b);
            z.W.enable(a, b, c);
            return c
        }
    };
    var ej; z.x(z.pj, z.G);
    var Im = z.t.document && z.t.document.documentElement && !!z.t.document.documentElement.setCapture; z.e = z.pj.prototype; z.e.Qg = z.aa(18); z.e.o = function() {
        return this.T
    }; z.e.iB = z.aa(19); z.e.Wa = z.aa(20); z.e.D = function() {
        z.pj.v.D.call(this);
        z.md(this.handle, ["touchstart", "mousedown"], this.Km, !1, this);
        this.T.removeAll();
        Im && this.La.releaseCapture();
        this.handle = this.target = null
    };
    z.e.Km = function(a) {
        var b = "mousedown" == a.type;
        if (!this.ec || this.pj || b && !z.Tc(a)) this.dispatchEvent("earlycancel");
        else {
            if (0 == this.Ey) if (this.dispatchEvent(new vj("start", this, a.clientX, a.clientY, a))) this.pj = !0,
            this.aJ && a.preventDefault();
            else return;
            else this.aJ && a.preventDefault();
            var b = this.La,
            c = b.documentElement,
            d = !Im;
            this.T.g(b, ["touchmove", "mousemove"], this.eQ, d);
            this.T.g(b, ["touchend", "mouseup"], this.Wr, d);
            Im ? (c.setCapture(!1), this.T.g(c, "losecapture", this.Wr)) : this.T.g(z.Se(b), "blur", this.Wr);
            z.C && this.TQ && this.T.g(b, "dragstart", Mc);
            this.uV && this.T.g(this.uV, "scroll", this.Pt, d);
            this.clientX = this.Ou = a.clientX;
            this.clientY = this.Pu = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.deltaX = this.Ti ? z.oj(this.target) : this.target.offsetLeft;
            this.deltaY = this.target.offsetTop;
            this.sA = z.wf(z.J(this.La))
        }
    };
    z.e.Wr = function(a) {
        this.T.removeAll();
        Im && this.La.releaseCapture();
        this.pj ? (this.pj = !1, this.dispatchEvent(new vj("end", this, a.clientX, a.clientY, a, sj(this, this.deltaX), tj(this, this.deltaY)))) : this.dispatchEvent("earlycancel")
    };
    z.e.eQ = function(a) {
        if (this.ec) {
            var b = (this.Ti && qj(this) ? -1: 1) * (a.clientX - this.clientX),
            c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.pj) {
                var d = this.Ou - this.clientX,
                f = this.Pu - this.clientY;
                if (d * d + f * f > this.Ey) if (this.dispatchEvent(new vj("start", this, a.clientX, a.clientY, a))) this.pj = !0;
                else {
                    this.Fd || this.Wr(a);
                    return
                }
            }
            c = rj(this, b, c);
            b = c.x;
            c = c.y;
            this.pj && this.dispatchEvent(new vj("beforedrag", this, a.clientX, a.clientY, a, b, c)) && 
            (uj(this, a, b, c), a.preventDefault())
        }
    }; z.e.Pt = function(a) {
        var b = rj(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        uj(this, a, b.x, b.y)
    }; z.e.ax = function(a, b) {
        this.Ti && qj(this) ? this.target.style.right = a + "px": this.target.style.left = a + "px";
        this.target.style.top = b + "px"
    }; z.x(vj, z.Lc);
    var Jm = z.C ? 'javascript:""': "about:blank"; z.x(z.wj, z.G); z.wj.prototype.handleEvent = function(a) {
        var b = new z.Pc(a.gc);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin": "focusout";
        this.dispatchEvent(b)
    }; z.wj.prototype.D = function() {
        z.wj.v.D.call(this);
        z.nd(this.XR);
        z.nd(this.YR);
        delete this.h
    }; z.x(yj, z.R); z.e = yj.prototype; z.e.Lx = null; z.e.sb = !1; z.e.Qc = null; z.e.Ac = null; z.e.Pe = null; z.e.kw = !1; z.e.U = function() {
        return "goog-modalpopup"
    }; z.e.Cj = function() {
        return this.Qc
    }; z.e.B = function() {
        yj.v.B.call(this);
        var a = this.m(),
        b = (0, z.ab)(this.U()).split(" ");
        z.jj(a, b);
        z.of(a, !0);
        z.Q(a, !1);
        this.Jz();
        zj(this)
    };
    z.e.Jz = function() {
        this.XW && !this.Ac && (this.Ac = this.K().B("iframe", {
            frameborder: 0,
            style: "border:0;vertical-align:bottom;" + (z.pa(void 0) ? (new z.Bd).zo(void 0).Xg() : ""),
            src: Jm
        }), this.Ac.className = this.U() + "-bg", z.Q(this.Ac, !1), z.Kg(this.Ac, 0));
        this.Qc || (this.Qc = this.K().B("DIV", this.U() + "-bg"), z.Q(this.Qc, !1))
    }; z.e.vJ = function() {
        this.kw = !1
    }; z.e.Ob = function(a) {
        return !! a && "DIV" == a.tagName
    };
    z.e.Z = function(a) {
        yj.v.Z.call(this, a);
        a = (0, z.ab)(this.U()).split(" ");
        z.jj(this.m(), a);
        this.Jz();
        zj(this);
        z.of(this.m(), !0);
        z.Q(this.m(), !1)
    }; z.e.C = function() {
        this.Ac && z.bf(this.Ac, this.m());
        z.bf(this.Qc, this.m());
        yj.v.C.call(this);
        z.cf(this.Pe, this.m());
        this.Lx = new z.wj(this.K().ua());
        this.o().g(this.Lx, "focusin", this.hp);
        Aj(this, !1)
    }; z.e.Hb = function() {
        this.V() && this.G(!1);
        z.Cc(this.Lx);
        yj.v.Hb.call(this);
        z.P(this.Ac);
        z.P(this.Qc);
        z.P(this.Pe)
    };
    z.e.G = function(a) {
        a != this.sb && (this.sk && this.sk.stop(), this.al && this.al.stop(), this.rk && this.rk.stop(), this.$k && this.$k.stop(), this.wa && Aj(this, a), a ? this.rB() : this.Vl())
    }; z.e.SJ = function(a, b, c, d) {
        this.sk = a;
        this.rk = b;
        this.al = c;
        this.$k = d
    };
    z.e.rB = function() {
        if (this.dispatchEvent("beforeshow")) {
            try {
                this.cm = this.K().ua().activeElement
            } catch(a) {}
            this.TA();
            this.ha();
            this.o().g(this.K().Va(), "resize", this.TA);
            Bj(this, !0);
            this.focus();
            this.sb = !0;
            this.sk && this.al ? (z.ld(this.sk, "end", this.mg, !1, this), this.al.play(), this.sk.play()) : this.mg()
        }
    };
    z.e.Vl = function() {
        this.dispatchEvent("beforehide") && (this.o().qa(this.K().Va(), "resize", this.TA), this.sb = !1, this.rk && this.$k ? (z.ld(this.rk, "end", this.im, !1, this), this.$k.play(), this.rk.play()) : this.im(), this.zJ())
    }; z.e.zJ = function() {
        try {
            var a = this.K(),
            b = a.ua().body,
            c = a.ua().activeElement || b;
            if (!this.cm || this.cm == b) {
                this.cm = null;
                return
            } (c == b || a.contains(this.m(), c)) && this.cm.focus()
        } catch(d) {}
        this.cm = null
    }; z.e.mg = function() {
        this.dispatchEvent("show")
    }; z.e.im = function() {
        Bj(this, !1);
        this.dispatchEvent("hide")
    };
    z.e.V = function() {
        return this.sb
    }; z.e.focus = function() {
        this.sF()
    }; z.e.TA = function() {
        this.Ac && z.Q(this.Ac, !1);
        this.Qc && z.Q(this.Qc, !1);
        var a = this.K().ua(),
        b = z.Pe(z.Se(a) || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
        a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.Ac && (z.Q(this.Ac, !0), z.Gg(this.Ac, c, a));
        this.Qc && (z.Q(this.Qc, !0), z.Gg(this.Qc, c, a))
    };
    z.e.ha = function() {
        var a = this.K().ua(),
        b = z.Se(a) || window;
        if ("fixed" == z.zg(this.m())) var c = a = 0;
        else c = z.wf(this.K()),
        a = c.x,
        c = c.y;
        var d = z.Ig(this.m()),
        b = z.Pe(b),
        a = Math.max(a + b.width / 2 - d.width / 2, 0),
        c = Math.max(c + b.height / 2 - d.height / 2, 0);
        z.Ag(this.m(), a, c);
        z.Ag(this.Pe, a, c)
    }; z.e.hp = function(a) {
        this.kw ? this.vJ() : a.target == this.Pe && z.vd(this.sF, 0, this)
    }; z.e.sF = function() {
        try {
            z.C && this.K().ua().body.focus(),
            this.m().focus()
        } catch(a) {}
    };
    z.e.D = function() {
        z.Cc(this.sk);
        this.sk = null;
        z.Cc(this.rk);
        this.rk = null;
        z.Cc(this.al);
        this.al = null;
        z.Cc(this.$k);
        this.$k = null;
        yj.v.D.call(this)
    };
    var pk, Nm, Om, Pm, Qm, Rm, Sm, Km, Tm, Qj; z.x(z.Cj, yj); z.e = z.Cj.prototype; z.e.jF = !0; z.e.Dy = !0; z.e.fm = !0; z.e.mx = !0; z.e.kr = .5; z.e.SB = ""; z.e.rc = null; z.e.Jb = null; z.e.TE = !1; z.e.zd = null; z.e.dd = null; z.e.Yu = null; z.e.yd = null; z.e.Ye = null; z.e.oc = null; z.e.tp = "dialog"; z.e.U = function() {
        return this.Sc
    }; z.e.Oa = function(a) {
        this.SB = a;
        this.dd && z.nf(this.dd, a)
    }; z.e.ia = function(a) {
        this.rc = a = z.Hd(a, null);
        this.Ye && z.Fe(this.Ye, a)
    }; z.e.Ua = z.aa(21); z.e.ni = function() {
        return this.tp
    }; z.e.Gu = z.aa(22); z.e.S = function() {
        z.Ej(this);
        return this.Ye
    };
    z.e.ls = z.aa(24); z.e.ii = function() {
        z.Ej(this);
        return this.m()
    }; z.e.Cj = function() {
        z.Ej(this);
        return z.Cj.v.Cj.call(this)
    }; z.e.Qp = function(a) {
        a != this.fm && Ij(this, a)
    };
    z.e.B = function() {
        z.Cj.v.B.call(this);
        var a = this.m(),
        b = this.K();
        this.zd = b.B("DIV", this.Sc + "-title", this.dd = b.B("SPAN", {
            className: this.Sc + "-title-text",
            id: this.fe()
        },
        this.SB), this.yd = b.B("SPAN", this.Sc + "-title-close"));
        z.$e(a, this.zd, this.Ye = b.B("DIV", this.Sc + "-content"), this.oc = b.B("DIV", this.Sc + "-buttons"));
        z.cj(this.dd, "heading");
        z.cj(this.yd, "button");
        z.of(this.yd, !0);
        z.dj(this.yd, "label", Km);
        this.Yu = this.dd.id;
        z.cj(a, this.ni());
        z.dj(a, "labelledby", this.Yu || "");
        this.rc && z.Fe(this.Ye, this.rc);
        z.Q(this.yd, 
        this.Dy);
        this.pc && (a = this.pc, a.h = this.oc, a.render());
        z.Q(this.oc, !!this.pc);
        Hj(this, this.kr)
    };
    z.e.Z = function(a) {
        z.Cj.v.Z.call(this, a);
        a = this.m();
        var b = this.Sc + "-content";
        this.Ye = z.Le(null, b, a)[0];
        this.Ye || (this.Ye = this.K().B("DIV", b), this.rc && z.Fe(this.Ye, this.rc), a.appendChild(this.Ye));
        var b = this.Sc + "-title",
        c = this.Sc + "-title-text",
        d = this.Sc + "-title-close"; (this.zd = z.Le(null, b, a)[0]) ? (this.dd = z.Le(null, c, this.zd)[0], this.yd = z.Le(null, d, this.zd)[0]) : (this.zd = this.K().B("DIV", b), a.insertBefore(this.zd, this.Ye));
        this.dd ? (this.SB = z.pf(this.dd), this.dd.id || (this.dd.id = this.fe())) : (this.dd = z.O("SPAN", 
        {
            className: c,
            id: this.fe()
        }), this.zd.appendChild(this.dd));
        this.Yu = this.dd.id;
        z.dj(a, "labelledby", this.Yu || "");
        this.yd || (this.yd = this.K().B("SPAN", d), this.zd.appendChild(this.yd));
        z.Q(this.yd, this.Dy);
        b = this.Sc + "-buttons"; (this.oc = z.Le(null, b, a)[0]) ? (this.pc = new z.Pj(this.K()), this.pc.w(this.oc)) : (this.oc = this.K().B("DIV", b), a.appendChild(this.oc), this.pc && (a = this.pc, a.h = this.oc, a.render()), z.Q(this.oc, !!this.pc));
        Hj(this, this.kr)
    };
    z.e.C = function() {
        z.Cj.v.C.call(this);
        this.o().g(this.m(), "keydown", this.lp).g(this.m(), "keypress", this.lp);
        this.o().g(this.oc, "click", this.OS);
        Jj(this, this.mx);
        this.o().g(this.yd, "click", this.IT);
        var a = this.m();
        z.cj(a, this.ni());
        "" !== this.dd.id && z.dj(a, "labelledby", this.dd.id);
        this.fm || Ij(this, !1)
    }; z.e.Hb = function() {
        this.V() && this.G(!1);
        Jj(this, !1);
        z.Cj.v.Hb.call(this)
    }; z.e.G = function(a) {
        a != this.V() && (this.wa || this.render(), z.Cj.v.G.call(this, a))
    }; z.e.mg = function() {
        z.Cj.v.mg.call(this);
        this.dispatchEvent(pk)
    };
    z.e.im = function() {
        z.Cj.v.im.call(this);
        this.dispatchEvent(z.qk);
        this.TE && this.H()
    }; z.e.KV = function() {
        var a = this.K().ua(),
        b = z.Pe(z.Se(a) || window),
        c = Math.max(a.body.scrollWidth, b.width),
        a = Math.max(a.body.scrollHeight, b.height),
        d = z.Ig(this.m());
        "fixed" == z.zg(this.m()) ? this.Jb.pt = new z.rg(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) || new z.rg(window.NaN, window.NaN, window.NaN, window.NaN) : this.Jb.pt = new z.rg(0, 0, c - d.width, a - d.height) || new z.rg(window.NaN, window.NaN, window.NaN, window.NaN)
    };
    z.e.IT = function() {
        Kj(this)
    }; z.e.Df = function(a) {
        this.TE = a
    }; z.e.D = function() {
        this.oc = this.yd = null;
        z.Cj.v.D.call(this)
    }; z.e.OS = function(a) {
        a: {
            for (a = a.target; null != a && a != this.oc;) {
                if ("BUTTON" == a.tagName) break a;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.pc.get(a);
            this.dispatchEvent(new Lj(a, b)) && this.G(!1)
        }
    };
    z.e.lp = function(a) {
        var b = !1,
        c = !1,
        d = this.pc,
        f = a.target;
        if ("keydown" == a.type) if (this.jF && 27 == a.keyCode) {
            var g = d && d.Cw,
            f = "SELECT" == f.tagName && !f.disabled;
            g && !f ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Lj(g, b))) : f || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && f == this.m()) {
                this.kw = !0;
                try {
                    this.Pe.focus()
                } catch(m) {}
                z.vd(this.vJ, 0, this)
            }
        } else if (13 == a.keyCode) {
            if ("BUTTON" == f.tagName && !f.disabled) g = f.name;
            else if (f == this.yd) Kj(this);
            else if (d) {
                var h = d.bx,
                k = h && d.jf(h),
                f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || 
                "A" == f.tagName) && !f.disabled; ! k || k.disabled || f || (g = h)
            }
            g && d && (c = !0, b = this.dispatchEvent(new Lj(g, String(d.get(g)))))
        } else f == this.yd && 32 == a.keyCode && Kj(this);
        if (b || c) a.stopPropagation(),
        a.preventDefault();
        b && this.G(!1)
    }; z.x(Lj, z.Lc); z.Oj = "dialogselect"; z.qk = "afterhide"; pk = "aftershow"; z.x(z.Pj, z.Rd); z.e = z.Pj.prototype; z.e.Sc = "goog-buttonset"; z.e.bx = null; z.e.h = null; z.e.Cw = null; z.e.set = function(a, b, c, d) {
        z.Rd.prototype.set.call(this, a, b);
        c && (this.bx = a);
        d && (this.Cw = a);
        return this
    };
    z.e.Bd = function(a, b, c) {
        return this.set(a.key, a.caption, b, c)
    }; z.e.render = function() {
        if (this.h) {
            z.Fe(this.h, Nj);
            var a = z.J(this.h);
            this.forEach(function(b, c) {
                var d = a.B("BUTTON", {
                    name: c
                },
                b);
                c == this.bx && (d.className = this.Sc + "-default");
                this.h.appendChild(d)
            },
            this)
        }
    }; z.e.w = function(a) {
        if (a && 1 == a.nodeType) {
            this.h = a;
            a = this.h.getElementsByTagName("BUTTON");
            for (var b = 0, c, d, f; c = a[b]; b++) if (d = c.name || c.id, f = z.pf(c) || c.value, d) {
                var g = 0 == b;
                this.set(d, f, g, c.name == z.Lm);
                g && z.ij(c, this.Sc + "-default")
            }
        }
    }; z.e.m = function() {
        return this.h
    };
    z.e.K = function() {
        return this.da
    }; z.e.jf = function(a) {
        for (var b = this.h.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++) if (d.name == a || d.id == a) return d;
        return null
    }; z.Lm = "cancel"; z.Mm = {
        Cg: "ok",
        Te: z.Lm,
        Eg: "yes",
        Mh: "no",
        cj: "save",
        bj: "continue"
    }; Nm = z.u("OK"); Om = z.u("Cancel"); Pm = z.u("Yes"); Qm = z.u("No"); Rm = z.u("Save"); Sm = z.u("Continue"); Km = z.u("Close"); Tm = {
        Cg: Nm,
        Te: Om,
        Eg: Pm,
        Mh: Qm,
        cj: Rm,
        bj: Sm
    };
    Qj = {
        Cg: {
            key: "ok",
            caption: Tm.Cg
        },
        Te: {
            key: z.Lm,
            caption: Tm.Te
        },
        Eg: {
            key: "yes",
            caption: Tm.Eg
        },
        Mh: {
            key: "no",
            caption: Tm.Mh
        },
        cj: {
            key: "save",
            caption: Tm.cj
        },
        bj: {
            key: "continue",
            caption: Tm.bj
        }
    };
    "undefined" != typeof window.document && ((new z.Pj).Bd(Qj.Cg, !0, !0), z.Dj(), (new z.Pj).Bd(Qj.Eg, !0).Bd(Qj.Mh, !1, !0), (new z.Pj).Bd(Qj.Eg).Bd(Qj.Mh, !0).Bd(Qj.Te, !1, !0), (new z.Pj).Bd(Qj.bj).Bd(Qj.cj).Bd(Qj.Te, !0, !0)); (function() {
        var a = z.Vi || z.Wj,
        b = a && window.navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0, 3).replace(/_/g, ".");
        z.Um = "contentEditable" in window.document.documentElement && !(a && 5 > b) && !(z.Xl && 3 > window.navigator.userAgent.match(/Android (\d)/)[1]);
        var c = (0, window.$)(window.document.documentElement);
        z.Vm = "ontouchstart" in window;
        c.addClass(z.Vj ? "mobile": "no-mobile");
        z.Wm = a && 6 <= b || !z.Vj;
        "orientation" in window && (a = function() {
            var a = {
                0: "portrait",
                90: "landscape landscape-left",
                "-90": "landscape landscape-right"
            },
            b = a[window.orientation] || "";
            c.removeClass(z.Gb(a).join(" ")).addClass(b)
        },
        (0, window.$)(window).on("orientationchange", a), a())
    })(); Tm = {
        Cg: "确定",
        Te: "取消",
        Eg: "是",
        Mh: "否",
        cj: "保存",
        bj: "继续"
    }; Qj = {
        Cg: {
            key: "ok",
            caption: Tm.Cg
        },
        Te: {
            key: z.Lm,
            caption: Tm.Te
        },
        Eg: {
            key: "yes",
            caption: Tm.Eg
        },
        Mh: {
            key: "no",
            caption: Tm.Mh
        },
        cj: {
            key: "save",
            caption: Tm.cj
        },
        bj: {
            key: "continue",
            caption: Tm.bj
        }
    }; z.Dj = function() {
        return (new z.Pj).Bd(Qj.Te, !1, !0).Bd(Qj.Cg, !0)
    }; z.x(z.V, z.Cj); z.v("ZH.ui.Dialog", z.V); z.e = z.V.prototype; z.e.fL = null; z.e.C = function() {
        var a = !z.Vm;
        this.mx = a;
        Jj(this, a && this.wa);
        z.V.v.C.call(this);
        this.Zk && z.Tj(this);
        z.Uj(this, this.fL)
    };
    z.e.qR = z.Rj(function() {
        var a = z.Vg(),
        b = a / 2,
        a = z.Ka("html.modal-open {overflow:hidden}html.modal-doc-overflow {margin-right:%spx}html.modal-doc-overflow .modal-translate-shifting.sticky {transition-property:none; transform:translateX(-%spx)}html.modal-doc-overflow .modal-shifting {position:relative; right:%spx}", a, b, b);
        z.Mg(a)
    }); z.e.xm = z.aa(25);
    z.e.ha = function() {
        if (!this.fm || !window.Modernizr.flexbox) if (z.V.v.ha.call(this), !this.vF) {
            var a = (0, window.$)(this.m()),
            b = (0, window.$)(window).scrollTop();
            if (!z.Vj || z.Wj) var c = (0, window.parseInt)(a.css("top").slice(0, -2)),
            b = "-\x3d" + Math.min(c - b, 60) + "px";
            a.add(this.Pe).css("top", b)
        }
    }; z.e.focus = function() {
        z.Vj && !z.Wj || z.V.v.focus.call(this)
    }; z.V.prototype.setTitle = z.V.prototype.Oa; z.V.prototype.setModal = z.V.prototype.Qp; z.V.prototype.setDisposeOnHide = z.V.prototype.Df; z.V.prototype.setVisible = z.V.prototype.G;
    z.V.prototype.getContentElement = z.V.prototype.S; z.V.prototype.getDialogElement = z.V.prototype.ii; z.V.prototype.listen = z.V.prototype.g; z.v("ZH.dialog", z.X); z.X.confirm = Xj(function(a, b, c, d) {
        var f = {
            buttons: {
                yes: "确认",
                cancel: "取消"
            }
        },
        g = void 0;
        z.ta(a) ? (g = a, c = b) : g = {
            title: a,
            content: b
        };
        window.$.extend(!0, f, g);
        return z.X(f, (c || z.p).bind(d))
    }); z.X.confirm = z.X.confirm; z.X.alert = Xj(function(a, b) {
        var c = {
            title: "提示信息",
            buttons: {
                yes: "确定"
            }
        };
        z.ta(a) ? Object.assign(c, a) : c.content = a;
        return z.X(c, b)
    }); z.X.alert = z.X.alert;
    z.X.message = Xj(function(a, b, c) {
        if (a) {
            var d = z.X({
                title: c || "提示信息",
                content: z.Ma(a),
                buttons: {}
            }); (0, window.setTimeout)(function() {
                d.G(!1)
            },
            b || 2E3);
            return d
        }
    }); z.X.async = function(a) {
        var b = window.$.extend({},
        {
            title: "信息",
            dK: "加载中",
            buttons: {},
            onload: z.p
        },
        a),
        c = z.O("div", {
            className: "modal-dialog-async-loading",
            innerHTML: (b.dK || "加载中") + '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e'
        }),
        d = z.X(b);
        d.S().appendChild(c);
        b.Mw && b.Mw.then(function(a) {
            z.P(c);
            d.Fd || (a && d.ia(a), d.ha(), b.onload(d.S(), d))
        });
        return d
    }; z.x(z.Yj, z.G); z.Yj.prototype.o = function() {
        return this.of || (this.of = new z.xd(this))
    }; z.Yj.prototype.Ug = z.aa(26); z.x(Zj, z.Yj); Zj.prototype.init = function() {
        if (this.h = z.L("zh-global-message")) this.aI = z.N("zu-global-notify-msg", this.h),
        this.o().g(this.h, "click", this.Qa)
    }; Zj.prototype.Qa = function(a) {
        a.target && a.target.name && z.Q(this.h, !1)
    }; Zj.prototype.fireEvent = function(a) {
        this.dispatchEvent(a)
    }; z.x(z.ak, z.Lc); z.Y = new Zj; z.Y.init(); z.v("ZH.i", 
    function(a) {
        z.Y.dispatchEvent(new z.ak("iframe_data", a))
    }); z.v("ZH.cm", 
    function(a, b) {
        z.Y.dispatchEvent(new z.ak(a, b))
    }); z.x(z.ek, z.R); z.e = z.ek.prototype; z.e.Z = function(a) {
        z.ek.v.Z.call(this, a);
        this.Da = (0, window.$)(a).parents("form")
    };
    z.e.C = function() {
        z.ek.v.C.call(this);
        this.X = (0, window.$)(this.m());
        this.Nk = (0, window.$)("img", this.X);
        this.$i = (0, window.$)('input[name\x3d"captcha"]', this.X);
        this.rL = (0, window.$)(".Captcha-imageConatiner", this.X);
        this.yL = (0, window.$)(".Captcha-prompt", this.X);
        this.Rm = "cn" === this.X.data("type");
        gk(this);
        this.X.on("click", ".js-refreshCaptcha", this.mu.bind(this, !0));
        this.bK = !this.Rm;
        this.Rm && (this.Nk.on("click", this.fS.bind(this)), this.X.on("click", ".Captcha-mark", this.NW.bind(this)), this.xG = this.LQ.bind(this), 
        this.Da.on("input", "input", this.xG))
    };
    z.e.fS = function(a) {
        this.trackEvent("Select", "Icon");
        if (7 === (0, window.$)(".Captcha-mark", this.X).length) this.Da.data("validator").showErrors({
            captcha: "最多只能选择 7 个点"
        });
        else {
            hk(this);
            var b = this.Nk.offset(),
            c = a.pageX - b.left - this.Lz;
            a = a.pageY - b.top - this.Lz; (0, window.$)("\x3cspan /\x3e", {
                "class": "Captcha-mark sprite-index-icon-delete"
            }).css({
                left: c,
                top: a
            }).appendTo(this.rL).mouseenter(function() { (0, window.$)(this).addClass("sprite-index-icon-delete").removeClass("sprite-index-icon-mark")
            }).mouseleave(function() { (0, window.$)(this).addClass("sprite-index-icon-mark").removeClass("sprite-index-icon-delete")
            });
            fk(this)
        }
    };
    z.e.NW = function(a) {
        this.trackEvent("Unselect", "Icon");
        hk(this); (0, window.$)(a.target).remove();
        fk(this)
    }; z.e.mu = function(a) {
        a && this.trackEvent("Click", "Button");
        this.trackEvent("Refresh", "Image");
        this.qb = (0, z.I)().toString();
        a = (new z.wh).add("r", this.qb);
        "login" === this.Xb && a.add("type", "login");
        this.Rm && a.add("lang", "cn");
        var b = uh(new z.qh(this.eC), a);
        gk(this);
        this.Nk.fadeOut(200, 
        function() { (0, window.$)(this).attr("src", b.toString()).fadeIn(200)
        })
    };
    z.e.LQ = function() {
        this.Rm && 0 === this.Da.serializeArray().filter(function(a) {
            return "captcha" !== a.name && "" === window.$.trim(a.value)
        }).length && (this.Da.off("input", "input", this.xG), this.bK = !0, z.ik(this))
    }; z.e.info = function() {
        return "1" === z.bj.get("login" === this.Xb ? "l_n_c": "n_c") ? {
            captcha: {
                type: this.Rm ? "Chinese": "English",
                id: this.qb
            }
        }: {}
    }; z.e.trackEvent = function(a, b) {
        var c = this.info();
        "show" === a ? (0, z.Hm)(this, {
            element: b
        },
        c) : (0, z.Hi)(this, {
            action: a,
            element: b
        },
        c)
    };
    var lk = "closure_memoize_cache_";
    var Xm = (0, z.q)(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || 
    function(a) {
        return window.setTimeout(a, 1E3 / 60)
    },
    window); window.$.easing.easeOutCubic = function(a, b, c, d, f) {
        return d * ((b = b / f - 1) * b * b + 1) + c
    };
    (function(a) {
        window.$.fn.onTransitionEnd = function(b, c) { (0, window.$)(this).one(a, b).emulateTransitionEnd(c);
            return this
        };
        window.$.fn.emulateTransitionEnd = function(b) {
            var c = !1,
            d = this; (0, window.$)(this).one(a, 
            function() {
                c = !0
            }); (0, window.setTimeout)(function() {
                c || (0, window.$)(d).trigger(a)
            },
            b);
            return this
        }
    })({
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        msTransition: "MSTransitionEnd",
        transition: "transitionend"
    } [window.Modernizr.prefixed("transition") || 
    "transition"]);
    (function(a) {
        window.$.fn.onAnimationEnd = function(b, c) { (0, window.$)(this).one(a, b).emulateAnimationEnd(c);
            return this
        };
        window.$.fn.emulateAnimationEnd = function(b) {
            var c = !1,
            d = this; (0, window.$)(this).one(a, 
            function() {
                c = !0
            }); (0, window.setTimeout)(function() {
                c || (0, window.$)(d).trigger(a)
            },
            b);
            return this
        }
    })({
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "mozAnimationEnd",
        OAnimation: "oanimationend",
        msAnimation: "MSAnimationEnd",
        animation: "animationend"
    } [window.Modernizr.prefixed("animation") || "animation"]);
    window.$.fn.ne = function() {
        var a = {},
        b = this.serializeArray();
        window.$.each(b, 
        function() {
            a[this.name] ? (a[this.name].push || (a[this.name] = [a[this.name]]), a[this.name].push(this.value || "")) : a[this.name] = this.value || ""
        });
        return a
    }; z.x(mk, z.G); mk.prototype.play = function() {
        var a = this;
        Xm(function() {
            a.X.toggleClass(a.AW)
        });
        if (window.Modernizr.csstransitions) a.X.onTransitionEnd(function() {
            a.dispatchEvent("end")
        },
        a.duration);
        else a.dispatchEvent("end")
    }; mk.prototype.stop = z.p; z.l(nk, z.V); z.e = nk.prototype; z.e.B = function() {
        z.V.prototype.B.call(this);
        z.Ej(this);
        this.Se = (0, window.$)(this.zd);
        this.Pc = (0, window.$)(this.S()); (0, window.$)(z.Gj(this)).addClass("z-ico-close");
        this.Aq = (0, window.$)('\x3cspan class\x3d"mutiview-dialog-title-back z-ico-left"\x3e\x3c/span\x3e').appendTo(this.Se)
    };
    z.e.C = function() {
        z.V.prototype.C.call(this);
        this.Aq.click(window.$.proxy(this.YV, this));
        var a = this.m(),
        b = this.Cj(); (0, window.$)(a).addClass(this.YT);
        this.SJ(new mk(a, "show", 300), new mk(a, "show", 300), new mk(b, "show", 300), new mk(b, "show", 300))
    };
    z.e.ia = function(a, b) {
        z.V.prototype.ia.call(this, a); (0, window.$)(".title", this.Pc).replaceAll(Fj(this));
        var c = (0, window.$)(".title", this.Se).addClass("right"),
        d = (0, window.$)(".view", this.Pc).addClass("right");
        b ? (this.Mk = (0, window.$)(".title." + b, this.Se), this.Xi = (0, window.$)(".view." + b, this.Pc)) : (this.Mk = c.first(), this.Xi = d.first());
        this.Mk.removeClass("right");
        this.Xi.removeClass("right")
    };
    z.e.YV = function() {
        var a = this.Xi,
        b = this.Mk,
        c = this.$I.pop(),
        d = this.ZI.pop();
        c.length && d.length && (sk(this), c.css("visibility", "visible").removeClass(" left"), d.css("visibility", "visible").removeClass("left"), a.addClass("right").onTransitionEnd(function() {
            a.css("visibility", "hidden")
        },
        300), b.addClass("right").onTransitionEnd(function() {
            b.css("visibility", "hidden")
        },
        300), this.Xi = c, this.Mk = d, tk(this, this.AD.pop()), this.St())
    }; z.e.St = function() {}; window.$.fn.placeholder = function(a) {
        return this.each(function() {
            var b = (0, window.$)(this),
            c = b.data("placeholder");
            c || b.data("placeholder", c = new z.wk(this, a));
            c.check()
        })
    }; z.yk = "placeholder" in window.document.createElement("input"); z.e = z.wk.prototype; z.e.defaults = {
        text: "",
        offsetParent: null,
        xD: !1
    }; z.e.pN = ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"];
    z.e.zk = function(a) {
        var b = this.input,
        c = this.J;
        c.text = a || "";
        z.yk ? (Bk(b) || z.dj(b, "label", c.text), b.setAttribute("placeholder", c.text)) : z.nf(this.label, c.text)
    }; z.e.H = function() {
        this.Yg && (this.Yg.removeAll(), this.Yg.H());
        z.P(this.label);
        this.label = null
    }; z.e.offsetParent = function() {
        return this.J.offsetParent || this.input.offsetParent
    };
    z.e.check = function() {
        if (!z.yk) if (this.dh() && z.Lg(this.input)) {
            this.show();
            var a = this.input,
            b = z.Tg(a),
            c = this.label,
            d = z.Dg(a, this.offsetParent());
            z.sg(c, {
                left: d.x + b.left + "px",
                top: d.y + b.top + "px",
                width: Ck(a, "width"),
                fontSize: Ck(a, "fontSize"),
                lineHeight: Ck(a, "lineHeight"),
                fontFamily: Ck(a, "fontFamily")
            });
            this.offsetParent().appendChild(c)
        } else this.hide()
    }; z.e.show = function() {
        this.label && z.Q(this.label, !0)
    }; z.e.hide = function() {
        this.label && z.Q(this.label, !1)
    }; z.e.dh = function() {
        return ! this.input.value
    };
    z.e.position = function() {
        z.y(this.pN, 
        function(a) {
            this.label.style[a] = Ck(this.input, a)
        },
        this)
    }; z.Zm = {
        LG: function() {
            var a = this,
            b = this.m(),
            c = (0, window.$)(".js-show-sns-buttons", b);
            c.click(function() {
                c.onTransitionEnd(function() {
                    c.css("visibility", "hidden")
                },
                250).removeClass("is-visible").next(".sns-buttons").addClass("is-visible")
            }); (0, window.$)("button.weibo", b).click(function() {
                a.na({
                    category: "sign_in_or_sign_up",
                    action: "click_sign_with_weibo_start"
                });
                z.bk("sina")
            }); (0, window.$)("button.qq", b).click(function() {
                a.na({
                    category: "sign_in_or_sign_up",
                    action: "click_sign_with_qq_start"
                });
                z.bk("qq")
            });
            (0, window.$)("button.wechat", b).click(function() {
                a.na({
                    category: "sign_in_or_sign_up",
                    action: "click_sign_with_wechat_start"
                });
                z.bk("wechat")
            })
        },
        na: function(a) {
            this.Jf && !a.label && (a.label = this.Jf);
            this.dispatchEvent(window.$.extend({
                type: "trackRequested"
            },
            a)) && z.yi(a)
        },
        sI: function(a) {
            var b = (0, window.$)("form", this.m()); (0, window.$)(":submit", b).click(function() {
                a(b.ne())
            }); (0, window.$)("keydown", b).click(function(c) {
                13 === c.keyCode && a(b.ne())
            })
        },
        Ge: function(a, b) {
            var c = (0, window.$)(".submit", a);
            a.validate(window.$.extend({},
            z.Ym, {
                submitHandler: z.vk(c, window.$.proxy(b, this))
            }));
            this.Da = a
        },
        getData: function() {
            return this.Da.ne()
        },
        showErrors: function(a) {
            this.Da.data("validator").showErrors(a)
        },
        Ws: function(a) {
            a = (0, window.$)(".input-wrapper.toggle-password", a);
            var b = (0, window.$)("input", a),
            c = (0, window.$)(".z-ico-show-password", a);
            c.click(function() {
                "password" === b.prop("type") ? (c.addClass("z-ico-hide-password"), b.prop("type", "text")) : (c.removeClass("z-ico-hide-password"), b.prop("type", "password"))
            })
        },
        Vs: function(a, b) {
            var c = 
            z.uk(a, 60, 
            function(a) {
                return a ? "%s 秒后重发": "重发验证码"
            },
            window.$.proxy(b, this), !0);
            z.Ac(this, c);
            return c
        },
        wl: function() {
            var a = this;
            z.yk || (0, window.setTimeout)(function() { (0, window.$)("input[placeholder]:visible", a.Pc).placeholder()
            },
            10)
        },
        Od: function() {
            this.dispatchEvent("beforeredirect");
            var a = (new z.qh(window.location.href)).Ce().get("next");
            a ? window.location.href = a: window.location.reload()
        },
        rf: function(a) {
            return ! /^\+?[0-9]+$/.test(a)
        },
        wb: function(a, b, c) {
            a[b] && (a[c] = a[b], delete a[b])
        },
        bd: function(a) {
            this.Jf = 
            a
        },
        pq: function(a) {
            var b = [this.getParent(), this].find(function(a) {
                return a instanceof nk
            });
            b ? ok(b, a) : a.G(!0)
        }
    };
    z.Ym = {
        ignore: ".is-ignoreValidation",
        onkeyup: !1,
        onfocusout: !1,
        validClass: "",
        focusInvalid: !1,
        highlight: z.p,
        messages: {
            fullname: {
                required: "请填写姓名"
            },
            invitation_code: {
                required: "请填写邀请码"
            },
            account: {
                required: z.Ik ? "请填写邮箱": "请填写手机号或邮箱"
            },
            agreement: {
                required: "请勾选并同意协议"
            },
            phone_num: {
                required: "请填写手机号"
            },
            email: {
                required: "请填写邮箱"
            },
            password: {
                required: "请填写密码"
            },
            verification_code: {
                required: "请填写验证码"
            }
        },
        errorPlacement: function(a, b) {
            if (!b.next(".error").length) {
                var c = b.prop("name");
                "captcha" === c && Xm(function() {
                    b.nextAll(".Captcha-prompt").addClass("is-hidden")
                });
                "agreement" === c ? b.parents(".agreement").find(".error").remove().end().append('\n          \x3cdiv class\x3d"error"\x3e' + a.text() + "\x3c/div\x3e\n        ").find("input").focus() : a.insertAfter(b).click(function() {
                    a.prev("input").focus()
                });
                Xm(function() {
                    a.addClass("is-visible")
                });
                b.one("focus", 
                function() {
                    a.onTransitionEnd(function() {
                        a.remove()
                    },
                    300).removeClass("is-visible")
                });
                if ("password" === b.prop("name")) b.one("focus", 
                function() {
                    "password" === b.prop("type") && (b.select(), b.off("mousedown mouseup").one("mouseup", 
                    function(a) {
                        a.preventDefault()
                    }).one("mousedown", 
                    function() {
                        b.off("mouseup")
                    }))
                })
            }
        },
        showErrors: function(a, b) {
            var c = (0, window.$)("label.error", this.currentForm);
            c.addClass("highlighted"); (0, window.setTimeout)(function() {
                c.removeClass("highlighted")
            },
            30);
            var d = this;
            b.length && window.$.each(b, 
            function(a, b) {
                var c = (0, window.$)(b.element),
                k = b.message,
                m = (0, window.$)('\x3clabel class\x3d"error"\x3e' + k + "\x3c/label\x3e");
                "该邮箱已注册" !== k && "该手机号已注册" !== k || (0, window.$)('\x3cspan\x3e · \x3c/span\x3e\x3ca class\x3d"switch-to-login" href\x3d"javascript:;"\x3e直接登录\x3c/a\x3e').appendTo(m);
                Xm(function() {
                    d.settings.errorPlacement(m, c)
                })
            })
        }
    }; z.l(z.Dk, nk); z.Dk.prototype.C = function() {
        nk.prototype.C.call(this);
        this.wl()
    }; z.Dk.prototype.show = function() {
        var a = this;
        $m().then(function() {
            a.G(!0)
        })
    }; z.Dk.prototype.St = function() {
        nk.prototype.St.call(this);
        this.wl()
    };
    var $m = z.jk(function() {
        if (z.T.Fb()) throw Error("Logged in user should not call ZH.ui.SignDialog.prefetchTemplate");
        return window.$.get("/node/Register", {
            params: {
                is_org_page: z.Ik
            }
        })
    }); z.Ca(z.Dk.prototype, z.Zm); (0, window.$)(function() {
        z.T.Fb() || $m().then(function(a) { (0, window.$)(a).appendTo("body")
        })
    }); z.l(z.Ek, z.Dk); z.Ek.prototype.B = function() {
        z.Dk.prototype.B.call(this);
        this.ia((0, window.$)(".login-sms-verification-template").html())
    }; z.Ek.prototype.C = function() {
        z.Dk.prototype.C.call(this);
        this.Ge((0, window.$)("form", this.h), this.submit);
        var a = this.options.data.phone_num; (0, window.$)('input[name\x3d"phone_num"]', this.h).val(a.slice(0, -8) + "****" + a.slice( - 4));
        Fk(this)
    };
    z.Ek.prototype.submit = function() {
        var a = this,
        b = Object.assign({},
        this.options.data, this.getData());
        return window.$.post("/login/two_step_verification/sms", b, 
        function(b) {
            b.r ? (b = b.data, b.password ? a.options.Ym ? (b = new a.options.Ym({
                data: {
                    account: a.options.data.phone_num,
                    password: a.options.data.password
                },
                iF: b
            }), b.Db(a), a.pq(b)) : (a.options.oT(b), a.G(!1)) : a.showErrors(b)) : (a.na({
                xc: !0,
                category: "sign_in",
                action: "sign_in_success_phone"
            }), a.Od())
        })
    }; z.Ca(z.Ek.prototype, z.Zm); z.x(z.Gk, z.Dk); z.e = z.Gk.prototype; z.e.B = function() {
        z.Gk.v.B.call(this);
        this.ia((0, window.$)(".unable-login-template").html())
    };
    z.e.C = function() {
        z.Gk.v.C.call(this);
        this.Cv = (0, window.$)(".view.reset-password-verification", this.Pc);
        this.GC = (0, window.$)(".title.reset-password-verification", this.Se);
        var a = (0, window.$)("form", this.Cv);
        this.Ge(a, this.tT);
        this.jw && (0, window.$)('input[name\x3d"account"]', a).val(this.jw);
        a = (0, window.$)(".captcha-module", a).get(0);
        this.su = new z.ek;
        this.su.w(a);
        Jk(this);
        this.pv = (0, window.$)(".view.sms-login-verification", this.Pc);
        this.oL = (0, window.$)(".title.sms-login-verification", this.Se);
        a = (0, window.$)("form", 
        this.pv);
        this.Ge(a, this.vT); (0, window.$)('input[name\x3d"phone_num"]', a).val(this.jw);
        a = (0, window.$)(".captcha-module", this.pv).get(0);
        this.Nv = new z.ek;
        this.Nv.w(a);
        Kk(this);
        Hk(this)
    };
    z.e.tT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        a = c.ne(); (0, window.$)('input[name\x3d"account"]', this.Kq).val(a.account);
        var d = this.rf(a.account),
        f = d ? "/send_login_verification_code/email": "/send_login_verification_code/sms";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_num");
        a.is_org_page = z.Ik; (0, window.$)('input[name\x3d"verification_code"]', this.Kq).attr("placeholder", d ? "邮箱收到的 6 位数验证码": "手机收到的 6 位数验证码");
        return window.$.get(f, a, 
        function(a) {
            a.r ? 200001 === a.errcode ? (a = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此找回\x3c/a\x3e', 
            z.Ik && (a = '用户帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此找回\x3c/a\x3e'), c.data("validator").showErrors({
                account: a
            })) : (z.ik(b.su), c.data("validator").showErrors(a.data)) : (rk(b, !0, this.Kq, this.BL), b.cV.start())
        })
    };
    z.e.uT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        a = c.ne();
        var d = this.rf(a.account),
        f = d ? "/reset_password/email": "/reset_password/phone_num";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_num");
        return window.$.post(f, a, 
        function(a) {
            a.r ? c.data("validator").showErrors(a.data) : b.Od()
        })
    };
    z.e.vT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        return window.$.get("/send_login_verification_code/sms", c.serialize(), 
        function(a) {
            a.r ? (z.ik(b.Nv), a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : (a = (0, window.$)('input[name\x3d"phone_num"]', c).val(), (0, window.$)('input[name\x3d"phone_num"]', this.qv).val(a), rk(b, !0, this.qv, this.nL), b.ZL.start())
        })
    };
    z.e.wT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        return window.$.post("/login/sms_code", c.serialize(), 
        function(a) {
            a.r ? (a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : b.Od()
        })
    }; z.x(z.Lk, z.Dk); z.Lk.prototype.B = function() {
        z.Lk.v.B.call(this);
        var a = (0, window.$)(".oauth-register-template").html(),
        b = this.Bh.status;
        "bound" === b ? this.ia(a, "bound") : "registered" === b ? this.ia(a, "registered") : this.ia(a, "register")
    }; z.Lk.prototype.C = function() {
        z.Lk.v.C.call(this);
        Mk(this);
        Nk(this);
        Ok(this);
        Pk(this);
        var a = this;
        this.Pc.on("click", "button.bind-login", 
        function() {
            rk(a, !0, a.rv, a.pL)
        }).on("click", "button.register", 
        function() {
            rk(a, !0, a.Mf, a.zL)
        })
    };
    z.Lk.prototype.pp = function(a) {
        var b = this,
        c = (0, window.$)(a);
        b.na({
            xc: !0,
            category: "sign_up",
            action: "sign_up_front_end_pass_" + Qk(b)
        });
        return window.$.post("/register/sns", c.serialize(), 
        function(a) {
            a.r ? (z.ik(b.Cc), c.data("validator").showErrors(a.data)) : (b.na({
                xc: !0,
                category: "sign_up",
                action: "sign_up_success_" + Qk(b)
            }), b.Od())
        })
    };
    z.Lk.prototype.MS = function(a) {
        var b = this,
        c = (0, window.$)(a);
        b.na({
            xc: !0,
            category: "sign_in",
            action: "sign_in_front_end_pass_" + Qk(b)
        });
        return window.$.post("/login/bind", c.serialize(), 
        function(a) {
            a.r ? c.data("validator").showErrors(a.data) : (b.na({
                xc: !0,
                category: "sign_in",
                action: "sign_in_success_" + Qk(b)
            }), b.Od())
        })
    }; z.l(z.Rk, z.R); z.e = z.Rk.prototype; z.e.C = function() {
        z.R.prototype.C.call(this);
        this.hc();
        this.vo()
    };
    z.e.hc = function() {
        var a = this.m(),
        b = this.Da = (0, window.$)("form", a);
        this.Ge(b, this.fA);
        this.Ws(b);
        this.LG();
        var c = (0, window.$)(".captcha-module", a).get(0);
        this.Cc = new z.ek("login");
        this.Cc.w(c);
        z.ik(this.Cc);
        var d = this,
        f = (0, window.$)("input.account", b); (0, window.$)("button.unable-login", a).click(function() {
            var a = new z.Gk(f.val());
            d.pq(a)
        });
        this.options.data && (a = this.options.data.account, c = this.options.data.password, a && f.val(a), c && (0, window.$)("[name\x3dpassword]", b).val(c));
        this.options.iF && this.showErrors(this.options.iF);
        this.sI(function(a) {
            a = a.account;
            var b = d.rf(a);
            d.na({
                category: "sign_in",
                action: a ? "click_sign_in_submit_" + (b ? "email": "phone") : "click_sign_in_submit_no_channel"
            })
        })
    };
    z.e.fA = function() {
        var a = this,
        b = this.getData(),
        c = this.rf(b.account);
        this.na({
            xc: !0,
            category: "sign_in",
            action: "sign_in_front_end_pass_" + (c ? "email": "phone")
        });
        var d = c ? "/login/email": "/login/phone_num";
        c ? this.wb(b, "account", "email") : this.wb(b, "account", "phone_num");
        return window.$.post(d, b, 
        function(d) {
            if (d && d.r) {
                var g = d.errcode;
                1991831 === g ? (d = new z.Ek({
                    data: {
                        phone_num: b.phone_num,
                        password: b.password
                    },
                    Ym: a.options.Ym
                }), d.Db(a), a.pq(d)) : 200001 === g ? (d = '机构帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/org/signin"\x3e点此登录\x3c/a\x3e', 
                z.Ik && (d = '个人帐号\x3cspan\x3e · \x3c/span\x3e\x3ca href\x3d"/signin"\x3e点此登录\x3c/a\x3e'), a.showErrors({
                    account: d
                })) : (z.ik(a.Cc), a.showErrors(d.data))
            } else a.na({
                xc: !0,
                category: "sign_in",
                action: "sign_in_success_" + (c ? "email": "phone")
            }),
            a.Od()
        })
    }; z.e.vo = function() {
        z.dk(this.o(), this.Yz)
    }; z.e.Yz = function(a) {
        a = a.yf;
        1 === a.login ? this.Od() : (a = new z.Lk(a), a.bd(this.Jf), this.pq(a))
    }; z.Ca(z.Rk.prototype, z.Zm); z.l(z.Sk, z.Dk); z.Sk.prototype.B = function() {
        z.Dk.prototype.B.call(this);
        this.ia((0, window.$)(".login-template").html())
    }; z.Sk.prototype.C = function() {
        z.Dk.prototype.C.call(this);
        var a = new z.Rk(Object.assign({
            Ym: z.Sk
        },
        this.options));
        this.L(a);
        a.bd(this.Jf);
        a.w(this.S());
        this.na({
            category: "sign_in",
            action: "popup_sign_in_box_appear"
        })
    }; z.Ca(z.Sk.prototype, z.Zm); z.x(z.Tk, z.xc);
    z.Tk.prototype.start = function() {
        if (!this.Lo) {
            this.Lo = !0;
            this.oe = {};
            var a = z.Pe();
            this.oe.viewport = [a.width, a.height, (0, z.I)()];
            var b = [],
            c = 0,
            d = 0; (0, window.$)(window.document).on("mousemove.recording", 
            function(a) {
                c = a.clientX;
                d = a.clientY
            });
            var f = this,
            g = function() { (0, window.setTimeout)(function() {
                    150 <= b.length && b.shift();
                    b.push([c, d, (0, z.I)()]);
                    f.Lo && g()
                },
                500)
            };
            g();
            this.oe.trace = b;
            var h = {};
            this.xv.on("keydown.recording keyup.recording mouseenter.recording mouseleave.recording click.recording", "input", 
            function(a) {
                var b = a.target.name,
                c = h[b];
                c || (c = h[b] = {
                    mouse: [],
                    keyborad: []
                });
                "mouseenter" === a.type || "mouseleave" === a.type || "click" === a.type ? c.mouse.push([a.type, a.offsetX, a.offsetY, (0, z.I)()]) : "password" === b ? c.keyborad.push([a.type, (0, z.I)()]) : c.keyborad.push([a.type, a.keyCode, (0, z.I)()])
            });
            h.submit = [];
            this.xv.on("mousedown.recording mouseenter.recording mouseleave.recording", ":submit", 
            function(a) {
                h.submit.push([a.type, a.offsetX, a.offsetY, (0, z.I)()])
            });
            this.oe.register = h
        }
    };
    z.Tk.prototype.stop = function() {
        this.Lo && (this.Lo = !1, (0, window.$)(window.document).off(".recording"), this.xv.off(".recording"));
        return this.oe
    }; z.Tk.prototype.D = function() {
        z.Tk.v.D.call(this);
        this.stop();
        this.oe = null
    }; z.l(z.Uk, z.R); z.e = z.Uk.prototype; z.e.C = function() {
        z.R.prototype.C.call(this);
        this.We();
        this.vo()
    };
    z.e.We = function() {
        var a = this.m(),
        b = (0, window.$)("form", a);
        this.Ch = !(0, window.$)('input[name\x3d"phone_num"]', b).length;
        this.Ge(b, this.pp);
        this.Ws(b);
        this.LG();
        a = (0, window.$)(".captcha-module", a).get(0);
        this.Cc = new z.ek;
        this.Cc.w(a);
        z.ik(this.Cc);
        this.Qm = new z.Tk(b);
        this.Qm.start();
        z.Ac(this, this.Qm);
        var c = this;
        this.sI(function(a) {
            a = a.phone_num || a.account;
            var b = c.Ch ? c.rf(a) : !1;
            c.na({
                category: "sign_up",
                action: a || !c.Ch ? "click_sign_up_submit_" + (b ? "email": "phone") : "click_sign_up_submit_no_channel"
            })
        })
    };
    z.e.pp = function(a) {
        var b = this;
        a = (0, window.$)(a);
        var c = a.data("validator"),
        d = a.ne();
        a = b.Ch ? this.rf(d.account) : !1;
        b.na({
            xc: !0,
            category: "sign_up",
            action: "sign_up_front_end_pass_" + (a ? "email": "phone")
        });
        var f = a ? "/register/email": "/register/phone_num/validation";
        a ? this.wb(d, "account", "email") : this.wb(d, "account", "phone_num");
        var g = this.Qm.stop();
        d.userInfo = JSON.stringify(g);
        return a ? window.$.post(f, d, 
        function(a) {
            a.r ? (z.ik(b.Cc), c.showErrors(a.data)) : (b.na({
                xc: !0,
                category: "sign_up",
                action: "sign_up_success_email"
            }), 
            b.ug && Mi.Lm("sign_up", "sign_up_success", b.ug), b.Od())
        }) : window.$.post(f, d, 
        function(a) {
            a.r ? (z.ik(b.Cc), b.Ch || b.wb(a.data, "account", "phone_num"), c.showErrors(a.data)) : b.dispatchEvent({
                type: "success",
                data: d
            })
        })
    }; z.e.vo = function() {
        z.dk(this.o(), this.Yz)
    }; z.e.Yz = function(a) {
        a = a.yf;
        var b = {
            qqconn: "qq",
            wechat: "wechat",
            sina: "weibo"
        } [a.type];
        1 === a.login ? (this.na({
            xc: !0,
            category: "sign_in",
            action: "sign_in_success_" + b
        }), this.Od()) : (a = new z.Lk(a), a.Db(this), a.bd(this.Jf), this.pq(a))
    }; z.Ca(z.Uk.prototype, z.Zm); z.l(z.Vk, z.R); z.Vk.prototype.C = function() {
        z.R.prototype.C.call(this);
        this.We();
        this.o().g(this, "hide", this.ZD)
    };
    z.Vk.prototype.We = function() {
        var a = (0, window.$)("form", this.m());
        this.Ge(a, this.pT);
        var b = (0, window.$)(".send-code", a),
        c = (0, window.$)('input[name\x3d"phone_num"]', a);
        this.ma = this.Vs(b, 
        function() {
            var b = c.val(),
            f = this;
            window.$.get("/send_register_verification_code/sms", window.$.param({
                phone_num: b
            }), 
            function(b) {
                b.r && (b = b.data, f.wb(b, "account", "phone_num"), a.data("validator").showErrors(b))
            })
        });
        c.val(this.Vn.phone_num);
        window.$.get("/send_register_verification_code/sms", {
            phone_num: this.Vn.phone_num
        });
        this.ma.start()
    }; z.Vk.prototype.pT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        a = window.$.extend({},
        this.Vn, c.ne());
        return window.$.post("/register/phone_num", a, 
        function(a) {
            a.r ? (a = a.data, b.wb(a, "account", "phone_num"), c.data("validator").showErrors(a)) : (b.na({
                xc: !0,
                category: "sign_up",
                action: "sign_up_success_phone"
            }), b.ug && Mi.Lm("sign_up", "sign_up_success", b.ug), b.Od())
        })
    }; z.Ca(z.Vk.prototype, z.Zm); z.l(z.Wk, z.Dk); z.e = z.Wk.prototype; z.e.B = function() {
        z.Dk.prototype.B.call(this);
        this.ia((0, window.$)(".register-template").html() + (0, window.$)(".phone-verification-template").html())
    }; z.e.C = function() {
        z.Dk.prototype.C.call(this);
        Xk(this);
        this.o().g(this, "hide", this.ZD);
        this.o().g(this, "beforeredirect", this.JU);
        this.na({
            category: "sign_up",
            action: "popup_sign_up_box_appear"
        });
        this.ug && Mi.track("sign_up", "show_sign_up_dialog", this.ug)
    }; z.e.Np = z.aa(27); z.e.ZD = function() {
        this.kj = "";
        aj()
    };
    z.e.JU = function() {
        var a = this.kj;
        a ? z.bj.set("actioncontinuationhash", (0, window.encodeURIComponent)(a), 60, "/") : aj()
    }; z.Ca(z.Wk.prototype, z.Zm); z.x(Yk, z.G);
    var $k = {}; Yk.prototype.defaults = {}; Yk.prototype.o = function() {
        return this.Yg || (this.Yg = new z.xd(this))
    }; Yk.prototype.init = function() {}; Yk.prototype.D = function() {
        Yk.v.D.call(this);
        this.view && (z.Kb(this.view.Rb, this.name), this.view = null);
        this.Yg && (this.Yg.H(), this.Yg = null)
    }; z.x(z.bl, z.R); z.e = z.bl.prototype; z.e.defaults = {
        source: null,
        use: ["autoload", "shortcut"],
        Gf: !0,
        un: "zg-btn-white zu-button-more"
    }; z.e.use = function(a, b) {
        var c = al(a, b);
        c.view = this;
        this.wa ? c.init(this) : this.o().g(this, "initialized", 
        function() {
            c.init(this)
        });
        this.Rb[a] = c;
        return this
    }; z.e.Lg = function() { ! this.Bc && this.J.Gf && (this.Bc = this.tn(), z.cf(this.Bc, this.h), this.o().g(this.Bc, "click", this.jh))
    }; z.e.C = function() {
        z.bl.v.C.call(this);
        this.Lg();
        z.y(this.gb(), this.Fr, this);
        z.y(this.J.use, this.use, this);
        this.dispatchEvent("initialized")
    };
    z.e.D = function() {
        z.Db(this.Rb, 
        function(a) {
            a.H()
        });
        this.Rb = null;
        this.Bc && (z.P(this.Bc), this.Bc = null);
        z.bl.v.D.call(this)
    }; z.e.gb = function() {
        return z.ff(this.h)
    }; z.e.Fr = function(a, b) {
        this.Nt(a, b);
        this.dispatchEvent({
            type: "itemcreated",
            item: a,
            index: b
        })
    }; z.e.Nt = z.p; z.e.eT = function(a) {
        if (a) {
            var b = a.results,
            c = !b || !b.length;
            c || this.render(b);
            this.dispatchEvent("next"); (c || !1 === a.next) && dl(this)
        }
    };
    z.e.render = function(a, b) {
        a = window.$.isArray(a) ? a.join("") : a;
        var c = z.Xe(a + " ");
        z.y(window.$.makeArray(z.ff(c)), this.Fr, this);
        z.df(this.h, c, b)
    }; z.e.jh = function() {
        if (!1 !== this.dispatchEvent("beforeloadnext") && !this.Ko()) return this.Ku(!0),
        this.promise = this.source().done((0, z.q)(this.eT, this)).always((0, z.q)(z.Ba(this.Ku, !1), this))
    }; z.e.Ko = function() {
        return this.promise && "pending" === this.promise.state()
    }; z.e.jf = function() {
        return this.Bc
    };
    z.e.tn = function() {
        return z.O("a", {
            "aria-role": "button",
            "class": this.J.un
        },
        "更多")
    }; z.e.Ku = function(a) {
        this.Bc && (this.Bc.innerHTML = a ? '\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e 加载中': "更多", z.W.enable(this.Bc, "loading", a))
    };
    var fl = {
        s: function(a, b, c) {
            return (0, window.isNaN)(c) || "" == c || a.length >= c ? a: a = -1 < b.indexOf("-", 0) ? a + Za(" ", c - a.length) : Za(" ", c - a.length) + a
        },
        f: function(a, b, c, d, f) {
            d = a.toString(); (0, window.isNaN)(f) || "" == f || (d = (0, window.parseFloat)(a).toFixed(f));
            var g;
            g = 0 > a ? "-": 0 <= b.indexOf("+") ? "+": 0 <= b.indexOf(" ") ? " ": "";
            0 <= a && (d = g + d);
            if ((0, window.isNaN)(c) || d.length >= c) return d;
            d = (0, window.isNaN)(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
            a = c - d.length - g.length;
            return d = 0 <= b.indexOf("-", 0) ? g + d + Za(" ", a) : g + 
            Za(0 <= b.indexOf("0", 0) ? "0": " ", a) + d
        },
        d: function(a, b, c, d, f, g, h, k) {
            return fl.f((0, window.parseInt)(a, 10), b, c, d, 0, g, h, k)
        }
    }; fl.i = fl.d; fl.u = fl.d; Zk("activeSource", {
        defaults: {
            uN: "%d 条新动态",
            un: "zu-main-feed-fresh-button",
            $Y: z.p
        },
        init: function(a) {
            this.data = [];
            this.button = this.tn();
            z.bf(this.button, a.m());
            this.o().g(this.button, "click", 
            function() {
                a.render(this.data, 0);
                this.setData([])
            });
            var b = this,
            c = this.options.source(function(a) {
                a && a.length && b.setData(a.concat(b.data))
            },
            function() {
                return b.data
            });
            if (!c || !z.sa(c.H)) throw Error("Source must return a disposable object.");
            this.pO = c
        },
        setData: function(a) {
            this.data = a;
            this.US()
        },
        US: function() {
            var a = 
            this.data.length;
            z.nf(this.button, z.el(this.options.uN, a));
            z.Q(this.button, !!a)
        },
        tn: function() {
            return z.O("a", {
                href: "javascript:;",
                style: "display:none",
                "class": this.options.un
            })
        },
        H: function() {
            Yk.prototype.H.call(this);
            z.Cc(this.pO);
            this.options = null;
            this.button && (z.P(this.button), this.button = null)
        }
    }); z.x(z.gl, z.xc); z.e = z.gl.prototype; z.e.Iu = !1; z.e.yA = 0; z.e.ma = null; z.e.fire = function(a) {
        this.hw = arguments;
        this.ma || this.yA ? this.Iu = !0: this.Og()
    }; z.e.stop = function() {
        this.ma && (z.wd(this.ma), this.ma = null, this.Iu = !1, this.hw = [])
    }; z.e.pause = function() {
        this.yA++
    }; z.e.D = function() {
        z.gl.v.D.call(this);
        this.stop()
    }; z.e.HT = function() {
        this.ma = null;
        this.Iu && !this.yA && (this.Iu = !1, this.Og())
    }; z.e.Og = function() {
        this.ma = z.vd(this.fl, this.bh);
        this.bk.apply(null, this.hw)
    }; z.x(z.hl, z.G); z.hl.prototype.hc = function() {
        var a = this.hq = new z.gl(this.update, this.hO, this);
        this.ga.g(this.viewport, ["scroll", "resize"], 
        function() {
            a.fire()
        })
    }; z.hl.prototype.o = function() {
        return this.ga
    }; z.hl.prototype.D = function() {
        z.hl.v.D.call(this);
        this.ga.H();
        this.ga = null;
        this.hq.H();
        this.hq = null
    }; z.hl.prototype.update = function() {
        this.size = (lf(this.viewport) ? z.Pe: Hg)(this.viewport);
        this.dispatchEvent("update")
    }; z.an = new z.hl; (0, window.$)(function() {
        z.an.update()
    }); Zk("autoload", {
        defaults: {
            gr: !0,
            viewport: window,
            ZY: function() {
                return ! 0
            }
        },
        init: function(a) {
            if (a.jf() && (!this.options.gr || z.T.Fb())) {
                var b = this.options.viewport,
                c = new z.hl(b);
                z.Ac(this, c);
                il(c, this, 
                function(c) {
                    return z.Lg(a.jf()) ? 400 >= (lf(b) ? a.jf().getBoundingClientRect().top - c.height: b.scrollHeight - b.scrollTop - c.height) : !1
                });
                this.o().g(a, "complete", this.H).g(a, "next", 
                function() {
                    this.enable()
                });
                this.enable()
            }
        },
        enable: function() {
            this.o().ya(this, "nearbottom", 
            function() {
                this.view.jh()
            })
        }
    }); Zk("childConstructor", {
        defaults: {
            ci: null,
            factory: null
        },
        init: function(a) {
            z.sa(this.options.ci) && cl(a, this.QN, this);
            z.sa(this.options.factory) && cl(a, this.CU, this)
        },
        QN: function(a) {
            var b = new this.options.ci;
            this.view.L(b);
            b.w(a)
        },
        CU: function(a) {
            var b = this.options.factory(a);
            this.view.L(b);
            b.w(a)
        }
    }); Zk("dataPagingSource", {
        defaults: {
            VD: !0
        },
        init: function(a) {
            var b = (0, window.$)(a.m()).data("paging").next;
            b || dl(a);
            a.source = function() {
                return window.$.get(b).then(function(a) {
                    b = a.paging.next;
                    return {
                        results: a.htmls,
                        next: !!b
                    }
                })
            }
        }
    }); Zk("expandLimit", {
        defaults: {
            vW: 3
        },
        init: function(a) {
            z.T.Fb() || this.o().g(a, "beforeloadnext", 
            function() {
                var a = new z.Wk;
                a.bd("expand");
                a.show();
                return ! 1
            })
        }
    }); Zk("locationSource", {
        defaults: {
            ot: 20,
            param: null,
            wA: !1,
            offset: function(a) {
                return a.length
            }
        },
        init: function(a) {
            function b(a) {
                return {
                    start: c.wA ? z.kb(a).id.split("-")[1] : 0,
                    offset: c.offset(a)
                }
            }
            var c = this.options,
            d = c.url || window.location.href,
            f = a.gb().length; (!f || f < c.ot) && dl(a);
            a.source = function() {
                return window.$.post(d, (c.param || b)(a.gb())).then(function(b) {
                    if (!b.r) {
                        b = b.msg;
                        var d = b[0];
                        z.qa(d) && d < c.ot && dl(a);
                        return {
                            results: b[1]
                        }
                    }
                })
            }
        }
    }); Zk("nodeSource", {
        defaults: {
            VD: !0,
            offset: null,
            filter: null
        },
        init: function(a) {
            var b = this.options,
            c = (0, window.$)(a.m()).data("init");
            if (c) {
                var d = "/node/" + c.nodename,
                f = c.params,
                g = f.offset || 0,
                c = f.limit,
                h = f.pagesize;
                b.VD && c && a.gb().length < c && dl(a);
                a.source = function() {
                    var c = void 0,
                    c = b.offset ? b.offset() : g + a.gb().length;
                    return window.$.post(d, {
                        method: "next",
                        params: window.$.extend(f, {
                            offset: c
                        })
                    }).then(function(a) {
                        var c = !0;
                        h && !a.r && a.msg.length < h && (c = !1);
                        var d = a.msg;
                        b.filter && "function" === typeof b.filter && (d = 
                        b.filter(a.msg));
                        return ! a.r && {
                            results: d,
                            next: c
                        }
                    })
                }
            }
        }
    }); z.rl = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps-lock",
        27: "esc",
        32: "space",
        33: "pg-up",
        34: "pg-down",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: "semicolon",
        61: "equals",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        93: "context",
        96: "num-0",
        97: "num-1",
        98: "num-2",
        99: "num-3",
        100: "num-4",
        101: "num-5",
        102: "num-6",
        103: "num-7",
        104: "num-8",
        105: "num-9",
        106: "num-multiply",
        107: "num-plus",
        109: "num-minus",
        110: "num-period",
        111: "num-division",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        186: "semicolon",
        187: "equals",
        189: "dash",
        188: ",",
        190: ".",
        191: "/",
        192: "`",
        219: "open-square-bracket",
        220: "\\",
        221: "close-square-bracket",
        222: "single-quote",
        224: "win"
    };
    var ql; z.x(jl, z.G);
    var kl = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19], ll = "color date datetime datetime-local email month number password search tel text time url week".split(" "); z.e = jl.prototype; z.e.NU = function(a, b) {
        tl(this.Dm, ol(1, arguments), a)
    }; z.e.OW = function(a) {
        ul(this.Dm, ol(0, arguments))
    }; z.e.bC = function() {
        this.Dm = {}
    };
    z.e.D = function() {
        jl.v.D.call(this);
        this.bC();
        z.md(this.gh, "keydown", this.lf, !1, this);
        z.B && z.md(this.gh, "keyup", this.bG, !1, this);
        z.ml && !z.B && (z.md(this.gh, "keypress", this.qG, !1, this), z.md(this.gh, "keyup", this.rG, !1, this));
        this.gh = null
    }; z.e.bG = function(a) {
        if (z.Uc) {
            if (224 == a.keyCode) {
                this.RH = !0;
                z.vd(function() {
                    this.RH = !1
                },
                400, this);
                return
            }
            var b = a.metaKey || this.RH;
            67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.metaKey = b, this.lf(a))
        }
        32 == this.Rv && 32 == a.keyCode && a.preventDefault();
        this.Rv = null
    };
    z.e.qG = function(a) {
        32 < a.keyCode && sl(a) && (this.dH = !0)
    }; z.e.rG = function(a) { ! this.dH && sl(a) && this.lf(a)
    };
    z.e.lf = function(a) {
        var b;
        b = a.keyCode;
        if (16 == b || 17 == b || 18 == b) b = !1;
        else {
            var c = a.target,
            d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
            f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
            b = !d && !f || this.fP[b] || this.KM ? !0: f ? !1: this.sS && (a.altKey || a.ctrlKey || a.metaKey) ? !0: "INPUT" == c.tagName && this.oW[c.type] ? 13 == b: "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.NM ? !0: 32 != b: !1
        }
        if (b) if ("keydown" == a.type && sl(a)) this.dH = !1;
        else {
            b = z.mj(a.keyCode);
            c = b & 255 | ((a.shiftKey ? 1: 0) | (a.ctrlKey ? 2: 0) | (a.altKey ? 4: 0) | (a.metaKey ? 8: 0)) << 8;
            if (!this.Mn[c] || 1500 <= (0, z.I)() - this.jt) this.Mn = this.Dm,
            this.jt = (0, z.I)();
            if (c = this.Mn[c]) c.next ? (this.Mn = c.next, this.jt = (0, z.I)(), a.preventDefault()) : (this.Mn = this.Dm, this.jt = (0, z.I)(), this.jD && a.preventDefault(), this.OM && a.stopPropagation(), c = c.Ff, d = a.target, f = this.dispatchEvent(new vl("shortcut", c, d)), (f &= this.dispatchEvent(new vl("shortcut_" + c, c, d))) || a.preventDefault(), z.B && (this.Rv = b))
        }
    }; z.x(vl, z.Lc); z.x(wl, z.xc); z.bn = []; z.e = wl.prototype; z.e.hc = function(a) {
        z.bn.push(this);
        this.cl = new z.Rd;
        this.ga = new jl(a);
        this.ga.jD = !1;
        this.ga.addEventListener("shortcut", this.LT, !1, this)
    }; z.e.register = function(a, b, c) {
        this.pn = {
            key: a,
            action: b,
            context: c
        };
        this.ga.NU(a, a);
        this.cl.set(a, this.pn);
        return this
    }; z.e.PW = function(a) {
        this.pn = null;
        this.ga.OW(a, a);
        this.cl.remove(a);
        return this
    }; z.e.unregister = function(a) {
        z.y(z.na(a) ? a: [a], this.PW, this)
    }; z.e.bC = function() {
        this.pn = null;
        this.ga.bC();
        this.cl.clear();
        return this
    };
    z.e.LT = function(a) {
        var b = this.cl.get(a.identifier);
        b && b.action.call(b.context, a)
    }; z.e.D = function() {
        wl.v.D.call(this);
        z.tb(z.bn, this);
        this.ga.H();
        this.cl = this.pn = this.ga = null
    }; z.cn = new wl(window.document); z.cn.iL = function(a) {
        return new wl(a)
    }; z.x(yl, z.R); z.e = yl.prototype; z.e.defaults = {
        items: "\x3eli",
        AN: !1,
        QO: !0,
        className: "navigable",
        uF: "navigable-focusin"
    }; z.e.C = function() {
        yl.v.C.call(this);
        var a = this.J;
        this.X = (0, window.$)(this.h).addClass(a.className).data("navigable", this).on("focusin.navigable focusout.navigable", a.items, window.$.proxy(this.$S, this));
        this.Ph()
    }; z.e.D = function() {
        yl.v.D.call(this);
        this.X.removeClass(this.J.className).data("navigable", null).off(".navigable");
        this.X = null
    }; z.e.Ph = z.p; z.e.index = function() {
        return this.Rj
    };
    z.e.size = function() {
        return this.items().length
    }; z.e.prev = function() {
        zl(this, this.index() - 1)
    }; z.e.next = function() {
        zl(this, this.index() + 1)
    }; z.e.first = function() {
        zl(this, 0)
    }; z.e.last = function() {
        zl(this, this.size() - 1)
    }; z.e.$S = function(a) {
        var b = this.J,
        c = a.currentTarget,
        d = (0, window.$)(c);
        "focusin" === a.type ? (d.addClass(b.uF), this.Rj = window.$.inArray(c, this.items())) : d.removeClass(b.uF)
    }; z.e.hp = function(a) {
        this.J.QO && (a.tabIndex = -1, a.focus());
        this.dispatchEvent({
            data: {
                item: a
            },
            type: "focus"
        })
    };
    z.e.items = function() {
        var a = this.J.items;
        return a ? (0, window.$)(a, this.X).get() : this.X.children().get()
    }; z.x(z.Bl, yl); z.Mb(z.Bl.prototype.defaults = {
        tV: 200,
        offsetTop: 0
    },
    yl.prototype.defaults); z.e = z.Bl.prototype; z.e.Ph = function() {
        z.Db(Cl(this), 
        function(a, b) {
            z.xl(z.cn.register(b, a.action, this), a.Vb)
        },
        this)
    }; z.e.D = function() {
        z.Bl.v.D.call(this);
        z.cn.unregister(z.Hb(Cl(this)))
    }; z.e.hp = function(a) {
        z.Bl.v.hp.call(this, a);
        var b = this.J;
        this.scrollTo((0, window.$)(a).offset().top + b.offsetTop, b.tV, "easeOutCubic")
    }; z.e.scrollTo = function(a, b, c) {
        this.CL.stop().animate({
            scrollTop: a
        },
        b, c)
    };
    z.e.rV = function() {
        this.scrollTo("+\x3d60", 100)
    }; z.e.wV = function() {
        this.scrollTo("-\x3d60", 100)
    }; Zk("shortcut", {
        defaults: {
            items: "\x3ediv"
        },
        init: function(a) {
            a.gb().length && (this.ap = new z.Bl(this.options), this.ap.w(a.m()), this.o().g(this.ap, "action", 
            function(b) {
                b.data.index >= b.data.size && a.jf() && z.Lg(a.jf()) && a.jf().click()
            }))
        },
        H: function() {
            Yk.prototype.H.call(this);
            this.ap && (this.ap.H(), this.ap = null)
        }
    }); z.x(z.Dl, z.bl);
}).call(this, __z_z__);