import { m as e } from "./src-CX9flxD9.js";
import { n as t } from "./chunk-Y2CYZVJY-BAad7w_K.js";
import "./chunk-WYO6CB5R-D4Y7bRLK.js";
import "./chunk-VAUOI2AC-oPk67TL6.js";
import { g as n, t as r } from "./mermaid-parser.core-DN_nTWfN.js";
import { n as i, r as a, t as o } from "./chunk-MOJQB5TN-Bkk1rd6i.js";
import { t as s } from "./chunk-JWPE2WC7-BGVSGRTC.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/railroadDiagram-RFXS5EU6.mjs
var c = n().Railroad.parser.LangiumParser, l = /* @__PURE__ */ t((e) => {
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
			let t = e.elements.map(l);
			return t.length === 1 ? t[0] : {
				type: "sequence",
				elements: t
			};
		}
		case "RailroadChoiceExpr": {
			let t = e.alternatives.map(l);
			return t.length === 1 ? t[0] : {
				type: "choice",
				alternatives: t
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: l(e.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 1,
			max: Infinity
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: l(e.element),
			min: 0,
			max: Infinity
		};
		default: throw Error(`Unsupported railroad expression: ${e.$type}`);
	}
}, "transformExpression"), u = /* @__PURE__ */ t((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), d = /* @__PURE__ */ t((e) => {
	s(e, o), e.title && o.setTitle(e.title), e.rules.map((e) => o.addRule(u(e)));
}, "populateDb"), f = {
	parser: {
		parse: /* @__PURE__ */ t((t) => {
			o.clear(), e.debug("[Railroad Parser] Starting Langium parse");
			let n = c.parse(t);
			if (n.lexerErrors.length > 0 || n.parserErrors.length > 0) throw new r(n);
			let i = n.value;
			e.debug("[Railroad Parser] Parsed rules:", i.rules.length), d(i), e.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: o }
	},
	db: o,
	renderer: a,
	styles: i
};
//#endregion
export { f as diagram };
