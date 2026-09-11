import { m as e } from "./src-CX9flxD9.js";
import { n as t } from "./chunk-Y2CYZVJY-BAad7w_K.js";
import { c as n } from "./chunk-WYO6CB5R-D4Y7bRLK.js";
import { t as r } from "./chunk-VAUOI2AC-oPk67TL6.js";
import { n as i } from "./mermaid-parser.core-DN_nTWfN.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-FWYZ7A6U.mjs
var a = { parse: /* @__PURE__ */ t(async (t) => {
	let n = await i("info", t);
	e.debug(n);
}, "parse") }, o = { version: "11.16.0" }, s = {
	parser: a,
	db: { getVersion: /* @__PURE__ */ t(() => o.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ t((t, i, a) => {
		e.debug("rendering info diagram\n" + t);
		let o = r(i);
		n(o, 100, 400, !0), o.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${a}`);
	}, "draw") }
};
//#endregion
export { s as diagram };
