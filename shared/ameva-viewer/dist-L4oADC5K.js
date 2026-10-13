import { o as __toESM, t as __commonJSMin } from "./rolldown-runtime-DY7j01NX.js";
//#region node_modules/lodash/lodash.js
var require_lodash = /* @__PURE__ */ __commonJSMin(((e, t) => {
	(function() {
		var n, r = "4.17.23", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", o = "Expected a function", s = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", l = 500, u = "__lodash_placeholder__", d = 1, f = 2, p = 4, m = 1, h = 2, g = 1, _ = 2, v = 4, y = 8, b = 16, x = 32, S = 64, C = 128, te = 256, ne = 512, ie = 30, w = "...", T = 800, se = 16, ue = 1, D = 2, de = 3, pe = Infinity, he = 9007199254740991, ge = 17976931348623157e292, ve = NaN, Se = 4294967295, we = Se - 1, Te = Se >>> 1, Ee = [
			["ary", C],
			["bind", g],
			["bindKey", _],
			["curry", y],
			["curryRight", b],
			["flip", ne],
			["partial", x],
			["partialRight", S],
			["rearg", te]
		], ke = "[object Arguments]", Ae = "[object Array]", Me = "[object AsyncFunction]", Ne = "[object Boolean]", Pe = "[object Date]", Fe = "[object DOMException]", Ie = "[object Error]", ze = "[object Function]", Be = "[object GeneratorFunction]", He = "[object Map]", Ue = "[object Number]", We = "[object Null]", qe = "[object Object]", Ye = "[object Promise]", Ze = "[object Proxy]", Qe = "[object RegExp]", $e = "[object Set]", et = "[object String]", rt = "[object Symbol]", ot = "[object Undefined]", lt = "[object WeakMap]", mt = "[object WeakSet]", gt = "[object ArrayBuffer]", k = "[object DataView]", A = "[object Float32Array]", _t = "[object Float64Array]", vt = "[object Int8Array]", yt = "[object Int16Array]", bt = "[object Int32Array]", j = "[object Uint8Array]", St = "[object Uint8ClampedArray]", Ct = "[object Uint16Array]", Et = "[object Uint32Array]", Dt = /\b__p \+= '';/g, At = /\b(__p \+=) '' \+/g, Mt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pt = /&(?:amp|lt|gt|quot|#39);/g, Ft = /[&<>"']/g, It = RegExp(Pt.source), Lt = RegExp(Ft.source), zt = /<%-([\s\S]+?)%>/g, Ut = /<%([\s\S]+?)%>/g, Gt = /<%=([\s\S]+?)%>/g, Kt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qt = /^\w*$/, Yt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qt = /[\\^$.*+?()[\]{}|]/g, $t = RegExp(Qt.source), en = /^\s+/, an = /\s/, on = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sn = /\{\n\/\* \[wrapped with (.+)\] \*/, _n = /,? & /, vn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Sn = /[()=,{}\[\]\/\s]/, wn = /\\(\\)?/g, En = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, On = /\w*$/, An = /^[-+]0x[0-9a-f]+$/i, jn = /^0b[01]+$/i, Pn = /^\[object .+?Constructor\]$/, In = /^0o[0-7]+$/i, Hn = /^(?:0|[1-9]\d*)$/, qn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yn = /($^)/, er = /['\n\r\u2028\u2029\\]/g, tr = "\\ud800-\\udfff", M = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", nr = "\\u2700-\\u27bf", rr = "a-z\\xdf-\\xf6\\xf8-\\xff", cr = "\\xac\\xb1\\xd7\\xf7", fr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", _r = "\\u2000-\\u206f", vr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Sr = "A-Z\\xc0-\\xd6\\xd8-\\xde", Cr = "\\ufe0e\\ufe0f", Or = cr + fr + _r + vr, Ar = "['’]", jr = "[" + tr + "]", Ir = "[" + Or + "]", Kr = "[" + M + "]", Jr = "\\d+", N = "[" + nr + "]", Yr = "[" + rr + "]", Xr = "[^" + tr + Or + Jr + nr + rr + Sr + "]", Zr = "\\ud83c[\\udffb-\\udfff]", Qr = "(?:" + Kr + "|" + Zr + ")", ti = "[^" + tr + "]", ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", ri = "[\\ud800-\\udbff][\\udc00-\\udfff]", ii = "[" + Sr + "]", ai = "\\u200d", oi = "(?:" + Yr + "|" + Xr + ")", si = "(?:" + ii + "|" + Xr + ")", ci = "(?:" + Ar + "(?:d|ll|m|re|s|t|ve))?", ui = "(?:" + Ar + "(?:D|LL|M|RE|S|T|VE))?", P = Qr + "?", F = "[" + Cr + "]?", di = "(?:" + ai + "(?:" + [
			ti,
			ni,
			ri
		].join("|") + ")" + F + P + ")*", fi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ia = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", oa = F + P + di, ga = "(?:" + [
			N,
			ni,
			ri
		].join("|") + ")" + oa, _a = "(?:" + [
			ti + Kr + "?",
			Kr,
			ni,
			ri,
			jr
		].join("|") + ")", va = RegExp(Ar, "g"), ya = RegExp(Kr, "g"), ba = RegExp(Zr + "(?=" + Zr + ")|" + _a + oa, "g"), xa = RegExp([
			ii + "?" + Yr + "+" + ci + "(?=" + [
				Ir,
				ii,
				"$"
			].join("|") + ")",
			si + "+" + ui + "(?=" + [
				Ir,
				ii + oi,
				"$"
			].join("|") + ")",
			ii + "?" + oi + "+" + ci,
			ii + "+" + ui,
			ia,
			fi,
			Jr,
			ga
		].join("|"), "g"), Sa = RegExp("[" + ai + tr + M + Cr + "]"), Ca = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, wa = /* @__PURE__ */ "Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout".split("."), Ta = -1, I = {};
		I[A] = I[_t] = I[vt] = I[yt] = I[bt] = I[j] = I[St] = I[Ct] = I[Et] = !0, I[ke] = I[Ae] = I[gt] = I[Ne] = I[k] = I[Pe] = I[Ie] = I[ze] = I[He] = I[Ue] = I[qe] = I[Qe] = I[$e] = I[et] = I[lt] = !1;
		var L = {};
		L[ke] = L[Ae] = L[gt] = L[k] = L[Ne] = L[Pe] = L[A] = L[_t] = L[vt] = L[yt] = L[bt] = L[He] = L[Ue] = L[qe] = L[Qe] = L[$e] = L[et] = L[rt] = L[j] = L[St] = L[Ct] = L[Et] = !0, L[Ie] = L[ze] = L[lt] = !1;
		var Ea = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "A",
			Å: "A",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "a",
			å: "a",
			Ç: "C",
			ç: "c",
			Ð: "D",
			ð: "d",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			Ñ: "N",
			ñ: "n",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "O",
			Ø: "O",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "o",
			ø: "o",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "U",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "u",
			Ý: "Y",
			ý: "y",
			ÿ: "y",
			Æ: "Ae",
			æ: "ae",
			Þ: "Th",
			þ: "th",
			ß: "ss",
			Ā: "A",
			Ă: "A",
			Ą: "A",
			ā: "a",
			ă: "a",
			ą: "a",
			Ć: "C",
			Ĉ: "C",
			Ċ: "C",
			Č: "C",
			ć: "c",
			ĉ: "c",
			ċ: "c",
			č: "c",
			Ď: "D",
			Đ: "D",
			ď: "d",
			đ: "d",
			Ē: "E",
			Ĕ: "E",
			Ė: "E",
			Ę: "E",
			Ě: "E",
			ē: "e",
			ĕ: "e",
			ė: "e",
			ę: "e",
			ě: "e",
			Ĝ: "G",
			Ğ: "G",
			Ġ: "G",
			Ģ: "G",
			ĝ: "g",
			ğ: "g",
			ġ: "g",
			ģ: "g",
			Ĥ: "H",
			Ħ: "H",
			ĥ: "h",
			ħ: "h",
			Ĩ: "I",
			Ī: "I",
			Ĭ: "I",
			Į: "I",
			İ: "I",
			ĩ: "i",
			ī: "i",
			ĭ: "i",
			į: "i",
			ı: "i",
			Ĵ: "J",
			ĵ: "j",
			Ķ: "K",
			ķ: "k",
			ĸ: "k",
			Ĺ: "L",
			Ļ: "L",
			Ľ: "L",
			Ŀ: "L",
			Ł: "L",
			ĺ: "l",
			ļ: "l",
			ľ: "l",
			ŀ: "l",
			ł: "l",
			Ń: "N",
			Ņ: "N",
			Ň: "N",
			Ŋ: "N",
			ń: "n",
			ņ: "n",
			ň: "n",
			ŋ: "n",
			Ō: "O",
			Ŏ: "O",
			Ő: "O",
			ō: "o",
			ŏ: "o",
			ő: "o",
			Ŕ: "R",
			Ŗ: "R",
			Ř: "R",
			ŕ: "r",
			ŗ: "r",
			ř: "r",
			Ś: "S",
			Ŝ: "S",
			Ş: "S",
			Š: "S",
			ś: "s",
			ŝ: "s",
			ş: "s",
			š: "s",
			Ţ: "T",
			Ť: "T",
			Ŧ: "T",
			ţ: "t",
			ť: "t",
			ŧ: "t",
			Ũ: "U",
			Ū: "U",
			Ŭ: "U",
			Ů: "U",
			Ű: "U",
			Ų: "U",
			ũ: "u",
			ū: "u",
			ŭ: "u",
			ů: "u",
			ű: "u",
			ų: "u",
			Ŵ: "W",
			ŵ: "w",
			Ŷ: "Y",
			ŷ: "y",
			Ÿ: "Y",
			Ź: "Z",
			Ż: "Z",
			Ž: "Z",
			ź: "z",
			ż: "z",
			ž: "z",
			Ĳ: "IJ",
			ĳ: "ij",
			Œ: "Oe",
			œ: "oe",
			ŉ: "'n",
			ſ: "s"
		}, Da = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}, Oa = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": "\"",
			"&#39;": "'"
		}, ka = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		}, Aa = parseFloat, Ma = parseInt, Na = typeof global == "object" && global && global.Object === Object && global, Pa = typeof self == "object" && self && self.Object === Object && self, Fa = Na || Pa || Function("return this")(), Ia = typeof e == "object" && e && !e.nodeType && e, La = Ia && typeof t == "object" && t && !t.nodeType && t, Ra = La && La.exports === Ia, za = Ra && Na.process, Ba = function() {
			try {
				return La && La.require && La.require("util").types || za && za.binding && za.binding("util");
			} catch {}
		}(), Va = Ba && Ba.isArrayBuffer, Ua = Ba && Ba.isDate, Wa = Ba && Ba.isMap, Ga = Ba && Ba.isRegExp, $a = Ba && Ba.isSet, Mo = Ba && Ba.isTypedArray;
		function No(e, t, n) {
			switch (n.length) {
				case 0: return e.call(t);
				case 1: return e.call(t, n[0]);
				case 2: return e.call(t, n[0], n[1]);
				case 3: return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		}
		function Ro(e, t, n, r) {
			for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
				var o = e[i];
				t(r, o, n(o), e);
			}
			return r;
		}
		function zo(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
			return e;
		}
		function Bo(e, t) {
			for (var n = e == null ? 0 : e.length; n-- && t(e[n], n, e) !== !1;);
			return e;
		}
		function Vo(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
			return !0;
		}
		function Uo(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				t(o, n, e) && (a[i++] = o);
			}
			return a;
		}
		function Wo(e, t) {
			return !!(e != null && e.length) && Ks(e, t, 0) > -1;
		}
		function Go(e, t, n) {
			for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
			return !1;
		}
		function B(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
			return i;
		}
		function Jo(e, t) {
			for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
			return e;
		}
		function js(e, t, n, r) {
			var i = -1, a = e == null ? 0 : e.length;
			for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
			return n;
		}
		function Ms(e, t, n, r) {
			var i = e == null ? 0 : e.length;
			for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
			return n;
		}
		function Ns(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
			return !1;
		}
		var V = Qs("length");
		function Vs(e) {
			return e.split("");
		}
		function Hs(e) {
			return e.match(vn) || [];
		}
		function Us(e, t, n) {
			var r;
			return n(e, function(e, n, i) {
				if (t(e, n, i)) return r = n, !1;
			}), r;
		}
		function Gs(e, t, n, r) {
			for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
			return -1;
		}
		function Ks(e, t, n) {
			return t === t ? $u(e, t, n) : Gs(e, Ys, n);
		}
		function qs(e, t, n, r) {
			for (var i = n - 1, a = e.length; ++i < a;) if (r(e[i], t)) return i;
			return -1;
		}
		function Ys(e) {
			return e !== e;
		}
		function Xs(e, t) {
			var n = e == null ? 0 : e.length;
			return n ? iu(e, t) / n : ve;
		}
		function Qs(e) {
			return function(t) {
				return t == null ? n : t[e];
			};
		}
		function tl(e) {
			return function(t) {
				return e == null ? n : e[t];
			};
		}
		function tu(e, t, n, r, i) {
			return i(e, function(e, i, a) {
				n = r ? (r = !1, e) : t(n, e, i, a);
			}), n;
		}
		function nu(e, t) {
			var n = e.length;
			for (e.sort(t); n--;) e[n] = e[n].value;
			return e;
		}
		function iu(e, t) {
			for (var r, i = -1, a = e.length; ++i < a;) {
				var o = t(e[i]);
				o !== n && (r = r === n ? o : r + o);
			}
			return r;
		}
		function au(e, t) {
			for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
			return r;
		}
		function su(e, t) {
			return B(t, function(t) {
				return [t, e[t]];
			});
		}
		function cu(e) {
			return e && e.slice(0, xd(e) + 1).replace(en, "");
		}
		function lu(e) {
			return function(t) {
				return e(t);
			};
		}
		function uu(e, t) {
			return B(t, function(t) {
				return e[t];
			});
		}
		function fu(e, t) {
			return e.has(t);
		}
		function pu(e, t) {
			for (var n = -1, r = e.length; ++n < r && Ks(t, e[n], 0) > -1;);
			return n;
		}
		function mu(e, t) {
			for (var n = e.length; n-- && Ks(t, e[n], 0) > -1;);
			return n;
		}
		function hu(e, t) {
			for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
			return r;
		}
		var gu = tl(Ea), _u = tl(Da);
		function yu(e) {
			return "\\" + ka[e];
		}
		function bu(e, t) {
			return e == null ? n : e[t];
		}
		function xu(e) {
			return Sa.test(e);
		}
		function wu(e) {
			return Ca.test(e);
		}
		function Tu(e) {
			for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
			return n;
		}
		function Eu(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e, r) {
				n[++t] = [r, e];
			}), n;
		}
		function Du(e, t) {
			return function(n) {
				return e(t(n));
			};
		}
		function Au(e, t) {
			for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
				var o = e[n];
				(o === t || o === u) && (e[n] = u, a[i++] = n);
			}
			return a;
		}
		function Fu(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = e;
			}), n;
		}
		function Iu(e) {
			var t = -1, n = Array(e.size);
			return e.forEach(function(e) {
				n[++t] = [e, e];
			}), n;
		}
		function $u(e, t, n) {
			for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
			return -1;
		}
		function _d(e, t, n) {
			for (var r = n + 1; r--;) if (e[r] === t) return r;
			return r;
		}
		function vd(e) {
			return xu(e) ? H(e) : V(e);
		}
		function yd(e) {
			return xu(e) ? Td(e) : Vs(e);
		}
		function xd(e) {
			for (var t = e.length; t-- && an.test(e.charAt(t)););
			return t;
		}
		var wd = tl(Oa);
		function H(e) {
			for (var t = ba.lastIndex = 0; ba.test(e);) ++t;
			return t;
		}
		function Td(e) {
			return e.match(ba) || [];
		}
		function Md(e) {
			return e.match(xa) || [];
		}
		var Rd = (function e(t) {
			t = t == null ? Fa : Rd.defaults(Fa.Object(), t, Rd.pick(Fa, wa));
			var r = t.Array, a = t.Date, s = t.Error, l = t.Function, ie = t.Math, w = t.Object, T = t.RegExp, se = t.String, D = t.TypeError, de = r.prototype, ge = l.prototype, an = w.prototype, vn = t["__core-js_shared__"], tr = ge.toString, M = an.hasOwnProperty, nr = 0, rr = function() {
				var e = /[^.]+$/.exec(vn && vn.keys && vn.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : "";
			}(), cr = an.toString, fr = tr.call(w), _r = Fa._, vr = T("^" + tr.call(M).replace(Qt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Sr = Ra ? t.Buffer : n, Cr = t.Symbol, Or = t.Uint8Array, Ar = Sr ? Sr.allocUnsafe : n, jr = Du(w.getPrototypeOf, w), Ir = w.create, Kr = an.propertyIsEnumerable, Jr = de.splice, N = Cr ? Cr.isConcatSpreadable : n, Yr = Cr ? Cr.iterator : n, Xr = Cr ? Cr.toStringTag : n, Zr = function() {
				try {
					var e = by(w, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			}(), Qr = t.clearTimeout !== Fa.clearTimeout && t.clearTimeout, ti = a && a.now !== Fa.Date.now && a.now, ni = t.setTimeout !== Fa.setTimeout && t.setTimeout, ri = ie.ceil, ii = ie.floor, ai = w.getOwnPropertySymbols, oi = Sr ? Sr.isBuffer : n, si = t.isFinite, ci = de.join, ui = Du(w.keys, w), P = ie.max, F = ie.min, di = a.now, fi = t.parseInt, ia = ie.random, oa = de.reverse, ga = by(t, "DataView"), _a = by(t, "Map"), ba = by(t, "Promise"), xa = by(t, "Set"), Sa = by(t, "WeakMap"), Ca = by(w, "create"), Ea = Sa && new Sa(), Da = {}, Oa = ax(ga), ka = ax(_a), Na = ax(ba), Pa = ax(xa), Ia = ax(Sa), La = Cr ? Cr.prototype : n, za = La ? La.valueOf : n, Ba = La ? La.toString : n;
			function V(e) {
				if (XC(e) && !J(e) && !(e instanceof H)) {
					if (e instanceof $u) return e;
					if (M.call(e, "__wrapped__")) return sx(e);
				}
				return new $u(e);
			}
			var Vs = function() {
				function e() {}
				return function(t) {
					if (!Y(t)) return {};
					if (Ir) return Ir(t);
					e.prototype = t;
					var r = new e();
					return e.prototype = n, r;
				};
			}();
			function tl() {}
			function $u(e, t) {
				this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n;
			}
			V.templateSettings = {
				escape: zt,
				evaluate: Ut,
				interpolate: Gt,
				variable: "",
				imports: { _: V }
			}, V.prototype = tl.prototype, V.prototype.constructor = V, $u.prototype = Vs(tl.prototype), $u.prototype.constructor = $u;
			function H(e) {
				this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Se, this.__views__ = [];
			}
			function Td() {
				var e = new H(this.__wrapped__);
				return e.__actions__ = Mv(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Mv(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Mv(this.__views__), e;
			}
			function zd() {
				if (this.__filtered__) {
					var e = new H(this);
					e.__dir__ = -1, e.__filtered__ = !0;
				} else e = this.clone(), e.__dir__ *= -1;
				return e;
			}
			function Bd() {
				var e = this.__wrapped__.value(), t = this.__dir__, n = J(e), r = t < 0, i = n ? e.length : 0, a = Ty(0, i, this.__views__), o = a.start, s = a.end, c = s - o, l = r ? s : o - 1, u = this.__iteratees__, d = u.length, f = 0, p = F(c, this.__takeCount__);
				if (!n || !r && i == c && p == c) return pv(e, this.__actions__);
				var m = [];
				outer: for (; c-- && f < p;) {
					l += t;
					for (var h = -1, g = e[l]; ++h < d;) {
						var _ = u[h], v = _.iteratee, y = _.type, b = v(g);
						if (y == 2) g = b;
						else if (!b) {
							if (y == ue) continue outer;
							break outer;
						}
					}
					m[f++] = g;
				}
				return m;
			}
			H.prototype = Vs(tl.prototype), H.prototype.constructor = H;
			function Vd(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Hd() {
				this.__data__ = Ca ? Ca(null) : {}, this.size = 0;
			}
			function Ud(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= +!!t, t;
			}
			function Wd(e) {
				var t = this.__data__;
				if (Ca) {
					var r = t[e];
					return r === c ? n : r;
				}
				return M.call(t, e) ? t[e] : n;
			}
			function Gd(e) {
				var t = this.__data__;
				return Ca ? t[e] !== n : M.call(t, e);
			}
			function qd(e, t) {
				var r = this.__data__;
				return this.size += +!this.has(e), r[e] = Ca && t === n ? c : t, this;
			}
			Vd.prototype.clear = Hd, Vd.prototype.delete = Ud, Vd.prototype.get = Wd, Vd.prototype.has = Gd, Vd.prototype.set = qd;
			function Ep(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function kp() {
				this.__data__ = [], this.size = 0;
			}
			function Pp(e) {
				var t = this.__data__, n = Bg(t, e);
				return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Jr.call(t, n, 1), --this.size, !0);
			}
			function Bp(e) {
				var t = this.__data__, r = Bg(t, e);
				return r < 0 ? n : t[r][1];
			}
			function om(e) {
				return Bg(this.__data__, e) > -1;
			}
			function uh(e, t) {
				var n = this.__data__, r = Bg(n, e);
				return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
			}
			Ep.prototype.clear = kp, Ep.prototype.delete = Pp, Ep.prototype.get = Bp, Ep.prototype.has = om, Ep.prototype.set = uh;
			function ph(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.clear(); ++t < n;) {
					var r = e[t];
					this.set(r[0], r[1]);
				}
			}
			function Ah() {
				this.size = 0, this.__data__ = {
					hash: new Vd(),
					map: new (_a || Ep)(),
					string: new Vd()
				};
			}
			function rg(e) {
				var t = vy(this, e).delete(e);
				return this.size -= +!!t, t;
			}
			function ug(e) {
				return vy(this, e).get(e);
			}
			function xg(e) {
				return vy(this, e).has(e);
			}
			function Sg(e, t) {
				var n = vy(this, e), r = n.size;
				return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
			}
			ph.prototype.clear = Ah, ph.prototype.delete = rg, ph.prototype.get = ug, ph.prototype.has = xg, ph.prototype.set = Sg;
			function Cg(e) {
				var t = -1, n = e == null ? 0 : e.length;
				for (this.__data__ = new ph(); ++t < n;) this.add(e[t]);
			}
			function Tg(e) {
				return this.__data__.set(e, c), this;
			}
			function Eg(e) {
				return this.__data__.has(e);
			}
			Cg.prototype.add = Cg.prototype.push = Tg, Cg.prototype.has = Eg;
			function Dg(e) {
				var t = this.__data__ = new Ep(e);
				this.size = t.size;
			}
			function kg() {
				this.__data__ = new Ep(), this.size = 0;
			}
			function Ag(e) {
				var t = this.__data__, n = t.delete(e);
				return this.size = t.size, n;
			}
			function jg(e) {
				return this.__data__.get(e);
			}
			function Mg(e) {
				return this.__data__.has(e);
			}
			function Ng(e, t) {
				var n = this.__data__;
				if (n instanceof Ep) {
					var r = n.__data__;
					if (!_a || r.length < i - 1) return r.push([e, t]), this.size = ++n.size, this;
					n = this.__data__ = new ph(r);
				}
				return n.set(e, t), this.size = n.size, this;
			}
			Dg.prototype.clear = kg, Dg.prototype.delete = Ag, Dg.prototype.get = jg, Dg.prototype.has = Mg, Dg.prototype.set = Ng;
			function Pg(e, t) {
				var n = J(e), r = !n && PC(e), i = !n && !r && zC(e), a = !n && !r && !i && dw(e), o = n || r || i || a, s = o ? au(e.length, se) : [], c = s.length;
				for (var l in e) (t || M.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Ny(l, c))) && s.push(l);
				return s;
			}
			function Fg(e) {
				var t = e.length;
				return t ? e[q_(0, t - 1)] : n;
			}
			function Ig(e, t) {
				return nx(Mv(e), Kg(t, 0, e.length));
			}
			function Lg(e) {
				return nx(Mv(e));
			}
			function Rg(e, t, r) {
				(r !== n && !jC(e[t], r) || r === n && !(t in e)) && Wg(e, t, r);
			}
			function zg(e, t, r) {
				var i = e[t];
				(!(M.call(e, t) && jC(i, r)) || r === n && !(t in e)) && Wg(e, t, r);
			}
			function Bg(e, t) {
				for (var n = e.length; n--;) if (jC(e[n][0], t)) return n;
				return -1;
			}
			function Vg(e, t, n, r) {
				return Qg(e, function(e, i, a) {
					t(r, e, n(e), a);
				}), r;
			}
			function Hg(e, t) {
				return e && Nv(t, Gw(t), e);
			}
			function Ug(e, t) {
				return e && Nv(t, Kw(t), e);
			}
			function Wg(e, t, n) {
				t == "__proto__" && Zr ? Zr(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : e[t] = n;
			}
			function Gg(e, t) {
				for (var i = -1, a = t.length, o = r(a), s = e == null; ++i < a;) o[i] = s ? n : zw(e, t[i]);
				return o;
			}
			function Kg(e, t, r) {
				return e === e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), e;
			}
			function qg(e, t, r, i, a, o) {
				var s, c = t & d, l = t & f, u = t & p;
				if (r && (s = a ? r(e, i, a, o) : r(e)), s !== n) return s;
				if (!Y(e)) return e;
				var m = J(e);
				if (m) {
					if (s = Oy(e), !c) return Mv(e, s);
				} else {
					var h = wy(e), g = h == ze || h == Be;
					if (zC(e)) return Sv(e, c);
					if (h == qe || h == ke || g && !a) {
						if (s = l || g ? {} : ky(e), !c) return l ? Fv(e, Ug(s, e)) : Pv(e, Hg(s, e));
					} else {
						if (!L[h]) return a ? e : {};
						s = Ay(e, h, c);
					}
				}
				o ||= new Dg();
				var _ = o.get(e);
				if (_) return _;
				o.set(e, s), cw(e) ? e.forEach(function(n) {
					s.add(qg(n, t, r, n, e, o));
				}) : ZC(e) && e.forEach(function(n, i) {
					s.set(i, qg(n, t, r, i, e, o));
				});
				var v = m ? n : (u ? l ? my : py : l ? Kw : Gw)(e);
				return zo(v || e, function(n, i) {
					v && (i = n, n = e[i]), zg(s, i, qg(n, t, r, i, e, o));
				}), s;
			}
			function Jg(e) {
				var t = Gw(e);
				return function(n) {
					return Yg(n, e, t);
				};
			}
			function Yg(e, t, r) {
				var i = r.length;
				if (e == null) return !i;
				for (e = w(e); i--;) {
					var a = r[i], o = t[a], s = e[a];
					if (s === n && !(a in e) || !o(s)) return !1;
				}
				return !0;
			}
			function Xg(e, t, r) {
				if (typeof e != "function") throw new D(o);
				return Qy(function() {
					e.apply(n, r);
				}, t);
			}
			function Zg(e, t, n, r) {
				var a = -1, o = Wo, s = !0, c = e.length, l = [], u = t.length;
				if (!c) return l;
				n && (t = B(t, lu(n))), r ? (o = Go, s = !1) : t.length >= i && (o = fu, s = !1, t = new Cg(t));
				outer: for (; ++a < c;) {
					var d = e[a], f = n == null ? d : n(d);
					if (d = r || d !== 0 ? d : 0, s && f === f) {
						for (var p = u; p--;) if (t[p] === f) continue outer;
						l.push(d);
					} else o(t, f, r) || l.push(d);
				}
				return l;
			}
			var Qg = Rv(s_), $g = Rv(c_, !0);
			function e_(e, t) {
				var n = !0;
				return Qg(e, function(e, r, i) {
					return n = !!t(e, r, i), n;
				}), n;
			}
			function t_(e, t, r) {
				for (var i = -1, a = e.length; ++i < a;) {
					var o = e[i], s = t(o);
					if (s != null && (c === n ? s === s && !uw(s) : r(s, c))) var c = s, l = o;
				}
				return l;
			}
			function n_(e, t, r, i) {
				var a = e.length;
				for (r = X(r), r < 0 && (r = -r > a ? 0 : a + r), i = i === n || i > a ? a : X(i), i < 0 && (i += a), i = r > i ? 0 : yw(i); r < i;) e[r++] = t;
				return e;
			}
			function r_(e, t) {
				var n = [];
				return Qg(e, function(e, r, i) {
					t(e, r, i) && n.push(e);
				}), n;
			}
			function i_(e, t, n, r, i) {
				var a = -1, o = e.length;
				for (n ||= My, i ||= []; ++a < o;) {
					var s = e[a];
					t > 0 && n(s) ? t > 1 ? i_(s, t - 1, n, r, i) : Jo(i, s) : r || (i[i.length] = s);
				}
				return i;
			}
			var a_ = zv(), o_ = zv(!0);
			function s_(e, t) {
				return e && a_(e, t, Gw);
			}
			function c_(e, t) {
				return e && o_(e, t, Gw);
			}
			function l_(e, t) {
				return Uo(t, function(t) {
					return qC(e[t]);
				});
			}
			function u_(e, t) {
				t = vv(t, e);
				for (var r = 0, i = t.length; e != null && r < i;) e = e[ix(t[r++])];
				return r && r == i ? e : n;
			}
			function d_(e, t, n) {
				var r = t(e);
				return J(e) ? r : Jo(r, n(e));
			}
			function f_(e) {
				return e == null ? e === n ? ot : We : Xr && Xr in w(e) ? xy(e) : Ky(e);
			}
			function p_(e, t) {
				return e > t;
			}
			function m_(e, t) {
				return e != null && M.call(e, t);
			}
			function h_(e, t) {
				return e != null && t in w(e);
			}
			function g_(e, t, n) {
				return e >= F(t, n) && e < P(t, n);
			}
			function __(e, t, i) {
				for (var a = i ? Go : Wo, o = e[0].length, s = e.length, c = s, l = r(s), u = Infinity, d = []; c--;) {
					var f = e[c];
					c && t && (f = B(f, lu(t))), u = F(f.length, u), l[c] = !i && (t || o >= 120 && f.length >= 120) ? new Cg(c && f) : n;
				}
				f = e[0];
				var p = -1, m = l[0];
				outer: for (; ++p < o && d.length < u;) {
					var h = f[p], g = t ? t(h) : h;
					if (h = i || h !== 0 ? h : 0, !(m ? fu(m, g) : a(d, g, i))) {
						for (c = s; --c;) {
							var _ = l[c];
							if (!(_ ? fu(_, g) : a(e[c], g, i))) continue outer;
						}
						m && m.push(g), d.push(h);
					}
				}
				return d;
			}
			function v_(e, t, n, r) {
				return s_(e, function(e, i, a) {
					t(r, n(e), i, a);
				}), r;
			}
			function y_(e, t, r) {
				t = vv(t, e), e = Jy(e, t);
				var i = e == null ? e : e[ix(Mx(t))];
				return i == null ? n : No(i, e, r);
			}
			function b_(e) {
				return XC(e) && f_(e) == ke;
			}
			function x_(e) {
				return XC(e) && f_(e) == gt;
			}
			function S_(e) {
				return XC(e) && f_(e) == Pe;
			}
			function C_(e, t, n, r, i) {
				return e === t ? !0 : e == null || t == null || !XC(e) && !XC(t) ? e !== e && t !== t : w_(e, t, n, r, C_, i);
			}
			function w_(e, t, n, r, i, a) {
				var o = J(e), s = J(t), c = o ? Ae : wy(e), l = s ? Ae : wy(t);
				c = c == ke ? qe : c, l = l == ke ? qe : l;
				var u = c == qe, d = l == qe, f = c == l;
				if (f && zC(e)) {
					if (!zC(t)) return !1;
					o = !0, u = !1;
				}
				if (f && !u) return a ||= new Dg(), o || dw(e) ? ly(e, t, n, r, i, a) : uy(e, t, c, n, r, i, a);
				if (!(n & m)) {
					var p = u && M.call(e, "__wrapped__"), h = d && M.call(t, "__wrapped__");
					if (p || h) {
						var g = p ? e.value() : e, _ = h ? t.value() : t;
						return a ||= new Dg(), i(g, _, n, r, a);
					}
				}
				return f ? (a ||= new Dg(), dy(e, t, n, r, i, a)) : !1;
			}
			function T_(e) {
				return XC(e) && wy(e) == He;
			}
			function E_(e, t, r, i) {
				var a = r.length, o = a, s = !i;
				if (e == null) return !o;
				for (e = w(e); a--;) {
					var c = r[a];
					if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
				}
				for (; ++a < o;) {
					c = r[a];
					var l = c[0], u = e[l], d = c[1];
					if (s && c[2]) {
						if (u === n && !(l in e)) return !1;
					} else {
						var f = new Dg();
						if (i) var p = i(u, d, l, e, t, f);
						if (!(p === n ? C_(d, u, m | h, i, f) : p)) return !1;
					}
				}
				return !0;
			}
			function D_(e) {
				return !Y(e) || Ry(e) ? !1 : (qC(e) ? vr : Pn).test(ax(e));
			}
			function O_(e) {
				return XC(e) && f_(e) == Qe;
			}
			function k_(e) {
				return XC(e) && wy(e) == $e;
			}
			function A_(e) {
				return XC(e) && YC(e.length) && !!I[f_(e)];
			}
			function j_(e) {
				return typeof e == "function" ? e : e == null ? $T : typeof e == "object" ? J(e) ? L_(e[0], e[1]) : I_(e) : fE(e);
			}
			function M_(e) {
				if (!By(e)) return ui(e);
				var t = [];
				for (var n in w(e)) M.call(e, n) && n != "constructor" && t.push(n);
				return t;
			}
			function N_(e) {
				if (!Y(e)) return Gy(e);
				var t = By(e), n = [];
				for (var r in e) r == "constructor" && (t || !M.call(e, r)) || n.push(r);
				return n;
			}
			function P_(e, t) {
				return e < t;
			}
			function F_(e, t) {
				var n = -1, i = IC(e) ? r(e.length) : [];
				return Qg(e, function(e, r, a) {
					i[++n] = t(e, r, a);
				}), i;
			}
			function I_(e) {
				var t = yy(e);
				return t.length == 1 && t[0][2] ? Hy(t[0][0], t[0][1]) : function(n) {
					return n === e || E_(n, e, t);
				};
			}
			function L_(e, t) {
				return Fy(e) && Vy(t) ? Hy(ix(e), t) : function(r) {
					var i = zw(r, e);
					return i === n && i === t ? Vw(r, e) : C_(t, i, m | h);
				};
			}
			function R_(e, t, r, i, a) {
				e !== t && a_(t, function(o, s) {
					if (a ||= new Dg(), Y(o)) z_(e, t, s, r, R_, i, a);
					else {
						var c = i ? i(Xy(e, s), o, s + "", e, t, a) : n;
						c === n && (c = o), Rg(e, s, c);
					}
				}, Kw);
			}
			function z_(e, t, r, i, a, o, s) {
				var c = Xy(e, r), l = Xy(t, r), u = s.get(l);
				if (u) {
					Rg(e, r, u);
					return;
				}
				var d = o ? o(c, l, r + "", e, t, s) : n, f = d === n;
				if (f) {
					var p = J(l), m = !p && zC(l), h = !p && !m && dw(l);
					d = l, p || m || h ? J(c) ? d = c : LC(c) ? d = Mv(c) : m ? (f = !1, d = Sv(l, !0)) : h ? (f = !1, d = Dv(l, !0)) : d = [] : aw(l) || PC(l) ? (d = c, PC(c) ? d = xw(c) : (!Y(c) || qC(c)) && (d = ky(l))) : f = !1;
				}
				f && (s.set(l, d), a(d, l, i, o, s), s.delete(l)), Rg(e, r, d);
			}
			function B_(e, t) {
				var r = e.length;
				if (r) return t += t < 0 ? r : 0, Ny(t, r) ? e[t] : n;
			}
			function V_(e, t, n) {
				t = t.length ? B(t, function(e) {
					return J(e) ? function(t) {
						return u_(t, e.length === 1 ? e[0] : e);
					} : e;
				}) : [$T];
				var r = -1;
				return t = B(t, lu(K())), nu(F_(e, function(e, n, i) {
					return {
						criteria: B(t, function(t) {
							return t(e);
						}),
						index: ++r,
						value: e
					};
				}), function(e, t) {
					return kv(e, t, n);
				});
			}
			function H_(e, t) {
				return U_(e, t, function(t, n) {
					return Vw(e, n);
				});
			}
			function U_(e, t, n) {
				for (var r = -1, i = t.length, a = {}; ++r < i;) {
					var o = t[r], s = u_(e, o);
					n(s, o) && Q_(a, vv(o, e), s);
				}
				return a;
			}
			function W_(e) {
				return function(t) {
					return u_(t, e);
				};
			}
			function G_(e, t, n, r) {
				var i = r ? qs : Ks, a = -1, o = t.length, s = e;
				for (e === t && (t = Mv(t)), n && (s = B(e, lu(n))); ++a < o;) for (var c = 0, l = t[a], u = n ? n(l) : l; (c = i(s, u, c, r)) > -1;) s !== e && Jr.call(s, c, 1), Jr.call(e, c, 1);
				return e;
			}
			function K_(e, t) {
				for (var n = e ? t.length : 0, r = n - 1; n--;) {
					var i = t[n];
					if (n == r || i !== a) {
						var a = i;
						Ny(i) ? Jr.call(e, i, 1) : uv(e, i);
					}
				}
				return e;
			}
			function q_(e, t) {
				return e + ii(ia() * (t - e + 1));
			}
			function J_(e, t, n, i) {
				for (var a = -1, o = P(ri((t - e) / (n || 1)), 0), s = r(o); o--;) s[i ? o : ++a] = e, e += n;
				return s;
			}
			function Y_(e, t) {
				var n = "";
				if (!e || t < 1 || t > he) return n;
				do
					t % 2 && (n += e), t = ii(t / 2), t && (e += e);
				while (t);
				return n;
			}
			function G(e, t) {
				return $y(qy(e, t, $T), e + "");
			}
			function X_(e) {
				return Fg(uT(e));
			}
			function Z_(e, t) {
				var n = uT(e);
				return nx(n, Kg(t, 0, n.length));
			}
			function Q_(e, t, r, i) {
				if (!Y(e)) return e;
				t = vv(t, e);
				for (var a = -1, o = t.length, s = o - 1, c = e; c != null && ++a < o;) {
					var l = ix(t[a]), u = r;
					if (l === "__proto__" || l === "constructor" || l === "prototype") return e;
					if (a != s) {
						var d = c[l];
						u = i ? i(d, l, c) : n, u === n && (u = Y(d) ? d : Ny(t[a + 1]) ? [] : {});
					}
					zg(c, l, u), c = c[l];
				}
				return e;
			}
			var $_ = Ea ? function(e, t) {
				return Ea.set(e, t), e;
			} : $T, ev = Zr ? function(e, t) {
				return Zr(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: YT(t),
					writable: !0
				});
			} : $T;
			function tv(e) {
				return nx(uT(e));
			}
			function nv(e, t, n) {
				var i = -1, a = e.length;
				t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var o = r(a); ++i < a;) o[i] = e[i + t];
				return o;
			}
			function rv(e, t) {
				var n;
				return Qg(e, function(e, r, i) {
					return n = t(e, r, i), !n;
				}), !!n;
			}
			function iv(e, t, n) {
				var r = 0, i = e == null ? r : e.length;
				if (typeof t == "number" && t === t && i <= Te) {
					for (; r < i;) {
						var a = r + i >>> 1, o = e[a];
						o !== null && !uw(o) && (n ? o <= t : o < t) ? r = a + 1 : i = a;
					}
					return i;
				}
				return av(e, t, $T, n);
			}
			function av(e, t, r, i) {
				var a = 0, o = e == null ? 0 : e.length;
				if (o === 0) return 0;
				t = r(t);
				for (var s = t !== t, c = t === null, l = uw(t), u = t === n; a < o;) {
					var d = ii((a + o) / 2), f = r(e[d]), p = f !== n, m = f === null, h = f === f, g = uw(f);
					if (s) var _ = i || h;
					else _ = u ? h && (i || p) : c ? h && p && (i || !m) : l ? h && p && !m && (i || !g) : m || g ? !1 : i ? f <= t : f < t;
					_ ? a = d + 1 : o = d;
				}
				return F(o, we);
			}
			function ov(e, t) {
				for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
					var o = e[n], s = t ? t(o) : o;
					if (!n || !jC(s, c)) {
						var c = s;
						a[i++] = o === 0 ? 0 : o;
					}
				}
				return a;
			}
			function sv(e) {
				return typeof e == "number" ? e : uw(e) ? ve : +e;
			}
			function cv(e) {
				if (typeof e == "string") return e;
				if (J(e)) return B(e, cv) + "";
				if (uw(e)) return Ba ? Ba.call(e) : "";
				var t = e + "";
				return t == "0" && 1 / e == -pe ? "-0" : t;
			}
			function lv(e, t, n) {
				var r = -1, a = Wo, o = e.length, s = !0, c = [], l = c;
				if (n) s = !1, a = Go;
				else if (o >= i) {
					var u = t ? null : ry(e);
					if (u) return Fu(u);
					s = !1, a = fu, l = new Cg();
				} else l = t ? [] : c;
				outer: for (; ++r < o;) {
					var d = e[r], f = t ? t(d) : d;
					if (d = n || d !== 0 ? d : 0, s && f === f) {
						for (var p = l.length; p--;) if (l[p] === f) continue outer;
						t && l.push(f), c.push(d);
					} else a(l, f, n) || (l !== c && l.push(f), c.push(d));
				}
				return c;
			}
			function uv(e, t) {
				t = vv(t, e);
				var n = -1, r = t.length;
				if (!r) return !0;
				for (var i = e == null || typeof e != "object" && typeof e != "function"; ++n < r;) {
					var a = t[n];
					if (typeof a == "string") {
						if (a === "__proto__" && !M.call(e, "__proto__")) return !1;
						if (a === "constructor" && n + 1 < r && typeof t[n + 1] == "string" && t[n + 1] === "prototype") {
							if (i && n === 0) continue;
							return !1;
						}
					}
				}
				var o = Jy(e, t);
				return o == null || delete o[ix(Mx(t))];
			}
			function dv(e, t, n, r) {
				return Q_(e, t, n(u_(e, t)), r);
			}
			function fv(e, t, n, r) {
				for (var i = e.length, a = r ? i : -1; (r ? a-- : ++a < i) && t(e[a], a, e););
				return n ? nv(e, r ? 0 : a, r ? a + 1 : i) : nv(e, r ? a + 1 : 0, r ? i : a);
			}
			function pv(e, t) {
				var n = e;
				return n instanceof H && (n = n.value()), js(t, function(e, t) {
					return t.func.apply(t.thisArg, Jo([e], t.args));
				}, n);
			}
			function mv(e, t, n) {
				var i = e.length;
				if (i < 2) return i ? lv(e[0]) : [];
				for (var a = -1, o = r(i); ++a < i;) for (var s = e[a], c = -1; ++c < i;) c != a && (o[a] = Zg(o[a] || s, e[c], t, n));
				return lv(i_(o, 1), t, n);
			}
			function hv(e, t, r) {
				for (var i = -1, a = e.length, o = t.length, s = {}; ++i < a;) {
					var c = i < o ? t[i] : n;
					r(s, e[i], c);
				}
				return s;
			}
			function gv(e) {
				return LC(e) ? e : [];
			}
			function _v(e) {
				return typeof e == "function" ? e : $T;
			}
			function vv(e, t) {
				return J(e) ? e : Fy(e, t) ? [e] : rx(Q(e));
			}
			var yv = G;
			function bv(e, t, r) {
				var i = e.length;
				return r = r === n ? i : r, !t && r >= i ? e : nv(e, t, r);
			}
			var xv = Qr || function(e) {
				return Fa.clearTimeout(e);
			};
			function Sv(e, t) {
				if (t) return e.slice();
				var n = e.length, r = Ar ? Ar(n) : new e.constructor(n);
				return e.copy(r), r;
			}
			function Cv(e) {
				var t = new e.constructor(e.byteLength);
				return new Or(t).set(new Or(e)), t;
			}
			function wv(e, t) {
				var n = t ? Cv(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength);
			}
			function Tv(e) {
				var t = new e.constructor(e.source, On.exec(e));
				return t.lastIndex = e.lastIndex, t;
			}
			function Ev(e) {
				return za ? w(za.call(e)) : {};
			}
			function Dv(e, t) {
				var n = t ? Cv(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length);
			}
			function Ov(e, t) {
				if (e !== t) {
					var r = e !== n, i = e === null, a = e === e, o = uw(e), s = t !== n, c = t === null, l = t === t, u = uw(t);
					if (!c && !u && !o && e > t || o && s && l && !c && !u || i && s && l || !r && l || !a) return 1;
					if (!i && !o && !u && e < t || u && r && a && !i && !o || c && r && a || !s && a || !l) return -1;
				}
				return 0;
			}
			function kv(e, t, n) {
				for (var r = -1, i = e.criteria, a = t.criteria, o = i.length, s = n.length; ++r < o;) {
					var c = Ov(i[r], a[r]);
					if (c) return r >= s ? c : c * (n[r] == "desc" ? -1 : 1);
				}
				return e.index - t.index;
			}
			function Av(e, t, n, i) {
				for (var a = -1, o = e.length, s = n.length, c = -1, l = t.length, u = P(o - s, 0), d = r(l + u), f = !i; ++c < l;) d[c] = t[c];
				for (; ++a < s;) (f || a < o) && (d[n[a]] = e[a]);
				for (; u--;) d[c++] = e[a++];
				return d;
			}
			function jv(e, t, n, i) {
				for (var a = -1, o = e.length, s = -1, c = n.length, l = -1, u = t.length, d = P(o - c, 0), f = r(d + u), p = !i; ++a < d;) f[a] = e[a];
				for (var m = a; ++l < u;) f[m + l] = t[l];
				for (; ++s < c;) (p || a < o) && (f[m + n[s]] = e[a++]);
				return f;
			}
			function Mv(e, t) {
				var n = -1, i = e.length;
				for (t ||= r(i); ++n < i;) t[n] = e[n];
				return t;
			}
			function Nv(e, t, r, i) {
				var a = !r;
				r ||= {};
				for (var o = -1, s = t.length; ++o < s;) {
					var c = t[o], l = i ? i(r[c], e[c], c, r, e) : n;
					l === n && (l = e[c]), a ? Wg(r, c, l) : zg(r, c, l);
				}
				return r;
			}
			function Pv(e, t) {
				return Nv(e, Sy(e), t);
			}
			function Fv(e, t) {
				return Nv(e, Cy(e), t);
			}
			function Iv(e, t) {
				return function(n, r) {
					var i = J(n) ? Ro : Vg, a = t ? t() : {};
					return i(n, e, K(r, 2), a);
				};
			}
			function Lv(e) {
				return G(function(t, r) {
					var i = -1, a = r.length, o = a > 1 ? r[a - 1] : n, s = a > 2 ? r[2] : n;
					for (o = e.length > 3 && typeof o == "function" ? (a--, o) : n, s && Py(r[0], r[1], s) && (o = a < 3 ? n : o, a = 1), t = w(t); ++i < a;) {
						var c = r[i];
						c && e(t, c, i, o);
					}
					return t;
				});
			}
			function Rv(e, t) {
				return function(n, r) {
					if (n == null) return n;
					if (!IC(n)) return e(n, r);
					for (var i = n.length, a = t ? i : -1, o = w(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
					return n;
				};
			}
			function zv(e) {
				return function(t, n, r) {
					for (var i = -1, a = w(t), o = r(t), s = o.length; s--;) {
						var c = o[e ? s : ++i];
						if (n(a[c], c, a) === !1) break;
					}
					return t;
				};
			}
			function Bv(e, t, n) {
				var r = t & g, i = Uv(e);
				function a() {
					return (this && this !== Fa && this instanceof a ? i : e).apply(r ? n : this, arguments);
				}
				return a;
			}
			function Vv(e) {
				return function(t) {
					t = Q(t);
					var r = xu(t) ? yd(t) : n, i = r ? r[0] : t.charAt(0), a = r ? bv(r, 1).join("") : t.slice(1);
					return i[e]() + a;
				};
			}
			function Hv(e) {
				return function(t) {
					return js(WT(_T(t).replace(va, "")), e, "");
				};
			}
			function Uv(e) {
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return new e();
						case 1: return new e(t[0]);
						case 2: return new e(t[0], t[1]);
						case 3: return new e(t[0], t[1], t[2]);
						case 4: return new e(t[0], t[1], t[2], t[3]);
						case 5: return new e(t[0], t[1], t[2], t[3], t[4]);
						case 6: return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
						case 7: return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
					}
					var n = Vs(e.prototype), r = e.apply(n, t);
					return Y(r) ? r : n;
				};
			}
			function Wv(e, t, i) {
				var a = Uv(e);
				function o() {
					for (var s = arguments.length, c = r(s), l = s, u = _y(o); l--;) c[l] = arguments[l];
					var d = s < 3 && c[0] !== u && c[s - 1] !== u ? [] : Au(c, u);
					return s -= d.length, s < i ? ty(e, t, qv, o.placeholder, n, c, d, n, n, i - s) : No(this && this !== Fa && this instanceof o ? a : e, this, c);
				}
				return o;
			}
			function Gv(e) {
				return function(t, r, i) {
					var a = w(t);
					if (!IC(t)) {
						var o = K(r, 3);
						t = Gw(t), r = function(e) {
							return o(a[e], e, a);
						};
					}
					var s = e(t, r, i);
					return s > -1 ? a[o ? t[s] : s] : n;
				};
			}
			function Kv(e) {
				return fy(function(t) {
					var r = t.length, i = r, a = $u.prototype.thru;
					for (e && t.reverse(); i--;) {
						var s = t[i];
						if (typeof s != "function") throw new D(o);
						if (a && !c && gy(s) == "wrapper") var c = new $u([], !0);
					}
					for (i = c ? i : r; ++i < r;) {
						s = t[i];
						var l = gy(s), u = l == "wrapper" ? hy(s) : n;
						c = u && Ly(u[0]) && u[1] == (C | y | x | te) && !u[4].length && u[9] == 1 ? c[gy(u[0])].apply(c, u[3]) : s.length == 1 && Ly(s) ? c[l]() : c.thru(s);
					}
					return function() {
						var e = arguments, n = e[0];
						if (c && e.length == 1 && J(n)) return c.plant(n).value();
						for (var i = 0, a = r ? t[i].apply(this, e) : n; ++i < r;) a = t[i].call(this, a);
						return a;
					};
				});
			}
			function qv(e, t, i, a, o, s, c, l, u, d) {
				var f = t & C, p = t & g, m = t & _, h = t & (y | b), v = t & ne, x = m ? n : Uv(e);
				function S() {
					for (var n = arguments.length, g = r(n), _ = n; _--;) g[_] = arguments[_];
					if (h) var y = _y(S), b = hu(g, y);
					if (a && (g = Av(g, a, o, h)), s && (g = jv(g, s, c, h)), n -= b, h && n < d) {
						var C = Au(g, y);
						return ty(e, t, qv, S.placeholder, i, g, C, l, u, d - n);
					}
					var te = p ? i : this, ne = m ? te[e] : e;
					return n = g.length, l ? g = Yy(g, l) : v && n > 1 && g.reverse(), f && u < n && (g.length = u), this && this !== Fa && this instanceof S && (ne = x || Uv(ne)), ne.apply(te, g);
				}
				return S;
			}
			function Jv(e, t) {
				return function(n, r) {
					return v_(n, e, t(r), {});
				};
			}
			function Yv(e, t) {
				return function(r, i) {
					var a;
					if (r === n && i === n) return t;
					if (r !== n && (a = r), i !== n) {
						if (a === n) return i;
						typeof r == "string" || typeof i == "string" ? (r = cv(r), i = cv(i)) : (r = sv(r), i = sv(i)), a = e(r, i);
					}
					return a;
				};
			}
			function Xv(e) {
				return fy(function(t) {
					return t = B(t, lu(K())), G(function(n) {
						var r = this;
						return e(t, function(e) {
							return No(e, r, n);
						});
					});
				});
			}
			function Zv(e, t) {
				t = t === n ? " " : cv(t);
				var r = t.length;
				if (r < 2) return r ? Y_(t, e) : t;
				var i = Y_(t, ri(e / vd(t)));
				return xu(t) ? bv(yd(i), 0, e).join("") : i.slice(0, e);
			}
			function Qv(e, t, n, i) {
				var a = t & g, o = Uv(e);
				function s() {
					for (var t = -1, c = arguments.length, l = -1, u = i.length, d = r(u + c), f = this && this !== Fa && this instanceof s ? o : e; ++l < u;) d[l] = i[l];
					for (; c--;) d[l++] = arguments[++t];
					return No(f, a ? n : this, d);
				}
				return s;
			}
			function $v(e) {
				return function(t, r, i) {
					return i && typeof i != "number" && Py(t, r, i) && (r = i = n), t = vw(t), r === n ? (r = t, t = 0) : r = vw(r), i = i === n ? t < r ? 1 : -1 : vw(i), J_(t, r, i, e);
				};
			}
			function ey(e) {
				return function(t, n) {
					return typeof t == "string" && typeof n == "string" || (t = bw(t), n = bw(n)), e(t, n);
				};
			}
			function ty(e, t, r, i, a, o, s, c, l, u) {
				var d = t & y, f = d ? s : n, p = d ? n : s, m = d ? o : n, h = d ? n : o;
				t |= d ? x : S, t &= ~(d ? S : x), t & v || (t &= ~(g | _));
				var b = [
					e,
					t,
					a,
					m,
					f,
					h,
					p,
					c,
					l,
					u
				], C = r.apply(n, b);
				return Ly(e) && Zy(C, b), C.placeholder = i, ex(C, e, t);
			}
			function ny(e) {
				var t = ie[e];
				return function(e, n) {
					if (e = bw(e), n = n == null ? 0 : F(X(n), 292), n && si(e)) {
						var r = (Q(e) + "e").split("e");
						return r = (Q(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"), +(r[0] + "e" + (+r[1] - n));
					}
					return t(e);
				};
			}
			var ry = xa && 1 / Fu(new xa([, -0]))[1] == pe ? function(e) {
				return new xa(e);
			} : sE;
			function iy(e) {
				return function(t) {
					var n = wy(t);
					return n == He ? Eu(t) : n == $e ? Iu(t) : su(t, e(t));
				};
			}
			function ay(e, t, r, i, a, s, c, l) {
				var u = t & _;
				if (!u && typeof e != "function") throw new D(o);
				var d = i ? i.length : 0;
				if (d || (t &= ~(x | S), i = a = n), c = c === n ? c : P(X(c), 0), l = l === n ? l : X(l), d -= a ? a.length : 0, t & S) {
					var f = i, p = a;
					i = a = n;
				}
				var m = u ? n : hy(e), h = [
					e,
					t,
					r,
					i,
					a,
					f,
					p,
					s,
					c,
					l
				];
				if (m && Wy(h, m), e = h[0], t = h[1], r = h[2], i = h[3], a = h[4], l = h[9] = h[9] === n ? u ? 0 : e.length : P(h[9] - d, 0), !l && t & (y | b) && (t &= ~(y | b)), !t || t == g) var v = Bv(e, t, r);
				else v = t == y || t == b ? Wv(e, t, l) : (t == x || t == (g | x)) && !a.length ? Qv(e, t, r, i) : qv.apply(n, h);
				return ex((m ? $_ : Zy)(v, h), e, t);
			}
			function oy(e, t, r, i) {
				return e === n || jC(e, an[r]) && !M.call(i, r) ? t : e;
			}
			function sy(e, t, r, i, a, o) {
				return Y(e) && Y(t) && (o.set(t, e), R_(e, t, n, sy, o), o.delete(t)), e;
			}
			function cy(e) {
				return aw(e) ? n : e;
			}
			function ly(e, t, r, i, a, o) {
				var s = r & m, c = e.length, l = t.length;
				if (c != l && !(s && l > c)) return !1;
				var u = o.get(e), d = o.get(t);
				if (u && d) return u == t && d == e;
				var f = -1, p = !0, g = r & h ? new Cg() : n;
				for (o.set(e, t), o.set(t, e); ++f < c;) {
					var _ = e[f], v = t[f];
					if (i) var y = s ? i(v, _, f, t, e, o) : i(_, v, f, e, t, o);
					if (y !== n) {
						if (y) continue;
						p = !1;
						break;
					}
					if (g) {
						if (!Ns(t, function(e, t) {
							if (!fu(g, t) && (_ === e || a(_, e, r, i, o))) return g.push(t);
						})) {
							p = !1;
							break;
						}
					} else if (!(_ === v || a(_, v, r, i, o))) {
						p = !1;
						break;
					}
				}
				return o.delete(e), o.delete(t), p;
			}
			function uy(e, t, n, r, i, a, o) {
				switch (n) {
					case k:
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case gt: return !(e.byteLength != t.byteLength || !a(new Or(e), new Or(t)));
					case Ne:
					case Pe:
					case Ue: return jC(+e, +t);
					case Ie: return e.name == t.name && e.message == t.message;
					case Qe:
					case et: return e == t + "";
					case He: var s = Eu;
					case $e:
						var c = r & m;
						if (s ||= Fu, e.size != t.size && !c) return !1;
						var l = o.get(e);
						if (l) return l == t;
						r |= h, o.set(e, t);
						var u = ly(s(e), s(t), r, i, a, o);
						return o.delete(e), u;
					case rt: if (za) return za.call(e) == za.call(t);
				}
				return !1;
			}
			function dy(e, t, r, i, a, o) {
				var s = r & m, c = py(e), l = c.length;
				if (l != py(t).length && !s) return !1;
				for (var u = l; u--;) {
					var d = c[u];
					if (!(s ? d in t : M.call(t, d))) return !1;
				}
				var f = o.get(e), p = o.get(t);
				if (f && p) return f == t && p == e;
				var h = !0;
				o.set(e, t), o.set(t, e);
				for (var g = s; ++u < l;) {
					d = c[u];
					var _ = e[d], v = t[d];
					if (i) var y = s ? i(v, _, d, t, e, o) : i(_, v, d, e, t, o);
					if (!(y === n ? _ === v || a(_, v, r, i, o) : y)) {
						h = !1;
						break;
					}
					g ||= d == "constructor";
				}
				if (h && !g) {
					var b = e.constructor, x = t.constructor;
					b != x && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof x == "function" && x instanceof x) && (h = !1);
				}
				return o.delete(e), o.delete(t), h;
			}
			function fy(e) {
				return $y(qy(e, n, xx), e + "");
			}
			function py(e) {
				return d_(e, Gw, Sy);
			}
			function my(e) {
				return d_(e, Kw, Cy);
			}
			var hy = Ea ? function(e) {
				return Ea.get(e);
			} : sE;
			function gy(e) {
				for (var t = e.name + "", n = Da[t], r = M.call(Da, t) ? n.length : 0; r--;) {
					var i = n[r], a = i.func;
					if (a == null || a == e) return i.name;
				}
				return t;
			}
			function _y(e) {
				return (M.call(V, "placeholder") ? V : e).placeholder;
			}
			function K() {
				var e = V.iteratee || eE;
				return e = e === eE ? j_ : e, arguments.length ? e(arguments[0], arguments[1]) : e;
			}
			function vy(e, t) {
				var n = e.__data__;
				return Iy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
			}
			function yy(e) {
				for (var t = Gw(e), n = t.length; n--;) {
					var r = t[n], i = e[r];
					t[n] = [
						r,
						i,
						Vy(i)
					];
				}
				return t;
			}
			function by(e, t) {
				var r = bu(e, t);
				return D_(r) ? r : n;
			}
			function xy(e) {
				var t = M.call(e, Xr), r = e[Xr];
				try {
					e[Xr] = n;
					var i = !0;
				} catch {}
				var a = cr.call(e);
				return i && (t ? e[Xr] = r : delete e[Xr]), a;
			}
			var Sy = ai ? function(e) {
				return e == null ? [] : (e = w(e), Uo(ai(e), function(t) {
					return Kr.call(e, t);
				}));
			} : gE, Cy = ai ? function(e) {
				for (var t = []; e;) Jo(t, Sy(e)), e = jr(e);
				return t;
			} : gE, wy = f_;
			(ga && wy(new ga(/* @__PURE__ */ new ArrayBuffer(1))) != k || _a && wy(new _a()) != He || ba && wy(ba.resolve()) != Ye || xa && wy(new xa()) != $e || Sa && wy(new Sa()) != lt) && (wy = function(e) {
				var t = f_(e), r = t == qe ? e.constructor : n, i = r ? ax(r) : "";
				if (i) switch (i) {
					case Oa: return k;
					case ka: return He;
					case Na: return Ye;
					case Pa: return $e;
					case Ia: return lt;
				}
				return t;
			});
			function Ty(e, t, n) {
				for (var r = -1, i = n.length; ++r < i;) {
					var a = n[r], o = a.size;
					switch (a.type) {
						case "drop":
							e += o;
							break;
						case "dropRight":
							t -= o;
							break;
						case "take":
							t = F(t, e + o);
							break;
						case "takeRight":
							e = P(e, t - o);
							break;
					}
				}
				return {
					start: e,
					end: t
				};
			}
			function Ey(e) {
				var t = e.match(sn);
				return t ? t[1].split(_n) : [];
			}
			function Dy(e, t, n) {
				t = vv(t, e);
				for (var r = -1, i = t.length, a = !1; ++r < i;) {
					var o = ix(t[r]);
					if (!(a = e != null && n(e, o))) break;
					e = e[o];
				}
				return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && YC(i) && Ny(o, i) && (J(e) || PC(e)));
			}
			function Oy(e) {
				var t = e.length, n = new e.constructor(t);
				return t && typeof e[0] == "string" && M.call(e, "index") && (n.index = e.index, n.input = e.input), n;
			}
			function ky(e) {
				return typeof e.constructor == "function" && !By(e) ? Vs(jr(e)) : {};
			}
			function Ay(e, t, n) {
				var r = e.constructor;
				switch (t) {
					case gt: return Cv(e);
					case Ne:
					case Pe: return new r(+e);
					case k: return wv(e, n);
					case A:
					case _t:
					case vt:
					case yt:
					case bt:
					case j:
					case St:
					case Ct:
					case Et: return Dv(e, n);
					case He: return new r();
					case Ue:
					case et: return new r(e);
					case Qe: return Tv(e);
					case $e: return new r();
					case rt: return Ev(e);
				}
			}
			function jy(e, t) {
				var n = t.length;
				if (!n) return e;
				var r = n - 1;
				return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(on, "{\n/* [wrapped with " + t + "] */\n");
			}
			function My(e) {
				return J(e) || PC(e) || !!(N && e && e[N]);
			}
			function Ny(e, t) {
				var n = typeof e;
				return t ??= he, !!t && (n == "number" || n != "symbol" && Hn.test(e)) && e > -1 && e % 1 == 0 && e < t;
			}
			function Py(e, t, n) {
				if (!Y(n)) return !1;
				var r = typeof t;
				return (r == "number" ? IC(n) && Ny(t, n.length) : r == "string" && t in n) ? jC(n[t], e) : !1;
			}
			function Fy(e, t) {
				if (J(e)) return !1;
				var n = typeof e;
				return n == "number" || n == "symbol" || n == "boolean" || e == null || uw(e) ? !0 : qt.test(e) || !Kt.test(e) || t != null && e in w(t);
			}
			function Iy(e) {
				var t = typeof e;
				return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
			}
			function Ly(e) {
				var t = gy(e), n = V[t];
				if (typeof n != "function" || !(t in H.prototype)) return !1;
				if (e === n) return !0;
				var r = hy(n);
				return !!r && e === r[0];
			}
			function Ry(e) {
				return !!rr && rr in e;
			}
			var zy = vn ? qC : _E;
			function By(e) {
				var t = e && e.constructor;
				return e === (typeof t == "function" && t.prototype || an);
			}
			function Vy(e) {
				return e === e && !Y(e);
			}
			function Hy(e, t) {
				return function(r) {
					return r == null ? !1 : r[e] === t && (t !== n || e in w(r));
				};
			}
			function Uy(e) {
				var t = pC(e, function(e) {
					return n.size === 500 && n.clear(), e;
				}), n = t.cache;
				return t;
			}
			function Wy(e, t) {
				var n = e[1], r = t[1], i = n | r, a = i < (g | _ | C), o = r == C && n == y || r == C && n == te && e[7].length <= t[8] || r == (C | te) && t[7].length <= t[8] && n == y;
				if (!(a || o)) return e;
				r & g && (e[2] = t[2], i |= n & g ? 0 : v);
				var s = t[3];
				if (s) {
					var c = e[3];
					e[3] = c ? Av(c, s, t[4]) : s, e[4] = c ? Au(e[3], u) : t[4];
				}
				return s = t[5], s && (c = e[5], e[5] = c ? jv(c, s, t[6]) : s, e[6] = c ? Au(e[5], u) : t[6]), s = t[7], s && (e[7] = s), r & C && (e[8] = e[8] == null ? t[8] : F(e[8], t[8])), e[9] ??= t[9], e[0] = t[0], e[1] = i, e;
			}
			function Gy(e) {
				var t = [];
				if (e != null) for (var n in w(e)) t.push(n);
				return t;
			}
			function Ky(e) {
				return cr.call(e);
			}
			function qy(e, t, i) {
				return t = P(t === n ? e.length - 1 : t, 0), function() {
					for (var n = arguments, a = -1, o = P(n.length - t, 0), s = r(o); ++a < o;) s[a] = n[t + a];
					a = -1;
					for (var c = r(t + 1); ++a < t;) c[a] = n[a];
					return c[t] = i(s), No(e, this, c);
				};
			}
			function Jy(e, t) {
				return t.length < 2 ? e : u_(e, nv(t, 0, -1));
			}
			function Yy(e, t) {
				for (var r = e.length, i = F(t.length, r), a = Mv(e); i--;) {
					var o = t[i];
					e[i] = Ny(o, r) ? a[o] : n;
				}
				return e;
			}
			function Xy(e, t) {
				if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
			}
			var Zy = tx($_), Qy = ni || function(e, t) {
				return Fa.setTimeout(e, t);
			}, $y = tx(ev);
			function ex(e, t, n) {
				var r = t + "";
				return $y(e, jy(r, ox(Ey(r), n)));
			}
			function tx(e) {
				var t = 0, r = 0;
				return function() {
					var i = di(), a = 16 - (i - r);
					if (r = i, a > 0) {
						if (++t >= 800) return arguments[0];
					} else t = 0;
					return e.apply(n, arguments);
				};
			}
			function nx(e, t) {
				var r = -1, i = e.length, a = i - 1;
				for (t = t === n ? i : t; ++r < t;) {
					var o = q_(r, a), s = e[o];
					e[o] = e[r], e[r] = s;
				}
				return e.length = t, e;
			}
			var rx = Uy(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(Yt, function(e, n, r, i) {
					t.push(r ? i.replace(wn, "$1") : n || e);
				}), t;
			});
			function ix(e) {
				if (typeof e == "string" || uw(e)) return e;
				var t = e + "";
				return t == "0" && 1 / e == -pe ? "-0" : t;
			}
			function ax(e) {
				if (e != null) {
					try {
						return tr.call(e);
					} catch {}
					try {
						return e + "";
					} catch {}
				}
				return "";
			}
			function ox(e, t) {
				return zo(Ee, function(n) {
					var r = "_." + n[0];
					t & n[1] && !Wo(e, r) && e.push(r);
				}), e.sort();
			}
			function sx(e) {
				if (e instanceof H) return e.clone();
				var t = new $u(e.__wrapped__, e.__chain__);
				return t.__actions__ = Mv(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
			}
			function cx(e, t, i) {
				t = (i ? Py(e, t, i) : t === n) ? 1 : P(X(t), 0);
				var a = e == null ? 0 : e.length;
				if (!a || t < 1) return [];
				for (var o = 0, s = 0, c = r(ri(a / t)); o < a;) c[s++] = nv(e, o, o += t);
				return c;
			}
			function lx(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
					var a = e[t];
					a && (i[r++] = a);
				}
				return i;
			}
			function ux() {
				var e = arguments.length;
				if (!e) return [];
				for (var t = r(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
				return Jo(J(n) ? Mv(n) : [n], i_(t, 1));
			}
			var dx = G(function(e, t) {
				return LC(e) ? Zg(e, i_(t, 1, LC, !0)) : [];
			}), fx = G(function(e, t) {
				var r = Mx(t);
				return LC(r) && (r = n), LC(e) ? Zg(e, i_(t, 1, LC, !0), K(r, 2)) : [];
			}), px = G(function(e, t) {
				var r = Mx(t);
				return LC(r) && (r = n), LC(e) ? Zg(e, i_(t, 1, LC, !0), n, r) : [];
			});
			function mx(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : X(t), nv(e, t < 0 ? 0 : t, i)) : [];
			}
			function hx(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : X(t), t = i - t, nv(e, 0, t < 0 ? 0 : t)) : [];
			}
			function gx(e, t) {
				return e && e.length ? fv(e, K(t, 3), !0, !0) : [];
			}
			function _x(e, t) {
				return e && e.length ? fv(e, K(t, 3), !0) : [];
			}
			function vx(e, t, n, r) {
				var i = e == null ? 0 : e.length;
				return i ? (n && typeof n != "number" && Py(e, t, n) && (n = 0, r = i), n_(e, t, n, r)) : [];
			}
			function yx(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : X(n);
				return i < 0 && (i = P(r + i, 0)), Gs(e, K(t, 3), i);
			}
			function bx(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i - 1;
				return r !== n && (a = X(r), a = r < 0 ? P(i + a, 0) : F(a, i - 1)), Gs(e, K(t, 3), a, !0);
			}
			function xx(e) {
				return e != null && e.length ? i_(e, 1) : [];
			}
			function Sx(e) {
				return e != null && e.length ? i_(e, pe) : [];
			}
			function Cx(e, t) {
				return e != null && e.length ? (t = t === n ? 1 : X(t), i_(e, t)) : [];
			}
			function wx(e) {
				for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n;) {
					var i = e[t];
					r[i[0]] = i[1];
				}
				return r;
			}
			function Tx(e) {
				return e && e.length ? e[0] : n;
			}
			function Ex(e, t, n) {
				var r = e == null ? 0 : e.length;
				if (!r) return -1;
				var i = n == null ? 0 : X(n);
				return i < 0 && (i = P(r + i, 0)), Ks(e, t, i);
			}
			function Dx(e) {
				return e != null && e.length ? nv(e, 0, -1) : [];
			}
			var Ox = G(function(e) {
				var t = B(e, gv);
				return t.length && t[0] === e[0] ? __(t) : [];
			}), kx = G(function(e) {
				var t = Mx(e), r = B(e, gv);
				return t === Mx(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? __(r, K(t, 2)) : [];
			}), Ax = G(function(e) {
				var t = Mx(e), r = B(e, gv);
				return t = typeof t == "function" ? t : n, t && r.pop(), r.length && r[0] === e[0] ? __(r, n, t) : [];
			});
			function jx(e, t) {
				return e == null ? "" : ci.call(e, t);
			}
			function Mx(e) {
				var t = e == null ? 0 : e.length;
				return t ? e[t - 1] : n;
			}
			function Nx(e, t, r) {
				var i = e == null ? 0 : e.length;
				if (!i) return -1;
				var a = i;
				return r !== n && (a = X(r), a = a < 0 ? P(i + a, 0) : F(a, i - 1)), t === t ? _d(e, t, a) : Gs(e, Ys, a, !0);
			}
			function Px(e, t) {
				return e && e.length ? B_(e, X(t)) : n;
			}
			var Fx = G(Ix);
			function Ix(e, t) {
				return e && e.length && t && t.length ? G_(e, t) : e;
			}
			function Lx(e, t, n) {
				return e && e.length && t && t.length ? G_(e, t, K(n, 2)) : e;
			}
			function Rx(e, t, r) {
				return e && e.length && t && t.length ? G_(e, t, n, r) : e;
			}
			var zx = fy(function(e, t) {
				var n = e == null ? 0 : e.length, r = Gg(e, t);
				return K_(e, B(t, function(e) {
					return Ny(e, n) ? +e : e;
				}).sort(Ov)), r;
			});
			function Bx(e, t) {
				var n = [];
				if (!(e && e.length)) return n;
				var r = -1, i = [], a = e.length;
				for (t = K(t, 3); ++r < a;) {
					var o = e[r];
					t(o, r, e) && (n.push(o), i.push(r));
				}
				return K_(e, i), n;
			}
			function Vx(e) {
				return e == null ? e : oa.call(e);
			}
			function Hx(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (r && typeof r != "number" && Py(e, t, r) ? (t = 0, r = i) : (t = t == null ? 0 : X(t), r = r === n ? i : X(r)), nv(e, t, r)) : [];
			}
			function Ux(e, t) {
				return iv(e, t);
			}
			function Wx(e, t, n) {
				return av(e, t, K(n, 2));
			}
			function Gx(e, t) {
				var n = e == null ? 0 : e.length;
				if (n) {
					var r = iv(e, t);
					if (r < n && jC(e[r], t)) return r;
				}
				return -1;
			}
			function Kx(e, t) {
				return iv(e, t, !0);
			}
			function qx(e, t, n) {
				return av(e, t, K(n, 2), !0);
			}
			function Jx(e, t) {
				if (e != null && e.length) {
					var n = iv(e, t, !0) - 1;
					if (jC(e[n], t)) return n;
				}
				return -1;
			}
			function Yx(e) {
				return e && e.length ? ov(e) : [];
			}
			function Xx(e, t) {
				return e && e.length ? ov(e, K(t, 2)) : [];
			}
			function Zx(e) {
				var t = e == null ? 0 : e.length;
				return t ? nv(e, 1, t) : [];
			}
			function Qx(e, t, r) {
				return e && e.length ? (t = r || t === n ? 1 : X(t), nv(e, 0, t < 0 ? 0 : t)) : [];
			}
			function $x(e, t, r) {
				var i = e == null ? 0 : e.length;
				return i ? (t = r || t === n ? 1 : X(t), t = i - t, nv(e, t < 0 ? 0 : t, i)) : [];
			}
			function eS(e, t) {
				return e && e.length ? fv(e, K(t, 3), !1, !0) : [];
			}
			function tS(e, t) {
				return e && e.length ? fv(e, K(t, 3)) : [];
			}
			var nS = G(function(e) {
				return lv(i_(e, 1, LC, !0));
			}), rS = G(function(e) {
				var t = Mx(e);
				return LC(t) && (t = n), lv(i_(e, 1, LC, !0), K(t, 2));
			}), iS = G(function(e) {
				var t = Mx(e);
				return t = typeof t == "function" ? t : n, lv(i_(e, 1, LC, !0), n, t);
			});
			function aS(e) {
				return e && e.length ? lv(e) : [];
			}
			function oS(e, t) {
				return e && e.length ? lv(e, K(t, 2)) : [];
			}
			function sS(e, t) {
				return t = typeof t == "function" ? t : n, e && e.length ? lv(e, n, t) : [];
			}
			function cS(e) {
				if (!(e && e.length)) return [];
				var t = 0;
				return e = Uo(e, function(e) {
					if (LC(e)) return t = P(e.length, t), !0;
				}), au(t, function(t) {
					return B(e, Qs(t));
				});
			}
			function lS(e, t) {
				if (!(e && e.length)) return [];
				var r = cS(e);
				return t == null ? r : B(r, function(e) {
					return No(t, n, e);
				});
			}
			var uS = G(function(e, t) {
				return LC(e) ? Zg(e, t) : [];
			}), dS = G(function(e) {
				return mv(Uo(e, LC));
			}), fS = G(function(e) {
				var t = Mx(e);
				return LC(t) && (t = n), mv(Uo(e, LC), K(t, 2));
			}), pS = G(function(e) {
				var t = Mx(e);
				return t = typeof t == "function" ? t : n, mv(Uo(e, LC), n, t);
			}), mS = G(cS);
			function hS(e, t) {
				return hv(e || [], t || [], zg);
			}
			function gS(e, t) {
				return hv(e || [], t || [], Q_);
			}
			var _S = G(function(e) {
				var t = e.length, r = t > 1 ? e[t - 1] : n;
				return r = typeof r == "function" ? (e.pop(), r) : n, lS(e, r);
			});
			function vS(e) {
				var t = V(e);
				return t.__chain__ = !0, t;
			}
			function yS(e, t) {
				return t(e), e;
			}
			function bS(e, t) {
				return t(e);
			}
			var xS = fy(function(e) {
				var t = e.length, r = t ? e[0] : 0, i = this.__wrapped__, a = function(t) {
					return Gg(t, e);
				};
				return t > 1 || this.__actions__.length || !(i instanceof H) || !Ny(r) ? this.thru(a) : (i = i.slice(r, +r + +!!t), i.__actions__.push({
					func: bS,
					args: [a],
					thisArg: n
				}), new $u(i, this.__chain__).thru(function(e) {
					return t && !e.length && e.push(n), e;
				}));
			});
			function SS() {
				return vS(this);
			}
			function CS() {
				return new $u(this.value(), this.__chain__);
			}
			function wS() {
				this.__values__ === n && (this.__values__ = _w(this.value()));
				var e = this.__index__ >= this.__values__.length;
				return {
					done: e,
					value: e ? n : this.__values__[this.__index__++]
				};
			}
			function TS() {
				return this;
			}
			function ES(e) {
				for (var t, r = this; r instanceof tl;) {
					var i = sx(r);
					i.__index__ = 0, i.__values__ = n, t ? a.__wrapped__ = i : t = i;
					var a = i;
					r = r.__wrapped__;
				}
				return a.__wrapped__ = e, t;
			}
			function DS() {
				var e = this.__wrapped__;
				if (e instanceof H) {
					var t = e;
					return this.__actions__.length && (t = new H(this)), t = t.reverse(), t.__actions__.push({
						func: bS,
						args: [Vx],
						thisArg: n
					}), new $u(t, this.__chain__);
				}
				return this.thru(Vx);
			}
			function OS() {
				return pv(this.__wrapped__, this.__actions__);
			}
			var kS = Iv(function(e, t, n) {
				M.call(e, n) ? ++e[n] : Wg(e, n, 1);
			});
			function AS(e, t, r) {
				var i = J(e) ? Vo : e_;
				return r && Py(e, t, r) && (t = n), i(e, K(t, 3));
			}
			function jS(e, t) {
				return (J(e) ? Uo : r_)(e, K(t, 3));
			}
			var MS = Gv(yx), NS = Gv(bx);
			function PS(e, t) {
				return i_(US(e, t), 1);
			}
			function FS(e, t) {
				return i_(US(e, t), pe);
			}
			function IS(e, t, r) {
				return r = r === n ? 1 : X(r), i_(US(e, t), r);
			}
			function LS(e, t) {
				return (J(e) ? zo : Qg)(e, K(t, 3));
			}
			function RS(e, t) {
				return (J(e) ? Bo : $g)(e, K(t, 3));
			}
			var zS = Iv(function(e, t, n) {
				M.call(e, n) ? e[n].push(t) : Wg(e, n, [t]);
			});
			function BS(e, t, n, r) {
				e = IC(e) ? e : uT(e), n = n && !r ? X(n) : 0;
				var i = e.length;
				return n < 0 && (n = P(i + n, 0)), lw(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && Ks(e, t, n) > -1;
			}
			var VS = G(function(e, t, n) {
				var i = -1, a = typeof t == "function", o = IC(e) ? r(e.length) : [];
				return Qg(e, function(e) {
					o[++i] = a ? No(t, e, n) : y_(e, t, n);
				}), o;
			}), HS = Iv(function(e, t, n) {
				Wg(e, n, t);
			});
			function US(e, t) {
				return (J(e) ? B : F_)(e, K(t, 3));
			}
			function WS(e, t, r, i) {
				return e == null ? [] : (J(t) || (t = t == null ? [] : [t]), r = i ? n : r, J(r) || (r = r == null ? [] : [r]), V_(e, t, r));
			}
			var GS = Iv(function(e, t, n) {
				e[+!n].push(t);
			}, function() {
				return [[], []];
			});
			function KS(e, t, n) {
				var r = J(e) ? js : tu, i = arguments.length < 3;
				return r(e, K(t, 4), n, i, Qg);
			}
			function qS(e, t, n) {
				var r = J(e) ? Ms : tu, i = arguments.length < 3;
				return r(e, K(t, 4), n, i, $g);
			}
			function JS(e, t) {
				return (J(e) ? Uo : r_)(e, mC(K(t, 3)));
			}
			function YS(e) {
				return (J(e) ? Fg : X_)(e);
			}
			function XS(e, t, r) {
				return t = (r ? Py(e, t, r) : t === n) ? 1 : X(t), (J(e) ? Ig : Z_)(e, t);
			}
			function ZS(e) {
				return (J(e) ? Lg : tv)(e);
			}
			function QS(e) {
				if (e == null) return 0;
				if (IC(e)) return lw(e) ? vd(e) : e.length;
				var t = wy(e);
				return t == He || t == $e ? e.size : M_(e).length;
			}
			function $S(e, t, r) {
				var i = J(e) ? Ns : rv;
				return r && Py(e, t, r) && (t = n), i(e, K(t, 3));
			}
			var eC = G(function(e, t) {
				if (e == null) return [];
				var n = t.length;
				return n > 1 && Py(e, t[0], t[1]) ? t = [] : n > 2 && Py(t[0], t[1], t[2]) && (t = [t[0]]), V_(e, i_(t, 1), []);
			}), tC = ti || function() {
				return Fa.Date.now();
			};
			function nC(e, t) {
				if (typeof t != "function") throw new D(o);
				return e = X(e), function() {
					if (--e < 1) return t.apply(this, arguments);
				};
			}
			function rC(e, t, r) {
				return t = r ? n : t, t = e && t == null ? e.length : t, ay(e, C, n, n, n, n, t);
			}
			function iC(e, t) {
				var r;
				if (typeof t != "function") throw new D(o);
				return e = X(e), function() {
					return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = n), r;
				};
			}
			var aC = G(function(e, t, n) {
				var r = g;
				if (n.length) {
					var i = Au(n, _y(aC));
					r |= x;
				}
				return ay(e, r, t, n, i);
			}), oC = G(function(e, t, n) {
				var r = g | _;
				if (n.length) {
					var i = Au(n, _y(oC));
					r |= x;
				}
				return ay(t, r, e, n, i);
			});
			function sC(e, t, r) {
				t = r ? n : t;
				var i = ay(e, y, n, n, n, n, n, t);
				return i.placeholder = sC.placeholder, i;
			}
			function cC(e, t, r) {
				t = r ? n : t;
				var i = ay(e, b, n, n, n, n, n, t);
				return i.placeholder = cC.placeholder, i;
			}
			function lC(e, t, r) {
				var i, a, s, c, l, u, d = 0, f = !1, p = !1, m = !0;
				if (typeof e != "function") throw new D(o);
				t = bw(t) || 0, Y(r) && (f = !!r.leading, p = "maxWait" in r, s = p ? P(bw(r.maxWait) || 0, t) : s, m = "trailing" in r ? !!r.trailing : m);
				function h(t) {
					var r = i, o = a;
					return i = a = n, d = t, c = e.apply(o, r), c;
				}
				function g(e) {
					return d = e, l = Qy(y, t), f ? h(e) : c;
				}
				function _(e) {
					var n = e - u, r = e - d, i = t - n;
					return p ? F(i, s - r) : i;
				}
				function v(e) {
					var r = e - u, i = e - d;
					return u === n || r >= t || r < 0 || p && i >= s;
				}
				function y() {
					var e = tC();
					if (v(e)) return b(e);
					l = Qy(y, _(e));
				}
				function b(e) {
					return l = n, m && i ? h(e) : (i = a = n, c);
				}
				function x() {
					l !== n && xv(l), d = 0, i = u = a = l = n;
				}
				function S() {
					return l === n ? c : b(tC());
				}
				function C() {
					var e = tC(), r = v(e);
					if (i = arguments, a = this, u = e, r) {
						if (l === n) return g(u);
						if (p) return xv(l), l = Qy(y, t), h(u);
					}
					return l === n && (l = Qy(y, t)), c;
				}
				return C.cancel = x, C.flush = S, C;
			}
			var uC = G(function(e, t) {
				return Xg(e, 1, t);
			}), dC = G(function(e, t, n) {
				return Xg(e, bw(t) || 0, n);
			});
			function fC(e) {
				return ay(e, ne);
			}
			function pC(e, t) {
				if (typeof e != "function" || t != null && typeof t != "function") throw new D(o);
				var n = function() {
					var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
					if (a.has(i)) return a.get(i);
					var o = e.apply(this, r);
					return n.cache = a.set(i, o) || a, o;
				};
				return n.cache = new (pC.Cache || ph)(), n;
			}
			pC.Cache = ph;
			function mC(e) {
				if (typeof e != "function") throw new D(o);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0: return !e.call(this);
						case 1: return !e.call(this, t[0]);
						case 2: return !e.call(this, t[0], t[1]);
						case 3: return !e.call(this, t[0], t[1], t[2]);
					}
					return !e.apply(this, t);
				};
			}
			function hC(e) {
				return iC(2, e);
			}
			var gC = yv(function(e, t) {
				t = t.length == 1 && J(t[0]) ? B(t[0], lu(K())) : B(i_(t, 1), lu(K()));
				var n = t.length;
				return G(function(r) {
					for (var i = -1, a = F(r.length, n); ++i < a;) r[i] = t[i].call(this, r[i]);
					return No(e, this, r);
				});
			}), _C = G(function(e, t) {
				return ay(e, x, n, t, Au(t, _y(_C)));
			}), vC = G(function(e, t) {
				return ay(e, S, n, t, Au(t, _y(vC)));
			}), yC = fy(function(e, t) {
				return ay(e, te, n, n, n, t);
			});
			function bC(e, t) {
				if (typeof e != "function") throw new D(o);
				return t = t === n ? t : X(t), G(e, t);
			}
			function xC(e, t) {
				if (typeof e != "function") throw new D(o);
				return t = t == null ? 0 : P(X(t), 0), G(function(n) {
					var r = n[t], i = bv(n, 0, t);
					return r && Jo(i, r), No(e, this, i);
				});
			}
			function SC(e, t, n) {
				var r = !0, i = !0;
				if (typeof e != "function") throw new D(o);
				return Y(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), lC(e, t, {
					leading: r,
					maxWait: t,
					trailing: i
				});
			}
			function CC(e) {
				return rC(e, 1);
			}
			function wC(e, t) {
				return _C(_v(t), e);
			}
			function TC() {
				if (!arguments.length) return [];
				var e = arguments[0];
				return J(e) ? e : [e];
			}
			function EC(e) {
				return qg(e, p);
			}
			function DC(e, t) {
				return t = typeof t == "function" ? t : n, qg(e, p, t);
			}
			function OC(e) {
				return qg(e, d | p);
			}
			function kC(e, t) {
				return t = typeof t == "function" ? t : n, qg(e, d | p, t);
			}
			function AC(e, t) {
				return t == null || Yg(e, t, Gw(t));
			}
			function jC(e, t) {
				return e === t || e !== e && t !== t;
			}
			var MC = ey(p_), NC = ey(function(e, t) {
				return e >= t;
			}), PC = b_(function() {
				return arguments;
			}()) ? b_ : function(e) {
				return XC(e) && M.call(e, "callee") && !Kr.call(e, "callee");
			}, J = r.isArray, FC = Va ? lu(Va) : x_;
			function IC(e) {
				return e != null && YC(e.length) && !qC(e);
			}
			function LC(e) {
				return XC(e) && IC(e);
			}
			function RC(e) {
				return e === !0 || e === !1 || XC(e) && f_(e) == Ne;
			}
			var zC = oi || _E, BC = Ua ? lu(Ua) : S_;
			function VC(e) {
				return XC(e) && e.nodeType === 1 && !aw(e);
			}
			function HC(e) {
				if (e == null) return !0;
				if (IC(e) && (J(e) || typeof e == "string" || typeof e.splice == "function" || zC(e) || dw(e) || PC(e))) return !e.length;
				var t = wy(e);
				if (t == He || t == $e) return !e.size;
				if (By(e)) return !M_(e).length;
				for (var n in e) if (M.call(e, n)) return !1;
				return !0;
			}
			function UC(e, t) {
				return C_(e, t);
			}
			function WC(e, t, r) {
				r = typeof r == "function" ? r : n;
				var i = r ? r(e, t) : n;
				return i === n ? C_(e, t, n, r) : !!i;
			}
			function GC(e) {
				if (!XC(e)) return !1;
				var t = f_(e);
				return t == Ie || t == Fe || typeof e.message == "string" && typeof e.name == "string" && !aw(e);
			}
			function KC(e) {
				return typeof e == "number" && si(e);
			}
			function qC(e) {
				if (!Y(e)) return !1;
				var t = f_(e);
				return t == ze || t == Be || t == Me || t == Ze;
			}
			function JC(e) {
				return typeof e == "number" && e == X(e);
			}
			function YC(e) {
				return typeof e == "number" && e > -1 && e % 1 == 0 && e <= he;
			}
			function Y(e) {
				var t = typeof e;
				return e != null && (t == "object" || t == "function");
			}
			function XC(e) {
				return typeof e == "object" && !!e;
			}
			var ZC = Wa ? lu(Wa) : T_;
			function QC(e, t) {
				return e === t || E_(e, t, yy(t));
			}
			function $C(e, t, r) {
				return r = typeof r == "function" ? r : n, E_(e, t, yy(t), r);
			}
			function ew(e) {
				return iw(e) && e != +e;
			}
			function tw(e) {
				if (zy(e)) throw new s("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
				return D_(e);
			}
			function nw(e) {
				return e === null;
			}
			function rw(e) {
				return e == null;
			}
			function iw(e) {
				return typeof e == "number" || XC(e) && f_(e) == Ue;
			}
			function aw(e) {
				if (!XC(e) || f_(e) != qe) return !1;
				var t = jr(e);
				if (t === null) return !0;
				var n = M.call(t, "constructor") && t.constructor;
				return typeof n == "function" && n instanceof n && tr.call(n) == fr;
			}
			var ow = Ga ? lu(Ga) : O_;
			function sw(e) {
				return JC(e) && e >= -he && e <= he;
			}
			var cw = $a ? lu($a) : k_;
			function lw(e) {
				return typeof e == "string" || !J(e) && XC(e) && f_(e) == et;
			}
			function uw(e) {
				return typeof e == "symbol" || XC(e) && f_(e) == rt;
			}
			var dw = Mo ? lu(Mo) : A_;
			function fw(e) {
				return e === n;
			}
			function pw(e) {
				return XC(e) && wy(e) == lt;
			}
			function mw(e) {
				return XC(e) && f_(e) == mt;
			}
			var hw = ey(P_), gw = ey(function(e, t) {
				return e <= t;
			});
			function _w(e) {
				if (!e) return [];
				if (IC(e)) return lw(e) ? yd(e) : Mv(e);
				if (Yr && e[Yr]) return Tu(e[Yr]());
				var t = wy(e);
				return (t == He ? Eu : t == $e ? Fu : uT)(e);
			}
			function vw(e) {
				return e ? (e = bw(e), e === pe || e === -pe ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e === e ? e : 0) : e === 0 ? e : 0;
			}
			function X(e) {
				var t = vw(e), n = t % 1;
				return t === t ? n ? t - n : t : 0;
			}
			function yw(e) {
				return e ? Kg(X(e), 0, Se) : 0;
			}
			function bw(e) {
				if (typeof e == "number") return e;
				if (uw(e)) return ve;
				if (Y(e)) {
					var t = typeof e.valueOf == "function" ? e.valueOf() : e;
					e = Y(t) ? t + "" : t;
				}
				if (typeof e != "string") return e === 0 ? e : +e;
				e = cu(e);
				var n = jn.test(e);
				return n || In.test(e) ? Ma(e.slice(2), n ? 2 : 8) : An.test(e) ? ve : +e;
			}
			function xw(e) {
				return Nv(e, Kw(e));
			}
			function Sw(e) {
				return e ? Kg(X(e), -he, he) : e === 0 ? e : 0;
			}
			function Q(e) {
				return e == null ? "" : cv(e);
			}
			var Cw = Lv(function(e, t) {
				if (By(t) || IC(t)) {
					Nv(t, Gw(t), e);
					return;
				}
				for (var n in t) M.call(t, n) && zg(e, n, t[n]);
			}), ww = Lv(function(e, t) {
				Nv(t, Kw(t), e);
			}), Tw = Lv(function(e, t, n, r) {
				Nv(t, Kw(t), e, r);
			}), Ew = Lv(function(e, t, n, r) {
				Nv(t, Gw(t), e, r);
			}), Dw = fy(Gg);
			function Ow(e, t) {
				var n = Vs(e);
				return t == null ? n : Hg(n, t);
			}
			var kw = G(function(e, t) {
				e = w(e);
				var r = -1, i = t.length, a = i > 2 ? t[2] : n;
				for (a && Py(t[0], t[1], a) && (i = 1); ++r < i;) for (var o = t[r], s = Kw(o), c = -1, l = s.length; ++c < l;) {
					var u = s[c], d = e[u];
					(d === n || jC(d, an[u]) && !M.call(e, u)) && (e[u] = o[u]);
				}
				return e;
			}), Aw = G(function(e) {
				return e.push(n, sy), No(Xw, n, e);
			});
			function jw(e, t) {
				return Us(e, K(t, 3), s_);
			}
			function Mw(e, t) {
				return Us(e, K(t, 3), c_);
			}
			function Nw(e, t) {
				return e == null ? e : a_(e, K(t, 3), Kw);
			}
			function Pw(e, t) {
				return e == null ? e : o_(e, K(t, 3), Kw);
			}
			function Fw(e, t) {
				return e && s_(e, K(t, 3));
			}
			function Iw(e, t) {
				return e && c_(e, K(t, 3));
			}
			function Lw(e) {
				return e == null ? [] : l_(e, Gw(e));
			}
			function Rw(e) {
				return e == null ? [] : l_(e, Kw(e));
			}
			function zw(e, t, r) {
				var i = e == null ? n : u_(e, t);
				return i === n ? r : i;
			}
			function Bw(e, t) {
				return e != null && Dy(e, t, m_);
			}
			function Vw(e, t) {
				return e != null && Dy(e, t, h_);
			}
			var Hw = Jv(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = cr.call(t)), e[t] = n;
			}, YT($T)), Uw = Jv(function(e, t, n) {
				t != null && typeof t.toString != "function" && (t = cr.call(t)), M.call(e, t) ? e[t].push(n) : e[t] = [n];
			}, K), Ww = G(y_);
			function Gw(e) {
				return IC(e) ? Pg(e) : M_(e);
			}
			function Kw(e) {
				return IC(e) ? Pg(e, !0) : N_(e);
			}
			function qw(e, t) {
				var n = {};
				return t = K(t, 3), s_(e, function(e, r, i) {
					Wg(n, t(e, r, i), e);
				}), n;
			}
			function Jw(e, t) {
				var n = {};
				return t = K(t, 3), s_(e, function(e, r, i) {
					Wg(n, r, t(e, r, i));
				}), n;
			}
			var Yw = Lv(function(e, t, n) {
				R_(e, t, n);
			}), Xw = Lv(function(e, t, n, r) {
				R_(e, t, n, r);
			}), Zw = fy(function(e, t) {
				var n = {};
				if (e == null) return n;
				var r = !1;
				t = B(t, function(t) {
					return t = vv(t, e), r ||= t.length > 1, t;
				}), Nv(e, my(e), n), r && (n = qg(n, d | f | p, cy));
				for (var i = t.length; i--;) uv(n, t[i]);
				return n;
			});
			function Qw(e, t) {
				return eT(e, mC(K(t)));
			}
			var $w = fy(function(e, t) {
				return e == null ? {} : H_(e, t);
			});
			function eT(e, t) {
				if (e == null) return {};
				var n = B(my(e), function(e) {
					return [e];
				});
				return t = K(t), U_(e, n, function(e, n) {
					return t(e, n[0]);
				});
			}
			function tT(e, t, r) {
				t = vv(t, e);
				var i = -1, a = t.length;
				for (a || (a = 1, e = n); ++i < a;) {
					var o = e == null ? n : e[ix(t[i])];
					o === n && (i = a, o = r), e = qC(o) ? o.call(e) : o;
				}
				return e;
			}
			function nT(e, t, n) {
				return e == null ? e : Q_(e, t, n);
			}
			function rT(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : Q_(e, t, r, i);
			}
			var iT = iy(Gw), aT = iy(Kw);
			function oT(e, t, n) {
				var r = J(e), i = r || zC(e) || dw(e);
				if (t = K(t, 4), n == null) {
					var a = e && e.constructor;
					n = i ? r ? new a() : [] : Y(e) && qC(a) ? Vs(jr(e)) : {};
				}
				return (i ? zo : s_)(e, function(e, r, i) {
					return t(n, e, r, i);
				}), n;
			}
			function sT(e, t) {
				return e == null ? !0 : uv(e, t);
			}
			function cT(e, t, n) {
				return e == null ? e : dv(e, t, _v(n));
			}
			function lT(e, t, r, i) {
				return i = typeof i == "function" ? i : n, e == null ? e : dv(e, t, _v(r), i);
			}
			function uT(e) {
				return e == null ? [] : uu(e, Gw(e));
			}
			function dT(e) {
				return e == null ? [] : uu(e, Kw(e));
			}
			function fT(e, t, r) {
				return r === n && (r = t, t = n), r !== n && (r = bw(r), r = r === r ? r : 0), t !== n && (t = bw(t), t = t === t ? t : 0), Kg(bw(e), t, r);
			}
			function pT(e, t, r) {
				return t = vw(t), r === n ? (r = t, t = 0) : r = vw(r), e = bw(e), g_(e, t, r);
			}
			function mT(e, t, r) {
				if (r && typeof r != "boolean" && Py(e, t, r) && (t = r = n), r === n && (typeof t == "boolean" ? (r = t, t = n) : typeof e == "boolean" && (r = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = vw(e), t === n ? (t = e, e = 0) : t = vw(t)), e > t) {
					var i = e;
					e = t, t = i;
				}
				if (r || e % 1 || t % 1) {
					var a = ia();
					return F(e + a * (t - e + Aa("1e-" + ((a + "").length - 1))), t);
				}
				return q_(e, t);
			}
			var hT = Hv(function(e, t, n) {
				return t = t.toLowerCase(), e + (n ? gT(t) : t);
			});
			function gT(e) {
				return UT(Q(e).toLowerCase());
			}
			function _T(e) {
				return e = Q(e), e && e.replace(qn, gu).replace(ya, "");
			}
			function vT(e, t, r) {
				e = Q(e), t = cv(t);
				var i = e.length;
				r = r === n ? i : Kg(X(r), 0, i);
				var a = r;
				return r -= t.length, r >= 0 && e.slice(r, a) == t;
			}
			function yT(e) {
				return e = Q(e), e && Lt.test(e) ? e.replace(Ft, _u) : e;
			}
			function bT(e) {
				return e = Q(e), e && $t.test(e) ? e.replace(Qt, "\\$&") : e;
			}
			var xT = Hv(function(e, t, n) {
				return e + (n ? "-" : "") + t.toLowerCase();
			}), ST = Hv(function(e, t, n) {
				return e + (n ? " " : "") + t.toLowerCase();
			}), CT = Vv("toLowerCase");
			function wT(e, t, n) {
				e = Q(e), t = X(t);
				var r = t ? vd(e) : 0;
				if (!t || r >= t) return e;
				var i = (t - r) / 2;
				return Zv(ii(i), n) + e + Zv(ri(i), n);
			}
			function TT(e, t, n) {
				e = Q(e), t = X(t);
				var r = t ? vd(e) : 0;
				return t && r < t ? e + Zv(t - r, n) : e;
			}
			function ET(e, t, n) {
				e = Q(e), t = X(t);
				var r = t ? vd(e) : 0;
				return t && r < t ? Zv(t - r, n) + e : e;
			}
			function DT(e, t, n) {
				return n || t == null ? t = 0 : t &&= +t, fi(Q(e).replace(en, ""), t || 0);
			}
			function OT(e, t, r) {
				return t = (r ? Py(e, t, r) : t === n) ? 1 : X(t), Y_(Q(e), t);
			}
			function kT() {
				var e = arguments, t = Q(e[0]);
				return e.length < 3 ? t : t.replace(e[1], e[2]);
			}
			var AT = Hv(function(e, t, n) {
				return e + (n ? "_" : "") + t.toLowerCase();
			});
			function jT(e, t, r) {
				return r && typeof r != "number" && Py(e, t, r) && (t = r = n), r = r === n ? Se : r >>> 0, r ? (e = Q(e), e && (typeof t == "string" || t != null && !ow(t)) && (t = cv(t), !t && xu(e)) ? bv(yd(e), 0, r) : e.split(t, r)) : [];
			}
			var MT = Hv(function(e, t, n) {
				return e + (n ? " " : "") + UT(t);
			});
			function NT(e, t, n) {
				return e = Q(e), n = n == null ? 0 : Kg(X(n), 0, e.length), t = cv(t), e.slice(n, n + t.length) == t;
			}
			function PT(e, t, r) {
				var i = V.templateSettings;
				r && Py(e, t, r) && (t = n), e = Q(e), t = Tw({}, t, i, oy);
				var a = Tw({}, t.imports, i.imports, oy), o = Gw(a), c = uu(a, o), u, d, f = 0, p = t.interpolate || Yn, m = "__p += '", h = T((t.escape || Yn).source + "|" + p.source + "|" + (p === Gt ? En : Yn).source + "|" + (t.evaluate || Yn).source + "|$", "g"), g = "//# sourceURL=" + (M.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ta + "]") + "\n";
				e.replace(h, function(t, n, r, i, a, o) {
					return r ||= i, m += e.slice(f, o).replace(er, yu), n && (u = !0, m += "' +\n__e(" + n + ") +\n'"), a && (d = !0, m += "';\n" + a + ";\n__p += '"), r && (m += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = o + t.length, t;
				}), m += "';\n";
				var _ = M.call(t, "variable") && t.variable;
				if (!_) m = "with (obj) {\n" + m + "\n}\n";
				else if (Sn.test(_)) throw new s("Invalid `variable` option passed into `_.template`");
				m = (d ? m.replace(Dt, "") : m).replace(At, "$1").replace(Mt, "$1;"), m = "function(" + (_ || "obj") + ") {\n" + (_ ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (u ? ", __e = _.escape" : "") + (d ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
				var v = GT(function() {
					return l(o, g + "return " + m).apply(n, c);
				});
				if (v.source = m, GC(v)) throw v;
				return v;
			}
			function FT(e) {
				return Q(e).toLowerCase();
			}
			function IT(e) {
				return Q(e).toUpperCase();
			}
			function LT(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return cu(e);
				if (!e || !(t = cv(t))) return e;
				var i = yd(e), a = yd(t);
				return bv(i, pu(i, a), mu(i, a) + 1).join("");
			}
			function RT(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return e.slice(0, xd(e) + 1);
				if (!e || !(t = cv(t))) return e;
				var i = yd(e);
				return bv(i, 0, mu(i, yd(t)) + 1).join("");
			}
			function zT(e, t, r) {
				if (e = Q(e), e && (r || t === n)) return e.replace(en, "");
				if (!e || !(t = cv(t))) return e;
				var i = yd(e);
				return bv(i, pu(i, yd(t))).join("");
			}
			function BT(e, t) {
				var r = 30, i = "...";
				if (Y(t)) {
					var a = "separator" in t ? t.separator : a;
					r = "length" in t ? X(t.length) : r, i = "omission" in t ? cv(t.omission) : i;
				}
				e = Q(e);
				var o = e.length;
				if (xu(e)) {
					var s = yd(e);
					o = s.length;
				}
				if (r >= o) return e;
				var c = r - vd(i);
				if (c < 1) return i;
				var l = s ? bv(s, 0, c).join("") : e.slice(0, c);
				if (a === n) return l + i;
				if (s && (c += l.length - c), ow(a)) {
					if (e.slice(c).search(a)) {
						var u, d = l;
						for (a.global || (a = T(a.source, Q(On.exec(a)) + "g")), a.lastIndex = 0; u = a.exec(d);) var f = u.index;
						l = l.slice(0, f === n ? c : f);
					}
				} else if (e.indexOf(cv(a), c) != c) {
					var p = l.lastIndexOf(a);
					p > -1 && (l = l.slice(0, p));
				}
				return l + i;
			}
			function VT(e) {
				return e = Q(e), e && It.test(e) ? e.replace(Pt, wd) : e;
			}
			var HT = Hv(function(e, t, n) {
				return e + (n ? " " : "") + t.toUpperCase();
			}), UT = Vv("toUpperCase");
			function WT(e, t, r) {
				return e = Q(e), t = r ? n : t, t === n ? wu(e) ? Md(e) : Hs(e) : e.match(t) || [];
			}
			var GT = G(function(e, t) {
				try {
					return No(e, n, t);
				} catch (e) {
					return GC(e) ? e : new s(e);
				}
			}), KT = fy(function(e, t) {
				return zo(t, function(t) {
					t = ix(t), Wg(e, t, aC(e[t], e));
				}), e;
			});
			function qT(e) {
				var t = e == null ? 0 : e.length, n = K();
				return e = t ? B(e, function(e) {
					if (typeof e[1] != "function") throw new D(o);
					return [n(e[0]), e[1]];
				}) : [], G(function(n) {
					for (var r = -1; ++r < t;) {
						var i = e[r];
						if (No(i[0], this, n)) return No(i[1], this, n);
					}
				});
			}
			function JT(e) {
				return Jg(qg(e, d));
			}
			function YT(e) {
				return function() {
					return e;
				};
			}
			function XT(e, t) {
				return e == null || e !== e ? t : e;
			}
			var ZT = Kv(), QT = Kv(!0);
			function $T(e) {
				return e;
			}
			function eE(e) {
				return j_(typeof e == "function" ? e : qg(e, d));
			}
			function tE(e) {
				return I_(qg(e, d));
			}
			function nE(e, t) {
				return L_(e, qg(t, d));
			}
			var rE = G(function(e, t) {
				return function(n) {
					return y_(n, e, t);
				};
			}), iE = G(function(e, t) {
				return function(n) {
					return y_(e, n, t);
				};
			});
			function aE(e, t, n) {
				var r = Gw(t), i = l_(t, r);
				n == null && !(Y(t) && (i.length || !r.length)) && (n = t, t = e, e = this, i = l_(t, Gw(t)));
				var a = !(Y(n) && "chain" in n) || !!n.chain, o = qC(e);
				return zo(i, function(n) {
					var r = t[n];
					e[n] = r, o && (e.prototype[n] = function() {
						var t = this.__chain__;
						if (a || t) {
							var n = e(this.__wrapped__);
							return (n.__actions__ = Mv(this.__actions__)).push({
								func: r,
								args: arguments,
								thisArg: e
							}), n.__chain__ = t, n;
						}
						return r.apply(e, Jo([this.value()], arguments));
					});
				}), e;
			}
			function oE() {
				return Fa._ === this && (Fa._ = _r), this;
			}
			function sE() {}
			function cE(e) {
				return e = X(e), G(function(t) {
					return B_(t, e);
				});
			}
			var lE = Xv(B), uE = Xv(Vo), dE = Xv(Ns);
			function fE(e) {
				return Fy(e) ? Qs(ix(e)) : W_(e);
			}
			function pE(e) {
				return function(t) {
					return e == null ? n : u_(e, t);
				};
			}
			var mE = $v(), hE = $v(!0);
			function gE() {
				return [];
			}
			function _E() {
				return !1;
			}
			function vE() {
				return {};
			}
			function yE() {
				return "";
			}
			function bE() {
				return !0;
			}
			function xE(e, t) {
				if (e = X(e), e < 1 || e > he) return [];
				var n = Se, r = F(e, Se);
				t = K(t), e -= Se;
				for (var i = au(r, t); ++n < e;) t(n);
				return i;
			}
			function SE(e) {
				return J(e) ? B(e, ix) : uw(e) ? [e] : Mv(rx(Q(e)));
			}
			function CE(e) {
				var t = ++nr;
				return Q(e) + t;
			}
			var wE = Yv(function(e, t) {
				return e + t;
			}, 0), TE = ny("ceil"), EE = Yv(function(e, t) {
				return e / t;
			}, 1), DE = ny("floor");
			function OE(e) {
				return e && e.length ? t_(e, $T, p_) : n;
			}
			function kE(e, t) {
				return e && e.length ? t_(e, K(t, 2), p_) : n;
			}
			function AE(e) {
				return Xs(e, $T);
			}
			function jE(e, t) {
				return Xs(e, K(t, 2));
			}
			function ME(e) {
				return e && e.length ? t_(e, $T, P_) : n;
			}
			function NE(e, t) {
				return e && e.length ? t_(e, K(t, 2), P_) : n;
			}
			var PE = Yv(function(e, t) {
				return e * t;
			}, 1), FE = ny("round"), IE = Yv(function(e, t) {
				return e - t;
			}, 0);
			function LE(e) {
				return e && e.length ? iu(e, $T) : 0;
			}
			function RE(e, t) {
				return e && e.length ? iu(e, K(t, 2)) : 0;
			}
			return V.after = nC, V.ary = rC, V.assign = Cw, V.assignIn = ww, V.assignInWith = Tw, V.assignWith = Ew, V.at = Dw, V.before = iC, V.bind = aC, V.bindAll = KT, V.bindKey = oC, V.castArray = TC, V.chain = vS, V.chunk = cx, V.compact = lx, V.concat = ux, V.cond = qT, V.conforms = JT, V.constant = YT, V.countBy = kS, V.create = Ow, V.curry = sC, V.curryRight = cC, V.debounce = lC, V.defaults = kw, V.defaultsDeep = Aw, V.defer = uC, V.delay = dC, V.difference = dx, V.differenceBy = fx, V.differenceWith = px, V.drop = mx, V.dropRight = hx, V.dropRightWhile = gx, V.dropWhile = _x, V.fill = vx, V.filter = jS, V.flatMap = PS, V.flatMapDeep = FS, V.flatMapDepth = IS, V.flatten = xx, V.flattenDeep = Sx, V.flattenDepth = Cx, V.flip = fC, V.flow = ZT, V.flowRight = QT, V.fromPairs = wx, V.functions = Lw, V.functionsIn = Rw, V.groupBy = zS, V.initial = Dx, V.intersection = Ox, V.intersectionBy = kx, V.intersectionWith = Ax, V.invert = Hw, V.invertBy = Uw, V.invokeMap = VS, V.iteratee = eE, V.keyBy = HS, V.keys = Gw, V.keysIn = Kw, V.map = US, V.mapKeys = qw, V.mapValues = Jw, V.matches = tE, V.matchesProperty = nE, V.memoize = pC, V.merge = Yw, V.mergeWith = Xw, V.method = rE, V.methodOf = iE, V.mixin = aE, V.negate = mC, V.nthArg = cE, V.omit = Zw, V.omitBy = Qw, V.once = hC, V.orderBy = WS, V.over = lE, V.overArgs = gC, V.overEvery = uE, V.overSome = dE, V.partial = _C, V.partialRight = vC, V.partition = GS, V.pick = $w, V.pickBy = eT, V.property = fE, V.propertyOf = pE, V.pull = Fx, V.pullAll = Ix, V.pullAllBy = Lx, V.pullAllWith = Rx, V.pullAt = zx, V.range = mE, V.rangeRight = hE, V.rearg = yC, V.reject = JS, V.remove = Bx, V.rest = bC, V.reverse = Vx, V.sampleSize = XS, V.set = nT, V.setWith = rT, V.shuffle = ZS, V.slice = Hx, V.sortBy = eC, V.sortedUniq = Yx, V.sortedUniqBy = Xx, V.split = jT, V.spread = xC, V.tail = Zx, V.take = Qx, V.takeRight = $x, V.takeRightWhile = eS, V.takeWhile = tS, V.tap = yS, V.throttle = SC, V.thru = bS, V.toArray = _w, V.toPairs = iT, V.toPairsIn = aT, V.toPath = SE, V.toPlainObject = xw, V.transform = oT, V.unary = CC, V.union = nS, V.unionBy = rS, V.unionWith = iS, V.uniq = aS, V.uniqBy = oS, V.uniqWith = sS, V.unset = sT, V.unzip = cS, V.unzipWith = lS, V.update = cT, V.updateWith = lT, V.values = uT, V.valuesIn = dT, V.without = uS, V.words = WT, V.wrap = wC, V.xor = dS, V.xorBy = fS, V.xorWith = pS, V.zip = mS, V.zipObject = hS, V.zipObjectDeep = gS, V.zipWith = _S, V.entries = iT, V.entriesIn = aT, V.extend = ww, V.extendWith = Tw, aE(V, V), V.add = wE, V.attempt = GT, V.camelCase = hT, V.capitalize = gT, V.ceil = TE, V.clamp = fT, V.clone = EC, V.cloneDeep = OC, V.cloneDeepWith = kC, V.cloneWith = DC, V.conformsTo = AC, V.deburr = _T, V.defaultTo = XT, V.divide = EE, V.endsWith = vT, V.eq = jC, V.escape = yT, V.escapeRegExp = bT, V.every = AS, V.find = MS, V.findIndex = yx, V.findKey = jw, V.findLast = NS, V.findLastIndex = bx, V.findLastKey = Mw, V.floor = DE, V.forEach = LS, V.forEachRight = RS, V.forIn = Nw, V.forInRight = Pw, V.forOwn = Fw, V.forOwnRight = Iw, V.get = zw, V.gt = MC, V.gte = NC, V.has = Bw, V.hasIn = Vw, V.head = Tx, V.identity = $T, V.includes = BS, V.indexOf = Ex, V.inRange = pT, V.invoke = Ww, V.isArguments = PC, V.isArray = J, V.isArrayBuffer = FC, V.isArrayLike = IC, V.isArrayLikeObject = LC, V.isBoolean = RC, V.isBuffer = zC, V.isDate = BC, V.isElement = VC, V.isEmpty = HC, V.isEqual = UC, V.isEqualWith = WC, V.isError = GC, V.isFinite = KC, V.isFunction = qC, V.isInteger = JC, V.isLength = YC, V.isMap = ZC, V.isMatch = QC, V.isMatchWith = $C, V.isNaN = ew, V.isNative = tw, V.isNil = rw, V.isNull = nw, V.isNumber = iw, V.isObject = Y, V.isObjectLike = XC, V.isPlainObject = aw, V.isRegExp = ow, V.isSafeInteger = sw, V.isSet = cw, V.isString = lw, V.isSymbol = uw, V.isTypedArray = dw, V.isUndefined = fw, V.isWeakMap = pw, V.isWeakSet = mw, V.join = jx, V.kebabCase = xT, V.last = Mx, V.lastIndexOf = Nx, V.lowerCase = ST, V.lowerFirst = CT, V.lt = hw, V.lte = gw, V.max = OE, V.maxBy = kE, V.mean = AE, V.meanBy = jE, V.min = ME, V.minBy = NE, V.stubArray = gE, V.stubFalse = _E, V.stubObject = vE, V.stubString = yE, V.stubTrue = bE, V.multiply = PE, V.nth = Px, V.noConflict = oE, V.noop = sE, V.now = tC, V.pad = wT, V.padEnd = TT, V.padStart = ET, V.parseInt = DT, V.random = mT, V.reduce = KS, V.reduceRight = qS, V.repeat = OT, V.replace = kT, V.result = tT, V.round = FE, V.runInContext = e, V.sample = YS, V.size = QS, V.snakeCase = AT, V.some = $S, V.sortedIndex = Ux, V.sortedIndexBy = Wx, V.sortedIndexOf = Gx, V.sortedLastIndex = Kx, V.sortedLastIndexBy = qx, V.sortedLastIndexOf = Jx, V.startCase = MT, V.startsWith = NT, V.subtract = IE, V.sum = LE, V.sumBy = RE, V.template = PT, V.times = xE, V.toFinite = vw, V.toInteger = X, V.toLength = yw, V.toLower = FT, V.toNumber = bw, V.toSafeInteger = Sw, V.toString = Q, V.toUpper = IT, V.trim = LT, V.trimEnd = RT, V.trimStart = zT, V.truncate = BT, V.unescape = VT, V.uniqueId = CE, V.upperCase = HT, V.upperFirst = UT, V.each = LS, V.eachRight = RS, V.first = Tx, aE(V, function() {
				var e = {};
				return s_(V, function(t, n) {
					M.call(V.prototype, n) || (e[n] = t);
				}), e;
			}(), { chain: !1 }), V.VERSION = "4.17.23", zo([
				"bind",
				"bindKey",
				"curry",
				"curryRight",
				"partial",
				"partialRight"
			], function(e) {
				V[e].placeholder = V;
			}), zo(["drop", "take"], function(e, t) {
				H.prototype[e] = function(r) {
					r = r === n ? 1 : P(X(r), 0);
					var i = this.__filtered__ && !t ? new H(this) : this.clone();
					return i.__filtered__ ? i.__takeCount__ = F(r, i.__takeCount__) : i.__views__.push({
						size: F(r, Se),
						type: e + (i.__dir__ < 0 ? "Right" : "")
					}), i;
				}, H.prototype[e + "Right"] = function(t) {
					return this.reverse()[e](t).reverse();
				};
			}), zo([
				"filter",
				"map",
				"takeWhile"
			], function(e, t) {
				var n = t + 1, r = n == ue || n == 3;
				H.prototype[e] = function(e) {
					var t = this.clone();
					return t.__iteratees__.push({
						iteratee: K(e, 3),
						type: n
					}), t.__filtered__ = t.__filtered__ || r, t;
				};
			}), zo(["head", "last"], function(e, t) {
				var n = "take" + (t ? "Right" : "");
				H.prototype[e] = function() {
					return this[n](1).value()[0];
				};
			}), zo(["initial", "tail"], function(e, t) {
				var n = "drop" + (t ? "" : "Right");
				H.prototype[e] = function() {
					return this.__filtered__ ? new H(this) : this[n](1);
				};
			}), H.prototype.compact = function() {
				return this.filter($T);
			}, H.prototype.find = function(e) {
				return this.filter(e).head();
			}, H.prototype.findLast = function(e) {
				return this.reverse().find(e);
			}, H.prototype.invokeMap = G(function(e, t) {
				return typeof e == "function" ? new H(this) : this.map(function(n) {
					return y_(n, e, t);
				});
			}), H.prototype.reject = function(e) {
				return this.filter(mC(K(e)));
			}, H.prototype.slice = function(e, t) {
				e = X(e);
				var r = this;
				return r.__filtered__ && (e > 0 || t < 0) ? new H(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== n && (t = X(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
			}, H.prototype.takeRightWhile = function(e) {
				return this.reverse().takeWhile(e).reverse();
			}, H.prototype.toArray = function() {
				return this.take(Se);
			}, s_(H.prototype, function(e, t) {
				var r = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), a = V[i ? "take" + (t == "last" ? "Right" : "") : t], o = i || /^find/.test(t);
				a && (V.prototype[t] = function() {
					var t = this.__wrapped__, s = i ? [1] : arguments, c = t instanceof H, l = s[0], u = c || J(t), d = function(e) {
						var t = a.apply(V, Jo([e], s));
						return i && f ? t[0] : t;
					};
					u && r && typeof l == "function" && l.length != 1 && (c = u = !1);
					var f = this.__chain__, p = !!this.__actions__.length, m = o && !f, h = c && !p;
					if (!o && u) {
						t = h ? t : new H(this);
						var g = e.apply(t, s);
						return g.__actions__.push({
							func: bS,
							args: [d],
							thisArg: n
						}), new $u(g, f);
					}
					return m && h ? e.apply(this, s) : (g = this.thru(d), m ? i ? g.value()[0] : g.value() : g);
				});
			}), zo([
				"pop",
				"push",
				"shift",
				"sort",
				"splice",
				"unshift"
			], function(e) {
				var t = de[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
				V.prototype[e] = function() {
					var e = arguments;
					if (r && !this.__chain__) {
						var i = this.value();
						return t.apply(J(i) ? i : [], e);
					}
					return this[n](function(n) {
						return t.apply(J(n) ? n : [], e);
					});
				};
			}), s_(H.prototype, function(e, t) {
				var n = V[t];
				if (n) {
					var r = n.name + "";
					M.call(Da, r) || (Da[r] = []), Da[r].push({
						name: t,
						func: n
					});
				}
			}), Da[qv(n, _).name] = [{
				name: "wrapper",
				func: n
			}], H.prototype.clone = Td, H.prototype.reverse = zd, H.prototype.value = Bd, V.prototype.at = xS, V.prototype.chain = SS, V.prototype.commit = CS, V.prototype.next = wS, V.prototype.plant = ES, V.prototype.reverse = DS, V.prototype.toJSON = V.prototype.valueOf = V.prototype.value = OS, V.prototype.first = V.prototype.head, Yr && (V.prototype[Yr] = TS), V;
		})();
		typeof define == "function" && typeof define.amd == "object" && define.amd ? (Fa._ = Rd, define(function() {
			return Rd;
		})) : La ? ((La.exports = Rd)._ = Rd, Ia._ = Rd) : Fa._ = Rd;
	}).call(e);
})), require_iota = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		for (var t = Array(e), n = 0; n < e; ++n) t[n] = n;
		return t;
	}
	t.exports = n;
})), require_is_buffer = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = function(e) {
		return e != null && (n(e) || r(e) || !!e._isBuffer);
	};
	function n(e) {
		return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
	}
	function r(e) {
		return typeof e.readFloatLE == "function" && typeof e.slice == "function" && n(e.slice(0, 0));
	}
})), require_ndarray = /* @__PURE__ */ __commonJSMin(((e, t) => {
	var n = require_iota(), r = require_is_buffer(), i = typeof Float64Array < "u";
	function a(e, t) {
		return e[0] - t[0];
	}
	function o() {
		var e = this.stride, t = Array(e.length), n;
		for (n = 0; n < t.length; ++n) t[n] = [Math.abs(e[n]), n];
		t.sort(a);
		var r = Array(t.length);
		for (n = 0; n < r.length; ++n) r[n] = t[n][1];
		return r;
	}
	function s(e, t) {
		var r = [
			"View",
			t,
			"d",
			e
		].join("");
		t < 0 && (r = "View_Nil" + e);
		var i = e === "generic";
		if (t === -1) {
			var a = "function " + r + "(a){this.data=a;};var proto=" + r + ".prototype;proto.dtype='" + e + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + r + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + r + "(a){return new " + r + "(a);}", s = Function(a);
			return s();
		} else if (t === 0) {
			var a = "function " + r + "(a,d) {this.data = a;this.offset = d};var proto=" + r + ".prototype;proto.dtype='" + e + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + r + "_copy() {return new " + r + "(this.data,this.offset)};proto.pick=function " + r + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + r + "_get(){return " + (i ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + r + "_set(v){return " + (i ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + r + "(a,b,c,d){return new " + r + "(a,d)}", s = Function("TrivialArray", a);
			return s(l[e][0]);
		}
		var a = ["'use strict'"], c = n(t), u = c.map(function(e) {
			return "i" + e;
		}), d = "this.offset+" + c.map(function(e) {
			return "this.stride[" + e + "]*i" + e;
		}).join("+"), f = c.map(function(e) {
			return "b" + e;
		}).join(","), p = c.map(function(e) {
			return "c" + e;
		}).join(",");
		a.push("function " + r + "(a," + f + "," + p + ",d){this.data=a", "this.shape=[" + f + "]", "this.stride=[" + p + "]", "this.offset=d|0}", "var proto=" + r + ".prototype", "proto.dtype='" + e + "'", "proto.dimension=" + t), a.push("Object.defineProperty(proto,'size',{get:function " + r + "_size(){return " + c.map(function(e) {
			return "this.shape[" + e + "]";
		}).join("*"), "}})"), t === 1 ? a.push("proto.order=[0]") : (a.push("Object.defineProperty(proto,'order',{get:"), t < 4 ? (a.push("function " + r + "_order(){"), t === 2 ? a.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : t === 3 && a.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : a.push("ORDER})")), a.push("proto.set=function " + r + "_set(" + u.join(",") + ",v){"), i ? a.push("return this.data.set(" + d + ",v)}") : a.push("return this.data[" + d + "]=v}"), a.push("proto.get=function " + r + "_get(" + u.join(",") + "){"), i ? a.push("return this.data.get(" + d + ")}") : a.push("return this.data[" + d + "]}"), a.push("proto.index=function " + r + "_index(", u.join(), "){return " + d + "}"), a.push("proto.hi=function " + r + "_hi(" + u.join(",") + "){return new " + r + "(this.data," + c.map(function(e) {
			return [
				"(typeof i",
				e,
				"!=='number'||i",
				e,
				"<0)?this.shape[",
				e,
				"]:i",
				e,
				"|0"
			].join("");
		}).join(",") + "," + c.map(function(e) {
			return "this.stride[" + e + "]";
		}).join(",") + ",this.offset)}");
		var m = c.map(function(e) {
			return "a" + e + "=this.shape[" + e + "]";
		}), h = c.map(function(e) {
			return "c" + e + "=this.stride[" + e + "]";
		});
		a.push("proto.lo=function " + r + "_lo(" + u.join(",") + "){var b=this.offset,d=0," + m.join(",") + "," + h.join(","));
		for (var g = 0; g < t; ++g) a.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){d=i" + g + "|0;b+=c" + g + "*d;a" + g + "-=d}");
		a.push("return new " + r + "(this.data," + c.map(function(e) {
			return "a" + e;
		}).join(",") + "," + c.map(function(e) {
			return "c" + e;
		}).join(",") + ",b)}"), a.push("proto.step=function " + r + "_step(" + u.join(",") + "){var " + c.map(function(e) {
			return "a" + e + "=this.shape[" + e + "]";
		}).join(",") + "," + c.map(function(e) {
			return "b" + e + "=this.stride[" + e + "]";
		}).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
		for (var g = 0; g < t; ++g) a.push("if(typeof i" + g + "==='number'){d=i" + g + "|0;if(d<0){c+=b" + g + "*(a" + g + "-1);a" + g + "=ceil(-a" + g + "/d)}else{a" + g + "=ceil(a" + g + "/d)}b" + g + "*=d}");
		a.push("return new " + r + "(this.data," + c.map(function(e) {
			return "a" + e;
		}).join(",") + "," + c.map(function(e) {
			return "b" + e;
		}).join(",") + ",c)}");
		for (var _ = Array(t), v = Array(t), g = 0; g < t; ++g) _[g] = "a[i" + g + "]", v[g] = "b[i" + g + "]";
		a.push("proto.transpose=function " + r + "_transpose(" + u + "){" + u.map(function(e, t) {
			return e + "=(" + e + "===undefined?" + t + ":" + e + "|0)";
		}).join(";"), "var a=this.shape,b=this.stride;return new " + r + "(this.data," + _.join(",") + "," + v.join(",") + ",this.offset)}"), a.push("proto.pick=function " + r + "_pick(" + u + "){var a=[],b=[],c=this.offset");
		for (var g = 0; g < t; ++g) a.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){c=(c+this.stride[" + g + "]*i" + g + ")|0}else{a.push(this.shape[" + g + "]);b.push(this.stride[" + g + "])}");
		a.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), a.push("return function construct_" + r + "(data,shape,stride,offset){return new " + r + "(data," + c.map(function(e) {
			return "shape[" + e + "]";
		}).join(",") + "," + c.map(function(e) {
			return "stride[" + e + "]";
		}).join(",") + ",offset)}");
		var s = Function("CTOR_LIST", "ORDER", a.join("\n"));
		return s(l[e], o);
	}
	function c(e) {
		if (r(e)) return "buffer";
		if (i) switch (Object.prototype.toString.call(e)) {
			case "[object Float64Array]": return "float64";
			case "[object Float32Array]": return "float32";
			case "[object Int8Array]": return "int8";
			case "[object Int16Array]": return "int16";
			case "[object Int32Array]": return "int32";
			case "[object Uint8Array]": return "uint8";
			case "[object Uint16Array]": return "uint16";
			case "[object Uint32Array]": return "uint32";
			case "[object Uint8ClampedArray]": return "uint8_clamped";
			case "[object BigInt64Array]": return "bigint64";
			case "[object BigUint64Array]": return "biguint64";
		}
		return Array.isArray(e) ? "array" : "generic";
	}
	var l = {
		float32: [],
		float64: [],
		int8: [],
		int16: [],
		int32: [],
		uint8: [],
		uint16: [],
		uint32: [],
		array: [],
		uint8_clamped: [],
		bigint64: [],
		biguint64: [],
		buffer: [],
		generic: []
	};
	function u(e, t, n, r) {
		if (e === void 0) {
			var i = l.array[0];
			return i([]);
		} else typeof e == "number" && (e = [e]);
		t === void 0 && (t = [e.length]);
		var a = t.length;
		if (n === void 0) {
			n = Array(a);
			for (var o = a - 1, u = 1; o >= 0; --o) n[o] = u, u *= t[o];
		}
		if (r === void 0) {
			r = 0;
			for (var o = 0; o < a; ++o) n[o] < 0 && (r -= (t[o] - 1) * n[o]);
		}
		for (var d = c(e), f = l[d]; f.length <= a + 1;) f.push(s(d, f.length - 1));
		var i = f[a + 1];
		return i(e, t, n, r);
	}
	t.exports = u;
})), import_lodash = require_lodash(), import_ndarray = /* @__PURE__ */ __toESM(require_ndarray(), 1), Od = Object.create, Dn = Object.defineProperty, Id = Object.getOwnPropertyDescriptor, Sd = Object.getOwnPropertyNames, Ad = Object.getPrototypeOf, Pd = Object.prototype.hasOwnProperty, E = (e, t) => () => (e && (t = e(e = 0)), t), me = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Pr = (e, t) => {
	for (var n in t) Dn(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Ha = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of Sd(t)) !Pd.call(e, i) && i !== n && Dn(e, i, {
		get: () => t[i],
		enumerable: !(r = Id(t, i)) || r.enumerable
	});
	return e;
}, Er = (e, t, n) => (n = e == null ? {} : Od(Ad(e)), Ha(t || !e || !e.__esModule ? Dn(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), or = (e) => Ha(Dn({}, "__esModule", { value: !0 }), e), Ln, ir, Dr, Ed, Fn, Cn = E(() => {
	Ln = /* @__PURE__ */ new Map(), ir = [], Dr = (e, t, n) => {
		if (t && typeof t.init == "function" && typeof t.createInferenceSessionHandler == "function") {
			let r = Ln.get(e);
			if (r === void 0) Ln.set(e, {
				backend: t,
				priority: n
			});
			else {
				if (r.priority > n) return;
				if (r.priority === n && r.backend !== t) throw Error(`cannot register backend "${e}" using priority ${n}`);
			}
			if (n >= 0) {
				let t = ir.indexOf(e);
				t !== -1 && ir.splice(t, 1);
				for (let t = 0; t < ir.length; t++) if (Ln.get(ir[t]).priority <= n) {
					ir.splice(t, 0, e);
					return;
				}
				ir.push(e);
			}
			return;
		}
		throw TypeError("not a valid backend");
	}, Ed = async (e) => {
		let t = Ln.get(e);
		if (!t) return "backend not found.";
		if (t.initialized) return t.backend;
		if (t.aborted) return t.error;
		{
			let n = !!t.initPromise;
			try {
				return n || (t.initPromise = t.backend.init(e)), await t.initPromise, t.initialized = !0, t.backend;
			} catch (e) {
				return n || (t.error = `${e}`, t.aborted = !0), t.error;
			} finally {
				delete t.initPromise;
			}
		}
	}, Fn = async (e) => {
		let t = e.executionProviders || [], n = t.map((e) => typeof e == "string" ? e : e.name), r = n.length === 0 ? ir : n, i, a = [], o = /* @__PURE__ */ new Set();
		for (let e of r) {
			let t = await Ed(e);
			typeof t == "string" ? a.push({
				name: e,
				err: t
			}) : (i ||= t, i === t && o.add(e));
		}
		if (!i) throw Error(`no available backend found. ERR: ${a.map((e) => `[${e.name}] ${e.err}`).join(", ")}`);
		for (let { name: e, err: t } of a) n.includes(e) && console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);
		let s = t.filter((e) => o.has(typeof e == "string" ? e : e.name));
		return [i, new Proxy(e, { get: (e, t) => t === "executionProviders" ? s : Reflect.get(e, t) })];
	};
}), qa = E(() => {
	Cn();
}), ja, Ya = E(() => {
	ja = "1.17.3";
}), Xa, it, Ho = E(() => {
	Ya(), Xa = "warning", it = {
		wasm: {},
		webgl: {},
		webgpu: {},
		versions: { common: ja },
		set logLevel(e) {
			if (e !== void 0) {
				if (typeof e != "string" || [
					"verbose",
					"info",
					"warning",
					"error",
					"fatal"
				].indexOf(e) === -1) throw Error(`Unsupported logging level: ${e}`);
				Xa = e;
			}
		},
		get logLevel() {
			return Xa;
		}
	}, Object.defineProperty(it, "logLevel", { enumerable: !0 });
}), Z, Ka = E(() => {
	Ho(), Z = it;
}), Ja, Za, Qa = E(() => {
	Ja = (e, t) => {
		let n = typeof document < "u" ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
		n.width = e.dims[3], n.height = e.dims[2];
		let r = n.getContext("2d");
		if (r != null) {
			let i, a;
			t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (i = e.dims[2], a = e.dims[3]) : (i = e.dims[3], a = e.dims[2]);
			let o = t?.format === void 0 ? "RGB" : t.format, s = t?.norm, c, l;
			s === void 0 || s.mean === void 0 ? c = [
				255,
				255,
				255,
				255
			] : typeof s.mean == "number" ? c = [
				s.mean,
				s.mean,
				s.mean,
				s.mean
			] : (c = [
				s.mean[0],
				s.mean[1],
				s.mean[2],
				0
			], s.mean[3] !== void 0 && (c[3] = s.mean[3])), s === void 0 || s.bias === void 0 ? l = [
				0,
				0,
				0,
				0
			] : typeof s.bias == "number" ? l = [
				s.bias,
				s.bias,
				s.bias,
				s.bias
			] : (l = [
				s.bias[0],
				s.bias[1],
				s.bias[2],
				0
			], s.bias[3] !== void 0 && (l[3] = s.bias[3]));
			let u = a * i, d = 0, f = u, p = u * 2, m = -1;
			o === "RGBA" ? (d = 0, f = u, p = u * 2, m = u * 3) : o === "RGB" ? (d = 0, f = u, p = u * 2) : o === "RBG" && (d = 0, p = u, f = u * 2);
			for (let t = 0; t < a; t++) for (let n = 0; n < i; n++) {
				let i = (e.data[d++] - l[0]) * c[0], a = (e.data[f++] - l[1]) * c[1], o = (e.data[p++] - l[2]) * c[2], s = m === -1 ? 255 : (e.data[m++] - l[3]) * c[3];
				r.fillStyle = "rgba(" + i + "," + a + "," + o + "," + s + ")", r.fillRect(n, t, 1, 1);
			}
			if ("toDataURL" in n) return n.toDataURL();
			throw Error("toDataURL is not supported");
		} else throw Error("Can not access image data");
	}, Za = (e, t) => {
		let n = typeof document < "u" ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d"), r;
		if (n != null) {
			let i, a, o;
			t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (i = e.dims[2], a = e.dims[1], o = e.dims[3]) : (i = e.dims[3], a = e.dims[2], o = e.dims[1]);
			let s = t !== void 0 && t.format !== void 0 ? t.format : "RGB", c = t?.norm, l, u;
			c === void 0 || c.mean === void 0 ? l = [
				255,
				255,
				255,
				255
			] : typeof c.mean == "number" ? l = [
				c.mean,
				c.mean,
				c.mean,
				c.mean
			] : (l = [
				c.mean[0],
				c.mean[1],
				c.mean[2],
				255
			], c.mean[3] !== void 0 && (l[3] = c.mean[3])), c === void 0 || c.bias === void 0 ? u = [
				0,
				0,
				0,
				0
			] : typeof c.bias == "number" ? u = [
				c.bias,
				c.bias,
				c.bias,
				c.bias
			] : (u = [
				c.bias[0],
				c.bias[1],
				c.bias[2],
				0
			], c.bias[3] !== void 0 && (u[3] = c.bias[3]));
			let d = a * i;
			if (t !== void 0 && (t.format !== void 0 && o === 4 && t.format !== "RGBA" || o === 3 && t.format !== "RGB" && t.format !== "BGR")) throw Error("Tensor format doesn't match input tensor dims");
			let f = 4, p = 0, m = 1, h = 2, g = 3, _ = 0, v = d, y = d * 2, b = -1;
			s === "RGBA" ? (_ = 0, v = d, y = d * 2, b = d * 3) : s === "RGB" ? (_ = 0, v = d, y = d * 2) : s === "RBG" && (_ = 0, y = d, v = d * 2), r = n.createImageData(i, a);
			for (let t = 0; t < a * i; p += 4, m += 4, h += 4, g += 4, t++) r.data[p] = (e.data[_++] - u[0]) * l[0], r.data[m] = (e.data[v++] - u[1]) * l[1], r.data[h] = (e.data[y++] - u[2]) * l[2], r.data[g] = b === -1 ? 255 : (e.data[b++] - u[3]) * l[3];
		} else throw Error("Can not access image data");
		return r;
	};
}), qo, es, ts, rs, ns, os = E(() => {
	$n(), qo = (e, t) => {
		if (e === void 0) throw Error("Image buffer must be defined");
		if (t.height === void 0 || t.width === void 0) throw Error("Image height and width must be defined");
		if (t.tensorLayout === "NHWC") throw Error("NHWC Tensor layout is not supported yet");
		let { height: n, width: r } = t, i = t.norm ?? {
			mean: 255,
			bias: 0
		}, a, o;
		a = typeof i.mean == "number" ? [
			i.mean,
			i.mean,
			i.mean,
			i.mean
		] : [
			i.mean[0],
			i.mean[1],
			i.mean[2],
			i.mean[3] ?? 255
		], o = typeof i.bias == "number" ? [
			i.bias,
			i.bias,
			i.bias,
			i.bias
		] : [
			i.bias[0],
			i.bias[1],
			i.bias[2],
			i.bias[3] ?? 0
		];
		let s = t.format === void 0 ? "RGBA" : t.format, c = t.tensorFormat !== void 0 && t.tensorFormat !== void 0 ? t.tensorFormat : "RGB", l = n * r, u = c === "RGBA" ? new Float32Array(l * 4) : new Float32Array(l * 3), d = 4, f = 0, p = 1, m = 2, h = 3, g = 0, _ = l, v = l * 2, y = -1;
		s === "RGB" && (d = 3, f = 0, p = 1, m = 2, h = -1), c === "RGBA" ? y = l * 3 : c === "RBG" ? (g = 0, v = l, _ = l * 2) : c === "BGR" && (v = 0, _ = l, g = l * 2);
		for (let t = 0; t < l; t++, f += d, m += d, p += d, h += d) u[g++] = (e[f] + o[0]) / a[0], u[_++] = (e[p] + o[1]) / a[1], u[v++] = (e[m] + o[2]) / a[2], y !== -1 && h !== -1 && (u[y++] = (e[h] + o[3]) / a[3]);
		return c === "RGBA" ? new Xe("float32", u, [
			1,
			4,
			n,
			r
		]) : new Xe("float32", u, [
			1,
			3,
			n,
			r
		]);
	}, es = async (e, t) => {
		let n = typeof HTMLImageElement < "u" && e instanceof HTMLImageElement, r = typeof ImageData < "u" && e instanceof ImageData, i = typeof ImageBitmap < "u" && e instanceof ImageBitmap, a = typeof e == "string", o, s = t ?? {}, c = () => {
			if (typeof document < "u") return document.createElement("canvas");
			if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(1, 1);
			throw Error("Canvas is not supported");
		}, l = (e) => e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? e.getContext("2d") : null;
		if (n) {
			let n = c();
			n.width = e.width, n.height = e.height;
			let r = l(n);
			if (r != null) {
				let n = e.height, i = e.width;
				if (t !== void 0 && t.resizedHeight !== void 0 && t.resizedWidth !== void 0 && (n = t.resizedHeight, i = t.resizedWidth), t !== void 0) {
					if (s = t, t.tensorFormat !== void 0) throw Error("Image input config format must be RGBA for HTMLImageElement");
					s.tensorFormat = "RGBA", s.height = n, s.width = i;
				} else s.tensorFormat = "RGBA", s.height = n, s.width = i;
				r.drawImage(e, 0, 0), o = r.getImageData(0, 0, i, n).data;
			} else throw Error("Can not access image data");
		} else if (r) {
			let n, r;
			if (t !== void 0 && t.resizedWidth !== void 0 && t.resizedHeight !== void 0 ? (n = t.resizedHeight, r = t.resizedWidth) : (n = e.height, r = e.width), t !== void 0 && (s = t), s.format = "RGBA", s.height = n, s.width = r, t !== void 0) {
				let t = c();
				t.width = r, t.height = n;
				let i = l(t);
				if (i != null) i.putImageData(e, 0, 0), o = i.getImageData(0, 0, r, n).data;
				else throw Error("Can not access image data");
			} else o = e.data;
		} else if (i) {
			if (t === void 0) throw Error("Please provide image config with format for Imagebitmap");
			let n = c();
			n.width = e.width, n.height = e.height;
			let r = l(n);
			if (r != null) {
				let t = e.height, n = e.width;
				return r.drawImage(e, 0, 0, n, t), o = r.getImageData(0, 0, n, t).data, s.height = t, s.width = n, qo(o, s);
			} else throw Error("Can not access image data");
		} else {
			if (a) return new Promise((t, n) => {
				let r = c(), i = l(r);
				if (!e || !i) return n();
				let a = new Image();
				a.crossOrigin = "Anonymous", a.src = e, a.onload = () => {
					r.width = a.width, r.height = a.height, i.drawImage(a, 0, 0, r.width, r.height);
					let e = i.getImageData(0, 0, r.width, r.height);
					s.height = r.height, s.width = r.width, t(qo(e.data, s));
				};
			});
			throw Error("Input data provided is not supported - aborted tensor creation");
		}
		if (o !== void 0) return qo(o, s);
		throw Error("Input data provided is not supported - aborted tensor creation");
	}, ts = (e, t) => {
		let { width: n, height: r, download: i, dispose: a } = t;
		return new Xe({
			location: "texture",
			type: "float32",
			texture: e,
			dims: [
				1,
				r,
				n,
				4
			],
			download: i,
			dispose: a
		});
	}, rs = (e, t) => {
		let { dataType: n, dims: r, download: i, dispose: a } = t;
		return new Xe({
			location: "gpu-buffer",
			type: n ?? "float32",
			gpuBuffer: e,
			dims: r,
			download: i,
			dispose: a
		});
	}, ns = (e, t, n) => new Xe({
		location: "cpu-pinned",
		type: e,
		data: t,
		dims: n ?? [t.length]
	});
}), ar, tn, is, as, ss = E(() => {
	ar = /* @__PURE__ */ new Map([
		["float32", Float32Array],
		["uint8", Uint8Array],
		["int8", Int8Array],
		["uint16", Uint16Array],
		["int16", Int16Array],
		["int32", Int32Array],
		["bool", Uint8Array],
		["float64", Float64Array],
		["uint32", Uint32Array]
	]), tn = /* @__PURE__ */ new Map([
		[Float32Array, "float32"],
		[Uint8Array, "uint8"],
		[Int8Array, "int8"],
		[Uint16Array, "uint16"],
		[Int16Array, "int16"],
		[Int32Array, "int32"],
		[Float64Array, "float64"],
		[Uint32Array, "uint32"]
	]), is = !1, as = () => {
		if (!is) {
			is = !0;
			let e = typeof BigInt64Array < "u" && BigInt64Array.from, t = typeof BigUint64Array < "u" && BigUint64Array.from, n = typeof Float16Array < "u" && Float16Array.from;
			e && (ar.set("int64", BigInt64Array), tn.set(BigInt64Array, "int64")), t && (ar.set("uint64", BigUint64Array), tn.set(BigUint64Array, "uint64")), n ? (ar.set("float16", Float16Array), tn.set(Float16Array, "float16")) : ar.set("float16", Uint16Array);
		}
	};
}), us, ls, fs = E(() => {
	$n(), us = (e) => {
		let t = 1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r != "number" || !Number.isSafeInteger(r)) throw TypeError(`dims[${n}] must be an integer, got: ${r}`);
			if (r < 0) throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);
			t *= r;
		}
		return t;
	}, ls = (e, t) => {
		switch (e.location) {
			case "cpu": return new Xe(e.type, e.data, t);
			case "cpu-pinned": return new Xe({
				location: "cpu-pinned",
				data: e.data,
				type: e.type,
				dims: t
			});
			case "texture": return new Xe({
				location: "texture",
				texture: e.texture,
				type: e.type,
				dims: t
			});
			case "gpu-buffer": return new Xe({
				location: "gpu-buffer",
				gpuBuffer: e.gpuBuffer,
				type: e.type,
				dims: t
			});
			default: throw Error(`tensorReshape: tensor location ${e.location} is not supported`);
		}
	};
}), Xe, $n = E(() => {
	Qa(), os(), ss(), fs(), Xe = class {
		constructor(e, t, n) {
			as();
			let r, i;
			if (typeof e == "object" && "location" in e) switch (this.dataLocation = e.location, r = e.type, i = e.dims, e.location) {
				case "cpu-pinned": {
					let t = ar.get(r);
					if (!t) throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);
					if (!(e.data instanceof t)) throw TypeError(`buffer should be of type ${t.name}`);
					this.cpuData = e.data;
					break;
				}
				case "texture":
					if (r !== "float32") throw TypeError(`unsupported type "${r}" to create tensor from texture`);
					this.gpuTextureData = e.texture, this.downloader = e.download, this.disposer = e.dispose;
					break;
				case "gpu-buffer":
					if (r !== "float32" && r !== "float16" && r !== "int32" && r !== "int64" && r !== "uint32" && r !== "uint8" && r !== "bool") throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);
					this.gpuBufferData = e.gpuBuffer, this.downloader = e.download, this.disposer = e.dispose;
					break;
				default: throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
			}
			else {
				let a, o;
				if (typeof e == "string") if (r = e, o = n, e === "string") {
					if (!Array.isArray(t)) throw TypeError("A string tensor's data must be a string array.");
					a = t;
				} else {
					let n = ar.get(e);
					if (n === void 0) throw TypeError(`Unsupported tensor type: ${e}.`);
					if (Array.isArray(t)) {
						if (e === "float16" && n === Uint16Array) throw TypeError("Creating a float16 tensor from number array is not supported. Please use Uint16Array as data.");
						a = e === "uint64" || e === "int64" ? n.from(t, BigInt) : n.from(t);
					} else if (t instanceof n) a = t;
					else throw TypeError(`A ${r} tensor's data must be type of ${n}`);
				}
				else if (o = t, Array.isArray(e)) {
					if (e.length === 0) throw TypeError("Tensor type cannot be inferred from an empty array.");
					let t = typeof e[0];
					if (t === "string") r = "string", a = e;
					else if (t === "boolean") r = "bool", a = Uint8Array.from(e);
					else throw TypeError(`Invalid element type of data array: ${t}.`);
				} else {
					let t = tn.get(e.constructor);
					if (t === void 0) throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);
					r = t, a = e;
				}
				if (o === void 0) o = [a.length];
				else if (!Array.isArray(o)) throw TypeError("A tensor's dims must be a number array");
				i = o, this.cpuData = a, this.dataLocation = "cpu";
			}
			let a = us(i);
			if (this.cpuData && a !== this.cpuData.length) throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);
			this.type = r, this.dims = i, this.size = a;
		}
		static async fromImage(e, t) {
			return es(e, t);
		}
		static fromTexture(e, t) {
			return ts(e, t);
		}
		static fromGpuBuffer(e, t) {
			return rs(e, t);
		}
		static fromPinnedBuffer(e, t, n) {
			return ns(e, t, n);
		}
		toDataURL(e) {
			return Ja(this, e);
		}
		toImageData(e) {
			return Za(this, e);
		}
		get data() {
			if (this.ensureValid(), !this.cpuData) throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
			return this.cpuData;
		}
		get location() {
			return this.dataLocation;
		}
		get texture() {
			if (this.ensureValid(), !this.gpuTextureData) throw Error("The data is not stored as a WebGL texture.");
			return this.gpuTextureData;
		}
		get gpuBuffer() {
			if (this.ensureValid(), !this.gpuBufferData) throw Error("The data is not stored as a WebGPU buffer.");
			return this.gpuBufferData;
		}
		async getData(e) {
			switch (this.ensureValid(), this.dataLocation) {
				case "cpu":
				case "cpu-pinned": return this.data;
				case "texture":
				case "gpu-buffer":
					if (!this.downloader) throw Error("The current tensor is not created with a specified data downloader.");
					if (this.isDownloading) throw Error("The current tensor is being downloaded.");
					try {
						this.isDownloading = !0;
						let t = await this.downloader();
						return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = t, e && this.disposer && (this.disposer(), this.disposer = void 0), t;
					} finally {
						this.isDownloading = !1;
					}
				default: throw Error(`cannot get data from location: ${this.dataLocation}`);
			}
		}
		dispose() {
			if (this.isDownloading) throw Error("The current tensor is being downloaded.");
			this.disposer &&= (this.disposer(), void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
		}
		ensureValid() {
			if (this.dataLocation === "none") throw Error("The tensor is disposed.");
		}
		reshape(e) {
			if (this.ensureValid(), this.downloader || this.disposer) throw Error("Cannot reshape a tensor that owns GPU resource.");
			return ls(this, e);
		}
	};
}), Re, kn = E(() => {
	$n(), Re = Xe;
}), cs, ps, sr, ur, jo = E(() => {
	Ho(), cs = (e, t) => {
		(typeof it.trace > "u" ? !it.wasm.trace : !it.trace) || console.timeStamp(`${e}::ORT::${t}`);
	}, ps = (e, t) => {
		let n = (/* @__PURE__ */ Error()).stack?.split(/\r\n|\r|\n/g) || [], r = !1;
		for (let i = 0; i < n.length; i++) {
			if (r && !n[i].includes("TRACE_FUNC")) {
				let r = `FUNC_${e}::${n[i].trim().split(" ")[1]}`;
				t && (r += `::${t}`), cs("CPU", r);
				return;
			}
			n[i].includes("TRACE_FUNC") && (r = !0);
		}
	}, sr = (e) => {
		(typeof it.trace > "u" ? !it.wasm.trace : !it.trace) || ps("BEGIN", e);
	}, ur = (e) => {
		(typeof it.trace > "u" ? !it.wasm.trace : !it.trace) || ps("END", e);
	};
}), Bn, ds = E(() => {
	Cn(), kn(), jo(), Bn = class e {
		constructor(e) {
			this.handler = e;
		}
		async run(e, t, n) {
			sr();
			let r = {}, i = {};
			if (typeof e != "object" || !e || e instanceof Re || Array.isArray(e)) throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
			let a = !0;
			if (typeof t == "object") {
				if (t === null) throw TypeError("Unexpected argument[1]: cannot be null.");
				if (t instanceof Re) throw TypeError("'fetches' cannot be a Tensor");
				if (Array.isArray(t)) {
					if (t.length === 0) throw TypeError("'fetches' cannot be an empty array.");
					a = !1;
					for (let e of t) {
						if (typeof e != "string") throw TypeError("'fetches' must be a string array or an object.");
						if (this.outputNames.indexOf(e) === -1) throw RangeError(`'fetches' contains invalid output name: ${e}.`);
						r[e] = null;
					}
					if (typeof n == "object" && n) i = n;
					else if (typeof n < "u") throw TypeError("'options' must be an object.");
				} else {
					let e = !1, o = Object.getOwnPropertyNames(t);
					for (let n of this.outputNames) if (o.indexOf(n) !== -1) {
						let i = t[n];
						(i === null || i instanceof Re) && (e = !0, a = !1, r[n] = i);
					}
					if (e) {
						if (typeof n == "object" && n) i = n;
						else if (typeof n < "u") throw TypeError("'options' must be an object.");
					} else i = t;
				}
			} else if (typeof t < "u") throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
			for (let t of this.inputNames) if (typeof e[t] > "u") throw Error(`input '${t}' is missing in 'feeds'.`);
			if (a) for (let e of this.outputNames) r[e] = null;
			let o = await this.handler.run(e, r, i), s = {};
			for (let e in o) if (Object.hasOwnProperty.call(o, e)) {
				let t = o[e];
				t instanceof Re ? s[e] = t : s[e] = new Re(t.type, t.data, t.dims);
			}
			return ur(), s;
		}
		async release() {
			return this.handler.dispose();
		}
		static async create(t, n, r, i) {
			sr();
			let a, o = {};
			if (typeof t == "string") {
				if (a = t, typeof n == "object" && n) o = n;
				else if (typeof n < "u") throw TypeError("'options' must be an object.");
			} else if (t instanceof Uint8Array) {
				if (a = t, typeof n == "object" && n) o = n;
				else if (typeof n < "u") throw TypeError("'options' must be an object.");
			} else if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) {
				let e = t, s = 0, c = t.byteLength;
				if (typeof n == "object" && n) o = n;
				else if (typeof n == "number") {
					if (s = n, !Number.isSafeInteger(s)) throw RangeError("'byteOffset' must be an integer.");
					if (s < 0 || s >= e.byteLength) throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);
					if (c = t.byteLength - s, typeof r == "number") {
						if (c = r, !Number.isSafeInteger(c)) throw RangeError("'byteLength' must be an integer.");
						if (c <= 0 || s + c > e.byteLength) throw RangeError(`'byteLength' is out of range (0, ${e.byteLength - s}].`);
						if (typeof i == "object" && i) o = i;
						else if (typeof i < "u") throw TypeError("'options' must be an object.");
					} else if (typeof r < "u") throw TypeError("'byteLength' must be a number.");
				} else if (typeof n < "u") throw TypeError("'options' must be an object.");
				a = new Uint8Array(e, s, c);
			} else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
			let [s, c] = await Fn(o), l = await s.createInferenceSessionHandler(a, c);
			return ur(), new e(l);
		}
		startProfiling() {
			this.handler.startProfiling();
		}
		endProfiling() {
			this.handler.endProfiling();
		}
		get inputNames() {
			return this.handler.inputNames;
		}
		get outputNames() {
			return this.handler.outputNames;
		}
	};
}), Dd, hs = E(() => {
	ds(), Dd = Bn;
}), ms = E(() => {}), bs = E(() => {}), gs = E(() => {}), ys = E(() => {}), Ld, Nn, Ts = E(() => {
	Cn(), kn(), Ld = "Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.", Nn = class e {
		constructor(e, t, n) {
			this.handler = e, this.hasOptimizerModel = t, this.hasEvalModel = n;
		}
		get trainingInputNames() {
			return this.handler.inputNames;
		}
		get trainingOutputNames() {
			return this.handler.outputNames;
		}
		get evalInputNames() {
			if (this.hasEvalModel) return this.handler.evalInputNames;
			throw Error("This training session has no evalModel loaded.");
		}
		get evalOutputNames() {
			if (this.hasEvalModel) return this.handler.evalOutputNames;
			throw Error("This training session has no evalModel loaded.");
		}
		static async create(t, n) {
			let r = t.evalModel || "", i = t.optimizerModel || "", [a, o] = await Fn(n || {});
			if (a.createTrainingSessionHandler) return new e(await a.createTrainingSessionHandler(t.checkpointState, t.trainModel, r, i, o), !!t.optimizerModel, !!t.evalModel);
			throw Error(Ld);
		}
		typeNarrowingForRunStep(e, t, n, r, i) {
			let a = {}, o = {};
			if (typeof n != "object" || !n || n instanceof Re || Array.isArray(n)) throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
			let s = !0;
			if (typeof r == "object") {
				if (r === null) throw TypeError("Unexpected argument[1]: cannot be null.");
				if (r instanceof Re) throw TypeError("'fetches' cannot be a Tensor");
				if (Array.isArray(r)) {
					if (r.length === 0) throw TypeError("'fetches' cannot be an empty array.");
					s = !1;
					for (let e of r) {
						if (typeof e != "string") throw TypeError("'fetches' must be a string array or an object.");
						if (t.indexOf(e) === -1) throw RangeError(`'fetches' contains invalid output name: ${e}.`);
						a[e] = null;
					}
					if (typeof i == "object" && i) o = i;
					else if (typeof i < "u") throw TypeError("'options' must be an object.");
				} else {
					let e = !1, n = Object.getOwnPropertyNames(r);
					for (let i of t) if (n.indexOf(i) !== -1) {
						let t = r[i];
						(t === null || t instanceof Re) && (e = !0, s = !1, a[i] = t);
					}
					if (e) {
						if (typeof i == "object" && i) o = i;
						else if (typeof i < "u") throw TypeError("'options' must be an object.");
					} else o = r;
				}
			} else if (typeof r < "u") throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
			for (let t of e) if (typeof n[t] > "u") throw Error(`input '${t}' is missing in 'feeds'.`);
			if (s) for (let e of t) a[e] = null;
			return [a, o];
		}
		convertHandlerReturnTypeToMapOfTensors(e) {
			let t = {};
			for (let n in e) if (Object.hasOwnProperty.call(e, n)) {
				let r = e[n];
				r instanceof Re ? t[n] = r : t[n] = new Re(r.type, r.data, r.dims);
			}
			return t;
		}
		async lazyResetGrad() {
			await this.handler.lazyResetGrad();
		}
		async runTrainStep(e, t, n) {
			let [r, i] = this.typeNarrowingForRunStep(this.trainingInputNames, this.trainingOutputNames, e, t, n), a = await this.handler.runTrainStep(e, r, i);
			return this.convertHandlerReturnTypeToMapOfTensors(a);
		}
		async runOptimizerStep(e) {
			if (this.hasOptimizerModel) await this.handler.runOptimizerStep(e || {});
			else throw Error("This TrainingSession has no OptimizerModel loaded.");
		}
		async runEvalStep(e, t, n) {
			if (this.hasEvalModel) {
				let [r, i] = this.typeNarrowingForRunStep(this.evalInputNames, this.evalOutputNames, e, t, n), a = await this.handler.runEvalStep(e, r, i);
				return this.convertHandlerReturnTypeToMapOfTensors(a);
			} else throw Error("This TrainingSession has no EvalModel loaded.");
		}
		async getParametersSize(e = !0) {
			return this.handler.getParametersSize(e);
		}
		async loadParametersBuffer(e, t = !0) {
			let n = await this.getParametersSize(t);
			if (e.length !== 4 * n) throw Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");
			return this.handler.loadParametersBuffer(e, t);
		}
		async getContiguousParameters(e = !0) {
			return this.handler.getContiguousParameters(e);
		}
		async release() {
			return this.handler.dispose();
		}
	};
}), Fd, xs = E(() => {
	Ts(), Fd = Nn;
}), Yo = {};
Pr(Yo, {
	InferenceSession: () => Dd,
	TRACE: () => cs,
	TRACE_FUNC_BEGIN: () => sr,
	TRACE_FUNC_END: () => ur,
	Tensor: () => Re,
	TrainingSession: () => Fd,
	env: () => Z,
	registerBackend: () => Dr
});
var Tt = E(() => {
	qa(), Ka(), hs(), kn(), ms(), bs(), jo(), gs(), ys(), xs();
});
function jt(e, t, n, r) {
	if (t === void 0) return $d(e);
	if (n === void 0) Rn(e, t, 1);
	else if (typeof n == "number" && r === void 0) Rn(e, t, n);
	else if (typeof n == "string" && r === void 0) Rn(e, n, 1, t);
	else if (typeof n == "string" && typeof r == "number") Rn(e, n, r, t);
	else throw TypeError("input is valid");
}
function $d(e) {
	return {
		verbose: jt.verbose.bind(null, e),
		info: jt.info.bind(null, e),
		warning: jt.warning.bind(null, e),
		error: jt.error.bind(null, e),
		fatal: jt.fatal.bind(null, e)
	};
}
function Rn(e, t, n, r) {
	let i = rn[r || ""] || rn[""];
	vs[e] < vs[i.minimalSeverity] || (i.logDateTime && (t = `${(/* @__PURE__ */ new Date()).toISOString()}|${t}`), i.logSourceLocation, Cd[i.provider].log(e, t, r));
}
var Xo, Ko, vs, Cd, _s, rn, ce, Gn, Un, zn, Mn, at = E(() => {
	Xo = class {
		log(e, t, n) {}
	}, Ko = class {
		log(e, t, n) {
			console.log(`${this.color(e)} ${n ? "\x1B[35m" + n + "\x1B[0m " : ""}${t}`);
		}
		color(e) {
			switch (e) {
				case "verbose": return "\x1B[34;40mv\x1B[0m";
				case "info": return "\x1B[32mi\x1B[0m";
				case "warning": return "\x1B[30;43mw\x1B[0m";
				case "error": return "\x1B[31;40me\x1B[0m";
				case "fatal": return "\x1B[101mf\x1B[0m";
				default: throw Error(`unsupported severity: ${e}`);
			}
		}
	}, vs = {
		verbose: 1e3,
		info: 2e3,
		warning: 4e3,
		error: 5e3,
		fatal: 6e3
	}, Cd = {
		none: new Xo(),
		console: new Ko()
	}, _s = {
		provider: "console",
		minimalSeverity: "warning",
		logDateTime: !0,
		logSourceLocation: !1
	}, rn = { "": _s }, ((e) => {
		function t(t, n) {
			e("verbose", t, n);
		}
		e.verbose = t;
		function n(t, n) {
			e("info", t, n);
		}
		e.info = n;
		function r(t, n) {
			e("warning", t, n);
		}
		e.warning = r;
		function i(t, n) {
			e("error", t, n);
		}
		e.error = i;
		function a(t, n) {
			e("fatal", t, n);
		}
		e.fatal = a;
		function o(e) {
			rn = {}, s("", e || {});
		}
		e.reset = o;
		function s(e, t) {
			if (e === "*") o(t);
			else {
				let n = rn[e] || _s;
				rn[e] = {
					provider: t.provider || n.provider,
					minimalSeverity: t.minimalSeverity || n.minimalSeverity,
					logDateTime: t.logDateTime === void 0 ? n.logDateTime : t.logDateTime,
					logSourceLocation: t.logSourceLocation === void 0 ? n.logSourceLocation : t.logSourceLocation
				};
			}
		}
		e.set = s;
		function c(e) {
			let t = {};
			e.logLevel && (t.minimalSeverity = e.logLevel), s("", t);
		}
		e.setWithEnv = c;
	})(jt ||= {}), ce = jt, Gn = class {
		constructor(e, t, n, r, i, a) {
			this.category = e, this.name = t, this.startTime = n, this.endCallback = r, this.timer = i, this.ctx = a;
		}
		async end() {
			return this.endCallback(this);
		}
		async checkTimer() {
			if (this.ctx === void 0 || this.timer === void 0) throw Error("No webgl timer found");
			return this.ctx.endTimer(), this.ctx.waitForQueryAndGetTime(this.timer);
		}
	}, Un = class {
		constructor(e, t, n, r) {
			this.category = e, this.name = t, this.startTime = n, this.endTime = r;
		}
	}, zn = class {
		constructor(e, t, n) {
			this._started = !1, this._flushPointer = 0, this._started = !1, this._maxNumberEvents = e === void 0 ? 1e4 : e, this._flushBatchSize = t === void 0 ? 10 : t, this._flushIntervalInMilliseconds = n === void 0 ? 5e3 : n;
		}
		static create(e) {
			return e === void 0 ? new this() : new this(e.maxNumberEvents, e.flushBatchSize, e.flushIntervalInMilliseconds);
		}
		start() {
			this._started = !0, this._timingEvents = [], this._flushTime = Mn(), this._flushPointer = 0;
		}
		stop() {
			for (this._started = !1; this._flushPointer < this._timingEvents.length; this._flushPointer++) this.logOneEvent(this._timingEvents[this._flushPointer]);
		}
		event(e, t, n, r) {
			let i = this._started ? this.begin(e, t, r) : void 0, a = !1, o = n();
			if (o && typeof o.then == "function") return a = !0, new Promise((e, t) => {
				o.then(async (t) => {
					i && await i.end(), e(t);
				}, async (e) => {
					i && await i.end(), t(e);
				});
			});
			if (!a && i) {
				let e = i.end();
				if (e && typeof e.then == "function") return new Promise((t, n) => {
					e.then(() => {
						t(o);
					}, (e) => {
						n(e);
					});
				});
			}
			return o;
		}
		begin(e, t, n) {
			if (!this._started) throw Error("profiler is not started yet");
			if (n === void 0) {
				let n = Mn();
				return this.flush(n), new Gn(e, t, n, (e) => this.endSync(e));
			} else {
				let r = n.beginTimer();
				return new Gn(e, t, 0, async (e) => this.end(e), r, n);
			}
		}
		async end(e) {
			let t = await e.checkTimer();
			this._timingEvents.length < this._maxNumberEvents && (this._timingEvents.push(new Un(e.category, e.name, e.startTime, t)), this.flush(t));
		}
		endSync(e) {
			let t = Mn();
			this._timingEvents.length < this._maxNumberEvents && (this._timingEvents.push(new Un(e.category, e.name, e.startTime, t)), this.flush(t));
		}
		logOneEvent(e) {
			ce.verbose(`Profiler.${e.category}`, `${(e.endTime - e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`);
		}
		flush(e) {
			if (this._timingEvents.length - this._flushPointer >= this._flushBatchSize || e - this._flushTime >= this._flushIntervalInMilliseconds) {
				for (let e = this._flushPointer; this._flushPointer < e + this._flushBatchSize && this._flushPointer < this._timingEvents.length; this._flushPointer++) this.logOneEvent(this._timingEvents[this._flushPointer]);
				this._flushTime = Mn();
			}
		}
		get started() {
			return this._started;
		}
	}, Mn = typeof performance < "u" && performance.now ? () => performance.now() : Date.now;
});
function Os(e, t, n) {
	for (let r of n) {
		let n = r[0], i = r[1], a = r[2], o = r[3], s = r[4];
		if (e.opType === n) {
			for (let e of t) if ((e.domain === i || e.domain === "ai.onnx" && i === "") && kd(e.version, a)) return {
				opImpl: o,
				opInit: s
			};
		}
	}
	throw TypeError(`cannot resolve operator '${e.opType}' with opsets: ${t.map((e) => `${e.domain || "ai.onnx"} v${e.version}`).join(", ")}`);
}
function kd(e, t) {
	if (t.endsWith("+")) {
		let n = Number.parseInt(t.substring(0, t.length - 1), 10);
		return !isNaN(n) && n <= e;
	} else if (t.split("-").length === 2) {
		let n = t.split("-"), r = Number.parseInt(n[0], 10), i = Number.parseInt(n[1], 10);
		return !isNaN(r) && !isNaN(i) && r <= e && e <= i;
	} else return Number.parseInt(t, 10) === e;
}
var Is = E(() => {}), Ss = me((e) => {
	e.__esModule = !0, e.Guid = function() {
		function e(t) {
			if (!t) throw TypeError("Invalid argument; `value` has no value.");
			this.value = e.EMPTY, t && e.isGuid(t) && (this.value = t);
		}
		return e.isGuid = function(t) {
			var n = t.toString();
			return t && (t instanceof e || e.validator.test(n));
		}, e.create = function() {
			return new e([
				e.gen(2),
				e.gen(1),
				e.gen(1),
				e.gen(1),
				e.gen(3)
			].join("-"));
		}, e.createEmpty = function() {
			return new e("emptyguid");
		}, e.parse = function(t) {
			return new e(t);
		}, e.raw = function() {
			return [
				e.gen(2),
				e.gen(1),
				e.gen(1),
				e.gen(1),
				e.gen(3)
			].join("-");
		}, e.gen = function(e) {
			for (var t = "", n = 0; n < e; n++) t += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
			return t;
		}, e.prototype.equals = function(t) {
			return e.isGuid(t) && this.value === t.toString();
		}, e.prototype.isEmpty = function() {
			return this.value === e.EMPTY;
		}, e.prototype.toString = function() {
			return this.value;
		}, e.prototype.toJSON = function() {
			return { value: this.value };
		}, e.validator = /* @__PURE__ */ RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i"), e.EMPTY = "00000000-0000-0000-0000-000000000000", e;
	}();
});
function be(e, t, n) {
	this.low = e | 0, this.high = t | 0, this.unsigned = !!n;
}
function je(e) {
	return (e && e.__isLong__) === !0;
}
function As(e) {
	var t = Math.clz32(e & -e);
	return e ? 31 - t : t;
}
function lr(e, t) {
	var n, r, i;
	return t ? (e >>>= 0, (i = 0 <= e && e < 256) && (r = Es[e], r) ? r : (n = le(e, 0, !0), i && (Es[e] = n), n)) : (e |= 0, (i = -128 <= e && e < 128) && (r = Ps[e], r) ? r : (n = le(e, e < 0 ? -1 : 0, !1), i && (Ps[e] = n), n));
}
function ut(e, t) {
	if (isNaN(e)) return t ? Vt : xt;
	if (t) {
		if (e < 0) return Vt;
		if (e >= Cs) return Bs;
	} else {
		if (e <= -Ls) return tt;
		if (e + 1 >= Ls) return ks;
	}
	return e < 0 ? ut(-e, t).neg() : le(e % Fr | 0, e / Fr | 0, t);
}
function le(e, t, n) {
	return new be(e, t, n);
}
function Qo(e, t, n) {
	if (e.length === 0) throw Error("empty string");
	if (typeof t == "number" ? (n = t, t = !1) : t = !!t, e === "NaN" || e === "Infinity" || e === "+Infinity" || e === "-Infinity") return t ? Vt : xt;
	if (n ||= 10, n < 2 || 36 < n) throw RangeError("radix");
	var r;
	if ((r = e.indexOf("-")) > 0) throw Error("interior hyphen");
	if (r === 0) return Qo(e.substring(1), t, n).neg();
	for (var i = ut(Vn(n, 8)), a = xt, o = 0; o < e.length; o += 8) {
		var s = Math.min(8, e.length - o), c = parseInt(e.substring(o, o + s), n);
		if (s < 8) {
			var l = ut(Vn(n, s));
			a = a.mul(l).add(ut(c));
		} else a = a.mul(i), a = a.add(ut(c));
	}
	return a.unsigned = t, a;
}
function wt(e, t) {
	return typeof e == "number" ? ut(e, t) : typeof e == "string" ? Qo(e, t) : le(e.low, e.high, typeof t == "boolean" ? t : e.unsigned);
}
var st, Ps, Es, Vn, Ds, Nd, Fr, Cs, Ls, Fs, xt, Vt, Lr, $s, Zo, ks, Bs, tt, $, Wt, ei = E(() => {
	st = null;
	try {
		st = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
			0,
			97,
			115,
			109,
			1,
			0,
			0,
			0,
			1,
			13,
			2,
			96,
			0,
			1,
			127,
			96,
			4,
			127,
			127,
			127,
			127,
			1,
			127,
			3,
			7,
			6,
			0,
			1,
			1,
			1,
			1,
			1,
			6,
			6,
			1,
			127,
			1,
			65,
			0,
			11,
			7,
			50,
			6,
			3,
			109,
			117,
			108,
			0,
			1,
			5,
			100,
			105,
			118,
			95,
			115,
			0,
			2,
			5,
			100,
			105,
			118,
			95,
			117,
			0,
			3,
			5,
			114,
			101,
			109,
			95,
			115,
			0,
			4,
			5,
			114,
			101,
			109,
			95,
			117,
			0,
			5,
			8,
			103,
			101,
			116,
			95,
			104,
			105,
			103,
			104,
			0,
			0,
			10,
			191,
			1,
			6,
			4,
			0,
			35,
			0,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			126,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			127,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			128,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			129,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11,
			36,
			1,
			1,
			126,
			32,
			0,
			173,
			32,
			1,
			173,
			66,
			32,
			134,
			132,
			32,
			2,
			173,
			32,
			3,
			173,
			66,
			32,
			134,
			132,
			130,
			34,
			4,
			66,
			32,
			135,
			167,
			36,
			0,
			32,
			4,
			167,
			11
		])), {}).exports;
	} catch {}
	be.prototype.__isLong__, Object.defineProperty(be.prototype, "__isLong__", { value: !0 }), be.isLong = je, Ps = {}, Es = {}, be.fromInt = lr, be.fromNumber = ut, be.fromBits = le, Vn = Math.pow, be.fromString = Qo, be.fromValue = wt, Ds = 65536, Nd = 1 << 24, Fr = Ds * Ds, Cs = Fr * Fr, Ls = Cs / 2, Fs = lr(Nd), xt = lr(0), be.ZERO = xt, Vt = lr(0, !0), be.UZERO = Vt, Lr = lr(1), be.ONE = Lr, $s = lr(1, !0), be.UONE = $s, Zo = lr(-1), be.NEG_ONE = Zo, ks = le(-1, 2147483647, !1), be.MAX_VALUE = ks, Bs = le(-1, -1, !0), be.MAX_UNSIGNED_VALUE = Bs, tt = le(0, -2147483648, !1), be.MIN_VALUE = tt, $ = be.prototype, $.toInt = function() {
		return this.unsigned ? this.low >>> 0 : this.low;
	}, $.toNumber = function() {
		return this.unsigned ? (this.high >>> 0) * Fr + (this.low >>> 0) : this.high * Fr + (this.low >>> 0);
	}, $.toString = function(e) {
		if (e ||= 10, e < 2 || 36 < e) throw RangeError("radix");
		if (this.isZero()) return "0";
		if (this.isNegative()) if (this.eq(tt)) {
			var t = ut(e), n = this.div(t), r = n.mul(t).sub(this);
			return n.toString(e) + r.toInt().toString(e);
		} else return "-" + this.neg().toString(e);
		for (var i = ut(Vn(e, 6), this.unsigned), a = this, o = "";;) {
			var s = a.div(i), c = (a.sub(s.mul(i)).toInt() >>> 0).toString(e);
			if (a = s, a.isZero()) return c + o;
			for (; c.length < 6;) c = "0" + c;
			o = "" + c + o;
		}
	}, $.getHighBits = function() {
		return this.high;
	}, $.getHighBitsUnsigned = function() {
		return this.high >>> 0;
	}, $.getLowBits = function() {
		return this.low;
	}, $.getLowBitsUnsigned = function() {
		return this.low >>> 0;
	}, $.getNumBitsAbs = function() {
		if (this.isNegative()) return this.eq(tt) ? 64 : this.neg().getNumBitsAbs();
		for (var e = this.high == 0 ? this.low : this.high, t = 31; t > 0 && !(e & 1 << t); t--);
		return this.high == 0 ? t + 1 : t + 33;
	}, $.isZero = function() {
		return this.high === 0 && this.low === 0;
	}, $.eqz = $.isZero, $.isNegative = function() {
		return !this.unsigned && this.high < 0;
	}, $.isPositive = function() {
		return this.unsigned || this.high >= 0;
	}, $.isOdd = function() {
		return (this.low & 1) == 1;
	}, $.isEven = function() {
		return (this.low & 1) == 0;
	}, $.equals = function(e) {
		return je(e) || (e = wt(e)), this.unsigned !== e.unsigned && this.high >>> 31 == 1 && e.high >>> 31 == 1 ? !1 : this.high === e.high && this.low === e.low;
	}, $.eq = $.equals, $.notEquals = function(e) {
		return !this.eq(e);
	}, $.neq = $.notEquals, $.ne = $.notEquals, $.lessThan = function(e) {
		return this.comp(e) < 0;
	}, $.lt = $.lessThan, $.lessThanOrEqual = function(e) {
		return this.comp(e) <= 0;
	}, $.lte = $.lessThanOrEqual, $.le = $.lessThanOrEqual, $.greaterThan = function(e) {
		return this.comp(e) > 0;
	}, $.gt = $.greaterThan, $.greaterThanOrEqual = function(e) {
		return this.comp(e) >= 0;
	}, $.gte = $.greaterThanOrEqual, $.ge = $.greaterThanOrEqual, $.compare = function(e) {
		if (je(e) || (e = wt(e)), this.eq(e)) return 0;
		var t = this.isNegative(), n = e.isNegative();
		return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1;
	}, $.comp = $.compare, $.negate = function() {
		return !this.unsigned && this.eq(tt) ? tt : this.not().add(Lr);
	}, $.neg = $.negate, $.add = function(e) {
		je(e) || (e = wt(e));
		var t = this.high >>> 16, n = this.high & 65535, r = this.low >>> 16, i = this.low & 65535, a = e.high >>> 16, o = e.high & 65535, s = e.low >>> 16, c = e.low & 65535, l = 0, u = 0, d = 0, f = 0;
		return f += i + c, d += f >>> 16, f &= 65535, d += r + s, u += d >>> 16, d &= 65535, u += n + o, l += u >>> 16, u &= 65535, l += t + a, l &= 65535, le(d << 16 | f, l << 16 | u, this.unsigned);
	}, $.subtract = function(e) {
		return je(e) || (e = wt(e)), this.add(e.neg());
	}, $.sub = $.subtract, $.multiply = function(e) {
		if (this.isZero()) return this;
		if (je(e) || (e = wt(e)), st) return le(st.mul(this.low, this.high, e.low, e.high), st.get_high(), this.unsigned);
		if (e.isZero()) return this.unsigned ? Vt : xt;
		if (this.eq(tt)) return e.isOdd() ? tt : xt;
		if (e.eq(tt)) return this.isOdd() ? tt : xt;
		if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
		if (e.isNegative()) return this.mul(e.neg()).neg();
		if (this.lt(Fs) && e.lt(Fs)) return ut(this.toNumber() * e.toNumber(), this.unsigned);
		var t = this.high >>> 16, n = this.high & 65535, r = this.low >>> 16, i = this.low & 65535, a = e.high >>> 16, o = e.high & 65535, s = e.low >>> 16, c = e.low & 65535, l = 0, u = 0, d = 0, f = 0;
		return f += i * c, d += f >>> 16, f &= 65535, d += r * c, u += d >>> 16, d &= 65535, d += i * s, u += d >>> 16, d &= 65535, u += n * c, l += u >>> 16, u &= 65535, u += r * s, l += u >>> 16, u &= 65535, u += i * o, l += u >>> 16, u &= 65535, l += t * c + n * s + r * o + i * a, l &= 65535, le(d << 16 | f, l << 16 | u, this.unsigned);
	}, $.mul = $.multiply, $.divide = function(e) {
		if (je(e) || (e = wt(e)), e.isZero()) throw Error("division by zero");
		if (st) return !this.unsigned && this.high === -2147483648 && e.low === -1 && e.high === -1 ? this : le((this.unsigned ? st.div_u : st.div_s)(this.low, this.high, e.low, e.high), st.get_high(), this.unsigned);
		if (this.isZero()) return this.unsigned ? Vt : xt;
		var t, n, r;
		if (this.unsigned) {
			if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return Vt;
			if (e.gt(this.shru(1))) return $s;
			r = Vt;
		} else {
			if (this.eq(tt)) return e.eq(Lr) || e.eq(Zo) ? tt : e.eq(tt) ? Lr : (t = this.shr(1).div(e).shl(1), t.eq(xt) ? e.isNegative() ? Lr : Zo : (n = this.sub(e.mul(t)), r = t.add(n.div(e)), r));
			if (e.eq(tt)) return this.unsigned ? Vt : xt;
			if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
			if (e.isNegative()) return this.div(e.neg()).neg();
			r = xt;
		}
		for (n = this; n.gte(e);) {
			t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
			for (var i = Math.ceil(Math.log(t) / Math.LN2), a = i <= 48 ? 1 : Vn(2, i - 48), o = ut(t), s = o.mul(e); s.isNegative() || s.gt(n);) t -= a, o = ut(t, this.unsigned), s = o.mul(e);
			o.isZero() && (o = Lr), r = r.add(o), n = n.sub(s);
		}
		return r;
	}, $.div = $.divide, $.modulo = function(e) {
		return je(e) || (e = wt(e)), st ? le((this.unsigned ? st.rem_u : st.rem_s)(this.low, this.high, e.low, e.high), st.get_high(), this.unsigned) : this.sub(this.div(e).mul(e));
	}, $.mod = $.modulo, $.rem = $.modulo, $.not = function() {
		return le(~this.low, ~this.high, this.unsigned);
	}, $.countLeadingZeros = function() {
		return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
	}, $.clz = $.countLeadingZeros, $.countTrailingZeros = function() {
		return this.low ? As(this.low) : As(this.high) + 32;
	}, $.ctz = $.countTrailingZeros, $.and = function(e) {
		return je(e) || (e = wt(e)), le(this.low & e.low, this.high & e.high, this.unsigned);
	}, $.or = function(e) {
		return je(e) || (e = wt(e)), le(this.low | e.low, this.high | e.high, this.unsigned);
	}, $.xor = function(e) {
		return je(e) || (e = wt(e)), le(this.low ^ e.low, this.high ^ e.high, this.unsigned);
	}, $.shiftLeft = function(e) {
		return je(e) && (e = e.toInt()), (e &= 63) == 0 ? this : e < 32 ? le(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : le(0, this.low << e - 32, this.unsigned);
	}, $.shl = $.shiftLeft, $.shiftRight = function(e) {
		return je(e) && (e = e.toInt()), (e &= 63) == 0 ? this : e < 32 ? le(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : le(this.high >> e - 32, this.high >= 0 ? 0 : -1, this.unsigned);
	}, $.shr = $.shiftRight, $.shiftRightUnsigned = function(e) {
		return je(e) && (e = e.toInt()), (e &= 63) == 0 ? this : e < 32 ? le(this.low >>> e | this.high << 32 - e, this.high >>> e, this.unsigned) : le(e === 32 ? this.high : this.high >>> e - 32, 0, this.unsigned);
	}, $.shru = $.shiftRightUnsigned, $.shr_u = $.shiftRightUnsigned, $.rotateLeft = function(e) {
		var t;
		return je(e) && (e = e.toInt()), (e &= 63) == 0 ? this : e === 32 ? le(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, le(this.low << e | this.high >>> t, this.high << e | this.low >>> t, this.unsigned)) : (e -= 32, t = 32 - e, le(this.high << e | this.low >>> t, this.low << e | this.high >>> t, this.unsigned));
	}, $.rotl = $.rotateLeft, $.rotateRight = function(e) {
		var t;
		return je(e) && (e = e.toInt()), (e &= 63) == 0 ? this : e === 32 ? le(this.high, this.low, this.unsigned) : e < 32 ? (t = 32 - e, le(this.high << t | this.low >>> e, this.low << t | this.high >>> e, this.unsigned)) : (e -= 32, t = 32 - e, le(this.low << t | this.high >>> e, this.high << t | this.low >>> e, this.unsigned));
	}, $.rotr = $.rotateRight, $.toSigned = function() {
		return this.unsigned ? le(this.low, this.high, !1) : this;
	}, $.toUnsigned = function() {
		return this.unsigned ? this : le(this.low, this.high, !0);
	}, $.toBytes = function(e) {
		return e ? this.toBytesLE() : this.toBytesBE();
	}, $.toBytesLE = function() {
		var e = this.high, t = this.low;
		return [
			t & 255,
			t >>> 8 & 255,
			t >>> 16 & 255,
			t >>> 24,
			e & 255,
			e >>> 8 & 255,
			e >>> 16 & 255,
			e >>> 24
		];
	}, $.toBytesBE = function() {
		var e = this.high, t = this.low;
		return [
			e >>> 24,
			e >>> 16 & 255,
			e >>> 8 & 255,
			e & 255,
			t >>> 24,
			t >>> 16 & 255,
			t >>> 8 & 255,
			t & 255
		];
	}, be.fromBytes = function(e, t, n) {
		return n ? be.fromBytesLE(e, t) : be.fromBytesBE(e, t);
	}, be.fromBytesLE = function(e, t) {
		return new be(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t);
	}, be.fromBytesBE = function(e, t) {
		return new be(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t);
	}, Wt = be;
}), O, Wn = E(() => {
	O = {}, O.Offset, O.Table, O.SIZEOF_SHORT = 2, O.SIZEOF_INT = 4, O.FILE_IDENTIFIER_LENGTH = 4, O.SIZE_PREFIX_LENGTH = 4, O.Encoding = {
		UTF8_BYTES: 1,
		UTF16_STRING: 2
	}, O.int32 = /* @__PURE__ */ new Int32Array(2), O.float32 = new Float32Array(O.int32.buffer), O.float64 = new Float64Array(O.int32.buffer), O.isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1, O.Long = function(e, t) {
		this.low = e | 0, this.high = t | 0;
	}, O.Long.create = function(e, t) {
		return e == 0 && t == 0 ? O.Long.ZERO : new O.Long(e, t);
	}, O.Long.prototype.toFloat64 = function() {
		return (this.low >>> 0) + this.high * 4294967296;
	}, O.Long.prototype.equals = function(e) {
		return this.low == e.low && this.high == e.high;
	}, O.Long.ZERO = new O.Long(0, 0), O.Builder = function(e) {
		if (e) var t = e;
		else var t = 1024;
		this.bb = O.ByteBuffer.allocate(t), this.space = t, this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1;
	}, O.Builder.prototype.clear = function() {
		this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1;
	}, O.Builder.prototype.forceDefaults = function(e) {
		this.force_defaults = e;
	}, O.Builder.prototype.dataBuffer = function() {
		return this.bb;
	}, O.Builder.prototype.asUint8Array = function() {
		return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
	}, O.Builder.prototype.prep = function(e, t) {
		e > this.minalign && (this.minalign = e);
		for (var n = ~(this.bb.capacity() - this.space + t) + 1 & e - 1; this.space < n + e + t;) {
			var r = this.bb.capacity();
			this.bb = O.Builder.growByteBuffer(this.bb), this.space += this.bb.capacity() - r;
		}
		this.pad(n);
	}, O.Builder.prototype.pad = function(e) {
		for (var t = 0; t < e; t++) this.bb.writeInt8(--this.space, 0);
	}, O.Builder.prototype.writeInt8 = function(e) {
		this.bb.writeInt8(--this.space, e);
	}, O.Builder.prototype.writeInt16 = function(e) {
		this.bb.writeInt16(this.space -= 2, e);
	}, O.Builder.prototype.writeInt32 = function(e) {
		this.bb.writeInt32(this.space -= 4, e);
	}, O.Builder.prototype.writeInt64 = function(e) {
		this.bb.writeInt64(this.space -= 8, e);
	}, O.Builder.prototype.writeFloat32 = function(e) {
		this.bb.writeFloat32(this.space -= 4, e);
	}, O.Builder.prototype.writeFloat64 = function(e) {
		this.bb.writeFloat64(this.space -= 8, e);
	}, O.Builder.prototype.addInt8 = function(e) {
		this.prep(1, 0), this.writeInt8(e);
	}, O.Builder.prototype.addInt16 = function(e) {
		this.prep(2, 0), this.writeInt16(e);
	}, O.Builder.prototype.addInt32 = function(e) {
		this.prep(4, 0), this.writeInt32(e);
	}, O.Builder.prototype.addInt64 = function(e) {
		this.prep(8, 0), this.writeInt64(e);
	}, O.Builder.prototype.addFloat32 = function(e) {
		this.prep(4, 0), this.writeFloat32(e);
	}, O.Builder.prototype.addFloat64 = function(e) {
		this.prep(8, 0), this.writeFloat64(e);
	}, O.Builder.prototype.addFieldInt8 = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt8(t), this.slot(e));
	}, O.Builder.prototype.addFieldInt16 = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt16(t), this.slot(e));
	}, O.Builder.prototype.addFieldInt32 = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addInt32(t), this.slot(e));
	}, O.Builder.prototype.addFieldInt64 = function(e, t, n) {
		(this.force_defaults || !t.equals(n)) && (this.addInt64(t), this.slot(e));
	}, O.Builder.prototype.addFieldFloat32 = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat32(t), this.slot(e));
	}, O.Builder.prototype.addFieldFloat64 = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addFloat64(t), this.slot(e));
	}, O.Builder.prototype.addFieldOffset = function(e, t, n) {
		(this.force_defaults || t != n) && (this.addOffset(t), this.slot(e));
	}, O.Builder.prototype.addFieldStruct = function(e, t, n) {
		t != n && (this.nested(t), this.slot(e));
	}, O.Builder.prototype.nested = function(e) {
		if (e != this.offset()) throw Error("FlatBuffers: struct must be serialized inline.");
	}, O.Builder.prototype.notNested = function() {
		if (this.isNested) throw Error("FlatBuffers: object serialization must not be nested.");
	}, O.Builder.prototype.slot = function(e) {
		this.vtable[e] = this.offset();
	}, O.Builder.prototype.offset = function() {
		return this.bb.capacity() - this.space;
	}, O.Builder.growByteBuffer = function(e) {
		var t = e.capacity();
		if (t & 3221225472) throw Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
		var n = t << 1, r = O.ByteBuffer.allocate(n);
		return r.setPosition(n - t), r.bytes().set(e.bytes(), n - t), r;
	}, O.Builder.prototype.addOffset = function(e) {
		this.prep(O.SIZEOF_INT, 0), this.writeInt32(this.offset() - e + O.SIZEOF_INT);
	}, O.Builder.prototype.startObject = function(e) {
		this.notNested(), this.vtable ??= [], this.vtable_in_use = e;
		for (var t = 0; t < e; t++) this.vtable[t] = 0;
		this.isNested = !0, this.object_start = this.offset();
	}, O.Builder.prototype.endObject = function() {
		if (this.vtable == null || !this.isNested) throw Error("FlatBuffers: endObject called without startObject");
		this.addInt32(0);
		for (var e = this.offset(), t = this.vtable_in_use - 1; t >= 0 && this.vtable[t] == 0; t--);
		for (var n = t + 1; t >= 0; t--) this.addInt16(this.vtable[t] == 0 ? 0 : e - this.vtable[t]);
		var r = 2;
		this.addInt16(e - this.object_start);
		var i = (n + r) * O.SIZEOF_SHORT;
		this.addInt16(i);
		var a = 0, o = this.space;
		e: for (t = 0; t < this.vtables.length; t++) {
			var s = this.bb.capacity() - this.vtables[t];
			if (i == this.bb.readInt16(s)) {
				for (var c = O.SIZEOF_SHORT; c < i; c += O.SIZEOF_SHORT) if (this.bb.readInt16(o + c) != this.bb.readInt16(s + c)) continue e;
				a = this.vtables[t];
				break;
			}
		}
		return a ? (this.space = this.bb.capacity() - e, this.bb.writeInt32(this.space, a - e)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - e, this.offset() - e)), this.isNested = !1, e;
	}, O.Builder.prototype.finish = function(e, t, n) {
		var r = n ? O.SIZE_PREFIX_LENGTH : 0;
		if (t) {
			var i = t;
			if (this.prep(this.minalign, O.SIZEOF_INT + O.FILE_IDENTIFIER_LENGTH + r), i.length != O.FILE_IDENTIFIER_LENGTH) throw Error("FlatBuffers: file identifier must be length " + O.FILE_IDENTIFIER_LENGTH);
			for (var a = O.FILE_IDENTIFIER_LENGTH - 1; a >= 0; a--) this.writeInt8(i.charCodeAt(a));
		}
		this.prep(this.minalign, O.SIZEOF_INT + r), this.addOffset(e), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
	}, O.Builder.prototype.finishSizePrefixed = function(e, t) {
		this.finish(e, t, !0);
	}, O.Builder.prototype.requiredField = function(e, t) {
		var n = this.bb.capacity() - e, r = n - this.bb.readInt32(n);
		if (this.bb.readInt16(r + t) == 0) throw Error("FlatBuffers: field " + t + " must be set");
	}, O.Builder.prototype.startVector = function(e, t, n) {
		this.notNested(), this.vector_num_elems = t, this.prep(O.SIZEOF_INT, e * t), this.prep(n, e * t);
	}, O.Builder.prototype.endVector = function() {
		return this.writeInt32(this.vector_num_elems), this.offset();
	}, O.Builder.prototype.createString = function(e) {
		if (e instanceof Uint8Array) var t = e;
		else for (var t = [], n = 0; n < e.length;) {
			var r, i = e.charCodeAt(n++);
			if (i < 55296 || i >= 56320) r = i;
			else {
				var a = e.charCodeAt(n++);
				r = (i << 10) + a + -56613888;
			}
			r < 128 ? t.push(r) : (r < 2048 ? t.push(r >> 6 & 31 | 192) : (r < 65536 ? t.push(r >> 12 & 15 | 224) : t.push(r >> 18 & 7 | 240, r >> 12 & 63 | 128), t.push(r >> 6 & 63 | 128)), t.push(r & 63 | 128));
		}
		this.addInt8(0), this.startVector(1, t.length, 1), this.bb.setPosition(this.space -= t.length);
		for (var n = 0, o = this.space, s = this.bb.bytes(); n < t.length; n++) s[o++] = t[n];
		return this.endVector();
	}, O.Builder.prototype.createLong = function(e, t) {
		return O.Long.create(e, t);
	}, O.ByteBuffer = function(e) {
		this.bytes_ = e, this.position_ = 0;
	}, O.ByteBuffer.allocate = function(e) {
		return new O.ByteBuffer(new Uint8Array(e));
	}, O.ByteBuffer.prototype.clear = function() {
		this.position_ = 0;
	}, O.ByteBuffer.prototype.bytes = function() {
		return this.bytes_;
	}, O.ByteBuffer.prototype.position = function() {
		return this.position_;
	}, O.ByteBuffer.prototype.setPosition = function(e) {
		this.position_ = e;
	}, O.ByteBuffer.prototype.capacity = function() {
		return this.bytes_.length;
	}, O.ByteBuffer.prototype.readInt8 = function(e) {
		return this.readUint8(e) << 24 >> 24;
	}, O.ByteBuffer.prototype.readUint8 = function(e) {
		return this.bytes_[e];
	}, O.ByteBuffer.prototype.readInt16 = function(e) {
		return this.readUint16(e) << 16 >> 16;
	}, O.ByteBuffer.prototype.readUint16 = function(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8;
	}, O.ByteBuffer.prototype.readInt32 = function(e) {
		return this.bytes_[e] | this.bytes_[e + 1] << 8 | this.bytes_[e + 2] << 16 | this.bytes_[e + 3] << 24;
	}, O.ByteBuffer.prototype.readUint32 = function(e) {
		return this.readInt32(e) >>> 0;
	}, O.ByteBuffer.prototype.readInt64 = function(e) {
		return new O.Long(this.readInt32(e), this.readInt32(e + 4));
	}, O.ByteBuffer.prototype.readUint64 = function(e) {
		return new O.Long(this.readUint32(e), this.readUint32(e + 4));
	}, O.ByteBuffer.prototype.readFloat32 = function(e) {
		return O.int32[0] = this.readInt32(e), O.float32[0];
	}, O.ByteBuffer.prototype.readFloat64 = function(e) {
		return O.int32[+!O.isLittleEndian] = this.readInt32(e), O.int32[+!!O.isLittleEndian] = this.readInt32(e + 4), O.float64[0];
	}, O.ByteBuffer.prototype.writeInt8 = function(e, t) {
		this.bytes_[e] = t;
	}, O.ByteBuffer.prototype.writeUint8 = function(e, t) {
		this.bytes_[e] = t;
	}, O.ByteBuffer.prototype.writeInt16 = function(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}, O.ByteBuffer.prototype.writeUint16 = function(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8;
	}, O.ByteBuffer.prototype.writeInt32 = function(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}, O.ByteBuffer.prototype.writeUint32 = function(e, t) {
		this.bytes_[e] = t, this.bytes_[e + 1] = t >> 8, this.bytes_[e + 2] = t >> 16, this.bytes_[e + 3] = t >> 24;
	}, O.ByteBuffer.prototype.writeInt64 = function(e, t) {
		this.writeInt32(e, t.low), this.writeInt32(e + 4, t.high);
	}, O.ByteBuffer.prototype.writeUint64 = function(e, t) {
		this.writeUint32(e, t.low), this.writeUint32(e + 4, t.high);
	}, O.ByteBuffer.prototype.writeFloat32 = function(e, t) {
		O.float32[0] = t, this.writeInt32(e, O.int32[0]);
	}, O.ByteBuffer.prototype.writeFloat64 = function(e, t) {
		O.float64[0] = t, this.writeInt32(e, O.int32[+!O.isLittleEndian]), this.writeInt32(e + 4, O.int32[+!!O.isLittleEndian]);
	}, O.ByteBuffer.prototype.getBufferIdentifier = function() {
		if (this.bytes_.length < this.position_ + O.SIZEOF_INT + O.FILE_IDENTIFIER_LENGTH) throw Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
		for (var e = "", t = 0; t < O.FILE_IDENTIFIER_LENGTH; t++) e += String.fromCharCode(this.readInt8(this.position_ + O.SIZEOF_INT + t));
		return e;
	}, O.ByteBuffer.prototype.__offset = function(e, t) {
		var n = e - this.readInt32(e);
		return t < this.readInt16(n) ? this.readInt16(n + t) : 0;
	}, O.ByteBuffer.prototype.__union = function(e, t) {
		return e.bb_pos = t + this.readInt32(t), e.bb = this, e;
	}, O.ByteBuffer.prototype.__string = function(e, t) {
		e += this.readInt32(e);
		var n = this.readInt32(e), r = "", i = 0;
		if (e += O.SIZEOF_INT, t === O.Encoding.UTF8_BYTES) return this.bytes_.subarray(e, e + n);
		for (; i < n;) {
			var a, o = this.readUint8(e + i++);
			if (o < 192) a = o;
			else {
				var s = this.readUint8(e + i++);
				if (o < 224) a = (o & 31) << 6 | s & 63;
				else {
					var c = this.readUint8(e + i++);
					if (o < 240) a = (o & 15) << 12 | (s & 63) << 6 | c & 63;
					else {
						var l = this.readUint8(e + i++);
						a = (o & 7) << 18 | (s & 63) << 12 | (c & 63) << 6 | l & 63;
					}
				}
			}
			a < 65536 ? r += String.fromCharCode(a) : (a -= 65536, r += String.fromCharCode((a >> 10) + 55296, (a & 1023) + 56320));
		}
		return r;
	}, O.ByteBuffer.prototype.__indirect = function(e) {
		return e + this.readInt32(e);
	}, O.ByteBuffer.prototype.__vector = function(e) {
		return e + this.readInt32(e) + O.SIZEOF_INT;
	}, O.ByteBuffer.prototype.__vector_len = function(e) {
		return this.readInt32(e + this.readInt32(e));
	}, O.ByteBuffer.prototype.__has_identifier = function(e) {
		if (e.length != O.FILE_IDENTIFIER_LENGTH) throw Error("FlatBuffers: file identifier must be length " + O.FILE_IDENTIFIER_LENGTH);
		for (var t = 0; t < O.FILE_IDENTIFIER_LENGTH; t++) if (e.charCodeAt(t) != this.readInt8(this.position_ + O.SIZEOF_INT + t)) return !1;
		return !0;
	}, O.ByteBuffer.prototype.createLong = function(e, t) {
		return O.Long.create(e, t);
	};
}), W, nn = E(() => {
	Wn(), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				let t;
				((e) => (e[e.UNDEFINED = 0] = "UNDEFINED", e[e.FLOAT = 1] = "FLOAT", e[e.INT = 2] = "INT", e[e.STRING = 3] = "STRING", e[e.TENSOR = 4] = "TENSOR", e[e.GRAPH = 5] = "GRAPH", e[e.FLOATS = 6] = "FLOATS", e[e.INTS = 7] = "INTS", e[e.STRINGS = 8] = "STRINGS", e[e.TENSORS = 9] = "TENSORS", e[e.GRAPHS = 10] = "GRAPHS", e[e.SPARSE_TENSOR = 11] = "SPARSE_TENSOR", e[e.SPARSE_TENSORS = 12] = "SPARSE_TENSORS"))(e.AttributeType ||= {});
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				let t;
				((e) => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.VALUE = 1] = "VALUE", e[e.PARAM = 2] = "PARAM"))(e.DimensionValueType ||= {});
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				let t;
				((e) => (e[e.UNDEFINED = 0] = "UNDEFINED", e[e.FLOAT = 1] = "FLOAT", e[e.UINT8 = 2] = "UINT8", e[e.INT8 = 3] = "INT8", e[e.UINT16 = 4] = "UINT16", e[e.INT16 = 5] = "INT16", e[e.INT32 = 6] = "INT32", e[e.INT64 = 7] = "INT64", e[e.STRING = 8] = "STRING", e[e.BOOL = 9] = "BOOL", e[e.FLOAT16 = 10] = "FLOAT16", e[e.DOUBLE = 11] = "DOUBLE", e[e.UINT32 = 12] = "UINT32", e[e.UINT64 = 13] = "UINT64", e[e.COMPLEX64 = 14] = "COMPLEX64", e[e.COMPLEX128 = 15] = "COMPLEX128", e[e.BFLOAT16 = 16] = "BFLOAT16", e[e.FLOAT8E4M3FN = 17] = "FLOAT8E4M3FN", e[e.FLOAT8E4M3FNUZ = 18] = "FLOAT8E4M3FNUZ", e[e.FLOAT8E5M2 = 19] = "FLOAT8E5M2", e[e.FLOAT8E5M2FNUZ = 20] = "FLOAT8E5M2FNUZ"))(e.TensorDataType ||= {});
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				let t;
				((e) => (e[e.Primitive = 0] = "Primitive", e[e.Fused = 1] = "Fused"))(e.NodeType ||= {});
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				let t;
				((e) => (e[e.NONE = 0] = "NONE", e[e.tensor_type = 1] = "tensor_type", e[e.sequence_type = 2] = "sequence_type", e[e.map_type = 3] = "map_type"))(e.TypeInfoValue ||= {});
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsShape(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsShape(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					dim(t, n) {
						let r = this.bb.__offset(this.bb_pos, 4);
						return r ? (n || new e.experimental.fbs.Dimension()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					dimLength() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startShape(e) {
						e.startObject(1);
					}
					static addDim(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static createDimVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startDimVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endShape(e) {
						return e.endObject();
					}
					static createShape(e, t) {
						return n.startShape(e), n.addDim(e, t), n.endShape(e);
					}
				}
				t.Shape = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsDimension(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsDimension(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					value(t) {
						let n = this.bb.__offset(this.bb_pos, 4);
						return n ? (t || new e.experimental.fbs.DimensionValue()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					denotation(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					static startDimension(e) {
						e.startObject(2);
					}
					static addValue(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addDenotation(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static endDimension(e) {
						return e.endObject();
					}
					static createDimension(e, t, r) {
						return n.startDimension(e), n.addValue(e, t), n.addDenotation(e, r), n.endDimension(e);
					}
				}
				t.Dimension = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsDimensionValue(e, n) {
						return (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsDimensionValue(e, n) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					dimType() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.readInt8(this.bb_pos + e) : 0;
					}
					dimValue() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
					}
					dimParam(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					static startDimensionValue(e) {
						e.startObject(3);
					}
					static addDimType(e, t) {
						e.addFieldInt8(0, t, 0);
					}
					static addDimValue(e, t) {
						e.addFieldInt64(1, t, e.createLong(0, 0));
					}
					static addDimParam(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static endDimensionValue(e) {
						return e.endObject();
					}
					static createDimensionValue(e, n, r, i) {
						return t.startDimensionValue(e), t.addDimType(e, n), t.addDimValue(e, r), t.addDimParam(e, i), t.endDimensionValue(e);
					}
				}
				e.DimensionValue = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsTensorTypeAndShape(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsTensorTypeAndShape(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					elemType() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					shape(t) {
						let n = this.bb.__offset(this.bb_pos, 6);
						return n ? (t || new e.experimental.fbs.Shape()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startTensorTypeAndShape(e) {
						e.startObject(2);
					}
					static addElemType(e, t) {
						e.addFieldInt32(0, t, 0);
					}
					static addShape(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static endTensorTypeAndShape(e) {
						return e.endObject();
					}
					static createTensorTypeAndShape(e, t, r) {
						return n.startTensorTypeAndShape(e), n.addElemType(e, t), n.addShape(e, r), n.endTensorTypeAndShape(e);
					}
				}
				t.TensorTypeAndShape = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsMapType(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsMapType(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					keyType() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					valueType(t) {
						let n = this.bb.__offset(this.bb_pos, 6);
						return n ? (t || new e.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startMapType(e) {
						e.startObject(2);
					}
					static addKeyType(e, t) {
						e.addFieldInt32(0, t, 0);
					}
					static addValueType(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static endMapType(e) {
						return e.endObject();
					}
					static createMapType(e, t, r) {
						return n.startMapType(e), n.addKeyType(e, t), n.addValueType(e, r), n.endMapType(e);
					}
				}
				t.MapType = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsSequenceType(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsSequenceType(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					elemType(t) {
						let n = this.bb.__offset(this.bb_pos, 4);
						return n ? (t || new e.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startSequenceType(e) {
						e.startObject(1);
					}
					static addElemType(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static endSequenceType(e) {
						return e.endObject();
					}
					static createSequenceType(e, t) {
						return n.startSequenceType(e), n.addElemType(e, t), n.endSequenceType(e);
					}
				}
				t.SequenceType = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					nodeIndex() {
						return this.bb.readUint32(this.bb_pos);
					}
					srcArgIndex() {
						return this.bb.readInt32(this.bb_pos + 4);
					}
					dstArgIndex() {
						return this.bb.readInt32(this.bb_pos + 8);
					}
					static createEdgeEnd(e, t, n, r) {
						return e.prep(4, 12), e.writeInt32(r), e.writeInt32(n), e.writeInt32(t), e.offset();
					}
				}
				e.EdgeEnd = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsNodeEdge(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsNodeEdge(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					nodeIndex() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.readUint32(this.bb_pos + e) : 0;
					}
					inputEdges(t, n) {
						let r = this.bb.__offset(this.bb_pos, 6);
						return r ? (n || new e.experimental.fbs.EdgeEnd()).__init(this.bb.__vector(this.bb_pos + r) + t * 12, this.bb) : null;
					}
					inputEdgesLength() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					outputEdges(t, n) {
						let r = this.bb.__offset(this.bb_pos, 8);
						return r ? (n || new e.experimental.fbs.EdgeEnd()).__init(this.bb.__vector(this.bb_pos + r) + t * 12, this.bb) : null;
					}
					outputEdgesLength() {
						let e = this.bb.__offset(this.bb_pos, 8);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startNodeEdge(e) {
						e.startObject(3);
					}
					static addNodeIndex(e, t) {
						e.addFieldInt32(0, t, 0);
					}
					static addInputEdges(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static startInputEdgesVector(e, t) {
						e.startVector(12, t, 4);
					}
					static addOutputEdges(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static startOutputEdgesVector(e, t) {
						e.startVector(12, t, 4);
					}
					static endNodeEdge(e) {
						return e.endObject();
					}
					static createNodeEdge(e, t, r, i) {
						return n.startNodeEdge(e), n.addNodeIndex(e, t), n.addInputEdges(e, r), n.addOutputEdges(e, i), n.endNodeEdge(e);
					}
				}
				t.NodeEdge = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsNode(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsNode(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					name(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					docString(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					domain(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					sinceVersion() {
						let e = this.bb.__offset(this.bb_pos, 10);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					index() {
						let e = this.bb.__offset(this.bb_pos, 12);
						return e ? this.bb.readUint32(this.bb_pos + e) : 0;
					}
					opType(e) {
						let t = this.bb.__offset(this.bb_pos, 14);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					type() {
						let e = this.bb.__offset(this.bb_pos, 16);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					executionProviderType(e) {
						let t = this.bb.__offset(this.bb_pos, 18);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					inputs(e, t) {
						let n = this.bb.__offset(this.bb_pos, 20);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					inputsLength() {
						let e = this.bb.__offset(this.bb_pos, 20);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					outputs(e, t) {
						let n = this.bb.__offset(this.bb_pos, 22);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					outputsLength() {
						let e = this.bb.__offset(this.bb_pos, 22);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					attributes(t, n) {
						let r = this.bb.__offset(this.bb_pos, 24);
						return r ? (n || new e.experimental.fbs.Attribute()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					attributesLength() {
						let e = this.bb.__offset(this.bb_pos, 24);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					inputArgCounts(e) {
						let t = this.bb.__offset(this.bb_pos, 26);
						return t ? this.bb.readInt32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
					}
					inputArgCountsLength() {
						let e = this.bb.__offset(this.bb_pos, 26);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					inputArgCountsArray() {
						let e = this.bb.__offset(this.bb_pos, 26);
						return e ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
					}
					implicitInputs(e, t) {
						let n = this.bb.__offset(this.bb_pos, 28);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					implicitInputsLength() {
						let e = this.bb.__offset(this.bb_pos, 28);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startNode(e) {
						e.startObject(13);
					}
					static addName(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addDocString(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addDomain(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static addSinceVersion(e, t) {
						e.addFieldInt32(3, t, 0);
					}
					static addIndex(e, t) {
						e.addFieldInt32(4, t, 0);
					}
					static addOpType(e, t) {
						e.addFieldOffset(5, t, 0);
					}
					static addType(e, t) {
						e.addFieldInt32(6, t, 0);
					}
					static addExecutionProviderType(e, t) {
						e.addFieldOffset(7, t, 0);
					}
					static addInputs(e, t) {
						e.addFieldOffset(8, t, 0);
					}
					static createInputsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startInputsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addOutputs(e, t) {
						e.addFieldOffset(9, t, 0);
					}
					static createOutputsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startOutputsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addAttributes(e, t) {
						e.addFieldOffset(10, t, 0);
					}
					static createAttributesVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startAttributesVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addInputArgCounts(e, t) {
						e.addFieldOffset(11, t, 0);
					}
					static createInputArgCountsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
						return e.endVector();
					}
					static startInputArgCountsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addImplicitInputs(e, t) {
						e.addFieldOffset(12, t, 0);
					}
					static createImplicitInputsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startImplicitInputsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endNode(e) {
						return e.endObject();
					}
					static createNode(e, t, r, i, a, o, s, c, l, u, d, f, p, m) {
						return n.startNode(e), n.addName(e, t), n.addDocString(e, r), n.addDomain(e, i), n.addSinceVersion(e, a), n.addIndex(e, o), n.addOpType(e, s), n.addType(e, c), n.addExecutionProviderType(e, l), n.addInputs(e, u), n.addOutputs(e, d), n.addAttributes(e, f), n.addInputArgCounts(e, p), n.addImplicitInputs(e, m), n.endNode(e);
					}
				}
				t.Node = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsValueInfo(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsValueInfo(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					name(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					docString(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					type(t) {
						let n = this.bb.__offset(this.bb_pos, 8);
						return n ? (t || new e.experimental.fbs.TypeInfo()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startValueInfo(e) {
						e.startObject(3);
					}
					static addName(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addDocString(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addType(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static endValueInfo(e) {
						return e.endObject();
					}
					static createValueInfo(e, t, r, i) {
						return n.startValueInfo(e), n.addName(e, t), n.addDocString(e, r), n.addType(e, i), n.endValueInfo(e);
					}
				}
				t.ValueInfo = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsTypeInfo(e, n) {
						return (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsTypeInfo(e, n) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					denotation(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					valueType() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.readUint8(this.bb_pos + e) : 0;
					}
					value(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.__union(e, this.bb_pos + t) : null;
					}
					static startTypeInfo(e) {
						e.startObject(3);
					}
					static addDenotation(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addValueType(e, t) {
						e.addFieldInt8(1, t, 0);
					}
					static addValue(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static endTypeInfo(e) {
						return e.endObject();
					}
					static createTypeInfo(e, n, r, i) {
						return t.startTypeInfo(e), t.addDenotation(e, n), t.addValueType(e, r), t.addValue(e, i), t.endTypeInfo(e);
					}
				}
				e.TypeInfo = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsOperatorSetId(e, n) {
						return (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsOperatorSetId(e, n) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					domain(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					version() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
					}
					static startOperatorSetId(e) {
						e.startObject(2);
					}
					static addDomain(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addVersion(e, t) {
						e.addFieldInt64(1, t, e.createLong(0, 0));
					}
					static endOperatorSetId(e) {
						return e.endObject();
					}
					static createOperatorSetId(e, n, r) {
						return t.startOperatorSetId(e), t.addDomain(e, n), t.addVersion(e, r), t.endOperatorSetId(e);
					}
				}
				e.OperatorSetId = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsTensor(e, n) {
						return (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsTensor(e, n) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					name(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					docString(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					dims(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : this.bb.createLong(0, 0);
					}
					dimsLength() {
						let e = this.bb.__offset(this.bb_pos, 8);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					dataType() {
						let e = this.bb.__offset(this.bb_pos, 10);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					rawData(e) {
						let t = this.bb.__offset(this.bb_pos, 12);
						return t ? this.bb.readUint8(this.bb.__vector(this.bb_pos + t) + e) : 0;
					}
					rawDataLength() {
						let e = this.bb.__offset(this.bb_pos, 12);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					rawDataArray() {
						let e = this.bb.__offset(this.bb_pos, 12);
						return e ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
					}
					stringData(e, t) {
						let n = this.bb.__offset(this.bb_pos, 14);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					stringDataLength() {
						let e = this.bb.__offset(this.bb_pos, 14);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startTensor(e) {
						e.startObject(6);
					}
					static addName(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addDocString(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addDims(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static createDimsVector(e, t) {
						e.startVector(8, t.length, 8);
						for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
						return e.endVector();
					}
					static startDimsVector(e, t) {
						e.startVector(8, t, 8);
					}
					static addDataType(e, t) {
						e.addFieldInt32(3, t, 0);
					}
					static addRawData(e, t) {
						e.addFieldOffset(4, t, 0);
					}
					static createRawDataVector(e, t) {
						e.startVector(1, t.length, 1);
						for (let n = t.length - 1; n >= 0; n--) e.addInt8(t[n]);
						return e.endVector();
					}
					static startRawDataVector(e, t) {
						e.startVector(1, t, 1);
					}
					static addStringData(e, t) {
						e.addFieldOffset(5, t, 0);
					}
					static createStringDataVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startStringDataVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endTensor(e) {
						return e.endObject();
					}
					static createTensor(e, n, r, i, a, o, s) {
						return t.startTensor(e), t.addName(e, n), t.addDocString(e, r), t.addDims(e, i), t.addDataType(e, a), t.addRawData(e, o), t.addStringData(e, s), t.endTensor(e);
					}
				}
				e.Tensor = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsSparseTensor(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsSparseTensor(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					values(t) {
						let n = this.bb.__offset(this.bb_pos, 4);
						return n ? (t || new e.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					indices(t) {
						let n = this.bb.__offset(this.bb_pos, 6);
						return n ? (t || new e.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					dims(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : this.bb.createLong(0, 0);
					}
					dimsLength() {
						let e = this.bb.__offset(this.bb_pos, 8);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startSparseTensor(e) {
						e.startObject(3);
					}
					static addValues(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addIndices(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addDims(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static createDimsVector(e, t) {
						e.startVector(8, t.length, 8);
						for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
						return e.endVector();
					}
					static startDimsVector(e, t) {
						e.startVector(8, t, 8);
					}
					static endSparseTensor(e) {
						return e.endObject();
					}
					static createSparseTensor(e, t, r, i) {
						return n.startSparseTensor(e), n.addValues(e, t), n.addIndices(e, r), n.addDims(e, i), n.endSparseTensor(e);
					}
				}
				t.SparseTensor = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsAttribute(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsAttribute(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					name(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					docString(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					type() {
						let e = this.bb.__offset(this.bb_pos, 8);
						return e ? this.bb.readInt32(this.bb_pos + e) : 0;
					}
					f() {
						let e = this.bb.__offset(this.bb_pos, 10);
						return e ? this.bb.readFloat32(this.bb_pos + e) : 0;
					}
					i() {
						let e = this.bb.__offset(this.bb_pos, 12);
						return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
					}
					s(e) {
						let t = this.bb.__offset(this.bb_pos, 14);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					t(t) {
						let n = this.bb.__offset(this.bb_pos, 16);
						return n ? (t || new e.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					g(t) {
						let n = this.bb.__offset(this.bb_pos, 18);
						return n ? (t || new e.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					floats(e) {
						let t = this.bb.__offset(this.bb_pos, 20);
						return t ? this.bb.readFloat32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
					}
					floatsLength() {
						let e = this.bb.__offset(this.bb_pos, 20);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					floatsArray() {
						let e = this.bb.__offset(this.bb_pos, 20);
						return e ? new Float32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
					}
					ints(e) {
						let t = this.bb.__offset(this.bb_pos, 22);
						return t ? this.bb.readInt64(this.bb.__vector(this.bb_pos + t) + e * 8) : this.bb.createLong(0, 0);
					}
					intsLength() {
						let e = this.bb.__offset(this.bb_pos, 22);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					strings(e, t) {
						let n = this.bb.__offset(this.bb_pos, 24);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					stringsLength() {
						let e = this.bb.__offset(this.bb_pos, 24);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					tensors(t, n) {
						let r = this.bb.__offset(this.bb_pos, 26);
						return r ? (n || new e.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					tensorsLength() {
						let e = this.bb.__offset(this.bb_pos, 26);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					graphs(t, n) {
						let r = this.bb.__offset(this.bb_pos, 28);
						return r ? (n || new e.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					graphsLength() {
						let e = this.bb.__offset(this.bb_pos, 28);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startAttribute(e) {
						e.startObject(13);
					}
					static addName(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addDocString(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addType(e, t) {
						e.addFieldInt32(2, t, 0);
					}
					static addF(e, t) {
						e.addFieldFloat32(3, t, 0);
					}
					static addI(e, t) {
						e.addFieldInt64(4, t, e.createLong(0, 0));
					}
					static addS(e, t) {
						e.addFieldOffset(5, t, 0);
					}
					static addT(e, t) {
						e.addFieldOffset(6, t, 0);
					}
					static addG(e, t) {
						e.addFieldOffset(7, t, 0);
					}
					static addFloats(e, t) {
						e.addFieldOffset(8, t, 0);
					}
					static createFloatsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addFloat32(t[n]);
						return e.endVector();
					}
					static startFloatsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addInts(e, t) {
						e.addFieldOffset(9, t, 0);
					}
					static createIntsVector(e, t) {
						e.startVector(8, t.length, 8);
						for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
						return e.endVector();
					}
					static startIntsVector(e, t) {
						e.startVector(8, t, 8);
					}
					static addStrings(e, t) {
						e.addFieldOffset(10, t, 0);
					}
					static createStringsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startStringsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addTensors(e, t) {
						e.addFieldOffset(11, t, 0);
					}
					static createTensorsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startTensorsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addGraphs(e, t) {
						e.addFieldOffset(12, t, 0);
					}
					static createGraphsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startGraphsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endAttribute(e) {
						return e.endObject();
					}
					static createAttribute(e, t, r, i, a, o, s, c, l, u, d, f, p, m) {
						return n.startAttribute(e), n.addName(e, t), n.addDocString(e, r), n.addType(e, i), n.addF(e, a), n.addI(e, o), n.addS(e, s), n.addT(e, c), n.addG(e, l), n.addFloats(e, u), n.addInts(e, d), n.addStrings(e, f), n.addTensors(e, p), n.addGraphs(e, m), n.endAttribute(e);
					}
				}
				t.Attribute = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsGraph(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsGraph(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					initializers(t, n) {
						let r = this.bb.__offset(this.bb_pos, 4);
						return r ? (n || new e.experimental.fbs.Tensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					initializersLength() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					nodeArgs(t, n) {
						let r = this.bb.__offset(this.bb_pos, 6);
						return r ? (n || new e.experimental.fbs.ValueInfo()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					nodeArgsLength() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					nodes(t, n) {
						let r = this.bb.__offset(this.bb_pos, 8);
						return r ? (n || new e.experimental.fbs.Node()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					nodesLength() {
						let e = this.bb.__offset(this.bb_pos, 8);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					maxNodeIndex() {
						let e = this.bb.__offset(this.bb_pos, 10);
						return e ? this.bb.readUint32(this.bb_pos + e) : 0;
					}
					nodeEdges(t, n) {
						let r = this.bb.__offset(this.bb_pos, 12);
						return r ? (n || new e.experimental.fbs.NodeEdge()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					nodeEdgesLength() {
						let e = this.bb.__offset(this.bb_pos, 12);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					inputs(e, t) {
						let n = this.bb.__offset(this.bb_pos, 14);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					inputsLength() {
						let e = this.bb.__offset(this.bb_pos, 14);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					outputs(e, t) {
						let n = this.bb.__offset(this.bb_pos, 16);
						return n ? this.bb.__string(this.bb.__vector(this.bb_pos + n) + e * 4, t) : null;
					}
					outputsLength() {
						let e = this.bb.__offset(this.bb_pos, 16);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					sparseInitializers(t, n) {
						let r = this.bb.__offset(this.bb_pos, 18);
						return r ? (n || new e.experimental.fbs.SparseTensor()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					sparseInitializersLength() {
						let e = this.bb.__offset(this.bb_pos, 18);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startGraph(e) {
						e.startObject(8);
					}
					static addInitializers(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static createInitializersVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startInitializersVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addNodeArgs(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static createNodeArgsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startNodeArgsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addNodes(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static createNodesVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startNodesVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addMaxNodeIndex(e, t) {
						e.addFieldInt32(3, t, 0);
					}
					static addNodeEdges(e, t) {
						e.addFieldOffset(4, t, 0);
					}
					static createNodeEdgesVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startNodeEdgesVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addInputs(e, t) {
						e.addFieldOffset(5, t, 0);
					}
					static createInputsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startInputsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addOutputs(e, t) {
						e.addFieldOffset(6, t, 0);
					}
					static createOutputsVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startOutputsVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addSparseInitializers(e, t) {
						e.addFieldOffset(7, t, 0);
					}
					static createSparseInitializersVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startSparseInitializersVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endGraph(e) {
						return e.endObject();
					}
					static createGraph(e, t, r, i, a, o, s, c, l) {
						return n.startGraph(e), n.addInitializers(e, t), n.addNodeArgs(e, r), n.addNodes(e, i), n.addMaxNodeIndex(e, a), n.addNodeEdges(e, o), n.addInputs(e, s), n.addOutputs(e, c), n.addSparseInitializers(e, l), n.endGraph(e);
					}
				}
				t.Graph = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsModel(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsModel(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					irVersion() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
					}
					opsetImport(t, n) {
						let r = this.bb.__offset(this.bb_pos, 6);
						return r ? (n || new e.experimental.fbs.OperatorSetId()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					opsetImportLength() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					producerName(e) {
						let t = this.bb.__offset(this.bb_pos, 8);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					producerVersion(e) {
						let t = this.bb.__offset(this.bb_pos, 10);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					domain(e) {
						let t = this.bb.__offset(this.bb_pos, 12);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					modelVersion() {
						let e = this.bb.__offset(this.bb_pos, 14);
						return e ? this.bb.readInt64(this.bb_pos + e) : this.bb.createLong(0, 0);
					}
					docString(e) {
						let t = this.bb.__offset(this.bb_pos, 16);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					graph(t) {
						let n = this.bb.__offset(this.bb_pos, 18);
						return n ? (t || new e.experimental.fbs.Graph()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					graphDocString(e) {
						let t = this.bb.__offset(this.bb_pos, 20);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					static startModel(e) {
						e.startObject(9);
					}
					static addIrVersion(e, t) {
						e.addFieldInt64(0, t, e.createLong(0, 0));
					}
					static addOpsetImport(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static createOpsetImportVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startOpsetImportVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addProducerName(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static addProducerVersion(e, t) {
						e.addFieldOffset(3, t, 0);
					}
					static addDomain(e, t) {
						e.addFieldOffset(4, t, 0);
					}
					static addModelVersion(e, t) {
						e.addFieldInt64(5, t, e.createLong(0, 0));
					}
					static addDocString(e, t) {
						e.addFieldOffset(6, t, 0);
					}
					static addGraph(e, t) {
						e.addFieldOffset(7, t, 0);
					}
					static addGraphDocString(e, t) {
						e.addFieldOffset(8, t, 0);
					}
					static endModel(e) {
						return e.endObject();
					}
					static createModel(e, t, r, i, a, o, s, c, l, u) {
						return n.startModel(e), n.addIrVersion(e, t), n.addOpsetImport(e, r), n.addProducerName(e, i), n.addProducerVersion(e, a), n.addDomain(e, o), n.addModelVersion(e, s), n.addDocString(e, c), n.addGraph(e, l), n.addGraphDocString(e, u), n.endModel(e);
					}
				}
				t.Model = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((e) => {
			let t;
			((e) => {
				class t {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsKernelCreateInfos(e, n) {
						return (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsKernelCreateInfos(e, n) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (n || new t()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					nodeIndices(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.readUint32(this.bb.__vector(this.bb_pos + t) + e * 4) : 0;
					}
					nodeIndicesLength() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					nodeIndicesArray() {
						let e = this.bb.__offset(this.bb_pos, 4);
						return e ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + e), this.bb.__vector_len(this.bb_pos + e)) : null;
					}
					kernelDefHashes(e) {
						let t = this.bb.__offset(this.bb_pos, 6);
						return t ? this.bb.readUint64(this.bb.__vector(this.bb_pos + t) + e * 8) : this.bb.createLong(0, 0);
					}
					kernelDefHashesLength() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startKernelCreateInfos(e) {
						e.startObject(2);
					}
					static addNodeIndices(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static createNodeIndicesVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addInt32(t[n]);
						return e.endVector();
					}
					static startNodeIndicesVector(e, t) {
						e.startVector(4, t, 4);
					}
					static addKernelDefHashes(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static createKernelDefHashesVector(e, t) {
						e.startVector(8, t.length, 8);
						for (let n = t.length - 1; n >= 0; n--) e.addInt64(t[n]);
						return e.endVector();
					}
					static startKernelDefHashesVector(e, t) {
						e.startVector(8, t, 8);
					}
					static endKernelCreateInfos(e) {
						return e.endObject();
					}
					static createKernelCreateInfos(e, n, r) {
						return t.startKernelCreateInfos(e), t.addNodeIndices(e, n), t.addKernelDefHashes(e, r), t.endKernelCreateInfos(e);
					}
				}
				e.KernelCreateInfos = t;
			})(e.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsSubGraphSessionState(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsSubGraphSessionState(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					graphId(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					sessionState(t) {
						let n = this.bb.__offset(this.bb_pos, 6);
						return n ? (t || new e.experimental.fbs.SessionState()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startSubGraphSessionState(e) {
						e.startObject(2);
					}
					static addGraphId(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addSessionState(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static endSubGraphSessionState(e) {
						let t = e.endObject();
						return e.requiredField(t, 4), t;
					}
					static createSubGraphSessionState(e, t, r) {
						return n.startSubGraphSessionState(e), n.addGraphId(e, t), n.addSessionState(e, r), n.endSubGraphSessionState(e);
					}
				}
				t.SubGraphSessionState = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsSessionState(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsSessionState(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					kernels(t) {
						let n = this.bb.__offset(this.bb_pos, 4);
						return n ? (t || new e.experimental.fbs.KernelCreateInfos()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					subGraphSessionStates(t, n) {
						let r = this.bb.__offset(this.bb_pos, 6);
						return r ? (n || new e.experimental.fbs.SubGraphSessionState()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
					}
					subGraphSessionStatesLength() {
						let e = this.bb.__offset(this.bb_pos, 6);
						return e ? this.bb.__vector_len(this.bb_pos + e) : 0;
					}
					static startSessionState(e) {
						e.startObject(2);
					}
					static addKernels(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addSubGraphSessionStates(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static createSubGraphSessionStatesVector(e, t) {
						e.startVector(4, t.length, 4);
						for (let n = t.length - 1; n >= 0; n--) e.addOffset(t[n]);
						return e.endVector();
					}
					static startSubGraphSessionStatesVector(e, t) {
						e.startVector(4, t, 4);
					}
					static endSessionState(e) {
						return e.endObject();
					}
					static createSessionState(e, t, r) {
						return n.startSessionState(e), n.addKernels(e, t), n.addSubGraphSessionStates(e, r), n.endSessionState(e);
					}
				}
				t.SessionState = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {}), ((e) => {
		let t;
		((t) => {
			let n;
			((t) => {
				class n {
					constructor() {
						this.bb = null, this.bb_pos = 0;
					}
					__init(e, t) {
						return this.bb_pos = e, this.bb = t, this;
					}
					static getRootAsInferenceSession(e, t) {
						return (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static getSizePrefixedRootAsInferenceSession(e, t) {
						return e.setPosition(e.position() + O.SIZE_PREFIX_LENGTH), (t || new n()).__init(e.readInt32(e.position()) + e.position(), e);
					}
					static bufferHasIdentifier(e) {
						return e.__has_identifier("ORTM");
					}
					ortVersion(e) {
						let t = this.bb.__offset(this.bb_pos, 4);
						return t ? this.bb.__string(this.bb_pos + t, e) : null;
					}
					model(t) {
						let n = this.bb.__offset(this.bb_pos, 6);
						return n ? (t || new e.experimental.fbs.Model()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					sessionState(t) {
						let n = this.bb.__offset(this.bb_pos, 8);
						return n ? (t || new e.experimental.fbs.SessionState()).__init(this.bb.__indirect(this.bb_pos + n), this.bb) : null;
					}
					static startInferenceSession(e) {
						e.startObject(3);
					}
					static addOrtVersion(e, t) {
						e.addFieldOffset(0, t, 0);
					}
					static addModel(e, t) {
						e.addFieldOffset(1, t, 0);
					}
					static addSessionState(e, t) {
						e.addFieldOffset(2, t, 0);
					}
					static endInferenceSession(e) {
						return e.endObject();
					}
					static finishInferenceSessionBuffer(e, t) {
						e.finish(t, "ORTM");
					}
					static finishSizePrefixedInferenceSessionBuffer(e, t) {
						e.finish(t, "ORTM", !0);
					}
					static createInferenceSession(e, t, r, i) {
						return n.startInferenceSession(e), n.addOrtVersion(e, t), n.addModel(e, r), n.addSessionState(e, i), n.endInferenceSession(e);
					}
				}
				t.InferenceSession = n;
			})(t.fbs ||= {});
		})(e.experimental ||= {});
	})(W ||= {});
}), Rs = me((e, t) => {
	t.exports = n;
	function n(e, t) {
		for (var n = Array(arguments.length - 1), r = 0, i = 2, a = !0; i < arguments.length;) n[r++] = arguments[i++];
		return new Promise(function(i, o) {
			n[r] = function(e) {
				if (a) if (a = !1, e) o(e);
				else {
					for (var t = Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
					i.apply(null, t);
				}
			};
			try {
				e.apply(t || null, n);
			} catch (e) {
				a && (a = !1, o(e));
			}
		});
	}
}), zs = me((e) => {
	var t = e;
	t.length = function(e) {
		var t = e.length;
		if (!t) return 0;
		for (var n = 0; --t % 4 > 1 && e.charAt(t) === "=";) ++n;
		return Math.ceil(e.length * 3) / 4 - n;
	};
	var n = Array(64), r = Array(123);
	for (i = 0; i < 64;) r[n[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
	var i;
	t.encode = function(e, t, r) {
		for (var i = null, a = [], o = 0, s = 0, c; t < r;) {
			var l = e[t++];
			switch (s) {
				case 0:
					a[o++] = n[l >> 2], c = (l & 3) << 4, s = 1;
					break;
				case 1:
					a[o++] = n[c | l >> 4], c = (l & 15) << 2, s = 2;
					break;
				case 2:
					a[o++] = n[c | l >> 6], a[o++] = n[l & 63], s = 0;
					break;
			}
			o > 8191 && ((i ||= []).push(String.fromCharCode.apply(String, a)), o = 0);
		}
		return s && (a[o++] = n[c], a[o++] = 61, s === 1 && (a[o++] = 61)), i ? (o && i.push(String.fromCharCode.apply(String, a.slice(0, o))), i.join("")) : String.fromCharCode.apply(String, a.slice(0, o));
	};
	var a = "invalid encoding";
	t.decode = function(e, t, n) {
		for (var i = n, o = 0, s, c = 0; c < e.length;) {
			var l = e.charCodeAt(c++);
			if (l === 61 && o > 1) break;
			if ((l = r[l]) === void 0) throw Error(a);
			switch (o) {
				case 0:
					s = l, o = 1;
					break;
				case 1:
					t[n++] = s << 2 | (l & 48) >> 4, s = l, o = 2;
					break;
				case 2:
					t[n++] = (s & 15) << 4 | (l & 60) >> 2, s = l, o = 3;
					break;
				case 3:
					t[n++] = (s & 3) << 6 | l, o = 0;
					break;
			}
		}
		if (o === 1) throw Error(a);
		return n - i;
	}, t.test = function(e) {
		return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
	};
}), Ws = me((e, t) => {
	t.exports = n;
	function n() {
		this._listeners = {};
	}
	n.prototype.on = function(e, t, n) {
		return (this._listeners[e] || (this._listeners[e] = [])).push({
			fn: t,
			ctx: n || this
		}), this;
	}, n.prototype.off = function(e, t) {
		if (e === void 0) this._listeners = {};
		else if (t === void 0) this._listeners[e] = [];
		else for (var n = this._listeners[e], r = 0; r < n.length;) n[r].fn === t ? n.splice(r, 1) : ++r;
		return this;
	}, n.prototype.emit = function(e) {
		var t = this._listeners[e];
		if (t) {
			for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
			for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n);
		}
		return this;
	};
}), Js = me((e, t) => {
	t.exports = n(n);
	function n(e) {
		return typeof Float32Array < "u" ? function() {
			var t = new Float32Array([-0]), n = new Uint8Array(t.buffer), r = n[3] === 128;
			function i(e, r, i) {
				t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3];
			}
			function a(e, r, i) {
				t[0] = e, r[i] = n[3], r[i + 1] = n[2], r[i + 2] = n[1], r[i + 3] = n[0];
			}
			e.writeFloatLE = r ? i : a, e.writeFloatBE = r ? a : i;
			function o(e, r) {
				return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], t[0];
			}
			function s(e, r) {
				return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t[0];
			}
			e.readFloatLE = r ? o : s, e.readFloatBE = r ? s : o;
		}() : function() {
			function t(e, t, n, r) {
				var i = +(t < 0);
				if (i && (t = -t), t === 0) e(1 / t > 0 ? 0 : 2147483648, n, r);
				else if (isNaN(t)) e(2143289344, n, r);
				else if (t > 34028234663852886e22) e((i << 31 | 2139095040) >>> 0, n, r);
				else if (t < 11754943508222875e-54) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
				else {
					var a = Math.floor(Math.log(t) / Math.LN2), o = Math.round(t * 2 ** -a * 8388608) & 8388607;
					e((i << 31 | a + 127 << 23 | o) >>> 0, n, r);
				}
			}
			e.writeFloatLE = t.bind(null, r), e.writeFloatBE = t.bind(null, i);
			function n(e, t, n) {
				var r = e(t, n), i = (r >> 31) * 2 + 1, a = r >>> 23 & 255, o = r & 8388607;
				return a === 255 ? o ? NaN : i * Infinity : a === 0 ? i * 1401298464324817e-60 * o : i * 2 ** (a - 150) * (o + 8388608);
			}
			e.readFloatLE = n.bind(null, a), e.readFloatBE = n.bind(null, o);
		}(), typeof Float64Array < "u" ? function() {
			var t = new Float64Array([-0]), n = new Uint8Array(t.buffer), r = n[7] === 128;
			function i(e, r, i) {
				t[0] = e, r[i] = n[0], r[i + 1] = n[1], r[i + 2] = n[2], r[i + 3] = n[3], r[i + 4] = n[4], r[i + 5] = n[5], r[i + 6] = n[6], r[i + 7] = n[7];
			}
			function a(e, r, i) {
				t[0] = e, r[i] = n[7], r[i + 1] = n[6], r[i + 2] = n[5], r[i + 3] = n[4], r[i + 4] = n[3], r[i + 5] = n[2], r[i + 6] = n[1], r[i + 7] = n[0];
			}
			e.writeDoubleLE = r ? i : a, e.writeDoubleBE = r ? a : i;
			function o(e, r) {
				return n[0] = e[r], n[1] = e[r + 1], n[2] = e[r + 2], n[3] = e[r + 3], n[4] = e[r + 4], n[5] = e[r + 5], n[6] = e[r + 6], n[7] = e[r + 7], t[0];
			}
			function s(e, r) {
				return n[7] = e[r], n[6] = e[r + 1], n[5] = e[r + 2], n[4] = e[r + 3], n[3] = e[r + 4], n[2] = e[r + 5], n[1] = e[r + 6], n[0] = e[r + 7], t[0];
			}
			e.readDoubleLE = r ? o : s, e.readDoubleBE = r ? s : o;
		}() : function() {
			function t(e, t, n, r, i, a) {
				var o = +(r < 0);
				if (o && (r = -r), r === 0) e(0, i, a + t), e(1 / r > 0 ? 0 : 2147483648, i, a + n);
				else if (isNaN(r)) e(0, i, a + t), e(2146959360, i, a + n);
				else if (r > 17976931348623157e292) e(0, i, a + t), e((o << 31 | 2146435072) >>> 0, i, a + n);
				else {
					var s;
					if (r < 22250738585072014e-324) s = r / 5e-324, e(s >>> 0, i, a + t), e((o << 31 | s / 4294967296) >>> 0, i, a + n);
					else {
						var c = Math.floor(Math.log(r) / Math.LN2);
						c === 1024 && (c = 1023), s = r * 2 ** -c, e(s * 4503599627370496 >>> 0, i, a + t), e((o << 31 | c + 1023 << 20 | s * 1048576 & 1048575) >>> 0, i, a + n);
					}
				}
			}
			e.writeDoubleLE = t.bind(null, r, 0, 4), e.writeDoubleBE = t.bind(null, i, 4, 0);
			function n(e, t, n, r, i) {
				var a = e(r, i + t), o = e(r, i + n), s = (o >> 31) * 2 + 1, c = o >>> 20 & 2047, l = 4294967296 * (o & 1048575) + a;
				return c === 2047 ? l ? NaN : s * Infinity : c === 0 ? s * 5e-324 * l : s * 2 ** (c - 1075) * (l + 4503599627370496);
			}
			e.readDoubleLE = n.bind(null, a, 0, 4), e.readDoubleBE = n.bind(null, o, 4, 0);
		}(), e;
	}
	function r(e, t, n) {
		t[n] = e & 255, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24;
	}
	function i(e, t, n) {
		t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = e & 255;
	}
	function a(e, t) {
		return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
	}
	function o(e, t) {
		return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
	}
}), Zs = me((exports, module) => {
	module.exports = inquire;
	function inquire(moduleName) {
		try {
			var mod = eval("quire".replace(/^/, "re"))(moduleName);
			if (mod && (mod.length || Object.keys(mod).length)) return mod;
		} catch {}
		return null;
	}
}), eu = me((e) => {
	var t = e;
	t.length = function(e) {
		for (var t = 0, n = 0, r = 0; r < e.length; ++r) n = e.charCodeAt(r), n < 128 ? t += 1 : n < 2048 ? t += 2 : (n & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 ? (++r, t += 4) : t += 3;
		return t;
	}, t.read = function(e, t, n) {
		if (n - t < 1) return "";
		for (var r = null, i = [], a = 0, o; t < n;) o = e[t++], o < 128 ? i[a++] = o : o > 191 && o < 224 ? i[a++] = (o & 31) << 6 | e[t++] & 63 : o > 239 && o < 365 ? (o = ((o & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536, i[a++] = 55296 + (o >> 10), i[a++] = 56320 + (o & 1023)) : i[a++] = (o & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63, a > 8191 && ((r ||= []).push(String.fromCharCode.apply(String, i)), a = 0);
		return r ? (a && r.push(String.fromCharCode.apply(String, i.slice(0, a))), r.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
	}, t.write = function(e, t, n) {
		for (var r = n, i, a, o = 0; o < e.length; ++o) i = e.charCodeAt(o), i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = i & 63 | 128) : (i & 64512) == 55296 && ((a = e.charCodeAt(o + 1)) & 64512) == 56320 ? (i = 65536 + ((i & 1023) << 10) + (a & 1023), ++o, t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = i & 63 | 128);
		return n - r;
	};
}), ru = me((e, t) => {
	t.exports = n;
	function n(e, t, n) {
		var r = n || 8192, i = r >>> 1, a = null, o = r;
		return function(n) {
			if (n < 1 || n > i) return e(n);
			o + n > r && (a = e(r), o = 0);
			var s = t.call(a, o, o += n);
			return o & 7 && (o = (o | 7) + 1), s;
		};
	}
}), ou = me((e, t) => {
	t.exports = r;
	var n = Xt();
	function r(e, t) {
		this.lo = e >>> 0, this.hi = t >>> 0;
	}
	var i = r.zero = new r(0, 0);
	i.toNumber = function() {
		return 0;
	}, i.zzEncode = i.zzDecode = function() {
		return this;
	}, i.length = function() {
		return 1;
	};
	var a = r.zeroHash = "\0\0\0\0\0\0\0\0";
	r.fromNumber = function(e) {
		if (e === 0) return i;
		var t = e < 0;
		t && (e = -e);
		var n = e >>> 0, a = (e - n) / 4294967296 >>> 0;
		return t && (a = ~a >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++a > 4294967295 && (a = 0))), new r(n, a);
	}, r.from = function(e) {
		if (typeof e == "number") return r.fromNumber(e);
		if (n.isString(e)) if (n.Long) e = n.Long.fromString(e);
		else return r.fromNumber(parseInt(e, 10));
		return e.low || e.high ? new r(e.low >>> 0, e.high >>> 0) : i;
	}, r.prototype.toNumber = function(e) {
		if (!e && this.hi >>> 31) {
			var t = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
			return t || (n = n + 1 >>> 0), -(t + n * 4294967296);
		}
		return this.lo + this.hi * 4294967296;
	}, r.prototype.toLong = function(e) {
		return n.Long ? new n.Long(this.lo | 0, this.hi | 0, !!e) : {
			low: this.lo | 0,
			high: this.hi | 0,
			unsigned: !!e
		};
	};
	var o = String.prototype.charCodeAt;
	r.fromHash = function(e) {
		return e === a ? i : new r((o.call(e, 0) | o.call(e, 1) << 8 | o.call(e, 2) << 16 | o.call(e, 3) << 24) >>> 0, (o.call(e, 4) | o.call(e, 5) << 8 | o.call(e, 6) << 16 | o.call(e, 7) << 24) >>> 0);
	}, r.prototype.toHash = function() {
		return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
	}, r.prototype.zzEncode = function() {
		var e = this.hi >> 31;
		return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this;
	}, r.prototype.zzDecode = function() {
		var e = -(this.lo & 1);
		return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this;
	}, r.prototype.length = function() {
		var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
		return n === 0 ? t === 0 ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
	};
}), Xt = me((e) => {
	var t = e;
	t.asPromise = Rs(), t.base64 = zs(), t.EventEmitter = Ws(), t.float = Js(), t.inquire = Zs(), t.utf8 = eu(), t.pool = ru(), t.LongBits = ou(), t.isNode = !!(typeof global < "u" && global && global.process && global.process.versions && global.process.versions.node), t.global = t.isNode && global || typeof window < "u" && window || typeof self < "u" && self || e, t.emptyArray = Object.freeze ? Object.freeze([]) : [], t.emptyObject = Object.freeze ? Object.freeze({}) : {}, t.isInteger = Number.isInteger || function(e) {
		return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
	}, t.isString = function(e) {
		return typeof e == "string" || e instanceof String;
	}, t.isObject = function(e) {
		return e && typeof e == "object";
	}, t.isset = t.isSet = function(e, t) {
		var n = e[t];
		return n != null && e.hasOwnProperty(t) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
	}, t.Buffer = function() {
		try {
			var e = t.inquire("buffer").Buffer;
			return e.prototype.utf8Write ? e : null;
		} catch {
			return null;
		}
	}(), t._Buffer_from = null, t._Buffer_allocUnsafe = null, t.newBuffer = function(e) {
		return typeof e == "number" ? t.Buffer ? t._Buffer_allocUnsafe(e) : new t.Array(e) : t.Buffer ? t._Buffer_from(e) : typeof Uint8Array > "u" ? e : new Uint8Array(e);
	}, t.Array = typeof Uint8Array < "u" ? Uint8Array : Array, t.Long = t.global.dcodeIO && t.global.dcodeIO.Long || t.global.Long || t.inquire("long"), t.key2Re = /^true|false|0|1$/, t.key32Re = /^-?(?:0|[1-9][0-9]*)$/, t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, t.longToHash = function(e) {
		return e ? t.LongBits.from(e).toHash() : t.LongBits.zeroHash;
	}, t.longFromHash = function(e, n) {
		var r = t.LongBits.fromHash(e);
		return t.Long ? t.Long.fromBits(r.lo, r.hi, n) : r.toNumber(!!n);
	};
	function n(e, t, n) {
		for (var r = Object.keys(t), i = 0; i < r.length; ++i) (e[r[i]] === void 0 || !n) && (e[r[i]] = t[r[i]]);
		return e;
	}
	t.merge = n, t.lcFirst = function(e) {
		return e.charAt(0).toLowerCase() + e.substring(1);
	};
	function r(e) {
		function t(e, r) {
			if (!(this instanceof t)) return new t(e, r);
			Object.defineProperty(this, "message", { get: function() {
				return e;
			} }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", { value: (/* @__PURE__ */ Error()).stack || "" }), r && n(this, r);
		}
		return t.prototype = Object.create(Error.prototype, {
			constructor: {
				value: t,
				writable: !0,
				enumerable: !1,
				configurable: !0
			},
			name: {
				get: function() {
					return e;
				},
				set: void 0,
				enumerable: !1,
				configurable: !0
			},
			toString: {
				value: function() {
					return this.name + ": " + this.message;
				},
				writable: !0,
				enumerable: !1,
				configurable: !0
			}
		}), t;
	}
	t.newError = r, t.ProtocolError = r("ProtocolError"), t.oneOfGetter = function(e) {
		for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
		return function() {
			for (var e = Object.keys(this), n = e.length - 1; n > -1; --n) if (t[e[n]] === 1 && this[e[n]] !== void 0 && this[e[n]] !== null) return e[n];
		};
	}, t.oneOfSetter = function(e) {
		return function(t) {
			for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]];
		};
	}, t.toJSONOptions = {
		longs: String,
		enums: String,
		bytes: String,
		json: !0
	}, t._configure = function() {
		var e = t.Buffer;
		if (!e) {
			t._Buffer_from = t._Buffer_allocUnsafe = null;
			return;
		}
		t._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) {
			return new e(t, n);
		}, t._Buffer_allocUnsafe = e.allocUnsafe || function(t) {
			return new e(t);
		};
	};
}), li = me((e, t) => {
	t.exports = u;
	var n = Xt(), r, i = n.LongBits, a = n.base64, o = n.utf8;
	function s(e, t, n) {
		this.fn = e, this.len = t, this.next = void 0, this.val = n;
	}
	function c() {}
	function l(e) {
		this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
	}
	function u() {
		this.len = 0, this.head = new s(c, 0, 0), this.tail = this.head, this.states = null;
	}
	var d = function() {
		return n.Buffer ? function() {
			return (u.create = function() {
				return new r();
			})();
		} : function() {
			return new u();
		};
	};
	u.create = d(), u.alloc = function(e) {
		return new n.Array(e);
	}, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(e, t, n) {
		return this.tail = this.tail.next = new s(e, t, n), this.len += t, this;
	};
	function f(e, t, n) {
		t[n] = e & 255;
	}
	function p(e, t, n) {
		for (; e > 127;) t[n++] = e & 127 | 128, e >>>= 7;
		t[n] = e;
	}
	function m(e, t) {
		this.len = e, this.next = void 0, this.val = t;
	}
	m.prototype = Object.create(s.prototype), m.prototype.fn = p, u.prototype.uint32 = function(e) {
		return this.len += (this.tail = this.tail.next = new m((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this;
	}, u.prototype.int32 = function(e) {
		return e < 0 ? this._push(h, 10, i.fromNumber(e)) : this.uint32(e);
	}, u.prototype.sint32 = function(e) {
		return this.uint32((e << 1 ^ e >> 31) >>> 0);
	};
	function h(e, t, n) {
		for (; e.hi;) t[n++] = e.lo & 127 | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
		for (; e.lo > 127;) t[n++] = e.lo & 127 | 128, e.lo >>>= 7;
		t[n++] = e.lo;
	}
	u.prototype.uint64 = function(e) {
		var t = i.from(e);
		return this._push(h, t.length(), t);
	}, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(e) {
		var t = i.from(e).zzEncode();
		return this._push(h, t.length(), t);
	}, u.prototype.bool = function(e) {
		return this._push(f, 1, +!!e);
	};
	function g(e, t, n) {
		t[n] = e & 255, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24;
	}
	u.prototype.fixed32 = function(e) {
		return this._push(g, 4, e >>> 0);
	}, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(e) {
		var t = i.from(e);
		return this._push(g, 4, t.lo)._push(g, 4, t.hi);
	}, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(e) {
		return this._push(n.float.writeFloatLE, 4, e);
	}, u.prototype.double = function(e) {
		return this._push(n.float.writeDoubleLE, 8, e);
	};
	var _ = n.Array.prototype.set ? function(e, t, n) {
		t.set(e, n);
	} : function(e, t, n) {
		for (var r = 0; r < e.length; ++r) t[n + r] = e[r];
	};
	u.prototype.bytes = function(e) {
		var t = e.length >>> 0;
		if (!t) return this._push(f, 1, 0);
		if (n.isString(e)) {
			var r = u.alloc(t = a.length(e));
			a.decode(e, r, 0), e = r;
		}
		return this.uint32(t)._push(_, t, e);
	}, u.prototype.string = function(e) {
		var t = o.length(e);
		return t ? this.uint32(t)._push(o.write, t, e) : this._push(f, 1, 0);
	}, u.prototype.fork = function() {
		return this.states = new l(this), this.head = this.tail = new s(c, 0, 0), this.len = 0, this;
	}, u.prototype.reset = function() {
		return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new s(c, 0, 0), this.len = 0), this;
	}, u.prototype.ldelim = function() {
		var e = this.head, t = this.tail, n = this.len;
		return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this;
	}, u.prototype.finish = function() {
		for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next;
		return t;
	}, u._configure = function(e) {
		r = e, u.create = d(), r._configure();
	};
}), du = me((e, t) => {
	t.exports = i;
	var n = li();
	(i.prototype = Object.create(n.prototype)).constructor = i;
	var r = Xt();
	function i() {
		n.call(this);
	}
	i._configure = function() {
		i.alloc = r._Buffer_allocUnsafe, i.writeBytesBuffer = r.Buffer && r.Buffer.prototype instanceof Uint8Array && r.Buffer.prototype.set.name === "set" ? function(e, t, n) {
			t.set(e, n);
		} : function(e, t, n) {
			if (e.copy) e.copy(t, n, 0, e.length);
			else for (var r = 0; r < e.length;) t[n++] = e[r++];
		};
	}, i.prototype.bytes = function(e) {
		r.isString(e) && (e = r._Buffer_from(e, "base64"));
		var t = e.length >>> 0;
		return this.uint32(t), t && this._push(i.writeBytesBuffer, t, e), this;
	};
	function a(e, t, n) {
		e.length < 40 ? r.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n);
	}
	i.prototype.string = function(e) {
		var t = r.Buffer.byteLength(e);
		return this.uint32(t), t && this._push(a, t, e), this;
	}, i._configure();
}), pi = me((e, t) => {
	t.exports = s;
	var n = Xt(), r, i = n.LongBits, a = n.utf8;
	function o(e, t) {
		return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
	}
	function s(e) {
		this.buf = e, this.pos = 0, this.len = e.length;
	}
	var c = typeof Uint8Array < "u" ? function(e) {
		if (e instanceof Uint8Array || Array.isArray(e)) return new s(e);
		throw Error("illegal buffer");
	} : function(e) {
		if (Array.isArray(e)) return new s(e);
		throw Error("illegal buffer");
	}, l = function() {
		return n.Buffer ? function(e) {
			return (s.create = function(e) {
				return n.Buffer.isBuffer(e) ? new r(e) : c(e);
			})(e);
		} : c;
	};
	s.create = l(), s.prototype._slice = n.Array.prototype.subarray || n.Array.prototype.slice, s.prototype.uint32 = function() {
		var e = 4294967295;
		return function() {
			if (e = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return e;
			if ((this.pos += 5) > this.len) throw this.pos = this.len, o(this, 10);
			return e;
		};
	}(), s.prototype.int32 = function() {
		return this.uint32() | 0;
	}, s.prototype.sint32 = function() {
		var e = this.uint32();
		return e >>> 1 ^ -(e & 1) | 0;
	};
	function u() {
		var e = new i(0, 0), t = 0;
		if (this.len - this.pos > 4) {
			for (; t < 4; ++t) if (e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0, this.buf[this.pos++] < 128) return e;
			if (e.lo = (e.lo | (this.buf[this.pos] & 127) << 28) >>> 0, e.hi = (e.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return e;
			t = 0;
		} else {
			for (; t < 3; ++t) {
				if (this.pos >= this.len) throw o(this);
				if (e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0, this.buf[this.pos++] < 128) return e;
			}
			return e.lo = (e.lo | (this.buf[this.pos++] & 127) << t * 7) >>> 0, e;
		}
		if (this.len - this.pos > 4) {
			for (; t < 5; ++t) if (e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return e;
		} else for (; t < 5; ++t) {
			if (this.pos >= this.len) throw o(this);
			if (e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return e;
		}
		throw Error("invalid varint encoding");
	}
	s.prototype.bool = function() {
		return this.uint32() !== 0;
	};
	function d(e, t) {
		return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
	}
	s.prototype.fixed32 = function() {
		if (this.pos + 4 > this.len) throw o(this, 4);
		return d(this.buf, this.pos += 4);
	}, s.prototype.sfixed32 = function() {
		if (this.pos + 4 > this.len) throw o(this, 4);
		return d(this.buf, this.pos += 4) | 0;
	};
	function f() {
		if (this.pos + 8 > this.len) throw o(this, 8);
		return new i(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
	}
	s.prototype.float = function() {
		if (this.pos + 4 > this.len) throw o(this, 4);
		var e = n.float.readFloatLE(this.buf, this.pos);
		return this.pos += 4, e;
	}, s.prototype.double = function() {
		if (this.pos + 8 > this.len) throw o(this, 4);
		var e = n.float.readDoubleLE(this.buf, this.pos);
		return this.pos += 8, e;
	}, s.prototype.bytes = function() {
		var e = this.uint32(), t = this.pos, n = this.pos + e;
		if (n > this.len) throw o(this, e);
		return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n);
	}, s.prototype.string = function() {
		var e = this.bytes();
		return a.read(e, 0, e.length);
	}, s.prototype.skip = function(e) {
		if (typeof e == "number") {
			if (this.pos + e > this.len) throw o(this, e);
			this.pos += e;
		} else do
			if (this.pos >= this.len) throw o(this);
		while (this.buf[this.pos++] & 128);
		return this;
	}, s.prototype.skipType = function(e) {
		switch (e) {
			case 0:
				this.skip();
				break;
			case 1:
				this.skip(8);
				break;
			case 2:
				this.skip(this.uint32());
				break;
			case 3:
				for (; (e = this.uint32() & 7) != 4;) this.skipType(e);
				break;
			case 5:
				this.skip(4);
				break;
			default: throw Error("invalid wire type " + e + " at offset " + this.pos);
		}
		return this;
	}, s._configure = function(e) {
		r = e, s.create = l(), r._configure();
		var t = n.Long ? "toLong" : "toNumber";
		n.merge(s.prototype, {
			int64: function() {
				return u.call(this)[t](!1);
			},
			uint64: function() {
				return u.call(this)[t](!0);
			},
			sint64: function() {
				return u.call(this).zzDecode()[t](!1);
			},
			fixed64: function() {
				return f.call(this)[t](!0);
			},
			sfixed64: function() {
				return f.call(this)[t](!1);
			}
		});
	};
}), vu = me((e, t) => {
	t.exports = i;
	var n = pi();
	(i.prototype = Object.create(n.prototype)).constructor = i;
	var r = Xt();
	function i(e) {
		n.call(this, e);
	}
	i._configure = function() {
		r.Buffer && (i.prototype._slice = r.Buffer.prototype.slice);
	}, i.prototype.string = function() {
		var e = this.uint32();
		return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
	}, i._configure();
}), Ou = me((e, t) => {
	t.exports = r;
	var n = Xt();
	(r.prototype = Object.create(n.EventEmitter.prototype)).constructor = r;
	function r(e, t, r) {
		if (typeof e != "function") throw TypeError("rpcImpl must be a function");
		n.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!r;
	}
	r.prototype.rpcCall = function e(t, r, i, a, o) {
		if (!a) throw TypeError("request must be specified");
		var s = this;
		if (!o) return n.asPromise(e, s, t, r, i, a);
		if (!s.rpcImpl) {
			setTimeout(function() {
				o(Error("already ended"));
			}, 0);
			return;
		}
		try {
			return s.rpcImpl(t, r[s.requestDelimited ? "encodeDelimited" : "encode"](a).finish(), function(e, n) {
				if (e) return s.emit("error", e, t), o(e);
				if (n === null) {
					s.end(!0);
					return;
				}
				if (!(n instanceof i)) try {
					n = i[s.responseDelimited ? "decodeDelimited" : "decode"](n);
				} catch (e) {
					return s.emit("error", e, t), o(e);
				}
				return s.emit("data", n, t), o(null, n);
			});
		} catch (e) {
			s.emit("error", e, t), setTimeout(function() {
				o(e);
			}, 0);
			return;
		}
	}, r.prototype.end = function(e) {
		return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
	};
}), Su = me((e) => {
	var t = e;
	t.Service = Ou();
}), Pu = me((e, t) => {
	t.exports = {};
}), Lu = me((e) => {
	var t = e;
	t.build = "minimal", t.Writer = li(), t.BufferWriter = du(), t.Reader = pi(), t.BufferReader = vu(), t.util = Xt(), t.rpc = Su(), t.roots = Pu(), t.configure = n;
	function n() {
		t.util._configure(), t.Writer._configure(t.BufferWriter), t.Reader._configure(t.BufferReader);
	}
	n();
}), Cu = me((e, t) => {
	t.exports = Lu();
}), $r = me((e, t) => {
	var n = Cu(), r = n.Reader, i = n.Writer, a = n.util, o = n.roots.default || (n.roots.default = {});
	o.onnx = function() {
		var e = {};
		return e.Version = function() {
			var e = {}, t = Object.create(e);
			return t[e[0] = "_START_VERSION"] = 0, t[e[1] = "IR_VERSION_2017_10_10"] = 1, t[e[2] = "IR_VERSION_2017_10_30"] = 2, t[e[3] = "IR_VERSION_2017_11_3"] = 3, t[e[4] = "IR_VERSION_2019_1_22"] = 4, t[e[5] = "IR_VERSION_2019_3_18"] = 5, t[e[6] = "IR_VERSION_2019_9_19"] = 6, t[e[7] = "IR_VERSION_2020_5_8"] = 7, t[e[8] = "IR_VERSION_2021_7_30"] = 8, t[e[9] = "IR_VERSION"] = 9, t;
		}(), e.AttributeProto = function() {
			function e(e) {
				if (this.floats = [], this.ints = [], this.strings = [], this.tensors = [], this.graphs = [], this.sparseTensors = [], this.typeProtos = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.name = "", e.prototype.refAttrName = "", e.prototype.docString = "", e.prototype.type = 0, e.prototype.f = 0, e.prototype.i = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.s = a.newBuffer([]), e.prototype.t = null, e.prototype.g = null, e.prototype.sparseTensor = null, e.prototype.tp = null, e.prototype.floats = a.emptyArray, e.prototype.ints = a.emptyArray, e.prototype.strings = a.emptyArray, e.prototype.tensors = a.emptyArray, e.prototype.graphs = a.emptyArray, e.prototype.sparseTensors = a.emptyArray, e.prototype.typeProtos = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), e.f != null && Object.hasOwnProperty.call(e, "f") && t.uint32(21).float(e.f), e.i != null && Object.hasOwnProperty.call(e, "i") && t.uint32(24).int64(e.i), e.s != null && Object.hasOwnProperty.call(e, "s") && t.uint32(34).bytes(e.s), e.t != null && Object.hasOwnProperty.call(e, "t") && o.onnx.TensorProto.encode(e.t, t.uint32(42).fork()).ldelim(), e.g != null && Object.hasOwnProperty.call(e, "g") && o.onnx.GraphProto.encode(e.g, t.uint32(50).fork()).ldelim(), e.floats != null && e.floats.length) {
					t.uint32(58).fork();
					for (var n = 0; n < e.floats.length; ++n) t.float(e.floats[n]);
					t.ldelim();
				}
				if (e.ints != null && e.ints.length) {
					t.uint32(66).fork();
					for (var n = 0; n < e.ints.length; ++n) t.int64(e.ints[n]);
					t.ldelim();
				}
				if (e.strings != null && e.strings.length) for (var n = 0; n < e.strings.length; ++n) t.uint32(74).bytes(e.strings[n]);
				if (e.tensors != null && e.tensors.length) for (var n = 0; n < e.tensors.length; ++n) o.onnx.TensorProto.encode(e.tensors[n], t.uint32(82).fork()).ldelim();
				if (e.graphs != null && e.graphs.length) for (var n = 0; n < e.graphs.length; ++n) o.onnx.GraphProto.encode(e.graphs[n], t.uint32(90).fork()).ldelim();
				if (e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(106).string(e.docString), e.tp != null && Object.hasOwnProperty.call(e, "tp") && o.onnx.TypeProto.encode(e.tp, t.uint32(114).fork()).ldelim(), e.typeProtos != null && e.typeProtos.length) for (var n = 0; n < e.typeProtos.length; ++n) o.onnx.TypeProto.encode(e.typeProtos[n], t.uint32(122).fork()).ldelim();
				if (e.type != null && Object.hasOwnProperty.call(e, "type") && t.uint32(160).int32(e.type), e.refAttrName != null && Object.hasOwnProperty.call(e, "refAttrName") && t.uint32(170).string(e.refAttrName), e.sparseTensor != null && Object.hasOwnProperty.call(e, "sparseTensor") && o.onnx.SparseTensorProto.encode(e.sparseTensor, t.uint32(178).fork()).ldelim(), e.sparseTensors != null && e.sparseTensors.length) for (var n = 0; n < e.sparseTensors.length; ++n) o.onnx.SparseTensorProto.encode(e.sparseTensors[n], t.uint32(186).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.AttributeProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.name = e.string();
							break;
						case 21:
							i.refAttrName = e.string();
							break;
						case 13:
							i.docString = e.string();
							break;
						case 20:
							i.type = e.int32();
							break;
						case 2:
							i.f = e.float();
							break;
						case 3:
							i.i = e.int64();
							break;
						case 4:
							i.s = e.bytes();
							break;
						case 5:
							i.t = o.onnx.TensorProto.decode(e, e.uint32());
							break;
						case 6:
							i.g = o.onnx.GraphProto.decode(e, e.uint32());
							break;
						case 22:
							i.sparseTensor = o.onnx.SparseTensorProto.decode(e, e.uint32());
							break;
						case 14:
							i.tp = o.onnx.TypeProto.decode(e, e.uint32());
							break;
						case 7:
							if (i.floats && i.floats.length || (i.floats = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.floats.push(e.float());
							else i.floats.push(e.float());
							break;
						case 8:
							if (i.ints && i.ints.length || (i.ints = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.ints.push(e.int64());
							else i.ints.push(e.int64());
							break;
						case 9:
							i.strings && i.strings.length || (i.strings = []), i.strings.push(e.bytes());
							break;
						case 10:
							i.tensors && i.tensors.length || (i.tensors = []), i.tensors.push(o.onnx.TensorProto.decode(e, e.uint32()));
							break;
						case 11:
							i.graphs && i.graphs.length || (i.graphs = []), i.graphs.push(o.onnx.GraphProto.decode(e, e.uint32()));
							break;
						case 23:
							i.sparseTensors && i.sparseTensors.length || (i.sparseTensors = []), i.sparseTensors.push(o.onnx.SparseTensorProto.decode(e, e.uint32()));
							break;
						case 15:
							i.typeProtos && i.typeProtos.length || (i.typeProtos = []), i.typeProtos.push(o.onnx.TypeProto.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.refAttrName != null && e.hasOwnProperty("refAttrName") && !a.isString(e.refAttrName)) return "refAttrName: string expected";
				if (e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString)) return "docString: string expected";
				if (e.type != null && e.hasOwnProperty("type")) switch (e.type) {
					default: return "type: enum value expected";
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 11:
					case 13:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 12:
					case 14: break;
				}
				if (e.f != null && e.hasOwnProperty("f") && typeof e.f != "number") return "f: number expected";
				if (e.i != null && e.hasOwnProperty("i") && !a.isInteger(e.i) && !(e.i && a.isInteger(e.i.low) && a.isInteger(e.i.high))) return "i: integer|Long expected";
				if (e.s != null && e.hasOwnProperty("s") && !(e.s && typeof e.s.length == "number" || a.isString(e.s))) return "s: buffer expected";
				if (e.t != null && e.hasOwnProperty("t")) {
					var t = o.onnx.TensorProto.verify(e.t);
					if (t) return "t." + t;
				}
				if (e.g != null && e.hasOwnProperty("g")) {
					var t = o.onnx.GraphProto.verify(e.g);
					if (t) return "g." + t;
				}
				if (e.sparseTensor != null && e.hasOwnProperty("sparseTensor")) {
					var t = o.onnx.SparseTensorProto.verify(e.sparseTensor);
					if (t) return "sparseTensor." + t;
				}
				if (e.tp != null && e.hasOwnProperty("tp")) {
					var t = o.onnx.TypeProto.verify(e.tp);
					if (t) return "tp." + t;
				}
				if (e.floats != null && e.hasOwnProperty("floats")) {
					if (!Array.isArray(e.floats)) return "floats: array expected";
					for (var n = 0; n < e.floats.length; ++n) if (typeof e.floats[n] != "number") return "floats: number[] expected";
				}
				if (e.ints != null && e.hasOwnProperty("ints")) {
					if (!Array.isArray(e.ints)) return "ints: array expected";
					for (var n = 0; n < e.ints.length; ++n) if (!a.isInteger(e.ints[n]) && !(e.ints[n] && a.isInteger(e.ints[n].low) && a.isInteger(e.ints[n].high))) return "ints: integer|Long[] expected";
				}
				if (e.strings != null && e.hasOwnProperty("strings")) {
					if (!Array.isArray(e.strings)) return "strings: array expected";
					for (var n = 0; n < e.strings.length; ++n) if (!(e.strings[n] && typeof e.strings[n].length == "number" || a.isString(e.strings[n]))) return "strings: buffer[] expected";
				}
				if (e.tensors != null && e.hasOwnProperty("tensors")) {
					if (!Array.isArray(e.tensors)) return "tensors: array expected";
					for (var n = 0; n < e.tensors.length; ++n) {
						var t = o.onnx.TensorProto.verify(e.tensors[n]);
						if (t) return "tensors." + t;
					}
				}
				if (e.graphs != null && e.hasOwnProperty("graphs")) {
					if (!Array.isArray(e.graphs)) return "graphs: array expected";
					for (var n = 0; n < e.graphs.length; ++n) {
						var t = o.onnx.GraphProto.verify(e.graphs[n]);
						if (t) return "graphs." + t;
					}
				}
				if (e.sparseTensors != null && e.hasOwnProperty("sparseTensors")) {
					if (!Array.isArray(e.sparseTensors)) return "sparseTensors: array expected";
					for (var n = 0; n < e.sparseTensors.length; ++n) {
						var t = o.onnx.SparseTensorProto.verify(e.sparseTensors[n]);
						if (t) return "sparseTensors." + t;
					}
				}
				if (e.typeProtos != null && e.hasOwnProperty("typeProtos")) {
					if (!Array.isArray(e.typeProtos)) return "typeProtos: array expected";
					for (var n = 0; n < e.typeProtos.length; ++n) {
						var t = o.onnx.TypeProto.verify(e.typeProtos[n]);
						if (t) return "typeProtos." + t;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.AttributeProto) return e;
				var t = new o.onnx.AttributeProto();
				switch (e.name != null && (t.name = String(e.name)), e.refAttrName != null && (t.refAttrName = String(e.refAttrName)), e.docString != null && (t.docString = String(e.docString)), e.type) {
					default:
						if (typeof e.type == "number") {
							t.type = e.type;
							break;
						}
						break;
					case "UNDEFINED":
					case 0:
						t.type = 0;
						break;
					case "FLOAT":
					case 1:
						t.type = 1;
						break;
					case "INT":
					case 2:
						t.type = 2;
						break;
					case "STRING":
					case 3:
						t.type = 3;
						break;
					case "TENSOR":
					case 4:
						t.type = 4;
						break;
					case "GRAPH":
					case 5:
						t.type = 5;
						break;
					case "SPARSE_TENSOR":
					case 11:
						t.type = 11;
						break;
					case "TYPE_PROTO":
					case 13:
						t.type = 13;
						break;
					case "FLOATS":
					case 6:
						t.type = 6;
						break;
					case "INTS":
					case 7:
						t.type = 7;
						break;
					case "STRINGS":
					case 8:
						t.type = 8;
						break;
					case "TENSORS":
					case 9:
						t.type = 9;
						break;
					case "GRAPHS":
					case 10:
						t.type = 10;
						break;
					case "SPARSE_TENSORS":
					case 12:
						t.type = 12;
						break;
					case "TYPE_PROTOS":
					case 14:
						t.type = 14;
						break;
				}
				if (e.f != null && (t.f = Number(e.f)), e.i != null && (a.Long ? (t.i = a.Long.fromValue(e.i)).unsigned = !1 : typeof e.i == "string" ? t.i = parseInt(e.i, 10) : typeof e.i == "number" ? t.i = e.i : typeof e.i == "object" && (t.i = new a.LongBits(e.i.low >>> 0, e.i.high >>> 0).toNumber())), e.s != null && (typeof e.s == "string" ? a.base64.decode(e.s, t.s = a.newBuffer(a.base64.length(e.s)), 0) : e.s.length >= 0 && (t.s = e.s)), e.t != null) {
					if (typeof e.t != "object") throw TypeError(".onnx.AttributeProto.t: object expected");
					t.t = o.onnx.TensorProto.fromObject(e.t);
				}
				if (e.g != null) {
					if (typeof e.g != "object") throw TypeError(".onnx.AttributeProto.g: object expected");
					t.g = o.onnx.GraphProto.fromObject(e.g);
				}
				if (e.sparseTensor != null) {
					if (typeof e.sparseTensor != "object") throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");
					t.sparseTensor = o.onnx.SparseTensorProto.fromObject(e.sparseTensor);
				}
				if (e.tp != null) {
					if (typeof e.tp != "object") throw TypeError(".onnx.AttributeProto.tp: object expected");
					t.tp = o.onnx.TypeProto.fromObject(e.tp);
				}
				if (e.floats) {
					if (!Array.isArray(e.floats)) throw TypeError(".onnx.AttributeProto.floats: array expected");
					t.floats = [];
					for (var n = 0; n < e.floats.length; ++n) t.floats[n] = Number(e.floats[n]);
				}
				if (e.ints) {
					if (!Array.isArray(e.ints)) throw TypeError(".onnx.AttributeProto.ints: array expected");
					t.ints = [];
					for (var n = 0; n < e.ints.length; ++n) a.Long ? (t.ints[n] = a.Long.fromValue(e.ints[n])).unsigned = !1 : typeof e.ints[n] == "string" ? t.ints[n] = parseInt(e.ints[n], 10) : typeof e.ints[n] == "number" ? t.ints[n] = e.ints[n] : typeof e.ints[n] == "object" && (t.ints[n] = new a.LongBits(e.ints[n].low >>> 0, e.ints[n].high >>> 0).toNumber());
				}
				if (e.strings) {
					if (!Array.isArray(e.strings)) throw TypeError(".onnx.AttributeProto.strings: array expected");
					t.strings = [];
					for (var n = 0; n < e.strings.length; ++n) typeof e.strings[n] == "string" ? a.base64.decode(e.strings[n], t.strings[n] = a.newBuffer(a.base64.length(e.strings[n])), 0) : e.strings[n].length >= 0 && (t.strings[n] = e.strings[n]);
				}
				if (e.tensors) {
					if (!Array.isArray(e.tensors)) throw TypeError(".onnx.AttributeProto.tensors: array expected");
					t.tensors = [];
					for (var n = 0; n < e.tensors.length; ++n) {
						if (typeof e.tensors[n] != "object") throw TypeError(".onnx.AttributeProto.tensors: object expected");
						t.tensors[n] = o.onnx.TensorProto.fromObject(e.tensors[n]);
					}
				}
				if (e.graphs) {
					if (!Array.isArray(e.graphs)) throw TypeError(".onnx.AttributeProto.graphs: array expected");
					t.graphs = [];
					for (var n = 0; n < e.graphs.length; ++n) {
						if (typeof e.graphs[n] != "object") throw TypeError(".onnx.AttributeProto.graphs: object expected");
						t.graphs[n] = o.onnx.GraphProto.fromObject(e.graphs[n]);
					}
				}
				if (e.sparseTensors) {
					if (!Array.isArray(e.sparseTensors)) throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");
					t.sparseTensors = [];
					for (var n = 0; n < e.sparseTensors.length; ++n) {
						if (typeof e.sparseTensors[n] != "object") throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");
						t.sparseTensors[n] = o.onnx.SparseTensorProto.fromObject(e.sparseTensors[n]);
					}
				}
				if (e.typeProtos) {
					if (!Array.isArray(e.typeProtos)) throw TypeError(".onnx.AttributeProto.typeProtos: array expected");
					t.typeProtos = [];
					for (var n = 0; n < e.typeProtos.length; ++n) {
						if (typeof e.typeProtos[n] != "object") throw TypeError(".onnx.AttributeProto.typeProtos: object expected");
						t.typeProtos[n] = o.onnx.TypeProto.fromObject(e.typeProtos[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.floats = [], n.ints = [], n.strings = [], n.tensors = [], n.graphs = [], n.typeProtos = [], n.sparseTensors = []), t.defaults) {
					if (n.name = "", n.f = 0, a.Long) {
						var r = new a.Long(0, 0, !1);
						n.i = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
					} else n.i = t.longs === String ? "0" : 0;
					t.bytes === String ? n.s = "" : (n.s = [], t.bytes !== Array && (n.s = a.newBuffer(n.s))), n.t = null, n.g = null, n.docString = "", n.tp = null, n.type = t.enums === String ? "UNDEFINED" : 0, n.refAttrName = "", n.sparseTensor = null;
				}
				if (e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.f != null && e.hasOwnProperty("f") && (n.f = t.json && !isFinite(e.f) ? String(e.f) : e.f), e.i != null && e.hasOwnProperty("i") && (typeof e.i == "number" ? n.i = t.longs === String ? String(e.i) : e.i : n.i = t.longs === String ? a.Long.prototype.toString.call(e.i) : t.longs === Number ? new a.LongBits(e.i.low >>> 0, e.i.high >>> 0).toNumber() : e.i), e.s != null && e.hasOwnProperty("s") && (n.s = t.bytes === String ? a.base64.encode(e.s, 0, e.s.length) : t.bytes === Array ? Array.prototype.slice.call(e.s) : e.s), e.t != null && e.hasOwnProperty("t") && (n.t = o.onnx.TensorProto.toObject(e.t, t)), e.g != null && e.hasOwnProperty("g") && (n.g = o.onnx.GraphProto.toObject(e.g, t)), e.floats && e.floats.length) {
					n.floats = [];
					for (var i = 0; i < e.floats.length; ++i) n.floats[i] = t.json && !isFinite(e.floats[i]) ? String(e.floats[i]) : e.floats[i];
				}
				if (e.ints && e.ints.length) {
					n.ints = [];
					for (var i = 0; i < e.ints.length; ++i) typeof e.ints[i] == "number" ? n.ints[i] = t.longs === String ? String(e.ints[i]) : e.ints[i] : n.ints[i] = t.longs === String ? a.Long.prototype.toString.call(e.ints[i]) : t.longs === Number ? new a.LongBits(e.ints[i].low >>> 0, e.ints[i].high >>> 0).toNumber() : e.ints[i];
				}
				if (e.strings && e.strings.length) {
					n.strings = [];
					for (var i = 0; i < e.strings.length; ++i) n.strings[i] = t.bytes === String ? a.base64.encode(e.strings[i], 0, e.strings[i].length) : t.bytes === Array ? Array.prototype.slice.call(e.strings[i]) : e.strings[i];
				}
				if (e.tensors && e.tensors.length) {
					n.tensors = [];
					for (var i = 0; i < e.tensors.length; ++i) n.tensors[i] = o.onnx.TensorProto.toObject(e.tensors[i], t);
				}
				if (e.graphs && e.graphs.length) {
					n.graphs = [];
					for (var i = 0; i < e.graphs.length; ++i) n.graphs[i] = o.onnx.GraphProto.toObject(e.graphs[i], t);
				}
				if (e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.tp != null && e.hasOwnProperty("tp") && (n.tp = o.onnx.TypeProto.toObject(e.tp, t)), e.typeProtos && e.typeProtos.length) {
					n.typeProtos = [];
					for (var i = 0; i < e.typeProtos.length; ++i) n.typeProtos[i] = o.onnx.TypeProto.toObject(e.typeProtos[i], t);
				}
				if (e.type != null && e.hasOwnProperty("type") && (n.type = t.enums === String ? o.onnx.AttributeProto.AttributeType[e.type] === void 0 ? e.type : o.onnx.AttributeProto.AttributeType[e.type] : e.type), e.refAttrName != null && e.hasOwnProperty("refAttrName") && (n.refAttrName = e.refAttrName), e.sparseTensor != null && e.hasOwnProperty("sparseTensor") && (n.sparseTensor = o.onnx.SparseTensorProto.toObject(e.sparseTensor, t)), e.sparseTensors && e.sparseTensors.length) {
					n.sparseTensors = [];
					for (var i = 0; i < e.sparseTensors.length; ++i) n.sparseTensors[i] = o.onnx.SparseTensorProto.toObject(e.sparseTensors[i], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.AttributeProto";
			}, e.AttributeType = function() {
				var e = {}, t = Object.create(e);
				return t[e[0] = "UNDEFINED"] = 0, t[e[1] = "FLOAT"] = 1, t[e[2] = "INT"] = 2, t[e[3] = "STRING"] = 3, t[e[4] = "TENSOR"] = 4, t[e[5] = "GRAPH"] = 5, t[e[11] = "SPARSE_TENSOR"] = 11, t[e[13] = "TYPE_PROTO"] = 13, t[e[6] = "FLOATS"] = 6, t[e[7] = "INTS"] = 7, t[e[8] = "STRINGS"] = 8, t[e[9] = "TENSORS"] = 9, t[e[10] = "GRAPHS"] = 10, t[e[12] = "SPARSE_TENSORS"] = 12, t[e[14] = "TYPE_PROTOS"] = 14, t;
			}(), e;
		}(), e.ValueInfoProto = function() {
			function e(e) {
				if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.name = "", e.prototype.type = null, e.prototype.docString = "", e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				return t ||= i.create(), e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), e.type != null && Object.hasOwnProperty.call(e, "type") && o.onnx.TypeProto.encode(e.type, t.uint32(18).fork()).ldelim(), e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(26).string(e.docString), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.ValueInfoProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.name = e.string();
							break;
						case 2:
							i.type = o.onnx.TypeProto.decode(e, e.uint32());
							break;
						case 3:
							i.docString = e.string();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.type != null && e.hasOwnProperty("type")) {
					var t = o.onnx.TypeProto.verify(e.type);
					if (t) return "type." + t;
				}
				return e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString) ? "docString: string expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.ValueInfoProto) return e;
				var t = new o.onnx.ValueInfoProto();
				if (e.name != null && (t.name = String(e.name)), e.type != null) {
					if (typeof e.type != "object") throw TypeError(".onnx.ValueInfoProto.type: object expected");
					t.type = o.onnx.TypeProto.fromObject(e.type);
				}
				return e.docString != null && (t.docString = String(e.docString)), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				return t.defaults && (n.name = "", n.type = null, n.docString = ""), e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.type != null && e.hasOwnProperty("type") && (n.type = o.onnx.TypeProto.toObject(e.type, t)), e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.ValueInfoProto";
			}, e;
		}(), e.NodeProto = function() {
			function e(e) {
				if (this.input = [], this.output = [], this.attribute = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.input = a.emptyArray, e.prototype.output = a.emptyArray, e.prototype.name = "", e.prototype.opType = "", e.prototype.domain = "", e.prototype.attribute = a.emptyArray, e.prototype.docString = "", e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.input != null && e.input.length) for (var n = 0; n < e.input.length; ++n) t.uint32(10).string(e.input[n]);
				if (e.output != null && e.output.length) for (var n = 0; n < e.output.length; ++n) t.uint32(18).string(e.output[n]);
				if (e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(26).string(e.name), e.opType != null && Object.hasOwnProperty.call(e, "opType") && t.uint32(34).string(e.opType), e.attribute != null && e.attribute.length) for (var n = 0; n < e.attribute.length; ++n) o.onnx.AttributeProto.encode(e.attribute[n], t.uint32(42).fork()).ldelim();
				return e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(50).string(e.docString), e.domain != null && Object.hasOwnProperty.call(e, "domain") && t.uint32(58).string(e.domain), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.NodeProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.input && i.input.length || (i.input = []), i.input.push(e.string());
							break;
						case 2:
							i.output && i.output.length || (i.output = []), i.output.push(e.string());
							break;
						case 3:
							i.name = e.string();
							break;
						case 4:
							i.opType = e.string();
							break;
						case 7:
							i.domain = e.string();
							break;
						case 5:
							i.attribute && i.attribute.length || (i.attribute = []), i.attribute.push(o.onnx.AttributeProto.decode(e, e.uint32()));
							break;
						case 6:
							i.docString = e.string();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.input != null && e.hasOwnProperty("input")) {
					if (!Array.isArray(e.input)) return "input: array expected";
					for (var t = 0; t < e.input.length; ++t) if (!a.isString(e.input[t])) return "input: string[] expected";
				}
				if (e.output != null && e.hasOwnProperty("output")) {
					if (!Array.isArray(e.output)) return "output: array expected";
					for (var t = 0; t < e.output.length; ++t) if (!a.isString(e.output[t])) return "output: string[] expected";
				}
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.opType != null && e.hasOwnProperty("opType") && !a.isString(e.opType)) return "opType: string expected";
				if (e.domain != null && e.hasOwnProperty("domain") && !a.isString(e.domain)) return "domain: string expected";
				if (e.attribute != null && e.hasOwnProperty("attribute")) {
					if (!Array.isArray(e.attribute)) return "attribute: array expected";
					for (var t = 0; t < e.attribute.length; ++t) {
						var n = o.onnx.AttributeProto.verify(e.attribute[t]);
						if (n) return "attribute." + n;
					}
				}
				return e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString) ? "docString: string expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.NodeProto) return e;
				var t = new o.onnx.NodeProto();
				if (e.input) {
					if (!Array.isArray(e.input)) throw TypeError(".onnx.NodeProto.input: array expected");
					t.input = [];
					for (var n = 0; n < e.input.length; ++n) t.input[n] = String(e.input[n]);
				}
				if (e.output) {
					if (!Array.isArray(e.output)) throw TypeError(".onnx.NodeProto.output: array expected");
					t.output = [];
					for (var n = 0; n < e.output.length; ++n) t.output[n] = String(e.output[n]);
				}
				if (e.name != null && (t.name = String(e.name)), e.opType != null && (t.opType = String(e.opType)), e.domain != null && (t.domain = String(e.domain)), e.attribute) {
					if (!Array.isArray(e.attribute)) throw TypeError(".onnx.NodeProto.attribute: array expected");
					t.attribute = [];
					for (var n = 0; n < e.attribute.length; ++n) {
						if (typeof e.attribute[n] != "object") throw TypeError(".onnx.NodeProto.attribute: object expected");
						t.attribute[n] = o.onnx.AttributeProto.fromObject(e.attribute[n]);
					}
				}
				return e.docString != null && (t.docString = String(e.docString)), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.input = [], n.output = [], n.attribute = []), t.defaults && (n.name = "", n.opType = "", n.docString = "", n.domain = ""), e.input && e.input.length) {
					n.input = [];
					for (var r = 0; r < e.input.length; ++r) n.input[r] = e.input[r];
				}
				if (e.output && e.output.length) {
					n.output = [];
					for (var r = 0; r < e.output.length; ++r) n.output[r] = e.output[r];
				}
				if (e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.opType != null && e.hasOwnProperty("opType") && (n.opType = e.opType), e.attribute && e.attribute.length) {
					n.attribute = [];
					for (var r = 0; r < e.attribute.length; ++r) n.attribute[r] = o.onnx.AttributeProto.toObject(e.attribute[r], t);
				}
				return e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.domain != null && e.hasOwnProperty("domain") && (n.domain = e.domain), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.NodeProto";
			}, e;
		}(), e.TrainingInfoProto = function() {
			function e(e) {
				if (this.initializationBinding = [], this.updateBinding = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.initialization = null, e.prototype.algorithm = null, e.prototype.initializationBinding = a.emptyArray, e.prototype.updateBinding = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.initialization != null && Object.hasOwnProperty.call(e, "initialization") && o.onnx.GraphProto.encode(e.initialization, t.uint32(10).fork()).ldelim(), e.algorithm != null && Object.hasOwnProperty.call(e, "algorithm") && o.onnx.GraphProto.encode(e.algorithm, t.uint32(18).fork()).ldelim(), e.initializationBinding != null && e.initializationBinding.length) for (var n = 0; n < e.initializationBinding.length; ++n) o.onnx.StringStringEntryProto.encode(e.initializationBinding[n], t.uint32(26).fork()).ldelim();
				if (e.updateBinding != null && e.updateBinding.length) for (var n = 0; n < e.updateBinding.length; ++n) o.onnx.StringStringEntryProto.encode(e.updateBinding[n], t.uint32(34).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TrainingInfoProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.initialization = o.onnx.GraphProto.decode(e, e.uint32());
							break;
						case 2:
							i.algorithm = o.onnx.GraphProto.decode(e, e.uint32());
							break;
						case 3:
							i.initializationBinding && i.initializationBinding.length || (i.initializationBinding = []), i.initializationBinding.push(o.onnx.StringStringEntryProto.decode(e, e.uint32()));
							break;
						case 4:
							i.updateBinding && i.updateBinding.length || (i.updateBinding = []), i.updateBinding.push(o.onnx.StringStringEntryProto.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.initialization != null && e.hasOwnProperty("initialization")) {
					var t = o.onnx.GraphProto.verify(e.initialization);
					if (t) return "initialization." + t;
				}
				if (e.algorithm != null && e.hasOwnProperty("algorithm")) {
					var t = o.onnx.GraphProto.verify(e.algorithm);
					if (t) return "algorithm." + t;
				}
				if (e.initializationBinding != null && e.hasOwnProperty("initializationBinding")) {
					if (!Array.isArray(e.initializationBinding)) return "initializationBinding: array expected";
					for (var n = 0; n < e.initializationBinding.length; ++n) {
						var t = o.onnx.StringStringEntryProto.verify(e.initializationBinding[n]);
						if (t) return "initializationBinding." + t;
					}
				}
				if (e.updateBinding != null && e.hasOwnProperty("updateBinding")) {
					if (!Array.isArray(e.updateBinding)) return "updateBinding: array expected";
					for (var n = 0; n < e.updateBinding.length; ++n) {
						var t = o.onnx.StringStringEntryProto.verify(e.updateBinding[n]);
						if (t) return "updateBinding." + t;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.TrainingInfoProto) return e;
				var t = new o.onnx.TrainingInfoProto();
				if (e.initialization != null) {
					if (typeof e.initialization != "object") throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");
					t.initialization = o.onnx.GraphProto.fromObject(e.initialization);
				}
				if (e.algorithm != null) {
					if (typeof e.algorithm != "object") throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");
					t.algorithm = o.onnx.GraphProto.fromObject(e.algorithm);
				}
				if (e.initializationBinding) {
					if (!Array.isArray(e.initializationBinding)) throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");
					t.initializationBinding = [];
					for (var n = 0; n < e.initializationBinding.length; ++n) {
						if (typeof e.initializationBinding[n] != "object") throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");
						t.initializationBinding[n] = o.onnx.StringStringEntryProto.fromObject(e.initializationBinding[n]);
					}
				}
				if (e.updateBinding) {
					if (!Array.isArray(e.updateBinding)) throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");
					t.updateBinding = [];
					for (var n = 0; n < e.updateBinding.length; ++n) {
						if (typeof e.updateBinding[n] != "object") throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");
						t.updateBinding[n] = o.onnx.StringStringEntryProto.fromObject(e.updateBinding[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.initializationBinding = [], n.updateBinding = []), t.defaults && (n.initialization = null, n.algorithm = null), e.initialization != null && e.hasOwnProperty("initialization") && (n.initialization = o.onnx.GraphProto.toObject(e.initialization, t)), e.algorithm != null && e.hasOwnProperty("algorithm") && (n.algorithm = o.onnx.GraphProto.toObject(e.algorithm, t)), e.initializationBinding && e.initializationBinding.length) {
					n.initializationBinding = [];
					for (var r = 0; r < e.initializationBinding.length; ++r) n.initializationBinding[r] = o.onnx.StringStringEntryProto.toObject(e.initializationBinding[r], t);
				}
				if (e.updateBinding && e.updateBinding.length) {
					n.updateBinding = [];
					for (var r = 0; r < e.updateBinding.length; ++r) n.updateBinding[r] = o.onnx.StringStringEntryProto.toObject(e.updateBinding[r], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TrainingInfoProto";
			}, e;
		}(), e.ModelProto = function() {
			function e(e) {
				if (this.opsetImport = [], this.metadataProps = [], this.trainingInfo = [], this.functions = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.irVersion = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.opsetImport = a.emptyArray, e.prototype.producerName = "", e.prototype.producerVersion = "", e.prototype.domain = "", e.prototype.modelVersion = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.docString = "", e.prototype.graph = null, e.prototype.metadataProps = a.emptyArray, e.prototype.trainingInfo = a.emptyArray, e.prototype.functions = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.irVersion != null && Object.hasOwnProperty.call(e, "irVersion") && t.uint32(8).int64(e.irVersion), e.producerName != null && Object.hasOwnProperty.call(e, "producerName") && t.uint32(18).string(e.producerName), e.producerVersion != null && Object.hasOwnProperty.call(e, "producerVersion") && t.uint32(26).string(e.producerVersion), e.domain != null && Object.hasOwnProperty.call(e, "domain") && t.uint32(34).string(e.domain), e.modelVersion != null && Object.hasOwnProperty.call(e, "modelVersion") && t.uint32(40).int64(e.modelVersion), e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(50).string(e.docString), e.graph != null && Object.hasOwnProperty.call(e, "graph") && o.onnx.GraphProto.encode(e.graph, t.uint32(58).fork()).ldelim(), e.opsetImport != null && e.opsetImport.length) for (var n = 0; n < e.opsetImport.length; ++n) o.onnx.OperatorSetIdProto.encode(e.opsetImport[n], t.uint32(66).fork()).ldelim();
				if (e.metadataProps != null && e.metadataProps.length) for (var n = 0; n < e.metadataProps.length; ++n) o.onnx.StringStringEntryProto.encode(e.metadataProps[n], t.uint32(114).fork()).ldelim();
				if (e.trainingInfo != null && e.trainingInfo.length) for (var n = 0; n < e.trainingInfo.length; ++n) o.onnx.TrainingInfoProto.encode(e.trainingInfo[n], t.uint32(162).fork()).ldelim();
				if (e.functions != null && e.functions.length) for (var n = 0; n < e.functions.length; ++n) o.onnx.FunctionProto.encode(e.functions[n], t.uint32(202).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.ModelProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.irVersion = e.int64();
							break;
						case 8:
							i.opsetImport && i.opsetImport.length || (i.opsetImport = []), i.opsetImport.push(o.onnx.OperatorSetIdProto.decode(e, e.uint32()));
							break;
						case 2:
							i.producerName = e.string();
							break;
						case 3:
							i.producerVersion = e.string();
							break;
						case 4:
							i.domain = e.string();
							break;
						case 5:
							i.modelVersion = e.int64();
							break;
						case 6:
							i.docString = e.string();
							break;
						case 7:
							i.graph = o.onnx.GraphProto.decode(e, e.uint32());
							break;
						case 14:
							i.metadataProps && i.metadataProps.length || (i.metadataProps = []), i.metadataProps.push(o.onnx.StringStringEntryProto.decode(e, e.uint32()));
							break;
						case 20:
							i.trainingInfo && i.trainingInfo.length || (i.trainingInfo = []), i.trainingInfo.push(o.onnx.TrainingInfoProto.decode(e, e.uint32()));
							break;
						case 25:
							i.functions && i.functions.length || (i.functions = []), i.functions.push(o.onnx.FunctionProto.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.irVersion != null && e.hasOwnProperty("irVersion") && !a.isInteger(e.irVersion) && !(e.irVersion && a.isInteger(e.irVersion.low) && a.isInteger(e.irVersion.high))) return "irVersion: integer|Long expected";
				if (e.opsetImport != null && e.hasOwnProperty("opsetImport")) {
					if (!Array.isArray(e.opsetImport)) return "opsetImport: array expected";
					for (var t = 0; t < e.opsetImport.length; ++t) {
						var n = o.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);
						if (n) return "opsetImport." + n;
					}
				}
				if (e.producerName != null && e.hasOwnProperty("producerName") && !a.isString(e.producerName)) return "producerName: string expected";
				if (e.producerVersion != null && e.hasOwnProperty("producerVersion") && !a.isString(e.producerVersion)) return "producerVersion: string expected";
				if (e.domain != null && e.hasOwnProperty("domain") && !a.isString(e.domain)) return "domain: string expected";
				if (e.modelVersion != null && e.hasOwnProperty("modelVersion") && !a.isInteger(e.modelVersion) && !(e.modelVersion && a.isInteger(e.modelVersion.low) && a.isInteger(e.modelVersion.high))) return "modelVersion: integer|Long expected";
				if (e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString)) return "docString: string expected";
				if (e.graph != null && e.hasOwnProperty("graph")) {
					var n = o.onnx.GraphProto.verify(e.graph);
					if (n) return "graph." + n;
				}
				if (e.metadataProps != null && e.hasOwnProperty("metadataProps")) {
					if (!Array.isArray(e.metadataProps)) return "metadataProps: array expected";
					for (var t = 0; t < e.metadataProps.length; ++t) {
						var n = o.onnx.StringStringEntryProto.verify(e.metadataProps[t]);
						if (n) return "metadataProps." + n;
					}
				}
				if (e.trainingInfo != null && e.hasOwnProperty("trainingInfo")) {
					if (!Array.isArray(e.trainingInfo)) return "trainingInfo: array expected";
					for (var t = 0; t < e.trainingInfo.length; ++t) {
						var n = o.onnx.TrainingInfoProto.verify(e.trainingInfo[t]);
						if (n) return "trainingInfo." + n;
					}
				}
				if (e.functions != null && e.hasOwnProperty("functions")) {
					if (!Array.isArray(e.functions)) return "functions: array expected";
					for (var t = 0; t < e.functions.length; ++t) {
						var n = o.onnx.FunctionProto.verify(e.functions[t]);
						if (n) return "functions." + n;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.ModelProto) return e;
				var t = new o.onnx.ModelProto();
				if (e.irVersion != null && (a.Long ? (t.irVersion = a.Long.fromValue(e.irVersion)).unsigned = !1 : typeof e.irVersion == "string" ? t.irVersion = parseInt(e.irVersion, 10) : typeof e.irVersion == "number" ? t.irVersion = e.irVersion : typeof e.irVersion == "object" && (t.irVersion = new a.LongBits(e.irVersion.low >>> 0, e.irVersion.high >>> 0).toNumber())), e.opsetImport) {
					if (!Array.isArray(e.opsetImport)) throw TypeError(".onnx.ModelProto.opsetImport: array expected");
					t.opsetImport = [];
					for (var n = 0; n < e.opsetImport.length; ++n) {
						if (typeof e.opsetImport[n] != "object") throw TypeError(".onnx.ModelProto.opsetImport: object expected");
						t.opsetImport[n] = o.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n]);
					}
				}
				if (e.producerName != null && (t.producerName = String(e.producerName)), e.producerVersion != null && (t.producerVersion = String(e.producerVersion)), e.domain != null && (t.domain = String(e.domain)), e.modelVersion != null && (a.Long ? (t.modelVersion = a.Long.fromValue(e.modelVersion)).unsigned = !1 : typeof e.modelVersion == "string" ? t.modelVersion = parseInt(e.modelVersion, 10) : typeof e.modelVersion == "number" ? t.modelVersion = e.modelVersion : typeof e.modelVersion == "object" && (t.modelVersion = new a.LongBits(e.modelVersion.low >>> 0, e.modelVersion.high >>> 0).toNumber())), e.docString != null && (t.docString = String(e.docString)), e.graph != null) {
					if (typeof e.graph != "object") throw TypeError(".onnx.ModelProto.graph: object expected");
					t.graph = o.onnx.GraphProto.fromObject(e.graph);
				}
				if (e.metadataProps) {
					if (!Array.isArray(e.metadataProps)) throw TypeError(".onnx.ModelProto.metadataProps: array expected");
					t.metadataProps = [];
					for (var n = 0; n < e.metadataProps.length; ++n) {
						if (typeof e.metadataProps[n] != "object") throw TypeError(".onnx.ModelProto.metadataProps: object expected");
						t.metadataProps[n] = o.onnx.StringStringEntryProto.fromObject(e.metadataProps[n]);
					}
				}
				if (e.trainingInfo) {
					if (!Array.isArray(e.trainingInfo)) throw TypeError(".onnx.ModelProto.trainingInfo: array expected");
					t.trainingInfo = [];
					for (var n = 0; n < e.trainingInfo.length; ++n) {
						if (typeof e.trainingInfo[n] != "object") throw TypeError(".onnx.ModelProto.trainingInfo: object expected");
						t.trainingInfo[n] = o.onnx.TrainingInfoProto.fromObject(e.trainingInfo[n]);
					}
				}
				if (e.functions) {
					if (!Array.isArray(e.functions)) throw TypeError(".onnx.ModelProto.functions: array expected");
					t.functions = [];
					for (var n = 0; n < e.functions.length; ++n) {
						if (typeof e.functions[n] != "object") throw TypeError(".onnx.ModelProto.functions: object expected");
						t.functions[n] = o.onnx.FunctionProto.fromObject(e.functions[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.opsetImport = [], n.metadataProps = [], n.trainingInfo = [], n.functions = []), t.defaults) {
					if (a.Long) {
						var r = new a.Long(0, 0, !1);
						n.irVersion = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
					} else n.irVersion = t.longs === String ? "0" : 0;
					if (n.producerName = "", n.producerVersion = "", n.domain = "", a.Long) {
						var r = new a.Long(0, 0, !1);
						n.modelVersion = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
					} else n.modelVersion = t.longs === String ? "0" : 0;
					n.docString = "", n.graph = null;
				}
				if (e.irVersion != null && e.hasOwnProperty("irVersion") && (typeof e.irVersion == "number" ? n.irVersion = t.longs === String ? String(e.irVersion) : e.irVersion : n.irVersion = t.longs === String ? a.Long.prototype.toString.call(e.irVersion) : t.longs === Number ? new a.LongBits(e.irVersion.low >>> 0, e.irVersion.high >>> 0).toNumber() : e.irVersion), e.producerName != null && e.hasOwnProperty("producerName") && (n.producerName = e.producerName), e.producerVersion != null && e.hasOwnProperty("producerVersion") && (n.producerVersion = e.producerVersion), e.domain != null && e.hasOwnProperty("domain") && (n.domain = e.domain), e.modelVersion != null && e.hasOwnProperty("modelVersion") && (typeof e.modelVersion == "number" ? n.modelVersion = t.longs === String ? String(e.modelVersion) : e.modelVersion : n.modelVersion = t.longs === String ? a.Long.prototype.toString.call(e.modelVersion) : t.longs === Number ? new a.LongBits(e.modelVersion.low >>> 0, e.modelVersion.high >>> 0).toNumber() : e.modelVersion), e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.graph != null && e.hasOwnProperty("graph") && (n.graph = o.onnx.GraphProto.toObject(e.graph, t)), e.opsetImport && e.opsetImport.length) {
					n.opsetImport = [];
					for (var i = 0; i < e.opsetImport.length; ++i) n.opsetImport[i] = o.onnx.OperatorSetIdProto.toObject(e.opsetImport[i], t);
				}
				if (e.metadataProps && e.metadataProps.length) {
					n.metadataProps = [];
					for (var i = 0; i < e.metadataProps.length; ++i) n.metadataProps[i] = o.onnx.StringStringEntryProto.toObject(e.metadataProps[i], t);
				}
				if (e.trainingInfo && e.trainingInfo.length) {
					n.trainingInfo = [];
					for (var i = 0; i < e.trainingInfo.length; ++i) n.trainingInfo[i] = o.onnx.TrainingInfoProto.toObject(e.trainingInfo[i], t);
				}
				if (e.functions && e.functions.length) {
					n.functions = [];
					for (var i = 0; i < e.functions.length; ++i) n.functions[i] = o.onnx.FunctionProto.toObject(e.functions[i], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.ModelProto";
			}, e;
		}(), e.StringStringEntryProto = function() {
			function e(e) {
				if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.key = "", e.prototype.value = "", e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				return t ||= i.create(), e.key != null && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), e.value != null && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.StringStringEntryProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.key = e.string();
							break;
						case 2:
							i.value = e.string();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				return typeof e != "object" || !e ? "object expected" : e.key != null && e.hasOwnProperty("key") && !a.isString(e.key) ? "key: string expected" : e.value != null && e.hasOwnProperty("value") && !a.isString(e.value) ? "value: string expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.StringStringEntryProto) return e;
				var t = new o.onnx.StringStringEntryProto();
				return e.key != null && (t.key = String(e.key)), e.value != null && (t.value = String(e.value)), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				return t.defaults && (n.key = "", n.value = ""), e.key != null && e.hasOwnProperty("key") && (n.key = e.key), e.value != null && e.hasOwnProperty("value") && (n.value = e.value), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.StringStringEntryProto";
			}, e;
		}(), e.TensorAnnotation = function() {
			function e(e) {
				if (this.quantParameterTensorNames = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.tensorName = "", e.prototype.quantParameterTensorNames = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.tensorName != null && Object.hasOwnProperty.call(e, "tensorName") && t.uint32(10).string(e.tensorName), e.quantParameterTensorNames != null && e.quantParameterTensorNames.length) for (var n = 0; n < e.quantParameterTensorNames.length; ++n) o.onnx.StringStringEntryProto.encode(e.quantParameterTensorNames[n], t.uint32(18).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TensorAnnotation(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.tensorName = e.string();
							break;
						case 2:
							i.quantParameterTensorNames && i.quantParameterTensorNames.length || (i.quantParameterTensorNames = []), i.quantParameterTensorNames.push(o.onnx.StringStringEntryProto.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.tensorName != null && e.hasOwnProperty("tensorName") && !a.isString(e.tensorName)) return "tensorName: string expected";
				if (e.quantParameterTensorNames != null && e.hasOwnProperty("quantParameterTensorNames")) {
					if (!Array.isArray(e.quantParameterTensorNames)) return "quantParameterTensorNames: array expected";
					for (var t = 0; t < e.quantParameterTensorNames.length; ++t) {
						var n = o.onnx.StringStringEntryProto.verify(e.quantParameterTensorNames[t]);
						if (n) return "quantParameterTensorNames." + n;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.TensorAnnotation) return e;
				var t = new o.onnx.TensorAnnotation();
				if (e.tensorName != null && (t.tensorName = String(e.tensorName)), e.quantParameterTensorNames) {
					if (!Array.isArray(e.quantParameterTensorNames)) throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");
					t.quantParameterTensorNames = [];
					for (var n = 0; n < e.quantParameterTensorNames.length; ++n) {
						if (typeof e.quantParameterTensorNames[n] != "object") throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");
						t.quantParameterTensorNames[n] = o.onnx.StringStringEntryProto.fromObject(e.quantParameterTensorNames[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.quantParameterTensorNames = []), t.defaults && (n.tensorName = ""), e.tensorName != null && e.hasOwnProperty("tensorName") && (n.tensorName = e.tensorName), e.quantParameterTensorNames && e.quantParameterTensorNames.length) {
					n.quantParameterTensorNames = [];
					for (var r = 0; r < e.quantParameterTensorNames.length; ++r) n.quantParameterTensorNames[r] = o.onnx.StringStringEntryProto.toObject(e.quantParameterTensorNames[r], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TensorAnnotation";
			}, e;
		}(), e.GraphProto = function() {
			function e(e) {
				if (this.node = [], this.initializer = [], this.sparseInitializer = [], this.input = [], this.output = [], this.valueInfo = [], this.quantizationAnnotation = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.node = a.emptyArray, e.prototype.name = "", e.prototype.initializer = a.emptyArray, e.prototype.sparseInitializer = a.emptyArray, e.prototype.docString = "", e.prototype.input = a.emptyArray, e.prototype.output = a.emptyArray, e.prototype.valueInfo = a.emptyArray, e.prototype.quantizationAnnotation = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.node != null && e.node.length) for (var n = 0; n < e.node.length; ++n) o.onnx.NodeProto.encode(e.node[n], t.uint32(10).fork()).ldelim();
				if (e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(18).string(e.name), e.initializer != null && e.initializer.length) for (var n = 0; n < e.initializer.length; ++n) o.onnx.TensorProto.encode(e.initializer[n], t.uint32(42).fork()).ldelim();
				if (e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(82).string(e.docString), e.input != null && e.input.length) for (var n = 0; n < e.input.length; ++n) o.onnx.ValueInfoProto.encode(e.input[n], t.uint32(90).fork()).ldelim();
				if (e.output != null && e.output.length) for (var n = 0; n < e.output.length; ++n) o.onnx.ValueInfoProto.encode(e.output[n], t.uint32(98).fork()).ldelim();
				if (e.valueInfo != null && e.valueInfo.length) for (var n = 0; n < e.valueInfo.length; ++n) o.onnx.ValueInfoProto.encode(e.valueInfo[n], t.uint32(106).fork()).ldelim();
				if (e.quantizationAnnotation != null && e.quantizationAnnotation.length) for (var n = 0; n < e.quantizationAnnotation.length; ++n) o.onnx.TensorAnnotation.encode(e.quantizationAnnotation[n], t.uint32(114).fork()).ldelim();
				if (e.sparseInitializer != null && e.sparseInitializer.length) for (var n = 0; n < e.sparseInitializer.length; ++n) o.onnx.SparseTensorProto.encode(e.sparseInitializer[n], t.uint32(122).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.GraphProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.node && i.node.length || (i.node = []), i.node.push(o.onnx.NodeProto.decode(e, e.uint32()));
							break;
						case 2:
							i.name = e.string();
							break;
						case 5:
							i.initializer && i.initializer.length || (i.initializer = []), i.initializer.push(o.onnx.TensorProto.decode(e, e.uint32()));
							break;
						case 15:
							i.sparseInitializer && i.sparseInitializer.length || (i.sparseInitializer = []), i.sparseInitializer.push(o.onnx.SparseTensorProto.decode(e, e.uint32()));
							break;
						case 10:
							i.docString = e.string();
							break;
						case 11:
							i.input && i.input.length || (i.input = []), i.input.push(o.onnx.ValueInfoProto.decode(e, e.uint32()));
							break;
						case 12:
							i.output && i.output.length || (i.output = []), i.output.push(o.onnx.ValueInfoProto.decode(e, e.uint32()));
							break;
						case 13:
							i.valueInfo && i.valueInfo.length || (i.valueInfo = []), i.valueInfo.push(o.onnx.ValueInfoProto.decode(e, e.uint32()));
							break;
						case 14:
							i.quantizationAnnotation && i.quantizationAnnotation.length || (i.quantizationAnnotation = []), i.quantizationAnnotation.push(o.onnx.TensorAnnotation.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.node != null && e.hasOwnProperty("node")) {
					if (!Array.isArray(e.node)) return "node: array expected";
					for (var t = 0; t < e.node.length; ++t) {
						var n = o.onnx.NodeProto.verify(e.node[t]);
						if (n) return "node." + n;
					}
				}
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.initializer != null && e.hasOwnProperty("initializer")) {
					if (!Array.isArray(e.initializer)) return "initializer: array expected";
					for (var t = 0; t < e.initializer.length; ++t) {
						var n = o.onnx.TensorProto.verify(e.initializer[t]);
						if (n) return "initializer." + n;
					}
				}
				if (e.sparseInitializer != null && e.hasOwnProperty("sparseInitializer")) {
					if (!Array.isArray(e.sparseInitializer)) return "sparseInitializer: array expected";
					for (var t = 0; t < e.sparseInitializer.length; ++t) {
						var n = o.onnx.SparseTensorProto.verify(e.sparseInitializer[t]);
						if (n) return "sparseInitializer." + n;
					}
				}
				if (e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString)) return "docString: string expected";
				if (e.input != null && e.hasOwnProperty("input")) {
					if (!Array.isArray(e.input)) return "input: array expected";
					for (var t = 0; t < e.input.length; ++t) {
						var n = o.onnx.ValueInfoProto.verify(e.input[t]);
						if (n) return "input." + n;
					}
				}
				if (e.output != null && e.hasOwnProperty("output")) {
					if (!Array.isArray(e.output)) return "output: array expected";
					for (var t = 0; t < e.output.length; ++t) {
						var n = o.onnx.ValueInfoProto.verify(e.output[t]);
						if (n) return "output." + n;
					}
				}
				if (e.valueInfo != null && e.hasOwnProperty("valueInfo")) {
					if (!Array.isArray(e.valueInfo)) return "valueInfo: array expected";
					for (var t = 0; t < e.valueInfo.length; ++t) {
						var n = o.onnx.ValueInfoProto.verify(e.valueInfo[t]);
						if (n) return "valueInfo." + n;
					}
				}
				if (e.quantizationAnnotation != null && e.hasOwnProperty("quantizationAnnotation")) {
					if (!Array.isArray(e.quantizationAnnotation)) return "quantizationAnnotation: array expected";
					for (var t = 0; t < e.quantizationAnnotation.length; ++t) {
						var n = o.onnx.TensorAnnotation.verify(e.quantizationAnnotation[t]);
						if (n) return "quantizationAnnotation." + n;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.GraphProto) return e;
				var t = new o.onnx.GraphProto();
				if (e.node) {
					if (!Array.isArray(e.node)) throw TypeError(".onnx.GraphProto.node: array expected");
					t.node = [];
					for (var n = 0; n < e.node.length; ++n) {
						if (typeof e.node[n] != "object") throw TypeError(".onnx.GraphProto.node: object expected");
						t.node[n] = o.onnx.NodeProto.fromObject(e.node[n]);
					}
				}
				if (e.name != null && (t.name = String(e.name)), e.initializer) {
					if (!Array.isArray(e.initializer)) throw TypeError(".onnx.GraphProto.initializer: array expected");
					t.initializer = [];
					for (var n = 0; n < e.initializer.length; ++n) {
						if (typeof e.initializer[n] != "object") throw TypeError(".onnx.GraphProto.initializer: object expected");
						t.initializer[n] = o.onnx.TensorProto.fromObject(e.initializer[n]);
					}
				}
				if (e.sparseInitializer) {
					if (!Array.isArray(e.sparseInitializer)) throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");
					t.sparseInitializer = [];
					for (var n = 0; n < e.sparseInitializer.length; ++n) {
						if (typeof e.sparseInitializer[n] != "object") throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");
						t.sparseInitializer[n] = o.onnx.SparseTensorProto.fromObject(e.sparseInitializer[n]);
					}
				}
				if (e.docString != null && (t.docString = String(e.docString)), e.input) {
					if (!Array.isArray(e.input)) throw TypeError(".onnx.GraphProto.input: array expected");
					t.input = [];
					for (var n = 0; n < e.input.length; ++n) {
						if (typeof e.input[n] != "object") throw TypeError(".onnx.GraphProto.input: object expected");
						t.input[n] = o.onnx.ValueInfoProto.fromObject(e.input[n]);
					}
				}
				if (e.output) {
					if (!Array.isArray(e.output)) throw TypeError(".onnx.GraphProto.output: array expected");
					t.output = [];
					for (var n = 0; n < e.output.length; ++n) {
						if (typeof e.output[n] != "object") throw TypeError(".onnx.GraphProto.output: object expected");
						t.output[n] = o.onnx.ValueInfoProto.fromObject(e.output[n]);
					}
				}
				if (e.valueInfo) {
					if (!Array.isArray(e.valueInfo)) throw TypeError(".onnx.GraphProto.valueInfo: array expected");
					t.valueInfo = [];
					for (var n = 0; n < e.valueInfo.length; ++n) {
						if (typeof e.valueInfo[n] != "object") throw TypeError(".onnx.GraphProto.valueInfo: object expected");
						t.valueInfo[n] = o.onnx.ValueInfoProto.fromObject(e.valueInfo[n]);
					}
				}
				if (e.quantizationAnnotation) {
					if (!Array.isArray(e.quantizationAnnotation)) throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");
					t.quantizationAnnotation = [];
					for (var n = 0; n < e.quantizationAnnotation.length; ++n) {
						if (typeof e.quantizationAnnotation[n] != "object") throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");
						t.quantizationAnnotation[n] = o.onnx.TensorAnnotation.fromObject(e.quantizationAnnotation[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.node = [], n.initializer = [], n.input = [], n.output = [], n.valueInfo = [], n.quantizationAnnotation = [], n.sparseInitializer = []), t.defaults && (n.name = "", n.docString = ""), e.node && e.node.length) {
					n.node = [];
					for (var r = 0; r < e.node.length; ++r) n.node[r] = o.onnx.NodeProto.toObject(e.node[r], t);
				}
				if (e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.initializer && e.initializer.length) {
					n.initializer = [];
					for (var r = 0; r < e.initializer.length; ++r) n.initializer[r] = o.onnx.TensorProto.toObject(e.initializer[r], t);
				}
				if (e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.input && e.input.length) {
					n.input = [];
					for (var r = 0; r < e.input.length; ++r) n.input[r] = o.onnx.ValueInfoProto.toObject(e.input[r], t);
				}
				if (e.output && e.output.length) {
					n.output = [];
					for (var r = 0; r < e.output.length; ++r) n.output[r] = o.onnx.ValueInfoProto.toObject(e.output[r], t);
				}
				if (e.valueInfo && e.valueInfo.length) {
					n.valueInfo = [];
					for (var r = 0; r < e.valueInfo.length; ++r) n.valueInfo[r] = o.onnx.ValueInfoProto.toObject(e.valueInfo[r], t);
				}
				if (e.quantizationAnnotation && e.quantizationAnnotation.length) {
					n.quantizationAnnotation = [];
					for (var r = 0; r < e.quantizationAnnotation.length; ++r) n.quantizationAnnotation[r] = o.onnx.TensorAnnotation.toObject(e.quantizationAnnotation[r], t);
				}
				if (e.sparseInitializer && e.sparseInitializer.length) {
					n.sparseInitializer = [];
					for (var r = 0; r < e.sparseInitializer.length; ++r) n.sparseInitializer[r] = o.onnx.SparseTensorProto.toObject(e.sparseInitializer[r], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.GraphProto";
			}, e;
		}(), e.TensorProto = function() {
			function e(e) {
				if (this.dims = [], this.floatData = [], this.int32Data = [], this.stringData = [], this.int64Data = [], this.externalData = [], this.doubleData = [], this.uint64Data = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.dims = a.emptyArray, e.prototype.dataType = 0, e.prototype.segment = null, e.prototype.floatData = a.emptyArray, e.prototype.int32Data = a.emptyArray, e.prototype.stringData = a.emptyArray, e.prototype.int64Data = a.emptyArray, e.prototype.name = "", e.prototype.docString = "", e.prototype.rawData = a.newBuffer([]), e.prototype.externalData = a.emptyArray, e.prototype.dataLocation = 0, e.prototype.doubleData = a.emptyArray, e.prototype.uint64Data = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.dims != null && e.dims.length) {
					t.uint32(10).fork();
					for (var n = 0; n < e.dims.length; ++n) t.int64(e.dims[n]);
					t.ldelim();
				}
				if (e.dataType != null && Object.hasOwnProperty.call(e, "dataType") && t.uint32(16).int32(e.dataType), e.segment != null && Object.hasOwnProperty.call(e, "segment") && o.onnx.TensorProto.Segment.encode(e.segment, t.uint32(26).fork()).ldelim(), e.floatData != null && e.floatData.length) {
					t.uint32(34).fork();
					for (var n = 0; n < e.floatData.length; ++n) t.float(e.floatData[n]);
					t.ldelim();
				}
				if (e.int32Data != null && e.int32Data.length) {
					t.uint32(42).fork();
					for (var n = 0; n < e.int32Data.length; ++n) t.int32(e.int32Data[n]);
					t.ldelim();
				}
				if (e.stringData != null && e.stringData.length) for (var n = 0; n < e.stringData.length; ++n) t.uint32(50).bytes(e.stringData[n]);
				if (e.int64Data != null && e.int64Data.length) {
					t.uint32(58).fork();
					for (var n = 0; n < e.int64Data.length; ++n) t.int64(e.int64Data[n]);
					t.ldelim();
				}
				if (e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(66).string(e.name), e.rawData != null && Object.hasOwnProperty.call(e, "rawData") && t.uint32(74).bytes(e.rawData), e.doubleData != null && e.doubleData.length) {
					t.uint32(82).fork();
					for (var n = 0; n < e.doubleData.length; ++n) t.double(e.doubleData[n]);
					t.ldelim();
				}
				if (e.uint64Data != null && e.uint64Data.length) {
					t.uint32(90).fork();
					for (var n = 0; n < e.uint64Data.length; ++n) t.uint64(e.uint64Data[n]);
					t.ldelim();
				}
				if (e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(98).string(e.docString), e.externalData != null && e.externalData.length) for (var n = 0; n < e.externalData.length; ++n) o.onnx.StringStringEntryProto.encode(e.externalData[n], t.uint32(106).fork()).ldelim();
				return e.dataLocation != null && Object.hasOwnProperty.call(e, "dataLocation") && t.uint32(112).int32(e.dataLocation), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TensorProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							if (i.dims && i.dims.length || (i.dims = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.dims.push(e.int64());
							else i.dims.push(e.int64());
							break;
						case 2:
							i.dataType = e.int32();
							break;
						case 3:
							i.segment = o.onnx.TensorProto.Segment.decode(e, e.uint32());
							break;
						case 4:
							if (i.floatData && i.floatData.length || (i.floatData = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.floatData.push(e.float());
							else i.floatData.push(e.float());
							break;
						case 5:
							if (i.int32Data && i.int32Data.length || (i.int32Data = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.int32Data.push(e.int32());
							else i.int32Data.push(e.int32());
							break;
						case 6:
							i.stringData && i.stringData.length || (i.stringData = []), i.stringData.push(e.bytes());
							break;
						case 7:
							if (i.int64Data && i.int64Data.length || (i.int64Data = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.int64Data.push(e.int64());
							else i.int64Data.push(e.int64());
							break;
						case 8:
							i.name = e.string();
							break;
						case 12:
							i.docString = e.string();
							break;
						case 9:
							i.rawData = e.bytes();
							break;
						case 13:
							i.externalData && i.externalData.length || (i.externalData = []), i.externalData.push(o.onnx.StringStringEntryProto.decode(e, e.uint32()));
							break;
						case 14:
							i.dataLocation = e.int32();
							break;
						case 10:
							if (i.doubleData && i.doubleData.length || (i.doubleData = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.doubleData.push(e.double());
							else i.doubleData.push(e.double());
							break;
						case 11:
							if (i.uint64Data && i.uint64Data.length || (i.uint64Data = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.uint64Data.push(e.uint64());
							else i.uint64Data.push(e.uint64());
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.dims != null && e.hasOwnProperty("dims")) {
					if (!Array.isArray(e.dims)) return "dims: array expected";
					for (var t = 0; t < e.dims.length; ++t) if (!a.isInteger(e.dims[t]) && !(e.dims[t] && a.isInteger(e.dims[t].low) && a.isInteger(e.dims[t].high))) return "dims: integer|Long[] expected";
				}
				if (e.dataType != null && e.hasOwnProperty("dataType") && !a.isInteger(e.dataType)) return "dataType: integer expected";
				if (e.segment != null && e.hasOwnProperty("segment")) {
					var n = o.onnx.TensorProto.Segment.verify(e.segment);
					if (n) return "segment." + n;
				}
				if (e.floatData != null && e.hasOwnProperty("floatData")) {
					if (!Array.isArray(e.floatData)) return "floatData: array expected";
					for (var t = 0; t < e.floatData.length; ++t) if (typeof e.floatData[t] != "number") return "floatData: number[] expected";
				}
				if (e.int32Data != null && e.hasOwnProperty("int32Data")) {
					if (!Array.isArray(e.int32Data)) return "int32Data: array expected";
					for (var t = 0; t < e.int32Data.length; ++t) if (!a.isInteger(e.int32Data[t])) return "int32Data: integer[] expected";
				}
				if (e.stringData != null && e.hasOwnProperty("stringData")) {
					if (!Array.isArray(e.stringData)) return "stringData: array expected";
					for (var t = 0; t < e.stringData.length; ++t) if (!(e.stringData[t] && typeof e.stringData[t].length == "number" || a.isString(e.stringData[t]))) return "stringData: buffer[] expected";
				}
				if (e.int64Data != null && e.hasOwnProperty("int64Data")) {
					if (!Array.isArray(e.int64Data)) return "int64Data: array expected";
					for (var t = 0; t < e.int64Data.length; ++t) if (!a.isInteger(e.int64Data[t]) && !(e.int64Data[t] && a.isInteger(e.int64Data[t].low) && a.isInteger(e.int64Data[t].high))) return "int64Data: integer|Long[] expected";
				}
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString)) return "docString: string expected";
				if (e.rawData != null && e.hasOwnProperty("rawData") && !(e.rawData && typeof e.rawData.length == "number" || a.isString(e.rawData))) return "rawData: buffer expected";
				if (e.externalData != null && e.hasOwnProperty("externalData")) {
					if (!Array.isArray(e.externalData)) return "externalData: array expected";
					for (var t = 0; t < e.externalData.length; ++t) {
						var n = o.onnx.StringStringEntryProto.verify(e.externalData[t]);
						if (n) return "externalData." + n;
					}
				}
				if (e.dataLocation != null && e.hasOwnProperty("dataLocation")) switch (e.dataLocation) {
					default: return "dataLocation: enum value expected";
					case 0:
					case 1: break;
				}
				if (e.doubleData != null && e.hasOwnProperty("doubleData")) {
					if (!Array.isArray(e.doubleData)) return "doubleData: array expected";
					for (var t = 0; t < e.doubleData.length; ++t) if (typeof e.doubleData[t] != "number") return "doubleData: number[] expected";
				}
				if (e.uint64Data != null && e.hasOwnProperty("uint64Data")) {
					if (!Array.isArray(e.uint64Data)) return "uint64Data: array expected";
					for (var t = 0; t < e.uint64Data.length; ++t) if (!a.isInteger(e.uint64Data[t]) && !(e.uint64Data[t] && a.isInteger(e.uint64Data[t].low) && a.isInteger(e.uint64Data[t].high))) return "uint64Data: integer|Long[] expected";
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.TensorProto) return e;
				var t = new o.onnx.TensorProto();
				if (e.dims) {
					if (!Array.isArray(e.dims)) throw TypeError(".onnx.TensorProto.dims: array expected");
					t.dims = [];
					for (var n = 0; n < e.dims.length; ++n) a.Long ? (t.dims[n] = a.Long.fromValue(e.dims[n])).unsigned = !1 : typeof e.dims[n] == "string" ? t.dims[n] = parseInt(e.dims[n], 10) : typeof e.dims[n] == "number" ? t.dims[n] = e.dims[n] : typeof e.dims[n] == "object" && (t.dims[n] = new a.LongBits(e.dims[n].low >>> 0, e.dims[n].high >>> 0).toNumber());
				}
				if (e.dataType != null && (t.dataType = e.dataType | 0), e.segment != null) {
					if (typeof e.segment != "object") throw TypeError(".onnx.TensorProto.segment: object expected");
					t.segment = o.onnx.TensorProto.Segment.fromObject(e.segment);
				}
				if (e.floatData) {
					if (!Array.isArray(e.floatData)) throw TypeError(".onnx.TensorProto.floatData: array expected");
					t.floatData = [];
					for (var n = 0; n < e.floatData.length; ++n) t.floatData[n] = Number(e.floatData[n]);
				}
				if (e.int32Data) {
					if (!Array.isArray(e.int32Data)) throw TypeError(".onnx.TensorProto.int32Data: array expected");
					t.int32Data = [];
					for (var n = 0; n < e.int32Data.length; ++n) t.int32Data[n] = e.int32Data[n] | 0;
				}
				if (e.stringData) {
					if (!Array.isArray(e.stringData)) throw TypeError(".onnx.TensorProto.stringData: array expected");
					t.stringData = [];
					for (var n = 0; n < e.stringData.length; ++n) typeof e.stringData[n] == "string" ? a.base64.decode(e.stringData[n], t.stringData[n] = a.newBuffer(a.base64.length(e.stringData[n])), 0) : e.stringData[n].length >= 0 && (t.stringData[n] = e.stringData[n]);
				}
				if (e.int64Data) {
					if (!Array.isArray(e.int64Data)) throw TypeError(".onnx.TensorProto.int64Data: array expected");
					t.int64Data = [];
					for (var n = 0; n < e.int64Data.length; ++n) a.Long ? (t.int64Data[n] = a.Long.fromValue(e.int64Data[n])).unsigned = !1 : typeof e.int64Data[n] == "string" ? t.int64Data[n] = parseInt(e.int64Data[n], 10) : typeof e.int64Data[n] == "number" ? t.int64Data[n] = e.int64Data[n] : typeof e.int64Data[n] == "object" && (t.int64Data[n] = new a.LongBits(e.int64Data[n].low >>> 0, e.int64Data[n].high >>> 0).toNumber());
				}
				if (e.name != null && (t.name = String(e.name)), e.docString != null && (t.docString = String(e.docString)), e.rawData != null && (typeof e.rawData == "string" ? a.base64.decode(e.rawData, t.rawData = a.newBuffer(a.base64.length(e.rawData)), 0) : e.rawData.length >= 0 && (t.rawData = e.rawData)), e.externalData) {
					if (!Array.isArray(e.externalData)) throw TypeError(".onnx.TensorProto.externalData: array expected");
					t.externalData = [];
					for (var n = 0; n < e.externalData.length; ++n) {
						if (typeof e.externalData[n] != "object") throw TypeError(".onnx.TensorProto.externalData: object expected");
						t.externalData[n] = o.onnx.StringStringEntryProto.fromObject(e.externalData[n]);
					}
				}
				switch (e.dataLocation) {
					default:
						if (typeof e.dataLocation == "number") {
							t.dataLocation = e.dataLocation;
							break;
						}
						break;
					case "DEFAULT":
					case 0:
						t.dataLocation = 0;
						break;
					case "EXTERNAL":
					case 1:
						t.dataLocation = 1;
						break;
				}
				if (e.doubleData) {
					if (!Array.isArray(e.doubleData)) throw TypeError(".onnx.TensorProto.doubleData: array expected");
					t.doubleData = [];
					for (var n = 0; n < e.doubleData.length; ++n) t.doubleData[n] = Number(e.doubleData[n]);
				}
				if (e.uint64Data) {
					if (!Array.isArray(e.uint64Data)) throw TypeError(".onnx.TensorProto.uint64Data: array expected");
					t.uint64Data = [];
					for (var n = 0; n < e.uint64Data.length; ++n) a.Long ? (t.uint64Data[n] = a.Long.fromValue(e.uint64Data[n])).unsigned = !0 : typeof e.uint64Data[n] == "string" ? t.uint64Data[n] = parseInt(e.uint64Data[n], 10) : typeof e.uint64Data[n] == "number" ? t.uint64Data[n] = e.uint64Data[n] : typeof e.uint64Data[n] == "object" && (t.uint64Data[n] = new a.LongBits(e.uint64Data[n].low >>> 0, e.uint64Data[n].high >>> 0).toNumber(!0));
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.dims = [], n.floatData = [], n.int32Data = [], n.stringData = [], n.int64Data = [], n.doubleData = [], n.uint64Data = [], n.externalData = []), t.defaults && (n.dataType = 0, n.segment = null, n.name = "", t.bytes === String ? n.rawData = "" : (n.rawData = [], t.bytes !== Array && (n.rawData = a.newBuffer(n.rawData))), n.docString = "", n.dataLocation = t.enums === String ? "DEFAULT" : 0), e.dims && e.dims.length) {
					n.dims = [];
					for (var r = 0; r < e.dims.length; ++r) typeof e.dims[r] == "number" ? n.dims[r] = t.longs === String ? String(e.dims[r]) : e.dims[r] : n.dims[r] = t.longs === String ? a.Long.prototype.toString.call(e.dims[r]) : t.longs === Number ? new a.LongBits(e.dims[r].low >>> 0, e.dims[r].high >>> 0).toNumber() : e.dims[r];
				}
				if (e.dataType != null && e.hasOwnProperty("dataType") && (n.dataType = e.dataType), e.segment != null && e.hasOwnProperty("segment") && (n.segment = o.onnx.TensorProto.Segment.toObject(e.segment, t)), e.floatData && e.floatData.length) {
					n.floatData = [];
					for (var r = 0; r < e.floatData.length; ++r) n.floatData[r] = t.json && !isFinite(e.floatData[r]) ? String(e.floatData[r]) : e.floatData[r];
				}
				if (e.int32Data && e.int32Data.length) {
					n.int32Data = [];
					for (var r = 0; r < e.int32Data.length; ++r) n.int32Data[r] = e.int32Data[r];
				}
				if (e.stringData && e.stringData.length) {
					n.stringData = [];
					for (var r = 0; r < e.stringData.length; ++r) n.stringData[r] = t.bytes === String ? a.base64.encode(e.stringData[r], 0, e.stringData[r].length) : t.bytes === Array ? Array.prototype.slice.call(e.stringData[r]) : e.stringData[r];
				}
				if (e.int64Data && e.int64Data.length) {
					n.int64Data = [];
					for (var r = 0; r < e.int64Data.length; ++r) typeof e.int64Data[r] == "number" ? n.int64Data[r] = t.longs === String ? String(e.int64Data[r]) : e.int64Data[r] : n.int64Data[r] = t.longs === String ? a.Long.prototype.toString.call(e.int64Data[r]) : t.longs === Number ? new a.LongBits(e.int64Data[r].low >>> 0, e.int64Data[r].high >>> 0).toNumber() : e.int64Data[r];
				}
				if (e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.rawData != null && e.hasOwnProperty("rawData") && (n.rawData = t.bytes === String ? a.base64.encode(e.rawData, 0, e.rawData.length) : t.bytes === Array ? Array.prototype.slice.call(e.rawData) : e.rawData), e.doubleData && e.doubleData.length) {
					n.doubleData = [];
					for (var r = 0; r < e.doubleData.length; ++r) n.doubleData[r] = t.json && !isFinite(e.doubleData[r]) ? String(e.doubleData[r]) : e.doubleData[r];
				}
				if (e.uint64Data && e.uint64Data.length) {
					n.uint64Data = [];
					for (var r = 0; r < e.uint64Data.length; ++r) typeof e.uint64Data[r] == "number" ? n.uint64Data[r] = t.longs === String ? String(e.uint64Data[r]) : e.uint64Data[r] : n.uint64Data[r] = t.longs === String ? a.Long.prototype.toString.call(e.uint64Data[r]) : t.longs === Number ? new a.LongBits(e.uint64Data[r].low >>> 0, e.uint64Data[r].high >>> 0).toNumber(!0) : e.uint64Data[r];
				}
				if (e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.externalData && e.externalData.length) {
					n.externalData = [];
					for (var r = 0; r < e.externalData.length; ++r) n.externalData[r] = o.onnx.StringStringEntryProto.toObject(e.externalData[r], t);
				}
				return e.dataLocation != null && e.hasOwnProperty("dataLocation") && (n.dataLocation = t.enums === String ? o.onnx.TensorProto.DataLocation[e.dataLocation] === void 0 ? e.dataLocation : o.onnx.TensorProto.DataLocation[e.dataLocation] : e.dataLocation), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TensorProto";
			}, e.DataType = function() {
				var e = {}, t = Object.create(e);
				return t[e[0] = "UNDEFINED"] = 0, t[e[1] = "FLOAT"] = 1, t[e[2] = "UINT8"] = 2, t[e[3] = "INT8"] = 3, t[e[4] = "UINT16"] = 4, t[e[5] = "INT16"] = 5, t[e[6] = "INT32"] = 6, t[e[7] = "INT64"] = 7, t[e[8] = "STRING"] = 8, t[e[9] = "BOOL"] = 9, t[e[10] = "FLOAT16"] = 10, t[e[11] = "DOUBLE"] = 11, t[e[12] = "UINT32"] = 12, t[e[13] = "UINT64"] = 13, t[e[14] = "COMPLEX64"] = 14, t[e[15] = "COMPLEX128"] = 15, t[e[16] = "BFLOAT16"] = 16, t[e[17] = "FLOAT8E4M3FN"] = 17, t[e[18] = "FLOAT8E4M3FNUZ"] = 18, t[e[19] = "FLOAT8E5M2"] = 19, t[e[20] = "FLOAT8E5M2FNUZ"] = 20, t;
			}(), e.Segment = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.begin = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.prototype.end = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.begin != null && Object.hasOwnProperty.call(e, "begin") && t.uint32(8).int64(e.begin), e.end != null && Object.hasOwnProperty.call(e, "end") && t.uint32(16).int64(e.end), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TensorProto.Segment(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.begin = e.int64();
								break;
							case 2:
								i.end = e.int64();
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					return typeof e != "object" || !e ? "object expected" : e.begin != null && e.hasOwnProperty("begin") && !a.isInteger(e.begin) && !(e.begin && a.isInteger(e.begin.low) && a.isInteger(e.begin.high)) ? "begin: integer|Long expected" : e.end != null && e.hasOwnProperty("end") && !a.isInteger(e.end) && !(e.end && a.isInteger(e.end.low) && a.isInteger(e.end.high)) ? "end: integer|Long expected" : null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TensorProto.Segment) return e;
					var t = new o.onnx.TensorProto.Segment();
					return e.begin != null && (a.Long ? (t.begin = a.Long.fromValue(e.begin)).unsigned = !1 : typeof e.begin == "string" ? t.begin = parseInt(e.begin, 10) : typeof e.begin == "number" ? t.begin = e.begin : typeof e.begin == "object" && (t.begin = new a.LongBits(e.begin.low >>> 0, e.begin.high >>> 0).toNumber())), e.end != null && (a.Long ? (t.end = a.Long.fromValue(e.end)).unsigned = !1 : typeof e.end == "string" ? t.end = parseInt(e.end, 10) : typeof e.end == "number" ? t.end = e.end : typeof e.end == "object" && (t.end = new a.LongBits(e.end.low >>> 0, e.end.high >>> 0).toNumber())), t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					if (t.defaults) {
						if (a.Long) {
							var r = new a.Long(0, 0, !1);
							n.begin = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
						} else n.begin = t.longs === String ? "0" : 0;
						if (a.Long) {
							var r = new a.Long(0, 0, !1);
							n.end = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
						} else n.end = t.longs === String ? "0" : 0;
					}
					return e.begin != null && e.hasOwnProperty("begin") && (typeof e.begin == "number" ? n.begin = t.longs === String ? String(e.begin) : e.begin : n.begin = t.longs === String ? a.Long.prototype.toString.call(e.begin) : t.longs === Number ? new a.LongBits(e.begin.low >>> 0, e.begin.high >>> 0).toNumber() : e.begin), e.end != null && e.hasOwnProperty("end") && (typeof e.end == "number" ? n.end = t.longs === String ? String(e.end) : e.end : n.end = t.longs === String ? a.Long.prototype.toString.call(e.end) : t.longs === Number ? new a.LongBits(e.end.low >>> 0, e.end.high >>> 0).toNumber() : e.end), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TensorProto.Segment";
				}, e;
			}(), e.DataLocation = function() {
				var e = {}, t = Object.create(e);
				return t[e[0] = "DEFAULT"] = 0, t[e[1] = "EXTERNAL"] = 1, t;
			}(), e;
		}(), e.SparseTensorProto = function() {
			function e(e) {
				if (this.dims = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.values = null, e.prototype.indices = null, e.prototype.dims = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.values != null && Object.hasOwnProperty.call(e, "values") && o.onnx.TensorProto.encode(e.values, t.uint32(10).fork()).ldelim(), e.indices != null && Object.hasOwnProperty.call(e, "indices") && o.onnx.TensorProto.encode(e.indices, t.uint32(18).fork()).ldelim(), e.dims != null && e.dims.length) {
					t.uint32(26).fork();
					for (var n = 0; n < e.dims.length; ++n) t.int64(e.dims[n]);
					t.ldelim();
				}
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.SparseTensorProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.values = o.onnx.TensorProto.decode(e, e.uint32());
							break;
						case 2:
							i.indices = o.onnx.TensorProto.decode(e, e.uint32());
							break;
						case 3:
							if (i.dims && i.dims.length || (i.dims = []), (a & 7) == 2) for (var s = e.uint32() + e.pos; e.pos < s;) i.dims.push(e.int64());
							else i.dims.push(e.int64());
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.values != null && e.hasOwnProperty("values")) {
					var t = o.onnx.TensorProto.verify(e.values);
					if (t) return "values." + t;
				}
				if (e.indices != null && e.hasOwnProperty("indices")) {
					var t = o.onnx.TensorProto.verify(e.indices);
					if (t) return "indices." + t;
				}
				if (e.dims != null && e.hasOwnProperty("dims")) {
					if (!Array.isArray(e.dims)) return "dims: array expected";
					for (var n = 0; n < e.dims.length; ++n) if (!a.isInteger(e.dims[n]) && !(e.dims[n] && a.isInteger(e.dims[n].low) && a.isInteger(e.dims[n].high))) return "dims: integer|Long[] expected";
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.SparseTensorProto) return e;
				var t = new o.onnx.SparseTensorProto();
				if (e.values != null) {
					if (typeof e.values != "object") throw TypeError(".onnx.SparseTensorProto.values: object expected");
					t.values = o.onnx.TensorProto.fromObject(e.values);
				}
				if (e.indices != null) {
					if (typeof e.indices != "object") throw TypeError(".onnx.SparseTensorProto.indices: object expected");
					t.indices = o.onnx.TensorProto.fromObject(e.indices);
				}
				if (e.dims) {
					if (!Array.isArray(e.dims)) throw TypeError(".onnx.SparseTensorProto.dims: array expected");
					t.dims = [];
					for (var n = 0; n < e.dims.length; ++n) a.Long ? (t.dims[n] = a.Long.fromValue(e.dims[n])).unsigned = !1 : typeof e.dims[n] == "string" ? t.dims[n] = parseInt(e.dims[n], 10) : typeof e.dims[n] == "number" ? t.dims[n] = e.dims[n] : typeof e.dims[n] == "object" && (t.dims[n] = new a.LongBits(e.dims[n].low >>> 0, e.dims[n].high >>> 0).toNumber());
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.dims = []), t.defaults && (n.values = null, n.indices = null), e.values != null && e.hasOwnProperty("values") && (n.values = o.onnx.TensorProto.toObject(e.values, t)), e.indices != null && e.hasOwnProperty("indices") && (n.indices = o.onnx.TensorProto.toObject(e.indices, t)), e.dims && e.dims.length) {
					n.dims = [];
					for (var r = 0; r < e.dims.length; ++r) typeof e.dims[r] == "number" ? n.dims[r] = t.longs === String ? String(e.dims[r]) : e.dims[r] : n.dims[r] = t.longs === String ? a.Long.prototype.toString.call(e.dims[r]) : t.longs === Number ? new a.LongBits(e.dims[r].low >>> 0, e.dims[r].high >>> 0).toNumber() : e.dims[r];
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.SparseTensorProto";
			}, e;
		}(), e.TensorShapeProto = function() {
			function e(e) {
				if (this.dim = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.dim = a.emptyArray, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.dim != null && e.dim.length) for (var n = 0; n < e.dim.length; ++n) o.onnx.TensorShapeProto.Dimension.encode(e.dim[n], t.uint32(10).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TensorShapeProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.dim && i.dim.length || (i.dim = []), i.dim.push(o.onnx.TensorShapeProto.Dimension.decode(e, e.uint32()));
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.dim != null && e.hasOwnProperty("dim")) {
					if (!Array.isArray(e.dim)) return "dim: array expected";
					for (var t = 0; t < e.dim.length; ++t) {
						var n = o.onnx.TensorShapeProto.Dimension.verify(e.dim[t]);
						if (n) return "dim." + n;
					}
				}
				return null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.TensorShapeProto) return e;
				var t = new o.onnx.TensorShapeProto();
				if (e.dim) {
					if (!Array.isArray(e.dim)) throw TypeError(".onnx.TensorShapeProto.dim: array expected");
					t.dim = [];
					for (var n = 0; n < e.dim.length; ++n) {
						if (typeof e.dim[n] != "object") throw TypeError(".onnx.TensorShapeProto.dim: object expected");
						t.dim[n] = o.onnx.TensorShapeProto.Dimension.fromObject(e.dim[n]);
					}
				}
				return t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.dim = []), e.dim && e.dim.length) {
					n.dim = [];
					for (var r = 0; r < e.dim.length; ++r) n.dim[r] = o.onnx.TensorShapeProto.Dimension.toObject(e.dim[r], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TensorShapeProto";
			}, e.Dimension = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				e.prototype.dimValue = null, e.prototype.dimParam = null, e.prototype.denotation = "";
				var t;
				return Object.defineProperty(e.prototype, "value", {
					get: a.oneOfGetter(t = ["dimValue", "dimParam"]),
					set: a.oneOfSetter(t)
				}), e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.dimValue != null && Object.hasOwnProperty.call(e, "dimValue") && t.uint32(8).int64(e.dimValue), e.dimParam != null && Object.hasOwnProperty.call(e, "dimParam") && t.uint32(18).string(e.dimParam), e.denotation != null && Object.hasOwnProperty.call(e, "denotation") && t.uint32(26).string(e.denotation), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TensorShapeProto.Dimension(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.dimValue = e.int64();
								break;
							case 2:
								i.dimParam = e.string();
								break;
							case 3:
								i.denotation = e.string();
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					var t = {};
					if (e.dimValue != null && e.hasOwnProperty("dimValue") && (t.value = 1, !a.isInteger(e.dimValue) && !(e.dimValue && a.isInteger(e.dimValue.low) && a.isInteger(e.dimValue.high)))) return "dimValue: integer|Long expected";
					if (e.dimParam != null && e.hasOwnProperty("dimParam")) {
						if (t.value === 1) return "value: multiple values";
						if (t.value = 1, !a.isString(e.dimParam)) return "dimParam: string expected";
					}
					return e.denotation != null && e.hasOwnProperty("denotation") && !a.isString(e.denotation) ? "denotation: string expected" : null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TensorShapeProto.Dimension) return e;
					var t = new o.onnx.TensorShapeProto.Dimension();
					return e.dimValue != null && (a.Long ? (t.dimValue = a.Long.fromValue(e.dimValue)).unsigned = !1 : typeof e.dimValue == "string" ? t.dimValue = parseInt(e.dimValue, 10) : typeof e.dimValue == "number" ? t.dimValue = e.dimValue : typeof e.dimValue == "object" && (t.dimValue = new a.LongBits(e.dimValue.low >>> 0, e.dimValue.high >>> 0).toNumber())), e.dimParam != null && (t.dimParam = String(e.dimParam)), e.denotation != null && (t.denotation = String(e.denotation)), t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.denotation = ""), e.dimValue != null && e.hasOwnProperty("dimValue") && (typeof e.dimValue == "number" ? n.dimValue = t.longs === String ? String(e.dimValue) : e.dimValue : n.dimValue = t.longs === String ? a.Long.prototype.toString.call(e.dimValue) : t.longs === Number ? new a.LongBits(e.dimValue.low >>> 0, e.dimValue.high >>> 0).toNumber() : e.dimValue, t.oneofs && (n.value = "dimValue")), e.dimParam != null && e.hasOwnProperty("dimParam") && (n.dimParam = e.dimParam, t.oneofs && (n.value = "dimParam")), e.denotation != null && e.hasOwnProperty("denotation") && (n.denotation = e.denotation), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TensorShapeProto.Dimension";
				}, e;
			}(), e;
		}(), e.TypeProto = function() {
			function e(e) {
				if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			e.prototype.tensorType = null, e.prototype.sequenceType = null, e.prototype.mapType = null, e.prototype.optionalType = null, e.prototype.sparseTensorType = null, e.prototype.denotation = "";
			var t;
			return Object.defineProperty(e.prototype, "value", {
				get: a.oneOfGetter(t = [
					"tensorType",
					"sequenceType",
					"mapType",
					"optionalType",
					"sparseTensorType"
				]),
				set: a.oneOfSetter(t)
			}), e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				return t ||= i.create(), e.tensorType != null && Object.hasOwnProperty.call(e, "tensorType") && o.onnx.TypeProto.Tensor.encode(e.tensorType, t.uint32(10).fork()).ldelim(), e.sequenceType != null && Object.hasOwnProperty.call(e, "sequenceType") && o.onnx.TypeProto.Sequence.encode(e.sequenceType, t.uint32(34).fork()).ldelim(), e.mapType != null && Object.hasOwnProperty.call(e, "mapType") && o.onnx.TypeProto.Map.encode(e.mapType, t.uint32(42).fork()).ldelim(), e.denotation != null && Object.hasOwnProperty.call(e, "denotation") && t.uint32(50).string(e.denotation), e.sparseTensorType != null && Object.hasOwnProperty.call(e, "sparseTensorType") && o.onnx.TypeProto.SparseTensor.encode(e.sparseTensorType, t.uint32(66).fork()).ldelim(), e.optionalType != null && Object.hasOwnProperty.call(e, "optionalType") && o.onnx.TypeProto.Optional.encode(e.optionalType, t.uint32(74).fork()).ldelim(), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.tensorType = o.onnx.TypeProto.Tensor.decode(e, e.uint32());
							break;
						case 4:
							i.sequenceType = o.onnx.TypeProto.Sequence.decode(e, e.uint32());
							break;
						case 5:
							i.mapType = o.onnx.TypeProto.Map.decode(e, e.uint32());
							break;
						case 9:
							i.optionalType = o.onnx.TypeProto.Optional.decode(e, e.uint32());
							break;
						case 8:
							i.sparseTensorType = o.onnx.TypeProto.SparseTensor.decode(e, e.uint32());
							break;
						case 6:
							i.denotation = e.string();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				var t = {};
				if (e.tensorType != null && e.hasOwnProperty("tensorType")) {
					t.value = 1;
					var n = o.onnx.TypeProto.Tensor.verify(e.tensorType);
					if (n) return "tensorType." + n;
				}
				if (e.sequenceType != null && e.hasOwnProperty("sequenceType")) {
					if (t.value === 1) return "value: multiple values";
					t.value = 1;
					var n = o.onnx.TypeProto.Sequence.verify(e.sequenceType);
					if (n) return "sequenceType." + n;
				}
				if (e.mapType != null && e.hasOwnProperty("mapType")) {
					if (t.value === 1) return "value: multiple values";
					t.value = 1;
					var n = o.onnx.TypeProto.Map.verify(e.mapType);
					if (n) return "mapType." + n;
				}
				if (e.optionalType != null && e.hasOwnProperty("optionalType")) {
					if (t.value === 1) return "value: multiple values";
					t.value = 1;
					var n = o.onnx.TypeProto.Optional.verify(e.optionalType);
					if (n) return "optionalType." + n;
				}
				if (e.sparseTensorType != null && e.hasOwnProperty("sparseTensorType")) {
					if (t.value === 1) return "value: multiple values";
					t.value = 1;
					var n = o.onnx.TypeProto.SparseTensor.verify(e.sparseTensorType);
					if (n) return "sparseTensorType." + n;
				}
				return e.denotation != null && e.hasOwnProperty("denotation") && !a.isString(e.denotation) ? "denotation: string expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.TypeProto) return e;
				var t = new o.onnx.TypeProto();
				if (e.tensorType != null) {
					if (typeof e.tensorType != "object") throw TypeError(".onnx.TypeProto.tensorType: object expected");
					t.tensorType = o.onnx.TypeProto.Tensor.fromObject(e.tensorType);
				}
				if (e.sequenceType != null) {
					if (typeof e.sequenceType != "object") throw TypeError(".onnx.TypeProto.sequenceType: object expected");
					t.sequenceType = o.onnx.TypeProto.Sequence.fromObject(e.sequenceType);
				}
				if (e.mapType != null) {
					if (typeof e.mapType != "object") throw TypeError(".onnx.TypeProto.mapType: object expected");
					t.mapType = o.onnx.TypeProto.Map.fromObject(e.mapType);
				}
				if (e.optionalType != null) {
					if (typeof e.optionalType != "object") throw TypeError(".onnx.TypeProto.optionalType: object expected");
					t.optionalType = o.onnx.TypeProto.Optional.fromObject(e.optionalType);
				}
				if (e.sparseTensorType != null) {
					if (typeof e.sparseTensorType != "object") throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");
					t.sparseTensorType = o.onnx.TypeProto.SparseTensor.fromObject(e.sparseTensorType);
				}
				return e.denotation != null && (t.denotation = String(e.denotation)), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				return t.defaults && (n.denotation = ""), e.tensorType != null && e.hasOwnProperty("tensorType") && (n.tensorType = o.onnx.TypeProto.Tensor.toObject(e.tensorType, t), t.oneofs && (n.value = "tensorType")), e.sequenceType != null && e.hasOwnProperty("sequenceType") && (n.sequenceType = o.onnx.TypeProto.Sequence.toObject(e.sequenceType, t), t.oneofs && (n.value = "sequenceType")), e.mapType != null && e.hasOwnProperty("mapType") && (n.mapType = o.onnx.TypeProto.Map.toObject(e.mapType, t), t.oneofs && (n.value = "mapType")), e.denotation != null && e.hasOwnProperty("denotation") && (n.denotation = e.denotation), e.sparseTensorType != null && e.hasOwnProperty("sparseTensorType") && (n.sparseTensorType = o.onnx.TypeProto.SparseTensor.toObject(e.sparseTensorType, t), t.oneofs && (n.value = "sparseTensorType")), e.optionalType != null && e.hasOwnProperty("optionalType") && (n.optionalType = o.onnx.TypeProto.Optional.toObject(e.optionalType, t), t.oneofs && (n.value = "optionalType")), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto";
			}, e.Tensor = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.elemType = 0, e.prototype.shape = null, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.elemType != null && Object.hasOwnProperty.call(e, "elemType") && t.uint32(8).int32(e.elemType), e.shape != null && Object.hasOwnProperty.call(e, "shape") && o.onnx.TensorShapeProto.encode(e.shape, t.uint32(18).fork()).ldelim(), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto.Tensor(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.elemType = e.int32();
								break;
							case 2:
								i.shape = o.onnx.TensorShapeProto.decode(e, e.uint32());
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					if (e.elemType != null && e.hasOwnProperty("elemType") && !a.isInteger(e.elemType)) return "elemType: integer expected";
					if (e.shape != null && e.hasOwnProperty("shape")) {
						var t = o.onnx.TensorShapeProto.verify(e.shape);
						if (t) return "shape." + t;
					}
					return null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TypeProto.Tensor) return e;
					var t = new o.onnx.TypeProto.Tensor();
					if (e.elemType != null && (t.elemType = e.elemType | 0), e.shape != null) {
						if (typeof e.shape != "object") throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");
						t.shape = o.onnx.TensorShapeProto.fromObject(e.shape);
					}
					return t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.elemType = 0, n.shape = null), e.elemType != null && e.hasOwnProperty("elemType") && (n.elemType = e.elemType), e.shape != null && e.hasOwnProperty("shape") && (n.shape = o.onnx.TensorShapeProto.toObject(e.shape, t)), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto.Tensor";
				}, e;
			}(), e.Sequence = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.elemType = null, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.elemType != null && Object.hasOwnProperty.call(e, "elemType") && o.onnx.TypeProto.encode(e.elemType, t.uint32(10).fork()).ldelim(), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto.Sequence(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.elemType = o.onnx.TypeProto.decode(e, e.uint32());
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					if (e.elemType != null && e.hasOwnProperty("elemType")) {
						var t = o.onnx.TypeProto.verify(e.elemType);
						if (t) return "elemType." + t;
					}
					return null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TypeProto.Sequence) return e;
					var t = new o.onnx.TypeProto.Sequence();
					if (e.elemType != null) {
						if (typeof e.elemType != "object") throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");
						t.elemType = o.onnx.TypeProto.fromObject(e.elemType);
					}
					return t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.elemType = null), e.elemType != null && e.hasOwnProperty("elemType") && (n.elemType = o.onnx.TypeProto.toObject(e.elemType, t)), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto.Sequence";
				}, e;
			}(), e.Map = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.keyType = 0, e.prototype.valueType = null, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.keyType != null && Object.hasOwnProperty.call(e, "keyType") && t.uint32(8).int32(e.keyType), e.valueType != null && Object.hasOwnProperty.call(e, "valueType") && o.onnx.TypeProto.encode(e.valueType, t.uint32(18).fork()).ldelim(), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto.Map(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.keyType = e.int32();
								break;
							case 2:
								i.valueType = o.onnx.TypeProto.decode(e, e.uint32());
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					if (e.keyType != null && e.hasOwnProperty("keyType") && !a.isInteger(e.keyType)) return "keyType: integer expected";
					if (e.valueType != null && e.hasOwnProperty("valueType")) {
						var t = o.onnx.TypeProto.verify(e.valueType);
						if (t) return "valueType." + t;
					}
					return null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TypeProto.Map) return e;
					var t = new o.onnx.TypeProto.Map();
					if (e.keyType != null && (t.keyType = e.keyType | 0), e.valueType != null) {
						if (typeof e.valueType != "object") throw TypeError(".onnx.TypeProto.Map.valueType: object expected");
						t.valueType = o.onnx.TypeProto.fromObject(e.valueType);
					}
					return t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.keyType = 0, n.valueType = null), e.keyType != null && e.hasOwnProperty("keyType") && (n.keyType = e.keyType), e.valueType != null && e.hasOwnProperty("valueType") && (n.valueType = o.onnx.TypeProto.toObject(e.valueType, t)), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto.Map";
				}, e;
			}(), e.Optional = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.elemType = null, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.elemType != null && Object.hasOwnProperty.call(e, "elemType") && o.onnx.TypeProto.encode(e.elemType, t.uint32(10).fork()).ldelim(), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto.Optional(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.elemType = o.onnx.TypeProto.decode(e, e.uint32());
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					if (e.elemType != null && e.hasOwnProperty("elemType")) {
						var t = o.onnx.TypeProto.verify(e.elemType);
						if (t) return "elemType." + t;
					}
					return null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TypeProto.Optional) return e;
					var t = new o.onnx.TypeProto.Optional();
					if (e.elemType != null) {
						if (typeof e.elemType != "object") throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");
						t.elemType = o.onnx.TypeProto.fromObject(e.elemType);
					}
					return t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.elemType = null), e.elemType != null && e.hasOwnProperty("elemType") && (n.elemType = o.onnx.TypeProto.toObject(e.elemType, t)), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto.Optional";
				}, e;
			}(), e.SparseTensor = function() {
				function e(e) {
					if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
				}
				return e.prototype.elemType = 0, e.prototype.shape = null, e.create = function(t) {
					return new e(t);
				}, e.encode = function(e, t) {
					return t ||= i.create(), e.elemType != null && Object.hasOwnProperty.call(e, "elemType") && t.uint32(8).int32(e.elemType), e.shape != null && Object.hasOwnProperty.call(e, "shape") && o.onnx.TensorShapeProto.encode(e.shape, t.uint32(18).fork()).ldelim(), t;
				}, e.encodeDelimited = function(e, t) {
					return this.encode(e, t).ldelim();
				}, e.decode = function(e, t) {
					e instanceof r || (e = r.create(e));
					for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.TypeProto.SparseTensor(); e.pos < n;) {
						var a = e.uint32();
						switch (a >>> 3) {
							case 1:
								i.elemType = e.int32();
								break;
							case 2:
								i.shape = o.onnx.TensorShapeProto.decode(e, e.uint32());
								break;
							default:
								e.skipType(a & 7);
								break;
						}
					}
					return i;
				}, e.decodeDelimited = function(e) {
					return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
				}, e.verify = function(e) {
					if (typeof e != "object" || !e) return "object expected";
					if (e.elemType != null && e.hasOwnProperty("elemType") && !a.isInteger(e.elemType)) return "elemType: integer expected";
					if (e.shape != null && e.hasOwnProperty("shape")) {
						var t = o.onnx.TensorShapeProto.verify(e.shape);
						if (t) return "shape." + t;
					}
					return null;
				}, e.fromObject = function(e) {
					if (e instanceof o.onnx.TypeProto.SparseTensor) return e;
					var t = new o.onnx.TypeProto.SparseTensor();
					if (e.elemType != null && (t.elemType = e.elemType | 0), e.shape != null) {
						if (typeof e.shape != "object") throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");
						t.shape = o.onnx.TensorShapeProto.fromObject(e.shape);
					}
					return t;
				}, e.toObject = function(e, t) {
					t ||= {};
					var n = {};
					return t.defaults && (n.elemType = 0, n.shape = null), e.elemType != null && e.hasOwnProperty("elemType") && (n.elemType = e.elemType), e.shape != null && e.hasOwnProperty("shape") && (n.shape = o.onnx.TensorShapeProto.toObject(e.shape, t)), n;
				}, e.prototype.toJSON = function() {
					return this.constructor.toObject(this, n.util.toJSONOptions);
				}, e.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.TypeProto.SparseTensor";
				}, e;
			}(), e;
		}(), e.OperatorSetIdProto = function() {
			function e(e) {
				if (e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.domain = "", e.prototype.version = a.Long ? a.Long.fromBits(0, 0, !1) : 0, e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				return t ||= i.create(), e.domain != null && Object.hasOwnProperty.call(e, "domain") && t.uint32(10).string(e.domain), e.version != null && Object.hasOwnProperty.call(e, "version") && t.uint32(16).int64(e.version), t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.OperatorSetIdProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.domain = e.string();
							break;
						case 2:
							i.version = e.int64();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				return typeof e != "object" || !e ? "object expected" : e.domain != null && e.hasOwnProperty("domain") && !a.isString(e.domain) ? "domain: string expected" : e.version != null && e.hasOwnProperty("version") && !a.isInteger(e.version) && !(e.version && a.isInteger(e.version.low) && a.isInteger(e.version.high)) ? "version: integer|Long expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.OperatorSetIdProto) return e;
				var t = new o.onnx.OperatorSetIdProto();
				return e.domain != null && (t.domain = String(e.domain)), e.version != null && (a.Long ? (t.version = a.Long.fromValue(e.version)).unsigned = !1 : typeof e.version == "string" ? t.version = parseInt(e.version, 10) : typeof e.version == "number" ? t.version = e.version : typeof e.version == "object" && (t.version = new a.LongBits(e.version.low >>> 0, e.version.high >>> 0).toNumber())), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if (t.defaults) if (n.domain = "", a.Long) {
					var r = new a.Long(0, 0, !1);
					n.version = t.longs === String ? r.toString() : t.longs === Number ? r.toNumber() : r;
				} else n.version = t.longs === String ? "0" : 0;
				return e.domain != null && e.hasOwnProperty("domain") && (n.domain = e.domain), e.version != null && e.hasOwnProperty("version") && (typeof e.version == "number" ? n.version = t.longs === String ? String(e.version) : e.version : n.version = t.longs === String ? a.Long.prototype.toString.call(e.version) : t.longs === Number ? new a.LongBits(e.version.low >>> 0, e.version.high >>> 0).toNumber() : e.version), n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.OperatorSetIdProto";
			}, e;
		}(), e.OperatorStatus = function() {
			var e = {}, t = Object.create(e);
			return t[e[0] = "EXPERIMENTAL"] = 0, t[e[1] = "STABLE"] = 1, t;
		}(), e.FunctionProto = function() {
			function e(e) {
				if (this.input = [], this.output = [], this.attribute = [], this.attributeProto = [], this.node = [], this.opsetImport = [], e) for (var t = Object.keys(e), n = 0; n < t.length; ++n) e[t[n]] != null && (this[t[n]] = e[t[n]]);
			}
			return e.prototype.name = "", e.prototype.input = a.emptyArray, e.prototype.output = a.emptyArray, e.prototype.attribute = a.emptyArray, e.prototype.attributeProto = a.emptyArray, e.prototype.node = a.emptyArray, e.prototype.docString = "", e.prototype.opsetImport = a.emptyArray, e.prototype.domain = "", e.create = function(t) {
				return new e(t);
			}, e.encode = function(e, t) {
				if (t ||= i.create(), e.name != null && Object.hasOwnProperty.call(e, "name") && t.uint32(10).string(e.name), e.input != null && e.input.length) for (var n = 0; n < e.input.length; ++n) t.uint32(34).string(e.input[n]);
				if (e.output != null && e.output.length) for (var n = 0; n < e.output.length; ++n) t.uint32(42).string(e.output[n]);
				if (e.attribute != null && e.attribute.length) for (var n = 0; n < e.attribute.length; ++n) t.uint32(50).string(e.attribute[n]);
				if (e.node != null && e.node.length) for (var n = 0; n < e.node.length; ++n) o.onnx.NodeProto.encode(e.node[n], t.uint32(58).fork()).ldelim();
				if (e.docString != null && Object.hasOwnProperty.call(e, "docString") && t.uint32(66).string(e.docString), e.opsetImport != null && e.opsetImport.length) for (var n = 0; n < e.opsetImport.length; ++n) o.onnx.OperatorSetIdProto.encode(e.opsetImport[n], t.uint32(74).fork()).ldelim();
				if (e.domain != null && Object.hasOwnProperty.call(e, "domain") && t.uint32(82).string(e.domain), e.attributeProto != null && e.attributeProto.length) for (var n = 0; n < e.attributeProto.length; ++n) o.onnx.AttributeProto.encode(e.attributeProto[n], t.uint32(90).fork()).ldelim();
				return t;
			}, e.encodeDelimited = function(e, t) {
				return this.encode(e, t).ldelim();
			}, e.decode = function(e, t) {
				e instanceof r || (e = r.create(e));
				for (var n = t === void 0 ? e.len : e.pos + t, i = new o.onnx.FunctionProto(); e.pos < n;) {
					var a = e.uint32();
					switch (a >>> 3) {
						case 1:
							i.name = e.string();
							break;
						case 4:
							i.input && i.input.length || (i.input = []), i.input.push(e.string());
							break;
						case 5:
							i.output && i.output.length || (i.output = []), i.output.push(e.string());
							break;
						case 6:
							i.attribute && i.attribute.length || (i.attribute = []), i.attribute.push(e.string());
							break;
						case 11:
							i.attributeProto && i.attributeProto.length || (i.attributeProto = []), i.attributeProto.push(o.onnx.AttributeProto.decode(e, e.uint32()));
							break;
						case 7:
							i.node && i.node.length || (i.node = []), i.node.push(o.onnx.NodeProto.decode(e, e.uint32()));
							break;
						case 8:
							i.docString = e.string();
							break;
						case 9:
							i.opsetImport && i.opsetImport.length || (i.opsetImport = []), i.opsetImport.push(o.onnx.OperatorSetIdProto.decode(e, e.uint32()));
							break;
						case 10:
							i.domain = e.string();
							break;
						default:
							e.skipType(a & 7);
							break;
					}
				}
				return i;
			}, e.decodeDelimited = function(e) {
				return e instanceof r || (e = new r(e)), this.decode(e, e.uint32());
			}, e.verify = function(e) {
				if (typeof e != "object" || !e) return "object expected";
				if (e.name != null && e.hasOwnProperty("name") && !a.isString(e.name)) return "name: string expected";
				if (e.input != null && e.hasOwnProperty("input")) {
					if (!Array.isArray(e.input)) return "input: array expected";
					for (var t = 0; t < e.input.length; ++t) if (!a.isString(e.input[t])) return "input: string[] expected";
				}
				if (e.output != null && e.hasOwnProperty("output")) {
					if (!Array.isArray(e.output)) return "output: array expected";
					for (var t = 0; t < e.output.length; ++t) if (!a.isString(e.output[t])) return "output: string[] expected";
				}
				if (e.attribute != null && e.hasOwnProperty("attribute")) {
					if (!Array.isArray(e.attribute)) return "attribute: array expected";
					for (var t = 0; t < e.attribute.length; ++t) if (!a.isString(e.attribute[t])) return "attribute: string[] expected";
				}
				if (e.attributeProto != null && e.hasOwnProperty("attributeProto")) {
					if (!Array.isArray(e.attributeProto)) return "attributeProto: array expected";
					for (var t = 0; t < e.attributeProto.length; ++t) {
						var n = o.onnx.AttributeProto.verify(e.attributeProto[t]);
						if (n) return "attributeProto." + n;
					}
				}
				if (e.node != null && e.hasOwnProperty("node")) {
					if (!Array.isArray(e.node)) return "node: array expected";
					for (var t = 0; t < e.node.length; ++t) {
						var n = o.onnx.NodeProto.verify(e.node[t]);
						if (n) return "node." + n;
					}
				}
				if (e.docString != null && e.hasOwnProperty("docString") && !a.isString(e.docString)) return "docString: string expected";
				if (e.opsetImport != null && e.hasOwnProperty("opsetImport")) {
					if (!Array.isArray(e.opsetImport)) return "opsetImport: array expected";
					for (var t = 0; t < e.opsetImport.length; ++t) {
						var n = o.onnx.OperatorSetIdProto.verify(e.opsetImport[t]);
						if (n) return "opsetImport." + n;
					}
				}
				return e.domain != null && e.hasOwnProperty("domain") && !a.isString(e.domain) ? "domain: string expected" : null;
			}, e.fromObject = function(e) {
				if (e instanceof o.onnx.FunctionProto) return e;
				var t = new o.onnx.FunctionProto();
				if (e.name != null && (t.name = String(e.name)), e.input) {
					if (!Array.isArray(e.input)) throw TypeError(".onnx.FunctionProto.input: array expected");
					t.input = [];
					for (var n = 0; n < e.input.length; ++n) t.input[n] = String(e.input[n]);
				}
				if (e.output) {
					if (!Array.isArray(e.output)) throw TypeError(".onnx.FunctionProto.output: array expected");
					t.output = [];
					for (var n = 0; n < e.output.length; ++n) t.output[n] = String(e.output[n]);
				}
				if (e.attribute) {
					if (!Array.isArray(e.attribute)) throw TypeError(".onnx.FunctionProto.attribute: array expected");
					t.attribute = [];
					for (var n = 0; n < e.attribute.length; ++n) t.attribute[n] = String(e.attribute[n]);
				}
				if (e.attributeProto) {
					if (!Array.isArray(e.attributeProto)) throw TypeError(".onnx.FunctionProto.attributeProto: array expected");
					t.attributeProto = [];
					for (var n = 0; n < e.attributeProto.length; ++n) {
						if (typeof e.attributeProto[n] != "object") throw TypeError(".onnx.FunctionProto.attributeProto: object expected");
						t.attributeProto[n] = o.onnx.AttributeProto.fromObject(e.attributeProto[n]);
					}
				}
				if (e.node) {
					if (!Array.isArray(e.node)) throw TypeError(".onnx.FunctionProto.node: array expected");
					t.node = [];
					for (var n = 0; n < e.node.length; ++n) {
						if (typeof e.node[n] != "object") throw TypeError(".onnx.FunctionProto.node: object expected");
						t.node[n] = o.onnx.NodeProto.fromObject(e.node[n]);
					}
				}
				if (e.docString != null && (t.docString = String(e.docString)), e.opsetImport) {
					if (!Array.isArray(e.opsetImport)) throw TypeError(".onnx.FunctionProto.opsetImport: array expected");
					t.opsetImport = [];
					for (var n = 0; n < e.opsetImport.length; ++n) {
						if (typeof e.opsetImport[n] != "object") throw TypeError(".onnx.FunctionProto.opsetImport: object expected");
						t.opsetImport[n] = o.onnx.OperatorSetIdProto.fromObject(e.opsetImport[n]);
					}
				}
				return e.domain != null && (t.domain = String(e.domain)), t;
			}, e.toObject = function(e, t) {
				t ||= {};
				var n = {};
				if ((t.arrays || t.defaults) && (n.input = [], n.output = [], n.attribute = [], n.node = [], n.opsetImport = [], n.attributeProto = []), t.defaults && (n.name = "", n.docString = "", n.domain = ""), e.name != null && e.hasOwnProperty("name") && (n.name = e.name), e.input && e.input.length) {
					n.input = [];
					for (var r = 0; r < e.input.length; ++r) n.input[r] = e.input[r];
				}
				if (e.output && e.output.length) {
					n.output = [];
					for (var r = 0; r < e.output.length; ++r) n.output[r] = e.output[r];
				}
				if (e.attribute && e.attribute.length) {
					n.attribute = [];
					for (var r = 0; r < e.attribute.length; ++r) n.attribute[r] = e.attribute[r];
				}
				if (e.node && e.node.length) {
					n.node = [];
					for (var r = 0; r < e.node.length; ++r) n.node[r] = o.onnx.NodeProto.toObject(e.node[r], t);
				}
				if (e.docString != null && e.hasOwnProperty("docString") && (n.docString = e.docString), e.opsetImport && e.opsetImport.length) {
					n.opsetImport = [];
					for (var r = 0; r < e.opsetImport.length; ++r) n.opsetImport[r] = o.onnx.OperatorSetIdProto.toObject(e.opsetImport[r], t);
				}
				if (e.domain != null && e.hasOwnProperty("domain") && (n.domain = e.domain), e.attributeProto && e.attributeProto.length) {
					n.attributeProto = [];
					for (var r = 0; r < e.attributeProto.length; ++r) n.attributeProto[r] = o.onnx.AttributeProto.toObject(e.attributeProto[r], t);
				}
				return n;
			}, e.prototype.toJSON = function() {
				return this.constructor.toObject(this, n.util.toJSONOptions);
			}, e.getTypeUrl = function(e) {
				return e === void 0 && (e = "type.googleapis.com"), e + "/onnx.FunctionProto";
			}, e;
		}(), e;
	}(), t.exports = o;
});
function kr(e, t) {
	if (!e) throw Error(typeof t == "string" ? t : t());
}
function ln(e) {
	return new TextDecoder().decode(e);
}
var ye, pr, hi, Ke, Xn, Ve, nt, U, un, dr, hr, mr, fe = E(() => {
	Wn(), ei(), ye = Er($r()), br(), pr = class {
		static arraysEqual(e, t) {
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
			return !0;
		}
	}, hi = class {
		static preprocessInputShapes(e, t) {
			return [e.length === 1 ? [1, e[0]] : e, t.length === 1 ? [t[0], 1] : t];
		}
		static postprocessOutputShape(e, t, n) {
			t === 1 && e.splice(e.length - 2, 1), n === 1 && e.pop();
		}
		static calcMatMulShape(e, t) {
			return e[1] === t[0] ? [e[0], t[1]] : void 0;
		}
	}, Ke = class e {
		static calcShape(e, t, n = !1) {
			let r = e.length, i = t.length;
			if (r === 0) return t;
			if (i === 0) return e;
			let a = Math.max(e.length, t.length), o = Array(a);
			if (n) {
				if (r < 2 || i < 2) return;
				let n = hi.calcMatMulShape([e[r - 2], e[r - 1]], [t[i - 2], t[i - 1]]);
				if (n === void 0) return;
				[o[a - 2], o[a - 1]] = n;
			}
			for (let s = n ? 3 : 1; s <= a; s++) {
				let n = r - s < 0 ? 1 : e[r - s], c = i - s < 0 ? 1 : t[i - s];
				if (n !== c && n > 1 && c > 1) return;
				o[a - s] = Math.max(n, c);
			}
			return o;
		}
		static index(t, n) {
			let r = Array(n.length);
			return e.fillIndex(t, n, r), r;
		}
		static fillIndex(e, t, n) {
			let r = e.length - t.length;
			for (let i = 0; i < t.length; i++) n[i] = e[r + i] % t[i];
		}
		static calc(t, n, r, i, a) {
			let o = e.calcShape(t.dims, n.dims);
			if (o) {
				if (i && !U.areEqual(o, t.dims)) return;
				let s = U.size(o), c = i ? t : new Ce(o, a || t.type);
				if (o.length === 0) c.set([], r(t.get([]), n.get([])));
				else {
					let i = Array(o.length), a = Array(t.dims.length), l = Array(n.dims.length), u = 0, d = 0, f = !1, p = !1;
					t.dims.length === 0 && (u = t.get([]), f = !0), n.dims.length === 0 && (d = n.get([]), p = !0);
					let m;
					for (let h = 0; h < s; h++) {
						m = h;
						for (let e = o.length - 1; e >= 0; e--) i[e] = m % o[e], m = Math.floor(m / o[e]);
						f || (e.fillIndex(i, t.dims, a), u = t.get(a)), p || (e.fillIndex(i, n.dims, l), d = n.get(l)), c.set(i, r(u, d));
					}
				}
				return c;
			}
		}
		static isValidBroadcast(e, t) {
			let n = e.length, r = t.length;
			if (n > r) return !1;
			for (let i = 1; i <= n; i++) if (e[n - i] !== 1 && e[n - i] !== t[r - i]) return !1;
			return !0;
		}
		static getBroadcastDims(e, t) {
			let n = e.length, r = [];
			for (let i = 0; i < n; i++) {
				let a = n - 1 - i, o = e[a] || 1;
				(t[t.length - 1 - i] || 1) > 1 && o === 1 && r.unshift(a);
			}
			return r;
		}
	}, Xn = class {
		static getShapeOfGemmResult(e, t, n, r, i) {
			if (e.length !== 2 || n.length !== 2) throw Error("shape need to be of size 2");
			let a, o, s;
			t ? (a = e[1], o = e[0]) : (a = e[0], o = e[1]);
			let c = -1;
			if (r ? (s = n[0], c = 1) : (s = n[1], c = 0), n[c] !== o) throw Error("dimension mismatch");
			if (a <= 0 || s <= 0 || o <= 0) throw Error("invalid shape specified");
			if (i && !Ke.isValidBroadcast(i, [a, s])) throw Error("gemm: invalid bias shape for broadcast");
			return [
				a,
				s,
				o
			];
		}
	}, Ve = class e {
		static tensorDataTypeFromProto(e) {
			switch (e) {
				case ye.onnx.TensorProto.DataType.INT8: return "int8";
				case ye.onnx.TensorProto.DataType.UINT8: return "uint8";
				case ye.onnx.TensorProto.DataType.BOOL: return "bool";
				case ye.onnx.TensorProto.DataType.INT16: return "int16";
				case ye.onnx.TensorProto.DataType.UINT16: return "uint16";
				case ye.onnx.TensorProto.DataType.INT32: return "int32";
				case ye.onnx.TensorProto.DataType.UINT32: return "uint32";
				case ye.onnx.TensorProto.DataType.FLOAT: return "float32";
				case ye.onnx.TensorProto.DataType.DOUBLE: return "float64";
				case ye.onnx.TensorProto.DataType.STRING: return "string";
				case ye.onnx.TensorProto.DataType.INT64: return "int32";
				case ye.onnx.TensorProto.DataType.UINT64: return "uint32";
				default: throw Error(`unsupported data type: ${ye.onnx.TensorProto.DataType[e]}`);
			}
		}
		static tensorDataTypeStringToEnum(e) {
			switch (e) {
				case "int8": return ye.onnx.TensorProto.DataType.INT8;
				case "uint8": return ye.onnx.TensorProto.DataType.UINT8;
				case "bool": return ye.onnx.TensorProto.DataType.BOOL;
				case "int16": return ye.onnx.TensorProto.DataType.INT16;
				case "uint16": return ye.onnx.TensorProto.DataType.UINT16;
				case "int32": return ye.onnx.TensorProto.DataType.INT32;
				case "uint32": return ye.onnx.TensorProto.DataType.UINT32;
				case "float32": return ye.onnx.TensorProto.DataType.FLOAT;
				case "float64": return ye.onnx.TensorProto.DataType.DOUBLE;
				case "string": return ye.onnx.TensorProto.DataType.STRING;
				case "int64": return ye.onnx.TensorProto.DataType.INT64;
				case "uint64": return ye.onnx.TensorProto.DataType.UINT64;
				default: throw Error(`unsupported data type: ${e}`);
			}
		}
		static tensorDimsFromProto(e) {
			return e.map((e) => Wt.isLong(e) ? e.toNumber() : e);
		}
		static tensorValueTypeFromProto(t) {
			return {
				tensorType: e.tensorDataTypeFromProto(t.elemType),
				shape: { dims: e.tensorDimsFromProto(t.shape.dim.map((e) => e.dimValue)) }
			};
		}
		static tensorDimsFromORTFormat(e) {
			let t = [];
			for (let n = 0; n < e.dimsLength(); n++) t.push(nt.longToNumber(e.dims(n)));
			return t;
		}
		static tensorAttributesFromORTFormat(e) {
			let t = [];
			for (let n = 0; n < e.attributesLength(); n++) t.push(e.attributes(n));
			return t;
		}
	}, nt = class {
		static longToNumber(e, t) {
			return Wt.isLong(e) ? e.toNumber() : e instanceof O.Long ? Wt.fromValue({
				low: e.low,
				high: e.high,
				unsigned: t ?? !1
			}).toNumber() : e;
		}
		static isLong(e) {
			return Wt.isLong(e) || e instanceof O.Long;
		}
	}, U = class e {
		static size(t) {
			return e.getSizeFromDimensionRange(t, 0, t.length);
		}
		static sizeFromDimension(t, n) {
			if (n < 0 || n > t.length) throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);
			return e.getSizeFromDimensionRange(t, n, t.length);
		}
		static sizeToDimension(t, n) {
			if (n < 0 || n > t.length) throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);
			return e.getSizeFromDimensionRange(t, 0, n);
		}
		static getSizeFromDimensionRange(e, t, n) {
			let r = 1;
			for (let i = t; i < n; i++) {
				if (e[i] <= 0) throw Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");
				r *= e[i];
			}
			return r;
		}
		static computeStrides(e) {
			let t = e.length;
			if (t === 0) return [];
			if (t === 1) return [1];
			let n = Array(t);
			n[t - 1] = 1, n[t - 2] = e[t - 1];
			for (let r = t - 3; r >= 0; --r) n[r] = n[r + 1] * e[r + 1];
			return n;
		}
		static transpose(e) {
			return e.slice().reverse();
		}
		static indicesToOffset(e, t, n) {
			n === void 0 && (n = e.length);
			let r = 0;
			for (let i = 0; i < n; ++i) r += t[i] * e[i];
			return r;
		}
		static offsetToIndices(e, t) {
			let n = t.length;
			if (n === 0) return [];
			if (n === 1) return [e * t[0]];
			let r = Array(t.length);
			for (let n = 0; n < r.length - 1; ++n) r[n] = Math.floor(e / t[n]), e -= r[n] * t[n];
			return r[r.length - 1] = e, r;
		}
		static normalizeAxis(e, t) {
			if (e < -t && e >= t) throw Error("unsupported axis for this operation.");
			return e < 0 ? e + t : e;
		}
		static normalizeAxes(e, t) {
			return e.map((e) => this.normalizeAxis(e, t));
		}
		static incrementIndex(e, t, n) {
			if (t.length === 0 || e.length === 0) throw Error("Index incrementing unsupported for scalar Tensor");
			if (n === void 0) n = t.length;
			else if (n <= 0 || n > t.length) throw Error("Incorrect axis to increment on");
			for (let r = n - 1; r >= 0 && (e[r]++, !(e[r] < t[r])); --r) e[r] = 0;
		}
		static calculateReshapedDims(t, n) {
			if (n.length === 0) {
				if (t.length === 0 || e.size(t) === 1) return [];
				throw Error("cannot reshape to a scalar Tensor");
			}
			let r = n.length, i = Array(r), a = -1, o = 1;
			for (let e = 0; e < r; e++) {
				if (n[e] < -1) throw Error("a dimension in shape hints cannot be less than -1");
				if (n[e] === -1) {
					if (a !== -1) throw Error("at most one dimension in shape hints can be -1");
					a = e;
				} else {
					if (n[e] === 0) {
						if (e >= t.length) throw Error("the dimension with value zero exceeds the dimension size of the input tensor");
						i[e] = t[e];
					} else i[e] = n[e];
					o *= i[e];
				}
			}
			let s = e.size(t);
			if (a !== -1) {
				if (s % o !== 0) throw Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${t}] Output shape: [${n}]`);
				i[a] = s / o;
			} else if (o !== s) throw Error("reshapedDims and originalDims don't have matching sizes");
			return i;
		}
		static sortBasedOnPerm(e, t) {
			return t ? t.map((t) => e[t]) : e.slice().reverse();
		}
		static padShape(e, t) {
			let n = e.length;
			return e.map((e, r) => e + t[r] + t[r + n]);
		}
		static areEqual(e, t) {
			return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
		}
		static validateDimsAndCalcSize(e) {
			if (e.length > 6) throw TypeError("Only rank 0 to 6 is supported for tensor shape.");
			let t = 1;
			for (let n of e) {
				if (!Number.isInteger(n)) throw TypeError(`Invalid shape: ${n} is not an integer`);
				if (n < 0 || n > 2147483647) throw TypeError(`Invalid shape: length ${n} is not allowed`);
				t *= n;
			}
			return t;
		}
		static flattenShape(e, t) {
			t < 0 && (t += e.length);
			let n = e.reduce((e, t) => e * t, 1), r = e.slice(t).reduce((e, t) => e * t, 1);
			return [n / r, r];
		}
		static squeezeShape(t, n) {
			let r = [];
			n = e.normalizeAxes(n, t.length);
			for (let e = 0; e < t.length; e++) {
				let i = n.indexOf(e) >= 0;
				if (i && t[e] !== 1) throw Error("squeeze an axis of size different than 1");
				(n.length === 0 && t[e] > 1 || n.length > 0 && !i) && r.push(t[e]);
			}
			return r;
		}
		static unsqueezeShape(t, n) {
			let r = Array(t.length + n.length);
			r.fill(0);
			for (let t = 0; t < n.length; t++) {
				let i = e.normalizeAxis(n[t], r.length);
				if (i >= r.length) throw Error("'axes' has an out of range axis");
				if (r[i] !== 0) throw Error("'axes' has a duplicate axis");
				r[i] = 1;
			}
			let i = 0;
			for (let e = 0; e < r.length; e++) r[e] === 0 && (r[e] = t[i++]);
			if (i !== t.length) throw Error("the unsqueezed dimension could not be established");
			return r;
		}
	}, un = class e {
		static splitShape(t, n, r, i) {
			if (r.length === 0) {
				if (!i) throw Error("need to know number of outputs when the 'split' attribute is not specified");
				e.determineSplit(t[n], i, r);
			}
			let a = [], o = [0];
			for (let e = 0; e < r.length; ++e) {
				e !== 0 && o.push(o[e - 1] + r[e - 1]);
				let i = t.slice();
				i[n] = r[e], a.push(i);
			}
			return [a, o];
		}
		static determineSplit(e, t, n) {
			if (e % t !== 0) throw Error("cannot split tensor to equal sized parts");
			for (let r = 0; r < t; ++r) n.push(e / t);
		}
	}, dr = class e {
		static adjustPoolAttributes(e, t, n, r, i, a) {
			if (!e && n.length !== t.length - 2) throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");
			if (e) for (let e = 0; e < t.length - 2; e++) e >= n.length ? n.push(t[e + 2]) : n[e] = t[e + 2];
			for (let e = 0; e < n.length; e++) if (e < r.length) {
				if (r[e] < 0) throw Error("strides should be greater than or equal to 1");
			} else r.push(1);
			for (let e = 0; e < n.length; e++) if (e < i.length) {
				if (i[e] < 0) throw Error("dilations should be greater than or equal to 1");
			} else i.push(1);
			for (let e = 0; e < n.length * 2; e++) if (e < a.length) {
				if (a[e] < 0) throw Error("pad should be greater than or equal to 1");
			} else a.push(0);
			for (let e = 0; e < n.length; e++) {
				if (n[e] <= 0) throw Error("kernel shapes need to be greater than 0");
				if (a[e] >= n[e] || a[e + n.length] >= n[e]) throw Error("pads should be smaller than kernel");
			}
		}
		static adjustPadsBasedOnAutoPad(t, n, r, i, a, o) {
			if (o) {
				if (a.length !== 2 * (t.length - 2)) throw Error("length of pads should be twice the length of data dimensions");
				if (n.length !== t.length - 2) throw Error("length of strides should be the length of data dimensions");
				if (i.length !== t.length - 2) throw Error("length of kernel shapes should be the length of data dimensions");
				for (let s = 0; s < t.length - 2; s++) e.adjustPadAndReturnShape(t[s + 2], n[s], r[s], i[s], a, s, s + t.length - 2, o);
			}
		}
		static computePoolOutputShape(t, n, r, i, a, o, s) {
			if (n.length <= 0) throw Error("input shape must be of size greater than 0");
			let c = [n[0], n[1]];
			return e.computeShapeHelper(t, n, c, r, i, a, o, s), c;
		}
		static computeConvOutputShape(t, n, r, i, a, o, s) {
			if (t.length <= 0 || n.length <= 0) throw Error("invalid input tensor dims or invalid filter tensor dims");
			let c = [t[0], n[0]];
			return e.computeShapeHelper(!1, t, c, r, i, a, o, s), c;
		}
		static computeShapeHelper(t, n, r, i, a, o, s, c) {
			if (t) for (let e = 0; e < n.length - 2; e++) r.push(1);
			else for (let t = 0; t < n.length - 2; t++) r.push(e.adjustPadAndReturnShape(n[t + 2], i[t], a[t], o[t], s, t, t + n.length - 2, c));
		}
		static adjustPadAndReturnShape(e, t, n, r, i, a, o, s) {
			let c = n * (r - 1) + 1;
			if (s && s !== "NOTSET") switch (s) {
				case "VALID": return i[a] = 0, i[o] = 0, Math.floor((e - c) / t + 1);
				case "SAME_LOWER":
				case "SAME_UPPER":
					if (n !== 1) throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");
					{
						let n = ((e + t - 1) / t - 1) * t + r - e;
						return i[a] = Math.floor(s === "SAME_LOWER" ? (n + 1) / 2 : n / 2), i[o] = n - i[a], Math.floor((e + n - r) / t + 1);
					}
				default: throw Error("Unsupported AutoPad type");
			}
			else return Math.floor((e + i[a] + i[o] - c) / t + 1);
		}
	}, hr = -34028234663852886e22, mr = 34028234663852886e22;
});
function jd(e) {
	switch (e) {
		case "bool":
		case "int8":
		case "uint8": return 1;
		case "int16":
		case "uint16": return 2;
		case "int32":
		case "uint32":
		case "float32": return 4;
		case "float64": return 8;
		default: throw Error(`cannot calculate sizeof() on type ${e}`);
	}
}
function ku(e) {
	switch (e) {
		case re.onnx.TensorProto.DataType.UINT8:
		case re.onnx.TensorProto.DataType.INT8:
		case re.onnx.TensorProto.DataType.BOOL: return 1;
		case re.onnx.TensorProto.DataType.UINT16:
		case re.onnx.TensorProto.DataType.INT16: return 2;
		case re.onnx.TensorProto.DataType.FLOAT:
		case re.onnx.TensorProto.DataType.INT32:
		case re.onnx.TensorProto.DataType.UINT32: return 4;
		case re.onnx.TensorProto.DataType.INT64:
		case re.onnx.TensorProto.DataType.DOUBLE:
		case re.onnx.TensorProto.DataType.UINT64: return 8;
		default: throw Error(`cannot calculate sizeof() on type ${re.onnx.TensorProto.DataType[e]}`);
	}
}
function Yd(e, t) {
	return new (Ru(t))(e);
}
function Ru(e) {
	switch (e) {
		case "bool":
		case "uint8": return Uint8Array;
		case "int8": return Int8Array;
		case "int16": return Int16Array;
		case "uint16": return Uint16Array;
		case "int32": return Int32Array;
		case "uint32": return Uint32Array;
		case "int64": return BigInt64Array;
		case "float32": return Float32Array;
		case "float64": return Float64Array;
		default: throw Error("unspecified error");
	}
}
function bi(e, t) {
	if (t === re.onnx.TensorProto.DataType.INT64 || t === mi.TensorDataType.INT64) {
		if (e.greaterThanOrEqual(2147483648) || e.lessThan(-2147483648)) throw TypeError("int64 is not supported");
	} else if (t === re.onnx.TensorProto.DataType.UINT32 || t === mi.TensorDataType.UINT32 || t === re.onnx.TensorProto.DataType.UINT64 || t === mi.TensorDataType.UINT64) {
		if (e.greaterThanOrEqual(4294967296) || e.lessThan(0)) throw TypeError("uint64 is not supported");
	} else throw TypeError(`not a LONG type: ${re.onnx.TensorProto.DataType[t]}`);
	return e.toNumber();
}
function Bu(e, t, n) {
	switch (t) {
		case re.onnx.TensorProto.DataType.BOOL:
		case re.onnx.TensorProto.DataType.UINT8: return e.getUint8(n);
		case re.onnx.TensorProto.DataType.INT8: return e.getInt8(n);
		case re.onnx.TensorProto.DataType.UINT16: return e.getUint16(n, !0);
		case re.onnx.TensorProto.DataType.INT16: return e.getInt16(n, !0);
		case re.onnx.TensorProto.DataType.FLOAT: return e.getFloat32(n, !0);
		case re.onnx.TensorProto.DataType.INT32: return e.getInt32(n, !0);
		case re.onnx.TensorProto.DataType.UINT32: return e.getUint32(n, !0);
		case re.onnx.TensorProto.DataType.INT64: return bi(Wt.fromBits(e.getUint32(n, !0), e.getUint32(n + 4, !0), !1), t);
		case re.onnx.TensorProto.DataType.DOUBLE: return e.getFloat64(n, !0);
		case re.onnx.TensorProto.DataType.UINT64: return bi(Wt.fromBits(e.getUint32(n, !0), e.getUint32(n + 4, !0), !0), t);
		default: throw Error(`cannot read from DataView for type ${re.onnx.TensorProto.DataType[t]}`);
	}
}
var Nu, re, mi, Ce, br = E(() => {
	Nu = Er(Ss()), ei(), nn(), re = Er($r()), fe(), mi = W.experimental.fbs, Ce = class e {
		constructor(e, t, n, r, i, a = Nu.Guid.create()) {
			this.dims = e, this.type = t, this.dataProvider = n, this.asyncDataProvider = r, this.cache = i, this.dataId = a, this.size = U.validateDimsAndCalcSize(e);
			let o = this.size, s = n === void 0 && r === void 0 && i === void 0;
			if (i !== void 0 && i.length !== o) throw RangeError("Input dims doesn't match data length.");
			if (t === "string") {
				if (i !== void 0 && (!Array.isArray(i) || !i.every((e) => typeof e == "string"))) throw TypeError("cache should be a string array");
				s && (this.cache = Array(o));
			} else {
				if (i !== void 0) {
					let e = Ru(t);
					if (!(i instanceof e)) throw TypeError(`cache should be type ${e.name}`);
				}
				if (s) {
					let e = new ArrayBuffer(o * jd(t));
					this.cache = Yd(e, t);
				}
			}
		}
		get data() {
			if (this.cache === void 0) {
				let e = this.dataProvider(this.dataId);
				if (e.length !== this.size) throw Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");
				this.cache = e;
			}
			return this.cache;
		}
		get stringData() {
			if (this.type !== "string") throw TypeError("data type is not string");
			return this.data;
		}
		get integerData() {
			switch (this.type) {
				case "uint8":
				case "int8":
				case "uint16":
				case "int16":
				case "int32":
				case "uint32":
				case "bool": return this.data;
				default: throw TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)");
			}
		}
		get floatData() {
			switch (this.type) {
				case "float32":
				case "float64": return this.data;
				default: throw TypeError("data type is not float (float32, float64)");
			}
		}
		get numberData() {
			if (this.type !== "string") return this.data;
			throw TypeError("type cannot be non-number (string)");
		}
		get(e) {
			return this.data[U.indicesToOffset(e, this.strides)];
		}
		set(e, t) {
			this.data[U.indicesToOffset(e, this.strides)] = t;
		}
		async getData() {
			return this.cache === void 0 && (this.cache = await this.asyncDataProvider(this.dataId)), this.cache;
		}
		get strides() {
			return this._strides ||= U.computeStrides(this.dims), this._strides;
		}
		static fromProto(t) {
			if (!t) throw Error("cannot construct Value from an empty tensor");
			let n = Ve.tensorDataTypeFromProto(t.dataType), r = new e(Ve.tensorDimsFromProto(t.dims), n);
			if (n === "string") t.stringData.forEach((e, t) => {
				r.data[t] = ln(e);
			});
			else if (t.rawData && typeof t.rawData.byteLength == "number" && t.rawData.byteLength > 0) {
				let e = r.data, n = new DataView(t.rawData.buffer, t.rawData.byteOffset, t.rawData.byteLength), i = ku(t.dataType), a = t.rawData.byteLength / i;
				if (t.rawData.byteLength % i !== 0) throw Error("invalid buffer length");
				if (e.length !== a) throw Error("buffer length mismatch");
				for (let r = 0; r < a; r++) e[r] = Bu(n, t.dataType, r * i);
			} else {
				let e;
				switch (t.dataType) {
					case re.onnx.TensorProto.DataType.FLOAT:
						e = t.floatData;
						break;
					case re.onnx.TensorProto.DataType.INT32:
					case re.onnx.TensorProto.DataType.INT16:
					case re.onnx.TensorProto.DataType.UINT16:
					case re.onnx.TensorProto.DataType.INT8:
					case re.onnx.TensorProto.DataType.UINT8:
					case re.onnx.TensorProto.DataType.BOOL:
						e = t.int32Data;
						break;
					case re.onnx.TensorProto.DataType.INT64:
						e = t.int64Data;
						break;
					case re.onnx.TensorProto.DataType.DOUBLE:
						e = t.doubleData;
						break;
					case re.onnx.TensorProto.DataType.UINT32:
					case re.onnx.TensorProto.DataType.UINT64:
						e = t.uint64Data;
						break;
					default: throw Error("unspecific error");
				}
				if (e == null) throw Error("failed to populate data from a tensorproto value");
				let n = r.data;
				if (n.length !== e.length) throw Error("array length mismatch");
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					Wt.isLong(i) ? n[r] = bi(i, t.dataType) : n[r] = i;
				}
			}
			return r;
		}
		static fromData(t, n, r) {
			return new e(n, r, void 0, void 0, t);
		}
		static fromOrtTensor(t) {
			if (!t) throw Error("cannot construct Value from an empty tensor");
			let n = Ve.tensorDimsFromORTFormat(t), r = Ve.tensorDataTypeFromProto(t.dataType()), i = new e(n, r);
			if (r === "string") for (let e = 0; e < t.stringDataLength(); e++) i.data[e] = t.stringData(e);
			else if (t.rawDataArray() && typeof t.rawDataLength() == "number" && t.rawDataLength() > 0) {
				let e = i.data, n = new DataView(t.rawDataArray().buffer, t.rawDataArray().byteOffset, t.rawDataLength()), r = ku(t.dataType()), a = t.rawDataLength() / r;
				if (t.rawDataLength() % r !== 0) throw Error("invalid buffer length");
				if (e.length !== a) throw Error("buffer length mismatch");
				for (let i = 0; i < a; i++) e[i] = Bu(n, t.dataType(), i * r);
			}
			return i;
		}
	};
});
function q(e) {
	return e === 1 ? Xd : Kd;
}
function Mu(e) {
	let t = q(e);
	return `${t.version}
      precision highp float;
      ${t.attribute} vec3 position;
      ${t.attribute} vec2 textureCoord;

      ${t.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`;
}
function Gu(e) {
	let t = q(e);
	return `${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFrag} vec2 TexCoords;
    ${t.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `;
}
function Uu(e, t) {
	return `
  void main() {
    int indices[${t}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${q(e).output} = result;
  }
  `;
}
var Xd, Kd, xe = E(() => {
	Xd = {
		version: "",
		attribute: "attribute",
		varyingVertex: "varying",
		varyingFrag: "varying",
		texture2D: "texture2D",
		output: "gl_FragColor",
		outputDeclaration: ""
	}, Kd = {
		version: "#version 300 es",
		attribute: "in",
		varyingVertex: "out",
		varyingFrag: "in",
		texture2D: "texture",
		output: "outputColor",
		outputDeclaration: "out vec4 outputColor;"
	};
}), ae = E(() => {});
async function gi(e, t = (e) => 0, n) {
	return new Promise((r, i) => {
		let a = 0, o = () => {
			if (e()) {
				r();
				return;
			}
			a++;
			let s = t(a);
			if (n != null && a >= n) {
				i();
				return;
			}
			setTimeout(o, s);
		};
		o();
	});
}
function Kn(e) {
	return kr(typeof e < "u" && e.length !== 0, () => "empty string found for sampler name"), "get" + e.charAt(0).toUpperCase() + e.slice(1);
}
function zu(e) {
	return kr(typeof e < "u" && e.length !== 0, () => "empty string found for sampler name"), "get" + e.charAt(0).toUpperCase() + e.slice(1) + "AtOutCoords";
}
function Br(e, t) {
	let n = JSON.parse(JSON.stringify(e));
	return n = t, n;
}
function Nr(e, t) {
	return t.map((t) => e[t]).join(", ");
}
function Je(e) {
	if (e <= 1) return "int";
	if (e === 2) return "ivec2";
	if (e === 3) return "ivec3";
	if (e === 4) return "ivec4";
	if (e === 5) return "ivec5";
	if (e === 6) return "ivec6";
	throw Error(`GPU for rank ${e} is not yet supported`);
}
function Ot(e = 6) {
	return [
		"x",
		"y",
		"z",
		"w",
		"u",
		"v"
	].slice(0, e);
}
var kt = E(() => {
	fe();
});
function Jd(e, t) {
	return Ot(t).map((t) => `${e}.${t}`);
}
function Rr(e, t) {
	return t === 1 ? [e] : Jd(e, t);
}
function Bt() {
	return "\n    float getChannel(vec4 frag, int dim) {\n      int modCoord = imod(dim, 2);\n      return modCoord == 0 ? frag.r : frag.g;\n    }\n\n    float getChannel(vec4 frag, vec2 innerDims) {\n      vec2 modCoord = mod(innerDims, 2.);\n      return modCoord.x == 0. ?\n        (modCoord.y == 0. ? frag.r : frag.g) :\n        (modCoord.y == 0. ? frag.b : frag.a);\n    }\n  ";
}
var gr = E(() => {
	kt();
});
function Qd(e, t, n) {
	if (e === 0) return "false";
	if (e === 1) return `rc > ${t[0]}`;
	let r = "";
	for (let i = e - 2; i < e; i++) r += `${n[i]} >= ${t[i - e + 2]}`, i < e - 1 && (r += "||");
	return r;
}
function eh(e, t) {
	let n = e.length;
	if (n === 0) return "getA(), 0, 0, 0";
	if (n === 1) return `getA(rc),
            rc + 1 >= ${e[0]} ? 0. : getA(rc + 1),
            0, 0`;
	let r = "r, c", i = "r, cp1", a = "rp1, c", o = "rp1, cp1", s = "";
	if (n > 2) for (let e = 0; e < n - 2; ++e) s += `${t[e]},`;
	return `getA(${s}r, c),
          rEdge ? 0. : getA(${s}rp1, c),
          cEdge ? 0. : getA(${s}r, cp1),
          rEdge || cEdge ? 0. : getA(${s}rp1, cp1)`;
}
function th(e, t, n, r) {
	return e === 0 || e === 1 ? "" : `
    int r = ${t[e - 2]};
    int c = ${t[e - 1]};
    int rp1 = ${t[e - 2]} + 1;
    int cp1 = ${t[e - 1]} + 1;
    bool rEdge = rp1 >= ${r};
    bool cEdge = cp1 >= ${n};
    `;
}
var Vu, Zd, Wu, Hu = E(() => {
	xe(), ae(), kt(), gr(), Vu = {
		name: "pack",
		inputNames: ["A"],
		inputTypes: [1]
	}, Zd = (e, t) => {
		let n = q(e.session.backend.glContext.version), r = t.dims, i = r.length, a = t.dims.length, o = Je(a), s = Rr("rc", a), c = th(a, s, r[r.length - 2], r[r.length - 1]), l;
		l = i === 0 ? [1, 1] : i === 1 ? [r[0], 1] : [r[a - 1], r[a - 2]];
		let u = Qd(a, l, s), d = eh(r, s), f = `
        void main() {
          ${o} rc = getOutputCoords();

          if(${u}) {
            ${n.output} = vec4(0);
          } else {
            ${c}

            ${n.output} = vec4(${d});
          }
        }
      `;
		return {
			...Vu,
			hasMain: !0,
			output: {
				dims: t.dims,
				type: t.type,
				textureType: 2
			},
			shaderSource: f
		};
	}, Wu = (e, t) => ({
		...Vu,
		get: () => Zd(e, t)
	});
});
function yi(e) {
	if (e.length === 0) return [
		1,
		1,
		1
	];
	let t = 1;
	for (let n = 0; n < e.length - 2; ++n) t *= e[n];
	return [
		t,
		e.length > 1 ? e[e.length - 2] : 1,
		e[e.length - 1]
	];
}
function ju(e, t) {
	let n = !1;
	return n = e.length === 0 || t.length === 0 ? !0 : e.length < 2 || t.length < 2 ? e[e.length - 1] === t[t.length - 1] : e[e.length - 1] === t[t.length - 1] && e[e.length - 2] === t[t.length - 2], n;
}
function oh(e) {
	let t = U.computeStrides(e), n = [
		"b",
		"r",
		"c"
	], r = "index";
	return `
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t.map((e, i) => `${`int ${n[i]} = ${r} / ${e}`}; ${i === t.length - 1 ? `int ${n[i + 1]} = ${r} - ${n[i]} * ${e}` : `index -= ${n[i]} * ${e}`};`).join("")}
      return ivec3(b, r, c);
    }
  `;
}
function ih(e) {
	let t = U.computeStrides(e);
	return `
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${t[0]} + coords.z * ${t[1]} + coords.y;
  }
`;
}
var rh, nh, qu, Yu = E(() => {
	fe(), xe(), ae(), gr(), rh = (e) => ({
		name: "Reshape (packed)",
		inputTypes: [2],
		inputNames: ["A"],
		cacheHint: `${e}`
	}), nh = (e, t, n, r) => {
		let i = t.dims, a = r, o = "";
		for (let e = 0; e < 4; e++) {
			let t = "";
			switch (e) {
				case 0:
					t = "outputCoords = rc;";
					break;
				case 1:
					t = "outputCoords = ivec3(rc.x, rc.y+1, rc.z);";
					break;
				case 2:
					t = "outputCoords = ivec3(rc.x, rc.y, rc.z+1);";
					break;
				case 3:
					t = "outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";
					break;
				default: throw Error();
			}
			o += `
        ${t}
        ${e > 0 ? "if(outputCoords.y < rows && outputCoords.z < cols){" : ""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${e > 0 ? "}" : ""}
      `;
		}
		let s = q(e.session.backend.glContext.version), c = `
      ${oh(i)}
      ${ih(a)}
      ${Bt()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${a[2]};
        int cols = ${a[1]};

        ${o}
        ${s.output} = result;
      }
    `;
		return {
			...n,
			output: {
				dims: a,
				type: t.type,
				textureType: 2
			},
			shaderSource: c,
			hasMain: !0
		};
	}, qu = (e, t, n) => {
		let r = rh(n);
		return {
			...r,
			get: () => nh(e, t, r, n)
		};
	};
}), Ti, Xu = E(() => {
	xe(), ae(), Ti = (e, t) => {
		let n = t.shape, r = q(e.session.backend.glContext.version), i = `
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${r.texture2D}(X,TexCoords).r;
      ${r.output} = encodeAsUint8(value);
    }`, a = {
			name: "Uint8Encode",
			inputTypes: [0],
			inputNames: ["X"],
			output: {
				dims: n,
				type: t.tensor.type,
				textureType: 3
			},
			shaderSource: i,
			hasMain: !0
		};
		return e.executeProgram(a, [t.tensor]);
	};
});
function sh(e, t) {
	if (e === 1) return "rc";
	let n = "";
	for (let r = 0; r < e; r++) n += t[r], r < e - 1 && (n += ",");
	return n;
}
var Ku, ah, Ju, Zu = E(() => {
	xe(), ae(), kt(), gr(), Ku = {
		name: "unpack",
		inputNames: ["A"],
		inputTypes: [2]
	}, ah = (e, t) => {
		let n = t.dims.length, r = Rr("rc", n), i = r.slice(-2), a = Je(n), o = Bt(), s = t.dims.length === 0 ? "" : sh(n, r), c = n <= 1 ? "rc" : `vec2(${i.join(",")})`, l = `
    ${o}
    void main() {
      ${a} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${s});

       ${q(e.session.backend.glContext.version).output} = vec4(getChannel(packedInput, ${c}), 0, 0, 0);
     }
   `;
		return {
			...Ku,
			hasMain: !0,
			output: {
				dims: t.dims,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Ju = (e, t) => ({
		...Ku,
		get: () => ah(e, t)
	});
}), Jn, fn, Zn, cn = E(() => {
	at(), Jn = class {
		constructor(e, t = 1) {
			if (t === 1) this.internalFormat = e.R32F, this.format = e.RED, this.textureType = e.FLOAT, this.channelSize = t;
			else if (t === 4) this.internalFormat = e.RGBA32F, this.format = e.RGBA, this.textureType = e.FLOAT, this.channelSize = t;
			else throw Error(`Invalid number of channels: ${t}`);
		}
		encode(e, t) {
			let n, r;
			return e.constructor !== Float32Array && (ce.warning("Encoder", "data was not of type Float32; creating new Float32Array"), r = new Float32Array(e)), t * this.channelSize > e.length ? (ce.warning("Encoder", "Source data too small. Allocating larger array"), r = e, n = this.allocate(t * this.channelSize), r.forEach((e, t) => n[t] = e)) : (r = e, n = r), n;
		}
		allocate(e) {
			return new Float32Array(e * 4);
		}
		decode(e, t) {
			return this.channelSize === 1 ? e.filter((e, t) => t % 4 == 0).subarray(0, t) : e.subarray(0, t);
		}
	}, fn = class {
		constructor(e, t = 1, n) {
			if (t !== 1 && t !== 4) throw Error(`Invalid number of channels: ${t}`);
			this.internalFormat = e.RGBA, this.format = e.RGBA, this.channelSize = t, this.textureType = n || e.FLOAT;
		}
		encode(e, t) {
			let n = e;
			return this.channelSize === 1 && (ce.verbose("Encoder", "Exploding into a larger array"), n = this.allocate(t), e.forEach((e, t) => n[t * 4] = e)), n;
		}
		allocate(e) {
			return new Float32Array(e * 4);
		}
		decode(e, t) {
			return this.channelSize === 1 ? e.filter((e, t) => t % 4 == 0).subarray(0, t) : e.subarray(0, t);
		}
	}, Zn = class {
		constructor(e, t = 1) {
			if (this.channelSize = 4, t === 1) this.internalFormat = e.ALPHA, this.format = e.ALPHA, this.textureType = e.UNSIGNED_BYTE, this.channelSize = t;
			else if (t === 4) this.internalFormat = e.RGBA, this.format = e.RGBA, this.textureType = e.UNSIGNED_BYTE, this.channelSize = t;
			else throw Error(`Invalid number of channels: ${t}`);
		}
		encode(e, t) {
			return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
		}
		allocate(e) {
			return new Uint8Array(e * this.channelSize);
		}
		decode(e, t) {
			if (e instanceof Uint8Array) return e.subarray(0, t);
			throw Error(`Invalid array type: ${e.constructor}`);
		}
	};
}), pn, Qu, xi, el = E(() => {
	fe(), ae(), pn = (e, t, n) => {
		let r = n === 0 || n === 1 ? 1 : 4, i = n === 2, a = n === 1 || n === 2, o = n === 4 ? t.length - 1 : void 0, s = n === 4 ? t.map((e, n) => n === t.length - 1 ? e * 4 : e) : void 0;
		return xi(e, t, r, s, {
			isPacked: i,
			reverseWH: a,
			breakAxis: o
		});
	}, Qu = (e, t, n) => {
		let r = pn(e, t, n);
		return [r.width, r.height];
	}, xi = (e, t, n = 1, r, i) => {
		let a = !!(i && i.isPacked), [o, s] = e.computeTextureWH(a && r || t, i), c = t.length, l = t.slice(0);
		if (c === 0 && (l = [1]), n === 1) r = t;
		else if (a) {
			if (n !== 4) throw Error("a packed texture must be 4-channel");
			r = t, c > 0 && (l[c - 1] = Math.ceil(l[c - 1] / 2)), c > 1 && (l[c - 2] = Math.ceil(l[c - 2] / 2));
		} else if (!r) throw Error("Unpacked shape is needed when using channels > 1");
		return {
			width: o,
			height: s,
			channels: n,
			isPacked: a,
			shape: l,
			strides: U.computeStrides(l),
			unpackedShape: r,
			reversedWH: i && i.reverseWH
		};
	};
}), lh, Qn, rl = E(() => {
	at(), br(), fe(), Hu(), Yu(), Xu(), Zu(), cn(), el(), ae(), lh = (e, t) => {
		let n = t.map((e) => `${e.unpackedShape.join(",")};${e.width}x${e.height}`).join("_"), r = e.name;
		return e.cacheHint && (r += "[" + e.cacheHint + "]"), r += ":" + n, r;
	}, Qn = class {
		constructor(e) {
			this.session = e, this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
		}
		calculateTextureWidthAndHeight(e, t) {
			return Qu(this.session.layoutStrategy, e, t);
		}
		executeProgram(e, t) {
			if (t.length < e.inputNames.length) throw Error(`Input size mustn't be less than ${e.inputNames.length}.`);
			if (e.inputNames.length !== e.inputTypes.length) throw Error("input names size does not match input types");
			let n = [];
			for (let r = 0; r < e.inputNames.length; ++r) n[r] = this.getOrCreateTextureData(t[r], e.inputTypes[r]);
			let r = lh(e, n), i = this.session.programManager.getArtifact(r), a = i ? i.programInfo : typeof e.get == "function" ? e.get() : e, o = pn(this.session.layoutStrategy, a.output.dims, a.output.textureType), s = this.createTextureData(o, a.output.type);
			return i || (i = this.session.programManager.build(a, n, s), this.session.programManager.setArtifact(r, i)), this.runProgram(i, n, s), s;
		}
		run(e, t) {
			return this.executeProgram(e, t).tensor;
		}
		runProgram(e, t, n) {
			for (let n = 0; n < t.length; ++n) if (!!t[n].isPacked != (e.programInfo.inputTypes[n] === 2)) throw Error(`input[${n}] property packed inconsistent`);
			if (!!n.isPacked != (e.programInfo.output.textureType === 2)) throw Error("output property packed inconsistent");
			this.session.programManager.run(e, t, n);
		}
		getOrCreateTextureData(e, t) {
			let n = this.getTextureData(e.dataId, t === 2);
			if (!n && (n = this.getTextureData(e.dataId, t !== 2), n)) return t === 2 ? this.pack(n) : this.unpack(n);
			if (!n) {
				let r = pn(this.session.layoutStrategy, e.dims, t);
				if (t === 4) {
					let n = e.dims;
					if (n.length === 4) {
						let r = [n[0], Math.ceil(n[1] * n[2] * n[3] / 4)], i = pn(this.session.layoutStrategy, r, t), a = e.numberData;
						if (n[1] * n[2] * n[3] % 4 != 0) {
							let t = n[0], r = n[1] * n[2] * n[3], i = Math.ceil(r * 1 / 4) * 4, o = t * i;
							a = new Float32Array(o);
							for (let n = 0; n < t; ++n) {
								let t = n * r, o = n * i + n % 1 * r;
								a.set(e.numberData.subarray(t, t + r), o);
							}
						}
						return this.createTextureData(i, e.type, a, e, 1);
					}
				}
				if (t === 2) {
					let t = xi(this.session.layoutStrategy, e.dims, 1, [], { reverseWH: !0 }), r = this.createTextureData(t, e.type, e.numberData, e, 1);
					n = this.pack(r);
				} else n = this.createTextureData(r, e.type, e.numberData, e, 1);
			}
			return n;
		}
		createTextureDataFromLayoutBindTensor(e, t, n, r) {
			return this.createTextureData(e, t, n, r, 1);
		}
		createTextureData(e, t, n, r, i) {
			ce.verbose("InferenceHandler", `Creating TextureData: layout:[${JSON.stringify(e)}]`);
			let a = this.session.textureManager.createTextureFromLayout(t, e, n, i);
			return this.createTextureDataFromTexture(e, t, a, r);
		}
		reshapeUnpacked(e, t) {
			let n = this.getOrCreateTextureData(e, 0), r = {
				channels: n.channels,
				height: n.height,
				width: n.width,
				shape: t.length === 0 ? [1] : t,
				strides: U.computeStrides(t),
				unpackedShape: t
			};
			return this.createTextureDataFromTexture(r, e.type, n.texture).tensor;
		}
		reshapePacked(e, t) {
			let n = this.getOrCreateTextureData(e, 2);
			if (ju(e.dims, t)) {
				let r = {
					channels: n.channels,
					height: n.height,
					width: n.width,
					shape: t.length === 0 ? [1] : t,
					strides: U.computeStrides(t),
					unpackedShape: t,
					isPacked: !0
				};
				return this.createTextureDataFromTexture(r, e.type, n.texture).tensor;
			}
			let r = yi(e.dims), i = yi(t), a = this.reshapePacked(e, r), o = this.run(qu(this, a, i), [a]);
			return this.reshapePacked(o, t);
		}
		cast(e, t) {
			let n = this.getOrCreateTextureData(e, 0);
			return this.createTextureDataFromTexture(n, t, n.texture).tensor;
		}
		createTextureDataFromTexture(e, t, n, r, i) {
			let a = {
				...e,
				tensor: r || new Ce(e.unpackedShape, t, (e) => this.readTexture(a), async (e) => this.readTextureAsync(a), void 0, i),
				texture: n
			};
			return this.setTextureData(a.tensor.dataId, a, e.isPacked), a;
		}
		getTextureData(e, t = !1) {
			return this.session.isInitializer(e) ? this.session.getTextureData(e, t) : t ? this.packedTextureDataCache.get(e) : this.unpackedTextureDataCache.get(e);
		}
		setTextureData(e, t, n = !1) {
			this.session.isInitializer(e) ? this.session.setTextureData(e, t, n) : (n ? this.packedTextureDataCache : this.unpackedTextureDataCache).set(e, t);
		}
		isTextureLayoutCached(e, t = !1) {
			return !!this.getTextureData(e.dataId, t);
		}
		dispose() {
			this.session.textureManager.clearActiveTextures(), this.packedTextureDataCache.forEach((e) => this.session.textureManager.releaseTexture(e)), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache.forEach((e) => this.session.textureManager.releaseTexture(e)), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
		}
		readTexture(e) {
			return e.isPacked ? this.readTexture(this.unpack(e)) : this.session.backend.glContext.isFloat32DownloadSupported ? this.session.textureManager.readTexture(e, e.tensor.type, e.channels) : this.session.textureManager.readUint8TextureAsFloat(Ti(this, e));
		}
		async readTextureAsync(e) {
			return e.isPacked ? this.readTextureAsync(this.unpack(e)) : this.session.backend.glContext.isFloat32DownloadSupported ? this.session.textureManager.readTextureAsync(e, e.tensor.type, e.channels) : this.session.textureManager.readUint8TextureAsFloat(Ti(this, e));
		}
		pack(e) {
			return this.executeProgram(Wu(this, e.tensor), [e.tensor]);
		}
		unpack(e) {
			return this.executeProgram(Ju(this, e.tensor), [e.tensor]);
		}
	};
}), wi, ee, Ge = E(() => {
	wi = class {
		constructor(e) {
			Object.assign(this, e);
		}
		get cacheKey() {
			return this.key ||= Object.getOwnPropertyNames(this).sort().map((e) => `${this[e]}`).join(";"), this.key;
		}
	}, ee = (e) => new wi(e);
}), nl, ol, il, fh, ch, al = E(() => {
	Ge(), xe(), ae(), nl = {
		name: "BatchNormalization",
		inputNames: [
			"A",
			"Scale",
			"B",
			"Mean",
			"Variance"
		],
		inputTypes: [
			0,
			0,
			0,
			0,
			0
		]
	}, ol = (e, t, n) => (ch(t), [e.run({
		...nl,
		cacheHint: n.cacheKey,
		get: () => fh(e, t, n)
	}, t)]), il = (e) => {
		let t = e.attributes.getFloat("epsilon", 1e-5), n = e.attributes.getFloat("momentum", .9), r = e.attributes.getInt("spatial", 1);
		return ee({
			epsilon: t,
			momentum: n,
			spatial: r
		});
	}, fh = (e, t, n) => {
		let r = q(e.session.backend.glContext.version), i = t[0].dims.length, [a, o] = e.calculateTextureWidthAndHeight(t[1].dims, 0), s = `
  float process(int[${i}] indices) {
    vec2 position = offsetToCoords(indices[1], ${a}, ${o});
    float scale = getColorAsFloat(${r.texture2D}(Scale, position));
    float mean = getColorAsFloat(${r.texture2D}(Mean, position));
    float variance = getColorAsFloat(${r.texture2D}(Variance, position));
    float b = getColorAsFloat(${r.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${n.epsilon})) ) + b;
  }`;
		return {
			...nl,
			output: {
				dims: t[0].dims,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: s
		};
	}, ch = (e) => {
		if (!e || e.length !== 5) throw Error("BatchNormalization requires 5 inputs.");
		let t = e[0], n = e[1], r = e[2], i = e[3], a = e[4];
		if (t.dims.length < 3 || n.dims.length !== 1 || r.dims.length !== 1 || i.dims.length !== 1 || a.dims.length !== 1 || n.dims[0] !== t.dims[1] || r.dims[0] !== t.dims[1] || i.dims[0] !== t.dims[1] || a.dims[0] !== t.dims[1]) throw Error("invalid input shape.");
		if (t.type !== "float32" && t.type !== "float64" || n.type !== "float32" && n.type !== "float64" || r.type !== "float32" && r.type !== "float64" || i.type !== "float32" && i.type !== "float64" || a.type !== "float32" && a.type !== "float64") throw Error("invalid input tensor types.");
	};
}), eo, ft, R, dn, to, Ht = E(() => {
	eo = class {
		constructor(e, t, n, r) {
			this.glContext = e, this.programInfo = t, this.inputTextureLayouts = n, this.outputTextureLayout = r;
		}
	}, ft = class {
		constructor(e) {
			this.context = e;
		}
	}, R = class {
		constructor(e, t) {
			this.routineBody = e, this.dependencies = t;
		}
	}, dn = class {
		constructor(e, t, n) {
			this.name = e, n ? this.dependencies = n : this.dependencies = [], t && (this.routineBody = t);
		}
		addDependency(e) {
			e && this.dependencies.push(e);
		}
	}, to = class {
		static returnOrderedNodes(e) {
			if (!e || e.length === 0) return [];
			if (e.length === 1) return e;
			let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = [];
			return this.createOrderedNodes(e, t, n, r), r;
		}
		static createOrderedNodes(e, t, n, r) {
			for (let i = 0; i < e.length; ++i) this.dfsTraverse(e[i], t, n, r);
		}
		static dfsTraverse(e, t, n, r) {
			if (!e || n.has(e.name)) return;
			if (t.has(e.name)) throw Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");
			t.add(e.name);
			let i = e.dependencies;
			if (i && i.length > 0) for (let e = 0; e < i.length; ++e) this.dfsTraverse(i[e], t, n, r);
			r.push(e), n.add(e.name), t.delete(e.name);
		}
	};
});
function dh() {
	let e = "add_";
	return {
		body: `
  float ${e}(float a, float b) {
    return a + b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,
		name: e,
		type: 0
	};
}
function hh() {
	let e = "div_";
	return {
		body: `
  float ${e}(float a, float b) {
    return a / b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,
		name: e,
		type: 0
	};
}
function mh() {
	let e = "mul_";
	return {
		body: `
  float ${e}(float a, float b) {
    return a * b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,
		name: e,
		type: 0
	};
}
function bh() {
	let e = "sub_";
	return {
		body: `
  float ${e}(float a, float b) {
    return a - b;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,
		name: e,
		type: 0
	};
}
function gh() {
	let e = "equal_";
	return {
		body: `
  float ${e}(float a, float b) {
    return float(a == b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,
		name: e,
		type: 0
	};
}
function yh() {
	let e = "greater_";
	return {
		body: `
  float ${e}(float a, float b) {
    return float(a > b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,
		name: e,
		type: 0
	};
}
function Th() {
	let e = "less_";
	return {
		body: `
  float ${e}(float a, float b) {
    return float(a < b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,
		name: e,
		type: 0
	};
}
function xh() {
	let e = "and_";
	return {
		body: `
  float ${e}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,
		name: e,
		type: 0
	};
}
function wh() {
	let e = "or_";
	return {
		body: "\n  float or_(float a, float b) {\n    return float( bool(a) || bool(b) );\n  }\n  vec4 or_(vec4 v1, vec4 v2) {\n    bvec4 b1 = bvec4(v1);\n    bvec4 b2 = bvec4(v2);\n    return vec4( b1.r || b2.r ,\n                b1.g || b2.g,\n                b1.b || b2.b,\n                b1.a || b2.a );\n  }\n  ",
		name: "or_",
		type: 0
	};
}
function vh() {
	let e = "xor_";
	return {
		body: `
  float ${e}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,
		name: e,
		type: 0
	};
}
function _h() {
	return Ih("pow");
}
function Oh() {
	let e = "prelu_";
	return {
		body: `
  float ${e}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,
		name: e,
		type: 0
	};
}
function Ih(e) {
	let t = `${e}_`;
	return {
		body: `
  float ${t}(float a, float b) {
    return ${e}(a, b);
  }
  vec4 ${t}(vec4 v1, vec4 v2) {
    return ${e}(v1, v2);
  }
  `,
		name: t,
		type: 0
	};
}
var ct, Sh, sl, ul, ll, fl, cl, pl, dl, hl, ml, bl, gl, yl, Tl = E(() => {
	fe(), Ht(), xe(), ae(), ct = (e, t, n, r = t[0].type, i) => {
		let a = e.session.pack ? 2 : 0;
		return {
			name: n.name,
			inputNames: ["A", "B"],
			inputTypes: [a, a],
			cacheHint: i,
			get: () => Sh(e, t, n, r)
		};
	}, Sh = (e, t, n, r = t[0].type) => {
		let i = e.session.pack ? 2 : 0, a = !U.areEqual(t[0].dims, t[1].dims), o = t[0].dims, s = e.session.pack;
		if (a) {
			let a = Ke.calcShape(t[0].dims, t[1].dims, !1);
			if (!a) throw Error("Can't perform binary op on the given tensors");
			o = a;
			let c = o.length, l = t[0].dims.length === 0 ? 1 : t[0].dims.length, u = t[1].dims.length === 0 ? 1 : t[1].dims.length, d = t[0].dims.length === 0 ? "aindices[0] = 0;" : "bcastIndices_A(indices, aindices);", f = t[1].dims.length === 0 ? "bindices[0] = 0;" : "bcastIndices_B(indices, bindices);", p = q(e.session.backend.glContext.version), m = s ? `
      ${n.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${n.name}(a, b);
        ${p.output} = result;
      }` : `
      ${n.body}
      float process(int indices[${c}]) {
        int aindices[${l}];
        int bindices[${u}];
        ${d}
        ${f}
        return ${n.name}(_A(aindices), _B(bindices));
      }`;
			return {
				name: n.name,
				inputNames: ["A", "B"],
				inputTypes: [i, i],
				output: {
					dims: o,
					type: r,
					textureType: i
				},
				shaderSource: m,
				hasMain: s
			};
		}
		let c = q(e.session.backend.glContext.version), l = `
    ${n.body}
    void main() {
      vec4 v1 = ${c.texture2D}(A, TexCoords);
      vec4 v2 = ${c.texture2D}(B, TexCoords);
      vec4 result = ${n.name}(v1, v2);
      ${c.output} = result;
    }
    `;
		return {
			name: n.name,
			inputNames: ["A", "B"],
			inputTypes: [i, i],
			output: {
				dims: t[0].dims,
				type: r,
				textureType: i
			},
			shaderSource: l,
			hasMain: !0
		};
	}, sl = (e, t) => [e.run(ct(e, t, dh()), t)], ul = (e, t) => [e.run(ct(e, t, xh(), "bool"), t)], ll = (e, t) => [e.run(ct(e, t, hh()), t)], fl = (e, t) => [e.run(ct(e, t, gh(), "bool"), t)], cl = (e, t) => [e.run(ct(e, t, yh(), "bool"), t)], pl = (e, t) => [e.run(ct(e, t, Th(), "bool"), t)], dl = (e, t) => [e.run(ct(e, t, mh()), t)], hl = (e, t) => [e.run(ct(e, t, wh(), "bool"), t)], ml = (e, t) => [e.run(ct(e, t, _h()), t)], bl = (e, t) => [e.run(ct(e, t, Oh()), t)], gl = (e, t) => [e.run(ct(e, t, bh()), t)], yl = (e, t) => [e.run(ct(e, t, vh(), "bool"), t)];
}), xl, wl, Ph, vl = E(() => {
	fe(), xl = (e, t, n) => (Ph(t), [e.cast(t[0], n)]), wl = (e) => Ve.tensorDataTypeFromProto(e.attributes.getInt("to")), Ph = (e) => {
		if (!e || e.length !== 1) throw Error("Cast requires 1 input.");
		if (e[0].type === "string") throw Error("Invalid input type.");
	};
}), Eh, Dh, _l, ro, Ol = E(() => {
	xe(), ae(), kt(), gr(), Eh = (e, t) => ({
		name: "Concat (packed)",
		inputNames: Array.from({ length: e }, (e, t) => `X${t}`),
		inputTypes: Array(e).fill(2),
		cacheHint: t
	}), Dh = (e, t, n, r) => {
		let i = n[0].dims.slice();
		if (r >= i.length || r < -1 * i.length) throw Error("axis specified for concat doesn't match input dimensionality");
		r < 0 && (r = i.length + r);
		let a = i.slice(0);
		for (let e = 1; e < n.length; e++) {
			let t = n[e].dims.slice();
			for (let e = 0; e < i.length; e++) if (e === r) a[r] += t[e];
			else if (i[e] !== t[e]) throw Error("non concat dimensions must match");
		}
		let o = a.length, s = Rr("coords", o), c = Je(o), l = Bt(), u = n.map((e) => e.dims), d = Ot(o), f = Array(u.length - 1);
		f[0] = u[0][r];
		for (let e = 1; e < f.length; e++) f[e] = f[e - 1] + u[e][r];
		let p = d[r], m = d.slice(-2), h = d.join(), g = `if (${p} < ${f[0]}) {
        return getChannel(
            getX0(${h}), vec2(${m.join()}));
        }`;
		for (let e = 1; e < f.length; e++) {
			let t = f[e - 1];
			g += `
            if (${p} < ${f[e]}  && ${p} >= ${f[e - 1]}) {
              return getChannel(
                getX${e}(${ro(d, p, t)}),
                vec2(${ro(m, p, t)}));
            }`;
		}
		let _ = f.length, v = f[f.length - 1];
		g += `
            return getChannel(
              getX${_}(${ro(d, p, v)}),
              vec2(${ro(m, p, v)}));`;
		let y = q(e.session.backend.glContext.version), b = `
          ${l}
          float getValue(${d.map((e) => "int " + e)}) {
            ${g}
          }

          void main() {
            ${c} coords = getOutputCoords();
            int lastDim = coords.${d[o - 1]};
            coords.${d[o - 1]} = coords.${d[o - 2]};
            coords.${d[o - 2]} = lastDim;

            vec4 result = vec4(getValue(${s}), 0., 0., 0.);

            ${s[o - 1]} = ${s[o - 1]} + 1;
            if (${s[o - 1]} < ${a[o - 1]}) {
              result.g = getValue(${s});
            }

            ${s[o - 2]} = ${s[o - 2]} + 1;
            if (${s[o - 2]} < ${a[o - 2]}) {
              result.a = getValue(${s});
            }

            ${s[o - 1]} = ${s[o - 1]} - 1;
            if (${s[o - 2]} < ${a[o - 2]} &&
                ${s[o - 1]} < ${a[o - 1]}) {
              result.b = getValue(${s});
            }
            ${y.output} = result;
          }
        `;
		return {
			...t,
			output: {
				dims: a,
				type: n[0].type,
				textureType: 2
			},
			shaderSource: b,
			hasMain: !0
		};
	}, _l = (e, t, n) => {
		let r = Eh(t.length, n.cacheKey);
		return {
			...r,
			get: () => Dh(e, r, t, n.axis)
		};
	}, ro = (e, t, n) => {
		let r = e.indexOf(t);
		return e.map((e, t) => t === r ? `${e} - ${n}` : e).join();
	};
}), Il, Lh, Fh, Ch, Sl, $h, kh, Bh, Al, Nh, Pl = E(() => {
	Ge(), ae(), Ol(), Il = (e, t, n) => (Nh(t), e.session.pack && t[0].dims.length > 1 ? [e.run(_l(e, t, n), t)] : [e.run(Ch(e, t, n), t)]), Lh = (e, t) => ({
		name: "Concat",
		inputNames: Array.from({ length: e }, (e, t) => `X${t}`),
		inputTypes: Array(e).fill(0),
		cacheHint: t
	}), Fh = (e, t, n, r) => {
		let i = n[0].dims.slice();
		if (r >= i.length || r < -1 * i.length) throw Error("axis specified for concat doesn't match input dimensionality");
		r < 0 && (r = i.length + r);
		let a = i.slice(0);
		for (let e = 1; e < n.length; e++) {
			let t = n[e].dims.slice();
			for (let e = 0; e < i.length; e++) if (e === r) a[r] += t[e];
			else if (i[e] !== t[e]) throw Error("non concat dimensions must match");
		}
		let o = a.length, s = Array(n.length), c = 0;
		for (let e = 0; e < s.length; ++e) c += n[e].dims[r], s[e] = c;
		let l = "";
		l = n.length < 5 ? Sl(s) : $h(s);
		let u = `
        ${kh(n.length, o)}
        ${Bh(s)}
        ${l}
        float process(int indices[${o}]) {
          int textureIndex = getTextureWhereDataResides (indices[${r}]);

          if(textureIndex != 0) {
            indices[${r}] = indices[${r}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;
		return {
			...t,
			output: {
				dims: a,
				type: n[0].type,
				textureType: 0
			},
			shaderSource: u
		};
	}, Ch = (e, t, n) => {
		let r = Lh(t.length, n.cacheKey);
		return {
			...r,
			get: () => Fh(e, r, t, n.axis)
		};
	}, Sl = (e) => `int getTextureWhereDataResides(int index) {
      ${e.map((e, t) => `if(index<${e}) {return ${t};}
`).join("")}
    }`, $h = (e) => Sl(e), kh = (e, t) => {
		let n = [`float fetchDataFromCorrectTexture(int textureIndex, int indices[${t}]) {`];
		for (let t = 0; t < e; ++t) t === 0 ? n.push(`	if (textureIndex == ${t}) { return _X${t}(indices); }`) : t === e - 1 ? n.push(`	else { return _X${t}(indices); }`) : n.push(`	else if (textureIndex == ${t}) { return _X${t}(indices); }`);
		return n.push("	}"), n.join("\n");
	}, Bh = (e) => {
		let t = ["int getSizeInConcatAxisValueFromIndex(int index) {"];
		for (let n = 0; n < e.length; ++n) n === 0 ? t.push(`	if (index == ${n}) { return ${e[n]}; }`) : n === e.length - 1 ? t.push(`	else { return ${e[n]}; }`) : t.push(`	else if (index == ${n}) { return ${e[n]}; }`);
		return t.push("	}"), t.join("\n");
	}, Al = (e) => ee({ axis: e.attributes.getInt("axis") }), Nh = (e) => {
		if (!e || e.length < 1) throw Error("too few inputs");
		let t = e[0].type, n = e[0].dims.length;
		if (t === "string") throw Error("string tensor is not supported yet");
		for (let r of e) {
			if (r.type !== t) throw Error("input tensors should be one type");
			if (r.dims.length !== n) throw Error("input tensors should have the same shape");
		}
	};
});
function Rh() {
	return pt("abs");
}
function Mh() {
	return pt("acos");
}
function Gh() {
	return pt("asin");
}
function Uh() {
	return pt("atan");
}
function zh() {
	return pt("ceil");
}
function Vh() {
	return pt("cos");
}
function Wh(e) {
	let t = "elu";
	return {
		body: `
  const float alpha = float(${e});

  float elu_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 elu_(vec4 v) {
    return vec4(elu_(v.x), elu_(v.y), elu_(v.z), elu_(v.w));
  }
  `,
		name: "elu",
		type: 0
	};
}
function Hh() {
	return pt("exp");
}
function qh() {
	return pt("floor");
}
function vi(e, t) {
	let n = "clip";
	return {
		body: `
  const float min = float(${e});
  const float max = float(${t});

  float ${n}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${n}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,
		name: n,
		type: 0
	};
}
function jh() {
	let e = "indentity";
	return {
		body: `
  float ${e}_(float a) {
    return a;
  }
  vec4 ${e}_(vec4 v) {
    return v;
  }
  `,
		name: e,
		type: 0
	};
}
function Yh(e) {
	let t = "leakyRelu";
	return {
		body: `
  const float alpha = float(${e});

  float ${t}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${t}_(vec4 v) {
    return vec4(${t}_(v.x), ${t}_(v.y), ${t}_(v.z), ${t}_(v.w));
  }
  `,
		name: t,
		type: 0
	};
}
function Xh() {
	return pt("log");
}
function Kh() {
	let e = "neg";
	return {
		body: "\n  float neg_(float a) {\n    return -a;\n  }\n  vec4 neg_(vec4 v) {\n    return -v;\n  }\n  ",
		name: "neg",
		type: 0
	};
}
function Jh() {
	let e = "not";
	return {
		body: "\n  float not_(float a) {\n    return float( ! bool(a) );\n  }\n  bool not_(bool a) {\n    return !a;\n  }\n  vec4 not_(vec4 v) {\n    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));\n  }\n  bvec4 not_(bvec4 v) {\n    return bvec4(!v.x, !v.y, !v.z, !v.w);\n  }\n  ",
		name: "not",
		type: 0
	};
}
function Zh() {
	return pt("sin");
}
function _i() {
	let e = "relu";
	return {
		body: `
  float ${e}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${e}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,
		name: e,
		type: 0
	};
}
function Oi() {
	let e = "sigmoid";
	return {
		body: `
  float ${e}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${e}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,
		name: e,
		type: 0
	};
}
function Qh() {
	return pt("sqrt");
}
function em() {
	return pt("tan");
}
function tm() {
	let e = "tanh";
	return {
		body: `
  float ${e}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${e}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,
		name: e,
		type: 0
	};
}
function pt(e) {
	return {
		body: `
  float ${e}_(float a) {
    return ${e}(a);
  }
  vec4 ${e}_(vec4 v) {
    return ${e}(v);
  }
  `,
		name: e,
		type: 0
	};
}
var rm, De, El, Dl, Ll, Fl, Ii, Cl, $l, nm, kl, Bl, Nl, Rl, Ml, Gl, Si, Ul, zl, Vl, Wl, Hl, ql, jl, Yl, Xl, Kl, Jl, Ai = E(() => {
	Ge(), fe(), Ht(), xe(), ae(), rm = (e, t, n, r) => {
		let i = e.session.pack ? 2 : 0, a = q(e.session.backend.glContext.version);
		return {
			...t,
			output: {
				dims: n.dims,
				type: n.type,
				textureType: i
			},
			shaderSource: `
     ${r.body}
     void main() {
       vec4 v = ${a.texture2D}(A, TexCoords);
       v = ${r.name}_(v);
       ${a.output} = v;
     }
     `,
			hasMain: !0
		};
	}, De = (e, t, n, r) => {
		let i = e.session.pack ? 2 : 0, a = {
			name: n.name,
			inputTypes: [i],
			inputNames: ["A"],
			cacheHint: r
		};
		return {
			...a,
			get: () => rm(e, a, t, n)
		};
	}, El = (e, t) => [e.run(De(e, t[0], Rh()), t)], Dl = (e, t) => [e.run(De(e, t[0], Mh()), t)], Ll = (e, t) => [e.run(De(e, t[0], Gh()), t)], Fl = (e, t) => [e.run(De(e, t[0], Uh()), t)], Ii = (e, t, n) => [e.run(De(e, t[0], vi(n.min, n.max), n.cacheKey), t)], Cl = (e) => ee({
		min: e.attributes.getFloat("min", hr),
		max: e.attributes.getFloat("max", mr)
	}), $l = (e, t) => {
		let n = nm(e, t);
		return Ii(e, [t[0]], n);
	}, nm = (e, t) => {
		if (t.length >= 3 && (!e.session.isInitializer(t[1].dataId) || !e.session.isInitializer(t[2].dataId))) throw Error("dynamic clip attributes are not allowed");
		let n = t.length >= 3 ? t[1].numberData[0] : hr, r = t.length >= 3 ? t[2].numberData[0] : mr;
		return ee({
			min: n,
			max: r
		});
	}, kl = (e, t) => [e.run(De(e, t[0], zh()), t)], Bl = (e, t) => [e.run(De(e, t[0], Vh()), t)], Nl = (e, t, n) => [e.run(De(e, t[0], Wh(n.alpha), n.cacheKey), t)], Rl = (e) => ee({ alpha: e.attributes.getFloat("alpha", 1) }), Ml = (e, t) => [e.run(De(e, t[0], Hh()), t)], Gl = (e, t) => [e.run(De(e, t[0], qh()), t)], Si = (e, t) => [e.run(De(e, t[0], jh()), t)], Ul = (e, t, n) => [e.run(De(e, t[0], Yh(n.alpha), n.cacheKey), t)], zl = (e) => ee({ alpha: e.attributes.getFloat("alpha", .01) }), Vl = (e, t) => [e.run(De(e, t[0], Xh()), t)], Wl = (e, t) => [e.run(De(e, t[0], Kh()), t)], Hl = (e, t) => [e.run(De(e, t[0], Jh()), t)], ql = (e, t) => [e.run(De(e, t[0], _i()), t)], jl = (e, t) => [e.run(De(e, t[0], Oi()), t)], Yl = (e, t) => [e.run(De(e, t[0], Zh()), t)], Xl = (e, t) => [e.run(De(e, t[0], Qh()), t)], Kl = (e, t) => [e.run(De(e, t[0], em()), t)], Jl = (e, t) => [e.run(De(e, t[0], tm()), t)];
});
function Nt(e) {
	let t;
	switch (e.activation) {
		case "Relu":
			t = _i();
			break;
		case "Sigmoid":
			t = Oi();
			break;
		case "Clip":
			t = vi(e.clipMin, e.clipMax);
			break;
		default: return {
			activationFunction: "",
			applyActivation: ""
		};
	}
	let n = t.name;
	return {
		activationFunction: t.body,
		applyActivation: `value = ${n}_(value);`
	};
}
var Mr, yr = E(() => {
	fe(), Ai(), Mr = (e) => {
		let t = e.getString("activation", "");
		if (t === "Clip") {
			let [n, r] = e.getFloats("activation_params", [hr, mr]);
			return {
				activation: t,
				clipMax: r,
				clipMin: n,
				activationCacheKey: `${t}:${n},${r}`
			};
		}
		return {
			activation: t,
			activationCacheKey: t
		};
	};
}), im, am, Zl, Ql = E(() => {
	at(), xe(), ae(), no(), yr(), im = (e, t) => ({
		name: "GroupedConv",
		inputNames: e ? [
			"X",
			"W",
			"Bias"
		] : ["X", "W"],
		inputTypes: e ? [
			0,
			0,
			0
		] : [0, 0],
		cacheHint: t
	}), am = (e, t, n, r) => {
		let i = t.length > 2 ? "value += getBias(output_channel);" : "", a = t[0].dims.slice(), o = t[1].dims.slice(), s = o[0] / r.group;
		ce.verbose("GroupedConv", `autpPad:${r.autoPad}, dilations:${r.dilations}, group:${r.group}, kernelShape:${r.kernelShape}, pads:${r.pads}, strides:${r.strides}`);
		let c = Gr(a, o, r.dilations, r.pads, r.strides), l = q(e.session.backend.glContext.version), { activationFunction: u, applyActivation: d } = Nt(r), f = `
  const ivec2 strides = ivec2(${r.strides[0]}, ${r.strides[1]});
  const ivec2 pads = ivec2(${r.pads[0]}, ${r.pads[1]});
  ${u}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${s};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${o[1]}; wInChannel++) {
      int input_channel = group_id * ${o[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${o[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${r.dilations[0]};

        if (xHeight < 0 || xHeight >= ${a[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${o[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${r.dilations[1]};
          if (xWidth < 0 || xWidth >= ${a[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${i}
    ${d}
    ${l.output} = vec4(value, .0, .0, .0);
  }
`;
		return {
			...n,
			output: {
				dims: c,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: f,
			hasMain: !0
		};
	}, Zl = (e, t, n) => {
		let r = im(t.length > 2, n.cacheKey);
		return {
			...r,
			get: () => am(e, t, r, n)
		};
	};
}), sm, um, ef, tf = E(() => {
	xe(), ae(), gr(), sm = (e) => ({
		name: "Im2Col (packed)",
		inputNames: ["A"],
		inputTypes: [2],
		cacheHint: e
	}), um = (e, t, n, r, i, a) => {
		let o = n.dims, s = r.dims, c = 2, l = 3, u = i.length, d = [s[1] * s[2] * s[3], i[2] * i[3]], f = s[2] * s[3], p = Bt(), m = q(e.session.backend.glContext.version), h = "";
		for (let e = 0; e <= 1; e++) for (let t = 0; t <= 1; t++) h += `
            blockIndex = rc.x + ${t};
            pos = rc.y + ${e};

            if(blockIndex < ${d[1]} && pos < ${d[0]}) {
              offsetY = int(blockIndex / (${i[u - 1]})) * ${a.strides[0]} -
                ${a.pads[0]};
              d0 = offsetY + ${a.dilations[0]} * (imod(pos, ${f}) / ${s[2]});

              if(d0 < ${o[2]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${i[u - 1]}) * ${a.strides[1]} -
                  ${a.pads[1]};
                d1 = offsetX + ${a.dilations[1]} * imod(imod(pos, ${f}), ${s[2]});

                if(d1 < ${o[3]} && d1 >= 0) {

                  ch = int(float(pos)/ ${f}.);
                    innerDims = vec2(d0, d1);
                    result[${e * 2 + t}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;
		let g = `
      ${p}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${h}
          ${m.output} = result;
      }
            `;
		return {
			...t,
			output: {
				dims: d,
				type: n.type,
				textureType: 2
			},
			shaderSource: g,
			hasMain: !0
		};
	}, ef = (e, t, n, r, i) => {
		let a = sm(i.cacheKey);
		return {
			...a,
			get: () => um(e, a, t, n, r, i)
		};
	};
});
function fm(e, t, n) {
	let r = t[0].dims, i = t[1].dims, a = Ke.calcShape(r, i, !0);
	if (!a) throw Error("Can't use matmul on the given tensors");
	let o = Je(a.length), s = Ot(), { activationFunction: c, applyActivation: l } = Nt(n), u = t.length > 2, d = u ? "value += getBiasForMatmul();" : "", f = u ? `${Ei(o, s, t[2].dims, a, !1)}` : "", p = a.length, m = r.length, h = i.length, g = `
    ${c}
    ${f}
    float process(int indices[${p}]) {
        int a[${m}];
        int b[${h}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${r[r.length - 1]}; ++k) {
            a[${m - 1}] = k;
            b[${h - 2}] = k;
            value += _A(a) * _B(b);
        }
        ${d}
        ${l}
        return value;
    }`;
	return {
		...e,
		output: {
			dims: a,
			type: t[0].type,
			textureType: 0
		},
		shaderSource: g
	};
}
function Pi(e, t) {
	let n = lm(e.length > 2, t.activationCacheKey);
	return {
		...n,
		get: () => fm(n, e, t)
	};
}
function Ei(e, t, n, r, i) {
	let a = "", o = n.length, s = r.length, c = s - o;
	a = s < 2 && o > 0 ? "coords" : n.map((e, n) => `coords.${t[n + c]}`).join(", ");
	let l = Ke.getBroadcastDims(n, r).map((e) => `coords.${t[e + c]} = 0;`).join("\n"), u = U.size(n) === 1, d = "vec4(outputValue.xx, outputValue.yy)";
	return u && (d = "vec4(outputValue.x)"), i ? `
vec4 getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${l}
  vec4 outputValue = getBias(${a});
  return ${d};
}` : `
float getBiasForMatmul() {
  ${e} coords = getOutputCoords();
  ${l}
  return getBias(coords.x);
}`;
}
var rf, nf, lm, cm, oo = E(() => {
	fe(), ae(), kt(), yr(), Di(), rf = (e, t, n) => (cm(t), e.session.pack ? [e.run(io(e, t, n), t)] : [e.run(Pi(t, n), t)]), nf = (e) => Mr(e.attributes), lm = (e, t) => ({
		name: "MatMul",
		inputNames: e ? [
			"A",
			"B",
			"Bias"
		] : ["A", "B"],
		inputTypes: e ? [
			0,
			0,
			0
		] : [0, 0],
		cacheHint: t
	}), cm = (e) => {
		if (!e || e.length !== 2) throw Error("MatMul requires 2 inputs.");
		if (e[0].dims[e[0].dims.length - 1] !== e[1].dims[e[1].dims.length - 2]) throw Error("shared dimension does not match.");
		if (e[0].type !== "float32" && e[0].type !== "float64" || e[1].type !== "float32" && e[1].type !== "float64") throw Error("inputs should be float type");
		if (e[0].type !== e[1].type) throw Error("inputs types should match");
	};
});
function hm(e, t, n, r) {
	let i = [], a = [], o = n[0].dims, s = n[1].dims, c = o.length, l = s.length, u = r.length, d = u - c, f = u - l;
	i = o.map((e, n) => `coords.${t[n + d]}`), i[c - 1] = "i*2", i.join(", "), a = s.map((e, n) => `coords.${t[n + f]}`), a[l - 2] = "i*2", a.join(", ");
	let p = Ke.getBroadcastDims(o, r), m = Ke.getBroadcastDims(s, r), h = p.map((e) => `coords.${t[e + d]} = 0;`).join("\n"), g = m.map((e) => `coords.${t[e + f]} = 0;`).join("\n"), _ = `int lastDim = coords.${t[u - 1]};
  coords.${t[u - 1]} = coords.${t[u - 2]};
  coords.${t[u - 2]} = lastDim;`;
	return `
vec4 getAAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${_}
  ${h}
  vec4 outputValue = getA(${i});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${e} coords = getOutputCoords();
  ${_}
  ${g}
  vec4 outputValue = getB(${a});
  return outputValue;
}`;
}
function mm(e, t) {
	let n = "";
	for (let r = 0; r < t - 2; r++) n += `rc.${e[r]}, `;
	return n += `rc.${e[t - 2]}, i*2`, n;
}
function bm(e, t) {
	let n = "";
	for (let r = 0; r < t - 2; r++) n += `rc.${e[r]}, `;
	return n += `i*2, rc.${e[t - 1]}`, n;
}
var pm, dm, io, Di = E(() => {
	fe(), xe(), ae(), kt(), yr(), oo(), pm = (e, t) => ({
		name: "MatMul (packed)",
		inputNames: e ? [
			"A",
			"B",
			"Bias"
		] : ["A", "B"],
		inputTypes: e ? [
			2,
			2,
			2
		] : [2, 2],
		cacheHint: t
	}), dm = (e, t, n, r) => {
		let i = n.length > 2, a = i ? "value += getBiasForMatmul();" : "", o = n[0].dims, s = n[1].dims, c = Ke.calcShape(o, s, !0), l = !U.areEqual(n[0].dims, n[1].dims);
		if (!c) throw Error("Can't use matmul on the given tensors");
		let u = o[o.length - 1], d = Math.ceil(u / 2), f = o.length, p = s.length, m = q(e.session.backend.glContext.version), h = Je(c.length), g = c.length, _ = Ot(), { activationFunction: v, applyActivation: y } = Nt(r), b = i ? `${Ei(h, _, n[2].dims, c, !0)}` : "", x = l ? `${hm(h, _, n, c)}` : "", S = l ? "getAAtOutCoordsMatmul(i)" : `getA(${mm(_, f)})`, C = l ? "getBAtOutCoordsMatmul(i)" : `getB(${bm(_, p)})`, te = `
            ${x}
            ${b}
            ${v}
            void main() {
              ${l ? "" : `${h} rc =
          getOutputCoords(); int lastDim = rc.${_[g - 1]}; rc.${_[g - 1]} =
          rc.${_[g - 2]}; rc.${_[g - 2]} = lastDim;
      `}

              vec4 value = vec4(0);
              for (int i = 0; i < ${d}; i++) {
                vec4 a = ${S};
                vec4 b = ${C};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${a}
              ${y}
              ${m.output} = value;
            }`;
		return {
			...t,
			output: {
				dims: c,
				type: n[0].type,
				textureType: 2
			},
			shaderSource: te,
			hasMain: !0
		};
	}, io = (e, t, n) => {
		let r = pm(t.length > 2, n.activationCacheKey);
		return {
			...r,
			get: () => dm(e, r, t, n)
		};
	};
}), of, af = E(() => {
	no(), tf(), Di(), of = (e, t, n) => {
		let r = t[0].dims, i = t[1].dims, a = Gr(r, i, n.dilations, n.pads, n.strides), o = e.run(ef(e, t[0], t[1], a, n), [t[0]]), s = e.reshapePacked(t[1], [i[0], i[1] * i[2] * i[3]]), c = t.length === 3 ? [
			s,
			o,
			t[2]
		] : [s, o], l = e.run(io(e, c, n), c);
		return e.reshapePacked(l, a);
	};
}), gm, ym, sf, Li, Fi = E(() => {
	ae(), gm = (e) => ({
		name: "Im2Col",
		inputNames: ["X"],
		inputTypes: [0],
		cacheHint: e
	}), ym = (e, t, n, r, i, a) => {
		let o = n.dims, s = r.dims, c = i.length, l = Li(o, s, i, 4), u = `
        const int XC = ${o[1]};
        const int XH = ${o[2]};
        const int XW = ${o[3]};
        const int KH = ${a.kernelShape[0]};
        const int KW = ${a.kernelShape[1]};
        const int dilationH = ${a.dilations[0]};
        const int dilationW = ${a.dilations[1]};
        const int strideH = ${a.strides[0]};
        const int strideW = ${a.strides[1]};
        const int padH = ${a.pads[0]};
        const int padW = ${a.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${c}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${o.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;
		return {
			...t,
			output: {
				dims: l,
				type: n.type,
				textureType: 4
			},
			shaderSource: u
		};
	}, sf = (e, t, n, r, i) => {
		let a = gm(i.cacheKey);
		return {
			...a,
			get: () => ym(e, a, t, n, r, i)
		};
	}, Li = (e, t, n, r = 4) => [
		n[0],
		n[2],
		n[3],
		Math.ceil(e[1] * t[2] * t[3] / r)
	];
}), Tm, xm, uf, lf = E(() => {
	fe(), xe(), ae(), yr(), Fi(), Tm = (e, t) => ({
		name: "ConvDotProduct",
		inputNames: e ? [
			"Im2Col",
			"K",
			"B"
		] : ["Im2Col", "K"],
		inputTypes: e ? [
			0,
			4,
			0
		] : [0, 4],
		cacheKey: t.activationCacheKey
	}), xm = (e, t, n, r, i) => {
		let a = n[0].dims, o = n[1].dims, s = [o[0], Math.ceil(a[1] * o[2] * o[3] / 4)], c = Li(a, o, r), [l, u] = e.calculateTextureWidthAndHeight(s, 4), d = U.computeStrides(c), [f, p] = e.calculateTextureWidthAndHeight(c, 4), m = r.length, h = n.length < 3 ? "0.0" : "_B(b)", g = Math.ceil(a[1] * o[2] * o[3] / 4), { activationFunction: _, applyActivation: v } = Nt(i), y = q(e.session.backend.glContext.version), b = `
${_}
float process(int indices[${m}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${d[0]} + im2col[1] * ${d[1]} + im2col[2] * ${d[2]};
  int kernelOffset = indices[1] * ${s[1]};
  float value = ${h};
  for (int i = 0; i < ${g}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${f}, ${p});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${l}, ${u});
    value += dot(${y.texture2D}(Im2Col, im2colCoords), ${y.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${v}
  return value;
}`;
		return {
			...t,
			output: {
				dims: r,
				type: n[0].type,
				textureType: 0
			},
			shaderSource: b
		};
	}, uf = (e, t, n, r) => {
		let i = Tm(t.length > 2, r);
		return {
			...i,
			get: () => xm(e, i, t, n, r)
		};
	};
}), Gr, Ci, wm, vm, _m, Om, $i, Im, no = E(() => {
	Ge(), fe(), Ql(), af(), lf(), yr(), Fi(), oo(), Gr = (e, t, n, r, i) => {
		let a = e[0], o = e.slice(2), s = o.length, c = t[0], l = t.slice(2).map((e, t) => e + (e - 1) * (n[t] - 1)), u = o.map((e, t) => e + r[t] + r[t + s]).map((e, t) => Math.floor((e - l[t] + i[t]) / i[t]));
		return [a, c].concat(...u);
	}, Ci = (e, t, n) => (Im(t, n), wm(e, t, n)), wm = (e, t, n) => {
		let r = Om(n, t), i = e.session.pack, a = r.kernelShape[0] === 1 && r.kernelShape[1] === 1;
		return r.group > 1 ? [e.run(Zl(e, t, r), t)] : a && i ? [vm(e, t, r)] : i && t[0].dims.length === 4 && t[0].dims[0] === 1 && !a ? [of(e, t, r)] : [_m(e, t, r)];
	}, vm = (e, t, n) => {
		let r = t[0].dims, i = t[1].dims, a = Gr(r, i, n.dilations, n.pads, n.strides), o = e.reshapeUnpacked(t[0], [r[1], r[2] * r[3]]), s = e.reshapeUnpacked(t[1], [i[0], i[1]]), c = t.length > 2 ? [
			s,
			o,
			t[2]
		] : [s, o], l = e.run(Pi(c, n), c);
		return e.reshapeUnpacked(l, a);
	}, _m = (e, t, n) => {
		let r = t[0].dims, i = t[1].dims, a = Gr(r, i, n.dilations, n.pads, n.strides), o = e.run(sf(e, t[0], t[1], a, n), [t[0]]), s = t.length === 3 ? [
			o,
			t[1],
			t[2]
		] : [o, t[1]];
		return e.run(uf(e, t, a, n), s);
	}, Om = (e, t) => {
		let n = e.kernelShape.slice();
		if (e.kernelShape.length === 0) for (let e = 2; e < t[1].dims.length; ++e) n.push(t[1].dims[e]);
		let r = e.pads.slice();
		dr.adjustPadsBasedOnAutoPad(t[0].dims, e.strides, e.dilations, n, r, e.autoPad);
		let i = Object.assign({}, e);
		return Object.assign(i, {
			kernelShape: n,
			pads: r,
			cacheKey: e.cacheKey
		}), i;
	}, $i = (e) => {
		let t = e.attributes, n = Mr(t), r = t.getString("auto_pad", "NOTSET"), i = t.getInts("dilations", [1, 1]), a = t.getInt("group", 1), o = t.getInts("kernel_shape", []), s = t.getInts("pads", [
			0,
			0,
			0,
			0
		]), c = t.getInts("strides", [1, 1]);
		return ee({
			autoPad: r,
			dilations: i,
			group: a,
			kernelShape: o,
			pads: s,
			strides: c,
			...n
		});
	}, Im = (e, t) => {
		if (!e || e.length !== 2 && e.length !== 3) throw Error("Conv requires 2 or 3 inputs");
		if (e[0].dims.length !== 4 || e[1].dims.length !== 4) throw Error("currently only support 2-dimensional conv");
		if (e[0].dims[1] !== e[1].dims[1] * t.group) throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");
		if (e.length === 3 && (e[2].dims.length !== 1 || e[1].dims[0] !== e[2].dims[0])) throw Error("invalid bias");
		let n = e[0].dims.length - 2;
		if (t.dilations.length !== n) throw Error(`dilations should be ${n}D`);
		if (t.strides.length !== n) throw Error(`strides should be ${n}D`);
		if (t.pads.length !== n * 2) throw Error(`pads should be ${n * 2}D`);
		if (t.kernelShape.length !== 0 && t.kernelShape.length !== e[1].dims.length - 2) throw Error("invalid kernel shape");
		if (e[0].type !== "float32" || e[1].type !== "float32") throw Error("Conv input(X,W) should be float tensor");
		if (e.length === 3 && e[2].type !== "float32") throw Error("Conv input(bias) should be float tensor");
	};
}), Sm, Am, Pm, ff, Em, Dm, Lm, Fm, Cm, $m, cf, km, pf = E(() => {
	Ge(), xe(), ae(), yr(), Sm = (e, t, n, r, i, a) => (e - 1) * t + n + (r - 1) * i + 1 - a, Am = (e, t, n, r, i) => {
		let a = Math.floor(e / 2);
		t === "SAME_UPPER" ? (n[r] = a, n[i] = e - a) : t === "SAME_LOWER" && (n[r] = e - a, n[i] = a);
	}, Pm = (e, t, n, r, i, a, o, s) => {
		let c = e.length - 2, l = s.length === 0;
		for (let u = 0; u < c; ++u) {
			let d = l ? e[u + 2] * a[u] : s[u], f = Sm(e[u + 2], a[u], i[u], t[u], n[u], d);
			Am(f, r, i, u, u + c), l && s.push(a[u] * (e[u + 2] - 1) + o[u] + (t[u] - 1) * n[u] + 1 - i[u] - i[u + c]);
		}
	}, ff = (e, t, n) => (km(t, n), Em(e, t, n)), Em = (e, t, n) => {
		let r = $m(n, t);
		return [Cm(e, t, r)];
	}, Dm = (e, t) => ({
		name: "ConvTranspose",
		inputNames: e ? [
			"X",
			"W",
			"B"
		] : ["X", "W"],
		inputTypes: e ? [
			0,
			0,
			0
		] : [0, 0],
		cacheHint: t
	}), Lm = (e, t, n, r) => {
		let i = t.length > 2 ? "getB(output_channel)" : "0.0", a = t[0].dims, o = t[1].dims, s = o[1], c = o[0] / r.group, l = [
			t[0].dims[0],
			t[1].dims[1] * r.group,
			...r.outputShape
		], u = q(e.session.backend.glContext.version), { activationFunction: d, applyActivation: f } = Nt(r), p = `
  const ivec2 strides = ivec2(${r.strides[0]}, ${r.strides[1]});
  const ivec2 pads = ivec2(${r.pads[0]}, ${r.pads[1]});
  ${d}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${s};
    int wOutChannel = output_channel - group_id * ${s};

    float value = ${i};
    for (int inChannelOffset = 0; inChannelOffset < ${c}; inChannelOffset++) {
      int input_channel = group_id * ${c} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${o[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${o[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${r.dilations[0]}, wHOff * ${r.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${a[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${a[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${f}
    ${u.output} = vec4(value, .0, .0, .0);
  }
`;
		return {
			...n,
			output: {
				dims: l,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: p,
			hasMain: !0
		};
	}, Fm = (e, t, n) => {
		let r = Dm(t.length > 2, n.cacheKey);
		return {
			...r,
			get: () => Lm(e, t, r, n)
		};
	}, Cm = (e, t, n) => e.run(Fm(e, t, n), t), $m = (e, t) => {
		let n = e.kernelShape.slice();
		if (e.kernelShape.length === 0) for (let e = 2; e < t[1].dims.length; ++e) n.push(t[1].dims[e]);
		let r = e.pads.slice(), i = e.outputShape.slice(), a = t[0].dims;
		Pm(a, n, e.dilations, e.autoPad, r, e.strides, e.outputPadding, i);
		let o = Object.assign({}, e);
		return Object.assign(o, {
			kernelShape: n,
			pads: r,
			outputShape: i,
			cacheKey: e.cacheKey
		}), o;
	}, cf = (e) => {
		let t = e.attributes, n = Mr(t), r = t.getString("auto_pad", "NOTSET"), i = t.getInts("dilations", [1, 1]), a = t.getInt("group", 1), o = t.getInts("kernel_shape", []), s = t.getInts("output_padding", [0, 0]), c = t.getInts("output_shape", []), l = t.getInts("pads", [
			0,
			0,
			0,
			0
		]), u = t.getInts("strides", [1, 1]);
		return ee({
			autoPad: r,
			dilations: i,
			group: a,
			kernelShape: o,
			outputPadding: s,
			outputShape: c,
			pads: l,
			strides: u,
			...n
		});
	}, km = (e, t) => {
		if (!e || e.length !== 2 && e.length !== 3) throw Error("Conv requires 2 or 3 inputs");
		if (e[0].dims.length !== 4 || e[1].dims.length !== 4) throw Error("currently only support 2-dimensional conv");
		if (e[0].dims[1] !== e[1].dims[0]) throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");
		let n = e[1].dims[1] * t.group;
		if (e.length === 3 && (e[2].dims.length !== 1 || e[2].dims[0] !== n)) throw Error("invalid bias");
		let r = e[0].dims.length - 2;
		if (t.dilations.length !== r) throw Error(`dilations should be ${r}D`);
		if (t.strides.length !== r) throw Error(`strides should be ${r}D`);
		if (t.pads.length !== r * 2) throw Error(`pads should be ${r * 2}D`);
		if (t.outputPadding.length !== r) throw Error(`output_padding should be ${r}D`);
		if (t.kernelShape.length !== 0 && t.kernelShape.length !== e[1].dims.length - 2) throw Error("invalid kernel shape");
		if (t.outputShape.length !== 0 && t.outputShape.length !== e[0].dims.length - 2) throw Error("invalid output shape");
		if (e[0].type !== "float32" || e[1].type !== "float32") throw Error("ConvTranspose input(X,W) should be float tensor");
		if (e.length === 3 && e[2].type !== "float32") throw Error("ConvTranspose input(bias) should be float tensor");
	};
}), df, Tr, hf, Bm, mf, Nm, Rm, Mm, ao = E(() => {
	Ge(), fe(), ae(), df = {
		name: "Transpose",
		inputNames: ["A"],
		inputTypes: [0]
	}, Tr = (e, t, n) => (Mm(t), [e.run({
		...df,
		cacheHint: n.cacheKey,
		get: () => Bm(e, t[0], n.perm)
	}, t)]), hf = (e) => ee({ perm: e.attributes.getInts("perm", []) }), Bm = (e, t, n) => {
		let r = t.dims;
		n = mf(r, n);
		let i = Nm(r, n), a = r.length, o = `
      ${Rm("perm", n, a)}
      float process(int indices[${a}]) {
        int a[${a}];
        perm(a, indices);
        return _A(a);
      }`;
		return {
			...df,
			output: {
				dims: i,
				type: t.type,
				textureType: 0
			},
			shaderSource: o
		};
	}, mf = (e, t) => (t && t.length !== e.length && (t = [...e.keys()].reverse()), t), Nm = (e, t) => (t = mf(e, t), U.sortBasedOnPerm(e, t)), Rm = (e, t, n) => {
		let r = [];
		r.push(`void ${e}(out int a[${n}], int src[${n}]) {`);
		for (let e = 0; e < n; ++e) r.push(`	a[${t[e]}]=src[${e}];`);
		return r.push("	}"), r.join("\n");
	}, Mm = (e) => {
		if (!e || e.length !== 1) throw Error("Transpose requires 1 input.");
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("input should be float tensor");
	};
}), bf, gf, Gm, yf = E(() => {
	ao(), bf = (e, t, n) => {
		Gm(t);
		let r = n.blocksize, i = r * r, a = n.mode === "DCR" ? [
			0,
			3,
			4,
			1,
			5,
			2
		] : [
			0,
			1,
			4,
			2,
			5,
			3
		], o = n.mode === "DCR" ? [
			t[0].dims[0],
			r,
			r,
			t[0].dims[1] / i,
			t[0].dims[2],
			t[0].dims[3]
		] : [
			t[0].dims[0],
			t[0].dims[1] / i,
			r,
			r,
			t[0].dims[2],
			t[0].dims[3]
		], s = e.reshapeUnpacked(t[0], o), c = {
			perm: a,
			cacheKey: `${a}`
		}, [l] = Tr(e, [s], c), u = [
			t[0].dims[0],
			t[0].dims[1] / i,
			t[0].dims[2] * r,
			t[0].dims[3] * r
		];
		return [e.reshapeUnpacked(l, u)];
	}, gf = (e) => {
		let t = e.attributes.getInt("blocksize");
		if (t < 1) throw Error(`blocksize must be >= 1, but got : ${t} for DepthToSpace`);
		let n = e.attributes.getString("mode", "DCR");
		if (n !== "DCR" && n !== "CRD") throw Error(`unrecognized mode: ${n} for DepthToSpace`);
		return {
			mode: n,
			blocksize: t
		};
	}, Gm = (e) => {
		if (e.length !== 1) throw Error(`DepthToSpace expect 1 inputs, but got ${e.length}`);
		if (e[0].type === "string" || e[0].dims.length !== 4) throw TypeError("DepthToSpace input should be a 4-D numeric tensor");
	};
}), Tf, xf, Um, wf = E(() => {
	fe(), Tf = (e, t, n) => {
		Um(t, n);
		let r = U.flattenShape(t[0].dims, n);
		return [e.reshapeUnpacked(t[0], r)];
	}, xf = (e) => e.attributes.getInt("axis", 1), Um = (e, t) => {
		if (!e || e.length !== 1) throw Error("Flatten requires 1 input.");
		let n = e[0].dims.length;
		if (n === 0) throw Error("scalar tensor is not supported.");
		if (t < -n || t > n) throw Error("Invalid axis");
		if (e[0].type === "string") throw Error("string tensor is not supported.");
	};
}), Jt, hn = E(() => {
	Jt = [
		"float32",
		"float64",
		"int32",
		"int16",
		"int8",
		"uint16",
		"uint32",
		"uint8"
	];
}), vf, _f, zm, Vm, Wm, Hm, Of = E(() => {
	Ge(), hn(), fe(), ae(), vf = (e, t, n) => (Hm(t, n.axis), [e.run(Wm(e, t, n), t)]), _f = (e) => ee({ axis: e.attributes.getInt("axis", 0) }), zm = {
		name: "Gather",
		inputNames: ["A", "B"],
		inputTypes: [0, 0]
	}, Vm = (e, t, n, r) => {
		let i = n[0].dims.slice(), a = n[1].dims.slice(), o = Array(i.length + a.length - 1);
		r = U.normalizeAxis(r, i.length);
		let s = [];
		for (let e = 0; e < o.length; e++) e < r ? (o[e] = i[e], s.push(`inputIdx[${e}] = outputIdx[${e}];`)) : e < r + a.length ? (o[e] = a[e - r], s.push(`indexDataIdx[${e - r}] = outputIdx[${e}];`)) : (o[e] = i[e - a.length + 1], s.push(`inputIdx[${e - a.length + 1}] = outputIdx[${e}];`));
		let c = `
      float process(int outputIdx[${o.length || 1}]) {
        int inputIdx[${i.length}];
        int indexDataIdx[${a.length || 1}];
        indexDataIdx[0] = 0;
        ${s.join("\n        ")}
        int idx = int(_B(indexDataIdx));
        inputIdx[${r}] = idx < 0 ? idx + ${i[r]} : idx;
        return _A(inputIdx);
      }`;
		return {
			...t,
			output: {
				dims: o,
				type: n[0].type,
				textureType: 0
			},
			shaderSource: c
		};
	}, Wm = (e, t, n) => {
		let r = {
			...zm,
			cacheHint: n.cacheKey
		};
		return {
			...r,
			get: () => Vm(e, r, t, n.axis)
		};
	}, Hm = (e, t) => {
		if (!e || e.length !== 2) throw Error("Gather requires 2 inputs.");
		let n = e[0].dims.length;
		if (n < 1) throw Error("Invalid input shape.");
		if (t < -n || t > n - 1) throw Error("Invalid axis.");
		if (Jt.indexOf(e[0].type) === -1 || e[1].type !== "int32" && e[1].type !== "int16") throw Error("Invaid input type.");
	};
}), ki, If, Sf, Af, qm, jm, Ym, Pf = E(() => {
	Ge(), fe(), ae(), ki = (e, t, n) => (Ym(t, n), [e.run(qm(t, n), t)]), If = (e, t) => {
		let n = e.attributes.getInt("transA", 0) !== 0, r = e.attributes.getInt("transB", 0) !== 0, i = e.attributes.getFloat("alpha", 1), a = e.attributes.getFloat("beta", 1);
		return ee({
			transA: n,
			transB: r,
			alpha: i,
			beta: a,
			isOptionalC: t
		});
	}, Sf = (e) => If(e, !1), Af = (e) => If(e, !0), qm = (e, t) => {
		let n = {
			name: "Gemm",
			inputNames: e.length === 3 ? [
				"A",
				"B",
				"C"
			] : ["A", "B"],
			inputTypes: e.length === 3 ? [
				0,
				0,
				0
			] : [0, 0],
			key: t.cacheKey
		};
		return {
			...n,
			get: () => jm(n, e, t)
		};
	}, jm = (e, t, n) => {
		let r = t[0].dims.slice(), i = t[1].dims.slice(), [a, o] = Xn.getShapeOfGemmResult(r, n.transA, i, n.transB, t.length === 3 ? t[2].dims : void 0), s = [a, o];
		if (!s) throw Error("Can't use gemm on the given tensors");
		let c = r[r.length - 1], l = "";
		n.transA && (c = r[0]), n.transA && n.transB ? l = "value += _A_T(a) * _B_T(b);" : n.transA && !n.transB ? l = "value += _A_T(a) * _B(b);" : !n.transA && n.transB ? l = "value += _A(a) * _B_T(b);" : !n.transA && !n.transB && (l = "value += _A(a) * _B(b);");
		let u = s.length, d = t.length === 3 ? `int c[${t[2].dims.length}];` : "", f = t.length === 3 ? "bcastIndices_C(indices, c);" : "", p = t.length === 3 ? "value += beta * _C(c);" : "", m = `
      float process(int indices[${u}]) {
          int a[${u}];
          int b[${u}];
          ${d}

          copyVec(indices, a);
          copyVec(indices, b);
          ${f}

          float value = 0.0;
          for (int k=0; k<${c}; ++k) {
              a[${u - 1}] = k;
              b[${u - 2}] = k;
              ${l}
          }

          value = value * alpha;
          ${p}
          return value;
      }`;
		return {
			...e,
			output: {
				dims: s,
				type: t[0].type,
				textureType: 0
			},
			variables: [{
				name: "alpha",
				type: "float",
				data: n.alpha
			}, {
				name: "beta",
				type: "float",
				data: n.beta
			}],
			shaderSource: m
		};
	}, Ym = (e, t) => {
		if (!e) throw Error("Input is missing");
		if (t.isOptionalC && (e.length < 2 || e.length > 3)) throw Error("Invaid input shape.");
		if (!t.isOptionalC && e.length !== 3) throw Error("Gemm requires 3 inputs");
		if (e.length === 3 && e[2].dims.length !== 1 && e[2].dims.length !== 2) throw Error("Invalid input shape of C");
		if (e[0].type !== "float32" && e[0].type !== "float64" || e[1].type !== "float32" && e[1].type !== "float64" || e.length === 3 && e[2].type !== "float32" && e[2].type !== "float64") throw Error("Invalid input type.");
		if (e[0].type !== e[1].type || e.length === 3 && e[0].type !== e[2].type) throw Error("Input types are mismatched");
	};
}), Ef, Df, Xm, Km, Jm, Zm, Qm, Lf = E(() => {
	Ge(), ae(), Ef = (e, t, n) => (Qm(t), [e.run(Jm(e, t, n), t)]), Df = (e) => {
		let t = e.attributes.getFloat("scale"), n = e.attributes.getFloats("bias");
		return ee({
			scale: t,
			bias: n
		});
	}, Xm = {
		name: "ImageScaler",
		inputNames: ["X"],
		inputTypes: [0]
	}, Km = (e, t, n, r) => {
		let i = n[0].dims.slice(), a = i.length, o = `
      ${Zm(r.bias.length)}
      float process(int indices[${a}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;
		return {
			...t,
			output: {
				dims: i,
				type: n[0].type,
				textureType: 0
			},
			variables: [{
				name: "bias",
				type: "float",
				arrayLength: r.bias.length,
				data: r.bias
			}, {
				name: "scale",
				type: "float",
				data: r.scale
			}],
			shaderSource: o
		};
	}, Jm = (e, t, n) => {
		let r = {
			...Xm,
			cacheHint: n.cacheKey
		};
		return {
			...r,
			get: () => Km(e, r, t, n)
		};
	}, Zm = (e) => {
		let t = [`float getBias(float bias[${e}], int channel) {`];
		for (let n = 0; n < e; ++n) n === 0 ? t.push(`	if (channel == ${n}) { return bias[${n}]; }`) : n === e - 1 ? t.push(`	else { return bias[${n}]; }`) : t.push(`	else if (channel == ${n}) { return bias[${n}]; }`);
		return t.push("	}"), t.join("\n");
	}, Qm = (e) => {
		if (!e || e.length !== 1) throw Error("ImageScaler requires 1 input.");
		if (e[0].dims.length !== 4) throw Error("Invalid input shape.");
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("Invalid input type.");
	};
}), Cf, $f, Ff, eb, tb, rb, nb, ob, ib, kf = E(() => {
	xe(), ae(), Cf = (e, t, n) => {
		ib(t);
		let r = e.run(tb(t[0]), t);
		return [e.run(ob(e, t[0], n, r.dims), [
			t[0],
			r,
			t[1],
			t[2]
		])];
	}, $f = (e) => e.attributes.getFloat("epsilon", 1e-5), Ff = {
		name: "InstanceNormalization_MeanAndVariance",
		inputNames: ["X"],
		inputTypes: [0]
	}, eb = (e, t) => {
		let n = t.dims.slice(), r = n[1], i = n[2] * n[3], a = [n[0], r], o = `
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${i});
        temp = 0.0;
        for(int a2=0; a2<${n[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${n[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${i});

        return v;
      }`;
		return {
			...e,
			output: {
				dims: a,
				type: t.type,
				textureType: 4
			},
			shaderSource: o
		};
	}, tb = (e) => ({
		...Ff,
		get: () => eb(Ff, e)
	}), rb = {
		name: "InstanceNormalization_ComputeOutput",
		inputNames: [
			"X",
			"MeanAndVariance",
			"Scale",
			"B"
		],
		inputTypes: [
			0,
			4,
			0,
			0
		]
	}, nb = (e, t, n, r, i) => {
		let a = q(e.session.backend.glContext.version), [o, s] = e.calculateTextureWidthAndHeight(i, 4), [c, l] = [o / 4, s], u = `
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${c}, ${l});
        return ${a.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;
		return {
			...t,
			output: {
				dims: n.dims,
				type: n.type,
				textureType: 0
			},
			variables: [{
				name: "epsilon",
				type: "float",
				data: r
			}],
			shaderSource: u
		};
	}, ob = (e, t, n, r) => {
		let i = {
			...rb,
			cacheHint: `${n}`
		};
		return {
			...i,
			get: () => nb(e, i, t, n, r)
		};
	}, ib = (e) => {
		if (!e || e.length !== 3) throw Error("InstanceNormalization requires 3 inputs.");
		let t = e[0], n = e[1], r = e[2];
		if (t.dims.length < 3 || n.dims.length !== 1 || r.dims.length !== 1) throw Error("Invalid input shape.");
		if (n.dims[0] !== t.dims[1] || r.dims[0] !== t.dims[1]) throw Error("Input shapes are mismatched.");
		if (t.type !== "float32" && t.type !== "float64" || n.type !== "float32" && n.type !== "float64" || r.type !== "float32" && r.type !== "float64") throw Error("Invalid input type.");
		if (e[0].dims.length !== 4) throw Error("Only support 4-D input shape.");
	};
});
function ab(e, t) {
	let n = e[0].dims[1], r = e[0].dims.length, i = -Math.floor((t.size - 1) / 2), a = Math.ceil((t.size - 1) / 2), o = `float(${t.alpha}) / float(${t.size})`, s = `
    float process(int indices[${r}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${i}; i <= ${a}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${n}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${`float(${t.bias})`} + ${o} * square_sum, ${`float(${t.beta})`});
    }`;
	return {
		...Rf,
		cacheHint: t.cacheKey,
		output: {
			dims: e[0].dims,
			type: e[0].type,
			textureType: 0
		},
		shaderSource: s
	};
}
function sb(e, t) {
	return {
		...Rf,
		cacheHint: t.cacheKey,
		get: () => ab(e, t)
	};
}
var Bf, Nf, Rf, ub, Mf = E(() => {
	Ge(), ae(), Bf = (e, t, n) => (ub(t), [e.run(sb(t, n), t)]), Nf = (e) => {
		let t = e.attributes.getFloat("alpha", 1e-4), n = e.attributes.getFloat("beta", .75), r = e.attributes.getFloat("bias", 1), i = e.attributes.getInt("size");
		return ee({
			alpha: t,
			beta: n,
			bias: r,
			size: i
		});
	}, Rf = {
		name: "LRN",
		inputNames: ["X"],
		inputTypes: [0]
	}, ub = (e) => {
		if (!e || e.length !== 1) throw Error("LRN requires 1 input.");
		if (e[0].dims.length !== 4) throw Error("currently only support LRN for input with \"NCHW\" format");
		if (e[0].type !== "float32") throw Error("input should be float type");
	};
}), lb, Bi, Gf, Uf, zf, fb, cb, pb, db, hb, mb, bb, gb, Vf = E(() => {
	Ge(), fe(), xe(), ae(), lb = {
		name: "Pad",
		inputNames: ["A"],
		inputTypes: [0]
	}, Bi = (e, t, n) => (pb(t), [e.run({
		...lb,
		cacheHint: n.cacheKey,
		get: () => cb(e, t[0], n)
	}, t)]), Gf = (e) => {
		let t = e.attributes.getString("mode", "constant"), n = e.attributes.getFloat("value", 0), r = e.attributes.getInts("pads");
		return ee({
			mode: t,
			value: n,
			pads: r
		});
	}, Uf = (e, t, n) => {
		db(t);
		let r = fb(e, t, n);
		return Bi(e, [t[0]], r);
	}, zf = (e) => e.attributes.getString("mode", "constant"), fb = (e, t, n) => {
		if (!e.session.isInitializer(t[1].dataId) || t.length >= 3 && !e.session.isInitializer(t[2].dataId)) throw Error("dynamic pad attributes are not allowed");
		let r = Array.from(t[1].integerData), i = t.length >= 3 ? t[2].floatData[0] : 0;
		return ee({
			mode: n,
			pads: r,
			value: i
		});
	}, cb = (e, t, n) => {
		let r = U.padShape(t.dims.slice(), n.pads), i = r.length, a = `
      ${hb(e, t, n)}
      float process(int[${i}] indices) {
          return padA(indices);
      }`;
		return {
			name: "Pad",
			inputNames: ["A"],
			inputTypes: [0],
			output: {
				dims: r,
				type: t.type,
				textureType: 0
			},
			shaderSource: a
		};
	}, pb = (e) => {
		if (!e || e.length !== 1) throw Error("Pad requires 1 input");
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("Invalid input type.");
	}, db = (e) => {
		if (!e || e.length !== 2 && e.length !== 3) throw Error("Pad requires 2 or 3 inputs");
		if (e[1].type !== "int32" || e.length >= 3 && e[2].type === "string") throw Error("Invalid input type.");
	}, hb = (e, t, n) => {
		let r = q(e.session.backend.glContext.version), [i, a] = e.calculateTextureWidthAndHeight(t.dims, 0), o = U.computeStrides(t.dims);
		switch (n.mode) {
			case "constant": return mb(r, t.dims, o, i, a, n.pads, n.value);
			case "reflect": return bb(r, t.dims, o, i, a, n.pads);
			case "edge": return gb(r, t.dims, o, i, a, n.pads);
			default: throw Error("Invalid mode");
		}
	}, mb = (e, t, n, r, i, a, o) => {
		let s = t.length, c = "";
		for (let e = s - 1; e >= 0; --e) c += `
        k = m[${e}] - ${a[e]};
        if (k < 0)  return constant;
        if (k >= ${t[e]}) return constant;
        offset += k * ${n[e]};
        `;
		return `
      float padA(int m[${s}]) {
        const float constant = float(${o});
        int offset = 0;
        int k = 0;
        ${c}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `;
	}, bb = (e, t, n, r, i, a) => {
		let o = t.length, s = "";
		for (let e = o - 1; e >= 0; --e) s += `
        k = m[${e}] - ${a[e]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2 * (t[e] - 1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${t[e]}) { k = _2n_1 - k; }
        }
        offset += k * ${n[e]};
        `;
		return `
      float padA(int m[${o}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `;
	}, gb = (e, t, n, r, i, a) => {
		let o = t.length, s = "";
		for (let e = o - 1; e >= 0; --e) s += `
        k = m[${e}] - ${a[e]};
        if (k < 0)  k = 0;
        if (k >= ${t[e]}) k = ${t[e] - 1};
        offset += k * ${n[e]};
      `;
		return `
      float padA(int m[${o}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${r}, ${i});
        float value = getColorAsFloat(${e.texture2D}(A, coords));
        return value;
      }
      `;
	};
}), Hf, qf, jf, Yf, Xf, Kf, Jf, Zf, Qf, yb, Wf, ec, uo, tc, so, Tb, rc = E(() => {
	Ge(), fe(), ae(), Hf = (e, t, n) => {
		uo(t);
		let r = {
			name: "AveragePool",
			inputNames: ["X"],
			inputTypes: [0],
			cacheHint: n.cacheKey
		};
		return [e.run({
			...r,
			get: () => jf(t, r, !1, n)
		}, t)];
	}, qf = (e) => {
		let t = e.attributes.getString("auto_pad", "NOTSET"), n = e.attributes.getInt("ceil_mode", 0), r = e.attributes.getInt("count_include_pad", 0) !== 0, i = e.attributes.getInts("kernel_shape"), a = e.attributes.getInts("strides", []), o = e.attributes.getInts("pads", []);
		if (n !== 0) throw Error("using ceil() in shape computation is not yet supported for AveragePool");
		return ee({
			autoPad: t,
			ceilMode: n,
			countIncludePad: r,
			kernelShape: i,
			strides: a,
			pads: o
		});
	}, jf = (e, t, n, r) => {
		let [i, a] = Qf(e, r, n), o = U.size(i.kernelShape), s = "value += _X(x);", c = "";
		i.countIncludePad ? c += `value /= float(${o});` : c += `value /= float(${o} - pad);`;
		let l = `
        ${tc(e[0].dims, i, "value += _X(x);", c, "0.0")}
      `;
		return {
			...t,
			output: {
				dims: a,
				type: e[0].type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Yf = (e, t, n) => {
		uo(t);
		let r = {
			name: "GlobalAveragePool",
			inputNames: ["X"],
			inputTypes: [0],
			cacheHint: `${n.countIncludePad}`
		};
		return [e.run({
			...r,
			get: () => jf(t, r, !0, n)
		}, t)];
	}, Xf = (e) => {
		let t = e.attributes.getInt("count_include_pad", 0) !== 0;
		return ee({
			autoPad: "",
			ceilMode: 0,
			countIncludePad: t,
			kernelShape: [],
			strides: [],
			pads: []
		});
	}, Kf = (e, t, n) => {
		uo(t);
		let r = {
			name: "MaxPool",
			inputNames: ["X"],
			inputTypes: [0],
			cacheHint: n.cacheKey
		};
		return [e.run({
			...r,
			get: () => Zf(t, r, !1, n)
		}, t)];
	}, Jf = (e) => {
		let t = e.attributes.getString("auto_pad", "NOTSET"), n = e.attributes.getInt("ceil_mode", 0), r = e.attributes.getInts("kernel_shape"), i = e.attributes.getInts("strides", []), a = e.attributes.getInts("pads", []), o = e.attributes.getInt("storage_order", 0), s = e.attributes.getInts("dilations", []);
		if (o !== 0) throw Error("column major storage order is not yet supported for MaxPool");
		if (n !== 0) throw Error("using ceil() in shape computation is not yet supported for MaxPool");
		return ee({
			autoPad: t,
			ceilMode: n,
			countIncludePad: !1,
			kernelShape: r,
			strides: i,
			pads: a,
			storageOrder: o,
			dilations: s
		});
	}, Zf = (e, t, n, r) => {
		let [i, a] = Qf(e, r, n), o = `
      ${tc(e[0].dims, i, "\n      value = max(_X(x), value);\n    ", "", "-1e5")}
    `;
		return {
			...t,
			output: {
				dims: a,
				type: e[0].type,
				textureType: 0
			},
			shaderSource: o
		};
	}, Qf = (e, t, n) => {
		let r = e[0].dims.slice(), i = Object.hasOwnProperty.call(t, "dilations"), a = t.kernelShape.slice(), o = t.strides.slice(), s = i ? t.dilations.slice() : [], c = t.pads.slice();
		dr.adjustPoolAttributes(n, r, a, o, s, c);
		let l = dr.computePoolOutputShape(n, r, o, s, a, c, t.autoPad), u = Object.assign({}, t);
		return i ? Object.assign(u, {
			kernelShape: a,
			strides: o,
			pads: c,
			dilations: s,
			cacheKey: t.cacheKey
		}) : Object.assign(u, {
			kernelShape: a,
			strides: o,
			pads: c,
			cacheKey: t.cacheKey
		}), [u, l];
	}, yb = {
		autoPad: "",
		ceilMode: 0,
		countIncludePad: !1,
		kernelShape: [],
		strides: [],
		pads: [],
		storageOrder: 0,
		dilations: [],
		cacheKey: ""
	}, Wf = {
		name: "GlobalMaxPool",
		inputNames: ["X"],
		inputTypes: [0]
	}, ec = (e, t) => (uo(t), [e.run({
		...Wf,
		get: () => Zf(t, Wf, !0, yb)
	}, t)]), uo = (e) => {
		if (!e || e.length !== 1) throw Error("Pool ops requires 1 input.");
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("Invalid input type.");
	}, tc = (e, t, n, r, i) => {
		let a = e.length;
		if (t.kernelShape.length <= 2) {
			let o = t.kernelShape[t.kernelShape.length - 1], s = t.strides[t.strides.length - 1], c = t.pads[t.pads.length / 2 - 1], l = t.pads[t.pads.length - 1], u = e[a - 1], d = "", f = "", p = "";
			if (d = c + l === 0 ? `
          for (int i = 0; i < ${o}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${s} - ${c} + i;
            ${n}
          }` : `
          for (int i = 0; i < ${o}; i++) {
            x[${a} - 1] = indices[${a} - 1] * ${s} - ${c} + i;
            if (x[${a} - 1] < 0 || x[${a} - 1] >= ${u}) {
              pad++;
              continue;
            }
            ${n}
          }`, t.kernelShape.length === 2) {
				let n = t.kernelShape[t.kernelShape.length - 2], r = t.strides[t.strides.length - 2], i = t.pads[t.pads.length / 2 - 2], s = t.pads[t.pads.length - 2], c = e[a - 2];
				f = i + s === 0 ? `
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${r} - ${i} + j;
            ` : `
            for (int j = 0; j < ${n}; j++) {
              x[${a} - 2] = indices[${a} - 2] * ${r} - ${i} + j;
              if (x[${a} - 2] < 0 || x[${a} - 2] >= ${c}) {
                pad+= ${o};
                continue;
              }
          `, p = "\n          }\n        ";
			}
			return `
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);

          float value = ${i};
          int pad = 0;
          ${f}
          ${d}
          ${p}
          ${r}
          return value;
        }
      `;
		} else {
			let o = U.size(t.kernelShape), s = U.computeStrides(t.kernelShape), c = s.length, l = t.pads.length, u = Tb(c), d = so(e, "inputDims"), f = so(t.pads, "pads"), p = so(s, "kernelStrides"), m = so(t.strides, "strides"), h = t.pads.reduce((e, t) => e + t), g = "";
			return g = h ? `
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${n}
          }` : `
          }
          ${n}
        `, `
        ${u}
        float process(int indices[${a}]) {
          int x[${a}];
          copyVec(indices, x);
          int offset[${c}];
          int pads[${l}];
          int inputDims[${a}];
          int kernelStrides[${c}];
          int strides[${c}];
          ${f}
          ${d}
          ${m}
          ${p}

          float value = ${i};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${o}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${a} - ${c}; j < ${a}; j++) {
              x[j] = indices[j] * strides[j - ${a} + ${c}]
                + offset[j - ${a} + ${c}] - pads[j - 2];
              ${g}
          }
          ${r}

          return value;
        }
      `;
		}
	}, so = (e, t) => {
		let n = "";
		for (let r = 0; r < e.length; r++) n += `
      ${t}[${r}] = ${e[r]};
    `;
		return n;
	}, Tb = (e) => `
  void offsetToIndices(int offset, int[${e}] strides, out int[${e}] indices) {
    if (${e} == 0) {
      return;
    }
    for (int i = 0; i < ${e} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${e} - 1] = offset;
  }`;
}), xr, Zt, xb, wb, nc, oc, ic, ac, sc, uc, lc, fc = E(() => {
	Ge(), hn(), fe(), ae(), xr = (e, t, n, r, i) => {
		wb(t);
		let a = {
			name: r,
			inputNames: ["A"],
			inputTypes: [0]
		};
		return [e.run({
			...a,
			cacheHint: n.cacheKey,
			get: () => xb(e, t, n, r, i, a)
		}, t)];
	}, Zt = (e) => {
		let t = e.attributes.getInts("axes", []), n = e.attributes.getInt("keepdims", 1) === 1;
		return ee({
			axes: t,
			keepDims: n
		});
	}, xb = (e, t, n, r, i, a) => {
		let o = [], s = t[0].dims.length || 1, c = [], l = U.normalizeAxes(n.axes, t[0].dims.length), u = i(t, l), d = u[1];
		for (let e = 0; e < t[0].dims.length; e++) l.indexOf(e) >= 0 || l.length === 0 ? (n.keepDims && o.push(1), d = `
          for(int j${e} = 0; j${e} < ${t[0].dims[e]}; j${e}++) {
            inputIdx[${e}] = j${e};
            ${d}
          }`) : (c.push(`inputIdx[${e}] = outputIdx[${o.length}];`), o.push(t[0].dims[e]));
		let f = `
      float process(int outputIdx[${o.length || 1}]) {
        float value;                 // final result
        int inputIdx[${s}];      // addressing input data
        ${c.join("\n")}
        ${u[0]}       // init ops for reduce max/min
        ${d}
        ${u[2]}       // final computation for reduce mean
        return value;
      }`;
		return {
			...a,
			output: {
				dims: o,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: f
		};
	}, wb = (e) => {
		if (!e || e.length !== 1) throw Error("Reduce op requires 1 input.");
		if (Jt.indexOf(e[0].type) === -1) throw Error("Invalid input type.");
	}, nc = (e, t, n) => xr(e, t, n, "ReduceSum", () => [
		"value = 0.0;",
		"value += _A(inputIdx);",
		""
	]), oc = (e, t, n) => xr(e, t, n, "ReduceMean", (e, t) => {
		let n = 1;
		for (let r = 0; r < e[0].dims.length; r++) (t.indexOf(r) >= 0 || t.length === 0) && (n *= e[0].dims[r]);
		return [
			"value = 0.0;",
			"value += _A(inputIdx);",
			`value /= ${n}.;`
		];
	}), ic = (e, t, n) => xr(e, t, n, "ReduceMax", (e, t) => {
		let n = [];
		for (let r = 0; r < e[0].dims.length; r++) (t.indexOf(r) >= 0 || t.length === 0) && n.push(`inputIdx[${r}] = 0;`);
		return [
			`${n.join("\n")}
value = _A(inputIdx);`,
			"value = max(value, _A(inputIdx));",
			""
		];
	}), ac = (e, t, n) => xr(e, t, n, "ReduceMin", (e, t) => {
		let n = [];
		for (let r = 0; r < e[0].dims.length; r++) (t.indexOf(r) >= 0 || t.length === 0) && n.push(`inputIdx[${r}] = 0;`);
		return [
			`${n.join("\n")}
value = _A(inputIdx);`,
			"value = min(value, _A(inputIdx));",
			""
		];
	}), sc = (e, t, n) => xr(e, t, n, "ReduceProd", () => [
		"value = 1.0;",
		"value *= _A(inputIdx);",
		""
	]), uc = (e, t, n) => xr(e, t, n, "ReduceLogSum", () => [
		"value = 0.0;",
		"value += _A(inputIdx);",
		"value = log(value);"
	]), lc = (e, t, n) => xr(e, t, n, "ReduceLogSumSquare", () => [
		"float t; value = 0.0;",
		"t = _A(inputIdx); value += t * t;",
		""
	]);
}), cc, pc = E(() => {
	fe(), cc = (e, t) => {
		let n = U.calculateReshapedDims(t[0].dims, t[1].integerData);
		return e.session.pack ? [e.reshapePacked(t[0], n)] : [e.reshapeUnpacked(t[0], n)];
	};
}), dc, Ni, hc, mc, mn, vb, Ri, lo, Mi = E(() => {
	Ge(), xe(), ae(), dc = {
		name: "Upsample",
		inputNames: ["X"],
		inputTypes: [0]
	}, Ni = (e, t, n) => (Ri(t, n), [e.run({
		...dc,
		cacheHint: n.cacheKey,
		get: () => vb(e, t, n)
	}, t)]), hc = (e) => mn(e, 7), mc = (e) => mn(e, 9), mn = (e, t) => {
		let n = t >= 10, r = e.attributes.getString("mode", "nearest");
		if (r !== "nearest" && r !== "linear" && (t < 11 || r !== "cubic")) throw Error(`unrecognized mode: ${r}`);
		let i = [];
		t < 9 && (i = e.attributes.getFloats("scales"), lo(i, r, n));
		let a = e.attributes.getFloat("extrapolation_value", 0), o = t > 10 ? e.attributes.getString("coordinate_transformation_mode", "half_pixel") : "asymmetric";
		if ([
			"asymmetric",
			"pytorch_half_pixel",
			"tf_half_pixel_for_nn",
			"align_corners",
			"tf_crop_and_resize",
			"half_pixel"
		].indexOf(o) === -1) throw Error(`coordinate_transform_mode '${o}' is not supported`);
		let s = o === "tf_crop_and_resize", c = s, l = r === "nearest" && t >= 11 ? e.attributes.getString("nearest_mode", "round_prefer_floor") : "";
		if ([
			"round_prefer_floor",
			"round_prefer_ceil",
			"floor",
			"ceil",
			""
		].indexOf(l) === -1) throw Error(`nearest_mode '${l}' is not supported`);
		let u = e.attributes.getFloat("cubic_coeff_a", -.75), d = e.attributes.getInt("exclude_outside", 0) !== 0;
		if (d && r !== "cubic") throw Error("exclude_outside can be set to 1 only when mode is CUBIC.");
		let f = t < 11 ? !0 : r === "nearest" && o === "asymmetric" && l === "floor", p = 0, m = 0, h = 0;
		return t > 10 ? e.inputs.length > 2 ? (p = 1, m = 2, h = 3) : (m = 1, h = 2) : t === 9 && (m = 1), ee({
			opset: t,
			isResize: n,
			mode: r,
			scales: i,
			extrapolationValue: a,
			coordinateTransformMode: o,
			useExtrapolation: c,
			needRoiInput: s,
			nearestMode: l,
			cubicCoefficientA: u,
			excludeOutside: d,
			useNearest2xOptimization: f,
			roiInputIdx: p,
			scalesInputIdx: m,
			sizesInputIdx: h
		});
	}, vb = (e, t, n) => {
		let r = q(e.session.backend.glContext.version), [i, a] = e.calculateTextureWidthAndHeight(t[0].dims, 0), o = t[0].dims.map((e, t) => Math.floor(e * n.scales[t])), [s, c] = e.calculateTextureWidthAndHeight(o, 0), l = o.length, u = Array(l), d = Array(l), f = `
      int output_pitches[${l}];
      int input_pitches[${l}];
      `;
		for (let e = l - 1; e >= 0; e--) u[e] = e === l - 1 ? 1 : u[e + 1] * o[e + 1], d[e] = e === l - 1 ? 1 : d[e + 1] * t[0].dims[e + 1], f += `
        output_pitches[${e}] = ${u[e]};
        input_pitches[${e}] = ${d[e]};
        `;
		let p = `
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${i}, ${a});
        float value = getColorAsFloat(${r.texture2D}(X, coords));
        return value;
      }
      `, m = n.mode === "nearest" ? `
    ${p}
    float process(int indices[${l}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int d, m;
      for (int dim = 0; dim < ${l}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }` : l === 4 ? `
    ${p}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${t[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }` : `
    ${p}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${c});

      ${f}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${t[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;
		return {
			...dc,
			output: {
				dims: o,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: m,
			variables: [{
				name: "scales",
				type: "int",
				arrayLength: n.scales.length,
				data: n.scales.map((e) => Math.ceil(e))
			}]
		};
	}, Ri = (e, t) => {
		if (!e || t.opset < 9 && e.length !== 1 || t.opset >= 9 && t.opset < 11 && e.length !== 2 || t.opset >= 11 && e.length < 2) throw Error("invalid inputs.");
		if (t.scales.length > 0 && e[0].dims.length !== t.scales.length) throw Error("Invalid input shape.");
		if (e[0].type === "string") throw Error("Invalid input tensor types.");
	}, lo = (e, t, n) => {
		if (n) {
			for (let t of e) if (t <= 0) throw Error("Scale value should be greater than 0.");
		} else for (let t of e) if (t < 1) throw Error("Scale value should be greater than or equal to 1.");
		if ((t === "linear" || t === "cubic") && e.length !== 2 && (e.length !== 4 || e[0] !== 1 || e[1] !== 1)) throw Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${n ? "Resize" : "Upsample"} opeartor.`);
	};
}), Gi, Ui, bc, gc, _b, Ob, Ib, Sb, yc = E(() => {
	xe(), ae(), kt(), gr(), Mi(), Gi = {
		name: "Resize",
		inputNames: ["A"],
		inputTypes: [2]
	}, Ui = (e, t, n) => (Ri(t, n), [e.run({
		...Gi,
		cacheHint: n.cacheKey,
		get: () => _b(e, t, n)
	}, t)]), bc = (e) => mn(e, 10), gc = (e) => mn(e, 11), _b = (e, t, n) => {
		let r = q(e.session.backend.glContext.version), [i, a] = Ob(t, n);
		if (i.every((e) => e === 1) && n.coordinateTransformMode !== "tf_crop_and_resize") return {
			...Gi,
			output: {
				dims: a,
				type: t[0].type,
				textureType: 2
			},
			hasMain: !0,
			shaderSource: `void main() {
                    vec4 v = ${r.texture2D}(X, TexCoords);
                    ${r.output} = v;
                }`
		};
		let o = a.length;
		if (o < 2) throw Error(`output dimension should be at least 2, but got ${o}`);
		let s = a[o - 2], c = a[o - 1], l = t[0].dims;
		if (o !== l.length) throw Error(`output dimension should match input ${l.length}, but got ${o}`);
		let u = l[o - 2], d = l[o - 1], f = i[o - 2], p = i[o - 1], m = "";
		if (n.mode !== "linear") throw Error(`resize (packed) does not support mode: '${n.mode}'`);
		switch (n.coordinateTransformMode) {
			case "asymmetric":
				m = "\n                    vec4 getSourceFracIndex(ivec4 coords) {\n                        return vec4(coords) / scaleWHWH;\n                    }\n                ";
				break;
			case "half_pixel":
				m = "\n                    vec4 getSourceFracIndex(ivec4 coords) {\n                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;\n                    }\n                ";
				break;
			case "pytorch_half_pixel":
				m = `
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${c}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${s}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${s}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;
				break;
			case "align_corners":
				m = `
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${c}.0 - 1.0, ${s}.0 - 1.0, ${c}.0 - 1.0,
                            ${s}.0 - 1.0);
                        vec4 original = vec4(${d}.0 - 1.0, ${u}.0 - 1.0, ${d}.0 - 1.0,
                            ${u}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;
				break;
			default: throw Error(`resize (packed) does not support coordinateTransformMode:                                 '${n.coordinateTransformMode}'`);
		}
		let h = Je(o), g = `
            const vec2 inputWH = vec2(${u}.0, ${d}.0);
            const vec4 scaleWHWH = vec4(float(${f}), float(${p}), float(${f}), float(${p}));
            ${Bt()}
            ${m}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${h} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${s - 1};
                bool hasNextCol = rc.z < ${c - 1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${r.output} = vec4(newValue);
            }
        `;
		return {
			...Gi,
			output: {
				dims: a,
				type: t[0].type,
				textureType: 2
			},
			hasMain: !0,
			shaderSource: g
		};
	}, Ob = (e, t) => {
		let n = e[0].dims, r = t.scales, i;
		if (r.length === 0) {
			let a = e[t.scalesInputIdx];
			if (a && a.size !== 0) {
				if (e[t.sizesInputIdx]) throw Error("Only one of scales or sizes must be provided as input.");
				r = Ib(a, t.mode, t.isResize);
			} else {
				let a = e[t.sizesInputIdx];
				if (!a || a.size === 0) throw Error("Either scales or sizes MUST be provided as input.");
				i = Array.from(a.integerData), r = Sb(i, n, t.mode, t.isResize);
			}
		} else if (e[t.sizesInputIdx]) throw Error("Only one of scales or sizes must be provided as input.");
		let a = i || n.map((e, t) => Math.floor(e * r[t]));
		return [r, a];
	}, Ib = (e, t, n) => {
		let r = Array.from(e.floatData);
		return lo(r, t, n), r;
	}, Sb = (e, t, n, r) => {
		let i = t.length, a = Array(i);
		for (let n = 0, r = i; n < r; n++) if (t[n] === 0) {
			if (e[n] !== 0) throw Error("Input dim is zero but required output dim is non-zero.");
			a[n] = 1;
		} else a[n] = e[n] / t[n];
		return lo(a, n, r), a;
	};
}), Tc, Ab, xc = E(() => {
	br(), Tc = (e, t) => (Ab(t), [new Ce([t[0].dims.length], "int32", void 0, void 0, new Int32Array(t[0].dims))]), Ab = (e) => {
		if (!e || e.length !== 1) throw Error("Shape requires 1 input.");
	};
}), zi, wc, vc, _c, Pb, Oc, Eb, Db, Ic = E(() => {
	Ge(), hn(), fe(), ae(), zi = {
		name: "Slice",
		inputNames: ["A"],
		inputTypes: [0]
	}, wc = (e, t, n) => (Pb(t), [e.run({
		...zi,
		cacheHint: n.cacheKey,
		get: () => _c(e, t[0], n)
	}, t)]), vc = (e) => {
		let t = e.attributes.getInts("starts"), n = e.attributes.getInts("ends"), r = e.attributes.getInts("axes", []);
		return ee({
			starts: t,
			ends: n,
			axes: r
		});
	}, _c = (e, t, n) => {
		let r = n.axes.length === 0 ? t.dims.slice(0).map((e, t) => t) : n.axes, i = U.normalizeAxes(r, t.dims.length), a = n.starts.map((e, n) => e > t.dims[i[n]] - 1 ? t.dims[i[n]] : U.normalizeAxis(e, t.dims[i[n]])), o = n.ends.map((e, n) => e > t.dims[i[n]] - 1 ? t.dims[i[n]] : U.normalizeAxis(e, t.dims[i[n]])), s = t.dims.slice(), c = [];
		for (let e = 0; e < i.length; e++) s[i[e]] = o[e] - a[e], a[e] > 0 && c.push(`outputIdx[${i[e]}] += ${a[e]};`);
		let l = `
      float process(int outputIdx[${s.length}]) {
        ${c.join("\n      ")}
        return _A(outputIdx);
      }`;
		return {
			...zi,
			output: {
				dims: s,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Pb = (e) => {
		if (!e || e.length !== 1) throw Error("Slice requires 1 input.");
		if (Jt.indexOf(e[0].type) === -1) throw Error("Invalid input type.");
	}, Oc = (e, t) => {
		Db(t);
		let n = Eb(e, t);
		return [e.run({
			...zi,
			cacheHint: n.cacheKey,
			get: () => _c(e, t[0], n)
		}, [t[0]])];
	}, Eb = (e, t) => {
		if (!e.session.isInitializer(t[1].dataId) || !e.session.isInitializer(t[2].dataId) || t.length >= 4 && !e.session.isInitializer(t[3].dataId) || t.length >= 5 && !e.session.isInitializer(t[4].dataId)) throw Error("dynamic slice attributes are not allowed");
		if (t.length >= 5 && t[4].integerData.some((e) => e !== 1)) throw Error("currently non-1 steps is not supported for Slice");
		let n = Array.from(t[1].integerData), r = Array.from(t[2].integerData), i = t.length >= 4 ? Array.from(t[3].integerData) : [];
		return {
			starts: n,
			ends: r,
			axes: i,
			cacheKey: `${i};${n};${r}`
		};
	}, Db = (e) => {
		if (!e || e.length < 3 || e.length > 5) throw Error("Invalid input number.");
		if (e[1].type !== "int32" || e[1].dims.length !== 1 || e[2].type !== "int32" || e[2].dims.length !== 1 || e.length >= 4 && (e[3].type !== "int32" || e[3].dims.length !== 1) || e.length >= 5 && (e[4].type !== "int32" || e[4].dims.length !== 1)) throw Error("Invalid input type.");
	};
}), Sc, Ac, Pc, Ec, Dc, Lc, Fc, Cc, Lb, Fb, Cb, $c, kc = E(() => {
	Ge(), fe(), xe(), ae(), ao(), Sc = {
		name: "SoftmaxComputeMax",
		inputNames: ["A"],
		inputTypes: [0]
	}, Ac = {
		name: "SoftmaxComputeScale",
		inputNames: ["A", "Max"],
		inputTypes: [0, 0]
	}, Pc = {
		name: "SoftMax",
		inputNames: [
			"A",
			"Max",
			"Norm"
		],
		inputTypes: [
			0,
			0,
			0
		]
	}, Ec = (e, t, n) => {
		$c(t);
		let r = t[0].dims.slice(), i = U.normalizeAxis(n.axis, r.length), a = U.sizeToDimension(r, i), o = U.sizeFromDimension(r, i);
		return Cc(e, t, n, a, o);
	}, Dc = (e) => ee({ axis: e.attributes.getInt("axis", 1) }), Lc = (e) => ee({ axis: e.attributes.getInt("axis", -1) }), Fc = (e, t, n) => {
		$c(t);
		let r = t[0].dims.slice(), i = U.normalizeAxis(n.axis, r.length), a = r.length, o = i !== a - 1, s = [], c = [], l = [], u;
		o && (c = Array.from({ length: a }).map((e, t) => t), c[i] = a - 1, c[a - 1] = i, c.map((e) => s.push(r[e])), u = ee({ perm: c }), l = Tr(e, t, u));
		let d = o ? U.sizeToDimension(s, a - 1) : U.sizeToDimension(r, a - 1), f = o ? U.sizeFromDimension(s, a - 1) : U.sizeFromDimension(r, a - 1), p = Cc(e, o ? l : t, n, d, f);
		return o ? Tr(e, p, u) : p;
	}, Cc = (e, t, n, r, i) => {
		let a = Lb(e, t[0], r, i, [r]), o = e.run({
			...Sc,
			cacheHint: n.cacheKey,
			get: () => a
		}, t), s = Fb(e, t[0], r, i, a.output.dims, [r]), c = e.run({
			...Ac,
			cacheHint: n.cacheKey,
			get: () => s
		}, [t[0], o]), l = Cb(e, t[0], r, i, a.output.dims, s.output.dims);
		return [e.run({
			...Pc,
			cacheHint: n.cacheKey,
			get: () => l
		}, [
			t[0],
			o,
			c
		])];
	}, Lb = (e, t, n, r, i) => {
		let [a, o] = e.calculateTextureWidthAndHeight(t.dims, 0), s = i.length;
		if (n < 1 || r < 1) throw Error("Logical row count N and feature count D must be greater than or equal to 1");
		if (i.length !== 1) throw Error("Dimensionality of the output should be 1");
		if (i[0] !== n) throw Error("Shape of the output should be equal to logical row count");
		let c = q(e.session.backend.glContext.version), l = `
      float process(int[${s}] indices) {
        int logical_row_start_offset = indices[0] * ${r};

        float max = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset, ${a},
        ${o} )));
        for(int i=1; i<${r}; ++i)
        {
          float current = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${o})));
          if(current > max)
          max = current;
        }

        return max;
      }`;
		return {
			...Sc,
			output: {
				dims: i,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Fb = (e, t, n, r, i, a) => {
		let [o, s] = e.calculateTextureWidthAndHeight(t.dims, 0), c = a.length;
		if (n < 1 || r < 1) throw Error("Logical row count N and feature count D must be greater than or equal to 1");
		if (a.length !== 1) throw Error("Dimensionality of the output should be 1");
		if (a[0] !== n) throw Error("Shape of the output should be equal to logical row count");
		if (i.length !== 1) throw Error("Dimensionality of the intermediate results should be 1");
		if (i[0] !== n) throw Error("Shape of the intermediate results should be equal to logical row count");
		let l = `
      float process(int[${c}] indices) {
        int logical_row_start_offset = indices[0] * ${r};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${r}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${q(e.session.backend.glContext.version).texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${o}, ${s}))) - max);
        }

        return norm_factor;
      }`;
		return {
			...Ac,
			output: {
				dims: a,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Cb = (e, t, n, r, i, a) => {
		let [o, s] = e.calculateTextureWidthAndHeight(t.dims, 0), c = t.dims.length;
		if (n < 1 || r < 1) throw Error("Logical row count N and feature count D must be greater than or equal to 1");
		if (i.length !== 1 || a.length !== 1) throw Error("Dimensionality of the intermediate results should be 1");
		if (i[0] !== n || a[0] !== n) throw Error("Shape of the intermediate results should be equal to logical row count");
		let l = `
      float process(int[${c}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${o}, ${s});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${r};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;
		return {
			...Pc,
			output: {
				dims: t.dims,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, $c = (e) => {
		if (!e || e.length !== 1) throw Error("Softmax requires 1 input.");
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("Invalid input type");
	};
}), Bc, Nc, Rc, $b, kb, Bb, Mc = E(() => {
	Ge(), fe(), ae(), Bc = {
		name: "Split",
		inputNames: ["A"],
		inputTypes: [0]
	}, Nc = (e, t, n) => {
		Bb(t);
		let r = U.normalizeAxis(n.axis, t[0].dims.length), i = $b(e, t, r, n), a = [];
		for (let o = 0; o < i; ++o) a.push(e.run({
			...Bc,
			cacheHint: `${n.cacheKey};${o}`,
			get: () => kb(e, t[0], n, r, o)
		}, t));
		return a;
	}, Rc = (e) => {
		let t = e.attributes.getInt("axis", 0), n = e.attributes.getInts("split", []), r = e.outputs.length;
		return ee({
			axis: t,
			split: n,
			numOutputs: r
		});
	}, $b = (e, t, n, r) => {
		let [, i] = un.splitShape(t[0].dims, n, r.split, r.numOutputs);
		return i.length;
	}, kb = (e, t, n, r, i) => {
		let [a, o] = un.splitShape(t.dims, r, n.split, n.numOutputs), s = o[i], c = a[i], l = `
      float process(int indices[${c.length}]) {
        indices[${r}] += ${s};
        return _A(indices);
      }
    `;
		return {
			...Bc,
			cacheHint: `${n.cacheKey}:${i}`,
			output: {
				dims: c,
				type: t.type,
				textureType: 0
			},
			shaderSource: l
		};
	}, Bb = (e) => {
		if (!e || e.length !== 1) throw Error("Split requires one input.");
		if (e[0].type !== "int8" && e[0].type !== "uint8" && e[0].type !== "int16" && e[0].type !== "uint16" && e[0].type !== "int32" && e[0].type !== "uint32" && e[0].type !== "float32" && e[0].type !== "float64" && e[0].type !== "bool") throw Error("Invalid input type.");
	};
}), Vi, Gc, Uc, Nb, Rb, zc = E(() => {
	fe(), Vi = (e, t, n) => {
		Nb(t);
		let r = U.squeezeShape(t[0].dims, n);
		return [e.reshapeUnpacked(t[0], r)];
	}, Gc = (e, t) => (Rb(t), Vi(e, [t[0]], Array.from(t[1].integerData))), Uc = (e) => e.attributes.getInts("axes"), Nb = (e) => {
		if (!e || e.length !== 1) throw Error("Squeeze requires 1 input.");
		if (e[0].type === "string") throw Error("invalid input tensor types.");
	}, Rb = (e) => {
		if (!e || e.length !== 2) throw Error("Squeeze requires 2 inputs.");
		if (e[1].type !== "int32") throw Error("Invalid input type.");
	};
}), Vc, Mb, Gb, Wc = E(() => {
	xe(), ae(), Vc = (e, t) => {
		Gb(t);
		let n = {
			name: "Sum",
			inputNames: t.map((e, t) => `X${t}`),
			inputTypes: Array(t.length).fill(0)
		};
		return [e.run({
			...n,
			get: () => Mb(e, t, n)
		}, t)];
	}, Mb = (e, t, n) => {
		let r = q(e.session.backend.glContext.version), i = t[0].dims.slice(), a = `
      void main() {
        vec4 result = ${t.map((e, t) => `${r.texture2D}(X${t},TexCoords)`).join(" + ")};
        ${r.output} = result;
      }
    `;
		return {
			...n,
			output: {
				dims: i,
				type: t[0].type,
				textureType: 0
			},
			hasMain: !0,
			shaderSource: a
		};
	}, Gb = (e) => {
		if (!e || e.length === 0) throw Error("Sum requires inputs.");
		let t = e[0].dims.length;
		for (let n = 1; n < e.length; n++) {
			if (t !== e[n].dims.length) throw Error("Input shapes are mismatched.");
			for (let r = 0; r < t; r++) if (e[0].dims[r] !== e[n].dims[r]) throw Error("Input shapes are not matched.");
		}
		if (e[0].type !== "float32" && e[0].type !== "float64") throw Error("Invalid input type.");
		for (let t = 1; t < e.length; t++) if (e[0].type !== e[t].type) throw Error("Input types are not matched.");
	};
}), Hc, Ub, zb, qc = E(() => {
	hn(), ae(), Hc = (e, t) => {
		zb(t);
		let n = {
			name: "Tile",
			inputNames: ["A"],
			inputTypes: [0]
		};
		return [e.run({
			...n,
			get: () => Ub(e, t, n)
		}, t)];
	}, Ub = (e, t, n) => {
		let r = t[0].dims.slice(), i = Array(r.length), a = [];
		for (let e = 0; e < r.length; e++) i[e] = r[e] * t[1].numberData[e], a.push(`inputIdx[${e}] = int(mod(float(outputIdx[${e}]), ${r[e]}.));`);
		let o = i.length, s = `
      float process(int outputIdx[${o}]) {
        int inputIdx[${o}];
        ${a.join("\n")}
        return _A(inputIdx);
      }
    `;
		return {
			...n,
			output: {
				dims: i,
				type: t[0].type,
				textureType: 0
			},
			shaderSource: s
		};
	}, zb = (e) => {
		if (!e || e.length !== 2) throw Error("Tile requires 2 input.");
		if (e[1].dims.length !== 1) throw Error("The second input shape must 1 dimension.");
		if (e[1].dims[0] !== e[0].dims.length) throw Error("Invalid input shape.");
		if (Jt.indexOf(e[0].type) === -1) throw Error("Invalid input type.");
		if (e[1].type !== "int32" && e[1].type !== "int16") throw Error("Invalid repeat type.");
	};
}), Wi, jc, Yc, Vb, Wb, Xc = E(() => {
	fe(), Wi = (e, t, n) => {
		Vb(t);
		let r = U.unsqueezeShape(t[0].dims, n);
		return [e.reshapeUnpacked(t[0], r)];
	}, jc = (e, t) => (Wb(t), Wi(e, [t[0]], Array.from(t[1].integerData))), Yc = (e) => e.attributes.getInts("axes"), Vb = (e) => {
		if (!e || e.length !== 1) throw Error("Unsqueeze requires 1 input.");
		if (e[0].type === "string") throw Error("invalid input tensor types.");
	}, Wb = (e) => {
		if (!e || e.length !== 2) throw Error("Unsqueeze requires 2 inputs.");
		if (e[1].type !== "int32") throw Error("Invalid input type.");
	};
}), Kc, Jc = E(() => {
	al(), Tl(), vl(), Pl(), no(), pf(), yf(), wf(), Of(), Pf(), Lf(), kf(), Mf(), oo(), Vf(), rc(), fc(), pc(), yc(), xc(), Ic(), kc(), Mc(), zc(), Wc(), qc(), ao(), Ai(), Xc(), Mi(), Kc = [
		[
			"Abs",
			"",
			"6+",
			El
		],
		[
			"Acos",
			"",
			"7+",
			Dl
		],
		[
			"Add",
			"",
			"7+",
			sl
		],
		[
			"And",
			"",
			"7+",
			ul
		],
		[
			"Asin",
			"",
			"7+",
			Ll
		],
		[
			"Atan",
			"",
			"7+",
			Fl
		],
		[
			"AveragePool",
			"",
			"7+",
			Hf,
			qf
		],
		[
			"BatchNormalization",
			"",
			"7+",
			ol,
			il
		],
		[
			"Cast",
			"",
			"6+",
			xl,
			wl
		],
		[
			"Ceil",
			"",
			"6+",
			kl
		],
		[
			"Clip",
			"",
			"6-10",
			Ii,
			Cl
		],
		[
			"Clip",
			"",
			"11+",
			$l
		],
		[
			"Concat",
			"",
			"4+",
			Il,
			Al
		],
		[
			"Conv",
			"",
			"1+",
			Ci,
			$i
		],
		[
			"ConvTranspose",
			"",
			"1+",
			ff,
			cf
		],
		[
			"Cos",
			"",
			"7+",
			Bl
		],
		[
			"Div",
			"",
			"7+",
			ll
		],
		[
			"Dropout",
			"",
			"7+",
			Si
		],
		[
			"DepthToSpace",
			"",
			"1+",
			bf,
			gf
		],
		[
			"Equal",
			"",
			"7+",
			fl
		],
		[
			"Elu",
			"",
			"6+",
			Nl,
			Rl
		],
		[
			"Exp",
			"",
			"6+",
			Ml
		],
		[
			"Flatten",
			"",
			"1+",
			Tf,
			xf
		],
		[
			"Floor",
			"",
			"6+",
			Gl
		],
		[
			"FusedConv",
			"com.microsoft",
			"1+",
			Ci,
			$i
		],
		[
			"Gather",
			"",
			"1+",
			vf,
			_f
		],
		[
			"Gemm",
			"",
			"7-10",
			ki,
			Sf
		],
		[
			"Gemm",
			"",
			"11+",
			ki,
			Af
		],
		[
			"GlobalAveragePool",
			"",
			"1+",
			Yf,
			Xf
		],
		[
			"GlobalMaxPool",
			"",
			"1+",
			ec
		],
		[
			"Greater",
			"",
			"7+",
			cl
		],
		[
			"Identity",
			"",
			"1+",
			Si
		],
		[
			"ImageScaler",
			"",
			"1+",
			Ef,
			Df
		],
		[
			"InstanceNormalization",
			"",
			"6+",
			Cf,
			$f
		],
		[
			"LeakyRelu",
			"",
			"6+",
			Ul,
			zl
		],
		[
			"Less",
			"",
			"7+",
			pl
		],
		[
			"LRN",
			"",
			"1+",
			Bf,
			Nf
		],
		[
			"Log",
			"",
			"6+",
			Vl
		],
		[
			"MatMul",
			"",
			"1+",
			rf,
			nf
		],
		[
			"MaxPool",
			"",
			"1+",
			Kf,
			Jf
		],
		[
			"Mul",
			"",
			"7+",
			dl
		],
		[
			"Neg",
			"",
			"6+",
			Wl
		],
		[
			"Not",
			"",
			"1+",
			Hl
		],
		[
			"Or",
			"",
			"7+",
			hl
		],
		[
			"Pad",
			"",
			"2-10",
			Bi,
			Gf
		],
		[
			"Pad",
			"",
			"11+",
			Uf,
			zf
		],
		[
			"Pow",
			"",
			"7+",
			ml
		],
		[
			"PRelu",
			"",
			"7+",
			bl
		],
		[
			"ReduceLogSum",
			"",
			"1+",
			uc,
			Zt
		],
		[
			"ReduceMax",
			"",
			"1+",
			ic,
			Zt
		],
		[
			"ReduceMean",
			"",
			"1+",
			oc,
			Zt
		],
		[
			"ReduceMin",
			"",
			"1+",
			ac,
			Zt
		],
		[
			"ReduceProd",
			"",
			"1+",
			sc,
			Zt
		],
		[
			"ReduceSum",
			"",
			"1-12",
			nc,
			Zt
		],
		[
			"ReduceSumSquare",
			"",
			"1+",
			lc,
			Zt
		],
		[
			"Relu",
			"",
			"6+",
			ql
		],
		[
			"Reshape",
			"",
			"5+",
			cc
		],
		[
			"Resize",
			"",
			"10",
			Ui,
			bc
		],
		[
			"Resize",
			"",
			"11+",
			Ui,
			gc
		],
		[
			"Shape",
			"",
			"1+",
			Tc
		],
		[
			"Sigmoid",
			"",
			"6+",
			jl
		],
		[
			"Sin",
			"",
			"7+",
			Yl
		],
		[
			"Slice",
			"",
			"10+",
			Oc
		],
		[
			"Slice",
			"",
			"1-9",
			wc,
			vc
		],
		[
			"Softmax",
			"",
			"1-12",
			Ec,
			Dc
		],
		[
			"Softmax",
			"",
			"13+",
			Fc,
			Lc
		],
		[
			"Split",
			"",
			"2-12",
			Nc,
			Rc
		],
		[
			"Sqrt",
			"",
			"6+",
			Xl
		],
		[
			"Squeeze",
			"",
			"1-12",
			Vi,
			Uc
		],
		[
			"Squeeze",
			"",
			"13+",
			Gc
		],
		[
			"Sub",
			"",
			"7+",
			gl
		],
		[
			"Sum",
			"",
			"6+",
			Vc
		],
		[
			"Tan",
			"",
			"7+",
			Kl
		],
		[
			"Tanh",
			"",
			"6+",
			Jl
		],
		[
			"Tile",
			"",
			"6+",
			Hc
		],
		[
			"Transpose",
			"",
			"1+",
			Tr,
			hf
		],
		[
			"Upsample",
			"",
			"7-8",
			Ni,
			hc
		],
		[
			"Upsample",
			"",
			"9",
			Ni,
			mc
		],
		[
			"Unsqueeze",
			"",
			"1-12",
			Wi,
			Yc
		],
		[
			"Unsqueeze",
			"",
			"13+",
			jc
		],
		[
			"Xor",
			"",
			"7+",
			yl
		]
	];
});
function Qc(e) {
	let t = {}, n;
	for (; (n = Zc.exec(e)) !== null;) {
		let e = n[3].split(",").map((e) => {
			let t = e.trim().split(" ");
			return t && t.length === 2 ? {
				type: t[0],
				name: t[1]
			} : null;
		}).filter((e) => e !== null);
		t[n[2]] = {
			params: e,
			body: n[4]
		};
	}
	for (let r in t) {
		let i = Hb.replace("__FUNC__", r), a = new RegExp(i, "gm");
		for (; (n = a.exec(e)) !== null;) {
			let i = n[1], a = n[2], o = n[3].split(","), s = i ? `${i} ${a};` : "", c = t[r].body, l = "";
			t[r].params.forEach((e, t) => {
				e && (l += `${e.type} ${e.name} = ${o[t]};
`);
			}), c = `${l}
 ${c}`, c = c.replace("return", `${a} = `);
			let u = `
      ${s}
      {
        ${c}
      }
      `;
			e = e.replace(n[0], u);
		}
	}
	return e = e.replace(Zc, ""), e;
}
var Zc, Hb, ep = E(() => {
	Zc = /@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm, Hb = "(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;";
});
function Ur(e, t) {
	let n = [], r = [], i = t != null && Array.isArray(t) && t.length === 0, a = t == null || i ? null : qb(t, e).sort(), o = 0;
	for (let t = 0; t < e.length; ++t) {
		if (a != null) {
			if (a[o] === t && e[t] !== 1) throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);
			(a[o] == null || a[o] > t) && e[t] === 1 && (n.push(e[t]), r.push(t)), a[o] <= t && o++;
		}
		e[t] !== 1 && (n.push(e[t]), r.push(t));
	}
	return {
		newShape: n,
		keptDims: r
	};
}
function qb(e, t) {
	let n = t.length;
	return e = e == null ? t.map((e, t) => t) : [].concat(e), kr(e.every((e) => e >= -n && e < n), () => `All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`), kr(e.every(jb), () => `All values in axis param must be integers but got axis ${e}`), e.map((e) => e < 0 ? n + e : e);
}
function jb(e) {
	return e % 1 == 0;
}
function Yb(e) {
	if (e.length === 0) return 1;
	let t = e[0];
	for (let n = 1; n < e.length; n++) t *= e[n];
	return t;
}
function tp(e) {
	let t = Math.ceil(Math.sqrt(e));
	return [t, Math.ceil(e / t)];
}
var fo, Hi = E(() => {
	at(), fe(), fo = class {
		constructor(e) {
			this.maxTextureSize = e;
		}
		computeTextureWH(e, t) {
			let n = this.computeTexture(e, t);
			return t && t.isPacked && (n[0] /= 2, n[1] /= 2), t && t.reverseWH ? [n[1], n[0]] : n;
		}
		computeTexture(e, t) {
			let n = t && t.isPacked;
			if (e.length === 0) return n ? [2, 2] : [1, 1];
			let r = this.maxTextureSize;
			if (t && t.breakAxis !== void 0) {
				let n = t.breakAxis >= e.length ? 1 : e.slice(t.breakAxis).reduce((e, t) => e * t), i = t.breakAxis <= 0 ? 1 : e.slice(0, t.breakAxis).reduce((e, t) => e * t);
				if (n > r || i > r) ce.verbose("TextureLayout", `Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);
				else return [n, i];
			}
			let i = e.slice(0);
			n && (r *= 2, i = i.map((e, t) => t >= i.length - 2 ? i[t] % 2 == 0 ? i[t] : i[t] + 1 : i[t]), i.length === 1 && (i = [2, i[0]])), i.length !== 2 && (i = Ur(i).newShape);
			let a = Yb(i);
			return i.length <= 1 && a <= r ? [1, a] : i.length === 2 && i[0] <= r && i[1] <= r ? i : i.length === 3 && i[0] * i[1] <= r && i[2] <= r ? [i[0] * i[1], i[2]] : i.length === 3 && i[0] <= r && i[1] * i[2] <= r ? [i[0], i[1] * i[2]] : i.length === 4 && i[0] * i[1] * i[2] <= r && i[3] <= r ? [i[0] * i[1] * i[2], i[3]] : i.length === 4 && i[0] <= r && i[1] * i[2] * i[3] <= r ? [i[0], i[1] * i[2] * i[3]] : n ? tp(a / 4).map((e) => e * 2) : tp(a);
		}
	};
}), co, rp = E(() => {
	fe(), Ht(), xe(), Hi(), kt(), co = class extends ft {
		constructor(e) {
			super(e);
		}
		getFunctions() {
			return {
				...this.offsetToCoords(),
				...this.coordsToOffset(),
				...this.toVec(),
				...this.valueFrom(),
				...this.getCommonUtilFuncs(),
				...this.getInputsSamplingSnippets(),
				...this.getOutputSamplingSnippet()
			};
		}
		getCustomTypes() {
			return {};
		}
		offsetToCoords() {
			return { offsetToCoords: new R("\n      vec2 offsetToCoords(int offset, int width, int height) {\n        int t = offset / width;\n        int s = offset - t*width;\n        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);\n        return coords;\n      }\n      ") };
		}
		coordsToOffset() {
			return { coordsToOffset: new R("\n      int coordsToOffset(vec2 coords, int width, int height) {\n        float s = coords.s * float(width);\n        float t = coords.t * float(height);\n        int offset = int(t) * width + int(s);\n        return offset;\n      }\n      ") };
		}
		getOutputSamplingSnippet() {
			let e = this.context.outputTextureLayout;
			return e.isPacked ? this.getPackedOutputSamplingSnippet(e) : this.getUnpackedOutputSamplingSnippet(e);
		}
		getPackedOutputSamplingSnippet(e) {
			let t = e.unpackedShape, n = [e.width, e.height], r = {}, i = "getOutputCoords";
			switch (t.length) {
				case 0:
					r[i] = this.getOutputScalarCoords();
					break;
				case 1:
					r[i] = this.getOutputPacked1DCoords(t, n);
					break;
				case 2:
					r[i] = this.getOutputPacked2DCoords(t, n);
					break;
				case 3:
					r[i] = this.getOutputPacked3DCoords(t, n);
					break;
				default: r[i] = this.getOutputPackedNDCoords(t, n);
			}
			let a = `
      void setOutput(vec4 val) {
        ${q(this.context.glContext.version).output} = val;
      }
    `, o = "floatTextureSetRGBA";
			return r.floatTextureSetRGBA = new R(a), r;
		}
		getUnpackedOutputSamplingSnippet(e) {
			let t = e.unpackedShape, n = [e.width, e.height], r = {}, i = "getOutputCoords";
			switch (t.length) {
				case 0:
					r[i] = this.getOutputScalarCoords();
					break;
				case 1:
					r[i] = this.getOutputUnpacked1DCoords(t, n);
					break;
				case 2:
					r[i] = this.getOutputUnpacked2DCoords(t, n);
					break;
				case 3:
					r[i] = this.getOutputUnpacked3DCoords(t, n);
					break;
				case 4:
					r[i] = this.getOutputUnpacked4DCoords(t, n);
					break;
				case 5:
					r[i] = this.getOutputUnpacked5DCoords(t, n);
					break;
				case 6:
					r[i] = this.getOutputUnpacked6DCoords(t, n);
					break;
				default: throw Error(`Unsupported output dimensionality: ${t.length}`);
			}
			let a = `
        void setOutput(float val) {
          ${q(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `, o = "floatTextureSetR";
			return r.floatTextureSetR = new R(a), r;
		}
		getOutputScalarCoords() {
			return new R("\n      int getOutputCoords() {\n        return 0;\n      }\n    ");
		}
		getOutputPacked1DCoords(e, t) {
			let n = t, r = "";
			return n[0] === 1 ? (r = `
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `, new R(r)) : n[1] === 1 ? (r = `
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `, new R(r)) : (r = `
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `, new R(r));
		}
		getOutputPacked2DCoords(e, t) {
			let n = "";
			if (pr.arraysEqual(e, t)) return n = `
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `, new R(n);
			let r = t, i = Math.ceil(e[1] / 2);
			return n = `
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));

          int index = resTexRC.y * ${r[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec2(r, c);
        }
      `, new R(n);
		}
		getOutputPacked3DCoords(e, t) {
			let n = [t[0], t[1]], r = Math.ceil(e[2] / 2), i = r * Math.ceil(e[1] / 2), a = `
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${i};
          index -= b * ${i};

          // reverse r and c order for packed texture
          int r = imod(index, ${r}) * 2;
          int c = 2 * (index / ${r});

          return ivec3(b, r, c);
        }
      `;
			return new R(a);
		}
		getOutputPackedNDCoords(e, t) {
			let n = [t[0], t[1]], r = Math.ceil(e[e.length - 1] / 2), i = r * Math.ceil(e[e.length - 2] / 2), a = i, o = "", s = "b, r, c";
			for (let t = 2; t < e.length - 1; t++) a *= e[e.length - t - 1], o = `
      int b${t} = index / ${a};
      index -= b${t} * ${a};
    ` + o, s = `b${t}, ` + s;
			let c = `
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${o}

        int b = index / ${i};
        index -= b * ${i};

        // reverse r and c order for packed texture
        int r = imod(index, ${r}) * 2;
        int c = 2 * (index / ${r});

        return ivec${e.length}(${s});
      }
    `;
			return new R(c);
		}
		getOutputUnpacked1DCoords(e, t) {
			let n = `
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;
			return new R(n);
		}
		getOutputUnpacked2DCoords(e, t) {
			let n = `
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;
			return new R(n);
		}
		getOutputUnpacked3DCoords(e, t) {
			let n = "", r = e.length, i = null;
			r < 2 && (i = []), i = Array(r - 1), i[r - 2] = e[r - 1];
			for (let t = r - 3; t >= 0; --t) i[t] = i[t + 1] * e[t + 1];
			let a = [
				"r",
				"c",
				"d"
			], o = i.map((e, t) => `${`int ${a[t]} = index / ${e}`}; ${t === i.length - 1 ? `int ${a[t + 1]} = index - ${a[t]} * ${e}` : `index -= ${a[t]} * ${e}`};`).join("");
			return n = `
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec3(r, c, d);
        }
      `, new R(n);
		}
		getOutputUnpacked4DCoords(e, t) {
			let n = "", r = e.length, i = null;
			r < 2 && (i = []), i = Array(r - 1), i[r - 2] = e[r - 1];
			for (let t = r - 3; t >= 0; --t) i[t] = i[t + 1] * e[t + 1];
			let a = [
				"r",
				"c",
				"d",
				"d2"
			], o = i.map((e, t) => `${`int ${a[t]} = index / ${e}`}; ${t === i.length - 1 ? `int ${a[t + 1]} = index - ${a[t]} * ${e}` : `index -= ${a[t]} * ${e}`};`).join("");
			return n = `
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec4(r, c, d, d2);
        }
      `, new R(n);
		}
		getOutputUnpacked5DCoords(e, t) {
			let n = "", r = e.length, i = null;
			r < 2 && (i = []), i = Array(r - 1), i[r - 2] = e[r - 1];
			for (let t = r - 3; t >= 0; --t) i[t] = i[t + 1] * e[t + 1];
			let a = [
				"r",
				"c",
				"d",
				"d2",
				"d3"
			], o = i.map((e, t) => `${`int ${a[t]} = index / ${e}`}; ${t === i.length - 1 ? `int ${a[t + 1]} = index - ${a[t]} * ${e}` : `index -= ${a[t]} * ${e}`};`).join("");
			return n = `
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${o}
          return ivec5(r, c, d, d2, d3);
        }
      `, new R(n);
		}
		getOutputUnpacked6DCoords(e, t) {
			let n = "", r = e.length, i = null;
			r < 2 && (i = []), i = Array(r - 1), i[r - 2] = e[r - 1];
			for (let t = r - 3; t >= 0; --t) i[t] = i[t + 1] * e[t + 1];
			let a = [
				"r",
				"c",
				"d",
				"d2",
				"d3",
				"d4"
			], o = i.map((e, t) => `${`int ${a[t]} = index / ${e}`}; ${t === i.length - 1 ? `int ${a[t + 1]} = index - ${a[t]} * ${e}` : `index -= ${a[t]} * ${e}`};`).join("");
			return n = `
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${o}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `, new R(n);
		}
		getCommonUtilFuncs() {
			let e = {}, t = "uvFromFlat";
			e[t] = new R("\n    vec2 uvFromFlat(int texNumR, int texNumC, int index) {\n      int texC = index / texNumR;\n      int texR = index - texC * texNumR;\n      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to\n      //       v.\n      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);\n    }\n    "), t = "packedUVfrom1D", e[t] = new R("\n      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n        int texelIndex = index / 2;\n        int texR = texelIndex / texNumC;\n        int texC = texelIndex - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), t = "packedUVfrom2D", e[t] = new R("\n      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {\n        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n        int texR = texelIndex / texNumC;\n        int texC = texelIndex - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), t = "packedUVfrom3D", e[t] = new R("\n      vec2 packedUVfrom3D(int texNumR, int texNumC,\n          int texelsInBatch, int texelsInLogicalRow, int b,\n          int row, int col) {\n        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n        int texR = index / texNumC;\n        int texC = index - texR * texNumC;\n        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n      }\n      "), t = "sampleTexture";
			let n = q(this.context.glContext.version);
			return e[t] = new R(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`), e;
		}
		getInputsSamplingSnippets() {
			let e = {}, t = this.context.outputTextureLayout;
			return this.context.programInfo.inputNames.forEach((n, r) => {
				let i = this.context.inputTextureLayouts[r], a = Kn(n);
				i.isPacked ? e[a] = this.getPackedSamplerFromInput(a, n, i) : e[a] = this.getUnpackedSamplerFromInput(a, n, i);
				let o = zu(n);
				i.unpackedShape.length <= t.unpackedShape.length && (i.isPacked ? e[o] = this.getPackedSamplerAtOutputCoords(o, i, t, n) : e[o] = this.getUnpackedSamplerAtOutputCoords(o, i, t, n));
			}), e;
		}
		getPackedSamplerAtOutputCoords(e, t, n, r) {
			let i = t.unpackedShape, a = n.unpackedShape, o = Kn(r), s = i.length, c = a.length, l = Ke.getBroadcastDims(i, a), u = Je(c), d = c - s, f, p = Ot();
			f = s === 0 ? "" : c < 2 && l.length >= 1 ? "coords = 0;" : l.map((e) => `coords.${p[e + d]} = 0;`).join("\n");
			let m = "";
			m = c < 2 && s > 0 ? "coords" : i.map((e, t) => `coords.${p[t + d]}`).join(", ");
			let h = "return outputValue;", g = U.size(i) === 1, _ = U.size(a) === 1;
			if (s === 1 && !g && !_) h = "\n        return vec4(outputValue.xy, outputValue.xy);\n      ";
			else if (g && !_) h = c === 1 ? "\n          return vec4(outputValue.x, outputValue.x, 0., 0.);\n        " : "\n          return vec4(outputValue.x);\n        ";
			else if (l.length) {
				let e = s - 2, t = s - 1;
				l.indexOf(e) > -1 && l.indexOf(t) > -1 ? h = "return vec4(outputValue.x);" : l.indexOf(e) > -1 ? h = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : l.indexOf(t) > -1 && (h = "return vec4(outputValue.xx, outputValue.zz);");
			}
			let v = `
      vec4 ${e}() {
        ${u} coords = getOutputCoords();
        ${`
        int lastDim = coords.${p[c - 1]};
        coords.${p[c - 1]} = coords.${p[c - 2]};
        coords.${p[c - 2]} = lastDim;
      `}
        ${f}
        vec4 outputValue = ${o}(${m});
        ${h}
      }
    `;
			return new R(v, ["coordinates.getOutputCoords"]);
		}
		getUnpackedSamplerAtOutputCoords(e, t, n, r) {
			let i = [n.width, n.height], a = [t.width, t.height], o = t.unpackedShape.length, s = n.unpackedShape.length, c = t.unpackedShape, l = n.unpackedShape, u = Kn(r);
			if (o === s && pr.arraysEqual(a, i)) {
				let t = `
          float ${e}() {
            return sampleTexture(${r}, TexCoords);
          }
        `;
				return new R(t, ["coordinates.sampleTexture"]);
			}
			let d = Je(s), f = Ke.getBroadcastDims(c, l), p = s - o, m, h = Ot();
			m = o === 0 ? "" : s < 2 && f.length >= 1 ? "coords = 0;" : f.map((e) => `coords.${h[e + p]} = 0;`).join("\n");
			let g = "";
			g = s < 2 && o > 0 ? "coords" : t.unpackedShape.map((e, t) => `coords.${h[t + p]}`).join(", ");
			let _ = `
        float ${e}() {
          ${d} coords = getOutputCoords();
          ${m}
          return ${u}(${g});
        }
      `;
			return new R(_, ["coordinates.getOutputCoords"]);
		}
		getPackedSamplerFromInput(e, t, n) {
			switch (n.unpackedShape.length) {
				case 0: return this.getPackedSamplerScalar(e, t);
				case 1: return this.getPackedSampler1D(e, t, n);
				case 2: return this.getPackedSampler2D(e, t, n);
				case 3: return this.getPackedSampler3D(e, t, n);
				default: return this.getPackedSamplerND(e, t, n);
			}
		}
		getUnpackedSamplerFromInput(e, t, n) {
			let r = n.unpackedShape;
			switch (r.length) {
				case 0: return this.getUnpackedSamplerScalar(e, t, n);
				case 1: return this.getUnpackedSampler1D(e, t, n);
				case 2: return this.getUnpackedSampler2D(e, t, n);
				case 3: return this.getUnpackedSampler3D(e, t, n);
				case 4: return this.getUnpackedSampler4D(e, t, n);
				case 5: return this.getUnpackedSampler5D(e, t, n);
				case 6: return this.getUnpackedSampler6D(e, t, n);
				default: throw Error(`Unsupported dimension ${r.length}-D`);
			}
		}
		getPackedSamplerScalar(e, t) {
			let n = `
          vec4 ${e}() {
            return ${q(this.context.glContext.version).texture2D}(${t}, halfCR);
          }
        `;
			return new R(n);
		}
		getPackedSampler1D(e, t, n) {
			let r = [n.width, n.height], i = [r[1], r[0]], a = q(this.context.glContext.version), o = `vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${i[0]}, ${i[1]}, index);
      return ${a.texture2D}(${t}, uv);
    }`;
			return new R(o, ["coordinates.packedUVfrom1D"]);
		}
		getPackedSampler2D(e, t, n) {
			let r = n.unpackedShape, i = [n.width, n.height], a = q(this.context.glContext.version), o = i[0], s = i[1];
			if (i != null && pr.arraysEqual(r, i)) {
				let n = `vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);
        return ${a.texture2D}(${t}, uv);
      }`;
				return new R(n);
			}
			let c = i, l = Math.ceil(r[1] / 2), u = `vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c[1]}, ${c[0]}, ${l}, row, col);
      return ${a.texture2D}(${t}, uv);
    }`;
			return new R(u, ["coordinates.packedUVfrom2D"]);
		}
		getPackedSampler3D(e, t, n) {
			let r = n.unpackedShape, i = [n.width, n.height], a = [i[0], i[1]], o = q(this.context.glContext.version);
			if (r[0] === 1) {
				let i = r.slice(1), a = [1, 2], o = Br(r, i), s = [
					"b",
					"row",
					"col"
				], c = JSON.parse(JSON.stringify(n));
				c.unpackedShape = o;
				let l = this.getPackedSamplerFromInput(e, t, c), u = `${l.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${Nr(s, a)});
      } `;
				return new R(u, l.dependencies);
			}
			let s = a[0], c = a[1], l = Math.ceil(r[2] / 2), u = `vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${s}, ${l * Math.ceil(r[1] / 2)}, ${l}, b, row, col);
      return ${o.texture2D}(${t}, uv);}`;
			return new R(u, ["coordinates.packedUVfrom3D"]);
		}
		getPackedSamplerND(e, t, n) {
			let r = n.unpackedShape, i = r.length, a = [n.width, n.height], o = q(this.context.glContext.version), s = [a[0], a[1]], c = s[1], l = s[0], u = Math.ceil(r[i - 1] / 2), d = u * Math.ceil(r[i - 2] / 2), f = "int b, int row, int col", p = `b * ${d} + (row / 2) * ${u} + (col / 2)`;
			for (let e = 2; e < i - 1; e++) f = `int b${e}, ` + f, d *= r[i - e - 1], p = `b${e} * ${d} + ` + p;
			let m = `vec4 ${e}(${f}) {
      int index = ${p};
      int texR = index / ${l};
      int texC = index - texR * ${l};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${l}, ${c});
      return ${o.texture2D}(${t}, uv);
    }`;
			return new R(m);
		}
		getUnpackedSamplerScalar(e, t, n) {
			let [r, i] = [n.width, n.height];
			if (r === 1 && i === 1) {
				let n = `
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;
				return new R(n, ["coordinates.sampleTexture"]);
			}
			let a = `
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${r}, ${i});
          vec2 uv = uvFromFlat(${r}, ${i}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;
			return new R(a, [
				"coordinates.uvFromFlat",
				"coordinates.sampleTexture",
				"coordinates.coordsToOffset"
			]);
		}
		getUnpackedSampler1D(e, t, n) {
			let r = n.width, i = n.height;
			if (i === 1 && r === 1) {
				let n = `
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;
				return new R(n, ["coordinates.sampleTexture"]);
			}
			if (i === 1) {
				let n = `
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${r}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;
				return new R(n, ["coordinates.sampleTexture"]);
			}
			if (r === 1) {
				let n = `
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${i}.0);
            return sampleTexture(${t}, uv);
          }
        `;
				return new R(n, ["coordinates.sampleTexture"]);
			}
			let a = `
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${r}, ${i}, index);
          return sampleTexture(${t}, uv);
        }
      `;
			return new R(a, ["coordinates.uvFromFlat", "coordinates.sampleTexture"]);
		}
		getUnpackedSampler2D(e, t, n) {
			let r = n.unpackedShape, i = [n.height, n.width];
			if (i != null && pr.arraysEqual(r, i)) {
				let n = `
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${i[1]}.0, ${i[0]}.0);
            return sampleTexture(${t}, uv);
          }
        `;
				return new R(n, ["coordinates.sampleTexture"]);
			}
			let { newShape: a, keptDims: o } = Ur(r), s = a;
			if (s.length < r.length) {
				let i = Br(r, s), a = JSON.parse(JSON.stringify(n));
				a.unpackedShape = i;
				let c = `
          ${this.getUnpackedSamplerFromInput(e, t, a).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${Nr(["col", "row"], o)});
          }
        `;
				return new R(c, ["coordinates.sampleTexture"]);
			}
			let c = i[1], l = i[0];
			if (l === 1) {
				let n = `
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${c}, ${l});
            float index = dot(vec3(row, col, offset_${t}), vec3(${r[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
            return sampleTexture(${t}, uv);
          }
        `;
				return new R(n, ["coordinates.sampleTexture", "coordinates.coordsToOffset"]);
			}
			if (c === 1) {
				let n = `
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${c}, ${l});
            float index = dot(vec3(row, col, offset_${t}), vec3(${r[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${l}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;
				return new R(n, ["coordinates.sampleTexture", "coordinates.coordsToOffset"]);
			}
			let u = `
        float ${e}(int row, int col) {
          int index = col * ${r[1]} + row;
          vec2 uv = uvFromFlat(${c}, ${l}, index);
          return sampleTexture(${t}, uv);
        }
      `;
			return new R(u, [
				"coordinates.uvFromFlat",
				"coordinates.sampleTexture",
				"coordinates.coordsToOffset"
			]);
		}
		getUnpackedSampler3D(e, t, n) {
			let r = n.unpackedShape, i = r[1] * r[2], a = r[2], { newShape: o, keptDims: s } = Ur(r), c = o;
			if (c.length < r.length) {
				let i = Br(r, c), a = [
					"batch",
					"col",
					"row"
				], o = JSON.parse(JSON.stringify(n));
				o.unpackedShape = i;
				let l = this.getUnpackedSamplerFromInput(e, t, o), u = s.reverse(), d = `
          ${l.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${Nr(a, u)});
          }
        `;
				return new R(d, l.dependencies);
			}
			let l = `
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${i} + col * ${a} + row;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${t}, uv);
          }
      `;
			return new R(l, [
				"coordinates.uvFromFlat",
				"coordinates.sampleTexture",
				"coordinates.coordsToOffset"
			]);
		}
		getUnpackedSampler4D(e, t, n) {
			let r = n.unpackedShape, i = r[3], a = r[2] * i, o = `
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${r[1] * a} + col * ${a} +
              depth2 * ${i} + depth;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${t}, uv);
        }
      `;
			return new R(o, ["coordinates.uvFromFlat", "coordinates.sampleTexture"]);
		}
		getUnpackedSampler5D(e, t, n) {
			let r = n.unpackedShape, i = r[4], a = r[3] * i, o = r[2] * a, s = r[1] * o, { newShape: c, keptDims: l } = Ur(r);
			if (c.length < r.length) {
				let i = Br(r, c), a = [
					"row",
					"col",
					"depth",
					"depth2",
					"depth3"
				], o = JSON.parse(JSON.stringify(n));
				o.unpackedShape = i;
				let s = `
          ${this.getUnpackedSamplerFromInput(e, t, o).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${Nr(a, l)});
          }
        `;
				return new R(s, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
			}
			let u = `
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${s} + col * ${o} + depth * ${a} +
          depth3 * ${i} + depth2;
          vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
          return sampleTexture(${t}, uv);
        }
      `;
			return new R(u, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
		}
		getUnpackedSampler6D(e, t, n) {
			let r = n.unpackedShape, i = r[5], a = r[4] * i, o = r[3] * a, s = r[2] * o, c = r[1] * s, { newShape: l, keptDims: u } = Ur(r);
			if (l.length < r.length) {
				let i = Br(r, l), a = [
					"row",
					"col",
					"depth",
					"depth2",
					"depth3",
					"depth4"
				], o = JSON.parse(JSON.stringify(n));
				o.unpackedShape = i;
				let s = `
            ${this.getUnpackedSamplerFromInput(e, t, o).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${Nr(a, u)});
            }
          `;
				return new R(s, ["coordinates.sampleTexture", "coordinates.uvFromFlat"]);
			}
			let d = `
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${c} + col * ${s} + depth * ${o} +
            depth2 * ${a} + depth3 * ${i} + depth4;
            vec2 uv = uvFromFlat(${n.width}, ${n.height}, index);
            return sampleTexture(${t}, uv);
          }
        `;
			return new R(d, [
				"coordinates.uvFromFlat",
				"coordinates.sampleTexture",
				"coordinates.coordsToOffset"
			]);
		}
		toVec() {
			let e = this.context.outputTextureLayout, t = e.shape.length, n = e.strides, r = e.width, i = e.height, a = [];
			for (let e = 0; e < t - 1; ++e) a.push(`
        c[${e}] = offset / ${n[e]};`), a.push(`
        offset -= c[${e}] * ${n[e]};`);
			a.push(`
        c[${t - 1}] = offset;`);
			let o = `
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${r}, ${i});
        ${a.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${a.join("")}
      }
    `;
			return { toVec: new R(o, ["coordinates.coordsToOffset"]) };
		}
		valueFrom() {
			let e = {};
			return this.context.programInfo.inputNames.forEach((t, n) => {
				let r = this.context.inputTextureLayouts[n], i = (r.unpackedShape.length > 0 ? r.unpackedShape : r.shape).length, a = `_${t}`;
				e[a] = new R(this.getValueFromSingle(t, i, r.width, r.height, !1), [
					`shapeUtils.indicesToOffset${a}`,
					"coordinates.offsetToCoords",
					"fragcolor.getColorAsFloat"
				]), a += "_T", e[a] = new R(this.getValueFromSingle(t, i, r.width, r.height, !0), [
					`shapeUtils.indicesToOffset${a}`,
					"coordinates.offsetToCoords",
					"fragcolor.getColorAsFloat"
				]);
			}), e;
		}
		getValueFromSingle(e, t, n, r, i) {
			let a = `_${e}`;
			i && (a += "_T");
			let o = q(this.context.glContext.version);
			return `
        float ${a}(int m[${t}]) {
          int offset = indicesToOffset${a}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${r});
          float value = getColorAsFloat(${o.texture2D}(${e}, coords));
          return value;
        }
        `;
		}
		getPackedValueFrom(e, t, n, r, i) {
			let a = `_${e}_Pack`;
			i && (a += "_T");
			let o = q(this.context.glContext.version);
			return `
        vec4 ${a}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${r});
          return ${o.texture2D}(${e}, coords);
        }
        `;
		}
	};
}), po, np = E(() => {
	Ht(), po = class e extends ft {
		constructor(e) {
			super(e);
		}
		getFunctions() {
			return {
				...this.encodeFloat32(),
				...this.decodeFloat32()
			};
		}
		getCustomTypes() {
			return {};
		}
		encodeFloat32() {
			return { encode: new R("highp vec4 encode(highp float f) {\n        return vec4(f, 0.0, 0.0, 0.0);\n      }\n        ") };
		}
		decodeFloat32() {
			return { decode: new R("highp float decode(highp vec4 rgba) {\n        return rgba.r;\n      }\n        ") };
		}
		encodeUint8() {
			let t = e.isLittleEndian() ? "rgba.rgba=rgba.abgr;" : "";
			return { encode: new R(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${t}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `) };
		}
		decodeUint8() {
			let t = e.isLittleEndian() ? "rgba.rgba=rgba.abgr;" : "";
			return { decode: new R(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${t}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `) };
		}
		static isLittleEndian() {
			let e = /* @__PURE__ */ new ArrayBuffer(4), t = new Uint32Array(e), n = new Uint8Array(e);
			if (t[0] = 3735928559, n[0] === 239) return !0;
			if (n[0] === 222) return !1;
			throw Error("unknown endianness");
		}
	};
}), ho, op = E(() => {
	Ht(), xe(), ho = class extends ft {
		constructor(e) {
			super(e);
		}
		getFunctions() {
			return {
				...this.setFragColor(),
				...this.getColorAsFloat()
			};
		}
		getCustomTypes() {
			return {};
		}
		setFragColor() {
			let e = q(this.context.glContext.version);
			return { setFragColor: new R(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `, ["encoding.encode"]) };
		}
		getColorAsFloat() {
			return { getColorAsFloat: new R("\n        float getColorAsFloat(vec4 color) {\n            return decode(color);\n        }\n        ", ["encoding.decode"]) };
		}
	};
}), mo, ip = E(() => {
	Ht(), mo = class e extends ft {
		constructor(e) {
			super(e);
		}
		getFunctions() {
			return {
				...this.bcastIndex(),
				...this.bcastMatmulIndex(),
				...this.offsetToIndices(),
				...this.indicesToOffset(),
				...this.incrementIndices()
			};
		}
		getCustomTypes() {
			return {};
		}
		bcastIndex() {
			let e = this.context.outputTextureLayout.shape.length, t = {};
			return this.context.programInfo.inputNames.forEach((n, r) => {
				let i = this.context.inputTextureLayouts[r].unpackedShape;
				if (i.length <= e) {
					let r = i.length, a = e - r, o = `bcastIndices_${n}`, s = "";
					for (let e = 0; e < r; ++e) s += `
          realIndices[${e}] = int( mod(float(bcastedIndices[${a + e}]), ${i[e]}.0) );
          `;
					let c = `
        void ${o} (int bcastedIndices[${e}], out int realIndices[${r}]) {
          ${s}
        }
        `;
					t[o] = new R(c);
				}
			}), t;
		}
		bcastMatmulIndex() {
			let e = this.context.outputTextureLayout.shape.length, t = {};
			return this.context.programInfo.inputNames.forEach((n, r) => {
				let i = this.context.inputTextureLayouts[r].shape;
				if (!(i.length < 2 || i.length > e)) {
					let r = i.length, a = e - r, o = `bcastMatmulIndices_${n}`, s = "";
					for (let e = 0; e < r - 2; ++e) s += `
          realIndices[${e}] = int( mod(float(bcastedIndices[${a + e}]), ${i[e]}.0) );
          `;
					let c = `
        void ${o}(int bcastedIndices[${e}], out int realIndices[${r}]) {
          ${s}
          realIndices[${r - 1}] = bcastedIndices[${e - 1}];
          realIndices[${r - 2}] = bcastedIndices[${e - 2}];
        }
        `;
					t[o] = new R(c);
				}
			}), t;
		}
		indicesToOffset() {
			let t = {};
			return this.context.programInfo.inputNames.forEach((n, r) => {
				let i = this.context.inputTextureLayouts[r].shape, a = this.context.inputTextureLayouts[r].strides, o = i.length, s = `indicesToOffset_${n}`;
				t[s] = new R(e.indexToOffsetSingle(s, o, a)), s = `indicesToOffset_${n}_T`, t[s] = new R(e.indexToOffsetSingle(s, o, a.slice().reverse()));
			}), t;
		}
		static indexToOffsetSingle(e, t, n) {
			let r = "";
			for (let e = t - 1; e >= 0; --e) r += `
        offset += indices[${e}] * ${n[e]};
        `;
			return `
      int ${e}(int indices[${t}]) {
        int offset = 0;
        ${r}
        return offset;
      }
      `;
		}
		offsetToIndices() {
			let t = {};
			return this.context.programInfo.inputNames.forEach((n, r) => {
				let i = this.context.inputTextureLayouts[r].shape, a = this.context.inputTextureLayouts[r].strides, o = i.length, s = `offsetToIndices_${n}`;
				t[s] = new R(e.offsetToIndicesSingle(s, o, a)), s = `offsetToIndices_${n}_T`, t[s] = new R(e.offsetToIndicesSingle(s, o, a.slice().reverse()));
			}), t;
		}
		static offsetToIndicesSingle(e, t, n) {
			let r = [];
			for (let e = 0; e < t - 1; ++e) r.push(`
      indices[${e}] = offset / ${n[e]};`), r.push(`
        offset -= indices[${e}] * ${n[e]};`);
			return r.push(`
      indices[${t - 1}] = offset;`), `
      void ${e}(int offset, out int indices[${t}]) {
        ${r.join("")}
      }
      `;
		}
		incrementIndices() {
			let e = {};
			return this.context.programInfo.inputNames.forEach((t, n) => {
				let r = this.context.inputTextureLayouts[n].shape, i = r.length, a = `incrementIndices_${t}`, o = "";
				for (let e = 0; e < i; ++e) o += `
        shape[${e}] = ${r[e]};`;
				let s = `
        void ${a}(int axis, out int indices[${i}]) {
          int shape[${i}];
          ${o};
          for(int i = ${i} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;
				e[a] = new R(s);
			}), e;
		}
	};
}), bo, ap = E(() => {
	Ht(), bo = class extends ft {
		constructor(e) {
			super(e);
		}
		getCustomTypes() {
			return {};
		}
		getFunctions() {
			return {
				...this.binaryVecFunctions(),
				...this.copyVec(),
				...this.setVecItem(),
				...this.getVecItem()
			};
		}
		binaryVecFunctions() {
			let e = this.context.outputTextureLayout.shape.length, t = {
				add: "+=",
				sub: "-=",
				mul: "*=",
				div: "/="
			}, n = {};
			for (let r in t) {
				let i = `${r}Vec`, a = "";
				for (let n = 0; n < e; ++n) a += `
          dest[${n}] ${t[r]} src[${n}];
          `;
				let o = `
        void ${i}(int src[${e}], out int dest[${e}]) {
          ${a}
        }
        `;
				n[i] = new R(o);
			}
			return n;
		}
		copyVec() {
			let e = this.context.outputTextureLayout.shape.length, t = "";
			for (let n = 0; n < e; ++n) t += `
        dest[${n}] = src[${n}];
        `;
			let n = `
      void copyVec(int src[${e}], out int dest[${e}]) {
        ${t}
      }
      `;
			return { copyVec: new R(n) };
		}
		setVecItem() {
			let e = this.context.outputTextureLayout.shape.length, t = `
        if(index < 0)
            index =${e} + index;
        if (index == 0)
            m[0] = value;
        `;
			for (let n = 1; n < e - 1; ++n) t += `
        else if (index == ${n})
            m[${n}] = value;
            `;
			t += `
        else
            m[${e - 1}] = value;
        `;
			let n = `
      void setVecItem(out int m[${e}], int index, int value) {
        ${t}
      }
        `;
			return { setVecItem: new R(n) };
		}
		getVecItem() {
			let e = this.context.outputTextureLayout.shape.length, t = `
        if(index < 0)
            index = ${e} + index;
        if (index == 0)
            return m[0];
      `;
			for (let n = 1; n < e - 1; ++n) t += `
        else if (index == ${n})
            return m[${n}];
      `;
			t += `
        else
            return m[${e - 1}];
        `;
			let n = `
      int getVecItem(int m[${e}], int index) {
        ${t}
      }
    `;
			return { getVecItem: new R(n) };
		}
	};
}), qi, sp = E(() => {
	rp(), np(), op(), ip(), ap(), qi = {
		encoding: po,
		fragcolor: ho,
		vec: bo,
		shapeUtils: mo,
		coordinates: co
	};
}), go, up = E(() => {
	Ht(), ep(), sp(), xe(), go = class {
		constructor(e, t, n, r) {
			this.libs = {}, this.glslLibRoutineDependencyGraph = {}, this.context = new eo(e, t, n, r), Object.keys(qi).forEach((e) => {
				let t = new qi[e](this.context);
				this.libs[e] = t;
			});
			let i = this.glslLibRoutineDependencyGraph;
			for (let e in this.libs) {
				let t = this.libs[e].getFunctions();
				for (let n in t) {
					let r = e + "." + n, a;
					i[r] ? (a = i[r], a.routineBody = t[n].routineBody) : (a = new dn(r, t[n].routineBody), i[r] = a);
					let o = t[n].dependencies;
					if (o) for (let e = 0; e < o.length; ++e) if (i[o[e]]) a.addDependency(i[o[e]]);
					else {
						let t = new dn(o[e]);
						i[o[e]] = t, a.addDependency(t);
					}
				}
			}
		}
		preprocess() {
			let e = this.context.programInfo, t = e.shaderSource;
			return this.context.programInfo.hasMain || (t = `${t}
      ${Uu(this.context.glContext.version, this.context.outputTextureLayout.shape.length)}`), t = Qc(t), `${Gu(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames, e.variables)}
    ${this.getImports(t)}
    ${t}`;
		}
		getImports(e) {
			let t = this.selectGlslLibRoutinesToBeIncluded(e);
			if (t.length === 0) return "";
			let n = "";
			for (let e = 0; e < t.length; ++e) if (t[e].routineBody) n += t[e].routineBody + "\n";
			else throw Error(`Missing body for the Glsl Library routine: ${t[e].name}`);
			return n;
		}
		selectGlslLibRoutinesToBeIncluded(e) {
			let t = [];
			return Object.keys(this.glslLibRoutineDependencyGraph).forEach((n) => {
				let r = n.split(".")[1];
				e.indexOf(r) !== -1 && t.push(this.glslLibRoutineDependencyGraph[n]);
			}), to.returnOrderedNodes(t);
		}
		getUniforms(e, t) {
			let n = [];
			if (e) for (let t of e) n.push(`uniform sampler2D ${t};`);
			if (t) for (let e of t) n.push(`uniform ${e.type} ${e.name}${e.arrayLength ? `[${e.arrayLength}]` : ""};`);
			return n.join("\n");
		}
	};
}), yo, lp = E(() => {
	Tt(), at(), up(), xe(), yo = class {
		constructor(e, t, n) {
			this.profiler = e, this.glContext = t, this.textureLayoutStrategy = n, this.repo = /* @__PURE__ */ new Map(), this.attributesBound = !1;
		}
		getArtifact(e) {
			return this.repo.get(e);
		}
		setArtifact(e, t) {
			this.repo.set(e, t);
		}
		run(e, t, n) {
			this.profiler.event("op", `ProgramManager.run ${e.programInfo.name ?? "unknown kernel"}`, () => {
				let r = this.glContext.gl, i = e.program;
				r.useProgram(i);
				try {
					this.bindOutput(n), this.attributesBound || this.bindAttributes(e.attribLocations), this.bindUniforms(e.uniformLocations, e.programInfo.variables ?? [], t);
				} catch (t) {
					throw ce.error("ProgramManager", e.programInfo.shaderSource), t;
				}
				this.profiler.event("backend", "GlContext.draw()", () => {
					this.glContext.draw();
				});
			}, this.glContext);
		}
		dispose() {
			this.vertexShader && this.glContext.deleteShader(this.vertexShader), this.repo.forEach((e) => this.glContext.deleteProgram(e.program));
		}
		build(e, t, n) {
			return this.profiler.event("backend", "ProgramManager.build", () => {
				let r = new go(this.glContext, e, t, n), i = r.preprocess(), a = this.compile(i);
				return {
					programInfo: e,
					program: a,
					uniformLocations: this.getUniformLocations(a, r.context.programInfo.inputNames, r.context.programInfo.variables),
					attribLocations: this.getAttribLocations(a)
				};
			});
		}
		compile(e) {
			if (!this.vertexShader) {
				ce.verbose("ProrgramManager", "Compiling and caching Vertex shader for the first time");
				let e = Mu(this.glContext.version);
				this.vertexShader = this.glContext.compileShader(e, this.glContext.gl.VERTEX_SHADER);
			}
			Z.debug && ce.verbose("ProrgramManager", `FragShader:
${e}
`);
			let t = this.glContext.compileShader(e, this.glContext.gl.FRAGMENT_SHADER), n = this.glContext.createProgram(this.vertexShader, t);
			return this.glContext.deleteShader(t), n;
		}
		bindOutput(e) {
			let t = e.width, n = e.height;
			ce.verbose("ProrgramManager", `Binding output texture to Framebuffer: w/h=${t}/${n}, shape=${e.shape}, type=${e.tensor.type}`), this.glContext.attachFramebuffer(e.texture, t, n);
		}
		bindAttributes(e) {
			let t = e.position, n = e.textureCoord;
			this.glContext.setVertexAttributes(t, n), this.attributesBound = !0;
		}
		bindUniforms(e, t, n) {
			let r = this.glContext.gl, i = 0;
			for (let { name: a, type: o, location: s, arrayLength: c } of e) {
				let e = t.find((e) => e.name === a)?.data;
				if (o !== "sampler2D" && !e) throw Error(`variable '${a}' does not have data defined in program info`);
				switch (o) {
					case "sampler2D":
						this.bindTexture(n[i], s, i), i++;
						break;
					case "float":
						c ? r.uniform1fv(s, e) : r.uniform1f(s, e);
						break;
					case "int":
						c ? r.uniform1iv(s, e) : r.uniform1i(s, e);
						break;
					default: throw Error(`Uniform not implemented: ${o}`);
				}
			}
		}
		bindTexture(e, t, n) {
			this.glContext.bindTextureToUniform(e.texture, n, t);
		}
		getAttribLocations(e) {
			return {
				position: this.getAttribLocation(e, "position"),
				textureCoord: this.getAttribLocation(e, "textureCoord")
			};
		}
		getUniformLocations(e, t, n) {
			let r = [];
			if (t) for (let n of t) r.push({
				name: n,
				type: "sampler2D",
				location: this.getUniformLocation(e, n)
			});
			if (n) for (let t of n) r.push({
				...t,
				location: this.getUniformLocation(e, t.name)
			});
			return r;
		}
		getUniformLocation(e, t) {
			let n = this.glContext.gl.getUniformLocation(e, t);
			if (n === null) throw Error(`Uniform ${t} not found.`);
			return n;
		}
		getAttribLocation(e, t) {
			return this.glContext.gl.getAttribLocation(e, t);
		}
	};
}), To, fp = E(() => {
	at(), cn(), To = class {
		constructor(e, t, n, r) {
			this.glContext = e, this.layoutStrategy = t, this.profiler = n, this.config = r, this.pendingRead = /* @__PURE__ */ new Map(), r.reuseTextures && (this.inUseTextures = /* @__PURE__ */ new Map(), this.idleTextures = /* @__PURE__ */ new Map(), this.textureLookup = /* @__PURE__ */ new Map());
		}
		createTextureFromLayout(e, t, n, r) {
			let i = this.toEncoderType(e), a = this.glContext.getEncoder(i, t.channels || 1, r);
			if (t.isPacked && r === 1) throw Error("not implemented");
			let o = t.width, s = t.height, c, l;
			if (this.config.reuseTextures) {
				c = `${o}x${s}_${a.format}_${a.internalFormat}_${a.textureType}`, l = this.inUseTextures.get(c), l || (l = [], this.inUseTextures.set(c, l));
				let t = this.idleTextures.get(c);
				if (t && t.length > 0) {
					let i = t.pop();
					return l.push(i), r === 1 && this.glContext.updateTexture(i, o, s, a, this.toTextureData(e, n)), i;
				}
			}
			ce.verbose("TextureManager", `Creating new texture of size ${t.width}x${t.height}`);
			let u = this.glContext.allocateTexture(o, s, a, this.toTextureData(e, n));
			return this.config.reuseTextures && (l.push(u), this.textureLookup.set(u, c)), u;
		}
		readTexture(e, t, n) {
			return n ||= 1, this.profiler.event("backend", "TextureManager.readTexture", () => {
				let r = e.shape.reduce((e, t) => e * t) * n, i = this.glContext.readTexture(e.texture, e.width, e.height, r, this.toEncoderType(t), n);
				return this.toTensorData(t, i);
			});
		}
		async readTextureAsync(e, t, n) {
			let r = e.tensor.dataId;
			if (n ||= 1, this.pendingRead.has(r)) {
				let e = this.pendingRead.get(r);
				return new Promise((t) => e?.push(t));
			}
			return this.profiler.event("backend", "TextureManager.readTextureAsync", async () => {
				this.pendingRead.set(r, []);
				let i = e.shape.reduce((e, t) => e * t) * n;
				await this.glContext.createAndWaitForFence();
				let a = this.glContext.readTexture(e.texture, e.width, e.height, i, this.toEncoderType(t), n), o = this.toTensorData(t, a), s = this.pendingRead.get(r);
				return this.pendingRead.delete(r), s?.forEach((e) => e(o)), o;
			});
		}
		readUint8TextureAsFloat(e) {
			return this.profiler.event("backend", "TextureManager.readUint8TextureAsFloat", () => {
				let t = e.shape.reduce((e, t) => e * t), n = this.glContext.readTexture(e.texture, e.width, e.height, t * 4, "byte", 4);
				return new Float32Array(n.buffer, n.byteOffset, t);
			});
		}
		releaseTexture(e, t) {
			let n;
			if (this.config.reuseTextures && (n = this.textureLookup.get(e.texture), n)) {
				t && this.textureLookup.delete(n);
				let r = this.inUseTextures.get(n);
				if (r) {
					let t = r.indexOf(e.texture);
					if (t !== -1) {
						r.splice(t, 1);
						let i = this.idleTextures.get(n);
						i || (i = [], this.idleTextures.set(n, i)), i.push(e.texture);
					}
				}
			}
			(!n || t) && (ce.verbose("TextureManager", `Deleting texture of size ${e.width}x${e.height}`), this.glContext.deleteTexture(e.texture));
		}
		toTensorData(e, t) {
			switch (e) {
				case "int16": return t instanceof Int16Array ? t : Int16Array.from(t);
				case "int32": return t instanceof Int32Array ? t : Int32Array.from(t);
				case "int8": return t instanceof Int8Array ? t : Int8Array.from(t);
				case "uint16": return t instanceof Uint16Array ? t : Uint16Array.from(t);
				case "uint32": return t instanceof Uint32Array ? t : Uint32Array.from(t);
				case "uint8":
				case "bool": return t instanceof Uint8Array ? t : Uint8Array.from(t);
				case "float32": return t instanceof Float32Array ? t : Float32Array.from(t);
				case "float64": return t instanceof Float64Array ? t : Float64Array.from(t);
				default: throw Error(`TensorData type ${e} is not supported`);
			}
		}
		toTextureData(e, t) {
			if (t) return t instanceof Float32Array ? t : new Float32Array(t);
		}
		toEncoderType(e) {
			return "float";
		}
		clearActiveTextures() {
			this.glContext.clearActiveTextures();
		}
	};
}), xo, cp = E(() => {
	at(), Is(), rl(), Jc(), lp(), Hi(), fp(), xo = class {
		constructor(e, t) {
			this.backend = e, this.context = t, this.layoutStrategy = new fo(e.glContext.maxTextureSize), this.programManager = new yo(this.context.profiler, e.glContext, this.layoutStrategy), this.textureManager = new To(e.glContext, this.layoutStrategy, this.context.profiler, { reuseTextures: e.textureCacheMode === "full" }), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache = /* @__PURE__ */ new Map(), this.pack = e.pack, this.pack2unpackMap = /* @__PURE__ */ new Map(), this.unpack2packMap = /* @__PURE__ */ new Map();
		}
		createInferenceHandler() {
			return new Qn(this);
		}
		onGraphInitialized(e) {
			let t = e.getValues().filter((e) => e.from === -1 && e.tensor).map((e) => e.tensor.dataId);
			this.initializers = new Set(t);
		}
		isInitializer(e) {
			return this.initializers ? this.initializers.has(e) : !1;
		}
		addInitializer(e) {
			this.initializers.add(e);
		}
		getTextureData(e, t) {
			return t ? this.packedTextureDataCache.get(e) : this.unpackedTextureDataCache.get(e);
		}
		setTextureData(e, t, n = !1) {
			ce.verbose("WebGLSessionHandler", "Storing Texture data in cache"), n ? this.packedTextureDataCache.set(e, t) : this.unpackedTextureDataCache.set(e, t);
		}
		dispose() {
			this.programManager.dispose(), this.textureManager.clearActiveTextures(), this.packedTextureDataCache.forEach((e) => this.textureManager.releaseTexture(e, !0)), this.packedTextureDataCache = /* @__PURE__ */ new Map(), this.unpackedTextureDataCache.forEach((e) => this.textureManager.releaseTexture(e, !0)), this.unpackedTextureDataCache = /* @__PURE__ */ new Map();
		}
		resolve(e, t, n) {
			let r = Os(e, t, Kc);
			return {
				impl: r.opImpl,
				context: r.opInit ? r.opInit(e, n) : e
			};
		}
	};
});
function Xb(e) {
	let t = 0;
	for (; t < e.length && e[t](); ++t);
	return t - 1;
}
var bn, pp = E(() => {
	Tt(), cn(), cn(), kt(), bn = class {
		constructor(e, t) {
			this.frameBufferBound = !1, this.itemsToPoll = [], this.gl = e, this.version = t, this.getExtensions(), this.vertexbuffer = this.createVertexbuffer(), this.framebuffer = this.createFramebuffer(), this.queryVitalParameters();
		}
		allocateTexture(e, t, n, r) {
			let i = this.gl, a = i.createTexture();
			i.bindTexture(i.TEXTURE_2D, a), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
			let o = r ? n.encode(r, e * t) : null;
			return i.texImage2D(i.TEXTURE_2D, 0, n.internalFormat, e, t, 0, n.format, n.textureType, o), this.checkError(), a;
		}
		updateTexture(e, t, n, r, i) {
			let a = this.gl;
			a.bindTexture(a.TEXTURE_2D, e);
			let o = r.encode(i, t * n);
			a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, t, n, r.format, r.textureType, o), this.checkError();
		}
		attachFramebuffer(e, t, n) {
			let r = this.gl;
			r.bindTexture(r.TEXTURE_2D, e), r.bindFramebuffer(r.FRAMEBUFFER, this.framebuffer), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, e, 0), this.checkError(), r.viewport(0, 0, t, n), r.scissor(0, 0, t, n);
		}
		readTexture(e, t, n, r, i, a) {
			let o = this.gl;
			a ||= 1, this.frameBufferBound || this.attachFramebuffer(e, t, n);
			let s = this.getEncoder(i, a), c = s.allocate(t * n);
			return o.bindTexture(o.TEXTURE_2D, e), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, e, 0), o.readPixels(0, 0, t, n, o.RGBA, s.textureType, c), this.checkError(), s.decode(c, r);
		}
		isFramebufferReady() {
			return !0;
		}
		getActiveTexture() {
			let e = this.gl;
			return `TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE) - e.TEXTURE0}`;
		}
		getTextureBinding() {
			return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D);
		}
		getFramebufferBinding() {
			return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING);
		}
		setVertexAttributes(e, t) {
			let n = this.gl;
			n.vertexAttribPointer(e, 3, n.FLOAT, !1, 20, 0), n.enableVertexAttribArray(e), t !== -1 && (n.vertexAttribPointer(t, 2, n.FLOAT, !1, 20, 12), n.enableVertexAttribArray(t)), this.checkError();
		}
		createProgram(e, t) {
			let n = this.gl, r = n.createProgram();
			return n.attachShader(r, e), n.attachShader(r, t), n.linkProgram(r), r;
		}
		compileShader(e, t) {
			let n = this.gl, r = n.createShader(t);
			if (!r) throw Error(`createShader() returned null with type ${t}`);
			if (n.shaderSource(r, e), n.compileShader(r), n.getShaderParameter(r, n.COMPILE_STATUS) === !1) throw Error(`Failed to compile shader: ${n.getShaderInfoLog(r)}
Shader source:
${e}`);
			return r;
		}
		deleteShader(e) {
			this.gl.deleteShader(e);
		}
		bindTextureToUniform(e, t, n) {
			let r = this.gl;
			r.activeTexture(r.TEXTURE0 + t), this.checkError(), r.bindTexture(r.TEXTURE_2D, e), this.checkError(), r.uniform1i(n, t), this.checkError();
		}
		draw() {
			this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), this.checkError();
		}
		checkError() {
			if (Z.debug) {
				let e = this.gl, t = e.getError(), n = "";
				switch (t) {
					case e.NO_ERROR: return;
					case e.INVALID_ENUM:
						n = "INVALID_ENUM";
						break;
					case e.INVALID_VALUE:
						n = "INVALID_VALUE";
						break;
					case e.INVALID_OPERATION:
						n = "INVALID_OPERATION";
						break;
					case e.INVALID_FRAMEBUFFER_OPERATION:
						n = "INVALID_FRAMEBUFFER_OPERATION";
						break;
					case e.OUT_OF_MEMORY:
						n = "OUT_OF_MEMORY";
						break;
					case e.CONTEXT_LOST_WEBGL:
						n = "CONTEXT_LOST_WEBGL";
						break;
					default: n = `Unknown WebGL Error: ${t.toString(16)}`;
				}
				throw Error(n);
			}
		}
		deleteTexture(e) {
			this.gl.deleteTexture(e);
		}
		deleteProgram(e) {
			this.gl.deleteProgram(e);
		}
		getEncoder(e, t, n = 0) {
			if (this.version === 2) return new Jn(this.gl, t);
			switch (e) {
				case "float": return n === 1 || this.isRenderFloat32Supported ? new fn(this.gl, t) : new fn(this.gl, t, this.textureHalfFloatExtension.HALF_FLOAT_OES);
				case "int": throw Error("not implemented");
				case "byte": return new Zn(this.gl, t);
				default: throw Error(`Invalid dataType: ${e}`);
			}
		}
		clearActiveTextures() {
			let e = this.gl;
			for (let t = 0; t < this.maxTextureImageUnits; ++t) e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, null);
		}
		dispose() {
			if (this.disposed) return;
			let e = this.gl;
			e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteFramebuffer(this.framebuffer), e.bindBuffer(e.ARRAY_BUFFER, null), e.deleteBuffer(this.vertexbuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null), e.finish(), this.disposed = !0;
		}
		createDefaultGeometry() {
			return new Float32Array([
				-1,
				1,
				0,
				0,
				1,
				-1,
				-1,
				0,
				0,
				0,
				1,
				1,
				0,
				1,
				1,
				1,
				-1,
				0,
				1,
				0
			]);
		}
		createVertexbuffer() {
			let e = this.gl, t = e.createBuffer();
			if (!t) throw Error("createBuffer() returned null");
			let n = this.createDefaultGeometry();
			return e.bindBuffer(e.ARRAY_BUFFER, t), e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW), this.checkError(), t;
		}
		createFramebuffer() {
			let e = this.gl.createFramebuffer();
			if (!e) throw Error("createFramebuffer returned null");
			return e;
		}
		queryVitalParameters() {
			let e = this.gl;
			if (this.isFloatTextureAttachableToFrameBuffer = this.checkFloatTextureAttachableToFrameBuffer(), this.isRenderFloat32Supported = this.checkRenderFloat32(), this.isFloat32DownloadSupported = this.checkFloat32Download(), this.version === 1 && !this.textureHalfFloatExtension && !this.isRenderFloat32Supported) throw Error("both float32 and float16 TextureType are not supported");
			this.isBlendSupported = !this.isRenderFloat32Supported || this.checkFloat32Blend(), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxTextureImageUnits = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.version;
		}
		getExtensions() {
			this.version === 2 ? (this.colorBufferFloatExtension = this.gl.getExtension("EXT_color_buffer_float"), this.disjointTimerQueryWebgl2Extension = this.gl.getExtension("EXT_disjoint_timer_query_webgl2")) : (this.textureFloatExtension = this.gl.getExtension("OES_texture_float"), this.textureHalfFloatExtension = this.gl.getExtension("OES_texture_half_float"));
		}
		checkFloatTextureAttachableToFrameBuffer() {
			let e = this.gl, t = e.createTexture();
			e.bindTexture(e.TEXTURE_2D, t);
			let n = this.version === 2 ? e.RGBA32F : e.RGBA;
			e.texImage2D(e.TEXTURE_2D, 0, n, 1, 1, 0, e.RGBA, e.FLOAT, null);
			let r = e.createFramebuffer();
			e.bindFramebuffer(e.FRAMEBUFFER, r), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
			let i = e.checkFramebufferStatus(e.FRAMEBUFFER) === e.FRAMEBUFFER_COMPLETE;
			return e.bindTexture(e.TEXTURE_2D, null), e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteTexture(t), e.deleteFramebuffer(r), i;
		}
		checkRenderFloat32() {
			if (this.version === 2) {
				if (!this.colorBufferFloatExtension) return !1;
			} else if (!this.textureFloatExtension) return !1;
			return this.isFloatTextureAttachableToFrameBuffer;
		}
		checkFloat32Download() {
			if (this.version === 2) {
				if (!this.colorBufferFloatExtension) return !1;
			} else if (!this.textureFloatExtension || !this.gl.getExtension("WEBGL_color_buffer_float")) return !1;
			return this.isFloatTextureAttachableToFrameBuffer;
		}
		checkFloat32Blend() {
			let e = this.gl, t, n, r, i, a;
			try {
				t = e.createTexture(), n = e.createFramebuffer(), e.bindTexture(e.TEXTURE_2D, t);
				let o = this.version === 2 ? e.RGBA32F : e.RGBA;
				return e.texImage2D(e.TEXTURE_2D, 0, o, 1, 1, 0, e.RGBA, e.FLOAT, null), e.bindFramebuffer(e.FRAMEBUFFER, n), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0), e.enable(e.BLEND), r = e.createShader(e.VERTEX_SHADER), !r || (e.shaderSource(r, "void main(){}"), e.compileShader(r), i = e.createShader(e.FRAGMENT_SHADER), !i) || (e.shaderSource(i, "precision highp float;void main(){gl_FragColor=vec4(0.5);}"), e.compileShader(i), a = e.createProgram(), !a) ? !1 : (e.attachShader(a, r), e.attachShader(a, i), e.linkProgram(a), e.useProgram(a), e.drawArrays(e.POINTS, 0, 1), e.getError() === e.NO_ERROR);
			} finally {
				e.disable(e.BLEND), a && e.deleteProgram(a), r && e.deleteShader(r), i && e.deleteShader(i), n && (e.bindFramebuffer(e.FRAMEBUFFER, null), e.deleteFramebuffer(n)), t && (e.bindTexture(e.TEXTURE_2D, null), e.deleteTexture(t));
			}
		}
		beginTimer() {
			if (this.version === 2 && this.disjointTimerQueryWebgl2Extension) {
				let e = this.gl, t = this.disjointTimerQueryWebgl2Extension, n = e.createQuery();
				return e.beginQuery(t.TIME_ELAPSED_EXT, n), n;
			} else throw Error("WebGL1 profiling currently not supported.");
		}
		endTimer() {
			if (this.version === 2 && this.disjointTimerQueryWebgl2Extension) {
				let e = this.gl, t = this.disjointTimerQueryWebgl2Extension;
				e.endQuery(t.TIME_ELAPSED_EXT);
				return;
			} else throw Error("WebGL1 profiling currently not supported");
		}
		isTimerResultAvailable(e) {
			let t = !1, n = !1;
			if (this.version === 2 && this.disjointTimerQueryWebgl2Extension) {
				let r = this.gl, i = this.disjointTimerQueryWebgl2Extension;
				t = r.getQueryParameter(e, r.QUERY_RESULT_AVAILABLE), n = r.getParameter(i.GPU_DISJOINT_EXT);
			} else throw Error("WebGL1 profiling currently not supported");
			return t && !n;
		}
		getTimerResult(e) {
			let t = 0;
			if (this.version === 2) {
				let n = this.gl;
				t = n.getQueryParameter(e, n.QUERY_RESULT), n.deleteQuery(e);
			} else throw Error("WebGL1 profiling currently not supported");
			return t / 1e6;
		}
		async waitForQueryAndGetTime(e) {
			return await gi(() => this.isTimerResultAvailable(e)), this.getTimerResult(e);
		}
		async createAndWaitForFence() {
			let e = this.createFence(this.gl);
			return this.pollFence(e);
		}
		createFence(e) {
			let t, n = e, r = n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE, 0);
			return e.flush(), t = r === null ? () => !0 : () => {
				let e = n.clientWaitSync(r, 0, 0);
				return e === n.ALREADY_SIGNALED || e === n.CONDITION_SATISFIED;
			}, {
				query: r,
				isFencePassed: t
			};
		}
		async pollFence(e) {
			return new Promise((t) => {
				this.addItemToPoll(() => e.isFencePassed(), () => t());
			});
		}
		pollItems() {
			let e = Xb(this.itemsToPoll.map((e) => e.isDoneFn));
			for (let t = 0; t <= e; ++t) {
				let { resolveFn: e } = this.itemsToPoll[t];
				e();
			}
			this.itemsToPoll = this.itemsToPoll.slice(e + 1);
		}
		async addItemToPoll(e, t) {
			this.itemsToPoll.push({
				isDoneFn: e,
				resolveFn: t
			}), !(this.itemsToPoll.length > 1) && await gi(() => (this.pollItems(), this.itemsToPoll.length === 0));
		}
	};
});
function ji(e) {
	let t;
	if ((!e || e === "webgl2") && "webgl2" in zr ? t = zr.webgl2 : (!e || e === "webgl") && "webgl" in zr && (t = zr.webgl), !t) try {
		t = dp(Jb(), e);
	} catch {
		t = dp(Kb(), e);
	}
	e = e || t.version === 1 ? "webgl" : "webgl2";
	let n = t.gl;
	return zr[e] = t, n.isContextLost() ? (delete zr[e], ji(e)) : (n.disable(n.DEPTH_TEST), n.disable(n.STENCIL_TEST), n.disable(n.BLEND), n.disable(n.DITHER), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SAMPLE_COVERAGE), n.enable(n.SCISSOR_TEST), n.enable(n.CULL_FACE), n.cullFace(n.BACK), t);
}
function dp(e, t) {
	let n = {
		alpha: !1,
		depth: !1,
		antialias: !1,
		stencil: !1,
		preserveDrawingBuffer: !1,
		premultipliedAlpha: !1,
		failIfMajorPerformanceCaveat: !1
	}, r, i = n;
	if ((!t || t === "webgl2") && (r = e.getContext("webgl2", i), r)) try {
		return new bn(r, 2);
	} catch (e) {
		ce.warning("GlContextFactory", `failed to create WebGLContext using contextId 'webgl2'. Error: ${e}`);
	}
	if ((!t || t === "webgl") && (r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i), r)) try {
		return new bn(r, 1);
	} catch (e) {
		ce.warning("GlContextFactory", `failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${e}`);
	}
	throw Error("WebGL is not supported");
}
function Kb() {
	if (typeof document > "u") throw TypeError("failed to create canvas: document is not supported");
	let e = document.createElement("canvas");
	return e.width = 1, e.height = 1, e;
}
function Jb() {
	if (typeof OffscreenCanvas > "u") throw TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");
	return new OffscreenCanvas(1, 1);
}
var zr, hp = E(() => {
	at(), pp(), zr = {};
}), wo, mp = E(() => {
	Tt(), at(), cp(), hp(), wo = class {
		get contextId() {
			return Z.webgl.contextId;
		}
		set contextId(e) {
			Z.webgl.contextId = e;
		}
		get matmulMaxBatchSize() {
			return Z.webgl.matmulMaxBatchSize;
		}
		set matmulMaxBatchSize(e) {
			Z.webgl.matmulMaxBatchSize = e;
		}
		get textureCacheMode() {
			return Z.webgl.textureCacheMode;
		}
		set textureCacheMode(e) {
			Z.webgl.textureCacheMode = e;
		}
		get pack() {
			return Z.webgl.pack;
		}
		set pack(e) {
			Z.webgl.pack = e;
		}
		get async() {
			return Z.webgl.async;
		}
		set async(e) {
			Z.webgl.async = e;
		}
		initialize() {
			try {
				return this.glContext = ji(this.contextId), typeof this.matmulMaxBatchSize != "number" && (this.matmulMaxBatchSize = 16), typeof this.textureCacheMode != "string" && (this.textureCacheMode = "full"), typeof this.pack != "boolean" && (this.pack = !1), typeof this.async != "boolean" && (this.async = !1), ce.setWithEnv(Z), Z.webgl.context || Object.defineProperty(Z.webgl, "context", { value: this.glContext.gl }), ce.verbose("WebGLBackend", `Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`), !0;
			} catch (e) {
				return ce.warning("WebGLBackend", `Unable to initialize WebGLBackend. ${e}`), !1;
			}
		}
		createSessionHandler(e) {
			return new xo(this, e);
		}
		dispose() {
			this.glContext.dispose();
		}
	};
});
async function Yi(e) {
	if (e) {
		let t = typeof e == "string" ? [e] : e;
		for (let e of t) {
			let t = bp.get(e);
			if (t) return t;
			let n = await Qb(e);
			if (n) return n;
		}
	} else return Yi(["webgl"]);
	throw Error("no available backend to use");
}
async function Qb(e) {
	let t = Zb;
	if (typeof t[e] < "u" && eg(t[e])) {
		let n = t[e], r = n.initialize();
		if (typeof r == "object" && "then" in r && (r = await r), r) return bp.set(e, n), n;
	}
}
function eg(e) {
	let t = e;
	return "initialize" in t && typeof t.initialize == "function" && "createSessionHandler" in t && typeof t.createSessionHandler == "function" && "dispose" in t && typeof t.dispose == "function";
}
var bp, Zb, gp = E(() => {
	mp(), bp = /* @__PURE__ */ new Map(), Zb = { webgl: new wo() };
}), Xi, vo, yp = E(() => {
	at(), Xi = class {
		constructor(e, t) {
			this.op = e, this.node = t;
		}
	}, vo = class {
		constructor(e, t, n) {
			this.graph = e, this.profiler = n, this.initialize(t);
		}
		initialize(e) {
			this.profiler.event("session", "ExecutionPlan.initialize", () => {
				let t = this.graph.getNodes();
				if (t.length !== e.length) throw Error("The size of nodes and OPs do not match.");
				this._ops = e.map((e, n) => new Xi(e, t[n])), this.reset(), this._starter = [], this._ops.forEach((e, t) => {
					let n = !0;
					for (let t of e.node.inputs) if (!this._values[t] && this.graph.getInputIndices().indexOf(t) === -1) {
						n = !1;
						break;
					}
					n && this._starter.push(t);
				});
			});
		}
		reset() {
			this._values = this.graph.getValues().map((e) => e.tensor);
		}
		async execute(e, t) {
			return this.profiler.event("session", "ExecutionPlan.execute", async () => {
				this.reset();
				let n = e.createInferenceHandler(), r = this.graph.getInputIndices();
				if (t.length !== r.length) throw Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${r.length}`);
				t.forEach((e, t) => {
					let n = r[t];
					this._values[n] = e;
				});
				let i = this._starter.slice(0), a = this.graph.getValues(), o = this.graph.getNodes(), s = 0;
				for (; s < i.length;) {
					let e = i[s++], t = this._ops[e], r = t.node.inputs.map((e) => this._values[e]);
					if (r.indexOf(void 0) !== -1) throw Error(`unresolved input detected: op: ${t.node}`);
					let c = r;
					ce.verbose("ExecPlan", `Runing op:${t.node.name} (${c.map((e, n) => `'${t.node.inputs[n]}': ${e.type}[${e.dims.join(",")}]`).join(", ")})`);
					let l = await this.profiler.event("node", t.node.name, async () => t.op.impl(n, c, t.op.context));
					if (l.length !== t.node.outputs.length) throw Error("the size of output does not match model definition.");
					l.forEach((e, n) => {
						let r = t.node.outputs[n];
						if (this._values[r]) throw Error(`output [${r}] already has value: op:${t.node.name}`);
						this._values[r] = e;
					});
					let u = /* @__PURE__ */ new Set();
					l.forEach((e, n) => {
						let r = t.node.outputs[n];
						for (let e of a[r].to) {
							let t = o[e], n = !0;
							for (let e of t.inputs) if (!this._values[e]) {
								n = !1;
								break;
							}
							n && u.add(e);
						}
					}), i.push(...u);
				}
				let c = [];
				for (let e = 0; e < this.graph.getOutputIndices().length; e++) {
					let t = this.graph.getOutputIndices()[e], n = this._values[t];
					if (n === void 0) throw Error(`required output [${t}] does not have value`);
					t === 0 ? await n.getData() : n.data, c.push(n);
				}
				return ce.verbose("ExecPlan", "disposing of inferenceHandler"), n.dispose(), c;
			});
		}
	};
}), oe, dt, gn, Tp = E(() => {
	nn(), oe = Er($r()), br(), fe(), dt = W.experimental.fbs, gn = class e {
		constructor(t) {
			if (this._attributes = /* @__PURE__ */ new Map(), t != null) {
				for (let n of t) n instanceof oe.onnx.AttributeProto ? this._attributes.set(n.name, [e.getValue(n), e.getType(n)]) : n instanceof dt.Attribute && this._attributes.set(n.name(), [e.getValue(n), e.getType(n)]);
				if (this._attributes.size < t.length) throw Error("duplicated attribute names");
			}
		}
		set(e, t, n) {
			this._attributes.set(e, [n, t]);
		}
		delete(e) {
			this._attributes.delete(e);
		}
		getFloat(e, t) {
			return this.get(e, "float", t);
		}
		getInt(e, t) {
			return this.get(e, "int", t);
		}
		getString(e, t) {
			return this.get(e, "string", t);
		}
		getTensor(e, t) {
			return this.get(e, "tensor", t);
		}
		getFloats(e, t) {
			return this.get(e, "floats", t);
		}
		getInts(e, t) {
			return this.get(e, "ints", t);
		}
		getStrings(e, t) {
			return this.get(e, "strings", t);
		}
		getTensors(e, t) {
			return this.get(e, "tensors", t);
		}
		get(e, t, n) {
			let r = this._attributes.get(e);
			if (r === void 0) {
				if (n !== void 0) return n;
				throw Error(`required attribute not found: ${e}`);
			}
			if (r[1] !== t) throw Error(`type mismatch: expected ${t} but got ${r[1]}`);
			return r[0];
		}
		static getType(e) {
			let t = e instanceof oe.onnx.AttributeProto ? e.type : e.type();
			switch (t) {
				case oe.onnx.AttributeProto.AttributeType.FLOAT: return "float";
				case oe.onnx.AttributeProto.AttributeType.INT: return "int";
				case oe.onnx.AttributeProto.AttributeType.STRING: return "string";
				case oe.onnx.AttributeProto.AttributeType.TENSOR: return "tensor";
				case oe.onnx.AttributeProto.AttributeType.FLOATS: return "floats";
				case oe.onnx.AttributeProto.AttributeType.INTS: return "ints";
				case oe.onnx.AttributeProto.AttributeType.STRINGS: return "strings";
				case oe.onnx.AttributeProto.AttributeType.TENSORS: return "tensors";
				default: throw Error(`attribute type is not supported yet: ${oe.onnx.AttributeProto.AttributeType[t]}`);
			}
		}
		static getValue(e) {
			let t = e instanceof oe.onnx.AttributeProto ? e.type : e.type();
			if (t === oe.onnx.AttributeProto.AttributeType.GRAPH || t === oe.onnx.AttributeProto.AttributeType.GRAPHS) throw Error("graph attribute is not supported yet");
			let n = this.getValueNoCheck(e);
			if (t === oe.onnx.AttributeProto.AttributeType.INT && nt.isLong(n)) return nt.longToNumber(n);
			if (t === oe.onnx.AttributeProto.AttributeType.INTS) {
				let e = n, t = Array(e.length);
				for (let n = 0; n < e.length; n++) {
					let r = e[n];
					t[n] = nt.longToNumber(r);
				}
				return t;
			}
			if (t === oe.onnx.AttributeProto.AttributeType.TENSOR) return e instanceof oe.onnx.AttributeProto ? Ce.fromProto(n) : Ce.fromOrtTensor(n);
			if (t === oe.onnx.AttributeProto.AttributeType.TENSORS) {
				if (e instanceof oe.onnx.AttributeProto) return n.map((e) => Ce.fromProto(e));
				if (e instanceof dt.Attribute) return n.map((e) => Ce.fromOrtTensor(e));
			}
			return t === oe.onnx.AttributeProto.AttributeType.STRING && e instanceof oe.onnx.AttributeProto ? ln(n) : t === oe.onnx.AttributeProto.AttributeType.STRINGS && e instanceof oe.onnx.AttributeProto ? n.map(ln) : n;
		}
		static getValueNoCheck(e) {
			return e instanceof oe.onnx.AttributeProto ? this.getValueNoCheckFromOnnxFormat(e) : this.getValueNoCheckFromOrtFormat(e);
		}
		static getValueNoCheckFromOnnxFormat(e) {
			switch (e.type) {
				case oe.onnx.AttributeProto.AttributeType.FLOAT: return e.f;
				case oe.onnx.AttributeProto.AttributeType.INT: return e.i;
				case oe.onnx.AttributeProto.AttributeType.STRING: return e.s;
				case oe.onnx.AttributeProto.AttributeType.TENSOR: return e.t;
				case oe.onnx.AttributeProto.AttributeType.GRAPH: return e.g;
				case oe.onnx.AttributeProto.AttributeType.FLOATS: return e.floats;
				case oe.onnx.AttributeProto.AttributeType.INTS: return e.ints;
				case oe.onnx.AttributeProto.AttributeType.STRINGS: return e.strings;
				case oe.onnx.AttributeProto.AttributeType.TENSORS: return e.tensors;
				case oe.onnx.AttributeProto.AttributeType.GRAPHS: return e.graphs;
				default: throw Error(`unsupported attribute type: ${oe.onnx.AttributeProto.AttributeType[e.type]}`);
			}
		}
		static getValueNoCheckFromOrtFormat(e) {
			switch (e.type()) {
				case dt.AttributeType.FLOAT: return e.f();
				case dt.AttributeType.INT: return e.i();
				case dt.AttributeType.STRING: return e.s();
				case dt.AttributeType.TENSOR: return e.t();
				case dt.AttributeType.GRAPH: return e.g();
				case dt.AttributeType.FLOATS: return e.floatsArray();
				case dt.AttributeType.INTS: {
					let t = [];
					for (let n = 0; n < e.intsLength(); n++) t.push(e.ints(n));
					return t;
				}
				case dt.AttributeType.STRINGS: {
					let t = [];
					for (let n = 0; n < e.stringsLength(); n++) t.push(e.strings(n));
					return t;
				}
				case dt.AttributeType.TENSORS: {
					let t = [];
					for (let n = 0; n < e.tensorsLength(); n++) t.push(e.tensors(n));
					return t;
				}
				default: throw Error(`unsupported attribute type: ${dt.AttributeType[e.type()]}`);
			}
		}
	};
}), Ji, _o, Zi, Rt, Oo, Ki, xp = E(() => {
	Tp(), nn(), Ji = Er($r()), br(), fe(), _o = W.experimental.fbs, Zi = { from: (e, t) => new Ki(e, t) }, Rt = class {
		constructor(e) {
			this._from = void 0, this._to = [], this.tensor = void 0, this.type = void 0, e && (this.type = Ve.tensorValueTypeFromProto(e.type.tensorType));
		}
		get from() {
			return this._from;
		}
		get to() {
			return this._to;
		}
	}, Oo = class {
		constructor(e, t) {
			e instanceof Ji.onnx.NodeProto ? (this.name = e.name, this.opType = e.opType, this.attributes = new gn(e.attribute)) : e instanceof _o.Node && (this.name = t ?? e.name(), this.opType = e.opType(), this.attributes = new gn(Ve.tensorAttributesFromORTFormat(e))), this.inputs = [], this.outputs = [], this.executeNode = !0;
		}
	}, Ki = class {
		constructor(e, t) {
			if (!e) throw TypeError("graph is empty");
			this.buildGraph(e), this.transformGraph(t), this.checkIsAcyclic();
		}
		getInputIndices() {
			return this._allInputIndices;
		}
		getInputNames() {
			return this._allInputNames;
		}
		getOutputIndices() {
			return this._allOutputIndices;
		}
		getOutputNames() {
			return this._allOutputNames;
		}
		getValues() {
			return this._allData;
		}
		getNodes() {
			return this._nodes;
		}
		buildGraph(e) {
			if (e instanceof Ji.onnx.GraphProto) this.buildGraphFromOnnxFormat(e);
			else if (e instanceof _o.Graph) this.buildGraphFromOrtFormat(e);
			else throw TypeError("Graph type is not supported.");
		}
		buildGraphFromOnnxFormat(e) {
			let t = /* @__PURE__ */ new Map();
			this._allData = [], this._allInputIndices = [], this._allInputNames = [], this._allOutputIndices = [], this._allOutputNames = [], this._nodes = [];
			let n = /* @__PURE__ */ new Map();
			if (!e.input) throw Error("missing information in graph: input");
			let r = [];
			for (let n of e.input) {
				if (t.has(n.name)) throw Error(`duplicated input name: ${n.name}`);
				let e = this._allData.push(new Rt(n)) - 1;
				t.set(n.name, e), r.push(n.name);
			}
			if (!e.initializer) throw Error("missing information in graph: initializer");
			for (let n of e.initializer) {
				let e = t.get(n.name);
				if (e === void 0) {
					let r = new Rt();
					r.type = {
						shape: { dims: Ve.tensorDimsFromProto(n.dims) },
						tensorType: Ve.tensorDataTypeFromProto(n.dataType)
					}, e = this._allData.push(r) - 1, t.set(n.name, e);
				}
				this._allData[e]._from = -1, this._allData[e].tensor = Ce.fromProto(n);
			}
			for (let e = 0; e < this._allData.length; e++) this._allData[e].tensor || (this._allInputIndices.push(e), this._allInputNames.push(r[e]));
			if (!e.output) throw Error("missing information in graph: output");
			for (let n of e.output) {
				if (t.has(n.name)) throw Error(`duplicated output name: ${n.name}`);
				let e = this._allData.push(new Rt(n)) - 1;
				t.set(n.name, e), this._allOutputIndices.push(e), this._allOutputNames.push(n.name);
			}
			if (!e.node) throw Error("missing information in graph: node");
			for (let t of e.node) {
				if (!t.name) for (let e = 0;; e++) {
					let r = `unnamed_${t.opType}_${e}`;
					if (!n.has(r)) {
						t.name = r;
						break;
					}
				}
				if (n.has(t.name)) throw Error(`duplicated node name: ${t.name}`);
				let e = this._nodes.push(new Oo(t)) - 1;
				n.set(t.name, e);
			}
			for (let n = 0; n < this._nodes.length; n++) {
				let r = this._nodes[n], i = e.node[n];
				if (!i.output) throw Error(`missing output for node: ${i.name}`);
				for (let e of i.output) {
					let a = t.get(e);
					if (typeof a > "u" && (a = this._allData.push(new Rt()) - 1, t.set(e, a)), r.outputs.push(a), this._allData[a]._from !== void 0) throw Error(`multiple nodes output to one data value: ${a}`);
					if (this._allData[a]._from = n, i.opType === "Constant") {
						if (!i.attribute || i.attribute.length !== 1 || !i.attribute[0].t) throw Error("missing attributes or missing tensor value in attributes for this Constant operator");
						if (!i.output || i.output.length !== 1) throw Error("missing output or incorrect number of outputs for this Constant operator");
						r.outputs.pop(), r.executeNode = !1, this._allData[a]._from = -1, this._allData[a].tensor = Ce.fromProto(i.attribute[0].t);
					}
				}
			}
			for (let n = 0; n < this._nodes.length; n++) {
				let r = this._nodes[n], i = e.node[n];
				if (!i.input) throw Error(`missing input for node: ${i.name}`);
				for (let e of i.input) {
					let a = t.get(e);
					if (typeof a > "u") {
						if (e === "" && (i.input.length === 3 || i.input.length === 4) && i.opType === "Resize") continue;
						throw Error(`unrecognized input '${e}' for node: ${i.name}`);
					}
					r.inputs.push(a), this._allData[a]._to.push(n);
				}
			}
			return !0;
		}
		buildGraphFromOrtFormat(e) {
			let t = /* @__PURE__ */ new Map();
			this._allData = [], this._allInputIndices = [], this._allInputNames = [], this._allOutputIndices = [], this._allOutputNames = [], this._nodes = [];
			let n = /* @__PURE__ */ new Map(), r = [];
			for (let n = 0; n < e.inputsLength(); n++) {
				let i = e.inputs(n);
				if (t.has(i)) throw Error(`duplicated input name: ${i}`);
				for (let n = 0; n < e.nodeArgsLength(); n++) if (e.nodeArgs(n)?.name() === i) {
					let a = new Rt();
					if (e.nodeArgs(n)?.type()?.valueType() !== _o.TypeInfoValue.tensor_type) throw Error("Unexpected value type for the nodeArg.");
					let o = e.nodeArgs(n).type().value(new _o.TensorTypeAndShape()), s = Ve.tensorDataTypeFromProto(o.elemType()), c = o.shape(), l = [];
					for (let e = 0; e < c.dimLength(); e++) l.push(nt.longToNumber(c.dim(e).value().dimValue()));
					a.type = {
						shape: { dims: l },
						tensorType: s
					};
					let u = this._allData.push(a) - 1;
					t.set(i, u), r.push(i);
				}
			}
			for (let n = 0; n < e.initializersLength(); n++) {
				let r = e.initializers(n), i = t.get(r.name());
				if (i === void 0) {
					let e = new Rt(), n = Ve.tensorDimsFromORTFormat(r), a = Ve.tensorDataTypeFromProto(r.dataType());
					e.type = {
						shape: { dims: n },
						tensorType: a
					}, i = this._allData.push(e) - 1, t.set(r.name(), i);
				}
				this._allData[i]._from = -1, this._allData[i].tensor = Ce.fromOrtTensor(r);
			}
			for (let e = 0; e < this._allData.length; e++) this._allData[e].tensor || (this._allInputIndices.push(e), this._allInputNames.push(r[e]));
			for (let n = 0; n < e.outputsLength(); n++) {
				let r = e.outputs(n);
				if (t.has(r)) throw Error(`duplicated output name: ${r}`);
				let i = this._allData.push(new Rt()) - 1;
				t.set(r, i), this._allOutputIndices.push(i), this._allOutputNames.push(r);
			}
			if (!e.nodes) throw Error("missing information in graph: node");
			for (let t = 0; t < e.nodesLength(); t++) {
				let r = e.nodes(t), i = r.name();
				if (!i) for (let e = 0; i = `unnamed_${r.opType()}_${e}`, n.has(i); e++);
				if (n.has(i)) throw Error(`duplicated node name: ${i}`);
				let a = this._nodes.push(new Oo(r, i)) - 1;
				n.set(i, a);
			}
			for (let n = 0; n < this._nodes.length; n++) {
				let r = this._nodes[n], i = e.nodes(n);
				if (i == null) throw Error(`No node exists at index ${n}`);
				if (i?.outputsLength() === 0) throw Error(`missing output for node: ${i.name}`);
				for (let e = 0; e < i?.outputsLength(); e++) {
					let a = i?.outputs(e), o = t.get(a);
					if (typeof o > "u" && (o = this._allData.push(new Rt()) - 1, t.set(a, o)), r.outputs.push(o), this._allData[o]._from !== void 0) throw Error(`multiple nodes output to one data value: ${o}`);
					if (this._allData[o]._from = n, i.opType() === "Constant") {
						if (i.attributesLength() !== 1 || !i.attributes(0).t()) throw Error("missing attributes or missing tensor value in attributes for this Constant operator");
						if (i.outputsLength() !== 1) throw Error("missing output or incorrect number of outputs for this Constant operator");
						r.outputs.pop(), r.executeNode = !1, this._allData[o]._from = -1, this._allData[o].tensor = Ce.fromOrtTensor(i.attributes(0).t());
					}
				}
			}
			for (let n = 0; n < this._nodes.length; n++) {
				let r = this._nodes[n], i = e.nodes(n);
				if (i.inputsLength() === 0) throw Error(`missing input for node: ${i.name}`);
				for (let e = 0; e < i.inputsLength(); e++) {
					let a = i.inputs(e), o = t.get(a);
					if (typeof o > "u") throw Error(`unrecognized input '${a}' for node: ${i.name()}`);
					r.inputs.push(o), this._allData[o]._to.push(n);
				}
			}
		}
		checkIsAcyclic() {
			let e = /* @__PURE__ */ new Set();
			this._allInputIndices.forEach((t) => {
				this._allData[t]._to.forEach((t) => {
					e.add(t);
				});
			});
			let t = Array.from(e), n = Array(this._nodes.length).fill("white");
			for (; t.length > 0;) {
				let e = t.pop();
				n[e] === "gray" ? n[e] = "black" : (t.push(e), n[e] = "gray", this._nodes[e].outputs.forEach((r) => {
					let i = this._allData[r];
					if (typeof i.tensor < "u") throw Error("node outputs should not be initialized");
					if (i._from !== e) throw Error("from property of the Value object doesn't match index of Node being processed");
					i._to.forEach((e) => {
						if (n[e] === "gray") throw Error("model graph is cyclic");
						n[e] === "white" && t.push(e);
					});
				}));
			}
		}
		transformGraph(e) {
			this.removeAllIdentityNodes(), this.removeAllDropoutNodes(), this.fuseConvActivationNodes(), e && e.transformGraph(this), this.finalizeGraph();
		}
		finalizeGraph() {
			let e = 0, t = [this._nodes.length, 0], n = 0;
			for (let e = 0; e < this._nodes.length; e++) t[e] = n, this._nodes[e].executeNode ? (n !== e && (this._nodes[n] = this._nodes[e]), n++) : this._nodes[e].outputs.forEach((e) => {
				this._allData[e]._from = -2;
			});
			this._nodes.splice(n, this._nodes.length - n);
			for (let e = 0; e < this._allData.length; e++) {
				let n = this._allData[e];
				n._from !== void 0 && n._from !== -1 && n._from !== -2 && (n._from = t[n._from]);
				for (let e = 0; e < n._to.length; e++) if (n._to[e] >= 0) n._to[e] = t[n._to[e]];
				else throw Error("Trying to update a removed node");
			}
			e = 0;
			for (let t = 0; t < this._allData.length; t++) {
				if (this._allData[t].from === -2 && this._allOutputIndices.indexOf(t + e) === -1) {
					e++, this._allData.splice(t, 1), t--;
					continue;
				}
				if (e > 0) {
					let n = -1;
					this._allData[t].from !== void 0 && this._allData[t].from !== -1 ? (n = this._nodes[this._allData[t].from].outputs.indexOf(t + e), n !== -1 && (this._nodes[this._allData[t].from].outputs[n] = t)) : (n = this._allInputIndices.indexOf(t + e), n !== -1 && (this._allInputIndices[n] = t)), this._allData[t].to.forEach((r) => {
						n = this._nodes[r].inputs.indexOf(t + e), n !== -1 && (this._nodes[r].inputs[n] = t);
					}), this._allData[t].to.length === 0 && (n = this._allOutputIndices.indexOf(t + e), n !== -1 && (this._allOutputIndices[n] = t));
				}
			}
		}
		deleteNode(e) {
			let t = this._nodes[e];
			if (t.outputs.length > 1) {
				for (let e = 1; e < t.outputs.length; e++) if (this._allData[t.outputs[e]].to.length > 0) throw Error("Node deletion with more than one output connected to other nodes is not supported. ");
			}
			t.executeNode = !1;
			let n = t.inputs[0], r = t.outputs[0], i = this._allData[r].to;
			for (let n = 0; n < t.inputs.length; n++) {
				let r = this._allData[t.inputs[n]].to.indexOf(e);
				if (r === -1) throw Error("The Value object doesn't have the current Node in it's 'to' property ");
				this._allData[t.inputs[n]].to.splice(r, 1);
			}
			this._allData[r]._to = [];
			let a = this._allOutputIndices.indexOf(r);
			if (a !== -1 && (this._allOutputIndices[a] = n), i && i.length > 0) for (let e of i) {
				let t = this._nodes[e].inputs.indexOf(r);
				if (t === -1) throw Error("The Node object doesn't have the output Value in it's 'inputs' property ");
				this._nodes[e].inputs[t] = n, this._allData[n].to.push(e);
			}
		}
		removeAllDropoutNodes() {
			let e = 0;
			for (let t of this._nodes) {
				if (t.opType === "Dropout") {
					if (t.inputs.length !== 1) throw Error("Dropout nodes should only contain one input. ");
					if (t.outputs.length !== 1 && t.outputs.length !== 2) throw Error("Dropout nodes should contain either 1 or 2 output(s)");
					if (t.outputs.length === 2 && this._allData[t.outputs[1]]._to.length !== 0) throw Error("Dropout nodes's second output should not be referenced by other nodes");
					this.deleteNode(e);
				}
				e++;
			}
		}
		removeAllIdentityNodes() {
			let e = 0;
			for (let t of this._nodes) t.opType === "Identity" && this.deleteNode(e), e++;
		}
		isActivation(e) {
			switch (e.opType) {
				case "Relu":
				case "Sigmoid":
				case "Clip": return !0;
				default: return !1;
			}
		}
		fuseConvActivationNodes() {
			for (let e of this._nodes) if (e.opType === "Conv") {
				let t = this._allData[e.outputs[0]]._to;
				if (t.length === 1 && this.isActivation(this._nodes[t[0]])) {
					let n = this._nodes[t[0]];
					if (n.opType === "Clip") if (n.inputs.length === 1) try {
						e.attributes.set("activation_params", "floats", [n.attributes.getFloat("min"), n.attributes.getFloat("max")]);
					} catch {
						e.attributes.set("activation_params", "floats", [hr, mr]);
					}
					else if (n.inputs.length >= 3 && this._allData[n.inputs[1]].tensor !== void 0 && this._allData[n.inputs[2]].tensor !== void 0) e.attributes.set("activation_params", "floats", [this._allData[n.inputs[1]].tensor.floatData[0], this._allData[n.inputs[2]].tensor.floatData[0]]);
					else continue;
					e.attributes.set("activation", "string", n.opType), this.deleteNode(t[0]);
				}
			}
		}
	};
}), wp, tg, Io, vp = E(() => {
	Wn(), xp(), nn(), wp = Er($r()), fe(), tg = W.experimental.fbs, Io = class {
		constructor() {}
		load(e, t, n) {
			if (!n) try {
				this.loadFromOnnxFormat(e, t);
				return;
			} catch (e) {
				if (n !== void 0) throw e;
			}
			this.loadFromOrtFormat(e, t);
		}
		loadFromOnnxFormat(e, t) {
			let n = wp.onnx.ModelProto.decode(e);
			if (nt.longToNumber(n.irVersion) < 3) throw Error("only support ONNX model with IR_VERSION>=3");
			this._opsets = n.opsetImport.map((e) => ({
				domain: e.domain,
				version: nt.longToNumber(e.version)
			})), this._graph = Zi.from(n.graph, t);
		}
		loadFromOrtFormat(e, t) {
			let n = new O.ByteBuffer(e), r = tg.InferenceSession.getRootAsInferenceSession(n).model();
			if (nt.longToNumber(r.irVersion()) < 3) throw Error("only support ONNX model with IR_VERSION>=3");
			this._opsets = [];
			for (let e = 0; e < r.opsetImportLength(); e++) {
				let t = r.opsetImport(e);
				this._opsets.push({
					domain: t?.domain(),
					version: nt.longToNumber(t.version())
				});
			}
			this._graph = Zi.from(r.graph(), t);
		}
		get graph() {
			return this._graph;
		}
		get opsets() {
			return this._opsets;
		}
	};
}), So, _p = E(() => {
	gp(), yp(), at(), vp(), So = class {
		constructor(e = {}) {
			this._initialized = !1, this.backendHint = e.backendHint, this.profiler = zn.create(e.profiler), this.context = {
				profiler: this.profiler,
				graphInputTypes: [],
				graphInputDims: []
			};
		}
		get inputNames() {
			return this._model.graph.getInputNames();
		}
		get outputNames() {
			return this._model.graph.getOutputNames();
		}
		startProfiling() {
			this.profiler.start();
		}
		endProfiling() {
			this.profiler.stop();
		}
		async loadModel(e, t, n) {
			await this.profiler.event("session", "Session.loadModel", async () => {
				let r = await Yi(this.backendHint);
				if (this.sessionHandler = r.createSessionHandler(this.context), this._model = new Io(), typeof e == "string") {
					let t = e.endsWith(".ort");
					if (typeof process < "u" && process.versions && process.versions.node) {
						let n = await (void 0)(e);
						this.initialize(n, t);
					} else {
						let n = await (await fetch(e)).arrayBuffer();
						this.initialize(new Uint8Array(n), t);
					}
				} else if (ArrayBuffer.isView(e)) this.initialize(e);
				else {
					let r = new Uint8Array(e, t || 0, n || e.byteLength);
					this.initialize(r);
				}
			});
		}
		initialize(e, t) {
			if (this._initialized) throw Error("already initialized");
			this.profiler.event("session", "Session.initialize", () => {
				let n = this.sessionHandler.transformGraph ? this.sessionHandler : void 0;
				this._model.load(e, n, t), this.sessionHandler.onGraphInitialized && this.sessionHandler.onGraphInitialized(this._model.graph), this.initializeOps(this._model.graph), this._executionPlan = new vo(this._model.graph, this._ops, this.profiler);
			}), this._initialized = !0;
		}
		async run(e) {
			if (!this._initialized) throw Error("session not initialized yet");
			return this.profiler.event("session", "Session.run", async () => {
				let t = this.normalizeAndValidateInputs(e), n = await this._executionPlan.execute(this.sessionHandler, t);
				return this.createOutput(n);
			});
		}
		normalizeAndValidateInputs(e) {
			let t = this._model.graph.getInputNames();
			if (Array.isArray(e)) {
				if (e.length !== t.length) throw Error(`incorrect input array length: expected ${t.length} but got ${e.length}`);
			} else {
				if (e.size !== t.length) throw Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);
				let n = Array(e.size), r = 0;
				for (let i = 0; i < t.length; ++i) {
					let a = e.get(t[i]);
					if (!a) throw Error(`missing input tensor for: '${name}'`);
					n[r++] = a;
				}
				e = n;
			}
			if (!this.context.graphInputTypes || this.context.graphInputTypes.length === 0 || !this.context.graphInputDims || this.context.graphInputDims.length === 0) {
				let t = this._model.graph.getInputIndices(), n = this._model.graph.getValues(), r = Array(t.length);
				for (let i = 0; i < t.length; ++i) {
					let a = n[t[i]];
					r[i] = a.type.shape.dims, this.context.graphInputTypes.push(a.type.tensorType), this.context.graphInputDims.push(e[i].dims);
				}
				this.validateInputTensorDims(r, e, !0);
			} else this.validateInputTensorDims(this.context.graphInputDims, e, !1);
			return this.validateInputTensorTypes(this.context.graphInputTypes, e), e;
		}
		validateInputTensorTypes(e, t) {
			for (let n = 0; n < t.length; n++) {
				let r = e[n], i = t[n].type;
				if (r !== i) throw Error(`input tensor[${n}] check failed: expected type '${r}' but got ${i}`);
			}
		}
		validateInputTensorDims(e, t, n) {
			for (let r = 0; r < t.length; r++) {
				let i = e[r], a = t[r].dims;
				if (!this.compareTensorDims(i, a, n)) throw Error(`input tensor[${r}] check failed: expected shape '[${i.join(",")}]' but got [${a.join(",")}]`);
			}
		}
		compareTensorDims(e, t, n) {
			if (e.length !== t.length) return !1;
			for (let r = 0; r < e.length; ++r) if (e[r] !== t[r] && (!n || e[r] !== 0)) return !1;
			return !0;
		}
		createOutput(e) {
			let t = this._model.graph.getOutputNames();
			if (e.length !== t.length) throw Error("expected number of outputs do not match number of generated outputs");
			let n = /* @__PURE__ */ new Map();
			for (let r = 0; r < t.length; ++r) n.set(t[r], e[r]);
			return n;
		}
		initializeOps(e) {
			let t = e.getNodes();
			this._ops = Array(t.length);
			for (let n = 0; n < t.length; n++) this._ops[n] = this.sessionHandler.resolve(t[n], this._model.opsets, e);
		}
	};
}), Ao, Op = E(() => {
	Tt(), br(), Ao = class {
		constructor(e) {
			this.session = e, this.inputNames = this.session.inputNames, this.outputNames = this.session.outputNames;
		}
		async dispose() {}
		async run(e, t, n) {
			let r = /* @__PURE__ */ new Map();
			for (let t in e) if (Object.hasOwnProperty.call(e, t)) {
				let n = e[t];
				r.set(t, new Ce(n.dims, n.type, void 0, void 0, n.data));
			}
			let i = await this.session.run(r), a = {};
			return i.forEach((e, t) => {
				a[t] = new Re(e.type, e.data, e.dims);
			}), a;
		}
		startProfiling() {
			this.session.startProfiling();
		}
		endProfiling() {
			this.session.endProfiling();
		}
	};
}), Ip = {};
Pr(Ip, { onnxjsBackend: () => ng });
var Qi, ng, Sp = E(() => {
	_p(), Op(), Qi = class {
		async init() {}
		async createInferenceSessionHandler(e, t) {
			let n = new So(t);
			return await n.loadModel(e), new Ao(n);
		}
	}, ng = new Qi();
}), ea = {};
Pr(ea, {
	createReadStream: () => Ap,
	readFile: () => og,
	readFileSync: () => ig
});
var og, ig, Ap, ta = E(() => {
	og = void 0, ig = void 0, Ap = void 0;
}), ra = {};
Pr(ra, { join: () => ag });
var ag, na = E(() => {
	ag = void 0;
}), Dp = me((e, t) => {
	var n = (() => {
		var e = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
		return typeof __filename < "u" && (e ||= __filename), function(t = {}) {
			var n = t, r, i;
			n.ready = new Promise((e, t) => {
				r = e, i = t;
			});
			var a = Object.assign({}, n), o = "./this.program", s = typeof window == "object", c = typeof importScripts == "function", l = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", u = "", d, f, p;
			if (l) {
				var m = (ta(), or(ea)), h = (na(), or(ra));
				u = c ? h.dirname(u) + "/" : __dirname + "/", d = (e, t) => (e = he(e) ? new URL(e) : h.normalize(e), m.readFileSync(e, t ? void 0 : "utf8")), p = (e) => (e = d(e, !0), e.buffer || (e = new Uint8Array(e)), e), f = (e, t, n, r = !0) => {
					e = he(e) ? new URL(e) : h.normalize(e), m.readFile(e, r ? void 0 : "utf8", (e, i) => {
						e ? n(e) : t(r ? i.buffer : i);
					});
				}, !n.thisProgram && 1 < process.argv.length && (o = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), n.inspect = () => "[Emscripten Module object]";
			} else (s || c) && (c ? u = self.location.href : typeof document < "u" && document.currentScript && (u = document.currentScript.src), e && (u = e), u = u.indexOf("blob:") === 0 ? "" : u.substr(0, u.replace(/[?#].*/, "").lastIndexOf("/") + 1), d = (e) => {
				var t = new XMLHttpRequest();
				return t.open("GET", e, !1), t.send(null), t.responseText;
			}, c && (p = (e) => {
				var t = new XMLHttpRequest();
				return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
			}), f = (e, t, n) => {
				var r = new XMLHttpRequest();
				r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
					r.status == 200 || r.status == 0 && r.response ? t(r.response) : n();
				}, r.onerror = n, r.send(null);
			});
			var g = console.log.bind(console), _ = console.error.bind(console);
			Object.assign(n, a), a = null, typeof WebAssembly != "object" && de("no native wasm support detected");
			var v, y = !1, b, x, S, C, te;
			function ne() {
				var e = v.buffer;
				n.HEAP8 = b = new Int8Array(e), n.HEAP16 = new Int16Array(e), n.HEAPU8 = x = new Uint8Array(e), n.HEAPU16 = new Uint16Array(e), n.HEAP32 = S = new Int32Array(e), n.HEAPU32 = C = new Uint32Array(e), n.HEAPF32 = new Float32Array(e), n.HEAPF64 = te = new Float64Array(e);
			}
			var ie = [], w = [], T = [], se = 0, ue = null, D = null;
			function de(e) {
				throw e = "Aborted(" + e + ")", _(e), y = !0, e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."), i(e), e;
			}
			var pe = (e) => e.startsWith("data:application/octet-stream;base64,"), he = (e) => e.startsWith("file://"), ge;
			if (ge = "ort-wasm.wasm", !pe(ge)) {
				var ve = ge;
				ge = n.locateFile ? n.locateFile(ve, u) : u + ve;
			}
			function Se(e) {
				if (p) return p(e);
				throw "both async and sync fetching of the wasm failed";
			}
			function we(e) {
				if (s || c) {
					if (typeof fetch == "function" && !he(e)) return fetch(e, { credentials: "same-origin" }).then((t) => {
						if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
						return t.arrayBuffer();
					}).catch(() => Se(e));
					if (f) return new Promise((t, n) => {
						f(e, (e) => t(new Uint8Array(e)), n);
					});
				}
				return Promise.resolve().then(() => Se(e));
			}
			function Te(e, t, n) {
				return we(e).then((e) => WebAssembly.instantiate(e, t)).then((e) => e).then(n, (e) => {
					_(`failed to asynchronously prepare wasm: ${e}`), de(e);
				});
			}
			function Ee(e, t) {
				var n = ge;
				return typeof WebAssembly.instantiateStreaming != "function" || pe(n) || he(n) || l || typeof fetch != "function" ? Te(n, e, t) : fetch(n, { credentials: "same-origin" }).then((r) => WebAssembly.instantiateStreaming(r, e).then(t, function(r) {
					return _(`wasm streaming compile failed: ${r}`), _("falling back to ArrayBuffer instantiation"), Te(n, e, t);
				}));
			}
			var ke, Ae = { 920016: (e, t, r, i) => {
				if (typeof n > "u" || !n.za) return 1;
				if (e = ze(e >>> 0), e.startsWith("./") && (e = e.substring(2)), e = n.za.get(e), !e) return 2;
				if (t >>>= 0, r >>>= 0, t + r > e.byteLength) return 3;
				try {
					return x.set(e.subarray(t, t + r), i >>> 0 >>> 0), 0;
				} catch {
					return 4;
				}
			} };
			function Me(e) {
				this.xa = e - 24, this.Ha = function(e) {
					C[this.xa + 4 >>> 2 >>> 0] = e;
				}, this.Ga = function(e) {
					C[this.xa + 8 >>> 2 >>> 0] = e;
				}, this.Aa = function(e, t) {
					this.Fa(), this.Ha(e), this.Ga(t);
				}, this.Fa = function() {
					C[this.xa + 16 >>> 2 >>> 0] = 0;
				};
			}
			var Ne = 0, Pe = 0, Fe = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Ie = (e, t, n) => {
				t >>>= 0;
				var r = t + n;
				for (n = t; e[n] && !(n >= r);) ++n;
				if (16 < n - t && e.buffer && Fe) return Fe.decode(e.subarray(t, n));
				for (r = ""; t < n;) {
					var i = e[t++];
					if (i & 128) {
						var a = e[t++] & 63;
						if ((i & 224) == 192) r += String.fromCharCode((i & 31) << 6 | a);
						else {
							var o = e[t++] & 63;
							i = (i & 240) == 224 ? (i & 15) << 12 | a << 6 | o : (i & 7) << 18 | a << 12 | o << 6 | e[t++] & 63, 65536 > i ? r += String.fromCharCode(i) : (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023));
						}
					} else r += String.fromCharCode(i);
				}
				return r;
			}, ze = (e, t) => (e >>>= 0) ? Ie(x, e, t) : "", Be = (e) => {
				for (var t = 0, n = 0; n < e.length; ++n) {
					var r = e.charCodeAt(n);
					127 >= r ? t++ : 2047 >= r ? t += 2 : 55296 <= r && 57343 >= r ? (t += 4, ++n) : t += 3;
				}
				return t;
			}, He = (e, t, n, r) => {
				if (n >>>= 0, !(0 < r)) return 0;
				var i = n;
				r = n + r - 1;
				for (var a = 0; a < e.length; ++a) {
					var o = e.charCodeAt(a);
					if (55296 <= o && 57343 >= o) {
						var s = e.charCodeAt(++a);
						o = 65536 + ((o & 1023) << 10) | s & 1023;
					}
					if (127 >= o) {
						if (n >= r) break;
						t[n++ >>> 0] = o;
					} else {
						if (2047 >= o) {
							if (n + 1 >= r) break;
							t[n++ >>> 0] = 192 | o >> 6;
						} else {
							if (65535 >= o) {
								if (n + 2 >= r) break;
								t[n++ >>> 0] = 224 | o >> 12;
							} else {
								if (n + 3 >= r) break;
								t[n++ >>> 0] = 240 | o >> 18, t[n++ >>> 0] = 128 | o >> 12 & 63;
							}
							t[n++ >>> 0] = 128 | o >> 6 & 63;
						}
						t[n++ >>> 0] = 128 | o & 63;
					}
				}
				return t[n >>> 0] = 0, n - i;
			}, Ue = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), We = [
				0,
				31,
				60,
				91,
				121,
				152,
				182,
				213,
				244,
				274,
				305,
				335
			], qe = [
				0,
				31,
				59,
				90,
				120,
				151,
				181,
				212,
				243,
				273,
				304,
				334
			], Ye = (e) => {
				var t = Be(e) + 1, n = vt(t);
				return n && He(e, x, n, t), n;
			}, Ze = [], Qe = {}, $e = () => {
				if (!et) {
					var e = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
						_: o || "./this.program"
					}, t;
					for (t in Qe) Qe[t] === void 0 ? delete e[t] : e[t] = Qe[t];
					var n = [];
					for (t in e) n.push(`${t}=${e[t]}`);
					et = n;
				}
				return et;
			}, et, rt = [
				null,
				[],
				[]
			], ot = [
				31,
				29,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			], lt = [
				31,
				28,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			];
			function mt(e) {
				var t = Array(Be(e) + 1);
				return He(e, t, 0, t.length), t;
			}
			function gt(e, t, n, r) {
				function i(e, t, n) {
					for (e = typeof e == "number" ? e.toString() : e || ""; e.length < t;) e = n[0] + e;
					return e;
				}
				function a(e, t) {
					return i(e, t, "0");
				}
				function o(e, t) {
					function n(e) {
						return 0 > e ? -1 : +(0 < e);
					}
					var r;
					return (r = n(e.getFullYear() - t.getFullYear())) === 0 && (r = n(e.getMonth() - t.getMonth())) === 0 && (r = n(e.getDate() - t.getDate())), r;
				}
				function s(e) {
					switch (e.getDay()) {
						case 0: return new Date(e.getFullYear() - 1, 11, 29);
						case 1: return e;
						case 2: return new Date(e.getFullYear(), 0, 3);
						case 3: return new Date(e.getFullYear(), 0, 2);
						case 4: return new Date(e.getFullYear(), 0, 1);
						case 5: return new Date(e.getFullYear() - 1, 11, 31);
						case 6: return new Date(e.getFullYear() - 1, 11, 30);
					}
				}
				function c(e) {
					var t = e.ta;
					for (e = new Date(new Date(e.ua + 1900, 0, 1).getTime()); 0 < t;) {
						var n = e.getMonth(), r = (Ue(e.getFullYear()) ? ot : lt)[n];
						if (t > r - e.getDate()) t -= r - e.getDate() + 1, e.setDate(1), 11 > n ? e.setMonth(n + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
						else {
							e.setDate(e.getDate() + t);
							break;
						}
					}
					return n = new Date(e.getFullYear() + 1, 0, 4), t = s(new Date(e.getFullYear(), 0, 4)), n = s(n), 0 >= o(t, e) ? 0 >= o(n, e) ? e.getFullYear() + 1 : e.getFullYear() : e.getFullYear() - 1;
				}
				e >>>= 0, t >>>= 0, n >>>= 0, r >>>= 0;
				var l = C[r + 40 >>> 2 >>> 0];
				for (var u in r = {
					Da: S[r >>> 2 >>> 0],
					Ca: S[r + 4 >>> 2 >>> 0],
					va: S[r + 8 >>> 2 >>> 0],
					ya: S[r + 12 >>> 2 >>> 0],
					wa: S[r + 16 >>> 2 >>> 0],
					ua: S[r + 20 >>> 2 >>> 0],
					oa: S[r + 24 >>> 2 >>> 0],
					ta: S[r + 28 >>> 2 >>> 0],
					Ia: S[r + 32 >>> 2 >>> 0],
					Ba: S[r + 36 >>> 2 >>> 0],
					Ea: l ? ze(l) : ""
				}, n = ze(n), l = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				}, l) n = n.replace(new RegExp(u, "g"), l[u]);
				var d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), f = "January February March April May June July August September October November December".split(" ");
				for (u in l = {
					"%a": (e) => d[e.oa].substring(0, 3),
					"%A": (e) => d[e.oa],
					"%b": (e) => f[e.wa].substring(0, 3),
					"%B": (e) => f[e.wa],
					"%C": (e) => a((e.ua + 1900) / 100 | 0, 2),
					"%d": (e) => a(e.ya, 2),
					"%e": (e) => i(e.ya, 2, " "),
					"%g": (e) => c(e).toString().substring(2),
					"%G": (e) => c(e),
					"%H": (e) => a(e.va, 2),
					"%I": (e) => (e = e.va, e == 0 ? e = 12 : 12 < e && (e -= 12), a(e, 2)),
					"%j": (e) => {
						for (var t = 0, n = 0; n <= e.wa - 1; t += (Ue(e.ua + 1900) ? ot : lt)[n++]);
						return a(e.ya + t, 3);
					},
					"%m": (e) => a(e.wa + 1, 2),
					"%M": (e) => a(e.Ca, 2),
					"%n": () => "\n",
					"%p": (e) => 0 <= e.va && 12 > e.va ? "AM" : "PM",
					"%S": (e) => a(e.Da, 2),
					"%t": () => "	",
					"%u": (e) => e.oa || 7,
					"%U": (e) => a(Math.floor((e.ta + 7 - e.oa) / 7), 2),
					"%V": (e) => {
						var t = Math.floor((e.ta + 7 - (e.oa + 6) % 7) / 7);
						if (2 >= (e.oa + 371 - e.ta - 2) % 7 && t++, t) t == 53 && (n = (e.oa + 371 - e.ta) % 7, n == 4 || n == 3 && Ue(e.ua) || (t = 1));
						else {
							t = 52;
							var n = (e.oa + 7 - e.ta - 1) % 7;
							(n == 4 || n == 5 && Ue(e.ua % 400 - 1)) && t++;
						}
						return a(t, 2);
					},
					"%w": (e) => e.oa,
					"%W": (e) => a(Math.floor((e.ta + 7 - (e.oa + 6) % 7) / 7), 2),
					"%y": (e) => (e.ua + 1900).toString().substring(2),
					"%Y": (e) => e.ua + 1900,
					"%z": (e) => {
						e = e.Ba;
						var t = 0 <= e;
						return e = Math.abs(e) / 60, (t ? "+" : "-") + ("0000" + (e / 60 * 100 + e % 60)).slice(-4);
					},
					"%Z": (e) => e.Ea,
					"%%": () => "%"
				}, n = n.replace(/%%/g, "\0\0"), l) n.includes(u) && (n = n.replace(new RegExp(u, "g"), l[u](r)));
				return n = n.replace(/\0\0/g, "%"), u = mt(n), u.length > t ? 0 : (b.set(u, e >>> 0), u.length - 1);
			}
			var k = {
				a: function(e, t, n) {
					throw e >>>= 0, new Me(e).Aa(t >>> 0, n >>> 0), Ne = e, Pe++, Ne;
				},
				e: function() {
					return 0;
				},
				H: function() {},
				x: function() {},
				z: function() {},
				J: function() {
					return 0;
				},
				F: function() {},
				A: function() {},
				E: function() {},
				g: function() {},
				y: function() {},
				v: function() {},
				G: function() {},
				w: function() {},
				k: () => 1,
				n: function(e, t, n) {
					e = t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN, n >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), S[n >>> 2 >>> 0] = e.getUTCSeconds(), S[n + 4 >>> 2 >>> 0] = e.getUTCMinutes(), S[n + 8 >>> 2 >>> 0] = e.getUTCHours(), S[n + 12 >>> 2 >>> 0] = e.getUTCDate(), S[n + 16 >>> 2 >>> 0] = e.getUTCMonth(), S[n + 20 >>> 2 >>> 0] = e.getUTCFullYear() - 1900, S[n + 24 >>> 2 >>> 0] = e.getUTCDay(), S[n + 28 >>> 2 >>> 0] = (e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0;
				},
				o: function(e, t, n) {
					e = t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN, n >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), S[n >>> 2 >>> 0] = e.getSeconds(), S[n + 4 >>> 2 >>> 0] = e.getMinutes(), S[n + 8 >>> 2 >>> 0] = e.getHours(), S[n + 12 >>> 2 >>> 0] = e.getDate(), S[n + 16 >>> 2 >>> 0] = e.getMonth(), S[n + 20 >>> 2 >>> 0] = e.getFullYear() - 1900, S[n + 24 >>> 2 >>> 0] = e.getDay(), S[n + 28 >>> 2 >>> 0] = (Ue(e.getFullYear()) ? We : qe)[e.getMonth()] + e.getDate() - 1 | 0, S[n + 36 >>> 2 >>> 0] = -(60 * e.getTimezoneOffset()), t = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
					var r = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
					S[n + 32 >>> 2 >>> 0] = (t != r && e.getTimezoneOffset() == Math.min(r, t)) | 0;
				},
				p: function(e) {
					e >>>= 0;
					var t = new Date(S[e + 20 >>> 2 >>> 0] + 1900, S[e + 16 >>> 2 >>> 0], S[e + 12 >>> 2 >>> 0], S[e + 8 >>> 2 >>> 0], S[e + 4 >>> 2 >>> 0], S[e >>> 2 >>> 0], 0), n = S[e + 32 >>> 2 >>> 0], r = t.getTimezoneOffset(), i = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), a = new Date(t.getFullYear(), 0, 1).getTimezoneOffset(), o = Math.min(a, i);
					return 0 > n ? S[e + 32 >>> 2 >>> 0] = +(i != a && o == r) : 0 < n != (o == r) && (i = Math.max(a, i), t.setTime(t.getTime() + 6e4 * ((0 < n ? o : i) - r))), S[e + 24 >>> 2 >>> 0] = t.getDay(), S[e + 28 >>> 2 >>> 0] = (Ue(t.getFullYear()) ? We : qe)[t.getMonth()] + t.getDate() - 1 | 0, S[e >>> 2 >>> 0] = t.getSeconds(), S[e + 4 >>> 2 >>> 0] = t.getMinutes(), S[e + 8 >>> 2 >>> 0] = t.getHours(), S[e + 12 >>> 2 >>> 0] = t.getDate(), S[e + 16 >>> 2 >>> 0] = t.getMonth(), S[e + 20 >>> 2 >>> 0] = t.getYear(), e = t.getTime(), isNaN(e) ? (S[_t() >>> 2 >>> 0] = 61, e = -1) : e /= 1e3, yt((ke = e, 1 <= +Math.abs(ke) ? 0 < ke ? Math.floor(ke / 4294967296) >>> 0 : ~~+Math.ceil((ke - +(~~ke >>> 0)) / 4294967296) >>> 0 : 0)), e >>> 0;
				},
				l: function() {
					return -52;
				},
				m: function() {},
				t: function(e, t, n) {
					function r(e) {
						return (e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? e[1] : "GMT";
					}
					n >>>= 0;
					var i = (/* @__PURE__ */ new Date()).getFullYear(), a = new Date(i, 0, 1), o = new Date(i, 6, 1);
					i = a.getTimezoneOffset();
					var s = o.getTimezoneOffset();
					C[e >>> 0 >>> 2 >>> 0] = 60 * Math.max(i, s), S[t >>> 0 >>> 2 >>> 0] = +(i != s), e = r(a), t = r(o), e = Ye(e), t = Ye(t), s < i ? (C[n >>> 2 >>> 0] = e, C[n + 4 >>> 2 >>> 0] = t) : (C[n >>> 2 >>> 0] = t, C[n + 4 >>> 2 >>> 0] = e);
				},
				d: () => {
					de("");
				},
				B: function(e, t, n) {
					e >>>= 0, t >>>= 0, n >>>= 0, Ze.length = 0;
					for (var r; r = x[t++ >>> 0];) {
						var i = r != 105;
						i &= r != 112, n += i && n % 8 ? 4 : 0, Ze.push(r == 112 ? C[n >>> 2 >>> 0] : r == 105 ? S[n >>> 2 >>> 0] : te[n >>> 3 >>> 0]), n += i ? 8 : 4;
					}
					return Ae[e].apply(null, Ze);
				},
				h: () => Date.now(),
				u: function() {
					return 4294901760;
				},
				b: () => performance.now(),
				I: function(e, t, n) {
					return t >>>= 0, x.copyWithin(e >>> 0 >>> 0, t >>> 0, t + (n >>> 0) >>> 0);
				},
				s: function(e) {
					e >>>= 0;
					var t = x.length;
					if (4294901760 < e) return !1;
					for (var n = 1; 4 >= n; n *= 2) {
						var r = t * (1 + .2 / n);
						r = Math.min(r, e + 100663296);
						var i = Math;
						r = Math.max(e, r);
						e: {
							i = (i.min.call(i, 4294901760, r + (65536 - r % 65536) % 65536) - v.buffer.byteLength + 65535) / 65536;
							try {
								v.grow(i), ne();
								var a = 1;
								break e;
							} catch {}
							a = void 0;
						}
						if (a) return !0;
					}
					return !1;
				},
				C: function(e, t) {
					e >>>= 0, t >>>= 0;
					var n = 0;
					return $e().forEach((r, i) => {
						var a = t + n;
						for (i = C[e + 4 * i >>> 2 >>> 0] = a, a = 0; a < r.length; ++a) b[i++ >>> 0 >>> 0] = r.charCodeAt(a);
						b[i >>> 0 >>> 0] = 0, n += r.length + 1;
					}), 0;
				},
				D: function(e, t) {
					e >>>= 0, t >>>= 0;
					var n = $e();
					C[e >>> 2 >>> 0] = n.length;
					var r = 0;
					return n.forEach((e) => r += e.length + 1), C[t >>> 2 >>> 0] = r, 0;
				},
				f: () => 52,
				j: function() {
					return 52;
				},
				q: function() {
					return 70;
				},
				i: function(e, t, n, r) {
					t >>>= 0, n >>>= 0, r >>>= 0;
					for (var i = 0, a = 0; a < n; a++) {
						var o = C[t >>> 2 >>> 0], s = C[t + 4 >>> 2 >>> 0];
						t += 8;
						for (var c = 0; c < s; c++) {
							var l = x[o + c >>> 0], u = rt[e];
							l === 0 || l === 10 ? ((e === 1 ? g : _)(Ie(u, 0)), u.length = 0) : u.push(l);
						}
						i += s;
					}
					return C[r >>> 2 >>> 0] = i, 0;
				},
				r: gt,
				c: function(e, t, n, r) {
					return gt(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
				}
			}, A = function() {
				function e(e) {
					return A = e.exports, A = Ct(), v = A.K, ne(), w.unshift(A.L), se--, se == 0 && (ue !== null && (clearInterval(ue), ue = null), D && (e = D, D = null, e())), A;
				}
				var t = { a: k };
				if (se++, n.instantiateWasm) try {
					return n.instantiateWasm(t, e);
				} catch (e) {
					_(`Module.instantiateWasm callback failed with error: ${e}`), i(e);
				}
				return Ee(t, function(t) {
					e(t.instance);
				}).catch(i), {};
			}();
			n._OrtInit = (e, t) => (n._OrtInit = A.M)(e, t), n._OrtGetLastError = (e, t) => (n._OrtGetLastError = A.N)(e, t), n._OrtCreateSessionOptions = (e, t, r, i, a, o, s, c, l, u) => (n._OrtCreateSessionOptions = A.O)(e, t, r, i, a, o, s, c, l, u), n._OrtAppendExecutionProvider = (e, t) => (n._OrtAppendExecutionProvider = A.P)(e, t), n._OrtAddFreeDimensionOverride = (e, t, r) => (n._OrtAddFreeDimensionOverride = A.Q)(e, t, r), n._OrtAddSessionConfigEntry = (e, t, r) => (n._OrtAddSessionConfigEntry = A.R)(e, t, r), n._OrtReleaseSessionOptions = (e) => (n._OrtReleaseSessionOptions = A.S)(e), n._OrtCreateSession = (e, t, r) => (n._OrtCreateSession = A.T)(e, t, r), n._OrtReleaseSession = (e) => (n._OrtReleaseSession = A.U)(e), n._OrtGetInputOutputCount = (e, t, r) => (n._OrtGetInputOutputCount = A.V)(e, t, r), n._OrtGetInputName = (e, t) => (n._OrtGetInputName = A.W)(e, t), n._OrtGetOutputName = (e, t) => (n._OrtGetOutputName = A.X)(e, t), n._OrtFree = (e) => (n._OrtFree = A.Y)(e), n._OrtCreateTensor = (e, t, r, i, a, o) => (n._OrtCreateTensor = A.Z)(e, t, r, i, a, o), n._OrtGetTensorData = (e, t, r, i, a) => (n._OrtGetTensorData = A._)(e, t, r, i, a), n._OrtReleaseTensor = (e) => (n._OrtReleaseTensor = A.$)(e), n._OrtCreateRunOptions = (e, t, r, i) => (n._OrtCreateRunOptions = A.aa)(e, t, r, i), n._OrtAddRunConfigEntry = (e, t, r) => (n._OrtAddRunConfigEntry = A.ba)(e, t, r), n._OrtReleaseRunOptions = (e) => (n._OrtReleaseRunOptions = A.ca)(e), n._OrtCreateBinding = (e) => (n._OrtCreateBinding = A.da)(e), n._OrtBindInput = (e, t, r) => (n._OrtBindInput = A.ea)(e, t, r), n._OrtBindOutput = (e, t, r, i) => (n._OrtBindOutput = A.fa)(e, t, r, i), n._OrtClearBoundOutputs = (e) => (n._OrtClearBoundOutputs = A.ga)(e), n._OrtReleaseBinding = (e) => (n._OrtReleaseBinding = A.ha)(e), n._OrtRunWithBinding = (e, t, r, i, a) => (n._OrtRunWithBinding = A.ia)(e, t, r, i, a), n._OrtRun = (e, t, r, i, a, o, s, c) => (n._OrtRun = A.ja)(e, t, r, i, a, o, s, c), n._OrtEndProfiling = (e) => (n._OrtEndProfiling = A.ka)(e);
			var _t = () => (_t = A.la)(), vt = n._malloc = (e) => (vt = n._malloc = A.ma)(e);
			n._free = (e) => (n._free = A.na)(e);
			var yt = (e) => (yt = A.pa)(e), bt = () => (bt = A.qa)(), j = (e) => (j = A.ra)(e), St = (e) => (St = A.sa)(e);
			function Ct() {
				var e = A;
				e = Object.assign({}, e);
				var t = (e) => () => e() >>> 0, n = (e) => (t) => e(t) >>> 0;
				return e.la = t(e.la), e.ma = n(e.ma), e.qa = t(e.qa), e.sa = n(e.sa), e;
			}
			n.stackAlloc = St, n.stackSave = bt, n.stackRestore = j, n.UTF8ToString = ze, n.stringToUTF8 = (e, t, n) => He(e, x, t, n), n.lengthBytesUTF8 = Be;
			var Et;
			D = function e() {
				Et || Dt(), Et || (D = e);
			};
			function Dt() {
				if (!(0 < se)) {
					if (n.preRun) for (typeof n.preRun == "function" && (n.preRun = [n.preRun]); n.preRun.length;) {
						var e = n.preRun.shift();
						ie.unshift(e);
					}
					for (; 0 < ie.length;) ie.shift()(n);
					if (!(0 < se || Et || (Et = !0, n.calledRun = !0, y))) {
						for (; 0 < w.length;) w.shift()(n);
						for (r(n); 0 < T.length;) T.shift()(n);
					}
				}
			}
			return Dt(), t.ready;
		};
	})();
	typeof e == "object" && typeof t == "object" ? t.exports = n : typeof define == "function" && define.amd && define([], () => n);
}), Lp = me(() => {}), Fp = me(() => {}), Cp = {};
Pr(Cp, { cpus: () => sg });
var sg, $p = E(() => {
	sg = void 0;
}), Np = me((e, t) => {
	var n = (() => {
		var e = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
		return typeof __filename < "u" && (e ||= __filename), function(t = {}) {
			function n() {
				return T.buffer != de.buffer && Se(), de;
			}
			function r() {
				return T.buffer != de.buffer && Se(), pe;
			}
			function i() {
				return T.buffer != de.buffer && Se(), he;
			}
			function a() {
				return T.buffer != de.buffer && Se(), ge;
			}
			function o() {
				return T.buffer != de.buffer && Se(), ve;
			}
			var s = t, c, l;
			s.ready = new Promise((e, t) => {
				c = e, l = t;
			});
			var u = Object.assign({}, s), d = "./this.program", f = (e, t) => {
				throw t;
			}, p = typeof window == "object", m = typeof importScripts == "function", h = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", g = s.ENVIRONMENT_IS_PTHREAD || !1, _ = "";
			function v(e) {
				return s.locateFile ? s.locateFile(e, _) : _ + e;
			}
			var y, b, x;
			if (h) {
				var S = (ta(), or(ea)), C = (na(), or(ra));
				_ = m ? C.dirname(_) + "/" : __dirname + "/", y = (e, t) => (e = ze(e) ? new URL(e) : C.normalize(e), S.readFileSync(e, t ? void 0 : "utf8")), x = (e) => (e = y(e, !0), e.buffer || (e = new Uint8Array(e)), e), b = (e, t, n, r = !0) => {
					e = ze(e) ? new URL(e) : C.normalize(e), S.readFile(e, r ? void 0 : "utf8", (e, i) => {
						e ? n(e) : t(r ? i.buffer : i);
					});
				}, !s.thisProgram && 1 < process.argv.length && (d = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), f = (e, t) => {
					throw process.exitCode = e, t;
				}, s.inspect = () => "[Emscripten Module object]";
				let e;
				try {
					e = Lp();
				} catch (e) {
					throw console.error("The \"worker_threads\" module is not supported in this node.js build - perhaps a newer version is needed?"), e;
				}
				global.Worker = e.Worker;
			} else (p || m) && (m ? _ = self.location.href : typeof document < "u" && document.currentScript && (_ = document.currentScript.src), typeof e < "u" && e && (_ = e), _ = _.indexOf("blob:") === 0 ? "" : _.substr(0, _.replace(/[?#].*/, "").lastIndexOf("/") + 1), h || (y = (e) => {
				var t = new XMLHttpRequest();
				return t.open("GET", e, !1), t.send(null), t.responseText;
			}, m && (x = (e) => {
				var t = new XMLHttpRequest();
				return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
			}), b = (e, t, n) => {
				var r = new XMLHttpRequest();
				r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = () => {
					r.status == 200 || r.status == 0 && r.response ? t(r.response) : n();
				}, r.onerror = n, r.send(null);
			}));
			h && typeof performance > "u" && (global.performance = Fp().performance);
			var te = console.log.bind(console), ne = console.error.bind(console);
			h && (te = (...e) => S.writeSync(1, e.join(" ") + "\n"), ne = (...e) => S.writeSync(2, e.join(" ") + "\n"));
			var ie = te, w = ne;
			Object.assign(s, u), u = null, typeof WebAssembly != "object" && Fe("no native wasm support detected");
			var T, se, ue = !1, D, de, pe, he, ge, ve;
			function Se() {
				var e = T.buffer;
				s.HEAP8 = de = new Int8Array(e), s.HEAP16 = new Int16Array(e), s.HEAPU8 = pe = new Uint8Array(e), s.HEAPU16 = new Uint16Array(e), s.HEAP32 = he = new Int32Array(e), s.HEAPU32 = ge = new Uint32Array(e), s.HEAPF32 = new Float32Array(e), s.HEAPF64 = ve = new Float64Array(e);
			}
			var we = 16777216;
			if (g) T = s.wasmMemory;
			else if (s.wasmMemory) T = s.wasmMemory;
			else if (T = new WebAssembly.Memory({
				initial: we / 65536,
				maximum: 65536,
				shared: !0
			}), !(T.buffer instanceof SharedArrayBuffer)) throw w("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), h && w("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"), Error("bad memory");
			Se(), we = T.buffer.byteLength;
			var Te = [], Ee = [], ke = [], Ae = 0, Me = null, Ne = null;
			function Pe() {
				if (Ae--, Ae == 0 && (Me !== null && (clearInterval(Me), Me = null), Ne)) {
					var e = Ne;
					Ne = null, e();
				}
			}
			function Fe(e) {
				throw e = "Aborted(" + e + ")", w(e), ue = !0, D = 1, e = new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info."), l(e), e;
			}
			var Ie = (e) => e.startsWith("data:application/octet-stream;base64,"), ze = (e) => e.startsWith("file://"), Be = "ort-wasm-threaded.wasm";
			Ie(Be) || (Be = v(Be));
			function He(e) {
				if (x) return x(e);
				throw "both async and sync fetching of the wasm failed";
			}
			function Ue(e) {
				if (p || m) {
					if (typeof fetch == "function" && !ze(e)) return fetch(e, { credentials: "same-origin" }).then((t) => {
						if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
						return t.arrayBuffer();
					}).catch(() => He(e));
					if (b) return new Promise((t, n) => {
						b(e, (e) => t(new Uint8Array(e)), n);
					});
				}
				return Promise.resolve().then(() => He(e));
			}
			function We(e, t, n) {
				return Ue(e).then((e) => WebAssembly.instantiate(e, t)).then((e) => e).then(n, (e) => {
					w(`failed to asynchronously prepare wasm: ${e}`), Fe(e);
				});
			}
			function qe(e, t) {
				var n = Be;
				return typeof WebAssembly.instantiateStreaming != "function" || Ie(n) || ze(n) || h || typeof fetch != "function" ? We(n, e, t) : fetch(n, { credentials: "same-origin" }).then((r) => WebAssembly.instantiateStreaming(r, e).then(t, function(r) {
					return w(`wasm streaming compile failed: ${r}`), w("falling back to ArrayBuffer instantiation"), We(n, e, t);
				}));
			}
			var Ye, Ze = { 921388: (e, t, n, i) => {
				if (typeof s > "u" || !s.cb) return 1;
				if (e = mt(e >>> 0), e.startsWith("./") && (e = e.substring(2)), e = s.cb.get(e), !e) return 2;
				if (t >>>= 0, n >>>= 0, i >>>= 0, t + n > e.byteLength) return 3;
				try {
					return r().set(e.subarray(t, t + n), i >>> 0), 0;
				} catch {
					return 4;
				}
			} };
			function Qe(e) {
				this.name = "ExitStatus", this.message = `Program terminated with exit(${e})`, this.status = e;
			}
			var $e = (e) => {
				e.terminate(), e.onmessage = () => {};
			}, et = (e) => {
				j.Pa.length == 0 && (yt(), j.Ya(j.Pa[0]));
				var t = j.Pa.pop();
				if (!t) return 6;
				j.Qa.push(t), j.Ma[e.Oa] = t, t.Oa = e.Oa;
				var n = {
					cmd: "run",
					start_routine: e.kb,
					arg: e.hb,
					pthread_ptr: e.Oa
				};
				return h && t.unref(), t.postMessage(n, e.qb), 0;
			}, rt = 0, ot = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, lt = (e, t, n) => {
				t >>>= 0;
				var r = t + n;
				for (n = t; e[n] && !(n >= r);) ++n;
				if (16 < n - t && e.buffer && ot) return ot.decode(e.buffer instanceof SharedArrayBuffer ? e.slice(t, n) : e.subarray(t, n));
				for (r = ""; t < n;) {
					var i = e[t++];
					if (i & 128) {
						var a = e[t++] & 63;
						if ((i & 224) == 192) r += String.fromCharCode((i & 31) << 6 | a);
						else {
							var o = e[t++] & 63;
							i = (i & 240) == 224 ? (i & 15) << 12 | a << 6 | o : (i & 7) << 18 | a << 12 | o << 6 | e[t++] & 63, 65536 > i ? r += String.fromCharCode(i) : (i -= 65536, r += String.fromCharCode(55296 | i >> 10, 56320 | i & 1023));
						}
					} else r += String.fromCharCode(i);
				}
				return r;
			}, mt = (e, t) => (e >>>= 0) ? lt(r(), e, t) : "", gt = (e) => {
				var t = si();
				return e = e(), ci(t), e;
			};
			function k(e, t) {
				var n = arguments.length - 2, r = arguments;
				return gt(() => {
					for (var i = ui(8 * n), a = i >>> 3, s = 0; s < n; s++) {
						var c = r[2 + s];
						o()[a + s >>> 0] = c;
					}
					return ti(e, n, i, t);
				});
			}
			function A(e) {
				if (g) return k(0, 1, e);
				D = e, 0 < rt || (j.lb(), s.onExit?.(e), ue = !0), f(e, new Qe(e));
			}
			var _t = (e) => {
				if (D = e, g) throw Ct(e), "unwind";
				A(e);
			};
			function vt() {
				for (var e = s.numThreads; e--;) yt();
				Te.unshift(() => {
					Ae++, bt(() => Pe());
				});
			}
			function yt() {
				var e = v("ort-wasm-threaded.worker.js");
				e = new Worker(e), j.Pa.push(e);
			}
			function bt(e) {
				g ? e() : Promise.all(j.Pa.map(j.Ya)).then(e);
			}
			var j = {
				Pa: [],
				Qa: [],
				bb: [],
				Ma: {},
				Wa() {
					g ? (j.receiveObjectTransfer = j.jb, j.threadInitTLS = j.ab, j.setExitStatus = j.$a) : vt();
				},
				$a: (e) => D = e,
				tb: ["$terminateWorker"],
				lb: () => {
					for (var e of j.Qa) $e(e);
					for (e of j.Pa) $e(e);
					j.Pa = [], j.Qa = [], j.Ma = [];
				},
				Za: (e) => {
					var t = e.Oa;
					delete j.Ma[t], j.Pa.push(e), j.Qa.splice(j.Qa.indexOf(e), 1), e.Oa = 0, ni(t);
				},
				jb() {},
				ab() {
					j.bb.forEach((e) => e());
				},
				Ya: (t) => new Promise((n) => {
					t.onmessage = (e) => {
						e = e.data;
						var r = e.cmd;
						if (e.targetThread && e.targetThread != Xr()) {
							var i = j.Ma[e.targetThread];
							i ? i.postMessage(e, e.transferList) : w(`Internal error! Worker sent a message "${r}" to target pthread ${e.targetThread}, but that thread no longer exists!`);
						} else r === "checkMailbox" ? En() : r === "spawnThread" ? et(e) : r === "cleanupThread" ? j.Za(j.Ma[e.thread]) : r === "killThread" ? (e = e.thread, r = j.Ma[e], delete j.Ma[e], $e(r), ni(e), j.Qa.splice(j.Qa.indexOf(r), 1), r.Oa = 0) : r === "cancelThread" ? j.Ma[e.thread].postMessage({ cmd: "cancel" }) : r === "loaded" ? (t.loaded = !0, h && !t.Oa && t.unref(), n(t)) : r === "alert" ? alert(`Thread ${e.threadId}: ${e.text}`) : e.target === "setimmediate" ? t.postMessage(e) : r === "callHandler" ? s[e.handler](...e.args) : r && w(`worker sent an unknown command ${r}`);
					}, t.onerror = (e) => {
						throw w(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`), e;
					}, h && (t.on("message", (e) => t.onmessage({ data: e })), t.on("error", (e) => t.onerror(e)));
					var r = [], i = ["onExit"], a;
					for (a of i) s.hasOwnProperty(a) && r.push(a);
					t.postMessage({
						cmd: "load",
						handlers: r,
						urlOrBlob: s.mainScriptUrlOrBlob || e,
						wasmMemory: T,
						wasmModule: se
					});
				})
			};
			s.PThread = j;
			var St = (e) => {
				for (; 0 < e.length;) e.shift()(s);
			};
			s.establishStackSpace = () => {
				var e = Xr(), t = a()[e + 52 >>> 2 >>> 0];
				e = a()[e + 56 >>> 2 >>> 0], oi(t, t - e), ci(t);
			};
			function Ct(e) {
				if (g) return k(1, 0, e);
				_t(e);
			}
			var Et = [], Dt;
			s.invokeEntryPoint = (e, t) => {
				var n = Et[e];
				n || (e >= Et.length && (Et.length = e + 1), Et[e] = n = Dt.get(e)), e = n(t), 0 < rt ? j.$a(e) : ri(e);
			};
			function At(e) {
				this.Va = e - 24, this.gb = function(e) {
					a()[this.Va + 4 >>> 2 >>> 0] = e;
				}, this.fb = function(e) {
					a()[this.Va + 8 >>> 2 >>> 0] = e;
				}, this.Wa = function(e, t) {
					this.eb(), this.gb(e), this.fb(t);
				}, this.eb = function() {
					a()[this.Va + 16 >>> 2 >>> 0] = 0;
				};
			}
			var Mt = 0, Pt = 0;
			function Ft(e, t, n, r) {
				return g ? k(2, 1, e, t, n, r) : It(e, t, n, r);
			}
			function It(e, t, n, r) {
				if (e >>>= 0, t >>>= 0, n >>>= 0, r >>>= 0, typeof SharedArrayBuffer > "u") return w("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
				var i = [];
				return g && i.length === 0 ? Ft(e, t, n, r) : (e = {
					kb: n,
					Oa: e,
					hb: r,
					qb: i
				}, g ? (e.sb = "spawnThread", postMessage(e, i), 0) : et(e));
			}
			function Lt(e, t, n) {
				return g ? k(3, 1, e, t, n) : 0;
			}
			function zt(e, t) {
				if (g) return k(4, 1, e, t);
			}
			var Ut = (e) => {
				for (var t = 0, n = 0; n < e.length; ++n) {
					var r = e.charCodeAt(n);
					127 >= r ? t++ : 2047 >= r ? t += 2 : 55296 <= r && 57343 >= r ? (t += 4, ++n) : t += 3;
				}
				return t;
			}, Gt = (e, t, n, r) => {
				if (n >>>= 0, !(0 < r)) return 0;
				var i = n;
				r = n + r - 1;
				for (var a = 0; a < e.length; ++a) {
					var o = e.charCodeAt(a);
					if (55296 <= o && 57343 >= o) {
						var s = e.charCodeAt(++a);
						o = 65536 + ((o & 1023) << 10) | s & 1023;
					}
					if (127 >= o) {
						if (n >= r) break;
						t[n++ >>> 0] = o;
					} else {
						if (2047 >= o) {
							if (n + 1 >= r) break;
							t[n++ >>> 0] = 192 | o >> 6;
						} else {
							if (65535 >= o) {
								if (n + 2 >= r) break;
								t[n++ >>> 0] = 224 | o >> 12;
							} else {
								if (n + 3 >= r) break;
								t[n++ >>> 0] = 240 | o >> 18, t[n++ >>> 0] = 128 | o >> 12 & 63;
							}
							t[n++ >>> 0] = 128 | o >> 6 & 63;
						}
						t[n++ >>> 0] = 128 | o & 63;
					}
				}
				return t[n >>> 0] = 0, n - i;
			}, Kt = (e, t, n) => Gt(e, r(), t, n);
			function qt(e, t) {
				if (g) return k(5, 1, e, t);
			}
			function Yt(e, t, n) {
				if (g) return k(6, 1, e, t, n);
			}
			function Qt(e, t, n) {
				return g ? k(7, 1, e, t, n) : 0;
			}
			function $t(e, t) {
				if (g) return k(8, 1, e, t);
			}
			function en(e, t, n) {
				if (g) return k(9, 1, e, t, n);
			}
			function an(e, t, n, r) {
				if (g) return k(10, 1, e, t, n, r);
			}
			function on(e, t, n, r) {
				if (g) return k(11, 1, e, t, n, r);
			}
			function sn(e, t, n, r) {
				if (g) return k(12, 1, e, t, n, r);
			}
			function _n(e) {
				if (g) return k(13, 1, e);
			}
			function vn(e, t) {
				if (g) return k(14, 1, e, t);
			}
			function Sn(e, t, n) {
				if (g) return k(15, 1, e, t, n);
			}
			function wn(e) {
				e >>>= 0, typeof Atomics.rb == "function" && (Atomics.rb(i(), e >>> 2, e).value.then(En), e += 128, Atomics.store(i(), e >>> 2, 1));
			}
			s.__emscripten_thread_mailbox_await = wn;
			var En = () => {
				var e = Xr();
				if (e && (wn(e), e = ii, !ue)) try {
					if (e(), !(0 < rt)) try {
						g ? ri(D) : _t(D);
					} catch (e) {
						e instanceof Qe || e == "unwind" || f(1, e);
					}
				} catch (e) {
					e instanceof Qe || e == "unwind" || f(1, e);
				}
			};
			s.checkMailbox = En;
			var On = [], An = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), jn = [
				0,
				31,
				60,
				91,
				121,
				152,
				182,
				213,
				244,
				274,
				305,
				335
			], Pn = [
				0,
				31,
				59,
				90,
				120,
				151,
				181,
				212,
				243,
				273,
				304,
				334
			];
			function In(e, t, n, r, i, a, o, s) {
				return g ? k(16, 1, e, t, n, r, i, a, o, s) : -52;
			}
			function Hn(e, t, n, r, i, a, o) {
				if (g) return k(17, 1, e, t, n, r, i, a, o);
			}
			var qn = (e) => {
				var t = Ut(e) + 1, n = Zr(t);
				return n && Kt(e, n, t), n;
			}, Yn = [], er = {}, tr = () => {
				if (!M) {
					var e = {
						USER: "web_user",
						LOGNAME: "web_user",
						PATH: "/",
						PWD: "/",
						HOME: "/home/web_user",
						LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
						_: d || "./this.program"
					}, t;
					for (t in er) er[t] === void 0 ? delete e[t] : e[t] = er[t];
					var n = [];
					for (t in e) n.push(`${t}=${e[t]}`);
					M = n;
				}
				return M;
			}, M;
			function nr(e, t) {
				if (g) return k(18, 1, e, t);
				e >>>= 0, t >>>= 0;
				var r = 0;
				return tr().forEach((i, o) => {
					var s = t + r;
					for (o = a()[e + 4 * o >>> 2 >>> 0] = s, s = 0; s < i.length; ++s) n()[o++ >>> 0 >>> 0] = i.charCodeAt(s);
					n()[o >>> 0 >>> 0] = 0, r += i.length + 1;
				}), 0;
			}
			function rr(e, t) {
				if (g) return k(19, 1, e, t);
				e >>>= 0, t >>>= 0;
				var n = tr();
				a()[e >>> 2 >>> 0] = n.length;
				var r = 0;
				return n.forEach((e) => r += e.length + 1), a()[t >>> 2 >>> 0] = r, 0;
			}
			function cr(e) {
				return g ? k(20, 1, e) : 52;
			}
			function fr(e, t, n, r) {
				return g ? k(21, 1, e, t, n, r) : 52;
			}
			function _r(e, t, n, r, i) {
				return g ? k(22, 1, e, t, n, r, i) : 70;
			}
			var vr = [
				null,
				[],
				[]
			];
			function Sr(e, t, n, i) {
				if (g) return k(23, 1, e, t, n, i);
				t >>>= 0, n >>>= 0, i >>>= 0;
				for (var o = 0, s = 0; s < n; s++) {
					var c = a()[t >>> 2 >>> 0], l = a()[t + 4 >>> 2 >>> 0];
					t += 8;
					for (var u = 0; u < l; u++) {
						var d = r()[c + u >>> 0], f = vr[e];
						d === 0 || d === 10 ? ((e === 1 ? ie : w)(lt(f, 0)), f.length = 0) : f.push(d);
					}
					o += l;
				}
				return a()[i >>> 2 >>> 0] = o, 0;
			}
			var Cr = [
				31,
				29,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			], Or = [
				31,
				28,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31
			];
			function Ar(e) {
				var t = Array(Ut(e) + 1);
				return Gt(e, t, 0, t.length), t;
			}
			var jr = (e, t) => {
				n().set(e, t >>> 0);
			};
			function Ir(e, t, n, r) {
				function o(e, t, n) {
					for (e = typeof e == "number" ? e.toString() : e || ""; e.length < t;) e = n[0] + e;
					return e;
				}
				function s(e, t) {
					return o(e, t, "0");
				}
				function c(e, t) {
					function n(e) {
						return 0 > e ? -1 : +(0 < e);
					}
					var r;
					return (r = n(e.getFullYear() - t.getFullYear())) === 0 && (r = n(e.getMonth() - t.getMonth())) === 0 && (r = n(e.getDate() - t.getDate())), r;
				}
				function l(e) {
					switch (e.getDay()) {
						case 0: return new Date(e.getFullYear() - 1, 11, 29);
						case 1: return e;
						case 2: return new Date(e.getFullYear(), 0, 3);
						case 3: return new Date(e.getFullYear(), 0, 2);
						case 4: return new Date(e.getFullYear(), 0, 1);
						case 5: return new Date(e.getFullYear() - 1, 11, 31);
						case 6: return new Date(e.getFullYear() - 1, 11, 30);
					}
				}
				function u(e) {
					var t = e.Ra;
					for (e = new Date(new Date(e.Sa + 1900, 0, 1).getTime()); 0 < t;) {
						var n = e.getMonth(), r = (An(e.getFullYear()) ? Cr : Or)[n];
						if (t > r - e.getDate()) t -= r - e.getDate() + 1, e.setDate(1), 11 > n ? e.setMonth(n + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
						else {
							e.setDate(e.getDate() + t);
							break;
						}
					}
					return n = new Date(e.getFullYear() + 1, 0, 4), t = l(new Date(e.getFullYear(), 0, 4)), n = l(n), 0 >= c(t, e) ? 0 >= c(n, e) ? e.getFullYear() + 1 : e.getFullYear() : e.getFullYear() - 1;
				}
				e >>>= 0, t >>>= 0, n >>>= 0, r >>>= 0;
				var d = a()[r + 40 >>> 2 >>> 0];
				for (var f in r = {
					ob: i()[r >>> 2 >>> 0],
					nb: i()[r + 4 >>> 2 >>> 0],
					Ta: i()[r + 8 >>> 2 >>> 0],
					Xa: i()[r + 12 >>> 2 >>> 0],
					Ua: i()[r + 16 >>> 2 >>> 0],
					Sa: i()[r + 20 >>> 2 >>> 0],
					Na: i()[r + 24 >>> 2 >>> 0],
					Ra: i()[r + 28 >>> 2 >>> 0],
					ub: i()[r + 32 >>> 2 >>> 0],
					mb: i()[r + 36 >>> 2 >>> 0],
					pb: d ? mt(d) : ""
				}, n = mt(n), d = {
					"%c": "%a %b %d %H:%M:%S %Y",
					"%D": "%m/%d/%y",
					"%F": "%Y-%m-%d",
					"%h": "%b",
					"%r": "%I:%M:%S %p",
					"%R": "%H:%M",
					"%T": "%H:%M:%S",
					"%x": "%m/%d/%y",
					"%X": "%H:%M:%S",
					"%Ec": "%c",
					"%EC": "%C",
					"%Ex": "%m/%d/%y",
					"%EX": "%H:%M:%S",
					"%Ey": "%y",
					"%EY": "%Y",
					"%Od": "%d",
					"%Oe": "%e",
					"%OH": "%H",
					"%OI": "%I",
					"%Om": "%m",
					"%OM": "%M",
					"%OS": "%S",
					"%Ou": "%u",
					"%OU": "%U",
					"%OV": "%V",
					"%Ow": "%w",
					"%OW": "%W",
					"%Oy": "%y"
				}, d) n = n.replace(new RegExp(f, "g"), d[f]);
				var p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), m = "January February March April May June July August September October November December".split(" ");
				for (f in d = {
					"%a": (e) => p[e.Na].substring(0, 3),
					"%A": (e) => p[e.Na],
					"%b": (e) => m[e.Ua].substring(0, 3),
					"%B": (e) => m[e.Ua],
					"%C": (e) => s((e.Sa + 1900) / 100 | 0, 2),
					"%d": (e) => s(e.Xa, 2),
					"%e": (e) => o(e.Xa, 2, " "),
					"%g": (e) => u(e).toString().substring(2),
					"%G": (e) => u(e),
					"%H": (e) => s(e.Ta, 2),
					"%I": (e) => (e = e.Ta, e == 0 ? e = 12 : 12 < e && (e -= 12), s(e, 2)),
					"%j": (e) => {
						for (var t = 0, n = 0; n <= e.Ua - 1; t += (An(e.Sa + 1900) ? Cr : Or)[n++]);
						return s(e.Xa + t, 3);
					},
					"%m": (e) => s(e.Ua + 1, 2),
					"%M": (e) => s(e.nb, 2),
					"%n": () => "\n",
					"%p": (e) => 0 <= e.Ta && 12 > e.Ta ? "AM" : "PM",
					"%S": (e) => s(e.ob, 2),
					"%t": () => "	",
					"%u": (e) => e.Na || 7,
					"%U": (e) => s(Math.floor((e.Ra + 7 - e.Na) / 7), 2),
					"%V": (e) => {
						var t = Math.floor((e.Ra + 7 - (e.Na + 6) % 7) / 7);
						if (2 >= (e.Na + 371 - e.Ra - 2) % 7 && t++, t) t == 53 && (n = (e.Na + 371 - e.Ra) % 7, n == 4 || n == 3 && An(e.Sa) || (t = 1));
						else {
							t = 52;
							var n = (e.Na + 7 - e.Ra - 1) % 7;
							(n == 4 || n == 5 && An(e.Sa % 400 - 1)) && t++;
						}
						return s(t, 2);
					},
					"%w": (e) => e.Na,
					"%W": (e) => s(Math.floor((e.Ra + 7 - (e.Na + 6) % 7) / 7), 2),
					"%y": (e) => (e.Sa + 1900).toString().substring(2),
					"%Y": (e) => e.Sa + 1900,
					"%z": (e) => {
						e = e.mb;
						var t = 0 <= e;
						return e = Math.abs(e) / 60, (t ? "+" : "-") + ("0000" + (e / 60 * 100 + e % 60)).slice(-4);
					},
					"%Z": (e) => e.pb,
					"%%": () => "%"
				}, n = n.replace(/%%/g, "\0\0"), d) n.includes(f) && (n = n.replace(new RegExp(f, "g"), d[f](r)));
				return n = n.replace(/\0\0/g, "%"), f = Ar(n), f.length > t ? 0 : (jr(f, e), f.length - 1);
			}
			j.Wa();
			var Kr = [
				A,
				Ct,
				Ft,
				Lt,
				zt,
				qt,
				Yt,
				Qt,
				$t,
				en,
				an,
				on,
				sn,
				_n,
				vn,
				Sn,
				In,
				Hn,
				nr,
				rr,
				cr,
				fr,
				_r,
				Sr
			], Jr = {
				b: function(e, t, n) {
					throw e >>>= 0, new At(e).Wa(t >>> 0, n >>> 0), Mt = e, Pt++, Mt;
				},
				L: function(e) {
					Qr(e >>> 0, !m, 1, !p, 131072, !1), j.ab();
				},
				j: function(e) {
					e >>>= 0, g ? postMessage({
						cmd: "cleanupThread",
						thread: e
					}) : j.Za(j.Ma[e]);
				},
				H: It,
				h: Lt,
				S: zt,
				D: qt,
				F: Yt,
				T: Qt,
				Q: $t,
				J: en,
				P: an,
				n: on,
				E: sn,
				B: _n,
				R: vn,
				C: Sn,
				p: () => 1,
				z: function(e, t) {
					e >>>= 0, e == t >>> 0 ? setTimeout(() => En()) : g ? postMessage({
						targetThread: e,
						cmd: "checkMailbox"
					}) : (e = j.Ma[e]) && e.postMessage({ cmd: "checkMailbox" });
				},
				I: function(e, t, n, r) {
					t >>>= 0, On.length = n, r = r >>> 0 >>> 3;
					for (var i = 0; i < n; i++) On[i] = o()[r + i >>> 0];
					return e = 0 > e ? Ze[-e - 1] : Kr[e], j.ib = t, t = e.apply(null, On), j.ib = 0, t;
				},
				K: wn,
				o: function(e) {
					h && j.Ma[e >>> 0].ref();
				},
				s: function(e, t, n) {
					e = t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN, n >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), i()[n >>> 2 >>> 0] = e.getUTCSeconds(), i()[n + 4 >>> 2 >>> 0] = e.getUTCMinutes(), i()[n + 8 >>> 2 >>> 0] = e.getUTCHours(), i()[n + 12 >>> 2 >>> 0] = e.getUTCDate(), i()[n + 16 >>> 2 >>> 0] = e.getUTCMonth(), i()[n + 20 >>> 2 >>> 0] = e.getUTCFullYear() - 1900, i()[n + 24 >>> 2 >>> 0] = e.getUTCDay(), e = (e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5 | 0, i()[n + 28 >>> 2 >>> 0] = e;
				},
				t: function(e, t, n) {
					e = t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * t : NaN, n >>>= 0, e = /* @__PURE__ */ new Date(1e3 * e), i()[n >>> 2 >>> 0] = e.getSeconds(), i()[n + 4 >>> 2 >>> 0] = e.getMinutes(), i()[n + 8 >>> 2 >>> 0] = e.getHours(), i()[n + 12 >>> 2 >>> 0] = e.getDate(), i()[n + 16 >>> 2 >>> 0] = e.getMonth(), i()[n + 20 >>> 2 >>> 0] = e.getFullYear() - 1900, i()[n + 24 >>> 2 >>> 0] = e.getDay(), t = (An(e.getFullYear()) ? jn : Pn)[e.getMonth()] + e.getDate() - 1 | 0, i()[n + 28 >>> 2 >>> 0] = t, i()[n + 36 >>> 2 >>> 0] = -(60 * e.getTimezoneOffset()), t = new Date(e.getFullYear(), 6, 1).getTimezoneOffset();
					var r = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
					e = (t != r && e.getTimezoneOffset() == Math.min(r, t)) | 0, i()[n + 32 >>> 2 >>> 0] = e;
				},
				u: function(e) {
					e >>>= 0;
					var t = new Date(i()[e + 20 >>> 2 >>> 0] + 1900, i()[e + 16 >>> 2 >>> 0], i()[e + 12 >>> 2 >>> 0], i()[e + 8 >>> 2 >>> 0], i()[e + 4 >>> 2 >>> 0], i()[e >>> 2 >>> 0], 0), n = i()[e + 32 >>> 2 >>> 0], r = t.getTimezoneOffset(), a = new Date(t.getFullYear(), 6, 1).getTimezoneOffset(), o = new Date(t.getFullYear(), 0, 1).getTimezoneOffset(), s = Math.min(o, a);
					return 0 > n ? i()[e + 32 >>> 2 >>> 0] = +(a != o && s == r) : 0 < n != (s == r) && (a = Math.max(o, a), t.setTime(t.getTime() + 6e4 * ((0 < n ? s : a) - r))), i()[e + 24 >>> 2 >>> 0] = t.getDay(), n = (An(t.getFullYear()) ? jn : Pn)[t.getMonth()] + t.getDate() - 1 | 0, i()[e + 28 >>> 2 >>> 0] = n, i()[e >>> 2 >>> 0] = t.getSeconds(), i()[e + 4 >>> 2 >>> 0] = t.getMinutes(), i()[e + 8 >>> 2 >>> 0] = t.getHours(), i()[e + 12 >>> 2 >>> 0] = t.getDate(), i()[e + 16 >>> 2 >>> 0] = t.getMonth(), i()[e + 20 >>> 2 >>> 0] = t.getYear(), e = t.getTime(), isNaN(e) ? (i()[Yr() >>> 2 >>> 0] = 61, e = -1) : e /= 1e3, ai((Ye = e, 1 <= +Math.abs(Ye) ? 0 < Ye ? Math.floor(Ye / 4294967296) >>> 0 : ~~+Math.ceil((Ye - +(~~Ye >>> 0)) / 4294967296) >>> 0 : 0)), e >>> 0;
				},
				q: In,
				r: Hn,
				y: function(e, t, n) {
					function r(e) {
						return (e = e.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? e[1] : "GMT";
					}
					e >>>= 0, t >>>= 0, n >>>= 0;
					var o = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(o, 0, 1), c = new Date(o, 6, 1);
					o = s.getTimezoneOffset();
					var l = c.getTimezoneOffset(), u = Math.max(o, l);
					a()[e >>> 2 >>> 0] = 60 * u, i()[t >>> 2 >>> 0] = +(o != l), e = r(s), t = r(c), e = qn(e), t = qn(t), l < o ? (a()[n >>> 2 >>> 0] = e, a()[n + 4 >>> 2 >>> 0] = t) : (a()[n >>> 2 >>> 0] = t, a()[n + 4 >>> 2 >>> 0] = e);
				},
				c: () => {
					Fe("");
				},
				O: function(e, t, n) {
					e >>>= 0, t >>>= 0, n >>>= 0, Yn.length = 0;
					for (var s; s = r()[t++ >>> 0];) {
						var c = s != 105;
						c &= s != 112, n += c && n % 8 ? 4 : 0, Yn.push(s == 112 ? a()[n >>> 2 >>> 0] : s == 105 ? i()[n >>> 2 >>> 0] : o()[n >>> 3 >>> 0]), n += c ? 8 : 4;
					}
					return Ze[e].apply(null, Yn);
				},
				k: () => {},
				i: () => Date.now(),
				U: () => {
					throw rt += 1, "unwind";
				},
				A: function() {
					return 4294901760;
				},
				e: () => performance.timeOrigin + performance.now(),
				f: () => h ? ($p(), or(Cp)).cpus().length : navigator.hardwareConcurrency,
				x: function(e) {
					e >>>= 0;
					var t = r().length;
					if (e <= t || 4294901760 < e) return !1;
					for (var n = 1; 4 >= n; n *= 2) {
						var i = t * (1 + .2 / n);
						i = Math.min(i, e + 100663296);
						var a = Math;
						i = Math.max(e, i);
						e: {
							a = (a.min.call(a, 4294901760, i + (65536 - i % 65536) % 65536) - T.buffer.byteLength + 65535) / 65536;
							try {
								T.grow(a), Se();
								var o = 1;
								break e;
							} catch {}
							o = void 0;
						}
						if (o) return !0;
					}
					return !1;
				},
				M: nr,
				N: rr,
				G: _t,
				g: cr,
				m: fr,
				v: _r,
				l: Sr,
				a: T || s.wasmMemory,
				w: Ir,
				d: function(e, t, n, r) {
					return Ir(e >>> 0, t >>> 0, n >>> 0, r >>> 0);
				}
			}, N = function() {
				function e(e, t) {
					return N = e.exports, N = P(), j.bb.push(N.za), Dt = N.Aa, Ee.unshift(N.V), se = t, Pe(), N;
				}
				var t = { a: Jr };
				if (Ae++, s.instantiateWasm) try {
					return s.instantiateWasm(t, e);
				} catch (e) {
					w(`Module.instantiateWasm callback failed with error: ${e}`), l(e);
				}
				return qe(t, function(t) {
					e(t.instance, t.module);
				}).catch(l), {};
			}();
			s._OrtInit = (e, t) => (s._OrtInit = N.W)(e, t), s._OrtGetLastError = (e, t) => (s._OrtGetLastError = N.X)(e, t), s._OrtCreateSessionOptions = (e, t, n, r, i, a, o, c, l, u) => (s._OrtCreateSessionOptions = N.Y)(e, t, n, r, i, a, o, c, l, u), s._OrtAppendExecutionProvider = (e, t) => (s._OrtAppendExecutionProvider = N.Z)(e, t), s._OrtAddFreeDimensionOverride = (e, t, n) => (s._OrtAddFreeDimensionOverride = N._)(e, t, n), s._OrtAddSessionConfigEntry = (e, t, n) => (s._OrtAddSessionConfigEntry = N.$)(e, t, n), s._OrtReleaseSessionOptions = (e) => (s._OrtReleaseSessionOptions = N.aa)(e), s._OrtCreateSession = (e, t, n) => (s._OrtCreateSession = N.ba)(e, t, n), s._OrtReleaseSession = (e) => (s._OrtReleaseSession = N.ca)(e), s._OrtGetInputOutputCount = (e, t, n) => (s._OrtGetInputOutputCount = N.da)(e, t, n), s._OrtGetInputName = (e, t) => (s._OrtGetInputName = N.ea)(e, t), s._OrtGetOutputName = (e, t) => (s._OrtGetOutputName = N.fa)(e, t), s._OrtFree = (e) => (s._OrtFree = N.ga)(e), s._OrtCreateTensor = (e, t, n, r, i, a) => (s._OrtCreateTensor = N.ha)(e, t, n, r, i, a), s._OrtGetTensorData = (e, t, n, r, i) => (s._OrtGetTensorData = N.ia)(e, t, n, r, i), s._OrtReleaseTensor = (e) => (s._OrtReleaseTensor = N.ja)(e), s._OrtCreateRunOptions = (e, t, n, r) => (s._OrtCreateRunOptions = N.ka)(e, t, n, r), s._OrtAddRunConfigEntry = (e, t, n) => (s._OrtAddRunConfigEntry = N.la)(e, t, n), s._OrtReleaseRunOptions = (e) => (s._OrtReleaseRunOptions = N.ma)(e), s._OrtCreateBinding = (e) => (s._OrtCreateBinding = N.na)(e), s._OrtBindInput = (e, t, n) => (s._OrtBindInput = N.oa)(e, t, n), s._OrtBindOutput = (e, t, n, r) => (s._OrtBindOutput = N.pa)(e, t, n, r), s._OrtClearBoundOutputs = (e) => (s._OrtClearBoundOutputs = N.qa)(e), s._OrtReleaseBinding = (e) => (s._OrtReleaseBinding = N.ra)(e), s._OrtRunWithBinding = (e, t, n, r, i) => (s._OrtRunWithBinding = N.sa)(e, t, n, r, i), s._OrtRun = (e, t, n, r, i, a, o, c) => (s._OrtRun = N.ta)(e, t, n, r, i, a, o, c), s._OrtEndProfiling = (e) => (s._OrtEndProfiling = N.ua)(e);
			var Yr = () => (Yr = N.va)(), Xr = s._pthread_self = () => (Xr = s._pthread_self = N.wa)(), Zr = s._malloc = (e) => (Zr = s._malloc = N.xa)(e);
			s._free = (e) => (s._free = N.ya)(e), s.__emscripten_tls_init = () => (s.__emscripten_tls_init = N.za)();
			var Qr = s.__emscripten_thread_init = (e, t, n, r, i, a) => (Qr = s.__emscripten_thread_init = N.Ba)(e, t, n, r, i, a);
			s.__emscripten_thread_crashed = () => (s.__emscripten_thread_crashed = N.Ca)();
			var ti = (e, t, n, r) => (ti = N.Da)(e, t, n, r), ni = (e) => (ni = N.Ea)(e), ri = s.__emscripten_thread_exit = (e) => (ri = s.__emscripten_thread_exit = N.Fa)(e), ii = () => (ii = N.Ga)(), ai = (e) => (ai = N.Ha)(e), oi = (e, t) => (oi = N.Ia)(e, t), si = () => (si = N.Ja)(), ci = (e) => (ci = N.Ka)(e), ui = (e) => (ui = N.La)(e);
			function P() {
				var e = N;
				e = Object.assign({}, e);
				var t = (e) => () => e() >>> 0, n = (e) => (t) => e(t) >>> 0;
				return e.va = t(e.va), e.wa = t(e.wa), e.xa = n(e.xa), e.emscripten_main_runtime_thread_id = t(e.emscripten_main_runtime_thread_id), e.Ja = t(e.Ja), e.La = n(e.La), e;
			}
			s.wasmMemory = T, s.stackAlloc = ui, s.stackSave = si, s.stackRestore = ci, s.keepRuntimeAlive = () => 0 < rt, s.UTF8ToString = mt, s.stringToUTF8 = Kt, s.lengthBytesUTF8 = Ut, s.ExitStatus = Qe, s.PThread = j;
			var F;
			Ne = function e() {
				F || di(), F || (Ne = e);
			};
			function di() {
				if (!(0 < Ae)) if (g) c(s), g || St(Ee), startWorker(s);
				else {
					if (s.preRun) for (typeof s.preRun == "function" && (s.preRun = [s.preRun]); s.preRun.length;) Te.unshift(s.preRun.shift());
					St(Te), 0 < Ae || F || (F = !0, s.calledRun = !0, ue || (g || St(Ee), c(s), g || St(ke)));
				}
			}
			return di(), t.ready;
		};
	})();
	typeof e == "object" && typeof t == "object" ? t.exports = n : typeof define == "function" && define.amd && define([], () => n);
}), Rp = me((e, t) => {
	t.exports = "\"use strict\";var Module={},ENVIRONMENT_IS_NODE=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require(\"worker_threads\"),parentPort=nodeWorkerThreads.parentPort;parentPort.on(\"message\",e=>onmessage({data:e}));var fs=require(\"fs\"),vm=require(\"vm\");Object.assign(global,{self:global,require,Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:e=>vm.runInThisContext(fs.readFileSync(e,\"utf8\"),{filename:e}),postMessage:e=>parentPort.postMessage(e),performance:global.performance||{now:Date.now}})}var initializedJS=!1;function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(\" \");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,e+`\n`);return}console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(\" \");postMessage({cmd:\"alert\",text:e,threadId:Module._pthread_self()})}var err=threadPrintErr;self.alert=threadAlert,Module.instantiateWasm=(e,t)=>{var a=Module.wasmModule;Module.wasmModule=null;var r=new WebAssembly.Instance(a,e);return t(r)},self.onunhandledrejection=e=>{throw e.reason||e};function handleMessage(e){try{if(e.data.cmd===\"load\"){let a=[];self.onmessage=r=>a.push(r),self.startWorker=r=>{Module=r,postMessage({cmd:\"loaded\"});for(let s of a)handleMessage(s);self.onmessage=handleMessage},Module.wasmModule=e.data.wasmModule;for(const r of e.data.handlers)Module[r]=(...s)=>{postMessage({cmd:\"callHandler\",handler:r,args:s})};if(Module.wasmMemory=e.data.wasmMemory,Module.buffer=Module.wasmMemory.buffer,Module.ENVIRONMENT_IS_PTHREAD=!0,typeof e.data.urlOrBlob==\"string\")importScripts(e.data.urlOrBlob);else{var t=URL.createObjectURL(e.data.urlOrBlob);importScripts(t),URL.revokeObjectURL(t)}ortWasmThreaded(Module)}else if(e.data.cmd===\"run\"){Module.__emscripten_thread_init(e.data.pthread_ptr,0,0,1),Module.__emscripten_thread_mailbox_await(e.data.pthread_ptr),Module.establishStackSpace(),Module.PThread.receiveObjectTransfer(e.data),Module.PThread.threadInitTLS(),initializedJS||(initializedJS=!0);try{Module.invokeEntryPoint(e.data.start_routine,e.data.arg)}catch(a){if(a!=\"unwind\")throw a}}else e.data.cmd===\"cancel\"?Module._pthread_self()&&Module.__emscripten_thread_exit(-1):e.data.target===\"setimmediate\"||(e.data.cmd===\"checkMailbox\"?initializedJS&&Module.checkMailbox():e.data.cmd&&(err(`worker.js received unknown command ${e.data.cmd}`),err(e.data)))}catch(a){throw Module.__emscripten_thread_crashed?.(),a}}self.onmessage=handleMessage;\n";
}), Gp, lg, aa, sa, Po, Mp, fg, cg, pg, Up, Le, Vr = E(() => {
	Gp = Dp(), lg = Np(), sa = !1, Po = !1, Mp = !1, fg = (e) => {
		if (e === 1) return !1;
		if (typeof SharedArrayBuffer > "u") return typeof self < "u" && !self.crossOriginIsolated && console.warn("env.wasm.numThreads is set to " + e + ", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."), !1;
		typeof process < "u" && process.versions && process.versions.node && console.warn("env.wasm.numThreads is set to " + e + ", however, currently onnxruntime-web does not support multi-threads in Node.js. Please consider using onnxruntime-node for performance critical scenarios.");
		try {
			return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				5,
				4,
				1,
				3,
				1,
				1,
				10,
				11,
				1,
				9,
				0,
				65,
				0,
				254,
				16,
				2,
				0,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, cg = () => {
		try {
			return WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				10,
				30,
				1,
				28,
				0,
				65,
				0,
				253,
				15,
				253,
				12,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				253,
				186,
				1,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, pg = (e, t) => e ? t ? "ort-wasm-simd-threaded.wasm" : "ort-wasm-simd.wasm" : t ? "ort-wasm-threaded.wasm" : "ort-wasm.wasm", Up = async (e) => {
		if (sa) return Promise.resolve();
		if (Po) throw Error("multiple calls to 'initializeWebAssembly()' detected.");
		if (Mp) throw Error("previous call to 'initializeWebAssembly()' failed.");
		Po = !0;
		let t = e.initTimeout, n = e.numThreads, r = e.simd, i = fg(n), a = r && cg(), o = e.wasmPaths, s = typeof o == "string" ? o : void 0, c = pg(a, i), l = typeof o == "object" ? o[c] : void 0, u = !1, d = [];
		if (t > 0 && d.push(new Promise((e) => {
			setTimeout(() => {
				u = !0, e();
			}, t);
		})), d.push(new Promise((e, t) => {
			let r = i ? lg : Gp, a = { locateFile: (e, t) => i && e.endsWith(".worker.js") && typeof Blob < "u" ? URL.createObjectURL(new Blob([Rp()], { type: "text/javascript" })) : e.endsWith(".wasm") ? l || (s ?? t) + c : t + e };
			if (i) if (a.numThreads = n, typeof Blob > "u") a.mainScriptUrlOrBlob = (void 0)(__dirname, "ort-wasm-threaded.js");
			else {
				let e = `var ortWasmThreaded=${r.toString()};`;
				a.mainScriptUrlOrBlob = new Blob([e], { type: "text/javascript" });
			}
			r(a).then((t) => {
				Po = !1, sa = !0, aa = t, e();
			}, (e) => {
				Po = !1, Mp = !0, t(e);
			});
		})), await Promise.race(d), u) throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`);
	}, Le = () => {
		if (sa && aa) return aa;
		throw Error("WebAssembly is not initialized yet.");
	};
}), _e, yn, Oe, Eo = E(() => {
	Vr(), _e = (e, t) => {
		let n = Le(), r = n.lengthBytesUTF8(e) + 1, i = n._malloc(r);
		return n.stringToUTF8(e, i, r), t.push(i), i;
	}, yn = (e, t, n, r) => {
		if (typeof e == "object" && e) {
			if (n.has(e)) throw Error("Circular reference in options");
			n.add(e);
		}
		Object.entries(e).forEach(([e, i]) => {
			let a = t ? t + e : e;
			if (typeof i == "object") yn(i, a + ".", n, r);
			else if (typeof i == "string" || typeof i == "number") r(a, i.toString());
			else if (typeof i == "boolean") r(a, i ? "1" : "0");
			else throw Error(`Can't handle extra config type: ${typeof i}`);
		});
	}, Oe = (e) => {
		let t = Le(), n = t.stackSave();
		try {
			let n = t.stackAlloc(8);
			t._OrtGetLastError(n, n + 4);
			let r = t.HEAP32[n / 4], i = t.HEAPU32[n / 4 + 1], a = i ? t.UTF8ToString(i) : "";
			throw Error(`${e} ERROR_CODE: ${r}, ERROR_MESSAGE: ${a}`);
		} finally {
			t.stackRestore(n);
		}
	};
}), zp, Vp = E(() => {
	Vr(), Eo(), zp = (e) => {
		let t = Le(), n = 0, r = [], i = e || {};
		try {
			if (e?.logSeverityLevel === void 0) i.logSeverityLevel = 2;
			else if (typeof e.logSeverityLevel != "number" || !Number.isInteger(e.logSeverityLevel) || e.logSeverityLevel < 0 || e.logSeverityLevel > 4) throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);
			if (e?.logVerbosityLevel === void 0) i.logVerbosityLevel = 0;
			else if (typeof e.logVerbosityLevel != "number" || !Number.isInteger(e.logVerbosityLevel)) throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);
			e?.terminate === void 0 && (i.terminate = !1);
			let a = 0;
			return e?.tag !== void 0 && (a = _e(e.tag, r)), n = t._OrtCreateRunOptions(i.logSeverityLevel, i.logVerbosityLevel, !!i.terminate, a), n === 0 && Oe("Can't create run options."), e?.extra !== void 0 && yn(e.extra, "", /* @__PURE__ */ new WeakSet(), (e, i) => {
				let a = _e(e, r), o = _e(i, r);
				t._OrtAddRunConfigEntry(n, a, o) !== 0 && Oe(`Can't set a run config entry: ${e} - ${i}.`);
			}), [n, r];
		} catch (e) {
			throw n !== 0 && t._OrtReleaseRunOptions(n), r.forEach((e) => t._free(e)), e;
		}
	};
}), dg, hg, mg, bg, Wp, Hp = E(() => {
	Vr(), Eo(), dg = (e) => {
		switch (e) {
			case "disabled": return 0;
			case "basic": return 1;
			case "extended": return 2;
			case "all": return 99;
			default: throw Error(`unsupported graph optimization level: ${e}`);
		}
	}, hg = (e) => {
		switch (e) {
			case "sequential": return 0;
			case "parallel": return 1;
			default: throw Error(`unsupported execution mode: ${e}`);
		}
	}, mg = (e) => {
		e.extra ||= {}, e.extra.session || (e.extra.session = {});
		let t = e.extra.session;
		t.use_ort_model_bytes_directly ||= "1", e.executionProviders && e.executionProviders.some((e) => (typeof e == "string" ? e : e.name) === "webgpu") && (e.enableMemPattern = !1);
	}, bg = (e, t, n) => {
		for (let r of t) {
			let t = typeof r == "string" ? r : r.name;
			switch (t) {
				case "webnn":
					if (t = "WEBNN", typeof r != "string") {
						let t = r;
						if (t?.deviceType) {
							let r = _e("deviceType", n), i = _e(t.deviceType, n);
							Le()._OrtAddSessionConfigEntry(e, r, i) !== 0 && Oe(`Can't set a session config entry: 'deviceType' - ${t.deviceType}.`);
						}
						if (t?.numThreads) {
							let r = t.numThreads;
							(typeof r != "number" || !Number.isInteger(r) || r < 0) && (r = 0);
							let i = _e("numThreads", n), a = _e(r.toString(), n);
							Le()._OrtAddSessionConfigEntry(e, i, a) !== 0 && Oe(`Can't set a session config entry: 'numThreads' - ${t.numThreads}.`);
						}
						if (t?.powerPreference) {
							let r = _e("powerPreference", n), i = _e(t.powerPreference, n);
							Le()._OrtAddSessionConfigEntry(e, r, i) !== 0 && Oe(`Can't set a session config entry: 'powerPreference' - ${t.powerPreference}.`);
						}
					}
					break;
				case "webgpu":
					if (t = "JS", typeof r != "string") {
						let t = r;
						if (t?.preferredLayout) {
							if (t.preferredLayout !== "NCHW" && t.preferredLayout !== "NHWC") throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);
							let r = _e("preferredLayout", n), i = _e(t.preferredLayout, n);
							Le()._OrtAddSessionConfigEntry(e, r, i) !== 0 && Oe(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`);
						}
					}
					break;
				case "wasm":
				case "cpu": continue;
				default: throw Error(`not supported execution provider: ${t}`);
			}
			let i = _e(t, n);
			Le()._OrtAppendExecutionProvider(e, i) !== 0 && Oe(`Can't append execution provider: ${t}.`);
		}
	}, Wp = (e) => {
		let t = Le(), n = 0, r = [], i = e || {};
		mg(i);
		try {
			let e = dg(i.graphOptimizationLevel ?? "all"), a = hg(i.executionMode ?? "sequential"), o = typeof i.logId == "string" ? _e(i.logId, r) : 0, s = i.logSeverityLevel ?? 2;
			if (!Number.isInteger(s) || s < 0 || s > 4) throw Error(`log serverity level is not valid: ${s}`);
			let c = i.logVerbosityLevel ?? 0;
			if (!Number.isInteger(c) || c < 0 || c > 4) throw Error(`log verbosity level is not valid: ${c}`);
			let l = typeof i.optimizedModelFilePath == "string" ? _e(i.optimizedModelFilePath, r) : 0;
			if (n = t._OrtCreateSessionOptions(e, !!i.enableCpuMemArena, !!i.enableMemPattern, a, !!i.enableProfiling, 0, o, s, c, l), n === 0 && Oe("Can't create session options."), i.executionProviders && bg(n, i.executionProviders, r), i.enableGraphCapture !== void 0) {
				if (typeof i.enableGraphCapture != "boolean") throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);
				let e = _e("enableGraphCapture", r), a = _e(i.enableGraphCapture.toString(), r);
				t._OrtAddSessionConfigEntry(n, e, a) !== 0 && Oe(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`);
			}
			if (i.freeDimensionOverrides) for (let [e, a] of Object.entries(i.freeDimensionOverrides)) {
				if (typeof e != "string") throw Error(`free dimension override name must be a string: ${e}`);
				if (typeof a != "number" || !Number.isInteger(a) || a < 0) throw Error(`free dimension override value must be a non-negative integer: ${a}`);
				let i = _e(e, r);
				t._OrtAddFreeDimensionOverride(n, i, a) !== 0 && Oe(`Can't set a free dimension override: ${e} - ${a}.`);
			}
			return i.extra !== void 0 && yn(i.extra, "", /* @__PURE__ */ new WeakSet(), (e, i) => {
				let a = _e(e, r), o = _e(i, r);
				t._OrtAddSessionConfigEntry(n, a, o) !== 0 && Oe(`Can't set a session config entry: ${e} - ${i}.`);
			}), [n, r];
		} catch (e) {
			throw n !== 0 && t._OrtReleaseSessionOptions(n), r.forEach((e) => t._free(e)), e;
		}
	};
}), ua, qp, la, jp, Yp, Do, Xp, fa = E(() => {
	ua = (e) => {
		switch (e) {
			case "int8": return 3;
			case "uint8": return 2;
			case "bool": return 9;
			case "int16": return 5;
			case "uint16": return 4;
			case "int32": return 6;
			case "uint32": return 12;
			case "float16": return 10;
			case "float32": return 1;
			case "float64": return 11;
			case "string": return 8;
			case "int64": return 7;
			case "uint64": return 13;
			default: throw Error(`unsupported data type: ${e}`);
		}
	}, qp = (e) => {
		switch (e) {
			case 3: return "int8";
			case 2: return "uint8";
			case 9: return "bool";
			case 5: return "int16";
			case 4: return "uint16";
			case 6: return "int32";
			case 12: return "uint32";
			case 10: return "float16";
			case 1: return "float32";
			case 11: return "float64";
			case 8: return "string";
			case 7: return "int64";
			case 13: return "uint64";
			default: throw Error(`unsupported data type: ${e}`);
		}
	}, la = (e) => [
		void 0,
		4,
		1,
		1,
		2,
		2,
		4,
		8,
		void 0,
		1,
		2,
		8,
		4,
		8,
		void 0,
		void 0,
		void 0
	][e], jp = (e) => {
		switch (e) {
			case "float16": return typeof Float16Array < "u" && Float16Array.from ? Float16Array : Uint16Array;
			case "float32": return Float32Array;
			case "uint8": return Uint8Array;
			case "int8": return Int8Array;
			case "uint16": return Uint16Array;
			case "int16": return Int16Array;
			case "int32": return Int32Array;
			case "bool": return Uint8Array;
			case "float64": return Float64Array;
			case "uint32": return Uint32Array;
			case "int64": return BigInt64Array;
			case "uint64": return BigUint64Array;
			default: throw Error(`unsupported type: ${e}`);
		}
	}, Yp = (e) => {
		switch (e) {
			case "verbose": return 0;
			case "info": return 1;
			case "warning": return 2;
			case "error": return 3;
			case "fatal": return 4;
			default: throw Error(`unsupported logging level: ${e}`);
		}
	}, Do = (e) => e === "float32" || e === "float16" || e === "int32" || e === "int64" || e === "uint32" || e === "uint8" || e === "bool", Xp = (e) => {
		switch (e) {
			case "none": return 0;
			case "cpu": return 1;
			case "cpu-pinned": return 2;
			case "texture": return 3;
			case "gpu-buffer": return 4;
			default: throw Error(`unsupported data location: ${e}`);
		}
	};
}), Tn, ca = E(() => {
	Tn = async (e) => {
		if (typeof e == "string") if (typeof process < "u" && process.versions && process.versions.node) try {
			return new Uint8Array(await (void 0)(e));
		} catch (t) {
			if (t.code === "ERR_FS_FILE_TOO_LARGE") {
				let t = (void 0)(e), n = [];
				for await (let e of t) n.push(e);
				return new Uint8Array(Buffer.concat(n));
			}
			throw t;
		}
		else {
			let t = await fetch(e);
			if (!t.ok) throw Error(`failed to load external data file: ${e}`);
			let n = t.headers.get("Content-Length"), r = n ? parseInt(n, 10) : 0;
			if (r < 1073741824) return new Uint8Array(await t.arrayBuffer());
			{
				if (!t.body) throw Error(`failed to load external data file: ${e}, no response body.`);
				let n = t.body.getReader(), i;
				try {
					i = new ArrayBuffer(r);
				} catch (e) {
					if (e instanceof RangeError) {
						let e = Math.ceil(r / 65536);
						i = new WebAssembly.Memory({
							initial: e,
							maximum: e
						}).buffer;
					} else throw e;
				}
				let a = 0;
				for (;;) {
					let { done: e, value: t } = await n.read();
					if (e) break;
					let r = t.byteLength;
					new Uint8Array(i, a, r).set(t), a += r;
				}
				return new Uint8Array(i, 0, r);
			}
		}
		else return e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : e instanceof Uint8Array ? e : new Uint8Array(e);
	};
}), gg, Jp, Zp, Wr, yg, pa, Qp, ed, Kp, td, rd, nd, od = E(() => {
	Vp(), Hp(), fa(), Vr(), Eo(), ca(), gg = (e, t) => {
		Le()._OrtInit(e, t) !== 0 && Oe("Can't initialize onnxruntime.");
	}, Jp = async (e) => {
		gg(e.wasm.numThreads, Yp(e.logLevel));
	}, Zp = async (e, t) => {}, Wr = /* @__PURE__ */ new Map(), yg = (e) => {
		let t = Le(), n = t.stackSave();
		try {
			let n = t.stackAlloc(8);
			return t._OrtGetInputOutputCount(e, n, n + 4) !== 0 && Oe("Can't get session input/output count."), [t.HEAP32[n / 4], t.HEAP32[n / 4 + 1]];
		} finally {
			t.stackRestore(n);
		}
	}, pa = (e) => {
		let t = Le(), n = t._malloc(e.byteLength);
		if (n === 0) throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);
		return t.HEAPU8.set(e, n), [n, e.byteLength];
	}, Qp = async (e, t) => {
		let n, r, i = Le();
		Array.isArray(e) ? [n, r] = e : e.buffer === i.HEAPU8.buffer ? [n, r] = [e.byteOffset, e.byteLength] : [n, r] = pa(e);
		let a = 0, o = 0, s = 0, c = [], l = [], u = [];
		try {
			if ([o, c] = Wp(t), t?.externalData && i.mountExternalData) {
				let e = [];
				for (let n of t.externalData) {
					let t = typeof n == "string" ? n : n.path;
					e.push(Tn(typeof n == "string" ? n : n.data).then((e) => {
						i.mountExternalData(t, e);
					}));
				}
				await Promise.all(e);
			}
			a = await i._OrtCreateSession(n, r, o), a === 0 && Oe("Can't create a session.");
			let [e, s] = yg(a), d = !!t?.enableGraphCapture, f = [], p = [], m = [];
			for (let t = 0; t < e; t++) {
				let e = i._OrtGetInputName(a, t);
				e === 0 && Oe("Can't get an input name."), l.push(e), f.push(i.UTF8ToString(e));
			}
			for (let e = 0; e < s; e++) {
				let t = i._OrtGetOutputName(a, e);
				t === 0 && Oe("Can't get an output name."), u.push(t);
				let n = i.UTF8ToString(t);
				p.push(n);
			}
			return Wr.set(a, [
				a,
				l,
				u,
				null,
				d,
				!1
			]), [
				a,
				f,
				p
			];
		} catch (e) {
			throw l.forEach((e) => i._OrtFree(e)), u.forEach((e) => i._OrtFree(e)), a !== 0 && i._OrtReleaseSession(a), e;
		} finally {
			i._free(n), o !== 0 && i._OrtReleaseSessionOptions(o), c.forEach((e) => i._free(e)), i.unmountExternalData?.();
		}
	}, ed = (e) => {
		let t = Le(), n = Wr.get(e);
		if (!n) throw Error(`cannot release session. invalid session id: ${e}`);
		let [r, i, a, o, s] = n;
		o && (s && t._OrtClearBoundOutputs(o.handle), t._OrtReleaseBinding(o.handle)), t.jsepOnReleaseSession?.(e), i.forEach((e) => t._OrtFree(e)), a.forEach((e) => t._OrtFree(e)), t._OrtReleaseSession(r), Wr.delete(e);
	}, Kp = (e, t, n, r, i, a = !1) => {
		if (!e) {
			t.push(0);
			return;
		}
		let o = Le(), s = e[0], c = e[1], l = e[3], u, d;
		if (s === "string" && l === "gpu-buffer") throw Error("String tensor is not supported on GPU.");
		if (a && l !== "gpu-buffer") throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);
		if (l === "gpu-buffer") {
			let t = e[2].gpuBuffer, n = la(ua(s));
			d = c.reduce((e, t) => e * t, 1) * n;
			let a = o.jsepRegisterBuffer;
			if (!a) throw Error("Tensor location \"gpu-buffer\" is not supported without using WebGPU.");
			u = a(r, i, t, d);
		} else {
			let t = e[2];
			if (Array.isArray(t)) {
				d = 4 * t.length, u = o._malloc(d), n.push(u);
				let e = u / 4;
				for (let r = 0; r < t.length; r++) {
					if (typeof t[r] != "string") throw TypeError(`tensor data at index ${r} is not a string`);
					o.HEAPU32[e++] = _e(t[r], n);
				}
			} else d = t.byteLength, u = o._malloc(d), n.push(u), o.HEAPU8.set(new Uint8Array(t.buffer, t.byteOffset, d), u);
		}
		let f = o.stackSave(), p = o.stackAlloc(4 * c.length);
		try {
			let e = p / 4;
			c.forEach((t) => o.HEAP32[e++] = t);
			let n = o._OrtCreateTensor(ua(s), u, d, p, c.length, Xp(l));
			n === 0 && Oe(`Can't create tensor for input/output. session=${r}, index=${i}.`), t.push(n);
		} finally {
			o.stackRestore(f);
		}
	}, td = async (e, t, n, r, i, a) => {
		let o = Le(), s = Wr.get(e);
		if (!s) throw Error(`cannot run inference. invalid session id: ${e}`);
		let c = s[0], l = s[1], u = s[2], d = s[3], f = s[4], p = s[5], m = t.length, h = r.length, g = 0, _ = [], v = [], y = [], b = [], x = o.stackSave(), S = o.stackAlloc(m * 4), C = o.stackAlloc(m * 4), te = o.stackAlloc(h * 4), ne = o.stackAlloc(h * 4);
		try {
			[g, _] = zp(a);
			for (let r = 0; r < m; r++) Kp(n[r], v, b, e, t[r], f);
			for (let t = 0; t < h; t++) Kp(i[t], y, b, e, m + r[t], f);
			let s = S / 4, p = C / 4, x = te / 4, ie = ne / 4;
			for (let e = 0; e < m; e++) o.HEAPU32[s++] = v[e], o.HEAPU32[p++] = l[t[e]];
			for (let e = 0; e < h; e++) o.HEAPU32[x++] = y[e], o.HEAPU32[ie++] = u[r[e]];
			o.jsepOnRunStart?.(c);
			let w;
			w = await o._OrtRun(c, C, S, m, ne, h, te, g), w !== 0 && Oe("failed to call OrtRun().");
			let T = [];
			for (let e = 0; e < h; e++) {
				let t = o.HEAPU32[te / 4 + e];
				if (t === y[e]) {
					T.push(i[e]);
					continue;
				}
				let n = o.stackSave(), a = o.stackAlloc(16), s = !1, c, l = 0;
				try {
					o._OrtGetTensorData(t, a, a + 4, a + 8, a + 12) !== 0 && Oe(`Can't access output tensor data on index ${e}.`);
					let n = a / 4, i = o.HEAPU32[n++];
					l = o.HEAPU32[n++];
					let u = o.HEAPU32[n++], f = o.HEAPU32[n++], p = [];
					for (let e = 0; e < f; e++) p.push(o.HEAPU32[u / 4 + e]);
					o._OrtFree(u);
					let m = p.reduce((e, t) => e * t, 1);
					c = qp(i);
					let h = d?.outputPreferredLocations[r[e]];
					if (c === "string") {
						if (h === "gpu-buffer") throw Error("String tensor is not supported on GPU.");
						let e = [], t = l / 4;
						for (let n = 0; n < m; n++) {
							let r = o.HEAPU32[t++], i = n === m - 1 ? void 0 : o.HEAPU32[t] - r;
							e.push(o.UTF8ToString(r, i));
						}
						T.push([
							c,
							p,
							e,
							"cpu"
						]);
					} else if (h === "gpu-buffer" && m > 0) {
						let e = o.jsepGetBuffer;
						if (!e) throw Error("preferredLocation \"gpu-buffer\" is not supported without using WebGPU.");
						let n = e(l), r = la(i);
						if (r === void 0 || !Do(c)) throw Error(`Unsupported data type: ${c}`);
						s = !0, T.push([
							c,
							p,
							{
								gpuBuffer: n,
								download: o.jsepCreateDownloader(n, m * r, c),
								dispose: () => {
									o._OrtReleaseTensor(t);
								}
							},
							"gpu-buffer"
						]);
					} else {
						let e = new (jp(c))(m);
						new Uint8Array(e.buffer, e.byteOffset, e.byteLength).set(o.HEAPU8.subarray(l, l + e.byteLength)), T.push([
							c,
							p,
							e,
							"cpu"
						]);
					}
				} finally {
					o.stackRestore(n), c === "string" && l && o._free(l), s || o._OrtReleaseTensor(t);
				}
			}
			return d && !f && (o._OrtClearBoundOutputs(d.handle), Wr.set(e, [
				c,
				l,
				u,
				d,
				f,
				!1
			])), T;
		} finally {
			o.stackRestore(x), v.forEach((e) => o._OrtReleaseTensor(e)), y.forEach((e) => o._OrtReleaseTensor(e)), b.forEach((e) => o._free(e)), g !== 0 && o._OrtReleaseRunOptions(g), _.forEach((e) => o._free(e));
		}
	}, rd = (e) => {
		let t = Le(), n = Wr.get(e);
		if (!n) throw Error("invalid session id");
		let r = n[0], i = t._OrtEndProfiling(r);
		i === 0 && Oe("Can't get an profile file name."), t._OrtFree(i);
	}, nd = (e) => {
		let t = [];
		for (let n of e) {
			let e = n[2];
			!Array.isArray(e) && "buffer" in e && t.push(e.buffer);
		}
		return t;
	};
}), id = me((e, t) => {
	t.exports = "/*!\n * ONNX Runtime Web v1.17.3\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Licensed under the MIT License.\n */\n\"use strict\";(()=>{var Et=Object.defineProperty;var Jr=Object.getOwnPropertyDescriptor;var Xr=Object.getOwnPropertyNames;var Qr=Object.prototype.hasOwnProperty;var St=(u,c)=>()=>(u&&(c=u(u=0)),c);var tt=(u,c)=>()=>(c||u((c={exports:{}}).exports,c),c.exports),At=(u,c)=>{for(var a in c)Et(u,a,{get:c[a],enumerable:!0})},Zr=(u,c,a,h)=>{if(c&&typeof c==\"object\"||typeof c==\"function\")for(let f of Xr(c))!Qr.call(u,f)&&f!==a&&Et(u,f,{get:()=>c[f],enumerable:!(h=Jr(c,f))||h.enumerable});return u};var rt=u=>Zr(Et({},\"__esModule\",{value:!0}),u);var Tt={};At(Tt,{createReadStream:()=>dr,readFile:()=>Kr,readFileSync:()=>en});var Kr,en,dr,Mt=St(()=>{Kr=void 0,en=void 0,dr=void 0});var Ct={};At(Ct,{join:()=>tn});var tn,Dt=St(()=>{tn=void 0});var gr=tt((mr,Ft)=>{\"use strict\";var pr=(()=>{var u=typeof document<\"u\"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<\"u\"&&(u=u||__filename),function(c={}){var a=c,h,f;a.ready=new Promise((r,o)=>{h=r,f=o});var w=Object.assign({},a),g=\"./this.program\",i=typeof window==\"object\",E=typeof importScripts==\"function\",P=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\",U=\"\",D,x,K;if(P){var R=(Mt(),rt(Tt)),I=(Dt(),rt(Ct));U=E?I.dirname(U)+\"/\":__dirname+\"/\",D=(r,o)=>(r=ve(r)?new URL(r):I.normalize(r),R.readFileSync(r,o?void 0:\"utf8\")),K=r=>(r=D(r,!0),r.buffer||(r=new Uint8Array(r)),r),x=(r,o,s,m=!0)=>{r=ve(r)?new URL(r):I.normalize(r),R.readFile(r,m?void 0:\"utf8\",(O,A)=>{O?s(O):o(m?A.buffer:A)})},!a.thisProgram&&1<process.argv.length&&(g=process.argv[1].replace(/\\\\/g,\"/\")),process.argv.slice(2),a.inspect=()=>\"[Emscripten Module object]\"}else(i||E)&&(E?U=self.location.href:typeof document<\"u\"&&document.currentScript&&(U=document.currentScript.src),u&&(U=u),U.indexOf(\"blob:\")!==0?U=U.substr(0,U.replace(/[?#].*/,\"\").lastIndexOf(\"/\")+1):U=\"\",D=r=>{var o=new XMLHttpRequest;return o.open(\"GET\",r,!1),o.send(null),o.responseText},E&&(K=r=>{var o=new XMLHttpRequest;return o.open(\"GET\",r,!1),o.responseType=\"arraybuffer\",o.send(null),new Uint8Array(o.response)}),x=(r,o,s)=>{var m=new XMLHttpRequest;m.open(\"GET\",r,!0),m.responseType=\"arraybuffer\",m.onload=()=>{m.status==200||m.status==0&&m.response?o(m.response):s()},m.onerror=s,m.send(null)});var v=console.log.bind(console),k=console.error.bind(console);Object.assign(a,w),w=null,typeof WebAssembly!=\"object\"&&F(\"no native wasm support detected\");var W,H=!1,se,ee,S,j,Ce;function Ue(){var r=W.buffer;a.HEAP8=se=new Int8Array(r),a.HEAP16=new Int16Array(r),a.HEAPU8=ee=new Uint8Array(r),a.HEAPU16=new Uint16Array(r),a.HEAP32=S=new Int32Array(r),a.HEAPU32=j=new Uint32Array(r),a.HEAPF32=new Float32Array(r),a.HEAPF64=Ce=new Float64Array(r)}var ce=[],ne=[],Q=[],Oe=0,he=null,ae=null;function F(r){throw r=\"Aborted(\"+r+\")\",k(r),H=!0,r=new WebAssembly.RuntimeError(r+\". Build with -sASSERTIONS for more info.\"),f(r),r}var ye=r=>r.startsWith(\"data:application/octet-stream;base64,\"),ve=r=>r.startsWith(\"file://\"),fe;if(fe=\"ort-wasm.wasm\",!ye(fe)){var _e=fe;fe=a.locateFile?a.locateFile(_e,U):U+_e}function Y(r){if(K)return K(r);throw\"both async and sync fetching of the wasm failed\"}function pe(r){if(i||E){if(typeof fetch==\"function\"&&!ve(r))return fetch(r,{credentials:\"same-origin\"}).then(o=>{if(!o.ok)throw\"failed to load wasm binary file at '\"+r+\"'\";return o.arrayBuffer()}).catch(()=>Y(r));if(x)return new Promise((o,s)=>{x(r,m=>o(new Uint8Array(m)),s)})}return Promise.resolve().then(()=>Y(r))}function Ie(r,o,s){return pe(r).then(m=>WebAssembly.instantiate(m,o)).then(m=>m).then(s,m=>{k(`failed to asynchronously prepare wasm: ${m}`),F(m)})}function Ee(r,o){var s=fe;return typeof WebAssembly.instantiateStreaming!=\"function\"||ye(s)||ve(s)||P||typeof fetch!=\"function\"?Ie(s,r,o):fetch(s,{credentials:\"same-origin\"}).then(m=>WebAssembly.instantiateStreaming(m,r).then(o,function(O){return k(`wasm streaming compile failed: ${O}`),k(\"falling back to ArrayBuffer instantiation\"),Ie(s,r,o)}))}var be,we={920016:(r,o,s,m)=>{if(typeof a>\"u\"||!a.za)return 1;if(r=z(r>>>0),r.startsWith(\"./\")&&(r=r.substring(2)),r=a.za.get(r),!r)return 2;if(o>>>=0,s>>>=0,o+s>r.byteLength)return 3;try{return ee.set(r.subarray(o,o+s),m>>>0>>>0),0}catch{return 4}}};function Le(r){this.xa=r-24,this.Ha=function(o){j[this.xa+4>>>2>>>0]=o},this.Ga=function(o){j[this.xa+8>>>2>>>0]=o},this.Aa=function(o,s){this.Fa(),this.Ha(o),this.Ga(s)},this.Fa=function(){j[this.xa+16>>>2>>>0]=0}}var me=0,Se=0,De=typeof TextDecoder<\"u\"?new TextDecoder(\"utf8\"):void 0,te=(r,o,s)=>{o>>>=0;var m=o+s;for(s=o;r[s]&&!(s>=m);)++s;if(16<s-o&&r.buffer&&De)return De.decode(r.subarray(o,s));for(m=\"\";o<s;){var O=r[o++];if(O&128){var A=r[o++]&63;if((O&224)==192)m+=String.fromCharCode((O&31)<<6|A);else{var L=r[o++]&63;O=(O&240)==224?(O&15)<<12|A<<6|L:(O&7)<<18|A<<12|L<<6|r[o++]&63,65536>O?m+=String.fromCharCode(O):(O-=65536,m+=String.fromCharCode(55296|O>>10,56320|O&1023))}}else m+=String.fromCharCode(O)}return m},z=(r,o)=>(r>>>=0)?te(ee,r,o):\"\",le=r=>{for(var o=0,s=0;s<r.length;++s){var m=r.charCodeAt(s);127>=m?o++:2047>=m?o+=2:55296<=m&&57343>=m?(o+=4,++s):o+=3}return o},Fe=(r,o,s,m)=>{if(s>>>=0,!(0<m))return 0;var O=s;m=s+m-1;for(var A=0;A<r.length;++A){var L=r.charCodeAt(A);if(55296<=L&&57343>=L){var re=r.charCodeAt(++A);L=65536+((L&1023)<<10)|re&1023}if(127>=L){if(s>=m)break;o[s++>>>0]=L}else{if(2047>=L){if(s+1>=m)break;o[s++>>>0]=192|L>>6}else{if(65535>=L){if(s+2>=m)break;o[s++>>>0]=224|L>>12}else{if(s+3>=m)break;o[s++>>>0]=240|L>>18,o[s++>>>0]=128|L>>12&63}o[s++>>>0]=128|L>>6&63}o[s++>>>0]=128|L&63}}return o[s>>>0]=0,s-O},Ae=r=>r%4===0&&(r%100!==0||r%400===0),qe=[0,31,60,91,121,152,182,213,244,274,305,335],at=[0,31,59,90,120,151,181,212,243,273,304,334],xe=r=>{var o=le(r)+1,s=st(o);return s&&Fe(r,ee,s,o),s},Ne=[],Re={},He=()=>{if(!Ge){var r={USER:\"web_user\",LOGNAME:\"web_user\",PATH:\"/\",PWD:\"/\",HOME:\"/home/web_user\",LANG:(typeof navigator==\"object\"&&navigator.languages&&navigator.languages[0]||\"C\").replace(\"-\",\"_\")+\".UTF-8\",_:g||\"./this.program\"},o;for(o in Re)Re[o]===void 0?delete r[o]:r[o]=Re[o];var s=[];for(o in r)s.push(`${o}=${r[o]}`);Ge=s}return Ge},Ge,Be=[null,[],[]],Ve=[31,29,31,30,31,30,31,31,30,31,30,31],Je=[31,28,31,30,31,30,31,31,30,31,30,31];function $e(r){var o=Array(le(r)+1);return Fe(r,o,0,o.length),o}function ot(r,o,s,m){function O(d,B,$){for(d=typeof d==\"number\"?d.toString():d||\"\";d.length<B;)d=$[0]+d;return d}function A(d,B){return O(d,B,\"0\")}function L(d,B){function $(et){return 0>et?-1:0<et?1:0}var Te;return(Te=$(d.getFullYear()-B.getFullYear()))===0&&(Te=$(d.getMonth()-B.getMonth()))===0&&(Te=$(d.getDate()-B.getDate())),Te}function re(d){switch(d.getDay()){case 0:return new Date(d.getFullYear()-1,11,29);case 1:return d;case 2:return new Date(d.getFullYear(),0,3);case 3:return new Date(d.getFullYear(),0,2);case 4:return new Date(d.getFullYear(),0,1);case 5:return new Date(d.getFullYear()-1,11,31);case 6:return new Date(d.getFullYear()-1,11,30)}}function de(d){var B=d.ta;for(d=new Date(new Date(d.ua+1900,0,1).getTime());0<B;){var $=d.getMonth(),Te=(Ae(d.getFullYear())?Ve:Je)[$];if(B>Te-d.getDate())B-=Te-d.getDate()+1,d.setDate(1),11>$?d.setMonth($+1):(d.setMonth(0),d.setFullYear(d.getFullYear()+1));else{d.setDate(d.getDate()+B);break}}return $=new Date(d.getFullYear()+1,0,4),B=re(new Date(d.getFullYear(),0,4)),$=re($),0>=L(B,d)?0>=L($,d)?d.getFullYear()+1:d.getFullYear():d.getFullYear()-1}r>>>=0,o>>>=0,s>>>=0,m>>>=0;var ie=j[m+40>>>2>>>0];m={Da:S[m>>>2>>>0],Ca:S[m+4>>>2>>>0],va:S[m+8>>>2>>>0],ya:S[m+12>>>2>>>0],wa:S[m+16>>>2>>>0],ua:S[m+20>>>2>>>0],oa:S[m+24>>>2>>>0],ta:S[m+28>>>2>>>0],Ia:S[m+32>>>2>>>0],Ba:S[m+36>>>2>>>0],Ea:ie?z(ie):\"\"},s=z(s),ie={\"%c\":\"%a %b %d %H:%M:%S %Y\",\"%D\":\"%m/%d/%y\",\"%F\":\"%Y-%m-%d\",\"%h\":\"%b\",\"%r\":\"%I:%M:%S %p\",\"%R\":\"%H:%M\",\"%T\":\"%H:%M:%S\",\"%x\":\"%m/%d/%y\",\"%X\":\"%H:%M:%S\",\"%Ec\":\"%c\",\"%EC\":\"%C\",\"%Ex\":\"%m/%d/%y\",\"%EX\":\"%H:%M:%S\",\"%Ey\":\"%y\",\"%EY\":\"%Y\",\"%Od\":\"%d\",\"%Oe\":\"%e\",\"%OH\":\"%H\",\"%OI\":\"%I\",\"%Om\":\"%m\",\"%OM\":\"%M\",\"%OS\":\"%S\",\"%Ou\":\"%u\",\"%OU\":\"%U\",\"%OV\":\"%V\",\"%Ow\":\"%w\",\"%OW\":\"%W\",\"%Oy\":\"%y\"};for(var ue in ie)s=s.replace(new RegExp(ue,\"g\"),ie[ue]);var Ze=\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),Ke=\"January February March April May June July August September October November December\".split(\" \");ie={\"%a\":d=>Ze[d.oa].substring(0,3),\"%A\":d=>Ze[d.oa],\"%b\":d=>Ke[d.wa].substring(0,3),\"%B\":d=>Ke[d.wa],\"%C\":d=>A((d.ua+1900)/100|0,2),\"%d\":d=>A(d.ya,2),\"%e\":d=>O(d.ya,2,\" \"),\"%g\":d=>de(d).toString().substring(2),\"%G\":d=>de(d),\"%H\":d=>A(d.va,2),\"%I\":d=>(d=d.va,d==0?d=12:12<d&&(d-=12),A(d,2)),\"%j\":d=>{for(var B=0,$=0;$<=d.wa-1;B+=(Ae(d.ua+1900)?Ve:Je)[$++]);return A(d.ya+B,3)},\"%m\":d=>A(d.wa+1,2),\"%M\":d=>A(d.Ca,2),\"%n\":()=>`\n`,\"%p\":d=>0<=d.va&&12>d.va?\"AM\":\"PM\",\"%S\":d=>A(d.Da,2),\"%t\":()=>\"	\",\"%u\":d=>d.oa||7,\"%U\":d=>A(Math.floor((d.ta+7-d.oa)/7),2),\"%V\":d=>{var B=Math.floor((d.ta+7-(d.oa+6)%7)/7);if(2>=(d.oa+371-d.ta-2)%7&&B++,B)B==53&&($=(d.oa+371-d.ta)%7,$==4||$==3&&Ae(d.ua)||(B=1));else{B=52;var $=(d.oa+7-d.ta-1)%7;($==4||$==5&&Ae(d.ua%400-1))&&B++}return A(B,2)},\"%w\":d=>d.oa,\"%W\":d=>A(Math.floor((d.ta+7-(d.oa+6)%7)/7),2),\"%y\":d=>(d.ua+1900).toString().substring(2),\"%Y\":d=>d.ua+1900,\"%z\":d=>{d=d.Ba;var B=0<=d;return d=Math.abs(d)/60,(B?\"+\":\"-\")+(\"0000\"+(d/60*100+d%60)).slice(-4)},\"%Z\":d=>d.Ea,\"%%\":()=>\"%\"},s=s.replace(/%%/g,\"\\0\\0\");for(ue in ie)s.includes(ue)&&(s=s.replace(new RegExp(ue,\"g\"),ie[ue](m)));return s=s.replace(/\\0\\0/g,\"%\"),ue=$e(s),ue.length>o?0:(se.set(ue,r>>>0),ue.length-1)}var G={a:function(r,o,s){throw r>>>=0,new Le(r).Aa(o>>>0,s>>>0),me=r,Se++,me},e:function(){return 0},H:function(){},x:function(){},z:function(){},J:function(){return 0},F:function(){},A:function(){},E:function(){},g:function(){},y:function(){},v:function(){},G:function(){},w:function(){},k:()=>1,n:function(r,o,s){r=o+2097152>>>0<4194305-!!r?(r>>>0)+4294967296*o:NaN,s>>>=0,r=new Date(1e3*r),S[s>>>2>>>0]=r.getUTCSeconds(),S[s+4>>>2>>>0]=r.getUTCMinutes(),S[s+8>>>2>>>0]=r.getUTCHours(),S[s+12>>>2>>>0]=r.getUTCDate(),S[s+16>>>2>>>0]=r.getUTCMonth(),S[s+20>>>2>>>0]=r.getUTCFullYear()-1900,S[s+24>>>2>>>0]=r.getUTCDay(),S[s+28>>>2>>>0]=(r.getTime()-Date.UTC(r.getUTCFullYear(),0,1,0,0,0,0))/864e5|0},o:function(r,o,s){r=o+2097152>>>0<4194305-!!r?(r>>>0)+4294967296*o:NaN,s>>>=0,r=new Date(1e3*r),S[s>>>2>>>0]=r.getSeconds(),S[s+4>>>2>>>0]=r.getMinutes(),S[s+8>>>2>>>0]=r.getHours(),S[s+12>>>2>>>0]=r.getDate(),S[s+16>>>2>>>0]=r.getMonth(),S[s+20>>>2>>>0]=r.getFullYear()-1900,S[s+24>>>2>>>0]=r.getDay(),S[s+28>>>2>>>0]=(Ae(r.getFullYear())?qe:at)[r.getMonth()]+r.getDate()-1|0,S[s+36>>>2>>>0]=-(60*r.getTimezoneOffset()),o=new Date(r.getFullYear(),6,1).getTimezoneOffset();var m=new Date(r.getFullYear(),0,1).getTimezoneOffset();S[s+32>>>2>>>0]=(o!=m&&r.getTimezoneOffset()==Math.min(m,o))|0},p:function(r){r>>>=0;var o=new Date(S[r+20>>>2>>>0]+1900,S[r+16>>>2>>>0],S[r+12>>>2>>>0],S[r+8>>>2>>>0],S[r+4>>>2>>>0],S[r>>>2>>>0],0),s=S[r+32>>>2>>>0],m=o.getTimezoneOffset(),O=new Date(o.getFullYear(),6,1).getTimezoneOffset(),A=new Date(o.getFullYear(),0,1).getTimezoneOffset(),L=Math.min(A,O);return 0>s?S[r+32>>>2>>>0]=+(O!=A&&L==m):0<s!=(L==m)&&(O=Math.max(A,O),o.setTime(o.getTime()+6e4*((0<s?L:O)-m))),S[r+24>>>2>>>0]=o.getDay(),S[r+28>>>2>>>0]=(Ae(o.getFullYear())?qe:at)[o.getMonth()]+o.getDate()-1|0,S[r>>>2>>>0]=o.getSeconds(),S[r+4>>>2>>>0]=o.getMinutes(),S[r+8>>>2>>>0]=o.getHours(),S[r+12>>>2>>>0]=o.getDate(),S[r+16>>>2>>>0]=o.getMonth(),S[r+20>>>2>>>0]=o.getYear(),r=o.getTime(),isNaN(r)?(S[je()>>>2>>>0]=61,r=-1):r/=1e3,Xe((be=r,1<=+Math.abs(be)?0<be?+Math.floor(be/4294967296)>>>0:~~+Math.ceil((be-+(~~be>>>0))/4294967296)>>>0:0)),r>>>0},l:function(){return-52},m:function(){},t:function(r,o,s){function m(de){return(de=de.toTimeString().match(/\\(([A-Za-z ]+)\\)$/))?de[1]:\"GMT\"}s>>>=0;var O=new Date().getFullYear(),A=new Date(O,0,1),L=new Date(O,6,1);O=A.getTimezoneOffset();var re=L.getTimezoneOffset();j[r>>>0>>>2>>>0]=60*Math.max(O,re),S[o>>>0>>>2>>>0]=+(O!=re),r=m(A),o=m(L),r=xe(r),o=xe(o),re<O?(j[s>>>2>>>0]=r,j[s+4>>>2>>>0]=o):(j[s>>>2>>>0]=o,j[s+4>>>2>>>0]=r)},d:()=>{F(\"\")},B:function(r,o,s){r>>>=0,o>>>=0,s>>>=0,Ne.length=0;for(var m;m=ee[o++>>>0];){var O=m!=105;O&=m!=112,s+=O&&s%8?4:0,Ne.push(m==112?j[s>>>2>>>0]:m==105?S[s>>>2>>>0]:Ce[s>>>3>>>0]),s+=O?8:4}return we[r].apply(null,Ne)},h:()=>Date.now(),u:function(){return 4294901760},b:()=>performance.now(),I:function(r,o,s){return o>>>=0,ee.copyWithin(r>>>0>>>0,o>>>0,o+(s>>>0)>>>0)},s:function(r){r>>>=0;var o=ee.length;if(4294901760<r)return!1;for(var s=1;4>=s;s*=2){var m=o*(1+.2/s);m=Math.min(m,r+100663296);var O=Math;m=Math.max(r,m);e:{O=(O.min.call(O,4294901760,m+(65536-m%65536)%65536)-W.buffer.byteLength+65535)/65536;try{W.grow(O),Ue();var A=1;break e}catch{}A=void 0}if(A)return!0}return!1},C:function(r,o){r>>>=0,o>>>=0;var s=0;return He().forEach((m,O)=>{var A=o+s;for(O=j[r+4*O>>>2>>>0]=A,A=0;A<m.length;++A)se[O++>>>0>>>0]=m.charCodeAt(A);se[O>>>0>>>0]=0,s+=m.length+1}),0},D:function(r,o){r>>>=0,o>>>=0;var s=He();j[r>>>2>>>0]=s.length;var m=0;return s.forEach(O=>m+=O.length+1),j[o>>>2>>>0]=m,0},f:()=>52,j:function(){return 52},q:function(){return 70},i:function(r,o,s,m){o>>>=0,s>>>=0,m>>>=0;for(var O=0,A=0;A<s;A++){var L=j[o>>>2>>>0],re=j[o+4>>>2>>>0];o+=8;for(var de=0;de<re;de++){var ie=ee[L+de>>>0],ue=Be[r];ie===0||ie===10?((r===1?v:k)(te(ue,0)),ue.length=0):ue.push(ie)}O+=re}return j[m>>>2>>>0]=O,0},r:ot,c:function(r,o,s,m){return ot(r>>>0,o>>>0,s>>>0,m>>>0)}},C=function(){function r(s){return C=s.exports,C=ut(),W=C.K,Ue(),ne.unshift(C.L),Oe--,Oe==0&&(he!==null&&(clearInterval(he),he=null),ae&&(s=ae,ae=null,s())),C}var o={a:G};if(Oe++,a.instantiateWasm)try{return a.instantiateWasm(o,r)}catch(s){k(`Module.instantiateWasm callback failed with error: ${s}`),f(s)}return Ee(o,function(s){r(s.instance)}).catch(f),{}}();a._OrtInit=(r,o)=>(a._OrtInit=C.M)(r,o),a._OrtGetLastError=(r,o)=>(a._OrtGetLastError=C.N)(r,o),a._OrtCreateSessionOptions=(r,o,s,m,O,A,L,re,de,ie)=>(a._OrtCreateSessionOptions=C.O)(r,o,s,m,O,A,L,re,de,ie),a._OrtAppendExecutionProvider=(r,o)=>(a._OrtAppendExecutionProvider=C.P)(r,o),a._OrtAddFreeDimensionOverride=(r,o,s)=>(a._OrtAddFreeDimensionOverride=C.Q)(r,o,s),a._OrtAddSessionConfigEntry=(r,o,s)=>(a._OrtAddSessionConfigEntry=C.R)(r,o,s),a._OrtReleaseSessionOptions=r=>(a._OrtReleaseSessionOptions=C.S)(r),a._OrtCreateSession=(r,o,s)=>(a._OrtCreateSession=C.T)(r,o,s),a._OrtReleaseSession=r=>(a._OrtReleaseSession=C.U)(r),a._OrtGetInputOutputCount=(r,o,s)=>(a._OrtGetInputOutputCount=C.V)(r,o,s),a._OrtGetInputName=(r,o)=>(a._OrtGetInputName=C.W)(r,o),a._OrtGetOutputName=(r,o)=>(a._OrtGetOutputName=C.X)(r,o),a._OrtFree=r=>(a._OrtFree=C.Y)(r),a._OrtCreateTensor=(r,o,s,m,O,A)=>(a._OrtCreateTensor=C.Z)(r,o,s,m,O,A),a._OrtGetTensorData=(r,o,s,m,O)=>(a._OrtGetTensorData=C._)(r,o,s,m,O),a._OrtReleaseTensor=r=>(a._OrtReleaseTensor=C.$)(r),a._OrtCreateRunOptions=(r,o,s,m)=>(a._OrtCreateRunOptions=C.aa)(r,o,s,m),a._OrtAddRunConfigEntry=(r,o,s)=>(a._OrtAddRunConfigEntry=C.ba)(r,o,s),a._OrtReleaseRunOptions=r=>(a._OrtReleaseRunOptions=C.ca)(r),a._OrtCreateBinding=r=>(a._OrtCreateBinding=C.da)(r),a._OrtBindInput=(r,o,s)=>(a._OrtBindInput=C.ea)(r,o,s),a._OrtBindOutput=(r,o,s,m)=>(a._OrtBindOutput=C.fa)(r,o,s,m),a._OrtClearBoundOutputs=r=>(a._OrtClearBoundOutputs=C.ga)(r),a._OrtReleaseBinding=r=>(a._OrtReleaseBinding=C.ha)(r),a._OrtRunWithBinding=(r,o,s,m,O)=>(a._OrtRunWithBinding=C.ia)(r,o,s,m,O),a._OrtRun=(r,o,s,m,O,A,L,re)=>(a._OrtRun=C.ja)(r,o,s,m,O,A,L,re),a._OrtEndProfiling=r=>(a._OrtEndProfiling=C.ka)(r);var je=()=>(je=C.la)(),st=a._malloc=r=>(st=a._malloc=C.ma)(r);a._free=r=>(a._free=C.na)(r);var Xe=r=>(Xe=C.pa)(r),it=()=>(it=C.qa)(),M=r=>(M=C.ra)(r),ke=r=>(ke=C.sa)(r);function ut(){var r=C;r=Object.assign({},r);var o=m=>()=>m()>>>0,s=m=>O=>m(O)>>>0;return r.la=o(r.la),r.ma=s(r.ma),r.qa=o(r.qa),r.sa=s(r.sa),r}a.stackAlloc=ke,a.stackSave=it,a.stackRestore=M,a.UTF8ToString=z,a.stringToUTF8=(r,o,s)=>Fe(r,ee,o,s),a.lengthBytesUTF8=le;var Pe;ae=function r(){Pe||Qe(),Pe||(ae=r)};function Qe(){if(!(0<Oe)){if(a.preRun)for(typeof a.preRun==\"function\"&&(a.preRun=[a.preRun]);a.preRun.length;){var r=a.preRun.shift();ce.unshift(r)}for(;0<ce.length;)ce.shift()(a);if(!(0<Oe||Pe||(Pe=!0,a.calledRun=!0,H))){for(;0<ne.length;)ne.shift()(a);for(h(a);0<Q.length;)Q.shift()(a)}}}return Qe(),c.ready}})();typeof mr==\"object\"&&typeof Ft==\"object\"?Ft.exports=pr:typeof define==\"function\"&&define.amd&&define([],()=>pr)});var hr=tt(()=>{});var yr=tt(()=>{});var br={};At(br,{cpus:()=>rn});var rn,wr=St(()=>{rn=void 0});var _r=tt((vr,xt)=>{\"use strict\";var Or=(()=>{var u=typeof document<\"u\"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<\"u\"&&(u=u||__filename),function(c={}){function a(){return Q.buffer!=F.buffer&&Y(),F}function h(){return Q.buffer!=F.buffer&&Y(),ye}function f(){return Q.buffer!=F.buffer&&Y(),ve}function w(){return Q.buffer!=F.buffer&&Y(),fe}function g(){return Q.buffer!=F.buffer&&Y(),_e}var i=c,E,P;i.ready=new Promise((e,t)=>{E=e,P=t});var U=Object.assign({},i),D=\"./this.program\",x=(e,t)=>{throw t},K=typeof window==\"object\",R=typeof importScripts==\"function\",I=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\",v=i.ENVIRONMENT_IS_PTHREAD||!1,k=\"\";function W(e){return i.locateFile?i.locateFile(e,k):k+e}var H,se,ee;if(I){var S=(Mt(),rt(Tt)),j=(Dt(),rt(Ct));k=R?j.dirname(k)+\"/\":__dirname+\"/\",H=(t,n)=>(t=z(t)?new URL(t):j.normalize(t),S.readFileSync(t,n?void 0:\"utf8\")),ee=t=>(t=H(t,!0),t.buffer||(t=new Uint8Array(t)),t),se=(t,n,l,y=!0)=>{t=z(t)?new URL(t):j.normalize(t),S.readFile(t,y?void 0:\"utf8\",(b,_)=>{b?l(b):n(y?_.buffer:_)})},!i.thisProgram&&1<process.argv.length&&(D=process.argv[1].replace(/\\\\/g,\"/\")),process.argv.slice(2),x=(t,n)=>{throw process.exitCode=t,n},i.inspect=()=>\"[Emscripten Module object]\";let e;try{e=hr()}catch(t){throw console.error('The \"worker_threads\" module is not supported in this node.js build - perhaps a newer version is needed?'),t}global.Worker=e.Worker}else(K||R)&&(R?k=self.location.href:typeof document<\"u\"&&document.currentScript&&(k=document.currentScript.src),typeof u<\"u\"&&u&&(k=u),k.indexOf(\"blob:\")!==0?k=k.substr(0,k.replace(/[?#].*/,\"\").lastIndexOf(\"/\")+1):k=\"\",I||(H=e=>{var t=new XMLHttpRequest;return t.open(\"GET\",e,!1),t.send(null),t.responseText},R&&(ee=e=>{var t=new XMLHttpRequest;return t.open(\"GET\",e,!1),t.responseType=\"arraybuffer\",t.send(null),new Uint8Array(t.response)}),se=(e,t,n)=>{var l=new XMLHttpRequest;l.open(\"GET\",e,!0),l.responseType=\"arraybuffer\",l.onload=()=>{l.status==200||l.status==0&&l.response?t(l.response):n()},l.onerror=n,l.send(null)}));I&&typeof performance>\"u\"&&(global.performance=yr().performance);var Ce=console.log.bind(console),Ue=console.error.bind(console);I&&(Ce=(...e)=>S.writeSync(1,e.join(\" \")+`\n`),Ue=(...e)=>S.writeSync(2,e.join(\" \")+`\n`));var ce=Ce,ne=Ue;Object.assign(i,U),U=null,typeof WebAssembly!=\"object\"&&De(\"no native wasm support detected\");var Q,Oe,he=!1,ae,F,ye,ve,fe,_e;function Y(){var e=Q.buffer;i.HEAP8=F=new Int8Array(e),i.HEAP16=new Int16Array(e),i.HEAPU8=ye=new Uint8Array(e),i.HEAPU16=new Uint16Array(e),i.HEAP32=ve=new Int32Array(e),i.HEAPU32=fe=new Uint32Array(e),i.HEAPF32=new Float32Array(e),i.HEAPF64=_e=new Float64Array(e)}var pe=16777216;if(v)Q=i.wasmMemory;else if(i.wasmMemory)Q=i.wasmMemory;else if(Q=new WebAssembly.Memory({initial:pe/65536,maximum:65536,shared:!0}),!(Q.buffer instanceof SharedArrayBuffer))throw ne(\"requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag\"),I&&ne(\"(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)\"),Error(\"bad memory\");Y(),pe=Q.buffer.byteLength;var Ie=[],Ee=[],be=[],we=0,Le=null,me=null;function Se(){if(we--,we==0&&(Le!==null&&(clearInterval(Le),Le=null),me)){var e=me;me=null,e()}}function De(e){throw e=\"Aborted(\"+e+\")\",ne(e),he=!0,ae=1,e=new WebAssembly.RuntimeError(e+\". Build with -sASSERTIONS for more info.\"),P(e),e}var te=e=>e.startsWith(\"data:application/octet-stream;base64,\"),z=e=>e.startsWith(\"file://\"),le;le=\"ort-wasm-threaded.wasm\",te(le)||(le=W(le));function Fe(e){if(ee)return ee(e);throw\"both async and sync fetching of the wasm failed\"}function Ae(e){if(K||R){if(typeof fetch==\"function\"&&!z(e))return fetch(e,{credentials:\"same-origin\"}).then(t=>{if(!t.ok)throw\"failed to load wasm binary file at '\"+e+\"'\";return t.arrayBuffer()}).catch(()=>Fe(e));if(se)return new Promise((t,n)=>{se(e,l=>t(new Uint8Array(l)),n)})}return Promise.resolve().then(()=>Fe(e))}function qe(e,t,n){return Ae(e).then(l=>WebAssembly.instantiate(l,t)).then(l=>l).then(n,l=>{ne(`failed to asynchronously prepare wasm: ${l}`),De(l)})}function at(e,t){var n=le;return typeof WebAssembly.instantiateStreaming!=\"function\"||te(n)||z(n)||I||typeof fetch!=\"function\"?qe(n,e,t):fetch(n,{credentials:\"same-origin\"}).then(l=>WebAssembly.instantiateStreaming(l,e).then(t,function(y){return ne(`wasm streaming compile failed: ${y}`),ne(\"falling back to ArrayBuffer instantiation\"),qe(n,e,t)}))}var xe,Ne={921388:(e,t,n,l)=>{if(typeof i>\"u\"||!i.cb)return 1;if(e=$e(e>>>0),e.startsWith(\"./\")&&(e=e.substring(2)),e=i.cb.get(e),!e)return 2;if(t>>>=0,n>>>=0,l>>>=0,t+n>e.byteLength)return 3;try{return h().set(e.subarray(t,t+n),l>>>0),0}catch{return 4}}};function Re(e){this.name=\"ExitStatus\",this.message=`Program terminated with exit(${e})`,this.status=e}var He=e=>{e.terminate(),e.onmessage=()=>{}},Ge=e=>{M.Pa.length==0&&(Xe(),M.Ya(M.Pa[0]));var t=M.Pa.pop();if(!t)return 6;M.Qa.push(t),M.Ma[e.Oa]=t,t.Oa=e.Oa;var n={cmd:\"run\",start_routine:e.kb,arg:e.hb,pthread_ptr:e.Oa};return I&&t.unref(),t.postMessage(n,e.qb),0},Be=0,Ve=typeof TextDecoder<\"u\"?new TextDecoder(\"utf8\"):void 0,Je=(e,t,n)=>{t>>>=0;var l=t+n;for(n=t;e[n]&&!(n>=l);)++n;if(16<n-t&&e.buffer&&Ve)return Ve.decode(e.buffer instanceof SharedArrayBuffer?e.slice(t,n):e.subarray(t,n));for(l=\"\";t<n;){var y=e[t++];if(y&128){var b=e[t++]&63;if((y&224)==192)l+=String.fromCharCode((y&31)<<6|b);else{var _=e[t++]&63;y=(y&240)==224?(y&15)<<12|b<<6|_:(y&7)<<18|b<<12|_<<6|e[t++]&63,65536>y?l+=String.fromCharCode(y):(y-=65536,l+=String.fromCharCode(55296|y>>10,56320|y&1023))}}else l+=String.fromCharCode(y)}return l},$e=(e,t)=>(e>>>=0)?Je(h(),e,t):\"\",ot=e=>{var t=vt();return e=e(),ct(t),e};function G(e,t){var n=arguments.length-2,l=arguments;return ot(()=>{for(var y=_t(8*n),b=y>>>3,_=0;_<n;_++){var J=l[2+_];g()[b+_>>>0]=J}return ar(e,n,y,t)})}function C(e){if(v)return G(0,1,e);ae=e,0<Be||(M.lb(),i.onExit?.(e),he=!0),x(e,new Re(e))}var je=e=>{if(ae=e,v)throw ut(e),\"unwind\";C(e)};function st(){for(var e=i.numThreads;e--;)Xe();Ie.unshift(()=>{we++,it(()=>Se())})}function Xe(){var e=W(\"ort-wasm-threaded.worker.js\");e=new Worker(e),M.Pa.push(e)}function it(e){v?e():Promise.all(M.Pa.map(M.Ya)).then(e)}var M={Pa:[],Qa:[],bb:[],Ma:{},Wa(){v?(M.receiveObjectTransfer=M.jb,M.threadInitTLS=M.ab,M.setExitStatus=M.$a):st()},$a:e=>ae=e,tb:[\"$terminateWorker\"],lb:()=>{for(var e of M.Qa)He(e);for(e of M.Pa)He(e);M.Pa=[],M.Qa=[],M.Ma=[]},Za:e=>{var t=e.Oa;delete M.Ma[t],M.Pa.push(e),M.Qa.splice(M.Qa.indexOf(e),1),e.Oa=0,wt(t)},jb(){},ab(){M.bb.forEach(e=>e())},Ya:e=>new Promise(t=>{e.onmessage=b=>{b=b.data;var _=b.cmd;if(b.targetThread&&b.targetThread!=lt()){var J=M.Ma[b.targetThread];J?J.postMessage(b,b.transferList):ne(`Internal error! Worker sent a message \"${_}\" to target pthread ${b.targetThread}, but that thread no longer exists!`)}else _===\"checkMailbox\"?ft():_===\"spawnThread\"?Ge(b):_===\"cleanupThread\"?M.Za(M.Ma[b.thread]):_===\"killThread\"?(b=b.thread,_=M.Ma[b],delete M.Ma[b],He(_),wt(b),M.Qa.splice(M.Qa.indexOf(_),1),_.Oa=0):_===\"cancelThread\"?M.Ma[b.thread].postMessage({cmd:\"cancel\"}):_===\"loaded\"?(e.loaded=!0,I&&!e.Oa&&e.unref(),t(e)):_===\"alert\"?alert(`Thread ${b.threadId}: ${b.text}`):b.target===\"setimmediate\"?e.postMessage(b):_===\"callHandler\"?i[b.handler](...b.args):_&&ne(`worker sent an unknown command ${_}`)},e.onerror=b=>{throw ne(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b},I&&(e.on(\"message\",b=>e.onmessage({data:b})),e.on(\"error\",b=>e.onerror(b)));var n=[],l=[\"onExit\"],y;for(y of l)i.hasOwnProperty(y)&&n.push(y);e.postMessage({cmd:\"load\",handlers:n,urlOrBlob:i.mainScriptUrlOrBlob||u,wasmMemory:Q,wasmModule:Oe})})};i.PThread=M;var ke=e=>{for(;0<e.length;)e.shift()(i)};i.establishStackSpace=()=>{var e=lt(),t=w()[e+52>>>2>>>0];e=w()[e+56>>>2>>>0],ir(t,t-e),ct(t)};function ut(e){if(v)return G(1,0,e);je(e)}var Pe=[],Qe;i.invokeEntryPoint=(e,t)=>{var n=Pe[e];n||(e>=Pe.length&&(Pe.length=e+1),Pe[e]=n=Qe.get(e)),e=n(t),0<Be?M.$a(e):Ot(e)};function r(e){this.Va=e-24,this.gb=function(t){w()[this.Va+4>>>2>>>0]=t},this.fb=function(t){w()[this.Va+8>>>2>>>0]=t},this.Wa=function(t,n){this.eb(),this.gb(t),this.fb(n)},this.eb=function(){w()[this.Va+16>>>2>>>0]=0}}var o=0,s=0;function m(e,t,n,l){return v?G(2,1,e,t,n,l):O(e,t,n,l)}function O(e,t,n,l){if(e>>>=0,t>>>=0,n>>>=0,l>>>=0,typeof SharedArrayBuffer>\"u\")return ne(\"Current environment does not support SharedArrayBuffer, pthreads are not available!\"),6;var y=[];return v&&y.length===0?m(e,t,n,l):(e={kb:n,Oa:e,hb:l,qb:y},v?(e.sb=\"spawnThread\",postMessage(e,y),0):Ge(e))}function A(e,t,n){return v?G(3,1,e,t,n):0}function L(e,t){if(v)return G(4,1,e,t)}var re=e=>{for(var t=0,n=0;n<e.length;++n){var l=e.charCodeAt(n);127>=l?t++:2047>=l?t+=2:55296<=l&&57343>=l?(t+=4,++n):t+=3}return t},de=(e,t,n,l)=>{if(n>>>=0,!(0<l))return 0;var y=n;l=n+l-1;for(var b=0;b<e.length;++b){var _=e.charCodeAt(b);if(55296<=_&&57343>=_){var J=e.charCodeAt(++b);_=65536+((_&1023)<<10)|J&1023}if(127>=_){if(n>=l)break;t[n++>>>0]=_}else{if(2047>=_){if(n+1>=l)break;t[n++>>>0]=192|_>>6}else{if(65535>=_){if(n+2>=l)break;t[n++>>>0]=224|_>>12}else{if(n+3>=l)break;t[n++>>>0]=240|_>>18,t[n++>>>0]=128|_>>12&63}t[n++>>>0]=128|_>>6&63}t[n++>>>0]=128|_&63}}return t[n>>>0]=0,n-y},ie=(e,t,n)=>de(e,h(),t,n);function ue(e,t){if(v)return G(5,1,e,t)}function Ze(e,t,n){if(v)return G(6,1,e,t,n)}function Ke(e,t,n){return v?G(7,1,e,t,n):0}function d(e,t){if(v)return G(8,1,e,t)}function B(e,t,n){if(v)return G(9,1,e,t,n)}function $(e,t,n,l){if(v)return G(10,1,e,t,n,l)}function Te(e,t,n,l){if(v)return G(11,1,e,t,n,l)}function et(e,t,n,l){if(v)return G(12,1,e,t,n,l)}function Bt(e){if(v)return G(13,1,e)}function kt(e,t){if(v)return G(14,1,e,t)}function Wt(e,t,n){if(v)return G(15,1,e,t,n)}function mt(e){e>>>=0,typeof Atomics.rb==\"function\"&&(Atomics.rb(f(),e>>>2,e).value.then(ft),e+=128,Atomics.store(f(),e>>>2,1))}i.__emscripten_thread_mailbox_await=mt;var ft=()=>{var e=lt();if(e&&(mt(e),e=or,!he))try{if(e(),!(0<Be))try{v?Ot(ae):je(ae)}catch(t){t instanceof Re||t==\"unwind\"||x(1,t)}}catch(t){t instanceof Re||t==\"unwind\"||x(1,t)}};i.checkMailbox=ft;var gt=[],Ye=e=>e%4===0&&(e%100!==0||e%400===0),Nt=[0,31,60,91,121,152,182,213,244,274,305,335],Ht=[0,31,59,90,120,151,181,212,243,273,304,334];function Gt(e,t,n,l,y,b,_,J){return v?G(16,1,e,t,n,l,y,b,_,J):-52}function $t(e,t,n,l,y,b,_){if(v)return G(17,1,e,t,n,l,y,b,_)}var jt=e=>{var t=re(e)+1,n=rr(t);return n&&ie(e,n,t),n},ht=[],yt={},Yt=()=>{if(!bt){var e={USER:\"web_user\",LOGNAME:\"web_user\",PATH:\"/\",PWD:\"/\",HOME:\"/home/web_user\",LANG:(typeof navigator==\"object\"&&navigator.languages&&navigator.languages[0]||\"C\").replace(\"-\",\"_\")+\".UTF-8\",_:D||\"./this.program\"},t;for(t in yt)yt[t]===void 0?delete e[t]:e[t]=yt[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);bt=n}return bt},bt;function zt(e,t){if(v)return G(18,1,e,t);e>>>=0,t>>>=0;var n=0;return Yt().forEach((l,y)=>{var b=t+n;for(y=w()[e+4*y>>>2>>>0]=b,b=0;b<l.length;++b)a()[y++>>>0>>>0]=l.charCodeAt(b);a()[y>>>0>>>0]=0,n+=l.length+1}),0}function qt(e,t){if(v)return G(19,1,e,t);e>>>=0,t>>>=0;var n=Yt();w()[e>>>2>>>0]=n.length;var l=0;return n.forEach(y=>l+=y.length+1),w()[t>>>2>>>0]=l,0}function Vt(e){return v?G(20,1,e):52}function Jt(e,t,n,l){return v?G(21,1,e,t,n,l):52}function Xt(e,t,n,l,y){return v?G(22,1,e,t,n,l,y):70}var $r=[null,[],[]];function Qt(e,t,n,l){if(v)return G(23,1,e,t,n,l);t>>>=0,n>>>=0,l>>>=0;for(var y=0,b=0;b<n;b++){var _=w()[t>>>2>>>0],J=w()[t+4>>>2>>>0];t+=8;for(var Me=0;Me<J;Me++){var oe=h()[_+Me>>>0],ge=$r[e];oe===0||oe===10?((e===1?ce:ne)(Je(ge,0)),ge.length=0):ge.push(oe)}y+=J}return w()[l>>>2>>>0]=y,0}var Zt=[31,29,31,30,31,30,31,31,30,31,30,31],Kt=[31,28,31,30,31,30,31,31,30,31,30,31];function jr(e){var t=Array(re(e)+1);return de(e,t,0,t.length),t}var Yr=(e,t)=>{a().set(e,t>>>0)};function er(e,t,n,l){function y(p,N,X){for(p=typeof p==\"number\"?p.toString():p||\"\";p.length<N;)p=X[0]+p;return p}function b(p,N){return y(p,N,\"0\")}function _(p,N){function X(cr){return 0>cr?-1:0<cr?1:0}var We;return(We=X(p.getFullYear()-N.getFullYear()))===0&&(We=X(p.getMonth()-N.getMonth()))===0&&(We=X(p.getDate()-N.getDate())),We}function J(p){switch(p.getDay()){case 0:return new Date(p.getFullYear()-1,11,29);case 1:return p;case 2:return new Date(p.getFullYear(),0,3);case 3:return new Date(p.getFullYear(),0,2);case 4:return new Date(p.getFullYear(),0,1);case 5:return new Date(p.getFullYear()-1,11,31);case 6:return new Date(p.getFullYear()-1,11,30)}}function Me(p){var N=p.Ra;for(p=new Date(new Date(p.Sa+1900,0,1).getTime());0<N;){var X=p.getMonth(),We=(Ye(p.getFullYear())?Zt:Kt)[X];if(N>We-p.getDate())N-=We-p.getDate()+1,p.setDate(1),11>X?p.setMonth(X+1):(p.setMonth(0),p.setFullYear(p.getFullYear()+1));else{p.setDate(p.getDate()+N);break}}return X=new Date(p.getFullYear()+1,0,4),N=J(new Date(p.getFullYear(),0,4)),X=J(X),0>=_(N,p)?0>=_(X,p)?p.getFullYear()+1:p.getFullYear():p.getFullYear()-1}e>>>=0,t>>>=0,n>>>=0,l>>>=0;var oe=w()[l+40>>>2>>>0];l={ob:f()[l>>>2>>>0],nb:f()[l+4>>>2>>>0],Ta:f()[l+8>>>2>>>0],Xa:f()[l+12>>>2>>>0],Ua:f()[l+16>>>2>>>0],Sa:f()[l+20>>>2>>>0],Na:f()[l+24>>>2>>>0],Ra:f()[l+28>>>2>>>0],ub:f()[l+32>>>2>>>0],mb:f()[l+36>>>2>>>0],pb:oe?$e(oe):\"\"},n=$e(n),oe={\"%c\":\"%a %b %d %H:%M:%S %Y\",\"%D\":\"%m/%d/%y\",\"%F\":\"%Y-%m-%d\",\"%h\":\"%b\",\"%r\":\"%I:%M:%S %p\",\"%R\":\"%H:%M\",\"%T\":\"%H:%M:%S\",\"%x\":\"%m/%d/%y\",\"%X\":\"%H:%M:%S\",\"%Ec\":\"%c\",\"%EC\":\"%C\",\"%Ex\":\"%m/%d/%y\",\"%EX\":\"%H:%M:%S\",\"%Ey\":\"%y\",\"%EY\":\"%Y\",\"%Od\":\"%d\",\"%Oe\":\"%e\",\"%OH\":\"%H\",\"%OI\":\"%I\",\"%Om\":\"%m\",\"%OM\":\"%M\",\"%OS\":\"%S\",\"%Ou\":\"%u\",\"%OU\":\"%U\",\"%OV\":\"%V\",\"%Ow\":\"%w\",\"%OW\":\"%W\",\"%Oy\":\"%y\"};for(var ge in oe)n=n.replace(new RegExp(ge,\"g\"),oe[ge]);var fr=\"Sunday Monday Tuesday Wednesday Thursday Friday Saturday\".split(\" \"),lr=\"January February March April May June July August September October November December\".split(\" \");oe={\"%a\":p=>fr[p.Na].substring(0,3),\"%A\":p=>fr[p.Na],\"%b\":p=>lr[p.Ua].substring(0,3),\"%B\":p=>lr[p.Ua],\"%C\":p=>b((p.Sa+1900)/100|0,2),\"%d\":p=>b(p.Xa,2),\"%e\":p=>y(p.Xa,2,\" \"),\"%g\":p=>Me(p).toString().substring(2),\"%G\":p=>Me(p),\"%H\":p=>b(p.Ta,2),\"%I\":p=>(p=p.Ta,p==0?p=12:12<p&&(p-=12),b(p,2)),\"%j\":p=>{for(var N=0,X=0;X<=p.Ua-1;N+=(Ye(p.Sa+1900)?Zt:Kt)[X++]);return b(p.Xa+N,3)},\"%m\":p=>b(p.Ua+1,2),\"%M\":p=>b(p.nb,2),\"%n\":()=>`\n`,\"%p\":p=>0<=p.Ta&&12>p.Ta?\"AM\":\"PM\",\"%S\":p=>b(p.ob,2),\"%t\":()=>\"	\",\"%u\":p=>p.Na||7,\"%U\":p=>b(Math.floor((p.Ra+7-p.Na)/7),2),\"%V\":p=>{var N=Math.floor((p.Ra+7-(p.Na+6)%7)/7);if(2>=(p.Na+371-p.Ra-2)%7&&N++,N)N==53&&(X=(p.Na+371-p.Ra)%7,X==4||X==3&&Ye(p.Sa)||(N=1));else{N=52;var X=(p.Na+7-p.Ra-1)%7;(X==4||X==5&&Ye(p.Sa%400-1))&&N++}return b(N,2)},\"%w\":p=>p.Na,\"%W\":p=>b(Math.floor((p.Ra+7-(p.Na+6)%7)/7),2),\"%y\":p=>(p.Sa+1900).toString().substring(2),\"%Y\":p=>p.Sa+1900,\"%z\":p=>{p=p.mb;var N=0<=p;return p=Math.abs(p)/60,(N?\"+\":\"-\")+(\"0000\"+(p/60*100+p%60)).slice(-4)},\"%Z\":p=>p.pb,\"%%\":()=>\"%\"},n=n.replace(/%%/g,\"\\0\\0\");for(ge in oe)n.includes(ge)&&(n=n.replace(new RegExp(ge,\"g\"),oe[ge](l)));return n=n.replace(/\\0\\0/g,\"%\"),ge=jr(n),ge.length>t?0:(Yr(ge,e),ge.length-1)}M.Wa();var zr=[C,ut,m,A,L,ue,Ze,Ke,d,B,$,Te,et,Bt,kt,Wt,Gt,$t,zt,qt,Vt,Jt,Xt,Qt],qr={b:function(e,t,n){throw e>>>=0,new r(e).Wa(t>>>0,n>>>0),o=e,s++,o},L:function(e){nr(e>>>0,!R,1,!K,131072,!1),M.ab()},j:function(e){e>>>=0,v?postMessage({cmd:\"cleanupThread\",thread:e}):M.Za(M.Ma[e])},H:O,h:A,S:L,D:ue,F:Ze,T:Ke,Q:d,J:B,P:$,n:Te,E:et,B:Bt,R:kt,C:Wt,p:()=>1,z:function(e,t){e>>>=0,e==t>>>0?setTimeout(()=>ft()):v?postMessage({targetThread:e,cmd:\"checkMailbox\"}):(e=M.Ma[e])&&e.postMessage({cmd:\"checkMailbox\"})},I:function(e,t,n,l){t>>>=0,gt.length=n,l=l>>>0>>>3;for(var y=0;y<n;y++)gt[y]=g()[l+y>>>0];return e=0>e?Ne[-e-1]:zr[e],M.ib=t,t=e.apply(null,gt),M.ib=0,t},K:mt,o:function(e){I&&M.Ma[e>>>0].ref()},s:function(e,t,n){e=t+2097152>>>0<4194305-!!e?(e>>>0)+4294967296*t:NaN,n>>>=0,e=new Date(1e3*e),f()[n>>>2>>>0]=e.getUTCSeconds(),f()[n+4>>>2>>>0]=e.getUTCMinutes(),f()[n+8>>>2>>>0]=e.getUTCHours(),f()[n+12>>>2>>>0]=e.getUTCDate(),f()[n+16>>>2>>>0]=e.getUTCMonth(),f()[n+20>>>2>>>0]=e.getUTCFullYear()-1900,f()[n+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,f()[n+28>>>2>>>0]=e},t:function(e,t,n){e=t+2097152>>>0<4194305-!!e?(e>>>0)+4294967296*t:NaN,n>>>=0,e=new Date(1e3*e),f()[n>>>2>>>0]=e.getSeconds(),f()[n+4>>>2>>>0]=e.getMinutes(),f()[n+8>>>2>>>0]=e.getHours(),f()[n+12>>>2>>>0]=e.getDate(),f()[n+16>>>2>>>0]=e.getMonth(),f()[n+20>>>2>>>0]=e.getFullYear()-1900,f()[n+24>>>2>>>0]=e.getDay(),t=(Ye(e.getFullYear())?Nt:Ht)[e.getMonth()]+e.getDate()-1|0,f()[n+28>>>2>>>0]=t,f()[n+36>>>2>>>0]=-(60*e.getTimezoneOffset()),t=new Date(e.getFullYear(),6,1).getTimezoneOffset();var l=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=(t!=l&&e.getTimezoneOffset()==Math.min(l,t))|0,f()[n+32>>>2>>>0]=e},u:function(e){e>>>=0;var t=new Date(f()[e+20>>>2>>>0]+1900,f()[e+16>>>2>>>0],f()[e+12>>>2>>>0],f()[e+8>>>2>>>0],f()[e+4>>>2>>>0],f()[e>>>2>>>0],0),n=f()[e+32>>>2>>>0],l=t.getTimezoneOffset(),y=new Date(t.getFullYear(),6,1).getTimezoneOffset(),b=new Date(t.getFullYear(),0,1).getTimezoneOffset(),_=Math.min(b,y);return 0>n?f()[e+32>>>2>>>0]=+(y!=b&&_==l):0<n!=(_==l)&&(y=Math.max(b,y),t.setTime(t.getTime()+6e4*((0<n?_:y)-l))),f()[e+24>>>2>>>0]=t.getDay(),n=(Ye(t.getFullYear())?Nt:Ht)[t.getMonth()]+t.getDate()-1|0,f()[e+28>>>2>>>0]=n,f()[e>>>2>>>0]=t.getSeconds(),f()[e+4>>>2>>>0]=t.getMinutes(),f()[e+8>>>2>>>0]=t.getHours(),f()[e+12>>>2>>>0]=t.getDate(),f()[e+16>>>2>>>0]=t.getMonth(),f()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),isNaN(e)?(f()[tr()>>>2>>>0]=61,e=-1):e/=1e3,sr((xe=e,1<=+Math.abs(xe)?0<xe?+Math.floor(xe/4294967296)>>>0:~~+Math.ceil((xe-+(~~xe>>>0))/4294967296)>>>0:0)),e>>>0},q:Gt,r:$t,y:function(e,t,n){function l(oe){return(oe=oe.toTimeString().match(/\\(([A-Za-z ]+)\\)$/))?oe[1]:\"GMT\"}e>>>=0,t>>>=0,n>>>=0;var y=new Date().getFullYear(),b=new Date(y,0,1),_=new Date(y,6,1);y=b.getTimezoneOffset();var J=_.getTimezoneOffset(),Me=Math.max(y,J);w()[e>>>2>>>0]=60*Me,f()[t>>>2>>>0]=+(y!=J),e=l(b),t=l(_),e=jt(e),t=jt(t),J<y?(w()[n>>>2>>>0]=e,w()[n+4>>>2>>>0]=t):(w()[n>>>2>>>0]=t,w()[n+4>>>2>>>0]=e)},c:()=>{De(\"\")},O:function(e,t,n){e>>>=0,t>>>=0,n>>>=0,ht.length=0;for(var l;l=h()[t++>>>0];){var y=l!=105;y&=l!=112,n+=y&&n%8?4:0,ht.push(l==112?w()[n>>>2>>>0]:l==105?f()[n>>>2>>>0]:g()[n>>>3>>>0]),n+=y?8:4}return Ne[e].apply(null,ht)},k:()=>{},i:()=>Date.now(),U:()=>{throw Be+=1,\"unwind\"},A:function(){return 4294901760},e:()=>performance.timeOrigin+performance.now(),f:()=>I?(wr(),rt(br)).cpus().length:navigator.hardwareConcurrency,x:function(e){e>>>=0;var t=h().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var l=t*(1+.2/n);l=Math.min(l,e+100663296);var y=Math;l=Math.max(e,l);e:{y=(y.min.call(y,4294901760,l+(65536-l%65536)%65536)-Q.buffer.byteLength+65535)/65536;try{Q.grow(y),Y();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1},M:zt,N:qt,G:je,g:Vt,m:Jt,v:Xt,l:Qt,a:Q||i.wasmMemory,w:er,d:function(e,t,n,l){return er(e>>>0,t>>>0,n>>>0,l>>>0)}},T=function(){function e(n,l){return T=n.exports,T=Vr(),M.bb.push(T.za),Qe=T.Aa,Ee.unshift(T.V),Oe=l,Se(),T}var t={a:qr};if(we++,i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(n){ne(`Module.instantiateWasm callback failed with error: ${n}`),P(n)}return at(t,function(n){e(n.instance,n.module)}).catch(P),{}}();i._OrtInit=(e,t)=>(i._OrtInit=T.W)(e,t),i._OrtGetLastError=(e,t)=>(i._OrtGetLastError=T.X)(e,t),i._OrtCreateSessionOptions=(e,t,n,l,y,b,_,J,Me,oe)=>(i._OrtCreateSessionOptions=T.Y)(e,t,n,l,y,b,_,J,Me,oe),i._OrtAppendExecutionProvider=(e,t)=>(i._OrtAppendExecutionProvider=T.Z)(e,t),i._OrtAddFreeDimensionOverride=(e,t,n)=>(i._OrtAddFreeDimensionOverride=T._)(e,t,n),i._OrtAddSessionConfigEntry=(e,t,n)=>(i._OrtAddSessionConfigEntry=T.$)(e,t,n),i._OrtReleaseSessionOptions=e=>(i._OrtReleaseSessionOptions=T.aa)(e),i._OrtCreateSession=(e,t,n)=>(i._OrtCreateSession=T.ba)(e,t,n),i._OrtReleaseSession=e=>(i._OrtReleaseSession=T.ca)(e),i._OrtGetInputOutputCount=(e,t,n)=>(i._OrtGetInputOutputCount=T.da)(e,t,n),i._OrtGetInputName=(e,t)=>(i._OrtGetInputName=T.ea)(e,t),i._OrtGetOutputName=(e,t)=>(i._OrtGetOutputName=T.fa)(e,t),i._OrtFree=e=>(i._OrtFree=T.ga)(e),i._OrtCreateTensor=(e,t,n,l,y,b)=>(i._OrtCreateTensor=T.ha)(e,t,n,l,y,b),i._OrtGetTensorData=(e,t,n,l,y)=>(i._OrtGetTensorData=T.ia)(e,t,n,l,y),i._OrtReleaseTensor=e=>(i._OrtReleaseTensor=T.ja)(e),i._OrtCreateRunOptions=(e,t,n,l)=>(i._OrtCreateRunOptions=T.ka)(e,t,n,l),i._OrtAddRunConfigEntry=(e,t,n)=>(i._OrtAddRunConfigEntry=T.la)(e,t,n),i._OrtReleaseRunOptions=e=>(i._OrtReleaseRunOptions=T.ma)(e),i._OrtCreateBinding=e=>(i._OrtCreateBinding=T.na)(e),i._OrtBindInput=(e,t,n)=>(i._OrtBindInput=T.oa)(e,t,n),i._OrtBindOutput=(e,t,n,l)=>(i._OrtBindOutput=T.pa)(e,t,n,l),i._OrtClearBoundOutputs=e=>(i._OrtClearBoundOutputs=T.qa)(e),i._OrtReleaseBinding=e=>(i._OrtReleaseBinding=T.ra)(e),i._OrtRunWithBinding=(e,t,n,l,y)=>(i._OrtRunWithBinding=T.sa)(e,t,n,l,y),i._OrtRun=(e,t,n,l,y,b,_,J)=>(i._OrtRun=T.ta)(e,t,n,l,y,b,_,J),i._OrtEndProfiling=e=>(i._OrtEndProfiling=T.ua)(e);var tr=()=>(tr=T.va)(),lt=i._pthread_self=()=>(lt=i._pthread_self=T.wa)(),rr=i._malloc=e=>(rr=i._malloc=T.xa)(e);i._free=e=>(i._free=T.ya)(e),i.__emscripten_tls_init=()=>(i.__emscripten_tls_init=T.za)();var nr=i.__emscripten_thread_init=(e,t,n,l,y,b)=>(nr=i.__emscripten_thread_init=T.Ba)(e,t,n,l,y,b);i.__emscripten_thread_crashed=()=>(i.__emscripten_thread_crashed=T.Ca)();var ar=(e,t,n,l)=>(ar=T.Da)(e,t,n,l),wt=e=>(wt=T.Ea)(e),Ot=i.__emscripten_thread_exit=e=>(Ot=i.__emscripten_thread_exit=T.Fa)(e),or=()=>(or=T.Ga)(),sr=e=>(sr=T.Ha)(e),ir=(e,t)=>(ir=T.Ia)(e,t),vt=()=>(vt=T.Ja)(),ct=e=>(ct=T.Ka)(e),_t=e=>(_t=T.La)(e);function Vr(){var e=T;e=Object.assign({},e);var t=l=>()=>l()>>>0,n=l=>y=>l(y)>>>0;return e.va=t(e.va),e.wa=t(e.wa),e.xa=n(e.xa),e.emscripten_main_runtime_thread_id=t(e.emscripten_main_runtime_thread_id),e.Ja=t(e.Ja),e.La=n(e.La),e}i.wasmMemory=Q,i.stackAlloc=_t,i.stackSave=vt,i.stackRestore=ct,i.keepRuntimeAlive=()=>0<Be,i.UTF8ToString=$e,i.stringToUTF8=ie,i.lengthBytesUTF8=re,i.ExitStatus=Re,i.PThread=M;var dt;me=function e(){dt||ur(),dt||(me=e)};function ur(){if(!(0<we))if(v)E(i),v||ke(Ee),startWorker(i);else{if(i.preRun)for(typeof i.preRun==\"function\"&&(i.preRun=[i.preRun]);i.preRun.length;)Ie.unshift(i.preRun.shift());ke(Ie),0<we||dt||(dt=!0,i.calledRun=!0,he||(v||ke(Ee),E(i),v||ke(be)))}}return ur(),c.ready}})();typeof vr==\"object\"&&typeof xt==\"object\"?xt.exports=Or:typeof define==\"function\"&&define.amd&&define([],()=>Or)});var Er=tt((On,nn)=>{nn.exports='\"use strict\";var Module={},ENVIRONMENT_IS_NODE=typeof process==\"object\"&&typeof process.versions==\"object\"&&typeof process.versions.node==\"string\";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require(\"worker_threads\"),parentPort=nodeWorkerThreads.parentPort;parentPort.on(\"message\",e=>onmessage({data:e}));var fs=require(\"fs\"),vm=require(\"vm\");Object.assign(global,{self:global,require,Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:e=>vm.runInThisContext(fs.readFileSync(e,\"utf8\"),{filename:e}),postMessage:e=>parentPort.postMessage(e),performance:global.performance||{now:Date.now}})}var initializedJS=!1;function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(\" \");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,e+`\\n`);return}console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(\" \");postMessage({cmd:\"alert\",text:e,threadId:Module._pthread_self()})}var err=threadPrintErr;self.alert=threadAlert,Module.instantiateWasm=(e,t)=>{var a=Module.wasmModule;Module.wasmModule=null;var r=new WebAssembly.Instance(a,e);return t(r)},self.onunhandledrejection=e=>{throw e.reason||e};function handleMessage(e){try{if(e.data.cmd===\"load\"){let a=[];self.onmessage=r=>a.push(r),self.startWorker=r=>{Module=r,postMessage({cmd:\"loaded\"});for(let s of a)handleMessage(s);self.onmessage=handleMessage},Module.wasmModule=e.data.wasmModule;for(const r of e.data.handlers)Module[r]=(...s)=>{postMessage({cmd:\"callHandler\",handler:r,args:s})};if(Module.wasmMemory=e.data.wasmMemory,Module.buffer=Module.wasmMemory.buffer,Module.ENVIRONMENT_IS_PTHREAD=!0,typeof e.data.urlOrBlob==\"string\")importScripts(e.data.urlOrBlob);else{var t=URL.createObjectURL(e.data.urlOrBlob);importScripts(t),URL.revokeObjectURL(t)}ortWasmThreaded(Module)}else if(e.data.cmd===\"run\"){Module.__emscripten_thread_init(e.data.pthread_ptr,0,0,1),Module.__emscripten_thread_mailbox_await(e.data.pthread_ptr),Module.establishStackSpace(),Module.PThread.receiveObjectTransfer(e.data),Module.PThread.threadInitTLS(),initializedJS||(initializedJS=!0);try{Module.invokeEntryPoint(e.data.start_routine,e.data.arg)}catch(a){if(a!=\"unwind\")throw a}}else e.data.cmd===\"cancel\"?Module._pthread_self()&&Module.__emscripten_thread_exit(-1):e.data.target===\"setimmediate\"||(e.data.cmd===\"checkMailbox\"?initializedJS&&Module.checkMailbox():e.data.cmd&&(err(`worker.js received unknown command ${e.data.cmd}`),err(e.data)))}catch(a){throw Module.__emscripten_thread_crashed?.(),a}}self.onmessage=handleMessage;\\n'});var Ar;Ar=gr();var an=_r(),Pt,Ut=!1,pt=!1,Sr=!1,on=u=>{if(u===1)return!1;if(typeof SharedArrayBuffer>\"u\")return typeof self<\"u\"&&!self.crossOriginIsolated&&console.warn(\"env.wasm.numThreads is set to \"+u+\", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.\"),!1;typeof process<\"u\"&&process.versions&&process.versions.node&&console.warn(\"env.wasm.numThreads is set to \"+u+\", however, currently onnxruntime-web does not support multi-threads in Node.js. Please consider using onnxruntime-node for performance critical scenarios.\");try{return typeof MessageChannel<\"u\"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},sn=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},un=(u,c)=>u?c?\"ort-wasm-simd-threaded.wasm\":\"ort-wasm-simd.wasm\":c?\"ort-wasm-threaded.wasm\":\"ort-wasm.wasm\",Tr=async u=>{if(Ut)return Promise.resolve();if(pt)throw new Error(\"multiple calls to 'initializeWebAssembly()' detected.\");if(Sr)throw new Error(\"previous call to 'initializeWebAssembly()' failed.\");pt=!0;let c=u.initTimeout,a=u.numThreads,h=u.simd,f=on(a),w=h&&sn(),g=u.wasmPaths,i=typeof g==\"string\"?g:void 0,E=un(w,f),P=typeof g==\"object\"?g[E]:void 0,U=!1,D=[];if(c>0&&D.push(new Promise(x=>{setTimeout(()=>{U=!0,x()},c)})),D.push(new Promise((x,K)=>{let R=f?an:Ar,I={locateFile:(v,k)=>f&&v.endsWith(\".worker.js\")&&typeof Blob<\"u\"?URL.createObjectURL(new Blob([Er()],{type:\"text/javascript\"})):v.endsWith(\".wasm\")?P||(i??k)+E:k+v};if(f)if(I.numThreads=a,typeof Blob>\"u\")I.mainScriptUrlOrBlob=(void 0)(__dirname,\"ort-wasm-threaded.js\");else{let v=`var ortWasmThreaded=${R.toString()};`;I.mainScriptUrlOrBlob=new Blob([v],{type:\"text/javascript\"})}R(I).then(v=>{pt=!1,Ut=!0,Pt=v,x()},v=>{pt=!1,Sr=!0,K(v)})})),await Promise.race(D),U)throw new Error(`WebAssembly backend initializing failed due to timeout: ${c}ms`)},Z=()=>{if(Ut&&Pt)return Pt;throw new Error(\"WebAssembly is not initialized yet.\")};var q=(u,c)=>{let a=Z(),h=a.lengthBytesUTF8(u)+1,f=a._malloc(h);return a.stringToUTF8(u,f,h),c.push(f),f},nt=(u,c,a,h)=>{if(typeof u==\"object\"&&u!==null){if(a.has(u))throw new Error(\"Circular reference in options\");a.add(u)}Object.entries(u).forEach(([f,w])=>{let g=c?c+f:f;if(typeof w==\"object\")nt(w,g+\".\",a,h);else if(typeof w==\"string\"||typeof w==\"number\")h(g,w.toString());else if(typeof w==\"boolean\")h(g,w?\"1\":\"0\");else throw new Error(`Can't handle extra config type: ${typeof w}`)})},V=u=>{let c=Z(),a=c.stackSave();try{let h=c.stackAlloc(8);c._OrtGetLastError(h,h+4);let f=c.HEAP32[h/4],w=c.HEAPU32[h/4+1],g=w?c.UTF8ToString(w):\"\";throw new Error(`${u} ERROR_CODE: ${f}, ERROR_MESSAGE: ${g}`)}finally{c.stackRestore(a)}};var Mr=u=>{let c=Z(),a=0,h=[],f=u||{};try{if(u?.logSeverityLevel===void 0)f.logSeverityLevel=2;else if(typeof u.logSeverityLevel!=\"number\"||!Number.isInteger(u.logSeverityLevel)||u.logSeverityLevel<0||u.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${u.logSeverityLevel}`);if(u?.logVerbosityLevel===void 0)f.logVerbosityLevel=0;else if(typeof u.logVerbosityLevel!=\"number\"||!Number.isInteger(u.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${u.logVerbosityLevel}`);u?.terminate===void 0&&(f.terminate=!1);let w=0;return u?.tag!==void 0&&(w=q(u.tag,h)),a=c._OrtCreateRunOptions(f.logSeverityLevel,f.logVerbosityLevel,!!f.terminate,w),a===0&&V(\"Can't create run options.\"),u?.extra!==void 0&&nt(u.extra,\"\",new WeakSet,(g,i)=>{let E=q(g,h),P=q(i,h);c._OrtAddRunConfigEntry(a,E,P)!==0&&V(`Can't set a run config entry: ${g} - ${i}.`)}),[a,h]}catch(w){throw a!==0&&c._OrtReleaseRunOptions(a),h.forEach(g=>c._free(g)),w}};var fn=u=>{switch(u){case\"disabled\":return 0;case\"basic\":return 1;case\"extended\":return 2;case\"all\":return 99;default:throw new Error(`unsupported graph optimization level: ${u}`)}},ln=u=>{switch(u){case\"sequential\":return 0;case\"parallel\":return 1;default:throw new Error(`unsupported execution mode: ${u}`)}},cn=u=>{u.extra||(u.extra={}),u.extra.session||(u.extra.session={});let c=u.extra.session;c.use_ort_model_bytes_directly||(c.use_ort_model_bytes_directly=\"1\"),u.executionProviders&&u.executionProviders.some(a=>(typeof a==\"string\"?a:a.name)===\"webgpu\")&&(u.enableMemPattern=!1)},dn=(u,c,a)=>{for(let h of c){let f=typeof h==\"string\"?h:h.name;switch(f){case\"webnn\":if(f=\"WEBNN\",typeof h!=\"string\"){let g=h;if(g?.deviceType){let i=q(\"deviceType\",a),E=q(g.deviceType,a);Z()._OrtAddSessionConfigEntry(u,i,E)!==0&&V(`Can't set a session config entry: 'deviceType' - ${g.deviceType}.`)}if(g?.numThreads){let i=g.numThreads;(typeof i!=\"number\"||!Number.isInteger(i)||i<0)&&(i=0);let E=q(\"numThreads\",a),P=q(i.toString(),a);Z()._OrtAddSessionConfigEntry(u,E,P)!==0&&V(`Can't set a session config entry: 'numThreads' - ${g.numThreads}.`)}if(g?.powerPreference){let i=q(\"powerPreference\",a),E=q(g.powerPreference,a);Z()._OrtAddSessionConfigEntry(u,i,E)!==0&&V(`Can't set a session config entry: 'powerPreference' - ${g.powerPreference}.`)}}break;case\"webgpu\":if(f=\"JS\",typeof h!=\"string\"){let g=h;if(g?.preferredLayout){if(g.preferredLayout!==\"NCHW\"&&g.preferredLayout!==\"NHWC\")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);let i=q(\"preferredLayout\",a),E=q(g.preferredLayout,a);Z()._OrtAddSessionConfigEntry(u,i,E)!==0&&V(`Can't set a session config entry: 'preferredLayout' - ${g.preferredLayout}.`)}}break;case\"wasm\":case\"cpu\":continue;default:throw new Error(`not supported execution provider: ${f}`)}let w=q(f,a);Z()._OrtAppendExecutionProvider(u,w)!==0&&V(`Can't append execution provider: ${f}.`)}},Cr=u=>{let c=Z(),a=0,h=[],f=u||{};cn(f);try{let w=fn(f.graphOptimizationLevel??\"all\"),g=ln(f.executionMode??\"sequential\"),i=typeof f.logId==\"string\"?q(f.logId,h):0,E=f.logSeverityLevel??2;if(!Number.isInteger(E)||E<0||E>4)throw new Error(`log serverity level is not valid: ${E}`);let P=f.logVerbosityLevel??0;if(!Number.isInteger(P)||P<0||P>4)throw new Error(`log verbosity level is not valid: ${P}`);let U=typeof f.optimizedModelFilePath==\"string\"?q(f.optimizedModelFilePath,h):0;if(a=c._OrtCreateSessionOptions(w,!!f.enableCpuMemArena,!!f.enableMemPattern,g,!!f.enableProfiling,0,i,E,P,U),a===0&&V(\"Can't create session options.\"),f.executionProviders&&dn(a,f.executionProviders,h),f.enableGraphCapture!==void 0){if(typeof f.enableGraphCapture!=\"boolean\")throw new Error(`enableGraphCapture must be a boolean value: ${f.enableGraphCapture}`);let D=q(\"enableGraphCapture\",h),x=q(f.enableGraphCapture.toString(),h);c._OrtAddSessionConfigEntry(a,D,x)!==0&&V(`Can't set a session config entry: 'enableGraphCapture' - ${f.enableGraphCapture}.`)}if(f.freeDimensionOverrides)for(let[D,x]of Object.entries(f.freeDimensionOverrides)){if(typeof D!=\"string\")throw new Error(`free dimension override name must be a string: ${D}`);if(typeof x!=\"number\"||!Number.isInteger(x)||x<0)throw new Error(`free dimension override value must be a non-negative integer: ${x}`);let K=q(D,h);c._OrtAddFreeDimensionOverride(a,K,x)!==0&&V(`Can't set a free dimension override: ${D} - ${x}.`)}return f.extra!==void 0&&nt(f.extra,\"\",new WeakSet,(D,x)=>{let K=q(D,h),R=q(x,h);c._OrtAddSessionConfigEntry(a,K,R)!==0&&V(`Can't set a session config entry: ${D} - ${x}.`)}),[a,h]}catch(w){throw a!==0&&c._OrtReleaseSessionOptions(a),h.forEach(g=>c._free(g)),w}};var Rt=u=>{switch(u){case\"int8\":return 3;case\"uint8\":return 2;case\"bool\":return 9;case\"int16\":return 5;case\"uint16\":return 4;case\"int32\":return 6;case\"uint32\":return 12;case\"float16\":return 10;case\"float32\":return 1;case\"float64\":return 11;case\"string\":return 8;case\"int64\":return 7;case\"uint64\":return 13;default:throw new Error(`unsupported data type: ${u}`)}},Dr=u=>{switch(u){case 3:return\"int8\";case 2:return\"uint8\";case 9:return\"bool\";case 5:return\"int16\";case 4:return\"uint16\";case 6:return\"int32\";case 12:return\"uint32\";case 10:return\"float16\";case 1:return\"float32\";case 11:return\"float64\";case 8:return\"string\";case 7:return\"int64\";case 13:return\"uint64\";default:throw new Error(`unsupported data type: ${u}`)}},It=u=>[void 0,4,1,1,2,2,4,8,void 0,1,2,8,4,8,void 0,void 0,void 0][u],Fr=u=>{switch(u){case\"float16\":return typeof Float16Array<\"u\"&&Float16Array.from?Float16Array:Uint16Array;case\"float32\":return Float32Array;case\"uint8\":return Uint8Array;case\"int8\":return Int8Array;case\"uint16\":return Uint16Array;case\"int16\":return Int16Array;case\"int32\":return Int32Array;case\"bool\":return Uint8Array;case\"float64\":return Float64Array;case\"uint32\":return Uint32Array;case\"int64\":return BigInt64Array;case\"uint64\":return BigUint64Array;default:throw new Error(`unsupported type: ${u}`)}},xr=u=>{switch(u){case\"verbose\":return 0;case\"info\":return 1;case\"warning\":return 2;case\"error\":return 3;case\"fatal\":return 4;default:throw new Error(`unsupported logging level: ${u}`)}},Pr=u=>u===\"float32\"||u===\"float16\"||u===\"int32\"||u===\"int64\"||u===\"uint32\"||u===\"uint8\"||u===\"bool\",Ur=u=>{switch(u){case\"none\":return 0;case\"cpu\":return 1;case\"cpu-pinned\":return 2;case\"texture\":return 3;case\"gpu-buffer\":return 4;default:throw new Error(`unsupported data location: ${u}`)}};var Rr=async u=>{if(typeof u==\"string\")if(typeof process<\"u\"&&process.versions&&process.versions.node)try{return new Uint8Array(await(void 0)(u))}catch(c){if(c.code===\"ERR_FS_FILE_TOO_LARGE\"){let a=(void 0)(u),h=[];for await(let f of a)h.push(f);return new Uint8Array(Buffer.concat(h))}throw c}else{let c=await fetch(u);if(!c.ok)throw new Error(`failed to load external data file: ${u}`);let a=c.headers.get(\"Content-Length\"),h=a?parseInt(a,10):0;if(h<1073741824)return new Uint8Array(await c.arrayBuffer());{if(!c.body)throw new Error(`failed to load external data file: ${u}, no response body.`);let f=c.body.getReader(),w;try{w=new ArrayBuffer(h)}catch(i){if(i instanceof RangeError){let E=Math.ceil(h/65536);w=new WebAssembly.Memory({initial:E,maximum:E}).buffer}else throw i}let g=0;for(;;){let{done:i,value:E}=await f.read();if(i)break;let P=E.byteLength;new Uint8Array(w,g,P).set(E),g+=P}return new Uint8Array(w,0,h)}}else return u instanceof Blob?new Uint8Array(await u.arrayBuffer()):u instanceof Uint8Array?u:new Uint8Array(u)};var pn=(u,c)=>{Z()._OrtInit(u,c)!==0&&V(\"Can't initialize onnxruntime.\")},Lr=async u=>{pn(u.wasm.numThreads,xr(u.logLevel))},Br=async(u,c)=>{},ze=new Map,mn=u=>{let c=Z(),a=c.stackSave();try{let h=c.stackAlloc(8);return c._OrtGetInputOutputCount(u,h,h+4)!==0&&V(\"Can't get session input/output count.\"),[c.HEAP32[h/4],c.HEAP32[h/4+1]]}finally{c.stackRestore(a)}},Lt=u=>{let c=Z(),a=c._malloc(u.byteLength);if(a===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${u.byteLength}.`);return c.HEAPU8.set(u,a),[a,u.byteLength]},kr=async(u,c)=>{let a,h,f=Z();Array.isArray(u)?[a,h]=u:u.buffer===f.HEAPU8.buffer?[a,h]=[u.byteOffset,u.byteLength]:[a,h]=Lt(u);let w=0,g=0,i=0,E=[],P=[],U=[];try{if([g,E]=Cr(c),c?.externalData&&f.mountExternalData){let W=[];for(let H of c.externalData){let se=typeof H==\"string\"?H:H.path;W.push(Rr(typeof H==\"string\"?H:H.data).then(ee=>{f.mountExternalData(se,ee)}))}await Promise.all(W)}w=await f._OrtCreateSession(a,h,g),w===0&&V(\"Can't create a session.\");let[D,x]=mn(w),K=!!c?.enableGraphCapture,R=[],I=[],v=[];for(let W=0;W<D;W++){let H=f._OrtGetInputName(w,W);H===0&&V(\"Can't get an input name.\"),P.push(H),R.push(f.UTF8ToString(H))}for(let W=0;W<x;W++){let H=f._OrtGetOutputName(w,W);H===0&&V(\"Can't get an output name.\"),U.push(H);let se=f.UTF8ToString(H);I.push(se)}let k=null;return ze.set(w,[w,P,U,k,K,!1]),[w,R,I]}catch(D){throw P.forEach(x=>f._OrtFree(x)),U.forEach(x=>f._OrtFree(x)),i!==0&&f._OrtReleaseBinding(i),w!==0&&f._OrtReleaseSession(w),D}finally{f._free(a),g!==0&&f._OrtReleaseSessionOptions(g),E.forEach(D=>f._free(D)),f.unmountExternalData?.()}},Wr=u=>{let c=Z(),a=ze.get(u);if(!a)throw new Error(`cannot release session. invalid session id: ${u}`);let[h,f,w,g,i]=a;g&&(i&&c._OrtClearBoundOutputs(g.handle),c._OrtReleaseBinding(g.handle)),c.jsepOnReleaseSession?.(u),f.forEach(E=>c._OrtFree(E)),w.forEach(E=>c._OrtFree(E)),c._OrtReleaseSession(h),ze.delete(u)},Ir=(u,c,a,h,f,w=!1)=>{if(!u){c.push(0);return}let g=Z(),i=u[0],E=u[1],P=u[3],U,D;if(i===\"string\"&&P===\"gpu-buffer\")throw new Error(\"String tensor is not supported on GPU.\");if(w&&P!==\"gpu-buffer\")throw new Error(`External buffer must be provided for input/output index ${f} when enableGraphCapture is true.`);if(P===\"gpu-buffer\"){let R=u[2].gpuBuffer,I=It(Rt(i));D=E.reduce((k,W)=>k*W,1)*I;let v=g.jsepRegisterBuffer;if(!v)throw new Error('Tensor location \"gpu-buffer\" is not supported without using WebGPU.');U=v(h,f,R,D)}else{let R=u[2];if(Array.isArray(R)){D=4*R.length,U=g._malloc(D),a.push(U);let I=U/4;for(let v=0;v<R.length;v++){if(typeof R[v]!=\"string\")throw new TypeError(`tensor data at index ${v} is not a string`);g.HEAPU32[I++]=q(R[v],a)}}else D=R.byteLength,U=g._malloc(D),a.push(U),g.HEAPU8.set(new Uint8Array(R.buffer,R.byteOffset,D),U)}let x=g.stackSave(),K=g.stackAlloc(4*E.length);try{let R=K/4;E.forEach(v=>g.HEAP32[R++]=v);let I=g._OrtCreateTensor(Rt(i),U,D,K,E.length,Ur(P));I===0&&V(`Can't create tensor for input/output. session=${h}, index=${f}.`),c.push(I)}finally{g.stackRestore(x)}},Nr=async(u,c,a,h,f,w)=>{let g=Z(),i=ze.get(u);if(!i)throw new Error(`cannot run inference. invalid session id: ${u}`);let E=i[0],P=i[1],U=i[2],D=i[3],x=i[4],K=i[5],R=c.length,I=h.length,v=0,k=[],W=[],H=[],se=[],ee=g.stackSave(),S=g.stackAlloc(R*4),j=g.stackAlloc(R*4),Ce=g.stackAlloc(I*4),Ue=g.stackAlloc(I*4);try{[v,k]=Mr(w);for(let F=0;F<R;F++)Ir(a[F],W,se,u,c[F],x);for(let F=0;F<I;F++)Ir(f[F],H,se,u,R+h[F],x);let ce=S/4,ne=j/4,Q=Ce/4,Oe=Ue/4;for(let F=0;F<R;F++)g.HEAPU32[ce++]=W[F],g.HEAPU32[ne++]=P[c[F]];for(let F=0;F<I;F++)g.HEAPU32[Q++]=H[F],g.HEAPU32[Oe++]=U[h[F]];g.jsepOnRunStart?.(E);let he;he=await g._OrtRun(E,j,S,R,Ue,I,Ce,v),he!==0&&V(\"failed to call OrtRun().\");let ae=[];for(let F=0;F<I;F++){let ye=g.HEAPU32[Ce/4+F];if(ye===H[F]){ae.push(f[F]);continue}let ve=g.stackSave(),fe=g.stackAlloc(4*4),_e=!1,Y,pe=0;try{g._OrtGetTensorData(ye,fe,fe+4,fe+8,fe+12)!==0&&V(`Can't access output tensor data on index ${F}.`);let Ee=fe/4,be=g.HEAPU32[Ee++];pe=g.HEAPU32[Ee++];let we=g.HEAPU32[Ee++],Le=g.HEAPU32[Ee++],me=[];for(let te=0;te<Le;te++)me.push(g.HEAPU32[we/4+te]);g._OrtFree(we);let Se=me.reduce((te,z)=>te*z,1);Y=Dr(be);let De=D?.outputPreferredLocations[h[F]];if(Y===\"string\"){if(De===\"gpu-buffer\")throw new Error(\"String tensor is not supported on GPU.\");let te=[],z=pe/4;for(let le=0;le<Se;le++){let Fe=g.HEAPU32[z++],Ae=le===Se-1?void 0:g.HEAPU32[z]-Fe;te.push(g.UTF8ToString(Fe,Ae))}ae.push([Y,me,te,\"cpu\"])}else if(De===\"gpu-buffer\"&&Se>0){let te=g.jsepGetBuffer;if(!te)throw new Error('preferredLocation \"gpu-buffer\" is not supported without using WebGPU.');let z=te(pe),le=It(be);if(le===void 0||!Pr(Y))throw new Error(`Unsupported data type: ${Y}`);_e=!0,ae.push([Y,me,{gpuBuffer:z,download:g.jsepCreateDownloader(z,Se*le,Y),dispose:()=>{g._OrtReleaseTensor(ye)}},\"gpu-buffer\"])}else{let te=Fr(Y),z=new te(Se);new Uint8Array(z.buffer,z.byteOffset,z.byteLength).set(g.HEAPU8.subarray(pe,pe+z.byteLength)),ae.push([Y,me,z,\"cpu\"])}}finally{g.stackRestore(ve),Y===\"string\"&&pe&&g._free(pe),_e||g._OrtReleaseTensor(ye)}}return D&&!x&&(g._OrtClearBoundOutputs(D.handle),ze.set(u,[E,P,U,D,x,!1])),ae}finally{g.stackRestore(ee),W.forEach(ce=>g._OrtReleaseTensor(ce)),H.forEach(ce=>g._OrtReleaseTensor(ce)),se.forEach(ce=>g._free(ce)),v!==0&&g._OrtReleaseRunOptions(v),k.forEach(ce=>g._free(ce))}},Hr=u=>{let c=Z(),a=ze.get(u);if(!a)throw new Error(\"invalid session id\");let h=a[0],f=c._OrtEndProfiling(h);f===0&&V(\"Can't get an profile file name.\"),c._OrtFree(f)},Gr=u=>{let c=[];for(let a of u){let h=a[2];!Array.isArray(h)&&\"buffer\"in h&&c.push(h.buffer)}return c};self.onmessage=u=>{let{type:c,in:a}=u.data;try{switch(c){case\"init-wasm\":Tr(a.wasm).then(()=>{Lr(a).then(()=>{postMessage({type:c})},h=>{postMessage({type:c,err:h})})},h=>{postMessage({type:c,err:h})});break;case\"init-ep\":{let{epName:h,env:f}=a;Br(f,h).then(()=>{postMessage({type:c})},w=>{postMessage({type:c,err:w})});break}case\"copy-from\":{let{buffer:h}=a,f=Lt(h);postMessage({type:c,out:f});break}case\"create\":{let{model:h,options:f}=a;kr(h,f).then(w=>{postMessage({type:c,out:w})},w=>{postMessage({type:c,err:w})});break}case\"release\":Wr(a),postMessage({type:c});break;case\"run\":{let{sessionId:h,inputIndices:f,inputs:w,outputIndices:g,options:i}=a;Nr(h,f,w,g,new Array(g.length).fill(null),i).then(E=>{E.some(P=>P[3]!==\"cpu\")?postMessage({type:c,err:\"Proxy does not support non-cpu tensor location.\"}):postMessage({type:c,out:E},Gr([...w,...E]))},E=>{postMessage({type:c,err:E})});break}case\"end-profiling\":Hr(a),postMessage({type:c});break;default:}}catch(h){postMessage({type:c,err:h})}};})();\n";
}), wr, ht, xn, Fo, Co, da, ha, Hr, qr, wg, Lo, ad, sd, ud, ld, fd, cd, pd, ma = E(() => {
	Tt(), od(), Vr(), wr = () => !!Z.wasm.proxy && typeof document < "u", xn = !1, Fo = !1, Co = !1, ha = /* @__PURE__ */ new Map(), Hr = (e, t) => {
		let n = ha.get(e);
		n ? n.push(t) : ha.set(e, [t]);
	}, qr = () => {
		if (xn || !Fo || Co || !ht) throw Error("worker not ready");
	}, wg = (e) => {
		switch (e.data.type) {
			case "init-wasm":
				xn = !1, e.data.err ? (Co = !0, da[1](e.data.err)) : (Fo = !0, da[0]());
				break;
			case "init-ep":
			case "copy-from":
			case "create":
			case "release":
			case "run":
			case "end-profiling": {
				let t = ha.get(e.data.type);
				e.data.err ? t.shift()[1](e.data.err) : t.shift()[0](e.data.out);
				break;
			}
			default:
		}
	}, Lo = typeof document < "u" ? document?.currentScript?.src : void 0, ad = async () => {
		if (!Fo) {
			if (xn) throw Error("multiple calls to 'initWasm()' detected.");
			if (Co) throw Error("previous call to 'initWasm()' failed.");
			if (xn = !0, wr()) return Z.wasm.wasmPaths === void 0 && Lo && Lo.indexOf("blob:") !== 0 && (Z.wasm.wasmPaths = Lo.substr(0, +Lo.lastIndexOf("/") + 1)), new Promise((e, t) => {
				ht?.terminate();
				let n = URL.createObjectURL(new Blob([id()], { type: "text/javascript" }));
				ht = new Worker(n, { name: "ort-wasm-proxy-worker" }), ht.onerror = (e) => t(e), ht.onmessage = wg, URL.revokeObjectURL(n), da = [e, t];
				let r = {
					type: "init-wasm",
					in: Z
				};
				ht.postMessage(r);
			});
			try {
				await Up(Z.wasm), await Jp(Z), Fo = !0;
			} catch (e) {
				throw Co = !0, e;
			} finally {
				xn = !1;
			}
		}
	}, sd = async (e) => {
		if (wr()) return qr(), new Promise((t, n) => {
			Hr("init-ep", [t, n]);
			let r = {
				type: "init-ep",
				in: {
					epName: e,
					env: Z
				}
			};
			ht.postMessage(r);
		});
		await Zp(Z, e);
	}, ud = async (e) => wr() ? (qr(), new Promise((t, n) => {
		Hr("copy-from", [t, n]);
		let r = {
			type: "copy-from",
			in: { buffer: e }
		};
		ht.postMessage(r, [e.buffer]);
	})) : pa(e), ld = async (e, t) => {
		if (wr()) {
			if (t?.preferredOutputLocation) throw Error("session option \"preferredOutputLocation\" is not supported for proxy.");
			return qr(), new Promise((n, r) => {
				Hr("create", [n, r]);
				let i = {
					type: "create",
					in: {
						model: e,
						options: { ...t }
					}
				}, a = [];
				e instanceof Uint8Array && a.push(e.buffer), ht.postMessage(i, a);
			});
		} else return Qp(e, t);
	}, fd = async (e) => {
		if (wr()) return qr(), new Promise((t, n) => {
			Hr("release", [t, n]);
			let r = {
				type: "release",
				in: e
			};
			ht.postMessage(r);
		});
		ed(e);
	}, cd = async (e, t, n, r, i, a) => {
		if (wr()) {
			if (n.some((e) => e[3] !== "cpu")) throw Error("input tensor on GPU is not supported for proxy.");
			if (i.some((e) => e)) throw Error("pre-allocated output tensor is not supported for proxy.");
			return qr(), new Promise((i, o) => {
				Hr("run", [i, o]);
				let s = n, c = {
					type: "run",
					in: {
						sessionId: e,
						inputIndices: t,
						inputs: s,
						outputIndices: r,
						options: a
					}
				};
				ht.postMessage(c, nd(s));
			});
		} else return td(e, t, n, r, i, a);
	}, pd = async (e) => {
		if (wr()) return qr(), new Promise((t, n) => {
			Hr("end-profiling", [t, n]);
			let r = {
				type: "end-profiling",
				in: e
			};
			ht.postMessage(r);
		});
		rd(e);
	};
}), dd, vg, $o, hd = E(() => {
	Tt(), ma(), fa(), ca(), dd = (e, t) => {
		switch (e.location) {
			case "cpu": return [
				e.type,
				e.dims,
				e.data,
				"cpu"
			];
			case "gpu-buffer": return [
				e.type,
				e.dims,
				{ gpuBuffer: e.gpuBuffer },
				"gpu-buffer"
			];
			default: throw Error(`invalid data location: ${e.location} for ${t()}`);
		}
	}, vg = (e) => {
		switch (e[3]) {
			case "cpu": return new Re(e[0], e[2], e[1]);
			case "gpu-buffer": {
				let t = e[0];
				if (!Do(t)) throw Error(`not supported data type: ${t} for deserializing GPU tensor`);
				let { gpuBuffer: n, download: r, dispose: i } = e[2];
				return Re.fromGpuBuffer(n, {
					dataType: t,
					dims: e[1],
					download: r,
					dispose: i
				});
			}
			default: throw Error(`invalid data location: ${e[3]}`);
		}
	}, $o = class {
		async fetchModelAndCopyToWasmMemory(e) {
			return ud(await Tn(e));
		}
		async loadModel(e, t) {
			sr();
			let n;
			n = typeof e == "string" ? typeof process < "u" && process.versions && process.versions.node ? await Tn(e) : await this.fetchModelAndCopyToWasmMemory(e) : e, [this.sessionId, this.inputNames, this.outputNames] = await ld(n, t), ur();
		}
		async dispose() {
			return fd(this.sessionId);
		}
		async run(e, t, n) {
			sr();
			let r = [], i = [];
			Object.entries(e).forEach((e) => {
				let t = e[0], n = e[1], a = this.inputNames.indexOf(t);
				if (a === -1) throw Error(`invalid input '${t}'`);
				r.push(n), i.push(a);
			});
			let a = [], o = [];
			Object.entries(t).forEach((e) => {
				let t = e[0], n = e[1], r = this.outputNames.indexOf(t);
				if (r === -1) throw Error(`invalid output '${t}'`);
				a.push(n), o.push(r);
			});
			let s = r.map((e, t) => dd(e, () => `input "${this.inputNames[i[t]]}"`)), c = a.map((e, t) => e ? dd(e, () => `output "${this.outputNames[o[t]]}"`) : null), l = await cd(this.sessionId, i, s, o, c, n), u = {};
			for (let e = 0; e < l.length; e++) u[this.outputNames[o[e]]] = a[e] ?? vg(l[e]);
			return ur(), u;
		}
		startProfiling() {}
		endProfiling() {
			pd(this.sessionId);
		}
	};
}), _g, ko, md = E(() => {
	Tt(), ma(), hd(), _g = () => {
		if ((typeof Z.wasm.initTimeout != "number" || Z.wasm.initTimeout < 0) && (Z.wasm.initTimeout = 0), typeof Z.wasm.simd != "boolean" && (Z.wasm.simd = !0), typeof Z.wasm.proxy != "boolean" && (Z.wasm.proxy = !1), typeof Z.wasm.trace != "boolean" && (Z.wasm.trace = !1), typeof Z.wasm.numThreads != "number" || !Number.isInteger(Z.wasm.numThreads) || Z.wasm.numThreads <= 0) {
			(typeof self < "u" && !self.crossOriginIsolated || typeof process < "u" && process.versions && process.versions.node) && (Z.wasm.numThreads = 1);
			let e = typeof navigator > "u" ? (void 0)().length : navigator.hardwareConcurrency;
			Z.wasm.numThreads = Math.min(4, Math.ceil((e || 1) / 2));
		}
	}, ko = class {
		async init(e) {
			_g(), await ad(), await sd(e);
		}
		async createInferenceSessionHandler(e, t) {
			let n = new $o();
			return await n.loadModel(e, t), Promise.resolve(n);
		}
	};
}), bd = {};
Pr(bd, { wasmBackend: () => Og });
var Og, gd = E(() => {
	md(), Og = new ko();
});
Tt(), Tt(), Tt();
var ws = "1.17.3", XO = Yo;
{
	let e = (Sp(), or(Ip)).onnxjsBackend;
	Dr("webgl", e, -10);
}
{
	let e = (gd(), or(bd)).wasmBackend;
	Dr("cpu", e, 10), Dr("wasm", e, 10);
}
Object.defineProperty(Z.versions, "web", {
	value: ws,
	enumerable: !0
});
//#endregion
//#region node_modules/zod/lib/index.mjs
var util;
(function(e) {
	e.assertEqual = (e) => e;
	function t(e) {}
	e.assertIs = t;
	function n(e) {
		throw Error();
	}
	e.assertNever = n, e.arrayToEnum = (e) => {
		let t = {};
		for (let n of e) t[n] = n;
		return t;
	}, e.getValidEnumValues = (t) => {
		let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != "number"), r = {};
		for (let e of n) r[e] = t[e];
		return e.objectValues(r);
	}, e.objectValues = (t) => e.objectKeys(t).map(function(e) {
		return t[e];
	}), e.objectKeys = typeof Object.keys == "function" ? (e) => Object.keys(e) : (e) => {
		let t = [];
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
		return t;
	}, e.find = (e, t) => {
		for (let n of e) if (t(n)) return n;
	}, e.isInteger = typeof Number.isInteger == "function" ? (e) => Number.isInteger(e) : (e) => typeof e == "number" && isFinite(e) && Math.floor(e) === e;
	function r(e, t = " | ") {
		return e.map((e) => typeof e == "string" ? `'${e}'` : e).join(t);
	}
	e.joinValues = r, e.jsonStringifyReplacer = (e, t) => typeof t == "bigint" ? t.toString() : t;
})(util ||= {});
var objectUtil;
(function(e) {
	e.mergeShapes = (e, t) => ({
		...e,
		...t
	});
})(objectUtil ||= {});
var ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]), getParsedType = (e) => {
	switch (typeof e) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return isNaN(e) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object": return Array.isArray(e) ? ZodParsedType.array : e === null ? ZodParsedType.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && e instanceof Map ? ZodParsedType.map : typeof Set < "u" && e instanceof Set ? ZodParsedType.set : typeof Date < "u" && e instanceof Date ? ZodParsedType.date : ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
}, ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]), quotelessJson = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"), ZodError = class extends Error {
	constructor(e) {
		super(), this.issues = [], this.addIssue = (e) => {
			this.issues = [...this.issues, e];
		}, this.addIssues = (e = []) => {
			this.issues = [...this.issues, ...e];
		};
		let t = new.target.prototype;
		Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
	}
	get errors() {
		return this.issues;
	}
	format(e) {
		let t = e || function(e) {
			return e.message;
		}, n = { _errors: [] }, r = (e) => {
			for (let i of e.issues) if (i.code === "invalid_union") i.unionErrors.map(r);
			else if (i.code === "invalid_return_type") r(i.returnTypeError);
			else if (i.code === "invalid_arguments") r(i.argumentsError);
			else if (i.path.length === 0) n._errors.push(t(i));
			else {
				let e = n, r = 0;
				for (; r < i.path.length;) {
					let n = i.path[r];
					r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
				}
			}
		};
		return r(this), n;
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(e = (e) => e.message) {
		let t = {}, n = [];
		for (let r of this.issues) r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : n.push(e(r));
		return {
			formErrors: n,
			fieldErrors: t
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (e) => new ZodError(e);
var errorMap = (e, t) => {
	let n;
	switch (e.code) {
		case ZodIssueCode.invalid_type:
			n = e.received === ZodParsedType.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			n = `Invalid literal value, expected ${JSON.stringify(e.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			n = `Unrecognized key(s) in object: ${util.joinValues(e.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			n = "Invalid input";
			break;
		case ZodIssueCode.invalid_union_discriminator:
			n = `Invalid discriminator value. Expected ${util.joinValues(e.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			n = `Invalid enum value. Expected ${util.joinValues(e.options)}, received '${e.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			n = "Invalid function arguments";
			break;
		case ZodIssueCode.invalid_return_type:
			n = "Invalid function return type";
			break;
		case ZodIssueCode.invalid_date:
			n = "Invalid date";
			break;
		case ZodIssueCode.invalid_string:
			typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : util.assertNever(e.validation) : n = e.validation === "regex" ? "Invalid" : `Invalid ${e.validation}`;
			break;
		case ZodIssueCode.too_small:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
			break;
		case ZodIssueCode.too_big:
			n = e.type === "array" ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
			break;
		case ZodIssueCode.custom:
			n = "Invalid input";
			break;
		case ZodIssueCode.invalid_intersection_types:
			n = "Intersection results could not be merged";
			break;
		case ZodIssueCode.not_multiple_of:
			n = `Number must be a multiple of ${e.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			n = "Number must be finite";
			break;
		default: n = t.defaultError, util.assertNever(e);
	}
	return { message: n };
}, overrideErrorMap = errorMap;
function setErrorMap(e) {
	overrideErrorMap = e;
}
function getErrorMap() {
	return overrideErrorMap;
}
var makeIssue = (e) => {
	let { data: t, path: n, errorMaps: r, issueData: i } = e, a = [...n, ...i.path || []], o = {
		...i,
		path: a
	}, s = "", c = r.filter((e) => !!e).slice().reverse();
	for (let e of c) s = e(o, {
		data: t,
		defaultError: s
	}).message;
	return {
		...i,
		path: a,
		message: i.message || s
	};
}, EMPTY_PATH = [];
function addIssueToContext(e, t) {
	let n = makeIssue({
		issueData: t,
		data: e.data,
		path: e.path,
		errorMaps: [
			e.common.contextualErrorMap,
			e.schemaErrorMap,
			getErrorMap(),
			errorMap
		].filter((e) => !!e)
	});
	e.common.issues.push(n);
}
var ParseStatus = class e {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		this.value === "valid" && (this.value = "dirty");
	}
	abort() {
		this.value !== "aborted" && (this.value = "aborted");
	}
	static mergeArray(e, t) {
		let n = [];
		for (let r of t) {
			if (r.status === "aborted") return INVALID;
			r.status === "dirty" && e.dirty(), n.push(r.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
	static async mergeObjectAsync(t, n) {
		let r = [];
		for (let e of n) r.push({
			key: await e.key,
			value: await e.value
		});
		return e.mergeObjectSync(t, r);
	}
	static mergeObjectSync(e, t) {
		let n = {};
		for (let r of t) {
			let { key: t, value: i } = r;
			if (t.status === "aborted" || i.status === "aborted") return INVALID;
			t.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value);
		}
		return {
			status: e.value,
			value: n
		};
	}
}, INVALID = Object.freeze({ status: "aborted" }), DIRTY = (e) => ({
	status: "dirty",
	value: e
}), OK = (e) => ({
	status: "valid",
	value: e
}), isAborted = (e) => e.status === "aborted", isDirty = (e) => e.status === "dirty", isValid = (e) => e.status === "valid", isAsync = (e) => typeof Promise < "u" && e instanceof Promise, errorUtil;
(function(e) {
	e.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, e.toString = (e) => typeof e == "string" ? e : e?.message;
})(errorUtil ||= {});
var ParseInputLazyPath = class {
	constructor(e, t, n, r) {
		this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = r;
	}
	get path() {
		return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
	}
}, handleResult = (e, t) => {
	if (isValid(t)) return {
		success: !0,
		data: t.value
	};
	if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
	return {
		success: !1,
		get error() {
			if (this._error) return this._error;
			let t = new ZodError(e.common.issues);
			return this._error = t, this._error;
		}
	};
};
function processCreateParams(e) {
	if (!e) return {};
	let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
	if (t && (n || r)) throw Error("Can't use \"invalid_type_error\" or \"required_error\" in conjunction with custom error map.");
	return t ? {
		errorMap: t,
		description: i
	} : {
		errorMap: (e, t) => e.code === "invalid_type" ? t.data === void 0 ? { message: r ?? t.defaultError } : { message: n ?? t.defaultError } : { message: t.defaultError },
		description: i
	};
}
var ZodType = class {
	constructor(e) {
		this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
	}
	get description() {
		return this._def.description;
	}
	_getType(e) {
		return getParsedType(e.data);
	}
	_getOrReturnCtx(e, t) {
		return t || {
			common: e.parent.common,
			data: e.data,
			parsedType: getParsedType(e.data),
			schemaErrorMap: this._def.errorMap,
			path: e.path,
			parent: e.parent
		};
	}
	_processInputParams(e) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: e.parent.common,
				data: e.data,
				parsedType: getParsedType(e.data),
				schemaErrorMap: this._def.errorMap,
				path: e.path,
				parent: e.parent
			}
		};
	}
	_parseSync(e) {
		let t = this._parse(e);
		if (isAsync(t)) throw Error("Synchronous parse encountered promise.");
		return t;
	}
	_parseAsync(e) {
		let t = this._parse(e);
		return Promise.resolve(t);
	}
	parse(e, t) {
		let n = this.safeParse(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	safeParse(e, t) {
		var n;
		let r = {
			common: {
				issues: [],
				async: t?.async ?? !1,
				contextualErrorMap: t?.errorMap
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: getParsedType(e)
		};
		return handleResult(r, this._parseSync({
			data: e,
			path: r.path,
			parent: r
		}));
	}
	async parseAsync(e, t) {
		let n = await this.safeParseAsync(e, t);
		if (n.success) return n.data;
		throw n.error;
	}
	async safeParseAsync(e, t) {
		let n = {
			common: {
				issues: [],
				contextualErrorMap: t?.errorMap,
				async: !0
			},
			path: t?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: e,
			parsedType: getParsedType(e)
		}, r = this._parse({
			data: e,
			path: n.path,
			parent: n
		});
		return handleResult(n, await (isAsync(r) ? r : Promise.resolve(r)));
	}
	refine(e, t) {
		let n = (e) => typeof t == "string" || t === void 0 ? { message: t } : typeof t == "function" ? t(e) : t;
		return this._refinement((t, r) => {
			let i = e(t), a = () => r.addIssue({
				code: ZodIssueCode.custom,
				...n(t)
			});
			return typeof Promise < "u" && i instanceof Promise ? i.then((e) => e ? !0 : (a(), !1)) : i ? !0 : (a(), !1);
		});
	}
	refinement(e, t) {
		return this._refinement((n, r) => e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1));
	}
	_refinement(e) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement: e
			}
		});
	}
	superRefine(e) {
		return this._refinement(e);
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this, this._def);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(e) {
		return ZodUnion.create([this, e], this._def);
	}
	and(e) {
		return ZodIntersection.create(this, e, this._def);
	}
	transform(e) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform: e
			}
		});
	}
	default(e) {
		let t = typeof e == "function" ? e : () => e;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: t,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(e) {
		let t = typeof e == "function" ? e : () => e;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: t,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(e) {
		let t = this.constructor;
		return new t({
			...this._def,
			description: e
		});
	}
	pipe(e) {
		return ZodPipeline.create(this, e);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
}, cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[a-z][a-z0-9]*$/, ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/, uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, datetimeRegex = (e) => e.precision ? e.offset ? RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? /* @__PURE__ */ RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : /* @__PURE__ */ RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? /* @__PURE__ */ RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : /* @__PURE__ */ RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function isValidIP(e, t) {
	return !!((t === "v4" || !t) && ipv4Regex.test(e) || (t === "v6" || !t) && ipv6Regex.test(e));
}
var ZodString = class e extends ZodType {
	constructor() {
		super(...arguments), this._regex = (e, t, n) => this.refinement((t) => e.test(t), {
			validation: t,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(n)
		}), this.nonempty = (e) => this.min(1, errorUtil.errToObj(e)), this.trim = () => new e({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		}), this.toLowerCase = () => new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		}), this.toUpperCase = () => new e({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	_parse(e) {
		if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ZodParsedType.string) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: t.parsedType
			}), INVALID;
		}
		let t = new ParseStatus(), n;
		for (let r of this._def.checks) if (r.kind === "min") e.data.length < r.value && (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.too_small,
			minimum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "max") e.data.length > r.value && (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.too_big,
			maximum: r.value,
			type: "string",
			inclusive: !0,
			exact: !1,
			message: r.message
		}), t.dirty());
		else if (r.kind === "length") {
			let i = e.data.length > r.value, a = e.data.length < r.value;
			(i || a) && (n = this._getOrReturnCtx(e, n), i ? addIssueToContext(n, {
				code: ZodIssueCode.too_big,
				maximum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}) : a && addIssueToContext(n, {
				code: ZodIssueCode.too_small,
				minimum: r.value,
				type: "string",
				inclusive: !0,
				exact: !0,
				message: r.message
			}), t.dirty());
		} else if (r.kind === "email") emailRegex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "email",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "emoji") emojiRegex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "emoji",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "uuid") uuidRegex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "uuid",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid") cuidRegex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "cuid",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "cuid2") cuid2Regex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "cuid2",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "ulid") ulidRegex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "ulid",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty());
		else if (r.kind === "url") try {
			new URL(e.data);
		} catch {
			n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: r.message
			}), t.dirty();
		}
		else r.kind === "regex" ? (r.regex.lastIndex = 0, r.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "regex",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.invalid_string,
			validation: {
				includes: r.value,
				position: r.position
			},
			message: r.message
		}), t.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.invalid_string,
			validation: { startsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.invalid_string,
			validation: { endsWith: r.value },
			message: r.message
		}), t.dirty()) : r.kind === "datetime" ? datetimeRegex(r).test(e.data) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.invalid_string,
			validation: "datetime",
			message: r.message
		}), t.dirty()) : r.kind === "ip" ? isValidIP(e.data, r.version) || (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			validation: "ip",
			code: ZodIssueCode.invalid_string,
			message: r.message
		}), t.dirty()) : util.assertNever(r);
		return {
			status: t.value,
			value: e.data
		};
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	email(e) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(e)
		});
	}
	url(e) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(e)
		});
	}
	emoji(e) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(e)
		});
	}
	uuid(e) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(e)
		});
	}
	cuid(e) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(e)
		});
	}
	cuid2(e) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(e)
		});
	}
	ulid(e) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(e)
		});
	}
	ip(e) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(e)
		});
	}
	datetime(e) {
		var t;
		return typeof e == "string" ? this._addCheck({
			kind: "datetime",
			precision: null,
			offset: !1,
			message: e
		}) : this._addCheck({
			kind: "datetime",
			precision: e?.precision === void 0 ? null : e?.precision,
			offset: e?.offset ?? !1,
			...errorUtil.errToObj(e?.message)
		});
	}
	regex(e, t) {
		return this._addCheck({
			kind: "regex",
			regex: e,
			...errorUtil.errToObj(t)
		});
	}
	includes(e, t) {
		return this._addCheck({
			kind: "includes",
			value: e,
			position: t?.position,
			...errorUtil.errToObj(t?.message)
		});
	}
	startsWith(e, t) {
		return this._addCheck({
			kind: "startsWith",
			value: e,
			...errorUtil.errToObj(t)
		});
	}
	endsWith(e, t) {
		return this._addCheck({
			kind: "endsWith",
			value: e,
			...errorUtil.errToObj(t)
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e,
			...errorUtil.errToObj(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e,
			...errorUtil.errToObj(t)
		});
	}
	length(e, t) {
		return this._addCheck({
			kind: "length",
			value: e,
			...errorUtil.errToObj(t)
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((e) => e.kind === "datetime");
	}
	get isEmail() {
		return !!this._def.checks.find((e) => e.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((e) => e.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((e) => e.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((e) => e.kind === "uuid");
	}
	get isCUID() {
		return !!this._def.checks.find((e) => e.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((e) => e.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((e) => e.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((e) => e.kind === "ip");
	}
	get minLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxLength() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
ZodString.create = (e) => {
	var t;
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: e?.coerce ?? !1,
		...processCreateParams(e)
	});
};
function floatSafeRemainder(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r;
	return parseInt(e.toFixed(i).replace(".", "")) % parseInt(t.toFixed(i).replace(".", "")) / 10 ** i;
}
var ZodNumber = class e extends ZodType {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
	}
	_parse(e) {
		if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ZodParsedType.number) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: t.parsedType
			}), INVALID;
		}
		let t, n = new ParseStatus();
		for (let r of this._def.checks) r.kind === "int" ? util.isInteger(e.data) || (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: "integer",
			received: "float",
			message: r.message
		}), n.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.too_small,
			minimum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.too_big,
			maximum: r.value,
			type: "number",
			inclusive: r.inclusive,
			exact: !1,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? floatSafeRemainder(e.data, r.value) !== 0 && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.not_finite,
			message: r.message
		}), n.dirty()) : util.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, errorUtil.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, errorUtil.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, errorUtil.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, errorUtil.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: errorUtil.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	int(e) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(e)
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !1,
			message: errorUtil.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !1,
			message: errorUtil.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: !0,
			message: errorUtil.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: !0,
			message: errorUtil.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: errorUtil.toString(t)
		});
	}
	finite(e) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(e)
		});
	}
	safe(e) {
		return this._addCheck({
			kind: "min",
			inclusive: !0,
			value: -(2 ** 53 - 1),
			message: errorUtil.toString(e)
		})._addCheck({
			kind: "max",
			inclusive: !0,
			value: 2 ** 53 - 1,
			message: errorUtil.toString(e)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
	get isInt() {
		return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && util.isInteger(e.value));
	}
	get isFinite() {
		let e = null, t = null;
		for (let n of this._def.checks) if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
		else n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
		return Number.isFinite(t) && Number.isFinite(e);
	}
};
ZodNumber.create = (e) => new ZodNumber({
	checks: [],
	typeName: ZodFirstPartyTypeKind.ZodNumber,
	coerce: e?.coerce || !1,
	...processCreateParams(e)
});
var ZodBigInt = class e extends ZodType {
	constructor() {
		super(...arguments), this.min = this.gte, this.max = this.lte;
	}
	_parse(e) {
		if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== ZodParsedType.bigint) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.bigint,
				received: t.parsedType
			}), INVALID;
		}
		let t, n = new ParseStatus();
		for (let r of this._def.checks) r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.too_small,
			type: "bigint",
			minimum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.too_big,
			type: "bigint",
			maximum: r.value,
			inclusive: r.inclusive,
			message: r.message
		}), n.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (t = this._getOrReturnCtx(e, t), addIssueToContext(t, {
			code: ZodIssueCode.not_multiple_of,
			multipleOf: r.value,
			message: r.message
		}), n.dirty()) : util.assertNever(r);
		return {
			status: n.value,
			value: e.data
		};
	}
	gte(e, t) {
		return this.setLimit("min", e, !0, errorUtil.toString(t));
	}
	gt(e, t) {
		return this.setLimit("min", e, !1, errorUtil.toString(t));
	}
	lte(e, t) {
		return this.setLimit("max", e, !0, errorUtil.toString(t));
	}
	lt(e, t) {
		return this.setLimit("max", e, !1, errorUtil.toString(t));
	}
	setLimit(t, n, r, i) {
		return new e({
			...this._def,
			checks: [...this._def.checks, {
				kind: t,
				value: n,
				inclusive: r,
				message: errorUtil.toString(i)
			}]
		});
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	positive(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !1,
			message: errorUtil.toString(e)
		});
	}
	negative(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !1,
			message: errorUtil.toString(e)
		});
	}
	nonpositive(e) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: !0,
			message: errorUtil.toString(e)
		});
	}
	nonnegative(e) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: !0,
			message: errorUtil.toString(e)
		});
	}
	multipleOf(e, t) {
		return this._addCheck({
			kind: "multipleOf",
			value: e,
			message: errorUtil.toString(t)
		});
	}
	get minValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e;
	}
	get maxValue() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e;
	}
};
ZodBigInt.create = (e) => {
	var t;
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: e?.coerce ?? !1,
		...processCreateParams(e)
	});
};
var ZodBoolean = class extends ZodType {
	_parse(e) {
		if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ZodParsedType.boolean) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: t.parsedType
			}), INVALID;
		}
		return OK(e.data);
	}
};
ZodBoolean.create = (e) => new ZodBoolean({
	typeName: ZodFirstPartyTypeKind.ZodBoolean,
	coerce: e?.coerce || !1,
	...processCreateParams(e)
});
var ZodDate = class e extends ZodType {
	_parse(e) {
		if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ZodParsedType.date) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: t.parsedType
			}), INVALID;
		}
		if (isNaN(e.data.getTime())) return addIssueToContext(this._getOrReturnCtx(e), { code: ZodIssueCode.invalid_date }), INVALID;
		let t = new ParseStatus(), n;
		for (let r of this._def.checks) r.kind === "min" ? e.data.getTime() < r.value && (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.too_small,
			message: r.message,
			inclusive: !0,
			exact: !1,
			minimum: r.value,
			type: "date"
		}), t.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (n = this._getOrReturnCtx(e, n), addIssueToContext(n, {
			code: ZodIssueCode.too_big,
			message: r.message,
			inclusive: !0,
			exact: !1,
			maximum: r.value,
			type: "date"
		}), t.dirty()) : util.assertNever(r);
		return {
			status: t.value,
			value: new Date(e.data.getTime())
		};
	}
	_addCheck(t) {
		return new e({
			...this._def,
			checks: [...this._def.checks, t]
		});
	}
	min(e, t) {
		return this._addCheck({
			kind: "min",
			value: e.getTime(),
			message: errorUtil.toString(t)
		});
	}
	max(e, t) {
		return this._addCheck({
			kind: "max",
			value: e.getTime(),
			message: errorUtil.toString(t)
		});
	}
	get minDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
	get maxDate() {
		let e = null;
		for (let t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
		return e == null ? null : new Date(e);
	}
};
ZodDate.create = (e) => new ZodDate({
	checks: [],
	coerce: e?.coerce || !1,
	typeName: ZodFirstPartyTypeKind.ZodDate,
	...processCreateParams(e)
});
var ZodSymbol = class extends ZodType {
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.symbol) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: t.parsedType
			}), INVALID;
		}
		return OK(e.data);
	}
};
ZodSymbol.create = (e) => new ZodSymbol({
	typeName: ZodFirstPartyTypeKind.ZodSymbol,
	...processCreateParams(e)
});
var ZodUndefined = class extends ZodType {
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.undefined) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: t.parsedType
			}), INVALID;
		}
		return OK(e.data);
	}
};
ZodUndefined.create = (e) => new ZodUndefined({
	typeName: ZodFirstPartyTypeKind.ZodUndefined,
	...processCreateParams(e)
});
var ZodNull = class extends ZodType {
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.null) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: t.parsedType
			}), INVALID;
		}
		return OK(e.data);
	}
};
ZodNull.create = (e) => new ZodNull({
	typeName: ZodFirstPartyTypeKind.ZodNull,
	...processCreateParams(e)
});
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments), this._any = !0;
	}
	_parse(e) {
		return OK(e.data);
	}
};
ZodAny.create = (e) => new ZodAny({
	typeName: ZodFirstPartyTypeKind.ZodAny,
	...processCreateParams(e)
});
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments), this._unknown = !0;
	}
	_parse(e) {
		return OK(e.data);
	}
};
ZodUnknown.create = (e) => new ZodUnknown({
	typeName: ZodFirstPartyTypeKind.ZodUnknown,
	...processCreateParams(e)
});
var ZodNever = class extends ZodType {
	_parse(e) {
		let t = this._getOrReturnCtx(e);
		return addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: t.parsedType
		}), INVALID;
	}
};
ZodNever.create = (e) => new ZodNever({
	typeName: ZodFirstPartyTypeKind.ZodNever,
	...processCreateParams(e)
});
var ZodVoid = class extends ZodType {
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.undefined) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: t.parsedType
			}), INVALID;
		}
		return OK(e.data);
	}
};
ZodVoid.create = (e) => new ZodVoid({
	typeName: ZodFirstPartyTypeKind.ZodVoid,
	...processCreateParams(e)
});
var ZodArray = class e extends ZodType {
	_parse(e) {
		let { ctx: t, status: n } = this._processInputParams(e), r = this._def;
		if (t.parsedType !== ZodParsedType.array) return addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.array,
			received: t.parsedType
		}), INVALID;
		if (r.exactLength !== null) {
			let e = t.data.length > r.exactLength.value, i = t.data.length < r.exactLength.value;
			(e || i) && (addIssueToContext(t, {
				code: e ? ZodIssueCode.too_big : ZodIssueCode.too_small,
				minimum: i ? r.exactLength.value : void 0,
				maximum: e ? r.exactLength.value : void 0,
				type: "array",
				inclusive: !0,
				exact: !0,
				message: r.exactLength.message
			}), n.dirty());
		}
		if (r.minLength !== null && t.data.length < r.minLength.value && (addIssueToContext(t, {
			code: ZodIssueCode.too_small,
			minimum: r.minLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.minLength.message
		}), n.dirty()), r.maxLength !== null && t.data.length > r.maxLength.value && (addIssueToContext(t, {
			code: ZodIssueCode.too_big,
			maximum: r.maxLength.value,
			type: "array",
			inclusive: !0,
			exact: !1,
			message: r.maxLength.message
		}), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => r.type._parseAsync(new ParseInputLazyPath(t, e, t.path, n)))).then((e) => ParseStatus.mergeArray(n, e));
		let i = [...t.data].map((e, n) => r.type._parseSync(new ParseInputLazyPath(t, e, t.path, n)));
		return ParseStatus.mergeArray(n, i);
	}
	get element() {
		return this._def.type;
	}
	min(t, n) {
		return new e({
			...this._def,
			minLength: {
				value: t,
				message: errorUtil.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxLength: {
				value: t,
				message: errorUtil.toString(n)
			}
		});
	}
	length(t, n) {
		return new e({
			...this._def,
			exactLength: {
				value: t,
				message: errorUtil.toString(n)
			}
		});
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
ZodArray.create = (e, t) => new ZodArray({
	type: e,
	minLength: null,
	maxLength: null,
	exactLength: null,
	typeName: ZodFirstPartyTypeKind.ZodArray,
	...processCreateParams(t)
});
function deepPartialify(e) {
	if (e instanceof ZodObject) {
		let t = {};
		for (let n in e.shape) {
			let r = e.shape[n];
			t[n] = ZodOptional.create(deepPartialify(r));
		}
		return new ZodObject({
			...e._def,
			shape: () => t
		});
	} else if (e instanceof ZodArray) return new ZodArray({
		...e._def,
		type: deepPartialify(e.element)
	});
	else if (e instanceof ZodOptional) return ZodOptional.create(deepPartialify(e.unwrap()));
	else if (e instanceof ZodNullable) return ZodNullable.create(deepPartialify(e.unwrap()));
	else if (e instanceof ZodTuple) return ZodTuple.create(e.items.map((e) => deepPartialify(e)));
	else return e;
}
var ZodObject = class e extends ZodType {
	constructor() {
		super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		let e = this._def.shape(), t = util.objectKeys(e);
		return this._cached = {
			shape: e,
			keys: t
		};
	}
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.object) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: t.parsedType
			}), INVALID;
		}
		let { status: t, ctx: n } = this._processInputParams(e), { shape: r, keys: i } = this._getCached(), a = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) for (let e in n.data) i.includes(e) || a.push(e);
		let o = [];
		for (let e of i) {
			let t = r[e], i = n.data[e];
			o.push({
				key: {
					status: "valid",
					value: e
				},
				value: t._parse(new ParseInputLazyPath(n, i, n.path, e)),
				alwaysSet: e in n.data
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			let e = this._def.unknownKeys;
			if (e === "passthrough") for (let e of a) o.push({
				key: {
					status: "valid",
					value: e
				},
				value: {
					status: "valid",
					value: n.data[e]
				}
			});
			else if (e === "strict") a.length > 0 && (addIssueToContext(n, {
				code: ZodIssueCode.unrecognized_keys,
				keys: a
			}), t.dirty());
			else if (e !== "strip") throw Error("Internal ZodObject error: invalid unknownKeys value.");
		} else {
			let e = this._def.catchall;
			for (let t of a) {
				let r = n.data[t];
				o.push({
					key: {
						status: "valid",
						value: t
					},
					value: e._parse(new ParseInputLazyPath(n, r, n.path, t)),
					alwaysSet: t in n.data
				});
			}
		}
		return n.common.async ? Promise.resolve().then(async () => {
			let e = [];
			for (let t of o) {
				let n = await t.key;
				e.push({
					key: n,
					value: await t.value,
					alwaysSet: t.alwaysSet
				});
			}
			return e;
		}).then((e) => ParseStatus.mergeObjectSync(t, e)) : ParseStatus.mergeObjectSync(t, o);
	}
	get shape() {
		return this._def.shape();
	}
	strict(t) {
		return errorUtil.errToObj, new e({
			...this._def,
			unknownKeys: "strict",
			...t === void 0 ? {} : { errorMap: (e, n) => {
				var r, i, a, o;
				let s = (r = this._def).errorMap?.call(r, e, n).message ?? n.defaultError;
				return e.code === "unrecognized_keys" ? { message: errorUtil.errToObj(t).message ?? s } : { message: s };
			} }
		});
	}
	strip() {
		return new e({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new e({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(t) {
		return new e({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...t
			})
		});
	}
	merge(t) {
		return new e({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...t._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(e, t) {
		return this.augment({ [e]: t });
	}
	catchall(t) {
		return new e({
			...this._def,
			catchall: t
		});
	}
	pick(t) {
		let n = {};
		return util.objectKeys(t).forEach((e) => {
			t[e] && this.shape[e] && (n[e] = this.shape[e]);
		}), new e({
			...this._def,
			shape: () => n
		});
	}
	omit(t) {
		let n = {};
		return util.objectKeys(this.shape).forEach((e) => {
			t[e] || (n[e] = this.shape[e]);
		}), new e({
			...this._def,
			shape: () => n
		});
	}
	deepPartial() {
		return deepPartialify(this);
	}
	partial(t) {
		let n = {};
		return util.objectKeys(this.shape).forEach((e) => {
			let r = this.shape[e];
			t && !t[e] ? n[e] = r : n[e] = r.optional();
		}), new e({
			...this._def,
			shape: () => n
		});
	}
	required(t) {
		let n = {};
		return util.objectKeys(this.shape).forEach((e) => {
			if (t && !t[e]) n[e] = this.shape[e];
			else {
				let t = this.shape[e];
				for (; t instanceof ZodOptional;) t = t._def.innerType;
				n[e] = t;
			}
		}), new e({
			...this._def,
			shape: () => n
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject.create = (e, t) => new ZodObject({
	shape: () => e,
	unknownKeys: "strip",
	catchall: ZodNever.create(),
	typeName: ZodFirstPartyTypeKind.ZodObject,
	...processCreateParams(t)
}), ZodObject.strictCreate = (e, t) => new ZodObject({
	shape: () => e,
	unknownKeys: "strict",
	catchall: ZodNever.create(),
	typeName: ZodFirstPartyTypeKind.ZodObject,
	...processCreateParams(t)
}), ZodObject.lazycreate = (e, t) => new ZodObject({
	shape: e,
	unknownKeys: "strip",
	catchall: ZodNever.create(),
	typeName: ZodFirstPartyTypeKind.ZodObject,
	...processCreateParams(t)
});
var ZodUnion = class extends ZodType {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = this._def.options;
		function r(e) {
			for (let t of e) if (t.result.status === "valid") return t.result;
			for (let n of e) if (n.result.status === "dirty") return t.common.issues.push(...n.ctx.common.issues), n.result;
			let n = e.map((e) => new ZodError(e.ctx.common.issues));
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_union,
				unionErrors: n
			}), INVALID;
		}
		if (t.common.async) return Promise.all(n.map(async (e) => {
			let n = {
				...t,
				common: {
					...t.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await e._parseAsync({
					data: t.data,
					path: t.path,
					parent: n
				}),
				ctx: n
			};
		})).then(r);
		{
			let e, r = [];
			for (let i of n) {
				let n = {
					...t,
					common: {
						...t.common,
						issues: []
					},
					parent: null
				}, a = i._parseSync({
					data: t.data,
					path: t.path,
					parent: n
				});
				if (a.status === "valid") return a;
				a.status === "dirty" && !e && (e = {
					result: a,
					ctx: n
				}), n.common.issues.length && r.push(n.common.issues);
			}
			if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
			let i = r.map((e) => new ZodError(e));
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_union,
				unionErrors: i
			}), INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion.create = (e, t) => new ZodUnion({
	options: e,
	typeName: ZodFirstPartyTypeKind.ZodUnion,
	...processCreateParams(t)
});
var getDiscriminator = (e) => e instanceof ZodLazy ? getDiscriminator(e.schema) : e instanceof ZodEffects ? getDiscriminator(e.innerType()) : e instanceof ZodLiteral ? [e.value] : e instanceof ZodEnum ? e.options : e instanceof ZodNativeEnum ? Object.keys(e.enum) : e instanceof ZodDefault ? getDiscriminator(e._def.innerType) : e instanceof ZodUndefined ? [void 0] : e instanceof ZodNull ? [null] : null, ZodDiscriminatedUnion = class e extends ZodType {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== ZodParsedType.object) return addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.object,
			received: t.parsedType
		}), INVALID;
		let n = this.discriminator, r = t.data[n], i = this.optionsMap.get(r);
		return i ? t.common.async ? i._parseAsync({
			data: t.data,
			path: t.path,
			parent: t
		}) : i._parseSync({
			data: t.data,
			path: t.path,
			parent: t
		}) : (addIssueToContext(t, {
			code: ZodIssueCode.invalid_union_discriminator,
			options: Array.from(this.optionsMap.keys()),
			path: [n]
		}), INVALID);
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	static create(t, n, r) {
		let i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let n = getDiscriminator(e.shape[t]);
			if (!n) throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
			for (let r of n) {
				if (i.has(r)) throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
				i.set(r, e);
			}
		}
		return new e({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator: t,
			options: n,
			optionsMap: i,
			...processCreateParams(r)
		});
	}
};
function mergeValues(e, t) {
	let n = getParsedType(e), r = getParsedType(t);
	if (e === t) return {
		valid: !0,
		data: e
	};
	if (n === ZodParsedType.object && r === ZodParsedType.object) {
		let n = util.objectKeys(t), r = util.objectKeys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = mergeValues(e[n], t[n]);
			if (!r.valid) return { valid: !1 };
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	} else if (n === ZodParsedType.array && r === ZodParsedType.array) {
		if (e.length !== t.length) return { valid: !1 };
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = mergeValues(i, a);
			if (!o.valid) return { valid: !1 };
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	} else if (n === ZodParsedType.date && r === ZodParsedType.date && +e == +t) return {
		valid: !0,
		data: e
	};
	else return { valid: !1 };
}
var ZodIntersection = class extends ZodType {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = (e, r) => {
			if (isAborted(e) || isAborted(r)) return INVALID;
			let i = mergeValues(e.value, r.value);
			return i.valid ? ((isDirty(e) || isDirty(r)) && t.dirty(), {
				status: t.value,
				value: i.data
			}) : (addIssueToContext(n, { code: ZodIssueCode.invalid_intersection_types }), INVALID);
		};
		return n.common.async ? Promise.all([this._def.left._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		})]).then(([e, t]) => r(e, t)) : r(this._def.left._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}), this._def.right._parseSync({
			data: n.data,
			path: n.path,
			parent: n
		}));
	}
};
ZodIntersection.create = (e, t, n) => new ZodIntersection({
	left: e,
	right: t,
	typeName: ZodFirstPartyTypeKind.ZodIntersection,
	...processCreateParams(n)
});
var ZodTuple = class e extends ZodType {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== ZodParsedType.array) return addIssueToContext(n, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.array,
			received: n.parsedType
		}), INVALID;
		if (n.data.length < this._def.items.length) return addIssueToContext(n, {
			code: ZodIssueCode.too_small,
			minimum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), INVALID;
		!this._def.rest && n.data.length > this._def.items.length && (addIssueToContext(n, {
			code: ZodIssueCode.too_big,
			maximum: this._def.items.length,
			inclusive: !0,
			exact: !1,
			type: "array"
		}), t.dirty());
		let r = [...n.data].map((e, t) => {
			let r = this._def.items[t] || this._def.rest;
			return r ? r._parse(new ParseInputLazyPath(n, e, n.path, t)) : null;
		}).filter((e) => !!e);
		return n.common.async ? Promise.all(r).then((e) => ParseStatus.mergeArray(t, e)) : ParseStatus.mergeArray(t, r);
	}
	get items() {
		return this._def.items;
	}
	rest(t) {
		return new e({
			...this._def,
			rest: t
		});
	}
};
ZodTuple.create = (e, t) => {
	if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple({
		items: e,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(t)
	});
};
var ZodRecord = class e extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== ZodParsedType.object) return addIssueToContext(n, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.object,
			received: n.parsedType
		}), INVALID;
		let r = [], i = this._def.keyType, a = this._def.valueType;
		for (let e in n.data) r.push({
			key: i._parse(new ParseInputLazyPath(n, e, n.path, e)),
			value: a._parse(new ParseInputLazyPath(n, n.data[e], n.path, e))
		});
		return n.common.async ? ParseStatus.mergeObjectAsync(t, r) : ParseStatus.mergeObjectSync(t, r);
	}
	get element() {
		return this._def.valueType;
	}
	static create(t, n, r) {
		return n instanceof ZodType ? new e({
			keyType: t,
			valueType: n,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(r)
		}) : new e({
			keyType: ZodString.create(),
			valueType: t,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(n)
		});
	}
}, ZodMap = class extends ZodType {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== ZodParsedType.map) return addIssueToContext(n, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.map,
			received: n.parsedType
		}), INVALID;
		let r = this._def.keyType, i = this._def.valueType, a = [...n.data.entries()].map(([e, t], a) => ({
			key: r._parse(new ParseInputLazyPath(n, e, n.path, [a, "key"])),
			value: i._parse(new ParseInputLazyPath(n, t, n.path, [a, "value"]))
		}));
		if (n.common.async) {
			let e = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (let n of a) {
					let r = await n.key, i = await n.value;
					if (r.status === "aborted" || i.status === "aborted") return INVALID;
					(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
				}
				return {
					status: t.value,
					value: e
				};
			});
		} else {
			let e = /* @__PURE__ */ new Map();
			for (let n of a) {
				let r = n.key, i = n.value;
				if (r.status === "aborted" || i.status === "aborted") return INVALID;
				(r.status === "dirty" || i.status === "dirty") && t.dirty(), e.set(r.value, i.value);
			}
			return {
				status: t.value,
				value: e
			};
		}
	}
};
ZodMap.create = (e, t, n) => new ZodMap({
	valueType: t,
	keyType: e,
	typeName: ZodFirstPartyTypeKind.ZodMap,
	...processCreateParams(n)
});
var ZodSet = class e extends ZodType {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.parsedType !== ZodParsedType.set) return addIssueToContext(n, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.set,
			received: n.parsedType
		}), INVALID;
		let r = this._def;
		r.minSize !== null && n.data.size < r.minSize.value && (addIssueToContext(n, {
			code: ZodIssueCode.too_small,
			minimum: r.minSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.minSize.message
		}), t.dirty()), r.maxSize !== null && n.data.size > r.maxSize.value && (addIssueToContext(n, {
			code: ZodIssueCode.too_big,
			maximum: r.maxSize.value,
			type: "set",
			inclusive: !0,
			exact: !1,
			message: r.maxSize.message
		}), t.dirty());
		let i = this._def.valueType;
		function a(e) {
			let n = /* @__PURE__ */ new Set();
			for (let r of e) {
				if (r.status === "aborted") return INVALID;
				r.status === "dirty" && t.dirty(), n.add(r.value);
			}
			return {
				status: t.value,
				value: n
			};
		}
		let o = [...n.data.values()].map((e, t) => i._parse(new ParseInputLazyPath(n, e, n.path, t)));
		return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
	}
	min(t, n) {
		return new e({
			...this._def,
			minSize: {
				value: t,
				message: errorUtil.toString(n)
			}
		});
	}
	max(t, n) {
		return new e({
			...this._def,
			maxSize: {
				value: t,
				message: errorUtil.toString(n)
			}
		});
	}
	size(e, t) {
		return this.min(e, t).max(e, t);
	}
	nonempty(e) {
		return this.min(1, e);
	}
};
ZodSet.create = (e, t) => new ZodSet({
	valueType: e,
	minSize: null,
	maxSize: null,
	typeName: ZodFirstPartyTypeKind.ZodSet,
	...processCreateParams(t)
});
var ZodFunction = class e extends ZodType {
	constructor() {
		super(...arguments), this.validate = this.implement;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		if (t.parsedType !== ZodParsedType.function) return addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.function,
			received: t.parsedType
		}), INVALID;
		function n(e, n) {
			return makeIssue({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((e) => !!e),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: n
				}
			});
		}
		function r(e, n) {
			return makeIssue({
				data: e,
				path: t.path,
				errorMaps: [
					t.common.contextualErrorMap,
					t.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((e) => !!e),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: n
				}
			});
		}
		let i = { errorMap: t.common.contextualErrorMap }, a = t.data;
		return this._def.returns instanceof ZodPromise ? OK(async (...e) => {
			let t = new ZodError([]), o = await a(...await this._def.args.parseAsync(e, i).catch((r) => {
				throw t.addIssue(n(e, r)), t;
			}));
			return await this._def.returns._def.type.parseAsync(o, i).catch((e) => {
				throw t.addIssue(r(o, e)), t;
			});
		}) : OK((...e) => {
			let t = this._def.args.safeParse(e, i);
			if (!t.success) throw new ZodError([n(e, t.error)]);
			let o = a(...t.data), s = this._def.returns.safeParse(o, i);
			if (!s.success) throw new ZodError([r(o, s.error)]);
			return s.data;
		});
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...t) {
		return new e({
			...this._def,
			args: ZodTuple.create(t).rest(ZodUnknown.create())
		});
	}
	returns(t) {
		return new e({
			...this._def,
			returns: t
		});
	}
	implement(e) {
		return this.parse(e);
	}
	strictImplement(e) {
		return this.parse(e);
	}
	static create(t, n, r) {
		return new e({
			args: t || ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: n || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(r)
		});
	}
}, ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return this._def.getter()._parse({
			data: t.data,
			path: t.path,
			parent: t
		});
	}
};
ZodLazy.create = (e, t) => new ZodLazy({
	getter: e,
	typeName: ZodFirstPartyTypeKind.ZodLazy,
	...processCreateParams(t)
});
var ZodLiteral = class extends ZodType {
	_parse(e) {
		if (e.data !== this._def.value) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				received: t.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			}), INVALID;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral.create = (e, t) => new ZodLiteral({
	value: e,
	typeName: ZodFirstPartyTypeKind.ZodLiteral,
	...processCreateParams(t)
});
function createZodEnum(e, t) {
	return new ZodEnum({
		values: e,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(t)
	});
}
var ZodEnum = class e extends ZodType {
	_parse(e) {
		if (typeof e.data != "string") {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return addIssueToContext(t, {
				expected: util.joinValues(n),
				received: t.parsedType,
				code: ZodIssueCode.invalid_type
			}), INVALID;
		}
		if (this._def.values.indexOf(e.data) === -1) {
			let t = this._getOrReturnCtx(e), n = this._def.values;
			return addIssueToContext(t, {
				received: t.data,
				code: ZodIssueCode.invalid_enum_value,
				options: n
			}), INVALID;
		}
		return OK(e.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Values() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	get Enum() {
		let e = {};
		for (let t of this._def.values) e[t] = t;
		return e;
	}
	extract(t) {
		return e.create(t);
	}
	exclude(t) {
		return e.create(this.options.filter((e) => !t.includes(e)));
	}
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(e) {
		let t = util.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
		if (n.parsedType !== ZodParsedType.string && n.parsedType !== ZodParsedType.number) {
			let e = util.objectValues(t);
			return addIssueToContext(n, {
				expected: util.joinValues(e),
				received: n.parsedType,
				code: ZodIssueCode.invalid_type
			}), INVALID;
		}
		if (t.indexOf(e.data) === -1) {
			let e = util.objectValues(t);
			return addIssueToContext(n, {
				received: n.data,
				code: ZodIssueCode.invalid_enum_value,
				options: e
			}), INVALID;
		}
		return OK(e.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (e, t) => new ZodNativeEnum({
	values: e,
	typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
	...processCreateParams(t)
});
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(e) {
		let { ctx: t } = this._processInputParams(e);
		return t.parsedType !== ZodParsedType.promise && t.common.async === !1 ? (addIssueToContext(t, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.promise,
			received: t.parsedType
		}), INVALID) : OK((t.parsedType === ZodParsedType.promise ? t.data : Promise.resolve(t.data)).then((e) => this._def.type.parseAsync(e, {
			path: t.path,
			errorMap: t.common.contextualErrorMap
		})));
	}
};
ZodPromise.create = (e, t) => new ZodPromise({
	type: e,
	typeName: ZodFirstPartyTypeKind.ZodPromise,
	...processCreateParams(t)
});
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e), r = this._def.effect || null;
		if (r.type === "preprocess") {
			let e = r.transform(n.data);
			return n.common.async ? Promise.resolve(e).then((e) => this._def.schema._parseAsync({
				data: e,
				path: n.path,
				parent: n
			})) : this._def.schema._parseSync({
				data: e,
				path: n.path,
				parent: n
			});
		}
		let i = {
			addIssue: (e) => {
				addIssueToContext(n, e), e.fatal ? t.abort() : t.dirty();
			},
			get path() {
				return n.path;
			}
		};
		if (i.addIssue = i.addIssue.bind(i), r.type === "refinement") {
			let e = (e) => {
				let t = r.refinement(e, i);
				if (n.common.async) return Promise.resolve(t);
				if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return e;
			};
			if (n.common.async === !1) {
				let r = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				});
				return r.status === "aborted" ? INVALID : (r.status === "dirty" && t.dirty(), e(r.value), {
					status: t.value,
					value: r.value
				});
			} else return this._def.schema._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			}).then((n) => n.status === "aborted" ? INVALID : (n.status === "dirty" && t.dirty(), e(n.value).then(() => ({
				status: t.value,
				value: n.value
			}))));
		}
		if (r.type === "transform") if (n.common.async === !1) {
			let e = this._def.schema._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			});
			if (!isValid(e)) return e;
			let a = r.transform(e.value, i);
			if (a instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
			return {
				status: t.value,
				value: a
			};
		} else return this._def.schema._parseAsync({
			data: n.data,
			path: n.path,
			parent: n
		}).then((e) => isValid(e) ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
			status: t.value,
			value: e
		})) : e);
		util.assertNever(r);
	}
};
ZodEffects.create = (e, t, n) => new ZodEffects({
	schema: e,
	typeName: ZodFirstPartyTypeKind.ZodEffects,
	effect: t,
	...processCreateParams(n)
}), ZodEffects.createWithPreprocess = (e, t, n) => new ZodEffects({
	schema: t,
	effect: {
		type: "preprocess",
		transform: e
	},
	typeName: ZodFirstPartyTypeKind.ZodEffects,
	...processCreateParams(n)
});
var ZodOptional = class extends ZodType {
	_parse(e) {
		return this._getType(e) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional.create = (e, t) => new ZodOptional({
	innerType: e,
	typeName: ZodFirstPartyTypeKind.ZodOptional,
	...processCreateParams(t)
});
var ZodNullable = class extends ZodType {
	_parse(e) {
		return this._getType(e) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(e);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable.create = (e, t) => new ZodNullable({
	innerType: e,
	typeName: ZodFirstPartyTypeKind.ZodNullable,
	...processCreateParams(t)
});
var ZodDefault = class extends ZodType {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return t.parsedType === ZodParsedType.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault.create = (e, t) => new ZodDefault({
	innerType: e,
	typeName: ZodFirstPartyTypeKind.ZodDefault,
	defaultValue: typeof t.default == "function" ? t.default : () => t.default,
	...processCreateParams(t)
});
var ZodCatch = class extends ZodType {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = {
			...t,
			common: {
				...t.common,
				issues: []
			}
		}, r = this._def.innerType._parse({
			data: n.data,
			path: n.path,
			parent: { ...n }
		});
		return isAsync(r) ? r.then((e) => ({
			status: "valid",
			value: e.status === "valid" ? e.value : this._def.catchValue({
				get error() {
					return new ZodError(n.common.issues);
				},
				input: n.data
			})
		})) : {
			status: "valid",
			value: r.status === "valid" ? r.value : this._def.catchValue({
				get error() {
					return new ZodError(n.common.issues);
				},
				input: n.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch.create = (e, t) => new ZodCatch({
	innerType: e,
	typeName: ZodFirstPartyTypeKind.ZodCatch,
	catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
	...processCreateParams(t)
});
var ZodNaN = class extends ZodType {
	_parse(e) {
		if (this._getType(e) !== ZodParsedType.nan) {
			let t = this._getOrReturnCtx(e);
			return addIssueToContext(t, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: t.parsedType
			}), INVALID;
		}
		return {
			status: "valid",
			value: e.data
		};
	}
};
ZodNaN.create = (e) => new ZodNaN({
	typeName: ZodFirstPartyTypeKind.ZodNaN,
	...processCreateParams(e)
});
var BRAND = Symbol("zod_brand"), ZodBranded = class extends ZodType {
	_parse(e) {
		let { ctx: t } = this._processInputParams(e), n = t.data;
		return this._def.type._parse({
			data: n,
			path: t.path,
			parent: t
		});
	}
	unwrap() {
		return this._def.type;
	}
}, ZodPipeline = class e extends ZodType {
	_parse(e) {
		let { status: t, ctx: n } = this._processInputParams(e);
		if (n.common.async) return (async () => {
			let e = await this._def.in._parseAsync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? INVALID : e.status === "dirty" ? (t.dirty(), DIRTY(e.value)) : this._def.out._parseAsync({
				data: e.value,
				path: n.path,
				parent: n
			});
		})();
		{
			let e = this._def.in._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			});
			return e.status === "aborted" ? INVALID : e.status === "dirty" ? (t.dirty(), {
				status: "dirty",
				value: e.value
			}) : this._def.out._parseSync({
				data: e.value,
				path: n.path,
				parent: n
			});
		}
	}
	static create(t, n) {
		return new e({
			in: t,
			out: n,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
}, custom = (e, t = {}, n) => e ? ZodAny.create().superRefine((r, i) => {
	var a, o;
	if (!e(r)) {
		let e = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, a = e.fatal ?? n ?? !0, o = typeof e == "string" ? { message: e } : e;
		i.addIssue({
			code: "custom",
			...o,
			fatal: a
		});
	}
}) : ZodAny.create(), late = { object: ZodObject.lazycreate }, ZodFirstPartyTypeKind;
(function(e) {
	e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(ZodFirstPartyTypeKind ||= {});
var instanceOfType = (e, t = { message: `Input not instance of ${e.name}` }) => custom((t) => t instanceof e, t), stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create, ostring = () => stringType().optional(), onumber = () => numberType().optional(), oboolean = () => booleanType().optional(), coerce = {
	string: ((e) => ZodString.create({
		...e,
		coerce: !0
	})),
	number: ((e) => ZodNumber.create({
		...e,
		coerce: !0
	})),
	boolean: ((e) => ZodBoolean.create({
		...e,
		coerce: !0
	})),
	bigint: ((e) => ZodBigInt.create({
		...e,
		coerce: !0
	})),
	date: ((e) => ZodDate.create({
		...e,
		coerce: !0
	}))
}, NEVER = INVALID, z = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	defaultErrorMap: errorMap,
	setErrorMap,
	getErrorMap,
	makeIssue,
	EMPTY_PATH,
	addIssueToContext,
	ParseStatus,
	INVALID,
	DIRTY,
	OK,
	isAborted,
	isDirty,
	isValid,
	isAsync,
	get util() {
		return util;
	},
	get objectUtil() {
		return objectUtil;
	},
	ZodParsedType,
	getParsedType,
	ZodType,
	ZodString,
	ZodNumber,
	ZodBigInt,
	ZodBoolean,
	ZodDate,
	ZodSymbol,
	ZodUndefined,
	ZodNull,
	ZodAny,
	ZodUnknown,
	ZodNever,
	ZodVoid,
	ZodArray,
	ZodObject,
	ZodUnion,
	ZodDiscriminatedUnion,
	ZodIntersection,
	ZodTuple,
	ZodRecord,
	ZodMap,
	ZodSet,
	ZodFunction,
	ZodLazy,
	ZodLiteral,
	ZodEnum,
	ZodNativeEnum,
	ZodPromise,
	ZodEffects,
	ZodTransformer: ZodEffects,
	ZodOptional,
	ZodNullable,
	ZodDefault,
	ZodCatch,
	ZodNaN,
	BRAND,
	ZodBranded,
	ZodPipeline,
	custom,
	Schema: ZodType,
	ZodSchema: ZodType,
	late,
	get ZodFirstPartyTypeKind() {
		return ZodFirstPartyTypeKind;
	},
	coerce,
	any: anyType,
	array: arrayType,
	bigint: bigIntType,
	boolean: booleanType,
	date: dateType,
	discriminatedUnion: discriminatedUnionType,
	effect: effectsType,
	enum: enumType,
	function: functionType,
	instanceof: instanceOfType,
	intersection: intersectionType,
	lazy: lazyType,
	literal: literalType,
	map: mapType,
	nan: nanType,
	nativeEnum: nativeEnumType,
	never: neverType,
	null: nullType,
	nullable: nullableType,
	number: numberType,
	object: objectType,
	oboolean,
	onumber,
	optional: optionalType,
	ostring,
	pipeline: pipelineType,
	preprocess: preprocessType,
	promise: promiseType,
	record: recordType,
	set: setType,
	strictObject: strictObjectType,
	string: stringType,
	symbol: symbolType,
	transformer: effectsType,
	tuple: tupleType,
	undefined: undefinedType,
	union: unionType,
	unknown: unknownType,
	void: voidType,
	NEVER,
	ZodIssueCode,
	quotelessJson,
	ZodError
});
//#endregion
//#region node_modules/@imgly/background-removal/dist/index.mjs
async function imageDecode(e) {
	let t = MimeType.fromString(e.type);
	switch (t.type) {
		case "image/x-alpha8": {
			let n = parseInt(t.params.width), r = parseInt(t.params.height);
			return (0, import_ndarray.default)(await e.arrayBuffer(), [
				r,
				n,
				1
			]);
		}
		case "image/x-rgba8": {
			let n = parseInt(t.params.width), r = parseInt(t.params.height);
			return (0, import_ndarray.default)(await e.arrayBuffer(), [
				r,
				n,
				4
			]);
		}
		case "application/octet-stream":
		case "image/png":
		case "image/jpeg":
		case "image/webp": {
			let t = imageBitmapToImageData(await createImageBitmap(e));
			return (0, import_ndarray.default)(t.data, [
				t.height,
				t.width,
				4
			]);
		}
		default: throw Error(`Invalid format: ${t.type} with params: ${t.params}`);
	}
}
async function imageEncode(e, t = .8, n = "image/png") {
	let [r, i, a] = e.shape;
	switch (n) {
		case "image/x-alpha8":
		case "image/x-rgba8": {
			let t = MimeType.create(n, {
				width: i,
				height: r
			});
			return new Blob([e.data], { type: t.toString() });
		}
		case "image/png":
		case "image/jpeg":
		case "image/webp": {
			let a = new ImageData(new Uint8ClampedArray(e.data), i, r);
			var o = createCanvas(a.width, a.height);
			return o.getContext("2d").putImageData(a, 0, 0), o.convertToBlob({
				quality: t,
				type: n
			});
		}
		default: throw Error(`Invalid format: ${n}`);
	}
}
var MimeType = class e {
	type = "application/octet-stream";
	params = {};
	constructor(e, t) {
		this.type = e, this.params = t;
	}
	toString() {
		let e = [];
		for (let t in this.params) {
			let n = this.params[t];
			e.push(`${t}=${n}`);
		}
		return [this.type, ...e].join(";");
	}
	static create(t, n) {
		return new e(t, n);
	}
	isIdentical(e) {
		return this.type === e.type && this.params === e.params;
	}
	isEqual(e) {
		return this.type === e.type;
	}
	static fromString(t) {
		let [n, ...r] = t.split(";"), i = {};
		for (let e of r) {
			let [t, n] = e.split("=");
			i[t.trim()] = n.trim();
		}
		return new e(n, i);
	}
};
function isAbsoluteURI(e) {
	return (/* @__PURE__ */ RegExp("^(?:[a-z+]+:)?//", "i")).test(e);
}
function ensureAbsoluteURI(e, t) {
	return isAbsoluteURI(e) ? e : new URL(e, t).href;
}
function imageBitmapToImageData(e) {
	var t = createCanvas(e.width, e.height), n = t.getContext("2d");
	return n.drawImage(e, 0, 0), n.getImageData(0, 0, t.width, t.height);
}
function tensorResizeBilinear(e, t, n) {
	let [r, i, a] = e.shape, o = i / t, s = r / n, c = (0, import_ndarray.default)(new Uint8Array(a * t * n), [
		n,
		t,
		a
	]);
	for (let l = 0; l < n; l++) for (let n = 0; n < t; n++) {
		let t = n * o, u = l * s, d = Math.max(Math.floor(t), 0), f = Math.min(Math.ceil(t), i - 1), p = Math.max(Math.floor(u), 0), m = Math.min(Math.ceil(u), r - 1), h = t - d, g = u - p;
		for (let t = 0; t < a; t++) {
			let r = e.get(p, d, t), i = e.get(p, f, t), a = e.get(m, d, t), o = e.get(m, f, t), s = (1 - h) * (1 - g) * r + h * (1 - g) * i + (1 - h) * g * a + h * g * o;
			c.set(l, n, t, Math.round(s));
		}
	}
	return c;
}
function tensorHWCtoBCHW(e, t = [
	128,
	128,
	128
], n = [
	256,
	256,
	256
]) {
	var r = e.data;
	let [i, a, o] = e.shape, s = i * a, c = new Float32Array(3 * s);
	for (let e = 0, i = 0; e < r.length; e += 4, i += 1) c[i] = (r[e] - t[0]) / n[0], c[i + s] = (r[e + 1] - t[1]) / n[1], c[i + s + s] = (r[e + 2] - t[2]) / n[2];
	return (0, import_ndarray.default)(c, [
		1,
		3,
		i,
		a
	]);
}
async function imageSourceToImageData(e, t) {
	return typeof e == "string" && (e = ensureAbsoluteURI(e, t.publicPath), e = new URL(e)), e instanceof URL && (e = await (await fetch(e, {})).blob()), (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) && (e = new Blob([e])), e instanceof Blob && (e = await imageDecode(e)), e;
}
function convertFloat32ToUint8(e) {
	let t = new Uint8Array(e.data.length);
	for (let n = 0; n < e.data.length; n++) t[n] = e.data[n] * 255;
	return (0, import_ndarray.default)(t, e.shape);
}
function createCanvas(e, t) {
	let n;
	if (n = typeof OffscreenCanvas < "u" ? new OffscreenCanvas(e, t) : document.createElement("canvas"), !n) throw Error("Canvas nor OffscreenCanvas are available in the current context.");
	return n;
}
async function loadAsUrl(e, t) {
	return URL.createObjectURL(await loadAsBlob(e, t));
}
async function loadAsBlob(e, t) {
	let n = new URL("resources.json", t.publicPath), r = await fetch(n);
	if (!r.ok) throw Error("Resource metadata not found. Ensure that the config.publicPath is configured correctly.");
	let i = (await r.json())[e];
	if (!i) throw Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);
	let a = i.chunks, o = 0, s = a.map(async (n) => {
		let r = n.offsets[1] - n.offsets[0], a = t.publicPath ? new URL(n.hash, t.publicPath).toString() : n.hash, s = await (await fetch(a, t.fetchArgs)).blob();
		if (r !== s.size) throw Error(`Failed to fetch ${e} with size ${r} but got ${s.size}`);
		return t.progress && (o += r, t.progress(`fetch:${e}`, o, i.size)), s;
	}), c = await Promise.all(s), l = new Blob(c, { type: i.mime });
	if (l.size !== i.size) throw Error(`Failed to fetch ${e} with size ${i.size} but got ${l.size}`);
	return l;
}
var simd = async () => WebAssembly.validate(new Uint8Array([
	0,
	97,
	115,
	109,
	1,
	0,
	0,
	0,
	1,
	5,
	1,
	96,
	0,
	1,
	123,
	3,
	2,
	1,
	0,
	10,
	10,
	1,
	8,
	0,
	65,
	0,
	253,
	15,
	253,
	98,
	11
])), threads = () => (async (e) => {
	try {
		return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
	} catch {
		return !1;
	}
})(new Uint8Array([
	0,
	97,
	115,
	109,
	1,
	0,
	0,
	0,
	1,
	4,
	1,
	96,
	0,
	0,
	3,
	2,
	1,
	0,
	5,
	4,
	1,
	3,
	1,
	1,
	10,
	11,
	1,
	9,
	0,
	65,
	0,
	254,
	16,
	2,
	0,
	26,
	11
]));
async function createOnnxSession(e, t) {
	let n = {
		simd: await simd(),
		threads: await threads(),
		numThreads: navigator.hardwareConcurrency ?? 4,
		webgpu: navigator.gpu !== void 0
	};
	return t.debug && (console.debug("Capabilities:", n), Z.debug = !0, Z.logLevel = "verbose"), Z.wasm.numThreads = n.numThreads, Z.wasm.simd = n.simd, Z.wasm.proxy = t.proxyToWorker, Z.wasm.wasmPaths = {
		"ort-wasm-simd-threaded.wasm": n.simd && n.threads ? await loadAsUrl("/onnxruntime-web/ort-wasm-simd-threaded.wasm", t) : void 0,
		"ort-wasm-simd.wasm": n.simd && !n.threads ? await loadAsUrl("/onnxruntime-web/ort-wasm-simd.wasm", t) : void 0,
		"ort-wasm-threaded.wasm": !n.simd && n.threads ? await loadAsUrl("/onnxruntime-web/ort-wasm-threaded.wasm", t) : void 0,
		"ort-wasm.wasm": !n.simd && !n.threads ? await loadAsUrl("/onnxruntime-web/ort-wasm.wasm", t) : void 0
	}, t.debug && console.debug("ort.env.wasm:", Z.wasm), await Dd.create(e, {
		executionProviders: ["wasm"],
		graphOptimizationLevel: "all",
		executionMode: "parallel",
		enableCpuMemArena: !0
	}).catch((e) => {
		throw Error(`Failed to create session: ${e}. Please check if the publicPath is set correctly.`);
	});
}
async function runOnnxSession(e, t, n) {
	let r = {};
	for (let [e, n] of t) r[e] = new Re("float32", new Float32Array(n.data), n.shape);
	let i = await e.run(r, {}), a = [];
	for (let e of n) {
		let t = i[e], n = t.dims, r = t.data, o = (0, import_ndarray.default)(r, n);
		a.push(o);
	}
	return a;
}
var package_default = {
	name: "@imgly/background-removal",
	version: "1.4.3",
	description: "Background Removal in the Browser",
	keywords: [
		"background-removal",
		"client-side",
		"data-privacy",
		"image-segmentation",
		"image-matting",
		"onnx"
	],
	repository: {
		type: "git",
		url: "git+https://github.com/imgly/background-removal-js.git"
	},
	license: "SEE LICENSE IN LICENSE.md",
	author: {
		name: "IMG.LY GmbH",
		email: "support@img.ly",
		url: "https://img.ly"
	},
	bugs: { email: "support@img.ly" },
	source: "./src/index.ts",
	main: "./dist/index.cjs",
	module: "./dist/index.mjs",
	types: "./dist/src/index.d.ts",
	exports: { ".": {
		require: "./dist/index.cjs",
		import: "./dist/index.mjs",
		types: "./dist/src/index.d.ts"
	} },
	homepage: "https://img.ly/showcases/cesdk/web/background-removal",
	files: [
		"LICENSE.md",
		"README.md",
		"CHANGELOG.md",
		"dist/",
		"bin/"
	],
	scripts: {
		start: "npm run watch",
		clean: "npx rimraf dist",
		test: "true",
		resources: "node ../../scripts/package-resources.mjs",
		"changelog:create": "node ../../scripts/changelog/changelog-create.mjs",
		"changelog:generate": "node ../../scripts/changelog/changelog-generate.mjs",
		build: "npm run clean && npm run types && npm run resources && npm run changelog:generate && node scripts/build.mjs",
		types: " npx tsc --declaration --emitDeclarationOnly --declarationDir dist --declarationMap",
		watch: "npm run clean && npm run resources && npm run changelog:generate && node scripts/watch.mjs",
		"publish:latest": "npm run build && npm publish --tag latest --access public",
		"publish:next": "npm run build && npm publish --tag next --access public",
		"package:pack": "npm run build && npm pack . --pack-destination ../../releases",
		lint: "npx prettier --write ."
	},
	dependencies: {
		"@types/lodash": "~4.14.0",
		"@types/node": "~20.3.0",
		lodash: "~4.17.0",
		ndarray: "~1.0.0",
		"onnxruntime-web": "~1.17.0",
		zod: "~3.21.0"
	},
	devDependencies: {
		assert: "~2.0.0",
		esbuild: "~0.18.0",
		glob: "~10.3.0",
		"npm-dts": "~1.3.0",
		process: "~0.11.0",
		"ts-loader": "~9.4.0",
		tslib: "~2.5.0",
		typescript: "~5.1.0",
		util: "~0.12.0",
		webpack: "~5.85.0",
		"webpack-cli": "~5.1.0"
	}
}, ConfigSchema = z.object({
	publicPath: z.string().optional().describe("The public path to the wasm files and the onnx model.").default("https://staticimgly.com/@imgly/background-removal-data/@${PACKAGE_VERSION}/dist/").transform((e) => e.replace("${PACKAGE_NAME}", package_default.name).replace("${PACKAGE_VERSION}", package_default.version)),
	debug: z.boolean().default(!1).describe("Whether to enable debug logging."),
	proxyToWorker: z.boolean().default(!0).describe("Whether to proxy inference to a web worker."),
	fetchArgs: z.any().default({}).describe("Arguments to pass to fetch when loading the model."),
	progress: z.function().args(z.string(), z.number(), z.number()).returns(z.void()).describe("Progress callback.").optional(),
	model: z.enum(["small", "medium"]).default("medium"),
	output: z.object({
		format: z.enum([
			"image/png",
			"image/jpeg",
			"image/webp",
			"image/x-rgba8",
			"image/x-alpha8"
		]).default("image/png"),
		quality: z.number().default(.8)
	}).default({})
}).default({});
function validateConfig(e) {
	let t = ConfigSchema.parse(e ?? {});
	return t.debug && console.log("Config:", t), t.debug && !t.progress && (t.progress = t.progress ?? ((e, t, n) => {
		console.debug(`Downloading ${e}: ${t} of ${n}`);
	}), crossOriginIsolated || console.debug("Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.")), t;
}
async function initInference(e) {
	e = validateConfig(e), e.debug && console.debug("Loading model...");
	let t = e.model, n = await createOnnxSession(await (await loadAsBlob(`/models/${t}`, e)).arrayBuffer(), e);
	return {
		config: e,
		session: n
	};
}
async function runInference(e, t, n) {
	t.progress && t.progress("compute:inference", 0, 1);
	let r = 1024, [i, a, o] = e.shape, s = (0, import_ndarray.default)((await runOnnxSession(n, [["input", tensorHWCtoBCHW(tensorResizeBilinear(e, r, r))]], ["output"]))[0].data, [
		r,
		r,
		1
	]);
	return s = convertFloat32ToUint8(s), s = tensorResizeBilinear(s, a, i), t.progress && t.progress("compute:inference", 1, 1), s;
}
var src_default = removeBackground, init = (0, import_lodash.memoize)(initInference, (e) => JSON.stringify(e));
async function removeBackground(e, t) {
	let { config: n, session: r } = await init(t), i = await imageSourceToImageData(e, n), [a, o, s] = i.shape, c = await runInference(i, n, r), l = a * o, u = i;
	for (let e = 0; e < l; e += 1) u.data[4 * e + 3] = c.data[e];
	return await imageEncode(u, n.output.quality, n.output.format);
}
//#endregion
export { src_default as default };
