import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, jt as i, t as a, zt as o } from "./src-s9Lposmn.js";
import { B as s, U as c, W as l, X as u, a as d, b as f, f as p, j as m, q as h, v as ee, w as te, x as ne, y as re } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { d as ie, i as ae, t as oe, v as g } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { E as se } from "./chunk-KEIR6QF5-IQGkBMpb.js";
import { n as ce, r as le } from "./mermaid-parser.core-B0WAIwlv.js";
import { n as ue, t as de } from "./chunk-JWPE2WC7-Co6GTr09.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/diagram-FQU43EPY.mjs
function _() {
	Z = {};
}
function v() {
	let e = ge, { ast: t } = Z, n = b();
	if (!t) throw Error("No data for EventModel");
	return t.frames.forEach((i, a) => {
		let o = D(i, t.dataEntities, n);
		e = B(e, {
			$kind: G,
			index: a,
			frame: i,
			textProps: o
		});
		let s;
		P(i) ? (r.debug("source frame", i.sourceFrames), s = t.frames.filter((e) => i.sourceFrames.some((t) => t.$refText === e.name)), s.forEach((t) => {
			e = B(e, {
				$kind: q,
				index: a,
				frame: i,
				sourceFrame: t
			});
		})) : e = B(e, {
			$kind: q,
			index: a,
			frame: i
		});
	}), e = {
		...e,
		sortedSwimlanesArray: j(e.swimlanes)
	}, e;
}
function y(e) {
	Z.ast = e;
}
function b() {
	return Q;
}
function x(e) {
	let t = e.split(".");
	if (t.length === 2) return t[0];
}
function S(e) {
	let t = e.split(".");
	return t.length === 2 ? t[1] : e;
}
function C(e, t) {
	if (!(!t || t.length === 0)) return Object.values(e).find((e) => e.namespace === t);
}
function w(e, t, n) {
	return Math.max(t, ...Object.keys(e).filter((e) => {
		let r = Number.parseInt(e);
		return r > t && r < n;
	}).map((e) => Number.parseInt(e))) + 1;
}
function T(e, t) {
	let n = x(e.entityIdentifier), r = C(t, n);
	switch (e.modelEntityType) {
		case "ui":
		case "pcr":
		case "processor": return r ? {
			index: r.index,
			label: r.namespace || Q.labelUiAutomation
		} : n ? {
			index: w(t, 0, 100),
			label: Q.labelUiAutomationPrefix + n
		} : {
			index: 0,
			label: Q.labelUiAutomation
		};
		case "rmo":
		case "readmodel":
		case "cmd":
		case "command": return r ? {
			index: r.index,
			label: r.namespace || Q.labelCommandReadModel
		} : n ? {
			index: w(t, 100, 200),
			label: Q.labelCommandReadModelPrefix + n
		} : {
			index: 100,
			label: Q.labelCommandReadModel
		};
		default: return r ? {
			index: r.index,
			label: r.namespace || Q.labelEvents
		} : n ? {
			index: w(t, 200, 300),
			label: Q.labelEventsPrefix + n
		} : {
			index: 200,
			label: Q.labelEvents
		};
	}
}
function E(e) {
	let { themeVariables: t } = f();
	switch (e.modelEntityType) {
		case "ui": return {
			fill: t.emUiFill ?? "white",
			stroke: t.emUiStroke ?? "#dbdada"
		};
		case "pcr":
		case "processor": return {
			fill: t.emProcessorFill ?? "#edb3f6",
			stroke: t.emProcessorStroke ?? "#b88cbf"
		};
		case "rmo":
		case "readmodel": return {
			fill: t.emReadModelFill ?? "#d3f1a2",
			stroke: t.emReadModelStroke ?? "#a3b732"
		};
		case "cmd":
		case "command": return {
			fill: t.emCommandFill ?? "#bcd6fe",
			stroke: t.emCommandStroke ?? "#679ac3"
		};
		case "evt":
		case "event": return {
			fill: t.emEventFill ?? "#ffb778",
			stroke: t.emEventStroke ?? "#c19a0f"
		};
		default: return {
			fill: "red",
			stroke: "black"
		};
	}
}
function D(e, t, n) {
	let i = f(), a = s(S(e.entityIdentifier) ?? "", i), o, c = {
		fontSize: 16,
		fontWeight: 700,
		fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		joinWith: "<br/>"
	}, l = `<b>${g(a, n.textMaxWidth, c)}</b>`;
	if (e.dataInlineValue && (o = e.dataInlineValue, o = o.substring(o.indexOf("{") + 1), o = o.substring(0, o.lastIndexOf("}") - 1), o = s(o, i), o = g(o, n.textMaxWidth, c), o = o.replaceAll(" ", "&nbsp;")), e.dataReference) {
		let r = t.find((t) => t.name === e.dataReference?.$refText);
		r && (o = r.dataBlockValue, o = o.substring(o.indexOf("{\n") + 2), o = o.substring(0, o.lastIndexOf("}") - 1), o = s(o, i), o = g(o, n.textMaxWidth, c), o = o.replaceAll(" ", "&nbsp;"), o += "<br/>");
	}
	let u = o !== void 0;
	u && (l += `<br/><br/><code style="text-align: left; display: block;max-width:${n.textMaxWidth}px">${o}</code>`);
	let d = {
		fontSize: c.fontSize,
		fontWeight: c.fontWeight,
		fontFamily: c.fontFamily
	}, p = oe(l, d), m = u ? p.width / 3 : p.width, h = {
		content: l,
		width: m,
		height: p.height
	};
	return r.debug(`[${e.name}] ${e.entityIdentifier} text`, h), h;
}
function O(e, t) {
	let n = t, r = E(n.frame), i = {
		width: n.textProps.width + 2 * Q.boxTextPadding,
		height: n.textProps.height + 2 * Q.boxTextPadding
	};
	return [{
		$kind: K,
		frame: n.frame,
		index: n.index,
		visual: r,
		dimension: i,
		textProps: n.textProps
	}];
}
function k(e, t, n) {
	return t === void 0 ? Q.contentStartX : t.index === e.index && e.r ? e.r + Q.boxPadding : n === void 0 ? Q.contentStartX : n.r - Q.boxOverlap + Q.boxPadding;
}
function A(e, t) {
	let n = [...e.map((e) => e.r), t];
	return Math.max(...n);
}
function j(e) {
	return Object.values(e).sort((e, t) => e.index - t.index);
}
function M(e, t) {
	let n = t, r = T(n.frame, e.swimlanes), i;
	i = r.index in e.swimlanes ? e.swimlanes[r.index] : {
		index: r.index,
		label: r.label,
		r: 0,
		y: r.index * Q.swimlaneMinHeight + Q.swimlaneGap,
		height: Q.swimlaneMinHeight,
		maxHeight: Q.swimlaneMinHeight
	};
	let a = e.boxes.length > 0 ? e.boxes[e.boxes.length - 1] : void 0, o = e.previousSwimlaneNumber === void 0 ? void 0 : e.swimlanes[e.previousSwimlaneNumber], s = {
		width: Math.max(Q.boxMinWidth, Math.min(Q.boxMaxWidth, n.dimension.width)) + 2 * Q.boxPadding,
		height: Math.max(Q.boxMinHeight, Math.min(Q.boxMaxHeight, n.dimension.height)) + 2 * Q.boxPadding
	}, c = k(i, o, a), l = c + s.width + Q.boxPadding, u = A(Object.values(e.swimlanes), l);
	i.r = c + s.width, i.maxHeight = Math.max(i.maxHeight, s.height), i.height = Math.max(Q.swimlaneMinHeight, i.maxHeight) + 2 * Q.swimlanePadding;
	let d = {
		x: c,
		y: Q.swimlanePadding + i.y,
		r: l,
		dimension: s,
		leftSibling: !1,
		swimlane: i,
		visual: n.visual,
		text: n.textProps.content,
		frame: n.frame,
		index: n.index
	}, f = {
		...e,
		boxes: [...e.boxes, d],
		swimlanes: {
			...e.swimlanes,
			[`${i.index}`]: i
		},
		previousSwimlaneNumber: r.index,
		previousFrame: n.frame,
		maxR: u
	}, p = j(f.swimlanes);
	p.length > 0 && (p[0].y = 0);
	for (let e = 1; e < p.length; e++) {
		let t = p[e], n = p[e - 1];
		t.y = n.y + n.height + Q.swimlaneGap;
	}
	return f;
}
function N(e, t) {
	return e === 0 && t.sourceFrames.length === 0;
}
function P(e) {
	return e.sourceFrames !== void 0 && e.sourceFrames !== null && e.sourceFrames.length > 0;
}
function F(e, t) {
	if (t != null) return e.find((e) => e.frame.name === t.name);
}
function I(e, t, n) {
	if (!(n < 0)) for (let r = n; r >= 0; r--) {
		let n = e[r];
		if (n.swimlane.index !== t) return n;
	}
}
function L(e, t) {
	let n = t;
	if (se(n.frame) || N(n.index, n.frame)) return [];
	let r = F(e.boxes, n.frame);
	if (r === void 0) throw Error(`Target box not found for frame ${n.frame.name}`);
	let i;
	return i = n.sourceFrame ? F(e.boxes, n.sourceFrame) : I(e.boxes, r.swimlane.index, n.index - 1), i === void 0 ? [] : [{
		$kind: J,
		frame: n.frame,
		index: n.index,
		sourceBox: i,
		targetBox: r
	}];
}
function fe(e, t) {
	let n = t, r = {
		visual: {
			fill: "none",
			stroke: "#000"
		},
		source: {
			x: n.sourceBox.x,
			y: n.sourceBox.y
		},
		target: {
			x: n.targetBox.x,
			y: n.targetBox.y
		},
		sourceBox: n.sourceBox,
		targetBox: n.targetBox
	};
	return {
		...e,
		relations: [...e.relations, r]
	};
}
function R(e, t) {
	let n = _e[t.$kind];
	if (n == null) return [];
	let i = n(e, t);
	return r.debug("decided events", i), i;
}
function z(e, t) {
	let n = t.reduce((e, t) => {
		let n = ve[t.$kind];
		return n == null ? e : n(e, t);
	}, e);
	return r.debug("evolve events", {
		state: e,
		newState: n,
		events: t
	}), n;
}
function B(e, t) {
	return z(e, R(e, t));
}
function V(e, t) {
	return (n) => {
		let r = n.swimlane.y + t.swimlanePadding, i = e.append("g").attr("class", "em-box");
		i.append("rect").attr("x", n.x).attr("y", r).attr("rx", "3").attr("width", n.dimension.width).attr("height", n.dimension.height).attr("stroke", n.visual.stroke).attr("fill", n.visual.fill), i.append("foreignObject").attr("x", n.x + t.boxPadding).attr("y", r + 10).attr("width", n.dimension.width - 2 * t.boxPadding).attr("height", n.dimension.height - 2 * t.boxPadding).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%").append("span").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").html(n.text);
	};
}
function H(e, t) {
	return e > t;
}
function U(e, t, n, i) {
	return (a) => {
		let o = a.sourceBox.swimlane.y + t.swimlanePadding, s = a.targetBox.swimlane.y + t.swimlanePadding, c = H(o, s), l = a.sourceBox.x + a.sourceBox.dimension.width * 2 / 3, u = a.targetBox.x + a.targetBox.dimension.width / 3, d, f;
		r.debug(`rendering relation up=${c} for `, {
			sourceBox: a.sourceBox,
			targetBox: a.targetBox
		}), c ? (d = o, f = s + a.targetBox.dimension.height) : (d = o + a.sourceBox.dimension.height, f = s);
		let p = i.emRelationStroke ?? a.visual.stroke;
		e.append("path").attr("class", "em-relation").attr("fill", a.visual.fill).attr("stroke", p).attr("stroke-width", "1").attr("marker-end", `url(#${n})`).attr("d", `M${l} ${d} L${u} ${f}`);
	};
}
function W(e, t, n, r) {
	return (i) => {
		let a = e.append("g").attr("class", "em-swimlane"), o = r.emSwimlaneBackgroundOdd ?? "rgb(250,250,250)", s = r.emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
		a.append("rect").attr("x", 0).attr("y", i.y).attr("rx", "3").attr("width", t + n.swimlanePadding).attr("height", i.height).attr("fill", o).attr("stroke", s), a.append("text").attr("font-weight", n.swimlaneTextFontWeight).attr("x", 30).attr("y", i.y + 30).text(i.label);
	};
}
var G, K, q, J, Y, X, pe, me, he, Z, Q, ge, _e, ve, $, ye, be, xe;
//#endregion
e((() => {
	de(), ie(), m(), o(), n(), ce(), a(), G = "position frame", K = "frame positioned", q = "position relation", J = "relation positioned", Y = /* @__PURE__ */ t(function(e) {
		r.debug("options str", e);
	}, "setOptions"), X = /* @__PURE__ */ t(function() {
		return {};
	}, "getOptions"), pe = /* @__PURE__ */ t(function() {
		_(), d();
	}, "clear"), t(_, "reset"), me = p.eventmodeling, he = /* @__PURE__ */ t(() => ae({
		...me,
		...f().eventmodeling
	}), "getConfig"), Z = {}, t(v, "getState"), t(y, "setAst"), Q = {
		swimlaneMinHeight: 70,
		swimlanePadding: 15,
		swimlaneGap: 10,
		boxPadding: 10,
		boxOverlap: 90,
		boxDefaultY: 0,
		boxMinWidth: 80,
		boxMaxWidth: 450,
		boxMinHeight: 80,
		boxMaxHeight: 750,
		contentStartX: 250,
		textMaxWidth: 430,
		boxTextFontWeight: "bold",
		boxTextPadding: 10,
		swimlaneTextFontWeight: "bold",
		labelUiAutomation: "UI/Automation",
		labelUiAutomationPrefix: "UI/A: ",
		labelCommandReadModel: "Command/Read Model",
		labelCommandReadModelPrefix: "C/RM: ",
		labelEvents: "Events",
		labelEventsPrefix: "Stream: "
	}, t(b, "getDiagramProps"), ge = {
		boxes: [],
		swimlanes: {},
		relations: [],
		maxR: 0,
		sortedSwimlanesArray: []
	}, t(x, "extractNamespace"), t(S, "extractName"), t(C, "findSwimlaneByNamespace"), t(w, "findNextAvailableIndex"), t(T, "calculateSwimlaneProps"), t(E, "calculateEntityVisualProps"), t(D, "calculateTextProps"), t(O, "decidePositionFrame"), t(k, "calculateX"), t(A, "calculateMaxRight"), t(j, "sortedSwimlanesArray"), t(M, "evolveFramePositioned"), t(N, "isFirstFrame"), t(P, "hasSourceFrame"), t(F, "findBoxByFrame"), t(I, "findBoxByLineIndex"), t(L, "decidePositionRelation"), t(fe, "evolveRelationPositioned"), _e = {
		[G]: O,
		[q]: L
	}, ve = {
		[K]: M,
		[J]: fe
	}, t(R, "decide"), t(z, "evolve"), t(B, "dispatch"), $ = {
		getConfig: he,
		setOptions: Y,
		getOptions: X,
		clear: pe,
		setAccTitle: l,
		getAccTitle: re,
		getAccDescription: ee,
		setAccDescription: c,
		setDiagramTitle: h,
		getDiagramTitle: te,
		setAst: y,
		getDiagramProps: b,
		getState: v
	}, ye = { parse: /* @__PURE__ */ t(async (e) => {
		let t = await le("eventmodeling", e);
		r.debug(t), $.setAst(t), ue(t, $);
	}, "parse") }, be = ne()?.eventmodeling, t(V, "renderD3Box"), t(H, "dirUpwards"), t(U, "renderD3Relation"), t(W, "renderD3Swimlane"), xe = {
		parser: ye,
		db: $,
		renderer: { draw: /* @__PURE__ */ t(function(e, t, n, a) {
			if (r.debug("in eventmodeling renderer", e + "\n", "id:", t, n), !be) throw Error("EventModeling config not found");
			let o = a.db, { themeVariables: s, eventmodeling: c } = ne(), l = i(`[id="${t}"]`), d = o.getDiagramProps(), f = o.getState(), p = `em-arrowhead-${t}`, m = s.emArrowhead ?? "#000000";
			f.sortedSwimlanesArray.forEach(W(l, f.maxR, d, s)), f.boxes.forEach(V(l, d)), f.relations.forEach(U(l, d, p, s)), l.append("defs").append("marker").attr("id", p).attr("markerWidth", "10").attr("markerHeight", "7").attr("refX", "10").attr("refY", "3.5").attr("orient", "auto").append("polygon").attr("points", "0 0, 10 3.5, 0 7").attr("fill", m), u(void 0, l, c?.padding ?? 30, c?.useMaxWidth);
		}, "draw") },
		styles: /* @__PURE__ */ t((e) => "", "getStyles")
	};
}))();
export { xe as diagram };
