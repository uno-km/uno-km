import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { b as a, j as o, s } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { d as c, f as l } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { a as u, c as d, i as f, o as p } from "./chunk-ZGVPDNZ5-0MVWO3Ri.js";
import { a as m, i as h, o as g, r as _, s as v } from "./chunk-52WLFC77-Bsl_6cMT.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-FWX5IMBZ.mjs
var y, b, x, S, C, w = e((() => {
	_(), f(), c(), o(), i(), n(), y = {
		common: s,
		getConfig: a,
		insertCluster: u,
		insertEdge: h,
		insertEdgeLabel: m,
		insertMarkers: g,
		insertNode: p,
		interpolateToCurve: l,
		labelHelper: d,
		log: r,
		positionEdgeLabel: v
	}, b = {}, x = /* @__PURE__ */ t((e) => {
		for (let t of e) b[t.name] = t;
	}, "registerLayoutLoaders"), (/* @__PURE__ */ t(() => {
		x([
			{
				name: "dagre",
				loader: /* @__PURE__ */ t(async () => await import("./dagre-VKFMJZFB-Dag186ud.js"), "loader")
			},
			{
				name: "swimlane",
				loader: /* @__PURE__ */ t(async () => await import("./swimlanes-5IMT3BWC-CH6x6365.js"), "loader")
			},
			{
				name: "cose-bilkent",
				loader: /* @__PURE__ */ t(async () => await import("./cose-bilkent-JH36ORCC-e3PAM4EL.js"), "loader")
			}
		]);
	}, "registerDefaultLayoutLoaders"))(), S = /* @__PURE__ */ t(async (e, t, n) => {
		if (!(e.layoutAlgorithm in b)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
		if (e.diagramId) for (let t of e.nodes) {
			let n = t.domId || t.id;
			t.domId = `${e.diagramId}-${n}`;
		}
		let r = b[e.layoutAlgorithm], i = await r.loader(), { theme: a, themeVariables: o } = e.config, { useGradient: s, gradientStart: c, gradientStop: l } = o, u = t.attr("id");
		if (t.append("defs").append("filter").attr("id", `${u}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${a?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${u}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${a?.includes("dark") ? "#FFFFFF" : "#000000"}`), s) {
			let e = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
			e.append("svg:stop").attr("offset", "0%").attr("stop-color", c).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
		}
		return i.render(e, t, y, { algorithm: r.algorithm }, n);
	}, "render"), C = /* @__PURE__ */ t((e = "", { fallback: t = "dagre" } = {}) => {
		if (e in b) return e;
		if (t in b) return r.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
		throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
	}, "getRegisteredLayoutAlgorithm");
}));
//#endregion
export { S as i, w as n, x as r, C as t };
