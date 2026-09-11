import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { j as a, x as o } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { n as s } from "./chunk-C7G6YPKG-Vq4UjGHW.js";
import { d as c } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { n as l, r as u } from "./chunk-OGEWGWER-DwpZif8m.js";
import { n as d } from "./chunk-HOUHSVGY-D5qeVdAE.js";
import { r as f } from "./chunk-Q4XR5HBZ-c82EqI20.js";
import { a as p, d as m, i as h, l as g, n as _, o as v, t as y, u as b } from "./chunk-ZGVPDNZ5-0MVWO3Ri.js";
import { r as x } from "./chunk-7BUUIJ7U-CS_3sOAb.js";
import { a as S, i as C, o as w, r as T, s as E, t as D } from "./chunk-52WLFC77-Bsl_6cMT.js";
import { n as O, t as k } from "./graphlib-B_4OOiZk.js";
import { a as A, c as j, i as M, n as N, o as P, r as F, s as I, t as L } from "./chunk-RYQCIY6F-CQLYLbuH.js";
import { r as R, t as z } from "./dagre-BaulYavE.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/dagre-VKFMJZFB.mjs
var B, V, H, U, W, G, K, q, J;
//#endregion
e((() => {
	A(), T(), h(), s(), x(), u(), f(), d(), c(), a(), i(), n(), z(), I(), k(), B = /* @__PURE__ */ t((e, t, n) => Math.max(t, Math.min(n, e)), "clamp"), V = /* @__PURE__ */ t((e = "TB") => {
		switch (e) {
			case "BT": return "bottom";
			case "LR": return "right";
			case "RL": return "left";
			default: return "top";
		}
	}, "getDefaultSelfLoopSide"), H = /* @__PURE__ */ t((e) => e === "flowchart" || e === "flowchart-v2" || e === "stateDiagram", "shouldMergeSelfLoopSegments"), U = /* @__PURE__ */ t((e, t, n, r, i) => {
		let a = [], o = /* @__PURE__ */ new Set();
		if (n.forEach(({ start: e, end: t }) => {
			e !== r && o.add(e), t !== r && o.add(t);
		}), o.forEach((t) => {
			let n = e.node(t);
			typeof n?.x == "number" && typeof n?.y == "number" && a.push(n);
		}), a.length === 0 && n.forEach(({ edge: e }) => {
			(e.points ?? []).forEach((e) => {
				typeof e?.x == "number" && typeof e?.y == "number" && a.push(e);
			});
		}), a.length === 0) return V(i);
		let s = a.reduce((e, t) => ({
			x: e.x + t.x / a.length,
			y: e.y + t.y / a.length
		}), {
			x: 0,
			y: 0
		}), c = s.x - t.x, l = s.y - t.y;
		return Math.abs(c) > Math.abs(l) ? c > 0 ? "right" : "left" : Math.abs(l) > 0 ? l > 0 ? "bottom" : "top" : V(i);
	}, "getSelfLoopSide"), W = /* @__PURE__ */ t((e, t = "top", n = 0, r = 0) => {
		let i = e.x, a = e.y - n, o = e.width / 2, s = e.height / 2, c = Math.max(36, Math.min(100, e.width * .8)), l = B(Math.max(r, e.width * .35), 36, c), u = B(Math.min(e.width, e.height) * .45, 24, 48);
		switch (t) {
			case "bottom": {
				let e = a + s;
				return [
					{
						x: i - l / 2,
						y: e
					},
					{
						x: i - l / 2,
						y: e + u
					},
					{
						x: i + l / 2,
						y: e + u
					},
					{
						x: i + l / 2,
						y: e
					}
				];
			}
			case "right": {
				let e = i + o;
				return [
					{
						x: e,
						y: a - l / 2
					},
					{
						x: e + u,
						y: a - l / 2
					},
					{
						x: e + u,
						y: a + l / 2
					},
					{
						x: e,
						y: a + l / 2
					}
				];
			}
			case "left": {
				let e = i - o;
				return [
					{
						x: e,
						y: a - l / 2
					},
					{
						x: e - u,
						y: a - l / 2
					},
					{
						x: e - u,
						y: a + l / 2
					},
					{
						x: e,
						y: a + l / 2
					}
				];
			}
			default: {
				let e = a - s;
				return [
					{
						x: i - l / 2,
						y: e
					},
					{
						x: i - l / 2,
						y: e - u
					},
					{
						x: i + l / 2,
						y: e - u
					},
					{
						x: i + l / 2,
						y: e
					}
				];
			}
		}
	}, "getSelfLoopPoints"), G = /* @__PURE__ */ t((e, t, n = "top", r = 0, i = {}) => {
		let a = e.x, o = e.y - r, s = i.width ?? 0, c = i.height ?? 0;
		switch (n) {
			case "bottom": return {
				x: a,
				y: Math.max(...t.map((e) => e.y)) + c / 2 + 4
			};
			case "right": return {
				x: Math.max(...t.map((e) => e.x)) + s / 2 + 4,
				y: o
			};
			case "left": return {
				x: Math.min(...t.map((e) => e.x)) - s / 2 - 4,
				y: o
			};
			default: return {
				x: a,
				y: Math.min(...t.map((e) => e.y)) - c / 2 - 4
			};
		}
	}, "getSelfLoopLabelPosition"), K = /* @__PURE__ */ t((e, t = 0, { mergeSelfLoops: n = !0 } = {}) => {
		let r = /* @__PURE__ */ new Map(), i = [], a = e.graph()?.rankdir;
		return e.edges().forEach((t) => {
			let a = e.edge(t);
			if (n && a.selfLoop) {
				let e = a.selfLoop.id;
				r.has(e) || r.set(e, []), r.get(e).push({
					edge: a,
					start: t.v,
					end: t.w
				});
			} else i.push({
				edge: a,
				start: t.v,
				end: t.w
			});
		}), r.forEach((n) => {
			if (n.length !== 3) {
				n.forEach((e) => i.push(e));
				return;
			}
			n.sort((e, t) => e.edge.selfLoop.order - t.edge.selfLoop.order);
			let [r, o, s] = n, c = r.edge.originalEdge ?? o.edge.originalEdge ?? s.edge.originalEdge ?? o.edge, l = e.node(c.start);
			if (!l) {
				n.forEach((e) => i.push(e));
				return;
			}
			let u = {
				width: o.edge.width,
				height: o.edge.height
			}, d = U(e, l, n, c.start, a), f = W(l, d, t, u.width ?? 0), p = G(l, f, d, t, u), m = {
				...o.edge,
				...c,
				id: c.id,
				points: f,
				start: c.start,
				end: c.end,
				x: p.x,
				y: p.y,
				width: u.width,
				height: u.height,
				labelStyle: o.edge.labelStyle,
				fromCluster: r.edge.fromCluster ?? o.edge.fromCluster ?? s.edge.fromCluster,
				toCluster: r.edge.toCluster ?? o.edge.toCluster ?? s.edge.toCluster
			};
			delete m.selfLoop, delete m.originalEdge, i.push({
				edge: m,
				start: m.start,
				end: m.end
			});
		}), i;
	}, "getEdgesToRender"), q = /* @__PURE__ */ t(async (e, n, i, a, o, s) => {
		r.warn("Graph in recursive render:XAX", j(n), o);
		let c = n.graph().rankdir;
		r.trace("Dir in recursive render - dir:", c);
		let u = e.insert("g").attr("class", "root");
		n.nodes() ? r.info("Recursive render XXX", n.nodes()) : r.info("No nodes found for", n), n.edges().length > 0 && r.info("Recursive edges", n.edge(n.edges()[0]));
		let d = u.insert("g").attr("class", "clusters"), f = u.insert("g").attr("class", "edgePaths"), h = u.insert("g").attr("class", "edgeLabels"), _ = u.insert("g").attr("class", "nodes"), y = H(i);
		await Promise.all(n.nodes().map(async function(e) {
			let t = n.node(e);
			if (o !== void 0) {
				let t = JSON.parse(JSON.stringify(o.clusterData));
				r.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", t.height, "\nParent cluster", o.height), n.setNode(o.id, t), n.parent(e) || (r.trace("Setting parent", e, o.id), n.setParent(e, o.id, t));
			}
			if (r.info("(Insert) Node XXX" + e + ": " + JSON.stringify(n.node(e))), t?.clusterNode) {
				r.info("Cluster identified XBX", e, t.width, n.node(e));
				let { ranksep: o, nodesep: c } = n.graph();
				t.graph.setGraph({
					...t.graph.graph(),
					ranksep: o + 25,
					nodesep: c
				});
				let l = await q(_, t.graph, i, a, n.node(e), s), u = l.elem;
				m(t, u), t.diff = l.diff || 0, r.info("New compound node after recursive render XAX", e, "width", t.width, "height", t.height), b(u, t);
			} else n.children(e).length > 0 ? (r.trace("Cluster - the non recursive path XBX", e, t.id, t, t.width, "Graph:", n), r.trace(M(t.id, n)), F.set(t.id, {
				id: M(t.id, n),
				node: t
			})) : (r.trace("Node - the non recursive path XAX", e, _, n.node(e), c), await v(_, n.node(e), {
				config: s,
				dir: c
			}));
		})), await (/* @__PURE__ */ t(async () => {
			let e = n.edges().map(async function(e) {
				let t = n.edge(e.v, e.w, e.name);
				if (r.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e)), r.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(n.edge(e))), r.info("Fix", F, "ids:", e.v, e.w, "Translating: ", F.get(e.v), F.get(e.w)), y && t.selfLoop) {
					if (t.selfLoop.order !== 1) return;
					let e = t.id;
					t.id = t.selfLoop.id, await S(h, t), t.id = e;
					return;
				}
				await S(h, t);
			});
			await Promise.all(e);
		}, "processEdges"))(), r.info("Graph before layout:", JSON.stringify(j(n))), r.info("############################################# XXX"), r.info("###                Layout                 ### XXX"), r.info("############################################# XXX"), R(n), r.info("Graph after layout:", JSON.stringify(j(n)));
		let x = 0, { subGraphTitleTotalMargin: w } = l(s);
		await Promise.all(P(n).map(async function(e) {
			let t = n.node(e);
			if (r.info("Position XBX => " + e + ": (" + t.x, "," + t.y, ") width: ", t.width, " height: ", t.height), t?.clusterNode) t.y += w, r.info("A tainted cluster node XBX1", e, t.id, t.width, t.height, t.x, t.y, n.parent(e)), F.get(t.id).node = t, g(t);
			else if (n.children(e).length > 0) {
				r.info("A pure cluster node XBX1", e, t.id, t.x, t.y, t.width, t.height, n.parent(e)), t.height += w, n.node(t.parentId);
				let i = t?.padding / 2 || 0, a = t?.labelBBox?.height || 0, o = a - i || 0;
				r.debug("OffsetY", o, "labelHeight", a, "halfPadding", i), await p(d, t), F.get(t.id).node = t;
			} else {
				let e = n.node(t.parentId);
				t.y += w / 2, r.info("A regular node XBX1 - using the padding", t.id, "parent", t.parentId, t.width, t.height, t.x, t.y, "offsetY", t.offsetY, "parent", e, e?.offsetY, t), g(t);
			}
		}));
		let T = w / 2;
		return K(n, T, { mergeSelfLoops: y }).forEach(function({ edge: e, start: t, end: o }) {
			r.info("Edge " + t + " -> " + o + ": " + JSON.stringify(e), e), e.points.forEach((e) => e.y += T), E(e, C(f, e, F, i, n.node(t), n.node(o), a));
		}), n.nodes().forEach(function(e) {
			let t = n.node(e);
			r.info(e, t.type, t.diff), t.isGroup && (x = t.diff);
		}), r.warn("Returning from recursive render XAX", u, x), {
			elem: u,
			diff: x
		};
	}, "recursiveRender"), J = /* @__PURE__ */ t(async (e, t) => {
		let n = new O({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: e.direction,
			nodesep: e.config?.nodeSpacing || e.config?.flowchart?.nodeSpacing || e.nodeSpacing,
			ranksep: e.config?.rankSpacing || e.config?.flowchart?.rankSpacing || e.rankSpacing,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		}), i = t.select("g");
		w(i, e.markers, e.type, e.diagramId), _(), D(), y(), N(), e.nodes.forEach((e) => {
			n.setNode(e.id, { ...e }), e.parentId && n.setParent(e.id, e.parentId);
		}), r.debug("Edges:", e.edges), e.edges.forEach((e) => {
			if (e.start === e.end) {
				let t = e.start, r = t + "---" + t + "---1", i = t + "---" + t + "---2", a = n.node(t);
				n.setNode(r, {
					domId: r,
					id: r,
					parentId: a.parentId,
					labelStyle: "",
					label: "",
					padding: 0,
					shape: "labelRect",
					style: "",
					width: 10,
					height: 10
				}), n.setParent(r, a.parentId), n.setNode(i, {
					domId: i,
					id: i,
					parentId: a.parentId,
					labelStyle: "",
					padding: 0,
					shape: "labelRect",
					label: "",
					style: "",
					width: 10,
					height: 10
				}), n.setParent(i, a.parentId);
				let o = structuredClone(e), s = structuredClone(e), c = structuredClone(e), l = structuredClone(e);
				s.originalEdge = o, s.selfLoop = {
					id: o.id,
					order: 0
				}, c.originalEdge = o, c.selfLoop = {
					id: o.id,
					order: 1
				}, l.originalEdge = o, l.selfLoop = {
					id: o.id,
					order: 2
				}, s.label = "", s.arrowTypeEnd = "none", s.endLabelLeft = "", s.endLabelRight = "", s.startLabelLeft = "", s.id = t + "-cyclic-special-1", c.startLabelRight = "", c.startLabelLeft = "", c.endLabelLeft = "", c.endLabelRight = "", c.arrowTypeStart = "none", c.arrowTypeEnd = "none", c.id = t + "-cyclic-special-mid", l.label = "", l.startLabelRight = "", l.startLabelLeft = "", l.arrowTypeStart = "none", a.isGroup && (s.fromCluster = t, l.toCluster = t), l.id = t + "-cyclic-special-2", l.arrowTypeStart = "none", n.setEdge(t, r, s, t + "-cyclic-special-0"), n.setEdge(r, i, c, t + "-cyclic-special-1"), n.setEdge(i, t, l, t + "-cyclic-special-2");
			} else n.setEdge(e.start, e.end, { ...e }, e.id);
		}), r.warn("Graph at first:", JSON.stringify(j(n))), L(n), r.warn("Graph after XAX:", JSON.stringify(j(n)));
		let a = o();
		await q(i, n, e.type, e.diagramId, void 0, a);
	}, "render");
}))();
export { K as getEdgesToRender, J as render };
