import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, Vt as i, jt as a, t as o, zt as s } from "./src-s9Lposmn.js";
import { $ as c, C as l, E as u, F as d, G as f, H as p, J as m, L as h, P as g, Q as _, R as v, S as y, T as b, Z as x, _ as S, b as C, c as w, et as ee, g as te, j as ne, l as T, m as E, n as re, p as ie, r as D, t as ae, tt as oe, u as se } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { n as ce, t as le } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { n as ue, r as de, t as fe } from "./chunk-ZIRB5QZD--8SM9Ogu.js";
import { n as pe } from "./chunk-C7G6YPKG-Vq4UjGHW.js";
import { _ as O, a as me, d as he, g as ge, i as _e, o as ve, p as ye, x as be, y as xe } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { r as Se } from "./chunk-OGEWGWER-DwpZif8m.js";
import { i as Ce, n as we } from "./chunk-HOUHSVGY-D5qeVdAE.js";
import { a as Te, i as Ee, r as De } from "./chunk-Q4XR5HBZ-c82EqI20.js";
import { i as Oe } from "./chunk-ZGVPDNZ5-0MVWO3Ri.js";
import { r as ke } from "./chunk-7BUUIJ7U-CS_3sOAb.js";
import { r as Ae } from "./chunk-52WLFC77-Bsl_6cMT.js";
import { n as je, r as Me } from "./chunk-FWX5IMBZ-Ds_CEKco.js";
//#region ../../node_modules/stylis/src/Enum.js
var k, Ne, Pe, Fe, Ie, Le, Re, ze = e((() => {
	k = "comm", Ne = "rule", Pe = "decl", Fe = "@import", Ie = "@namespace", Le = "@keyframes", Re = "@layer";
}));
//#endregion
//#region ../../node_modules/stylis/src/Utility.js
function Be(e) {
	return e.trim();
}
function Ve(e, t, n) {
	return e.replace(t, n);
}
function A(e, t) {
	return e.charCodeAt(t) | 0;
}
function j(e, t, n) {
	return e.slice(t, n);
}
function M(e) {
	return e.length;
}
function He(e) {
	return e.length;
}
function N(e, t) {
	return t.push(e), e;
}
var Ue, P, F = e((() => {
	Ue = Math.abs, P = String.fromCharCode;
}));
//#endregion
//#region ../../node_modules/stylis/src/Tokenizer.js
function We(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: V,
		column: H,
		length: o,
		return: "",
		siblings: s
	};
}
function Ge() {
	return W;
}
function Ke() {
	return W = U > 0 ? A(G, --U) : 0, H--, W === 10 && (H = 1, V--), W;
}
function I() {
	return W = U < tt ? A(G, U++) : 0, H++, W === 10 && (H = 1, V++), W;
}
function L() {
	return A(G, U);
}
function R() {
	return U;
}
function z(e, t) {
	return j(G, e, t);
}
function B(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function qe(e) {
	return V = H = 1, tt = M(G = e), U = 0, [];
}
function Je(e) {
	return G = "", e;
}
function Ye(e) {
	return Be(z(U - 1, Qe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xe(e) {
	for (; (W = L()) && W < 33;) I();
	return B(e) > 2 || B(W) > 3 ? "" : " ";
}
function Ze(e, t) {
	for (; --t && I() && !(W < 48 || W > 102 || W > 57 && W < 65 || W > 70 && W < 97););
	return z(e, R() + (t < 6 && L() == 32 && I() == 32));
}
function Qe(e) {
	for (; I();) switch (W) {
		case e: return U;
		case 34:
		case 39:
			e !== 34 && e !== 39 && Qe(W);
			break;
		case 40:
			e === 41 && Qe(e);
			break;
		case 92:
			I();
			break;
	}
	return U;
}
function $e(e, t) {
	for (; I() && e + W !== 57 && !(e + W === 84 && L() === 47););
	return "/*" + z(t, U - 1) + "*" + P(e === 47 ? e : I());
}
function et(e) {
	for (; !B(L());) I();
	return z(e, U);
}
var V, H, tt, U, W, G, nt = e((() => {
	F(), V = 1, H = 1, tt = 0, U = 0, W = 0, G = "";
}));
//#endregion
//#region ../../node_modules/stylis/src/Parser.js
function rt(e) {
	return Je(K("", null, null, null, [""], e = qe(e), 0, [0], e));
}
function K(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = 0, b = "", x = i, S = a, C = r, w = b; g;) switch (m = y, y = I()) {
		case 40:
			m != 108 && A(w, d - 1) == 58 ? (v++, w += "(") : w += Ye(y);
			break;
		case 41:
			v--, w += ")";
			break;
		case 34:
		case 39:
		case 91:
			w += Ye(y);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			if (v > 0) {
				w += P(y);
				break;
			}
			w += Xe(m);
			break;
		case 92:
			w += Ze(R() - 1, 7);
			continue;
		case 47:
			switch (L()) {
				case 42:
				case 47:
					N(at($e(I(), R()), t, n, c), c), (B(m || 1) == 5 || B(L() || 1) == 5) && M(w) && j(w, -1, void 0) !== " " && (w += " ");
					break;
				default: w += "/";
			}
			break;
		case 123 * h: s[l++] = M(w) * _;
		case 125 * h:
		case 59:
		case 0:
			if (v > 0 && y) {
				w += P(y);
				break;
			}
			switch (y) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (w = Ve(w, /\f/g, "")), p > 0 && (M(w) - d || h === 0) && N(p > 32 ? ot(w + ";", r, n, d - 1, c) : ot(Ve(w, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: w += ";";
				default: if (N(C = it(w, t, n, l, u, i, s, b, x = [], S = [], d, a), a), y === 123) if (u === 0) K(w, t, C, C, x, a, d, s, S);
				else {
					switch (f) {
						case 99: if (A(w, 3) === 110) break;
						case 108: if (A(w, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? K(e, C, C, r && N(it(e, C, C, 0, 0, i, s, b, i, x = [], d, S), S), i, S, d, s, r ? x : S) : K(w, C, C, C, [""], S, 0, s, S);
				}
			}
			l = u = p = 0, h = _ = 1, b = w = "", d = o;
			break;
		case 58: d = 1 + M(w), p = m;
		default:
			if (h < 1) {
				if (y == 123) --h;
				else if (y == 125 && h++ == 0 && Ke() == 125) continue;
			}
			switch (w += P(y), y * h) {
				case 38:
					_ = u > 0 ? 1 : (w += "\f", -1);
					break;
				case 44:
					if (v > 0) break;
					s[l++] = (M(w) - 1) * _, _ = 1;
					break;
				case 64:
					L() === 45 && (w += Ye(I())), f = L(), u = d = M(b = w += et(R())), y++;
					break;
				case 45: m === 45 && M(w) == 2 && (h = 0);
			}
	}
	return a;
}
function it(e, t, n, r, i, a, o, s, c, l, u, d) {
	for (var f = i - 1, p = i === 0 ? a : [""], m = He(p), h = 0, g = 0, _ = 0; h < r; ++h) for (var v = 0, y = j(e, f + 1, f = Ue(g = o[h])), b = e; v < m; ++v) (b = Be(g > 0 ? p[v] + " " + y : Ve(y, /&\f/g, p[v]))) && (c[_++] = b);
	return We(e, t, n, i === 0 ? Ne : s, c, l, u, d);
}
function at(e, t, n, r) {
	return We(e, t, n, k, P(Ge()), j(e, 2, -2), 0, r);
}
function ot(e, t, n, r, i) {
	return We(e, t, n, Pe, j(e, 0, r), j(e, r + 1, -1), r, i);
}
var st = e((() => {
	ze(), F(), nt();
})), ct = e((() => {}));
//#endregion
//#region ../../node_modules/stylis/src/Serializer.js
function lt(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function ut(e, t, n, r) {
	switch (e.type) {
		case Re: if (e.children.length) break;
		case Fe:
		case Ie:
		case Pe: return e.return = e.return || e.value;
		case k: return "";
		case Le: return e.return = e.value + "{" + lt(e.children, r) + "}";
		case Ne: if (!M(e.value = e.props.join(","))) return "";
	}
	return M(n = lt(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
var dt = e((() => {
	ze(), F();
}));
//#endregion
//#region ../../node_modules/stylis/src/Middleware.js
function ft(e) {
	var t = He(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
var pt = e((() => {
	F();
})), mt = e((() => {
	ze(), F(), st(), ct(), nt(), dt(), pt();
}));
//#endregion
//#region ../../node_modules/mermaid/dist/mermaid.core.mjs
function ht(e, t) {
	e.attr("role", $n), t !== "" && e.attr("aria-roledescription", t);
}
function gt(e, t, n, r) {
	if (e.insert !== void 0) {
		if (n) {
			let t = `chart-desc-${r}`;
			e.attr("aria-describedby", t), e.insert("desc", ":first-child").attr("id", t).text(n);
		}
		if (t) {
			let n = `chart-title-${r}`;
			e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
		}
	}
}
function _t(e) {
	let t = e.match(S);
	if (!t) return {
		text: e,
		metadata: {}
	};
	let n = t[1], r = de(n ? t[2].split("\n").map((e) => e.startsWith(n) ? e.slice(n.length) : e).join("\n") : t[2], { schema: fe }) ?? {};
	r = typeof r == "object" && !Array.isArray(r) ? r : {};
	let i = {};
	return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
		text: e.slice(t[0].length),
		metadata: i
	};
}
function vt(e) {
	let t = ir(rr(e)), n = ar(t.text), r = _e(t.config, n.directive);
	return e = nr(n.text), {
		code: e,
		title: t.title,
		config: r
	};
}
function yt(e) {
	let t = new TextEncoder().encode(e), n = Array.from(t, (e) => String.fromCodePoint(e)).join("");
	return btoa(n);
}
function bt(e) {
	let t = vt(e);
	return h(), re(t.config ?? {}), t;
}
async function xt(e, t) {
	q();
	try {
		let { code: t, config: n } = bt(e);
		return {
			diagramType: (await Y(t)).type,
			config: n
		};
	} catch (e) {
		if (t?.suppressErrors) return !1;
		throw e;
	}
}
function St(e, t) {
	return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
function Ct(e = {}) {
	let t = D({}, e);
	t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables ||= {}, t.themeVariables.fontFamily = t.fontFamily), p(t), t?.theme && t.theme in _ ? t.themeVariables = _[t.theme].getThemeVariables(t.themeVariables) : t && (t.themeVariables = _.default.getThemeVariables(t.themeVariables)), i((typeof t == "object" ? m(t) : u()).logLevel), q();
}
function wt(e, t, n, r) {
	ht(t, e), gt(t, n, r, t.attr("id"));
}
var Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, q, Qn, $n, J, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Y, X, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Z, Q, Rr, zr, Br, $, Vr, Hr = e((() => {
	le(), ue(), je(), Ae(), Oe(), pe(), ke(), Se(), De(), we(), he(), ne(), s(), n(), Te(), o(), mt(), ee(), xe(), Tt = "c4", Et = {
		id: Tt,
		detector: /* @__PURE__ */ t((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./c4Diagram-LMCZKHZV-Bvmqf2Ks.js");
			return {
				id: Tt,
				diagram: e
			};
		}, "loader")
	}, Dt = "flowchart", Ot = {
		id: Dt,
		detector: /* @__PURE__ */ t((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./flowDiagram-23GEKE2U-BvTeevoB.js");
			return {
				id: Dt,
				diagram: e
			};
		}, "loader")
	}, kt = "flowchart-v2", At = {
		id: kt,
		detector: /* @__PURE__ */ t((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./flowDiagram-23GEKE2U-BvTeevoB.js");
			return {
				id: kt,
				diagram: e
			};
		}, "loader")
	}, jt = "swimlane", Mt = {
		id: jt,
		detector: /* @__PURE__ */ t((e) => /^\s*swimlane-beta\b/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./swimlanesDiagram-G3AALYLV-kaAB-vk8.js");
			return {
				id: jt,
				diagram: e
			};
		}, "loader")
	}, Nt = "er", Pt = {
		id: Nt,
		detector: /* @__PURE__ */ t((e) => /^\s*erDiagram/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./erDiagram-Q63AITRT-CMyON2qu.js");
			return {
				id: Nt,
				diagram: e
			};
		}, "loader")
	}, Ft = "gitGraph", It = {
		id: Ft,
		detector: /* @__PURE__ */ t((e) => /^\s*gitGraph/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./gitGraphDiagram-IHSO6WYX-0hQQBsFJ.js");
			return {
				id: Ft,
				diagram: e
			};
		}, "loader")
	}, Lt = "gantt", Rt = {
		id: Lt,
		detector: /* @__PURE__ */ t((e) => /^\s*gantt/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./ganttDiagram-NO4QXBWP-UbLpg7L8.js");
			return {
				id: Lt,
				diagram: e
			};
		}, "loader")
	}, zt = "info", Bt = {
		id: zt,
		detector: /* @__PURE__ */ t((e) => /^\s*info/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./infoDiagram-FWYZ7A6U-Lt-usq_9.js");
			return {
				id: zt,
				diagram: e
			};
		}, "loader")
	}, Vt = "pie", Ht = {
		id: Vt,
		detector: /* @__PURE__ */ t((e) => /^\s*pie/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./pieDiagram-ENE6RG2P-CIZQX96D.js");
			return {
				id: Vt,
				diagram: e
			};
		}, "loader")
	}, Ut = "quadrantChart", Wt = {
		id: Ut,
		detector: /* @__PURE__ */ t((e) => /^\s*quadrantChart/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./quadrantDiagram-ABIIQ3AL-C3wrtZBb.js");
			return {
				id: Ut,
				diagram: e
			};
		}, "loader")
	}, Gt = "xychart", Kt = {
		id: Gt,
		detector: /* @__PURE__ */ t((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./xychartDiagram-FW5EYKEG-B-h7rinl.js");
			return {
				id: Gt,
				diagram: e
			};
		}, "loader")
	}, qt = "requirement", Jt = {
		id: qt,
		detector: /* @__PURE__ */ t((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./requirementDiagram-TGXJPOKE-YGhrUiy1.js");
			return {
				id: qt,
				diagram: e
			};
		}, "loader")
	}, Yt = "sequence", Xt = {
		id: Yt,
		detector: /* @__PURE__ */ t((e) => /^\s*sequenceDiagram/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./sequenceDiagram-DBY2YBRQ-n7kbedeI.js");
			return {
				id: Yt,
				diagram: e
			};
		}, "loader")
	}, Zt = "class", Qt = {
		id: Zt,
		detector: /* @__PURE__ */ t((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./classDiagram-OUVF2IWQ-CYIO7JaG.js");
			return {
				id: Zt,
				diagram: e
			};
		}, "loader")
	}, $t = "classDiagram", en = {
		id: $t,
		detector: /* @__PURE__ */ t((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./classDiagram-v2-EOCWNBFH-DJlWCmVc.js");
			return {
				id: $t,
				diagram: e
			};
		}, "loader")
	}, tn = "state", nn = {
		id: tn,
		detector: /* @__PURE__ */ t((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./stateDiagram-2N3HPSRC-DR_Nv8yg.js");
			return {
				id: tn,
				diagram: e
			};
		}, "loader")
	}, rn = "stateDiagram", an = {
		id: rn,
		detector: /* @__PURE__ */ t((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./stateDiagram-v2-6OUMAXLB-CZj38KNU.js");
			return {
				id: rn,
				diagram: e
			};
		}, "loader")
	}, on = "journey", sn = {
		id: on,
		detector: /* @__PURE__ */ t((e) => /^\s*journey/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./journeyDiagram-5HDEW3XC-TH64C97e.js");
			return {
				id: on,
				diagram: e
			};
		}, "loader")
	}, cn = { draw: /* @__PURE__ */ t((e, t, n) => {
		r.debug("rendering svg for syntax error\n");
		let i = ce(t), a = i.append("g");
		i.attr("viewBox", "0 0 2412 512"), w(i, 100, 512, !0), a.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), a.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), a.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), a.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${n}`);
	}, "draw") }, ln = cn, un = {
		db: {},
		renderer: cn,
		parser: { parse: /* @__PURE__ */ t(() => {}, "parse") }
	}, dn = "flowchart-elk", fn = {
		id: dn,
		detector: /* @__PURE__ */ t((e, t = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1, "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./flowDiagram-23GEKE2U-BvTeevoB.js");
			return {
				id: dn,
				diagram: e
			};
		}, "loader")
	}, pn = "timeline", mn = {
		id: pn,
		detector: /* @__PURE__ */ t((e) => /^\s*timeline/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./timeline-definition-FHXFAJF6-BtSri53W.js");
			return {
				id: pn,
				diagram: e
			};
		}, "loader")
	}, hn = "mindmap", gn = {
		id: hn,
		detector: /* @__PURE__ */ t((e) => /^\s*mindmap/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./mindmap-definition-LN4V7U3C-Bs6gxMiU.js");
			return {
				id: hn,
				diagram: e
			};
		}, "loader")
	}, _n = "kanban", vn = {
		id: _n,
		detector: /* @__PURE__ */ t((e) => /^\s*kanban/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./kanban-definition-HUTT4EX6-BTn-BJoq.js");
			return {
				id: _n,
				diagram: e
			};
		}, "loader")
	}, yn = "sankey", bn = {
		id: yn,
		detector: /* @__PURE__ */ t((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./sankeyDiagram-HTMAVEWB-BVxWr3eC.js");
			return {
				id: yn,
				diagram: e
			};
		}, "loader")
	}, xn = "packet", Sn = {
		id: xn,
		detector: /* @__PURE__ */ t((e) => /^\s*packet(-beta)?/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./diagram-NH7WQ7WH-DU7mC7ki.js");
			return {
				id: xn,
				diagram: e
			};
		}, "loader")
	}, Cn = "radar", wn = {
		id: Cn,
		detector: /* @__PURE__ */ t((e) => /^\s*radar-beta/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./diagram-WEI45ONY-B9Q8UzBq.js");
			return {
				id: Cn,
				diagram: e
			};
		}, "loader")
	}, Tn = "block", En = {
		id: Tn,
		detector: /* @__PURE__ */ t((e) => /^\s*block(-beta)?/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./blockDiagram-677ZJIJ3-ErQ2m-9M.js");
			return {
				id: Tn,
				diagram: e
			};
		}, "loader")
	}, Dn = "treeView", On = {
		id: Dn,
		detector: /* @__PURE__ */ t((e) => /^\s*treeView-beta/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./diagram-OA4YK3LP-Do0nJ5Ml.js");
			return {
				id: Dn,
				diagram: e
			};
		}, "loader")
	}, kn = "architecture", An = {
		id: kn,
		detector: /* @__PURE__ */ t((e) => /^\s*architecture/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./architectureDiagram-ZJ3FMSHR-CqS2I8wj.js");
			return {
				id: kn,
				diagram: e
			};
		}, "loader")
	}, jn = "eventmodeling", Mn = {
		id: jn,
		detector: /* @__PURE__ */ t((e) => /^\s*eventmodeling/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./diagram-FQU43EPY-BP1nKqlW.js");
			return {
				id: jn,
				diagram: e
			};
		}, "loader")
	}, Nn = "ishikawa", Pn = {
		id: Nn,
		detector: /* @__PURE__ */ t((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./ishikawaDiagram-FXEZZL3T-R2p5Hyfl.js");
			return {
				id: Nn,
				diagram: e
			};
		}, "loader")
	}, Fn = "venn", In = {
		id: Fn,
		detector: /* @__PURE__ */ t((e) => /^\s*venn-beta/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./vennDiagram-L72KCM5P-iYQ1vTCz.js");
			return {
				id: Fn,
				diagram: e
			};
		}, "loader")
	}, Ln = "treemap", Rn = {
		id: Ln,
		detector: /* @__PURE__ */ t((e) => /^\s*treemap/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./diagram-G47NLZAW-CYVTxlVz.js");
			return {
				id: Ln,
				diagram: e
			};
		}, "loader")
	}, zn = "wardley", Bn = {
		id: zn,
		detector: /* @__PURE__ */ t((e) => /^\s*wardley-beta/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./wardleyDiagram-EHGQE667-DnDZ3svg.js");
			return {
				id: zn,
				diagram: e
			};
		}, "loader")
	}, Vn = "cynefin", Hn = {
		id: Vn,
		detector: /* @__PURE__ */ t((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./cynefinDiagram-TSTJHNR4-OAH-qKBD.js");
			return {
				id: Vn,
				diagram: e
			};
		}, "loader")
	}, Un = "railroad", Wn = {
		id: Un,
		detector: /* @__PURE__ */ t((e) => /^\s*railroad-beta/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./railroadDiagram-RFXS5EU6-CqYarFw-.js");
			return {
				id: Un,
				diagram: e
			};
		}, "loader")
	}, Gn = "railroadEbnf", Kn = {
		id: Gn,
		detector: /* @__PURE__ */ t((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./ebnfDiagram-CCIWWBDH-DQH_z5eS.js");
			return {
				id: Gn,
				diagram: e
			};
		}, "loader")
	}, qn = "railroadAbnf", Jn = {
		id: qn,
		detector: /* @__PURE__ */ t((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./abnfDiagram-VRR7QNED-DfRfvumE.js");
			return {
				id: qn,
				diagram: e
			};
		}, "loader")
	}, Yn = "railroadPeg", Xn = {
		id: Yn,
		detector: /* @__PURE__ */ t((e) => /^\s*railroad-peg-beta/i.test(e), "detector"),
		loader: /* @__PURE__ */ t(async () => {
			let { diagram: e } = await import("./pegDiagram-2B236MQR-CBSWExzJ.js");
			return {
				id: Yn,
				diagram: e
			};
		}, "loader")
	}, Zn = !1, q = /* @__PURE__ */ t(() => {
		Zn || (Zn = !0, g("error", un, (e) => e.toLowerCase().trim() === "error"), g("---", {
			db: { clear: /* @__PURE__ */ t(() => {}, "clear") },
			styles: {},
			renderer: { draw: /* @__PURE__ */ t(() => {}, "draw") },
			parser: { parse: /* @__PURE__ */ t(() => {
				throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
			}, "parse") },
			init: /* @__PURE__ */ t(() => null, "init")
		}, (e) => e.toLowerCase().trimStart().startsWith("---")), d(fn, gn, An), d(Et, vn, en, Qt, Pt, Rt, Bt, Ht, Jt, Xt, Mt, At, Ot, mn, It, an, nn, sn, Wt, bn, Sn, Kt, En, Mn, On, wn, Pn, Rn, Wn, Kn, Jn, Xn, In, Bn, Hn));
	}, "addDiagrams"), Qn = /* @__PURE__ */ t(async () => {
		r.debug("Loading registered diagrams");
		let e = (await Promise.allSettled(Object.entries(E).map(async ([e, { detector: t, loader: n }]) => {
			if (n) try {
				y(e);
			} catch {
				try {
					let { diagram: e, id: r } = await n();
					g(r, e, t);
				} catch (t) {
					throw r.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete E[e], t;
				}
			}
		}))).filter((e) => e.status === "rejected");
		if (e.length > 0) {
			r.error(`Failed to load ${e.length} external diagrams`);
			for (let t of e) r.error(t);
			throw Error(`Failed to load ${e.length} external diagrams`);
		}
	}, "loadRegisteredDiagrams"), $n = "graphics-document document", t(ht, "setA11yDiagramInfo"), t(gt, "addSVGa11yTitleDescription"), J = class e {
		constructor(e, t, n, r, i) {
			this.type = e, this.text = t, this.db = n, this.parser = r, this.renderer = i;
		}
		static {
			t(this, "Diagram");
		}
		static async fromText(t, n = {}) {
			let r = C(), i = ie(t, r);
			t = ve(t) + "\n";
			try {
				y(i);
			} catch {
				let e = l(i);
				if (!e) throw new ae(`Diagram ${i} not found.`);
				let { id: t, diagram: n } = await e();
				g(t, n);
			}
			let { db: a, parser: o, renderer: s, init: c } = y(i);
			return o.parser && (o.parser.yy = a), a.clear?.(), c?.(r), n.title && a.setDiagramTitle?.(n.title), await o.parse(t), new e(i, t, a, o, s);
		}
		async render(e, t) {
			await this.renderer.draw(this.text, e, t, this);
		}
		getParser() {
			return this.parser;
		}
		getType() {
			return this.type;
		}
	}, er = [], tr = /* @__PURE__ */ t(() => {
		er.forEach((e) => {
			e();
		}), er = [];
	}, "attachFunctions"), nr = /* @__PURE__ */ t((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments"), t(_t, "extractFrontMatter"), rr = /* @__PURE__ */ t((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, t, n) => "<" + t + n.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), ir = /* @__PURE__ */ t((e) => {
		let { text: t, metadata: n } = _t(e), { displayMode: r, title: i, config: a = {} } = n;
		return r && (a.gantt ||= {}, a.gantt.displayMode = r), {
			title: i,
			config: a,
			text: t
		};
	}, "processFrontmatter"), ar = /* @__PURE__ */ t((e) => {
		let t = O.detectInit(e) ?? {}, n = O.detectDirective(e, "wrap");
		return Array.isArray(n) ? t.wrap = n.some(({ type: e }) => e === "wrap") : n?.type === "wrap" && (t.wrap = !0), {
			text: ge(e),
			directive: t
		};
	}, "processDirectives"), t(vt, "preprocessDiagram"), t(yt, "toBase64"), or = 5e4, sr = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", cr = "sandbox", lr = "loose", ur = "http://www.w3.org/2000/svg", dr = "http://www.w3.org/1999/xlink", fr = "http://www.w3.org/1999/xhtml", pr = "100%", mr = "100%", hr = "border:0;margin:0;", gr = "margin:0", _r = "allow-top-navigation-by-user-activation allow-popups", vr = "The \"iframe\" tag is not supported by your browser.", yr = ["foreignobject"], br = ["dominant-baseline"], t(bt, "processAndSetConfigs"), t(xt, "parse"), xr = /* @__PURE__ */ t((e, t, n = []) => `.${e} ${t} ${v(`{ ${n.join(" !important; ")} !important; }`)}`, "cssImportantStyles"), Sr = /* @__PURE__ */ t((e, t = /* @__PURE__ */ new Map()) => {
		let n = new CSSStyleSheet();
		if (e.fontFamily !== void 0 && n.insertRule(`:root { --mermaid-font-family: ${e.fontFamily}}`, n.cssRules.length), e.altFontFamily !== void 0 && n.insertRule(`:root { --mermaid-alt-font-family: ${e.altFontFamily}}`, n.cssRules.length), t instanceof Map) {
			let r = b(e) ? ["> *", "span"] : [
				"rect",
				"polygon",
				"ellipse",
				"circle",
				"path"
			];
			t.forEach((e) => {
				be(e.styles) || r.forEach((t) => {
					n.insertRule(xr(e.id, t, e.styles), n.cssRules.length);
				}), be(e.textStyles) || n.insertRule(xr(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))), n.cssRules.length);
			});
		}
		let r = "";
		if (e.themeCSS !== void 0) if (typeof n.replaceSync == "function") {
			let t = new CSSStyleSheet();
			t.replaceSync(e.themeCSS), r = T(t) + "\n";
		} else r += `${e.themeCSS}
`;
		return r + T(n);
	}, "createCssStyles"), Cr = /* @__PURE__ */ t((e, n) => lt(rt(`${e}{${n}}`), ft([/* @__PURE__ */ t(function(t, n, i, a) {
		if (t.type === "rule" && Array.isArray(t.props)) {
			if (t.parent && t.parent.type === "@keyframes") return;
			t.props = t.props.map((t) => t.startsWith(e) ? t : `${e} ${t}`);
		} else t.type.startsWith("@") && ([
			"@media",
			"@supports",
			"@layer",
			"@scope",
			"@container",
			"@starting-style",
			"@keyframes"
		].includes(t.type) || (r.warn(`Removing unsupported at-rule ${t.type} from CSS`), t.type = k));
	}, "addNamespace"), ut])), "compileCSS"), wr = /* @__PURE__ */ t((e, t, n, r) => Cr(r, x(t, Sr(e, n), {
		...e.themeVariables,
		theme: e.theme,
		look: e.look
	}, r)), "createUserStyles"), Tr = /* @__PURE__ */ t((e = "", t, n) => {
		let r = e;
		return !n && !t && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), r = me(r), r = r.replace(/<br>/g, "<br/>"), r;
	}, "cleanUpSvgCode"), Er = /* @__PURE__ */ t((e = "", t) => `<iframe style="width:${pr};height:${t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : mr};${hr}" src="data:text/html;charset=UTF-8;base64,${yt(`<body style="${gr}">${e}</body>`)}" sandbox="${_r}">
  ${vr}
</iframe>`, "putIntoIFrame"), Dr = /* @__PURE__ */ t((e, t, n, r, i) => {
		let a = e.append("div");
		a.attr("id", n), r && a.attr("style", r);
		let o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", ur);
		return i && o.attr("xmlns:xlink", i), o.append("g"), e;
	}, "appendDivSvgG"), t(St, "sandboxedIframe"), Or = /* @__PURE__ */ t((e, t, n, r) => {
		e.getElementById(t)?.remove(), e.getElementById(n)?.remove(), e.getElementById(r)?.remove();
	}, "removeExistingElements"), kr = /* @__PURE__ */ t(async function(e, n, i) {
		q();
		let o = bt(n);
		n = o.code;
		let s = C();
		r.debug(s), n.length > (s?.maxTextSize ?? or) && (n = sr);
		let c = `#${e}`, l = "i" + e, u = "#" + l, d = "d" + e, f = "#" + d, p = /* @__PURE__ */ t(() => {
			let e = a(h ? u : f).node();
			e && "remove" in e && e.remove();
		}, "removeTempElements"), m = a(document.body), h = s.securityLevel === cr, g = s.securityLevel === lr, _ = s.fontFamily;
		i === void 0 ? (Or(document, e, d, l), h ? (m = a(St(a(document.body), l).nodes()[0].contentDocument.body), m.node().style.margin = "0") : m = a("body"), Dr(m, e, d)) : (i && (i.innerHTML = ""), h ? (m = a(St(a(i), l).nodes()[0].contentDocument.body), m.node().style.margin = "0") : m = a(i), Dr(m, e, d, `font-family: ${_}`, dr));
		let v, y;
		try {
			v = await J.fromText(n, { title: o.title });
		} catch (e) {
			if (s.suppressErrorRendering) throw p(), e;
			v = await J.fromText("error"), y = e;
		}
		let b = m.select(f).node(), x = v.type, S = b.firstChild, w = S.firstChild, ee = v.renderer.getClasses?.(n, v), ne = wr(s, x, ee, c), T = document.createElement("style");
		T.innerHTML = ne, S.insertBefore(T, w);
		try {
			await v.renderer.draw(n, e, "11.16.0", v);
		} catch (t) {
			throw s.suppressErrorRendering ? p() : ln.draw(n, e, "11.16.0"), t;
		}
		let E = m.select(`${f} svg`), re = v.db.getAccTitle?.(), ie = v.db.getAccDescription?.();
		wt(x, E, re, ie), m.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", fr);
		let D = m.select(f).node().innerHTML;
		if (r.debug("config.arrowMarkerAbsolute", s.arrowMarkerAbsolute), D = Tr(D, h, te(s.arrowMarkerAbsolute)), h) {
			let e = m.select(f + " svg").node();
			D = Er(D, e);
		} else g || (D = oe.sanitize(D, {
			ADD_TAGS: yr,
			ADD_ATTR: br,
			HTML_INTEGRATION_POINTS: { foreignobject: !0 }
		}));
		if (tr(), y) throw y;
		return p(), {
			diagramType: x,
			svg: D,
			bindFunctions: v.db.bindFunctions
		};
	}, "render"), t(Ct, "initialize"), Y = /* @__PURE__ */ t((e, t = {}) => {
		let { code: n } = vt(e);
		return J.fromText(n, t);
	}, "getDiagramFromText"), t(wt, "addA11yInfo"), X = Object.freeze({
		render: kr,
		parse: xt,
		getDiagramFromText: Y,
		initialize: Ct,
		getConfig: C,
		setConfig: f,
		getSiteConfig: u,
		updateSiteConfig: c,
		reset: /* @__PURE__ */ t(() => {
			h();
		}, "reset"),
		globalReset: /* @__PURE__ */ t(() => {
			h(se);
		}, "globalReset"),
		defaultConfig: se
	}), i(C().logLevel), h(C()), Ar = /* @__PURE__ */ t((e, t, n) => {
		r.warn(e), ye(e) ? (n && n(e.str, e.hash), t.push({
			...e,
			message: e.str,
			error: e
		})) : (n && n(e), e instanceof Error && t.push({
			str: e.message,
			message: e.message,
			hash: e.name,
			error: e
		}));
	}, "handleError"), jr = /* @__PURE__ */ t(async function(e = { querySelector: ".mermaid" }) {
		try {
			await Mr(e);
		} catch (t) {
			if (ye(t) && r.error(t.str), $.parseError && $.parseError(t), !e.suppressErrors) throw r.error("Use the suppressErrors option to suppress these errors"), t;
		}
	}, "run"), Mr = /* @__PURE__ */ t(async function({ postRenderCallback: e, querySelector: t, nodes: n } = { querySelector: ".mermaid" }) {
		let i = X.getConfig();
		r.debug(`${e ? "" : "No "}Callback function found`);
		let a;
		if (n) a = n;
		else if (t) a = document.querySelectorAll(t);
		else throw Error("Nodes and querySelector are both undefined");
		r.debug(`Found ${a.length} diagrams`), i?.startOnLoad !== void 0 && (r.debug("Start On Load: " + i?.startOnLoad), X.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
		let o = new O.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed), s, c = [];
		for (let t of Array.from(a)) {
			if (r.info("Rendering diagram: " + t.id), t.getAttribute("data-processed")) continue;
			t.setAttribute("data-processed", "true");
			let n = `mermaid-${o.next()}`;
			s = t.innerHTML, s = Ee(O.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
			let i = O.detectInit(s);
			i && r.debug("Detected early reinit: ", i);
			try {
				let { svg: r, bindFunctions: i } = await Br(n, s, t);
				t.innerHTML = r, e && await e(n), i && i(t);
			} catch (e) {
				Ar(e, c, $.parseError);
			}
		}
		if (c.length > 0) throw c[0];
	}, "runThrowsErrors"), Nr = /* @__PURE__ */ t(function(e) {
		X.initialize(e);
	}, "initialize"), Pr = /* @__PURE__ */ t(async function(e, t, n) {
		r.warn("mermaid.init is deprecated. Please use run instead."), e && Nr(e);
		let i = {
			postRenderCallback: n,
			querySelector: ".mermaid"
		};
		typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await jr(i);
	}, "init"), Fr = /* @__PURE__ */ t(async (e, { lazyLoad: t = !0 } = {}) => {
		q(), d(...e), t === !1 && await Qn();
	}, "registerExternalDiagrams"), Ir = /* @__PURE__ */ t(function() {
		if ($.startOnLoad) {
			let { startOnLoad: e } = X.getConfig();
			e && $.run().catch((e) => r.error("Mermaid failed to initialize", e));
		}
	}, "contentLoaded"), typeof document < "u" && window.addEventListener("load", Ir, !1), Lr = /* @__PURE__ */ t(function(e) {
		$.parseError = e;
	}, "setParseErrorHandler"), Z = [], Q = !1, Rr = /* @__PURE__ */ t(async () => {
		if (!Q) {
			for (Q = !0; Z.length > 0;) {
				let e = Z.shift();
				if (e) try {
					await e();
				} catch (e) {
					r.error("Error executing queue", e);
				}
			}
			Q = !1;
		}
	}, "executeQueue"), zr = /* @__PURE__ */ t(async (e, n) => new Promise((i, a) => {
		let o = /* @__PURE__ */ t(() => new Promise((t, o) => {
			X.parse(e, n).then((e) => {
				t(e), i(e);
			}, (e) => {
				r.error("Error parsing", e), $.parseError?.(e), o(e), a(e);
			});
		}), "performCall");
		Z.push(o), Rr().catch(a);
	}), "parse"), Br = /* @__PURE__ */ t((e, n, i) => new Promise((a, o) => {
		let s = /* @__PURE__ */ t(() => new Promise((t, s) => {
			X.render(e, n, i).then((e) => {
				t(e), a(e);
			}, (e) => {
				r.error("Error parsing", e), $.parseError?.(e), s(e), o(e);
			});
		}), "performCall");
		Z.push(s), Rr().catch(o);
	}), "render"), $ = {
		startOnLoad: !0,
		mermaidAPI: X,
		parse: zr,
		render: Br,
		init: Pr,
		run: jr,
		registerExternalDiagrams: Fr,
		registerLayoutLoaders: Me,
		initialize: Nr,
		parseError: void 0,
		contentLoaded: Ir,
		setParseErrorHandler: Lr,
		detectType: ie,
		registerIconPacks: Ce,
		getRegisteredDiagramsMetadata: /* @__PURE__ */ t(() => Object.keys(E).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
	}, Vr = $;
}));
//#endregion
export { Vr as n, Hr as t };
