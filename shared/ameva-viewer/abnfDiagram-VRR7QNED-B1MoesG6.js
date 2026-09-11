import { m as e } from "./src-CX9flxD9.js";
import { n as t } from "./chunk-Y2CYZVJY-BAad7w_K.js";
import "./chunk-WYO6CB5R-D4Y7bRLK.js";
import "./chunk-VAUOI2AC-oPk67TL6.js";
import { m as n, t as r } from "./mermaid-parser.core-DN_nTWfN.js";
import { n as i, r as a, t as o } from "./chunk-MOJQB5TN-Bkk1rd6i.js";
import { t as s } from "./chunk-JWPE2WC7-BGVSGRTC.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/abnfDiagram-VRR7QNED.mjs
var c = n().RailroadAbnf.parser.LangiumParser, l = /* @__PURE__ */ t((e) => {
	let t = e.alternatives.map(u);
	return t.length === 1 ? t[0] : {
		type: "choice",
		alternatives: t
	};
}, "transformAlternation"), u = /* @__PURE__ */ t((e) => {
	let t = e.elements.map(f);
	return t.length === 1 ? t[0] : {
		type: "sequence",
		elements: t
	};
}, "transformConcatenation"), d = /* @__PURE__ */ t((e) => {
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
}, "parseRepeat"), f = /* @__PURE__ */ t((e) => {
	let t = p(e.primary);
	if (!e.repeat) return t;
	let { min: n, max: r } = d(e.repeat);
	return n === 0 && r === 1 ? {
		type: "optional",
		element: t
	} : {
		type: "repetition",
		element: t,
		min: n,
		max: r
	};
}, "transformElement"), p = /* @__PURE__ */ t((e) => {
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
		case "AbnfGroup": return l(e.element);
		case "AbnfOptionalGroup": return {
			type: "optional",
			element: l(e.element)
		};
		default: throw Error(`Unsupported ABNF primary node: ${e.$type}`);
	}
}, "transformPrimary"), m = /* @__PURE__ */ t((e) => ({
	name: e.name,
	definition: l(e.definition)
}), "transformRule"), h = /* @__PURE__ */ t((e) => {
	s(e, o), e.title && o.setTitle(e.title), e.rules.map((e) => o.addRule(m(e)));
}, "populateDb"), g = {
	parser: {
		parse: /* @__PURE__ */ t((t) => {
			o.clear(), e.debug("[ABNF Parser] Starting Langium parse");
			let n = c.parse(t);
			if (n.lexerErrors.length > 0 || n.parserErrors.length > 0) throw new r(n);
			let i = n.value;
			e.debug("[ABNF Parser] Parsed rules:", i.rules.length), h(i), e.debug("[ABNF Parser] Parse complete");
		}, "parse"),
		parser: { yy: o }
	},
	db: o,
	renderer: a,
	styles: i
};
//#endregion
export { g as diagram };
