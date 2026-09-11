import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t, r as n } from "./chunk-Y2CYZVJY-BFGoWi8k.js";
import { Bt as r, jt as i, t as a, zt as o } from "./src-s9Lposmn.js";
import { U as s, W as c, X as l, a as u, b as d, f, j as p, q as m, s as h, v as g, w as _, x as v, y } from "./chunk-WYO6CB5R-WuT6p4uA.js";
import { _ as b, d as x, h as ee, i as te } from "./chunk-ICXQ74PX-CtRwfsVX.js";
import { n as ne, r as re } from "./mermaid-parser.core-B0WAIwlv.js";
import { n as ie, t as ae } from "./chunk-JWPE2WC7-Co6GTr09.js";
import { n as oe, t as se } from "./chunk-2Q5K7J3B-CoEK4A15.js";
//#region ../../node_modules/mermaid/dist/chunks/mermaid.core/gitGraphDiagram-IHSO6WYX.mjs
function S() {
	return ee({ length: 7 });
}
function ce(e, t) {
	let n = /* @__PURE__ */ Object.create(null);
	return e.reduce((e, r) => {
		let i = t(r);
		return n[i] || (n[i] = !0, e.push(r)), e;
	}, []);
}
function C(e, t, n) {
	let r = e.indexOf(t);
	r === -1 ? e.push(n) : e.splice(r, 1, n);
}
function w(e) {
	let t = e.reduce((e, t) => e.seq > t.seq ? e : t, e[0]), n = "";
	e.forEach(function(e) {
		e === t ? n += "	*" : n += "	|";
	});
	let i = [
		n,
		t.id,
		t.seq
	];
	for (let e in D.records.branches) D.records.branches.get(e) === t.id && i.push(e);
	if (r.debug(i.join(" ")), t.parents && t.parents.length == 2 && t.parents[0] && t.parents[1]) {
		let n = D.records.commits.get(t.parents[0]);
		C(e, t, n), t.parents[1] && e.push(D.records.commits.get(t.parents[1]));
	} else if (t.parents.length == 0) return;
	else if (t.parents[0]) {
		let n = D.records.commits.get(t.parents[0]);
		C(e, t, n);
	}
	e = ce(e, (e) => e.id), w(e);
}
var T, le, E, D, ue, de, fe, pe, me, he, ge, O, _e, ve, ye, be, xe, k, A, Se, Ce, we, Te, Ee, De, Oe, ke, j, M, N, P, F, I, L, R, Ae, z, B, V, H, U, W, G, K, je, q, J, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, Y, We, X, Ge, Ke, Z, qe, Je, Q, $, Ye, Xe, Ze, Qe, $e, et, tt, nt;
//#endregion
e((() => {
	oe(), ae(), x(), p(), o(), n(), ne(), a(), T = {
		NORMAL: 0,
		REVERSE: 1,
		HIGHLIGHT: 2,
		MERGE: 3,
		CHERRY_PICK: 4
	}, le = f.gitGraph, E = /* @__PURE__ */ t(() => te({
		...le,
		...d().gitGraph
	}), "getConfig"), D = new se(() => {
		let e = E(), t = e.mainBranchName, n = e.mainBranchOrder;
		return {
			mainBranchName: t,
			commits: /* @__PURE__ */ new Map(),
			head: null,
			branchConfig: /* @__PURE__ */ new Map([[t, {
				name: t,
				order: n
			}]]),
			branches: /* @__PURE__ */ new Map([[t, null]]),
			currBranch: t,
			direction: "LR",
			seq: 0,
			options: {}
		};
	}), t(S, "getID"), t(ce, "uniqBy"), ue = /* @__PURE__ */ t(function(e) {
		D.records.direction = e;
	}, "setDirection"), de = /* @__PURE__ */ t(function(e) {
		r.debug("options str", e), e = e?.trim(), e ||= "{}";
		try {
			D.records.options = JSON.parse(e);
		} catch (e) {
			r.error("error while parsing gitGraph options", e.message);
		}
	}, "setOptions"), fe = /* @__PURE__ */ t(function() {
		return D.records.options;
	}, "getOptions"), pe = /* @__PURE__ */ t(function(e) {
		let t = e.msg, n = e.id, i = e.type, a = e.tags;
		r.info("commit", t, n, i, a), r.debug("Entering commit:", t, n, i, a);
		let o = E();
		n = h.sanitizeText(n, o), t = h.sanitizeText(t, o), a = a?.map((e) => h.sanitizeText(e, o));
		let s = {
			id: n || D.records.seq + "-" + S(),
			message: t,
			seq: D.records.seq++,
			type: i ?? T.NORMAL,
			tags: a ?? [],
			parents: D.records.head == null ? [] : [D.records.head.id],
			branch: D.records.currBranch
		};
		D.records.head = s, r.info("main branch", o.mainBranchName), D.records.commits.has(s.id) && r.warn(`Commit ID ${s.id} already exists`), D.records.commits.set(s.id, s), D.records.branches.set(D.records.currBranch, s.id), r.debug("in pushCommit " + s.id);
	}, "commit"), me = /* @__PURE__ */ t(function(e) {
		let t = e.name, n = e.order;
		if (t = h.sanitizeText(t, E()), D.records.branches.has(t)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${t}")`);
		D.records.branches.set(t, D.records.head == null ? null : D.records.head.id), D.records.branchConfig.set(t, {
			name: t,
			order: n
		}), O(t), r.debug("in createBranch");
	}, "branch"), he = /* @__PURE__ */ t((e) => {
		let t = e.branch, n = e.id, i = e.type, a = e.tags, o = E();
		t = h.sanitizeText(t, o), n &&= h.sanitizeText(n, o);
		let s = D.records.branches.get(D.records.currBranch), c = D.records.branches.get(t), l = s ? D.records.commits.get(s) : void 0, u = c ? D.records.commits.get(c) : void 0;
		if (l && u && l.branch === t) throw Error(`Cannot merge branch '${t}' into itself.`);
		if (D.records.currBranch === t) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
			throw e.hash = {
				text: `merge ${t}`,
				token: `merge ${t}`,
				expected: ["branch abc"]
			}, e;
		}
		if (l === void 0 || !l) {
			let e = /* @__PURE__ */ Error(`Incorrect usage of "merge". Current branch (${D.records.currBranch})has no commits`);
			throw e.hash = {
				text: `merge ${t}`,
				token: `merge ${t}`,
				expected: ["commit"]
			}, e;
		}
		if (!D.records.branches.has(t)) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + t + ") does not exist");
			throw e.hash = {
				text: `merge ${t}`,
				token: `merge ${t}`,
				expected: [`branch ${t}`]
			}, e;
		}
		if (u === void 0 || !u) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + t + ") has no commits");
			throw e.hash = {
				text: `merge ${t}`,
				token: `merge ${t}`,
				expected: ["\"commit\""]
			}, e;
		}
		if (l === u) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Both branches have same head");
			throw e.hash = {
				text: `merge ${t}`,
				token: `merge ${t}`,
				expected: ["branch abc"]
			}, e;
		}
		if (n && D.records.commits.has(n)) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Commit with id:" + n + " already exists, use different custom id");
			throw e.hash = {
				text: `merge ${t} ${n} ${i} ${a?.join(" ")}`,
				token: `merge ${t} ${n} ${i} ${a?.join(" ")}`,
				expected: [`merge ${t} ${n}_UNIQUE ${i} ${a?.join(" ")}`]
			}, e;
		}
		let d = c || "", f = {
			id: n || `${D.records.seq}-${S()}`,
			message: `merged branch ${t} into ${D.records.currBranch}`,
			seq: D.records.seq++,
			parents: D.records.head == null ? [] : [D.records.head.id, d],
			branch: D.records.currBranch,
			type: T.MERGE,
			customType: i,
			customId: !!n,
			tags: a ?? []
		};
		D.records.head = f, D.records.commits.set(f.id, f), D.records.branches.set(D.records.currBranch, f.id), r.debug(D.records.branches), r.debug("in mergeBranch");
	}, "merge"), ge = /* @__PURE__ */ t(function(e) {
		let t = e.id, n = e.targetId, i = e.tags, a = e.parent;
		r.debug("Entering cherryPick:", t, n, i);
		let o = E();
		if (t = h.sanitizeText(t, o), n = h.sanitizeText(n, o), i = i?.map((e) => h.sanitizeText(e, o)), a = h.sanitizeText(a, o), !t || !D.records.commits.has(t)) {
			let e = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
			throw e.hash = {
				text: `cherryPick ${t} ${n}`,
				token: `cherryPick ${t} ${n}`,
				expected: ["cherry-pick abc"]
			}, e;
		}
		let s = D.records.commits.get(t);
		if (s === void 0 || !s) throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		if (a && !(Array.isArray(s.parents) && s.parents.includes(a))) throw /* @__PURE__ */ Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
		let c = s.branch;
		if (s.type === T.MERGE && !a) throw /* @__PURE__ */ Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
		if (!n || !D.records.commits.has(n)) {
			if (c === D.records.currBranch) {
				let e = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
				throw e.hash = {
					text: `cherryPick ${t} ${n}`,
					token: `cherryPick ${t} ${n}`,
					expected: ["cherry-pick abc"]
				}, e;
			}
			let e = D.records.branches.get(D.records.currBranch);
			if (e === void 0 || !e) {
				let e = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${D.records.currBranch})has no commits`);
				throw e.hash = {
					text: `cherryPick ${t} ${n}`,
					token: `cherryPick ${t} ${n}`,
					expected: ["cherry-pick abc"]
				}, e;
			}
			let o = D.records.commits.get(e);
			if (o === void 0 || !o) {
				let e = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${D.records.currBranch})has no commits`);
				throw e.hash = {
					text: `cherryPick ${t} ${n}`,
					token: `cherryPick ${t} ${n}`,
					expected: ["cherry-pick abc"]
				}, e;
			}
			let l = {
				id: D.records.seq + "-" + S(),
				message: `cherry-picked ${s?.message} into ${D.records.currBranch}`,
				seq: D.records.seq++,
				parents: D.records.head == null ? [] : [D.records.head.id, s.id],
				branch: D.records.currBranch,
				type: T.CHERRY_PICK,
				tags: i ? i.filter(Boolean) : [`cherry-pick:${s.id}${s.type === T.MERGE ? `|parent:${a}` : ""}`]
			};
			D.records.head = l, D.records.commits.set(l.id, l), D.records.branches.set(D.records.currBranch, l.id), r.debug(D.records.branches), r.debug("in cherryPick");
		}
	}, "cherryPick"), O = /* @__PURE__ */ t(function(e) {
		if (e = h.sanitizeText(e, E()), D.records.branches.has(e)) {
			D.records.currBranch = e;
			let t = D.records.branches.get(D.records.currBranch);
			t === void 0 || !t ? D.records.head = null : D.records.head = D.records.commits.get(t) ?? null;
		} else {
			let t = /* @__PURE__ */ Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${e}")`);
			throw t.hash = {
				text: `checkout ${e}`,
				token: `checkout ${e}`,
				expected: [`branch ${e}`]
			}, t;
		}
	}, "checkout"), t(C, "upsert"), t(w, "prettyPrintCommitHistory"), _e = /* @__PURE__ */ t(function() {
		r.debug(D.records.commits);
		let e = k()[0];
		w([e]);
	}, "prettyPrint"), ve = /* @__PURE__ */ t(function() {
		D.reset(), u();
	}, "clear"), ye = /* @__PURE__ */ t(function() {
		return [...D.records.branchConfig.values()].map((e, t) => e.order !== null && e.order !== void 0 ? e : {
			...e,
			order: parseFloat(`0.${t}`)
		}).sort((e, t) => (e.order ?? 0) - (t.order ?? 0)).map(({ name: e }) => ({ name: e }));
	}, "getBranchesAsObjArray"), be = /* @__PURE__ */ t(function() {
		return D.records.branches;
	}, "getBranches"), xe = /* @__PURE__ */ t(function() {
		return D.records.commits;
	}, "getCommits"), k = /* @__PURE__ */ t(function() {
		let e = [...D.records.commits.values()];
		return e.forEach(function(e) {
			r.debug(e.id);
		}), e.sort((e, t) => e.seq - t.seq), e;
	}, "getCommitsArray"), A = {
		commitType: T,
		getConfig: E,
		setDirection: ue,
		setOptions: de,
		getOptions: fe,
		commit: pe,
		branch: me,
		merge: he,
		cherryPick: ge,
		checkout: O,
		prettyPrint: _e,
		clear: ve,
		getBranchesAsObjArray: ye,
		getBranches: be,
		getCommits: xe,
		getCommitsArray: k,
		getCurrentBranch: /* @__PURE__ */ t(function() {
			return D.records.currBranch;
		}, "getCurrentBranch"),
		getDirection: /* @__PURE__ */ t(function() {
			return D.records.direction;
		}, "getDirection"),
		getHead: /* @__PURE__ */ t(function() {
			return D.records.head;
		}, "getHead"),
		setAccTitle: c,
		getAccTitle: y,
		getAccDescription: g,
		setAccDescription: s,
		setDiagramTitle: m,
		getDiagramTitle: _
	}, Se = /* @__PURE__ */ t((e, t) => {
		ie(e, t), e.dir && t.setDirection(e.dir);
		for (let n of e.statements) Ce(n, t);
	}, "populate"), Ce = /* @__PURE__ */ t((e, n) => {
		let i = {
			Commit: /* @__PURE__ */ t((e) => n.commit(we(e)), "Commit"),
			Branch: /* @__PURE__ */ t((e) => n.branch(Te(e)), "Branch"),
			Merge: /* @__PURE__ */ t((e) => n.merge(Ee(e)), "Merge"),
			Checkout: /* @__PURE__ */ t((e) => n.checkout(De(e)), "Checkout"),
			CherryPicking: /* @__PURE__ */ t((e) => n.cherryPick(Oe(e)), "CherryPicking")
		}[e.$type];
		i ? i(e) : r.error(`Unknown statement type: ${e.$type}`);
	}, "parseStatement"), we = /* @__PURE__ */ t((e) => ({
		id: e.id,
		msg: e.message ?? "",
		type: e.type === void 0 ? T.NORMAL : T[e.type],
		tags: e.tags ?? void 0
	}), "parseCommit"), Te = /* @__PURE__ */ t((e) => ({
		name: e.name,
		order: e.order ?? 0
	}), "parseBranch"), Ee = /* @__PURE__ */ t((e) => ({
		branch: e.branch,
		id: e.id ?? "",
		type: e.type === void 0 ? void 0 : T[e.type],
		tags: e.tags ?? void 0
	}), "parseMerge"), De = /* @__PURE__ */ t((e) => e.branch, "parseCheckout"), Oe = /* @__PURE__ */ t((e) => ({
		id: e.id,
		targetId: "",
		tags: e.tags?.length === 0 ? void 0 : e.tags,
		parent: e.parent
	}), "parseCherryPicking"), ke = { parse: /* @__PURE__ */ t(async (e) => {
		let t = await re("gitGraph", e);
		r.debug(t), Se(t, A);
	}, "parse") }, j = 10, M = 40, N = 4, P = 2, F = 8, I = /* @__PURE__ */ new Set([
		"redux",
		"redux-dark",
		"redux-color",
		"redux-dark-color"
	]), L = 12, R = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Ae = /* @__PURE__ */ new Set([
		"dark",
		"redux-dark",
		"redux-dark-color",
		"neo-dark"
	]), z = /* @__PURE__ */ t((e, t, n = !1) => n && e > 0 ? (e - 1) % (t - 1) + 1 : e % t, "calcColorIndex"), B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), H = 30, U = /* @__PURE__ */ new Map(), W = [], G = 0, K = "LR", je = /* @__PURE__ */ t(() => {
		B.clear(), V.clear(), U.clear(), G = 0, W = [], K = "LR";
	}, "clear"), q = /* @__PURE__ */ t((e) => {
		let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
		return (typeof e == "string" ? e.split(/\\n|\n|<br\s*\/?>/gi) : e).forEach((e) => {
			let n = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
			n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), n.setAttribute("dy", "1em"), n.setAttribute("x", "0"), n.setAttribute("class", "row"), n.textContent = e.trim(), t.appendChild(n);
		}), t;
	}, "drawText"), J = /* @__PURE__ */ t((e) => {
		let n, r, i;
		return K === "BT" ? (r = /* @__PURE__ */ t((e, t) => e <= t, "comparisonFunc"), i = Infinity) : (r = /* @__PURE__ */ t((e, t) => e >= t, "comparisonFunc"), i = 0), e.forEach((e) => {
			let t = K === "TB" || K == "BT" ? V.get(e)?.y : V.get(e)?.x;
			t !== void 0 && r(t, i) && (n = e, i = t);
		}), n;
	}, "findClosestParent"), Me = /* @__PURE__ */ t((e) => {
		let t = "", n = Infinity;
		return e.forEach((e) => {
			let r = V.get(e).y;
			r <= n && (t = e, n = r);
		}), t || void 0;
	}, "findClosestParentBT"), Ne = /* @__PURE__ */ t((e, t, n) => {
		let r = n, i = n, a = [];
		e.forEach((e) => {
			let n = t.get(e);
			if (!n) throw Error(`Commit not found for key ${e}`);
			n.parents.length ? (r = Fe(n), i = Math.max(r, i)) : a.push(n), Ie(n, r);
		}), r = i, a.forEach((e) => {
			Le(e, r, n);
		}), e.forEach((e) => {
			let n = t.get(e);
			if (n?.parents.length) {
				let e = Me(n.parents);
				r = V.get(e).y - M, r <= i && (i = r);
				let t = B.get(n.branch).pos, a = r - j;
				V.set(n.id, {
					x: t,
					y: a
				});
			}
		});
	}, "setParallelBTPos"), Pe = /* @__PURE__ */ t((e) => {
		let t = J(e.parents.filter((e) => e !== null));
		if (!t) throw Error(`Closest parent not found for commit ${e.id}`);
		let n = V.get(t)?.y;
		if (n === void 0) throw Error(`Closest parent position not found for commit ${e.id}`);
		return n;
	}, "findClosestParentPos"), Fe = /* @__PURE__ */ t((e) => Pe(e) + M, "calculateCommitPosition"), Ie = /* @__PURE__ */ t((e, t) => {
		let n = B.get(e.branch);
		if (!n) throw Error(`Branch not found for commit ${e.id}`);
		let r = n.pos, i = t + j;
		return V.set(e.id, {
			x: r,
			y: i
		}), {
			x: r,
			y: i
		};
	}, "setCommitPosition"), Le = /* @__PURE__ */ t((e, t, n) => {
		let r = B.get(e.branch);
		if (!r) throw Error(`Branch not found for commit ${e.id}`);
		let i = t + n, a = r.pos;
		V.set(e.id, {
			x: a,
			y: i
		});
	}, "setRootPosition"), Re = /* @__PURE__ */ t((e, t, n, r, i, a) => {
		let { theme: o } = v(), s = I.has(o ?? ""), c = R.has(o ?? ""), l = Ae.has(o ?? "");
		if (a === T.HIGHLIGHT) e.append("rect").attr("x", n.x - 10 + (s ? 3 : 0)).attr("y", n.y - 10 + (s ? 3 : 0)).attr("width", s ? 14 : 20).attr("height", s ? 14 : 20).attr("class", `commit ${t.id} commit-highlight${z(i, F, c)} ${r}-outer`), e.append("rect").attr("x", n.x - 6 + (s ? 2 : 0)).attr("y", n.y - 6 + (s ? 2 : 0)).attr("width", s ? 8 : 12).attr("height", s ? 8 : 12).attr("class", `commit ${t.id} commit${z(i, F, c)} ${r}-inner`);
		else if (a === T.CHERRY_PICK) e.append("circle").attr("cx", n.x).attr("cy", n.y).attr("r", s ? 7 : 10).attr("class", `commit ${t.id} ${r}`), e.append("circle").attr("cx", n.x - 3).attr("cy", n.y + 2).attr("r", s ? 2.5 : 2.75).attr("fill", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("circle").attr("cx", n.x + 3).attr("cy", n.y + 2).attr("r", s ? 2.5 : 2.75).attr("fill", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("line").attr("x1", n.x + 3).attr("y1", n.y + 1).attr("x2", n.x).attr("y2", n.y - 5).attr("stroke", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`), e.append("line").attr("x1", n.x - 3).attr("y1", n.y + 1).attr("x2", n.x).attr("y2", n.y - 5).attr("stroke", l ? "#000000" : "#fff").attr("class", `commit ${t.id} ${r}`);
		else {
			let o = e.append("circle");
			if (o.attr("cx", n.x), o.attr("cy", n.y), o.attr("r", s ? 7 : 10), o.attr("class", `commit ${t.id} commit${z(i, F, c)}`), a === T.MERGE) {
				let a = e.append("circle");
				a.attr("cx", n.x), a.attr("cy", n.y), a.attr("r", s ? 5 : 6), a.attr("class", `commit ${r} ${t.id} commit${z(i, F, c)}`);
			}
			if (a === T.REVERSE) {
				let a = e.append("path"), o = s ? 4 : 5;
				a.attr("d", `M ${n.x - o},${n.y - o}L${n.x + o},${n.y + o}M${n.x - o},${n.y + o}L${n.x + o},${n.y - o}`).attr("class", `commit ${r} ${t.id} commit${z(i, F, c)}`);
			}
		}
	}, "drawCommitBullet"), ze = /* @__PURE__ */ t((e, t, n, r, i) => {
		if (t.type !== T.CHERRY_PICK && (t.customId && t.type === T.MERGE || t.type !== T.MERGE) && i.showCommitLabel) {
			let a = e.append("g"), o = a.insert("rect").attr("class", "commit-label-bkg"), s = a.append("text").attr("x", r).attr("y", n.y + 25).attr("class", "commit-label").text(t.id), c = s.node()?.getBBox();
			if (c && (o.attr("x", n.posWithOffset - c.width / 2 - P).attr("y", n.y + 13.5).attr("width", c.width + 2 * P).attr("height", c.height + 2 * P), K === "TB" || K === "BT" ? (o.attr("x", n.x - (c.width + 4 * N + 5)).attr("y", n.y - 12), s.attr("x", n.x - (c.width + 4 * N)).attr("y", n.y + c.height - 12)) : s.attr("x", n.posWithOffset - c.width / 2), i.rotateCommitLabel)) if (K === "TB" || K === "BT") s.attr("transform", "rotate(-45, " + n.x + ", " + n.y + ")"), o.attr("transform", "rotate(-45, " + n.x + ", " + n.y + ")");
			else {
				let e = -7.5 - (c.width + 10) / 25 * 9.5, t = 10 + c.width / 25 * 8.5;
				a.attr("transform", "translate(" + e + ", " + t + ") rotate(-45, " + r + ", " + n.y + ")");
			}
		}
	}, "drawCommitLabel"), Be = /* @__PURE__ */ t((e, t, n, r) => {
		if (t.tags.length > 0) {
			let i = 0, a = 0, o = 0, s = [];
			for (let r of t.tags.reverse()) {
				let t = e.insert("polygon"), c = e.append("circle"), l = e.append("text").attr("y", n.y - 16 - i).attr("class", "tag-label").text(r), u = l.node()?.getBBox();
				if (!u) throw Error("Tag bbox not found");
				a = Math.max(a, u.width), o = Math.max(o, u.height), l.attr("x", n.posWithOffset - u.width / 2), s.push({
					tag: l,
					hole: c,
					rect: t,
					yOffset: i
				}), i += 20;
			}
			for (let { tag: e, hole: t, rect: i, yOffset: c } of s) {
				let s = o / 2, l = n.y - 19.2 - c;
				if (i.attr("class", "tag-label-bkg").attr("points", `
      ${r - a / 2 - N / 2},${l + P}  
      ${r - a / 2 - N / 2},${l - P}
      ${n.posWithOffset - a / 2 - N},${l - s - P}
      ${n.posWithOffset + a / 2 + N},${l - s - P}
      ${n.posWithOffset + a / 2 + N},${l + s + P}
      ${n.posWithOffset - a / 2 - N},${l + s + P}`), t.attr("cy", l).attr("cx", r - a / 2 + N / 2).attr("r", 1.5).attr("class", "tag-hole"), K === "TB" || K === "BT") {
					let o = r + c;
					i.attr("class", "tag-label-bkg").attr("points", `
        ${n.x},${o + 2}
        ${n.x},${o - 2}
        ${n.x + j},${o - s - 2}
        ${n.x + j + a + 4},${o - s - 2}
        ${n.x + j + a + 4},${o + s + 2}
        ${n.x + j},${o + s + 2}`).attr("transform", "translate(12,12) rotate(45, " + n.x + "," + r + ")"), t.attr("cx", n.x + N / 2).attr("cy", o).attr("transform", "translate(12,12) rotate(45, " + n.x + "," + r + ")"), e.attr("x", n.x + 5).attr("y", o + 3).attr("transform", "translate(14,14) rotate(45, " + n.x + "," + r + ")");
				}
			}
		}
	}, "drawCommitTags"), Ve = /* @__PURE__ */ t((e) => {
		switch (e.customType ?? e.type) {
			case T.NORMAL: return "commit-normal";
			case T.REVERSE: return "commit-reverse";
			case T.HIGHLIGHT: return "commit-highlight";
			case T.MERGE: return "commit-merge";
			case T.CHERRY_PICK: return "commit-cherry-pick";
			default: return "commit-normal";
		}
	}, "getCommitClassType"), He = /* @__PURE__ */ t((e, t, n, r) => {
		let i = {
			x: 0,
			y: 0
		};
		if (e.parents.length > 0) {
			let n = J(e.parents);
			if (n) {
				let a = r.get(n) ?? i;
				return t === "TB" ? a.y + M : t === "BT" ? (r.get(e.id) ?? i).y - M : a.x + M;
			}
		} else if (t === "TB") return H;
		else if (t === "BT") return (r.get(e.id) ?? i).y - M;
		else return 0;
		return 0;
	}, "calculatePosition"), Ue = /* @__PURE__ */ t((e, t, n) => {
		let r = K === "BT" && n ? t : t + j, i = B.get(e.branch)?.pos, a = K === "TB" || K === "BT" ? B.get(e.branch)?.pos : r;
		if (a === void 0 || i === void 0) throw Error(`Position were undefined for commit ${e.id}`);
		let o = I.has(v().theme ?? "");
		return {
			x: a,
			y: K === "TB" || K === "BT" ? r : i + (o ? L / 2 + 1 : -2),
			posWithOffset: r
		};
	}, "getCommitPosition"), Y = /* @__PURE__ */ t((e, n, r, i) => {
		let a = e.append("g").attr("class", "commit-bullets"), o = e.append("g").attr("class", "commit-labels"), s = K === "TB" || K === "BT" ? H : 0, c = [...n.keys()], l = i.parallelCommits ?? !1, u = /* @__PURE__ */ t((e, t) => {
			let r = n.get(e)?.seq, i = n.get(t)?.seq;
			return r !== void 0 && i !== void 0 ? r - i : 0;
		}, "sortKeys"), d = c.sort(u);
		K === "BT" && (l && Ne(d, n, s), d = d.reverse()), d.forEach((e) => {
			let t = n.get(e);
			if (!t) throw Error(`Commit not found for key ${e}`);
			l && (s = He(t, K, s, V));
			let c = Ue(t, s, l);
			if (r) {
				let e = Ve(t), n = t.customType ?? t.type;
				Re(a, t, c, e, B.get(t.branch)?.index ?? 0, n), ze(o, t, c, s, i), Be(o, t, c, s);
			}
			K === "TB" || K === "BT" ? V.set(t.id, {
				x: c.x,
				y: c.posWithOffset
			}) : V.set(t.id, {
				x: c.posWithOffset,
				y: c.y
			}), s = K === "BT" && l ? s + M : s + M + j, s > G && (G = s);
		});
	}, "drawCommits"), We = /* @__PURE__ */ t((e, n, r, i, a) => {
		let o = (K === "TB" || K === "BT" ? r.x < i.x : r.y < i.y) ? n.branch : e.branch, s = /* @__PURE__ */ t((e) => e.branch === o, "isOnBranchToGetCurve"), c = /* @__PURE__ */ t((t) => t.seq > e.seq && t.seq < n.seq, "isBetweenCommits");
		return [...a.values()].some((e) => c(e) && s(e));
	}, "shouldRerouteArrow"), X = /* @__PURE__ */ t((e, t, n = 0) => {
		let r = e + Math.abs(e - t) / 2;
		return n > 5 ? r : W.every((e) => Math.abs(e - r) >= 10) ? (W.push(r), r) : X(e, t - Math.abs(e - t) / 5, n + 1);
	}, "findLane"), Ge = /* @__PURE__ */ t((e, t, n, r) => {
		let { theme: i } = v(), a = R.has(i ?? ""), o = V.get(t.id), s = V.get(n.id);
		if (o === void 0 || s === void 0) throw Error(`Commit positions not found for commits ${t.id} and ${n.id}`);
		let c = We(t, n, o, s, r), l = "", u = "", d = 0, f = 0, p = B.get(n.branch)?.index;
		n.type === T.MERGE && t.id !== n.parents[0] && (p = B.get(t.branch)?.index);
		let m;
		if (c) {
			l = "A 10 10, 0, 0, 0,", u = "A 10 10, 0, 0, 1,", d = 10, f = 10;
			let e = o.y < s.y ? X(o.y, s.y) : X(s.y, o.y), n = o.x < s.x ? X(o.x, s.x) : X(s.x, o.x);
			K === "TB" ? o.x < s.x ? m = `M ${o.x} ${o.y} L ${n - d} ${o.y} ${u} ${n} ${o.y + f} L ${n} ${s.y - d} ${l} ${n + f} ${s.y} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, m = `M ${o.x} ${o.y} L ${n + d} ${o.y} ${l} ${n} ${o.y + f} L ${n} ${s.y - d} ${u} ${n - f} ${s.y} L ${s.x} ${s.y}`) : K === "BT" ? o.x < s.x ? m = `M ${o.x} ${o.y} L ${n - d} ${o.y} ${l} ${n} ${o.y - f} L ${n} ${s.y + d} ${u} ${n + f} ${s.y} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, m = `M ${o.x} ${o.y} L ${n + d} ${o.y} ${u} ${n} ${o.y - f} L ${n} ${s.y + d} ${l} ${n - f} ${s.y} L ${s.x} ${s.y}`) : o.y < s.y ? m = `M ${o.x} ${o.y} L ${o.x} ${e - d} ${l} ${o.x + f} ${e} L ${s.x - d} ${e} ${u} ${s.x} ${e + f} L ${s.x} ${s.y}` : (p = B.get(t.branch)?.index, m = `M ${o.x} ${o.y} L ${o.x} ${e + d} ${u} ${o.x + f} ${e} L ${s.x - d} ${e} ${l} ${s.x} ${e - f} L ${s.x} ${s.y}`);
		} else l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, K === "TB" ? (o.x < s.x && (m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${l} ${o.x + f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${u} ${s.x} ${o.y + f} L ${s.x} ${s.y}`), o.x > s.x && (l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${u} ${o.x - f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x + d} ${o.y} ${l} ${s.x} ${o.y + f} L ${s.x} ${s.y}`), o.x === s.x && (m = `M ${o.x} ${o.y} L ${s.x} ${s.y}`)) : K === "BT" ? (o.x < s.x && (m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${u} ${o.x + f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${l} ${s.x} ${o.y - f} L ${s.x} ${s.y}`), o.x > s.x && (l = "A 20 20, 0, 0, 0,", u = "A 20 20, 0, 0, 1,", d = 20, f = 20, m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${l} ${o.x - f} ${s.y} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${s.x + d} ${o.y} ${u} ${s.x} ${o.y - f} L ${s.x} ${s.y}`), o.x === s.x && (m = `M ${o.x} ${o.y} L ${s.x} ${s.y}`)) : (o.y < s.y && (m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${u} ${s.x} ${o.y + f} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${o.x} ${s.y - d} ${l} ${o.x + f} ${s.y} L ${s.x} ${s.y}`), o.y > s.y && (m = n.type === T.MERGE && t.id !== n.parents[0] ? `M ${o.x} ${o.y} L ${s.x - d} ${o.y} ${l} ${s.x} ${o.y - f} L ${s.x} ${s.y}` : `M ${o.x} ${o.y} L ${o.x} ${s.y + d} ${u} ${o.x + f} ${s.y} L ${s.x} ${s.y}`), o.y === s.y && (m = `M ${o.x} ${o.y} L ${s.x} ${s.y}`));
		if (m === void 0) throw Error("Line definition not found");
		e.append("path").attr("d", m).attr("class", "arrow arrow" + z(p, F, a));
	}, "drawArrow"), Ke = /* @__PURE__ */ t((e, t) => {
		let n = e.append("g").attr("class", "commit-arrows");
		[...t.keys()].forEach((e) => {
			let r = t.get(e);
			r.parents && r.parents.length > 0 && r.parents.forEach((e) => {
				Ge(n, t.get(e), r, t);
			});
		});
	}, "drawArrows"), Z = /* @__PURE__ */ t((e, t, n, r) => {
		let { look: i, theme: a, themeVariables: o } = v(), { dropShadow: s, THEME_COLOR_LIMIT: c } = o, l = I.has(a ?? ""), u = R.has(a ?? ""), d = e.append("g");
		t.forEach((e, t) => {
			let a = z(t, l ? c : F, u), o = B.get(e.name)?.pos;
			if (o === void 0) throw Error(`Position not found for branch ${e.name}`);
			let f = K === "TB" || K === "BT" ? o : l ? o + L / 2 + 1 : o - 2, p = d.append("line");
			p.attr("x1", 0), p.attr("y1", f), p.attr("x2", G), p.attr("y2", f), p.attr("class", "branch branch" + a), K === "TB" ? (p.attr("y1", H), p.attr("x1", o), p.attr("y2", G), p.attr("x2", o)) : K === "BT" && (p.attr("y1", G), p.attr("x1", o), p.attr("y2", H), p.attr("x2", o)), W.push(f);
			let m = e.name, h = q(m), g = d.insert("rect"), _ = d.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + a);
			_.node().appendChild(h);
			let v = h.getBBox(), y = l ? 0 : 4, b = l ? 16 : 0, x = l ? L : 0;
			i === "neo" && g.attr("data-look", "neo"), g.attr("class", "branchLabelBkg label" + a).attr("style", i === "neo" ? `filter:${l ? `url(#${r}-drop-shadow)` : s}` : "").attr("rx", y).attr("ry", y).attr("x", -v.width - 4 - (n.rotateCommitLabel === !0 ? 30 : 0)).attr("y", -v.height / 2 + 10).attr("width", v.width + 18 + b).attr("height", v.height + 4 + x), _.attr("transform", "translate(" + (-v.width - 14 - (n.rotateCommitLabel === !0 ? 30 : 0) + b / 2) + ", " + (f - v.height / 2 - 2) + ")"), K === "TB" ? (g.attr("x", o - v.width / 2 - 10).attr("y", 0), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", 0)"), l && (g.attr("transform", `translate(${-b / 2 - 3}, ${-x - 10})`), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + (-x * 2 + 7) + ")"))) : K === "BT" ? (g.attr("x", o - v.width / 2 - 10).attr("y", G), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + G + ")"), l && (g.attr("transform", `translate(${-b / 2 - 3}, ${x + 10})`), _.attr("transform", "translate(" + (o - v.width / 2 - 5) + ", " + (G + x * 2 + 4) + ")"))) : g.attr("transform", "translate(-19, " + (f - 12 - x / 2) + ")");
		});
	}, "drawBranches"), qe = /* @__PURE__ */ t(function(e, t, n, r, i) {
		return B.set(e, {
			pos: t,
			index: n
		}), t += 50 + (i ? 40 : 0) + (K === "TB" || K === "BT" ? r.width / 2 : 0), t;
	}, "setBranchPosition"), Je = { draw: /* @__PURE__ */ t(function(e, t, n, a) {
		je(), r.debug("in gitgraph renderer", e + "\n", "id:", t, n);
		let o = a.db;
		if (!o.getConfig) {
			r.error("getConfig method is not available on db");
			return;
		}
		let s = o.getConfig(), c = s.rotateCommitLabel ?? !1;
		U = o.getCommits();
		let u = o.getBranchesAsObjArray();
		K = o.getDirection();
		let d = i(`[id="${t}"]`), { look: f, theme: p, themeVariables: m } = v(), { useGradient: h, gradientStart: g, gradientStop: _, filterColor: y } = m;
		if (h) {
			let e = d.append("defs").append("linearGradient").attr("id", t + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
			e.append("stop").attr("offset", "0%").attr("stop-color", g).attr("stop-opacity", 1), e.append("stop").attr("offset", "100%").attr("stop-color", _).attr("stop-opacity", 1);
		}
		f === "neo" && I.has(p ?? "") && d.append("defs").append("filter").attr("id", t + "-drop-shadow").attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", y);
		let x = 0;
		u.forEach((e, t) => {
			let n = q(e.name), r = d.append("g"), i = r.insert("g").attr("class", "branchLabel"), a = i.insert("g").attr("class", "label branch-label");
			a.node()?.appendChild(n);
			let o = n.getBBox();
			x = qe(e.name, x, t, o, c), a.remove(), i.remove(), r.remove();
		}), Y(d, U, !1, s), s.showBranches && Z(d, u, s, t), Ke(d, U), Y(d, U, !0, s), b.insertTitle(d, "gitTitleText", s.titleTopMargin ?? 0, o.getDiagramTitle()), l(void 0, d, s.diagramPadding, s.useMaxWidth);
	}, "draw") }, Q = 8, $ = /* @__PURE__ */ new Set([
		"redux",
		"redux-dark",
		"redux-color",
		"redux-dark-color"
	]), Ye = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Xe = /* @__PURE__ */ new Set(["neo", "neo-dark"]), Ze = /* @__PURE__ */ new Set([
		"dark",
		"redux-dark",
		"redux-dark-color",
		"neo-dark"
	]), Qe = /* @__PURE__ */ new Set([
		"redux",
		"redux-dark",
		"redux-color",
		"redux-dark-color",
		"neo",
		"neo-dark"
	]), $e = /* @__PURE__ */ t((e) => {
		let { svgId: t } = e, n = "";
		if (e.useGradient && t) for (let r = 0; r < e.THEME_COLOR_LIMIT; r++) n += `
      .label${r}  { fill: ${e.mainBkg}; stroke: url(${t}-gradient); stroke-width: ${e.strokeWidth};}
             `;
		return n;
	}, "genGitGraphGradient"), et = /* @__PURE__ */ t((e) => {
		let { theme: t, themeVariables: n } = d(), { borderColorArray: r } = n, i = $.has(t);
		if (Xe.has(t)) {
			let t = "";
			for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) if (n === 0) t += `
        .branch-label${n} { fill: ${e.nodeBorder};}
        .commit${n} { stroke: ${e.nodeBorder};   }
        .commit-highlight${n} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .arrow${n} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${n} { stroke: ${e.nodeBorder}; }
        ${$e(e)}`;
			else {
				let r = n % Q;
				t += `
        .branch-label${n} { fill: ${e["gitBranchLabel" + r]}; }
        .commit${n} { stroke: ${e["git" + r]}; fill: ${e["git" + r]}; }
        .commit-highlight${n} { stroke: ${e["gitInv" + r]}; fill: ${e["gitInv" + r]}; }
        .arrow${n} { stroke: ${e["git" + r]}; }
        `;
			}
			return t;
		} else if (Ye.has(t)) {
			let n = "";
			for (let a = 0; a < e.THEME_COLOR_LIMIT; a++) if (a === 0) n += `
        .branch-label${a} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${a} { stroke: ${e.nodeBorder}; }
        .commit-highlight${a} { stroke: ${e.nodeBorder}; fill: ${e.mainBkg}; }
        .label${a}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .arrow${a} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        `;
			else {
				let o = a % r.length;
				n += `
        .branch-label${a} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${a} { stroke: ${r[o]}; fill: ${r[o]}; }
        .commit-highlight${a} { stroke: ${r[o]}; fill: ${r[o]}; }
        .label${a}  { fill: ${Ze.has(t) ? e.mainBkg : r[o]}; stroke: ${r[o]};  stroke-width: ${e.strokeWidth}; }
        .arrow${a} { stroke: ${r[o]}; }
        `;
			}
			return n;
		} else {
			let t = "";
			for (let n = 0; n < e.THEME_COLOR_LIMIT; n++) t += `
        .branch-label${n} { fill: ${e.nodeBorder}; ${i ? `font-weight:${e.noteFontWeight}` : ""} }
        .commit${n} { stroke: ${e.nodeBorder};   }
        .commit-highlight${n} { stroke: ${e.nodeBorder}; fill: ${e.nodeBorder}; }
        .label${n}  { fill: ${e.mainBkg}; stroke: ${e.nodeBorder}; stroke-width: ${e.strokeWidth}; ${i ? `font-weight:${e.noteFontWeight}` : ""}}
        .arrow${n} { stroke: ${e.nodeBorder}; }
        .commit-bullets { fill: ${e.nodeBorder}; }
        .commit-cherry-pick${n} { stroke: ${e.nodeBorder}; }
        `;
			return t;
		}
	}, "genColor"), tt = /* @__PURE__ */ t((e) => `${Array.from({ length: e.THEME_COLOR_LIMIT }, (e, t) => t).map((t) => {
		let n = t % Q;
		return `
        .branch-label${t} { fill: ${e["gitBranchLabel" + n]}; }
        .commit${t} { stroke: ${e["git" + n]}; fill: ${e["git" + n]}; }
        .commit-highlight${t} { stroke: ${e["gitInv" + n]}; fill: ${e["gitInv" + n]}; }
        .label${t}  { fill: ${e["git" + n]}; }
        .arrow${t} { stroke: ${e["git" + n]}; }
        `;
	}).join("\n")}`, "normalTheme"), nt = {
		parser: ke,
		db: A,
		renderer: Je,
		styles: /* @__PURE__ */ t((e) => {
			let { theme: t } = d(), n = Qe.has(t);
			return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${n ? et(e) : tt(e)}

  .branch {
    stroke-width: ${e.strokeWidth};
    stroke: ${e.commitLineColor ?? e.lineColor};
    stroke-dasharray:  ${n ? "4 2" : "2"};
  }
  .commit-label { font-size: ${e.commitLabelFontSize}; fill: ${n ? e.nodeBorder : e.commitLabelColor}; ${n ? `font-weight:${e.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${e.commitLabelFontSize}; fill: ${n ? "transparent" : e.commitLabelBackground}; opacity: ${n ? "" : .5};  }
  .tag-label { font-size: ${e.tagLabelFontSize}; fill: ${e.tagLabelColor};}
  .tag-label-bkg { fill: ${n ? e.mainBkg : e.tagLabelBackground}; stroke: ${n ? e.nodeBorder : e.tagLabelBorder}; ${n ? `filter:${e.dropShadow}` : ""}  }
  .tag-hole { fill: ${e.textColor}; }

  .commit-merge {
    stroke: ${n ? e.mainBkg : e.primaryColor};
    fill: ${n ? e.mainBkg : e.primaryColor};
  }
  .commit-reverse {
    stroke: ${n ? e.mainBkg : e.primaryColor};
    fill: ${n ? e.mainBkg : e.primaryColor};
    stroke-width: ${n ? e.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${n ? e.mainBkg : e.primaryColor};
    fill: ${n ? e.mainBkg : e.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${$.has(t) ? e.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;
		}, "getStyles")
	};
}))();
export { nt as diagram };
