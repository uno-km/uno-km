import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, zt as i } from "./src-s9Lposmn.js";
import { j as a } from "./chunk-WYO6CB5R-D-L2LeCO.js";
import { t as o } from "./chunk-VAUOI2AC-D6J5FlFc.js";
import { _ as s, n as c, t as l } from "./mermaid-parser.core-B0WAIwlv.js";
import { i as u, n as d, r as f, t as p } from "./chunk-MOJQB5TN-X7Z9EIra.js";
import { n as m, t as h } from "./chunk-JWPE2WC7-Co6GTr09.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/ebnfDiagram-CCIWWBDH.mjs
var g, _, v, y, b, x, S, C, w;
//#endregion
e((() => {
	f(), h(), o(), a(), i(), n(), c(), g = s().RailroadEbnf.parser.LangiumParser, _ = /* @__PURE__ */ t((e) => {
		let t = e.alternatives.map(v);
		return t.length === 1 ? t[0] : {
			type: "choice",
			alternatives: t
		};
	}, "transformChoice"), v = /* @__PURE__ */ t((e) => {
		let t = e.elements.map(x);
		return t.length === 1 ? t[0] : {
			type: "sequence",
			elements: t
		};
	}, "transformSequence"), y = /* @__PURE__ */ t((e) => {
		switch (e.$type) {
			case "EbnfTerminal": return {
				type: "terminal",
				value: e.value
			};
			case "EbnfNonTerminal": return {
				type: "nonterminal",
				name: e.name
			};
			case "EbnfSpecial": return {
				type: "special",
				text: e.text
			};
			case "EbnfGroup": return _(e.element);
			case "EbnfOptional": return {
				type: "optional",
				element: _(e.element)
			};
			case "EbnfRepetition": return {
				type: "repetition",
				element: _(e.element),
				min: 0,
				max: Infinity
			};
			default: throw Error(`Unsupported EBNF primary node: ${e.$type}`);
		}
	}, "transformPrimary"), b = /* @__PURE__ */ t((e, t) => {
		switch (t.$type) {
			case "EbnfOptionalPostfix": return {
				type: "optional",
				element: e
			};
			case "EbnfZeroOrMorePostfix": return {
				type: "repetition",
				element: e,
				min: 0,
				max: Infinity
			};
			case "EbnfOneOrMorePostfix": return {
				type: "repetition",
				element: e,
				min: 1,
				max: Infinity
			};
			case "EbnfExceptionPostfix": return {
				type: "sequence",
				elements: [
					e,
					{
						type: "terminal",
						value: "-"
					},
					y(t.except)
				]
			};
			default: throw Error(`Unsupported EBNF postfix node: ${t.$type}`);
		}
	}, "transformPostfix"), x = /* @__PURE__ */ t((e) => e.postfixes.reduce((e, t) => b(e, t), y(e.base)), "transformTerm"), S = /* @__PURE__ */ t((e) => ({
		name: e.name,
		definition: _(e.definition)
	}), "transformRule"), C = /* @__PURE__ */ t((e) => {
		m(e, p), e.title && p.setTitle(e.title), e.rules.map((e) => p.addRule(S(e)));
	}, "populateDb"), w = {
		parser: {
			parse: /* @__PURE__ */ t((e) => {
				p.clear(), r.debug("[EBNF Parser] Starting Langium parse");
				let t = g.parse(e);
				if (t.lexerErrors.length > 0 || t.parserErrors.length > 0) throw new l(t);
				let n = t.value;
				r.debug("[EBNF Parser] Parsed rules:", n.rules.length), C(n), r.debug("[EBNF Parser] Parse complete");
			}, "parse"),
			parser: { yy: p }
		},
		db: p,
		renderer: u,
		styles: d
	};
}))();
export { w as diagram };
