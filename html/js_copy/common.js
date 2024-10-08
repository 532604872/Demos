(function(z) {
    var yn = function(a) {
        a = a.tabIndex;
        return z.qa(a) && 0 <= a && 32768 > a
    };
    var zn = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    var An = function(a, b) {
        return z.pb(a.uD || [], 
        function(a) {
            return b === a || z.mf(a, b)
        })
    };
    var Bn = function(a) {
        if (a.Zj) throw Error("Can not change this state of the popup while showing.");
    };
    var Cn = function(a) {
        return a.Aj.length ? a.Aj.pop() : a.Fn()
    };
    var Dn = function(a) {
        try {
            return a && a.activeElement
        } catch(b) {}
        return null
    };
    var En = function(a) {
        return zn(a) && yn(a)
    };
    var Fn = function(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0: /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch(b) {}
        throw Error("Invalid JSON string: " + a);
    };
    z.Gn = function(a, b) {
        return z.ba[a] = b
    };
    z.Hn = function(a, b, c) {
        var d = z.an;
        d.ga.g(d, "update", 
        function g() {
            a.getBoundingClientRect().bottom < this.size.height && (b.call(c), this.ga.qa(this, "update", g))
        });
        d.update()
    };
    var In = function(a, b) {
        var c = b.getBoundingClientRect();
        return c.bottom < a.mN || c.bottom > a.size.height ? !1: !0
    };
    var Jn = function(a) {
        z.yk ? z.W.enable(a.input, "placeholder-hilight", !1) : z.W.enable(a.label, "placeholder-label-hilight", !1)
    };
    z.Kn = function(a) {
        var b = z.Y;
        b.aI ? (b.aI.innerHTML = a, z.Q(b.h, !0)) : z.X.message(a)
    };
    var Ln = function(a, b) {
        b && b.length && z.y(b, 
        function(a) {
            this.dispatchEvent(new z.ak(a[0], a[1]))
        },
        a)
    };
    z.Mn = function(a, b) {
        z.G.call(this);
        this.ga = new z.xd(this);
        this.xh(a || null);
        b && (this.Xb = b)
    };
    z.Nn = function(a, b) {
        return a.le.get(b)
    };
    var On = function(a, b) {
        return a.Rc && b ? z.lb(a.Rc, b) : -1
    };
    var Pn = function(a, b) {
        a.Ra && a.Ra.Xe && (z.Kb(a.Ra.Xe, a.qb), z.Lb(a.Ra.Xe, b, a));
        a.qb = b
    };
    var Qn = function(a) {
        return new z.qg(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    var Rn = function(a) {
        return "CSS1Compat" == a.La.compatMode
    };
    z.Sn = function(a) {
        if (a.ea) return Fn(a.ea.responseText)
    };
    var Tn = function(a) {
        z.Td(a);
        for (var b = {},
        c = 0; c < a.Za.length; c++) {
            var d = a.Za[c];
            b[d] = a.Ib[d]
        }
        return b
    };
    var Un = function(a) {
        return a
    };
    var Vn = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, z.I)()).toString(36)
    };
    var Wn = function(a) {
        a = a ? z.Je(a) : window.document;
        return ! z.C || 9 <= z.Ug || Rn(z.J(a)) ? a.documentElement: a.body
    };
    z.Xn = function(a) {
        var b = z.Je(a),
        c = new z.Ge(0, 0),
        d = Wn(b);
        if (a == d) return c;
        a = z.Cg(a);
        b = z.wf(z.J(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    var Yn = function(a, b) {
        for (var c = b; c = c.previousSibling;) if (c == a) return - 1;
        return 1
    };
    z.Zn = function(a, b) {
        for (var c in a) if (a[c] == b) return ! 0;
        return ! 1
    };
    z.$n = function(a) {
        var b = 0,
        c;
        for (c in a) b++;
        return b
    };
    z.ao = function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    };
    var bo = function(a) {
        return a.replace(/&([^;]+);/g, 
        function(a, c) {
            switch (c) {
            case "amp":
                return "\x26";
            case "lt":
                return "\x3c";
            case "gt":
                return "\x3e";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (! (0, window.isNaN)(d)) return String.fromCharCode(d)
                }
                return a
            }
        })
    };
    var co = function(a) {
        var b = {
            "\x26amp;": "\x26",
            "\x26lt;": "\x3c",
            "\x26gt;": "\x3e",
            "\x26quot;": '"'
        },
        c;
        c = z.t.document.createElement("div");
        return a.replace(eo, 
        function(a, f) {
            var g = b[a];
            if (g) return g;
            if ("#" == f.charAt(0)) {
                var h = Number("0" + f.substr(1)); (0, window.isNaN)(h) || (g = String.fromCharCode(h))
            }
            g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = g
        })
    };
    z.fo = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z.D || z.Gc) && 0 == a) return ! 0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return ! 0;
        default:
            return ! 1
        }
    };
    z.go = function(a) {
        return new z.He(a.offsetWidth, a.offsetHeight)
    };
    var ho = function(a) {
        if (z.C && !(8 <= z.Ug)) return a.offsetParent;
        var b = z.Je(a),
        c = z.yg(a, "position"),
        d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = z.yg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    var io = function(a, b, c, d) {
        if (null != a) for (a = a.firstChild; a;) {
            if (b(a) && (c.push(a), d) || io(a, b, c, d)) return ! 0;
            a = a.nextSibling
        }
        return ! 1
    };
    var jo = function(a, b) {
        var c = a.parentNode;
        if (c == b) return - 1;
        for (var d = b; d.parentNode != c;) d = d.parentNode;
        return Yn(d, a)
    };
    var ko = function(a, b) {
        return new z.Ge(a.x - b.x, a.y - b.y)
    };
    var lo = function(a) {
        this.ru = a
    };
    var mo = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (z.na(b)) {
                    a.serializeArray(b, c);
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    var d = "",
                    f;
                    for (f in b) if (Object.prototype.hasOwnProperty.call(b, f)) {
                        var g = b[f];
                        "function" != typeof g && (c.push(d), no(f, c), c.push(":"), mo(a, a.ru ? a.ru.call(b, f, g) : g, c), d = ",")
                    }
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                no(b, c);
                break;
            case "number":
                c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? 
                String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    };
    var no = function(a, b) {
        b.push('"', a.replace(z.Sl, 
        function(a) {
            var b = oo[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), oo[a] = b);
            return b
        }), '"')
    };
    var po = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + z.ua(a) : b.substr(0, 1) + a
    };
    var qo = function(a, b) {
        if ("function" == typeof a.every) return a.every(b, void 0);
        if (z.oa(a) || z.pa(a)) return z.ao(a, b, void 0);
        for (var c = z.Jd(a), d = z.Id(a), f = d.length, g = 0; g < f; g++) if (!b.call(void 0, d[g], c && c[g], a)) return ! 1;
        return ! 0
    };
    var ro = function(a) {
        return a.lb && "function" == typeof a.lb ? a.lb() : z.oa(a) || z.pa(a) ? a.length: z.$n(a)
    };
    var so = function(a) {
        return z.Va(a, "\x26") ? "document" in z.t ? co(a) : bo(a) : a
    };
    var to = function(a, b, c, d, f) {
        if (! (z.C || z.Gc || z.D && z.E("525"))) return ! 0;
        if (z.Uc && f) return z.fo(a);
        if (f && !d) return ! 1;
        z.qa(b) && (b = z.mj(b));
        if (!c && (17 == b || 18 == b || z.Uc && 91 == b)) return ! 1;
        if ((z.D || z.Gc) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return ! 1
        }
        if (z.C && d && b == a) return ! 1;
        switch (a) {
        case 13:
            return ! 0;
        case 27:
            return ! (z.D || z.Gc)
        }
        return z.fo(a)
    };
    var uo = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return ! 1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return ! 1;
        case 0:
            return ! z.B;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    };
    z.vo = function(a, b, c) {
        c ? z.ij(a, b) : z.kj(a, b)
    };
    var wo = function(a) {
        return z.fj(a, "label")
    };
    var xo = function(a, b) {
        var c = "";
        b && (c = b.id);
        z.dj(a, "activedescendant", c)
    };
    z.yo = function(a, b, c) {
        var d = a.m ? a.m() : a;
        z.Db(b, 
        function(a, b) {
            d.setAttribute("data-za-" + b, a)
        }); (0, window.$.data)(d, "zaRespondMoudleFn", c)
    };
    var zo = function(a, b) {
        switch (a) {
        case 1:
            return b ? "disable": "enable";
        case 2:
            return b ? "highlight": "unhighlight";
        case 4:
            return b ? "activate": "deactivate";
        case 8:
            return b ? "select": "unselect";
        case 16:
            return b ? "check": "uncheck";
        case 32:
            return b ? "focus": "blur";
        case 64:
            return b ? "open": "close"
        }
        throw Error("Invalid component state");
    };
    z.Ao = function(a, b, c) {
        c = c ? null: a.getElementsByTagName("*");
        if (z.em) {
            if (b = b ? "none": "", a.style && (a.style[z.em] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[z.em] = b)
            }
        } else if (z.C || z.vg) if (b = b ? "on": "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    };
    z.Bo = function(a) {
        var b = z.Xn(a);
        a = z.Ig(a);
        return new z.rg(b.x, b.y, a.width, a.height)
    };
    z.Co = function(a, b, c) {
        var d = z.Xn(a);
        b instanceof z.Ge && (c = b.y, b = b.x);
        z.Ag(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
    };
    var Do = function(a, b) {
        var c = b || z.Re(window.document),
        d;
        d = c || z.Re(window.document);
        var f = z.Xn(a),
        g = z.Xn(d),
        h = z.Tg(d);
        if (d == z.Re(window.document)) {
            var k = f.x - d.scrollLeft,
            f = f.y - d.scrollTop; ! z.C || 10 <= z.Ug || (k += h.left, f += h.top)
        } else k = f.x - g.x - h.left,
        f = f.y - g.y - h.top;
        var h = d.clientHeight - a.offsetHeight,
        g = d.scrollLeft,
        m = d.scrollTop,
        g = g + Math.min(k, Math.max(k - (d.clientWidth - a.offsetWidth), 0)),
        m = m + Math.min(f, Math.max(f - h, 0));
        d = new z.Ge(g, m);
        c.scrollLeft = d.x;
        c.scrollTop = d.y
    };
    var Eo = function(a) {
        for (var b = new z.qg(0, window.Infinity, window.Infinity, 0), c = z.J(a), d = c.ua().body, f = c.ua().documentElement, g = z.Re(c.La); a = ho(a);) if (! (z.C && 0 == a.clientWidth || z.D && 0 == a.clientHeight && a == d) && a != d && a != f && "visible" != z.yg(a, "overflow")) {
            var h = z.Xn(a),
            k = new z.Ge(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, 
        d);
        b.top = Math.max(b.top, g);
        c = z.Pe(c.Va());
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b: null
    };
    var Fo = function(a) {
        var b = a.body;
        a = a.documentElement;
        return new z.Ge(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    };
    var Go = function(a, b) {
        var c = a.style[z.db(b)];
        return "undefined" !== typeof c ? c: a.style[z.tg(a, b)] || ""
    };
    var Ho = function(a, b) {
        var c = b.x < a.left ? b.x - a.left: b.x > a.right ? b.x - a.right: 0,
        d = b.y < a.top ? b.y - a.top: b.y > a.bottom ? b.y - a.bottom: 0;
        return Math.sqrt(c * c + d * d)
    };
    z.Io = function(a, b) {
        return z.uf(a, null, b, void 0)
    };
    z.Jo = function(a) {
        var b = [];
        z.rf(a, b, !1);
        return b.join("")
    };
    z.Ko = function(a, b) {
        var c = [];
        io(a, b, c, !1);
        return c
    };
    z.Lo = function(a) {
        if ("outerHTML" in a) return a.outerHTML;
        var b = z.Je(a).createElement("DIV");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    };
    var Mo = function(a) {
        var b,
        c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
        f = window.Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) g.unshift(h),
            h = h.parentNode;
            d.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var h = d[0][b], k = 1; k < c; k++) if (h != d[k][b]) return g;
            g = h
        }
        return g
    };
    var No = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1: -1;
        if (z.C && !(9 <= z.Ug)) {
            if (9 == a.nodeType) return - 1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
            d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode,
            g = b.parentNode;
            return f == g ? Yn(a, b) : !c && z.mf(f, b) ? -1 * jo(a, b) : !d && z.mf(g, a) ? jo(b, a) : (c ? a.sourceIndex: f.sourceIndex) - (d ? b.sourceIndex: g.sourceIndex)
        }
        d = z.Je(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(z.t.Range.START_TO_END, d)
    };
    z.Oo = function(a) {
        return z.ka(a.previousElementSibling) ? a.previousElementSibling: z.jf(a.previousSibling, !1)
    };
    z.Po = function(a) {
        return z.ka(a.nextElementSibling) ? a.nextElementSibling: z.jf(a.nextSibling, !0)
    };
    z.Qo = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    z.Ro = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.Me(window.document, "*", a, b)
    };
    z.So = function(a, b) {
        return a == b ? !0: a && b ? a.width == b.width && a.height == b.height: !1
    };
    z.To = function(a, b, c) {
        a = [a, "\x26", b];
        null != c && a.push("\x3d", (0, window.encodeURIComponent)(String(c)));
        a[1] && (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c.indexOf("?"), 0 > b ? a[1] = "?": b == c.length - 1 && (a[1] = void 0));
        return a.join("")
    };
    var Uo = function(a, b) {
        return (new lo(b)).serialize(a)
    };
    var Vo = function(a) {
        return eval("(" + a + ")")
    };
    var Wo = function(a) {
        this.Ib = new z.Rd;
        a && this.addAll(a)
    };
    var Xo = function(a, b) {
        var c = ro(b);
        if (a.lb() > c) return ! 1; ! (b instanceof Wo) && 5 < c && (b = new Wo(b));
        return qo(a, 
        function(a) {
            var c = b;
            return c.contains && "function" == typeof c.contains ? c.contains(a) : c.ai && "function" == typeof c.ai ? c.ai(a) : z.oa(c) || z.pa(c) ? z.A(c, a) : z.Zn(c, a)
        })
    };
    var Yo = function(a) {
        try {
            return z.Nd(a).next()
        } catch(b) {
            if (b != z.Od) throw b;
            return null
        }
    };
    z.Zo = function(a, b) {
        var c = z.Nd(a),
        d = new z.Ld;
        d.next = function() {
            for (;;) {
                var a = c.next();
                if (b.call(void 0, a, void 0, c)) return a
            }
        };
        return d
    };
    var $o = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    z.ap = function(a) {
        var b = {},
        c;
        for (c in a) b[a[c]] = c;
        return b
    };
    var bp = function(a, b) {
        var c = {},
        d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    };
    var cp = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (z.na(d)) for (var f = 0; f < d.length; f += 8192) for (var g = z.yb(d, f, f + 8192), g = cp.apply(null, g), h = 0; h < g.length; h++) b.push(g[h]);
            else b.push(d)
        }
        return b
    };
    z.dp = function(a, b) {
        for (var c = z.pa(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--) if (d in c && b.call(void 0, c[d], d, a)) return d;
        return - 1
    };
    var ep = function(a, b) {
        var c = 0;
        z.y(a, 
        function(a, f, g) {
            b.call(void 0, a, f, g) && ++c
        },
        void 0);
        return c
    };
    z.fp = function(a) {
        return function() {
            return ! a.apply(this, arguments)
        }
    };
    z.gp = function(a) {
        var b = arguments,
        c = b.length;
        return function() {
            for (var a = 0; a < c; a++) if (!b[a].apply(this, arguments)) return ! 1;
            return ! 0
        }
    };
    z.hp = function(a) {
        var b = arguments,
        c = b.length;
        return function() {
            for (var a, f = 0; f < c; f++) a = b[f].apply(this, arguments);
            return a
        }
    };
    z.ip = function(a, b) {
        var c = arguments,
        d = c.length;
        return function() {
            var a;
            d && (a = c[d - 1].apply(this, arguments));
            for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
            return a
        }
    };
    var jp = function(a) {
        var b;
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    z.kp = function() {
        return "goog_" + z.El++
    };
    z.lp = function(a) {
        return a.replace(/[\s\xa0]+$/, "")
    };
    z.mp = function(a) {
        return a.replace(/^[\s\xa0]+/, "")
    };
    var np = function(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    z.op = function(a) {
        return a.replace(/(\r\n|\r|\n)+/g, " ")
    };
    z.pp = function(a) {
        return ! /[^\t\n\r ]/.test(a)
    };
    z.qp = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    z.rp = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    var sp = function() {
        throw Error("unimplemented abstract method");
    };
    z.Z = function(a) {
        z.de.call(this);
        this.RK = !!a;
        this.headers.set("X-Requested-With", "XMLHttpRequest");
        this.on("complete", this.tP, !1, this)
    };
    z.tp = function(a, b, c, d) {
        var f = new z.Z;
        if (b) f.on("complete", b);
        f.ajax(a, d, c)
    };
    var up = function(a, b) {
        vp.push({
            gL: a,
            filter: b
        })
    };
    var wp = function(a) {
        var b = a.getResponseHeader("content-type");
        if (b) {
            var c = xp[b.split(";")[0].toLowerCase()];
            if (c && vp.length) {
                var d = z.te(a);
                z.y(vp, 
                function(a) {
                    "*" !== a.gL && a.gL !== c || a.filter("json" === c ? JSON.parse(d) : d, this)
                },
                a)
            }
        }
    };
    var yp = function() {
        if (zp) return zp;
        var a = z.O("div", {
            id: "zh-global-spinner",
            style: "display:none",
            innerHTML: "加载中…"
        });
        window.document.body.appendChild(a);
        return zp = a
    };
    var Ap = function() {
        z.G.call(this)
    };
    z.Bp = function(a, b, c) {
        function d() {
            var b = new z.Z(!0),
            d = "/question/" + (a ? "set_anonymous": "set_public"),
            g = "qid\x3d" + (c || z.S.pa);
            b.on("success", 
            function() {
                var c = z.Sn(b);
                c && !c.r && (z.S && (z.S.rb = a), f.dispatchEvent(new z.Cp(a)))
            });
            b.ajax(d, g)
        }
        var f = z.Dp,
        g = {
            title: "确认使用匿名身份？",
            content: '\x3cp\x3e使用匿名身份后\x3c/p\x3e\x3cul style\x3d"margin: 5px 0 0 5px;list-style-position: inside;"\x3e\x3cli\x3e提问、回答、赞同、关注会显示为匿名\x3c/li\x3e\x3cli\x3e除提问者本人，不能匿名编辑问题\x3c/li\x3e\x3cli\x3e不能邀请别人回答问题\x3c/li\x3e\x3c/ul\x3e'
        },
        h = {
            title: "确认取消匿名身份？",
            content: "取消匿名身份后， 提问、回答、赞同和关注将以实名显示。"
        };
        z.X.confirm(a ? g: h, 
        function(a) {
            a && d();
            b && b(a)
        })
    };
    z.Cp = function(a) {
        this.type = "anon_change";
        this.rb = a
    };
    var Ep = function(a) {
        z.G.call(this);
        this.J = window.$.extend({
            kk: z.p
        },
        a || {});
        this.zr = z.tm.guiders2 || {};
        this.dR = (0, z.I)();
        this.Ab = z.Vj && !z.Wj;
        this.hc()
    };
    var Fp = function(a, b, c) {
        function d(g) {
            g || (g = a.shift()) && b.call(c, g, f++, d)
        }
        a = a.slice();
        var f = 0;
        d()
    };
    var Gp = function(a) {
        var b = {
            "home-topstory": {
                path: "/",
                offset: {
                    right: -10
                },
                $t: "righttop",
                gn: "arrow-lefttop",
                CA: ".zu-main-feed-con",
                xt: ".zu-main-sidebar"
            }
        },
        c = a.zr.section;
        c && Fp(z.Hb(c), 
        function(a, f, g) { (f = b[a]) && f.path === window.location.pathname ? Hp(this, "section", a, c[a], f, !1, g) : g()
        },
        a)
    };
    var Ip = function(a) {
        var b = {
            "/": {
                offset: {
                    top: 6
                },
                trigger: "1page-down inview",
                $t: "lefttop",
                gn: "arrow-righttop",
                CA: ".js-sidebarRoundtable",
                xt: ".zu-main-content-inner"
            },
            "/explore": {
                $t: "lefttop",
                gn: "arrow-righttop",
                CA: ".explore-side-section-roundtable",
                xt: ".zu-main-content-inner"
            }
        },
        c = a.zr["exclusive-popover"];
        c && Fp(z.Hb(c), 
        function(a, f, g) {
            var h;
            "roundtable" === a && (h = b[window.location.pathname]);
            h && Hp(this, "exclusive-popover", a, c[a], h, h.trigger, g)
        },
        a)
    };
    var Hp = function(a, b, c, d, f, g, h) {
        if (b && c && d && f) {
            var k = (0, window.$)(f.CA);
            if (k.length && ("righttop" !== f.$t || 300 < z.Pe().width - k[0].getBoundingClientRect().right)) {
                var m = (0, window.$)(z.Ka('\x3cdiv class\x3d"guide2-section-popover"\x3e\x3cdiv class\x3d"title"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"content"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3ca class\x3d"dismiss" href\x3d"%s"\x3e%s\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e', d.title || "", d.content, d.dismissHref || "#", d.dismissText));
                m.addClass(f.$t).addClass(f.gn).appendTo(k);
                var n = f.offset;
                n && window.$.each(["left", "top", "right", "bottom"], 
                function(a, b) {
                    n[b] && m.css("margin-" + b, n[b])
                });
                var r = (0, window.$)([]);
                z.Ba(function(a) {
                    return (0, z.I)() - a
                },
                a.dR);
                var w = function() {
                    f.xt && (r = (0, window.$)('\x3cspan class\x3d"guidev2-mask"/\x3e').appendTo(f.xt)); (0, window.setTimeout)(function() {
                        m.add(r).addClass("fx-show");
                        K()
                    });
                    window.$.post("/node/Guide2", {
                        method: "dismiss_popover",
                        params: {
                            category: b,
                            key: c
                        }
                    })
                },
                H = function(a) {
                    if (window.Modernizr.csstransitions) m.add(r).removeClass("fx-show").onTransitionEnd(function() { (0, window.$)(this).remove()
                    },
                    350);
                    else m.add(r).remove();
                    h && h(a)
                };
                a = function(a) {
                    function b(a) {
                        var c = !1;
                        return function() { ! 0 !== c && (c = a.apply(this, arguments));
                            return c
                        }
                    }
                    var c = 0,
                    d = b(function() {
                        var a = window.pageYOffset;
                        if (a >= f.size.height) return c = a,
                        !0
                    }),
                    d = {
                        "1page-down .5page-up": z.gp(d, b(function() {
                            return c - window.pageYOffset >= f.size.height / 2
                        })),
                        "1page-down inview": z.gp(d, 
                        function() {
                            return In(f, k[0])
                        })
                    },
                    f = new z.hl,
                    g = d[a] || d["1page-down .5page-up"];
                    f.o().g(f, "update", 
                    function() {
                        g() && (f.H(), w())
                    })
                };
                var K = function() {
                    var a = new z.hl;
                    a.o().g(a, "update", 
                    function() {
                        m.parent().length ? In(a, m[0]) || (H(), a.H()) : a.H()
                    })
                }; (0, window.$)(".dismiss", m).click(function() {
                    H();
                    return ! 1
                }); (0, window.$)(".skip-all", m).click(function() {
                    window.$.post("/node/Guide2", {
                        method: "skip_popover",
                        params: {
                            category: b
                        }
                    });
                    H(!0);
                    return ! 1
                });
                g ? a(g) : w()
            }
        }
    };
    var Jp = function() {
        var a = (0, window.$)("#guidersv2-page-banner"); (0, window.$)(".js-close", a).click(function() {
            a.remove()
        })
    };
    var Kp = function(a) {
        function b(a) {
            window.$.post("/node/Guide2", {
                method: "dismiss_editor",
                params: {
                    key: a
                }
            })
        }
        function c(a) {
            z.yi(Object.assign({
                category: "popup_guide",
                label: {
                    bio: "popup_guide_personal_introduction",
                    topic: "popup_guide_topic_recommendation"
                } [h]
            },
            a))
        }
        function d(a) {
            k || (k = new z.V, k.Df(!0), k.jF = !1, z.W.add(k.ii(), "Guide"));
            k.ia(a);
            k.G(!0)
        }
        var f = window.$.Deferred(),
        g = a.zr.editor;
        if (!g || !g.length) return f.reject();
        var g = g.slice(),
        h,
        k,
        m = {},
        n = {
            bio: function(a) {
                var f = (0, window.$)("#tmpl-Guide-BioEditor").html();
                if (!f) return window.console && window.console.warn("Cannot find template"),
                a();
                var g = z.hp(a, 
                function() {
                    b("bio")
                });
                d(f); (function(a) {
                    a = (0, window.$)(a).off();
                    var b = (0, window.$)(".js-submit", a),
                    d = (0, window.$)('input[name\x3d"bio"]', a);
                    b.click(function() {
                        var a = m.nw = window.$.trim(d.val());
                        a ? (window.$.post("/node/Guide2", {
                            method: "add_headline",
                            params: {
                                headline: a
                            }
                        }), c({
                            action: "click_edit_personal_introduction_submit",
                            attributes: {
                                personal_introduction: a
                            }
                        })) : c({
                            action: "click_edit_personal_introduction_skip"
                        });
                        g()
                    })
                })(k.S());
                c({
                    action: "popup_edit_personal_introduction_appear"
                })
            },
            topic: function(a) {
                function f() {
                    z.Dp.dispatchEvent("guider2:topicselected")
                }
                window.$.get("/node/GuideTopicList", 
                function(a) { (0, window.$)(".Guide-topicsLoading").remove(); (0, window.$)(a).appendTo(".Guide-content")
                });
                var g = (0, window.$)("#tmpl-Guide-Topics").html();
                if (g) {
                    var h = z.hp(a, 
                    function() {
                        b("topic")
                    });
                    d(g); (function(a) {
                        var b = (0, window.$)(a).off();
                        a = (0, window.$)(".js-submit", b);
                        b.on("click", ".Guide-TopicsItem", 
                        function() {
                            var a = 
                            (0, window.$)(this);
                            a.toggleClass("is-checked");
                            var b = (0, window.$)(".template-relatedTopics", a);
                            if (b.length) {
                                var c = b.html();
                                b.remove(); (0, window.$)(c).insertAfter(a)
                            }
                        });
                        a.click(function() {
                            var a = m.Pm = [],
                            d = {}; (0, window.$)(".Guide-TopicsItem", b).filter(".is-checked").each(function() {
                                var b = (0, window.$)(this),
                                c = b.data("id"),
                                f = b.index(),
                                b = b.find(".name").text();
                                a.push(c);
                                d[c] = {
                                    topic: b,
                                    row: Math.ceil((f + 1) / 3),
                                    column: f % 3 + 1
                                }
                            });
                            a.length ? (window.$.post("/topics/follow", {
                                follow_ids: a.join(",")
                            },
                            f), c({
                                action: "click_popup_guide_topic_recommendation_submit",
                                attributes: {
                                    selected_topic: d
                                }
                            })) : (f(), c({
                                action: "click_popup_guide_topic_recommendation_skip"
                            }));
                            h()
                        })
                    })(k.S());
                    c({
                        action: "popup_guide_topic_recommendation_appear"
                    })
                } else window.console && window.console.warn("Cannot find template"),
                a(),
                f()
            }
        }; (0, window.$)(window).on("beforeunload.guide2", 
        function() {
            k && k.V() && c({
                xc: !0,
                action: {
                    bio: "click_edit_personal_introduction_close",
                    topic: "click_guide_topic_recommendation_close"
                } [h]
            })
        });
        Fp(g, 
        function(a, b, c) {
            if (n[a]) {
                h = a;
                var d = b === g.length - 1,
                M = function(a) {
                    if (k) if (window.Modernizr.cssanimations) var b = 
                    (0, window.$)(k.ii()).addClass("fx-hide").onAnimationEnd(function() {
                        b.removeClass("fx-hide");
                        a()
                    },
                    400);
                    else a()
                };
                n[a](function() {
                    d ? M(function() {
                        k.G(!1);
                        f.resolve(m); (0, window.$)(window).off(".guide2");
                        "/topic" === window.location.pathname && window.location.reload()
                    }) : M(c)
                })
            }
        });
        return f.promise()
    };
    var Lp = function(a, b) {
        z.G.call(this);
        a && this.attach(a, b)
    };
    var Mp = function(a, b, c, d) {
        z.Pc.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    var Np = function() {};
    var Op = function(a, b, c) {
        if (a = c || a.hf()) c = b.getAttribute("role") || null,
        a != c && z.cj(b, a)
    };
    var Pp = function(a, b, c) {
        var d = b.qD;
        null != d && a.dB(c, d);
        b.V() || z.dj(c, "hidden", !b.V());
        b.isEnabled() || a.yg(c, 1, !b.isEnabled());
        Qp(b, 8) && a.yg(c, 8, !!(b.N & 8));
        Qp(b, 16) && a.yg(c, 16, b.qf());
        Qp(b, 64) && a.yg(c, 64, b.ub())
    };
    var Rp = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z.y([], 
        function(d) { ! z.ao(d, z.Ba(z.A, a)) || b && !z.A(d, b) || c.push(d.join("_"))
        });
        return c
    };
    var Sp = function(a) {
        var b = a.U();
        b.replace(/\xa0|\s/g, " ");
        a.tr = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
    z.Tp = function() {};
    z.Up = function(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!z.sa(b)) throw Error("Invalid decorator function " + b);
        Vp[a] = b
    };
    var Wp = function(a, b, c) {
        z.R.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = z.ua(b);
                if (d = Xp[d]) break;
                b = b.v ? b.v.constructor: null
            }
            b = d ? z.sa(d.ba) ? d.ba() : new d: null
        }
        this.M = b;
        this.ym(z.ka(a) ? a: null);
        this.qD = null
    };
    var Yp = function(a, b) {
        var c = a.o(),
        d = a.m();
        b ? (c.g(d, "mouseover", a.nd).g(d, "mousedown", a.he).g(d, "mouseup", a.nf).g(d, "mouseout", a.Ol), a.lo != z.p && c.g(d, "contextmenu", a.lo), z.C && (c.g(d, "dblclick", a.WF), a.to || (a.to = new Zp(a), z.Ac(a, a.to)))) : (c.qa(d, "mouseover", a.nd).qa(d, "mousedown", a.he).qa(d, "mouseup", a.nf).qa(d, "mouseout", a.Ol), a.lo != z.p && c.qa(d, "contextmenu", a.lo), z.C && (c.qa(d, "dblclick", a.WF), z.Cc(a.to), a.to = null))
    };
    var Qp = function(a, b) {
        return !! (a.cq & b)
    };
    var $p = function(a, b) {
        return !! (a.fj & b) && Qp(a, b)
    };
    var aq = function(a, b, c) {
        return Qp(a, b) && !!(a.N & b) != c && (!(a.Bk & b) || a.dispatchEvent(zo(b, c))) && !a.Fd
    };
    var Zp = function(a) {
        z.xc.call(this);
        this.Dr = a;
        this.ur = !1;
        this.ga = new z.xd(this);
        z.Ac(this, this.ga);
        a = this.Dr.h;
        this.ga.g(a, "mousedown", this.Ml).g(a, "mouseup", this.Bs).g(a, "click", this.Ll)
    };
    var bq = function() {};
    z.cq = function(a, b, c) {
        Wp.call(this, a, b || bq.ba(), c)
    };
    var dq = function() {};
    var eq = function(a, b, c) {
        if (b) {
            var d = fq(a, c);
            z.hj(b, d) || (z.Db(gq, 
            function(a) {
                a = fq(this, a);
                z.vo(b, a, a == d)
            },
            a), z.dj(b, "checked", c == hq ? "mixed": c == iq ? "true": "false"))
        }
    };
    var fq = function(a, b) {
        var c = a.U();
        if (b == iq) return c + "-checked";
        if (b == jq) return c + "-unchecked";
        if (b == hq) return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var kq = function(a, b, c) {
        c = c || dq.ba();
        Wp.call(this, null, c, b);
        this.Yh = z.ka(a) ? a: jq
    };
    z.lq = function() {};
    var mq = function() {};
    z.nq = function(a, b, c, d, f) {
        function g(a) {
            a && (a.tabIndex = 0, z.cj(a, h.hf()), z.ij(a, "goog-zippy-header"), oq(h, a), a && h.lH.g(a, "keydown", h.bT))
        }
        z.G.call(this);
        this.da = f || z.J();
        this.Tf = this.da.m(a) || null;
        this.tj = this.da.m(d || null);
        this.ul = (this.kt = z.sa(b) ? b: null) || !b ? null: this.da.m(b);
        this.pb = 1 == c;
        z.ka(c) || this.kt || (this.tj ? this.pb = z.Lg(this.tj) : this.Tf && (this.pb = z.hj(this.Tf, "goog-zippy-expanded")));
        this.lH = new z.xd(this);
        this.Tz = new z.xd(this);
        var h = this;
        g(this.Tf);
        g(this.tj);
        this.Mc(this.pb)
    };
    var pq = function(a) {
        var b = a.tj;
        return b && z.Lg(b) ? b: a.Tf
    };
    var oq = function(a, b) {
        b && a.Tz.g(b, "click", a.aT)
    };
    var qq = function(a, b, c) {
        z.Lc.call(this, a, b);
        this.Tg = c
    };
    z.rq = function() {
        z.V.call(this);
        this.Df(!0)
    };
    var sq = function(a) {
        var b = (0, window.$)(".resend-activation-email", a.BC);
        tq(a, b, 10, 
        function() {
            window.$.post("/reactive")
        })
    };
    var uq = function(a) {
        window.$.get("/settings/account/request_unlock");
        var b = (0, window.$)("form.send-code", a.sC),
        c = a.pC = (0, window.$)("form.activate", a.sC),
        d = (0, window.$)(".submit", b);
        b.validate(window.$.extend({},
        vq, {
            submitHandler: z.vk(d, window.$.proxy(a.CT, a))
        }));
        b = (0, window.$)(".submit", c);
        c.validate(window.$.extend({},
        vq, {
            submitHandler: z.vk(b, window.$.proxy(a.CS, a))
        }));
        b = (0, window.$)("button.resend-code", c);
        tq(a, b, 60, 
        function() {
            var a = (0, window.$)('input[name\x3d"account"]', c).val();
            if ("" === a) return c.data("validator").showErrors({
                account: "请填写手机号或邮箱"
            }),
            !1;
            var b = this.rf(a),
            d;
            b ? (a = {
                email: a
            },
            d = "/settings/account/send_new_email_digits") : (a = {
                phone_no: a
            },
            d = "/settings/account/send_new_phone_digits");
            var k = this;
            window.$.post(d, a, 
            function(a) {
                a.success ? wq(k, b) : (a = a.payload.fields, b ? k.wb(a, "email", "account") : k.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
            })
        })
    };
    var wq = function(a, b) {
        a.Gv || (a.Gv = (0, window.$)(".tip", a.Ad));
        b ? a.Gv.html("验证码已发送至你的邮箱，请查收。") : a.Gv.html("验证码已发送至你的手机，请查收。")
    };
    var tq = function(a, b, c, d) {
        var f = b.text();
        b = z.uk(b, c, 
        function(a) {
            return a ? "%s 秒后即可重发": f
        },
        window.$.proxy(d, a));
        z.Ac(a, b)
    };
    var xq = function(a) {
        function b() { (0, window.clearTimeout)(g);
            g = null;
            try {
                delete window[d]
            } catch(a) {
                window[d] = null
            }
        }
        "string" === window.$.type(a) && (a = {
            url: a
        });
        a = a || {};
        var c = window.$.Deferred(),
        d = "zh" + (0, z.I)() + Vn(),
        f = window.$.extend({},
        a.data || {},
        {
            callback: d
        }),
        g = null;
        a.timeout && (g = (0, window.setTimeout)(function() {
            window[d] && (window[d] = b, c.reject("timeout"))
        },
        a.timeout));
        window[d] = c.resolve;
        a = a.url + ( - 1 === a.url.indexOf("?") ? "?": "\x26") + window.$.param(f);
        z.dh(a).fail(c.reject).always(b);
        return c.promise()
    };
    var yq = function(a, b) {
        b = void 0 === b ? 0: b;
        z.G.call(this);
        this.JM = Object.assign({},
        zq, a);
        this.pU = b;
        this.vu = 1E3;
        this.MH = 3E4;
        this.XQ = 1.5
    };
    z.Aq = function(a, b) {
        a = void 0 === a ? z.p: a;
        b = void 0 === b ? !1: b;
        z.R.call(this);
        this.FI = a;
        this.TV = b
    };
    var Bq = function(a) {
        window.$.get("/antispam/get_token").then(function(b) {
            a.Ni = b.token;
            a.timeout = b.ttl;
            a.startTime = Date.now(); (0, window.$)(".js-token", a.h).text(a.Ni); (0, window.$)(".js-timeout", a.h).text((0, window.parseInt)(a.timeout / 60))
        })
    };
    var Cq = function(a) {
        var b = (0, window.$)(".js-sent", a.h);
        b.click(z.vk(b, 
        function() {
            if (Date.now() > a.startTime + 1E3 * a.timeout) return Bq(a),
            Dq(a, "短信超时，请重新发送");
            Eq(a);
            a.Ok.show();
            return window.$.get("/antispam/is_send_sms").then(function(b) {
                b.is_send_sms ? Fq(a, "unblock") : Dq(a, "没收到正确的短信，请重新发送");
                a.Ok.hide()
            },
            function() {
                a.Ok.hide()
            })
        }))
    };
    var Gq = function(a) {
        var b = (0, window.$)(".js-verify", a.h);
        b.click(z.vk(b, 
        function() {
            var b = a.Cc.$i.val();
            if (!b) return Dq(a, "请填写验证码");
            Eq(a);
            a.Ok.show();
            return window.$.post("/antispam/create_appeal", {
                captcha: b
            }).then(function(b) {
                0 === b.errcode ? Fq(a, "appeal") : (a.Cc.mu(), Dq(a, b.msg), a.Ok.hide())
            },
            function() {
                a.Ok.hide()
            })
        }))
    };
    var Hq = function(a) { (0, window.$)(".js-appeal", a.h).click(function() {
            a.FI("向管理员申诉解封");
            a.Kv.hide(); (0, window.$)(".unblock-dialog-appeal", a.h).show();
            a.Cc.mu();
            Eq(a)
        }); (0, window.$)(".js-message", a.h).click(function() {
            a.FI("帐号解封");
            a.Kv.hide(); (0, window.$)(".unblock-dialog-message", a.h).show();
            Eq(a)
        })
    };
    var Iq = function(a) {
        a.bu = new yq({
            url: "/antispam/is_send_sms"
        },
        1E3);
        z.Ac(a, a.bu);
        a.bu.g("message", 
        function(b) {
            b.data.is_send_sms && Fq(a, "unblock")
        });
        a.bu.au()
    };
    var Fq = function(a, b) {
        a.bu.H();
        var c;
        "unblock" === b ? c = "成功自助解封": "appeal" === b && (c = "成功提交申诉\x3cbr\x3e申诉成功后会以邮件或私信方式通知你"); (0, window.$)(".unblock-dialog-success-text", a.h).html(c);
        a.Kv.hide(); (0, window.$)(".unblock-dialog-success", a.h).show();
        if (a.TV) {
            var d = (0, window.$)(".js-count-down", a.h);
            d.show();
            var f = 5,
            g;
            "unblock" === b ? g = "刷新": "appeal" === b && (g = "关闭");
            var h = function() {
                0 >= f ? "unblock" === b ? window.location.reload() : "appeal" === b && a.dispatchEvent("complete") : (d.text(f--+" 秒后自动" + g), (0, window.setTimeout)(h, 1E3))
            };
            h()
        }
    };
    var Dq = function(a, b) {
        a.vC.text(b).addClass("is-visible")
    };
    var Eq = function(a) {
        a.vC.removeClass("is-visible")
    };
    var Jq = function(a) {
        z.V.apply(this, arguments)
    };
    z.Kq = function(a, b, c) {
        function d(a) {
            return a && a.preventDefault ? a.preventDefault() : !1
        }
        return function(f) {
            var g = {
                Fb: !0,
                ue: !1,
                Jt: !1,
                lJ: !1
            };
            z.na(b) ? (!0 === b[0] && (g = bp(g, 
            function() {
                return ! 0
            })), z.Mb(g, b[1])) : !0 === b ? g = bp(g, 
            function() {
                return ! 0
            }) : (z.sa(b) && (b = b.apply(this, arguments)), z.Mb(g, b || {}));
            var h = z.sa(c) ? c.apply(this, arguments) : c;
            if (!z.T.Fb() && g.Fb) {
                var k = new z.Wk;
                k.Np(h);
                k.show();
                return d(f)
            }
            return ! z.T.ue && g.ue ? ((new z.rq).G(!0), window.$.post("/continuation/record", {
                url: window.location.pathname + window.location.search + 
                (h || "")
            }), d(f)) : z.jm.eF && g.lJ ? (h = z.jm.eF, "warning" === h ? k = '您的知乎用户名不符合 \x3ca href\x3d"/question/19791408"\x3e知乎用户名规范\x3c/a\x3e，请您 \x3ca href\x3d"/settings/profile"\x3e修改\x3c/a\x3e。': "pending" === h && (k = "您提交的用户名修改正在审核中，帐号暂时锁定。"), k && z.X.message(k, 4E3), d(f)) : z.jm.pw && g.Jt ? (z.jm.pw.by_antispam ? (new Jq).G(!0) : z.X.message(z.jm.pw.message), d(f)) : a.apply(this, arguments)
        }
    };
    var Lq = function() {
        z.G.call(this);
        this.N = Mq;
        this.endTime = this.startTime = null
    };
    var Nq = function(a, b, c) {
        z.xc.call(this);
        this.bk = a;
        this.bh = b || 0;
        this.ga = c;
        this.fl = (0, z.q)(this.Og, this)
    };
    var Oq = function(a) {
        a.uc() && a.fire()
    };
    var Pq = function(a) {
        a = z.ua(a);
        delete Qq[a];
        z.Jb(Qq) && Rq && Rq.stop()
    };
    var Sq = function() {
        Rq || (Rq = new Nq(function() {
            Tq()
        },
        20));
        var a = Rq;
        a.uc() || a.start()
    };
    var Tq = function() {
        var a = (0, z.I)();
        z.Db(Qq, 
        function(b) {
            Uq(b, a)
        });
        z.Jb(Qq) || Sq()
    };
    var Vq = function(a, b, c, d) {
        Lq.call(this);
        if (!z.na(a) || !z.na(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.Zp = a;
        this.DO = b;
        this.duration = c;
        this.XC = d;
        this.coords = [];
        this.Ti = !1;
        this.progress = 0
    };
    var Uq = function(a, b) {
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.progress && (a.progress = 1);
        Wq(a, a.progress);
        1 == a.progress ? (a.N = Mq, Pq(a), a.jd("finish"), a.lg()) : 1 == a.N && a.Zz()
    };
    var Wq = function(a, b) {
        z.sa(a.XC) && (b = a.XC(b));
        a.coords = Array(a.Zp.length);
        for (var c = 0; c < a.Zp.length; c++) a.coords[c] = (a.DO[c] - a.Zp[c]) * b + a.Zp[c]
    };
    var Xq = function(a, b) {
        z.Lc.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.N;
        this.pY = b
    };
    var Yq = function(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a: "#" + a;
        if (Zq.test(c)) return b.Js = $q(c),
        b.type = "hex",
        b;
        c = ar(a);
        if (c.length) {
            var d = c[0];
            a = c[1];
            c = c[2];
            d = Number(d);
            a = Number(a);
            c = Number(c);
            if ((0, window.isNaN)(d) || 0 > d || 255 < d || (0, window.isNaN)(a) || 0 > a || 255 < a || (0, window.isNaN)(c) || 0 > c || 255 < c) throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
            d = br(d.toString(16));
            a = br(a.toString(16));
            c = br(c.toString(16));
            b.Js = "#" + d + a + c;
            b.type = "rgb";
            return b
        }
        if (cr && (c = cr[a.toLowerCase()])) return b.Js = 
        c,
        b.type = "named",
        b;
        throw Error(a + " is not a valid color string");
    };
    var $q = function(a) {
        if (!Zq.test(a)) throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(dr, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    };
    var ar = function(a) {
        var b = a.match(er);
        if (b) {
            a = Number(b[1]);
            var c = Number(b[2]),
            b = Number(b[3]);
            if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
        }
        return []
    };
    var br = function(a) {
        return 1 == a.length ? "0" + a: a
    };
    var fr = function(a, b, c, d, f) {
        Vq.call(this, b, c, d, f);
        this.element = a
    };
    var gr = function(a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        fr.apply(this, arguments)
    };
    var hr = function(a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        fr.apply(this, arguments)
    };
    var ir = function(a, b, c, d, f) {
        fr.call(this, a, [b], [c], d, f)
    };
    var jr = function(a, b, c, d, f) {
        fr.call(this, a, [b], [c], d, f)
    };
    var kr = function(a, b, c, d, f) {
        z.qa(b) && (b = [b]);
        z.qa(c) && (c = [c]);
        fr.call(this, a, b, c, d, f);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.it = lr
    };
    var mr = function(a, b, c) {
        kr.call(this, a, 1, 0, b, c)
    };
    var nr = function(a, b, c) {
        kr.call(this, a, 0, 1, b, c)
    };
    var or = function(a, b, c, d, f) {
        if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
        fr.apply(this, arguments)
    };
    var pr = function() {
        return window.$.Deferred(function(a) { (0, window.setTimeout)(a.resolve, 2E3)
        }).promise()
    };
    var qr = function(a, b) {
        var c = z.Ko(a, 
        function(a) {
            return 3 === a.nodeType && !z.qp(a.nodeValue)
        })[0];
        c && (c.nodeValue = b)
    };
    z.rr = function(a, b) {
        var c = new mr(a, 500);
        b && z.F(c, "finish", (0, z.q)(function() {
            z.P(this)
        },
        a));
        c.play()
    };
    z.sr = function(a, b, c, d) {
        "bottom" === d && (d = "b");
        var f = ""; ! 1 !== c && (f = 'data-tip\x3d"t$' + (d || "t") + "$" + a[1] + '"');
        return ["\x3ca ", f, ' class\x3d"', b || "zm-item-tag", '" href\x3d"/topic/', a[1], '"\x3e', a[0], "\x3c/a\x3e"].join("")
    };
    z.tr = function(a) {
        return a ? a.replace(/^\s+/, "").replace(/\s+$/, "") : ""
    };
    var ur = function(a) {
        return a ? a.replace(/<[^>]+>/g, "") : ""
    };
    var vr = function() {
        return '\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
    };
    z.wr = function(a, b) {
        z.Q(a, !0);
        z.Q(b, !1)
    };
    var xr = function(a, b, c) {
        var d;
        a && (b = (0, window.$)(a).data("animation") || new or(a, [255, 255, 150], b || [255, 255, 255], c || 2E3), (0, window.$)(a).data("animation", b), 1 == b.N && b.stop(!0), d = a.style.backgroundColor, z.ld(b, "end", 
        function() {
            z.sg(this.element, "background-color", d)
        },
        !1, b), b.play())
    };
    z.yr = function(a, b, c) {
        a && (zr && window.document[Ar] ? z.F(window.document, Br, 
        function f() {
            window.document[Ar] || (xr(a, b, c), z.md(window.document, Br, f))
        }) : xr(a, b, c))
    };
    var Cr = function(a) {
        var b = 0,
        c = 0;
        do c = a.indexOf("?", c),
        -1 !== c && (b++, c += 1);
        while ( - 1 !== c);
        return b
    };
    var Dr = function(a, b, c) {
        b = z.yb(a.data, 1);
        if ("topic" === a.data[0]) {
            a = (b[2] ? '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e': "") + '\x3cspan class\x3d"zu-autocomplete-row-name' + (b[3] ? "": " zu-autocomplete-row-name-info") + '" title\x3d"' + b[0] + '"\x3e' + b[0] + "\x3c/span\x3e";
            var d = 5 < b.length && b[5];
            4 <= b.length && (a += '\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e', b[4] || d ? (d && (a += "又称 " + b[5]), b[4] && d && (a += "，"), b[4] && (a += b[4] + " 人关注")) : a += "\x26nbsp;", a += "\x3c/span\x3e");
            c.innerHTML = a
        } else "people" === a.data[0] ? c.innerHTML = '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e": "question" === a.data[0] ? c.innerHTML = b[0] + '\x3cspan class\x3d"zm-ac-gray"\x3e问题\x3c/span\x3e': "plain_text" === a.data[0] ? (c.innerHTML = a.data[1], z.W.add(c, b[1])) : "sina" === a.data[0] && (c.innerHTML = 
        b[0])
    };
    var Er = function(a, b, c) {
        var d;
        b = z.yb(a.data, 1);
        if ("topic" === a.data[0]) {
            a = ["\x3ca ", ' style\x3d"display:block" href\x3d"/topic/' + b[1] + '"\x3e\x3cspan class\x3d"zm-item-tag"\x3e', b[0], "\x3c/span\x3e"].join("");
            d = 6 < b.length && b[6];
            if (b[5] || d) {
                a += '\x3cspan class\x3d"zm-ac-gray"\x3e';
                var f = [];
                d && f.push("又称 " + b[6]); (d = (0, window.parseInt)(b[5], 10)) && f.push(d + " 个精华问答");
                a += f.join("，");
                a += "\x3c/span\x3e"
            } else a += '\x3cspan class\x3d"zm-ac-gray" \x3e\x26nbsp;\x3c/span\x3e';
            c.innerHTML = a + "\x3c/a\x3e"
        } else "people" === a.data[0] ? 
        c.innerHTML = '\x3ca href\x3d"/people/' + b[1] + '" title\x3d"' + b[0] + '" class\x3d"zm-ac-link zm-ac-link-people"\x3e\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal  zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e\x3c/a\x3e": "question" === a.data[0] ? (d = (0, window.parseInt)(b[3], 10), c.innerHTML = (b[4] ? '\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/' + 
        b[2] + '"\x3e\x3c/a\x3e': "") + ['\x3ca class\x3d"zm-ac-link"', 'href\x3d"/question/' + b[2] + '"\x3e', b[0]].join("") + ('\x3cspan class\x3d"zm-ac-gray"\x3e' + (d ? d + " 个回答": "还没有回答") + "\x3c/span\x3e\x3c/a\x3e")) : "search_link" === a.data[0] ? (c.innerHTML = '\x3ca href\x3d"/search?q\x3d' + b[0] + '\x26type\x3dquestion"\x3e查看全部搜索结果\x3ci class\x3d"zg-icon arrow"\x3e\x3c/i\x3e\x3c/a\x3e', z.W.add(c, "zu-autocomplete-row-search-link")) : "plain_text" === a.data[0] ? c.innerHTML = b[0] : "sina" === a.data[0] && (c.innerHTML = ['\x3ca href\x3d"javascript:;" title\x3d"' + 
        b[0] + '"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', b[0], "\x3c/a\x3e"].join("")); (0, window.$)("a", c).click(function(a) {
            a.preventDefault()
        })
    };
    z.Fr = function(a, b, c) {
        for (c = c || "A"; null != b && b !== a;) {
            if (b.tagName === c) return b;
            b = b.parentNode
        }
        return null
    };
    z.Gr = function(a) {
        this.xR = a;
        this.data = new z.Rd
    };
    var Hr = function(a) {
        return (a = z.tr(a)) ? a.length: 0
    };
    var Ir = function(a, b, c, d) {
        window._gaq || (window._gaq = []);
        c && (c = "" + c);
        d && (d = (0, window.parseInt)(d, 10));
        window._gaq.push(["_trackEvent", a, b, c, d]);
        z.Ni && Jr("trackEvent(deprecated)", z.vb(arguments))
    };
    var Kr = function(a) {
        return (a = String(a).toLowerCase()) ? z.pb([".jpg", ".jpeg", ".png"], 
        function(b) {
            return z.rp(a, b)
        }) : !1
    };
    var Lr = function(a, b) {
        function c(b) {
            return a.getElementsByTagName(b).length
        }
        var d = ["img", "embed"];
        return b && z.pb(d, c) ? !1: !z.ip(z.Mr, z.ab, z.pf)(a)
    };
    z.Nr = function(a, b) {
        var c = window.$.extend({
            all: !1
        },
        z.Nr.defaults, b || {}),
        d = (0, window.$)(a).get(0).getBoundingClientRect();
        return ! c.all && (d.bottom < c.paddingTop || d.bottom > (0, window.$)(window).height()) || c.all && (d.top < c.paddingTop || d.bottom > (0, window.$)(window).height()) ? !1: !0
    };
    z.Or = function(a, b) {
        if (a) {
            "number" === window.$.type(b) && (b = {
                offsetTop: b
            });
            var c = window.$.extend({
                mC: z.Nr
            },
            Pr, b || {});
            if (!c.mC(a, c)) {
                var d = (0, window.$)(a).offset().top - c.paddingTop - c.offsetTop || 0;
                c.ew ? (0, window.$)(window.document.documentElement).add(window.document.body).animate({
                    scrollTop: d
                }) : (0, window.$)(window).scrollTop(d)
            }
        }
    };
    var Qr = function(a) { (0, window.$)(a.target.M.h).off("click.disable-a").on("click.disable-a", "a", 
        function(a) {
            a.preventDefault()
        })
    };
    z.Rr = function(a, b) {
        var c = null;
        return function() {
            var d = this,
            f = arguments; (0, window.clearTimeout)(c);
            c = (0, window.setTimeout)(function() {
                b.apply(d, f)
            },
            a)
        }
    };
    var Sr = function(a, b) {
        var c = a.getBoundingClientRect(),
        d = z.Qg(window.document.body).top;
        if (0 < c.top - d) b && b();
        else {
            var f = a.offsetHeight,
            g = Fo(window.document).y,
            h = z.Pe().height;
            b && b();
            var k = a.offsetHeight;
            window.scrollTo(0, g + (c.bottom < h ? k - f: c.top - d))
        }
    };
    z.Tr = function(a) {
        z.G.call(this);
        this.tH = null;
        this.pd = a;
        this.o().g(this.pd, ["input", "propertychange"], this.KK);
        Ur(this, !0);
        z.W.add(this.pd, "zu-seamless-input-origin-element")
    };
    var Ur = function(a, b) {
        Vr(a);
        if (a.jg) {
            var c = a.pd.value;
            if (b || a.tH !== c) a.tH = c,
            a.jg.value = c,
            c = z.Tg(a.pd),
            a.pd.style.height = z.Bg(a.jg.scrollHeight + c.top + c.bottom, !0),
            a.dispatchEvent("change")
        }
    };
    var Vr = function(a) {
        if (!a.jg && 0 !== z.go(a.pd).width) {
            var b = z.O("div", {
                style: "overflow:hiddenposition:relativeheight:0"
            },
            a.jg = z.O("textarea", {
                rows: 1,
                className: "zu-seamless-input-mock-element"
            }));
            window.document.body.appendChild(b);
            z.Db("paddingTop paddingBottom fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "), 
            function(a) {
                this.jg.style[a] = z.wg(this.pd, a)
            },
            a)
        }
    };
    var Wr = function(a) {
        this.iw = a
    };
    var Xr = function(a, b) {
        a && (a.tabIndex = b ? 0: -1)
    };
    var Yr = function(a, b, c) {
        if (c) for (var d = c.firstChild, f; d && d.parentNode == c;) {
            f = d.nextSibling;
            if (1 == d.nodeType) {
                var g = a.Zn(d);
                g && (g.h = d, b.isEnabled() || g.Wa(!1), b.L(g), g.w(d))
            } else d.nodeValue && "" != (0, z.ab)(d.nodeValue) || c.removeChild(d);
            d = f
        }
    };
    z.Zr = function(a, b, c) {
        z.R.call(this, c);
        this.M = b || Wr.ba();
        this.Nb = a || this.M.HF()
    };
    var $r = function(a, b) {
        var c = a.o(),
        d = a.Zb();
        b ? c.g(d, "focus", a.ge).g(d, "blur", a.Xc).g(a.os(), "key", a.$b) : c.qa(d, "focus", a.ge).qa(d, "blur", a.Xc).qa(a.os(), "key", a.$b)
    };
    var as = function(a, b) {
        var c = b.m(),
        c = c.id || (c.id = b.fe());
        a.Ig || (a.Ig = {});
        a.Ig[c] = b
    };
    var bs = function(a) {
        return z.bh(a, a.Ta)
    };
    z.cs = function(a) {
        ds(a, 
        function(a, c) {
            return (a + 1) % c
        },
        z.ah(a) - 1)
    };
    var es = function(a) {
        ds(a, 
        function(a, c) {
            a--;
            return 0 > a ? c - 1: a
        },
        0)
    };
    var fs = function(a) {
        ds(a, 
        function(a, c) {
            return (a + 1) % c
        },
        a.Ta)
    };
    var gs = function(a) {
        ds(a, 
        function(a, c) {
            a--;
            return 0 > a ? c - 1: a
        },
        a.Ta)
    };
    var ds = function(a, b, c) {
        c = 0 > c ? On(a, a.jc) : c;
        var d = z.ah(a);
        c = b.call(a, c, d);
        for (var f = 0; f <= d;) {
            var g = z.bh(a, c);
            if (g && a.ND(g)) {
                a.xb(c);
                break
            }
            f++;
            c = b.call(a, c, d)
        }
    };
    var hs = function() {
        z.R.call(this);
        this.ov = []
    };
    z.is = function(a, b) {
        this.Sa = a || [];
        this.jC = !b
    };
    var js = function(a, b, c) {
        var d = [];
        if ("" != a) {
            a = z.Wa(a);
            a = new RegExp("(^|\\W+)" + a, "i");
            for (var f = 0; f < c.length && d.length < b; f++) {
                var g = c[f];
                String(g).match(a) && d.push(g)
            }
        }
        return d
    };
    var ks = function(a, b, c) {
        for (var d = [], f = 0; f < c.length; f++) {
            var g = c[f],
            h = a.toLowerCase(),
            k = String(g).toLowerCase(),
            m = 0;
            if ( - 1 != k.indexOf(h)) m = (0, window.parseInt)((k.indexOf(h) / 4).toString(), 10);
            else for (var n = h.split(""), r = -1, w = 10, H = 0, K; K = n[H]; H++) K = k.indexOf(K),
            K > r ? (r = K - r - 1, r > w - 5 && (r = w - 5), m += r, r = K) : (m += w, w += 5);
            m < 6 * h.length && d.push({
                fW: g,
                HJ: m,
                index: f
            })
        }
        d.sort(function(a, b) {
            var c = a.HJ - b.HJ;
            return 0 != c ? c: a.index - b.index
        });
        a = [];
        for (H = 0; H < b && H < d.length; H++) a.push(d[H].fW);
        return a
    };
    z.ls = function(a, b, c) {
        z.G.call(this);
        this.Kd = a;
        this.Cf = c;
        this.M = b;
        z.F(b, [ms, z.ns, os, z.ps], this.handleEvent, !1, this);
        this.Wb = null;
        this.Sa = [];
        this.$g = -1;
        this.Uc = 0;
        this.Yd = this.yc = null;
        this.QG = {}
    };
    z.qs = function(a) {
        for (var b = a.Uc + a.Sa.length - 1, c = a.$g, d = 0; d < a.Sa.length; d++) {
            if (c >= a.Uc && c < b) c++;
            else if ( - 1 == c) c = a.Uc;
            else if (a.iD && c == b) {
                a.dg( - 1);
                break
            } else if (a.jL && c == b) c = a.Uc;
            else break;
            if (a.dg(c)) break
        }
    };
    var rs = function(a) {
        for (var b = a.Uc + a.Sa.length - 1, c = a.$g, d = 0; d < a.Sa.length; d++) {
            if (c > a.Uc) c--;
            else if (a.iD && c == a.Uc) {
                a.dg( - 1);
                break
            } else if (!a.jL || -1 != c && c != a.Uc) break;
            else c = b;
            if (a.dg(c)) break
        }
    };
    z.ss = function(a) {
        a.GG() || window.setTimeout((0, z.q)(a.GG, a), 10)
    };
    var ts = function(a, b) {
        var c = b - a.Uc;
        return 0 > c || c >= a.Sa.length ? -1: c
    };
    z.us = function(a) {
        var b = 0,
        c = 0;
        if (vs(a)) b = a.selectionStart,
        c = -1;
        else if (z.C) {
            var d = ws(a),
            f = d[0],
            d = d[1];
            if (f.inRange(d)) {
                f.setEndPoint("EndToStart", d);
                if ("textarea" == a.type) {
                    d.duplicate();
                    b = a = f.text;
                    for (c = !1; ! c;) 0 == f.compareEndPoints("StartToEnd", f) ? c = !0: (f.moveEnd("character", -1), f.text == a ? b += "\r\n": c = !0);
                    f = [b.length, -1];
                    return f
                }
                b = f.text.length;
                c = -1
            }
        }
        return [b, c]
    };
    z.xs = function(a, b) {
        if (vs(a)) a.selectionStart = b,
        a.selectionEnd = b;
        else if (z.C) {
            b = ys(a, b);
            var c = a.createTextRange();
            c.collapse(!0);
            c.move("character", b);
            c.select()
        }
    };
    var ws = function(a) {
        var b = a.ownerDocument || a.document,
        c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    };
    var ys = function(a, b) {
        "textarea" == a.type && (b = z.La(a.value.substring(0, b)).length);
        return b
    };
    var vs = function(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch(b) {
            return ! 1
        }
    };
    z.zs = function(a, b, c, d) {
        z.xc.call(this);
        d = d || 150;
        this.gm = null != c ? c: !0;
        this.Jp = a || ",;";
        this.gO = this.Jp.substring(0, 1);
        a = this.gm ? "[\\s" + this.Jp + "]+": "[\\s]+";
        this.DK = new RegExp("^" + a + "|" + a + "$", "g");
        this.HV = new RegExp("\\s*[" + this.Jp + "]$");
        this.zH = b || "";
        this.zU = !1;
        this.yU = this.gm;
        this.ma = 0 < d ? new z.td(d) : null;
        this.dc = new z.xd(this);
        this.Pv = new z.xd(this);
        this.vb = new Lp;
        this.qH = -1
    };
    var As = function(a, b, c) {
        if (z.ka(c) ? c: a.gm) {
            c = Bs(a, a.Y(), z.us(a.eb)[0]);
            var d = Cs(a, a.Y());
            a.HV.test(b) || (b = z.lp(b) + a.gO);
            a.fX && (0 == c || z.qp(d[c - 1]) || (b = " " + b), c == d.length - 1 && (b += " "));
            if (b != d[c]) {
                d[c] = b;
                b = a.eb; (z.B || z.C && z.E("9")) && b.blur();
                b.value = d.join("");
                for (var f = 0, g = 0; g <= c; g++) f += d[g].length;
                b.focus();
                c = f;
                d = a.eb;
                b = c;
                vs(d) ? d.selectionStart = b: z.C && (f = ws(d), g = f[0], g.inRange(f[1]) && (b = ys(d, b), g.collapse(!0), g.move("character", b), g.select()));
                d = a.eb;
                vs(d) ? d.selectionEnd = c: z.C && (f = ws(d), b = f[1], f[0].inRange(b) && 
                (c = ys(d, c), d = ys(d, z.us(d)[0]), b.collapse(!0), b.moveEnd("character", c - d), b.select()))
            }
        } else a.Ea(b);
        a.XA = !0
    };
    var Ds = function(a, b) {
        var c = a.gm && b.charCode && -1 != a.Jp.indexOf(String.fromCharCode(b.charCode));
        a.JV && c && a.update();
        return a.IV && c && a.ca.Hi() ? (b.preventDefault(), !0) : !1
    };
    var Es = function(a) {
        a.vb.attach(a.eb);
        a.dc.g(a.vb, "key", a.lp);
        a.dc.g(a.eb, "mousedown", a.yI);
        z.C && a.dc.g(a.eb, "keypress", a.vI)
    };
    var Fs = function(a, b) {
        a.Pv.removeAll();
        a.ca && z.ss(a.ca);
        b != a.eb && (a.eb = b, a.ma && (a.ma.start(), a.dc.g(a.ma, "tick", a.sp)), a.Ro = a.Y(), Es(a))
    };
    var Gs = function(a) {
        a.Vi && (a.Vi = !1, a.dc.qa(a.eb, "keypress", a.wI), a.dc.qa(a.eb, "keyup", a.xI))
    };
    var Bs = function(a, b, c) {
        a = Cs(a, b);
        if (c == b.length) return a.length - 1;
        for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length,
        b = d;
        return b
    };
    var Cs = function(a, b) {
        if (!a.gm) return [b];
        for (var c = String(b).split(""), d = [], f = [], g = 0, h = !1; g < c.length; g++) a.zH && -1 != a.zH.indexOf(c[g]) ? (a.WO && !h && (d.push(f.join("")), f.length = 0), f.push(c[g]), h = !h) : h || -1 == a.Jp.indexOf(c[g]) ? f.push(c[g]) : (f.push(c[g]), d.push(f.join("")), f.length = 0);
        d.push(f.join(""));
        return d
    };
    z.Hs = function(a, b, c) {
        z.xc.call(this);
        this.eC = a;
        this.jC = !b;
        this.ea = new z.de(c)
    };
    z.Is = function(a, b, c, d, f, g, h, k, m) {
        var n = Js(c),
        r = z.Bo(a),
        w = Eo(a);
        w && r.gz(new z.rg(w.left, w.top, w.right - w.left, w.bottom - w.top));
        var w = z.J(a),
        H = z.J(c);
        if (w.ua() != H.ua()) {
            var K = w.ua().body;
            var H = H.Va(),
            M = new z.Ge(0, 0),
            ca = z.Se(z.Je(K));
            if (z.Oc(ca, "parent")) {
                var Xa = K;
                do {
                    var cb = ca == H ? z.Xn(Xa) : z.Fg(Xa);
                    M.x += cb.x;
                    M.y += cb.y
                }
                while (ca && ca != H && ca != ca.parent && (Xa = ca.frameElement) && (ca = ca.parent))
            }
            K = ko(M, z.Xn(K)); ! z.C || 9 <= z.Ug || Rn(w) || (K = ko(K, z.wf(w)));
            r.left += K.x;
            r.top += K.y
        }
        a = Ks(a, b);
        r = new z.Ge(a & 2 ? r.left + r.width: 
        r.left, a & 1 ? r.top + r.height: r.top);
        r = ko(r, n);
        f && (r.x += (a & 2 ? -1: 1) * f.x, r.y += (a & 1 ? -1: 1) * f.y);
        var Ha;
        if (h) if (m) Ha = m;
        else if (Ha = Eo(c)) Ha.top -= n.y,
        Ha.right -= n.x,
        Ha.bottom -= n.y,
        Ha.left -= n.x;
        return Ls(r, c, d, g, Ha, h, k)
    };
    var Js = function(a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == z.zg(a) || (b = z.Xn(a), c || (c = (c = z.Ng(a)) && z.B ? -a.scrollLeft: !c || z.Kl && z.E("8") || "visible" == z.yg(a, "overflowX") ? a.scrollLeft: a.scrollWidth - a.clientWidth - a.scrollLeft, b = ko(b, new z.Ge(c, a.scrollTop))))
        }
        return b || new z.Ge
    };
    var Ls = function(a, b, c, d, f, g, h) {
        a = a.clone();
        var k = Ks(b, c);
        c = z.Ig(b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var m = 0;
        if (d || 0 != k) k & 2 ? a.x -= h.width + (d ? d.right: 0) : d && (a.x += d.left),
        k & 1 ? a.y -= h.height + (d ? d.bottom: 0) : d && (a.y += d.top);
        if (g) {
            if (f) {
                d = a;
                k = h;
                m = 0;
                65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2);
                132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5);
                d.x < f.left && g & 1 && (d.x = f.left, m |= 1);
                if (g & 16) {
                    var n = d.x;
                    d.x < f.left && (d.x = f.left, m |= 4);
                    d.x + k.width > f.right && (k.width = Math.min(f.right - d.x, n + k.width - f.left), 
                    k.width = Math.max(k.width, 0), m |= 4)
                }
                d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left), m |= 1);
                g & 2 && (m = m | (d.x < f.left ? 16: 0) | (d.x + k.width > f.right ? 32: 0));
                d.y < f.top && g & 4 && (d.y = f.top, m |= 2);
                g & 32 && (n = d.y, d.y < f.top && (d.y = f.top, m |= 8), d.y + k.height > f.bottom && (k.height = Math.min(f.bottom - d.y, n + k.height - f.top), k.height = Math.max(k.height, 0), m |= 8));
                d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top), m |= 2);
                g & 8 && (m = m | (d.y < f.top ? 64: 0) | (d.y + k.height > f.bottom ? 128: 0));
                f = m
            } else f = 256;
            m = f
        }
        g = new z.rg(0, 
        0, 0, 0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        f = m;
        if (f & 496) return f;
        z.Ag(b, new z.Ge(g.left, g.top));
        h = g.Wg();
        z.So(c, h) || (c = h, a = Rn(z.J(z.Je(b))), !z.C || z.E("10") || a && z.E("8") ? (b = b.style, z.B ? b.MozBoxSizing = "border-box": z.D ? b.WebkitBoxSizing = "border-box": b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (a = z.Qg(b), b = z.Tg(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth = 
        c.width, h.pixelHeight = c.height)));
        return f
    };
    var Ks = function(a, b) {
        return (b & 4 && z.Ng(a) ? b ^ 2: b) & -5
    };
    z.Ms = function(a, b, c, d) {
        z.G.call(this);
        this.Ra = a || window.document.body;
        this.da = z.J(this.Ra);
        this.Dp = !a;
        this.h = null;
        this.Wb = "";
        this.Sa = [];
        this.Af = [];
        this.fK = this.Wl = -1;
        this.sb = !1;
        this.className = "ac-renderer";
        this.uh = "ac-row";
        this.vH = "active";
        this.Qv = "ac-active";
        this.OQ = "ac-highlighted";
        this.ol = b || null;
        this.SK = null != d ? d: !0;
        this.iS = !0;
        this.ro = !1;
        this.jV = !!c;
        this.$u = !1;
        this.Yo = 0;
        this.aK = !1
    };
    var Ns = function(a, b) {
        a.yc && (z.dj(a.yc, "haspopup", b), z.dj(a.h, "expanded", b), b ? z.dj(a.yc, "owns", a.h.id) : (a.yc.removeAttribute("aria-owns"), xo(a.yc, null)))
    };
    var Os = function(a, b) {
        var c = 0 <= b && b < a.Sa.length ? a.Sa[b] : void 0,
        d = 0 <= b && b < a.Af.length ? a.Af[b] : void 0;
        a.dispatchEvent({
            type: "rowhilite",
            YY: d,
            Fi: c ? c.data: null
        }) && (0 <= a.Wl && z.lj(a.Af[a.Wl], [a.Qv, a.vH]), a.Wl = b, d && (z.jj(d, [a.Qv, a.vH]), a.yc && xo(a.yc, d), Do(d, a.h)))
    };
    var Ps = function(a) {
        if (!a.h) {
            var b = a.da.B("DIV", {
                style: "display:none"
            });
            a.aK && (b.style.overflowY = "auto");
            a.h = b;
            z.jj(b, (0, z.ab)(a.className).split(" "));
            z.cj(b, "listbox");
            b.id = z.Xg(z.Wg.ba());
            a.da.appendChild(a.Ra, b);
            z.F(b, "click", a.Ll, !1, a);
            z.F(b, "mousedown", a.Ml, !1, a);
            z.F(b, "mouseover", a.dG, !1, a)
        }
    };
    var Qs = function(a) {
        Ps(a);
        a.$u && (a.h.style.visibility = "hidden");
        a.gX && (a.h.style.minWidth = a.gX.clientWidth + "px");
        a.Af.length = 0;
        a.da.Bp(a.h);
        if (a.ol && a.ol.render) a.ol.render(a, a.h, a.Sa, a.Wb);
        else {
            var b = null;
            z.y(a.Sa, 
            function(a) {
                a = Rs(this, a, this.Wb);
                this.$u ? this.h.insertBefore(a, b) : this.da.appendChild(this.h, a);
                b = a
            },
            a)
        }
        0 == a.Sa.length ? a.Dc() : (a.show(), a.ha(), z.Ao(a.h, !0))
    };
    var Ss = function(a, b, c) {
        if (a.ro || !a.eL) if (3 == b.nodeType) {
            var d = null;
            z.na(c) && 1 < c.length && !a.ro && (d = z.yb(c, 1));
            c = Ts(a, c);
            if (0 != c.length) {
                var f = b.nodeValue,
                g = a.iS ? new RegExp("\\b(?:" + c + ")", "gi") : new RegExp(c, "gi");
                c = [];
                for (var h = 0, k = g.exec(f), m = 0; k;) m++,
                c.push(f.substring(h, k.index)),
                c.push(f.substring(k.index, g.lastIndex)),
                h = g.lastIndex,
                k = g.exec(f);
                c.push(f.substring(h));
                if (1 < c.length) {
                    d = a.ro ? m: 1;
                    for (f = 0; f < d; f++) g = 2 * f,
                    b.nodeValue = c[g],
                    h = a.da.createElement("B"),
                    h.className = a.OQ,
                    a.da.appendChild(h, a.da.createTextNode(c[g + 
                    1])),
                    h = b.parentNode.insertBefore(h, b.nextSibling),
                    b.parentNode.insertBefore(a.da.createTextNode(""), h.nextSibling),
                    b = h.nextSibling;
                    c = z.yb(c, 2 * d);
                    b.nodeValue = c.join("");
                    a.eL = !0
                } else d && Ss(a, b, d)
            }
        } else for (b = b.firstChild; b;) d = b.nextSibling,
        Ss(a, b, c),
        b = d
    };
    var Ts = function(a, b) {
        var c = "";
        if (!b) return c;
        z.na(b) && (b = z.mb(b, 
        function(a) {
            return ! z.qp(null == a ? "": String(a))
        }));
        a.ro ? z.na(b) ? c = z.nb(b, z.Wa).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = z.Wa(c), c = c.replace(/ /g, "|")) : z.na(b) ? c = 0 < b.length ? z.Wa(b[0]) : "": /^\W/.test(b) || (c = z.Wa(b));
        return c
    };
    var Rs = function(a, b, c) {
        var d = a.da.B("DIV", {
            className: a.uh,
            id: z.Xg(z.Wg.ba())
        });
        z.cj(d, "option");
        a.ol && a.ol.td ? a.ol.td(b, c, d) : a.sJ(b, c, d);
        c && a.SK && (a.eL = !1, Ss(a, d, c));
        z.ij(d, a.uh);
        a.Af.push(d);
        return d
    };
    var Us = function(a, b) {
        for (; b && b != a.h && !z.hj(b, a.uh);) b = b.parentNode;
        return b ? z.lb(a.Af, b) : -1
    };
    z.Vs = function(a, b, c, d) {
        this.Kd = a = new z.Hs(a, !d);
        d = new z.Ms;
        c = new z.zs(null, null, !!c, 300);
        z.ls.call(this, a, d, c);
        c.ca = this;
        c.Xk(b)
    };
    z.Ws = function(a, b) {
        var c = this,
        d = {};
        z.Mb(d, this.defaults, b || {});
        this.J = d;
        var f = d.td ? {
            td: (0, z.q)(d.td, c)
        }: null;
        f && (f.render = d.render ? (0, z.q)(d.render, c) : null);
        this.M = f = new z.Ms(d.yk, f);
        var g = "string" === typeof d.source ? z.Hs: z.is,
        h = new g(d.source, !d.ZW);
        this.Kd = h;
        var k = d.ez;
        k || (k = new z.zs(d.separator, d.iO, !!d.multiple, d.delay), k.Ii = function(a, b) {
            var f;
            z.sa(d.select) && (f = d.select.call(c, a, c.M.Af[c.M.Wl]));
            As(this, z.ka(f) ? f: a.label || a.toString(), b);
            return ! 1
        });
        z.ls.call(this, h, f, k);
        k.ca = this;
        k.Xk(a);
        a.setAttribute("autocomplete", 
        "off");
        h.Ei = function(a, b, f) {
            var h = f;
            z.sa(d.format) && (h = function(a, b) {
                var g = d.format.call(c, b, a);
                z.sa(d.filter) && (g = d.filter.call(c, g, a));
                f(a, g)
            });
            return g.prototype.Ei.call(this, a, b, h)
        };
        f.sJ = function(a, b, c) {
            a = a.data;
            c.innerHTML = a.wW ? a.wW() : a.label || a.toString()
        };
        this.yc = a;
        d.ke && (this.dk = d.ke);
        d.placeholder && (this.kc = new z.wk(a, d.placeholder));
        this.addEventListener("suggestionsupdate", 
        function() {
            this.dispatchEvent(this.ub() ? "show": "hide")
        })
    };
    var Xs = function(a, b, c, d) {
        z.zs.call(this, a, b, c, d)
    };
    z.Ys = function(a, b) {
        z.R.call(this, b);
        this.Mb = a || ""
    };
    var Zs = function() {
        null != $s || ($s = "placeholder" in window.document.createElement("INPUT"));
        return $s
    };
    var at = function(a) { ! a.SO && a.T && a.m().form && (a.T.g(a.m().form, "submit", a.QP), a.SO = !0)
    };
    var bt = function(a) {
        return !! a.m() && "" != a.m().value && a.m().value != a.Mb
    };
    var ct = function(a, b) {
        return window.$.post("/node/MemberFollowBaseV2", {
            method: b ? "follow_member": "unfollow_member",
            params: {
                hash_id: a
            }
        })
    };
    var dt = function(a, b) {
        return window.$.post("/node/QuestionFollowBaseV2", {
            method: b ? "follow_question": "unfollow_question",
            params: {
                question_id: a
            }
        })
    };
    var et = function(a, b) {
        return window.$.post(b ? "/collection/follow": "/collection/unfollow", {
            favlist_id: a
        })
    };
    var ft = function(a, b) {
        return window.$.post("/node/TopicFollowBaseV2", {
            method: b ? "follow_topic": "unfollow_topic",
            params: {
                topic_id: a
            }
        })
    };
    z.gt = function(a, b) {
        return window.$.get("/" + a + "/" + b + "/sharetext")
    };
    var ht = function(a, b, c, d) {
        z.zs.call(this, a, b, c, d)
    };
    var it = function(a, b) {
        z.Hs.call(this, a, b);
        this.WA = null;
        this.pF = !0
    };
    var jt = function(a, b, c, d) {
        this.VH = 0;
        z.zs.call(this, a, b, !!c, d || 300)
    };
    var kt = function(a, b, c, d) {
        jt.call(this, a, b, !!c, d)
    };
    z.lt = function(a, b, c, d, f, g, h, k, m) {
        var n = {};
        "question_suggest" === g ? (n.render = (0, z.q)(this.XU, this), n.td = Er) : "topic_question" === g ? (n.render = (0, z.q)(this.ZU, this), n.td = Dr) : n.td = g ? Dr: Er;
        g = new z.Ms(f, n);
        f && (g.Dp = !1);
        g.ro = !0;
        this.M = g;
        this.Kd = new it(a, !d);
        a = m ? m: new jt(null, null, c);
        h && h.length && new z.wk(b, h[0]);
        a.JK = !1;
        z.ls.call(this, this.Kd, g, a);
        a.ca = this;
        a.fr(b);
        k && (a.VH = k)
    };
    z.mt = function(a, b, c) {
        z.G.call(this);
        this.Ie = c || "搜索话题";
        this.pa = b;
        this.data = a || [];
        this.status = nt;
        this.TU = "/topic/unbind";
        this.uM = "/topic/bind";
        this.isEnabled = !0;
        this.Rs = '\x3ca class\x3d"zm-tag-editor-tip-link" href\x3d"#" name\x3d"edit"\x3e帮忙给这个问题选个话题吧，好让别人来回答\x3c/a\x3e\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e添加\x3c/a\x3e';
        this.ke = 10;
        this.Ht = !1;
        this.yt = window.Infinity;
        this.Ct = 0;
        this.bD = !1
    };
    var ot = function(a) {
        a = z.Ro("zm-item-tag", a.wg);
        return z.nb(a, 
        function(a) {
            var c = [(0, z.ab)(a.innerHTML), a.getAttribute("data-token"), null, a.getAttribute("data-topicid")];
            c.LW = !!a.getAttribute("data-uneditable");
            return c
        })
    };
    var pt = function(a) {
        if (a.data.length) {
            var b = z.nb(a.data, 
            function(a) {
                return z.sr(a, "", null, "b")
            },
            a);
            a.isEnabled && b.push(vr());
            a.wg.innerHTML = b.join("")
        } else a.isEnabled && (a.wg.innerHTML = a.Rs)
    };
    var qt = function(a, b) {
        return z.mb(b, 
        function(a) {
            return "topic" !== a[0] ? !1: !this.Dx(a)
        },
        a)
    };
    var rt = function(a, b, c) {
        function d() {
            return z.qb(b, 
            function(a) {
                return "topic" === a[0] && a[4] && a[1] === c
            })
        }
        function f() {
            return z.qb(b, 
            function(a) {
                return 3 >= a.length && a[1] === z.Ka("创建 %s 话题", a[2])
            })
        }
        var g = (0, z.q)(function() {
            return z.qb(this.data, 
            function(a) {
                return a[0] === c
            })
        },
        a);
        z.T.Hs ? !a.bD || b.length && (f() || d()) || g() || b.push(["topic", z.Ka("创建 %s 话题", c), c]) : (a = f()) && (1 < b.length ? z.tb(b, a) : b = [["plain_text", '\x3cspan class\x3d"zu-autocomplete-row-name zu-autocomplete-row-name-info"\x3e没有找到话题：' + a[2] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e请使用已经创建的话题\x3c/span\x3e']]);
        return b
    };
    var st = function(a) {
        var b = a.data.length >= a.yt;
        a.Zd && z.Q(a.Zd, !b);
        a.zt && z.Q(a.zt, b)
    };
    var tt = function(a) {
        var b = [];
        a.data = z.mb(a.data, 
        function(a) {
            if (z.A(b, a[1])) return ! 1;
            b.push(a[1]);
            return ! 0
        })
    };
    z.ut = function(a, b, c) {
        z.mt.call(this, a, 0, c ? "添加父话题": "添加子话题");
        this.nz = c;
        this.If = b;
        this.Rs = "";
        this.rJ = "/topic/parent/remove"
    };
    var vt = function(a) {
        z.mt.call(this);
        this.Rs = "";
        this.Ie = a || "";
        this.yt = this.ke = 5;
        this.Jq = (0, window.$)("#zh-question-suggest-title-content")
    };
    var wt = function(a) {
        var b;
        b = a.aq ? z.mb(a.aq, 
        function(a) {
            return ! this.Dx(a)
        },
        a) : [];
        a.Lq.show();
        b && 0 !== b.length || a.Lq.hide();
        var c = "";
        b = z.nb(b, 
        function(a) {
            return "\x3ca href\x3d'javascript:;' name\x3d'add' data-id\x3d'" + a[4] + "' data-text\x3d'" + a[1] + "' class\x3d'zg-r3px zm-item-tag'\x3e\x3cspan\x3e" + a[1] + "\x3c/span\x3e\x3c/a\x3e"
        });
        c += b.join("");
        a.FL.html(c);
        a.Ev.hide()
    };
    z.xt = function(a) {
        z.mt.call(this, a, 0);
        this.Rs = "";
        this.HD = "/topic/ignore"
    };
    var yt = function() {
        z.xc.call(this)
    };
    z.zt = function(a) {
        z.xc.call(this);
        this.eK = z.kp();
        this.dF = z.kp();
        this.VA = a.eh();
        this.da = z.J(a.ua());
        a.fq(this.da.B("SPAN", {
            id: this.eK
        }), this.da.B("SPAN", {
            id: this.dF
        }))
    };
    z.At = function(a, b) {
        return a.da.m(b ? a.eK: a.dF)
    };
    z.Bt = function(a, b, c, d, f) {
        this.Kc = !!b;
        this.node = null;
        this.Ub = 0;
        this.Ak = !1;
        this.Br = !c;
        a && this.setPosition(a, d);
        this.depth = void 0 != f ? f: this.Ub || 0;
        this.Kc && (this.depth *= -1)
    };
    var Ct = function() {};
    var Dt = function(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch(d) {
                return null
            }
            return b
        }
        return null
    };
    z.Et = function(a) {
        for (var b = [], c = 0, d = a.Hj(); c < d; c++) b.push(a.Ee(c));
        return b
    };
    z.Ft = function(a) {
        return a.eh() ? a.la() : a.aa()
    };
    z.Gt = function(a) {
        return a.eh() ? a.Ma() : a.va()
    };
    z.Ht = function(a) {
        return a.eh() ? a.aa() : a.la()
    };
    z.It = function(a) {
        return a.eh() ? a.va() : a.Ma()
    };
    var Jt = function(a, b) {
        z.Bt.call(this, a, b, !0)
    };
    var Kt = function() {};
    z.Lt = function(a, b, c, d, f) {
        this.ta = this.xa = null;
        this.Ba = this.Ca = 0;
        var g;
        a && (this.xa = a, this.Ca = b, this.ta = c, this.Ba = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.xa = b, this.Ca = 0) : (a.length && (this.xa = z.kb(a)), g = !0)), 1 == c.nodeType && ((this.ta = c.childNodes[d]) ? this.Ba = 0: this.ta = c));
        z.Bt.call(this, f ? this.ta: this.xa, f, !0);
        if (g) try {
            this.next()
        } catch(h) {
            if (h != z.Od) throw h;
        }
    };
    var Mt = function(a, b) {
        null != a && this.append.apply(this, arguments)
    };
    var Nt = function() {};
    var Ot = function(a, b) {
        var c = a.O.getClientRects();
        return c.length ? (c = b ? c[0] : z.kb(c), new z.Ge(b ? c.left: c.right, b ? c.top: c.bottom)) : null
    };
    var Pt = function(a) {
        this.O = a
    };
    var Qt = function(a) {
        var b = z.Je(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0),
        b.setEnd(a, a.length);
        else if (Rt(a)) {
            for (var c, d = a; (c = d.firstChild) && Rt(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && Rt(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length: d.length)
        } else c = a.parentNode,
        a = z.lb(c.childNodes, a),
        b.setStart(c, a),
        b.setEnd(c, a + 1);
        return b
    };
    var St = function(a, b, c, d) {
        var f = z.Je(a).createRange();
        f.setStart(a, b);
        f.setEnd(c, d);
        return f
    };
    var Tt = function(a) {
        this.O = a
    };
    z.Ut = function(a, b) {
        this.ta = this.xa = this.pg = null;
        this.Ba = this.Ca = -1;
        this.O = a;
        this.Sr = b
    };
    var Vt = function(a) {
        var b = z.Je(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a),
        Rt(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var f = d.nodeType;
                if (3 == f) c += d.length;
                else if (1 == f) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
    var Wt = function(a, b) {
        for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            if (Rt(g)) {
                var h = Vt(g),
                k = h.htmlText != g.outerHTML;
                if (a.isCollapsed() && k ? 0 <= a.ze(h, 1, 1) && 0 >= a.ze(h, 1, 0) : a.O.inRange(h)) return Wt(a, g)
            }
        }
        return b
    };
    var Xt = function(a, b, c) {
        c = c || a.tc();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
            var h = d ? f: g - f - 1,
            k = c.childNodes[h],
            m;
            try {
                m = Yt(k)
            } catch(r) {
                continue
            }
            var n = m.O;
            if (a.isCollapsed()) if (!Rt(k)) {
                if (0 == a.ze(n, 1, 1)) {
                    a.Ca = a.Ba = h;
                    break
                }
            } else {
                if (m.Jg(a)) return Xt(a, b, k)
            } else {
                if (a.Jg(m)) {
                    if (!Rt(k)) {
                        d ? a.Ca = h: a.Ba = h + 1;
                        break
                    }
                    return Xt(a, b, k)
                }
                if (0 > a.ze(n, 1, 0) && 0 < a.ze(n, 0, 1)) return Xt(a, b, k)
            }
        }
        return c
    };
    var Zt = function(a, b) {
        var c = 1 == b,
        d = c ? a.aa() : a.la();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, f = d.length, g = c ? 1: -1, h = c ? 0: f - 1; 0 <= h && h < f; h += g) {
                var k = d[h];
                if (!Rt(k) && 0 == a.O.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == b ? "Start": "End"), Yt(k).O)) return c ? h: h + 1
            }
            return - 1 == h ? 0: h
        }
        f = a.O.duplicate();
        g = Vt(d);
        f.setEndPoint(c ? "EndToEnd": "StartToStart", g);
        f = f.text.length;
        return c ? d.length - f: f
    };
    var $t = function(a) {
        return 3 == a.nodeType ? a.nodeValue: a.innerText
    };
    var au = function(a, b, c) {
        c = c || z.J(a.parentElement());
        var d,
        f = d = b.id;
        d || (d = b.id = z.kp());
        a.pasteHTML(b.outerHTML); (b = c.m(d)) && (f || b.removeAttribute("id"));
        return b
    };
    var bu = function(a, b, c) {
        var d;
        d = d || z.J(a.parentElement());
        var f;
        1 != b.nodeType && (f = !0, b = d.B("DIV", null, b));
        a.collapse(c);
        b = au(a, b, d);
        f && (a = b.firstChild, d.LO(b), b = a);
        return b
    };
    var cu = function(a) {
        this.O = a
    };
    var du = function(a) {
        this.O = a
    };
    var eu = function(a) {
        return z.Vl ? new z.Ut(a, z.Je(a.parentElement())) : z.D ? new du(a) : z.B ? new Tt(a) : z.vg ? new cu(a) : new Pt(a)
    };
    var Yt = function(a) {
        if (!z.C || 9 <= z.Ug) a = z.D ? new du(Qt(a)) : z.B ? new Tt(Qt(a)) : z.vg ? new cu(Qt(a)) : new Pt(Qt(a));
        else {
            var b = new z.Ut(Vt(a), z.Je(a));
            if (Rt(a)) {
                for (var c, d = a; (c = d.firstChild) && Rt(c);) d = c;
                b.xa = d;
                b.Ca = 0;
                for (d = a; (c = d.lastChild) && Rt(c);) d = c;
                b.ta = d;
                b.Ba = 1 == d.nodeType ? d.childNodes.length: d.length;
                b.pg = a
            } else b.xa = b.ta = b.pg = a.parentNode,
            b.Ca = z.lb(b.pg.childNodes, a),
            b.Ba = b.Ca + 1;
            a = b
        }
        return a
    };
    var Rt = function(a) {
        return z.Ze(a) || 3 == a.nodeType
    };
    z.fu = function() {
        this.Ba = this.ta = this.Ca = this.xa = this.Th = null;
        this.sf = !1
    };
    var gu = function(a, b) {
        var c = new z.fu;
        c.Th = a;
        c.sf = !!b;
        return c
    };
    z.hu = function(a, b, c, d) {
        var f = new z.fu;
        f.sf = iu(a, b, c, d);
        if (z.kf(a) && !z.Ze(a)) {
            var g = a.parentNode;
            b = z.lb(g.childNodes, a);
            a = g
        }
        z.kf(c) && !z.Ze(c) && (g = c.parentNode, d = z.lb(g.childNodes, c), c = g);
        f.sf ? (f.xa = c, f.Ca = d, f.ta = a, f.Ba = b) : (f.xa = a, f.Ca = b, f.ta = c, f.Ba = d);
        return f
    };
    z.ju = function(a) {
        var b;
        if (! (b = a.Th)) {
            b = a.aa();
            var c = a.va(),
            d = a.la(),
            f = a.Ma();
            if (!z.C || 9 <= z.Ug) b = z.D ? new du(St(b, c, d, f)) : z.B ? new Tt(St(b, c, d, f)) : z.vg ? new cu(St(b, c, d, f)) : new Pt(St(b, c, d, f));
            else {
                var g = b,
                h = c,
                k = d,
                m = f,
                n = !1;
                1 == g.nodeType && (h = g.childNodes[h], n = !h, g = h || g.lastChild || g, h = 0);
                var r = Vt(g);
                h && r.move("character", h);
                g == k && h == m ? r.collapse(!0) : (n && r.collapse(!1), n = !1, 1 == k.nodeType && (k = (h = k.childNodes[m]) || k.lastChild || k, m = 0, n = !h), g = Vt(k), g.collapse(!n), m && g.moveEnd("character", m), r.setEndPoint("EndToEnd", 
                g));
                m = new z.Ut(r, z.Je(b));
                m.xa = b;
                m.Ca = c;
                m.ta = d;
                m.Ba = f;
                b = m
            }
            b = a.Th = b
        }
        return b
    };
    var ku = function(a) {
        z.xc.call(this);
        this.lD = z.Ft(a);
        this.PM = z.Gt(a);
        this.tF = z.Ht(a);
        this.OO = z.It(a)
    };
    z.lu = function() {
        this.Xp = this.fb = this.O = null
    };
    var mu = function(a) {
        var b = new z.lu;
        b.O = a;
        return b
    };
    var nu = function(a) {
        for (var b = z.Je(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++) b.addElement(arguments[c]);
        return mu(b)
    };
    var ou = function(a) {
        a.Xp || (a.Xp = a.ji().concat(), a.Xp.sort(function(a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.Xp
    };
    var pu = function(a) {
        this.fb = a.ji()
    };
    var qu = function(a) {
        this.fb = this.ta = this.xa = null;
        a && (this.fb = ou(a), this.xa = this.fb.shift(), this.ta = z.kb(this.fb) || this.xa);
        z.Bt.call(this, this.xa, !1, !0)
    };
    z.ru = function() {
        this.Of = [];
        this.rm = [];
        this.Cr = this.Im = null
    };
    var su = function(a) {
        var b = new z.ru;
        b.rm = a;
        b.Of = z.nb(a, 
        function(a) {
            return a.ee()
        });
        return b
    };
    var tu = function(a) {
        a.Im || (a.Im = z.Et(a), a.Im.sort(function(a, c) {
            var d = a.aa(),
            f = a.va(),
            g = c.aa(),
            h = c.va();
            return d == g && f == h ? 0: iu(d, f, g, h) ? 1: -1
        }));
        return a.Im
    };
    var uu = function(a) {
        this.ZA = z.nb(z.Et(a), 
        function(a) {
            return a.YA()
        })
    };
    var vu = function(a) {
        this.gg = null;
        this.ml = 0;
        a && (this.gg = z.nb(tu(a), 
        function(a) {
            return z.Nd(a)
        }));
        Jt.call(this, a ? this.aa() : null, !1)
    };
    z.wu = function(a) {
        return (a = Dt(a || window)) && xu(a)
    };
    var xu = function(a) {
        var b,
        c = !1;
        if (a.createRange) try {
            b = a.createRange()
        } catch(f) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new z.ru;
                for (var c = 0, d = a.rangeCount; c < d; c++) b.Of.push(a.getRangeAt(c));
                return b
            }
            b = a.getRangeAt(0);
            c = iu(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        return z.yu(b, c)
    };
    z.yu = function(a, b) {
        return a && a.addElement ? mu(a) : gu(eu(a), b)
    };
    z.zu = function(a) {
        return gu(Yt(a), void 0)
    };
    z.Au = function(a, b) {
        return z.hu(a, b, a, b)
    };
    var Bu = function(a) {
        if (a = Dt(a || window)) if (a.empty) try {
            a.empty()
        } catch(b) {} else try {
            a.removeAllRanges()
        } catch(b) {}
    };
    var iu = function(a, b, c, d) {
        if (a == c) return d < b;
        var f;
        if (1 == a.nodeType && b) if (f = a.childNodes[b]) a = f,
        b = 0;
        else if (z.mf(a, c)) return ! 0;
        if (1 == c.nodeType && d) if (f = c.childNodes[d]) c = f,
        d = 0;
        else if (z.mf(c, a)) return ! 1;
        return 0 < (No(a, c) || b - d)
    };
    z.Cu = function(a, b, c) {
        this.fI = a;
        this.hV = !!c;
        a && !b && this.next()
    };
    var Du = function(a, b, c) {
        z.ka(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1: 0);
        z.Cu.call(this, a.childNodes[c], !0, b)
    };
    z.Eu = function(a) {
        for (var b; b = a && 1 == a.nodeType ? z.Fu(z.Zo(new Du(a, !1), z.Gu)) : null;) a = b;
        return a
    };
    z.Hu = function(a) {
        return z.Fu(z.Zo(new z.Cu(a), z.Gu))
    };
    z.Fu = function(a) {
        try {
            return a.next()
        } catch(b) {
            return null
        }
    };
    z.Gu = function(a) {
        return 1 == a.nodeType || 3 == a.nodeType && !z.pp(a.nodeValue)
    };
    z.Iu = function(a, b) {
        var c = z.Jo(a);
        if (a.getElementsByTagName) for (var d in Ju) if (a.tagName == d || 0 < a.getElementsByTagName(d).length) return ! 1;
        return ! b && " " == c || z.pp(c)
    };
    z.Ku = function(a) {
        return a.length || a.childNodes.length
    };
    z.Lu = function(a) {
        return a.getAttribute && "true" == a.getAttribute("g_editable")
    };
    z.Mu = function(a, b) {
        z.C && z.af(a);
        a.innerHTML = b
    };
    var Nu = function(a) {
        return (a = a.exec(z.Bb)) ? a[1] : ""
    };
    z.Ou = function(a) {
        var b = a && a.nodeName;
        return ! (!a || "block" != (1 != a.nodeType ? null: z.C ? z.xg(a, "display") : z.wg(a, "display")) && "TD" != b && "TABLE" != b && "LI" != b)
    };
    z.Pu = function(a) {
        return z.vf(a, z.Ou, !0)
    };
    z.Qu = function(a) {
        z.Au(z.Eu(a), 0).select()
    };
    z.Ru = function(a, b) {
        var c = a.parentNode,
        d = z.lb(c.childNodes, a) + (b ? 0: 1),
        c = Su(c, d, b, !0);
        z.Au(c.node, c.offset).select()
    };
    var Tu = function(a) {
        for (var b = null, c = a.firstChild; c;) {
            var d = c.nextSibling;
            3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c: (Tu(c), b = null);
            c = d
        }
    };
    var Uu = function(a, b) {
        if (b) var c = Vu(b),
        d = z.Pu(b.Qb());
        d ? (d = Mo(d, a), z.C ? Tu(d) : d.normalize()) : a && (z.C ? Tu(a) : a.normalize());
        return c ? c() : null
    };
    z.Wu = function(a, b) {
        return b ? Su(a.aa(), a.va()) : Su(a.la(), a.Ma())
    };
    var Vu = function(a) {
        var b = a.eh(),
        c = Xu(z.Wu(a, !b)),
        d = Yu(c),
        f = c.node.previousSibling;
        3 == c.node.nodeType && (c.node = null);
        var g = Xu(z.Wu(a, b)),
        h = Yu(g),
        k = g.node.previousSibling;
        3 == g.node.nodeType && (g.node = null);
        return function() { ! c.node && f && (c.node = f.nextSibling, c.node || (c = new Zu(f, z.Ku(f)))); ! g.node && k && (g.node = k.nextSibling, g.node || (g = new Zu(k, z.Ku(k))));
            return z.hu(c.node || d.node.firstChild || d.node, c.offset, g.node || h.node.firstChild || h.node, g.offset)
        }
    };
    var Xu = function(a) {
        var b;
        if (3 == a.node.nodeType) for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += z.Ku(b);
        else b = a.node.previousSibling;
        var c = a.node.parentNode;
        a.node = b ? b.nextSibling: c.firstChild;
        return a
    };
    z.$u = function(a) {
        var b = a.Qb();
        return a.aa() != b.parentElement && z.Lu(b) || !!z.vf(b, z.Lu)
    };
    var Zu = function(a, b) {
        this.node = a;
        this.offset = b
    };
    var Yu = function(a) {
        var b = a.node.parentNode;
        return new Zu(b, z.lb(b.childNodes, a.node))
    };
    var Su = function(a, b, c, d) {
        for (; 1 == a.nodeType;) {
            var f = a.childNodes[b];
            if (f || a.lastChild) if (f) {
                var g = f.previousSibling;
                if (c && g) {
                    if (d && av(g)) break;
                    a = g;
                    b = z.Ku(a)
                } else {
                    if (d && av(f)) break;
                    a = f;
                    b = 0
                }
            } else {
                if (d && av(a.lastChild)) break;
                a = a.lastChild;
                b = z.Ku(a)
            } else break
        }
        return new Zu(a, b)
    };
    var av = function(a) {
        return 1 == a.nodeType && !z.Ze(a)
    };
    z.bv = function(a) {
        z.zt.call(this, a)
    };
    z.cv = function(a, b) {
        var c = a ? z.J(a) : b;
        z.R.call(this, c);
        this.kU = a || this.K().ua().body;
        this.pA = {};
        z.dv.push(this);
        this.zu = !0
    };
    z.ev = function(a, b) { (a.zu = b) ? a.tq() : z.fv(a)
    };
    var gv = function(a) {
        if (!a.Bl) {
            var b = a.m(),
            c = z.Xn(b).x,
            d = z.go(b).width;
            a.pA = {};
            z.Db(hv, 
            function(a) {
                this.pA[a] = b.style[a]
            },
            a);
            z.Db(iv, 
            function(a) {
                this.kc.style[a] = b.style[a] || z.xg(b, a) || z.wg(b, a)
            },
            a);
            z.Gg(a.kc, b.offsetWidth, b.offsetHeight);
            z.sg(b, {
                left: c + "px",
                width: d + "px",
                cssFloat: "none"
            });
            b.parentNode.replaceChild(a.kc, b);
            a.kU.appendChild(b);
            b.style.position = "fixed";
            a.Dp();
            z.W.add(b, "goog-scrollfloater-floating");
            a.Bl = !0
        }
    };
    z.fv = function(a) {
        if (a.Bl) {
            var b = a.m();
            z.Db(a.pA, 
            function(a, d) {
                b.style[d] = a
            });
            a.kc.parentNode.replaceChild(b, a.kc);
            z.W.remove(b, "goog-scrollfloater-floating");
            a.Bl = !1
        }
    };
    var jv = function(a, b, c) {
        z.cv.call(this, a, c);
        this.LU = b;
        this.tag = "";
        this.RI = 100
    };
    var kv = function(a) {
        return a && z.qb(z.dv, 
        function(b) {
            return a === b.tag && b.Bl
        })
    };
    var lv = function() {};
    var mv = function(a, b) {
        this.X = (0, window.$)(a);
        this.J = window.$.extend({},
        this.defaults, b || {});
        this.Fg()
    };
    var nv = function(a, b) {
        window.$.each(ov, 
        function(c, d) {
            var f = b && (null !== b && d in b ? b[d] : void 0);
            f ? f(a, d) : a.removeAttribute(d)
        })
    };
    var pv = function(a, b) { (0, window.$)("*", a).each(function() {
            nv(this, b)
        })
    };
    var qv = function(a) {
        a = a.J;
        var b = a.bV,
        c = a.SA;
        return {
            id: function(a, c) {
                a.id && !z.A(b, a.id) && a.removeAttribute(c)
            },
            "class": function(a, b) {
                if (a.className) if (c.length) {
                    var g = z.W.get(a),
                    g = z.mb(g, z.fp(z.Ba(z.A, c)));
                    g.length && z.W.remove.apply(null, [a].concat(g))
                } else a.removeAttribute(b)
            }
        }
    };
    var rv = function(a) {
        z.G.call(this);
        this.J = window.$.extend(!0, {},
        this.defaults, a || {});
        this.yw();
        this.pf()
    };
    var sv = function(a, b) {
        a.close();
        a.dispatchEvent({
            type: "cancel",
            data: {
                originalEvent: b
            }
        })
    };
    var tv = function(a, b) {
        z.G.call(this);
        this.input = a;
        z.Mb(this.J = {},
        this.defaults, b || {});
        this.qg = new rv({
            Zm: this.J.Zm,
            qk: this.J.qk
        });
        z.Ac(this, this.qg);
        this.Fg()
    };
    var uv = function(a) {
        a = z.N(a.J.Ks, a.input);
        var b;
        if (a) return b = window.document.createTextNode("@"),
        z.Qo(b, a),
        b
    };
    var vv = function(a, b) {
        var c;
        z.B && (c = z.Qe(window.document), a.input.focus(), window.scrollTo(c.x, c.y));
        var d;
        wv ? (c = window.getSelection(), d = window.document.createRange(), d.setStartAfter(b), c.removeAllRanges(), c.addRange(d)) : 3 === b.nodeType && z.Au(b, b.length).select()
    };
    var xv = function(a) {
        return a && "A" === a.nodeName
    };
    var yv = function(a, b, c) {
        var d = window.getSelection();
        if (b(d.anchorNode.parentNode)) {
            b = d.getRangeAt(0);
            var f = zv(a);
            b.insertNode(f);
            b.selectNode(f);
            d.removeAllRanges();
            d.addRange(b);
            d = window.getSelection().getRangeAt(0);
            a = Av(a, d);
            c(a)
        }
    };
    var Bv = function(a, b, c) {
        var d = window.document.selection.createRange(),
        f = d.parentElement();
        b(f) && (d.pasteHTML(zv(a).outerHTML), d.moveToElementText(z.N(a.J.Ks, a.input)), d.select(), a = Av(a, d), "7.0" === z.Jc && (a.x -= 2), c(a))
    };
    var Av = function(a, b) {
        var c;
        c = b.getBoundingClientRect();
        var d;
        z.C && (d = {
            width: b.boundingWidth,
            height: b.boundingHeight
        },
        z.Ca(d, c), c = d);
        d = z.Qe(window.document);
        var f = z.Xn(a.qg.tc());
        f.x = c.left - f.x + d.x;
        f.y = c.top - f.y + d.y;
        a.J.position.call(a, f, c);
        return f
    };
    var Cv = function(a) {
        return a && 1 === a.nodeType && "A" === a.tagName && z.A(Dv, a.className)
    };
    var zv = function(a) {
        return z.O("a", {
            className: a.J.Ks,
            innerHTML: "@"
        })
    };
    z.Ev = function(a, b, c) {
        z.R.call(this);
        this.status = this.Vb = null;
        this.$G = a;
        this.FJ = b;
        this.Jr = c;
        this.isEnabled = !0;
        this.wF = !1;
        this.params = [];
        this.content = null;
        this.gC = !1;
        this.DE = window.$.Deferred()
    };
    var Fv = function(a) {
        var b = a.Na;
        if (b.m) b.on("load", 
        function() {
            new mv(b.m(), {
                SA: ["video-link"].concat(this.gv ? Dv: [])
            })
        },
        !1, a)
    };
    var Gv = function(a) {
        var b = a.Na;
        b.m && (a = (0, z.q)(function() {
            new tv(b.m(), {
                qk: this.sj
            })
        },
        a), b.vc() ? a() : b.addEventListener("load", a))
    };
    var Hv = function(a) {
        if (a.dispatchEvent("shouldUpdateContent")) {
            var b = a.content,
            c = a.hd,
            d = a.KF();
            a.gC ? (z.nf(c, b), c.appendChild(z.Xe(d))) : c.innerHTML = b + d; (0, window.$)("img.lazy", c).lazyload({
                data_attribute: "actualsrc",
                threshold: 400
            })
        }
    };
    z.Iv = function(a, b, c) {
        z.Ev.call(this, a, b, c);
        this.rS = "mock" + this.fe();
        this.qx = !1;
        this.Aw = !0;
        this.Hd = !z.Um || z.Xl;
        this.gv = !1;
        this.QK = this.YW = !0;
        this.Hz = ""
    };
    var Jv = function(a, b, c) {
        var d = b.Rb.FullScreenPlugin;
        if (d) {
            var f = z.$g(c, "toggleFullScreen");
            d.on("save", a.Cs, !1, a).on("willEnterFullScreen", 
            function() {
                Kv(this, !1)
            },
            !1, a).on("enterFullScreen", 
            function() {
                f.wd("退出写作模式")
            }).on("exitFullScreen", 
            function() {
                f.wd("写作模式")
            }).on("shouldExitFullScreenOnEscape", 
            function() {
                return ! b.ah
            })
        }
    };
    var Kv = function(a, b) {
        if (a.xg) if (b) {
            z.W.add(a.tl, "zm-editable-editor-field-wrap-active");
            var c = a.xg;
            c.Vt = z.Xn(c.m()).y;
            z.ev(a.xg, !0)
        } else z.W.remove(a.tl, "zm-editable-editor-field-wrap-active"),
        z.ev(a.xg, !1)
    };
    var Lv = function(a) {
        a.LC.toggle();
        a.Dq.toggleClass("no-toolbar")
    };
    z.Mv = function() {
        z.V.call(this);
        this.NE = !0;
        this.Vz = z.T.Vz;
        this.NV = -1 === window.location.href.indexOf("psq")
    };
    z.Nv = function(a, b) {
        a.Hc && (a.Hc.value = b, a.GI(), a.hJ.KK(), a.Ja && a.Ja.fv())
    };
    var Ov = function(a) {
        var b = Pv.get("add_question_form_title");
        b && z.Nv(a, b); (b = Pv.get("add_question_form_des")) && Qv(a, b);
        b = a.J.Pm;
        b || (b = Pv.get("add_question_form_topics")) && (b = JSON.parse(b));
        b && z.y(b, 
        function(b) {
            a.Ja.Am(b)
        })
    };
    var Rv = function(a) {
        function b() {
            var a = (0, window.$)('\x3cdiv\x3e\x3cdiv style\x3d"text-align:center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e'),
            b = (0, window.$)(pq(this)),
            c = b.data("answer_count"),
            f = b.data("url_token");
            window.$.get("/question/" + f + "/answers/summary").done(function(b) {
                if (b && !b.r) {
                    b = d({
                        forEach: z.y,
                        answers: b.msg,
                        question_url_token: f
                    });
                    var g = z.Ka('\x3cdiv class\x3d"zippy-row"\x3e\x3ca class\x3d"zg-link-litblue" href\x3d"/question/%s"\x3e查看该问题%s\x3c/a\x3e\x3c/div\x3e', 
                    f, 0 < c ? "的全部 " + c + " 个回答": "");
                    a.html(b + g)
                } else z.X.message(b.msg)
            });
            b.after(a);
            return a.get(0)
        }
        var c = (0, z.Sv)(a.nq.gJ),
        d = (0, z.Sv)(a.nq.VM),
        f = a.Hc,
        g = new Xs;
        a.WC = new z.Ws(f, {
            source: "/question/autocomplete",
            yk: z.L("zh-question-suggest-ac-wrap"),
            td: window.$.noop,
            render: function(d, f, g) {
                a.YC && a.YC.H();
                f = (0, window.$)(d.m());
                var n = a.YC = new hs;
                f.html(c({
                    forEach: z.y,
                    questions: g,
                    token: (0, window.encodeURIComponent)(this.Wb)
                }));
                f.prepend('\x3cdiv class\x3d"ac-head zg-gray"\x3e你的问题可能已经有答案\x3c/div\x3e'); (0, window.$)(".ac-row", 
                f).each(function() {
                    n.Fa(new z.nq((0, window.$)(this).get(0), b, !1))
                });
                n.w(d.m())
            },
            ez: g
        })
    };
    var Tv = function(a, b) { (0, window.$)(a.bW).toggle( !! b); (0, window.$)(a.GH).toggle(!b);
        b ? a.FD.focus() : (a.wo(), a.Hc.focus());
        a.ha()
    };
    var Uv = function(a) {
        if (!z.Vj || z.Wj) {
            var b = mq.ba(),
            c = new z.cq("", b);
            c.Tb(32, !1);
            a.o().g(c, "action", a.XS);
            c.w(a.xW);
            c.wd("切换工具栏");
            c = new z.cq("", b);
            c.Tb(32, !1);
            a.o().g(c, "action", 
            function() {
                this.Pb.Na.execCommand("image")
            });
            c.w(a.vM);
            c.wd("添加图片");
            b = new z.cq("", b);
            b.Tb(32, !1);
            a.o().g(b, "action", 
            function() {
                this.Pb.Na.execCommand("video")
            });
            b.w(a.wM);
            b.wd("添加视频")
        }
    };
    var Vv = function(a) {
        a.Ja = new vt;
        a.Ja.w(a.DW);
        a.o().g(a.Ja, ["add_tag", "remove_tag"], a.DI);
        new z.wk(a.Hc, "写下你的问题");
        var b = a.kO;
        a.Pb = new z.Iv;
        a.Pb.Hz = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e问题背景、条件等详细信息\x3c/span\x3e';
        a.Pb.w(b);
        a.Pb.init();
        a.Pb.vg();
        z.Vj && !z.Wj || Lv(a.Pb); (0, window.setTimeout)(function() {
            a.ha()
        });
        Uv(a);
        Rv(a)
    };
    var Wv = function(a, b, c) {
        "title" === c ? a.FR = b: "detail" === c ? a.vR = b: a.IR = b;
        a.NE = a.FR || a.vR || a.IR
    };
    var Xv = function(a, b) { (0, window.$)(a.dl).attr("disabled", b)
    };
    var Yv = function(a) { (0, window.$)(window).on("beforeunload.AddQuestionForm", (0, z.q)(function() {
            Zv(this)
        },
        a))
    };
    var Zv = function(a) {
        a.Hc.value && Pv.set("add_question_form_title", a.Hc.value);
        var b = a.Pb.ag();
        b && Pv.set("add_question_form_des", b); (a = a.Ja.data) && Pv.set("add_question_form_topics", JSON.stringify(a))
    };
    var $v = function(a, b, c) {
        a.Et.innerHTML = b.Be;
        0 === b.level ? z.Q(a.hk, !1) : (3 !== b.level && (z.Q(a.dl, !0), z.Q(a.rn, !1)), z.Q(a.hk, c), c && a.Hc.focus())
    };
    var aw = function(a) {
        var b = z.tr(a.Hc.value).replace(/？/g, "?"),
        c = bw(a);
        1 < c.level || (1 > Cr(z.tr(a.Hc.value).replace("？", "?")) ? (c.Be = "您还没有给问题添加问号", c.level = 3, c.name = "noquestionmark") : 1 < Cr(b) && (c.Be = "如果有多个问题，最好拆分一下", c.level = 1, c.name = "multiquestionmark"));
        return c
    };
    var bw = function(a) {
        var b = "#",
        c = a.Qo || new cw,
        d = !1;
        if (!a.WC || !a.NV) return c;
        var f = a.WC.Sa;
        f && f.length ? (z.y(f, 
        function(a) {
            4 < a.raw.length && 1 === +a.raw[4] && (d = !0, b = "/question/" + a.url_token + "?q\x3d" + (0, window.encodeURIComponent)(this.Hc.value) + "\x26psq\x3d0")
        },
        a), d ? (c.Be = '我们找到了一个也许是你想问的问题，\x3ca href\x3d"' + b + '"\x3e查看问题\x3c/a\x3e', c.level = 3, c.name = "duplicatedquestion", c.MY = !0, a.rn.href = b, z.Q(a.dl, !1), z.Q(a.rn, !0)) : (c = new cw, z.Q(a.dl, !0), z.Q(a.rn, !1)), a.Qo = c) : (c = new cw, a.Qo = c, z.Q(a.dl, !0), z.Q(a.rn, !1));
        a.Qo || 
        (a.Qo = c);
        return a.Qo
    };
    var dw = function(a) {
        a = z.tr(a.Hc.value).replace(/？/g, "?");
        a = Hr(a);
        var b = new cw;
        3 > a ? (b.level = 3, b.Be = "问题字数太少了吧", b.name = "tooshort") : 40 < a && 51 >= a ? (b.level = 1, b.Be = '还可以输入 \x3cspan class\x3d"warning"\x3e' + (51 - a) + "\x3c/span\x3e 字", b.name = "buffer") : 51 < a && (b.level = 3, b.Be = '已超出 \x3cspan class\x3d"error"\x3e' + (a - 51) + "\x3c/span\x3e 字", b.name = "toolong");
        return b
    };
    var ew = function(a) {
        a = a.Pb;
        var b = (0, z.ab)(a.ag());
        return a.isContentEditable() ? b: z.Ma(b)
    };
    var Qv = function(a, b) {
        var c = a.Pb; (0, window.setTimeout)(function() {
            c.ia(b);
            c.Op()
        })
    };
    var fw = function(a) {
        var b = new z.Gr,
        c = [],
        d = [];
        b.add("question_title", a.Hc.value);
        b.add("question_detail", ew(a));
        a.SD && b.add("anon", a.SD.checked ? "1": "0");
        z.y(a.Ja.data, 
        function(a) {
            a[3] ? c.push(a[3]) : d.push(a[1])
        });
        b.add("topic_ids", c.join(","));
        b.add("new_topics", d.join("$"));
        z.mh && b.add("uid", z.mh[3]);
        return b
    };
    var gw = function(a) {
        window.$.get("/org/ask_question_limit").then(function(b) {
            if (!b.r) {
                b = b.msg;
                var c = void 0,
                c = b ? (0, window.$)('\x3cspan class\x3d"zm-question-form-notice"\x3e本月还能提 ' + b + " 个问题\x3c/span\x3e") : (0, window.$)('\x3cspan class\x3d"zm-question-form-notice zm-question-form-notice--warning"\x3e已达到本月提问上限\x3c/span\x3e'); (0, window.$)(a.GH).find(".zm-command").prepend(c)
            }
        })
    };
    var cw = function() {
        this.level = (0, window.isNaN)(void 0) ? 0: void 0;
        this.Be = ""
    };
    var hw = function() {};
    z.iw = function(a) {
        z.Dk.call(this, "register");
        this.Vn = a
    };
    var jw = function(a) {
        z.R.apply(this, arguments)
    };
    var kw = function() {};
    var lw = function() {
        var a = (0, window.$)("#rq3-sidenav-link"),
        b = (0, window.$)(".tour", a);
        b.length && (0, window.$)(".close-button", b).click(function() {
            var a = (0, window.$)(this).data("feature");
            window.$.get("/notifeature", {
                feature: a
            });
            b.fadeOut(100, 
            function() {
                b.remove()
            })
        })
    };
    var mw = function() {
        var a = (0, window.$)(".zm-side-my-columns");
        if (a.length) {
            var b = a.find(".column-homepage-link .icon-column-logo"),
            c = +z.Rh.get("navcolumn:entered");
            a.on("click", ".column-unfold", 
            function(b) {
                a.find(".column-list").append((0, window.$)("#SidebarColumnItem-template").html()); (0, window.$)(b.currentTarget).parent().remove()
            });
            c || (b.addClass("icon-column-logo-active"), a.on("click", ".column-homepage-link", 
            function() {
                b.removeClass("icon-column-logo-active");
                z.Rh.set("navcolumn:entered", 1)
            }))
        }
    };
    var nw = function(a) {
        z.R.apply(this, arguments)
    };
    z.ow = function(a) { (new window.Image).src = a
    };
    var pw = function() { (0, window.$)(".shameimaru-placeholder").each(function() {
            var a = (0, window.$)(this),
            b = Object.assign({},
            {
                loc: a.data("loc")
            },
            a.data("params"));
            window.$.get("/node/Banner", b, 
            function(b) {
                b ? (b = (0, window.$)(b), a.replaceWith(b), (new nw).w(b[0])) : a.remove()
            })
        })
    };
    var qw = function(a) {
        z.R.apply(this, arguments)
    };
    var rw = function(a) {
        var b = a.Lf;
        b.addClass("is-hidden"); (0, window.setTimeout)(function() {
            b.remove()
        },
        200)
    };
    var sw = function() {
        function a(a, b) {
            a = z.pa(a) ? new RegExp(a) : a;
            return a.test(b)
        }
        var b;
        z.Fb({
            home: "^/$",
            collection: "^/collection/\\d+$",
            roundtable: "^/roundtable/[\\w\\.-]+$",
            answer: "^/question/\\d+/answer/\\d+$",
            question: "^/question/\\d+$",
            search: "^/search$",
            people: "^/people/[\\w\\.-]+$",
            people_answers: "^/people/[\\w\\.-]+/answers$",
            explore_recommendations: "^/explore/recommendations$",
            explore_daily_hot: {
                path: "^/explore$",
                hash: "^(?!monthly-hot$)"
            },
            explore_monthly_hot: {
                path: "^/explore$",
                hash: "^monthly-hot$"
            }
        },
        function(c, d) {
            c.path && c.hash ? a(c.path, window.location.pathname) && a(c.hash, window.location.hash.slice(1)) && (b = d) : a(c, window.location.pathname) && (b = d);
            return !! b
        });
        return b
    };
    z.tw = function(a) {
        return "/qrcode?" + window.$.param({
            url: a + "#showWechatShareTip"
        })
    };
    var uw = function() {
        vw = (0, window.$)(".wechat-share-tip");
        vw.on("touchstart click", 
        function(a) {
            a.preventDefault();
            ww()
        });
        "#showWechatShareTip" === window.location.hash && (xw(), window.location.hash = "")
    };
    var yw = function() {
        vw.length && (vw.show(), (0, window.$)(window.document.documentElement).addClass("show-wechat-share-tip"))
    };
    var ww = function() {
        vw.onTransitionEnd(function() {
            vw.hide()
        },
        150); (0, window.$)(window.document.documentElement).removeClass("show-wechat-share-tip")
    };
    var xw = function() {
        var a = sw();
        z.yi({
            category: "share",
            action: "scan_share_" + a + "_to_wechat_start"
        })
    };
    var zw = function(a) {
        z.R.apply(this, arguments)
    };
    var Aw = function() {};
    var Bw = function(a) {
        var b = (0, window.$)("#zh-feedback-form"),
        c = (0, window.$)(".zg-report-msg", b),
        d = (0, window.$)("textarea", b),
        b = (0, window.$)("select", b);
        a = a.type || b.val();
        b = window.$.trim(d.val());
        if (!b) return c.html("请填写反馈内容").show(),
        d.focus(),
        !1;
        c.hide();
        c = new z.Z(!0);
        d = new z.wh;
        c.on("success", 
        function() {
            z.X.message("建议发送成功，我们会尽快处理，感谢您的帮助");
            Cw.remove("content")
        });
        d.add("type", a).add("content", b);
        c.ajax("/feedback/report", d.toString())
    };
    var Dw = function(a, b) {
        return window.$.post("/node/ColumnFollowBaseV2", {
            method: b ? "follow_column": "unfollow_column",
            params: {
                column_id: a
            }
        })
    };
    var Ew = function(a, b) {
        return window.$.post("/roundtable/" + a, {
            action: b ? "follow": "unfollow"
        })
    };
    var Fw = function(a) {
        z.G.call(this);
        this.url = a + "/apilive";
        this.IU = 5E3;
        this.gV = 1E3;
        this.Ww = 0;
        Gw(this)
    };
    var Gw = function(a) {
        a.client = new window.WebSocket(a.url);
        a.client.onmessage = function(b) {
            try {
                a.dispatchEvent({
                    type: "message",
                    data: b.data
                })
            } catch(c) {}
        };
        a.client.onclose = function() { (0, window.setTimeout)(function() {
                a.Ww < a.gV && (Gw(a), a.Ww += 1)
            },
            a.IU)
        };
        a.client.onerror = function() {
            a.client.close()
        }
    };
    var Hw = function(a) {
        z.Mb(this.J = {},
        this.defaults, a || {});
        this.hc()
    };
    var Iw = function(a) {
        return Jw.every(function(b) {
            return a[b]
        })
    };
    var Kw = function(a, b) {
        return Jw.every(function(c) {
            return a[c] === b[c]
        })
    };
    var Lw = function(a) {
        return window.$.extend({},
        {
            key: a.key
        },
        a.Vb)
    };
    var Mw = function(a, b) {
        a.every(function(a) {
            return ! Kw(a, b)
        }) && a.push(b);
        return a
    };
    var Nw = function(a, b) {
        var c = a[b.group];
        c ? c.push(b) : a[b.group] = [b];
        return a
    };
    var Ow = function() {
        var a = cp(z.bn.map(function(a) {
            return z.Gb(Tn(a.cl))
        })).map(Lw).filter(Iw).reduce(Mw, []).reduce(Nw, {}),
        b = ['\x3cdiv class\x3d"shortcut-tips"\x3e'],
        c = {
            lV: /([^\s+])+|([\s+])/g,
            VO: function(a) {
                return a.replace(this.lV, 
                function(a, b) {
                    return b ? "\x3ckbd\x3e" + a + "\x3c/kbd\x3e": " " + a + " "
                })
            }
        };
        z.Db(a, 
        function(a, f) {
            b.push('\x3cdiv class\x3d"group"\x3e\x3ch2\x3e', f, "\x3c/h2\x3e\x3cdl\x3e");
            z.y(a, 
            function(a) {
                b.push("\x3cdt\x3e", c.VO(a.key), "\x3c/dt\x3e");
                b.push("\x3cdd\x3e", a.name, "\x3c/dd\x3e")
            });
            b.push("\x3c/dl\x3e\x3c/div\x3e")
        });
        b.push("\x3c/div\x3e");
        return b.join("")
    };
    z.Pw = function(a) {
        return Qw("common").then(function() {
            return Qw(a)
        })
    };
    var Rw = function() {
        var a = z.T;
        return {
            signedIn: a.Fb(),
            currentUser: {
                email: a.Pn,
                activated: a.ue,
                isOrg: a.Jd
            },
            authRequired: z.Kq
        }
    };
    var Sw = function(a, b) {
        Tw.push([a, z.qa(b) ? b: 2]);
        Tw.sort(function(a, b) {
            return a[1] - b[1]
        })
    };
    var Uw = function() {
        Lq.call(this);
        this.queue = []
    };
    var Vw = function() {
        Uw.call(this);
        this.Jx = 0
    };
    var Ww = function(a) {
        return Math.pow(a, 3)
    };
    var Xw = function(a) {
        return 1 - Math.pow(1 - a, 3)
    };
    var Yw = function(a) {
        return 3 * a * a - 2 * a * a * a
    };
    var Zw = function() {
        z.G.call(this);
        this.h = null;
        this.qS = 768;
        this.Gx = this.sV = 300;
        this.po = !0;
        this.fw = !1;
        this.qW = 150
    };
    var $w = function() {};
    var ax = function() {
        z.G.call(this)
    };
    z.bx = function(a) {
        a.jk = new z.Z(!1);
        a.o().ya(a.jk, "success", a.nT);
        a.jk.ajax("/noti7/new?r\x3d" + +new Date, null, "GET")
    };
    var cx = function() {
        if (dx)(0, window.$)(window.document).on("click.tabless", "a:not(#js-openInApp)", 
        function(a) {
            this.host === window.location.host && "_blank" === a.currentTarget.target && (a.currentTarget.target = "")
        })
    };
    var ex = function() {};
    z.fx = function(a, b, c) {
        this.element = a;
        this.Ze = b;
        this.fU = c
    };
    var gx = function(a, b) {
        this.bi = a instanceof z.Ge ? a: new z.Ge(a, b)
    };
    var hx = function(a, b) {
        this.EA = 4;
        this.du = b || void 0;
        z.Mn.call(this, a)
    };
    z.ix = function(a, b) {
        a.Kz = null == b || b instanceof z.qg ? b: new z.qg(b, void 0, void 0, void 0);
        a.V() && a.ha()
    };
    z.jx = function(a, b, c) {
        this.da = c || (a ? z.J(z.L(a)) : z.J());
        hx.call(this, this.da.B("DIV", {
            style: "position:absolute;display:none;"
        }));
        this.lj = new z.Ge(1, 1);
        this.fb = new Wo;
        this.Gk = null;
        a && this.attach(a);
        null != b && z.nf(this.m(), b)
    };
    var kx = function(a, b) {
        z.md(b, "mouseover", a.nd, !1, a);
        z.md(b, "mouseout", a.Pl, !1, a);
        z.md(b, "mousemove", a.Nl, !1, a);
        z.md(b, "focus", a.ge, !1, a);
        z.md(b, "blur", a.Pl, !1, a)
    };
    var lx = function(a, b) {
        var c = z.wf(a.da);
        a.lj.x = b.clientX + c.x;
        a.lj.y = b.clientY + c.y
    };
    var mx = function(a, b) {
        try {
            for (; b && !a.fb.contains(b);) b = b.parentNode;
            return b
        } catch(c) {
            return null
        }
    };
    var nx = function(a, b) {
        if (0 == b) {
            var c = a.lj.clone();
            return new ox(c)
        }
        return new px(a.cc)
    };
    var qx = function(a) {
        if (a.anchor) for (var b, c = 0; b = rx[c]; c++) z.mf(b.m(), a.anchor) && (b.il = a, a.UI = b)
    };
    var sx = function(a, b, c) {
        a.Gm || (a.Gm = z.vd((0, z.q)(a.Mz, a, b, c), a.Tp))
    };
    var tx = function(a) {
        a.Gm && (z.wd(a.Gm), a.Gm = void 0)
    };
    var ox = function(a, b) {
        gx.call(this, a, b)
    };
    var px = function(a) {
        z.fx.call(this, a, 3)
    };
    var ux = function(a, b, c) {
        z.jx.call(this, a, b, c)
    };
    z.vx = function(a, b) {
        a.so = b || null
    };
    var xx = function(a, b) {
        if (a.dw && a.dw.contains(b) || a.Zs(b)) return ! 0;
        var c = a.il;
        return !! c && c.Zs(b)
    };
    z.yx = function(a, b, c, d) {
        z.jx.call(this, null, null, c);
        z.sa(a) ? this.iz = a: this.mD = a;
        this.wN = 0 != b;
        this.LB = [];
        this.La = d || (c ? c.ua() : window.document);
        z.F(this.La, "mouseover", this.pG, !1, this)
    };
    var zx = function(a, b, c) {
        if (b == a.Sf) a.jj();
        else if (b != a.anchor) {
            if (1 == a.getState() || 4 == a.getState()) tx(a),
            Ax(a);
            var d = new Bx("trigger", a, b, void 0);
            a.ji().contains(b) || (a.attach(b), a.LB.push(b));
            a.anchor = b;
            a.kA(d) ? sx(a, b, c || a.du) : Ax(a)
        }
    };
    var Cx = function(a, b) {
        var c = z.lb(a.LB, b); - 1 != c && (a.detach(b), a.LB.splice(c, 1))
    };
    var Ax = function(a) {
        a.dispatchEvent(new Bx("canceltrigger", a, a.anchor || null));
        Cx(a, a.anchor);
        delete a.anchor
    };
    var Bx = function(a, b, c, d) {
        z.Lc.call(this, a, b);
        this.anchor = c;
        this.data = d
    };
    var Dx = function(a, b, c) {
        z.fx.call(this, a, b);
        this.eD = c
    };
    var Ex = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    z.Fx = function(a) {
        a = void 0 === a ? {}: a;
        z.G.call(this);
        this.wq = !0;
        this.Om = this.gq = -1;
        this.sK = "";
        this.Ia = null;
        Object.assign(this.J = {},
        this.defaults, a);
        this.J.Yk && (this.Ds = z.Kq(this.Ds, this.J.Yk))
    };
    z.Gx = function(a, b) {
        a.Ih.innerHTML += '\n    \x3ca class\x3d"zm-profile-email-history-link" href\x3d"' + b + '"\x3e私信记录  »\x3c/a\x3e\n    ' + (z.T.Jd ? "\x3cspan class\x3d'OrgIcon sprite-global-icon-org-14' data-tip\x3d's$b$已认证的机构' /\x3e": "") + "\n  "
    };
    z.Hx = function(a, b, c, d) { - 1 === b ? z.wr(a.$c, a.Ih) : b !== z.T.ig && (a.Om = b, a.sK = c, a.Ih && a.$c && (a.Ih.innerHTML = a.sK + (d ? vr() : ""), z.wr(a.Ih, a.$c), a.$c.value = ""))
    };
    var Ix = function(a, b) {
        a.Et.innerHTML = b;
        z.Q(a.Et, !0)
    };
    var Jx = function() {
        z.G.call(this);
        this.WV = this.NQ = 250;
        this.Uh = {};
        this.init()
    };
    var Kx = function(a, b) {
        return '\x3cdiv class\x3d"popover-content no-hovercard"\x3e' + a + "\x3c/div\x3e" + ('\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"arrow2' + (b ? " loading": "") + '"\x3e\x3c/div\x3e')
    };
    var Lx = function(a) {
        var b;
        switch (a.nl) {
        case "t":
            b = 5;
            break;
        case "r":
            b = 4;
            break;
        case "b":
            b = 4;
            break;
        case "l":
            b = 6
        }
        a = a.R;
        a.EA = b;
        a.V() && a.ha()
    };
    var Mx = function(a, b, c, d) {
        var f = a.Uh[b] && a.Uh[b][c];
        if (f) Nx(a, Kx(f));
        else if (f = Ox[b]) window.$.get("/node/" + f, {
            params: {
                url_token: c
            }
        },
        (0, z.q)(function(a) {
            Px(this, a, b, c)
        },
        a)),
        Nx(a, a.xw(d))
    };
    var Px = function(a, b, c, d) {
        a.bf === c && a.Kn === d && Px(a, b);
        a.Uh[c] = a.Uh[c] || {};
        a.Uh[c][d] = b;
        Lx(a);
        Nx(a, Kx(b));
        zx(a.R, a.BE, a.nl)
    };
    var Nx = function(a, b) {
        a.R.Pd(b);
        a.R.setPosition(a.YN)
    };
    var Qx = function(a) {
        z.R.call(this);
        this.options = window.$.extend({
            stopPropagation: !0,
            hN: "#000",
            lw: .5,
            NN: "#666",
            fE: .2,
            top: 2,
            width: 6,
            right: 2,
            eN: !0
        },
        a);
        this.Uz = 0;
        this.Vr = !1
    };
    var Rx = function(a) {
        a.Em && (a.re.stop().css({
            opacity: a.options.lw
        }).show(), a.ln && ((0, window.clearTimeout)(a.ln), a.ln = !1))
    };
    var Sx = function(a, b) {
        b = b || 0;
        a.ln = (0, window.setTimeout)((0, z.q)(function() {
            this.re.stop().fadeOut();
            this.ln = !1
        },
        a), b)
    };
    var Tx = function(a, b) {
        var c = a.fd.height() - 2 * a.options.top - a.re.height(),
        d = a.Re.height() - a.fd.height();
        return b / c * d
    };
    var Ux = function(a, b, c) {
        z.Lc.call(this, "scroll", a);
        this.scrollTop = b;
        this.JJ = c
    };
    z.Vx = function(a) {
        z.R.call(this);
        this.J = window.$.extend({},
        this.defaults, a || {})
    };
    var Wx = function() {
        z.G.call(this);
        this.Rf = [0, 0, 0];
        this.jI = [0, 0, 0];
        this.types = ["default", "follow", "vote_thank"];
        this.bF = !z.sm.Ab;
        this.PK = z.sm.Ab || null != window.navigator.userAgent.match(/iPad/i);
        this.cache = [!1, !1, !1];
        this.Fj = [null, null, null];
        this.cp = [0, 0, 0];
        this.Fm = [!1, !1, !1]
    };
    var Xx = function(a) {
        a.tab = new z.Vx({
            bI: ".zm-noti7-popup-tab-item",
            TI: ".zm-noti7-content",
            Gg: "current"
        });
        a.o().g(a.tab, "action", 
        function(a) {
            this.zE = a = a.data.index;
            Yx(this, a);
            var c = this.sg && this.sg[a];
            c && ((0, window.setTimeout)(function() {
                c.update()
            }), this.tab.index() === a && c.scrollTop())
        }).g(a.tab, "select", 
        function(a) {
            this.zE = a = a.data.index;
            Zx(this, a);
            z.Y.tb({
                type: "ga_click_top_nav_noti_tab",
                data: {
                    tab: +a
                }
            });
            this.Td || z.Rh.set("noti7-tab", a)
        });
        a.tab.w(a.Ci)
    };
    var $x = function(a) {
        var b = void 0,
        c = void 0,
        d = z.Rr(100, 
        function(c, d) {
            var h = d.target;
            200 > ("number" === typeof d.JJ ? d.JJ: h.scrollHeight - h.offsetHeight - h.scrollTop) && a.Dz(c).then(function(a) {
                a || z.nd(b[c])
            },
            window.$.noop)
        }),
        c = a.PK ? a.contents: a.sg,
        b = z.nb(c, 
        function(a, b) {
            return z.F(a, "scroll", (0, z.q)(d, void 0, b))
        })
    };
    var Zx = function(a, b) {
        a.sg && z.y(a.sg, 
        function(a, d) {
            b === d ? a.enter() : a.ux && (a.o().removeAll(), a.Qd && a.Qd.stop(), a.ux = !1)
        })
    };
    var ay = function(a) {
        a = z.dp(a.Rf, Un);
        return - 1 === a ? 0: a
    };
    var by = function(a) {
        if (!z.wm) {
            var b = cy(a.Td);
            a = cy(a.HG);
            var c = "";
            b && a ? c = "(" + a + " 封私信 / " + b + " 条消息) ": b ? c = "(" + b + " 条消息) ": a && (c = "(" + a + " 封私信) ");
            window.document.title = c + window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
        }
    };
    var dy = function(a, b) {
        a.Td -= a.Rf[b];
        a.Av.eq(b).removeClass("withdot");
        0 > a.Td && (a.Td = 0);
        z.Q(a.Dn, !!a.Td);
        a.Dn.innerHTML = a.Td
    };
    var Yx = function(a, b) {
        a.bF ? a.visible && (a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Nw[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.Rf[b] && ey(a.types[b]), dy(a, b), a.sg && a.sg[b].update().scrollTop(), a.Td || z.Rh.set("noti7-tab", b)) : (a.Fm[b] = !0, a.Jl(b))) : a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Nw[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.Rf[b] && ey(a.types[b]), dy(a, b)) : (a.Fm[b] = !0, a.Jl(b), ey(a.types[b]))
    };
    var fy = function(a, b) {
        b ? a.EC.fadeIn(50) : a.EC.fadeOut(50);
        a.visible = b;
        z.W.enable(a.Ci, "open", a.visible);
        z.W.enable(a.kq, "open", a.visible);
        if (b) {
            a.Ci.focus();
            z.y(a.cache, 
            function(a, b) {
                a || this.Jl(b)
            },
            a);
            a.o().g(window.document, "click", a.vs);
            var c;
            a.Td ? (c = ay(a), a.tab.select(c), a.Fm[c] = !0) : (c = gy(), a.Rw || (a.tab.select(c), a.Fm[c] = !0));
            Zx(a, c);
            z.Y.tb({
                type: "ga_click_top_nav_noti",
                data: {
                    tab: a.zE,
                    HK: +(a.Td || 0)
                }
            })
        } else a.o().qa(window.document, "click", a.vs),
        Zx(a, -1)
    };
    var ey = function(a) { (new z.Z(!1)).ajax("/noti7/readall", "tab\x3d" + a, "POST")
    };
    var gy = function() {
        var a = z.Rh.get("noti7-tab");
        return a ? +a: 0
    };
    var cy = function(a) {
        return 99 < a ? "99+": a
    };
    var hy = function(a) {
        z.R.call(this);
        window.$.extend(this.J = {},
        this.defaults, a || {})
    };
    var iy = function(a) {
        var b = a.Bg,
        c = a.ed,
        d = c.attr("id");
        d || (d = z.Xg(z.Wg.ba()), c.attr("id", d), b.attr("aria-labelledby", d));
        c.attr("role") || c.attr("role", "button");
        a.ed.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
        a.Bg.children().find("a").attr("tabindex", -1).attr("id", (0, z.q)(function(a, b) {
            return b || z.Xg(z.Wg.ba())
        },
        a))
    };
    var jy = function(a, b) {
        var c = a.Bg.children().find("a"),
        d = c.size();
        b >= d ? b = 0: -1 >= b && (b = d - 1);
        c = c.eq(b);
        a.ed.attr("aria-activedescendant", c.attr("id"));
        c.focus();
        a.index = b
    };
    var ky = function(a) {
        z.R.apply(this, arguments)
    };
    var ly = function(a, b) {
        if (!a.metaKey) try {
            z.Rh.set("query", a.W.Wb)
        } catch(c) {
            b += "?q\x3d" + (0, window.encodeURIComponent)(a.W.Wb)
        }
        return b
    };
    var my = function() {
        z.G.call(this)
    };
    var ny = function() {
        var a = (0, window.$)("#js-top-nav-link-profile"),
        b = (0, window.$)("#mobile-top-nav-profile-popup");
        if (z.Vj && b.length && b.children("ul").length) {
            var c = function(c) {
                c = c.target;
                b[0].contains(c) || c.contains(a[0]) || d()
            },
            d = function() {
                a.parent().removeClass("open");
                b.hide(); (0, window.$)(window.document.body).off("mousedown", c)
            };
            a.click(function(f) {
                f.preventDefault();
                b.is(":visible") ? d() : (a.parent().addClass("open"), b.show(), (0, window.$)(window.document.body).mousedown(c))
            }).attr("href", "javascript:;");
            b.find(".slide-up").click(d)
        }
    };
    var oy = function() {
        z.R.call(this)
    };
    var py = function() {
        z.Cj.call(this, null, !1);
        this.ID = "zh-lightbox-showing";
        this.sW = "zh-lightbox-thumb";
        this.hc()
    };
    var Jr = function() {
        if (window.console) {
            var a = Array.from(arguments);
            a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
            window.console.log.apply ? window.console.log.apply(window.console, a) : window.console.log(a[0], a.slice(1).join(","))
        }
    };
    z.qy = function(a) {
        a = void 0 === a ? {}: a;
        z.R.call(this);
        if (void 0 === typeof a.Da) throw Error("$form option is required.");
        var b = Object.assign({
            No: "FormItem",
            mw: function() {
                return window.Promise.resolve()
            },
            Xq: window.$.noop,
            OK: !0,
            GF: {},
            validator: function(a) {
                return z.ry(b.Da, a)
            }
        },
        a);
        this.xf = b;
        this.Da = b.Da;
        this.w(b.Da[0])
    };
    var sy = function(a, b) {
        var c = a.xf,
        d = c.Da,
        f = c.No;
        b && (z.ta(b) ? Object.entries(b).forEach(function(a) {
            var b = z.ia(a);
            a = b.next().value;
            var b = b.next().value,
            c = d.find("[name\x3d" + a + "]").first().addClass("is-error");
            a = '\x3cp class\x3d"' + f + '-error"\x3e' + b + "\x3c/p\x3e";
            b = c.parents("\n          ." + f + ", ." + f + "-section,\n          ." + f + "-uploader, ." + f + "-radio-group\n        ").first().addClass("is-error");
            c = b.find("." + f + "-error-container");
            c.length ? c.html(a) : (b.hasClass("" + f) && (b = b.find("." + f + "-content")), b.append(a))
        }) : 
        d.find('[type\x3d"submit"]').after('\x3cspan class\x3d"' + f + '-error is-inline"\x3e\n          ' + (b || "服务器错误，请稍后重试...") + "\n        \x3c/span\x3e").parents("." + f).addClass("is-error"))
    };
    z.ry = function(a, b) {
        b = void 0 === b ? {}: b;
        for (var c = window.$.unique(a.find("input, select").filter(function() {
            return (0, window.$)(this).data("required")
        }).map(function() {
            return (0, window.$)(this).attr("name")
        }).get()), d = {},
        c = z.ia(c), f = c.next(); ! f.done; f = c.next()) {
            var f = f.value,
            g = b[f];
            if (z.na(g) && 0 === g.length || !g) {
                d[f] = "必填项";
                var g = a.find("[name\x3d" + f + "]"),
                h = g.data("empty-tip");
                h && (d[f] = "placeholder" === h ? g.attr("placeholder") : h)
            }
        }
        return window.$.isEmptyObject(d) ? null: d
    };
    var ty = function(a, b) {
        function c(a) {
            a = a.val();
            d.JR && (a = window.$.trim(a));
            d.GR && window.$.isNumeric(a) && (a = Number(a));
            return a
        }
        var d = Object.assign({
            JR: !1,
            GR: !1,
            $O: function(a) {
                return a.attr("name")
            }
        },
        b),
        f = {};
        a.find("select, textarea, input").not("\n      input[type\x3dcheckbox]:not(:checkbox),\n      input[type\x3dradio]:not(:checked),\n      input[name^\x3d_]\n    ").each(function() {
            var b = (0, window.$)(this);
            if (!b.is(":disabled") && b.parents("form").first().is(a)) {
                var h = d.$O(b);
                if (h) if (b.is('[type\x3d"checkbox"]'))"undefined" === 
                typeof f[h] && (f[h] = []),
                f[h].push(c(b));
                else if (b.is('[type\x3d"file"]')) {
                    if ("undefined" === typeof f[h] && (f[h] = []), b = b.data("file") || b.val()) {
                        try {
                            b = JSON.parse(b)
                        } catch(k) {}
                        f[h].push(b)
                    }
                } else f[h] = c(b)
            }
        });
        return f
    };
    var uy = function(a, b) {
        z.G.call(this);
        this.h = a;
        var c = z.kf(this.h) ? this.h: this.h ? this.h.body: null;
        this.ER = !!c && z.Ng(c);
        this.yH = z.F(this.h, z.B ? "DOMMouseScroll": "mousewheel", this, b)
    };
    var vy = function(a, b) {
        return z.D && (z.Uc || z.Ll) && 0 != a % b ? a: a / b
    };
    var wy = function(a, b, c, d) {
        z.Pc.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.deltaX = c;
        this.deltaY = d
    };
    var xy = function() {
        z.G.call(this)
    };
    var yy = function(a, b) {
        return null == a.Dk ? b: a.Zo + Math.round((b - a.Zo) / a.Dk) * a.Dk
    };
    var zy = function(a, b) {
        z.R.call(this, a);
        this.dD = null;
        this.Bb = new xy;
        this.NR = b || z.Hl;
        z.F(this.Bb, "change", this.iG, !1, this)
    };
    var Ay = function(a, b) {
        b ? (a.o().g(a.pe, "beforedrag", a.ts).g(a.Wf, "beforedrag", a.ts).g(a.pe, ["start", "end"], a.Es).g(a.Wf, ["start", "end"], a.Es).g(a.vb, "key", a.lf).g(a.m(), "click", a.As).g(a.m(), "mousedown", a.As), a.XG && By(a, !0)) : (a.o().qa(a.pe, "beforedrag", a.ts).qa(a.Wf, "beforedrag", a.ts).qa(a.pe, ["start", "end"], a.Es).qa(a.Wf, ["start", "end"], a.Es).qa(a.vb, "key", a.lf).qa(a.m(), "click", a.As).qa(a.m(), "mousedown", a.As), a.XG && By(a, !1))
    };
    var Cy = function(a, b) {
        var c = z.Dg(b, a.m());
        return "vertical" == a.Nb ? c.y: a.ce && a.qd() ? a.m().clientWidth - c.x: c.x
    };
    var Dy = function(a, b) {
        var c = a.Fc(),
        d = a.Vc();
        if ("vertical" == a.Nb) {
            var f = a.cb.offsetHeight,
            g = a.m().clientHeight - f,
            f = Cy(a, b) - f / 2;
            return (d - c) * (g - f) / g + c
        }
        f = a.cb.offsetWidth;
        g = a.m().clientWidth - f;
        f = Cy(a, b) - f / 2;
        return (d - c) * f / g + c
    };
    var Ey = function(a, b) {
        if (b == a.cb) return a.Bb.Y();
        if (b == a.Gd) return a.Bb.Y() + a.Bb.ki();
        throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
    };
    var Fy = function(a, b) {
        Math.abs(b) < a.co() && (b = (0, z.Rl)(b) * a.co());
        var c = Ey(a, a.cb) + b,
        d = Ey(a, a.Gd) + b,
        c = $o(c, a.Fc(), a.Vc() - a.Dt),
        d = $o(d, a.Fc() + a.Dt, a.Vc());
        Gy(a, c, d - c)
    };
    var Hy = function(a, b, c) {
        var d = yy(a.Bb, c);
        c = b == a.cb ? d: a.Bb.Y();
        b = b == a.Gd ? d: a.Bb.Y() + a.Bb.ki();
        c >= a.Fc() && b >= c + a.Dt && a.Vc() >= b && Gy(a, c, b - c)
    };
    var Gy = function(a, b, c) {
        a.Fc() <= b && b <= a.Vc() - c && a.Dt <= c && c <= a.Vc() - b && (b != a.Y() || c != a.ki()) && (a.Bb.Ft = !0, a.Bb.Eu(0), a.Bb.Ea(b), a.Bb.Eu(c), a.Bb.Ft = !1, a.iG())
    };
    var Iy = function(a, b) {
        return b <= a.Bb.Y() + a.Bb.ki() / 2 ? a.cb: a.Gd
    };
    var Jy = function(a) {
        if (a.cb && !a.Eo) {
            var b = Ky(a, Ey(a, a.cb)),
            c = Ky(a, Ey(a, a.Gd));
            if ("vertical" == a.Nb) a.cb.style.top = b.y + "px",
            a.Gd.style.top = c.y + "px",
            a.Sb && (b = Ly(c.y, b.y, a.cb.offsetHeight), a.Sb.style.top = b.offset + "px", a.Sb.style.height = b.size + "px");
            else {
                var d = a.ce && a.qd() ? "right": "left";
                a.cb.style[d] = b.x + "px";
                a.Gd.style[d] = c.x + "px";
                a.Sb && (b = Ly(b.x, c.x, a.cb.offsetWidth), a.Sb.style[d] = b.offset + "px", a.Sb.style.width = b.size + "px")
            }
        }
    };
    var Ly = function(a, b, c) {
        var d = Math.ceil(c / 2);
        return {
            offset: a + d,
            size: Math.max(b - a + c - 2 * d, 0)
        }
    };
    var Ky = function(a, b) {
        var c = new z.Ge;
        if (a.cb) {
            var d = a.Fc(),
            f = a.Vc(),
            f = b == d && d == f ? 0: (b - d) / (f - d);
            "vertical" == a.Nb ? (d = a.m().clientHeight - a.cb.offsetHeight, f = Math.round(f * d), c.x = My(a, a.cb), c.y = d - f) : (c.x = Math.round(f * (a.m().clientWidth - a.cb.offsetWidth)), c.y = a.cb.offsetTop)
        }
        return c
    };
    var Ny = function(a, b) {
        b = $o(b, a.Fc(), a.Vc());
        a.Eo && (a.In.stop(!0), a.In.H());
        var c = new Vw,
        d,
        f = Iy(a, b),
        g = a.Y(),
        h = a.ki(),
        k = Ey(a, f),
        m = Ky(a, k);
        d = a.co();
        Math.abs(b - k) < d && (b = $o(k + (b > k ? d: -d), a.Fc(), a.Vc()));
        Hy(a, f, b);
        k = Ky(a, Ey(a, f));
        d = "vertical" == a.Nb ? [My(a, f), k.y] : [k.x, f.offsetTop];
        m = new gr(f, [m.x, m.y], d, 100);
        m.Qg(a.ce);
        c.add(m);
        a.Sb && Oy(a, f, g, h, k, c);
        a.dD && (f = a.dD.wY(g, b, 100), z.y(f, 
        function(a) {
            c.add(a)
        }));
        a.In = c;
        a.o().g(c, "end", a.CO);
        a.Eo = !0;
        c.play(!1)
    };
    var Oy = function(a, b, c, d, f, g) {
        var h = Ky(a, c),
        k = Ky(a, c + d);
        c = h;
        d = k;
        b == a.cb ? c = f: d = f;
        "vertical" == a.Nb ? (b = Ly(k.y, h.y, a.cb.offsetHeight), h = Ly(d.y, c.y, a.cb.offsetHeight), f = new gr(a.Sb, [My(a, a.Sb), b.offset], [My(a, a.Sb), h.offset], 100), b = new jr(a.Sb, b.size, h.size, 100)) : (b = Ly(h.x, k.x, a.cb.offsetWidth), h = Ly(c.x, d.x, a.cb.offsetWidth), f = new gr(a.Sb, [b.offset, a.Sb.offsetTop], [h.offset, a.Sb.offsetTop], 100), b = new ir(a.Sb, b.size, h.size, 100));
        f.Qg(a.ce);
        b.Qg(a.ce);
        g.add(f);
        g.add(b)
    };
    var Py = function(a) {
        var b = a.m();
        b && (z.dj(b, "valuemin", a.Fc()), z.dj(b, "valuemax", a.Vc()), z.dj(b, "valuenow", a.Y()), z.dj(b, "valuetext", a.NR(a.Y()) || ""))
    };
    var By = function(a, b) {
        b ? (a.gk || (a.gk = new uy(a.m())), a.o().g(a.gk, "mousewheel", a.eG)) : a.o().qa(a.gk, "mousewheel", a.eG)
    };
    var My = function(a, b) {
        return a.ce ? z.oj(b) : b.offsetLeft
    };
    var Qy = function(a, b) {
        zy.call(this, a, b);
        this.Bb.Eu(0)
    };
    var Ry = function(a) {
        z.R.call(this);
        this.options = window.$.extend({},
        this.defaults, a)
    };
    var Sy = function(a, b) {
        a.zoom = b;
        Ty(a, a.Me.zq / 2 + a.Me.x, a.Me.eo / 2 + a.Me.y)
    };
    var Ty = function(a, b, c) {
        var d = a.zoom;
        a.Me = {
            zq: a.options.Ag / d,
            eo: a.options.zg / d,
            x: b - a.options.Ag / d / 2,
            y: c - a.options.zg / d / 2
        };
        Uy(a)
    };
    var Uy = function(a) {
        var b = a.zoom,
        c = $o(a.options.Tm - a.Me.x * b, a.options.Ag + a.options.Tm - a.Ms * b, a.options.Tm),
        d = $o(a.options.Um - a.Me.y * b, a.options.zg + a.options.Um - a.Ls * b, a.options.Um),
        f = {
            width: b * a.Ms,
            height: b * a.Ls,
            left: c,
            top: d
        };
        a.Gq.css(f);
        a.yv.css(f);
        a.Me.x = (a.options.Tm - c) / b;
        a.Me.y = (a.options.Um - d) / b
    };
    z.Vy = function(a, b, c) {
        z.R.call(this);
        this.jr = a || z.Wy;
        this.hF = b;
        this.AJ = c || "l"
    };
    var Xy = function() {
        return !! window.FileReader
    };
    var Yy = function(a) {
        a.Xl = a.Ly = a.Oj = "";
        if (a.dialog) a.dialog.ha();
        else {
            a.dialog = new z.V(null);
            a.dialog.Oa("修改图片");
            var b = z.Mm.Te,
            c = z.Mm.Eg,
            d = new z.Pj;
            d.set(b, "取消", !1, !0).set(c, "确定", !0);
            z.Mj(a.dialog, d);
            a.o().g(a.dialog, z.Oj, 
            function(a) {
                if (a.key === c) {
                    if (Xy()) {
                        var b = this.Sw;
                        a = (0, window.$)("\x3ccanvas\x3e\x3c/canvas\x3e");
                        a.attr("width", b.options.Ag);
                        a.attr("height", b.options.zg);
                        var d = a[0]; (0, window.$)(window.document.body).append(d);
                        var k = a[0].getContext("2d"),
                        m = b.Me;
                        k.drawImage(b.Ns, m.x, m.y, m.zq, m.eo, 
                        0, 0, b.options.Ag, b.options.zg);
                        b = d.toDataURL("image/png");
                        a.remove();
                        a = b
                    } else a = this.Sw.Me;
                    this.Oj = a;
                    Zy(this);
                    this.dialog.G(!1);
                    return ! 1
                }
            })
        }
        $y(a.dialog.S());
        a.dialog.G(!0);
        z.W.add(a.dialog.h, "avatar-edit-dialog")
    };
    var az = function(a) {
        var b = a.input.cloneNode();
        z.Qo(b, a.input);
        a.input = b;
        a.o().g(a.input, "change", a.Ic)
    };
    var Zy = function(a) {
        if (a.Oj && (Xy() || a.Ly)) {
            a.dispatchEvent("beforepost");
            var b = {
                type: a.jr,
                dest_id: a.jr === z.Wy ? z.T[3] : a.hF,
                return_size: a.AJ
            };
            if (Xy()) {
                var c = new window.FormData;
                c.append("handle_mode", "upload");
                c.append("picture", bz(a.Oj.replace(/data\:image\/\w{3,4};base64,/, "")), a.file.name);
                window.$.each(b, 
                function(a, b) {
                    c.append(a, b)
                });
                window.$.ajax({
                    url: a.dC,
                    data: c,
                    method: "post",
                    processData: !1,
                    contentType: !1,
                    success: window.$.proxy(a.sE, a),
                    dataType: "json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    crossDomain: !0
                })
            } else {
                var b = 
                window.$.extend(b, {
                    handle_mode: "resize",
                    x: Math.round(a.Oj.x),
                    y: Math.round(a.Oj.y),
                    height: Math.round(a.Oj.eo),
                    width: Math.round(a.Oj.zq),
                    hashval: a.Ly
                }),
                d = '\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" action\x3d"' + a.dC + '"\x3e';
                window.$.each(b, 
                function(a, b) {
                    d += '\x3cinput type\x3d"hidden" name\x3d"' + a + '" value\x3d"' + b + '" /\x3e'
                });
                d += "\x3c/form\x3e";
                b = (0, window.$)(d);
                b.appendTo(a.h);
                b[0].submit()
            }
        }
    };
    var $y = function(a) {
        var b = (0, window.$)("\x3cdiv class\x3d'new-avatar-editor-loading'\x3e\x3cdiv\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv\x3e正在上传...\x3c/div\x3e\x3c/div\x3e");
        a = (0, window.$)(a);
        a.html("");
        a.append(b)
    };
    var bz = function(a) {
        var b,
        c;
        c = "image/png";
        b = b || 512;
        a = (0, window.atob)(a);
        for (var d = [], f = 0; f < a.length; f += b) {
            for (var g = a.slice(f, f + b), h = Array(g.length), k = 0; k < g.length; k++) h[k] = g.charCodeAt(k);
            g = new window.Uint8Array(h);
            d.push(g)
        }
        return new window.Blob(d, {
            type: c
        })
    };
    z.cz = function(a) {
        z.R.call(this);
        this.cU = Object.assign({
            zi: window.$.noop
        },
        a)
    };
    z.dz = function(a, b, c, d) {
        z.fx.call(this, a, b);
        this.Po = c ? 5: 0;
        this.rA = d || void 0
    };
    var ez = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var fz = function() {};
    var gz = function(a, b, c) {
        Wp.call(this, a, c || fz.ba(), b);
        this.Tb(1, !1);
        this.Tb(2, !1);
        this.Tb(4, !1);
        this.Tb(32, !1);
        this.N = 1
    };
    var hz = function() {
        this.Fw = []
    };
    var iz = function(a, b) {
        var c = a.Fw[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.U() + "-highlight";
                break;
            case 1:
                c = a.U() + "-checkbox";
                break;
            case 2:
                c = a.U() + "-content"
            }
            a.Fw[b] = c
        }
        return c
    };
    var jz = function(a, b, c) {
        a = iz(a, 2);
        return c.B("DIV", a, b)
    };
    var kz = function(a, b) {
        var c = a.S(b);
        if (c) {
            var c = c.firstChild,
            d = iz(a, 1);
            return !! c && z.kf(c) && z.hj(c, d)
        }
        return ! 1
    };
    var lz = function(a, b, c, d) {
        Op(a, c, b.ni());
        Pp(a, b, c);
        d != kz(a, c) && (z.vo(c, "goog-option", d), c = a.S(c), d ? (a = iz(a, 1), c.insertBefore(b.K().B("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
    z.mz = function(a, b, c, d) {
        Wp.call(this, a, d || hz.ba(), c);
        this.Ea(b)
    };
    var nz = function() {};
    z.oz = function(a, b) {
        Wp.call(this, null, a || nz.ba(), b);
        this.Tb(1, !1);
        this.Tb(2, !1);
        this.Tb(4, !1);
        this.Tb(32, !1);
        this.N = 1
    };
    var pz = function(a) {
        this.iw = a || "menu"
    };
    z.qz = function(a) {
        z.oz.call(this, nz.ba(), a)
    };
    z.rz = function(a, b) {
        z.Zr.call(this, sz, b || pz.ba(), a);
        this.Oe(!1)
    };
    var tz = function(a, b, c, d) {
        z.dz.call(this, a, b, c || d); (c || d) && this.zm(65 | (d ? 32: 132))
    };
    var uz = function() {};
    var vz = function(a, b) {
        if (a) for (var c = b ? a.firstChild: a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling: c.previousSibling;
            if (3 == c.nodeType) {
                var f = c.nodeValue;
                if ("" == (0, z.ab)(f)) a.removeChild(c);
                else {
                    c.nodeValue = b ? z.mp(f) : z.lp(f);
                    break
                }
            } else break;
            c = d
        }
    };
    var wz = function() {};
    var xz = function(a, b, c) {
        return c.B("DIV", "goog-inline-block " + (b + "-caption"), a)
    };
    z.yz = function(a, b, c, d, f) {
        z.cq.call(this, a, c || wz.ba(), d);
        this.Tb(64, !0);
        this.ek = new tz(null, 5);
        b && this.yh(b);
        this.OH = null;
        this.ma = new z.td(500); ! z.Vi && !z.Wj || z.E("533.17.9") || (this.at = !0);
        this.mS = f || pz.ba()
    };
    var zz = function(a) {
        a.OH = new z.qg(7, 0, 7, 0)
    };
    z.Az = function(a) {
        a.ek.zm && a.ek.zm(33)
    };
    var Bz = function(a) {
        if (a.ka.wa) {
            var b = a.ek;
            a.ek.element = a.rU || a.m();
            var c = a.ka.m();
            a.ka.V() || (c.style.visibility = "hidden", z.Q(c, !0)); ! a.Wt && a.ek.ao && a.ek.ao() & 32 && (a.Wt = z.Ig(c));
            b.ha(c, b.Ze ^ 1, a.OH, a.Wt);
            a.ka.V() || (z.Q(c, !1), c.style.visibility = "visible")
        }
    };
    var Cz = function(a, b, c) {
        var d = a.o();
        c = c ? d.g: d.qa;
        c.call(d, b, "action", a.mo);
        c.call(d, b, "close", a.ly);
        c.call(d, b, "highlight", a.ry);
        c.call(d, b, "unhighlight", a.Ay)
    };
    var Dz = function(a, b) {
        var c = a.o(); (b ? c.g: c.qa).call(c, a.m(), "keydown", a.WP)
    };
    var Ez = function(a, b) {
        var c = a.m(),
        d = z.fj(b, "activedescendant"),
        d = z.Je(b).getElementById(d) || b;
        if (!d.id) {
            var f = z.Wg.ba();
            d.id = z.Xg(f)
        }
        xo(c, d);
        z.dj(c, "owns", d.id)
    };
    var Fz = function(a, b) {
        this.bi = a instanceof z.Ge ? a: new z.Ge(a, b)
    };
    var Gz = function(a, b) {
        Fz.call(this, a, b)
    };
    z.Hz = function(a, b) {
        z.rz.call(this, a, b);
        this.dn = !0;
        this.Oe(!0);
        this.G(!1, !0);
        this.Hf = new z.Rd
    };
    z.Iz = function(a, b, c, d, f) {
        var g = a.V();
        a.aH() && a.yW ? a.hide() : (a.Sf = f || null, a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c: 4, g || (a.m().style.visibility = "hidden"), z.Q(a.m(), !0), b.ha(a.m(), c, d), g || (a.m().style.visibility = "visible"), a.xb( - 1), a.G(!0)))
    };
    var Jz = function(a, b) {
        for (var c = a.Hf.ld(), d = 0; d < c.length; d++) {
            var f = a.Hf.get(c[d]);
            if (f.h == b.currentTarget) {
                a.$J(f, b.clientX, b.clientY);
                b.preventDefault();
                b.stopPropagation();
                break
            }
        }
    };
    var Kz = function() {
        this.Fw = []
    };
    var Lz = function(a, b, c) {
        var d = b.K().B("SPAN");
        d.className = "goog-submenu-arrow";
        Mz(b, d);
        a.S(c).appendChild(d)
    };
    var Mz = function(a, b) {
        a.qd() ? (z.ij(b, "goog-submenu-arrow-rtl"), z.nf(b, a.Yq ? "◄": "►")) : (z.kj(b, "goog-submenu-arrow-rtl"), z.nf(b, a.Yq ? "►": "◄"))
    };
    var Nz = function(a, b, c, d) {
        z.mz.call(this, a, b, c, d || Kz.ba())
    };
    var Oz = function(a) {
        a.Yd && z.wd(a.Yd);
        a.qB && z.wd(a.qB)
    };
    var Pz = function(a) {
        z.ch(a.getParent(), 
        function(a) {
            a != this && "function" == typeof a.Ng && (a.Ng(), Oz(a))
        },
        a)
    };
    var Qz = function(a, b) { ! b && a.Ya() && a.Ya().xb( - 1);
        a.dispatchEvent(zo(64, b));
        var c = a.Ya();
        b != a.Nz && z.vo(a.m(), "goog-submenu-open", b);
        if (b != c.V() && (b && (c.wa || c.render(), c.xb( - 1)), c.G(b), b)) {
            var c = new z.dz(a.m(), a.Yq ? 6: 4, a.CR),
            d = a.Ya(),
            f = d.m();
            d.V() || (f.style.visibility = "hidden", z.Q(f, !0));
            c.ha(f, a.Yq ? 4: 6);
            d.V() || (z.Q(f, !1), f.style.visibility = "visible")
        }
        a.Nz = b
    };
    var Rz = function(a, b, c) {
        var d = a.o(); (c ? d.g: d.qa).call(d, b, "enter", a.RS)
    };
    z.Sz = function() {
        z.G.call(this);
        this.sa = null;
        this.Xa = 0;
        this.Bz = [];
        this.qt = [];
        this.RB = "最多输入 20 字";
        this.gx = "最多输入 256 字"
    };
    var Tz = function(a, b, c) {
        a.sa || (a.sa = new z.V(null), z.Mj(a.sa, null), a.sa.Oa(b || ""), c && (a.sa.S().innerHTML = c), a.o().g(a.sa, "afterhide", a.ei))
    };
    var Uz = function(a, b, c) {
        var d = z.L("zh-fav-list-item-place-holder");
        d && z.Q(d, !1);
        a.IA = b[5] ? "": z.O("span", "zm-fav-list-item-lock", [z.O("i", "icon icon-lock")]);
        d = z.O("span", "zm-favo-list-item-title");
        z.nf(d, b[1]);
        d = z.O("a", {
            "class": "zg-r5px zm-favo-list-item-link",
            href: "javascript:;"
        },
        [a.IA, d, z.O("span", {
            className: "meta zg-gray",
            innerHTML: '\x3cspan class\x3d"num"\x3e' + b[3] + '\x3c/span\x3e 条答案 \x3cspan class\x3d"zg-bull"\x3e•\x3c/span\x3e ' + b[4] + " 人关注"
        })]);
        a.IA && a.IA.setAttribute("data-tip", "s$t$私密收藏夹");
        d.setAttribute("data-lid", b[0]);
        z.A(a.qt, b[0]) && z.W.add(d, "zm-favo-list-item-link-active");
        b = z.N("zm-favo-list-item-link", a.hh);
        c && b ? z.bf(d, b) : a.hh.appendChild(d)
    };
    var Vz = function(a, b) {
        if (a.Xa !== b && a.hh) {
            var c = z.Ro("zm-favo-list-item-link", a.hh);
            z.y(c, 
            function(a) {
                z.W.remove(a, "zm-favo-list-item-link-active")
            },
            a)
        }
        a.Xa = b
    };
    z.Wz = function(a, b, c, d) {
        var f = z.L("zh-fav-head-title"),
        g = z.L("zh-fav-head-description-source");
        b = b || (f ? z.pf(f) : "");
        c = c || (g ? z.pf(g) : "");
        a.xE = d || z.lh;
        Xz(a);
        a.Yb();
        Yz(a, 1);
        z.Q(a.CB, !1);
        a.vr.innerHTML = "取消";
        a.Tv.innerHTML = "保存";
        a.sa.Oa("编辑收藏夹");
        a.wi.value = so(b);
        a.ak.value = so(c);
        a.xE[1] ? (z.Q(a.eJ, !1), z.Q(a.cJ, !1), z.Q(a.mH, !1)) : (z.Q(a.eJ, !0), z.Q(a.cJ, !0), z.Q(a.mH, !0), a.eH.setAttribute("checked", !0));
        a.cR = Zz(a);
        a.sa.G(!0);
        a.am = !0
    };
    var $z = function(a) {
        var b = z.Ro("zm-favo-list-item-link", a.hh);
        z.y(b, 
        function(a) {
            var b = a.getAttribute("data-lid");
            z.W.remove(a, "zm-favo-list-item-link-active");
            z.A(this.qt, +b) && z.W.add(a, "zm-favo-list-item-link-active")
        },
        a)
    };
    var Xz = function(a) {
        a.qO ? $z(a) : a.B()
    };
    var Yz = function(a, b) {
        var c = !!b;
        a.sa.Oa(0 === b ? "添加到收藏夹": "创建新收藏夹");
        z.Q(a.VR, !c);
        z.Q(a.Sx, c); (0, window.$)(a.vx).text("").hide();
        new z.wk(a.wi, a.RB);
        new z.wk(a.ak, a.gx);
        if (1 === b)(0, window.$)(a.Sx).on("change.FavoDiag", "input, textarea, select", 
        function() {
            a.Rg()
        });
        else(0, window.$)(a.Sx).off("change.FavoDiag"),
        a.ei()
    };
    var Zz = function(a) {
        var b = new z.Gr,
        c = z.tr(a.wi.value),
        d = z.Na(a.ak.value === a.gx ? "": a.ak.value);
        d || (d = -1);
        b.add("title", c);
        b.add("description", d);
        b.add("is_public", a.fH.checked ? 1: 0);
        return b
    };
    var aA = function(a) {
        a.sa.G(!1);
        a.dispatchEvent(bA);
        z.Y.tb({
            type: "ga_click_collect_answer",
            data: {
                count: (0, window.$)(".zm-favo-list-item-link-active", a.hh).length
            }
        })
    };
    var cA = function(a, b, c, d) { (0, window.$)(c).addClass("btn-pending").text(d ? "保存中": "创建中");
        a.o().ya(b, "complete", 
        function() { (0, window.$)(c).removeClass("btn-pending").text(d ? "保存": "确认创建")
        })
    };
    var dA = function(a, b, c) {
        c = c || (b ? "保存失败，请重试": "创建失败，请重试"); (0, window.$)(a).text(c).show()
    };
    var eA = function(a, b) {
        z.yi({
            category: "collect",
            action: a,
            label: -1 < window.location.pathname.indexOf("collection") ? "collections_sidebar_create_collection": "collect_answer_box",
            attributes: b
        })
    };
    z.fA = function(a, b, c) {
        z.mz.call(this, a, b, c);
        this.Mp(!0)
    };
    var gA = function(a) {
        z.R.call(this);
        this.Qh = a;
        this.jl = null;
        this.AA = []
    };
    var hA = function(a, b) {
        z.Db(iA, 
        function(a, d) {
            var f = new z.fA(a);
            f.Ea(d);
            f.Lc(d === this.jl);
            this.AA.push(f);
            b.Fa(f)
        },
        a)
    };
    var jA = function(a) {
        z.X.confirm("你确定要删除自己的答案吗？", "答案内容不会被永久删除，你还可以撤消本次删除操作。", 
        function(b) {
            b && window.$.post("/answer/remove", {
                aid: a.Qh.kb
            }).then(function() {
                return a.Qh.Lj()
            })
        })
    };
    var kA = function(a) {
        a.AA.forEach(function(b) {
            b.Lc(b.Y() === a.jl)
        })
    };
    var lA = function(a, b) {
        window.$.post("/answer/comment_permission", {
            answer_id: a.Qh.kb,
            permission: b
        }).then(function(c) {
            c && !c.r && (a.jl = b, kA(a), a.dispatchEvent(mA))
        })
    };
    var nA = function(a) {
        var b = null;
        try {
            b = a.cssRules || a.rules
        } catch(c) {
            if (15 == c.code) throw c.styleSheet = a,
            c;
        }
        return b
    };
    var oA = function(a) {
        var b = [];
        a = a || window.document.styleSheets;
        var c = z.ka(void 0) ? void 0: !1;
        if (a.imports && a.imports.length) for (var d = 0, f = a.imports.length; d < f; d++) z.wb(b, oA(a.imports[d]));
        else if (a.length) for (d = 0, f = a.length; d < f; d++) z.wb(b, oA(a[d]));
        else {
            var g = nA(a);
            if (g && g.length) for (var d = 0, f = g.length, h; d < f; d++) h = g[d],
            h.styleSheet && z.wb(b, oA(h.styleSheet))
        } ! (a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
        return b
    };
    var pA = function() {
        this.Nn = "";
        this.wh = []
    };
    var qA = function(a, b, c) {
        var d = [],
        f;
        for (f in b) {
            var g = b[f];
            g && d.push(f, ":", g, c ? " !important": "", ";")
        }
        a.Nn = d.join("")
    };
    var rA = function(a) {
        this.cw = {};
        if (a) {
            var b = [];
            a = a.split(/\s+/gm);
            for (var c = 0; c < a.length; c++) if (a[c]) {
                var d = new sA(a[c]);
                b.push(d)
            }
            this.Bi = b
        }
    };
    var sA = function(a) {
        var b = tA[a];
        if (b) return b;
        for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {},
        d = 0; d < b.length; d++) {
            var f = b[d];
            "." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
        }
        this.PG = a;
        this.hS = c;
        this.nK = {};
        tA[a] = this
    };
    var uA = function(a, b) {
        var c = b.uid,
        d = a.nK[c];
        if ("undefined" != typeof d) return d;
        var f = a.hS,
        d = f.tagName,
        g = f.className,
        f = f.id,
        h = !0;
        d && "*" != d && d != b.nodeName ? h = !1: f && f != b.id ? h = !1: g && !b.BN[g] && (h = !1);
        return a.nK[c] = h
    };
    var vA = function(a) {
        var b = z.ua(a),
        c = wA[b];
        if (c) return c;
        c = [];
        do {
            var d = {
                id: a.id,
                nodeName: a.nodeName
            };
            d.uid = z.ua(d);
            var f = {};
            if (a.className) for (var g = z.gj(a), h = 0; h < g.length; h++) f[g[h]] = 1;
            d.BN = f;
            c.unshift(d)
        }
        while (a = a.parentNode);
        this.gI = c;
        this.uid = z.ua(this);
        wA[b] = this
    };
    z.xA = function() {
        z.G.call(this);
        this.ec = this.Rq()
    };
    z.yA = function(a) {
        return a.F && a.F.jb
    };
    var zA = function(a) {
        return a.F && z.Gc ? (a = a.F.jb.Va(), a.scrollTo.bind(a, a.scrollX, a.scrollY)) : function() {}
    };
    var AA = function(a, b, c, d, f) {
        this.oF = a;
        this.xB = b;
        this.or = c;
        this.rF = d;
        this.Fx = f || {}
    };
    var BA = function(a, b) {
        this.iX = a;
        this.tE = b
    };
    var CA = function(a, b, c, d) {
        var f = [];
        a.or && a.xB && f.push("\x3c!DOCTYPE HTML\x3e");
        f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
        a.or && f.push("height:", a.rF ? "100%": "auto");
        f.push('"\x3e');
        f.push("\x3chead\x3e\x3cstyle\x3e");
        c && c.tE && f.push(c.tE);
        z.B && a.xB && f.push(" img {-moz-force-broken-image-icon: 1;}");
        f.push("\x3c/style\x3e\x3c/head\x3e");
        f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
        z.DA && f.push("contentEditable ");
        f.push('class\x3d"editable ');
        f.push('" id\x3d"', 
        a.oF, '" style\x3d"min-width:0;');
        z.B && a.or && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.xB ? "100%": "auto"), a.rF ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
        z.vg && f.push(";outline:hidden");
        for (var g in a.Fx) f.push(";" + g + ":" + a.Fx[g]);
        f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
        a = f.join("");
        d = d.contentDocument || d.contentWindow.document;
        d.open();
        d.write(a);
        d.close()
    };
    var EA = function(a, b) {
        z.G.call(this);
        this.Zg = this.id = a;
        this.jb = null;
        this.Rb = {};
        this.Sj = {};
        for (var c in z.FA) this.Sj[c] = [];
        this.ll = "";
        this.Ek = {};
        this.Ek[GA] = 1;
        this.Ek[z.HA] = 1;
        this.Nr = new Nq(this.QE, IA, this);
        this.Lr = {};
        for (var d in JA) this.Lr[JA[d]] = 0;
        z.B && (this.ye = new Nq(this.jo, KA, this));
        this.fc = new z.xd(this);
        this.jX = [];
        this.dm = z.LA;
        this.lm = z.J(b || window.document);
        this.Jc = this.lm.m(this.id);
        this.RO = MA;
        this.Wk = this.lm.Va()
    };
    var NA = function(a) {
        var b = !(a.ctrlKey || a.metaKey) && a.keyCode in OA;
        return (a.ctrlKey || a.metaKey) && a.keyCode in PA || b
    };
    var QA = function(a, b) {
        a.dm = 2;
        a.Ha = b;
        a.jb = z.J(b);
        b.setAttribute("g_editable", "true");
        z.cj(b, "textbox")
    };
    var RA = function(a, b) {
        if (9 == b.keyCode && !a.dispatchEvent({
            type: "beforetab",
            shiftKey: b.shiftKey,
            altKey: b.altKey,
            ctrlKey: b.ctrlKey
        }) || z.B && b.metaKey && !z.E(29) && (37 == b.keyCode || 39 == b.keyCode)) return b.preventDefault(),
        !1;
        var c; (c = b.charCode) || (c = NA(b) ? !0: !(!z.B || b.ctrlKey || b.metaKey || z.B && !b.charCode));
        a.hy = c;
        a.hy && a.fi();
        return ! 0
    };
    var SA = function(a, b, c) {
        var d = {};
        a = a.lu(8, b || "", d);
        z.sg(c, d);
        z.Mu(c, a)
    };
    var TA = function(a, b) { ! UA(a, "selectionchange") && (VA[b.keyCode] || (b.ctrlKey || b.metaKey) && WA[b.keyCode]) && (a.dispatchEvent("beforeselectionchange"), a.NJ.start())
    };
    var XA = function(a, b) {
        if (!b.altKey) {
            var c = z.Uc ? b.metaKey: b.ctrlKey;
            if (c || YA[b.keyCode]) {
                var d = b.charCode || b.keyCode;
                17 != d && (d = String.fromCharCode(d).toLowerCase(), z.Uc && z.B && "`" == d && " " == b.gc.key && (d = " "), a.Co(5, b, d, c) && b.preventDefault())
            }
        }
    };
    var ZA = function(a) {
        var b;
        return a.nc() && (b = a.jb) ? (a = b.Va()) && a.frameElement: null
    };
    z.$A = function(a) {
        return (a = a.jb && a.jb.Va()) && z.wu(a)
    };
    z.aB = function(a, b, c) {
        if (!UA(a, "selectionchange")) {
            var d = z.$A(a),
            d = d && d.Qb();
            a.tf = !!d && z.mf(a.m(), d);
            a.dispatchEvent("cvc");
            a.dispatchEvent({
                type: "selectionchange",
                SY: b && b.type
            });
            a.Co(4, b, c)
        }
    };
    z.bB = function(a, b, c) {
        b && (a.ye && Oq(a.ye), a.Ek[GA] = 1);
        c && (z.cB(a), a.Ek[z.HA] = 1)
    };
    var dB = function(a, b, c) { ! b && a.ye && Oq(a.ye);
        a.Ek[GA] = 0;
        a.Ek[z.HA] = 0;
        b && a.jo();
        c && a.QE()
    };
    var UA = function(a, b) {
        return !! a.Ek[b] || a.Lr[b] && 500 >= (0, z.I)() - a.Lr[b]
    };
    z.cB = function(a) {
        a.ye && Oq(a.ye);
        Oq(a.Nr)
    };
    var eB = function(a) {
        z.uf(a.target, "A") && a.preventDefault()
    };
    z.fB = function(a) {
        var b = a.m();
        if (b) {
            var c = z.Eu(b);
            b == c ? z.Au(b, 0).select() : z.Ru(c, !0);
            z.aB(a)
        }
    };
    var gB = function(a) {
        if (!z.ka(a.lz) && (a.lz = !1, z.C && a.nc())) {
            for (var b = a.lm.Va(); b != b.parent;) try {
                b = b.parent
            } catch(c) {
                break
            }
            b = b.location;
            a.lz = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
        }
        return a.lz
    };
    z.hB = function(a, b) {
        EA.call(this, a, b)
    };
    var iB = function(a) {
        if (a.Vp ? 0: a.Vp = !0) {
            var b = ZA(a),
            c = a.m(),
            d = !1;
            if (b && c) {
                var f,
                g = b.parentNode,
                h = g.offsetWidth; (0, window.parseInt)(Go(b, "width"), 10) != h && (f = z.Qg(c), b.style.width = h + "px", c.style.width = h - f.left - f.right + "px", d = !0);
                g = g.offsetHeight;
                a.Io() && (0, window.parseInt)(Go(b, "height"), 10) != g && (f || (f = z.Qg(c)), b.style.height = g + "px", c.style.height = g - f.top - f.bottom + "px", d = !0)
            }
            a.Vp = !1;
            d && a.dispatchEvent("ifrsz")
        }
    };
    var jB = function(a) {
        a.m() && (iB(a), a.Io() || a.uB())
    };
    z.kB = function(a, b) {
        var c = a.split("!");
        this.type = c[0] + "!";
        this.namespace = c[1];
        this.zc = new lB(b)
    };
    var lB = function(a) {
        this.category = a.category;
        this.action = a.action;
        this.label = a.label;
        this.value = a.value
    };
    var mB = function() {
        z.G.call(this)
    };
    z.nB = function() {
        z.G.call(this)
    };
    var oB = function(a, b, c) {
        window.$.post(a, b).done(function(a) {
            if (a.r) z.X.message(a.msg);
            else {
                var b = a.msg; (b = b && b.redirect) ? window.location.href = b: (z.X.message("操作成功！"), c && c(a))
            }
        })
    };
    var pB = function(a, b) {
        var c = window.$.extend({
            action: "get_member_info",
            reason: b.value
        },
        a.EO);
        return window.$.post("/manage", c).then(function(a) {
            return z.Ka("用户已被警告 %s 次，禁言 %s 次", a.warn_num, a.ban_num)
        })
    };
    z.qB = function(a) {
        a = void 0 === a ? {}: a;
        "post" === a.type && (a.type = "article");
        this.type = a.type;
        this.id = a.id;
        this.Su = a.Su;
        this.submit = z.Kq(this.submit.bind(this), !0);
        this.render = z.Kq(this.render.bind(this), !0)
    };
    var rB = function(a) {
        if (a) {
            var b = z.X({
                title: "举报成功",
                content: '\x3cp\x3e您的举报正在等待人工审核，我们会在 24 小时内审核完成\x3cbr\x3e处理完成后会「私信」通知您\x3cbr\x3e您也可以进入 \x3ca href\x3d"/community/report"\x3e社区服务中心\x3c/a\x3e 查看实时处理进度\x3c/p\x3e\x3cp style\x3d"margin-top: 1em"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox" name\x3d"neverRemind"\x3e不再提醒\x3c/label\x3e\x3c/p\x3e',
                modal: !0,
                ha: !0,
                buttons: {
                    yes: "知道了"
                }
            });
            b.g(z.qk, 
            function() {
                b.ii().querySelector("[name\x3dneverRemind]").checked && window.$.post("/community/report/noti", {
                    cancel: !0
                })
            })
        } else {
            var c = 
            z.X({
                title: "举报成功",
                content: "您的举报正在等待人工审核，我们会在 24 小时内审核完成",
                modal: !0,
                buttons: {}
            }); (0, window.setTimeout)(function() {
                return c.G(!1)
            },
            4E3)
        }
    };
    var sB = function(a) {
        z.R.call(this);
        z.Mb(this.J = {},
        this.defaults, a || {});
        this.an = new z.Rd;
        this.ve = null
    };
    var tB = function(a, b) {
        var c = a.J,
        d = new z.yx(c.trigger, !1, null, b);
        d.Tp = c.VV;
        d.qo = c.MQ;
        d.xh(a.gj);
        z.F(d, "trigger", 
        function(a) {
            d.setPosition(new z.fx(a.anchor, 1))
        });
        z.F(d, "beforeshow", 
        function(a) {
            this.ve = a.target.anchor;
            this.render()
        },
        !1, a);
        d.className = c.qM;
        a.RQ = d
    };
    var uB = function(a, b) {
        var c = a.J.KR,
        d = z.ff(a.gj),
        f = z.qb(d, 
        function(a) {
            return a.getAttribute("data-action") === b
        });
        if (!f || z.W.has(f, c)) return ! 1;
        z.y(d, 
        function(a) {
            z.W.remove(a, c)
        });
        z.W.add(f, c);
        return ! 0
    };
    var vB = function(a, b, c, d) {
        a.an.set(b, {
            name: b,
            R: c,
            Vh: d || z.p
        })
    };
    z.wB = function(a) {
        z.R.call(this);
        z.Mb(this.J = {},
        this.defaults, a || {})
    };
    var xB = function(a) {
        var b = a.J,
        c = a.h;
        yB(c);
        b = zB(c, b.sG);
        b.length && (a.dispatchEvent("willScrape"), window.$.when.apply(window.$, b).always(function() {
            a.dispatchEvent("didScrape")
        }))
    };
    var AB = function(a, b, c) {
        for (; a && a !== b;) {
            if (c(a)) return a;
            a = a.parentNode
        }
    };
    var BB = function(a, b) {
        return AB(a, b, 
        function(a) {
            return CB(a) || "CODE" === a.nodeName || "PRE" === a.nodeName
        })
    };
    var CB = function(a) {
        return "A" === a.nodeName
    };
    var yB = function(a) {
        var b = z.Ko(a, 
        function(b) {
            return 3 === b.nodeType && !BB(b, a)
        }),
        c,
        d = z.wu(),
        f = d && z.Ft(d);
        z.y(b, 
        function(a) {
            var b = a.nodeValue,
            d = DB(b);
            d !== b && (b = z.Xe(d), f === a && (c = b.lastChild), z.Qo(b, a))
        });
        c && z.Ru(c)
    };
    var zB = function(a, b) {
        var c = z.mb(a.getElementsByTagName("A"), 
        function(a) {
            var b = a.getAttribute("href");
            if (b = !(!b || "#" === b) && !a.getAttribute("data-editable") && z.A(EB, a.protocol)) b = z.pf(a),
            z.Ja(a.href, b) ? a = void 0: (a.setAttribute("data-editable", !0), a.setAttribute("data-title", b), a = !0),
            b = !a;
            return b
        });
        return z.nb(c, 
        function(c) {
            return FB(c.href).done(function(f) {
                GB(a, c, f, b)
            })
        })
    };
    var GB = function(a, b, c, d) {
        if (c && a.contains(b)) {
            d = d || {};
            var f = function(a, b, c) {
                var d = z.wu();
                if (d) {
                    var f = d.aa(),
                    r = d.va(),
                    w = d.la(),
                    H = d.Ma();
                    z.mf(b, f) && (f = a, r = 0);
                    z.mf(b, w) && (w = a, H = 0);
                    c(function() {
                        f === a && w === a ? z.Ru(a) : z.hu(f, r, w, H).select()
                    })
                } else c(z.p)
            };
            a = {
                link: function(a, b) {
                    a.setAttribute("data-editable", !0);
                    b.title === a.href ? a.setAttribute("data-title", HB(a.hostname)) : (a.setAttribute("data-title", b.title), f(a, a, 
                    function(c) {
                        z.nf(a, b.title);
                        c()
                    }))
                },
                image: function(a, b) {
                    var c = window.document.createElement("img");
                    c.src = b.src;
                    c.setAttribute("data-rawwidth", b.width);
                    c.setAttribute("data-rawheight", b.height);
                    f(c, a, 
                    function(b) {
                        z.Qo(c, a);
                        b()
                    })
                }
            }; (d = d[c.type] || a[c.type]) && d(b, c)
        }
    };
    var HB = function(a) {
        return a.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(a) ? -2: -3).join(".").replace(/^www\./, "") + " 的页面"
    };
    var DB = function(a) {
        return a.replace(IB, 
        function(a) {
            z.Ja(a, "http") || (a = "http://" + a);
            return a.link(a)
        })
    };
    var JB = function(a) {
        var b = new sB({});
        vB(b, "link", "链接", 
        function(a) {
            z.nf(a, a.href)
        });
        vB(b, "text", "文本", 
        function(a) {
            z.nf(a, a.getAttribute("data-title"))
        });
        b.w(a);
        var c = b.ay();
        z.ix(c, new z.qg(2, 0, 0, 0));
        z.vx(c, new z.qg(2, 0, 0, 0));
        var d = b.o();
        d.g(c, "beforeshow", 
        function(a) {
            a = a.target.anchor;
            var c = z.pf(a);
            c === a.href ? uB(b, "link") : (c !== a.getAttribute("data-title") && a.setAttribute("data-title", c), uB(b, "text"))
        }).g(c, "beforehide", 
        function(b) {
            if ((b = b.target) && a.contains(b) && CB(b)) return ! 1
        });
        var f;
        d.g(c, "show", 
        function(a) {
            f = 
            a.target.anchor;
            z.W.add(f, "hover")
        }).g(c, "hide", 
        function() {
            f && (z.W.remove(f, "hover"), f = null)
        });
        return b
    };
    z.KB = function(a, b, c) {
        z.R.call(this);
        this.id = a;
        this.type = b;
        this.Ha = null;
        this.Tg = this.Zt = !1;
        this.kc = "写下你的评论…";
        this.placeholder = '\x3cp style\x3d"color:#999"\x3e' + this.kc + "\x3c/p\x3e";
        this.$j = "";
        this.Ka = -1;
        this.Ez = window.$.Deferred().resolve();
        this.FA = this.tt = null;
        this.YD = "zm-comment-box";
        this.Rd = null;
        a = LB[b];
        if (!a) throw Error("API not found");
        this.Hg = window.$.extend({},
        LB._default_, a);
        this.kj = "";
        z.Mb(this.J = {},
        this.defaults, c || {})
    };
    var MB = function(a) {
        return z.Kq(a, !0, 
        function() {
            return this.kj
        })
    };
    var NB = function(a, b, c) {
        if (!z.kf(a) || "TEXTAREA" === a.nodeName) return function() {};
        var d = new z.wB({
            sG: {
                image: z.p
            }
        });
        d.w(a);
        b = (new z.wh).add("type", b + "_comment").add("resource_id", c);
        var f = new tv(a, {
            Zm: {
                source: "/people/autocomplete?" + b.toString()
            },
            qk: z.N("zu-main") || window.document.body
        });
        new mv(a, {
            SA: Dv
        });
        return function() {
            d.H();
            f.H()
        }
    };
    z.OB = function(a, b, c) {
        var d = z.N(a.YD, b);
        c && (a.Rd = c);
        d ? a.w(d) : (a.Zt = !0, a.render(b))
    };
    var PB = function(a) {
        z.Db({
            hD: ".load-more",
            Bn: ".zm-comment-list",
            eE: ".zm-comment-form",
            Ha: ".zm-comment-editable"
        },
        function(a, c) {
            this[c] = (0, window.$)(a, this.h)[0]
        },
        a)
    };
    var QB = function(a) {
        a.Ha && a.Ha.setAttribute("aria-label", a.kc);
        if (z.Um) {
            var b = a.Ha;
            b.setAttribute("contentEditable", !0);
            var c = a.rj = {
                m: function() {
                    return b
                },
                El: function() {
                    return Lr(b) ? "": b.innerHTML
                },
                Pd: function(a, c) {
                    b.innerHTML = c
                },
                Yf: function() {
                    z.Qu(b)
                }
            };
            z.Bc(a, NB(c.m(), a.type, a.id))
        } else RB(a);
        a.o().g(a.Ha, ["change", "keyup"], 
        function(a) {
            27 !== a.keyCode && (z.Iu(this.Ha) ? this.$j = "": this.$j = this.Ua())
        }).g(a.rj.m(), "focus", 
        function() {
            this.na({
                action: "click_add_[type]_comment_box"
            })
        });
        SB(a)
    };
    var RB = function(a) {
        var b = z.O("textarea", {
            placeholder: a.kc,
            "class": "zm-comment-textarea"
        });
        z.Qo(b, a.Ha);
        new z.Tr(b);
        a.Ha = b;
        a.rj = {
            m: function() {
                return b
            },
            El: function() {
                return b.value
            },
            Pd: function() {
                b.value = "";
                b.style.height = z.Bg(22, !0)
            },
            Yf: function() {
                b.focus()
            }
        }
    };
    var TB = function(a) {
        var b = a.rj,
        c = b.m();
        if (b.El() !== a.placeholder) {
            b.Pd(!1, a.placeholder);
            var d = ["click", "focus", "keydown"],
            f = function() {
                b.Pd(!1, this.$j || "");
                this.Ha.lastChild ? z.Ru(this.Ha.lastChild) : b.Yf();
                z.md(c, d, f, !1, this)
            };
            z.F(c, d, f, !1, a);
            var g;
            window.getSelection ? (g = window.getSelection(), g.anchorNode && z.mf(a.Ha, g.anchorNode) && g.removeAllRanges()) : window.document.selection && a.Ha.blur()
        }
    };
    var UB = function(a) {
        a.focus();
        a = z.zu(a);
        a.collapse();
        a.select()
    };
    var VB = function(a) {
        var b; (b = z.N("zm-comment-reply-hack")) ? (b = z.Xe(z.Lo(b)), z.W.Wv(b, "zm-comment-reply-hack", "zm-comment-reply-hacked"), z.cf(b, a)) : (b = "", z.T.Fb() && (b = '\x3cimg class\x3d"avatar" src\x3d"' + z.T.de("is") + '"\x3e'), b = z.Xe('\x3cdiv class\x3d"zm-comment-form expanded"\x3e\x3cdiv class\x3d"zm-comment-editable-wrap"\x3e' + b + '\x3cdiv class\x3d"zm-comment-editable" aria-label\x3d"写下你的回复"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-submit zg-right zg-btn-blue"\x3e评论\x3c/a\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-close zm-command-cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), 
        a.appendChild(b));
        return b
    };
    var WB = function(a, b) {
        return z.qb(XB(a), 
        function(a) {
            return a.getAttribute("data-id") === b
        })
    };
    var XB = function(a) {
        return (0, window.$)(a.Bn).children(".zm-item-comment").get()
    };
    var YB = function(a) {
        a.o().g(a.h, "click", a.Qa).g(a.Ha, "keydown", a.cT).g(z.Dp, "anon_change", a.Ij).g(a.rj.m(), ["click", "focus"], z.Ba(a.Ju, !0)).g(a.rj.m(), "focus", z.Ba(a.Pi, "add_comment_start"));
        a.Ka = Number(a.h.getAttribute("data-count")); (0, window.$)(a.h).on("focusin focusout", "." + a.J.uf, 
        function(a) { (0, window.$)(this).toggleClass("focusin", "focusin" === a.type)
        }); ! z.Vj && a.hD && (a.FA = pr().then(window.$.proxy(a.BH, a)))
    };
    var ZB = function(a) {
        0 < a.lb() ? (a.$j = a.Ua(), a.Ju(!1), TB(a)) : a.Rd ? a.collapse() : a.Ju();
        a.ei()
    };
    var $B = function(a) {
        if (a.Rd) {
            var b = (0, window.$)(a.Rd);
            a.$(a.rD).show().css("left", b.position().left + b.width() / 2)
        }
    };
    var aC = function(a) {
        if ("pending" !== a.Ez.state()) {
            a.Hb();
            a.h.innerHTML = a.En();
            a.expand();
            var b = a.Hg.Dj(a.id, a.J.ZR).done((0, z.q)(a.UU, a));
            return a.Ez = b
        }
    };
    var SB = function(a) {
        z.T.Fb() ? z.T.ue || bC(a, '\x3cdiv class\x3d"activate-mask-tip-comment"\x3e' + (z.T.Pn ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。": "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:;"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : bC(a, '\x3cdiv class\x3d"signin-mask-tip-comment"\x3e\x3c/div\x3e', null)
    };
    var bC = function(a, b, c) {
        b = (0, window.$)(b);
        var d = (0, window.$)(c);
        c ? ((0, window.$)(".zm-command, .zm-comment-info", a.h).hide(), (0, window.$)(a.Ha).hide().after(d).after(b)) : b.insertAfter(a.Ha);
        a = (0, z.q)(MB(z.p), a);
        b.on("click", a);
        d.on("click", a)
    };
    var cC = function(a) {
        PB(a);
        QB(a);
        TB(a);
        YB(a);
        dC(a);
        $B(a)
    };
    var dC = function(a) {
        var b = a.J,
        c = !a.lb();
        z.W.enable(a.h, b.px, c);
        c && a.Ha && b.autofocus && a.Un();
        a.dispatchEvent("change")
    };
    var eC = function(a, b, c) {
        if (!a.qm || "pending" !== a.qm.state()) {
            var d;
            z.ta(b) && (d = b.$U, b = b.content);
            b = z.Ma(b);
            var f = new z.Rd;
            f.set(a.type + "_id", a.id);
            f.set("content", b);
            d && f.set("reply", d);
            b = a.Hg.add(Tn(f));
            b.done(window.$.proxy(a.kP, a)).done(c);
            a.qm = b;
            a.$j = a.Ua();
            a.Pi("add_comment_submit")
        }
    };
    var fC = function(a, b) {
        var c = z.Io(b, a.J.uf); (new z.nB).open(b, {
            id: c.getAttribute("data-id"),
            type: "comment"
        },
        (0, z.q)(function() {
            z.P(c); --this.Ka;
            dC(this)
        },
        a))
    };
    var gC = function(a, b) {
        var c = z.Io(b, a.J.uf),
        d = c.getAttribute("data-id"),
        f = "你确定要删除这条评论吗？",
        g = (0, window.$)(".zm-item-link-avatar", c).prop("href");
        g && (f += '\x3cp class\x3d"js-block" style\x3d"margin-top:.2em;color:#999;visibility:hidden"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox"\x3e同时将此人屏蔽\x3c/label\x3e\x3c/p\x3e', window.$.get(g + "/block", 
        function(a) {
            a.r || a.msg || (0, window.$)(".js-block", h.m()).css("visibility", "visible")
        }));
        var h = z.X.confirm("删除评论", f, 
        function(a) {
            a && (a = (0, window.$)(":checkbox", h.m()).prop("checked"), 
            hC(this, d, Number(a), z.Ba(z.P, c)))
        },
        a)
    };
    var iC = function(a, b, c) {
        a.Hg.remove(b).done((0, z.q)(function() {
            z.sa(c) && c(); --this.Ka;
            dC(this)
        },
        a))
    };
    var hC = function(a, b, c, d) {
        a.Hg.cN(b, c).done((0, z.q)(function() {
            z.sa(d) && d(); --this.Ka;
            dC(this)
        },
        a))
    };
    var jC = function(a, b) {
        return a && (b.length ? jC(a[b.shift()], b) : a)
    };
    var kC = function(a, b) {
        z.R.call(this);
        this.kb = a;
        this.entryType = b;
        this.Xj = !1;
        this.yD = !0
    };
    var lC = function(a) {
        z.T.Fb() && 0 === mC(a) && (0, window.setTimeout)(function() {
            return a.Un()
        })
    };
    var nC = function(a) {
        if (!a.Al && !z.wm) {
            var b = z.Io(a.h, "zm-item-meta");
            if (b) {
                var c = z.N("zm-meta-panel", b);
                c && (a.Al = new jv(null, b), a.Al.tag = "comment", a.Al.w(c))
            }
        }
    };
    var oC = function(a, b) {
        a.Rd = b;
        a.Hv = (0, window.$)(b);
        a.dU = z.pf(a.Rd);
        a.Hv.on("click", 
        function() {
            lC(a)
        })
    };
    var pC = function(a) {
        a.Xj && (0, window.$)(".icon-spike", a.h).css("left", a.Hv.position().left + a.Hv.width() / 2).removeClass("hidden")
    };
    var qC = function(a) {
        if (a.Rd) if (a.Xj) qr(a.Rd, "收起评论");
        else {
            var b = mC(a),
            c = void 0,
            c = z.qa(b) ? 0 < b ? b + " 条评论": "添加评论": a.dU;
            qr(a.Rd, c)
        }
    };
    var mC = function(a) {
        var b;
        if (b = a.dr) a = a.dr.store.getState(),
        b = jC(a, ["commentBox", "meta", "totalCountPure"]);
        return b
    };
    var rC = function(a, b, c) {
        var d = a.dr;
        a = d.store;
        var f = d.actions,
        d = d.ActionTypes;
        /[A-Z]/.test(b[0]) ? a.dispatch({
            type: d[b],
            payload: c
        }) : a.dispatch(f[b](c))
    };
    var sC = function(a, b) {
        z.R.call(this);
        window.$.extend(this.options = {},
        tC, b || {});
        this.state = {
            bm: !1,
            $s: !1,
            bt: !0,
            Do: !1,
            zA: !1
        };
        var c = new z.gl(this.update, 17, this);
        z.Ac(this, c);
        this.rK = (0, z.q)(c.fire, c)
    };
    var uC = function(a) {
        var b = (0, window.$)(a.h),
        c = (0, window.$)("\x3cdiv\x3e");
        window.$.each("display position top right bottom left float margin".split(" "), 
        function(a, f) {
            c.css(f, b.css(f))
        });
        c.css({
            visibility: "hidden",
            width: b.outerWidth(),
            height: b.outerHeight()
        }).insertBefore(b);
        a.kc = c.get(0);
        b.addClass(a.options.Gg);
        a.ha();
        a.options.CI.call(a)
    };
    var vC = function(a) {
        if (!window.Modernizr.csstransitions) return uC(a);
        var b = (0, window.$)(a.h);
        a.state.Do = !0;
        uC(a);
        b.css({
            transition: "none",
            transform: "translateY(" + wC(a) + "px)"
        }); (0, window.setTimeout)(function() {
            b.css({
                transition: "",
                transform: ""
            }).onTransitionEnd(function() {
                a.onAnimationEnd()
            },
            200)
        })
    };
    var xC = function(a) {
        if (!window.Modernizr.csstransitions) return a.restore();
        var b = (0, window.$)(a.h);
        a.state.Do = !0;
        b.css("transform", "translateY(" + wC(a) + "px)").onTransitionEnd(function() {
            b.css({
                transition: "none",
                transform: ""
            });
            a.restore();
            a.onAnimationEnd()
        },
        200)
    };
    var wC = function(a) {
        var b = (0, window.$)(a.h).outerHeight();
        return null === a.options.bottom ? -(b + a.options.top) : b + a.options.bottom
    };
    z.yC = function(a) {
        z.R.call(this);
        this.entryType = a;
        this.pb = this.vj = !1;
        this.Ts = window.setTimeout.bind(window, this.Ts.bind(this))
    };
    var zC = function(a, b) {
        return z.Kq(a, b, 
        function() {
            return this.Wx()
        })
    };
    var AC = function(a) {
        a.g("trackRequested", 
        function(b) {
            b.label = a.QF();
            b.value = (0, window.$)(a.h).index() + 1;
            z.yi(b)
        });
        a.vj && z.Hn(a.m(), 
        function() {
            return a.IH()
        })
    };
    var BC = function(a) {
        a = (0, window.$)(a);
        var b = {}; (0, window.$)("[itemprop]", a).each(function() {
            var a = (0, window.$)(this);
            a.is("link, a") ? b[a.attr("itemprop")] = a.prop("href") : b[a.attr("itemprop")] = a.attr("content")
        }); (0, window.$)("meta[name]", a).each(function() {
            var a = (0, window.$)(this);
            b[a.attr("name")] = a.attr("content")
        });
        return b
    };
    var CC = function(a) {
        var b = BC(a.h);
        a.kb = b[a.entryType + "-id"];
        a.wj = b[a.entryType + "-url-token"];
        a.Sg = b
    };
    var DC = function(a) {
        if (a.wB) return a.wB;
        var b = (0, window.$)('meta[itemprop\x3d"ZReactor"]', a.h);
        b.length || (b = (0, window.$)(a.h).closest(".feed-item").find('meta[itemprop\x3d"ZReactor"]'));
        b = b.data("meta");
        a.wB = b && b.source_type || "";
        return a.wB
    };
    var EC = function(a) {
        if (a.uz) return a.uz;
        var b = sw();
        a.uz = ({
            home: "feed",
            search: "search_result_question_answer_tab",
            explore_daily_hot: "daily_trending",
            explore_monthly_hot: "monthly_trending",
            people: "people_profile_activities",
            people_answers: "people_profile_answers",
            explore_recommendations: "editor_recommendations"
        } [b] || b) + ({
            collection: "_feed",
            roundtable: "_feed",
            answer: "_more"
        } [b] || "");
        return a.uz
    };
    var FC = function(a) {
        return {
            promotion_answer: "promote",
            member_voteup_answer: "someone_vote_up",
            topic_acknowledged_answer: "from_topic",
            roundtable_add_answer: "from_roundtable",
            member_answer_question: "someone_add",
            member_create_article: "someone_add",
            member_voteup_article: "someone_vote_up"
        } [DC(a)]
    };
    var GC = function(a) {
        return (0, window.$)(a.rM, a.m())[0]
    };
    z.HC = function(a) {
        return (0, window.$)('\x3cdiv class\x3d"copyright-notification"\x3e\x3cdiv class\x3d"user-image-container"\x3e\x3cimg class\x3d"user-image" src\x3d"' + (a || "") + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip right noty-tooltip"\x3e\x3cdiv class\x3d"tooltip-arrow arrow"\x3e \x3c/div\x3e\x3cdiv class\x3d"tooltip-inner inner"\x3e 如需转载，请通过私信或评论联系我 \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var IC = function(a, b) {
        var c = -1,
        d = -1,
        f = JC();
        a.on("mousedown", 
        function(a) {
            3 === a.which && (c = a.pageX, d = a.pageY)
        });
        a.on("copy", 
        function(g) {
            var h = z.wu(),
            k = Math.floor(22 * Math.random() + 44);
            if (h && h.Id() && (0, z.ab)(h.Id()).length > k) {
                g.preventDefault(); (0, window.$)(".user-image", f).attr("src", b);
                g = h.fy();
                var h = h.Xx(),
                k = z.Xn(window).y,
                m = z.Pe(window).height,
                n = $o(k + 45 + 15, Math.min(g.y, h.y) + k, k + m - 15),
                r = $o(k + 45 + 15, Math.max(g.y, h.y) + k, k + m - 15);
                z.sm.Ab ? (m = (z.Pe(window).width - 265) / 2, g = z.Ml ? h.y > g.y ? h.y + k + 10: g.y + k - 10: -1 !== 
                d ? d + 3: n + (r - n) / 2 - 15) : (m = -1 !== c ? c + 3: a.offset().left + a.width() / 2 - 15, g = -1 !== d ? d + 3: n + (r - n) / 2 - 15);
                f.css({
                    position: "absolute",
                    left: m,
                    top: g
                }).finish().fadeIn(300).delay(2E3).fadeOut(300)
            }
            d = c = -1
        })
    };
    var KC = function(a, b, c) {
        function d(a, b, c) {
            a = ["作者：" + b, "链接：" + a, "来源：知乎", "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"];
            b = ["", ""];
            return a = c ? a.concat(b) : b.concat(a)
        }
        function f(a, b, c, f) {
            b = d(b, c, f).join("\x3cbr /\x3e");
            return "\x3cdiv\x3e" + (f ? b + a: a + b) + "\x3c/div\x3e"
        }
        function g(a, b, c, f) {
            b = d(b, c, f).join("\n");
            return f ? b + a: a + b
        }
        function h() {
            var a = "";
            window.getSelection ? a = window.getSelection().toString() : window.document.selection && "Control" !== window.document.selection.type && (a = window.document.selection.createRange().text);
            return a
        }
        function k(a) {
            var d = z.wu(),
            k = d && (0, z.ab)(d.Id());
            if (k && !(128 > k.length)) {
                k = 512 <= k.length;
                if ("object" === typeof a.originalEvent.clipboardData && (a.originalEvent.clipboardData.setData("text/html", f(d.cg(), b, c, k)), a.originalEvent.clipboardData.setData("text/plain", g(h(), b, c, k)), 0 < a.originalEvent.clipboardData.getData("text/plain").length)) {
                    a.preventDefault();
                    return
                }
                if (window.getSelection) {
                    a = d.cg();
                    var w = (0, window.$)(f(a, b, c, k)).css({
                        position: "fixed",
                        left: "-9999px"
                    }).appendTo("body");
                    window.getSelection().selectAllChildren(w.get(0));
                    (0, window.setTimeout)(function() {
                        d.select();
                        w.remove()
                    },
                    200)
                }
            }
        }
        a && b && c && (z.Ja(b, "http") || (b = window.location.protocol + "//" + window.location.host + b), a.on("copy", k))
    };
    z.LC = function(a) {
        var b = {
            appkey: "3063806388"
        };
        a && (b.title = a);
        window.open("http://service.weibo.com/share/share.php?" + window.$.param(b), "_blank", "width\x3d615,height\x3d505") || (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
    };
    z.MC = function(a, b, c, d) {
        b = new NC(b, c, d);
        b.w(a);
        return b
    };
    var NC = function(a, b, c) {
        z.R.call(this);
        this.Xb = a;
        this.NK = b;
        this.VJ = c
    };
    var OC = function(a) {
        var b = a.Xo = new z.rz,
        c = [{
            label: z.Xe('\x3cspan class\x3d"ico z-ico-weibo-share"\x3e\x3c/span\x3e新浪微博'),
            value: 0
        },
        {
            label: z.Xe('\x3cspan class\x3d"ico z-ico-wechat-share"\x3e\x3c/span\x3e微信扫一扫\x3cimg class\x3d"qrcode-image js-qrcode-image"\x3e'),
            value: 1
        }];
        "answer" !== a.Xb && "post" !== a.Xb || c.push({
            label: z.Xe('\x3cspan class\x3d"ico z-ico-daily-share"\x3e\x3c/span\x3e读读日报'),
            value: 2
        });
        window.$.each(c, 
        function(a, c) {
            var g = new z.mz(c.label, c.value);
            b.Fa(g)
        });
        z.bh(b, 1).Wa(!1);
        c = new z.yz("share", 
        b);
        c.xk = !0;
        c.Ob = z.Gl;
        c.w(a.m());
        z.Ac(c, a);
        b.g("action", a.jP.bind(a)); (0, window.$)(b.m()).addClass("share-menu")
    };
    var PC = function(a, b, c, d) {
        Nz.call(this, a, b, c, d)
    };
    z.QC = function(a) {
        z.R.call(this);
        z.Mb(this.options = {},
        RC, a || {});
        this.content = "";
        this.ed = this.Re = this.Sk = null
    };
    var SC = function(a) {
        a.getParent() ? a.dispatchEvent("expandRequest") : a.expand()
    };
    var TC = function(a, b) {
        return window.$.post("/node/PromotionVoteBarV2", {
            method: b,
            params: {
                post_id: a
            }
        })
    };
    var UC = function(a, b, c) {
        z.R.call(this);
        this.kb = a;
        this.entryType = b || "answer";
        this.di = null;
        this.J = window.$.extend({},
        this.defaults, c || {})
    };
    var VC = function(a, b, c) {
        var d = +a.Cq.text(),
        f = 0; (0, window.isNaN)(d) || (c === z.WC.Dg ? f = 1: b === z.WC.Dg && (f = -1), a.Cq.text(d + f))
    };
    var XC = function(a) {
        var b = a.N,
        c = a.J,
        d = b === z.WC.Dg,
        b = b === z.WC.Tk,
        f = d ? "取消赞同": "赞同",
        g = b ? "取消反对": "反对，不会显示你的姓名";
        a.Jv.toggleClass(c.fu, d).find(".label").text(f).end().attr("aria-pressed", d).attr("title", f);
        a.wv.toggleClass(c.fu, b).find(".label").text(g).end().attr("aria-pressed", b).attr("title", g)
    };
    var YC = function(a, b) {
        z.R.call(this);
        this.kb = a;
        this.entryType = b;
        this.qm = null;
        this.Hg = "post" === b ? ZC: $C
    };
    z.aD = function(a) {
        a.qm && "pending" === a.qm.state() || (a.qm = a.Hg.SF(a.kb).done((0, z.q)(a.Cp, a)), (0, window.$)(".js-voteCount", a.ob).text(a.lb()))
    };
    var bD = function(a) {
        z.R.call(this);
        this.ZK = "votebar-mobile";
        this.ix = "votebar-mobile-dialog";
        this.iv = a;
        this.aL = "votebar-" + (["post", "promotion"].includes(a.entryType) ? "post": "answer");
        this.$K = z.O("span", "_votebar-holder")
    };
    var cD = function(a) {
        var b = a.iv;
        z.Qo(a.$K, b.m());
        z.jj(b.m(), [a.ZK, a.aL]);
        a.o().g(b, "action", 
        function() {
            this.Ia && (0, window.setTimeout)((0, z.q)(function() {
                this.Ia.G(!1)
            },
            this), 150)
        })
    };
    z.dD = function() {
        z.yC.call(this, "answer");
        this.Yl = window.setTimeout.bind(window, this.Yl.bind(this));
        this.Uj = window.setTimeout.bind(window, this.Uj.bind(this))
    };
    var eD = function(a) {
        var b = (0, window.$)(".js-administer", GC(a))[0];
        if (b) {
            a.yM = b;
            fD = 0;
            var c = new z.Hz;
            a.L(c);
            c.attach(b, 5);
            var d = a.ti ? new z.mz("取消折叠") : new PC("折叠");
            d.Ea("collapse");
            var f = function(a, b) {
                var c = new z.mz(b + 1 + " " + a.label);
                c.Ea(a.value);
                d.Fa(c)
            };
            a.ti || gD("answer", "collapse").then(function(a) {
                z.y(a, f);
                z.W.add(d.Ya().m(), "manage-menu")
            });
            b = new z.mz("删除");
            b.Ea("delete");
            c.Fa(d);
            c.Fa(b);
            c.render(a.h);
            z.W.add(c.m(), "manage-menu");
            return c
        }
    };
    var hD = function(a, b) {
        a.o().g(b, "action", 
        function(a) {
            var b = a.target;
            a = b.Y();
            var b = b.m(),
            f = new z.wh;
            "collapse" === a ? (f.add("answer_id", this.Xa).add("action", "collapse2").add("collapse", this.ti ? "cancel": "done"), b.setAttribute("data-op", this.ti ? "uncollapse-answer": "collapse-answer"), b.setAttribute("data-action", "/manage?" + f.toString()), iD(this, b)) : "delete" === a ? (f.add("answer_id", this.Xa).add("action", "remove_answer2"), b.setAttribute("data-op", "remove-answer"), b.setAttribute("data-action", "/manage?" + f.toString()), 
            iD(this, b)) : z.qa(a) && (b = new z.wh, b.add("answer_id", this.Xa).add("action", "collapse2").add("collapse", this.ti ? "cancel": "done").add("reason", a), oB("/manage", b.toString(), (0, z.q)(this.Lj, this)))
        });
        a.o().g(b, "show", 
        function() {
            z.W.add(GC(this), "zm-item-meta-has-menu")
        }).g(b, "hide", 
        function(a) {
            a.currentTarget === a.target && z.W.remove(GC(this), "zm-item-meta-has-menu")
        })
    };
    var iD = function(a, b) { (new z.nB).open(b, {
            id: a.Xa,
            type: "answer"
        },
        (0, z.q)(a.Lj, a))
    };
    var jD = function(a) {
        var b = a.Sg.disableCopy,
        c = (0, window.$)(".entry-content, .zm-item-rich-text", a.h);
        b ? IC(c, a.Sg.disableCopyAvatar) : (a = c.data("entryUrl"), b = c.data("authorName"), KC(c, a, b))
    };
    z.kD = function() {
        z.yC.call(this, "post")
    };
    var lD = function(a) {
        var b = (0, window.$)(".Tipjar-entry", a.h);
        a.o().g(a.kK, "expand", 
        function() {
            b.show()
        });
        a.o().g(a.kK, "collapse", 
        function() {
            b.hide()
        });
        b.on("click", ".Tipjar-entryButton", 
        function() {
            z.U("tipjar", "click_tipjar", "topstory")
        })
    };
    var mD = function(a) {
        a = (0, window.$)(".post-content", a.h);
        var b = a.data("entryUrl"),
        c = a.data("authorName");
        KC(a, b, c)
    };
    z.nD = function() {
        z.yC.call(this, "question")
    };
    z.oD = function(a) {
        a = a.getAttribute("data-type");
        return new({
            a: z.dD,
            Answer: z.dD,
            p: z.kD,
            Post: z.kD,
            q: z.nD,
            Question: z.nD
        } [a] || z.R)
    };
    z.pD = function(a, b, c) {
        z.mz.call(this, a, b, c);
        this.Li(!0)
    };
    z.qD = function(a, b, c) {
        z.R.call(this);
        this.offset = this.Nu = 0;
        this.PV = c;
        this.zO = a;
        this.url = b || window.location.href;
        this.fh = "zm-item";
        this.params = {}
    };
    z.rD = function(a, b) {
        b ? a.Qk.html('\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e正在加载').prop("disabled", !0) : a.Qk.html("更多").prop("disabled", !1)
    };
    var sD = function(a) {
        var b = a.gb();
        a.offset = a.Xz ? a.Xz(b) : b.length;
        a.Fs ? (b = a.Fs(), z.Q(a.Md, b)) : a.Md && ("-1" !== a.Qk.attr("data-next") && b ? a.Qk.removeClass("hidden").show() : a.Qk.hide())
    };
    z.tD = function(a) {
        a.dispatchEvent({
            data: {
                Fo: a.Fo,
                fC: a.fC
            },
            type: "afterload"
        })
    };
    var uD = function(a) {
        var b = a.gb(),
        c;
        if (a.PV) if (a.Md && (c = a.Md.getAttribute("data-next")), c) a.Nu = c;
        else if (b = z.kb(b)) a.Nu = a.xA(b)
    };
    var vD = function(a, b) {
        z.y(b, 
        function(a) {
            var b = this.Nt(a);
            this.dispatchEvent({
                data: {
                    item: a,
                    LR: b
                },
                type: "itemcreated"
            })
        },
        a)
    };
    z.wD = function(a) {
        z.G.call(this);
        this.ma = null;
        this.h = a;
        a = z.C || z.Gc || z.D && !z.E("531") && "TEXTAREA" == a.tagName;
        this.T = new z.xd(this);
        this.T.g(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    var xD = function(a) {
        null != a.ma && (z.wd(a.ma), a.ma = null)
    };
    var yD = function(a) {
        a = new z.Pc(a.gc);
        a.type = "input";
        return a
    };
    var zD = function(a, b, c, d) {
        z.G.call(this);
        this.gi = a;
        this.$E = b;
        this.At = c;
        this.oO = d || AD;
        a.removeAttribute("maxlength");
        this.dz = new z.wD(a);
        z.F(this.dz, "input", this.bA, !1, this);
        this.hl()
    };
    z.BD = function(a) {
        z.G.call(this);
        this.sa = null;
        this.pa = a;
        this.wu = 0;
        this.fJ = ""
    };
    var CD = function(a, b) {
        var c = z.Ro("zm-menu-item-link", a.MI);
        z.y(c, 
        function(a, c) {
            var g = !z.A(b, c);
            z.Q(a, g)
        },
        a)
    };
    var DD = function() {
        z.G.call(this)
    };
    z.ED = function(a) {
        function b() {
            var b;
            FD || (FD = new DD, FD.init());
            b = FD;
            b.dj = a;
            b.pM = a.id.split("-")[1];
            b.show()
        }
        function c(b) {
            if (!a.getAttribute("data-disabled")) {
                var c;
                GD || (GD = new z.BD, GD.init());
                c = GD;
                c.dj = a;
                c.pa = a.id.split("-")[1];
                "redirect" === b ? c.show() : (z.tp("/question/unredirect", null, "POST", "qid\x3d" + c.pa + "\x26rqid\x3d" + c.wu), c.dj.innerHTML = "重定向已撤销", c.dj.setAttribute("data-disabled", 1))
            }
        }
        function d() {
            function b() {
                var f = d.value,
                g = a.getAttribute("id").split("-")[1],
                f = (new z.wh).add("revision", g).add("reason", 
                f),
                r = new z.Z(!0);
                r.on("success", 
                function() {
                    var a = z.Sn(r);
                    c.G(!1);
                    if (!a) return z.X.message("网络异常");
                    if (a.r) return z.X.message(a.msg);
                    a.msg ? window.location.href = a.msg: window.location.reload()
                });
                r.ajax("/revert", f.toString())
            }
            var c = z.X.confirm("撤销", '\x3cdiv class\x3d"zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input content" title\x3d"请输入撤销原因" placeholder\x3d"请输入撤销原因"\x3e\x3c/textarea\x3e\x3c/div\x3e', 
            function(a) {
                if (a) return b(),
                !1
            }),
            d = z.N("content", c.S());
            new z.wk(d);
            new z.Tr(d);
            new zD(d, 
            null, 200)
        }
        var f = a && a.name;
        if (f) switch (f) {
        case "adminflag":
            b();
            break;
        case "redirect":
        case "cancel_redirect":
            c(f);
            break;
        case "revert":
            d()
        }
    };
    z.HD = function(a) { (0, window.$)(a).on("click", 'a[name\x3d"revert"]', 
        function() {
            z.ED(this)
        })
    };
    z.ID = function(a) {
        var b = {
            mq: !1,
            VY: !1
        };
        return function(c) {
            if (!1 === c) return ! 1;
            c = {};
            z.Mb(c, b, a || {});
            if (c.mq && !z.T.Hs) return z.X.alert('\x3ca href\x3d"/question/23261456" target\x3d"_blank"\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'),
            !1;
            if (c.wp) {
                if (!z.S.uO) return z.X.alert('\x3cp\x3e创建较久或已有较多讨论的问题限制公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'),
                !1;
                if (z.S.Ho) return z.X.alert('\x3cp\x3e创建较久或编辑次数较多的问题锁定公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'),
                !1
            }
        }
    };
    var JD = function(a) {
        return window.$.post("/settings/account/unlock_with_digits", a)
    };
    var KD = function(a) {
        return window.$.post("/settings/account/unlock_with_password", a)
    };
    z.LD = function() {
        return new window.Promise(function(a) {
            function b(a, b) {
                return !! z.qb(a, 
                function(a) {
                    return a.challenge_type === b
                })
            }
            function c(a) {
                var b = {
                    value: a.challenge_type
                };
                switch (b.value) {
                case "password":
                    b.label = "使用知乎密码验证";
                    break;
                case "phone_digits":
                    b.label = z.Ka("使用手机 %s 验证", a.hint);
                    break;
                case "email_digits":
                    b.label = z.Ka("使用邮箱 %s 验证", a.hint)
                }
                return b
            }
            if (z.bj.get("unlock_ticket")) return a();
            var d = z.X.async({
                title: "验证身份",
                modal: !0,
                dK: "正在进行安全验证，请稍等",
                className: "settings-account-unlock-dialog",
                onload: function(b, 
                c) {
                    function d(a) {
                        var b = (0, window.$)(".panel", k),
                        c = a ? b.filter(function() {
                            return (0, window.$)(this).data("match") === a
                        }) : b.first();
                        b.not(c.show()).hide()
                    }
                    var k = (0, window.$)("form", b),
                    m = (0, window.$)(".submit", k),
                    n = (0, window.$)(".error-label-container", k),
                    r = (0, window.$)(".hint-label-container", k),
                    w = (0, window.$)("select", k).change(function() {
                        d(this.value);
                        n.text("");
                        r.text("")
                    }); (0, window.$)(".js-send-digits", k).each(function() {
                        var a = (0, window.$)(this),
                        b = a.closest(".panel"); (0, window.$)("input", b);
                        var d = 
                        b.data("match"),
                        a = z.uk(a, "email_digits" === d ? 10: 60, 
                        function(a) {
                            return a ? "%s 秒后即可重发": "重发验证码"
                        },
                        function() {
                            r.text("");
                            window.$.post("/settings/account/send_unlock_digits", {
                                type: d
                            }).then(function() {
                                r.text("验证码已发送至你的" + ("email_digits" === d ? "邮箱": "手机"))
                            })
                        });
                        z.Ac(c, a)
                    });
                    var H = k.validate({
                        messages: z.MD,
                        ignore: "input.text:hidden",
                        errorLabelContainer: n,
                        submitHandler: z.vk(m, 
                        function() {
                            var b = "password" === w.val();
                            return (b ? KD: JD)((0, window.$)(":input:visible", k).serialize()).then(function(d) {
                                if (d.success) c.G(!1),
                                a();
                                else if (d = d.payload, d.fields) H.showErrors(d.fields);
                                else if (d.message) {
                                    var f = {};
                                    f[b ? "password": "digits"] = d.message;
                                    H.showErrors(f)
                                }
                            })
                        })
                    });
                    w.change(); (0, window.$)("input.text:visible", k).focus()
                },
                Mw: window.$.get("/settings/account/request_unlock").then(function(f) {
                    if (f.success) return (0, window.setTimeout)(function() {
                        d.G(!1);
                        a()
                    },
                    3E3),
                    '\x3cp class\x3d"z-text-muted"\x3e验证成功\x3c/p\x3e';
                    var g = f.payload;
                    return window.$.get("/node/SettingsRequestUnlockTemplate").then(function(a) {
                        return (0, z.Sv)(a, {
                            canUsePanel: z.Ba(b, 
                            g),
                            each: z.y,
                            options: z.nb(g, c)
                        })
                    })
                })
            })
        })
    };
    z.ND = function(a, b, c) {
        b = void 0 === b ? "success": b;
        c = void 0 === c ? 3E3: c;
        if (a) {
            var d = (0, window.$)("#zh-message-container");
            d.length || (d = (0, window.$)('\x3cdiv id\x3d"zh-message-container" style\x3d"display:none"\x3e\x3c/div\x3e').prependTo(".zu-main-content-inner"));
            d.text(a).attr("class", {
                success: "zg-info-message",
                error: "zg-error-message"
            } [b]).show().delay(c).fadeOut()
        }
    };
    z.OD = function(a, b) {
        z.na(a) && z.ND(a[1], a[0] ? "error": "success", b)
    };
    z.PD = function(a) {
        z.G.call(this);
        this.kd = a
    };
    z.QD = function(a) {
        this.sl = a;
        this.Wi = new z.Cj("", !0, this.sl.kd);
        this.wn = new z.Pj(this.sl.kd);
        this.vn = {};
        this.Oh("tr-dialog")
    };
    z.RD = function(a, b) {
        var c = z.u("OK");
        a.wn.set("ok", b || c, !0);
        a.vn.ok = (0, z.q)(a.sl.iQ, a.sl)
    };
    z.SD = function(a, b) {
        var c = z.Lm,
        d = z.u("Cancel");
        a.wn.set(c, b || d, !1, !0);
        a.vn[c] = (0, z.q)(a.sl.io, a.sl);
        return a
    };
    z.TD = function(a) {
        a.wn.dh() && (z.RD(a), z.SD(a));
        z.Mj(a.Wi, a.wn);
        var b = a.vn;
        a.vn = null;
        a.Wi.g(z.Oj, 
        function(a) {
            if (b[a.key]) return b[a.key](a)
        });
        a.Wi.Qp(!0);
        var c = a.Wi;
        a.Wi = null;
        return c
    };
    z.UD = function(a) {
        z.xA.call(this);
        this.LN = a;
        this.xJ = function() {}
    };
    z.VD = function(a) {
        var b = a.F,
        c = a.GJ;
        c && c.restore();
        b.focus();
        a.GJ = null
    };
    var WD = function(a) {
        a.Ia && !a.jz && (a.jz = !0, a.Ia.H(), a.Ia = null, a.jz = !1)
    };
    var XD = function(a) {
        z.PD.call(this, a);
        this.T = new z.xd(this);
        this.vq = z.sm.uq + "/upload";
        this.vN = !z.C
    };
    var YD = function(a) {
        z.Lc.call(this, "ok");
        var b = a[0];
        this.Xl = b;
        this.OI = b.replace("_m.jpg", "_r.jpg");
        this.jJ = a[1];
        this.iJ = a[2]
    };
    var ZD = function(a, b) {
        function c(a) {
            a.eq(b).addClass("selected").siblings().removeClass("selected")
        }
        var d = (0, window.$)(".tab-nav", a.IB),
        f = (0, window.$)(".tab-content", a.form);
        z.Q(a.ef, !1);
        var g = f.eq(b);
        g.find("input").val("");
        c(d);
        c(f);
        g.find(":text").focus()
    };
    var $D = function(a, b) {
        z.Q(a.lh, !1);
        a.ef.innerHTML = b;
        z.Q(a.ef, !0)
    };
    z.aE = function() {
        z.UD.call(this, "image");
        this.T = new z.xd(this)
    };
    var bE = function(a, b, c, d) {
        z.Bt.call(this, a, b, c, null, d)
    };
    z.cE = function() {};
    var dE = function(a, b, c, d) {
        for (var f = [], g = 0, h = 0; g < c.height; g++) {
            for (var k = [], m = 0; m < c.width; m++) {
                var n = b && b[h++];
                k.push(eE(a, n, d))
            }
            f.push(fE(a, k, d))
        }
        return a.Qw(f, d)
    };
    var fE = function(a, b, c) {
        a = c.B("TR", a.U() + "-row", b);
        z.cj(a, "row");
        return a
    };
    var eE = function(a, b, c) {
        a = c.B("TD", {
            "class": a.U() + "-cell",
            id: a.U() + "-cell-" + gE++
        },
        b);
        z.cj(a, "gridcell");
        z.dj(a, "selected", !1);
        if (!z.pf(a) && !wo(a)) {
            var d;
            b = new bE(a);
            for (c = ""; ! c && (d = Yo(b));) 1 == d.nodeType && (c = wo(d) || d.title); (d = c) && z.dj(a, "label", d)
        }
        return a
    };
    var hE = function(a, b, c) {
        for (b = b.m(); c && 1 == c.nodeType && c != b;) {
            if ("TD" == c.tagName && z.hj(c, a.U() + "-cell")) return c.firstChild;
            c = c.parentNode
        }
        return null
    };
    var iE = function(a) {
        z.G.call(this);
        this.Le = [];
        jE(this, a)
    };
    var jE = function(a, b) {
        b && (z.y(b, 
        function(a) {
            this.wm(a, !1)
        },
        a), z.wb(a.Le, b))
    };
    z.kE = function(a, b, c) {
        Wp.call(this, a, b || z.cE.ba(), c);
        this.fj &= -89;
        this.Jn = new lE;
        this.Jn.Db(this);
        this.wz = -1
    };
    z.mE = function(a, b) {
        if (a.m()) throw Error("Component already rendered");
        a.wc = z.qa(b) ? new z.He(b, void 0) : b;
        nE(a)
    };
    var oE = function(a) {
        var b = a.Ua();
        return b && b[a.Ta]
    };
    var pE = function(a, b, c) {
        if (a.m()) {
            var d = a.Ua();
            if (d && 0 <= b && b < d.length) {
                var f;
                f = (f = oE(a)) ? f.parentNode: null;
                a.Jn.m() != f && (a.Jn.h = f);
                f = a.Jn;
                f.Nc(c); !! (f.N & 2) == c && (b = d[b]) && (b = b ? b.parentNode: null, z.vo(b, a.M.U() + "-cell-hover", c), c ? z.dj(a.h, "activedescendant", b.id) : b.id == z.fj(a.h, "activedescendant") && a.h.removeAttribute("aria-activedescendant"))
            }
        }
    };
    var nE = function(a) {
        var b = a.Ua();
        if (b) if (a.wc && a.wc.width) {
            if (b = Math.ceil(b.length / a.wc.width), !z.qa(a.wc.height) || a.wc.height < b) a.wc.height = b
        } else b = Math.ceil(Math.sqrt(b.length)),
        a.wc = new z.He(b, b);
        else a.wc = new z.He(0, 0)
    };
    var lE = function() {
        Wp.call(this, null);
        this.Bk |= 2
    };
    z.qE = function() {};
    z.rE = function() {
        this.iw = "toolbar"
    };
    var sE = function() {};
    z.tE = function(a, b, c) {
        z.cq.call(this, a, b || sE.ba(), c)
    };
    var uE = function() {};
    var vE = function(a, b) {
        return b.B("DIV", "goog-color-menu-button-indicator", a)
    };
    var wE = function(a, b) {
        if (a && a.firstChild) {
            var c;
            if (c = b) c = !!(Zq.test("#" == b.charAt(0) ? b: "#" + b) || ar(b).length || cr && cr[b.toLowerCase()]);
            c = c ? Yq(b).Js: null;
            a.firstChild.style.borderBottomColor = c || (z.C ? "": "transparent")
        }
    };
    var xE = function(a, b, c) {
        this.yr = a || [];
        z.kE.call(this, null, b || z.cE.ba(), c);
        this.yr = this.yr;
        this.It = this.ft = null;
        this.ia(yE(this))
    };
    var yE = function(a) {
        return z.nb(a.yr, 
        function(a, c) {
            var d = this.K().B("DIV", {
                "class": this.M.U() + "-colorswatch",
                style: "background-color:" + a
            }),
            f;
            this.ft && this.ft[c] ? f = this.ft[c] : "#" == a.charAt(0) ? (f = $q(a), f = "RGB (" + [(0, window.parseInt)(f.substr(1, 2), 16), (0, window.parseInt)(f.substr(3, 2), 16), (0, window.parseInt)(f.substr(5, 2), 16)].join(", ") + ")") : f = a;
            d.title = f;
            return d
        },
        a)
    };
    var zE = function(a) {
        if (a) try {
            return Yq(a).Js
        } catch(b) {}
        return null
    };
    var AE = function(a, b, c, d) {
        z.yz.call(this, a, b, c || uE.ba(), d)
    };
    var BE = function(a) {
        var b = new z.rz(a);
        z.Db(CE, 
        function(c) {
            c = new xE(c, null, a);
            z.mE(c, 8);
            b.L(c, !0)
        });
        return b
    };
    var DE = function() {};
    var EE = function() {};
    var FE = function(a, b, c, d) {
        AE.call(this, a, b, c || EE.ba(), d)
    };
    var GE = function(a, b, c, d) {
        z.yz.call(this, a, b, c || DE.ba(), d)
    };
    var HE = function(a, b, c, d, f) {
        z.yz.call(this, a, b, c, d, f || new pz("listbox"));
        this.cx = this.Ua();
        this.cz = null;
        this.Gu("listbox")
    };
    var IE = function(a, b) {
        a.cx = b;
        JE(a)
    };
    var KE = function(a, b) {
        a.oa = new iE;
        b && z.ch(b, 
        function(a) {
            LE(a);
            this.oa.Fa(a)
        },
        a);
        ME(a)
    };
    var ME = function(a) {
        a.oa && a.o().g(a.oa, "select", a.Mj)
    };
    var JE = function(a) {
        var b = a.kf();
        a.ia(b ? b.Vg() : a.cx);
        var c = a.M.S(a.m());
        c && a.K().isElement(c) && (null == a.cz && (a.cz = wo(c)), b = (b = b ? b.m() : null) ? wo(b) : a.cz, z.dj(c, "label", b), NE(a))
    };
    var NE = function(a) {
        var b = a.M;
        if (b && (b = b.S(a.m()))) {
            var c = a.h;
            b.id || (b.id = z.Xg(z.Wg.ba()));
            z.cj(b, "option");
            z.dj(c, "activedescendant", b.id);
            a.oa && (c = a.oa.gb(), z.dj(b, "setsize", OE(c)), a = a.oa.Gj(), z.dj(b, "posinset", 0 <= a ? OE(z.yb(c, 0, a + 1)) : 0))
        }
    };
    var OE = function(a) {
        return ep(a, 
        function(a) {
            return a instanceof z.mz
        })
    };
    var LE = function(a) {
        a.Gu(a instanceof z.mz ? "option": "separator")
    };
    var PE = function(a, b, c, d) {
        HE.call(this, a, b, c || DE.ba(), d)
    };
    var QE = function(a) {
        var b = a.indexOf(",");
        a: for (a = ( - 1 != b ? a.substring(0, b) : a).toLowerCase(), b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
                a = a.substring(1, a.length - 1);
                break a
            }
        }
        return a
    };
    var RE = function(a, b) {
        z.y(b, 
        function(b) {
            var d = b.value,
            f = QE(d);
            b = new z.pD(b.caption, d, a.K());
            Pn(b, f);
            a.Fa(b);
            b.S().style.fontFamily = d
        })
    };
    var SE = function(a) {
        z.y(TE, 
        function(b) {
            var c = b.value;
            b = new z.pD(b.caption, c, a.K());
            a.Fa(b);
            b = b.S();
            b.style.fontSize = (UE[c] || 10) + "px";
            b.firstChild.style.height = "1.1em"
        })
    };
    var VE = function(a) {
        z.y(WE, 
        function(b) {
            var c = b.caption;
            b = b.Aa;
            var d = a.K(),
            c = new z.pD(d.B("DIV", null, c), b, d);
            Pn(c, b);
            a.Fa(c)
        })
    };
    z.XE = function(a, b, c, d, f, g) {
        c = new z.tE(YE(c, d, g), f, g);
        Pn(c, a);
        c.wd(b);
        return c
    };
    z.ZE = function(a, b, c, d, f, g) {
        a = z.XE(a, b, c, d, f, g);
        a.Tb(16, !0);
        return a
    };
    var $E = function(a, b, c, d, f, g) {
        f = new PE(null, null, f, g);
        d && z.y(d.split(/\s+/), f.Oh, f);
        f.Oh("goog-toolbar-select");
        IE(f, c);
        Pn(f, a);
        f.wd(b);
        return f
    };
    var aF = function(a, b, c, d, f, g) {
        c = new FE(YE(c, d, g), null, f, g);
        Pn(c, a);
        c.wd(b);
        return c
    };
    var YE = function(a, b, c) {
        a && "" != a || !z.B || z.E("1.9a") || (a = " ");
        return (c || z.J()).B("DIV", b ? {
            "class": b
        }: null, a)
    };
    var bF = function(a) {
        var b = "en-us".replace(/_/, "-").toLowerCase(),
        c = [];
        b in cF && (c = cF[b]);
        c.length && RE(a, c);
        RE(a, dF)
    };
    var eF = function(a, b, c, d, f, g) {
        var h = z.XE(a, b, c, d, f, g);
        h.Si = function(a) {
            h.Wa(a)
        };
        return h
    };
    var fF = function(a, b) {
        var c = b;
        try {
            if (z.C) var d = "000000" + c.toString(16),
            f = d.substr(d.length - 6, 6),
            c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
            c != a.Y() && a.Ea(c)
        } catch(g) {}
    };
    z.gF = function(a) {
        z.xA.call(this);
        this.ga = new z.xd(this);
        this.AG = z.O("div", {
            style: "display:none"
        });
        this.h = this.rc = null;
        this.J = {};
        z.Mb(this.J, this.defaults, a || {})
    };
    var hF = function(a) {
        a.dispatchEvent("willEnterFullScreen") && (a.gF || (a.PQ = window.history.length), a.gF = !0, iF(a, "writing"), a.hL = z.wf(z.J((z.t || window).document)), z.Qo(a.AG, a.J.Hk), a.rc.appendChild(a.J.Hk), z.W.add(window.document.body, a.J.Wn), a.Eb = z.N(a.J.BW, a.h), a.Eb.appendChild(a.lq), jF(a), (0, z.ab)(z.pf(a.F.Ha)) || a.F.Yf(), a.dispatchEvent("enterFullScreen"))
    };
    var kF = function(a) { ! z.Wj && a.gF && a.PQ !== window.history.length ? window.history.back() : iF(a, "");
        a.Eb.removeChild(a.lq);
        a.RJ(!1);
        a.h.onscroll = null;
        a.ga.qa(window.document, "keydown", a.kp);
        z.Qo(a.J.Hk, a.AG);
        z.W.remove(window.document.body, a.J.Wn);
        window.scrollTo(a.hL.x, a.hL.y);
        a.dispatchEvent("exitFullScreen")
    };
    var iF = function(a, b) {
        a.ga.qa(window, "hashchange", a.tI);
        window.location.hash = b || ""; (0, window.setTimeout)((0, z.q)(function() {
            this.ga.g(window, "hashchange", this.tI)
        },
        a))
    };
    var jF = function(a) {
        var b = a.h;
        b.scrollTop = 0;
        var c = a.Eb.getBoundingClientRect().top;
        b.onscroll = z.ip((0, z.q)(a.RJ, a), 
        function() {
            return b.scrollTop > c
        });
        a.ga.g(window.document, "keydown", a.kp)
    };
    z.lF = function() {
        this.Px = ["zg-btn-follow", "zg-btn-unfollow"];
        this.Qx = "people"
    };
    z.Wk.prototype.Np = z.Gn(27, 
    function(a) {
        this.kj = a
    });
    z.Yj.prototype.Ug = z.Gn(26, 
    function(a, b) {
        if (!this.h) return null;
        for (var c = b || "A", d = a; null != d && d !== this.h;) {
            if (d.tagName === c) return d;
            d = d.parentNode
        }
        return null
    });
    z.V.prototype.xm = z.Gn(25, 
    function(a) {
        this.Zk = a;
        this.wa && z.Tj(this)
    });
    z.Cj.prototype.Gu = z.Gn(22, 
    function(a) {
        this.tp = a
    });
    z.Cj.prototype.Ua = z.Gn(21, 
    function() {
        return null != this.rc ? z.Gd(this.rc) : ""
    });
    z.pj.prototype.Wa = z.Gn(20, 
    function(a) {
        this.ec = a
    });
    z.pj.prototype.Qg = z.Gn(18, 
    function(a) {
        this.Ti = a
    });
    z.R.prototype.Ah = z.Gn(17, 
    function(a) {
        if (this.wa) throw Error("Component already rendered");
        this.rg = a
    });
    z.R.prototype.qd = z.Gn(16, 
    function() {
        null == this.rg && (this.rg = z.Ng(this.wa ? this.h: this.da.ua().body));
        return this.rg
    });
    z.rg.prototype.Wg = z.Gn(15, 
    function() {
        return new z.He(this.width, this.height)
    });
    z.rg.prototype.gz = z.Gn(14, 
    function(a) {
        var b = Math.max(this.left, a.left),
        c = Math.min(this.left + this.width, a.left + a.width);
        if (b <= c) {
            var d = Math.max(this.top, a.top);
            a = Math.min(this.top + this.height, a.top + a.height);
            if (d <= a) return this.left = b,
            this.top = d,
            this.width = c - b,
            this.height = a - d,
            !0
        }
        return ! 1
    });
    z.Sf.prototype.Sq = z.Gn(13, 
    function(a, b, c) {
        var d = (0, z.I)(),
        f = c ? c: d,
        g = Cn(this.Yr);
        g.$r = 2;
        g.Zr = f;
        g.type = b;
        g.dE = a;
        a = (a = this.CY) && a.isTracing() ? a.totalVarAlloc: -1;
        g.vK = a;
        this.Kw++;
        if (c) {
            c = this.Uf.length;
            for (a = 0; a < c; a++) if (this.Uf[a].Zr > f) {
                z.xb(this.Uf, a, 0, g);
                break
            }
            a == c && this.Uf.push(g)
        } else this.Uf.push(g);
        if (f = g.type) g = this.Ck.get(f),
        g || (g = Cn(this.AB), g.type = f, this.Ck.set(f, g)),
        g.count++;
        this.av += (0, z.I)() - d
    });
    z.Ie.prototype.eg = z.Gn(12, 
    function(a) {
        var b; (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!zn(a) || yn(a)) : En(a)) && z.C ? (a = z.sa(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        },
        a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    });
    z.R.prototype.Bp = z.Gn(11, 
    function(a) {
        for (var b = []; this.Rc && 0 != this.Rc.length;) b.push(this.removeChild(z.bh(this, 0), a));
        return b
    });
    z.Ie.prototype.Dl = z.Gn(10, 
    function(a) {
        return Dn(a || this.La)
    });
    z.Ie.prototype.Qw = z.Gn(9, 
    function(a, b, c) {
        var d = this.La;
        c = !!c;
        for (var f = d.createElement("TABLE"), g = f.appendChild(d.createElement("TBODY")), h = 0; h < a; h++) {
            for (var k = d.createElement("TR"), m = 0; m < b; m++) {
                var n = d.createElement("TD");
                c && z.nf(n, " ");
                k.appendChild(n)
            }
            g.appendChild(k)
        }
        return f
    });
    z.Ie.prototype.$f = z.Gn(8, 
    function(a, b) {
        return z.N(a, b || this.La)
    });
    z.R.prototype.$f = z.Gn(7, 
    function(a) {
        return this.h ? this.da.$f(a, this.h) : null
    });
    z.Rd.prototype.ai = z.Gn(6, 
    function(a) {
        for (var b = 0; b < this.Za.length; b++) {
            var c = this.Za[b];
            if (z.Ud(this.Ib, c) && this.Ib[c] == a) return ! 0
        }
        return ! 1
    });
    z.wh.prototype.ai = z.Gn(5, 
    function(a) {
        var b = this.Wc();
        return z.A(b, a)
    });
    z.Yi.prototype.ai = z.Gn(4, 
    function(a) {
        for (var b = z.Zi(this).values, c = 0; c < b.length; c++) if (b[c] == a) return ! 0;
        return ! 1
    });
    z.Pc.prototype.DF = z.Gn(0, 
    function() {
        return this.gc
    });
    z.x(z.Mn, z.G);
    z.e = z.Mn.prototype;
    z.e.h = null;
    z.e.Zk = !0;
    z.e.uD = null;
    z.e.vD = null;
    z.e.Zj = !1;
    z.e.OV = !1;
    z.e.yz = -1;
    z.e.vz = -1;
    z.e.yG = !1;
    z.e.BO = !0;
    z.e.Xb = "toggle_display";
    z.e.oi = function() {
        return this.Xb
    };
    z.e.m = function() {
        return this.h
    };
    z.e.xh = function(a) {
        Bn(this);
        this.h = a
    };
    z.e.xm = function(a) {
        Bn(this);
        this.Zk = a
    };
    z.e.SJ = function(a, b) {
        this.Hm = a;
        this.Ul = b
    };
    z.e.o = function() {
        return this.ga
    };
    z.e.V = function() {
        return this.Zj
    };
    z.e.aH = function() {
        return this.Zj || 150 > (0, z.I)() - this.vz
    };
    z.e.G = function(a) {
        this.Hm && this.Hm.stop();
        this.Ul && this.Ul.stop();
        a ? this.rB() : this.Vl()
    };
    z.e.ha = z.p;
    z.e.rB = function() {
        if (!this.Zj && this.ep()) {
            if (!this.h) throw Error("Caller must call setElement before trying to show the popup");
            this.ha();
            var a = z.Je(this.h);
            this.yG && this.ga.g(a, "keydown", this.WS, !0);
            if (this.Zk) if (this.ga.g(a, "mousedown", this.rI, !0), z.C) {
                var b;
                try {
                    b = a.activeElement
                } catch(d) {}
                for (; b && "IFRAME" == b.nodeName;) {
                    try {
                        var c = b.contentDocument || b.contentWindow.document
                    } catch(d) {
                        break
                    }
                    a = c;
                    b = a.activeElement
                }
                this.ga.g(a, "mousedown", this.rI, !0);
                this.ga.g(a, "deactivate", this.pI)
            } else this.ga.g(a, 
            "blur", this.pI);
            "toggle_display" == this.Xb ? (this.h.style.visibility = "visible", z.Q(this.h, !0)) : "move_offscreen" == this.Xb && this.ha();
            this.Zj = !0;
            this.yz = (0, z.I)();
            this.vz = -1;
            this.Hm ? (z.ld(this.Hm, "end", this.pk, !1, this), this.Hm.play()) : this.pk()
        }
    };
    z.e.Vl = function(a) {
        if (!this.Zj || !this.dispatchEvent({
            type: "beforehide",
            target: a
        })) return ! 1;
        this.ga && this.ga.removeAll();
        this.Zj = !1;
        this.vz = (0, z.I)();
        this.Ul ? (z.ld(this.Ul, "end", z.Ba(this.mE, a), !1, this), this.Ul.play()) : this.mE(a);
        return ! 0
    };
    z.e.mE = function(a) {
        "toggle_display" == this.Xb ? this.OV ? z.vd(this.zG, 0, this) : this.zG() : "move_offscreen" == this.Xb && (this.h.style.top = "-10000px");
        this.nk(a)
    };
    z.e.zG = function() {
        this.h.style.visibility = "hidden";
        z.Q(this.h, !1)
    };
    z.e.ep = function() {
        return this.dispatchEvent("beforeshow")
    };
    z.e.pk = function() {
        this.dispatchEvent("show")
    };
    z.e.nk = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    z.e.rI = function(a) {
        a = a.target;
        z.mf(this.h, a) || An(this, a) || this.vD && !z.mf(this.vD, a) || 150 > (0, z.I)() - this.yz || this.Vl(a)
    };
    z.e.WS = function(a) {
        27 == a.keyCode && this.Vl(a.target) && (a.preventDefault(), a.stopPropagation())
    };
    z.e.pI = function(a) {
        if (this.BO) {
            var b = z.Je(this.h);
            if ("undefined" != typeof window.document.activeElement) {
                if (a = b.activeElement, !a || z.mf(this.h, a) || "BODY" == a.tagName) return
            } else if (a.target != b) return;
            150 > (0, z.I)() - this.yz || this.Vl()
        }
    };
    z.e.D = function() {
        z.Mn.v.D.call(this);
        this.ga.H();
        z.Cc(this.Hm);
        z.Cc(this.Ul);
        delete this.h;
        delete this.ga;
        delete this.uD
    };
    var eo = /&([^;\s<&]+);?/g,
    oo = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    mF = /[^\d]+$/;
    lo.prototype.serialize = function(a) {
        var b = [];
        mo(this, a, b);
        return b.join("")
    };
    lo.prototype.serializeArray = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", f = 0; f < c; f++) b.push(d),
        d = a[f],
        mo(this, this.ru ? this.ru.call(a, String(f), d) : d, b),
        d = ",";
        b.push("]")
    };
    z.e = Wo.prototype;
    z.e.lb = function() {
        return this.Ib.lb()
    };
    z.e.add = function(a) {
        this.Ib.set(po(a), a)
    };
    z.e.addAll = function(a) {
        a = z.Id(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    z.e.removeAll = function(a) {
        a = z.Id(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    z.e.remove = function(a) {
        return this.Ib.remove(po(a))
    };
    z.e.clear = function() {
        this.Ib.clear()
    };
    z.e.dh = function() {
        return this.Ib.dh()
    };
    z.e.contains = function(a) {
        return this.Ib.Qf(po(a))
    };
    z.e.gz = function(a) {
        var b = new Wo;
        a = z.Id(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    z.e.Wc = function() {
        return this.Ib.Wc()
    };
    z.e.clone = function() {
        return new Wo(this)
    };
    z.e.equals = function(a) {
        return this.lb() == ro(a) && Xo(this, a)
    };
    z.e.gd = function() {
        return this.Ib.gd(!1)
    };
    var zp;
    z.x(z.Z, z.de);
    var nF = /#.*$/,
    xp = {
        "*": "*",
        "text/html": "html",
        "text/plain": "text",
        "application/json": "json",
        "application/javascript": "script",
        "application/x-javascript": "script"
    },
    vp = [];
    z.Z.prototype.tP = function() {
        if (this.RK) {
            var a = yp();
            z.Q(a, !1)
        }
        wp(this)
    };
    z.Z.prototype.ajax = function(a, b, c) {
        a = (0, window.encodeURI)((0, window.decodeURI)(a));
        a = a.replace(nF, "");
        if (!this.ea) {
            if (this.RK) {
                var d = yp();
                z.Q(d, !0)
            }
            c = c || "POST";
            "POST" === c.toUpperCase() && (d = z.bj.get("_xsrf")) && (b = (b ? b + "\x26_xsrf\x3d": "_xsrf\x3d") + d);
            return this.send(a, c, b, this.headers)
        }
    };
    z.x(Ap, z.G);
    Ap.prototype.o = function() {
        return this.of || (this.of = new z.xd(this))
    };
    z.x(z.Cp, z.Lc);
    z.Dp = new Ap;
    z.G.prototype.on = function() {
        z.G.prototype.addEventListener.apply(this, arguments);
        return this
    };
    z.G.prototype.off = function() {
        z.G.prototype.removeEventListener.apply(this, arguments);
        return this
    };
    z.G.prototype.tb = z.G.prototype.dispatchEvent;
    z.x(Ep, z.G);
    Ep.prototype.hc = function() {
        var a = (0, z.q)(function(a) {
            var c = this.zr.section; (c = c && c["home-topstory"]) && (c.content = a)
        },
        this);
        Kp(this).always((0, z.q)(function(b) {
            this.Ab || (b && b.Pm && b.Pm.length && a("这里是根据你关注的话题和人定制的内容精选"), this.J.kk(), Gp(this), Ip(this))
        },
        this));
        this.Ab || Jp()
    };
    z.x(Lp, z.G);
    z.e = Lp.prototype;
    z.e.h = null;
    z.e.dt = null;
    z.e.pz = null;
    z.e.et = null;
    z.e.ie = -1;
    z.e.vi = -1;
    z.e.bw = !1;
    var oF = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    pF = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    qF = z.C || z.Gc || z.D && z.E("525"),
    rF = z.Uc && z.B;
    z.e = Lp.prototype;
    z.e.lf = function(a) {
        if (z.D || z.Gc) if (17 == this.ie && !a.ctrlKey || 18 == this.ie && !a.altKey || z.Uc && 91 == this.ie && !a.metaKey) this.vi = this.ie = -1; - 1 == this.ie && (a.ctrlKey && 17 != a.keyCode ? this.ie = 17: a.altKey && 18 != a.keyCode ? this.ie = 18: a.metaKey && 91 != a.keyCode && (this.ie = 91));
        qF && !to(a.keyCode, this.ie, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.vi = z.mj(a.keyCode), rF && (this.bw = a.altKey))
    };
    z.e.$P = function(a) {
        this.vi = this.ie = -1;
        this.bw = a.altKey
    };
    z.e.handleEvent = function(a) {
        var b = a.gc,
        c,
        d,
        f = b.altKey;
        z.C && "keypress" == a.type ? (c = this.vi, d = 13 != c && 27 != c ? b.keyCode: 0) : (z.D || z.Gc) && "keypress" == a.type ? (c = this.vi, d = 0 <= b.charCode && 63232 > b.charCode && z.fo(c) ? b.charCode: 0) : z.vg && !z.D ? (c = this.vi, d = z.fo(c) ? b.keyCode: 0) : (c = b.keyCode || this.vi, d = b.charCode || 0, rF && (f = this.bw), z.Uc && 63 == d && 224 == c && (c = 191));
        var g = c = z.mj(c),
        h = b.keyIdentifier;
        c ? 63232 <= c && c in oF ? g = oF[c] : 25 == c && a.shiftKey && (g = 9) : h && h in pF && (g = pF[h]);
        a = g == this.ie;
        this.ie = g;
        b = new Mp(g, d, a, b);
        b.altKey = 
        f;
        this.dispatchEvent(b)
    };
    z.e.m = function() {
        return this.h
    };
    z.e.attach = function(a, b) {
        this.et && this.detach();
        this.h = a;
        this.dt = z.F(this.h, "keypress", this, b);
        this.pz = z.F(this.h, "keydown", this.lf, b, this);
        this.et = z.F(this.h, "keyup", this.$P, b, this)
    };
    z.e.detach = function() {
        this.dt && (z.nd(this.dt), z.nd(this.pz), z.nd(this.et), this.et = this.pz = this.dt = null);
        this.h = null;
        this.vi = this.ie = -1
    };
    z.e.D = function() {
        Lp.v.D.call(this);
        this.detach()
    };
    z.x(Mp, z.Pc);
    var sF;
    z.la(Np);
    var tF = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    z.e = Np.prototype;
    z.e.hf = function() {};
    z.e.B = function(a) {
        return a.K().B("DIV", this.Zf(a).join(" "), a.Ua())
    };
    z.e.S = function(a) {
        return a
    };
    z.e.uj = function(a, b, c) {
        if (a = a.m ? a.m() : a) {
            var d = [b];
            z.C && !z.E("7") && (d = Rp(z.gj(a), b), d.push(b)); (c ? z.jj: z.lj)(a, d)
        }
    };
    z.e.Ob = function() {
        return ! 0
    };
    z.e.w = function(a, b) {
        b.id && Pn(a, b.id);
        var c = this.S(b);
        c && c.firstChild ? a.ym(c.firstChild.nextSibling ? z.vb(c.childNodes) : c.firstChild) : a.ym(null);
        var d = 0,
        f = this.U(),
        g = this.U(),
        h = !1,
        k = !1,
        m = !1,
        n = z.vb(z.gj(b));
        z.y(n, 
        function(a) {
            h || a != f ? k || a != g ? d |= this.rs(a) : k = !0: (h = !0, g == f && (k = !0));
            1 == this.rs(a) && En(c) && z.of(c, !1)
        },
        this);
        a.N = d;
        h || (n.push(f), g == f && (k = !0));
        k || n.push(g);
        var r = a.gf;
        r && n.push.apply(n, r);
        if (z.C && !z.E("7")) {
            var w = Rp(n);
            0 < w.length && (n.push.apply(n, w), m = !0)
        }
        if (!h || !k || r || m) b.className = n.join(" ");
        return b
    };
    z.e.He = function(a) {
        a.qd() && this.Ah(a.m(), !0);
        a.isEnabled() && this.Oe(a, a.V())
    };
    z.e.dB = function(a, b) {
        z.dj(a, "label", b)
    };
    z.e.Kp = function(a, b) {
        z.Ao(a, !b, !z.C && !z.vg)
    };
    z.e.Ah = function(a, b) {
        this.uj(a, this.U() + "-rtl", b)
    };
    z.e.eg = function(a) {
        var b;
        return Qp(a, 32) && (b = a.Zb()) ? En(b) : !1
    };
    z.e.Oe = function(a, b) {
        var c;
        if (Qp(a, 32) && (c = a.Zb())) {
            if (!b && a.N & 32) {
                try {
                    c.blur()
                } catch(d) {}
                a.N & 32 && a.Xc(null)
            }
            En(c) != b && z.of(c, b)
        }
    };
    z.e.G = function(a, b) {
        z.Q(a, b);
        a && z.dj(a, "hidden", !b)
    };
    z.e.lc = function(a, b, c) {
        var d = a.m();
        if (d) {
            var f = this.Yn(b);
            f && this.uj(a, f, c);
            this.yg(d, b, c)
        }
    };
    z.e.yg = function(a, b, c) {
        sF || (sF = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        b = sF[b];
        var d = a.getAttribute("role") || null;
        d && (d = tF[d] || b, b = "checked" == b || "selected" == b ? d: b);
        b && z.dj(a, b, c)
    };
    z.e.ia = function(a, b) {
        var c = this.S(a);
        if (c && (z.af(c), b)) if (z.pa(b)) z.nf(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = z.Je(c);
                    c.appendChild(z.pa(a) ? b.createTextNode(a) : a)
                }
            };
            z.na(b) ? z.y(b, d) : !z.oa(b) || "nodeType" in b ? d(b) : z.y(z.vb(b), d)
        }
    };
    z.e.Zb = function(a) {
        return a.m()
    };
    z.e.U = function() {
        return "goog-control"
    };
    z.e.Zf = function(a) {
        var b = this.U(),
        c = [b],
        d = this.U();
        d != b && c.push(d);
        b = a.getState();
        for (d = []; b;) {
            var f = b & -b;
            d.push(this.Yn(f));
            b &= ~f
        }
        c.push.apply(c, d); (a = a.gf) && c.push.apply(c, a);
        z.C && !z.E("7") && c.push.apply(c, Rp(c));
        return c
    };
    z.e.Yn = function(a) {
        this.tr || Sp(this);
        return this.tr[a]
    };
    z.e.rs = function(a) {
        this.hK || (this.tr || Sp(this), this.hK = z.ap(this.tr));
        a = (0, window.parseInt)(this.hK[a], 10);
        return (0, window.isNaN)(a) ? 0: a
    };
    z.x(z.Tp, Np);
    z.la(z.Tp);
    z.e = z.Tp.prototype;
    z.e.hf = function() {
        return "button"
    };
    z.e.yg = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            z.dj(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            z.Tp.v.yg.call(this, a, b, c)
        }
    };
    z.e.B = function(a) {
        var b = z.Tp.v.B.call(this, a);
        this.wd(b, a.Kl());
        var c = a.Y();
        c && this.Ea(b, c);
        Qp(a, 16) && this.yg(b, 16, a.qf());
        return b
    };
    z.e.w = function(a, b) {
        b = z.Tp.v.w.call(this, a, b);
        var c = this.Y(b);
        a.qe = c;
        a.VB = this.Kl(b);
        Qp(a, 16) && this.yg(b, 16, a.qf());
        return b
    };
    z.e.Y = z.p;
    z.e.Ea = z.p;
    z.e.Kl = function(a) {
        return a.title
    };
    z.e.wd = function(a, b) {
        a && (b ? a.title = b: a.removeAttribute("title"))
    };
    z.e.Ji = z.aa(29);
    z.e.U = function() {
        return "goog-button"
    };
    var Xp = {},
    Vp = {};
    z.x(Wp, z.R);
    z.e = Wp.prototype;
    z.e.rc = null;
    z.e.N = 0;
    z.e.cq = 39;
    z.e.fj = 255;
    z.e.Bk = 0;
    z.e.sb = !0;
    z.e.gf = null;
    z.e.Jj = !0;
    z.e.Zq = !1;
    z.e.tp = null;
    z.e.Pp = function(a) {
        this.wa && a != this.Jj && Yp(this, a);
        this.Jj = a
    };
    z.e.Zb = function() {
        return this.M.Zb(this)
    };
    z.e.os = function() {
        return this.vb || (this.vb = new Lp)
    };
    z.e.Oh = function(a) {
        a && (this.gf ? z.A(this.gf, a) || this.gf.push(a) : this.gf = [a], this.M.uj(this, a, !0))
    };
    z.e.uj = function(a, b) {
        b ? this.Oh(a) : a && this.gf && z.tb(this.gf, a) && (0 == this.gf.length && (this.gf = null), this.M.uj(this, a, !1))
    };
    z.e.B = function() {
        var a = this.M.B(this);
        this.h = a;
        Op(this.M, a, this.ni());
        this.Zq || this.M.Kp(a, !1);
        this.V() || this.M.G(a, !1)
    };
    z.e.ni = function() {
        return this.tp
    };
    z.e.Gu = function(a) {
        this.tp = a
    };
    z.e.dB = function(a) {
        this.qD = a;
        var b = this.m();
        b && this.M.dB(b, a)
    };
    z.e.S = function() {
        return this.M.S(this.m())
    };
    z.e.Ob = function(a) {
        return this.M.Ob(a)
    };
    z.e.Z = function(a) {
        this.h = a = this.M.w(this, a);
        Op(this.M, a, this.ni());
        this.Zq || this.M.Kp(a, !1);
        this.sb = "none" != a.style.display
    };
    z.e.C = function() {
        Wp.v.C.call(this);
        Pp(this.M, this, this.h);
        this.M.He(this);
        if (this.cq & -2 && (this.Jj && Yp(this, !0), Qp(this, 32))) {
            var a = this.Zb();
            if (a) {
                var b = this.os();
                b.attach(a);
                this.o().g(b, "key", this.$b).g(a, "focus", this.ge).g(a, "blur", this.Xc)
            }
        }
    };
    z.e.Hb = function() {
        Wp.v.Hb.call(this);
        this.vb && this.vb.detach();
        this.V() && this.isEnabled() && this.M.Oe(this, !1)
    };
    z.e.D = function() {
        Wp.v.D.call(this);
        this.vb && (this.vb.H(), delete this.vb);
        delete this.M;
        this.to = this.gf = this.rc = null
    };
    z.e.Ua = function() {
        return this.rc
    };
    z.e.ia = function(a) {
        this.M.ia(this.m(), a);
        this.ym(a)
    };
    z.e.ym = function(a) {
        this.rc = a
    };
    z.e.Vg = function() {
        var a = this.Ua();
        if (!a) return "";
        a = z.pa(a) ? a: z.na(a) ? z.nb(a, z.Jo).join("") : z.pf(a);
        return np(a)
    };
    z.e.Lp = function(a) {
        this.ia(a)
    };
    z.e.Ah = function(a) {
        Wp.v.Ah.call(this, a);
        var b = this.m();
        b && this.M.Ah(b, a)
    };
    z.e.Kp = function(a) {
        this.Zq = a;
        var b = this.m();
        b && this.M.Kp(b, a)
    };
    z.e.V = function() {
        return this.sb
    };
    z.e.G = function(a, b) {
        if (b || this.sb != a && this.dispatchEvent(a ? "show": "hide")) {
            var c = this.m();
            c && this.M.G(c, a);
            this.isEnabled() && this.M.Oe(this, a);
            this.sb = a;
            return ! 0
        }
        return ! 1
    };
    z.e.isEnabled = function() {
        return ! (this.N & 1)
    };
    z.e.Wa = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !aq(this, 1, !a) || (a || (this.setActive(!1), this.Nc(!1)), this.V() && this.M.Oe(this, a), this.lc(1, !a, !0))
    };
    z.e.Nc = function(a) {
        aq(this, 2, a) && this.lc(2, a)
    };
    z.e.uc = function() {
        return !! (this.N & 4)
    };
    z.e.setActive = function(a) {
        aq(this, 4, a) && this.lc(4, a)
    };
    z.e.lB = function(a) {
        aq(this, 8, a) && this.lc(8, a)
    };
    z.e.qf = function() {
        return !! (this.N & 16)
    };
    z.e.Lc = function(a) {
        aq(this, 16, a) && this.lc(16, a)
    };
    z.e.ub = function() {
        return !! (this.N & 64)
    };
    z.e.Cb = function(a) {
        aq(this, 64, a) && this.lc(64, a)
    };
    z.e.getState = function() {
        return this.N
    };
    z.e.lc = function(a, b, c) {
        c || 1 != a ? Qp(this, a) && b != !!(this.N & a) && (this.M.lc(this, a, b), this.N = b ? this.N | a: this.N & ~a) : this.Wa(!b)
    };
    z.e.Tb = function(a, b) {
        if (this.wa && this.N & a && !b) throw Error("Component already rendered"); ! b && this.N & a && this.lc(a, !1);
        this.cq = b ? this.cq | a: this.cq & ~a
    };
    z.e.nd = function(a) { (!a.relatedTarget || !z.mf(this.m(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $p(this, 2) && this.Nc(!0)
    };
    z.e.Ol = function(a) {
        a.relatedTarget && z.mf(this.m(), a.relatedTarget) || !this.dispatchEvent("leave") || ($p(this, 4) && this.setActive(!1), $p(this, 2) && this.Nc(!1))
    };
    z.e.lo = z.p;
    z.e.he = function(a) {
        this.isEnabled() && ($p(this, 2) && this.Nc(!0), z.Tc(a) && ($p(this, 4) && this.setActive(!0), this.M && this.M.eg(this) && this.Zb().focus())); ! this.Zq && z.Tc(a) && a.preventDefault()
    };
    z.e.nf = function(a) {
        this.isEnabled() && ($p(this, 2) && this.Nc(!0), this.uc() && this.Nd(a) && $p(this, 4) && this.setActive(!1))
    };
    z.e.WF = function(a) {
        this.isEnabled() && this.Nd(a)
    };
    z.e.Nd = function(a) {
        $p(this, 16) && this.Lc(!this.qf());
        $p(this, 8) && this.lB(!0);
        $p(this, 64) && this.Cb(!this.ub());
        var b = new z.Lc("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.BA = a.BA);
        return this.dispatchEvent(b)
    };
    z.e.ge = function() {
        $p(this, 32) && aq(this, 32, !0) && this.lc(32, !0)
    };
    z.e.Xc = function() {
        $p(this, 4) && this.setActive(!1);
        $p(this, 32) && aq(this, 32, !1) && this.lc(32, !1)
    };
    z.e.$b = function(a) {
        return this.V() && this.isEnabled() && this.mf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    z.e.mf = function(a) {
        return 13 == a.keyCode && this.Nd(a)
    };
    if (!z.sa(Wp)) throw Error("Invalid component class " + Wp);
    if (!z.sa(Np)) throw Error("Invalid renderer class " + Np);
    var uF = z.ua(Wp);
    Xp[uF] = Np;
    z.Up("goog-control", 
    function() {
        return new Wp(null)
    });
    z.x(Zp, z.xc);
    Zp.prototype.Ml = function() {
        this.ur = !1
    };
    Zp.prototype.Bs = function() {
        this.ur = !0
    };
    Zp.prototype.Ll = function(a) {
        if (this.ur) this.ur = !1;
        else {
            var b = a.gc,
            c = b.button,
            d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.Dr.he(new z.Pc(b, a.currentTarget));
            b.type = "mouseup";
            this.Dr.nf(new z.Pc(b, a.currentTarget));
            b.button = c;
            b.type = d
        }
    };
    Zp.prototype.D = function() {
        this.Dr = null;
        Zp.v.D.call(this)
    };
    z.x(bq, z.Tp);
    z.la(bq);
    z.e = bq.prototype;
    z.e.hf = function() {};
    z.e.B = function(a) {
        a.Pp(!1);
        a.fj &= -256;
        a.Tb(32, !1);
        return a.K().B("BUTTON", {
            "class": this.Zf(a).join(" "),
            disabled: !a.isEnabled(),
            title: a.Kl() || "",
            value: a.Y() || ""
        },
        a.Vg() || "")
    };
    z.e.Ob = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    z.e.w = function(a, b) {
        a.Pp(!1);
        a.fj &= -256;
        a.Tb(32, !1);
        if (b.disabled) {
            var c = this.Yn(1);
            z.ij(b, c)
        }
        return bq.v.w.call(this, a, b)
    };
    z.e.He = function(a) {
        a.o().g(a.m(), "click", a.Nd)
    };
    z.e.Kp = z.p;
    z.e.Ah = z.p;
    z.e.eg = function(a) {
        return a.isEnabled()
    };
    z.e.Oe = z.p;
    z.e.lc = function(a, b, c) {
        bq.v.lc.call(this, a, b, c); (a = a.m()) && 1 == b && (a.disabled = c)
    };
    z.e.Y = function(a) {
        return a.value
    };
    z.e.Ea = function(a, b) {
        a && (a.value = b)
    };
    z.e.yg = z.p;
    z.x(z.cq, Wp);
    z.e = z.cq.prototype;
    z.e.Y = function() {
        return this.qe
    };
    z.e.Ea = function(a) {
        this.qe = a;
        this.M.Ea(this.m(), a)
    };
    z.e.Kl = function() {
        return this.VB
    };
    z.e.wd = function(a) {
        this.VB = a;
        this.M.wd(this.m(), a)
    };
    z.e.Ji = z.aa(28);
    z.e.D = function() {
        z.cq.v.D.call(this);
        delete this.qe;
        delete this.VB
    };
    z.e.C = function() {
        z.cq.v.C.call(this);
        if (Qp(this, 32)) {
            var a = this.Zb();
            a && this.o().g(a, "keyup", this.mf)
        }
    };
    z.e.mf = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Nd(a) : 32 == a.keyCode
    };
    z.Up("goog-button", 
    function() {
        return new z.cq(null)
    });
    z.x(dq, Np);
    z.la(dq);
    dq.prototype.B = function(a) {
        var b = a.K().B("SPAN", this.Zf(a).join(" "));
        eq(this, b, a.Yh);
        return b
    };
    dq.prototype.w = function(a, b) {
        b = dq.v.w.call(this, a, b);
        var c = z.gj(b),
        d = jq;
        z.A(c, fq(this, hq)) ? d = hq: z.A(c, fq(this, iq)) ? d = iq: z.A(c, fq(this, jq)) && (d = jq);
        a.Yh = d;
        z.dj(b, "checked", d == hq ? "mixed": d == iq ? "true": "false");
        return b
    };
    dq.prototype.hf = function() {
        return "checkbox"
    };
    dq.prototype.U = function() {
        return "goog-checkbox"
    };
    z.x(kq, Wp);
    var iq = !0,
    jq = !1,
    hq = null,
    gq = {
        wX: iq,
        hY: jq,
        jY: hq
    };
    z.e = kq.prototype;
    z.e.Mb = null;
    z.e.qf = function() {
        return this.Yh == iq
    };
    z.e.Lc = function(a) {
        a != this.Yh && (this.Yh = a, eq(this.M, this.m(), this.Yh))
    };
    z.e.toggle = function() {
        this.Lc(this.Yh ? jq: iq)
    };
    z.e.C = function() {
        kq.v.C.call(this);
        if (this.Jj) {
            var a = this.o();
            this.Mb && a.g(this.Mb, "click", this.ky).g(this.Mb, "mouseover", this.nd).g(this.Mb, "mouseout", this.Ol).g(this.Mb, "mousedown", this.he).g(this.Mb, "mouseup", this.nf);
            a.g(this.m(), "click", this.ky)
        }
        a = this.h;
        if (this.Mb && a != this.Mb && z.qp(wo(a))) {
            if (!this.Mb.id) {
                var b = this.Mb,
                c;
                c = this.fe() + ".lbl";
                b.id = c
            }
            z.dj(a, "labelledby", this.Mb.id)
        }
    };
    z.e.Wa = function(a) {
        kq.v.Wa.call(this, a);
        if (a = this.m()) a.tabIndex = this.isEnabled() ? 0: -1
    };
    z.e.ky = function(a) {
        a.stopPropagation();
        var b = this.Yh ? "uncheck": "check";
        this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
    };
    z.e.mf = function(a) {
        32 == a.keyCode && (this.Nd(a), this.ky(a));
        return ! 1
    };
    z.Up("goog-checkbox", 
    function() {
        return new kq
    });
    z.x(z.lq, z.Tp);
    z.la(z.lq);
    z.e = z.lq.prototype;
    z.e.B = function(a) {
        var b = {
            "class": "goog-inline-block " + this.Zf(a).join(" ")
        },
        b = a.K().B("DIV", b, a.Ua());
        this.wd(b, a.Kl());
        return b
    };
    z.e.hf = function() {
        return "button"
    };
    z.e.Ob = function(a) {
        return "DIV" == a.tagName
    };
    z.e.w = function(a, b) {
        z.ij(b, "goog-inline-block");
        return z.lq.v.w.call(this, a, b)
    };
    z.e.Y = function() {
        return ""
    };
    z.e.U = function() {
        return "goog-flat-button"
    };
    z.Up("goog-flat-button", 
    function() {
        return new z.cq(null, z.lq.ba())
    });
    z.x(mq, z.lq);
    z.la(mq);
    mq.prototype.U = function() {
        return "goog-link-button"
    };
    z.Up("goog-link-button", 
    function() {
        return new z.cq(null, mq.ba())
    });
    z.x(z.nq, z.G);
    z.e = z.nq.prototype;
    z.e.Jj = !0;
    z.e.D = function() {
        z.nq.v.D.call(this);
        z.Cc(this.lH);
        z.Cc(this.Tz)
    };
    z.e.hf = function() {
        return "tab"
    };
    z.e.S = function() {
        return this.ul
    };
    z.e.expand = function() {
        this.Mc(!0)
    };
    z.e.collapse = function() {
        this.Mc(!1)
    };
    z.e.toggle = function() {
        this.Mc(!this.pb)
    };
    z.e.Mc = function(a) {
        this.ul ? z.Q(this.ul, a) : a && this.kt && (this.ul = this.kt());
        this.ul && z.ij(this.ul, "goog-zippy-content");
        this.tj ? (z.Q(this.Tf, !a), z.Q(this.tj, a)) : this.Tf && (z.vo(this.Tf, "goog-zippy-expanded", a), z.vo(this.Tf, "goog-zippy-collapsed", !a), z.dj(this.Tf, "expanded", a));
        this.pb = a;
        this.dispatchEvent(new qq("toggle", this, this.pb))
    };
    z.e.Yc = function() {
        return this.pb
    };
    z.e.Pp = function(a) {
        this.Jj != a && ((this.Jj = a) ? (oq(this, this.Tf), oq(this, this.tj)) : this.Tz.removeAll())
    };
    z.e.bT = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode) this.toggle(),
        this.dispatchEvent(new z.Lc("action", this)),
        a.preventDefault(),
        a.stopPropagation()
    };
    z.e.aT = function() {
        this.toggle();
        this.dispatchEvent(new z.Lc("action", this))
    };
    z.x(qq, z.Lc);
    z.x(z.rq, z.V);
    z.e = z.rq.prototype;
    z.e.B = function() {
        z.rq.v.B.call(this);
        var a = (0, window.$)(".activate-dialog-template").html();
        this.ia(a)
    };
    z.e.C = function() {
        z.rq.v.C.call(this);
        z.Uj(this, 420);
        this.Oa("激活帐号");
        this.Ad = (0, window.$)(this.ii()).addClass("activate-dialog");
        this.hc()
    };
    z.e.hc = function() {
        this.BC = (0, window.$)(".link-activate-view", this.Ad);
        this.sC = (0, window.$)(".code-activate-view", this.Ad);
        this.BC.length ? sq(this) : uq(this)
    };
    z.e.CT = function(a) {
        var b = this,
        c = (0, window.$)(a);
        a = c.ne();
        var d = a.account,
        f = this.rf(d),
        g = f ? "/settings/account/send_new_email_digits": "/settings/account/send_new_phone_digits";
        f ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_no");
        return window.$.post(g, a, 
        function(a) {
            a.success ? (c.hide(), (0, window.$)('input[name\x3d"account"]', b.pC).val(d), b.pC.show(), wq(b, f)) : (a = a.payload.fields, f ? b.wb(a, "email", "account") : b.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
        })
    };
    z.e.CS = function(a) {
        var b = this,
        c = (0, window.$)(a);
        a = c.ne();
        var d = this.rf(a.account),
        f = d ? "/settings/account/update_email": "/settings/account/update_phone";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_no");
        return window.$.post(f, a, 
        function(a) {
            a.success ? (b.ia("激活成功。你可以正常使用提问、回答、评论等功能啦！"), (0, window.setTimeout)(function() {
                window.location.reload()
            },
            1E3)) : (a = a.payload.fields, d ? b.wb(a, "email", "account") : b.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
        })
    };
    z.e.wb = function(a, b, c) {
        a[b] && (a[c] = a[b], delete a[b])
    };
    z.e.rf = function(a) {
        return ! /^\+?[0-9]+$/.test(a)
    };
    var vq = {
        onkeyup: !1,
        onfocusout: !1,
        validClass: "",
        focusInvalid: !1,
        highlight: z.p,
        messages: {
            account: {
                required: "请填写手机号或邮箱"
            },
            digits: {
                required: "请填写验证码"
            }
        },
        errorPlacement: function(a, b) {
            var c = b.parent(".input-wrapper");
            a.appendTo(c).click(function() {
                b.focus()
            });
            b.focus(function() {
                a.remove()
            })
        }
    };
    z.l(yq, z.G);
    yq.prototype.D = function() {
        z.G.prototype.D.call(this);
        this.Uu && ((0, window.clearTimeout)(this.Uu), this.Uu = null)
    };
    yq.prototype.au = function() {
        if (!this.promise || "pending" !== this.promise.state()) {
            var a = this.JM;
            this.promise = (window.$.support.cors ? window.$.ajax(a) : xq(a)).done(this.onMessage.bind(this)).fail(this.cA.bind(this))
        }
    };
    yq.prototype.onMessage = function(a) {
        try {
            this.dispatchEvent({
                type: "message",
                data: a
            })
        } catch(b) {}
        this.Uu = (0, window.setTimeout)(this.au.bind(this), this.pU)
    };
    yq.prototype.cA = function() {
        this.dispatchEvent("error");
        this.vu < this.MH && (this.vu = Math.min(this.vu * this.XQ, this.MH));
        this.Uu = (0, window.setTimeout)(this.au.bind(this), this.vu)
    };
    var zq = {
        type: "GET",
        url: "",
        data: {},
        timeout: 6E4,
        xhrFields: {
            withCredentials: !0
        }
    };
    z.l(z.Aq, z.R);
    z.Aq.prototype.B = function() {
        this.h = z.O("div", {
            innerHTML: (0, window.$)(".unblock-dialog-template").html()
        })
    };
    z.Aq.prototype.C = function() {
        z.R.prototype.C.call(this);
        this.Ok = (0, window.$)(".unblock-dialog-loading", this.h);
        this.vC = (0, window.$)(".unblock-dialog-error", this.h);
        this.Kv = (0, window.$)(".unblock-dialog-view", this.h);
        Bq(this);
        this.Ry();
        this.mn();
        Iq(this)
    };
    z.Aq.prototype.Ry = function() {
        this.Cc = new z.ek("antispam");
        this.Cc.w((0, window.$)(".unblock-dialog-captcha", this.h).get(0))
    };
    z.Aq.prototype.mn = function() {
        Cq(this);
        Gq(this);
        Hq(this)
    };
    z.l(Jq, z.V);
    Jq.prototype.B = function() {
        z.V.prototype.B.call(this);
        this.Oa("帐号解封");
        z.Mj(this, null);
        this.Df(!0)
    };
    Jq.prototype.C = function() {
        var a = this;
        z.V.prototype.C.call(this);
        this.$B = new z.Aq(function(b) {
            return a.Oa(b)
        },
        !0);
        z.Ac(this, this.$B);
        this.$B.render(this.S());
        this.$B.g("complete", 
        function() {
            return a.G(!1)
        })
    };
    z.x(Lq, z.G);
    var Mq = 0;
    Lq.prototype.kg = function() {
        this.jd("begin")
    };
    Lq.prototype.lg = function() {
        this.jd("end")
    };
    Lq.prototype.jd = function(a) {
        this.dispatchEvent(a)
    };
    z.x(Nq, z.xc);
    z.e = Nq.prototype;
    z.e.qb = 0;
    z.e.D = function() {
        Nq.v.D.call(this);
        this.stop();
        delete this.bk;
        delete this.ga
    };
    z.e.start = function(a) {
        this.stop();
        this.qb = z.vd(this.fl, z.ka(a) ? a: this.bh)
    };
    z.e.stop = function() {
        this.uc() && z.wd(this.qb);
        this.qb = 0
    };
    z.e.fire = function() {
        this.stop();
        this.Og()
    };
    z.e.uc = function() {
        return 0 != this.qb
    };
    z.e.Og = function() {
        this.qb = 0;
        this.bk && this.bk.call(this.ga)
    };
    var Qq = {},
    Rq = null;
    z.x(Vq, Lq);
    z.e = Vq.prototype;
    z.e.Qg = function(a) {
        this.Ti = a
    };
    z.e.play = function(a) {
        if (a || this.N == Mq) this.progress = 0,
        this.coords = this.Zp;
        else if (1 == this.N) return ! 1;
        Pq(this);
        this.startTime = a = (0, z.I)(); - 1 == this.N && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.kg();
        this.jd("play"); - 1 == this.N && this.jd("resume");
        this.N = 1;
        var b = z.ua(this);
        b in Qq || (Qq[b] = this);
        Sq();
        Uq(this, a);
        return ! 0
    };
    z.e.stop = function(a) {
        Pq(this);
        this.N = Mq;
        a && (this.progress = 1);
        Wq(this, this.progress);
        this.jd("stop");
        this.lg()
    };
    z.e.pause = function() {
        1 == this.N && (Pq(this), this.N = -1, this.jd("pause"))
    };
    z.e.D = function() {
        this.N == Mq || this.stop(!1);
        this.jd("destroy");
        Vq.v.D.call(this)
    };
    z.e.destroy = function() {
        this.H()
    };
    z.e.Zz = function() {
        this.jd("animate")
    };
    z.e.jd = function(a) {
        this.dispatchEvent(new Xq(a, this))
    };
    z.x(Xq, z.Lc);
    var cr = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var dr = /#(.)(.)(.)/,
    Zq = /^#(?:[0-9a-f]{3}){1,2}$/i,
    er = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    z.x(fr, Vq);
    z.e = fr.prototype;
    z.e.Hh = z.p;
    z.e.qd = function() {
        z.ka(this.rg) || (this.rg = z.Ng(this.element));
        return this.rg
    };
    z.e.Zz = function() {
        this.Hh();
        fr.v.Zz.call(this)
    };
    z.e.lg = function() {
        this.Hh();
        fr.v.lg.call(this)
    };
    z.e.kg = function() {
        this.Hh();
        fr.v.kg.call(this)
    };
    z.x(gr, fr);
    gr.prototype.Hh = function() {
        var a = this.Ti && this.qd() ? "right": "left";
        this.element.style[a] = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    z.x(hr, fr);
    hr.prototype.Hh = function() {
        if (this.Ti) {
            var a = this.element,
            b = Math.round(this.coords[0]),
            b = Math.max(b, 0);
            z.Ng(a) ? z.B ? a.scrollLeft = -b: z.Kl && z.E("8") ? a.scrollLeft = b: a.scrollLeft = a.scrollWidth - b - a.clientWidth: a.scrollLeft = b
        } else this.element.scrollLeft = Math.round(this.coords[0]);
        this.element.scrollTop = Math.round(this.coords[1])
    };
    z.x(ir, fr);
    ir.prototype.Hh = function() {
        this.element.style.width = Math.round(this.coords[0]) + "px"
    };
    z.x(jr, fr);
    jr.prototype.Hh = function() {
        this.element.style.height = Math.round(this.coords[0]) + "px"
    };
    z.x(kr, fr);
    var vF = 1 / 1024,
    lr = -1;
    z.e = kr.prototype;
    z.e.Hh = function() {
        var a = this.coords[0];
        Math.abs(a - this.it) >= vF && (z.Kg(this.element, a), this.it = a)
    };
    z.e.kg = function() {
        this.it = lr;
        kr.v.kg.call(this)
    };
    z.e.lg = function() {
        this.it = lr;
        kr.v.lg.call(this)
    };
    z.e.show = function() {
        this.element.style.display = ""
    };
    z.e.hide = function() {
        this.element.style.display = "none"
    };
    z.x(mr, kr);
    mr.prototype.kg = function() {
        this.show();
        mr.v.kg.call(this)
    };
    mr.prototype.lg = function() {
        this.hide();
        mr.v.lg.call(this)
    };
    z.x(nr, kr);
    nr.prototype.kg = function() {
        this.show();
        nr.v.kg.call(this)
    };
    z.x(or, fr);
    or.prototype.Hh = function() {
        for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
        this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
    };
    var wF = {
        hidden: "visibilitychange",
        msHidden: "msvisibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange"
    },
    Ar;
    a: {
        var xF = function(a, b) {
            return b in window.document
        },
        yF;
        for (yF in wF) if (xF.call(void 0, 0, yF)) {
            Ar = yF;
            break a
        }
        Ar = void 0
    }
    var Br = wF[Ar],
    zr = z.ka(Ar);
    z.Mr = function(a) {
        return function(b) {
            return b.replace(a, "")
        }
    } (/^⁠+|⁠+$/);
    z.Gr.prototype.add = function(a, b) { ! 1 === this.xR ? this.data.set(a, b) : this.data.set((0, window.encodeURIComponent)(a), (0, window.encodeURIComponent)(b))
    };
    z.Gr.prototype.Ce = function() {
        var a = [];
        z.y(this.data.ld(), 
        function(b) {
            a.push(b + "\x3d" + this.data.get(b))
        },
        this);
        return a.join("\x26")
    };
    z.Sv = function() {
        function a(a) {
            return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
        }
        var b = {
            mW: {
                evaluate: /<%([\s\S]+?)%>/g,
                rR: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            },
            escape: function(a) {
                return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
            }
        },
        c = /.^/;
        return function(d, f) {
            var g = b.mW,
            g = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" + d.replace(/\\/g, 
            "\\\\").replace(/'/g, "\\'").replace(g.escape || c, 
            function(b, c) {
                return "',_.escape(" + a(c) + "),'"
            }).replace(g.rR || c, 
            function(b, c) {
                return "'," + a(c) + ",'"
            }).replace(g.evaluate || c, 
            function(b, c) {
                return "');" + a(c).replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            h = new Function("data", "_", g);
            return f ? h(f, b) : function(a) {
                return h.call(this, a, b)
            }
        }
    } ();
    z.Nr.defaults = {
        paddingTop: 0
    };
    var Pr = {
        offsetTop: 0,
        paddingTop: 0,
        ew: !1
    };
    (0, window.$)(function() {
        Pr.paddingTop = z.Qg(window.document.body).top
    });
    z.zF = z.Rj(function() {
        return ( + new Date).toString(32).slice( - 5) + Math.random().toString(32).slice( - 3)
    });
    z.x(z.Tr, z.Yj);
    z.Tr.prototype.KK = function() {
        return Ur(this)
    };
    z.la(Wr);
    z.e = Wr.prototype;
    z.e.hf = function() {
        return this.iw
    };
    z.e.B = function(a) {
        return a.K().B("DIV", this.Zf(a).join(" "))
    };
    z.e.S = function(a) {
        return a
    };
    z.e.Ob = function(a) {
        return "DIV" == a.tagName
    };
    z.e.w = function(a, b) {
        b.id && Pn(a, b.id);
        var c = this.U(),
        d = !1,
        f = z.gj(b);
        f && z.y(f, 
        function(b) {
            b == c ? d = !0: b && (b == c + "-disabled" ? a.Wa(!1) : b == c + "-horizontal" ? a.setOrientation(z.AF) : b == c + "-vertical" && a.setOrientation(sz))
        },
        this);
        d || z.ij(b, c);
        Yr(this, a, this.S(b));
        return b
    };
    z.e.Zn = function(a) {
        a: {
            var b;
            a = z.gj(a);
            for (var c = 0, d = a.length; c < d; c++) if (b = a[c], b = b in Vp ? Vp[b]() : null) {
                a = b;
                break a
            }
            a = null
        }
        return a
    };
    z.e.He = function(a) {
        a = a.m();
        z.Ao(a, !0, z.B);
        z.C && (a.hideFocus = !0);
        var b = this.hf();
        b && z.cj(a, b)
    };
    z.e.Zb = function(a) {
        return a.m()
    };
    z.e.U = function() {
        return "goog-container"
    };
    z.e.Zf = function(a) {
        var b = this.U(),
        c = [b, a.Nb == z.AF ? b + "-horizontal": b + "-vertical"];
        a.isEnabled() || c.push(b + "-disabled");
        return c
    };
    z.e.HF = function() {
        return sz
    };
    var sz;
    z.x(z.Zr, z.R);
    z.AF = "horizontal";
    sz = "vertical";
    z.e = z.Zr.prototype;
    z.e.qz = null;
    z.e.vb = null;
    z.e.M = null;
    z.e.Nb = null;
    z.e.sb = !0;
    z.e.ec = !0;
    z.e.Nx = !0;
    z.e.Ta = -1;
    z.e.jc = null;
    z.e.vf = !1;
    z.e.LM = !1;
    z.e.VT = !0;
    z.e.Ig = null;
    z.e.Zb = function() {
        return this.qz || this.M.Zb(this)
    };
    z.e.os = function() {
        return this.vb || (this.vb = new Lp(this.Zb()))
    };
    z.e.B = function() {
        this.h = this.M.B(this)
    };
    z.e.S = function() {
        return this.M.S(this.m())
    };
    z.e.Ob = function(a) {
        return this.M.Ob(a)
    };
    z.e.Z = function(a) {
        this.h = this.M.w(this, a);
        "none" == a.style.display && (this.sb = !1)
    };
    z.e.C = function() {
        z.Zr.v.C.call(this);
        z.ch(this, 
        function(a) {
            a.wa && as(this, a)
        },
        this);
        var a = this.m();
        this.M.He(this);
        this.G(this.sb, !0);
        this.o().g(this, "enter", this.oy).g(this, "highlight", this.ry).g(this, "unhighlight", this.Ay).g(this, "open", this.jQ).g(this, "close", this.ly).g(a, "mousedown", this.he).g(z.Je(a), "mouseup", this.yP).g(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.rP);
        this.eg() && $r(this, !0)
    };
    z.e.Hb = function() {
        this.xb( - 1);
        this.jc && this.jc.Cb(!1);
        this.vf = !1;
        z.Zr.v.Hb.call(this)
    };
    z.e.D = function() {
        z.Zr.v.D.call(this);
        this.vb && (this.vb.H(), this.vb = null);
        this.M = this.jc = this.Ig = this.qz = null
    };
    z.e.oy = function() {
        return ! 0
    };
    z.e.ry = function(a) {
        var b = On(this, a.target);
        if ( - 1 < b && b != this.Ta) {
            var c = bs(this);
            c && c.Nc(!1);
            this.Ta = b;
            c = bs(this);
            this.vf && c.setActive(!0);
            this.VT && this.jc && c != this.jc && (Qp(c, 64) ? c.Cb(!0) : this.jc.Cb(!1))
        }
        b = this.m();
        null != a.target.m() && z.dj(b, "activedescendant", a.target.m().id)
    };
    z.e.Ay = function(a) {
        a.target == bs(this) && (this.Ta = -1);
        this.m().removeAttribute("aria-activedescendant")
    };
    z.e.jQ = function(a) { (a = a.target) && a != this.jc && a.getParent() == this && (this.jc && this.jc.Cb(!1), this.jc = a)
    };
    z.e.ly = function(a) {
        a.target == this.jc && (this.jc = null);
        var b = this.m(),
        c = a.target.m();
        b && a.target.N & 2 && c && xo(b, c)
    };
    z.e.he = function(a) {
        this.ec && (this.vf = !0);
        var b = this.Zb();
        b && En(b) ? b.focus() : a.preventDefault()
    };
    z.e.yP = function() {
        this.vf = !1
    };
    z.e.rP = function(a) {
        var b;
        a: {
            b = a.target;
            if (this.Ig) for (var c = this.m(); b && b !== c;) {
                var d = b.id;
                if (d in this.Ig) {
                    b = this.Ig[d];
                    break a
                }
                b = b.parentNode
            }
            b = null
        }
        if (b) switch (a.type) {
        case "mousedown":
            b.he(a);
            break;
        case "mouseup":
            b.nf(a);
            break;
        case "mouseover":
            b.nd(a);
            break;
        case "mouseout":
            b.Ol(a);
            break;
        case "contextmenu":
            b.lo(a)
        }
    };
    z.e.ge = function() {};
    z.e.Xc = function() {
        this.xb( - 1);
        this.vf = !1;
        this.jc && this.jc.Cb(!1)
    };
    z.e.$b = function(a) {
        return this.isEnabled() && this.V() && (0 != z.ah(this) || this.qz) && this.mf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    z.e.mf = function(a) {
        var b = bs(this);
        if (b && "function" == typeof b.$b && b.$b(a) || this.jc && this.jc != b && "function" == typeof this.jc.$b && this.jc.$b(a)) return ! 0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return ! 1;
        switch (a.keyCode) {
        case 27:
            if (this.eg()) this.Zb().blur();
            else return ! 1;
            break;
        case 36:
            z.cs(this);
            break;
        case 35:
            es(this);
            break;
        case 38:
            if (this.Nb == sz) gs(this);
            else return ! 1;
            break;
        case 37:
            if (this.Nb == z.AF) this.qd() ? fs(this) : gs(this);
            else return ! 1;
            break;
        case 40:
            if (this.Nb == sz) fs(this);
            else return ! 1;
            break;
            case 39:
            if (this.Nb == z.AF) this.qd() ? gs(this) : fs(this);
            else return ! 1;
            break;
        default:
            return ! 1
        }
        return ! 0
    };
    z.e.L = function(a, b) {
        z.Zr.v.L.call(this, a, b)
    };
    z.e.Uk = function(a, b, c) {
        a.Bk |= 2;
        a.Bk |= 64; ! this.eg() && this.LM || a.Tb(32, !1);
        a.Pp(!1);
        var d = a.getParent() == this ? On(this, a) : -1;
        z.Zr.v.Uk.call(this, a, b, c);
        a.wa && this.wa && as(this, a);
        a = d; - 1 == a && (a = z.ah(this));
        a == this.Ta ? this.Ta = Math.min(z.ah(this) - 1, b) : a > this.Ta && b <= this.Ta ? this.Ta++:a < this.Ta && b > this.Ta && this.Ta--
    };
    z.e.removeChild = function(a, b) {
        if (a = z.pa(a) ? z.$g(this, a) : a) {
            var c = On(this, a); - 1 != c && (c == this.Ta ? (a.Nc(!1), this.Ta = -1) : c < this.Ta && this.Ta--); (c = a.m()) && c.id && this.Ig && z.Kb(this.Ig, c.id)
        }
        a = z.Zr.v.removeChild.call(this, a, b);
        a.Pp(!0);
        return a
    };
    z.e.setOrientation = function(a) {
        if (this.m()) throw Error("Component already rendered");
        this.Nb = a
    };
    z.e.V = function() {
        return this.sb
    };
    z.e.G = function(a, b) {
        if (b || this.sb != a && this.dispatchEvent(a ? "show": "hide")) {
            this.sb = a;
            var c = this.m();
            c && (z.Q(c, a), this.eg() && Xr(this.Zb(), this.ec && this.sb), b || this.dispatchEvent(this.sb ? "aftershow": "afterhide"));
            return ! 0
        }
        return ! 1
    };
    z.e.isEnabled = function() {
        return this.ec
    };
    z.e.Wa = function(a) {
        this.ec != a && this.dispatchEvent(a ? "enable": "disable") && (a ? (this.ec = !0, z.ch(this, 
        function(a) {
            a.dL ? delete a.dL: a.Wa(!0)
        })) : (z.ch(this, 
        function(a) {
            a.isEnabled() ? a.Wa(!1) : a.dL = !0
        }), this.vf = this.ec = !1), this.eg() && Xr(this.Zb(), a && this.sb))
    };
    z.e.eg = function() {
        return this.Nx
    };
    z.e.Oe = function(a) {
        a != this.Nx && this.wa && $r(this, a);
        this.Nx = a;
        this.ec && this.sb && Xr(this.Zb(), a)
    };
    z.e.xb = function(a) { (a = z.bh(this, a)) ? a.Nc(!0) : -1 < this.Ta && bs(this).Nc(!1)
    };
    z.e.Nc = function(a) {
        this.xb(On(this, a))
    };
    z.e.ND = function(a) {
        return a.V() && a.isEnabled() && Qp(a, 2)
    };
    z.x(hs, z.R);
    hs.prototype.Fa = function(a) {
        this.ov.push(a);
        a.Db(this)
    };
    hs.prototype.C = function() {
        hs.v.C.call(this);
        this.o().g(this, "toggle", this.xQ)
    };
    hs.prototype.xQ = function(a) {
        z.y(this.ov, 
        function(b) {
            a.target !== b && b.Yc() && b.Mc(!1, !0)
        },
        this)
    };
    hs.prototype.D = function() {
        hs.v.D.call(this);
        z.y(this.ov, 
        function(a) {
            a.H()
        },
        this);
        this.ov = []
    };
    z.is.prototype.Ei = function(a, b, c) {
        if (this.jC) {
            var d = this.Sa,
            f = js(a, b, d);
            0 == f.length && (f = ks(a, b, d));
            b = f
        } else b = js(a, b, this.Sa);
        c(a, b)
    };
    var ms,
    os;
    z.x(z.ls, z.G);
    z.e = z.ls.prototype;
    z.e.dk = 10;
    z.e.jn = !0;
    z.e.iD = !1;
    z.e.jL = !1;
    z.e.CK = !1;
    ms = "hilite";
    z.ns = "select";
    z.ps = "dismiss";
    os = "canceldismiss";
    z.e = z.ls.prototype;
    z.e.getToken = function() {
        return this.Wb
    };
    z.e.handleEvent = function(a) {
        var b = this.Kd;
        if (a.target == this.M) switch (a.type) {
        case ms:
            this.dg(a.Fi);
            break;
        case z.ns:
            var c = !1;
            if (z.qa(a.Fi)) {
                a = a.Fi;
                var d = this.Sa[ts(this, a)],
                c = !!d && b.oz && b.oz(d);
                d && !c && this.$g != a && this.dg(a)
            }
            c || this.Hi();
            break;
        case os:
            z.ss(this);
            break;
        case z.ps:
            this.mj()
        }
    };
    z.e.Hu = function(a, b) {
        this.Wb != a && (this.Wb = a, this.Kd.Ei(this.Wb, this.dk, (0, z.q)(this.gS, this), b), z.ss(this))
    };
    z.e.gy = function() {
        return this.yc
    };
    z.e.ub = function() {
        return this.M.V()
    };
    z.e.dg = function(a) {
        var b = ts(this, a),
        c = this.Sa[b];
        return c && this.Kd.oz && this.Kd.oz(c) ? !1: (this.$g = a, this.M.dg(a), -1 != b)
    };
    z.e.Hi = function() {
        var a = ts(this, this.$g);
        if ( - 1 != a) {
            var b = this.Sa[a],
            c = this.Cf.Ii(b);
            this.CK ? (this.Wb = null, this.mj()) : this.Dc();
            c || (this.dispatchEvent({
                type: "update",
                Fi: b,
                index: a
            }), this.CK && this.Cf.update(!0));
            return ! 0
        }
        this.Dc();
        this.dispatchEvent({
            type: "update",
            Fi: null,
            index: null
        });
        return ! 1
    };
    z.e.Dc = function() {
        this.$g = -1;
        this.Wb = null;
        this.Uc += this.Sa.length;
        this.Sa = [];
        window.clearTimeout(this.Yd);
        this.Yd = null;
        this.M.Dc();
        this.dispatchEvent("suggestionsupdate");
        this.dispatchEvent(z.ps)
    };
    z.e.mj = function() {
        this.Yd || (this.Yd = window.setTimeout((0, z.q)(this.Dc, this), 100))
    };
    z.e.GG = function() {
        return this.Yd ? (window.clearTimeout(this.Yd), this.Yd = null, !0) : !1
    };
    z.e.D = function() {
        z.ls.v.D.call(this);
        delete this.QG;
        this.M.H();
        this.Cf.H();
        this.Kd = null
    };
    z.e.gS = function(a, b, c) {
        this.Wb == a && this.tm(b, c)
    };
    z.e.tm = function(a, b) {
        var c = "object" == z.ma(b) && b,
        d = (c ? c.GY() : b) ? ts(this, this.$g) : -1;
        this.Uc += this.Sa.length;
        this.Sa = a;
        for (var f = [], g = 0; g < a.length; ++g) f.push({
            id: this.Uc + g,
            data: a[g]
        });
        g = null;
        this.yc && (g = this.QG[z.ua(this.yc)] || this.yc);
        this.M.kD = g;
        this.M.tm(f, this.Wb, this.yc);
        g = this.jn;
        c && void 0 !== c.YO() && (g = c.YO());
        this.$g = -1; (g || 0 <= d) && 0 != f.length && this.Wb && (0 <= d ? this.dg(this.Uc + d) : z.qs(this));
        this.dispatchEvent("suggestionsupdate")
    };
    z.e.Xk = function(a) {
        var b = this.Cf;
        b.Xk.apply(b, arguments)
    };
    z.e.update = function(a) {
        this.Cf.update(a)
    };
    z.x(z.zs, z.xc);
    var BF = (z.Vi || z.Wj) && !z.E("533.17.9");
    z.e = z.zs.prototype;
    z.e.fX = !0;
    z.e.WO = !0;
    z.e.MK = !1;
    z.e.JV = !0;
    z.e.IV = !0;
    z.e.Sv = null;
    z.e.eb = null;
    z.e.Ro = "";
    z.e.Vi = !1;
    z.e.XA = !1;
    z.e.JK = !0;
    z.e.ks = function() {
        return this.ca
    };
    z.e.Dl = function() {
        return this.eb
    };
    z.e.Y = function() {
        return this.eb.value
    };
    z.e.Ea = function(a) {
        this.eb.value = a
    };
    z.e.fr = function(a) {
        z.kf(a) && (z.cj(a, "combobox"), z.dj(a, "autocomplete", "list"));
        this.dc.g(a, "focus", this.ge);
        this.dc.g(a, "blur", this.Xc);
        this.eb || (this.Pv.g(a, "keydown", this.dT), z.kf(a) && Dn(z.Je(a)) == a && Fs(this, a))
    };
    z.e.Xk = function(a) {
        for (var b = 0; b < arguments.length; b++) this.fr(arguments[b])
    };
    z.e.Ii = function(a, b) {
        this.eb && As(this, a.toString(), b);
        return ! 1
    };
    z.e.D = function() {
        z.zs.v.D.call(this);
        null != this.Sv && window.clearTimeout(this.Sv);
        this.dc.H();
        delete this.dc;
        this.Pv.H();
        this.vb.H();
        z.Cc(this.ma)
    };
    z.e.$b = function(a) {
        switch (a.keyCode) {
        case 40:
            if (this.ca.ub()) return this.MK ? rs(this.ca) : z.qs(this.ca),
            a.preventDefault(),
            !0;
            if (!this.gm) return this.update(!0),
            a.preventDefault(),
            !0;
            break;
        case 38:
            if (this.ca.ub()) return this.MK ? z.qs(this.ca) : rs(this.ca),
            a.preventDefault(),
            !0;
            break;
        case 9:
            if (!this.ca.ub() || a.shiftKey || this.zU) this.ca.Dc();
            else if (this.update(), this.ca.Hi() && this.yU) return a.preventDefault(),
            !0;
            break;
        case 13:
            if (this.ca.ub()) {
                if (this.update(), this.ca.Hi()) return a.preventDefault(),
                a.stopPropagation(),
                !0
            } else this.ca.Dc();
            break;
        case 27:
            if (this.ca.ub()) return this.ca.Dc(),
            a.preventDefault(),
            a.stopPropagation(),
            !0;
            break;
        case 229:
            if (!this.Vi) return this.Vi || (this.dc.g(this.eb, "keyup", this.xI), this.dc.g(this.eb, "keypress", this.wI), this.Vi = !0),
            !0;
            break;
        default:
            this.ma && !this.JK && (this.ma.stop(), this.ma.start())
        }
        return Ds(this, a)
    };
    z.e.ys = function() {
        return ! 1
    };
    z.e.ge = function(a) {
        Fs(this, a.target || null)
    };
    z.e.Xc = function() {
        BF ? this.Sv = window.setTimeout((0, z.q)(this.dJ, this), 0) : this.dJ()
    };
    z.e.dJ = function() {
        this.eb && (this.dc.qa(this.vb, "key", this.lp), this.vb.detach(), this.dc.qa(this.eb, "keyup", this.ys), this.dc.qa(this.eb, "mousedown", this.yI), z.C && this.dc.qa(this.eb, "keypress", this.vI), this.Vi && Gs(this), this.eb = null, this.ma && (this.ma.stop(), this.dc.qa(this.ma, "tick", this.sp)), this.ca && this.ca.mj())
    };
    z.e.sp = function() {
        this.update()
    };
    z.e.dT = function(a) {
        this.ge(a)
    };
    z.e.lp = function(a) {
        this.qH = a.keyCode;
        this.ca && this.$b(a)
    };
    z.e.wI = function() {
        this.Vi && 229 != this.qH && Gs(this)
    };
    z.e.xI = function(a) {
        this.Vi && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Gs(this)
    };
    z.e.yI = function(a) {
        this.ca && this.he(a)
    };
    z.e.he = function() {};
    z.e.vI = function(a) {
        Ds(this, a)
    };
    z.e.update = function(a) {
        if (this.eb && (a || this.Y() != this.Ro)) {
            if (a || !this.XA) {
                a = z.us(this.eb)[0];
                var b = this.Y();
                a = Cs(this, b)[Bs(this, b, a)];
                a = this.DK ? String(a).replace(this.DK, "") : a;
                this.ca && (this.ca.yc = this.eb, this.ca.Hu(a, this.Y()))
            }
            this.Ro = this.Y()
        }
        this.XA = !1
    };
    z.x(z.Hs, z.xc);
    z.e = z.Hs.prototype;
    z.e.UH = "GET";
    z.e.rc = void 0;
    z.e.KQ = null;
    z.e.xz = null;
    z.e.kB = function(a) {
        this.UH = a
    };
    z.e.ia = function(a) {
        this.rc = a
    };
    z.e.kX = function(a, b, c) {
        c = z.te(c.target);
        var d = [];
        if (c) try {
            d = Vo(c)
        } catch(f) {}
        b(a, d)
    };
    z.e.Ei = function(a, b, c) {
        var d,
        f = this.jC;
        d = new z.qh(this.eC);
        z.sh(d);
        d.le.set("token", a);
        b = String(b);
        z.sh(d);
        d.le.set("max_matches", b);
        f = String(Number(f));
        z.sh(d);
        d.le.set("use_similar", f);
        if (d = d.toString()) a = (0, z.q)(this.kX, this, a, c),
        this.ea.uc() && this.ea.abort(),
        this.xz && z.nd(this.xz),
        this.xz = z.ld(this.ea, "success", a),
        this.ea.send(d, this.UH, this.rc, this.KQ)
    };
    z.e.D = function() {
        this.ea.H();
        z.Hs.v.D.call(this)
    };
    z.x(z.Ms, z.G);
    z.e = z.Ms.prototype;
    z.e.m = function() {
        return this.h
    };
    z.e.tg = function(a) {
        this.SK = a
    };
    z.e.Xn = function() {
        return this.kD
    };
    z.e.tm = function(a, b, c) {
        this.Wb = b;
        this.Sa = a;
        this.Wl = -1;
        this.fK = (0, z.I)();
        this.yc = c;
        this.Af = [];
        Qs(this)
    };
    z.e.Dc = function() {
        this.sb && (this.sb = !1, Ns(this, !1), 0 < this.Yo ? (z.Cc(this.Vk), this.Vk = new mr(this.h, this.Yo), this.Vk.play()) : z.Q(this.h, !1))
    };
    z.e.show = function() {
        this.sb || (this.sb = !0, Ns(this, !0), 0 < this.Yo ? (z.Cc(this.Vk), this.Vk = new nr(this.h, this.Yo), this.Vk.play()) : z.Q(this.h, !0))
    };
    z.e.V = function() {
        return this.sb
    };
    z.e.dg = function(a) {
        if ( - 1 == a) Os(this, -1);
        else for (var b = 0; b < this.Sa.length; b++) if (this.Sa[b].id == a) {
            Os(this, b);
            break
        }
    };
    z.e.ha = function() {
        if (this.yc && this.Dp) {
            var a = this.kD || this.yc,
            b;
            b = this.jV ? 3: 1;
            this.$u && (b ^= 1);
            var c = 65;
            this.aK && (this.h.style.height = "", c |= 32);
            z.Is(a, b, this.h, b ^ 1, null, null, c);
            this.$u && (this.h.style.visibility = "visible")
        }
    };
    z.e.gy = function() {
        return this.yc || null
    };
    z.e.D = function() {
        this.h && (z.md(this.h, "click", this.Ll, !1, this), z.md(this.h, "mousedown", this.Ml, !1, this), z.md(this.h, "mouseover", this.dG, !1, this), this.da.removeNode(this.h), this.h = null, this.sb = !1);
        z.Cc(this.Vk);
        this.Ra = null;
        z.Ms.v.D.call(this)
    };
    z.e.sJ = function(a, b, c) {
        z.nf(c, a.data.toString())
    };
    z.e.Ll = function(a) {
        var b = Us(this, a.target);
        0 <= b && this.dispatchEvent({
            type: z.ns,
            Fi: this.Sa[b].id
        });
        a.stopPropagation()
    };
    z.e.Ml = function(a) {
        a.stopPropagation();
        a.preventDefault()
    };
    z.e.dG = function(a) {
        a = Us(this, a.target);
        0 <= a && !(300 > (0, z.I)() - this.fK) && this.dispatchEvent({
            type: ms,
            Fi: this.Sa[a].id
        })
    };
    z.x(z.Vs, z.ls);
    z.Vs.prototype.tg = function(a) {
        this.M.tg(a)
    };
    z.Vs.prototype.kB = function(a) {
        this.Kd.kB(a)
    };
    z.Vs.prototype.ia = function(a) {
        this.Kd.ia(a)
    };
    z.x(z.Ws, z.Vs);
    z.Ws.prototype.defaults = {
        source: "",
        ke: 10,
        ZW: !1,
        filter: null,
        format: null,
        ez: null,
        delay: 300,
        separator: null,
        iO: null,
        multiple: !1,
        yk: null,
        WY: null,
        placeholder: "",
        td: null,
        render: null
    };
    z.Ws.prototype.defaults.format = function(a) {
        return function(b, c) {
            return (0, z.ab)(c) && z.na(b) ? z.na(b[0]) ? z.nb(b[0].slice(1), a, this) : b: []
        }
    } (function(a) {
        var b;
        return (b = CF[this.J.source]) || (b = CF[DF][a[0]]) ? b(a) : a
    });
    var DF = "/autocomplete",
    CF = {};
    CF[DF] = {
        topic: function(a) {
            return {
                type: a[0],
                name: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                answers: a[6],
                alias: a[7],
                raw: a,
                value: a[4],
                label: a[1]
            }
        },
        question: function(a) {
            return {
                type: a[0],
                title: a[1],
                id: a[2],
                url_token: a[3],
                answers: a[4],
                is_star: !!a[5],
                raw: a,
                label: a[1],
                value: a[2]
            }
        },
        people: function(a) {
            return {
                type: a[0],
                fullname: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                headline: a[5],
                raw: a,
                label: a[1],
                value: a[4]
            }
        },
        search_link: function(a) {
            return {
                type: a[0],
                raw: a,
                label: a[1],
                value: a[1]
            }
        }
    };
    CF["/topic/autocomplete"] = function(a) {
        return {
            type: a[0],
            name: a[1],
            url_token: a[2],
            avatar: a[3],
            id: a[4],
            followers: a[5],
            alias: a[6],
            label: a[1]
        }
    };
    CF["/question/autocomplete"] = function(a) {
        return {
            type: a[0],
            title: a[1],
            id: a[2],
            url_token: a[3],
            is_duplicated: Boolean( + a[4]),
            answer_count: a[5],
            raw: a,
            label: a[1],
            value: a[2]
        }
    };
    z.x(Xs, z.zs);
    Xs.prototype.Xc = z.p;
    Xs.prototype.$b = z.p;
    Xs.prototype.Ii = function() {
        return ! 1
    };
    var $s;
    z.x(z.Ys, z.R);
    z.e = z.Ys.prototype;
    z.e.Xf = null;
    z.e.PR = 10;
    z.e.Ql = !1;
    z.e.B = function() {
        this.h = this.K().B("INPUT", {
            type: "text"
        })
    };
    z.e.Z = function(a) {
        z.Ys.v.Z.call(this, a);
        this.Mb || (this.Mb = a.getAttribute("label") || "");
        Dn(z.Je(a)) == a && (this.Ql = !0, z.kj(this.m(), this.Oo));
        Zs() && (this.m().placeholder = this.Mb);
        z.dj(this.m(), "label", this.Mb)
    };
    z.e.C = function() {
        z.Ys.v.C.call(this);
        var a = new z.xd(this);
        a.g(this.m(), "focus", this.aG);
        a.g(this.m(), "blur", this.iy);
        Zs() ? this.T = a: (z.B && a.g(this.m(), ["keypress", "keydown", "keyup"], this.MP), a.g(z.Se(z.Je(this.m())), "load", this.EQ), this.T = a, at(this));
        this.Xh();
        this.m().OR = this
    };
    z.e.Hb = function() {
        z.Ys.v.Hb.call(this);
        this.T && (this.T.H(), this.T = null);
        this.m().OR = null
    };
    z.e.D = function() {
        z.Ys.v.D.call(this);
        this.T && (this.T.H(), this.T = null)
    };
    z.e.Oo = "label-input-label";
    z.e.aG = function() {
        this.Ql = !0;
        z.kj(this.m(), this.Oo);
        if (!Zs() && !bt(this) && !this.WQ) {
            var a = this,
            b = function() {
                a.m() && (a.m().value = "")
            };
            z.C ? z.vd(b, 10) : b()
        }
    };
    z.e.iy = function() {
        Zs() || (this.T.qa(this.m(), "click", this.aG), this.Xf = null);
        this.Ql = !1;
        this.Xh()
    };
    z.e.MP = function(a) {
        27 == a.keyCode && ("keydown" == a.type ? this.Xf = this.m().value: "keypress" == a.type ? this.m().value = this.Xf: "keyup" == a.type && (this.Xf = null), a.preventDefault())
    };
    z.e.QP = function() {
        bt(this) || (this.m().value = "", z.vd(this.mP, 10, this))
    };
    z.e.mP = function() {
        bt(this) || (this.m().value = this.Mb)
    };
    z.e.EQ = function() {
        this.Xh()
    };
    z.e.hasFocus = function() {
        return this.Ql
    };
    z.e.clear = function() {
        this.m().value = "";
        null != this.Xf && (this.Xf = "")
    };
    z.e.reset = function() {
        bt(this) && (this.clear(), this.Xh())
    };
    z.e.Ea = function(a) {
        null != this.Xf && (this.Xf = a);
        this.m().value = a;
        this.Xh()
    };
    z.e.Y = function() {
        return null != this.Xf ? this.Xf: bt(this) ? this.m().value: ""
    };
    z.e.Xh = function() {
        var a = this.m();
        Zs() ? this.m().placeholder != this.Mb && (this.m().placeholder = this.Mb) : at(this);
        z.dj(a, "label", this.Mb);
        bt(this) ? (a = this.m(), z.kj(a, this.Oo)) : (this.WQ || this.Ql || (a = this.m(), z.ij(a, this.Oo)), Zs() || z.vd(this.eV, this.PR, this))
    };
    z.e.Wa = function(a) {
        this.m().disabled = !a;
        z.vo(this.m(), this.Oo + "-disabled", !a)
    };
    z.e.isEnabled = function() {
        return ! this.m().disabled
    };
    z.e.eV = function() { ! this.m() || bt(this) || this.Ql || (this.m().value = this.Mb)
    };
    var $C = {
        SF: function(a, b) {
            return window.$.get(b ? "/node/AnswerFullVoteInfoV2": "/node/AnswerVoteInfoV2", {
                params: {
                    answer_id: a
                }
            })
        },
        oC: function(a, b) {
            return window.$.post("/node/AnswerVoteBarV2", {
                method: b,
                params: {
                    answer_id: a
                }
            },
            function(a) {
                a && a.r && z.X.alert("\x3cp\x3e" + a.msg + "\x3c/p\x3e")
            })
        },
        fB: function(a, b) {
            return window.$.post("/node/AnswerMetaV2", {
                method: "set_copyright",
                params: {
                    answer_id: a,
                    is_copyable: Number(b)
                }
            })
        }
    };
    z.x(ht, z.zs);
    ht.prototype.Ii = function(a) {
        var b = ht.v.Ii.call(this, a);
        a.select(this.ca.gy());
        return b
    };
    z.x(it, z.Hs);
    it.prototype.BU = ["根话题", "未归类话题"];
    it.prototype.Bm = function(a) {
        this.WA = a
    };
    it.prototype.Ei = function(a, b, c) {
        var d = (0, z.q)(function(a, b) {
            for (var d = [], k, m = 0; m < b.length; m++) for (var n = 1; n < b[m].length; n++) {
                k = b[m][n];
                var r = !0;
                this.pF && z.y(this.BU, 
                function(a) {
                    k[2] === a && (r = !1)
                });
                r && d.push(k)
            }
            this.WA && (d = this.WA(d, a));
            c(a, d)
        },
        this);
        it.v.Ei.call(this, a, b, d)
    };
    z.x(jt, z.zs);
    z.e = jt.prototype;
    z.e.Ii = function(a) {
        var b = ht.v.Ii.call(this, a),
        c = this.ca.gy(),
        d = this.ks();
        d.KJ = a;
        d.dispatchEvent("select");
        c.value = "";
        return b
    };
    z.e.Ea = function() {};
    z.e.update = function(a) {
        var b = z.tr(this.Y()); ! b || "搜索用户" === b || "搜索话题" === b || "在这里输入问题" === b || z.A(this.ca.Ax || [], b) || (b ? (0, window.unescape)((0, window.encodeURIComponent)(b)).length: 0) < this.VH || b === this.FH ? (this.ca.mj(), this.Ro = b) : (this.FH = null, this.ca.dispatchEvent({
            type: EF
        }), jt.v.update.call(this, a))
    };
    z.e.ge = function(a) {
        this.ca && z.ss(this.ca);
        a.target !== this.eb && (this.eb = a.target || null, this.ma && (this.ma.start(), this.dc.g(this.ma, "tick", this.sp)), this.Ro = this.Y(), Es(this));
        this.ma && this.ma.start();
        this.update(!0)
    };
    z.e.Xc = function() {
        this.ma && this.ma.stop();
        this.ca && this.ca.mj()
    };
    z.e.$b = function(a) {
        if (13 === a.keyCode) {
            if (this.ca.ub()) {
                if (this.ca.Hi()) return a.preventDefault(),
                a.stopPropagation(),
                !0;
                a.preventDefault();
                a.stopPropagation();
                this.ca.Wb = "";
                this.ca.Dc();
                this.update(!0);
                return ! 1
            }
            a.stopPropagation();
            a.preventDefault();
            return ! 1
        }
        jt.v.$b.call(this, a)
    };
    z.e.fr = function(a) {
        jt.v.fr.call(this, a);
        this.dc.g(a, "mousedown", 
        function(a) {
            a.stopPropagation();
            return ! 0
        })
    };
    z.x(kt, jt);
    kt.prototype.Ii = function(a) {
        var b = this.ks();
        b.KJ = a;
        b.dispatchEvent("select");
        return ! 1
    };
    z.x(z.lt, z.Vs);
    var EF = "before_update";
    z.e = z.lt.prototype;
    z.e.OE = !0;
    z.e.XU = function(a, b, c) {
        z.Pd(c, 
        function(a) {
            a = Rs(this, a, this.Wb);
            this.da.appendChild(this.h, a)
        },
        a);
        z.df(a.h, a.da.B("div", "zh-question-suggest-info", [a = a.da.B("a", {
            href: "javascript:;",
            title: "关闭",
            name: "close",
            id: "zh-question-suggest-info-close"
        },
        [a.da.B("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"]), 0);
        z.F(a, "click", 
        function() {
            var a = this.Cf;
            a.Xc();
            this.Dc();
            a.FH = a.Y()
        },
        !1, this)
    };
    z.e.ZU = function(a, b, c) {
        0 === c.length ? this.Dc() : (z.Pd(c, 
        function(a) {
            a = Rs(this, a, this.Wb);
            this.da.appendChild(this.h, a)
        },
        a), b = a.da.B("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.da.B("span", "x-m")]), z.df(a.h, b, 0), z.sm.Ab && z.F(b, "click", 
        function() {
            this.Cf.Xc();
            this.Dc()
        },
        !1, this))
    };
    z.e.bg = function() {
        return this.KJ
    };
    z.e.Bm = function(a) {
        this.Kd.Bm(a)
    };
    z.e.Dc = function() {
        if (this.OE) return z.lt.v.Dc.call(this)
    };
    z.e.Hi = function() {
        return - 1 === ts(this, this.$g) ? !1: z.lt.v.Hi.call(this)
    };
    z.e.mj = function() {
        z.sm.Ab ? z.ld(window.document, "click", (0, z.q)(this.Dc, this)) : z.lt.v.mj.call(this)
    };
    z.x(z.mt, z.Yj);
    var nt = "view",
    FF = "零一二三四五六七八九十".split("");
    z.e = z.mt.prototype;
    z.e.w = function(a) {
        this.h = a;
        this.wg = z.N("zm-tag-editor-labels", this.h);
        this.Ht && (this.data = ot(this));
        pt(this);
        this.Xd();
        this.Yb()
    };
    z.e.vl = function() {
        this.sc || (this.sc = z.O("div", "zm-tag-editor-editor", [this.On = z.O("div", "zg-section zg-clear"), this.Zd = z.O("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.hb = z.O("input", {
            "class": "zg-form-text-input zg-mr15",
            type: "text"
        }), z.O("a", {
            "class": "zg-mr15 zg-btn-blue",
            href: "#",
            name: "add",
            style: "display:none;"
        },
        "添加"), this.qF = z.O("a", {
            href: "#",
            name: "close"
        },
        "完成")]), this.zt = z.O("div", {
            className: "zm-tag-editor-maxcount zg-section",
            style: "display:none;"
        },
        [z.O("span", {},
        "最多只能为一个问题绑定 " + 
        this.yt + " 个话题"), z.O("a", {
            href: "#",
            name: "close"
        },
        "完成")])]), z.cf(this.sc, this.wg), this.Ie && (this.tz = new z.Ys(this.Ie), this.tz.w(this.hb), this.hb.title = this.Ie), this.pf(this.Zd))
    };
    z.e.pf = function(a, b) {
        this.W = new z.lt(b || "/topic/autocomplete", this.hb, null, null, a, !0);
        this.W.tg(!0);
        this.W.dk = this.ke;
        this.W.Bm(this.Bf());
        this.W.Ax = [this.Ie];
        this.o().g(this.W, "select", this.wf);
        this.o().g(this.W, "suggestionsupdate", this.Uq)
    };
    z.e.Dx = function(a) {
        return z.pb(this.data, 
        function(b) {
            return b[0] === a[1]
        })
    };
    z.e.Bf = function() {
        return (0, z.q)(function(a, b) {
            return rt(this, qt(this, a), b)
        },
        this)
    };
    z.e.Uq = function() {
        1 < this.W.Sa.length && !this.W.Sa[0][4] && z.qs(this.W)
    };
    z.e.Yb = function() {
        this.o().g(this.h, "click", this.Qa);
        z.Dp && this.o().g(z.Dp, "anon_change", this.Ij)
    };
    z.e.Ij = function(a) {
        a.rb ? z.W.add(this.h, "zm-tag-editor-disabled") : z.W.remove(this.h, "zm-tag-editor-disabled")
    };
    z.e.Qa = function(a) {
        var b = this.Ug(a.target);
        if (b && b.name) switch (a.preventDefault(), b.name) {
        case "edit":
            this.je(!0);
            break;
        case "add":
            (a = z.tr(ur(this.hb.value))) && a !== this.hb.title && this.Ue("", a);
            break;
        case "close":
            this.je(!1);
            break;
        case "remove":
            this.hA(b)
        }
    };
    z.e.je = z.Kq(function(a) {
        if (a && (this.dispatchEvent("start_editing"), !1 === this.dispatchEvent("beforeedit"))) return;
        this.status = a ? "edit": nt;
        this.vl();
        this.me();
        this.Xd();
        st(this)
    },
    !0);
    z.e.hA = function(a) {
        var b = a.id.split("-")[1],
        c = z.Oo(a).innerHTML;
        this.Ct && this.data.length <= this.Ct ? z.X.message("请至少绑定" + FF[this.Ct] + "个话题") : (this.data = z.mb(this.data, 
        function(a) {
            return b ? String(a[3]) !== b: a[1] !== c
        }), this.qp(b))
    };
    z.e.qp = function(a) {
        if (!this.pu || !this.pu.uc()) {
            this.pu = new z.Z(!0);
            var b = new z.wh;
            b.add("qid", this.pa).add("question_id", this.pa).add("topic_id", a);
            this.o().ya(this.pu, "complete", this.pQ);
            this.pu.ajax(this.TU, b.toString())
        }
    };
    z.e.pQ = function(a) {
        a = z.Sn(a.target);
        a.r ? z.X.message(a.msg) : (this.dispatchEvent("remove_tag"), pt(this), this.me(), st(this))
    };
    z.e.Xd = function() {
        this.status === nt ? (z.Q(this.wg, !0), this.sc && z.Q(this.sc, !1)) : (z.Q(this.wg, !1), this.sc && this.isEnabled && z.Q(this.sc, !0), this.zt && z.Q(this.zt, !1))
    };
    z.e.Ue = function(a, b) {
        this.kh || (this.dispatchEvent("add_tag"), this.kh = !0, this.xhr = new z.Z(!0), this.o().ya(this.xhr, "complete", this.Xv), this.xhr.ajax(this.uM, "qid\x3d" + this.pa + "\x26question_id\x3d" + this.pa + "\x26topic_id\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
    };
    z.e.wf = function() {
        var a = "",
        b = "",
        c = this.W.bg().slice(1);
        3 < c.length ? (a = c[3], b = c[0]) : b = c[1];
        z.pb(this.data, 
        function(c) {
            return c[3] && String(c[3]) === a || c[0] === b
        }) || (a || b) && this.Ue(a, b)
    };
    z.e.Xv = function() {
        this.kh = !1;
        var a = z.Sn(this.xhr);
        this.Am(a);
        st(this)
    };
    z.e.Am = function(a) {
        var b = null;
        a && a.r ? a.notify ? z.Kn(a.notify) : z.X.message(a.msg) : (4 < a.length && z.Kn(a[4]), this.LJ = b = a, this.data.push(b), tt(this), pt(this), this.me(), this.hb.value = "", this.dispatchEvent("select"))
    };
    z.e.zF = function(a) {
        return z.sr(a, "nor", !1)
    };
    z.e.me = function() {
        var a = z.nb(this.data, 
        function(a) {
            return ['\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e', this.zF(a), a.LW ? "": '\x3ca id\x3d"rmid-' + a[3] + '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e', "\x3c/span\x3e"].join("")
        },
        this);
        this.On.innerHTML = a.join("")
    };
    z.e.bg = function() {
        return this.LJ
    };
    z.e.Wa = function(a) {
        this.isEnabled = a;
        this.status = nt;
        this.Xd()
    };
    z.x(z.ut, z.mt);
    z.e = z.ut.prototype;
    z.e.w = function(a) {
        if (this.isEnabled = !a.getAttribute("data-disabled")) z.ut.v.w.call(this, a),
        this.je(!0),
        z.Q(this.qF, !1)
    };
    z.e.pf = function(a) {
        var b;
        this.nz && (b = "/topic/autocomplete?no_create\x3dtrue");
        z.ut.v.pf.call(this, a, b);
        this.W.Kd.pF = !1
    };
    z.e.Bf = function() {
        return (0, z.q)(function(a, b) {
            return z.mb(a, 
            function(a) {
                return 3 >= a.length ? !1: z.ao(this.data, 
                function(d) {
                    return d[1] === a[2] ? b === a[1] ? (a[0] = "plain_text", a[1] = '"' + b + '"已在现有列表中', !0) : !1: !0
                })
            },
            this)
        },
        this)
    };
    z.e.Ue = function(a, b) {
        this.kh || (this.kh = !0, this.xhr = new z.Z(!0), this.o().ya(this.xhr, "complete", this.Xv), a || (a = -1), this.nz ? this.xhr.ajax("/topic/add", "tid\x3d" + this.If + "\x26pid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)) : this.xhr.ajax("/topic/add", "tid\x3d" + this.If + "\x26cid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
    };
    z.e.zF = function(a) {
        return '\x3ca class\x3d"nor" href\x3d"/topic/' + a[1] + '/organize"\x3e' + a[0] + "\x3c/a\x3e"
    };
    z.e.qp = function(a) {
        if (!this.ea || !this.ea.uc()) {
            var b = new z.Z(!0);
            this.o().g(b, "success", 
            function() {
                var c = z.Sn(b);
                c.r ? z.X.message(c.msg) : (pt(this), this.me(), this.dispatchEvent({
                    type: "remove_tag",
                    data: {
                        id: a
                    }
                }))
            });
            this.nz ? b.ajax(this.rJ, "cid\x3d" + this.If + "\x26pid\x3d" + a) : b.ajax(this.rJ, "pid\x3d" + this.If + "\x26cid\x3d" + a);
            this.ea = b
        }
    };
    z.x(vt, z.mt);
    z.e = vt.prototype;
    z.e.w = function(a) {
        vt.v.w.call(this, a);
        this.je(!0);
        z.y(z.Le("a", null, a), 
        function(a) {
            z.Q(a, !1)
        });
        this.o().g(this.hb, "focus", 
        function() {
            this.Jq.val() && !this.cF && (this.cF = !0, this.fv());
            this.placeholder && (this.placeholder.zk("搜索话题"), Jn(this.placeholder))
        });
        this.kH = new Lp;
        this.kH.attach(this.hb);
        this.o().g(this.kH, "key", 
        function(a) {
            8 === a.keyCode && (1 === this.hb.value.length && (this.CD = !0, this.gN = (0, window.setTimeout)((0, z.q)(function() {
                this.CD = !1; (0, window.clearTimeout)(this.gN)
            },
            this))), this.hb.value.length || 
            this.CD || (this.data.pop(), this.me(), this.dispatchEvent("remove_tag")))
        });
        this.gW = new z.gl(this.fv, 2E3, this);
        this.o().g(this.Jq[0], "keyup", 
        function() {
            var a = this.Jq.val();
            this.Qu !== a && (this.gW.fire(), this.Qu = a)
        });
        this.o().g(this, ["remove_tag", "add_tag"], 
        function() {
            wt(this);
            0 < this.data.length && this.placeholder && (this.placeholder.zk("搜索话题"), Jn(this.placeholder));
            5 <= this.data.length ? (this.Wa(!1), this.Eq.show(), this.placeholder && this.placeholder.hide(), this.Dv.hide()) : (this.Wa(!0), this.Eq.hide(), this.placeholder && 
            this.placeholder.show(), this.Dv.show(), this.Eq.removeClass("light"))
        })
    };
    z.e.Dx = function(a) {
        return z.pb(this.data, 
        function(b) {
            return b[1] === a[1]
        })
    };
    z.e.qp = function() {
        this.dispatchEvent("remove_tag");
        pt(this);
        this.me()
    };
    z.e.vl = function() {
        this.sc || (vt.v.vl.call(this), z.W.add(this.sc, "zg-clear"), z.W.set(this.On, "zg-inline"), z.W.add(this.Zd, "zg-left"), z.W.remove(this.Zd, "zg-section"), z.W.set(this.hb, "zu-question-suggest-topic-input"), z.W.add(this.hb, "label-input-label"), this.Lq = (0, window.$)("\x3cdiv class\x3d'sug-con zg-clear' style\x3d'display:none;'\x3e\x3c/div\x3e").append("\x3cspan class\x3d'zg-gray-normal zg-left tip'\x3e推荐添加\x3c/span\x3e").append(this.FL = (0, window.$)("\x3cspan class\x3d'sugs zg-clear zg-inline'\x3e\x3c/span\x3e")).append(this.Ev = 
        (0, window.$)('\x3cimg data-src\x3d"' + z.sm.BB + '/img/spinner2.gif"\x3e')), this.Lq.insertAfter(this.h), this.Lq.on("click", "a[name\x3d'add']", (0, z.q)(function(a) {
            a = a.currentTarget;
            5 > this.data.length ? this.Ue((0, window.$)(a).attr("data-id"), (0, window.$)(a).attr("data-text")) : this.Eq.addClass("light")
        },
        this)), this.Dv = (0, window.$)('\x3clabel for\x3d"topic" class\x3d"zg-icon icon-magnify"\x3e\x3c/label\x3e'), (0, window.$)(this.Zd).prepend(this.Dv), this.placeholder = new z.wk(this.hb, {
            text: "搜索话题",
            xD: !0
        }), (0, window.$)(this.Zd).append(this.Eq = 
        (0, window.$)("\x3clabel class\x3d'err-tip' style\x3d'display:none;'\x3e最多添加五个话题\x3c/label\x3e")), this.o().g(this.sc, "click", this.GW))
    };
    z.e.GW = function(a) {
        z.Fr(this.h, a.target) || (a = z.N("zu-question-suggest-topic-input", this.sc), z.Lg(a) && a.focus())
    };
    z.e.fv = function() {
        this.cF && (this.Qu = this.Jq.val(), 8 > this.Qu.length ? (this.aq = [], wt(this)) : (this.bq && this.bq.abort(), this.bq = new z.Z(!1), this.o().g(this.bq, "success", this.FT), this.bq.ajax("/topic-question/autocomplete?token\x3d" + this.Qu + "\x26max_matches\x3d5\x26use_similar\x3d0", "GET"), this.Ev.attr("src", this.Ev.attr("data-src")).show()))
    };
    z.e.FT = function() {
        this.aq = z.Sn(this.bq)[0].slice(1);
        wt(this)
    };
    z.e.me = function() {
        var a = [];
        z.y(this.data, 
        function(b) {
            a.push(['\x3cdiv class\x3d"zm-tag-editor-edit-item"\x3e\x3cspan\x3e', b[0], '\x3c/span\x3e\x3ca id\x3d"rmid-', b[3], '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\x3c/div\x3e'].join(""))
        },
        this);
        this.On.innerHTML = a.join("")
    };
    z.e.reset = function() {
        this.data = [];
        pt(this);
        this.me()
    };
    z.e.hA = function(a) {
        var b = a.id.split("-")[1],
        c = z.Oo(a).innerHTML;
        this.data = z.mb(this.data, 
        function(a) {
            return b ? String(a[3]) !== b: a[1] !== c
        });
        this.qp(b)
    };
    z.e.Ue = function(a, b) {
        var c = [b, b, "", a];
        this.LJ = c;
        this.data.push(c);
        pt(this);
        this.me();
        this.hb.value = "";
        this.dispatchEvent("select");
        this.dispatchEvent("add_tag")
    };
    z.e.Wa = function(a) {
        this.hb && z.Q(this.hb, a)
    };
    z.e.trackEvent = function() {
        if (this.aq) {
            var a = 0,
            b = this.data.length;
            z.y(this.data, 
            function(b) {
                z.y(this.aq, 
                function(d) {
                    b[1] === d[1] && a++
                },
                this)
            },
            this);
            z.Y.tb({
                type: "ga_click_add_question",
                data: {
                    Ru: a,
                    total: b
                }
            })
        }
    };
    z.x(z.xt, z.ut);
    z.xt.prototype.Ue = function(a) {
        this.kh || (this.kh = !0, this.xhr = new z.Z(!0), this.o().ya(this.xhr, "complete", this.Xv), this.xhr.ajax(this.HD, "tid\x3d" + a + "\x26method\x3dadd"))
    };
    z.xt.prototype.qp = function(a) {
        this.kh || (this.kh = !0, this.xhr = new z.Z(!0), this.o().g(this.xhr, "complete", 
        function() {
            pt(this);
            this.me();
            this.kh = !1
        }), this.xhr.ajax(this.HD, "tid\x3d" + a + "\x26method\x3ddel"))
    };
    z.x(yt, z.xc);
    yt.prototype.restore = function(a) {
        var b = this.uu();
        a || this.H();
        return b
    };
    z.x(z.zt, yt);
    z.zt.prototype.Ap = function(a) {
        z.P(z.At(this, !0));
        z.P(z.At(this, !1));
        return a
    };
    z.zt.prototype.uu = function() {
        var a = null,
        b = z.At(this, !this.VA),
        c = z.At(this, this.VA);
        if (b && c) {
            var a = b.parentNode,
            b = z.lb(a.childNodes, b),
            d = c.parentNode,
            c = z.lb(d.childNodes, c);
            d == a && (this.VA ? b--:c--);
            a = z.hu(a, b, d, c);
            a = this.Ap(a);
            a.select()
        } else this.Ap();
        return a
    };
    z.zt.prototype.D = function() {
        this.Ap();
        this.da = null
    };
    z.x(z.Bt, z.Ld);
    z.e = z.Bt.prototype;
    z.e.setPosition = function(a, b, c) {
        if (this.node = a) this.Ub = z.qa(b) ? b: 1 != this.node.nodeType ? 0: this.Kc ? -1: 1;
        z.qa(c) && (this.depth = c)
    };
    z.e.Kg = function(a) {
        this.node = a.node;
        this.Ub = a.Ub;
        this.depth = a.depth;
        this.Kc = a.Kc;
        this.Br = a.Br
    };
    z.e.clone = function() {
        return new z.Bt(this.node, this.Kc, !this.Br, this.Ub, this.depth)
    };
    z.e.Wp = z.aa(31);
    z.e.next = function() {
        var a;
        if (this.Ak) {
            if (!this.node || this.Br && 0 == this.depth) throw z.Od;
            a = this.node;
            var b = this.Kc ? -1: 1;
            if (this.Ub == b) {
                var c = this.Kc ? a.lastChild: a.firstChild;
                c ? this.setPosition(c) : this.setPosition(a, -1 * b)
            } else(c = this.Kc ? a.previousSibling: a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
            this.depth += this.Ub * (this.Kc ? -1: 1)
        } else this.Ak = !0;
        a = this.node;
        if (!this.node) throw z.Od;
        return a
    };
    z.e.bm = function() {
        return this.Ak
    };
    z.e.equals = function(a) {
        return a.node == this.node && (!this.node || a.Ub == this.Ub)
    };
    z.e.splice = function(a) {
        var b = this.node,
        c = this.Kc ? 1: -1;
        this.Ub == c && (this.Ub = -1 * c, this.depth += this.Ub * (this.Kc ? -1: 1));
        this.Kc = !this.Kc;
        z.Bt.prototype.next.call(this);
        this.Kc = !this.Kc;
        for (var c = z.oa(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) z.cf(c[d], b);
        z.P(b)
    };
    z.e = Ct.prototype;
    z.e.Qb = function() {
        var a = this.tc();
        return 1 == a.nodeType ? a: a.parentNode
    };
    z.e.eh = function() {
        return ! 1
    };
    z.e.ua = function() {
        return z.Je(z.C ? this.tc() : this.aa())
    };
    z.e.Va = function() {
        return z.Se(this.ua())
    };
    z.e.containsNode = function(a, b) {
        return this.Jg(z.zu(a), b)
    };
    z.e.Di = function(a) {
        this.isCollapsed() || this.zf();
        return this.insertNode(a, !0)
    };
    z.x(Jt, z.Bt);
    z.x(Kt, Ct);
    Kt.prototype.Jg = function(a, b) {
        var c = z.Et(this),
        d = z.Et(a);
        return (b ? z.pb: z.ao)(d, 
        function(a) {
            return z.pb(c, 
            function(c) {
                return c.Jg(a, b)
            })
        })
    };
    Kt.prototype.insertNode = function(a, b) {
        b ? z.bf(a, this.aa()) : z.cf(a, this.la());
        return a
    };
    Kt.prototype.fq = function(a, b) {
        this.insertNode(a, !0);
        this.insertNode(b, !1)
    };
    z.x(z.Lt, Jt);
    z.e = z.Lt.prototype;
    z.e.qs = function() {
        return 3 != this.node.nodeType ? -1: this.node == this.xa ? this.Ca: 0
    };
    z.e.ms = function() {
        return 3 != this.node.nodeType ? -1: this.node == this.ta ? this.Ba: this.node.nodeValue.length
    };
    z.e.aa = function() {
        return this.xa
    };
    z.e.la = function() {
        return this.ta
    };
    z.e.Jo = function() {
        return this.bm() && this.node == this.ta && (!this.Ba || 1 != this.Ub)
    };
    z.e.next = function() {
        if (this.Jo()) throw z.Od;
        return z.Lt.v.next.call(this)
    };
    z.e.Wp = z.aa(30);
    z.e.Kg = function(a) {
        this.xa = a.xa;
        this.ta = a.ta;
        this.Ca = a.Ca;
        this.Ba = a.Ba;
        this.sf = a.sf;
        z.Lt.v.Kg.call(this, a)
    };
    z.e.clone = function() {
        var a = new z.Lt(this.xa, this.Ca, this.ta, this.Ba, this.sf);
        a.Kg(this);
        return a
    };
    z.e = Mt.prototype;
    z.e.hj = "";
    z.e.set = function(a) {
        this.hj = "" + a
    };
    z.e.append = function(a, b, c) {
        this.hj += a;
        if (null != b) for (var d = 1; d < arguments.length; d++) this.hj += arguments[d];
        return this
    };
    z.e.clear = function() {
        this.hj = ""
    };
    z.e.toString = function() {
        return this.hj
    };
    z.e = Nt.prototype;
    z.e.fy = function() {
        return Ot(this, !0)
    };
    z.e.Xx = function() {
        return Ot(this, !1)
    };
    z.e.Jg = function(a, b) {
        var c = b && !a.isCollapsed(),
        d = a.O;
        try {
            return c ? 0 <= this.ze(d, 0, 1) && 0 >= this.ze(d, 1, 0) : 0 <= this.ze(d, 0, 0) && 0 >= this.ze(d, 1, 1)
        } catch(f) {
            if (!z.C) throw f;
            return ! 1
        }
    };
    z.e.containsNode = function(a, b) {
        return this.Jg(Yt(a), b)
    };
    z.e.$n = function() {
        var a = new Mt;
        z.Pd(this, 
        function(b, c, d) {
            3 == b.nodeType ? a.append(z.Na(b.nodeValue.substring(d.qs(), d.ms()))) : 1 == b.nodeType && ( - 1 == d.Ub ? z.Ze(b) && a.append("\x3c/" + b.tagName + "\x3e") : (c = b.cloneNode(!1), c = z.Lo(c), z.C && "LI" == b.tagName ? a.append(c) : (b = c.lastIndexOf("\x3c"), a.append(b ? c.substr(0, b) : c))))
        },
        this);
        return a.toString()
    };
    z.e.gd = function() {
        return new z.Lt(this.aa(), this.va(), this.la(), this.Ma())
    };
    z.x(Pt, Nt);
    z.e = Pt.prototype;
    z.e.clone = function() {
        return new this.constructor(this.O.cloneRange())
    };
    z.e.tc = function() {
        return this.O.commonAncestorContainer
    };
    z.e.aa = function() {
        return this.O.startContainer
    };
    z.e.va = function() {
        return this.O.startOffset
    };
    z.e.la = function() {
        return this.O.endContainer
    };
    z.e.Ma = function() {
        return this.O.endOffset
    };
    z.e.ze = function(a, b, c) {
        return this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START: z.t.Range.START_TO_END: 1 == b ? z.t.Range.END_TO_START: z.t.Range.END_TO_END, a)
    };
    z.e.isCollapsed = function() {
        return this.O.collapsed
    };
    z.e.Id = function() {
        return this.O.toString()
    };
    z.e.cg = function() {
        var a = z.J(this.O.startContainer).B("DIV");
        a.appendChild(this.O.cloneContents());
        a = a.innerHTML;
        if (z.Ja(a, "\x3c") || !this.isCollapsed() && !z.Va(a, "\x3c")) return a;
        var b = this.tc(),
        b = 1 == b.nodeType ? b: b.parentNode;
        return z.Lo(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
    };
    z.e.select = function(a) {
        var b = z.Se(z.Je(this.aa()));
        this.Ip(b.getSelection(), a)
    };
    z.e.Ip = function(a) {
        a.removeAllRanges();
        a.addRange(this.O)
    };
    z.e.zf = function() {
        var a = this.O;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == z.Jo(b) && z.P(b);
                c && "" == z.Jo(c) && z.P(c)
            }
        }
        if (z.Kl) {
            var b = this.aa(),
            c = this.va(),
            d = this.la(),
            f = this.Ma(),
            g = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue, z.P(g), a.setStart(b, c), a.setEnd(d, f))
        }
    };
    z.e.surroundContents = function(a) {
        this.O.surroundContents(a);
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = this.O.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    z.e.fq = function(a, b) {
        var c = z.Se(z.Je(this.aa()));
        if (c = z.wu(c)) var d = c.aa(),
        f = c.la(),
        g = c.va(),
        h = c.Ma();
        var k = this.O.cloneRange(),
        m = this.O.cloneRange();
        k.collapse(!1);
        m.collapse(!0);
        k.insertNode(b);
        m.insertNode(a);
        k.detach();
        m.detach();
        if (c) {
            if (3 == d.nodeType) for (; g > d.length;) {
                g -= d.length;
                do d = d.nextSibling;
                while (d == a || d == b)
            }
            if (3 == f.nodeType) for (; h > f.length;) {
                h -= f.length;
                do f = f.nextSibling;
                while (f == a || f == b)
            }
            z.hu(d, g, f, h).select()
        }
    };
    z.e.collapse = function(a) {
        this.O.collapse(a)
    };
    z.x(Tt, Pt);
    Tt.prototype.Ip = function(a, b) { ! b || this.isCollapsed() ? Tt.v.Ip.call(this, a, b) : (a.collapse(this.la(), this.Ma()), a.extend(this.aa(), this.va()))
    };
    z.x(z.Ut, Nt);
    z.e = z.Ut.prototype;
    z.e.clone = function() {
        var a = new z.Ut(this.O.duplicate(), this.Sr);
        a.pg = this.pg;
        a.xa = this.xa;
        a.ta = this.ta;
        return a
    };
    z.e.Dd = function() {
        this.pg = this.xa = this.ta = null;
        this.Ca = this.Ba = -1
    };
    z.e.tc = function() {
        if (!this.pg) {
            var a = this.O.text,
            b = this.O.duplicate(),
            c = a.replace(/ +$/, ""); (c = a.length - c.length) && b.moveEnd("character", -c);
            c = b.parentElement();
            b = z.op(b.htmlText).length;
            if (this.isCollapsed() && 0 < b) return this.pg = c;
            for (; b > z.op(c.outerHTML).length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == $t(c.firstChild) && Rt(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = Wt(this, c));
            this.pg = c
        }
        return this.pg
    };
    z.e.aa = function() {
        this.xa || (this.xa = Xt(this, 1), this.isCollapsed() && (this.ta = this.xa));
        return this.xa
    };
    z.e.va = function() {
        0 > this.Ca && (this.Ca = Zt(this, 1), this.isCollapsed() && (this.Ba = this.Ca));
        return this.Ca
    };
    z.e.la = function() {
        if (this.isCollapsed()) return this.aa();
        this.ta || (this.ta = Xt(this, 0));
        return this.ta
    };
    z.e.Ma = function() {
        if (this.isCollapsed()) return this.va();
        0 > this.Ba && (this.Ba = Zt(this, 0), this.isCollapsed() && (this.Ca = this.Ba));
        return this.Ba
    };
    z.e.ze = function(a, b, c) {
        return this.O.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == c ? "Start": "End"), a)
    };
    z.e.fg = z.aa(35);
    z.e.isCollapsed = function() {
        return 0 == this.O.compareEndPoints("StartToEnd", this.O)
    };
    z.e.Id = function() {
        return this.O.text
    };
    z.e.cg = function() {
        return this.O.htmlText
    };
    z.e.select = function() {
        this.O.select()
    };
    z.e.zf = function() {
        if (!this.isCollapsed() && this.O.htmlText) {
            var a = this.aa(),
            b = this.la(),
            c = this.O.text,
            d = this.O.duplicate();
            d.moveStart("character", 1);
            d.moveStart("character", -1);
            d.text == c && (this.O = d);
            this.O.text = "";
            this.Dd();
            c = this.aa();
            d = this.va();
            try {
                var f = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && f && 3 == f.nodeType && (a.nodeValue += f.nodeValue, z.P(f), this.O = Vt(c), this.O.move("character", d), this.Dd())
            } catch(g) {}
        }
    };
    z.e.surroundContents = function(a) {
        z.P(a);
        a.innerHTML = this.O.htmlText; (a = au(this.O, a)) && this.O.moveToElementText(a);
        this.Dd();
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = bu(this.O.duplicate(), a, b);
        this.Dd();
        return c
    };
    z.e.fq = function(a, b) {
        var c = this.O.duplicate(),
        d = this.O.duplicate();
        bu(c, a, !0);
        bu(d, b, !1);
        this.Dd()
    };
    z.e.collapse = function(a) {
        this.O.collapse(a);
        a ? (this.ta = this.xa, this.Ba = this.Ca) : (this.xa = this.ta, this.Ca = this.Ba)
    };
    z.x(cu, Pt);
    cu.prototype.Ip = function(a) {
        a.collapse(this.aa(), this.va());
        this.la() == this.aa() && this.Ma() == this.va() || a.extend(this.la(), this.Ma());
        0 == a.rangeCount && a.addRange(this.O)
    };
    z.x(du, Pt);
    du.prototype.ze = function(a, b, c) {
        return z.E("528") ? du.v.ze.call(this, a, b, c) : this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START: z.t.Range.END_TO_START: 1 == b ? z.t.Range.START_TO_END: z.t.Range.END_TO_END, a)
    };
    du.prototype.Ip = function(a, b) {
        b ? a.setBaseAndExtent(this.la(), this.Ma(), this.aa(), this.va()) : a.setBaseAndExtent(this.aa(), this.va(), this.la(), this.Ma())
    };
    z.x(z.fu, Ct);
    z.e = z.fu.prototype;
    z.e.clone = function() {
        var a = new z.fu;
        a.Th = this.Th && this.Th.clone();
        a.xa = this.xa;
        a.Ca = this.Ca;
        a.ta = this.ta;
        a.Ba = this.Ba;
        a.sf = this.sf;
        return a
    };
    z.e.oi = function() {
        return "text"
    };
    z.e.ee = function() {
        return z.ju(this).O
    };
    z.e.Dd = function() {
        this.xa = this.Ca = this.ta = this.Ba = null
    };
    z.e.Hj = function() {
        return 1
    };
    z.e.Ee = function() {
        return this
    };
    z.e.tc = function() {
        return z.ju(this).tc()
    };
    z.e.aa = function() {
        return this.xa || (this.xa = z.ju(this).aa())
    };
    z.e.va = function() {
        return null != this.Ca ? this.Ca: this.Ca = z.ju(this).va()
    };
    z.e.fy = function() {
        return z.ju(this).fy()
    };
    z.e.la = function() {
        return this.ta || (this.ta = z.ju(this).la())
    };
    z.e.Ma = function() {
        return null != this.Ba ? this.Ba: this.Ba = z.ju(this).Ma()
    };
    z.e.Xx = function() {
        return z.ju(this).Xx()
    };
    z.e.eh = function() {
        return this.sf
    };
    z.e.Jg = function(a, b) {
        var c = a.oi();
        return "text" == c ? z.ju(this).Jg(z.ju(a), b) : "control" == c ? (c = a.ji(), (b ? z.pb: z.ao)(c, 
        function(a) {
            return this.containsNode(a, b)
        },
        this)) : !1
    };
    z.e.fg = z.aa(34);
    z.e.isCollapsed = function() {
        return z.ju(this).isCollapsed()
    };
    z.e.Id = function() {
        return z.ju(this).Id()
    };
    z.e.$n = function() {
        return z.ju(this).$n()
    };
    z.e.cg = function() {
        return z.ju(this).cg()
    };
    z.e.gd = function() {
        return new z.Lt(this.aa(), this.va(), this.la(), this.Ma())
    };
    z.e.select = function() {
        z.ju(this).select(this.sf)
    };
    z.e.zf = function() {
        z.ju(this).zf();
        this.Dd()
    };
    z.e.surroundContents = function(a) {
        a = z.ju(this).surroundContents(a);
        this.Dd();
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = z.ju(this).insertNode(a, b);
        this.Dd();
        return c
    };
    z.e.fq = function(a, b) {
        z.ju(this).fq(a, b);
        this.Dd()
    };
    z.e.YA = function() {
        return new ku(this)
    };
    z.e.collapse = function(a) {
        a = this.eh() ? !a: a;
        this.Th && this.Th.collapse(a);
        a ? (this.ta = this.xa, this.Ba = this.Ca) : (this.xa = this.ta, this.Ca = this.Ba);
        this.sf = !1
    };
    z.x(ku, yt);
    ku.prototype.uu = function() {
        return z.hu(this.lD, this.PM, this.tF, this.OO)
    };
    ku.prototype.D = function() {
        ku.v.D.call(this);
        this.tF = this.lD = null
    };
    z.x(z.lu, Kt);
    z.e = z.lu.prototype;
    z.e.Dd = function() {
        this.Xp = this.fb = null
    };
    z.e.clone = function() {
        return nu.apply(this, this.ji())
    };
    z.e.oi = function() {
        return "control"
    };
    z.e.ee = function() {
        return this.O || window.document.body.createControlRange()
    };
    z.e.Hj = function() {
        return this.O ? this.O.length: 0
    };
    z.e.Ee = function(a) {
        a = this.O.item(a);
        return gu(Yt(a), void 0)
    };
    z.e.tc = function() {
        return Mo.apply(null, this.ji())
    };
    z.e.aa = function() {
        return ou(this)[0]
    };
    z.e.va = function() {
        return 0
    };
    z.e.la = function() {
        var a = ou(this),
        b = z.kb(a);
        return z.qb(a, 
        function(a) {
            return z.mf(a, b)
        })
    };
    z.e.Ma = function() {
        return this.la().childNodes.length
    };
    z.e.ji = function() {
        if (!this.fb && (this.fb = [], this.O)) for (var a = 0; a < this.O.length; a++) this.fb.push(this.O.item(a));
        return this.fb
    };
    z.e.fg = z.aa(33);
    z.e.isCollapsed = function() {
        return ! this.O || !this.O.length
    };
    z.e.Id = function() {
        return ""
    };
    z.e.$n = function() {
        return z.nb(ou(this), z.Lo).join("")
    };
    z.e.cg = function() {
        return this.$n()
    };
    z.e.gd = function() {
        return new qu(this)
    };
    z.e.select = function() {
        this.O && this.O.select()
    };
    z.e.zf = function() {
        if (this.O) {
            for (var a = [], b = 0, c = this.O.length; b < c; b++) a.push(this.O.item(b));
            z.y(a, z.P);
            this.collapse(!1)
        }
    };
    z.e.Di = function(a) {
        a = this.insertNode(a, !0);
        this.isCollapsed() || this.zf();
        return a
    };
    z.e.YA = function() {
        return new pu(this)
    };
    z.e.collapse = function() {
        this.O = null;
        this.Dd()
    };
    z.x(pu, yt);
    pu.prototype.uu = function() {
        for (var a = (this.fb.length ? z.Je(this.fb[0]) : window.document).body.createControlRange(), b = 0, c = this.fb.length; b < c; b++) a.addElement(this.fb[b]);
        return mu(a)
    };
    pu.prototype.D = function() {
        pu.v.D.call(this);
        delete this.fb
    };
    z.x(qu, Jt);
    z.e = qu.prototype;
    z.e.qs = function() {
        return 0
    };
    z.e.ms = function() {
        return 0
    };
    z.e.aa = function() {
        return this.xa
    };
    z.e.la = function() {
        return this.ta
    };
    z.e.Jo = function() {
        return ! this.depth && !this.fb.length
    };
    z.e.next = function() {
        if (this.Jo()) throw z.Od;
        if (!this.depth) {
            var a = this.fb.shift();
            this.setPosition(a, 1, 1);
            return a
        }
        return qu.v.next.call(this)
    };
    z.e.Kg = function(a) {
        this.fb = a.fb;
        this.xa = a.xa;
        this.ta = a.ta;
        qu.v.Kg.call(this, a)
    };
    z.e.clone = function() {
        var a = new qu(null);
        a.Kg(this);
        return a
    };
    z.x(z.ru, Kt);
    z.e = z.ru.prototype;
    z.e.Dd = function() {
        this.rm = [];
        this.Cr = this.Im = null
    };
    z.e.clone = function() {
        var a = this.Of,
        b = new z.ru;
        b.Of = z.vb(a);
        return b
    };
    z.e.oi = function() {
        return "mutli"
    };
    z.e.ee = function() {
        return this.Of[0]
    };
    z.e.Hj = function() {
        return this.Of.length
    };
    z.e.Ee = function(a) {
        this.rm[a] || (this.rm[a] = gu(eu(this.Of[a]), void 0));
        return this.rm[a]
    };
    z.e.tc = function() {
        if (!this.Cr) {
            for (var a = [], b = 0, c = this.Hj(); b < c; b++) a.push(this.Ee(b).tc());
            this.Cr = Mo.apply(null, a)
        }
        return this.Cr
    };
    z.e.aa = function() {
        return tu(this)[0].aa()
    };
    z.e.va = function() {
        return tu(this)[0].va()
    };
    z.e.la = function() {
        return z.kb(tu(this)).la()
    };
    z.e.Ma = function() {
        return z.kb(tu(this)).Ma()
    };
    z.e.fg = z.aa(32);
    z.e.isCollapsed = function() {
        return 0 == this.Of.length || 1 == this.Of.length && this.Ee(0).isCollapsed()
    };
    z.e.Id = function() {
        return z.nb(z.Et(this), 
        function(a) {
            return a.Id()
        }).join("")
    };
    z.e.$n = function() {
        return this.cg()
    };
    z.e.cg = function() {
        return z.nb(z.Et(this), 
        function(a) {
            return a.cg()
        }).join("")
    };
    z.e.gd = function() {
        return new vu(this)
    };
    z.e.select = function() {
        var a = Dt(this.Va());
        a.removeAllRanges();
        for (var b = 0, c = this.Hj(); b < c; b++) a.addRange(this.Ee(b).ee())
    };
    z.e.zf = function() {
        z.y(z.Et(this), 
        function(a) {
            a.zf()
        })
    };
    z.e.YA = function() {
        return new uu(this)
    };
    z.e.collapse = function(a) {
        if (!this.isCollapsed()) {
            var b = a ? this.Ee(0) : this.Ee(this.Hj() - 1);
            this.Dd();
            b.collapse(a);
            this.rm = [b];
            this.Im = [b];
            this.Of = [b.ee()]
        }
    };
    z.x(uu, yt);
    uu.prototype.uu = function() {
        var a = z.nb(this.ZA, 
        function(a) {
            return a.restore()
        });
        return su(a)
    };
    uu.prototype.D = function() {
        uu.v.D.call(this);
        z.y(this.ZA, 
        function(a) {
            a.H()
        });
        delete this.ZA
    };
    z.x(vu, Jt);
    z.e = vu.prototype;
    z.e.qs = function() {
        return this.gg[this.ml].qs()
    };
    z.e.ms = function() {
        return this.gg[this.ml].ms()
    };
    z.e.aa = function() {
        return this.gg[0].aa()
    };
    z.e.la = function() {
        return z.kb(this.gg).la()
    };
    z.e.Jo = function() {
        return this.gg[this.ml].Jo()
    };
    z.e.next = function() {
        try {
            var a = this.gg[this.ml],
            b = a.next();
            this.setPosition(a.node, a.Ub, a.depth);
            return b
        } catch(c) {
            if (c !== z.Od || this.gg.length - 1 == this.ml) throw c;
            this.ml++;
            return this.next()
        }
    };
    z.e.Kg = function(a) {
        this.gg = z.vb(a.gg);
        vu.v.Kg.call(this, a)
    };
    z.e.clone = function() {
        var a = new vu(null);
        a.Kg(this);
        return a
    };
    z.x(z.Cu, z.Ld);
    z.Cu.prototype.next = function() {
        var a = this.fI;
        if (!a) throw z.Od;
        this.fI = this.hV ? a.previousSibling: a.nextSibling;
        return a
    };
    z.x(Du, z.Cu);
    var Ju = {
        IMG: !0,
        IFRAME: !0,
        EMBED: !0
    };
    var GF = function() {
        if (z.Wl) return Nu(/Firefox\/([0-9.]+)/);
        if (z.C || z.Gc || z.vg) return z.Jc;
        if (z.Jf) return Nu(/Chrome\/([0-9.]+)/);
        if (z.Yl && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod"))) return Nu(/Version\/([0-9.]+)/);
        if (z.Vi || z.Wj) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z.Bb)) return a[1] + "." + a[2]
        } else if (z.Xl) return (a = Nu(/Android\s+([0-9.]+)/)) ? a: Nu(/Version\/([0-9.]+)/);
        return ""
    } ();
    var JF,
    KF,
    MF,
    MA,
    RF,
    SF;
    z.HF = z.C && !(9 <= z.Ug);
    z.IF = z.B || z.D || z.vg || z.Gc || z.C && 9 <= z.Ug;
    z.DA = z.C || z.D || z.vg || z.Gc || !1;
    JF = z.D || !1;
    KF = z.C || z.D || z.vg;
    z.LF = z.B || z.D;
    z.D && z.E("534.16");
    MF = z.B && !0;
    z.NF = z.B || z.D || z.vg;
    z.OF = z.B || z.vg;
    z.C && z.E("7.0");
    z.PF = z.B && z.E("1.8") || z.D || z.vg;
    MA = z.D || z.C && z.E("9");
    z.C || z.Gc || z.vg || z.B && z.E("1.9");
    z.QF = z.B || z.D && !z.E("527");
    RF = z.C || z.vg;
    SF = z.C || z.Gc || z.D && z.E("525");
    z.TF = z.D && !z.E("531");
    z.UF = z.D && !z.E("528");
    z.B && z.E("1.9") || z.C || z.Gc || z.vg || z.D && z.E("531");
    z.VF = z.C || z.Gc || z.B || z.vg;
    z.WF = z.B || z.D && !z.E("526");
    z.XF = z.C || z.vg;
    z.YF = !z.C && !z.vg;
    z.ZF = !z.D && !z.Gc;
    z.Jf && 0 <= z.$a(GF, "4") || z.Yl && z.E("533") || z.B && z.E("2.0") || z.C && z.E("10");
    z.$F = z.vg && z.E("11.10");
    z.Jf && z.$a(GF, "12");
    z.x(z.bv, z.zt);
    z.bv.prototype.Ap = function(a) {
        var b = z.At(this, !0),
        c = z.At(this, !1),
        b = b && c ? Mo(b, c) : b || c;
        z.bv.v.Ap.call(this);
        if (a) return Uu(b, a);
        b && (a = z.wu(z.Se(z.Je(b))), (a = Uu(b, a)) && a.select())
    };
    z.x(z.cv, z.R);
    z.aG = 0;
    z.dv = [];
    z.cv.prototype.kc = null;
    z.cv.prototype.Bl = !1;
    z.cv.prototype.Vt = 0;
    var bG = z.C ? "styleFloat": "cssFloat",
    hv = ["position", "top", "left", "width", bG],
    iv = ["position", "top", "left", "display", bG, "marginTop", "marginLeft", "marginRight", "marginBottom"];
    z.e = z.cv.prototype;
    z.e.B = function() {
        z.cv.v.B.call(this);
        this.Z(this.m())
    };
    z.e.Z = function(a) {
        z.cv.v.Z.call(this, a);
        z.W.add(a, "goog-scrollfloater")
    };
    z.e.C = function() {
        z.cv.v.C.call(this);
        this.rw = z.Qg(window.document.body).top - 2;
        this.kc || (this.kc = this.K().B("div", {
            style: "visibility:hidden"
        }));
        this.Vt = z.Xn(this.m()).y;
        z.ev(this, this.zu);
        var a = this.hq = new z.gl(this.tq, 150, this);
        this.o().g(window, "scroll", (0, z.q)(a.fire, a));
        this.o().g(window, "resize", z.Rr(150, this.wy))
    };
    z.e.D = function() {
        z.cv.v.D.call(this);
        z.tb(z.dv, this);
        this.hq.H();
        this.kz && (z.aG -= this.wE);
        delete this.kc
    };
    z.e.tq = function() {
        this.zu && (z.wf(this.K()).y + this.rw > this.Vt ? gv(this) : z.fv(this))
    };
    z.e.Dp = function() {
        var a = this.m(),
        b = this.rw; ! this.kz && 0 < z.aG && (b += z.aG);
        a.style.top = b + "px"
    };
    z.e.wy = function() {
        z.fv(this);
        this.Vt = z.Xn(this.m()).y;
        this.tq()
    };
    z.x(jv, z.cv);
    jv.prototype.tq = function() {
        var a = kv(this.tag);
        if (this.zu && (!a || a === this)) {
            var a = this.LU.getBoundingClientRect(),
            b = this.rw + z.aG,
            c = b + this.RI;
            a.top < b && a.bottom > c ? gv(this) : z.fv(this)
        }
    };
    z.la(lv);
    lv.prototype.$e = function(a, b, c) {
        z.pg("richtexteditor", 
        function() {
            var d = window.ZH.createRichTextEditor(a, b),
            f = d[0],
            d = d[1];
            c && c(f, d)
        })
    };
    mv.prototype.defaults = {
        bV: [],
        SA: [],
        FN: !0
    };
    var ov = "data-tip class style id bgcolor color size width height".split(" ");
    mv.prototype.Fg = function() {
        var a = this;
        if (this.J.FN) this.X.on("paste", 
        function() { (0, window.setTimeout)(function() {
                pv(a.X, qv(a))
            })
        })
    };
    z.x(rv, z.G);
    z.e = rv.prototype;
    z.e.defaults = {
        Zm: {
            ke: 6,
            content: "",
            method: "GET",
            source: "/people/autocomplete"
        },
        qU: "mention-popup",
        qk: window.document.body,
        aD: "activated"
    };
    z.e.D = function() {
        this.Kr();
        z.P(this.h);
        this.h = null;
        rv.v.D.call(this)
    };
    z.e.yw = function() {
        var a = this.h = z.Xe(this.HW);
        this.vp = a.getElementsByTagName("input")[0];
        a.className = this.J.qU;
        a.style.display = "none";
        this.J.qk.appendChild(a)
    };
    z.e.tc = function() {
        return this.J.qk
    };
    z.e.HW = '\x3cdiv\x3e\x3cdiv class\x3d"writing-bg"\x3e\x3cinput\x3e\x3c/div\x3e\x3cdiv class\x3d"tip"\x3e想用 @ 提到谁？\x3c/div\x3e\x3c/div\x3e';
    z.e.template = (0, z.Sv)('\x3c% if (data.id) { %\x3e\x3cimg class\x3d"avatar" src\x3d"\x3c%\x3davatar%\x3e"\x3e\x3cdiv class\x3d"body"\x3e\x3cspan class\x3d"name"\x3e\x3c%\x3dlabel%\x3e\x3c/span\x3e\x3cspan class\x3d"bio"\x3e\x3c%\x3dheadline%\x3e\x3c/span\x3e\x3c/div\x3e\x3c% } %\x3e');
    z.e.ub = function() {
        return z.Lg(this.h)
    };
    z.e.open = function() {
        this.ub() || (z.Q(this.h, !0), this.vp.focus(), this.Fg(), this.dispatchEvent("open"))
    };
    z.e.close = function() {
        this.ub() && (z.Q(this.h, !1), z.W.remove(this.h, this.J.aD), this.vp.value = "", this.vp.blur(), this.Kr(), this.dispatchEvent("close"))
    };
    z.e.qI = function(a) {
        this.ub() && !z.mf(this.h, a.target) && sv(this, a)
    };
    z.e.kp = function(a) {
        var b = a.keyCode,
        c = this.vp;
        if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b)) sv(this, a),
        a.preventDefault(),
        a.stopPropagation()
    };
    z.e.Fg = function() {
        z.F(window.document, "click", this.qI, !1, this);
        z.F(this.h, "keydown", this.kp, !1, this)
    };
    z.e.Kr = function() {
        z.md(window.document, "click", this.qI, !1, this);
        z.md(this.h, "keydown", this.kp, !1, this)
    };
    z.e.pf = function() {
        var a = this,
        b = this.J.Zm,
        c = new z.Ws(this.vp, {
            yk: this.h,
            ke: b.ke,
            source: b.source,
            select: function(b) { (0, window.setTimeout)(function() {
                    a.close();
                    a.dispatchEvent({
                        type: "select",
                        data: {
                            oU: b
                        }
                    })
                });
                return ""
            },
            td: function(b, c, g) {
                g.innerHTML = a.template(b.data)
            }
        });
        c.kB(b.method);
        c.ia(b.content);
        c.addEventListener("suggestionsupdate", 
        function() {
            z.W.enable(this.h, this.J.aD, c.ub())
        },
        !1, this);
        this.ca = c
    };
    z.e.position = function(a) {
        z.Ag(this.h, a)
    };
    z.x(tv, z.G);
    var wv = !!window.getSelection;
    tv.prototype.defaults = {
        Zm: {},
        qk: window.document.body,
        So: "member_mention",
        Ks: "mention-holder",
        position: function(a, b) {
            a.x += b.width + 7;
            a.y -= 5;
            z.C && 7 < z.Jc && (a.y += b.height / 2 - 9)
        }
    };
    var Dv = z.Gb({
        TX: "member_mention"
    });
    tv.prototype.m = function() {
        return this.input
    };
    tv.prototype.Fg = function() {
        var a = this.qg;
        z.F(a, "cancel", 
        function(a) {
            var c = uv(this);
            a = a.data.originalEvent;
            c && "click" !== a.type && ("keydown" === a.type && 32 === a.keyCode && (c = c.parentNode.insertBefore(window.document.createTextNode(" "), c.nextSibling)), vv(this, c))
        },
        !1, this);
        z.F(a, "select", 
        function(a) {
            var c = a.data.oU;
            a = z.N(this.J.Ks, this.input);
            var c = this.Gr(c),
            d = a.previousSibling,
            f = window.document.createTextNode(" ");
            z.Qo(c, a);
            z.cf(f, c);
            d && 3 === d.nodeType && !z.rp(z.pf(d), " ") && z.bf(window.document.createTextNode(" "), 
            c);
            vv(this, f)
        },
        !1, this);
        z.F(this.input, "click", 
        function() {
            a.ub() && uv(this)
        },
        !1, this);
        z.F(this.input, "keydown", 
        function(a) {
            var c;
            if (8 === a.keyCode && (c = z.wu())) {
                a = c.aa();
                var d = c.la(),
                f = c.va();
                c = c.Ma();
                var g = !1;
                Cv(a.parentNode) && (f = 0, g = !0);
                Cv(d.parentNode) && (c = d.length, g = !0);
                g && z.hu(a, f, d, c).select()
            }
        },
        !1, this);
        z.F(this.input, z.Uc || z.Vi || z.Wj ? "keypress": "keyup", 
        function(a) {
            function c(a, b) {
                if (3 !== a.nodeType || "@" === a.nodeValue && xv(a.previousSibling) || xv(a.parentNode)) return ! 1;
                var c = a.nodeValue,
                d = b - 1;
                if ("@" !== 
                c.slice(d, d + 1)) return ! 1;
                var f = c;
                0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
                a.nodeValue = f;
                return ! 0
            }
            if ("keypress" !== a.type || "@" === String.fromCharCode(a.charCode)) {
                var d,
                f,
                g,
                h;
                if ("keyup" === a.type) {
                    if (50 !== a.keyCode) return;
                    if (wv) {
                        d = window.getSelection();
                        g = d.anchorNode;
                        h = d.anchorOffset;
                        if (!c(g, h)) return;
                        z.D && !g.nextSibling && (g.nodeValue += " ");
                        f = window.document.createRange();
                        d.removeAllRanges();
                        f.setStart(g, h - 1);
                        f.setEnd(g, h - 1);
                        d.addRange(f)
                    } else {
                        f = z.yu(window.document.selection.createRange());
                        g = z.Ft(f);
                        h = f.va();
                        if (!c(g, h)) return;
                        z.Au(g, h - 1).select()
                    }
                }
                this.Ru(a)
            }
        },
        !1, this)
    };
    tv.prototype.Ru = function(a) {
        var b = this,
        c = this.qg;
        if (!c.ub()) {
            var d = function(c) {
                return xv(c) || c.className === b.J.So ? !1: (a && a.preventDefault(), !0)
            },
            f = function(a) {
                c.position(a);
                c.open()
            };
            wv ? yv(b, d, f) : Bv(b, d, f)
        }
    };
    tv.prototype.Gr = function(a, b) {
        return z.O("a", {
            "data-hash": a.id,
            href: "/people/" + a.url_token,
            className: b || this.J.So,
            innerHTML: "@" + a.label
        })
    };
    z.x(z.Ev, z.R);
    z.e = z.Ev.prototype;
    z.e.D = function() {
        this.Na = null;
        z.Ev.v.D.call(this)
    };
    z.e.Z = function(a) {
        z.Ev.v.Z.call(this, a);
        var b = a.getAttribute("data-resourceid");
        b && (this.dV = a.getAttribute("data-action"), this.Hp = b);
        this.status || (this.status = "normal");
        a = this.K();
        this.hd || (this.hd = a.$f("zm-editable-content", this.h)) && "1" === this.hd.getAttribute("data-disabled") && (this.disabled = !0);
        this.bc ? this.Vb && (this.bc.innerHTML = this.Vb) : (this.bc = a.$f("zm-editable-tip", this.h), this.Vb && !this.bc && (this.bc = a.B("div", "zm-editable-tip"), this.bc.innerHTML = this.Vb, a.Ys(this.bc, this.hd)));
        this.Kb = a.$f("zm-editable-editor-wrap", 
        this.h);
        this.content = (0, z.ab)(this.content || this.gC ? z.pf(this.hd) : this.hd.innerHTML);
        this.Xd();
        Hv(this)
    };
    z.e.B = function() {
        var a = this.K(),
        a = a.B("div", "zm-editable-item-wrap", [this.bc = a.B("div", "zm-editable-tip"), this.hd = a.B("div", "zm-editable-content", this.content)]);
        this.Z(a)
    };
    z.e.C = function() {
        z.Ev.v.C.call(this);
        this.o().g(this.hd, "click", this.Qa);
        this.bc && this.o().g(this.bc, "click", this.Qa)
    };
    z.e.ia = function(a) {
        this.content = a;
        Hv(this)
    };
    z.e.Qa = function(a) {
        var b = z.Fr(this.h, a.target),
        c = this.K();
        if (!b || !b.name) return a = c.XO(a.target, "div", "zm-editable-tip-label"),
        this.isEnabled && a && this.vg(),
        !0;
        a = b.name;
        switch (a) {
        case "expand":
            Hv(this);
            break;
        case "collapse":
            Hv(this);
            break;
        case "edit":
            z.T.ue ? !1 !== this.dispatchEvent("beforeedit") && (this.init(), this.vg()) : (new z.rq).G(!0);
            this.dispatchEvent("click_edit");
            break;
        case "save":
            this.Cs();
            break;
        case "cancel":
            this.dispatchEvent("cancel_edit");
            this.Mi();
            break;
        default:
            return this.us(a)
        }
        return ! 0
    };
    z.e.Cs = function() {
        var a = z.tr(this.ag()),
        b = /<embed/i.test(a);
        if (/<img/i.test(a) || b || this.$G || a && ur(a).length) a !== this.content || this.wF ? (this.dispatchEvent("save_changed"), this.oh(a)) : (this.dispatchEvent("save_unchanged"), this.Mi())
    };
    z.e.oh = function(a) {
        if (!this.ea || !this.ea.uc()) if (this.Jr && this.FJ) {
            this.ea = new z.Z(!0);
            this.o().ya(this.ea, "success", this.gD);
            var b = new z.wh(this.params.join("\x26"));
            b.add(this.Jr, a).add("field_name", this.Jr);
            this.ea.ajax(this.FJ, b.toString())
        } else this.dispatchEvent("change")
    };
    z.e.Mi = function() {
        this.status = "normal";
        this.Xd()
    };
    z.e.gD = function() {
        var a = z.Sn(this.ea);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        this.ia(a.msg);
        this.Mi();
        this.dispatchEvent("saveSuccess");
        this.dispatchEvent("change")
    };
    z.e.Ua = function() {
        return this.content
    };
    z.e.Yx = z.aa(36);
    z.e.isContentEditable = function() {
        return ! this.Hd
    };
    z.e.ag = function() {
        return (0, z.Mr)(z.Ma(this.Na.value))
    };
    z.e.us = function(a) {
        this.dispatchEvent(a);
        return ! 0
    };
    z.e.init = function() {
        this.IQ || (this.IQ = !0, this.$e())
    };
    z.e.$e = function() {
        var a = this.K();
        this.Kb ? (this.qc = a.$f("zm-command", this.Kb), this.Na = a.$f("zm-editable-editor-input", this.Kb)) : (this.Kb = a.B("div", "zm-editable-editor-wrap clearfix", this.sj = a.B("div", "zm-editable-editor-outer", a.B("div", "zm-editable-editor-inner zg-form-text-input", this.Na = a.B("textarea", "zm-editable-editor-input")))), a.fz(this.Kb, this.hd), this.kl());
        this.Na && this.Na.tagName && "TEXTAREA" === this.Na.tagName && !this.KE && new z.Tr(this.Na);
        this.gp()
    };
    z.e.ready = function(a) {
        this.DE.done(a)
    };
    z.e.gp = function() {
        this.o().g(this.qc, "click", this.Qa);
        this.gv && Gv(this);
        Fv(this);
        this.DE.resolveWith(this)
    };
    z.e.kl = function() {
        this.qc = z.O("div", "zm-command", [this.sr = z.O("a", {
            "class": "zm-command-cancel",
            name: "cancel",
            href: "javascript:;"
        },
        "取消"), this.Cn = z.O("a", {
            "class": "zg-r3px zg-btn-blue",
            name: "save",
            href: "javascript:;"
        },
        "保存")]);
        this.Kb.appendChild(this.qc)
    };
    z.e.Xd = function() {
        this.Ir && z.W.remove(this.h, this.Ir);
        "editing" === this.status ? (this.bc && z.Q(this.bc, !1), this.Kb && z.Q(this.Kb, !0), z.Q(this.hd, !1), this.Ir = "zm-editable-status-editing") : (this.bc && (!this.$G || this.content || this.disabled ? z.Q(this.bc, !1) : z.Q(this.bc, !0)), this.Kb && z.Q(this.Kb, !1), this.content ? z.Q(this.hd, !0) : z.Q(this.hd, !1), this.Ir = "zm-editable-status-normal");
        z.W.add(this.h, this.Ir)
    };
    z.e.vg = function() {
        this.ds || (this.init(), this.ready(function() {
            this.status = "editing";
            this.Xd();
            this.Op()
        }))
    };
    z.e.Op = function() {
        if (this.Hp) this.ds = !0,
        this.Ix();
        else {
            var a = this.Na,
            b;
            b = so(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
            a.value = b
        }
    };
    z.e.KF = function() {
        var a = [];
        this.disabled || a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e');
        return a.join("")
    };
    z.e.Ix = function() {
        this.ds || (this.ds = !0, z.tp(this.dV + "?id\x3d" + this.Hp, (0, z.q)(function(a) {
            this.ds = !1;
            a = z.Sn(a.target);
            a.r ? z.X.message(a.msg) : this.Fu(a.msg)
        },
        this), "GET"))
    };
    z.e.Fu = function(a) {
        this.Na.value = a
    };
    z.x(z.Iv, z.Ev);
    z.e = z.Iv.prototype;
    z.e.Fu = function(a) {
        this.Hd ? z.Iv.v.Fu.call(this, a) : (a || (a = z.B ? "": "\x3cdiv\x3e\x3c/div\x3e"), this.Na.Pd(!1, a, !0))
    };
    z.e.Op = function() {
        this.ready(function() {
            this.Hp ? this.Ix() : this.Hd ? z.Iv.v.Op.call(this) : this.content ? this.Na.Pd(!1, this.content, !1, !0) : this.Na.Pd(!1, z.D ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e": "\x3cdiv\x3e\x3c/div\x3e", !1, !0)
        })
    };
    z.e.D = function() {
        z.Cc(this.Na);
        z.P(this.Kb);
        this.Dq = this.LC = this.jg = this.tl = this.UB = this.sj = this.Kb = null;
        z.Iv.v.D.call(this)
    };
    z.e.$e = function() {
        if (this.Hd) z.Iv.v.$e.call(this);
        else {
            var a = this.K();
            this.Kb = a.B("div", "zm-editable-editor-wrap", this.sj = a.B("div", "zm-editable-editor-outer", [this.UB = a.B("div", "zm-editable-toolbar-container"), this.tl = a.B("div", "zm-editable-editor-field-wrap", this.jg = a.B("div", {
                id: this.rS,
                className: "zm-editable-editor-field-element"
            }))]));
            this.LC = (0, window.$)(this.UB);
            this.Dq = (0, window.$)(this.Kb);
            this.Dq.hide();
            a.fz(this.Kb, this.hd);
            this.Hp || (this.jg.innerHTML = this.content);
            a = {
                loremIpsum_: this.Hz,
                enableFullScreen: this.qx,
                content: this.content,
                useScraper_: this.YW,
                canUploadMedia_: this.Aw,
                useRemoveFormat_: this.QK
            };
            this.kl();
            lv.ba().$e(this.Kb, a, (0, z.q)(this.gp, this));
            z.Vj || (this.xg = new jv(null, this.sj), this.xg.w(this.UB), z.ev(this.xg, !1), z.fv(this.xg), z.Ac(this, this.xg))
        }
    };
    z.e.gp = function(a, b) {
        if (this.Hd) z.Iv.v.gp.call(this);
        else {
            this.Na = a;
            this.Dq.show();
            z.Iv.v.gp.call(this);
            Jv(this, a, b);
            var c = a.Rb.CodePlugin;
            c && (c.LV(b), c.Fg())
        }
    };
    z.e.vg = function() {
        z.Iv.v.vg.call(this);
        this.ready(function() {
            this.Hd || this.xO || (this.xO = !0, z.ld(this.Na, "load", 
            function() {
                var a = this.Na,
                b = a.Rb.FullScreenPlugin;
                z.B && (a = a.Ha);
                z.F(a, ["focus", "blur"], 
                function(a) {
                    b && z.W.has(window.document.body, b.J.Wn) || Kv(this, "focus" === a.type)
                },
                !1, this)
            },
            !1, this), this.Na.je())
        })
    };
    z.e.ag = function() {
        if (this.Hd) return z.Iv.v.ag.call(this);
        var a = this.Na;
        return Lr(a.m(), !0) ? "": a.El()
    };
    z.e.Xd = function() {
        z.Iv.v.Xd.call(this);
        this.xg && z.ev(this.xg, "editing" === this.status)
    };
    z.x(z.Mv, z.V);
    z.la(z.Mv);
    var cG = '\x3cdiv class\x3d"zh-add-question-form"\x3e\n  \x3cdiv class\x3d"js-add-question-splash add-question-splash-page" \x3e\n    \x3cp\x3e\n      知乎是一个真诚、友善、认真、互助的社区\x3cbr\x3e\n      我们希望每一个疑惑都有解答，好的问题更容易得到好答案 \x3ca href\x3d"//www.zhihu.com/question/19555761"\x3e如何提一个好问题？\x3c/a\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e提问应遵循真实、客观、简洁、明确、规范的原则\x3c/b\x3e\x3cbr\x3e\n      1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。\x3cbr\x3e\n      2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。\x3cbr\x3e\n      3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由\x3cbr\x3e\n      4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e知乎禁止这些提问\x3c/b\x3e\x3cbr\x3e\n      1、和已有问题完全重复的问题，\x3cb\x3e为避免重复，提问前可以先进行搜索\x3c/b\x3e\x3cbr\x3e\n      2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容\x3cbr\x3e\n      3、投票类问题。例如：你支持方舟子还是韩寒？\x3cbr\x3e\n      4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题\x3cbr\x3e\n      完整的提问建议可查看 \x3ca href\x3d"//www.zhihu.com/question/19806261"\x3e知乎的提问规范有哪些？\x3c/a\x3e\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cdiv class\x3d"before-ask-form"\x3e\n      \x3cb\x3e提问前请先搜索\x3c/b\x3e\n      \x3cdiv style\x3d"position:relative;margin-top:18px;"\x3e\n        \x3cinput type\x3d"text" class\x3d"zg-form-text-input" id\x3d"js-before-ask" placeholder\x3d"请输入你的问题"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cform class\x3d"js-add-question-form"\x3e\n    \x3cdiv class\x3d"zg-section-big clearfix"\x3e\n      \x3cdiv id\x3d"zm-modal-dialog-info-wrapper"\x3e\x3c/div\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" id\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close"  style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zg-form-text-input add-question-title-form" style\x3d"position: relative;"\x3e\n        \x3ctextarea rows\x3d"1" class\x3d"zg-editor-input" title\x3d"在这里输入问题" id\x3d"zh-question-suggest-title-content"\x3e\x3c/textarea\x3e\n      \x3c/div\x3e\n      \x3cspan id\x3d"js-title-length-err-msg" class\x3d"title-length-err-msg zg-right"\x3e\x3c/span\x3e\n      \x3cdiv id\x3d"zh-question-suggest-ac-wrap" class\x3d"question-suggest-ac-wrap"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zg-section-big"\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" class\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\n        \x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close" style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-right extra-editor-toolbar hidden-phone"\x3e\n          \x3cdiv class\x3d"js-toggle-editor-toolbar"\x3e\x3ci class\x3d"tr-inline-icon z-ico-textedit"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-pic"\x3e\x3ci class\x3d"tr-inline-icon tr-image"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-video"\x3e\x3ci class\x3d"tr-inline-icon tr-video"\x3e\x3c/i\x3e\x3c/div\x3e\n        \x3c/span\x3e\n        问题说明（可选）：\n        \x3cspan id\x3d"zh-question-form-detail-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-detail-container"\x3e\n        \x3cdiv class\x3d"zm-editable-content" data-disabled\x3d"1"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-add-question-form-topic-wrap"\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-gray zg-right hidden-phone"\x3e话题越精准，越容易让相关领域专业人士看到你的问题\x3c/span\x3e\n        选择话题：\n        \x3cspan id\x3d"zh-question-form-tag-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-topic-container" class\x3d"zm-tag-editor zg-section"\x3e\n        \x3cdiv class\x3d"zm-tag-editor-labels"\x3e\x3c/div\x3e\n        \x3cdiv id\x3d"zh-question-suggest-autocomplete-container"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-command"\x3e\n      ' + (z.T.Jd ? 
    "": '\x3clabel class\x3d"zm-question-form-hide-in-about-question-el zg-left"\x3e\n        \x3cinput type\x3d"checkbox" value\x3d"1" class\x3d"zg-addq-isanon"\x3e匿名\n      \x3c/label\x3e') + '\n      \x3ca href\x3d"javascript:;" name\x3d"cancel" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"addq" class\x3d"zg-r5px zu-question-form-add zg-btn-blue"\x3e发布\x3c/a\x3e\n      \x3ca name\x3d"jumpq" class\x3d"zg-r5px zg-btn-blue zu-question-form-jump" style\x3d"display:none;"\x3e查看问题\x3c/a\x3e\n    \x3c/div\x3e\n  \x3c/form\x3e\n\x3c/div\x3e',
    Pv = z.Em.create("AddQuestionForm" + z.T.ig);
    z.e = z.Mv.prototype;
    z.e.C = function() {
        z.Mv.v.C.call(this);
        var a = z.Xe((0, z.ab)(cG));
        this.S().appendChild(a);
        this.Hc = z.Ro("zg-editor-input", this.h)[0];
        this.dl = z.N("zu-question-form-add", this.h);
        this.rn = z.N("zu-question-form-jump", this.h);
        this.hk = z.L("zm-modal-dialog-warnmsg-wrapper");
        this.lt = z.L("js-title-length-err-msg");
        this.KA = z.N("zm-modal-dialog-warnmsg-wrapper", this.h);
        this.JE = z.L("zh-question-form-detail-err");
        this.JB = z.L("zh-question-form-tag-err");
        this.JN = z.N("zu-global-notify-close", this.hk);
        this.EW = z.N("zu-global-notify-close", 
        this.KA);
        this.YQ = z.L("zm-modal-dialog-info-wrapper");
        this.Et = z.N("zm-modal-dialog-warnmsg", this.hk);
        z.N("zm-modal-dialog-warnmsg", this.KA);
        this.SD = z.N("zg-addq-isanon", this.h);
        this.xW = z.N("js-toggle-editor-toolbar", this.h);
        this.vM = z.N("js-editor-add-pic", this.h);
        this.wM = z.N("js-editor-add-video", this.h);
        this.bW = z.N("js-add-question-splash", this.h);
        this.GH = z.N("js-add-question-form", this.h);
        this.FD = z.L("js-before-ask");
        this.kO = z.L("zh-question-suggest-detail-container");
        this.DW = z.L("zh-question-suggest-topic-container");
        this.Sy();
        this.Vz ? (Tv(this, !0), this.Qy()) : (this.wo(), Tv(this, !1));
        z.T.Jd && gw(this)
    };
    z.e.show = z.Kq(function(a) {
        this.J = window.$.extend({
            Pm: null,
            kk: null
        },
        a || {});
        this.G(!0)
    },
    !0, "#ask");
    z.e.im = function() {
        z.Mv.v.im.call(this);
        this.J = {}
    };
    z.e.Sy = function() {
        this.Oa("提问");
        z.Uj(this, 550);
        z.Mj(this, null);
        this.X = (0, window.$)(this.h);
        this.X.addClass("absolute-position");
        this.G(!0);
        this.ha()
    };
    z.e.wo = z.Rj(function() {
        Vv(this);
        this.Yb();
        Ov(this)
    });
    z.e.nq = {};
    z.e.nq.gJ = '\x3c% forEach(questions, function(q, i) { q \x3d q.data; %\x3e\x3cdiv class\x3d"ac-row" data-url_token\x3d"\x3c%\x3dq.url_token%\x3e" data-answer_count\x3d"\x3c%\x3dq.answer_count%\x3e"\x3e\x3c% if (q.is_star) { %\x3e\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/\x3c%\x3dq.url_token%\x3e"\x3e\x3c/a\x3e\x3c% } %\x3e\x3ca class\x3d"zippy-indicator"\x3e\x3ci\x3e\x3c/i\x3e\x3c/a\x3e\x3ca style\x3d"color:#222" href\x3d"/question/\x3c%\x3dq.url_token%\x3e?q\x3d\x3c%\x3d token %\x3e"\x3e\x3c%\x3dq.title%\x3e\x3c/a\x3e \x3cspan class\x3d"zm-ac-gray"\x3e\x3c%\x3d parseInt(q.answer_count) \x3e 0 ? q.answer_count + " 个回答" : "还没有回答" %\x3e \x3c/span\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.nq.VM = '\x3c% forEach(answers, function(a, i) { %\x3e\x3cdiv class\x3d"zippy-row"\x3e\x3cdiv class\x3d"summary-item"\x3e\x3ca class\x3d"inline-block zm-item-vote-count" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e\x3c%\x3da.vote_count%\x3e\x3c/a\x3e\x3c% if (a.author.url_token) { %\x3e\x3ca class\x3d"inline-block" href\x3d"/people/\x3c%\x3da.author.url_token%\x3e"\x3e\x3cspan class\x3d"author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c/a\x3e\x3c% } else { %\x3e\x3cspan class\x3d"inline-block anon-author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c% } %\x3e\x3cspan class\x3d"inline-block summary ellipsis"\x3e\x3c%\x3da.summary_text%\x3e\x3c/span\x3e\x3ca class\x3d"inline-block" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e阅读全部 »\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.Qy = function() {
        function a() {
            Tv(b, !1);
            b.Hc.value = d.value
        }
        var b = this,
        c = (0, z.Sv)(this.nq.gJ),
        d = this.FD,
        f = new Xs;
        this.oM = new z.Ws(d, {
            source: "/question/autocomplete",
            yk: d.offsetParent,
            td: function() {},
            render: function(b, f, k) {
                b = (0, window.$)(b.m());
                b.html(c({
                    forEach: z.y,
                    questions: k,
                    token: (0, window.encodeURIComponent)(this.Wb)
                }));
                0 < k.length && b.prepend('\x3cdiv class\x3d"ac-row ac-first"\x3e\x3cb\x3e你想问的是不是：\x3c/b\x3e\x3c/div\x3e').append((0, window.$)('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e不是，我要提一个新问题 »\x3c/a\x3e\x3c/div\x3e'));
                0 === k.length && d.value && (b.html('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e没有找到相关问题，马上提问 »\x3c/a\x3e\x3c/div\x3e').show(), k.push("fake row"));
                b.off("click").on("click", ".iwanttoask", a)
            },
            ez: f
        });
        this.oM.jn = !1
    };
    z.e.resetForm = function() {
        this.Hc.value = "";
        this.Ja && this.Ja.fv();
        this.hk && z.Q(this.hk, !1);
        this.Ja.reset()
    };
    z.e.Yb = function() {
        this.o().g(this.h, "click", this.sP);
        this.QR && this.QR.w(this.Hc);
        this.hJ = new z.Tr(this.Hc);
        this.o().g(this.hJ, "change", this.GI);
        this.o().g(this.JN, "click", 
        function() {
            z.Q(this.hk, !1);
            z.Q(this.YQ, !0)
        });
        this.o().g(this.EW, "click", 
        function() {
            z.Q(this.KA, !1)
        });
        this.o().g(this, "afterhide", 
        function() {
            Zv(this)
        });
        Yv(this)
    };
    z.e.sP = function(a) {
        if (a = z.Fr(this.h, a.target)) switch (a = a.name, a) {
        case "expand":
            z.W.add(this.h, "zg-qform-expanded");
            break;
        default:
            this.us(a)
        }
    };
    z.e.kk = function() {
        var a = z.Sn(this.xhr);
        if (!a) return Xv(this, !1),
        z.X.message("网络异常");
        if (a.r) {
            if (281 === a.errcode) {
                var b = new cw;
                b.Be = a.msg;
                b.level = 3;
                $v(this, b, !0)
            } else z.X.message(a.msg);
            Xv(this, !1)
        } else z.Rh.set("__Q_ISNEWLYCREATED__", "yep"),
        Pv.clear(),
        (0, window.$)(window).off("beforeunload.AddQuestionForm"),
        a = a.msg,
        b = a.match(/\/question\/(\d+)/)[1],
        this.J.kk ? this.J.kk({
            url: a,
            bb: b
        }) : window.location.href = a
    };
    z.e.us = function(a) {
        if ("cancel" === a) this.G(!1);
        else if ("addq" === a) {
            a = dw(this);
            var b = aw(this);
            if (! (1 < b.level || 1 < a.level)) {
                var c = ew(this),
                d = new cw;
                3E3 < Hr(c) ? (d.level = 3, d.Be = "请控制在 3000 字以下") : d.level = 0;
                c = 1 < d.level;
                this.JE.innerHTML = d.Be;
                z.Q(this.JE, c);
                Wv(this, c, "detail");
                this.DI()
            }
            Wv(this, 1 < b.level || 1 < a.level, "title");
            this.NE ? $v(this, 1 < a.level ? a: b, !0) : (0, window.$)(this.dl).attr("disabled") || (Xv(this, !0), this.xhr = new z.Z(!0), this.o().ya(this.xhr, "success", this.kk), this.xhr.ajax("/question/add", fw(this).Ce()), 
            this.Ja.trackEvent())
        }
    };
    z.e.GI = function() {
        var a = dw(this),
        b = aw(this);
        "toolong" === a.name || "buffer" === a.name ? (this.lt.innerHTML = a.Be, z.Q(this.lt, !0)) : (this.lt.innerHTML = a.Be, z.Q(this.lt, !1));
        "multiquestionmark" === b.name || "duplicatedquestion" === b.name ? $v(this, b, !0) : $v(this, b, !1);
        Wv(this, 1 < b.level, "title")
    };
    z.e.DI = function() {
        var a = !1;
        1 > this.Ja.data.length ? (a = !0, this.JB.innerHTML = "至少添加一个话题") : 5 < this.Ja.data.length && (a = !0, this.JB.innerHTML = "最多添加五个话题");
        z.Q(this.JB, a);
        Wv(this, a, "topic")
    };
    z.e.XS = function() {
        this.Pb && Lv(this.Pb)
    };
    hw.prototype.init = function() {
        var a = (0, window.$)("#zh-question-related-questions");
        if (a.length) {
            var b = (0, window.$)("li", a),
            c = function(a, b, c) {
                var h = 1,
                k = Math.ceil(a.length / b);
                return {
                    next: function() {
                        1 !== k && (h = h === k ? 1: h + 1, c(h))
                    },
                    $N: function() {
                        var c = (h - 1) * b;
                        return a.slice(c, c + b)
                    }
                }
            } (b, 5, 
            function() {
                b.attr("hidden", "true");
                c.$N().removeAttr("hidden")
            }); (0, window.$)(".next", a).click(function() {
                c.next();
                z.U("question_answer", "click_sidebarrelatedquestions_pager")
            });
            b.each(function(a, b) {
                z.yo(b, {
                    module: "QuestionItem"
                },
                function() {
                    return {
                        card: {
                            card_type: "Content",
                            content: {
                                type: "Question",
                                id: b.getAttribute("data-id")
                            }
                        }
                    }
                })
            })
        }
    };
    z.l(z.iw, z.Dk);
    z.iw.prototype.B = function() {
        z.Dk.prototype.B.call(this);
        this.ia((0, window.$)(".phone-verification-template").html())
    };
    z.iw.prototype.C = function() {
        z.Dk.prototype.C.call(this);
        var a = (0, window.$)(".view.verification", this.Pc),
        b = new z.Vk(this.Vn);
        this.L(b);
        b.bd(this.Jf);
        b.w(a[0])
    };
    z.l(jw, z.R);
    jw.prototype.C = function() {
        z.R.prototype.C.call(this);
        this.We()
    };
    jw.prototype.We = function() {
        var a = this,
        b = this.m();
        this.Wm = (0, window.$)(".SignFlow-panel", b);
        this.Wm.on("click", ".switch-to-login", 
        function() {
            a.Wm.filter(":visible").attr("hidden", !0).siblings().removeAttr("hidden");
            a.na({
                category: "sign_in",
                action: "switch_to_sign_in_box_appear"
            })
        });
        var c = (0, window.$)(".LoginForm", b)[0],
        d = new z.Rk({
            Ym: z.Sk
        });
        d.bd(this.Jf);
        d.w(c);
        b = (0, window.$)(".SignupForm", b)[0];
        c = new z.Uk;
        c.bd(this.Jf);
        c.w(b);
        c.g("success", 
        function(b) {
            b = new z.iw(b.data);
            b.Db(a);
            b.G(!0)
        })
    };
    z.Ca(jw.prototype, z.Zm);
    kw.prototype.init = function() {
        this.Zy();
        lw();
        mw()
    };
    kw.prototype.Zy = function() {
        var a = (0, window.$)("#SidebarSignFlow")[0];
        if (a) {
            var b = function(b) {
                var d = (0, window.$)(".account", a);
                b || d.attr("name", "account").attr("aria-label", "手机号或邮箱").attr("data-placeholder", "手机号或邮箱"); (0, window.$)("[data-placeholder]", a).attr("placeholder", 
                function() {
                    return (0, window.$)(this).attr("data-placeholder")
                })
            };
            window.$.get("/register/is_domestic").then(function(c) {
                b(c.value);
                c = new jw;
                c.bd("sidebar_signflow");
                c.w(a)
            })
        }
    };
    z.l(nw, z.R);
    nw.prototype.C = function() {
        var a = this;
        z.R.prototype.C.call(this);
        var b = this.m(),
        c = (0, window.$)(b),
        d = c.find(".shameimaru-link"),
        f = c.find(".shameimaru-close"),
        g = c.data("track"),
        h = z.To(g, "at", "view"),
        k = z.To(g, "at", "close");
        z.Hn(b, 
        function() {
            z.ow(h)
        });
        d.one("click", 
        function() {
            var a = d.attr("href");
            d.attr("href", z.To(a, "click", 1))
        });
        f.one("click", 
        function(b) {
            b.preventDefault();
            z.ow(k);
            c.fadeOut(500, 
            function() {
                return c.remove()
            });
            a.H()
        })
    };
    z.l(qw, z.R);
    qw.prototype.init = function() {
        var a = (0, window.$)(".AppPromotionBar");
        this.Lf = a;
        var b = this;
        if (a.length && (0, window.$)("html").hasClass("is-AppPromotionBarVisible")) a.on("click", ".AppPromotionBar-closeButton, .AppPromotionBar-downloadButton", 
        function() { (0, window.$)(this).hasClass("AppPromotionBar-downloadButton") ? z.U("app-promotion", "click_mobileweb_app_dl_bar_download_btn") : z.U("app-promotion", "click_mobileweb_app_dl_bar_close_btn");
            z.Rh.set("hideAppPromotionBar", "true");
            rw(b)
        })
    };
    var vw;
    z.l(zw, z.R);
    z.e = zw.prototype;
    z.e.init = function() {
        var a = window.document.querySelector(".js-WechatLoginIntro");
        a && this.w(a)
    };
    z.e.C = function() {
        z.R.prototype.C.call(this);
        this.h.querySelector(".js-login").addEventListener("click", this.DQ.bind(this));
        this.h.querySelector(".js-other").addEventListener("click", this.lQ.bind(this));
        this.h.querySelector(".js-close").addEventListener("click", this.close.bind(this));
        z.yi({
            action: "show",
            category: "wechat-login-intro"
        })
    };
    z.e.DQ = function() {
        z.yi({
            category: "wechat_login_intro",
            action: "click_main"
        })
    };
    z.e.lQ = function() { (new z.Sk).show();
        z.yi({
            category: "wechat_login_intro",
            action: "click_other"
        })
    };
    z.e.close = function() {
        this.h.parentNode.removeChild(this.h);
        window.$.post("/intro/wechat/uninterest");
        z.yi({
            category: "wechat_login_intro",
            action: "close"
        })
    };
    z.la(Aw);
    var Cw = z.Em.create("Report" + z.T.ig);
    Aw.prototype.hM = '\x3cdiv id\x3d"zh-feedback-form"\x3e\x3cselect name\x3d"type" class\x3d"zg-editor-type zg-right"\x3e\x3coption value\x3d"help"\x3e使用帮助 \x3c/option\x3e\x3coption value\x3d"bug"\x3e问题反馈\x3c/option\x3e\x3coption value\x3d"search_suggest"\x3e搜索反馈\x3c/option\x3e\x3coption value\x3d"suggest"\x3e功能建议\x3c/option\x3e\x3c/select\x3e\x3cdiv class\x3d"zg-report-title"\x3e\x3cspan class\x3d"zg-gray-darker"\x3e请填写你的反馈内容\x3c/span\x3e\x3cspan class\x3d"zg-report-msg" style\x3d"display:none;"\x3e请选择反馈种类：\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input zg-report-content"\x3e\x3ctextarea class\x3d"zg-editor-input" name\x3d"content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e';
    Aw.prototype.defaults = {
        title: "建议和反馈"
    };
    Aw.prototype.We = function(a) {
        var b = (0, window.$)("#zh-feedback-form"),
        c = (0, window.$)("select", b),
        b = (0, window.$)("textarea", b);
        new z.Tr(b[0]);
        c.toggle(!a.type);
        b.html(Cw.get("content") || "");
        b.on("input change", 
        function() {
            Cw.set("content", this.value)
        })
    };
    Aw.prototype.create = function(a) {
        var b = window.$.extend(this.defaults, a || {});
        z.X.confirm(b.title, this.hM, 
        function(a) {
            if (a) return Bw(b)
        },
        this);
        this.We(b)
    };
    var dG,
    fG;
    fG = {
        "rt:button": function() { (0, z.eG)(this, "roundtable", null, ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "rt:link": function() { (0, z.eG)(this, "roundtable", null, null, {
                follow_text: "关注圆桌"
            })
        },
        "c:link": function() { (0, z.eG)(this, "column", null, null, {
                follow_text: "关注专栏"
            })
        },
        "c:button": function() { (0, z.eG)(this, "column", null, ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "q:link": function() { (0, z.eG)(this, "question", null, null, {
                follow_text: "关注问题"
            })
        },
        "m:link": function() {
            var a = this.getAttribute("data-follow_text"); (0, z.eG)(this, "people", 
            null, null, a ? {
                follow_text: a
            }: {})
        },
        "t:link": function() { (0, z.eG)(this, "topic", null, null, {
                follow_text: "关注话题"
            })
        },
        "t:link:simple": function() { (0, z.eG)(this, "topic")
        },
        "m:button": function() {
            var a = this; (0, z.eG)(a, "people", 
            function() {
                a.getAttribute("data-followme") && (z.W.has(a, "zg-btn-follow") ? a.setAttribute("data-tip", "s$b$对方已关注你") : a.setAttribute("data-tip", "s$b$已互相关注"))
            },
            ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "q:fi:button": function() {
            var a = this; (0, z.eG)(a, "question", 
            function(b) { (0, window.$)(".label", a).text(b ? 
                "取消关注": "关注");
                var c = (0, window.$)(".count", a);
                b = Number(c.data("count")) + (b ? 1: -1);
                c.length && (b = Math.max(b, 0), c.text("（" + b + "）").data("count", b))
            },
            ["unfollowing", "following"])
        },
        "q:m:button": function() { (0, z.eG)(this, "question", null, ["zg-btn-green", "zg-btn-white"], {
                follow_text: "关注问题"
            })
        },
        "f:button": function() { (0, z.eG)(this, "favlist", null, ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "t:button": function() { (0, z.eG)(this, "topic", null, ["zg-btn-follow", "zg-btn-unfollow"])
        }
    };
    z.eG = z.Kq(function(a, b, c, d, f) {
        function g(a) {
            a.r ? z.X.message(a.msg) : h(n)
        }
        function h(b) {
            b ? (z.W.Wv(a, k, m), qr(a, f.unfollow_text || "取消关注")) : (z.W.Wv(a, m, k), qr(a, f.follow_text || "关注"));
            z.sa(c) && c(b)
        }
        dG && "pending" === dG.state() && dG.abort();
        f = f || {};
        b = b || a.getAttribute("data-focustype");
        d = d || ["zg-follow", "zg-unfollow"];
        var k = d[0],
        m = d[1],
        n = z.W.has(a, k);
        z.Y.tb({
            type: "ga_click_follow",
            target: a,
            data: {
                type: b,
                Yj: n
            }
        });
        d = {
            roundtable: Ew,
            column: Dw,
            people: ct,
            question: dt,
            topic: ft,
            favlist: et
        } [b];
        var r = a.getAttribute("data-id") || 
        a.id.match(/-(.*)/)[1];
        d && (d = d(r, n), "people" === b && n ? d.done(g) : h(n), dG = d, (0, z.Hi)(a, {
            action: n ? "Follow": "UnFollow",
            element: "Button"
        }))
    });
    z.x(Fw, z.G);
    var Jw = ["group", "key", "name"];
    Hw.prototype.defaults = {
        lO: "帮助信息",
        ix: "shortcut-tips-dialog"
    };
    Hw.prototype.hc = function() {
        z.xl(z.cn.register("shift+/", this.show, this), {
            group: "导航",
            name: "帮助",
            key: "?"
        })
    };
    Hw.prototype.show = function() {
        var a = this.J;
        z.X.alert({
            title: a.lO,
            content: Ow(),
            className: a.ix
        })
    };
    var Qw = z.jk(function(a) {
        var b = z.tm["ra-urls"],
        c = b && b[a];
        return c ? new window.Promise(function(b) {
            window.$.ajax({
                url: c,
                dataType: "script",
                cache: !0
            }).then(function() {
                b(window.ra[a])
            })
        }) : window.Promise.reject("Missing app name: ", a)
    });
    var Tw = [];
    z.Dp.on("init", 
    function() {
        function a() {
            var b = Tw.shift();
            b && (b = b[0], b.length ? b(a) : (b(), a()))
        }
        a()
    });
    z.Dp.on("init", 
    function() { (0, window.$)("img.lazy").attr("data-lazyloaded", "").lazyload({
            load: function() { (0, window.$)(this).trigger("contentchange")
            },
            data_attribute: "actualsrc",
            event: "scroll updatelazy",
            threshold: 400
        })
    });
    z.Dp.on("init", 
    function() {
        z.T.Pn && z.Rh.set("lastuser:email", z.T.Pn)
    });
    Sw(function(a) {
        z.T.Jd || new Ep({
            kk: a
        })
    },
    0);
    Sw(function() {
        "#ask" === window.location.hash && (z.Mv.ba().show(), window.history.replaceState ? window.history.replaceState(null, window.document.title, window.location.pathname + window.location.search) : window.location.hash = "")
    },
    window.Infinity);
    z.Dp.on("init", 
    function() { (new hw).init()
    });
    z.Dp.on("init", 
    function() { (new kw).init()
    });
    z.Dp.on("init", 
    function() {
        pw()
    });
    z.Dp.on("init", 
    function() { (new qw).init()
    });
    z.Dp.on("init", 
    function() {
        uw()
    });
    z.Dp.on("init", 
    function() {
        z.eh()
    });
    z.Dp.on("init", 
    function() {
        return (new zw).init()
    });
    z.Dp.on("init", 
    function() {
        z.Oi()
    });
    z.Dp.on("postinit", 
    function() { (0, window.$)("#js-feedback-button").click(function() {
            Aw.ba().create()
        })
    });
    z.Dp.on("init", 
    function() { (0, window.$)(window.document.body).on("click.follow", "[data-follow]", 
        function() {
            if (this.name) return Jr("未清除的 name 属性:", this);
            var a = this.getAttribute("data-follow"); (a = a && fG[a]) && a.call(this)
        })
    });
    z.Dp.on("postinit", 
    function() {
        window.FastClick && !z.ym && window.FastClick.attach(window.document.body)
    });
    z.Dp.on("postinit", 
    function() {
        if (z.T.Fb()) if (window.WebSocket) {
            var a;
            a = -1 !== z.sm.zn.indexOf("https") ? z.sm.zn.replace("https", "wss") : z.sm.zn.replace("http", "ws"); (new Fw(a)).addEventListener("message", 
            function(a) {
                Ln(z.Y, JSON.parse(a.data.replace(/^\+;/, "")))
            })
        } else a = new yq({
            url: z.gm,
            data: {
                loc: window.location.href,
                channel: (0, z.I)() + Vn()
            },
            dataType: "polling",
            converters: {
                "text polling": function(a) {
                    return JSON.parse(a.replace(/^\+;/, ""))
                }
            }
        }),
        a.addEventListener("message", 
        function(a) {
            Ln(z.Y, a.data)
        }),
        a.au()
    });
    z.Dp.on("init", 
    function() {
        new Hw;
        z.Bl.prototype.defaults.offsetTop = -60;
        var a = (0, window.$)('div[data-widget\x3d"navigable"], ul[data-widget\x3d"navigable"]');
        if (1 === a.length) {
            var b = a.data("navigable-options"),
            b = new z.Bl(b);
            b.w(a.get(0));
            var c = (0, window.$)("#zh-load-more");
            b.on("action", 
            function(a) {
                a.data.index >= a.data.size && c.is(":visible") && c[0].click()
            })
        }
    });
    z.Dp.on("init", 
    function() { (0, window.$)(window.document).on("click", 'a[href\x3d"#"]', 
        function(a) {
            a.preventDefault()
        })
    });
    z.Dp.on("postinit", 
    function() {
        var a = window.location.pathname; (z.T.Fb() && "/" === a || /^\/(question|explore|collection|topic|people|search|roundtable\/)/.test(a)) && z.Pw("CommentApp")
    });
    z.Dp.on("postinit", 
    function() { (0, window.$)(".js-openProfilePage").on("click", 
        function() {
            var a = (0, window.$)(this).attr("data-url"),
            a = (0, window.$)("\x3cform target\x3d'_blank' method\x3d'POST' style\x3d'display:none;'\x3e\x3c/form\x3e").attr({
                action: a
            }).appendTo(window.document.body); (0, window.$)('\x3cinput type\x3d"hidden" /\x3e').attr({
                name: "content",
                value: (0, window.$)("#performance-profile-data").text()
            }).appendTo(a);
            a.submit();
            a.remove()
        })
    });
    z.Dp.on("init", 
    function() {
        var a = z.bj.get("d_c0", ""),
        b = new z.Z(!0);
        "" === a && b.ajax("/udid", "", "POST")
    });
    z.x(Uw, Lq);
    Uw.prototype.add = function(a) {
        z.A(this.queue, a) || (this.queue.push(a), z.F(a, "finish", this.kI, !1, this))
    };
    Uw.prototype.remove = function(a) {
        z.tb(this.queue, a) && z.md(a, "finish", this.kI, !1, this)
    };
    Uw.prototype.D = function() {
        z.y(this.queue, 
        function(a) {
            a.H()
        });
        this.queue.length = 0;
        Uw.v.D.call(this)
    };
    z.x(Vw, Uw);
    Vw.prototype.play = function(a) {
        if (0 == this.queue.length) return ! 1;
        if (a || this.N == Mq) this.Jx = 0,
        this.kg();
        else if (1 == this.N) return ! 1;
        this.jd("play"); - 1 == this.N && this.jd("resume");
        var b = -1 == this.N && !a;
        this.startTime = (0, z.I)();
        this.endTime = null;
        this.N = 1;
        z.y(this.queue, 
        function(c) {
            b && -1 != c.N || c.play(a)
        });
        return ! 0
    };
    Vw.prototype.pause = function() {
        1 == this.N && (z.y(this.queue, 
        function(a) {
            1 == a.N && a.pause()
        }), this.N = -1, this.jd("pause"))
    };
    Vw.prototype.stop = function(a) {
        z.y(this.queue, 
        function(b) {
            b.N == Mq || b.stop(a)
        });
        this.N = Mq;
        this.endTime = (0, z.I)();
        this.jd("stop");
        this.lg()
    };
    Vw.prototype.kI = function() {
        this.Jx++;
        this.Jx == this.queue.length && (this.endTime = (0, z.I)(), this.N = Mq, this.jd("finish"), this.lg())
    };
    z.x(Zw, z.Yj);
    z.e = Zw.prototype;
    z.e.init = function() {
        if (!z.rm("back_to_top")) {
            this.h = z.Xe(this.nW);
            window.document.body.appendChild(this.h);
            var a = new z.gl(this.Pt, this.qW, this);
            this.qK = (0, z.q)(a.fire, a);
            this.o().g(window, "resize", this.HI);
            this.HI()
        }
    };
    z.e.start = function() {
        this.Ak || (this.Ak = !0, this.o().g(window, "scroll", this.qK).g(this.h, "click", this.BD), this.Pt())
    };
    z.e.stop = function() {
        this.Ak && (this.Ak = !1, this.o().qa(window, "scroll", this.qK).qa(this.h, "click", this.BD), this.hide())
    };
    z.e.HI = function() {
        z.Pe().width >= this.qS ? this.start() : this.stop()
    };
    z.e.nW = '\x3cdiv class\x3d"zh-backtotop" style\x3d"display:none"\x3e\x3ca data-action\x3d"backtotop" data-tip\x3d"s$r$回到顶部" href\x3d"javascript:;" class\x3d"btn-backtotop btn-action"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"stick"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e';
    z.e.BD = function() {
        var a = z.Re(window.document),
        b = z.Qe(window.document),
        c = b.x,
        b = b.y,
        d = new Vw,
        f = this.o();
        d.add(new hr(a, [c, b], [0, 0], this.sV, Yw));
        d.add(new mr(this.h, this.Gx, Xw));
        f.g(d, "finish", this.YS);
        f.g(d, "begin", this.LS);
        d.play();
        z.Y.tb("ga_click_back_to_top"); (0, z.Hi)(this, {
            action: "BackToTop",
            element: "Button"
        })
    };
    z.e.LS = function() {
        this.fw = this.po = !0
    };
    z.e.YS = function() {
        this.fw = !1
    };
    z.e.show = function() { (new nr(this.h, this.Gx, Ww)).play();
        this.po = !1
    };
    z.e.hide = function() { (new mr(this.h, this.Gx, Xw)).play();
        this.po = !0
    };
    z.e.Pt = function() {
        this.fw || (1200 <= z.Qe(window.document).y ? this.po && this.show() : this.po || this.hide())
    };
    $w.prototype.link = "想来知乎工作？请发送邮件到 jobs@zhihu.com";
    $w.prototype.YM = "          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
    z.x(ax, z.Yj);
    z.gG = null;
    ax.prototype.init = function() {
        z.gG = this;
        z.bx(this)
    };
    ax.prototype.nT = function() {
        var a = z.Sn(this.jk);
        a && !a.r && Ln(z.Y, [a])
    };
    var dx = window.localStorage && !z.Rh.$l() || z.um && (!z.ym || z.xm);
    ex.prototype.ha = function() {};
    z.x(z.fx, ex);
    z.fx.prototype.ha = function(a, b, c) {
        z.Is(this.element, this.Ze, a, b, void 0, c, this.fU)
    };
    z.x(gx, ex);
    gx.prototype.ha = function(a, b, c, d) {
        z.Is(Wn(a), 0, a, b, this.bi, c, null, d)
    };
    z.x(hx, z.Mn);
    hx.prototype.setPosition = function(a) {
        this.du = a || void 0;
        this.V() && this.ha()
    };
    hx.prototype.ha = function() {
        if (this.du) {
            var a = !this.V() && "move_offscreen" != this.oi(),
            b = this.m();
            a && (b.style.visibility = "hidden", z.Q(b, !0));
            this.du.ha(b, this.EA, this.Kz);
            a && z.Q(b, !1)
        }
    };
    z.x(z.jx, hx);
    var rx = [];
    z.e = z.jx.prototype;
    z.e.cc = null;
    z.e.className = "goog-tooltip";
    z.e.Tp = 500;
    z.e.qo = 0;
    z.e.K = function() {
        return this.da
    };
    z.e.attach = function(a) {
        a = z.L(a);
        this.fb.add(a);
        z.F(a, "mouseover", this.nd, !1, this);
        z.F(a, "mouseout", this.Pl, !1, this);
        z.F(a, "mousemove", this.Nl, !1, this);
        z.F(a, "focus", this.ge, !1, this);
        z.F(a, "blur", this.Pl, !1, this)
    };
    z.e.detach = function(a) {
        if (a) a = z.L(a),
        kx(this, a),
        this.fb.remove(a);
        else {
            for (var b = this.fb.Wc(), c = 0; a = b[c]; c++) kx(this, a);
            this.fb.clear()
        }
    };
    z.e.$x = function() {
        return this.qo
    };
    z.e.Pd = function(a) {
        a = z.Hd(a, null);
        var b = this.m();
        b && z.Fe(b, a)
    };
    z.e.xh = function(a) {
        var b = this.m();
        b && z.P(b);
        z.jx.v.xh.call(this, a);
        a ? (b = this.da.ua().body, b.insertBefore(a, b.lastChild), z.Cc(this.Gk), this.Gk = new z.wj(this.m()), z.Ac(this, this.Gk), z.F(this.Gk, "focusin", this.jj, void 0, this), z.F(this.Gk, "focusout", this.Yp, void 0, this)) : (z.Cc(this.Gk), this.Gk = null)
    };
    z.e.Id = function() {
        return z.pf(this.m())
    };
    z.e.by = z.aa(37);
    z.e.getState = function() {
        return this.Gm ? this.V() ? 4: 1: this.Tl ? 3: this.V() ? 2: 0
    };
    z.e.Zs = function(a) {
        if (!this.V()) return ! 1;
        var b = z.Xn(this.m()),
        c = z.Ig(this.m());
        return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
    };
    z.e.ep = function() {
        if (!z.Mn.prototype.ep.call(this)) return ! 1;
        if (this.anchor) for (var a, b = 0; a = rx[b]; b++) z.mf(a.m(), this.anchor) || a.G(!1);
        z.sb(rx, this);
        a = this.m();
        a.className = this.className;
        this.jj();
        z.F(a, "mouseover", this.zy, !1, this);
        z.F(a, "mouseout", this.nG, !1, this);
        tx(this);
        return ! 0
    };
    z.e.nk = function() {
        z.tb(rx, this);
        for (var a = this.m(), b, c = 0; b = rx[c]; c++) b.anchor && z.mf(a, b.anchor) && b.G(!1);
        this.UI && this.UI.Yp();
        z.md(a, "mouseover", this.zy, !1, this);
        z.md(a, "mouseout", this.nG, !1, this);
        this.anchor = void 0;
        0 == this.getState() && (this.Au = !1);
        z.Mn.prototype.nk.call(this)
    };
    z.e.Mz = function(a, b) {
        this.anchor == a && this.fb.contains(this.anchor) && (this.Au || !this.XY ? (this.G(!1), this.V() || (this.anchor = a, this.setPosition(b || nx(this, 0)), this.G(!0))) : this.anchor = void 0);
        this.Gm = void 0
    };
    z.e.ji = function() {
        return this.fb
    };
    z.e.Dl = function() {
        return this.cc
    };
    z.e.NH = function(a) {
        this.Tl = void 0;
        if (a == this.anchor) {
            a = this.K();
            var b = a.Dl();
            a = b && this.m() && a.contains(this.m(), b);
            null != this.cc && (this.cc == this.m() || this.fb.contains(this.cc)) || a || this.il && this.il.cc || this.G(!1)
        }
    };
    z.e.nd = function(a) {
        var b = mx(this, a.target);
        this.cc = b;
        this.jj();
        b != this.anchor && (this.anchor = b, sx(this, b), qx(this), lx(this, a))
    };
    z.e.Nl = function(a) {
        lx(this, a);
        this.Au = !0
    };
    z.e.ge = function(a) {
        this.cc = a = mx(this, a.target);
        this.Au = !0;
        if (this.anchor != a) {
            this.anchor = a;
            var b = nx(this, 1);
            this.jj();
            sx(this, a, b);
            qx(this)
        }
    };
    z.e.Pl = function(a) {
        var b = mx(this, a.target),
        c = mx(this, a.relatedTarget);
        b != c && (b == this.cc && (this.cc = null), tx(this), this.Au = !1, !this.V() || a.relatedTarget && z.mf(this.m(), a.relatedTarget) ? this.anchor = void 0: this.Yp())
    };
    z.e.zy = function() {
        var a = this.m();
        this.cc != a && (this.jj(), this.cc = a)
    };
    z.e.nG = function(a) {
        var b = this.m();
        this.cc != b || a.relatedTarget && z.mf(b, a.relatedTarget) || (this.cc = null, this.Yp())
    };
    z.e.Yp = function() {
        2 == this.getState() && (this.Tl = z.vd((0, z.q)(this.NH, this, this.anchor), this.$x()))
    };
    z.e.jj = function() {
        this.Tl && (z.wd(this.Tl), this.Tl = void 0)
    };
    z.e.D = function() {
        this.G(!1);
        tx(this);
        this.detach();
        this.m() && z.P(this.m());
        this.cc = null;
        delete this.da;
        z.jx.v.D.call(this)
    };
    z.x(ox, gx);
    ox.prototype.ha = function(a, b, c) {
        b = Wn(a);
        b = Eo(b);
        c = c ? new z.qg(c.top + 10, c.right, c.bottom, c.left + 10) : new z.qg(10, 0, 0, 10);
        Ls(this.bi, a, 4, c, b, 9) & 496 && Ls(this.bi, a, 4, c, b, 5)
    };
    z.x(px, z.fx);
    px.prototype.ha = function(a, b, c) {
        var d = new z.Ge(10, 0);
        z.Is(this.element, this.Ze, a, b, d, c, 9) & 496 && z.Is(this.element, 2, a, 1, d, c, 5)
    };
    z.x(ux, z.jx);
    z.e = ux.prototype;
    z.e.bO = !1;
    z.e.aO = 100;
    z.e.oq = !1;
    z.e.pk = function() {
        ux.v.pk.call(this);
        this.pr = Qn(z.Bo(this.m()));
        this.anchor && (this.dw = Qn(z.Bo(this.anchor)));
        this.oq = this.bO;
        z.F(this.K().ua(), "mousemove", this.Nl, !1, this)
    };
    z.e.nk = function() {
        z.md(this.K().ua(), "mousemove", this.Nl, !1, this);
        this.dw = this.pr = null;
        this.oq = !1;
        ux.v.nk.call(this)
    };
    z.e.Zs = function(a) {
        if (this.so) {
            var b = z.Xn(this.m()),
            c = z.Ig(this.m());
            return b.x - this.so.left <= a.x && a.x <= b.x + c.width + this.so.right && b.y - this.so.top <= a.y && a.y <= b.y + c.height + this.so.bottom
        }
        return ux.v.Zs.call(this, a)
    };
    z.e.NH = function(a) {
        this.Tl = void 0;
        a != this.anchor || xx(this, this.lj) || this.Dl() || this.il && this.il.cc || z.B && 0 == this.lj.x && 0 == this.lj.y || this.G(!1)
    };
    z.e.Nl = function(a) {
        var b = this.V();
        if (this.pr) {
            var c = z.wf(this.K()),
            c = new z.Ge(a.clientX + c.x, a.clientY + c.y);
            xx(this, c) ? b = !1: this.oq && (b = Ho(this.pr, c) >= Ho(this.pr, this.lj))
        }
        if (b) {
            if (this.Yp(), this.cc = null, b = this.il) b.cc = null
        } else 3 == this.getState() && this.jj();
        ux.v.Nl.call(this, a)
    };
    z.e.zy = function() {
        this.Dl() != this.m() && (this.oq = !1, this.cc = this.m())
    };
    z.e.$x = function() {
        return this.oq ? this.aO: ux.v.$x.call(this)
    };
    z.x(z.yx, ux);
    z.e = z.yx.prototype;
    z.e.D = function() {
        z.yx.v.D.call(this);
        z.md(this.La, "mouseover", this.pG, !1, this)
    };
    z.e.iz = function(a) {
        return a.tagName in this.mD && !!a.getAttribute(this.mD[a.tagName])
    };
    z.e.pG = function(a) {
        if (a = a.target) this.iz(a) ? (this.setPosition(null), zx(this, a)) : this.wN && (a = z.vf(a, (0, z.q)(this.iz, this), !1, this.OY)) && (this.setPosition(null), zx(this, a))
    };
    z.e.kA = function(a) {
        return this.dispatchEvent(a)
    };
    z.e.Xn = function() {
        return this.Sf || this.anchor
    };
    z.e.nk = function() {
        z.yx.v.nk.call(this);
        null != this.Sf && Cx(this, this.Sf);
        this.Sf = null
    };
    z.e.nd = function(a) {
        var b = mx(this, a.target);
        b && b != this.anchor ? zx(this, b) : z.yx.v.nd.call(this, a)
    };
    z.e.Pl = function(a) {
        var b = this.anchor,
        c = this.getState();
        z.yx.v.Pl.call(this, a);
        c == this.getState() || 1 != c && 4 != c || (this.anchor = b, Ax(this))
    };
    z.e.Mz = function(a, b) {
        z.yx.v.Mz.call(this, a, b);
        this.V() ? (a != this.Sf && Cx(this, this.Sf), this.Sf = a) : (tx(this), Ax(this))
    };
    z.x(Bx, z.Lc);
    z.x(Dx, z.fx);
    Dx.prototype.ao = function() {
        return 5
    };
    Dx.prototype.ha = function(a, b, c, d) {
        var f = {
            "1-4": "bottom",
            "0-4": "top",
            "0-5": "top",
            "1-5": "bottom",
            "2-5": "top",
            "3-5": "bottom",
            "3-4": "bottom",
            "2-6": "left",
            "2-4": "right"
        },
        g;
        if (this.eD) {
            g = z.Is(this.element, this.Ze, a, b, null, c, 10, d);
            var h = Ex(g, this.Ze),
            k = Ex(g, b);
            g & 496 && (g = z.Is(this.element, h, a, k, null, c, 10, d), g & 496 && (h = Ex(g, h), k = Ex(g, k), this.eD ? z.Is(this.element, h, a, k, null, c, this.ao(), d) : z.Is(this.element, h, a, k, null, c, 0, d)));
            this.cu && (a = (z.ka(h) ? h: this.Ze) + "-" + (z.ka(b) ? b: k), this.cu(f[a], a))
        } else z.Is(this.element, 
        this.Ze, a, b, void 0, c),
        this.cu && (a = this.Ze + "-" + b, this.cu(f[a], a))
    };
    z.x(z.Fx, z.Yj);
    z.e = z.Fx.prototype;
    z.e.defaults = {
        mU: "pm",
        ou: !1,
        Yk: !0
    };
    z.e.xh = function(a) {
        this.h = a
    };
    z.e.m = function() {
        return this.h
    };
    z.e.Sy = function() {
        this.Ia = new z.V(null);
        this.Ia.Oa("发送私信");
        z.Mj(this.Ia, null);
        this.Ia.Df(!0);
        this.Ia.G(!0);
        this.h = this.Ia.S()
    };
    z.e.focus = function() {
        this.init();
        this.pd.focus()
    };
    z.e.init = function() {
        this.HQ || (this.HQ = !0, this.wq && (this.Ia || this.Sy(), this.h.innerHTML = '\x3cdiv class\x3d"zm-pm-wrap"\x3e\x3cdl class\x3d"zm-form-table zm-form-table-medium"\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e发给：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field"\x3e\x3cdiv class\x3d"zm-pm-selector-wrap"\x3e\x3cdiv class\x3d"zg-user-name" style\x3d"display:none;padding:4px 0 0 0"\x3e\x3c/div\x3e\x3cinput class\x3d"zg-form-text-input zm-pm-user-selector" type\x3d"text" /\x3e\x3c/div\x3e\x3c/dd\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e内容：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field zm-form-table-field-last"\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input" style\x3d"font-weight:normal"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/dd\x3e\x3c/dl\x3e\x3cdiv class\x3d"zh-pm-warnmsg" style\x3d"display:none;text-align:right;color:#C3412F;"\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3cdiv class\x3d"zm-item-meta zg-left" style\x3d"margin: 0 0 0 57px;"\x3e\x3cspan class\x3d"zg-text-counter" style\x3d"display:none"\x3e还可以输入 500 字\x3c/span\x3e\x3cspan class\x3d"additional-info" \x3e\x3c/span\x3e\x3c/div\x3e\x3ca name\x3d"cancel" href\x3d"javascript:;" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca name\x3d"send" href\x3d"javascript:;" class\x3d"zg-btn-blue zg-r3px" id\x3d"zh-question-pm-send-button"\x3e发送\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), this.Ih = 
        z.N("zg-user-name", this.h), this.pd = z.N("zg-editor-input", this.h), this.$c = z.N("zm-pm-user-selector", this.h), this.An = z.N("zm-command", this.h), z.N("zg-text-counter", this.h), this.Et = z.N("zh-pm-warnmsg", this.h), (0, window.$)(".additional-info", (0, window.$)(this.h)), new z.Tr(this.pd), this.o().g(this.An, "click", this.Qa).g(this.Ih, "click", this.Qa).g(this.pd, "keydown", this.VP), this.$c && ((new z.Ys("搜索用户")).w(this.$c), this.o().g(this.$c, "blur", this.xN), this.W = new z.lt("/people/autocomplete?type\x3d" + this.J.mU, 
        this.$c, null, null, z.N("zm-pm-wrap", this.h), !0), this.W.tg(!0), this.o().g(this.W, "select", this.zT)), z.T.ue || Ix(this, "未激活用户，不能发送私信。请先激活邮箱。"))
    };
    z.e.VP = function(a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Ds(), a.preventDefault())
    };
    z.e.xN = function() {
        this.WD && (0, window.clearTimeout)(this.WD);
        this.WD = (0, window.setTimeout)((0, z.q)(this.yN, this), 200)
    };
    z.e.yN = function() {
        var a = z.tr(this.$c.value); - 1 === this.Om && a && "搜索用户" !== a && Ix(this, "请输入对方姓名，从下拉菜单里选择收件人")
    };
    z.e.Hu = function(a) {
        this.GV = a
    };
    z.e.show = function() {
        this.init();
        this.wq && (this.Ia.G(!0), this.Ia.ha())
    };
    z.e.zT = function() {
        var a = z.yb(this.W.bg(), 1);
        z.Hx(this, a[3], a[0], !0)
    };
    z.e.Ds = function() {
        if (!this.di || "pending" !== this.di.state()) if ( - 1 === this.Om) Ix(this, "请填写收信人。");
        else {
            var a = this.pd.value; (0, z.ab)(a) ? (a = -1 !== this.gq ? window.$.post("/inbox/reply", {
                message_id: this.gq,
                content: a,
                type: this.MB
            }) : window.$.post("/inbox/post", {
                member_id: this.Om,
                content: a,
                token: this.GV
            }), a.done((0, z.q)(this.BT, this)), this.di = a) : Ix(this, "请填写私信内容。")
        }
    };
    z.e.Qa = function(a) {
        if (a = (a = this.Ug(a.target)) && a.name) switch (a) {
        case "edit":
            this.Om = -1;
            z.wr(this.$c, this.Ih);
            break;
        case "cancel":
            this.wq && this.Ia.G(!1);
            break;
        case "send":
            this.Ds()
        }
    };
    z.e.BT = function(a) {
        Ir("message", "send_message");
        if (!a) return z.X.message("网络异常");
        if (a.r) return Ix(this, a.msg);
        this.wq && this.Ia.G(!1);
        this.J.ou ? window.location.reload() : z.X.message("发送成功")
    };
    z.x(Jx, z.Yj);
    var Ox = {
        p: "MemberProfileCardV2",
        t: "TopicProfileCardV2",
        c: "ColumnProfileCardV2",
        r: "RoundtableProfileCardV2"
    };
    z.e = Jx.prototype;
    z.e.QQ = {
        t: 0,
        r: 2,
        b: 1,
        l: 2
    };
    z.e.init = function() {
        if (!z.sm.Ab && !z.rm("tooltiop")) {
            var a = this.R = new z.yx({
                A: "data-tip",
                SPAN: "data-tip",
                BUTTON: "data-tip",
                I: "data-tip",
                DIV: "data-tip",
                INPUT: "data-tip",
                IMG: "data-tip"
            }),
            b = z.O("div", {
                id: "zh-tooltip"
            });
            window.document.body.appendChild(b);
            this.R.xh(b);
            this.R.Tp = this.WV;
            this.R.qo = this.NQ;
            this.o().g(this.R, "trigger", this.kA);
            var c = (0, window.$)(b),
            d = null;
            a.on("show", 
            function(a) { (0, window.clearTimeout)(d);
                c.addClass("in");
                z.Y.tb({
                    type: "ga_hover_hovercard",
                    target: a.target.Xn()
                })
            }).on("hide", 
            function() {
                c.css({
                    display: "block",
                    visibility: "visible"
                }).removeClass("in").addClass("out");
                d = (0, window.setTimeout)(function() {
                    c.removeClass("out").css({
                        display: "none",
                        visibility: "hidden"
                    })
                },
                1E3)
            });
            this.o().g(this.R, "beforeshow", this.ep).g(this.R, "show", this.mg).g(this.R, "beforehide", this.KS); (0, window.$)(a.m()).on("click", ".member-profile-card-pm", 
            function(b) {
                b.preventDefault();
                var c = (0, window.$)(this);
                a.G(!1);
                z.Kq(function() {
                    var a = new z.Fx({
                        Yk: !1
                    });
                    a.show();
                    z.Hx(a, c.data("pmHash"), c.data("pmName"));
                    z.Gx(a, c.attr("href"));
                    a.pd.focus()
                },
                !0)()
            })
        }
    };
    z.e.KS = function() {
        "s" !== this.bf && (this.Uh[this.bf] && this.Uh[this.bf][this.Kn] && (this.Uh[this.bf][this.Kn] = (0, window.$)(this.R.m()).find(".popover-content").html()), this.bf in Ox && (0, z.Hi)(this.R.m(), {
            action: "Hide",
            element: "Card"
        },
        {
            link: {
                url: this.R.Xn().href
            }
        }))
    };
    z.e.ep = function() {
        var a = this.R.Xn(),
        b = a.getAttribute("data-tip");
        this.BE = a;
        b = b.split("$");
        this.bf = b[0];
        this.Kn = b[2];
        this.nl = b[1];
        this.R.m().setAttribute("data-theme", a.getAttribute("data-theme") || "");
        "s" === this.bf ? (a = this.Kn, b = [], b.push('\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'), b.push('\x3cdiv class\x3d"tooltip-inner content-prewrap"\x3e'), b.push(so(a)), b.push("\x3c/div\x3e"), Nx(this, b.join(""))) : Mx(this, this.bf, this.Kn, this.nl);
        Lx(this);
        a = this.R.Xn();
        this.bf in Ox && a && (!(b = a.getAttribute("href")) || 
        b.startsWith("#") || "http:" !== a.protocol && "https:" !== a.protocol || (b = (0, window.$)("img", a).length ? "Image": "Link", (0, z.Hi)(a, {
            action: "Hover",
            element: b
        },
        {
            link: {
                url: a.href
            }
        })))
    };
    z.e.mg = function() {
        var a = this.bf in Ox;
        a && (z.yo(this.R, {
            module: a ? "HoverCard": null
        }), (0, z.Hm)(this.R, {
            element: "Card"
        }))
    };
    z.e.xw = function() {
        return Kx('\x3cdiv class\x3d"zh-hovercard-spinner"\x3e\x3c/div\x3e', !0)
    };
    z.e.kA = function(a) {
        var b = a.anchor,
        c = b && b.getAttribute("data-tip"),
        d = c.split("$"),
        f = null;
        a = "s" !== d[0];
        z.Io(b, "no-hovercard") && a ? (a = this.R, tx(a), Ax(a)) : c && 1 < d.length ? (b.title && (b.setAttribute("data-original_title", b.title), b.removeAttribute("title")), f = d[1], "s" !== d[0] && (210 > z.Eg(b).y ? "t" === f && (f = "b", b.setAttribute("data-tip", c.replace("$t$", "$b$"))) : (f = "t", b.setAttribute("data-tip", c.replace("$b$", "$t$")))), this.YN = f = new Dx(b, this.QQ[f], "b" === f || "t" === f), b = (0, z.q)(this.ET, this), f.cu = b, this.R.className = 
        a ? "goog-hovercard popover": "tooltip") : (a = this.R, tx(a), Ax(a))
    };
    z.e.ET = function(a, b) {
        var c = this.R.m();
        z.W.remove(c, "top", "bottom", "left", "right");
        z.W.add(c, a);
        var d = z.go(c),
        f = z.go(this.BE),
        g = new z.Ge(c.offsetLeft, c.offsetTop);
        if ("t" === this.nl || "b" === this.nl) {
            var d = (d.width - f.width) / 2,
            h = g.x - d;
            if ("s" === this.bf) z.sg(c, "left", h + "px");
            else {
                var h = z.A(["2-5", "3-5", "3-4", "2-4"], b),
                k = (0, window.$)(".zh-hovercard-spinner", c)[0],
                m = z.N("arrow", c),
                n = z.N("arrow2", c);
                k ? z.sg(c, "left", g.x - d + "px") : h ? z.sg(c, "left", g.x + 83 + "px") : z.sg(c, "left", g.x - 70 + "px");
                var r = f.width / 2;
                m && n && (k || 
                (h ? z.y([m, n], 
                function(a) {
                    z.sg(a, "left", "auto");
                    z.sg(a, "right", r + 70 + "px")
                }) : z.y([m, n], 
                function(a) {
                    z.sg(a, "left", r + 70 + "px")
                })))
            }
        } else z.sg(c, "top", g.y - (d.height - f.height) / 2 + "px"),
        "l" === this.nl && z.Ag(c, g.x - f.width)
    };
    z.x(Qx, z.R);
    z.e = Qx.prototype;
    z.e.Z = function(a) {
        this.h = a;
        this.X = (0, window.$)(this.h);
        this.X.addClass("zh-scroller").css({
            position: "relative",
            overflow: "hidden"
        }).wrapInner('\x3cdiv class\x3d"zh-scroller-content"\x3e\x3c/div\x3e');
        this.X.wrapInner('\x3cdiv class\x3d"zh-scroller-inner"\x3e\x3c/div\x3e');
        this.X.append("\x3cdiv class\x3d'zh-scroller-bar-container'\x3e\x3cdiv\x3e");
        this.X.append('\x3cdiv class\x3d"zh-scroller-bar"\x3e\x3c/div\x3e');
        this.fd = this.X.children(".zh-scroller-inner");
        this.Kk = this.X.children(".zh-scroller-bar-container");
        this.re = 
        this.X.children(".zh-scroller-bar");
        this.Re = this.fd.children(".zh-scroller-content");
        this.lr = this.re[0];
        this.fR = this.fd[0];
        this.content = this.Re[0];
        this.mr = this.Kk[0];
        this.fd.css({
            height: "100%",
            width: "150%",
            overflow: "auto"
        });
        this.re.css({
            position: "absolute",
            right: this.options.right,
            top: this.options.top,
            opacity: this.options.lw,
            background: this.options.hN,
            width: this.options.width,
            "border-radius": 3,
            cursor: "default"
        });
        this.Kk.css({
            position: "absolute",
            right: this.options.right - 1,
            top: 0,
            height: "100%",
            width: this.options.width,
            background: this.options.NN,
            border: "1px solid #444",
            opacity: 0,
            cursor: "default",
            "border-radius": "2px"
        });
        this.Li(this.lr, !1);
        this.Li(this.mr, !1);
        this.update()
    };
    z.e.C = function() {
        Qx.v.C.call(this);
        this.NB = new z.gl(this.iA, 50, this);
        this.options.stopPropagation && this.fd.bind("mousewheel DOMMouseScroll", 
        function(a) {
            var b = null;
            "mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta: "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
            b && (a.preventDefault(), (0, window.$)(this).scrollTop(b + (0, window.$)(this).scrollTop()))
        })
    };
    z.e.enter = function() {
        this.ux || (this.o().g(this.fR, "scroll", 
        function() {
            this.NB.fire()
        }), z.C || (this.o().g(this.mr, "click", this.IS), this.o().g(window.document, "mousedown", this.jT), this.o().g(window.document, "mouseup", this.lT), this.o().g(window.document, "mousemove", this.kT)), this.options.eN ? (this.Qd = new z.td(200), this.o().g(this.Qd, "tick", 
        function() {
            2 === this.Uz || 1 === this.Uz ? (Rx(this), this.Em && this.Kk.css({
                opacity: this.options.fE
            })) : this.Vr || this.ln || (Sx(this, 1E3), this.Kk.css({
                opacity: 0
            }))
        })) : (this.re.css({
            opacity: this.options.lw
        }), 
        this.Kk.css({
            opacity: this.options.fE
        })), this.Qd && this.Qd.start(), Sx(this), this.ux = !0)
    };
    z.e.jT = function(a) {
        a.target === this.lr && (this.Vr = !0, this.iN = a.clientY, this.jN = (0, window.parseInt)(this.re.css("top"), 10));
        a.target !== this.lr && a.target !== this.mr || this.Li(window.document.body, !1)
    };
    z.e.lT = function() {
        this.Vr = !1;
        this.Li(window.document.body, !0)
    };
    z.e.kT = function(a) {
        if (this.Vr) {
            var b = Tx(this, this.jN + (a.clientY - this.iN));
            this.fd.scrollTop(b)
        }
        this.Uz = a.target === this.lr ? 2: a.target === this.mr ? 1: 0
    };
    z.e.iA = function() {
        var a = this.fd.scrollTop(),
        b = this.Re.height(),
        c = this.fd.height(),
        d = a / b * (c - 2 * this.options.top);
        Rx(this);
        this.re.css({
            top: d + this.options.top
        });
        this.dispatchEvent(new Ux(this, a, b - a - c))
    };
    z.e.update = function() {
        var a = this.Wg(this.fd).height,
        b = this.Wg(this.Re).height;
        a >= b ? (this.Em = !1, this.re.hide()) : (this.Em = !0, this.re.show());
        this.re.css({
            height: a / b * (a - 2 * this.options.top)
        });
        this.Kk.css({
            height: a - 2
        });
        this.Re.css({
            overflow: "hidden",
            width: this.X.width(),
            "min-height": "100%"
        });
        return this
    };
    z.e.Wg = function(a) {
        var b = {
            height: a.height(),
            width: a.width()
        };
        if (!b.height) {
            var c = a.css("display"),
            d = a.css("position"),
            f = a.css("visibility");
            a.css({
                position: "absolute",
                display: "block",
                visibility: "hidden"
            });
            b = {
                height: a.height(),
                width: a.width()
            };
            a.css({
                position: d,
                display: c,
                visibility: f
            })
        }
        return b
    };
    z.e.IS = function(a) {
        this.scrollTo(Tx(this, a.offsetY - this.re.height() / 2))
    };
    z.e.scrollTop = function(a) {
        this.Em && (a = a || 200, Rx(this), this.fd.stop().animate({
            scrollTop: 0
        },
        a));
        return this
    };
    z.e.Li = function(a, b) {
        z.Ao(a, !b)
    };
    z.e.scrollBy = function(a, b) {
        if (this.Em) {
            Rx(this);
            var c = b || this.Wg(this.fd).height,
            c = Math.abs(c),
            c = this.fd.scrollTop() + (a ? -1: 1) * c;
            this.fd.stop().animate({
                scrollTop: c
            },
            200)
        }
    };
    z.e.scrollTo = function(a) {
        this.Em && (Rx(this), this.fd.stop().animate({
            scrollTop: a
        },
        200));
        return this
    };
    z.x(Ux, z.Lc);
    z.x(z.Vx, z.R);
    z.Vx.prototype.defaults = {
        bI: ".tab-nav",
        TI: ".tab-panel",
        Gg: "active"
    };
    z.Vx.prototype.Z = function(a) {
        if (a) {
            this.h = a;
            var b = this,
            c = this.J;
            this.Rk = (0, window.$)(c.bI, a);
            this.Wm = (0, window.$)(c.TI, a);
            this.Rj = this.Rk.index("." + c.Gg);
            this.Rk.on("click", 
            function() {
                b.select(b.Rk.index(this))
            });
            this.Rk.attr("role", "tab").parent().attr("role", "tablist")
        }
    };
    z.Vx.prototype.select = function(a) {
        if (! (0 > a || a > this.Rk.size()) && (this.dispatchEvent({
            type: "action",
            data: {
                index: a
            }
        }), a !== this.Rj)) {
            this.Rj = a;
            var b = this.J;
            this.Rk.eq(a).addClass(b.Gg).attr("aria-selected", "true").siblings().removeClass(b.Gg).attr("aria-selected", "false");
            b = this.Wm.eq(a);
            this.Wm.not(b.show()).hide();
            this.dispatchEvent({
                type: "select",
                data: {
                    index: a
                }
            })
        }
    };
    z.Vx.prototype.index = function() {
        return this.Rj
    };
    z.l(Wx, z.Yj);
    z.e = Wx.prototype;
    z.e.init = function() {
        this.Ci = z.L("zh-top-nav-live-new");
        this.EC = (0, window.$)(this.Ci);
        this.kq = z.L("zh-top-nav-count-wrap");
        this.Dn = z.O("span", {
            id: "zh-top-nav-count",
            className: "zu-top-nav-count zg-noti-number",
            style: "display:none"
        });
        this.contents = z.Ro("zm-noti7-content", this.Ci);
        this.Nw = z.Ro("zm-noti7-content-body", this.Ci);
        this.kq.appendChild(this.Dn);
        this.o().g(this.kq, "click", this.tK).g(this.kq, "keypress", 
        function(a) {
            32 === a.keyCode && (a.preventDefault(), this.tK())
        });
        this.o().g(z.Y, "notification", 
        this.hQ);
        this.o().g(this.Ci, "click", 
        function(a) {
            a = a.target;
            a.href && /group_id=/.test(a.href + "") && (0, window.$)(a).parent(".unread").removeClass("unread")
        });
        this.Av = (0, window.$)(".zm-noti7-popup-tab-container .icon");
        Xx(this);
        this.PK || (this.sg = z.nb(this.contents, 
        function(a) {
            var b = new Qx;
            b.w(a);
            return b
        }));
        $x(this);
        this.nm = z.L("zh-top-nav-pm-count");
        this.nm || (this.nm = z.O("span"));
        this.hm = z.L("zh-top-nav-new-pm");
        this.hm || (this.hm = z.O("span"));
        this.HG = (0, window.parseInt)((0, window.$)(this.hm).attr("data-count") || 
        (0, window.$)(this.nm).attr("data-count"), 10) || 0;
        this.o().g(z.Y, "inbox", this.UP)
    };
    z.e.hQ = function(a) {
        this.jI = this.Rf;
        this.Rf = a.yf;
        this.Td = this.Rf[0] + this.Rf[1] + this.Rf[2];
        z.Q(this.Dn, !!this.Td);
        this.Dn.innerHTML = cy(this.Td);
        z.y(this.Rf, 
        function(a, c) {
            a ? (this.Av.eq(c).addClass("withdot"), this.cache[c] = !1) : this.Av.eq(c).removeClass("withdot");
            this.bF && 0 < a - this.jI[c] && this.Jl(c)
        },
        this);
        by(this)
    };
    z.e.tK = function() {
        this.visible ? z.sm.Ab ? fy(this, !1) : fy(this, !!this.Td) : fy(this, !0);
        by(this)
    };
    z.e.Jl = function(a) {
        if (!this.Fj[a]) {
            var b = this.Fj[a] = new z.Z(!1);
            this.o().ya(b, "success", 
            function() {
                var b = z.Sn(this.Fj[a]);
                this.Fj[a] = null;
                if (b) if (b.r) z.X.message(b.msg);
                else {
                    this.Rw = !0;
                    var d = b.msg;
                    if (d) 1 === a && (d = '\x3cdiv class\x3d"zm-noti7-content-head-item"\x3e\x3cspan class\x3d"zg-gray-normal"\x3e这些人最近关注了你\x3c/span\x3e\x3c/div\x3e' + d);
                    else {
                        switch (a) {
                        case 0:
                            d = "暂无新消息";
                            break;
                        case 1:
                            d = "有人关注你时会显示在这里";
                            break;
                        case 2:
                            d = "你的答案收到赞同、感谢时会显示在这里"
                        }
                        d = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e' + d + "\x3c/div\x3e"
                    }
                    this.cache[a] = 
                    d;
                    b.hasMore && 0 === this.cp[a] && (this.cp[a] = b.offset);
                    this.Fm[a] && (Yx(this, a), this.Fm[a] = !1)
                }
            });
            b.ajax("/noti7/stack/" + this.types[a] + "?limit\x3d10\x26r\x3d" + (0, z.I)(), "", "GET")
        }
    };
    z.e.Dz = function(a) {
        var b = this;
        if (this.Fj[a]) return window.Promise.reject("Request already in progress");
        if (0 === this.cp[a]) return window.Promise.resolve(!1);
        var c = this.Nw[a],
        d = z.Xe('\x3cdiv class\x3d"text-center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e');
        c.appendChild(d);
        return this.Fj[a] = window.$.get("/noti7/stack/" + this.types[a], {
            offset: this.cp[a],
            r: (0, z.I)()
        }).then(function(f) {
            z.P(d);
            if (f) if (f.r) z.X.message(f.msg);
            else {
                var g = z.Xe(f.msg);
                c.appendChild(g);
                b.Fj[a] = null;
                b.sg && b.sg[a] && 
                b.sg[a].update();
                b.cp[a] = f.offset;
                return f.hasMore
            }
        })
    };
    z.e.UP = function(a) {
        this.HG = a = window.$.isNumeric(a) ? a: a.yf;
        0 !== a ? (this.hm.innerHTML = this.nm.innerHTML = a, this.hm.style.visibility = this.nm.style.visibility = "visible") : this.hm.style.visibility = this.nm.style.visibility = "hidden";
        by(this)
    };
    z.e.vs = function(a) {
        z.mf(this.Ci, a.target) || z.mf(this.kq, a.target) || fy(this, !1)
    };
    z.x(hy, z.R);
    z.e = hy.prototype;
    z.e.defaults = {
        trigger: "hover",
        II: "open",
        hideFocus: !1
    };
    z.e.Ob = function() {
        return this.Bg.length && this.ed.length
    };
    z.e.w = function(a) {
        if (a) {
            var b = (0, window.$)(a),
            c = b.prev();
            this.Bg = b;
            this.ed = c;
            this.$parent = b.parent();
            hy.v.w.call(this, a);
            return this
        }
    };
    z.e.toggle = function() {
        this.ub() ? this.close() : this.open()
    };
    z.e.ub = function() {
        return this.Bg.is(":visible")
    };
    z.e.open = function() {
        this.Bg.attr("aria-hidden", "false").parent().addClass(this.J.II);
        this.ed.attr("aria-expanded", "true")
    };
    z.e.close = function() {
        this.Bg.attr("aria-hidden", "true").parent().removeClass(this.J.II);
        this.ed.attr("aria-expanded", "false")
    };
    z.e.PS = function(a) {
        var b = a.keyCode;
        switch (b) {
        case 32:
            a.preventDefault();
            this.toggle();
            break;
        case 27:
        case 9:
            this.close();
            break;
        case 38:
        case 40:
            jy(this, 38 === b ? -1: 0)
        }
    };
    z.e.fT = function(a) {
        var b = a.keyCode;
        switch (b) {
        case 27:
        case 9:
            this.close();
            this.ed.focus();
            break;
        case 38:
        case 40:
            a.preventDefault(),
            jy(this, this.index + (38 === b ? -1: 1))
        }
    };
    z.e.C = function() {
        var a = this,
        b = this.J;
        iy(this);
        this.Bg.on("keydown", (0, z.q)(this.fT, this));
        this.ed.on("keydown", (0, z.q)(this.PS, this));
        var c = z.Vm ? "click": b.trigger;
        if ("hover" === c) this.$parent.on("hover", (0, z.q)(function(a) {
            "mouseenter" === a.type ? this.open() : this.close()
        },
        this));
        else if ("click" === c) this.ed.on("click", (0, z.q)(function(a) {
            a.preventDefault();
            this.toggle();
            this.ed.focus()
        },
        this));
        this.$parent.on("focusout", 
        function() { (0, window.setTimeout)(function() {
                a.$parent.get(0).contains(window.document.activeElement) || 
                a.close()
            })
        });
        if (b.hideFocus) this.Bg.children().find("a").on("click", 
        function() {
            this.blur()
        })
    };
    z.l(ky, z.R);
    z.e = ky.prototype;
    z.e.C = function() {
        z.R.prototype.C.call(this);
        this.Py()
    };
    z.e.ks = function() {
        return this.W
    };
    z.e.WB = function(a, b, c) {
        if (a) {
            var d = {
                query: (0, z.ab)(this.m().value)
            };
            z.yi({
                xc: !0,
                category: "search",
                action: a,
                label: b,
                value: c,
                attributes: d
            })
        }
    };
    z.e.Py = function() {
        var a = this,
        b = this.m();
        z.xl(z.cn.register("/", 
        function() { (0, window.setTimeout)(function() {
                b.focus()
            });
            z.yr(b, null, 500)
        }), {
            group: "导航",
            name: "搜索"
        });
        var c = new kt,
        d = b.getAttribute("placeholder") || "搜索你感兴趣的内容...";
        this.W = new z.lt("/autocomplete", b, null, null, b.offsetParent, null, [d], null, c);
        this.W.jn = !1;
        this.W.tg(!0);
        this.o().g(this.W, "select", this.xy);
        var f = b.form;
        if (f) {
            var g = function(a) { (0, z.ab)(b.value) ? f.submit() : a.preventDefault()
            };
            this.o().g(b, "keydown", 
            function(b) {
                13 === b.keyCode && (a.WB("visit_search_result", 
                "enter"), g(b))
            });
            this.o().g(f, "submit", g); (0, window.$)(":submit", f).click(function() {
                a.WB("visit_search_result", "search_box_submit")
            })
        }
        this.o().g(this.W, "suggestionsupdate", this.Uv);
        var h = (0, z.q)(function() {
            this.W.OE = !(this.metaKey || this.Pz)
        },
        this);
        this.o().g(window.document, "keydown", 
        function(a) {
            a.metaKey && (this.metaKey = !0, h())
        });
        this.o().g(window.document, "keyup", 
        function(a) {
            if (91 === a.keyCode || 224 === a.keyCode) this.metaKey = !1,
            h()
        });
        this.o().g(window.document, "mouseup", 
        function(a) {
            z.Qc(a, 1) && (this.Pz = 
            !0, h(), (0, window.setTimeout)((0, z.q)(function() {
                this.Pz = !1;
                h()
            },
            this), 0))
        });
        this.o().g(b, "mousedown", 
        function(a) {
            a.stopPropagation();
            return ! 0
        })
    };
    z.e.Uv = function() {
        var a = this.W.Sa,
        b = this.W.M.Af;
        if (a && 0 !== a.length) {
            if (1 === a.length) {
                var c = z.O("div", {
                    className: "zu-autocomplete-empty"
                },
                "没有找到相关的结果");
                z.bf(c, b[0]);
                z.P(b[0])
            }
            z.y(a, 
            function(c, f) {
                if (0 === f || c[0] !== a[f - 1][0]) {
                    var g = b[f],
                    h = {
                        people: "用户",
                        topic: "话题",
                        question: "问题"
                    } [c[0]];
                    h && (h = z.O("div", {
                        className: "zu-autocomplete-row-label ac-row"
                    },
                    h), z.bf(h, g), this.o().g(this.W, "suggestionsupdate", Qr))
                }
            },
            this)
        }
    };
    z.e.xy = function(a) {
        var b = this.W.bg(),
        c = this.W.M.Wl,
        d = z.yb(b, 1),
        f = null,
        b = b[0];
        "topic" === b ? (f = "/topic/" + d[1], f = ly(this, f)) : "people" === b ? (f = "/people/" + d[1], f = ly(this, f)) : "question" === b ? (f = "/question/" + d[2], f = ly(this, f)) : "search_link" === b && (f = "/search?q\x3d" + (0, window.encodeURI)(d[0]) + "\x26type\x3dcontent");
        f && (z.Y.tb({
            type: "ga_serach_select",
            data: {
                type: b,
                index: c
            }
        }), d = c + 1, (d = {
            topic: ["visit_topic", "instant_search_result_topic", d],
            question: ["visit_question", "instant_search_result_question", d],
            people: ["visit_people_profile", 
            "instant_search_result_people", d],
            search_link: ["visit_search_result"]
        } [b]) && this.WB.apply(this, d), z.bj.set("s-q", (0, window.encodeURI)(this.W.Wb), -1, "/"), z.bj.set("s-i", c + 1, -1, "/"), z.bj.set("sid", (0, z.zF)(), -1, "/"), z.bj.set("s-t", "autocomplete", -1, "/"), this.metaKey || this.Pz ? window.open(f) : window.location.href = f);
        a.stopPropagation();
        a.preventDefault()
    };
    z.x(my, z.Yj);
    my.prototype.init = function() {
        if ((0, window.$)(".zu-top").length) {
            z.Rh.get("__Q_ISNEWLYCREATED__") && (z.Rh.remove("__Q_ISNEWLYCREATED__"), z.S && (z.S.ZG = !0));
            if (z.T.Fb())(new Wx).init();
            else(0, window.$)("#zh-top-inner").on("click", 'a[href\x3d"/topic"]', 
            function() {
                var a = new z.Sk;
                a.bd("top_navigation_topics");
                a.show();
                return ! 1
            }).on("click", ".js-signin-noauth", 
            function() {
                var a = new z.Sk;
                a.bd("top_navigation_sign_in");
                a.show();
                return ! 1
            }).on("click", ".js-signin-noauth-mobile", 
            function() {
                z.U("app-promotion", "click_mobileweb_signin_btn");
                var a = new z.Sk;
                a.bd("top_navigation_sign_in_mobile");
                a.show();
                return ! 1
            }).on("click", ".js-signup-noauth", 
            function() {
                var a = new z.Wk;
                a.bd("top_navigation_sign_up");
                a.show();
                return ! 1
            }).on("click", ".js-signup-noauth-mobile", 
            function() {
                z.U("app-promotion", "click_mobileweb_signup_btn");
                var a = new z.Wk;
                a.bd("top_navigation_sign_up_mobile");
                a.show();
                return ! 1
            });
            if (this.ZE = z.L("zh-top-search")) {
                this.lR = z.N("zu-top-search-input", this.ZE);
                var a = z.L("zu-top-add-question");
                a && this.o().g(a, "click", this.SV);
                z.Wj || 
                !z.Vj ? (new hy({
                    hideFocus: !0
                })).w((0, window.$)("#top-nav-profile-dropdown").get(0)) : ny();
                this.Py()
            }
        }
    };
    my.prototype.Py = function() {
        var a = (new z.qh(window.location)).Ce().get("q");
        a ? a = (0, window.decodeURIComponent)(a) : (a = z.Rh.get("query"), z.Rh.remove("query"));
        var b = this.lR;
        a && (b.value = a);
        z.Vj && this.o().g(b, ["focus", "blur"], 
        function(a) { (0, window.$)(".zu-top").toggleClass("is-searching", "focus" === a.type)
        }); (new ky).w(b)
    };
    my.prototype.SV = z.Kq(function() {
        z.Mv.ba().show()
    },
    !0, "#ask");
    window.JSON || (window.JSON = {
        parse: Fn,
        stringify: Uo
    });
    z.C && (Object.getPrototypeOf = function(a) {
        return function(b) {
            return b.__proto__ || a.apply(this, arguments)
        }
    } (Object.getPrototypeOf));
    z.x(oy, z.R);
    z.hG = new oy;
    z.hG.w(window.document);
    z.x(py, z.Cj);
    z.la(py);
    z.e = py.prototype;
    z.e.hc = function() {
        z.Mj(this, null);
        this.o().g(window.document, "click", this.vs)
    };
    z.e.vs = function(a) {
        a = a.target;
        if ("IMG" === a.tagName && z.W.has(a, this.sW)) {
            var b = a.getAttribute("data-original");
            if (b && !z.wm && !z.Io(a, "editable")) {
                this.ia('\x3cdiv class\x3d"zm-light-box-x1" id\x3d"zm-light-box-x1"\x3e\x3cdiv class\x3d"zm-light-box-x2" id\x3d"zm-light-box-x2"\x3e\x3cimg src\x3d"' + b + '" class\x3d"zm-light-box-img-el" /\x3e\x3cdiv class\x3d"zm-light-box-footer"\x3e\x3ca class\x3d"zm-light-box-show-origin" href\x3d"' + b + '" target\x3d"_blank"\x3e查看原图\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                this.G(!0);
                z.W.add(this.m(), "zm-light-box-fullscreen-image");
                var b = z.Pe(),
                c = z.L("zm-light-box-x1"),
                d = z.L("zm-light-box-x2"),
                f = a.getAttribute("data-rawheight"),
                g = a.getAttribute("data-rawwidth"),
                g = g ? +g: 0; (f ? +f: 0) > b.height - 80 ? d.style.marginTop = "40px": c.style.lineHeight = b.height + "px";
                d.style.width = g > b.width - 80 ? b.width - 80 + "px": g + "px";
                z.Y.tb({
                    type: "ga_click_enlarge_image",
                    target: a
                })
            }
        }
    };
    z.e.ha = z.p;
    z.e.focus = z.p;
    z.e.zJ = z.Hl;
    z.e.RP = function() {
        this.G(!1);
        z.W.remove(window.document.body, this.ID)
    };
    z.e.mg = function() {
        py.v.mg.call(this);
        z.W.add(window.document.body, this.ID);
        this.o().ya(window.document, "click", this.RP)
    };
    z.e.B = function() {
        py.v.B.call(this);
        z.W.add(this.m(), "zm-light-box")
    };
    z.e.Jz = function() {
        this.Qc = this.K().B("div", this.Sc + "-bg zm-light-box-background");
        z.Q(this.Qc, !1)
    };
    py.ba();
    z.kg("common");
    window.console || (window.console = {
        info: z.p,
        log: z.p,
        warning: z.p,
        error: z.p
    });
    z.hG.on(["click!", "show!", "visit!"], 
    function(a) {
        var b = a.zc;
        b.category && b.action && z.U(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
    });
    z.ud = window;
    (function() {
        function a(a) {
            return (0, z.Ji)({
                responseId: a.getResponseHeader("X-Za-Response-Id")
            })
        }
        z.Vj = z.sm.Ab;
        window.$.ajaxPrefilter(function(a, c, d) {
            var f; ! 1 !== c.processData && "get" !== a.type.toLowerCase() && (f = z.bj.get("_xsrf")) && d.setRequestHeader("X-Xsrftoken", f)
        });
        window.$.ajaxPrefilter(function(b, c, d) {
            return d.always(function() {
                return a(d)
            })
        });
        up("*", 
        function(b, c) {
            return a(c)
        }); (new my).init()
    })();
    z.Dp.dispatchEvent("init"); (0, window.$)(function() {
        z.Dp.dispatchEvent("postinit")
    });
    z.T.Fb() ? (up("json", 
    function(a) { (a = a.profile_result) && (0, window.$)(a).css("border-top", "1px solid #eee").appendTo(window.document.body)
    }), z.sm.Ab && (window.$.fx.off = !0), (0, window.$)(function() { (new ax).init()
    })) : (0, window.$)("body").addClass("no-auth");
    z.Va(window.location.host, "zhihu.com") || (z.Ni = !0); (0, window.$)(window.document.body).children("div.zu-main").attr("role", "main");
    window.document.addEventListener && window.document.addEventListener("touchstart", z.p, !1);
    z.Wj && (0, window.$)('meta[name\x3d"viewport"]').attr("content", "width\x3ddevice-width, initial-scale\x3d1.0"); (0, window.$)(function() {
        window.znonce && window.znonce.evalScripts(); (new Zw).init();
        new Jx;
        var a = new $w;
        window.console && window.console.info && window.console.info(a.YM + "\n\n" + a.link);
        cx();
        z.U.init()
    });
    z.l(z.qy, z.R);
    z.e = z.qy.prototype;
    z.e.C = function() {
        var a = this;
        z.R.prototype.C.call(this);
        var b = this.xf,
        c = b.Da,
        d = b.validator,
        f = b.mw,
        g = b.Xq,
        h = this.SU.bind(this),
        k = this.RU.bind(this);
        c.on("change keyup", ".is-error", 
        function() {
            h((0, window.$)(this))
        }).submit(function() {
            if (c.hasClass("form-submitting")) return ! 1;
            k();
            var b = d(a.getData());
            if (b) return sy(a, b),
            !1;
            f.call(c).then(function() {
                c.addClass("form-submitting");
                a.submit().then(function(b) {
                    b = void 0 === b ? {}: b;
                    c.removeClass("form-submitting");
                    if (!b.r) return g.call(c, b);
                    sy(a, b.msg)
                }).catch(function() {
                    c.removeClass("form-submitting")
                })
            });
            return ! 1
        }).find('[type\x3d"submit"]').attr("disabled", !1)
    };
    z.e.SU = function(a) {
        a.removeClass("is-error").find("." + this.xf.No + "-error").remove()
    };
    z.e.RU = function() {
        this.Da.removeClass("is-error").find("." + this.xf.No + "-error").remove()
    };
    z.e.submit = function() {
        var a = this.xf,
        b = a.Da,
        a = a.OK,
        c = b.attr("contentType") || "application/json",
        d = {
            url: b.attr("action"),
            type: b.attr("method") || "POST"
        };
        if (a) Object.assign(d, {
            data: new window.FormData(b[0]),
            async: !1,
            cache: !1,
            contentType: !1,
            processData: !1
        });
        else {
            var f = this;
            Object.assign(d, {
                data: function() {
                    var a = f.getData();
                    "application/json" === c && (a = JSON.stringify(a));
                    return a
                } (),
                contentType: c
            })
        }
        return new window.Promise(function(a, b) {
            window.$.ajax(d).done(a).fail(b)
        })
    };
    z.e.getData = function() {
        return ty(this.Da, this.xf.GF)
    };
    z.x(uy, z.G);
    uy.prototype.handleEvent = function(a) {
        var b = 0,
        c = 0,
        d = 0;
        a = a.gc;
        if ("mousewheel" == a.type) {
            c = 1;
            if (z.C || z.D && (z.ml || z.E("532.0"))) c = 40;
            d = vy( - a.wheelDelta, c);
            z.ka(a.wheelDeltaX) ? (b = vy( - a.wheelDeltaX, c), c = vy( - a.wheelDeltaY, c)) : c = d
        } else d = a.detail,
        100 < d ? d = 3: -100 > d && (d = -3),
        z.ka(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d: c = d;
        z.qa(this.KH) && (b = $o(b, -this.KH, this.KH));
        z.qa(this.LH) && (c = $o(c, -this.LH, this.LH));
        this.ER && (b = -b);
        b = new wy(d, a, b, c);
        this.dispatchEvent(b)
    };
    uy.prototype.D = function() {
        uy.v.D.call(this);
        z.nd(this.yH);
        this.yH = null
    };
    z.x(wy, z.Pc);
    z.x(xy, z.G);
    z.e = xy.prototype;
    z.e.qe = 0;
    z.e.Zo = 0;
    z.e.Vo = 100;
    z.e.Qn = 0;
    z.e.Dk = 1;
    z.e.UG = !1;
    z.e.Ft = !1;
    z.e.Ea = function(a) {
        a = yy(this, a);
        this.qe != a && (this.qe = a + this.Qn > this.Vo ? this.Vo - this.Qn: a < this.Zo ? this.Zo: a, this.UG || this.Ft || this.dispatchEvent("change"))
    };
    z.e.Y = function() {
        return yy(this, this.qe)
    };
    z.e.Eu = function(a) {
        a = yy(this, a);
        this.Qn != a && (this.Qn = 0 > a ? 0: this.qe + a > this.Vo ? this.Vo - this.qe: a, this.UG || this.Ft || this.dispatchEvent("change"))
    };
    z.e.ki = function() {
        var a = this.Qn;
        return null == this.Dk ? a: Math.round(a / this.Dk) * this.Dk
    };
    z.e.Fc = function() {
        return yy(this, this.Zo)
    };
    z.e.Vc = function() {
        return yy(this, this.Vo)
    };
    z.e.co = function() {
        return this.Dk
    };
    z.x(zy, z.R);
    z.e = zy.prototype;
    z.e.Nb = "horizontal";
    z.e.Eo = !1;
    z.e.vS = !1;
    z.e.Nf = 10;
    z.e.Dt = 0;
    z.e.XG = !0;
    z.e.$H = 0;
    z.e.PL = 1E3;
    z.e.ec = !0;
    z.e.ce = !1;
    z.e.B = function() {
        zy.v.B.call(this);
        var a = this.K().B("DIV", this.U(this.Nb));
        this.Z(a)
    };
    z.e.Z = function(a) {
        zy.v.Z.call(this, a);
        z.ij(a, this.U(this.Nb));
        a = this.m();
        var b = z.Le(null, "goog-slider-thumb", a)[0];
        b || (b = this.K().B("DIV", "goog-slider-thumb"), z.cj(b, "button"), a.appendChild(b));
        this.cb = this.Gd = b;
        z.cj(this.m(), "slider");
        Py(this)
    };
    z.e.C = function() {
        zy.v.C.call(this);
        this.pe = new z.pj(this.cb);
        this.Wf = new z.pj(this.Gd);
        this.pe.Qg(this.ce);
        this.Wf.Qg(this.ce);
        this.pe.ax = this.Wf.ax = z.p;
        this.vb = new Lp(this.m());
        Ay(this, !0);
        this.m().tabIndex = 0;
        Jy(this)
    };
    z.e.Hb = function() {
        zy.v.Hb.call(this);
        z.Dc(this.pe, this.Wf, this.vb, this.gk)
    };
    z.e.ts = function(a) {
        var b = a.Ur == this.pe ? this.cb: this.Gd,
        c;
        "vertical" == this.Nb ? (c = this.m().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.Vc() - this.Fc()) + this.Fc()) : c = a.left / (this.m().clientWidth - b.offsetWidth) * (this.Vc() - this.Fc()) + this.Fc();
        c = a.Ur == this.pe ? Math.min(Math.max(c, this.Fc()), this.Y() + this.ki()) : Math.min(Math.max(c, this.Y()), this.Vc());
        Hy(this, b, c)
    };
    z.e.Es = function(a) {
        var b = "start" == a.type;
        z.vo(this.m(), "goog-slider-dragging", b);
        z.vo(a.target.handle, "goog-slider-thumb-dragging", b);
        a = a.Ur == this.pe;
        b ? (this.dispatchEvent("h"), this.dispatchEvent(a ? "d": "f")) : (this.dispatchEvent("i"), this.dispatchEvent(a ? "e": "g"))
    };
    z.e.lf = function(a) {
        var b = !0;
        switch (a.keyCode) {
        case 36:
            Ny(this, this.Fc());
            break;
        case 35:
            Ny(this, this.Vc());
            break;
        case 33:
            Fy(this, this.Nf);
            break;
        case 34:
            Fy(this, -this.Nf);
            break;
        case 37:
            var c = this.ce && this.qd() ? 1: -1;
            Fy(this, a.shiftKey ? c * this.Nf: c * this.sq);
            break;
        case 40:
            Fy(this, a.shiftKey ? -this.Nf: -this.sq);
            break;
        case 39:
            c = this.ce && this.qd() ? -1: 1;
            Fy(this, a.shiftKey ? c * this.Nf: c * this.sq);
            break;
        case 38:
            Fy(this, a.shiftKey ? this.Nf: this.sq);
            break;
        default:
            b = !1
        }
        b && a.preventDefault()
    };
    z.e.As = function(a) {
        this.m().focus && this.m().focus();
        var b = a.target;
        z.mf(this.cb, b) || z.mf(this.Gd, b) || (b = "click" == a.type, b && (0, z.I)() < this.$H + this.PL || (b || (this.$H = (0, z.I)()), this.vS ? Ny(this, Dy(this, a)) : (this.FB(a), this.Qe = Iy(this, Dy(this, a)), this.IG = "vertical" == this.Nb ? this.ht < this.Qe.offsetTop: this.ht > My(this, this.Qe) + this.Qe.offsetWidth, a = z.Je(this.m()), this.o().g(a, "mouseup", this.EB, !0).g(this.m(), "mousemove", this.FB), this.ri || (this.ri = new z.td(200), this.o().g(this.ri, "tick", this.lG)), this.lG(), 
        this.ri.start())))
    };
    z.e.eG = function(a) {
        Fy(this, (0 < a.detail ? -1: 1) * this.sq);
        a.preventDefault()
    };
    z.e.lG = function() {
        var a;
        if ("vertical" == this.Nb) {
            var b = this.ht,
            c = this.Qe.offsetTop;
            this.IG ? b < c && (a = Ey(this, this.Qe) + this.Nf) : b > c + this.Qe.offsetHeight && (a = Ey(this, this.Qe) - this.Nf)
        } else b = this.ht,
        c = My(this, this.Qe),
        this.IG ? b > c + this.Qe.offsetWidth && (a = Ey(this, this.Qe) + this.Nf) : b < c && (a = Ey(this, this.Qe) - this.Nf);
        z.ka(a) && Hy(this, this.Qe, a)
    };
    z.e.EB = function() {
        this.ri && this.ri.stop();
        var a = z.Je(this.m());
        this.o().qa(a, "mouseup", this.EB, !0).qa(this.m(), "mousemove", this.FB)
    };
    z.e.FB = function(a) {
        this.ht = Cy(this, a)
    };
    z.e.Fc = function() {
        return this.Bb.Fc()
    };
    z.e.Vc = function() {
        return this.Bb.Vc()
    };
    z.e.iG = function() {
        Jy(this);
        Py(this);
        this.dispatchEvent("change")
    };
    z.e.Do = function() {
        return this.Eo
    };
    z.e.CO = function() {
        this.Eo = !1
    };
    z.e.setOrientation = function(a) {
        if (this.Nb != a) {
            var b = this.U(this.Nb),
            c = this.U(a);
            this.Nb = a;
            this.m() && (a = this.m(), z.hj(a, b) && (z.kj(a, b), z.ij(a, c)), b = this.ce && this.qd() ? "right": "left", this.cb.style[b] = this.cb.style.top = "", this.Gd.style[b] = this.Gd.style.top = "", this.Sb && (this.Sb.style[b] = this.Sb.style.top = "", this.Sb.style.width = this.Sb.style.height = ""), Jy(this))
        }
    };
    z.e.D = function() {
        zy.v.D.call(this);
        this.ri && this.ri.H();
        delete this.ri;
        this.In && this.In.H();
        delete this.In;
        delete this.cb;
        delete this.Gd;
        this.Sb && delete this.Sb;
        this.Bb.H();
        delete this.Bb;
        this.vb && (this.vb.H(), delete this.vb);
        this.gk && (this.gk.H(), delete this.gk);
        this.pe && (this.pe.H(), delete this.pe);
        this.Wf && (this.Wf.H(), delete this.Wf)
    };
    z.e.sq = 1;
    z.e.co = function() {
        return this.Bb.co()
    };
    z.e.Y = function() {
        return this.Bb.Y()
    };
    z.e.Ea = function(a) {
        Hy(this, this.cb, a)
    };
    z.e.ki = function() {
        return this.Bb.ki()
    };
    z.e.Eu = function(a) {
        Hy(this, this.Gd, this.Bb.Y() + a)
    };
    z.e.G = function(a) {
        z.Q(this.m(), a);
        a && Jy(this)
    };
    z.e.Wa = function(a) {
        this.ec != a && this.dispatchEvent(a ? "enable": "disable") && (this.ec = a, Ay(this, a), a || this.EB(), z.vo(this.m(), "goog-slider-disabled", !a))
    };
    z.e.isEnabled = function() {
        return this.ec
    };
    z.x(Qy, zy);
    Qy.prototype.U = function(a) {
        return "vertical" == a ? "goog-slider-vertical": "goog-slider-horizontal"
    };
    z.x(Ry, z.R);
    z.e = Ry.prototype;
    z.e.defaults = {
        gE: 310,
        hE: 310,
        zg: 250,
        Ag: 250,
        kS: 2,
        opacity: .25,
        fZ: "#eee"
    };
    z.e.Z = function(a) {
        Ry.v.Z.call(this, a);
        this.src = this.h.src;
        this.options.src = this.src;
        this.options.Um = (this.options.gE - this.options.zg) / 2;
        this.options.Tm = (this.options.hE - this.options.Ag) / 2;
        this.Er()
    };
    z.e.Er = function() {
        var a = this.options;
        this.tC = (0, window.$)((0, z.Sv)('\x3cdiv class\x3d"avatar-editor-container" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx"\x3e\x3cdiv class\x3d"avatar-editor-container-inner" style\x3d"height:\x3c%\x3dcontainerHeight%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;margin:\x3c%\x3dwindowMarginTop%\x3epx \x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window-shadow" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;"\x3e\x3c/div\x3e\x3cdiv class\x3d"avatar-editor-window-inner" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx; height:\x3c%\x3dcontainerHeight%\x3epx;margin:-\x3c%\x3dwindowMarginTop%\x3epx 0 0 -\x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cimg class\x3d"inner" title\x3d"拖动相片"/\x3e\x3c/div\x3e\x3c/div\x3e\x3cimg class\x3d"outer" style\x3d"opacity:\x3c%\x3dopacity%\x3e;"/\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-wrap"\x3e\x3ci class\x3d"zg-icon image-minus"\x3e\x3c/i\x3e\x3ci class\x3d"zg-icon image-plus"\x3e\x3c/i\x3e\x3cdiv class\x3d"goog-slider"\x3e\x3cdiv class\x3d"line"\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-thumb"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', {
            containerWidth: a.hE,
            containerHeight: a.gE,
            windowHeight: a.zg,
            windowWidth: a.Ag,
            windowMarginTop: a.Um,
            windowMarginLeft: a.Tm,
            src: a.src,
            opacity: a.opacity
        }));
        this.Gb = this.tC[0];
        this.tC.insertBefore(this.h);
        z.Q(this.h, !1);
        this.RN = z.N("avatar-editor-container-inner", this.Gb);
        this.Ns = z.N("outer", this.Gb);
        this.My = z.N("inner", this.Gb);
        this.Gq = (0, window.$)(this.Ns);
        this.yv = (0, window.$)(this.My);
        this.FG = 0;
        this.Gq.load((0, z.q)(this.EK, this));
        this.yv.load((0, z.q)(this.EK, this));
        this.My.src = this.Ns.src = this.options.src;
        this.$V = z.N("goog-slider", 
        this.Gb)
    };
    z.e.C = function() {
        this.vB = new Qy;
        this.vB.w(this.$V);
        this.o().g(this.RN, ["mousedown", "touchstart"], 
        function(a) {
            var b = new z.pj(this.Gb);
            b.addEventListener("drag", (0, z.q)(function(a) {
                var b = this.zoom;
                this.Me = {
                    zq: this.options.Ag / b,
                    eo: this.options.zg / b,
                    x: (this.options.Tm - (this.OG.left + (a.clientX - this.Ou))) / b,
                    y: (this.options.Um - (this.OG.top + (a.clientY - this.Pu))) / b
                };
                Uy(this)
            },
            this));
            b.addEventListener("end", (0, z.q)(function() {
                b.H()
            },
            this));
            b.Km(a);
            this.Km(a)
        });
        this.o().g(this.Gb, ["touchmove"], 
        function(a) {
            a.stopPropagation();
            a.preventDefault()
        });
        this.o().g(this.vB, "change", 
        function() {
            var a = this.vB.Y(),
            b = this.mL;
            Sy(this, (this.mX - b) * a / 100 + b)
        })
    };
    z.e.EK = function() {
        this.bR || (this.My.complete && this.Ns.complete ? this.init() : (this.FG++, 2 <= this.FG && this.init()))
    };
    z.e.init = function() {
        var a,
        b;
        b = this.Gq[0];
        if (b.naturalWidth) a = b.naturalWidth,
        b = b.naturalHeight;
        else {
            var c = new window.Image;
            c.src = b.src;
            a = c.width;
            b = c.height
        }
        this.Ms = a;
        this.Ls = b;
        a = this.options.Ag / this.Ms;
        b = this.options.zg / this.Ls;
        this.mL = a = b > a ? b: a;
        this.mX = this.mL * this.options.kS;
        this.Me = {
            eo: this.options.Ag / a,
            zq: this.options.zg / a,
            x: 0,
            y: 0
        };
        Sy(this, a);
        Ty(this, this.Ms / 2, this.Ls / 2);
        this.bR = !0
    };
    z.e.Km = function(a) {
        this.Ou = a.clientX;
        this.Pu = a.clientY;
        this.OG = this.yv.position();
        this.Gq.position()
    };
    z.e.support = function() {
        return "getContext" in window.document.createElement("canvas")
    };
    z.x(z.Vy, z.R);
    z.Wy = 1;
    z.e = z.Vy.prototype;
    z.e.Z = function(a) {
        this.h = a;
        this.B()
    };
    z.e.B = function() {
        this.dC = z.sm.uq + "/upload_avatar";
        this.Da = (0, window.$)((0, z.Sv)('\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3duploadAction%\x3e"\x3e\x3clabel for\x3d"avt_file"\x3e\x3c/label\x3e\x3cinput type\x3d"file" accept\x3d"image/*" name\x3d"picture" id\x3d"avt_file" /\x3e\x3cinput type\x3d"hidden" name\x3d"handle_mode" value\x3d"upload" /\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"\x3c%\x3dtype%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"dest_id" value\x3d"\x3c%\x3ddest_id%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"return_size" value\x3d"\x3c%\x3dreturn_size%\x3e" /\x3e\x3c/form\x3e', {
            uploadAction: this.dC,
            type: this.jr,
            dest_id: this.jr === z.Wy ? z.T[3] : this.hF,
            return_size: this.AJ
        }));
        this.vL = (0, window.$)('\x3ciframe id\x3d"av_up_frame" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0px; width: 0px; left: -9000px;"\x3e\x3c/iframe\x3e');
        this.vL.appendTo(window.document.body);
        this.input = this.Da.find("input[type\x3dfile]")[0];
        z.C ? (this.Da.find("label").html((0, window.$)(this.h).html()), this.h.innerHTML = "", (0, window.$)(this.h).append(this.Da), this.Da.addClass("avatar-editor-form-ie")) : (this.Da.insertAfter(this.h), 
        (0, window.$)(this.h).click(window.$.proxy(function() {
            this.input.click()
        },
        this)));
        this.o().g(this.input, "change", this.Ic).g(this.input, "click", 
        function(a) { ! 1 === this.dispatchEvent("beforeopen") && a.preventDefault()
        });
        this.o().g(z.Y, "iframe_data", 
        function(a) { (a = a.yf) && !a.r ? "upload" === a.handle_mode ? (this.Xl = a.url, this.Ly = a.id, Xy() || this.mp()) : "resize" === a.handle_mode && ((0, window.$)(this.h).find("form").remove(), this.sE(a)) : z.X.message(a.msg)
        })
    };
    z.e.Ic = function(a) {
        Yy(this);
        a = this.input = a.target;
        if (Xy()) {
            if (a.files && a.files[0]) {
                this.file = a = a.files[0];
                var b = new window.FileReader;
                b.onload = (0, z.q)(function(a) {
                    this.Xl = a.target.result;
                    this.mp()
                },
                this);
                b.readAsDataURL(a)
            }
        } else this.Da[0].submit();
        az(this)
    };
    z.e.mp = function() {
        var a = this.dialog.S();
        this.Ky = new window.Image;
        this.Ky.src = this.Xl;
        a = (0, window.$)(a);
        a.html("");
        a.append(this.Ky);
        this.Sw = new Ry;
        this.Sw.w(this.Ky)
    };
    z.e.sE = function(a) {
        a && !a.r ? this.data = a: z.X.message(a.msg);
        this.dispatchEvent({
            type: "success",
            src: this.data
        });
        this.dialog.G(!1)
    };
    z.e.getData = function() {
        return this.data || null
    };
    z.e.de = function(a) {
        return this.data ? this.data.url.replace(/(\.\w+)$/, "_" + a + "$1") : ""
    };
    z.l(z.cz, z.R);
    z.cz.prototype.C = function() {
        z.R.prototype.C.call(this);
        var a = this.cU,
        b = this.m(),
        c = new z.Vy(z.Wy);
        c.w(b);
        var d = (0, window.$)(".Avatar", b),
        f = (0, window.$)(".Spinner", b);
        this.o().g(c, "beforepost", 
        function() {
            f.show()
        }).g(c, "success", 
        function() {
            var b = {
                method: "save",
                params: {
                    data: {
                        avatar_path: c.getData().id
                    }
                }
            };
            window.$.post("/node/ProfileHeaderV2", b, 
            function(b) {
                f.hide();
                b && b.r ? z.X.message("更新失败") : (d.add(".top-nav-profile .Avatar").attr({
                    src: c.de("l"),
                    srcset: c.de("xl") + " 2x"
                }), a.zi(b))
            })
        })
    };
    z.iG = function(a, b) {
        var c = [],
        d = [].slice,
        f = z.Rr(a, 
        function() {
            c.length && (b(c), c = [])
        });
        return function() {
            c.push(d.call(arguments));
            f()
        }
    } (550, 
    function(a) {
        z.T.Fb() && (a = {
            items: JSON.stringify(a)
        },
        window.$.post("/lastread/touch", a))
    });
    z.x(z.dz, z.fx);
    z.dz.prototype.ao = function() {
        return this.Po
    };
    z.dz.prototype.zm = function(a) {
        this.Po = a
    };
    z.dz.prototype.ha = function(a, b, c, d) {
        var f = z.Is(this.element, this.Ze, a, b, null, c, 10, d, this.rA);
        if (f & 496) {
            var g = ez(f, this.Ze);
            b = ez(f, b);
            f = z.Is(this.element, g, a, b, null, c, 10, d, this.rA);
            f & 496 && (g = ez(f, g), b = ez(f, b), z.Is(this.element, g, a, b, null, c, this.ao(), d, this.rA))
        }
    };
    z.x(fz, Np);
    z.la(fz);
    fz.prototype.U = function() {
        return "goog-menuheader"
    };
    z.x(gz, Wp);
    z.Up("goog-menuheader", 
    function() {
        return new gz(null)
    });
    z.x(hz, Np);
    z.la(hz);
    z.e = hz.prototype;
    z.e.hf = function() {
        return "menuitem"
    };
    z.e.B = function(a) {
        var b = a.K().B("DIV", this.Zf(a).join(" "), jz(this, a.Ua(), a.K()));
        lz(this, a, b, Qp(a, 8) || Qp(a, 16));
        return b
    };
    z.e.S = function(a) {
        return a && a.firstChild
    };
    z.e.w = function(a, b) {
        var c = z.hf(b),
        d = iz(this, 2);
        c && z.hj(c, d) || b.appendChild(jz(this, b.childNodes, a.K()));
        z.hj(b, "goog-option") && (a.Mp(!0), this.Mp(a, b, !0));
        return hz.v.w.call(this, a, b)
    };
    z.e.ia = function(a, b) {
        var c = this.S(a),
        d = kz(this, a) ? c.firstChild: null;
        hz.v.ia.call(this, a, b);
        d && !kz(this, a) && c.insertBefore(d, c.firstChild || null)
    };
    z.e.Li = function(a, b, c) {
        a && b && lz(this, a, b, c)
    };
    z.e.Mp = function(a, b, c) {
        a && b && lz(this, a, b, c)
    };
    z.e.Yn = function(a) {
        switch (a) {
        case 2:
            return iz(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return hz.v.Yn.call(this, a)
        }
    };
    z.e.rs = function(a) {
        var b = iz(this, 0);
        switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return hz.v.rs.call(this, a)
        }
    };
    z.e.U = function() {
        return "goog-menuitem"
    };
    z.x(z.mz, Wp);
    z.e = z.mz.prototype;
    z.e.Y = function() {
        var a = this.Rz;
        return null != a ? a: this.Vg()
    };
    z.e.Ea = function(a) {
        this.Rz = a
    };
    z.e.Tb = function(a, b) {
        z.mz.v.Tb.call(this, a, b);
        switch (a) {
        case 8:
            this.qf() && !b && this.Lc(!1);
            var c = this.m();
            c && this.M.Li(this, c, b);
            break;
        case 16:
            (c = this.m()) && this.M.Mp(this, c, b)
        }
    };
    z.e.Li = function(a) {
        this.Tb(8, a)
    };
    z.e.Mp = function(a) {
        this.Tb(16, a)
    };
    z.e.Vg = function() {
        var a = this.Ua();
        return z.na(a) ? (a = z.nb(a, 
        function(a) {
            return z.kf(a) && (z.hj(a, "goog-menuitem-accel") || z.hj(a, "goog-menuitem-mnemonic-separator")) ? "": z.Jo(a)
        }).join(""), np(a)) : z.mz.v.Vg.call(this)
    };
    z.e.nf = function(a) {
        var b = this.getParent();
        if (b) {
            var c = b.JI;
            b.JI = null;
            if (b = c && z.qa(a.clientX)) b = new z.Ge(a.clientX, a.clientY),
            b = c == b ? !0: c && b ? c.x == b.x && c.y == b.y: !1;
            if (b) return
        }
        z.mz.v.nf.call(this, a)
    };
    z.e.mf = function(a) {
        return a.keyCode == this.Qz && this.Nd(a) ? !0: z.mz.v.mf.call(this, a)
    };
    z.e.aP = function() {
        return this.Qz
    };
    z.Up("goog-menuitem", 
    function() {
        return new z.mz(null)
    });
    z.mz.prototype.ni = function() {
        return Qp(this, 16) ? "menuitemcheckbox": Qp(this, 8) ? "menuitemradio": z.mz.v.ni.call(this)
    };
    z.mz.prototype.getParent = function() {
        return Wp.prototype.getParent.call(this)
    };
    z.mz.prototype.mi = function() {
        return Wp.prototype.mi.call(this)
    };
    z.x(nz, Np);
    z.la(nz);
    nz.prototype.B = function(a) {
        return a.K().B("DIV", this.U())
    };
    nz.prototype.w = function(a, b) {
        b.id && Pn(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.B(a);
            z.bf(b, c);
            z.P(c)
        } else z.ij(b, this.U());
        return b
    };
    nz.prototype.ia = function() {};
    nz.prototype.U = function() {
        return "goog-menuseparator"
    };
    z.x(z.oz, Wp);
    z.oz.prototype.C = function() {
        z.oz.v.C.call(this);
        z.cj(this.m(), "separator")
    };
    z.Up("goog-menuseparator", 
    function() {
        return new z.oz
    });
    z.x(pz, Wr);
    z.la(pz);
    z.e = pz.prototype;
    z.e.Ob = function(a) {
        return "UL" == a.tagName || pz.v.Ob.call(this, a)
    };
    z.e.Zn = function(a) {
        return "HR" == a.tagName ? new z.oz: pz.v.Zn.call(this, a)
    };
    z.e.Pf = function(a, b) {
        return z.mf(a.m(), b)
    };
    z.e.U = function() {
        return "goog-menu"
    };
    z.e.He = function(a) {
        pz.v.He.call(this, a);
        z.dj(a.m(), "haspopup", "true")
    };
    z.x(z.qz, z.oz);
    z.Up("goog-menuseparator", 
    function() {
        return new z.oz
    });
    z.x(z.rz, z.Zr);
    z.e = z.rz.prototype;
    z.e.dn = !0;
    z.e.MM = !1;
    z.e.U = function() {
        return this.M.U()
    };
    z.e.Pf = function(a) {
        if (this.M.Pf(this, a)) return ! 0;
        for (var b = 0, c = z.ah(this); b < c; b++) {
            var d = z.bh(this, b);
            if ("function" == typeof d.Pf && d.Pf(a)) return ! 0
        }
        return ! 1
    };
    z.e.Fa = function(a) {
        this.L(a, !0)
    };
    z.e.ej = function(a, b) {
        this.Uk(a, b, !0)
    };
    z.e.removeItem = function(a) { (a = this.removeChild(a, !0)) && a.H()
    };
    z.e.li = function(a) {
        return z.bh(this, a)
    };
    z.e.Hl = function() {
        return z.ah(this)
    };
    z.e.gb = function() {
        var a = [];
        z.ch(this, 
        function(b) {
            a.push(b)
        });
        return a
    };
    z.e.setPosition = function(a, b) {
        var c = this.V();
        c || z.Q(this.m(), !0);
        z.Co(this.m(), a, b);
        c || z.Q(this.m(), !1)
    };
    z.e.G = function(a, b, c) { (b = z.rz.v.G.call(this, a, b)) && a && this.wa && this.dn && this.Zb().focus();
        this.JI = a && c && z.qa(c.clientX) ? new z.Ge(c.clientX, c.clientY) : null;
        return b
    };
    z.e.oy = function(a) {
        this.dn && this.Zb().focus();
        return z.rz.v.oy.call(this, a)
    };
    z.e.ND = function(a) {
        return (this.MM || a.isEnabled()) && a.V() && Qp(a, 2)
    };
    z.e.Z = function(a) {
        var b = this.M,
        c;
        c = this.K();
        c = z.Me(c.La, "DIV", b.U() + "-content", a);
        for (var d = c.length, f = 0; f < d; f++) Yr(b, this, c[f]);
        z.rz.v.Z.call(this, a)
    };
    z.e.mf = function(a) {
        var b = z.rz.v.mf.call(this, a);
        b || z.ch(this, 
        function(c) { ! b && c.aP && c.Qz == a.keyCode && (this.isEnabled() && this.Nc(c), b = c.$b(a))
        },
        this);
        return b
    };
    z.e.xb = function(a) {
        z.rz.v.xb.call(this, a); (a = z.bh(this, a)) && Do(a.m(), this.m())
    };
    z.x(tz, z.dz);
    z.x(uz, z.Tp);
    z.la(uz);
    z.e = uz.prototype;
    z.e.B = function(a) {
        var b = {
            "class": "goog-inline-block " + this.Zf(a).join(" ")
        },
        b = a.K().B("DIV", b, this.Lg(a.Ua(), a.K()));
        this.wd(b, a.Kl());
        return b
    };
    z.e.hf = function() {
        return "button"
    };
    z.e.S = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    };
    z.e.Lg = function(a, b) {
        return b.B("DIV", "goog-inline-block " + (this.U() + "-outer-box"), b.B("DIV", "goog-inline-block " + (this.U() + "-inner-box"), a))
    };
    z.e.Ob = function(a) {
        return "DIV" == a.tagName
    };
    z.e.w = function(a, b) {
        vz(b, !0);
        vz(b, !1);
        var c;
        a: {
            c = a.K().LF(b);
            var d = this.U() + "-outer-box";
            if (c && z.hj(c, d) && (c = a.K().LF(c), d = this.U() + "-inner-box", c && z.hj(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.Lg(b.childNodes, a.K()));
        z.jj(b, ["goog-inline-block", this.U()]);
        return uz.v.w.call(this, a, b)
    };
    z.e.U = function() {
        return "goog-custom-button"
    };
    z.x(wz, uz);
    z.la(wz);
    z.e = wz.prototype;
    z.e.S = function(a) {
        return wz.v.S.call(this, a && a.firstChild)
    };
    z.e.w = function(a, b) {
        var c = z.Le("*", "goog-menu", b)[0];
        if (c) {
            z.Q(c, !1);
            z.Je(c).body.appendChild(c);
            var d = new z.rz;
            d.w(c);
            a.yh(d)
        }
        return wz.v.w.call(this, a, b)
    };
    z.e.Lg = function(a, b) {
        return wz.v.Lg.call(this, [this.createCaption(a, b), b.B("DIV", "goog-inline-block " + (this.U() + "-dropdown"), " ")], b)
    };
    z.e.createCaption = function(a, b) {
        return xz(a, this.U(), b)
    };
    z.e.U = function() {
        return "goog-menu-button"
    };
    z.x(z.yz, z.cq);
    z.e = z.yz.prototype;
    z.e.at = !1;
    z.e.xk = !1;
    z.e.BV = !1;
    z.e.C = function() {
        z.yz.v.C.call(this);
        Dz(this, !0);
        this.ka && Cz(this, this.ka, !0);
        z.dj(this.h, "haspopup", !!this.ka)
    };
    z.e.Hb = function() {
        z.yz.v.Hb.call(this);
        Dz(this, !1);
        if (this.ka) {
            this.Cb(!1);
            this.ka.Hb();
            Cz(this, this.ka, !1);
            var a = this.ka.m();
            a && z.P(a)
        }
    };
    z.e.D = function() {
        z.yz.v.D.call(this);
        this.ka && (this.ka.H(), delete this.ka);
        delete this.rU;
        this.ma.H()
    };
    z.e.he = function(a) {
        z.yz.v.he.call(this, a);
        this.uc() && (this.Cb(!this.ub(), a), this.ka && (a = this.ub(), this.ka.vf = a))
    };
    z.e.nf = function(a) {
        z.yz.v.nf.call(this, a);
        this.ka && !this.uc() && (this.ka.vf = !1)
    };
    z.e.Nd = function() {
        this.setActive(!1);
        return ! 0
    };
    z.e.xP = function(a) {
        this.ka && this.ka.V() && !this.Pf(a.target) && this.Cb(!1)
    };
    z.e.Pf = function(a) {
        return a && z.mf(this.m(), a) || this.ka && this.ka.Pf(a) || !1
    };
    z.e.mf = function(a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(), "keyup" != a.type) return ! 0
        } else if ("key" != a.type) return ! 1;
        if (this.ka && this.ka.V()) {
            var b = 13 == a.keyCode || 32 == a.keyCode,
            c = this.ka.$b(a);
            return 27 == a.keyCode || b ? (this.Cb(!1), !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Cb(!0, a), !0) : !1
    };
    z.e.mo = function() {
        this.Cb(!1)
    };
    z.e.dQ = function() {
        this.uc() || this.Cb(!1)
    };
    z.e.Xc = function(a) {
        this.at || this.Cb(!1);
        z.yz.v.Xc.call(this, a)
    };
    z.e.Ya = function() {
        this.ka || this.yh(new z.rz(this.K(), this.mS));
        return this.ka || null
    };
    z.e.yh = function(a) {
        var b = this.ka;
        if (a != b && (b && (this.Cb(!1), this.wa && Cz(this, b, !1), delete this.ka), this.wa && z.dj(this.h, "haspopup", !!a), a)) {
            this.ka = a;
            z.Zg(a, this);
            a.G(!1);
            var c = this.at; (a.dn = c) && a.Oe(!0);
            this.wa && Cz(this, a, !0)
        }
        return b
    };
    z.e.Fa = function(a) {
        this.Ya().L(a, !0)
    };
    z.e.ej = function(a, b) {
        this.Ya().Uk(a, b, !0)
    };
    z.e.removeItem = function(a) { (a = this.Ya().removeChild(a, !0)) && a.H()
    };
    z.e.li = function(a) {
        return this.ka ? z.bh(this.ka, a) : null
    };
    z.e.Hl = function() {
        return this.ka ? z.ah(this.ka) : 0
    };
    z.e.G = function(a, b) {
        var c = z.yz.v.G.call(this, a, b);
        c && !this.V() && this.Cb(!1);
        return c
    };
    z.e.Wa = function(a) {
        z.yz.v.Wa.call(this, a);
        this.isEnabled() || this.Cb(!1)
    };
    z.e.$J = function() {
        this.Cb(!0)
    };
    z.e.Cb = function(a, b) {
        z.yz.v.Cb.call(this, a);
        if (this.ka && !!(this.N & 64) == a) {
            if (a) {
                if (!this.ka.wa) if (this.xk) {
                    var c = z.Po(this.m());
                    c ? this.ka.Cp(c.parentNode, c) : this.ka.render(this.m().parentNode)
                } else this.ka.render();
                this.YK = Eo(this.m());
                this.LD = z.Bo(this.m());
                Bz(this);
                c = !!b && (13 == b.keyCode || 32 == b.keyCode);
                b && (40 == b.keyCode || 38 == b.keyCode) || c && this.BV ? z.cs(this.ka) : this.ka.xb( - 1)
            } else {
                this.setActive(!1);
                this.ka.vf = !1;
                if (c = this.m()) z.dj(c, "activedescendant", ""),
                z.dj(c, "owns", "");
                null != this.Wt && (this.Wt = 
                void 0, (c = this.ka.m()) && z.Gg(c, "", ""))
            }
            this.ka.G(a, !1, b);
            if (!this.Fd) {
                var c = this.o(),
                d = a ? c.g: c.qa;
                d.call(c, this.K().ua(), "mousedown", this.xP, !0);
                this.at && d.call(c, this.ka, "blur", this.dQ);
                d.call(c, this.ma, "tick", this.sp);
                a ? this.ma.start() : this.ma.stop()
            }
        }
        this.ka && this.ka.m() && this.ka.h.removeAttribute("aria-hidden")
    };
    z.e.sp = function() {
        var a = z.Bo(this.m()),
        b = Eo(this.m()),
        c = this.LD; (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.YK, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.LD = a, this.YK = b, Bz(this))
    };
    z.e.ry = function(a) { (a = a.target.m()) && Ez(this, a)
    };
    z.e.WP = function(a) {
        Qp(this, 32) && this.Zb() && this.ka && this.ka.V() && a.stopPropagation()
    };
    z.e.Ay = function() {
        if (!bs(this.ka)) {
            var a = this.m();
            z.dj(a, "activedescendant", "");
            z.dj(a, "owns", "")
        }
    };
    z.e.ly = function(a) {
        if (this.ub() && a.target instanceof z.mz) {
            a = a.target;
            var b = a.m();
            a.V() && a.N & 2 && null != b && Ez(this, b)
        }
    };
    z.Up("goog-menu-button", 
    function() {
        return new z.yz(null)
    });
    z.x(Fz, ex);
    Fz.prototype.ha = function(a, b, c, d) {
        var f = Fo(z.Je(a)),
        g = this.bi.x + f.x,
        f = this.bi.y + f.y,
        h = Js(a),
        g = g - h.x,
        f = f - h.y;
        Ls(new z.Ge(g, f), a, b, c, null, null, d)
    };
    z.x(Gz, Fz);
    Gz.prototype.Po = 0;
    Gz.prototype.zm = function(a) {
        this.Po = a
    };
    Gz.prototype.ha = function(a, b, c, d) {
        var f = Wn(a),
        f = Eo(f),
        g;
        g = z.J(a);
        g = z.Re(g.La);
        g = new z.Ge(this.bi.x + g.scrollLeft, this.bi.y + g.scrollTop);
        var h = b,
        k = Ls(g, a, h, c, f, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 2;
            if (k & 64 || k & 128) h ^= 1;
            k = Ls(g, a, h, c, f, 10, d);
            0 != (k & 496) && Ls(g, a, b, c, f, this.Po, d)
        }
    };
    z.x(z.Hz, z.rz);
    z.e = z.Hz.prototype;
    z.e.yW = !1;
    z.e.oH = 0;
    z.e.Sf = null;
    z.e.Z = function(a) {
        z.Hz.v.Z.call(this, a); (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.K().m(a), 1)
    };
    z.e.C = function() {
        z.Hz.v.C.call(this);
        this.Hf.forEach(this.sD, this);
        var a = this.o();
        a.g(this, "action", this.BS);
        a.g(this.K().ua(), "mousedown", this.oI, !0);
        z.D && a.g(this.K().ua(), "contextmenu", this.oI, !0)
    };
    z.e.attach = function(a, b, c, d, f) {
        a && this.Hf.Qf(z.ua(a)) || (a ? (b = {
            h: a,
            lK: b,
            lS: c,
            zx: d ? "contextmenu": "mousedown",
            Kz: f
        },
        this.Hf.set(z.ua(a), b)) : b = null, this.wa && this.sD(b), a = z.Ba(this.gT, a), this.m() && this.o().g(this.m(), "keydown", a))
    };
    z.e.gT = function(a, b) {
        if (27 == b.keyCode) a.focus();
        else {
            var c = z.bh(this, this.Ta);
            if (c) {
                var c = c.m(),
                d = new z.Pc(b.gc, c);
                d.target = c;
                if (32 == b.keyCode || 13 == b.keyCode) z.Vc(c) ? z.sd(c, "keydown", !1, d) : z.pd(c, "keydown", !1, d);
                32 == b.keyCode && this.hide()
            }
        }
    };
    z.e.sD = function(a) {
        this.o().g(a.h, a.zx, this.EI);
        "contextmenu" != a.zx && this.o().g(a.h, "keydown", this.GT)
    };
    z.e.detach = function(a) {
        if (!a || !this.Hf.Qf(z.ua(a))) throw Error("Menu not attached to provided element, unable to detach.");
        a = z.ua(a);
        if (this.wa) {
            var b = this.Hf.get(a);
            this.o().qa(b.h, b.zx, this.EI)
        }
        this.Hf.remove(a)
    };
    z.e.$J = function(a, b, c) {
        b = z.ka(a.lK) ? new z.dz(a.h, a.lK, !0) : new Gz(b, c);
        b.zm && b.zm(5);
        z.Iz(this, b, a.lS, a.Kz, a.h)
    };
    z.e.hide = function() {
        this.V() && (this.G(!1), this.V() || (this.oH = (0, z.I)(), this.Sf = null))
    };
    z.e.aH = function() {
        return this.V() || 150 > (0, z.I)() - this.oH
    };
    z.e.BS = function() {
        this.hide()
    };
    z.e.EI = function(a) {
        Jz(this, a)
    };
    z.e.GT = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Jz(this, a);
        40 == a.keyCode && z.cs(this)
    };
    z.e.oI = function(a) {
        this.V() && !this.Pf(a.target) && this.hide()
    };
    z.e.Xc = function(a) {
        z.Hz.v.Xc.call(this, a);
        this.hide()
    };
    z.e.D = function() {
        z.Hz.v.D.call(this);
        this.Hf && (this.Hf.clear(), delete this.Hf)
    };
    z.x(Kz, hz);
    z.la(Kz);
    Kz.prototype.B = function(a) {
        var b = Kz.v.B.call(this, a);
        z.ij(b, "goog-submenu");
        Lz(this, a, b);
        return b
    };
    Kz.prototype.w = function(a, b) {
        b = Kz.v.w.call(this, a, b);
        z.ij(b, "goog-submenu");
        Lz(this, a, b);
        var c = z.Le("DIV", "goog-menu", b);
        if (c.length) {
            var d = new z.rz(a.K()),
            c = c[0];
            z.Q(c, !1);
            a.K().ua().body.appendChild(c);
            d.w(c);
            a.yh(d, !0)
        }
        return b
    };
    Kz.prototype.ia = function(a, b) {
        var c = this.S(a),
        d = c && c.lastChild;
        Kz.v.ia.call(this, a, b);
        d && c.lastChild != d && z.hj(d, "goog-submenu-arrow") && c.appendChild(d)
    };
    Kz.prototype.He = function(a) {
        Kz.v.He.call(this, a);
        var b = a.S(),
        c = a.K(),
        c = z.Me(c.La, "SPAN", "goog-submenu-arrow", b)[0];
        Mz(a, c);
        c != b.lastChild && b.appendChild(c);
        z.dj(a.m(), "haspopup", "true")
    };
    z.x(Nz, z.mz);
    var fD = 218;
    z.e = Nz.prototype;
    z.e.Yd = null;
    z.e.qB = null;
    z.e.Nz = !1;
    z.e.mc = null;
    z.e.cs = !1;
    z.e.Yq = !0;
    z.e.CR = !1;
    z.e.C = function() {
        Nz.v.C.call(this);
        this.o().g(this.getParent(), "hide", this.zI);
        this.mc && Rz(this, this.mc, !0)
    };
    z.e.Hb = function() {
        this.o().qa(this.getParent(), "hide", this.zI);
        this.mc && (Rz(this, this.mc, !1), this.cs || (this.mc.Hb(), z.P(this.mc.m())));
        Nz.v.Hb.call(this)
    };
    z.e.D = function() {
        this.mc && !this.cs && this.mc.H();
        this.mc = null;
        Nz.v.D.call(this)
    };
    z.e.Nc = function(a, b) {
        Nz.v.Nc.call(this, a);
        b && (this.Ya().vf = !0);
        a || (this.Yd && z.wd(this.Yd), this.Yd = z.vd(this.Ng, fD, this))
    };
    z.e.Lu = function() {
        var a = this.getParent();
        a && bs(a) == this && (Qz(this, !0), Pz(this))
    };
    z.e.Ng = function() {
        var a = this.mc;
        a && a.getParent() == this && (Qz(this, !1), z.ch(a, 
        function(a) {
            "function" == typeof a.Ng && a.Ng()
        }))
    };
    z.e.G = function(a, b) {
        var c = Nz.v.G.call(this, a, b);
        c && !this.V() && this.Ng();
        return c
    };
    z.e.$b = function(a) {
        var b = a.keyCode,
        c = this.qd() ? 37: 39,
        d = this.qd() ? 39: 37;
        if (!this.Nz) {
            if (!this.isEnabled() || b != c && b != this.Qz) return ! 1;
            this.Lu();
            z.cs(this.Ya());
            Oz(this)
        } else if (!this.Ya().$b(a)) if (b == d) this.Ng();
        else return ! 1;
        a.preventDefault();
        return ! 0
    };
    z.e.RS = function() {
        this.mc.getParent() == this && (Oz(this), this.mi().Nc(this), Pz(this))
    };
    z.e.zI = function(a) {
        a.target == this.mi() && (this.Ng(), Oz(this))
    };
    z.e.nd = function(a) {
        this.isEnabled() && (Oz(this), this.qB = z.vd(this.Lu, fD, this));
        Nz.v.nd.call(this, a)
    };
    z.e.Nd = function(a) {
        Oz(this);
        if (Qp(this, 8) || Qp(this, 16)) return Nz.v.Nd.call(this, a);
        this.Lu();
        return ! 0
    };
    z.e.Fa = function(a) {
        this.Ya().L(a, !0)
    };
    z.e.ej = function(a, b) {
        this.Ya().Uk(a, b, !0)
    };
    z.e.removeItem = function(a) { (a = this.Ya().removeChild(a, !0)) && a.H()
    };
    z.e.li = function(a) {
        return z.bh(this.Ya(), a)
    };
    z.e.Hl = function() {
        return z.ah(this.Ya())
    };
    z.e.gb = function() {
        return this.Ya().gb()
    };
    z.e.Ya = function() {
        this.mc ? this.cs && this.mc.getParent() != this && z.Zg(this.mc, this) : this.yh(new z.rz(this.K()), !0);
        this.mc.m() || this.mc.B();
        return this.mc
    };
    z.e.yh = function(a, b) {
        var c = this.mc;
        a != c && (c && (this.Ng(), this.wa && Rz(this, c, !1)), this.mc = a, this.cs = !b, a && (z.Zg(a, this), a.G(!1, !0), a.dn = !1, a.Oe(!1), this.wa && Rz(this, a, !0)))
    };
    z.e.Pf = function(a) {
        return this.Ya().Pf(a)
    };
    z.Up("goog-submenu", 
    function() {
        return new Nz(null)
    });
    z.x(z.Sz, z.Yj);
    z.la(z.Sz);
    z.e = z.Sz.prototype;
    z.e.B = function() {
        this.qO = !0;
        this.h = z.O("div", null, [this.VR = z.O("div", null, [this.hh = z.O("div", "zm-favo-list-content"), this.cD = z.O("div", "zh-favo-add-new-wrap zm-command", this.cW = z.O("a", {
            "class": "zm-favo-dialog-create zg-left",
            href: "javascript:;"
        },
        "+ 创建收藏夹"), this.Iw = z.O("a", {
            href: "javascript:;",
            "class": "zg-btn-blue"
        },
        "关闭")), this.Vv = z.O("div", "zh-favo-add-new-wrap zm-command", this.IN = z.O("a", {
            href: "javascript:;",
            "class": ""
        },
        "取消"), this.dW = z.O("a", {
            "class": "zm-favo-dialog-create zg-btn-blue",
            href: "javascript:;"
        },
        "创建收藏夹"))]), this.Sx = z.O("div", {
            "class": "zh-favo-add-form",
            style: "display:none"
        },
        [z.O("div", null, ["标题", this.QB = z.O("span", {
            "class": "zh-favo-add-title-error"
        },
        "请填写标题")]), z.O("div", "zg-section", this.wi = z.O("input", {
            "class": "zg-form-text-input"
        })), z.O("div", null, "描述（可选）"), z.O("div", {
            "class": "zg-section zg-form-text-input"
        },
        this.ak = z.O("textarea", {
            "class": "zg-editor-input",
            style: "height:66px"
        })), this.eJ = z.O("label", null, [this.fH = z.O("input", {
            type: "radio",
            checked: "checked",
            value: "public",
            name: "mode"
        }), 
        z.O("strong", null, " 公开 "), z.O("span", "zg-gray-normal", "公开后不能设置为私密")]), this.mH = z.O("br"), this.cJ = z.O("label", null, [this.eH = z.O("input", {
            type: "radio",
            value: "private",
            name: "mode"
        }), z.O("strong", null, " 私密 "), z.O("span", "zg-gray-normal", "只有你可以查看这个收藏夹")]), z.O("div", "zm-command", [this.vx = z.O("label", {
            href: "javascript:;",
            "class": "zh-favo-error-message-label zg-left"
        },
        ""), this.CB = z.O("a", {
            href: "javascript:;",
            "class": "zg-mr10"
        },
        "取消"), this.vr = z.O("a", {
            href: "javascript:;",
            "class": "zg-mr10"
        },
        "完成"), this.Tv = z.O("a", 
        {
            "class": "zg-btn-blue"
        },
        "确认创建")])])]);
        z.Q(this.QB, !1);
        z.Q(this.Vv, !1); (new z.Ys(this.RB)).w(this.wi); (new z.Ys(this.gx)).w(this.ak);
        z.y(this.Bz, 
        function(a) {
            Uz(this, a)
        },
        this);
        this.Bz.length || (this.hh.innerHTML = '\x3cdiv id\x3d"zh-fav-list-item-place-holder" class\x3d"zg-r5px zm-fav-list-item-place-holder"\x3e你可以创建多个收藏夹，将答案分类收藏\x3c/div\x3e ', z.Q(this.Vv, !0), z.Q(this.cD, !1));
        Tz(this);
        this.sa.S().innerHTML = "";
        this.sa.S().appendChild(this.h);
        this.sa.ha()
    };
    z.e.Yb = function() {
        this.oN || (this.oN = !0, this.o().g(this.CB, "click", 
        function() {
            this.Xa ? Yz(this, 0) : aA(this);
            eA("click_add_collection_cancel")
        }).g(this.cW, "click", 
        function() {
            z.Y.tb({
                type: "ga_click_add_collection"
            });
            Yz(this, 1);
            z.Ai("collect", "click_add_collection_start", "collect_answer_box")
        }).g(this.Iw, "click", 
        function() {
            eA("click_add_collection_close");
            aA(this)
        }).g(this.dW, "click", 
        function() {
            z.Y.tb({
                type: "ga_click_add_collection"
            });
            Yz(this, 1)
        }).g(this.IN, "click", 
        function() {
            aA(this)
        }).g(this.vr, "click", 
        function() {
            aA(this)
        }).g(this.Tv, "click", 
        function() {
            var a = this.ak.value,
            b = this.wi.value;
            a && eA("click_add_collection_discription", a);
            b && eA("click_add_collection_title", b);
            this.oh()
        }).g(this.hh, "click", this.yT).g(this.wi, "change", 
        function() {
            z.Q(this.QB, !1)
        }).g(this.fH, "click", 
        function() {
            eA("click_add_collection_public")
        }).g(this.eH, "click", 
        function() {
            eA("click_add_collection_private")
        }))
    };
    z.e.yT = function(a) {
        var b = z.uf(a.target, "A");
        if (b && !this.locked) {
            a = b.getAttribute("data-lid");
            var c = !1;
            z.W.has(b, "zm-favo-list-item-link-active") ? (c = !0, this.yE = a) : this.vE = a;
            b = new z.Gr;
            b.add("answer_id", this.Xa);
            b.add("favlist_id", a);
            this.$A = new z.Z(!0);
            this.locked = !0;
            this.o().ya(this.$A, "complete", this.HM);
            this.$A.ajax(c ? "/collection/remove": "/collection/add", b.Ce())
        }
    };
    z.e.HM = function() {
        this.locked = !1;
        this.Iw.innerHTML = "关闭";
        var a = z.Sn(this.$A);
        a && !a.r ? (a = z.Ro("zm-favo-list-item-link", this.hh), z.y(a, 
        function(a) {
            var c = a.getAttribute("data-lid"),
            d = z.N("num", a),
            f = (0, window.parseInt)(d.innerHTML, 10);
            c === this.yE ? (d.innerHTML = f - 1 + "", z.W.remove(a, "zm-favo-list-item-link-active")) : c === this.vE && (d.innerHTML = f + 1 + "", z.W.add(a, "zm-favo-list-item-link-active"))
        },
        this), this.vE = this.yE = null, Ir("Favorite", "add_favorite")) : z.X.message("添加失败: " + a.msg)
    };
    z.e.pk = function() {
        this.Yb();
        this.Iw.innerHTML = "关闭";
        this.Xa ? (z.Q(this.vr, !1), Yz(this, 0)) : (Yz(this, 1), z.Q(this.CB, !1), this.vr.innerHTML = "取消")
    };
    z.e.show = function(a) {
        a ? (Xz(this), this.sa.G(!0), this.pk()) : (Tz(this, "添加到收藏夹", '\x3cdiv style\x3d"text-align: center; color: #999;"\x3e收藏夹加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'), this.sa.G(!0), this.ps())
    };
    z.e.ps = function() {
        this.Xa && window.$.get("/collections/json", {
            answer_id: this.Xa
        }).done((0, z.q)(this.iT, this))
    };
    z.e.iT = function(a) {
        a && !a.r && (this.Bz = a.msg[0], this.qt = a.msg[1], Xz(this), this.pk())
    };
    z.e.oh = function() {
        if (!this.xhr || !this.xhr.uc()) { (0, window.$)(this.vx).text("").hide();
            var a = z.tr(this.wi.value);
            if (a && a !== this.RB) {
                a = Zz(this);
                this.Xa && a.add("answer_id", this.Xa);
                if (this.am) {
                    if (this.cR.Ce() === a.Ce()) {
                        aA(this);
                        return
                    }
                    a.add("favlist_id", this.xE[0])
                }
                this.xhr = new z.Z(!0);
                cA(this, this.xhr, this.Tv, this.am);
                this.o().ya(this.xhr, "complete", this.zM);
                this.xhr.ajax(this.am ? "/collection/update": "/collection/create", a.Ce())
            } else z.Q(this.QB, !0)
        }
    };
    z.e.zM = function() {
        var a = z.Sn(this.xhr);
        a && !a.r ? this.am ? (aA(this), z.X.message("编辑成功"), (0, window.setTimeout)(function() {
            window.location.reload()
        },
        1E3), this.am = !1) : this.Xa ? (z.Q(this.Vv, !1), z.Q(this.cD, !0), Yz(this, 0), this.qt.push(a.msg[0]), Uz(this, a.msg, !0), this.wi.value = "", this.ak.value = "") : (aA(this), z.X.message("创建成功"), (0, window.setTimeout)(function() {
            window.location.href = "/collections/mine"
        },
        1E3)) : dA(this.vx, this.am, a.msg)
    };
    z.e.V = function() {
        return this.sa.V()
    };
    var bA = "close";
    z.Sz.prototype.Rg = function() { (0, window.$)(window).on("beforeunload.FavoDiag", (0, z.q)(function() {
            return "你对收藏夹的修改还未保存，确认离开该页面吗？"
        },
        this))
    };
    z.Sz.prototype.ei = function() { (0, window.$)(window).off("beforeunload.FavoDiag")
    };
    z.x(z.fA, z.mz);
    z.Up("goog-checkbox-menuitem", 
    function() {
        return new z.fA(null)
    });
    z.l(gA, z.R);
    gA.prototype.Z = function(a) {
        z.R.prototype.Z.call(this, a);
        var b = (0, window.$)(a).data(),
        c = new z.rz,
        d = new z.fA("禁止转载");
        d.Lc(!b.copyable);
        c.Fa(d);
        c.Fa(new z.qz);
        hA(this, c);
        c.Fa(new z.qz);
        c.Fa(new z.mz("删除"));
        this.o().g(c, "action", this.xy).ya(c, "show", this.IO);
        z.W.add(c.m(), "zg-gray-normal"); (0, window.$)(c.m()).addClass("setting-menu");
        b = new z.yz("comment", c);
        b.xk = !0;
        z.Az(b);
        zz(b);
        b.Ob = z.Gl;
        b.w(a);
        this.ka = c
    };
    gA.prototype.IO = function() {
        var a = this;
        window.$.get("/answer/comment_permission", {
            answer_id: this.Qh.kb
        }).then(function(b) {
            if (b && !b.r) {
                var c = b.msg;
                a.AA.forEach(function(a) {
                    a.Y() === c && a.Lc(!0)
                });
                a.jl = c
            } else z.X.message(b.msg)
        })
    };
    gA.prototype.fB = function(a) {
        $C.fB(this.Qh.kb, a); (0, window.$)(".copyright", GC(this.Qh)).text(a ? "作者保留权利": "禁止转载").attr("href", a ? "/terms#sec-licence-1": "/terms#sec-licence-6")
    };
    gA.prototype.xy = function(a) {
        a = a.target;
        var b = a.Y();
        if ("禁止转载" === b) this.fB(!a.qf());
        else if ("删除" === b) jA(this);
        else if (b in iA) if (this.jl === b) kA(this);
        else if ("review_comment" === this.jl) {
            var c = this;
            a = void 0;
            var d;
            "all_can_comment" === b ? (a = "确认开放评论吗？", d = "开放评论后，评论提交即公开显示。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。") : "nobody_can_comment" === b && (a = "确认关闭评论吗？", d = "关闭评论后，所有人无法提交评论。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。");
            z.X.confirm(a, d, 
            function(a) {
                a && lA(c, b)
            });
            kA(this)
        } else lA(this, b)
    };
    var iA = z.T.Jd ? {
        all_can_comment: "开放评论",
        review_comment: "预审评论",
        nobody_can_comment: "关闭评论"
    }: {
        all_can_comment: "允许任何人评论",
        followee_can_comment: "允许我关注的人评论",
        nobody_can_comment: "关闭评论"
    },
    mA = "set_permission";
    var jG = /a(:(link|visited|active|hover))?/;
    pA.prototype.clone = function() {
        var a = new pA;
        a.wh = this.wh.concat();
        a.Nn = this.Nn;
        return a
    };
    var kG = /(^|;|{)\s*color:([^;]+);/g,
    tA = {},
    wA = {},
    lG = {},
    mG = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),
    nG = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
    var oG;
    z.x(z.xA, z.G);
    z.e = z.xA.prototype;
    z.e.F = null;
    z.e.dN = !0;
    z.e.IK = function() {
        this.F && (this.disable(this.F), this.F = null)
    };
    z.e.enable = function(a) {
        this.F == a && (this.ec = !0)
    };
    z.e.disable = function(a) {
        this.F == a && (this.ec = !1)
    };
    z.e.isEnabled = function(a) {
        return this.F == a ? this.ec: !1
    };
    z.e.Rq = z.Fl;
    z.e.hH = z.Fl;
    z.e.D = function() {
        this.F && this.IK(this.F);
        z.xA.v.D.call(this)
    };
    z.FA = z.ap({
        ty: 1,
        XP: 2,
        ys: 3,
        Mj: 4,
        zs: 5,
        execCommand: 6,
        queryCommandValue: 7,
        YI: 8,
        DN: 10,
        CN: 11
    });
    oG = {
        8: !0,
        10: !0,
        11: !0
    };
    z.xA.prototype.execCommand = function(a, b) {
        var c = this.hH(a);
        c || (z.B && z.bB(this.F, !0, !0), this.F.fi());
        try {
            var d = this.ff.apply(this, arguments)
        } finally {
            c || (this.F.df(), z.aB(this.F))
        }
        return d
    };
    z.xA.prototype.Ke = function() {
        return ! 1
    };
    var GA,
    JA;
    z.x(EA, z.G);
    EA.prototype.Ha = null;
    EA.prototype.Jc = null;
    GA = "change";
    z.HA = "delayedchange";
    JA = {
        xX: "cvc",
        RX: "load",
        lY: "unload",
        pX: "beforechange",
        vX: GA,
        zX: z.HA,
        qX: "beforefocus",
        CX: "focus",
        tX: "blur",
        sX: "beforetab",
        JX: "ifrsz",
        rX: "beforeselectionchange",
        $X: "selectionchange"
    };
    z.LA = 0;
    z.pG = null;
    z.e = EA.prototype;
    z.e.ah = !1;
    z.e.TK = !1;
    z.e.jv = !1;
    z.e.m = function() {
        return this.Ha
    };
    z.e.addListener = function(a, b, c, d) {
        var f = this.m();
        MF && f && this.nc() && (f = f.ownerDocument);
        d ? z.yd(this.fc, f, a, b, c, d) : this.fc.g(f, a, b, c)
    };
    var KA = 15,
    IA = 250;
    EA.prototype.nc = z.Gl;
    EA.prototype.Io = z.Gl;
    EA.prototype.XJ = z.Fl;
    var OA = {
        46: !0,
        8: !0
    };
    z.C || (OA[9] = !0);
    var PA = {
        86: !0,
        88: !0
    };
    z.ml && !z.B && (OA[229] = !0);
    EA.prototype.Hw = function() {
        this.fc && this.fc.removeAll();
        if ((z.Vi || z.Wj) && this.nc() && this.XJ()) {
            try {
                var a = this.jb.Va();
                a.removeEventListener("keydown", this.qn, !1);
                a.removeEventListener("touchend", this.qn, !1)
            } catch(b) {}
            delete this.qn
        }
        if (z.vg && this.nc()) {
            try {
                a = this.jb.Va(),
                a.removeEventListener("focus", this.tw, !1),
                a.removeEventListener("blur", this.sw, !1)
            } catch(b) {}
            delete this.tw;
            delete this.sw
        }
        this.ye && this.ye.stop();
        this.Nr.stop()
    };
    EA.prototype.D = function() {
        this.Ko() || this.vc();
        this.Jc && this.execCommand("clearlorem");
        this.dm = z.LA;
        for (var a in this.Rb) {
            var b = this.Rb[a];
            b.Rq() || b.disable(this)
        }
        this.jb = this.Ha = null;
        this.Hw();
        this.xl && (z.nd(this.xl), this.xl = null);
        this.lm = null;
        this.fc && (this.fc.H(), this.fc = null);
        for (; a = this.jX.pop();) a.H();
        z.pG == this.id && (z.pG = null);
        for (var c in this.Rb) a = this.Rb[c],
        a.dN && a.H();
        delete this.Rb;
        EA.v.D.call(this)
    };
    var qG = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
    EA.prototype.mB = function() {
        if (JF || !this.nc()) this.fc.g(this.m(), "DOMSubtreeModified", this.uy);
        else {
            var a = this.jb.ua();
            this.fc.g(a, qG, this.uy, !0);
            this.fc.g(a, "DOMAttrModified", (0, z.q)(this.YF, this, this.uy), !0)
        }
    };
    var VA = {
        8: 1,
        9: 1,
        13: 1,
        33: 1,
        34: 1,
        35: 1,
        36: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        46: 1
    },
    WA = {
        65: !0,
        86: !0,
        88: !0
    },
    YA = {
        8: 1,
        9: 1,
        13: 1,
        27: 1,
        33: 1,
        34: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    z.e = EA.prototype;
    z.e.Co = function(a, b) {
        for (var c = this.Sj[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            if ((g.isEnabled(this) || oG[a]) && g[z.FA[a]].apply(g, d)) return ! 0
        }
        return ! 1
    };
    z.e.sR = function(a, b) {
        for (var c = this.Sj[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f]; (g.isEnabled(this) || oG[a]) && g[z.FA[a]].apply(g, d)
        }
    };
    z.e.lu = function(a, b, c) {
        for (var d = this.Sj[a], f = z.yb(arguments, 1), g = 0; g < d.length; ++g) {
            var h = d[g];
            if (h.isEnabled(this) || oG[a]) f[0] = h[z.FA[a]].apply(h, f)
        }
        return f[0]
    };
    z.e.lf = function(a) {
        z.Uc && 65 == a.keyCode && TA(this, a); (z.B || RA(this, a)) && !this.Co(1, a) && SF && XA(this, a)
    };
    z.e.YP = function(a) {
        if (z.B) {
            if (!RA(this, a)) return
        } else this.hy = !0,
        this.fi();
        this.Co(2, a) || SF || XA(this, a)
    };
    z.e.ZP = function(a) {
        z.B || !this.hy && !NA(a) || this.jo();
        this.Co(3, a);
        TA(this, a)
    };
    z.e.execCommand = function(a, b) {
        for (var c = arguments, d, f = this.Sj[6], g = 0; g < f.length; ++g) {
            var h = f[g];
            if (h.isEnabled(this) && h.Ke(a)) {
                d = h.execCommand.apply(h, c);
                break
            }
        }
        return d
    };
    z.e.queryCommandValue = function(a) {
        var b = this.vc() && this.tf;
        if (z.pa(a)) return this.gu(a, b);
        for (var c = {},
        d = 0; d < a.length; d++) c[a[d]] = this.gu(a[d], b);
        return c
    };
    z.e.gu = function(a, b) {
        for (var c = this.Sj[7], d = 0; d < c.length; ++d) {
            var f = c[d];
            if (f.isEnabled(this) && f.Ke(a) && (b || f.Rq())) return f.queryCommandValue(a)
        }
        return b ? null: !1
    };
    z.e.YF = function(a, b) {
        if (!UA(this, GA)) {
            var c = b.gc;
            try {
                if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) return
            } catch(d) {
                return
            }
            c.prevValue != c.newValue && a.call(this, c)
        }
    };
    z.e.uy = function(a) {
        UA(this, GA) || (a = a.DF ? a.gc: a, a.target.firebugIgnore || this.ye.start())
    };
    z.e.ws = function() {
        z.C && this.execCommand("clearlorem", !0);
        z.B && this.jx();
        this.df()
    };
    z.e.rQ = function() {
        var a = this.MJ;
        this.MJ = null;
        z.aB(this, void 0, a)
    };
    z.e.fi = function() {
        UA(this, "beforechange") || this.dispatchEvent("beforechange")
    };
    z.e.df = function(a) {
        dB(this, !0, a)
    };
    z.e.jo = function() {
        UA(this, GA) || (this.ye && this.ye.stop(), UA(this, z.HA) || this.Nr.start())
    };
    z.e.QE = function() {
        UA(this, z.HA) || (this.Nr.stop(), this.dispatchEvent(z.HA))
    };
    z.e.jx = function() {
        this.PE();
        this.RE()
    };
    z.e.PE = function() {
        UA(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
    };
    z.e.RE = function() {
        if (!UA(this, "focus")) {
            z.pG = this.id;
            this.tf = !0;
            this.dispatchEvent("focus");
            if (z.B) {
                var a = this.m(),
                b = z.$A(this);
                if (b) {
                    var c = z.Ht(b);
                    0 != z.It(b) || c && c != a && "BODY" != c.tagName || z.Qu(a)
                }
            } ! KF && this.nc() && this.jb.Va().parent.getSelection().removeAllRanges()
        }
    };
    z.e.Qr = function() {
        UA(this, "blur") || (z.pG == this.id && (z.pG = null), this.tf = !1, this.dispatchEvent("blur"))
    };
    z.e.Ml = function(a) {
        z.pG = this.id;
        if (z.C) {
            var b = a.target;
            b && "A" == b.tagName && a.ctrlKey && this.lm.Va().open(b.href)
        }
        this.jv = !0
    };
    z.e.ny = function() {
        this.jv = !1
    };
    z.e.Bs = function(a) {
        if (!this.TK || this.jv) this.jv = !1,
        this.dispatchEvent("beforeselectionchange"),
        z.aB(this, a),
        z.C && (this.MJ = a.target, this.NJ.start())
    };
    z.e.El = function() {
        if (this.queryCommandValue("usinglorem")) return " ";
        if (!this.vc()) return this.Jc.innerHTML;
        var a = this.m(),
        b = a.cloneNode(!1),
        a = a.innerHTML;
        z.C && a.match(/^\s*<script/i) && (a = " " + a);
        b.innerHTML = a;
        this.sR(11, b);
        return this.lu(10, b.innerHTML)
    };
    z.e.Pd = function(a, b, c, d) {
        if (!this.Ko()) {
            d && this.execCommand("clearlorem");
            b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
            c && z.bB(this, !1, !0);
            a = b;
            if (b = this.m()) {
                if (this.nc() && z.D) for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g) f[g].parentNode.removeChild(f[g])
            } else b = this.Jc;
            b && SA(this, a, b);
            d && this.execCommand("updatelorem");
            this.vc() && (c ? (z.B && Oq(this.ye), dB(this)) : this.df())
        }
    };
    z.e.YB = function() {
        var a = this.jb.ua();
        a.designMode = "on";
        z.PF && a.execCommand("styleWithCSS", !1, !1)
    };
    z.e.RG = function() {
        this.ll && gB(this) && z.Mg(this.ll, this.m())
    };
    z.e.vc = function() {
        return 2 == this.dm
    };
    z.e.Ko = function() {
        return 1 == this.dm
    };
    z.e.focus = function() {
        if (!z.DA && this.nc()) this.jb.Va().focus();
        else {
            if (z.vg) var a = this.Wk.pageXOffset,
            b = this.Wk.pageYOffset;
            this.m().focus();
            z.vg && this.Wk.scrollTo(a, b)
        }
    };
    z.e.Yf = function() { ! z.HF && z.B || z.fB(this);
        this.focus()
    };
    z.e.je = function(a) {
        this.dm = 1;
        var b = this.Jc;
        this.nodeName = b.nodeName;
        this.cssText = b.style.cssText;
        z.ij(b, "editable");
        this.Iz(a)
    };
    z.e.Iz = function(a) {
        var b = this.Jc;
        if (b) {
            var b = b.innerHTML,
            c = {},
            b = this.lu(8, b, c),
            d = this.lm.B("IFRAME", this.NF());
            if (gB(this)) {
                var f = (0, z.q)(this.DG, this, d, b, c);
                this.xl = z.F(d, "load", f, !0);
                a && (d.src = a)
            }
            this.tD(d);
            gB(this) || this.DG(d, b, c)
        }
    };
    z.e.xs = function() {
        z.C && Bu(this.jb.Va());
        z.pG != this.id && this.execCommand("updatelorem");
        if ((z.Vi || z.Wj) && this.nc() && this.XJ()) {
            var a = this.jb.Va();
            this.qn = (0, z.q)(a.focus, a);
            a.addEventListener("keydown", this.qn, !1);
            a.addEventListener("touchend", this.qn, !1)
        }
        z.vg && this.nc() ? (this.tw = (0, z.q)(this.jx, this), this.sw = (0, z.q)(this.Qr, this), a = this.jb.Va(), a.addEventListener("focus", this.tw, !1), a.addEventListener("blur", this.sw, !1)) : (RF ? (this.addListener("focus", this.RE), this.addListener(z.Pl, this.PE)) : this.addListener("focus", 
        this.jx), this.addListener("blur", this.Qr, z.B));
        z.B ? this.mB() : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.fi), this.addListener(["cut", "paste"], jp(this.df)), this.addListener("drop", this.ws));
        this.addListener(z.D ? "dragend": "dragdrop", this.ws);
        this.addListener("keydown", this.lf);
        this.addListener("keypress", this.YP);
        this.addListener("keyup", this.ZP);
        this.NJ = new Nq(this.rQ, 250, this);
        this.RO && this.addListener("click", eB);
        this.addListener("mousedown", this.Ml);
        this.TK ? (this.fc.g(this.jb.ua(), 
        "mouseup", this.Bs), this.addListener("dragstart", this.ny)) : this.addListener("mouseup", this.Bs);
        this.RG();
        dB(this);
        this.dispatchEvent("load");
        for (var b in this.Rb) this.Rb[b].enable(this)
    };
    z.e.tD = function(a) {
        var b = this.Jc;
        a.className = b.className;
        a.id = b.id;
        z.Qo(a, b)
    };
    z.e.Zx = function(a) {
        var b = Rn(z.J(this.Jc));
        return new AA(this.id, b, !1, !1, a)
    };
    z.e.kL = function(a, b, c) {
        c = this.Zx(c);
        gB(this) ? (a = (a.contentDocument || a.contentWindow.document).body, z.DA && (a.contentEditable = !0), a.className = "editable", a.setAttribute("g_editable", !0), a.hideFocus = !0, a.id = c.oF, z.sg(a, c.Fx), a.innerHTML = b) : CA(c, b, new BA(this.m(), this.ll), a)
    };
    z.e.DG = function(a, b, c) {
        this.xl && (z.nd(this.xl), this.xl = null);
        a.allowTransparency = "true";
        this.kL(a, b, c);
        QA(this, (a.contentDocument || a.contentWindow.document).body); ! z.DA && this.nc() && this.YB();
        this.xs()
    };
    z.e.NF = function() {
        var a = "padding:0;" + this.Jc.style.cssText;
        z.rp(a, ";") || (a += ";");
        a += "background-color:white;";
        z.C && (a += "overflow:visible;");
        return {
            frameBorder: 0,
            style: a
        }
    };
    var rG;
    z.x(z.hB, EA);
    z.e = z.hB.prototype;
    z.e.WG = !1;
    z.e.yR = !1;
    z.e.Io = function() {
        return this.WG
    };
    z.e.gG = function() {
        UA(this, GA) || iB(this)
    };
    z.e.uB = function() {
        if (this.Vp ? 0: this.Vp = !0) {
            var a = !1,
            b = ZA(this);
            if (b) {
                var c,
                d = ZA(this),
                f = d.contentDocument.body;
                c = f.parentNode;
                0 === (0, window.parseInt)(Go(d, "height"), 10) && z.sg(d, "height", "1px");
                Rn(z.J(f)) ? d = c.offsetHeight: (d = c.scrollHeight, c.clientHeight != c.offsetHeight && (d += rG || (rG = z.Vg())));
                c = d;
                this.pS && (c = Math.max(c, this.pS)); (0, window.parseInt)(Go(b, "height"), 10) != c && (b.style.height = c + "px", a = !0)
            }
            this.Vp = !1;
            a && this.dispatchEvent("ifrsz")
        }
    };
    z.e.Hy = "";
    var sG = !1;
    z.e = z.hB.prototype;
    z.e.nc = function() {
        return ! z.DA
    };
    z.e.mB = function() {
        z.hB.v.mB.call(this);
        if (this.nc()) {
            var a = ZA(this).ownerDocument;
            this.fc.g(a, qG, this.gG, !0);
            this.WR = z.ld(this.jb.Va(), "load", this.uB, !0, this);
            this.fc.g(a, "DOMAttrModified", (0, z.q)(this.YF, this, this.gG), !0)
        }
    };
    z.e.jo = function() {
        UA(this, GA) || (z.hB.v.jo.call(this), this.nc() && this.uB())
    };
    z.e.Qr = function() {
        if (!UA(this, "blur") && (z.hB.v.Qr.call(this), !z.DA && !KF)) {
            var a = this.jb.Va(),
            b = !1;
            z.nd(this.xH);
            this.xH = z.ld(a.document.body, "dragover", 
            function() {
                b = !0
            });
            z.t.setTimeout((0, z.q)(function() {
                if (!b && this.jb) {
                    var a = z.$A(this),
                    d = this.jb.Va();
                    Bu(d);
                    a && (a.collapse(!0), a.select())
                }
            },
            this), 0)
        }
    };
    z.e.YB = function() {
        z.hB.v.YB.call(this);
        var a = this.jb.ua();
        a.execCommand("enableInlineTableEditing", !1, "false");
        a.execCommand("enableObjectResizing", !1, "false")
    };
    z.e.RG = function() {
        this.nc() || sG || (this.ll && z.Mg(this.ll, this.m()), sG = !0)
    };
    z.e.Iz = function(a) {
        if (this.nc()) z.hB.v.Iz.call(this, a);
        else if (a = this.Jc) QA(this, a),
        a.contentEditable = !0,
        SA(this, a.innerHTML, a),
        this.xs()
    };
    z.e.xs = function() {
        if (this.nc()) {
            var a = this;
            z.t.setTimeout(function() {
                jB(a)
            },
            0)
        }
        z.hB.v.xs.call(this)
    };
    z.e.NF = function() {
        return {
            frameBorder: 0,
            style: "padding:0;"
        }
    };
    z.e.tD = function(a) {
        if (!this.yR) {
            var b = this.Jc;
            b && (this.WG = "auto" == z.yg(b, "overflowY"))
        }
        var b = this.Jc,
        c = z.J(b),
        d = b.style.width,
        f = b.style.height;
        z.sg(b, "visibility", "hidden");
        var c = c.B("DIV", {
            style: "height:0;clear:both",
            innerHTML: "\x26nbsp;"
        }),
        g = c.cloneNode(!0);
        b.insertBefore(c, b.firstChild);
        b.appendChild(g);
        g = z.Je(b);
        if ((c = z.C && b.currentStyle) && Rn(z.J(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) g = z.Og(b, c.width, "width", "pixelWidth"),
        c = z.Og(b, c.height, "height", "pixelHeight"),
        g = new z.He(g, c);
        else var c = z.go(b),
        g = z.Qg(b),
        h = z.Tg(b),
        g = new z.He(c.width - h.left - g.left - g.right - h.right, c.height - h.top - g.top - g.bottom - h.bottom);
        c = g.width;
        g = g.height;
        h = "";
        this.Io() && (h = "\x26nbsp;", z.sg(b, "position", "relative"), z.sg(b, "overflow", "visible"), z.sg(a, "position", "absolute"), z.sg(a, "top", "0"), z.sg(a, "left", "0"));
        z.Gg(b, c, g);
        Rn(z.J(b)) && z.sg(b, "lineHeight", "0");
        z.Mu(b, h);
        z.Gg(a, c, g);
        z.Gg(b, d, f);
        z.sg(b, "visibility", "");
        b.appendChild(a);
        gB(this) || (b = a.contentWindow.document, Rn(z.J(a.ownerDocument)) && (b.open(), 
        a = z.Hd("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e", null), b.write(z.Gd(a)), b.close()))
    };
    z.e.Zx = function(a) {
        var b = this.Jc;
        if (b) return new AA(this.id, Rn(z.J(b)), !0, this.Io(), a);
        throw Error("no field");
    };
    z.e.kL = function(a, b, c) {
        z.sg(a, "visibility", "hidden");
        c = this.Zx(c);
        var d = this.Jc,
        f = this.ll;
        if (!this.Hy) {
            var g = this.Jc;
            if (g) {
                var h = g.ownerDocument,
                k = z.ua(h);
                if (!lG[k]) {
                    for (var m = z.ua(h), n = [], h = oA(h.styleSheets), r = 0, w; w = h[r]; r++) if ((w = nA(w)) && w.length) for (var H = 0, K = w.length; H < K; H++) {
                        var M = new pA,
                        ca;
                        ca = M;
                        var Xa = w[H],
                        cb = Xa.style;
                        if (cb) {
                            var Ha = void 0,
                            xa = "";
                            cb && (Ha = Xa.selectorText) && (xa = cb.cssText) ? z.C && (xa += "/* */") : Xa.cssText && (xa = /([^\{]+)\{/, Ha = xa.exec(Xa.cssText)[1], xa = Xa.cssText.replace(xa, "").replace(/\}[^\}]*$/g, 
                            ""));
                            if (Ha) {
                                Xa = ca;
                                Xa.wh = [];
                                Ha = Ha.split(/,\s*/gm);
                                for (cb = 0; cb < Ha.length; cb++) {
                                    var Ed = Ha[cb];
                                    0 < Ed.length && Xa.wh.push(new rA(Ed))
                                }
                                ca.Nn = xa;
                                ca = !0
                            } else ca = !1
                        } else ca = !1;
                        ca && n.push(M)
                    }
                    lG[m] = n
                }
                m = lG[k];
                k = [];
                for (n = 0; n < m.length; n++) k.push(m[n].clone());
                h = new vA(g);
                r = new sA("body");
                for (m = 0; m < k.length; m++) for (w = k[m].wh, n = w.length, H = 0; H < n; H++) {
                    K = w[H];
                    M = K;
                    ca = h.uid;
                    if (M.cw[ca]) ca = M.cw[ca];
                    else {
                        for (var xa = 0, cb = Ha = Xa = null, Ed = h.gI, ii = Ed.length, me = 0; me <= M.Bi.length; me++) {
                            for (Ha = M.Bi[me]; xa < ii;) {
                                var Md = Ed[xa];
                                if (Ha && 
                                uA(Ha, Md)) {
                                    Xa = {
                                        aF: xa,
                                        OJ: me
                                    };
                                    xa++;
                                    break
                                } else cb && uA(cb, Md) && (Xa = {
                                    aF: xa,
                                    OJ: me - 1
                                });
                                xa++
                            }
                            cb = Ha
                        }
                        ca = M.cw[ca] = Xa
                    }
                    ca && (M = ca.OJ, K = K.Bi, xa = K.length - 1, ca.aF == h.gI.length - 1 || M < xa ? (K = K.concat(), K.splice(0, M + 1, r), M = new rA, M.Bi = K, w.push(M)) : 0 < M && M == xa && (M = new rA, M.Bi = [r, K[xa]], w.push(M)))
                }
                h = new pA;
                g = g.currentStyle || z.Je(g).defaultView.getComputedStyle(g, "") || {};
                m = new rA;
                m.Bi = [new sA("html")];
                h.wh = [m];
                r = {};
                for (m = 0; n = mG[m]; m++) r[n] = g[z.db(n)];
                qA(h, r);
                k.push(h);
                h = new pA;
                r = new rA;
                r.Bi = [new sA("body")];
                w = {
                    position: "relative",
                    top: "0",
                    left: "0",
                    right: "auto",
                    display: "block",
                    visibility: "visible"
                };
                for (m = 0; n = nG[m]; m++) w[n] = g[z.db(n)];
                qA(h, w, !0);
                h.wh = [r];
                k.push(h);
                g = [];
                n = k.length;
                for (m = 0; m < n; m++) {
                    w = k[m];
                    h = g;
                    H = w.wh.length;
                    r = !1;
                    for (K = 0; K < H; K++) {
                        M = w.wh[K].Bi;
                        ca = M.length;
                        for (xa = 0; xa < ca; xa++) h.push(M[xa].PG, " ");
                        K < H - 1 && h.push(",");
                        z.B && !z.E("1.9a") && (r = r || jG.test(M[ca - 1].PG))
                    }
                    w = w.Nn;
                    r && (w = w.replace(kG, "$1 color: $2 ! important; "));
                    h.push("{", w, "}\n")
                }
                this.Hy = g.join("")
            }
        }
        d = new BA(d, f + this.Hy);
        c.or && (f = z.Qg(d.iX), (f.top || f.left || f.right || 
        f.bottom) && z.sg(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
        CA(c, b, d, a);
        jB(this);
        z.sg(a, "visibility", "visible")
    };
    z.e.Hw = function() {
        z.nd(this.xH);
        z.nd(this.WR);
        z.hB.v.Hw.call(this)
    };
    var LB = {};
    LB._default_ = {
        ns: function(a) {
            return window.$.get("/node/CommentV2", {
                params: {
                    comment_id: a
                }
            })
        },
        Dj: sp,
        Ej: sp,
        add: function(a) {
            return window.$.post("/node/AnswerCommentAddV2", {
                method: "add_comment",
                params: a
            })
        },
        remove: function(a) {
            return window.$.post("/node/CommentV2", {
                method: "remove_comment",
                params: {
                    comment_id: a
                }
            })
        },
        nt: function(a, b) {
            return window.$.post("/node/CommentV2", {
                method: b ? "like_comment": "undo_like_comment",
                params: {
                    comment_id: a
                }
            })
        }
    };
    LB.answer = {
        Dj: function(a, b) {
            return window.$.get("/node/AnswerCommentBoxV2", {
                params: {
                    answer_id: a,
                    load_all: b
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/node/AnswerCommentListV2", {
                params: {
                    answer_id: a
                }
            })
        },
        add: function(a) {
            return window.$.post("/node/AnswerCommentAddV2", {
                method: "add_comment",
                params: a
            })
        },
        cN: function(a, b) {
            return window.$.post("/node/AnswerCommentV2", {
                method: "author_remove_comment",
                params: {
                    comment_id: a,
                    is_block: b
                }
            })
        }
    };
    LB.question = {
        Dj: function(a) {
            return window.$.get("/node/QuestionCommentBoxV2", {
                params: {
                    question_id: a
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/node/QuestionCommentListV2", {
                params: {
                    question_id: a
                }
            })
        },
        add: function(a) {
            return window.$.post("/node/QuestionCommentAddV2", {
                method: "add_comment",
                params: a
            })
        }
    };
    LB.favlist = {
        Dj: function(a) {
            return window.$.get("/node/FavlistCommentBoxV2", {
                params: {
                    favlist_id: a
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/node/FavlistCommentListV2", {
                params: {
                    favlist_id: a
                }
            })
        },
        add: function(a) {
            return window.$.post("/node/FavlistCommentAddV2", {
                method: "add_comment",
                params: a
            })
        }
    };
    LB.post = {
        ns: function(a) {
            return window.$.get("/node/PostCommentV2", {
                params: {
                    comment_id: a
                }
            })
        },
        Dj: function(a, b) {
            return window.$.get("/node/PostCommentBoxV2", {
                params: {
                    post_id: a,
                    load_all: b
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/node/PostCommentListV2", {
                params: {
                    post_id: a
                }
            })
        },
        add: function(a) {
            return window.$.post("/node/PostCommentV2", {
                method: "add_comment",
                params: a
            })
        },
        nt: function(a, b) {
            return window.$.post("/node/PostCommentV2", {
                method: b ? "like_comment": "undo_like_comment",
                params: {
                    comment_id: a
                }
            })
        },
        remove: function(a) {
            return window.$.post("/node/PostCommentV2", 
            {
                method: "remove_comment",
                params: {
                    comment_id: a
                }
            })
        }
    };
    LB.roundtable = {
        ns: function(a) {
            return window.$.get("/roundtable/comments/" + a)
        },
        Dj: function(a, b) {
            return window.$.get("/node/RoundtableCommentBoxV2", {
                params: {
                    roundtable_id: a,
                    load_all: b
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/roundtable/comments", {
                roundtable_id: a
            })
        },
        add: function(a) {
            return window.$.post("/node/RoundtableCommentV2", {
                method: "add_comment",
                params: a
            })
        },
        nt: function(a, b) {
            return window.$.post("/node/RoundtableCommentV2", {
                method: b ? "like_comment": "undo_like_comment",
                params: {
                    comment_id: a
                }
            })
        },
        remove: function(a) {
            return window.$.post("/node/RoundtableCommentV2", 
            {
                method: "remove_comment",
                params: {
                    comment_id: a
                }
            })
        }
    };
    LB.promotion = {
        ns: function(a) {
            return window.$.get("/node/PromotionCommentV2", {
                params: {
                    comment_id: a
                }
            })
        },
        Dj: function(a, b) {
            return window.$.get("/node/PromotionCommentBoxV2", {
                params: {
                    post_id: a,
                    load_all: b
                }
            })
        },
        Ej: function(a) {
            return window.$.get("/node/PromotionCommentListV2", {
                params: {
                    post_id: a
                }
            })
        },
        add: function(a) {
            return window.$.post("/node/PromotionCommentV2", {
                method: "add_comment",
                params: a
            })
        },
        nt: function(a, b) {
            return window.$.post("/node/PromotionCommentV2", {
                method: b ? "like_comment": "undo_like_comment",
                params: {
                    comment_id: a
                }
            })
        },
        remove: function(a) {
            return window.$.post("/node/PromotionCommentV2", {
                method: "remove_comment",
                params: {
                    comment_id: a
                }
            })
        }
    };
    z.x(z.kB, z.Lc);
    lB.prototype.fill = function(a, b) {
        this[a] = this[a].replace("?", b);
        return this
    };
    z.x(mB, z.G);
    z.e = mB.prototype;
    z.e.jM = {
        question: "问题",
        comment: "评论",
        answer: "回答",
        favlist: "收藏",
        member: "用户",
        message: "私信",
        image: "图片",
        video: "视频",
        post: "文章"
    };
    z.e.Tw = "report-dialog";
    z.e.EH = "loading";
    z.e.UO = '\x3cform\x3e\x3cdiv class\x3d"header"\x3e\x3c% if (headnote) { %\x3e\x3cspan class\x3d"headnote"\x3e\x3c%\x3dheadnote%\x3e\x3c/span\x3e\x3c% } %\x3e\x3cspan class\x3d"error-container"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"options clearfix"\x3e\x3c% each(options, function(option) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput value\x3d"\x3c%\x3doption.value%\x3e" name\x3d"reason" type\x3d"radio"\x3e\x3c%\x3doption.label%\x3e\x3c/label\x3e\x3c% if (option.description) { %\x3e\x3cdiv class\x3d"description visible-if-checked"\x3e\x3c%\x3doption.description%\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.options) { %\x3e\x3cul class\x3d"group-options clearfix visible-if-checked"\x3e\x3c% each(option.options, function(opt) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput required data-description\x3d"\x3c%\x3dopt.description%\x3e" value\x3d"\x3c%\x3dopt.value%\x3e" name\x3d"reason-\x3c%\x3doption.value%\x3e" type\x3d"radio"\x3e\x3c%\x3dopt.label%\x3e\x3c/label\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cdiv class\x3d"group-description visible-if-checked"\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.value \x3d\x3d 0) { %\x3e\x3cp class\x3d"input-container visible-if-checked"\x3e\x3cinput placeholder\x3d"请填写原因" type\x3d"text" name\x3d"detail" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container visible-if-checked"\x3e\x3c/p\x3e\x3c% } %\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cp class\x3d"footnote"\x3e\x3c/p\x3e\x3c/form\x3e';
    z.e.IF = function() {
        return this.Rr
    };
    z.e.ww = function(a, b) {
        var c = new z.V;
        c.Qp(!0);
        c.Df(!0);
        z.Mj(c, z.Dj());
        c.addEventListener(z.Oj, this.vP, !1, this);
        z.Ac(c, this);
        a && c.Oa(a);
        b && c.ia(b);
        c.G(!0);
        c.ha();
        z.W.add(c.m(), this.Tw);
        return this.Rr = c
    };
    z.e.vP = function(a) {
        if ("ok" === a.key) return (a = (0, window.$)("form", this.Rr.m()).valid()) && this.submit(),
        a
    };
    z.e.open = function(a, b, c) {
        var d = this.ww(z.Ka("确定要%s该%s？", this.OC[this.Cl()], this.jM[a] || "条目"), this.xw());
        z.W.add(d.m(), this.EH);
        gD(a, this.Cl()).then((0, z.q)(function(f) {
            d.ia((0, z.Sv)(this.UO, {
                each: z.y,
                options: f,
                headnote: c
            }));
            z.W.remove(d.m(), this.EH);
            d.ha();
            z.Uj(d, 450);
            this.EO = {
                type: a,
                id: b
            };
            this.We(f)
        },
        this))
    };
    z.e.fG = function() {};
    z.e.We = function(a) {
        var b = this,
        c = (0, window.$)(this.Rr.m()),
        d = (0, window.$)("form", c),
        f = (0, window.$)(".reason-text", c);
        c.on("change", ":radio", 
        function(g) {
            g = (0, window.$)(g.target);
            c.find("li").removeClass("checked");
            g.parentsUntil(d, "li").addClass("checked");
            var h = this.value,
            k = z.qb(a, 
            function(a) {
                return h === String(a.value)
            });
            b.fG(k);
            k = "0" === h;
            f.toggle(k);
            k && f.placeholder();
            g.closest("li").find("ul, :text").length || d.valid()
        });
        c.find("ul ul").on("change", ":radio", 
        function(a) { (0, window.$)(a.delegateTarget).parent().find(".group-description").text((0, window.$)(this).data("description"))
        });
        d.validate({
            rules: {
                reason: "required",
                detail: {
                    rangelength: [2, 100],
                    required: function() {
                        return !! (0, window.$)("input[name\x3dreason]:checked", c).length
                    }
                }
            },
            messages: {
                reason: "请选择理由",
                detail: "理由为 2-100 字"
            },
            errorLabelContainer: (0, window.$)(".error-container", d)
        })
    };
    z.e.xw = function() {
        return '\x3cdiv class\x3d"loading"\x3e理由加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.x(z.nB, mB);
    var gD = function(a) {
        return function(b, c) {
            return a(z.Ka("/manage/%s/options?action\x3d%s", b, c))
        }
    } (z.jk(window.$.getJSON));
    z.e = z.nB.prototype;
    z.e.OC = {
        remove: "删除",
        lock: "锁定",
        unlock: "解除锁定",
        collapse: "折叠",
        uncollapse: "解除折叠",
        mute: "隔离",
        unmute: "解除隔离"
    };
    z.e.ww = function(a, b) {
        var c = z.nB.v.ww.call(this, a, b);
        c.pc.set("ok", this.OC[this.Cl()]);
        return c
    };
    z.e.Cl = function() {
        return this.hu.op.split("-")[0]
    };
    z.e.PJ = function(a) { (0, window.$)(".footnote", this.IF().m()).text(a)
    };
    z.e.fG = function(a) {
        a && (a.trackable ? pB(this, a).then((0, z.q)(this.PJ, this)) : this.PJ(""))
    };
    z.e.submit = function() {
        var a = this.hu.action,
        b = this.hu.content,
        c = (0, window.$)((0, window.$)("form", this.Rr.m())[0]).serialize();
        b && (c += "\x26" + b);
        oB(a, c, this.fl)
    };
    z.e.D = function() {
        this.fl = this.hu = null;
        z.nB.v.D.call(this)
    };
    z.e.open = function(a, b, c) {
        this.hu = z.kf(a) ? (0, window.$)(a).data() : a;
        this.fl = c || z.je.PY;
        z.nB.v.open.call(this, b.type, b.id, "")
    };
    z.qB.prototype.submit = function(a, b) {
        function c() {
            b ? b() : d.handleError()
        }
        var d = this;
        window.$.post("/report", {
            type: this.type,
            id: this.id,
            reason: a || "edit",
            source: "web"
        }).done(function(a) {
            d.GK && d.GK();
            a.r ? "duplicate_report" === a.errtype ? d.handleError(a.msg) : c() : rB( !! a.noti)
        }).fail(c)
    };
    z.qB.prototype.handleError = function(a) {
        var b = z.X({
            title: "举报",
            content: void 0 === a ? "举报失败": a,
            modal: !0,
            buttons: {}
        }); (0, window.setTimeout)(function() {
            return b.G(!1)
        },
        4E3)
    };
    z.qB.prototype.render = function() {
        var a = this,
        b = new z.V;
        b.Df(!0);
        z.Uj(b, 420);
        b.Oa("举报");
        b.render();
        var c = b.S();
        c.style.margin = "0";
        c.style.padding = "0";
        z.Pw("Report").then(function(d) {
            function f() {
                d.unmountComponentAtNode(c);
                b.G(!1)
            }
            a.GK = f;
            var g = {},
            g = (g.type = a.type, g.onContentChange = function(a) {
                b.Oa(a);
                b.m().focus()
            },
            g.onClose = f, g.onSubmit = a.submit.bind(a), g.talkerToken = a.Su, g);
            d.render(c, g);
            b.G(!0);
            b.ha()
        })
    };
    z.x(sB, z.R);
    z.e = sB.prototype;
    z.e.defaults = {
        trigger: {
            A: "data-editable"
        },
        qM: "hc-actionbar",
        KR: "checked",
        VV: 100,
        MQ: 100
    };
    z.e.C = function() {
        sB.v.C.call(this);
        this.gj = z.O("div");
        window.document.body.appendChild(this.gj);
        tB(this, this.h)
    };
    z.e.D = function() {
        z.P(this.gj);
        this.gj = null;
        sB.v.D.call(this)
    };
    z.e.ay = function() {
        return this.RQ
    };
    z.e.sN = function(a, b, c) {
        b = z.O("div", {
            title: a.R,
            "data-action": a.name,
            className: "button " + a.name + (0 === b ? " first": b === c.length - 1 ? " last": "")
        },
        [z.O("i", "icon icon-actionbar-" + a.name)]);
        z.Ao(b, !0);
        this.o().g(b, "click", 
        function() {
            uB(this, a.name) && a.Vh(this.ve)
        });
        return b
    };
    z.e.render = function() {
        this.gj.innerHTML = "";
        z.$e(this.gj, z.nb(z.Gb(Tn(this.an)), this.sN, this))
    };
    z.x(z.wB, z.R);
    z.wB.prototype.defaults = {
        sG: {},
        $M: !0
    };
    z.wB.prototype.C = function() {
        z.wB.v.C.call(this);
        var a = this,
        b = this.h;
        this.J.$M && (this.$m = JB(b), z.Ac(this, this.$m));
        this.o().g(b, "paste", 
        function() { (0, window.setTimeout)(function() {
                xB(a)
            })
        }).g(b, "keydown", this.GQ)
    };
    z.wB.prototype.GQ = function(a) {
        var b = z.fo(a.keyCode),
        c = 8 === a.keyCode;
        if (! (a.ctrlKey || a.altKey || a.metaKey || !b && !c)) {
            var b = z.wu(),
            d = b.aa(),
            f = b.la(),
            g = this.h,
            h,
            k = AB(d, g, CB) || f !== d && (h || (h = AB(f, g, CB)));
            if (k) {
                var m = z.pf(k),
                n = b.va(),
                r = b.Ma();
                if (k.getAttribute("data-editable") && m === k.href || "video-link" === k.className) {
                    var w = !1;
                    h = h || AB(f, g, CB) || k;
                    var g = k.contains(d),
                    H = h.contains(f);
                    if (c) g && (d = k, n = 0, w = !0),
                    H && (f = h, r = z.Ku(h), w = !0),
                    w && z.hu(d, n, f, r).select();
                    else if (g && H && h === k) {
                        if (!b.isCollapsed() || 0 !== n && m.length !== 
                        n) a.preventDefault(),
                        z.Ru(k)
                    } else g && (d = k.nextSibling, n = 0, w = !0),
                    H && (f = h.previousSibling, r = z.Ku(f), w = !0),
                    w && z.hu(d, n, f, r).select()
                }
            }
        }
    };
    var IB = /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,
    EB = ["http:", "https:"],
    FB = z.jk(function(a) {
        return window.$.post("/scraper", {
            url: a
        })
    });
    z.x(z.KB, z.R);
    z.e = z.KB.prototype;
    z.e.defaults = {
        ZR: !1,
        autofocus: !0,
        px: "empty",
        uf: "zm-item-comment"
    };
    z.e.Z = function(a) {
        z.KB.v.Z.call(this, a);
        cC(this);
        a = window.location.hash.slice(1).split("-");
        if (a = "comment" === a[0] && a[1]) a = WB(this, a),
        z.yr(a),
        z.Or(a),
        a.focus();
        this.Tg = !0;
        z.y(XB(this), this.Mt, this)
    };
    z.e.gn = "zm-comment-bubble";
    z.e.rD = "." + z.KB.prototype.gn;
    z.e.$ = function(a) {
        return (0, window.$)(a, this.h)
    };
    z.e.B = function() {
        this.h = z.O("div", {
            "class": this.YD,
            style: "display:none"
        });
        this.Rg()
    };
    z.e.En = function() {
        return '\x3ci class\x3d"icon icon-spike zm-comment-bubble"\x3e\x3c/i\x3e\x3cdiv class\x3d"zm-comment-spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-lightgray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.e.D = function() {
        z.KB.v.D.call(this);
        this.Ha = this.eE = this.Bn = this.hD = this.Rd = this.FA = this.AH = null
    };
    z.e.ZV = MB(function(a) {
        var b = z.N("zm-comment-content-wrap", a),
        c = z.N("zm-comment-form", a),
        d = a.getAttribute("data-id"),
        f = this,
        g;
        if (c) {
            g = z.N("zm-comment-editable", c);
            if (z.Lg(c)) {
                if (z.Nr(c)) {
                    z.Q(c, !1);
                    return
                }
            } else z.Q(c, !0);
            UB(g)
        } else {
            c = VB(b);
            g = z.N("zm-comment-editable", c);
            var h = new z.hB(g);
            h.Pd(!1, "");
            h.je();
            z.Bc(this, NB(h.m(), this.type, this.id));
            UB(g);
            a = z.N("zm-comment-close", c);
            b = z.N("zm-comment-submit", c);
            b.name = "";
            var k = function() {
                f.na({
                    action: "click_reply_[type]_comment_submit"
                });
                var a = (0, z.ab)(h.El()),
                b = (0, z.ab)(z.pf(g));
                a && b ? eC(f, {
                    content: a,
                    $U: d
                },
                function(a) {
                    a.r || (z.Q(c, !1), h.Pd(!1, ""), (a = z.kb(XB(f))) && z.Or(a, {
                        offsetTop: 100,
                        ew: !0
                    }))
                }) : (z.X.message("请填写内容"), g.focus())
            };
            z.F(a, "click", 
            function() {
                z.Q(c, !1)
            });
            z.F(b, "click", k);
            z.F(g, "keydown", 
            function(a) {
                13 === a.keyCode && (a.ctrlKey || a.metaKey) && (k(), a.preventDefault())
            })
        }
        z.Or(c, 100)
    });
    z.e.Ju = function(a) {
        z.W.enable(this.eE, "expanded", a)
    };
    z.e.Pi = function(a, b) {
        this.dispatchEvent(new z.kB("click!comment", {
            category: "?",
            action: this.type + "_comments",
            label: "?_" + a,
            value: z.qa(b) ? b: this.lb()
        }))
    };
    z.e.Ij = function() {
        this.Tg ? aC(this) : this.Zt = !0
    };
    z.e.cT = function(a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Sq(), (0, window.$)(this.Ha).blur(), a.preventDefault());
        27 === a.keyCode && ZB(this)
    };
    z.e.Qa = function(a) {
        var b = z.Fr(this.h, a.target, "BUTTON") || z.Fr(this.h, a.target);
        if (b && b.name) {
            var c = z.Io(b, this.J.uf);
            a.preventDefault();
            switch (b.name) {
            case "reply_comment":
                this.na({
                    action:
                    "click_reply_[type]_comment_start"
                });
                this.ZV(c);
                break;
            case "cancelanon":
                a = (0, window.$)(this.h).parents(".feed-item-hook").data("qid");
                z.Bp(0, null, a);
                break;
            case "delcomment":
                this.my(b);
                break;
            case "like_comment":
                this.aQ(b);
                break;
            case "author_delcomment":
                gC(this, b);
                break;
            case "admin_delcomment":
                fC(this, b);
                break;
            case "closeform":
                this.na({
                    action:
                    "click_add_[type]_comment_cancel"
                });
                ZB(this);
                break;
            case "addnew":
                this.na({
                    action:
                    "click_add_[type]_comment_submit"
                });
                this.Sq();
                break;
            case "load-more":
                this.Pi("comments_all"),
                this.na({
                    action: "click_view_all_comment"
                }),
                this.AH(b)
            }
        }
    };
    z.e.AH = function(a) {
        this.tt && "pending" === this.tt.state() || (a && z.W.add(a, "loading"), this.tt = this.FA || this.BH(), this.tt.done((0, z.q)(function(b) {
            b = (0, window.$)(b).filter(".zm-item-comment").get();
            if (b.length) {
                var c = XB(this);
                c.length && (b = z.mb(b, 
                function(a) {
                    return ! z.qb(c, 
                    function(b) {
                        return b.getAttribute("data-id") === a.getAttribute("data-id")
                    })
                }), b = z.ub(c, b).sort(function(a, b) {
                    return a.getAttribute("data-id") - b.getAttribute("data-id")
                }), z.y(b, this.Mt, this), a && z.P(a));
                z.$e(this.Bn, b)
            }
        },
        this)))
    };
    z.e.aQ = MB(function(a) {
        var b = (0, window.$)(a),
        c = z.Io(a, this.J.uf);
        a = (0, window.$)(".like-num", c);
        var d = c.getAttribute("data-id");
        if (c = !b.hasClass("liked")) this.Pi("like_comment"),
        this.na({
            action: "click_like_[type]_comment"
        });
        this.Hg.nt(d, c);
        var d = (0, window.$)("em", a),
        f = +d.text() + (c ? 1: -1);
        a.toggleClass("liked", c).toggleClass("nil", 0 >= f).attr("data-tip", "s$r$" + f + " 人觉得这个很赞");
        d.text(f);
        b.toggleClass("liked", c);
        qr(b[0], c ? "取消赞": "赞")
    });
    z.e.expand = function() {
        this.Mc(!0)
    };
    z.e.collapse = function() {
        this.Mc(!1)
    };
    z.e.Yc = function() {
        return this.Tg
    };
    z.e.Mc = function(a) {
        if (a !== this.Tg) {
            a && (this.$(this.rD).hide(), this.Rg());
            this.Tg = a;
            this.dispatchEvent(a ? "beforeexpand": "beforecollapse");
            z.Q(this.h, this.Tg);
            var b = (0, z.q)(function() {
                a && $B(this);
                this.dispatchEvent(a ? "expand": "collapse");
                this.zl && !a && (z.fv(this.zl), z.Or(this.zl.h))
            },
            this),
            c;
            a && this.Zt ? (c = aC(this)) && c.done(b) : (0, window.setTimeout)(b);
            this.Rd && (a ? (this.eU = z.pf(this.Rd), qr(this.Rd, "收起评论")) : qr(this.Rd, 0 > this.Ka ? this.eU: this.Ka ? this.Ka + " 条评论": "添加评论"))
        }
    };
    z.e.Gh = function() {
        this.Mc(!this.Tg)
    };
    z.e.BH = function() {
        return this.Hg.Ej(this.id)
    };
    z.e.Np = function(a) {
        this.kj = a
    };
    z.e.UU = function(a) {
        a = z.Xe((0, z.ab)(a));
        z.Q(a, this.Tg);
        z.y((0, window.$)("." + this.J.uf, a).get(), this.Mt, this);
        this.Zt = !1;
        this.Hb();
        z.Qo(a, this.h);
        this.h = a;
        cC(this)
    };
    z.e.Un = function() {
        this.Ha.focus()
    };
    z.e.Ua = function() {
        var a = (0, z.ab)(this.rj.El());
        return a === this.placeholder ? "": a
    };
    z.e.Sq = MB(function() {
        var a = this.Ua(),
        b = (0, z.ab)(z.pf(this.Ha));
        a && "TEXTAREA" === this.Ha.tagName && b || a ? eC(this, a) : (z.X.message("请填写内容"), this.Un())
    });
    z.e.lb = function() {
        return this.Ka
    };
    z.e.kP = function(a) {
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.alert(a.msg);
        this.Hg.ns(a.msg).done(window.$.proxy(this.VU, this));
        this.rj.Pd("");
        TB(this);
        this.Ju(!1)
    };
    z.e.Mt = function(a) {
        if (z.qm("auth_f_manage") && "favlist" !== this.type && !(0, window.$)(".del, .op.remove", a).length) {
            var b = a.getAttribute("data-id"); (0, window.$)("\x3ca\x3e", {
                href: "#",
                name: "admin_delcomment",
                "class": "del zm-comment-op-link op needsfocus",
                html: '\x3ci class\x3d"zg-icon zg-icon-comment-del"\x3e\x3c/i\x3e删除',
                "data-op": "remove-comment",
                "data-action": "/manage?" + window.$.param({
                    comment_id: b,
                    action: "remove_comment2"
                })
            }).appendTo((0, window.$)(".zm-comment-ft, .actions", a))
        }
        this.yo(a)
    };
    z.e.yo = function(a) { (0, window.$)("a[name\x3dreport], button.report", a).on("click", 
        function() { (new z.qB({
                type: "comment",
                id: a.getAttribute("data-id")
            })).render()
        })
    };
    z.e.VU = function(a) {
        this.$j = "";
        a = z.Xe(a);
        this.Bn.appendChild(a);
        this.Mt(a);
        this.Ka += 1;
        dC(this)
    };
    z.e.my = function(a) {
        var b = z.Io(a, this.J.uf),
        c = b.getAttribute("data-id");
        z.X.confirm("删除评论", "你确定要删除这条评论吗？", 
        function(a) {
            a && iC(this, c, z.Ba(z.P, b))
        },
        this)
    };
    z.e.Rg = function() { (0, window.$)(window).on("beforeunload.CommentForm", (0, z.q)(function() {
            if (this.$j) return "你的评论还未保存，确认离开该页面吗？"
        },
        this))
    };
    z.e.ei = function() { (0, window.$)(window).off("beforeunload.CommentForm")
    };
    z.e.na = function(a) {
        this.dispatchEvent({
            type: "trackRequested",
            category: "comment",
            action: a.action.replace("[type]", this.type)
        })
    };
    z.l(kC, z.R);
    z.e = kC.prototype;
    z.e.Yc = function() {
        return this.Xj
    };
    z.e.Mc = function(a) {
        a !== this.Xj && (this.dispatchEvent(a ? "beforeexpand": "beforecollapse"), this.Xj = a, z.Q(this.h, a), pC(this), qC(this), this.dispatchEvent(a ? "expand": "collapse"), this.Al && !a && (z.fv(this.Al), z.Or(this.Al.m())))
    };
    z.e.Gh = function() {
        this.Mc(!this.Xj)
    };
    z.e.Pi = function() {};
    z.e.Un = function() { (0, window.$)("[data-input-box]", this.m()).focus()
    };
    z.e.reload = function() {
        rC(this, "reloadComments")
    };
    z.e.Np = function(a) {
        this.kj = a
    };
    z.e.We = function() {
        var a = this;
        pC(this);
        qC(this);
        nC(this);
        this.o().g(z.Dp, "anon_change", 
        function() {
            a.Xj && a.reload()
        }); (0, window.$)(this.m()).on("click", 'button[data-key\x3d"cancel"]', 
        function(b) {
            0 === mC(a) && (b.preventDefault(), a.Mc(!1))
        })
    };
    z.e.B = function() {
        this.h = z.O("div", "comment-app-holder");
        z.Q(this.h, !1)
    };
    z.e.render = function(a, b) {
        b = void 0 === b ? {}: b;
        var c = this;
        z.R.prototype.render.call(this, a);
        var d = this.entryType,
        f = this.kb,
        g = {},
        h = Object.assign((g.entry = {
            id: f,
            type: d
        },
        g.useContentEditable = z.Um, g.createItemActions = function(a) {
            var b = [],
            d = a.id,
            f = a.own; ! f && z.sm.TG && b.push({
                key: "adminremove",
                label: "删除",
                icon: "zg-icon zg-icon-comment-del",
                onClick: function() {
                    var a = {
                        op: "remove-comment",
                        action: "/manage?comment_id\x3d" + d + "\x26action\x3dremove_comment2"
                    },
                    b = {
                        id: d,
                        type: "comment"
                    }; (new z.nB).open(a, b, 
                    function() {
                        rC(c, 
                        "RemoveComment", {
                            id: d
                        })
                    })
                }
            });
            f || b.push({
                key: "report",
                label: "举报",
                icon: "zg-icon zg-icon-comment-report",
                onClick: function() { (new z.qB({
                        type: "comment",
                        id: a.id
                    })).render()
                }
            });
            return b
        },
        g.onEditorCreated = function(a) {
            return NB(a, d, f)
        },
        g.onRequestHighlight = function(a) {
            z.yr(a);
            z.Or(a, {
                offsetTop: 45
            });
            a.focus()
        },
        g), b),
        g = z.ia(window.location.hash.match(/#comment-(\d+)/) || []);
        g.next(); (g = g.next().value) && (h.query = {
            bycomment: g
        });
        var k = Object.assign({},
        Rw(), {
            authRequired: function(a) {
                return z.Kq(a, !0, 
                function() {
                    return c.kj
                })
            }
        }),
        m = z.Rj(function() {
            return c.yD && lC(c)
        });
        z.Pw("CommentApp").then(function(b) {
            a.appendChild(c.h);
            c.dr = b.render(c.h, h, k);
            c.We();
            c.dr.store.subscribe(function() { (0, window.setTimeout)(function() {
                    pC(c);
                    qC(c);
                    m()
                })
            })
        })
    };
    z.tG = {
        mG: function(a) {
            this.Zu();
            var b = this.Ga.Yc(); (0, window.$)(".zm-meta-panel", this.m()).toggleClass("focusin", b);
            b && (a = (0, window.parseInt)(z.pf(a.currentTarget), 10) || 0, this.Ga.Pi("view_comments", a)); (0, z.Hi)(this, {
                action: b ? "CommentIntent": "EndCommentIntent",
                element: "Button"
            })
        },
        Zu: function() {
            this.fF();
            this.Ga.Gh()
        },
        DY: function() {
            return this.Ga
        },
        OP: function() {
            this.Ga ? this.Ga.Un() : this.Zu()
        },
        fF: function() {
            if (!this.Ga) {
                var a = (0, window.$)(".toggle-comment, .js-toggleCommentBox", this.h)[0],
                b = this.FF();
                if (b === kC) this.Ga = new b(this.kb, this.entryType),
                this.L(this.Ga),
                this.Ga.render(this.Vx(), {
                    embedded: /^\/roundtable/.test(window.location.pathname)
                }),
                oC(this.Ga, a);
                else if (this.Ga = new b(this.kb, this.entryType), this.L(this.Ga), z.OB(this.Ga, this.Vx(), a), a = this.Ga, !a.zl && !z.sm.Ab && (b = z.Io(a.h, "zm-item-meta"))) {
                    var c = z.N("zm-meta-panel", b);
                    c && (a.zl = new jv(null, b), a.zl.tag = "comment", a.zl.w(c))
                }
                this.Wx && this.Ga.Np(this.Wx())
            }
        },
        FF: function() {
            return z.KB
        }
    };
    z.x(sC, z.R);
    var tC = {
        Gg: "is-sticky",
        top: null,
        bottom: null,
        Gb: null,
        QM: !1,
        CI: z.p,
        Ot: z.p
    };
    z.e = sC.prototype;
    z.e.D = function() {
        this.stop();
        sC.v.D.call(this)
    };
    z.e.start = function() {
        this.state.bm || (this.state.bm = !0, (0, window.$)(window).on("scroll resize", this.rK).trigger("scroll"))
    };
    z.e.stop = function() {
        this.state.bm && (this.state.bm = !1, (0, window.$)(window).off("scroll resize", this.rK), this.restore(), this.state.$s = !1, this.state.bt = !0, (0, window.setTimeout)(function() { (0, window.$)(window).trigger("scroll")
        }))
    };
    z.e.update = function() {
        if (this.state.Do) this.state.zA = !0;
        else {
            var a = this.options.top,
            b = this.options.bottom,
            c = this.state.$s,
            d = this.state.bt,
            f,
            g,
            h = (this.kc || this.h).getBoundingClientRect(),
            k = this.options.Gb.getBoundingClientRect(),
            m = (0, window.$)(window).height();
            h.height || (h.height = h.bottom - h.top);
            null !== a ? (f = h.top > a, g = k.bottom > a + h.height) : null !== b && (f = h.bottom > m - b, g = k.top > m - h.height - b);
            this.state.$s = f;
            this.state.bt = g;
            if ((c && !d) === (f && !g)) f && !g && this.ha();
            else {
                if (d && !g) return vC(this);
                if (!d && g) return xC(this);
                this.options.QM ? f ? vC(this) : xC(this) : f ? uC(this) : this.restore()
            }
        }
    };
    z.e.ha = function() {
        var a = (this.kc || this.h).getBoundingClientRect().left,
        b = this.options.top,
        c = this.options.bottom; (0, window.$)(this.h).css({
            left: a + "px",
            top: b ? b + "px": "auto",
            bottom: c ? c + "px": "auto"
        })
    };
    z.e.restore = function() {
        this.kc && ((0, window.$)(this.h).removeClass(this.options.Gg).css({
            left: "",
            top: "",
            bottom: ""
        }), (0, window.$)(this.kc).remove(), this.kc = null, this.options.Ot.call(this))
    };
    z.e.onAnimationEnd = function() {
        this.state.Do = !1;
        this.state.zA && (this.state.zA = !1, this.update())
    };
    z.x(z.yC, z.R);
    z.Ca(z.yC.prototype, z.tG);
    z.e = z.yC.prototype;
    z.e.bs = "zm-item-expanded";
    z.e.rM = "zm-item-meta, .js-contentActions";
    z.e.So = null;
    z.e.dx = "z-icon-fold";
    z.e.DB = "sprite-global-icon-fold-white";
    z.e.C = function() {
        z.yC.v.C.call(this);
        CC(this);
        this.nn();
        this.Ph();
        AC(this);
        if (this.pb) this.Ts();
        else {
            var a = this;
            this.g("expand", 
            function() {
                return a.Ts()
            })
        }
    };
    z.e.QF = function() {
        return EC(this)
    };
    z.e.Wx = function() {
        var a = this.entryType + "-" + this.kb;
        return (0, window.$)('a[name\x3d"' + a + '"]', this.h).length && "#" + a
    };
    z.e.nn = function(a) {
        var b = {
            ".js-expand": this.expand,
            ".js-collapse": this.collapse,
            ".js-report": this.qQ,
            ".column[data-entry-url]": this.VF
        };
        z.Mb(b, a || {});
        z.Db(b, 
        function(a, b) {
            if (z.sa(a))(0, window.$)(this.h).on("click", b, window.$.proxy(a, this))
        },
        this); (0, window.$)(".js-toggleCommentBox", this.h).on("click", this.mG.bind(this))
    };
    z.e.wt = function() { (0, z.iG)(this.entryType, this.wj, "read")
    };
    z.e.IH = function() { (0, z.iG)(this.entryType, this.wj, "touch")
    };
    z.e.expand = function(a) {
        this.pb || (this.pb = !0, z.W.add(this.h, this.bs), this.dispatchEvent("expand"), a = a && z.kf(a.target) && z.hj(a.target, "js-vote-count"), this.cv(a), (0, z.Hi)(this, {
            action: "Expand",
            element: "Button"
        }))
    };
    z.e.collapse = function() {
        this.pb && (this.pb = !1, this.bv(), Sr(this.h, (0, z.q)(function() {
            z.W.remove(this.h, this.bs);
            this.dispatchEvent("collapse")
        },
        this)), (0, z.Hi)(this, {
            action: "Collapse",
            element: "Button"
        }))
    };
    z.e.Yc = function() {
        return this.pb
    };
    z.e.Gh = function() {
        this.pb ? this.collapse() : this.expand()
    };
    z.e.WJ = function() {
        return ! z.wm
    };
    z.e.Ts = function() {
        if (this.pb && this.WJ() && !this.mO) {
            this.mO = !0;
            var a = (0, window.$)(".js-collapse-body", this.h)[0];
            if (a) {
                var b = this,
                c = (0, window.$)(".js-collapse", this.h)[0];
                if (!c) {
                    if ("answer" !== this.entryType) return;
                    c = (0, window.$)(".zm-meta-panel", this.h);
                    if (!c.length) return;
                    c = (0, window.$)('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo(c).on("click", (0, z.q)(this.collapse, this)).get(0)
                }
                var d = this.iK = new sC(0, 
                {
                    bottom: 12,
                    Gb: a,
                    CI: function() { (0, window.$)("i", this.h).removeClass(b.dx).addClass(b.DB)
                    },
                    Ot: function() { (0, window.$)("i", this.h).removeClass(b.DB).addClass(b.dx)
                    }
                });
                z.Ac(this, d);
                d.w(c);
                this.g("expand", 
                function(a) {
                    a.target === a.currentTarget && d.start()
                });
                this.g("collapse", 
                function(a) {
                    a.target === a.currentTarget && d.stop()
                });
                d.start()
            }
        }
    };
    z.e.cv = function(a) {
        var b = "view_answer",
        c = EC(this);
        a = a ? "vote_up_count": "expand_answer";
        var d = (0, window.$)(this.h).index() + 1;
        if ("feed" !== c) z.Ai(b, "click_expand_answer", c + "_" + a, d);
        else {
            var c = DC(this),
            f = FC(this); - 1 < c.indexOf("article") ? (b = "view_article", c = "feed_article", a = "expand_article") : c = "feed_answer";
            z.Ai(b, "click_expand_answer", c + "_" + f + "_" + a, d)
        }
    };
    z.e.bv = function() {
        var a = "view_answer",
        b = EC(this),
        c;
        if (c = this.iK) c = this.iK,
        c = c.state.$s && !c.state.bt;
        c = c ? "blue": "grey";
        var d = "collapse_answer_" + c,
        f = (0, window.$)(this.h).index() + 1;
        if ("feed" !== b) z.Ai(a, "click_collapse_answer", b + "_" + d, f);
        else {
            var b = DC(this),
            g = FC(this); - 1 < b.indexOf("article") ? (a = "view_article", b = "feed_article", d = "collapse_article_" + c) : b = "feed_answer";
            z.Ai(a, "click_collapse_answer", b + "_" + g + "_" + d, f)
        }
    };
    z.e.UT = function() {
        var a = z.N(this.So, this.h);
        window.open(a ? a.href: this.Sg.url)
    };
    z.e.Lj = function() {
        var a = this,
        b = (0, window.$)(this.m());
        b.slideUp(function() {
            a.H();
            b.remove()
        })
    };
    z.e.Gc = null;
    z.e.VF = function(a) {
        var b = (0, window.$)(a.currentTarget).data("entry-url");
        "column" === this.entryType && b && !a.target.href && window.open(b)
    };
    z.e.Vx = function() {
        return GC(this)
    };
    z.e.FF = function() {
        return "answer" === this.entryType || "post" === this.entryType ? kC: z.KB
    };
    z.e.Ph = function() {
        this.Ff = z.cn.iL(this.h);
        z.xl(z.xl(z.xl(z.xl(this.Ff.register("shift+o", this.UT, this), {
            group: "操作",
            name: "新窗口打开条目"
        }).register("o", this.Gh, this), {
            group: "操作",
            name: "显示全部/收起"
        }).register("c", this.Zu, this), {
            group: "操作",
            name: "打开评论"
        }).register("shift+c", this.OP, this), {
            group: "操作",
            name: "定位到评论框"
        })
    };
    z.e.qQ = function() { (new z.qB({
            type: this.entryType,
            id: this.kb
        })).render(); (0, z.Hi)(this, {
            action: "ReportIntent",
            element: "Button"
        })
    };
    var JC = z.Rj(function() {
        var a = z.HC(); (0, window.$)("body").append(a);
        return a
    });
    z.x(NC, z.R);
    z.e = NC.prototype;
    z.e.na = function(a) {
        this.dispatchEvent({
            type: "trackRequested",
            category: "share",
            action: a.action.replace("[type]", "post" !== this.Xb ? this.Xb: "article"),
            attributes: a.attributes
        })
    };
    z.e.Z = function(a) {
        var b = this;
        NC.v.Z.call(this, a);
        var c = this.Ad = (0, window.$)(a);
        z.fh ? c.click(yw) : z.wm ? c.click(this.UJ.bind(this)) : this.hc();
        c.click(function() {
            b.na({
                action: "click_share_[type]_start"
            }); (!b.Xo || b.Xo && b.Xo.V()) && (0, z.Hi)(a, {
                action: "ShareIntent",
                element: "Button"
            })
        })
    };
    z.e.hc = function() {
        OC(this);
        this.Ad.one("mouseover focus", window.$.proxy(z.Rj(this.vU), this))
    };
    z.e.vU = function() {
        this.Cm || (this.Cm = z.gt(this.Xb, this.NK));
        if (this.Xo) {
            var a = z.tw(this.VJ); (0, window.$)(".js-qrcode-image", this.Xo.m()).attr("src", a)
        }
    };
    z.e.jP = function(a) {
        a = a.target.Y();
        0 === a ? this.UJ() : 2 === a && (window.open("https://dudu.zhihu.com/post?" + window.$.param({
            url: this.VJ,
            utm_source: "zhihu-web_share",
            utm_medium: "button",
            utm_campaign: "post"
        }), "_blank"), this.na({
            action: "click_share_[type]_to_dudu_start"
        }))
    };
    z.e.UJ = function() {
        this.Cm || (this.Cm = z.gt(this.Xb, this.NK));
        this.Cm.then(function(a) {
            z.LC(a.msg.sina)
        });
        this.na({
            action: "click_share_[type]_to_weibo_start"
        })
    };
    z.x(PC, Nz);
    PC.prototype.$b = function(a) {
        var b = PC.v.$b.call(this, a);
        a = (0, window.parseInt)(z.rl[a.keyCode], 10); (0, window.isNaN)(a) || this.Ya().xb(a - 1);
        return b
    };
    z.x(z.QC, z.R);
    var RC = {
        lW: "textarea.content, script.content",
        tN: ".toggle-expand",
        hW: ".summary",
        kE: null,
        iE: ""
    };
    z.e = z.QC.prototype;
    z.e.C = function() {
        z.QC.v.C.call(this);
        var a = this.h;
        this.Nq = (0, window.$)(this.options.lW, a);
        this.content = this.Nq.is(":input") ? this.Nq.val() : this.Nq.html();
        this.Sk = (0, window.$)(this.options.hW, a);
        this.Re = (0, window.$)(this.options.kE, a);
        this.ed = (0, window.$)(this.options.tN, this.Sk);
        if (!this.Sk.length) return this.dispatchEvent("invalid");
        this.gH = !!this.ed.length;
        this.ed.on("click", (0, z.q)(this.oP, this));
        this.Sk.on("click", (0, z.q)(this.tQ, this))
    };
    z.e.oP = function(a) {
        a.preventDefault();
        SC(this)
    };
    z.e.tQ = function(a) {
        var b = z.wu();
        b && b.Id() || a.target === this.ed[0] || (b = (0, window.$)(a.target).closest("a").get(0), b && "javascript:" !== b.protocol || (a.preventDefault(), SC(this)))
    };
    z.e.expand = function() {
        this.Re.length || (this.Re = (0, window.$)("\x3cdiv\x3e").html(this.content).addClass(this.options.iE).insertBefore(this.Nq));
        this.Sk.hide();
        this.Re.show();
        this.dispatchEvent("expand")
    };
    z.e.collapse = function() {
        this.Sk.show();
        this.Re.hide();
        this.dispatchEvent("collapse")
    };
    var ZC = {
        oC: function(a, b) {
            return window.$.post("/node/ColumnPostVoteBarV2", {
                method: b,
                params: {
                    post_id: a
                }
            })
        },
        SF: function(a) {
            return window.$.get("/node/ColumnPostVoteInfoV2", {
                params: {
                    post_id: a
                }
            })
        }
    };
    z.x(UC, z.R);
    z.WC = {
        Dg: 1,
        Tk: -1,
        Pq: 0
    };
    UC.prototype.defaults = {
        QW: "up",
        sO: "down",
        TN: "count",
        fu: "pressed"
    };
    z.Mb(UC.prototype, z.WC);
    z.e = UC.prototype;
    z.e.N = z.WC.Pq;
    z.e.w = function(a) {
        UC.v.w.call(this, a);
        var b = this.J;
        a = this.X = (0, window.$)(a);
        this.Jv = (0, window.$)("." + b.QW, a);
        this.wv = (0, window.$)("." + b.sO, a);
        this.Cq = (0, window.$)("." + b.TN, a);
        b = this.Jv.hasClass(this.J.fu);
        a = this.wv.hasClass(this.J.fu);
        b ? this.N = z.WC.Dg: a && (this.N = z.WC.Tk);
        XC(this);
        this.Jv.click(window.$.proxy(this.TB, this));
        this.wv.click(window.$.proxy(this.uK, this));
        z.yo(this, {
            module: "VoteBar"
        })
    };
    z.e.getState = function() {
        return this.N
    };
    z.e.lc = z.Kq(function(a) {
        a !== this.N && z.Zn(z.WC, a) && (this.dispatchEvent({
            type: "action",
            data: {
                state: a
            }
        }), this.di && "pending" === this.di.state() && this.di.abort(), VC(this, this.N, a), this.N = a, XC(this), this.jW().done((0, z.q)(function(a) {
            a.r || this.Ic()
        },
        this)))
    },
    !0);
    z.e.gB = function(a) {
        a = (0, window.parseInt)(a);
        this.Cq.text(1E4 > a ? a.toString() : 1E6 > a ? (0, window.parseInt)(a / 1E3) + "K": 1E9 > a ? (0, window.parseInt)(a / 1E6) + "M": (0, window.parseInt)(a / 1E9) + "G")
    };
    z.e.lb = function() {
        return this.Cq.text()
    };
    z.e.jW = function() {
        var a = {};
        a[z.WC.Dg] = "vote_up";
        a[z.WC.Tk] = "vote_down";
        a[z.WC.Pq] = "vote_neutral";
        return this.di = (0, {
            post: ZC.oC,
            answer: $C.oC,
            promotion: TC
        } [this.entryType])(this.kb, a[this.N])
    };
    z.e.TB = function() {
        this.lc(this.N === z.WC.Tk ? z.WC.Dg: this.N ^ z.WC.Dg); (0, z.Hi)(this, {
            action: this.N === z.WC.Pq ? "UnUpvote": "Upvote",
            element: "Button"
        })
    };
    z.e.uK = function() {
        this.lc(this.N === z.WC.Dg ? z.WC.Tk: this.N ^ z.WC.Tk); (0, z.Hi)(this, {
            action: this.N === z.WC.Pq ? "UnDownvote": "Downvote",
            element: "Button"
        })
    };
    z.e.Ic = function() {
        this.dispatchEvent("change")
    };
    z.x(YC, z.R);
    z.e = YC.prototype;
    z.e.lb = function() {
        return this.ob.data("votecount")
    };
    z.e.gB = function(a) {
        this.ob.data("votecount", a);
        this.Ic()
    };
    z.e.Ic = function() {
        this.dispatchEvent("change")
    };
    z.e.Cp = function(a) {
        if (a = (0, z.ab)(a)) a = (0, window.$)(a),
        this.ob.replaceWith(a),
        this.ob = a,
        this.Yb(),
        this.Ic()
    };
    z.e.Yb = function() {
        function a(a, d) {
            var f = z.O("div", "zm-voters");
            a.appendChild(f);
            var g = z.O("div", "listview");
            f.appendChild(g);
            var h = ("post" === b.entryType ? "/post/": "/answer/") + b.kb + "/voters_profile",
            k = new z.Dl({
                use: [],
                source: function() {
                    return window.$.get(h).then(function(a) {
                        var c = a.paging;
                        c && (c.total && b.gB(c.total), h = c.next);
                        return {
                            results: a.payload,
                            next: !!h
                        }
                    })
                }
            });
            k.w(g);
            k.jf().setAttribute("hidden", "true");
            z.Ac(d, k);
            k.o().ya(k, "next", 
            function() {
                k.gb().length ? (k.jf().removeAttribute("hidden"), k.use("autoload", 
                {
                    gr: !1,
                    viewport: f
                })) : (k.H(), f.innerHTML = '\x3cdiv class\x3d"empty-results"\x3e还没有人赞同\x3c/div\x3e')
            });
            return k.jh()
        }
        var b = this; (0, window.$)("a.more", this.ob).click(function() {
            var c = z.X.async({
                modal: !0,
                title: b.lb() + " 人赞同",
                className: "zm-voters-dialog",
                Mw: window.$.Deferred(function(b) { (0, window.setTimeout)(function() {
                        a(c.S(), c).then(function() {
                            b.resolve(null)
                        })
                    })
                }).promise()
            });
            c.o().g(b, "change", 
            function() {
                c.Oa(b.lb() + " 人赞同")
            })
        })
    };
    z.e.C = function() {
        this.ob = (0, window.$)(this.h);
        this.Yb();
        z.yo(this, {
            module: "VoteInfo"
        })
    };
    z.x(bD, z.R);
    z.e = bD.prototype;
    z.e.Z = function(a) {
        bD.v.Z.call(this, a);
        this.o().g(a, "click", this.XT)
    };
    z.e.jO = function() {
        var a = this.iv;
        z.Qo(a.m(), this.$K);
        z.lj(a.m(), [this.ZK, this.aL])
    };
    z.e.RM = '\x3cdiv class\x3d"text zg-clear"\x3e\x3clabel class\x3d"zg-left"\x3e赞同\x3c/label\x3e\x3clabel class\x3d"zg-right"\x3e反对\x3c/label\x3e\x3c/div\x3e';
    z.e.tU = '\x3cdiv class\x3d"text zg-clear votebar-text-post"\x3e\n  \x3clabel\x3e赞\x3c/label\x3e\n\x3c/div\x3e';
    z.e.XT = z.Kq(function() {
        this.Ia && this.Ia.H();
        var a = new z.V(null);
        a.Df(!0);
        a.xm(!0);
        a.vF = !0;
        cD(this);
        this.o().ya(a, "hide", this.jO);
        var b = ["post", "promotion"].includes(this.iv.entryType) ? this.tU: this.RM,
        c = a.S();
        c.appendChild(this.iv.m());
        c.appendChild(z.Xe(b));
        z.W.add(a.m(), this.ix);
        a.G(!0);
        this.Ia = a;
        z.Ac(this, a)
    },
    !0);
    z.uG = {
        bz: function() {
            function a() {
                var a = c.Yc();
                if (a && (b(), f)) {
                    var d = f,
                    h = d.ob;
                    h.data("async-voters") && (h.removeData("async-voters"), z.aD(d))
                }
                g && z.ev(g, a)
            }
            function b() {
                if (!g) {
                    var a = !z.Vj,
                    b = z.N("js-collapse-body", c.m());
                    a && h && (0, window.$)(h).is(":visible") && b && 230 < (0, window.$)(b).height() && (g = c.eZ = new jv(null, b), c.L(g), g.tag = "votebar", g.RI = 50, g.w(h))
                }
            }
            var c = this,
            d = void 0,
            f = void 0,
            g = void 0,
            h = (0, window.$)(".votebar, .zm-votebar", this.m())[0];
            if (h) {
                d = this.Ui = new UC(this.kb, this.entryType);
                this.L(d);
                d.w(h);
                var k = (0, window.$)(".js-openVoteDialog", this.m())[0];
                k && (new bD(d)).w(k)
            }
            if (k = (0, window.$)(".zm-item-vote-info", this.m())[0]) f = this.bL = new YC(this.kb, this.entryType),
            this.L(f),
            f.w(k);
            d && (this.o().g(d, "change", 
            function() {
                f ? z.aD(f) : (0, window.$)("[data-bind-votecount]", this.m()).text(d.lb())
            }), f && this.o().g(f, "change", 
            function() { (0, window.$)("[data-bind-votecount]", this.m()).text(f.lb());
                d.gB(f.lb())
            }));
            this.o().g(this, ["expand", "collapse"], a); (0, window.$)(this.m()).on("contentchange", b); (0, window.setTimeout)(a)
        }
    };
    z.x(z.dD, z.yC);
    z.e = z.dD.prototype;
    z.e.C = function() {
        var a = this;
        z.dD.v.C.call(this);
        z.yo(this, {
            module: "AnswerItem"
        },
        function() {
            return {
                card: {
                    card_type: "Content",
                    content: {
                        type: "Answer",
                        id: a.kb
                    }
                }
            }
        })
    };
    z.e.nn = function() {
        var a = this;
        z.dD.v.nn.call(this, {
            ".js-collect": this.UF,
            ".js-thank": this.kG,
            ".js-noHelp": this.gQ,
            ".js-administer": this.YJ,
            ".js-orgCollapse": this.kQ,
            ".js-expandQuestionDetail": this.QJ.bind(this, !0)
        });
        this.bz();
        this.Xy();
        this.si();
        jD(this);
        this.Uj();
        this.Yy();
        this.o().g(this, "collapse", 
        function(b) {
            b.target === a && a.QJ(!1)
        });
        if (this.pb) this.Yl();
        else {
            var b = this;
            this.ya("expand", 
            function() {
                return b.Yl()
            })
        }
    };
    z.e.Ph = function() {
        var a = this;
        z.dD.v.Ph.call(this);
        z.xl(z.xl(z.xl(z.xl(this.Ff.register("v", 
        function() {
            a.Ui && a.Ui.TB()
        }), {
            group: "操作",
            name: "赞同"
        }).register("d", 
        function() {
            a.Ui && a.Ui.uK()
        }), {
            group: "操作",
            name: "反对"
        }).register("t", this.kG, this), {
            group: "操作",
            name: "感谢"
        }).register("s c", this.UF, this), {
            group: "操作",
            name: "收藏"
        });
        if (z.sm.TG && (0, window.$)(".js-administer", GC(this))[0]) {
            var b = this,
            c = z.Uc ? "⌘": "ctrl",
            d = function() {
                b.YJ();
                b.Vq.xb(0)
            };
            z.xl(z.xl(this.Ff.register("meta+.", d), {
                group: "管理",
                name: "展开菜单",
                key: c + "+."
            }).register("meta+k", 
            function() {
                d();
                var a = b.Vq.li(0);
                a.Ya && a.Ya() && (a.Lu(), a.Ya().xb(0))
            }), {
                group: "管理",
                name: "展开折叠子菜单 (Kill)",
                key: c + "+k"
            })
        }
    };
    z.e.Uj = function() {
        var a = (0, window.$)(".js-share", this.m()).get(0),
        b = this.Sg.url;
        a && b && (a = z.MC(a, "answer", this.wj, b), z.Ac(this, a), a.Db(this))
    };
    z.e.si = function(a) {
        var b = new z.QC(a);
        this.L(b);
        b.w(this.h);
        this.g("expandRequest", (0, z.q)(this.expand, this));
        this.g("expand", 
        function(a) {
            a.target === a.currentTarget && b.expand()
        });
        this.g("collapse", 
        function(a) {
            a.target === a.currentTarget && b.collapse()
        });
        b.gH && this.o().ya(b, "expand", this.wt)
    };
    z.e.Xy = function() {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.rz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.yz("operation", b);
            b.xk = !0;
            z.Az(b);
            zz(b);
            b.Ob = z.Gl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.e.kG = zC(function(a) {
        if (a = a.target) {
            var b = "true" === a.getAttribute("data-thanked");
            b ? (qr(a, "感谢"), a.setAttribute("data-thanked", !1), window.$.post("/answer/cancel_thanks", {
                aid: this.kb
            })) : (qr(a, "取消感谢"), a.setAttribute("data-thanked", !0), window.$.post("/answer/thanks", {
                aid: this.kb
            })); (0, z.Hi)(a, {
                action: b ? "UnThank": "Thank",
                element: "Button"
            })
        }
    },
    {
        Fb: "question_answer_thank"
    });
    z.e.gQ = zC(function(a) {
        a = a.target;
        var b = !!a.m;
        z.Y.tb({
            type: "ga_click_answer_not_helpful",
            target: b ? a.m() : a
        });
        this.hx && "pending" === this.hx.state() && this.hx.abort();
        var c = -1 < (b ? a.Vg() : a.innerHTML).indexOf("撤销"),
        d = c ? "没有帮助": "撤销没有帮助";
        b ? a.Lp(d) : a.innerHTML = d;
        d = c ? "/answer/helpful": "/answer/not_helpful";
        b || z.yr(a);
        this.hx = window.$.post(d, {
            aid: this.kb
        }); (0, z.Hi)(this, {
            action: c ? "UnNoHelp": "NoHelp",
            element: "Button"
        })
    },
    !0);
    z.e.UF = zC(function() {
        var a = z.Sz.ba();
        Vz(a, this.kb);
        a.show(); (0, z.Hi)(this, {
            action: "CollectIntent",
            element: "Button"
        })
    },
    {
        Fb: "question_answer_collect",
        ue: !0
    });
    z.e.Yy = function() {
        var a = (0, window.$)(".js-settings", GC(this))[0];
        if (a) {
            var b = this;
            this.oD = new gA(this);
            this.oD.w(a);
            this.o().g(this.oD, mA, 
            function() {
                if (b.Ga) {
                    var a = b.Ga.Yc();
                    b.removeChild(b.Ga, !0);
                    b.Ga.H();
                    b.Ga = null;
                    b.fF();
                    a && b.Ga.Gh()
                }
            })
        }
    };
    z.e.YJ = function() {
        if (this.Vq) return this.Vq.G(!0);
        var a = eD(this);
        a && (z.Iz(a, new z.dz(this.yM, 1, !0), 0, new z.qg(5, 0, 5, 0)), hD(this, a), this.Vq = a)
    };
    z.e.kQ = function() {
        var a = this,
        b = void 0,
        c,
        d;
        this.ti ? (b = "取消隐藏回答", c = "确认取消隐藏？", d = "cancel_collapse") : (b = "隐藏回答", c = "隐藏后该回答将不展示也不流通，是否确认隐藏？", d = "collapse");
        z.X.confirm(b, c, 
        function(b) {
            b && window.$.post("/answer/" + a.wj + "/org_" + d).then(function(a) {
                a.r ? z.X.message(a.msg) : (z.X.message("操作成功！"), window.location.reload())
            })
        })
    };
    z.e.Yl = function() { (0, window.$)("img.lazy:not([data-lazyloaded])", this.m()).attr("data-lazyloaded", "").lazyload({
            load: function() { (0, window.$)(this).trigger("contentchange")
            },
            data_attribute: "actualsrc",
            event: "scroll updatelazy",
            threshold: 400
        })
    };
    z.e.Gc = z.aa(40);
    z.e.QJ = function(a) { (0, window.$)(".feed-question-detail-item", this.h).toggleClass("question-detail-expanded", a)
    };
    z.Ca(z.dD.prototype, z.uG);
    z.x(z.kD, z.yC);
    z.e = z.kD.prototype;
    z.e.So = "post-link";
    z.e.C = function() {
        var a = this;
        z.kD.v.C.call(this);
        this.bz();
        this.si();
        this.Xy();
        this.Uj();
        mD(this);
        lD(this);
        z.yo(this, {
            module: "PostItem"
        },
        function() {
            return {
                card: {
                    card_type: "Content",
                    content: {
                        type: "Post",
                        id: a.kb
                    }
                }
            }
        })
    };
    z.e.QF = function() {
        return "feed_article_" + FC(this) + (this.Yc() ? "_expand": "")
    };
    z.e.Uj = function() {
        var a = (0, window.$)("a[name\x3dshare], .js-share", this.h).get(0),
        b = (0, window.$)(".post-link, .js-title-link", this.h).get(0);
        a && b && z.MC(a, "post", this.wj, b.href).Db(this)
    };
    z.e.Gc = z.aa(39);
    z.e.By = z.aa(41);
    z.e.sy = z.aa(42);
    z.e.si = function(a) {
        var b = new z.QC(a);
        this.L(b);
        b.w(this.h);
        this.kK = b;
        this.g("expandRequest", (0, z.q)(this.expand, this));
        this.g("expand", 
        function(a) {
            a.target === a.currentTarget && b.expand()
        });
        this.g("collapse", 
        function(a) {
            a.target === a.currentTarget && b.collapse()
        });
        b.gH && this.o().ya(b, "expand", this.wt)
    };
    z.e.Ph = function() {
        var a = this;
        z.kD.v.Ph.call(this);
        z.xl(this.Ff.register("v", 
        function() {
            a.Ui && a.Ui.TB()
        }), {
            group: "操作",
            name: "赞同"
        })
    };
    z.e.Xy = function() {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.rz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.yz("operation", b);
            b.xk = !0;
            z.Az(b);
            zz(b);
            b.Ob = z.Gl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.Ca(z.kD.prototype, z.uG);
    z.l(z.nD, z.yC);
    z.nD.prototype.Gc = z.aa(38);
    z.x(z.pD, z.mz);
    z.pD.prototype.Nd = function() {
        return this.dispatchEvent("action")
    };
    z.Up("goog-option", 
    function() {
        return new z.pD(null)
    });
    z.x(z.qD, z.R);
    z.e = z.qD.prototype;
    z.e.hC = !z.Vj;
    z.e.fC = !z.Vj;
    z.e.CH = !1;
    z.e.Ki = function(a) {
        this.fh = a
    };
    z.e.init = function() {
        this.Md = z.L("zh-load-more");
        this.w(this.zO)
    };
    z.e.C = function() {
        z.qD.v.C.call(this);
        this.kn = 1;
        uD(this);
        this.Qk = (0, window.$)(this.Md);
        this.Md && (sD(this), this.o().g(this.Md, "click", 
        function() {
            this.Fo = !0;
            this.Lh && "pending" === this.Lh.state() && 1 === this.kn ? (this.Lh.done((0, z.q)(this.lk, this)), this.oB = !0, z.rD(this, !0)) : this.hC && this.eu ? (this.lk(this.eu), this.eu = null) : (z.rD(this, !0), this.ih())
        }), this.hC && (this.NB = new z.gl(this.iA, 100, this), this.o().g(window, "scroll", 
        function() {
            this.NB.fire()
        })));
        vD(this, this.gb())
    };
    z.e.jh = function() {
        this.ih(!0)
    };
    z.e.iA = function() {
        var a = this.Md;
        a && z.Lg(a) && 1E3 >= a.getBoundingClientRect().top - z.Pe().height && !(this.eu || this.Lh && "pending" === this.Lh.state()) && (this.fC && (3 !== this.kn || this.CH ? (this.Fo = !1, this.kn++, this.oB = !0) : (this.kn = 1, this.oB = !1)), this.ih())
    };
    z.e.ih = function(a, b, c) {
        b = b || z.p;
        if (!this.Lh || "pending" !== this.Lh.state()) {
            var d = this.GA(window.$.extend(this.params, {
                offset: this.offset,
                start: this.Nu
            }));
            z.Y.tb({
                type: "topstory_feed_more"
            }); (0, z.Hi)(this, {
                action: this.Fo ? "LoadMore": "RollForMore",
                element: "Button"
            });
            this.Lh = window.$.post(this.url, d).done(b).done(window.$.proxy(function(b) {
                if (c) return c.call(this, b);
                this.hC && !a ? this.oB ? this.lk(b) : (this.eu = b, z.rD(this, !1)) : this.lk(b)
            },
            this));
            1 !== this.kn && z.rD(this, !0);
            return this.Lh
        }
    };
    z.e.GA = function(a) {
        return a
    };
    z.e.lk = function(a) {
        if (a && !a.r) {
            var b = a.msg,
            c = b[0],
            d = b[1],
            f;
            2 < b.length && (f = b[2], this.Md.setAttribute("data-next", f));
            0 < c && (this.er(d), this.offset = this.Xz ? this.Xz(this.gb()) : this.offset + c);
            b = !0;
            b = this.Fs ? this.Fs(a) : !( - 1 === f || 10 > c);
            z.Q(this.Md, b);
            z.rD(this, !1);
            z.tD(this)
        }
    };
    z.e.gb = function() {
        return z.Ro(this.fh, this.h)
    };
    z.e.xA = function(a) {
        return a.id.replace(/^\w+-/, "")
    };
    z.e.er = function(a, b) {
        var c = z.na(a) ? a.join("") : a,
        c = z.Xe(c + " "),
        d = z.Ro(this.fh, c);
        vD(this, d);
        "prepend" === b ? z.bf(c, this.h.firstChild) : this.h.appendChild(c);
        uD(this)
    };
    z.e.Nt = z.p;
    z.x(z.wD, z.G);
    z.wD.prototype.handleEvent = function(a) {
        if ("input" == a.type) z.C && z.E(10) && 0 == a.keyCode && 0 == a.charCode || (xD(this), this.dispatchEvent(yD(a)));
        else if ("keydown" != a.type || uo(a)) {
            var b = "keydown" == a.type ? this.h.value: null;
            z.C && 229 == a.keyCode && (b = null);
            var c = yD(a);
            xD(this);
            this.ma = z.vd(function() {
                this.ma = null;
                this.h.value != b && this.dispatchEvent(c)
            },
            0, this)
        }
    };
    z.wD.prototype.D = function() {
        z.wD.v.D.call(this);
        this.T.H();
        xD(this);
        delete this.h
    };
    z.x(zD, z.G);
    var AD = 0;
    zD.prototype.bA = function() {
        this.hl()
    };
    zD.prototype.hl = function() {
        var a = this.gi.value.length;
        if (a > this.At) {
            var b = this.gi.scrollTop,
            c = this.gi.scrollLeft;
            this.gi.value = this.gi.value.substring(0, this.At);
            a = this.At;
            this.gi.scrollTop = b;
            this.gi.scrollLeft = c
        }
        this.$E && z.nf(this.$E, String(1 == this.oO ? a: this.At - a))
    };
    zD.prototype.D = function() {
        zD.v.D.call(this);
        delete this.gi;
        this.dz.H();
        this.dz = null
    };
    var GD;
    z.x(z.BD, z.Yj);
    z.e = z.BD.prototype;
    z.e.init = function() {
        this.Xs || (this.Xs = !0, this.B(), this.Yb())
    };
    z.e.Yb = function() {
        z.C || (new z.Ys("搜索问题")).w(this.$c);
        this.W = new z.lt("/redirect-question/autocomplete", this.$c, null, null, z.L("zh-question-redirect-diag-content"), !1);
        this.W.jn = !1;
        this.W.tg(!0);
        this.o().g(this.W, "suggestionsupdate", Qr);
        this.o().g(this.W, "select", this.AT).g(this.qN, "click", 
        function() {
            this.sa.G(!1)
        })
    };
    z.e.AT = function() {
        var a = this.W.bg();
        if ("search_link" === a[0]) window.open("/search?q\x3d" + (0, window.encodeURIComponent)(a[1]) + "\x26type\x3dquestion");
        else {
            this.$c.value = "";
            var b = a[3],
            a = a[1];
            this.sa.G(!1);
            this.$c.value = "";
            this.xhr = new z.Z(!0);
            this.o().ya(this.xhr, "complete", this.IM);
            this.xhr.ajax("/question/redirect", "qid\x3d" + this.pa + "\x26rqid\x3d" + b);
            this.wu = b;
            this.fJ = a
        }
    };
    z.e.IM = function() {
        var a = z.Sn(this.xhr);
        a && (a.r ? z.X.message(a.msg) : this.dj ? (this.dj.innerHTML = "已经重定向", this.dj.setAttribute("data-disabled", 1)) : this.dispatchEvent("change"))
    };
    z.e.B = function() {
        this.h = z.O("div", {
            id: "zh-question-redirect-diag"
        },
        ["将问题跳转至", z.O("div", {
            id: "zh-question-redirect-diag-content"
        },
        this.$c = z.O("input", {
            type: "text",
            "class": "zg-form-text-input"
        })), z.O("div", "zm-command", this.qN = z.O("a", {
            href: "javascript:;",
            "class": "zm-command-cancel",
            name: "cancel"
        },
        "放弃操作"))]);
        this.sa = new z.V(null);
        this.sa.Oa("问题重定向");
        z.Mj(this.sa, null);
        this.sa.S().appendChild(this.h)
    };
    z.e.show = function() {
        this.init();
        this.sa.G(!0)
    };
    var vG = {},
    vG = function() {
        z.G.call(this)
    };
    z.x(vG, z.Yj);
    vG.Mv = [["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"], ["答非所问", "没有正面或直接回答问题，请修改答案。"], ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"], ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"], ["内容重复", "与已有答案重复，请修改答案。"], ["内容已过期", "答案的时效性已过，请更新答案。"], ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]];
    vG.Vj = null;
    vG.ba = function() {
        vG.Vj || (vG.Vj = new vG, vG.Vj.init());
        return vG.Vj
    };
    z.e = vG.prototype;
    z.e.init = function() {
        if (!this.h) {
            this.B();
            this.Yb();
            var a = new hx(this.h);
            Bn(a);
            a.yG = !0;
            a.xm(!0);
            a.G(!1);
            a.EA = 0;
            a.V() && a.ha();
            z.ix(a, new z.qg(13, 0, 0, -22));
            this.DA = a
        }
    };
    z.e.Yb = function() {
        this.o().g(this.h, "click", this.xT)
    };
    z.e.xT = function(a) {
        "A" === a.target.tagName && (a = a.target.getAttribute("data-index"), this.ZN.AY(a), this.DA.G(!1))
    };
    z.e.B = function() {
        var a = z.O("div", {
            id: "zh-answer-flag-popup",
            "class": "zg-r5px zu-hovercard-wrap"
        },
        [z.O("div", "zg-r5px zu-hovercard-inner", [z.O("div", {
            id: "zh-answer-flag-popup-header"
        },
        [z.O("a", {
            "class": "zg-right",
            href: "/question/19867017",
            target: "_blank"
        },
        "这是什么？"), "选择一个理由："]), this.MI = z.O("div", {
            id: "zh-answer-flog-options-wrap"
        })]), z.O("div", "zu-hovercard-spin-top")]);
        z.y(vG.Mv, 
        function(a, c) {
            var d = z.O("a", {
                href: "javascript:;",
                "class": "zm-menu-item-link"
            },
            a[0]);
            d.setAttribute("data-index", c);
            this.MI.appendChild(d)
        },
        this);
        window.document.body.appendChild(a);
        this.h = a
    };
    z.e.show = function(a, b) {
        this.DA.setPosition(new z.fx(a, 1));
        CD(this, b.EY());
        this.DA.G(!0);
        this.ZN = b
    };
    var FD;
    z.x(DD, z.Yj);
    DD.prototype.init = function() {
        this.B();
        this.mn()
    };
    DD.prototype.B = function() {
        this.h = z.O("div", null, [z.O("div", "zg-section", [z.O("div", null, "标记："), this.yl = z.O("select")]), z.O("div", null, [z.O("div", null, "原因"), this.LA = z.O("textarea", {
            style: "width:96%;border:solid 1px #666;height:66px;padding:5px"
        })]), this.An = z.O("div", "zm-command", [z.O("a", {
            "class": "zg-mr10",
            href: "javascript:void(0);",
            name: "cancel"
        },
        "取消"), z.O("a", {
            "class": "zg-btn-blue",
            href: "javascript:void(0);",
            name: "confirm"
        },
        "确定")])]);
        this.yl.appendChild(z.O("option", {
            value: "no"
        },
        "选择标记原因"));
        z.y(vG.Mv, 
        function(a, b) {
            this.yl.appendChild(z.O("option", {
                value: b
            },
            a[0]))
        },
        this);
        this.sa = new z.V(null);
        this.sa.Oa("标记答案");
        z.Mj(this.sa, null);
        this.sa.S().appendChild(this.h)
    };
    DD.prototype.mn = function() {
        this.o().g(this.yl, "change", 
        function() {
            var a = this.yl.value;
            this.LA.value = "no" === a ? "": vG.Mv[ + a][1]
        }).g(this.An, "click", 
        function(a) {
            "cancel" === a.target.name ? this.sa.G(!1) : this.LA.value && "no" !== this.yl.value && (this.Kx = new z.Z(!0), this.o().g(this.Kx, "complete", 
            function() {
                var a = z.Sn(this.Kx);
                a && !a.r ? (this.dj.innerHTML = "已经标记", this.sa.G(!1)) : z.X.message(a.msg)
            }), a = z.tr(this.LA.value), this.Kx.ajax("/answer/flag", "answer_id\x3d" + this.pM + "\x26flag\x3d" + this.yl.value + "\x26reason\x3d" + 
            (0, window.encodeURIComponent)(a)))
        })
    };
    DD.prototype.show = function() {
        this.sa.G(!0)
    };
    z.MD = {
        digits: {
            required: "请填写数字验证码"
        },
        password: {
            required: "请填写密码"
        },
        password_repeat: {
            required: "请填写密码"
        },
        email: {
            required: "请填写邮箱"
        },
        phone_no: {
            required: "请填写手机号"
        }
    };
    z.v("ZH.m", z.OD);
    z.x(z.PD, z.G);
    z.PD.prototype.show = function() {
        this.cf || (this.cf = this.Pw(), this.cf.g("hide", this.lP, !1, this));
        this.cf.G(!0)
    };
    z.PD.prototype.hide = function() {
        this.cf && this.cf.G(!1)
    };
    z.PD.prototype.ub = function() {
        return !! this.cf && this.cf.V()
    };
    z.QD.prototype.Oa = function(a) {
        this.Wi.Oa(a);
        return this
    };
    z.QD.prototype.Bd = function(a, b, c) {
        c = c || z.kp();
        this.wn.set(c, a);
        this.vn[c] = b;
        return this
    };
    z.QD.prototype.Oh = function(a) {
        z.ij(this.Wi.ii(), a);
        return this
    };
    z.QD.prototype.ia = function(a) {
        this.Wi.S().appendChild(a);
        return this
    };
    z.e = z.PD.prototype;
    z.e.ls = z.aa(23);
    z.e.iQ = function(a) {
        return (a = this.Gn(a)) ? this.dispatchEvent(a) : !1
    };
    z.e.io = function() {
        return this.dispatchEvent("cancel")
    };
    z.e.D = function() {
        this.cf && (this.hide(), this.cf.H(), this.cf = null);
        z.PD.v.D.call(this)
    };
    z.e.lP = function() {
        this.dispatchEvent("afterhide")
    };
    z.x(z.UD, z.xA);
    z.e = z.UD.prototype;
    z.e.Ke = function(a) {
        return a == this.LN
    };
    z.e.execCommand = function(a, b) {
        return this.ff.apply(this, arguments)
    };
    z.e.IF = function() {
        return this.Ia
    };
    z.e.ff = function(a, b) {
        this.CJ || WD(this);
        this.Ia || (this.Ia = this.Ow(z.J(this.F.Wk), b));
        var c = z.$A(this.F);
        this.xJ = zA(this);
        this.GJ = c && new z.bv(c);
        Bu(this.F.jb.Va());
        z.ld(this.Ia, "afterhide", this.ho, !1, this);
        this.F.ah = !0;
        this.Ia.show();
        this.dispatchEvent("dialogOpened");
        z.aB(this.F);
        return ! 0
    };
    z.e.ho = function() {
        this.F.ah = !1;
        z.VD(this);
        this.xJ();
        this.CJ || WD(this);
        this.dispatchEvent("dialogClosed");
        z.aB(this.F);
        this.F.Lr.selectionchange = (0, z.I)()
    };
    z.e.D = function() {
        WD(this);
        z.UD.v.D.call(this)
    };
    z.e.CJ = !1;
    z.e.jz = !1;
    z.x(XD, z.PD);
    z.x(YD, z.Lc);
    z.e = XD.prototype;
    z.e.template = (0, z.Sv)('\x3cdiv class\x3d"zm-img-uploader"\x3e\x3ciframe src\x3d"about:blank" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0; width: 0; left: -9000px; "\x3e\x3c/iframe\x3e\x3cdiv class\x3d"zg-section zm-img-uploader-tab"\x3e\x3ca href\x3d"javascript:;" class\x3d"tab-nav selected"\x3e上传图片\x3c/a\x3e 或 \x3ca href\x3d"javascript:;" class\x3d"tab-nav"\x3e引用站外图片\x3c/a\x3e\x3c/div\x3e\x3cform class\x3d"zg-clear" target\x3d"av_up_frame" method\x3d"POST" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3d uploadURL %\x3e"\x3e\x3cdiv class\x3d"tab-content selected \x3c% if (canStylize) { %\x3einline\x3c% } %\x3e"\x3e\x3c% if (canStylize) { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file" style\x3d"opacity:0;height:0;width:0;font-size:0;position:absolute;"\x3e\x3ca href\x3d"javascript:;" class\x3d"browser zg-btn-blue"\x3e选择图片\x3c/a\x3e\x3c% } else { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file"\x3e\x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"tab-content"\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" name\x3d"upload_file_url" class\x3d"zm-editable-editor-input zg-form-text-input"\x3e\x3ca href\x3d"javascript:;" class\x3d"insert zg-btn-blue zm-uploader-button-fix"\x3e确认\x3c/a\x3e\x3c/div\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-loading"\x3e正在上传\x3c/span\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-error"\x3e上传图片失败，请稍后重试\x3c/span\x3e\x3c/form\x3e\x3cdiv class\x3d"zg-gray"\x3e请不要上传与回答问题无关的图片，详细请看 \x3ca href\x3d"/question/20064580" target\x3d"_blank"\x3e知乎图片使用规范\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"cancel" href\x3d"javascript:;"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
    z.e.Pw = function() {
        var a = z.Xe(this.template({
            uploadURL: this.vq,
            canStylize: this.vN
        }));
        z.Db({
            form: "form",
            IB: ".zm-img-uploader-tab",
            lh: ".zm-img-uploader-loading",
            ef: ".zm-img-uploader-error",
            pK: "input[type\x3dtext]",
            Tn: "input[type\x3dfile]",
            JD: ".browser",
            Bw: ".cancel",
            nR: ".insert"
        },
        function(b, d) {
            this[d] = (0, window.$)(b, a).get(0)
        },
        this);
        this.T.g(z.Y, "iframe_data", this.Yv).g(this.Tn, "change", this.uU).g(this.nR, "click", this.oR).g(this.Bw, "click", 
        function() {
            this.io();
            this.hide()
        }).g(this.IB, "click", 
        function(a) {
            a = 
            (0, window.$)(a.target);
            a.is("a") && !a.is(".selected") && ZD(this, a.index())
        });
        this.jE = a;
        z.Wm || (ZD(this, 1), (0, window.$)(this.IB).replaceWith("\x3cstrong\x3e输入站外图片地址：\x3c/strong\x3e"));
        this.JD && this.T.g(this.JD, "click", 
        function() {
            this.Tn.click()
        });
        var b = new z.QD(this);
        b.Oa("插入图片").ia(this.jE);
        b = z.TD(b);
        z.Mj(b, null);
        return b
    };
    z.e.uU = function() {
        this.Tn.value && (Kr(this.Tn.value) ? (this.pK.value = "", z.Q(this.lh, !0), z.Q(this.ef, !1), this.form.submit()) : $D(this, "图片不是 .jpg 或 .png 格式无法上传"))
    };
    z.e.oR = function() {
        var a = z.tr(this.pK.value);
        a ? z.Ja(a, "http://") ? (this.Tn.value = "", z.Q(this.lh, !0), z.Q(this.ef, !1), this.form.submit()) : $D(this, "我们目前不支持该协议。") : $D(this, "请填写图片地址。")
    };
    z.e.Yv = function(a) {
        z.Q(this.lh, !1);
        this.Am(a.yf)
    };
    z.e.Am = function(a) {
        a && !a.r ? (this.dispatchEvent(this.Gn(a.msg)), this.hide()) : $D(this, a.msg)
    };
    z.e.Gn = function(a) {
        return new YD(a)
    };
    z.e.D = function() {
        this.T.H();
        this.T = null;
        XD.v.D.call(this)
    };
    z.x(z.aE, z.UD);
    z.e = z.aE.prototype;
    z.e.md = z.ib("ImageDialogPlugin");
    z.e.ff = function(a, b) {
        var c = this.F;
        return c.tf || (c.Yf(), c.tf) ? z.aE.v.ff.call(this, a, b) : !1
    };
    z.e.Mj = function(a) {
        if (a && "mouseup" === a.type) {
            var b = a.target;
            b && "IMG" === b.nodeName && (a = z.Hu(b), a || (a = window.document.createElement("br"), z.cf(a, b)), z.Qu(a))
        }
    };
    z.e.ho = function(a) {
        z.aE.v.ho.call(this, a)
    };
    z.e.Ow = function(a) {
        a = new XD(a);
        this.T.g(a, "ok", this.no).g(a, "cancel", this.jy);
        return a
    };
    z.e.D = function() {
        z.aE.v.D.call(this);
        this.T.H()
    };
    z.e.no = function(a) {
        z.VD(this);
        var b = z.yA(this),
        c;
        c = a.OI ? b.B("IMG", {
            "class": "origin_image zh-lightbox-thumb",
            "data-original": a.OI,
            title: "点击查看原图",
            src: a.Xl
        }) : b.B("IMG", {
            "class": "content_image",
            src: a.Xl
        });
        a.jJ && c.setAttribute("data-rawwidth", a.jJ);
        a.iJ && c.setAttribute("data-rawheight", a.iJ);
        a = z.$A(this.F);
        if (z.$u(a)) a.Di(c),
        z.C || (z.Ru(c, !1), b.Va().focus()),
        z.aB(this.F),
        this.F.df();
        else return null;
        this.T.removeAll()
    };
    z.e.jy = function() {
        this.T.removeAll()
    };
    var wG = z.u("Link");
    z.u("Edit Link");
    z.u("Text to display:");
    z.xG = z.u("Link to:");
    z.u("Web address");
    z.u("Link to a page or file somewhere else on the web");
    z.u("Test this link");
    z.u("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
        startBold: "\x3cb\x3e",
        endBold: "\x3c/b\x3e",
        searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e",
        endLink: "\x3c/a\x3e"
    });
    z.u("To what URL should this link go?");
    z.u("Email address");
    z.u("Link to an email address");
    z.u("Invalid email address");
    z.u("To what email address should this link?");
    z.u("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
        preb: "\x3cb\x3e",
        postb: "\x3c/b\x3e"
    });
    z.u("Open this link in a new window");
    z.u("Image");
    z.x(bE, z.Bt);
    bE.prototype.next = function() {
        do bE.v.next.call(this);
        while ( - 1 == this.Ub);
        return this.node
    };
    z.x(z.cE, Np);
    z.la(z.cE);
    var gE = 0;
    z.e = z.cE.prototype;
    z.e.B = function(a) {
        var b = this.Zf(a);
        a = a.K().B("DIV", b ? b.join(" ") : null, dE(this, a.Ua(), a.Wg(), a.K()));
        z.cj(a, "grid");
        return a
    };
    z.e.Qw = function(a, b) {
        var c = b.B("TABLE", this.U() + "-table", b.B("TBODY", this.U() + "-body", a));
        c.cellSpacing = 0;
        c.cellPadding = 0;
        return c
    };
    z.e.Ob = function() {
        return ! 1
    };
    z.e.w = function() {
        return null
    };
    z.e.ia = function(a, b) {
        if (a) {
            var c = z.Le("TBODY", this.U() + "-body", a)[0];
            if (c) {
                var d = 0;
                z.y(c.rows, 
                function(a) {
                    z.y(a.cells, 
                    function(a) {
                        z.af(a);
                        if (b) {
                            var c = b[d++];
                            c && a.appendChild(c)
                        }
                    })
                });
                if (d < b.length) {
                    for (var f = [], g = z.J(a), h = c.rows[0].cells.length; d < b.length;) {
                        var k = b[d++];
                        f.push(eE(this, k, g));
                        f.length == h && (k = fE(this, f, g), c.appendChild(k), f.length = 0)
                    }
                    if (0 < f.length) {
                        for (; f.length < h;) f.push(eE(this, "", g));
                        k = fE(this, f, g);
                        c.appendChild(k)
                    }
                }
            }
            z.Ao(a, !0, z.B)
        }
    };
    z.e.U = function() {
        return "goog-palette"
    };
    z.x(iE, z.G);
    z.e = iE.prototype;
    z.e.vh = null;
    z.e.Cf = null;
    z.e.Hl = function() {
        return this.Le.length
    };
    z.e.li = function(a) {
        return this.Le[a] || null
    };
    z.e.Fa = function(a) {
        this.ej(a, this.Hl())
    };
    z.e.ej = function(a, b) {
        a && (this.wm(a, !1), z.xb(this.Le, b, 0, a))
    };
    z.e.removeItem = function(a) {
        a && z.tb(this.Le, a) && a == this.vh && (this.vh = null, this.dispatchEvent("select"))
    };
    z.e.kf = function() {
        return this.vh
    };
    z.e.gb = function() {
        return z.vb(this.Le)
    };
    z.e.Ef = function(a) {
        a != this.vh && (this.wm(this.vh, !1), this.vh = a, this.wm(a, !0));
        this.dispatchEvent("select")
    };
    z.e.Gj = function() {
        var a = this.vh;
        return a ? z.lb(this.Le, a) : -1
    };
    z.e.Sp = function(a) {
        this.Ef(this.li(a))
    };
    z.e.clear = function() {
        var a = this.Le;
        if (!z.na(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0;
        this.vh = null
    };
    z.e.D = function() {
        iE.v.D.call(this);
        delete this.Le;
        this.vh = null
    };
    z.e.wm = function(a, b) {
        a && ("function" == typeof this.Cf ? this.Cf(a, b) : "function" == typeof a.lB && a.lB(b))
    };
    z.x(z.kE, Wp);
    z.e = z.kE.prototype;
    z.e.wc = null;
    z.e.Ta = -1;
    z.e.oa = null;
    z.e.D = function() {
        z.kE.v.D.call(this);
        this.oa && (this.oa.H(), this.oa = null);
        this.wc = null;
        this.Jn.H()
    };
    z.e.ym = function(a) {
        z.kE.v.ym.call(this, a);
        nE(this);
        this.oa ? (this.oa.clear(), jE(this.oa, a)) : (this.oa = new iE(a), a = (0, z.q)(this.wm, this), this.oa.Cf = a, this.o().g(this.oa, "select", this.Mj));
        this.Ta = -1
    };
    z.e.Vg = function() {
        return ""
    };
    z.e.Lp = function() {};
    z.e.nd = function(a) {
        z.kE.v.nd.call(this, a);
        var b = hE(this.M, this, a.target);
        b && a.relatedTarget && z.mf(b, a.relatedTarget) || b == oE(this) || (a = this.Ua(), this.xb(a ? z.lb(a, b) : -1))
    };
    z.e.he = function(a) {
        z.kE.v.he.call(this, a);
        if (this.uc() && (a = hE(this.M, this, a.target), a != oE(this))) {
            var b = this.Ua();
            this.xb(b ? z.lb(b, a) : -1)
        }
    };
    z.e.Nd = function(a) {
        var b = oE(this);
        return b ? (this.Ef(b), z.kE.v.Nd.call(this, a)) : !1
    };
    z.e.$b = function(a) {
        var b = this.Ua(),
        b = b ? b.length: 0,
        c = this.wc.width;
        if (0 == b || !this.isEnabled()) return ! 1;
        if (13 == a.keyCode || 32 == a.keyCode) return this.Nd(a);
        if (36 == a.keyCode) return this.xb(0),
        !0;
        if (35 == a.keyCode) return this.xb(b - 1),
        !0;
        var d = 0 > this.Ta ? this.Gj() : this.Ta;
        switch (a.keyCode) {
        case 37:
            if ( - 1 == d || 0 == d) d = b;
            this.xb(d - 1);
            a.preventDefault();
            return ! 0;
        case 39:
            return d == b - 1 && (d = -1),
            this.xb(d + 1),
            a.preventDefault(),
            !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return this.xb(d - c),
            a.preventDefault(),
            !0;
            break;
        case 40:
            if ( - 1 == 
            d && (d = -c), d < b - c) return this.xb(d + c),
            a.preventDefault(),
            !0
        }
        return ! 1
    };
    z.e.Mj = function() {};
    z.e.Wg = function() {
        return this.wc
    };
    z.e.xb = function(a) {
        a != this.Ta && (pE(this, this.Ta, !1), this.wz = this.Ta, this.Ta = a, pE(this, a, !0), this.dispatchEvent("j"))
    };
    z.e.Gj = function() {
        return this.oa ? this.oa.Gj() : -1
    };
    z.e.kf = function() {
        return this.oa ? this.oa.kf() : null
    };
    z.e.Sp = function(a) {
        this.oa && this.oa.Sp(a)
    };
    z.e.Ef = function(a) {
        this.oa && this.oa.Ef(a)
    };
    z.e.Nc = function(a) {
        a && -1 == this.Ta ? this.xb( - 1 < this.wz ? this.wz: 0) : a || this.xb( - 1);
        z.kE.v.Nc.call(this, a)
    };
    z.e.wm = function(a, b) {
        if (this.m() && a) {
            var c = a.parentNode;
            z.vo(c, this.M.U() + "-cell-selected", b);
            z.dj(c, "selected", b)
        }
    };
    z.x(lE, Wp);
    z.x(z.qE, nz);
    z.la(z.qE);
    z.qE.prototype.B = function(a) {
        return a.K().B("DIV", this.Zf(a).join(" ") + " goog-inline-block", " ")
    };
    z.qE.prototype.w = function(a, b) {
        b = z.qE.v.w.call(this, a, b);
        z.ij(b, "goog-inline-block");
        return b
    };
    z.qE.prototype.U = function() {
        return "goog-toolbar-separator"
    };
    z.x(z.rE, Wr);
    z.la(z.rE);
    z.rE.prototype.Zn = function(a) {
        return "HR" == a.tagName ? new z.oz(z.qE.ba()) : z.rE.v.Zn.call(this, a)
    };
    z.rE.prototype.U = function() {
        return "goog-toolbar"
    };
    z.rE.prototype.HF = function() {
        return z.AF
    };
    z.x(sE, uz);
    z.la(sE);
    sE.prototype.U = function() {
        return "goog-toolbar-button"
    };
    z.x(z.tE, z.cq);
    z.Up("goog-toolbar-button", 
    function() {
        return new z.tE(null)
    });
    z.x(uE, wz);
    z.la(uE);
    uE.prototype.createCaption = function(a, b) {
        return uE.v.createCaption.call(this, vE(a, b), b)
    };
    uE.prototype.Ea = function(a, b) {
        a && wE(this.S(a), b)
    };
    uE.prototype.He = function(a) {
        var b = a.m();
        this.Ea(b, a.Y());
        z.ij(b, "goog-color-menu-button");
        uE.v.He.call(this, a)
    };
    z.x(xE, z.kE);
    xE.prototype.It = null;
    xE.prototype.ft = null;
    xE.prototype.ey = function() {
        var a = this.kf();
        return a ? (a = Go(a, "background-color"), zE(a)) : null
    };
    xE.prototype.Rp = function(a) {
        a = zE(a);
        this.It || (this.It = z.nb(this.yr, 
        function(a) {
            return zE(a)
        }));
        this.Sp(a ? z.lb(this.It, a) : -1)
    };
    z.x(AE, z.yz);
    var CE = {
        HX: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
        bY: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
        YX: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
    };
    z.e = AE.prototype;
    z.e.ey = function() {
        return this.Y()
    };
    z.e.Rp = function(a) {
        this.Ea(a)
    };
    z.e.Ea = function(a) {
        for (var b = 0, c; c = this.li(b); b++)"function" == typeof c.Rp && c.Rp(a);
        AE.v.Ea.call(this, a)
    };
    z.e.mo = function(a) {
        "function" == typeof a.target.ey ? this.Ea(a.target.ey()) : "none" == a.target.Y() && this.Ea(null);
        AE.v.mo.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.Cb = function(a, b) {
        a && 0 == this.Hl() && (this.yh(BE(this.K())), this.Ea(this.Y()));
        AE.v.Cb.call(this, a, b)
    };
    z.Up("goog-color-menu-button", 
    function() {
        return new AE(null)
    });
    z.x(DE, wz);
    z.la(DE);
    DE.prototype.U = function() {
        return "goog-toolbar-menu-button"
    };
    z.x(EE, DE);
    z.la(EE);
    EE.prototype.createCaption = function(a, b) {
        return xz(vE(a, b), this.U(), b)
    };
    EE.prototype.Ea = function(a, b) {
        a && wE(this.S(a), b)
    };
    EE.prototype.He = function(a) {
        this.Ea(a.m(), a.Y());
        z.ij(a.m(), "goog-toolbar-color-menu-button");
        EE.v.He.call(this, a)
    };
    z.x(FE, AE);
    z.Up("goog-toolbar-color-menu-button", 
    function() {
        return new FE(null)
    });
    z.x(GE, z.yz);
    z.Up("goog-toolbar-menu-button", 
    function() {
        return new GE(null)
    });
    z.x(HE, z.yz);
    z.e = HE.prototype;
    z.e.oa = null;
    z.e.C = function() {
        HE.v.C.call(this);
        JE(this);
        ME(this)
    };
    z.e.Z = function(a) {
        HE.v.Z.call(this, a); (a = this.Vg()) ? IE(this, a) : this.kf() || this.Sp(0)
    };
    z.e.D = function() {
        HE.v.D.call(this);
        this.oa && (this.oa.H(), this.oa = null);
        this.cx = null
    };
    z.e.mo = function(a) {
        this.Ef(a.target);
        HE.v.mo.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.Mj = function() {
        var a = this.kf();
        HE.v.Ea.call(this, a && a.Y());
        JE(this)
    };
    z.e.yh = function(a) {
        var b = HE.v.yh.call(this, a);
        a != b && (this.oa && this.oa.clear(), a && (this.oa ? z.ch(a, 
        function(a) {
            LE(a);
            this.oa.Fa(a)
        },
        this) : KE(this, a)));
        return b
    };
    z.e.Fa = function(a) {
        LE(a);
        HE.v.Fa.call(this, a);
        this.oa ? this.oa.Fa(a) : KE(this, this.Ya());
        NE(this)
    };
    z.e.ej = function(a, b) {
        LE(a);
        HE.v.ej.call(this, a, b);
        this.oa ? this.oa.ej(a, b) : KE(this, this.Ya())
    };
    z.e.removeItem = function(a) {
        HE.v.removeItem.call(this, a);
        this.oa && this.oa.removeItem(a)
    };
    z.e.Ef = function(a) {
        if (this.oa) {
            var b = this.kf();
            this.oa.Ef(a);
            a != b && this.dispatchEvent("change")
        }
    };
    z.e.Sp = function(a) {
        this.oa && this.Ef(this.oa.li(a))
    };
    z.e.Ea = function(a) {
        if (null != a && this.oa) for (var b = 0, c; c = this.oa.li(b); b++) if (c && "function" == typeof c.Y && c.Y() == a) {
            this.Ef(c);
            return
        }
        this.Ef(null)
    };
    z.e.Y = function() {
        var a = this.kf();
        return a ? a.Y() : null
    };
    z.e.kf = function() {
        return this.oa ? this.oa.kf() : null
    };
    z.e.Gj = function() {
        return this.oa ? this.oa.Gj() : -1
    };
    z.e.Cb = function(a, b) {
        HE.v.Cb.call(this, a, b);
        this.ub() ? this.Ya().xb(this.Gj()) : NE(this)
    };
    z.Up("goog-select", 
    function() {
        return new HE(null)
    });
    z.x(PE, HE);
    z.Up("goog-toolbar-select", 
    function() {
        return new PE(null)
    });
    var UE = [10, 10, 13, 16, 18, 24, 32, 48];
    var yG,
    zG,
    dF,
    cF,
    AG,
    BG,
    CG,
    DG,
    TE,
    EG,
    FG,
    GG,
    HG,
    WE,
    IG,
    JG,
    KG,
    LG,
    MG,
    NG,
    OG,
    PG,
    QG,
    RG,
    SG,
    TG,
    UG,
    VG,
    WG,
    XG,
    YG,
    ZG,
    $G,
    aH,
    bH,
    cH,
    dH,
    eH,
    fH,
    gH,
    hH,
    iH,
    jH,
    kH,
    mH,
    nH,
    oH;
    for (yG = z.u("Normal"), zG = z.u("Normal / serif"), dF = [{
        caption: yG,
        value: "arial,sans-serif"
    },
    {
        caption: zG,
        value: "times new roman,serif"
    },
    {
        caption: "Courier New",
        value: "courier new,monospace"
    },
    {
        caption: "Georgia",
        value: "georgia,serif"
    },
    {
        caption: "Trebuchet",
        value: "trebuchet ms,sans-serif"
    },
    {
        caption: "Verdana",
        value: "verdana,sans-serif"
    }], cF = {
        ja: [{
            caption: "ＭＳ Ｐゴシック",
            value: "ms pgothic,sans-serif"
        },
        {
            caption: "ＭＳ Ｐ明朝",
            value: "ms pmincho,serif"
        },
        {
            caption: "ＭＳ ゴシック",
            value: "ms gothic,monospace"
        }],
        ko: [{
            caption: "굴림",
            value: "gulim,sans-serif"
        },
        {
            caption: "바탕",
            value: "batang,serif"
        },
        {
            caption: "굴림체",
            value: "gulimche,monospace"
        }],
        "zh-tw": [{
            caption: "新細明體",
            value: "pmingliu,serif"
        },
        {
            caption: "細明體",
            value: "mingliu,serif"
        }],
        "zh-cn": [{
            caption: "宋体",
            value: "simsun,serif"
        },
        {
            caption: "黑体",
            value: "simhei,sans-serif"
        },
        {
            caption: "MS Song",
            value: "ms song,monospace"
        }]
    },
    AG = z.u("Small"), BG = z.u("Normal"), CG = z.u("Large"), DG = z.u("Huge"), TE = [{
        caption: AG,
        value: 1
    },
    {
        caption: BG,
        value: 2
    },
    {
        caption: CG,
        value: 4
    },
    {
        caption: DG,
        value: 6
    }], EG = z.u("Heading"), FG = z.u("Subheading"), GG = z.u("Minor heading"), 
    HG = z.u("Normal"), WE = [{
        caption: EG,
        Aa: "H2"
    },
    {
        caption: FG,
        Aa: "H3"
    },
    {
        caption: GG,
        Aa: "H4"
    },
    {
        caption: HG,
        Aa: "P"
    }], IG = z.u("Format"), JG = z.u("Format"), KG = z.u("Undo"), LG = z.u("Redo"), MG = z.u("Font"), NG = z.u("Font size"), OG = z.u("Text color"), PG = z.u("Bold"), QG = z.u("Italic"), RG = z.u("Underline"), SG = z.u("Text background color"), TG = z.u("Add or remove link"), UG = z.u("Numbered list"), VG = z.u("Bullet list"), WG = z.u("Decrease indent"), XG = z.u("Increase indent"), YG = z.u("Align left"), ZG = z.u("Align center"), $G = z.u("Align right"), 
    aH = z.u("Justify"), bH = z.u("Remove formatting"), cH = z.u("Insert image"), dH = z.u("Strikethrough"), eH = z.u("Left-to-right"), fH = z.u("Right-to-left"), gH = z.u("Quote"), hH = z.u("Edit HTML source"), iH = z.u("Subscript"), jH = z.u("Superscript"), kH = z.u("Edit HTML"), z.lH = {},
    mH = [{
        Aa: "+undo",
        R: KG,
        Pa: "tr-icon tr-undo",
        factory: eF,
        nb: !0
    },
    {
        Aa: "+redo",
        R: LG,
        Pa: "tr-icon tr-redo",
        factory: eF,
        nb: !0
    },
    {
        Aa: "+fontName",
        R: MG,
        Pa: "tr-fontName",
        factory: function(a, b, c, d, f, g) {
            var h = $E(a, b, c, d, f, g);
            bF(h);
            IE(h, yG);
            z.ij(h.Ya().S(), "goog-menu-noaccel");
            h.Si = function(a) {
                var b = null;
                a && 0 < a.length && (b = z.$g(h.Ya(), QE(a)));
                b != h.kf() && h.Ef(b)
            };
            return h
        },
        nb: !0
    },
    {
        Aa: "+fontSize",
        R: NG,
        Pa: "tr-fontSize",
        factory: function(a, b, c, d, f, g) {
            var h = $E(a, b, c, d, f, g);
            SE(h);
            IE(h, BG);
            z.ij(h.Ya().S(), "goog-menu-noaccel");
            h.Si = function(a) {
                var b;
                if (b = z.pa(a)) b = a.match(mF),
                b = "px" == (b && b[0] || null);
                b && (b = UE, a = Array.prototype.lastIndexOf.call(b, (0, window.parseInt)(a, 10), b.length - 1));
                a = 0 < a ? a: null;
                a != h.Y() && h.Ea(a)
            };
            return h
        },
        nb: !0
    },
    {
        Aa: "+bold",
        R: PG,
        Pa: "tr-icon tr-bold",
        nb: !0
    },
    {
        Aa: "+italic",
        R: QG,
        Pa: "tr-icon tr-italic",
        nb: !0
    },
    {
        Aa: "+underline",
        R: RG,
        Pa: "tr-icon tr-underline",
        nb: !0
    },
    {
        Aa: "+foreColor",
        R: OG,
        Pa: "tr-icon tr-foreColor",
        factory: function(a, b, c, d, f, g) {
            a = aF(a, b, c, d, f, g);
            a.Rp("#000");
            a.Si = z.Ba(fF, a);
            return a
        },
        nb: !0
    },
    {
        Aa: "+backColor",
        R: SG,
        Pa: "tr-icon tr-backColor",
        factory: function(a, b, c, d, f, g) {
            a = aF(a, b, c, d, f, g);
            a.Rp("#FFF");
            a.Si = z.Ba(fF, a);
            return a
        },
        nb: !0
    },
    {
        Aa: "+link",
        R: TG,
        caption: wG,
        Pa: "tr-link",
        nb: !0
    },
    {
        Aa: "+insertOrderedList",
        R: UG,
        Pa: "tr-icon tr-insertOrderedList",
        nb: !0
    },
    {
        Aa: "+insertUnorderedList",
        R: VG,
        Pa: "tr-icon tr-insertUnorderedList",
        nb: !0
    },
    {
        Aa: "+outdent",
        R: WG,
        Pa: "tr-icon tr-outdent",
        factory: z.XE
    },
    {
        Aa: "+indent",
        R: XG,
        Pa: "tr-icon tr-indent",
        factory: z.XE
    },
    {
        Aa: "+justifyLeft",
        R: YG,
        Pa: "tr-icon tr-justifyLeft",
        nb: !0
    },
    {
        Aa: "+justifyCenter",
        R: ZG,
        Pa: "tr-icon tr-justifyCenter",
        nb: !0
    },
    {
        Aa: "+justifyRight",
        R: $G,
        Pa: "tr-icon tr-justifyRight",
        nb: !0
    },
    {
        Aa: "+justifyFull",
        R: aH,
        Pa: "tr-icon tr-justifyFull",
        nb: !0
    },
    {
        Aa: "+removeFormat",
        R: bH,
        Pa: "tr-icon tr-removeFormat",
        factory: z.XE
    },
    {
        Aa: "image",
        R: cH,
        Pa: "tr-icon tr-image",
        factory: z.XE
    },
    {
        Aa: "+strikeThrough",
        R: dH,
        Pa: "tr-icon tr-strikeThrough",
        nb: !0
    },
    {
        Aa: "+subscript",
        R: iH,
        Pa: "tr-icon tr-subscript",
        nb: !0
    },
    {
        Aa: "+superscript",
        R: jH,
        Pa: "tr-icon tr-superscript",
        nb: !0
    },
    {
        Aa: "ltr",
        R: eH,
        Pa: "tr-icon tr-ltr",
        nb: !0
    },
    {
        Aa: "rtl",
        R: fH,
        Pa: "tr-icon tr-rtl",
        factory: function(a, b, c, d, f, g) {
            var h = z.ZE(a, b, c, d, f, g);
            h.Si = function(a) {
                a = !!a;
                z.vo(h.getParent().m(), "tr-rtl-mode", a);
                h.Lc(a)
            };
            return h
        },
        nb: !0
    },
    {
        Aa: "+BLOCKQUOTE",
        R: gH,
        Pa: "tr-icon tr-BLOCKQUOTE",
        nb: !0
    },
    {
        Aa: "+formatBlock",
        R: IG,
        caption: JG,
        Pa: "tr-formatBlock",
        factory: function(a, b, c, d, f, g) {
            var h = $E(a, b, c, d, f, g);
            VE(h);
            IE(h, HG);
            z.ij(h.Ya().S(), "goog-menu-noaccel");
            h.Si = function(a) {
                a = a && 0 < a.length ? a: null;
                a != h.Y() && h.Ea(a)
            };
            return h
        },
        nb: !0
    },
    {
        Aa: "editHtml",
        R: hH,
        caption: kH,
        Pa: "tr-editHtml",
        factory: z.XE
    }], nH = 0, oH; oH = mH[nH]; nH++) z.lH[oH.Aa] = oH;
    mH = null;
    var pH = {};
    pH.track = Ir;
    z.x(z.gF, z.xA);
    z.Ca(z.gF.prototype, pH);
    z.gF.prototype.defaults = {
        Hk: null,
        title: "Distraction Free Mode",
        fN: "back",
        nV: "publish",
        Wn: "zu-editing-distraction-free",
        eW: "sticky-goog-scrollfloater",
        BW: "zm-editable-toolbar-container"
    };
    z.gF.prototype.md = z.ib("FullScreenPlugin");
    z.lH.toggleFullScreen = {
        Aa: "toggleFullScreen",
        R: "写作模式",
        Pa: "tr-icon tr-max",
        factory: z.XE
    };
    z.e = z.gF.prototype;
    z.e.Ke = z.Ba(z.Zn, {
        gY: "toggleFullScreen",
        AX: "enterFullScreen",
        BX: "exitFullScreen"
    });
    z.e.D = function() {
        this.ga.H();
        z.P(this.h);
        this.J = this.lq = this.rc = this.Eb = this.h = null;
        z.gF.v.D.call(this)
    };
    z.e.yw = function() {
        var a = this.J,
        b = window.document.createElement("div");
        b.id = "zu-distraction-free-editor";
        b.innerHTML = '\x3cdiv class\x3d"header"\x3e\x3cdiv class\x3d"wrapper"\x3e\x3ch1 class\x3d"title"\x3e' + a.title + '\x3c/h1\x3e\x3ca href\x3d"#" class\x3d"' + a.fN + '" name\x3d"return"\x3e返回\x3c/a\x3e\x3ca href\x3d"#" class\x3d"' + a.nV + '" name\x3d"save"\x3e发布\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"tools"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"content" class\x3d"grid"\x3e\x3c/div\x3e';
        window.document.body.appendChild(b);
        this.ga.g(z.N("back", b), "click", 
        function(a) {
            a.preventDefault();
            kF(this)
        });
        this.ga.g(z.N("publish", b), "click", 
        function(a) {
            a.preventDefault();
            this.dispatchEvent("save") && kF(this)
        });
        this.h = b;
        this.rc = z.N("content", b);
        this.lq = z.O("div", {
            className: "toolbar-info"
        });
        this.J.Hk || (this.J.Hk = this.F.Ha)
    };
    z.e.ff = function(a) {
        this.h || this.yw();
        switch (a) {
        case "enterFullScreen":
            hF(this);
            break;
        case "exitFullScreen":
            kF(this);
            break;
        case "toggleFullScreen":
            z.W.has(window.document.body, this.J.Wn) ? kF(this) : hF(this)
        }
    };
    z.e.tI = function() {
        z.W.has(window.document.body, this.J.Wn) ? kF(this) : "writing" === window.location.hash.slice(1) && hF(this)
    };
    z.e.kp = function(a) {
        27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && kF(this)
    };
    z.e.RJ = function(a) {
        z.W[a ? "add": "remove"](this.Eb, this.J.eW)
    };
    z.x(z.lF, z.R);
    z.lF.prototype.C = function() {
        this.o().g(this.h, "click", this.Qa)
    };
    z.lF.prototype.Qa = function(a) {
        var b = z.Fr(this.h, a.target);
        this.xn && this.xn(b);
        b && b.name && "focus" === b.name && (0, z.eG)(b, this.Qx, 
        function() {
            b.getAttribute("data-followme") && (z.W.has(b, "zg-btn-follow") ? b.setAttribute("data-tip", "s$b$对方已关注你") : b.setAttribute("data-tip", "s$b$已互相关注"))
        },
        this.Px, {
            BY: "question" === this.Qx ? "关注问题": null
        })
    };
    z.lF.prototype.eB = z.aa(43);
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/common.e69719af.js
