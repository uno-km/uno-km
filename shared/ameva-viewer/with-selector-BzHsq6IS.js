import { n as e, o as t, t as n } from "./rolldown-runtime-DY7j01NX.js";
import { n as r } from "./jsx-runtime-18mgyzjG.js";
import { t as i } from "./react-dom-BArcbfWT.js";
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function a(e, t, n) {
	return E(e, T(t, n));
}
function o(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function s(e) {
	return e.split("-")[0];
}
function c(e) {
	return e.split("-")[1];
}
function l(e) {
	return e === "x" ? "y" : "x";
}
function u(e) {
	return e === "y" ? "height" : "width";
}
function d(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function f(e) {
	return l(d(e));
}
function p(e, t, n) {
	n === void 0 && (n = !1);
	let r = c(e), i = f(e), a = u(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = v(o)), [o, v(o)];
}
function m(e) {
	let t = v(e);
	return [
		h(e),
		t,
		h(t)
	];
}
function h(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
function g(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? M : j : t ? j : M;
		case "left":
		case "right": return t ? N : P;
		default: return [];
	}
}
function _(e, t, n, r) {
	let i = c(e), a = g(s(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(h)))), a;
}
function v(e) {
	let t = s(e);
	return A[t] + e.slice(t.length);
}
function y(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function b(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : y(e);
}
function x(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
var S, C, w, T, E, D, O, k, A, j, M, N, P, F = e((() => {
	S = [
		"top",
		"right",
		"bottom",
		"left"
	], C = ["start", "end"], w = /*#__PURE__*/ S.reduce((e, t) => e.concat(t, t + "-" + C[0], t + "-" + C[1]), []), T = Math.min, E = Math.max, D = Math.round, O = Math.floor, k = (e) => ({
		x: e,
		y: e
	}), A = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	}, j = ["left", "right"], M = ["right", "left"], N = ["top", "bottom"], P = ["bottom", "top"];
}));
//#endregion
//#region ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function I(e, t, n) {
	let { reference: r, floating: i } = e, a = d(t), o = f(t), l = u(o), p = s(t), m = a === "y", h = r.x + r.width / 2 - i.width / 2, g = r.y + r.height / 2 - i.height / 2, _ = r[l] / 2 - i[l] / 2, v;
	switch (p) {
		case "top":
			v = {
				x: h,
				y: r.y - i.height
			};
			break;
		case "bottom":
			v = {
				x: h,
				y: r.y + r.height
			};
			break;
		case "right":
			v = {
				x: r.x + r.width,
				y: g
			};
			break;
		case "left":
			v = {
				x: r.x - i.width,
				y: g
			};
			break;
		default: v = {
			x: r.x,
			y: r.y
		};
	}
	let y = c(t);
	return y && (v[o] += _ * (y === "end" ? 1 : -1) * (n && m ? -1 : 1)), v;
}
async function L(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = o(t, e), m = b(p), h = s[f ? d === "floating" ? "reference" : "floating" : d], g = x(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(h)) ?? !0 ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
		boundary: l,
		rootBoundary: u,
		strategy: c
	})), _ = d === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), y = await (i.isElement == null ? void 0 : i.isElement(v)) && await (i.getScale == null ? void 0 : i.getScale(v)) || {
		x: 1,
		y: 1
	}, S = x(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: s,
		rect: _,
		offsetParent: v,
		strategy: c
	}) : _);
	return {
		top: (g.top - S.top + m.top) / y.y,
		bottom: (S.bottom - g.bottom + m.bottom) / y.y,
		left: (g.left - S.left + m.left) / y.x,
		right: (S.right - g.right + m.right) / y.x
	};
}
function ee(e, t, n) {
	return (e ? [...n.filter((t) => c(t) === e), ...n.filter((t) => c(t) !== e)] : n.filter((e) => s(e) === e)).filter((n) => e ? c(n) === e || (t ? h(n) !== n : !1) : !0);
}
function R(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function te(e) {
	return S.some((t) => e[t] >= 0);
}
async function ne(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), l = s(n), u = c(n), f = d(n) === "y", p = le.has(l) ? -1 : 1, m = a && f ? -1 : 1, h = o(t, e), { mainAxis: g, crossAxis: _, alignmentAxis: v } = typeof h == "number" ? {
		mainAxis: h,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: h.mainAxis || 0,
		crossAxis: h.crossAxis || 0,
		alignmentAxis: h.alignmentAxis
	};
	return u && typeof v == "number" && (_ = u === "end" ? v * -1 : v), f ? {
		x: _ * m,
		y: g * p
	} : {
		x: g * p,
		y: _ * m
	};
}
var re, ie, ae, oe, se, ce, le, ue, de, fe, pe, me = e((() => {
	F(), re = 50, ie = async (e, t, n) => {
		let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
			...o,
			detectOverflow: L
		}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}), { x: u, y: d } = I(l, r, c), f = r, p = 0, m = {};
		for (let n = 0; n < a.length; n++) {
			let h = a[n];
			if (!h) continue;
			let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
				x: u,
				y: d,
				initialPlacement: r,
				placement: f,
				strategy: i,
				middlewareData: m,
				rects: l,
				platform: s,
				elements: {
					reference: e,
					floating: t
				}
			});
			u = v ?? u, d = y ?? d, m[g] = {
				...m[g],
				...b
			}, x && p < re && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
				reference: e,
				floating: t,
				strategy: i
			}) : x.rects), {x: u, y: d} = I(l, f, c)), n = -1);
		}
		return {
			x: u,
			y: d,
			placement: f,
			strategy: i,
			middlewareData: m
		};
	}, ae = (e) => ({
		name: "arrow",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, rects: s, platform: l, elements: d, middlewareData: p } = t, { element: m, padding: h = 0 } = o(e, t) || {};
			if (m == null) return {};
			let g = b(h), _ = {
				x: n,
				y: r
			}, v = f(i), y = u(v), x = await l.getDimensions(m), S = v === "y", C = S ? "top" : "left", w = S ? "bottom" : "right", E = S ? "clientHeight" : "clientWidth", D = s.reference[y] + s.reference[v] - _[v] - s.floating[y], O = _[v] - s.reference[v], k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(m)), A = k ? k[E] : 0;
			(!A || !await (l.isElement == null ? void 0 : l.isElement(k))) && (A = d.floating[E] || s.floating[y]);
			let j = D / 2 - O / 2, M = A / 2 - x[y] / 2 - 1, N = T(g[C], M), P = T(g[w], M), F = A - x[y] - P, I = A / 2 - x[y] / 2 + j, L = a(N, I, F), ee = !p.arrow && c(i) != null && I !== L && s.reference[y] / 2 - (I < N ? N : P) - x[y] / 2 < 0, R = ee ? I < N ? I - N : I - F : 0;
			return {
				[v]: _[v] + R,
				data: {
					[v]: L,
					centerOffset: I - L - R,
					...ee && { alignmentOffset: R }
				},
				reset: ee
			};
		}
	}), oe = function(e) {
		return e === void 0 && (e = {}), {
			name: "autoPlacement",
			options: e,
			async fn(t) {
				let { rects: n, middlewareData: r, placement: i, platform: a, elements: l } = t, { crossAxis: u = !1, alignment: d, allowedPlacements: f = w, autoAlignment: m = !0, ...h } = o(e, t), g = d !== void 0 || f === w ? ee(d || null, m, f) : f, _ = r.autoPlacement?.index || 0, v = g[_];
				if (v == null) return {};
				if (i !== v) return { reset: { placement: g[0] } };
				let y = await a.detectOverflow(t, h), b = p(v, n, await (a.isRTL == null ? void 0 : a.isRTL(l.floating))), x = [
					y[s(v)],
					y[b[0]],
					y[b[1]]
				], S = [...r.autoPlacement?.overflows || [], {
					placement: v,
					overflows: x
				}], C = g[_ + 1];
				if (C) return {
					data: {
						index: _ + 1,
						overflows: S
					},
					reset: { placement: C }
				};
				let T = S.map((e) => {
					let t = c(e.placement);
					return [
						e.placement,
						t && u ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
						e.overflows
					];
				}).sort((e, t) => e[1] - t[1]), E = T.filter((e) => e[2].slice(0, c(e[0]) ? 2 : 3).every((e) => e <= 0))[0]?.[0] || T[0][0];
				return E === i ? {} : {
					data: {
						index: _ + 1,
						overflows: S
					},
					reset: { placement: E }
				};
			}
		};
	}, se = function(e) {
		return e === void 0 && (e = {}), {
			name: "flip",
			options: e,
			async fn(t) {
				var n;
				let { placement: r, middlewareData: i, rects: a, initialPlacement: c, platform: l, elements: u } = t, { mainAxis: f = !0, crossAxis: h = !0, fallbackPlacements: g, fallbackStrategy: y = "bestFit", fallbackAxisSideDirection: b = "none", flipAlignment: x = !0, ...S } = o(e, t);
				if ((n = i.arrow) != null && n.alignmentOffset) return {};
				let C = s(r), w = d(c), T = s(c) === c, E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), D = g || (T || !x ? [v(c)] : m(c)), O = b !== "none";
				!g && O && D.push(..._(c, x, b, E));
				let k = [c, ...D], A = await l.detectOverflow(t, S), j = [], M = i.flip?.overflows || [];
				if (f && j.push(A[C]), h) {
					let e = p(r, a, E);
					j.push(A[e[0]], A[e[1]]);
				}
				if (M = [...M, {
					placement: r,
					overflows: j
				}], !j.every((e) => e <= 0)) {
					let e = (i.flip?.index || 0) + 1, t = k[e];
					if (t && (!(h === "alignment" && w !== d(t)) || M.every((e) => d(e.placement) === w ? e.overflows[0] > 0 : !0))) return {
						data: {
							index: e,
							overflows: M
						},
						reset: { placement: t }
					};
					let n = M.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
					if (!n) switch (y) {
						case "bestFit": {
							let e = M.filter((e) => {
								if (O) {
									let t = d(e.placement);
									return t === w || t === "y";
								}
								return !0;
							}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
							e && (n = e);
							break;
						}
						case "initialPlacement":
							n = c;
							break;
					}
					if (r !== n) return { reset: { placement: n } };
				}
				return {};
			}
		};
	}, ce = function(e) {
		return e === void 0 && (e = {}), {
			name: "hide",
			options: e,
			async fn(t) {
				let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = o(e, t);
				switch (i) {
					case "referenceHidden": {
						let e = R(await r.detectOverflow(t, {
							...a,
							elementContext: "reference"
						}), n.reference);
						return { data: {
							referenceHiddenOffsets: e,
							referenceHidden: te(e)
						} };
					}
					case "escaped": {
						let e = R(await r.detectOverflow(t, {
							...a,
							altBoundary: !0
						}), n.floating);
						return { data: {
							escapedOffsets: e,
							escaped: te(e)
						} };
					}
					default: return {};
				}
			}
		};
	}, le = /*#__PURE__*/ new Set(["left", "top"]), ue = function(e) {
		return e === void 0 && (e = 0), {
			name: "offset",
			options: e,
			async fn(t) {
				var n;
				let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ne(t, e);
				return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
					x: r + s.x,
					y: i + s.y,
					data: {
						...s,
						placement: a
					}
				};
			}
		};
	}, de = function(e) {
		return e === void 0 && (e = {}), {
			name: "shift",
			options: e,
			async fn(t) {
				let { x: n, y: r, placement: i, platform: s } = t, { mainAxis: c = !0, crossAxis: u = !1, limiter: f = { fn: (e) => {
					let { x: t, y: n } = e;
					return {
						x: t,
						y: n
					};
				} }, ...p } = o(e, t), m = {
					x: n,
					y: r
				}, h = await s.detectOverflow(t, p), g = d(i), _ = l(g), v = m[_], y = m[g], b = (e, t) => a(t + h[e === "y" ? "top" : "left"], t, t - h[e === "y" ? "bottom" : "right"]);
				c && (v = b(_, v)), u && (y = b(g, y));
				let x = f.fn({
					...t,
					[_]: v,
					[g]: y
				});
				return {
					...x,
					data: {
						x: x.x - n,
						y: x.y - r,
						enabled: {
							[_]: c,
							[g]: u
						}
					}
				};
			}
		};
	}, fe = function(e) {
		return e === void 0 && (e = {}), {
			options: e,
			fn(t) {
				let { x: n, y: r, placement: i, rects: a, middlewareData: c } = t, { offset: u = 0, mainAxis: f = !0, crossAxis: p = !0 } = o(e, t), m = {
					x: n,
					y: r
				}, h = d(i), g = l(h), _ = m[g], v = m[h], y = o(u, t), b = typeof y == "number" ? {
					mainAxis: y,
					crossAxis: 0
				} : {
					mainAxis: y.mainAxis ?? 0,
					crossAxis: y.crossAxis ?? 0
				};
				if (f) {
					let e = g === "y" ? "height" : "width", t = a.reference[g] - a.floating[e] + b.mainAxis, n = a.reference[g] + a.reference[e] - b.mainAxis;
					_ < t ? _ = t : _ > n && (_ = n);
				}
				if (p) {
					let e = g === "y" ? "width" : "height", t = le.has(s(i)), n = a.reference[h] - a.floating[e] + (t && c.offset?.[h] || 0) + (t ? 0 : b.crossAxis), r = a.reference[h] + a.reference[e] + (t ? 0 : c.offset?.[h] || 0) - (t ? b.crossAxis : 0);
					v < n ? v = n : v > r && (v = r);
				}
				return {
					[g]: _,
					[h]: v
				};
			}
		};
	}, pe = function(e) {
		return e === void 0 && (e = {}), {
			name: "size",
			options: e,
			async fn(t) {
				let { placement: n, rects: r, platform: i, elements: a } = t, { apply: l = () => {}, ...u } = o(e, t), f = await i.detectOverflow(t, u), p = s(n), m = c(n), h = d(n) === "y", { width: g, height: _ } = r.floating, v, y;
				p === "top" || p === "bottom" ? (v = p, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = p, v = m === "end" ? "top" : "bottom");
				let b = _ - f.top - f.bottom, x = g - f.left - f.right, S = T(_ - f[v], b), C = T(g - f[y], x), w = t.middlewareData.shift, D = !w, O = S, k = C;
				w != null && w.enabled.x && (k = x), w != null && w.enabled.y && (O = b), D && !m && (h ? k = g - 2 * E(f.left, f.right) : O = _ - 2 * E(f.top, f.bottom)), await l({
					...t,
					availableWidth: k,
					availableHeight: O
				});
				let A = await i.getDimensions(a.floating);
				return g !== A.width || _ !== A.height ? { reset: { rects: !0 } } : {};
			}
		};
	};
}));
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function z() {
	return typeof window < "u";
}
function B(e) {
	return he(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function V(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function H(e) {
	return ((he(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function he(e) {
	return z() ? e instanceof Node || e instanceof V(e).Node : !1;
}
function U(e) {
	return z() ? e instanceof Element || e instanceof V(e).Element : !1;
}
function W(e) {
	return z() ? e instanceof HTMLElement || e instanceof V(e).HTMLElement : !1;
}
function ge(e) {
	return !z() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof V(e).ShadowRoot;
}
function _e(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = K(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ve(e) {
	return /^(table|td|th)$/.test(B(e));
}
function ye(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
function be(e) {
	let t = U(e) ? K(e) : e;
	return Y(t.transform) || Y(t.translate) || Y(t.scale) || Y(t.rotate) || Y(t.perspective) || !Se() && (Y(t.backdropFilter) || Y(t.filter)) || Ee.test(t.willChange || "") || De.test(t.contain || "");
}
function xe(e) {
	let t = q(e);
	for (; W(t) && !G(t);) {
		if (be(t)) return t;
		if (ye(t)) return null;
		t = q(t);
	}
	return null;
}
function Se() {
	return Oe ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Oe;
}
function G(e) {
	return /^(html|body|#document)$/.test(B(e));
}
function K(e) {
	return V(e).getComputedStyle(e);
}
function Ce(e) {
	return U(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function q(e) {
	if (B(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ge(e) && e.host || H(e);
	return ge(t) ? t.host : t;
}
function we(e) {
	let t = q(e);
	return G(t) ? (e.ownerDocument || e).body : W(t) && _e(t) ? t : we(t);
}
function J(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = we(e), i = r === e.ownerDocument?.body, a = V(r);
	if (i) {
		let e = Te(a);
		return t.concat(a, a.visualViewport || [], _e(r) ? r : [], e && n ? J(e) : []);
	} else return t.concat(r, J(r, [], n));
}
function Te(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
var Ee, De, Y, Oe, ke = e((() => {
	Ee = /transform|translate|scale|rotate|perspective|filter/, De = /paint|layout|strict|content/, Y = (e) => !!e && e !== "none";
}));
//#endregion
//#region ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Ae(e) {
	let t = K(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = W(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = D(n) !== a || D(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function je(e) {
	return U(e) ? e : e.contextElement;
}
function X(e) {
	let t = je(e);
	if (!W(t)) return k(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Ae(t), o = (a ? D(n.width) : n.width) / r, s = (a ? D(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
function Me(e) {
	let t = V(e);
	return !Se() || !t.visualViewport ? $e : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Ne(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === V(e);
}
function Z(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = je(e), o = k(1);
	t && (r ? U(r) && (o = X(r)) : o = X(e));
	let s = Ne(a, n, r) ? Me(a) : k(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = V(a), t = U(r) ? V(r) : r, n = e, i = Te(n);
		for (; i && t !== n;) {
			let e = X(i), t = i.getBoundingClientRect(), r = K(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = V(i), i = Te(n);
		}
	}
	return x({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Pe(e, t) {
	let n = Ce(e).scrollLeft;
	return t ? t.left + n : Z(H(e)).left + n;
}
function Fe(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Pe(e, n),
		y: n.top + t.scrollTop
	};
}
function Ie(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = H(r), s = t ? ye(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = k(1), u = k(0), d = W(r);
	if ((d || !a) && ((B(r) !== "body" || _e(o)) && (c = Ce(r)), d)) {
		let e = Z(r);
		l = X(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Fe(o, c) : k(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Le(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Re(e) {
	let t = Ce(e), n = e.ownerDocument.body, r = E(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = E(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Pe(e), o = -t.scrollTop;
	return K(n).direction === "rtl" && (a += E(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
function ze(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = V(e), a = H(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Se() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Pe(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= et && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Be(e, t) {
	let n = Z(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = X(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ve(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = ze(e, n, t);
	else if (t === "document") r = Re(H(e));
	else if (U(t)) r = Be(t, n);
	else {
		let n = Me(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return x(r);
}
function He(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = J(e, [], !1).filter((e) => U(e) && B(e) !== "body"), i = null, a = K(e).position === "fixed", o = a ? q(e) : e;
	for (; U(o) && !G(o);) {
		let e = K(o), t = be(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = q(o);
	}
	return t.set(e, r), r;
}
function Ue(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ye(t) ? [] : He(t, this._c) : [].concat(n), r], o = Ve(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ve(t, a[e], i);
		s = E(n.top, s), c = T(n.right, c), l = T(n.bottom, l), u = E(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function We(e) {
	let { width: t, height: n } = Ae(e);
	return {
		width: t,
		height: n
	};
}
function Ge(e, t, n) {
	let r = W(t), i = H(t), a = n === "fixed", o = Z(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = k(0);
	if ((r || !a) && ((B(t) !== "body" || _e(i)) && (s = Ce(t)), r)) {
		let e = Z(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Pe(i));
	let l = i && !r && !a ? Fe(i, s) : k(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Ke(e) {
	return K(e).position === "static";
}
function qe(e, t) {
	if (!W(e) || K(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return H(e) === n && (n = n.ownerDocument.body), n;
}
function Je(e, t) {
	let n = V(e);
	if (ye(e)) return n;
	if (!W(e)) {
		let t = q(e);
		for (; t && !G(t);) {
			if (U(t) && !Ke(t)) return t;
			t = q(t);
		}
		return n;
	}
	let r = qe(e, t);
	for (; r && ve(r) && Ke(r);) r = qe(r, t);
	return r && G(r) && Ke(r) && !be(r) ? n : r || xe(e) || n;
}
function Ye(e) {
	return K(e).direction === "rtl";
}
function Xe(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ze(e, t, n) {
	let r = null, i, a = H(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = O(d), h = O(a.clientWidth - (u + f)), g = O(a.clientHeight - (d + p)), _ = O(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: E(0, T(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Xe(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = V(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Qe(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = je(e), u = i || a ? [...l ? J(l) : [], ...t ? J(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Ze(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Z(e) : null;
	c && g();
	function g() {
		let t = Z(e);
		h && !Xe(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft = e((() => {
	me(), F(), ke(), $e = /*#__PURE__*/ k(0), et = 25, tt = async function(e) {
		let t = this.getOffsetParent || Je, n = this.getDimensions, r = await n(e.floating);
		return {
			reference: Ge(e.reference, await t(e.floating), e.strategy),
			floating: {
				x: 0,
				y: 0,
				width: r.width,
				height: r.height
			}
		};
	}, nt = {
		convertOffsetParentRelativeRectToViewportRelativeRect: Ie,
		getDocumentElement: H,
		getClippingRect: Ue,
		getOffsetParent: Je,
		getElementRects: tt,
		getClientRects: Le,
		getDimensions: We,
		getScale: X,
		isElement: U,
		isRTL: Ye
	}, rt = ue, it = oe, at = de, ot = se, st = pe, ct = ce, lt = ae, ut = fe, dt = (e, t, n) => {
		let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
			...nt,
			...i.platform,
			_c: r
		};
		return ie(e, t, {
			...i,
			platform: a
		});
	};
}));
//#endregion
//#region ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
function pt(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!pt(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !pt(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function mt(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ht(e, t) {
	let n = mt(e);
	return Math.round(t * n) / n;
}
function gt(e) {
	let t = Q.useRef(e);
	return $(() => {
		t.current = e;
	}), t;
}
function _t(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = Q.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = Q.useState(r);
	pt(f, r) || p(r);
	let [m, h] = Q.useState(null), [g, _] = Q.useState(null), v = Q.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = Q.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = Q.useRef(null), C = Q.useRef(null), w = Q.useRef(u), T = c != null, E = gt(c), D = gt(i), O = gt(l), k = Q.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), dt(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !pt(w.current, t) && (w.current = t, yt.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	$(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = Q.useRef(!1);
	$(() => (A.current = !0, () => {
		A.current = !1;
	}), []), $(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let j = Q.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = Q.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = Q.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = ht(M.floating, u.x), r = ht(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...mt(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return Q.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var Q, vt, yt, $, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt = e((() => {
	ft(), Q = /* @__PURE__ */ t(r(), 1), vt = /* @__PURE__ */ t(r(), 1), yt = /* @__PURE__ */ t(i(), 1), $ = typeof document < "u" ? vt.useLayoutEffect : function() {}, bt = (e) => {
		function t(e) {
			return {}.hasOwnProperty.call(e, "current");
		}
		return {
			name: "arrow",
			options: e,
			fn(n) {
				let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
				return r && t(r) ? r.current == null ? {} : lt({
					element: r.current,
					padding: i
				}).fn(n) : r ? lt({
					element: r,
					padding: i
				}).fn(n) : {};
			}
		};
	}, xt = (e, t) => {
		let n = rt(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, St = (e, t) => {
		let n = at(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, Ct = (e, t) => ({
		fn: ut(e).fn,
		options: [e, t]
	}), wt = (e, t) => {
		let n = ot(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, Tt = (e, t) => {
		let n = st(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, Et = (e, t) => {
		let n = it(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, Dt = (e, t) => {
		let n = ct(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	}, Ot = (e, t) => {
		let n = bt(e);
		return {
			name: n.name,
			fn: n.fn,
			options: [e, t]
		};
	};
})), At = /* @__PURE__ */ n(((e) => {
	var t = r();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : n, a = t.useState, o = t.useEffect, s = t.useLayoutEffect, c = t.useDebugValue;
	function l(e, t) {
		var n = t(), r = a({ inst: {
			value: n,
			getSnapshot: t
		} }), i = r[0].inst, l = r[1];
		return s(function() {
			i.value = n, i.getSnapshot = t, u(i) && l({ inst: i });
		}, [
			e,
			n,
			t
		]), o(function() {
			return u(i) && l({ inst: i }), e(function() {
				u(i) && l({ inst: i });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !i(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), jt = /* @__PURE__ */ n(((e, t) => {
	t.exports = At();
})), Mt = /* @__PURE__ */ n(((e) => {
	var t = r(), n = jt();
	function i(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var a = typeof Object.is == "function" ? Object.is : i, o = n.useSyncExternalStore, s = t.useRef, c = t.useEffect, l = t.useMemo, u = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!o) {
					if (o = !0, s = e, e = r(e), i !== void 0 && f.hasValue) {
						var t = f.value;
						if (i(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, a(s, e)) return t;
				var n = r(e);
				return i !== void 0 && i(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var o = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			i
		]);
		var p = o(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), Nt = /* @__PURE__ */ n(((e, t) => {
	t.exports = Mt();
}));
//#endregion
export { he as C, G as S, Se as T, J as _, wt as a, U as b, Ct as c, Tt as d, _t as f, B as g, K as h, Et as i, xt as l, ft as m, jt as n, Dt as o, Qe as p, Ot as r, kt as s, Nt as t, St as u, q as v, ge as w, W as x, ke as y };
