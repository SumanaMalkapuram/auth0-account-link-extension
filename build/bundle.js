module.exports = function(n) { var t = {};

    function e(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } return e.m = n, e.c = t, e.d = function(n, t, r) { e.o(n, t) || Object.defineProperty(n, t, { configurable: !1, enumerable: !0, get: r }) }, e.r = function(n) { Object.defineProperty(n, "__esModule", { value: !0 }) }, e.n = function(n) { var t = n && n.__esModule ? function() { return n.default } : function() { return n }; return e.d(t, "a", t), t }, e.o = function(n, t) { return Object.prototype.hasOwnProperty.call(n, t) }, e.p = "", e.w = {}, e(e.s = 0) }([function(n, t, e) { "use strict"; var r = e(1),
          o = e(2),
          i = e(10),
          a = e(5),
          s = r.createServer(function(n, t) { return i.info("Starting Account Link Extension - Version:", "2.6.3"), i.info(" > WT_URL:", n("WT_URL")), i.info(" > PUBLIC_WT_URL:", n("PUBLIC_WT_URL")), o(n, t) });
        n.exports = function(n, t, e) { t.x_wt && t.x_wt.ectx && t.x_wt.ectx.PUBLIC_WT_URL || !1 || a.setValue("PUBLIC_WT_URL", r.urlHelpers.getWebtaskUrl(t)), s(n, t, e) } }, function(n, t) { n.exports = require("auth0-extension-hapi-tools@1.3.1") }, function(n, t, e) { "use strict";
        (function(t) { var r = e(3),
            o = e(4),
            i = o.FileStorageContext,
            a = o.WebtaskStorageContext,
            s = e(5),
            c = e(6),
            u = e(10),
            l = e(125).init,
            f = function(n) { n ? (u.error("Hapi initialization failed."), u.error(n)) : u.info("Hapi initialization completed.") };
          n.exports = function(n, e, o) { return s.setProvider(function(t) { return n(t) || Object({ NODE_ENV: "production", CLIENT_VERSION: "2.6.3" })[t] }), l(e ? new a(e, { force: 1 }) : new i(r.join(t, "../data.json"))), c(o || f) } }).call(this, "/") }, function(n, t) { n.exports = require("path") }, function(n, t) { n.exports = require("auth0-extension-tools@1.3.1") }, function(n, t, e) { "use strict"; var r = e(4).config;
        n.exports = r() }, function(n, t, e) { "use strict";
        (function(t) { var r = e(3),
            o = e(7),
            i = e(8),
            a = e(9),
            s = e(5),
            c = e(10),
            u = e(12),
            l = e(180),
            f = e(181);
          n.exports = function(n) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
              d = new o.Server; return d.connection({ host: "localhost", port: s("PORT"), routes: { cors: !0, validate: {}, files: { relativeTo: r.join(t, "../public") } } }), d.register([a, i], function() {}), d.route({ method: "GET", path: "/js/{file*}", config: { auth: !1 }, handler: { directory: { path: r.join(t, "../public/js") } } }), d.route({ method: "GET", path: "/css/{file*}", config: { auth: !1 }, handler: { directory: { path: r.join(t, "../public/css") } } }), d.register([f, e, u], function(t) { c.debug = function() { for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                d.log(["debug"], t.join(" ")) }, c.info = function() { for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                d.log(["info"], t.join(" ")) }, c.error = function() { for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                d.log(["error"], t.join(" ")) }, t && n(t), n(null, d) }), d } }).call(this, "/") }, function(n, t) { n.exports = require("@auth0/hapi@13.5.1") }, function(n, t) { n.exports = require("inert@4.0.1") }, function(n, t) { n.exports = require("hapi-auth-jwt2@7.0.1") }, function(n, t, e) { "use strict"; var r = e(11);
        r.emitErrs = !0; var o = new r.Logger({ transports: [new r.transports.Console({ timestamp: !0, level: "debug", handleExceptions: !0, json: !1, colorize: !0 })], exitOnError: !1 });
        n.exports = o }, function(n, t) { n.exports = require("winston@1.0.0") }, function(n, t, e) { "use strict"; var r = e(13),
          o = e(155),
          i = e(158),
          a = e(159),
          s = e(161),
          c = e(166),
          u = e(168),
          l = e(169),
          f = e(170),
          d = e(175),
          p = e(177),
          h = function(n, t) { return t.route(n(t)) },
          v = function(n, t, e) { h(r, n), h(o, n), h(i, n), h(a, n), h(s, n), h(f, n), h(d, n), h(p, n), h(c, n), h(u, n), h(l, n), e() };
        v.attributes = { name: "routes" }, n.exports = v }, function(n, t, e) { "use strict"; var r = e(14)(e(15)),
          o = e(85).decode,
          i = e(86),
          a = e(5),
          s = e(87),
          c = e(116),
          u = e(10),
          l = e(140),
          f = e(142),
          d = e(143),
          p = e(131).resolveLocale,
          h = e(133).getSettings;
        n.exports = function() { return { method: "GET", path: "/", config: { auth: !1 }, handler: function(n, t) { if (i.isEmpty(n.query)) t.redirect(`${a("PUBLIC_WT_URL")}/admin`);
              else { var e, v = l("production" === a("NODE_ENV")),
                  m = v.tag("link"),
                  g = v.tag(a("CUSTOM_CSS"), !0),
                  y = n.query,
                  b = {};
                y.locale && (b.locale = y.locale), y.color && (b.color = `#${y.color}`), y.title && (b.title = y.title), y.logoPath && (b.logoPath = y.logoPath), (e = y.child_token, new r.default(function(n, t) { try { n(o(e)) } catch (n) { t(n) } })).then(function(e) { var r, o, i;
                  (r = e, o = r.sub, i = r.email, s(i).then(function(n) { return { currentUser: n.find(function(n) { return n.user_id === o }), matchingUsers: n.filter(function(n) { return n.user_id !== o }).sort(function(n, t) { return new Date(n.created_at) - new Date(t.created_at) }) } })).then(function(n) { var r = n.currentUser,
                      o = n.matchingUsers;
                    h().then(function(n) { var i = o[0] && o[0].user_metadata || {},
                        a = "string" == typeof i.locale ? i.locale : n.locale;
                      p(a).then(function(n) { var i = (o.length > 0 ? [o[0].identities[0]] : []).map(function(n) { return n.provider }).map(f),
                          s = d(i, n("or"));
                        t(c({ dynamicSettings: b, stylesheetTag: m, currentUser: r, matchingUsers: o, customCSSTag: g, locale: a, identities: s, params: y, token: e })) }) }) }).catch(function(r) { var o = n.query.state;
                    u.error("An error was encountered: ", r), u.info(`Redirecting to failed link to /continue: ${e.iss}continue?state=${n.query.state}`), t.redirect(`${e.iss}continue?state=${o}`) }) }).catch(function(n) { u.error("An invalid token was provided", n), c({ dynamicSettings: b, stylesheetTag: m, currentUser: null, matchingUsers: [], customCSSTag: g }).then(function(n) { t(n).code(400) }) }) } } } } }, function(n, t) { n.exports = function(n) { return n && n.__esModule ? n : { default: n } } }, function(n, t, e) { n.exports = e(16) }, function(n, t, e) { e(17), e(18), e(62), e(66), e(83), e(84), n.exports = e(26).Promise }, function(n, t) {}, function(n, t, e) { "use strict"; var r = e(19)(!0);
        e(22)(String, "String", function(n) { this._t = String(n), this._i = 0 }, function() { var n, t = this._t,
            e = this._i; return e >= t.length ? { value: void 0, done: !0 } : (n = r(t, e), this._i += n.length, { value: n, done: !1 }) }) }, function(n, t, e) { var r = e(20),
          o = e(21);
        n.exports = function(n) { return function(t, e) { var i, a, s = String(o(t)),
              c = r(e),
              u = s.length; return c < 0 || c >= u ? n ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? n ? s.charAt(c) : i : n ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536 } } }, function(n, t) { var e = Math.ceil,
          r = Math.floor;
        n.exports = function(n) { return isNaN(n = +n) ? 0 : (n > 0 ? r : e)(n) } }, function(n, t) { n.exports = function(n) { if (void 0 == n) throw TypeError("Can't call method on  " + n); return n } }, function(n, t, e) { "use strict"; var r = e(23),
          o = e(24),
          i = e(40),
          a = e(29),
          s = e(41),
          c = e(42),
          u = e(58),
          l = e(60),
          f = e(59)("iterator"),
          d = !([].keys && "next" in [].keys()),
          p = function() { return this };
        n.exports = function(n, t, e, h, v, m, g) { c(e, t, h); var y, b, x, w = function(n) { if (!d && n in S) return S[n]; switch (n) {
                case "keys":
                case "values":
                  return function() { return new e(this, n) } } return function() { return new e(this, n) } },
            k = t + " Iterator",
            _ = "values" == v,
            L = !1,
            S = n.prototype,
            T = S[f] || S["@@iterator"] || v && S[v],
            j = T || w(v),
            E = v ? _ ? w("entries") : j : void 0,
            C = "Array" == t && S.entries || T; if (C && (x = l(C.call(new n))) !== Object.prototype && x.next && (u(x, k, !0), r || "function" == typeof x[f] || a(x, f, p)), _ && T && "values" !== T.name && (L = !0, j = function() { return T.call(this) }), r && !g || !d && !L && S[f] || a(S, f, j), s[t] = j, s[k] = p, v)
            if (y = { values: _ ? j : w("values"), keys: m ? j : w("keys"), entries: E }, g)
              for (b in y) b in S || i(S, b, y[b]);
            else o(o.P + o.F * (d || L), t, y);
          return y } }, function(n, t) { n.exports = !0 }, function(n, t, e) { var r = e(25),
          o = e(26),
          i = e(27),
          a = e(29),
          s = e(39),
          c = function(n, t, e) { var u, l, f, d = n & c.F,
              p = n & c.G,
              h = n & c.S,
              v = n & c.P,
              m = n & c.B,
              g = n & c.W,
              y = p ? o : o[t] || (o[t] = {}),
              b = y.prototype,
              x = p ? r : h ? r[t] : (r[t] || {}).prototype; for (u in p && (e = t), e)(l = !d && x && void 0 !== x[u]) && s(y, u) || (f = l ? x[u] : e[u], y[u] = p && "function" != typeof x[u] ? e[u] : m && l ? i(f, r) : g && x[u] == f ? function(n) { var t = function(t, e, r) { if (this instanceof n) { switch (arguments.length) {
                    case 0:
                      return new n;
                    case 1:
                      return new n(t);
                    case 2:
                      return new n(t, e) } return new n(t, e, r) } return n.apply(this, arguments) }; return t.prototype = n.prototype, t }(f) : v && "function" == typeof f ? i(Function.call, f) : f, v && ((y.virtual || (y.virtual = {}))[u] = f, n & c.R && b && !b[u] && a(b, u, f))) };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, n.exports = c }, function(n, t) { var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e) }, function(n, t) { var e = n.exports = { version: "2.5.5" }; "number" == typeof __e && (__e = e) }, function(n, t, e) { var r = e(28);
        n.exports = function(n, t, e) { if (r(n), void 0 === t) return n; switch (e) {
            case 1:
              return function(e) { return n.call(t, e) };
            case 2:
              return function(e, r) { return n.call(t, e, r) };
            case 3:
              return function(e, r, o) { return n.call(t, e, r, o) } } return function() { return n.apply(t, arguments) } } }, function(n, t) { n.exports = function(n) { if ("function" != typeof n) throw TypeError(n + " is not a function!"); return n } }, function(n, t, e) { var r = e(30),
          o = e(38);
        n.exports = e(34) ? function(n, t, e) { return r.f(n, t, o(1, e)) } : function(n, t, e) { return n[t] = e, n } }, function(n, t, e) { var r = e(31),
          o = e(33),
          i = e(37),
          a = Object.defineProperty;
        t.f = e(34) ? Object.defineProperty : function(n, t, e) { if (r(n), t = i(t, !0), r(e), o) try { return a(n, t, e) } catch (n) {}
          if ("get" in e || "set" in e) throw TypeError("Accessors not supported!"); return "value" in e && (n[t] = e.value), n } }, function(n, t, e) { var r = e(32);
        n.exports = function(n) { if (!r(n)) throw TypeError(n + " is not an object!"); return n } }, function(n, t) { n.exports = function(n) { return "object" == typeof n ? null !== n : "function" == typeof n } }, function(n, t, e) { n.exports = !e(34) && !e(35)(function() { return 7 != Object.defineProperty(e(36)("div"), "a", { get: function() { return 7 } }).a }) }, function(n, t, e) { n.exports = !e(35)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(n, t) { n.exports = function(n) { try { return !!n() } catch (n) { return !0 } } }, function(n, t, e) { var r = e(32),
          o = e(25).document,
          i = r(o) && r(o.createElement);
        n.exports = function(n) { return i ? o.createElement(n) : {} } }, function(n, t, e) { var r = e(32);
        n.exports = function(n, t) { if (!r(n)) return n; var e, o; if (t && "function" == typeof(e = n.toString) && !r(o = e.call(n))) return o; if ("function" == typeof(e = n.valueOf) && !r(o = e.call(n))) return o; if (!t && "function" == typeof(e = n.toString) && !r(o = e.call(n))) return o; throw TypeError("Can't convert object to primitive value") } }, function(n, t) { n.exports = function(n, t) { return { enumerable: !(1 & n), configurable: !(2 & n), writable: !(4 & n), value: t } } }, function(n, t) { var e = {}.hasOwnProperty;
        n.exports = function(n, t) { return e.call(n, t) } }, function(n, t, e) { n.exports = e(29) }, function(n, t) { n.exports = {} }, function(n, t, e) { "use strict"; var r = e(43),
          o = e(38),
          i = e(58),
          a = {};
        e(29)(a, e(59)("iterator"), function() { return this }), n.exports = function(n, t, e) { n.prototype = r(a, { next: o(1, e) }), i(n, t + " Iterator") } }, function(n, t, e) { var r = e(31),
          o = e(44),
          i = e(56),
          a = e(53)("IE_PROTO"),
          s = function() {},
          c = function() { var n, t = e(36)("iframe"),
              r = i.length; for (t.style.display = "none", e(57).appendChild(t), t.src = "javascript:", (n = t.contentWindow.document).open(), n.write("<script>document.F=Object<\/script>"), n.close(), c = n.F; r--;) delete c.prototype[i[r]]; return c() };
        n.exports = Object.create || function(n, t) { var e; return null !== n ? (s.prototype = r(n), e = new s, s.prototype = null, e[a] = n) : e = c(), void 0 === t ? e : o(e, t) } }, function(n, t, e) { var r = e(30),
          o = e(31),
          i = e(45);
        n.exports = e(34) ? Object.defineProperties : function(n, t) { o(n); for (var e, a = i(t), s = a.length, c = 0; s > c;) r.f(n, e = a[c++], t[e]); return n } }, function(n, t, e) { var r = e(46),
          o = e(56);
        n.exports = Object.keys || function(n) { return r(n, o) } }, function(n, t, e) { var r = e(39),
          o = e(47),
          i = e(50)(!1),
          a = e(53)("IE_PROTO");
        n.exports = function(n, t) { var e, s = o(n),
            c = 0,
            u = []; for (e in s) e != a && r(s, e) && u.push(e); for (; t.length > c;) r(s, e = t[c++]) && (~i(u, e) || u.push(e)); return u } }, function(n, t, e) { var r = e(48),
          o = e(21);
        n.exports = function(n) { return r(o(n)) } }, function(n, t, e) { var r = e(49);
        n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) { return "String" == r(n) ? n.split("") : Object(n) } }, function(n, t) { var e = {}.toString;
        n.exports = function(n) { return e.call(n).slice(8, -1) } }, function(n, t, e) { var r = e(47),
          o = e(51),
          i = e(52);
        n.exports = function(n) { return function(t, e, a) { var s, c = r(t),
              u = o(c.length),
              l = i(a, u); if (n && e != e) { for (; u > l;)
                if ((s = c[l++]) != s) return !0 } else
              for (; u > l; l++)
                if ((n || l in c) && c[l] === e) return n || l || 0; return !n && -1 } } }, function(n, t, e) { var r = e(20),
          o = Math.min;
        n.exports = function(n) { return n > 0 ? o(r(n), 9007199254740991) : 0 } }, function(n, t, e) { var r = e(20),
          o = Math.max,
          i = Math.min;
        n.exports = function(n, t) { return (n = r(n)) < 0 ? o(n + t, 0) : i(n, t) } }, function(n, t, e) { var r = e(54)("keys"),
          o = e(55);
        n.exports = function(n) { return r[n] || (r[n] = o(n)) } }, function(n, t, e) { var r = e(25),
          o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        n.exports = function(n) { return o[n] || (o[n] = {}) } }, function(n, t) { var e = 0,
          r = Math.random();
        n.exports = function(n) { return "Symbol(".concat(void 0 === n ? "" : n, ")_", (++e + r).toString(36)) } }, function(n, t) { n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(n, t, e) { var r = e(25).document;
        n.exports = r && r.documentElement }, function(n, t, e) { var r = e(30).f,
          o = e(39),
          i = e(59)("toStringTag");
        n.exports = function(n, t, e) { n && !o(n = e ? n : n.prototype, i) && r(n, i, { configurable: !0, value: t }) } }, function(n, t, e) { var r = e(54)("wks"),
          o = e(55),
          i = e(25).Symbol,
          a = "function" == typeof i;
        (n.exports = function(n) { return r[n] || (r[n] = a && i[n] || (a ? i : o)("Symbol." + n)) }).store = r }, function(n, t, e) { var r = e(39),
          o = e(61),
          i = e(53)("IE_PROTO"),
          a = Object.prototype;
        n.exports = Object.getPrototypeOf || function(n) { return n = o(n), r(n, i) ? n[i] : "function" == typeof n.constructor && n instanceof n.constructor ? n.constructor.prototype : n instanceof Object ? a : null } }, function(n, t, e) { var r = e(21);
        n.exports = function(n) { return Object(r(n)) } }, function(n, t, e) { e(63); for (var r = e(25), o = e(29), i = e(41), a = e(59)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) { var u = s[c],
            l = r[u],
            f = l && l.prototype;
          f && !f[a] && o(f, a, u), i[u] = i.Array } }, function(n, t, e) { "use strict"; var r = e(64),
          o = e(65),
          i = e(41),
          a = e(47);
        n.exports = e(22)(Array, "Array", function(n, t) { this._t = a(n), this._i = 0, this._k = t }, function() { var n = this._t,
            t = this._k,
            e = this._i++; return !n || e >= n.length ? (this._t = void 0, o(1)) : o(0, "keys" == t ? e : "values" == t ? n[e] : [e, n[e]]) }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function(n, t) { n.exports = function() {} }, function(n, t) { n.exports = function(n, t) { return { value: t, done: !!n } } }, function(n, t, e) { "use strict"; var r, o, i, a, s = e(23),
          c = e(25),
          u = e(27),
          l = e(67),
          f = e(24),
          d = e(32),
          p = e(28),
          h = e(68),
          v = e(69),
          m = e(73),
          g = e(74).set,
          y = e(76)(),
          b = e(77),
          x = e(78),
          w = e(79),
          k = c.TypeError,
          _ = c.process,
          L = c.Promise,
          S = "process" == l(_),
          T = function() {},
          j = o = b.f,
          E = !! function() { try { var n = L.resolve(1),
                t = (n.constructor = {})[e(59)("species")] = function(n) { n(T, T) }; return (S || "function" == typeof PromiseRejectionEvent) && n.then(T) instanceof t } catch (n) {} }(),
          C = function(n) { var t; return !(!d(n) || "function" != typeof(t = n.then)) && t },
          O = function(n, t) { if (!n._n) { n._n = !0; var e = n._c;
              y(function() { for (var r = n._v, o = 1 == n._s, i = 0, a = function(t) { var e, i, a, s = o ? t.ok : t.fail,
                      c = t.resolve,
                      u = t.reject,
                      l = t.domain; try { s ? (o || (2 == n._h && U(n), n._h = 1), !0 === s ? e = r : (l && l.enter(), e = s(r), l && (l.exit(), a = !0)), e === t.promise ? u(k("Promise-chain cycle")) : (i = C(e)) ? i.call(e, c, u) : c(e)) : u(r) } catch (n) { l && !a && l.exit(), u(n) } }; e.length > i;) a(e[i++]);
                n._c = [], n._n = !1, t && !n._h && A(n) }) } },
          A = function(n) { g.call(c, function() { var t, e, r, o = n._v,
                i = P(n); if (i && (t = x(function() { S ? _.emit("unhandledRejection", o, n) : (e = c.onunhandledrejection) ? e({ promise: n, reason: o }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o) }), n._h = S || P(n) ? 2 : 1), n._a = void 0, i && t.e) throw t.v }) },
          P = function(n) { return 1 !== n._h && 0 === (n._a || n._c).length },
          U = function(n) { g.call(c, function() { var t;
              S ? _.emit("rejectionHandled", n) : (t = c.onrejectionhandled) && t({ promise: n, reason: n._v }) }) },
          $ = function(n) { var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = n, t._s = 2, t._a || (t._a = t._c.slice()), O(t, !0)) },
          I = function(n) { var t, e = this; if (!e._d) { e._d = !0, e = e._w || e; try { if (e === n) throw k("Promise can't be resolved itself");
                (t = C(n)) ? y(function() { var r = { _w: e, _d: !1 }; try { t.call(n, u(I, r, 1), u($, r, 1)) } catch (n) { $.call(r, n) } }): (e._v = n, e._s = 1, O(e, !1)) } catch (n) { $.call({ _w: e, _d: !1 }, n) } } };
        E || (L = function(n) { h(this, L, "Promise", "_h"), p(n), r.call(this); try { n(u(I, this, 1), u($, this, 1)) } catch (n) { $.call(this, n) } }, (r = function(n) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = e(80)(L.prototype, { then: function(n, t) { var e = j(m(this, L)); return e.ok = "function" != typeof n || n, e.fail = "function" == typeof t && t, e.domain = S ? _.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && O(this, !1), e.promise }, catch: function(n) { return this.then(void 0, n) } }), i = function() { var n = new r;
          this.promise = n, this.resolve = u(I, n, 1), this.reject = u($, n, 1) }, b.f = j = function(n) { return n === L || n === a ? new i(n) : o(n) }), f(f.G + f.W + f.F * !E, { Promise: L }), e(58)(L, "Promise"), e(81)("Promise"), a = e(26).Promise, f(f.S + f.F * !E, "Promise", { reject: function(n) { var t = j(this); return (0, t.reject)(n), t.promise } }), f(f.S + f.F * (s || !E), "Promise", { resolve: function(n) { return w(s && this === a ? L : this, n) } }), f(f.S + f.F * !(E && e(82)(function(n) { L.all(n).catch(T) })), "Promise", { all: function(n) { var t = this,
              e = j(t),
              r = e.resolve,
              o = e.reject,
              i = x(function() { var e = [],
                  i = 0,
                  a = 1;
                v(n, !1, function(n) { var s = i++,
                    c = !1;
                  e.push(void 0), a++, t.resolve(n).then(function(n) { c || (c = !0, e[s] = n, --a || r(e)) }, o) }), --a || r(e) }); return i.e && o(i.v), e.promise }, race: function(n) { var t = this,
              e = j(t),
              r = e.reject,
              o = x(function() { v(n, !1, function(n) { t.resolve(n).then(e.resolve, r) }) }); return o.e && r(o.v), e.promise } }) }, function(n, t, e) { var r = e(49),
          o = e(59)("toStringTag"),
          i = "Arguments" == r(function() { return arguments }());
        n.exports = function(n) { var t, e, a; return void 0 === n ? "Undefined" : null === n ? "Null" : "string" == typeof(e = function(n, t) { try { return n[t] } catch (n) {} }(t = Object(n), o)) ? e : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a } }, function(n, t) { n.exports = function(n, t, e, r) { if (!(n instanceof t) || void 0 !== r && r in n) throw TypeError(e + ": incorrect invocation!"); return n } }, function(n, t, e) { var r = e(27),
          o = e(70),
          i = e(71),
          a = e(31),
          s = e(51),
          c = e(72),
          u = {},
          l = {};
        (t = n.exports = function(n, t, e, f, d) { var p, h, v, m, g = d ? function() { return n } : c(n),
            y = r(e, f, t ? 2 : 1),
            b = 0; if ("function" != typeof g) throw TypeError(n + " is not iterable!"); if (i(g)) { for (p = s(n.length); p > b; b++)
              if ((m = t ? y(a(h = n[b])[0], h[1]) : y(n[b])) === u || m === l) return m } else
            for (v = g.call(n); !(h = v.next()).done;)
              if ((m = o(v, y, h.value, t)) === u || m === l) return m }).BREAK = u, t.RETURN = l }, function(n, t, e) { var r = e(31);
        n.exports = function(n, t, e, o) { try { return o ? t(r(e)[0], e[1]) : t(e) } catch (t) { var i = n.return; throw void 0 !== i && r(i.call(n)), t } } }, function(n, t, e) { var r = e(41),
          o = e(59)("iterator"),
          i = Array.prototype;
        n.exports = function(n) { return void 0 !== n && (r.Array === n || i[o] === n) } }, function(n, t, e) { var r = e(67),
          o = e(59)("iterator"),
          i = e(41);
        n.exports = e(26).getIteratorMethod = function(n) { if (void 0 != n) return n[o] || n["@@iterator"] || i[r(n)] } }, function(n, t, e) { var r = e(31),
          o = e(28),
          i = e(59)("species");
        n.exports = function(n, t) { var e, a = r(n).constructor; return void 0 === a || void 0 == (e = r(a)[i]) ? t : o(e) } }, function(n, t, e) { var r, o, i, a = e(27),
          s = e(75),
          c = e(57),
          u = e(36),
          l = e(25),
          f = l.process,
          d = l.setImmediate,
          p = l.clearImmediate,
          h = l.MessageChannel,
          v = l.Dispatch,
          m = 0,
          g = {},
          y = function() { var n = +this; if (g.hasOwnProperty(n)) { var t = g[n];
              delete g[n], t() } },
          b = function(n) { y.call(n.data) };
        d && p || (d = function(n) { for (var t = [], e = 1; arguments.length > e;) t.push(arguments[e++]); return g[++m] = function() { s("function" == typeof n ? n : Function(n), t) }, r(m), m }, p = function(n) { delete g[n] }, "process" == e(49)(f) ? r = function(n) { f.nextTick(a(y, n, 1)) } : v && v.now ? r = function(n) { v.now(a(y, n, 1)) } : h ? (i = (o = new h).port2, o.port1.onmessage = b, r = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(n) { l.postMessage(n + "", "*") }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in u("script") ? function(n) { c.appendChild(u("script")).onreadystatechange = function() { c.removeChild(this), y.call(n) } } : function(n) { setTimeout(a(y, n, 1), 0) }), n.exports = { set: d, clear: p } }, function(n, t) { n.exports = function(n, t, e) { var r = void 0 === e; switch (t.length) {
            case 0:
              return r ? n() : n.call(e);
            case 1:
              return r ? n(t[0]) : n.call(e, t[0]);
            case 2:
              return r ? n(t[0], t[1]) : n.call(e, t[0], t[1]);
            case 3:
              return r ? n(t[0], t[1], t[2]) : n.call(e, t[0], t[1], t[2]);
            case 4:
              return r ? n(t[0], t[1], t[2], t[3]) : n.call(e, t[0], t[1], t[2], t[3]) } return n.apply(e, t) } }, function(n, t, e) { var r = e(25),
          o = e(74).set,
          i = r.MutationObserver || r.WebKitMutationObserver,
          a = r.process,
          s = r.Promise,
          c = "process" == e(49)(a);
        n.exports = function() { var n, t, e, u = function() { var r, o; for (c && (r = a.domain) && r.exit(); n;) { o = n.fn, n = n.next; try { o() } catch (r) { throw n ? e() : t = void 0, r } }
            t = void 0, r && r.enter() }; if (c) e = function() { a.nextTick(u) };
          else if (!i || r.navigator && r.navigator.standalone)
            if (s && s.resolve) { var l = s.resolve();
              e = function() { l.then(u) } } else e = function() { o.call(r, u) };
          else { var f = !0,
              d = document.createTextNode("");
            new i(u).observe(d, { characterData: !0 }), e = function() { d.data = f = !f } } return function(r) { var o = { fn: r, next: void 0 };
            t && (t.next = o), n || (n = o, e()), t = o } } }, function(n, t, e) { "use strict"; var r = e(28);
        n.exports.f = function(n) { return new function(n) { var t, e;
            this.promise = new n(function(n, r) { if (void 0 !== t || void 0 !== e) throw TypeError("Bad Promise constructor");
              t = n, e = r }), this.resolve = r(t), this.reject = r(e) }(n) } }, function(n, t) { n.exports = function(n) { try { return { e: !1, v: n() } } catch (n) { return { e: !0, v: n } } } }, function(n, t, e) { var r = e(31),
          o = e(32),
          i = e(77);
        n.exports = function(n, t) { if (r(n), o(t) && t.constructor === n) return t; var e = i.f(n); return (0, e.resolve)(t), e.promise } }, function(n, t, e) { var r = e(29);
        n.exports = function(n, t, e) { for (var o in t) e && n[o] ? n[o] = t[o] : r(n, o, t[o]); return n } }, function(n, t, e) { "use strict"; var r = e(25),
          o = e(26),
          i = e(30),
          a = e(34),
          s = e(59)("species");
        n.exports = function(n) { var t = "function" == typeof o[n] ? o[n] : r[n];
          a && t && !t[s] && i.f(t, s, { configurable: !0, get: function() { return this } }) } }, function(n, t, e) { var r = e(59)("iterator"),
          o = !1; try { var i = [7][r]();
          i.return = function() { o = !0 }, Array.from(i, function() { throw 2 }) } catch (n) {}
        n.exports = function(n, t) { if (!t && !o) return !1; var e = !1; try { var i = [7],
              a = i[r]();
            a.next = function() { return { done: e = !0 } }, i[r] = function() { return a }, n(i) } catch (n) {} return e } }, function(n, t, e) { "use strict"; var r = e(24),
          o = e(26),
          i = e(25),
          a = e(73),
          s = e(79);
        r(r.P + r.R, "Promise", { finally: function(n) { var t = a(this, o.Promise || i.Promise),
              e = "function" == typeof n; return this.then(e ? function(e) { return s(t, n()).then(function() { return e }) } : n, e ? function(e) { return s(t, n()).then(function() { throw e }) } : n) } }) }, function(n, t, e) { "use strict"; var r = e(24),
          o = e(77),
          i = e(78);
        r(r.S, "Promise", { try: function(n) { var t = o.f(this),
              e = i(n); return (e.e ? t.reject : t.resolve)(e.v), t.promise } }) }, function(n, t) { n.exports = require("jsonwebtoken@7.1.9") }, function(n, t) { n.exports = require("lodash@3.10.1") }, function(n, t, e) { "use strict"; var r = e(88);
        n.exports = function(n) { return r({ path: "users-by-email", qs: { email: n } }) } }, function(n, t, e) { "use strict"; var r = e(14),
          o = r(e(89)),
          i = r(e(15)),
          a = r(e(114)),
          s = e(4).managementApi,
          c = e(115),
          u = e(5),
          l = e(10),
          f = { base: void 0, getBaseUrl() { return this.base || (this.base = `https://${u("AUTH0_DOMAIN")}/api/v2`), this.base }, endpoint(n) { return `${this.getBaseUrl()}/${n}` } };
        n.exports = function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = n.path,
            e = (0, a.default)(n, ["path"]); return s.getAccessTokenCached(u("AUTH0_DOMAIN"), u("AUTH0_CLIENT_ID"), u("AUTH0_CLIENT_SECRET")).then(function(n) { return new i.default(function(r, i) { c((0, o.default)({ url: f.endpoint(t), headers: { Authorization: `Bearer ${n}`, Accept: "application/json" }, json: !0 }, e), function(n, t, e) { n ? i(n) : t.statusCode < 200 || t.statusCode >= 300 ? (l.error("API call failed: ", t.status, e), i(new Error(e))) : r(t.body) }) }) }) } }, function(n, t, e) { var r = e(90),
          o = e(96),
          i = e(107),
          a = e(110);
        n.exports = function(n) { for (var t = 1; t < arguments.length; t++) { var e = null != arguments[t] ? arguments[t] : {},
              s = i(e); "function" == typeof o && (s = s.concat(o(e).filter(function(n) { return r(e, n).enumerable }))), s.forEach(function(t) { a(n, t, e[t]) }) } return n } }, function(n, t, e) { n.exports = e(91) }, function(n, t, e) { e(92); var r = e(26).Object;
        n.exports = function(n, t) { return r.getOwnPropertyDescriptor(n, t) } }, function(n, t, e) { var r = e(47),
          o = e(93).f;
        e(95)("getOwnPropertyDescriptor", function() { return function(n, t) { return o(r(n), t) } }) }, function(n, t, e) { var r = e(94),
          o = e(38),
          i = e(47),
          a = e(37),
          s = e(39),
          c = e(33),
          u = Object.getOwnPropertyDescriptor;
        t.f = e(34) ? u : function(n, t) { if (n = i(n), t = a(t, !0), c) try { return u(n, t) } catch (n) {}
          if (s(n, t)) return o(!r.f.call(n, t), n[t]) } }, function(n, t) { t.f = {}.propertyIsEnumerable }, function(n, t, e) { var r = e(24),
          o = e(26),
          i = e(35);
        n.exports = function(n, t) { var e = (o.Object || {})[n] || Object[n],
            a = {};
          a[n] = t(e), r(r.S + r.F * i(function() { e(1) }), "Object", a) } }, function(n, t, e) { n.exports = e(97) }, function(n, t, e) { e(98), n.exports = e(26).Object.getOwnPropertySymbols }, function(n, t, e) { "use strict"; var r = e(25),
          o = e(39),
          i = e(34),
          a = e(24),
          s = e(40),
          c = e(99).KEY,
          u = e(35),
          l = e(54),
          f = e(58),
          d = e(55),
          p = e(59),
          h = e(100),
          v = e(101),
          m = e(102),
          g = e(104),
          y = e(31),
          b = e(32),
          x = e(47),
          w = e(37),
          k = e(38),
          _ = e(43),
          L = e(105),
          S = e(93),
          T = e(30),
          j = e(45),
          E = S.f,
          C = T.f,
          O = L.f,
          A = r.Symbol,
          P = r.JSON,
          U = P && P.stringify,
          $ = p("_hidden"),
          I = p("toPrimitive"),
          N = {}.propertyIsEnumerable,
          q = l("symbol-registry"),
          R = l("symbols"),
          M = l("op-symbols"),
          F = Object.prototype,
          D = "function" == typeof A,
          B = r.QObject,
          G = !B || !B.prototype || !B.prototype.findChild,
          W = i && u(function() { return 7 != _(C({}, "a", { get: function() { return C(this, "a", { value: 7 }).a } })).a }) ? function(n, t, e) { var r = E(F, t);
            r && delete F[t], C(n, t, e), r && n !== F && C(F, t, r) } : C,
          H = function(n) { var t = R[n] = _(A.prototype); return t._k = n, t },
          z = D && "symbol" == typeof A.iterator ? function(n) { return "symbol" == typeof n } : function(n) { return n instanceof A },
          V = function(n, t, e) { return n === F && V(M, t, e), y(n), t = w(t, !0), y(e), o(R, t) ? (e.enumerable ? (o(n, $) && n[$][t] && (n[$][t] = !1), e = _(e, { enumerable: k(0, !1) })) : (o(n, $) || C(n, $, k(1, {})), n[$][t] = !0), W(n, t, e)) : C(n, t, e) },
          J = function(n, t) { y(n); for (var e, r = m(t = x(t)), o = 0, i = r.length; i > o;) V(n, e = r[o++], t[e]); return n },
          Y = function(n) { var t = N.call(this, n = w(n, !0)); return !(this === F && o(R, n) && !o(M, n)) && (!(t || !o(this, n) || !o(R, n) || o(this, $) && this[$][n]) || t) },
          K = function(n, t) { if (n = x(n), t = w(t, !0), n !== F || !o(R, t) || o(M, t)) { var e = E(n, t); return !e || !o(R, t) || o(n, $) && n[$][t] || (e.enumerable = !0), e } },
          Z = function(n) { for (var t, e = O(x(n)), r = [], i = 0; e.length > i;) o(R, t = e[i++]) || t == $ || t == c || r.push(t); return r },
          X = function(n) { for (var t, e = n === F, r = O(e ? M : x(n)), i = [], a = 0; r.length > a;) !o(R, t = r[a++]) || e && !o(F, t) || i.push(R[t]); return i };
        D || (s((A = function() { if (this instanceof A) throw TypeError("Symbol is not a constructor!"); var n = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function(e) { this === F && t.call(M, e), o(this, $) && o(this[$], n) && (this[$][n] = !1), W(this, n, k(1, e)) }; return i && G && W(F, n, { configurable: !0, set: t }), H(n) }).prototype, "toString", function() { return this._k }), S.f = K, T.f = V, e(106).f = L.f = Z, e(94).f = Y, e(103).f = X, i && !e(23) && s(F, "propertyIsEnumerable", Y, !0), h.f = function(n) { return H(p(n)) }), a(a.G + a.W + a.F * !D, { Symbol: A }); for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nn = 0; Q.length > nn;) p(Q[nn++]); for (var tn = j(p.store), en = 0; tn.length > en;) v(tn[en++]);
        a(a.S + a.F * !D, "Symbol", { for: function(n) { return o(q, n += "") ? q[n] : q[n] = A(n) }, keyFor: function(n) { if (!z(n)) throw TypeError(n + " is not a symbol!"); for (var t in q)
              if (q[t] === n) return t }, useSetter: function() { G = !0 }, useSimple: function() { G = !1 } }), a(a.S + a.F * !D, "Object", { create: function(n, t) { return void 0 === t ? _(n) : J(_(n), t) }, defineProperty: V, defineProperties: J, getOwnPropertyDescriptor: K, getOwnPropertyNames: Z, getOwnPropertySymbols: X }), P && a(a.S + a.F * (!D || u(function() { var n = A(); return "[null]" != U([n]) || "{}" != U({ a: n }) || "{}" != U(Object(n)) })), "JSON", { stringify: function(n) { for (var t, e, r = [n], o = 1; arguments.length > o;) r.push(arguments[o++]); if (e = t = r[1], (b(t) || void 0 !== n) && !z(n)) return g(t) || (t = function(n, t) { if ("function" == typeof e && (t = e.call(this, n, t)), !z(t)) return t }), r[1] = t, U.apply(P, r) } }), A.prototype[I] || e(29)(A.prototype, I, A.prototype.valueOf), f(A, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0) }, function(n, t, e) { var r = e(55)("meta"),
          o = e(32),
          i = e(39),
          a = e(30).f,
          s = 0,
          c = Object.isExtensible || function() { return !0 },
          u = !e(35)(function() { return c(Object.preventExtensions({})) }),
          l = function(n) { a(n, r, { value: { i: "O" + ++s, w: {} } }) },
          f = n.exports = { KEY: r, NEED: !1, fastKey: function(n, t) { if (!o(n)) return "symbol" == typeof n ? n : ("string" == typeof n ? "S" : "P") + n; if (!i(n, r)) { if (!c(n)) return "F"; if (!t) return "E";
                l(n) } return n[r].i }, getWeak: function(n, t) { if (!i(n, r)) { if (!c(n)) return !0; if (!t) return !1;
                l(n) } return n[r].w }, onFreeze: function(n) { return u && f.NEED && c(n) && !i(n, r) && l(n), n } } }, function(n, t, e) { t.f = e(59) }, function(n, t, e) { var r = e(25),
          o = e(26),
          i = e(23),
          a = e(100),
          s = e(30).f;
        n.exports = function(n) { var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {}); "_" == n.charAt(0) || n in t || s(t, n, { value: a.f(n) }) } }, function(n, t, e) { var r = e(45),
          o = e(103),
          i = e(94);
        n.exports = function(n) { var t = r(n),
            e = o.f; if (e)
            for (var a, s = e(n), c = i.f, u = 0; s.length > u;) c.call(n, a = s[u++]) && t.push(a); return t } }, function(n, t) { t.f = Object.getOwnPropertySymbols }, function(n, t, e) { var r = e(49);
        n.exports = Array.isArray || function(n) { return "Array" == r(n) } }, function(n, t, e) { var r = e(47),
          o = e(106).f,
          i = {}.toString,
          a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        n.exports.f = function(n) { return a && "[object Window]" == i.call(n) ? function(n) { try { return o(n) } catch (n) { return a.slice() } }(n) : o(r(n)) } }, function(n, t, e) { var r = e(46),
          o = e(56).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(n) { return r(n, o) } }, function(n, t, e) { n.exports = e(108) }, function(n, t, e) { e(109), n.exports = e(26).Object.keys }, function(n, t, e) { var r = e(61),
          o = e(45);
        e(95)("keys", function() { return function(n) { return o(r(n)) } }) }, function(n, t, e) { var r = e(111);
        n.exports = function(n, t, e) { return t in n ? r(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n } }, function(n, t, e) { n.exports = e(112) }, function(n, t, e) { e(113); var r = e(26).Object;
        n.exports = function(n, t, e) { return r.defineProperty(n, t, e) } }, function(n, t, e) { var r = e(24);
        r(r.S + r.F * !e(34), "Object", { defineProperty: e(30).f }) }, function(n, t, e) { var r = e(96),
          o = e(107);
        n.exports = function(n, t) { if (null == n) return {}; var e, i, a = {},
            s = o(n); for (i = 0; i < s.length; i++) e = s[i], t.indexOf(e) >= 0 || (a[e] = n[e]); if (r) { var c = r(n); for (i = 0; i < c.length; i++) e = c[i], t.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (a[e] = n[e]) } return a } }, function(n, t) { n.exports = require("request@2.81.0") }, function(n, t, e) { "use strict"; var r = e(14),
          o = r(e(117)),
          i = r(e(15)),
          a = e(124),
          s = e(125).get,
          c = e(126),
          u = e(136),
          l = /\{\{\s*(.*?)\s*\}\}/g;
        n.exports = function(n) { var t = n.stylesheetTag,
            e = n.customCSSTag,
            r = n.currentUser,
            f = n.matchingUsers,
            d = n.dynamicSettings,
            p = n.identities,
            h = n.locale,
            v = n.params,
            m = n.token; return i.default.all([c(d, p, h), s().read()]).then(function(n) { var i = (0, o.default)(n, 2),
              s = i[0],
              c = i[1]; return function(n) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (!n || "string" != typeof n) throw new Error("Invalid template provided"); return n.replace(l, function(n, e) { return t[e] || "" }) }(c.settings ? c.settings.template : a, { ExtensionCSS: t, CustomCSS: e, Auth0Widget: s, ExtensionScripts: u(r, f, v, m) }) }) } }, function(n, t, e) { var r = e(118),
          o = e(119),
          i = e(123);
        n.exports = function(n, t) { return r(n) || o(n, t) || i() } }, function(n, t) { n.exports = function(n) { if (Array.isArray(n)) return n } }, function(n, t, e) { var r = e(120);
        n.exports = function(n, t) { var e = [],
            o = !0,
            i = !1,
            a = void 0; try { for (var s, c = r(n); !(o = (s = c.next()).done) && (e.push(s.value), !t || e.length !== t); o = !0); } catch (n) { i = !0, a = n } finally { try { o || null == c.return || c.return() } finally { if (i) throw a } } return e } }, function(n, t, e) { n.exports = e(121) }, function(n, t, e) { e(62), e(18), n.exports = e(122) }, function(n, t, e) { var r = e(31),
          o = e(72);
        n.exports = e(26).getIterator = function(n) { var t = o(n); if ("function" != typeof t) throw TypeError(n + " is not iterable!"); return r(t.call(n)) } }, function(n, t) { n.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance") } }, function(n, t, e) { "use strict";
        n.exports = '\n<!doctype html>\n<html class="auth0-lock-html">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">\n    <meta name="author" content="Auth0">\n    <meta name="description" content="Easily link two accounts into one">\n    <title>Auth0 Account Linking Extension</title>\n    <link rel="shortcut icon" href="https://auth0.com/auth0-styleguide/img/favicon.png" />\n    {{ ExtensionCSS }}\n    {{ CustomCSS }}\n  </head>\n  <body>\n    \n    {{ Auth0Widget }}\n    {{ ExtensionScripts }}\n  </body>\n</html>\n' }, function(n, t, e) { "use strict"; var r = null;
        n.exports.init = function(n) { r = n }, n.exports.get = function() { if (!r) throw new Error("The DB has not been initialized."); return r } }, function(n, t, e) { "use strict"; var r = e(14)(e(127)),
          o = e(131).resolveLocale,
          i = e(133).getSettings,
          a = e(134),
          s = e(135),
          c = e(135).lockOutlineClass,
          u = new RegExp(/\{\{(\s+)?identities(\s+)?\}\}/);
        n.exports = function(n, t) { var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en"; return i().then(function(i) { var l = (0, r.default)(i, n); return o(e).then(function(n) { return `\n            <div id="auth0-lock-container-1" class="auth0-lock-container">\n                <div class="auth0-lock auth0-lock-opened auth0-lock-with-tabs ${c(l.removeOverlay)}">\n                    ${s(l.removeOverlay)}\n                    <div class="auth0-lock-center">\n                        <form class="auth0-lock-widget">\n                        <div class="auth0-lock-widget-container">\n                            <div class="auth0-lock-cred-pane auth0-lock-quiet">\n                            <div class="auth0-lock-header">\n                                <div class="auth0-lock-header-bg auth0-lock-blur-support">\n                                <div class="auth0-lock-header-bg-blur"></div>\n                                <div class="auth0-lock-header-bg-solid"></div>\n                                </div>\n                                <div class="auth0-lock-header-welcome">\n                                  ${function(n){return""!==n.logoPath?`<img src='${n.logoPath}' class="auth0-lock-header-logo" />`:`\n    <svg class="auth0-lock-header-logo" width="52.47px" height="58px" viewBox="0 0 151 172">\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="logo-grey-horizontal">\n                <g id="Group">\n                <g id="LogoBadge" fill-opacity="1" fill="rgb(234, 83, 35)">\n                    <path d="${a.badge}" id="Shape"></path>\n                </g>\n                </g>\n            </g>\n        </g>\n    </svg>`}(l)}\n                                  <div class="auth0-lock-name">${function(n,t){return""!==n.title?n.title:t("accountLinking")}(l,n)}</div>\n                                </div>\n                            </div>\n                            <div id="error-message" class="auth0-global-message auth0-global-message-error"></div>\n                            <div style="position: relative;">\n                                <span>\n                                <div class="">\n                                    <div style="visibility: inherit;">\n                                    <div class="auth0-lock-view-content">\n                                        <div style="position: relative;">\n                                        <div class="auth0-lock-body-content">\n                                            <div class="auth0-lock-content">\n                                            <div class="auth0-lock-form" id="content-container">\n                                                <div>\n                                                <p id="message">\n                                                    ${n("introduction")} ${n("identities").replace(u,t)}.\n                                                </p>\n                                                <p class="auth0-lock-alternative">\n                                                    <a class="auth0-lock-alternative-link" id="skip" href="#">\n                                                    ${n("skipAlternativeLink")}\n                                                    </a>\n                                                </p>\n                                                </div>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        </div>\n                                    </div>\n                                    </div>\n                                </div>\n                                </span>\n                            </div>\n                            <div class="auth0-lock-actions">\n                                ${function(n,t){var e="";return""!==n.color&&(e=`style="background-color: ${n.color}"`),`\n    <button class="auth0-lock-submit" ${e} type="button" id="link">\n      <span class="auth0-label-submit">\n        <span id="label-value">${t("continue")}</span>\n        <span>\n          <svg class="icon-text" width="8px" height="12px" viewBox="0 0 8 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Web/Submit/Active" transform="translate(-148.000000, -32.000000)" fill="#FFFFFF"><polygon id="Shape" points="148 33.4 149.4 32 155.4 38 149.4 44 148 42.6 152.6 38"></polygon></g></g></svg>\n        </span>\n      </span>\n    </button>`}(l,n)}\n                            </div>\n                            </div>\n                        </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <script>\n                window.Auth0AccountLinkingExtension = window.Auth0AccountLinkingExtension || {};\n                window.Auth0AccountLinkingExtension.locale = {\n                    pageMismatchError: '${n("pageMismatchError")}',\n                    sameEmailAddressError: '${n("sameEmailAddressError")}'\n                }\n            <\/script>\n            `})})}},function(n,t,e){n.exports=e(128)},function(n,t,e){e(129),n.exports=e(26).Object.assign},function(n,t,e){var r=e(24);r(r.S+r.F,"Object",{assign:e(130)})},function(n,t,e){"use strict";var r=e(45),o=e(103),i=e(94),a=e(61),s=e(48),c=Object.assign;n.exports=!c||e(35)(function(){var n={},t={},e=Symbol(),r="abcdefghijklmnopqrst";return n[e]=7,r.split("").forEach(function(n){t[n]=n}),7!=c({},n)[e]||Object.keys(c({},t)).join("")!=r})?function(n,t){for(var e=a(n),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var d,p=s(arguments[u++]),h=l?r(p).concat(l(p)):r(p),v=h.length,m=0;v>m;)f.call(p,d=h[m++])&&(e[d]=p[d]);return e}:c},function(n,t,e){"use strict";var r=e(14)(e(15)),o=e(132),i=e(133).getLocales,a=o,s="(MISSING_LOCALE)";n.exports={allLocales:a,resolveLocale:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return("object"==typeof t?r.default.resolve(t):i()).then(function(t){return function(e){return(t[n]||{})[e]||t.en[e]||a[n][e]||s}}).catch(function(){return a})}}},function(n){n.exports={en:{_name:"English",pageMismatchError:"You seem to have reached this page in error. Please try logging in again",continue:"Continue",accountLinking:"Account Linking",introduction:"It looks like you have another account with the same email address. We recommend you link these accounts.",skipAlternativeLink:"I want to skip this and create a new account. (Not recommended)",sameEmailAddressError:"Accounts must have matching email addresses. Please try again.",identities:"You may sign in with {{identities}} to link accounts",or:"or"},es:{_name:"Spanish",pageMismatchError:"Parece que has llegado a esta página por error. Intenta iniciar sesión nuevamente",continue:"Continuar",accountLinking:"Vinculación de cuentas",introduction:"Parece que ya tienes otra cuenta con la misma dirección de correo electrónico. Recomendamos que vincules las cuentas.",skipAlternativeLink:"Quiero saltar esto y crear una nueva cuenta. (No recomendado)",sameEmailAddressError:"Las cuentas deben tener la misma dirección de correo electrónico. Por favor intenta nuevamente.",identities:"Puedes iniciar sesión con {{identities}} para vincular las cuentas",or:"o"},ja:{_name:"Japanease",pageMismatchError:"アクセスに失敗しました。もう一度ログインしてください。",continue:"続ける",accountLinking:"アカウントリンク",introduction:"同じメールアドレスのアカウントが見つかりました。これらのアカウントを統合することを推奨します。",skipAlternativeLink:"統合せずに新しいアカウントを作成する。 (非推奨)",sameEmailAddressError:"一致するメールアドレスが見つかりませんでした。もう一度ログインしてください。",identities:"統合すると{{identities}}でログインできるようになります。",or:"または"}}},function(n,t,e){"use strict";var r=e(125).get,o=e(132),i="ok",a={template:e(124),locale:"en",status:i,color:"#eb5424",title:"",logoPath:"",removeOverlay:!1};n.exports={STATUS_SUCCESSFUL:i,STATUS_ERRORED:"error",getSettings:function(){return r().read().then(function(n){return n.settings||a})},setSettings:function(n){return r().write({settings:n}).then(function(){return{status:i}})},getLocales:function(){return r().read().then(function(n){return n.locales||o})},setLocales:function(n){return r().write({locales:n}).then(function(){return{status:i}})}}},function(n,t,e){"use strict";n.exports={text:"M246.517,0.11 C238.439,0.11 231.607,3.916 226.759,11.115 C221.94,18.271 219.393,28.26 219.393,40 C219.393,51.74 221.94,61.729 226.759,68.884 C231.607,76.084 238.439,79.889 246.517,79.889 C254.595,79.889 261.427,76.084 266.275,68.884 C271.093,61.729 273.64,51.74 273.64,40 C273.64,28.26 271.093,18.271 266.275,11.115 C261.427,3.916 254.595,0.11 246.517,0.11 L246.517,0.11 Z M246.517,70.005 C242.655,70.005 239.604,67.82 237.187,63.324 C234.268,57.893 232.66,49.61 232.66,40 C232.66,30.39 234.268,22.106 237.187,16.676 C239.604,12.18 242.655,9.994 246.517,9.994 C250.378,9.994 253.43,12.18 255.847,16.676 C258.766,22.106 260.373,30.389 260.373,40 C260.373,49.611 258.766,57.895 255.847,63.324 C253.43,67.82 250.378,70.005 246.517,70.005 L246.517,70.005 Z M71.45,29.172 L71.45,63.484 C71.45,72.53 78.81,79.889 87.856,79.889 C95.746,79.889 101.707,75.975 103.902,74.291 C104.024,74.197 104.184,74.169 104.331,74.216 C104.478,74.263 104.592,74.379 104.637,74.527 L105.961,78.86 L115.737,78.86 L115.737,29.172 L103.175,29.172 L103.175,66.326 C103.175,66.501 103.076,66.662 102.921,66.743 C100.559,67.961 95.899,70.006 91.231,70.006 C87.252,70.006 84.012,66.768 84.012,62.787 L84.012,29.172 L71.45,29.172 L71.45,29.172 Z M197.237,78.859 L209.8,78.859 L209.8,44.547 C209.8,35.501 202.44,28.141 193.394,28.141 C186.735,28.141 181.393,31.004 178.802,32.71 C178.657,32.805 178.473,32.813 178.322,32.731 C178.171,32.649 178.075,32.491 178.075,32.318 L178.075,1.141 L165.513,1.141 L165.513,78.859 L178.075,78.859 L178.075,41.704 C178.075,41.529 178.174,41.368 178.33,41.288 C180.691,40.069 185.352,38.025 190.019,38.025 C191.947,38.025 193.76,38.776 195.123,40.139 C196.486,41.502 197.236,43.316 197.236,45.243 L197.236,78.859 L197.237,78.859 Z M124.792,39.055 L132.438,39.055 C132.697,39.055 132.907,39.265 132.907,39.524 L132.907,66.858 C132.907,74.043 138.753,79.888 145.938,79.888 C148.543,79.888 151.113,79.512 153.585,78.77 L153.585,69.796 C152.143,69.923 150.485,70.005 149.313,70.005 C147.193,70.005 145.469,68.28 145.469,66.161 L145.469,39.523 C145.469,39.264 145.679,39.054 145.938,39.054 L153.585,39.054 L153.585,29.171 L145.938,29.171 C145.679,29.171 145.469,28.961 145.469,28.702 L145.469,12.295 L132.907,12.295 L132.907,28.702 C132.907,28.961 132.697,29.171 132.438,29.171 L124.792,29.171 L124.792,39.055 L124.792,39.055 Z M51.361,78.859 L64.429,78.859 L44.555,9.55 C42.962,3.992 37.811,0.11 32.029,0.11 C26.247,0.11 21.096,3.992 19.502,9.55 L-0.372,78.859 L12.697,78.859 L18.449,58.798 C18.507,58.597 18.691,58.459 18.9,58.459 L45.158,58.459 C45.367,58.459 45.552,58.597 45.609,58.798 L51.361,78.859 L51.361,78.859 Z M42.056,48.576 L22.004,48.576 C21.857,48.576 21.718,48.507 21.629,48.388 C21.541,48.272 21.513,48.119 21.553,47.978 L31.579,13.012 C31.637,12.811 31.821,12.673 32.03,12.673 C32.239,12.673 32.423,12.811 32.48,13.012 L42.507,47.978 C42.547,48.12 42.519,48.272 42.43,48.388 C42.342,48.507 42.203,48.576 42.056,48.576 L42.056,48.576 Z",badge:"M119.555,135.861 L102.705,83.997 L146.813,51.952 L92.291,51.952 L75.44,0.09 L75.435,0.076 L129.965,0.076 L146.82,51.947 L146.821,51.946 L146.835,51.938 C156.623,82.03 146.542,116.256 119.555,135.861 L119.555,135.861 Z M31.321,135.861 L31.307,135.871 L75.426,167.924 L119.555,135.862 L75.44,103.808 L31.321,135.861 L31.321,135.861 Z M4.052,51.939 L4.052,51.939 C-6.252,83.66 5.709,117.272 31.312,135.867 L31.316,135.851 L48.168,83.99 L4.07,51.951 L58.579,51.951 L75.431,0.089 L75.435,0.075 L20.902,0.075 L4.052,51.939 L4.052,51.939 Z"}},function(n,t,e){"use strict";var r=e(134);n.exports=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"":`\n    <div class="auth0-lock-overlay">\n        <span class="auth0-lock-badge-bottom">\n        <a href="https://auth0.com/?utm_source=lock&amp;utm_campaign=badge&amp;utm_medium=widget" target="_blank" class="auth0-lock-badge">\n            <svg width="58px" height="21px" viewBox="0 0 462 168">\n            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                <g id="logo-grey-horizontal">\n                <g id="Group">\n                    <g id="LogoText" transform="translate(188.000000, 41.500000)" fill="#D0D2D3">\n                    <path d="${r.text}" id="Shape"></path>\n                    </g>\n                    <g id="LogoBadge" fill-opacity="0.4" fill="#FFFFFF">\n                    <path d="${r.badge}" id="Shape"></path>\n                    </g>\n                </g>\n                </g>\n            </g>\n            </svg>\n        </a>\n        </span>\n    </div>`},n.exports.lockOutlineClass=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?"auth0-lock-outlined":""}},function(n,t,e){"use strict";var r=e(14)(e(137)),o=e(139);n.exports=function(n,t,e,i){return`\n<script type="text/javascript">\n  var currentUser = ${(0,r.default)(n)};\n  var matchingUsers = ${(0,r.default)(t)};\n  var bootstrapApp = ${o.toString()};\n\n  bootstrapApp(currentUser, matchingUsers, ${(0,r.default)(e)}, ${(0,r.default)(i)});\n<\/script>\n`}},function(n,t,e){n.exports=e(138)},function(n,t,e){var r=e(26),o=r.JSON||(r.JSON={stringify:JSON.stringify});n.exports=function(n){return o.stringify.apply(o,arguments)}},function(n,t,e){"use strict";n.exports=function(n,t,e,r){try{!function(n){var r=document.getElementById("link"),o=document.getElementById("skip"),i=t.reduce(function(n,t){return n.concat(t.identities)},[]).map(function(n){return n.connection});r.addEventListener("click",function(t){var r,o,a;r=n.iss,o={client_id:e.client_id,redirect_uri:e.redirect_uri,response_type:e.response_type,response_mode:e.response_mode,scope:e.scope,state:e.original_state,nonce:e.nonce,audience:e.audience,link_account_token:e.child_token,prevent_sign_up:!0,connection:i[0]},a=c(o).filter(function(n){return!!o[n]}).map(function(n){return n+"="+encodeURIComponent(o[n])}).join("&"),window.location=r+"authorize?"+a}),function(n,t,e){n.href=t+"continue?state="+e}(o,n.iss,e.state),"accountMismatch"===e.error_type&&(a=document.getElementById("error-message"),s=window.Auth0AccountLinkingExtension.locale.sameEmailAddressError||"Accounts must have matching email addresses. Please try again.",a.innerHTML=s,a.style.display="block");var a,s}(r)}catch(n){console.error(n),o=document.getElementById("content-container"),document.getElementById("label-value"),i=document.getElementById("link"),o.innerHTML="",o.appendChild(s("div",{},[s("p",{},[(a=window.Auth0AccountLinkingExtension.locale.pageMismatchError||"You seem to have reached this page in error. Please try logging in again",document.createTextNode(a))])])),i.disabled=!0}var o,i,a;function s(n,t,e){var r,o=document.createElement(n),i=e||[],a=t||{};for(r in c(a))o.setAttribute(r,a[r]);for(r in i)o.appendChild(i[r]);return o}function c(n){var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t}}},function(n,t,e){"use strict";var r=e(141).version;n.exports=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=n?`${r}.min.css`:"css",e=function(e,r){var o=(e||"").trim();return r?o:o?`${function(n){return n?"https://cdn.auth0.com/extensions/auth0-account-link/assets":"/css"}(n)}/${o}.${t}`:""};return{link:e,tag:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e(n,t);return r?`<link rel="stylesheet" href="${r}">`:""}}}},function(n){n.exports={name:"auth0-account-link-extension",version:"2.6.3",description:"Auth0 Account Link Extension",main:"index.js",engines:{node:">=6.9"},scripts:{start:"node ./index.js",test:"nyc --all mocha test --recursive --timeout 5000","test:integration":"mocha integration --recursive --timeout 50000",lint:"eslint .","serve:dev":"gulp run","client:build":"minify --clean --output dist/assets/link.$npm_package_version.min.css public/css/link.css && minify --clean --output dist/assets/admin.$npm_package_version.min.css public/css/admin.css","extension:build":"a0-ext build:server ./webtask.js ./dist && cp ./dist/auth0-account-link.extension.$npm_package_version.js ./build/bundle.js",build:"yarn run client:build && yarn run extension:build"},author:"Auth0",license:"MIT","auth0-extension":{nodeTarget:"4.2.0",bundleModules:!0,externals:["auth0-extension-hapi-tools@1.3.1","auth0-extension-tools@1.3.1","auth0@2.8.0","bluebird@3.5.0","body-parser@1.12.4","boom@3.2.2","compression@1.4.4","debug@2.2.0","delegates@0.1.0","depd@1.0.1","destroy@1.0.3","ejs@2.3.1","express-jwt@3.1.0","express@4.12.4","hapi-auth-jwt2@7.0.1","@auth0/hapi@13.5.1","hoek@4.1.0","iconv-lite@0.4.10","inert@4.0.1","jade@1.10.0","joi@9.0.4","jsonwebtoken@7.1.9","jwks-rsa@1.1.1","lodash@3.10.1","lru-cache@2.6.4","lru-memoizer@1.10.0","mime-db@1.10.0","mime-types@2.0.12","moment@2.10.3","morgan@1.5.3","ms@0.7.1","nconf@0.8.4","node-uuid@1.4.3","open@0.0.5","qs@3.1.0","raw-body@2.1.0","read-all-stream@2.1.2","request@2.81.0","superagent@1.2.0","type-check@0.3.1","webtask-tools","winston@1.0.0","xml2js@0.4.8"]},dependencies:{"@auth0/hapi":"13.5.1",auth0:"^2.8.0","auth0-extension-hapi-tools":"1.3.1","auth0-extension-tools":"1.3.1",boom:"3.2.2","hapi-auth-jwt2":"7.0.1",inert:"4.0.1",joi:"9.0.4",jsonwebtoken:"^8.1.0","jwks-rsa":"1.1.1",lodash:"^3.10.1",nconf:"^0.8.4",open:"^0.0.5",request:"^2.81.0","webtask-tools":"^3.2.0",winston:"1.0.0"},devDependencies:{"@babel/runtime":"7.0.0-beta.46","auth0-extensions-cli":"^1.1.2",chai:"^4.1.0",eslint:"^4.3.0","eslint-config-auth0":"^11.0.0","eslint-config-auth0-base":"^13.0.0","eslint-plugin-import":"^2.7.0","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-react":"^7.1.0",gulp:"^3.9.1","gulp-nodemon":"^2.2.1","gulp-util":"^3.0.8",minifier:"^0.8.1",mocha:"^3.5.0",ngrok:"^2.2.15",nodemon:"^1.11.0",nyc:"^11.1.0",puppeteer:"^0.11.0"}}},function(n,t,e){"use strict";var r={auth0:"Auth0",ad:"Active Directory",apple:"Apple","google-oauth2":"Google",facebook:"Facebook",windowslive:"Microsoft",linkedin:"LinkedIn",github:"GitHub",dropbox:"Dropbox",bitbucket:"Bitbucket",paypal:"PayPal","paypal-sandbox":"PayPal (Sandbox)",twitter:"Twitter",amazon:"Amazon",vkontakte:"VK",yandex:"Yandex",yahoo:"Yahoo!",thirtysevensignals:"37signals",box:"Box.com",salesforce:"SalesForce","salesforce-sandbox":"SalesForce (Sandbox)","salesforce-community":"SalesForce Community",fitbit:"Fitbit",baidu:"Baidu",renren:"Renren",weibo:"Weibo",aol:"AOL",shopify:"Shopify",wordpress:"WordPress",dwolla:"Dwolla",miicard:"MiiCard",yammer:"Yammer",soundcloud:"SoundCloud",instagram:"Instagram",thecity:"The City","thecity-sandbox":"The City (Sandbox)","planning-center":"Planning Center",evernote:"Evernote","evernote-sandbox":"Evernote (Sandbox)",exact:"Exact.com",daccount:"NTT Docomo",sms:"SMS Code",email:"E-mail Code"};n.exports=function(n){var t=r[n];return void 0!==t?t:n}},function(n,t,e){"use strict";var r=e(14)(e(144));n.exports=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"and",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=n?(0,r.default)(n):[];if(n.length<=1)return o.join("");if(2===n.length)return n.join(` ${t} `);var i=o.pop();return`${o.join(", ")}${e} ${t} ${i}`}},function(n,t,e){var r=e(145),o=e(146),i=e(154);n.exports=function(n){return r(n)||o(n)||i()}},function(n,t){n.exports=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}},function(n,t,e){var r=e(147),o=e(151);n.exports=function(n){if(o(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return r(n)}},function(n,t,e){n.exports=e(148)},function(n,t,e){e(18),e(149),n.exports=e(26).Array.from},function(n,t,e){"use strict";var r=e(27),o=e(24),i=e(61),a=e(70),s=e(71),c=e(51),u=e(150),l=e(72);o(o.S+o.F*!e(82)(function(n){Array.from(n)}),"Array",{from:function(n){var t,e,o,f,d=i(n),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,g=0,y=l(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(e=new p(t=c(d.length));t>g;g++)u(e,g,m?v(d[g],g):d[g]);else for(f=y.call(d),e=new p;!(o=f.next()).done;g++)u(e,g,m?a(f,v,[o.value,g],!0):o.value);return e.length=g,e}})},function(n,t,e){"use strict";var r=e(30),o=e(38);n.exports=function(n,t,e){t in n?r.f(n,t,o(0,e)):n[t]=e}},function(n,t,e){n.exports=e(152)},function(n,t,e){e(62),e(18),n.exports=e(153)},function(n,t,e){var r=e(67),o=e(59)("iterator"),i=e(41);n.exports=e(26).isIterable=function(n){var t=Object(n);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(n,t,e){"use strict";var r=e(156).install,o=e(5),i=e(10);n.exports=function(n){return{method:"POST",path:"/.extensions/on-install",config:{auth:!1,pre:[n.handlers.validateHookToken("/.extensions/on-install"),n.handlers.managementClient]},handler:function(n,t){i.info("Starting rule installation..."),r(n.pre.auth0.rules,{extensionURL:o("PUBLIC_WT_URL"),clientID:o("AUTH0_CLIENT_ID"),clientSecret:o("AUTH0_CLIENT_SECRET")}).then(function(){return t().code(204)}).then(function(){i.info("Rule successfully installed")}).catch(function(n){throw i.error("Something went wrong, ",n),n}).catch(function(n){return t.error(n)})}}}},function(n,t,e){"use strict";var r=e(14)(e(89)),o=e(157),i="auth0-account-link-extension",a=function(n){return function(){var t=function(n){return n.find(function(n){return n.name===i})}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]);t&&n.delete({id:t.id})}};n.exports={install:function(n,t){var e={name:i,script:o(t),enabled:!0};return n.getAll().then(function(n,t){return function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find(function(n){return n.name===i});return e?n.update({id:e.id},t):n.create((0,r.default)({stage:"login_success"},t))}}(n,e))},uninstall:function(n){return n.getAll().then(a(n))}}},function(n,t,e){"use strict";n.exports=function(n){var t=n.extensionURL,e=void 0===t?"":t,r=n.username,o=void 0===r?"Unknown":r,i=n.clientID,a=void 0===i?"":i,s=n.clientSecret,c=void 0===s?"":s;return`function (user, context, callback) {\n  /**\n   * This rule has been automatically generated by\n   * ${o} at ${(new Date).toISOString()}\n   */\n  var request = require('request@2.56.0');\n  var queryString = require('querystring');\n  var Promise = require('native-or-bluebird@1.2.0');\n  var jwt = require('jsonwebtoken@7.1.9');\n\n  var CONTINUE_PROTOCOL = 'redirect-callback';\n  var LOG_TAG = '[ACCOUNT_LINK]: ';\n  console.log(LOG_TAG, 'Entered Account Link Rule');\n\n  // 'query' can be undefined when using '/oauth/token' to log in\n  context.request.query = context.request.query || {};\n\n  var config = {\n    endpoints: {\n      linking: '${e.replace(/\/$/g,"")}',\n      userApi: auth0.baseUrl + '/users',\n      usersByEmailApi: auth0.baseUrl + '/users-by-email'\n    },\n    token: {\n      clientId: '${a}',\n      clientSecret: '${c}',\n      issuer: auth0.domain\n    }\n  };\n\n  // If the user does not have an e-mail account,\n  // just continue the authentication flow.\n  // See auth0-extensions/auth0-account-link-extension#33\n  if (user.email === undefined) {\n    return callback(null, user, context);\n  }\n\n  createStrategy().then(callbackWithSuccess).catch(callbackWithFailure);\n\n  function createStrategy() {\n    if (shouldLink()) {\n      return linkAccounts();\n    } else if (shouldPrompt()) {\n      return promptUser();\n\n    }\n\n    return continueAuth();\n\n    function shouldLink() {\n      return !!context.request.query.link_account_token;\n    }\n\n    function shouldPrompt() {\n      return !insideRedirect() && !redirectingToContinue() && firstLogin();\n\n      // Check if we're inside a redirect\n      // in order to avoid a redirect loop\n      // TODO: May no longer be necessary\n      function insideRedirect() {\n        return context.request.query.redirect_uri &&\n          context.request.query.redirect_uri.indexOf(config.endpoints.linking) !== -1;\n      }\n\n      // Check if this is the first login of the user\n      // since merging already active accounts can be a\n      // destructive action\n      function firstLogin() {\n        return context.stats.loginsCount <= 1;\n      }\n\n      // Check if we're coming back from a redirect\n      // in order to avoid a redirect loop. User will\n      // be sent to /continue at this point. We need\n      // to assign them to their primary user if so.\n      function redirectingToContinue() {\n        return context.protocol === CONTINUE_PROTOCOL;\n      }\n    }\n  }\n\n  function verifyToken(token, secret) {\n    return new Promise(function(resolve, reject) {\n      jwt.verify(token, secret, function(err, decoded) {\n        if (err) {\n          return reject(err);\n        }\n\n        return resolve(decoded);\n      });\n    });\n  }\n\n  function linkAccounts() {\n    var secondAccountToken = context.request.query.link_account_token;\n\n    return verifyToken(secondAccountToken, config.token.clientSecret)\n      .then(function(decodedToken) {\n        // Redirect early if tokens are mismatched\n        if (user.email !== decodedToken.email) {\n          console.error(LOG_TAG, 'User: ', decodedToken.email, 'tried to link to account ', user.email);\n          context.redirect = {\n            url: buildRedirectUrl(secondAccountToken, context.request.query, 'accountMismatch')\n          };\n\n          return user;\n        }\n\n        var linkUri = config.endpoints.userApi+'/'+user.user_id+'/identities';\n        var headers = {\n          Authorization: 'Bearer ' + auth0.accessToken,\n          'Content-Type': 'application/json',\n          'Cache-Control': 'no-cache'\n        };\n\n        return apiCall({\n          method: 'GET',\n          url: config.endpoints.userApi+'/'+decodedToken.sub+'?fields=identities',\n          headers: headers\n        })\n          .then(function(secondaryUser) {\n            var provider = secondaryUser &&\n              secondaryUser.identities &&\n              secondaryUser.identities[0] &&\n              secondaryUser.identities[0].provider;\n\n            return apiCall({\n              method: 'POST',\n              url: linkUri,\n              headers,\n              json: { user_id: decodedToken.sub, provider: provider }\n            });\n          })\n          .then(function(_) {\n            // TODO: Ask about this\n            console.info(LOG_TAG, 'Successfully linked accounts for user: ', user.email);\n            return _;\n          });\n      });\n  }\n\n  function continueAuth() {\n    return Promise.resolve();\n  }\n\n  function promptUser() {\n    return searchUsersWithSameEmail().then(function transformUsers(users) {\n      \n      return users.filter(function(u) {\n        return u.user_id !== user.user_id;\n      }).map(function(user) {\n        return {\n          userId: user.user_id,\n          email: user.email,\n          picture: user.picture,\n          connections: user.identities.map(function(identity) {\n            return identity.connection;\n          })\n        };\n      });\n    }).then(function redirectToExtension(targetUsers) {\n      if (targetUsers.length > 0) {\n        context.redirect = {\n          url: buildRedirectUrl(createToken(config.token), context.request.query)\n        };\n      }\n    });\n  }\n\n  function callbackWithSuccess(_) {\n    callback(null, user, context);\n\n    return _;\n  }\n\n  function callbackWithFailure(err) {\n    console.error(LOG_TAG, err.message, err.stack);\n\n    callback(err, user, context);\n  }\n\n  function createToken(tokenInfo, targetUsers) {\n    var options = {\n      expiresIn: '5m',\n      audience: tokenInfo.clientId,\n      issuer: qualifyDomain(tokenInfo.issuer)\n    };\n\n    var userSub = {\n      sub: user.user_id,\n      email: user.email,\n      base: auth0.baseUrl\n    };\n\n    return jwt.sign(userSub, tokenInfo.clientSecret, options);\n  }\n\n  function searchUsersWithSameEmail() {\n    return apiCall({\n      url: config.endpoints.usersByEmailApi,\n      qs: {\n        email: user.email\n      }\n    });\n  }\n\n  // Consider moving this logic out of the rule and into the extension\n  function buildRedirectUrl(token, q, errorType) {\n    var params = {\n      child_token: token,\n      audience: q.audience,\n      client_id: q.client_id,\n      redirect_uri: q.redirect_uri,\n      scope: q.scope,\n      response_type: q.response_type,\n      response_mode: q.response_mode,\n      auth0Client: q.auth0Client,\n      original_state: q.original_state || q.state,\n      nonce: q.nonce,\n      error_type: errorType\n    };\n\n    return config.endpoints.linking + '?' + queryString.encode(params);\n  }\n\n  function qualifyDomain(domain) {\n    return 'https://'+domain+'/';\n  }\n\n  function apiCall(options) {\n    return new Promise(function(resolve, reject) {\n      var reqOptions = Object.assign({\n        url: options.url,\n        headers: {\n          Authorization: 'Bearer ' + auth0.accessToken,\n          Accept: 'application/json'\n        },\n        json: true\n      }, options);\n\n      request(reqOptions, function handleResponse(err, response, body) {\n        if (err) {\n          reject(err);\n        } else if (response.statusCode < 200 || response.statusCode >= 300) {\n          console.error(LOG_TAG, 'API call failed: ', body);\n          reject(new Error(body));\n        } else {\n          resolve(response.body);\n        }\n      });\n    });\n  }\n}`}},function(n,t,e){"use strict";var r=e(14)(e(15)),o=e(156).uninstall,i=e(5),a=e(10);n.exports=function(n){return{method:"DELETE",path:"/.extensions/on-uninstall",config:{auth:!1,pre:[n.handlers.validateHookToken("/.extensions/on-uninstall"),n.handlers.managementClient]},handler:function(n,t){a.info("Starting uninstall..."),r.default.all([o(n.pre.auth0.rules),n.pre.auth0.deleteClient({client_id:i("AUTH0_CLIENT_ID")})]).then(function(){return t().code(204)}).catch(function(n){a.error("Something went wrong while uninstalling Account Link Extension: ",n),t().code(204)})}}}},function(n,t,e){"use strict";var r=e(160);n.exports=function(){return{method:"GET",path:"/meta",config:{auth:!1},handler:function(n,t){return t(r)}}}},function(n){n.exports={title:"Auth0 Account Link",name:"auth0-account-link",version:"2.6.3",preVersion:"2.6.2",author:"auth0",description:"This extension gives Auth0 customers the ability to allow their users to link their accounts",type:"application",logoUrl:"https://cdn.auth0.com/extensions/auth0-authz/assets/logo.svg",docsUrl:"https://auth0.com/docs/extensions/account-link",initialUrlPath:"/login",repository:"https://github.com/auth0-extensions/auth0-account-link-extension",keywords:["auth0","extension","account-link"],secrets:{CUSTOM_CSS:{description:"Add custom styles to the linking page of the extension.",required:!1,example:"https://my.cdn.com/my-css.css"}},auth0:{createClient:!0,onUninstallPath:"/.extensions/on-uninstall",onInstallPath:"/.extensions/on-install",onUpdatePath:"/.extensions/on-install",scopes:"read:connections read:users read:rules create:rules update:rules delete:rules delete:clients"}}},function(n,t,e){"use strict";var r=e(162),o=e(5),i=e(140);n.exports=function(){return{method:"GET",path:"/admin",config:{auth:!1},handler:function(n,t){var e=i("production"===o("NODE_ENV"));t(r({stylesheetTag:e.tag("admin"),baseURL:o("PUBLIC_WT_URL")}))}}}},function(n,t,e){"use strict";var r=e(163),o=e(165);n.exports=function(n){var t=n.stylesheetTag,e=n.baseURL;return`\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <base href="${e}"/>\n    <title>Auth0 Account Linking Extension Administrator</title>\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/theme/material.min.css">\n    ${t}\n</head>\n<body>\n\n${o(e)}\n\n<main class="container app-container">\n    <form action="">\n      <h2>Custom Hosted Page</h2>\n\n      <textarea name="html-code" id="code-editor"></textarea>\n\n      <h2>Widget Settings</h2>\n\n      <div class="alert" id="save-result">\n      </div>\n\n      <div class="form-group">\n        <label for="title">Title</label>\n        <input name="title" class="form-control" id="title_input" />\n      </div>\n\n      <div class="form-group">\n        <label for="logo_path">Logo Path</label>\n        <input name="logo_path" class="form-control" id="logo_path_input"/>\n      </div>\n\n      <div class="form-group">\n        <label for="color">Color</label>\n        <input name="color" class="form-control" id="color_input"/>\n      </div>\n\n      <div class="form-group">\n        <label for="locale">Language</label>\n        <select name="locale" class="form-control" id="available-locales"></select>\n      </div>\n\n      <div class="form-group">\n        <input type="checkbox" id="remove_overlay"/> Remove widget's overlay\n      </div>\n\n      <button class="btn btn-success" id="save-changes">Save changes</button>\n    </form>\n</main>\n\n\n${r}\n</body>\n</html>\n`}},function(n,t,e){"use strict";var r=e(164);n.exports=`\n<script>\nvar JSONStringify = JSON.stringify;\nvar ObjectAssign = Object.assign;\n  \nfunction makeid() {\n    var text = "";\n    var possible = "abcdef0123456789";\n\n    for (var i = 0; i < 6; i++)\n        text += possible.charAt(Math.floor(Math.random() * possible.length));\n\n    return text;\n}\n<\/script>\n<script src="https://code.jquery.com/jquery.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.js"><\/script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/mode/xml/xml.js"><\/script>\n<script>(${r.toString()})()<\/script>`},function(n,t,e){"use strict";n.exports=function(){var n={},t="",e="Success! Your changes has been successfully saved.",r="Oops! An error has ocurred while trying to save your changes.",o="com.auth0.account_linking.admin_ui.session_token",i=$("base").attr("href"),a=$(".app-container"),s=$(".loading-state-container"),c=$(".avatar"),u=sessionStorage.getItem(o);function l(){window.location.href=i+"/login"}$.ajax({url:i+"/admin/user",headers:{Authorization:"Bearer "+u}}).done(function(n,t){c.attr("src",n.avatar)}).error(function(n){"Unauthorized"===n.statusText&&l()});var f=window.location.pathname;return f.endsWith("/admin")?function(){var n=$("#title_input"),t=$("#logo_path_input"),c=$("#color_input"),f=$("#remove_overlay"),d=$("#available-locales"),p=$("#save-changes"),h=$("#save-result"),v=$("#logout-btn"),m=CodeMirror.fromTextArea(document.getElementById("code-editor"),{lineNumbers:!0,matchBrackets:!0,tabMode:"indent",theme:"material",mode:"xml",htmlMode:!0});function g(n){n?p.addClass("disabled").html("Saving changes..."):p.removeClass("disabled").html("Save changes")}function y(n,t){h.removeClass("alert-danger"),h.removeClass("alert-success"),h.html(n),h.show(),t&&t.error?h.addClass("alert-danger"):h.addClass("alert-success"),setTimeout(function(){h.html(""),h.hide(),t.error?h.removeClass("alert-danger"):h.removeClass("alert-success")},1e4)}u||l(),m.setSize(null,500),$.ajax({url:i+"/admin/settings",headers:{Authorization:"Bearer "+u}}).done(function(e){s.hide(),a.show(),function(n,t){n.setValue(t.template.trim())}(m,e),function(n){n.availableLocales.forEach(function(t){var e=n.locale===t.code?"selected":"";d.append(`<option value="${t.code}" ${e}>${t.name}</option>`)})}(e),n.val(e.title),c.val(e.color),t.val(e.logoPath),f.prop("checked",e.removeOverlay||!1)}).error(function(n){"Unauthorized"===n.statusText&&l()}),p.on("click",function(o){o.preventDefault(),g(!0),$.ajax({url:i+"/admin/settings",method:"PUT",data:{template:m.getValue(),locale:d.val(),logoPath:t.val(),color:c.val(),title:n.val(),removeOverlay:f.is(":checked")},headers:{Authorization:"Bearer "+u}}).done(function(n,t){y("<h4>"+e+"</h4>"),g(!1)}).error(function(n){void 0!==n.responseJSON.message?y("<h4>"+r+"</h4> <p>"+n.responseJSON.message+"</p>",{error:!0}):y("<h4>"+r+"</h4>",{error:!0}),g(!1)})}),v.on("click",function(){sessionStorage.removeItem(o),window.location.reload()}),$(window).bind("keydown",function(n){if(n.ctrlKey||n.metaKey)switch(String.fromCharCode(n.which).toLowerCase()){case"s":n.preventDefault(),p.click()}})}():f.endsWith("/admin/locale")?function(){var e=$("#locale-menu"),r=($("#locale-detail"),$("#locale-title")),o=$("#locale-management-table"),c=$("#locale-management-submit"),l=$("#add-new-locale"),f=$("#add-new-locale-name"),d=$("#add-new-locale-code"),p=$("#help-button"),h=$("#help-button-content");function v(){$.ajax({url:i+"/admin/locales",method:"PUT",contentType:"application/json",data:JSONStringify(n),processData:!1,headers:{Authorization:"Bearer "+u}}).done(function(n,t){toastr.success("You have successfully saved your locales.","Success!")}).error(function(n){void 0!==n.responseJSON.message?toastr.error(n.responseJSON.message,"Error"):toastr.error("Please try again later.","Error")})}function m(){for(var i in e.find("li").remove(),n)e.append(`<li class="list-group-item" data-locale-name="${i}">${n[i]._name}</li>`);$(".list-group-item").on("click",function(){$(this).addClass("active"),$(this).siblings().removeClass("active"),t=$(this).attr("data-locale-name"),function(){var e=n[t];for(var i in $("tr:not(tr.header)").remove(),r.html(e._name),e)"_name"!==i&&o.append('<tr><td id="key">'+i+'</td><td><input class="form-control" value="'+e[i]+'" /></td>')}()}),$("#locale-menu li")[0].click()}p.on("mouseover",function(){h.show(),h.animate({opacity:1,top:"-=20"},300)}),p.on("mouseleave",function(){setTimeout(function(){h.animate({opacity:0,top:"+=20"},300,function(){return h.hide()})},300)}),$.ajax({url:i+"/admin/locales",method:"GET",headers:{Authorization:"Bearer "+u}}).done(function(t,e){s.hide(),a.show(),n=t,m()}).error(function(n){s.hide(),alert(n)}),c.on("click",function(){var e={_name:n[t]._name};o.find("tr").each(function(){var n=$(this).find("#key").html(),t=$(this).find("input").val();e[n]=t}),n[t]=e,v()}),l.on("click",function(t){t.preventDefault();var e=d.val(),r=f.val();n[e]=ObjectAssign({},n.en,{_name:`${r} (Custom)`}),m(),f.val(""),d.val("")}),$("#remove-locale-btn").on("click",function(e){e.preventDefault(),confirm("Are you sure?")&&(delete n[t],m(),v())})}():void 0}},function(n,t,e){"use strict";n.exports=function(n){return`\n<header class="site-header">\n <nav class="navbar navbar-default" role="navigation">\n    <div class="container">\n      <div class="navbar-header">\n        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>\n        </button>\n        <span>\n            <h1 class="navbar-brand"><a href="${n}/admin"><span>Auth0</span> <div class="product-name">Account Linking Extension</div></a></h1>\n        </span>\n      </div>\n      <div class="collapse navbar-collapse" id="navbar-collapse">\n        <ul class="nav navbar-nav navbar-left no-basic">\n        </ul>\n        <ul class="nav navbar-nav navbar-right">\n          <li class="dropdown"><span class="btn-dro" role="button" data-toggle="dropdown">\n            <img src="" alt="" class="avatar">\n            <i class="icon-budicon-460"></i></span>\n            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\n              <li><a href="${n}/admin/locale" target="_blank">Manage locales</a></li>\n              <li><a href="https://github.com/auth0-extensions/auth0-account-link-extension/issues/new" target="_blank">Report an issue</a></li>\n              <li class="separator"></li>\n              <li><a href="#" id="logout-btn">Logout</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<section class="loading-state-container">\n  <div class="spinner spinner-lg is-auth0">\n    <div class="circle"></div>\n  </div>\n</section>`}},function(n,t,e){"use strict";var r=e(167),o=e(5),i=e(140);n.exports=function(){return{method:"GET",path:"/admin/locale",config:{auth:!1},handler:function(n,t){var e=i("production"===o("NODE_ENV"));t(r({stylesheetTag:e.tag("admin"),baseURL:o("PUBLIC_WT_URL")}))}}}},function(n,t,e){"use strict";var r=e(163),o=e(165);n.exports=function(n){var t=n.stylesheetTag,e=n.baseURL;return`\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <base href="${e}"/>\n    <title>Auth0 Account Linking Extension Administrator</title>\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />\n    <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/codemirror.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.31.0/theme/material.min.css">\n    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />\n    ${t}\n</head>\n<body>\n\n${o(e)}\n\n<main class="container app-container">\n    <div class="row">\n        <div class="col-sm-4">\n            <div class=" list-group" id="locale-menu">\n            </div>\n            <div>\n                <h4>Add new locale \n    <span id="help-button">?</span>\n    <div class="help-container">\n        <div id="help-button-content">\n            <h5>Adding a new locale</h5>\n            <p>You can add custom locales for your users to use. You will need to specify the following data:</p>\n            <ul>\n                <li><strong>ISO Code</strong>: ISO 639-1 Complaint Locale Code. i.e.: es, en, pt.</li>\n                <li><strong>Name</strong>: A friendly name for the locale. i.e.: Spanish, English, Portuguese.</li>\n            </ul>\n        </div>\n    </div>\n</h4>\n                <div class="input-group">\n                    <input id="add-new-locale-code" class="add-new-locale-input form-control" placeholder="Code" />\n                    <input id="add-new-locale-name" class="add-new-locale-input form-control" placeholder="Name" />\n                    <span class="input-group-btn">\n                        <button id="add-new-locale" class="btn btn-primary" type="button">Add</button>\n                    </span>\n                </div>\n            </div>\n        </div>\n        \n        \n        <div class="col-sm-8" id="locale-detail">\n            <h2 id="locale-title"></h2>\n\n            <table id="locale-management-table" class="table table-striped">\n                    <th class="header" width="20%">Name</th>\n                    <th class="header" width="80%">Message</th>\n            </table>\n\n            <button id="locale-management-submit" class="btn btn-primary">Save changes</button>\n            \n            <hr/>\n            \n            <div class="panel panel-danger">\n                <div class="panel-heading">Remove locale</div>\n                <div class="panel-body">\n                    <p>Once removed, you cannot undo this change.</p>\n                    <a class="btn btn-danger" id="remove-locale-btn">Remove locale</a>\n                </div>\n            </p>\n        </div>\n    </div>\n</main>\n\n\n${r}\n</body>\n</html>\n`}},function(n,t,e){"use strict";var r=e(133).getLocales;n.exports=function(){return{method:"GET",config:{auth:"jwt"},path:"/admin/locales",handler:function(n,t){return r().then(t)}}}},function(n,t,e){"use strict";var r=e(133).setLocales;n.exports=function(){return{method:"PUT",config:{auth:"jwt"},path:"/admin/locales",handler:function(n,t){return r(n.payload).then(t)}}}},function(n,t,e){"use strict";var r=e(14),o=r(e(171)),i=r(e(89)),a=r(e(107)),s=r(e(174)),c=e(133),u=c.getSettings,l=c.getLocales;n.exports=function(){return{method:"GET",config:{auth:"jwt"},path:"/admin/settings",handler:(n=(0,s.default)(o.default.mark(function n(t,e){var r,s;return o.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:r=n.sent,s=(0,a.default)(r).map(function(n){return{code:n,name:r[n]._name}}),u().then(function(n){e((0,i.default)({},n,{availableLocales:s}))});case 5:case"end":return n.stop()}},n,this)})),function(t,e){return n.apply(this,arguments)})};var n}},function(n,t,e){n.exports=e(172)},function(n,t,e){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,n.exports=e(173),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(n){r.regeneratorRuntime=void 0}},function(n,t){!function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"==typeof n,l=t.regeneratorRuntime;if(l)u&&(n.exports=l);else{(l=t.regeneratorRuntime=u?n.exports:{}).wrap=x;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},m={};m[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(A([])));y&&y!==r&&o.call(y,a)&&(m=y);var b=L.prototype=k.prototype=Object.create(m);_.prototype=b.constructor=L,L.constructor=_,L[c]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,L):(n.__proto__=L,c in n||(n[c]="GeneratorFunction")),n.prototype=Object.create(b),n},l.awrap=function(n){return{__await:n}},S(T.prototype),T.prototype[s]=function(){return this},l.AsyncIterator=T,l.async=function(n,t,e,r){var o=new T(x(n,t,e,r));return l.isGeneratorFunction(t)?o:o.next().then(function(n){return n.done?n.value:o.next()})},S(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},l.values=A,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!n)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(r,o){return s.type="throw",s.arg=n,t.next=r,o&&(t.method="next",t.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),v},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),C(e),v}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;C(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,r){return this.delegate={iterator:A(n),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=e),v}}}function x(n,t,e,r){var o=t&&t.prototype instanceof k?t:k,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(n,t,e){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var s=j(a,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var c=w(n,t,e);if("normal"===c.type){if(r=e.done?h:d,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=h,e.method="throw",e.arg=c.arg)}}}(n,e,a),i}function w(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}function k(){}function _(){}function L(){}function S(n){["next","throw","return"].forEach(function(t){n[t]=function(n){return this._invoke(t,n)}})}function T(n){var t;this._invoke=function(e,r){function i(){return new Promise(function(t,i){!function t(e,r,i,a){var s=w(n[e],n,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(n){t("next",n,i,a)},function(n){t("throw",n,i,a)}):Promise.resolve(u).then(function(n){c.value=n,i(c)},a)}a(s.arg)}(e,r,t,i)})}return t=t?t.then(i,i):i()}}function j(n,t){var r=n.iterator[t.method];if(r===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,j(n,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,n.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function E(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function C(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function O(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(E,this),this.reset(!0)}function A(n){if(n){var t=n[a];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,i=function t(){for(;++r<n.length;)if(o.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},function(n,t,e){var r=e(15);n.exports=function(n){return function(){var t=this,e=arguments;return new r(function(o,i){var a=n.apply(t,e);function s(n,t){try{var e=a[n](t),s=e.value}catch(n){return void i(n)}e.done?o(s):r.resolve(s).then(c,u)}function c(n){s("next",n)}function u(n){s("throw",n)}c()})}}},function(n,t,e){"use strict";var r=e(176),o=e(133).setSettings,i=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,a=/^#[A-Fa-f0-9]{6}/;n.exports=function(){return{method:"PUT",config:{auth:"jwt",validate:{payload:{template:r.string().required(),locale:r.string().required(),title:r.string().required(),color:r.string().regex(a).required(),logoPath:r.string().regex(i).allow(""),removeOverlay:r.bool().default(!1)}}},path:"/admin/settings",handler:function(n,t){o(n.payload).then(function(n){t(n)})}}}},function(n,t){n.exports=require("joi@9.0.4")},function(n,t,e){"use strict";var r=e(178);n.exports=function(){return{method:"GET",path:"/admin/user",config:{auth:"jwt"},handler:function(n,t){t({email:n.auth.credentials.email,avatar:r(n.auth.credentials.email)})}}}},function(n,t,e){"use strict";var r=e(179);n.exports=function(n){return`https://s.gravatar.com/avatar/${r.createHash("md5").update(n).digest("hex")}?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2F${n.substr(0,2)}.png`}},function(n,t){n.exports=require("crypto")},function(n,t,e){"use strict";var r=e(1).handlers,o=e(5),i=e(10),a=function(n,t,e){n.decorate("server","handlers",{managementClient:r.managementApiClient({domain:o("AUTH0_DOMAIN"),clientId:o("AUTH0_CLIENT_ID"),clientSecret:o("AUTH0_CLIENT_SECRET"),logger:i.error}),validateHookToken:r.validateHookToken(o("AUTH0_DOMAIN"),o("WT_URL"),o("EXTENSION_SECRET"))}),e()};a.attributes={name:"handlers"},n.exports=a},function(n,t,e){"use strict";var r=e(182),o=e(183),i=e(85),a=e(1),s=e(5),c=[{value:"openid"},{value:"profile"}];n.exports.register=function(n,t,e){var u={dashboardAdmin:{key:s("EXTENSION_SECRET"),verifyOptions:{audience:"urn:api-account-linking",issuer:s("PUBLIC_WT_URL"),algorithms:["HS256"]}},resourceServer:{key:o.hapiJwt2Key({cache:!0,rateLimit:!0,jwksRequestsPerMinute:2,jwksUri:`https://${s("AUTH0_DOMAIN")}/.well-known/jwks.json`}),verifyOptions:{audience:"urn:auth0-account-linking-api",issuer:`https://${s("AUTH0_DOMAIN")}/`,algorithms:["RS256"]}}};n.auth.strategy("jwt","jwt",{complete:!0,verifyFunc:function(n,t,e){if(!n)return e(null,!1);var o=t.headers.authorization;if(o&&0===o.indexOf("Bearer ")){var a=o.split(" ")[1];if(n&&n.payload&&n.payload.iss===`https://${s("AUTH0_DOMAIN")}/`)return u.resourceServer.key(n,function(t,o){return t?e(r.wrap(t),null,null):i.verify(a,o,u.resourceServer.verifyOptions,function(t){return t?e(r.unauthorized("Invalid token","Token"),null,null):n.payload.gty&&"client-credentials"!==n.payload.gty?e(r.unauthorized("Invalid token","Token"),null,null):n.payload.sub.endsWith("@clients")?(n.payload.scope&&"string"==typeof n.payload.scope&&(n.payload.scope=n.payload.scope.split(" ")),e(null,!0,n.payload)):e(r.unauthorized("Invalid token","Token"),null,null)})});if(n&&n.payload&&n.payload.iss===s("PUBLIC_WT_URL"))return i.verify(a,u.dashboardAdmin.key,u.dashboardAdmin.verifyOptions,function(t){return t?e(r.unauthorized("Invalid token","Token"),null,null):n.payload.access_token&&n.payload.access_token.length?(n.payload.scope=c.map(function(n){return n.value}),e(null,!0,n.payload)):e(r.unauthorized("Invalid token","Token"),null,null)})}return e(null,!1)}}),n.auth.default("jwt");var l={register:a.plugins.dashboardAdminSession,options:{stateKey:"account-linking-admin-state",sessionStorageKey:"com.auth0.account_linking.admin_ui.session_token",rta:s("AUTH0_RTA").replace("https://",""),domain:s("AUTH0_DOMAIN"),scopes:"",baseUrl:s("PUBLIC_WT_URL"),audience:"urn:api-account-linking",secret:s("EXTENSION_SECRET"),clientName:"auth0-account-link",onLoginSuccess:function(n,t,e){return n?(n.scope=c.map(function(n){return n.value}),e(null,!0,n)):e(null,!1)}}};n.register(l,function(n){n&&e(n),e()})},n.exports.register.attributes={name:"auth"}},function(n,t){n.exports=require("boom@3.2.2")},function(n,t){n.exports=require("jwks-rsa@1.1.1")}]);
