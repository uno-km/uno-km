import { i as e, n as t } from "./rolldown-runtime-DY7j01NX.js";
//#region ../../node_modules/@excalidraw/excalidraw/dist/prod/chunk-SRAX5OIU.js
var n, r, i, a, o, s, c = t((() => {
	n = Object.defineProperty, r = (e, t, r) => t in e ? n(e, t, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: r
	}) : e[t] = r, i = ((t) => typeof e < "u" ? e : typeof Proxy < "u" ? new Proxy(t, { get: (t, n) => (typeof e < "u" ? e : t)[n] }) : t)(function(t) {
		if (typeof e < "u") return e.apply(this, arguments);
		throw Error("Dynamic require of \"" + t + "\" is not supported");
	}), a = (e) => (t) => {
		var n = e[t];
		if (n) return n();
		throw Error("Module not found in bundle: " + t);
	}, o = (e, t) => {
		for (var r in t) n(e, r, {
			get: t[r],
			enumerable: !0
		});
	}, s = (e, t, n) => (r(e, typeof t == "symbol" ? t : t + "", n), n);
}));
//#endregion
export { c as a, s as i, a as n, o as r, i as t };
