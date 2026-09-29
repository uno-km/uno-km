import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, jt as i, t as a, zt as o } from "./src-s9Lposmn.js";
import { A as s, B as c, I as l, b as u, j as d, s as f } from "./chunk-WYO6CB5R-D-L2LeCO.js";
import { a as p, d as m } from "./chunk-ICXQ74PX-BGRAgywF.js";
import { n as h, r as g, t as ee } from "./chunk-HOUHSVGY-BOK1ktq-.js";
//#region ../../node_modules/mermaid/node_modules/marked/lib/marked.esm.js
function te() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
function ne(e) {
	x = e;
}
function _(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(C.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
}
function v(e, t) {
	if (t) {
		if (C.escapeTest.test(e)) return e.replace(C.escapeReplace, Je);
	} else if (C.escapeTestNoEncode.test(e)) return e.replace(C.escapeReplaceNoEncode, Je);
	return e;
}
function re(e) {
	try {
		e = encodeURI(e).replace(C.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function ie(e, t) {
	let n = e.replace(C.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(C.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
	else for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(C.slashPipe, "|");
	return n;
}
function y(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function ae(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function oe(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function se(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
function b(e, t) {
	return Y.parse(e, t);
}
var x, S, ce, C, le, ue, de, w, fe, T, pe, me, he, E, ge, D, _e, ve, O, k, ye, A, j, M, be, xe, Se, Ce, N, we, P, F, I, Te, Ee, De, Oe, ke, L, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, R, Be, Ve, He, Ue, We, z, Ge, B, Ke, V, H, qe, Je, U, W, G, K, q, J, Ye, Y, Xe = e((() => {
	x = te(), S = { exec: () => null }, ce = (() => {
		try {
			return !0;
		} catch {
			return !1;
		}
	})(), C = {
		codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
		outputLinkReplace: /\\([\[\]])/g,
		indentCodeCompensation: /^(\s+)(?:```)/,
		beginningSpace: /^\s+/,
		endingHash: /#$/,
		startingSpaceChar: /^ /,
		endingSpaceChar: / $/,
		nonSpaceChar: /[^ ]/,
		newLineCharGlobal: /\n/g,
		tabCharGlobal: /\t/g,
		multipleSpaceGlobal: /\s+/g,
		blankLine: /^[ \t]*$/,
		doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
		blockquoteStart: /^ {0,3}>/,
		blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
		blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
		listReplaceTabs: /^\t+/,
		listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
		listIsTask: /^\[[ xX]\] /,
		listReplaceTask: /^\[[ xX]\] +/,
		anyLine: /\n.*\n/,
		hrefBrackets: /^<(.*)>$/,
		tableDelimiter: /[:|]/,
		tableAlignChars: /^\||\| *$/g,
		tableRowBlankLine: /\n[ \t]*$/,
		tableAlignRight: /^ *-+: *$/,
		tableAlignCenter: /^ *:-+: *$/,
		tableAlignLeft: /^ *:-+ *$/,
		startATag: /^<a /i,
		endATag: /^<\/a>/i,
		startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
		endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
		startAngleBracket: /^</,
		endAngleBracket: />$/,
		pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
		unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
		escapeTest: /[&<>"']/,
		escapeReplace: /[&<>"']/g,
		escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
		escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
		unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
		caret: /(^|[^\[])\^/g,
		percentDecode: /%25/g,
		findPipe: /\|/g,
		splitPipe: / \|/,
		slashPipe: /\\\|/g,
		carriageReturn: /\r\n|\r/g,
		spaceLine: /^ +$/gm,
		notSpaceStart: /^\S*/,
		endingNewline: /\n$/,
		listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
		nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
		hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
		fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
		headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
		htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
	}, le = /^(?:[ \t]*(?:\n|$))+/, ue = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, de = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, w = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, fe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, T = /(?:[*+-]|\d{1,9}[.)])/, pe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, me = _(pe).replace(/bull/g, T).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), he = _(pe).replace(/bull/g, T).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), E = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ge = /^[^\n]+/, D = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, _e = _(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", D).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ve = _(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, T).getRegex(), O = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", k = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, ye = _("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", k).replace("tag", O).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), A = _(E).replace("hr", w).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O).getRegex(), j = {
		blockquote: _(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", A).getRegex(),
		code: ue,
		def: _e,
		fences: de,
		heading: fe,
		hr: w,
		html: ye,
		lheading: me,
		list: ve,
		newline: le,
		paragraph: A,
		table: S,
		text: ge
	}, M = _("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", w).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O).getRegex(), be = {
		...j,
		lheading: he,
		table: M,
		paragraph: _(E).replace("hr", w).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", M).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", O).getRegex()
	}, xe = {
		...j,
		html: _("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", k).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: S,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: _(E).replace("hr", w).replace("heading", " *#{1,6} *[^\n]").replace("lheading", me).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
	}, Se = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ce = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, N = /^( {2,}|\\)\n(?!\s*$)/, we = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, P = /[\p{P}\p{S}]/u, F = /[\s\p{P}\p{S}]/u, I = /[^\s\p{P}\p{S}]/u, Te = _(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, F).getRegex(), Ee = /(?!~)[\p{P}\p{S}]/u, De = /(?!~)[\s\p{P}\p{S}]/u, Oe = /(?:[^\s\p{P}\p{S}]|~)/u, ke = _(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", ce ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), L = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Ae = _(L, "u").replace(/punct/g, P).getRegex(), je = _(L, "u").replace(/punct/g, Ee).getRegex(), Me = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ne = _(Me, "gu").replace(/notPunctSpace/g, I).replace(/punctSpace/g, F).replace(/punct/g, P).getRegex(), Pe = _(Me, "gu").replace(/notPunctSpace/g, Oe).replace(/punctSpace/g, De).replace(/punct/g, Ee).getRegex(), Fe = _("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, I).replace(/punctSpace/g, F).replace(/punct/g, P).getRegex(), Ie = _(/\\(punct)/, "gu").replace(/punct/g, P).getRegex(), Le = _(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Re = _(k).replace("(?:-->|$)", "-->").getRegex(), ze = _("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Re).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), R = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Be = _(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", R).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ve = _(/^!?\[(label)\]\[(ref)\]/).replace("label", R).replace("ref", D).getRegex(), He = _(/^!?\[(ref)\](?:\[\])?/).replace("ref", D).getRegex(), Ue = _("reflink|nolink(?!\\()", "g").replace("reflink", Ve).replace("nolink", He).getRegex(), We = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, z = {
		_backpedal: S,
		anyPunctuation: Ie,
		autolink: Le,
		blockSkip: ke,
		br: N,
		code: Ce,
		del: S,
		emStrongLDelim: Ae,
		emStrongRDelimAst: Ne,
		emStrongRDelimUnd: Fe,
		escape: Se,
		link: Be,
		nolink: He,
		punctuation: Te,
		reflink: Ve,
		reflinkSearch: Ue,
		tag: ze,
		text: we,
		url: S
	}, Ge = {
		...z,
		link: _(/^!?\[(label)\]\((.*?)\)/).replace("label", R).getRegex(),
		reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", R).getRegex()
	}, B = {
		...z,
		emStrongRDelimAst: Pe,
		emStrongLDelim: je,
		url: _(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", We).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
		text: _(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", We).getRegex()
	}, Ke = {
		...B,
		br: _(N).replace("{2,}", "*").getRegex(),
		text: _(B.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
	}, V = {
		normal: j,
		gfm: be,
		pedantic: xe
	}, H = {
		normal: z,
		gfm: B,
		breaks: Ke,
		pedantic: Ge
	}, qe = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	}, Je = (e) => qe[e], U = class {
		options;
		rules;
		lexer;
		constructor(e) {
			this.options = e || x;
		}
		space(e) {
			let t = this.rules.block.newline.exec(e);
			if (t && t[0].length > 0) return {
				type: "space",
				raw: t[0]
			};
		}
		code(e) {
			let t = this.rules.block.code.exec(e);
			if (t) {
				let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
				return {
					type: "code",
					raw: t[0],
					codeBlockStyle: "indented",
					text: this.options.pedantic ? e : y(e, "\n")
				};
			}
		}
		fences(e) {
			let t = this.rules.block.fences.exec(e);
			if (t) {
				let e = t[0], n = se(e, t[3] || "", this.rules);
				return {
					type: "code",
					raw: e,
					lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
					text: n
				};
			}
		}
		heading(e) {
			let t = this.rules.block.heading.exec(e);
			if (t) {
				let e = t[2].trim();
				if (this.rules.other.endingHash.test(e)) {
					let t = y(e, "#");
					(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
				}
				return {
					type: "heading",
					raw: t[0],
					depth: t[1].length,
					text: e,
					tokens: this.lexer.inline(e)
				};
			}
		}
		hr(e) {
			let t = this.rules.block.hr.exec(e);
			if (t) return {
				type: "hr",
				raw: y(t[0], "\n")
			};
		}
		blockquote(e) {
			let t = this.rules.block.blockquote.exec(e);
			if (t) {
				let e = y(t[0], "\n").split("\n"), n = "", r = "", i = [];
				for (; e.length > 0;) {
					let t = !1, a = [], o;
					for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
					else if (!t) a.push(e[o]);
					else break;
					e = e.slice(o);
					let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
					n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
					let l = this.lexer.state.top;
					if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
					let u = i.at(-1);
					if (u?.type === "code") break;
					if (u?.type === "blockquote") {
						let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
						i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
						break;
					} else if (u?.type === "list") {
						let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
						i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
						continue;
					}
				}
				return {
					type: "blockquote",
					raw: n,
					tokens: i,
					text: r
				};
			}
		}
		list(e) {
			let t = this.rules.block.list.exec(e);
			if (t) {
				let n = t[1].trim(), r = n.length > 1, i = {
					type: "list",
					raw: "",
					ordered: r,
					start: r ? +n.slice(0, -1) : "",
					loose: !1,
					items: []
				};
				n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
				let a = this.rules.other.listItemRegex(n), o = !1;
				for (; e;) {
					let n = !1, r = "", s = "";
					if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
					r = t[0], e = e.substring(r.length);
					let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
					if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
						let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d);
						for (; e;) {
							let f = e.split("\n", 1)[0], p;
							if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || t.test(l) || n.test(l)) break;
							if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
							else {
								if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
								s += "\n" + l;
							}
							!u && !l.trim() && (u = !0), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
						}
					}
					i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0));
					let f = null, p;
					this.options.gfm && (f = this.rules.other.listIsTask.exec(s), f && (p = f[0] !== "[ ] ", s = s.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
						type: "list_item",
						raw: r,
						task: !!f,
						checked: p,
						loose: !1,
						text: s,
						tokens: []
					}), i.raw += r;
				}
				let s = i.items.at(-1);
				if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
				else return;
				i.raw = i.raw.trimEnd();
				for (let e = 0; e < i.items.length; e++) if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
					let t = i.items[e].tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
				if (i.loose) for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
				return i;
			}
		}
		html(e) {
			let t = this.rules.block.html.exec(e);
			if (t) return {
				type: "html",
				block: !0,
				raw: t[0],
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: t[0]
			};
		}
		def(e) {
			let t = this.rules.block.def.exec(e);
			if (t) {
				let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
				return {
					type: "def",
					tag: e,
					raw: t[0],
					href: n,
					title: r
				};
			}
		}
		table(e) {
			let t = this.rules.block.table.exec(e);
			if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
			let n = ie(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
				type: "table",
				raw: t[0],
				header: [],
				align: [],
				rows: []
			};
			if (n.length === r.length) {
				for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
				for (let e = 0; e < n.length; e++) a.header.push({
					text: n[e],
					tokens: this.lexer.inline(n[e]),
					header: !0,
					align: a.align[e]
				});
				for (let e of i) a.rows.push(ie(e, a.header.length).map((e, t) => ({
					text: e,
					tokens: this.lexer.inline(e),
					header: !1,
					align: a.align[t]
				})));
				return a;
			}
		}
		lheading(e) {
			let t = this.rules.block.lheading.exec(e);
			if (t) return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: t[1],
				tokens: this.lexer.inline(t[1])
			};
		}
		paragraph(e) {
			let t = this.rules.block.paragraph.exec(e);
			if (t) {
				let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
				return {
					type: "paragraph",
					raw: t[0],
					text: e,
					tokens: this.lexer.inline(e)
				};
			}
		}
		text(e) {
			let t = this.rules.block.text.exec(e);
			if (t) return {
				type: "text",
				raw: t[0],
				text: t[0],
				tokens: this.lexer.inline(t[0])
			};
		}
		escape(e) {
			let t = this.rules.inline.escape.exec(e);
			if (t) return {
				type: "escape",
				raw: t[0],
				text: t[1]
			};
		}
		tag(e) {
			let t = this.rules.inline.tag.exec(e);
			if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
				type: "html",
				raw: t[0],
				inLink: this.lexer.state.inLink,
				inRawBlock: this.lexer.state.inRawBlock,
				block: !1,
				text: t[0]
			};
		}
		link(e) {
			let t = this.rules.inline.link.exec(e);
			if (t) {
				let e = t[2].trim();
				if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
					if (!this.rules.other.endAngleBracket.test(e)) return;
					let t = y(e.slice(0, -1), "\\");
					if ((e.length - t.length) % 2 == 0) return;
				} else {
					let e = ae(t[2], "()");
					if (e === -2) return;
					if (e > -1) {
						let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
						t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
					}
				}
				let n = t[2], r = "";
				if (this.options.pedantic) {
					let e = this.rules.other.pedanticHrefTitle.exec(n);
					e && (n = e[1], r = e[3]);
				} else r = t[3] ? t[3].slice(1, -1) : "";
				return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), oe(t, {
					href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
					title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
				}, t[0], this.lexer, this.rules);
			}
		}
		reflink(e, t) {
			let n;
			if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
				let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
				if (!e) {
					let e = n[0].charAt(0);
					return {
						type: "text",
						raw: e,
						text: e
					};
				}
				return oe(n, e, n[0], this.lexer, this.rules);
			}
		}
		emStrong(e, t, n = "") {
			let r = this.rules.inline.emStrongLDelim.exec(e);
			if (!(!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
				let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
				for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
					if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
					if (a = [...i].length, r[3] || r[4]) {
						o += a;
						continue;
					} else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
						s += a;
						continue;
					}
					if (o -= a, o > 0) continue;
					a = Math.min(a, a + o + s);
					let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
					if (Math.min(n, a) % 2) {
						let e = c.slice(1, -1);
						return {
							type: "em",
							raw: c,
							text: e,
							tokens: this.lexer.inlineTokens(e)
						};
					}
					let l = c.slice(2, -2);
					return {
						type: "strong",
						raw: c,
						text: l,
						tokens: this.lexer.inlineTokens(l)
					};
				}
			}
		}
		codespan(e) {
			let t = this.rules.inline.code.exec(e);
			if (t) {
				let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
				return n && r && (e = e.substring(1, e.length - 1)), {
					type: "codespan",
					raw: t[0],
					text: e
				};
			}
		}
		br(e) {
			let t = this.rules.inline.br.exec(e);
			if (t) return {
				type: "br",
				raw: t[0]
			};
		}
		del(e) {
			let t = this.rules.inline.del.exec(e);
			if (t) return {
				type: "del",
				raw: t[0],
				text: t[2],
				tokens: this.lexer.inlineTokens(t[2])
			};
		}
		autolink(e) {
			let t = this.rules.inline.autolink.exec(e);
			if (t) {
				let e, n;
				return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
					type: "link",
					raw: t[0],
					text: e,
					href: n,
					tokens: [{
						type: "text",
						raw: e,
						text: e
					}]
				};
			}
		}
		url(e) {
			let t;
			if (t = this.rules.inline.url.exec(e)) {
				let e, n;
				if (t[2] === "@") e = t[0], n = "mailto:" + e;
				else {
					let r;
					do
						r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
					while (r !== t[0]);
					e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
				}
				return {
					type: "link",
					raw: t[0],
					text: e,
					href: n,
					tokens: [{
						type: "text",
						raw: e,
						text: e
					}]
				};
			}
		}
		inlineText(e) {
			let t = this.rules.inline.text.exec(e);
			if (t) {
				let e = this.lexer.state.inRawBlock;
				return {
					type: "text",
					raw: t[0],
					text: t[0],
					escaped: e
				};
			}
		}
	}, W = class e {
		tokens;
		options;
		state;
		tokenizer;
		inlineQueue;
		constructor(e) {
			this.tokens = [], this.tokens.links = Object.create(null), this.options = e || x, this.options.tokenizer = this.options.tokenizer || new U(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
				inLink: !1,
				inRawBlock: !1,
				top: !0
			};
			let t = {
				other: C,
				block: V.normal,
				inline: H.normal
			};
			this.options.pedantic ? (t.block = V.pedantic, t.inline = H.pedantic) : this.options.gfm && (t.block = V.gfm, this.options.breaks ? t.inline = H.breaks : t.inline = H.gfm), this.tokenizer.rules = t;
		}
		static get rules() {
			return {
				block: V,
				inline: H
			};
		}
		static lex(t, n) {
			return new e(n).lex(t);
		}
		static lexInline(t, n) {
			return new e(n).inlineTokens(t);
		}
		lex(e) {
			e = e.replace(C.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
			for (let e = 0; e < this.inlineQueue.length; e++) {
				let t = this.inlineQueue[e];
				this.inlineTokens(t.src, t.tokens);
			}
			return this.inlineQueue = [], this.tokens;
		}
		blockTokens(e, t = [], n = !1) {
			for (this.options.pedantic && (e = e.replace(C.tabCharGlobal, "    ").replace(C.spaceLine, "")); e;) {
				let r;
				if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
				if (r = this.tokenizer.space(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
					continue;
				}
				if (r = this.tokenizer.code(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
					continue;
				}
				if (r = this.tokenizer.fences(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.heading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.hr(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.blockquote(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.list(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.html(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.def(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
						href: r.href,
						title: r.title
					}, t.push(r));
					continue;
				}
				if (r = this.tokenizer.table(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.lheading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				let i = e;
				if (this.options.extensions?.startBlock) {
					let t = Infinity, n = e.slice(1), r;
					this.options.extensions.startBlock.forEach((e) => {
						r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
					}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
				}
				if (this.state.top && (r = this.tokenizer.paragraph(i))) {
					let a = t.at(-1);
					n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
					continue;
				}
				if (r = this.tokenizer.text(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
					continue;
				}
				if (e) {
					let t = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(t);
						break;
					} else throw Error(t);
				}
			}
			return this.state.top = !0, t;
		}
		inline(e, t = []) {
			return this.inlineQueue.push({
				src: e,
				tokens: t
			}), t;
		}
		inlineTokens(e, t = []) {
			let n = e, r = null;
			if (this.tokens.links) {
				let e = Object.keys(this.tokens.links);
				if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
			}
			for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
			let i;
			for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
			n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
			let a = !1, o = "";
			for (; e;) {
				a || (o = ""), a = !1;
				let r;
				if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
				if (r = this.tokenizer.escape(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.tag(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.link(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.reflink(e, this.tokens.links)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
					continue;
				}
				if (r = this.tokenizer.emStrong(e, n, o)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.codespan(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.br(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.del(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.autolink(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (!this.state.inLink && (r = this.tokenizer.url(e))) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				let i = e;
				if (this.options.extensions?.startInline) {
					let t = Infinity, n = e.slice(1), r;
					this.options.extensions.startInline.forEach((e) => {
						r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
					}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
				}
				if (r = this.tokenizer.inlineText(i)) {
					e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
					let n = t.at(-1);
					n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
					continue;
				}
				if (e) {
					let t = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(t);
						break;
					} else throw Error(t);
				}
			}
			return t;
		}
	}, G = class {
		options;
		parser;
		constructor(e) {
			this.options = e || x;
		}
		space(e) {
			return "";
		}
		code({ text: e, lang: t, escaped: n }) {
			let r = (t || "").match(C.notSpaceStart)?.[0], i = e.replace(C.endingNewline, "") + "\n";
			return r ? "<pre><code class=\"language-" + v(r) + "\">" + (n ? i : v(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : v(i, !0)) + "</code></pre>\n";
		}
		blockquote({ tokens: e }) {
			return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
		}
		html({ text: e }) {
			return e;
		}
		def(e) {
			return "";
		}
		heading({ tokens: e, depth: t }) {
			return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
		}
		hr(e) {
			return "<hr>\n";
		}
		list(e) {
			let t = e.ordered, n = e.start, r = "";
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				r += this.listitem(n);
			}
			let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
			return "<" + i + a + ">\n" + r + "</" + i + ">\n";
		}
		listitem(e) {
			let t = "";
			if (e.task) {
				let n = this.checkbox({ checked: !!e.checked });
				e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + v(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
					type: "text",
					raw: n + " ",
					text: n + " ",
					escaped: !0
				}) : t += n + " ";
			}
			return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
		}
		checkbox({ checked: e }) {
			return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
		}
		paragraph({ tokens: e }) {
			return `<p>${this.parser.parseInline(e)}</p>
`;
		}
		table(e) {
			let t = "", n = "";
			for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
			t += this.tablerow({ text: n });
			let r = "";
			for (let t = 0; t < e.rows.length; t++) {
				let i = e.rows[t];
				n = "";
				for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
				r += this.tablerow({ text: n });
			}
			return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
		}
		tablerow({ text: e }) {
			return `<tr>
${e}</tr>
`;
		}
		tablecell(e) {
			let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
			return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
		}
		strong({ tokens: e }) {
			return `<strong>${this.parser.parseInline(e)}</strong>`;
		}
		em({ tokens: e }) {
			return `<em>${this.parser.parseInline(e)}</em>`;
		}
		codespan({ text: e }) {
			return `<code>${v(e, !0)}</code>`;
		}
		br(e) {
			return "<br>";
		}
		del({ tokens: e }) {
			return `<del>${this.parser.parseInline(e)}</del>`;
		}
		link({ href: e, title: t, tokens: n }) {
			let r = this.parser.parseInline(n), i = re(e);
			if (i === null) return r;
			e = i;
			let a = "<a href=\"" + e + "\"";
			return t && (a += " title=\"" + v(t) + "\""), a += ">" + r + "</a>", a;
		}
		image({ href: e, title: t, text: n, tokens: r }) {
			r && (n = this.parser.parseInline(r, this.parser.textRenderer));
			let i = re(e);
			if (i === null) return v(n);
			e = i;
			let a = `<img src="${e}" alt="${n}"`;
			return t && (a += ` title="${v(t)}"`), a += ">", a;
		}
		text(e) {
			return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : v(e.text);
		}
	}, K = class {
		strong({ text: e }) {
			return e;
		}
		em({ text: e }) {
			return e;
		}
		codespan({ text: e }) {
			return e;
		}
		del({ text: e }) {
			return e;
		}
		html({ text: e }) {
			return e;
		}
		text({ text: e }) {
			return e;
		}
		link({ text: e }) {
			return "" + e;
		}
		image({ text: e }) {
			return "" + e;
		}
		br() {
			return "";
		}
	}, q = class e {
		options;
		renderer;
		textRenderer;
		constructor(e) {
			this.options = e || x, this.options.renderer = this.options.renderer || new G(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new K();
		}
		static parse(t, n) {
			return new e(n).parse(t);
		}
		static parseInline(t, n) {
			return new e(n).parseInline(t);
		}
		parse(e, t = !0) {
			let n = "";
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (this.options.extensions?.renderers?.[i.type]) {
					let e = i, t = this.options.extensions.renderers[e.type].call({ parser: this }, e);
					if (t !== !1 || ![
						"space",
						"hr",
						"heading",
						"code",
						"table",
						"blockquote",
						"list",
						"html",
						"def",
						"paragraph",
						"text"
					].includes(e.type)) {
						n += t || "";
						continue;
					}
				}
				let a = i;
				switch (a.type) {
					case "space":
						n += this.renderer.space(a);
						continue;
					case "hr":
						n += this.renderer.hr(a);
						continue;
					case "heading":
						n += this.renderer.heading(a);
						continue;
					case "code":
						n += this.renderer.code(a);
						continue;
					case "table":
						n += this.renderer.table(a);
						continue;
					case "blockquote":
						n += this.renderer.blockquote(a);
						continue;
					case "list":
						n += this.renderer.list(a);
						continue;
					case "html":
						n += this.renderer.html(a);
						continue;
					case "def":
						n += this.renderer.def(a);
						continue;
					case "paragraph":
						n += this.renderer.paragraph(a);
						continue;
					case "text": {
						let i = a, o = this.renderer.text(i);
						for (; r + 1 < e.length && e[r + 1].type === "text";) i = e[++r], o += "\n" + this.renderer.text(i);
						t ? n += this.renderer.paragraph({
							type: "paragraph",
							raw: o,
							text: o,
							tokens: [{
								type: "text",
								raw: o,
								text: o,
								escaped: !0
							}]
						}) : n += o;
						continue;
					}
					default: {
						let e = "Token with \"" + a.type + "\" type was not found.";
						if (this.options.silent) return console.error(e), "";
						throw Error(e);
					}
				}
			}
			return n;
		}
		parseInline(e, t = this.renderer) {
			let n = "";
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (this.options.extensions?.renderers?.[i.type]) {
					let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
					if (e !== !1 || ![
						"escape",
						"html",
						"link",
						"image",
						"strong",
						"em",
						"codespan",
						"br",
						"del",
						"text"
					].includes(i.type)) {
						n += e || "";
						continue;
					}
				}
				let a = i;
				switch (a.type) {
					case "escape":
						n += t.text(a);
						break;
					case "html":
						n += t.html(a);
						break;
					case "link":
						n += t.link(a);
						break;
					case "image":
						n += t.image(a);
						break;
					case "strong":
						n += t.strong(a);
						break;
					case "em":
						n += t.em(a);
						break;
					case "codespan":
						n += t.codespan(a);
						break;
					case "br":
						n += t.br(a);
						break;
					case "del":
						n += t.del(a);
						break;
					case "text":
						n += t.text(a);
						break;
					default: {
						let e = "Token with \"" + a.type + "\" type was not found.";
						if (this.options.silent) return console.error(e), "";
						throw Error(e);
					}
				}
			}
			return n;
		}
	}, J = class {
		options;
		block;
		constructor(e) {
			this.options = e || x;
		}
		static passThroughHooks = /* @__PURE__ */ new Set([
			"preprocess",
			"postprocess",
			"processAllTokens",
			"emStrongMask"
		]);
		static passThroughHooksRespectAsync = /* @__PURE__ */ new Set([
			"preprocess",
			"postprocess",
			"processAllTokens"
		]);
		preprocess(e) {
			return e;
		}
		postprocess(e) {
			return e;
		}
		processAllTokens(e) {
			return e;
		}
		emStrongMask(e) {
			return e;
		}
		provideLexer() {
			return this.block ? W.lex : W.lexInline;
		}
		provideParser() {
			return this.block ? q.parse : q.parseInline;
		}
	}, Ye = class {
		defaults = te();
		options = this.setOptions;
		parse = this.parseMarkdown(!0);
		parseInline = this.parseMarkdown(!1);
		Parser = q;
		Renderer = G;
		TextRenderer = K;
		Lexer = W;
		Tokenizer = U;
		Hooks = J;
		constructor(...e) {
			this.use(...e);
		}
		walkTokens(e, t) {
			let n = [];
			for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
				case "table": {
					let e = r;
					for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
					for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
					break;
				}
				case "list": {
					let e = r;
					n = n.concat(this.walkTokens(e.items, t));
					break;
				}
				default: {
					let e = r;
					this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
						let i = e[r].flat(Infinity);
						n = n.concat(this.walkTokens(i, t));
					}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
				}
			}
			return n;
		}
		use(...e) {
			let t = this.defaults.extensions || {
				renderers: {},
				childTokens: {}
			};
			return e.forEach((e) => {
				let n = { ...e };
				if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
					if (!e.name) throw Error("extension name required");
					if ("renderer" in e) {
						let n = t.renderers[e.name];
						n ? t.renderers[e.name] = function(...t) {
							let r = e.renderer.apply(this, t);
							return r === !1 && (r = n.apply(this, t)), r;
						} : t.renderers[e.name] = e.renderer;
					}
					if ("tokenizer" in e) {
						if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
						let n = t[e.level];
						n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
					}
					"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
				}), n.extensions = t), e.renderer) {
					let t = this.defaults.renderer || new G(this.defaults);
					for (let n in e.renderer) {
						if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
						if (["options", "parser"].includes(n)) continue;
						let r = n, i = e.renderer[r], a = t[r];
						t[r] = (...e) => {
							let n = i.apply(t, e);
							return n === !1 && (n = a.apply(t, e)), n || "";
						};
					}
					n.renderer = t;
				}
				if (e.tokenizer) {
					let t = this.defaults.tokenizer || new U(this.defaults);
					for (let n in e.tokenizer) {
						if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
						if ([
							"options",
							"rules",
							"lexer"
						].includes(n)) continue;
						let r = n, i = e.tokenizer[r], a = t[r];
						t[r] = (...e) => {
							let n = i.apply(t, e);
							return n === !1 && (n = a.apply(t, e)), n;
						};
					}
					n.tokenizer = t;
				}
				if (e.hooks) {
					let t = this.defaults.hooks || new J();
					for (let n in e.hooks) {
						if (!(n in t)) throw Error(`hook '${n}' does not exist`);
						if (["options", "block"].includes(n)) continue;
						let r = n, i = e.hooks[r], a = t[r];
						J.passThroughHooks.has(n) ? t[r] = (e) => {
							if (this.defaults.async && J.passThroughHooksRespectAsync.has(n)) return (async () => {
								let n = await i.call(t, e);
								return a.call(t, n);
							})();
							let r = i.call(t, e);
							return a.call(t, r);
						} : t[r] = (...e) => {
							if (this.defaults.async) return (async () => {
								let n = await i.apply(t, e);
								return n === !1 && (n = await a.apply(t, e)), n;
							})();
							let n = i.apply(t, e);
							return n === !1 && (n = a.apply(t, e)), n;
						};
					}
					n.hooks = t;
				}
				if (e.walkTokens) {
					let t = this.defaults.walkTokens, r = e.walkTokens;
					n.walkTokens = function(e) {
						let n = [];
						return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
					};
				}
				this.defaults = {
					...this.defaults,
					...n
				};
			}), this;
		}
		setOptions(e) {
			return this.defaults = {
				...this.defaults,
				...e
			}, this;
		}
		lexer(e, t) {
			return W.lex(e, t ?? this.defaults);
		}
		parser(e, t) {
			return q.parse(e, t ?? this.defaults);
		}
		parseMarkdown(e) {
			return (t, n) => {
				let r = { ...n }, i = {
					...this.defaults,
					...r
				}, a = this.onError(!!i.silent, !!i.async);
				if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
				if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
				if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
				if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
					let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer() : e ? W.lex : W.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
					i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
					let o = await (i.hooks ? await i.hooks.provideParser() : e ? q.parse : q.parseInline)(a, i);
					return i.hooks ? await i.hooks.postprocess(o) : o;
				})().catch(a);
				try {
					i.hooks && (t = i.hooks.preprocess(t));
					let n = (i.hooks ? i.hooks.provideLexer() : e ? W.lex : W.lexInline)(t, i);
					i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
					let r = (i.hooks ? i.hooks.provideParser() : e ? q.parse : q.parseInline)(n, i);
					return i.hooks && (r = i.hooks.postprocess(r)), r;
				} catch (e) {
					return a(e);
				}
			};
		}
		onError(e, t) {
			return (n) => {
				if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
					let e = "<p>An error occurred:</p><pre>" + v(n.message + "", !0) + "</pre>";
					return t ? Promise.resolve(e) : e;
				}
				if (t) return Promise.reject(n);
				throw n;
			};
		}
	}, Y = new Ye(), b.options = b.setOptions = function(e) {
		return Y.setOptions(e), b.defaults = Y.defaults, ne(b.defaults), b;
	}, b.getDefaults = te, b.defaults = x, b.use = function(...e) {
		return Y.use(...e), b.defaults = Y.defaults, ne(b.defaults), b;
	}, b.walkTokens = function(e, t) {
		return Y.walkTokens(e, t);
	}, b.parseInline = Y.parseInline, b.Parser = q, b.parser = q.parse, b.Renderer = G, b.TextRenderer = K, b.Lexer = W, b.lexer = W.lex, b.Tokenizer = U, b.Hooks = J, b.parse = b, b.options, b.setOptions, b.use, b.walkTokens, b.parseInline, q.parse, W.lex;
}));
//#endregion
//#region ../../node_modules/ts-dedent/esm/index.js
function Ze(e) {
	var t = [...arguments].slice(1), n = Array.from(typeof e == "string" ? [e] : e);
	n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var r = n.reduce(function(e, t) {
		var n = t.match(/\n([\t ]+|(?!\s).)/g);
		return n ? e.concat(n.map(function(e) {
			return e.match(/[\t ]/g)?.length ?? 0;
		})) : e;
	}, []);
	if (r.length) {
		var i = RegExp(`
[	 ]{${Math.min.apply(Math, r)}}`, "g");
		n = n.map(function(e) {
			return e.replace(i, "\n");
		});
	}
	n[0] = n[0].replace(/^\r?\n/, "");
	var a = n[0];
	return t.forEach(function(e, t) {
		var r = a.match(/(?:^|\n)( *)$/), i = r ? r[1] : "", o = e;
		typeof e == "string" && e.includes("\n") && (o = String(e).split("\n").map(function(e, t) {
			return t === 0 ? e : `${i}${e}`;
		}).join("\n")), a += o + n[t + 1];
	}), a;
}
var Qe = e((() => {}));
//#endregion
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/chunk-Q4XR5HBZ.mjs
function $e(e, { markdownAutoWrap: t }) {
	return Ze(e.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"));
}
function et(e) {
	return e.split(/\\n|\n|<br\s*\/?>/gi).map((e) => e.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((e) => ({
		content: e,
		type: "normal"
	})) ?? []);
}
function tt(e, n = {}) {
	let r = $e(e, n), i = b.lexer(r), a = [[]], o = 0;
	function s(e, t = "normal") {
		e.type === "text" ? e.text.split("\n").forEach((e, n) => {
			n !== 0 && (o++, a.push([])), e.split(" ").forEach((e) => {
				e = e.replace(/&#39;/g, "'"), e && a[o].push({
					content: e,
					type: t
				});
			});
		}) : e.type === "strong" || e.type === "em" ? e.tokens.forEach((t) => {
			s(t, e.type);
		}) : e.type === "html" && a[o].push({
			content: e.text,
			type: "normal"
		});
	}
	return t(s, "processNode"), i.forEach((e) => {
		e.type === "paragraph" ? e.tokens?.forEach((e) => {
			s(e);
		}) : e.type === "html" ? a[o].push({
			content: e.text,
			type: "normal"
		}) : a[o].push({
			content: e.raw,
			type: "normal"
		});
	}), a;
}
function nt(e) {
	return e ? `<p>${e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
function rt(e, { markdownAutoWrap: n } = {}) {
	let i = b.lexer(e);
	function a(e) {
		return e.type === "text" ? n === !1 ? e.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : e.text.replace(/\n */g, "<br/>") : e.type === "strong" ? `<strong>${e.tokens?.map(a).join("")}</strong>` : e.type === "em" ? `<em>${e.tokens?.map(a).join("")}</em>` : e.type === "paragraph" ? `<p>${e.tokens?.map(a).join("")}</p>` : e.type === "space" ? "" : e.type === "html" ? `${e.text}` : e.type === "escape" ? e.text : (r.warn(`Unsupported markdown: ${e.type}`), e.raw);
	}
	return t(a, "output"), i.map(a).join("");
}
function it(e) {
	return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((e) => e.segment) : [...e];
}
function at(e, t) {
	return ot(e, [], it(t.content), t.type);
}
function ot(e, t, n, r) {
	if (n.length === 0) return [{
		content: t.join(""),
		type: r
	}, {
		content: "",
		type: r
	}];
	let [i, ...a] = n, o = [...t, i];
	return e([{
		content: o.join(""),
		type: r
	}]) ? ot(e, o, a, r) : (t.length === 0 && i && (t.push(i), n.shift()), [{
		content: t.join(""),
		type: r
	}, {
		content: n.join(""),
		type: r
	}]);
}
function st(e, t) {
	if (e.some(({ content: e }) => e.includes("\n"))) throw Error("splitLineToFitWidth does not support newlines in the line");
	return X(e, t);
}
function X(e, t, n = [], r = []) {
	if (e.length === 0) return r.length > 0 && n.push(r), n.length > 0 ? n : [];
	let i = "";
	e[0].content === " " && (i = " ", e.shift());
	let a = e.shift() ?? {
		content: " ",
		type: "normal"
	}, o = [...r];
	if (i !== "" && o.push({
		content: i,
		type: "normal"
	}), o.push(a), t(o)) return X(e, t, n, o);
	if (r.length > 0) n.push(r), e.unshift(a);
	else if (a.content) {
		let [r, i] = at(t, a);
		n.push([r]), i.content && e.unshift(i);
	}
	return X(e, t, n);
}
function ct(e, t) {
	t && e.attr("style", t);
}
async function lt(e, t, n, r, i = !1, a = u()) {
	let o = e.append("foreignObject");
	o.attr("width", `${Math.min(10 * n, $)}px`), o.attr("height", `${Math.min(10 * n, $)}px`);
	let d = o.append("xhtml:div"), p = s(t.label) ? await l(t.label.replace(f.lineBreakRegex, "\n"), a) : c(t.label, a), m = t.isNode ? "nodeLabel" : "edgeLabel", h = d.append("span");
	h.html(p), ct(h, t.labelStyle), h.attr("class", `${m} ${r}`), ct(d, t.labelStyle), d.style("display", "table-cell"), d.style("white-space", "nowrap"), d.style("line-height", "1.5"), n !== Infinity && (d.style("max-width", n + "px"), d.style("text-align", "center")), d.attr("xmlns", "http://www.w3.org/1999/xhtml"), i && d.attr("class", "labelBkg");
	let g = d.node().getBoundingClientRect();
	return g.width === n && (d.style("display", "table"), d.style("white-space", "break-spaces"), d.style("width", n + "px"), g = d.node().getBoundingClientRect()), o.node();
}
function Z(e, t, n, r = !1) {
	let i = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * n - .1 + "em").attr("dy", n + "em");
	return r && i.attr("text-anchor", "middle"), i;
}
function ut(e, t, n) {
	let r = e.append("text"), i = Z(r, 1, t);
	Q(i, n);
	let a = i.node().getComputedTextLength();
	return r.remove(), a;
}
function dt(e, t, n) {
	let r = e.append("text"), i = Z(r, 1, t);
	Q(i, [{
		content: n,
		type: "normal"
	}]);
	let a = i.node()?.getBoundingClientRect();
	return a && r.remove(), a;
}
function ft(e, n, r, i = !1, a = !1) {
	let o = 1.1, s = n.append("g"), c = s.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = s.append("text").attr("y", "-10.1");
	a && l.attr("text-anchor", "middle");
	let u = 0;
	for (let n of r) {
		let r = /* @__PURE__ */ t((t) => ut(s, o, t) <= e, "checkWidth"), i = r(n) ? [n] : st(n, r);
		for (let e of i) Q(Z(l, u, o, a), e), u++;
	}
	if (i) {
		let e = l.node().getBBox();
		return c.attr("x", e.x - 2).attr("y", e.y - 2).attr("width", e.width + 4).attr("height", e.height + 4), s.node();
	} else return l.node();
}
function pt(e) {
	return e.replace(/&(amp|lt|gt);/g, (e, t) => {
		switch (t) {
			case "amp": return "&";
			case "lt": return "<";
			case "gt": return ">";
			default: return e;
		}
	});
}
function Q(e, t) {
	e.text(""), t.forEach((t, n) => {
		let r = e.append("tspan").attr("font-style", t.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", t.type === "strong" ? "bold" : "normal");
		n === 0 ? r.text(pt(t.content)) : r.text(" " + pt(t.content));
	});
}
async function mt(e, t = {}) {
	let n = [];
	e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e, r, i) => (n.push((async () => {
		let n = `${r}:${i}`;
		return await g(n) ? await ee(n, void 0, { class: "label-icon" }) : `<i class='${c(e, t).replace(":", " ")}'></i>`;
	})()), e));
	let r = await Promise.all(n);
	return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => r.shift() ?? "");
}
var $, ht, gt = e((() => {
	h(), m(), d(), o(), n(), a(), Xe(), Qe(), t($e, "preprocessMarkdown"), t(et, "nonMarkdownToLines"), t(tt, "markdownToLines"), t(nt, "nonMarkdownToHTML"), t(rt, "markdownToHTML"), t(it, "splitTextToChars"), t(at, "splitWordToFitWidth"), t(ot, "splitWordToFitWidthRecursion"), t(st, "splitLineToFitWidth"), t(X, "splitLineToFitWidthRecursion"), t(ct, "applyStyle"), $ = 16384, t(lt, "addHtmlSpan"), t(Z, "createTspan"), t(ut, "computeWidthOfText"), t(dt, "computeDimensionOfText"), t(ft, "createFormattedText"), t(pt, "decodeHTMLEntities"), t(Q, "updateTextContentAndStyles"), t(mt, "replaceIconSubstring"), ht = /* @__PURE__ */ t(async (e, t = "", { style: n = "", isTitle: a = !1, classes: o = "", useHtmlLabels: c = !0, markdown: l = !0, isNode: u = !0, width: d = 200, addSvgBackground: f = !1 } = {}, m) => {
		if (r.debug("XYZ createText", t, n, a, o, c, u, "addSvgBackground: ", f), c) {
			let r = await mt(p(l ? rt(t, m) : nt(t)), m), i = t.replace(/\\\\/g, "\\");
			return await lt(e, {
				isNode: u,
				label: s(t) ? i : r,
				labelStyle: n.replace("fill:", "color:")
			}, d, o, f, m);
		} else {
			let r = p(t.replace(/<br\s*\/?>/g, "<br/>")), o = ft(d, e, l ? tt(r.replace("<br>", "<br/>"), m) : et(r), t ? f : !1, !u);
			if (u) {
				/stroke:/.exec(n) && (n = n.replace("stroke:", "lineColor:"));
				let e = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
				i(o).attr("style", e);
			} else {
				let e = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
				i(o).select("rect").attr("style", e.replace(/background:/g, "fill:"));
				let t = n.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
				i(o).select("text").attr("style", t);
			}
			return a ? i(o).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : i(o).selectAll("tspan.text-outer-tspan").classed("row", !0), o;
		}
	}, "createText");
}));
//#endregion
export { Qe as a, Ze as i, ht as n, gt as r, dt as t };
