import { o as e, t } from "./rolldown-runtime-DY7j01NX.js";
import { n, t as r } from "./jsx-runtime-18mgyzjG.js";
import { t as i } from "./react-dom-BArcbfWT.js";
import { C as a, S as o, T as s, _ as c, b as l, f as u, g as d, h as f, p, s as m, t as h, v as g, w as _, x as v, y } from "./with-selector-BzHsq6IS.js";
//#region ../../node_modules/tabbable/dist/index.esm.js
var b = /* @__PURE__ */ e(n(), 1);
y();
var x = /* #__PURE__ */ [
	"input:not([inert]):not([inert] *)",
	"select:not([inert]):not([inert] *)",
	"textarea:not([inert]):not([inert] *)",
	"a[href]:not([inert]):not([inert] *)",
	"area[href]:not([inert]):not([inert] *)",
	"button:not([inert]):not([inert] *)",
	"[tabindex]:not(slot):not([inert]):not([inert] *)",
	"audio[controls]:not([inert]):not([inert] *)",
	"video[controls]:not([inert]):not([inert] *)",
	"[contenteditable]:not([contenteditable=\"false\"]):not([inert]):not([inert] *)",
	"details>summary:first-of-type:not([inert]):not([inert] *)",
	"details:not([inert]):not([inert] *)"
].join(","), S = typeof Element > "u", C = S ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, ee = !S && Element.prototype.getRootNode ? function(e) {
	return e?.getRootNode?.call(e);
} : function(e) {
	return e?.ownerDocument;
}, w = function(e, t) {
	t === void 0 && (t = !0);
	var n = e?.getAttribute?.call(e, "inert");
	return n === "" || n === "true" || t && e && (typeof e.closest == "function" ? e.closest("[inert]") : w(e.parentNode));
}, te = function(e) {
	var t = e?.getAttribute?.call(e, "contenteditable");
	return t === "" || t === "true";
}, ne = function(e, t, n) {
	if (w(e)) return [];
	var r = Array.prototype.slice.apply(e.querySelectorAll(x));
	return t && C.call(e, x) && r.unshift(e), r = r.filter(n), r;
}, T = function(e, t, n) {
	for (var r = [], i = Array.from(e); i.length;) {
		var a = i.shift();
		if (!w(a, !1)) if (a.tagName === "SLOT") {
			var o = a.assignedElements(), s = T(o.length ? o : a.children, !0, n);
			n.flatten ? r.push.apply(r, s) : r.push({
				scopeParent: a,
				candidates: s
			});
		} else {
			C.call(a, x) && n.filter(a) && (t || !e.includes(a)) && r.push(a);
			var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a), l = !w(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
			if (c && l) {
				var u = T(c === !0 ? a.children : c.children, !0, n);
				n.flatten ? r.push.apply(r, u) : r.push({
					scopeParent: a,
					candidates: u
				});
			} else i.unshift.apply(i, a.children);
		}
	}
	return r;
}, E = function(e) {
	return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, re = function(e) {
	if (!e) throw Error("No node provided");
	return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || te(e)) && !E(e) ? 0 : e.tabIndex;
}, ie = function(e, t) {
	var n = re(e);
	return n < 0 && t && !E(e) ? 0 : n;
}, D = function(e, t) {
	return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
}, O = function(e) {
	return e.tagName === "INPUT";
}, ae = function(e) {
	return O(e) && e.type === "hidden";
}, oe = function(e) {
	return e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(e) {
		return e.tagName === "SUMMARY";
	});
}, se = function(e, t) {
	for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
}, ce = function(e) {
	if (!e.name) return !0;
	var t = e.form || ee(e), n = function(e) {
		return t.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
	}, r;
	if (typeof window < "u" && window.CSS !== void 0 && typeof window.CSS.escape == "function") r = n(window.CSS.escape(e.name));
	else try {
		r = n(e.name);
	} catch (e) {
		return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1;
	}
	var i = se(r, e.form);
	return !i || i === e;
}, le = function(e) {
	return O(e) && e.type === "radio";
}, ue = function(e) {
	return le(e) && !ce(e);
}, de = function(e) {
	var t = e && ee(e), n = t?.host, r = !1;
	if (t && t !== e) {
		var i, a, o;
		for (r = !!((i = n) != null && (a = i.ownerDocument) != null && a.contains(n) || e != null && (o = e.ownerDocument) != null && o.contains(e)); !r && n;) {
			var s, c;
			t = ee(n), n = t?.host, r = !!((s = n) != null && (c = s.ownerDocument) != null && c.contains(n));
		}
	}
	return r;
}, k = function(e) {
	var t = e.getBoundingClientRect(), n = t.width, r = t.height;
	return n === 0 && r === 0;
}, fe = function(e, t) {
	var n = t.displayCheck, r = t.getShadowRoot;
	if (n === "full-native" && "checkVisibility" in e) return !e.checkVisibility({
		checkOpacity: !1,
		opacityProperty: !1,
		contentVisibilityAuto: !0,
		visibilityProperty: !0,
		checkVisibilityCSS: !0
	});
	var i = getComputedStyle(e).visibility;
	if (i === "hidden" || i === "collapse") return !0;
	var a = C.call(e, "details>summary:first-of-type") ? e.parentElement : e;
	if (C.call(a, "details:not([open]) *")) return !0;
	if (!n || n === "full" || n === "full-native" || n === "legacy-full") {
		if (typeof r == "function") {
			for (var o = e; e;) {
				var s = e.parentElement, c = ee(e);
				if (s && !s.shadowRoot && r(s) === !0) return k(e);
				e = e.assignedSlot ? e.assignedSlot : !s && c !== e.ownerDocument ? c.host : s;
			}
			e = o;
		}
		if (de(e)) return !e.getClientRects().length;
		if (n !== "legacy-full") return !0;
	} else if (n === "non-zero-area") return k(e);
	return !1;
}, pe = function(e) {
	if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var t = e.parentElement; t;) {
		if (t.tagName === "FIELDSET" && t.disabled) {
			for (var n = 0; n < t.children.length; n++) {
				var r = t.children.item(n);
				if (r.tagName === "LEGEND") return C.call(t, "fieldset[disabled] *") ? !0 : !r.contains(e);
			}
			return !0;
		}
		t = t.parentElement;
	}
	return !1;
}, me = function(e, t) {
	return !(t.disabled || ae(t) || fe(t, e) || oe(t) || pe(t));
}, he = function(e, t) {
	return !(ue(t) || re(t) < 0 || !me(e, t));
}, ge = function(e) {
	var t = parseInt(e.getAttribute("tabindex"), 10);
	return !!(isNaN(t) || t >= 0);
}, _e = function(e) {
	var t = [], n = [];
	return e.forEach(function(e, r) {
		var i = !!e.scopeParent, a = i ? e.scopeParent : e, o = ie(a, i), s = i ? _e(e.candidates) : a;
		o === 0 ? i ? t.push.apply(t, s) : t.push(a) : n.push({
			documentOrder: r,
			tabIndex: o,
			item: e,
			isScope: i,
			content: s
		});
	}), n.sort(D).reduce(function(e, t) {
		return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
	}, []).concat(t);
}, ve = function(e, t) {
	return t ||= {}, _e(t.getShadowRoot ? T([e], t.includeContainer, {
		filter: he.bind(null, t),
		flatten: !1,
		getShadowRoot: t.getShadowRoot,
		shadowRootFilter: ge
	}) : ne(e, t.includeContainer, he.bind(null, t)));
}, ye = function(e, t) {
	return t ||= {}, t.getShadowRoot ? T([e], t.includeContainer, {
		filter: me.bind(null, t),
		flatten: !0,
		getShadowRoot: t.getShadowRoot
	}) : ne(e, t.includeContainer, me.bind(null, t));
}, be = function(e, t) {
	if (t ||= {}, !e) throw Error("No node provided");
	return C.call(e, x) === !1 ? !1 : he(t, e);
};
//#endregion
//#region ../../node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function xe() {
	let e = navigator.userAgentData;
	return e != null && e.platform ? e.platform : navigator.platform;
}
function Se() {
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? e.brands.map((e) => {
		let { brand: t, version: n } = e;
		return t + "/" + n;
	}).join(" ") : navigator.userAgent;
}
function Ce() {
	return /apple/i.test(navigator.vendor);
}
function we() {
	let e = /android/i;
	return e.test(xe()) || e.test(Se());
}
function Te() {
	return Se().includes("jsdom/");
}
var Ee = "data-floating-ui-focusable", De = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Oe(e) {
	let t = e.activeElement;
	for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
		var n;
		t = t.shadowRoot.activeElement;
	}
	return t;
}
function ke(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode == null ? void 0 : t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && _(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Ae(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function je(e, t) {
	if (t == null) return !1;
	if ("composedPath" in e) return e.composedPath().includes(t);
	let n = e;
	return n.target != null && t.contains(n.target);
}
function Me(e) {
	return e.matches("html,body");
}
function Ne(e) {
	return e?.ownerDocument || document;
}
function Pe(e) {
	return v(e) && e.matches(De);
}
function Fe(e) {
	return e ? e.getAttribute("role") === "combobox" && Pe(e) : !1;
}
function Ie(e) {
	return e ? e.hasAttribute(Ee) ? e : e.querySelector("[data-floating-ui-focusable]") || e : null;
}
function Le(e, t, n) {
	return n === void 0 && (n = !0), e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Le(e, t.id, n)]);
}
function Re(e, t) {
	let n = [], r = e.find((e) => e.id === t)?.parentId;
	for (; r;) {
		let t = e.find((e) => e.id === r);
		r = t?.parentId, t && (n = n.concat(t));
	}
	return n;
}
function ze(e) {
	e.preventDefault(), e.stopPropagation();
}
function Be(e) {
	return "nativeEvent" in e;
}
function Ve(e) {
	return e.mozInputSource === 0 && e.isTrusted ? !0 : we() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function He(e) {
	return Te() ? !1 : !we() && e.width === 0 && e.height === 0 || we() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Ue(e, t) {
	let n = ["mouse", "pen"];
	return t || n.push("", void 0), n.includes(e);
}
var We = typeof document < "u" ? b.useLayoutEffect : function() {}, Ge = { ...b };
function Ke(e) {
	let t = b.useRef(e);
	return We(() => {
		t.current = e;
	}), t;
}
var qe = Ge.useInsertionEffect || ((e) => e());
function Je(e) {
	let t = b.useRef(() => {});
	return qe(() => {
		t.current = e;
	}), b.useCallback(function() {
		var e = [...arguments];
		return t.current == null ? void 0 : t.current(...e);
	}, []);
}
var Ye = () => ({
	getShadowRoot: !0,
	displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function Xe(e, t) {
	let n = ve(e, Ye()), r = n.length;
	if (r === 0) return;
	let i = Oe(Ne(e)), a = n.indexOf(i);
	return n[a === -1 ? t === 1 ? 0 : r - 1 : a + t];
}
function Ze(e) {
	return Xe(Ne(e).body, 1) || e;
}
function Qe(e) {
	return Xe(Ne(e).body, -1) || e;
}
function $e(e, t) {
	let n = t || e.currentTarget, r = e.relatedTarget;
	return !r || !ke(n, r);
}
function et(e) {
	ve(e, Ye()).forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	});
}
function tt(e) {
	e.querySelectorAll("[data-tabindex]").forEach((e) => {
		let t = e.dataset.tabindex;
		delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
	});
}
//#endregion
//#region ../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var A = r();
y();
var nt = /* @__PURE__ */ e(i(), 1);
m();
function rt(e) {
	let t = b.useRef(void 0), n = b.useCallback((t) => {
		let n = e.map((e) => {
			if (e != null) {
				if (typeof e == "function") {
					let n = e, r = n(t);
					return typeof r == "function" ? r : () => {
						n(null);
					};
				}
				return e.current = t, () => {
					e.current = null;
				};
			}
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, e);
	return b.useMemo(() => e.every((e) => e == null) ? null : (e) => {
		t.current &&= (t.current(), void 0), e != null && (t.current = n(e));
	}, e);
}
var it = "data-floating-ui-focusable", at = "active", ot = "selected", st = "ArrowLeft", ct = "ArrowRight", lt = "ArrowUp", ut = "ArrowDown", dt = [st, ct], ft = [lt, ut];
[...dt, ...ft];
var pt = { ...b }, mt = !1, ht = 0, gt = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ht++;
function _t() {
	let [e, t] = b.useState(() => mt ? gt() : void 0);
	return We(() => {
		e ?? t(gt());
	}, []), b.useEffect(() => {
		mt = !0;
	}, []), e;
}
var vt = pt.useId || _t;
function yt() {
	let e = /* @__PURE__ */ new Map();
	return {
		emit(t, n) {
			var r;
			(r = e.get(t)) == null || r.forEach((e) => e(n));
		},
		on(t, n) {
			e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n);
		},
		off(t, n) {
			var r;
			(r = e.get(t)) == null || r.delete(n);
		}
	};
}
var bt = /*#__PURE__*/ b.createContext(null), xt = /*#__PURE__*/ b.createContext(null), St = () => b.useContext(bt)?.id || null, Ct = () => b.useContext(xt);
function wt(e) {
	return "data-floating-ui-" + e;
}
function Tt(e) {
	e.current !== -1 && (clearTimeout(e.current), e.current = -1);
}
var Et = /*#__PURE__*/ wt("safe-polygon");
function Dt(e, t, n) {
	if (n && !Ue(n)) return 0;
	if (typeof e == "number") return e;
	if (typeof e == "function") {
		let n = e();
		return typeof n == "number" ? n : n?.[t];
	}
	return e?.[t];
}
function Ot(e) {
	return typeof e == "function" ? e() : e;
}
function kt(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, dataRef: i, events: a, elements: o } = e, { enabled: s = !0, delay: c = 0, handleClose: u = null, mouseOnly: d = !1, restMs: f = 0, move: p = !0 } = t, m = Ct(), h = St(), g = Ke(u), _ = Ke(c), v = Ke(n), y = Ke(f), x = b.useRef(), S = b.useRef(-1), C = b.useRef(), ee = b.useRef(-1), w = b.useRef(!0), te = b.useRef(!1), ne = b.useRef(() => {}), T = b.useRef(!1), E = Je(() => {
		let e = i.current.openEvent?.type;
		return e?.includes("mouse") && e !== "mousedown";
	});
	b.useEffect(() => {
		if (!s) return;
		function e(e) {
			let { open: t } = e;
			t || (Tt(S), Tt(ee), w.current = !0, T.current = !1);
		}
		return a.on("openchange", e), () => {
			a.off("openchange", e);
		};
	}, [s, a]), b.useEffect(() => {
		if (!s || !g.current || !n) return;
		function e(e) {
			E() && r(!1, e, "hover");
		}
		let t = Ne(o.floating).documentElement;
		return t.addEventListener("mouseleave", e), () => {
			t.removeEventListener("mouseleave", e);
		};
	}, [
		o.floating,
		n,
		r,
		s,
		g,
		E
	]);
	let re = b.useCallback(function(e, t, n) {
		t === void 0 && (t = !0), n === void 0 && (n = "hover");
		let i = Dt(_.current, "close", x.current);
		i && !C.current ? (Tt(S), S.current = window.setTimeout(() => r(!1, e, n), i)) : t && (Tt(S), r(!1, e, n));
	}, [_, r]), ie = Je(() => {
		ne.current(), C.current = void 0;
	}), D = Je(() => {
		if (te.current) {
			let e = Ne(o.floating).body;
			e.style.pointerEvents = "", e.removeAttribute(Et), te.current = !1;
		}
	}), O = Je(() => i.current.openEvent ? ["click", "mousedown"].includes(i.current.openEvent.type) : !1);
	b.useEffect(() => {
		if (!s) return;
		function e(e) {
			if (Tt(S), w.current = !1, d && !Ue(x.current) || Ot(y.current) > 0 && !Dt(_.current, "open")) return;
			let t = Dt(_.current, "open", x.current);
			t ? S.current = window.setTimeout(() => {
				v.current || r(!0, e, "hover");
			}, t) : n || r(!0, e, "hover");
		}
		function t(e) {
			if (O()) {
				D();
				return;
			}
			ne.current();
			let t = Ne(o.floating);
			if (Tt(ee), T.current = !1, g.current && i.current.floatingContext) {
				n || Tt(S), C.current = g.current({
					...i.current.floatingContext,
					tree: m,
					x: e.clientX,
					y: e.clientY,
					onClose() {
						D(), ie(), O() || re(e, !0, "safe-polygon");
					}
				});
				let r = C.current;
				t.addEventListener("mousemove", r), ne.current = () => {
					t.removeEventListener("mousemove", r);
				};
				return;
			}
			(x.current !== "touch" || !ke(o.floating, e.relatedTarget)) && re(e);
		}
		function a(e) {
			O() || i.current.floatingContext && (g.current == null || g.current({
				...i.current.floatingContext,
				tree: m,
				x: e.clientX,
				y: e.clientY,
				onClose() {
					D(), ie(), O() || re(e);
				}
			})(e));
		}
		function c() {
			Tt(S);
		}
		function u(e) {
			O() || re(e, !1);
		}
		if (l(o.domReference)) {
			let r = o.domReference, i = o.floating;
			return n && r.addEventListener("mouseleave", a), p && r.addEventListener("mousemove", e, { once: !0 }), r.addEventListener("mouseenter", e), r.addEventListener("mouseleave", t), i && (i.addEventListener("mouseleave", a), i.addEventListener("mouseenter", c), i.addEventListener("mouseleave", u)), () => {
				n && r.removeEventListener("mouseleave", a), p && r.removeEventListener("mousemove", e), r.removeEventListener("mouseenter", e), r.removeEventListener("mouseleave", t), i && (i.removeEventListener("mouseleave", a), i.removeEventListener("mouseenter", c), i.removeEventListener("mouseleave", u));
			};
		}
	}, [
		o,
		s,
		e,
		d,
		p,
		re,
		ie,
		D,
		r,
		n,
		v,
		m,
		_,
		g,
		i,
		O,
		y
	]), We(() => {
		var e;
		if (s && n && (e = g.current) != null && (e = e.__options) != null && e.blockPointerEvents && E()) {
			te.current = !0;
			let e = o.floating;
			if (l(o.domReference) && e) {
				var t;
				let n = Ne(o.floating).body;
				n.setAttribute(Et, "");
				let r = o.domReference, i = m == null || (t = m.nodesRef.current.find((e) => e.id === h)) == null || (t = t.context) == null ? void 0 : t.elements.floating;
				return i && (i.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
					n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = "";
				};
			}
		}
	}, [
		s,
		n,
		h,
		o,
		m,
		g,
		E
	]), We(() => {
		n || (x.current = void 0, T.current = !1, ie(), D());
	}, [
		n,
		ie,
		D
	]), b.useEffect(() => () => {
		ie(), Tt(S), Tt(ee), D();
	}, [
		s,
		o.domReference,
		ie,
		D
	]);
	let ae = b.useMemo(() => {
		function e(e) {
			x.current = e.pointerType;
		}
		return {
			onPointerDown: e,
			onPointerEnter: e,
			onMouseMove(e) {
				let { nativeEvent: t } = e;
				function i() {
					!w.current && !v.current && r(!0, t, "hover");
				}
				d && !Ue(x.current) || n || Ot(y.current) === 0 || T.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (Tt(ee), x.current === "touch" ? i() : (T.current = !0, ee.current = window.setTimeout(i, Ot(y.current))));
			}
		};
	}, [
		d,
		r,
		n,
		v,
		y
	]);
	return b.useMemo(() => s ? { reference: ae } : {}, [s, ae]);
}
var At = 0;
function jt(e, t) {
	t === void 0 && (t = {});
	let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
	r && cancelAnimationFrame(At);
	let a = () => e?.focus({ preventScroll: n });
	i ? a() : At = requestAnimationFrame(a);
}
function Mt(e, t) {
	if (!e || !t) return !1;
	let n = t.getRootNode == null ? void 0 : t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && _(n)) {
		let n = t;
		for (; n;) {
			if (e === n) return !0;
			n = n.parentNode || n.host;
		}
	}
	return !1;
}
function Nt(e) {
	return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function Pt(e) {
	return e?.ownerDocument || document;
}
var Ft = {
	inert: /*#__PURE__*/ new WeakMap(),
	"aria-hidden": /*#__PURE__*/ new WeakMap(),
	none: /*#__PURE__*/ new WeakMap()
};
function It(e) {
	return e === "inert" ? Ft.inert : e === "aria-hidden" ? Ft["aria-hidden"] : Ft.none;
}
var Lt = /*#__PURE__*/ new WeakSet(), Rt = {}, zt = 0, Bt = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype;
function Vt(e) {
	return e ? _(e) ? e.host : Vt(e.parentNode) : null;
}
var Ht = (e, t) => t.map((t) => {
	if (e.contains(t)) return t;
	let n = Vt(t);
	return e.contains(n) ? n : null;
}).filter((e) => e != null);
function Ut(e, t, n, r) {
	let i = "data-floating-ui-inert", a = r ? "inert" : n ? "aria-hidden" : null, o = Ht(t, e), s = /* @__PURE__ */ new Set(), c = new Set(o), l = [];
	Rt[i] || (Rt[i] = /* @__PURE__ */ new WeakMap());
	let u = Rt[i];
	o.forEach(f), p(t), s.clear();
	function f(e) {
		!e || s.has(e) || (s.add(e), e.parentNode && f(e.parentNode));
	}
	function p(e) {
		!e || c.has(e) || [].forEach.call(e.children, (e) => {
			if (d(e) !== "script") if (s.has(e)) p(e);
			else {
				let t = a ? e.getAttribute(a) : null, n = t !== null && t !== "false", r = It(a), o = (r.get(e) || 0) + 1, s = (u.get(e) || 0) + 1;
				r.set(e, o), u.set(e, s), l.push(e), o === 1 && n && Lt.add(e), s === 1 && e.setAttribute(i, ""), !n && a && e.setAttribute(a, a === "inert" ? "" : "true");
			}
		});
	}
	return zt++, () => {
		l.forEach((e) => {
			let t = It(a), n = (t.get(e) || 0) - 1, r = (u.get(e) || 0) - 1;
			t.set(e, n), u.set(e, r), n || (!Lt.has(e) && a && e.removeAttribute(a), Lt.delete(e)), r || e.removeAttribute(i);
		}), zt--, zt || (Ft.inert = /* @__PURE__ */ new WeakMap(), Ft["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Ft.none = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakSet(), Rt = {});
	};
}
function Wt(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let r = Pt(e[0]).body;
	return Ut(e.concat(Array.from(r.querySelectorAll("[aria-live],[role=\"status\"],output"))), r, t, n);
}
var Gt = {
	border: 0,
	clip: "rect(0 0 0 0)",
	height: "1px",
	margin: "-1px",
	overflow: "hidden",
	padding: 0,
	position: "fixed",
	whiteSpace: "nowrap",
	width: "1px",
	top: 0,
	left: 0
}, Kt = /*#__PURE__*/ b.forwardRef(function(e, t) {
	let [n, r] = b.useState();
	We(() => {
		Ce() && r("button");
	}, []);
	let i = {
		ref: t,
		tabIndex: 0,
		role: n,
		"aria-hidden": n ? void 0 : !0,
		[wt("focus-guard")]: "",
		style: Gt
	};
	return /*#__PURE__*/ (0, A.jsx)("span", {
		...e,
		...i
	});
}), qt = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
}, Jt = /*#__PURE__*/ b.createContext(null), Yt = /*#__PURE__*/ wt("portal");
function Xt(e) {
	e === void 0 && (e = {});
	let { id: t, root: n } = e, r = vt(), i = Qt(), [o, s] = b.useState(null), c = b.useRef(null);
	return We(() => () => {
		o?.remove(), queueMicrotask(() => {
			c.current = null;
		});
	}, [o]), We(() => {
		if (!r || c.current) return;
		let e = t ? document.getElementById(t) : null;
		if (!e) return;
		let n = document.createElement("div");
		n.id = r, n.setAttribute(Yt, ""), e.appendChild(n), c.current = n, s(n);
	}, [t, r]), We(() => {
		if (n === null || !r || c.current) return;
		let e = n || i?.portalNode;
		e && !a(e) && (e = e.current), e ||= document.body;
		let o = null;
		t && (o = document.createElement("div"), o.id = t, e.appendChild(o));
		let l = document.createElement("div");
		l.id = r, l.setAttribute(Yt, ""), e = o || e, e.appendChild(l), c.current = l, s(l);
	}, [
		t,
		n,
		r,
		i
	]), o;
}
function Zt(e) {
	let { children: t, id: n, root: r, preserveTabOrder: i = !0 } = e, a = Xt({
		id: n,
		root: r
	}), [o, s] = b.useState(null), c = b.useRef(null), l = b.useRef(null), u = b.useRef(null), d = b.useRef(null), f = o?.modal, p = o?.open, m = !!o && !o.modal && o.open && i && !!(r || a);
	return b.useEffect(() => {
		if (!a || !i || f) return;
		function e(e) {
			a && $e(e) && (e.type === "focusin" ? tt : et)(a);
		}
		return a.addEventListener("focusin", e, !0), a.addEventListener("focusout", e, !0), () => {
			a.removeEventListener("focusin", e, !0), a.removeEventListener("focusout", e, !0);
		};
	}, [
		a,
		i,
		f
	]), b.useEffect(() => {
		a && (p || tt(a));
	}, [p, a]), /*#__PURE__*/ (0, A.jsxs)(Jt.Provider, {
		value: b.useMemo(() => ({
			preserveTabOrder: i,
			beforeOutsideRef: c,
			afterOutsideRef: l,
			beforeInsideRef: u,
			afterInsideRef: d,
			portalNode: a,
			setFocusManagerState: s
		}), [i, a]),
		children: [
			m && a && /*#__PURE__*/ (0, A.jsx)(Kt, {
				"data-type": "outside",
				ref: c,
				onFocus: (e) => {
					if ($e(e, a)) {
						var t;
						(t = u.current) == null || t.focus();
					} else Qe(o ? o.domReference : null)?.focus();
				}
			}),
			m && a && /*#__PURE__*/ (0, A.jsx)("span", {
				"aria-owns": a.id,
				style: qt
			}),
			a && /*#__PURE__*/ nt.createPortal(t, a),
			m && a && /*#__PURE__*/ (0, A.jsx)(Kt, {
				"data-type": "outside",
				ref: l,
				onFocus: (e) => {
					if ($e(e, a)) {
						var t;
						(t = d.current) == null || t.focus();
					} else Ze(o ? o.domReference : null)?.focus(), o != null && o.closeOnFocusOut && o?.onOpenChange(!1, e.nativeEvent, "focus-out");
				}
			})
		]
	});
}
var Qt = () => b.useContext(Jt);
function $t(e) {
	return b.useMemo(() => (t) => {
		e.forEach((e) => {
			e && (e.current = t);
		});
	}, e);
}
var en = 20, tn = [];
function nn() {
	tn = tn.filter((e) => e.deref()?.isConnected);
}
function rn(e) {
	nn(), e && d(e) !== "body" && (tn.push(new WeakRef(e)), tn.length > en && (tn = tn.slice(-20)));
}
function an() {
	return nn(), tn[tn.length - 1]?.deref();
}
function on(e) {
	let t = Ye();
	return be(e, t) ? e : ve(e, t)[0] || e;
}
function sn(e, t) {
	var n;
	if (!t.current.includes("floating") && !((n = e.getAttribute("role")) != null && n.includes("dialog"))) return;
	let r = Ye(), i = ye(e, r).filter((e) => {
		let t = e.getAttribute("data-tabindex") || "";
		return be(e, r) || e.hasAttribute("data-tabindex") && !t.startsWith("-");
	}), a = e.getAttribute("tabindex");
	t.current.includes("floating") || i.length === 0 ? a !== "0" && e.setAttribute("tabindex", "0") : (a !== "-1" || e.hasAttribute("data-tabindex") && e.getAttribute("data-tabindex") !== "-1") && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
var cn = /*#__PURE__*/ b.forwardRef(function(e, t) {
	return /*#__PURE__*/ (0, A.jsx)("button", {
		...e,
		type: "button",
		ref: t,
		tabIndex: -1,
		style: Gt
	});
});
function ln(e) {
	let { context: t, children: n, disabled: r = !1, order: i = ["content"], guards: a = !0, initialFocus: o = 0, returnFocus: s = !0, restoreFocus: c = !1, modal: l = !0, visuallyHiddenDismiss: u = !1, closeOnFocusOut: d = !0, outsideElementsInert: f = !1, getInsideElements: p = () => [] } = e, { open: m, onOpenChange: h, events: g, dataRef: _, elements: { domReference: y, floating: x } } = t, S = Je(() => _.current.floatingContext?.nodeId), C = Je(p), ee = typeof o == "number" && o < 0, w = Fe(y) && ee, te = Bt(), ne = te ? a : !0, T = !ne || te && f, E = Ke(i), re = Ke(o), ie = Ke(s), D = Ct(), O = Qt(), ae = b.useRef(null), oe = b.useRef(null), se = b.useRef(!1), ce = b.useRef(!1), le = b.useRef(-1), ue = b.useRef(-1), de = O != null, k = Ie(x), fe = Je(function(e) {
		return e === void 0 && (e = k), e ? ve(e, Ye()) : [];
	}), pe = Je((e) => {
		let t = fe(e);
		return E.current.map((e) => y && e === "reference" ? y : k && e === "floating" ? k : t).filter(Boolean).flat();
	});
	b.useEffect(() => {
		if (r || !l) return;
		function e(e) {
			if (e.key === "Tab") {
				ke(k, Oe(Ne(k))) && fe().length === 0 && !w && ze(e);
				let t = pe(), n = Ae(e);
				E.current[0] === "reference" && n === y && (ze(e), e.shiftKey ? jt(t[t.length - 1]) : jt(t[1])), E.current[1] === "floating" && n === k && e.shiftKey && (ze(e), jt(t[0]));
			}
		}
		let t = Ne(k);
		return t.addEventListener("keydown", e), () => {
			t.removeEventListener("keydown", e);
		};
	}, [
		r,
		y,
		k,
		l,
		E,
		w,
		fe,
		pe
	]), b.useEffect(() => {
		if (r || !x) return;
		function e(e) {
			let t = Ae(e), n = fe().indexOf(t);
			n !== -1 && (le.current = n);
		}
		return x.addEventListener("focusin", e), () => {
			x.removeEventListener("focusin", e);
		};
	}, [
		r,
		x,
		fe
	]), b.useEffect(() => {
		if (r || !d) return;
		function e() {
			ce.current = !0, setTimeout(() => {
				ce.current = !1;
			});
		}
		function t(e) {
			let t = e.relatedTarget, n = e.currentTarget, r = Ae(e);
			queueMicrotask(() => {
				let i = S(), a = !(ke(y, t) || ke(x, t) || ke(t, x) || ke(O?.portalNode, t) || t != null && t.hasAttribute(wt("focus-guard")) || D && (Le(D.nodesRef.current, i).find((e) => ke(e.context?.elements.floating, t) || ke(e.context?.elements.domReference, t)) || Re(D.nodesRef.current, i).find((e) => [e.context?.elements.floating, Ie(e.context?.elements.floating)].includes(t) || e.context?.elements.domReference === t)));
				if (n === y && k && sn(k, E), c && n !== y && !(r != null && r.isConnected) && Oe(Ne(k)) === Ne(k).body) {
					v(k) && k.focus();
					let e = le.current, t = fe(), n = t[e] || t[t.length - 1] || k;
					v(n) && n.focus();
				}
				if (_.current.insideReactTree) {
					_.current.insideReactTree = !1;
					return;
				}
				(w || !l) && t && a && !ce.current && t !== an() && (se.current = !0, h(!1, e, "focus-out"));
			});
		}
		let n = !!(!D && O);
		function i() {
			Tt(ue), _.current.insideReactTree = !0, ue.current = window.setTimeout(() => {
				_.current.insideReactTree = !1;
			});
		}
		if (x && v(y)) return y.addEventListener("focusout", t), y.addEventListener("pointerdown", e), x.addEventListener("focusout", t), n && x.addEventListener("focusout", i, !0), () => {
			y.removeEventListener("focusout", t), y.removeEventListener("pointerdown", e), x.removeEventListener("focusout", t), n && x.removeEventListener("focusout", i, !0);
		};
	}, [
		r,
		y,
		x,
		k,
		l,
		D,
		O,
		h,
		d,
		c,
		fe,
		w,
		S,
		E,
		_
	]);
	let me = b.useRef(null), he = b.useRef(null), ge = $t([me, O?.beforeInsideRef]), _e = $t([he, O?.afterInsideRef]);
	b.useEffect(() => {
		var e, t;
		if (r || !x) return;
		let n = Array.from((O == null || (e = O.portalNode) == null ? void 0 : e.querySelectorAll("[" + wt("portal") + "]")) || []), i = [
			x,
			(t = (D ? Re(D.nodesRef.current, S()) : []).find((e) => Fe(e.context?.elements.domReference || null))) == null || (t = t.context) == null ? void 0 : t.elements.domReference,
			...n,
			...C(),
			ae.current,
			oe.current,
			me.current,
			he.current,
			O?.beforeOutsideRef.current,
			O?.afterOutsideRef.current,
			E.current.includes("reference") || w ? y : null
		].filter((e) => e != null), a = l || w ? Wt(i, !T, T) : Wt(i);
		return () => {
			a();
		};
	}, [
		r,
		y,
		x,
		l,
		E,
		O,
		w,
		ne,
		T,
		D,
		S,
		C
	]), We(() => {
		if (r || !v(k)) return;
		let e = Oe(Ne(k));
		queueMicrotask(() => {
			let t = pe(k), n = re.current, r = (typeof n == "number" ? t[n] : n.current) || k, i = ke(k, e);
			!ee && !i && m && jt(r, { preventScroll: r === k });
		});
	}, [
		r,
		m,
		k,
		ee,
		pe,
		re
	]), We(() => {
		if (r || !k) return;
		let e = Ne(k);
		rn(Oe(e));
		function t(e) {
			let { reason: t, event: n, nested: r } = e;
			if (["hover", "safe-polygon"].includes(t) && n.type === "mouseleave" && (se.current = !0), t === "outside-press") if (r) se.current = !1;
			else if (Ve(n) || He(n)) se.current = !1;
			else {
				let e = !1;
				document.createElement("div").focus({ get preventScroll() {
					return e = !0, !1;
				} }), e ? se.current = !1 : se.current = !0;
			}
		}
		g.on("openchange", t);
		let n = e.createElement("span");
		n.setAttribute("tabindex", "-1"), n.setAttribute("aria-hidden", "true"), Object.assign(n.style, Gt), de && y && y.insertAdjacentElement("afterend", n);
		function i() {
			if (typeof ie.current == "boolean") {
				let e = y || an();
				return e && e.isConnected ? e : n;
			}
			return ie.current.current || n;
		}
		return () => {
			g.off("openchange", t);
			let r = Oe(e), a = ke(x, r) || D && Le(D.nodesRef.current, S(), !1).some((e) => ke(e.context?.elements.floating, r)), o = i();
			queueMicrotask(() => {
				let t = on(o);
				ie.current && !se.current && v(t) && (!(t !== r && r !== e.body) || a) && t.focus({ preventScroll: !0 }), n.remove();
			});
		};
	}, [
		r,
		x,
		k,
		ie,
		_,
		g,
		D,
		de,
		y,
		S
	]), b.useEffect(() => (queueMicrotask(() => {
		se.current = !1;
	}), () => {
		queueMicrotask(nn);
	}), [r]), We(() => {
		if (!r && O) return O.setFocusManagerState({
			modal: l,
			closeOnFocusOut: d,
			open: m,
			onOpenChange: h,
			domReference: y
		}), () => {
			O.setFocusManagerState(null);
		};
	}, [
		r,
		O,
		l,
		m,
		h,
		d,
		y
	]), We(() => {
		r || k && sn(k, E);
	}, [
		r,
		k,
		E
	]);
	function ye(e) {
		return r || !u || !l ? null : /*#__PURE__*/ (0, A.jsx)(cn, {
			ref: e === "start" ? ae : oe,
			onClick: (e) => h(!1, e.nativeEvent),
			children: typeof u == "string" ? u : "Dismiss"
		});
	}
	let be = !r && ne && (l ? !w : !0) && (de || l);
	return /*#__PURE__*/ (0, A.jsxs)(A.Fragment, { children: [
		be && /*#__PURE__*/ (0, A.jsx)(Kt, {
			"data-type": "inside",
			ref: ge,
			onFocus: (e) => {
				if (l) {
					let e = pe();
					jt(i[0] === "reference" ? e[0] : e[e.length - 1]);
				} else if (O != null && O.preserveTabOrder && O.portalNode) if (se.current = !1, $e(e, O.portalNode)) Ze(y)?.focus();
				else {
					var t;
					(t = O.beforeOutsideRef.current) == null || t.focus();
				}
			}
		}),
		!w && ye("start"),
		n,
		ye("end"),
		be && /*#__PURE__*/ (0, A.jsx)(Kt, {
			"data-type": "inside",
			ref: _e,
			onFocus: (e) => {
				if (l) jt(pe()[0]);
				else if (O != null && O.preserveTabOrder && O.portalNode) if (d && (se.current = !0), $e(e, O.portalNode)) Qe(y)?.focus();
				else {
					var t;
					(t = O.afterOutsideRef.current) == null || t.focus();
				}
			}
		})
	] });
}
var un = {
	pointerdown: "onPointerDown",
	mousedown: "onMouseDown",
	click: "onClick"
}, dn = {
	pointerdown: "onPointerDownCapture",
	mousedown: "onMouseDownCapture",
	click: "onClickCapture"
}, fn = (e) => ({
	escapeKey: typeof e == "boolean" ? e : e?.escapeKey ?? !1,
	outsidePress: typeof e == "boolean" ? e : e?.outsidePress ?? !0
});
function pn(e, t) {
	t === void 0 && (t = {});
	let { open: n, onOpenChange: r, elements: i, dataRef: a } = e, { enabled: u = !0, escapeKey: d = !0, outsidePress: p = !0, outsidePressEvent: m = "pointerdown", referencePress: h = !1, referencePressEvent: _ = "pointerdown", ancestorScroll: y = !1, bubbles: x, capture: S } = t, C = Ct(), ee = Je(typeof p == "function" ? p : () => !1), w = typeof p == "function" ? ee : p, te = b.useRef(!1), { escapeKey: ne, outsidePress: T } = fn(x), { escapeKey: E, outsidePress: re } = fn(S), ie = b.useRef(!1), D = Je((e) => {
		if (!n || !u || !d || e.key !== "Escape" || ie.current) return;
		let t = a.current.floatingContext?.nodeId, i = C ? Le(C.nodesRef.current, t) : [];
		if (!ne && (e.stopPropagation(), i.length > 0)) {
			let e = !0;
			if (i.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, Be(e) ? e.nativeEvent : e, "escape-key");
	}), O = Je((e) => {
		var t;
		let n = () => {
			var t;
			D(e), (t = Ae(e)) == null || t.removeEventListener("keydown", n);
		};
		(t = Ae(e)) == null || t.addEventListener("keydown", n);
	}), ae = Je((e) => {
		let t = a.current.insideReactTree;
		a.current.insideReactTree = !1;
		let n = te.current;
		if (te.current = !1, m === "click" && n || t || typeof w == "function" && !w(e)) return;
		let s = Ae(e), c = "[" + wt("inert") + "]", u = Ne(i.floating).querySelectorAll(c), d = l(s) ? s : null;
		for (; d && !o(d);) {
			let e = g(d);
			if (o(e) || !l(e)) break;
			d = e;
		}
		if (u.length && l(s) && !Me(s) && !ke(s, i.floating) && Array.from(u).every((e) => !ke(d, e))) return;
		if (v(s) && ce) {
			let t = o(s), n = f(s), r = /auto|scroll/, i = t || r.test(n.overflowX), a = t || r.test(n.overflowY), c = i && s.clientWidth > 0 && s.scrollWidth > s.clientWidth, l = a && s.clientHeight > 0 && s.scrollHeight > s.clientHeight, u = n.direction === "rtl", d = l && (u ? e.offsetX <= s.offsetWidth - s.clientWidth : e.offsetX > s.clientWidth), p = c && e.offsetY > s.clientHeight;
			if (d || p) return;
		}
		let p = a.current.floatingContext?.nodeId, h = C && Le(C.nodesRef.current, p).some((t) => je(e, t.context?.elements.floating));
		if (je(e, i.floating) || je(e, i.domReference) || h) return;
		let _ = C ? Le(C.nodesRef.current, p) : [];
		if (_.length > 0) {
			let e = !0;
			if (_.forEach((t) => {
				var n;
				if ((n = t.context) != null && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
					e = !1;
					return;
				}
			}), !e) return;
		}
		r(!1, e, "outside-press");
	}), oe = Je((e) => {
		var t;
		let n = () => {
			var t;
			ae(e), (t = Ae(e)) == null || t.removeEventListener(m, n);
		};
		(t = Ae(e)) == null || t.addEventListener(m, n);
	});
	b.useEffect(() => {
		if (!n || !u) return;
		a.current.__escapeKeyBubbles = ne, a.current.__outsidePressBubbles = T;
		let e = -1;
		function t(e) {
			r(!1, e, "ancestor-scroll");
		}
		function o() {
			window.clearTimeout(e), ie.current = !0;
		}
		function f() {
			e = window.setTimeout(() => {
				ie.current = !1;
			}, s() ? 5 : 0);
		}
		let p = Ne(i.floating);
		d && (p.addEventListener("keydown", E ? O : D, E), p.addEventListener("compositionstart", o), p.addEventListener("compositionend", f)), w && p.addEventListener(m, re ? oe : ae, re);
		let h = [];
		return y && (l(i.domReference) && (h = c(i.domReference)), l(i.floating) && (h = h.concat(c(i.floating))), !l(i.reference) && i.reference && i.reference.contextElement && (h = h.concat(c(i.reference.contextElement)))), h = h.filter((e) => e !== p.defaultView?.visualViewport), h.forEach((e) => {
			e.addEventListener("scroll", t);
		}), () => {
			d && (p.removeEventListener("keydown", E ? O : D, E), p.removeEventListener("compositionstart", o), p.removeEventListener("compositionend", f)), w && p.removeEventListener(m, re ? oe : ae, re), h.forEach((e) => {
				e.removeEventListener("scroll", t);
			}), window.clearTimeout(e);
		};
	}, [
		a,
		i,
		d,
		w,
		m,
		n,
		r,
		y,
		u,
		ne,
		T,
		D,
		E,
		O,
		ae,
		re,
		oe
	]), b.useEffect(() => {
		a.current.insideReactTree = !1;
	}, [
		a,
		w,
		m
	]);
	let se = b.useMemo(() => ({
		onKeyDown: D,
		...h && {
			[un[_]]: (e) => {
				r(!1, e.nativeEvent, "reference-press");
			},
			..._ !== "click" && { onClick(e) {
				r(!1, e.nativeEvent, "reference-press");
			} }
		}
	}), [
		D,
		r,
		h,
		_
	]), ce = b.useMemo(() => {
		function e(e) {
			e.button === 0 && (te.current = !0);
		}
		return {
			onKeyDown: D,
			onMouseDown: e,
			onMouseUp: e,
			[dn[m]]: () => {
				a.current.insideReactTree = !0;
			}
		};
	}, [
		D,
		m,
		a
	]);
	return b.useMemo(() => u ? {
		reference: se,
		floating: ce
	} : {}, [
		u,
		se,
		ce
	]);
}
function mn(e) {
	let { open: t = !1, onOpenChange: n, elements: r } = e, i = vt(), a = b.useRef({}), [o] = b.useState(() => yt()), s = St() != null, [c, l] = b.useState(r.reference), u = Je((e, t, r) => {
		a.current.openEvent = e ? t : void 0, o.emit("openchange", {
			open: e,
			event: t,
			reason: r,
			nested: s
		}), n?.(e, t, r);
	}), d = b.useMemo(() => ({ setPositionReference: l }), []), f = b.useMemo(() => ({
		reference: c || r.reference || null,
		floating: r.floating || null,
		domReference: r.reference
	}), [
		c,
		r.reference,
		r.floating
	]);
	return b.useMemo(() => ({
		dataRef: a,
		open: t,
		onOpenChange: u,
		elements: f,
		events: o,
		floatingId: i,
		refs: d
	}), [
		t,
		u,
		f,
		o,
		i,
		d
	]);
}
function hn(e) {
	let { elements: t, ...n } = e === void 0 ? {} : e, { nodeId: r } = n, i = mn({
		...n,
		elements: {
			reference: t?.reference ?? null,
			floating: t?.floating ?? null
		}
	}), a = n.rootContext || i, o = a.elements, [s, c] = b.useState(null), [d, f] = b.useState(null), p = o?.domReference || s, m = b.useRef(null), h = Ct();
	We(() => {
		p && (m.current = p);
	}, [p]);
	let g = u({
		...n,
		elements: {
			...o,
			...d && { reference: d }
		}
	}), _ = b.useCallback((e) => {
		let t = l(e) ? {
			getBoundingClientRect: () => e.getBoundingClientRect(),
			getClientRects: () => e.getClientRects(),
			contextElement: e
		} : e;
		f(t), g.refs.setReference(t);
	}, [g.refs]), v = b.useCallback((e) => {
		(l(e) || e === null) && (m.current = e, c(e)), (l(g.refs.reference.current) || g.refs.reference.current === null || e !== null && !l(e)) && g.refs.setReference(e);
	}, [g.refs]), y = b.useMemo(() => ({
		...g.refs,
		setReference: v,
		setPositionReference: _,
		domReference: m
	}), [
		g.refs,
		v,
		_
	]), x = b.useMemo(() => ({
		...g.elements,
		domReference: p
	}), [g.elements, p]), S = b.useMemo(() => ({
		...g,
		...a,
		refs: y,
		elements: x,
		nodeId: r
	}), [
		g,
		y,
		x,
		r,
		a
	]);
	return We(() => {
		a.dataRef.current.floatingContext = S;
		let e = h?.nodesRef.current.find((e) => e.id === r);
		e && (e.context = S);
	}), b.useMemo(() => ({
		...g,
		context: S,
		refs: y,
		elements: x
	}), [
		g,
		y,
		x,
		S
	]);
}
function gn(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = n === "item", a = e;
	if (i && e) {
		let { [at]: t, [ot]: n, ...r } = e;
		a = r;
	}
	return {
		...n === "floating" && {
			tabIndex: -1,
			[it]: ""
		},
		...a,
		...t.map((t) => {
			let r = t ? t[n] : null;
			return typeof r == "function" ? e ? r(e) : null : r;
		}).concat(e).reduce((e, t) => (t && Object.entries(t).forEach((t) => {
			let [n, a] = t;
			if (!(i && [at, ot].includes(n))) if (n.indexOf("on") === 0) {
				if (r.has(n) || r.set(n, []), typeof a == "function") {
					var o;
					(o = r.get(n)) == null || o.push(a), e[n] = function() {
						var e = [...arguments];
						return r.get(n)?.map((t) => t(...e)).find((e) => e !== void 0);
					};
				}
			} else e[n] = a;
		}), e), {})
	};
}
function _n(e) {
	e === void 0 && (e = []);
	let t = e.map((e) => e?.reference), n = e.map((e) => e?.floating), r = e.map((e) => e?.item), i = b.useCallback((t) => gn(t, e, "reference"), t), a = b.useCallback((t) => gn(t, e, "floating"), n), o = b.useCallback((t) => gn(t, e, "item"), r);
	return b.useMemo(() => ({
		getReferenceProps: i,
		getFloatingProps: a,
		getItemProps: o
	}), [
		i,
		a,
		o
	]);
}
var vn = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function yn(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function bn(e, t) {
	let [n, r] = b.useState(e);
	return e && !n && r(!0), b.useEffect(() => {
		if (!e && n) {
			let e = setTimeout(() => r(!1), t);
			return () => clearTimeout(e);
		}
	}, [
		e,
		n,
		t
	]), n;
}
function xn(e, t) {
	t === void 0 && (t = {});
	let { open: n, elements: { floating: r } } = e, { duration: i = 250 } = t, a = (typeof i == "number" ? i : i.close) || 0, [o, s] = b.useState("unmounted"), c = bn(n, a);
	return !c && o === "close" && s("unmounted"), We(() => {
		if (r) {
			if (n) {
				s("initial");
				let e = requestAnimationFrame(() => {
					nt.flushSync(() => {
						s("open");
					});
				});
				return () => {
					cancelAnimationFrame(e);
				};
			}
			s("close");
		}
	}, [n, r]), {
		isMounted: c,
		status: o
	};
}
function Sn(e, t) {
	t === void 0 && (t = {});
	let { initial: n = { opacity: 0 }, open: r, close: i, common: a, duration: o = 250 } = t, s = e.placement, c = s.split("-")[0], l = b.useMemo(() => ({
		side: c,
		placement: s
	}), [c, s]), u = typeof o == "number", d = (u ? o : o.open) || 0, f = (u ? o : o.close) || 0, [p, m] = b.useState(() => ({
		...yn(a, l),
		...yn(n, l)
	})), { isMounted: h, status: g } = xn(e, { duration: o }), _ = Ke(n), v = Ke(r), y = Ke(i), x = Ke(a);
	return We(() => {
		let e = yn(_.current, l), t = yn(y.current, l), n = yn(x.current, l), r = yn(v.current, l) || Object.keys(e).reduce((e, t) => (e[t] = "", e), {});
		if (g === "initial" && m((t) => ({
			transitionProperty: t.transitionProperty,
			...n,
			...e
		})), g === "open" && m({
			transitionProperty: Object.keys(r).map(vn).join(","),
			transitionDuration: d + "ms",
			...n,
			...r
		}), g === "close") {
			let r = t || e;
			m({
				transitionProperty: Object.keys(r).map(vn).join(","),
				transitionDuration: f + "ms",
				...n,
				...r
			});
		}
	}, [
		f,
		y,
		_,
		v,
		x,
		d,
		g,
		l
	]), {
		isMounted: h,
		styles: p
	};
}
function Cn(e, t, n) {
	return n === void 0 && (n = !0), e.filter((e) => e.parentId === t && (!n || e.context?.open)).flatMap((t) => [t, ...Cn(e, t.id, n)]);
}
function wn(e, t) {
	let [n, r] = e, i = !1, a = t.length;
	for (let e = 0, o = a - 1; e < a; o = e++) {
		let [a, s] = t[e] || [0, 0], [c, l] = t[o] || [0, 0];
		s >= r != l >= r && n <= (c - a) * (r - s) / (l - s) + a && (i = !i);
	}
	return i;
}
function Tn(e, t) {
	return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function En(e) {
	e === void 0 && (e = {});
	let { buffer: t = .5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e, i = { current: -1 }, a = !1, o = null, s = null, c = typeof performance < "u" ? performance.now() : 0;
	function u(e, t) {
		let n = performance.now(), r = n - c;
		if (o === null || s === null || r === 0) return o = e, s = t, c = n, null;
		let i = e - o, a = t - s, l = Math.sqrt(i * i + a * a) / r;
		return o = e, s = t, c = n, l;
	}
	let d = (e) => {
		let { x: n, y: o, placement: s, elements: c, onClose: d, nodeId: f, tree: p } = e;
		return function(e) {
			function m() {
				Tt(i), d();
			}
			if (Tt(i), !c.domReference || !c.floating || s == null || n == null || o == null) return;
			let { clientX: h, clientY: g } = e, _ = [h, g], v = Nt(e), y = e.type === "mouseleave", b = Mt(c.floating, v), x = Mt(c.domReference, v), S = c.domReference.getBoundingClientRect(), C = c.floating.getBoundingClientRect(), ee = s.split("-")[0], w = n > C.right - C.width / 2, te = o > C.bottom - C.height / 2, ne = Tn(_, S), T = C.width > S.width, E = C.height > S.height, re = (T ? S : C).left, ie = (T ? S : C).right, D = (E ? S : C).top, O = (E ? S : C).bottom;
			if (b && (a = !0, !y)) return;
			if (x && (a = !1), x && !y) {
				a = !0;
				return;
			}
			if (y && l(e.relatedTarget) && Mt(c.floating, e.relatedTarget) || p && Cn(p.nodesRef.current, f).length) return;
			if (ee === "top" && o >= S.bottom - 1 || ee === "bottom" && o <= S.top + 1 || ee === "left" && n >= S.right - 1 || ee === "right" && n <= S.left + 1) return m();
			let ae = [];
			switch (ee) {
				case "top":
					ae = [
						[re, S.top + 1],
						[re, C.bottom - 1],
						[ie, C.bottom - 1],
						[ie, S.top + 1]
					];
					break;
				case "bottom":
					ae = [
						[re, C.top + 1],
						[re, S.bottom - 1],
						[ie, S.bottom - 1],
						[ie, C.top + 1]
					];
					break;
				case "left":
					ae = [
						[C.right - 1, O],
						[C.right - 1, D],
						[S.left + 1, D],
						[S.left + 1, O]
					];
					break;
				case "right":
					ae = [
						[S.right - 1, O],
						[S.right - 1, D],
						[C.left + 1, D],
						[C.left + 1, O]
					];
					break;
			}
			function oe(e) {
				let [n, r] = e;
				switch (ee) {
					case "top": return [
						[T ? n + t / 2 : w ? n + t * 4 : n - t * 4, r + t + 1],
						[T ? n - t / 2 : w ? n + t * 4 : n - t * 4, r + t + 1],
						[C.left, w || T ? C.bottom - t : C.top],
						[C.right, w ? T ? C.bottom - t : C.top : C.bottom - t]
					];
					case "bottom": return [
						[T ? n + t / 2 : w ? n + t * 4 : n - t * 4, r - t],
						[T ? n - t / 2 : w ? n + t * 4 : n - t * 4, r - t],
						[C.left, w || T ? C.top + t : C.bottom],
						[C.right, w ? T ? C.top + t : C.bottom : C.top + t]
					];
					case "left": {
						let e = [n + t + 1, E ? r + t / 2 : te ? r + t * 4 : r - t * 4], i = [n + t + 1, E ? r - t / 2 : te ? r + t * 4 : r - t * 4];
						return [
							[te || E ? C.right - t : C.left, C.top],
							[te ? E ? C.right - t : C.left : C.right - t, C.bottom],
							e,
							i
						];
					}
					case "right": return [
						[n - t, E ? r + t / 2 : te ? r + t * 4 : r - t * 4],
						[n - t, E ? r - t / 2 : te ? r + t * 4 : r - t * 4],
						[te || E ? C.left + t : C.right, C.top],
						[te ? E ? C.left + t : C.right : C.left + t, C.bottom]
					];
				}
			}
			if (!wn([h, g], ae)) {
				if (a && !ne) return m();
				if (!y && r) {
					let t = u(e.clientX, e.clientY);
					if (t !== null && t < .1) return m();
				}
				wn([h, g], oe([n, o])) ? !a && r && (i.current = window.setTimeout(m, 40)) : m();
			}
		};
	};
	return d.__options = { blockPointerEvents: n }, d;
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/derived.js
var Dn = class e {
	constructor(t) {
		this.listeners = /* @__PURE__ */ new Set(), this._subscriptions = [], this.lastSeenDepValues = [], this.getDepVals = () => {
			let e = this.options.deps.length, t = Array(e), n = Array(e);
			for (let r = 0; r < e; r++) {
				let e = this.options.deps[r];
				t[r] = e.prevState, n[r] = e.state;
			}
			return this.lastSeenDepValues = n, {
				prevDepVals: t,
				currDepVals: n,
				prevVal: this.prevState ?? void 0
			};
		}, this.recompute = () => {
			var e, t;
			this.prevState = this.state;
			let n = this.getDepVals();
			this.state = this.options.fn(n), (t = (e = this.options).onUpdate) == null || t.call(e);
		}, this.checkIfRecalculationNeededDeeply = () => {
			for (let t of this.options.deps) t instanceof e && t.checkIfRecalculationNeededDeeply();
			let t = !1, n = this.lastSeenDepValues, { currDepVals: r } = this.getDepVals();
			for (let e = 0; e < r.length; e++) if (r[e] !== n[e]) {
				t = !0;
				break;
			}
			t && this.recompute();
		}, this.mount = () => (this.registerOnGraph(), this.checkIfRecalculationNeededDeeply(), () => {
			this.unregisterFromGraph();
			for (let e of this._subscriptions) e();
		}), this.subscribe = (e) => {
			var t;
			this.listeners.add(e);
			let n = (t = this.options).onSubscribe?.call(t, e, this);
			return () => {
				this.listeners.delete(e), n?.();
			};
		}, this.options = t, this.state = t.fn({
			prevDepVals: void 0,
			prevVal: void 0,
			currDepVals: this.getDepVals().currDepVals
		});
	}
	registerOnGraph(t = this.options.deps) {
		for (let n of t) if (n instanceof e) n.registerOnGraph(), this.registerOnGraph(n.options.deps);
		else if (n instanceof Bn) {
			let e = On.get(n);
			e || (e = /* @__PURE__ */ new Set(), On.set(n, e)), e.add(this);
			let t = kn.get(this);
			t || (t = /* @__PURE__ */ new Set(), kn.set(this, t)), t.add(n);
		}
	}
	unregisterFromGraph(t = this.options.deps) {
		for (let n of t) if (n instanceof e) this.unregisterFromGraph(n.options.deps);
		else if (n instanceof Bn) {
			let e = On.get(n);
			e && e.delete(this);
			let t = kn.get(this);
			t && t.delete(n);
		}
	}
}, On = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), An = { current: [] }, jn = !1, Mn = 0, Nn = /* @__PURE__ */ new Set(), Pn = /* @__PURE__ */ new Map();
function Fn(e) {
	let t = Array.from(e).sort((e, t) => e instanceof Dn && e.options.deps.includes(t) ? 1 : t instanceof Dn && t.options.deps.includes(e) ? -1 : 0);
	for (let e of t) {
		if (An.current.includes(e)) continue;
		An.current.push(e), e.recompute();
		let t = kn.get(e);
		if (t) for (let e of t) {
			let t = On.get(e);
			t && Fn(t);
		}
	}
}
function In(e) {
	let t = {
		prevVal: e.prevState,
		currentVal: e.state
	};
	for (let n of e.listeners) n(t);
}
function Ln(e) {
	let t = {
		prevVal: e.prevState,
		currentVal: e.state
	};
	for (let n of e.listeners) n(t);
}
function Rn(e) {
	if (Mn > 0 && !Pn.has(e) && Pn.set(e, e.prevState), Nn.add(e), !(Mn > 0) && !jn) try {
		for (jn = !0; Nn.size > 0;) {
			let e = Array.from(Nn);
			Nn.clear();
			for (let t of e) t.prevState = Pn.get(t) ?? t.prevState, In(t);
			for (let t of e) {
				let e = On.get(t);
				e && (An.current.push(t), Fn(e));
			}
			for (let t of e) {
				let e = On.get(t);
				if (e) for (let t of e) Ln(t);
			}
		}
	} finally {
		jn = !1, An.current = [], Pn.clear();
	}
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/types.js
function zn(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/store.js
var Bn = class {
	constructor(e, t) {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (e) => {
			var t;
			this.listeners.add(e);
			let n = ((t = this.options)?.onSubscribe)?.call(t, e, this);
			return () => {
				this.listeners.delete(e), n?.();
			};
		}, this.prevState = e, this.state = e, this.options = t;
	}
	setState(e) {
		var t, n;
		this.prevState = this.state, this.options?.updateFn ? this.state = this.options.updateFn(this.prevState)(e) : zn(e) ? this.state = e(this.prevState) : this.state = e, (n = (t = this.options)?.onUpdate) == null || n.call(t), Rn(this);
	}
}, Vn = /* @__PURE__ */ e(h(), 1);
function Hn(e, t = (e) => e) {
	return (0, Vn.useSyncExternalStoreWithSelector)(e.subscribe, () => e.state, () => e.state, t, Un);
}
function Un(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!t.has(n) || !Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	let n = Wn(e);
	if (n.length !== Wn(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
function Wn(e) {
	return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
//#endregion
//#region node_modules/@blocknote/core/dist/BlockNoteExtension-B6RhuQ3V.js
var Gn = Symbol("originalFactory");
function j(e) {
	if (typeof e == "object" && "key" in e) return function t() {
		return e[Gn] = t, e;
	};
	if (typeof e != "function") throw Error("factory must be a function");
	return function t(n) {
		return (r) => {
			let i = e({
				editor: r.editor,
				options: n
			});
			return i[Gn] = t, i;
		};
	};
}
function Kn(e, t) {
	return new Bn(e, t);
}
//#endregion
//#region ../../node_modules/orderedmap/dist/index.js
function qn(e) {
	this.content = e;
}
qn.prototype = {
	constructor: qn,
	find: function(e) {
		for (var t = 0; t < this.content.length; t += 2) if (this.content[t] === e) return t;
		return -1;
	},
	get: function(e) {
		var t = this.find(e);
		return t == -1 ? void 0 : this.content[t + 1];
	},
	update: function(e, t, n) {
		var r = n && n != e ? this.remove(n) : this, i = r.find(e), a = r.content.slice();
		return i == -1 ? a.push(n || e, t) : (a[i + 1] = t, n && (a[i] = n)), new qn(a);
	},
	remove: function(e) {
		var t = this.find(e);
		if (t == -1) return this;
		var n = this.content.slice();
		return n.splice(t, 2), new qn(n);
	},
	addToStart: function(e, t) {
		return new qn([e, t].concat(this.remove(e).content));
	},
	addToEnd: function(e, t) {
		var n = this.remove(e).content.slice();
		return n.push(e, t), new qn(n);
	},
	addBefore: function(e, t, n) {
		var r = this.remove(t), i = r.content.slice(), a = r.find(e);
		return i.splice(a == -1 ? i.length : a, 0, t, n), new qn(i);
	},
	forEach: function(e) {
		for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1]);
	},
	prepend: function(e) {
		return e = qn.from(e), e.size ? new qn(e.content.concat(this.subtract(e).content)) : this;
	},
	append: function(e) {
		return e = qn.from(e), e.size ? new qn(this.subtract(e).content.concat(e.content)) : this;
	},
	subtract: function(e) {
		var t = this;
		e = qn.from(e);
		for (var n = 0; n < e.content.length; n += 2) t = t.remove(e.content[n]);
		return t;
	},
	toObject: function() {
		var e = {};
		return this.forEach(function(t, n) {
			e[t] = n;
		}), e;
	},
	get size() {
		return this.content.length >> 1;
	}
}, qn.from = function(e) {
	if (e instanceof qn) return e;
	var t = [];
	if (e) for (var n in e) t.push(n, e[n]);
	return new qn(t);
};
//#endregion
//#region ../../node_modules/prosemirror-model/dist/index.js
function Jn(e, t, n) {
	for (let r = 0;; r++) {
		if (r == e.childCount || r == t.childCount) return e.childCount == t.childCount ? null : n;
		let i = e.child(r), a = t.child(r);
		if (i == a) {
			n += i.nodeSize;
			continue;
		}
		if (!i.sameMarkup(a)) return n;
		if (i.isText && i.text != a.text) {
			let e = i.text, t = a.text, r = 0;
			for (; e[r] == t[r]; r++) n++;
			return r && r < e.length && r < t.length && Zn(e.charCodeAt(r - 1)) && Xn(e.charCodeAt(r)) && n--, n;
		}
		if (i.content.size || a.content.size) {
			let e = Jn(i.content, a.content, n + 1);
			if (e != null) return e;
		}
		n += i.nodeSize;
	}
}
function Yn(e, t, n, r) {
	for (let i = e.childCount, a = t.childCount;;) {
		if (i == 0 || a == 0) return i == a ? null : {
			a: n,
			b: r
		};
		let o = e.child(--i), s = t.child(--a), c = o.nodeSize;
		if (o == s) {
			n -= c, r -= c;
			continue;
		}
		if (!o.sameMarkup(s)) return {
			a: n,
			b: r
		};
		if (o.isText && o.text != s.text) {
			let e = o.text, t = s.text, i = e.length, a = t.length;
			for (; i > 0 && a > 0 && e[i - 1] == t[a - 1];) i--, a--, n--, r--;
			return i && a && i < e.length && Zn(e.charCodeAt(i - 1)) && Xn(e.charCodeAt(i)) && (n++, r++), {
				a: n,
				b: r
			};
		}
		if (o.content.size || s.content.size) {
			let e = Yn(o.content, s.content, n - 1, r - 1);
			if (e) return e;
		}
		n -= c, r -= c;
	}
}
function Xn(e) {
	return e >= 56320 && e < 57344;
}
function Zn(e) {
	return e >= 55296 && e < 56320;
}
var M = class e {
	constructor(e, t) {
		if (this.content = e, this.size = t || 0, t == null) for (let t = 0; t < e.length; t++) this.size += e[t].nodeSize;
	}
	nodesBetween(e, t, n, r = 0, i) {
		for (let a = 0, o = 0; o < t; a++) {
			let s = this.content[a], c = o + s.nodeSize;
			if (c > e && n(s, r + o, i || null, a) !== !1 && s.content.size) {
				let i = o + 1;
				s.nodesBetween(Math.max(0, e - i), Math.min(s.content.size, t - i), n, r + i);
			}
			o = c;
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e);
	}
	textBetween(e, t, n, r) {
		let i = "", a = !0;
		return this.nodesBetween(e, t, (o, s) => {
			let c = o.isText ? o.text.slice(Math.max(e, s) - s, t - s) : o.isLeaf ? r ? typeof r == "function" ? r(o) : r : o.type.spec.leafText ? o.type.spec.leafText(o) : "" : "";
			o.isBlock && (o.isLeaf && c || o.isTextblock) && n && (a ? a = !1 : i += n), i += c;
		}, 0), i;
	}
	append(t) {
		if (!t.size) return this;
		if (!this.size) return t;
		let n = this.lastChild, r = t.firstChild, i = this.content.slice(), a = 0;
		for (n.isText && n.sameMarkup(r) && (i[i.length - 1] = n.withText(n.text + r.text), a = 1); a < t.content.length; a++) i.push(t.content[a]);
		return new e(i, this.size + t.size);
	}
	cut(t, n = this.size) {
		if (t == 0 && n == this.size) return this;
		let r = [], i = 0;
		if (n > t) for (let e = 0, a = 0; a < n; e++) {
			let o = this.content[e], s = a + o.nodeSize;
			s > t && ((a < t || s > n) && (o = o.isText ? o.cut(Math.max(0, t - a), Math.min(o.text.length, n - a)) : o.cut(Math.max(0, t - a - 1), Math.min(o.content.size, n - a - 1))), r.push(o), i += o.nodeSize), a = s;
		}
		return new e(r, i);
	}
	cutByIndex(t, n) {
		return t == n ? e.empty : t == 0 && n == this.content.length ? this : new e(this.content.slice(t, n));
	}
	replaceChild(t, n) {
		let r = this.content[t];
		if (r == n) return this;
		let i = this.content.slice(), a = this.size + n.nodeSize - r.nodeSize;
		return i[t] = n, new e(i, a);
	}
	addToStart(t) {
		return new e([t].concat(this.content), this.size + t.nodeSize);
	}
	addToEnd(t) {
		return new e(this.content.concat(t), this.size + t.nodeSize);
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let t = 0; t < this.content.length; t++) if (!this.content[t].eq(e.content[t])) return !1;
		return !0;
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null;
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null;
	}
	get childCount() {
		return this.content.length;
	}
	child(e) {
		let t = this.content[e];
		if (!t) throw RangeError("Index " + e + " out of range for " + this);
		return t;
	}
	maybeChild(e) {
		return this.content[e] || null;
	}
	forEach(e) {
		for (let t = 0, n = 0; t < this.content.length; t++) {
			let r = this.content[t];
			e(r, n, t), n += r.nodeSize;
		}
	}
	findDiffStart(e, t = 0) {
		return Jn(this, e, t);
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return Yn(this, e, t, n);
	}
	findIndex(e) {
		if (e == 0) return $n(0, e);
		if (e == this.size) return $n(this.content.length, e);
		if (e > this.size || e < 0) throw RangeError(`Position ${e} outside of fragment (${this})`);
		for (let t = 0, n = 0;; t++) {
			let r = this.child(t), i = n + r.nodeSize;
			if (i >= e) return i == e ? $n(t + 1, i) : $n(t, n);
			n = i;
		}
	}
	toString() {
		return "<" + this.toStringInner() + ">";
	}
	toStringInner() {
		return this.content.join(", ");
	}
	toJSON() {
		return this.content.length ? this.content.map((e) => e.toJSON()) : null;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		if (!Array.isArray(n)) throw RangeError("Invalid input for Fragment.fromJSON");
		return e.fromArray(n.map(t.nodeFromJSON));
	}
	static fromArray(t) {
		if (!t.length) return e.empty;
		let n, r = 0;
		for (let e = 0; e < t.length; e++) {
			let i = t[e];
			r += i.nodeSize, e && i.isText && t[e - 1].sameMarkup(i) ? (n ||= t.slice(0, e), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
		}
		return new e(n || t, r);
	}
	static from(t) {
		if (!t) return e.empty;
		if (t instanceof e) return t;
		if (Array.isArray(t)) return this.fromArray(t);
		if (t.attrs) return new e([t], t.nodeSize);
		throw RangeError("Can not convert " + t + " to a Fragment" + (t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
	}
};
M.empty = new M([], 0);
var Qn = {
	index: 0,
	offset: 0
};
function $n(e, t) {
	return Qn.index = e, Qn.offset = t, Qn;
}
function er(e, t) {
	if (e === t) return !0;
	if (!(e && typeof e == "object") || !(t && typeof t == "object")) return !1;
	let n = Array.isArray(e);
	if (Array.isArray(t) != n) return !1;
	if (n) {
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!er(e[n], t[n])) return !1;
	} else {
		for (let n in e) if (!(n in t) || !er(e[n], t[n])) return !1;
		for (let n in t) if (!(n in e)) return !1;
	}
	return !0;
}
var N = class e {
	constructor(e, t) {
		this.type = e, this.attrs = t;
	}
	addToSet(e) {
		let t, n = !1;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.eq(i)) return e;
			if (this.type.excludes(i.type)) t ||= e.slice(0, r);
			else if (i.type.excludes(this.type)) return e;
			else !n && i.type.rank > this.type.rank && (t ||= e.slice(0, r), t.push(this), n = !0), t && t.push(i);
		}
		return t ||= e.slice(), n || t.push(this), t;
	}
	removeFromSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (this.eq(e[t])) return !0;
		return !1;
	}
	eq(e) {
		return this == e || this.type == e.type && er(this.attrs, e.attrs);
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Mark.fromJSON");
		let n = e.marks[t.type];
		if (!n) throw RangeError(`There is no mark type ${t.type} in this schema`);
		let r = n.create(t.attrs);
		return n.checkAttrs(r.attrs), r;
	}
	static sameSet(e, t) {
		if (e == t) return !0;
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!e[n].eq(t[n])) return !1;
		return !0;
	}
	static setFrom(t) {
		if (!t || Array.isArray(t) && t.length == 0) return e.none;
		if (t instanceof e) return [t];
		let n = t.slice();
		return n.sort((e, t) => e.type.rank - t.type.rank), n;
	}
};
N.none = [];
var tr = class extends Error {}, P = class e {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n;
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd;
	}
	insertAt(t, n) {
		let r = rr(this.content, t + this.openStart, n, this.openStart + 1, this.openEnd + 1);
		return r && new e(r, this.openStart, this.openEnd);
	}
	removeBetween(t, n) {
		return new e(nr(this.content, t + this.openStart, n + this.openStart), this.openStart, this.openEnd);
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
	}
	toString() {
		return this.content + "(" + this.openStart + "," + this.openEnd + ")";
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = { content: this.content.toJSON() };
		return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
	}
	static fromJSON(t, n) {
		if (!n) return e.empty;
		let r = n.openStart || 0, i = n.openEnd || 0;
		if (typeof r != "number" || typeof i != "number") throw RangeError("Invalid input for Slice.fromJSON");
		return new e(M.fromJSON(t, n.content), r, i);
	}
	static maxOpen(t, n = !0) {
		let r = 0, i = 0;
		for (let e = t.firstChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.firstChild) r++;
		for (let e = t.lastChild; e && !e.isLeaf && (n || !e.type.spec.isolating); e = e.lastChild) i++;
		return new e(t, r, i);
	}
};
P.empty = new P(M.empty, 0, 0);
function nr(e, t, n) {
	let { index: r, offset: i } = e.findIndex(t), a = e.maybeChild(r), { index: o, offset: s } = e.findIndex(n);
	if (i == t || a.isText) {
		if (s != n && !e.child(o).isText) throw RangeError("Removing non-flat range");
		return e.cut(0, t).append(e.cut(n));
	}
	if (r != o) throw RangeError("Removing non-flat range");
	return e.replaceChild(r, a.copy(nr(a.content, t - i - 1, n - i - 1)));
}
function rr(e, t, n, r, i, a) {
	let { index: o, offset: s } = e.findIndex(t), c = e.maybeChild(o);
	if (s == t || c.isText) return a && r <= 0 && i <= 0 && !a.canReplace(o, o, n) ? null : e.cut(0, t).append(n).append(e.cut(t));
	let l = rr(c.content, t - s - 1, n, o == 0 ? r - 1 : 0, o == e.childCount - 1 ? i - 1 : 0, c);
	return l && e.replaceChild(o, c.copy(l));
}
function ir(e, t, n) {
	if (n.openStart > e.depth) throw new tr("Inserted content deeper than insertion position");
	if (e.depth - n.openStart != t.depth - n.openEnd) throw new tr("Inconsistent open depths");
	return ar(e, t, n, 0);
}
function ar(e, t, n, r) {
	let i = e.index(r), a = e.node(r);
	if (i == t.index(r) && r < e.depth - n.openStart) {
		let o = ar(e, t, n, r + 1);
		return a.copy(a.content.replaceChild(i, o));
	} else if (!n.content.size) return ur(a, fr(e, t, r));
	else if (!n.openStart && !n.openEnd && e.depth == r && t.depth == r) {
		let r = e.parent, i = r.content;
		return ur(r, i.cut(0, e.parentOffset).append(n.content).append(i.cut(t.parentOffset)));
	} else {
		let { start: i, end: o } = pr(n, e);
		return ur(a, dr(e, i, o, t, r));
	}
}
function or(e, t) {
	if (!t.type.compatibleContent(e.type)) throw new tr("Cannot join " + t.type.name + " onto " + e.type.name);
}
function sr(e, t, n) {
	let r = e.node(n);
	return or(r, t.node(n)), r;
}
function cr(e, t) {
	let n = t.length - 1;
	n >= 0 && e.isText && e.sameMarkup(t[n]) ? t[n] = e.withText(t[n].text + e.text) : t.push(e);
}
function lr(e, t, n, r) {
	let i = (t || e).node(n), a = 0, o = t ? t.index(n) : i.childCount;
	e && (a = e.index(n), e.depth > n ? a++ : e.textOffset && (cr(e.nodeAfter, r), a++));
	for (let e = a; e < o; e++) cr(i.child(e), r);
	t && t.depth == n && t.textOffset && cr(t.nodeBefore, r);
}
function ur(e, t) {
	if (!e.type.validContent(t)) throw new tr("Invalid content for node " + e.type.name);
	return e.copy(t);
}
function dr(e, t, n, r, i) {
	let a = e.depth > i && sr(e, t, i + 1), o = r.depth > i && sr(n, r, i + 1), s = [];
	return lr(null, e, i, s), a && o && t.index(i) == n.index(i) ? (or(a, o), cr(ur(a, dr(e, t, n, r, i + 1)), s)) : (a && cr(ur(a, fr(e, t, i + 1)), s), lr(t, n, i, s), o && cr(ur(o, fr(n, r, i + 1)), s)), lr(r, null, i, s), new M(s);
}
function fr(e, t, n) {
	let r = [];
	return lr(null, e, n, r), e.depth > n && cr(ur(sr(e, t, n + 1), fr(e, t, n + 1)), r), lr(t, null, n, r), new M(r);
}
function pr(e, t) {
	let n = t.depth - e.openStart, r = t.node(n).copy(e.content);
	for (let e = n - 1; e >= 0; e--) r = t.node(e).copy(M.from(r));
	return {
		start: r.resolveNoCache(e.openStart + n),
		end: r.resolveNoCache(r.content.size - e.openEnd - n)
	};
}
var mr = class e {
	constructor(e, t, n) {
		this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1;
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e;
	}
	get parent() {
		return this.node(this.depth);
	}
	get doc() {
		return this.node(0);
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3];
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1];
	}
	indexAfter(e) {
		return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
	}
	start(e) {
		return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
	}
	end(e) {
		return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
	}
	before(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position before the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
	}
	after(e) {
		if (e = this.resolveDepth(e), !e) throw RangeError("There is no position after the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1];
	}
	get nodeAfter() {
		let e = this.parent, t = this.index(this.depth);
		if (t == e.childCount) return null;
		let n = this.pos - this.path[this.path.length - 1], r = e.child(t);
		return n ? e.child(t).cut(n) : r;
	}
	get nodeBefore() {
		let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
		return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
	}
	posAtIndex(e, t) {
		t = this.resolveDepth(t);
		let n = this.path[t * 3], r = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
		for (let t = 0; t < e; t++) r += n.child(t).nodeSize;
		return r;
	}
	marks() {
		let e = this.parent, t = this.index();
		if (e.content.size == 0) return N.none;
		if (this.textOffset) return e.child(t).marks;
		let n = e.maybeChild(t - 1), r = e.maybeChild(t);
		if (!n) {
			let e = n;
			n = r, r = e;
		}
		let i = n.marks;
		for (var a = 0; a < i.length; a++) i[a].type.spec.inclusive === !1 && (!r || !i[a].isInSet(r.marks)) && (i = i[a--].removeFromSet(i));
		return i;
	}
	marksAcross(e) {
		let t = this.parent.maybeChild(this.index());
		if (!t || !t.isInline) return null;
		let n = t.marks, r = e.parent.maybeChild(e.index());
		for (var i = 0; i < n.length; i++) n[i].type.spec.inclusive === !1 && (!r || !n[i].isInSet(r.marks)) && (n = n[i--].removeFromSet(n));
		return n;
	}
	sharedDepth(e) {
		for (let t = this.depth; t > 0; t--) if (this.start(t) <= e && this.end(t) >= e) return t;
		return 0;
	}
	blockRange(e = this, t) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--) if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new vr(this, e, n);
		return null;
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset;
	}
	max(e) {
		return e.pos > this.pos ? e : this;
	}
	min(e) {
		return e.pos < this.pos ? e : this;
	}
	toString() {
		let e = "";
		for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
		return e + ":" + this.parentOffset;
	}
	static resolve(t, n) {
		if (!(n >= 0 && n <= t.content.size)) throw RangeError("Position " + n + " out of range");
		let r = [], i = 0, a = n;
		for (let e = t;;) {
			let { index: t, offset: n } = e.content.findIndex(a), o = a - n;
			if (r.push(e, t, i + n), !o || (e = e.child(t), e.isText)) break;
			a = o - 1, i += n + 1;
		}
		return new e(n, r, a);
	}
	static resolveCached(t, n) {
		let r = _r.get(t);
		if (r) for (let e = 0; e < r.elts.length; e++) {
			let t = r.elts[e];
			if (t.pos == n) return t;
		}
		else _r.set(t, r = new hr());
		let i = r.elts[r.i] = e.resolve(t, n);
		return r.i = (r.i + 1) % gr, i;
	}
}, hr = class {
	constructor() {
		this.elts = [], this.i = 0;
	}
}, gr = 12, _r = /* @__PURE__ */ new WeakMap(), vr = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.depth = n;
	}
	get start() {
		return this.$from.before(this.depth + 1);
	}
	get end() {
		return this.$to.after(this.depth + 1);
	}
	get parent() {
		return this.$from.node(this.depth);
	}
	get startIndex() {
		return this.$from.index(this.depth);
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth);
	}
}, yr = Object.create(null), br = class e {
	constructor(e, t, n, r = N.none) {
		this.type = e, this.attrs = t, this.marks = r, this.content = n || M.empty;
	}
	get children() {
		return this.content.content;
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size;
	}
	get childCount() {
		return this.content.childCount;
	}
	child(e) {
		return this.content.child(e);
	}
	maybeChild(e) {
		return this.content.maybeChild(e);
	}
	forEach(e) {
		this.content.forEach(e);
	}
	nodesBetween(e, t, n, r = 0) {
		this.content.nodesBetween(e, t, n, r, this);
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e);
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
	}
	textBetween(e, t, n, r) {
		return this.content.textBetween(e, t, n, r);
	}
	get firstChild() {
		return this.content.firstChild;
	}
	get lastChild() {
		return this.content.lastChild;
	}
	eq(e) {
		return this == e || this.sameMarkup(e) && this.content.eq(e.content);
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks);
	}
	hasMarkup(e, t, n) {
		return this.type == e && er(this.attrs, t || e.defaultAttrs || yr) && N.sameSet(this.marks, n || N.none);
	}
	copy(t = null) {
		return t == this.content ? this : new e(this.type, this.attrs, t, this.marks);
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.content, t);
	}
	cut(e, t = this.content.size) {
		return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
	}
	slice(e, t = this.content.size, n = !1) {
		if (e == t) return P.empty;
		let r = this.resolve(e), i = this.resolve(t), a = n ? 0 : r.sharedDepth(t), o = r.start(a);
		return new P(r.node(a).content.cut(r.pos - o, i.pos - o), r.depth - a, i.depth - a);
	}
	replace(e, t, n) {
		return ir(this.resolve(e), this.resolve(t), n);
	}
	nodeAt(e) {
		for (let t = this;;) {
			let { index: n, offset: r } = t.content.findIndex(e);
			if (t = t.maybeChild(n), !t) return null;
			if (r == e || t.isText) return t;
			e -= r + 1;
		}
	}
	childAfter(e) {
		let { index: t, offset: n } = this.content.findIndex(e);
		return {
			node: this.content.maybeChild(t),
			index: t,
			offset: n
		};
	}
	childBefore(e) {
		if (e == 0) return {
			node: null,
			index: 0,
			offset: 0
		};
		let { index: t, offset: n } = this.content.findIndex(e);
		if (n < e) return {
			node: this.content.child(t),
			index: t,
			offset: n
		};
		let r = this.content.child(t - 1);
		return {
			node: r,
			index: t - 1,
			offset: n - r.nodeSize
		};
	}
	resolve(e) {
		return mr.resolveCached(this, e);
	}
	resolveNoCache(e) {
		return mr.resolve(this, e);
	}
	rangeHasMark(e, t, n) {
		let r = !1;
		return t > e && this.nodesBetween(e, t, (e) => (n.isInSet(e.marks) && (r = !0), !r)), r;
	}
	get isBlock() {
		return this.type.isBlock;
	}
	get isTextblock() {
		return this.type.isTextblock;
	}
	get inlineContent() {
		return this.type.inlineContent;
	}
	get isInline() {
		return this.type.isInline;
	}
	get isText() {
		return this.type.isText;
	}
	get isLeaf() {
		return this.type.isLeaf;
	}
	get isAtom() {
		return this.type.isAtom;
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Sr(this.marks, e);
	}
	contentMatchAt(e) {
		let t = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!t) throw Error("Called contentMatchAt on a node with invalid content");
		return t;
	}
	canReplace(e, t, n = M.empty, r = 0, i = n.childCount) {
		let a = this.contentMatchAt(e).matchFragment(n, r, i), o = a && a.matchFragment(this.content, t);
		if (!o || !o.validEnd) return !1;
		for (let e = r; e < i; e++) if (!this.type.allowsMarks(n.child(e).marks)) return !1;
		return !0;
	}
	canReplaceWith(e, t, n, r) {
		if (r && !this.type.allowsMarks(r)) return !1;
		let i = this.contentMatchAt(e).matchType(n), a = i && i.matchFragment(this.content, t);
		return a ? a.validEnd : !1;
	}
	canAppend(e) {
		return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
	}
	check() {
		this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
		let e = N.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			n.type.checkAttrs(n.attrs), e = n.addToSet(e);
		}
		if (!N.sameSet(e, this.marks)) throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((e) => e.type.name)}`);
		this.content.forEach((e) => e.check());
	}
	toJSON() {
		let e = { type: this.type.name };
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break;
		}
		return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((e) => e.toJSON())), e;
	}
	static fromJSON(e, t) {
		if (!t) throw RangeError("Invalid input for Node.fromJSON");
		let n;
		if (t.marks) {
			if (!Array.isArray(t.marks)) throw RangeError("Invalid mark data for Node.fromJSON");
			n = t.marks.map(e.markFromJSON);
		}
		if (t.type == "text") {
			if (typeof t.text != "string") throw RangeError("Invalid text node in JSON");
			return e.text(t.text, n);
		}
		let r = M.fromJSON(e, t.content), i = e.nodeType(t.type).create(t.attrs, r, n);
		return i.type.checkAttrs(i.attrs), i;
	}
};
br.prototype.text = void 0;
var xr = class e extends br {
	constructor(e, t, n, r) {
		if (super(e, t, null, r), !n) throw RangeError("Empty text nodes are not allowed");
		this.text = n;
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Sr(this.marks, JSON.stringify(this.text));
	}
	get textContent() {
		return this.text;
	}
	textBetween(e, t) {
		return this.text.slice(e, t);
	}
	get nodeSize() {
		return this.text.length;
	}
	mark(t) {
		return t == this.marks ? this : new e(this.type, this.attrs, this.text, t);
	}
	withText(t) {
		return t == this.text ? this : new e(this.type, this.attrs, t, this.marks);
	}
	cut(e = 0, t = this.text.length) {
		return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text;
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e;
	}
};
function Sr(e, t) {
	for (let n = e.length - 1; n >= 0; n--) t = e[n].type.name + "(" + t + ")";
	return t;
}
var Cr = class e {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = [];
	}
	static parse(t, n) {
		let r = new wr(t, n);
		if (r.next == null) return e.empty;
		let i = Tr(r);
		r.next && r.err("Unexpected trailing text");
		let a = Fr(Mr(i));
		return Ir(a, r), a;
	}
	matchType(e) {
		for (let t = 0; t < this.next.length; t++) if (this.next[t].type == e) return this.next[t].next;
		return null;
	}
	matchFragment(e, t = 0, n = e.childCount) {
		let r = this;
		for (let i = t; r && i < n; i++) r = r.matchType(e.child(i).type);
		return r;
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline;
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let { type: t } = this.next[e];
			if (!(t.isText || t.hasRequiredAttrs())) return t;
		}
		return null;
	}
	compatible(e) {
		for (let t = 0; t < this.next.length; t++) for (let n = 0; n < e.next.length; n++) if (this.next[t].type == e.next[n].type) return !0;
		return !1;
	}
	fillBefore(e, t = !1, n = 0) {
		let r = [this];
		function i(a, o) {
			let s = a.matchFragment(e, n);
			if (s && (!t || s.validEnd)) return M.from(o.map((e) => e.createAndFill()));
			for (let e = 0; e < a.next.length; e++) {
				let { type: t, next: n } = a.next[e];
				if (!(t.isText || t.hasRequiredAttrs()) && r.indexOf(n) == -1) {
					r.push(n);
					let e = i(n, o.concat(t));
					if (e) return e;
				}
			}
			return null;
		}
		return i(this, []);
	}
	findWrapping(e) {
		for (let t = 0; t < this.wrapCache.length; t += 2) if (this.wrapCache[t] == e) return this.wrapCache[t + 1];
		let t = this.computeWrapping(e);
		return this.wrapCache.push(e, t), t;
	}
	computeWrapping(e) {
		let t = Object.create(null), n = [{
			match: this,
			type: null,
			via: null
		}];
		for (; n.length;) {
			let r = n.shift(), i = r.match;
			if (i.matchType(e)) {
				let e = [];
				for (let t = r; t.type; t = t.via) e.push(t.type);
				return e.reverse();
			}
			for (let e = 0; e < i.next.length; e++) {
				let { type: a, next: o } = i.next[e];
				!a.isLeaf && !a.hasRequiredAttrs() && !(a.name in t) && (!r.type || o.validEnd) && (n.push({
					match: a.contentMatch,
					type: a,
					via: r
				}), t[a.name] = !0);
			}
		}
		return null;
	}
	get edgeCount() {
		return this.next.length;
	}
	edge(e) {
		if (e >= this.next.length) throw RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e];
	}
	toString() {
		let e = [];
		function t(n) {
			e.push(n);
			for (let r = 0; r < n.next.length; r++) e.indexOf(n.next[r].next) == -1 && t(n.next[r].next);
		}
		return t(this), e.map((t, n) => {
			let r = n + (t.validEnd ? "*" : " ") + " ";
			for (let n = 0; n < t.next.length; n++) r += (n ? ", " : "") + t.next[n].type.name + "->" + e.indexOf(t.next[n].next);
			return r;
		}).join("\n");
	}
};
Cr.empty = new Cr(!0);
var wr = class {
	constructor(e, t) {
		this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
	}
	get next() {
		return this.tokens[this.pos];
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0);
	}
	err(e) {
		throw SyntaxError(e + " (in content expression '" + this.string + "')");
	}
};
function Tr(e) {
	let t = [];
	do
		t.push(Er(e));
	while (e.eat("|"));
	return t.length == 1 ? t[0] : {
		type: "choice",
		exprs: t
	};
}
function Er(e) {
	let t = [];
	do
		t.push(Dr(e));
	while (e.next && e.next != ")" && e.next != "|");
	return t.length == 1 ? t[0] : {
		type: "seq",
		exprs: t
	};
}
function Dr(e) {
	let t = jr(e);
	for (;;) if (e.eat("+")) t = {
		type: "plus",
		expr: t
	};
	else if (e.eat("*")) t = {
		type: "star",
		expr: t
	};
	else if (e.eat("?")) t = {
		type: "opt",
		expr: t
	};
	else if (e.eat("{")) t = kr(e, t);
	else break;
	return t;
}
function Or(e) {
	/\D/.test(e.next) && e.err("Expected number, got '" + e.next + "'");
	let t = Number(e.next);
	return e.pos++, t;
}
function kr(e, t) {
	let n = Or(e), r = n;
	return e.eat(",") && (r = e.next == "}" ? -1 : Or(e)), e.eat("}") || e.err("Unclosed braced range"), {
		type: "range",
		min: n,
		max: r,
		expr: t
	};
}
function Ar(e, t) {
	let n = e.nodeTypes, r = n[t];
	if (r) return [r];
	let i = [];
	for (let e in n) {
		let r = n[e];
		r.isInGroup(t) && i.push(r);
	}
	return i.length == 0 && e.err("No node type or group '" + t + "' found"), i;
}
function jr(e) {
	if (e.eat("(")) {
		let t = Tr(e);
		return e.eat(")") || e.err("Missing closing paren"), t;
	} else if (/\W/.test(e.next)) e.err("Unexpected token '" + e.next + "'");
	else {
		let t = Ar(e, e.next).map((t) => (e.inline == null ? e.inline = t.isInline : e.inline != t.isInline && e.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return e.pos++, t.length == 1 ? t[0] : {
			type: "choice",
			exprs: t
		};
	}
}
function Mr(e) {
	let t = [[]];
	return i(a(e, 0), n()), t;
	function n() {
		return t.push([]) - 1;
	}
	function r(e, n, r) {
		let i = {
			term: r,
			to: n
		};
		return t[e].push(i), i;
	}
	function i(e, t) {
		e.forEach((e) => e.to = t);
	}
	function a(e, t) {
		if (e.type == "choice") return e.exprs.reduce((e, n) => e.concat(a(n, t)), []);
		if (e.type == "seq") for (let r = 0;; r++) {
			let o = a(e.exprs[r], t);
			if (r == e.exprs.length - 1) return o;
			i(o, t = n());
		}
		else if (e.type == "star") {
			let o = n();
			return r(t, o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "plus") {
			let o = n();
			return i(a(e.expr, t), o), i(a(e.expr, o), o), [r(o)];
		} else if (e.type == "opt") return [r(t)].concat(a(e.expr, t));
		else if (e.type == "range") {
			let o = t;
			for (let t = 0; t < e.min; t++) {
				let t = n();
				i(a(e.expr, o), t), o = t;
			}
			if (e.max == -1) i(a(e.expr, o), o);
			else for (let t = e.min; t < e.max; t++) {
				let t = n();
				r(o, t), i(a(e.expr, o), t), o = t;
			}
			return [r(o)];
		} else if (e.type == "name") return [r(t, void 0, e.value)];
		else throw Error("Unknown expr type");
	}
}
function Nr(e, t) {
	return t - e;
}
function Pr(e, t) {
	let n = [];
	return r(t), n.sort(Nr);
	function r(t) {
		let i = e[t];
		if (i.length == 1 && !i[0].term) return r(i[0].to);
		n.push(t);
		for (let e = 0; e < i.length; e++) {
			let { term: t, to: a } = i[e];
			!t && n.indexOf(a) == -1 && r(a);
		}
	}
}
function Fr(e) {
	let t = Object.create(null);
	return n(Pr(e, 0));
	function n(r) {
		let i = [];
		r.forEach((t) => {
			e[t].forEach(({ term: t, to: n }) => {
				if (!t) return;
				let r;
				for (let e = 0; e < i.length; e++) i[e][0] == t && (r = i[e][1]);
				Pr(e, n).forEach((e) => {
					r || i.push([t, r = []]), r.indexOf(e) == -1 && r.push(e);
				});
			});
		});
		let a = t[r.join(",")] = new Cr(r.indexOf(e.length - 1) > -1);
		for (let e = 0; e < i.length; e++) {
			let r = i[e][1].sort(Nr);
			a.next.push({
				type: i[e][0],
				next: t[r.join(",")] || n(r)
			});
		}
		return a;
	}
}
function Ir(e, t) {
	for (let n = 0, r = [e]; n < r.length; n++) {
		let e = r[n], i = !e.validEnd, a = [];
		for (let t = 0; t < e.next.length; t++) {
			let { type: n, next: o } = e.next[t];
			a.push(n.name), i && !(n.isText || n.hasRequiredAttrs()) && (i = !1), r.indexOf(o) == -1 && r.push(o);
		}
		i && t.err("Only non-generatable nodes (" + a.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
	}
}
function Lr(e) {
	let t = Object.create(null);
	for (let n in e) {
		let r = e[n];
		if (!r.hasDefault) return null;
		t[n] = r.default;
	}
	return t;
}
function Rr(e, t) {
	let n = Object.create(null);
	for (let r in e) {
		let i = t && t[r];
		if (i === void 0) {
			let t = e[r];
			if (t.hasDefault) i = t.default;
			else throw RangeError("No value supplied for attribute " + r);
		}
		n[r] = i;
	}
	return n;
}
function zr(e, t, n, r) {
	for (let i in t) if (!(i in e)) throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);
	for (let n in e) e[n].validate && e[n].validate(t[n]);
}
function Br(e, t) {
	let n = Object.create(null);
	if (t) for (let r in t) n[r] = new Ur(e, r, t[r]);
	return n;
}
var Vr = class e {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Br(e, n.attrs), this.defaultAttrs = Lr(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text";
	}
	get isInline() {
		return !this.isBlock;
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent;
	}
	get isLeaf() {
		return this.contentMatch == Cr.empty;
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom;
	}
	isInGroup(e) {
		return this.groups.indexOf(e) > -1;
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
	}
	hasRequiredAttrs() {
		for (let e in this.attrs) if (this.attrs[e].isRequired) return !0;
		return !1;
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch);
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : Rr(this.attrs, e);
	}
	create(e = null, t, n) {
		if (this.isText) throw Error("NodeType.create can't construct text nodes");
		return new br(this, this.computeAttrs(e), M.from(t), N.setFrom(n));
	}
	createChecked(e = null, t, n) {
		return t = M.from(t), this.checkContent(t), new br(this, this.computeAttrs(e), t, N.setFrom(n));
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = M.from(t), t.size) {
			let e = this.contentMatch.fillBefore(t);
			if (!e) return null;
			t = e.append(t);
		}
		let r = this.contentMatch.matchFragment(t), i = r && r.fillBefore(M.empty, !0);
		return i ? new br(this, e, t.append(i), N.setFrom(n)) : null;
	}
	validContent(e) {
		let t = this.contentMatch.matchFragment(e);
		if (!t || !t.validEnd) return !1;
		for (let t = 0; t < e.childCount; t++) if (!this.allowsMarks(e.child(t).marks)) return !1;
		return !0;
	}
	checkContent(e) {
		if (!this.validContent(e)) throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
	}
	checkAttrs(e) {
		zr(this.attrs, e, "node", this.name);
	}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1;
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let t = 0; t < e.length; t++) if (!this.allowsMarkType(e[t].type)) return !1;
		return !0;
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let t;
		for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t ||= e.slice(0, n);
		return t ? t.length ? t : N.none : e;
	}
	static compile(t, n) {
		let r = Object.create(null);
		t.forEach((t, i) => r[t] = new e(t, n, i));
		let i = n.spec.topNode || "doc";
		if (!r[i]) throw RangeError("Schema is missing its top node type ('" + i + "')");
		if (!r.text) throw RangeError("Every schema needs a 'text' type");
		for (let e in r.text.attrs) throw RangeError("The text node type should not have attributes");
		return r;
	}
};
function Hr(e, t, n) {
	let r = n.split("|");
	return (n) => {
		let i = n === null ? "null" : typeof n;
		if (r.indexOf(i) < 0) throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`);
	};
}
var Ur = class {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? Hr(e, t, n.validate) : n.validate;
	}
	get isRequired() {
		return !this.hasDefault;
	}
}, Wr = class e {
	constructor(e, t, n, r) {
		this.name = e, this.rank = t, this.schema = n, this.spec = r, this.attrs = Br(e, r.attrs), this.excluded = null;
		let i = Lr(this.attrs);
		this.instance = i ? new N(this, i) : null;
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new N(this, Rr(this.attrs, e));
	}
	static compile(t, n) {
		let r = Object.create(null), i = 0;
		return t.forEach((t, a) => r[t] = new e(t, i++, n, a)), r;
	}
	removeFromSet(e) {
		for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
		return e;
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++) if (e[t].type == this) return e[t];
	}
	checkAttrs(e) {
		zr(this.attrs, e, "mark", this.name);
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1;
	}
}, Gr = class {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let n in e) t[n] = e[n];
		t.nodes = qn.from(e.nodes), t.marks = qn.from(e.marks || {}), this.nodes = Vr.compile(this.spec.nodes, this), this.marks = Wr.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let e in this.nodes) {
			if (e in this.marks) throw RangeError(e + " can not be both a node and a mark");
			let t = this.nodes[e], r = t.spec.content || "", i = t.spec.marks;
			if (t.contentMatch = n[r] || (n[r] = Cr.parse(r, this.nodes)), t.inlineContent = t.contentMatch.inlineContent, t.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw RangeError("Multiple linebreak nodes defined");
				if (!t.isInline || !t.isLeaf) throw RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = t;
			}
			t.markSet = i == "_" ? null : i ? Kr(this, i.split(" ")) : i == "" || !t.inlineContent ? [] : null;
		}
		for (let e in this.marks) {
			let t = this.marks[e], n = t.spec.excludes;
			t.excluded = n == null ? [t] : n == "" ? [] : Kr(this, n.split(" "));
		}
		this.nodeFromJSON = (e) => br.fromJSON(this, e), this.markFromJSON = (e) => N.fromJSON(this, e), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null);
	}
	node(e, t = null, n, r) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (!(e instanceof Vr)) throw RangeError("Invalid node type: " + e);
		else if (e.schema != this) throw RangeError("Node type from different schema used (" + e.name + ")");
		return e.createChecked(t, n, r);
	}
	text(e, t) {
		let n = this.nodes.text;
		return new xr(n, n.defaultAttrs, e, N.setFrom(t));
	}
	mark(e, t) {
		return typeof e == "string" && (e = this.marks[e]), e.create(t);
	}
	nodeType(e) {
		let t = this.nodes[e];
		if (!t) throw RangeError("Unknown node type: " + e);
		return t;
	}
};
function Kr(e, t) {
	let n = [];
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = e.marks[i], o = a;
		if (a) n.push(a);
		else for (let t in e.marks) {
			let r = e.marks[t];
			(i == "_" || r.spec.group && r.spec.group.split(" ").indexOf(i) > -1) && n.push(o = r);
		}
		if (!o) throw SyntaxError("Unknown mark type: '" + t[r] + "'");
	}
	return n;
}
function qr(e) {
	return e.tag != null;
}
function Jr(e) {
	return e.style != null;
}
var Yr = class e {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach((e) => {
			if (qr(e)) this.tags.push(e);
			else if (Jr(e)) {
				let t = /[^=]*/.exec(e.style)[0];
				n.indexOf(t) < 0 && n.push(t), this.styles.push(e);
			}
		}), this.normalizeLists = !this.tags.some((t) => {
			if (!/^(ul|ol)\b/.test(t.tag) || !t.node) return !1;
			let n = e.nodes[t.node];
			return n.contentMatch.matchType(n);
		});
	}
	parse(e, t = {}) {
		let n = new ii(this, t, !1);
		return n.addAll(e, N.none, t.from, t.to), n.finish();
	}
	parseSlice(e, t = {}) {
		let n = new ii(this, t, !0);
		return n.addAll(e, N.none, t.from, t.to), P.maxOpen(n.finish());
	}
	matchTag(e, t, n) {
		for (let r = n ? this.tags.indexOf(n) + 1 : 0; r < this.tags.length; r++) {
			let n = this.tags[r];
			if (oi(e, n.tag) && (n.namespace === void 0 || e.namespaceURI == n.namespace) && (!n.context || t.matchesContext(n.context))) {
				if (n.getAttrs) {
					let t = n.getAttrs(e);
					if (t === !1) continue;
					n.attrs = t || void 0;
				}
				return n;
			}
		}
	}
	matchStyle(e, t, n, r) {
		for (let i = r ? this.styles.indexOf(r) + 1 : 0; i < this.styles.length; i++) {
			let r = this.styles[i], a = r.style;
			if (!(a.indexOf(e) != 0 || r.context && !n.matchesContext(r.context) || a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != t))) {
				if (r.getAttrs) {
					let e = r.getAttrs(t);
					if (e === !1) continue;
					r.attrs = e || void 0;
				}
				return r;
			}
		}
	}
	static schemaRules(e) {
		let t = [];
		function n(e) {
			let n = e.priority == null ? 50 : e.priority, r = 0;
			for (; r < t.length; r++) {
				let e = t[r];
				if ((e.priority == null ? 50 : e.priority) < n) break;
			}
			t.splice(r, 0, e);
		}
		for (let t in e.marks) {
			let r = e.marks[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = si(e)), e.mark || e.ignore || e.clearMark || (e.mark = t);
			});
		}
		for (let t in e.nodes) {
			let r = e.nodes[t].spec.parseDOM;
			r && r.forEach((e) => {
				n(e = si(e)), e.node || e.ignore || e.mark || (e.node = t);
			});
		}
		return t;
	}
	static fromSchema(t) {
		return t.cached.domParser || (t.cached.domParser = new e(t, e.schemaRules(t)));
	}
}, Xr = {
	address: !0,
	article: !0,
	aside: !0,
	blockquote: !0,
	body: !0,
	canvas: !0,
	dd: !0,
	div: !0,
	dl: !0,
	fieldset: !0,
	figcaption: !0,
	figure: !0,
	footer: !0,
	form: !0,
	h1: !0,
	h2: !0,
	h3: !0,
	h4: !0,
	h5: !0,
	h6: !0,
	header: !0,
	hgroup: !0,
	hr: !0,
	li: !0,
	noscript: !0,
	ol: !0,
	output: !0,
	p: !0,
	pre: !0,
	section: !0,
	table: !0,
	tfoot: !0,
	ul: !0
}, Zr = {
	head: !0,
	noscript: !0,
	object: !0,
	script: !0,
	style: !0,
	title: !0
}, Qr = {
	ol: !0,
	ul: !0
}, $r = 1, ei = 2, ti = 4;
function ni(e, t, n) {
	return t == null ? e && e.whitespace == "pre" ? 3 : n & -5 : (t ? $r : 0) | (t === "full" ? ei : 0);
}
var ri = class {
	constructor(e, t, n, r, i, a) {
		this.type = e, this.attrs = t, this.marks = n, this.solid = r, this.options = a, this.content = [], this.activeMarks = N.none, this.match = i || (a & ti ? null : e.contentMatch);
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let t = this.type.contentMatch.fillBefore(M.from(e));
			if (t) this.match = this.type.contentMatch.matchFragment(t);
			else {
				let t = this.type.contentMatch, n;
				return (n = t.findWrapping(e.type)) ? (this.match = t, n) : null;
			}
		}
		return this.match.findWrapping(e.type);
	}
	finish(e) {
		if (!(this.options & $r)) {
			let e = this.content[this.content.length - 1], t;
			if (e && e.isText && (t = /[ \t\r\n\u000c]+$/.exec(e.text))) {
				let n = e;
				e.text.length == t[0].length ? this.content.pop() : this.content[this.content.length - 1] = n.withText(n.text.slice(0, n.text.length - t[0].length));
			}
		}
		let t = M.from(this.content);
		return !e && this.match && (t = t.append(this.match.fillBefore(M.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Xr.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
	}
}, ii = class {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0, this.localPreserveWS = !1;
		let r = t.topNode, i, a = ni(null, t.preserveWhitespace, 0) | (n ? ti : 0);
		i = r ? new ri(r.type, r.attrs, N.none, !0, t.topMatch || r.type.contentMatch, a) : n ? new ri(null, null, N.none, !0, null, a) : new ri(e.schema.topNodeType, null, N.none, !0, null, a), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
	}
	get top() {
		return this.nodes[this.open];
	}
	addDOM(e, t) {
		e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
	}
	addTextNode(e, t) {
		let n = e.nodeValue, r = this.top, i = r.options & ei ? "full" : this.localPreserveWS || (r.options & $r) > 0, { schema: a } = this.parser;
		if (i === "full" || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(n)) {
			if (!i) {
				if (n = n.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(n) && this.open == this.nodes.length - 1) {
					let t = r.content[r.content.length - 1], i = e.previousSibling;
					(!t || i && i.nodeName == "BR" || t.isText && /[ \t\r\n\u000c]$/.test(t.text)) && (n = n.slice(1));
				}
			} else if (i === "full") n = n.replace(/\r\n?/g, "\n");
			else if (a.linebreakReplacement && /[\r\n]/.test(n) && this.top.findWrapping(a.linebreakReplacement.create())) {
				let e = n.split(/\r?\n|\r/);
				for (let n = 0; n < e.length; n++) n && this.insertNode(a.linebreakReplacement.create(), t, !0), e[n] && this.insertNode(a.text(e[n]), t, !/\S/.test(e[n]));
				n = "";
			} else n = n.replace(/\r?\n|\r/g, " ");
			n && this.insertNode(a.text(n), t, !/\S/.test(n)), this.findInText(e);
		} else this.findInside(e);
	}
	addElement(e, t, n) {
		let r = this.localPreserveWS, i = this.top;
		(e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
		let a = e.nodeName.toLowerCase(), o;
		Qr.hasOwnProperty(a) && this.parser.normalizeLists && ai(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, n));
		out: if (s ? s.ignore : Zr.hasOwnProperty(a)) this.findInside(e), this.ignoreFallback(e, t);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let n, r = this.needsBlock;
			if (Xr.hasOwnProperty(a)) i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), n = !0, i.type || (this.needsBlock = !0);
			else if (!e.firstChild) {
				this.leafFallback(e, t);
				break out;
			}
			let o = s && s.skip ? t : this.readStyles(e, t);
			o && this.addAll(e, o), n && this.sync(i), this.needsBlock = r;
		} else {
			let n = this.readStyles(e, t);
			n && this.addElementByRule(e, s, n, s.consuming === !1 ? o : void 0);
		}
		this.localPreserveWS = r;
	}
	leafFallback(e, t) {
		e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode("\n"), t);
	}
	ignoreFallback(e, t) {
		e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
	}
	readStyles(e, t) {
		let n = e.style;
		if (n && n.length) for (let e = 0; e < this.parser.matchedStyles.length; e++) {
			let r = this.parser.matchedStyles[e], i = n.getPropertyValue(r);
			if (i) for (let e;;) {
				let n = this.parser.matchStyle(r, i, this, e);
				if (!n) break;
				if (n.ignore) return null;
				if (t = n.clearMark ? t.filter((e) => !n.clearMark(e)) : t.concat(this.parser.schema.marks[n.mark].create(n.attrs)), n.consuming === !1) e = n;
				else break;
			}
		}
		return t;
	}
	addElementByRule(e, t, n, r) {
		let i, a;
		if (t.node) if (a = this.parser.schema.nodes[t.node], a.isLeaf) this.insertNode(a.create(t.attrs), n, e.nodeName == "BR") || this.leafFallback(e, n);
		else {
			let e = this.enter(a, t.attrs || null, n, t.preserveWhitespace);
			e && (i = !0, n = e);
		}
		else {
			let e = this.parser.schema.marks[t.mark];
			n = n.concat(e.create(t.attrs));
		}
		let o = this.top;
		if (a && a.isLeaf) this.findInside(e);
		else if (r) this.addElement(e, n, r);
		else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((e) => this.insertNode(e, n, !1));
		else {
			let r = e;
			typeof t.contentElement == "string" ? r = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? r = t.contentElement(e) : t.contentElement && (r = t.contentElement), this.findAround(e, r, !0), this.addAll(r, n), this.findAround(e, r, !1);
		}
		i && this.sync(o) && this.open--;
	}
	addAll(e, t, n, r) {
		let i = n || 0;
		for (let a = n ? e.childNodes[n] : e.firstChild, o = r == null ? null : e.childNodes[r]; a != o; a = a.nextSibling, ++i) this.findAtPoint(e, i), this.addDOM(a, t);
		this.findAtPoint(e, i);
	}
	findPlace(e, t, n) {
		let r, i;
		for (let t = this.open, a = 0; t >= 0; t--) {
			let o = this.nodes[t], s = o.findWrapping(e);
			if (s && (!r || r.length > s.length + a) && (r = s, i = o, !s.length)) break;
			if (o.solid) {
				if (n) break;
				a += 2;
			}
		}
		if (!r) return null;
		this.sync(i);
		for (let e = 0; e < r.length; e++) t = this.enterInner(r[e], null, t, !1);
		return t;
	}
	insertNode(e, t, n) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let e = this.textblockFromContext();
			e && (t = this.enterInner(e, null, t));
		}
		let r = this.findPlace(e, t, n);
		if (r) {
			this.closeExtra();
			let t = this.top;
			t.match &&= t.match.matchType(e.type);
			let n = N.none;
			for (let i of r.concat(e.marks)) (t.type ? t.type.allowsMarkType(i.type) : ci(i.type, e.type)) && (n = i.addToSet(n));
			return t.content.push(e.mark(n)), !0;
		}
		return !1;
	}
	enter(e, t, n, r) {
		let i = this.findPlace(e.create(t), n, !1);
		return i &&= this.enterInner(e, t, n, !0, r), i;
	}
	enterInner(e, t, n, r = !1, i) {
		this.closeExtra();
		let a = this.top;
		a.match = a.match && a.match.matchType(e);
		let o = ni(e, i, a.options);
		a.options & ti && a.content.length == 0 && (o |= ti);
		let s = N.none;
		return n = n.filter((t) => (a.type ? a.type.allowsMarkType(t.type) : ci(t.type, e)) ? (s = t.addToSet(s), !1) : !0), this.nodes.push(new ri(e, t, s, r, null, o)), this.open++, n;
	}
	closeExtra(e = !1) {
		let t = this.nodes.length - 1;
		if (t > this.open) {
			for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
			this.nodes.length = this.open + 1;
		}
	}
	finish() {
		return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
	}
	sync(e) {
		for (let t = this.open; t >= 0; t--) if (this.nodes[t] == e) return this.open = t, !0;
		else this.localPreserveWS && (this.nodes[t].options |= $r);
		return !1;
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let t = this.open; t >= 0; t--) {
			let n = this.nodes[t].content;
			for (let t = n.length - 1; t >= 0; t--) e += n[t].nodeSize;
			t && e++;
		}
		return e;
	}
	findAtPoint(e, t) {
		if (this.find) for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos);
	}
	findInside(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
	}
	findAround(e, t, n) {
		if (e != t && this.find) for (let r = 0; r < this.find.length; r++) this.find[r].pos == null && e.nodeType == 1 && e.contains(this.find[r].node) && t.compareDocumentPosition(this.find[r].node) & (n ? 2 : 4) && (this.find[r].pos = this.currentPos);
	}
	findInText(e) {
		if (this.find) for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
	}
	matchesContext(e) {
		if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let t = e.split("/"), n = this.options.context, r = !this.isOpen && (!n || n.parent.type == this.nodes[0].type), i = -(n ? n.depth + 1 : 0) + +!r, a = (e, o) => {
			for (; e >= 0; e--) {
				let s = t[e];
				if (s == "") {
					if (e == t.length - 1 || e == 0) continue;
					for (; o >= i; o--) if (a(e - 1, o)) return !0;
					return !1;
				} else {
					let e = o > 0 || o == 0 && r ? this.nodes[o].type : n && o >= i ? n.node(o - i).type : null;
					if (!e || e.name != s && !e.isInGroup(s)) return !1;
					o--;
				}
			}
			return !0;
		};
		return a(t.length - 1, this.open);
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e) for (let t = e.depth; t >= 0; t--) {
			let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
			if (n && n.isTextblock && n.defaultAttrs) return n;
		}
		for (let e in this.parser.schema.nodes) {
			let t = this.parser.schema.nodes[e];
			if (t.isTextblock && t.defaultAttrs) return t;
		}
	}
};
function ai(e) {
	for (let t = e.firstChild, n = null; t; t = t.nextSibling) {
		let e = t.nodeType == 1 ? t.nodeName.toLowerCase() : null;
		e && Qr.hasOwnProperty(e) && n ? (n.appendChild(t), t = n) : e == "li" ? n = t : e && (n = null);
	}
}
function oi(e, t) {
	return (e.matches || e.msMatchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector).call(e, t);
}
function si(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function ci(e, t) {
	let n = t.schema.nodes;
	for (let r in n) {
		let i = n[r];
		if (!i.allowsMarkType(e)) continue;
		let a = [], o = (e) => {
			a.push(e);
			for (let n = 0; n < e.edgeCount; n++) {
				let { type: r, next: i } = e.edge(n);
				if (r == t || a.indexOf(i) < 0 && o(i)) return !0;
			}
		};
		if (o(i.contentMatch)) return !0;
	}
}
var li = class e {
	constructor(e, t) {
		this.nodes = e, this.marks = t;
	}
	serializeFragment(e, t = {}, n) {
		n ||= di(t).createDocumentFragment();
		let r = n, i = [];
		return e.forEach((e) => {
			if (i.length || e.marks.length) {
				let n = 0, a = 0;
				for (; n < i.length && a < e.marks.length;) {
					let t = e.marks[a];
					if (!this.marks[t.type.name]) {
						a++;
						continue;
					}
					if (!t.eq(i[n][0]) || t.type.spec.spanning === !1) break;
					n++, a++;
				}
				for (; n < i.length;) r = i.pop()[1];
				for (; a < e.marks.length;) {
					let n = e.marks[a++], o = this.serializeMark(n, e.isInline, t);
					o && (i.push([n, r]), r.appendChild(o.dom), r = o.contentDOM || o.dom);
				}
			}
			r.appendChild(this.serializeNodeInner(e, t));
		}), n;
	}
	serializeNodeInner(e, t) {
		if (e.isText) return di(t).createTextNode(e.text);
		let { dom: n, contentDOM: r } = hi(di(t), this.nodes[e.type.name](e), null, e.attrs);
		if (r) {
			if (e.isLeaf) throw RangeError("Content hole not allowed in a leaf node spec");
			this.serializeFragment(e.content, t, r);
		}
		return n;
	}
	serializeNode(e, t = {}) {
		let n = this.serializeNodeInner(e, t);
		for (let r = e.marks.length - 1; r >= 0; r--) {
			let i = this.serializeMark(e.marks[r], e.isInline, t);
			i && ((i.contentDOM || i.dom).appendChild(n), n = i.dom);
		}
		return n;
	}
	serializeMark(e, t, n = {}) {
		let r = this.marks[e.type.name];
		return r && hi(di(n), r(e, t), null, e.attrs);
	}
	static renderSpec(e, t, n = null, r) {
		return typeof t == "string" ? { dom: e.createTextNode(t) } : hi(e, t, n, r);
	}
	static fromSchema(t) {
		return t.cached.domSerializer || (t.cached.domSerializer = new e(this.nodesFromSchema(t), this.marksFromSchema(t)));
	}
	static nodesFromSchema(e) {
		let t = ui(e.nodes);
		return t.text ||= (e) => e.text, t;
	}
	static marksFromSchema(e) {
		return ui(e.marks);
	}
};
function ui(e) {
	let t = {};
	for (let n in e) {
		let r = e[n].spec.toDOM;
		r && (t[n] = r);
	}
	return t;
}
function di(e) {
	return e.document || window.document;
}
var fi = /* @__PURE__ */ new WeakMap();
function pi(e) {
	let t = fi.get(e);
	return t === void 0 && fi.set(e, t = mi(e)), t;
}
function mi(e) {
	let t = null;
	function n(e) {
		if (e && typeof e == "object") if (Array.isArray(e)) if (typeof e[0] == "string") t ||= [], t.push(e);
		else for (let t = 0; t < e.length; t++) n(e[t]);
		else for (let t in e) n(e[t]);
	}
	return n(e), t;
}
function hi(e, t, n, r) {
	if (t.nodeType == 1) return { dom: t };
	if (t.dom && t.dom.nodeType == 1) return t;
	let i = t[0], a;
	if (typeof i != "string") throw RangeError("Invalid array passed to renderSpec");
	if (r && (a = pi(r)) && a.indexOf(t) > -1) throw RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
	let o = i.indexOf(" ");
	o > 0 && (n = i.slice(0, o), i = i.slice(o + 1));
	let s, c = n ? e.createElementNS(n, i) : e.createElement(i), l = t[1], u = 1;
	if (l && typeof l == "object" && l.nodeType == null && !Array.isArray(l)) {
		u = 2;
		for (let e in l) if (l[e] != null) {
			let t = e.indexOf(" ");
			t > 0 ? c.setAttributeNS(e.slice(0, t), e.slice(t + 1), l[e]) : e == "style" && c.style ? c.style.cssText = l[e] : c.setAttribute(e, l[e]);
		}
	}
	for (let i = u; i < t.length; i++) {
		let a = t[i];
		if (a === 0) {
			if (i < t.length - 1 || i > u) throw RangeError("Content hole must be the only child of its parent node");
			return {
				dom: c,
				contentDOM: c
			};
		} else if (typeof a == "string") c.appendChild(e.createTextNode(a));
		else {
			let { dom: t, contentDOM: i } = hi(e, a, n, r);
			if (c.appendChild(t), i) {
				if (s) throw RangeError("Multiple content holes");
				s = i;
			}
		}
	}
	return {
		dom: c,
		contentDOM: s
	};
}
//#endregion
//#region ../../node_modules/prosemirror-transform/dist/index.js
var gi = 65535, _i = 2 ** 16;
function vi(e, t) {
	return e + t * _i;
}
function yi(e) {
	return e & gi;
}
function bi(e) {
	return (e - (e & gi)) / _i;
}
var xi = 1, Si = 2, Ci = 4, wi = 8, Ti = class {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n;
	}
	get deleted() {
		return (this.delInfo & wi) > 0;
	}
	get deletedBefore() {
		return (this.delInfo & 5) > 0;
	}
	get deletedAfter() {
		return (this.delInfo & 6) > 0;
	}
	get deletedAcross() {
		return (this.delInfo & Ci) > 0;
	}
}, Ei = class e {
	constructor(t, n = !1) {
		if (this.ranges = t, this.inverted = n, !t.length && e.empty) return e.empty;
	}
	recover(e) {
		let t = 0, n = yi(e);
		if (!this.inverted) for (let e = 0; e < n; e++) t += this.ranges[e * 3 + 2] - this.ranges[e * 3 + 1];
		return this.ranges[n * 3] + t + bi(e);
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	map(e, t = 1) {
		return this._map(e, t, !0);
	}
	_map(e, t, n) {
		let r = 0, i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let o = 0; o < this.ranges.length; o += 3) {
			let s = this.ranges[o] - (this.inverted ? r : 0);
			if (s > e) break;
			let c = this.ranges[o + i], l = this.ranges[o + a], u = s + c;
			if (e <= u) {
				let i = c ? e == s ? -1 : e == u ? 1 : t : t, a = s + r + (i < 0 ? 0 : l);
				if (n) return a;
				let d = e == (t < 0 ? s : u) ? null : vi(o / 3, e - s), f = e == s ? Si : e == u ? xi : Ci;
				return (t < 0 ? e != s : e != u) && (f |= wi), new Ti(a, f, d);
			}
			r += l - c;
		}
		return n ? e + r : new Ti(e + r, 0, null);
	}
	touches(e, t) {
		let n = 0, r = yi(t), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2;
		for (let t = 0; t < this.ranges.length; t += 3) {
			let o = this.ranges[t] - (this.inverted ? n : 0);
			if (o > e) break;
			let s = this.ranges[t + i];
			if (e <= o + s && t == r * 3) return !0;
			n += this.ranges[t + a] - s;
		}
		return !1;
	}
	forEach(e) {
		let t = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2;
		for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
			let a = this.ranges[r], o = a - (this.inverted ? i : 0), s = a + (this.inverted ? 0 : i), c = this.ranges[r + t], l = this.ranges[r + n];
			e(o, o + c, s, s + l), i += l - c;
		}
	}
	invert() {
		return new e(this.ranges, !this.inverted);
	}
	toString() {
		return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
	}
	static offset(t) {
		return t == 0 ? e.empty : new e(t < 0 ? [
			0,
			-t,
			0
		] : [
			0,
			0,
			t
		]);
	}
};
Ei.empty = new Ei([]);
var Di = class e {
	constructor(e, t, n = 0, r = e ? e.length : 0) {
		this.mirror = t, this.from = n, this.to = r, this._maps = e || [], this.ownData = !(e || t);
	}
	get maps() {
		return this._maps;
	}
	slice(t = 0, n = this.maps.length) {
		return new e(this._maps, this.mirror, t, n);
	}
	appendMap(e, t) {
		this.ownData ||= (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
	}
	appendMapping(e) {
		for (let t = 0, n = this._maps.length; t < e._maps.length; t++) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t], r != null && r < t ? n + r : void 0);
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let t = 0; t < this.mirror.length; t++) if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
		}
	}
	setMirror(e, t) {
		this.mirror ||= [], this.mirror.push(e, t);
	}
	appendMappingInverted(e) {
		for (let t = e.maps.length - 1, n = this._maps.length + e._maps.length; t >= 0; t--) {
			let r = e.getMirror(t);
			this.appendMap(e._maps[t].invert(), r != null && r > t ? n - r - 1 : void 0);
		}
	}
	invert() {
		let t = new e();
		return t.appendMappingInverted(this), t;
	}
	map(e, t = 1) {
		if (this.mirror) return this._map(e, t, !0);
		for (let n = this.from; n < this.to; n++) e = this._maps[n].map(e, t);
		return e;
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1);
	}
	_map(e, t, n) {
		let r = 0;
		for (let n = this.from; n < this.to; n++) {
			let i = this._maps[n].mapResult(e, t);
			if (i.recover != null) {
				let t = this.getMirror(n);
				if (t != null && t > n && t < this.to) {
					n = t, e = this._maps[t].recover(i.recover);
					continue;
				}
			}
			r |= i.delInfo, e = i.pos;
		}
		return n ? e : new Ti(e, r, null);
	}
}, Oi = Object.create(null), ki = class {
	getMap() {
		return Ei.empty;
	}
	merge(e) {
		return null;
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw RangeError("Invalid input for Step.fromJSON");
		let n = Oi[t.stepType];
		if (!n) throw RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in Oi) throw RangeError("Duplicate use of step JSON ID " + e);
		return Oi[e] = t, t.prototype.jsonID = e, t;
	}
}, Ai = class e {
	constructor(e, t) {
		this.doc = e, this.failed = t;
	}
	static ok(t) {
		return new e(t, null);
	}
	static fail(t) {
		return new e(null, t);
	}
	static fromReplace(t, n, r, i) {
		try {
			return e.ok(t.replace(n, r, i));
		} catch (t) {
			if (t instanceof tr) return e.fail(t.message);
			throw t;
		}
	}
};
function ji(e, t, n) {
	let r = [];
	for (let i = 0; i < e.childCount; i++) {
		let a = e.child(i);
		a.content.size && (a = a.copy(ji(a.content, t, a))), a.isInline && (a = t(a, n, i)), r.push(a);
	}
	return M.fromArray(r);
}
var Mi = class e extends ki {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = e.resolve(this.from), r = n.node(n.sharedDepth(this.to)), i = new P(ji(t.content, (e, t) => !e.isAtom || !t.type.allowsMarkType(this.mark.type) ? e : e.mark(this.mark.addToSet(e.marks)), r), t.openStart, t.openEnd);
		return Ai.fromReplace(e, this.from, this.to, i);
	}
	invert() {
		return new Ni(this.from, this.to, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
		return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "addMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for AddMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
ki.jsonID("addMark", Mi);
var Ni = class e extends ki {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n;
	}
	apply(e) {
		let t = e.slice(this.from, this.to), n = new P(ji(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e), t.openStart, t.openEnd);
		return Ai.fromReplace(e, this.from, this.to, n);
	}
	invert() {
		return new Mi(this.from, this.to, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1);
		return n.deleted && r.deleted || n.pos >= r.pos ? null : new e(n.pos, r.pos, this.mark);
	}
	merge(t) {
		return t instanceof e && t.mark.eq(this.mark) && this.from <= t.to && this.to >= t.from ? new e(Math.min(this.from, t.from), Math.max(this.to, t.to), this.mark) : null;
	}
	toJSON() {
		return {
			stepType: "removeMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		};
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for RemoveMarkStep.fromJSON");
		return new e(n.from, n.to, t.markFromJSON(n.mark));
	}
};
ki.jsonID("removeMark", Ni);
var Pi = class e extends ki {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Ai.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return Ai.fromReplace(e, this.pos, this.pos + 1, new P(M.from(n), 0, +!t.isLeaf));
	}
	invert(t) {
		let n = t.nodeAt(this.pos);
		if (n) {
			let t = this.mark.addToSet(n.marks);
			if (t.length == n.marks.length) {
				for (let r = 0; r < n.marks.length; r++) if (!n.marks[r].isInSet(t)) return new e(this.pos, n.marks[r]);
				return new e(this.pos, this.mark);
			}
		}
		return new Fi(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "addNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for AddNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
ki.jsonID("addNodeMark", Pi);
var Fi = class e extends ki {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Ai.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return Ai.fromReplace(e, this.pos, this.pos + 1, new P(M.from(n), 0, +!t.isLeaf));
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new Pi(this.pos, this.mark);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.mark);
	}
	toJSON() {
		return {
			stepType: "removeNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
		return new e(n.pos, t.markFromJSON(n.mark));
	}
};
ki.jsonID("removeNodeMark", Fi);
var Ii = class e extends ki {
	constructor(e, t, n, r = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = r;
	}
	apply(e) {
		return this.structure && Ri(e, this.from, this.to) ? Ai.fail("Structure replace would overwrite content") : Ai.fromReplace(e, this.from, this.to, this.slice);
	}
	getMap() {
		return new Ei([
			this.from,
			this.to - this.from,
			this.slice.size
		]);
	}
	invert(t) {
		return new e(this.from, this.from + this.slice.size, t.slice(this.from, this.to));
	}
	map(t) {
		let n = t.mapResult(this.to, -1), r = this.from == this.to && e.MAP_BIAS < 0 ? n : t.mapResult(this.from, 1);
		return r.deletedAcross && n.deletedAcross ? null : new e(r.pos, Math.max(r.pos, n.pos), this.slice, this.structure);
	}
	merge(t) {
		if (!(t instanceof e) || t.structure || this.structure) return null;
		if (this.from + this.slice.size == t.from && !this.slice.openEnd && !t.slice.openStart) {
			let n = this.slice.size + t.slice.size == 0 ? P.empty : new P(this.slice.content.append(t.slice.content), this.slice.openStart, t.slice.openEnd);
			return new e(this.from, this.to + (t.to - t.from), n, this.structure);
		} else if (t.to == this.from && !this.slice.openStart && !t.slice.openEnd) {
			let n = this.slice.size + t.slice.size == 0 ? P.empty : new P(t.slice.content.append(this.slice.content), t.slice.openStart, this.slice.openEnd);
			return new e(t.from, this.to, n, this.structure);
		} else return null;
	}
	toJSON() {
		let e = {
			stepType: "replace",
			from: this.from,
			to: this.to
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number") throw RangeError("Invalid input for ReplaceStep.fromJSON");
		return new e(n.from, n.to, P.fromJSON(t, n.slice), !!n.structure);
	}
};
Ii.MAP_BIAS = 1, ki.jsonID("replace", Ii);
var Li = class e extends ki {
	constructor(e, t, n, r, i, a, o = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = r, this.slice = i, this.insert = a, this.structure = o;
	}
	apply(e) {
		if (this.structure && (Ri(e, this.from, this.gapFrom) || Ri(e, this.gapTo, this.to))) return Ai.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return Ai.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? Ai.fromReplace(e, this.from, this.to, n) : Ai.fail("Content does not fit in gap");
	}
	getMap() {
		return new Ei([
			this.from,
			this.gapFrom - this.from,
			this.insert,
			this.gapTo,
			this.to - this.gapTo,
			this.slice.size - this.insert
		]);
	}
	invert(t) {
		let n = this.gapTo - this.gapFrom;
		return new e(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
	}
	map(t) {
		let n = t.mapResult(this.from, 1), r = t.mapResult(this.to, -1), i = this.from == this.gapFrom ? n.pos : t.map(this.gapFrom, -1), a = this.to == this.gapTo ? r.pos : t.map(this.gapTo, 1);
		return n.deletedAcross && r.deletedAcross || i < n.pos || a > r.pos ? null : new e(n.pos, r.pos, i, a, this.slice, this.insert, this.structure);
	}
	toJSON() {
		let e = {
			stepType: "replaceAround",
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
	}
	static fromJSON(t, n) {
		if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number") throw RangeError("Invalid input for ReplaceAroundStep.fromJSON");
		return new e(n.from, n.to, n.gapFrom, n.gapTo, P.fromJSON(t, n.slice), n.insert, !!n.structure);
	}
};
ki.jsonID("replaceAround", Li);
function Ri(e, t, n) {
	let r = e.resolve(t), i = n - t, a = r.depth;
	for (; i > 0 && a > 0 && r.indexAfter(a) == r.node(a).childCount;) a--, i--;
	if (i > 0) {
		let e = r.node(a).maybeChild(r.indexAfter(a));
		for (; i > 0;) {
			if (!e || e.isLeaf) return !0;
			e = e.firstChild, i--;
		}
	}
	return !1;
}
function zi(e, t, n, r) {
	let i = [], a = [], o, s;
	e.doc.nodesBetween(t, n, (e, c, l) => {
		if (!e.isInline) return;
		let u = e.marks;
		if (!r.isInSet(u) && l.type.allowsMarkType(r.type)) {
			let l = Math.max(c, t), d = Math.min(c + e.nodeSize, n), f = r.addToSet(u);
			for (let e = 0; e < u.length; e++) u[e].isInSet(f) || (o && o.to == l && o.mark.eq(u[e]) ? o.to = d : i.push(o = new Ni(l, d, u[e])));
			s && s.to == l ? s.to = d : a.push(s = new Mi(l, d, r));
		}
	}), i.forEach((t) => e.step(t)), a.forEach((t) => e.step(t));
}
function Bi(e, t, n, r) {
	let i = [], a = 0;
	e.doc.nodesBetween(t, n, (e, o) => {
		if (!e.isInline) return;
		a++;
		let s = null;
		if (r instanceof Wr) {
			let t = e.marks, n;
			for (; n = r.isInSet(t);) (s ||= []).push(n), t = n.removeFromSet(t);
		} else r ? r.isInSet(e.marks) && (s = [r]) : s = e.marks;
		if (s && s.length) {
			let r = Math.min(o + e.nodeSize, n);
			for (let e = 0; e < s.length; e++) {
				let n = s[e], c;
				for (let e = 0; e < i.length; e++) {
					let t = i[e];
					t.step == a - 1 && n.eq(i[e].style) && (c = t);
				}
				c ? (c.to = r, c.step = a) : i.push({
					style: n,
					from: Math.max(o, t),
					to: r,
					step: a
				});
			}
		}
	}), i.forEach((t) => e.step(new Ni(t.from, t.to, t.style)));
}
function Vi(e, t, n, r = n.contentMatch, i = !0) {
	let a = e.doc.nodeAt(t), o = [], s = t + 1;
	for (let t = 0; t < a.childCount; t++) {
		let c = a.child(t), l = s + c.nodeSize, u = r.matchType(c.type);
		if (!u) o.push(new Ii(s, l, P.empty));
		else {
			r = u;
			for (let t = 0; t < c.marks.length; t++) n.allowsMarkType(c.marks[t].type) || e.step(new Ni(s, l, c.marks[t]));
			if (i && c.isText && n.whitespace != "pre") {
				let e, t = /\r?\n|\r/g, r;
				for (; e = t.exec(c.text);) r ||= new P(M.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0), o.push(new Ii(s + e.index, s + e.index + e[0].length, r));
			}
		}
		s = l;
	}
	if (!r.validEnd) {
		let t = r.fillBefore(M.empty, !0);
		e.replace(s, s, new P(t, 0, 0));
	}
	for (let t = o.length - 1; t >= 0; t--) e.step(o[t]);
}
function Hi(e, t, n) {
	return (t == 0 || e.canReplace(t, e.childCount)) && (n == e.childCount || e.canReplace(0, n));
}
function Ui(e) {
	let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
	for (let n = e.depth, r = 0, i = 0;; --n) {
		let a = e.$from.node(n), o = e.$from.index(n) + r, s = e.$to.indexAfter(n) - i;
		if (n < e.depth && a.canReplace(o, s, t)) return n;
		if (n == 0 || a.type.spec.isolating || !Hi(a, o, s)) break;
		o && (r = 1), s < a.childCount && (i = 1);
	}
	return null;
}
function Wi(e, t, n) {
	let { $from: r, $to: i, depth: a } = t, o = r.before(a + 1), s = i.after(a + 1), c = o, l = s, u = M.empty, d = 0;
	for (let e = a, t = !1; e > n; e--) t || r.index(e) > 0 ? (t = !0, u = M.from(r.node(e).copy(u)), d++) : c--;
	let f = M.empty, p = 0;
	for (let e = a, t = !1; e > n; e--) t || i.after(e + 1) < i.end(e) ? (t = !0, f = M.from(i.node(e).copy(f)), p++) : l++;
	e.step(new Li(c, l, o, s, new P(u.append(f), d, p), u.size - d, !0));
}
function Gi(e, t, n = null, r = e) {
	let i = qi(e, t), a = i && Ji(r, t);
	return a ? i.map(Ki).concat({
		type: t,
		attrs: n
	}).concat(a.map(Ki)) : null;
}
function Ki(e) {
	return {
		type: e,
		attrs: null
	};
}
function qi(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.contentMatchAt(r).findWrapping(t);
	if (!a) return null;
	let o = a.length ? a[0] : t;
	return n.canReplaceWith(r, i, o) ? a : null;
}
function Ji(e, t) {
	let { parent: n, startIndex: r, endIndex: i } = e, a = n.child(r), o = t.contentMatch.findWrapping(a.type);
	if (!o) return null;
	let s = (o.length ? o[o.length - 1] : t).contentMatch;
	for (let e = r; s && e < i; e++) s = s.matchType(n.child(e).type);
	return !s || !s.validEnd ? null : o;
}
function Yi(e, t, n) {
	let r = M.empty;
	for (let e = n.length - 1; e >= 0; e--) {
		if (r.size) {
			let t = n[e].type.contentMatch.matchFragment(r);
			if (!t || !t.validEnd) throw RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
		}
		r = M.from(n[e].type.create(n[e].attrs, r));
	}
	let i = t.start, a = t.end;
	e.step(new Li(i, a, i, a, new P(r, 0, 0), n.length, !0));
}
function Xi(e, t, n, r, i) {
	if (!r.isTextblock) throw RangeError("Type given to setBlockType should be a textblock");
	let a = e.steps.length;
	e.doc.nodesBetween(t, n, (t, n) => {
		let o = typeof i == "function" ? i(t) : i;
		if (t.isTextblock && !t.hasMarkup(r, o) && $i(e.doc, e.mapping.slice(a).map(n), r)) {
			let i = null;
			if (r.schema.linebreakReplacement) {
				let e = r.whitespace == "pre", t = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
				e && !t ? i = !1 : !e && t && (i = !0);
			}
			i === !1 && Qi(e, t, n, a), Vi(e, e.mapping.slice(a).map(n, 1), r, void 0, i === null);
			let s = e.mapping.slice(a), c = s.map(n, 1), l = s.map(n + t.nodeSize, 1);
			return e.step(new Li(c, l, c + 1, l - 1, new P(M.from(r.create(o, null, t.marks)), 0, 0), 1, !0)), i === !0 && Zi(e, t, n, a), !1;
		}
	});
}
function Zi(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.isText) {
			let o, s = /\r?\n|\r/g;
			for (; o = s.exec(i.text);) {
				let i = e.mapping.slice(r).map(n + 1 + a + o.index);
				e.replaceWith(i, i + 1, t.type.schema.linebreakReplacement.create());
			}
		}
	});
}
function Qi(e, t, n, r) {
	t.forEach((i, a) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let i = e.mapping.slice(r).map(n + 1 + a);
			e.replaceWith(i, i + 1, t.type.schema.text("\n"));
		}
	});
}
function $i(e, t, n) {
	let r = e.resolve(t), i = r.index();
	return r.parent.canReplaceWith(i, i + 1, n);
}
function ea(e, t, n, r, i) {
	let a = e.doc.nodeAt(t);
	if (!a) throw RangeError("No node at given position");
	n ||= a.type;
	let o = n.create(r, null, i || a.marks);
	if (a.isLeaf) return e.replaceWith(t, t + a.nodeSize, o);
	if (!n.validContent(a.content)) throw RangeError("Invalid content for node type " + n.name);
	e.step(new Li(t, t + a.nodeSize, t + 1, t + a.nodeSize - 1, new P(M.from(o), 0, 0), 1, !0));
}
function ta(e, t, n = 1, r) {
	let i = e.resolve(t), a = i.depth - n, o = r && r[r.length - 1] || i.parent;
	if (a < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
	for (let e = i.depth - 1, t = n - 2; e > a; e--, t--) {
		let n = i.node(e), a = i.index(e);
		if (n.type.spec.isolating) return !1;
		let o = n.content.cutByIndex(a, n.childCount), s = r && r[t + 1];
		s && (o = o.replaceChild(0, s.type.create(s.attrs)));
		let c = r && r[t] || n;
		if (!n.canReplace(a + 1, n.childCount) || !c.type.validContent(o)) return !1;
	}
	let s = i.indexAfter(a), c = r && r[0];
	return i.node(a).canReplaceWith(s, s, c ? c.type : i.node(a + 1).type);
}
function na(e, t, n = 1, r) {
	let i = e.doc.resolve(t), a = M.empty, o = M.empty;
	for (let e = i.depth, t = i.depth - n, s = n - 1; e > t; e--, s--) {
		a = M.from(i.node(e).copy(a));
		let t = r && r[s];
		o = M.from(t ? t.type.create(t.attrs, o) : i.node(e).copy(o));
	}
	e.step(new Ii(t, t, new P(a.append(o), n, n), !0));
}
function ra(e, t) {
	let n = e.resolve(t), r = n.index();
	return aa(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function ia(e, t) {
	t.content.size || e.type.compatibleContent(t.type);
	let n = e.contentMatchAt(e.childCount), { linebreakReplacement: r } = e.type.schema;
	for (let i = 0; i < t.childCount; i++) {
		let a = t.child(i), o = a.type == r ? e.type.schema.nodes.text : a.type;
		if (n = n.matchType(o), !n || !e.type.allowsMarks(a.marks)) return !1;
	}
	return n.validEnd;
}
function aa(e, t) {
	return !!(e && t && !e.isLeaf && ia(e, t));
}
function oa(e, t, n = -1) {
	let r = e.resolve(t);
	for (let e = r.depth;; e--) {
		let i, a, o = r.index(e);
		if (e == r.depth ? (i = r.nodeBefore, a = r.nodeAfter) : n > 0 ? (i = r.node(e + 1), o++, a = r.node(e).maybeChild(o)) : (i = r.node(e).maybeChild(o - 1), a = r.node(e + 1)), i && !i.isTextblock && aa(i, a) && r.node(e).canReplace(o, o + 1)) return t;
		if (e == 0) break;
		t = n < 0 ? r.before(e) : r.after(e);
	}
}
function sa(e, t, n) {
	let r = null, { linebreakReplacement: i } = e.doc.type.schema, a = e.doc.resolve(t - n), o = a.node().type;
	if (i && o.inlineContent) {
		let e = o.whitespace == "pre", t = !!o.contentMatch.matchType(i);
		e && !t ? r = !1 : !e && t && (r = !0);
	}
	let s = e.steps.length;
	if (r === !1) {
		let r = e.doc.resolve(t + n);
		Qi(e, r.node(), r.before(), s);
	}
	o.inlineContent && Vi(e, t + n - 1, o, a.node().contentMatchAt(a.index()), r == null);
	let c = e.mapping.slice(s), l = c.map(t - n);
	if (e.step(new Ii(l, c.map(t + n, -1), P.empty, !0)), r === !0) {
		let t = e.doc.resolve(l);
		Zi(e, t.node(), t.before(), e.steps.length);
	}
	return e;
}
function ca(e, t, n) {
	let r = e.resolve(t);
	if (r.parent.canReplaceWith(r.index(), r.index(), n)) return t;
	if (r.parentOffset == 0) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.index(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.before(e + 1);
		if (t > 0) return null;
	}
	if (r.parentOffset == r.parent.content.size) for (let e = r.depth - 1; e >= 0; e--) {
		let t = r.indexAfter(e);
		if (r.node(e).canReplaceWith(t, t, n)) return r.after(e + 1);
		if (t < r.node(e).childCount) return null;
	}
	return null;
}
function la(e, t, n) {
	let r = e.resolve(t);
	if (!n.content.size) return t;
	let i = n.content;
	for (let e = 0; e < n.openStart; e++) i = i.firstChild.content;
	for (let e = 1; e <= (n.openStart == 0 && n.size ? 2 : 1); e++) for (let t = r.depth; t >= 0; t--) {
		let n = t == r.depth ? 0 : r.pos <= (r.start(t + 1) + r.end(t + 1)) / 2 ? -1 : 1, a = r.index(t) + +(n > 0), o = r.node(t), s = !1;
		if (e == 1) s = o.canReplace(a, a, i);
		else {
			let e = o.contentMatchAt(a).findWrapping(i.firstChild.type);
			s = e && o.canReplaceWith(a, a, e[0]);
		}
		if (s) return n == 0 ? r.pos : n < 0 ? r.before(t + 1) : r.after(t + 1);
	}
	return null;
}
function ua(e, t, n = t, r = P.empty) {
	if (t == n && !r.size) return null;
	let i = e.resolve(t), a = e.resolve(n);
	return da(i, a, r) ? new Ii(t, n, r) : new fa(i, a, r).fit();
}
function da(e, t, n) {
	return !n.openStart && !n.openEnd && e.start() == t.start() && e.parent.canReplace(e.index(), t.index(), n.content);
}
var fa = class {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = M.empty;
		for (let t = 0; t <= e.depth; t++) {
			let n = e.node(t);
			this.frontier.push({
				type: n.type,
				match: n.contentMatchAt(e.indexAfter(t))
			});
		}
		for (let t = e.depth; t > 0; t--) this.placed = M.from(e.node(t).copy(this.placed));
	}
	get depth() {
		return this.frontier.length - 1;
	}
	fit() {
		for (; this.unplaced.size;) {
			let e = this.findFittable();
			e ? this.placeNodes(e) : this.openMore() || this.dropNode();
		}
		let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, n = this.$from, r = this.close(e < 0 ? this.$to : n.doc.resolve(e));
		if (!r) return null;
		let i = this.placed, a = n.depth, o = r.depth;
		for (; a && o && i.childCount == 1;) i = i.firstChild.content, a--, o--;
		let s = new P(i, a, o);
		return e > -1 ? new Li(n.pos, e, this.$to.pos, this.$to.end(), s, t) : s.size || n.pos != this.$to.pos ? new Ii(n.pos, r.pos, s) : null;
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd; n < e; n++) {
			let i = t.firstChild;
			if (t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n) {
				e = n;
				break;
			}
			t = i.content;
		}
		for (let t = 1; t <= 2; t++) for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
			let e, r = null;
			n ? (r = ha(this.unplaced.content, n - 1).firstChild, e = r.content) : e = this.unplaced.content;
			let i = e.firstChild;
			for (let e = this.depth; e >= 0; e--) {
				let { type: a, match: o } = this.frontier[e], s, c = null;
				if (t == 1 && (i ? o.matchType(i.type) || (c = o.fillBefore(M.from(i), !1)) : r && a.compatibleContent(r.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					inject: c
				};
				if (t == 2 && i && (s = o.findWrapping(i.type))) return {
					sliceDepth: n,
					frontierDepth: e,
					parent: r,
					wrap: s
				};
				if (r && o.matchType(r.type)) break;
			}
		}
	}
	openMore() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = ha(e, t);
		return !r.childCount || r.firstChild.isLeaf ? !1 : (this.unplaced = new P(e, t + 1, Math.max(n, r.size + t >= e.size - n ? t + 1 : 0)), !0);
	}
	dropNode() {
		let { content: e, openStart: t, openEnd: n } = this.unplaced, r = ha(e, t);
		if (r.childCount <= 1 && t > 0) {
			let i = e.size - t <= t + r.size;
			this.unplaced = new P(pa(e, t - 1, 1), t - 1, i ? t - 1 : n);
		} else this.unplaced = new P(pa(e, t, 1), t, n);
	}
	placeNodes({ sliceDepth: e, frontierDepth: t, parent: n, inject: r, wrap: i }) {
		for (; this.depth > t;) this.closeFrontierNode();
		if (i) for (let e = 0; e < i.length; e++) this.openFrontierNode(i[e]);
		let a = this.unplaced, o = n ? n.content : a.content, s = a.openStart - e, c = 0, l = [], { match: u, type: d } = this.frontier[t];
		if (r) {
			for (let e = 0; e < r.childCount; e++) l.push(r.child(e));
			u = u.matchFragment(r);
		}
		let f = o.size + e - (a.content.size - a.openEnd);
		for (; c < o.childCount;) {
			let e = o.child(c), t = u.matchType(e.type);
			if (!t) break;
			c++, (c > 1 || s == 0 || e.content.size) && (u = t, l.push(ga(e.mark(d.allowedMarks(e.marks)), c == 1 ? s : 0, c == o.childCount ? f : -1)));
		}
		let p = c == o.childCount;
		p || (f = -1), this.placed = ma(this.placed, t, M.from(l)), this.frontier[t].match = u, p && f < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let e = 0, t = o; e < f; e++) {
			let e = t.lastChild;
			this.frontier.push({
				type: e.type,
				match: e.contentMatchAt(e.childCount)
			}), t = e.content;
		}
		this.unplaced = p ? e == 0 ? P.empty : new P(pa(a.content, e - 1, 1), e - 1, f < 0 ? a.openEnd : e - 1) : new P(pa(a.content, e, c), a.openStart, a.openEnd);
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth], t;
		if (!e.type.isTextblock || !_a(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let { depth: n } = this.$to, r = this.$to.after(n);
		for (; n > 1 && r == this.$to.end(--n);) ++r;
		return r;
	}
	findCloseLevel(e) {
		scan: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let { match: n, type: r } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), a = _a(e, t, r, n, i);
			if (a) {
				for (let n = t - 1; n >= 0; n--) {
					let { match: t, type: r } = this.frontier[n], i = _a(e, n, r, t, !0);
					if (!i || i.childCount) continue scan;
				}
				return {
					depth: t,
					fit: a,
					move: i ? e.doc.resolve(e.after(t + 1)) : e
				};
			}
		}
	}
	close(e) {
		let t = this.findCloseLevel(e);
		if (!t) return null;
		for (; this.depth > t.depth;) this.closeFrontierNode();
		t.fit.childCount && (this.placed = ma(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let t = e.node(n), r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
			this.openFrontierNode(t.type, t.attrs, r);
		}
		return e;
	}
	openFrontierNode(e, t = null, n) {
		let r = this.frontier[this.depth];
		r.match = r.match.matchType(e), this.placed = ma(this.placed, this.depth, M.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		});
	}
	closeFrontierNode() {
		let e = this.frontier.pop().match.fillBefore(M.empty, !0);
		e.childCount && (this.placed = ma(this.placed, this.frontier.length, e));
	}
};
function pa(e, t, n) {
	return t == 0 ? e.cutByIndex(n, e.childCount) : e.replaceChild(0, e.firstChild.copy(pa(e.firstChild.content, t - 1, n)));
}
function ma(e, t, n) {
	return t == 0 ? e.append(n) : e.replaceChild(e.childCount - 1, e.lastChild.copy(ma(e.lastChild.content, t - 1, n)));
}
function ha(e, t) {
	for (let n = 0; n < t; n++) e = e.firstChild.content;
	return e;
}
function ga(e, t, n) {
	if (t <= 0) return e;
	let r = e.content;
	return t > 1 && (r = r.replaceChild(0, ga(r.firstChild, t - 1, r.childCount == 1 ? n - 1 : 0))), t > 0 && (r = e.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(e.type.contentMatch.matchFragment(r).fillBefore(M.empty, !0)))), e.copy(r);
}
function _a(e, t, n, r, i) {
	let a = e.node(t), o = i ? e.indexAfter(t) : e.index(t);
	if (o == a.childCount && !n.compatibleContent(a.type)) return null;
	let s = r.fillBefore(a.content, !0, o);
	return s && !va(n, a.content, o) ? s : null;
}
function va(e, t, n) {
	for (let r = n; r < t.childCount; r++) if (!e.allowsMarks(t.child(r).marks)) return !0;
	return !1;
}
function ya(e) {
	return e.spec.defining || e.spec.definingForContent;
}
function ba(e, t, n, r) {
	if (!r.size) return e.deleteRange(t, n);
	let i = e.doc.resolve(t), a = e.doc.resolve(n);
	if (da(i, a, r)) return e.step(new Ii(t, n, r));
	let o = wa(i, a);
	o[o.length - 1] == 0 && o.pop();
	let s = -(i.depth + 1);
	o.unshift(s);
	for (let e = i.depth, t = i.pos - 1; e > 0; e--, t--) {
		let n = i.node(e).type.spec;
		if (n.defining || n.definingAsContext || n.isolating) break;
		o.indexOf(e) > -1 ? s = e : i.before(e) == t && o.splice(1, 0, -e);
	}
	let c = o.indexOf(s), l = [], u = r.openStart;
	for (let e = r.content, t = 0;; t++) {
		let n = e.firstChild;
		if (l.push(n), t == r.openStart) break;
		e = n.content;
	}
	for (let e = u - 1; e >= 0; e--) {
		let t = l[e], n = ya(t.type);
		if (n && !t.sameMarkup(i.node(Math.abs(s) - 1))) u = e;
		else if (n || !t.type.isTextblock) break;
	}
	for (let t = r.openStart; t >= 0; t--) {
		let s = (t + u + 1) % (r.openStart + 1), d = l[s];
		if (d) for (let t = 0; t < o.length; t++) {
			let l = o[(t + c) % o.length], u = !0;
			l < 0 && (u = !1, l = -l);
			let f = i.node(l - 1), p = i.index(l - 1);
			if (f.canReplaceWith(p, p, d.type, d.marks)) return e.replace(i.before(l), u ? a.after(l) : n, new P(xa(r.content, 0, r.openStart, s), s, r.openEnd));
		}
	}
	let d = e.steps.length;
	for (let s = o.length - 1; s >= 0 && (e.replace(t, n, r), !(e.steps.length > d)); s--) {
		let e = o[s];
		e < 0 || (t = i.before(e), n = a.after(e));
	}
}
function xa(e, t, n, r, i) {
	if (t < n) {
		let i = e.firstChild;
		e = e.replaceChild(0, i.copy(xa(i.content, t + 1, n, r, i)));
	}
	if (t > r) {
		let t = i.contentMatchAt(0), n = t.fillBefore(e).append(e);
		e = n.append(t.matchFragment(n).fillBefore(M.empty, !0));
	}
	return e;
}
function Sa(e, t, n, r) {
	if (!r.isInline && t == n && e.doc.resolve(t).parent.content.size) {
		let i = ca(e.doc, t, r.type);
		i != null && (t = n = i);
	}
	e.replaceRange(t, n, new P(M.from(r), 0, 0));
}
function Ca(e, t, n) {
	let r = e.doc.resolve(t), i = e.doc.resolve(n);
	if (r.parent.isTextblock && i.parent.isTextblock && r.start() != i.start() && r.parentOffset == 0 && i.parentOffset == 0) {
		let a = r.sharedDepth(n), o = !1;
		for (let e = r.depth; e > a; e--) r.node(e).type.spec.isolating && (o = !0);
		for (let e = i.depth; e > a; e--) i.node(e).type.spec.isolating && (o = !0);
		if (!o) {
			for (let e = r.depth; e > 0 && t == r.start(e); e--) t = r.before(e);
			for (let e = i.depth; e > 0 && n == i.start(e); e--) n = i.before(e);
			r = e.doc.resolve(t), i = e.doc.resolve(n);
		}
	}
	let a = wa(r, i);
	for (let t = 0; t < a.length; t++) {
		let n = a[t], o = t == a.length - 1;
		if (o && n == 0 || r.node(n).type.contentMatch.validEnd) return e.delete(r.start(n), i.end(n));
		if (n > 0 && (o || r.node(n - 1).canReplace(r.index(n - 1), i.indexAfter(n - 1)))) return e.delete(r.before(n), i.after(n));
	}
	for (let a = 1; a <= r.depth && a <= i.depth; a++) if (t - r.start(a) == r.depth - a && n > r.end(a) && i.end(a) - n != i.depth - a && r.start(a - 1) == i.start(a - 1) && r.node(a - 1).canReplace(r.index(a - 1), i.index(a - 1))) return e.delete(r.before(a), n);
	e.delete(t, n);
}
function wa(e, t) {
	let n = [], r = Math.min(e.depth, t.depth);
	for (let i = r; i >= 0; i--) {
		let r = e.start(i);
		if (r < e.pos - (e.depth - i) || t.end(i) > t.pos + (t.depth - i) || e.node(i).type.spec.isolating || t.node(i).type.spec.isolating) break;
		(r == t.start(i) || i == e.depth && i == t.depth && e.parent.inlineContent && t.parent.inlineContent && i && t.start(i - 1) == r - 1) && n.push(i);
	}
	return n;
}
var Ta = class e extends ki {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n;
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return Ai.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let e in t.attrs) n[e] = t.attrs[e];
		n[this.attr] = this.value;
		let r = t.type.create(n, null, t.marks);
		return Ai.fromReplace(e, this.pos, this.pos + 1, new P(M.from(r), 0, +!t.isLeaf));
	}
	getMap() {
		return Ei.empty;
	}
	invert(t) {
		return new e(this.pos, this.attr, t.nodeAt(this.pos).attrs[this.attr]);
	}
	map(t) {
		let n = t.mapResult(this.pos, 1);
		return n.deletedAfter ? null : new e(n.pos, this.attr, this.value);
	}
	toJSON() {
		return {
			stepType: "attr",
			pos: this.pos,
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number" || typeof n.attr != "string") throw RangeError("Invalid input for AttrStep.fromJSON");
		return new e(n.pos, n.attr, n.value);
	}
};
ki.jsonID("attr", Ta);
var Ea = class e extends ki {
	constructor(e, t) {
		super(), this.attr = e, this.value = t;
	}
	apply(e) {
		let t = Object.create(null);
		for (let n in e.attrs) t[n] = e.attrs[n];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return Ai.ok(n);
	}
	getMap() {
		return Ei.empty;
	}
	invert(t) {
		return new e(this.attr, t.attrs[this.attr]);
	}
	map(e) {
		return this;
	}
	toJSON() {
		return {
			stepType: "docAttr",
			attr: this.attr,
			value: this.value
		};
	}
	static fromJSON(t, n) {
		if (typeof n.attr != "string") throw RangeError("Invalid input for DocAttrStep.fromJSON");
		return new e(n.attr, n.value);
	}
};
ki.jsonID("docAttr", Ea);
var Da = class extends Error {};
Da = function e(t) {
	let n = Error.call(this, t);
	return n.__proto__ = e.prototype, n;
}, Da.prototype = Object.create(Error.prototype), Da.prototype.constructor = Da, Da.prototype.name = "TransformError";
var Oa = class {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new Di();
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc;
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new Da(t.failed);
		return this;
	}
	maybeStep(e) {
		let t = e.apply(this.doc);
		return t.failed || this.addStep(e, t.doc), t;
	}
	get docChanged() {
		return this.steps.length > 0;
	}
	changedRange() {
		let e = 1e9, t = -1e9;
		for (let n = 0; n < this.mapping.maps.length; n++) {
			let r = this.mapping.maps[n];
			n && (e = r.map(e, 1), t = r.map(t, -1)), r.forEach((n, r, i, a) => {
				e = Math.min(e, i), t = Math.max(t, a);
			});
		}
		return e == 1e9 ? null : {
			from: e,
			to: t
		};
	}
	addStep(e, t) {
		this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
	}
	replace(e, t = e, n = P.empty) {
		let r = ua(this.doc, e, t, n);
		return r && this.step(r), this;
	}
	replaceWith(e, t, n) {
		return this.replace(e, t, new P(M.from(n), 0, 0));
	}
	delete(e, t) {
		return this.replace(e, t, P.empty);
	}
	insert(e, t) {
		return this.replaceWith(e, e, t);
	}
	replaceRange(e, t, n) {
		return ba(this, e, t, n), this;
	}
	replaceRangeWith(e, t, n) {
		return Sa(this, e, t, n), this;
	}
	deleteRange(e, t) {
		return Ca(this, e, t), this;
	}
	lift(e, t) {
		return Wi(this, e, t), this;
	}
	join(e, t = 1) {
		return sa(this, e, t), this;
	}
	wrap(e, t) {
		return Yi(this, e, t), this;
	}
	setBlockType(e, t = e, n, r = null) {
		return Xi(this, e, t, n, r), this;
	}
	setNodeMarkup(e, t, n = null, r) {
		return ea(this, e, t, n, r), this;
	}
	setNodeAttribute(e, t, n) {
		return this.step(new Ta(e, t, n)), this;
	}
	setDocAttribute(e, t) {
		return this.step(new Ea(e, t)), this;
	}
	addNodeMark(e, t) {
		return this.step(new Pi(e, t)), this;
	}
	removeNodeMark(e, t) {
		let n = this.doc.nodeAt(e);
		if (!n) throw RangeError("No node at position " + e);
		if (t instanceof N) t.isInSet(n.marks) && this.step(new Fi(e, t));
		else {
			let r = n.marks, i, a = [];
			for (; i = t.isInSet(r);) a.push(new Fi(e, i)), r = i.removeFromSet(r);
			for (let e = a.length - 1; e >= 0; e--) this.step(a[e]);
		}
		return this;
	}
	split(e, t = 1, n) {
		return na(this, e, t, n), this;
	}
	addMark(e, t, n) {
		return zi(this, e, t, n), this;
	}
	removeMark(e, t, n) {
		return Bi(this, e, t, n), this;
	}
	clearIncompatible(e, t, n) {
		return Vi(this, e, t, n), this;
	}
}, ka = Object.create(null), F = class {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new Aa(e.min(t), e.max(t))];
	}
	get anchor() {
		return this.$anchor.pos;
	}
	get head() {
		return this.$head.pos;
	}
	get from() {
		return this.$from.pos;
	}
	get to() {
		return this.$to.pos;
	}
	get $from() {
		return this.ranges[0].$from;
	}
	get $to() {
		return this.ranges[0].$to;
	}
	get empty() {
		let e = this.ranges;
		for (let t = 0; t < e.length; t++) if (e[t].$from.pos != e[t].$to.pos) return !1;
		return !0;
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0);
	}
	replace(e, t = P.empty) {
		let n = t.content.lastChild, r = null;
		for (let e = 0; e < t.openEnd; e++) r = n, n = n.lastChild;
		let i = e.steps.length, a = this.ranges;
		for (let o = 0; o < a.length; o++) {
			let { $from: s, $to: c } = a[o], l = e.mapping.slice(i);
			e.replaceRange(l.map(s.pos), l.map(c.pos), o ? P.empty : t), o == 0 && Ra(e, i, (n ? n.isInline : r && r.isTextblock) ? -1 : 1);
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n), c = s.map(a.pos), l = s.map(o.pos);
			i ? e.deleteRange(c, l) : (e.replaceRangeWith(c, l, t), Ra(e, n, t.isInline ? -1 : 1));
		}
	}
	static findFrom(e, t, n = !1) {
		let r = e.parent.inlineContent ? new I(e) : La(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (r) return r;
		for (let r = e.depth - 1; r >= 0; r--) {
			let i = t < 0 ? La(e.node(0), e.node(r), e.before(r + 1), e.index(r), t, n) : La(e.node(0), e.node(r), e.after(r + 1), e.index(r) + 1, t, n);
			if (i) return i;
		}
		return null;
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new Fa(e.node(0));
	}
	static atStart(e) {
		return La(e, e, 0, 0, 1) || new Fa(e);
	}
	static atEnd(e) {
		return La(e, e, e.content.size, e.childCount, -1) || new Fa(e);
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw RangeError("Invalid input for Selection.fromJSON");
		let n = ka[t.type];
		if (!n) throw RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t);
	}
	static jsonID(e, t) {
		if (e in ka) throw RangeError("Duplicate use of selection JSON ID " + e);
		return ka[e] = t, t.prototype.jsonID = e, t;
	}
	getBookmark() {
		return I.between(this.$anchor, this.$head).getBookmark();
	}
};
F.prototype.visible = !0;
var Aa = class {
	constructor(e, t) {
		this.$from = e, this.$to = t;
	}
}, ja = !1;
function Ma(e) {
	!ja && !e.parent.inlineContent && (ja = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + e.parent.type.name + ")"));
}
var I = class e extends F {
	constructor(e, t = e) {
		Ma(e), Ma(t), super(e, t);
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		if (!r.parent.inlineContent) return F.near(r);
		let i = t.resolve(n.map(this.anchor));
		return new e(i.parent.inlineContent ? i : r, r);
	}
	replace(e, t = P.empty) {
		if (super.replace(e, t), t == P.empty) {
			let t = this.$from.marksAcross(this.$to);
			t && e.ensureMarks(t);
		}
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor && t.head == this.head;
	}
	getBookmark() {
		return new Na(this.anchor, this.head);
	}
	toJSON() {
		return {
			type: "text",
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number" || typeof n.head != "number") throw RangeError("Invalid input for TextSelection.fromJSON");
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(e, t, n = t) {
		let r = e.resolve(t);
		return new this(r, n == t ? r : e.resolve(n));
	}
	static between(t, n, r) {
		let i = t.pos - n.pos;
		if ((!r || i) && (r = i >= 0 ? 1 : -1), !n.parent.inlineContent) {
			let e = F.findFrom(n, r, !0) || F.findFrom(n, -r, !0);
			if (e) n = e.$head;
			else return F.near(n, r);
		}
		return t.parent.inlineContent || (i == 0 ? t = n : (t = (F.findFrom(t, -r, !0) || F.findFrom(t, r, !0)).$anchor, t.pos < n.pos != i < 0 && (t = n))), new e(t, n);
	}
};
F.jsonID("text", I);
var Na = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		return I.between(e.resolve(this.anchor), e.resolve(this.head));
	}
}, L = class e extends F {
	constructor(e) {
		let t = e.nodeAfter, n = e.node(0).resolve(e.pos + t.nodeSize);
		super(e, n), this.node = t;
	}
	map(t, n) {
		let { deleted: r, pos: i } = n.mapResult(this.anchor), a = t.resolve(i);
		return r ? F.near(a) : new e(a);
	}
	content() {
		return new P(M.from(this.node), 0, 0);
	}
	eq(t) {
		return t instanceof e && t.anchor == this.anchor;
	}
	toJSON() {
		return {
			type: "node",
			anchor: this.anchor
		};
	}
	getBookmark() {
		return new Pa(this.anchor);
	}
	static fromJSON(t, n) {
		if (typeof n.anchor != "number") throw RangeError("Invalid input for NodeSelection.fromJSON");
		return new e(t.resolve(n.anchor));
	}
	static create(t, n) {
		return new e(t.resolve(n));
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1;
	}
};
L.prototype.visible = !1, F.jsonID("node", L);
var Pa = class e {
	constructor(e) {
		this.anchor = e;
	}
	map(t) {
		let { deleted: n, pos: r } = t.mapResult(this.anchor);
		return n ? new Na(r, r) : new e(r);
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = t.nodeAfter;
		return n && L.isSelectable(n) ? new L(t) : F.near(t);
	}
}, Fa = class e extends F {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size));
	}
	replace(e, t = P.empty) {
		if (t == P.empty) {
			e.delete(0, e.doc.content.size);
			let t = F.atStart(e.doc);
			t.eq(e.selection) || e.setSelection(t);
		} else super.replace(e, t);
	}
	toJSON() {
		return { type: "all" };
	}
	static fromJSON(t) {
		return new e(t);
	}
	map(t) {
		return new e(t);
	}
	eq(t) {
		return t instanceof e;
	}
	getBookmark() {
		return Ia;
	}
};
F.jsonID("all", Fa);
var Ia = {
	map() {
		return this;
	},
	resolve(e) {
		return new Fa(e);
	}
};
function La(e, t, n, r, i, a = !1) {
	if (t.inlineContent) return I.create(e, n);
	for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < t.childCount : o >= 0; o += i) {
		let r = t.child(o);
		if (!r.isAtom) {
			let t = La(e, r, n + i, i < 0 ? r.childCount : 0, i, a);
			if (t) return t;
		} else if (!a && L.isSelectable(r)) return L.create(e, n - (i < 0 ? r.nodeSize : 0));
		n += r.nodeSize * i;
	}
	return null;
}
function Ra(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof Ii || i instanceof Li)) return;
	let a = e.mapping.maps[r], o;
	a.forEach((e, t, n, r) => {
		o ??= r;
	}), e.setSelection(F.near(e.doc.resolve(o), n));
}
var za = 1, Ba = 2, Va = 4, Ha = class extends Oa {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | za) & -3, this.storedMarks = null, this;
	}
	get selectionSet() {
		return (this.updated & za) > 0;
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= Ba, this;
	}
	ensureMarks(e) {
		return N.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
	}
	get storedMarksSet() {
		return (this.updated & Ba) > 0;
	}
	addStep(e, t) {
		super.addStep(e, t), this.updated &= -3, this.storedMarks = null;
	}
	setTime(e) {
		return this.time = e, this;
	}
	replaceSelection(e) {
		return this.selection.replace(this, e), this;
	}
	replaceSelectionWith(e, t = !0) {
		let n = this.selection;
		return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || N.none))), n.replaceWith(this, e), this;
	}
	deleteSelection() {
		return this.selection.replace(this), this;
	}
	insertText(e, t, n) {
		let r = this.doc.type.schema;
		if (t == null) return e ? this.replaceSelectionWith(r.text(e), !0) : this.deleteSelection();
		{
			if (n ??= t, !e) return this.deleteRange(t, n);
			let i = this.storedMarks;
			if (!i) {
				let e = this.doc.resolve(t);
				i = n == t ? e.marks() : e.marksAcross(this.doc.resolve(n));
			}
			return this.replaceRangeWith(t, n, r.text(e, i)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(F.near(this.selection.$to)), this;
		}
	}
	setMeta(e, t) {
		return this.meta[typeof e == "string" ? e : e.key] = t, this;
	}
	getMeta(e) {
		return this.meta[typeof e == "string" ? e : e.key];
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0;
	}
	scrollIntoView() {
		return this.updated |= Va, this;
	}
	get scrolledIntoView() {
		return (this.updated & Va) > 0;
	}
};
function Ua(e, t) {
	return !t || !e ? e : e.bind(t);
}
var Wa = class {
	constructor(e, t, n) {
		this.name = e, this.init = Ua(t.init, n), this.apply = Ua(t.apply, n);
	}
}, Ga = [
	new Wa("doc", {
		init(e) {
			return e.doc || e.schema.topNodeType.createAndFill();
		},
		apply(e) {
			return e.doc;
		}
	}),
	new Wa("selection", {
		init(e, t) {
			return e.selection || F.atStart(t.doc);
		},
		apply(e) {
			return e.selection;
		}
	}),
	new Wa("storedMarks", {
		init(e) {
			return e.storedMarks || null;
		},
		apply(e, t, n, r) {
			return r.selection.$cursor ? e.storedMarks : null;
		}
	}),
	new Wa("scrollToSelection", {
		init() {
			return 0;
		},
		apply(e, t) {
			return e.scrolledIntoView ? t + 1 : t;
		}
	})
], Ka = class {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = Ga.slice(), t && t.forEach((e) => {
			if (this.pluginsByKey[e.key]) throw RangeError("Adding different instances of a keyed plugin (" + e.key + ")");
			this.plugins.push(e), this.pluginsByKey[e.key] = e, e.spec.state && this.fields.push(new Wa(e.key, e.spec.state, e));
		});
	}
}, qa = class e {
	constructor(e) {
		this.config = e;
	}
	get schema() {
		return this.config.schema;
	}
	get plugins() {
		return this.config.plugins;
	}
	apply(e) {
		return this.applyTransaction(e).state;
	}
	filterTransaction(e, t = -1) {
		for (let n = 0; n < this.config.plugins.length; n++) if (n != t) {
			let t = this.config.plugins[n];
			if (t.spec.filterTransaction && !t.spec.filterTransaction.call(t, e, this)) return !1;
		}
		return !0;
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return {
			state: this,
			transactions: []
		};
		let t = [e], n = this.applyInner(e), r = null;
		for (;;) {
			let i = !1;
			for (let a = 0; a < this.config.plugins.length; a++) {
				let o = this.config.plugins[a];
				if (o.spec.appendTransaction) {
					let s = r ? r[a].n : 0, c = r ? r[a].state : this, l = s < t.length && o.spec.appendTransaction.call(o, s ? t.slice(s) : t, c, n);
					if (l && n.filterTransaction(l, a)) {
						if (l.setMeta("appendedTransaction", e), !r) {
							r = [];
							for (let e = 0; e < this.config.plugins.length; e++) r.push(e < a ? {
								state: n,
								n: t.length
							} : {
								state: this,
								n: 0
							});
						}
						t.push(l), n = n.applyInner(l), i = !0;
					}
					r && (r[a] = {
						state: n,
						n: t.length
					});
				}
			}
			if (!i) return {
				state: n,
				transactions: t
			};
		}
	}
	applyInner(t) {
		if (!t.before.eq(this.doc)) throw RangeError("Applying a mismatched transaction");
		let n = new e(this.config), r = this.config.fields;
		for (let e = 0; e < r.length; e++) {
			let i = r[e];
			n[i.name] = i.apply(t, this[i.name], this, n);
		}
		return n;
	}
	get tr() {
		return new Ha(this);
	}
	static create(t) {
		let n = new Ka(t.doc ? t.doc.type.schema : t.schema, t.plugins), r = new e(n);
		for (let e = 0; e < n.fields.length; e++) r[n.fields[e].name] = n.fields[e].init(t, r);
		return r;
	}
	reconfigure(t) {
		let n = new Ka(this.schema, t.plugins), r = n.fields, i = new e(n);
		for (let e = 0; e < r.length; e++) {
			let n = r[e].name;
			i[n] = this.hasOwnProperty(n) ? this[n] : r[e].init(t, i);
		}
		return i;
	}
	toJSON(e) {
		let t = {
			doc: this.doc.toJSON(),
			selection: this.selection.toJSON()
		};
		if (this.storedMarks && (t.storedMarks = this.storedMarks.map((e) => e.toJSON())), e && typeof e == "object") for (let n in e) {
			if (n == "doc" || n == "selection") throw RangeError("The JSON fields `doc` and `selection` are reserved");
			let r = e[n], i = r.spec.state;
			i && i.toJSON && (t[n] = i.toJSON.call(r, this[r.key]));
		}
		return t;
	}
	static fromJSON(t, n, r) {
		if (!n) throw RangeError("Invalid input for EditorState.fromJSON");
		if (!t.schema) throw RangeError("Required config field 'schema' missing");
		let i = new Ka(t.schema, t.plugins), a = new e(i);
		return i.fields.forEach((e) => {
			if (e.name == "doc") a.doc = br.fromJSON(t.schema, n.doc);
			else if (e.name == "selection") a.selection = F.fromJSON(a.doc, n.selection);
			else if (e.name == "storedMarks") n.storedMarks && (a.storedMarks = n.storedMarks.map(t.schema.markFromJSON));
			else {
				if (r) for (let i in r) {
					let o = r[i], s = o.spec.state;
					if (o.key == e.name && s && s.fromJSON && Object.prototype.hasOwnProperty.call(n, i)) {
						a[e.name] = s.fromJSON.call(o, t, n[i], a);
						return;
					}
				}
				a[e.name] = e.init(t, a);
			}
		}), a;
	}
};
function Ja(e, t, n) {
	for (let r in e) {
		let i = e[r];
		i instanceof Function ? i = i.bind(t) : r == "handleDOMEvents" && (i = Ja(i, t, {})), n[r] = i;
	}
	return n;
}
var R = class {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && Ja(e.props, this, this.props), this.key = e.key ? e.key.key : Xa("plugin");
	}
	getState(e) {
		return e[this.key];
	}
}, Ya = Object.create(null);
function Xa(e) {
	return e in Ya ? e + "$" + ++Ya[e] : (Ya[e] = 0, e + "$");
}
var z = class {
	constructor(e = "key") {
		this.key = Xa(e);
	}
	get(e) {
		return e.config.pluginsByKey[this.key];
	}
	getState(e) {
		return e[this.key];
	}
}, Za = (e, t) => e.selection.empty ? !1 : (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
function Qa(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0) ? null : n;
}
var $a = (e, t, n) => {
	let r = Qa(e, n);
	if (!r) return !1;
	let i = ao(r);
	if (!i) {
		let n = r.blockRange(), i = n && Ui(n);
		return i == null ? !1 : (t && t(e.tr.lift(n, i).scrollIntoView()), !0);
	}
	let a = i.nodeBefore;
	if (wo(e, i, t, -1)) return !0;
	if (r.parent.content.size == 0 && (ro(a, "end") || L.isSelectable(a))) for (let n = r.depth;; n--) {
		let o = ua(e.doc, r.before(n), r.after(n), P.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (t) {
				let n = e.tr.step(o);
				n.setSelection(ro(a, "end") ? F.findFrom(n.doc.resolve(n.mapping.map(i.pos, -1)), -1) : L.create(n.doc, i.pos - a.nodeSize)), t(n.scrollIntoView());
			}
			return !0;
		}
		if (n == 1 || r.node(n - 1).childCount > 1) break;
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos - a.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, eo = (e, t, n) => {
	let r = Qa(e, n);
	if (!r) return !1;
	let i = ao(r);
	return i ? no(e, i, t) : !1;
}, to = (e, t, n) => {
	let r = oo(e, n);
	if (!r) return !1;
	let i = lo(r);
	return i ? no(e, i, t) : !1;
};
function no(e, t, n) {
	let r = t.nodeBefore, i = t.pos - 1;
	for (; !r.isTextblock; i--) {
		if (r.type.spec.isolating) return !1;
		let e = r.lastChild;
		if (!e) return !1;
		r = e;
	}
	let a = t.nodeAfter, o = t.pos + 1;
	for (; !a.isTextblock; o++) {
		if (a.type.spec.isolating) return !1;
		let e = a.firstChild;
		if (!e) return !1;
		a = e;
	}
	let s = ua(e.doc, i, o, P.empty);
	if (!s || s.from != i || s instanceof Ii && s.slice.size >= o - i) return !1;
	if (n) {
		let t = e.tr.step(s);
		t.setSelection(I.create(t.doc, i)), n(t.scrollIntoView());
	}
	return !0;
}
function ro(e, t, n = !1) {
	for (let r = e; r; r = t == "start" ? r.firstChild : r.lastChild) {
		if (r.isTextblock) return !0;
		if (n && r.childCount != 1) return !1;
	}
	return !1;
}
var io = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0) return !1;
		a = ao(r);
	}
	let o = a && a.nodeBefore;
	return !o || !L.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(L.create(e.doc, a.pos - o.nodeSize)).scrollIntoView()), !0);
};
function ao(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
		if (e.node(t).type.spec.isolating) break;
	}
	return null;
}
function oo(e, t) {
	let { $cursor: n } = e.selection;
	return !n || (t ? !t.endOfTextblock("forward", e) : n.parentOffset < n.parent.content.size) ? null : n;
}
var so = (e, t, n) => {
	let r = oo(e, n);
	if (!r) return !1;
	let i = lo(r);
	if (!i) return !1;
	let a = i.nodeAfter;
	if (wo(e, i, t, 1)) return !0;
	if (r.parent.content.size == 0 && (ro(a, "start") || L.isSelectable(a))) {
		let n = ua(e.doc, r.before(), r.after(), P.empty);
		if (n && n.slice.size < n.to - n.from) {
			if (t) {
				let r = e.tr.step(n);
				r.setSelection(ro(a, "start") ? F.findFrom(r.doc.resolve(r.mapping.map(i.pos)), 1) : L.create(r.doc, r.mapping.map(i.pos))), t(r.scrollIntoView());
			}
			return !0;
		}
	}
	return a.isAtom && i.depth == r.depth - 1 ? (t && t(e.tr.delete(i.pos, i.pos + a.nodeSize).scrollIntoView()), !0) : !1;
}, co = (e, t, n) => {
	let { $head: r, empty: i } = e.selection, a = r;
	if (!i) return !1;
	if (r.parent.isTextblock) {
		if (n ? !n.endOfTextblock("forward", e) : r.parentOffset < r.parent.content.size) return !1;
		a = lo(r);
	}
	let o = a && a.nodeAfter;
	return !o || !L.isSelectable(o) ? !1 : (t && t(e.tr.setSelection(L.create(e.doc, a.pos)).scrollIntoView()), !0);
};
function lo(e) {
	if (!e.parent.type.spec.isolating) for (let t = e.depth - 1; t >= 0; t--) {
		let n = e.node(t);
		if (e.index(t) + 1 < n.childCount) return e.doc.resolve(e.after(t + 1));
		if (n.type.spec.isolating) break;
	}
	return null;
}
var uo = (e, t) => {
	let n = e.selection, r = n instanceof L, i;
	if (r) {
		if (n.node.isTextblock || !ra(e.doc, n.from)) return !1;
		i = n.from;
	} else if (i = oa(e.doc, n.from, -1), i == null) return !1;
	if (t) {
		let n = e.tr.join(i);
		r && n.setSelection(L.create(n.doc, i - e.doc.resolve(i).nodeBefore.nodeSize)), t(n.scrollIntoView());
	}
	return !0;
}, fo = (e, t) => {
	let n = e.selection, r;
	if (n instanceof L) {
		if (n.node.isTextblock || !ra(e.doc, n.to)) return !1;
		r = n.to;
	} else if (r = oa(e.doc, n.to, 1), r == null) return !1;
	return t && t(e.tr.join(r).scrollIntoView()), !0;
}, po = (e, t) => {
	let { $from: n, $to: r } = e.selection, i = n.blockRange(r), a = i && Ui(i);
	return a == null ? !1 : (t && t(e.tr.lift(i, a).scrollIntoView()), !0);
}, mo = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (t && t(e.tr.insertText("\n").scrollIntoView()), !0);
};
function ho(e) {
	for (let t = 0; t < e.edgeCount; t++) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var go = (e, t) => {
	let { $head: n, $anchor: r } = e.selection;
	if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
	let i = n.node(-1), a = n.indexAfter(-1), o = ho(i.contentMatchAt(a));
	if (!o || !i.canReplaceWith(a, a, o)) return !1;
	if (t) {
		let r = n.after(), i = e.tr.replaceWith(r, r, o.createAndFill());
		i.setSelection(F.near(i.doc.resolve(r), 1)), t(i.scrollIntoView());
	}
	return !0;
}, _o = (e, t) => {
	let n = e.selection, { $from: r, $to: i } = n;
	if (n instanceof Fa || r.parent.inlineContent || i.parent.inlineContent) return !1;
	let a = ho(i.parent.contentMatchAt(i.indexAfter()));
	if (!a || !a.isTextblock) return !1;
	if (t) {
		let n = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, o = e.tr.insert(n, a.createAndFill());
		o.setSelection(I.create(o.doc, n + 1)), t(o.scrollIntoView());
	}
	return !0;
}, vo = (e, t) => {
	let { $cursor: n } = e.selection;
	if (!n || n.parent.content.size) return !1;
	if (n.depth > 1 && n.after() != n.end(-1)) {
		let r = n.before();
		if (ta(e.doc, r)) return t && t(e.tr.split(r).scrollIntoView()), !0;
	}
	let r = n.blockRange(), i = r && Ui(r);
	return i == null ? !1 : (t && t(e.tr.lift(r, i).scrollIntoView()), !0);
};
function yo(e) {
	return (t, n) => {
		if (t.selection instanceof L && t.selection.node.isBlock) {
			let { $from: e } = t.selection;
			return !e.parentOffset || !ta(t.doc, e.pos) ? !1 : (n && n(t.tr.split(e.pos).scrollIntoView()), !0);
		}
		if (!t.selection.$from.depth) return !1;
		let r = t.tr;
		!t.selection.empty && (t.selection instanceof I || t.selection instanceof Fa) && r.deleteSelection();
		let { $from: i } = r.selection, a = r.steps.length, o = [], s, c, l = !1, u = !1;
		for (let t = i.depth;; t--) if (i.node(t).isBlock) {
			l = i.end(t) == i.pos + (i.depth - t), u = i.start(t) == i.pos - (i.depth - t), c = ho(i.node(t - 1).contentMatchAt(i.indexAfter(t - 1)));
			let n = e && e(i.parent, l, i);
			o.unshift(n || (l && c ? { type: c } : null)), s = t;
			break;
		} else {
			if (t == 1) return !1;
			o.unshift(null);
		}
		let d = i.pos, f = ta(r.doc, d, o.length, o);
		if (f ||= (o[0] = c ? { type: c } : null, ta(r.doc, d, o.length, o)), !f) return !1;
		if (r.split(d, o.length, o), !l && u && i.node(s).type != c) {
			let e = r.mapping.slice(a), t = e.map(i.before(s)), n = r.doc.resolve(t);
			c && i.node(s - 1).canReplaceWith(n.index(), n.index() + 1, c) && r.setNodeMarkup(e.map(i.before(s)), c);
		}
		return n && n(r.scrollIntoView()), !0;
	};
}
var bo = yo(), xo = (e, t) => {
	let { $from: n, to: r } = e.selection, i, a = n.sharedDepth(r);
	return a == 0 ? !1 : (i = n.before(a), t && t(e.tr.setSelection(L.create(e.doc, i))), !0);
}, So = (e, t) => (t && t(e.tr.setSelection(new Fa(e.doc))), !0);
function Co(e, t, n) {
	let r = t.nodeBefore, i = t.nodeAfter, a = t.index();
	return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && t.parent.canReplace(a - 1, a) ? (n && n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()), !0) : !t.parent.canReplace(a, a + 1) || !(i.isTextblock || ra(e.doc, t.pos)) ? !1 : (n && n(e.tr.join(t.pos).scrollIntoView()), !0);
}
function wo(e, t, n, r) {
	let i = t.nodeBefore, a = t.nodeAfter, o, s, c = i.type.spec.isolating || a.type.spec.isolating;
	if (!c && Co(e, t, n)) return !0;
	let l = !c && t.parent.canReplace(t.index(), t.index() + 1);
	if (l && (o = (s = i.contentMatchAt(i.childCount)).findWrapping(a.type)) && s.matchType(o[0] || a.type).validEnd) {
		if (n) {
			let r = t.pos + a.nodeSize, s = M.empty;
			for (let e = o.length - 1; e >= 0; e--) s = M.from(o[e].create(null, s));
			s = M.from(i.copy(s));
			let c = e.tr.step(new Li(t.pos - 1, r, t.pos, r, new P(s, 1, 0), o.length, !0)), l = c.doc.resolve(r + 2 * o.length);
			l.nodeAfter && l.nodeAfter.type == i.type && ra(c.doc, l.pos) && c.join(l.pos), n(c.scrollIntoView());
		}
		return !0;
	}
	let u = a.type.spec.isolating || r > 0 && c ? null : F.findFrom(t, 1), d = u && u.$from.blockRange(u.$to), f = d && Ui(d);
	if (f != null && f >= t.depth) return n && n(e.tr.lift(d, f).scrollIntoView()), !0;
	if (l && ro(a, "start", !0) && ro(i, "end")) {
		let r = i, o = [];
		for (; o.push(r), !r.isTextblock;) r = r.lastChild;
		let s = a, c = 1;
		for (; !s.isTextblock; s = s.firstChild) c++;
		if (r.canReplace(r.childCount, r.childCount, s.content)) {
			if (n) {
				let r = M.empty;
				for (let e = o.length - 1; e >= 0; e--) r = M.from(o[e].copy(r));
				n(e.tr.step(new Li(t.pos - o.length, t.pos + a.nodeSize, t.pos + c, t.pos + a.nodeSize - c, new P(r, o.length, 0), 0, !0)).scrollIntoView());
			}
			return !0;
		}
	}
	return !1;
}
function To(e) {
	return function(t, n) {
		let r = t.selection, i = e < 0 ? r.$from : r.$to, a = i.depth;
		for (; i.node(a).isInline;) {
			if (!a) return !1;
			a--;
		}
		return i.node(a).isTextblock ? (n && n(t.tr.setSelection(I.create(t.doc, e < 0 ? i.start(a) : i.end(a)))), !0) : !1;
	};
}
var Eo = To(-1), Do = To(1);
function Oo(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a), s = o && Gi(o, e, t);
		return s ? (r && r(n.tr.wrap(o, s).scrollIntoView()), !0) : !1;
	};
}
function ko(e, t = null) {
	return function(n, r) {
		let i = !1;
		for (let r = 0; r < n.selection.ranges.length && !i; r++) {
			let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
			n.doc.nodesBetween(a, o, (r, a) => {
				if (i) return !1;
				if (!(!r.isTextblock || r.hasMarkup(e, t))) if (r.type == e) i = !0;
				else {
					let t = n.doc.resolve(a), r = t.index();
					i = t.parent.canReplaceWith(r, r + 1, e);
				}
			});
		}
		if (!i) return !1;
		if (r) {
			let i = n.tr;
			for (let r = 0; r < n.selection.ranges.length; r++) {
				let { $from: { pos: a }, $to: { pos: o } } = n.selection.ranges[r];
				i.setBlockType(a, o, e, t);
			}
			r(i.scrollIntoView());
		}
		return !0;
	};
}
function Ao(...e) {
	return function(t, n, r) {
		for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
		return !1;
	};
}
var jo = Ao(Za, $a, io), Mo = Ao(Za, so, co), No = {
	Enter: Ao(mo, _o, vo, bo),
	"Mod-Enter": go,
	Backspace: jo,
	"Mod-Backspace": jo,
	"Shift-Backspace": jo,
	Delete: Mo,
	"Mod-Delete": Mo,
	"Mod-a": So
}, Po = {
	"Ctrl-h": No.Backspace,
	"Alt-Backspace": No["Mod-Backspace"],
	"Ctrl-d": No.Delete,
	"Ctrl-Alt-Backspace": No["Mod-Delete"],
	"Alt-Delete": No["Mod-Delete"],
	"Alt-d": No["Mod-Delete"],
	"Ctrl-a": Eo,
	"Ctrl-e": Do
};
for (let e in No) Po[e] = No[e];
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform();
//#endregion
//#region ../../node_modules/prosemirror-schema-list/dist/index.js
function Fo(e, t = null) {
	return function(n, r) {
		let { $from: i, $to: a } = n.selection, o = i.blockRange(a);
		if (!o) return !1;
		let s = r ? n.tr : null;
		return Io(s, o, e, t) ? (r && r(s.scrollIntoView()), !0) : !1;
	};
}
function Io(e, t, n, r = null) {
	let i = !1, a = t, o = t.$from.doc;
	if (t.depth >= 2 && t.$from.node(t.depth - 1).type.compatibleContent(n) && t.startIndex == 0) {
		if (t.$from.index(t.depth - 1) == 0) return !1;
		let e = o.resolve(t.start - 2);
		a = new vr(e, e, t.depth), t.endIndex < t.parent.childCount && (t = new vr(t.$from, o.resolve(t.$to.end(t.depth)), t.depth)), i = !0;
	}
	let s = Gi(a, n, r, t);
	return s ? (e && Lo(e, t, s, i, n), !0) : !1;
}
function Lo(e, t, n, r, i) {
	let a = M.empty;
	for (let e = n.length - 1; e >= 0; e--) a = M.from(n[e].type.create(n[e].attrs, a));
	e.step(new Li(t.start - (r ? 2 : 0), t.end, t.start, t.end, new P(a, 0, 0), n.length, !0));
	let o = 0;
	for (let e = 0; e < n.length; e++) n[e].type == i && (o = e + 1);
	let s = n.length - o, c = t.start + n.length - (r ? 2 : 0), l = t.parent;
	for (let n = t.startIndex, r = t.endIndex, i = !0; n < r; n++, i = !1) !i && ta(e.doc, c, s) && (e.split(c, s), c += 2 * s), c += l.child(n).nodeSize;
	return e;
}
function Ro(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
		return a ? n ? r.node(a.depth - 1).type == e ? zo(t, n, e, a) : Bo(t, n, a) : !0 : !1;
	};
}
function zo(e, t, n, r) {
	let i = e.tr, a = r.end, o = r.$to.end(r.depth);
	a < o && (i.step(new Li(a - 1, o, a, o, new P(M.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new vr(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
	let s = Ui(r);
	if (s == null) return !1;
	i.lift(r, s);
	let c = i.doc.resolve(i.mapping.map(a, -1) - 1);
	return ra(i.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && i.join(c.pos), t(i.scrollIntoView()), !0;
}
function Bo(e, t, n) {
	let r = e.tr, i = n.parent;
	for (let e = n.end, t = n.endIndex - 1, a = n.startIndex; t > a; t--) e -= i.child(t).nodeSize, r.delete(e - 1, e + 1);
	let a = r.doc.resolve(n.start), o = a.nodeAfter;
	if (r.mapping.map(n.end) != n.start + a.nodeAfter.nodeSize) return !1;
	let s = n.startIndex == 0, c = n.endIndex == i.childCount, l = a.node(-1), u = a.index(-1);
	if (!l.canReplace(u + +!s, u + 1, o.content.append(c ? M.empty : M.from(i)))) return !1;
	let d = a.pos, f = d + o.nodeSize;
	return r.step(new Li(d - +!!s, f + +!!c, d + 1, f - 1, new P((s ? M.empty : M.from(i.copy(M.empty))).append(c ? M.empty : M.from(i.copy(M.empty))), +!s, +!c), +!s)), t(r.scrollIntoView()), !0;
}
function Vo(e) {
	return function(t, n) {
		let { $from: r, $to: i } = t.selection, a = r.blockRange(i, (t) => t.childCount > 0 && t.firstChild.type == e);
		if (!a) return !1;
		let o = a.startIndex;
		if (o == 0) return !1;
		let s = a.parent, c = s.child(o - 1);
		if (c.type != e) return !1;
		if (n) {
			let r = c.lastChild && c.lastChild.type == s.type, i = M.from(r ? e.create() : null), o = new P(M.from(e.create(null, M.from(s.type.create(null, i)))), r ? 3 : 1, 0), l = a.start, u = a.end;
			n(t.tr.step(new Li(l - (r ? 3 : 1), u, l, u, o, 1, !0)).scrollIntoView());
		}
		return !0;
	};
}
//#endregion
//#region ../../node_modules/prosemirror-view/dist/index.js
var Ho = function(e) {
	for (var t = 0;; t++) if (e = e.previousSibling, !e) return t;
}, Uo = function(e) {
	let t = e.assignedSlot || e.parentNode;
	return t && t.nodeType == 11 ? t.host : t;
}, Wo = null, Go = function(e, t, n) {
	let r = Wo ||= document.createRange();
	return r.setEnd(e, n ?? e.nodeValue.length), r.setStart(e, t || 0), r;
}, Ko = function() {
	Wo = null;
}, qo = function(e, t, n, r) {
	return n && (Yo(e, t, n, r, -1) || Yo(e, t, n, r, 1));
}, Jo = /^(img|br|input|textarea|hr)$/i;
function Yo(e, t, n, r, i) {
	for (;;) {
		if (e == n && t == r) return !0;
		if (t == (i < 0 ? 0 : Xo(e))) {
			let n = e.parentNode;
			if (!n || n.nodeType != 1 || es(e) || Jo.test(e.nodeName) || e.contentEditable == "false") return !1;
			t = Ho(e) + (i < 0 ? 0 : 1), e = n;
		} else if (e.nodeType == 1) {
			let n = e.childNodes[t + (i < 0 ? -1 : 0)];
			if (n.nodeType == 1 && n.contentEditable == "false") if (n.pmViewDesc?.ignoreForSelection) t += i;
			else return !1;
			else e = n, t = i < 0 ? Xo(e) : 0;
		} else return !1;
	}
}
function Xo(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function Zo(e, t) {
	for (;;) {
		if (e.nodeType == 3 && t) return e;
		if (e.nodeType == 1 && t > 0) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t - 1], t = Xo(e);
		} else if (e.parentNode && !es(e)) t = Ho(e), e = e.parentNode;
		else return null;
	}
}
function Qo(e, t) {
	for (;;) {
		if (e.nodeType == 3 && t < e.nodeValue.length) return e;
		if (e.nodeType == 1 && t < e.childNodes.length) {
			if (e.contentEditable == "false") return null;
			e = e.childNodes[t], t = 0;
		} else if (e.parentNode && !es(e)) t = Ho(e) + 1, e = e.parentNode;
		else return null;
	}
}
function $o(e, t, n) {
	for (let r = t == 0, i = t == Xo(e); r || i;) {
		if (e == n) return !0;
		let t = Ho(e);
		if (e = e.parentNode, !e) return !1;
		r &&= t == 0, i &&= t == Xo(e);
	}
}
function es(e) {
	let t;
	for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
	return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
var ts = function(e) {
	return e.focusNode && qo(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
};
function ns(e, t) {
	let n = document.createEvent("Event");
	return n.initEvent("keydown", !0, !0), n.keyCode = e, n.key = n.code = t, n;
}
function rs(e) {
	let t = e.activeElement;
	for (; t && t.shadowRoot;) t = t.shadowRoot.activeElement;
	return t;
}
function is(e, t, n) {
	if (e.caretPositionFromPoint) try {
		let r = e.caretPositionFromPoint(t, n);
		if (r) return {
			node: r.offsetNode,
			offset: Math.min(Xo(r.offsetNode), r.offset)
		};
	} catch {}
	if (e.caretRangeFromPoint) {
		let r = e.caretRangeFromPoint(t, n);
		if (r) return {
			node: r.startContainer,
			offset: Math.min(Xo(r.startContainer), r.startOffset)
		};
	}
}
var as = typeof navigator < "u" ? navigator : null, ss = typeof document < "u" ? document : null, cs = as && as.userAgent || "", ls = /Edge\/(\d+)/.exec(cs), us = /MSIE \d/.exec(cs), ds = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(cs), fs = !!(us || ds || ls), ps = us ? document.documentMode : ds ? +ds[1] : ls ? +ls[1] : 0, ms = !fs && /gecko\/(\d+)/i.test(cs);
ms && +(/Firefox\/(\d+)/.exec(cs) || [0, 0])[1];
var hs = !fs && /Chrome\/(\d+)/.exec(cs), gs = !!hs, _s = hs ? +hs[1] : 0, vs = !fs && !!as && /Apple Computer/.test(as.vendor), ys = vs && (/Mobile\/\w+/.test(cs) || !!as && as.maxTouchPoints > 2), bs = ys || (as ? /Mac/.test(as.platform) : !1), xs = as ? /Win/.test(as.platform) : !1, Ss = /Android \d/.test(cs), Cs = !!ss && "webkitFontSmoothing" in ss.documentElement.style, ws = Cs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Ts(e) {
	let t = e.defaultView && e.defaultView.visualViewport;
	return t ? {
		left: 0,
		right: t.width,
		top: 0,
		bottom: t.height
	} : {
		left: 0,
		right: e.documentElement.clientWidth,
		top: 0,
		bottom: e.documentElement.clientHeight
	};
}
function Es(e, t) {
	return typeof e == "number" ? e : e[t];
}
function Ds(e) {
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth || 1, r = t.height / e.offsetHeight || 1;
	return {
		left: t.left,
		right: t.left + e.clientWidth * n,
		top: t.top,
		bottom: t.top + e.clientHeight * r
	};
}
function Os(e, t, n) {
	let r = e.someProp("scrollThreshold") || 0, i = e.someProp("scrollMargin") || 5, a = e.dom.ownerDocument;
	for (let o = n || e.dom; o;) {
		if (o.nodeType != 1) {
			o = Uo(o);
			continue;
		}
		let e = o, n = e == a.body, s = n ? Ts(a) : Ds(e), c = 0, l = 0;
		if (t.top < s.top + Es(r, "top") ? l = -(s.top - t.top + Es(i, "top")) : t.bottom > s.bottom - Es(r, "bottom") && (l = t.bottom - t.top > s.bottom - s.top ? t.top + Es(i, "top") - s.top : t.bottom - s.bottom + Es(i, "bottom")), t.left < s.left + Es(r, "left") ? c = -(s.left - t.left + Es(i, "left")) : t.right > s.right - Es(r, "right") && (c = t.right - s.right + Es(i, "right")), c || l) if (n) a.defaultView.scrollBy(c, l);
		else {
			let n = e.scrollLeft, r = e.scrollTop;
			l && (e.scrollTop += l), c && (e.scrollLeft += c);
			let i = e.scrollLeft - n, a = e.scrollTop - r;
			t = {
				left: t.left - i,
				top: t.top - a,
				right: t.right - i,
				bottom: t.bottom - a
			};
		}
		let u = n ? "fixed" : getComputedStyle(o).position;
		if (/^(fixed|sticky)$/.test(u)) break;
		o = u == "absolute" ? o.offsetParent : Uo(o);
	}
}
function ks(e) {
	let t = e.dom.getBoundingClientRect(), n = Math.max(0, t.top), r, i;
	for (let a = (t.left + t.right) / 2, o = n + 1; o < Math.min(innerHeight, t.bottom); o += 5) {
		let t = e.root.elementFromPoint(a, o);
		if (!t || t == e.dom || !e.dom.contains(t)) continue;
		let s = t.getBoundingClientRect();
		if (s.top >= n - 20) {
			r = t, i = s.top;
			break;
		}
	}
	return {
		refDOM: r,
		refTop: i,
		stack: As(e.dom)
	};
}
function As(e) {
	let t = [], n = e.ownerDocument;
	for (let r = e; r && (t.push({
		dom: r,
		top: r.scrollTop,
		left: r.scrollLeft
	}), e != n); r = Uo(r));
	return t;
}
function js({ refDOM: e, refTop: t, stack: n }) {
	let r = e ? e.getBoundingClientRect().top : 0;
	Ms(n, r == 0 ? 0 : r - t);
}
function Ms(e, t) {
	for (let n = 0; n < e.length; n++) {
		let { dom: r, top: i, left: a } = e[n];
		r.scrollTop != i + t && (r.scrollTop = i + t), r.scrollLeft != a && (r.scrollLeft = a);
	}
}
var Ns = null;
function Ps(e) {
	if (e.setActive) return e.setActive();
	if (Ns) return e.focus(Ns);
	let t = As(e);
	e.focus(Ns == null ? { get preventScroll() {
		return Ns = { preventScroll: !0 }, !0;
	} } : void 0), Ns || (Ns = !1, Ms(t, 0));
}
function Fs(e, t) {
	let n, r = 2e8, i, a = 0, o = t.top, s = t.top, c, l;
	for (let u = e.firstChild, d = 0; u; u = u.nextSibling, d++) {
		let e;
		if (u.nodeType == 1) e = u.getClientRects();
		else if (u.nodeType == 3) e = Go(u).getClientRects();
		else continue;
		for (let f = 0; f < e.length; f++) {
			let p = e[f];
			if (p.top <= o && p.bottom >= s) {
				o = Math.max(p.bottom, o), s = Math.min(p.top, s);
				let e = p.left > t.left ? p.left - t.left : p.right < t.left ? t.left - p.right : 0;
				if (e < r) {
					n = u, r = e, i = e && n.nodeType == 3 ? {
						left: p.right < t.left ? p.right : p.left,
						top: t.top
					} : t, u.nodeType == 1 && e && (a = d + +(t.left >= (p.left + p.right) / 2));
					continue;
				}
			} else p.top > t.top && !c && p.left <= t.left && p.right >= t.left && (c = u, l = {
				left: Math.max(p.left, Math.min(p.right, t.left)),
				top: p.top
			});
			!n && (t.left >= p.right && t.top >= p.top || t.left >= p.left && t.top >= p.bottom) && (a = d + 1);
		}
	}
	return !n && c && (n = c, i = l, r = 0), n && n.nodeType == 3 ? Is(n, i) : !n || r && n.nodeType == 1 ? {
		node: e,
		offset: a
	} : Fs(n, i);
}
function Is(e, t) {
	let n = e.nodeValue.length, r = document.createRange(), i;
	for (let a = 0; a < n; a++) {
		r.setEnd(e, a + 1), r.setStart(e, a);
		let n = Ws(r, 1);
		if (n.top != n.bottom && Ls(t, n)) {
			i = {
				node: e,
				offset: a + +(t.left >= (n.left + n.right) / 2)
			};
			break;
		}
	}
	return r.detach(), i || {
		node: e,
		offset: 0
	};
}
function Ls(e, t) {
	return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1;
}
function Rs(e, t) {
	let n = e.parentNode;
	return n && /^li$/i.test(n.nodeName) && t.left < e.getBoundingClientRect().left ? n : e;
}
function zs(e, t, n) {
	let { node: r, offset: i } = Fs(t, n), a = -1;
	if (r.nodeType == 1 && !r.firstChild) {
		let e = r.getBoundingClientRect();
		a = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
	}
	return e.docView.posFromDOM(r, i, a);
}
function Bs(e, t, n, r) {
	let i = -1;
	for (let n = t, a = !1; n != e.dom;) {
		let t = e.docView.nearestDesc(n, !0), o;
		if (!t) return null;
		if (t.dom.nodeType == 1 && (t.node.isBlock && t.parent || !t.contentDOM) && ((o = t.dom.getBoundingClientRect()).width || o.height) && (t.node.isBlock && t.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) && (!a && o.left > r.left || o.top > r.top ? i = t.posBefore : (!a && o.right < r.left || o.bottom < r.top) && (i = t.posAfter), a = !0), !t.contentDOM && i < 0 && !t.node.isText)) return (t.node.isBlock ? r.top < (o.top + o.bottom) / 2 : r.left < (o.left + o.right) / 2) ? t.posBefore : t.posAfter;
		n = t.dom.parentNode;
	}
	return i > -1 ? i : e.docView.posFromDOM(t, n, -1);
}
function Vs(e, t, n) {
	let r = e.childNodes.length;
	if (r && n.top < n.bottom) for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (t.top - n.top) / (n.bottom - n.top)) - 2)), a = i;;) {
		let n = e.childNodes[a];
		if (n.nodeType == 1) {
			let e = n.getClientRects();
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (Ls(t, i)) return Vs(n, t, i);
			}
		}
		if ((a = (a + 1) % r) == i) break;
	}
	return e;
}
function Hs(e, t) {
	let n = e.dom.ownerDocument, r, i = 0, a = is(n, t.left, t.top);
	a && ({node: r, offset: i} = a);
	let o = (e.root.elementFromPoint ? e.root : n).elementFromPoint(t.left, t.top), s;
	if (!o || !e.dom.contains(o.nodeType == 1 ? o : o.parentNode)) {
		let n = e.dom.getBoundingClientRect();
		if (!Ls(t, n) || (o = Vs(e.dom, t, n), !o)) return null;
	}
	if (vs) for (let e = o; r && e; e = Uo(e)) e.draggable && (r = void 0);
	if (o = Rs(o, t), r) {
		if (ms && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
			let e = r.childNodes[i], n;
			e.nodeName == "IMG" && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && i++;
		}
		let n;
		Cs && i && r.nodeType == 1 && (n = r.childNodes[i - 1]).nodeType == 1 && n.contentEditable == "false" && n.getBoundingClientRect().top >= t.top && i--, r == e.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && t.top > r.lastChild.getBoundingClientRect().bottom ? s = e.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (s = Bs(e, r, i, t));
	}
	s ??= zs(e, o, t);
	let c = e.docView.nearestDesc(o, !0);
	return {
		pos: s,
		inside: c ? c.posAtStart - c.border : -1
	};
}
function Us(e) {
	return e.top < e.bottom || e.left < e.right;
}
function Ws(e, t) {
	let n = e.getClientRects();
	if (n.length) {
		let e = n[t < 0 ? 0 : n.length - 1];
		if (Us(e)) return e;
	}
	return Array.prototype.find.call(n, Us) || e.getBoundingClientRect();
}
var Gs = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function Ks(e, t, n) {
	let { node: r, offset: i, atom: a } = e.docView.domFromPos(t, n < 0 ? -1 : 1), o = Cs || ms;
	if (r.nodeType == 3) if (o && (Gs.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
		let e = Ws(Go(r, i, i), n);
		if (ms && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
			let t = Ws(Go(r, i - 1, i - 1), -1);
			if (t.top == e.top) {
				let n = Ws(Go(r, i, i + 1), -1);
				if (n.top != e.top) return qs(n, n.left < t.left);
			}
		}
		return e;
	} else {
		let e = i, t = i, a = n < 0 ? 1 : -1;
		return n < 0 && !i ? (t++, a = -1) : n >= 0 && i == r.nodeValue.length ? (e--, a = 1) : n < 0 ? e-- : t++, qs(Ws(Go(r, e, t), a), a < 0);
	}
	if (!e.state.doc.resolve(t - (a || 0)).parent.inlineContent) {
		if (a == null && i && (n < 0 || i == Xo(r))) {
			let e = r.childNodes[i - 1];
			if (e.nodeType == 1) return Js(e.getBoundingClientRect(), !1);
		}
		if (a == null && i < Xo(r)) {
			let e = r.childNodes[i];
			if (e.nodeType == 1) return Js(e.getBoundingClientRect(), !0);
		}
		return Js(r.getBoundingClientRect(), n >= 0);
	}
	if (a == null && i && (n < 0 || i == Xo(r))) {
		let e = r.childNodes[i - 1], t = e.nodeType == 3 ? Go(e, Xo(e) - +!o) : e.nodeType == 1 && (e.nodeName != "BR" || !e.nextSibling) ? e : null;
		if (t) return qs(Ws(t, 1), !1);
	}
	if (a == null && i < Xo(r)) {
		let e = r.childNodes[i];
		for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords;) e = e.nextSibling;
		let t = e ? e.nodeType == 3 ? Go(e, 0, +!o) : e.nodeType == 1 ? e : null : null;
		if (t) return qs(Ws(t, -1), !0);
	}
	return qs(Ws(r.nodeType == 3 ? Go(r) : r, -n), n >= 0);
}
function qs(e, t) {
	if (e.width == 0) return e;
	let n = t ? e.left : e.right;
	return {
		top: e.top,
		bottom: e.bottom,
		left: n,
		right: n
	};
}
function Js(e, t) {
	if (e.height == 0) return e;
	let n = t ? e.top : e.bottom;
	return {
		top: n,
		bottom: n,
		left: e.left,
		right: e.right
	};
}
function Ys(e, t, n) {
	let r = e.state, i = e.root.activeElement;
	r != t && e.updateState(t), i != e.dom && e.focus();
	try {
		return n();
	} finally {
		r != t && e.updateState(r), i != e.dom && i && i.focus();
	}
}
function Xs(e, t, n) {
	let r = t.selection, i = n == "up" ? r.$from : r.$to;
	return Ys(e, t, () => {
		let { node: t } = e.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
		for (;;) {
			let n = e.docView.nearestDesc(t, !0);
			if (!n) break;
			if (n.node.isBlock) {
				t = n.contentDOM || n.dom;
				break;
			}
			t = n.dom.parentNode;
		}
		let r = Ks(e, i.pos, 1);
		for (let e = t.firstChild; e; e = e.nextSibling) {
			let t;
			if (e.nodeType == 1) t = e.getClientRects();
			else if (e.nodeType == 3) t = Go(e, 0, e.nodeValue.length).getClientRects();
			else continue;
			for (let e = 0; e < t.length; e++) {
				let i = t[e];
				if (i.bottom > i.top + 1 && (n == "up" ? r.top - i.top > (i.bottom - r.top) * 2 : i.bottom - r.bottom > (r.bottom - i.top) * 2)) return !1;
			}
		}
		return !0;
	});
}
var Zs = /[\u0590-\u08ac]/;
function Qs(e, t, n) {
	let { $head: r } = t.selection;
	if (!r.parent.isTextblock) return !1;
	let i = r.parentOffset, a = !i, o = i == r.parent.content.size, s = e.domSelection();
	return s ? !Zs.test(r.parent.textContent) || !s.modify ? n == "left" || n == "backward" ? a : o : Ys(e, t, () => {
		let { focusNode: t, focusOffset: i, anchorNode: a, anchorOffset: o } = e.domSelectionRange(), c = s.caretBidiLevel;
		s.modify("move", n, "character");
		let l = r.depth ? e.docView.domAfterPos(r.before()) : e.dom, { focusNode: u, focusOffset: d } = e.domSelectionRange(), f = u && !l.contains(u.nodeType == 1 ? u : u.parentNode) || t == u && i == d;
		try {
			s.collapse(a, o), t && (t != a || i != o) && s.extend && s.extend(t, i);
		} catch {}
		return c != null && (s.caretBidiLevel = c), f;
	}) : r.pos == r.start() || r.pos == r.end();
}
var $s = null, ec = null, tc = !1;
function nc(e, t, n) {
	return $s == t && ec == n ? tc : ($s = t, ec = n, tc = n == "up" || n == "down" ? Xs(e, t, n) : Qs(e, t, n));
}
var rc = 0, ic = 1, ac = 2, oc = 3, sc = class {
	constructor(e, t, n, r) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = r, this.dirty = rc, n.pmViewDesc = this;
	}
	matchesWidget(e) {
		return !1;
	}
	matchesMark(e) {
		return !1;
	}
	matchesNode(e, t, n) {
		return !1;
	}
	matchesHack(e) {
		return !1;
	}
	parseRule() {
		return null;
	}
	stopEvent(e) {
		return !1;
	}
	get size() {
		let e = 0;
		for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
		return e;
	}
	get border() {
		return 0;
	}
	destroy() {
		this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy();
	}
	posBeforeChild(e) {
		for (let t = 0, n = this.posAtStart;; t++) {
			let r = this.children[t];
			if (r == e) return n;
			n += r.size;
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this);
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
	}
	get posAfter() {
		return this.posBefore + this.size;
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border;
	}
	localPosFromDOM(e, t, n) {
		if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) if (n < 0) {
			let n, r;
			if (e == this.contentDOM) n = e.childNodes[t - 1];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				n = e.previousSibling;
			}
			for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.previousSibling;
			return n ? this.posBeforeChild(r) + r.size : this.posAtStart;
		} else {
			let n, r;
			if (e == this.contentDOM) n = e.childNodes[t];
			else {
				for (; e.parentNode != this.contentDOM;) e = e.parentNode;
				n = e.nextSibling;
			}
			for (; n && !((r = n.pmViewDesc) && r.parent == this);) n = n.nextSibling;
			return n ? this.posBeforeChild(r) : this.posAtEnd;
		}
		let r;
		if (e == this.dom && this.contentDOM) r = t > Ho(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) r = e.compareDocumentPosition(this.contentDOM) & 2;
		else if (this.dom.firstChild) {
			if (t == 0) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !1;
					break;
				}
				if (t.previousSibling) break;
			}
			if (r == null && t == e.childNodes.length) for (let t = e;; t = t.parentNode) {
				if (t == this.dom) {
					r = !0;
					break;
				}
				if (t.nextSibling) break;
			}
		}
		return r ?? n > 0 ? this.posAtEnd : this.posAtStart;
	}
	nearestDesc(e, t = !1) {
		for (let n = !0, r = e; r; r = r.parentNode) {
			let i = this.getDesc(r), a;
			if (i && (!t || i.node)) if (n && (a = i.nodeDOM) && !(a.nodeType == 1 ? a.contains(e.nodeType == 1 ? e : e.parentNode) : a == e)) n = !1;
			else return i;
		}
	}
	getDesc(e) {
		let t = e.pmViewDesc;
		for (let e = t; e; e = e.parent) if (e == this) return t;
	}
	posFromDOM(e, t, n) {
		for (let r = e; r; r = r.parentNode) {
			let i = this.getDesc(r);
			if (i) return i.localPosFromDOM(e, t, n);
		}
		return -1;
	}
	descAt(e) {
		for (let t = 0, n = 0; t < this.children.length; t++) {
			let r = this.children[t], i = n + r.size;
			if (n == e && i != n) {
				for (; !r.border && r.children.length;) for (let e = 0; e < r.children.length; e++) {
					let t = r.children[e];
					if (t.size) {
						r = t;
						break;
					}
				}
				return r;
			}
			if (e < i) return r.descAt(e - n - r.border);
			n = i;
		}
	}
	domFromPos(e, t) {
		if (!this.contentDOM) return {
			node: this.dom,
			offset: 0,
			atom: e + 1
		};
		let n = 0, r = 0;
		for (let t = 0; n < this.children.length; n++) {
			let i = this.children[n], a = t + i.size;
			if (a > e || i instanceof mc) {
				r = e - t;
				break;
			}
			t = a;
		}
		if (r) return this.children[n].domFromPos(r - this.children[n].border, t);
		for (let e; n && !(e = this.children[n - 1]).size && e instanceof cc && e.side >= 0; n--);
		if (t <= 0) {
			let e, r = !0;
			for (; e = n ? this.children[n - 1] : null, !(!e || e.dom.parentNode == this.contentDOM); n--, r = !1);
			return e && t && r && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
				node: this.contentDOM,
				offset: e ? Ho(e.dom) + 1 : 0
			};
		} else {
			let e, r = !0;
			for (; e = n < this.children.length ? this.children[n] : null, !(!e || e.dom.parentNode == this.contentDOM); n++, r = !1);
			return e && r && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: e ? Ho(e.dom) : this.contentDOM.childNodes.length
			};
		}
	}
	parseRange(e, t, n = 0) {
		if (this.children.length == 0) return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: 0,
			toOffset: this.contentDOM.childNodes.length
		};
		let r = -1, i = -1;
		for (let a = n, o = 0;; o++) {
			let n = this.children[o], s = a + n.size;
			if (r == -1 && e <= s) {
				let i = a + n.border;
				if (e >= i && t <= s - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM)) return n.parseRange(e, t, i);
				e = a;
				for (let t = o; t > 0; t--) {
					let n = this.children[t - 1];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
						r = Ho(n.dom) + 1;
						break;
					}
					e -= n.size;
				}
				r == -1 && (r = 0);
			}
			if (r > -1 && (s > t || o == this.children.length - 1)) {
				t = s;
				for (let e = o + 1; e < this.children.length; e++) {
					let n = this.children[e];
					if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
						i = Ho(n.dom);
						break;
					}
					t += n.size;
				}
				i == -1 && (i = this.contentDOM.childNodes.length);
				break;
			}
			a = s;
		}
		return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: r,
			toOffset: i
		};
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let t = this.children[e < 0 ? 0 : this.children.length - 1];
		return t.size == 0 || t.emptyChildAt(e);
	}
	domAfterPos(e) {
		let { node: t, offset: n } = this.domFromPos(e, 0);
		if (t.nodeType != 1 || n == t.childNodes.length) throw RangeError("No node after pos " + e);
		return t.childNodes[n];
	}
	setSelection(e, t, n, r = !1) {
		let i = Math.min(e, t), a = Math.max(e, t);
		for (let o = 0, s = 0; o < this.children.length; o++) {
			let c = this.children[o], l = s + c.size;
			if (i > s && a < l) return c.setSelection(e - s - c.border, t - s - c.border, n, r);
			s = l;
		}
		let o = this.domFromPos(e, e ? -1 : 1), s = t == e ? o : this.domFromPos(t, t ? -1 : 1), c = n.root.getSelection(), l = n.domSelectionRange(), u = !1;
		if ((ms || vs) && e == t) {
			let { node: e, offset: t } = o;
			if (e.nodeType == 3) {
				if (u = !!(t && e.nodeValue[t - 1] == "\n"), u && t == e.nodeValue.length) for (let t = e, n; t; t = t.parentNode) {
					if (n = t.nextSibling) {
						n.nodeName == "BR" && (o = s = {
							node: n.parentNode,
							offset: Ho(n) + 1
						});
						break;
					}
					let e = t.pmViewDesc;
					if (e && e.node && e.node.isBlock) break;
				}
			} else {
				let n = e.childNodes[t - 1];
				u = n && (n.nodeName == "BR" || n.contentEditable == "false");
			}
		}
		if (ms && l.focusNode && l.focusNode != s.node && l.focusNode.nodeType == 1) {
			let e = l.focusNode.childNodes[l.focusOffset];
			e && e.contentEditable == "false" && (r = !0);
		}
		if (!(r || u && vs) && qo(o.node, o.offset, l.anchorNode, l.anchorOffset) && qo(s.node, s.offset, l.focusNode, l.focusOffset)) return;
		let d = !1;
		if ((c.extend || e == t) && !(u && ms)) {
			c.collapse(o.node, o.offset);
			try {
				e != t && c.extend(s.node, s.offset), d = !0;
			} catch {}
		}
		if (!d) {
			if (e > t) {
				let e = o;
				o = s, s = e;
			}
			let n = document.createRange();
			n.setEnd(s.node, s.offset), n.setStart(o.node, o.offset), c.removeAllRanges(), c.addRange(n);
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != "selection";
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
	}
	markDirty(e, t) {
		for (let n = 0, r = 0; r < this.children.length; r++) {
			let i = this.children[r], a = n + i.size;
			if (n == a ? e <= a && t >= n : e < a && t > n) {
				let r = n + i.border, o = a - i.border;
				if (e >= r && t <= o) {
					this.dirty = e == n || t == a ? ac : ic, e == r && t == o && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = oc : i.markDirty(e - r, t - r);
					return;
				} else i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? ac : oc;
			}
			n = a;
		}
		this.dirty = ac;
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? ac : ic;
			t.dirty < n && (t.dirty = n);
		}
	}
	get domAtom() {
		return !1;
	}
	get ignoreForCoords() {
		return !1;
	}
	get ignoreForSelection() {
		return !1;
	}
	isText(e) {
		return !1;
	}
}, cc = class extends sc {
	constructor(e, t, n, r) {
		let i, a = t.type.toDOM;
		if (typeof a == "function" && (a = a(n, () => {
			if (!i) return r;
			if (i.parent) return i.parent.posBeforeChild(i);
		})), !t.type.spec.raw) {
			if (a.nodeType != 1) {
				let e = document.createElement("span");
				e.appendChild(a), a = e;
			}
			a.contentEditable = "false", a.classList.add("ProseMirror-widget");
		}
		super(e, [], a, null), this.widget = t, this.widget = t, i = this;
	}
	matchesWidget(e) {
		return this.dirty == rc && e.type.eq(this.widget.type);
	}
	parseRule() {
		return { ignore: !0 };
	}
	stopEvent(e) {
		let t = this.widget.spec.stopEvent;
		return t ? t(e) : !1;
	}
	ignoreMutation(e) {
		return e.type != "selection" || this.widget.spec.ignoreSelection;
	}
	destroy() {
		this.widget.type.destroy(this.dom), super.destroy();
	}
	get domAtom() {
		return !0;
	}
	get ignoreForSelection() {
		return !!this.widget.type.spec.relaxedSide;
	}
	get side() {
		return this.widget.type.side;
	}
}, lc = class extends sc {
	constructor(e, t, n, r) {
		super(e, [], t, null), this.textDOM = n, this.text = r;
	}
	get size() {
		return this.text.length;
	}
	localPosFromDOM(e, t) {
		return e == this.textDOM ? this.posAtStart + t : this.posAtStart + (t ? this.size : 0);
	}
	domFromPos(e) {
		return {
			node: this.textDOM,
			offset: e
		};
	}
	ignoreMutation(e) {
		return e.type === "characterData" && e.target.nodeValue == e.oldValue;
	}
}, uc = class e extends sc {
	constructor(e, t, n, r, i) {
		super(e, [], n, r), this.mark = t, this.spec = i;
	}
	static create(t, n, r, i) {
		let a = i.nodeViews[n.type.name], o = a && a(n, i, r);
		return (!o || !o.dom) && (o = li.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new e(t, n, o.dom, o.contentDOM || o.dom, o);
	}
	parseRule() {
		return this.dirty & oc || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		};
	}
	matchesMark(e) {
		return this.dirty != oc && this.mark.eq(e);
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != rc) {
			let e = this.parent;
			for (; !e.node;) e = e.parent;
			e.dirty < this.dirty && (e.dirty = this.dirty), this.dirty = rc;
		}
	}
	slice(t, n, r) {
		let i = e.create(this.parent, this.mark, !0, r), a = this.children, o = this.size;
		n < o && (a = jc(a, n, o, r)), t > 0 && (a = jc(a, 0, t, r));
		for (let e = 0; e < a.length; e++) a[e].parent = i;
		return i.children = a, i;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
}, dc = class e extends sc {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, [], i, a), this.node = t, this.outerDeco = n, this.innerDeco = r, this.nodeDOM = o;
	}
	static create(t, n, r, i, a, o) {
		let s = a.nodeViews[n.type.name], c, l = s && s(n, a, () => {
			if (!c) return o;
			if (c.parent) return c.parent.posBeforeChild(c);
		}, r, i), u = l && l.dom, d = l && l.contentDOM;
		if (n.isText) {
			if (!u) u = document.createTextNode(n.text);
			else if (u.nodeType != 3) throw RangeError("Text must be rendered as a DOM text node");
		} else if (!u) {
			let e = li.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs);
			({dom: u, contentDOM: d} = e);
		}
		!d && !n.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), n.type.spec.draggable && (u.draggable = !0));
		let f = u;
		return u = Sc(u, r, n), l ? c = new hc(t, n, r, i, u, d || null, f, l, a, o + 1) : n.isText ? new pc(t, n, r, i, u, f, a) : new e(t, n, r, i, u, d || null, f, a, o + 1);
	}
	parseRule() {
		if (this.node.type.spec.reparseInView) return null;
		let e = {
			node: this.node.type.name,
			attrs: this.node.attrs
		};
		if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = () => this.node.content;
		else if (!this.contentLost) e.contentElement = this.contentDOM;
		else {
			for (let t = this.children.length - 1; t >= 0; t--) {
				let n = this.children[t];
				if (this.dom.contains(n.dom.parentNode)) {
					e.contentElement = n.dom.parentNode;
					break;
				}
			}
			e.contentElement || (e.getContent = () => M.empty);
		}
		return e;
	}
	matchesNode(e, t, n) {
		return this.dirty == rc && e.eq(this.node) && Cc(t, this.outerDeco) && n.eq(this.innerDeco);
	}
	get size() {
		return this.node.nodeSize;
	}
	get border() {
		return +!this.node.isLeaf;
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent, r = t, i = e.composing ? this.localCompositionInfo(e, t) : null, a = i && i.pos > -1 ? i : null, o = i && i.pos < 0, s = new Tc(this, a && a.node, e);
		Oc(this.node, this.innerDeco, (t, i, a) => {
			t.spec.marks ? s.syncToMarks(t.spec.marks, n, e, i) : t.type.side >= 0 && !a && s.syncToMarks(i == this.node.childCount ? N.none : this.node.child(i).marks, n, e, i), s.placeWidget(t, e, r);
		}, (t, a, c, l) => {
			s.syncToMarks(t.marks, n, e, l);
			let u;
			s.findNodeMatch(t, a, c, l) || o && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (u = s.findIndexWithChild(i.node)) > -1 && s.updateNodeAt(t, a, c, u, e) || s.updateNextNode(t, a, c, e, l, r) || s.addNode(t, a, c, e, r), r += t.nodeSize;
		}), s.syncToMarks([], n, e, 0), this.node.isTextblock && s.addTextblockHacks(), s.destroyRest(), (s.changed || this.dirty == ac) && (a && this.protectLocalComposition(e, a), gc(this.contentDOM, this.children, e), ys && kc(this.dom));
	}
	localCompositionInfo(e, t) {
		let { from: n, to: r } = e.state.selection;
		if (!(e.state.selection instanceof I) || n < t || r > t + this.node.content.size) return null;
		let i = e.input.compositionNode;
		if (!i || !this.dom.contains(i.parentNode)) return null;
		if (this.node.inlineContent) {
			let e = i.nodeValue, a = Ac(this.node.content, e, n - t, r - t);
			return a < 0 ? null : {
				node: i,
				pos: a,
				text: e
			};
		} else return {
			node: i,
			pos: -1,
			text: ""
		};
	}
	protectLocalComposition(e, { node: t, pos: n, text: r }) {
		if (this.getDesc(t)) return;
		let i = t;
		for (; i.parentNode != this.contentDOM; i = i.parentNode) {
			for (; i.previousSibling;) i.parentNode.removeChild(i.previousSibling);
			for (; i.nextSibling;) i.parentNode.removeChild(i.nextSibling);
			i.pmViewDesc &&= void 0;
		}
		let a = new lc(this, i, t, r);
		e.input.compositionNodes.push(a), this.children = jc(this.children, n, n + r.length, e, a);
	}
	update(e, t, n, r) {
		return this.dirty == oc || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, r), !0);
	}
	updateInner(e, t, n, r) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(r, this.posAtStart), this.dirty = rc;
	}
	updateOuterDeco(e) {
		if (Cc(e, this.outerDeco)) return;
		let t = this.nodeDOM.nodeType != 1, n = this.dom;
		this.dom = bc(this.dom, this.nodeDOM, yc(this.outerDeco, this.node, t), yc(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
	}
	selectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
	}
	deselectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
	}
	get domAtom() {
		return this.node.isAtom;
	}
};
function fc(e, t, n, r, i) {
	Sc(r, t, e);
	let a = new dc(void 0, e, t, n, r, r, r, i, 0);
	return a.contentDOM && a.updateChildren(i, 0), a;
}
var pc = class e extends dc {
	constructor(e, t, n, r, i, a, o) {
		super(e, t, n, r, i, null, a, o, 0);
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return { skip: e || !0 };
	}
	update(e, t, n, r) {
		return this.dirty == oc || this.dirty != rc && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != rc || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, r.trackWrites == this.nodeDOM && (r.trackWrites = null)), this.node = e, this.dirty = rc, !0);
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let t = this.nodeDOM; t; t = t.parentNode) if (t == e) return !0;
		return !1;
	}
	domFromPos(e) {
		return {
			node: this.nodeDOM,
			offset: e
		};
	}
	localPosFromDOM(e, t, n) {
		return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n);
	}
	ignoreMutation(e) {
		return e.type != "characterData" && e.type != "selection";
	}
	slice(t, n, r) {
		let i = this.node.cut(t, n), a = document.createTextNode(i.text);
		return new e(this.parent, i, this.outerDeco, this.innerDeco, a, a, r);
	}
	markDirty(e, t) {
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = oc);
	}
	get domAtom() {
		return !1;
	}
	isText(e) {
		return this.node.text == e;
	}
}, mc = class extends sc {
	parseRule() {
		return { ignore: !0 };
	}
	matchesHack(e) {
		return this.dirty == rc && this.dom.nodeName == e;
	}
	get domAtom() {
		return !0;
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG";
	}
}, hc = class extends dc {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		super(e, t, n, r, i, a, o, c, l), this.spec = s;
	}
	update(e, t, n, r) {
		if (this.dirty == oc) return !1;
		if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
			let i = this.spec.update(e, t, n);
			return i && this.updateInner(e, t, n, r), i;
		} else if (!this.contentDOM && !e.isLeaf) return !1;
		else return super.update(e, t, n, r);
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
	}
	setSelection(e, t, n, r) {
		this.spec.setSelection ? this.spec.setSelection(e, t, n.root) : super.setSelection(e, t, n, r);
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy();
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
	}
};
function gc(e, t, n) {
	let r = e.firstChild, i = !1;
	for (let a = 0; a < t.length; a++) {
		let o = t[a], s = o.dom;
		if (s.parentNode == e) {
			for (; s != r;) r = wc(r), i = !0;
			r = r.nextSibling;
		} else i = !0, e.insertBefore(s, r);
		if (o instanceof uc) {
			let t = r ? r.previousSibling : e.lastChild;
			gc(o.contentDOM, o.children, n), r = t ? t.nextSibling : e.firstChild;
		}
	}
	for (; r;) r = wc(r), i = !0;
	i && n.trackWrites == e && (n.trackWrites = null);
}
var _c = function(e) {
	e && (this.nodeName = e);
};
_c.prototype = Object.create(null);
var vc = [new _c()];
function yc(e, t, n) {
	if (e.length == 0) return vc;
	let r = n ? vc[0] : new _c(), i = [r];
	for (let a = 0; a < e.length; a++) {
		let o = e[a].type.attrs;
		if (o) {
			o.nodeName && i.push(r = new _c(o.nodeName));
			for (let e in o) {
				let a = o[e];
				a != null && (n && i.length == 1 && i.push(r = new _c(t.isInline ? "span" : "div")), e == "class" ? r.class = (r.class ? r.class + " " : "") + a : e == "style" ? r.style = (r.style ? r.style + ";" : "") + a : e != "nodeName" && (r[e] = a));
			}
		}
	}
	return i;
}
function bc(e, t, n, r) {
	if (n == vc && r == vc) return t;
	let i = t;
	for (let t = 0; t < r.length; t++) {
		let a = r[t], o = n[t];
		if (t) {
			let t;
			o && o.nodeName == a.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == a.nodeName ? i = t : (t = document.createElement(a.nodeName), t.pmIsDeco = !0, t.appendChild(i), o = vc[0], i = t);
		}
		xc(i, o || vc[0], a);
	}
	return i;
}
function xc(e, t, n) {
	for (let r in t) r != "class" && r != "style" && r != "nodeName" && !(r in n) && e.removeAttribute(r);
	for (let r in n) r != "class" && r != "style" && r != "nodeName" && n[r] != t[r] && e.setAttribute(r, n[r]);
	if (t.class != n.class) {
		let r = t.class ? t.class.split(" ").filter(Boolean) : [], i = n.class ? n.class.split(" ").filter(Boolean) : [];
		for (let t = 0; t < r.length; t++) i.indexOf(r[t]) == -1 && e.classList.remove(r[t]);
		for (let t = 0; t < i.length; t++) r.indexOf(i[t]) == -1 && e.classList.add(i[t]);
		e.classList.length == 0 && e.removeAttribute("class");
	}
	if (t.style != n.style) {
		if (t.style) {
			let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, r;
			for (; r = n.exec(t.style);) e.style.removeProperty(r[1]);
		}
		n.style && (e.style.cssText += n.style);
	}
}
function Sc(e, t, n) {
	return bc(e, e, vc, yc(t, n, e.nodeType != 1));
}
function Cc(e, t) {
	if (e.length != t.length) return !1;
	for (let n = 0; n < e.length; n++) if (!e[n].type.eq(t[n].type)) return !1;
	return !0;
}
function wc(e) {
	let t = e.nextSibling;
	return e.parentNode.removeChild(e), t;
}
var Tc = class {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Ec(e.node.content, e);
	}
	destroyBetween(e, t) {
		if (e != t) {
			for (let n = e; n < t; n++) this.top.children[n].destroy();
			this.top.children.splice(e, t - e), this.changed = !0;
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length);
	}
	syncToMarks(e, t, n, r) {
		let i = 0, a = this.stack.length >> 1, o = Math.min(a, e.length);
		for (; i < o && (i == a - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;) i++;
		for (; i < a;) this.destroyRest(), this.top.dirty = rc, this.index = this.stack.pop(), this.top = this.stack.pop(), a--;
		for (; a < e.length;) {
			this.stack.push(this.top, this.index + 1);
			let i = -1, o = this.top.children.length;
			r < this.preMatch.index && (o = Math.min(this.index + 3, o));
			for (let t = this.index; t < o; t++) {
				let n = this.top.children[t];
				if (n.matchesMark(e[a]) && !this.isLocked(n.dom)) {
					i = t;
					break;
				}
			}
			if (i > -1) i > this.index && (this.changed = !0, this.destroyBetween(this.index, i)), this.top = this.top.children[this.index];
			else {
				let r = uc.create(this.top, e[a], t, n);
				this.top.children.splice(this.index, 0, r), this.top = r, this.changed = !0;
			}
			this.index = 0, a++;
		}
	}
	findNodeMatch(e, t, n, r) {
		let i = -1, a;
		if (r >= this.preMatch.index && (a = this.preMatch.matches[r - this.preMatch.index]).parent == this.top && a.matchesNode(e, t, n)) i = this.top.children.indexOf(a, this.index);
		else for (let r = this.index, a = Math.min(this.top.children.length, r + 5); r < a; r++) {
			let a = this.top.children[r];
			if (a.matchesNode(e, t, n) && !this.preMatch.matched.has(a)) {
				i = r;
				break;
			}
		}
		return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
	}
	updateNodeAt(e, t, n, r, i) {
		let a = this.top.children[r];
		return a.dirty == oc && a.dom == a.contentDOM && (a.dirty = ac), a.update(e, t, n, i) ? (this.destroyBetween(this.index, r), this.index++, !0) : !1;
	}
	findIndexWithChild(e) {
		for (;;) {
			let t = e.parentNode;
			if (!t) return -1;
			if (t == this.top.contentDOM) {
				let t = e.pmViewDesc;
				if (t) {
					for (let e = this.index; e < this.top.children.length; e++) if (this.top.children[e] == t) return e;
				}
				return -1;
			}
			e = t;
		}
	}
	updateNextNode(e, t, n, r, i, a) {
		for (let o = this.index; o < this.top.children.length; o++) {
			let s = this.top.children[o];
			if (s instanceof dc) {
				let c = this.preMatch.matched.get(s);
				if (c != null && c != i) return !1;
				let l = s.dom, u, d = this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && s.dirty != oc && Cc(t, s.outerDeco));
				if (!d && s.update(e, t, n, r)) return this.destroyBetween(this.index, o), s.dom != l && (this.changed = !0), this.index++, !0;
				if (!d && (u = this.recreateWrapper(s, e, t, n, r, a))) return this.destroyBetween(this.index, o), this.top.children[this.index] = u, u.contentDOM && (u.dirty = ac, u.updateChildren(r, a + 1), u.dirty = rc), this.changed = !0, this.index++, !0;
				break;
			}
		}
		return !1;
	}
	recreateWrapper(e, t, n, r, i, a) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Cc(n, e.outerDeco) || !r.eq(e.innerDeco)) return null;
		let o = dc.create(this.top, t, n, r, i, a);
		if (o.contentDOM) {
			o.children = e.children, e.children = [];
			for (let e of o.children) e.parent = o;
		}
		return e.destroy(), o;
	}
	addNode(e, t, n, r, i) {
		let a = dc.create(this.top, e, t, n, r, i);
		a.contentDOM && a.updateChildren(r, i + 1), this.top.children.splice(this.index++, 0, a), this.changed = !0;
	}
	placeWidget(e, t, n) {
		let r = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (r && r.matchesWidget(e) && (e == r.widget || !r.widget.type.toDOM.parentNode)) this.index++;
		else {
			let r = new cc(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, r), this.changed = !0;
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1], t = this.top;
		for (; e instanceof uc;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof pc) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((vs || gs) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let r = new mc(this.top, [], n, null);
			t == this.top ? t.children.splice(this.index++, 0, r) : t.children.push(r), this.changed = !0;
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
	}
};
function Ec(e, t) {
	let n = t, r = n.children.length, i = e.childCount, a = /* @__PURE__ */ new Map(), o = [];
	outer: for (; i > 0;) {
		let s;
		for (;;) if (r) {
			let e = n.children[r - 1];
			if (e instanceof uc) n = e, r = e.children.length;
			else {
				s = e, r--;
				break;
			}
		} else if (n == t) break outer;
		else r = n.parent.children.indexOf(n), n = n.parent;
		let c = s.node;
		if (c) {
			if (c != e.child(i - 1)) break;
			--i, a.set(s, i), o.push(s);
		}
	}
	return {
		index: i,
		matched: a,
		matches: o.reverse()
	};
}
function Dc(e, t) {
	return e.type.side - t.type.side;
}
function Oc(e, t, n, r) {
	let i = t.locals(e), a = 0;
	if (i.length == 0) {
		for (let n = 0; n < e.childCount; n++) {
			let o = e.child(n);
			r(o, i, t.forChild(a, o), n), a += o.nodeSize;
		}
		return;
	}
	let o = 0, s = [], c = null;
	for (let l = 0;;) {
		let u, d;
		for (; o < i.length && i[o].to == a;) {
			let e = i[o++];
			e.widget && (u ? (d ||= [u]).push(e) : u = e);
		}
		if (u) if (d) {
			d.sort(Dc);
			for (let e = 0; e < d.length; e++) n(d[e], l, !!c);
		} else n(u, l, !!c);
		let f, p;
		if (c) p = -1, f = c, c = null;
		else if (l < e.childCount) p = l, f = e.child(l++);
		else break;
		for (let e = 0; e < s.length; e++) s[e].to <= a && s.splice(e--, 1);
		for (; o < i.length && i[o].from <= a && i[o].to > a;) s.push(i[o++]);
		let m = a + f.nodeSize;
		if (f.isText) {
			let e = m;
			o < i.length && i[o].from < e && (e = i[o].from);
			for (let t = 0; t < s.length; t++) s[t].to < e && (e = s[t].to);
			e < m && (c = f.cut(e - a), f = f.cut(0, e - a), m = e, p = -1);
		} else for (; o < i.length && i[o].to < m;) o++;
		let h = f.isInline && !f.isLeaf ? s.filter((e) => !e.inline) : s.slice();
		r(f, h, t.forChild(a, f), p), a = m;
	}
}
function kc(e) {
	if (e.nodeName == "UL" || e.nodeName == "OL") {
		let t = e.style.cssText;
		e.style.cssText = t + "; list-style: square !important", window.getComputedStyle(e).listStyle, e.style.cssText = t;
	}
}
function Ac(e, t, n, r) {
	for (let i = 0, a = 0; i < e.childCount && a <= r;) {
		let o = e.child(i++), s = a;
		if (a += o.nodeSize, !o.isText) continue;
		let c = o.text;
		for (; i < e.childCount;) {
			let t = e.child(i++);
			if (a += t.nodeSize, !t.isText) break;
			c += t.text;
		}
		if (a >= n) {
			if (a >= r && c.slice(r - t.length - s, r - s) == t) return r - t.length;
			let e = s < r ? c.lastIndexOf(t, r - s - 1) : -1;
			if (e >= 0 && e + t.length + s >= n) return s + e;
			if (n == r && c.length >= r + t.length - s && c.slice(r - s, r - s + t.length) == t) return r;
		}
	}
	return -1;
}
function jc(e, t, n, r, i) {
	let a = [];
	for (let o = 0, s = 0; o < e.length; o++) {
		let c = e[o], l = s, u = s += c.size;
		l >= n || u <= t ? a.push(c) : (l < t && a.push(c.slice(0, t - l, r)), i &&= (a.push(i), void 0), u > n && a.push(c.slice(n - l, c.size, r)));
	}
	return a;
}
function Mc(e, t = null) {
	let n = e.domSelectionRange(), r = e.state.doc;
	if (!n.focusNode) return null;
	let i = e.docView.nearestDesc(n.focusNode), a = i && i.size == 0, o = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
	if (o < 0) return null;
	let s = r.resolve(o), c, l;
	if (ts(n)) {
		for (c = o; i && !i.node;) i = i.parent;
		let e = i.node;
		if (i && e.isAtom && L.isSelectable(e) && i.parent && !(e.isInline && $o(n.focusNode, n.focusOffset, i.dom))) {
			let e = i.posBefore;
			l = new L(o == e ? s : r.resolve(e));
		}
	} else {
		if (n instanceof e.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
			let t = o, i = o;
			for (let r = 0; r < n.rangeCount; r++) {
				let a = n.getRangeAt(r);
				t = Math.min(t, e.docView.posFromDOM(a.startContainer, a.startOffset, 1)), i = Math.max(i, e.docView.posFromDOM(a.endContainer, a.endOffset, -1));
			}
			if (t < 0) return null;
			[c, o] = i == e.state.selection.anchor ? [i, t] : [t, i], s = r.resolve(o);
		} else c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
		if (c < 0) return null;
	}
	let u = r.resolve(c);
	if (!l) {
		let n = t == "pointer" || e.state.selection.head < s.pos && !a ? 1 : -1;
		l = Uc(e, u, s, n);
	}
	return l;
}
function Nc(e) {
	return e.editable ? e.hasFocus() : Gc(e) && document.activeElement && document.activeElement.contains(e.dom);
}
function Pc(e, t = !1) {
	let n = e.state.selection;
	if (Vc(e, n), !Nc(e)) return;
	let r = e.input.mouseDown;
	if (!t && gs && r) {
		let t = e.domSelectionRange(), n = e.domObserver.currentSelection;
		if (t.anchorNode && n.anchorNode && qo(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset) && r.delaySelUpdate()) {
			e.domObserver.setCurSelection();
			return;
		}
	}
	if (e.domObserver.disconnectSelection(), e.cursorWrapper) Bc(e);
	else {
		let { anchor: r, head: i } = n, a, o;
		Fc && !(n instanceof I) && (n.$from.parent.inlineContent || (a = Ic(e, n.from)), !n.empty && !n.$from.parent.inlineContent && (o = Ic(e, n.to))), e.docView.setSelection(r, i, e, t), Fc && (a && Rc(a), o && Rc(o)), n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && zc(e));
	}
	e.domObserver.setCurSelection(), e.domObserver.connectSelection();
}
var Fc = vs || gs && _s < 63;
function Ic(e, t) {
	let { node: n, offset: r } = e.docView.domFromPos(t, 0), i = r < n.childNodes.length ? n.childNodes[r] : null, a = r ? n.childNodes[r - 1] : null;
	if (vs && i && i.contentEditable == "false") return Lc(i);
	if ((!i || i.contentEditable == "false") && (!a || a.contentEditable == "false")) {
		if (i) return Lc(i);
		if (a) return Lc(a);
	}
}
function Lc(e) {
	return e.contentEditable = "true", vs && e.draggable && (e.draggable = !1, e.wasDraggable = !0), e;
}
function Rc(e) {
	e.contentEditable = "false", e.wasDraggable &&= (e.draggable = !0, null);
}
function zc(e) {
	let t = e.dom.ownerDocument;
	t.removeEventListener("selectionchange", e.input.hideSelectionGuard);
	let n = e.domSelectionRange(), r = n.anchorNode, i = n.anchorOffset;
	t.addEventListener("selectionchange", e.input.hideSelectionGuard = () => {
		(n.anchorNode != r || n.anchorOffset != i) && (t.removeEventListener("selectionchange", e.input.hideSelectionGuard), setTimeout(() => {
			(!Nc(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection");
		}, 20));
	});
}
function Bc(e) {
	let t = e.domSelection();
	if (!t) return;
	let n = e.cursorWrapper.dom, r = n.nodeName == "IMG";
	r ? t.collapse(n.parentNode, Ho(n) + 1) : t.collapse(n, 0), !r && !e.state.selection.visible && fs && ps <= 11 && (n.disabled = !0, n.disabled = !1);
}
function Vc(e, t) {
	if (t instanceof L) {
		let n = e.docView.descAt(t.from);
		n != e.lastSelectedViewDesc && (Hc(e), n && n.selectNode(), e.lastSelectedViewDesc = n);
	} else Hc(e);
}
function Hc(e) {
	e.lastSelectedViewDesc &&= (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(), void 0);
}
function Uc(e, t, n, r) {
	return e.someProp("createSelectionBetween", (r) => r(e, t, n)) || I.between(t, n, r);
}
function Wc(e) {
	return e.editable && !e.hasFocus() ? !1 : Gc(e);
}
function Gc(e) {
	let t = e.domSelectionRange();
	if (!t.anchorNode) return !1;
	try {
		return e.dom.contains(t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode));
	} catch {
		return !1;
	}
}
function Kc(e) {
	let t = e.docView.domFromPos(e.state.selection.anchor, 0), n = e.domSelectionRange();
	return qo(t.node, t.offset, n.anchorNode, n.anchorOffset);
}
function qc(e, t) {
	let { $anchor: n, $head: r } = e.selection, i = t > 0 ? n.max(r) : n.min(r), a = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
	return a && F.findFrom(a, t);
}
function Jc(e, t) {
	return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
}
function Yc(e, t, n) {
	let r = e.state.selection;
	if (r instanceof I) {
		if (n.indexOf("s") > -1) {
			let { $head: n } = r, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
			if (!i || i.isText || !i.isLeaf) return !1;
			let a = e.state.doc.resolve(n.pos + i.nodeSize * (t < 0 ? -1 : 1));
			return Jc(e, new I(r.$anchor, a));
		} else if (!r.empty) return !1;
		else if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
			let n = qc(e.state, t);
			return n && n instanceof L ? Jc(e, n) : !1;
		} else if (!(bs && n.indexOf("m") > -1)) {
			let n = r.$head, i = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, a;
			if (!i || i.isText) return !1;
			let o = t < 0 ? n.pos - i.nodeSize : n.pos;
			return i.isAtom || (a = e.docView.descAt(o)) && !a.contentDOM ? L.isSelectable(i) ? Jc(e, new L(t < 0 ? e.state.doc.resolve(n.pos - i.nodeSize) : n)) : Cs ? Jc(e, new I(e.state.doc.resolve(t < 0 ? o : o + i.nodeSize))) : !1 : !1;
		}
	} else if (r instanceof L && r.node.isInline) return Jc(e, new I(t > 0 ? r.$to : r.$from));
	else {
		let n = qc(e.state, t);
		return n ? Jc(e, n) : !1;
	}
}
function Xc(e) {
	return e.nodeType == 3 ? e.nodeValue.length : e.childNodes.length;
}
function Zc(e, t) {
	let n = e.pmViewDesc;
	return n && n.size == 0 && (t < 0 || e.nextSibling || e.nodeName != "BR");
}
function Qc(e, t) {
	return t < 0 ? $c(e) : el(e);
}
function $c(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i, a, o = !1;
	for (ms && n.nodeType == 1 && r < Xc(n) && Zc(n.childNodes[r], -1) && (o = !0);;) if (r > 0) {
		if (n.nodeType != 1) break;
		{
			let e = n.childNodes[r - 1];
			if (Zc(e, -1)) i = n, a = --r;
			else if (e.nodeType == 3) n = e, r = n.nodeValue.length;
			else break;
		}
	} else if (tl(n)) break;
	else {
		let t = n.previousSibling;
		for (; t && Zc(t, -1);) i = n.parentNode, a = Ho(t), t = t.previousSibling;
		if (t) n = t, r = Xc(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = 0;
		}
	}
	o ? il(e, n, r) : i && il(e, i, a);
}
function el(e) {
	let t = e.domSelectionRange(), n = t.focusNode, r = t.focusOffset;
	if (!n) return;
	let i = Xc(n), a, o;
	for (;;) if (r < i) {
		if (n.nodeType != 1) break;
		let e = n.childNodes[r];
		if (Zc(e, 1)) a = n, o = ++r;
		else break;
	} else if (tl(n)) break;
	else {
		let t = n.nextSibling;
		for (; t && Zc(t, 1);) a = t.parentNode, o = Ho(t) + 1, t = t.nextSibling;
		if (t) n = t, r = 0, i = Xc(n);
		else {
			if (n = n.parentNode, n == e.dom) break;
			r = i = 0;
		}
	}
	a && il(e, a, o);
}
function tl(e) {
	let t = e.pmViewDesc;
	return t && t.node && t.node.isBlock;
}
function nl(e, t) {
	for (; e && t == e.childNodes.length && !es(e);) t = Ho(e) + 1, e = e.parentNode;
	for (; e && t < e.childNodes.length;) {
		let n = e.childNodes[t];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == "false") break;
		e = n, t = 0;
	}
}
function rl(e, t) {
	for (; e && !t && !es(e);) t = Ho(e), e = e.parentNode;
	for (; e && t;) {
		let n = e.childNodes[t - 1];
		if (n.nodeType == 3) return n;
		if (n.nodeType == 1 && n.contentEditable == "false") break;
		e = n, t = e.childNodes.length;
	}
}
function il(e, t, n) {
	if (t.nodeType != 3) {
		let e, r;
		(r = nl(t, n)) ? (t = r, n = 0) : (e = rl(t, n)) && (t = e, n = e.nodeValue.length);
	}
	let r = e.domSelection();
	if (!r) return;
	if (ts(r)) {
		let e = document.createRange();
		e.setEnd(t, n), e.setStart(t, n), r.removeAllRanges(), r.addRange(e);
	} else r.extend && r.extend(t, n);
	e.domObserver.setCurSelection();
	let { state: i } = e;
	setTimeout(() => {
		e.state == i && Pc(e);
	}, 50);
}
function al(e, t) {
	let n = e.state.doc.resolve(t);
	if (!(gs || xs) && n.parent.inlineContent) {
		let r = e.coordsAtPos(t);
		if (t > n.start()) {
			let n = e.coordsAtPos(t - 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left < r.left ? "ltr" : "rtl";
		}
		if (t < n.end()) {
			let n = e.coordsAtPos(t + 1), i = (n.top + n.bottom) / 2;
			if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) return n.left > r.left ? "ltr" : "rtl";
		}
	}
	return getComputedStyle(e.dom).direction == "rtl" ? "rtl" : "ltr";
}
function ol(e, t, n) {
	let r = e.state.selection;
	if (r instanceof I && !r.empty || n.indexOf("s") > -1 || bs && n.indexOf("m") > -1) return !1;
	let { $from: i, $to: a } = r;
	if (!i.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
		let n = qc(e.state, t);
		if (n && n instanceof L) return Jc(e, n);
	}
	if (!i.parent.inlineContent) {
		let n = t < 0 ? i : a, o = r instanceof Fa ? F.near(n, t) : F.findFrom(n, t);
		return o ? Jc(e, o) : !1;
	}
	return !1;
}
function sl(e, t) {
	if (!(e.state.selection instanceof I)) return !0;
	let { $head: n, $anchor: r, empty: i } = e.state.selection;
	if (!n.sameParent(r)) return !0;
	if (!i) return !1;
	if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
	let a = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
	if (a && !a.isText) {
		let r = e.state.tr;
		return t < 0 ? r.delete(n.pos - a.nodeSize, n.pos) : r.delete(n.pos, n.pos + a.nodeSize), e.dispatch(r), !0;
	}
	return !1;
}
function cl(e, t, n) {
	e.domObserver.stop(), t.contentEditable = n, e.domObserver.start();
}
function ll(e) {
	if (!vs || e.state.selection.$head.parentOffset > 0) return !1;
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (t && t.nodeType == 1 && n == 0 && t.firstChild && t.firstChild.contentEditable == "false") {
		let n = t.firstChild;
		cl(e, n, "true"), setTimeout(() => cl(e, n, "false"), 20);
	}
	return !1;
}
function ul(e) {
	let t = "";
	return e.ctrlKey && (t += "c"), e.metaKey && (t += "m"), e.altKey && (t += "a"), e.shiftKey && (t += "s"), t;
}
function dl(e, t) {
	let n = t.keyCode, r = ul(t);
	if (n == 8 || bs && n == 72 && r == "c") return sl(e, -1) || Qc(e, -1);
	if (n == 46 && !t.shiftKey || bs && n == 68 && r == "c") return sl(e, 1) || Qc(e, 1);
	if (n == 13 || n == 27) return !0;
	if (n == 37 || bs && n == 66 && r == "c") {
		let t = n == 37 ? al(e, e.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return Yc(e, t, r) || Qc(e, t);
	} else if (n == 39 || bs && n == 70 && r == "c") {
		let t = n == 39 ? al(e, e.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return Yc(e, t, r) || Qc(e, t);
	} else if (n == 38 || bs && n == 80 && r == "c") return ol(e, -1, r) || Qc(e, -1);
	else if (n == 40 || bs && n == 78 && r == "c") return ll(e) || ol(e, 1, r) || Qc(e, 1);
	else if (r == (bs ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90)) return !0;
	return !1;
}
function fl(e, t) {
	e.someProp("transformCopied", (n) => {
		t = n(t, e);
	});
	let n = [], { content: r, openStart: i, openEnd: a } = t;
	for (; i > 1 && a > 1 && r.childCount == 1 && r.firstChild.childCount == 1;) {
		i--, a--;
		let e = r.firstChild;
		n.push(e.type.name, e.attrs == e.type.defaultAttrs ? null : e.attrs), r = e.content;
	}
	let o = e.someProp("clipboardSerializer") || li.fromSchema(e.state.schema), s = Cl(), c = s.createElement("div");
	c.appendChild(o.serializeFragment(r, { document: s }));
	let l = c.firstChild, u, d = 0;
	for (; l && l.nodeType == 1 && (u = xl[l.nodeName.toLowerCase()]);) {
		for (let e = u.length - 1; e >= 0; e--) {
			let t = s.createElement(u[e]);
			for (; c.firstChild;) t.appendChild(c.firstChild);
			c.appendChild(t), d++;
		}
		l = c.firstChild;
	}
	return l && l.nodeType == 1 && l.setAttribute("data-pm-slice", `${i} ${a}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`), {
		dom: c,
		text: e.someProp("clipboardTextSerializer", (n) => n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n"),
		slice: t
	};
}
function pl(e, t, n, r, i) {
	let a = i.parent.type.spec.code, o, s;
	if (!n && !t) return null;
	let c = !!t && (r || a || !n);
	if (c) {
		if (e.someProp("transformPastedText", (n) => {
			t = n(t, a || r, e);
		}), a) return s = new P(M.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0), e.someProp("transformPasted", (t) => {
			s = t(s, e, !0);
		}), s;
		let n = e.someProp("clipboardTextParser", (n) => n(t, i, r, e));
		if (n) s = n;
		else {
			let n = i.marks(), { schema: r } = e.state, a = li.fromSchema(r);
			o = document.createElement("div"), t.split(/(?:\r\n?|\n)+/).forEach((e) => {
				let t = o.appendChild(document.createElement("p"));
				e && t.appendChild(a.serializeNode(r.text(e, n)));
			});
		}
	} else e.someProp("transformPastedHTML", (t) => {
		n = t(n, e);
	}), o = El(n), Cs && Dl(o);
	let l = o && o.querySelector("[data-pm-slice]"), u = l && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute("data-pm-slice") || "");
	if (u && u[3]) for (let e = +u[3]; e > 0; e--) {
		let e = o.firstChild;
		for (; e && e.nodeType != 1;) e = e.nextSibling;
		if (!e) break;
		o = e;
	}
	if (s ||= (e.someProp("clipboardParser") || e.someProp("domParser") || Yr.fromSchema(e.state.schema)).parseSlice(o, {
		preserveWhitespace: !!(c || u),
		context: i,
		ruleFromNode(e) {
			return e.nodeName == "BR" && !e.nextSibling && e.parentNode && !ml.test(e.parentNode.nodeName) ? { ignore: !0 } : null;
		}
	}), u) s = Ol(bl(s, +u[1], +u[2]), u[4]);
	else if (s = P.maxOpen(hl(s.content, i), !0), s.openStart || s.openEnd) {
		let e = 0, t = 0;
		for (let t = s.content.firstChild; e < s.openStart && !t.type.spec.isolating; e++, t = t.firstChild);
		for (let e = s.content.lastChild; t < s.openEnd && !e.type.spec.isolating; t++, e = e.lastChild);
		s = bl(s, e, t);
	}
	return e.someProp("transformPasted", (t) => {
		s = t(s, e, c);
	}), s;
}
var ml = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function hl(e, t) {
	if (e.childCount < 2) return e;
	for (let n = t.depth; n >= 0; n--) {
		let r = t.node(n).contentMatchAt(t.index(n)), i, a = [];
		if (e.forEach((e) => {
			if (!a) return;
			let t = r.findWrapping(e.type), n;
			if (!t) return a = null;
			if (n = a.length && i.length && _l(t, i, e, a[a.length - 1], 0)) a[a.length - 1] = n;
			else {
				a.length && (a[a.length - 1] = vl(a[a.length - 1], i.length));
				let n = gl(e, t);
				a.push(n), r = r.matchType(n.type), i = t;
			}
		}), a) return M.from(a);
	}
	return e;
}
function gl(e, t, n = 0) {
	for (let r = t.length - 1; r >= n; r--) e = t[r].create(null, M.from(e));
	return e;
}
function _l(e, t, n, r, i) {
	if (i < e.length && i < t.length && e[i] == t[i]) {
		let a = _l(e, t, n, r.lastChild, i + 1);
		if (a) return r.copy(r.content.replaceChild(r.childCount - 1, a));
		if (r.contentMatchAt(r.childCount).matchType(i == e.length - 1 ? n.type : e[i + 1])) return r.copy(r.content.append(M.from(gl(n, e, i + 1))));
	}
}
function vl(e, t) {
	if (t == 0) return e;
	let n = e.content.replaceChild(e.childCount - 1, vl(e.lastChild, t - 1)), r = e.contentMatchAt(e.childCount).fillBefore(M.empty, !0);
	return e.copy(n.append(r));
}
function yl(e, t, n, r, i, a) {
	let o = t < 0 ? e.firstChild : e.lastChild, s = o.content;
	return e.childCount > 1 && (a = 0), i < r - 1 && (s = yl(s, t, n, r, i + 1, a)), i >= n && (s = t < 0 ? o.contentMatchAt(0).fillBefore(s, a <= i).append(s) : s.append(o.contentMatchAt(o.childCount).fillBefore(M.empty, !0))), e.replaceChild(t < 0 ? 0 : e.childCount - 1, o.copy(s));
}
function bl(e, t, n) {
	return t < e.openStart && (e = new P(yl(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd)), n < e.openEnd && (e = new P(yl(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n)), e;
}
var xl = {
	thead: ["table"],
	tbody: ["table"],
	tfoot: ["table"],
	caption: ["table"],
	colgroup: ["table"],
	col: ["table", "colgroup"],
	tr: ["table", "tbody"],
	td: [
		"table",
		"tbody",
		"tr"
	],
	th: [
		"table",
		"tbody",
		"tr"
	]
}, Sl = null;
function Cl() {
	return Sl ||= document.implementation.createHTMLDocument("title");
}
var wl = null;
function Tl(e) {
	let t = window.trustedTypes;
	return t ? (wl ||= t.defaultPolicy || t.createPolicy("ProseMirrorClipboard", { createHTML: (e) => e }), wl.createHTML(e)) : e;
}
function El(e) {
	let t = /^(\s*<meta [^>]*>)*/.exec(e);
	t && (e = e.slice(t[0].length));
	let n = Cl().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(e), i;
	if ((i = r && xl[r[1].toLowerCase()]) && (e = i.map((e) => "<" + e + ">").join("") + e + i.map((e) => "</" + e + ">").reverse().join("")), n.innerHTML = Tl(e), i) for (let e = 0; e < i.length; e++) n = n.querySelector(i[e]) || n;
	return n;
}
function Dl(e) {
	let t = e.querySelectorAll(gs ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
	}
}
function Ol(e, t) {
	if (!e.size) return e;
	let n = e.content.firstChild.type.schema, r;
	try {
		r = JSON.parse(t);
	} catch {
		return e;
	}
	let { content: i, openStart: a, openEnd: o } = e;
	for (let e = r.length - 2; e >= 0; e -= 2) {
		let t = n.nodes[r[e]];
		if (!t || t.hasRequiredAttrs()) break;
		i = M.from(t.create(r[e + 1], i)), a++, o++;
	}
	return new P(i, a, o);
}
var kl = {}, Al = {}, jl = {
	touchstart: !0,
	touchmove: !0
}, Ml = class {
	constructor() {
		this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
			time: 0,
			x: 0,
			y: 0,
			type: "",
			button: 0
		}, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null;
	}
};
function Nl(e) {
	for (let t in kl) {
		let n = kl[t];
		e.dom.addEventListener(t, e.input.eventHandlers[t] = (t) => {
			Rl(e, t) && !Ll(e, t) && (e.editable || !(t.type in Al)) && n(e, t);
		}, jl[t] ? { passive: !0 } : void 0);
	}
	vs && e.dom.addEventListener("input", () => null), Il(e);
}
function Pl(e, t) {
	e.input.lastSelectionOrigin = t, e.input.lastSelectionTime = Date.now();
}
function Fl(e) {
	e.input.mouseDown && e.input.mouseDown.done(), e.domObserver.stop();
	for (let t in e.input.eventHandlers) e.dom.removeEventListener(t, e.input.eventHandlers[t]);
	clearTimeout(e.input.composingTimeout), clearTimeout(e.input.lastIOSEnterFallbackTimeout);
}
function Il(e) {
	e.someProp("handleDOMEvents", (t) => {
		for (let n in t) e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = (t) => Ll(e, t));
	});
}
function Ll(e, t) {
	return e.someProp("handleDOMEvents", (n) => {
		let r = n[t.type];
		return r ? r(e, t) || t.defaultPrevented : !1;
	});
}
function Rl(e, t) {
	if (!t.bubbles) return !0;
	if (t.defaultPrevented) return !1;
	for (let n = t.target; n != e.dom; n = n.parentNode) if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(t)) return !1;
	return !0;
}
function zl(e, t) {
	!Ll(e, t) && kl[t.type] && (e.editable || !(t.type in Al)) && kl[t.type](e, t);
}
Al.keydown = (e, t) => {
	let n = t;
	if (e.input.shiftKey = n.keyCode == 16 || n.shiftKey, !nu(e) && (e.input.lastKeyCode = n.keyCode, e.input.lastKeyCodeTime = Date.now(), !(Ss && gs && n.keyCode == 13))) if (n.keyCode != 229 && e.domObserver.forceFlush(), ys && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
		let t = Date.now();
		e.input.lastIOSEnter = t, e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
			e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", (t) => t(e, ns(13, "Enter"))), e.input.lastIOSEnter = 0);
		}, 200);
	} else e.someProp("handleKeyDown", (t) => t(e, n)) || dl(e, n) ? n.preventDefault() : Pl(e, "key");
}, Al.keyup = (e, t) => {
	t.keyCode == 16 && (e.input.shiftKey = !1);
}, Al.keypress = (e, t) => {
	let n = t;
	if (nu(e) || !n.charCode || n.ctrlKey && !n.altKey || bs && n.metaKey) return;
	if (e.someProp("handleKeyPress", (t) => t(e, n))) {
		n.preventDefault();
		return;
	}
	let r = e.state.selection;
	if (!(r instanceof I) || !r.$from.sameParent(r.$to)) {
		let t = String.fromCharCode(n.charCode), i = () => e.state.tr.insertText(t).scrollIntoView();
		!/[\r\n]/.test(t) && !e.someProp("handleTextInput", (n) => n(e, r.$from.pos, r.$to.pos, t, i)) && e.dispatch(i()), n.preventDefault();
	}
};
function Bl(e) {
	return {
		left: e.clientX,
		top: e.clientY
	};
}
function Vl(e, t) {
	let n = t.x - e.clientX, r = t.y - e.clientY;
	return n * n + r * r < 100;
}
function Hl(e, t, n, r, i) {
	if (r == -1) return !1;
	let a = e.state.doc.resolve(r);
	for (let r = a.depth + 1; r > 0; r--) if (e.someProp(t, (t) => r > a.depth ? t(e, n, a.nodeAfter, a.before(r), i, !0) : t(e, n, a.node(r), a.before(r), i, !1))) return !0;
	return !1;
}
function Ul(e, t, n) {
	if (e.focused || e.focus(), e.state.selection.eq(t)) return;
	let r = e.state.tr.setSelection(t);
	n == "pointer" && r.setMeta("pointer", !0), e.dispatch(r);
}
function Wl(e, t) {
	if (t == -1) return !1;
	let n = e.state.doc.resolve(t), r = n.nodeAfter;
	return r && r.isAtom && L.isSelectable(r) ? (Ul(e, new L(n), "pointer"), !0) : !1;
}
function Gl(e, t) {
	if (t == -1) return !1;
	let n = e.state.selection, r, i;
	n instanceof L && (r = n.node);
	let a = e.state.doc.resolve(t);
	for (let e = a.depth + 1; e > 0; e--) {
		let t = e > a.depth ? a.nodeAfter : a.node(e);
		if (L.isSelectable(t)) {
			i = r && n.$from.depth > 0 && e >= n.$from.depth && a.before(n.$from.depth + 1) == n.$from.pos ? a.before(n.$from.depth) : a.before(e);
			break;
		}
	}
	return i == null ? !1 : (Ul(e, L.create(e.state.doc, i), "pointer"), !0);
}
function Kl(e, t, n, r, i) {
	return Hl(e, "handleClickOn", t, n, r) || e.someProp("handleClick", (n) => n(e, t, r)) || (i ? Gl(e, n) : Wl(e, n));
}
function ql(e, t, n, r) {
	return Hl(e, "handleDoubleClickOn", t, n, r) || e.someProp("handleDoubleClick", (n) => n(e, t, r));
}
function Jl(e, t, n, r) {
	return Hl(e, "handleTripleClickOn", t, n, r) || e.someProp("handleTripleClick", (n) => n(e, t, r)) || Yl(e, n, r);
}
function Yl(e, t, n) {
	if (n.button != 0) return !1;
	let r = Xl(e, t, !0), i = e.state.doc;
	return r ? (Ul(e, r, "pointer"), r instanceof I && i.eq(e.state.doc) && (e.input.mouseDown = new tu(e, r)), !0) : !1;
}
function Xl(e, t, n) {
	let r = e.state.doc;
	if (t == -1) return r.inlineContent ? I.create(r, 0, r.content.size) : null;
	let i = r.resolve(t);
	for (let e = i.depth + 1; e > 0; e--) {
		let t = e > i.depth ? i.nodeAfter : i.node(e), a = i.before(e);
		if (t.inlineContent) return I.create(r, a + 1, a + 1 + t.content.size);
		if (n && L.isSelectable(t)) return L.create(r, a);
	}
	return null;
}
function Zl(e) {
	return cu(e);
}
var Ql = bs ? "metaKey" : "ctrlKey";
kl.mousedown = (e, t) => {
	let n = t;
	e.input.shiftKey = n.shiftKey;
	let r = Zl(e), i = Date.now(), a = "singleClick";
	i - e.input.lastClick.time < 500 && Vl(n, e.input.lastClick) && !n[Ql] && e.input.lastClick.button == n.button && (e.input.lastClick.type == "singleClick" ? a = "doubleClick" : e.input.lastClick.type == "doubleClick" && (a = "tripleClick")), e.input.lastClick = {
		time: i,
		x: n.clientX,
		y: n.clientY,
		type: a,
		button: n.button
	}, e.input.mouseDown && e.input.mouseDown.done();
	let o = e.posAtCoords(Bl(n));
	o && (a == "singleClick" ? e.input.mouseDown = new eu(e, o, n, !!r) : (a == "doubleClick" ? ql : Jl)(e, o.pos, o.inside, n) ? n.preventDefault() : Pl(e, "pointer"));
};
var $l = class {
	constructor(e) {
		this.view = e, this.mightDrag = null, e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this));
	}
	up(e) {
		this.done();
	}
	move(e) {
		e.buttons == 0 && this.done();
	}
	done() {
		this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.view.input.mouseDown == this && (this.view.input.mouseDown = null);
	}
	delaySelUpdate() {
		return !1;
	}
}, eu = class extends $l {
	constructor(e, t, n, r) {
		super(e), this.pos = t, this.event = n, this.flushed = r, this.delayedSelectionSync = !1, this.startDoc = e.state.doc, this.selectNode = !!n[Ql], this.allowDefault = n.shiftKey;
		let i, a;
		if (t.inside > -1) i = e.state.doc.nodeAt(t.inside), a = t.inside;
		else {
			let n = e.state.doc.resolve(t.pos);
			i = n.parent, a = n.depth ? n.before() : 0;
		}
		let o = r ? null : n.target, s = o ? e.docView.nearestDesc(o, !0) : null;
		this.target = s && s.nodeDOM.nodeType == 1 ? s.nodeDOM : null;
		let { selection: c } = e.state;
		n.button == 0 && (i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof L && c.from <= a && c.to > a) && (this.mightDrag = {
			node: i,
			pos: a,
			addAttr: !!(this.target && !this.target.draggable),
			setUneditable: !!(this.target && ms && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
		}, 20), this.view.domObserver.start()), Pl(e, "pointer");
	}
	done() {
		super.done(), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => {
			this.view.isDestroyed || Pc(this.view);
		});
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Bl(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Pl(this.view, "pointer") : Kl(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || vs && this.mightDrag && !this.mightDrag.node.isAtom || gs && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Ul(this.view, F.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : Pl(this.view, "pointer");
	}
	move(e) {
		this.updateAllowDefault(e), Pl(this.view, "pointer"), super.move(e);
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
	}
	delaySelUpdate() {
		return this.allowDefault ? (this.delayedSelectionSync = !0, !0) : !1;
	}
}, tu = class extends $l {
	constructor(e, t) {
		super(e), this.startSelection = t, this.startDoc = e.state.doc;
	}
	move(e) {
		if (e.buttons == 0 || this.view.isDestroyed || !this.view.state.doc.eq(this.startDoc)) {
			this.done();
			return;
		}
		e.preventDefault(), Pl(this.view, "pointer");
		let t = this.view.posAtCoords(Bl(e)), n = t && Xl(this.view, t.inside, !1);
		if (!n) return;
		let { doc: r } = this.view.state, i = this.startSelection, [a, o] = n.from < i.from ? [i.to, n.from] : [i.from, n.to];
		Ul(this.view, I.create(r, a, o), "pointer");
	}
};
kl.touchstart = (e) => {
	e.input.lastTouch = Date.now(), Zl(e), Pl(e, "pointer");
}, kl.touchmove = (e) => {
	e.input.lastTouch = Date.now(), Pl(e, "pointer");
}, kl.contextmenu = (e) => Zl(e);
function nu(e, t) {
	return e.composing ? !0 : vs && Math.abs(Date.now() - e.input.compositionEndedAt) < 500 ? (e.input.compositionEndedAt = -2e8, !0) : !1;
}
var ru = Ss ? 5e3 : -1;
Al.compositionstart = Al.compositionupdate = (e) => {
	if (!e.composing) {
		e.domObserver.flush();
		let { state: t } = e, n = t.selection.$to;
		if (t.selection instanceof I && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((e) => e.type.spec.inclusive === !1) || gs && xs && iu(e))) e.markCursor = e.state.storedMarks || n.marks(), cu(e, !0), e.markCursor = null;
		else if (cu(e, !t.selection.empty), ms && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
			let t = e.domSelectionRange();
			for (let n = t.focusNode, r = t.focusOffset; n && n.nodeType == 1 && r != 0;) {
				let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
				if (!t) break;
				if (t.nodeType == 3) {
					let n = e.domSelection();
					n && n.collapse(t, t.nodeValue.length);
					break;
				} else n = t, r = -1;
			}
		}
		e.input.composing = !0;
	}
	au(e, ru);
};
function iu(e) {
	let { focusNode: t, focusOffset: n } = e.domSelectionRange();
	if (!t || t.nodeType != 1 || n >= t.childNodes.length) return !1;
	let r = t.childNodes[n];
	return r.nodeType == 1 && r.contentEditable == "false";
}
Al.compositionend = (e, t) => {
	e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now(), e.input.compositionPendingChanges = e.domObserver.pendingRecords().length ? e.input.compositionID : 0, e.input.compositionNode = null, e.input.badSafariComposition ? e.domObserver.forceFlush() : e.input.compositionPendingChanges && Promise.resolve().then(() => e.domObserver.flush()), e.input.compositionID++, au(e, 20));
};
function au(e, t) {
	clearTimeout(e.input.composingTimeout), t > -1 && (e.input.composingTimeout = setTimeout(() => cu(e), t));
}
function ou(e) {
	for (e.composing && (e.input.composing = !1, e.input.compositionEndedAt = Date.now()); e.input.compositionNodes.length > 0;) e.input.compositionNodes.pop().markParentsDirty();
}
function su(e) {
	let t = e.domSelectionRange();
	if (!t.focusNode) return null;
	let n = Zo(t.focusNode, t.focusOffset), r = Qo(t.focusNode, t.focusOffset);
	if (n && r && n != r) {
		let t = r.pmViewDesc, i = e.domObserver.lastChangedTextNode;
		if (n == i || r == i) return i;
		if (!t || !t.isText(r.nodeValue)) return r;
		if (e.input.compositionNode == r) {
			let e = n.pmViewDesc;
			if (!(!e || !e.isText(n.nodeValue))) return r;
		}
	}
	return n || r;
}
function cu(e, t = !1) {
	if (!(Ss && e.domObserver.flushingSoon >= 0)) {
		if (e.domObserver.forceFlush(), ou(e), t || e.docView && e.docView.dirty) {
			let n = Mc(e), r = e.state.selection;
			return n && !n.eq(r) ? e.dispatch(e.state.tr.setSelection(n)) : (e.markCursor || t) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? e.dispatch(e.state.tr.deleteSelection()) : e.updateState(e.state), !0;
		}
		return !1;
	}
}
function lu(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.dom.parentNode.appendChild(document.createElement("div"));
	n.appendChild(t), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let r = getSelection(), i = document.createRange();
	i.selectNodeContents(t), e.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
		n.parentNode && n.parentNode.removeChild(n), e.focus();
	}, 50);
}
var uu = fs && ps < 15 || ys && ws < 604;
kl.copy = Al.cut = (e, t) => {
	let n = t, r = e.state.selection, i = n.type == "cut";
	if (r.empty) return;
	let a = uu ? null : n.clipboardData, { dom: o, text: s } = fl(e, r.content());
	a ? (n.preventDefault(), a.clearData(), a.setData("text/html", o.innerHTML), a.setData("text/plain", s)) : lu(e, o), i && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function du(e) {
	return e.openStart == 0 && e.openEnd == 0 && e.content.childCount == 1 ? e.content.firstChild : null;
}
function fu(e, t) {
	if (!e.dom.parentNode) return;
	let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code, r = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
	n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
	let i = e.input.shiftKey && e.input.lastKeyCode != 45;
	setTimeout(() => {
		e.focus(), r.parentNode && r.parentNode.removeChild(r), n ? pu(e, r.value, null, i, t) : pu(e, r.textContent, r.innerHTML, i, t);
	}, 50);
}
function pu(e, t, n, r, i) {
	let a = pl(e, t, n, r, e.state.selection.$from);
	if (e.someProp("handlePaste", (t) => t(e, i, a || P.empty))) return !0;
	if (!a) return !1;
	let o = du(a), s = o ? e.state.tr.replaceSelectionWith(o, r) : e.state.tr.replaceSelection(a);
	return e.dispatch(s.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function mu(e) {
	let t = e.getData("text/plain") || e.getData("Text");
	if (t) return t;
	let n = e.getData("text/uri-list");
	return n ? n.replace(/\r?\n/g, " ") : "";
}
Al.paste = (e, t) => {
	let n = t;
	if (e.composing && !Ss) return;
	let r = uu ? null : n.clipboardData, i = e.input.shiftKey && e.input.lastKeyCode != 45;
	r && pu(e, mu(r), r.getData("text/html"), i, n) ? n.preventDefault() : fu(e, n);
};
var hu = class {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n;
	}
}, gu = bs ? "altKey" : "ctrlKey";
function _u(e, t) {
	let n;
	return e.someProp("dragCopies", (e) => {
		n ||= e(t);
	}), n == null ? !t[gu] : !n;
}
kl.dragstart = (e, t) => {
	let n = t, r = e.input.mouseDown;
	if (r && r.done(), !n.dataTransfer) return;
	let i = e.state.selection, a = i.empty ? null : e.posAtCoords(Bl(n)), o;
	if (!(a && a.pos >= i.from && a.pos <= (i instanceof L ? i.to - 1 : i.to))) {
		if (r && r.mightDrag) o = L.create(e.state.doc, r.mightDrag.pos);
		else if (n.target && n.target.nodeType == 1) {
			let t = e.docView.nearestDesc(n.target, !0);
			t && t.node.type.spec.draggable && t != e.docView && (o = L.create(e.state.doc, t.posBefore));
		}
	}
	let { dom: s, text: c, slice: l } = fl(e, (o || e.state.selection).content());
	(!n.dataTransfer.files.length || !gs || _s > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(uu ? "Text" : "text/html", s.innerHTML), n.dataTransfer.effectAllowed = "copyMove", uu || n.dataTransfer.setData("text/plain", c), e.dragging = new hu(l, _u(e, n), o);
}, kl.dragend = (e) => {
	let t = e.dragging;
	window.setTimeout(() => {
		e.dragging == t && (e.dragging = null);
	}, 50);
}, Al.dragover = Al.dragenter = (e, t) => t.preventDefault(), Al.drop = (e, t) => {
	try {
		vu(e, t, e.dragging);
	} finally {
		e.dragging = null;
	}
};
function vu(e, t, n) {
	if (!t.dataTransfer) return;
	let r = e.posAtCoords(Bl(t));
	if (!r) return;
	let i = e.state.doc.resolve(r.pos), a = n && n.slice;
	a ? e.someProp("transformPasted", (t) => {
		a = t(a, e, !1);
	}) : a = pl(e, mu(t.dataTransfer), uu ? null : t.dataTransfer.getData("text/html"), !1, i);
	let o = !!(n && _u(e, t));
	if (e.someProp("handleDrop", (n) => n(e, t, a || P.empty, o))) {
		t.preventDefault();
		return;
	}
	if (!a) return;
	t.preventDefault();
	let s = a ? la(e.state.doc, i.pos, a) : i.pos;
	s ??= i.pos;
	let c = e.state.tr;
	if (o) {
		let { node: e } = n;
		e ? e.replace(c) : c.deleteSelection();
	}
	let l = c.mapping.map(s), u = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1, d = c.doc;
	if (u ? c.replaceRangeWith(l, l, a.content.firstChild) : c.replaceRange(l, l, a), c.doc.eq(d)) return;
	let f = c.doc.resolve(l);
	if (u && L.isSelectable(a.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(a.content.firstChild)) c.setSelection(new L(f));
	else {
		let t = c.mapping.map(s);
		c.mapping.maps[c.mapping.maps.length - 1].forEach((e, n, r, i) => t = i), c.setSelection(Uc(e, f, c.doc.resolve(t)));
	}
	e.focus(), e.dispatch(c.setMeta("uiEvent", "drop"));
}
kl.focus = (e) => {
	e.input.lastFocus = Date.now(), e.focused || (e.domObserver.stop(), e.dom.classList.add("ProseMirror-focused"), e.domObserver.start(), e.focused = !0, setTimeout(() => {
		e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && Pc(e);
	}, 20));
}, kl.blur = (e, t) => {
	let n = t;
	e.focused &&= (e.domObserver.stop(), e.dom.classList.remove("ProseMirror-focused"), e.domObserver.start(), n.relatedTarget && e.dom.contains(n.relatedTarget) && e.domObserver.currentSelection.clear(), !1);
}, kl.beforeinput = (e, t) => {
	if (gs && Ss && t.inputType == "deleteContentBackward") {
		e.domObserver.flushSoon();
		let { domChangeCount: t } = e.input;
		setTimeout(() => {
			if (e.input.domChangeCount != t || (e.dom.blur(), e.focus(), e.someProp("handleKeyDown", (t) => t(e, ns(8, "Backspace"))))) return;
			let { $cursor: n } = e.state.selection;
			n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView());
		}, 50);
	}
};
for (let e in Al) kl[e] = Al[e];
function yu(e, t) {
	if (e == t) return !0;
	for (let n in e) if (e[n] !== t[n]) return !1;
	for (let n in t) if (!(n in e)) return !1;
	return !0;
}
var bu = class e {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || wu, this.side = this.spec.side || 0;
	}
	map(e, t, n, r) {
		let { pos: i, deleted: a } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
		return a ? null : new B(i - n, i - n, this);
	}
	valid() {
		return !0;
	}
	eq(t) {
		return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && yu(this.spec, t.spec));
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e);
	}
}, xu = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || wu;
	}
	map(e, t, n, r) {
		let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n, a = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
		return i >= a ? null : new B(i, a, this);
	}
	valid(e, t) {
		return t.from < t.to;
	}
	eq(t) {
		return this == t || t instanceof e && yu(this.attrs, t.attrs) && yu(this.spec, t.spec);
	}
	static is(t) {
		return t.type instanceof e;
	}
	destroy() {}
}, Su = class e {
	constructor(e, t) {
		this.attrs = e, this.spec = t || wu;
	}
	map(e, t, n, r) {
		let i = e.mapResult(t.from + r, 1);
		if (i.deleted) return null;
		let a = e.mapResult(t.to + r, -1);
		return a.deleted || a.pos <= i.pos ? null : new B(i.pos - n, a.pos - n, this);
	}
	valid(e, t) {
		let { index: n, offset: r } = e.content.findIndex(t.from), i;
		return r == t.from && !(i = e.child(n)).isText && r + i.nodeSize == t.to;
	}
	eq(t) {
		return this == t || t instanceof e && yu(this.attrs, t.attrs) && yu(this.spec, t.spec);
	}
	destroy() {}
}, B = class e {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.type = n;
	}
	copy(t, n) {
		return new e(t, n, this.type);
	}
	eq(e, t = 0) {
		return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
	}
	map(e, t, n) {
		return this.type.map(e, this, t, n);
	}
	static widget(t, n, r) {
		return new e(t, t, new bu(n, r));
	}
	static inline(t, n, r, i) {
		return new e(t, n, new xu(r, i));
	}
	static node(t, n, r, i) {
		return new e(t, n, new Su(r, i));
	}
	get spec() {
		return this.type.spec;
	}
	get inline() {
		return this.type instanceof xu;
	}
	get widget() {
		return this.type instanceof bu;
	}
}, Cu = [], wu = {}, V = class e {
	constructor(e, t) {
		this.local = e.length ? e : Cu, this.children = t.length ? t : Cu;
	}
	static create(e, t) {
		return t.length ? Mu(t, e, 0, wu) : Tu;
	}
	find(e, t, n) {
		let r = [];
		return this.findInner(e ?? 0, t ?? 1e9, r, 0, n), r;
	}
	findInner(e, t, n, r, i) {
		for (let a = 0; a < this.local.length; a++) {
			let o = this.local[a];
			o.from <= t && o.to >= e && (!i || i(o.spec)) && n.push(o.copy(o.from + r, o.to + r));
		}
		for (let a = 0; a < this.children.length; a += 3) if (this.children[a] < t && this.children[a + 1] > e) {
			let o = this.children[a] + 1;
			this.children[a + 2].findInner(e - o, t - o, n, r + o, i);
		}
	}
	map(e, t, n) {
		return this == Tu || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || wu);
	}
	mapInner(t, n, r, i, a) {
		let o;
		for (let e = 0; e < this.local.length; e++) {
			let s = this.local[e].map(t, r, i);
			s && s.type.valid(n, s) ? (o ||= []).push(s) : a.onRemove && a.onRemove(this.local[e].spec);
		}
		return this.children.length ? Du(this.children, o || [], t, n, r, i, a) : o ? new e(o.sort(Nu), Cu) : Tu;
	}
	add(t, n) {
		return n.length ? this == Tu ? e.create(t, n) : this.addInner(t, n, 0) : this;
	}
	addInner(t, n, r) {
		let i, a = 0;
		t.forEach((e, t) => {
			let o = t + r, s;
			if (s = Au(n, e, o)) {
				for (i ||= this.children.slice(); a < i.length && i[a] < t;) a += 3;
				i[a] == t ? i[a + 2] = i[a + 2].addInner(e, s, o + 1) : i.splice(a, 0, t, t + e.nodeSize, Mu(s, e, o + 1, wu)), a += 3;
			}
		});
		let o = Ou(a ? ju(n) : n, -r);
		for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || o.splice(e--, 1);
		return new e(o.length ? this.local.concat(o).sort(Nu) : this.local, i || this.children);
	}
	remove(e) {
		return e.length == 0 || this == Tu ? this : this.removeInner(e, 0);
	}
	removeInner(t, n) {
		let r = this.children, i = this.local;
		for (let e = 0; e < r.length; e += 3) {
			let i, a = r[e] + n, o = r[e + 1] + n;
			for (let e = 0, n; e < t.length; e++) (n = t[e]) && n.from > a && n.to < o && (t[e] = null, (i ||= []).push(n));
			if (!i) continue;
			r == this.children && (r = this.children.slice());
			let s = r[e + 2].removeInner(i, a + 1);
			s == Tu ? (r.splice(e, 3), e -= 3) : r[e + 2] = s;
		}
		if (i.length) {
			for (let e = 0, r; e < t.length; e++) if (r = t[e]) for (let e = 0; e < i.length; e++) i[e].eq(r, n) && (i == this.local && (i = this.local.slice()), i.splice(e--, 1));
		}
		return r == this.children && i == this.local ? this : i.length || r.length ? new e(i, r) : Tu;
	}
	forChild(t, n) {
		if (this == Tu) return this;
		if (n.isLeaf) return e.empty;
		let r, i;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] >= t) {
			this.children[e] == t && (r = this.children[e + 2]);
			break;
		}
		let a = t + 1, o = a + n.content.size;
		for (let e = 0; e < this.local.length; e++) {
			let t = this.local[e];
			if (t.from < o && t.to > a && t.type instanceof xu) {
				let e = Math.max(a, t.from) - a, n = Math.min(o, t.to) - a;
				e < n && (i ||= []).push(t.copy(e, n));
			}
		}
		if (i) {
			let t = new e(i.sort(Nu), Cu);
			return r ? new Eu([t, r]) : t;
		}
		return r || Tu;
	}
	eq(t) {
		if (this == t) return !0;
		if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length) return !1;
		for (let e = 0; e < this.local.length; e++) if (!this.local[e].eq(t.local[e])) return !1;
		for (let e = 0; e < this.children.length; e += 3) if (this.children[e] != t.children[e] || this.children[e + 1] != t.children[e + 1] || !this.children[e + 2].eq(t.children[e + 2])) return !1;
		return !0;
	}
	locals(e) {
		return Pu(this.localsInner(e));
	}
	localsInner(e) {
		if (this == Tu) return Cu;
		if (e.inlineContent || !this.local.some(xu.is)) return this.local;
		let t = [];
		for (let e = 0; e < this.local.length; e++) this.local[e].type instanceof xu || t.push(this.local[e]);
		return t;
	}
	forEachSet(e) {
		e(this);
	}
};
V.empty = new V([], []), V.removeOverlap = Pu;
var Tu = V.empty, Eu = class e {
	constructor(e) {
		this.members = e;
	}
	map(t, n) {
		let r = this.members.map((e) => e.map(t, n, wu));
		return e.from(r);
	}
	forChild(t, n) {
		if (n.isLeaf) return V.empty;
		let r = [];
		for (let i = 0; i < this.members.length; i++) {
			let a = this.members[i].forChild(t, n);
			a != Tu && (a instanceof e ? r = r.concat(a.members) : r.push(a));
		}
		return e.from(r);
	}
	eq(t) {
		if (!(t instanceof e) || t.members.length != this.members.length) return !1;
		for (let e = 0; e < this.members.length; e++) if (!this.members[e].eq(t.members[e])) return !1;
		return !0;
	}
	locals(e) {
		let t, n = !0;
		for (let r = 0; r < this.members.length; r++) {
			let i = this.members[r].localsInner(e);
			if (i.length) if (!t) t = i;
			else {
				n &&= (t = t.slice(), !1);
				for (let e = 0; e < i.length; e++) t.push(i[e]);
			}
		}
		return t ? Pu(n ? t : t.sort(Nu)) : Cu;
	}
	static from(t) {
		switch (t.length) {
			case 0: return Tu;
			case 1: return t[0];
			default: return new e(t.every((e) => e instanceof V) ? t : t.reduce((e, t) => e.concat(t instanceof V ? t : t.members), []));
		}
	}
	forEachSet(e) {
		for (let t = 0; t < this.members.length; t++) this.members[t].forEachSet(e);
	}
};
function Du(e, t, n, r, i, a, o) {
	let s = e.slice();
	for (let e = 0, t = a; e < n.maps.length; e++) {
		let r = 0;
		n.maps[e].forEach((e, n, i, a) => {
			let o = a - i - (n - e);
			for (let i = 0; i < s.length; i += 3) {
				let a = s[i + 1];
				if (a < 0 || e > a + t - r) continue;
				let c = s[i] + t - r;
				n >= c ? s[i + 1] = e <= c ? -2 : -1 : e >= t && o && (s[i] += o, s[i + 1] += o);
			}
			r += o;
		}), t = n.maps[e].map(t, -1);
	}
	let c = !1;
	for (let t = 0; t < s.length; t += 3) if (s[t + 1] < 0) {
		if (s[t + 1] == -2) {
			c = !0, s[t + 1] = -1;
			continue;
		}
		let l = n.map(e[t] + a), u = l - i;
		if (u < 0 || u >= r.content.size) {
			c = !0;
			continue;
		}
		let d = n.map(e[t + 1] + a, -1) - i, { index: f, offset: p } = r.content.findIndex(u), m = r.maybeChild(f);
		if (m && p == u && p + m.nodeSize == d) {
			let r = s[t + 2].mapInner(n, m, l + 1, e[t] + a + 1, o);
			r == Tu ? (s[t + 1] = -2, c = !0) : (s[t] = u, s[t + 1] = d, s[t + 2] = r);
		} else c = !0;
	}
	if (c) {
		let c = Mu(ku(s, e, t, n, i, a, o), r, 0, o);
		t = c.local;
		for (let e = 0; e < s.length; e += 3) s[e + 1] < 0 && (s.splice(e, 3), e -= 3);
		for (let e = 0, t = 0; e < c.children.length; e += 3) {
			let n = c.children[e];
			for (; t < s.length && s[t] < n;) t += 3;
			s.splice(t, 0, c.children[e], c.children[e + 1], c.children[e + 2]);
		}
	}
	return new V(t.sort(Nu), s);
}
function Ou(e, t) {
	if (!t || !e.length) return e;
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n.push(new B(i.from + t, i.to + t, i.type));
	}
	return n;
}
function ku(e, t, n, r, i, a, o) {
	function s(e, t) {
		for (let a = 0; a < e.local.length; a++) {
			let s = e.local[a].map(r, i, t);
			s ? n.push(s) : o.onRemove && o.onRemove(e.local[a].spec);
		}
		for (let n = 0; n < e.children.length; n += 3) s(e.children[n + 2], e.children[n] + t + 1);
	}
	for (let n = 0; n < e.length; n += 3) e[n + 1] == -1 && s(e[n + 2], t[n] + a + 1);
	return n;
}
function Au(e, t, n) {
	if (t.isLeaf) return null;
	let r = n + t.nodeSize, i = null;
	for (let t = 0, a; t < e.length; t++) (a = e[t]) && a.from > n && a.to < r && ((i ||= []).push(a), e[t] = null);
	return i;
}
function ju(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) e[n] != null && t.push(e[n]);
	return t;
}
function Mu(e, t, n, r) {
	let i = [], a = !1;
	t.forEach((t, o) => {
		let s = Au(e, t, o + n);
		if (s) {
			a = !0;
			let e = Mu(s, t, n + o + 1, r);
			e != Tu && i.push(o, o + t.nodeSize, e);
		}
	});
	let o = Ou(a ? ju(e) : e, -n).sort(Nu);
	for (let e = 0; e < o.length; e++) o[e].type.valid(t, o[e]) || (r.onRemove && r.onRemove(o[e].spec), o.splice(e--, 1));
	return o.length || i.length ? new V(o, i) : Tu;
}
function Nu(e, t) {
	return e.from - t.from || e.to - t.to;
}
function Pu(e) {
	let t = e;
	for (let n = 0; n < t.length - 1; n++) {
		let r = t[n];
		if (r.from != r.to) for (let i = n + 1; i < t.length; i++) {
			let a = t[i];
			if (a.from == r.from) {
				a.to != r.to && (t == e && (t = e.slice()), t[i] = a.copy(a.from, r.to), Fu(t, i + 1, a.copy(r.to, a.to)));
				continue;
			} else {
				a.from < r.to && (t == e && (t = e.slice()), t[n] = r.copy(r.from, a.from), Fu(t, i, r.copy(a.from, r.to)));
				break;
			}
		}
	}
	return t;
}
function Fu(e, t, n) {
	for (; t < e.length && Nu(n, e[t]) > 0;) t++;
	e.splice(t, 0, n);
}
function Iu(e) {
	let t = [];
	return e.someProp("decorations", (n) => {
		let r = n(e.state);
		r && r != Tu && t.push(r);
	}), e.cursorWrapper && t.push(V.create(e.state.doc, [e.cursorWrapper.deco])), Eu.from(t);
}
var Lu = {
	childList: !0,
	characterData: !0,
	characterDataOldValue: !0,
	attributes: !0,
	attributeOldValue: !0,
	subtree: !0
}, Ru = fs && ps <= 11, zu = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	set(e) {
		this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
	}
	clear() {
		this.anchorNode = this.focusNode = null;
	}
	eq(e) {
		return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
	}
}, Bu = class {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new zu(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((t) => {
			for (let e = 0; e < t.length; e++) this.queue.push(t[e]);
			fs && ps <= 11 && t.some((e) => e.type == "childList" && e.removedNodes.length || e.type == "characterData" && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : vs && e.composing && t.some((e) => e.type == "childList" && e.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
		}), Ru && (this.onCharData = (e) => {
			this.queue.push({
				target: e.target,
				type: "characterData",
				oldValue: e.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this);
	}
	flushSoon() {
		this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
			this.flushingSoon = -1, this.flush();
		}, 20));
	}
	forceFlush() {
		this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
	}
	start() {
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Lu)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
				window.setTimeout(() => this.flush(), 20);
			}
			this.observer.disconnect();
		}
		this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
	}
	suppressSelectionUpdates() {
		this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
	}
	onSelectionChange() {
		if (Wc(this.view)) {
			if (this.suppressingSelectionUpdates) return Pc(this.view);
			if (fs && ps <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && qo(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
			}
			this.flush();
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange());
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let t = /* @__PURE__ */ new Set(), n;
		for (let n = e.focusNode; n; n = Uo(n)) t.add(n);
		for (let r = e.anchorNode; r; r = Uo(r)) if (t.has(r)) {
			n = r;
			break;
		}
		let r = n && this.view.docView.nearestDesc(n);
		if (r && r.ignoreMutation({
			type: "selection",
			target: n.nodeType == 3 ? n.parentNode : n
		})) return this.setCurSelection(), !0;
	}
	pendingRecords() {
		if (this.observer) for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue;
	}
	flush() {
		let { view: e } = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let t = this.pendingRecords();
		t.length && (this.queue = []);
		let n = e.domSelectionRange(), r = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && Wc(e) && !this.ignoreSelectionChange(n), i = -1, a = -1, o = !1, s = [];
		if (e.editable) for (let e = 0; e < t.length; e++) {
			let n = this.registerMutation(t[e], s);
			n && (i = i < 0 ? n.from : Math.min(n.from, i), a = a < 0 ? n.to : Math.max(n.to, a), n.typeOver && (o = !0));
		}
		if (s.some((e) => e.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46 || gs && (e.composing || e.input.compositionEndedAt > Date.now() - 50) && t.some((e) => e.type == "childList" && e.removedNodes.length))) {
			for (let e of s) if (e.nodeName == "BR" && e.parentNode) {
				let t = e.nextSibling;
				for (; t && t.nodeType == 1;) {
					if (t.contentEditable == "false") {
						e.parentNode.removeChild(e);
						break;
					}
					t = t.firstChild;
				}
			}
		} else if (ms && s.length) {
			let t = s.filter((e) => e.nodeName == "BR");
			if (t.length == 2) {
				let [e, n] = t;
				e.parentNode && e.parentNode.parentNode == n.parentNode ? n.remove() : e.remove();
			} else {
				let { focusNode: n } = this.currentSelection;
				for (let r of t) {
					let t = r.parentNode;
					t && t.nodeName == "LI" && (!n || Ku(e, n) != t) && r.remove();
				}
			}
		}
		let c = null;
		i < 0 && r && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && ts(n) && (c = Mc(e)) && c.eq(F.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Pc(e), this.currentSelection.set(n), e.scrollToSelection()) : (i > -1 || r) && (i > -1 && (e.docView.markDirty(i, a), Uu(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, qu(e, s)), this.handleDOMChange(i, a, o, s), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || Pc(e), this.currentSelection.set(n));
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let n = 0; n < e.addedNodes.length; n++) {
				let r = e.addedNodes[n];
				t.push(r), r.nodeType == 3 && (this.lastChangedTextNode = r);
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let r = e.previousSibling, i = e.nextSibling;
			if (fs && ps <= 11 && e.addedNodes.length) for (let t = 0; t < e.addedNodes.length; t++) {
				let { previousSibling: n, nextSibling: a } = e.addedNodes[t];
				(!n || Array.prototype.indexOf.call(e.addedNodes, n) < 0) && (r = n), (!a || Array.prototype.indexOf.call(e.addedNodes, a) < 0) && (i = a);
			}
			let a = r && r.parentNode == e.target ? Ho(r) + 1 : 0, o = n.localPosFromDOM(e.target, a, -1), s = i && i.parentNode == e.target ? Ho(i) : e.target.childNodes.length;
			return {
				from: o,
				to: n.localPosFromDOM(e.target, s, 1)
			};
		} else if (e.type == "attributes") return {
			from: n.posAtStart - n.border,
			to: n.posAtEnd + n.border
		};
		else return this.lastChangedTextNode = e.target, {
			from: n.posAtStart,
			to: n.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		};
	}
}, Vu = /* @__PURE__ */ new WeakMap(), Hu = !1;
function Uu(e) {
	if (!Vu.has(e) && (Vu.set(e, null), [
		"normal",
		"nowrap",
		"pre-line"
	].indexOf(getComputedStyle(e.dom).whiteSpace) !== -1)) {
		if (e.requiresGeckoHackNode = ms, Hu) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Hu = !0;
	}
}
function Wu(e, t) {
	let n = t.startContainer, r = t.startOffset, i = t.endContainer, a = t.endOffset, o = e.domAtPos(e.state.selection.anchor);
	return qo(o.node, o.offset, i, a) && ([n, r, i, a] = [
		i,
		a,
		n,
		r
	]), {
		anchorNode: n,
		anchorOffset: r,
		focusNode: i,
		focusOffset: a
	};
}
function Gu(e, t) {
	if (t.getComposedRanges) {
		let n = t.getComposedRanges(e.root)[0];
		if (n) return Wu(e, n);
	}
	let n;
	function r(e) {
		e.preventDefault(), e.stopImmediatePropagation(), n = e.getTargetRanges()[0];
	}
	return e.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), e.dom.removeEventListener("beforeinput", r, !0), n ? Wu(e, n) : null;
}
function Ku(e, t) {
	for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
		let t = e.docView.nearestDesc(n, !0);
		if (t && t.node.isBlock) return n;
	}
	return null;
}
function qu(e, t) {
	let { focusNode: n, focusOffset: r } = e.domSelectionRange();
	for (let i of t) if (i.parentNode?.nodeName == "TR") {
		let t = i.nextSibling;
		for (; t && t.nodeName != "TD" && t.nodeName != "TH";) t = t.nextSibling;
		if (t) {
			let a = t;
			for (;;) {
				let e = a.firstChild;
				if (!e || e.nodeType != 1 || e.contentEditable == "false" || /^(BR|IMG)$/.test(e.nodeName)) break;
				a = e;
			}
			a.insertBefore(i, a.firstChild), n == i && e.domSelection().collapse(i, r);
		} else i.parentNode.removeChild(i);
	}
}
function Ju(e, t, n) {
	let { node: r, fromOffset: i, toOffset: a, from: o, to: s } = e.docView.parseRange(t, n), c = e.domSelectionRange(), l, u = c.anchorNode;
	if (u && e.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (l = [{
		node: u,
		offset: c.anchorOffset
	}], ts(c) || l.push({
		node: c.focusNode,
		offset: c.focusOffset
	})), gs && e.input.lastKeyCode === 8) for (let e = a; e > i; e--) {
		let t = r.childNodes[e - 1], n = t.pmViewDesc;
		if (t.nodeName == "BR" && !n) {
			a = e;
			break;
		}
		if (!n || n.size) break;
	}
	let d = e.state.doc, f = e.someProp("domParser") || Yr.fromSchema(e.state.schema), p = d.resolve(o), m = null, h = f.parse(r, {
		topNode: p.parent,
		topMatch: p.parent.contentMatchAt(p.index()),
		topOpen: !0,
		from: i,
		to: a,
		preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
		findPositions: l,
		ruleFromNode: Yu,
		context: p
	});
	if (l && l[0].pos != null) {
		let e = l[0].pos, t = l[1] && l[1].pos;
		t ??= e, m = {
			anchor: e + o,
			head: t + o
		};
	}
	return {
		doc: h,
		sel: m,
		from: o,
		to: s
	};
}
function Yu(e) {
	let t = e.pmViewDesc;
	if (t) return t.parseRule();
	if (e.nodeName == "BR" && e.parentNode) {
		if (vs && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
			let e = document.createElement("div");
			return e.appendChild(document.createElement("li")), { skip: e };
		} else if (e.parentNode.lastChild == e || vs && /^(tr|table)$/i.test(e.parentNode.nodeName)) return { ignore: !0 };
	} else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder")) return { ignore: !0 };
	return null;
}
var Xu = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Zu(e, t, n, r, i) {
	let a = e.input.compositionPendingChanges || (e.composing ? e.input.compositionID : 0);
	if (e.input.compositionPendingChanges = 0, t < 0) {
		let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, n = Mc(e, t);
		if (n && !e.state.selection.eq(n)) {
			if (gs && Ss && e.input.lastKeyCode === 13 && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", (t) => t(e, ns(13, "Enter")))) return;
			let r = e.state.tr.setSelection(n);
			t == "pointer" ? r.setMeta("pointer", !0) : t == "key" && r.scrollIntoView(), a && r.setMeta("composition", a), e.dispatch(r);
		}
		return;
	}
	let o = e.state.doc.resolve(t), s = o.sharedDepth(n);
	t = o.before(s + 1), n = e.state.doc.resolve(n).after(s + 1);
	let c = e.state.selection, l = Ju(e, t, n), u = e.state.doc, d = u.slice(l.from, l.to), f, p;
	e.input.lastKeyCode === 8 && Date.now() - 100 < e.input.lastKeyCodeTime ? (f = e.state.selection.to, p = "end") : (f = e.state.selection.from, p = "start"), e.input.lastKeyCode = null;
	let m = nd(d.content, l.doc.content, l.from, f, p);
	if (m && e.input.domChangeCount++, (ys && e.input.lastIOSEnter > Date.now() - 225 || Ss) && i.some((e) => e.nodeType == 1 && !Xu.test(e.nodeName)) && (!m || m.endA >= m.endB) && e.someProp("handleKeyDown", (t) => t(e, ns(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (!m) if (r && c instanceof I && !c.empty && c.$head.sameParent(c.$anchor) && !e.composing && !(l.sel && l.sel.anchor != l.sel.head)) m = {
		start: c.from,
		endA: c.to,
		endB: c.to
	};
	else {
		if (l.sel) {
			let t = Qu(e, e.state.doc, l.sel);
			if (t && !t.eq(e.state.selection)) {
				let n = e.state.tr.setSelection(t);
				a && n.setMeta("composition", a), e.dispatch(n);
			}
		}
		return;
	}
	e.state.selection.from < e.state.selection.to && m.start == m.endB && e.state.selection instanceof I && (m.start > e.state.selection.from && m.start <= e.state.selection.from + 2 && e.state.selection.from >= l.from ? m.start = e.state.selection.from : m.endA < e.state.selection.to && m.endA >= e.state.selection.to - 2 && e.state.selection.to <= l.to && (m.endB += e.state.selection.to - m.endA, m.endA = e.state.selection.to)), fs && ps <= 11 && m.endB == m.start + 1 && m.endA == m.start && m.start > l.from && l.doc.textBetween(m.start - l.from - 1, m.start - l.from + 1) == " \xA0" && (m.start--, m.endA--, m.endB--);
	let h = l.doc.resolveNoCache(m.start - l.from), g = l.doc.resolveNoCache(m.endB - l.from), _ = u.resolve(m.start), v = h.sameParent(g) && h.parent.inlineContent && _.end() >= m.endA;
	if ((ys && e.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((e) => e.nodeName == "DIV" || e.nodeName == "P")) || !v && h.pos < l.doc.content.size && (!h.sameParent(g) || !h.parent.inlineContent) && h.pos < g.pos && !/\S/.test(l.doc.textBetween(h.pos, g.pos, "", ""))) && e.someProp("handleKeyDown", (t) => t(e, ns(13, "Enter")))) {
		e.input.lastIOSEnter = 0;
		return;
	}
	if (e.state.selection.anchor > m.start && ed(u, m.start, m.endA, h, g) && e.someProp("handleKeyDown", (t) => t(e, ns(8, "Backspace")))) {
		Ss && gs && e.domObserver.suppressSelectionUpdates();
		return;
	}
	gs && m.endB == m.start && (e.input.lastChromeDelete = Date.now()), Ss && !v && h.start() != g.start() && g.parentOffset == 0 && h.depth == g.depth && l.sel && l.sel.anchor == l.sel.head && l.sel.head == m.endA && (m.endB -= 2, g = l.doc.resolveNoCache(m.endB - l.from), setTimeout(() => {
		e.someProp("handleKeyDown", function(t) {
			return t(e, ns(13, "Enter"));
		});
	}, 20));
	let y = m.start, b = m.endA, x = (t) => {
		let n = t || e.state.tr.replace(y, b, l.doc.slice(m.start - l.from, m.endB - l.from));
		if (l.sel) {
			let t = Qu(e, n.doc, l.sel);
			t && !(gs && e.composing && t.empty && (m.start != m.endB || e.input.lastChromeDelete < Date.now() - 100) && (t.head == y || t.head == n.mapping.map(b) - 1) || fs && t.empty && t.head == y) && n.setSelection(t);
		}
		return a && n.setMeta("composition", a), n.scrollIntoView();
	}, S;
	if (v) if (h.pos == g.pos) {
		fs && ps <= 11 && h.parentOffset == 0 && (e.domObserver.suppressSelectionUpdates(), setTimeout(() => Pc(e), 20));
		let t = x(e.state.tr.delete(y, b)), n = u.resolve(m.start).marksAcross(u.resolve(m.endA));
		n && t.ensureMarks(n), e.dispatch(t);
	} else if (m.endA == m.endB && (S = $u(h.parent.content.cut(h.parentOffset, g.parentOffset), _.parent.content.cut(_.parentOffset, m.endA - _.start())))) {
		let t = x(e.state.tr);
		S.type == "add" ? t.addMark(y, b, S.mark) : t.removeMark(y, b, S.mark), e.dispatch(t);
	} else if (h.parent.child(h.index()).isText && h.index() == g.index() - +!g.textOffset) {
		let t = h.parent.textBetween(h.parentOffset, g.parentOffset), n = () => x(e.state.tr.insertText(t, y, b));
		e.someProp("handleTextInput", (r) => r(e, y, b, t, n)) || e.dispatch(n());
	} else e.dispatch(x());
	else e.dispatch(x());
}
function Qu(e, t, n) {
	return Math.max(n.anchor, n.head) > t.content.size ? null : Uc(e, t.resolve(n.anchor), t.resolve(n.head));
}
function $u(e, t) {
	let n = e.firstChild.marks, r = t.firstChild.marks, i = n, a = r, o, s, c;
	for (let e = 0; e < r.length; e++) i = r[e].removeFromSet(i);
	for (let e = 0; e < n.length; e++) a = n[e].removeFromSet(a);
	if (i.length == 1 && a.length == 0) s = i[0], o = "add", c = (e) => e.mark(s.addToSet(e.marks));
	else if (i.length == 0 && a.length == 1) s = a[0], o = "remove", c = (e) => e.mark(s.removeFromSet(e.marks));
	else return null;
	let l = [];
	for (let e = 0; e < t.childCount; e++) l.push(c(t.child(e)));
	if (M.from(l).eq(e)) return {
		mark: s,
		type: o
	};
}
function ed(e, t, n, r, i) {
	if (n - t <= i.pos - r.pos || td(r, !0, !1) < i.pos) return !1;
	let a = e.resolve(t);
	if (!r.parent.isTextblock) {
		let e = a.nodeAfter;
		return e != null && n == t + e.nodeSize;
	}
	if (a.parentOffset < a.parent.content.size || !a.parent.isTextblock) return !1;
	let o = e.resolve(td(a, !0, !0));
	return !o.parent.isTextblock || o.pos > n || td(o, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function td(e, t, n) {
	let r = e.depth, i = t ? e.end() : e.pos;
	for (; r > 0 && (t || e.indexAfter(r) == e.node(r).childCount);) r--, i++, t = !1;
	if (n) {
		let t = e.node(r).maybeChild(e.indexAfter(r));
		for (; t && !t.isLeaf;) t = t.firstChild, i++;
	}
	return i;
}
function nd(e, t, n, r, i) {
	let a = e.findDiffStart(t, n), o = n + e.size, s = n + t.size;
	if (a == null) return null;
	let { a: c, b: l } = e.findDiffEnd(t, o, s);
	if (i == "end") {
		let e = Math.max(0, a - Math.min(c, l));
		r -= c + e - a;
	}
	if (c < a && o < s) {
		let e = r <= a && r >= c ? a - r : 0;
		a -= e, l = a + (l - c), c = a;
	} else if (l < a) {
		let e = r <= a && r >= l ? a - r : 0;
		a -= e, c = a + (c - l), l = a;
	}
	return {
		start: a,
		endA: c,
		endB: l
	};
}
var rd = class {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Ml(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(ud), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = od(this), ad(this), this.nodeViews = cd(this), this.docView = fc(this.state.doc, id(this), Iu(this), this.dom, this), this.domObserver = new Bu(this, (e, t, n, r) => Zu(this, e, t, n, r)), this.domObserver.start(), Nl(this), this.updatePluginViews();
	}
	get composing() {
		return this.input.composing;
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			this._props = {};
			for (let t in e) this._props[t] = e[t];
			this._props.state = this.state;
		}
		return this._props;
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && Il(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(ud), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
	}
	setProps(e) {
		let t = {};
		for (let e in this._props) t[e] = this._props[e];
		t.state = this.state;
		for (let n in e) t[n] = e[n];
		this.update(t);
	}
	updateState(e) {
		this.updateStateInner(e, this._props);
	}
	updateStateInner(e, t) {
		let n = this.state, r = !1, i = !1;
		e.storedMarks && this.composing && (ou(this), i = !0), this.state = e;
		let a = n.plugins != e.plugins || this._props.plugins != t.plugins;
		if (a || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let e = cd(this);
			ld(e, this.nodeViews) && (this.nodeViews = e, r = !0);
		}
		(a || t.handleDOMEvents != this._props.handleDOMEvents) && Il(this), this.editable = od(this), ad(this);
		let o = Iu(this), s = id(this), c = n.plugins != e.plugins && !n.doc.eq(e.doc) ? "reset" : e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve", l = r || !this.docView.matchesNode(e.doc, s, o);
		(l || !e.selection.eq(n.selection)) && (i = !0);
		let u = c == "preserve" && i && this.dom.style.overflowAnchor == null && ks(this);
		if (i) {
			this.domObserver.stop();
			let t = l && (fs || gs) && !this.composing && !n.selection.empty && !e.selection.empty && sd(n.selection, e.selection);
			if (l) {
				let n = gs ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = su(this)), (r || !this.docView.update(e.doc, s, o, this)) && (this.docView.updateOuterDeco(s), this.docView.destroy(), this.docView = fc(e.doc, s, o, this.dom, this)), n && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (t = !0);
			}
			let i = this.input.mouseDown;
			t || !(i && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Kc(this) && i.delaySelUpdate()) ? Pc(this, t) : (Vc(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
		}
		this.updatePluginViews(n), this.dragging?.node && !n.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, n), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : u && js(u);
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode)) && !this.someProp("handleScrollToSelection", (e) => e(this))) if (this.state.selection instanceof L) {
			let t = this.docView.domAfterPos(this.state.selection.from);
			t.nodeType == 1 && Os(this, t.getBoundingClientRect(), e);
		} else Os(this, this.coordsAtPos(this.state.selection.head, 1), e);
	}
	destroyPluginViews() {
		let e;
		for (; e = this.pluginViews.pop();) e.destroy && e.destroy();
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
			for (let e = 0; e < this.directPlugins.length; e++) {
				let t = this.directPlugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
			for (let e = 0; e < this.state.plugins.length; e++) {
				let t = this.state.plugins[e];
				t.spec.view && this.pluginViews.push(t.spec.view(this));
			}
		} else for (let t = 0; t < this.pluginViews.length; t++) {
			let n = this.pluginViews[t];
			n.update && n.update(this, e);
		}
	}
	updateDraggedNode(e, t) {
		let n = e.node, r = -1;
		if (n.from < this.state.doc.content.size && this.state.doc.nodeAt(n.from) == n.node) r = n.from;
		else {
			let e = n.from + (this.state.doc.content.size - t.doc.content.size);
			(e > 0 && e < this.state.doc.content.size && this.state.doc.nodeAt(e)) == n.node && (r = e);
		}
		this.dragging = new hu(e.slice, e.move, r < 0 ? void 0 : L.create(this.state.doc, r));
	}
	someProp(e, t) {
		let n = this._props && this._props[e], r;
		if (n != null && (r = t ? t(n) : n)) return r;
		for (let n = 0; n < this.directPlugins.length; n++) {
			let i = this.directPlugins[n].props[e];
			if (i != null && (r = t ? t(i) : i)) return r;
		}
		let i = this.state.plugins;
		if (i) for (let n = 0; n < i.length; n++) {
			let a = i[n].props[e];
			if (a != null && (r = t ? t(a) : a)) return r;
		}
	}
	hasFocus() {
		if (fs) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e);) {
				if (e.contentEditable == "false") return !1;
				e = e.parentElement;
			}
			return !0;
		}
		return this.root.activeElement == this.dom;
	}
	focus() {
		this.domObserver.stop(), this.editable && Ps(this.dom), Pc(this), this.domObserver.start();
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let e = this.dom.parentNode; e; e = e.parentNode) if (e.nodeType == 9 || e.nodeType == 11 && e.host) return e.getSelection || (Object.getPrototypeOf(e).getSelection = () => e.ownerDocument.getSelection()), this._root = e;
		}
		return e || document;
	}
	updateRoot() {
		this._root = null;
	}
	posAtCoords(e) {
		return Hs(this, e);
	}
	coordsAtPos(e, t = 1) {
		return Ks(this, e, t);
	}
	domAtPos(e, t = 0) {
		return this.docView.domFromPos(e, t);
	}
	nodeDOM(e) {
		let t = this.docView.descAt(e);
		return t ? t.nodeDOM : null;
	}
	posAtDOM(e, t, n = -1) {
		let r = this.docView.posFromDOM(e, t, n);
		if (r == null) throw RangeError("DOM position not inside the editor");
		return r;
	}
	endOfTextblock(e, t) {
		return nc(this, t || this.state, e);
	}
	pasteHTML(e, t) {
		return pu(this, "", e, !1, t || new ClipboardEvent("paste"));
	}
	pasteText(e, t) {
		return pu(this, e, null, !0, t || new ClipboardEvent("paste"));
	}
	serializeForClipboard(e) {
		return fl(this, e);
	}
	destroy() {
		this.docView && (Fl(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Iu(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Ko());
	}
	get isDestroyed() {
		return this.docView == null;
	}
	dispatchEvent(e) {
		return zl(this, e);
	}
	domSelectionRange() {
		let e = this.domSelection();
		return e ? vs && this.root.nodeType === 11 && rs(this.dom.ownerDocument) == this.dom && Gu(this, e) || e : {
			focusNode: null,
			focusOffset: 0,
			anchorNode: null,
			anchorOffset: 0
		};
	}
	domSelection() {
		return this.root.getSelection();
	}
};
rd.prototype.dispatch = function(e) {
	let t = this._props.dispatchTransaction;
	t ? t.call(this, e) : this.updateState(this.state.apply(e));
};
function id(e) {
	let t = Object.create(null);
	return t.class = "ProseMirror", t.contenteditable = String(e.editable), e.someProp("attributes", (n) => {
		if (typeof n == "function" && (n = n(e.state)), n) for (let e in n) e == "class" ? t.class += " " + n[e] : e == "style" ? t.style = (t.style ? t.style + ";" : "") + n[e] : !t[e] && e != "contenteditable" && e != "nodeName" && (t[e] = String(n[e]));
	}), t.translate ||= "no", [B.node(0, e.state.doc.content.size, t)];
}
function ad(e) {
	if (e.markCursor) {
		let t = document.createElement("img");
		t.className = "ProseMirror-separator", t.setAttribute("mark-placeholder", "true"), t.setAttribute("alt", ""), e.cursorWrapper = {
			dom: t,
			deco: B.widget(e.state.selection.from, t, {
				raw: !0,
				marks: e.markCursor
			})
		};
	} else e.cursorWrapper = null;
}
function od(e) {
	return !e.someProp("editable", (t) => t(e.state) === !1);
}
function sd(e, t) {
	let n = Math.min(e.$anchor.sharedDepth(e.head), t.$anchor.sharedDepth(t.head));
	return e.$anchor.start(n) != t.$anchor.start(n);
}
function cd(e) {
	let t = Object.create(null);
	function n(e) {
		for (let n in e) Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n]);
	}
	return e.someProp("nodeViews", n), e.someProp("markViews", n), t;
}
function ld(e, t) {
	let n = 0, r = 0;
	for (let r in e) {
		if (e[r] != t[r]) return !0;
		n++;
	}
	for (let e in t) r++;
	return n != r;
}
function ud(e) {
	if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) throw RangeError("Plugins passed directly to the view must not have a state component");
}
for (var dd = {
	8: "Backspace",
	9: "Tab",
	10: "Enter",
	12: "NumLock",
	13: "Enter",
	16: "Shift",
	17: "Control",
	18: "Alt",
	20: "CapsLock",
	27: "Escape",
	32: " ",
	33: "PageUp",
	34: "PageDown",
	35: "End",
	36: "Home",
	37: "ArrowLeft",
	38: "ArrowUp",
	39: "ArrowRight",
	40: "ArrowDown",
	44: "PrintScreen",
	45: "Insert",
	46: "Delete",
	59: ";",
	61: "=",
	91: "Meta",
	92: "Meta",
	106: "*",
	107: "+",
	108: ",",
	109: "-",
	110: ".",
	111: "/",
	144: "NumLock",
	145: "ScrollLock",
	160: "Shift",
	161: "Shift",
	162: "Control",
	163: "Control",
	164: "Alt",
	165: "Alt",
	173: "-",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
}, fd = {
	48: ")",
	49: "!",
	50: "@",
	51: "#",
	52: "$",
	53: "%",
	54: "^",
	55: "&",
	56: "*",
	57: "(",
	59: ":",
	61: "+",
	173: "_",
	186: ":",
	187: "+",
	188: "<",
	189: "_",
	190: ">",
	191: "?",
	192: "~",
	219: "{",
	220: "|",
	221: "}",
	222: "\""
}, pd = typeof navigator < "u" && /Mac/.test(navigator.platform), md = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), hd = 0; hd < 10; hd++) dd[48 + hd] = dd[96 + hd] = String(hd);
for (var hd = 1; hd <= 24; hd++) dd[hd + 111] = "F" + hd;
for (var hd = 65; hd <= 90; hd++) dd[hd] = String.fromCharCode(hd + 32), fd[hd] = String.fromCharCode(hd);
for (var gd in dd) fd.hasOwnProperty(gd) || (fd[gd] = dd[gd]);
function _d(e) {
	var t = !(pd && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey || md && e.shiftKey && e.key && e.key.length == 1 || e.key == "Unidentified") && e.key || (e.shiftKey ? fd : dd)[e.keyCode] || e.key || "Unidentified";
	return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
//#endregion
//#region ../../node_modules/prosemirror-keymap/dist/index.js
var vd = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), yd = typeof navigator < "u" && /Win/.test(navigator.platform);
function bd(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n == "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) vd ? o = !0 : i = !0;
		else throw Error("Unrecognized modifier name: " + n);
	}
	return r && (n = "Alt-" + n), i && (n = "Ctrl-" + n), o && (n = "Meta-" + n), a && (n = "Shift-" + n), n;
}
function xd(e) {
	let t = Object.create(null);
	for (let n in e) t[bd(n)] = e[n];
	return t;
}
function Sd(e, t, n = !0) {
	return t.altKey && (e = "Alt-" + e), t.ctrlKey && (e = "Ctrl-" + e), t.metaKey && (e = "Meta-" + e), n && t.shiftKey && (e = "Shift-" + e), e;
}
function Cd(e) {
	return new R({ props: { handleKeyDown: wd(e) } });
}
function wd(e) {
	let t = xd(e);
	return function(e, n) {
		let r = _d(n), i, a = t[Sd(r, n)];
		if (a && a(e.state, e.dispatch, e)) return !0;
		if (r.length == 1 && r != " ") {
			if (n.shiftKey) {
				let i = t[Sd(r, n, !1)];
				if (i && i(e.state, e.dispatch, e)) return !0;
			}
			if ((n.altKey || n.metaKey || n.ctrlKey) && !(yd && n.ctrlKey && n.altKey) && (i = dd[n.keyCode]) && i != r) {
				let r = t[Sd(i, n)];
				if (r && r(e.state, e.dispatch, e)) return !0;
			}
		}
		return !1;
	};
}
//#endregion
//#region ../../node_modules/@tiptap/core/dist/index.js
var Td = Object.defineProperty, Ed = (e, t) => {
	for (var n in t) Td(e, n, {
		get: t[n],
		enumerable: !0
	});
};
function Dd(e) {
	let { state: t, transaction: n } = e, { selection: r } = n, { doc: i } = n, { storedMarks: a } = n;
	return {
		...t,
		apply: t.apply.bind(t),
		applyTransaction: t.applyTransaction.bind(t),
		plugins: t.plugins,
		schema: t.schema,
		reconfigure: t.reconfigure.bind(t),
		toJSON: t.toJSON.bind(t),
		get storedMarks() {
			return a;
		},
		get selection() {
			return r;
		},
		get doc() {
			return i;
		},
		get tr() {
			return r = n.selection, i = n.doc, a = n.storedMarks, n;
		}
	};
}
var Od = class {
	constructor(e) {
		this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
	}
	get hasCustomState() {
		return !!this.customState;
	}
	get state() {
		return this.customState || this.editor.state;
	}
	get commands() {
		let { rawCommands: e, editor: t, state: n } = this, { view: r } = t, { tr: i } = n, a = this.buildProps(i);
		return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
			let n = t(...e)(a);
			return !i.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(i), n;
		}]));
	}
	get chain() {
		return () => this.createChain();
	}
	get can() {
		return () => this.createCan();
	}
	createChain(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = [], s = !!e, c = e || i.tr, l = () => (!s && t && !c.getMeta("preventDispatch") && !this.hasCustomState && a.dispatch(c), o.every((e) => e === !0)), u = {
			...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
				let r = this.buildProps(c, t), i = n(...e)(r);
				return o.push(i), u;
			}])),
			run: l
		};
		return u;
	}
	createCan(e) {
		let { rawCommands: t, state: n } = this, r = e || n.tr, i = this.buildProps(r, !1);
		return {
			...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({
				...i,
				dispatch: void 0
			})])),
			chain: () => this.createChain(r, !1)
		};
	}
	buildProps(e, t = !0) {
		let { rawCommands: n, editor: r, state: i } = this, { view: a } = r, o = {
			tr: e,
			editor: r,
			view: a,
			state: Dd({
				state: i,
				transaction: e
			}),
			dispatch: t ? () => void 0 : void 0,
			chain: () => this.createChain(e, t),
			can: () => this.createCan(e),
			get commands() {
				return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(o)]));
			}
		};
		return o;
	}
}, kd = {};
Ed(kd, {
	blur: () => Ad,
	clearContent: () => jd,
	clearNodes: () => Md,
	command: () => Nd,
	createParagraphNear: () => Pd,
	cut: () => Fd,
	deleteCurrentNode: () => Id,
	deleteNode: () => Rd,
	deleteRange: () => zd,
	deleteSelection: () => Ud,
	enter: () => Wd,
	exitCode: () => Gd,
	extendMarkRange: () => Qd,
	first: () => $d,
	focus: () => sf,
	forEach: () => cf,
	insertContent: () => lf,
	insertContentAt: () => hf,
	insertDefaultBlock: () => _f,
	joinBackward: () => bf,
	joinDown: () => yf,
	joinForward: () => xf,
	joinItemBackward: () => Sf,
	joinItemForward: () => Cf,
	joinTextblockBackward: () => wf,
	joinTextblockForward: () => Tf,
	joinUp: () => vf,
	keyboardShortcut: () => Of,
	lift: () => Af,
	liftEmptyBlock: () => jf,
	liftListItem: () => Mf,
	newlineInCode: () => Nf,
	resetAttributes: () => If,
	scrollIntoView: () => Lf,
	selectAll: () => Rf,
	selectNodeBackward: () => zf,
	selectNodeForward: () => Bf,
	selectParentNode: () => Vf,
	selectTextblockEnd: () => Hf,
	selectTextblockStart: () => Uf,
	setContent: () => Gf,
	setMark: () => Bp,
	setMeta: () => Vp,
	setNode: () => Hp,
	setNodeSelection: () => Up,
	setTextDirection: () => Wp,
	setTextSelection: () => Gp,
	sinkListItem: () => Kp,
	splitBlock: () => Jp,
	splitListItem: () => Yp,
	toggleList: () => tm,
	toggleMark: () => nm,
	toggleNode: () => rm,
	toggleWrap: () => im,
	undoInputRule: () => am,
	unsetAllMarks: () => om,
	unsetMark: () => sm,
	unsetTextDirection: () => cm,
	updateAttributes: () => lm,
	wrapIn: () => um,
	wrapInList: () => dm
});
var Ad = () => ({ editor: e, view: t }) => (requestAnimationFrame(() => {
	var n;
	e.isDestroyed || (t.dom.blur(), (n = window == null ? void 0 : window.getSelection()) == null || n.removeAllRanges());
}), !0), jd = (e = !0) => ({ commands: t }) => t.setContent("", { emitUpdate: e }), Md = () => ({ state: e, tr: t, dispatch: n }) => {
	let { selection: r } = t, { ranges: i } = r;
	return n && i.forEach(({ $from: n, $to: r }) => {
		e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
			if (e.type.isText) return;
			let { doc: r, mapping: i } = t, a = r.resolve(i.map(n)), o = r.resolve(i.map(n + e.nodeSize)), s = a.blockRange(o);
			if (!s) return;
			let c = Ui(s);
			if (e.type.isTextblock) {
				let { defaultType: e } = a.parent.contentMatchAt(a.index());
				t.setNodeMarkup(s.start, e);
			}
			(c || c === 0) && t.lift(s, c);
		});
	}), !0;
}, Nd = (e) => (t) => e(t), Pd = () => ({ state: e, dispatch: t }) => _o(e, t), Fd = (e, t) => ({ editor: n, tr: r }) => {
	let { state: i } = n, a = i.doc.slice(e.from, e.to);
	r.deleteRange(e.from, e.to);
	let o = r.mapping.map(t);
	return r.insert(o, a.content), r.setSelection(new I(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, Id = () => ({ tr: e, dispatch: t }) => {
	let { selection: n } = e, r = n.$anchor.node();
	if (r.content.size > 0) return !1;
	let i = e.selection.$anchor;
	for (let n = i.depth; n > 0; --n) if (i.node(n).type === r.type) {
		if (t) {
			let t = i.before(n), r = i.after(n);
			e.delete(t, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
};
function Ld(e, t) {
	if (typeof e == "string") {
		if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
		return t.nodes[e];
	}
	return e;
}
var Rd = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let i = Ld(e, n.schema), a = t.selection.$anchor;
	for (let e = a.depth; e > 0; --e) if (a.node(e).type === i) {
		if (r) {
			let n = a.before(e), r = a.after(e);
			t.delete(n, r).scrollIntoView();
		}
		return !0;
	}
	return !1;
}, zd = (e) => ({ tr: t, dispatch: n }) => {
	let { from: r, to: i } = e;
	return n && t.delete(r, i), !0;
}, Bd = (e) => e.content ? /^text(\*|\+)/.test(e.content) : !1, Vd = (e, t, n) => {
	if (!e.parent.isInline || n === "left" && e.pos > e.start() || n === "right" && e.pos < e.end()) return e.pos;
	let r = t.nodes[e.parent.type.name].spec;
	return Bd(r) ? n === "left" ? e.start() - 1 : e.end() + 1 : e.pos;
}, Hd = (e, t, n) => ({
	from: Vd(e, n, "left"),
	to: Vd(t, n, "right")
}), Ud = () => ({ state: e, dispatch: t }) => {
	if (e.selection.empty) return !1;
	if (t) {
		let n = e.tr, { ranges: r } = e.selection, i = n.steps.length;
		r.forEach((t) => {
			let r = n.mapping.slice(i), { from: a, to: o } = Hd(n.doc.resolve(r.map(t.$from.pos)), n.doc.resolve(r.map(t.$to.pos)), e.schema);
			n.deleteRange(a, o);
		}), n.selection.empty || n.setSelection(I.near(n.doc.resolve(n.selection.from))), n.scrollIntoView(), t(n);
	}
	return !0;
}, Wd = () => ({ commands: e }) => e.keyboardShortcut("Enter"), Gd = () => ({ state: e, dispatch: t }) => go(e, t);
function Kd(e) {
	return Object.prototype.toString.call(e) === "[object RegExp]";
}
function qd(e, t, n = { strict: !0 }) {
	let r = Object.keys(t);
	return r.length ? r.every((r) => n.strict ? t[r] === e[r] : Kd(t[r]) ? t[r].test(e[r]) : t[r] === e[r]) : !0;
}
function Jd(e, t, n = {}) {
	return e.find((e) => e.type === t && qd(Object.fromEntries(Object.keys(n).map((t) => [t, e.attrs[t]])), n));
}
function Yd(e, t, n = {}) {
	return !!Jd(e, t, n);
}
function Xd(e, t, n) {
	if (!e || !t) return;
	let r = e.parent.childAfter(e.parentOffset);
	if ((!r.node || !r.node.marks.some((e) => e.type === t)) && (r = e.parent.childBefore(e.parentOffset)), !r.node || !r.node.marks.some((e) => e.type === t)) return;
	if (!n) {
		let e = r.node.marks.find((e) => e.type === t);
		e && (n = e.attrs);
	}
	if (!Jd([...r.node.marks], t, n)) return;
	let i = r.index, a = e.start() + r.offset, o = i + 1, s = a + r.node.nodeSize;
	for (; i > 0 && Yd([...e.parent.child(i - 1).marks], t, n);) --i, a -= e.parent.child(i).nodeSize;
	for (; o < e.parent.childCount && Yd([...e.parent.child(o).marks], t, n);) s += e.parent.child(o).nodeSize, o += 1;
	return {
		from: a,
		to: s
	};
}
function Zd(e, t) {
	if (typeof e == "string") {
		if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
		return t.marks[e];
	}
	return e;
}
var Qd = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = Zd(e, r.schema), { doc: o, selection: s } = n, { $from: c, from: l, to: u } = s;
	if (i) {
		let e = Xd(c, a, t);
		if (e && e.from <= l && e.to >= u) {
			let t = I.create(o, e.from, e.to);
			n.setSelection(t);
		}
	}
	return !0;
}, $d = (e) => (t) => {
	let n = typeof e == "function" ? e(t) : e;
	for (let e = 0; e < n.length; e += 1) if (n[e](t)) return !0;
	return !1;
};
function ef(e) {
	return e instanceof I;
}
function tf(e = 0, t = 0, n = 0) {
	return Math.min(Math.max(e, t), n);
}
function nf(e, t = null) {
	if (!t) return null;
	let n = F.atStart(e), r = F.atEnd(e);
	if (t === "start" || t === !0) return n;
	if (t === "end") return r;
	let i = n.from, a = r.to;
	return t === "all" ? I.create(e, tf(0, i, a), tf(e.content.size, i, a)) : I.create(e, tf(t, i, a), tf(t, i, a));
}
function rf() {
	return ["Android"].includes(navigator.platform) || /android/i.test(navigator.userAgent);
}
function af() {
	return [
		"iPad Simulator",
		"iPhone Simulator",
		"iPod Simulator",
		"iPad",
		"iPhone",
		"iPod"
	].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function of() {
	return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
var sf = (e = null, t = {}) => ({ editor: n, view: r, tr: i, dispatch: a }) => {
	t = {
		scrollIntoView: !0,
		...t
	};
	let o = () => {
		(af() || rf()) && r.dom.focus(), of() && !af() && !rf() && r.dom.focus({ preventScroll: !0 }), requestAnimationFrame(() => {
			n.isDestroyed || (r.focus(), t?.scrollIntoView && n.commands.scrollIntoView());
		});
	};
	try {
		if (r.hasFocus() && e === null || e === !1) return !0;
	} catch {
		return !1;
	}
	if (a && e === null && !ef(n.state.selection)) return o(), !0;
	let s = nf(i.doc, e) || n.state.selection, c = n.state.selection.eq(s);
	return a && (c || i.setSelection(s), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, cf = (e, t) => (n) => e.every((e, r) => t(e, {
	...n,
	index: r
})), lf = (e, t) => ({ tr: n, commands: r }) => r.insertContentAt({
	from: n.selection.from,
	to: n.selection.to
}, e, t), uf = (e) => {
	let t = e.childNodes;
	for (let n = t.length - 1; n >= 0; --n) {
		let r = t[n];
		r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && uf(r);
	}
	return e;
};
function df(e) {
	if (typeof window > "u") throw Error("[tiptap error]: there is no window object available, so this function cannot be used");
	let t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
	return uf(n);
}
function ff(e, t, n) {
	if (e instanceof br || e instanceof M) return e;
	n = {
		slice: !0,
		parseOptions: {},
		...n
	};
	let r = typeof e == "object" && !!e, i = typeof e == "string";
	if (r) try {
		if (Array.isArray(e) && e.length > 0) return M.fromArray(e.map((e) => t.nodeFromJSON(e)));
		let r = t.nodeFromJSON(e);
		return n.errorOnInvalidContent && r.check(), r;
	} catch (r) {
		if (n.errorOnInvalidContent) throw Error("[tiptap error]: Invalid JSON content", { cause: r });
		return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), ff("", t, n);
	}
	if (i) {
		if (n.errorOnInvalidContent) {
			let r = !1, i = "", a = new Gr({
				topNode: t.spec.topNode,
				marks: t.spec.marks,
				nodes: t.spec.nodes.append({ __tiptap__private__unknown__catch__all__node: {
					content: "inline*",
					group: "block",
					parseDOM: [{
						tag: "*",
						getAttrs: (e) => (r = !0, i = typeof e == "string" ? e : e.outerHTML, null)
					}]
				} })
			});
			if (n.slice ? Yr.fromSchema(a).parseSlice(df(e), n.parseOptions) : Yr.fromSchema(a).parse(df(e), n.parseOptions), n.errorOnInvalidContent && r) throw Error("[tiptap error]: Invalid HTML content", { cause: /* @__PURE__ */ Error(`Invalid element found: ${i}`) });
		}
		let r = Yr.fromSchema(t);
		return n.slice ? r.parseSlice(df(e), n.parseOptions).content : r.parse(df(e), n.parseOptions);
	}
	return ff("", t, n);
}
function pf(e, t, n) {
	let r = e.steps.length - 1;
	if (r < t) return;
	let i = e.steps[r];
	if (!(i instanceof Ii || i instanceof Li)) return;
	let a = e.mapping.maps[r], o = 0;
	a.forEach((e, t, n, r) => {
		o === 0 && (o = r);
	}), e.setSelection(F.near(e.doc.resolve(o), n));
}
var mf = (e) => !("type" in e), hf = (e, t, n) => ({ tr: r, dispatch: i, editor: a }) => {
	if (i) {
		n = {
			parseOptions: a.options.parseOptions,
			updateSelection: !0,
			applyInputRules: !1,
			applyPasteRules: !1,
			...n
		};
		let i, o = (e) => {
			a.emit("contentError", {
				editor: a,
				error: e,
				disableCollaboration: () => {
					"collaboration" in a.storage && typeof a.storage.collaboration == "object" && a.storage.collaboration && (a.storage.collaboration.isDisabled = !0);
				}
			});
		}, s = {
			preserveWhitespace: "full",
			...n.parseOptions
		};
		if (!n.errorOnInvalidContent && !a.options.enableContentCheck && a.options.emitContentError) try {
			ff(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: !0
			});
		} catch (e) {
			o(e);
		}
		try {
			i = ff(t, a.schema, {
				parseOptions: s,
				errorOnInvalidContent: n.errorOnInvalidContent ?? a.options.enableContentCheck
			});
		} catch (e) {
			return o(e), !1;
		}
		let { from: c, to: l } = typeof e == "number" ? {
			from: e,
			to: e
		} : {
			from: e.from,
			to: e.to
		}, u = !0, d = !0;
		if ((mf(i) ? i : [i]).forEach((e) => {
			e.check(), u = u ? e.isText && e.marks.length === 0 : !1, d = d ? e.isBlock : !1;
		}), c === l && d) {
			let { parent: e } = r.doc.resolve(c);
			e.isTextblock && !e.type.spec.code && !e.childCount && (--c, l += 1);
		}
		let f;
		if (u) {
			if (Array.isArray(t)) f = t.map((e) => e.text || "").join("");
			else if (t instanceof M) {
				let e = "";
				t.forEach((t) => {
					t.text && (e += t.text);
				}), f = e;
			} else f = typeof t == "object" && t && t.text ? t.text : t;
			r.insertText(f, c, l);
		} else {
			f = i;
			let e = r.doc.resolve(c), t = e.node(), n = e.parentOffset === 0, a = t.isText || t.isTextblock, o = t.content.size > 0;
			n && a && o && d && (c = Math.max(0, c - 1)), r.replaceWith(c, l, f);
		}
		n.updateSelection && pf(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
			from: c,
			text: f
		}), n.applyPasteRules && r.setMeta("applyPasteRules", {
			from: c,
			text: f
		});
	}
	return !0;
};
function gf(e) {
	for (let t = 0; t < e.edgeCount; t += 1) {
		let { type: n } = e.edge(t);
		if (n.isTextblock && !n.hasRequiredAttrs()) return n;
	}
	return null;
}
var _f = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { pos: i, attrs: a, content: o, updateSelection: s = !0 } = e, c;
	c = typeof i == "number" ? t.doc.resolve(i) : i || t.selection.$from;
	let l = gf(c.parent.contentMatchAt(c.index()));
	if (!l) return !1;
	let u = Object.keys(l.spec.attrs || {}), d = a ? Object.fromEntries(Object.entries(a).filter(([e]) => u.includes(e))) : {}, f;
	if (o) {
		let e = ff(o, r.schema);
		f = l.createAndFill(d, e);
	} else f = l.createAndFill(d);
	return f ? (n && (t.insert(c.pos, f), s && pf(t, t.steps.length - 1, -1)), !0) : !1;
}, vf = () => ({ state: e, dispatch: t }) => uo(e, t), yf = () => ({ state: e, dispatch: t }) => fo(e, t), bf = () => ({ state: e, dispatch: t }) => $a(e, t), xf = () => ({ state: e, dispatch: t }) => so(e, t), Sf = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = oa(e.doc, e.selection.$from.pos, -1);
		return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, Cf = () => ({ state: e, dispatch: t, tr: n }) => {
	try {
		let r = oa(e.doc, e.selection.$from.pos, 1);
		return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
	} catch {
		return !1;
	}
}, wf = () => ({ state: e, dispatch: t }) => eo(e, t), Tf = () => ({ state: e, dispatch: t }) => to(e, t);
function Ef() {
	return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Df(e) {
	let t = e.split(/-(?!$)/), n = t[t.length - 1];
	n === "Space" && (n = " ");
	let r, i, a, o;
	for (let e = 0; e < t.length - 1; e += 1) {
		let n = t[e];
		if (/^(cmd|meta|m)$/i.test(n)) o = !0;
		else if (/^a(lt)?$/i.test(n)) r = !0;
		else if (/^(c|ctrl|control)$/i.test(n)) i = !0;
		else if (/^s(hift)?$/i.test(n)) a = !0;
		else if (/^mod$/i.test(n)) af() || Ef() ? o = !0 : i = !0;
		else throw Error(`Unrecognized modifier name: ${n}`);
	}
	return r && (n = `Alt-${n}`), i && (n = `Ctrl-${n}`), o && (n = `Meta-${n}`), a && (n = `Shift-${n}`), n;
}
var Of = (e) => ({ editor: t, view: n, tr: r, dispatch: i }) => {
	let a = Df(e).split(/-(?!$)/), o = a.find((e) => ![
		"Alt",
		"Ctrl",
		"Meta",
		"Shift"
	].includes(e)), s = new KeyboardEvent("keydown", {
		key: o === "Space" ? " " : o,
		altKey: a.includes("Alt"),
		ctrlKey: a.includes("Ctrl"),
		metaKey: a.includes("Meta"),
		shiftKey: a.includes("Shift"),
		bubbles: !0,
		cancelable: !0
	});
	return t.captureTransaction(() => {
		n.someProp("handleKeyDown", (e) => e(n, s));
	})?.steps.forEach((e) => {
		let t = e.map(r.mapping);
		t && i && r.maybeStep(t);
	}), !0;
};
function kf(e, t, n = {}) {
	let { from: r, to: i, empty: a } = e.selection, o = t ? Ld(t, e.schema) : null, s = [];
	e.doc.nodesBetween(r, i, (e, t) => {
		if (e.isText) return;
		let n = Math.max(r, t), a = Math.min(i, t + e.nodeSize);
		s.push({
			node: e,
			from: n,
			to: a
		});
	});
	let c = i - r, l = s.filter((e) => o ? o.name === e.node.type.name : !0).filter((e) => qd(e.node.attrs, n, { strict: !1 }));
	return a ? !!l.length : l.reduce((e, t) => e + t.to - t.from, 0) >= c;
}
var Af = (e, t = {}) => ({ state: n, dispatch: r }) => kf(n, Ld(e, n.schema), t) ? po(n, r) : !1, jf = () => ({ state: e, dispatch: t }) => vo(e, t), Mf = (e) => ({ state: t, dispatch: n }) => Ro(Ld(e, t.schema))(t, n), Nf = () => ({ state: e, dispatch: t }) => mo(e, t);
function Pf(e, t) {
	return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function Ff(e, t) {
	let n = typeof t == "string" ? [t] : t;
	return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {});
}
var If = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Pf(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = Ld(e, r.schema)), s === "mark" && (o = Zd(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
			a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, Ff(e.attrs, t))), o && e.marks.length && e.marks.forEach((a) => {
				o === a.type && (c = !0, i && n.addMark(r, r + e.nodeSize, o.create(Ff(a.attrs, t))));
			});
		});
	}), c;
}, Lf = () => ({ tr: e, dispatch: t }) => (t && e.scrollIntoView(), !0), Rf = () => ({ tr: e, dispatch: t }) => {
	if (t) {
		let t = new Fa(e.doc);
		e.setSelection(t);
	}
	return !0;
}, zf = () => ({ state: e, dispatch: t }) => io(e, t), Bf = () => ({ state: e, dispatch: t }) => co(e, t), Vf = () => ({ state: e, dispatch: t }) => xo(e, t), Hf = () => ({ state: e, dispatch: t }) => Do(e, t), Uf = () => ({ state: e, dispatch: t }) => Eo(e, t);
function Wf(e, t, n = {}, r = {}) {
	return ff(e, t, {
		slice: !1,
		parseOptions: n,
		errorOnInvalidContent: r.errorOnInvalidContent
	});
}
var Gf = (e, { errorOnInvalidContent: t, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: i, tr: a, dispatch: o, commands: s }) => {
	let { doc: c } = a;
	if (r.preserveWhitespace !== "full") {
		let s = Wf(e, i.schema, r, { errorOnInvalidContent: t ?? i.options.enableContentCheck });
		return o && a.replaceWith(0, c.content.size, s).setMeta("preventUpdate", !n), !0;
	}
	return o && a.setMeta("preventUpdate", !n), s.insertContentAt({
		from: 0,
		to: c.content.size
	}, e, {
		parseOptions: r,
		errorOnInvalidContent: t ?? i.options.enableContentCheck
	});
};
function Kf(e, t) {
	let n = Zd(t, e.schema), { from: r, to: i, empty: a } = e.selection, o = [];
	a ? (e.storedMarks && o.push(...e.storedMarks), o.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, i, (e) => {
		o.push(...e.marks);
	});
	let s = o.find((e) => e.type.name === n.name);
	return s ? { ...s.attrs } : {};
}
function qf(e, t) {
	let n = new Oa(e);
	return t.forEach((e) => {
		e.steps.forEach((e) => {
			n.step(e);
		});
	}), n;
}
function Jf(e, t, n) {
	let r = [];
	return e.nodesBetween(t.from, t.to, (e, t) => {
		n(e) && r.push({
			node: e,
			pos: t
		});
	}), r;
}
function Yf(e, t) {
	for (let n = e.depth; n > 0; --n) {
		let r = e.node(n);
		if (t(r)) return {
			pos: n > 0 ? e.before(n) : 0,
			start: e.start(n),
			depth: n,
			node: r
		};
	}
}
function Xf(e) {
	return (t) => Yf(t.$from, e);
}
function H(e, t, n) {
	return e.config[t] === void 0 && e.parent ? H(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
		...n,
		parent: e.parent ? H(e.parent, t, n) : null
	}) : e.config[t];
}
function Zf(e) {
	return e.map((e) => {
		let t = H(e, "addExtensions", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		return t ? [e, ...Zf(t())] : e;
	}).flat(10);
}
function Qf(e, t) {
	let n = li.fromSchema(t).serializeFragment(e), r = document.implementation.createHTMLDocument().createElement("div");
	return r.appendChild(n), r.innerHTML;
}
function $f(e) {
	return typeof e == "function";
}
function U(e, t = void 0, ...n) {
	return $f(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function ep(e = {}) {
	return Object.keys(e).length === 0 && e.constructor === Object;
}
function tp(e) {
	return {
		baseExtensions: e.filter((e) => e.type === "extension"),
		nodeExtensions: e.filter((e) => e.type === "node"),
		markExtensions: e.filter((e) => e.type === "mark")
	};
}
function np(e) {
	let t = [], { nodeExtensions: n, markExtensions: r } = tp(e), i = [...n, ...r], a = {
		default: null,
		validate: void 0,
		rendered: !0,
		renderHTML: null,
		parseHTML: null,
		keepOnSplit: !0,
		isRequired: !1
	}, o = n.filter((e) => e.name !== "text").map((e) => e.name), s = r.map((e) => e.name), c = [...o, ...s];
	return e.forEach((e) => {
		let n = H(e, "addGlobalAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage,
			extensions: i
		});
		n && n().forEach((e) => {
			let n;
			n = Array.isArray(e.types) ? e.types : e.types === "*" ? c : e.types === "nodes" ? o : e.types === "marks" ? s : [], n.forEach((n) => {
				Object.entries(e.attributes).forEach(([e, r]) => {
					t.push({
						type: n,
						name: e,
						attribute: {
							...a,
							...r
						}
					});
				});
			});
		});
	}), i.forEach((e) => {
		let n = H(e, "addAttributes", {
			name: e.name,
			options: e.options,
			storage: e.storage
		});
		if (!n) return;
		let r = n();
		Object.entries(r).forEach(([n, r]) => {
			let i = {
				...a,
				...r
			};
			typeof i?.default == "function" && (i.default = i.default()), i?.isRequired && i?.default === void 0 && delete i.default, t.push({
				type: e.name,
				name: n,
				attribute: i
			});
		});
	}), t;
}
function rp(e) {
	let t = [], n = "", r = !1, i = !1, a = 0, o = e.length;
	for (let s = 0; s < o; s += 1) {
		let o = e[s];
		if (o === "'" && !i) {
			r = !r, n += o;
			continue;
		}
		if (o === "\"" && !r) {
			i = !i, n += o;
			continue;
		}
		if (!r && !i) {
			if (o === "(") {
				a += 1, n += o;
				continue;
			}
			if (o === ")" && a > 0) {
				--a, n += o;
				continue;
			}
			if (o === ";" && a === 0) {
				t.push(n), n = "";
				continue;
			}
		}
		n += o;
	}
	return n && t.push(n), t;
}
function ip(e) {
	let t = [], n = rp(e || ""), r = n.length;
	for (let e = 0; e < r; e += 1) {
		let r = n[e], i = r.indexOf(":");
		if (i === -1) continue;
		let a = r.slice(0, i).trim(), o = r.slice(i + 1).trim();
		a && o && t.push([a, o]);
	}
	return t;
}
function ap(...e) {
	return e.filter((e) => !!e).reduce((e, t) => {
		let n = { ...e };
		return Object.entries(t).forEach(([e, t]) => {
			if (!n[e]) {
				n[e] = t;
				return;
			}
			if (e === "class") {
				let r = t ? String(t).split(" ") : [], i = n[e] ? n[e].split(" ") : [], a = r.filter((e) => !i.includes(e));
				n[e] = [...i, ...a].join(" ");
			} else if (e === "style") {
				let r = new Map([...ip(n[e]), ...ip(t)]);
				n[e] = Array.from(r.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
			} else n[e] = t;
		}), n;
	}, {});
}
function op(e, t) {
	return t.filter((t) => t.type === e.type.name).filter((e) => e.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : { [t.name]: e.attrs[t.name] }).reduce((e, t) => ap(e, t), {});
}
function sp(e) {
	return typeof e == "string" ? e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" ? !0 : e === "false" ? !1 : e : e;
}
function cp(e, t) {
	return "style" in e ? e : {
		...e,
		getAttrs: (n) => {
			let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
			if (r === !1) return !1;
			let i = t.reduce((e, t) => {
				let r = t.attribute.parseHTML ? t.attribute.parseHTML(n) : sp(n.getAttribute(t.name));
				return r == null ? e : {
					...e,
					[t.name]: r
				};
			}, {});
			return {
				...r,
				...i
			};
		}
	};
}
function lp(e) {
	return Object.fromEntries(Object.entries(e).filter(([e, t]) => e === "attrs" && ep(t) ? !1 : t != null));
}
function up(e) {
	let t = {};
	return !e?.attribute?.isRequired && "default" in (e?.attribute || {}) && (t.default = e.attribute.default), e?.attribute?.validate !== void 0 && (t.validate = e.attribute.validate), [e.name, t];
}
function dp(e, t) {
	let n = np(e), { nodeExtensions: r, markExtensions: i } = tp(e);
	return new Gr({
		topNode: r.find((e) => H(e, "topNode"))?.name,
		nodes: Object.fromEntries(r.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = lp({
				...e.reduce((e, t) => {
					let n = H(t, "extendNodeSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				content: U(H(r, "content", a)),
				marks: U(H(r, "marks", a)),
				group: U(H(r, "group", a)),
				inline: U(H(r, "inline", a)),
				atom: U(H(r, "atom", a)),
				selectable: U(H(r, "selectable", a)),
				draggable: U(H(r, "draggable", a)),
				code: U(H(r, "code", a)),
				whitespace: U(H(r, "whitespace", a)),
				linebreakReplacement: U(H(r, "linebreakReplacement", a)),
				defining: U(H(r, "defining", a)),
				isolating: U(H(r, "isolating", a)),
				attrs: Object.fromEntries(i.map(up))
			}), s = U(H(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => cp(e, i)));
			let c = H(r, "renderHTML", a);
			c && (o.toDOM = (e) => c({
				node: e,
				HTMLAttributes: op(e, i)
			}));
			let l = H(r, "renderText", a);
			return l && (o.toText = l), [r.name, o];
		})),
		marks: Object.fromEntries(i.map((r) => {
			let i = n.filter((e) => e.type === r.name), a = {
				name: r.name,
				options: r.options,
				storage: r.storage,
				editor: t
			}, o = lp({
				...e.reduce((e, t) => {
					let n = H(t, "extendMarkSchema", a);
					return {
						...e,
						...n ? n(r) : {}
					};
				}, {}),
				inclusive: U(H(r, "inclusive", a)),
				excludes: U(H(r, "excludes", a)),
				group: U(H(r, "group", a)),
				spanning: U(H(r, "spanning", a)),
				code: U(H(r, "code", a)),
				attrs: Object.fromEntries(i.map(up))
			}), s = U(H(r, "parseHTML", a));
			s && (o.parseDOM = s.map((e) => cp(e, i)));
			let c = H(r, "renderHTML", a);
			return c && (o.toDOM = (e) => c({
				mark: e,
				HTMLAttributes: op(e, i)
			})), [r.name, o];
		}))
	});
}
function fp(e) {
	let t = e.filter((t, n) => e.indexOf(t) !== n);
	return Array.from(new Set(t));
}
function pp(e) {
	return e.sort((e, t) => {
		let n = H(e, "priority") || 100, r = H(t, "priority") || 100;
		return n > r ? -1 : +(n < r);
	});
}
function mp(e) {
	let t = pp(Zf(e)), n = fp(t.map((e) => e.name));
	return n.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${n.map((e) => `'${e}'`).join(", ")}]. This can lead to issues.`), t;
}
function hp(e, t) {
	return dp(mp(e), t);
}
function gp(e, t, n) {
	let { from: r, to: i } = t, { blockSeparator: a = "\n\n", textSerializers: o = {} } = n || {}, s = "";
	return e.nodesBetween(r, i, (e, n, c, l) => {
		e.isBlock && n > r && (s += a);
		let u = o?.[e.type.name];
		if (u) return c && (s += u({
			node: e,
			pos: n,
			parent: c,
			index: l,
			range: t
		})), !1;
		e.isText && (s += (e?.text)?.slice(Math.max(r, n) - n, i - n));
	}), s;
}
function _p(e, t) {
	return gp(e, {
		from: 0,
		to: e.content.size
	}, t);
}
function vp(e) {
	return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
function yp(e, t) {
	let n = Ld(t, e.schema), { from: r, to: i } = e.selection, a = [];
	e.doc.nodesBetween(r, i, (e) => {
		a.push(e);
	});
	let o = a.reverse().find((e) => e.type.name === n.name);
	return o ? { ...o.attrs } : {};
}
function bp(e, t) {
	let n = Pf(typeof t == "string" ? t : t.name, e.schema);
	return n === "node" ? yp(e, t) : n === "mark" ? Kf(e, t) : {};
}
function xp(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function Sp(e) {
	let t = xp(e);
	return t.length === 1 ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some((t) => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to));
}
function Cp(e) {
	let { mapping: t, steps: n } = e, r = [];
	return t.maps.forEach((e, i) => {
		let a = [];
		if (e.ranges.length) e.forEach((e, t) => {
			a.push({
				from: e,
				to: t
			});
		});
		else {
			let { from: e, to: t } = n[i];
			if (e === void 0 || t === void 0) return;
			a.push({
				from: e,
				to: t
			});
		}
		a.forEach(({ from: e, to: n }) => {
			let a = t.slice(i).map(e, -1), o = t.slice(i).map(n), s = t.invert().map(a, -1), c = t.invert().map(o);
			r.push({
				oldRange: {
					from: s,
					to: c
				},
				newRange: {
					from: a,
					to: o
				}
			});
		});
	}), Sp(r);
}
function wp(e, t, n) {
	let r = [];
	return e === t ? n.resolve(e).marks().forEach((t) => {
		let i = Xd(n.resolve(e), t.type);
		i && r.push({
			mark: t,
			...i
		});
	}) : n.nodesBetween(e, t, (e, t) => {
		!e || e?.nodeSize === void 0 || r.push(...e.marks.map((n) => ({
			from: t,
			to: t + e.nodeSize,
			mark: n
		})));
	}), r;
}
function Tp(e, t) {
	return t.nodes[e] || t.marks[e] || null;
}
function Ep(e, t, n) {
	return Object.fromEntries(Object.entries(n).filter(([n]) => {
		let r = e.find((e) => e.type === t && e.name === n);
		return r ? r.attribute.keepOnSplit : !1;
	}));
}
var Dp = (e, t = 500) => {
	let n = "", r = e.parentOffset;
	return e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, i, a) => {
		var o;
		let s = (o = e.type.spec).toText?.call(o, {
			node: e,
			pos: t,
			parent: i,
			index: a
		}) || e.textContent || "%leaf%";
		n += e.isAtom && !e.isText ? s : s.slice(0, Math.max(0, r - t));
	}), n;
};
function Op(e, t, n = {}) {
	let { empty: r, ranges: i } = e.selection, a = t ? Zd(t, e.schema) : null;
	if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((e) => a ? a.name === e.type.name : !0).find((e) => qd(e.attrs, n, { strict: !1 }));
	let o = 0, s = [];
	if (i.forEach(({ $from: t, $to: n }) => {
		let r = t.pos, i = n.pos;
		e.doc.nodesBetween(r, i, (e, t) => {
			if (a && e.inlineContent && !e.type.allowsMarkType(a)) return !1;
			if (!e.isText && !e.marks.length) return;
			let n = Math.max(r, t), c = Math.min(i, t + e.nodeSize), l = c - n;
			o += l, s.push(...e.marks.map((e) => ({
				mark: e,
				from: n,
				to: c
			})));
		});
	}), o === 0) return !1;
	let c = s.filter((e) => a ? a.name === e.mark.type.name : !0).filter((e) => qd(e.mark.attrs, n, { strict: !1 })).reduce((e, t) => e + t.to - t.from, 0), l = s.filter((e) => a ? e.mark.type !== a && e.mark.type.excludes(a) : !0).reduce((e, t) => e + t.to - t.from, 0);
	return (c > 0 ? c + l : c) >= o;
}
function kp(e, t, n = {}) {
	if (!t) return kf(e, null, n) || Op(e, null, n);
	let r = Pf(t, e.schema);
	return r === "node" ? kf(e, t, n) : r === "mark" ? Op(e, t, n) : !1;
}
function Ap(e, t) {
	return Array.isArray(t) ? t.some((t) => (typeof t == "string" ? t : t.name) === e.name) : t;
}
function jp(e, t) {
	let { nodeExtensions: n } = tp(t), r = n.find((t) => t.name === e);
	if (!r) return !1;
	let i = U(H(r, "group", {
		name: r.name,
		options: r.options,
		storage: r.storage
	}));
	return typeof i == "string" ? i.split(" ").includes("list") : !1;
}
function Mp(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
	if (n) {
		if (e.type.name === "hardBreak") return !0;
		if (e.isText) return !/\S/.test(e.text ?? "");
	}
	if (e.isText) return !e.text;
	if (e.isAtom || e.isLeaf) return !1;
	if (e.content.childCount === 0) return !0;
	if (t) {
		let r = !0;
		return e.content.forEach((e) => {
			r !== !1 && (Mp(e, {
				ignoreWhitespace: n,
				checkChildren: t
			}) || (r = !1));
		}), r;
	}
	return !1;
}
function Np(e) {
	return e instanceof L;
}
function Pp({ selection: e, pos: t, nodeSize: n, selectedOnTextSelection: r = !1 }) {
	let { from: i, to: a } = e;
	return !!(i <= t && a >= t + n || r && ef(e) && i > t && a < t + n);
}
var Fp = class e {
	constructor(e) {
		this.position = e;
	}
	static fromJSON(t) {
		return new e(t.position);
	}
	toJSON() {
		return { position: this.position };
	}
};
function Ip(e, t) {
	let n = t.mapping.mapResult(e.position);
	return {
		position: new Fp(n.pos),
		mapResult: n
	};
}
function Lp(e) {
	return new Fp(e);
}
function Rp(e, t, n) {
	let r = e.state.doc.content.size, i = tf(t, 0, r), a = tf(n, 0, r), o = e.coordsAtPos(i), s = e.coordsAtPos(a, -1), c = Math.min(o.top, s.top), l = Math.max(o.bottom, s.bottom), u = Math.min(o.left, s.left), d = Math.max(o.right, s.right), f = {
		top: c,
		bottom: l,
		left: u,
		right: d,
		width: d - u,
		height: l - c,
		x: u,
		y: c
	};
	return {
		...f,
		toJSON: () => f
	};
}
function zp(e, t, n) {
	let { selection: r } = t, i = null;
	if (ef(r) && (i = r.$cursor), i) {
		let t = e.storedMarks ?? i.marks();
		return i.parent.type.allowsMarkType(n) && (!!n.isInSet(t) || !t.some((e) => e.type.excludes(n)));
	}
	let { ranges: a } = r;
	return a.some(({ $from: t, $to: r }) => {
		let i = t.depth === 0 ? e.doc.inlineContent && e.doc.type.allowsMarkType(n) : !1;
		return e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
			if (i) return !1;
			if (e.isInline) {
				let t = !r || r.type.allowsMarkType(n), a = !!n.isInSet(e.marks) || !e.marks.some((e) => e.type.excludes(n));
				i = t && a;
			}
			return !i;
		}), i;
	});
}
var Bp = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = n, { empty: o, ranges: s } = a, c = Zd(e, r.schema);
	if (i) if (o) {
		let e = Kf(r, c);
		n.addStoredMark(c.create({
			...e,
			...t
		}));
	} else s.forEach((e) => {
		let i = e.$from.pos, a = e.$to.pos;
		r.doc.nodesBetween(i, a, (e, r) => {
			let o = Math.max(r, i), s = Math.min(r + e.nodeSize, a);
			e.marks.find((e) => e.type === c) ? e.marks.forEach((e) => {
				c === e.type && n.addMark(o, s, c.create({
					...e.attrs,
					...t
				}));
			}) : n.addMark(o, s, c.create(t));
		});
	});
	return zp(r, n, c);
}, Vp = (e, t) => ({ tr: n }) => (n.setMeta(e, t), !0), Hp = (e, t = {}) => ({ state: n, dispatch: r, chain: i }) => {
	let a = Ld(e, n.schema), o;
	return n.selection.$anchor.sameParent(n.selection.$head) && (o = n.selection.$anchor.parent.attrs), a.isTextblock ? i().command(({ commands: e }) => ko(a, {
		...o,
		...t
	})(n) ? !0 : e.clearNodes()).command(({ state: e }) => ko(a, {
		...o,
		...t
	})(e, r)).run() : (console.warn("[tiptap warn]: Currently \"setNode()\" only supports text block nodes."), !1);
}, Up = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, r = tf(e, 0, n.content.size), i = L.create(n, r);
		t.setSelection(i);
	}
	return !0;
}, Wp = (e, t) => ({ tr: n, state: r, dispatch: i }) => {
	let { selection: a } = r, o, s;
	return typeof t == "number" ? (o = t, s = t) : t && "from" in t && "to" in t ? (o = t.from, s = t.to) : (o = a.from, s = a.to), i && n.doc.nodesBetween(o, s, (t, r) => {
		t.isText || n.setNodeMarkup(r, void 0, {
			...t.attrs,
			dir: e
		});
	}), !0;
}, Gp = (e) => ({ tr: t, dispatch: n }) => {
	if (n) {
		let { doc: n } = t, { from: r, to: i } = typeof e == "number" ? {
			from: e,
			to: e
		} : e, a = I.atStart(n).from, o = I.atEnd(n).to, s = tf(r, a, o), c = tf(i, a, o), l = I.create(n, s, c);
		t.setSelection(l);
	}
	return !0;
}, Kp = (e) => ({ state: t, dispatch: n }) => Vo(Ld(e, t.schema))(t, n);
function qp(e, t) {
	let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
	if (n) {
		let r = n.filter((e) => t?.includes(e.type.name));
		e.tr.ensureMarks(r);
	}
}
var Jp = ({ keepMarks: e = !0 } = {}) => ({ tr: t, state: n, dispatch: r, editor: i }) => {
	let { selection: a, doc: o } = t, { $from: s, $to: c } = a, l = i.extensionManager.attributes, u = Ep(l, s.node().type.name, s.node().attrs);
	if (a instanceof L && a.node.isBlock) return !s.parentOffset || !ta(o, s.pos) ? !1 : (r && (e && qp(n, i.extensionManager.splittableMarks), t.split(s.pos).scrollIntoView()), !0);
	if (!s.parent.isBlock) return !1;
	let d = c.parentOffset === c.parent.content.size, f = s.depth === 0 ? void 0 : gf(s.node(-1).contentMatchAt(s.indexAfter(-1))), p = d && f ? [{
		type: f,
		attrs: u
	}] : void 0, m = ta(t.doc, t.mapping.map(s.pos), 1, p);
	if (!p && !m && ta(t.doc, t.mapping.map(s.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, p = f ? [{
		type: f,
		attrs: u
	}] : void 0), r) {
		if (m && (a instanceof I && t.deleteSelection(), t.split(t.mapping.map(s.pos), 1, p), f && !d && !s.parentOffset && s.parent.type !== f)) {
			let e = t.mapping.map(s.before()), n = t.doc.resolve(e);
			s.node(-1).canReplaceWith(n.index(), n.index() + 1, f) && t.setNodeMarkup(t.mapping.map(s.before()), f);
		}
		e && qp(n, i.extensionManager.splittableMarks), t.scrollIntoView();
	}
	return m;
}, Yp = (e, t = {}) => ({ tr: n, state: r, dispatch: i, editor: a }) => {
	let o = Ld(e, r.schema), { $from: s, $to: c } = r.selection, l = r.selection.node;
	if (l && l.isBlock || s.depth < 2 || !s.sameParent(c)) return !1;
	let u = s.node(-1);
	if (u.type !== o) return !1;
	let d = a.extensionManager.attributes;
	if (s.parent.content.size === 0 && s.node(-1).childCount === s.indexAfter(-1)) {
		if (s.depth === 2 || s.node(-3).type !== o || s.index(-2) !== s.node(-2).childCount - 1) return !1;
		if (i) {
			let e = M.empty, r = s.index(-1) ? 1 : s.index(-2) ? 2 : 3;
			for (let t = s.depth - r; t >= s.depth - 3; --t) e = M.from(s.node(t).copy(e));
			let i = s.indexAfter(-1) < s.node(-2).childCount ? 1 : s.indexAfter(-2) < s.node(-3).childCount ? 2 : 3, a = {
				...Ep(d, s.node().type.name, s.node().attrs),
				...t
			}, c = o.contentMatch.defaultType?.createAndFill(a) || void 0;
			e = e.append(M.from(o.createAndFill(null, c) || void 0));
			let l = s.before(s.depth - (r - 1));
			n.replace(l, s.after(-i), new P(e, 4 - r, 0));
			let u = -1;
			n.doc.nodesBetween(l, n.doc.content.size, (e, t) => {
				if (u > -1) return !1;
				e.isTextblock && e.content.size === 0 && (u = t + 1);
			}), u > -1 && n.setSelection(I.near(n.doc.resolve(u))), n.scrollIntoView();
		}
		return !0;
	}
	let f = c.pos === s.end() ? u.contentMatchAt(0).defaultType : null, p = {
		...Ep(d, u.type.name, u.attrs),
		...t
	}, m = {
		...Ep(d, s.node().type.name, s.node().attrs),
		...t
	};
	n.delete(s.pos, c.pos);
	let h = f ? [{
		type: o,
		attrs: p
	}, {
		type: f,
		attrs: m
	}] : [{
		type: o,
		attrs: p
	}];
	if (!ta(n.doc, s.pos, 2)) return !1;
	if (i) {
		let { selection: e, storedMarks: t } = r, { splittableMarks: o } = a.extensionManager, c = t || e.$to.parentOffset && e.$from.marks();
		if (n.split(s.pos, 2, h).scrollIntoView(), !c || !i) return !0;
		let l = c.filter((e) => o.includes(e.type.name));
		n.ensureMarks(l);
	}
	return !0;
};
function Xp(e) {
	return !e || e === "1" ? null : e;
}
function Zp(e, t) {
	return Xp(e) === Xp(t);
}
var Qp = (e, t) => {
	let n = Xf((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && ra(e.doc, n.pos)) || !Zp(n.node.attrs.type, i?.attrs.type) || e.join(n.pos), !0;
}, $p = (e, t) => {
	let n = Xf((e) => e.type === t)(e.selection);
	if (!n) return !0;
	let r = e.doc.resolve(n.start).after(n.depth);
	if (r === void 0) return !0;
	let i = e.doc.nodeAt(r);
	return !(n.node.type === i?.type && ra(e.doc, r)) || !Zp(n.node.attrs.type, i?.attrs.type) || e.join(r), !0;
};
function em(e) {
	let t = e.doc, n = t.firstChild;
	if (!n) return null;
	let r = t.resolve(1), i = t.resolve(n.nodeSize - 1);
	return I.between(r, i);
}
var tm = (e, t, n, r = {}) => ({ editor: i, tr: a, state: o, dispatch: s, chain: c, commands: l, can: u }) => {
	let { extensions: d, splittableMarks: f } = i.extensionManager, p = Ld(e, o.schema), m = Ld(t, o.schema), { selection: h, storedMarks: g } = o, { $from: _, $to: v } = h, y = _.blockRange(v), b = g || h.$to.parentOffset && h.$from.marks();
	if (!y) return !1;
	let x = Xf((e) => jp(e.type.name, d))(h), S = h.from === 0 && h.to === o.doc.content.size, C = o.doc.content.content, ee = C.length === 1 ? C[0] : null, w = S && ee && jp(ee.type.name, d) ? {
		node: ee,
		pos: 0,
		depth: 0
	} : null, te = x ?? w, ne = !!x && y.depth >= 1 && y.depth - x.depth <= 1, T = !!w;
	if ((ne || T) && te) {
		if (te.node.type === p) return S && T ? c().command(({ tr: e, dispatch: t }) => {
			let n = em(e);
			return n ? (e.setSelection(n), t && t(e), !0) : !1;
		}).liftListItem(m).run() : l.liftListItem(m);
		if (jp(te.node.type.name, d) && p.validContent(te.node.content)) return c().command(() => (a.setNodeMarkup(te.pos, p), !0)).command(() => Qp(a, p)).command(() => $p(a, p)).run();
	}
	return !n || !b || !s ? c().command(() => u().wrapInList(p, r) ? !0 : l.clearNodes()).wrapInList(p, r).command(() => Qp(a, p)).command(() => $p(a, p)).run() : c().command(() => {
		let e = u().wrapInList(p, r), t = b.filter((e) => f.includes(e.type.name));
		return a.ensureMarks(t), e ? !0 : l.clearNodes();
	}).wrapInList(p, r).command(() => Qp(a, p)).command(() => $p(a, p)).run();
}, nm = (e, t = {}, n = {}) => ({ state: r, commands: i }) => {
	let { extendEmptyMarkRange: a = !1 } = n, o = Zd(e, r.schema);
	return Op(r, o, t) ? i.unsetMark(o, { extendEmptyMarkRange: a }) : i.setMark(o, t);
}, rm = (e, t, n = {}) => ({ state: r, commands: i }) => {
	let a = Ld(e, r.schema), o = Ld(t, r.schema), s = kf(r, a, n), c;
	return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), s ? i.setNode(o, c) : i.setNode(a, {
		...c,
		...n
	});
}, im = (e, t = {}) => ({ state: n, commands: r }) => {
	let i = Ld(e, n.schema);
	return kf(n, i, t) ? r.lift(i) : r.wrapIn(i, t);
}, am = () => ({ state: e, dispatch: t }) => {
	let n = e.plugins;
	for (let r = 0; r < n.length; r += 1) {
		let i = n[r], a;
		if (i.spec.isInputRules && (a = i.getState(e))) {
			if (t) {
				let t = e.tr, n = a.transform;
				for (let e = n.steps.length - 1; e >= 0; --e) t.step(n.steps[e].invert(n.docs[e]));
				if (a.text) {
					let n = t.doc.resolve(a.from).marks();
					t.replaceWith(a.from, a.to, e.schema.text(a.text, n));
				} else t.delete(a.from, a.to);
			}
			return !0;
		}
	}
	return !1;
}, om = (e = {}) => ({ tr: t, dispatch: n, editor: r }) => {
	let { ignoreClearable: i = !1 } = e, { selection: a } = t, { empty: o, ranges: s } = a;
	if (o) return !0;
	let { nonClearableMarks: c } = r.extensionManager;
	if (n) {
		let e = Object.values(r.schema.marks).filter((e) => i || !c.includes(e.name));
		s.forEach((n) => {
			for (let r of e) t.removeMark(n.$from.pos, n.$to.pos, r);
		});
	}
	return !0;
}, sm = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let { extendEmptyMarkRange: a = !1 } = t, { selection: o } = n, s = Zd(e, r.schema), { $from: c, empty: l, ranges: u } = o;
	if (!i) return !0;
	if (l && a) {
		let { from: e, to: t } = o, r = Xd(c, s, c.marks().find((e) => e.type === s)?.attrs);
		r && (e = r.from, t = r.to), n.removeMark(e, t, s);
	} else u.forEach((e) => {
		n.removeMark(e.$from.pos, e.$to.pos, s);
	});
	return n.removeStoredMark(s), !0;
}, cm = (e) => ({ tr: t, state: n, dispatch: r }) => {
	let { selection: i } = n, a, o;
	return typeof e == "number" ? (a = e, o = e) : e && "from" in e && "to" in e ? (a = e.from, o = e.to) : (a = i.from, o = i.to), r && t.doc.nodesBetween(a, o, (e, n) => {
		if (e.isText) return;
		let r = { ...e.attrs };
		delete r.dir, t.setNodeMarkup(n, void 0, r);
	}), !0;
}, lm = (e, t = {}) => ({ tr: n, state: r, dispatch: i }) => {
	let a = null, o = null, s = Pf(typeof e == "string" ? e : e.name, r.schema);
	if (!s) return !1;
	s === "node" && (a = Ld(e, r.schema)), s === "mark" && (o = Zd(e, r.schema));
	let c = !1;
	return n.selection.ranges.forEach((e) => {
		let s = e.$from.pos, l = e.$to.pos, u, d, f, p;
		n.selection.empty ? r.doc.nodesBetween(s, l, (e, t) => {
			a && a === e.type && (c = !0, f = Math.max(t, s), p = Math.min(t + e.nodeSize, l), u = t, d = e);
		}) : r.doc.nodesBetween(s, l, (e, r) => {
			r < s && a && a === e.type && (c = !0, f = Math.max(r, s), p = Math.min(r + e.nodeSize, l), u = r, d = e), r >= s && r <= l && (a && a === e.type && (c = !0, i && n.setNodeMarkup(r, void 0, {
				...e.attrs,
				...t
			})), o && e.marks.length && e.marks.forEach((a) => {
				if (o === a.type && (c = !0, i)) {
					let i = Math.max(r, s), c = Math.min(r + e.nodeSize, l);
					n.addMark(i, c, o.create({
						...a.attrs,
						...t
					}));
				}
			}));
		}), d && (u !== void 0 && i && n.setNodeMarkup(u, void 0, {
			...d.attrs,
			...t
		}), o && d.marks.length && d.marks.forEach((e) => {
			o === e.type && i && n.addMark(f, p, o.create({
				...e.attrs,
				...t
			}));
		}));
	}), c;
}, um = (e, t = {}) => ({ state: n, dispatch: r }) => Oo(Ld(e, n.schema), t)(n, r), dm = (e, t = {}) => ({ state: n, dispatch: r }) => Fo(Ld(e, n.schema), t)(n, r), fm = class {
	constructor() {
		this.callbacks = {};
	}
	on(e, t) {
		return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
	}
	emit(e, ...t) {
		let n = this.callbacks[e];
		return n && n.forEach((e) => e.apply(this, t)), this;
	}
	off(e, t) {
		let n = this.callbacks[e];
		return n && (t ? this.callbacks[e] = n.filter((e) => e !== t) : delete this.callbacks[e]), this;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t.apply(this, r);
		};
		return this.on(e, n);
	}
	removeAllListeners() {
		this.callbacks = {};
	}
};
function pm(e, t, n) {
	let r = document.querySelector(`style[data-tiptap-style${n ? `-${n}` : ""}]`);
	if (r !== null) return r;
	let i = document.createElement("style");
	return t && i.setAttribute("nonce", t), i.setAttribute(`data-tiptap-style${n ? `-${n}` : ""}`, ""), i.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(i), i;
}
function mm(e) {
	return typeof e == "number";
}
function hm(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function gm(e) {
	return hm(e) === "Object" ? e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype : !1;
}
Ed({}, {
	createAtomBlockMarkdownSpec: () => ym,
	createBlockMarkdownSpec: () => bm,
	createInlineMarkdownSpec: () => Cm,
	parseAttributes: () => _m,
	parseIndentedBlocks: () => wm,
	renderNestedMarkdownContent: () => Tm,
	serializeAttributes: () => vm
});
function _m(e) {
	if (!e?.trim()) return {};
	let t = {}, n = [], r = e.replace(/["']([^"']*)["']/g, (e) => (n.push(e), `__QUOTED_${n.length - 1}__`)), i = r.match(/(?:^|\s)\.([\w-]+)/g);
	i && (t.class = i.map((e) => e.trim().slice(1)).join(" "));
	let a = r.match(/(?:^|\s)#([\w-]+)/);
	a && (t.id = a[1]), Array.from(r.matchAll(/([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g)).forEach(([, e, r]) => {
		let i = n[parseInt(r.match(/__QUOTED_(\d+)__/)?.[1] || "0", 10)];
		i && (t[e] = i.slice(1, -1));
	});
	let o = r.replace(/(?:^|\s)\.([\w-]+)/g, "").replace(/(?:^|\s)#([\w-]+)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
	return o && o.split(/\s+/).filter(Boolean).forEach((e) => {
		e.match(/^[a-zA-Z][\w-]*$/) && (t[e] = !0);
	}), t;
}
function vm(e) {
	if (!e || Object.keys(e).length === 0) return "";
	let t = [];
	return e.class && String(e.class).split(/\s+/).filter(Boolean).forEach((e) => t.push(`.${e}`)), e.id && t.push(`#${e.id}`), Object.entries(e).forEach(([e, n]) => {
		e === "class" || e === "id" || (n === !0 ? t.push(e) : n !== !1 && n != null && t.push(`${e}="${String(n)}"`));
	}), t.join(" ");
}
function ym(e) {
	let { nodeName: t, name: n, parseAttributes: r = _m, serializeAttributes: i = vm, defaultAttributes: a = {}, requiredAttributes: o = [], allowedAttributes: s } = e, c = n || t, l = (e) => {
		if (!s) return e;
		let t = {};
		return s.forEach((n) => {
			n in e && (t[n] = e[n]);
		}), t;
	};
	return {
		parseMarkdown: (e, n) => {
			let r = {
				...a,
				...e.attributes
			};
			return n.createNode(t, r, []);
		},
		markdownTokenizer: {
			name: t,
			level: "block",
			start(e) {
				let t = RegExp(`^:::${c}(?:\\s|$)`, "m"), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, i) {
				let a = RegExp(`^:::${c}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`), s = e.match(a);
				if (!s) return;
				let l = r(s[1] || "");
				if (!o.find((e) => !(e in l))) return {
					type: t,
					raw: s[0],
					attributes: l
				};
			}
		},
		renderMarkdown: (e) => {
			let t = i(l(e.attrs || {}));
			return `:::${c}${t ? ` {${t}}` : ""} :::`;
		}
	};
}
function bm(e) {
	let { nodeName: t, name: n, getContent: r, parseAttributes: i = _m, serializeAttributes: a = vm, defaultAttributes: o = {}, content: s = "block", allowedAttributes: c } = e, l = n || t, u = (e) => {
		if (!c) return e;
		let t = {};
		return c.forEach((n) => {
			n in e && (t[n] = e[n]);
		}), t;
	};
	return {
		parseMarkdown: (e, n) => {
			let i;
			if (r) {
				let t = r(e);
				i = typeof t == "string" ? [{
					type: "text",
					text: t
				}] : t;
			} else i = s === "block" ? n.parseChildren(e.tokens || []) : n.parseInline(e.tokens || []);
			let a = {
				...o,
				...e.attributes
			};
			return n.createNode(t, a, i);
		},
		markdownTokenizer: {
			name: t,
			level: "block",
			start(e) {
				let t = RegExp(`^:::${l}`, "m"), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, r) {
				let a = RegExp(`^:::${l}(?:\\s+\\{([^}]*)\\})?\\s*\\n`), o = e.match(a);
				if (!o) return;
				let [c, u = ""] = o, d = i(u), f = 1, p = c.length, m = "", h = /^:::([\w-]*)(\s.*)?/gm, g = e.slice(p);
				for (h.lastIndex = 0;;) {
					let n = h.exec(g);
					if (n === null) break;
					let i = n.index, a = n[1];
					if (!n[2]?.endsWith(":::")) {
						if (a) f += 1;
						else if (--f, f === 0) {
							let a = g.slice(0, i);
							m = a.trim();
							let o = e.slice(0, p + i + n[0].length), c = [];
							if (m) if (s === "block") for (c = r.blockTokens(a), c.forEach((e) => {
								e.text && (!e.tokens || e.tokens.length === 0) && (e.tokens = r.inlineTokens(e.text));
							}); c.length > 0;) {
								let e = c[c.length - 1];
								if (e.type === "paragraph" && (!e.text || e.text.trim() === "")) c.pop();
								else break;
							}
							else c = r.inlineTokens(m);
							return {
								type: t,
								raw: o,
								attributes: d,
								content: m,
								tokens: c
							};
						}
					}
				}
			}
		},
		renderMarkdown: (e, t) => {
			let n = a(u(e.attrs || {}));
			return `:::${l}${n ? ` {${n}}` : ""}

${t.renderChildren(e.content || [], "\n\n")}

:::`;
		}
	};
}
function xm(e) {
	if (!e.trim()) return {};
	let t = {}, n = /(\w+)=(?:"([^"]*)"|'([^']*)')/g, r = n.exec(e);
	for (; r !== null;) {
		let [, i, a, o] = r;
		t[i] = a || o, r = n.exec(e);
	}
	return t;
}
function Sm(e) {
	return Object.entries(e).filter(([, e]) => e != null).map(([e, t]) => `${e}="${t}"`).join(" ");
}
function Cm(e) {
	let { nodeName: t, name: n, getContent: r, parseAttributes: i = xm, serializeAttributes: a = Sm, defaultAttributes: o = {}, selfClosing: s = !1, allowedAttributes: c } = e, l = n || t, u = (e) => {
		if (!c) return e;
		let t = {};
		return c.forEach((n) => {
			let r = typeof n == "string" ? n : n.name, i = typeof n == "string" ? void 0 : n.skipIfDefault;
			if (r in e) {
				let n = e[r];
				if (i !== void 0 && n === i) return;
				t[r] = n;
			}
		}), t;
	}, d = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return {
		parseMarkdown: (e, n) => {
			let i = {
				...o,
				...e.attributes
			};
			if (s) return n.createNode(t, i);
			let a = r ? r(e) : e.content || "";
			return a ? n.createNode(t, i, [n.createTextNode(a)]) : n.createNode(t, i, []);
		},
		markdownTokenizer: {
			name: t,
			level: "inline",
			start(e) {
				let t = RegExp(s ? `\\[${d}\\s*[^\\]]*\\]` : `\\[${d}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${d}\\]`), n = e.match(t)?.index;
				return n === void 0 ? -1 : n;
			},
			tokenize(e, n, r) {
				let a = RegExp(s ? `^\\[${d}\\s*([^\\]]*)\\]` : `^\\[${d}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${d}\\]`), o = e.match(a);
				if (!o) return;
				let c = "", l = "";
				if (s) {
					let [, e] = o;
					l = e;
				} else {
					let [, e, t] = o;
					l = e, c = t || "";
				}
				let u = i(l.trim());
				return {
					type: t,
					raw: o[0],
					content: c.trim(),
					attributes: u
				};
			}
		},
		renderMarkdown: (e) => {
			let t = "";
			r ? t = r(e) : e.content && e.content.length > 0 && (t = e.content.filter((e) => e.type === "text").map((e) => e.text).join(""));
			let n = a(u(e.attrs || {})), i = n ? ` ${n}` : "";
			return s ? `[${l}${i}]` : `[${l}${i}]${t}[/${l}]`;
		}
	};
}
function wm(e, t, n) {
	let r = e.split("\n"), i = [], a = "", o = 0, s = t.baseIndentSize || 2;
	for (; o < r.length;) {
		let e = r[o], c = e.match(t.itemPattern);
		if (!c) {
			if (i.length > 0) break;
			if (e.trim() === "") {
				o += 1, a = `${a}${e}
`;
				continue;
			} else return;
		}
		let l = t.extractItemData(c), { indentLevel: u, mainContent: d } = l;
		a = `${a}${e}
`;
		let f = [d];
		for (o += 1; o < r.length;) {
			let e = r[o];
			if (e.trim() === "") {
				let t = r.slice(o + 1).findIndex((e) => e.trim() !== "");
				if (t === -1) break;
				if ((r[o + 1 + t].match(/^(\s*)/)?.[1]?.length || 0) > u) {
					f.push(e), a = `${a}${e}
`, o += 1;
					continue;
				} else break;
			}
			if ((e.match(/^(\s*)/)?.[1]?.length || 0) > u) f.push(e), a = `${a}${e}
`, o += 1;
			else break;
		}
		let p, m = f.slice(1);
		if (m.length > 0) {
			let e = m.map((e) => e.slice(u + s)).join("\n");
			e.trim() && (p = t.customNestedParser ? t.customNestedParser(e) : n.blockTokens(e));
		}
		let h = t.createToken(l, p);
		i.push(h);
	}
	if (i.length !== 0) return {
		items: i,
		raw: a
	};
}
function Tm(e, t, n, r) {
	if (!e || !Array.isArray(e.content)) return "";
	let i = typeof n == "function" ? n(r) : n, [a, ...o] = e.content, s = `${i}${t.renderChildren([a])}`;
	return o && o.length > 0 && o.forEach((e, n) => {
		let r = t.renderChild?.call(t, e, n + 1) ?? t.renderChildren([e]);
		if (r != null) {
			let n = r.split("\n").map((e) => e ? t.indent(e) : t.indent("")).join("\n");
			s += e.type === "paragraph" ? `

${n}` : `
${n}`;
		}
	}), s;
}
function Em(e, t) {
	let n = { ...e };
	return gm(e) && gm(t) && Object.keys(t).forEach((r) => {
		gm(t[r]) && gm(e[r]) ? n[r] = Em(e[r], t[r]) : n[r] = t[r];
	}), n;
}
function Dm(e, t, n = {}) {
	let { state: r } = t, { doc: i, tr: a } = r, o = e;
	i.descendants((t, r) => {
		let i = a.mapping.map(r), s = a.mapping.map(r) + t.nodeSize, c = null;
		if (t.marks.forEach((e) => {
			if (e !== o) return !1;
			c = e;
		}), !c) return;
		let l = !1;
		if (Object.keys(n).forEach((e) => {
			n[e] !== c.attrs[e] && (l = !0);
		}), l) {
			let t = e.type.create({
				...e.attrs,
				...n
			});
			a.removeMark(i, s, e.type), a.addMark(i, s, t);
		}
	}), a.docChanged && t.view.dispatch(a);
}
var Om = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler, this.undoable = e.undoable ?? !0;
	}
}, km = (e, t) => {
	if (Kd(t)) return t.exec(e);
	let n = t(e);
	if (!n) return null;
	let r = [n.text];
	return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn("[tiptap warn]: \"inputRuleMatch.replaceWith\" must be part of \"inputRuleMatch.text\"."), r.push(n.replaceWith)), r;
};
function Am(e) {
	let { editor: t, from: n, to: r, text: i, rules: a, plugin: o } = e, { view: s } = t;
	if (s.composing) return !1;
	let c = s.state.doc.resolve(n);
	if (c.parent.type.spec.code || (c.nodeBefore || c.nodeAfter)?.marks.find((e) => e.type.spec.code)) return !1;
	let l = !1, u = Dp(c) + i;
	return a.forEach((e) => {
		if (l) return;
		let a = km(u, e.find);
		if (!a) return;
		let d = a[0].length - i.length;
		if (d > 0) {
			let e = c.parentOffset - d;
			if (e < 0 || c.parent.textBetween(e, c.parentOffset) !== a[0].slice(0, d)) return;
		}
		let f = s.state.tr, p = Dd({
			state: s.state,
			transaction: f
		}), m = {
			from: n - (a[0].length - i.length),
			to: r
		}, { commands: h, chain: g, can: _ } = new Od({
			editor: t,
			state: p
		});
		e.handler({
			state: p,
			range: m,
			match: a,
			commands: h,
			chain: g,
			can: _
		}) === null || !f.steps.length || (e.undoable && f.setMeta(o, {
			transform: f,
			from: n,
			to: r,
			text: i
		}), s.dispatch(f), l = !0);
	}), l;
}
function jm(e) {
	let { editor: t, rules: n } = e, r = new R({
		state: {
			init() {
				return null;
			},
			apply(e, i, a) {
				let o = e.getMeta(r);
				if (o) return o;
				let s = e.getMeta("applyInputRules");
				return s && setTimeout(() => {
					let { text: e } = s;
					e = typeof e == "string" ? e : Qf(M.from(e), a.schema);
					let { from: i } = s;
					Am({
						editor: t,
						from: i,
						to: i + e.length,
						text: e,
						rules: n,
						plugin: r
					});
				}), e.selectionSet || e.docChanged ? null : i;
			}
		},
		props: {
			handleTextInput(e, i, a, o) {
				return Am({
					editor: t,
					from: i,
					to: a,
					text: o,
					rules: n,
					plugin: r
				});
			},
			handleDOMEvents: { compositionend: (e) => (setTimeout(() => {
				let { $cursor: i } = e.state.selection;
				i && Am({
					editor: t,
					from: i.pos,
					to: i.pos,
					text: "",
					rules: n,
					plugin: r
				});
			}), !1) },
			handleKeyDown(e, i) {
				if (i.key !== "Enter") return !1;
				let { $cursor: a } = e.state.selection;
				return a ? Am({
					editor: t,
					from: a.pos,
					to: a.pos,
					text: "\n",
					rules: n,
					plugin: r
				}) : !1;
			}
		},
		isInputRules: !0
	});
	return r;
}
var Mm = class {
	constructor(e = {}) {
		this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = { name: this.name }, this.config = {
			...this.config,
			...e
		}, this.name = this.config.name;
	}
	get options() {
		return { ...U(H(this, "addOptions", { name: this.name })) };
	}
	get storage() {
		return { ...U(H(this, "addStorage", {
			name: this.name,
			options: this.options
		})) };
	}
	configure(e = {}) {
		let t = this.extend({
			...this.config,
			addOptions: () => Em(this.options, e)
		});
		return t.name = this.name, t.parent = this.parent, this.child = null, t;
	}
	extend(e = {}) {
		let t = new this.constructor({
			...this.config,
			...e
		});
		return t.parent = this, this.child = t, t.name = "name" in e ? e.name : t.parent.name, t;
	}
}, Nm = class e extends Mm {
	constructor() {
		super(...arguments), this.type = "mark";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	static handleExit({ editor: e, mark: t }) {
		let { tr: n } = e.state, r = e.state.selection.$from;
		if (r.pos === r.end()) {
			let i = r.marks();
			if (!i.find((e) => e?.type.name === t.name)) return !1;
			let a = i.find((e) => e?.type.name === t.name);
			return a && n.removeStoredMark(a), n.insertText(" ", r.pos), e.view.dispatch(n), !0;
		}
		return !1;
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, Pm = class {
	constructor(e) {
		this.find = e.find, this.handler = e.handler;
	}
}, Fm = (e, t, n) => {
	if (Kd(t)) return [...e.matchAll(t)];
	let r = t(e, n);
	return r ? r.map((t) => {
		let n = [t.text];
		return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn("[tiptap warn]: \"pasteRuleMatch.replaceWith\" must be part of \"pasteRuleMatch.text\"."), n.push(t.replaceWith)), n;
	}) : [];
};
function Im(e) {
	let { editor: t, state: n, from: r, to: i, rule: a, pasteEvent: o, dropEvent: s } = e, { commands: c, chain: l, can: u } = new Od({
		editor: t,
		state: n
	}), d = [];
	return n.doc.nodesBetween(r, i, (e, t) => {
		if (e.type?.spec?.code || !(e.isText || e.isTextblock || e.isInline)) return;
		let f = e.content?.size ?? e.nodeSize ?? 0, p = Math.max(r, t), m = Math.min(i, t + f);
		p >= m || Fm(e.isText ? e.text || "" : e.textBetween(p - t, m - t, void 0, "￼"), a.find, o).forEach((e) => {
			if (e.index === void 0) return;
			let t = p + e.index + 1, r = t + e[0].length, i = {
				from: n.tr.mapping.map(t),
				to: n.tr.mapping.map(r)
			}, f = a.handler({
				state: n,
				range: i,
				match: e,
				commands: c,
				chain: l,
				can: u,
				pasteEvent: o,
				dropEvent: s
			});
			d.push(f);
		});
	}), d.every((e) => e !== null);
}
var Lm = null, Rm = (e) => {
	var t;
	let n = new ClipboardEvent("paste", { clipboardData: new DataTransfer() });
	return (t = n.clipboardData) == null || t.setData("text/html", e), n;
};
function zm(e) {
	let { editor: t, rules: n } = e, r = null, i = !1, a = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, s;
	try {
		s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
	} catch {
		s = null;
	}
	let c = ({ state: e, from: n, to: r, rule: i, pasteEvt: a }) => {
		let c = e.tr;
		if (!(!Im({
			editor: t,
			state: Dd({
				state: e,
				transaction: c
			}),
			from: Math.max(n - 1, 0),
			to: r.b - 1,
			rule: i,
			pasteEvent: a,
			dropEvent: s
		}) || !c.steps.length)) {
			try {
				s = typeof DragEvent < "u" ? new DragEvent("drop") : null;
			} catch {
				s = null;
			}
			return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, c;
		}
	};
	return n.map((e) => new R({
		view(e) {
			let n = (n) => {
				r = e.dom.parentElement?.contains(n.target) ? e.dom.parentElement : null, r && (Lm = t);
			}, i = () => {
				Lm &&= null;
			};
			return window.addEventListener("dragstart", n), window.addEventListener("dragend", i), { destroy() {
				window.removeEventListener("dragstart", n), window.removeEventListener("dragend", i);
			} };
		},
		props: { handleDOMEvents: {
			drop: (e, t) => {
				if (a = r === e.dom.parentElement, s = t, !a) {
					let e = Lm;
					e?.isEditable && setTimeout(() => {
						let t = e.state.selection;
						t && e.commands.deleteRange({
							from: t.from,
							to: t.to
						});
					}, 10);
				}
				return !1;
			},
			paste: (e, t) => {
				let n = t.clipboardData?.getData("text/html");
				return o = t, i = !!n?.includes("data-pm-slice"), !1;
			}
		} },
		appendTransaction: (t, n, r) => {
			let s = t[0], l = s.getMeta("uiEvent") === "paste" && !i, u = s.getMeta("uiEvent") === "drop" && !a, d = s.getMeta("applyPasteRules"), f = !!d;
			if (!l && !u && !f) return;
			if (f) {
				let { text: t } = d;
				t = typeof t == "string" ? t : Qf(M.from(t), r.schema);
				let { from: n } = d, i = n + t.length, a = Rm(t);
				return c({
					rule: e,
					state: r,
					from: n,
					to: { b: i },
					pasteEvt: a
				});
			}
			let p = n.doc.content.findDiffStart(r.doc.content), m = n.doc.content.findDiffEnd(r.doc.content);
			if (!(!mm(p) || !m || p === m.b)) return c({
				rule: e,
				state: r,
				from: p,
				to: m,
				pasteEvt: o
			});
		}
	}));
}
var Bm = class {
	constructor(e, t) {
		this.splittableMarks = [], this.nonClearableMarks = [], this.editor = t, this.baseExtensions = e, this.extensions = mp(e), this.schema = dp(this.extensions, t), this.setupExtensions();
	}
	get commands() {
		return this.extensions.reduce((e, t) => {
			let n = H(t, "addCommands", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: this.editor,
				type: Tp(t.name, this.schema)
			});
			return n ? {
				...e,
				...n()
			} : e;
		}, {});
	}
	get plugins() {
		let { editor: e } = this;
		return pp([...this.extensions].reverse()).flatMap((t) => {
			let n = {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Tp(t.name, this.schema)
			}, r = [], i = H(t, "addKeyboardShortcuts", n), a = {};
			if (t.type === "mark" && H(t, "exitable", n) && (a.ArrowRight = () => Nm.handleExit({
				editor: e,
				mark: t
			})), i) {
				let t = Object.fromEntries(Object.entries(i()).map(([t, n]) => [t, () => n({ editor: e })]));
				a = {
					...a,
					...t
				};
			}
			let o = Cd(a);
			r.push(o);
			let s = H(t, "addInputRules", n);
			if (Ap(t, e.options.enableInputRules) && s) {
				let t = s();
				if (t && t.length) {
					let n = jm({
						editor: e,
						rules: t
					}), i = Array.isArray(n) ? n : [n];
					r.push(...i);
				}
			}
			let c = H(t, "addPasteRules", n);
			if (Ap(t, e.options.enablePasteRules) && c) {
				let t = c();
				if (t && t.length) {
					let n = zm({
						editor: e,
						rules: t
					});
					r.push(...n);
				}
			}
			let l = H(t, "addProseMirrorPlugins", n);
			if (l) {
				let e = l();
				r.push(...e);
			}
			return r;
		});
	}
	get attributes() {
		return np(this.extensions);
	}
	get nodeViews() {
		let { editor: e } = this, { nodeExtensions: t } = tp(this.extensions);
		return Object.fromEntries(t.filter((e) => !!H(e, "addNodeView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = H(t, "addNodeView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Ld(t.name, this.schema)
			});
			if (!r) return [];
			let i = r();
			return i ? [t.name, (r, a, o, s, c) => i({
				node: r,
				view: a,
				getPos: o,
				decorations: s,
				innerDecorations: c,
				editor: e,
				extension: t,
				HTMLAttributes: op(r, n)
			})] : [];
		}));
	}
	dispatchTransaction(e) {
		let { editor: t } = this;
		return pp([...this.extensions].reverse()).reduceRight((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Tp(n.name, this.schema)
			}, i = H(n, "dispatchTransaction", r);
			return i ? (t) => {
				i.call(r, {
					transaction: t,
					next: e
				});
			} : e;
		}, e);
	}
	transformPastedHTML(e) {
		let { editor: t } = this;
		return pp([...this.extensions]).reduce((e, n) => {
			let r = {
				name: n.name,
				options: n.options,
				storage: this.editor.extensionStorage[n.name],
				editor: t,
				type: Tp(n.name, this.schema)
			}, i = H(n, "transformPastedHTML", r);
			return i ? (t, n) => {
				let a = e(t, n);
				return i.call(r, a);
			} : e;
		}, e || ((e) => e));
	}
	get markViews() {
		let { editor: e } = this, { markExtensions: t } = tp(this.extensions);
		return Object.fromEntries(t.filter((e) => !!H(e, "addMarkView")).map((t) => {
			let n = this.attributes.filter((e) => e.type === t.name), r = H(t, "addMarkView", {
				name: t.name,
				options: t.options,
				storage: this.editor.extensionStorage[t.name],
				editor: e,
				type: Zd(t.name, this.schema)
			});
			return r ? [t.name, (i, a, o) => {
				let s = op(i, n);
				return r()({
					mark: i,
					view: a,
					inline: o,
					editor: e,
					extension: t,
					HTMLAttributes: s,
					updateAttributes: (t) => {
						Dm(i, e, t);
					}
				});
			}] : [];
		}));
	}
	destroy() {
		this.extensions.forEach((e) => {
			let t = e;
			for (; t.parent;) {
				let e = t.parent;
				e.child === t && (e.child = null), t = e;
			}
		}), this.extensions = [], this.baseExtensions = [], this.schema = null, this.editor = null;
	}
	setupExtensions() {
		let e = this.extensions;
		this.editor.extensionStorage = Object.fromEntries(e.map((e) => [e.name, e.storage])), e.forEach((e) => {
			let t = {
				name: e.name,
				options: e.options,
				storage: this.editor.extensionStorage[e.name],
				editor: this.editor,
				type: Tp(e.name, this.schema)
			};
			e.type === "mark" && ((U(H(e, "keepOnSplit", t)) ?? !0) && this.splittableMarks.push(e.name), (U(H(e, "clearable", t)) ?? !0) || this.nonClearableMarks.push(e.name));
			let n = H(e, "onBeforeCreate", t), r = H(e, "onCreate", t), i = H(e, "onUpdate", t), a = H(e, "onSelectionUpdate", t), o = H(e, "onTransaction", t), s = H(e, "onFocus", t), c = H(e, "onBlur", t), l = H(e, "onDestroy", t);
			n && this.editor.on("beforeCreate", n), r && this.editor.on("create", r), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), o && this.editor.on("transaction", o), s && this.editor.on("focus", s), c && this.editor.on("blur", c), l && this.editor.on("destroy", l);
		});
	}
};
Bm.resolve = mp, Bm.sort = pp, Bm.flatten = Zf;
var Vm = {};
Ed(Vm, {
	ClipboardTextSerializer: () => Hm,
	Commands: () => Um,
	Delete: () => Wm,
	Drop: () => Gm,
	Editable: () => Km,
	FocusEvents: () => Jm,
	Keymap: () => Ym,
	Paste: () => Xm,
	Tabindex: () => Zm,
	TextDirection: () => Qm,
	focusEventsPluginKey: () => qm
});
var W = class e extends Mm {
	constructor() {
		super(...arguments), this.type = "extension";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, Hm = W.create({
	name: "clipboardTextSerializer",
	addOptions() {
		return { blockSeparator: void 0 };
	},
	addProseMirrorPlugins() {
		return [new R({
			key: new z("clipboardTextSerializer"),
			props: { clipboardTextSerializer: () => {
				let { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: i } = t, a = vp(n), { blockSeparator: o } = this.options, s = {
					...o === void 0 ? {} : { blockSeparator: o },
					textSerializers: a
				};
				return [...i.ranges].sort((e, t) => e.$from.pos - t.$from.pos).map(({ $from: e, $to: t }) => gp(r, {
					from: e.pos,
					to: t.pos
				}, s)).join(o ?? "\n\n");
			} }
		})];
	}
}), Um = W.create({
	name: "commands",
	addCommands() {
		return { ...kd };
	}
}), Wm = W.create({
	name: "delete",
	onUpdate({ transaction: e, appendedTransactions: t }) {
		let n = () => {
			var n;
			if (((n = this.editor.options.coreExtensionOptions?.delete)?.filterTransaction)?.call(n, e) ?? e.getMeta("y-sync$")) return;
			let r = qf(e.before, [e, ...t]);
			Cp(r).forEach((t) => {
				r.mapping.mapResult(t.oldRange.from).deletedAfter && r.mapping.mapResult(t.oldRange.to).deletedBefore && r.before.nodesBetween(t.oldRange.from, t.oldRange.to, (n, i) => {
					let a = i + n.nodeSize - 2, o = t.oldRange.from <= i && a <= t.oldRange.to;
					this.editor.emit("delete", {
						type: "node",
						node: n,
						from: i,
						to: a,
						newFrom: r.mapping.map(i),
						newTo: r.mapping.map(a),
						deletedRange: t.oldRange,
						newRange: t.newRange,
						partial: !o,
						editor: this.editor,
						transaction: e,
						combinedTransform: r
					});
				});
			});
			let i = r.mapping;
			r.steps.forEach((t, n) => {
				if (t instanceof Ni) {
					let a = i.slice(n).map(t.from, -1), o = i.slice(n).map(t.to), s = i.invert().map(a, -1), c = i.invert().map(o), l = a > 0 ? r.doc.nodeAt(a - 1)?.marks.some((e) => e.eq(t.mark)) : !1, u = r.doc.nodeAt(o)?.marks.some((e) => e.eq(t.mark));
					this.editor.emit("delete", {
						type: "mark",
						mark: t.mark,
						from: t.from,
						to: t.to,
						deletedRange: {
							from: s,
							to: c
						},
						newRange: {
							from: a,
							to: o
						},
						partial: !!(u || l),
						editor: this.editor,
						transaction: e,
						combinedTransform: r
					});
				}
			});
		};
		this.editor.options.coreExtensionOptions?.delete?.async ?? !0 ? setTimeout(n, 0) : n();
	}
}), Gm = W.create({
	name: "drop",
	addProseMirrorPlugins() {
		return [new R({
			key: new z("tiptapDrop"),
			props: { handleDrop: (e, t, n, r) => {
				this.editor.emit("drop", {
					editor: this.editor,
					event: t,
					slice: n,
					moved: r
				});
			} }
		})];
	}
}), Km = W.create({
	name: "editable",
	addProseMirrorPlugins() {
		return [new R({
			key: new z("editable"),
			props: { editable: () => this.editor.options.editable }
		})];
	}
}), qm = new z("focusEvents"), Jm = W.create({
	name: "focusEvents",
	addProseMirrorPlugins() {
		let { editor: e } = this;
		return [new R({
			key: qm,
			props: { handleDOMEvents: {
				focus: (t, n) => {
					e.isFocused = !0;
					let r = e.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				},
				blur: (t, n) => {
					e.isFocused = !1;
					let r = e.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
					return t.dispatch(r), !1;
				}
			} }
		})];
	}
}), Ym = W.create({
	name: "keymap",
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ commands: e }) => [
			() => e.undoInputRule(),
			() => e.command(({ tr: t }) => {
				let { selection: n, doc: r } = t, { empty: i, $anchor: a } = n, { pos: o, parent: s } = a, c = a.parent.isTextblock && o > 0 ? t.doc.resolve(o - 1) : a, l = c.parent.type.spec.isolating, u = a.pos - a.parentOffset, d = l && c.parent.childCount === 1 ? u === a.pos : F.atStart(r).from === o;
				return !i || !s.type.isTextblock || s.textContent.length || !d || d && a.parent.type.name === "paragraph" ? !1 : e.clearNodes();
			}),
			() => e.deleteSelection(),
			() => e.joinBackward(),
			() => e.selectNodeBackward()
		]), t = () => this.editor.commands.first(({ commands: e }) => [
			() => e.deleteSelection(),
			() => e.deleteCurrentNode(),
			() => e.joinForward(),
			() => e.selectNodeForward()
		]), n = {
			Enter: () => this.editor.commands.first(({ commands: e }) => [
				() => e.newlineInCode(),
				() => e.createParagraphNear(),
				() => e.liftEmptyBlock(),
				() => e.splitBlock()
			]),
			"Mod-Enter": () => this.editor.commands.exitCode(),
			Backspace: e,
			"Mod-Backspace": e,
			"Shift-Backspace": e,
			Delete: t,
			"Mod-Delete": t,
			"Mod-a": () => this.editor.commands.selectAll()
		}, r = { ...n }, i = {
			...n,
			"Ctrl-h": e,
			"Alt-Backspace": e,
			"Ctrl-d": t,
			"Ctrl-Alt-Backspace": t,
			"Alt-Delete": t,
			"Alt-d": t,
			"Ctrl-a": () => this.editor.commands.selectTextblockStart(),
			"Ctrl-e": () => this.editor.commands.selectTextblockEnd()
		};
		return af() || Ef() ? i : r;
	},
	addProseMirrorPlugins() {
		return [new R({
			key: new z("clearDocument"),
			appendTransaction: (e, t, n) => {
				if (e.some((e) => e.getMeta("composition"))) return;
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = e.some((e) => e.getMeta("preventClearDocument"));
				if (!r || i) return;
				let { empty: a, from: o, to: s } = t.selection, c = F.atStart(t.doc).from, l = F.atEnd(t.doc).to;
				if (a || !(o === c && s === l) || !Mp(n.doc)) return;
				let u = n.tr, d = Dd({
					state: n,
					transaction: u
				}), { commands: f } = new Od({
					editor: this.editor,
					state: d
				});
				if (f.clearNodes(), u.steps.length) return u;
			}
		})];
	}
}), Xm = W.create({
	name: "paste",
	addProseMirrorPlugins() {
		return [new R({
			key: new z("tiptapPaste"),
			props: { handlePaste: (e, t, n) => {
				this.editor.emit("paste", {
					editor: this.editor,
					event: t,
					slice: n
				});
			} }
		})];
	}
}), Zm = W.create({
	name: "tabindex",
	addOptions() {
		return { value: void 0 };
	},
	addProseMirrorPlugins() {
		return [new R({
			key: new z("tabindex"),
			props: { attributes: () => !this.editor.isEditable && this.options.value === void 0 ? {} : { tabindex: this.options.value ?? "0" } }
		})];
	}
}), Qm = W.create({
	name: "textDirection",
	addOptions() {
		return { direction: void 0 };
	},
	addGlobalAttributes() {
		if (!this.options.direction) return [];
		let { nodeExtensions: e } = tp(this.extensions);
		return [{
			types: e.filter((e) => e.name !== "text").map((e) => e.name),
			attributes: { dir: {
				default: this.options.direction,
				parseHTML: (e) => {
					let t = e.getAttribute("dir");
					return t && (t === "ltr" || t === "rtl" || t === "auto") ? t : this.options.direction;
				},
				renderHTML: (e) => e.dir ? { dir: e.dir } : {}
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new R({
			key: new z("textDirection"),
			props: { attributes: () => {
				let e = this.options.direction;
				return e ? { dir: e } : {};
			} }
		})];
	}
}), $m = class e {
	constructor(e, t, n = !1, r = null) {
		this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = r;
	}
	get name() {
		return this.node.type.name;
	}
	get node() {
		return this.currentNode || this.resolvedPos.node();
	}
	get element() {
		return this.editor.view.domAtPos(this.pos).node;
	}
	get depth() {
		return this.actualDepth ?? this.resolvedPos.depth;
	}
	get pos() {
		return this.resolvedPos.pos;
	}
	get content() {
		return this.node.content;
	}
	set content(e) {
		let t = this.from, n = this.to;
		if (this.isBlock) {
			if (this.content.size === 0) {
				console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
				return;
			}
			t = this.from + 1, n = this.to - 1;
		}
		this.editor.commands.insertContentAt({
			from: t,
			to: n
		}, e);
	}
	get attributes() {
		return this.node.attrs;
	}
	get textContent() {
		return this.node.textContent;
	}
	get size() {
		return this.node.nodeSize;
	}
	get from() {
		return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
	}
	get range() {
		return {
			from: this.from,
			to: this.to
		};
	}
	get to() {
		return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + +!this.node.isText;
	}
	get parent() {
		if (this.depth === 0) return null;
		let t = this.resolvedPos.start(this.resolvedPos.depth - 1);
		return new e(this.resolvedPos.doc.resolve(t), this.editor);
	}
	get before() {
		let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new e(t, this.editor);
	}
	get after() {
		let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
		return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new e(t, this.editor);
	}
	get children() {
		let t = [];
		return this.node.content.forEach((n, r) => {
			let i = n.isBlock && !n.isTextblock, a = n.isAtom && !n.isText, o = n.isInline, s = this.pos + r + +!a;
			if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2) return;
			let c = this.resolvedPos.doc.resolve(s);
			if (!i && !o && c.depth <= this.depth) return;
			let l = new e(c, this.editor, i, i || o ? n : null);
			i && (l.actualDepth = this.depth + 1), t.push(l);
		}), t;
	}
	get firstChild() {
		return this.children[0] || null;
	}
	get lastChild() {
		let e = this.children;
		return e[e.length - 1] || null;
	}
	closest(e, t = {}) {
		let n = null, r = this.parent;
		for (; r && !n;) {
			if (r.node.type.name === e) if (Object.keys(t).length > 0) {
				let e = r.node.attrs, n = Object.keys(t);
				for (let r = 0; r < n.length; r += 1) {
					let i = n[r];
					if (e[i] !== t[i]) break;
				}
			} else n = r;
			r = r.parent;
		}
		return n;
	}
	querySelector(e, t = {}) {
		return this.querySelectorAll(e, t, !0)[0] || null;
	}
	querySelectorAll(e, t = {}, n = !1) {
		let r = [];
		if (!this.children || this.children.length === 0) return r;
		let i = Object.keys(t);
		return this.children.forEach((a) => {
			n && r.length > 0 || (a.node.type.name === e && i.every((e) => t[e] === a.node.attrs[e]) && r.push(a), !(n && r.length > 0) && (r = r.concat(a.querySelectorAll(e, t, n))));
		}), r;
	}
	setAttribute(e) {
		let { tr: t } = this.editor.state;
		t.setNodeMarkup(this.from, void 0, {
			...this.node.attrs,
			...e
		}), this.editor.view.dispatch(t);
	}
}, eh = ".ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: \"liga\" 0; /* the above doesn't seem to work in Edge */\n}\n\n.ProseMirror [contenteditable=\"false\"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable=\"false\"] [contenteditable=\"true\"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}", th = class extends fm {
	constructor(e = {}) {
		super(), this.css = null, this.className = "tiptap", this.editorView = null, this.isFocused = !1, this.destroyed = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
			element: typeof document < "u" ? document.createElement("div") : null,
			content: "",
			injectCSS: !0,
			injectNonce: void 0,
			extensions: [],
			autofocus: !1,
			editable: !0,
			textDirection: void 0,
			editorProps: {},
			parseOptions: {},
			coreExtensionOptions: {},
			enableInputRules: !0,
			enablePasteRules: !0,
			enableCoreExtensions: !0,
			enableContentCheck: !1,
			emitContentError: !1,
			onBeforeCreate: () => null,
			onCreate: () => null,
			onMount: () => null,
			onUnmount: () => null,
			onUpdate: () => null,
			onSelectionUpdate: () => null,
			onTransaction: () => null,
			onFocus: () => null,
			onBlur: () => null,
			onDestroy: () => null,
			onContentError: ({ error: e }) => {
				throw e;
			},
			onPaste: () => null,
			onDrop: () => null,
			onDelete: () => null,
			enableExtensionDispatchTransaction: !0
		}, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.utils = {
			getUpdatedPosition: Ip,
			createMappablePosition: Lp
		}, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("mount", this.options.onMount), this.on("unmount", this.options.onUnmount), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: e, slice: t, moved: n }) => this.options.onDrop(e, t, n)), this.on("paste", ({ event: e, slice: t }) => this.options.onPaste(e, t)), this.on("delete", this.options.onDelete);
		let t = this.createDoc();
		if (!this.editorState) {
			let e = nf(t, this.options.autofocus);
			this.editorState = qa.create({
				doc: t,
				schema: this.schema,
				selection: e || void 0
			});
		}
		this.options.element && this.mount(this.options.element);
	}
	mount(e) {
		if (typeof document > "u") throw Error("[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.");
		this.createView(e), this.emit("mount", { editor: this }), this.css && !document.head.contains(this.css) && document.head.appendChild(this.css), window.setTimeout(() => {
			this.isDestroyed || (this.options.autofocus !== !1 && this.options.autofocus !== null && this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
		}, 0);
	}
	unmount() {
		if (this.editorView) {
			let e = this.editorView.dom;
			e?.editor && delete e.editor, this.editorView.destroy();
		}
		if (this.editorView = null, this.isInitialized = !1, this.css && !document.querySelectorAll(`.${this.className}`).length) try {
			typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
		} catch (e) {
			console.warn("Failed to remove CSS element:", e);
		}
		this.css = null, this.emit("unmount", { editor: this });
	}
	get storage() {
		return this.extensionStorage;
	}
	get commands() {
		return this.commandManager.commands;
	}
	chain() {
		return this.commandManager.chain();
	}
	can() {
		return this.commandManager.can();
	}
	injectCSS() {
		this.options.injectCSS && typeof document < "u" && (this.css = pm(eh, this.options.injectNonce));
	}
	setOptions(e = {}) {
		this.options = {
			...this.options,
			...e
		}, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
	}
	setEditable(e, t = !0) {
		this.setOptions({ editable: e }), t && this.emit("update", {
			editor: this,
			transaction: this.state.tr,
			appendedTransactions: []
		});
	}
	get isEditable() {
		return this.options.editable && this.view && this.view.editable;
	}
	get view() {
		return this.editorView ? this.editorView : new Proxy({
			state: this.editorState,
			updateState: (e) => {
				this.editorState = e;
			},
			dispatch: (e) => {
				this.dispatchTransaction(e);
			},
			composing: !1,
			dragging: null,
			editable: !0,
			isDestroyed: !1
		}, { get: (e, t) => {
			if (this.editorView) return this.editorView[t];
			if (t === "state") return this.editorState;
			if (t in e) return Reflect.get(e, t);
			throw Error(`[tiptap error]: The editor view is not available. Cannot access view['${t}']. The editor may not be mounted yet.`);
		} });
	}
	get state() {
		return this.editorView && (this.editorState = this.view.state), this.editorState;
	}
	registerPlugin(e, t) {
		let n = $f(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	unregisterPlugin(e) {
		if (this.isDestroyed) return;
		let t = this.state.plugins, n = t;
		if ([].concat(e).forEach((e) => {
			let t = typeof e == "string" ? `${e}$` : e.key;
			n = n.filter((e) => !e.key.startsWith(t));
		}), t.length === n.length) return;
		let r = this.state.reconfigure({ plugins: n });
		return this.view.updateState(r), r;
	}
	createExtensionManager() {
		let e = [...this.options.enableCoreExtensions ? [
			Km,
			Hm.configure({ blockSeparator: this.options.coreExtensionOptions?.clipboardTextSerializer?.blockSeparator }),
			Um,
			Jm,
			Ym,
			Zm.configure({ value: this.options.coreExtensionOptions?.tabindex?.value }),
			Gm,
			Xm,
			Wm,
			Qm.configure({ direction: this.options.textDirection })
		].filter((e) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[e.name] !== !1 : !0) : [], ...this.options.extensions].filter((e) => [
			"extension",
			"node",
			"mark"
		].includes(e?.type));
		this.extensionManager = new Bm(e, this);
	}
	createCommandManager() {
		this.commandManager = new Od({ editor: this });
	}
	createSchema() {
		this.schema = this.extensionManager.schema;
	}
	createDoc() {
		let e;
		try {
			e = Wf(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
		} catch (e) {
			if (!(e instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(e.message)) throw e;
			let t = Wf(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
			return this.editorState = qa.create({
				doc: t,
				schema: this.schema,
				selection: nf(t, this.options.autofocus) || void 0
			}), this.emit("contentError", {
				editor: this,
				error: e,
				disableCollaboration: () => {
					"collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((e) => e.name !== "collaboration"), this.createExtensionManager();
				}
			}), this.editorState.doc;
		}
		return e;
	}
	createView(e) {
		let { editorProps: t, enableExtensionDispatchTransaction: n } = this.options, r = t.dispatchTransaction || this.dispatchTransaction.bind(this), i = n ? this.extensionManager.dispatchTransaction(r) : r, a = t.transformPastedHTML, o = this.extensionManager.transformPastedHTML(a);
		this.editorView = new rd(e, {
			...t,
			attributes: {
				role: "textbox",
				...t?.attributes
			},
			dispatchTransaction: i,
			transformPastedHTML: o,
			state: this.editorState,
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
		let s = this.state.reconfigure({ plugins: this.extensionManager.plugins });
		this.view.updateState(s), this.prependClass(), this.injectCSS();
		let c = this.view.dom;
		c.editor = this;
	}
	createNodeViews() {
		this.view.isDestroyed || this.view.setProps({
			markViews: this.extensionManager.markViews,
			nodeViews: this.extensionManager.nodeViews
		});
	}
	prependClass() {
		this.view.dom.className = `${this.className} ${this.view.dom.className}`;
	}
	captureTransaction(e) {
		this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
		let t = this.capturedTransaction;
		return this.capturedTransaction = null, t;
	}
	dispatchTransaction(e) {
		if (this.view.isDestroyed) return;
		if (this.isCapturingTransaction) {
			if (!this.capturedTransaction) {
				this.capturedTransaction = e;
				return;
			}
			e.steps.forEach((e) => this.capturedTransaction?.step(e));
			return;
		}
		let { state: t, transactions: n } = this.state.applyTransaction(e), r = !this.state.selection.eq(t.selection), i = n.includes(e), a = this.state;
		if (this.emit("beforeTransaction", {
			editor: this,
			transaction: e,
			nextState: t
		}), !i) return;
		this.view.updateState(t), this.emit("transaction", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		}), r && this.emit("selectionUpdate", {
			editor: this,
			transaction: e
		});
		let o = n.findLast((e) => e.getMeta("focus") || e.getMeta("blur")), s = o?.getMeta("focus"), c = o?.getMeta("blur");
		s && this.emit("focus", {
			editor: this,
			event: s.event,
			transaction: o
		}), c && this.emit("blur", {
			editor: this,
			event: c.event,
			transaction: o
		}), !(e.getMeta("preventUpdate") || !n.some((e) => e.docChanged) || a.doc.eq(t.doc)) && this.emit("update", {
			editor: this,
			transaction: e,
			appendedTransactions: n.slice(1)
		});
	}
	getAttributes(e) {
		return bp(this.state, e);
	}
	isActive(e, t) {
		let n = typeof e == "string" ? e : null, r = typeof e == "string" ? t : e;
		return kp(this.state, n, r);
	}
	getJSON() {
		return this.state.doc.toJSON();
	}
	getHTML() {
		return Qf(this.state.doc.content, this.schema);
	}
	getText(e) {
		let { blockSeparator: t = "\n\n", textSerializers: n = {} } = e || {};
		return _p(this.state.doc, {
			blockSeparator: t,
			textSerializers: {
				...vp(this.schema),
				...n
			}
		});
	}
	get isEmpty() {
		return Mp(this.state.doc);
	}
	destroy() {
		this.destroyed || (this.destroyed = !0, this.emit("destroy"), this.unmount(), this.removeAllListeners(), this.extensionManager.destroy(), this.extensionManager = null, this.schema = null, this.commandManager = null, this.extensionStorage = {});
	}
	get isDestroyed() {
		return this.editorView?.isDestroyed ?? !0;
	}
	$node(e, t) {
		return this.$doc?.querySelector(e, t) || null;
	}
	$nodes(e, t) {
		return this.$doc?.querySelectorAll(e, t) || null;
	}
	$pos(e) {
		let t = this.state.doc.resolve(e), n = e > 0 && t.nodeAfter && !t.nodeAfter.isText && t.nodeAfter.isAtom ? t.nodeAfter : null;
		return new $m(t, this, !1, n);
	}
	get $doc() {
		return this.$pos(0);
	}
};
function nh(e) {
	return new Om({
		find: e.find,
		handler: ({ state: t, range: n, match: r }) => {
			let i = U(e.getAttributes, void 0, r);
			if (i === !1 || i === null) return null;
			let { tr: a } = t, o = r[r.length - 1], s = r[0];
			if (o) {
				let r = s.search(/\S/), c = n.from + s.indexOf(o), l = c + o.length;
				if (wp(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > c).length) return null;
				l < n.to && a.delete(l, n.to), c > n.from && a.delete(n.from + r, c);
				let u = n.from + r + o.length;
				a.addMark(n.from + r, u, e.type.create(i || {})), a.removeStoredMark(e.type);
			}
		},
		undoable: e.undoable
	});
}
var rh = class e extends Mm {
	constructor() {
		super(...arguments), this.type = "node";
	}
	static create(t = {}) {
		return new e(typeof t == "function" ? t() : t);
	}
	configure(e) {
		return super.configure(e);
	}
	extend(e) {
		let t = typeof e == "function" ? e() : e;
		return super.extend(t);
	}
}, ih = class {
	constructor(e, t, n) {
		this.isDragging = !1, this.component = e, this.editor = t.editor, this.options = {
			stopEvent: null,
			ignoreMutation: null,
			...n
		}, this.extension = t.extension, this.node = t.node, this.decorations = t.decorations, this.innerDecorations = t.innerDecorations, this.view = t.view, this.HTMLAttributes = t.HTMLAttributes, this.getPos = () => {
			try {
				return t.getPos();
			} catch {
				return;
			}
		}, this.mount();
	}
	mount() {}
	get dom() {
		return this.editor.view.dom;
	}
	get contentDOM() {
		return null;
	}
	onDragStart(e) {
		var t;
		let { view: n } = this.editor, r = e.target, i = r.nodeType === 3 ? r.parentElement?.closest("[data-drag-handle]") : r.closest("[data-drag-handle]");
		if (!this.dom || this.contentDOM?.contains(r) || !i) return;
		let a = 0, o = 0;
		if (this.dom !== i) {
			let t = this.dom.getBoundingClientRect(), n = i.getBoundingClientRect(), r = e.offsetX ?? e.nativeEvent?.offsetX, s = e.offsetY ?? e.nativeEvent?.offsetY;
			a = n.x - t.x + r, o = n.y - t.y + s;
		}
		let s = this.dom.cloneNode(!0);
		try {
			let e = this.dom.getBoundingClientRect();
			s.style.width = `${Math.round(e.width)}px`, s.style.height = `${Math.round(e.height)}px`, s.style.boxSizing = "border-box", s.style.pointerEvents = "none";
		} catch {}
		let c = null;
		try {
			c = document.createElement("div"), c.style.position = "absolute", c.style.top = "-9999px", c.style.left = "-9999px", c.style.pointerEvents = "none", c.appendChild(s), document.body.appendChild(c), (t = e.dataTransfer) == null || t.setDragImage(s, a, o);
		} finally {
			c && setTimeout(() => {
				try {
					c?.remove();
				} catch {}
			}, 0);
		}
		let l = this.getPos();
		if (typeof l != "number") return;
		let u = L.create(n.state.doc, l), d = n.state.tr.setSelection(u);
		n.dispatch(d);
	}
	stopEvent(e) {
		if (!this.dom) return !1;
		if (typeof this.options.stopEvent == "function") return this.options.stopEvent({ event: e });
		let t = e.target;
		if (!(this.dom.contains(t) && !this.contentDOM?.contains(t))) return !1;
		let n = e.type.startsWith("drag"), r = e.type === "dragover" || e.type === "dragenter", i = e.type === "drop";
		if (([
			"INPUT",
			"BUTTON",
			"SELECT",
			"TEXTAREA"
		].includes(t.tagName) || t.isContentEditable) && !i && !n) return !0;
		let { isEditable: a } = this.editor, { isDragging: o } = this, s = !!this.node.type.spec.draggable, c = L.isSelectable(this.node), l = e.type === "copy", u = e.type === "paste", d = e.type === "cut", f = e.type === "mousedown";
		if (!s && c && n && e.target === this.dom && e.preventDefault(), s && n && !o && e.target === this.dom) return e.preventDefault(), !1;
		if (s && a && !o && f) {
			let e = t.closest("[data-drag-handle]");
			e && (this.dom === e || this.dom.contains(e)) && (this.isDragging = !0, document.addEventListener("dragend", () => {
				this.isDragging = !1;
			}, { once: !0 }), document.addEventListener("drop", () => {
				this.isDragging = !1;
			}, { once: !0 }), document.addEventListener("mouseup", () => {
				this.isDragging = !1;
			}, { once: !0 }));
		}
		return !(o || r || i || l || u || d || f && c);
	}
	ignoreMutation(e) {
		return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: e }) : this.node.isLeaf || this.node.isAtom ? !0 : e.type === "selection" || this.dom.contains(e.target) && e.type === "childList" && (af() || rf()) && this.editor.isFocused && [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)].every((e) => e.isContentEditable) ? !1 : this.contentDOM === e.target && e.type === "attributes" ? !0 : !this.contentDOM.contains(e.target);
	}
	updateAttributes(e) {
		this.editor.commands.command(({ tr: t }) => {
			let n = this.getPos();
			return typeof n == "number" ? (t.setNodeMarkup(n, void 0, {
				...this.node.attrs,
				...e
			}), !0) : !1;
		});
	}
	deleteNode() {
		let e = this.getPos();
		if (typeof e != "number") return;
		let t = e + this.node.nodeSize;
		this.editor.commands.deleteRange({
			from: e,
			to: t
		});
	}
};
function ah(e) {
	return new Pm({
		find: e.find,
		handler: ({ state: t, range: n, match: r, pasteEvent: i }) => {
			let a = U(e.getAttributes, void 0, r, i);
			if (a === !1 || a === null) return null;
			let { tr: o } = t, s = r[r.length - 1], c = r[0], l = n.to;
			if (s) {
				let i = c.search(/\S/), u = n.from + c.indexOf(s), d = u + s.length;
				if (wp(n.from, n.to, t.doc).filter((t) => t.mark.type.excluded.find((n) => n === e.type && n !== t.mark.type)).filter((e) => e.to > u).length) return null;
				d < n.to && o.delete(d, n.to), u > n.from && o.delete(n.from + i, u), l = n.from + i + s.length, o.addMark(n.from + i, l, e.type.create(a || {})), r.index !== void 0 && r.input !== void 0 && r.index + r[0].length >= r.input.length || o.removeStoredMark(e.type);
			}
		}
	});
}
//#endregion
//#region ../../node_modules/lib0/math.js
var oh = Math.floor, sh = Math.abs, ch = (e, t) => e < t ? e : t, lh = (e, t) => e > t ? e : t;
Number.isNaN;
var uh = (e) => e === 0 ? 1 / e < 0 : e < 0, dh = 1 << 17, fh = 1 << 18, ph = 1 << 19, mh = 1 << 20, hh = 1 << 21, gh = 1 << 22, _h = 1 << 23, vh = 1 << 24, yh = 1 << 25, bh = 1 << 26, xh = 1 << 27, Sh = 1 << 28, Ch = 1 << 29;
dh - 1, fh - 1, ph - 1, mh - 1, hh - 1, gh - 1, _h - 1, vh - 1, yh - 1, bh - 1, xh - 1, Sh - 1, Ch - 1, crypto.subtle;
var wh = crypto.getRandomValues.bind(crypto), Th = Math.random, Eh = () => wh(/* @__PURE__ */ new Uint32Array(1))[0], Dh = (e) => e[oh(Th() * e.length)], Oh = "10000000-1000-4000-8000-100000000000", kh = () => Oh.replace(/[018]/g, (e) => (e ^ Eh() & 15 >> e / 4).toString(16)), Ah, jh;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	Ah = (t) => e.get(t), jh = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	Ah = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, jh = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var G = class {
	constructor(e, t, n, r) {
		this.width = e, this.height = t, this.map = n, this.problems = r;
	}
	findCell(e) {
		for (let t = 0; t < this.map.length; t++) {
			let n = this.map[t];
			if (n != e) continue;
			let r = t % this.width, i = t / this.width | 0, a = r + 1, o = i + 1;
			for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
			for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
			return {
				left: r,
				top: i,
				right: a,
				bottom: o
			};
		}
		throw RangeError(`No cell with offset ${e} found`);
	}
	colCount(e) {
		for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
		throw RangeError(`No cell with offset ${e} found`);
	}
	nextCell(e, t, n) {
		let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
		return t == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[a * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? a == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? a - 1 : o)];
	}
	rectBetween(e, t) {
		let { left: n, right: r, top: i, bottom: a } = this.findCell(e), { left: o, right: s, top: c, bottom: l } = this.findCell(t);
		return {
			left: Math.min(n, o),
			top: Math.min(i, c),
			right: Math.max(r, s),
			bottom: Math.max(a, l)
		};
	}
	cellsInRect(e) {
		let t = [], n = {};
		for (let r = e.top; r < e.bottom; r++) for (let i = e.left; i < e.right; i++) {
			let a = r * this.width + i, o = this.map[a];
			n[o] || (n[o] = !0, !(i == e.left && i && this.map[a - 1] == o || r == e.top && r && this.map[a - this.width] == o) && t.push(o));
		}
		return t;
	}
	positionAt(e, t, n) {
		for (let r = 0, i = 0;; r++) {
			let a = i + n.child(r).nodeSize;
			if (r == e) {
				let n = t + e * this.width, r = (e + 1) * this.width;
				for (; n < r && this.map[n] < i;) n++;
				return n == r ? a - 1 : this.map[n];
			}
			i = a;
		}
	}
	static get(e) {
		return Ah(e) || jh(e, Mh(e));
	}
};
function Mh(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = Nh(e), n = e.childCount, r = [], i = 0, a = null, o = [];
	for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
	for (let s = 0, c = 0; s < n; s++) {
		let l = e.child(s);
		c++;
		for (let e = 0;; e++) {
			for (; i < r.length && r[i] != 0;) i++;
			if (e == l.childCount) break;
			let u = l.child(e), { colspan: d, rowspan: f, colwidth: p } = u.attrs;
			for (let e = 0; e < f; e++) {
				if (e + s >= n) {
					(a ||= []).push({
						type: "overlong_rowspan",
						pos: c,
						n: f - e
					});
					break;
				}
				let l = i + e * t;
				for (let e = 0; e < d; e++) {
					r[l + e] == 0 ? r[l + e] = c : (a ||= []).push({
						type: "collision",
						row: s,
						pos: c,
						n: d - e
					});
					let n = p && p[e];
					if (n) {
						let r = (l + e) % t * 2, i = o[r];
						i == null || i != n && o[r + 1] == 1 ? (o[r] = n, o[r + 1] = 1) : i == n && o[r + 1]++;
					}
				}
			}
			i += d, c += u.nodeSize;
		}
		let u = (s + 1) * t, d = 0;
		for (; i < u;) r[i++] == 0 && d++;
		d && (a ||= []).push({
			type: "missing",
			row: s,
			n: d
		}), c++;
	}
	(t === 0 || n === 0) && (a ||= []).push({ type: "zero_sized" });
	let s = new G(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && Ph(s, o, e), s;
}
function Nh(e) {
	let t = -1, n = !1;
	for (let r = 0; r < e.childCount; r++) {
		let i = e.child(r), a = 0;
		if (n) for (let t = 0; t < r; t++) {
			let n = e.child(t);
			for (let e = 0; e < n.childCount; e++) {
				let i = n.child(e);
				t + i.attrs.rowspan > r && (a += i.attrs.colspan);
			}
		}
		for (let e = 0; e < i.childCount; e++) {
			let t = i.child(e);
			a += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
		}
		t == -1 ? t = a : t != a && (t = Math.max(t, a));
	}
	return t;
}
function Ph(e, t, n) {
	e.problems ||= [];
	let r = {};
	for (let i = 0; i < e.map.length; i++) {
		let a = e.map[i];
		if (r[a]) continue;
		r[a] = !0;
		let o = n.nodeAt(a);
		if (!o) throw RangeError(`No cell with offset ${a} found`);
		let s = null, c = o.attrs;
		for (let n = 0; n < c.colspan; n++) {
			let r = t[(i + n) % e.width * 2];
			r != null && (!c.colwidth || c.colwidth[n] != r) && ((s ||= Fh(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function Fh(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function Ih(e) {
	let t = e.cached.tableNodeTypes;
	if (!t) {
		t = e.cached.tableNodeTypes = {};
		for (let n in e.nodes) {
			let r = e.nodes[n], i = r.spec.tableRole;
			i && (t[i] = r);
		}
	}
	return t;
}
var Lh = new z("selectingCells");
function Rh(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function zh(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function Bh(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function Vh(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = Rh(t.$head) || Hh(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function Hh(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function Uh(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function Wh(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function Gh(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function Kh(e, t, n) {
	let r = e.node(-1), i = G.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function qh(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function Jh(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan + n
	};
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
	}
	return r;
}
function Yh(e, t, n) {
	let r = Ih(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var K = class e extends F {
	constructor(e, t = e) {
		let n = e.node(-1), r = G.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new Aa(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (Uh(r) && Uh(i) && Gh(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return I.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = G.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
		for (let n = r.top; n < r.bottom; n++) {
			let o = [];
			for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
				let n = t.map[a];
				if (i[n]) continue;
				i[n] = !0;
				let s = t.findCell(n), c = e.nodeAt(n);
				if (!c) throw RangeError(`No cell with offset ${n} found`);
				let l = r.left - s.left, u = s.right - r.right;
				if (l > 0 || u > 0) {
					let e = c.attrs;
					if (l > 0 && (e = qh(e, 0, l)), u > 0 && (e = qh(e, e.colspan - u, u)), s.left < r.left) {
						if (c = c.type.createAndFill(e), !c) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
					} else c = c.type.create(e, c.content);
				}
				if (s.top < r.top || s.bottom > r.bottom) {
					let e = {
						...c.attrs,
						rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
					};
					c = s.top < r.top ? c.type.createAndFill(e) : c.type.create(e, c.content);
				}
				o.push(c);
			}
			a.push(e.child(n).copy(M.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new P(M.from(o), 1, 1);
	}
	replace(e, t = P.empty) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n);
			e.replace(s.map(a.pos), s.map(o.pos), i ? P.empty : t);
		}
		let i = F.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
		i && e.setSelection(i);
	}
	replaceWith(e, t) {
		this.replace(e, new P(M.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = G.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = G.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = G.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = G.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.left <= s.left ? (o.left > 0 && (t = c.resolve(a + i.map[o.top * i.width])), s.right < i.width && (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])), o.right < i.width && (t = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))), new e(t, n);
	}
	toJSON() {
		return {
			type: "cell",
			anchor: this.$anchorCell.pos,
			head: this.$headCell.pos
		};
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(t, n, r = n) {
		return new e(t.resolve(n), t.resolve(r));
	}
	getBookmark() {
		return new Xh(this.$anchorCell.pos, this.$headCell.pos);
	}
};
K.prototype.visible = !1, F.jsonID("cell", K);
var Xh = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && Gh(t, n) ? new K(t, n) : F.near(n, 1);
	}
};
function Zh(e) {
	if (!(e.selection instanceof K)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(B.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), V.create(e.doc, t);
}
function Qh({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function $h({ $from: e, $to: t }) {
	let n, r;
	for (let t = e.depth; t > 0; t--) {
		let r = e.node(t);
		if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
			n = r;
			break;
		}
	}
	for (let e = t.depth; e > 0; e--) {
		let n = t.node(e);
		if (n.type.spec.tableRole === "cell" || n.type.spec.tableRole === "header_cell") {
			r = n;
			break;
		}
	}
	return n !== r && t.parentOffset === 0;
}
function eg(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof L && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = K.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = K.rowSelection(e, e);
		} else if (!n) {
			let e = G.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = K.create(i, t + 1, n);
		}
	} else r instanceof I && Qh(r) ? a = I.create(i, r.from) : r instanceof I && $h(r) && (a = I.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var tg = new z("fix-tables");
function ng(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? ng(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function rg(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = ig(e, t, r, n));
	};
	return t ? t.doc != e.doc && ng(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function ig(e, t, n, r) {
	let i = G.get(t);
	if (!i.problems) return r;
	r ||= e.tr;
	let a = [];
	for (let e = 0; e < i.height; e++) a.push(0);
	for (let e = 0; e < i.problems.length; e++) {
		let o = i.problems[e];
		if (o.type == "collision") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			let i = e.attrs;
			for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, qh(i, i.colspan - o.n, o.n));
		} else if (o.type == "missing") a[o.row] += o.n;
		else if (o.type == "overlong_rowspan") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				rowspan: e.attrs.rowspan - o.n
			});
		} else if (o.type == "colwidth mismatch") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				colwidth: o.colwidth
			});
		} else if (o.type == "zero_sized") {
			let e = r.mapping.map(n);
			r.delete(e, e + t.nodeSize);
		}
	}
	let o, s;
	for (let e = 0; e < a.length; e++) a[e] && (o ??= e, s = e);
	for (let c = 0, l = n + 1; c < i.height; c++) {
		let n = t.child(c), i = l + n.nodeSize, u = a[c];
		if (u > 0) {
			let t = "cell";
			n.firstChild && (t = n.firstChild.type.spec.tableRole);
			let a = [];
			for (let n = 0; n < u; n++) {
				let n = Ih(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(tg, { fixTables: !0 });
}
function ag(e) {
	let t = e.selection, n = Vh(e), r = n.node(-1), i = n.start(-1), a = G.get(r);
	return {
		...t instanceof K ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function og(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	Yh(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, Jh(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? Ih(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function sg(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e);
		t(og(e.tr, n, n.left));
	}
	return !0;
}
function cg(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e);
		t(og(e.tr, n, n.right));
	}
	return !0;
}
function lg(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, qh(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function ug(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; lg(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = G.get(e);
		}
		t(r);
	}
	return !0;
}
function dg(e, t, n) {
	let r = Ih(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function fg(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	dg(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? Ih(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, Ih(r.type.schema).row.create(null, o)), e;
}
function pg(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e);
		t(fg(e.tr, n, n.top));
	}
	return !0;
}
function mg(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e);
		t(fg(e.tr, n, n.bottom));
	}
	return !0;
}
function hg(e, { map: t, table: n, tableStart: r }, i) {
	let a = 0;
	for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
	let o = a + n.child(i).nodeSize, s = e.mapping.maps.length;
	e.delete(a + r, o + r);
	let c = /* @__PURE__ */ new Set();
	for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
		let l = t.map[o];
		if (!c.has(l)) {
			if (c.add(l), i > 0 && l == t.map[o - t.width]) {
				let t = n.nodeAt(l).attrs;
				e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
					...t,
					rowspan: t.rowspan - 1
				}), a += t.colspan - 1;
			} else if (i < t.height && l == t.map[o + t.width]) {
				let o = n.nodeAt(l), c = o.attrs, u = o.type.create({
					...c,
					rowspan: o.attrs.rowspan - 1
				}, o.content), d = t.positionAt(i + 1, a, n);
				e.insert(e.mapping.slice(s).map(r + d), u), a += c.colspan - 1;
			}
		}
	}
}
function gg(e, t) {
	if (!Bh(e)) return !1;
	if (t) {
		let n = ag(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; hg(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = G.get(n.table);
		}
		t(r);
	}
	return !0;
}
function _g(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function vg({ width: e, height: t, map: n }, r) {
	let i = r.top * e + r.left, a = i, o = (r.bottom - 1) * e + r.left, s = i + (r.right - r.left - 1);
	for (let t = r.top; t < r.bottom; t++) {
		if (r.left > 0 && n[a] == n[a - 1] || r.right < e && n[s] == n[s + 1]) return !0;
		a += e, s += e;
	}
	for (let a = r.left; a < r.right; a++) {
		if (r.top > 0 && n[i] == n[i - e] || r.bottom < t && n[o] == n[o + e]) return !0;
		i++, o++;
	}
	return !1;
}
function yg(e, t) {
	let n = e.selection;
	if (!(n instanceof K) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = ag(e), { map: i } = r;
	if (vg(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = M.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!(a[l] || !u)) if (a[l] = !0, s == null) s = l, c = u;
			else {
				_g(u) || (o = o.append(u.content));
				let e = n.mapping.map(l + r.tableStart);
				n.delete(e, e + u.nodeSize);
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...Jh(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = _g(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new K(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function bg(e, t) {
	let n = Ih(e.schema);
	return xg(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function xg(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof K) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = zh(r.$from), !i) return !1;
			a = Rh(r.$from)?.pos;
		}
		if (i == null || a == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
		if (n) {
			let o = i.attrs, s = [], c = o.colwidth;
			o.rowspan > 1 && (o = {
				...o,
				rowspan: 1
			}), o.colspan > 1 && (o = {
				...o,
				colspan: 1
			});
			let l = ag(t), u = t.tr;
			for (let e = 0; e < l.right - l.left; e++) s.push(c ? {
				...o,
				colwidth: c && c[e] ? [c[e]] : null
			} : o);
			let d;
			for (let t = l.top; t < l.bottom; t++) {
				let n = l.map.positionAt(t, l.left, l.table);
				t == l.top && (n += i.nodeSize);
				for (let r = l.left, a = 0; r < l.right; r++, a++) r == l.left && t == l.top || u.insert(d = u.mapping.map(n + l.tableStart, 1), e({
					node: i,
					row: t,
					col: r
				}).createAndFill(s[a]));
			}
			u.setNodeMarkup(a, e({
				node: i,
				row: l.top,
				col: l.left
			}), s[0]), r instanceof K && u.setSelection(new K(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function Sg(e) {
	return function(t, n) {
		if (!Bh(t)) return !1;
		if (n) {
			let r = Ih(t.schema), i = ag(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
				left: i.left,
				top: 0,
				right: i.right,
				bottom: i.map.height
			} : e == "row" ? {
				left: 0,
				top: i.top,
				right: i.map.width,
				bottom: i.bottom
			} : i), s = o.map((e) => i.table.nodeAt(e));
			for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
			if (a.steps.length === 0) for (let e = 0; e < o.length; e++) a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
			n(a);
		}
		return !0;
	};
}
function Cg(e, t, n) {
	let r = t.map.cellsInRect({
		left: 0,
		top: 0,
		right: e == "row" ? t.map.width : 1,
		bottom: e == "column" ? t.map.height : 1
	});
	for (let e = 0; e < r.length; e++) {
		let i = t.table.nodeAt(r[e]);
		if (i && i.type !== n.header_cell) return !1;
	}
	return !0;
}
function wg(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? Sg(e) : function(t, n) {
		if (!Bh(t)) return !1;
		if (n) {
			let r = Ih(t.schema), i = ag(t), a = t.tr, o = Cg("row", i, r), s = Cg("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
				left: 0,
				top: c,
				right: 1,
				bottom: i.map.height
			} : e == "row" ? {
				left: c,
				top: 0,
				right: i.map.width,
				bottom: 1
			} : i, u = e == "column" ? s ? r.cell : r.header_cell : e == "row" ? o ? r.cell : r.header_cell : r.cell;
			i.map.cellsInRect(l).forEach((e) => {
				let t = e + i.tableStart, n = a.doc.nodeAt(t);
				n && a.setNodeMarkup(t, u, n.attrs);
			}), n(a);
		}
		return !0;
	};
}
wg("row", { useDeprecatedLogic: !0 }), wg("column", { useDeprecatedLogic: !0 }), wg("cell", { useDeprecatedLogic: !0 });
function Tg(e, t) {
	if (t < 0) {
		let t = e.nodeBefore;
		if (t) return e.pos - t.nodeSize;
		for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
			let r = e.node(-1).child(t), i = r.lastChild;
			if (i) return n - 1 - i.nodeSize;
			n -= r.nodeSize;
		}
	} else {
		if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
		let t = e.node(-1);
		for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
			let e = t.child(n);
			if (e.childCount) return r + 1;
			r += e.nodeSize;
		}
	}
	return null;
}
function Eg(e) {
	return function(t, n) {
		if (!Bh(t)) return !1;
		let r = Tg(Vh(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(I.between(e, Wh(e))).scrollIntoView());
		}
		return !0;
	};
}
function Dg(e, t) {
	let n = e.selection;
	if (!(n instanceof K)) return !1;
	if (t) {
		let r = e.tr, i = Ih(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new P(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function Og(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = Ag(Ih(o).row, new P(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? Ag(Ih(o).row, new P(t, n, r)).content : t);
	else return null;
	return kg(o, s);
}
function kg(e, t) {
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		for (let t = r.childCount - 1; t >= 0; t--) {
			let { rowspan: i, colspan: a } = r.child(t).attrs;
			for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
		}
	}
	let r = 0;
	for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(M.empty), n[i] < r) {
		let a = Ih(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(M.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function Ag(e, t) {
	let n = e.createAndFill();
	return new Oa(n).replace(0, n.content.size, t).doc;
}
function jg({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(qh(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(M.from(o));
		}
		n = i, e = r;
	}
	if (t != i) {
		let e = [];
		for (let r = 0, a = 0; r < i; r++, a++) {
			let o = [], s = n[a % t];
			for (let e = 0; e < s.childCount; e++) {
				let t = s.child(e);
				r + t.attrs.rowspan > i && (t = t.type.create({
					...t.attrs,
					rowspan: Math.max(1, i - t.attrs.rowspan)
				}, t.content)), o.push(t);
			}
			e.push(M.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function Mg(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = Ih(s), l, u;
	if (i > t.width) for (let a = 0, s = 0; a < t.height; a++) {
		let d = n.child(a);
		s += d.nodeSize;
		let f = [], p;
		p = d.lastChild == null || d.lastChild.type == c.cell ? l ||= c.cell.createAndFill() : u ||= c.header_cell.createAndFill();
		for (let e = t.width; e < i; e++) f.push(p);
		e.insert(e.mapping.slice(o).map(s - 1 + r), f);
	}
	if (a > t.height) {
		let s = [];
		for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, i); e++) {
			let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == c.header_cell;
			s.push(i ? u ||= c.header_cell.createAndFill() : l ||= c.cell.createAndFill());
		}
		let d = c.row.create(null, M.from(s)), f = [];
		for (let e = t.height; e < a; e++) f.push(d);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
	}
	return !!(l || u);
}
function Ng(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.height) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = o * t.width + l, a = t.map[i];
		if (t.map[i - t.width] == a) {
			c = !0;
			let i = n.nodeAt(a), { top: u, left: d } = t.findCell(a);
			e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
				...i.attrs,
				rowspan: o - u
			}), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), i.type.createAndFill({
				...i.attrs,
				rowspan: u + i.attrs.rowspan - o
			})), l += i.attrs.colspan - 1;
		}
	}
	return c;
}
function Pg(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, qh(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(qh(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function Fg(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = G.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = G.get(a), f = d.mapping.maps.length;
	}
	Mg(d, o, a, n, l, u, f) && p(), Ng(d, o, a, n, c, l, s, f) && p(), Ng(d, o, a, n, c, l, u, f) && p(), Pg(d, o, a, n, s, u, c, f) && p(), Pg(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new P(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new K(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var Ig = wd({
	ArrowLeft: Rg("horiz", -1),
	ArrowRight: Rg("horiz", 1),
	ArrowUp: Rg("vert", -1),
	ArrowDown: Rg("vert", 1),
	"Shift-ArrowLeft": zg("horiz", -1),
	"Shift-ArrowRight": zg("horiz", 1),
	"Shift-ArrowUp": zg("vert", -1),
	"Shift-ArrowDown": zg("vert", 1),
	Backspace: Dg,
	"Mod-Backspace": Dg,
	Delete: Dg,
	"Mod-Delete": Dg
});
function Lg(e, t, n) {
	return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function Rg(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof K) return Lg(n, r, F.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = Ug(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return Lg(n, r, F.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = Kh(i, e, t), s;
			return s = a ? F.near(a, 1) : t < 0 ? F.near(n.doc.resolve(i.before(-1)), -1) : F.near(n.doc.resolve(i.after(-1)), 1), Lg(n, r, s);
		}
	};
}
function zg(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof K) o = a;
		else {
			let r = Ug(i, e, t);
			if (r == null) return !1;
			o = new K(n.doc.resolve(r));
		}
		let s = Kh(o.$headCell, e, t);
		return s ? Lg(n, r, new K(o.$anchorCell, s)) : !1;
	};
}
function Bg(e, t) {
	let n = e.state.doc, r = Rh(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new K(r))), !0) : !1;
}
function Vg(e, t, n) {
	if (!Bh(e.state)) return !1;
	let r = Og(n), i = e.state.selection;
	if (i instanceof K) {
		r ||= {
			width: 1,
			height: 1,
			rows: [M.from(Ag(Ih(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = G.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = jg(r, o.right - o.left, o.bottom - o.top), Fg(e.state, e.dispatch, a, o, r), !0;
	} else if (r) {
		let t = Vh(e.state), n = t.start(-1);
		return Fg(e.state, e.dispatch, n, G.get(t.node(-1)).findCell(t.pos - n), r), !0;
	} else return !1;
}
function Hg(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = Wg(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof K) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = Rh(e.state.selection.$anchor)) != null && Gg(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = Gg(e, n), i = Lh.getState(e.state) == null;
		if (!r || !Gh(t, r)) if (i) r = t;
		else return;
		let a = new K(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(Lh, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), Lh.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(Lh, -1));
	}
	function o(r) {
		let o = r, s = Lh.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (Wg(e, o.target) != n && (c = Gg(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function Ug(e, t, n) {
	if (!(e.state.selection instanceof I)) return null;
	let { $head: r } = e.state.selection;
	for (let i = r.depth - 1; i >= 0; i--) {
		let a = r.node(i);
		if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : a.childCount)) return null;
		if (a.type.spec.tableRole == "cell" || a.type.spec.tableRole == "header_cell") {
			let a = r.before(i), o = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
			return e.endOfTextblock(o) ? a : null;
		}
	}
	return null;
}
function Wg(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function Gg(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && Rh(e.state.doc.resolve(r)) || Rh(e.state.doc.resolve(i));
}
var Kg = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), qg(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type ? (this.node = e, qg(e, this.colgroup, this.table, this.defaultCellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function qg(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l) {
		for (let e = 0, n = 0; e < l.childCount; e++) {
			let { colspan: u, colwidth: d } = l.child(e).attrs;
			for (let e = 0; e < u; e++, n++) {
				let l = i == n ? a : d && d[e], u = l ? l + "px" : "";
				if (o += l || r, l || (s = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;
				else {
					let e = document.createElement("col");
					e.style.width = u, t.appendChild(e);
				}
			}
		}
		for (; c;) {
			var u;
			let e = c.nextSibling;
			(u = c.parentNode) == null || u.removeChild(c), c = e;
		}
		s ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
	}
}
var Jg = new z("tableColumnResizing");
function Yg({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = Kg, lastColumnResizable: i = !0 } = {}) {
	let a = new R({
		key: Jg,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = Ih(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new Xg(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = Jg.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					Zg(t, n, e, i);
				},
				mouseleave: (e) => {
					Qg(e);
				},
				mousedown: (e, r) => {
					$g(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = Jg.getState(e);
				if (t && t.activeHandle > -1) return c_(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var Xg = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(Jg);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return Uh(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function Zg(e, t, n, r) {
	if (!e.editable) return;
	let i = Jg.getState(e.state);
	if (i && !i.dragging) {
		let a = t_(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = n_(e, t, "left", n) : i - t.clientX <= n && (o = n_(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = G.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			i_(e, o);
		}
	}
}
function Qg(e) {
	if (!e.editable) return;
	let t = Jg.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && i_(e, -1);
}
function $g(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = Jg.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = e_(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(Jg, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = Jg.getState(e.state);
		r?.dragging && (a_(e, r.activeHandle, r_(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(Jg, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = Jg.getState(e.state);
		if (i && i.dragging) {
			let a = r_(i.dragging, t, n);
			o_(e, i.activeHandle, a, r);
		}
	}
	return o_(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function e_(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function t_(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function n_(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = Rh(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = G.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function r_(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function i_(e, t) {
	e.dispatch(e.state.tr.setMeta(Jg, { setHandle: t }));
}
function a_(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = G.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : s_(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function o_(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = G.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && qg(a, c.firstChild, c, r, s, n);
}
function s_(e) {
	return Array(e).fill(0);
}
function c_(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return V.empty;
	let a = G.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", Jg.getState(e)?.dragging && n.push(B.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(B.widget(s, c));
		}
	}
	return V.create(e.doc, n);
}
function l_({ allowTableNodeSelection: e = !1 } = {}) {
	return new R({
		key: Lh,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(Lh);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: Zh,
			handleDOMEvents: { mousedown: Hg },
			createSelectionBetween(e) {
				return Lh.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick: Bg,
			handleKeyDown: Ig,
			handlePaste: Vg
		},
		appendTransaction(t, n, r) {
			return eg(r, rg(r, n), e);
		}
	});
}
//#endregion
//#region ../../node_modules/prosemirror-highlight/dist/index.js
var u_ = class e {
	constructor(e) {
		this.cache = new Map(e);
	}
	get(e) {
		return this.cache.get(e);
	}
	set(e, t, n) {
		e < 0 || this.cache.set(e, [t, n]);
	}
	replace(e, t, n, r) {
		this.remove(e), this.set(t, n, r);
	}
	remove(e) {
		this.cache.delete(e);
	}
	invalidate(t) {
		let n = new e(this.cache), r = t.mapping;
		return this.cache.forEach(([e, i], a) => {
			if (a < 0) return;
			let o = r.mapResult(a), s = t.doc.nodeAt(o.pos);
			if (o.deleted || !s?.eq(e)) n.remove(a);
			else if (a !== o.pos) {
				let e = i.map((e) => e.map(r, 0, 0)).filter((e) => e != null);
				n.replace(a, o.pos, s, e);
			}
		}), n;
	}
};
function d_({ parser: e, nodeTypes: t = ["code_block", "codeBlock"], languageExtractor: n = (e) => e.attrs.language }) {
	let r = new z("prosemirror-highlight");
	return new R({
		key: r,
		state: {
			init(r, i) {
				let a = new u_(), [o, s] = f_(i.doc, e, t, n, a);
				return {
					cache: a,
					decorations: o,
					promises: s
				};
			},
			apply: (r, i) => {
				let a = i.cache.invalidate(r), o = !!r.getMeta("prosemirror-highlight-refresh");
				if (!r.docChanged && !o) return {
					cache: a,
					decorations: i.decorations?.map(r.mapping, r.doc),
					promises: i.promises
				};
				let [s, c] = f_(r.doc, e, t, n, a);
				return {
					cache: a,
					decorations: s,
					promises: c
				};
			}
		},
		view: (e) => {
			let t = /* @__PURE__ */ new Set(), n = () => {
				if (t.size > 0 || e.isDestroyed) return;
				let n = e.state.tr.setMeta("prosemirror-highlight-refresh", !0);
				e.dispatch(n);
			}, i = () => {
				let i = r.getState(e.state);
				for (let e of i?.promises ?? []) t.add(e), e.then(() => {
					t.delete(e), n();
				}).catch((n) => {
					console.error("[prosemirror-highlight] Error resolving parser:", n), t.delete(e);
				});
			};
			return i(), { update: () => {
				i();
			} };
		},
		props: { decorations(e) {
			return this.getState(e)?.decorations;
		} }
	});
}
function f_(e, t, n, r, i) {
	let a = [], o = [], s = p_(e, n);
	try {
		for (let [e, n] of s) {
			let s = r(e), c = i.get(n);
			if (c) {
				let [e, t] = c;
				t.length > 0 && a.push(t);
			} else {
				let r = t({
					content: e.textContent,
					language: s || void 0,
					pos: n,
					size: e.nodeSize
				});
				r && Array.isArray(r) ? (i.set(n, e, r), r.length > 0 && a.push(r)) : r instanceof Promise ? (i.remove(n), o.push(r)) : console.error("[prosemirror-highlight] Invalid parser result:", r);
			}
		}
	} catch (e) {
		console.error("[prosemirror-highlight] Error parsing code blocks:", e);
	}
	return [a.length > 0 ? V.create(e, a.flat()) : void 0, o];
}
function p_(e, t) {
	let n = [];
	return e.descendants((e, r) => {
		if (e.type.isTextblock && t.includes(e.type.name)) return n.push([e, r]), !1;
	}), n;
}
//#endregion
//#region ../../node_modules/prosemirror-highlight/dist/shiki.js
function m_(e, t) {
	return function({ content: n, language: r, pos: i, size: a }) {
		let o = [], { tokens: s, fg: c, bg: l, rootStyle: u } = e.codeToTokens(n, {
			lang: r,
			...t ?? { theme: e.getLoadedThemes()[0] }
		}), d = u || (c && l ? `--prosemirror-highlight:${c};--prosemirror-highlight-bg:${l}` : "");
		if (d) {
			let e = B.node(i, i + a, { style: d });
			o.push(e);
		}
		let f = i + 1;
		for (let e of s) {
			for (let t of e) {
				let e = f + t.content.length, n = B.inline(f, e, {
					style: h_(t.htmlStyle ?? `color: ${t.color}`),
					class: "shiki"
				});
				o.push(n), f = e;
			}
			f += 1;
		}
		return o;
	};
}
function h_(e) {
	return typeof e == "string" ? e : Object.entries(e).map(([e, t]) => `${e}:${t}`).join(";");
}
//#endregion
//#region ../../node_modules/lib0/map.js
var g_ = () => /* @__PURE__ */ new Map(), __ = (e) => {
	let t = g_();
	return e.forEach((e, n) => {
		t.set(n, e);
	}), t;
}, v_ = (e, t, n) => {
	let r = e.get(t);
	return r === void 0 && e.set(t, r = n()), r;
}, y_ = (e, t) => {
	let n = [];
	for (let [r, i] of e) n.push(t(i, r));
	return n;
}, b_ = (e, t) => {
	for (let [n, r] of e) if (t(r, n)) return !0;
	return !1;
}, x_ = () => /* @__PURE__ */ new Set(), S_ = (e) => e[e.length - 1], C_ = (e, t) => {
	for (let n = 0; n < t.length; n++) e.push(t[n]);
}, w_ = Array.from, T_ = (e, t) => {
	for (let n = 0; n < e.length; n++) if (!t(e[n], n, e)) return !1;
	return !0;
}, E_ = (e, t) => {
	for (let n = 0; n < e.length; n++) if (t(e[n], n, e)) return !0;
	return !1;
}, D_ = (e, t) => {
	let n = Array(e);
	for (let r = 0; r < e; r++) n[r] = t(r, n);
	return n;
}, O_ = Array.isArray, k_ = class {
	constructor() {
		this._observers = g_();
	}
	on(e, t) {
		return v_(this._observers, e, x_).add(t), t;
	}
	once(e, t) {
		let n = (...r) => {
			this.off(e, n), t(...r);
		};
		this.on(e, n);
	}
	off(e, t) {
		let n = this._observers.get(e);
		n !== void 0 && (n.delete(t), n.size === 0 && this._observers.delete(e));
	}
	emit(e, t) {
		return w_((this._observers.get(e) || g_()).values()).forEach((e) => e(...t));
	}
	destroy() {
		this._observers = g_();
	}
}, A_ = 2 ** 53 - 1, j_ = -(2 ** 53 - 1), M_ = Number.isInteger || ((e) => typeof e == "number" && isFinite(e) && oh(e) === e);
Number.isNaN, Number.parseInt;
//#endregion
//#region ../../node_modules/lib0/string.js
var N_ = String.fromCharCode;
String.fromCodePoint, N_(65535);
var P_ = (e) => e.toLowerCase(), F_ = /^\s*/g, I_ = (e) => e.replace(F_, ""), L_ = /([A-Z])/g, R_ = (e, t) => I_(e.replace(L_, (e) => `${t}${P_(e)}`)), z_ = (e) => {
	let t = unescape(encodeURIComponent(e)), n = t.length, r = new Uint8Array(n);
	for (let e = 0; e < n; e++) r[e] = t.codePointAt(e);
	return r;
}, B_ = typeof TextEncoder < "u" ? new TextEncoder() : null, V_ = B_ ? (e) => B_.encode(e) : z_, H_ = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", {
	fatal: !0,
	ignoreBOM: !0
});
/* c8 ignore start */
H_ && H_.decode(/* @__PURE__ */ new Uint8Array()).length === 1 && (H_ = null);
var U_ = (e, t) => D_(t, () => e).join(""), W_ = class {
	constructor() {
		this.cpos = 0, this.cbuf = /* @__PURE__ */ new Uint8Array(100), this.bufs = [];
	}
}, G_ = () => new W_(), K_ = (e) => {
	let t = G_();
	return e(t), J_(t);
}, q_ = (e) => {
	let t = e.cpos;
	for (let n = 0; n < e.bufs.length; n++) t += e.bufs[n].length;
	return t;
}, J_ = (e) => {
	let t = new Uint8Array(q_(e)), n = 0;
	for (let r = 0; r < e.bufs.length; r++) {
		let i = e.bufs[r];
		t.set(i, n), n += i.length;
	}
	return t.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), n), t;
}, Y_ = (e, t) => {
	let n = e.cbuf.length;
	n - e.cpos < t && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(lh(n, t) * 2), e.cpos = 0);
}, X_ = (e, t) => {
	let n = e.cbuf.length;
	e.cpos === n && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n * 2), e.cpos = 0), e.cbuf[e.cpos++] = t;
}, Z_ = X_, q = (e, t) => {
	for (; t > 127;) X_(e, 128 | 127 & t), t = oh(t / 128);
	X_(e, 127 & t);
}, Q_ = (e, t) => {
	let n = uh(t);
	for (n && (t = -t), X_(e, (t > 63 ? 128 : 0) | (n ? 64 : 0) | 63 & t), t = oh(t / 64); t > 0;) X_(e, (t > 127 ? 128 : 0) | 127 & t), t = oh(t / 128);
}, $_ = /* @__PURE__ */ new Uint8Array(3e4), ev = $_.length / 3, tv = B_ && B_.encodeInto ? (e, t) => {
	if (t.length < ev) {
		/* c8 ignore next */
		let n = B_.encodeInto(t, $_).written || 0;
		q(e, n);
		for (let t = 0; t < n; t++) X_(e, $_[t]);
	} else rv(e, V_(t));
} : (e, t) => {
	let n = unescape(encodeURIComponent(t)), r = n.length;
	q(e, r);
	for (let t = 0; t < r; t++) X_(e, n.codePointAt(t));
}, nv = (e, t) => {
	let n = e.cbuf.length, r = e.cpos, i = ch(n - r, t.length), a = t.length - i;
	e.cbuf.set(t.subarray(0, i), r), e.cpos += i, a > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(lh(n * 2, a)), e.cbuf.set(t.subarray(i)), e.cpos = a);
}, rv = (e, t) => {
	q(e, t.byteLength), nv(e, t);
}, iv = (e, t) => {
	Y_(e, t);
	let n = new DataView(e.cbuf.buffer, e.cpos, t);
	return e.cpos += t, n;
}, av = (e, t) => iv(e, 4).setFloat32(0, t, !1), ov = (e, t) => iv(e, 8).setFloat64(0, t, !1), sv = (e, t) => iv(e, 8).setBigInt64(0, t, !1), cv = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(4)), lv = (e) => (cv.setFloat32(0, e), cv.getFloat32(0) === e), uv = (e, t) => {
	switch (typeof t) {
		case "string":
			X_(e, 119), tv(e, t);
			break;
		case "number":
			M_(t) && sh(t) <= 2147483647 ? (X_(e, 125), Q_(e, t)) : lv(t) ? (X_(e, 124), av(e, t)) : (X_(e, 123), ov(e, t));
			break;
		case "bigint":
			X_(e, 122), sv(e, t);
			break;
		case "object":
			if (t === null) X_(e, 126);
			else if (O_(t)) {
				X_(e, 117), q(e, t.length);
				for (let n = 0; n < t.length; n++) uv(e, t[n]);
			} else if (t instanceof Uint8Array) X_(e, 116), rv(e, t);
			else {
				X_(e, 118);
				let n = Object.keys(t);
				q(e, n.length);
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					tv(e, i), uv(e, t[i]);
				}
			}
			break;
		case "boolean":
			X_(e, t ? 120 : 121);
			break;
		default: X_(e, 127);
	}
}, dv = class extends W_ {
	constructor(e) {
		super(), this.w = e, this.s = null, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (this.count > 0 && q(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
	}
}, fv = (e) => {
	e.count > 0 && (Q_(e.encoder, e.count === 1 ? e.s : -e.s), e.count > 1 && q(e.encoder, e.count - 2));
}, pv = class {
	constructor() {
		this.encoder = new W_(), this.s = 0, this.count = 0;
	}
	write(e) {
		this.s === e ? this.count++ : (fv(this), this.count = 1, this.s = e);
	}
	toUint8Array() {
		return fv(this), J_(this.encoder);
	}
}, mv = (e) => {
	if (e.count > 0) {
		let t = e.diff * 2 + (e.count === 1 ? 0 : 1);
		Q_(e.encoder, t), e.count > 1 && q(e.encoder, e.count - 2);
	}
}, hv = class {
	constructor() {
		this.encoder = new W_(), this.s = 0, this.count = 0, this.diff = 0;
	}
	write(e) {
		this.diff === e - this.s ? (this.s = e, this.count++) : (mv(this), this.count = 1, this.diff = e - this.s, this.s = e);
	}
	toUint8Array() {
		return mv(this), J_(this.encoder);
	}
}, gv = class {
	constructor() {
		this.sarr = [], this.s = "", this.lensE = new pv();
	}
	write(e) {
		this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
	}
	toUint8Array() {
		let e = new W_();
		return this.sarr.push(this.s), this.s = "", tv(e, this.sarr.join("")), nv(e, this.lensE.toUint8Array()), J_(e);
	}
}, _v = (e) => Error(e), vv = () => {
	throw _v("Method unimplemented");
}, yv = () => {
	throw _v("Unexpected case");
}, bv = _v("Unexpected end of array"), xv = _v("Integer out of Range"), Sv = class {
	constructor(e) {
		this.arr = e, this.pos = 0;
	}
}, Cv = (e) => new Sv(e), wv = (e) => e.pos !== e.arr.length, Tv = (e, t) => {
	let n = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, t);
	return e.pos += t, n;
}, Ev = (e) => Tv(e, J(e)), Dv = (e) => e.arr[e.pos++], J = (e) => {
	let t = 0, n = 1, r = e.arr.length;
	for (; e.pos < r;) {
		let r = e.arr[e.pos++];
		if (t += (r & 127) * n, n *= 128, r < 128) return t;
		/* c8 ignore start */
		if (t > A_) throw xv;
	}
	throw bv;
}, Ov = (e) => {
	let t = e.arr[e.pos++], n = t & 63, r = 64, i = (t & 64) > 0 ? -1 : 1;
	if (!(t & 128)) return i * n;
	let a = e.arr.length;
	for (; e.pos < a;) {
		if (t = e.arr[e.pos++], n += (t & 127) * r, r *= 128, t < 128) return i * n;
		/* c8 ignore start */
		if (n > A_) throw xv;
	}
	throw bv;
}, kv = H_ ? (e) => H_.decode(Ev(e)) : (e) => {
	let t = J(e);
	if (t === 0) return "";
	{
		let n = String.fromCodePoint(Dv(e));
		if (--t < 100) for (; t--;) n += String.fromCodePoint(Dv(e));
		else for (; t > 0;) {
			let r = t < 1e4 ? t : 1e4, i = e.arr.subarray(e.pos, e.pos + r);
			e.pos += r, n += String.fromCodePoint.apply(null, i), t -= r;
		}
		return decodeURIComponent(escape(n));
	}
}, Av = (e, t) => {
	let n = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, t);
	return e.pos += t, n;
}, jv = [
	(e) => void 0,
	(e) => null,
	Ov,
	(e) => Av(e, 4).getFloat32(0, !1),
	(e) => Av(e, 8).getFloat64(0, !1),
	(e) => Av(e, 8).getBigInt64(0, !1),
	(e) => !1,
	(e) => !0,
	kv,
	(e) => {
		let t = J(e), n = {};
		for (let r = 0; r < t; r++) {
			let t = kv(e);
			n[t] = Mv(e);
		}
		return n;
	},
	(e) => {
		let t = J(e), n = [];
		for (let r = 0; r < t; r++) n.push(Mv(e));
		return n;
	},
	Ev
], Mv = (e) => jv[127 - Dv(e)](e), Nv = class extends Sv {
	constructor(e, t) {
		super(e), this.reader = t, this.s = null, this.count = 0;
	}
	read() {
		return this.count === 0 && (this.s = this.reader(this), wv(this) ? this.count = J(this) + 1 : this.count = -1), this.count--, this.s;
	}
}, Pv = class extends Sv {
	constructor(e) {
		super(e), this.s = 0, this.count = 0;
	}
	read() {
		if (this.count === 0) {
			this.s = Ov(this);
			let e = uh(this.s);
			this.count = 1, e && (this.s = -this.s, this.count = J(this) + 2);
		}
		return this.count--, this.s;
	}
}, Fv = class extends Sv {
	constructor(e) {
		super(e), this.s = 0, this.count = 0, this.diff = 0;
	}
	read() {
		if (this.count === 0) {
			let e = Ov(this), t = e & 1;
			this.diff = oh(e / 2), this.count = 1, t && (this.count = J(this) + 2);
		}
		return this.s += this.diff, this.count--, this.s;
	}
}, Iv = class {
	constructor(e) {
		this.decoder = new Pv(e), this.str = kv(this.decoder), this.spos = 0;
	}
	read() {
		let e = this.spos + this.decoder.read(), t = this.str.slice(this.spos, e);
		return this.spos = e, t;
	}
}, Lv = Date.now, Rv = (e) => new Promise(e);
Promise.all.bind(Promise);
//#endregion
//#region ../../node_modules/lib0/conditions.js
/* c8 ignore next */
var zv = (e) => e === void 0 ? null : e, Bv = new class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	setItem(e, t) {
		this.map.set(e, t);
	}
	getItem(e) {
		return this.map.get(e);
	}
}();
/* c8 ignore start */
try {
	typeof localStorage < "u" && localStorage && (Bv = localStorage);
} catch {}
/* c8 ignore stop */
/* c8 ignore next */
var Vv = Bv, Hv = Symbol("Equality"), Uv = (e, t) => e === t || !!e?.[Hv]?.(t) || !1, Wv = (e) => typeof e == "object", Gv = Object.assign, Kv = Object.keys, qv = (e, t) => {
	for (let n in e) t(e[n], n);
}, Jv = (e) => Kv(e).length, Yv = (e) => {
	for (let t in e) return !1;
	return !0;
}, Xv = (e, t) => {
	for (let n in e) if (!t(e[n], n)) return !1;
	return !0;
}, Zv = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Qv = (e, t) => e === t || Jv(e) === Jv(t) && Xv(e, (e, n) => (e !== void 0 || Zv(t, n)) && Uv(t[n], e)), $v = Object.freeze, ey = (e) => {
	for (let t in e) {
		let n = e[t];
		(typeof n == "object" || typeof n == "function") && ey(e[t]);
	}
	return $v(e);
}, ty = (e, t, n = 0) => {
	try {
		for (; n < e.length; n++) e[n](...t);
	} finally {
		n < e.length && ty(e, t, n + 1);
	}
}, ny = (e) => e, ry = (e, t) => {
	if (e === t) return !0;
	if (e == null || t == null || e.constructor !== t.constructor && (e.constructor || Object) !== (t.constructor || Object)) return !1;
	if (e[Hv] != null) return e[Hv](t);
	switch (e.constructor) {
		case ArrayBuffer: e = new Uint8Array(e), t = new Uint8Array(t);
		case Uint8Array:
			if (e.byteLength !== t.byteLength) return !1;
			for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
			break;
		case Set:
			if (e.size !== t.size) return !1;
			for (let n of e) if (!t.has(n)) return !1;
			break;
		case Map:
			if (e.size !== t.size) return !1;
			for (let n of e.keys()) if (!t.has(n) || !ry(e.get(n), t.get(n))) return !1;
			break;
		case void 0:
		case Object:
			if (Jv(e) !== Jv(t)) return !1;
			for (let n in e) if (!Zv(e, n) || !ry(e[n], t[n])) return !1;
			break;
		case Array:
			if (e.length !== t.length) return !1;
			for (let n = 0; n < e.length; n++) if (!ry(e[n], t[n])) return !1;
			break;
		default: return !1;
	}
	return !0;
}, iy = (e, t) => t.includes(e), ay = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", oy = typeof window < "u" && typeof document < "u" && !ay;
typeof navigator < "u" && /Mac/.test(navigator.platform);
var sy, cy = [], ly = () => {
	if (sy === void 0) if (ay) {
		sy = g_();
		let e = process.argv, t = null;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			r[0] === "-" ? (t !== null && sy.set(t, ""), t = r) : t === null ? cy.push(r) : (sy.set(t, r), t = null);
		}
		t !== null && sy.set(t, "");
	} else typeof location == "object" ? (sy = g_(), (location.search || "?").slice(1).split("&").forEach((e) => {
		if (e.length !== 0) {
			let [t, n] = e.split("=");
			sy.set(`--${R_(t, "-")}`, n), sy.set(`-${R_(t, "-")}`, n);
		}
	})) : sy = g_();
	return sy;
}, uy = (e) => ly().has(e), dy = (e) => zv(ay ? process.env[e.toUpperCase().replaceAll("-", "_")] : Vv.getItem(e)), fy = (e) => uy("--" + e) || dy(e) !== null, py = fy("production"), my = ay && iy(process.env.FORCE_COLOR, [
	"true",
	"1",
	"2"
]) || !uy("--no-colors") && !fy("no-color") && (!ay || process.stdout.isTTY) && (!ay || uy("--color") || dy("COLORTERM") !== null || (dy("TERM") || "").includes("color")), hy = (e) => new Uint8Array(e), gy = oy ? (e) => {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += N_(e[n]);
	return btoa(t);
} : (e) => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64"), _y = (e) => {
	let t = hy(e.byteLength);
	return t.set(e), t;
}, vy = (e) => K_((t) => uv(t, e)), yy = class {
	constructor(e, t) {
		this.left = e, this.right = t;
	}
}, by = (e, t) => new yy(e, t), xy = (e) => e.next() >= .5, Sy = (e, t, n) => oh(e.next() * (n + 1 - t) + t), Cy = (e, t, n) => oh(e.next() * (n + 1 - t) + t), wy = (e, t, n) => Cy(e, t, n), Ty = (e) => N_(wy(e, 97, 122)), Ey = (e, t = 0, n = 20) => {
	let r = wy(e, t, n), i = "";
	for (let t = 0; t < r; t++) i += Ty(e);
	return i;
}, Dy = (e, t) => t[wy(e, 0, t.length - 1)], Oy = Symbol("0schema"), ky = class {
	constructor() {
		this._rerrs = [];
	}
	extend(e, t, n, r = null) {
		this._rerrs.push({
			path: e,
			expected: t,
			has: n,
			message: r
		});
	}
	toString() {
		let e = [];
		for (let t = this._rerrs.length - 1; t > 0; t--) {
			let n = this._rerrs[t];
			/* c8 ignore next */
			e.push(U_(" ", (this._rerrs.length - t) * 2) + `${n.path == null ? "" : `[${n.path}] `}${n.has} doesn't match ${n.expected}. ${n.message}`);
		}
		return e.join("\n");
	}
}, Ay = (e, t) => e === t ? !0 : e == null || t == null || e.constructor !== t.constructor ? !1 : e[Hv] ? Uv(e, t) : O_(e) ? T_(e, (e) => E_(t, (t) => Ay(e, t))) : Wv(e) ? Xv(e, (e, n) => Ay(e, t[n])) : !1, jy = class {
	static _dilutes = !1;
	extends(e) {
		let [t, n] = [this.shape, e.shape];
		return this.constructor._dilutes && ([n, t] = [t, n]), Ay(t, n);
	}
	equals(e) {
		return this.constructor === e.constructor && ry(this.shape, e.shape);
	}
	[Oy]() {
		return !0;
	}
	[Hv](e) {
		return this.equals(e);
	}
	validate(e) {
		return this.check(e);
	}
	/* c8 ignore start */
	check(e, t) {
		vv();
	}
	/* c8 ignore stop */
	get nullable() {
		return ub(this, Tb);
	}
	get optional() {
		return new Hy(this);
	}
	cast(e) {
		return kb(e, this), e;
	}
	expect(e) {
		return kb(e, this), e;
	}
}, My = class extends jy {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t = void 0) {
		let n = e?.constructor === this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name, e?.constructor === this.shape ? "Check failed" : "Constructor match failed"), n;
	}
}, Ny = (e, t = null) => new My(e, t);
Ny(My);
var Py = class extends jy {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape(e);
		return !n && t?.extend(null, "custom prop", e?.constructor.name, "failed to check custom prop"), n;
	}
}, Fy = (e) => new Py(e);
Ny(Py);
var Iy = class extends jy {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = this.shape.some((t) => t === e);
		return !n && t?.extend(null, this.shape.join(" | "), e.toString()), n;
	}
}, Ly = (...e) => new Iy(e), Ry = Ny(Iy), zy = RegExp.escape || ((e) => e.replace(/[().|&,$^[\]]/g, (e) => "\\" + e)), By = (e) => {
	if (bb.check(e)) return [zy(e)];
	if (Ry.check(e)) return e.shape.map((e) => e + "");
	if (yb.check(e)) return ["[+-]?\\d+.?\\d*"];
	if (xb.check(e)) return [".*"];
	if (db.check(e)) return e.shape.map(By).flat(1);
	/* c8 ignore next 2 */
	yv();
};
Ny(class extends jy {
	constructor(e) {
		super(), this.shape = e, this._r = RegExp("^" + e.map(By).map((e) => `(${e.join("|")})`).join("") + "$");
	}
	check(e, t) {
		let n = this._r.exec(e) != null;
		return !n && t?.extend(null, this._r.toString(), e.toString(), "String doesn't match string template."), n;
	}
});
var Vy = Symbol("optional"), Hy = class extends jy {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = e === void 0 || this.shape.check(e);
		return !n && t?.extend(null, "undefined (optional)", "()"), n;
	}
	get [Vy]() {
		return !0;
	}
}, Uy = Ny(Hy), Wy = class extends jy {
	check(e, t) {
		return t?.extend(null, "never", typeof e), !1;
	}
};
new Wy(), Ny(Wy);
var Gy = class e extends jy {
	constructor(e, t = !1) {
		super(), this.shape = e, this._isPartial = t;
	}
	static _dilutes = !0;
	get partial() {
		return new e(this.shape, !0);
	}
	check(e, t) {
		return e == null ? (t?.extend(null, "object", "null"), !1) : Xv(this.shape, (n, r) => {
			let i = this._isPartial && !Zv(e, r) || n.check(e[r], t);
			return !i && t?.extend(r.toString(), n.toString(), typeof e[r], "Object property does not match"), i;
		});
	}
}, Ky = (e) => new Gy(e), qy = Ny(Gy), Jy = Fy((e) => e != null && (e.constructor === Object || e.constructor == null)), Yy = class extends jy {
	constructor(e, t) {
		super(), this.shape = {
			keys: e,
			values: t
		};
	}
	check(e, t) {
		return e != null && Xv(e, (n, r) => {
			let i = this.shape.keys.check(r, t);
			return !i && t?.extend(r + "", "Record", typeof e, i ? "Key doesn't match schema" : "Value doesn't match value"), i && this.shape.values.check(n, t);
		});
	}
}, Xy = (e, t) => new Yy(e, t), Zy = Ny(Yy), Qy = class extends jy {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		return e != null && Xv(this.shape, (n, r) => {
			let i = n.check(e[r], t);
			return !i && t?.extend(r.toString(), "Tuple", typeof n), i;
		});
	}
}, $y = (...e) => new Qy(e);
Ny(Qy);
var eb = class extends jy {
	constructor(e) {
		super(), this.shape = e.length === 1 ? e[0] : new lb(e);
	}
	check(e, t) {
		let n = O_(e) && T_(e, (e) => this.shape.check(e));
		return !n && t?.extend(null, "Array", ""), n;
	}
}, tb = (...e) => new eb(e), nb = Ny(eb), rb = Fy((e) => O_(e)), ib = class extends jy {
	constructor(e, t) {
		super(), this.shape = e, this._c = t;
	}
	check(e, t) {
		let n = e instanceof this.shape && (this._c == null || this._c(e));
		return !n && t?.extend(null, this.shape.name, e?.constructor.name), n;
	}
}, ab = (e, t = null) => new ib(e, t);
Ny(ib);
var ob = ab(jy), sb = Ny(class extends jy {
	constructor(e) {
		super(), this.len = e.length - 1, this.args = $y(...e.slice(-1)), this.res = e[this.len];
	}
	check(e, t) {
		let n = e.constructor === Function && e.length <= this.len;
		return !n && t?.extend(null, "function", typeof e), n;
	}
}), cb = Fy((e) => typeof e == "function");
Ny(class extends jy {
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = T_(this.shape, (n) => n.check(e, t));
		return !n && t?.extend(null, "Intersectinon", typeof e), n;
	}
}, (e) => e.shape.length > 0);
var lb = class extends jy {
	static _dilutes = !0;
	constructor(e) {
		super(), this.shape = e;
	}
	check(e, t) {
		let n = E_(this.shape, (n) => n.check(e, t));
		return t?.extend(null, "Union", typeof e), n;
	}
}, ub = (...e) => e.findIndex((e) => db.check(e)) >= 0 ? ub(...e.map((e) => Ob(e)).map((e) => db.check(e) ? e.shape : [e]).flat(1)) : e.length === 1 ? e[0] : new lb(e), db = Ny(lb), fb = () => !0, pb = Fy(fb), mb = Ny(Py, (e) => e.shape === fb), hb = Fy((e) => typeof e == "bigint"), gb = Fy((e) => e === hb), _b = Fy((e) => typeof e == "symbol");
Fy((e) => e === _b);
var vb = Fy((e) => typeof e == "number"), yb = Fy((e) => e === vb), bb = Fy((e) => typeof e == "string"), xb = Fy((e) => e === bb), Sb = Fy((e) => typeof e == "boolean"), Cb = Fy((e) => e === Sb), wb = Ly(void 0);
Ny(Iy, (e) => e.shape.length === 1 && e.shape[0] === void 0), Ly(void 0);
var Tb = Ly(null), Eb = Ny(Iy, (e) => e.shape.length === 1 && e.shape[0] === null);
Ny(Uint8Array), Ny(My, (e) => e.shape === Uint8Array);
var Db = ub(vb, bb, Tb, wb, hb, Sb, _b);
(() => {
	let e = tb(pb), t = Xy(bb, pb), n = ub(vb, bb, Tb, Sb, e, t);
	return e.shape = n, t.shape.values = n, n;
})();
var Ob = (e) => {
	if (ob.check(e)) return e;
	if (Jy.check(e)) {
		let t = {};
		for (let n in e) t[n] = Ob(e[n]);
		return Ky(t);
	} else if (rb.check(e)) return ub(...e.map(Ob));
	else if (Db.check(e)) return Ly(e);
	else if (cb.check(e)) return Ny(e);
	/* c8 ignore next */
	yv();
}, kb = py ? () => {} : (e, t) => {
	let n = new ky();
	if (!t.check(e, n)) throw _v(`Expected value to be of type ${t.constructor.name}.\n${n.toString()}`);
}, Ab = class {
	constructor(e) {
		this.patterns = [], this.$state = e;
	}
	if(e, t) {
		return this.patterns.push({
			if: Ob(e),
			h: t
		}), this;
	}
	else(e) {
		return this.if(pb, e);
	}
	done() {
		return (e, t) => {
			for (let n = 0; n < this.patterns.length; n++) {
				let r = this.patterns[n];
				if (r.if.check(e)) return r.h(e, t);
			}
			throw _v("Unhandled pattern");
		};
	}
}, jb = ((e) => new Ab(e))(pb).if(yb, (e, t) => Sy(t, j_, A_)).if(xb, (e, t) => Ey(t)).if(Cb, (e, t) => xy(t)).if(gb, (e, t) => BigInt(Sy(t, j_, A_))).if(db, (e, t) => Mb(t, Dy(t, e.shape))).if(qy, (e, t) => {
	let n = {};
	for (let r in e.shape) {
		let i = e.shape[r];
		if (Uy.check(i)) {
			if (xy(t)) continue;
			i = i.shape;
		}
		n[r] = jb(i, t);
	}
	return n;
}).if(nb, (e, t) => {
	let n = [], r = Cy(t, 0, 42);
	for (let i = 0; i < r; i++) n.push(Mb(t, e.shape));
	return n;
}).if(Ry, (e, t) => Dy(t, e.shape)).if(Eb, (e, t) => null).if(sb, (e, t) => {
	let n = Mb(t, e.res);
	return () => n;
}).if(mb, (e, t) => Mb(t, Dy(t, [
	vb,
	bb,
	Tb,
	wb,
	hb,
	Sb,
	tb(vb),
	Xy(ub("a", "b", "c"), vb)
]))).if(Zy, (e, t) => {
	let n = {}, r = Sy(t, 0, 3);
	for (let i = 0; i < r; i++) {
		let r = Mb(t, e.shape.keys);
		n[r] = Mb(t, e.shape.values);
	}
	return n;
}).done(), Mb = (e, t) => jb(Ob(t), e), Nb = typeof document < "u" ? document : {};
Fy((e) => e.nodeType === Rb), typeof DOMParser < "u" && new DOMParser(), Fy((e) => e.nodeType === Fb), Fy((e) => e.nodeType === Ib);
var Pb = (e) => y_(e, (e, t) => `${t}:${e};`).join(""), Fb = Nb.ELEMENT_NODE, Ib = Nb.TEXT_NODE;
Nb.CDATA_SECTION_NODE, Nb.COMMENT_NODE;
var Lb = Nb.DOCUMENT_NODE;
Nb.DOCUMENT_TYPE_NODE;
var Rb = Nb.DOCUMENT_FRAGMENT_NODE;
Fy((e) => e.nodeType === Lb);
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/lib0/eventloop.js
var zb = ((e) => class {
	constructor(e) {
		this._ = e;
	}
	destroy() {
		e(this._);
	}
})(clearTimeout), Bb = (e, t) => new zb(setTimeout(t, e)), Vb = Symbol, Hb = Vb(), Ub = Vb(), Wb = Vb(), Gb = Vb(), Kb = Vb(), qb = Vb(), Jb = Vb(), Yb = Vb(), Xb = Vb(), Zb = (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = 0;
	for (; r < e.length; r++) {
		let n = e[r];
		if (n === void 0) break;
		if (n.constructor === String || n.constructor === Number) t.push(n);
		else if (n.constructor === Object) break;
	}
	for (r > 0 && n.push(t.join("")); r < e.length; r++) {
		let t = e[r];
		t instanceof Symbol || n.push(t);
	}
	return n;
};
Lv();
/* c8 ignore stop */
//#endregion
//#region ../../node_modules/lib0/logging.js
var Qb = {
	[Hb]: by("font-weight", "bold"),
	[Ub]: by("font-weight", "normal"),
	[Wb]: by("color", "blue"),
	[Kb]: by("color", "green"),
	[Gb]: by("color", "grey"),
	[qb]: by("color", "red"),
	[Jb]: by("color", "purple"),
	[Yb]: by("color", "orange"),
	[Xb]: by("color", "black")
}, $b = my ? (e) => {
	e.length === 1 && e[0]?.constructor === Function && (e = e[0]());
	let t = [], n = [], r = g_(), i = [], a = 0;
	for (; a < e.length; a++) {
		let i = e[a], o = Qb[i];
		if (o !== void 0) r.set(o.left, o.right);
		else {
			if (i === void 0) break;
			if (i.constructor === String || i.constructor === Number) {
				let e = Pb(r);
				a > 0 || e.length > 0 ? (t.push("%c" + i), n.push(e)) : t.push(i);
			} else break;
		}
	}
	for (a > 0 && (i = n, i.unshift(t.join(""))); a < e.length; a++) {
		let t = e[a];
		t instanceof Symbol || i.push(t);
	}
	return i;
} : Zb, ex = (...e) => {
	/* c8 ignore next */
	console.log(...$b(e)), nx.forEach((t) => t.print(e));
}, tx = (...e) => {
	console.warn(...$b(e)), e.unshift(Yb), nx.forEach((t) => t.print(e));
}, nx = x_(), rx = (e) => ({
	[Symbol.iterator]() {
		return this;
	},
	next: e
}), ix = (e, t) => rx(() => {
	let n;
	do
		n = e.next();
	while (!n.done && !t(n.value));
	return n;
}), ax = (e, t) => rx(() => {
	let { done: n, value: r } = e.next();
	return {
		done: n,
		value: n ? void 0 : t(r)
	};
}), ox = class {
	constructor(e, t) {
		this.clock = e, this.len = t;
	}
}, sx = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map();
	}
}, cx = (e, t, n) => t.clients.forEach((t, r) => {
	let i = e.doc.store.clients.get(r);
	if (i != null) {
		let r = i[i.length - 1], a = r.id.clock + r.length;
		for (let r = 0, o = t[r]; r < t.length && o.clock < a; o = t[++r]) TS(e, i, o.clock, o.len, n);
	}
}), lx = (e, t) => {
	let n = 0, r = e.length - 1;
	for (; n <= r;) {
		let i = oh((n + r) / 2), a = e[i], o = a.clock;
		if (o <= t) {
			if (t < o + a.len) return i;
			n = i + 1;
		} else r = i - 1;
	}
	return null;
}, ux = (e, t) => {
	let n = e.clients.get(t.client);
	return n !== void 0 && lx(n, t.clock) !== null;
}, dx = (e) => {
	e.clients.forEach((e) => {
		e.sort((e, t) => e.clock - t.clock);
		let t, n;
		for (t = 1, n = 1; t < e.length; t++) {
			let r = e[n - 1], i = e[t];
			r.clock + r.len >= i.clock ? e[n - 1] = new ox(r.clock, lh(r.len, i.clock + i.len - r.clock)) : (n < t && (e[n] = i), n++);
		}
		e.length = n;
	});
}, fx = (e) => {
	let t = new sx();
	for (let n = 0; n < e.length; n++) e[n].clients.forEach((r, i) => {
		if (!t.clients.has(i)) {
			let a = r.slice();
			for (let t = n + 1; t < e.length; t++) C_(a, e[t].clients.get(i) || []);
			t.clients.set(i, a);
		}
	});
	return dx(t), t;
}, px = (e, t, n, r) => {
	v_(e.clients, t, () => []).push(new ox(n, r));
}, mx = () => new sx(), hx = (e) => {
	let t = mx();
	return e.clients.forEach((e, n) => {
		let r = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (n.deleted) {
				let i = n.id.clock, a = n.length;
				if (t + 1 < e.length) for (let n = e[t + 1]; t + 1 < e.length && n.deleted; n = e[++t + 1]) a += n.length;
				r.push(new ox(i, a));
			}
		}
		r.length > 0 && t.clients.set(n, r);
	}), t;
}, gx = (e, t) => {
	q(e.restEncoder, t.clients.size), w_(t.clients.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
		e.resetDsCurVal(), q(e.restEncoder, t);
		let r = n.length;
		q(e.restEncoder, r);
		for (let t = 0; t < r; t++) {
			let r = n[t];
			e.writeDsClock(r.clock), e.writeDsLen(r.len);
		}
	});
}, _x = (e) => {
	let t = new sx(), n = J(e.restDecoder);
	for (let r = 0; r < n; r++) {
		e.resetDsCurVal();
		let n = J(e.restDecoder), r = J(e.restDecoder);
		if (r > 0) {
			let i = v_(t.clients, n, () => []);
			for (let t = 0; t < r; t++) i.push(new ox(e.readDsClock(), e.readDsLen()));
		}
	}
	return t;
}, vx = (e, t, n) => {
	let r = new sx(), i = J(e.restDecoder);
	for (let a = 0; a < i; a++) {
		e.resetDsCurVal();
		let i = J(e.restDecoder), a = J(e.restDecoder), o = n.clients.get(i) || [], s = _S(n, i);
		for (let n = 0; n < a; n++) {
			let n = e.readDsClock(), a = n + e.readDsLen();
			if (n < s) {
				s < a && px(r, i, s, a - s);
				let e = yS(o, n), c = o[e];
				for (!c.deleted && c.id.clock < n && (o.splice(e + 1, 0, Vw(t, c, n - c.id.clock)), e++); e < o.length && (c = o[e++], c.id.clock < a);) c.deleted || (a < c.id.clock + c.length && o.splice(e, 0, Vw(t, c, a - c.id.clock)), c.delete(t));
			} else px(r, i, n, a - n);
		}
	}
	if (r.clients.size > 0) {
		let e = new Ox();
		return q(e.restEncoder, 0), gx(e, r), e.toUint8Array();
	}
	return null;
}, yx = Eh, bx = class e extends k_ {
	constructor({ guid: e = kh(), collectionid: t = null, gc: n = !0, gcFilter: r = () => !0, meta: i = null, autoLoad: a = !1, shouldLoad: o = !0 } = {}) {
		super(), this.gc = n, this.gcFilter = r, this.clientID = yx(), this.guid = e, this.collectionid = t, this.share = /* @__PURE__ */ new Map(), this.store = new hS(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = o, this.autoLoad = a, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = Rv((e) => {
			this.on("load", () => {
				this.isLoaded = !0, e(this);
			});
		});
		let s = () => Rv((e) => {
			let t = (n) => {
				(n === void 0 || n === !0) && (this.off("sync", t), e());
			};
			this.on("sync", t);
		});
		this.on("sync", (e) => {
			e === !1 && this.isSynced && (this.whenSynced = s()), this.isSynced = e === void 0 || e === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
		}), this.whenSynced = s();
	}
	load() {
		let e = this._item;
		e !== null && !this.shouldLoad && X(e.parent.doc, (e) => {
			e.subdocsLoaded.add(this);
		}, null, !0), this.shouldLoad = !0;
	}
	getSubdocs() {
		return this.subdocs;
	}
	getSubdocGuids() {
		return new Set(w_(this.subdocs).map((e) => e.guid));
	}
	transact(e, t = null) {
		return X(this, e, t);
	}
	get(e, t = cC) {
		let n = v_(this.share, e, () => {
			let e = new t();
			return e._integrate(this, null), e;
		}), r = n.constructor;
		if (t !== cC && r !== t) if (r === cC) {
			let r = new t();
			r._map = n._map, n._map.forEach((e) => {
				for (; e !== null; e = e.left) e.parent = r;
			}), r._start = n._start;
			for (let e = r._start; e !== null; e = e.right) e.parent = r;
			return r._length = n._length, this.share.set(e, r), r._integrate(this, null), r;
		} else throw Error(`Type with the name ${e} has already been defined with a different constructor`);
		return n;
	}
	getArray(e = "") {
		return this.get(e, kC);
	}
	getText(e = "") {
		return this.get(e, XC);
	}
	getMap(e = "") {
		return this.get(e, MC);
	}
	getXmlElement(e = "") {
		return this.get(e, tw);
	}
	getXmlFragment(e = "") {
		return this.get(e, $C);
	}
	toJSON() {
		let e = {};
		return this.share.forEach((t, n) => {
			e[n] = t.toJSON();
		}), e;
	}
	destroy() {
		this.isDestroyed = !0, w_(this.subdocs).forEach((e) => e.destroy());
		let t = this._item;
		if (t !== null) {
			this._item = null;
			let n = t.content;
			n.doc = new e({
				guid: this.guid,
				...n.opts,
				shouldLoad: !1
			}), n.doc._item = t, X(t.parent.doc, (e) => {
				let r = n.doc;
				t.deleted || e.subdocsAdded.add(r), e.subdocsRemoved.add(this);
			}, null, !0);
		}
		this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
	}
}, xx = class {
	constructor(e) {
		this.restDecoder = e;
	}
	resetDsCurVal() {}
	readDsClock() {
		return J(this.restDecoder);
	}
	readDsLen() {
		return J(this.restDecoder);
	}
}, Sx = class extends xx {
	readLeftID() {
		return Y(J(this.restDecoder), J(this.restDecoder));
	}
	readRightID() {
		return Y(J(this.restDecoder), J(this.restDecoder));
	}
	readClient() {
		return J(this.restDecoder);
	}
	readInfo() {
		return Dv(this.restDecoder);
	}
	readString() {
		return kv(this.restDecoder);
	}
	readParentInfo() {
		return J(this.restDecoder) === 1;
	}
	readTypeRef() {
		return J(this.restDecoder);
	}
	readLen() {
		return J(this.restDecoder);
	}
	readAny() {
		return Mv(this.restDecoder);
	}
	readBuf() {
		return _y(Ev(this.restDecoder));
	}
	readJSON() {
		return JSON.parse(kv(this.restDecoder));
	}
	readKey() {
		return kv(this.restDecoder);
	}
}, Cx = class {
	constructor(e) {
		this.dsCurrVal = 0, this.restDecoder = e;
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	readDsClock() {
		return this.dsCurrVal += J(this.restDecoder), this.dsCurrVal;
	}
	readDsLen() {
		let e = J(this.restDecoder) + 1;
		return this.dsCurrVal += e, e;
	}
}, wx = class extends Cx {
	constructor(e) {
		super(e), this.keys = [], J(e), this.keyClockDecoder = new Fv(Ev(e)), this.clientDecoder = new Pv(Ev(e)), this.leftClockDecoder = new Fv(Ev(e)), this.rightClockDecoder = new Fv(Ev(e)), this.infoDecoder = new Nv(Ev(e), Dv), this.stringDecoder = new Iv(Ev(e)), this.parentInfoDecoder = new Nv(Ev(e), Dv), this.typeRefDecoder = new Pv(Ev(e)), this.lenDecoder = new Pv(Ev(e));
	}
	readLeftID() {
		return new Zx(this.clientDecoder.read(), this.leftClockDecoder.read());
	}
	readRightID() {
		return new Zx(this.clientDecoder.read(), this.rightClockDecoder.read());
	}
	readClient() {
		return this.clientDecoder.read();
	}
	readInfo() {
		return this.infoDecoder.read();
	}
	readString() {
		return this.stringDecoder.read();
	}
	readParentInfo() {
		return this.parentInfoDecoder.read() === 1;
	}
	readTypeRef() {
		return this.typeRefDecoder.read();
	}
	readLen() {
		return this.lenDecoder.read();
	}
	readAny() {
		return Mv(this.restDecoder);
	}
	readBuf() {
		return Ev(this.restDecoder);
	}
	readJSON() {
		return Mv(this.restDecoder);
	}
	readKey() {
		let e = this.keyClockDecoder.read();
		if (e < this.keys.length) return this.keys[e];
		{
			let e = this.stringDecoder.read();
			return this.keys.push(e), e;
		}
	}
}, Tx = class {
	constructor() {
		this.restEncoder = G_();
	}
	toUint8Array() {
		return J_(this.restEncoder);
	}
	resetDsCurVal() {}
	writeDsClock(e) {
		q(this.restEncoder, e);
	}
	writeDsLen(e) {
		q(this.restEncoder, e);
	}
}, Ex = class extends Tx {
	writeLeftID(e) {
		q(this.restEncoder, e.client), q(this.restEncoder, e.clock);
	}
	writeRightID(e) {
		q(this.restEncoder, e.client), q(this.restEncoder, e.clock);
	}
	writeClient(e) {
		q(this.restEncoder, e);
	}
	writeInfo(e) {
		Z_(this.restEncoder, e);
	}
	writeString(e) {
		tv(this.restEncoder, e);
	}
	writeParentInfo(e) {
		q(this.restEncoder, +!!e);
	}
	writeTypeRef(e) {
		q(this.restEncoder, e);
	}
	writeLen(e) {
		q(this.restEncoder, e);
	}
	writeAny(e) {
		uv(this.restEncoder, e);
	}
	writeBuf(e) {
		rv(this.restEncoder, e);
	}
	writeJSON(e) {
		tv(this.restEncoder, JSON.stringify(e));
	}
	writeKey(e) {
		tv(this.restEncoder, e);
	}
}, Dx = class {
	constructor() {
		this.restEncoder = G_(), this.dsCurrVal = 0;
	}
	toUint8Array() {
		return J_(this.restEncoder);
	}
	resetDsCurVal() {
		this.dsCurrVal = 0;
	}
	writeDsClock(e) {
		let t = e - this.dsCurrVal;
		this.dsCurrVal = e, q(this.restEncoder, t);
	}
	writeDsLen(e) {
		e === 0 && yv(), q(this.restEncoder, e - 1), this.dsCurrVal += e;
	}
}, Ox = class extends Dx {
	constructor() {
		super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new hv(), this.clientEncoder = new pv(), this.leftClockEncoder = new hv(), this.rightClockEncoder = new hv(), this.infoEncoder = new dv(Z_), this.stringEncoder = new gv(), this.parentInfoEncoder = new dv(Z_), this.typeRefEncoder = new pv(), this.lenEncoder = new pv();
	}
	toUint8Array() {
		let e = G_();
		return q(e, 0), rv(e, this.keyClockEncoder.toUint8Array()), rv(e, this.clientEncoder.toUint8Array()), rv(e, this.leftClockEncoder.toUint8Array()), rv(e, this.rightClockEncoder.toUint8Array()), rv(e, J_(this.infoEncoder)), rv(e, this.stringEncoder.toUint8Array()), rv(e, J_(this.parentInfoEncoder)), rv(e, this.typeRefEncoder.toUint8Array()), rv(e, this.lenEncoder.toUint8Array()), nv(e, J_(this.restEncoder)), J_(e);
	}
	writeLeftID(e) {
		this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
	}
	writeRightID(e) {
		this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
	}
	writeClient(e) {
		this.clientEncoder.write(e);
	}
	writeInfo(e) {
		this.infoEncoder.write(e);
	}
	writeString(e) {
		this.stringEncoder.write(e);
	}
	writeParentInfo(e) {
		this.parentInfoEncoder.write(+!!e);
	}
	writeTypeRef(e) {
		this.typeRefEncoder.write(e);
	}
	writeLen(e) {
		this.lenEncoder.write(e);
	}
	writeAny(e) {
		uv(this.restEncoder, e);
	}
	writeBuf(e) {
		rv(this.restEncoder, e);
	}
	writeJSON(e) {
		uv(this.restEncoder, e);
	}
	writeKey(e) {
		let t = this.keyMap.get(e);
		t === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(t);
	}
}, kx = (e, t, n, r) => {
	r = lh(r, t[0].id.clock);
	let i = yS(t, r);
	q(e.restEncoder, t.length - i), e.writeClient(n), q(e.restEncoder, r);
	let a = t[i];
	a.write(e, r - a.id.clock);
	for (let n = i + 1; n < t.length; n++) t[n].write(e, 0);
}, Ax = (e, t, n) => {
	let r = /* @__PURE__ */ new Map();
	n.forEach((e, n) => {
		_S(t, n) > e && r.set(n, e);
	}), gS(t).forEach((e, t) => {
		n.has(t) || r.set(t, 0);
	}), q(e.restEncoder, r.size), w_(r.entries()).sort((e, t) => t[0] - e[0]).forEach(([n, r]) => {
		kx(e, t.clients.get(n), n, r);
	});
}, jx = (e, t) => {
	let n = g_(), r = J(e.restDecoder);
	for (let i = 0; i < r; i++) {
		let r = J(e.restDecoder), i = Array(r), a = e.readClient(), o = J(e.restDecoder);
		n.set(a, {
			i: 0,
			refs: i
		});
		for (let n = 0; n < r; n++) {
			let r = e.readInfo();
			switch (31 & r) {
				case 0: {
					let t = e.readLen();
					i[n] = new uw(Y(a, o), t), o += t;
					break;
				}
				case 10: {
					let t = J(e.restDecoder);
					i[n] = new qw(Y(a, o), t), o += t;
					break;
				}
				default: {
					let s = (r & 192) == 0, c = new Z(Y(a, o), null, (r & 128) == 128 ? e.readLeftID() : null, null, (r & 64) == 64 ? e.readRightID() : null, s ? e.readParentInfo() ? t.get(e.readString()) : e.readLeftID() : null, s && (r & 32) == 32 ? e.readString() : null, Ww(e, r));
					i[n] = c, o += c.length;
				}
			}
		}
	}
	return n;
}, Mx = (e, t, n) => {
	let r = [], i = w_(n.keys()).sort((e, t) => e - t);
	if (i.length === 0) return null;
	let a = () => {
		if (i.length === 0) return null;
		let e = n.get(i[i.length - 1]);
		for (; e.refs.length === e.i;) if (i.pop(), i.length > 0) e = n.get(i[i.length - 1]);
		else return null;
		return e;
	}, o = a();
	if (o === null) return null;
	let s = new hS(), c = /* @__PURE__ */ new Map(), l = (e, t) => {
		let n = c.get(e);
		(n == null || n > t) && c.set(e, t);
	}, u = o.refs[o.i++], d = /* @__PURE__ */ new Map(), f = () => {
		for (let e of r) {
			let t = e.id.client, r = n.get(t);
			r ? (r.i--, s.clients.set(t, r.refs.slice(r.i)), n.delete(t), r.i = 0, r.refs = []) : s.clients.set(t, [e]), i = i.filter((e) => e !== t);
		}
		r.length = 0;
	};
	for (;;) {
		if (u.constructor !== qw) {
			let i = v_(d, u.id.client, () => _S(t, u.id.client)) - u.id.clock;
			if (i < 0) r.push(u), l(u.id.client, u.id.clock - 1), f();
			else {
				let a = u.getMissing(e, t);
				if (a !== null) {
					r.push(u);
					let e = n.get(a) || {
						refs: [],
						i: 0
					};
					if (e.refs.length === e.i) l(a, _S(t, a)), f();
					else {
						u = e.refs[e.i++];
						continue;
					}
				} else (i === 0 || i < u.length) && (u.integrate(e, i), d.set(u.id.client, u.id.clock + u.length));
			}
		}
		if (r.length > 0) u = r.pop();
		else if (o !== null && o.i < o.refs.length) u = o.refs[o.i++];
		else {
			if (o = a(), o === null) break;
			u = o.refs[o.i++];
		}
	}
	if (s.clients.size > 0) {
		let e = new Ox();
		return Ax(e, s, /* @__PURE__ */ new Map()), q(e.restEncoder, 0), {
			missing: c,
			update: e.toUint8Array()
		};
	}
	return null;
}, Nx = (e, t) => Ax(e, t.doc.store, t.beforeState), Px = (e, t, n, r = new wx(e)) => X(t, (e) => {
	e.local = !1;
	let t = !1, n = e.doc, i = n.store, a = Mx(e, i, jx(r, n)), o = i.pendingStructs;
	if (o) {
		for (let [e, n] of o.missing) if (n < _S(i, e)) {
			t = !0;
			break;
		}
		if (a) {
			for (let [e, t] of a.missing) {
				let n = o.missing.get(e);
				(n == null || n > t) && o.missing.set(e, t);
			}
			o.update = HS([o.update, a.update]);
		}
	} else i.pendingStructs = a;
	let s = vx(r, e, i);
	if (i.pendingDs) {
		let t = new wx(Cv(i.pendingDs));
		J(t.restDecoder);
		let n = vx(t, e, i);
		s && n ? i.pendingDs = HS([s, n]) : i.pendingDs = s || n;
	} else i.pendingDs = s;
	if (t) {
		let t = i.pendingStructs.update;
		i.pendingStructs = null, Fx(e.doc, t);
	}
}, n, !1), Fx = (e, t, n, r = wx) => {
	let i = Cv(t);
	Px(i, e, n, new r(i));
}, Ix = (e, t, n) => Fx(e, t, n, Sx), Lx = (e, t, n = /* @__PURE__ */ new Map()) => {
	Ax(e, t.store, n), gx(e, hx(t.store));
}, Rx = (e, t = new Uint8Array([0]), n = new Ox()) => {
	Lx(n, e, Vx(t));
	let r = [n.toUint8Array()];
	if (e.store.pendingDs && r.push(e.store.pendingDs), e.store.pendingStructs && r.push(US(e.store.pendingStructs.update, t)), r.length > 1) {
		if (n.constructor === Ex) return BS(r.map((e, t) => t === 0 ? e : JS(e)));
		if (n.constructor === Ox) return HS(r);
	}
	return r[0];
}, zx = (e, t) => Rx(e, t, new Ex()), Bx = (e) => {
	let t = /* @__PURE__ */ new Map(), n = J(e.restDecoder);
	for (let r = 0; r < n; r++) {
		let n = J(e.restDecoder), r = J(e.restDecoder);
		t.set(n, r);
	}
	return t;
}, Vx = (e) => Bx(new xx(Cv(e))), Hx = (e, t) => (q(e.restEncoder, t.size), w_(t.entries()).sort((e, t) => t[0] - e[0]).forEach(([t, n]) => {
	q(e.restEncoder, t), q(e.restEncoder, n);
}), e), Ux = (e, t) => Hx(e, gS(t.store)), Wx = (e, t = new Dx()) => (e instanceof Map ? Hx(t, e) : Ux(t, e), t.toUint8Array()), Gx = (e) => Wx(e, new Tx()), Kx = class {
	constructor() {
		this.l = [];
	}
}, qx = () => new Kx(), Jx = (e, t) => e.l.push(t), Yx = (e, t) => {
	let n = e.l, r = n.length;
	e.l = n.filter((e) => t !== e), r === e.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, Xx = (e, t, n) => ty(e.l, [t, n]), Zx = class {
	constructor(e, t) {
		this.client = e, this.clock = t;
	}
}, Qx = (e, t) => e === t || e !== null && t !== null && e.client === t.client && e.clock === t.clock, Y = (e, t) => new Zx(e, t), $x = (e) => {
	for (let [t, n] of e.doc.share.entries()) if (n === e) return t;
	throw yv();
}, eS = (e, t) => {
	for (; t !== null;) {
		if (t.parent === e) return !0;
		t = t.parent._item;
	}
	return !1;
}, tS = class {
	constructor(e, t, n, r = 0) {
		this.type = e, this.tname = t, this.item = n, this.assoc = r;
	}
}, nS = (e) => new tS(e.type == null ? null : Y(e.type.client, e.type.clock), e.tname ?? null, e.item == null ? null : Y(e.item.client, e.item.clock), e.assoc == null ? 0 : e.assoc), rS = class {
	constructor(e, t, n = 0) {
		this.type = e, this.index = t, this.assoc = n;
	}
}, iS = (e, t, n = 0) => new rS(e, t, n), aS = (e, t, n) => {
	let r = null, i = null;
	return e._item === null ? i = $x(e) : r = Y(e._item.id.client, e._item.id.clock), new tS(r, i, t, n);
}, oS = (e, t, n = 0) => {
	let r = e._start;
	if (n < 0) {
		if (t === 0) return aS(e, null, n);
		t--;
	}
	for (; r !== null;) {
		if (!r.deleted && r.countable) {
			if (r.length > t) return aS(e, Y(r.id.client, r.id.clock + t), n);
			t -= r.length;
		}
		if (r.right === null && n < 0) return aS(e, r.lastId, n);
		r = r.right;
	}
	return aS(e, null, n);
}, sS = (e, t) => {
	let n = bS(e, t);
	return {
		item: n,
		diff: t.clock - n.id.clock
	};
}, cS = (e, t, n = !0) => {
	let r = t.store, i = e.item, a = e.type, o = e.tname, s = e.assoc, c = null, l = 0;
	if (i !== null) {
		if (_S(r, i.client) <= i.clock) return null;
		let e = n ? zw(r, i) : sS(r, i), t = e.item;
		if (!(t instanceof Z)) return null;
		if (c = t.parent, c._item === null || !c._item.deleted) {
			l = t.deleted || !t.countable ? 0 : e.diff + (s >= 0 ? 0 : 1);
			let n = t.left;
			for (; n !== null;) !n.deleted && n.countable && (l += n.length), n = n.left;
		}
	} else {
		if (o !== null) c = t.get(o);
		else if (a !== null) {
			if (_S(r, a.client) <= a.clock) return null;
			let { item: e } = n ? zw(r, a) : { item: bS(r, a) };
			if (e instanceof Z && e.content instanceof Lw) c = e.content.type;
			else return null;
		} else throw yv();
		l = s >= 0 ? c._length : 0;
	}
	return iS(c, l, e.assoc);
}, lS = (e, t) => e === t || e !== null && t !== null && e.tname === t.tname && Qx(e.item, t.item) && Qx(e.type, t.type) && e.assoc === t.assoc, uS = class {
	constructor(e, t) {
		this.ds = e, this.sv = t;
	}
}, dS = (e, t) => new uS(e, t);
dS(mx(), /* @__PURE__ */ new Map());
var fS = (e) => dS(hx(e.store), gS(e.store)), pS = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && (t.sv.get(e.id.client) || 0) > e.id.clock && !ux(t.ds, e.id), mS = (e, t) => {
	let n = v_(e.meta, mS, x_), r = e.doc.store;
	n.has(t) || (t.sv.forEach((t, n) => {
		t < _S(r, n) && SS(e, Y(n, t));
	}), cx(e, t.ds, (e) => {}), n.add(t));
}, hS = class {
	constructor() {
		this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
	}
}, gS = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.clients.forEach((e, n) => {
		let r = e[e.length - 1];
		t.set(n, r.id.clock + r.length);
	}), t;
}, _S = (e, t) => {
	let n = e.clients.get(t);
	if (n === void 0) return 0;
	let r = n[n.length - 1];
	return r.id.clock + r.length;
}, vS = (e, t) => {
	let n = e.clients.get(t.id.client);
	if (n === void 0) n = [], e.clients.set(t.id.client, n);
	else {
		let e = n[n.length - 1];
		if (e.id.clock + e.length !== t.id.clock) throw yv();
	}
	n.push(t);
}, yS = (e, t) => {
	let n = 0, r = e.length - 1, i = e[r], a = i.id.clock;
	if (a === t) return r;
	let o = oh(t / (a + i.length - 1) * r);
	for (; n <= r;) {
		if (i = e[o], a = i.id.clock, a <= t) {
			if (t < a + i.length) return o;
			n = o + 1;
		} else r = o - 1;
		o = oh((n + r) / 2);
	}
	throw yv();
}, bS = (e, t) => {
	let n = e.clients.get(t.client);
	return n[yS(n, t.clock)];
}, xS = (e, t, n) => {
	let r = yS(t, n), i = t[r];
	return i.id.clock < n && i instanceof Z ? (t.splice(r + 1, 0, Vw(e, i, n - i.id.clock)), r + 1) : r;
}, SS = (e, t) => {
	let n = e.doc.store.clients.get(t.client);
	return n[xS(e, n, t.clock)];
}, CS = (e, t, n) => {
	let r = t.clients.get(n.client), i = yS(r, n.clock), a = r[i];
	return n.clock !== a.id.clock + a.length - 1 && a.constructor !== uw && r.splice(i + 1, 0, Vw(e, a, n.clock - a.id.clock + 1)), a;
}, wS = (e, t, n) => {
	let r = e.clients.get(t.id.client);
	r[yS(r, t.id.clock)] = n;
}, TS = (e, t, n, r, i) => {
	if (r === 0) return;
	let a = n + r, o = xS(e, t, n), s;
	do
		s = t[o++], a < s.id.clock + s.length && xS(e, t, a), i(s);
	while (o < t.length && t[o].id.clock < a);
}, ES = class {
	constructor(e, t, n) {
		this.doc = e, this.deleteSet = new sx(), this.beforeState = gS(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = t, this.meta = /* @__PURE__ */ new Map(), this.local = n, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
	}
}, DS = (e, t) => t.deleteSet.clients.size === 0 && !b_(t.afterState, (e, n) => t.beforeState.get(n) !== e) ? !1 : (dx(t.deleteSet), Nx(e, t), gx(e, t.deleteSet), !0), OS = (e, t, n) => {
	let r = t._item;
	(r === null || r.id.clock < (e.beforeState.get(r.id.client) || 0) && !r.deleted) && v_(e.changed, t, x_).add(n);
}, kS = (e, t) => {
	let n = e[t], r = e[t - 1], i = t;
	for (; i > 0; n = r, r = e[--i - 1]) {
		if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
			n instanceof Z && n.parentSub !== null && n.parent._map.get(n.parentSub) === n && n.parent._map.set(n.parentSub, r);
			continue;
		}
		break;
	}
	let a = t - i;
	return a && e.splice(t + 1 - a, a), a;
}, AS = (e, t, n) => {
	for (let [r, i] of e.clients.entries()) {
		let e = t.clients.get(r);
		for (let r = i.length - 1; r >= 0; r--) {
			let a = i[r], o = a.clock + a.len;
			for (let r = yS(e, a.clock), i = e[r]; r < e.length && i.id.clock < o; i = e[++r]) {
				let i = e[r];
				if (a.clock + a.len <= i.id.clock) break;
				i instanceof Z && i.deleted && !i.keep && n(i) && i.gc(t, !1);
			}
		}
	}
}, jS = (e, t) => {
	e.clients.forEach((e, n) => {
		let r = t.clients.get(n);
		for (let t = e.length - 1; t >= 0; t--) {
			let n = e[t], i = ch(r.length - 1, 1 + yS(r, n.clock + n.len - 1));
			for (let e = i, t = r[e]; e > 0 && t.id.clock >= n.clock; t = r[e]) e -= 1 + kS(r, e);
		}
	});
}, MS = (e, t) => {
	if (t < e.length) {
		let n = e[t], r = n.doc, i = r.store, a = n.deleteSet, o = n._mergeStructs;
		try {
			dx(a), n.afterState = gS(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
			let e = [];
			n.changed.forEach((t, r) => e.push(() => {
				(r._item === null || !r._item.deleted) && r._callObserver(n, t);
			})), e.push(() => {
				n.changedParentTypes.forEach((t, r) => {
					r._dEH.l.length > 0 && (r._item === null || !r._item.deleted) && (t = t.filter((e) => e.target._item === null || !e.target._item.deleted), t.forEach((e) => {
						e.currentTarget = r, e._path = null;
					}), t.sort((e, t) => e.path.length - t.path.length), e.push(() => {
						Xx(r._dEH, t, n);
					}));
				}), e.push(() => r.emit("afterTransaction", [n, r])), e.push(() => {
					n._needFormattingCleanup && qC(n);
				});
			}), ty(e, []);
		} finally {
			r.gc && AS(a, i, r.gcFilter), jS(a, i), n.afterState.forEach((e, t) => {
				let r = n.beforeState.get(t) || 0;
				if (r !== e) {
					let e = i.clients.get(t), n = lh(yS(e, r), 1);
					for (let t = e.length - 1; t >= n;) t -= 1 + kS(e, t);
				}
			});
			for (let e = o.length - 1; e >= 0; e--) {
				let { client: t, clock: n } = o[e].id, r = i.clients.get(t), a = yS(r, n);
				a + 1 < r.length && kS(r, a + 1) > 1 || a > 0 && kS(r, a);
			}
			if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (ex(Yb, Hb, "[yjs] ", Ub, qb, "Changed the client-id because another client seems to be using it."), r.clientID = yx()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
				let e = new Ex();
				DS(e, n) && r.emit("update", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			if (r._observers.has("updateV2")) {
				let e = new Ox();
				DS(e, n) && r.emit("updateV2", [
					e.toUint8Array(),
					n.origin,
					r,
					n
				]);
			}
			let { subdocsAdded: s, subdocsLoaded: c, subdocsRemoved: l } = n;
			(s.size > 0 || l.size > 0 || c.size > 0) && (s.forEach((e) => {
				e.clientID = r.clientID, e.collectionid ??= r.collectionid, r.subdocs.add(e);
			}), l.forEach((e) => r.subdocs.delete(e)), r.emit("subdocs", [
				{
					loaded: c,
					added: s,
					removed: l
				},
				r,
				n
			]), l.forEach((e) => e.destroy())), e.length <= t + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, e])) : MS(e, t + 1);
		}
	}
}, X = (e, t, n = null, r = !0) => {
	let i = e._transactionCleanups, a = !1, o = null;
	e._transaction === null && (a = !0, e._transaction = new ES(e, n, r), i.push(e._transaction), i.length === 1 && e.emit("beforeAllTransactions", [e]), e.emit("beforeTransaction", [e._transaction, e]));
	try {
		o = t(e._transaction);
	} finally {
		if (a) {
			let t = e._transaction === i[0];
			e._transaction = null, t && MS(i, 0);
		}
	}
	return o;
}, NS = class {
	constructor(e, t) {
		this.insertions = t, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
	}
}, PS = (e, t, n) => {
	cx(e, n.deletions, (n) => {
		n instanceof Z && t.scope.some((t) => t === e.doc || eS(t, n)) && Bw(n, !1);
	});
}, FS = (e, t, n) => {
	let r = null, i = e.doc, a = e.scope;
	X(i, (n) => {
		for (; t.length > 0 && e.currStackItem === null;) {
			let r = i.store, o = t.pop(), s = /* @__PURE__ */ new Set(), c = [], l = !1;
			cx(n, o.insertions, (e) => {
				if (e instanceof Z) {
					if (e.redone !== null) {
						let { item: t, diff: i } = zw(r, e.id);
						i > 0 && (t = SS(n, Y(t.id.client, t.id.clock + i))), e = t;
					}
					!e.deleted && a.some((t) => t === n.doc || eS(t, e)) && c.push(e);
				}
			}), cx(n, o.deletions, (e) => {
				e instanceof Z && a.some((t) => t === n.doc || eS(t, e)) && !ux(o.insertions, e.id) && s.add(e);
			}), s.forEach((t) => {
				l = Uw(n, t, s, o.insertions, e.ignoreRemoteMapChanges, e) !== null || l;
			});
			for (let t = c.length - 1; t >= 0; t--) {
				let r = c[t];
				e.deleteFilter(r) && (r.delete(n), l = !0);
			}
			e.currStackItem = l ? o : null;
		}
		n.changed.forEach((e, t) => {
			e.has(null) && t._searchMarker && (t._searchMarker.length = 0);
		}), r = n;
	}, e);
	let o = e.currStackItem;
	if (o != null) {
		let t = r.changedParentTypes;
		e.emit("stack-item-popped", [{
			stackItem: o,
			type: n,
			changedParentTypes: t,
			origin: e
		}, e]), e.currStackItem = null;
	}
	return o;
}, IS = class extends k_ {
	constructor(e, { captureTimeout: t = 500, captureTransaction: n = (e) => !0, deleteFilter: r = () => !0, trackedOrigins: i = /* @__PURE__ */ new Set([null]), ignoreRemoteMapChanges: a = !1, doc: o = O_(e) ? e[0].doc : e instanceof bx ? e : e.doc } = {}) {
		super(), this.scope = [], this.doc = o, this.addToScope(e), this.deleteFilter = r, i.add(this), this.trackedOrigins = i, this.captureTransaction = n, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = a, this.captureTimeout = t, this.afterTransactionHandler = (e) => {
			if (!this.captureTransaction(e) || !this.scope.some((t) => e.changedParentTypes.has(t) || t === this.doc) || !this.trackedOrigins.has(e.origin) && (!e.origin || !this.trackedOrigins.has(e.origin.constructor))) return;
			let t = this.undoing, n = this.redoing, r = t ? this.redoStack : this.undoStack;
			t ? this.stopCapturing() : n || this.clear(!1, !0);
			let i = new sx();
			e.afterState.forEach((t, n) => {
				let r = e.beforeState.get(n) || 0, a = t - r;
				a > 0 && px(i, n, r, a);
			});
			let a = Lv(), o = !1;
			if (this.lastChange > 0 && a - this.lastChange < this.captureTimeout && r.length > 0 && !t && !n) {
				let t = r[r.length - 1];
				t.deletions = fx([t.deletions, e.deleteSet]), t.insertions = fx([t.insertions, i]);
			} else r.push(new NS(e.deleteSet, i)), o = !0;
			!t && !n && (this.lastChange = a), cx(e, e.deleteSet, (t) => {
				t instanceof Z && this.scope.some((n) => n === e.doc || eS(n, t)) && Bw(t, !0);
			});
			let s = [{
				stackItem: r[r.length - 1],
				origin: e.origin,
				type: t ? "redo" : "undo",
				changedParentTypes: e.changedParentTypes
			}, this];
			o ? this.emit("stack-item-added", s) : this.emit("stack-item-updated", s);
		}, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
			this.destroy();
		});
	}
	addToScope(e) {
		let t = new Set(this.scope);
		e = O_(e) ? e : [e], e.forEach((e) => {
			t.has(e) || (t.add(e), (e instanceof cC ? e.doc !== this.doc : e !== this.doc) && tx("[yjs#509] Not same Y.Doc"), this.scope.push(e));
		});
	}
	addTrackedOrigin(e) {
		this.trackedOrigins.add(e);
	}
	removeTrackedOrigin(e) {
		this.trackedOrigins.delete(e);
	}
	clear(e = !0, t = !0) {
		(e && this.canUndo() || t && this.canRedo()) && this.doc.transact((n) => {
			e && (this.undoStack.forEach((e) => PS(n, this, e)), this.undoStack = []), t && (this.redoStack.forEach((e) => PS(n, this, e)), this.redoStack = []), this.emit("stack-cleared", [{
				undoStackCleared: e,
				redoStackCleared: t
			}]);
		});
	}
	stopCapturing() {
		this.lastChange = 0;
	}
	undo() {
		this.undoing = !0;
		let e;
		try {
			e = FS(this, this.undoStack, "undo");
		} finally {
			this.undoing = !1;
		}
		return e;
	}
	redo() {
		this.redoing = !0;
		let e;
		try {
			e = FS(this, this.redoStack, "redo");
		} finally {
			this.redoing = !1;
		}
		return e;
	}
	canUndo() {
		return this.undoStack.length > 0;
	}
	canRedo() {
		return this.redoStack.length > 0;
	}
	destroy() {
		this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
	}
};
function* LS(e) {
	let t = J(e.restDecoder);
	for (let n = 0; n < t; n++) {
		let t = J(e.restDecoder), n = e.readClient(), r = J(e.restDecoder);
		for (let i = 0; i < t; i++) {
			let t = e.readInfo();
			if (t === 10) {
				let t = J(e.restDecoder);
				yield new qw(Y(n, r), t), r += t;
			} else if (31 & t) {
				let i = (t & 192) == 0, a = new Z(Y(n, r), null, (t & 128) == 128 ? e.readLeftID() : null, null, (t & 64) == 64 ? e.readRightID() : null, i ? e.readParentInfo() ? e.readString() : e.readLeftID() : null, i && (t & 32) == 32 ? e.readString() : null, Ww(e, t));
				yield a, r += a.length;
			} else {
				let t = e.readLen();
				yield new uw(Y(n, r), t), r += t;
			}
		}
	}
}
var RS = class {
	constructor(e, t) {
		this.gen = LS(e), this.curr = null, this.done = !1, this.filterSkips = t, this.next();
	}
	next() {
		do
			this.curr = this.gen.next().value || null;
		while (this.filterSkips && this.curr !== null && this.curr.constructor === qw);
		return this.curr;
	}
}, zS = class {
	constructor(e) {
		this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
	}
}, BS = (e) => HS(e, Sx, Ex), VS = (e, t) => {
	if (e.constructor === uw) {
		let { client: n, clock: r } = e.id;
		return new uw(Y(n, r + t), e.length - t);
	} else if (e.constructor === qw) {
		let { client: n, clock: r } = e.id;
		return new qw(Y(n, r + t), e.length - t);
	} else {
		let n = e, { client: r, clock: i } = n.id;
		return new Z(Y(r, i + t), null, Y(r, i + t - 1), null, n.rightOrigin, n.parent, n.parentSub, n.content.splice(t));
	}
}, HS = (e, t = wx, n = Ox) => {
	if (e.length === 1) return e[0];
	let r = e.map((e) => new t(Cv(e))), i = r.map((e) => new RS(e, !0)), a = null, o = new n(), s = new zS(o);
	for (; i = i.filter((e) => e.curr !== null), i.sort((e, t) => {
		if (e.curr.id.client === t.curr.id.client) {
			let n = e.curr.id.clock - t.curr.id.clock;
			return n === 0 ? e.curr.constructor === t.curr.constructor ? 0 : e.curr.constructor === qw ? 1 : -1 : n;
		} else return t.curr.id.client - e.curr.id.client;
	}), i.length !== 0;) {
		let e = i[0], t = e.curr.id.client;
		if (a !== null) {
			let n = e.curr, r = !1;
			for (; n !== null && n.id.clock + n.length <= a.struct.id.clock + a.struct.length && n.id.client >= a.struct.id.client;) n = e.next(), r = !0;
			if (n === null || n.id.client !== t || r && n.id.clock > a.struct.id.clock + a.struct.length) continue;
			if (t !== a.struct.id.client) GS(s, a.struct, a.offset), a = {
				struct: n,
				offset: 0
			}, e.next();
			else if (a.struct.id.clock + a.struct.length < n.id.clock) if (a.struct.constructor === qw) a.struct.length = n.id.clock + n.length - a.struct.id.clock;
			else {
				GS(s, a.struct, a.offset);
				let e = n.id.clock - a.struct.id.clock - a.struct.length;
				a = {
					struct: new qw(Y(t, a.struct.id.clock + a.struct.length), e),
					offset: 0
				};
			}
			else {
				let t = a.struct.id.clock + a.struct.length - n.id.clock;
				t > 0 && (a.struct.constructor === qw ? a.struct.length -= t : n = VS(n, t)), a.struct.mergeWith(n) || (GS(s, a.struct, a.offset), a = {
					struct: n,
					offset: 0
				}, e.next());
			}
		} else a = {
			struct: e.curr,
			offset: 0
		}, e.next();
		for (let n = e.curr; n !== null && n.id.client === t && n.id.clock === a.struct.id.clock + a.struct.length && n.constructor !== qw; n = e.next()) GS(s, a.struct, a.offset), a = {
			struct: n,
			offset: 0
		};
	}
	return a !== null && (GS(s, a.struct, a.offset), a = null), KS(s), gx(o, fx(r.map((e) => _x(e)))), o.toUint8Array();
}, US = (e, t, n = wx, r = Ox) => {
	let i = Vx(t), a = new r(), o = new zS(a), s = new n(Cv(e)), c = new RS(s, !1);
	for (; c.curr;) {
		let e = c.curr, t = e.id.client, n = i.get(t) || 0;
		if (c.curr.constructor === qw) {
			c.next();
			continue;
		}
		if (e.id.clock + e.length > n) for (GS(o, e, lh(n - e.id.clock, 0)), c.next(); c.curr && c.curr.id.client === t;) GS(o, c.curr, 0), c.next();
		else for (; c.curr && c.curr.id.client === t && c.curr.id.clock + c.curr.length <= n;) c.next();
	}
	return KS(o), gx(a, _x(s)), a.toUint8Array();
}, WS = (e) => {
	e.written > 0 && (e.clientStructs.push({
		written: e.written,
		restEncoder: J_(e.encoder.restEncoder)
	}), e.encoder.restEncoder = G_(), e.written = 0);
}, GS = (e, t, n) => {
	e.written > 0 && e.currClient !== t.id.client && WS(e), e.written === 0 && (e.currClient = t.id.client, e.encoder.writeClient(t.id.client), q(e.encoder.restEncoder, t.id.clock + n)), t.write(e.encoder, n), e.written++;
}, KS = (e) => {
	WS(e);
	let t = e.encoder.restEncoder;
	q(t, e.clientStructs.length);
	for (let n = 0; n < e.clientStructs.length; n++) {
		let r = e.clientStructs[n];
		q(t, r.written), nv(t, r.restEncoder);
	}
}, qS = (e, t, n, r) => {
	let i = new n(Cv(e)), a = new RS(i, !1), o = new r(), s = new zS(o);
	for (let e = a.curr; e !== null; e = a.next()) GS(s, t(e), 0);
	return KS(s), gx(o, _x(i)), o.toUint8Array();
}, JS = (e) => qS(e, ny, wx, Ex), YS = "You must not compute changes after the event-handler fired.", XS = class {
	constructor(e, t) {
		this.target = e, this.currentTarget = e, this.transaction = t, this._changes = null, this._keys = null, this._delta = null, this._path = null;
	}
	get path() {
		return this._path ||= ZS(this.currentTarget, this.target);
	}
	deletes(e) {
		return ux(this.transaction.deleteSet, e.id);
	}
	get keys() {
		if (this._keys === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw _v(YS);
			let e = /* @__PURE__ */ new Map(), t = this.target;
			this.transaction.changed.get(t).forEach((n) => {
				if (n !== null) {
					let r = t._map.get(n), i, a;
					if (this.adds(r)) {
						let e = r.left;
						for (; e !== null && this.adds(e);) e = e.left;
						if (this.deletes(r)) if (e !== null && this.deletes(e)) i = "delete", a = S_(e.content.getContent());
						else return;
						else e !== null && this.deletes(e) ? (i = "update", a = S_(e.content.getContent())) : (i = "add", a = void 0);
					} else if (this.deletes(r)) i = "delete", a = S_(r.content.getContent());
					else return;
					e.set(n, {
						action: i,
						oldValue: a
					});
				}
			}), this._keys = e;
		}
		return this._keys;
	}
	get delta() {
		return this.changes.delta;
	}
	adds(e) {
		return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
	}
	get changes() {
		let e = this._changes;
		if (e === null) {
			if (this.transaction.doc._transactionCleanups.length === 0) throw _v(YS);
			let t = this.target, n = x_(), r = x_(), i = [];
			if (e = {
				added: n,
				deleted: r,
				delta: i,
				keys: this.keys
			}, this.transaction.changed.get(t).has(null)) {
				let e = null, a = () => {
					e && i.push(e);
				};
				for (let i = t._start; i !== null; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((e === null || e.delete === void 0) && (a(), e = { delete: 0 }), e.delete += i.length, r.add(i)) : this.adds(i) ? ((e === null || e.insert === void 0) && (a(), e = { insert: [] }), e.insert = e.insert.concat(i.content.getContent()), n.add(i)) : ((e === null || e.retain === void 0) && (a(), e = { retain: 0 }), e.retain += i.length);
				e !== null && e.retain === void 0 && a();
			}
			this._changes = e;
		}
		return e;
	}
}, ZS = (e, t) => {
	let n = [];
	for (; t._item !== null && t !== e;) {
		if (t._item.parentSub !== null) n.unshift(t._item.parentSub);
		else {
			let e = 0, r = t._item.parent._start;
			for (; r !== t._item && r !== null;) !r.deleted && r.countable && (e += r.length), r = r.right;
			n.unshift(e);
		}
		t = t._item.parent;
	}
	return n;
}, QS = () => {
	tx("Invalid access: Add Yjs type to a document before reading data.");
}, $S = 80, eC = 0, tC = class {
	constructor(e, t) {
		e.marker = !0, this.p = e, this.index = t, this.timestamp = eC++;
	}
}, nC = (e) => {
	e.timestamp = eC++;
}, rC = (e, t, n) => {
	e.p.marker = !1, e.p = t, t.marker = !0, e.index = n, e.timestamp = eC++;
}, iC = (e, t, n) => {
	if (e.length >= $S) {
		let r = e.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
		return rC(r, t, n), r;
	} else {
		let r = new tC(t, n);
		return e.push(r), r;
	}
}, aC = (e, t) => {
	if (e._start === null || t === 0 || e._searchMarker === null) return null;
	let n = e._searchMarker.length === 0 ? null : e._searchMarker.reduce((e, n) => sh(t - e.index) < sh(t - n.index) ? e : n), r = e._start, i = 0;
	for (n !== null && (r = n.p, i = n.index, nC(n)); r.right !== null && i < t;) {
		if (!r.deleted && r.countable) {
			if (t < i + r.length) break;
			i += r.length;
		}
		r = r.right;
	}
	for (; r.left !== null && i > t;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock;) r = r.left, !r.deleted && r.countable && (i -= r.length);
	return n !== null && sh(n.index - i) < r.parent.length / $S ? (rC(n, r, i), n) : iC(e._searchMarker, r, i);
}, oC = (e, t, n) => {
	for (let r = e.length - 1; r >= 0; r--) {
		let i = e[r];
		if (n > 0) {
			let t = i.p;
			for (t.marker = !1; t && (t.deleted || !t.countable);) t = t.left, t && !t.deleted && t.countable && (i.index -= t.length);
			if (t === null || t.marker === !0) {
				e.splice(r, 1);
				continue;
			}
			i.p = t, t.marker = !0;
		}
		(t < i.index || n > 0 && t === i.index) && (i.index = lh(t, i.index + n));
	}
}, sC = (e, t, n) => {
	let r = e, i = t.changedParentTypes;
	for (; v_(i, e, () => []).push(n), e._item !== null;) e = e._item.parent;
	Xx(r._eH, n, t);
}, cC = class {
	constructor() {
		this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = qx(), this._dEH = qx(), this._searchMarker = null;
	}
	get parent() {
		return this._item ? this._item.parent : null;
	}
	_integrate(e, t) {
		this.doc = e, this._item = t;
	}
	_copy() {
		throw vv();
	}
	clone() {
		throw vv();
	}
	_write(e) {}
	get _first() {
		let e = this._start;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	_callObserver(e, t) {
		!e.local && this._searchMarker && (this._searchMarker.length = 0);
	}
	observe(e) {
		Jx(this._eH, e);
	}
	observeDeep(e) {
		Jx(this._dEH, e);
	}
	unobserve(e) {
		Yx(this._eH, e);
	}
	unobserveDeep(e) {
		Yx(this._dEH, e);
	}
	toJSON() {}
}, lC = (e, t, n) => {
	e.doc ?? QS(), t < 0 && (t = e._length + t), n < 0 && (n = e._length + n);
	let r = n - t, i = [], a = e._start;
	for (; a !== null && r > 0;) {
		if (a.countable && !a.deleted) {
			let e = a.content.getContent();
			if (e.length <= t) t -= e.length;
			else {
				for (let n = t; n < e.length && r > 0; n++) i.push(e[n]), r--;
				t = 0;
			}
		}
		a = a.right;
	}
	return i;
}, uC = (e) => {
	e.doc ?? QS();
	let t = [], n = e._start;
	for (; n !== null;) {
		if (n.countable && !n.deleted) {
			let e = n.content.getContent();
			for (let n = 0; n < e.length; n++) t.push(e[n]);
		}
		n = n.right;
	}
	return t;
}, dC = (e, t) => {
	let n = [], r = e._start;
	for (; r !== null;) {
		if (r.countable && pS(r, t)) {
			let e = r.content.getContent();
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		r = r.right;
	}
	return n;
}, fC = (e, t) => {
	let n = 0, r = e._start;
	for (e.doc ?? QS(); r !== null;) {
		if (r.countable && !r.deleted) {
			let i = r.content.getContent();
			for (let r = 0; r < i.length; r++) t(i[r], n++, e);
		}
		r = r.right;
	}
}, pC = (e, t) => {
	let n = [];
	return fC(e, (r, i) => {
		n.push(t(r, i, e));
	}), n;
}, mC = (e) => {
	let t = e._start, n = null, r = 0;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next: () => {
			if (n === null) {
				for (; t !== null && t.deleted;) t = t.right;
				if (t === null) return {
					done: !0,
					value: void 0
				};
				n = t.content.getContent(), r = 0, t = t.right;
			}
			let e = n[r++];
			return n.length <= r && (n = null), {
				done: !1,
				value: e
			};
		}
	};
}, hC = (e, t) => {
	e.doc ?? QS();
	let n = aC(e, t), r = e._start;
	for (n !== null && (r = n.p, t -= n.index); r !== null; r = r.right) if (!r.deleted && r.countable) {
		if (t < r.length) return r.content.getContent()[t];
		t -= r.length;
	}
}, gC = (e, t, n, r) => {
	let i = n, a = e.doc, o = a.clientID, s = a.store, c = n === null ? t._start : n.right, l = [], u = () => {
		l.length > 0 && (i = new Z(Y(o, _S(s, o)), i, i && i.lastId, c, c && c.id, t, null, new Tw(l)), i.integrate(e, 0), l = []);
	};
	r.forEach((n) => {
		if (n === null) l.push(n);
		else switch (n.constructor) {
			case Number:
			case Object:
			case Boolean:
			case Array:
			case String:
				l.push(n);
				break;
			default: switch (u(), n.constructor) {
				case Uint8Array:
				case ArrayBuffer:
					i = new Z(Y(o, _S(s, o)), i, i && i.lastId, c, c && c.id, t, null, new dw(new Uint8Array(n))), i.integrate(e, 0);
					break;
				case bx:
					i = new Z(Y(o, _S(s, o)), i, i && i.lastId, c, c && c.id, t, null, new gw(n)), i.integrate(e, 0);
					break;
				default: if (n instanceof cC) i = new Z(Y(o, _S(s, o)), i, i && i.lastId, c, c && c.id, t, null, new Lw(n)), i.integrate(e, 0);
				else throw Error("Unexpected content type in insert operation");
			}
		}
	}), u();
}, _C = () => _v("Length exceeded!"), vC = (e, t, n, r) => {
	if (n > t._length) throw _C();
	if (n === 0) return t._searchMarker && oC(t._searchMarker, n, r.length), gC(e, t, null, r);
	let i = n, a = aC(t, n), o = t._start;
	for (a !== null && (o = a.p, n -= a.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right) if (!o.deleted && o.countable) {
		if (n <= o.length) {
			n < o.length && SS(e, Y(o.id.client, o.id.clock + n));
			break;
		}
		n -= o.length;
	}
	return t._searchMarker && oC(t._searchMarker, i, r.length), gC(e, t, o, r);
}, yC = (e, t, n) => {
	let r = (t._searchMarker || []).reduce((e, t) => t.index > e.index ? t : e, {
		index: 0,
		p: t._start
	}).p;
	if (r) for (; r.right;) r = r.right;
	return gC(e, t, r, n);
}, bC = (e, t, n, r) => {
	if (r === 0) return;
	let i = n, a = r, o = aC(t, n), s = t._start;
	for (o !== null && (s = o.p, n -= o.index); s !== null && n > 0; s = s.right) !s.deleted && s.countable && (n < s.length && SS(e, Y(s.id.client, s.id.clock + n)), n -= s.length);
	for (; r > 0 && s !== null;) s.deleted || (r < s.length && SS(e, Y(s.id.client, s.id.clock + r)), s.delete(e), r -= s.length), s = s.right;
	if (r > 0) throw _C();
	t._searchMarker && oC(t._searchMarker, i, -a + r);
}, xC = (e, t, n) => {
	let r = t._map.get(n);
	r !== void 0 && r.delete(e);
}, SC = (e, t, n, r) => {
	let i = t._map.get(n) || null, a = e.doc, o = a.clientID, s;
	if (r == null) s = new Tw([r]);
	else switch (r.constructor) {
		case Number:
		case Object:
		case Boolean:
		case Array:
		case String:
		case Date:
		case BigInt:
			s = new Tw([r]);
			break;
		case Uint8Array:
			s = new dw(r);
			break;
		case bx:
			s = new gw(r);
			break;
		default: if (r instanceof cC) s = new Lw(r);
		else throw Error("Unexpected content type");
	}
	new Z(Y(o, _S(a.store, o)), i, i && i.lastId, null, null, t, n, s).integrate(e, 0);
}, CC = (e, t) => {
	e.doc ?? QS();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, wC = (e) => {
	let t = {};
	return e.doc ?? QS(), e._map.forEach((e, n) => {
		e.deleted || (t[n] = e.content.getContent()[e.length - 1]);
	}), t;
}, TC = (e, t) => {
	e.doc ?? QS();
	let n = e._map.get(t);
	return n !== void 0 && !n.deleted;
}, EC = (e, t) => {
	let n = {};
	return e._map.forEach((e, r) => {
		let i = e;
		for (; i !== null && (!t.sv.has(i.id.client) || i.id.clock >= (t.sv.get(i.id.client) || 0));) i = i.left;
		i !== null && pS(i, t) && (n[r] = i.content.getContent()[i.length - 1]);
	}), n;
}, DC = (e) => (e.doc ?? QS(), ix(e._map.entries(), (e) => !e[1].deleted)), OC = class extends XS {}, kC = class e extends cC {
	constructor() {
		super(), this._prelimContent = [], this._searchMarker = [];
	}
	static from(t) {
		let n = new e();
		return n.push(t), n;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof cC ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? QS(), this._length;
	}
	_callObserver(e, t) {
		super._callObserver(e, t), sC(this, e, new OC(this, e));
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : X(this.doc, (n) => {
			vC(n, this, e, t);
		});
	}
	push(e) {
		this.doc === null ? this._prelimContent.push(...e) : X(this.doc, (t) => {
			yC(t, this, e);
		});
	}
	unshift(e) {
		this.insert(0, e);
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : X(this.doc, (n) => {
			bC(n, this, e, t);
		});
	}
	get(e) {
		return hC(this, e);
	}
	toArray() {
		return uC(this);
	}
	slice(e = 0, t = this.length) {
		return lC(this, e, t);
	}
	toJSON() {
		return this.map((e) => e instanceof cC ? e.toJSON() : e);
	}
	map(e) {
		return pC(this, e);
	}
	forEach(e) {
		fC(this, e);
	}
	[Symbol.iterator]() {
		return mC(this);
	}
	_write(e) {
		e.writeTypeRef(Aw);
	}
}, AC = (e) => new kC(), jC = class extends XS {
	constructor(e, t, n) {
		super(e, t), this.keysChanged = n;
	}
}, MC = class e extends cC {
	constructor(e) {
		super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimContent.forEach((e, t) => {
			this.set(t, e);
		}), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return this.forEach((e, n) => {
			t.set(n, e instanceof cC ? e.clone() : e);
		}), t;
	}
	_callObserver(e, t) {
		sC(this, e, new jC(this, e, t));
	}
	toJSON() {
		this.doc ?? QS();
		let e = {};
		return this._map.forEach((t, n) => {
			if (!t.deleted) {
				let r = t.content.getContent()[t.length - 1];
				e[n] = r instanceof cC ? r.toJSON() : r;
			}
		}), e;
	}
	get size() {
		return [...DC(this)].length;
	}
	keys() {
		return ax(DC(this), (e) => e[0]);
	}
	values() {
		return ax(DC(this), (e) => e[1].content.getContent()[e[1].length - 1]);
	}
	entries() {
		return ax(DC(this), (e) => [e[0], e[1].content.getContent()[e[1].length - 1]]);
	}
	forEach(e) {
		this.doc ?? QS(), this._map.forEach((t, n) => {
			t.deleted || e(t.content.getContent()[t.length - 1], n, this);
		});
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	delete(e) {
		this.doc === null ? this._prelimContent.delete(e) : X(this.doc, (t) => {
			xC(t, this, e);
		});
	}
	set(e, t) {
		return this.doc === null ? this._prelimContent.set(e, t) : X(this.doc, (n) => {
			SC(n, this, e, t);
		}), t;
	}
	get(e) {
		return CC(this, e);
	}
	has(e) {
		return TC(this, e);
	}
	clear() {
		this.doc === null ? this._prelimContent.clear() : X(this.doc, (e) => {
			this.forEach(function(t, n, r) {
				xC(e, r, n);
			});
		});
	}
	_write(e) {
		e.writeTypeRef(jw);
	}
}, NC = (e) => new MC(), PC = (e, t) => e === t || typeof e == "object" && typeof t == "object" && e && t && Qv(e, t), FC = class {
	constructor(e, t, n, r) {
		this.left = e, this.right = t, this.index = n, this.currentAttributes = r;
	}
	forward() {
		switch (this.right === null && yv(), this.right.content.constructor) {
			case bw:
				this.right.deleted || zC(this.currentAttributes, this.right.content);
				break;
			default:
				this.right.deleted || (this.index += this.right.length);
				break;
		}
		this.left = this.right, this.right = this.right.right;
	}
}, IC = (e, t, n) => {
	for (; t.right !== null && n > 0;) {
		switch (t.right.content.constructor) {
			case bw:
				t.right.deleted || zC(t.currentAttributes, t.right.content);
				break;
			default:
				t.right.deleted || (n < t.right.length && SS(e, Y(t.right.id.client, t.right.id.clock + n)), t.index += t.right.length, n -= t.right.length);
				break;
		}
		t.left = t.right, t.right = t.right.right;
	}
	return t;
}, LC = (e, t, n, r) => {
	let i = /* @__PURE__ */ new Map(), a = r ? aC(t, n) : null;
	return a ? IC(e, new FC(a.p.left, a.p, a.index, i), n - a.index) : IC(e, new FC(null, t._start, 0, i), n);
}, RC = (e, t, n, r) => {
	for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === bw && PC(r.get(n.right.content.key), n.right.content.value));) n.right.deleted || r.delete(n.right.content.key), n.forward();
	let i = e.doc, a = i.clientID;
	r.forEach((r, o) => {
		let s = n.left, c = n.right, l = new Z(Y(a, _S(i.store, a)), s, s && s.lastId, c, c && c.id, t, null, new bw(o, r));
		l.integrate(e, 0), n.right = l, n.forward();
	});
}, zC = (e, t) => {
	let { key: n, value: r } = t;
	r === null ? e.delete(n) : e.set(n, r);
}, BC = (e, t) => {
	for (; e.right !== null && (e.right.deleted || e.right.content.constructor === bw && PC(t[e.right.content.key] ?? null, e.right.content.value));) e.forward();
}, VC = (e, t, n, r) => {
	let i = e.doc, a = i.clientID, o = /* @__PURE__ */ new Map();
	for (let s in r) {
		let c = r[s], l = n.currentAttributes.get(s) ?? null;
		if (!PC(l, c)) {
			o.set(s, l);
			let { left: r, right: u } = n;
			n.right = new Z(Y(a, _S(i.store, a)), r, r && r.lastId, u, u && u.id, t, null, new bw(s, c)), n.right.integrate(e, 0), n.forward();
		}
	}
	return o;
}, HC = (e, t, n, r, i) => {
	n.currentAttributes.forEach((e, t) => {
		i[t] === void 0 && (i[t] = null);
	});
	let a = e.doc, o = a.clientID;
	BC(n, i);
	let s = VC(e, t, n, i), c = r.constructor === String ? new Dw(r) : r instanceof cC ? new Lw(r) : new vw(r), { left: l, right: u, index: d } = n;
	t._searchMarker && oC(t._searchMarker, n.index, c.getLength()), u = new Z(Y(o, _S(a.store, o)), l, l && l.lastId, u, u && u.id, t, null, c), u.integrate(e, 0), n.right = u, n.index = d, n.forward(), RC(e, t, n, s);
}, UC = (e, t, n, r, i) => {
	let a = e.doc, o = a.clientID;
	BC(n, i);
	let s = VC(e, t, n, i);
	iterationLoop: for (; n.right !== null && (r > 0 || s.size > 0 && (n.right.deleted || n.right.content.constructor === bw));) {
		if (!n.right.deleted) switch (n.right.content.constructor) {
			case bw: {
				let { key: t, value: a } = n.right.content, o = i[t];
				if (o !== void 0) {
					if (PC(o, a)) s.delete(t);
					else {
						if (r === 0) break iterationLoop;
						s.set(t, a);
					}
					n.right.delete(e);
				} else n.currentAttributes.set(t, a);
				break;
			}
			default:
				r < n.right.length && SS(e, Y(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
				break;
		}
		n.forward();
	}
	if (r > 0) {
		let i = "";
		for (; r > 0; r--) i += "\n";
		n.right = new Z(Y(o, _S(a.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, t, null, new Dw(i)), n.right.integrate(e, 0), n.forward();
	}
	RC(e, t, n, s);
}, WC = (e, t, n, r, i) => {
	let a = t, o = g_();
	for (; a && (!a.countable || a.deleted);) {
		if (!a.deleted && a.content.constructor === bw) {
			let e = a.content;
			o.set(e.key, e);
		}
		a = a.right;
	}
	let s = 0, c = !1;
	for (; t !== a;) {
		if (n === t && (c = !0), !t.deleted) {
			let n = t.content;
			switch (n.constructor) {
				case bw: {
					let { key: a, value: l } = n, u = r.get(a) ?? null;
					(o.get(a) !== n || u === l) && (t.delete(e), s++, !c && (i.get(a) ?? null) === l && u !== l && (u === null ? i.delete(a) : i.set(a, u))), !c && !t.deleted && zC(i, n);
					break;
				}
			}
		}
		t = t.right;
	}
	return s;
}, GC = (e, t) => {
	for (; t && t.right && (t.right.deleted || !t.right.countable);) t = t.right;
	let n = /* @__PURE__ */ new Set();
	for (; t && (t.deleted || !t.countable);) {
		if (!t.deleted && t.content.constructor === bw) {
			let r = t.content.key;
			n.has(r) ? t.delete(e) : n.add(r);
		}
		t = t.left;
	}
}, KC = (e) => {
	let t = 0;
	return X(e.doc, (n) => {
		let r = e._start, i = e._start, a = g_(), o = __(a);
		for (; i;) {
			if (i.deleted === !1) switch (i.content.constructor) {
				case bw:
					zC(o, i.content);
					break;
				default:
					t += WC(n, r, i, a, o), a = __(o), r = i;
					break;
			}
			i = i.right;
		}
	}), t;
}, qC = (e) => {
	let t = /* @__PURE__ */ new Set(), n = e.doc;
	for (let [r, i] of e.afterState.entries()) {
		let a = e.beforeState.get(r) || 0;
		i !== a && TS(e, n.store.clients.get(r), a, i, (e) => {
			!e.deleted && e.content.constructor === bw && e.constructor !== uw && t.add(e.parent);
		});
	}
	X(n, (n) => {
		cx(e, e.deleteSet, (e) => {
			if (e instanceof uw || !e.parent._hasFormatting || t.has(e.parent)) return;
			let r = e.parent;
			e.content.constructor === bw ? t.add(r) : GC(n, e);
		});
		for (let e of t) KC(e);
	});
}, JC = (e, t, n) => {
	let r = n, i = __(t.currentAttributes), a = t.right;
	for (; n > 0 && t.right !== null;) {
		if (t.right.deleted === !1) switch (t.right.content.constructor) {
			case Lw:
			case vw:
			case Dw:
				n < t.right.length && SS(e, Y(t.right.id.client, t.right.id.clock + n)), n -= t.right.length, t.right.delete(e);
				break;
		}
		t.forward();
	}
	a && WC(e, a, t.right, i, t.currentAttributes);
	let o = (t.left || t.right).parent;
	return o._searchMarker && oC(o._searchMarker, t.index, -r + n), t;
}, YC = class extends XS {
	constructor(e, t, n) {
		super(e, t), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), n.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.keysChanged.add(e);
		});
	}
	get changes() {
		if (this._changes === null) {
			let e = {
				keys: this.keys,
				delta: this.delta,
				added: /* @__PURE__ */ new Set(),
				deleted: /* @__PURE__ */ new Set()
			};
			this._changes = e;
		}
		return this._changes;
	}
	get delta() {
		if (this._delta === null) {
			let e = this.target.doc, t = [];
			X(e, (e) => {
				let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = this.target._start, a = null, o = {}, s = "", c = 0, l = 0, u = () => {
					if (a !== null) {
						let e = null;
						switch (a) {
							case "delete":
								l > 0 && (e = { delete: l }), l = 0;
								break;
							case "insert":
								(typeof s == "object" || s.length > 0) && (e = { insert: s }, n.size > 0 && (e.attributes = {}, n.forEach((t, n) => {
									t !== null && (e.attributes[n] = t);
								}))), s = "";
								break;
							case "retain":
								c > 0 && (e = { retain: c }, Yv(o) || (e.attributes = Gv({}, o))), c = 0;
								break;
						}
						e && t.push(e), a = null;
					}
				};
				for (; i !== null;) {
					switch (i.content.constructor) {
						case Lw:
						case vw:
							this.adds(i) ? this.deletes(i) || (u(), a = "insert", s = i.content.getContent()[0], u()) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += 1) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += 1);
							break;
						case Dw:
							this.adds(i) ? this.deletes(i) || (a !== "insert" && (u(), a = "insert"), s += i.content.str) : this.deletes(i) ? (a !== "delete" && (u(), a = "delete"), l += i.length) : i.deleted || (a !== "retain" && (u(), a = "retain"), c += i.length);
							break;
						case bw: {
							let { key: t, value: s } = i.content;
							if (this.adds(i)) this.deletes(i) || (PC(n.get(t) ?? null, s) ? s !== null && i.delete(e) : (a === "retain" && u(), PC(s, r.get(t) ?? null) ? delete o[t] : o[t] = s));
							else if (this.deletes(i)) {
								r.set(t, s);
								let e = n.get(t) ?? null;
								PC(e, s) || (a === "retain" && u(), o[t] = e);
							} else if (!i.deleted) {
								r.set(t, s);
								let n = o[t];
								n !== void 0 && (PC(n, s) ? n !== null && i.delete(e) : (a === "retain" && u(), s === null ? delete o[t] : o[t] = s));
							}
							i.deleted || (a === "insert" && u(), zC(n, i.content));
							break;
						}
					}
					i = i.right;
				}
				for (u(); t.length > 0;) {
					let e = t[t.length - 1];
					if (e.retain !== void 0 && e.attributes === void 0) t.pop();
					else break;
				}
			}), this._delta = t;
		}
		return this._delta;
	}
}, XC = class e extends cC {
	constructor(e) {
		super(), this._pending = e === void 0 ? [] : [() => this.insert(0, e)], this._searchMarker = [], this._hasFormatting = !1;
	}
	get length() {
		return this.doc ?? QS(), this._length;
	}
	_integrate(e, t) {
		super._integrate(e, t);
		try {
			this._pending.forEach((e) => e());
		} catch (e) {
			console.error(e);
		}
		this._pending = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	_callObserver(e, t) {
		super._callObserver(e, t);
		let n = new YC(this, e, t);
		sC(this, e, n), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
	}
	toString() {
		this.doc ?? QS();
		let e = "", t = this._start;
		for (; t !== null;) !t.deleted && t.countable && t.content.constructor === Dw && (e += t.content.str), t = t.right;
		return e;
	}
	toJSON() {
		return this.toString();
	}
	applyDelta(e, { sanitize: t = !0 } = {}) {
		this.doc === null ? this._pending.push(() => this.applyDelta(e)) : X(this.doc, (n) => {
			let r = new FC(null, this._start, 0, /* @__PURE__ */ new Map());
			for (let i = 0; i < e.length; i++) {
				let a = e[i];
				if (a.insert !== void 0) {
					let o = !t && typeof a.insert == "string" && i === e.length - 1 && r.right === null && a.insert.slice(-1) === "\n" ? a.insert.slice(0, -1) : a.insert;
					(typeof o != "string" || o.length > 0) && HC(n, this, r, o, a.attributes || {});
				} else a.retain === void 0 ? a.delete !== void 0 && JC(n, r, a.delete) : UC(n, this, r, a.retain, a.attributes || {});
			}
		});
	}
	toDelta(e, t, n) {
		this.doc ?? QS();
		let r = [], i = /* @__PURE__ */ new Map(), a = this.doc, o = "", s = this._start;
		function c() {
			if (o.length > 0) {
				let e = {}, t = !1;
				i.forEach((n, r) => {
					t = !0, e[r] = n;
				});
				let n = { insert: o };
				t && (n.attributes = e), r.push(n), o = "";
			}
		}
		let l = () => {
			for (; s !== null;) {
				if (pS(s, e) || t !== void 0 && pS(s, t)) switch (s.content.constructor) {
					case Dw: {
						let r = i.get("ychange");
						e !== void 0 && !pS(s, e) ? (r === void 0 || r.user !== s.id.client || r.type !== "removed") && (c(), i.set("ychange", n ? n("removed", s.id) : { type: "removed" })) : t !== void 0 && !pS(s, t) ? (r === void 0 || r.user !== s.id.client || r.type !== "added") && (c(), i.set("ychange", n ? n("added", s.id) : { type: "added" })) : r !== void 0 && (c(), i.delete("ychange")), o += s.content.str;
						break;
					}
					case Lw:
					case vw: {
						c();
						let e = { insert: s.content.getContent()[0] };
						if (i.size > 0) {
							let t = {};
							e.attributes = t, i.forEach((e, n) => {
								t[n] = e;
							});
						}
						r.push(e);
						break;
					}
					case bw:
						pS(s, e) && (c(), zC(i, s.content));
						break;
				}
				s = s.right;
			}
			c();
		};
		return e || t ? X(a, (n) => {
			e && mS(n, e), t && mS(n, t), l();
		}, "cleanup") : l(), r;
	}
	insert(e, t, n) {
		if (t.length <= 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.insert(e, t, n)) : X(r, (r) => {
			let i = LC(r, this, e, !n);
			n || (n = {}, i.currentAttributes.forEach((e, t) => {
				n[t] = e;
			})), HC(r, this, i, t, n);
		});
	}
	insertEmbed(e, t, n) {
		let r = this.doc;
		r === null ? this._pending.push(() => this.insertEmbed(e, t, n || {})) : X(r, (r) => {
			let i = LC(r, this, e, !n);
			HC(r, this, i, t, n || {});
		});
	}
	delete(e, t) {
		if (t === 0) return;
		let n = this.doc;
		n === null ? this._pending.push(() => this.delete(e, t)) : X(n, (n) => {
			JC(n, LC(n, this, e, !0), t);
		});
	}
	format(e, t, n) {
		if (t === 0) return;
		let r = this.doc;
		r === null ? this._pending.push(() => this.format(e, t, n)) : X(r, (r) => {
			let i = LC(r, this, e, !1);
			i.right !== null && UC(r, this, i, t, n);
		});
	}
	removeAttribute(e) {
		this.doc === null ? this._pending.push(() => this.removeAttribute(e)) : X(this.doc, (t) => {
			xC(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._pending.push(() => this.setAttribute(e, t)) : X(this.doc, (n) => {
			SC(n, this, e, t);
		});
	}
	getAttribute(e) {
		return CC(this, e);
	}
	getAttributes() {
		return wC(this);
	}
	_write(e) {
		e.writeTypeRef(Mw);
	}
}, ZC = (e) => new XC(), QC = class {
	constructor(e, t = () => !0) {
		this._filter = t, this._root = e, this._currentNode = e._start, this._firstCall = !0, e.doc ?? QS();
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		let e = this._currentNode, t = e && e.content && e.content.type;
		if (e !== null && (!this._firstCall || e.deleted || !this._filter(t))) do
			if (t = e.content.type, !e.deleted && (t.constructor === tw || t.constructor === $C) && t._start !== null) e = t._start;
			else for (; e !== null;) {
				let t = e.next;
				if (t !== null) {
					e = t;
					break;
				} else e = e.parent === this._root ? null : e.parent._item;
			}
		while (e !== null && (e.deleted || !this._filter(e.content.type)));
		return this._firstCall = !1, e === null ? {
			value: void 0,
			done: !0
		} : (this._currentNode = e, {
			value: e.content.type,
			done: !1
		});
	}
}, $C = class e extends cC {
	constructor() {
		super(), this._prelimContent = [];
	}
	get firstChild() {
		let e = this._first;
		return e ? e.content.getContent()[0] : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this.insert(0, this._prelimContent), this._prelimContent = null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.insert(0, this.toArray().map((e) => e instanceof cC ? e.clone() : e)), t;
	}
	get length() {
		return this.doc ?? QS(), this._prelimContent === null ? this._length : this._prelimContent.length;
	}
	createTreeWalker(e) {
		return new QC(this, e);
	}
	querySelector(e) {
		e = e.toUpperCase();
		let t = new QC(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e).next();
		return t.done ? null : t.value;
	}
	querySelectorAll(e) {
		return e = e.toUpperCase(), w_(new QC(this, (t) => t.nodeName && t.nodeName.toUpperCase() === e));
	}
	_callObserver(e, t) {
		sC(this, e, new rw(this, t, e));
	}
	toString() {
		return pC(this, (e) => e.toString()).join("");
	}
	toJSON() {
		return this.toString();
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createDocumentFragment();
		return n !== void 0 && n._createAssociation(r, this), fC(this, (i) => {
			r.insertBefore(i.toDOM(e, t, n), null);
		}), r;
	}
	insert(e, t) {
		this.doc === null ? this._prelimContent.splice(e, 0, ...t) : X(this.doc, (n) => {
			vC(n, this, e, t);
		});
	}
	insertAfter(e, t) {
		if (this.doc !== null) X(this.doc, (n) => {
			let r = e && e instanceof cC ? e._item : e;
			gC(n, this, r, t);
		});
		else {
			let n = this._prelimContent, r = e === null ? 0 : n.findIndex((t) => t === e) + 1;
			if (r === 0 && e !== null) throw _v("Reference item not found");
			n.splice(r, 0, ...t);
		}
	}
	delete(e, t = 1) {
		this.doc === null ? this._prelimContent.splice(e, t) : X(this.doc, (n) => {
			bC(n, this, e, t);
		});
	}
	toArray() {
		return uC(this);
	}
	push(e) {
		this.insert(this.length, e);
	}
	unshift(e) {
		this.insert(0, e);
	}
	get(e) {
		return hC(this, e);
	}
	slice(e = 0, t = this.length) {
		return lC(this, e, t);
	}
	forEach(e) {
		fC(this, e);
	}
	_write(e) {
		e.writeTypeRef(Pw);
	}
}, ew = (e) => new $C(), tw = class e extends $C {
	constructor(e = "UNDEFINED") {
		super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
	}
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_integrate(e, t) {
		super._integrate(e, t), this._prelimAttrs.forEach((e, t) => {
			this.setAttribute(t, e);
		}), this._prelimAttrs = null;
	}
	_copy() {
		return new e(this.nodeName);
	}
	clone() {
		let t = new e(this.nodeName);
		return qv(this.getAttributes(), (e, n) => {
			t.setAttribute(n, e);
		}), t.insert(0, this.toArray().map((e) => e instanceof cC ? e.clone() : e)), t;
	}
	toString() {
		let e = this.getAttributes(), t = [], n = [];
		for (let t in e) n.push(t);
		n.sort();
		let r = n.length;
		for (let i = 0; i < r; i++) {
			let r = n[i];
			t.push(r + "=\"" + e[r] + "\"");
		}
		let i = this.nodeName.toLocaleLowerCase();
		return `<${i}${t.length > 0 ? " " + t.join(" ") : ""}>${super.toString()}</${i}>`;
	}
	removeAttribute(e) {
		this.doc === null ? this._prelimAttrs.delete(e) : X(this.doc, (t) => {
			xC(t, this, e);
		});
	}
	setAttribute(e, t) {
		this.doc === null ? this._prelimAttrs.set(e, t) : X(this.doc, (n) => {
			SC(n, this, e, t);
		});
	}
	getAttribute(e) {
		return CC(this, e);
	}
	hasAttribute(e) {
		return TC(this, e);
	}
	getAttributes(e) {
		return e ? EC(this, e) : wC(this);
	}
	toDOM(e = document, t = {}, n) {
		let r = e.createElement(this.nodeName), i = this.getAttributes();
		for (let e in i) {
			let t = i[e];
			typeof t == "string" && r.setAttribute(e, t);
		}
		return fC(this, (i) => {
			r.appendChild(i.toDOM(e, t, n));
		}), n !== void 0 && n._createAssociation(r, this), r;
	}
	_write(e) {
		e.writeTypeRef(Nw), e.writeKey(this.nodeName);
	}
}, nw = (e) => new tw(e.readKey()), rw = class extends XS {
	constructor(e, t, n) {
		super(e, n), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), t.forEach((e) => {
			e === null ? this.childListChanged = !0 : this.attributesChanged.add(e);
		});
	}
}, iw = class e extends MC {
	constructor(e) {
		super(), this.hookName = e;
	}
	_copy() {
		return new e(this.hookName);
	}
	clone() {
		let t = new e(this.hookName);
		return this.forEach((e, n) => {
			t.set(n, e);
		}), t;
	}
	toDOM(e = document, t = {}, n) {
		let r = t[this.hookName], i;
		return i = r === void 0 ? document.createElement(this.hookName) : r.createDom(this), i.setAttribute("data-yjs-hook", this.hookName), n !== void 0 && n._createAssociation(i, this), i;
	}
	_write(e) {
		e.writeTypeRef(Fw), e.writeKey(this.hookName);
	}
}, aw = (e) => new iw(e.readKey()), ow = class e extends XC {
	get nextSibling() {
		let e = this._item ? this._item.next : null;
		return e ? e.content.type : null;
	}
	get prevSibling() {
		let e = this._item ? this._item.prev : null;
		return e ? e.content.type : null;
	}
	_copy() {
		return new e();
	}
	clone() {
		let t = new e();
		return t.applyDelta(this.toDelta()), t;
	}
	toDOM(e = document, t, n) {
		let r = e.createTextNode(this.toString());
		return n !== void 0 && n._createAssociation(r, this), r;
	}
	toString() {
		return this.toDelta().map((e) => {
			let t = [];
			for (let n in e.attributes) {
				let r = [];
				for (let t in e.attributes[n]) r.push({
					key: t,
					value: e.attributes[n][t]
				});
				r.sort((e, t) => e.key < t.key ? -1 : 1), t.push({
					nodeName: n,
					attrs: r
				});
			}
			t.sort((e, t) => e.nodeName < t.nodeName ? -1 : 1);
			let n = "";
			for (let e = 0; e < t.length; e++) {
				let r = t[e];
				n += `<${r.nodeName}`;
				for (let e = 0; e < r.attrs.length; e++) {
					let t = r.attrs[e];
					n += ` ${t.key}="${t.value}"`;
				}
				n += ">";
			}
			n += e.insert;
			for (let e = t.length - 1; e >= 0; e--) n += `</${t[e].nodeName}>`;
			return n;
		}).join("");
	}
	toJSON() {
		return this.toString();
	}
	_write(e) {
		e.writeTypeRef(Iw);
	}
}, sw = (e) => new ow(), cw = class {
	constructor(e, t) {
		this.id = e, this.length = t;
	}
	get deleted() {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	write(e, t, n) {
		throw vv();
	}
	integrate(e, t) {
		throw vv();
	}
}, lw = 0, uw = class extends cw {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		t > 0 && (this.id.clock += t, this.length -= t), vS(e.doc.store, this);
	}
	write(e, t) {
		e.writeInfo(lw), e.writeLen(this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, dw = class e {
	constructor(e) {
		this.content = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.content];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.content);
	}
	splice(e) {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeBuf(this.content);
	}
	getRef() {
		return 3;
	}
}, fw = (e) => new dw(e.readBuf()), pw = class e {
	constructor(e) {
		this.len = e;
	}
	getLength() {
		return this.len;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.len);
	}
	splice(t) {
		let n = new e(this.len - t);
		return this.len = t, n;
	}
	mergeWith(e) {
		return this.len += e.len, !0;
	}
	integrate(e, t) {
		px(e.deleteSet, t.id.client, t.id.clock, this.len), t.markDeleted();
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeLen(this.len - t);
	}
	getRef() {
		return 1;
	}
}, mw = (e) => new pw(e.readLen()), hw = (e, t) => new bx({
	guid: e,
	...t,
	shouldLoad: t.shouldLoad || t.autoLoad || !1
}), gw = class e {
	constructor(e) {
		e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
		let t = {};
		this.opts = t, e.gc || (t.gc = !1), e.autoLoad && (t.autoLoad = !0), e.meta !== null && (t.meta = e.meta);
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.doc];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(hw(this.doc.guid, this.opts));
	}
	splice(e) {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.doc._item = t, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
	}
	delete(e) {
		e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
	}
	gc(e) {}
	write(e, t) {
		e.writeString(this.doc.guid), e.writeAny(this.opts);
	}
	getRef() {
		return 9;
	}
}, _w = (e) => new gw(hw(e.readString(), e.readAny())), vw = class e {
	constructor(e) {
		this.embed = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.embed];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.embed);
	}
	splice(e) {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeJSON(this.embed);
	}
	getRef() {
		return 5;
	}
}, yw = (e) => new vw(e.readJSON()), bw = class e {
	constructor(e, t) {
		this.key = e, this.value = t;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [];
	}
	isCountable() {
		return !1;
	}
	copy() {
		return new e(this.key, this.value);
	}
	splice(e) {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		let n = t.parent;
		n._searchMarker = null, n._hasFormatting = !0;
	}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeKey(this.key), e.writeJSON(this.value);
	}
	getRef() {
		return 6;
	}
}, xw = (e) => new bw(e.readKey(), e.readJSON()), Sw = class e {
	constructor(e) {
		this.arr = e;
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeString(t === void 0 ? "undefined" : JSON.stringify(t));
		}
	}
	getRef() {
		return 2;
	}
}, Cw = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		t === "undefined" ? n.push(void 0) : n.push(JSON.parse(t));
	}
	return new Sw(n);
}, ww = dy("node_env") === "development", Tw = class e {
	constructor(e) {
		this.arr = e, ww && ey(e);
	}
	getLength() {
		return this.arr.length;
	}
	getContent() {
		return this.arr;
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.arr);
	}
	splice(t) {
		let n = new e(this.arr.slice(t));
		return this.arr = this.arr.slice(0, t), n;
	}
	mergeWith(e) {
		return this.arr = this.arr.concat(e.arr), !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		let n = this.arr.length;
		e.writeLen(n - t);
		for (let r = t; r < n; r++) {
			let t = this.arr[r];
			e.writeAny(t);
		}
	}
	getRef() {
		return 8;
	}
}, Ew = (e) => {
	let t = e.readLen(), n = [];
	for (let r = 0; r < t; r++) n.push(e.readAny());
	return new Tw(n);
}, Dw = class e {
	constructor(e) {
		this.str = e;
	}
	getLength() {
		return this.str.length;
	}
	getContent() {
		return this.str.split("");
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.str);
	}
	splice(t) {
		let n = new e(this.str.slice(t));
		this.str = this.str.slice(0, t);
		let r = this.str.charCodeAt(t - 1);
		return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", n.str = "�" + n.str.slice(1)), n;
	}
	mergeWith(e) {
		return this.str += e.str, !0;
	}
	integrate(e, t) {}
	delete(e) {}
	gc(e) {}
	write(e, t) {
		e.writeString(t === 0 ? this.str : this.str.slice(t));
	}
	getRef() {
		return 4;
	}
}, Ow = (e) => new Dw(e.readString()), kw = [
	AC,
	NC,
	ZC,
	nw,
	ew,
	aw,
	sw
], Aw = 0, jw = 1, Mw = 2, Nw = 3, Pw = 4, Fw = 5, Iw = 6, Lw = class e {
	constructor(e) {
		this.type = e;
	}
	getLength() {
		return 1;
	}
	getContent() {
		return [this.type];
	}
	isCountable() {
		return !0;
	}
	copy() {
		return new e(this.type._copy());
	}
	splice(e) {
		throw vv();
	}
	mergeWith(e) {
		return !1;
	}
	integrate(e, t) {
		this.type._integrate(e.doc, t);
	}
	delete(e) {
		let t = this.type._start;
		for (; t !== null;) t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e), t = t.right;
		this.type._map.forEach((t) => {
			t.deleted ? t.id.clock < (e.beforeState.get(t.id.client) || 0) && e._mergeStructs.push(t) : t.delete(e);
		}), e.changed.delete(this.type);
	}
	gc(e) {
		let t = this.type._start;
		for (; t !== null;) t.gc(e, !0), t = t.right;
		this.type._start = null, this.type._map.forEach((t) => {
			for (; t !== null;) t.gc(e, !0), t = t.left;
		}), this.type._map = /* @__PURE__ */ new Map();
	}
	write(e, t) {
		this.type._write(e);
	}
	getRef() {
		return 7;
	}
}, Rw = (e) => new Lw(kw[e.readTypeRef()](e)), zw = (e, t) => {
	let n = t, r = 0, i;
	do
		r > 0 && (n = Y(n.client, n.clock + r)), i = bS(e, n), r = n.clock - i.id.clock, n = i.redone;
	while (n !== null && i instanceof Z);
	return {
		item: i,
		diff: r
	};
}, Bw = (e, t) => {
	for (; e !== null && e.keep !== t;) e.keep = t, e = e.parent._item;
}, Vw = (e, t, n) => {
	let { client: r, clock: i } = t.id, a = new Z(Y(r, i + n), t, Y(r, i + n - 1), t.right, t.rightOrigin, t.parent, t.parentSub, t.content.splice(n));
	return t.deleted && a.markDeleted(), t.keep && (a.keep = !0), t.redone !== null && (a.redone = Y(t.redone.client, t.redone.clock + n)), t.right = a, a.right !== null && (a.right.left = a), e._mergeStructs.push(a), a.parentSub !== null && a.right === null && a.parent._map.set(a.parentSub, a), t.length = n, a;
}, Hw = (e, t) => E_(e, (e) => ux(e.deletions, t)), Uw = (e, t, n, r, i, a) => {
	let o = e.doc, s = o.store, c = o.clientID, l = t.redone;
	if (l !== null) return SS(e, l);
	let u = t.parent._item, d = null, f;
	if (u !== null && u.deleted === !0) {
		if (u.redone === null && (!n.has(u) || Uw(e, u, n, r, i, a) === null)) return null;
		for (; u.redone !== null;) u = SS(e, u.redone);
	}
	let p = u === null ? t.parent : u.content.type;
	if (t.parentSub === null) {
		for (d = t.left, f = t; d !== null;) {
			let t = d;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : SS(e, t.redone);
			if (t !== null && t.parent._item === u) {
				d = t;
				break;
			}
			d = d.left;
		}
		for (; f !== null;) {
			let t = f;
			for (; t !== null && t.parent._item !== u;) t = t.redone === null ? null : SS(e, t.redone);
			if (t !== null && t.parent._item === u) {
				f = t;
				break;
			}
			f = f.right;
		}
	} else {
		if (f = null, t.right && !i) {
			for (d = t; d !== null && d.right !== null && (d.right.redone || ux(r, d.right.id) || Hw(a.undoStack, d.right.id) || Hw(a.redoStack, d.right.id));) for (d = d.right; d.redone;) d = SS(e, d.redone);
			if (d && d.right !== null) return null;
		} else d = p._map.get(t.parentSub) || null;
		d !== null && d.parent._item !== u && (d = p._map.get(t.parentSub) || null);
	}
	let m = Y(c, _S(s, c)), h = new Z(m, d, d && d.lastId, f, f && f.id, p, t.parentSub, t.content.copy());
	return t.redone = m, Bw(h, !0), h.integrate(e, 0), h;
}, Z = class e extends cw {
	constructor(e, t, n, r, i, a, o, s) {
		super(e, s.getLength()), this.origin = n, this.left = t, this.right = r, this.rightOrigin = i, this.parent = a, this.parentSub = o, this.redone = null, this.content = s, this.info = this.content.isCountable() ? 2 : 0;
	}
	set marker(e) {
		(this.info & 8) > 0 !== e && (this.info ^= 8);
	}
	get marker() {
		return (this.info & 8) > 0;
	}
	get keep() {
		return (this.info & 1) > 0;
	}
	set keep(e) {
		this.keep !== e && (this.info ^= 1);
	}
	get countable() {
		return (this.info & 2) > 0;
	}
	get deleted() {
		return (this.info & 4) > 0;
	}
	set deleted(e) {
		this.deleted !== e && (this.info ^= 4);
	}
	markDeleted() {
		this.info |= 4;
	}
	getMissing(t, n) {
		if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= _S(n, this.origin.client)) return this.origin.client;
		if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= _S(n, this.rightOrigin.client)) return this.rightOrigin.client;
		if (this.parent && this.parent.constructor === Zx && this.id.client !== this.parent.client && this.parent.clock >= _S(n, this.parent.client)) return this.parent.client;
		if (this.origin &&= (this.left = CS(t, n, this.origin), this.left.lastId), this.rightOrigin &&= (this.right = SS(t, this.rightOrigin), this.right.id), this.left && this.left.constructor === uw || this.right && this.right.constructor === uw) this.parent = null;
		else if (!this.parent) this.left && this.left.constructor === e ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === e && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
		else if (this.parent.constructor === Zx) {
			let e = bS(n, this.parent);
			e.constructor === uw ? this.parent = null : this.parent = e.content.type;
		}
		return null;
	}
	integrate(e, t) {
		if (t > 0 && (this.id.clock += t, this.left = CS(e, e.doc.store, Y(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(t), this.length -= t), this.parent) {
			if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
				let t = this.left, n;
				if (t !== null) n = t.right;
				else if (this.parentSub !== null) for (n = this.parent._map.get(this.parentSub) || null; n !== null && n.left !== null;) n = n.left;
				else n = this.parent._start;
				let r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
				for (; n !== null && n !== this.right;) {
					if (i.add(n), r.add(n), Qx(this.origin, n.origin)) {
						if (n.id.client < this.id.client) t = n, r.clear();
						else if (Qx(this.rightOrigin, n.rightOrigin)) break;
					} else if (n.origin !== null && i.has(bS(e.doc.store, n.origin))) r.has(bS(e.doc.store, n.origin)) || (t = n, r.clear());
					else break;
					n = n.right;
				}
				this.left = t;
			}
			if (this.left !== null) {
				let e = this.left.right;
				this.right = e, this.left.right = this;
			} else {
				let e;
				if (this.parentSub !== null) for (e = this.parent._map.get(this.parentSub) || null; e !== null && e.left !== null;) e = e.left;
				else e = this.parent._start, this.parent._start = this;
				this.right = e;
			}
			this.right === null ? this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)) : this.right.left = this, this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), vS(e.doc.store, this), this.content.integrate(e, this), OS(e, this.parent, this.parentSub), (this.parent._item !== null && this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
		} else new uw(this.id, this.length).integrate(e, 0);
	}
	get next() {
		let e = this.right;
		for (; e !== null && e.deleted;) e = e.right;
		return e;
	}
	get prev() {
		let e = this.left;
		for (; e !== null && e.deleted;) e = e.left;
		return e;
	}
	get lastId() {
		return this.length === 1 ? this.id : Y(this.id.client, this.id.clock + this.length - 1);
	}
	mergeWith(e) {
		if (this.constructor === e.constructor && Qx(e.origin, this.lastId) && this.right === e && Qx(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
			let t = this.parent._searchMarker;
			return t && t.forEach((t) => {
				t.p === e && (t.p = this, !this.deleted && this.countable && (t.index -= this.length));
			}), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
		}
		return !1;
	}
	delete(e) {
		if (!this.deleted) {
			let t = this.parent;
			this.countable && this.parentSub === null && (t._length -= this.length), this.markDeleted(), px(e.deleteSet, this.id.client, this.id.clock, this.length), OS(e, t, this.parentSub), this.content.delete(e);
		}
	}
	gc(e, t) {
		if (!this.deleted) throw yv();
		this.content.gc(e), t ? wS(e, this, new uw(this.id, this.length)) : this.content = new pw(this.length);
	}
	write(e, t) {
		let n = t > 0 ? Y(this.id.client, this.id.clock + t - 1) : this.origin, r = this.rightOrigin, i = this.parentSub, a = this.content.getRef() & 31 | (n === null ? 0 : 128) | (r === null ? 0 : 64) | (i === null ? 0 : 32);
		if (e.writeInfo(a), n !== null && e.writeLeftID(n), r !== null && e.writeRightID(r), n === null && r === null) {
			let t = this.parent;
			if (t._item !== void 0) {
				let n = t._item;
				if (n === null) {
					let n = $x(t);
					e.writeParentInfo(!0), e.writeString(n);
				} else e.writeParentInfo(!1), e.writeLeftID(n.id);
			} else t.constructor === String ? (e.writeParentInfo(!0), e.writeString(t)) : t.constructor === Zx ? (e.writeParentInfo(!1), e.writeLeftID(t)) : yv();
			i !== null && e.writeString(i);
		}
		this.content.write(e, t);
	}
}, Ww = (e, t) => Gw[t & 31](e), Gw = [
	() => {
		yv();
	},
	mw,
	Cw,
	fw,
	Ow,
	yw,
	xw,
	Rw,
	Ew,
	_w,
	() => {
		yv();
	}
], Kw = 10, qw = class extends cw {
	get deleted() {
		return !0;
	}
	delete() {}
	mergeWith(e) {
		return this.constructor === e.constructor ? (this.length += e.length, !0) : !1;
	}
	integrate(e, t) {
		yv();
	}
	write(e, t) {
		e.writeInfo(Kw), q(e.restEncoder, this.length - t);
	}
	getMissing(e, t) {
		return null;
	}
}, Jw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}, Yw = "__ $YJS$ __";
Jw[Yw] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), Jw[Yw] = !0;
//#endregion
//#region ../../node_modules/lib0/mutex.js
var Xw = () => {
	let e = !0;
	return (t, n) => {
		if (e) {
			e = !1;
			try {
				t();
			} finally {
				e = !0;
			}
		} else n !== void 0 && n();
	};
}, Zw = /[\uD800-\uDBFF]/, Qw = /[\uDC00-\uDFFF]/, $w = (e, t) => {
	let n = 0, r = 0;
	for (; n < e.length && n < t.length && e[n] === t[n];) n++;
	for (n > 0 && Zw.test(e[n - 1]) && n--; r + n < e.length && r + n < t.length && e[e.length - r - 1] === t[t.length - r - 1];) r++;
	return r > 0 && Qw.test(e[e.length - r]) && r--, {
		index: n,
		remove: e.length - n - r,
		insert: t.slice(n, t.length - r)
	};
}, Q = new z("y-sync"), eT = new z("y-undo"), tT = new z("yjs-cursor"), nT = (e, t) => e >>> t | e << 32 - t, rT = (e) => nT(e, 2) ^ nT(e, 13) ^ nT(e, 22), iT = (e) => nT(e, 6) ^ nT(e, 11) ^ nT(e, 25), aT = (e) => nT(e, 7) ^ nT(e, 18) ^ e >>> 3, oT = (e) => nT(e, 17) ^ nT(e, 19) ^ e >>> 10, sT = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]), cT = new Uint32Array([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), lT = class {
	constructor() {
		let e = /* @__PURE__ */ new ArrayBuffer(320);
		this._H = new Uint32Array(e, 0, 8), this._H.set(cT), this._W = new Uint32Array(e, 64, 64);
	}
	_updateHash() {
		let e = this._H, t = this._W;
		for (let e = 16; e < 64; e++) t[e] = oT(t[e - 2]) + t[e - 7] + aT(t[e - 15]) + t[e - 16];
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7];
		for (let e = 0, u, d; e < 64; e++) u = l + iT(o) + (o & s ^ ~o & c) + sT[e] + t[e] >>> 0, d = rT(n) + (n & r ^ n & i ^ r & i) >>> 0, l = c, c = s, s = o, o = a + u >>> 0, a = i, i = r, r = n, n = u + d >>> 0;
		e[0] += n, e[1] += r, e[2] += i, e[3] += a, e[4] += o, e[5] += s, e[6] += c, e[7] += l;
	}
	digest(e) {
		let t = 0;
		for (; t + 56 <= e.length;) {
			let n = 0;
			for (; n < 16 && t + 3 < e.length; n++) this._W[n] = e[t++] << 24 | e[t++] << 16 | e[t++] << 8 | e[t++];
			if (t % 64 != 0) {
				for (this._W.fill(0, n, 16); t < e.length;) this._W[n] |= e[t] << (3 - t % 4) * 8, t++;
				this._W[n] |= 128 << (3 - t % 4) * 8;
			}
			this._updateHash();
		}
		let n = t % 64 != 0;
		this._W.fill(0, 0, 16);
		let r = 0;
		for (; t < e.length; r++) for (let n = 3; n >= 0 && t < e.length; n--) this._W[r] |= e[t++] << n * 8;
		n || (this._W[r - (t % 4 == 0 ? 0 : 1)] |= 128 << (3 - t % 4) * 8), this._W[14] = e.byteLength / Ch, this._W[15] = e.byteLength * 8, this._updateHash();
		let i = /* @__PURE__ */ new Uint8Array(32);
		for (let e = 0; e < this._H.length; e++) for (let t = 0; t < 4; t++) i[e * 4 + t] = this._H[e] >>> (3 - t) * 8;
		return i;
	}
}, uT = (e) => new lT().digest(e), dT = (e) => {
	for (let t = 6; t < e.length; t++) e[t % 6] = e[t % 6] ^ e[t];
	return e.slice(0, 6);
}, fT = (e) => gy(dT(uT(vy(e)))), pT = (e, t) => t === void 0 ? !e.deleted : t.sv.has(e.id.client) && t.sv.get(e.id.client) > e.id.clock && !ux(t.ds, e.id), mT = [{
	light: "#ecd44433",
	dark: "#ecd444"
}], hT = (e, t, n) => {
	if (!e.has(n)) {
		if (e.size < t.length) {
			let n = x_();
			e.forEach((e) => n.add(e)), t = t.filter((e) => !n.has(e));
		}
		e.set(n, Dh(t));
	}
	return e.get(n);
}, gT = (e, { colors: t = mT, colorMapping: n = /* @__PURE__ */ new Map(), permanentUserData: r = null, onFirstRender: i = () => {}, mapping: a } = {}) => {
	let o = !1, s = new yT(e, a), c = new R({
		props: { editable: (e) => {
			let t = Q.getState(e);
			return t.snapshot == null && t.prevSnapshot == null;
		} },
		key: Q,
		state: {
			init: (i, a) => ({
				type: e,
				doc: e.doc,
				binding: s,
				snapshot: null,
				prevSnapshot: null,
				isChangeOrigin: !1,
				isUndoRedoOperation: !1,
				addToHistory: !0,
				colors: t,
				colorMapping: n,
				permanentUserData: r
			}),
			apply: (e, t) => {
				let n = e.getMeta(Q);
				if (n !== void 0) {
					t = Object.assign({}, t);
					for (let e in n) t[e] = n[e];
				}
				return t.addToHistory = e.getMeta("addToHistory") !== !1, t.isChangeOrigin = n !== void 0 && !!n.isChangeOrigin, t.isUndoRedoOperation = n !== void 0 && !!n.isChangeOrigin && !!n.isUndoRedoOperation, s.prosemirrorView !== null && n !== void 0 && (n.snapshot != null || n.prevSnapshot != null) && Bb(0, () => {
					s.prosemirrorView != null && (n.restore == null ? s._renderSnapshot(n.snapshot, n.prevSnapshot, t) : (s._renderSnapshot(n.snapshot, n.snapshot, t), delete t.restore, delete t.snapshot, delete t.prevSnapshot, s.mux(() => {
						s._prosemirrorChanged(s.prosemirrorView.state.doc);
					})));
				}), t;
			}
		},
		view: (e) => (s.initView(e), a ?? s._forceRerender(), i(), {
			update: () => {
				let t = c.getState(e.state);
				if (t.snapshot == null && t.prevSnapshot == null && (o || e.state.doc.content.findDiffStart(e.state.doc.type.createAndFill().content) !== null)) {
					if (o = !0, t.addToHistory === !1 && !t.isChangeOrigin) {
						let t = eT.getState(e.state), n = t && t.undoManager;
						n && n.stopCapturing();
					}
					s.mux(() => {
						t.doc.transact((n) => {
							n.meta.set("addToHistory", t.addToHistory), s._prosemirrorChanged(e.state.doc);
						}, Q);
					});
				}
			},
			destroy: () => {
				s.destroy();
			}
		})
	});
	return c;
}, _T = (e, t, n) => {
	if (t !== null && t.anchor !== null && t.head !== null) if (t.type === "all") e.setSelection(new Fa(e.doc));
	else if (t.type === "node") {
		let r = KT(n.doc, n.type, t.anchor, n.mapping);
		e.setSelection(L.create(e.doc, r));
	} else {
		let r = KT(n.doc, n.type, t.anchor, n.mapping), i = KT(n.doc, n.type, t.head, n.mapping);
		if (r !== null && i !== null) {
			let t = I.between(e.doc.resolve(r), e.doc.resolve(i));
			e.setSelection(t);
		}
	}
}, vT = (e, t) => ({
	type: t.selection.jsonID,
	anchor: WT(t.selection.anchor, e.type, e.mapping),
	head: WT(t.selection.head, e.type, e.mapping)
}), yT = class {
	constructor(e, t = /* @__PURE__ */ new Map()) {
		this.type = e, this.prosemirrorView = null, this.mux = Xw(), this.mapping = t, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
			this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = vT(this, this.prosemirrorView.state));
		}, this.afterAllTransactions = () => {
			this.beforeTransactionSelection = null;
		}, this._domSelectionInView = null;
	}
	get _tr() {
		return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
	}
	_isLocalCursorInView() {
		return this.prosemirrorView.hasFocus() ? (oy && this._domSelectionInView === null && (Bb(0, () => {
			this._domSelectionInView = null;
		}), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
	}
	_isDomSelectionInView() {
		let e = this.prosemirrorView._root.getSelection();
		if (e == null || e.anchorNode == null) return !1;
		let t = this.prosemirrorView._root.createRange();
		t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset), t.getClientRects().length === 0 && t.startContainer && t.collapsed && t.selectNodeContents(t.startContainer);
		let n = t.getBoundingClientRect(), r = Nb.documentElement;
		return n.bottom >= 0 && n.right >= 0 && n.left <= (window.innerWidth || r.clientWidth || 0) && n.top <= (window.innerHeight || r.clientHeight || 0);
	}
	renderSnapshot(e, t) {
		t ||= dS(mx(), /* @__PURE__ */ new Map()), this.prosemirrorView.dispatch(this._tr.setMeta(Q, {
			snapshot: e,
			prevSnapshot: t
		}));
	}
	unrenderSnapshot() {
		this.mapping.clear(), this.mux(() => {
			let e = this.type.toArray().map((e) => xT(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), t = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new P(M.from(e), 0, 0));
			t.setMeta(Q, {
				snapshot: null,
				prevSnapshot: null
			}), this.prosemirrorView.dispatch(t);
		});
	}
	_forceRerender() {
		this.mapping.clear(), this.mux(() => {
			let e = this.beforeTransactionSelection === null ? this.prosemirrorView.state.selection : null, t = this.type.toArray().map((e) => xT(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), n = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new P(M.from(t), 0, 0));
			if (e) {
				let t = ch(lh(e.anchor, 0), n.doc.content.size), r = ch(lh(e.head, 0), n.doc.content.size);
				n.setSelection(I.create(n.doc, t, r));
			}
			this.prosemirrorView.dispatch(n.setMeta(Q, {
				isChangeOrigin: !0,
				binding: this
			}));
		});
	}
	_renderSnapshot(e, t, n) {
		let r = this.doc, i = this.type;
		if (e ||= fS(this.doc), e instanceof Uint8Array || t instanceof Uint8Array) if ((!(e instanceof Uint8Array) || !(t instanceof Uint8Array)) && yv(), r = new bx({ gc: !1 }), Fx(r, t), t = fS(r), Fx(r, e), e = fS(r), i._item === null) {
			let e = Array.from(this.doc.share.keys()).find((e) => this.doc.share.get(e) === this.type);
			i = r.getXmlFragment(e);
		} else {
			let e = r.store.clients.get(i._item.id.client) ?? [];
			i = e[yS(e, i._item.id.clock)].content.type;
		}
		this.mapping.clear(), this.mux(() => {
			r.transact((r) => {
				let a = n.permanentUserData;
				a && a.dss.forEach((e) => {
					cx(r, e, (e) => {});
				});
				let o = (e, t) => {
					let r = e === "added" ? a.getUserByClientId(t.client) : a.getUserByDeletedId(t);
					return {
						user: r,
						type: e,
						color: hT(n.colorMapping, n.colors, r)
					};
				}, s = dC(i, new uS(t.ds, e.sv)).map((n) => !n._item.deleted || pT(n._item, e) || pT(n._item, t) ? xT(n, this.prosemirrorView.state.schema, {
					mapping: /* @__PURE__ */ new Map(),
					isOMark: /* @__PURE__ */ new Map()
				}, e, t, o) : null).filter((e) => e !== null), c = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new P(M.from(s), 0, 0));
				this.prosemirrorView.dispatch(c.setMeta(Q, { isChangeOrigin: !0 }));
			}, Q);
		});
	}
	_typeChanged(e, t) {
		if (this.prosemirrorView == null) return;
		let n = Q.getState(this.prosemirrorView.state);
		if (e.length === 0 || n.snapshot != null || n.prevSnapshot != null) {
			this.renderSnapshot(n.snapshot, n.prevSnapshot);
			return;
		}
		this.mux(() => {
			let e = (e, t) => this.mapping.delete(t);
			cx(t, t.deleteSet, (e) => {
				if (e.constructor === Z) {
					let t = e.content.type;
					t && this.mapping.delete(t);
				}
			}), t.changed.forEach(e), t.changedParentTypes.forEach(e);
			let n = this.type.toArray().map((e) => bT(e, this.prosemirrorView.state.schema, this)).filter((e) => e !== null), r = this._tr.replace(0, this.prosemirrorView.state.doc.content.size, new P(M.from(n), 0, 0));
			_T(r, this.beforeTransactionSelection, this), r = r.setMeta(Q, {
				isChangeOrigin: !0,
				isUndoRedoOperation: t.origin instanceof IS
			}), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && r.scrollIntoView(), this.prosemirrorView.dispatch(r);
		});
	}
	_prosemirrorChanged(e) {
		this.doc.transact(() => {
			zT(this.doc, this.type, e, this), this.beforeTransactionSelection = vT(this, this.prosemirrorView.state);
		}, Q);
	}
	initView(e) {
		this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
	}
	destroy() {
		this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
	}
}, bT = (e, t, n, r, i, a) => {
	let o = n.mapping.get(e);
	if (o === void 0) {
		if (e instanceof tw) return xT(e, t, n, r, i, a);
		throw vv();
	}
	return o;
}, xT = (e, t, n, r, i, a) => {
	let o = [], s = (e) => {
		if (e instanceof tw) {
			let s = bT(e, t, n, r, i, a);
			s !== null && o.push(s);
		} else {
			let s = e._item.right?.content?.type;
			s instanceof XC && !s._item.deleted && s._item.id.client === s.doc.clientID && (e.applyDelta([{ retain: e.length }, ...s.toDelta()]), s.doc.transact((e) => {
				s._item.delete(e);
			}));
			let c = ST(e, t, n, r, i, a);
			c !== null && c.forEach((e) => {
				e !== null && o.push(e);
			});
		}
	};
	r === void 0 || i === void 0 ? e.toArray().forEach(s) : dC(e, new uS(i.ds, r.sv)).forEach(s);
	try {
		let s = e.getAttributes(r);
		r !== void 0 && (pT(e._item, r) ? pT(e._item, i) || (s.ychange = a ? a("added", e._item.id) : { type: "added" }) : s.ychange = a ? a("removed", e._item.id) : { type: "removed" });
		let c = t.node(e.nodeName, s, o);
		return n.mapping.set(e, c), c;
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Q), n.mapping.delete(e), null;
	}
}, ST = (e, t, n, r, i, a) => {
	let o = [], s = e.toDelta(r, i, a);
	try {
		for (let e = 0; e < s.length; e++) {
			let n = s[e];
			o.push(t.text(n.insert, LT(n.attributes, t)));
		}
	} catch {
		return e.doc.transact((t) => {
			e._item.delete(t);
		}, Q), null;
	}
	return o;
}, CT = (e, t) => {
	let n = new ow(), r = e.map((e) => ({
		insert: e.text,
		attributes: RT(e.marks, t)
	}));
	return n.applyDelta(r), t.mapping.set(n, e), n;
}, wT = (e, t) => {
	let n = new tw(e.type.name);
	for (let t in e.attrs) {
		let r = e.attrs[t];
		r !== null && t !== "ychange" && n.setAttribute(t, r);
	}
	return n.insert(0, OT(e).map((e) => TT(e, t))), t.mapping.set(n, e), n;
}, TT = (e, t) => e instanceof Array ? CT(e, t) : wT(e, t), ET = (e) => typeof e == "object" && !!e, DT = (e, t) => {
	let n = Object.keys(e).filter((t) => e[t] !== null), r = n.length === (t == null ? 0 : Object.keys(t).filter((e) => t[e] !== null).length);
	for (let i = 0; i < n.length && r; i++) {
		let a = n[i], o = e[a], s = t[a];
		r = a === "ychange" || o === s || ET(o) && ET(s) && DT(o, s);
	}
	return r;
}, OT = (e) => {
	let t = e.content.content, n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		if (r.isText) {
			let r = [];
			for (let n = t[e]; e < t.length && n.isText; n = t[++e]) r.push(n);
			e--, n.push(r);
		} else n.push(r);
	}
	return n;
}, kT = (e, t) => {
	let n = e.toDelta();
	return n.length === t.length && n.every((e, n) => e.insert === t[n].text && Kv(e.attributes || {}).length === t[n].marks.length && Xv(e.attributes, (e, r) => {
		let i = IT(r), a = t[n].marks;
		return DT(e, a.find((e) => e.type.name === i)?.attrs);
	}));
}, AT = (e, t) => {
	if (e instanceof tw && !(t instanceof Array) && BT(e, t)) {
		let n = OT(t);
		return e._length === n.length && DT(e.getAttributes(), t.attrs) && e.toArray().every((e, t) => AT(e, n[t]));
	}
	return e instanceof ow && t instanceof Array && kT(e, t);
}, jT = (e, t) => e === t || e instanceof Array && t instanceof Array && e.length === t.length && e.every((e, n) => t[n] === e), MT = (e, t, n) => {
	let r = e.toArray(), i = OT(t), a = i.length, o = r.length, s = ch(o, a), c = 0, l = 0, u = !1;
	for (; c < s; c++) {
		let e = r[c], t = i[c];
		if (jT(n.mapping.get(e), t)) u = !0;
		else if (!AT(e, t)) break;
	}
	for (; c + l < s; l++) {
		let e = r[o - l - 1], t = i[a - l - 1];
		if (jT(n.mapping.get(e), t)) u = !0;
		else if (!AT(e, t)) break;
	}
	return {
		equalityFactor: c + l,
		foundMappedChild: u
	};
}, NT = (e) => {
	let t = "", n = e._start, r = {};
	for (; n !== null;) n.deleted || (n.countable && n.content instanceof Dw ? t += n.content.str : n.content instanceof bw && (r[n.content.key] = null)), n = n.right;
	return {
		str: t,
		nAttrs: r
	};
}, PT = (e, t, n) => {
	n.mapping.set(e, t);
	let { nAttrs: r, str: i } = NT(e), a = t.map((e) => ({
		insert: e.text,
		attributes: Object.assign({}, r, RT(e.marks, n))
	})), { insert: o, remove: s, index: c } = $w(i, a.map((e) => e.insert).join(""));
	e.delete(c, s), e.insert(c, o), e.applyDelta(a.map((e) => ({
		retain: e.insert.length,
		attributes: e.attributes
	})));
}, FT = /(.*)(--[a-zA-Z0-9+/=]{8})$/, IT = (e) => FT.exec(e)?.[1] ?? e, LT = (e, t) => {
	let n = [];
	for (let r in e) n.push(t.mark(IT(r), e[r]));
	return n;
}, RT = (e, t) => {
	let n = {};
	return e.forEach((e) => {
		if (e.type.name !== "ychange") {
			let r = v_(t.isOMark, e.type, () => !e.type.excludes(e.type));
			n[r ? `${e.type.name}--${fT(e.toJSON())}` : e.type.name] = e.attrs;
		}
	}), n;
}, zT = (e, t, n, r) => {
	if (t instanceof tw && t.nodeName !== n.type.name) throw Error("node name mismatch!");
	if (r.mapping.set(t, n), t instanceof tw) {
		let e = t.getAttributes(), r = n.attrs;
		for (let n in r) r[n] === null ? t.removeAttribute(n) : e[n] !== r[n] && n !== "ychange" && t.setAttribute(n, r[n]);
		for (let n in e) r[n] === void 0 && t.removeAttribute(n);
	}
	let i = OT(n), a = i.length, o = t.toArray(), s = o.length, c = ch(a, s), l = 0, u = 0;
	for (; l < c; l++) {
		let e = o[l], t = i[l];
		if (!jT(r.mapping.get(e), t)) if (AT(e, t)) r.mapping.set(e, t);
		else break;
	}
	for (; u + l < c; u++) {
		let e = o[s - u - 1], t = i[a - u - 1];
		if (!jT(r.mapping.get(e), t)) if (AT(e, t)) r.mapping.set(e, t);
		else break;
	}
	e.transact(() => {
		for (; s - l - u > 0 && a - l - u > 0;) {
			let n = o[l], c = i[l], d = o[s - u - 1], f = i[a - u - 1];
			if (n instanceof ow && c instanceof Array) kT(n, c) || PT(n, c, r), l += 1;
			else {
				let i = n instanceof tw && BT(n, c), a = d instanceof tw && BT(d, f);
				if (i && a) {
					let e = MT(n, c, r), t = MT(d, f, r);
					e.foundMappedChild && !t.foundMappedChild ? a = !1 : !e.foundMappedChild && t.foundMappedChild || e.equalityFactor < t.equalityFactor ? i = !1 : a = !1;
				}
				i ? (zT(e, n, c, r), l += 1) : a ? (zT(e, d, f, r), u += 1) : (r.mapping.delete(t.get(l)), t.delete(l, 1), t.insert(l, [TT(c, r)]), l += 1);
			}
		}
		let n = s - l - u;
		if (s === 1 && a === 0 && o[0] instanceof ow ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : n > 0 && (t.slice(l, l + n).forEach((e) => r.mapping.delete(e)), t.delete(l, n)), l + u < a) {
			let e = [];
			for (let t = l; t < a - u; t++) e.push(TT(i[t], r));
			t.insert(l, e);
		}
	}, Q);
}, BT = (e, t) => !(t instanceof Array) && e.nodeName === t.type.name, VT = null, HT = () => {
	let e = VT;
	VT = null, e.forEach((e, t) => {
		let n = t.state.tr, r = Q.getState(t.state);
		r && r.binding && !r.binding.isDestroyed && (e.forEach((e, t) => {
			n.setMeta(t, e);
		}), t.dispatch(n));
	});
}, UT = (e, t, n) => {
	VT || (VT = /* @__PURE__ */ new Map(), Bb(0, HT)), v_(VT, e, g_).set(t, n);
}, WT = (e, t, n) => {
	if (e === 0) return oS(t, 0, t.length === 0 ? -1 : 0);
	let r = t._first === null ? null : t._first.content.type;
	for (; r !== null && t !== r;) {
		if (r instanceof ow) {
			if (r._length >= e) return oS(r, e, t.length === 0 ? -1 : 0);
			if (e -= r._length, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
			else {
				do
					r = r._item === null ? null : r._item.parent, e--;
				while (r !== t && r !== null && r._item !== null && r._item.next === null);
				r !== null && r !== t && (r = r._item === null ? null : r._item.next.content.type);
			}
		} else {
			let i = (n.get(r) || { nodeSize: 0 }).nodeSize;
			if (r._first !== null && e < i) r = r._first.content.type, e--;
			else {
				if (e === 1 && r._length === 0 && i > 1) return new tS(r._item === null ? null : r._item.id, r._item === null ? $x(r) : null, null);
				if (e -= i, r._item !== null && r._item.next !== null) r = r._item.next.content.type;
				else {
					if (e === 0) return r = r._item === null ? r : r._item.parent, new tS(r._item === null ? null : r._item.id, r._item === null ? $x(r) : null, null);
					do
						r = r._item.parent, e--;
					while (r !== t && r._item.next === null);
					r !== t && (r = r._item.next.content.type);
				}
			}
		}
		if (r === null) throw yv();
		if (e === 0 && r.constructor !== ow && r !== t) return GT(r._item.parent, r._item);
	}
	return oS(t, t._length, t.length === 0 ? -1 : 0);
}, GT = (e, t) => {
	let n = null, r = null;
	return e._item === null ? r = $x(e) : n = Y(e._item.id.client, e._item.id.clock), new tS(n, r, t.id);
}, KT = (e, t, n, r) => {
	let i = cS(n, e);
	if (i === null || i.type !== t && !eS(t, i.type._item)) return null;
	let a = i.type, o = 0;
	if (a.constructor === ow) o = i.index;
	else if (a._item === null || !a._item.deleted) {
		let e = a._first, t = 0;
		for (; t < a._length && t < i.index && e !== null;) {
			if (!e.deleted) {
				let n = e.content.type;
				t++, n instanceof ow ? o += n._length : o += r.get(n).nodeSize;
			}
			e = e.right;
		}
		o += 1;
	}
	for (; a !== t && a._item !== null;) {
		let e = a._item.parent;
		if (e._item === null || !e._item.deleted) {
			o += 1;
			let t = e._first;
			for (; t !== null;) {
				let e = t.content.type;
				if (e === a) break;
				t.deleted || (e instanceof ow ? o += e._length : o += r.get(e).nodeSize), t = t.right;
			}
		}
		a = e;
	}
	return o - 1;
}, qT = (e, t, n) => e !== t, JT = (e) => {
	let t = document.createElement("span");
	t.classList.add("ProseMirror-yjs-cursor"), t.setAttribute("style", `border-color: ${e.color}`);
	let n = document.createElement("div");
	n.setAttribute("style", `background-color: ${e.color}`), n.insertBefore(document.createTextNode(e.name), null);
	let r = document.createTextNode("⁠"), i = document.createTextNode("⁠");
	return t.insertBefore(r, null), t.insertBefore(n, null), t.insertBefore(i, null), t;
}, YT = (e) => ({
	style: `background-color: ${e.color}70`,
	class: "ProseMirror-yjs-selection"
}), XT = /^#[0-9a-fA-F]{6}$/, ZT = (e, t, n, r, i) => {
	let a = Q.getState(e), o = a.doc, s = [];
	return a.snapshot != null || a.prevSnapshot != null || a.binding.mapping.size === 0 ? V.create(e.doc, []) : (t.getStates().forEach((t, c) => {
		if (n(o.clientID, c, t) && t.cursor != null) {
			let n = t.user || {};
			n.color == null ? n.color = "#ffa500" : XT.test(n.color) || console.warn("A user uses an unsupported color format", n), n.name ??= `User: ${c}`;
			let l = KT(o, a.type, nS(t.cursor.anchor), a.binding.mapping), u = KT(o, a.type, nS(t.cursor.head), a.binding.mapping);
			if (l !== null && u !== null) {
				let t = lh(e.doc.content.size - 1, 0);
				l = ch(l, t), u = ch(u, t), s.push(B.widget(u, () => r(n, c), {
					key: c + "",
					side: 10
				}));
				let a = ch(l, u), o = lh(l, u);
				s.push(B.inline(a, o, i(n, c), {
					inclusiveEnd: !0,
					inclusiveStart: !1
				}));
			}
		}
	}), V.create(e.doc, s));
}, QT = (e, { awarenessStateFilter: t = qT, cursorBuilder: n = JT, selectionBuilder: r = YT, getSelection: i = (e) => e.selection } = {}, a = "cursor") => new R({
	key: tT,
	state: {
		init(i, a) {
			return ZT(a, e, t, n, r);
		},
		apply(i, a, o, s) {
			let c = Q.getState(s), l = i.getMeta(tT);
			return c && c.isChangeOrigin || l && l.awarenessUpdated ? ZT(s, e, t, n, r) : a.map(i.mapping, i.doc);
		}
	},
	props: { decorations: (e) => tT.getState(e) },
	view: (t) => {
		let n = () => {
			t.docView && UT(t, tT, { awarenessUpdated: !0 });
		}, r = () => {
			let n = Q.getState(t.state), r = e.getLocalState() || {};
			if (t.hasFocus()) {
				let o = i(t.state), s = WT(o.anchor, n.type, n.binding.mapping), c = WT(o.head, n.type, n.binding.mapping);
				(r.cursor == null || !lS(nS(r.cursor.anchor), s) || !lS(nS(r.cursor.head), c)) && e.setLocalStateField(a, {
					anchor: s,
					head: c
				});
			} else r.cursor != null && KT(n.doc, n.type, nS(r.cursor.anchor), n.binding.mapping) !== null && e.setLocalStateField(a, null);
		};
		return e.on("change", n), t.dom.addEventListener("focusin", r), t.dom.addEventListener("focusout", r), {
			update: r,
			destroy: () => {
				t.dom.removeEventListener("focusin", r), t.dom.removeEventListener("focusout", r), e.off("change", n), e.setLocalStateField(a, null);
			}
		};
	}
}), $T = (e) => eT.getState(e)?.undoManager?.undo() != null, eE = (e) => eT.getState(e)?.undoManager?.redo() != null, tE = (e, t) => t == null ? eT.getState(e)?.undoManager?.canUndo() : $T(e), nE = (e, t) => t == null ? eT.getState(e)?.undoManager?.canRedo() : eE(e), rE = /* @__PURE__ */ new Set(["paragraph"]), iE = (e, t) => !(e instanceof Z) || !(e.content instanceof Lw) || !(e.content.type instanceof XC || e.content.type instanceof tw && t.has(e.content.type.nodeName)) || e.content.type._length === 0, aE = ({ protectedNodes: e = rE, trackedOrigins: t = [], undoManager: n = null } = {}) => new R({
	key: eT,
	state: {
		init: (r, i) => {
			let a = Q.getState(i), o = n || new IS(a.type, {
				trackedOrigins: new Set([Q].concat(t)),
				deleteFilter: (t) => iE(t, e),
				captureTransaction: (e) => e.meta.get("addToHistory") !== !1
			});
			return {
				undoManager: o,
				prevSel: null,
				hasUndoOps: o.undoStack.length > 0,
				hasRedoOps: o.redoStack.length > 0
			};
		},
		apply: (e, t, n, r) => {
			let i = Q.getState(r).binding, a = t.undoManager, o = a.undoStack.length > 0, s = a.redoStack.length > 0;
			return i ? {
				undoManager: a,
				prevSel: vT(i, n),
				hasUndoOps: o,
				hasRedoOps: s
			} : o !== t.hasUndoOps || s !== t.hasRedoOps ? Object.assign({}, t, {
				hasUndoOps: a.undoStack.length > 0,
				hasRedoOps: a.redoStack.length > 0
			}) : t;
		}
	},
	view: (e) => {
		let t = Q.getState(e.state), n = eT.getState(e.state).undoManager;
		return n.on("stack-item-added", ({ stackItem: n }) => {
			let r = t.binding;
			r && n.meta.set(r, eT.getState(e.state).prevSel);
		}), n.on("stack-item-popped", ({ stackItem: e }) => {
			let n = t.binding;
			n && (n.beforeTransactionSelection = e.meta.get(n) || n.beforeTransactionSelection);
		}), { destroy: () => {
			n.destroy();
		} };
	}
}), oE = (e, t) => {
	if (e === "slot") return 0;
	if (e instanceof Function) return e(t);
	let { children: n, ...r } = t ?? {};
	if (e === "svg") throw Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
	return [
		e,
		r,
		n
	];
}, sE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, cE = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, lE = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, uE = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, dE = Nm.create({
	name: "bold",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "strong" },
			{
				tag: "b",
				getAttrs: (e) => e.style.fontWeight !== "normal" && null
			},
			{
				style: "font-weight=400",
				clearMark: (e) => e.type.name === this.name
			},
			{
				style: "font-weight",
				getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return /* @__PURE__ */ oE("strong", {
			...ap(this.options.HTMLAttributes, e),
			children: /* @__PURE__ */ oE("slot", {})
		});
	},
	markdownTokenName: "strong",
	parseMarkdown: (e, t) => t.applyMark("bold", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<strong>",
		close: "</strong>"
	} },
	renderMarkdown: (e, t) => `**${t.renderChildren(e)}**`,
	addCommands() {
		return {
			setBold: () => ({ commands: e }) => e.setMark(this.name),
			toggleBold: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetBold: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-b": () => this.editor.commands.toggleBold(),
			"Mod-B": () => this.editor.commands.toggleBold()
		};
	},
	addInputRules() {
		return [nh({
			find: sE,
			type: this.type
		}), nh({
			find: lE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [ah({
			find: cE,
			type: this.type
		}), ah({
			find: uE,
			type: this.type
		})];
	}
}), fE = (e) => {
	let t = /`([^`]+)`(?!`)$/.exec(e);
	return !t || t.index > 0 && e[t.index - 1] === "`" ? null : {
		index: t.index,
		text: t[0],
		replaceWith: t[1]
	};
}, pE = (e) => {
	let t = /`([^`]+)`(?!`)/g, n = [], r;
	for (; (r = t.exec(e)) !== null;) r.index > 0 && e[r.index - 1] === "`" || n.push({
		index: r.index,
		text: r[0],
		replaceWith: r[1]
	});
	return n;
}, mE = Nm.create({
	name: "code",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	excludes: "_",
	code: !0,
	exitable: !0,
	parseHTML() {
		return [{ tag: "code" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"code",
			ap(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "codespan",
	parseMarkdown: (e, t) => t.applyMark("code", [{
		type: "text",
		text: e.text || ""
	}]),
	renderMarkdown: (e, t) => e.content ? `\`${t.renderChildren(e.content)}\`` : "",
	addCommands() {
		return {
			setCode: () => ({ commands: e }) => e.setMark(this.name),
			toggleCode: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetCode: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-e": () => this.editor.commands.toggleCode() };
	},
	addInputRules() {
		return [nh({
			find: fE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [ah({
			find: pE,
			type: this.type
		})];
	}
}), hE = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, gE = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, _E = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, vE = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, yE = Nm.create({
	name: "italic",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "em" },
			{
				tag: "i",
				getAttrs: (e) => e.style.fontStyle !== "normal" && null
			},
			{
				style: "font-style=normal",
				clearMark: (e) => e.type.name === this.name
			},
			{ style: "font-style=italic" }
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"em",
			ap(this.options.HTMLAttributes, e),
			0
		];
	},
	addCommands() {
		return {
			setItalic: () => ({ commands: e }) => e.setMark(this.name),
			toggleItalic: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetItalic: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	markdownTokenName: "em",
	parseMarkdown: (e, t) => t.applyMark("italic", t.parseInline(e.tokens || [])),
	markdownOptions: { htmlReopen: {
		open: "<em>",
		close: "</em>"
	} },
	renderMarkdown: (e, t) => `*${t.renderChildren(e)}*`,
	addKeyboardShortcuts() {
		return {
			"Mod-i": () => this.editor.commands.toggleItalic(),
			"Mod-I": () => this.editor.commands.toggleItalic()
		};
	},
	addInputRules() {
		return [nh({
			find: hE,
			type: this.type
		}), nh({
			find: _E,
			type: this.type
		})];
	},
	addPasteRules() {
		return [ah({
			find: gE,
			type: this.type
		}), ah({
			find: vE,
			type: this.type
		})];
	}
}), bE = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, xE = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, SE = Nm.create({
	name: "strike",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [
			{ tag: "s" },
			{ tag: "del" },
			{ tag: "strike" },
			{
				style: "text-decoration",
				consuming: !1,
				getAttrs: (e) => e.includes("line-through") ? {} : !1
			}
		];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"s",
			ap(this.options.HTMLAttributes, e),
			0
		];
	},
	markdownTokenName: "del",
	parseMarkdown: (e, t) => t.applyMark("strike", t.parseInline(e.tokens || [])),
	renderMarkdown: (e, t) => `~~${t.renderChildren(e)}~~`,
	addCommands() {
		return {
			setStrike: () => ({ commands: e }) => e.setMark(this.name),
			toggleStrike: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetStrike: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return { "Mod-Shift-s": () => this.editor.commands.toggleStrike() };
	},
	addInputRules() {
		return [nh({
			find: bE,
			type: this.type
		})];
	},
	addPasteRules() {
		return [ah({
			find: xE,
			type: this.type
		})];
	}
}), CE = Nm.create({
	name: "underline",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "u" }, {
			style: "text-decoration",
			consuming: !1,
			getAttrs: (e) => e.includes("underline") ? {} : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"u",
			ap(this.options.HTMLAttributes, e),
			0
		];
	},
	parseMarkdown(e, t) {
		return t.applyMark(this.name || "underline", t.parseInline(e.tokens || []));
	},
	renderMarkdown(e, t) {
		return `++${t.renderChildren(e)}++`;
	},
	markdownTokenizer: {
		name: "underline",
		level: "inline",
		start(e) {
			return e.indexOf("++");
		},
		tokenize(e, t, n) {
			let r = /^(\+\+)([\s\S]+?)(\+\+)/.exec(e);
			if (!r) return;
			let i = r[2].trim();
			return {
				type: "underline",
				raw: r[0],
				text: i,
				tokens: n.inlineTokens(i)
			};
		}
	},
	addCommands() {
		return {
			setUnderline: () => ({ commands: e }) => e.setMark(this.name),
			toggleUnderline: () => ({ commands: e }) => e.toggleMark(this.name),
			unsetUnderline: () => ({ commands: e }) => e.unsetMark(this.name)
		};
	},
	addKeyboardShortcuts() {
		return {
			"Mod-u": () => this.editor.commands.toggleUnderline(),
			"Mod-U": () => this.editor.commands.toggleUnderline()
		};
	}
});
//#endregion
//#region node_modules/@blocknote/core/dist/blocks-DGsP5WKr.js
function wE(e, t = JSON.stringify) {
	let n = {};
	return e.filter((e) => {
		let r = t(e);
		return Object.prototype.hasOwnProperty.call(n, r) ? !1 : n[r] = !0;
	});
}
function TE(e) {
	return wE(e.filter((t, n) => e.indexOf(t) !== n));
}
var EE = W.create({
	name: "uniqueID",
	priority: 1e4,
	addOptions() {
		return {
			attributeName: "id",
			types: [],
			setIdAttribute: !1,
			isWithinEditor: void 0,
			generateID: () => {
				if (typeof window < "u" && window.__TEST_OPTIONS) {
					let e = window.__TEST_OPTIONS;
					return e.mockID === void 0 ? e.mockID = 0 : e.mockID++, e.mockID.toString();
				}
				return kh();
			},
			filterTransaction: null
		};
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { [this.options.attributeName]: {
				default: null,
				parseHTML: (e) => e.getAttribute(`data-${this.options.attributeName}`),
				renderHTML: (e) => {
					let t = { [`data-${this.options.attributeName}`]: e[this.options.attributeName] };
					return this.options.setIdAttribute ? {
						...t,
						id: e[this.options.attributeName]
					} : t;
				}
			} }
		}];
	},
	addProseMirrorPlugins() {
		let { isWithinEditor: e } = this.options, t = null, n = !1;
		return [new R({
			key: new z("uniqueID"),
			appendTransaction: (e, t, n) => {
				let r = e.some((e) => e.docChanged) && !t.doc.eq(n.doc), i = this.options.filterTransaction && e.some((e) => !this.options.filterTransaction?.(e));
				if (!r || i) return;
				let { tr: a } = n, { types: o, attributeName: s, generateID: c } = this.options, l = qf(t.doc, e), { mapping: u } = l;
				if (Cp(l).forEach(({ newRange: e }) => {
					let r = Jf(n.doc, e, (e) => o.includes(e.type.name)), i = TE(r.map(({ node: e }) => e.attrs[s]).filter((e) => e !== null));
					r.forEach(({ node: e, pos: r }) => {
						let o = a.doc.nodeAt(r)?.attrs[s];
						if (o === null) {
							let i = t.doc.type.createAndFill().content;
							if (t.doc.content.findDiffStart(i) === null) {
								let t = JSON.parse(JSON.stringify(n.doc.toJSON()));
								if (t.content[0].content[0].attrs.id = "initialBlockId", JSON.stringify(t.content) === JSON.stringify(i.toJSON())) {
									a.setNodeMarkup(r, void 0, {
										...e.attrs,
										[s]: "initialBlockId"
									});
									return;
								}
							}
							a.setNodeMarkup(r, void 0, {
								...e.attrs,
								[s]: c()
							});
							return;
						}
						let { deleted: l } = u.invert().mapResult(r);
						l && i.includes(o) && a.setNodeMarkup(r, void 0, {
							...e.attrs,
							[s]: c()
						});
					});
				}), a.steps.length) return a.setMeta("uniqueID", !0), a;
			},
			view(n) {
				let r = (r) => {
					let i = n.dom.parentElement;
					t = i?.contains(r.target) || e?.(r.target) ? i : null;
				};
				return window.addEventListener("dragstart", r), { destroy() {
					window.removeEventListener("dragstart", r);
				} };
			},
			props: {
				handleDOMEvents: {
					drop: (e, r) => (n = t !== e.dom.parentElement || r.dataTransfer?.effectAllowed === "copy", t = null, !1),
					paste: () => (n = !0, !1)
				},
				transformPasted: (e) => {
					if (!n) return e;
					let { types: t, attributeName: r } = this.options, i = (e) => {
						let n = [];
						return e.forEach((e) => {
							if (e.isText) {
								n.push(e);
								return;
							}
							if (!t.includes(e.type.name)) {
								n.push(e.copy(i(e.content)));
								return;
							}
							let a = e.type.create({
								...e.attrs,
								[r]: null
							}, i(e.content), e.marks);
							n.push(a);
						}), M.from(n);
					};
					return n = !1, new P(i(e.content), e.openStart, e.openEnd);
				}
			}
		})];
	}
});
function DE(e) {
	return e.type === "link";
}
function OE(e) {
	return typeof e != "string" && e.type === "link";
}
function kE(e) {
	return typeof e != "string" && e.type === "text";
}
function AE(e) {
	return ME(e) ? { ...e } : jE(e) ? {
		type: "tableCell",
		content: [].concat(e.content),
		props: {
			backgroundColor: e.props?.backgroundColor ?? "default",
			textColor: e.props?.textColor ?? "default",
			textAlignment: e.props?.textAlignment ?? "left",
			colspan: e.props?.colspan ?? 1,
			rowspan: e.props?.rowspan ?? 1
		}
	} : {
		type: "tableCell",
		content: [].concat(e),
		props: {
			backgroundColor: "default",
			textColor: "default",
			textAlignment: "left",
			colspan: 1,
			rowspan: 1
		}
	};
}
function jE(e) {
	return e != null && typeof e != "string" && !Array.isArray(e) && e.type === "tableCell";
}
function ME(e) {
	return jE(e) && e.props !== void 0 && e.content !== void 0;
}
function NE(e) {
	return ME(e) ? e.props.colspan ?? 1 : 1;
}
function PE(e) {
	return ME(e) ? e.props.rowspan ?? 1 : 1;
}
var FE = class extends Error {
	constructor(e) {
		super(`Unreachable case: ${e}`);
	}
}, IE = () => typeof navigator < "u" && (/Mac/.test(navigator.platform) || /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent));
function LE(e, t = "Ctrl") {
	return IE() ? e.replace("Mod", "⌘") : e.replace("Mod", t);
}
function RE(...e) {
	return [...new Set(e.filter((e) => e).join(" ").split(" "))].join(" ");
}
function zE(e, t, n, r) {
	let i = document.createElement("div");
	i.className = RE("bn-block-content", n.class), i.setAttribute("data-content-type", e);
	for (let [e, t] of Object.entries(n)) e !== "class" && i.setAttribute(e, t);
	let a = document.createElement(t);
	a.className = RE("bn-inline-content", r.class);
	for (let [e, t] of Object.entries(r)) e !== "class" && a.setAttribute(e, t);
	return i.appendChild(a), {
		dom: i,
		contentDOM: a
	};
}
var BE = (e, t) => {
	let n = iO(e, t.pmSchema);
	n.type.name === "blockContainer" && (n = n.firstChild);
	let r = t.pmSchema.nodes[n.type.name].spec.toDOM;
	if (r === void 0) throw Error("This block has no default HTML serialization as its corresponding TipTap node doesn't implement `renderHTML`.");
	let i = r(n);
	if (typeof i != "object" || !("dom" in i)) throw Error("Cannot use this block's default HTML serialization as its corresponding TipTap node's `renderHTML` function does not return an object with the `dom` property.");
	return i;
};
function VE(e, t = "<br>") {
	let n = e.querySelectorAll("p");
	if (n.length > 1) {
		let e = n[0];
		for (let r = 1; r < n.length; r++) {
			let i = n[r];
			e.innerHTML += t + i.innerHTML, i.remove();
		}
	}
}
function HE(e) {
	return "data-" + e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function UE(e) {
	let t = e.split("/");
	return !t.length || t[t.length - 1] === "" ? e : t[t.length - 1];
}
function WE(e) {
	let t = [
		"mp4",
		"webm",
		"ogg",
		"mov",
		"mkv",
		"flv",
		"avi",
		"wmv",
		"m4v"
	];
	try {
		let n = new URL(e).pathname.split(".").pop()?.toLowerCase() || "";
		return t.includes(n);
	} catch {
		return !1;
	}
}
function GE(e) {
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		t[e] = {
			default: n.default,
			keepOnSplit: !0,
			parseHTML: (t) => {
				let r = t.getAttribute(HE(e));
				if (r === null) return null;
				if (n.default === void 0 && n.type === "boolean" || n.default !== void 0 && typeof n.default == "boolean") return r === "true" ? !0 : r === "false" ? !1 : null;
				if (n.default === void 0 && n.type === "number" || n.default !== void 0 && typeof n.default == "number") {
					let e = parseFloat(r);
					return !Number.isNaN(e) && Number.isFinite(e) ? e : null;
				}
				return r;
			},
			renderHTML: (t) => t[e] === n.default ? {} : { [HE(e)]: t[e] }
		};
	}), t;
}
function KE(e, t, n, r) {
	let i = e();
	if (i === void 0) throw Error("Cannot find node position");
	let a = n.state.doc.resolve(i).node().attrs.id;
	if (!a) throw Error("Block doesn't have id");
	let o = t.getBlock(a);
	if (o.type !== r) throw Error("Block type does not match");
	return o;
}
function qE(e, t, n, r, i = !1, a) {
	let o = document.createElement("div");
	if (a !== void 0) for (let [e, t] of Object.entries(a)) e !== "class" && o.setAttribute(e, t);
	o.className = RE("bn-block-content", a?.class || ""), o.setAttribute("data-content-type", t);
	for (let [e, t] of Object.entries(n)) t !== r[e].default && o.setAttribute(HE(e), t);
	return i && o.setAttribute("data-file-block", ""), o.appendChild(e.dom), e.contentDOM && (e.contentDOM.className = RE("bn-inline-content", e.contentDOM.className)), {
		...e,
		dom: o
	};
}
function JE(e, t, n) {
	return {
		config: {
			type: e.type,
			content: e.content,
			propSchema: t
		},
		implementation: {
			node: e.node,
			render: BE,
			toExternalHTML: BE
		},
		extensions: n
	};
}
function YE(e, t) {
	e.stopEvent = (e) => (e.type === "mousedown" && setTimeout(() => {
		t.view.dom.blur();
	}, 10), !0);
}
function XE(e, t) {
	let n = [{
		tag: "[data-content-type=" + e.type + "]",
		contentElement: ".bn-inline-content"
	}];
	return t.parse && n.push({
		tag: "*",
		getAttrs(e) {
			if (typeof e == "string") return !1;
			let n = t.parse?.(e);
			return n === void 0 ? !1 : n;
		},
		preserveWhitespace: !0,
		getContent: e.content === "inline" || e.content === "none" ? (n, r) => {
			if (t.parseContent) {
				let e = t.parseContent({
					el: n,
					schema: r
				});
				if (e !== void 0) return e;
			}
			if (e.content === "inline") {
				let e = n.cloneNode(!0);
				return VE(e, t.meta?.code ? "\n" : "<br>"), Yr.fromSchema(r).parse(e, {
					topNode: r.nodes.paragraph.create(),
					preserveWhitespace: !0
				}).content;
			}
			return M.empty;
		} : void 0
	}), n;
}
function ZE(e, t, n, r) {
	let i = t.node || rh.create({
		name: e.type,
		content: e.content === "inline" ? "inline*" : e.content === "none" ? "" : e.content,
		group: "blockContent",
		selectable: t.meta?.selectable ?? !0,
		isolating: t.meta?.isolating ?? !0,
		code: t.meta?.code ?? !1,
		defining: t.meta?.defining ?? !0,
		priority: r,
		addAttributes() {
			return GE(e.propSchema);
		},
		parseHTML() {
			return XE(e, t);
		},
		renderHTML({ HTMLAttributes: n }) {
			let r = document.createElement("div");
			return qE({
				dom: r,
				contentDOM: e.content === "inline" ? r : void 0
			}, e.type, {}, e.propSchema, t.meta?.fileBlockAccept !== void 0, n);
		},
		addNodeView() {
			return (n) => {
				let r = this.options.editor, i = KE(n.getPos, r, this.editor, e.type), a = this.options.domAttributes?.blockContent || {}, o = t.render.call({
					blockContentDOMAttributes: a,
					props: n,
					renderType: "nodeView"
				}, i, r);
				return t.meta?.selectable === !1 && YE(o, this.editor), o;
			};
		}
	});
	if (i.name !== e.type) throw Error("Node name does not match block type. This is a bug in BlockNote.");
	return {
		config: e,
		implementation: {
			...t,
			node: i,
			render(e, n) {
				let r = i.options.domAttributes?.blockContent || {};
				return t.render.call({
					blockContentDOMAttributes: r,
					props: void 0,
					renderType: "dom"
				}, e, n);
			},
			toExternalHTML: (e, n, r) => {
				let a = i.options.domAttributes?.blockContent || {};
				return t.toExternalHTML?.call({ blockContentDOMAttributes: a }, e, n, r) ?? t.render.call({
					blockContentDOMAttributes: a,
					renderType: "dom",
					props: void 0
				}, e, n);
			}
		},
		extensions: n
	};
}
function QE(e) {
	return e;
}
function $E(e, t, n) {
	return (r = {}) => {
		let i = typeof e == "function" ? e(r) : e, a = typeof t == "function" ? t(r) : t, o = n ? typeof n == "function" ? n(r) : n : void 0;
		return {
			config: i,
			implementation: {
				...a,
				toExternalHTML(e, t, n) {
					let r = a.toExternalHTML?.call({ blockContentDOMAttributes: this.blockContentDOMAttributes }, e, t, n);
					if (r !== void 0) return qE(r, e.type, e.props, i.propSchema, a.meta?.fileBlockAccept !== void 0);
				},
				render(e, t) {
					return qE(a.render.call({
						blockContentDOMAttributes: this.blockContentDOMAttributes,
						renderType: this.renderType,
						props: this.props
					}, e, t), e.type, e.props, i.propSchema, a.meta?.fileBlockAccept !== void 0, this.blockContentDOMAttributes);
				}
			},
			extensions: o
		};
	};
}
function eD(e, t) {
	let n = e.resolve(t);
	if (n.nodeAfter && n.nodeAfter.type.isInGroup("bnBlock")) return {
		posBeforeNode: n.pos,
		node: n.nodeAfter
	};
	let r = n.depth, i = n.node(r);
	for (; r > 0;) {
		if (i.type.isInGroup("bnBlock")) return {
			posBeforeNode: n.before(r),
			node: i
		};
		r--, i = n.node(r);
	}
	let a = [];
	e.descendants((e, t) => {
		e.type.isInGroup("bnBlock") && a.push(t);
	}), console.warn(`Position ${t} is not within a blockContainer node.`);
	let o = e.resolve(a.find((e) => e >= t) || a[a.length - 1]);
	return {
		posBeforeNode: o.pos,
		node: o.nodeAfter
	};
}
function tD(e, t) {
	if (!e.type.isInGroup("bnBlock")) throw Error(`Attempted to get bnBlock node at position but found node of different type ${e.type.name}`);
	let n = e, r = t, i = {
		node: n,
		beforePos: r,
		afterPos: r + n.nodeSize
	};
	if (n.type.name === "blockContainer") {
		let e, t;
		if (n.forEach((n, i) => {
			if (n.type.spec.group === "blockContent") {
				let t = n, a = r + i + 1;
				e = {
					node: t,
					beforePos: a,
					afterPos: a + n.nodeSize
				};
			} else if (n.type.name === "blockGroup") {
				let e = n, a = r + i + 1;
				t = {
					node: e,
					beforePos: a,
					afterPos: a + n.nodeSize
				};
			}
		}), !e) throw Error(`blockContainer node does not contain a blockContent node in its children: ${n}`);
		return {
			isBlockContainer: !0,
			bnBlock: i,
			blockContent: e,
			childContainer: t,
			blockNoteType: e.node.type.name
		};
	} else {
		if (!i.node.type.isInGroup("childContainer")) throw Error(`bnBlock node is not in the childContainer group: ${i.node}`);
		return {
			isBlockContainer: !1,
			bnBlock: i,
			childContainer: i,
			blockNoteType: i.node.type.name
		};
	}
}
function nD(e) {
	return tD(e.node, e.posBeforeNode);
}
function rD(e) {
	if (!e.nodeAfter) throw Error(`Attempted to get blockContainer node at position ${e.pos} but a node at this position does not exist`);
	return tD(e.nodeAfter, e.pos);
}
function iD(e) {
	return nD(eD(e.doc, e.selection.anchor));
}
function aD(e) {
	return nD(eD(e.doc, e.selection.anchor));
}
function oD(e) {
	return "doc" in e ? e.doc.type.schema : e.type.schema;
}
function sD(e) {
	return e.cached.blockNoteEditor;
}
function cD(e) {
	return sD(e).schema;
}
function lD(e) {
	return cD(e).blockSchema;
}
function uD(e) {
	return cD(e).inlineContentSchema;
}
function dD(e) {
	return cD(e).styleSchema;
}
function fD(e) {
	return sD(e).blockCache;
}
function pD(e, t, n) {
	let r = {
		type: "tableContent",
		columnWidths: [],
		headerRows: void 0,
		headerCols: void 0,
		rows: []
	}, i = [];
	e.content.forEach((e, a, o) => {
		let s = { cells: [] };
		o === 0 && e.content.forEach((e) => {
			let t = e.attrs.colwidth;
			t ??= Array(e.attrs.colspan ?? 1).fill(void 0), r.columnWidths.push(...t);
		}), s.cells = e.content.content.map((e, r) => (i[o] || (i[o] = []), i[o][r] = e.type.name === "tableHeader", {
			type: "tableCell",
			content: e.content.content.map((e) => mD(e, t, n)).reduce((e, t) => {
				if (!e.length) return t;
				let n = e[e.length - 1], r = t[0];
				return r && kE(n) && kE(r) && JSON.stringify(n.styles) === JSON.stringify(r.styles) ? (n.text += "\n" + r.text, e.push(...t.slice(1)), e) : (e.push(...t), e);
			}, []),
			props: {
				colspan: e.attrs.colspan,
				rowspan: e.attrs.rowspan,
				backgroundColor: e.attrs.backgroundColor,
				textColor: e.attrs.textColor,
				textAlignment: e.attrs.textAlignment
			}
		})), r.rows.push(s);
	});
	for (let e = 0; e < i.length; e++) i[e]?.every((e) => e) && (r.headerRows = (r.headerRows ?? 0) + 1);
	for (let e = 0; e < i[0]?.length; e++) i?.every((t) => t[e]) && (r.headerCols = (r.headerCols ?? 0) + 1);
	return r;
}
function mD(e, t, n) {
	let r = [], i;
	return e.content.forEach((e) => {
		if (e.type.name === "hardBreak") {
			if (i) if (kE(i)) i.text += "\n";
			else if (DE(i)) i.content[i.content.length - 1].text += "\n";
			else throw Error("unexpected");
			else i = {
				type: "text",
				text: "\n",
				styles: {}
			};
			return;
		}
		if (e.type.name !== "link" && e.type.name !== "text") {
			if (!t[e.type.name]) {
				console.warn("unrecognized inline content type", e.type.name);
				return;
			}
			i &&= (r.push(i), void 0), r.push(hD(e, t, n));
			return;
		}
		let a = {}, o;
		for (let t of e.marks) if (t.type.name === "link") o = t;
		else {
			let e = n[t.type.name];
			if (!e) {
				if (t.type.spec.blocknoteIgnore) continue;
				throw Error(`style ${t.type.name} not found in styleSchema`);
			}
			if (e.propSchema === "boolean") a[e.type] = !0;
			else if (e.propSchema === "string") a[e.type] = t.attrs.stringValue;
			else throw new FE(e.propSchema);
		}
		i ? kE(i) ? o ? (r.push(i), i = {
			type: "link",
			href: o.attrs.href,
			content: [{
				type: "text",
				text: e.textContent,
				styles: a
			}]
		}) : JSON.stringify(i.styles) === JSON.stringify(a) ? i.text += e.textContent : (r.push(i), i = {
			type: "text",
			text: e.textContent,
			styles: a
		}) : DE(i) && (o ? i.href === o.attrs.href ? JSON.stringify(i.content[i.content.length - 1].styles) === JSON.stringify(a) ? i.content[i.content.length - 1].text += e.textContent : i.content.push({
			type: "text",
			text: e.textContent,
			styles: a
		}) : (r.push(i), i = {
			type: "link",
			href: o.attrs.href,
			content: [{
				type: "text",
				text: e.textContent,
				styles: a
			}]
		}) : (r.push(i), i = {
			type: "text",
			text: e.textContent,
			styles: a
		})) : i = o ? {
			type: "link",
			href: o.attrs.href,
			content: [{
				type: "text",
				text: e.textContent,
				styles: a
			}]
		} : {
			type: "text",
			text: e.textContent,
			styles: a
		};
	}), i && r.push(i), r;
}
function hD(e, t, n) {
	if (e.type.name === "text" || e.type.name === "link") throw Error("unexpected");
	let r = {}, i = t[e.type.name];
	for (let [t, n] of Object.entries(e.attrs)) {
		if (!i) throw Error("ic node is of an unrecognized type: " + e.type.name);
		t in i.propSchema && (r[t] = n);
	}
	let a;
	return a = i.content === "styled" ? mD(e, t, n) : void 0, {
		type: e.type.name,
		props: r,
		content: a
	};
}
function gD(e, t, n = lD(t), r = uD(t), i = dD(t), a = fD(t)) {
	if (!e.type.isInGroup("bnBlock")) throw Error("Node should be a bnBlock, but is instead: " + e.type.name);
	let o = a?.get(e);
	if (o) return o;
	let s = tD(e, 0), c = s.bnBlock.node.attrs.id;
	c === null && (c = EE.options.generateID());
	let l = n[s.blockNoteType];
	if (!l) throw Error("Block is of an unrecognized type: " + s.blockNoteType);
	let u = {};
	for (let [t, n] of Object.entries({
		...e.attrs,
		...s.isBlockContainer ? s.blockContent.node.attrs : {}
	})) {
		let e = l.propSchema;
		t in e && !(e[t].default === void 0 && n === void 0) && (u[t] = n);
	}
	let d = n[s.blockNoteType], f = [];
	s.childContainer?.node.forEach((e) => {
		f.push(gD(e, t, n, r, i, a));
	});
	let p;
	if (d.content === "inline") {
		if (!s.isBlockContainer) throw Error("impossible");
		p = mD(s.blockContent.node, r, i);
	} else if (d.content === "table") {
		if (!s.isBlockContainer) throw Error("impossible");
		p = pD(s.blockContent.node, r, i);
	} else if (d.content === "none") p = void 0;
	else throw new FE(d.content);
	let m = {
		id: c,
		type: d.type,
		props: u,
		content: p,
		children: f
	};
	return a?.set(e, m), m;
}
function _D(e, t = oD(e), n = lD(t), r = uD(t), i = dD(t), a = fD(t)) {
	let o = [];
	return e.firstChild && e.firstChild.descendants((e) => (o.push(gD(e, t, n, r, i, a)), !1)), o;
}
function vD(e, t, n = lD(t), r = uD(t), i = dD(t), a = fD(t)) {
	function o(e, s, c) {
		if (e.type.name !== "blockGroup") throw Error("unexpected");
		let l = [], u, d;
		return e.forEach((f, p, m) => {
			if (f.type.name !== "blockContainer") throw Error("unexpected");
			if (f.childCount === 0) return;
			if (f.childCount === 0 || f.childCount > 2) throw Error("unexpected, blockContainer.childCount: " + f.childCount);
			let h = m === 0, g = m === e.childCount - 1;
			if (f.firstChild.type.name === "blockGroup") {
				if (!h) throw Error("unexpected");
				let e = o(f.firstChild, Math.max(0, s - 1), g ? Math.max(0, c - 1) : 0);
				u = e.blockCutAtStart, g && (d = e.blockCutAtEnd), l.push(...e.blocks);
				return;
			}
			let _ = gD(f, t, n, r, i, a), v = f.childCount > 1 ? f.child(1) : void 0, y = [];
			if (v) {
				let e = o(v, 0, g ? Math.max(0, c - 1) : 0);
				y = e.blocks, g && (d = e.blockCutAtEnd);
			}
			g && !v && c > 1 && (d = _.id), h && s > 1 && (u = _.id), l.push({
				..._,
				children: y
			});
		}), {
			blocks: l,
			blockCutAtStart: u,
			blockCutAtEnd: d
		};
	}
	if (e.content.childCount === 0) return {
		blocks: [],
		blockCutAtStart: void 0,
		blockCutAtEnd: void 0
	};
	if (e.content.childCount !== 1) throw Error("slice must be a single block, did you forget includeParents=true?");
	return o(e.content.firstChild, Math.max(e.openStart - 1, 0), Math.max(e.openEnd - 1, 0));
}
function yD(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t.config]));
}
function bD(e) {
	return e === "boolean" ? {} : { stringValue: {
		default: void 0,
		keepOnSplit: !0,
		parseHTML: (e) => e.getAttribute("data-value"),
		renderHTML: (e) => e.stringValue === void 0 ? {} : { "data-value": e.stringValue }
	} };
}
function xD(e, t, n, r) {
	return e.dom.setAttribute("data-style-type", t), r === "string" && e.dom.setAttribute("data-value", n), e.contentDOM && e.contentDOM.setAttribute("data-editable", ""), e;
}
function SD(e, t) {
	return {
		config: e,
		implementation: t
	};
}
function CD(e, t) {
	return SD({
		type: e.name,
		propSchema: t
	}, {
		mark: e,
		render(t, n) {
			let r = n.pmSchema.marks[e.name].spec.toDOM;
			if (r === void 0) throw Error("This block has no default HTML serialization as its corresponding TipTap node doesn't implement `renderHTML`.");
			let i = n.pmSchema.mark(e.name, { stringValue: t }), a = li.renderSpec(document, r(i, !0));
			if (typeof a != "object" || !("dom" in a)) throw Error("Cannot use this block's default HTML serialization as its corresponding TipTap mark's `renderHTML` function does not return an object with the `dom` property.");
			return a;
		},
		toExternalHTML(t, n) {
			let r = n.pmSchema.marks[e.name].spec.toDOM;
			if (r === void 0) throw Error("This block has no default HTML serialization as its corresponding TipTap node doesn't implement `renderHTML`.");
			let i = n.pmSchema.mark(e.name, { stringValue: t }), a = li.renderSpec(document, r(i, !0));
			if (typeof a != "object" || !("dom" in a)) throw Error("Cannot use this block's default HTML serialization as its corresponding TipTap mark's `renderHTML` function does not return an object with the `dom` property.");
			return a;
		}
	});
}
function wD(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t.config]));
}
function TD(e, t) {
	let n = [{
		tag: `[data-style-type="${e.type}"]`,
		contentElement: (e) => {
			let t = e;
			return t.matches("[data-editable]") ? t : t.querySelector("[data-editable]") || t;
		}
	}];
	return t && n.push({
		tag: "*",
		consuming: !1,
		getAttrs(e) {
			if (typeof e == "string") return !1;
			let n = t?.(e);
			return n === void 0 ? !1 : { stringValue: n };
		}
	}), n;
}
function ED(e, t) {
	let n = Nm.create({
		name: e.type,
		addAttributes() {
			return bD(e.propSchema);
		},
		parseHTML() {
			return TD(e, t.parse);
		},
		renderHTML({ mark: n }) {
			return xD((t.toExternalHTML || t.render)(n.attrs.stringValue), e.type, n.attrs.stringValue, e.propSchema);
		},
		addMarkView() {
			return ({ mark: n }) => xD(t.render(n.attrs.stringValue), e.type, n.attrs.stringValue, e.propSchema);
		}
	});
	return SD(e, {
		...t,
		mark: n,
		render: (n) => xD(t.render(n), e.type, n, e.propSchema),
		toExternalHTML: (n) => xD((t.toExternalHTML || t.render)(n), e.type, n, e.propSchema)
	});
}
function DD(e) {
	let t = kD(e), { roots: n, nonRoots: r } = AD(t), i = [];
	for (; n.size;) {
		i.push(n);
		let r = /* @__PURE__ */ new Set();
		for (let i of n) {
			let n = e.get(i);
			if (n) for (let e of n) {
				let n = t.get(e);
				if (n === void 0) continue;
				let i = n - 1;
				t.set(e, i), i === 0 && r.add(e);
			}
		}
		n = r;
	}
	if (r = AD(t).nonRoots, r.size) throw Error(`Cycle(s) detected; toposort only works on acyclic graphs. Cyclic nodes: ${Array.from(r).join(", ")}`);
	return i;
}
function OD(e) {
	return DD(jD(e));
}
function kD(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e.entries()) {
		t.has(n) || t.set(n, 0);
		for (let e of r) {
			let n = t.get(e) ?? 0;
			t.set(e, n + 1);
		}
	}
	return t;
}
function AD(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let [r, i] of e.entries()) i === 0 ? t.add(r) : n.add(r);
	return {
		roots: t,
		nonRoots: n
	};
}
function jD(e) {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e.entries()) {
		t.has(n) || t.set(n, /* @__PURE__ */ new Set());
		for (let e of r) t.has(e) || t.set(e, /* @__PURE__ */ new Set()), t.get(e).add(n);
	}
	return t;
}
function MD() {
	return /* @__PURE__ */ new Map();
}
function ND(e, t, n) {
	return e.has(t) || e.set(t, /* @__PURE__ */ new Set()), e.get(t).add(n), e;
}
function PD(e) {
	let t = MD();
	for (let n of e) Array.isArray(n.runsBefore) && n.runsBefore.length > 0 ? n.runsBefore.forEach((e) => {
		ND(t, n.key, e);
	}) : ND(t, "default", n.key);
	let n = OD(t), r = n.findIndex((e) => e.has("default"));
	return (e) => 91 + (n.findIndex((t) => t.has(e)) + r) * 10;
}
function FD(e) {
	return e && Object.fromEntries(Object.entries(e).filter(([, e]) => e !== void 0));
}
var ID = class {
	BlockNoteEditor = "only for types";
	Block = "only for types";
	PartialBlock = "only for types";
	inlineContentSpecs;
	styleSpecs;
	blockSpecs;
	blockSchema;
	inlineContentSchema;
	styleSchema;
	constructor(e) {
		this.opts = e;
		let { blockSpecs: t, inlineContentSpecs: n, styleSpecs: r, blockSchema: i, inlineContentSchema: a, styleSchema: o } = this.init();
		this.blockSpecs = t, this.styleSpecs = r, this.styleSchema = o, this.inlineContentSpecs = n, this.blockSchema = i, this.inlineContentSchema = a;
	}
	init() {
		let e = PD(Object.entries({
			...this.opts.blockSpecs,
			...this.opts.inlineContentSpecs,
			...this.opts.styleSpecs
		}).map(([e, t]) => ({
			key: e,
			runsBefore: t.implementation?.runsBefore ?? []
		}))), t = Object.fromEntries(Object.entries(this.opts.blockSpecs).map(([t, n]) => [t, ZE(n.config, n.implementation, n.extensions, e(t))])), n = Object.fromEntries(Object.entries(this.opts.inlineContentSpecs).map(([t, n]) => typeof n.config == "object" ? [t, {
			...n,
			implementation: {
				...n.implementation,
				node: n.implementation?.node.extend({ priority: e(t) })
			}
		}] : [t, n])), r = Object.fromEntries(Object.entries(this.opts.styleSpecs).map(([t, n]) => [t, {
			...n,
			implementation: {
				...n.implementation,
				mark: n.implementation?.mark.extend({ priority: e(t) })
			}
		}]));
		return {
			blockSpecs: t,
			blockSchema: Object.fromEntries(Object.entries(t).map(([e, t]) => [e, t.config])),
			inlineContentSpecs: FD(n),
			styleSpecs: FD(r),
			inlineContentSchema: yD(n),
			styleSchema: wD(r)
		};
	}
	extend(e) {
		Object.assign(this.opts.blockSpecs, e.blockSpecs), Object.assign(this.opts.inlineContentSpecs, e.inlineContentSpecs), Object.assign(this.opts.styleSpecs, e.styleSpecs);
		let { blockSpecs: t, inlineContentSpecs: n, styleSpecs: r, blockSchema: i, inlineContentSchema: a, styleSchema: o } = this.init();
		return this.blockSpecs = t, this.styleSpecs = r, this.styleSchema = o, this.inlineContentSpecs = n, this.blockSchema = i, this.inlineContentSchema = a, this;
	}
};
function LD(e) {
	let { height: t, width: n } = BD(e), r = Array(t).fill(!1).map(() => Array(n).fill(null)), i = (e, i) => {
		for (let a = e; a < t; a++) for (let e = i; e < n; e++) if (!r[a][e]) return {
			row: a,
			col: e
		};
		throw Error("Unable to create occupancy grid for table, no more available cells");
	};
	for (let t = 0; t < e.content.rows.length; t++) for (let n = 0; n < e.content.rows[t].cells.length; n++) {
		let a = AE(e.content.rows[t].cells[n]), o = PE(a), s = NE(a), { row: c, col: l } = i(t, n);
		for (let e = c; e < c + o; e++) for (let i = l; i < l + s; i++) {
			if (r[e][i]) throw Error(`Unable to create occupancy grid for table, cell at ${e},${i} is already occupied`);
			r[e][i] = {
				row: t,
				col: n,
				rowspan: o,
				colspan: s,
				cell: a
			};
		}
	}
	return r;
}
function RD(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => ({ cells: e.map((e) => t.has(e.row + ":" + e.col) ? !1 : (t.add(e.row + ":" + e.col), e.cell)).filter((e) => e !== !1) }));
}
function zD(e, t, n = LD(t)) {
	for (let t = 0; t < n.length; t++) for (let r = 0; r < n[t].length; r++) {
		let i = n[t][r];
		if (i && i.row === e.row && i.col === e.col) return {
			row: t,
			col: r,
			cell: i.cell
		};
	}
	throw Error(`Unable to resolve relative table cell indices for table, cell at ${e.row},${e.col} is not occupied`);
}
function BD(e) {
	let t = e.content.rows.length, n = 0;
	return e.content.rows.forEach((e) => {
		let t = 0;
		e.cells.forEach((e) => {
			t += NE(e);
		}), n = Math.max(n, t);
	}), {
		height: t,
		width: n
	};
}
function VD(e, t, n = LD(t)) {
	let r = n[e.row]?.[e.col];
	if (r) return {
		row: r.row,
		col: r.col,
		cell: r.cell
	};
}
function HD(e, t) {
	let n = LD(e);
	if (t < 0 || t >= n.length) return [];
	let r = 0;
	for (let e = 0; e < t; e++) {
		let e = n[r]?.[0];
		if (!e) return [];
		r += e.rowspan;
	}
	let i = Array(n[0].length).fill(!1).map((t, i) => VD({
		row: r,
		col: i
	}, e, n)).filter((e) => e !== void 0);
	return i.filter((e, t) => i.findIndex((t) => t.row === e.row && t.col === e.col) === t);
}
function UD(e, t) {
	let n = LD(e);
	if (t < 0 || t >= n[0].length) return [];
	let r = 0;
	for (let e = 0; e < t; e++) {
		let e = n[0]?.[r];
		if (!e) return [];
		r += e.colspan;
	}
	let i = Array(n.length).fill(!1).map((t, i) => VD({
		row: i,
		col: r
	}, e, n)).filter((e) => e !== void 0);
	return i.filter((e, t) => i.findIndex((t) => t.row === e.row && t.col === e.col) === t);
}
function WD(e, t, n, r = LD(e)) {
	let { col: i } = zD({
		row: 0,
		col: t
	}, e, r), { col: a } = zD({
		row: 0,
		col: n
	}, e, r);
	return r.forEach((e) => {
		let [t] = e.splice(i, 1);
		e.splice(a, 0, t);
	}), RD(r);
}
function GD(e, t, n, r = LD(e)) {
	let { row: i } = zD({
		row: t,
		col: 0
	}, e, r), { row: a } = zD({
		row: n,
		col: 0
	}, e, r), [o] = r.splice(i, 1);
	return r.splice(a, 0, o), RD(r);
}
function KD(e) {
	return e ? jE(e) ? KD(e.content) : typeof e == "string" ? e.length === 0 : Array.isArray(e) ? e.every((e) => typeof e == "string" ? e.length === 0 : kE(e) ? e.text.length === 0 : OE(e) ? typeof e.content == "string" ? e.content.length === 0 : e.content.every((e) => e.text.length === 0) : !1) : !1 : !0;
}
function qD(e, t, n = LD(e)) {
	if (t === "columns") {
		let e = 0;
		for (let t = n[0].length - 1; t >= 0 && n.every((e) => KD(e[t].cell) && e[t].colspan === 1); t--) e++;
		for (let t = n.length - 1; t >= 0; t--) {
			let r = Math.max(n[t].length - e, 1);
			n[t] = n[t].slice(0, r);
		}
		return RD(n);
	}
	let r = 0;
	for (let e = n.length - 1; e >= 0 && n[e].every((e) => KD(e.cell) && e.rowspan === 1); e--) r++;
	let i = Math.min(r, n.length - 1);
	return n.splice(n.length - i, i), RD(n);
}
function JD(e, t, n, r = LD(e)) {
	let { width: i, height: a } = BD(e);
	if (t === "columns") r.forEach((e, t) => {
		if (n >= 0) for (let r = 0; r < n; r++) e.push({
			row: t,
			col: Math.max(...e.map((e) => e.col)) + 1,
			rowspan: 1,
			colspan: 1,
			cell: AE("")
		});
		else e.splice(i + n, -1 * n);
	});
	else if (n > 0) for (let e = 0; e < n; e++) {
		let t = Array(i).fill(null).map((t, n) => ({
			row: a + e,
			col: n,
			rowspan: 1,
			colspan: 1,
			cell: AE("")
		}));
		r.push(t);
	}
	else n < 0 && r.splice(a + n, -1 * n);
	return RD(r);
}
function YD(e, t, n) {
	let r = HD(e, n);
	if (!r.some((e) => PE(e.cell) > 1)) return !0;
	let i = n, a = n;
	return r.forEach((e) => {
		let t = PE(e.cell);
		i = Math.max(i, e.row + t - 1), a = Math.min(a, e.row);
	}), t < n ? n === i : n === a;
}
function XD(e, t, n) {
	let r = UD(e, n);
	if (!r.some((e) => NE(e.cell) > 1)) return !0;
	let i = n, a = n;
	return r.forEach((e) => {
		let t = NE(e.cell);
		i = Math.max(i, e.col + t - 1), a = Math.min(a, e.col);
	}), t < n ? n === i : n === a;
}
function ZD(e, t, n) {
	let r = zD(e, n), i = zD(t, n);
	return r.col === i.col;
}
function QD(e, t, n, r) {
	let i = [];
	for (let [r, a] of Object.entries(e.styles || {})) {
		let e = n[r];
		if (!e) throw Error(`style ${r} not found in styleSchema`);
		if (e.propSchema === "boolean") a && i.push(t.mark(r));
		else if (e.propSchema === "string") a && i.push(t.mark(r, { stringValue: a }));
		else throw new FE(e.propSchema);
	}
	return !r || !t.nodes[r].spec.code ? e.text.split(/(\n)/g).filter((e) => e.length > 0).map((e) => e === "\n" ? t.nodes.hardBreak.createChecked() : t.text(e, i)) : e.text.length > 0 ? [t.text(e.text, i)] : [];
}
function $D(e, t, n) {
	let r = t.marks.link.create({ href: e.href });
	return eO(e.content, t, n).map((e) => {
		if (e.type.name === "text") return e.mark([...e.marks, r]);
		if (e.type.name === "hardBreak") return e;
		throw Error("unexpected node type");
	});
}
function eO(e, t, n, r) {
	let i = [];
	if (typeof e == "string") return i.push(...QD({
		type: "text",
		text: e,
		styles: {}
	}, t, n, r)), i;
	for (let a of e) i.push(...QD(a, t, n, r));
	return i;
}
function tO(e, t, n, r = dD(t)) {
	let i = [];
	for (let a of e) typeof a == "string" ? i.push(...eO(a, t, r, n)) : OE(a) ? i.push(...$D(a, t, r)) : kE(a) ? i.push(...eO([a], t, r, n)) : i.push(rO(a, t, r));
	return i;
}
function nO(e, t, n = dD(t)) {
	let r = [], i = Array(e.headerRows ?? 0).fill(!0), a = Array(e.headerCols ?? 0).fill(!0), o = e.columnWidths ?? [];
	for (let s = 0; s < e.rows.length; s++) {
		let c = e.rows[s], l = [], u = i[s];
		for (let r = 0; r < c.cells.length; r++) {
			let i = c.cells[r], d = a[r], f = null, p = zD({
				row: s,
				col: r
			}, {
				type: "table",
				content: e
			}), m = o[p.col] ? [o[p.col]] : null;
			if (i) if (typeof i == "string") f = t.text(i);
			else if (jE(i)) {
				i.content && (f = tO(i.content, t, "tableParagraph", n));
				let e = NE(i);
				e > 1 && (m = Array(e).fill(!1).map((e, t) => o[p.col + t] ?? void 0));
			} else f = tO(i, t, "tableParagraph", n);
			let h = t.nodes[d || u ? "tableHeader" : "tableCell"].createChecked({
				...jE(i) ? i.props : {},
				colwidth: m
			}, t.nodes.tableParagraph.createChecked(void 0, f));
			l.push(h);
		}
		let d = t.nodes.tableRow.createChecked({}, l);
		r.push(d);
	}
	return r;
}
function rO(e, t, n) {
	let r, i = e.type;
	if (i === void 0 && (i = "paragraph"), !t.nodes[i]) throw Error(`node type ${i} not found in schema`);
	if (!e.content) r = t.nodes[i].createChecked(e.props);
	else if (typeof e.content == "string") {
		let a = tO([e.content], t, i, n);
		r = t.nodes[i].createChecked(e.props, a);
	} else if (Array.isArray(e.content)) {
		let a = tO(e.content, t, i, n);
		r = t.nodes[i].createChecked(e.props, a);
	} else if (e.content.type === "tableContent") {
		let a = nO(e.content, t, n);
		r = t.nodes[i].createChecked(e.props, a);
	} else throw new FE(e.content.type);
	return r;
}
function iO(e, t, n = dD(t)) {
	let r = e.id;
	r === void 0 && (r = EE.options.generateID());
	let i = [];
	if (e.children) for (let r of e.children) i.push(iO(r, t, n));
	if (!e.type || t.nodes[e.type].isInGroup("blockContent")) {
		let a = rO(e, t, n), o = i.length > 0 ? t.nodes.blockGroup.createChecked({}, i) : void 0;
		return t.nodes.blockContainer.createChecked({
			id: r,
			...e.props
		}, o ? [a, o] : a);
	} else if (t.nodes[e.type].isInGroup("bnBlock")) return t.nodes[e.type].create({
		id: r,
		...e.props
	}, i);
	else throw Error(`block type ${e.type} doesn't match blockContent or bnBlock group`);
}
function aO(e, t) {
	let n, r;
	if (t.firstChild.descendants((t, i) => n ? !1 : !oO(t) || t.attrs.id !== e ? !0 : (n = t, r = i + 1, !1)), !(n === void 0 || r === void 0)) return {
		node: n,
		posBeforeNode: r
	};
}
function oO(e) {
	return e.type.isInGroup("bnBlock");
}
var sO = (e, t) => ({ tr: n, dispatch: r }) => (r && cO(n, e, t), !0);
function cO(e, t, n, r, i) {
	let a = rD(e.doc.resolve(t)), o = null;
	a.blockNoteType === "table" && (o = fO(e));
	let s = oD(e);
	if (r !== void 0 && i !== void 0 && r > i) throw Error("Invalid replaceFromPos or replaceToPos");
	let c = s.nodes[a.blockNoteType], l = s.nodes[n.type || a.blockNoteType], u = l.isInGroup("bnBlock") ? l : s.nodes.blockContainer;
	if (a.isBlockContainer && l.isInGroup("blockContent")) {
		let t = r !== void 0 && r > a.blockContent.beforePos && r < a.blockContent.afterPos ? r - a.blockContent.beforePos - 1 : void 0, o = i !== void 0 && i > a.blockContent.beforePos && i < a.blockContent.afterPos ? i - a.blockContent.beforePos - 1 : void 0;
		uO(n, e, a), lO(n, e, c, l, a, t, o);
	} else if (!a.isBlockContainer && l.isInGroup("bnBlock")) uO(n, e, a);
	else {
		let t = iO({
			children: gD(a.bnBlock.node, s).children,
			...n
		}, s);
		t.check(), e.replaceWith(a.bnBlock.beforePos, a.bnBlock.afterPos, t);
		return;
	}
	e.setNodeMarkup(a.bnBlock.beforePos, u, {
		...a.bnBlock.node.attrs,
		...n.props
	}), o && pO(e, a, o);
}
function lO(e, t, n, r, i, a, o) {
	let s = oD(t), c = "keep";
	if (e.content) if (typeof e.content == "string") c = tO([e.content], s, r.name);
	else if (Array.isArray(e.content)) c = tO(e.content, s, r.name);
	else if (e.content.type === "tableContent") c = nO(e.content, s);
	else throw new FE(e.content.type);
	else n.spec.content === "" || r.spec.content !== n.spec.content && (c = []);
	if (c === "keep") t.setNodeMarkup(i.blockContent.beforePos, r, {
		...i.blockContent.node.attrs,
		...e.props
	});
	else if (a !== void 0 || o !== void 0) {
		t.setNodeMarkup(i.blockContent.beforePos, r, {
			...i.blockContent.node.attrs,
			...e.props
		});
		let n = i.blockContent.beforePos + 1 + (a ?? 0), s = i.blockContent.beforePos + 1 + (o ?? i.blockContent.node.content.size), l = t.doc.resolve(i.blockContent.beforePos).depth, u = t.doc.resolve(n).depth, d = t.doc.resolve(s).depth;
		t.replace(n, s, new P(M.from(c), u - l - 1, d - l - 1));
	} else t.replaceWith(i.blockContent.beforePos, i.blockContent.afterPos, r.createChecked({
		...i.blockContent.node.attrs,
		...e.props
	}, c));
}
function uO(e, t, n) {
	let r = oD(t);
	if (e.children !== void 0 && e.children.length > 0) {
		let i = e.children.map((e) => {
			let t = iO(e, r);
			return t.check(), t;
		});
		if (n.childContainer) t.step(new Ii(n.childContainer.beforePos + 1, n.childContainer.afterPos - 1, new P(M.from(i), 0, 0)));
		else {
			if (!n.isBlockContainer) throw Error("impossible");
			t.insert(n.blockContent.afterPos, r.nodes.blockGroup.createChecked({}, i));
		}
	}
}
function dO(e, t, n, r, i) {
	let a = typeof t == "string" ? t : t.id, o = aO(a, e.doc);
	if (!o) throw Error(`Block with ID ${a} not found`);
	return cO(e, o.posBeforeNode, n, r, i), gD(e.doc.resolve(o.posBeforeNode + 1).node(), oD(e));
}
function fO(e) {
	let t = "selection" in e ? e.selection : null;
	if (!(t instanceof I)) return null;
	let n = e.doc.resolve(t.head), r = -1, i = -1;
	for (let e = n.depth; e >= 0; e--) {
		let t = n.node(e).type.name;
		if (r < 0 && (t === "tableCell" || t === "tableHeader") && (r = e), t === "table") {
			i = e;
			break;
		}
	}
	if (r < 0 || i < 0) return null;
	let a = n.before(r), o = n.before(i), s = e.doc.nodeAt(o);
	if (!s || s.type.name !== "table") return null;
	let c = G.get(s), l = a - (o + 1), u = c.map.indexOf(l);
	if (u < 0) return null;
	let d = Math.floor(u / c.width), f = u % c.width, p = a + 1 + 1;
	return {
		row: d,
		col: f,
		offset: Math.max(0, t.head - p)
	};
}
function pO(e, t, n) {
	if (t.blockNoteType !== "table") return !1;
	let r = -1;
	if (t.isBlockContainer) r = e.mapping.map(t.blockContent.beforePos);
	else {
		let n = e.mapping.map(t.bnBlock.beforePos), i = n + (e.doc.nodeAt(n)?.nodeSize || 0);
		e.doc.nodesBetween(n, i, (e, t) => e.type.name === "table" ? (r = t, !1) : !0);
	}
	let i = r >= 0 ? e.doc.nodeAt(r) : null;
	if (!i || i.type.name !== "table") return !1;
	let a = G.get(i), o = Math.max(0, Math.min(n.row, a.height - 1)), s = Math.max(0, Math.min(n.col, a.width - 1)), c = o * a.width + s, l = a.map[c];
	if (l == null) return !1;
	let u = r + 1 + l + 1, d = e.doc.nodeAt(u), f = u + 1, p = d ? d.content.size : 0, m = f + Math.max(0, Math.min(n.offset, p));
	return "selection" in e && e.setSelection(I.create(e.doc, m)), !0;
}
var mO = {
	gray: {
		text: "#9b9a97",
		background: "#ebeced"
	},
	brown: {
		text: "#64473a",
		background: "#e9e5e3"
	},
	red: {
		text: "#e03e3e",
		background: "#fbe4e4"
	},
	orange: {
		text: "#d9730d",
		background: "#f6e9d9"
	},
	yellow: {
		text: "#dfab01",
		background: "#fbf3db"
	},
	green: {
		text: "#4d6461",
		background: "#ddedea"
	},
	blue: {
		text: "#0b6e99",
		background: "#ddebf1"
	},
	purple: {
		text: "#6940a5",
		background: "#eae4f2"
	},
	pink: {
		text: "#ad1a72",
		background: "#f4dfeb"
	}
}, $ = {
	backgroundColor: { default: "default" },
	textColor: { default: "default" },
	textAlignment: {
		default: "left",
		values: [
			"left",
			"center",
			"right",
			"justify"
		]
	}
}, hO = (e) => {
	let t = {};
	return e.hasAttribute("data-background-color") ? t.backgroundColor = e.getAttribute("data-background-color") : e.style.backgroundColor && (t.backgroundColor = e.style.backgroundColor), e.hasAttribute("data-text-color") ? t.textColor = e.getAttribute("data-text-color") : e.style.color && (t.textColor = e.style.color), t.textAlignment = $.textAlignment.values.includes(e.style.textAlign) ? e.style.textAlign : void 0, t;
}, gO = (e, t) => {
	e.backgroundColor && e.backgroundColor !== $.backgroundColor.default && (t.style.backgroundColor = e.backgroundColor in mO ? mO[e.backgroundColor].background : e.backgroundColor), e.textColor && e.textColor !== $.textColor.default && (t.style.color = e.textColor in mO ? mO[e.textColor].text : e.textColor), e.textAlignment && e.textAlignment !== $.textAlignment.default && (t.style.textAlign = e.textAlignment);
}, _O = (e = "backgroundColor") => ({
	default: $.backgroundColor.default,
	parseHTML: (e) => e.hasAttribute("data-background-color") ? e.getAttribute("data-background-color") : e.style.backgroundColor ? e.style.backgroundColor : $.backgroundColor.default,
	renderHTML: (t) => t[e] === $.backgroundColor.default ? {} : { "data-background-color": t[e] }
}), vO = (e = "textColor") => ({
	default: $.textColor.default,
	parseHTML: (e) => e.hasAttribute("data-text-color") ? e.getAttribute("data-text-color") : e.style.color ? e.style.color : $.textColor.default,
	renderHTML: (t) => t[e] === $.textColor.default ? {} : { "data-text-color": t[e] }
}), yO = (e, t) => {
	let n = e.querySelector(t);
	if (n) return {
		targetElement: n,
		caption: e.querySelector("figcaption")?.textContent ?? void 0
	};
}, bO = j(({ editor: e }) => {
	let t = Kn(void 0);
	function n() {
		t.setState(void 0);
	}
	return {
		key: "filePanel",
		store: t,
		mount({ signal: t }) {
			let r = e.onChange(n, !1), i = e.onSelectionChange(n, !1);
			t.addEventListener("abort", () => {
				r(), i();
			});
		},
		closeMenu: n,
		showMenu(e) {
			t.setState(e);
		}
	};
}), xO = (e, t, n) => {
	let r = document.createElement("div");
	r.className = "bn-add-file-button";
	let i = document.createElement("div");
	i.className = "bn-add-file-button-icon", n ? i.appendChild(n) : i.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z\"></path></svg>", r.appendChild(i);
	let a = document.createElement("p");
	a.className = "bn-add-file-button-text", a.innerHTML = e.type in t.dictionary.file_blocks.add_button_text ? t.dictionary.file_blocks.add_button_text[e.type] : t.dictionary.file_blocks.add_button_text.file, r.appendChild(a);
	let o = (e) => {
		e.preventDefault(), e.stopPropagation();
	}, s = () => {
		t.isEditable && t.getExtension(bO)?.showMenu(e.id);
	};
	return r.addEventListener("mousedown", o, !0), r.addEventListener("click", s, !0), {
		dom: r,
		destroy: () => {
			r.removeEventListener("mousedown", o, !0), r.removeEventListener("click", s, !0);
		}
	};
}, SO = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M3 8L9.00319 2H19.9978C20.5513 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5501 3 20.9932V8ZM10 4V9H5V20H19V4H10Z\"></path></svg>", CO = (e) => {
	let t = document.createElement("div");
	t.className = "bn-file-name-with-icon";
	let n = document.createElement("div");
	n.className = "bn-file-icon", n.innerHTML = SO, t.appendChild(n);
	let r = document.createElement("p");
	return r.className = "bn-file-name", r.textContent = e.props.name, t.appendChild(r), { dom: t };
}, wO = (e, t, n, r) => {
	let i = e.props.url !== "" && !!e.props.caption, a = document.createElement(i ? "figure" : "div");
	if (a.className = "bn-file-block-content-wrapper", e.props.url === "") {
		let n = xO(e, t, r);
		a.appendChild(n.dom);
		let i = t.onUploadStart((t) => {
			if (t === e.id) {
				a.removeChild(n.dom);
				let e = document.createElement("div");
				e.className = "bn-file-loading-preview", e.textContent = "Loading...", a.appendChild(e);
			}
		});
		return {
			dom: a,
			destroy: () => {
				i(), n.destroy();
			}
		};
	}
	let o = { dom: a };
	if (e.props.showPreview === !1 || !n) {
		let t = CO(e);
		a.appendChild(t.dom), o.destroy = () => {
			t.destroy?.();
		};
	} else a.appendChild(n.dom);
	if (e.props.caption) {
		let t = document.createElement("figcaption");
		t.className = "bn-file-caption", t.textContent = e.props.caption, a.appendChild(t);
	}
	return o;
}, TO = (e, t) => {
	let n = document.createElement("figure"), r = document.createElement("figcaption");
	return r.textContent = t, n.appendChild(e), n.appendChild(r), { dom: n };
}, EO = (e, t) => {
	let n = document.createElement("div"), r = document.createElement("p");
	return r.textContent = t, n.appendChild(e), n.appendChild(r), { dom: n };
}, DO = (e) => ({ url: e.src || void 0 }), OO = QE((e) => ({
	type: "audio",
	propSchema: {
		backgroundColor: $.backgroundColor,
		name: { default: "" },
		url: { default: "" },
		caption: { default: "" },
		showPreview: { default: !0 }
	},
	content: "none"
})), kO = (e = {}) => (e) => {
	if (e.tagName === "AUDIO") {
		if (e.closest("figure")) return;
		let { backgroundColor: t } = hO(e);
		return {
			...DO(e),
			backgroundColor: t
		};
	}
	if (e.tagName === "FIGURE") {
		let t = yO(e, "audio");
		if (!t) return;
		let { targetElement: n, caption: r } = t, { backgroundColor: i } = hO(e);
		return {
			...DO(n),
			backgroundColor: i,
			caption: r
		};
	}
}, AO = (e = {}) => (t, n) => {
	let r = document.createElement("div");
	r.innerHTML = e.icon ?? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z\"></path></svg>";
	let i = document.createElement("audio");
	return i.className = "bn-audio", n.resolveFileUrl ? n.resolveFileUrl(t.props.url).then((e) => {
		i.src = e;
	}) : i.src = t.props.url, i.controls = !0, i.contentEditable = "false", i.draggable = !1, wO(t, n, { dom: i }, r.firstElementChild);
}, jO = (e = {}) => (e, t) => {
	if (!e.props.url) return { dom: document.createElement("audio") };
	let n;
	return e.props.showPreview ? (n = document.createElement("audio"), n.src = e.props.url) : (n = document.createElement("a"), n.href = e.props.url, n.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? TO(n, e.props.caption) : EO(n, e.props.caption) : { dom: n };
}, MO = $E(OO, (e) => ({
	meta: { fileBlockAccept: ["audio/*"] },
	parse: kO(e),
	render: AO(e),
	toExternalHTML: jO(e),
	runsBefore: ["file"]
})), NO = Symbol.for("blocknote.shikiParser"), PO = Symbol.for("blocknote.shikiHighlighterPromise");
function FO(e) {
	let t = globalThis, n, r;
	return d_({
		parser: (i) => {
			if (!e.createHighlighter) return [];
			if (!n) return t[PO] = t[PO] || e.createHighlighter(), t[PO].then((e) => {
				n = e;
			});
			let a = LO(e, i.language);
			return !a || a === "text" || a === "none" || a === "plaintext" || a === "txt" ? [] : n.getLoadedLanguages().includes(a) ? (r || (r = t[NO] || m_(n), t[NO] = r), r(i)) : n.loadLanguage(a);
		},
		languageExtractor: (e) => e.attrs.language,
		nodeTypes: ["codeBlock"]
	});
}
var IO = $E(QE(({ defaultLanguage: e = "text" }) => ({
	type: "codeBlock",
	propSchema: { language: { default: e } },
	content: "inline"
})), (e) => ({
	meta: {
		code: !0,
		defining: !0,
		isolating: !1
	},
	parse: (e) => {
		if (e.tagName !== "PRE" || e.childElementCount !== 1 || e.firstElementChild?.tagName !== "CODE") return;
		let t = e.firstElementChild;
		return { language: t.getAttribute("data-language") || t.className.split(" ").find((e) => e.includes("language-"))?.replace("language-", "") };
	},
	parseContent: ({ el: e, schema: t }) => {
		let n = Yr.fromSchema(t), r = e.firstElementChild;
		return n.parse(r, {
			preserveWhitespace: "full",
			topNode: t.nodes.codeBlock.create()
		}).content;
	},
	render(t, n) {
		let r = document.createDocumentFragment(), i = document.createElement("pre"), a = document.createElement("code");
		i.appendChild(a);
		let o;
		if (e.supportedLanguages) {
			let i = document.createElement("select");
			if (Object.entries(e.supportedLanguages ?? {}).forEach(([e, { name: t }]) => {
				let n = document.createElement("option");
				n.value = e, n.text = t, i.appendChild(n);
			}), i.value = t.props.language || e.defaultLanguage || "text", n.isEditable) {
				let e = (e) => {
					let r = e.target.value;
					n.updateBlock(t.id, { props: { language: r } });
				};
				i.addEventListener("change", e), o = () => i.removeEventListener("change", e);
			} else i.disabled = !0;
			let a = document.createElement("div");
			a.contentEditable = "false", a.appendChild(i), r.appendChild(a);
		}
		return r.appendChild(i), {
			dom: r,
			contentDOM: a,
			destroy: () => {
				o?.();
			}
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("pre"), n = document.createElement("code");
		return n.className = `language-${e.props.language}`, n.dataset.language = e.props.language, t.appendChild(n), {
			dom: t,
			contentDOM: n
		};
	}
}), (e) => [j({
	key: "code-block-highlighter",
	prosemirrorPlugins: [FO(e)]
}), j({
	key: "code-block-keyboard-shortcuts",
	keyboardShortcuts: {
		Delete: ({ editor: e }) => e.transact((t) => {
			let { block: n } = e.getTextCursorPosition();
			if (n.type !== "codeBlock") return !1;
			let { $from: r } = t.selection;
			return r.parent.textContent ? !1 : (e.removeBlocks([n]), !0);
		}),
		Tab: ({ editor: t }) => e.indentLineWithTab === !1 ? !1 : t.transact((e) => {
			let { block: n } = t.getTextCursorPosition();
			return n.type === "codeBlock" ? (e.insertText("  "), !0) : !1;
		}),
		Enter: ({ editor: e }) => e.transact((t) => {
			let { block: n, nextBlock: r } = e.getTextCursorPosition();
			if (n.type !== "codeBlock") return !1;
			let { $from: i } = t.selection, a = i.parentOffset === i.parent.nodeSize - 2, o = i.parent.textContent.endsWith("\n\n");
			if (a && o) {
				if (t.delete(i.pos - 2, i.pos), r) return e.setTextCursorPosition(r, "start"), !0;
				let [a] = e.insertBlocks([{ type: "paragraph" }], n, "after");
				return e.setTextCursorPosition(a, "start"), !0;
			}
			return t.insertText("\n"), !0;
		}),
		"Shift-Enter": ({ editor: e }) => e.transact(() => {
			let { block: t } = e.getTextCursorPosition();
			if (t.type !== "codeBlock") return !1;
			let [n] = e.insertBlocks([{ type: "paragraph" }], t, "after");
			return e.setTextCursorPosition(n, "start"), !0;
		})
	},
	inputRules: [{
		find: /^```(.*?)\s$/,
		replace: ({ match: t }) => {
			let n = t[1].trim();
			return {
				type: "codeBlock",
				props: { language: { language: LO(e, n) ?? n }.language },
				content: []
			};
		}
	}]
})]);
function LO(e, t) {
	return Object.entries(e.supportedLanguages ?? {}).find(([e, { aliases: n }]) => n?.includes(t) || e === t)?.[0];
}
var RO = $E(QE(() => ({
	type: "divider",
	propSchema: {},
	content: "none"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName === "HR") return {};
	},
	render() {
		return { dom: document.createElement("hr") };
	}
}, [j({
	key: "divider-block-shortcuts",
	inputRules: [{
		find: RegExp("^---$"),
		replace() {
			return {
				type: "divider",
				props: {},
				content: []
			};
		}
	}]
})]), zO = (e) => ({ url: e.src || void 0 }), BO = QE(() => ({
	type: "file",
	propSchema: {
		backgroundColor: $.backgroundColor,
		name: { default: "" },
		url: { default: "" },
		caption: { default: "" }
	},
	content: "none"
})), VO = () => (e) => {
	if (e.tagName === "EMBED") {
		if (e.closest("figure")) return;
		let { backgroundColor: t } = hO(e);
		return {
			...zO(e),
			backgroundColor: t
		};
	}
	if (e.tagName === "FIGURE") {
		let t = yO(e, "embed");
		if (!t) return;
		let { targetElement: n, caption: r } = t, { backgroundColor: i } = hO(e);
		return {
			...zO(n),
			backgroundColor: i,
			caption: r
		};
	}
}, HO = $E(BO, {
	meta: { fileBlockAccept: ["*/*"] },
	parse: VO(),
	render(e, t) {
		return wO(e, t);
	},
	toExternalHTML(e) {
		if (!e.props.url) return { dom: document.createElement("embed") };
		let t = document.createElement("a");
		return t.href = e.props.url, t.textContent = e.props.name || e.props.url, e.props.caption ? EO(t, e.props.caption) : { dom: t };
	}
});
function UO(e, t, n) {
	let r = Yr.fromSchema(t), i = e.querySelector(":scope > summary"), a;
	if (i) {
		let e = i.cloneNode(!0);
		VE(e), a = r.parse(e, {
			topNode: t.nodes.paragraph.create(),
			preserveWhitespace: !0
		}).content;
	} else a = M.empty;
	let o = document.createElement("div");
	o.setAttribute("data-node-type", "blockGroup");
	let s = !1;
	for (let t of Array.from(e.childNodes)) t.tagName !== "SUMMARY" && (t.nodeType === 3 && !t.textContent?.trim() || (s = !0, o.appendChild(t.cloneNode(!0))));
	let c = t.nodes[n].create({}, a);
	if (!s) return c.content;
	let l = r.parse(o, { topNode: t.nodes.blockGroup.create() });
	return l.content.size > 0 ? c.content.addToEnd(l) : c.content;
}
var WO = {
	set: (e, t) => window.localStorage.setItem(`toggle-${e.id}`, t ? "true" : "false"),
	get: (e) => window.localStorage.getItem(`toggle-${e.id}`) === "true"
}, GO = (e, t, n, r = WO) => {
	if ("isToggleable" in e.props && !e.props.isToggleable) return { dom: n };
	let i = document.createElement("div"), a = document.createElement("div");
	a.className = "bn-toggle-wrapper";
	let o = document.createElement("button");
	o.className = "bn-toggle-button", o.type = "button", o.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"CURRENTCOLOR\"><path d=\"M320-200v-560l440 280-440 280Z\"/></svg>";
	let s = (e) => e.preventDefault();
	o.addEventListener("mousedown", s);
	let c = () => {
		a.getAttribute("data-show-children") === "true" ? (a.setAttribute("data-show-children", "false"), r.set(t.getBlock(e), !1), i.contains(l) && i.removeChild(l)) : (a.setAttribute("data-show-children", "true"), r.set(t.getBlock(e), !0), t.isEditable && t.getBlock(e)?.children.length === 0 && !i.contains(l) && i.appendChild(l));
	};
	o.addEventListener("click", c), a.appendChild(o), a.appendChild(n);
	let l = document.createElement("button");
	l.className = "bn-toggle-add-block-button", l.type = "button", l.textContent = t.dictionary.toggle_blocks.add_block_button;
	let u = (e) => e.preventDefault();
	l.addEventListener("mousedown", u);
	let d = () => {
		t.transact(() => {
			let n = t.updateBlock(e, { children: [{}] });
			t.setTextCursorPosition(n.children[0].id, "end"), t.focus();
		});
	};
	l.addEventListener("click", d), i.appendChild(a);
	let f = e.children.length, p = t.onChange(() => {
		let n = t.getBlock(e)?.children.length ?? 0;
		n > f ? (a.getAttribute("data-show-children") === "false" && (a.setAttribute("data-show-children", "true"), r.set(t.getBlock(e), !0)), i.contains(l) && i.removeChild(l)) : n === 0 && n < f && (a.getAttribute("data-show-children") === "true" && (a.setAttribute("data-show-children", "false"), r.set(t.getBlock(e), !1)), i.contains(l) && i.removeChild(l)), f = n;
	});
	return r.get(e) ? (a.setAttribute("data-show-children", "true"), t.isEditable && e.children.length === 0 && i.appendChild(l)) : a.setAttribute("data-show-children", "false"), {
		dom: i,
		ignoreMutation: (e) => e instanceof MutationRecord && (e.type === "attributes" && e.target === a && e.attributeName === "data-show-children" || e.type === "childList" && (e.addedNodes[0] === l || e.removedNodes[0] === l)),
		destroy: () => {
			o.removeEventListener("mousedown", s), o.removeEventListener("click", c), l.removeEventListener("mousedown", u), l.removeEventListener("click", d), p?.();
		}
	};
}, KO = [
	1,
	2,
	3,
	4,
	5,
	6
], qO = (e) => ({ editor: t }) => {
	let n = t.getTextCursorPosition();
	return t.schema.blockSchema[n.block.type].content === "inline" ? (t.updateBlock(n.block, {
		type: "heading",
		props: { level: e }
	}), !0) : !1;
}, JO = $E(QE(({ defaultLevel: e = 1, levels: t = KO, allowToggleHeadings: n = !0 } = {}) => ({
	type: "heading",
	propSchema: {
		...$,
		level: {
			default: e,
			values: t
		},
		...n ? { isToggleable: {
			default: !1,
			optional: !0
		} } : {}
	},
	content: "inline"
})), ({ allowToggleHeadings: e = !0 } = {}) => ({
	meta: { isolating: !1 },
	parse(t) {
		if (e && t.tagName === "DETAILS") {
			let e = t.querySelector(":scope > summary");
			if (!e) return;
			let n = e.querySelector("h1, h2, h3, h4, h5, h6");
			return n ? {
				...hO(n),
				level: parseInt(n.tagName[1]),
				isToggleable: !0
			} : void 0;
		}
		let n;
		switch (t.tagName) {
			case "H1":
				n = 1;
				break;
			case "H2":
				n = 2;
				break;
			case "H3":
				n = 3;
				break;
			case "H4":
				n = 4;
				break;
			case "H5":
				n = 5;
				break;
			case "H6":
				n = 6;
				break;
			default: return;
		}
		return {
			...hO(t),
			level: n
		};
	},
	...e ? { parseContent: ({ el: e, schema: t }) => {
		if (e.tagName === "DETAILS") return UO(e, t, "heading");
	} } : {},
	runsBefore: ["toggleListItem"],
	render(t, n) {
		let r = document.createElement(`h${t.props.level}`);
		return e ? {
			...GO(t, n, r),
			contentDOM: r
		} : {
			dom: r,
			contentDOM: r
		};
	},
	toExternalHTML(t) {
		let n = document.createElement(`h${t.props.level}`);
		if (gO(t.props, n), e && t.props.isToggleable) {
			let e = document.createElement("details");
			e.setAttribute("open", "");
			let t = document.createElement("summary");
			return t.appendChild(n), e.appendChild(t), {
				dom: e,
				contentDOM: n,
				childrenDOM: e
			};
		}
		return {
			dom: n,
			contentDOM: n
		};
	}
}), ({ levels: e = KO } = {}) => [j({
	key: "heading-shortcuts",
	keyboardShortcuts: Object.fromEntries(e.map((e) => [`Mod-Alt-${e}`, qO(e)]) ?? []),
	inputRules: e.map((e) => ({
		find: RegExp(`^(#{${e}})\\s$`),
		replace({ match: e }) {
			return {
				type: "heading",
				props: { level: e[1].length }
			};
		}
	}))
})]), YO = (e, t, n, r, i) => {
	let { dom: a, destroy: o } = wO(e, t, n, i), s = a;
	s.style.position = "relative", e.props.url && e.props.showPreview && (e.props.previewWidth ? s.style.width = `${e.props.previewWidth}px` : s.style.width = "fit-content");
	let c = document.createElement("div");
	c.className = "bn-resize-handle", c.style.left = "4px", c.style.display = "none", r.appendChild(c);
	let l = document.createElement("div");
	l.className = "bn-resize-handle", l.style.right = "4px", l.style.display = "none", r.appendChild(l);
	let u = document.createElement("div");
	u.style.position = "absolute", u.style.height = "100%", u.style.width = "100%";
	let d, f = e.props.previewWidth, p = (n) => {
		if (!d) {
			t.isEditable || (c.style.display = "none", l.style.display = "none");
			return;
		}
		let r, i = "touches" in n ? n.touches[0].clientX : n.clientX;
		r = e.props.textAlignment === "center" ? d.handleUsed === "left" ? d.initialWidth + (d.initialClientX - i) * 2 : d.initialWidth + (i - d.initialClientX) * 2 : d.handleUsed === "left" ? d.initialWidth + d.initialClientX - i : d.initialWidth + i - d.initialClientX, f = Math.min(Math.max(r, 64), t.domElement?.firstElementChild?.clientWidth || Number.MAX_VALUE), s.style.width = `${f}px`;
	}, m = (n) => {
		(!n.target || !s.contains(n.target) || !t.isEditable) && (c.style.display = "none", l.style.display = "none"), d && (d = void 0, s.contains(u) && s.removeChild(u), t.updateBlock(e, { props: { previewWidth: f } }));
	}, h = () => {
		t.isEditable && (c.style.display = "", l.style.display = "");
	}, g = (e) => {
		e.relatedTarget === c || e.relatedTarget === l || d || t.isEditable && (c.style.display = "none", l.style.display = "none");
	}, _ = (e) => {
		e.preventDefault(), s.contains(u) || s.appendChild(u);
		let t = "touches" in e ? e.touches[0].clientX : e.clientX;
		d = {
			handleUsed: "left",
			initialWidth: s.clientWidth,
			initialClientX: t
		};
	}, v = (e) => {
		e.preventDefault(), s.contains(u) || s.appendChild(u);
		let t = "touches" in e ? e.touches[0].clientX : e.clientX;
		d = {
			handleUsed: "right",
			initialWidth: s.clientWidth,
			initialClientX: t
		};
	};
	return window.addEventListener("mousemove", p), window.addEventListener("touchmove", p), window.addEventListener("mouseup", m), window.addEventListener("touchend", m), s.addEventListener("mouseenter", h), s.addEventListener("mouseleave", g), c.addEventListener("mousedown", _), c.addEventListener("touchstart", _), l.addEventListener("mousedown", v), l.addEventListener("touchstart", v), {
		dom: s,
		destroy: () => {
			o?.(), window.removeEventListener("mousemove", p), window.removeEventListener("touchmove", p), window.removeEventListener("mouseup", m), window.removeEventListener("touchend", m), s.removeEventListener("mouseenter", h), s.removeEventListener("mouseleave", g), c.removeEventListener("mousedown", _), c.removeEventListener("touchstart", _), l.removeEventListener("mousedown", v), l.removeEventListener("touchstart", v);
		}
	};
}, XO = (e) => ({
	url: e.src || void 0,
	previewWidth: e.width || void 0,
	name: e.alt || void 0
}), ZO = QE((e = {}) => ({
	type: "image",
	propSchema: {
		textAlignment: $.textAlignment,
		backgroundColor: $.backgroundColor,
		name: { default: "" },
		url: { default: "" },
		caption: { default: "" },
		showPreview: { default: !0 },
		previewWidth: {
			default: void 0,
			type: "number"
		}
	},
	content: "none"
})), QO = (e = {}) => (e) => {
	if (e.tagName === "IMG") {
		if (e.closest("figure")) return;
		let { backgroundColor: t } = hO(e);
		return {
			...XO(e),
			backgroundColor: t
		};
	}
	if (e.tagName === "FIGURE") {
		let t = yO(e, "img");
		if (!t) return;
		let { targetElement: n, caption: r } = t, { backgroundColor: i } = hO(e);
		return {
			...XO(n),
			backgroundColor: i,
			caption: r
		};
	}
}, $O = (e = {}) => (t, n) => {
	let r = document.createElement("div");
	r.innerHTML = e.icon ?? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M5 11.1005L7 9.1005L12.5 14.6005L16 11.1005L19 14.1005V5H5V11.1005ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10Z\"></path></svg>";
	let i = document.createElement("div");
	i.className = "bn-visual-media-wrapper";
	let a = document.createElement("img");
	return a.className = "bn-visual-media", n.resolveFileUrl ? n.resolveFileUrl(t.props.url).then((e) => {
		a.src = e;
	}) : a.src = t.props.url, a.alt = t.props.name || "", a.contentEditable = "false", a.draggable = !1, t.props.previewWidth && (a.width = t.props.previewWidth), i.appendChild(a), YO(t, n, { dom: i }, i, r.firstElementChild);
}, ek = (e = {}) => (e, t) => {
	if (!e.props.url) return { dom: document.createElement("img") };
	let n;
	return e.props.showPreview ? (n = document.createElement("img"), n.src = e.props.url, n.alt = e.props.name || "", e.props.previewWidth && (n.width = e.props.previewWidth)) : (n = document.createElement("a"), n.href = e.props.url, n.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? TO(n, e.props.caption) : EO(n, e.props.caption) : { dom: n };
}, tk = $E(ZO, (e) => ({
	meta: { fileBlockAccept: ["image/*"] },
	parse: QO(e),
	render: $O(e),
	toExternalHTML: ek(e),
	runsBefore: ["file"]
})), nk = (e, t, n) => ({ state: r, dispatch: i }) => i ? rk(r.tr, e, t, n) : !0, rk = (e, t, n, r) => {
	let i = nD(eD(e.doc, t));
	if (!i.isBlockContainer) return !1;
	let a = oD(e), o = [{
		type: i.bnBlock.node.type,
		attrs: r ? {
			...i.bnBlock.node.attrs,
			id: void 0
		} : {}
	}, {
		type: n ? i.blockContent.node.type : a.nodes.paragraph,
		attrs: r ? { ...i.blockContent.node.attrs } : {}
	}];
	return e.split(t, 2, o), !0;
}, ik = (e, t) => {
	let { blockInfo: n, selectionEmpty: r } = e.transact((e) => ({
		blockInfo: aD(e),
		selectionEmpty: e.selection.anchor === e.selection.head
	}));
	if (!n.isBlockContainer) return !1;
	let { bnBlock: i, blockContent: a } = n;
	return a.node.type.name !== t || !r ? !1 : a.node.childCount === 0 ? (e.transact((e) => {
		cO(e, i.beforePos, {
			type: "paragraph",
			props: {}
		});
	}), !0) : a.node.childCount > 0 ? e.transact((e) => (e.deleteSelection(), rk(e, e.selection.from, !0))) : !1;
};
function ak(e, t, n) {
	let r = Yr.fromSchema(t), i = e, a = document.createElement("div");
	a.setAttribute("data-node-type", "blockGroup");
	for (let e of Array.from(i.childNodes)) a.appendChild(e.cloneNode(!0));
	let o = r.parse(a, { topNode: t.nodes.blockGroup.create() });
	o.firstChild?.firstChild?.type.name === "checkListItem" && (o = o.copy(o.content.cut(o.firstChild.firstChild.nodeSize + 2)));
	let s = o.firstChild?.firstChild;
	if (!s?.isTextblock) return M.from(o);
	let c = t.nodes[n].create({}, s.content), l = o.content.cut(s.nodeSize + 2);
	if (l.size > 0) {
		let e = o.copy(l);
		return c.content.addToEnd(e);
	}
	return c.content;
}
var ok = $E(QE(() => ({
	type: "bulletListItem",
	propSchema: { ...$ },
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName !== "LI") return;
		let t = e.parentElement;
		if (t === null || t.tagName === "UL" || t.tagName === "DIV" && t.parentElement?.tagName === "UL" || !e.closest("ul, ol")) return hO(e);
	},
	parseContent: ({ el: e, schema: t }) => ak(e, t, "bulletListItem"),
	render() {
		let e = document.createElement("p");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("li"), n = document.createElement("p");
		return gO(e.props, t), t.appendChild(n), {
			dom: t,
			contentDOM: n
		};
	}
}, [j({
	key: "bullet-list-item-shortcuts",
	keyboardShortcuts: {
		Enter: ({ editor: e }) => ik(e, "bulletListItem"),
		"Mod-Shift-8": ({ editor: e }) => {
			let t = e.getTextCursorPosition();
			return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
				type: "bulletListItem",
				props: {}
			}), !0) : !1;
		}
	},
	inputRules: [{
		find: /^\s?[-+*]\s$/,
		replace({ editor: e }) {
			if (iD(e.prosemirrorState).blockNoteType !== "heading") return {
				type: "bulletListItem",
				props: {}
			};
		}
	}]
})]), sk = $E(QE(() => ({
	type: "checkListItem",
	propSchema: {
		...$,
		checked: {
			default: !1,
			type: "boolean"
		}
	},
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName === "input") return e.closest("[data-content-type]") || e.closest("li") ? void 0 : e.type === "checkbox" ? { checked: e.checked } : void 0;
		if (e.tagName !== "LI") return;
		let t = e.parentElement;
		if (t !== null && (t.tagName === "UL" || t.tagName === "DIV" && t.parentElement?.tagName === "UL")) {
			let t = e.querySelector("input[type=checkbox]") || null;
			return t === null ? void 0 : {
				...hO(e),
				checked: t.checked
			};
		}
	},
	parseContent: ({ el: e, schema: t }) => ak(e, t, "checkListItem"),
	render(e, t) {
		let n = document.createDocumentFragment(), r = document.createElement("input");
		r.type = "checkbox", r.checked = e.props.checked, e.props.checked && r.setAttribute("checked", ""), r.disabled = !t.isEditable, r.addEventListener("change", () => {
			t.isEditable && t.updateBlock(e, { props: { checked: !e.props.checked } });
		});
		let i = document.createElement("p"), a = document.createElement("div");
		return a.contentEditable = "false", a.appendChild(r), n.appendChild(a), n.appendChild(i), {
			dom: n,
			contentDOM: i
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("li"), n = document.createElement("input");
		n.type = "checkbox", n.checked = e.props.checked, e.props.checked && n.setAttribute("checked", "");
		let r = document.createElement("p");
		return gO(e.props, t), t.appendChild(n), t.appendChild(r), {
			dom: t,
			contentDOM: r
		};
	},
	runsBefore: ["bulletListItem"]
}, [j({
	key: "check-list-item-shortcuts",
	keyboardShortcuts: {
		Enter: ({ editor: e }) => ik(e, "checkListItem"),
		"Mod-Shift-9": ({ editor: e }) => {
			let t = e.getTextCursorPosition();
			return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
				type: "checkListItem",
				props: {}
			}), !0) : !1;
		}
	},
	inputRules: [{
		find: /^\s?\[\s*\]\s$/,
		replace() {
			return {
				type: "checkListItem",
				props: { checked: !1 }
			};
		}
	}, {
		find: /^\s?\[[Xx]\]\s$/,
		replace() {
			return {
				type: "checkListItem",
				props: { checked: !0 }
			};
		}
	}]
})]);
function ck(e, t, n, r) {
	let i = !!e.firstChild.attrs.start, a = nD({
		posBeforeNode: t,
		node: e
	});
	if (!a.isBlockContainer) throw Error("impossible");
	let o = n.doc.resolve(a.bnBlock.beforePos).nodeBefore, s = o ? r.get(o) : void 0;
	if (s !== void 0) {
		let t = s + 1;
		return r.set(e, t), {
			index: t,
			isFirst: !1,
			hasStart: i
		};
	}
	let c = [{
		node: e,
		pos: t
	}], l = o, u = a.bnBlock.beforePos;
	for (; l && r.get(l) === void 0;) {
		let e = nD({
			posBeforeNode: u - l.nodeSize,
			node: l
		});
		if (e.blockNoteType !== "numberedListItem") break;
		c.push({
			node: l,
			pos: u - l.nodeSize
		});
		let t = n.doc.resolve(e.bnBlock.beforePos).nodeBefore;
		u = e.bnBlock.beforePos, l = t;
	}
	let d, f, p = c[c.length - 1], m = nD({
		posBeforeNode: p.pos,
		node: p.node
	});
	if (!m.isBlockContainer) throw Error("impossible");
	let h = n.doc.resolve(m.bnBlock.beforePos).nodeBefore, g = h ? r.get(h) : void 0;
	g === void 0 ? (d = (p.node.firstChild.attrs.start || 1) - 1, f = !0) : (d = g, f = !1);
	for (let e = c.length - 1; e >= 0; e--) {
		let t = c[e];
		f && e < c.length - 1 && (f = !1), d++, r.set(t.node, d);
	}
	return {
		index: d,
		isFirst: c.length === 1 ? f || g === void 0 : !1,
		hasStart: i
	};
}
function lk(e, t) {
	let n = /* @__PURE__ */ new Map(), r = t.decorations.map(e.mapping, e.doc), i = e.changedRange() ?? {
		from: 0,
		to: e.doc.nodeSize - 2
	}, a = [], o = /* @__PURE__ */ new Set();
	e.doc.nodesBetween(i.from, e.doc.nodeSize - 2, (t, s, c) => {
		if (c && o.has(c)) return !1;
		if (t.type.name === "blockContainer" && t.firstChild.type.name === "numberedListItem") {
			let { index: l, isFirst: u, hasStart: d } = ck(t, s, e, n), f = e.doc.nodeAt(s + 1);
			if (r.find(s + 1, s + 1 + f.nodeSize, (e) => e.index === l && e.isFirst === u && e.hasStart === d).length === 0) a.push(B.node(s + 1, s + 1 + f.nodeSize, { "data-index": l.toString() }, {
				index: l,
				isFirst: u,
				hasStart: d
			}));
			else if (s >= i.to && c) return o.add(c), !1;
		}
	});
	let s = a.flatMap((e) => r.find(e.from, e.to));
	return { decorations: r.remove(s).add(e.doc, a) };
}
var uk = $E(QE(() => ({
	type: "numberedListItem",
	propSchema: {
		...$,
		start: {
			default: void 0,
			type: "number"
		}
	},
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName !== "LI") return;
		let t = e.parentElement;
		if (t !== null && (t.tagName === "OL" || t.tagName === "DIV" && t.parentElement?.tagName === "OL")) {
			let n = parseInt(t.getAttribute("start") || "1"), r = hO(e);
			return e.previousElementSibling || n === 1 ? r : {
				...r,
				start: n
			};
		}
	},
	parseContent: ({ el: e, schema: t }) => ak(e, t, "numberedListItem"),
	render() {
		let e = document.createElement("p");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("li"), n = document.createElement("p");
		return gO(e.props, t), t.appendChild(n), {
			dom: t,
			contentDOM: n
		};
	}
}, [j({
	key: "numbered-list-item-shortcuts",
	inputRules: [{
		find: /^\s?(\d+)\.\s$/,
		replace({ match: e, editor: t }) {
			if (iD(t.prosemirrorState).blockNoteType === "heading") return;
			let n = parseInt(e[1]);
			return {
				type: "numberedListItem",
				props: { start: n === 1 ? void 0 : n }
			};
		}
	}],
	keyboardShortcuts: {
		Enter: ({ editor: e }) => ik(e, "numberedListItem"),
		"Mod-Shift-7": ({ editor: e }) => {
			let t = e.getTextCursorPosition();
			return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
				type: "numberedListItem",
				props: {}
			}), !0) : !1;
		}
	},
	prosemirrorPlugins: [new R({
		key: new z("numbered-list-indexing-decorations"),
		state: {
			init(e, t) {
				return lk(t.tr, { decorations: V.empty });
			},
			apply(e, t) {
				return !e.docChanged && t.decorations ? t : lk(e, t);
			}
		},
		props: { decorations(e) {
			return this.getState(e)?.decorations ?? V.empty;
		} }
	})]
})]), dk = $E(QE(() => ({
	type: "toggleListItem",
	propSchema: { ...$ },
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName === "DETAILS") return hO(e);
		if (e.tagName === "LI") {
			let t = e.parentElement;
			if (t && (t.tagName === "UL" || t.tagName === "DIV" && t.parentElement?.tagName === "UL") && e.querySelector(":scope > details")) return hO(e);
		}
	},
	parseContent: ({ el: e, schema: t }) => {
		let n = e.tagName === "DETAILS" ? e : e.querySelector(":scope > details");
		if (!n) throw Error("No details found in toggleListItem parseContent");
		return UO(n, t, "toggleListItem");
	},
	runsBefore: ["bulletListItem"],
	render(e, t) {
		let n = document.createElement("p");
		return {
			...GO(e, t, n),
			contentDOM: n
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("li"), n = document.createElement("details");
		n.setAttribute("open", "");
		let r = document.createElement("summary"), i = document.createElement("p");
		return r.appendChild(i), n.appendChild(r), gO(e.props, t), t.appendChild(n), {
			dom: t,
			contentDOM: i,
			childrenDOM: n
		};
	}
}, [j({
	key: "toggle-list-item-shortcuts",
	keyboardShortcuts: {
		Enter: ({ editor: e }) => ik(e, "toggleListItem"),
		"Mod-Shift-6": ({ editor: e }) => {
			let t = e.getTextCursorPosition();
			return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
				type: "toggleListItem",
				props: {}
			}), !0) : !1;
		}
	}
})]), fk = $E(QE(() => ({
	type: "paragraph",
	propSchema: $,
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse: (e) => {
		if (e.tagName === "P" && e.textContent?.trim()) return hO(e);
	},
	render: () => {
		let e = document.createElement("p");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML: (e) => {
		let t = document.createElement("p");
		return gO(e.props, t), {
			dom: t,
			contentDOM: t
		};
	},
	runsBefore: ["default", "heading"]
}, [j({
	key: "paragraph-shortcuts",
	keyboardShortcuts: { "Mod-Alt-0": ({ editor: e }) => {
		let t = e.getTextCursorPosition();
		return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
			type: "paragraph",
			props: {}
		}), !0) : !1;
	} }
})]), pk = $E(QE(() => ({
	type: "quote",
	propSchema: {
		backgroundColor: $.backgroundColor,
		textColor: $.textColor
	},
	content: "inline"
})), {
	meta: { isolating: !1 },
	parse(e) {
		if (e.tagName === "BLOCKQUOTE") {
			let { backgroundColor: t, textColor: n } = hO(e);
			return {
				backgroundColor: t,
				textColor: n
			};
		}
	},
	render() {
		let e = document.createElement("blockquote");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML(e) {
		let t = document.createElement("blockquote");
		return gO(e.props, t), {
			dom: t,
			contentDOM: t
		};
	}
}, [j({
	key: "quote-block-shortcuts",
	keyboardShortcuts: { "Mod-Alt-q": ({ editor: e }) => {
		let t = e.getTextCursorPosition();
		return e.schema.blockSchema[t.block.type].content === "inline" ? (e.updateBlock(t.block, {
			type: "quote",
			props: {}
		}), !0) : !1;
	} },
	inputRules: [{
		find: RegExp("^>\\s$"),
		replace() {
			return {
				type: "quote",
				props: {}
			};
		}
	}, {
		find: RegExp("^\\p{Quotation_Mark}\\s$", "u"),
		replace() {
			return {
				type: "quote",
				props: {}
			};
		}
	}]
})]), mk = W.create({
	name: "BlockNoteTableExtension",
	addProseMirrorPlugins: () => [Yg({
		cellMinWidth: 35,
		defaultCellMinWidth: 120,
		View: null
	}), l_()],
	addKeyboardShortcuts() {
		return {
			Enter: () => Bh(this.editor.state) ? this.editor.commands.command(({ state: e, dispatch: t }) => {
				let n = Vh(e), r = n ? Kh(n, "vert", 1) : null;
				return r && t && t(e.tr.setSelection(I.between(r, Wh(r))).scrollIntoView()), !0;
			}) : !1,
			Backspace: () => {
				let e = this.editor.state.selection, t = e.empty, n = e.$head.parentOffset === 0, r = e.$head.node().type.name === "tableParagraph";
				return t && n && r;
			},
			Tab: () => this.editor.commands.command(({ state: e, dispatch: t, view: n }) => Eg(1)(e, t, n)),
			"Shift-Tab": () => this.editor.commands.command(({ state: e, dispatch: t, view: n }) => Eg(-1)(e, t, n))
		};
	},
	extendNodeSchema(e) {
		return { tableRole: U(H(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
}), hk = { textColor: $.textColor }, gk = rh.create({
	name: "tableHeader",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "tableContent+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth");
					return t ? t.split(",").map((e) => parseInt(e, 10)) : null;
				}
			}
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "th",
			getContent: (e, t) => xk(e, t)
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"th",
			ap(this.options.HTMLAttributes, e),
			0
		];
	}
}), _k = rh.create({
	name: "tableCell",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "tableContent+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: (e) => {
					let t = e.getAttribute("colwidth");
					return t ? t.split(",").map((e) => parseInt(e, 10)) : null;
				}
			}
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "td",
			getContent: (e, t) => xk(e, t)
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"td",
			ap(this.options.HTMLAttributes, e),
			0
		];
	}
}), vk = rh.create({
	name: "table",
	content: "tableRow+",
	group: "blockContent",
	tableRole: "table",
	marks: "deletion insertion modification",
	isolating: !0,
	parseHTML() {
		return [{ tag: "table" }];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		let n = zE(this.name, "table", {
			...this.options.domAttributes?.blockContent || {},
			...t
		}, this.options.domAttributes?.inlineContent || {}), r = document.createElement("colgroup");
		for (let t of e.children[0].children) if (t.attrs.colwidth) for (let e of t.attrs.colwidth) {
			let t = document.createElement("col");
			e && (t.style = `width: ${e}px`), r.appendChild(t);
		}
		else r.appendChild(document.createElement("col"));
		return n.dom.firstChild?.appendChild(r), n;
	},
	addNodeView() {
		return ({ node: e, HTMLAttributes: t }) => {
			class n extends Kg {
				constructor(e, t, n) {
					super(e, t), this.node = e, this.cellMinWidth = t, this.blockContentHTMLAttributes = n;
					let r = document.createElement("div");
					r.className = RE("bn-block-content", n.class), r.setAttribute("data-content-type", "table");
					for (let [e, t] of Object.entries(n)) e !== "class" && r.setAttribute(e, t);
					let i = this.dom, a = document.createElement("div");
					a.className = "tableWrapper-inner", a.appendChild(i.firstChild), i.appendChild(a), r.appendChild(i);
					let o = document.createElement("div");
					o.className = "table-widgets-container", o.style.position = "relative", i.appendChild(o), this.dom = r;
				}
				ignoreMutation(e) {
					return !e.target.closest(".tableWrapper-inner") || super.ignoreMutation(e);
				}
				update(e) {
					if (!super.update(e)) return !1;
					for (let [t, n] of Object.entries(hk)) {
						let r = HE(t), i = e.attrs[t];
						i === n.default ? this.dom.removeAttribute(r) : this.dom.setAttribute(r, String(i));
					}
					return !0;
				}
			}
			return new n(e, 120, {
				...this.options.domAttributes?.blockContent || {},
				...t
			});
		};
	}
}), yk = rh.create({
	name: "tableParagraph",
	group: "tableContent",
	content: "inline*",
	parseHTML() {
		return [{
			tag: "p",
			getAttrs: (e) => {
				if (typeof e == "string" || !e.textContent || !e.closest("[data-content-type]")) return !1;
				let t = e.parentElement;
				return t === null ? !1 : t.tagName === "TD" || t.tagName === "TH" ? {} : !1;
			},
			node: "tableParagraph"
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"p",
			e,
			0
		];
	}
}), bk = rh.create({
	name: "tableRow",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "(tableCell | tableHeader)+",
	tableRole: "row",
	marks: "deletion insertion modification",
	parseHTML() {
		return [{ tag: "tr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"tr",
			ap(this.options.HTMLAttributes, e),
			0
		];
	}
});
function xk(e, t) {
	let n = Yr.fromSchema(t).parse(e, { topNode: t.nodes.blockGroup.create() }), r = [];
	return n.content.descendants((e) => {
		if (e.isInline) return r.push(e), !1;
	}), M.fromArray(r);
}
var Sk = () => JE({
	node: vk,
	type: "table",
	content: "table"
}, hk, [j({
	key: "table-extensions",
	tiptapExtensions: [
		mk,
		yk,
		gk,
		_k,
		bk
	]
}), j({
	key: "table-keyboard-delete",
	keyboardShortcuts: { Backspace: ({ editor: e }) => {
		if (!(e.prosemirrorState.selection instanceof K)) return !1;
		let t = e.getTextCursorPosition().block, n = t.content, r = 0;
		for (let e of n.rows) for (let t of e.cells) {
			if ("type" in t && t.content.length > 0 || !("type" in t) && t.length > 0) return !1;
			r++;
		}
		let i = 0;
		return e.prosemirrorState.selection.forEachCell(() => {
			i++;
		}), i < r ? !1 : (e.transact(() => {
			(e.getPrevBlock(t) || e.getNextBlock(t)) && e.setTextCursorPosition(t), e.removeBlocks([t]);
		}), !0);
	} }
})]), Ck = (e) => ({
	url: e.src || void 0,
	previewWidth: e.width || void 0,
	name: e.getAttribute("data-name") || void 0
}), wk = QE((e) => ({
	type: "video",
	propSchema: {
		textAlignment: $.textAlignment,
		backgroundColor: $.backgroundColor,
		name: { default: "" },
		url: { default: "" },
		caption: { default: "" },
		showPreview: { default: !0 },
		previewWidth: {
			default: void 0,
			type: "number"
		}
	},
	content: "none"
})), Tk = (e) => (e) => {
	if (e.tagName === "VIDEO") {
		if (e.closest("figure")) return;
		let { backgroundColor: t } = hO(e);
		return {
			...Ck(e),
			backgroundColor: t
		};
	}
	if (e.tagName === "FIGURE") {
		let t = yO(e, "video");
		if (!t) return;
		let { targetElement: n, caption: r } = t, { backgroundColor: i } = hO(e);
		return {
			...Ck(n),
			backgroundColor: i,
			caption: r
		};
	}
}, Ek = $E(wk, (e) => ({
	meta: { fileBlockAccept: ["video/*"] },
	parse: Tk(e),
	render(t, n) {
		let r = document.createElement("div");
		r.innerHTML = e.icon ?? "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 5V19H16V5H8ZM4 5V7H6V5H4ZM18 5V7H20V5H18ZM4 9V11H6V9H4ZM18 9V11H20V9H18ZM4 13V15H6V13H4ZM18 13V15H20V13H18ZM4 17V19H6V17H4ZM18 17V19H20V17H18Z\"></path></svg>";
		let i = document.createElement("div");
		i.className = "bn-visual-media-wrapper";
		let a = document.createElement("video");
		return a.className = "bn-visual-media", n.resolveFileUrl ? n.resolveFileUrl(t.props.url).then((e) => {
			a.src = e;
		}) : a.src = t.props.url, a.controls = !0, a.contentEditable = "false", a.draggable = !1, t.props.previewWidth && (a.width = t.props.previewWidth), i.appendChild(a), YO(t, n, { dom: i }, i, r.firstElementChild);
	},
	toExternalHTML(e) {
		if (!e.props.url) return { dom: document.createElement("video") };
		let t;
		return e.props.showPreview ? (t = document.createElement("video"), t.src = e.props.url, e.props.previewWidth && (t.width = e.props.previewWidth)) : (t = document.createElement("a"), t.href = e.props.url, t.textContent = e.props.name || e.props.url), e.props.caption ? e.props.showPreview ? TO(t, e.props.caption) : EO(t, e.props.caption) : { dom: t };
	},
	runsBefore: ["file"]
}));
function Dk(e, t, n) {
	if (!(t in e.schema.blockSpecs)) return !1;
	if (!n) return !0;
	for (let [r, i] of Object.entries(n)) {
		if (!(r in e.schema.blockSpecs[t].config.propSchema)) return !1;
		if (typeof i == "string") {
			if (e.schema.blockSpecs[t].config.propSchema[r].default !== void 0 && typeof e.schema.blockSpecs[t].config.propSchema[r].default !== i || e.schema.blockSpecs[t].config.propSchema[r].type !== void 0 && e.schema.blockSpecs[t].config.propSchema[r].type !== i) return !1;
		} else {
			if (e.schema.blockSpecs[t].config.propSchema[r].default !== i.default || e.schema.blockSpecs[t].config.propSchema[r].default === void 0 && i.default === void 0 && e.schema.blockSpecs[t].config.propSchema[r].type !== i.type || typeof e.schema.blockSpecs[t].config.propSchema[r].values != typeof i.values) return !1;
			if (typeof e.schema.blockSpecs[t].config.propSchema[r].values == "object" && typeof i.values == "object") {
				for (let n of i.values) if (!e.schema.blockSpecs[t].config.propSchema[r].values.includes(n)) return !1;
			}
		}
	}
	return !0;
}
function Ok(e, t, n, r) {
	return Dk(t, n, r) && e.type === n;
}
function kk(e) {
	return e instanceof K;
}
var Ak = j(({ editor: e }) => {
	let t = Kn(!1), n = () => e.transact((e) => {
		if (e.selection.empty || e.selection instanceof I && e.doc.textBetween(e.selection.from, e.selection.to).length === 0) return !1;
		let t = !1;
		return e.selection.content().content.descendants((e) => (e.type.spec.code && (t = !0), !t)), !t;
	});
	return {
		key: "formattingToolbar",
		store: t,
		mount({ dom: r, signal: i }) {
			let a = !1, o = !1, s = e.onChange(() => {
				a || o || t.setState(n());
			}), c = e.onSelectionChange(() => {
				a || o || t.setState(n());
			});
			r.addEventListener("pointerdown", () => {
				a = !0, t.setState(!1);
			}, { signal: i }), e.prosemirrorView.root.addEventListener("pointerup", () => {
				a = !1, e.isFocused() && t.setState(n());
			}, {
				signal: i,
				capture: !0
			}), r.addEventListener("pointercancel", () => {
				a = !0;
			}, {
				signal: i,
				capture: !0
			}), e.prosemirrorView.root.addEventListener("dragstart", () => {
				o = !0, t.setState(!1);
			}, { signal: i }), e.prosemirrorView.root.addEventListener("dragend", () => {
				o = !1;
			}, { signal: i }), i.addEventListener("abort", () => {
				s(), c();
			});
		}
	};
}), jk = /* @__PURE__ */ new Map();
function Mk(e) {
	if (jk.has(e)) return jk.get(e);
	let t = new Di();
	return e._tiptapEditor.on("transaction", ({ transaction: e }) => {
		t.appendMapping(e.mapping);
	}), e._tiptapEditor.on("destroy", () => {
		jk.delete(e);
	}), jk.set(e, t), t;
}
function Nk(e, t, n = "left") {
	let r = Q.getState(e.prosemirrorState);
	if (!r) {
		let r = Mk(e), i = r.maps.length;
		return () => r.slice(i).map(t, n === "left" ? -1 : 1);
	}
	let i = WT(t + (n === "right" ? 1 : -1), r.binding.type, r.binding.mapping);
	return () => {
		let t = Q.getState(e.prosemirrorState), r = KT(t.doc, t.binding.type, i, t.binding.mapping);
		if (r === null) throw Error("Position not found, cannot track positions");
		return r + (n === "right" ? -1 : 1);
	};
}
var Pk = Xf((e) => e.type.name === "blockContainer"), Fk = class {
	state;
	emitUpdate;
	rootEl;
	pluginState;
	constructor(e, t, n) {
		this.editor = e, this.pluginState = void 0, this.emitUpdate = (e) => {
			if (!this.state) throw Error("Attempting to update uninitialized suggestions menu");
			t(e, {
				...this.state,
				ignoreQueryLength: this.pluginState?.ignoreQueryLength
			});
		}, this.rootEl = n.root, this.rootEl?.addEventListener("scroll", this.handleScroll, !0);
	}
	handleScroll = () => {
		if (this.state?.show) {
			let e = this.rootEl?.querySelector(`[data-decoration-id="${this.pluginState.decorationId}"]`);
			if (!e) return;
			this.state.referencePos = e.getBoundingClientRect().toJSON(), this.emitUpdate(this.pluginState.triggerCharacter);
		}
	};
	update(e, t) {
		let n = Ik.getState(t), r = Ik.getState(e.state), i = n === void 0 && r !== void 0, a = n !== void 0 && r === void 0;
		if (!i && !(n !== void 0 && r !== void 0) && !a) return;
		if (this.pluginState = a ? n : r, a || !this.editor.isEditable) {
			this.state && (this.state.show = !1), this.emitUpdate(this.pluginState.triggerCharacter);
			return;
		}
		let o = this.rootEl?.querySelector(`[data-decoration-id="${this.pluginState.decorationId}"]`);
		this.editor.isEditable && o && (this.state = {
			show: !0,
			referencePos: o.getBoundingClientRect().toJSON(),
			query: this.pluginState.query
		}, this.emitUpdate(this.pluginState.triggerCharacter));
	}
	destroy() {
		this.rootEl?.removeEventListener("scroll", this.handleScroll, !0);
	}
	closeMenu = () => {
		this.editor.transact((e) => e.setMeta(Ik, null));
	};
	clearQuery = () => {
		this.pluginState !== void 0 && this.editor._tiptapEditor.chain().focus().deleteRange({
			from: this.pluginState.queryStartPos() - (this.pluginState.deleteTriggerCharacter ? this.pluginState.triggerCharacter.length : 0),
			to: this.editor.transact((e) => e.selection.from)
		}).run();
	};
}, Ik = new z("SuggestionMenuPlugin"), Lk = j(({ editor: e }) => {
	let t = /* @__PURE__ */ new Map(), n, r = Kn(void 0);
	return {
		key: "suggestionMenu",
		store: r,
		addSuggestionMenu: (e) => {
			t.set(e.triggerCharacter, e);
		},
		removeSuggestionMenu: (e) => {
			t.delete(e);
		},
		closeMenu: () => {
			n?.closeMenu();
		},
		clearQuery: () => {
			n?.clearQuery();
		},
		shown: () => n?.state?.show || !1,
		openSuggestionMenu: (t, n) => {
			e.headless || (e.focus(), e.transact((e) => {
				n?.deleteTriggerCharacter && e.insertText(t), e.scrollIntoView().setMeta(Ik, {
					triggerCharacter: t,
					deleteTriggerCharacter: n?.deleteTriggerCharacter || !1,
					ignoreQueryLength: n?.ignoreQueryLength || !1
				});
			}));
		},
		prosemirrorPlugins: [new R({
			key: Ik,
			view: (t) => (n = new Fk(e, (e, t) => {
				r.setState({
					...t,
					triggerCharacter: e
				});
			}, t), n),
			state: {
				init() {},
				apply: (t, r, i, a) => {
					if (t.selection.$from.parent.type.spec.code) return r;
					let o = t.getMeta(Ik);
					if (typeof o == "object" && o) {
						r && n?.closeMenu();
						let t = Nk(e, a.selection.from - o.triggerCharacter.length);
						return {
							triggerCharacter: o.triggerCharacter,
							deleteTriggerCharacter: o.deleteTriggerCharacter !== !1,
							queryStartPos: () => t() + o.triggerCharacter.length,
							query: "",
							decorationId: `id_${Math.floor(Math.random() * 4294967295)}`,
							ignoreQueryLength: o?.ignoreQueryLength
						};
					}
					if (r === void 0) return r;
					if (a.selection.from !== a.selection.to || o === null || t.getMeta("focus") || t.getMeta("blur") || t.getMeta("pointer") || r.triggerCharacter !== void 0 && a.selection.from < r.queryStartPos() || !a.selection.$from.sameParent(a.doc.resolve(r.queryStartPos()))) return;
					let s = { ...r };
					return s.query = a.doc.textBetween(r.queryStartPos(), a.selection.from), s;
				}
			},
			props: {
				handleTextInput(e, n, r, i) {
					if (n === r) {
						let r = e.state.doc;
						for (let [a, o] of t) {
							let t = a.length > 1 ? r.textBetween(n - a.length, n) + i : i;
							if (a === t) {
								if (o.shouldOpen && !o.shouldOpen(e.state.tr)) continue;
								return e.dispatch(e.state.tr.insertText(i)), e.dispatch(e.state.tr.setMeta(Ik, { triggerCharacter: t }).scrollIntoView()), !0;
							}
						}
					}
					return !1;
				},
				decorations(e) {
					let t = this.getState(e);
					if (t === void 0) return null;
					if (!t.deleteTriggerCharacter) {
						let n = Pk(e.selection);
						if (n) return V.create(e.doc, [B.node(n.pos, n.pos + n.node.nodeSize, {
							nodeName: "span",
							class: "bn-suggestion-decorator",
							"data-decoration-id": t.decorationId
						})]);
					}
					return V.create(e.doc, [B.inline(t.queryStartPos() - t.triggerCharacter.length, t.queryStartPos(), {
						nodeName: "span",
						class: "bn-suggestion-decorator",
						"data-decoration-id": t.decorationId
					})]);
				}
			}
		})]
	};
});
function Rk(e) {
	let t = e.getTextCursorPosition().block, n = e.schema.blockSchema[t.type].content;
	for (; n === "none";) {
		if (t = e.getTextCursorPosition().nextBlock, t === void 0) return;
		n = e.schema.blockSchema[t.type].content, e.setTextCursorPosition(t, "end");
	}
}
function zk(e, t) {
	let n = e.getTextCursorPosition().block;
	if (n.content === void 0) throw Error("Slash Menu open in a block that doesn't contain content.");
	let r;
	return Array.isArray(n.content) && (n.content.length === 1 && kE(n.content[0]) && n.content[0].type === "text" && n.content[0].text === "/" || n.content.length === 0) ? (r = e.updateBlock(n, t), e.setTextCursorPosition(r)) : (r = e.insertBlocks([t], n, "after")[0], e.setTextCursorPosition(e.getTextCursorPosition().nextBlock)), Rk(e), r;
}
function Bk(e) {
	let t = [];
	return Dk(e, "heading", { level: "number" }) && (e.schema.blockSchema.heading.propSchema.level.values || []).filter((e) => e <= 3).forEach((n) => {
		t.push({
			onItemClick: () => {
				zk(e, {
					type: "heading",
					props: { level: n }
				});
			},
			badge: LE(`Mod-Alt-${n}`),
			key: n === 1 ? "heading" : `heading_${n}`,
			...e.dictionary.slash_menu[n === 1 ? "heading" : `heading_${n}`]
		});
	}), Dk(e, "quote") && t.push({
		onItemClick: () => {
			zk(e, { type: "quote" });
		},
		key: "quote",
		...e.dictionary.slash_menu.quote
	}), Dk(e, "toggleListItem") && t.push({
		onItemClick: () => {
			zk(e, { type: "toggleListItem" });
		},
		badge: LE("Mod-Shift-6"),
		key: "toggle_list",
		...e.dictionary.slash_menu.toggle_list
	}), Dk(e, "numberedListItem") && t.push({
		onItemClick: () => {
			zk(e, { type: "numberedListItem" });
		},
		badge: LE("Mod-Shift-7"),
		key: "numbered_list",
		...e.dictionary.slash_menu.numbered_list
	}), Dk(e, "bulletListItem") && t.push({
		onItemClick: () => {
			zk(e, { type: "bulletListItem" });
		},
		badge: LE("Mod-Shift-8"),
		key: "bullet_list",
		...e.dictionary.slash_menu.bullet_list
	}), Dk(e, "checkListItem") && t.push({
		onItemClick: () => {
			zk(e, { type: "checkListItem" });
		},
		badge: LE("Mod-Shift-9"),
		key: "check_list",
		...e.dictionary.slash_menu.check_list
	}), Dk(e, "paragraph") && t.push({
		onItemClick: () => {
			zk(e, { type: "paragraph" });
		},
		badge: LE("Mod-Alt-0"),
		key: "paragraph",
		...e.dictionary.slash_menu.paragraph
	}), Dk(e, "codeBlock") && t.push({
		onItemClick: () => {
			zk(e, { type: "codeBlock" });
		},
		badge: LE("Mod-Alt-c"),
		key: "code_block",
		...e.dictionary.slash_menu.code_block
	}), Dk(e, "divider") && t.push({
		onItemClick: () => {
			zk(e, { type: "divider" });
		},
		key: "divider",
		...e.dictionary.slash_menu.divider
	}), Dk(e, "table") && t.push({
		onItemClick: () => {
			zk(e, {
				type: "table",
				content: {
					type: "tableContent",
					rows: [{ cells: [
						"",
						"",
						""
					] }, { cells: [
						"",
						"",
						""
					] }]
				}
			});
		},
		badge: void 0,
		key: "table",
		...e.dictionary.slash_menu.table
	}), Dk(e, "image", { url: "string" }) && t.push({
		onItemClick: () => {
			let t = zk(e, { type: "image" });
			e.getExtension(bO)?.showMenu(t.id), e.getExtension(Ak)?.store.setState(!1);
		},
		key: "image",
		...e.dictionary.slash_menu.image
	}), Dk(e, "video", { url: "string" }) && t.push({
		onItemClick: () => {
			let t = zk(e, { type: "video" });
			e.getExtension(bO)?.showMenu(t.id), e.getExtension(Ak)?.store.setState(!1);
		},
		key: "video",
		...e.dictionary.slash_menu.video
	}), Dk(e, "audio", { url: "string" }) && t.push({
		onItemClick: () => {
			let t = zk(e, { type: "audio" });
			e.getExtension(bO)?.showMenu(t.id), e.getExtension(Ak)?.store.setState(!1);
		},
		key: "audio",
		...e.dictionary.slash_menu.audio
	}), Dk(e, "file", { url: "string" }) && t.push({
		onItemClick: () => {
			let t = zk(e, { type: "file" });
			e.getExtension(bO)?.showMenu(t.id), e.getExtension(Ak)?.store.setState(!1);
		},
		key: "file",
		...e.dictionary.slash_menu.file
	}), Dk(e, "heading", {
		level: "number",
		isToggleable: "boolean"
	}) && (e.schema.blockSchema.heading.propSchema.level.values || []).filter((e) => e <= 3).forEach((n) => {
		t.push({
			onItemClick: () => {
				zk(e, {
					type: "heading",
					props: {
						level: n,
						isToggleable: !0
					}
				});
			},
			key: n === 1 ? "toggle_heading" : `toggle_heading_${n}`,
			...e.dictionary.slash_menu[n === 1 ? "toggle_heading" : `toggle_heading_${n}`]
		});
	}), Dk(e, "heading", { level: "number" }) && (e.schema.blockSchema.heading.propSchema.level.values || []).filter((e) => e > 3).forEach((n) => {
		t.push({
			onItemClick: () => {
				zk(e, {
					type: "heading",
					props: { level: n }
				});
			},
			badge: LE(`Mod-Alt-${n}`),
			key: `heading_${n}`,
			...e.dictionary.slash_menu[`heading_${n}`]
		});
	}), t.push({
		onItemClick: () => {
			e.getExtension(Lk)?.openSuggestionMenu(":", {
				deleteTriggerCharacter: !0,
				ignoreQueryLength: !0
			});
		},
		key: "emoji",
		...e.dictionary.slash_menu.emoji
	}), t;
}
function Vk(e, t) {
	return e.filter(({ title: e, aliases: n }) => e.toLowerCase().includes(t.toLowerCase()) || n && n.filter((e) => e.toLowerCase().includes(t.toLowerCase())).length !== 0);
}
var Hk = {
	audio: MO(),
	bulletListItem: ok(),
	checkListItem: sk(),
	codeBlock: IO(),
	divider: RO(),
	file: HO(),
	heading: JO(),
	image: tk(),
	numberedListItem: uk(),
	paragraph: fk(),
	quote: pk(),
	table: Sk(),
	toggleListItem: dk(),
	video: Ek()
}, Uk = ED({
	type: "textColor",
	propSchema: "string"
}, {
	render: () => {
		let e = document.createElement("span");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML: (e) => {
		let t = document.createElement("span");
		return e !== $.textColor.default && (t.style.color = e in mO ? mO[e].text : e), {
			dom: t,
			contentDOM: t
		};
	},
	parse: (e) => {
		if (e.tagName === "SPAN" && e.style.color) return e.style.color;
	}
}), Wk = ED({
	type: "backgroundColor",
	propSchema: "string"
}, {
	render: () => {
		let e = document.createElement("span");
		return {
			dom: e,
			contentDOM: e
		};
	},
	toExternalHTML: (e) => {
		let t = document.createElement("span");
		return e !== $.backgroundColor.default && (t.style.backgroundColor = e in mO ? mO[e].background : e), {
			dom: t,
			contentDOM: t
		};
	},
	parse: (e) => {
		if (e.tagName === "SPAN" && e.style.backgroundColor) return e.style.backgroundColor;
	}
}), Gk = {
	bold: CD(dE, "boolean"),
	italic: CD(yE, "boolean"),
	underline: CD(CE, "boolean"),
	strike: CD(SE, "boolean"),
	code: CD(mE.extend({ addInputRules() {
		return [nh({
			find: /(^|[^`])`([^`]+)`(?!`)$/,
			type: this.type
		}), new Om({
			find: /(^|[^`])`([^`]+)`(?!`) $/,
			handler: ({ state: e, range: t, match: n }) => {
				let { tr: r, schema: i } = e, a = n[1], o = n[2];
				r.replaceWith(t.from + a.length, t.to, [i.text(o, [this.type.create()]), i.text(" ")]);
			}
		})];
	} }), "boolean"),
	textColor: Uk,
	backgroundColor: Wk
};
wD(Gk);
var Kk = {
	text: {
		config: "text",
		implementation: {}
	},
	link: {
		config: "link",
		implementation: {}
	}
}, qk = yD(Kk), Jk = class e extends ID {
	static create(t) {
		return new e({
			blockSpecs: t?.blockSpecs ?? Hk,
			inlineContentSpecs: t?.inlineContentSpecs ?? Kk,
			styleSpecs: t?.styleSpecs ?? Gk
		});
	}
}, Yk = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})))(), 1), Xk = 200, Zk = function() {};
Zk.prototype.append = function(e) {
	return e.length ? (e = Zk.from(e), !this.length && e || e.length < Xk && this.leafAppend(e) || this.length < Xk && e.leafPrepend(this) || this.appendInner(e)) : this;
}, Zk.prototype.prepend = function(e) {
	return e.length ? Zk.from(e).append(this) : this;
}, Zk.prototype.appendInner = function(e) {
	return new $k(this, e);
}, Zk.prototype.slice = function(e, t) {
	return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Zk.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
}, Zk.prototype.get = function(e) {
	if (!(e < 0 || e >= this.length)) return this.getInner(e);
}, Zk.prototype.forEach = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length), t <= n ? this.forEachInner(e, t, n, 0) : this.forEachInvertedInner(e, t, n, 0);
}, Zk.prototype.map = function(e, t, n) {
	t === void 0 && (t = 0), n === void 0 && (n = this.length);
	var r = [];
	return this.forEach(function(t, n) {
		return r.push(e(t, n));
	}, t, n), r;
}, Zk.from = function(e) {
	return e instanceof Zk ? e : e && e.length ? new Qk(e) : Zk.empty;
};
var Qk = /* @__PURE__ */ function(e) {
	function t(t) {
		e.call(this), this.values = t;
	}
	e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
	var n = {
		length: { configurable: !0 },
		depth: { configurable: !0 }
	};
	return t.prototype.flatten = function() {
		return this.values;
	}, t.prototype.sliceInner = function(e, n) {
		return e == 0 && n == this.length ? this : new t(this.values.slice(e, n));
	}, t.prototype.getInner = function(e) {
		return this.values[e];
	}, t.prototype.forEachInner = function(e, t, n, r) {
		for (var i = t; i < n; i++) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		for (var i = t - 1; i >= n; i--) if (e(this.values[i], r + i) === !1) return !1;
	}, t.prototype.leafAppend = function(e) {
		if (this.length + e.length <= Xk) return new t(this.values.concat(e.flatten()));
	}, t.prototype.leafPrepend = function(e) {
		if (this.length + e.length <= Xk) return new t(e.flatten().concat(this.values));
	}, n.length.get = function() {
		return this.values.length;
	}, n.depth.get = function() {
		return 0;
	}, Object.defineProperties(t.prototype, n), t;
}(Zk);
Zk.empty = new Qk([]);
var $k = /* @__PURE__ */ function(e) {
	function t(t, n) {
		e.call(this), this.left = t, this.right = n, this.length = t.length + n.length, this.depth = Math.max(t.depth, n.depth) + 1;
	}
	return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.flatten = function() {
		return this.left.flatten().concat(this.right.flatten());
	}, t.prototype.getInner = function(e) {
		return e < this.left.length ? this.left.get(e) : this.right.get(e - this.left.length);
	}, t.prototype.forEachInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t < i && this.left.forEachInner(e, t, Math.min(n, i), r) === !1 || n > i && this.right.forEachInner(e, Math.max(t - i, 0), Math.min(this.length, n) - i, r + i) === !1) return !1;
	}, t.prototype.forEachInvertedInner = function(e, t, n, r) {
		var i = this.left.length;
		if (t > i && this.right.forEachInvertedInner(e, t - i, Math.max(n, i) - i, r + i) === !1 || n < i && this.left.forEachInvertedInner(e, Math.min(t, i), n, r) === !1) return !1;
	}, t.prototype.sliceInner = function(e, t) {
		if (e == 0 && t == this.length) return this;
		var n = this.left.length;
		return t <= n ? this.left.slice(e, t) : e >= n ? this.right.slice(e - n, t - n) : this.left.slice(e, n).append(this.right.slice(0, t - n));
	}, t.prototype.leafAppend = function(e) {
		var n = this.right.leafAppend(e);
		if (n) return new t(this.left, n);
	}, t.prototype.leafPrepend = function(e) {
		var n = this.left.leafPrepend(e);
		if (n) return new t(n, this.right);
	}, t.prototype.appendInner = function(e) {
		return this.left.depth >= Math.max(this.right.depth, e.depth) + 1 ? new t(this.left, new t(this.right, e)) : new t(this, e);
	}, t;
}(Zk), eA = 500, tA = class e {
	constructor(e, t) {
		this.items = e, this.eventCount = t;
	}
	popEvent(t, n) {
		if (this.eventCount == 0) return null;
		let r = this.items.length;
		for (;; r--) if (this.items.get(r - 1).selection) {
			--r;
			break;
		}
		let i, a;
		n && (i = this.remapping(r, this.items.length), a = i.maps.length);
		let o = t.tr, s, c, l = [], u = [];
		return this.items.forEach((t, n) => {
			if (!t.step) {
				i || (i = this.remapping(r, n + 1), a = i.maps.length), a--, u.push(t);
				return;
			}
			if (i) {
				u.push(new rA(t.map));
				let e = t.step.map(i.slice(a)), n;
				e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new rA(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a);
			} else o.maybeStep(t.step);
			if (t.selection) return s = i ? t.selection.map(i.slice(a)) : t.selection, c = new e(this.items.slice(0, r).append(u.reverse().concat(l)), this.eventCount - 1), !1;
		}, this.items.length, 0), {
			remaining: c,
			transform: o,
			selection: s
		};
	}
	addTransform(t, n, r, i) {
		let a = [], o = this.eventCount, s = this.items, c = !i && s.length ? s.get(s.length - 1) : null;
		for (let e = 0; e < t.steps.length; e++) {
			let r = t.steps[e].invert(t.docs[e]), l = new rA(t.mapping.maps[e], r, n), u;
			(u = c && c.merge(l)) && (l = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(l), n &&= (o++, void 0), i || (c = l);
		}
		let l = o - r.depth;
		return l > aA && (s = nA(s, l), o -= l), new e(s.append(a), o);
	}
	remapping(e, t) {
		let n = new Di();
		return this.items.forEach((t, r) => {
			let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
			n.appendMap(t.map, i);
		}, e, t), n;
	}
	addMaps(t) {
		return this.eventCount == 0 ? this : new e(this.items.append(t.map((e) => new rA(e))), this.eventCount);
	}
	rebased(t, n) {
		if (!this.eventCount) return this;
		let r = [], i = Math.max(0, this.items.length - n), a = t.mapping, o = t.steps.length, s = this.eventCount;
		this.items.forEach((e) => {
			e.selection && s--;
		}, i);
		let c = n;
		this.items.forEach((e) => {
			let n = a.getMirror(--c);
			if (n == null) return;
			o = Math.min(o, n);
			let i = a.maps[n];
			if (e.step) {
				let o = t.steps[n].invert(t.docs[n]), l = e.selection && e.selection.map(a.slice(c + 1, n));
				l && s++, r.push(new rA(i, o, l));
			} else r.push(new rA(i));
		}, i);
		let l = [];
		for (let e = n; e < o; e++) l.push(new rA(a.maps[e]));
		let u = new e(this.items.slice(0, i).append(l).append(r), s);
		return u.emptyItemCount() > eA && (u = u.compress(this.items.length - r.length)), u;
	}
	emptyItemCount() {
		let e = 0;
		return this.items.forEach((t) => {
			t.step || e++;
		}), e;
	}
	compress(t = this.items.length) {
		let n = this.remapping(0, t), r = n.maps.length, i = [], a = 0;
		return this.items.forEach((e, o) => {
			if (o >= t) i.push(e), e.selection && a++;
			else if (e.step) {
				let t = e.step.map(n.slice(r)), o = t && t.getMap();
				if (r--, o && n.appendMap(o, r), t) {
					let s = e.selection && e.selection.map(n.slice(r));
					s && a++;
					let c = new rA(o.invert(), t, s), l, u = i.length - 1;
					(l = i.length && i[u].merge(c)) ? i[u] = l : i.push(c);
				}
			} else e.map && r--;
		}, this.items.length, 0), new e(Zk.from(i.reverse()), a);
	}
};
tA.empty = new tA(Zk.empty, 0);
function nA(e, t) {
	let n;
	return e.forEach((e, r) => {
		if (e.selection && t-- == 0) return n = r, !1;
	}), e.slice(n);
}
var rA = class e {
	constructor(e, t, n, r) {
		this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r;
	}
	merge(t) {
		if (this.step && t.step && !t.selection) {
			let n = t.step.merge(this.step);
			if (n) return new e(n.getMap().invert(), n, this.selection);
		}
	}
}, iA = class {
	constructor(e, t, n, r, i) {
		this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i;
	}
}, aA = 20;
function oA(e, t, n, r) {
	let i = n.getMeta(hA), a;
	if (i) return i.historyState;
	n.getMeta(gA) && (e = new iA(e.done, e.undone, null, 0, -1));
	let o = n.getMeta("appendedTransaction");
	if (n.steps.length == 0) return e;
	if (o && o.getMeta(hA)) return o.getMeta(hA).redo ? new iA(e.done.addTransform(n, void 0, r, pA(t)), e.undone, cA(n.mapping.maps), e.prevTime, e.prevComposition) : new iA(e.done, e.undone.addTransform(n, void 0, r, pA(t)), null, e.prevTime, e.prevComposition);
	if (n.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
		let i = n.getMeta("composition"), a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !sA(n, e.prevRanges)), s = o ? lA(e.prevRanges, n.mapping) : cA(n.mapping.maps);
		return new iA(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, pA(t)), tA.empty, s, n.time, i ?? e.prevComposition);
	} else if (a = n.getMeta("rebased")) return new iA(e.done.rebased(n, a), e.undone.rebased(n, a), lA(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
	else return new iA(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), lA(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
}
function sA(e, t) {
	if (!t) return !1;
	if (!e.docChanged) return !0;
	let n = !1;
	return e.mapping.maps[0].forEach((e, r) => {
		for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0);
	}), n;
}
function cA(e) {
	let t = [];
	for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
	return t;
}
function lA(e, t) {
	if (!e) return null;
	let n = [];
	for (let r = 0; r < e.length; r += 2) {
		let i = t.map(e[r], 1), a = t.map(e[r + 1], -1);
		i <= a && n.push(i, a);
	}
	return n;
}
function uA(e, t, n) {
	let r = pA(t), i = hA.get(t).spec.config, a = (n ? e.undone : e.done).popEvent(t, r);
	if (!a) return null;
	let o = a.selection.resolve(a.transform.doc), s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r), c = new iA(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
	return a.transform.setSelection(o).setMeta(hA, {
		redo: n,
		historyState: c
	});
}
var dA = !1, fA = null;
function pA(e) {
	let t = e.plugins;
	if (fA != t) {
		dA = !1, fA = t;
		for (let e = 0; e < t.length; e++) if (t[e].spec.historyPreserveItems) {
			dA = !0;
			break;
		}
	}
	return dA;
}
function mA(e) {
	return e.setMeta(gA, !0);
}
var hA = new z("history"), gA = new z("closeHistory");
function _A(e = {}) {
	return e = {
		depth: e.depth || 100,
		newGroupDelay: e.newGroupDelay || 500
	}, new R({
		key: hA,
		state: {
			init() {
				return new iA(tA.empty, tA.empty, null, 0, -1);
			},
			apply(t, n, r) {
				return oA(n, r, t, e);
			}
		},
		config: e,
		props: { handleDOMEvents: { beforeinput(e, t) {
			let n = t.inputType, r = n == "historyUndo" ? yA : n == "historyRedo" ? bA : null;
			return !r || !e.editable ? !1 : (t.preventDefault(), r(e.state, e.dispatch));
		} } }
	});
}
function vA(e, t) {
	return (n, r) => {
		let i = hA.getState(n);
		if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
		if (r) {
			let a = uA(i, n, e);
			a && r(t ? a.scrollIntoView() : a);
		}
		return !0;
	};
}
var yA = vA(!1, !0), bA = vA(!0, !0);
//#endregion
//#region node_modules/@blocknote/core/dist/extensions-Co4y7P63.js
function xA(e) {
	let t = Array.from(e.classList).filter((e) => !e.startsWith("bn-")) || [];
	t.length > 0 ? e.className = t.join(" ") : e.removeAttribute("class");
}
function SA(e, t, n, r) {
	let i;
	if (!t) throw Error("blockContent is required");
	if (typeof t == "string") i = tO([t], e.pmSchema, r?.blockType);
	else if (Array.isArray(t)) i = tO(t, e.pmSchema, r?.blockType);
	else if (t.type === "tableContent") i = nO(t, e.pmSchema);
	else throw new FE(t.type);
	let a = (r?.document ?? document).createDocumentFragment();
	for (let t of i) if (t.type.name !== "text" && e.schema.inlineContentSchema[t.type.name]) {
		let i = e.schema.inlineContentSpecs[t.type.name].implementation;
		if (i) {
			let o = hD(t, e.schema.inlineContentSchema, e.schema.styleSchema), s = i.toExternalHTML ? i.toExternalHTML(o, e) : i.render.call({
				renderType: "dom",
				props: void 0
			}, o, () => {}, e);
			if (s) {
				if (a.appendChild(s.dom), s.contentDOM) {
					let e = n.serializeFragment(t.content, r);
					s.contentDOM.dataset.editable = "", s.contentDOM.appendChild(e);
				}
				continue;
			}
		}
	} else if (t.type.name === "text") {
		let n = document.createTextNode(t.textContent);
		for (let r of t.marks.toReversed()) if (r.type.name in e.schema.styleSpecs) {
			let t = (e.schema.styleSpecs[r.type.name].implementation.toExternalHTML ?? e.schema.styleSpecs[r.type.name].implementation.render)(r.attrs.stringValue, e);
			t.contentDOM.appendChild(n), n = t.dom;
		} else {
			let e = r.type.spec.toDOM(r, !0), t = li.renderSpec(document, e);
			t.contentDOM.appendChild(n), n = t.dom;
		}
		a.appendChild(n);
	} else {
		let e = n.serializeFragment(M.from([t]), r);
		a.appendChild(e);
	}
	return a.childNodes.length === 1 && a.firstChild?.nodeType === 1 && xA(a.firstChild), a;
}
function CA(e, t, n, r, i, a, o, s) {
	let c = s?.document ?? document, l = t.pmSchema.nodes.blockContainer, u = n.props || {};
	for (let [e, r] of Object.entries(t.schema.blockSchema[n.type].propSchema)) !(e in u) && r.default !== void 0 && (u[e] = r.default);
	let d = l.spec?.toDOM?.(l.create({
		id: n.id,
		...u
	})), f = Array.from(d.dom.attributes), p = t.blockImplementations[n.type].implementation, m = p.toExternalHTML?.call({}, {
		...n,
		props: u
	}, t, { nestingLevel: o }) || p.render.call({}, {
		...n,
		props: u
	}, t), h = c.createDocumentFragment();
	if (m.dom.classList.contains("bn-block-content")) {
		let e = [...f, ...Array.from(m.dom.attributes)].filter((e) => e.name.startsWith("data") && e.name !== "data-content-type" && e.name !== "data-file-block" && e.name !== "data-node-view-wrapper" && e.name !== "data-node-type" && e.name !== "data-id" && e.name !== "data-editable");
		for (let t of e) m.dom.firstChild.setAttribute(t.name, t.value);
		xA(m.dom.firstChild), o > 0 && m.dom.firstChild.setAttribute("data-nesting-level", o.toString()), h.append(...Array.from(m.dom.childNodes));
	} else h.append(m.dom), o > 0 && m.dom.setAttribute("data-nesting-level", o.toString());
	if (m.contentDOM && n.content) {
		let e = SA(t, n.content, r, {
			...s,
			blockType: n.type
		});
		m.contentDOM.appendChild(e);
	}
	let g;
	if (i.has(n.type) ? g = "OL" : a.has(n.type) && (g = "UL"), g) {
		if (e.lastChild?.nodeName !== g) {
			let t = c.createElement(g);
			g === "OL" && "start" in u && u.start && u?.start !== 1 && t.setAttribute("start", u.start + ""), e.append(t);
		}
		e.lastChild.appendChild(h);
	} else e.append(h);
	if (n.children && n.children.length > 0) {
		let l = c.createDocumentFragment();
		if (wA(l, t, n.children, r, i, a, o + 1, s), e.lastChild?.nodeName === "UL" || e.lastChild?.nodeName === "OL") for (; l.firstChild?.nodeName === "UL" || l.firstChild?.nodeName === "OL";) e.lastChild.lastChild.appendChild(l.firstChild);
		"childrenDOM" in m && m.childrenDOM ? m.childrenDOM.append(l) : t.pmSchema.nodes[n.type].isInGroup("blockContent") ? e.append(l) : m.contentDOM?.append(l);
	}
}
var wA = (e, t, n, r, i, a, o = 0, s) => {
	for (let c of n) CA(e, t, c, r, i, a, o, s);
}, TA = (e, t, n, r, i, a) => {
	let o = (a?.document ?? document).createDocumentFragment();
	return wA(o, e, t, n, r, i, 0, a), o;
}, EA = (e, t) => {
	let n = li.fromSchema(e);
	return {
		exportBlocks: (e, r) => {
			let i = TA(t, e, n, /* @__PURE__ */ new Set(["numberedListItem"]), /* @__PURE__ */ new Set([
				"bulletListItem",
				"checkListItem",
				"toggleListItem"
			]), r), a = document.createElement("div");
			return a.append(i), a.innerHTML;
		},
		exportInlineContent: (e, r) => {
			let i = SA(t, e, n, r), a = document.createElement("div");
			return a.append(i.cloneNode(!0)), a.innerHTML;
		}
	};
};
function DA(e, t) {
	if (t === 0) return;
	let n = e.resolve(t);
	for (let e = n.depth; e > 0; e--) {
		let t = n.node(e);
		if (oO(t)) return t.attrs.id;
	}
}
function OA(e) {
	return e.getMeta("paste") ? { type: "paste" } : e.getMeta("uiEvent") === "drop" ? { type: "drop" } : e.getMeta("history$") ? { type: e.getMeta("history$").redo ? "redo" : "undo" } : e.getMeta("y-sync$") ? e.getMeta("y-sync$").isUndoRedoOperation ? { type: "undo-redo" } : { type: "yjs-remote" } : { type: "local" };
}
function kA(e) {
	let t = {}, n = {}, r = oD(e);
	return e.descendants((i, a) => {
		if (!oO(i)) return !0;
		let o = DA(e, a), s = o ?? "__root__";
		n[s] || (n[s] = []);
		let c = gD(i, r);
		return t[i.attrs.id] = {
			block: c,
			parentId: o
		}, n[s].push(i.attrs.id), !0;
	}), {
		byId: t,
		childrenByParent: n
	};
}
function AA(e, t) {
	let n = /* @__PURE__ */ new Set();
	if (!e || !t) return n;
	let r = new Set(e), i = t.filter((e) => r.has(e)), a = e.filter((e) => i.includes(e));
	if (a.length <= 1 || i.length <= 1) return n;
	let o = {};
	for (let e = 0; e < a.length; e++) o[a[e]] = e;
	let s = i.map((e) => o[e]), c = s.length, l = [], u = [], d = Array(c).fill(-1), f = (e, t) => {
		let n = 0, r = e.length;
		for (; n < r;) {
			let i = n + r >>> 1;
			e[i] < t ? n = i + 1 : r = i;
		}
		return n;
	};
	for (let e = 0; e < c; e++) {
		let t = s[e], n = f(l, t);
		n > 0 && (d[e] = u[n - 1]), n === l.length ? (l.push(t), u.push(e)) : (l[n] = t, u[n] = e);
	}
	let p = /* @__PURE__ */ new Set(), m = u[u.length - 1] ?? -1;
	for (; m !== -1;) p.add(m), m = d[m];
	for (let e = 0; e < i.length; e++) p.has(e) || n.add(i[e]);
	return n;
}
function jA(e, t = []) {
	let n = OA(e), r = qf(e.before, [e, ...t]), i = kA(r.before), a = kA(r.doc), o = [], s = /* @__PURE__ */ new Set();
	Object.keys(a.byId).filter((e) => !(e in i.byId)).forEach((e) => {
		o.push({
			type: "insert",
			block: a.byId[e].block,
			source: n,
			prevBlock: void 0
		}), s.add(e);
	}), Object.keys(i.byId).filter((e) => !(e in a.byId)).forEach((e) => {
		o.push({
			type: "delete",
			block: i.byId[e].block,
			source: n,
			prevBlock: void 0
		}), s.add(e);
	}), Object.keys(a.byId).filter((e) => e in i.byId).forEach((e) => {
		let t = i.byId[e], r = a.byId[e];
		t.parentId === r.parentId ? (0, Yk.default)({
			...t.block,
			children: void 0
		}, {
			...r.block,
			children: void 0
		}) || (o.push({
			type: "update",
			block: r.block,
			prevBlock: t.block,
			source: n
		}), s.add(e)) : (o.push({
			type: "move",
			block: r.block,
			prevBlock: t.block,
			source: n,
			prevParent: t.parentId ? i.byId[t.parentId]?.block : void 0,
			currentParent: r.parentId ? a.byId[r.parentId]?.block : void 0
		}), s.add(e));
	});
	let c = i.childrenByParent, l = a.childrenByParent, u = /* @__PURE__ */ new Set([...Object.keys(c), ...Object.keys(l)]), d = /* @__PURE__ */ new Set();
	return u.forEach((e) => {
		let t = AA(c[e], l[e]);
		t.size !== 0 && t.forEach((t) => {
			let r = i.byId[t], c = a.byId[t];
			!r || !c || r.parentId === c.parentId && (s.has(t) || (r.parentId ?? "__root__") === e && (d.has(t) || (d.add(t), o.push({
				type: "move",
				block: c.block,
				prevBlock: r.block,
				source: n,
				prevParent: r.parentId ? i.byId[r.parentId]?.block : void 0,
				currentParent: c.parentId ? a.byId[c.parentId]?.block : void 0
			}), s.add(t))));
		});
	}), o;
}
var MA = j(() => {
	let e = [];
	return {
		key: "blockChange",
		prosemirrorPlugins: [new R({
			key: new z("blockChange"),
			filterTransaction: (t) => {
				let n;
				return e.reduce((e, r) => e === !1 ? e : r({
					getChanges() {
						return n || (n = jA(t), n);
					},
					tr: t
				}) !== !1, !0);
			}
		})],
		subscribe(t) {
			return e.push(t), () => {
				e.splice(e.indexOf(t), 1);
			};
		}
	};
});
function NA(e) {
	let t = e.charAt(0) === "#" ? e.substring(1, 7) : e, n = parseInt(t.substring(0, 2), 16), r = parseInt(t.substring(2, 4), 16), i = parseInt(t.substring(4, 6), 16), a = [
		n / 255,
		r / 255,
		i / 255
	].map((e) => e <= .03928 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4);
	return .2126 * a[0] + .7152 * a[1] + .0722 * a[2] <= .179;
}
function PA(e) {
	let t = document.createElement("span");
	t.classList.add("bn-collaboration-cursor__base");
	let n = document.createElement("span");
	n.setAttribute("contentedEditable", "false"), n.classList.add("bn-collaboration-cursor__caret"), n.setAttribute("style", `background-color: ${e.color}; color: ${NA(e.color) ? "white" : "black"}`);
	let r = document.createElement("span");
	return r.classList.add("bn-collaboration-cursor__label"), r.setAttribute("style", `background-color: ${e.color}; color: ${NA(e.color) ? "white" : "black"}`), r.insertBefore(document.createTextNode(e.name), null), n.insertBefore(r, null), t.insertBefore(document.createTextNode("⁠"), null), t.insertBefore(n, null), t.insertBefore(document.createTextNode("⁠"), null), t;
}
var FA = j(({ options: e }) => {
	let t = /* @__PURE__ */ new Map(), n = e.provider && "awareness" in e.provider && typeof e.provider.awareness == "object" ? e.provider.awareness : void 0;
	return n && ("setLocalStateField" in n && typeof n.setLocalStateField == "function" && n.setLocalStateField("user", e.user), "on" in n && typeof n.on == "function" && e.showCursorLabels !== "always" && n.on("change", ({ updated: e }) => {
		for (let n of e) {
			let e = t.get(n);
			e && (setTimeout(() => {
				e.element.setAttribute("data-active", "");
			}, 10), e.hideTimeout && clearTimeout(e.hideTimeout), t.set(n, {
				element: e.element,
				hideTimeout: setTimeout(() => {
					e.element.removeAttribute("data-active");
				}, 2e3)
			}));
		}
	})), {
		key: "yCursor",
		prosemirrorPlugins: [n ? QT(n, {
			selectionBuilder: YT,
			cursorBuilder(n, r) {
				let i = t.get(r);
				if (!i) {
					let a = (e.renderCursor ?? PA)(n);
					e.showCursorLabels !== "always" && (a.addEventListener("mouseenter", () => {
						let e = t.get(r);
						e.element.setAttribute("data-active", ""), e.hideTimeout && (clearTimeout(e.hideTimeout), t.set(r, {
							element: e.element,
							hideTimeout: void 0
						}));
					}), a.addEventListener("mouseleave", () => {
						let e = t.get(r);
						t.set(r, {
							element: e.element,
							hideTimeout: setTimeout(() => {
								e.element.removeAttribute("data-active");
							}, 2e3)
						});
					})), i = {
						element: a,
						hideTimeout: void 0
					}, t.set(r, i);
				}
				return i.element;
			}
		}) : void 0].filter(Boolean),
		dependsOn: ["ySync"],
		updateUser(e) {
			n?.setLocalStateField("user", e);
		}
	};
}), IA = j(({ options: e }) => ({
	key: "ySync",
	prosemirrorPlugins: [gT(e.fragment)],
	runsBefore: ["default"]
})), LA = j(() => ({
	key: "yUndo",
	prosemirrorPlugins: [aE()],
	dependsOn: ["yCursor", "ySync"],
	undoCommand: tE,
	redoCommand: nE
}));
function RA(e, t) {
	let n = e.doc;
	if (e._item === null) {
		let r = Array.from(n.share.keys()).find((t) => n.share.get(t) === e);
		if (r == null) throw Error("type does not exist in other ydoc");
		return t.get(r, e.constructor);
	} else {
		let n = e._item, r = t.store.clients.get(n.id.client) ?? [];
		return r[yS(r, n.id.clock)].content.type;
	}
}
var zA = j(({ editor: e, options: t }) => {
	let n, r = Kn({ isForked: !1 });
	return {
		key: "yForkDoc",
		store: r,
		fork() {
			if (n) return;
			let i = t.fragment;
			if (!i) throw Error("No fragment to fork from");
			let a = new bx();
			Ix(a, zx(i.doc));
			let o = RA(i, a);
			n = {
				undoStack: eT.getState(e.prosemirrorState).undoManager.undoStack,
				originalFragment: i,
				forkedFragment: o
			}, e.unregisterExtension([
				LA,
				FA,
				IA
			]);
			let s = {
				...t,
				fragment: o
			};
			e.registerExtension([IA(s), LA()]), r.setState({ isForked: !0 });
		},
		merge({ keepChanges: i }) {
			if (!n) return;
			e.unregisterExtension([
				"ySync",
				"yCursor",
				"yUndo"
			]);
			let { originalFragment: a, forkedFragment: o, undoStack: s } = n;
			if (e.registerExtension([
				IA(t),
				FA(t),
				LA()
			]), eT.getState(e.prosemirrorState).undoManager.undoStack = s, i) {
				let t = zx(o.doc, Gx(a.doc));
				Ix(a.doc, t, e);
			}
			n = void 0, r.setState({ isForked: !1 });
		}
	};
}), BA = (e, t) => {
	t(e), e.forEach((e) => {
		e instanceof tw && BA(e, t);
	});
}, VA = [(e, t) => {
	let n = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		e instanceof tw && BA(e, (e) => {
			if (e.nodeName === "blockContainer" && e.hasAttribute("id")) {
				let t = e.getAttribute("textColor"), r = e.getAttribute("backgroundColor"), i = {
					textColor: t === $.textColor.default ? void 0 : t,
					backgroundColor: r === $.backgroundColor.default ? void 0 : r
				};
				(i.textColor || i.backgroundColor) && n.set(e.getAttribute("id"), i);
			}
		});
	}), n.size === 0 ? !1 : (t.doc.descendants((e, r) => {
		if (e.type.name === "blockContainer" && n.has(e.attrs.id)) {
			let i = t.doc.nodeAt(r + 1);
			if (!i) throw Error("No element found");
			t.setNodeMarkup(r + 1, void 0, {
				...i.attrs,
				...n.get(e.attrs.id)
			});
		}
	}), !0);
}], HA = j(({ options: e }) => {
	let t = !1;
	return {
		key: "schemaMigration",
		prosemirrorPlugins: [new R({
			key: new z("schemaMigration"),
			appendTransaction: (n, r, i) => {
				if (t || !n.some((e) => e.getMeta("y-sync$")) || n.every((e) => !e.docChanged) || !e.fragment.firstChild) return;
				let a = i.tr;
				for (let t of VA) t(e.fragment, a);
				if (t = !0, a.docChanged) return a;
			}
		})]
	};
});
function UA(e, t) {
	return !e || !t ? !1 : !!e.closest(`.${t}`);
}
function WA(e, t, n, r, i) {
	let a = e.state.doc.resolve(t.pos);
	if (a.parent.inlineContent || t.orientation === "inline") return null;
	let o = a.nodeBefore, s = a.nodeAfter;
	if (!o && !s) return null;
	let c = t.orientation === "block-vertical-left" || t.orientation === "block-vertical-right", l = c ? t.pos : t.pos - (o ? o.nodeSize : 0), u = e.nodeDOM(l);
	if (!u) return null;
	let d = u.getBoundingClientRect();
	if (c) {
		let e = n / 2 * r, i = t.orientation === "block-vertical-left" ? d.left : d.right;
		return {
			left: i - e,
			right: i + e,
			top: d.top,
			bottom: d.bottom
		};
	}
	let f = o ? d.bottom : d.top;
	o && s && (f = (f + e.nodeDOM(t.pos).getBoundingClientRect().top) / 2);
	let p = n / 2 * i;
	return {
		left: d.left,
		right: d.right,
		top: f - p,
		bottom: f + p
	};
}
function GA(e, t, n, r) {
	let i = e.coordsAtPos(t.pos), a = n / 2 * r;
	return {
		left: i.left - a,
		right: i.left + a,
		top: i.top,
		bottom: i.bottom
	};
}
function KA(e, t) {
	e.classList.toggle("prosemirror-dropcursor-inline", t === "inline"), e.classList.toggle("prosemirror-dropcursor-block-horizontal", t === "block-horizontal"), e.classList.toggle("prosemirror-dropcursor-block-vertical-left", t === "block-vertical-left"), e.classList.toggle("prosemirror-dropcursor-block-vertical-right", t === "block-vertical-right"), e.classList.toggle("prosemirror-dropcursor-block", t === "block-horizontal"), e.classList.toggle("prosemirror-dropcursor-vertical", t === "block-vertical-left" || t === "block-vertical-right");
}
function qA(e) {
	if (!e || e === document.body && getComputedStyle(e).position === "static") return {
		parentLeft: -window.pageXOffset,
		parentTop: -window.pageYOffset
	};
	let t = e.getBoundingClientRect(), n = t.width / e.offsetWidth, r = t.height / e.offsetHeight;
	return {
		parentLeft: t.left - e.scrollLeft * n,
		parentTop: t.top - e.scrollTop * r
	};
}
var JA = j(({ editor: e, options: t }) => {
	let n = null, r = null, i = -1, a = null, o = {
		width: t.dropCursor?.width ?? 5,
		color: t.dropCursor?.color ?? "#ddeeff",
		exclude: t.dropCursor?.exclude ?? "bn-drag-exclude",
		hooks: t.dropCursor?.hooks
	}, s = (e) => {
		e?.pos === n?.pos && e?.orientation === n?.orientation || (n = e, e == null ? (r && r.parentNode && r.parentNode.removeChild(r), r = null) : c());
	}, c = () => {
		if (!n) return;
		let t = e.prosemirrorView, i = t.dom, a = i.getBoundingClientRect(), s = a.width / i.offsetWidth, c = a.height / i.offsetHeight, l = WA(t, n, o.width, s, c) ?? GA(t, n, o.width, s), u = t.dom.offsetParent;
		r || (r = u.appendChild(document.createElement("div")), r.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", o.color && (r.style.backgroundColor = o.color)), KA(r, n.orientation);
		let { parentLeft: d, parentTop: f } = qA(u);
		r.style.left = (l.left - d) / s + "px", r.style.top = (l.top - f) / c + "px", r.style.width = (l.right - l.left) / s + "px", r.style.height = (l.bottom - l.top) / c + "px";
	}, l = (e) => {
		clearTimeout(i), i = window.setTimeout(() => s(null), e);
	}, u = (e) => {
		let t = e;
		a = t.target instanceof Element ? t.target : null;
	}, d = (t) => {
		let n = t;
		if (a && UA(a, o.exclude) || n.target instanceof Element && UA(n.target, o.exclude)) return;
		let r = e.prosemirrorView;
		if (!r.editable) return;
		let i = r.posAtCoords({
			left: n.clientX,
			top: n.clientY
		}), c = i && i.inside >= 0 && r.state.doc.nodeAt(i.inside), u = c && c.type.spec.disableDropCursor, d = typeof u == "function" ? u(r, i, n) : u;
		if (i && !d) {
			let t = i.pos;
			if (r.dragging && r.dragging.slice) {
				let e = la(r.state.doc, t, r.dragging.slice);
				e != null && (t = e);
			}
			let a = !r.state.doc.resolve(t).parent.inlineContent, c = {
				pos: t,
				orientation: a ? "block-horizontal" : "inline"
			}, u = c;
			if (o.hooks?.computeDropPosition) {
				let t = o.hooks.computeDropPosition({
					editor: e,
					event: n,
					view: r,
					defaultPosition: c
				});
				if (t === null) {
					s(null);
					return;
				}
				u = t;
			}
			s(u), l(5e3);
		}
	}, f = (t) => {
		let n = t;
		(!(n.relatedTarget instanceof Node) || !e.prosemirrorView.dom.contains(n.relatedTarget)) && s(null);
	}, p = () => {
		l(20);
	}, m = () => {
		l(20), a = null;
	};
	return {
		key: "dropCursor",
		mount({ signal: e, dom: t, root: n }) {
			n.addEventListener("dragstart", u, {
				capture: !0,
				signal: e
			}), t.addEventListener("dragover", d, { signal: e }), t.addEventListener("dragleave", f, { signal: e }), t.addEventListener("drop", p, { signal: e }), t.addEventListener("dragend", m, { signal: e }), e.addEventListener("abort", () => {
				clearTimeout(i), s(null);
			});
		}
	};
}), YA = j(() => ({
	key: "history",
	prosemirrorPlugins: [_A()],
	undoCommand: yA,
	redoCommand: bA
})), XA = j(({ editor: e }) => {
	function t(t) {
		let n = e.prosemirrorView.nodeDOM(t);
		for (; n && n.parentElement;) {
			if (n.nodeName === "A") return n;
			n = n.parentElement;
		}
		return null;
	}
	function n(t) {
		let n = e.getLinkMarkAtPos(t);
		if (n) return {
			range: {
				from: n.from,
				to: n.to
			},
			mark: { attrs: { href: n.href } },
			get text() {
				return n.text;
			},
			get position() {
				return Rp(e.prosemirrorView, n.from, n.to).toJSON();
			}
		};
	}
	function r() {
		return e.transact((e) => {
			if (e.selection.empty) return n(e.selection.anchor);
		});
	}
	return {
		key: "linkToolbar",
		getLinkAtSelection: r,
		getLinkElementAtPos: t,
		getMarkAtPos(e, t) {
			return n(e);
		},
		getLinkAtElement(t) {
			return e.transact(() => n(e.prosemirrorView.posAtDOM(t, 0) + 1));
		},
		editLink(t, n, r = e.transact((e) => e.selection.anchor)) {
			e.editLink(t, n, r);
		},
		deleteLink(t = e.transact((e) => e.selection.anchor)) {
			e.deleteLink(t);
		}
	};
}), ZA = [
	"http",
	"https",
	"ftp",
	"ftps",
	"mailto",
	"tel",
	"callto",
	"sms",
	"cid",
	"xmpp"
], QA = "https", $A = new z("node-selection-keyboard"), ej = j(() => ({
	key: "nodeSelectionKeyboard",
	prosemirrorPlugins: [new R({
		key: $A,
		props: { handleKeyDown: (e, t) => {
			if ("node" in e.state.selection) {
				if (t.ctrlKey || t.metaKey) return !1;
				if (t.key.length === 1) return t.preventDefault(), !0;
				if (t.key === "Enter" && !t.isComposing && !t.shiftKey && !t.altKey && !t.ctrlKey && !t.metaKey) {
					let t = e.state.tr;
					return e.dispatch(t.insert(e.state.tr.selection.$to.after(), e.state.schema.nodes.paragraph.createChecked()).setSelection(new I(t.doc.resolve(e.state.tr.selection.$to.after() + 1)))), !0;
				}
			}
			return !1;
		} }
	})]
})), tj = new z("blocknote-placeholder"), nj = j(({ editor: e, options: t }) => {
	let n = t.placeholders;
	return {
		key: "placeholder",
		prosemirrorPlugins: [new R({
			key: tj,
			view: (t) => {
				let r = `placeholder-selector-${kh()}`;
				t.dom.classList.add(r);
				let i = document.createElement("style"), a = e._tiptapEditor.options.injectNonce;
				a && i.setAttribute("nonce", a), t.root instanceof window.ShadowRoot ? t.root.append(i) : t.root.head.appendChild(i);
				let o = i.sheet, s = (e = "") => `.${r} .bn-block-content${e}:has(.ProseMirror-trailingBreak:only-child):after`;
				try {
					let { default: e, emptyDocument: t, ...r } = n || {};
					for (let [e, t] of Object.entries(r)) {
						let n = `[data-content-type="${e}"]`;
						o.insertRule(`${s(n)} { content: ${JSON.stringify(t)}; }`);
					}
					o.insertRule(`${s("[data-is-only-empty-block]")} { content: ${JSON.stringify(t)}; }`), o.insertRule(`${s("[data-is-empty-and-focused]")} { content: ${JSON.stringify(e)}; }`);
				} catch (e) {
					console.warn("Failed to insert placeholder CSS rule - this is likely due to the browser not supporting certain CSS pseudo-element selectors (:has, :only-child:, or :before)", e);
				}
				return { destroy: () => {
					t.root instanceof window.ShadowRoot ? t.root.removeChild(i) : t.root.head.removeChild(i);
				} };
			},
			props: { decorations: (t) => {
				let { doc: n, selection: r } = t;
				if (!e.isEditable || !r.empty || r.$from.parent.type.spec.code) return;
				let i = [];
				t.doc.content.size === 6 && i.push(B.node(2, 4, { "data-is-only-empty-block": "true" }));
				let a = r.$anchor, o = a.parent;
				if (o.content.size === 0) {
					let e = a.before();
					i.push(B.node(e, e + o.nodeSize, { "data-is-empty-and-focused": "true" }));
				}
				return V.create(n, i);
			} }
		})]
	};
}), rj = new z("previous-blocks"), ij = {
	index: "index",
	level: "level",
	type: "type",
	depth: "depth",
	"depth-change": "depth-change"
}, aj = j(() => {
	let e;
	return {
		key: "previousBlockType",
		prosemirrorPlugins: [new R({
			key: rj,
			view(t) {
				return {
					update: async (t, n) => {
						this.key?.getState(t.state).updatedBlocks.size > 0 && (e = setTimeout(() => {
							t.dispatch(t.state.tr.setMeta(rj, { clearUpdate: !0 }));
						}, 0));
					},
					destroy: () => {
						e && clearTimeout(e);
					}
				};
			},
			state: {
				init() {
					return {
						prevTransactionOldBlockAttrs: {},
						currentTransactionOldBlockAttrs: {},
						updatedBlocks: /* @__PURE__ */ new Set()
					};
				},
				apply(e, t, n, r) {
					if (t.currentTransactionOldBlockAttrs = {}, t.updatedBlocks.clear(), !e.docChanged) return t;
					let i = e.changedRange();
					if (!i) return t;
					let a = e.mapping.invert(), o = {
						from: a.map(i.from, -1),
						to: a.map(i.to, 1)
					}, s = {}, c = Jf(n.doc, o, (e) => e.attrs.id), l = new Map(c.map((e) => [e.node.attrs.id, e])), u = Jf(r.doc, i, (e) => e.attrs.id);
					for (let e of u) {
						let i = l.get(e.node.attrs.id), a = i?.node.firstChild, o = e.node.firstChild;
						if (i && a && o) {
							let c = {
								index: o.attrs.index,
								level: o.attrs.level,
								type: o.type.name,
								depth: r.doc.resolve(e.pos).depth
							}, l = {
								index: a.attrs.index,
								level: a.attrs.level,
								type: a.type.name,
								depth: n.doc.resolve(i.pos).depth
							};
							s[e.node.attrs.id] = l, t.currentTransactionOldBlockAttrs[e.node.attrs.id] = l, (l.index !== c.index || l.level !== c.level || l.type !== c.type || l.depth !== c.depth) && (l["depth-change"] = l.depth - c.depth, t.updatedBlocks.add(e.node.attrs.id));
						}
					}
					return t.prevTransactionOldBlockAttrs = s, t;
				}
			},
			props: { decorations(e) {
				let t = this.getState(e);
				if (t.updatedBlocks.size === 0) return;
				let n = [];
				return e.doc.descendants((e, r) => {
					if (!e.attrs.id || !t.updatedBlocks.has(e.attrs.id)) return;
					let i = t.currentTransactionOldBlockAttrs[e.attrs.id], a = {};
					for (let [e, t] of Object.entries(i)) a["data-prev-" + ij[e]] = t || "none";
					n.push(B.node(r, r + e.nodeSize, { ...a }));
				}), V.create(e.doc, n);
			} }
		})]
	};
});
function oj(e, t) {
	for (; e && e.parentElement && e.parentElement !== t.dom && e.getAttribute?.("data-node-type") !== "blockContainer";) e = e.parentElement;
	if (e.getAttribute?.("data-node-type") === "blockContainer") return {
		node: e,
		id: e.getAttribute("data-id")
	};
}
function sj(e) {
	let t = document.createElement("div");
	return t.innerHTML = e, cj(t, {
		indent: "",
		inListItem: !1
	}).trim() + "\n";
}
function cj(e, t) {
	let n = "", r = Array.from(e.childNodes);
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		n += lj(i, t);
	}
	return n;
}
function lj(e, t) {
	if (e.nodeType === 3) return e.textContent || "";
	if (e.nodeType !== 1) return "";
	let n = e;
	switch (n.tagName.toLowerCase()) {
		case "p": return uj(n, t);
		case "h1":
		case "h2":
		case "h3":
		case "h4":
		case "h5":
		case "h6": return dj(n, t);
		case "blockquote": return fj(n, t);
		case "pre": return pj(n, t);
		case "ul": return gj(n, t);
		case "ol": return _j(n, t);
		case "table": return bj(n, t);
		case "hr": return t.indent + "***\n\n";
		case "img": return wj(n, t);
		case "video": return Tj(n, t);
		case "audio": return Ej(n, t);
		case "embed": return Dj(n, t);
		case "figure": return Oj(n, t);
		case "a": return Mj(n, t);
		case "details": return Fj(n, t);
		case "div": return cj(n, t);
		case "br": return "";
		default: return cj(n, t);
	}
}
function uj(e, t) {
	let n = Rj(Ij(e));
	return t.inListItem ? n : t.indent + n + "\n\n";
}
function dj(e, t) {
	let n = parseInt(e.tagName[1], 10), r = "#".repeat(n) + " ", i = Ij(e);
	return t.indent + r + i + "\n\n";
}
function fj(e, t) {
	let n = Array.from(e.children).filter((e) => {
		let t = e.tagName.toLowerCase();
		return [
			"p",
			"ul",
			"ol",
			"pre",
			"blockquote",
			"table",
			"hr"
		].includes(t);
	}), r;
	if (n.length > 0) {
		let e = [];
		for (let t of n) t.tagName.toLowerCase() === "p" ? e.push(Ij(t)) : e.push(lj(t, {
			indent: "",
			inListItem: !1
		}).trim());
		r = e.join("\n\n");
	} else r = Ij(e);
	return r.split("\n").map((e) => t.indent + "> " + e).join("\n") + "\n\n";
}
function pj(e, t) {
	let n = e.querySelector("code");
	if (!n) return "";
	let r = n.getAttribute("data-language") || hj(n.className) || "", i = mj(n), a = Math.max(0, ...(i.match(/`+/g) ?? []).map((e) => e.length)), o = "`".repeat(Math.max(3, a + 1));
	return i ? t.indent + o + r + "\n" + i + (i.endsWith("\n") ? "" : "\n") + o + "\n\n" : t.indent + o + r + "\n" + o + "\n\n";
}
function mj(e) {
	let t = "";
	for (let n of Array.from(e.childNodes)) n.nodeType === 3 ? t += n.textContent || "" : n.nodeType === 1 && (n.tagName.toLowerCase() === "br" ? t += "\n" : t += mj(n));
	return t;
}
function hj(e) {
	let t = e.match(/language-(\S+)/);
	return t ? t[1] : "";
}
function gj(e, t) {
	let n = "", r = Array.from(e.children).filter((e) => e.tagName.toLowerCase() === "li");
	for (let e of r) n += vj(e, "bullet", t);
	return t.inListItem || (n += "\n"), n;
}
function _j(e, t) {
	let n = "", r = Array.from(e.children).filter((e) => e.tagName.toLowerCase() === "li"), i = parseInt(e.getAttribute("start") || "1", 10);
	for (let e = 0; e < r.length; e++) {
		let a = i + e;
		n += vj(r[e], "ordered", t, a);
	}
	return t.inListItem || (n += "\n"), n;
}
function vj(e, t, n, r) {
	let i = null, a = null;
	for (let t of Array.from(e.children)) {
		let e = t.tagName.toLowerCase();
		e === "input" && t.type === "checkbox" && (i = t), e === "details" && (a = t);
	}
	let o, s;
	i ? (o = `* ${i.checked ? "[x]" : "[ ]"} `, s = 2) : t === "ordered" ? (o = `${r}. `, s = o.length) : (o = "* ", s = 2);
	let c, l;
	if (a) {
		let e = a.querySelector("summary")?.querySelector("p");
		l = a, c = e ? Ij(e) : "";
	} else l = yj(e, i), c = l ? Ij(l) : "";
	let u = n.indent + o + c + "\n", d = n.indent + " ".repeat(s), f = {
		indent: d,
		inListItem: !0
	};
	if (a) {
		let e = a.querySelector("summary");
		for (let t of Array.from(a.children)) if (t !== e) if (t.tagName.toLowerCase() === "p") {
			let e = Ij(t);
			u += "\n" + d + e + "\n";
		} else u += lj(t, f);
	}
	let p = Array.from(e.children);
	for (let e of p) {
		let t = e.tagName.toLowerCase();
		if (!(e === l || e === i) && t !== "input") if (t === "ul" || t === "ol") u += lj(e, f);
		else if (t === "p") {
			let t = Ij(e);
			u += "\n" + d + t + "\n";
		} else u += "\n" + lj(e, f);
	}
	return u;
}
function yj(e, t) {
	for (let n of Array.from(e.children)) {
		if (n === t || n.tagName.toLowerCase() === "input") continue;
		let e = n.tagName.toLowerCase();
		if (e === "p" || e === "span") return n;
	}
	return null;
}
function bj(e, t) {
	let n = e.querySelector("colgroup"), r = 0;
	n && (r = n.querySelectorAll("col").length);
	let i = [], a = !1, o = e.querySelectorAll("tr"), s = [];
	o.forEach((e, t) => {
		s[t] || (s[t] = []);
		let n = e.querySelectorAll("th, td"), i = 0;
		n.forEach((e) => {
			for (; s[t][i] !== void 0;) i++;
			t === 0 && e.tagName.toLowerCase() === "th" && (a = !0);
			let n = xj(Ij(e).trim()), r = parseInt(e.getAttribute("colspan") || "1", 10), o = parseInt(e.getAttribute("rowspan") || "1", 10);
			for (let e = 0; e < o; e++) for (let a = 0; a < r; a++) {
				let r = t + e;
				s[r] || (s[r] = []), s[r][i + a] = e === 0 && a === 0 ? n : "";
			}
			i += r;
		}), s[t] && (r = Math.max(r, s[t].length));
	});
	for (let e of s) {
		let t = [];
		for (let n = 0; n < r; n++) t.push(e && e[n] !== void 0 ? e[n] ?? "" : "");
		i.push(t);
	}
	if (i.length === 0) return "";
	let c = [];
	for (let e = 0; e < r; e++) {
		let t = 3;
		for (let n of i) {
			let r = e < n.length ? n[e].length : 0;
			t = Math.max(t, r);
		}
		c.push(Math.max(t, 10));
	}
	let l = "";
	if (a) {
		l += t.indent + Sj(i[0], c, r) + "\n", l += t.indent + Cj(c, r) + "\n";
		for (let e = 1; e < i.length; e++) l += t.indent + Sj(i[e], c, r) + "\n";
	} else {
		let e = Array(r).fill("");
		l += t.indent + Sj(e, c, r) + "\n", l += t.indent + Cj(c, r) + "\n";
		for (let e of i) l += t.indent + Sj(e, c, r) + "\n";
	}
	return l += "\n", l;
}
function xj(e) {
	return e.replace(/\|/g, "\\|");
}
function Sj(e, t, n) {
	let r = [];
	for (let i = 0; i < n; i++) {
		let n = i < e.length ? e[i] : "";
		r.push(" " + n.padEnd(t[i]) + " ");
	}
	return "|" + r.join("|") + "|";
}
function Cj(e, t) {
	let n = [];
	for (let r = 0; r < t; r++) n.push(" " + "-".repeat(e[r]) + " ");
	return "|" + n.join("|") + "|";
}
function wj(e, t) {
	let n = e.getAttribute("src") || "", r = e.getAttribute("alt") || "";
	return n ? t.indent + `![${r}](${n})\n\n` : "\n\n";
}
function Tj(e, t) {
	let n = e.getAttribute("src") || e.getAttribute("data-url") || "", r = e.getAttribute("data-name") || e.getAttribute("title") || "";
	return n ? t.indent + `![${r}](${n})\n\n` : "\n\n";
}
function Ej(e, t) {
	let n = e.getAttribute("src") || "";
	return n ? t.indent + `<audio src="${Aj(n)}" controls></audio>\n\n` : "\n\n";
}
function Dj(e, t) {
	let n = e.getAttribute("src") || "";
	return n ? t.indent + `[](${n})\n\n` : "\n\n";
}
function Oj(e, t) {
	let n = e.querySelector("img"), r = e.querySelector("video"), i = e.querySelector("audio"), a = e.querySelector("a"), o = e.querySelector("figcaption")?.textContent?.trim() || "";
	return n ? kj("img", n.getAttribute("src") || "", n.getAttribute("alt") || "", o, t) : r ? kj("video", r.getAttribute("src") || r.getAttribute("data-url") || "", r.getAttribute("data-name") || r.getAttribute("title") || "", o, t) : i ? kj("audio", i.getAttribute("src") || "", "", o, t) : a ? Mj(a, t) : "";
}
function kj(e, t, n, r, i) {
	if (!t) return "";
	if (!r && e !== "audio") return i.indent + `![${n}](${t})\n\n`;
	let a = n && n !== r ? e === "img" ? ` alt="${Aj(n)}"` : e === "video" ? ` data-name="${Aj(n)}"` : "" : "", o = e === "img" ? `<img${a} src="${Aj(t)}">` : `<${e} src="${Aj(t)}"${a} controls></${e}>`, s = r ? `<figcaption>${jj(r)}</figcaption>` : "";
	return i.indent + `<figure>${o}${s}</figure>\n\n`;
}
function Aj(e) {
	return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jj(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Mj(e, t) {
	let n = e.getAttribute("href") || "", r = e.textContent?.trim() || "";
	return n ? t.indent + Nj(r, n) + "\n\n" : t.indent + r + "\n\n";
}
function Nj(e, t) {
	return !e || e === t ? t : `[${e}](${Pj(t)})`;
}
function Pj(e) {
	return e.replace(/[\\()]/g, "\\$&");
}
function Fj(e, t) {
	let n = e.querySelector("summary");
	if (!n) return cj(e, t);
	let r = n.querySelector("h1, h2, h3, h4, h5, h6");
	if (r) {
		let i = dj(r, t);
		for (let r of Array.from(e.children)) r !== n && (i += lj(r, t));
		return i;
	}
	return cj(n, t);
}
function Ij(e) {
	let t = "";
	for (let n of Array.from(e.childNodes)) if (n.nodeType === 3) t += n.textContent || "";
	else if (n.nodeType === 1) {
		let e = n;
		switch (e.tagName.toLowerCase()) {
			case "strong":
			case "b": {
				let { content: n, trailing: r } = Lj(Ij(e));
				n ? t += `**${n}**${r}` : t += r;
				break;
			}
			case "em":
			case "i": {
				let { content: n, trailing: r } = Lj(Ij(e));
				n ? t += `*${n}*${r}` : t += r;
				break;
			}
			case "s":
			case "del":
				t += `~~${Ij(e)}~~`;
				break;
			case "code": {
				let n = e.textContent || "", r = Math.max(0, ...(n.match(/`+/g) ?? []).map((e) => e.length)), i = "`".repeat(r + 1), a = n.startsWith("`") || n.endsWith("`");
				t += i + (a ? ` ${n} ` : n) + i;
				break;
			}
			case "u":
				t += Ij(e);
				break;
			case "a": {
				let n = e.getAttribute("href") || "", r = Ij(e);
				t += Nj(r, n);
				break;
			}
			case "br":
				t += "\\\n";
				break;
			case "span":
				t += Ij(e);
				break;
			case "img": {
				let n = e.getAttribute("src") || "", r = e.getAttribute("alt") || "";
				t += `![${r}](${n})`;
				break;
			}
			case "video": {
				let n = e.getAttribute("src") || e.getAttribute("data-url") || "", r = e.getAttribute("data-name") || e.getAttribute("title") || "";
				t += `![${r}](${n})`;
				break;
			}
			case "p":
				t += Ij(e);
				break;
			case "input": break;
			default:
				t += Ij(e);
				break;
		}
	}
	return t;
}
function Lj(e) {
	let t = e.match(/^(.*?)(\s*)$/);
	return t ? {
		content: t[1],
		trailing: t[2]
	} : {
		content: e,
		trailing: ""
	};
}
function Rj(e) {
	let t = e.replace(/^(\\\n)+/, "");
	return t = t.replace(/(\\\n)+$/, ""), t;
}
function zj(e) {
	return sj(e);
}
function Bj(e, t, n, r) {
	return zj(EA(t, n).exportBlocks(e, r));
}
function Vj(e) {
	let t = [];
	return e.descendants((e) => {
		let n = oD(e);
		return e.type.name === "blockContainer" && e.firstChild?.type.name === "blockGroup" ? !0 : e.type.name === "columnList" && e.childCount === 1 ? (e.firstChild?.forEach((e) => {
			t.push(gD(e, n));
		}), !1) : e.type.isInGroup("bnBlock") ? (t.push(gD(e, n)), !1) : !0;
	}), t;
}
var Hj = class e extends F {
	nodes;
	constructor(e, t) {
		super(e, t);
		let n = e.node();
		this.nodes = [], e.doc.nodesBetween(e.pos, t.pos, (e, t, r) => {
			if (r !== null && r.eq(n)) return this.nodes.push(e), !1;
		});
	}
	static create(t, n, r = n) {
		return new e(t.resolve(n), t.resolve(r));
	}
	content() {
		return new P(M.from(this.nodes), 0, 0);
	}
	eq(t) {
		if (!(t instanceof e) || this.nodes.length !== t.nodes.length || this.from !== t.from || this.to !== t.to) return !1;
		for (let e = 0; e < this.nodes.length; e++) if (!this.nodes[e].eq(t.nodes[e])) return !1;
		return !0;
	}
	map(t, n) {
		let r = n.mapResult(this.from), i = n.mapResult(this.to);
		return i.deleted ? F.near(t.resolve(r.pos)) : r.deleted ? F.near(t.resolve(i.pos)) : new e(t.resolve(r.pos), t.resolve(i.pos));
	}
	toJSON() {
		return {
			type: "multiple-node",
			anchor: this.anchor,
			head: this.head
		};
	}
};
F.jsonID("multiple-node", Hj);
var Uj;
function Wj(e, t) {
	let n, r, i = t.resolve(e.from).node().type.spec.group === "blockContent", a = t.resolve(e.to).node().type.spec.group === "blockContent", o = Math.min(e.$anchor.depth, e.$head.depth);
	if (i && a) {
		let i = e.$from.start(o - 1), a = e.$to.end(o - 1);
		n = t.resolve(i - 1).pos, r = t.resolve(a + 1).pos;
	} else n = e.from, r = e.to;
	return {
		from: n,
		to: r
	};
}
function Gj(e, t, n = t) {
	t === n && (n += e.state.doc.resolve(t + 1).node().nodeSize);
	let r = e.domAtPos(t).node.cloneNode(!0), i = e.domAtPos(t).node, a = (e, t) => Array.prototype.indexOf.call(e.children, t), o = a(i, e.domAtPos(t + 1).node.parentElement), s = a(i, e.domAtPos(n - 1).node.parentElement);
	for (let e = i.childElementCount - 1; e >= 0; e--) (e > s || e < o) && r.removeChild(r.children[e]);
	Kj(e.root), Uj = r, Uj.querySelectorAll("iframe, embed, object").forEach((e) => e.parentElement?.removeChild(e));
	let c = e.dom.className.split(" ").filter((e) => e !== "ProseMirror" && e !== "bn-root" && e !== "bn-editor").join(" ");
	Uj.className = Uj.className + " bn-drag-preview " + c, e.root instanceof ShadowRoot ? e.root.appendChild(Uj) : e.root.body.appendChild(Uj);
}
function Kj(e) {
	Uj !== void 0 && (e instanceof ShadowRoot ? e.removeChild(Uj) : e.body.removeChild(Uj), Uj = void 0);
}
function qj(e, t, n) {
	if (!e.dataTransfer || n.headless) return;
	let r = n.prosemirrorView, i = aO(t.id, r.state.doc);
	if (!i) throw Error(`Block with ID ${t.id} not found`);
	let a = i.posBeforeNode;
	if (a != null) {
		let t = r.state.selection, i = r.state.doc, { from: o, to: s } = Wj(t, i), c = o <= a && a < s, l = t.$anchor.node() !== t.$head.node() || t instanceof Hj;
		c && l ? (r.dispatch(r.state.tr.setSelection(Hj.create(i, o, s))), Gj(r, o, s)) : (r.dispatch(r.state.tr.setSelection(L.create(r.state.doc, a))), Gj(r, a));
		let u = r.state.selection.content(), d = n.pmSchema, f = r.serializeForClipboard(u).dom.innerHTML, p = EA(d, n), m = Vj(u.content), h = p.exportBlocks(m, {}), g = zj(h);
		e.dataTransfer.clearData(), e.dataTransfer.setData("blocknote/html", f), e.dataTransfer.setData("text/html", h), e.dataTransfer.setData("text/plain", g), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setDragImage(Uj, 0, 0);
	}
}
var Jj = 250;
function Yj(e, t, n = !0) {
	let r = e.root.elementsFromPoint(t.left, t.top);
	for (let i of r) if (e.dom.contains(i)) return n && i.closest("[data-node-type=columnList]") ? Yj(e, {
		left: t.left + 50,
		top: t.top
	}, !1) : oj(i, e);
}
function Xj(e, t) {
	if (!t.dom.firstChild) return;
	let n = t.dom.firstChild.getBoundingClientRect(), r = Yj(t, {
		left: Math.min(Math.max(n.left + 10, e.x), n.right - 10),
		top: e.y
	});
	if (r) return Yj(t, {
		left: r.node.getBoundingClientRect().right - 10,
		top: e.y
	}, !1);
}
var Zj = class {
	state;
	emitUpdate;
	mousePos;
	hoveredBlock;
	menuFrozen = !1;
	isDragOrigin = !1;
	constructor(e, t, n) {
		this.editor = e, this.pmView = t, this.emitUpdate = () => {
			if (!this.state) throw Error("Attempting to update uninitialized side menu");
			n(this.state);
		}, this.pmView.root.addEventListener("dragstart", this.onDragStart), this.pmView.root.addEventListener("dragover", this.onDragOver), this.pmView.root.addEventListener("drop", this.onDrop, !0), this.pmView.root.addEventListener("dragend", this.onDragEnd, !0), this.pmView.root.addEventListener("mousemove", this.onMouseMove, !0), this.pmView.root.addEventListener("keydown", this.onKeyDown, !0);
	}
	updateState = (e) => {
		this.state = e, this.emitUpdate(this.state);
	};
	updateStateFromMousePos = () => {
		if (this.menuFrozen || !this.mousePos) return;
		let e = this.findClosestEditorElement({
			clientX: this.mousePos.x,
			clientY: this.mousePos.y
		});
		if (e?.element !== this.pmView.dom || e.distance > Jj) {
			this.state?.show && (this.state.show = !1, this.updateState(this.state));
			return;
		}
		let t = Xj(this.mousePos, this.pmView);
		if (!t || !this.editor.isEditable) {
			this.state?.show && (this.state.show = !1, this.updateState(this.state));
			return;
		}
		if (!(this.state?.show && this.hoveredBlock?.hasAttribute("data-id") && this.hoveredBlock?.getAttribute("data-id") === t.id) && (this.hoveredBlock = t.node, this.editor.isEditable)) {
			let e = t.node.getBoundingClientRect(), n = t.node.closest("[data-node-type=column]");
			this.state = {
				show: !0,
				referencePos: new DOMRect(n ? n.firstElementChild.getBoundingClientRect().x : this.pmView.dom.firstChild.getBoundingClientRect().x, e.y, e.width, e.height),
				block: this.editor.getBlock(this.hoveredBlock.getAttribute("data-id"))
			}, this.updateState(this.state);
		}
	};
	onDragStart = (e) => {
		let t = e.dataTransfer?.getData("blocknote/html");
		if (!t || this.pmView.dragging) return;
		let n = document.createElement("div");
		n.innerHTML = t;
		let r = Yr.fromSchema(this.pmView.state.schema).parse(n, { topNode: this.pmView.state.schema.nodes.blockGroup.create() });
		this.pmView.dragging = {
			slice: new P(r.content, 0, 0),
			move: !0
		};
	};
	findClosestEditorElement = (e) => {
		let t = Array.from(this.pmView.root.querySelectorAll(".bn-editor"));
		if (t.length === 0) return null;
		let n = t[0], r = Number.MAX_VALUE;
		return t.forEach((t) => {
			let i = t.querySelector(".bn-block-group").getBoundingClientRect(), a = e.clientX < i.left ? i.left - e.clientX : e.clientX > i.right ? e.clientX - i.right : 0, o = e.clientY < i.top ? i.top - e.clientY : e.clientY > i.bottom ? e.clientY - i.bottom : 0, s = Math.sqrt(a ** 2 + o ** 2);
			s < r && (r = s, n = t);
		}), {
			element: n,
			distance: r
		};
	};
	onDragOver = (e) => {
		if (e.synthetic || !(this.pmView.dragging !== null || this.isDragOrigin || e.dataTransfer?.types.includes("blocknote/html") || e.target instanceof Node && this.pmView.dom.contains(e.target))) return;
		let t = this.getDragEventContext(e);
		if (!t || !t.isDropPoint) {
			this.closeDropCursor();
			return;
		}
		t.isDropPoint && !t.isDropWithinEditorBounds && this.dispatchSyntheticEvent(e);
	};
	closeDropCursor = () => {
		let e = new Event("dragleave", { bubbles: !1 });
		e.synthetic = !0, this.pmView.dom.dispatchEvent(e);
	};
	getDragEventContext = (e) => {
		if (!(this.pmView.dragging !== null || this.isDragOrigin || e.dataTransfer?.types.includes("blocknote/html") || e.target instanceof Node && this.pmView.dom.contains(e.target))) return;
		let t = !e.dataTransfer?.types.includes("blocknote/html") && !!this.pmView.dragging, n = !!this.isDragOrigin, r = t || n, i = this.findClosestEditorElement(e);
		if (!i || i.distance > Jj) return;
		let a = i.element === this.pmView.dom, o = a && i.distance === 0;
		if (!(!a && !r)) return {
			isDropPoint: a,
			isDropWithinEditorBounds: o,
			isDragOrigin: r
		};
	};
	onDrop = (e) => {
		if (e.synthetic || !(this.pmView.dragging !== null || this.isDragOrigin || e.dataTransfer?.types.includes("blocknote/html") || e.target instanceof Node && this.pmView.dom.contains(e.target))) return;
		let t = this.getDragEventContext(e);
		if (!t) {
			this.closeDropCursor();
			return;
		}
		let { isDropPoint: n, isDropWithinEditorBounds: r, isDragOrigin: i } = t;
		if (!r && n && this.dispatchSyntheticEvent(e), n) {
			if (this.pmView.dragging) return;
			this.pmView.dispatch(this.pmView.state.tr.setSelection(I.create(this.pmView.state.tr.doc, this.pmView.state.tr.selection.anchor)));
			return;
		} else if (i) {
			setTimeout(() => this.pmView.dispatch(this.pmView.state.tr.deleteSelection()), 0);
			return;
		}
	};
	onDragEnd = (e) => {
		e.synthetic || (this.pmView.dragging = null);
	};
	onKeyDown = (e) => {
		this.state?.show && this.editor.isFocused() && (this.state.show = !1, this.emitUpdate(this.state));
	};
	onMouseMove = (e) => {
		if (this.menuFrozen) return;
		this.mousePos = {
			x: e.clientX,
			y: e.clientY
		};
		let t = this.pmView.dom.getBoundingClientRect();
		if (this.mousePos.x > t.left && this.mousePos.x < t.right && this.mousePos.y > t.top && this.mousePos.y < t.bottom && e && e.target && !this.editor.isWithinEditor(e.target)) {
			this.state?.show && (this.state.show = !1, this.emitUpdate(this.state));
			return;
		}
		this.updateStateFromMousePos();
	};
	dispatchSyntheticEvent(e) {
		let t = new Event(e.type, e), n = this.pmView.dom.firstChild.getBoundingClientRect();
		t.clientX = e.clientX, t.clientY = e.clientY, t.clientX = Math.min(Math.max(e.clientX, n.left), n.left + n.width), t.clientY = Math.min(Math.max(e.clientY, n.top), n.top + n.height), t.dataTransfer = e.dataTransfer, t.preventDefault = () => e.preventDefault(), t.synthetic = !0, this.pmView.dom.dispatchEvent(t);
	}
	update(e, t) {
		!t.doc.eq(this.pmView.state.doc) && this.state?.show && this.updateStateFromMousePos();
	}
	destroy() {
		this.state?.show && (this.state.show = !1, this.emitUpdate(this.state)), this.pmView.root.removeEventListener("mousemove", this.onMouseMove, !0), this.pmView.root.removeEventListener("dragstart", this.onDragStart), this.pmView.root.removeEventListener("dragover", this.onDragOver), this.pmView.root.removeEventListener("drop", this.onDrop, !0), this.pmView.root.removeEventListener("dragend", this.onDragEnd, !0), this.pmView.root.removeEventListener("keydown", this.onKeyDown, !0);
	}
}, Qj = new z("SideMenuPlugin"), $j = j(({ editor: e }) => {
	let t, n = Kn(void 0);
	return {
		key: "sideMenu",
		store: n,
		prosemirrorPlugins: [new R({
			key: Qj,
			view: (r) => (t = new Zj(e, r, (e) => {
				n.setState({ ...e });
			}), t)
		})],
		blockDragStart(n, r) {
			t && (t.isDragOrigin = !0), qj(n, r, e);
		},
		blockDragEnd() {
			Kj(e.prosemirrorView.root), t && (t.isDragOrigin = !1), e.blur();
		},
		freezeMenu() {
			t.menuFrozen = !0, t.state.show = !0, t.emitUpdate(t.state);
		},
		unfreezeMenu() {
			t.menuFrozen = !1, t.state.show = !1, t.emitUpdate(t.state);
		},
		hideMenuIfNotFrozen() {
			!t.menuFrozen && t.state?.show && (t.state.show = !1, t.emitUpdate(t.state));
		}
	};
}), eM;
async function tM() {
	return eM || (eM = (async () => {
		let [e, t] = await Promise.all([import("./module-BSdNk6S-.js"), import("./native-BiSRuJl1.js")]), n = "default" in e ? e.default : e, r = "default" in t ? t.default : t;
		return await n.init({ data: r }), {
			emojiMart: n,
			emojiData: r
		};
	})(), eM);
}
async function nM(e, t) {
	if (!("text" in e.schema.inlineContentSchema) || e.schema.inlineContentSchema.text !== qk.text) return [];
	let { emojiData: n, emojiMart: r } = await tM();
	return (t.trim() === "" ? Object.values(n.emojis) : await r.SearchIndex.search(t)).map((t) => ({
		id: t.skins[0].native,
		onItemClick: () => e.insertInlineContent(t.skins[0].native + " ")
	}));
}
var rM;
function iM(e) {
	rM || (rM = document.createElement("div"), rM.innerHTML = "_", rM.style.opacity = "0", rM.style.height = "1px", rM.style.width = "1px", e instanceof Document ? e.body.appendChild(rM) : e.appendChild(rM));
}
function aM(e) {
	rM &&= (e instanceof Document ? e.body.removeChild(rM) : e.removeChild(rM), void 0);
}
function oM(e) {
	return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function sM(e) {
	let t = e;
	for (; t && t.nodeName !== "TD" && t.nodeName !== "TH" && !t.classList.contains("tableWrapper");) {
		if (t.classList.contains("ProseMirror")) return;
		let e = t.parentNode;
		if (!e || !(e instanceof Element)) return;
		t = e;
	}
	return t.nodeName === "TD" || t.nodeName === "TH" ? {
		type: "cell",
		domNode: t,
		tbodyNode: t.closest("tbody")
	} : {
		type: "wrapper",
		domNode: t,
		tbodyNode: t.querySelector("tbody")
	};
}
function cM(e, t) {
	let n = t.querySelectorAll(e);
	for (let e = 0; e < n.length; e++) n[e].style.visibility = "hidden";
}
var lM = class {
	state;
	emitUpdate;
	tableId;
	tablePos;
	tableElement;
	menuFrozen = !1;
	mouseState = "up";
	prevWasEditable = null;
	constructor(e, t, n) {
		this.editor = e, this.pmView = t, this.emitUpdate = () => {
			if (!this.state) throw Error("Attempting to update uninitialized image toolbar");
			n(this.state);
		}, t.dom.addEventListener("mousemove", this.mouseMoveHandler), t.dom.addEventListener("mousedown", this.viewMousedownHandler), window.addEventListener("mouseup", this.mouseUpHandler), t.root.addEventListener("dragover", this.dragOverHandler), t.root.addEventListener("drop", this.dropHandler);
	}
	viewMousedownHandler = () => {
		this.mouseState = "down";
	};
	mouseUpHandler = (e) => {
		this.mouseState = "up", this.mouseMoveHandler(e);
	};
	mouseMoveHandler = (e) => {
		if (this.menuFrozen || this.mouseState === "selecting" || !(e.target instanceof Element) || !this.pmView.dom.contains(e.target)) return;
		let t = sM(e.target);
		if (t?.type === "cell" && this.mouseState === "down" && !this.state?.draggingState) {
			this.mouseState = "selecting", this.state?.show && (this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate());
			return;
		}
		if (!t || !this.editor.isEditable) {
			this.state?.show && (this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate());
			return;
		}
		if (!t.tbodyNode) return;
		let n = t.tbodyNode.getBoundingClientRect(), r = oj(t.domNode, this.pmView);
		if (!r) return;
		this.tableElement = r.node;
		let i, a = this.editor.transact((e) => aO(r.id, e.doc));
		if (!a) throw Error(`Block with ID ${r.id} not found`);
		let o = gD(a.node, this.editor.pmSchema, this.editor.schema.blockSchema, this.editor.schema.inlineContentSchema, this.editor.schema.styleSchema);
		if (Dk(this.editor, "table") && (this.tablePos = a.posBeforeNode + 1, i = o), !i) return;
		this.tableId = r.id;
		let s = t.domNode.closest(".tableWrapper")?.querySelector(".table-widgets-container");
		if (t?.type === "wrapper") {
			let t = e.clientY >= n.bottom - 1 && e.clientY < n.bottom + 20, r = e.clientX >= n.right - 1 && e.clientX < n.right + 20, a = this.state?.block.id !== i.id || e.clientX > n.right || e.clientY > n.bottom;
			this.state = {
				...this.state,
				show: !0,
				showAddOrRemoveRowsButton: t,
				showAddOrRemoveColumnsButton: r,
				referencePosTable: n,
				block: i,
				widgetContainer: s,
				colIndex: a ? void 0 : this.state?.colIndex,
				rowIndex: a ? void 0 : this.state?.rowIndex,
				referencePosCell: a ? void 0 : this.state?.referencePosCell
			};
		} else {
			let e = oM(t.domNode), a = oM(t.domNode.parentElement), o = t.domNode.getBoundingClientRect();
			if (this.state !== void 0 && this.state.show && this.tableId === r.id && this.state.rowIndex === a && this.state.colIndex === e) return;
			this.state = {
				show: !0,
				showAddOrRemoveColumnsButton: e === i.content.rows[0].cells.length - 1,
				showAddOrRemoveRowsButton: a === i.content.rows.length - 1,
				referencePosTable: n,
				block: i,
				draggingState: void 0,
				referencePosCell: o,
				colIndex: e,
				rowIndex: a,
				widgetContainer: s
			};
		}
		return this.emitUpdate(), !1;
	};
	dragOverHandler = (e) => {
		if (this.state?.draggingState === void 0) return;
		e.preventDefault(), e.dataTransfer.dropEffect = "move", cM(".prosemirror-dropcursor-block, .prosemirror-dropcursor-inline", this.pmView.root);
		let t = {
			left: Math.min(Math.max(e.clientX, this.state.referencePosTable.left + 1), this.state.referencePosTable.right - 1),
			top: Math.min(Math.max(e.clientY, this.state.referencePosTable.top + 1), this.state.referencePosTable.bottom - 1)
		}, n = this.pmView.root.elementsFromPoint(t.left, t.top).filter((e) => e.tagName === "TD" || e.tagName === "TH");
		if (n.length === 0) return;
		let r = n[0], i = !1, a = oM(r.parentElement), o = oM(r), s = this.state.draggingState.draggedCellOrientation === "row" ? this.state.rowIndex : this.state.colIndex, c = (this.state.draggingState.draggedCellOrientation === "row" ? a : o) !== s;
		(this.state.rowIndex !== a || this.state.colIndex !== o) && (this.state.rowIndex = a, this.state.colIndex = o, this.state.referencePosCell = r.getBoundingClientRect(), i = !0);
		let l = this.state.draggingState.draggedCellOrientation === "row" ? t.top : t.left;
		this.state.draggingState.mousePos !== l && (this.state.draggingState.mousePos = l, i = !0), i && this.emitUpdate(), c && this.editor.transact((e) => e.setMeta(uM, !0));
	};
	dropHandler = (e) => {
		if (this.mouseState = "up", this.state === void 0 || this.state.draggingState === void 0) return !1;
		if (this.state.rowIndex === void 0 || this.state.colIndex === void 0) throw Error("Attempted to drop table row or column, but no table block was hovered prior.");
		e.preventDefault();
		let { draggingState: t, colIndex: n, rowIndex: r } = this.state;
		this.state.draggingState = void 0;
		let i = this.state.block.content.columnWidths;
		if (t.draggedCellOrientation === "row") {
			if (!YD(this.state.block, t.originalIndex, r)) return !1;
			let e = GD(this.state.block, t.originalIndex, r);
			this.editor.updateBlock(this.state.block, {
				type: "table",
				content: {
					...this.state.block.content,
					rows: e
				}
			});
		} else {
			if (!XD(this.state.block, t.originalIndex, n)) return !1;
			let e = WD(this.state.block, t.originalIndex, n), [r] = i.splice(t.originalIndex, 1);
			i.splice(n, 0, r), this.editor.updateBlock(this.state.block, {
				type: "table",
				content: {
					...this.state.block.content,
					columnWidths: i,
					rows: e
				}
			});
		}
		return this.editor.setTextCursorPosition(this.state.block.id), !0;
	};
	update() {
		if (!this.state || !this.state.show) return;
		if (this.state.block = this.editor.getBlock(this.state.block.id), !this.state.block || this.state.block.type !== "table" || !this.tableElement?.isConnected) {
			this.state.show = !1, this.state.showAddOrRemoveRowsButton = !1, this.state.showAddOrRemoveColumnsButton = !1, this.emitUpdate();
			return;
		}
		let { height: e, width: t } = BD(this.state.block);
		this.state.rowIndex !== void 0 && this.state.colIndex !== void 0 && (this.state.rowIndex >= e && (this.state.rowIndex = e - 1), this.state.colIndex >= t && (this.state.colIndex = t - 1));
		let n = this.tableElement.querySelector("tbody");
		if (!n) throw Error("Table block does not contain a 'tbody' HTML element. This should never happen.");
		if (this.state.rowIndex !== void 0 && this.state.colIndex !== void 0) {
			let e = n.children[this.state.rowIndex].children[this.state.colIndex];
			e ? this.state.referencePosCell = e.getBoundingClientRect() : (this.state.rowIndex = void 0, this.state.colIndex = void 0);
		}
		this.state.referencePosTable = n.getBoundingClientRect(), this.emitUpdate();
	}
	destroy() {
		this.pmView.dom.removeEventListener("mousemove", this.mouseMoveHandler), window.removeEventListener("mouseup", this.mouseUpHandler), this.pmView.dom.removeEventListener("mousedown", this.viewMousedownHandler), this.pmView.root.removeEventListener("dragover", this.dragOverHandler), this.pmView.root.removeEventListener("drop", this.dropHandler);
	}
}, uM = new z("TableHandlesPlugin"), dM = j(({ editor: e }) => {
	let t, n = Kn(void 0);
	return {
		key: "tableHandles",
		store: n,
		prosemirrorPlugins: [new R({
			key: uM,
			view: (r) => (t = new lM(e, r, (e) => {
				n.setState(e.block ? {
					...e,
					draggingState: e.draggingState ? { ...e.draggingState } : void 0
				} : void 0);
			}), t),
			props: { decorations: (e) => {
				if (t === void 0 || t.state === void 0 || t.state.draggingState === void 0 || t.tablePos === void 0) return;
				let n = t.state.draggingState.draggedCellOrientation === "row" ? t.state.rowIndex : t.state.colIndex;
				if (n === void 0) return;
				let r = [], { block: i, draggingState: a } = t.state, { originalIndex: o, draggedCellOrientation: s } = a;
				if (n === o || !i || s === "row" && !YD(i, o, n) || s === "col" && !XD(i, o, n)) return V.create(e.doc, r);
				let c = e.doc.resolve(t.tablePos + 1);
				return t.state.draggingState.draggedCellOrientation === "row" ? HD(t.state.block, n).forEach(({ row: t, col: i }) => {
					let a = e.doc.resolve(c.posAtIndex(t) + 1), s = e.doc.resolve(a.posAtIndex(i) + 1), l = s.node(), u = s.pos + (n > o ? l.nodeSize - 2 : 0);
					r.push(B.widget(u, () => {
						let e = document.createElement("div");
						return e.className = "bn-table-drop-cursor", e.style.left = "0", e.style.right = "0", n > o ? e.style.bottom = "-2px" : e.style.top = "-3px", e.style.height = "4px", e;
					}));
				}) : UD(t.state.block, n).forEach(({ row: t, col: i }) => {
					let a = e.doc.resolve(c.posAtIndex(t) + 1), s = e.doc.resolve(a.posAtIndex(i) + 1), l = s.node(), u = s.pos + (n > o ? l.nodeSize - 2 : 0);
					r.push(B.widget(u, () => {
						let e = document.createElement("div");
						return e.className = "bn-table-drop-cursor", e.style.top = "0", e.style.bottom = "0", n > o ? e.style.right = "-2px" : e.style.left = "-3px", e.style.width = "4px", e;
					}));
				}), V.create(e.doc, r);
			} }
		})],
		colDragStart(n) {
			if (t === void 0 || t.state === void 0 || t.state.colIndex === void 0) throw Error("Attempted to drag table column, but no table block was hovered prior.");
			t.state.draggingState = {
				draggedCellOrientation: "col",
				originalIndex: t.state.colIndex,
				mousePos: n.clientX
			}, t.emitUpdate(), e.transact((e) => e.setMeta(uM, {
				draggedCellOrientation: t.state.draggingState.draggedCellOrientation,
				originalIndex: t.state.colIndex,
				newIndex: t.state.colIndex,
				tablePos: t.tablePos
			})), !e.headless && (iM(e.prosemirrorView.root), n.dataTransfer.setDragImage(rM, 0, 0), n.dataTransfer.effectAllowed = "move");
		},
		rowDragStart(n) {
			if (t.state === void 0 || t.state.rowIndex === void 0) throw Error("Attempted to drag table row, but no table block was hovered prior.");
			t.state.draggingState = {
				draggedCellOrientation: "row",
				originalIndex: t.state.rowIndex,
				mousePos: n.clientY
			}, t.emitUpdate(), e.transact((e) => e.setMeta(uM, {
				draggedCellOrientation: t.state.draggingState.draggedCellOrientation,
				originalIndex: t.state.rowIndex,
				newIndex: t.state.rowIndex,
				tablePos: t.tablePos
			})), !e.headless && (iM(e.prosemirrorView.root), n.dataTransfer.setDragImage(rM, 0, 0), n.dataTransfer.effectAllowed = "copyMove");
		},
		dragEnd() {
			if (t.state === void 0) throw Error("Attempted to drag table row, but no table block was hovered prior.");
			t.state.draggingState = void 0, t.emitUpdate(), e.transact((e) => e.setMeta(uM, null)), !e.headless && aM(e.prosemirrorView.root);
		},
		freezeHandles() {
			t.menuFrozen = !0;
		},
		unfreezeHandles() {
			t.menuFrozen = !1;
		},
		hideHandlesIfNotFrozen() {
			!t.menuFrozen && t.state?.show && (t.state.show = !1, t.state.showAddOrRemoveRowsButton = !1, t.state.showAddOrRemoveColumnsButton = !1, t.emitUpdate());
		},
		getCellsAtRowHandle(e, t) {
			return HD(e, t);
		},
		getCellsAtColumnHandle(e, t) {
			return UD(e, t);
		},
		setCellSelection(e, n, r = n) {
			if (!t) throw Error("Table handles view not initialized");
			let i = e.doc.resolve(t.tablePos + 1), a = e.doc.resolve(i.posAtIndex(n.row) + 1), o = e.doc.resolve(a.posAtIndex(n.col)), s = e.doc.resolve(i.posAtIndex(r.row) + 1), c = e.doc.resolve(s.posAtIndex(r.col)), l = e.tr;
			return l.setSelection(new K(o, c)), e.apply(l);
		},
		addRowOrColumn(t, n) {
			e.exec((e, r) => {
				let i = this.setCellSelection(e, n.orientation === "row" ? {
					row: t,
					col: 0
				} : {
					row: 0,
					col: t
				});
				return n.orientation === "row" ? n.side === "above" ? pg(i, r) : mg(i, r) : n.side === "left" ? sg(i, r) : cg(i, r);
			});
		},
		removeRowOrColumn(t, n) {
			return n === "row" ? e.exec((e, n) => gg(this.setCellSelection(e, {
				row: t,
				col: 0
			}), n)) : e.exec((e, n) => ug(this.setCellSelection(e, {
				row: 0,
				col: t
			}), n));
		},
		mergeCells(t) {
			return e.exec((e, n) => yg(t ? this.setCellSelection(e, t.relativeStartCell, t.relativeEndCell) : e, n));
		},
		splitCell(t) {
			return e.exec((e, n) => bg(t ? this.setCellSelection(e, t) : e, n));
		},
		getCellSelection() {
			return e.transact((e) => {
				let t = e.selection, n = t.$from, r = t.$to;
				if (kk(t)) {
					let { ranges: e } = t;
					e.forEach((e) => {
						n = e.$from.min(n ?? e.$from), r = e.$to.max(r ?? e.$to);
					});
				} else if (n = e.doc.resolve(t.$from.pos - t.$from.parentOffset - 1), r = e.doc.resolve(t.$to.pos - t.$to.parentOffset - 1), n.pos === 0 || r.pos === 0) return;
				let i = e.doc.resolve(n.pos - n.parentOffset - 1), a = e.doc.resolve(r.pos - r.parentOffset - 1), o = e.doc.resolve(i.pos - i.parentOffset - 1), s = n.index(i.depth), c = i.index(o.depth), l = r.index(a.depth), u = a.index(o.depth), d = [];
				for (let e = c; e <= u; e++) for (let t = s; t <= l; t++) d.push({
					row: e,
					col: t
				});
				return {
					from: {
						row: c,
						col: s
					},
					to: {
						row: u,
						col: l
					},
					cells: d
				};
			});
		},
		getMergeDirection(t) {
			return e.transact((e) => {
				let n = kk(e.selection) ? e.selection : void 0;
				if (!n || !t || n.ranges.length <= 1) return;
				let r = this.getCellSelection();
				if (r) return ZD(r.from, r.to, t) ? "vertical" : "horizontal";
			});
		},
		cropEmptyRowsOrColumns(e, t) {
			return qD(e, t);
		},
		addRowsOrColumns(e, t, n) {
			return JD(e, t, n);
		}
	};
}), fM = new z("trailingNode");
function pM(e, t) {
	if (!t) return !1;
	let n = e.lastChild?.lastChild, r = n?.firstChild;
	return !(n?.type.name === "blockContainer" && r?.type.name === "paragraph" && r.content.size === 0);
}
var mM = j(({ editor: e }) => {
	function t(t) {
		return B.widget(t, () => {
			let t = document.createElement("div");
			return t.className = "bn-trailing-block", t.contentEditable = "false", t.addEventListener("mousedown", (t) => {
				t.preventDefault(), e.transact((t) => {
					let [n] = e.insertBlocks([{ type: "paragraph" }], e.document[e.document.length - 1], "after");
					e.setTextCursorPosition(n, "start"), t.scrollIntoView();
				}), e.prosemirrorView?.focus();
			}), t;
		}, { side: 1 });
	}
	function n(e, n, r) {
		let i = n.map(e.mapping, e.doc), a = i.find(), o = a.length > 0;
		return o === pM(e.doc, r) ? i : o ? i.remove(a) : i.add(e.doc, [t(e.doc.content.size - 1)]);
	}
	return {
		key: "trailingNode",
		prosemirrorPlugins: [new R({
			key: fM,
			state: {
				init: (t, r) => n(r.tr, V.empty, e.isEditable),
				apply: (t, r) => !t.docChanged && !t.getMeta(fM) ? r : n(t, r, e.isEditable)
			},
			view(e) {
				let t = e.editable;
				return { update(e) {
					e.editable !== t && (t = e.editable, e.dispatch(e.state.tr.setMeta(fM, !0)));
				} };
			},
			props: { decorations: (e) => fM.getState(e) }
		})]
	};
}), hM = new z("blocknote-show-selection"), gM = j(({ editor: e }) => {
	let t = Kn({ enabledSet: /* @__PURE__ */ new Set() }, { onUpdate() {
		e.transact((e) => e.setMeta(hM, {}));
	} });
	return {
		key: "showSelection",
		store: t,
		prosemirrorPlugins: [new R({
			key: hM,
			props: { decorations: (e) => {
				let { doc: n, selection: r } = e;
				if (t.state.enabledSet.size === 0) return V.empty;
				let i = B.inline(r.from, r.to, { "data-show-selection": "true" });
				return V.create(n, [i]);
			} }
		})],
		showSelection(e, n) {
			t.setState({ enabledSet: e ? /* @__PURE__ */ new Set([...t.state.enabledSet, n]) : new Set([...t.state.enabledSet].filter((e) => e !== n)) });
		}
	};
}), _M = {
	slash_menu: {
		heading: {
			title: "Heading 1",
			subtext: "Top-level heading",
			aliases: [
				"h",
				"heading1",
				"h1"
			],
			group: "Headings"
		},
		heading_2: {
			title: "Heading 2",
			subtext: "Key section heading",
			aliases: [
				"h2",
				"heading2",
				"subheading"
			],
			group: "Headings"
		},
		heading_3: {
			title: "Heading 3",
			subtext: "Subsection and group heading",
			aliases: [
				"h3",
				"heading3",
				"subheading"
			],
			group: "Headings"
		},
		heading_4: {
			title: "Heading 4",
			subtext: "Minor subsection heading",
			aliases: [
				"h4",
				"heading4",
				"subheading4"
			],
			group: "Subheadings"
		},
		heading_5: {
			title: "Heading 5",
			subtext: "Small subsection heading",
			aliases: [
				"h5",
				"heading5",
				"subheading5"
			],
			group: "Subheadings"
		},
		heading_6: {
			title: "Heading 6",
			subtext: "Lowest-level heading",
			aliases: [
				"h6",
				"heading6",
				"subheading6"
			],
			group: "Subheadings"
		},
		toggle_heading: {
			title: "Toggle Heading 1",
			subtext: "Toggleable top-level heading",
			aliases: [
				"h",
				"heading1",
				"h1",
				"collapsable"
			],
			group: "Subheadings"
		},
		toggle_heading_2: {
			title: "Toggle Heading 2",
			subtext: "Toggleable key section heading",
			aliases: [
				"h2",
				"heading2",
				"subheading",
				"collapsable"
			],
			group: "Subheadings"
		},
		toggle_heading_3: {
			title: "Toggle Heading 3",
			subtext: "Toggleable subsection and group heading",
			aliases: [
				"h3",
				"heading3",
				"subheading",
				"collapsable"
			],
			group: "Subheadings"
		},
		quote: {
			title: "Quote",
			subtext: "Quote or excerpt",
			aliases: [
				"quotation",
				"blockquote",
				"bq"
			],
			group: "Basic blocks"
		},
		toggle_list: {
			title: "Toggle List",
			subtext: "List with hideable sub-items",
			aliases: [
				"li",
				"list",
				"toggleList",
				"toggle list",
				"collapsable list"
			],
			group: "Basic blocks"
		},
		numbered_list: {
			title: "Numbered List",
			subtext: "List with ordered items",
			aliases: [
				"ol",
				"li",
				"list",
				"numberedlist",
				"numbered list"
			],
			group: "Basic blocks"
		},
		bullet_list: {
			title: "Bullet List",
			subtext: "List with unordered items",
			aliases: [
				"ul",
				"li",
				"list",
				"bulletlist",
				"bullet list"
			],
			group: "Basic blocks"
		},
		check_list: {
			title: "Check List",
			subtext: "List with checkboxes",
			aliases: [
				"ul",
				"li",
				"list",
				"checklist",
				"check list",
				"checked list",
				"checkbox"
			],
			group: "Basic blocks"
		},
		paragraph: {
			title: "Paragraph",
			subtext: "The body of your document",
			aliases: ["p", "paragraph"],
			group: "Basic blocks"
		},
		code_block: {
			title: "Code Block",
			subtext: "Code block with syntax highlighting",
			aliases: ["code", "pre"],
			group: "Basic blocks"
		},
		page_break: {
			title: "Page Break",
			subtext: "Page separator",
			aliases: [
				"page",
				"break",
				"separator"
			],
			group: "Basic blocks"
		},
		table: {
			title: "Table",
			subtext: "Table with editable cells",
			aliases: ["table"],
			group: "Advanced"
		},
		image: {
			title: "Image",
			subtext: "Resizable image with caption",
			aliases: [
				"image",
				"imageUpload",
				"upload",
				"img",
				"picture",
				"media",
				"url"
			],
			group: "Media"
		},
		video: {
			title: "Video",
			subtext: "Resizable video with caption",
			aliases: [
				"video",
				"videoUpload",
				"upload",
				"mp4",
				"film",
				"media",
				"url"
			],
			group: "Media"
		},
		audio: {
			title: "Audio",
			subtext: "Embedded audio with caption",
			aliases: [
				"audio",
				"audioUpload",
				"upload",
				"mp3",
				"sound",
				"media",
				"url"
			],
			group: "Media"
		},
		file: {
			title: "File",
			subtext: "Embedded file",
			aliases: [
				"file",
				"upload",
				"embed",
				"media",
				"url"
			],
			group: "Media"
		},
		emoji: {
			title: "Emoji",
			subtext: "Search for and insert an emoji",
			aliases: [
				"emoji",
				"emote",
				"emotion",
				"face"
			],
			group: "Others"
		},
		divider: {
			title: "Divider",
			subtext: "Visually divide blocks",
			aliases: [
				"divider",
				"hr",
				"line",
				"horizontal rule"
			],
			group: "Basic blocks"
		}
	},
	placeholders: {
		default: "Enter text or type '/' for commands",
		heading: "Heading",
		toggleListItem: "Toggle",
		bulletListItem: "List",
		numberedListItem: "List",
		checkListItem: "List",
		emptyDocument: void 0,
		new_comment: "Write a comment...",
		edit_comment: "Edit comment...",
		comment_reply: "Add comment..."
	},
	file_blocks: { add_button_text: {
		image: "Add image",
		video: "Add video",
		audio: "Add audio",
		file: "Add file"
	} },
	toggle_blocks: { add_block_button: "Empty toggle. Click to add a block." },
	side_menu: {
		add_block_label: "Add block",
		drag_handle_label: "Open block menu"
	},
	drag_handle: {
		delete_menuitem: "Delete",
		colors_menuitem: "Colors",
		header_row_menuitem: "Header row",
		header_column_menuitem: "Header column"
	},
	table_handle: {
		delete_column_menuitem: "Delete column",
		delete_row_menuitem: "Delete row",
		add_left_menuitem: "Add column left",
		add_right_menuitem: "Add column right",
		add_above_menuitem: "Add row above",
		add_below_menuitem: "Add row below",
		split_cell_menuitem: "Split cell",
		merge_cells_menuitem: "Merge cells",
		background_color_menuitem: "Background color"
	},
	suggestion_menu: { no_items_title: "No items found" },
	color_picker: {
		text_title: "Text",
		background_title: "Background",
		colors: {
			default: "Auto",
			gray: "Gray",
			brown: "Brown",
			red: "Red",
			orange: "Orange",
			yellow: "Yellow",
			green: "Green",
			blue: "Blue",
			purple: "Purple",
			pink: "Pink"
		}
	},
	formatting_toolbar: {
		bold: {
			tooltip: "Bold",
			secondary_tooltip: "Mod+B"
		},
		italic: {
			tooltip: "Italic",
			secondary_tooltip: "Mod+I"
		},
		underline: {
			tooltip: "Underline",
			secondary_tooltip: "Mod+U"
		},
		strike: {
			tooltip: "Strike",
			secondary_tooltip: "Mod+Shift+S"
		},
		code: {
			tooltip: "Code",
			secondary_tooltip: ""
		},
		colors: { tooltip: "Colors" },
		link: {
			tooltip: "Create link",
			secondary_tooltip: "Mod+K"
		},
		file_caption: {
			tooltip: "Edit caption",
			input_placeholder: "Edit caption"
		},
		file_replace: { tooltip: {
			image: "Replace image",
			video: "Replace video",
			audio: "Replace audio",
			file: "Replace file"
		} },
		file_rename: {
			tooltip: {
				image: "Rename image",
				video: "Rename video",
				audio: "Rename audio",
				file: "Rename file"
			},
			input_placeholder: {
				image: "Rename image",
				video: "Rename video",
				audio: "Rename audio",
				file: "Rename file"
			}
		},
		file_download: { tooltip: {
			image: "Download image",
			video: "Download video",
			audio: "Download audio",
			file: "Download file"
		} },
		file_delete: { tooltip: {
			image: "Delete image",
			video: "Delete video",
			audio: "Delete audio",
			file: "Delete file"
		} },
		file_preview_toggle: { tooltip: "Toggle preview" },
		nest: {
			tooltip: "Nest block",
			secondary_tooltip: "Tab"
		},
		unnest: {
			tooltip: "Unnest block",
			secondary_tooltip: "Shift+Tab"
		},
		align_left: { tooltip: "Align text left" },
		align_center: { tooltip: "Align text center" },
		align_right: { tooltip: "Align text right" },
		align_justify: { tooltip: "Justify text" },
		table_cell_merge: { tooltip: "Merge cells" },
		comment: { tooltip: "Add comment" }
	},
	file_panel: {
		upload: {
			title: "Upload",
			file_placeholder: {
				image: "Upload image",
				video: "Upload video",
				audio: "Upload audio",
				file: "Upload file"
			},
			upload_error: "Error: Upload failed"
		},
		embed: {
			title: "Embed",
			embed_button: {
				image: "Embed image",
				video: "Embed video",
				audio: "Embed audio",
				file: "Embed file"
			},
			url_placeholder: "Enter URL"
		}
	},
	link_toolbar: {
		delete: { tooltip: "Remove link" },
		edit: {
			text: "Edit link",
			tooltip: "Edit"
		},
		open: { tooltip: "Open in new tab" },
		form: {
			title_placeholder: "Edit title",
			url_placeholder: "Edit URL"
		}
	},
	comments: {
		edited: "edited",
		save_button_text: "Save",
		cancel_button_text: "Cancel",
		deleted_reference_text: "Original content deleted",
		actions: {
			add_reaction: "Add reaction",
			resolve: "Resolve",
			reopen: "Re-open",
			edit_comment: "Edit comment",
			delete_comment: "Delete comment",
			more_actions: "More actions"
		},
		reactions: { reacted_by: "Reacted by" },
		sidebar: {
			marked_as_resolved: "Marked as resolved",
			more_replies: (e) => `${e} more replies`
		}
	},
	generic: { ctrl_shortcut: "Ctrl" }
}, vM = class {
	callbacks = {};
	on(e, t) {
		return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), () => this.off(e, t);
	}
	emit(e, ...t) {
		let n = this.callbacks[e];
		n && n.forEach((e) => e.apply(this, t));
	}
	off(e, t) {
		let n = this.callbacks[e];
		n && (t ? this.callbacks[e] = n.filter((e) => e !== t) : delete this.callbacks[e]);
	}
	removeAllListeners() {
		this.callbacks = {};
	}
}, yM = class {
	match;
	handler;
	undoable;
	inCode;
	inCodeMark;
	constructor(e, t, n = {}) {
		this.match = e, this.match = e, this.handler = typeof t == "string" ? bM(t) : t, this.undoable = n.undoable !== !1, this.inCode = n.inCode || !1, this.inCodeMark = n.inCodeMark !== !1;
	}
};
function bM(e) {
	return function(t, n, r, i) {
		let a = e;
		if (n[1]) {
			let e = n[0].lastIndexOf(n[1]);
			a += n[0].slice(e + n[1].length), r += e;
			let t = r - i;
			t > 0 && (a = n[0].slice(e - t, e) + a, r = i);
		}
		return t.tr.insertText(a, r, i);
	};
}
var xM = 500;
function SM({ rules: e }) {
	let t = new R({
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				return e.getMeta(this) || (e.selectionSet || e.docChanged ? null : t);
			}
		},
		props: {
			handleTextInput(n, r, i, a) {
				return CM(n, r, i, a, e, t);
			},
			handleDOMEvents: { compositionend: (n) => {
				setTimeout(() => {
					let { $cursor: r } = n.state.selection;
					r && CM(n, r.pos, r.pos, "", e, t);
				});
			} }
		},
		isInputRules: !0
	});
	return t;
}
function CM(e, t, n, r, i, a) {
	if (e.composing) return !1;
	let o = e.state.tr.insertText(r, t, n), s = o.mapping.map(t), c = o.mapping.map(n), l = null, u = o.doc.resolve(s), d = u.parent.textBetween(Math.max(0, u.parentOffset - xM), u.parentOffset, null, "￼");
	for (let t = 0; t < i.length; t++) {
		let n = i[t];
		if (!n.inCodeMark && u.marks().some((e) => e.type.spec.code)) continue;
		if (u.parent.type.spec.code) {
			if (!n.inCode) continue;
		} else if (n.inCode === "only") continue;
		let f = n.match.exec(d);
		if (!f || f[0].length < r.length) continue;
		l ??= e.state.apply(o);
		let p = n.handler(l, f, s - f[0].length, c);
		if (p) return e.dispatch(o), e.dispatch(mA(e.state.tr)), n.undoable && p.setMeta(a, {
			transform: p,
			from: s,
			to: c,
			text: r
		}), e.dispatch(p), !0;
	}
	return !1;
}
new yM(/--$/, "—", { inCodeMark: !1 }), new yM(/\.\.\.$/, "…", { inCodeMark: !1 }), new yM(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“", { inCodeMark: !1 }), new yM(/"$/, "”", { inCodeMark: !1 }), new yM(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘", { inCodeMark: !1 }), new yM(/'$/, "’", { inCodeMark: !1 });
//#endregion
//#region ../../node_modules/prosemirror-gapcursor/dist/index.js
var wM = class e extends F {
	constructor(e) {
		super(e, e);
	}
	map(t, n) {
		let r = t.resolve(n.map(this.head));
		return e.valid(r) ? new e(r) : F.near(r);
	}
	content() {
		return P.empty;
	}
	eq(t) {
		return t instanceof e && t.head == this.head;
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		};
	}
	static fromJSON(t, n) {
		if (typeof n.pos != "number") throw RangeError("Invalid input for GapCursor.fromJSON");
		return new e(t.resolve(n.pos));
	}
	getBookmark() {
		return new TM(this.anchor);
	}
	static valid(e) {
		let t = e.parent;
		if (t.inlineContent || !DM(e) || !OM(e)) return !1;
		let n = t.type.spec.allowGapCursor;
		if (n != null) return n;
		let r = t.contentMatchAt(e.index()).defaultType;
		return r && r.isTextblock;
	}
	static findGapCursorFrom(t, n, r = !1) {
		search: for (;;) {
			if (!r && e.valid(t)) return t;
			let i = t.pos, a = null;
			for (let r = t.depth;; r--) {
				let o = t.node(r);
				if (n > 0 ? t.indexAfter(r) < o.childCount : t.index(r) > 0) {
					a = o.child(n > 0 ? t.indexAfter(r) : t.index(r) - 1);
					break;
				} else if (r == 0) return null;
				i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			for (;;) {
				let o = n > 0 ? a.firstChild : a.lastChild;
				if (!o) {
					if (a.isAtom && !a.isText && !L.isSelectable(a)) {
						t = t.doc.resolve(i + a.nodeSize * n), r = !1;
						continue search;
					}
					break;
				}
				a = o, i += n;
				let s = t.doc.resolve(i);
				if (e.valid(s)) return s;
			}
			return null;
		}
	}
};
wM.prototype.visible = !1, wM.findFrom = wM.findGapCursorFrom, F.jsonID("gapcursor", wM);
var TM = class e {
	constructor(e) {
		this.pos = e;
	}
	map(t) {
		return new e(t.map(this.pos));
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return wM.valid(t) ? new wM(t) : F.near(t);
	}
};
function EM(e) {
	return e.isAtom || e.spec.isolating || e.spec.createGapCursor;
}
function DM(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.index(t), r = e.node(t);
		if (n == 0) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n - 1);; e = e.lastChild) {
			if (e.childCount == 0 && !e.inlineContent || EM(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function OM(e) {
	for (let t = e.depth; t >= 0; t--) {
		let n = e.indexAfter(t), r = e.node(t);
		if (n == r.childCount) {
			if (r.type.spec.isolating) return !0;
			continue;
		}
		for (let e = r.child(n);; e = e.firstChild) {
			if (e.childCount == 0 && !e.inlineContent || EM(e.type)) return !0;
			if (e.inlineContent) return !1;
		}
	}
	return !0;
}
function kM() {
	return new R({ props: {
		decorations: PM,
		createSelectionBetween(e, t, n) {
			return t.pos == n.pos && wM.valid(n) ? new wM(n) : null;
		},
		handleClick: MM,
		handleKeyDown: AM,
		handleDOMEvents: { beforeinput: NM }
	} });
}
var AM = wd({
	ArrowLeft: jM("horiz", -1),
	ArrowRight: jM("horiz", 1),
	ArrowUp: jM("vert", -1),
	ArrowDown: jM("vert", 1)
});
function jM(e, t) {
	let n = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
	return function(e, r, i) {
		let a = e.selection, o = t > 0 ? a.$to : a.$from, s = a.empty;
		if (a instanceof I) {
			if (!i.endOfTextblock(n) || o.depth == 0) return !1;
			s = !1, o = e.doc.resolve(t > 0 ? o.after() : o.before());
		}
		let c = wM.findGapCursorFrom(o, t, s);
		return c ? (r && r(e.tr.setSelection(new wM(c))), !0) : !1;
	};
}
function MM(e, t, n) {
	if (!e || !e.editable) return !1;
	let r = e.state.doc.resolve(t);
	if (!wM.valid(r)) return !1;
	let i = e.posAtCoords({
		left: n.clientX,
		top: n.clientY
	});
	return i && i.inside > -1 && L.isSelectable(e.state.doc.nodeAt(i.inside)) ? !1 : (e.dispatch(e.state.tr.setSelection(new wM(r))), !0);
}
function NM(e, t) {
	if (t.inputType != "insertCompositionText" || !(e.state.selection instanceof wM)) return !1;
	let { $from: n } = e.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(e.state.schema.nodes.text);
	if (!r) return !1;
	let i = M.empty;
	for (let e = r.length - 1; e >= 0; e--) i = M.from(r[e].createAndFill(null, i));
	let a = e.state.tr.replace(n.pos, n.pos, new P(i, 0, 0));
	return a.setSelection(I.near(a.doc.resolve(n.pos + 1))), e.dispatch(a), !1;
}
function PM(e) {
	if (!(e.selection instanceof wM)) return null;
	let t = document.createElement("div");
	return t.className = "ProseMirror-gapcursor", V.create(e.doc, [B.widget(e.selection.head, t, { key: "gapcursor" })]);
}
//#endregion
//#region ../../node_modules/@tiptap/extensions/dist/gap-cursor/index.js
var FM = W.create({
	name: "gapCursor",
	addProseMirrorPlugins() {
		return [kM()];
	},
	extendNodeSchema(e) {
		return { allowGapCursor: U(H(e, "allowGapCursor", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) ?? null };
	}
}), IM = rh.create({
	name: "text",
	group: "inline",
	parseMarkdown: (e) => ({
		type: "text",
		text: e.text || ""
	}),
	renderMarkdown: (e) => e.text || ""
});
//#endregion
//#region node_modules/@blocknote/core/dist/src-Bcud0PIg.js
function LM(e, t, n, r = "before") {
	let i = typeof n == "string" ? n : n.id, a = oD(e), o = t.map((e) => {
		let t = iO(e, a);
		return t.check(), t;
	}), s = aO(i, e.doc);
	if (!s) throw Error(`Block with ID ${i} not found`);
	let c = s.posBeforeNode;
	return r === "after" && (c += s.node.nodeSize), e.step(new Ii(c, c, new P(M.from(o), 0, 0))), o.map((e) => gD(e, a));
}
function RM(e) {
	if (!e || e.type.name !== "column") throw Error("Invalid columnPos: does not point to column node.");
	let t = e.firstChild;
	if (!t) throw Error("Invalid column: does not have child node.");
	let n = t.firstChild;
	if (!n) throw Error("Invalid blockContainer: does not have child node.");
	return e.childCount === 1 && t.childCount === 1 && n.type.name === "paragraph" && n.content.content.length === 0;
}
function zM(e, t) {
	let n = e.doc.resolve(t), r = n.nodeAfter;
	if (!r || r.type.name !== "columnList") throw Error("Invalid columnListPos: does not point to columnList node.");
	for (let t = r.childCount - 1; t >= 0; t--) {
		let r = e.doc.resolve(n.pos + 1).posAtIndex(t), i = e.doc.resolve(r).nodeAfter;
		if (!i || i.type.name !== "column") throw Error("Invalid columnPos: does not point to column node.");
		RM(i) && e.delete(r, r + i.nodeSize);
	}
}
function BM(e, t) {
	zM(e, t);
	let n = e.doc.resolve(t).nodeAfter;
	if (!n || n.type.name !== "columnList") throw Error("Invalid columnListPos: does not point to columnList node.");
	if (n.childCount > 2) return;
	if (n.childCount < 2) throw Error("Invalid columnList: contains fewer than two children.");
	let r = t + 1, i = e.doc.resolve(r).nodeAfter, a = t + n.nodeSize - 1, o = e.doc.resolve(a).nodeBefore;
	if (!i || !o) throw Error("Invalid columnList: does not contain children.");
	let s = RM(i), c = RM(o);
	if (s && c) {
		e.delete(t, t + n.nodeSize);
		return;
	}
	if (s) {
		e.step(new Li(t, t + n.nodeSize, a - o.nodeSize + 1, a - 1, P.empty, 0, !1));
		return;
	}
	if (c) {
		e.step(new Li(t, t + n.nodeSize, r + 1, r + i.nodeSize - 1, P.empty, 0, !1));
		return;
	}
}
function VM(e, t, n) {
	let r = oD(e), i = n.map((e) => {
		let t = iO(e, r);
		return t.check(), t;
	}), a = new Set(t.map((e) => typeof e == "string" ? e : e.id)), o = [], s = /* @__PURE__ */ new Set(), c = typeof t[0] == "string" ? t[0] : t[0].id, l = 0;
	if (e.doc.descendants((t, u) => {
		if (a.size === 0) return !1;
		if (!t.type.isInGroup("bnBlock") || !a.has(t.attrs.id)) return !0;
		if (o.push(gD(t, r)), a.delete(t.attrs.id), n.length > 0 && t.attrs.id === c) {
			let t = e.doc.nodeSize;
			e.insert(u, i);
			let n = e.doc.nodeSize;
			l += t - n;
		}
		let d = e.doc.nodeSize, f = e.doc.resolve(u - l);
		f.node().type.name === "column" ? s.add(f.before(-1)) : f.node().type.name === "columnList" && s.add(f.before()), f.node().type.name === "blockGroup" && f.node(f.depth - 1).type.name !== "doc" && f.node().childCount === 1 ? e.delete(f.before(), f.after()) : e.delete(u - l, u - l + t.nodeSize);
		let p = e.doc.nodeSize;
		return l += d - p, !1;
	}), a.size > 0) {
		let e = [...a].join("\n");
		throw Error("Blocks with the following IDs could not be found in the editor: " + e);
	}
	return s.forEach((t) => BM(e, t)), {
		insertedBlocks: i.map((e) => gD(e, r)),
		removedBlocks: o
	};
}
function HM(e, t, n, r, i) {
	let a;
	if (!t) throw Error("blockContent is required");
	if (typeof t == "string") a = tO([t], e.pmSchema, r);
	else if (Array.isArray(t)) a = tO(t, e.pmSchema, r);
	else if (t.type === "tableContent") a = nO(t, e.pmSchema);
	else throw new FE(t.type);
	let o = (i?.document ?? document).createDocumentFragment();
	for (let t of a) if (t.type.name !== "text" && e.schema.inlineContentSchema[t.type.name]) {
		let r = e.schema.inlineContentSpecs[t.type.name].implementation;
		if (r) {
			let a = hD(t, e.schema.inlineContentSchema, e.schema.styleSchema), s = r.render.call({
				renderType: "dom",
				props: void 0
			}, a, () => {}, e);
			if (s) {
				if (o.appendChild(s.dom), s.contentDOM) {
					let e = n.serializeFragment(t.content, i);
					s.contentDOM.dataset.editable = "", s.contentDOM.appendChild(e);
				}
				continue;
			}
		}
	} else if (t.type.name === "text") {
		let n = document.createTextNode(t.textContent);
		for (let r of t.marks.toReversed()) if (r.type.name in e.schema.styleSpecs) {
			let t = e.schema.styleSpecs[r.type.name].implementation.render(r.attrs.stringValue, e);
			t.contentDOM.appendChild(n), n = t.dom;
		} else {
			let e = r.type.spec.toDOM(r, !0), t = li.renderSpec(document, e);
			t.contentDOM.appendChild(n), n = t.dom;
		}
		o.appendChild(n);
	} else {
		let e = n.serializeFragment(M.from([t]), i);
		o.appendChild(e);
	}
	return o;
}
function UM(e, t, n, r) {
	let i = e.pmSchema.nodes.blockContainer, a = t.props || {};
	for (let [n, r] of Object.entries(e.schema.blockSchema[t.type].propSchema)) !(n in a) && r.default !== void 0 && (a[n] = r.default);
	let o = t.children || [], s = e.blockImplementations[t.type].implementation.render.call({
		renderType: "dom",
		props: void 0
	}, {
		...t,
		props: a,
		children: o
	}, e);
	if (s.contentDOM && t.content) {
		let i = HM(e, t.content, n, t.type, r);
		s.contentDOM.appendChild(i);
	}
	if (e.pmSchema.nodes[t.type].isInGroup("bnBlock")) {
		if (t.children && t.children.length > 0) {
			let i = WM(e, t.children, n, r);
			s.contentDOM?.append(i);
		}
		return s.dom;
	}
	let c = i.spec?.toDOM?.(i.create({
		id: t.id,
		...a
	}));
	return c.contentDOM?.appendChild(s.dom), t.children && t.children.length > 0 && c.contentDOM?.appendChild(GM(e, t.children, n, r)), c.dom;
}
function WM(e, t, n, r) {
	let i = (r?.document ?? document).createDocumentFragment();
	for (let a of t) {
		let t = UM(e, a, n, r);
		i.appendChild(t);
	}
	return i;
}
var GM = (e, t, n, r) => {
	let i = e.pmSchema.nodes.blockGroup, a = i.spec.toDOM(i.create({})), o = WM(e, t, n, r);
	return a.contentDOM?.appendChild(o), a.dom;
}, KM = (e) => (e.querySelectorAll("[data-content-type=\"numberedListItem\"]").forEach((e) => {
	let t = e.closest(".bn-block-outer")?.previousElementSibling?.querySelector("[data-content-type=\"numberedListItem\"]");
	if (!t) e.setAttribute("data-index", e.getAttribute("data-start") || "1");
	else {
		let n = t.getAttribute("data-index");
		e.setAttribute("data-index", (parseInt(n || "0") + 1).toString());
	}
}), e), qM = (e) => (e.querySelectorAll("[data-content-type=\"checkListItem\"] input").forEach((e) => {
	e.disabled = !0;
}), e), JM = (e) => (e.querySelectorAll(".bn-toggle-wrapper[data-show-children=\"false\"]").forEach((e) => {
	e.setAttribute("data-show-children", "true");
}), e), YM = (e) => (e.querySelectorAll("[data-content-type=\"table\"] table").forEach((e) => {
	e.setAttribute("style", "--default-cell-min-width: 120px;"), e.setAttribute("data-show-children", "true");
}), e), XM = (e) => (e.querySelectorAll("[data-content-type=\"table\"] table").forEach((e) => {
	let t = document.createElement("div");
	t.className = "tableWrapper";
	let n = document.createElement("div");
	n.className = "tableWrapper-inner", t.appendChild(n), e.parentElement?.appendChild(t), t.appendChild(e);
}), e), ZM = (e) => (e.querySelectorAll(".bn-inline-content:empty").forEach((e) => {
	let t = document.createElement("span");
	t.className = "ProseMirror-trailingBreak", t.setAttribute("style", "display: inline-block;"), e.appendChild(t);
}), e), QM = (e, t) => {
	let n = li.fromSchema(e), r = [
		KM,
		qM,
		JM,
		YM,
		XM,
		ZM
	];
	return { serializeBlocks: (e, i) => {
		let a = GM(t, e, n, i);
		for (let e of r) a = e(a);
		return a.outerHTML;
	} };
};
function $M(e) {
	return e.transact((e) => {
		let t = eD(e.doc, e.selection.anchor);
		if (e.selection instanceof K) return {
			type: "cell",
			anchorBlockId: t.node.attrs.id,
			anchorCellOffset: e.selection.$anchorCell.pos - t.posBeforeNode,
			headCellOffset: e.selection.$headCell.pos - t.posBeforeNode
		};
		if (e.selection instanceof L) return {
			type: "node",
			anchorBlockId: t.node.attrs.id
		};
		{
			let n = eD(e.doc, e.selection.head);
			return {
				type: "text",
				anchorBlockId: t.node.attrs.id,
				headBlockId: n.node.attrs.id,
				anchorOffset: e.selection.anchor - t.posBeforeNode,
				headOffset: e.selection.head - n.posBeforeNode
			};
		}
	});
}
function eN(e, t) {
	let n = aO(t.anchorBlockId, e.doc)?.posBeforeNode;
	if (n === void 0) throw Error(`Could not find block with ID ${t.anchorBlockId} to update selection`);
	let r;
	if (t.type === "cell") r = K.create(e.doc, n + t.anchorCellOffset, n + t.headCellOffset);
	else if (t.type === "node") r = L.create(e.doc, n + 1);
	else {
		let i = aO(t.headBlockId, e.doc)?.posBeforeNode;
		if (i === void 0) throw Error(`Could not find block with ID ${t.headBlockId} to update selection`);
		r = I.create(e.doc, n + t.anchorOffset, i + t.headOffset);
	}
	e.setSelection(r);
}
function tN(e) {
	return e.flatMap((e) => e.type === "column" ? e.children : [e]);
}
function nN(e, t, n, r) {
	e.transact(() => {
		let i = e.getBlock(n);
		if (i?.type === "columnList") {
			let t = r === "after" ? e.getNextBlock(i) : e.getPrevBlock(i);
			t && (n = t, r = r === "after" ? "before" : "after");
		}
		e.removeBlocks(t), e.insertBlocks(tN(t), n, r);
	});
}
function rN(e, t, n) {
	e.transact((r) => {
		let i = e.getSelection()?.blocks || [e.getTextCursorPosition().block], a = $M(e);
		nN(e, i, t, n), eN(r, a);
	});
}
function iN(e) {
	return !e || e.type !== "columnList";
}
function aN(e, t, n) {
	let r, i;
	if (t ? t.children.length > 0 ? (r = t.children[t.children.length - 1], i = "after") : (r = t, i = "before") : n && (r = n, i = "before"), !r || !i) return;
	let a = e.getParentBlock(r);
	return iN(a) ? {
		referenceBlock: r,
		placement: i
	} : aN(e, i === "after" ? r : e.getPrevBlock(r), a);
}
function oN(e, t, n) {
	let r, i;
	if (t ? t.children.length > 0 ? (r = t.children[0], i = "before") : (r = t, i = "after") : n && (r = n, i = "after"), !r || !i) return;
	let a = e.getParentBlock(r);
	return iN(a) ? {
		referenceBlock: r,
		placement: i
	} : oN(e, i === "before" ? r : e.getNextBlock(r), a);
}
function sN(e, t) {
	e.transact(() => {
		let n;
		if (t) {
			if (n = e.getBlock(t), !n) return;
		} else n = e.getSelection()?.blocks[0] || e.getTextCursorPosition().block;
		let r = aN(e, e.getPrevBlock(n), e.getParentBlock(n));
		r && (t ? nN(e, [n], r.referenceBlock, r.placement) : rN(e, r.referenceBlock, r.placement));
	});
}
function cN(e, t) {
	e.transact(() => {
		let n;
		if (t) {
			if (n = e.getBlock(t), !n) return;
		} else {
			let t = e.getSelection();
			n = t?.blocks[t?.blocks.length - 1] || e.getTextCursorPosition().block;
		}
		let r = oN(e, e.getNextBlock(n), e.getParentBlock(n));
		r && (t ? nN(e, [n], r.referenceBlock, r.placement) : rN(e, r.referenceBlock, r.placement));
	});
}
function lN(e, t, n) {
	let { $from: r, $to: i } = e.selection, a = r.blockRange(i, (e) => e.childCount > 0 && (e.type.name === "blockGroup" || e.type.name === "column"));
	if (!a) return !1;
	let o = a.startIndex;
	if (o === 0) return !1;
	let s = a.parent.child(o - 1);
	if (s.type !== t) return !1;
	let c = s.lastChild && s.lastChild.type === n, l = M.from(c ? t.create() : null), u = new P(M.from(t.create(null, M.from(n.create(null, l)))), c ? 3 : 1, 0), d = a.start, f = a.end;
	return e.step(new Li(d - (c ? 3 : 1), f, d, f, u, 1, !0)).scrollIntoView(), !0;
}
function uN(e) {
	return e.transact((t) => lN(t, e.pmSchema.nodes.blockContainer, e.pmSchema.nodes.blockGroup));
}
function dN(e, t, n, r) {
	let i = r.end, a = r.$to.end(r.depth);
	if (i < a) {
		let o = r.parent.child(r.endIndex - 1), s = o.lastChild && o.lastChild.type === n;
		e.step(new Li(i - (s ? 2 : 1), a, i, a, new P(M.from(t.create(null, n.create())), s ? 2 : 1, 0), +!s, !0)), r = new vr(e.doc.resolve(r.$from.pos), e.doc.resolve(a), r.depth);
	}
	let o = Ui(r);
	if (o == null) return !1;
	e.lift(r, o);
	let s = e.doc.resolve(e.mapping.map(i, -1) - 1);
	return ra(e.doc, s.pos) && s.nodeBefore.type === s.nodeAfter.type && e.join(s.pos), e.scrollIntoView(), !0;
}
function fN(e, t, n) {
	let { $from: r, $to: i } = e.selection, a = r.blockRange(i, (e) => e.childCount > 0 && (e.type.name === "blockGroup" || e.type.name === "column"));
	return a && r.node(a.depth - 1).type === t ? dN(e, t, n, a) : !1;
}
function pN(e) {
	return e.transact((t) => fN(t, e.pmSchema.nodes.blockContainer, e.pmSchema.nodes.blockGroup));
}
function mN(e) {
	return e.transact((e) => {
		let { bnBlock: t } = aD(e);
		return e.doc.resolve(t.beforePos).nodeBefore !== null;
	});
}
function hN(e) {
	return e.transact((e) => {
		let { bnBlock: t } = aD(e);
		return e.doc.resolve(t.beforePos).depth > 1;
	});
}
function gN(e, t) {
	let n = typeof t == "string" ? t : t.id, r = oD(e), i = aO(n, e);
	if (i) return gD(i.node, r);
}
function _N(e, t) {
	let n = aO(typeof t == "string" ? t : t.id, e), r = oD(e);
	if (!n) return;
	let i = e.resolve(n.posBeforeNode).nodeBefore;
	if (i) return gD(i, r);
}
function vN(e, t) {
	let n = aO(typeof t == "string" ? t : t.id, e), r = oD(e);
	if (!n) return;
	let i = e.resolve(n.posBeforeNode + n.node.nodeSize).nodeAfter;
	if (i) return gD(i, r);
}
function yN(e, t) {
	let n = typeof t == "string" ? t : t.id, r = oD(e), i = aO(n, e);
	if (!i) return;
	let a = e.resolve(i.posBeforeNode), o = a.node(), s = a.node(-1), c = s.type.name === "doc" ? void 0 : o.type.name === "blockGroup" ? s : o;
	if (c) return gD(c, r);
}
var bN = class {
	constructor(e) {
		this.editor = e;
	}
	get document() {
		return this.editor.transact((e) => _D(e.doc, this.editor.pmSchema));
	}
	getBlock(e) {
		return this.editor.transact((t) => gN(t.doc, e));
	}
	getPrevBlock(e) {
		return this.editor.transact((t) => _N(t.doc, e));
	}
	getNextBlock(e) {
		return this.editor.transact((t) => vN(t.doc, e));
	}
	getParentBlock(e) {
		return this.editor.transact((t) => yN(t.doc, e));
	}
	forEachBlock(e, t = !1) {
		let n = this.document.slice();
		t && n.reverse();
		function r(n) {
			for (let i of n) if (e(i) === !1 || !r(t ? i.children.slice().reverse() : i.children)) return !1;
			return !0;
		}
		r(n);
	}
	insertBlocks(e, t, n = "before") {
		return this.editor.transact((r) => LM(r, e, t, n));
	}
	updateBlock(e, t) {
		return this.editor.transact((n) => dO(n, e, t));
	}
	removeBlocks(e) {
		return this.editor.transact((t) => VM(t, e, []).removedBlocks);
	}
	replaceBlocks(e, t) {
		return this.editor.transact((n) => VM(n, e, t));
	}
	canNestBlock() {
		return mN(this.editor);
	}
	nestBlock() {
		uN(this.editor);
	}
	canUnnestBlock() {
		return hN(this.editor);
	}
	unnestBlock() {
		pN(this.editor);
	}
	moveBlocksUp(e) {
		return sN(this.editor, e);
	}
	moveBlocksDown(e) {
		return cN(this.editor, e);
	}
}, xN = class extends vM {
	constructor(e) {
		super(), this.editor = e, e.on("create", () => {
			e._tiptapEditor.on("update", ({ transaction: t, appendedTransactions: n }) => {
				this.emit("onChange", {
					editor: e,
					transaction: t,
					appendedTransactions: n
				});
			}), e._tiptapEditor.on("selectionUpdate", ({ transaction: t }) => {
				this.emit("onSelectionChange", {
					editor: e,
					transaction: t
				});
			}), e._tiptapEditor.on("mount", () => {
				this.emit("onMount", { editor: e });
			}), e._tiptapEditor.on("unmount", () => {
				this.emit("onUnmount", { editor: e });
			});
		});
	}
	onChange(e, t = !0) {
		let n = ({ transaction: n, appendedTransactions: r }) => {
			!t && SN(n) || e(this.editor, { getChanges() {
				return jA(n, r);
			} });
		};
		return this.on("onChange", n), () => {
			this.off("onChange", n);
		};
	}
	onSelectionChange(e, t = !1) {
		let n = (n) => {
			!t && SN(n.transaction) || e(this.editor);
		};
		return this.on("onSelectionChange", n), () => {
			this.off("onSelectionChange", n);
		};
	}
	onMount(e) {
		return this.on("onMount", e), () => {
			this.off("onMount", e);
		};
	}
	onUnmount(e) {
		return this.on("onUnmount", e), () => {
			this.off("onUnmount", e);
		};
	}
};
function SN(e) {
	return !!e.getMeta("y-sync$");
}
function CN(e) {
	return Array.prototype.indexOf.call(e.parentElement.childNodes, e);
}
function wN(e) {
	return e.nodeType === 3 && !/\S/.test(e.nodeValue || "");
}
function TN(e) {
	e.querySelectorAll("li > ul, li > ol").forEach((e) => {
		let t = CN(e), n = e.parentElement, r = Array.from(n.childNodes).slice(t + 1);
		e.remove(), r.forEach((e) => {
			e.remove();
		}), n.insertAdjacentElement("afterend", e), r.reverse().forEach((t) => {
			if (wN(t)) return;
			let n = document.createElement("li");
			n.append(t), e.insertAdjacentElement("afterend", n);
		}), n.childNodes.length === 0 && n.remove();
	});
}
function EN(e) {
	e.querySelectorAll("li + ul, li + ol").forEach((e) => {
		let t = e.previousElementSibling, n = document.createElement("div");
		t.insertAdjacentElement("afterend", n), n.append(t);
		let r = document.createElement("div");
		for (r.setAttribute("data-node-type", "blockGroup"), n.append(r); n.nextElementSibling?.nodeName === "UL" || n.nextElementSibling?.nodeName === "OL";) r.append(n.nextElementSibling);
	});
}
var DN = null;
function ON() {
	return DN ||= document.implementation.createHTMLDocument("title");
}
function kN(e) {
	if (typeof e == "string") {
		let t = ON().createElement("div");
		t.innerHTML = e, e = t;
	}
	return TN(e), EN(e), e;
}
function AN(e) {
	let t = e.ownerDocument.createTreeWalker(e, 128), n;
	for (; n = t.nextNode();) if (/^\s*notionvc:/.test(n.nodeValue || "")) return !0;
	return !1;
}
function jN(e) {
	let t = /* @__PURE__ */ new Set(["PRE", "CODE"]), n = e.ownerDocument.createTreeWalker(e, 4, { acceptNode(n) {
		let r = n.parentElement;
		for (; r && r !== e;) {
			if (t.has(r.tagName)) return 2;
			r = r.parentElement;
		}
		return 1;
	} }), r = [], i;
	for (; i = n.nextNode();) r.push(i);
	for (let e of r) e.nodeValue && /[\r\n]/.test(e.nodeValue) && (e.nodeValue = e.nodeValue.replace(/[ \t\r\n\f]+/g, " "));
}
function MN(e) {
	AN(e) || jN(e);
}
function NN(e, t) {
	let n = kN(e);
	MN(n);
	let r = Yr.fromSchema(t).parse(n, { topNode: t.nodes.blockGroup.create() }), i = [];
	for (let e = 0; e < r.childCount; e++) i.push(gD(r.child(e), t));
	return i;
}
function PN(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function FN(e) {
	return e ? /\w/.test(e) : !1;
}
function IN(e, t, n) {
	let r = t > 0 ? e[t - 1] : void 0, i = t + n < e.length ? e[t + n] : void 0;
	return FN(r) && FN(i);
}
function LN(e, t) {
	if (e[t] !== "\\" || t + 1 >= e.length) return null;
	let n = e[t + 1];
	return n === "\n" ? {
		html: "<br>\n",
		end: t + 2
	} : "\\`*_{}[]()#+-.!~|>".includes(n) ? {
		html: PN(n),
		end: t + 2
	} : null;
}
function RN(e, t) {
	return e[t] === "`" ? tP(e, t) : null;
}
function zN(e, t) {
	return e[t] !== "!" || e[t + 1] !== "[" ? null : nP(e, t);
}
function BN(e, t) {
	return e[t] === "[" ? rP(e, t) : null;
}
function VN(e, t) {
	return e[t] !== "~" || e[t + 1] !== "~" ? null : sP(e, t, "~~", "<del>", "</del>");
}
function HN(e, t) {
	return e[t] === "*" && e[t + 1] === "*" && e[t + 2] === "*" || e[t] === "_" && e[t + 1] === "_" && e[t + 2] === "_" && !IN(e, t, 3) ? sP(e, t, e.substring(t, t + 3), "<strong><em>", "</em></strong>") : null;
}
function UN(e, t) {
	return e[t] === "*" && e[t + 1] === "*" || e[t] === "_" && e[t + 1] === "_" && !IN(e, t, 2) ? sP(e, t, e.substring(t, t + 2), "<strong>", "</strong>") : null;
}
function WN(e, t) {
	return e[t] === "*" || e[t] === "_" && !IN(e, t, 1) ? sP(e, t, e[t], "<em>", "</em>") : null;
}
function GN(e, t) {
	return e[t] === "\n" ? {
		html: "<br>\n",
		end: t + 1
	} : null;
}
var KN = /^<\/?[a-zA-Z][a-zA-Z0-9-]*(?:\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*\s*\/?>/, qN = /^<!--[\s\S]*?-->/, JN = /^<!\[CDATA\[[\s\S]*?\]\]>/, YN = /^<\?[\s\S]*?\?>/, XN = /^<![A-Za-z][\s\S]*?>/;
function ZN(e, t) {
	if (e[t] !== "<") return null;
	let n = e.substring(t);
	for (let e of [
		qN,
		JN,
		YN,
		XN,
		KN
	]) {
		let r = n.match(e);
		if (r) return {
			html: r[0],
			end: t + r[0].length
		};
	}
	return null;
}
var QN = /* @__PURE__ */ new Set("\\`![~*_\n<"), $N = [
	LN,
	RN,
	zN,
	BN,
	VN,
	HN,
	UN,
	WN,
	ZN,
	GN
];
function eP(e) {
	let t = "", n = 0;
	for (; n < e.length;) {
		if (e[n] === "\n" && n >= 2 && e[n - 1] === " " && e[n - 2] === " ") {
			t = t.replace(/ +$/, ""), t += "<br>\n", n++;
			continue;
		}
		let r = !1;
		if (QN.has(e[n])) for (let i of $N) {
			let a = i(e, n);
			if (a) {
				t += a.html, n = a.end, r = !0;
				break;
			}
		}
		if (!r) {
			let r = n;
			for (n++; n < e.length && !QN.has(e[n]);) n++;
			t += PN(e.substring(r, n));
		}
	}
	return t;
}
function tP(e, t) {
	let n = 0, r = t;
	for (; r < e.length && e[r] === "`";) n++, r++;
	let i = r;
	for (; i < e.length;) if (e[i] === "`") {
		let t = 0, a = i;
		for (; i < e.length && e[i] === "`";) t++, i++;
		if (t === n) {
			let t = e.substring(r, a);
			return t = t.replace(/\n/g, " "), t.length >= 2 && t[0] === " " && t[t.length - 1] === " " && /[^ ]/.test(t) && (t = t.substring(1, t.length - 1)), {
				html: `<code>${PN(t)}</code>`,
				end: i
			};
		}
	} else i++;
	return null;
}
function nP(e, t) {
	let n = iP(e, t + 1);
	if (n === -1) return null;
	let r = t + 2;
	if (e[n + 1] !== "(") return null;
	let i = n + 2, a = aP(e, i - 1);
	if (a === -1) return null;
	let o = e.substring(r, n), { url: s, title: c } = oP(e.substring(i, a));
	if (WE(s)) {
		let e = o || c;
		return {
			html: `<video src="${PN(s)}"${e ? ` data-name="${PN(e)}"` : ""} data-url="${PN(s)}" controls></video>`,
			end: a + 1
		};
	}
	let l = c === void 0 ? "" : ` title="${PN(c)}"`;
	return {
		html: `<img src="${PN(s)}" alt="${PN(o)}"${l}>`,
		end: a + 1
	};
}
function rP(e, t) {
	let n = t + 1, r = iP(e, t);
	if (r === -1 || e[r + 1] !== "(") return null;
	let i = r + 2, a = aP(e, r + 1);
	if (a === -1) return null;
	let o = e.substring(n, r), { url: s, title: c } = oP(e.substring(i, a)), l = c === void 0 ? "" : ` title="${PN(c)}"`;
	return {
		html: `<a href="${PN(s)}"${l}>${eP(o)}</a>`,
		end: a + 1
	};
}
function iP(e, t) {
	let n = 0;
	for (let r = t; r < e.length; r++) {
		if (e[r] === "\\" && r + 1 < e.length) {
			r++;
			continue;
		}
		if (e[r] === "[" && n++, e[r] === "]" && (n--, n === 0)) return r;
	}
	return -1;
}
function aP(e, t) {
	let n = 0;
	for (let r = t; r < e.length; r++) {
		if (e[r] === "\\" && r + 1 < e.length) {
			r++;
			continue;
		}
		if (e[r] === "(" && n++, e[r] === ")" && (n--, n === 0)) return r;
	}
	return -1;
}
function oP(e) {
	e = e.trim();
	let t, n;
	if (e.startsWith("<")) {
		let r = e.indexOf(">");
		r === -1 ? (t = e.substring(1), n = "") : (t = e.substring(1, r), n = e.substring(r + 1).trim());
	} else {
		let r = e.length;
		for (let t = 0; t < e.length; t++) {
			if (e[t] === "\\" && t + 1 < e.length) {
				t++;
				continue;
			}
			if (e[t] === " " || e[t] === "	" || e[t] === "\n") {
				r = t;
				break;
			}
		}
		t = e.substring(0, r), n = e.substring(r).trim();
	}
	let r;
	if (n.length > 0) {
		let e = n.match(/^"([^"]*)"$|^'([^']*)'$|^\(([^)]*)\)$/);
		e && (r = e[1] ?? e[2] ?? e[3]);
	}
	return {
		url: t,
		title: r
	};
}
function sP(e, t, n, r, i) {
	let a = n.length, o = t + a;
	if (o >= e.length || e[o] === " " || e[o] === "	") return null;
	let s = o;
	for (; s < e.length;) {
		if (e[s] === "\\" && s + 1 < e.length) {
			s += 2;
			continue;
		}
		if (e.substring(s, s + a) === n) {
			if (e[s - 1] === " " || e[s - 1] === "	") {
				s++;
				continue;
			}
			if (a === 1 && (s > 0 && e[s - 1] === n[0] && !(s >= 2 && e[s - 2] === "\\") || s + a < e.length && e[s + a] === n[0])) {
				s++;
				continue;
			}
			let t = e.substring(o, s);
			if (t.length === 0) {
				s++;
				continue;
			}
			return {
				html: r + eP(t) + i,
				end: s + a
			};
		}
		s++;
	}
	return null;
}
var cP = new Set(/* @__PURE__ */ "address.article.aside.audio.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.section.source.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."));
function lP(e) {
	if (/^ {0,3}<(!--|\?|![A-Za-z]|!\[CDATA\[)/.test(e)) return !0;
	let t = e.match(/^ {0,3}<\/?([a-zA-Z][a-zA-Z0-9-]*)(?:\s|\/?>|$)/);
	return t ? cP.has(t[1].toLowerCase()) : !1;
}
function uP(e) {
	let t = e.split("\n"), n = [], r = 0, i = !0;
	for (; r < t.length;) {
		let e = t[r];
		if (e.trim() === "") {
			i = !0, r++;
			continue;
		}
		let a = e.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
		if (a) {
			let e = a[1], o = e[0], s = e.length, c = a[2].trim(), l = [];
			for (r++; r < t.length;) {
				if (t[r].match(RegExp(`^ {0,3}${o}{${s},}\\s*$`))) {
					r++;
					break;
				}
				l.push(t[r]), r++;
			}
			n.push({
				type: "codeBlock",
				language: c || "",
				code: l.join("\n")
			}), i = !1;
			continue;
		}
		let o = e.match(/^(#{1,6})\s+(.+?)(?:\s+#+\s*|\s*)$/);
		if (o) {
			n.push({
				type: "heading",
				level: o[1].length,
				content: o[2]
			}), i = !1, r++;
			continue;
		}
		if (/^(\s{0,3})([-*_])\s*(\2\s*){2,}$/.test(e)) {
			let t = n[n.length - 1];
			if (!i && e.trim().match(/^-+$/) && t && t.type === "paragraph") {
				let e = t;
				n[n.length - 1] = {
					type: "heading",
					level: 2,
					content: e.content
				}, i = !1, r++;
				continue;
			}
			n.push({ type: "hr" }), i = !1, r++;
			continue;
		}
		if (r + 1 < t.length) {
			let a = t[r + 1];
			if (/^={1,}\s*$/.test(a) && e.trim().length > 0) {
				n.push({
					type: "heading",
					level: 1,
					content: e.trim()
				}), i = !1, r += 2;
				continue;
			}
		}
		let s = dP(t, r);
		if (s) {
			n.push(s.token), r = s.nextLine, i = !1;
			continue;
		}
		if (/^\s{0,3}>/.test(e)) {
			let e = [];
			for (; r < t.length && /^\s{0,3}>/.test(t[r]);) e.push(t[r].replace(/^\s{0,3}>\s?/, "")), r++;
			for (; r < t.length;) {
				let n = t[r];
				if (n.trim() === "" || /^\s{0,3}>/.test(n) || /^(#{1,6})\s/.test(n) || /^(`{3,}|~{3,})/.test(n) || /^(\s{0,3})([-*_])\s*(\2\s*){2,}$/.test(n) || /^\s*([-*+]|\d+[.)])\s+/.test(n) || /^\s*\|(.+\|)+\s*$/.test(n)) break;
				e.push(n), r++;
			}
			n.push({
				type: "blockquote",
				content: e.join("\n")
			}), i = !1;
			continue;
		}
		let c = e.match(/^(\s*)([-*+]|\d+[.)])(\s+)(\[[ xX]\] )?(.*)$/);
		if (c) {
			let e = c[1].length, a = c[2], o = c[3], s = c[4], l = c[5], u, d, f;
			s ? (u = "task", f = s.trim() !== "[ ]") : /^\d+[.)]$/.test(a) ? (u = "ordered", d = parseInt(a, 10)) : u = "bullet";
			let p = e + a.length + o.length + (s ? s.length : 0), m = e + 1, h = (e) => {
				if (e.trim() === "") return !0;
				let t = e.match(/^\s*/)[0].length;
				return !!(t >= p || t >= m && e.match(/^\s*([-*+]|\d+[.)])\s+/));
			};
			r++;
			let g = [];
			for (; r < t.length;) {
				let e = t[r];
				if (e.trim() === "") {
					let e = r + 1;
					for (; e < t.length && t[e].trim() === "";) e++;
					if (e < t.length && h(t[e])) {
						g.push(""), r++;
						continue;
					}
					break;
				}
				if (!h(e)) break;
				e.match(/^\s*/)[0].length >= p ? g.push(e.substring(p)) : g.push(e.substring(m)), r++;
			}
			let _ = g.join("\n").replace(/^\n+|\n+$/g, "");
			n.push({
				type: "listItem",
				listType: u,
				indent: e,
				content: l.trim(),
				start: d,
				checked: f,
				childContent: _ || void 0
			}), i = !1;
			continue;
		}
		if (lP(e)) {
			let e = [];
			for (; r < t.length && t[r].trim() !== "";) e.push(t[r]), r++;
			n.push({
				type: "rawHtml",
				content: e.join("\n")
			}), i = !1;
			continue;
		}
		let l = [e];
		for (r++; r < t.length;) {
			let e = t[r];
			if (e.trim() === "" || /^(#{1,6})\s/.test(e) || /^(`{3,}|~{3,})/.test(e) || /^\s{0,3}>/.test(e) || /^(\s{0,3})([-*_])\s*(\2\s*){2,}$/.test(e) || /^\s*([-*+]|\d+[.)])\s+/.test(e) || /^\s*\|(.+\|)+\s*$/.test(e) || lP(e) || r + 1 < t.length && /^[=-]+\s*$/.test(t[r + 1]) && e.trim().length > 0) break;
			l.push(e), r++;
		}
		n.push({
			type: "paragraph",
			content: l.map((e) => e.replace(/^ {1,3}/, "")).join("\n").replace(/[ \t]+$/, "")
		}), i = !1;
	}
	return n;
}
function dP(e, t) {
	if (t + 1 >= e.length) return null;
	let n = e[t], r = e[t + 1];
	if (!r.includes("|") || !/^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/.test(r) || !n.includes("|")) return null;
	let i = fP(n), a = pP(r), o = [], s = t + 2;
	for (; s < e.length;) {
		let t = e[s];
		if (!t.includes("|")) break;
		o.push(fP(t)), s++;
	}
	return {
		token: {
			type: "table",
			headers: i,
			rows: o,
			alignments: a
		},
		nextLine: s
	};
}
function fP(e) {
	let t = e.trim(), n = t.startsWith("|") ? t.substring(1) : t, r = n.endsWith("|") ? n.substring(0, n.length - 1) : n, i = [], a = "";
	for (let e = 0; e < r.length; e++) r[e] === "\\" && e + 1 < r.length && r[e + 1] === "|" ? (a += "|", e++) : r[e] === "|" ? (i.push(a.trim()), a = "") : a += r[e];
	return i.push(a.trim()), i;
}
function pP(e) {
	return fP(e).map((e) => {
		let t = e.trim(), n = t.startsWith(":"), r = t.endsWith(":");
		return n && r ? "center" : r ? "right" : n ? "left" : null;
	});
}
function mP(e) {
	let t = "", n = 0;
	for (; n < e.length;) {
		let r = e[n];
		switch (r.type) {
			case "heading": {
				let e = r;
				t += `<h${e.level}>${eP(e.content)}</h${e.level}>`, n++;
				break;
			}
			case "paragraph":
				t += `<p>${eP(r.content)}</p>`, n++;
				break;
			case "codeBlock": {
				let e = r, i = e.language ? ` data-language="${PN(e.language)}"` : "";
				t += `<pre><code${i}>${PN(e.code)}</code></pre>`, n++;
				break;
			}
			case "blockquote": {
				let e = mP(uP(r.content));
				t += `<blockquote>${e}</blockquote>`, n++;
				break;
			}
			case "hr":
				t += "<hr>", n++;
				break;
			case "listItem": {
				let r = hP(e, n);
				t += r.html, n = r.nextIndex;
				break;
			}
			case "table":
				t += _P(r), n++;
				break;
			case "rawHtml":
				t += r.content, n++;
				break;
			default: n++;
		}
	}
	return t;
}
function hP(e, t) {
	let n = "", r = t, i = null;
	for (; r < e.length && e[r].type === "listItem";) {
		let t = e[r], a = gP(t.listType);
		if (i !== null && i !== a && (n += `</${i === "ordered" ? "ol" : "ul"}>`, i = null), i === null) {
			if (a === "ordered") {
				let e = t.start !== void 0 && t.start !== 1 ? ` start="${t.start}"` : "";
				n += `<ol${e}>`;
			} else n += "<ul>";
			i = a;
		}
		if (t.listType === "task") {
			let e = t.checked ? " checked" : "";
			n += `<li><input type="checkbox" disabled${e}><p>${eP(t.content)}</p>`;
		} else n += `<li><p>${eP(t.content)}</p>`;
		if (t.childContent) {
			let e = uP(t.childContent);
			n += mP(e);
		}
		n += "</li>", r++;
	}
	return i !== null && (n += `</${i === "ordered" ? "ol" : "ul"}>`), {
		html: n,
		nextIndex: r
	};
}
function gP(e) {
	return e === "ordered" ? "ordered" : "bullet";
}
function _P(e) {
	let t = "<table>", n = e.headers.every((e) => e.trim() === ""), r = e.headers.length;
	if (!n) {
		t += "<thead><tr>";
		for (let n = 0; n < r; n++) {
			let r = e.alignments[n], i = r ? ` align="${r}"` : "";
			t += `<th${i}>${eP(e.headers[n])}</th>`;
		}
		t += "</tr></thead>";
	}
	if (e.rows.length > 0) {
		t += "<tbody>";
		for (let n of e.rows) {
			t += "<tr>";
			for (let i = 0; i < r; i++) {
				let r = i < n.length ? n[i] : "", a = e.alignments[i], o = a ? ` align="${a}"` : "";
				t += `<td${o}>${eP(r)}</td>`;
			}
			t += "</tr>";
		}
		t += "</tbody>";
	}
	return t += "</table>", t;
}
function vP(e) {
	return mP(uP(e));
}
function yP(e) {
	return vP(e);
}
function bP(e, t) {
	return NN(yP(e), t);
}
var xP = class {
	constructor(e) {
		this.editor = e;
	}
	blocksToHTMLLossy(e = this.editor.document) {
		return EA(this.editor.pmSchema, this.editor).exportBlocks(e, {});
	}
	blocksToFullHTML(e = this.editor.document) {
		return QM(this.editor.pmSchema, this.editor).serializeBlocks(e, {});
	}
	tryParseHTMLToBlocks(e) {
		return NN(e, this.editor.pmSchema);
	}
	blocksToMarkdownLossy(e = this.editor.document) {
		return Bj(e, this.editor.pmSchema, this.editor, {});
	}
	tryParseMarkdownToBlocks(e) {
		return bP(e, this.editor.pmSchema);
	}
	pasteHTML(e, t = !1) {
		let n = e;
		if (!t) {
			let t = this.tryParseHTMLToBlocks(e);
			n = this.blocksToFullHTML(t);
		}
		n && this.editor.prosemirrorView?.pasteHTML(n);
	}
	pasteText(e) {
		return this.editor.prosemirrorView?.pasteText(e);
	}
	pasteMarkdown(e) {
		let t = yP(e);
		return this.pasteHTML(t);
	}
};
function SP(e) {
	let { bnBlock: t } = aD(e), n = oD(e.doc), r = e.doc.resolve(t.beforePos), i = r.nodeBefore, a = e.doc.resolve(t.afterPos).nodeAfter, o;
	return r.depth > 1 && (o = r.node(), o.type.isInGroup("bnBlock") || (o = r.node(r.depth - 1))), {
		block: gD(t.node, n),
		prevBlock: i === null ? void 0 : gD(i, n),
		nextBlock: a === null ? void 0 : gD(a, n),
		parentBlock: o === void 0 ? void 0 : gD(o, n)
	};
}
function CP(e, t, n = "start") {
	let r = typeof t == "string" ? t : t.id, i = cD(oD(e.doc)), a = aO(r, e.doc);
	if (!a) throw Error(`Block with ID ${r} not found`);
	let o = nD(a), s = i.blockSchema[o.blockNoteType].content;
	if (o.isBlockContainer) {
		let t = o.blockContent;
		if (s === "none") {
			e.setSelection(L.create(e.doc, t.beforePos));
			return;
		}
		if (s === "inline") n === "start" ? e.setSelection(I.create(e.doc, t.beforePos + 1)) : e.setSelection(I.create(e.doc, t.afterPos - 1));
		else if (s === "table") n === "start" ? e.setSelection(I.create(e.doc, t.beforePos + 4)) : e.setSelection(I.create(e.doc, t.afterPos - 4));
		else throw new FE(s);
	} else CP(e, (n === "start" ? o.childContainer.node.firstChild : o.childContainer.node.lastChild).attrs.id, n);
}
var wP = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
function TP(e) {
	let t = [], n = [], r = 0;
	for (; r < e.length;) {
		let i = 0;
		for (; r + i < e.length && e.charCodeAt(r + i) >= 48 && e.charCodeAt(r + i) <= 57;) i++;
		if (i > 0) {
			t.push(n.join(""));
			let a = parseInt(e.substring(r, r + i), 10);
			for (; a-- > 0;) n.pop();
			r += i;
		} else n.push(e[r]), r++;
	}
	return t;
}
var EP = new Set(TP(wP)), DP = /* @__PURE__ */ new Set(["localhost"]), OP = /[.,;:!?"']+$/, kP = /(?:https?|ftp|ftps):\/\/[^\s]+/g, AP = /mailto:[^\s]+/g, jP = /[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/g, MP = /(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?::\d{1,5})?(?:[/?#][^\s]*)?/g;
function NP(e) {
	let t = e, n = !0;
	for (; n;) {
		n = !1;
		let e = t;
		t = t.replace(OP, ""), t !== e && (n = !0);
		for (let [e, r] of [["(", ")"], ["[", "]"]]) for (; t.endsWith(r);) {
			let i = PP(t, e);
			if (PP(t, r) > i) t = t.slice(0, -1), n = !0;
			else break;
		}
	}
	return t;
}
function PP(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) e[r] === t && n++;
	return n;
}
function FP(e) {
	let t = e.split(".");
	return t[t.length - 1].toLowerCase();
}
function IP(e) {
	let t = FP(e);
	return EP.has(t);
}
function LP(e, t, n) {
	return t === "email" ? "mailto:" + e : /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(e) || /^mailto:/i.test(e) ? e : n + "://" + e;
}
function RP(e, t) {
	if (!e) return [];
	let n = t?.defaultProtocol || "http", r = [];
	for (let t of e.matchAll(kP)) r.push({
		type: "url",
		value: t[0],
		start: t.index,
		end: t.index + t[0].length
	});
	for (let t of e.matchAll(AP)) r.push({
		type: "url",
		value: t[0],
		start: t.index,
		end: t.index + t[0].length
	});
	for (let t of e.matchAll(jP)) r.push({
		type: "email",
		value: t[0],
		start: t.index,
		end: t.index + t[0].length
	});
	for (let t of e.matchAll(MP)) r.push({
		type: "url",
		value: t[0],
		start: t.index,
		end: t.index + t[0].length
	});
	r.sort((e, t) => e.start - t.start || t.end - e.end);
	let i = [], a = -1;
	for (let e of r) e.start >= a && (i.push(e), a = e.end);
	let o = [];
	for (let e of i) {
		let t = NP(e.value);
		if (!t) continue;
		let r = e.start, i = r + t.length;
		if (e.type === "url" && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t)) {
			let e = new URL("http://" + t).hostname;
			if (!IP(e)) continue;
		}
		if (e.type === "email") {
			let e = t.split("@")[1];
			if (!IP(e)) continue;
		}
		let a = LP(t, e.type, n);
		o.push({
			type: e.type,
			value: t,
			isLink: !0,
			href: a,
			start: r,
			end: i
		});
	}
	return o;
}
function zP(e, t = "http") {
	if (!e) return [HP(e, 0, 0)];
	for (let [n, r] of [
		["(", ")"],
		["[", "]"],
		["{", "}"]
	]) if (e.startsWith(n) && e.endsWith(r) && e.length > 2) {
		let i = e.slice(1, -1);
		if (BP(i)) return [
			HP(n, 0, 1),
			VP(i, 1, 1 + i.length, t),
			HP(r, 1 + i.length, e.length)
		];
	}
	if (e.endsWith(".") && e.length > 1) {
		let n = e.slice(0, -1);
		if (BP(n)) return [VP(n, 0, n.length, t), HP(".", n.length, e.length)];
	}
	return BP(e) ? [VP(e, 0, e.length, t)] : [HP(e, 0, e.length)];
}
function BP(e) {
	if (/^(?:https?|ftp|ftps):\/\/[^\s]+$/.test(e) || /^mailto:[^\s]+$/.test(e) || DP.has(e.toLowerCase())) return !0;
	let t = e.match(/^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+([a-zA-Z]{2,})(?::\d{1,5})?(?:[/?#][^\s]*)?$/);
	if (t) {
		let e = t[1].toLowerCase();
		if (EP.has(e)) return !0;
	}
	return !1;
}
function VP(e, t, n, r) {
	let i = e.includes("@") && !e.includes("://") && !e.startsWith("mailto:") ? "email" : "url";
	return {
		type: i,
		value: e,
		isLink: !0,
		href: LP(e, i, r),
		start: t,
		end: n
	};
}
function HP(e, t, n) {
	return {
		type: "text",
		value: e,
		isLink: !1,
		href: e,
		start: t,
		end: n
	};
}
var UP = "[\0- \xA0 ᠎ -\u2029 　]", WP = new RegExp(UP), GP = RegExp(`${UP}$`), KP = new RegExp(UP, "g");
function qP(e) {
	return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? ["()", "[]"].includes(e[0].value + e[2].value) : !1;
}
function JP(e) {
	return new R({
		key: new z("autolink"),
		appendTransaction: (t, n, r) => {
			let i = t.some((e) => e.docChanged) && !n.doc.eq(r.doc), a = t.some((e) => e.getMeta("preventAutolink"));
			if (!i || a) return;
			let { tr: o } = r;
			if (Cp(qf(n.doc, [...t])).forEach(({ newRange: t }) => {
				let n = Jf(r.doc, t, (e) => e.isTextblock), i, a;
				if (n.length > 1) i = n[0], a = r.doc.textBetween(i.pos, i.pos + i.node.nodeSize, void 0, " ");
				else if (n.length) {
					let e = r.doc.textBetween(t.from, t.to, " ", " ");
					if (!GP.test(e)) return;
					i = n[0], a = r.doc.textBetween(i.pos, t.to, void 0, " ");
				}
				if (i && a) {
					let t = a.split(WP).filter(Boolean);
					if (t.length <= 0) return;
					let n = t[t.length - 1], s = i.pos + a.lastIndexOf(n);
					if (!n) return;
					let c = zP(n, e.defaultProtocol);
					if (!qP(c)) return;
					c.filter((e) => e.isLink).map((e) => ({
						...e,
						from: s + e.start + 1,
						to: s + e.end + 1
					})).filter((e) => r.schema.marks.code ? !r.doc.rangeHasMark(e.from, e.to, r.schema.marks.code) : !0).filter((t) => e.validate(t.value)).filter((t) => e.shouldAutoLink(t.value)).forEach((t) => {
						wp(t.from, t.to, r.doc).some((t) => t.mark.type === e.type) || o.addMark(t.from, t.to, e.type.create({ href: t.href }));
					});
				}
			}), o.steps.length) return o;
		}
	});
}
function YP(e) {
	return new R({
		key: new z("handleClickLink"),
		props: { handleClick: (t, n, r) => {
			if (r.button !== 0 || !t.editable) return !1;
			let i = null;
			if (r.target instanceof HTMLAnchorElement && r.target.getAttribute("data-inline-content-type") === "link") i = r.target;
			else {
				let t = r.target;
				if (!t) return !1;
				let n = e.tiptapEditor.view.dom;
				i = t.closest("a[data-inline-content-type=\"link\"]"), i && !n.contains(i) && (i = null);
			}
			if (!i) return !1;
			if (e.onClick) {
				if (!e.editor) throw Error("BlockNoteEditor not found in Link click handler");
				return e.onClick(r, e.editor) ?? !0;
			}
			let a = bp(t.state, e.type.name), o = i.href ?? a.href, s = i.target ?? a.target;
			return o ? (window.open(o, s), !0) : !1;
		} }
	});
}
function XP(e) {
	return new R({
		key: new z("handlePasteLink"),
		props: { handlePaste: (t, n, r) => {
			let { shouldAutoLink: i, isValidLink: a } = e, { state: o } = t, { selection: s } = o, { empty: c } = s;
			if (c) return !1;
			let l = "";
			r.content.forEach((e) => {
				l += e.textContent;
			});
			let u = RP(l, { defaultProtocol: e.defaultProtocol }).find((e) => e.isLink && e.value === l);
			return !l || !u || !a(u.value) || i !== void 0 && !i(u.value) ? !1 : e.editor.commands.setMark(e.type, { href: u.href });
		} }
	});
}
var ZP = "https", QP = /^(?:(?:http|https|ftp|ftps|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z0-9+.\-]+(?:[^a-z+.\-:]|$))/i;
function $P(e) {
	if (!e) return !0;
	let t = e.replace(KP, "");
	return QP.test(t);
}
function eF(e) {
	let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e), n = /^[a-z][a-z0-9+.-]*:/i.test(e);
	if (t || n && !e.includes("@")) return !0;
	let r = (e.includes("@") ? e.split("@").pop() : e).split(/[/?#:]/)[0];
	return !(/^\d{1,3}(\.\d{1,3}){3}$/.test(r) || !/\./.test(r));
}
var tF = Nm.create({
	name: "link",
	keepOnSplit: !1,
	exitable: !0,
	inclusive: !1,
	addOptions() {
		return {
			HTMLAttributes: {
				target: "_blank",
				rel: "noopener noreferrer nofollow",
				className: "bn-inline-content-section",
				"data-inline-content-type": "link"
			},
			editor: void 0,
			onClick: void 0,
			isValidLink: $P
		};
	},
	addAttributes() {
		return { href: {
			default: null,
			parseHTML(e) {
				return e.getAttribute("href");
			}
		} };
	},
	parseHTML() {
		let e = this.options.isValidLink;
		return [{
			tag: "a[href]",
			getAttrs: (t) => {
				let n = t.getAttribute("href");
				return !n || !e(n) ? !1 : null;
			}
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		return this.options.isValidLink(e.href) ? [
			"a",
			ap(e, this.options.HTMLAttributes),
			0
		] : [
			"a",
			ap({
				...e,
				href: ""
			}, this.options.HTMLAttributes),
			0
		];
	},
	addPasteRules() {
		let e = this.options.isValidLink;
		return [ah({
			find: (t) => {
				let n = [];
				if (t) {
					let r = RP(t, { defaultProtocol: ZP }).filter((t) => t.isLink && e(t.value));
					for (let e of r) eF(e.value) && n.push({
						text: e.value,
						data: { href: e.href },
						index: e.start
					});
				}
				return n;
			},
			type: this.type,
			getAttributes: (e) => ({ href: e.data?.href })
		})];
	},
	addProseMirrorPlugins() {
		let e = [];
		return e.push(JP({
			type: this.type,
			defaultProtocol: ZP,
			validate: this.options.isValidLink,
			shouldAutoLink: eF
		})), e.push(YP({
			type: this.type,
			tiptapEditor: this.editor,
			editor: this.options.editor,
			onClick: this.options.onClick
		})), e.push(XP({
			editor: this.editor,
			defaultProtocol: ZP,
			type: this.type,
			shouldAutoLink: eF,
			isValidLink: this.options.isValidLink
		})), e;
	}
}), nF = j(({ editor: e, options: t }) => ({
	key: "link",
	tiptapExtensions: [tF.configure({
		HTMLAttributes: t.HTMLAttributes ?? {},
		editor: e,
		onClick: t.onClick,
		...t.isValidLink ? { isValidLink: t.isValidLink } : {}
	})]
})), rF = [
	"vscode-editor-data",
	"blocknote/html",
	"text/markdown",
	"text/html",
	"text/plain",
	"Files"
];
function iF(e, t) {
	if (!e.startsWith(".") || !t.startsWith(".")) throw Error("The strings provided are not valid file extensions.");
	return e === t;
}
function aF(e, t) {
	let n = e.split("/"), r = t.split("/");
	if (n.length !== 2) throw Error(`The string ${e} is not a valid MIME type.`);
	if (r.length !== 2) throw Error(`The string ${t} is not a valid MIME type.`);
	return n[1] === "*" || r[1] === "*" ? n[0] === r[0] : (n[0] === "*" || r[0] === "*" || n[0] === r[0]) && n[1] === r[1];
}
function oF(e, t, n, r = "after") {
	let i;
	return i = Array.isArray(t.content) && t.content.length === 0 ? e.updateBlock(t, n).id : e.insertBlocks([n], t, r)[0].id, i;
}
async function sF(e, t) {
	if (!t.uploadFile) {
		console.warn("Attempted ot insert file, but uploadFile is not set in the BlockNote editor options");
		return;
	}
	let n = "dataTransfer" in e ? e.dataTransfer : e.clipboardData;
	if (n === null) return;
	let r = null;
	for (let e of rF) if (n.types.includes(e)) {
		r = e;
		break;
	}
	if (r !== "Files") return;
	let i = n.items;
	if (i) {
		e.preventDefault();
		for (let n = 0; n < i.length; n++) {
			let r = "file";
			for (let e of Object.values(t.schema.blockSpecs)) for (let t of e.implementation.meta?.fileBlockAccept || []) {
				let a = t.startsWith("."), o = i[n].getAsFile();
				if (o && (!a && o.type && aF(i[n].type, t) || a && iF("." + o.name.split(".").pop(), t))) {
					r = e.config.type;
					break;
				}
			}
			let a = i[n].getAsFile();
			if (a) {
				let n = {
					type: r,
					props: { name: a.name }
				}, i;
				if (e.type === "paste") {
					let e = t.getTextCursorPosition().block;
					i = oF(t, e, n);
				} else if (e.type === "drop") {
					let r = {
						left: e.clientX,
						top: e.clientY
					}, a = t.prosemirrorView.posAtCoords(r);
					if (!a) return;
					i = t.transact((e) => {
						let i = eD(e.doc, a.pos), o = (t.domElement?.querySelector(`[data-id="${i.node.attrs.id}"]`))?.getBoundingClientRect();
						return oF(t, t.getBlock(i.node.attrs.id), n, o && (o.top + o.bottom) / 2 > r.top ? "before" : "after");
					});
				} else return;
				let o = await t.uploadFile(a, i), s = typeof o == "string" ? { props: { url: o } } : { ...o };
				t.updateBlock(i, s);
			}
		}
	}
}
var cF = (e) => W.create({
	name: "dropFile",
	addProseMirrorPlugins() {
		return [new R({ props: { handleDOMEvents: { drop(t, n) {
			if (!e.isEditable) return;
			let r = null;
			for (let e of rF) if (n.dataTransfer.types.includes(e)) {
				r = e;
				break;
			}
			return r === null ? !0 : r === "Files" ? (sF(n, e), !0) : !1;
		} } } })];
	}
}), lF = /(^|\n) {0,3}#{1,6} {1,8}[^\n]{1,64}\r?\n\r?\n\s{0,32}\S/, uF = /(_|__|\*|\*\*|~~|==|\+\+)(?!\s)(?:[^\s](?:.{0,62}[^\s])?|\S)(?=\1)/, dF = /\[[^\]]{1,128}\]\(https?:\/\/\S{1,999}\)/, fF = /(?:\s|^)`(?!\s)(?:[^\s`](?:[^`]{0,46}[^\s`])?|[^\s`])`([^\w]|$)/, pF = /(?:^|\n)\s{0,5}-\s{1}[^\n]+\n\s{0,15}-\s/, mF = /(?:^|\n)\s{0,5}\d+\.\s{1}[^\n]+\n\s{0,15}\d+\.\s/, hF = /\n{2} {0,3}-{2,48}\n{2}/, gF = /(?:\n|^)(```|~~~|\$\$)(?!`|~)[^\s]{0,64} {0,64}[^\n]{0,64}\n[\s\S]{0,9999}?\s*\1 {0,64}(?:\n+|$)/, _F = /(?:\n|^)(?!\s)\w[^\n]{0,64}\r?\n(-|=)\1{0,64}\n\n\s{0,64}(\w|$)/, vF = /(?:^|(\r?\n\r?\n))( {0,3}>[^\n]{1,333}\n){1,999}($|(\r?\n))/, yF = /^\s*\|(.+\|)+\s*$/m, bF = /^\s*\|(\s*[-:]+[-:]\s*\|)+\s*$/m, xF = /^\s*\|(.+\|)+\s*$/m, SF = (e) => lF.test(e) || uF.test(e) || dF.test(e) || fF.test(e) || pF.test(e) || mF.test(e) || hF.test(e) || gF.test(e) || _F.test(e) || vF.test(e) || yF.test(e) || bF.test(e) || xF.test(e);
function CF(e, t) {
	let { schema: n } = t.state;
	if (!e.clipboardData) return !1;
	let r = e.clipboardData.getData("text/plain");
	if (!r || !n.nodes.codeBlock) return !1;
	let i = e.clipboardData.getData("vscode-editor-data"), a = (i ? JSON.parse(i) : void 0)?.mode;
	return a ? (t.pasteHTML(`<pre><code class="language-${a}">${r.replace(/\r\n?/g, "\n")}</code></pre>`), !0) : !1;
}
function wF({ event: e, editor: t, prioritizeMarkdownOverHTML: n, plainTextAsMarkdown: r }) {
	if (t.transact((e) => e.selection.$from.parent.type.spec.code && e.selection.$to.parent.type.spec.code)) {
		let n = e.clipboardData?.getData("text/plain");
		if (n) return t.pasteText(n), !0;
	}
	let i;
	for (let t of rF) if (e.clipboardData.types.includes(t)) {
		i = t;
		break;
	}
	if (!i) return !0;
	if (i === "vscode-editor-data") {
		if (CF(e, t.prosemirrorView)) return !0;
		i = "text/plain";
	}
	if (i === "Files") return sF(e, t), !0;
	let a = e.clipboardData.getData(i);
	if (i === "blocknote/html") return t.pasteHTML(a, !0), !0;
	if (i === "text/markdown") return t.pasteMarkdown(a), !0;
	if (n) {
		let n = e.clipboardData.getData("text/plain");
		if (SF(n)) return t.pasteMarkdown(n), !0;
	}
	return i === "text/html" ? (t.pasteHTML(a), !0) : r ? (t.pasteMarkdown(a), !0) : (t.pasteText(a), !0);
}
var TF = (e, t) => W.create({
	name: "pasteFromClipboard",
	addProseMirrorPlugins() {
		return [new R({ props: { handleDOMEvents: { paste(n, r) {
			if (r.preventDefault(), e.isEditable) return t({
				event: r,
				editor: e,
				defaultPasteHandler: ({ prioritizeMarkdownOverHTML: t = !0, plainTextAsMarkdown: n = !0 } = {}) => wF({
					event: r,
					editor: e,
					prioritizeMarkdownOverHTML: t,
					plainTextAsMarkdown: n
				})
			});
		} } } })];
	}
});
function EF(e, t, n) {
	let r = !1, i = e.state.selection instanceof K;
	if (!i) {
		let n = e.state.doc.slice(e.state.selection.from, e.state.selection.to, !1).content, i = [];
		for (let e = 0; e < n.childCount; e++) i.push(n.child(e));
		r = i.find((e) => e.type.isInGroup("bnBlock") || e.type.name === "blockGroup" || e.type.spec.group === "blockContent") === void 0, r && (t = n);
	}
	let a, o = EA(e.state.schema, n);
	if (i) {
		t.firstChild?.type.name === "table" && (t = t.firstChild.content);
		let e = pD(t, n.schema.inlineContentSchema, n.schema.styleSchema);
		a = `<table>${o.exportInlineContent(e, {})}</table>`;
	} else if (r) {
		let e = mD(t, n.schema.inlineContentSchema, n.schema.styleSchema);
		a = o.exportInlineContent(e, {});
	} else {
		let e = Vj(t);
		a = o.exportBlocks(e, {});
	}
	return a;
}
function DF(e, t) {
	"node" in e.state.selection && e.state.selection.node.type.spec.group === "blockContent" && t.transact((t) => t.setSelection(new L(t.doc.resolve(e.state.selection.from - 1))));
	let n = e.serializeForClipboard(e.state.selection.content()).dom.innerHTML, r = e.state.selection.content().content, i = EF(e, r, t), { $from: a, $to: o } = e.state.selection, s = a.parent.type.name, c = t.blockImplementations[s];
	return {
		clipboardHTML: n,
		externalHTML: i,
		markdown: a.sameParent(o) && c?.implementation.meta?.code === !0 ? e.state.doc.textBetween(a.pos, o.pos) : zj(i)
	};
}
var OF = (e) => {
	if (e.state.selection.empty) return !0;
	let t = window.getSelection();
	if (t && !t.isCollapsed) {
		let e = t.focusNode;
		for (; e;) {
			if (e instanceof HTMLElement && e.getAttribute("contenteditable") === "false") return !0;
			e = e.parentElement;
		}
	}
	return !1;
}, kF = (e, t, n) => {
	n.preventDefault(), n.clipboardData.clearData();
	let { clipboardHTML: r, externalHTML: i, markdown: a } = DF(t, e);
	n.clipboardData.setData("blocknote/html", r), n.clipboardData.setData("text/html", i), n.clipboardData.setData("text/plain", a);
}, AF = (e) => W.create({
	name: "copyToClipboard",
	addProseMirrorPlugins() {
		return [new R({ props: { handleDOMEvents: {
			copy(t, n) {
				return OF(t) || kF(e, t, n), !0;
			},
			cut(t, n) {
				return OF(t) ? !0 : (kF(e, t, n), t.editable && t.dispatch(t.state.tr.deleteSelection()), !0);
			},
			dragstart(t, n) {
				if (!("node" in t.state.selection) || t.state.selection.node.type.spec.group !== "blockContent") return;
				e.transact((e) => e.setSelection(new L(e.doc.resolve(t.state.selection.from - 1)))), n.preventDefault(), n.dataTransfer.clearData();
				let { clipboardHTML: r, externalHTML: i, markdown: a } = DF(t, e);
				return n.dataTransfer.setData("blocknote/html", r), n.dataTransfer.setData("text/html", i), n.dataTransfer.setData("text/plain", a), !0;
			}
		} } })];
	}
}), jF = W.create({
	name: "blockBackgroundColor",
	addGlobalAttributes() {
		return [{
			types: ["tableCell", "tableHeader"],
			attributes: { backgroundColor: _O() }
		}];
	}
}), MF = rh.create({
	name: "hardBreak",
	inline: !0,
	group: "inline",
	selectable: !1,
	linebreakReplacement: !0,
	priority: 10,
	parseHTML() {
		return [{ tag: "br" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["br", ap(this.options.HTMLAttributes, e)];
	},
	renderText() {
		return "\n";
	}
}), NF = (e, t) => {
	let n = e.resolve(t), r = n.depth - 1;
	if (r < 1) return;
	let i = n.before(r), a = e.resolve(i).nodeAfter;
	if (a) return a.type.spec.group?.includes("bnBlock") ? rD(e.resolve(i)) : NF(e, i);
}, PF = (e, t) => {
	let n = e.resolve(t), r = n.index();
	if (r === 0) return;
	let i = n.posAtIndex(r - 1);
	return rD(e.resolve(i));
}, FF = (e, t) => {
	let n = e.resolve(t), r = n.index();
	if (r === n.node().childCount - 1) return;
	let i = n.posAtIndex(r + 1);
	return rD(e.resolve(i));
}, IF = (e, t) => {
	for (; t.childContainer;) {
		let n = t.childContainer.node, r = e.resolve(t.childContainer.beforePos + 1).posAtIndex(n.childCount - 1);
		t = rD(e.resolve(r));
	}
	return t;
}, LF = (e, t) => e.isBlockContainer && e.blockContent.node.type.spec.content === "inline*" && e.blockContent.node.childCount > 0 && t.isBlockContainer && t.blockContent.node.type.spec.content === "inline*", RF = (e, t, n, r) => {
	if (!r.isBlockContainer) throw Error(`Attempted to merge block at position ${r.bnBlock.beforePos} into previous block at position ${n.bnBlock.beforePos}, but next block is not a block container`);
	if (r.childContainer) {
		let n = e.doc.resolve(r.childContainer.beforePos + 1), i = e.doc.resolve(r.childContainer.afterPos - 1), a = n.blockRange(i);
		if (t) {
			let t = e.doc.resolve(r.bnBlock.beforePos);
			e.tr.lift(a, t.depth);
		}
	}
	if (t) {
		if (!n.isBlockContainer) throw Error(`Attempted to merge block at position ${r.bnBlock.beforePos} into previous block at position ${n.bnBlock.beforePos}, but previous block is not a block container`);
		t(e.tr.delete(n.blockContent.afterPos - 1, r.blockContent.beforePos + 1));
	}
	return !0;
}, zF = (e) => ({ state: t, dispatch: n }) => {
	let r = rD(t.doc.resolve(e)), i = PF(t.doc, r.bnBlock.beforePos);
	if (!i) return !1;
	let a = IF(t.doc, i);
	return LF(a, r) ? RF(t, n, a, r) : !1;
}, BF = W.create({
	priority: 50,
	addKeyboardShortcuts() {
		let e = () => this.editor.commands.first(({ chain: e, commands: t }) => [
			() => t.deleteSelection(),
			() => t.undoInputRule(),
			() => t.command(({ state: e }) => {
				let n = iD(e);
				if (!n.isBlockContainer) return !1;
				let r = e.selection.from === n.blockContent.beforePos + 1, i = n.blockContent.node.type.name === "paragraph";
				return r && !i ? t.command(sO(n.bnBlock.beforePos, {
					type: "paragraph",
					props: {}
				})) : !1;
			}),
			() => t.command(({ state: e, tr: t }) => {
				let n = iD(e);
				if (!n.isBlockContainer) return !1;
				let { blockContent: r } = n;
				return e.selection.from === r.beforePos + 1 ? fN(t, t.doc.type.schema.nodes.blockContainer, t.doc.type.schema.nodes.blockGroup) : !1;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				let { bnBlock: r, blockContent: i } = n, a = PF(t.doc, n.bnBlock.beforePos);
				if (!a || !a.isBlockContainer || a.blockContent.node.type.spec.content !== "inline*") return !1;
				let o = t.selection.from === i.beforePos + 1, s = t.selection.empty, c = r.beforePos;
				return o && s ? e().command(zF(c)).scrollIntoView().run() : !1;
			}),
			() => t.command(({ state: e, tr: t, dispatch: n }) => {
				let r = iD(e);
				if (!r.isBlockContainer || e.selection.from !== r.blockContent.beforePos + 1) return !1;
				let i = PF(e.doc, r.bnBlock.beforePos);
				if (!i || i.isBlockContainer) return !1;
				if (n) {
					let e = i.bnBlock.afterPos - 1, n = t.doc.resolve(e - 1);
					return t.delete(r.bnBlock.beforePos, r.bnBlock.afterPos), t.insert(n.pos, r.bnBlock.node), t.setSelection(I.near(t.doc.resolve(n.pos + 1))), !0;
				}
				return !1;
			}),
			() => t.command(({ state: e, tr: t, dispatch: n }) => {
				let r = iD(e);
				if (!r.isBlockContainer || t.selection.from !== r.blockContent.beforePos + 1) return !1;
				let i = t.doc.resolve(r.bnBlock.beforePos);
				if (i.nodeBefore || i.node().type.name !== "column") return !1;
				let a = t.doc.resolve(r.bnBlock.beforePos), o = t.doc.resolve(a.before()), s = o.before();
				return n && (t.delete(r.bnBlock.beforePos, r.bnBlock.afterPos), BM(t, s), o.pos === s + 1 ? (t.insert(s, r.bnBlock.node), t.setSelection(I.near(t.doc.resolve(s)))) : (t.insert(o.pos - 1, r.bnBlock.node), t.setSelection(I.near(t.doc.resolve(o.pos))))), !0;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				if (n.blockContent.node.childCount === 0 && n.blockContent.node.type.spec.content === "inline*") {
					let r = PF(t.doc, n.bnBlock.beforePos);
					if (!r) return !1;
					let i = IF(t.doc, r);
					if (!i.isBlockContainer || !i || !i.isBlockContainer) return !1;
					let a = e();
					if (n.childContainer && a.insertContentAt(n.bnBlock.afterPos, n.childContainer?.node.content), i.blockContent.node.type.spec.content === "tableRow+") {
						let e = n.bnBlock.beforePos - 1 - 1 - 1 - 1 - 1;
						a = a.setTextSelection(e);
					} else if (i.blockContent.node.type.spec.content === "") a = a.setNodeSelection(i.blockContent.beforePos);
					else {
						let e = i.blockContent.afterPos - 1;
						a = a.setTextSelection(e);
					}
					return a.deleteRange({
						from: n.bnBlock.beforePos,
						to: n.bnBlock.afterPos
					}).scrollIntoView().run();
				}
				return !1;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				let r = t.selection.from === n.blockContent.beforePos + 1, i = t.selection.empty, a = PF(t.doc, n.bnBlock.beforePos);
				if (a && r && i) {
					let r = IF(t.doc, a);
					if (!r.isBlockContainer) return !1;
					if (r.blockContent.node.type.spec.content === "" || r.blockContent.node.type.spec.content === "inline*" && r.blockContent.node.childCount === 0) return e().cut({
						from: n.bnBlock.beforePos,
						to: n.bnBlock.afterPos
					}, r.bnBlock.afterPos).deleteRange({
						from: r.bnBlock.beforePos,
						to: r.bnBlock.afterPos
					}).run();
				}
				return !1;
			})
		]), t = () => this.editor.commands.first(({ chain: e, commands: t }) => [
			() => t.deleteSelection(),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer || !n.childContainer) return !1;
				let { blockContent: r, childContainer: i } = n, a = t.selection.from === r.afterPos - 1, o = t.selection.empty, s = rD(t.doc.resolve(i.beforePos + 1));
				if (!s.isBlockContainer) return !1;
				if (a && o) {
					let n = s.blockContent.node, a = n.type.spec.content === "inline*", o = r.node.type.spec.content === "inline*";
					return e().insertContentAt(s.bnBlock.afterPos, s.childContainer?.node.content || M.empty).deleteRange(i.node.childCount === 1 ? {
						from: i.beforePos,
						to: i.afterPos
					} : {
						from: s.bnBlock.beforePos,
						to: s.bnBlock.afterPos
					}).insertContentAt(t.selection.from, a && o ? n.content : null).setTextSelection(t.selection.from).scrollIntoView().run();
				}
				return !1;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				let { bnBlock: r, blockContent: i } = n, a = FF(t.doc, n.bnBlock.beforePos);
				if (!a || !a.isBlockContainer) return !1;
				let o = t.selection.from === i.afterPos - 1, s = t.selection.empty, c = r.afterPos;
				return o && s ? e().command(zF(c)).scrollIntoView().run() : !1;
			}),
			() => t.command(({ state: e, tr: t, dispatch: n }) => {
				let r = iD(e);
				if (!r.isBlockContainer || e.selection.from !== r.blockContent.afterPos - 1) return !1;
				let i = FF(e.doc, r.bnBlock.beforePos);
				if (!i || i.isBlockContainer) return !1;
				if (n) {
					let e = i.bnBlock.beforePos + 1, n = t.doc.resolve(e + 1);
					return t.delete(n.pos, n.pos + n.nodeAfter.nodeSize), BM(t, i.bnBlock.beforePos), t.insert(r.bnBlock.afterPos, n.nodeAfter), t.setSelection(I.near(t.doc.resolve(n.pos))), !0;
				}
				return !1;
			}),
			() => t.command(({ state: e, tr: t, dispatch: n }) => {
				let r = iD(e);
				if (!r.isBlockContainer || t.selection.from !== r.blockContent.afterPos - 1) return !1;
				let i = t.doc.resolve(r.bnBlock.afterPos);
				if (i.nodeAfter || i.node().type.name !== "column") return !1;
				let a = t.doc.resolve(r.bnBlock.afterPos), o = t.doc.resolve(a.after()), s = o.after();
				if (n) {
					let e = o.pos === s - 1 ? s : o.pos + 1, n = rD(t.doc.resolve(e));
					t.delete(n.bnBlock.beforePos, n.bnBlock.afterPos), BM(t, s - o.node().nodeSize), t.insert(a.pos, n.bnBlock.node), t.setSelection(I.near(t.doc.resolve(e)));
				}
				return !0;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				let { blockContent: r } = n, i = t.selection.from === r.afterPos - 1, a = t.selection.empty;
				if (i && a) {
					let i = (e, t) => {
						let n = FF(e, t);
						if (n) return n;
						let r = NF(e, t);
						if (r) return i(e, r.bnBlock.beforePos);
					}, a = i(t.doc, n.bnBlock.beforePos);
					if (!a || !a.isBlockContainer) return !1;
					let o = a.blockContent.node, s = o.type.spec.content === "inline*", c = r.node.type.spec.content === "inline*";
					return e().insertContentAt(a.bnBlock.afterPos, a.childContainer?.node.content || M.empty).deleteRange({
						from: a.bnBlock.beforePos,
						to: a.bnBlock.afterPos
					}).insertContentAt(t.selection.from, s && c ? o.content : null).setTextSelection(t.selection.from).scrollIntoView().run();
				}
				return !1;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				if (n.blockContent.node.childCount === 0 && n.blockContent.node.type.spec.content === "inline*") {
					let r = FF(t.doc, n.bnBlock.beforePos);
					if (!r || !r.isBlockContainer) return !1;
					let i = e();
					if (r.blockContent.node.type.spec.content === "tableRow+") {
						let e = n.bnBlock.afterPos + 1 + 1 + 1 + 1 + 1;
						i = i.setTextSelection(e);
					} else i = r.blockContent.node.type.spec.content === "" ? i.setNodeSelection(r.blockContent.beforePos) : i.setTextSelection(r.blockContent.beforePos + 1);
					return i.deleteRange({
						from: n.bnBlock.beforePos,
						to: n.bnBlock.afterPos
					}).scrollIntoView().run();
				}
				return !1;
			}),
			() => t.command(({ state: t }) => {
				let n = iD(t);
				if (!n.isBlockContainer) return !1;
				let r = t.selection.from === n.blockContent.afterPos - 1, i = t.selection.empty, a = FF(t.doc, n.bnBlock.beforePos);
				if (!a || !a.isBlockContainer) return !1;
				if (a && r && i && (a.blockContent.node.type.spec.content === "" || a.blockContent.node.type.spec.content === "inline*" && a.blockContent.node.childCount === 0)) {
					let t = a.bnBlock.node.lastChild.content;
					return e().deleteRange({
						from: a.bnBlock.beforePos,
						to: a.bnBlock.afterPos
					}).insertContentAt(n.bnBlock.afterPos, a.bnBlock.node.childCount === 2 ? t : null).run();
				}
				return !1;
			})
		]), n = (e = !1) => this.editor.commands.first(({ commands: t, tr: n }) => [
			() => t.command(({ state: e, tr: t }) => {
				let n = iD(e);
				if (!n.isBlockContainer) return !1;
				let { bnBlock: r, blockContent: i } = n, { depth: a } = e.doc.resolve(r.beforePos), o = e.selection.$anchor.parentOffset === 0, s = e.selection.anchor === e.selection.head, c = i.node.childCount === 0;
				return o && s && c && a > 1 ? fN(t, t.doc.type.schema.nodes.blockContainer, t.doc.type.schema.nodes.blockGroup) : !1;
			}),
			() => t.command(({ state: t }) => {
				let r = iD(t), i = this.options.editor.schema.blockSchema[r.blockNoteType].meta?.hardBreakShortcut ?? "shift+enter";
				if (i === "none") return !1;
				if (i === "shift+enter" && e || i === "enter") {
					let e = n.storedMarks || n.selection.$head.marks().filter((e) => this.editor.extensionManager.splittableMarks.includes(e.type.name));
					return n.insert(n.selection.head, n.doc.type.schema.nodes.hardBreak.create()).ensureMarks(e), !0;
				}
				return !1;
			}),
			() => t.command(({ state: e, dispatch: t, tr: n }) => {
				let r = iD(e);
				if (!r.isBlockContainer) return !1;
				let { bnBlock: i, blockContent: a } = r, o = e.selection.$anchor.parentOffset === 0, s = e.selection.anchor === e.selection.head, c = a.node.childCount === 0;
				if (o && s && c) {
					let a = i.afterPos, o = a + 2;
					if (t) {
						let t = e.schema.nodes.blockContainer.createAndFill(void 0, [e.schema.nodes.paragraph.createAndFill() || void 0, r.childContainer?.node].filter((e) => e !== void 0));
						n.insert(a, t).setSelection(new I(n.doc.resolve(o))).scrollIntoView(), r.childContainer && n.delete(r.childContainer.beforePos, r.childContainer.afterPos);
					}
					return !0;
				}
				return !1;
			}),
			() => t.command(({ state: e, chain: t }) => {
				let n = iD(e);
				if (!n.isBlockContainer) return !1;
				let { blockContent: r } = n, i = e.selection.$anchor.parentOffset === 0;
				return r.node.childCount === 0 ? !1 : (t().deleteSelection().command(nk(e.selection.from, i, i)).run(), !0);
			})
		]);
		return {
			Backspace: e,
			Delete: t,
			Enter: () => n(),
			"Shift-Enter": () => n(!0),
			Tab: () => this.options.tabBehavior !== "prefer-indent" && (this.options.editor.getExtension(Ak)?.store.state || this.options.editor.getExtension(bO)?.store.state !== void 0) ? !1 : uN(this.options.editor),
			"Shift-Tab": () => this.options.tabBehavior !== "prefer-indent" && (this.options.editor.getExtension(Ak)?.store.state || this.options.editor.getExtension(bO)?.store.state !== void 0) ? !1 : pN(this.options.editor),
			"Shift-Mod-ArrowUp": () => (this.options.editor.moveBlocksUp(), !0),
			"Shift-Mod-ArrowDown": () => (this.options.editor.moveBlocksDown(), !0),
			"Mod-z": () => this.options.editor.undo(),
			"Mod-y": () => this.options.editor.redo(),
			"Shift-Mod-z": () => this.options.editor.redo()
		};
	}
}), VF = Nm.create({
	name: "insertion",
	inclusive: !1,
	excludes: "deletion modification insertion",
	addAttributes() {
		return { id: {
			default: null,
			validate: "number"
		} };
	},
	extendMarkSchema(e) {
		return e.name === "insertion" ? {
			blocknoteIgnore: !0,
			inclusive: !1,
			toDOM(e, t) {
				return [
					"ins",
					{
						"data-id": String(e.attrs.id),
						"data-inline": String(t),
						...!t && { style: "display: contents" }
					},
					0
				];
			},
			parseDOM: [{
				tag: "ins",
				getAttrs(e) {
					return e.dataset.id ? { id: parseInt(e.dataset.id, 10) } : !1;
				}
			}]
		} : {};
	}
}), HF = Nm.create({
	name: "deletion",
	inclusive: !1,
	excludes: "insertion modification deletion",
	addAttributes() {
		return { id: {
			default: null,
			validate: "number"
		} };
	},
	extendMarkSchema(e) {
		return e.name === "deletion" ? {
			blocknoteIgnore: !0,
			inclusive: !1,
			toDOM(e, t) {
				return [
					"del",
					{
						"data-id": String(e.attrs.id),
						"data-inline": String(t),
						...!t && { style: "display: contents" }
					},
					0
				];
			},
			parseDOM: [{
				tag: "del",
				getAttrs(e) {
					return e.dataset.id ? { id: parseInt(e.dataset.id, 10) } : !1;
				}
			}]
		} : {};
	}
}), UF = Nm.create({
	name: "modification",
	inclusive: !1,
	excludes: "deletion insertion",
	addAttributes() {
		return {
			id: {
				default: null,
				validate: "number"
			},
			type: { validate: "string" },
			attrName: {
				default: null,
				validate: "string|null"
			},
			previousValue: { default: null },
			newValue: { default: null }
		};
	},
	extendMarkSchema(e) {
		return e.name === "modification" ? {
			blocknoteIgnore: !0,
			inclusive: !1,
			toDOM(e, t) {
				return [
					t ? "span" : "div",
					{
						"data-type": "modification",
						"data-id": String(e.attrs.id),
						"data-mod-type": e.attrs.type,
						"data-mod-prev-val": JSON.stringify(e.attrs.previousValue),
						"data-mod-new-val": JSON.stringify(e.attrs.newValue)
					},
					0
				];
			},
			parseDOM: [{
				tag: "span[data-type='modification']",
				getAttrs(e) {
					return e.dataset.id ? {
						id: parseInt(e.dataset.id, 10),
						type: e.dataset.modType,
						previousValue: e.dataset.modPrevVal,
						newValue: e.dataset.modNewVal
					} : !1;
				}
			}, {
				tag: "div[data-type='modification']",
				getAttrs(e) {
					return e.dataset.id ? {
						id: parseInt(e.dataset.id, 10),
						type: e.dataset.modType,
						previousValue: e.dataset.modPrevVal
					} : !1;
				}
			}]
		} : {};
	}
}), WF = W.create({
	name: "textAlignment",
	addGlobalAttributes() {
		return [{
			types: ["tableCell", "tableHeader"],
			attributes: { textAlignment: {
				default: "left",
				parseHTML: (e) => e.getAttribute("data-text-alignment"),
				renderHTML: (e) => e.textAlignment === "left" ? {} : { "data-text-alignment": e.textAlignment }
			} }
		}];
	}
}), GF = W.create({
	name: "blockTextColor",
	addGlobalAttributes() {
		return [{
			types: [
				"table",
				"tableCell",
				"tableHeader"
			],
			attributes: { textColor: vO() }
		}];
	}
}), KF = {
	blockColor: "data-block-color",
	blockStyle: "data-block-style",
	id: "data-id",
	depth: "data-depth",
	depthChange: "data-depth-change"
}, qF = rh.create({
	name: "blockContainer",
	group: "blockGroupChild bnBlock",
	content: "blockContent blockGroup?",
	priority: 50,
	defining: !0,
	marks: "insertion modification deletion",
	parseHTML() {
		return [{
			tag: "div[data-node-type=" + this.name + "]",
			getAttrs: (e) => {
				if (typeof e == "string") return !1;
				let t = {};
				for (let [n, r] of Object.entries(KF)) e.getAttribute(r) && (t[n] = e.getAttribute(r));
				return t;
			}
		}, {
			tag: "div[data-node-type=\"blockOuter\"]",
			skip: !0
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = document.createElement("div");
		t.className = "bn-block-outer", t.setAttribute("data-node-type", "blockOuter");
		for (let [n, r] of Object.entries(e)) n !== "class" && t.setAttribute(n, r);
		let n = {
			...this.options.domAttributes?.block || {},
			...e
		}, r = document.createElement("div");
		r.className = RE("bn-block", n.class), r.setAttribute("data-node-type", this.name);
		for (let [e, t] of Object.entries(n)) e !== "class" && r.setAttribute(e, t);
		return t.appendChild(r), {
			dom: t,
			contentDOM: r
		};
	}
}), JF = rh.create({
	name: "blockGroup",
	group: "childContainer",
	content: "blockGroupChild+",
	marks: "deletion insertion modification",
	parseHTML() {
		return [{
			tag: "div",
			getAttrs: (e) => typeof e == "string" ? !1 : e.getAttribute("data-node-type") === "blockGroup" ? null : !1
		}];
	},
	renderHTML({ HTMLAttributes: e }) {
		let t = {
			...this.options.domAttributes?.blockGroup || {},
			...e
		}, n = document.createElement("div");
		n.className = RE("bn-block-group", t.class), n.setAttribute("data-node-type", "blockGroup");
		for (let [e, r] of Object.entries(t)) e !== "class" && n.setAttribute(e, r);
		return {
			dom: n,
			contentDOM: n
		};
	}
}), YF = rh.create({
	name: "doc",
	topNode: !0,
	content: "blockGroup",
	marks: "insertion modification deletion"
}), XF = j(({ options: e }) => ({
	key: "collaboration",
	blockNoteExtensions: [
		zA(e),
		FA(e),
		IA(e),
		LA(),
		HA(e)
	]
}));
function ZF(e, t) {
	return [
		Vm.ClipboardTextSerializer,
		Vm.Commands,
		Vm.Editable,
		Vm.FocusEvents,
		Vm.Tabindex,
		FM,
		EE.configure({
			types: [
				"blockContainer",
				"columnList",
				"column"
			],
			setIdAttribute: t.setIdAttribute,
			isWithinEditor: e.isWithinEditor
		}),
		MF,
		IM,
		VF,
		HF,
		UF,
		...Object.values(e.schema.styleSpecs).map((t) => t.implementation.mark.configure({ editor: e })),
		GF,
		jF,
		WF,
		W.create({
			name: "OverrideEscape",
			addKeyboardShortcuts: () => ({ Escape: () => e.getExtension(Lk)?.shown() ? !1 : (e.blur(), !0) })
		}),
		YF,
		qF.configure({
			editor: e,
			domAttributes: t.domAttributes
		}),
		BF.configure({
			editor: e,
			tabBehavior: t.tabBehavior
		}),
		JF.configure({ domAttributes: t.domAttributes }),
		...Object.values(e.schema.inlineContentSpecs).filter((e) => e.config !== "link" && e.config !== "text").map((t) => t.implementation.node.configure({ editor: e })),
		...Object.values(e.schema.blockSpecs).flatMap((n) => [..."node" in n.implementation ? [n.implementation.node.configure({
			editor: e,
			domAttributes: t.domAttributes
		})] : []]),
		AF(e),
		TF(e, t.pasteHandler || ((e) => e.defaultPasteHandler())),
		cF(e)
	];
}
function QF(e, t) {
	let n = [
		MA(),
		JA(t),
		bO(t),
		Ak(t),
		nF({
			HTMLAttributes: t.links?.HTMLAttributes ?? {},
			onClick: t.links?.onClick,
			...t.links?.isValidLink ? { isValidLink: t.links.isValidLink } : {}
		}),
		XA(t),
		ej(),
		nj(t),
		gM(t),
		$j(t),
		Lk(t),
		...t.trailingBlock === !1 ? [] : [mM()]
	];
	return t.collaboration ? n.push(XF(t.collaboration)) : n.push(YA()), "table" in e.schema.blockSpecs && n.push(dM(t)), t.animations !== !1 && n.push(aj()), n;
}
var $F = class {
	disabledExtensions = /* @__PURE__ */ new Set();
	extensions = [];
	abortMap = /* @__PURE__ */ new Map();
	extensionFactories = /* @__PURE__ */ new Map();
	extensionPlugins = /* @__PURE__ */ new Map();
	constructor(e, t) {
		this.editor = e, this.options = t, e.onMount(() => {
			for (let t of this.extensions) if (t.mount) {
				let n = new window.AbortController(), r = t.mount({
					dom: e.prosemirrorView.dom,
					root: e.prosemirrorView.root,
					signal: n.signal
				});
				r && n.signal.addEventListener("abort", () => {
					r();
				}), this.abortMap.set(t, n);
			}
		}), e.onUnmount(() => {
			for (let [e, t] of this.abortMap.entries()) this.abortMap.delete(e), t.abort();
		}), this.disabledExtensions = new Set(t.disableExtensions || []);
		for (let e of QF(this.editor, this.options)) this.addExtension(e);
		for (let e of this.options.extensions ?? []) this.addExtension(e);
		for (let e of Object.values(this.editor.schema.blockSpecs)) for (let t of e.extensions ?? []) this.addExtension(t);
	}
	registerExtension(e) {
		let t = [].concat(e).filter(Boolean);
		if (!t.length) {
			console.warn("No extensions found to register", e);
			return;
		}
		let n = t.map((e) => this.addExtension(e)).filter(Boolean), r = /* @__PURE__ */ new Set();
		for (let e of n) e?.tiptapExtensions && console.warn(`Extension ${e.key} has tiptap extensions, but these cannot be changed after initializing the editor. Please separate the extension into multiple extensions if you want to add them, or re-initialize the editor.`, e), e?.inputRules?.length && console.warn(`Extension ${e.key} has input rules, but these cannot be changed after initializing the editor. Please separate the extension into multiple extensions if you want to add them, or re-initialize the editor.`, e), this.getProsemirrorPluginsFromExtension(e).plugins.forEach((e) => {
			r.add(e);
		});
		this.updatePlugins((e) => [...e, ...r]);
	}
	addExtension(e) {
		let t;
		if (t = typeof e == "function" ? e({ editor: this.editor }) : e, !(!t || this.disabledExtensions.has(t.key))) {
			if (typeof e == "function") {
				let e = t[Gn];
				typeof e == "function" && this.extensionFactories.set(e, t);
			}
			if (this.extensions.push(t), t.blockNoteExtensions) for (let e of t.blockNoteExtensions) this.addExtension(e);
			return t;
		}
	}
	resolveExtensions(e) {
		let t = [];
		if (typeof e == "function") {
			let n = this.extensionFactories.get(e);
			n && t.push(n);
		} else if (Array.isArray(e)) for (let n of e) t.push(...this.resolveExtensions(n));
		else if (typeof e == "object" && "key" in e) t.push(e);
		else if (typeof e == "string") {
			let n = this.extensions.find((t) => t.key === e);
			n && t.push(n);
		}
		return t;
	}
	unregisterExtension(e) {
		let t = this.resolveExtensions(e);
		if (!t.length) {
			console.warn("No extensions found to unregister", e);
			return;
		}
		let n = !1, r = /* @__PURE__ */ new Set();
		for (let i of t) this.extensions = this.extensions.filter((e) => e !== i), this.extensionFactories.forEach((e, t) => {
			e === i && this.extensionFactories.delete(t);
		}), this.abortMap.get(i)?.abort(), this.abortMap.delete(i), this.extensionPlugins.get(i)?.forEach((e) => {
			r.add(e);
		}), this.extensionPlugins.delete(i), i.tiptapExtensions && !n && (n = !0, console.warn(`Extension ${i.key} has tiptap extensions, but they will not be removed. Please separate the extension into multiple extensions if you want to remove them, or re-initialize the editor.`, e));
		this.updatePlugins((e) => e.filter((e) => !r.has(e)));
	}
	updatePlugins(e) {
		let t = this.editor.prosemirrorState, n = t.reconfigure({ plugins: e(t.plugins.slice()) });
		this.editor.prosemirrorView.updateState(n);
	}
	getTiptapExtensions() {
		let e = ZF(this.editor, this.options).filter((e) => !this.disabledExtensions.has(e.name)), t = PD(this.extensions), n = /* @__PURE__ */ new Map();
		for (let r of this.extensions) {
			r.tiptapExtensions && e.push(...r.tiptapExtensions);
			let i = t(r.key), { plugins: a, inputRules: o } = this.getProsemirrorPluginsFromExtension(r);
			a.length && e.push(W.create({
				name: r.key,
				priority: i,
				addProseMirrorPlugins: () => a
			})), o.length && (n.has(i) || n.set(i, []), n.get(i).push(...o));
		}
		e.push(W.create({
			name: "blocknote-input-rules",
			addProseMirrorPlugins() {
				let e = [];
				Array.from(n.keys()).sort().reverse().forEach((t) => {
					e.push(...n.get(t));
				});
				let t = SM({ rules: e });
				return [t, new R({ props: { handleKeyDown(e, n) {
					if (n.key !== "Enter" || n.shiftKey || n.ctrlKey || n.metaKey || n.altKey) return !1;
					let { $cursor: r } = e.state.selection;
					return r ? !!t.props.handleTextInput?.call(t, e, r.pos, r.pos, "\n", () => e.state.tr.insertText("\n", r.pos, r.pos)) : !1;
				} } })];
			}
		}));
		for (let t of this.options._tiptapOptions?.extensions ?? []) e.push(t);
		return e;
	}
	getProsemirrorPluginsFromExtension(e) {
		let t = [...e.prosemirrorPlugins ?? []], n = [];
		return !e.prosemirrorPlugins?.length && !Object.keys(e.keyboardShortcuts || {}).length && !e.inputRules?.length ? {
			plugins: t,
			inputRules: n
		} : (this.extensionPlugins.set(e, t), e.inputRules?.length && n.push(...e.inputRules.map((e) => new yM(e.find, (t, n, r, i) => {
			let a = e.replace({
				match: n,
				range: {
					from: r,
					to: i
				},
				editor: this.editor
			});
			if (a) {
				let e = t.tr, n = aD(e);
				if (!n.isBlockContainer || this.editor.schema.blockSchema[n.blockNoteType]?.content !== "inline") return null;
				e.deleteRange(r, i), cO(e, n.bnBlock.beforePos, a);
				let o = n.bnBlock.node.attrs.id;
				return o && CP(e, o, "start"), e;
			}
			return null;
		}, { undoable: !0 }))), Object.keys(e.keyboardShortcuts || {}).length && t.push(Cd(Object.fromEntries(Object.entries(e.keyboardShortcuts).map(([e, t]) => [e, () => t({ editor: this.editor })])))), {
			plugins: t,
			inputRules: n
		});
	}
	getExtensions() {
		return new Map(this.extensions.map((e) => [e.key, e]));
	}
	getExtension(e) {
		if (typeof e == "string") return this.extensions.find((t) => t.key === e) || void 0;
		if (typeof e == "function") return this.extensionFactories.get(e) || void 0;
		throw Error(`Invalid extension type: ${typeof e}`);
	}
	hasExtension(e) {
		return typeof e == "string" ? this.extensions.some((t) => t.key === e) : typeof e == "object" && "key" in e ? this.extensions.some((t) => t.key === e.key) : typeof e == "function" ? this.extensionFactories.has(e) : !1;
	}
};
function eI(e, t) {
	let { $from: n, $to: r } = t;
	if (n.pos > n.start() && n.pos < e.content.size) {
		let t = e.textBetween(n.pos, n.pos + 1);
		if (/^[\w\p{P}]$/u.test(t)) {
			let t = e.textBetween(n.start(), n.pos).match(/[\w\p{P}]+$/u);
			t && (n = e.resolve(n.pos - t[0].length));
		}
	}
	if (r.pos < r.end() && r.pos > 0) {
		let t = e.textBetween(r.pos - 1, r.pos);
		if (/^[\w\p{P}]$/u.test(t)) {
			let t = e.textBetween(r.pos, r.end()).match(/^[\w\p{P}]+/u);
			t && (r = e.resolve(r.pos + t[0].length));
		}
	}
	return {
		$from: n,
		$to: r,
		from: n.pos,
		to: r.pos
	};
}
function tI(e) {
	let t = oD(e);
	if (e.selection.empty || "node" in e.selection) return;
	let n = e.doc.resolve(eD(e.doc, e.selection.from).posBeforeNode), r = e.doc.resolve(eD(e.doc, e.selection.to).posBeforeNode), i = (r, i) => {
		let a = n.posAtIndex(r, i), o = e.doc.resolve(a).nodeAfter;
		if (!o) throw Error(`Error getting selection - node not found at position ${a}`);
		return gD(o, t);
	}, a = [], o = n.sharedDepth(r.pos), s = n.index(o), c = r.index(o);
	if (n.depth > o) {
		a.push(gD(n.nodeAfter, t));
		for (let e = n.depth; e > o; e--) if (n.node(e).type.isInGroup("childContainer")) {
			let t = n.index(e) + 1, r = n.node(e).childCount;
			for (let n = t; n < r; n++) a.push(i(n, e));
		}
	} else a.push(i(s, o));
	for (let e = s + 1; e <= c; e++) a.push(i(e, o));
	if (a.length === 0) throw Error(`Error getting selection - selection doesn't span any blocks (${e.selection})`);
	return { blocks: a };
}
function nI(e, t, n) {
	let r = typeof t == "string" ? t : t.id, i = typeof n == "string" ? n : n.id, a = cD(oD(e));
	if (r === i) throw Error(`Attempting to set selection with the same anchor and head blocks (id ${r})`);
	let o = aO(r, e.doc);
	if (!o) throw Error(`Block with ID ${r} not found`);
	let s = aO(i, e.doc);
	if (!s) throw Error(`Block with ID ${i} not found`);
	let c = nD(o), l = nD(s), u = a.blockSchema[c.blockNoteType], d = a.blockSchema[l.blockNoteType];
	if (!c.isBlockContainer || u.content === "none") throw Error(`Attempting to set selection anchor in block without content (id ${r})`);
	if (!l.isBlockContainer || d.content === "none") throw Error(`Attempting to set selection anchor in block without content (id ${i})`);
	let f, p;
	if (u.content === "table") {
		let e = G.get(c.blockContent.node);
		f = c.blockContent.beforePos + e.positionAt(0, 0, c.blockContent.node) + 1 + 2;
	} else f = c.blockContent.beforePos + 1;
	if (d.content === "table") {
		let t = G.get(l.blockContent.node), n = l.blockContent.beforePos + t.positionAt(t.height - 1, t.width - 1, l.blockContent.node) + 1;
		p = n + e.doc.resolve(n).nodeAfter.nodeSize - 2;
	} else p = l.blockContent.afterPos - 1;
	e.setSelection(I.create(e.doc, f, p));
}
function rI(e, t = !1) {
	let n = oD(e), r = t ? eI(e.doc, e.selection) : e.selection, i = r.$from, a = r.$to;
	for (; a.parentOffset >= a.parent.nodeSize - 2 && a.depth > 0;) a = e.doc.resolve(a.pos + 1);
	for (; a.parentOffset === 0 && a.depth > 0;) a = e.doc.resolve(a.pos - 1);
	for (; i.parentOffset === 0 && i.depth > 0;) i = e.doc.resolve(i.pos - 1);
	for (; i.parentOffset >= i.parent.nodeSize - 2 && i.depth > 0;) i = e.doc.resolve(i.pos + 1);
	let o = vD(e.doc.slice(i.pos, a.pos, !0), n);
	return {
		_meta: {
			startPos: i.pos,
			endPos: a.pos
		},
		...o
	};
}
var iI = class {
	constructor(e) {
		this.editor = e;
	}
	getSelection() {
		return this.editor.transact((e) => tI(e));
	}
	getSelectionCutBlocks(e = !1) {
		return this.editor.transact((t) => rI(t, e));
	}
	setSelection(e, t) {
		return this.editor.transact((n) => nI(n, e, t));
	}
	getTextCursorPosition() {
		return this.editor.transact((e) => SP(e));
	}
	setTextCursorPosition(e, t = "start") {
		return this.editor.transact((n) => CP(n, e, t));
	}
	getSelectionBoundingBox() {
		if (!this.editor.prosemirrorView) return;
		let { selection: e } = this.editor.prosemirrorState, { ranges: t } = e, n = Math.min(...t.map((e) => e.$from.pos)), r = Math.max(...t.map((e) => e.$to.pos));
		if (Np(e)) {
			let e = this.editor.prosemirrorView.nodeDOM(n);
			if (e) return e.getBoundingClientRect();
		}
		return Rp(this.editor.prosemirrorView, n, r).toJSON();
	}
}, aI = class {
	constructor(e) {
		this.editor = e;
	}
	activeTransaction = null;
	can(e) {
		try {
			return this.isInCan = !0, e();
		} finally {
			this.isInCan = !1;
		}
	}
	isInCan = !1;
	exec(e) {
		if (this.activeTransaction) throw Error("`exec` should not be called within a `transact` call, move the `exec` call outside of the `transact` call");
		if (this.isInCan) return this.canExec(e);
		let t = this.prosemirrorState, n = this.prosemirrorView;
		return e(t, (e) => this.prosemirrorView.dispatch(e), n);
	}
	canExec(e) {
		if (this.activeTransaction) throw Error("`canExec` should not be called within a `transact` call, move the `canExec` call outside of the `transact` call");
		let t = this.prosemirrorState, n = this.prosemirrorView;
		return e(t, void 0, n);
	}
	transact(e) {
		if (this.activeTransaction) return e(this.activeTransaction);
		try {
			this.activeTransaction = this.editor._tiptapEditor.state.tr;
			let t = e(this.activeTransaction), n = this.activeTransaction;
			return this.activeTransaction = null, n && (n.docChanged || n.selectionSet || n.scrolledIntoView || n.storedMarksSet || !n.isGeneric) && this.prosemirrorView.dispatch(n), t;
		} finally {
			this.activeTransaction = null;
		}
	}
	get prosemirrorState() {
		if (this.activeTransaction) throw Error("`prosemirrorState` should not be called within a `transact` call, move the `prosemirrorState` call outside of the `transact` call or use `editor.transact` to read the current editor state");
		return this.editor._tiptapEditor.state;
	}
	get prosemirrorView() {
		return this.editor._tiptapEditor.view;
	}
	isFocused() {
		return this.prosemirrorView?.hasFocus() || !1;
	}
	focus() {
		this.prosemirrorView?.focus();
	}
	get isEditable() {
		if (!this.editor._tiptapEditor) {
			if (!this.editor.headless) throw Error("no editor, but also not headless?");
			return !1;
		}
		return this.editor._tiptapEditor.isEditable === void 0 ? !0 : this.editor._tiptapEditor.isEditable;
	}
	set isEditable(e) {
		if (!this.editor._tiptapEditor) {
			if (!this.editor.headless) throw Error("no editor, but also not headless?");
			return;
		}
		this.editor._tiptapEditor.options.editable !== e && this.editor._tiptapEditor.setEditable(e);
	}
	undo() {
		let e = this.editor.getExtension("yUndo");
		if (e) return this.exec(e.undoCommand);
		let t = this.editor.getExtension("history");
		if (t) return this.exec(t.undoCommand);
		throw Error("No undo plugin found");
	}
	redo() {
		let e = this.editor.getExtension("yUndo");
		if (e) return this.exec(e.redoCommand);
		let t = this.editor.getExtension("history");
		if (t) return this.exec(t.redoCommand);
		throw Error("No redo plugin found");
	}
};
function oI(e, t, n, r = { updateSelection: !0 }) {
	let { from: i, to: a } = typeof t == "number" ? {
		from: t,
		to: t
	} : {
		from: t.from,
		to: t.to
	}, o = !0, s = !0, c = "";
	if (n.forEach((e) => {
		e.check(), o && e.isText && e.marks.length === 0 ? c += e.text : o = !1, s = s ? e.isBlock : !1;
	}), i === a && s) {
		let { parent: t } = e.doc.resolve(i);
		t.isTextblock && !t.type.spec.code && !t.childCount && (--i, a += 1);
	}
	return o ? e.insertText(c, i, a) : e.replaceWith(i, a, n), r.updateSelection && pf(e, e.steps.length - 1, -1), !0;
}
var sI = class {
	constructor(e) {
		this.editor = e;
	}
	insertInlineContent(e, { updateSelection: t = !1 } = {}) {
		let n = tO(e, this.editor.pmSchema);
		this.editor.transact((e) => {
			oI(e, {
				from: e.selection.from,
				to: e.selection.to
			}, n, { updateSelection: t });
		});
	}
	getActiveStyles() {
		return this.editor.transact((e) => {
			let t = {}, n = e.selection.$to.marks();
			for (let e of n) {
				let n = this.editor.schema.styleSchema[e.type.name];
				if (!n) {
					e.type.name !== "link" && !e.type.spec.blocknoteIgnore && console.warn("mark not found in styleschema", e.type.name);
					continue;
				}
				n.propSchema === "boolean" ? t[n.type] = !0 : t[n.type] = e.attrs.stringValue;
			}
			return t;
		});
	}
	addStyles(e) {
		for (let [t, n] of Object.entries(e)) {
			let e = this.editor.schema.styleSchema[t];
			if (!e) throw Error(`style ${t} not found in styleSchema`);
			if (e.propSchema === "boolean") this.editor._tiptapEditor.commands.setMark(t);
			else if (e.propSchema === "string") this.editor._tiptapEditor.commands.setMark(t, { stringValue: n });
			else throw new FE(e.propSchema);
		}
	}
	removeStyles(e) {
		for (let t of Object.keys(e)) this.editor._tiptapEditor.commands.unsetMark(t);
	}
	toggleStyles(e) {
		for (let [t, n] of Object.entries(e)) {
			let e = this.editor.schema.styleSchema[t];
			if (!e) throw Error(`style ${t} not found in styleSchema`);
			if (e.propSchema === "boolean") this.editor._tiptapEditor.commands.toggleMark(t);
			else if (e.propSchema === "string") this.editor._tiptapEditor.commands.toggleMark(t, { stringValue: n });
			else throw new FE(e.propSchema);
		}
	}
	getSelectedText() {
		return this.editor.transact((e) => e.doc.textBetween(e.selection.from, e.selection.to));
	}
	getLinkMarkAtPos(e) {
		return this.editor.transact((t) => {
			let n = t.doc.resolve(e), r = n.marks().find((e) => e.type.name === "link");
			if (!r) return;
			let i = Xd(n, r.type);
			if (i) return {
				href: r.attrs.href,
				from: i.from,
				to: i.to,
				text: t.doc.textBetween(i.from, i.to)
			};
		});
	}
	getSelectedLinkUrl() {
		return this.editor.transact((e) => this.getLinkMarkAtPos(e.selection.from)?.href);
	}
	createLink(e, t) {
		e !== "" && this.editor.transact((n) => {
			let { from: r, to: i } = n.selection, a = this.editor.pmSchema.mark("link", { href: e });
			t ? n.insertText(t, r, i).addMark(r, r + t.length, a) : n.addMark(r, i, a);
		});
	}
	editLink(e, t, n = this.editor.transact((e) => e.selection.anchor)) {
		this.editor.transact((r) => {
			let { from: i, to: a } = this.getLinkMarkAtPos(n + 1) || {
				from: r.selection.from,
				to: r.selection.to
			}, o = this.editor.pmSchema.mark("link", { href: e });
			t !== r.doc.textBetween(i, a) && r.insertText(t, i, a), r.addMark(i, i + t.length, o);
		}), this.editor.prosemirrorView.focus();
	}
	deleteLink(e = this.editor.transact((e) => e.selection.anchor)) {
		this.editor.transact((t) => {
			let { from: n, to: r } = this.getLinkMarkAtPos(e + 1) || {
				from: t.selection.from,
				to: t.selection.to
			};
			t.removeMark(n, r, this.editor.pmSchema.marks.link).setMeta("preventAutolink", !0);
		}), this.editor.prosemirrorView.focus();
	}
};
function cI(e) {
	return Yf(e.state.selection.$from, (e) => e.type.name === "tableCell" || e.type.name === "tableHeader") !== void 0;
}
function lI(e, t) {
	let n = t.nodes.hardBreak, r = M.empty;
	return e.forEach((e) => {
		e.isTextblock && e.childCount > 0 ? (r = r.append(e.content), r = r.addToEnd(n.create())) : e.isText ? r = r.addToEnd(e) : e.isBlock && e.childCount > 0 && (r = r.append(lI(e.content, t)), r = r.addToEnd(n.create()));
	}), r.lastChild?.type === n && (r = r.cut(0, r.size - 1)), r;
}
function uI(e, t) {
	let n = [];
	return e.forEach((e, r, i) => {
		i !== t && n.push(e);
	}), M.from(n);
}
function dI(e, t) {
	let n = [];
	for (let r = 0; r < e.childCount; r++) if (e.child(r).type.name === "tableRow") if (n.length > 0 && n[n.length - 1].type.name === "table") {
		let t = n[n.length - 1], i = t.copy(t.content.addToEnd(e.child(r)));
		n[n.length - 1] = i;
	} else {
		let i = t.nodes.table.createChecked(void 0, e.child(r));
		n.push(i);
	}
	else n.push(e.child(r));
	return e = M.from(n), e;
}
function fI(e, t) {
	let n = M.from(e.content);
	n = dI(n, t.state.schema);
	let r = pI(n, t, e);
	if (r) return r;
	if (cI(t)) {
		let e = !1;
		if (n.descendants((t) => {
			t.type.isInGroup("tableContent") && (e = !0);
		}), !e && !t.state.schema.nodes.tableParagraph.validContent(n)) return new P(lI(n, t.state.schema), 0, 0);
	}
	if (!mI(n, t)) return new P(n, e.openStart, e.openEnd);
	for (let e = 0; e < n.childCount; e++) if (n.child(e).type.spec.group === "blockContent") {
		let r = [n.child(e)];
		if (e + 1 < n.childCount && n.child(e + 1).type.name === "blockGroup") {
			let t = n.child(e + 1).child(0).child(0);
			(t.type.name === "bulletListItem" || t.type.name === "numberedListItem" || t.type.name === "checkListItem") && (r.push(n.child(e + 1)), n = uI(n, e + 1));
		}
		let i = t.state.schema.nodes.blockContainer.createChecked(void 0, r);
		n = n.replaceChild(e, i);
	}
	return new P(n, e.openStart, e.openEnd);
}
function pI(e, t, n) {
	if (cI(t) || t.dragging) return null;
	let r = iD(t.state), i = r.isBlockContainer ? r.blockContent.node : null;
	if (!i || i.type.name === "paragraph" || i.type.spec.content !== "inline*" || i.childCount > 0) return null;
	let a = e.firstChild, o = a?.firstChild, s = o?.firstChild;
	if (a?.type.name !== "blockGroup" || o?.type.name !== "blockContainer" || s?.type.name !== "paragraph") return null;
	let c = i.type.create(i.attrs, s.content), l = o.copy(o.content.replaceChild(0, c)), u = a.copy(a.content.replaceChild(0, l));
	return new P(e.replaceChild(0, u), n.openStart, n.openEnd);
}
function mI(e, t) {
	let n = e.childCount === 1, r = e.firstChild?.type.spec.content === "inline*", i = e.firstChild?.type.spec.content === "tableRow+";
	if (n) {
		if (r) return !1;
		if (i) {
			let e = iD(t.state);
			if (e.isBlockContainer) return e.blockContent.node.type.spec.content !== "tableRow+";
		}
	}
	return !0;
}
var hI = {
	enableInputRules: !0,
	enablePasteRules: !0,
	enableCoreExtensions: !1
}, gI = class e extends vM {
	pmSchema;
	_tiptapEditor;
	elementRenderer = null;
	blockCache = /* @__PURE__ */ new WeakMap();
	dictionary;
	schema;
	blockImplementations;
	inlineContentImplementations;
	styleImplementations;
	uploadFile;
	onUploadStartCallbacks = [];
	onUploadEndCallbacks = [];
	resolveFileUrl;
	settings;
	static create(t) {
		return new e(t ?? {});
	}
	constructor(e) {
		super(), this.options = e, this.dictionary = e.dictionary || _M, this.settings = { tables: {
			splitCells: e?.tables?.splitCells ?? !1,
			cellBackgroundColor: e?.tables?.cellBackgroundColor ?? !1,
			cellTextColor: e?.tables?.cellTextColor ?? !1,
			headers: e?.tables?.headers ?? !1
		} };
		let t = {
			defaultStyles: !0,
			schema: e.schema || Jk.create(),
			...e,
			placeholders: {
				...this.dictionary.placeholders,
				...e.placeholders
			}
		};
		if (this.schema = t.schema, this.blockImplementations = t.schema.blockSpecs, this.inlineContentImplementations = t.schema.inlineContentSpecs, this.styleImplementations = t.schema.styleSpecs, t.uploadFile) {
			let e = t.uploadFile;
			this.uploadFile = async (t, n) => {
				this.onUploadStartCallbacks.forEach((e) => e.apply(this, [n]));
				try {
					return await e(t, n);
				} finally {
					this.onUploadEndCallbacks.forEach((e) => e.apply(this, [n]));
				}
			};
		}
		this.resolveFileUrl = t.resolveFileUrl, this._eventManager = new xN(this), this._extensionManager = new $F(this, t);
		let n = this._extensionManager.getTiptapExtensions(), r = this._extensionManager.hasExtension("ySync") || this._extensionManager.hasExtension("liveblocksExtension");
		r && t.initialContent && console.warn("When using Collaboration, initialContent might cause conflicts, because changes should come from the collaboration provider");
		let i = {
			...hI,
			...t._tiptapOptions,
			element: null,
			autofocus: t.autofocus ?? !1,
			extensions: n,
			editorProps: {
				...t._tiptapOptions?.editorProps,
				attributes: {
					tabIndex: "0",
					...t._tiptapOptions?.editorProps?.attributes,
					...t.domAttributes?.editor,
					class: RE("bn-editor", t.defaultStyles ? "bn-default-styles" : "", t.domAttributes?.editor?.class || "")
				},
				transformPasted: fI
			}
		};
		try {
			let e = t.initialContent || (r ? [{
				type: "paragraph",
				id: "initialBlockId"
			}] : [{
				type: "paragraph",
				id: EE.options.generateID()
			}]);
			if (!Array.isArray(e) || e.length === 0) throw Error("initialContent must be a non-empty array of blocks, received: " + e);
			let n = hp(i.extensions), a = Wf({
				type: "doc",
				content: [{
					type: "blockGroup",
					content: e.map((e) => iO(e, n, this.schema.styleSchema).toJSON())
				}]
			}, n, i.parseOptions);
			this._tiptapEditor = new th({
				...i,
				content: a.toJSON()
			}), this.pmSchema = this._tiptapEditor.schema;
		} catch (e) {
			throw Error("Error creating document from blocks passed as `initialContent`", { cause: e });
		}
		let a, o = this.pmSchema.nodes.doc.createAndFill;
		this.pmSchema.nodes.doc.createAndFill = (...e) => {
			if (a) return a;
			let t = o.apply(this.pmSchema.nodes.doc, e), n = JSON.parse(JSON.stringify(t.toJSON()));
			return n.content[0].content[0].attrs.id = "initialBlockId", a = br.fromJSON(this.pmSchema, n), a;
		}, this.pmSchema.cached.blockNoteEditor = this, this._tiptapEditor.on("mount", () => {
			this.headless = !1;
		}), this._tiptapEditor.on("unmount", () => {
			this.headless = !0;
		}), this._blockManager = new bN(this), this._exportManager = new xP(this), this._selectionManager = new iI(this), this._stateManager = new aI(this), this._styleManager = new sI(this), this.emit("create");
	}
	_blockManager;
	_eventManager;
	_exportManager;
	_extensionManager;
	_selectionManager;
	_stateManager;
	_styleManager;
	get extensions() {
		return this._extensionManager.getExtensions();
	}
	exec(e) {
		return this._stateManager.exec(e);
	}
	canExec(e) {
		return this._stateManager.canExec(e);
	}
	transact(e) {
		return this._stateManager.transact(e);
	}
	unregisterExtension = (...e) => this._extensionManager.unregisterExtension(...e);
	registerExtension = (...e) => this._extensionManager.registerExtension(...e);
	getExtension = ((...e) => this._extensionManager.getExtension(...e));
	mount = (e, t) => {
		let n = e.getRootNode(), r = typeof ShadowRoot < "u" && n instanceof ShadowRoot;
		(t?.portalTarget ?? e.parentElement ?? (r ? n : document.body)).appendChild(this.portalElement), this._tiptapEditor.mount({ mount: e });
	};
	unmount = () => {
		this.portalElement?.remove(), this._tiptapEditor.unmount();
	};
	get prosemirrorState() {
		return this._stateManager.prosemirrorState;
	}
	get prosemirrorView() {
		return this._stateManager.prosemirrorView;
	}
	get domElement() {
		if (!this.headless) return this.prosemirrorView?.dom;
	}
	_portalElement;
	get portalElement() {
		if (typeof document > "u") throw Error("Portal element accessed, but not available in headless mode");
		return this._portalElement ||= document.createElement("div"), this._portalElement;
	}
	isWithinEditor = (e) => !!(this.domElement?.parentElement?.contains(e) || this.portalElement?.contains(e));
	isFocused() {
		return this.headless ? !1 : this.prosemirrorView?.hasFocus() || !1;
	}
	headless = !0;
	focus() {
		this.headless || this.prosemirrorView.focus();
	}
	blur() {
		this.headless || this.domElement?.blur();
	}
	onUploadStart(e) {
		return this.onUploadStartCallbacks.push(e), () => {
			let t = this.onUploadStartCallbacks.indexOf(e);
			t > -1 && this.onUploadStartCallbacks.splice(t, 1);
		};
	}
	onUploadEnd(e) {
		return this.onUploadEndCallbacks.push(e), () => {
			let t = this.onUploadEndCallbacks.indexOf(e);
			t > -1 && this.onUploadEndCallbacks.splice(t, 1);
		};
	}
	get topLevelBlocks() {
		return this.document;
	}
	get document() {
		return this._blockManager.document;
	}
	getBlock(e) {
		return this._blockManager.getBlock(e);
	}
	getPrevBlock(e) {
		return this._blockManager.getPrevBlock(e);
	}
	getNextBlock(e) {
		return this._blockManager.getNextBlock(e);
	}
	getParentBlock(e) {
		return this._blockManager.getParentBlock(e);
	}
	forEachBlock(e, t = !1) {
		this._blockManager.forEachBlock(e, t);
	}
	onEditorContentChange(e) {
		this._tiptapEditor.on("update", e);
	}
	onEditorSelectionChange(e) {
		this._tiptapEditor.on("selectionUpdate", e);
	}
	onBeforeChange(e) {
		return this._extensionManager.getExtension(MA).subscribe(e);
	}
	getTextCursorPosition() {
		return this._selectionManager.getTextCursorPosition();
	}
	setTextCursorPosition(e, t = "start") {
		return this._selectionManager.setTextCursorPosition(e, t);
	}
	getSelection() {
		return this._selectionManager.getSelection();
	}
	getSelectionCutBlocks(e = !1) {
		return this._selectionManager.getSelectionCutBlocks(e);
	}
	setSelection(e, t) {
		return this._selectionManager.setSelection(e, t);
	}
	get isEditable() {
		return this._stateManager.isEditable;
	}
	set isEditable(e) {
		this._stateManager.isEditable = e;
	}
	insertBlocks(e, t, n = "before") {
		return this._blockManager.insertBlocks(e, t, n);
	}
	updateBlock(e, t) {
		return this._blockManager.updateBlock(e, t);
	}
	removeBlocks(e) {
		return this._blockManager.removeBlocks(e);
	}
	replaceBlocks(e, t) {
		return this._blockManager.replaceBlocks(e, t);
	}
	undo() {
		return this._stateManager.undo();
	}
	redo() {
		return this._stateManager.redo();
	}
	insertInlineContent(e, { updateSelection: t = !1 } = {}) {
		this._styleManager.insertInlineContent(e, { updateSelection: t });
	}
	getActiveStyles() {
		return this._styleManager.getActiveStyles();
	}
	addStyles(e) {
		this._styleManager.addStyles(e);
	}
	removeStyles(e) {
		this._styleManager.removeStyles(e);
	}
	toggleStyles(e) {
		this._styleManager.toggleStyles(e);
	}
	getSelectedText() {
		return this._styleManager.getSelectedText();
	}
	getSelectedLinkUrl() {
		return this._styleManager.getSelectedLinkUrl();
	}
	createLink(e, t) {
		this._styleManager.createLink(e, t);
	}
	getLinkMarkAtPos(e) {
		return this._styleManager.getLinkMarkAtPos(e);
	}
	editLink(e, t, n) {
		this._styleManager.editLink(e, t, n);
	}
	deleteLink(e) {
		this._styleManager.deleteLink(e);
	}
	canNestBlock() {
		return this._blockManager.canNestBlock();
	}
	nestBlock() {
		this._blockManager.nestBlock();
	}
	canUnnestBlock() {
		return this._blockManager.canUnnestBlock();
	}
	unnestBlock() {
		this._blockManager.unnestBlock();
	}
	moveBlocksUp(e) {
		return this._blockManager.moveBlocksUp(e);
	}
	moveBlocksDown(e) {
		return this._blockManager.moveBlocksDown(e);
	}
	blocksToHTMLLossy(e = this.document) {
		return this._exportManager.blocksToHTMLLossy(e);
	}
	blocksToFullHTML(e = this.document) {
		return this._exportManager.blocksToFullHTML(e);
	}
	tryParseHTMLToBlocks(e) {
		return this._exportManager.tryParseHTMLToBlocks(e);
	}
	blocksToMarkdownLossy(e = this.document) {
		return this._exportManager.blocksToMarkdownLossy(e);
	}
	tryParseMarkdownToBlocks(e) {
		return this._exportManager.tryParseMarkdownToBlocks(e);
	}
	onChange(e, t) {
		return this._eventManager.onChange(e, t);
	}
	onSelectionChange(e, t) {
		return this._eventManager.onSelectionChange(e, t);
	}
	onMount(e) {
		return this._eventManager.onMount(e);
	}
	onUnmount(e) {
		return this._eventManager.onUnmount(e);
	}
	getSelectionBoundingBox() {
		return this._selectionManager.getSelectionBoundingBox();
	}
	get isEmpty() {
		let e = this.document;
		return e.length === 0 || e.length === 1 && e[0].type === "paragraph" && e[0].content.length === 0;
	}
	pasteHTML(e, t = !1) {
		this._exportManager.pasteHTML(e, t);
	}
	pasteText(e) {
		return this._exportManager.pasteText(e);
	}
	pasteMarkdown(e) {
		return this._exportManager.pasteMarkdown(e);
	}
}, _I = /* @__PURE__ */ e((/* @__PURE__ */ t(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t instanceof Map && n instanceof Map) {
				if (t.size !== n.size) return !1;
				for (i of t.entries()) if (!n.has(i[0])) return !1;
				for (i of t.entries()) if (!e(i[1], n.get(i[0]))) return !1;
				return !0;
			}
			if (t instanceof Set && n instanceof Set) {
				if (t.size !== n.size) return !1;
				for (i of t.entries()) if (!n.has(i[0])) return !1;
				return !0;
			}
			if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (t[i] !== n[i]) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!(o === "_owner" && t.$$typeof) && !e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})))(), 1), vI = (0, b.createContext)(void 0);
function yI(e) {
	return (0, b.useContext)(vI);
}
function bI(e) {
	let t = yI(e);
	if (!t?.editor) throw Error("useBlockNoteEditor was called outside of a BlockNoteContext provider or BlockNoteView component");
	return t.editor;
}
function xI(e, t) {
	let n = (t?.editor ?? bI()).getExtension(e);
	if (!n) throw Error("Extension not found", { cause: { plugin: e } });
	return n;
}
function SI(e, t) {
	let { store: n } = xI(e, t);
	if (!n) throw Error("Store not found on plugin", { cause: { plugin: e } });
	return Hn(n, t?.selector);
}
function CI(e) {
	let t = new DOMRect(), n = "getBoundingClientRect" in e ? () => e.getBoundingClientRect() : () => e.element.getBoundingClientRect();
	return () => e.element && (e.cacheMountedBoundingClientRect ?? !0) ? (e.element.isConnected && (t = n()), t) : n();
}
function wI(e, t) {
	return e ? t ? (n, r, i) => {
		let a = e(n, r, i), o = t(n, r, i);
		return () => {
			a?.(), o?.();
		};
	} : e : t;
}
var TI = (e) => {
	let t = bI(), n = e.portalElement === null ? typeof document < "u" ? document.body : void 0 : e.portalElement ?? t?.portalElement;
	if (!n) throw Error("Portal element not found");
	let { whileElementsMounted: r, ...i } = e.useFloatingOptions ?? {}, { refs: a, floatingStyles: o, context: s } = hn({
		whileElementsMounted: wI(p, e.useFloatingOptions?.whileElementsMounted),
		...i
	}), { isMounted: c, styles: l } = Sn(s, e.useTransitionStylesProps), { status: u } = xn(s, e.useTransitionStatusProps), { getFloatingProps: d } = _n([pn(s, e.useDismissProps), kt(s, {
		enabled: !1,
		...e.useHoverProps
	})]), f = (0, b.useRef)(""), m = (0, b.useRef)(null), h = rt([m, a.setFloating]);
	if ((0, b.useEffect)(() => {
		if (e.reference) {
			let n = "element" in e.reference ? e.reference.element : void 0;
			n !== void 0 && (e.focusManagerProps?.disabled || !t.isWithinEditor(n)) && a.setReference(n), a.setPositionReference({
				getBoundingClientRect: CI(e.reference),
				contextElement: n
			});
		}
	}, [
		e.reference,
		a,
		e.focusManagerProps?.disabled,
		t
	]), (0, b.useEffect)(() => {
		(u === "initial" || u === "open") && m.current?.innerHTML && (f.current = m.current.innerHTML);
	}, [
		u,
		e.reference,
		e.children
	]), !c) return !1;
	let g = {
		...e.elementProps,
		style: {
			display: "flex",
			...e.elementProps?.style,
			zIndex: `calc(var(--bn-ui-base-z-index, 0) + ${e.elementProps?.style?.zIndex || 0})`,
			...o,
			...l
		},
		...d()
	};
	return u === "close" ? /* @__PURE__ */ (0, A.jsx)(Zt, {
		root: n,
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			ref: h,
			...g,
			dangerouslySetInnerHTML: { __html: f.current }
		})
	}) : e.focusManagerProps?.disabled ? /* @__PURE__ */ (0, A.jsx)(Zt, {
		root: n,
		children: /* @__PURE__ */ (0, A.jsx)("div", {
			ref: h,
			...g,
			children: e.children
		})
	}) : /* @__PURE__ */ (0, A.jsx)(Zt, {
		root: n,
		children: /* @__PURE__ */ (0, A.jsx)(ln, {
			...e.focusManagerProps,
			context: s,
			children: /* @__PURE__ */ (0, A.jsx)("div", {
				ref: h,
				...g,
				children: e.children
			})
		})
	});
}, EI = (0, b.createContext)(void 0);
function DI() {
	return (0, b.useContext)(EI);
}
function OI() {
	return yI().editor.dictionary;
}
var kI = typeof window < "u" ? b.useLayoutEffect : b.useEffect, AI = class {
	transactionNumber = 0;
	lastTransactionNumber = 0;
	lastSnapshot;
	editor;
	subscribers = /* @__PURE__ */ new Set();
	constructor(e) {
		this.editor = e, this.lastSnapshot = {
			editor: e,
			transactionNumber: 0
		}, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
	}
	getSnapshot() {
		return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
			editor: this.editor,
			transactionNumber: this.transactionNumber
		}, this.lastSnapshot);
	}
	getServerSnapshot() {
		return {
			editor: null,
			transactionNumber: 0
		};
	}
	subscribe(e) {
		return this.subscribers.add(e), () => {
			this.subscribers.delete(e);
		};
	}
	watch(e, t) {
		if (this.editor = e, this.editor) {
			let e = () => {
				this.transactionNumber += 1, this.subscribers.forEach((e) => e());
			}, n = this.editor._tiptapEditor, r = {
				all: [
					"transaction",
					"create",
					"mount",
					"unmount"
				],
				mount: [
					"create",
					"mount",
					"unmount"
				],
				selection: ["selectionUpdate"],
				change: ["update"]
			};
			for (let i of r[t]) n.on(i, e);
			return () => {
				for (let i of r[t]) n.off(i, e);
			};
		}
	}
};
function jI(e) {
	let t = yI(), n = e.editor || t?.editor || null, r = e.on || "all", [i] = (0, b.useState)(() => new AI(n)), a = (0, Vn.useSyncExternalStoreWithSelector)(i.subscribe, i.getSnapshot, i.getServerSnapshot, e.selector, e.equalityFn ?? _I.default);
	return kI(() => i.watch(n, r), [
		n,
		i,
		r
	]), (0, b.useDebugValue)(a), a;
}
function MI(e) {
	let t = yI();
	return e ||= t?.editor, jI({
		editor: e,
		selector: (e) => e.editor?.domElement,
		equalityFn: (e, t) => e === t,
		on: "mount"
	});
}
var NI = (e) => {
	let { position: t, children: n, portalElement: r, ...i } = e, { from: a, to: o } = t || {}, s = bI(), c = MI();
	return /* @__PURE__ */ (0, A.jsx)(TI, {
		reference: (0, b.useMemo)(() => {
			if (!(a === void 0 || o === void 0)) return {
				element: c?.firstElementChild || void 0,
				getBoundingClientRect: () => Rp(s.prosemirrorView, a, o ?? a)
			};
		}, [
			s,
			c,
			a,
			o
		]),
		portalElement: r,
		...i,
		children: t !== void 0 && n
	});
}, PI = (e = {}, t = []) => (0, b.useMemo)(() => {
	let t = gI.create(e);
	return window && (window.ProseMirror = t._tiptapEditor), t;
}, t), FI = (e) => {
	let [t, n] = (0, b.useState)(!1), r = jI({
		editor: e.editor,
		selector: ({ editor: e }) => e.isEmpty
	}), i = DI(), a = (0, b.useCallback)(() => {
		n(!0);
	}, []), o = (0, b.useCallback)(() => {
		n(!1);
	}, []);
	return (0, b.useEffect)(() => {
		e.editable && e.autoFocus && e.editor.focus();
	}, [
		e.autoFocus,
		e.editable,
		e.editor
	]), /* @__PURE__ */ (0, A.jsxs)(A.Fragment, { children: [/* @__PURE__ */ (0, A.jsx)(i.Comments.Editor, {
		autoFocus: e.autoFocus,
		className: "bn-comment-editor",
		editor: e.editor,
		onFocus: a,
		onBlur: o,
		editable: e.editable
	}), e.actions && /* @__PURE__ */ (0, A.jsx)("div", {
		className: "bn-comment-actions-wrapper",
		children: e.actions({
			isFocused: t,
			isEmpty: r
		})
	})] });
}, { textColor: II, backgroundColor: LI, ...RI } = Gk, zI = Jk.create({
	blockSpecs: { paragraph: fk() },
	styleSpecs: RI
}), BI = Object.defineProperty, VI = (e, t) => {
	let n = {};
	for (var r in e) BI(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || BI(n, Symbol.toStringTag, { value: "Module" }), n;
}, HI = Nm.create({
	name: "comment",
	excludes: "",
	inclusive: !1,
	keepOnSplit: !0,
	addAttributes() {
		return {
			orphan: {
				parseHTML: (e) => !!e.getAttribute("data-orphan"),
				renderHTML: (e) => e.orphan ? { "data-orphan": "true" } : {},
				default: !1
			},
			threadId: {
				parseHTML: (e) => e.getAttribute("data-bn-thread-id"),
				renderHTML: (e) => ({ "data-bn-thread-id": e.threadId }),
				default: ""
			}
		};
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["span", ap(e, { class: "bn-thread-mark" })];
	},
	parseHTML() {
		return [{ tag: "span.bn-thread-mark" }];
	},
	extendMarkSchema(e) {
		return e.name === "comment" ? { blocknoteIgnore: !0 } : {};
	}
}), UI = class extends vM {
	userCache = /* @__PURE__ */ new Map();
	loadingUsers = /* @__PURE__ */ new Set();
	constructor(e) {
		super(), this.resolveUsers = e;
	}
	async loadUsers(e) {
		let t = e.filter((e) => !this.userCache.has(e) && !this.loadingUsers.has(e));
		if (t.length !== 0) {
			for (let e of t) this.loadingUsers.add(e);
			try {
				let e = await this.resolveUsers(t);
				for (let t of e) this.userCache.set(t.id, t);
				this.emit("update", this.userCache);
			} finally {
				for (let e of t) this.loadingUsers.delete(e);
			}
		}
	}
	getUser(e) {
		return this.userCache.get(e);
	}
	subscribe(e) {
		return this.on("update", e);
	}
}, WI = new z("blocknote-comments");
function GI(e, t) {
	let n = /* @__PURE__ */ new Map();
	return e.descendants((e, r) => {
		e.marks.forEach((i) => {
			if (i.type.name === t) {
				let t = i.attrs.threadId;
				if (!t) return;
				let a = r, o = a + e.nodeSize, s = n.get(t) ?? {
					from: Infinity,
					to: 0
				};
				n.set(t, {
					from: Math.min(a, s.from),
					to: Math.max(o, s.to)
				});
			}
		});
	}), n;
}
var KI = j(({ editor: e, options: { schema: t, threadStore: n, resolveUsers: r } }) => {
	if (!r) throw Error("resolveUsers is required to be defined when using comments");
	if (!n) throw Error("threadStore is required to be defined when using comments");
	let i = HI.name, a = new UI(r), o = Kn({
		pendingComment: !1,
		selectedThreadId: void 0,
		threadPositions: /* @__PURE__ */ new Map()
	}, { onUpdate() {
		o.state.selectedThreadId !== o.prevState.selectedThreadId && e.transact((e) => e.setMeta(WI, !0));
	} }), s = (t) => {
		e.transact((e) => {
			e.doc.descendants((n, r) => {
				n.marks.forEach((a) => {
					if (a.type.name === i) {
						let i = a.type, s = a.attrs.threadId, c = t.get(s), l = !!(!c || c.resolved || c.deletedAt);
						if (l !== a.attrs.orphan) {
							let t = Math.max(r, 0), c = Math.min(r + n.nodeSize, e.doc.content.size - 1, e.doc.content.size - 1);
							e.removeMark(t, c, a), e.addMark(t, c, i.create({
								...a.attrs,
								orphan: l
							})), l && o.state.selectedThreadId === s && o.setState((e) => ({
								...e,
								selectedThreadId: void 0
							}));
						}
					}
				});
			});
		});
	};
	return {
		key: "comments",
		store: o,
		runsBefore: ["link"],
		tiptapExtensions: [HI],
		prosemirrorPlugins: [new R({
			key: WI,
			state: {
				init() {
					return { decorations: V.empty };
				},
				apply(e, t) {
					let n = e.getMeta(WI);
					if (!e.docChanged && !n) return t;
					let r = e.docChanged ? GI(e.doc, i) : o.state.threadPositions;
					(r.size > 0 || o.state.threadPositions.size > 0) && o.setState((e) => ({
						...e,
						threadPositions: r
					}));
					let a = [];
					if (o.state.selectedThreadId) {
						let e = r.get(o.state.selectedThreadId);
						e && a.push(B.inline(e.from, e.to, { class: "bn-thread-mark-selected" }));
					}
					return { decorations: V.create(e.doc, a) };
				}
			},
			props: {
				decorations(e) {
					return WI.getState(e)?.decorations ?? V.empty;
				},
				handleClick: (e, t, n) => {
					if (n.button !== 0) return !1;
					let r = e.state.doc.nodeAt(t);
					if (!r) return o.setState((e) => ({
						...e,
						selectedThreadId: void 0
					})), !1;
					let a = r.marks.find((e) => e.type.name === i && e.attrs.orphan !== !0);
					if (!a) return o.state.selectedThreadId !== void 0 && o.setState((e) => ({
						...e,
						selectedThreadId: void 0
					})), !1;
					let s = a.attrs.threadId;
					return s === o.state.selectedThreadId ? !1 : (o.setState((e) => ({
						...e,
						selectedThreadId: s
					})), !0);
				}
			}
		})],
		threadStore: n,
		mount() {
			let t = n.subscribe(s);
			s(n.getThreads());
			let r = e.onSelectionChange(() => {
				o.state.pendingComment && o.setState((e) => ({
					...e,
					pendingComment: !1
				}));
			});
			return () => {
				t(), r();
			};
		},
		selectThread(t, n = !0) {
			if (o.state.selectedThreadId !== t && (o.setState((e) => ({
				...e,
				pendingComment: !1,
				selectedThreadId: t
			})), t && n)) {
				let n = o.state.threadPositions.get(t);
				if (!n) return;
				(e.prosemirrorView?.domAtPos(n.from).node)?.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			}
		},
		startPendingComment() {
			o.setState((e) => ({
				...e,
				selectedThreadId: void 0,
				pendingComment: !0
			})), e.domElement?.focus(), e.getExtension(gM)?.showSelection(!0, "comments");
		},
		stopPendingComment() {
			o.setState((e) => ({
				...e,
				selectedThreadId: void 0,
				pendingComment: !1
			})), e.getExtension(gM)?.showSelection(!1, "comments");
		},
		async createThread(t) {
			let r = await n.createThread(t);
			if (n.addThreadToDocument) {
				let t = e.prosemirrorView, i = t.state.selection, a = Q.getState(t.state), o = {
					prosemirror: {
						head: i.head,
						anchor: i.anchor
					},
					yjs: a ? vT(a.binding, t.state) : void 0
				};
				await n.addThreadToDocument({
					threadId: r.id,
					selection: o
				});
			} else e._tiptapEditor.commands.setMark(i, {
				orphan: !1,
				threadId: r.id
			});
		},
		userStore: a,
		commentEditorSchema: t
	};
});
//#endregion
export { ih as $, QO as A, UE as B, QA as C, LE as D, RE as E, HE as F, Ak as G, Vk as H, Ok as I, Tk as J, OO as K, FE as L, $ as M, PE as N, WO as O, VO as P, AE as Q, Bk as R, dM as S, ME as T, Dk as U, ZO as V, bO as W, kO as X, KE as Y, NE as Z, gM as _, NI as a, XA as b, bI as c, jI as d, op as et, MI as f, DI as g, FI as h, OI as i, aO as j, kk as k, xI as l, yI as m, VI as n, I as nt, PI as o, zI as p, BO as q, vI as r, En as rt, TI as s, KI as t, Pp as tt, SI as u, $j as v, wk as w, ZA as x, nM as y, Lk as z };
