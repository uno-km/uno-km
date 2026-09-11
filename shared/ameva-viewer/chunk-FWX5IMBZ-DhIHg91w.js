import { m as e } from "./src-CX9flxD9.js";
import { n as t } from "./chunk-Y2CYZVJY-BAad7w_K.js";
import { b as n, s as r } from "./chunk-WYO6CB5R-D4Y7bRLK.js";
import { d as i } from "./chunk-ICXQ74PX-B_iSelmr.js";
import { a, i as o, s } from "./chunk-ZGVPDNZ5-dDxPS7mM.js";
import { a as c, i as l, o as u, r as d } from "./chunk-52WLFC77-BnjzDcYA.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-FWX5IMBZ.mjs
var f = {
	common: r,
	getConfig: n,
	insertCluster: o,
	insertEdge: d,
	insertEdgeLabel: l,
	insertMarkers: c,
	insertNode: a,
	interpolateToCurve: i,
	labelHelper: s,
	log: e,
	positionEdgeLabel: u
}, p = {}, m = /* @__PURE__ */ t((e) => {
	for (let t of e) p[t.name] = t;
}, "registerLayoutLoaders");
(/* @__PURE__ */ t(() => {
	m([
		{
			name: "dagre",
			loader: /* @__PURE__ */ t(async () => await import("./dagre-VKFMJZFB-Dwy7b3p0.js"), "loader")
		},
		{
			name: "swimlane",
			loader: /* @__PURE__ */ t(async () => await import("./swimlanes-5IMT3BWC-ZTsIGhIa.js"), "loader")
		},
		{
			name: "cose-bilkent",
			loader: /* @__PURE__ */ t(async () => await import("./cose-bilkent-JH36ORCC-Djj0wVV3.js"), "loader")
		}
	]);
}, "registerDefaultLayoutLoaders"))();
var h = /* @__PURE__ */ t(async (e, t, n) => {
	if (!(e.layoutAlgorithm in p)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
	if (e.diagramId) for (let t of e.nodes) {
		let n = t.domId || t.id;
		t.domId = `${e.diagramId}-${n}`;
	}
	let r = p[e.layoutAlgorithm], i = await r.loader(), { theme: a, themeVariables: o } = e.config, { useGradient: s, gradientStart: c, gradientStop: l } = o, u = t.attr("id");
	if (t.append("defs").append("filter").attr("id", `${u}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${a?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${u}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${a?.includes("dark") ? "#FFFFFF" : "#000000"}`), s) {
		let e = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		e.append("svg:stop").attr("offset", "0%").attr("stop-color", c).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
	}
	return i.render(e, t, f, { algorithm: r.algorithm }, n);
}, "render"), g = /* @__PURE__ */ t((t = "", { fallback: n = "dagre" } = {}) => {
	if (t in p) return t;
	if (n in p) return e.warn(`Layout algorithm ${t} is not registered. Using ${n} as fallback.`), n;
	throw Error(`Both layout algorithms ${t} and ${n} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
//#endregion
export { m as n, h as r, g as t };
