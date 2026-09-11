import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { B as a, b as o, j as s } from "./chunk-WYO6CB5R-WuT6p4uA.js";
//#region ../../node_modules/@iconify/utils/lib/icon/name.js
var c, l, u = e((() => {
	c = (e, t, n, r = "") => {
		let i = e.split(":");
		if (e.slice(0, 1) === "@") {
			if (i.length < 2 || i.length > 3) return null;
			r = i.shift().slice(1);
		}
		if (i.length > 3 || !i.length) return null;
		if (i.length > 1) {
			let e = i.pop(), n = i.pop(), a = {
				provider: i.length > 0 ? i[0] : r,
				prefix: n,
				name: e
			};
			return t && !l(a) ? null : a;
		}
		let a = i[0], o = a.split("-");
		if (o.length > 1) {
			let e = {
				provider: r,
				prefix: o.shift(),
				name: o.join("-")
			};
			return t && !l(e) ? null : e;
		}
		if (n && r === "") {
			let e = {
				provider: r,
				prefix: "",
				name: a
			};
			return t && !l(e, n) ? null : e;
		}
		return null;
	}, l = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
})), d, f, p, m, h = e((() => {
	d = Object.freeze({
		left: 0,
		top: 0,
		width: 16,
		height: 16
	}), f = Object.freeze({
		rotate: 0,
		vFlip: !1,
		hFlip: !1
	}), p = Object.freeze({
		...d,
		...f
	}), m = Object.freeze({
		...p,
		body: "",
		hidden: !1
	});
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/icon/transformations.js
function g(e, t) {
	let n = {};
	!e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
	let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
	return r && (n.rotate = r), n;
}
var _ = e((() => {}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/icon/merge.js
function v(e, t) {
	let n = g(e, t);
	for (let r in m) r in f ? r in e && !(r in n) && (n[r] = f[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
	return n;
}
var y = e((() => {
	h(), _();
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/icon-set/tree.js
function b(e, t) {
	let n = e.icons, r = e.aliases || Object.create(null), i = Object.create(null);
	function a(e) {
		if (n[e]) return i[e] = [];
		if (!(e in i)) {
			i[e] = null;
			let t = r[e] && r[e].parent, n = t && a(t);
			n && (i[e] = [t].concat(n));
		}
		return i[e];
	}
	return (t || Object.keys(n).concat(Object.keys(r))).forEach(a), i;
}
var x = e((() => {}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/icon-set/get-icon.js
function S(e, t, n) {
	let r = e.icons, i = e.aliases || Object.create(null), a = {};
	function o(e) {
		a = v(r[e] || i[e], a);
	}
	return o(t), n.forEach(o), v(e, a);
}
function C(e, t) {
	if (e.icons[t]) return S(e, t, []);
	let n = b(e, [t])[t];
	return n ? S(e, t, n) : null;
}
var w = e((() => {
	y(), x();
})), T, E, D = e((() => {
	h(), T = Object.freeze({
		width: null,
		height: null
	}), E = Object.freeze({
		...T,
		...f
	});
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/svg/size.js
function O(e, t, n) {
	if (t === 1) return e;
	if (n ||= 100, typeof e == "number") return Math.ceil(e * t * n) / n;
	if (typeof e != "string") return e;
	let r = e.split(k);
	if (r === null || !r.length) return e;
	let i = [], a = r.shift(), o = A.test(a);
	for (;;) {
		if (o) {
			let e = parseFloat(a);
			isNaN(e) ? i.push(a) : i.push(Math.ceil(e * t * n) / n);
		} else i.push(a);
		if (a = r.shift(), a === void 0) return i.join("");
		o = !o;
	}
}
var k, A, j = e((() => {
	k = /(-?[0-9.]*[0-9]+[0-9.]*)/g, A = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/svg/defs.js
function M(e, t = "defs") {
	let n = "", r = e.indexOf("<" + t);
	for (; r >= 0;) {
		let i = e.indexOf(">", r), a = e.indexOf("</" + t);
		if (i === -1 || a === -1) break;
		let o = e.indexOf(">", a);
		if (o === -1) break;
		n += e.slice(i + 1, a).trim(), e = e.slice(0, r).trim() + e.slice(o + 1);
	}
	return {
		defs: n,
		content: e
	};
}
function N(e, t) {
	return e ? "<defs>" + e + "</defs>" + t : t;
}
function P(e, t, n) {
	let r = M(e);
	return N(r.defs, t + r.content + n);
}
var F = e((() => {}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/svg/build.js
function I(e, t) {
	let n = {
		...p,
		...e
	}, r = {
		...E,
		...t
	}, i = {
		left: n.left,
		top: n.top,
		width: n.width,
		height: n.height
	}, a = n.body;
	[n, r].forEach((e) => {
		let t = [], n = e.hFlip, r = e.vFlip, o = e.rotate;
		n ? r ? o += 2 : (t.push("translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"), t.push("scale(-1 1)"), i.top = i.left = 0) : r && (t.push("translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"), t.push("scale(1 -1)"), i.top = i.left = 0);
		let s;
		switch (o < 0 && (o -= Math.floor(o / 4) * 4), o %= 4, o) {
			case 1:
				s = i.height / 2 + i.top, t.unshift("rotate(90 " + s.toString() + " " + s.toString() + ")");
				break;
			case 2:
				t.unshift("rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")");
				break;
			case 3:
				s = i.width / 2 + i.left, t.unshift("rotate(-90 " + s.toString() + " " + s.toString() + ")");
				break;
		}
		o % 2 == 1 && (i.left !== i.top && (s = i.left, i.left = i.top, i.top = s), i.width !== i.height && (s = i.width, i.width = i.height, i.height = s)), t.length && (a = P(a, "<g transform=\"" + t.join(" ") + "\">", "</g>"));
	});
	let o = r.width, s = r.height, c = i.width, l = i.height, u, d;
	o === null ? (d = s === null ? "1em" : s === "auto" ? l : s, u = O(d, c / l)) : (u = o === "auto" ? c : o, d = s === null ? O(u, l / c) : s === "auto" ? l : s);
	let f = {}, m = (e, t) => {
		L(t) || (f[e] = t.toString());
	};
	m("width", u), m("height", d);
	let h = [
		i.left,
		i.top,
		c,
		l
	];
	return f.viewBox = h.join(" "), {
		attributes: f,
		viewBox: h,
		body: a
	};
}
var L, R = e((() => {
	h(), D(), j(), F(), L = (e) => e === "unset" || e === "undefined" || e === "none";
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/svg/id.js
function z(e) {
	e = e.replace(/[0-9]+$/, "") || "a";
	let t = H.get(e) || 0;
	return H.set(e, t + 1), t ? `${e}${t}` : e;
}
function B(e) {
	let t = [], n;
	for (; n = V.exec(e);) t.push(n[1]);
	if (!t.length) return e;
	let r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return t.forEach((t) => {
		let n = z(t), i = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		e = e.replace(RegExp("([#;\"])(" + i + ")([\")]|\\.[a-z])", "g"), "$1" + n + r + "$3");
	}), e = e.replace(new RegExp(r, "g"), ""), e;
}
var V, H, U = e((() => {
	V = /\sid="(\S+)"/g, H = /* @__PURE__ */ new Map();
}));
//#endregion
//#region ../../node_modules/@iconify/utils/lib/svg/html.js
function W(e, t) {
	let n = e.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let e in t) n += " " + e + "=\"" + t[e] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + n + ">" + e + "</svg>";
}
var G = e((() => {})), K = e((() => {
	u(), w(), R(), U(), G();
})), q, J, Y, X, Z, Q, $, ee = e((() => {
	s(), i(), n(), K(), q = {
		body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
		height: 80,
		width: 80
	}, J = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ t((e) => {
		for (let t of e) {
			if (!t.name) throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
			if (r.debug("Registering icon pack:", t.name), "loader" in t) Y.set(t.name, t.loader);
			else if ("icons" in t) J.set(t.name, t.icons);
			else throw r.error("Invalid icon loader:", t), Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
		}
	}, "registerIconPacks"), Z = /* @__PURE__ */ t(async (e, t) => {
		let n = c(e, !0, t !== void 0);
		if (!n) throw Error(`Invalid icon name: ${e}`);
		let i = n.prefix || t;
		if (!i) throw Error(`Icon name must contain a prefix: ${e}`);
		let a = J.get(i);
		if (!a) {
			let e = Y.get(i);
			if (!e) throw Error(`Icon set not found: ${n.prefix}`);
			try {
				a = {
					...await e(),
					prefix: i
				}, J.set(i, a);
			} catch (e) {
				throw r.error(e), Error(`Failed to load icon set: ${n.prefix}`);
			}
		}
		let o = C(a, n.name);
		if (!o) throw Error(`Icon not found: ${e}`);
		return o;
	}, "getRegisteredIconData"), Q = /* @__PURE__ */ t(async (e) => {
		try {
			return await Z(e), !0;
		} catch {
			return !1;
		}
	}, "isIconAvailable"), $ = /* @__PURE__ */ t(async (e, t, n) => {
		let i;
		try {
			i = await Z(e, t?.fallbackPrefix);
		} catch (e) {
			r.error(e), i = q;
		}
		let s = I(i, t);
		return a(W(B(s.body), {
			...s.attributes,
			...n
		}), o());
	}, "getIconSVG");
}));
//#endregion
export { q as a, X as i, ee as n, Q as r, $ as t };
