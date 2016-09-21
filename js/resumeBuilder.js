
        (function() {
            if (window.jstiming) {
                window.jstiming.a = {};
                window.jstiming.b = 1;
                var f = function(b, a, d) {
                        var c = b.t[a],
                            e = b.t.start;
                        if (c && (e || d)) return c = b.t[a][0], void 0 != d ? e = d : e = e[0], Math.round(c - e)
                    },
                    m = function(b, a, d) {
                        var c = "";
                        window.jstiming.srt && (c += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                        window.jstiming.pt && (c += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                        try {
                            window.external && window.external.tran ? c += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? c += "&tran=" + window.gtbExternal.tran() :
                                window.chrome && window.chrome.csi && (c += "&tran=" + window.chrome.csi().tran)
                        } catch (t) {}
                        var e = window.chrome;
                        if (e && (e = e.loadTimes)) {
                            e().wasFetchedViaSpdy && (c += "&p=s");
                            if (e().wasNpnNegotiated) {
                                var c = c + "&npn=1",
                                    g = e().npnNegotiatedProtocol;
                                g && (c += "&npnv=" + (encodeURIComponent || escape)(g))
                            }
                            e().wasAlternateProtocolAvailable && (c += "&apa=1")
                        }
                        var k = b.t,
                            r = k.start,
                            e = [],
                            g = [],
                            h;
                        for (h in k)
                            if ("start" != h && 0 != h.indexOf("_")) {
                                var l = k[h][1];
                                l ? k[l] && g.push(h + "." + f(b, h, k[l][0])) : r && e.push(h + "." + f(b, h))
                            }
                        delete k.start;
                       };
                       
                window.jstiming.getReportUri = m;
                var p = function(b, a, d) {
                    b = m(b, a, d);
                    if (!b) return "";
                    a = new Image;
                    var c = window.jstiming.b++;
                    window.jstiming.a[c] = a;
                    a.onload = a.onerror = function() {
                        window.jstiming && delete window.jstiming.a[c]
                    };
                    a.src = b;
                    a = null;
                    return b
                };
                window.jstiming.report =
                    function(b, a, d) {
                        if ("prerender" == document.webkitVisibilityState) {
                            var c = !1,
                                e = function() {
                                    if (!c) {
                                        a ? a.prerender = "1" : a = {
                                            prerender: "1"
                                        };
                                        var g;
                                        "prerender" == document.webkitVisibilityState ? g = !1 : (p(b, a, d), g = !0);
                                        g && (c = !0, document.removeEventListener("webkitvisibilitychange", e, !1))
                                    }
                                };
                            document.addEventListener("webkitvisibilitychange", e, !1);
                            return ""
                        }
                        return p(b, a, d)
                    };
                window.jstiming.reportDone = function(b) {
                    if (window.jstiming.b <= (b || 1)) return !1;
                    for (var a in window.jstiming.a) return !1;
                    return !0
                };
                var q = function(b, a,
                    d, c) {
                    return 0 < d ? (c ? b.tick(a, c, d) : b.tick(a, "", d), !0) : !1
                };
                window.jstiming.getNavTiming = function(b) {
                    if (window.performance && window.performance.timing) {
                        var a = window.performance.timing;
                        q(b, "_dns", a.domainLookupStart) && q(b, "dns_", a.domainLookupEnd, "_dns");
                        q(b, "_con", a.connectStart) && q(b, "con_", a.connectEnd, "_con");
                        q(b, "_req", a.requestStart) && q(b, "req_", a.responseStart, "_req");
                        q(b, "_rcv", a.responseStart) && q(b, "rcv_", a.responseEnd, "_rcv");
                        if (q(b, "_ns", a.navigationStart)) {
                            q(b, "ntsrt_", a.responseStart, "_ns");
                            q(b, "nsfs_", a.fetchStart, "_ns");
                            var d = !1;
                            try {
                                d = window.external && window.external.startE
                            } catch (c) {}!d && window.chrome && window.chrome.csi && (d = Math.floor(window.chrome.csi().startE));
                            d && (q(b, "_se", d), q(b, "sens_", a.navigationStart, "_se"));
                            q(b, "ntplt0_", a.loadEventStart, "_ns");
                            q(b, "ntplt1_", a.loadEventEnd, "_ns")
                        }
                    }
                }
            };
        })()
    
 
    
        (function() {
            var k = this;

            function l(a) {
                var c = typeof a;
                if ("object" == c)
                    if (a) {
                        if (a instanceof Array) return "array";
                        if (a instanceof Object) return c;
                        var b = Object.prototype.toString.call(a);
                        if ("[object Window]" == b) return "object";
                        if ("[object Array]" == b || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                        if ("[object Function]" == b || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                    } else return "null";
                else if ("function" ==
                    c && "undefined" == typeof a.call) return "object";
                return c
            }

            function aa(a, c) {
                var b = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var c = b.slice();
                    c.push.apply(c, arguments);
                    return a.apply(this, c)
                }
            }

            function m(a, c) {
                function b() {}
                b.prototype = c.prototype;
                a.u = c.prototype;
                a.prototype = new b;
                a.prototype.constructor = a;
                a.w = function(a, b, f) {
                    for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                    return c.prototype[b].apply(a, g)
                }
            };

            function n() {
                this.b = this.b;
                this.a = this.a
            }
            n.prototype.b = !1;
            n.prototype.m = function() {
                this.b || (this.b = !0, this.g())
            };
            n.prototype.g = function() {
                if (this.a)
                    for (; this.a.length;) this.a.shift()()
            };

            function ba(a) {
                a && "function" == typeof a.m && a.m()
            };
            var p = String.prototype.trim ? function(a) {
                    return a.trim()
                } : function(a) {
                    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                },
                ca = /&/g,
                da = /</g,
                ea = />/g,
                fa = /"/g,
                ga = /'/g,
                ha = /\x00/g,
                ia = /[\x00&<>"']/;

            function q(a, c) {
                return a < c ? -1 : a > c ? 1 : 0
            };
            var ja = Array.prototype.indexOf ? function(a, c, b) {
                return Array.prototype.indexOf.call(a, c, b)
            } : function(a, c, b) {
                b = null == b ? 0 : 0 > b ? Math.max(0, a.length + b) : b;
                if ("string" == typeof a) return "string" == typeof c && 1 == c.length ? a.indexOf(c, b) : -1;
                for (; b < a.length; b++)
                    if (b in a && a[b] === c) return b;
                return -1
            };

            function ka(a, c, b) {
                for (var d in a) c.call(b, a[d], d, a)
            };
            var t;
            a: {
                var u = k.navigator;
                if (u) {
                    var v = u.userAgent;
                    if (v) {
                        t = v;
                        break a
                    }
                }
                t = ""
            }

            function w(a) {
                return -1 != t.indexOf(a)
            };

            function x() {
                this.a = "";
                this.b = y
            }
            x.prototype.s = !0;
            x.prototype.o = function() {
                return this.a
            };

            function z(a) {
                return a instanceof x && a.constructor === x && a.b === y ? a.a : "type_error:SafeUrl"
            }
            var la = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;

            function A(a) {
                if (a instanceof x) return a;
                a = a.s ? a.o() : String(a);
                la.test(a) || (a = "about:invalid#zClosurez");
                return ma(a)
            }
            var y = {};

            function ma(a) {
                var c = new x;
                c.a = a;
                return c
            }
            ma("about:blank");

            function B() {
                this.a = "";
                this.b = na
            }
            B.prototype.s = !0;
            B.prototype.o = function() {
                return this.a
            };
            var na = {};

            function C(a) {
                var c = new B;
                c.a = a;
                return c
            }
            C("<!DOCTYPE html>");
            C("");
            C("<br>");

            function E(a) {
                E[" "](a);
                return a
            }
            E[" "] = function() {};

            function oa(a, c) {
                var b = pa;
                return Object.prototype.hasOwnProperty.call(b, a) ? b[a] : b[a] = c(a)
            };
            var qa = w("Opera"),
                F = w("Trident") || w("MSIE"),
                ra = w("Edge"),
                sa = ra || F,
                G = w("Gecko") && !(-1 != t.toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge"),
                H = -1 != t.toLowerCase().indexOf("webkit") && !w("Edge"),
                ta = w("Macintosh");

            function ua() {
                var a = k.document;
                return a ? a.documentMode : void 0
            }
            var I;
            a: {
                var J = "",
                    K = function() {
                        var a = t;
                        if (G) return /rv\:([^\);]+)(\)|;)/.exec(a);
                        if (ra) return /Edge\/([\d\.]+)/.exec(a);
                        if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (H) return /WebKit\/(\S+)/.exec(a);
                        if (qa) return /(?:Version)[ \/]?(\S+)/.exec(a)
                    }();K && (J = K ? K[1] : "");
                if (F) {
                    var L = ua();
                    if (null != L && L > parseFloat(J)) {
                        I = String(L);
                        break a
                    }
                }
                I = J
            }
            var va = I,
                pa = {};

            function M(a) {
                return oa(a, function() {
                    for (var c = 0, b = p(String(va)).split("."), d = p(String(a)).split("."), e = Math.max(b.length, d.length), f = 0; 0 == c && f < e; f++) {
                        var g = b[f] || "",
                            h = d[f] || "";
                        do {
                            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                            if (0 == g[0].length && 0 == h[0].length) break;
                            c = q(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || q(0 == g[2].length, 0 == h[2].length) || q(g[2], h[2]);
                            g = g[3];
                            h = h[3]
                        } while (0 == c)
                    }
                    return 0 <= c
                })
            }
            var wa = k.document,
                N = wa && F ? ua() || ("CSS1Compat" == wa.compatMode ? parseInt(va, 10) : 5) : void 0;
            !G && !F || F && 9 <= Number(N) || G && M("1.9.1");
            F && M("9");
            var xa = !F || 9 <= Number(N),
                ya = !F || 9 <= Number(N),
                za = F && !M("9");
            !H || M("528");
            G && M("1.9b") || F && M("8") || qa && M("9.5") || H && M("528");
            G && !M("8") || F && M("9");

            function O(a, c) {
                this.i = a;
                this.a = this.target = c;
                this.f = !1
            }
            O.prototype.c = function() {
                this.f = !0
            };

            function P(a, c) {
                O.call(this, a ? a.type : "");
                this.a = this.target = null;
                this.g = !1;
                this.b = null;
                if (a) {
                    this.i = a.type;
                    this.target = a.target || a.srcElement;
                    this.a = c;
                    if ((c = a.relatedTarget) && G) try {
                        E(c.nodeName)
                    } catch (b) {}
                    this.g = a.ctrlKey;
                    this.b = a;
                    a.defaultPrevented && this.c()
                }
            }
            m(P, O);
            var Aa = [1, 4, 2];
            P.prototype.c = function() {
                P.u.c.call(this);
                var a = this.b;
                if (a.preventDefault) a.preventDefault();
                else if (a.returnValue = !1, za) try {
                    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
                } catch (c) {}
            };
            var Ba = "closure_listenable_" + (1E6 * Math.random() | 0),
                Ca = 0;

            function Da(a, c, b, d, e) {
                this.listener = a;
                this.a = null;
                this.src = c;
                this.b = b;
                this.l = !!d;
                this.c = e;
                this.v = ++Ca;
                this.h = this.j = !1
            }

            function Ea(a) {
                a.h = !0;
                a.listener = null;
                a.a = null;
                a.src = null;
                a.c = null
            };

            function Fa(a) {
                this.src = a;
                this.a = {};
                this.b = 0
            };
            var Q = "closure_lm_" + (1E6 * Math.random() | 0),
                R = {},
                Ga = 0;

            function Ha(a, c, b, d, e) {
                if ("array" == l(c)) {
                    for (var f = 0; f < c.length; f++) Ha(a, c[f], b, d, e);
                    return null
                }
                b = Ia(b);
                if (a && a[Ba]) a = Ja(a, c, b, d, e);
                else {
                    f = b;
                    if (!c) throw Error("Invalid event type");
                    b = !!d;
                    var g = T(a);
                    g || (a[Q] = g = new Fa(a));
                    var h = g,
                        S = c.toString(),
                        g = h.a[S];
                    g || (g = h.a[S] = [], h.b++);
                    var r;
                    b: {
                        for (r = 0; r < g.length; ++r) {
                            var D = g[r];
                            if (!D.h && D.listener == f && D.l == !!d && D.c == e) break b
                        }
                        r = -1
                    } - 1 < r ? (d = g[r], d.j = !1) : (d = new Da(f, h.src, S, !!d, e), d.j = !1, g.push(d));
                    if (!d.a) {
                        e = Ka();
                        d.a = e;
                        e.src = a;
                        e.listener = d;
                        if (a.addEventListener) a.addEventListener(c.toString(),
                            e, b);
                        else if (a.attachEvent) a.attachEvent(La(c.toString()), e);
                        else throw Error("addEventListener and attachEvent are unavailable.");
                        Ga++
                    }
                    a = d
                }
                return a
            }

            function Ka() {
                var a = Ma,
                    c = ya ? function(b) {
                        return a.call(c.src, c.listener, b)
                    } : function(b) {
                        b = a.call(c.src, c.listener, b);
                        if (!b) return b
                    };
                return c
            }

            function Na(a) {
                if ("number" != typeof a && a && !a.h) {
                    var c = a.src;
                    if (c && c[Ba]) c.a(a);
                    else {
                        var b = a.b,
                            d = a.a;
                        c.removeEventListener ? c.removeEventListener(b, d, a.l) : c.detachEvent && c.detachEvent(La(b), d);
                        Ga--;
                        if (b = T(c)) {
                            var d = a.b,
                                e;
                            if (e = d in b.a) {
                                e = b.a[d];
                                var f = ja(e, a),
                                    g;
                                (g = 0 <= f) && Array.prototype.splice.call(e, f, 1);
                                e = g
                            }
                            e && (Ea(a), 0 == b.a[d].length && (delete b.a[d], b.b--));
                            0 == b.b && (b.src = null, c[Q] = null)
                        } else Ea(a)
                    }
                }
            }

            function La(a) {
                return a in R ? R[a] : R[a] = "on" + a
            }

            function Oa(a, c, b, d) {
                var e = !0;
                if (a = T(a))
                    if (c = a.a[c.toString()])
                        for (c = c.concat(), a = 0; a < c.length; a++) {
                            var f = c[a];
                            f && f.l == b && !f.h && (f = Pa(f, d), e = e && !1 !== f)
                        }
                    return e
            }

            function Pa(a, c) {
                var b = a.listener,
                    d = a.c || a.src;
                a.j && Na(a);
                return b.call(d, c)
            }

            function Ma(a, c) {
                if (a.h) return !0;
                if (!ya) {
                    if (!c) a: {
                        c = ["window", "event"];
                        for (var b = k, d; d = c.shift();)
                            if (null != b[d]) b = b[d];
                            else {
                                c = null;
                                break a
                            }
                        c = b
                    }
                    d = c;
                    c = new P(d, this);
                    b = !0;
                    if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                        a: {
                            var e = !1;
                            if (0 == d.keyCode) try {
                                d.keyCode = -1;
                                break a
                            } catch (g) {
                                e = !0
                            }
                            if (e || void 0 == d.returnValue) d.returnValue = !0
                        }
                        d = [];
                        for (e = c.a; e; e = e.parentNode) d.push(e);a = a.b;
                        for (e = d.length - 1; 0 <= e; e--) {
                            c.a = d[e];
                            var f = Oa(d[e], a, !0, c),
                                b = b && f
                        }
                        for (e = 0; e < d.length; e++) c.a = d[e],
                        f = Oa(d[e], a, !1, c),
                        b = b && f
                    }
                    return b
                }
                return Pa(a,
                    new P(c, this))
            }

            function T(a) {
                a = a[Q];
                return a instanceof Fa ? a : null
            }
            var U = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

            function Ia(a) {
                if ("function" == l(a)) return a;
                a[U] || (a[U] = function(c) {
                    return a.handleEvent(c)
                });
                return a[U]
            };

            function V(a) {
                n.call(this);
                this.f = a;
                this.c = {}
            }
            m(V, n);
            var Qa = [];

            function Ja(a, c, b, d, e) {
                "array" != l(b) && (b && (Qa[0] = b.toString()), b = Qa);
                for (var f = 0; f < b.length; f++) {
                    var g = Ha(c, b[f], d || a.handleEvent, e || !1, a.f || a);
                    if (!g) break;
                    a.c[g.v] = g
                }
                return a
            }

            function Ra(a) {
                ka(a.c, function(a, b) {
                    this.c.hasOwnProperty(b) && Na(a)
                }, a);
                a.c = {}
            }
            V.prototype.g = function() {
                V.u.g.call(this);
                Ra(this)
            };
            V.prototype.handleEvent = function() {
                throw Error("EventHandler.handleEvent not implemented");
            };
            var Sa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function Ta(a) {
                return a ? decodeURI(a) : a
            }
            var Ua = /#|$/;

            function Va(a, c) {
                var b = a.search(Ua),
                    d;
                a: {
                    d = 0;
                    for (var e = c.length; 0 <= (d = a.indexOf(c, d)) && d < b;) {
                        var f = a.charCodeAt(d - 1);
                        if (38 == f || 63 == f)
                            if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                        d += e + 1
                    }
                    d = -1
                }
                if (0 > d) return null;
                e = a.indexOf("&", d);
                if (0 > e || e > b) e = b;
                d += c.length + 1;
                return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
            };

            function W(a) {
                n.call(this);
                this.c = a || document.body;
                this.f = new V(this);
                a = aa(ba, this.f);
                this.b ? a() : (this.a || (this.a = []), this.a.push(a));
                Ja(this.f, this.c, "click", this.i, void 0)
            }
            m(W, n);
            W.prototype.i = function(a) {
                if ((xa ? 0 == a.b.button : "click" == a.i || a.b.button & Aa[0]) && !(H && ta && a.g) && !a.f)
                    for (var c = a.target; c && c != this.c;) {
                        if (c.tagName && "a" == c.tagName.toLowerCase()) {
                            var b = c.getAttribute("href") || c.getAttributeNS("http://www.w3.org/1999/xlink", "href"),
                                d, e = d = b;
                            try {
                                "www.google.com" == Ta(d.match(Sa)[3] || null) && "/url" == Ta(d.match(Sa)[5] || null) && (e = Va(d, "q") || Va(d, "url"))
                            } catch (h) {}
                            d = e ? e : "";
                            if (b != d) {
                                e = d;
                                b = {
                                    target: "_blank",
                                    noreferrer: !0
                                };
                                c = window;
                                d = e instanceof x ? e : A("undefined" != typeof e.href ?
                                    e.href : String(e));
                                var e = b.target || e.target,
                                    f = [],
                                    g = void 0;
                                for (g in b) switch (g) {
                                    case "width":
                                    case "height":
                                    case "top":
                                    case "left":
                                        f.push(g + "=" + b[g]);
                                        break;
                                    case "target":
                                    case "noreferrer":
                                        break;
                                    default:
                                        f.push(g + "=" + (b[g] ? 1 : 0))
                                }
                                f = f.join(",");
                                (w("iPhone") && !w("iPod") && !w("iPad") || w("iPad") || w("iPod")) && c.navigator && c.navigator.standalone && e && "_self" != e ? (g = f = c.document.createElement("A"), d = d instanceof x ? d : A(d), g.href = z(d), f.setAttribute("target", e), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"),
                                    b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b)) : b.noreferrer ? (c = c.open("", e, f), b = z(d), c && (sa && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, ia.test(b) && (-1 != b.indexOf("&") && (b = b.replace(ca, "&amp;")), -1 != b.indexOf("<") && (b = b.replace(da, "&lt;")), -1 != b.indexOf(">") && (b = b.replace(ea, "&gt;")), -1 != b.indexOf('"') && (b = b.replace(fa, "&quot;")), -1 != b.indexOf("'") && (b = b.replace(ga, "&#39;")), -1 != b.indexOf("\x00") && (b = b.replace(ha, "&#0;"))), b = C('<META HTTP-EQUIV="refresh" content="0; url=' +
                                    b + '">'), c.document.write(b instanceof B && b.constructor === B && b.b === na ? b.a : "type_error:SafeHtml"), c.document.close())) : c.open(z(d), e, f);
                                a.c();
                                break
                            }
                        }
                        c = c.parentNode
                    }
            };

            function Wa(a) {
                new W(a)
            }
            var X = ["DOCS_installLinkReferrerSanitizer"],
                Y = k;
            X[0] in Y || !Y.execScript || Y.execScript("var " + X[0]);
            for (var Z; X.length && (Z = X.shift());) X.length || void 0 === Wa ? Y[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Wa;
        })()

