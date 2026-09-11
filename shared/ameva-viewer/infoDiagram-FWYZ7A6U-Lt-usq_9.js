import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { c as a, j as o } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { n as s, t as c } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { n as l, r as u } from "./mermaid-parser.core-B0WAIwlv.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-FWYZ7A6U.mjs
var d, f, p;
//#endregion
e((() => {
	c(), o(), i(), n(), l(), d = { parse: /* @__PURE__ */ t(async (e) => {
		let t = await u("info", e);
		r.debug(t);
	}, "parse") }, f = { version: "11.16.0" }, p = {
		parser: d,
		db: { getVersion: /* @__PURE__ */ t(() => f.version, "getVersion") },
		renderer: { draw: /* @__PURE__ */ t((e, t, n) => {
			r.debug("rendering info diagram\n" + e);
			let i = s(t);
			a(i, 100, 400, !0), i.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${n}`);
		}, "draw") }
	};
}))();
export { p as diagram };
