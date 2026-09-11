import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, C as i, D as a, N as o, P as s, T as c, V as l, _ as u, a as ee, f as te, h as ne, i as re, j as ie, jt as ae, k as oe, l as se, p as ce, r as le, s as ue, t as de, u as fe, x as pe, y as me, zt as he } from "./src-s9Lposmn.js";
import { h as d, j as ge, p as _e, r as ve, s as f, z as ye } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { t as be } from "./dist-Bv703TYe.js";
//#region ../../node_modules/es-toolkit/dist/compat/function/memoize.mjs
function p(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError("Expected a function");
	let n = function(...r) {
		let i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		let o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (p.Cache || Map)(), n;
}
var xe = e((() => {
	p.Cache = Map;
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function m(e) {
	return e == null || typeof e != "object" && typeof e != "function";
}
var h = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function g(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var _ = e((() => {})), v, y, b, x, S, Se, Ce, we, Te, Ee, De, C, w, T, E, D, O, k, A, j, M, N, P = e((() => {
	v = "[object RegExp]", y = "[object String]", b = "[object Number]", x = "[object Boolean]", S = "[object Arguments]", Se = "[object Symbol]", Ce = "[object Date]", we = "[object Map]", Te = "[object Set]", Ee = "[object Array]", De = "[object ArrayBuffer]", C = "[object Object]", w = "[object DataView]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = "[object Int8Array]", A = "[object Int16Array]", j = "[object Int32Array]", M = "[object Float32Array]", N = "[object Float64Array]";
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isArray.mjs
function Oe(e) {
	return Array.isArray(e);
}
var ke = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function F(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
var I = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isTypedArray.mjs
function L(e) {
	return F(e);
}
var R = e((() => {
	I();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/object/clone.mjs
function Ae(e) {
	if (m(e)) return e;
	let t = g(e);
	if (!je(e)) return {};
	if (Oe(e)) {
		let t = Array.from(e);
		return e.length > 0 && typeof e[0] == "string" && Object.hasOwn(e, "index") && (t.index = e.index, t.input = e.input), t;
	}
	if (L(e)) {
		let t = e, n = t.constructor;
		return new n(t.buffer, t.byteOffset, t.length);
	}
	if (t === "[object ArrayBuffer]") return new ArrayBuffer(e.byteLength);
	if (t === "[object DataView]") {
		let t = e, n = t.buffer, r = t.byteOffset, i = t.byteLength, a = new ArrayBuffer(i), o = new Uint8Array(n, r, i);
		return new Uint8Array(a).set(o), new DataView(a);
	}
	if (t === "[object Boolean]" || t === "[object Number]" || t === "[object String]") {
		let n = e.constructor, r = new n(e.valueOf());
		return t === "[object String]" ? Ne(r, e) : z(r, e), r;
	}
	if (t === "[object Date]") return new Date(Number(e));
	if (t === "[object RegExp]") {
		let t = e, n = new RegExp(t.source, t.flags);
		return n.lastIndex = t.lastIndex, n;
	}
	if (t === "[object Symbol]") return Object(Symbol.prototype.valueOf.call(e));
	if (t === "[object Map]") {
		let t = e, n = /* @__PURE__ */ new Map();
		return t.forEach((e, t) => {
			n.set(t, e);
		}), n;
	}
	if (t === "[object Set]") {
		let t = e, n = /* @__PURE__ */ new Set();
		return t.forEach((e) => {
			n.add(e);
		}), n;
	}
	if (t === "[object Arguments]") {
		let t = e, n = {};
		return z(n, t), n.length = t.length, n[Symbol.iterator] = t[Symbol.iterator], n;
	}
	let n = {};
	return Pe(n, e), z(n, e), Me(n, e), n;
}
function je(e) {
	switch (g(e)) {
		case S:
		case Ee:
		case De:
		case w:
		case x:
		case Ce:
		case M:
		case N:
		case k:
		case A:
		case j:
		case we:
		case b:
		case C:
		case v:
		case Te:
		case y:
		case Se:
		case T:
		case E:
		case D:
		case O: return !0;
		default: return !1;
	}
}
function z(e, t) {
	for (let n in t) Object.hasOwn(t, n) && (e[n] = t[n]);
}
function Me(e, t) {
	let n = Object.getOwnPropertySymbols(t);
	for (let r = 0; r < n.length; r++) {
		let i = n[r];
		Object.prototype.propertyIsEnumerable.call(t, i) && (e[i] = t[i]);
	}
}
function Ne(e, t) {
	let n = t.valueOf().length;
	for (let r in t) Object.hasOwn(t, r) && (Number.isNaN(Number(r)) || Number(r) >= n) && (e[r] = t[r]);
}
function Pe(e, t) {
	let n = Object.getPrototypeOf(t);
	n !== null && typeof t.constructor == "function" && Object.setPrototypeOf(e, n);
}
var Fe = e((() => {
	h(), _(), P(), ke(), R();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/function/noop.mjs
function Ie() {}
var Le = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/clone.mjs
function Re(e) {
	if (m(e)) return e;
	if (Array.isArray(e) || F(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	let t = Object.getPrototypeOf(e);
	if (t == null) return Object.assign(Object.create(t), e);
	let n = t.constructor;
	if (e instanceof Date || e instanceof Map || e instanceof Set) return new n(e);
	if (e instanceof RegExp) {
		let t = new n(e);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof DataView) return new n(e.buffer.slice(0));
	if (e instanceof Error) {
		let t;
		return t = e instanceof AggregateError ? new n(e.errors, e.message, { cause: e.cause }) : new n(e.message, { cause: e.cause }), t.stack = e.stack, Object.assign(t, e), t;
	}
	return typeof File < "u" && e instanceof File ? new n([e], e.name, {
		type: e.type,
		lastModified: e.lastModified
	}) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
var ze = e((() => {
	h(), I();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function Be(e) {
	return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
var Ve = e((() => {})), B, He = e((() => {
	B = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
		return this;
	})();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isBuffer.mjs
function V(e) {
	return B.Buffer !== void 0 && B.Buffer.isBuffer(e);
}
var H = e((() => {
	He();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function Ue(e) {
	return e === "__proto__";
}
var We = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isPlainObject.mjs
function Ge(e) {
	if (typeof e != "object" || !e) return !1;
	if (Object.getPrototypeOf(e) === null) return !0;
	if (Object.prototype.toString.call(e) !== "[object Object]") {
		let t = e[Symbol.toStringTag];
		return t == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${t}]`;
	}
	let t = e;
	for (; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t;
}
var Ke = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function qe(e, t) {
	return U(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function U(e, t, n, r = /* @__PURE__ */ new Map(), i = void 0) {
	let a = i?.(e, t, n, r);
	if (a !== void 0) return a;
	if (m(e)) return e;
	if (r.has(e)) return r.get(e);
	if (Array.isArray(e)) {
		let t = Array(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = U(e[a], a, n, r, i);
		return Object.hasOwn(e, "index") && (t.index = e.index), Object.hasOwn(e, "input") && (t.input = e.input), t;
	}
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof RegExp) {
		let t = new RegExp(e.source, e.flags);
		return t.lastIndex = e.lastIndex, t;
	}
	if (e instanceof Map) {
		let t = /* @__PURE__ */ new Map();
		r.set(e, t);
		for (let [a, o] of e) t.set(a, U(o, a, n, r, i));
		return t;
	}
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Set();
		r.set(e, t);
		for (let a of e) t.add(U(a, void 0, n, r, i));
		return t;
	}
	if (V(e)) return e.subarray();
	if (F(e)) {
		let t = new (Object.getPrototypeOf(e)).constructor(e.length);
		r.set(e, t);
		for (let a = 0; a < e.length; a++) t[a] = U(e[a], a, n, r, i);
		return t;
	}
	if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
	if (e instanceof DataView) {
		let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (typeof File < "u" && e instanceof File) {
		let t = new File([e], e.name, { type: e.type });
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (typeof Blob < "u" && e instanceof Blob) {
		let t = new Blob([e], { type: e.type });
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (e instanceof Error) {
		let t = structuredClone(e);
		return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, t.constructor = e.constructor, W(t, e, n, r, i), t;
	}
	if (e instanceof Boolean) {
		let t = new Boolean(e.valueOf());
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (e instanceof Number) {
		let t = new Number(e.valueOf());
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (e instanceof String) {
		let t = new String(e.valueOf());
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	if (typeof e == "object" && Je(e)) {
		let t = Object.create(Object.getPrototypeOf(e));
		return r.set(e, t), W(t, e, n, r, i), t;
	}
	return e;
}
function W(e, t, n = e, r, i) {
	let a = [...Object.keys(t), ...Be(t)];
	for (let o = 0; o < a.length; o++) {
		let s = a[o], c = Object.getOwnPropertyDescriptor(e, s);
		(c == null || c.writable) && (e[s] = U(t[s], s, n, r, i));
	}
}
function Je(e) {
	switch (g(e)) {
		case S:
		case Ee:
		case De:
		case w:
		case x:
		case Ce:
		case M:
		case N:
		case k:
		case A:
		case j:
		case we:
		case b:
		case C:
		case v:
		case Te:
		case y:
		case Se:
		case T:
		case E:
		case D:
		case O: return !0;
		default: return !1;
	}
}
var Ye = e((() => {
	h(), I(), Ve(), _(), P(), H();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/object/cloneDeepWith.mjs
function Xe(e, t) {
	return qe(e, (n, r, i, a) => {
		let o = t?.(n, r, i, a);
		if (o !== void 0) return o;
		if (typeof e == "object") {
			if (g(e) === "[object Object]" && typeof e.constructor != "function") {
				let t = {};
				return a.set(e, t), W(t, e, i, a), t;
			}
			switch (Object.prototype.toString.call(e)) {
				case b:
				case y:
				case x: {
					let t = new e.constructor(e?.valueOf());
					return W(t, e), t;
				}
				case S: {
					let t = {};
					return W(t, e), t.length = e.length, t[Symbol.iterator] = e[Symbol.iterator], t;
				}
				default: return;
			}
		}
	});
}
var Ze = e((() => {
	_(), P(), Ye();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/object/cloneDeep.mjs
function Qe(e) {
	return Xe(e);
}
var $e = e((() => {
	Ze();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isArguments.mjs
function G(e) {
	return typeof e == "object" && !!e && g(e) === "[object Arguments]";
}
var et = e((() => {
	_();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isObjectLike.mjs
function K(e) {
	return typeof e == "object" && !!e;
}
var tt = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isLength.mjs
function nt(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
var rt = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isArrayLike.mjs
function it(e) {
	return e != null && typeof e != "function" && nt(e.length);
}
var at = e((() => {
	rt();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isArrayLikeObject.mjs
function ot(e) {
	return K(e) && it(e);
}
var st = e((() => {
	at(), tt();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/object/mergeWith.mjs
function ct(e, ...t) {
	let n = t.slice(0, -1), r = t[t.length - 1], i = e;
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		i = q(i, t, r, /* @__PURE__ */ new Map());
	}
	return i;
}
function q(e, t, n, r) {
	if (m(e) && (e = Object(e)), typeof t != "object" || !t) return e;
	if (r.has(t)) return Re(r.get(t));
	if (r.set(t, e), Array.isArray(t)) {
		t = t.slice();
		for (let e = 0; e < t.length; e++) t[e] = t[e] ?? void 0;
	}
	let i = [...Object.keys(t), ...Be(t)];
	for (let a = 0; a < i.length; a++) {
		let o = i[a];
		if (Ue(o)) continue;
		let s = t[o], c = e[o];
		if (G(s) && (s = { ...s }), G(c) && (c = { ...c }), V(s) && (s = Qe(s)), Array.isArray(s)) if (Array.isArray(c)) {
			let e = [], t = Reflect.ownKeys(c);
			for (let n = 0; n < t.length; n++) {
				let r = t[n];
				e[r] = c[r];
			}
			c = e;
		} else if (ot(c)) {
			let e = [];
			for (let t = 0; t < c.length; t++) e[t] = c[t];
			c = e;
		} else c = [];
		let l = n(c, s, o, e, t, r);
		l === void 0 ? Array.isArray(s) || K(c) && K(s) && (Ge(c) || Ge(s) || L(c) || L(s)) ? e[o] = q(c, s, n, r) : c == null && Ge(s) ? e[o] = q({}, s, n, r) : c == null && L(s) ? e[o] = Qe(s) : (c === void 0 || s !== void 0) && (e[o] = s) : e[o] = l;
	}
	return e;
}
var lt = e((() => {
	h(), ze(), Ve(), H(), We(), Ke(), $e(), et(), tt(), st(), R();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/object/merge.mjs
function ut(e, ...t) {
	return ct(e, ...t, Ie);
}
var dt = e((() => {
	Le(), lt();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function ft(e) {
	let t = e?.constructor;
	return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
var pt = e((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function mt(e) {
	if (e == null) return !0;
	if (it(e)) return typeof e.splice != "function" && typeof e != "string" && !V(e) && !L(e) && !G(e) ? !1 : e.length === 0;
	if (typeof e == "object" || typeof e == "function") {
		if (e instanceof Map || e instanceof Set) return e.size === 0;
		let t = Object.keys(e);
		return ft(e) ? t.filter((e) => e !== "constructor").length === 0 : t.length === 0;
	}
	return !0;
}
var ht = e((() => {
	H(), at(), et(), pt(), R();
})), gt = e((() => {
	xe(), Fe(), dt(), ht();
}));
//#endregion
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-ICXQ74PX.mjs
function J(e, t) {
	return e ? At[`curve${e.charAt(0).toUpperCase() + e.slice(1)}`] ?? t : t;
}
function _t(e, t) {
	let n = e.trim();
	if (n) return t.securityLevel === "loose" ? n : (0, kt.sanitizeUrl)(n);
}
function vt(e, t) {
	return !e || !t ? 0 : Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function yt(e) {
	let t, n = 0;
	return e.forEach((e) => {
		n += vt(e, t), t = e;
	}), Z(e, n / 2);
}
function bt(e) {
	return e.length === 1 ? e[0] : yt(e);
}
function xt(e, t, n) {
	let i = structuredClone(n);
	r.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
	let a = Z(i, 25 + e), o = 10 + e * .5, s = Math.atan2(i[0].y - a.y, i[0].x - a.x), c = {
		x: 0,
		y: 0
	};
	return t === "start_left" ? (c.x = Math.sin(s + Math.PI) * o + (i[0].x + a.x) / 2, c.y = -Math.cos(s + Math.PI) * o + (i[0].y + a.y) / 2) : t === "end_right" ? (c.x = Math.sin(s - Math.PI) * o + (i[0].x + a.x) / 2 - 5, c.y = -Math.cos(s - Math.PI) * o + (i[0].y + a.y) / 2 - 5) : t === "end_left" ? (c.x = Math.sin(s) * o + (i[0].x + a.x) / 2 - 5, c.y = -Math.cos(s) * o + (i[0].y + a.y) / 2 - 5) : (c.x = Math.sin(s) * o + (i[0].x + a.x) / 2, c.y = -Math.cos(s) * o + (i[0].y + a.y) / 2), c;
}
function St(e) {
	let t = "", n = "";
	for (let r of e) r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? n = n + r + ";" : t = t + r + ";");
	return {
		style: t,
		labelStyle: n
	};
}
function Ct(e) {
	let t = "";
	for (let n = 0; n < e; n++) t += "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	return t;
}
function wt(e, t) {
	return Q(e, t).height;
}
function Y(e, t) {
	return Q(e, t).width;
}
function Tt(e) {
	return "str" in e;
}
function Et(e, t) {
	return ut({}, e, t);
}
function Dt(e) {
	return e ?? null;
}
function Ot(e, t) {
	let n = Math.round(e.x), r = Math.round(e.y), i = t.replace(/(\d+\.\d+)/g, (e) => Math.round(parseFloat(e)).toString());
	return i.includes(n.toString()) || i.includes(r.toString());
}
var kt, At, jt, Mt, X, Nt, Pt, Ft, It, Z, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Q, Gt, Kt, qt, Jt, $, Yt, Xt, Zt, Qt, $t = e((() => {
	ge(), he(), n(), kt = be(), de(), gt(), At = {
		curveBasis: ie,
		curveBasisClosed: oe,
		curveBasisOpen: a,
		curveBumpX: o,
		curveBumpY: s,
		curveBundle: c,
		curveCardinalClosed: pe,
		curveCardinalOpen: me,
		curveCardinal: i,
		curveCatmullRomClosed: ne,
		curveCatmullRomOpen: ce,
		curveCatmullRom: u,
		curveLinear: l,
		curveLinearClosed: te,
		curveMonotoneX: se,
		curveMonotoneY: fe,
		curveNatural: ue,
		curveStep: ee,
		curveStepAfter: le,
		curveStepBefore: re
	}, jt = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, Mt = /* @__PURE__ */ t(function(e, t) {
		let n = X(e, /(?:init\b)|(?:initialize\b)/), r = {};
		if (Array.isArray(n)) {
			let e = n.map((e) => e.args);
			ye(e), r = ve(r, [...e]);
		} else r = n.args;
		if (!r) return;
		let i = _e(e, t), a = "config";
		return r[a] !== void 0 && (i === "flowchart-v2" && (i = "flowchart"), r[i] = r[a], delete r[a]), r;
	}, "detectInit"), X = /* @__PURE__ */ t(function(e, t = null) {
		try {
			let n = RegExp(`[%]{2}(?![{]${jt.source})(?=[}][%]{2}).*
`, "ig");
			e = e.trim().replace(n, "").replace(/'/gm, "\""), r.debug(`Detecting diagram directive${t === null ? "" : " type:" + t} based on the text:${e}`);
			let i, a = [];
			for (; (i = d.exec(e)) !== null;) if (i.index === d.lastIndex && d.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
				let e = i[1] ? i[1] : i[2], t = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
				a.push({
					type: e,
					args: t
				});
			}
			return a.length === 0 ? {
				type: e,
				args: null
			} : a.length === 1 ? a[0] : a;
		} catch (n) {
			return r.error(`ERROR: ${n.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`), {
				type: void 0,
				args: null
			};
		}
	}, "detectDirective"), Nt = /* @__PURE__ */ t(function(e) {
		return e.replace(d, "");
	}, "removeDirectives"), Pt = /* @__PURE__ */ t(function(e, t) {
		for (let [n, r] of t.entries()) if (r.match(e)) return n;
		return -1;
	}, "isSubstringInArray"), t(J, "interpolateToCurve"), t(_t, "formatUrl"), Ft = /* @__PURE__ */ t((e, ...t) => {
		let n = e.split("."), i = n.length - 1, a = n[i], o = window;
		for (let t = 0; t < i; t++) if (o = o[n[t]], !o) {
			r.error(`Function name: ${e} not found in window`);
			return;
		}
		o[a](...t);
	}, "runFunc"), t(vt, "distance"), t(yt, "traverseEdge"), t(bt, "calcLabelPosition"), It = /* @__PURE__ */ t((e, t = 2) => {
		let n = 10 ** t;
		return Math.round(e * n) / n;
	}, "roundNumber"), Z = /* @__PURE__ */ t((e, t) => {
		let n, r = t;
		for (let t of e) {
			if (n) {
				let e = vt(t, n);
				if (e === 0) return n;
				if (e < r) r -= e;
				else {
					let i = r / e;
					if (i <= 0) return n;
					if (i >= 1) return {
						x: t.x,
						y: t.y
					};
					if (i > 0 && i < 1) return {
						x: It((1 - i) * n.x + i * t.x, 5),
						y: It((1 - i) * n.y + i * t.y, 5)
					};
				}
			}
			n = t;
		}
		throw Error("Could not find a suitable point for the given distance");
	}, "calculatePoint"), Lt = /* @__PURE__ */ t((e, t, n) => {
		r.info(`our points ${JSON.stringify(t)}`), t[0] !== n && (t = t.reverse());
		let i = Z(t, 25), a = e ? 10 : 5, o = Math.atan2(t[0].y - i.y, t[0].x - i.x), s = {
			x: 0,
			y: 0
		};
		return s.x = Math.sin(o) * a + (t[0].x + i.x) / 2, s.y = -Math.cos(o) * a + (t[0].y + i.y) / 2, s;
	}, "calcCardinalityPosition"), t(xt, "calcTerminalLabelPosition"), t(St, "getStylesFromArray"), Rt = 0, zt = /* @__PURE__ */ t(() => (Rt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Rt), "generateId"), t(Ct, "makeRandomHex"), Bt = /* @__PURE__ */ t((e) => Ct(e.length), "random"), Vt = /* @__PURE__ */ t(function() {
		return {
			x: 0,
			y: 0,
			fill: void 0,
			anchor: "start",
			style: "#666",
			width: 100,
			height: 100,
			textMargin: 0,
			rx: 0,
			ry: 0,
			valign: void 0,
			text: ""
		};
	}, "getTextObj"), Ht = /* @__PURE__ */ t(function(e, t) {
		let n = t.text.replace(f.lineBreakRegex, " "), [, r] = $(t.fontSize), i = e.append("text");
		i.attr("x", t.x), i.attr("y", t.y), i.style("text-anchor", t.anchor), i.style("font-family", t.fontFamily), i.style("font-size", r), i.style("font-weight", t.fontWeight), i.attr("fill", t.fill), t.class !== void 0 && i.attr("class", t.class);
		let a = i.append("tspan");
		return a.attr("x", t.x + t.textMargin * 2), a.attr("fill", t.fill), a.text(n), i;
	}, "drawSimpleText"), Ut = p((e, t, n) => {
		if (!e || (n = Object.assign({
			fontSize: 12,
			fontWeight: 400,
			fontFamily: "Arial",
			joinWith: "<br/>"
		}, n), f.lineBreakRegex.test(e))) return e;
		let r = e.split(" ").filter(Boolean), i = [], a = "";
		return r.forEach((e, o) => {
			let s = Y(`${e} `, n), c = Y(a, n);
			if (s > t) {
				let { hyphenatedStrings: r, remainingWord: o } = Wt(e, t, "-", n);
				i.push(a, ...r), a = o;
			} else c + s >= t ? (i.push(a), a = e) : a = [a, e].filter(Boolean).join(" ");
			o + 1 === r.length && i.push(a);
		}), i.filter((e) => e !== "").join(n.joinWith);
	}, (e, t, n) => `${e}${t}${n.fontSize}${n.fontWeight}${n.fontFamily}${n.joinWith}`), Wt = p((e, t, n = "-", r) => {
		r = Object.assign({
			fontSize: 12,
			fontWeight: 400,
			fontFamily: "Arial",
			margin: 0
		}, r);
		let i = [...e], a = [], o = "";
		return i.forEach((e, s) => {
			let c = `${o}${e}`;
			if (Y(c, r) >= t) {
				let e = s + 1, t = i.length === e, r = `${c}${n}`;
				a.push(t ? c : r), o = "";
			} else o = c;
		}), {
			hyphenatedStrings: a,
			remainingWord: o
		};
	}, (e, t, n = "-", r) => `${e}${t}${n}${r.fontSize}${r.fontWeight}${r.fontFamily}`), t(wt, "calculateTextHeight"), t(Y, "calculateTextWidth"), Q = p((e, t) => {
		let { fontSize: n = 12, fontFamily: r = "Arial", fontWeight: i = 400 } = t;
		if (!e) return {
			width: 0,
			height: 0
		};
		let [, a] = $(n), o = ["sans-serif", r], s = e.split(f.lineBreakRegex), c = [], l = ae("body");
		if (!l.remove) return {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		let u = l.append("svg");
		for (let e of o) {
			let t = 0, n = {
				width: 0,
				height: 0,
				lineHeight: 0
			};
			for (let r of s) {
				let o = Vt();
				o.text = r || "​";
				let s = Ht(u, o).style("font-size", a).style("font-weight", i).style("font-family", e), c = (s._groups || s)[0][0].getBBox();
				if (c.width === 0 && c.height === 0) throw Error("svg element not in render tree");
				n.width = Math.round(Math.max(n.width, c.width)), t = Math.round(c.height), n.height += t, n.lineHeight = Math.round(Math.max(n.lineHeight, t));
			}
			c.push(n);
		}
		return u.remove(), c[isNaN(c[1].height) || isNaN(c[1].width) || isNaN(c[1].lineHeight) || c[0].height > c[1].height && c[0].width > c[1].width && c[0].lineHeight > c[1].lineHeight ? 0 : 1];
	}, (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`), Gt = class {
		constructor(e = !1, t) {
			this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
		}
		static {
			t(this, "InitIDGenerator");
		}
	}, qt = /* @__PURE__ */ t(function(e) {
		return Kt ||= document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), Kt.innerHTML = e, unescape(Kt.textContent);
	}, "entityDecode"), t(Tt, "isDetailedError"), Jt = /* @__PURE__ */ t((e, t, n, r) => {
		if (!r) return;
		let i = e.node()?.getBBox();
		i && e.append("text").text(r).attr("text-anchor", "middle").attr("x", i.x + i.width / 2).attr("y", -n).attr("class", t);
	}, "insertTitle"), $ = /* @__PURE__ */ t((e) => {
		if (typeof e == "number") return [e, e + "px"];
		let t = parseInt(e ?? "", 10);
		return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
	}, "parseFontSize"), t(Et, "cleanAndMerge"), Yt = {
		assignWithDepth: ve,
		wrapLabel: Ut,
		calculateTextHeight: wt,
		calculateTextWidth: Y,
		calculateTextDimensions: Q,
		cleanAndMerge: Et,
		detectInit: Mt,
		detectDirective: X,
		isSubstringInArray: Pt,
		interpolateToCurve: J,
		calcLabelPosition: bt,
		calcCardinalityPosition: Lt,
		calcTerminalLabelPosition: xt,
		formatUrl: _t,
		getStylesFromArray: St,
		generateId: zt,
		random: Bt,
		runFunc: Ft,
		entityDecode: qt,
		insertTitle: Jt,
		isLabelCoordinateInPath: Ot,
		parseFontSize: $,
		InitIDGenerator: Gt
	}, Xt = /* @__PURE__ */ t(function(e) {
		let t = e;
		return t = t.replace(/style.*:\S*#.*;/g, function(e) {
			return e.substring(0, e.length - 1);
		}), t = t.replace(/classDef.*:\S*#.*;/g, function(e) {
			return e.substring(0, e.length - 1);
		}), t = t.replace(/#\w+;/g, function(e) {
			let t = e.substring(1, e.length - 1);
			return /^\+?\d+$/.test(t) ? "ﬂ°°" + t + "¶ß" : "ﬂ°" + t + "¶ß";
		}), t;
	}, "encodeEntities"), Zt = /* @__PURE__ */ t(function(e) {
		return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
	}, "decodeEntities"), Qt = /* @__PURE__ */ t((e, t, { counter: n = 0, prefix: r, suffix: i }, a) => a || `${r ? `${r}_` : ""}${e}_${t}_${n}${i ? `_${i}` : ""}`, "getEdgeId"), t(Dt, "handleUndefinedAttr"), t(Ot, "isLabelCoordinateInPath");
}));
//#endregion
export { Fe as C, Ae as S, Yt as _, Zt as a, ht as b, Qt as c, $t as d, J as f, Nt as g, Bt as h, Et as i, St as l, $ as m, wt as n, Xt as o, Tt as p, Y as r, zt as s, Q as t, Dt as u, Ut as v, mt as x, gt as y };
