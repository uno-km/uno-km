import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { c as a, j as o } from "./chunk-WYO6CB5R-WuT6p4uA.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-VR4S4FIN.mjs
var s, c, l, u = e((() => {
	o(), i(), n(), s = /* @__PURE__ */ t((e, t, n, i) => {
		e.attr("class", n);
		let { width: o, height: s, x: u, y: d } = c(e, t);
		a(e, s, o, i);
		let f = l(u, d, o, s, t);
		e.attr("viewBox", f), r.debug(`viewBox configured: ${f} with padding: ${t}`);
	}, "setupViewPortForSVG"), c = /* @__PURE__ */ t((e, t) => {
		let n = e.node()?.getBBox() || {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		return {
			width: n.width + t * 2,
			height: n.height + t * 2,
			x: n.x,
			y: n.y
		};
	}, "calculateDimensionsWithPadding"), l = /* @__PURE__ */ t((e, t, n, r, i) => `${e - i} ${t - i} ${n} ${r}`, "createViewBox");
}));
//#endregion
export { s as n, u as t };
