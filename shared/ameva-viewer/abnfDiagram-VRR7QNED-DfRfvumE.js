import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { j as a } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { t as o } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { b as s, n as c, t as l } from "./mermaid-parser.core-B0WAIwlv.js";
import { i as u, n as d, r as f, t as p } from "./chunk-MOJQB5TN-CxlyOtyo.js";
import { n as m, t as h } from "./chunk-JWPE2WC7-Co6GTr09.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/abnfDiagram-VRR7QNED.mjs
var g, _, v, y, b, x, S, C, w;
//#endregion
e((() => {
	f(), h(), o(), a(), i(), n(), c(), g = s().RailroadAbnf.parser.LangiumParser, _ = /* @__PURE__ */ t((e) => {
		let t = e.alternatives.map(v);
		return t.length === 1 ? t[0] : {
			type: "choice",
			alternatives: t
		};
	}, "transformAlternation"), v = /* @__PURE__ */ t((e) => {
		let t = e.elements.map(b);
		return t.length === 1 ? t[0] : {
			type: "sequence",
			elements: t
		};
	}, "transformConcatenation"), y = /* @__PURE__ */ t((e) => {
		if (e.includes("*")) {
			let [t, n] = e.split("*");
			return {
				min: t ? parseInt(t, 10) : 0,
				max: n ? parseInt(n, 10) : Infinity
			};
		}
		let t = parseInt(e, 10);
		return {
			min: t,
			max: t
		};
	}, "parseRepeat"), b = /* @__PURE__ */ t((e) => {
		let t = x(e.primary);
		if (!e.repeat) return t;
		let { min: n, max: r } = y(e.repeat);
		return n === 0 && r === 1 ? {
			type: "optional",
			element: t
		} : {
			type: "repetition",
			element: t,
			min: n,
			max: r
		};
	}, "transformElement"), x = /* @__PURE__ */ t((e) => {
		switch (e.$type) {
			case "AbnfStringLiteral": return {
				type: "terminal",
				value: e.value
			};
			case "AbnfNumVal": return {
				type: "terminal",
				value: e.value
			};
			case "AbnfRuleName": return {
				type: "nonterminal",
				name: e.name
			};
			case "AbnfGroup": return _(e.element);
			case "AbnfOptionalGroup": return {
				type: "optional",
				element: _(e.element)
			};
			default: throw Error(`Unsupported ABNF primary node: ${e.$type}`);
		}
	}, "transformPrimary"), S = /* @__PURE__ */ t((e) => ({
		name: e.name,
		definition: _(e.definition)
	}), "transformRule"), C = /* @__PURE__ */ t((e) => {
		m(e, p), e.title && p.setTitle(e.title), e.rules.map((e) => p.addRule(S(e)));
	}, "populateDb"), w = {
		parser: {
			parse: /* @__PURE__ */ t((e) => {
				p.clear(), r.debug("[ABNF Parser] Starting Langium parse");
				let t = g.parse(e);
				if (t.lexerErrors.length > 0 || t.parserErrors.length > 0) throw new l(t);
				let n = t.value;
				r.debug("[ABNF Parser] Parsed rules:", n.rules.length), C(n), r.debug("[ABNF Parser] Parse complete");
			}, "parse"),
			parser: { yy: p }
		},
		db: p,
		renderer: u,
		styles: d
	};
}))();
export { w as diagram };
