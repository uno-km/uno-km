import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { jt as r, t as i } from "./src-s9Lposmn.js";
import { M as a, j as o } from "./chunk-WYO6CB5R-D-L2LeCO.js";
import { t as s } from "./dist-Bv703TYe.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-32BRIVSS.mjs
var c, l, u, d, f, p, m, h, g, _ = e((() => {
	o(), n(), c = s(), i(), l = /* @__PURE__ */ t((e, t) => {
		let n = e.append("rect");
		if (n.attr("x", t.x), n.attr("y", t.y), n.attr("fill", t.fill), n.attr("stroke", t.stroke), n.attr("width", t.width), n.attr("height", t.height), t.name && n.attr("name", t.name), t.rx && n.attr("rx", t.rx), t.ry && n.attr("ry", t.ry), t.attrs !== void 0) for (let e in t.attrs) n.attr(e, t.attrs[e]);
		return t.class && n.attr("class", t.class), n;
	}, "drawRect"), u = /* @__PURE__ */ t((e, t) => {
		l(e, {
			x: t.startx,
			y: t.starty,
			width: t.stopx - t.startx,
			height: t.stopy - t.starty,
			fill: t.fill,
			stroke: t.stroke,
			class: "rect"
		}).lower();
	}, "drawBackgroundRect"), d = /* @__PURE__ */ t((e, t) => {
		let n = t.text.replace(a, " "), r = e.append("text");
		r.attr("x", t.x), r.attr("y", t.y), r.attr("class", "legend"), r.style("text-anchor", t.anchor), t.class && r.attr("class", t.class);
		let i = r.append("tspan");
		return i.attr("x", t.x + t.textMargin * 2), i.text(n), r;
	}, "drawText"), f = /* @__PURE__ */ t((e, t, n, r) => {
		let i = e.append("image");
		i.attr("x", t), i.attr("y", n);
		let a = (0, c.sanitizeUrl)(r);
		i.attr("xlink:href", a);
	}, "drawImage"), p = /* @__PURE__ */ t((e, t, n, r) => {
		let i = e.append("use");
		i.attr("x", t), i.attr("y", n);
		let a = (0, c.sanitizeUrl)(r);
		i.attr("xlink:href", `#${a}`);
	}, "drawEmbeddedImage"), m = /* @__PURE__ */ t(() => ({
		x: 0,
		y: 0,
		width: 100,
		height: 100,
		fill: "#EDF2AE",
		stroke: "#666",
		anchor: "start",
		rx: 0,
		ry: 0
	}), "getNoteRect"), h = /* @__PURE__ */ t(() => ({
		x: 0,
		y: 0,
		width: 100,
		height: 100,
		"text-anchor": "start",
		style: "#666",
		textMargin: 0,
		rx: 0,
		ry: 0,
		tspan: !0
	}), "getTextObj"), g = /* @__PURE__ */ t(() => {
		let e = r(".mermaidTooltip");
		return e.empty() && (e = r("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100")), e;
	}, "createTooltip");
}));
//#endregion
export { l as a, h as c, f as i, _ as l, u as n, d as o, p as r, m as s, g as t };
