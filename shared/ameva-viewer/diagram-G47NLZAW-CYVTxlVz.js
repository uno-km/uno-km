import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, Ct as i, Et as a, jt as o, t as s, wt as c, xt as l, zt as u } from "./src-s9Lposmn.js";
import { D as d, U as f, W as p, a as m, b as h, c as g, f as _, j as v, q as y, v as b, w as x, y as S } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { n as C, t as w } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { a as T, n as E, r as D } from "./chunk-C7G6YPKG-Vq4UjGHW.js";
import { d as O, i as k } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { n as A, r as j } from "./mermaid-parser.core-B0WAIwlv.js";
import { n as M, t as N } from "./chunk-JWPE2WC7-Co6GTr09.js";
import { n as P, t as F } from "./chunk-VR4S4FIN-C1AX5NVG.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/diagram-G47NLZAW.mjs
function I(e) {
	if (!e.length) return [];
	let t = [], n = [];
	return e.forEach((e) => {
		let r = {
			name: e.name,
			children: e.type === "Leaf" ? void 0 : []
		};
		for (r.classSelector = e?.classSelector, e?.cssCompiledStyles && (r.cssCompiledStyles = e.cssCompiledStyles), e.type === "Leaf" && e.value !== void 0 && (r.value = e.value); n.length > 0 && n[n.length - 1].level >= e.level;) n.pop();
		if (n.length === 0) t.push(r);
		else {
			let e = n[n.length - 1].node;
			e.children ? e.children.push(r) : e.children = [r];
		}
		e.type !== "Leaf" && n.push({
			node: r,
			level: e.level
		});
	}), t;
}
var L, R, z, B, V, H, U, W, G, K;
//#endregion
e((() => {
	N(), w(), F(), E(), O(), v(), u(), n(), A(), s(), L = class {
		constructor() {
			this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = p, this.getAccTitle = S, this.setDiagramTitle = y, this.getDiagramTitle = x, this.getAccDescription = b, this.setAccDescription = f;
		}
		static {
			t(this, "TreeMapDB");
		}
		getNodes() {
			return this.nodes;
		}
		getConfig() {
			let e = _, t = h();
			return k({
				...e.treemap,
				...t.treemap ?? {}
			});
		}
		addNode(e, t) {
			this.nodes.push(e), this.levels.set(e, t), t === 0 && (this.outerNodes.push(e), this.root ??= e);
		}
		getRoot() {
			return {
				name: "",
				children: this.outerNodes
			};
		}
		addClass(e, t) {
			let n = this.classes.get(e) ?? {
				id: e,
				styles: [],
				textStyles: []
			}, r = t.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
			r && r.forEach((e) => {
				D(e) && (n?.textStyles ? n.textStyles.push(e) : n.textStyles = [e]), n?.styles ? n.styles.push(e) : n.styles = [e];
			}), this.classes.set(e, n);
		}
		getClasses() {
			return this.classes;
		}
		getStylesForClass(e) {
			return this.classes.get(e)?.styles ?? [];
		}
		clear() {
			m(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
		}
	}, t(I, "buildHierarchy"), R = /* @__PURE__ */ t((e, n) => {
		M(e, n);
		let r = [];
		for (let t of e.TreemapRows ?? []) t.$type === "ClassDefStatement" && n.addClass(t.className ?? "", t.styleText ?? "");
		for (let t of e.TreemapRows ?? []) {
			let e = t.item;
			if (!e) continue;
			let i = t.indent ? parseInt(t.indent) : 0, a = z(e), o = e.classSelector ? n.getStylesForClass(e.classSelector) : [], s = o.length > 0 ? o : void 0, c = {
				level: i,
				name: a,
				type: e.$type,
				value: e.value,
				classSelector: e.classSelector,
				cssCompiledStyles: s
			};
			r.push(c);
		}
		let i = I(r), a = /* @__PURE__ */ t((e, t) => {
			for (let r of e) n.addNode(r, t), r.children && r.children.length > 0 && a(r.children, t + 1);
		}, "addNodesRecursively");
		a(i, 0);
	}, "populate"), z = /* @__PURE__ */ t((e) => e.name ? String(e.name) : "", "getItemName"), B = {
		parser: { yy: void 0 },
		parse: /* @__PURE__ */ t(async (e) => {
			try {
				let t = await j("treemap", e);
				r.debug("Treemap AST:", t);
				let n = B.parser?.yy;
				if (!(n instanceof L)) throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
				R(t, n);
			} catch (e) {
				throw r.error("Error parsing treemap:", e), e;
			}
		}, "parse")
	}, V = 10, H = 10, U = 25, W = {
		draw: /* @__PURE__ */ t((e, n, s, u) => {
			let d = u.db, f = d.getConfig(), p = f.padding ?? V, m = d.getDiagramTitle(), _ = d.getRoot(), { themeVariables: v } = h();
			if (!_) return;
			let y = m ? 30 : 0, b = C(n), x = f.nodeWidth ? f.nodeWidth * H : 960, S = f.nodeHeight ? f.nodeHeight * H : 500, w = x, E = S + y;
			b.attr("viewBox", `0 0 ${w} ${E}`), g(b, E, w, f.useMaxWidth);
			let D;
			try {
				let e = f.valueFormat || ",";
				if (e === "$0,0") D = /* @__PURE__ */ t((e) => "$" + a(",")(e), "valueFormat");
				else if (e.startsWith("$") && e.includes(",")) {
					let n = /\.\d+/.exec(e), r = n ? n[0] : "";
					D = /* @__PURE__ */ t((e) => "$" + a("," + r)(e), "valueFormat");
				} else if (e.startsWith("$")) {
					let n = e.substring(1);
					D = /* @__PURE__ */ t((e) => "$" + a(n || "")(e), "valueFormat");
				} else D = a(e);
			} catch (e) {
				r.error("Error creating format function:", e), D = a(",");
			}
			let O = l().range([
				"transparent",
				v.cScale0,
				v.cScale1,
				v.cScale2,
				v.cScale3,
				v.cScale4,
				v.cScale5,
				v.cScale6,
				v.cScale7,
				v.cScale8,
				v.cScale9,
				v.cScale10,
				v.cScale11
			]), k = l().range([
				"transparent",
				v.cScalePeer0,
				v.cScalePeer1,
				v.cScalePeer2,
				v.cScalePeer3,
				v.cScalePeer4,
				v.cScalePeer5,
				v.cScalePeer6,
				v.cScalePeer7,
				v.cScalePeer8,
				v.cScalePeer9,
				v.cScalePeer10,
				v.cScalePeer11
			]), A = l().range([
				v.cScaleLabel0,
				v.cScaleLabel1,
				v.cScaleLabel2,
				v.cScaleLabel3,
				v.cScaleLabel4,
				v.cScaleLabel5,
				v.cScaleLabel6,
				v.cScaleLabel7,
				v.cScaleLabel8,
				v.cScaleLabel9,
				v.cScaleLabel10,
				v.cScaleLabel11
			]);
			m && b.append("text").attr("x", w / 2).attr("y", y / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(m);
			let j = b.append("g").attr("transform", `translate(0, ${y})`).attr("class", "treemapContainer"), M = c(_).sum((e) => e.value ?? 0).sort((e, t) => (t.value ?? 0) - (e.value ?? 0)), N = i().size([x, S]).paddingTop((e) => e.children && e.children.length > 0 ? U + H : 0).paddingInner(p).paddingLeft((e) => e.children && e.children.length > 0 ? H : 0).paddingRight((e) => e.children && e.children.length > 0 ? H : 0).paddingBottom((e) => e.children && e.children.length > 0 ? H : 0).round(!0)(M), F = N.descendants().filter((e) => e.children && e.children.length > 0), I = j.selectAll(".treemapSection").data(F).enter().append("g").attr("class", "treemapSection").attr("transform", (e) => `translate(${e.x0},${e.y0})`);
			I.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", U).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (e) => e.depth === 0 ? "display: none;" : ""), I.append("clipPath").attr("id", (e, t) => `clip-section-${n}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 12)).attr("height", U), I.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", (e, t) => `treemapSection section${t}`).attr("fill", (e) => O(e.data.name)).attr("fill-opacity", .6).attr("stroke", (e) => k(e.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (e) => {
				if (e.depth === 0) return "display: none;";
				let t = T({ cssCompiledStyles: e.data.cssCompiledStyles });
				return t.nodeStyles + ";" + t.borderStyles.join(";");
			}), I.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", U / 2).attr("dominant-baseline", "middle").text((e) => e.depth === 0 ? "" : e.data.name).attr("font-weight", "bold").attr("clip-path", (e, t) => `url(#clip-section-${n}-${t})`).attr("style", (e) => e.depth === 0 ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + A(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + T({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).each(function(e) {
				if (e.depth === 0) return;
				let t = o(this), n = e.data.name;
				t.text(n);
				let r = e.x1 - e.x0, i;
				i = f.showValues !== !1 && e.value ? r - 10 - 30 - 10 - 6 : r - 6 - 6;
				let a = Math.max(15, i), s = t.node();
				if (s.getComputedTextLength() > a) {
					let e = n;
					for (; e.length > 0;) {
						if (e = n.substring(0, e.length - 1), e.length === 0) {
							t.text("..."), s.getComputedTextLength() > a && t.text("");
							break;
						}
						if (t.text(e + "..."), s.getComputedTextLength() <= a) break;
					}
				}
			}), f.showValues !== !1 && I.append("text").attr("class", "treemapSectionValue").attr("x", (e) => e.x1 - e.x0 - 10).attr("y", U / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((e) => e.value ? D(e.value) : "").attr("font-style", "italic").attr("style", (e) => e.depth === 0 ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + A(e.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + T({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:"));
			let L = N.leaves(), R = L.length > 20, z = R ? 16 : 38, B = R ? 14 : 28, W = R ? 4 : 8, G = R ? 4 : 6, K = R ? 2 : 4, q = R ? 8 : 10, J = R ? 1 : 2, Y = j.selectAll(".treemapLeafGroup").data(L).enter().append("g").attr("class", (e, t) => `treemapNode treemapLeafGroup leaf${t}${e.data.classSelector ? ` ${e.data.classSelector}` : ""}x`).attr("transform", (e) => `translate(${e.x0},${e.y0})`);
			Y.append("rect").attr("width", (e) => e.x1 - e.x0).attr("height", (e) => e.y1 - e.y0).attr("class", "treemapLeaf").attr("fill", (e) => e.parent ? O(e.parent.data.name) : O(e.data.name)).attr("style", (e) => T({ cssCompiledStyles: e.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (e) => e.parent ? O(e.parent.data.name) : O(e.data.name)).attr("stroke-width", 3), Y.append("clipPath").attr("id", (e, t) => `clip-${n}-${t}`).append("rect").attr("width", (e) => Math.max(0, e.x1 - e.x0 - 4)).attr("height", (e) => Math.max(0, e.y1 - e.y0 - 4)), Y.append("text").attr("class", "treemapLabel").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", (e) => (e.y1 - e.y0) / 2).attr("style", (e) => `text-anchor: middle; dominant-baseline: middle; font-size: ${z}px;fill:` + A(e.data.name) + ";" + T({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, t) => `url(#clip-${n}-${t})`).text((e) => e.data.name).each(function(e) {
				let t = o(this), n = e.x1 - e.x0, r = e.y1 - e.y0, i = t.node(), a = n - 2 * K, s = r - 2 * K;
				if (a < q || s < q) {
					t.style("display", "none");
					return;
				}
				let c = parseInt(t.style("font-size"), 10), l = .6;
				for (; i.getComputedTextLength() > a && c > W;) c--, t.style("font-size", `${c}px`);
				let u = Math.max(G, Math.min(B, Math.round(c * l))), d = c + J + u;
				for (; d > s && c > W && (c--, u = Math.max(G, Math.min(B, Math.round(c * l))), !(u < G && c === W));) t.style("font-size", `${c}px`), d = c + J + u;
				t.style("font-size", `${c}px`), R ? (c < W || s < W) && t.style("display", "none") : (i.getComputedTextLength() > a || c < W || s < c) && t.style("display", "none");
			}), f.showValues !== !1 && Y.append("text").attr("class", "treemapValue").attr("x", (e) => (e.x1 - e.x0) / 2).attr("y", function(e) {
				return (e.y1 - e.y0) / 2;
			}).attr("style", (e) => `text-anchor: middle; dominant-baseline: hanging; font-size: ${B}px;fill:` + A(e.data.name) + ";" + T({ cssCompiledStyles: e.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (e, t) => `url(#clip-${n}-${t})`).text((e) => e.value ? D(e.value) : "").each(function(e) {
				let t = o(this), n = this.parentNode;
				if (!n) {
					t.style("display", "none");
					return;
				}
				let r = o(n).select(".treemapLabel");
				if (r.empty() || r.style("display") === "none") {
					t.style("display", "none");
					return;
				}
				let i = parseFloat(r.style("font-size")), a = Math.max(G, Math.min(B, Math.round(i * .6)));
				t.style("font-size", `${a}px`);
				let s = (e.y1 - e.y0) / 2 + i / 2 + J;
				t.attr("y", s);
				let c = e.x1 - e.x0, l = e.y1 - e.y0 - 4, u = c - 2 * K;
				t.node().getComputedTextLength() > u || s + a > l || a < G ? t.style("display", "none") : t.style("display", null);
			}), P(b, f.diagramPadding ?? 8, "flowchart", f?.useMaxWidth || !1);
		}, "draw"),
		getClasses: /* @__PURE__ */ t(function(e, t) {
			return t.db.getClasses();
		}, "getClasses")
	}, G = {
		sectionStrokeColor: "black",
		sectionStrokeWidth: "1",
		sectionFillColor: "#efefef",
		leafStrokeColor: "black",
		leafStrokeWidth: "1",
		leafFillColor: "#efefef",
		labelFontSize: "12px",
		valueFontSize: "10px",
		titleFontSize: "14px"
	}, K = {
		parser: B,
		get db() {
			return new L();
		},
		renderer: W,
		styles: /* @__PURE__ */ t(({ treemap: e } = {}) => {
			let t = k(d(), h().themeVariables), n = k(G, e), r = n.titleColor ?? t.titleColor, i = n.labelColor ?? t.textColor, a = n.valueColor ?? t.textColor;
			return `
  .treemapNode.section {
    stroke: ${n.sectionStrokeColor};
    stroke-width: ${n.sectionStrokeWidth};
    fill: ${n.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${n.leafStrokeColor};
    stroke-width: ${n.leafStrokeWidth};
    fill: ${n.leafFillColor};
  }
  .treemapLabel {
    fill: ${i};
    font-size: ${n.labelFontSize};
  }
  .treemapValue {
    fill: ${a};
    font-size: ${n.valueFontSize};
  }
  .treemapTitle {
    fill: ${r};
    font-size: ${n.titleFontSize};
  }
  `;
		}, "getStyles")
	};
}))();
export { K as diagram };
