import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { j as a } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { t as o } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { m as s, n as c, t as l } from "./mermaid-parser.core-B0WAIwlv.js";
import { i as u, n as d, r as f, t as p } from "./chunk-MOJQB5TN-CxlyOtyo.js";
import { n as m, t as h } from "./chunk-JWPE2WC7-Co6GTr09.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/pegDiagram-2B236MQR.mjs
var g, _, v, y, b, x, S, C, w, T;
//#endregion
e((() => {
	f(), h(), o(), a(), i(), n(), c(), g = s().RailroadPeg.parser.LangiumParser, _ = /* @__PURE__ */ t((e) => {
		let t = e.alternatives.map(v);
		return t.length === 1 ? t[0] : {
			type: "choice",
			alternatives: t
		};
	}, "transformOrderedChoice"), v = /* @__PURE__ */ t((e) => {
		let t = e.elements.map(y);
		return t.length === 1 ? t[0] : {
			type: "sequence",
			elements: t
		};
	}, "transformSequence"), y = /* @__PURE__ */ t((e) => {
		let t = x(e.suffix);
		return e.operator ? {
			type: "special",
			text: e.operator === "&" ? `&${b(t)}` : `!${b(t)}`
		} : t;
	}, "transformPrefix"), b = /* @__PURE__ */ t((e) => {
		switch (e.type) {
			case "terminal": return `"${e.value}"`;
			case "nonterminal": return e.name;
			case "special": return e.text;
			default: return "(...)";
		}
	}, "nodeToLabel"), x = /* @__PURE__ */ t((e) => {
		let t = S(e.primary);
		if (!e.operator) return t;
		switch (e.operator) {
			case "?": return {
				type: "optional",
				element: t
			};
			case "*": return {
				type: "repetition",
				element: t,
				min: 0,
				max: Infinity
			};
			case "+": return {
				type: "repetition",
				element: t,
				min: 1,
				max: Infinity
			};
			default: throw Error(`Unsupported PEG suffix operator: ${e.operator}`);
		}
	}, "transformSuffix"), S = /* @__PURE__ */ t((e) => {
		switch (e.$type) {
			case "PegLiteral": return {
				type: "terminal",
				value: e.value
			};
			case "PegIdentifier": return {
				type: "nonterminal",
				name: e.name
			};
			case "PegGroup": return _(e.element);
			case "PegAny": return {
				type: "special",
				text: e.dot
			};
			default: throw Error(`Unsupported PEG primary node: ${e.$type}`);
		}
	}, "transformPrimary"), C = /* @__PURE__ */ t((e) => ({
		name: e.name,
		definition: _(e.definition)
	}), "transformRule"), w = /* @__PURE__ */ t((e) => {
		m(e, p), e.title && p.setTitle(e.title), e.rules.map((e) => p.addRule(C(e)));
	}, "populateDb"), T = {
		parser: {
			parse: /* @__PURE__ */ t((e) => {
				p.clear(), r.debug("[PEG Parser] Starting Langium parse");
				let t = g.parse(e);
				if (t.lexerErrors.length > 0 || t.parserErrors.length > 0) throw new l(t);
				let n = t.value;
				r.debug("[PEG Parser] Parsed rules:", n.rules.length), w(n), r.debug("[PEG Parser] Parse complete");
			}, "parse"),
			parser: { yy: p }
		},
		db: p,
		renderer: u,
		styles: d
	};
}))();
export { T as diagram };
