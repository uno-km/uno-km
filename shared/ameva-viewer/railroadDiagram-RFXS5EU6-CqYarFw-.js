import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { j as a } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { t as o } from "./chunk-VAUOI2AC-B75GGl_9.js";
import { C as s, n as c, t as l } from "./mermaid-parser.core-B0WAIwlv.js";
import { i as u, n as d, r as f, t as p } from "./chunk-MOJQB5TN-CxlyOtyo.js";
import { n as m, t as h } from "./chunk-JWPE2WC7-Co6GTr09.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-RFXS5EU6.mjs
var g, _, v, y, b;
//#endregion
e((() => {
	f(), h(), o(), a(), i(), n(), c(), g = s().Railroad.parser.LangiumParser, _ = /* @__PURE__ */ t((e) => {
		switch (e.$type) {
			case "RailroadTerminalExpr": return {
				type: "terminal",
				value: e.value
			};
			case "RailroadNonTerminalExpr": return {
				type: "nonterminal",
				name: e.name
			};
			case "RailroadSpecialExpr": return {
				type: "special",
				text: e.text
			};
			case "RailroadSequenceExpr": {
				let t = e.elements.map(_);
				return t.length === 1 ? t[0] : {
					type: "sequence",
					elements: t
				};
			}
			case "RailroadChoiceExpr": {
				let t = e.alternatives.map(_);
				return t.length === 1 ? t[0] : {
					type: "choice",
					alternatives: t
				};
			}
			case "RailroadOptionalExpr": return {
				type: "optional",
				element: _(e.element)
			};
			case "RailroadOneOrMoreExpr": return {
				type: "repetition",
				element: _(e.element),
				min: 1,
				max: Infinity
			};
			case "RailroadZeroOrMoreExpr": return {
				type: "repetition",
				element: _(e.element),
				min: 0,
				max: Infinity
			};
			default: throw Error(`Unsupported railroad expression: ${e.$type}`);
		}
	}, "transformExpression"), v = /* @__PURE__ */ t((e) => ({
		name: e.name,
		definition: _(e.definition)
	}), "transformRule"), y = /* @__PURE__ */ t((e) => {
		m(e, p), e.title && p.setTitle(e.title), e.rules.map((e) => p.addRule(v(e)));
	}, "populateDb"), b = {
		parser: {
			parse: /* @__PURE__ */ t((e) => {
				p.clear(), r.debug("[Railroad Parser] Starting Langium parse");
				let t = g.parse(e);
				if (t.lexerErrors.length > 0 || t.parserErrors.length > 0) throw new l(t);
				let n = t.value;
				r.debug("[Railroad Parser] Parsed rules:", n.rules.length), y(n), r.debug("[Railroad Parser] Parse complete");
			}, "parse"),
			parser: { yy: p }
		},
		db: p,
		renderer: u,
		styles: d
	};
}))();
export { b as diagram };
