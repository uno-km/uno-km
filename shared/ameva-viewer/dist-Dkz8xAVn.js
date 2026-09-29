import { n as e, t } from "./rolldown-runtime-DY7j01NX.js";
import { n, t as r } from "./mermaid.core-CN17QvQg.js";
//#region ../../node_modules/@excalidraw/mermaid-to-excalidraw/dist/constants.js
var i, a, o = e((() => {
	i = {
		rect: "rectangle",
		circle: "ellipse"
	}, a = {
		startOnLoad: !1,
		flowchart: { curve: "linear" },
		themeVariables: { fontSize: "20px" },
		maxEdges: 500,
		maxTextSize: 5e4
	};
})), s, c = e((() => {
	o(), s = class {
		constructor({ converter: e }) {
			this.convert = (e, t) => this.converter(e, {
				...t,
				fontSize: t.fontSize || 20
			}), this.converter = e;
		}
	};
})), l, u, d, f = e((() => {
	(function(e) {
		e.ROUND = "round", e.STADIUM = "stadium", e.DOUBLECIRCLE = "doublecircle", e.CIRCLE = "circle", e.DIAMOND = "diamond", e.CYLINDER = "cylinder";
	})(l ||= {}), (function(e) {
		e.COLOR = "color";
	})(u ||= {}), (function(e) {
		e.FILL = "fill", e.STROKE = "stroke", e.STROKE_WIDTH = "stroke-width", e.STROKE_DASHARRAY = "stroke-dasharray";
	})(d ||= {});
})), p = /* @__PURE__ */ t(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.removeMarkdown = void 0, e.removeMarkdown = function(e, t) {
		t === void 0 && (t = { listUnicodeChar: "" }), t ||= {}, t.listUnicodeChar = t.hasOwnProperty("listUnicodeChar") ? t.listUnicodeChar : !1, t.stripListLeaders = t.hasOwnProperty("stripListLeaders") ? t.stripListLeaders : !0, t.gfm = t.hasOwnProperty("gfm") ? t.gfm : !0, t.useImgAltText = t.hasOwnProperty("useImgAltText") ? t.useImgAltText : !0, t.preserveLinks = t.hasOwnProperty("preserveLinks") ? t.preserveLinks : !1;
		var n = e || "";
		n = n.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
		try {
			t.stripListLeaders && (n = t.listUnicodeChar ? n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, t.listUnicodeChar + " $1") : n.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), t.gfm && (n = n.replace(/\n={2,}/g, "\n").replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), t.preserveLinks && (n = n.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), n = n.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, t.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, "\n\n").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, "\n\n");
		} catch (t) {
			return console.error(t), e;
		}
		return n;
	};
})), m, h, g, _, v, y, b, x = e((() => {
	f(), m = p(), h = {
		arrow_circle: { endArrowhead: "circle" },
		arrow_cross: { endArrowhead: "bar" },
		arrow_open: {
			endArrowhead: null,
			startArrowhead: null
		},
		double_arrow_circle: {
			endArrowhead: "circle",
			startArrowhead: "circle"
		},
		double_arrow_cross: {
			endArrowhead: "bar",
			startArrowhead: "bar"
		},
		double_arrow_point: {
			endArrowhead: "arrow",
			startArrowhead: "arrow"
		}
	}, g = (e) => h[e], _ = (e) => {
		let t = e.text;
		return e.labelType === "markdown" && (t = (0, m.removeMarkdown)(e.text)), v(t);
	}, v = (e) => e.replace(/\s?(fa|fab):[a-zA-Z0-9-]+/g, ""), y = (e) => {
		let t = {};
		return Object.keys(e).forEach((n) => {
			switch (n) {
				case d.FILL:
					t.backgroundColor = e[n], t.fillStyle = "solid";
					break;
				case d.STROKE:
					t.strokeColor = e[n];
					break;
				case d.STROKE_WIDTH:
					t.strokeWidth = Number(e[n]?.split("px")[0]);
					break;
				case d.STROKE_DASHARRAY:
					t.strokeStyle = "dashed";
					break;
			}
		}), t;
	}, b = (e) => {
		let t = {};
		return Object.keys(e).forEach((n) => {
			switch (n) {
				case u.COLOR:
					t.strokeColor = e[n];
					break;
			}
		}), t;
	};
})), ee, te, S, ne, re, ie, C, w, ae, oe = e((() => {
	c(), x(), f(), o(), ee = (e, t) => [e, t], te = 32, S = .62, ne = 12, re = 12, ie = (e, t) => Math.max(20, Math.ceil(e.length * t * S)), C = (e, t, n, r) => {
		let i = r || 20;
		if (e !== l.CYLINDER || !t || t.includes("\n")) return i;
		let a = Math.max(20, n - ne);
		return ie(t, i) <= a ? i : Math.max(re, Math.floor(a / (t.length * S)));
	}, w = (e) => {
		let t = {};
		e.subGraphs.map((n) => {
			n.nodeIds.forEach((r) => {
				t[n.id] = {
					id: n.id,
					parent: null,
					isLeaf: !1
				}, t[r] = {
					id: r,
					parent: n.id,
					isLeaf: e.vertices[r] !== void 0
				};
			});
		});
		let n = {};
		return [...Object.keys(e.vertices), ...e.subGraphs.map((e) => e.id)].forEach((e) => {
			if (!t[e]) return;
			let r = t[e], i = [];
			for (r.isLeaf || i.push(`subgraph_group_${r.id}`); r.parent;) i.push(`subgraph_group_${r.parent}`), r = t[r.parent];
			n[e] = i;
		}), {
			getGroupIds: (e) => n[e] || [],
			getParentId: (e) => t[e] ? t[e].parent : null
		};
	}, ae = new s({ converter: (e, t) => {
		let n = [], r = t.fontSize, { getGroupIds: i, getParentId: a } = w(e);
		return e.subGraphs.reverse().forEach((e) => {
			let t = i(e.id), a = _(e), o = ie(a, r || 16) + te * 2, s = Math.max(e.width, o), c = e.x - (s - e.width) / 2, l = y(e.containerStyle), u = b(e.labelStyle), d = {
				id: e.id,
				type: "rectangle",
				groupIds: t,
				x: c,
				y: e.y,
				width: s,
				height: e.height,
				label: {
					groupIds: t,
					text: a,
					fontSize: r,
					verticalAlign: "top",
					...u
				},
				...l
			};
			n.push(d);
		}), Object.values(e.vertices).forEach((e) => {
			if (!e) return;
			let t = i(e.id), a = _(e), o = C(e.type, a, e.width, r), s = y(e.containerStyle), c = b(e.labelStyle), u = {
				id: e.id,
				type: "rectangle",
				groupIds: t,
				x: e.x,
				y: e.y,
				width: e.width,
				height: e.height,
				strokeWidth: 2,
				label: {
					groupIds: t,
					text: a,
					fontSize: o,
					...c
				},
				link: e.link || null,
				...s
			};
			switch (e.type) {
				case l.STADIUM:
					u = {
						...u,
						roundness: { type: 3 }
					};
					break;
				case l.ROUND:
					u = {
						...u,
						roundness: { type: 3 }
					};
					break;
				case l.DOUBLECIRCLE: {
					t.push(`doublecircle_${e.id}}`);
					let r = {
						type: "ellipse",
						groupIds: t,
						x: e.x + 5,
						y: e.y + 5,
						width: e.width - 10,
						height: e.height - 10,
						strokeWidth: 2,
						roundness: { type: 3 },
						label: {
							groupIds: t,
							text: a,
							fontSize: o,
							...c
						}
					};
					u = {
						...u,
						groupIds: t,
						type: "ellipse"
					}, n.push(r);
					break;
				}
				case l.CIRCLE:
					u.type = "ellipse";
					break;
				case l.DIAMOND:
					u.type = "diamond";
					break;
			}
			n.push(u);
		}), e.edges.forEach((e) => {
			let t = [], o = a(e.start), s = a(e.end);
			o && o === s && (t = i(o));
			let { startX: c, startY: l, reflectionPoints: u } = e, d = u.map((e) => ee(e.x - u[0].x, e.y - u[0].y)), f = g(e.type || "arrow_point"), p = n.find((t) => t.id === e.start), m = n.find((t) => t.id === e.end);
			if (!p || !m) return;
			let h = {
				id: `${e.start}_${e.end}`,
				type: "arrow",
				groupIds: t,
				x: c,
				y: l,
				strokeWidth: e.stroke === "thick" ? 4 : 2,
				strokeStyle: e.stroke === "dotted" ? "dashed" : void 0,
				points: d,
				...e.text ? { label: {
					text: _(e),
					fontSize: r,
					groupIds: t
				} } : {},
				roundness: { type: 2 },
				...f,
				start: { id: p.id || "" },
				end: { id: m.id || "" }
			};
			n.push(h);
		}), { elements: n };
	} });
})), T, E = e((() => {
	T = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
})), se, ce = e((() => {
	c(), E(), se = new s({ converter: (e) => {
		let t = T(), { width: n, height: r } = e, i = {
			type: "image",
			x: 0,
			y: 0,
			width: n,
			height: r,
			status: "saved",
			fileId: t
		};
		return {
			files: { [t]: {
				id: t,
				mimeType: e.mimeType,
				dataURL: e.dataURL
			} },
			elements: [i]
		};
	} });
})), D, le, O, k, A, ue, de = e((() => {
	D = (e, t) => [e, t], le = (e) => e.replace(/\\n/g, "\n"), O = (e) => {
		let t = {
			type: "line",
			x: e.startX,
			y: e.startY,
			points: [D(0, 0), D(e.endX - e.startX, e.endY - e.startY)],
			width: e.endX - e.startX,
			height: e.endY - e.startY,
			strokeStyle: e.strokeStyle || "solid",
			strokeColor: e.strokeColor || "#000",
			strokeWidth: e.strokeWidth || 1
		};
		return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
	}, k = (e) => {
		let t = {
			type: "text",
			x: e.x,
			y: e.y,
			width: e.width,
			height: e.height,
			text: le(e.text) || "",
			fontSize: e.fontSize,
			verticalAlign: "top",
			strokeColor: e.color
		};
		return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
	}, A = (e) => {
		let t = {
			text: le(e?.label?.text || ""),
			fontSize: e?.label?.fontSize,
			textAlign: e.label?.textAlign,
			verticalAlign: e.label?.verticalAlign || "middle",
			strokeColor: e.label?.color || "#000",
			...e.groupId ? { groupIds: [e.groupId] } : {}
		}, n = {};
		e.type === "rectangle" && e.subtype === "activation" && (n = {
			backgroundColor: "#e9ecef",
			fillStyle: "solid"
		});
		let r = {
			id: e.id,
			type: e.type,
			x: e.x,
			y: e.y,
			width: e.width,
			height: e.height,
			label: t,
			strokeStyle: e?.strokeStyle,
			strokeWidth: e?.strokeWidth,
			strokeColor: e?.strokeColor,
			backgroundColor: e?.bgColor,
			fillStyle: "solid",
			...n
		};
		return e.groupId && Object.assign(r, { groupIds: [e.groupId] }), r;
	}, ue = (e) => {
		let t = {
			type: "arrow",
			x: e.startX,
			y: e.startY,
			points: e.points?.map(([e, t]) => D(e, t)) || [D(0, 0), D(e.endX - e.startX, e.endY - e.startY)],
			width: e.endX - e.startX,
			height: e.endY - e.startY,
			strokeStyle: e?.strokeStyle || "solid",
			endArrowhead: e?.endArrowhead || null,
			startArrowhead: e?.startArrowhead || null,
			label: {
				text: le(e?.label?.text || ""),
				fontSize: 16,
				textAlign: e?.label?.textAlign,
				verticalAlign: e?.label?.verticalAlign
			},
			roundness: { type: 2 },
			start: e.start,
			end: e.end
		};
		return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), t;
	};
})), j, fe, pe, me, he, ge, _e, ve, ye = e((() => {
	E(), c(), de(), j = 10, fe = 16, pe = 24, me = 4, he = (e) => {
		if (!e) return !0;
		let t = e.trim().toLowerCase();
		return t === "transparent" || t === "none" || t === "rgba(0,0,0,0)" || t === "rgba(0, 0, 0, 0)";
	}, ge = (e, t) => Math.max(20, Math.round(e.length * t * .6)), _e = (e, t, n = !0) => {
		let r = e, i = r.groupIds ?? [];
		if (i.includes(t) || (r.groupIds = [...i, t]), !n || !r.label) return;
		let a = r.label.groupIds ?? [];
		a.includes(t) || (r.label.groupIds = [...a, t]);
	}, ve = new s({ converter: (e) => {
		let t = [], n = [];
		if (Object.values(e.nodes).forEach((e) => {
			!e || !e.length || e.forEach((e) => {
				let r;
				switch (e.type) {
					case "line":
						r = O(e);
						break;
					case "rectangle":
					case "ellipse":
						r = A(e);
						break;
					case "text":
						r = k(e);
						break;
					default: throw `unknown type ${e.type}`;
				}
				e.type === "rectangle" && e?.subtype === "activation" ? n.push(r) : t.push(r);
			});
		}), Object.values(e.lines).forEach((e) => {
			e && t.push(O(e));
		}), Object.values(e.arrows).forEach((e) => {
			e && (t.push(ue(e)), e.sequenceNumber && t.push(A(e.sequenceNumber)));
		}), t.push(...n), e.loops) {
			let { lines: n, texts: r, nodes: i } = e.loops;
			n.forEach((e) => {
				t.push(O(e));
			}), r.forEach((e) => {
				t.push(k(e));
			}), i.forEach((e) => {
				t.push(A(e));
			});
		}
		return e.groups && e.groups.forEach((e) => {
			let { actorKeys: n, name: r } = e, i = Infinity, a = Infinity, o = 0, s = 0;
			if (!n.length) return;
			let c = t.filter((e) => {
				if (e.id) {
					let t = e.id.indexOf("-"), r = e.id.substring(0, t);
					return n.includes(r);
				}
				return !1;
			});
			if (!c.length || (c.forEach((e) => {
				e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0 || (i = Math.min(i, e.x), a = Math.min(a, e.y), o = Math.max(o, e.x + e.width), s = Math.max(s, e.y + e.height));
			}), !Number.isFinite(i) || !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s))) return;
			let l = i - j, u = a - j, d = o - i + j * 2, f = s - a + j * 2, p = T(), m = T(), h = A({
				type: "rectangle",
				x: l,
				y: u,
				width: d,
				height: f,
				bgColor: he(e.fill) ? void 0 : e.fill,
				strokeColor: "#1f1f1f",
				strokeWidth: 1,
				id: p,
				groupId: m
			});
			if (t.unshift(h), t.forEach((e) => {
				e.id !== p && (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0 || e.x >= i && e.x + e.width <= o && e.y >= a && e.y + e.height <= s && _e(e, m));
			}), r) {
				let e = k({
					type: "text",
					id: T(),
					text: r,
					x: l + me,
					y: u - pe,
					width: ge(r, fe),
					height: 24,
					fontSize: fe,
					color: "#1f1f1f",
					groupId: m
				});
				_e(e, m, !1), t.push(e);
			}
		}), { elements: t };
	} });
})), be, xe = e((() => {
	E(), de(), c(), be = new s({ converter: (e) => {
		let t = [];
		return e.nodes.forEach((e) => {
			!e || !e.length || e.forEach((e) => {
				let n;
				switch (e.type) {
					case "line":
						n = O(e);
						break;
					case "rectangle":
					case "ellipse":
						n = A(e);
						break;
					case "text":
						n = k(e);
						break;
					default: throw `unknown type ${e.type}`;
				}
				t.push(n);
			});
		}), Object.values(e.lines).forEach((e) => {
			e && t.push(O(e));
		}), Object.values(e.arrows).forEach((e) => {
			if (!e) return;
			let n = ue(e);
			t.push(n);
		}), Object.values(e.text).forEach((e) => {
			let n = k(e);
			t.push(n);
		}), Object.values(e.namespaces).forEach((n) => {
			let r = Object.keys(n.classes), i = [...r], a = [
				...e.lines,
				...e.arrows,
				...e.text
			];
			r.forEach((e) => {
				let t = a.filter((t) => t.metadata && t.metadata.classId === e).map((e) => e.id);
				t.length && i.push(...t);
			});
			let o = {
				type: "frame",
				id: T(),
				name: n.id,
				children: i
			};
			t.push(o);
		}), { elements: t };
	} });
})), Se, Ce = e((() => {
	de(), c(), Se = new s({ converter: (e) => {
		let t = [];
		return e.nodes.forEach((e) => {
			!e || !e.length || e.forEach((e) => {
				let n;
				switch (e.type) {
					case "line":
						n = O(e);
						break;
					case "rectangle":
					case "ellipse":
						n = A(e);
						break;
					case "text":
						n = k(e);
						break;
					default: throw `unknown type ${e.type}`;
				}
				t.push(n);
			});
		}), e.lines.forEach((e) => {
			t.push(O(e));
		}), e.arrows.forEach((e) => {
			t.push(ue(e));
		}), e.text.forEach((e) => {
			t.push(k(e));
		}), { elements: t };
	} });
})), M, N, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, P, Pe, F, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke = e((() => {
	c(), x(), M = (e, t) => [e, t], N = 16, we = 14, Te = 1, Ee = "#000000", De = 5, Oe = De * 2, ke = De * 2, Ae = 1.25, je = /* @__PURE__ */ new Set([
		"choice",
		"fork",
		"join",
		"stateStart",
		"stateEnd",
		"divider"
	]), Me = (e) => e.shape === "stateEnd" ? [`state_end_group_${e.id}`] : void 0, Ne = (e) => e.shape === "rectWithTitle" && e.description.length ? [e.text, ...e.description].join("\n") : e.text, Pe = () => {
		if (P !== void 0) return P;
		if (typeof document > "u") return P = null, P;
		try {
			P = document.createElement("canvas").getContext("2d");
		} catch {
			P = null;
		}
		return P;
	}, F = (e, t) => {
		let n = Pe();
		return n ? (n.font = `${t}px Excalifont, sans-serif`, n.measureText(e).width) : e.length * t * .6;
	}, Fe = (e, t, n) => {
		if (F(e, t) <= n) return [e];
		let r = [], i = "";
		for (let a of e) {
			let e = `${i}${a}`;
			if (i && F(e, t) > n) {
				r.push(i), i = a;
				continue;
			}
			i = e;
		}
		return i && r.push(i), r;
	}, Ie = (e, t, n) => {
		if (!e.trim() || F(e, t) <= n) return e;
		let r = e.split(/\s+/).filter(Boolean), i = [], a = "";
		for (let e of r) {
			let r = Fe(e, t, n);
			for (let [e, o] of r.entries()) {
				let r = a ? `${a}${a && e === 0 ? " " : ""}${o}` : o;
				if (F(r, t) <= n) {
					a = r;
					continue;
				}
				a && i.push(a), a = o;
			}
			r.length;
		}
		return i.push(a), i.join("\n");
	}, Le = (e, t, n) => {
		let r = e.map((e) => Ie(e, t, n)).join("\n").split("\n");
		return {
			width: Math.max(...r.map((e) => F(e, t))),
			height: r.length * t * Ae
		};
	}, Re = (e, t, n, r) => {
		let i = e.split("\n");
		for (let e = N; e >= we; e -= Te) {
			let { height: r } = Le(i, e, t);
			if (r <= n) return e;
		}
		return r;
	}, ze = (e) => {
		let t = Ne(e);
		if (!t || je.has(e.shape)) return N;
		let n = Math.max(1, e.width - Oe), r = Math.max(1, e.height - ke), i = t.split("\n");
		return i.length > 1 && Math.max(...i.map((e) => F(e, N))) <= n ? N : Re(t, n, r, i.length === 1 ? N : we);
	}, Be = (e) => {
		if (je.has(e.shape)) return;
		let t = Ne(e);
		if (t) return {
			text: t,
			fontSize: ze(e),
			verticalAlign: e.shape === "rectWithTitle" || e.shape === "roundedWithTitle" ? "top" : "middle",
			...b(e.labelStyle)
		};
	}, Ve = (e) => {
		let t = y(e.containerStyle), n = Be(e), r = e.shape === "choice" ? "diamond" : e.shape === "stateStart" || e.shape === "stateEnd" ? "ellipse" : "rectangle", i = e.shape === "rect" || e.shape === "rectWithTitle" || e.shape === "roundedWithTitle", a = e.shape === "stateStart" || e.shape === "fork" || e.shape === "join", o = t.backgroundColor || t.strokeColor || Ee, s = t.strokeColor || t.backgroundColor || Ee;
		return {
			id: e.id,
			type: r,
			...Me(e) ? { groupIds: Me(e) } : {},
			x: e.x,
			y: e.y,
			width: e.width,
			height: e.height,
			...n ? { label: n } : {},
			...t,
			...i ? { roundness: { type: 3 } } : {},
			...a ? {
				backgroundColor: o,
				strokeColor: s,
				fillStyle: "solid"
			} : {}
		};
	}, He = (e) => {
		if (!e.dividerLine) return null;
		let t = y(e.containerStyle);
		return {
			id: `${e.id}__divider`,
			type: "line",
			x: e.dividerLine.startX,
			y: e.dividerLine.startY,
			width: e.dividerLine.endX - e.dividerLine.startX,
			height: e.dividerLine.endY - e.dividerLine.startY,
			points: [M(0, 0), M(e.dividerLine.endX - e.dividerLine.startX, e.dividerLine.endY - e.dividerLine.startY)],
			strokeColor: t.strokeColor || "#000",
			strokeWidth: t.strokeWidth || 1
		};
	}, Ue = (e) => {
		let t = y(e.containerStyle), n = Math.max(2, Math.min(e.width, e.height) * .32), r = e.endInnerColor || t.strokeColor || t.backgroundColor || Ee;
		return {
			id: `${e.id}__inner`,
			type: "ellipse",
			groupIds: Me(e),
			x: e.x + n,
			y: e.y + n,
			width: Math.max(1, e.width - n * 2),
			height: Math.max(1, e.height - n * 2),
			backgroundColor: r,
			strokeColor: r,
			fillStyle: "solid",
			strokeWidth: 1
		};
	}, We = (e) => {
		let t = e.reflectionPoints.map((e, t, n) => {
			let r = n[0];
			return t === 0 ? M(0, 0) : M(e.x - r.x, e.y - r.y);
		});
		return {
			id: e.id,
			type: "arrow",
			x: e.startX,
			y: e.startY,
			width: e.endX - e.startX,
			height: e.endY - e.startY,
			points: t,
			strokeColor: e.strokeColor || "#000",
			strokeWidth: e.strokeWidth || 2,
			strokeStyle: e.strokeStyle || "solid",
			endArrowhead: e.isNoteEdge ? null : "triangle",
			roundness: { type: 2 },
			start: { id: e.start },
			end: { id: e.end },
			...e.text ? { label: {
				text: e.text,
				fontSize: 16
			} } : {}
		};
	}, Ge = new s({ converter: (e) => {
		let t = [];
		return e.nodes.forEach((e) => {
			if (!e.isRenderable) return;
			let n = Ve(e);
			t.push(n);
			let r = He(e);
			r && t.push(r), e.shape === "stateEnd" && t.push(Ue(e));
		}), e.edges.forEach((e) => {
			t.push(We(e));
		}), { elements: t };
	} });
})), I, L, qe, Je, Ye, Xe, Ze, Qe, $e, R = e((() => {
	I = (e) => {
		e = Je(e);
		let t = e.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), n = document.createElement("textarea");
		return n.innerHTML = t, n.value;
	}, L = (e) => {
		let t = e.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/), n = 0, r = 0;
		return t && (n = Number(t[1]), r = Number(t[2])), {
			transformX: n,
			transformY: r
		};
	}, qe = (e) => {
		let t = e;
		return t = t.replace(/style.*:\S*#.*;/g, (e) => e.substring(0, e.length - 1)), t = t.replace(/classDef.*:\S*#.*;/g, (e) => e.substring(0, e.length - 1)), t = t.replace(/#\w+;/g, (e) => {
			let t = e.substring(1, e.length - 1);
			return /^\+?\d+$/.test(t) ? `ﬂ°°${t}¶ß` : `ﬂ°${t}¶ß`;
		}), t;
	}, Je = function(e) {
		return e.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
	}, Ye = .5, Xe = (e, t = Ye) => {
		let n = [];
		return e.forEach((e) => {
			let r = n[n.length - 1];
			if (!r) {
				n.push(e);
				return;
			}
			Math.hypot(e[0] - r[0], e[1] - r[1]) <= t || n.push(e);
		}), n;
	}, Ze = (e) => {
		let t = e.getAttribute("d");
		if (!t) return null;
		let n = Array.from(t.matchAll(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi), (e) => Number(e[0]));
		return n.length < 4 ? null : {
			startX: n[0],
			startY: n[1],
			endX: n[n.length - 2],
			endY: n[n.length - 1]
		};
	}, Qe = (e) => {
		let t = e.getAttribute("data-points");
		if (!t) {
			let t = Ze(e);
			return t ? [{
				x: t.startX,
				y: t.startY
			}, {
				x: t.endX,
				y: t.endY
			}] : [];
		}
		try {
			let e = atob(t), n = JSON.parse(e);
			return Array.isArray(n) ? n.filter((e) => e && typeof e.x == "number" && typeof e.y == "number" && Number.isFinite(e.x) && Number.isFinite(e.y)) : [];
		} catch {
			return [];
		}
	}, $e = (e, t = {
		x: 0,
		y: 0
	}, n = "LM") => {
		if (e.tagName.toLowerCase() !== "path") throw Error(`Invalid input: Expected an HTMLElement of tag "path", got ${e.tagName}`);
		let r = e.getAttribute("d");
		if (!r) throw Error("Path element does not contain a \"d\" attribute");
		let i = r.split(RegExp(`(?=[${n}])`)), a = i[0].substring(1).split(",").map((e) => parseFloat(e)), o = i[i.length - 1].substring(1).split(",").map((e) => parseFloat(e)), s = i.map((e) => {
			let t = e[0], n = e.substring(1).split(",").map((e) => parseFloat(e));
			return t === "C" ? {
				x: n[4],
				y: n[5],
				command: t
			} : {
				x: n[0],
				y: n[1],
				command: t
			};
		}).filter((e, t, n) => {
			if (t === 0 || t === n.length - 1) return !0;
			if (e.x === n[t - 1].x && e.y === n[t - 1].y || t === n.length - 2 && e.command === "C") return !1;
			if (t === n.length - 2 && (n[t - 1].x === e.x || n[t - 1].y === e.y)) {
				let t = n[n.length - 1];
				return Math.hypot(t.x - e.x, t.y - e.y) > 20;
			}
			return e.x !== n[t - 1].x || e.y !== n[t - 1].y;
		}).map((e) => ({
			x: e.x + t.x,
			y: e.y + t.y
		}));
		return {
			startX: a[0] + t.x,
			startY: a[1] + t.y,
			endX: o[0] + t.x,
			endY: o[1] + t.y,
			reflectionPoints: s
		};
	};
})), et, tt, nt = e((() => {
	oe(), ce(), ye(), xe(), Ce(), Ke(), R(), et = (e) => ({
		...e,
		elements: e.elements.map((e) => {
			if (!("points" in e) || !Array.isArray(e.points)) return e;
			let t = e.points;
			if (t.length < 2) return e;
			let n = Xe(t);
			return n.length === t.length ? e : {
				...e,
				points: n
			};
		})
	}), tt = (e, t = {}) => et((() => {
		switch (e.type) {
			case "graphImage": return se.convert(e, t);
			case "flowchart": return ae.convert(e, t);
			case "sequence": return ve.convert(e, t);
			case "class": return be.convert(e, t);
			case "erd": return Se.convert(e, t);
			case "state": return Ge.convert(e, t);
			default: throw Error(`graphToExcalidraw: unknown graph type "${e.type}, only flowcharts are supported!"`);
		}
	})());
})), z, rt, B, V, it, H, U, W = e((() => {
	z = (e) => e.replace(/\s*!important\s*$/i, "").trim(), rt = (e, t) => {
		let n = t;
		for (; n < e.length && /\s/.test(e[n]);) n += 1;
		let r = n;
		for (; n < e.length && /[a-z-]/i.test(e[n]);) n += 1;
		if (n === r) return !1;
		for (; n < e.length && /\s/.test(e[n]);) n += 1;
		return e[n] === ":";
	}, B = (e) => {
		let t = [], n = 0;
		for (; n < e.length;) {
			for (; n < e.length && /[\s;,]/.test(e[n]);) n += 1;
			if (n >= e.length) break;
			let r = n;
			for (; n < e.length && e[n] !== ":" && !(e[n] === ";" || e[n] === ",");) n += 1;
			if (n >= e.length || e[n] !== ":") break;
			let i = e.substring(r, n).trim().toLowerCase();
			n += 1;
			let a = n, o = 0, s = null;
			for (; n < e.length;) {
				let t = e[n];
				if (s) {
					t === s && e[n - 1] !== "\\" && (s = null), n += 1;
					continue;
				}
				if (t === "\"" || t === "'") {
					s = t, n += 1;
					continue;
				}
				if (t === "(") {
					o += 1, n += 1;
					continue;
				}
				if (t === ")") {
					o = Math.max(0, o - 1), n += 1;
					continue;
				}
				if (o === 0 && (t === ";" || t === "," || /\s/.test(t) && rt(e, n))) break;
				n += 1;
			}
			let c = z(e.substring(a, n));
			i && c && t.push({
				property: i,
				value: c
			}), n < e.length && (e[n] === ";" || e[n] === ",") && (n += 1);
		}
		return t;
	}, V = (e) => {
		let t = z(e);
		if (!t) return !1;
		if (typeof CSS < "u" && typeof CSS.supports == "function") return CSS.supports("color", t);
		if (typeof document < "u") {
			let e = document.createElement("div");
			return e.style.color = "", e.style.color = t, e.style.color !== "";
		}
		return !1;
	}, it = (e, t) => {
		let n = e.getAttribute("style");
		return n && B(n).find((e) => e.property === t)?.value || "";
	}, H = (...e) => {
		for (let t of e) {
			let e = z(t || "");
			if (V(e)) return e;
		}
	}, U = (e, t) => {
		let n = e.querySelector("text, foreignObject, div, span, p") || e, r = H(n.getAttribute?.("fill"), it(n, "fill"), n.style?.fill);
		if (r) return r;
		let i = H(n.getAttribute?.("color"), it(n, "color"), n.style?.color);
		if (i) return i;
		let a = H(t);
		if (a) return a;
	};
})), at, G, K, ot, st, ct, lt, ut, dt, ft, pt, mt, ht = e((() => {
	R(), f(), W(), at = (e, t, n) => {
		switch (t) {
			case d.FILL:
			case d.STROKE:
				V(n) && (e[t] = n);
				break;
			case d.STROKE_WIDTH:
			case d.STROKE_DASHARRAY:
				e[t] = n;
				break;
		}
	}, G = (e, t, n) => {
		t === u.COLOR && V(n) && (e[u.COLOR] = n);
	}, K = (e, t, n) => {
		e && B(e).forEach(({ property: e, value: r }) => {
			at(t, e, r), G(n, e, r);
		});
	}, ot = (e, t) => {
		e && B(e).forEach(({ property: e, value: n }) => {
			if (e === "fill" && V(n)) {
				t[u.COLOR] = n;
				return;
			}
			G(t, e, n);
		});
	}, st = (e, t) => {
		e && [
			[d.FILL, e.getAttribute("fill")],
			[d.STROKE, e.getAttribute("stroke")],
			[d.STROKE_WIDTH, e.getAttribute("stroke-width")],
			[d.STROKE_DASHARRAY, e.getAttribute("stroke-dasharray")]
		].forEach(([e, n]) => {
			let r = z(n || "");
			r && at(t, e, r);
		});
	}, ct = (e, t) => {
		if (!e) return;
		let n = z(e.getAttribute("fill") || e.getAttribute("color") || "");
		V(n) && (t[u.COLOR] = n);
	}, lt = (e, t, n, r) => {
		if (!(t instanceof Map)) return;
		let i = t.get(e);
		i && (i.styles?.forEach((e) => {
			B(e).forEach(({ property: e, value: t }) => {
				at(n, e, t), G(r, e, t);
			});
		}), i.textStyles?.forEach((e) => {
			B(e).forEach(({ property: e, value: t }) => {
				G(r, e, t);
			});
		}));
	}, ut = (e, t, n) => {
		let r = e.nodes.map((e) => e.startsWith("flowchart-") ? e.split("-")[1] : e), i = t.querySelector(`[id='${e.id}']`);
		if (!i) throw Error("SubGraph element not found");
		let a = pt(i, t), o = i.getBBox(), s = {
			width: o.width,
			height: o.height
		}, c = {}, l = {}, u = i.querySelector(":scope > rect, :scope > path, :scope > polygon, :scope > ellipse") || i.querySelector(".cluster > rect, .cluster > path, .cluster > polygon, .cluster > ellipse") || i.querySelector("rect, path, polygon, ellipse");
		K(i.getAttribute("style"), c, l), K(u?.getAttribute("style"), c, l), st(u, c);
		let d = i.querySelector(".cluster-label text, .cluster-label tspan") || i.querySelector("text");
		return ot(d?.getAttribute("style"), l), ct(d, l), lt(e.id, n, c, l), e.classes?.forEach((e) => {
			lt(e, n, c, l);
		}), {
			id: e.id,
			nodeIds: r,
			text: I(e.title),
			labelType: "text",
			...a,
			...s,
			containerStyle: c,
			labelStyle: l
		};
	}, dt = (e, t, n) => {
		let r = t.querySelector(`[id*="${e.domId}"]`);
		if (!r) return;
		let i;
		r.parentElement?.tagName.toLowerCase() === "a" && (i = r.parentElement.getAttribute("xlink:href"));
		let a = pt(i ? r.parentElement : r, t), o = r.getBBox(), s = {
			width: o.width,
			height: o.height
		}, c = {}, l = {};
		e.classes && n instanceof Map && (Array.isArray(e.classes) ? e.classes : [e.classes]).forEach((e) => {
			lt(e, n, c, l);
		}), e.styles?.forEach((e) => {
			K(e, c, l);
		});
		let u = r.querySelector(".label-container");
		return K(u?.getAttribute("style"), c, l), st(u, c), Array.from(r.querySelectorAll(".label, .nodeLabel, .label text, .label tspan, .label span, .label div")).forEach((e) => {
			ot(e.getAttribute("style"), l), ct(e, l);
		}), {
			id: e.id,
			labelType: e.labelType,
			text: I(e.text || ""),
			type: e.type,
			link: i || void 0,
			...a,
			...s,
			containerStyle: c,
			labelStyle: l
		};
	}, ft = (e, t, n) => {
		let r = n.querySelector(`[id*="${e.id}"]`);
		if (!r) throw Error("Edge element not found");
		let i = $e(r, pt(r, n));
		return e.length = void 0, {
			...e,
			...i,
			text: I(e.text)
		};
	}, pt = (e, t) => {
		if (!e) throw Error("Element not found");
		let n = e.parentElement?.parentElement, r = e.childNodes[0], i = {
			x: 0,
			y: 0
		};
		if (r) {
			let { transformX: e, transformY: t } = L(r), n = r.getBBox();
			i = {
				x: Number(r.getAttribute("x")) || e + n.x || 0,
				y: Number(r.getAttribute("y")) || t + n.y || 0
			};
		}
		let { transformX: a, transformY: o } = L(e), s = {
			x: a + i.x,
			y: o + i.y
		};
		for (; n && n.id !== t.id;) {
			if (n.classList.value === "root" && n.hasAttribute("transform")) {
				let { transformX: e, transformY: t } = L(n);
				s.x += e, s.y += t;
			}
			n = n.parentElement;
		}
		return s;
	}, mt = (e, t) => {
		let n = e.getVertices(), r = e.getEdges(), i = e.getSubGraphs(), a = e.getClasses(), o = {}, s = a instanceof Map ? a : {};
		n instanceof Map ? n.forEach((e, n) => {
			o[n] = dt(e, t, s);
		}) : typeof n == "object" && n && Object.entries(n).forEach(([e, n]) => {
			o[e] = dt(n, t, s);
		});
		let c = /* @__PURE__ */ new Map(), l = (Array.isArray(r) ? r : []).map((e) => {
			if (!t.querySelector(`[id*="${e.id}"]`)) return null;
			let n = `${e.start}-${e.end}`, r = c.get(n) || 0;
			return c.set(n, r + 1), ft(e, r, t);
		}).filter((e) => e !== null && e.reflectionPoints.length > 1);
		return {
			type: "flowchart",
			subGraphs: (Array.isArray(i) ? i : []).map((e) => ut(e, t, s)),
			vertices: o,
			edges: l
		};
	};
})), gt, _t, q, vt, J, Y, yt = e((() => {
	R(), o(), W(), gt = (e, t) => {
		let n = {};
		t?.label && (n.label = {
			text: I(t.label),
			fontSize: 16
		});
		let r = e.tagName;
		if (r === "line") n.startX = Number(e.getAttribute("x1")), n.startY = Number(e.getAttribute("y1")), n.endX = Number(e.getAttribute("x2")), n.endY = Number(e.getAttribute("y2"));
		else if (r === "path") {
			let t = e.getAttribute("d");
			if (!t) throw Error("Path element does not contain a \"d\" attribute");
			let r = t.split(/(?=[LC])/), i = r[0].substring(1).split(",").map((e) => parseFloat(e)), a = [];
			r.forEach((e) => {
				let t = e.substring(1).trim().split(" ").map((e) => {
					let [t, n] = e.split(",");
					return [parseFloat(t) - i[0], parseFloat(n) - i[1]];
				});
				a.push(...t);
			});
			let o = a[a.length - 1];
			n.startX = i[0], n.startY = i[1], n.endX = o[0], n.endY = o[1], n.points = a;
		}
		t?.label && (n.startY -= 10, n.endY -= 10);
		let i = e.getAttribute("stroke"), a = (i && i !== "none" ? i : "") || getComputedStyle(e).stroke || "";
		return n.strokeColor = a ? z(a) : null, n.strokeWidth = Number(e.getAttribute("stroke-width")), n.type = "arrow", n.strokeStyle = t?.strokeStyle || "solid", n.startArrowhead = t?.startArrowhead || null, n.endArrowhead = t?.endArrowhead || null, n;
	}, _t = (e, t, n, r, i) => {
		let a = {};
		return a.type = "arrow", a.startX = e, a.startY = t, a.endX = n, a.endY = r, Object.assign(a, { ...i }), a;
	}, q = (e, t, n, r) => ({
		type: "text",
		x: e,
		y: t,
		text: n,
		width: r?.width || 20,
		height: r?.height || 20,
		fontSize: r?.fontSize || 20,
		id: r?.id,
		color: r?.color,
		groupId: r?.groupId,
		metadata: r?.metadata
	}), vt = (e, t, n) => {
		let r = {}, i = Number(e.getAttribute("x")), a = Number(e.getAttribute("y"));
		r.type = "text", r.text = I(t), n?.id && (r.id = n.id), n?.groupId && (r.groupId = n.groupId);
		let o = e.getBBox();
		return r.width = o.width, r.height = o.height, r.x = i - o.width / 2, r.y = a, r.fontSize = parseInt(getComputedStyle(e).fontSize), r.color = U(e), r;
	}, J = (e, t, n = {}) => {
		let r = {};
		r.type = t;
		let { label: i, subtype: a, id: o, groupId: s } = n;
		r.id = o, s && (r.groupId = s), i && (r.label = {
			text: I(i.text),
			fontSize: 16,
			textAlign: i?.textAlign,
			verticalAlign: i?.verticalAlign
		});
		let c = e.getBBox();
		switch (r.x = c.x, r.y = c.y, r.width = c.width, r.height = c.height, r.subtype = a, a) {
			case "highlight":
				let t = e.getAttribute("fill");
				t && (r.bgColor = z(t));
				break;
			case "note":
				r.strokeStyle = "dashed";
				break;
		}
		return r;
	}, Y = (e, t, n, r, i, a) => {
		let o = {};
		o.startX = t, o.startY = n, o.endX = r, a?.groupId && (o.groupId = a.groupId), a?.id && (o.id = a.id), o.endY = i;
		let s = e.getAttribute("stroke");
		return o.strokeColor = s ? z(s) : null, o.strokeWidth = Number(e.getAttribute("stroke-width")), o.type = "line", o;
	};
})), bt, X, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt = e((() => {
	o(), E(), yt(), W(), bt = {
		0: "SOLID",
		1: "DOTTED",
		3: "SOLID_CROSS",
		4: "DOTTED_CROSS",
		5: "SOLID_OPEN",
		6: "DOTTED_OPEN",
		24: "SOLID_POINT",
		25: "DOTTED_POINT"
	}, X = {
		SOLID: 0,
		DOTTED: 1,
		NOTE: 2,
		SOLID_CROSS: 3,
		DOTTED_CROSS: 4,
		SOLID_OPEN: 5,
		DOTTED_OPEN: 6,
		LOOP_START: 10,
		LOOP_END: 11,
		ALT_START: 12,
		ALT_ELSE: 13,
		ALT_END: 14,
		OPT_START: 15,
		OPT_END: 16,
		ACTIVE_START: 17,
		ACTIVE_END: 18,
		PAR_START: 19,
		PAR_AND: 20,
		PAR_END: 21,
		RECT_START: 22,
		RECT_END: 23,
		SOLID_POINT: 24,
		DOTTED_POINT: 25,
		AUTONUMBER: 26,
		CRITICAL_START: 27,
		CRITICAL_OPTION: 28,
		CRITICAL_END: 29,
		BREAK_START: 30,
		BREAK_END: 31,
		PAR_OVER_START: 32
	}, xt = (e) => {
		let t;
		switch (e) {
			case X.SOLID:
			case X.SOLID_CROSS:
			case X.SOLID_OPEN:
			case X.SOLID_POINT:
				t = "solid";
				break;
			case X.DOTTED:
			case X.DOTTED_CROSS:
			case X.DOTTED_OPEN:
			case X.DOTTED_POINT:
				t = "dotted";
				break;
			default:
				t = "solid";
				break;
		}
		return t;
	}, St = (e, t) => {
		if (e.nextElementSibling?.classList.contains("sequenceNumber")) {
			let n = e.nextElementSibling?.textContent;
			if (!n) throw Error("sequence number not present");
			let r = {
				type: "rectangle",
				x: t.startX - 10,
				y: t.startY - 15,
				label: {
					text: n,
					fontSize: 14
				},
				bgColor: "#e9ecef",
				height: 30,
				subtype: "sequence"
			};
			Object.assign(t, { sequenceNumber: r });
		}
	}, Ct = (e, t, n) => {
		if (!e) throw "root node not found";
		let r = T(), a = Array.from(e.children), o = [];
		return a.forEach((e, a) => {
			let s = `${n?.id}-${a}`, c;
			switch (e.tagName) {
				case "line":
					c = Y(e, Number(e.getAttribute("x1")), Number(e.getAttribute("y1")), Number(e.getAttribute("x2")), Number(e.getAttribute("y2")), {
						groupId: r,
						id: s
					});
					break;
				case "text":
					c = vt(e, t, {
						groupId: r,
						id: s
					});
					break;
				case "circle": c = J(e, "ellipse", {
					label: e.textContent ? { text: e.textContent } : void 0,
					groupId: r,
					id: s
				});
				default: c = J(e, i[e.tagName], {
					label: e.textContent ? { text: e.textContent } : void 0,
					groupId: r,
					id: s
				});
			}
			o.push(c);
		}), o;
	}, wt = (e, t) => {
		let n = t.getAttribute("fill"), r = t.getAttribute("stroke"), i = t.getAttribute("stroke-width"), a = t.getAttribute("stroke-dasharray");
		n && n !== "none" && (e.bgColor = z(n)), r && r !== "none" && (e.strokeColor = z(r)), i && (e.strokeWidth = Number(i)), a && a.trim() && (e.strokeStyle = "dashed");
	}, Tt = (e, t) => {
		let n = Array.from(t.querySelectorAll(".actor-top")), r = Array.from(t.querySelectorAll(".actor-bottom")), i = [], a = [], o = {}, s = e instanceof Map ? Array.from(e.values()) : Object.values(e), c = Array.from(t.querySelectorAll(".actor-line")), l = (e, t) => {
			let n = e.name, r = c.find((e) => e.getAttribute("name") === n);
			if (r) return r;
			let i = e.type === "participant" ? t.parentElement?.previousElementSibling : t.previousElementSibling;
			return i ? i.tagName === "line" ? i : i.querySelector("line") : null;
		};
		return s.forEach((e) => {
			let t = n.find((t) => t.getAttribute("name") === e.name), s = r.find((t) => t.getAttribute("name") === e.name);
			if (!t || !s) throw "root not found";
			let c = e.description;
			if (e.type === "participant") {
				let n = J(t, "rectangle", {
					id: `${e.name}-top`,
					label: { text: c },
					subtype: "actor"
				});
				if (wt(n, t), !n) throw "Top Node element not found!";
				i.push([n]);
				let r = J(s, "rectangle", {
					id: `${e.name}-bottom`,
					label: { text: c },
					subtype: "actor"
				});
				o[e.name] = {
					topId: `${e.name}-top`,
					bottomId: `${e.name}-bottom`,
					bindType: "rectangle"
				}, wt(r, s), i.push([r]);
				let u = l(e, t);
				if (u?.tagName !== "line") throw "Line not found";
				let d = Number(u.getAttribute("x1"));
				if (!n.height) throw "Top node element height is null";
				let f = n.y + n.height, p = r.y, m = Y(u, d, f, Number(u.getAttribute("x2")), p);
				a.push(m);
			} else if (e.type === "actor") {
				let n = Ct(t, c, { id: `${e.name}-top` });
				i.push(n);
				let r = Ct(s, c, { id: `${e.name}-bottom` });
				i.push(r);
				let u = l(e, t);
				if (u?.tagName !== "line") throw "Line not found";
				let d = Number(u.getAttribute("x1")), f = Number(u.getAttribute("y1")), p = Number(u.getAttribute("x2")), m = r.find((e) => e.type === "ellipse");
				if (m) {
					let e = m.y, t = Y(u, d, f, p, e);
					a.push(t);
				}
				let h = n.find((e) => e.type === "ellipse"), g = r.find((e) => e.type === "ellipse");
				h?.id && g?.id && (o[e.name] = {
					topId: h.id,
					bottomId: g.id,
					bindType: "ellipse"
				});
			}
		}), {
			nodes: i,
			lines: a,
			actorMap: o
		};
	}, Et = (e, t, n) => {
		let r = [], i = Array.from(t.querySelectorAll("[class*=\"messageLine\"]")), a = Object.keys(bt), o = e.filter((e) => a.includes(e.type.toString()));
		return i.forEach((e, t) => {
			let i = o[t], a = bt[i.type], s = gt(e, {
				label: i?.message,
				strokeStyle: xt(i.type),
				endArrowhead: a === "SOLID_OPEN" || a === "DOTTED_OPEN" ? null : "arrow"
			}), c = n[i.from], l = n[i.to];
			c?.topId && l?.topId && (s.start = {
				type: c.bindType || "rectangle",
				id: c.topId
			}, s.end = {
				type: l.bindType || "rectangle",
				id: l.topId
			}), St(e, s), r.push(s);
		}), r;
	}, Dt = (e, t) => {
		let n = Array.from(t.querySelectorAll(".note")).map((e) => e.parentElement), r = e.filter((e) => e.type === X.NOTE), i = [];
		return n.forEach((e, t) => {
			if (!e) return;
			let n = e.firstChild, a = r[t].message, o = J(n, "rectangle", {
				label: { text: a },
				subtype: "note"
			}), s = n.getAttribute("fill"), c = n.getAttribute("stroke"), l = n.getAttribute("stroke-width"), u = n.getAttribute("stroke-dasharray");
			s && s !== "none" && (o.bgColor = z(s)), c && c !== "none" && (o.strokeColor = z(c)), l && (o.strokeWidth = Number(l)), u && u.trim() && (o.strokeStyle = "dashed"), i.push(o);
		}), i;
	}, Ot = (e) => {
		let t = Array.from(e.querySelectorAll("[class*=activation]")), n = [];
		return t.forEach((e) => {
			let t = J(e, "rectangle", {
				label: { text: "" },
				subtype: "activation"
			});
			(() => {
				let n = e.getAttribute("fill"), r = e.getAttribute("stroke"), i = e.getAttribute("stroke-width"), a = e.getAttribute("stroke-dasharray");
				n && n !== "none" && (t.bgColor = z(n)), r && r !== "none" && (t.strokeColor = z(r)), i && (t.strokeWidth = Number(i)), a && a.trim() && (t.strokeStyle = "dashed");
			})(), n.push(t);
		}), n;
	}, kt = (e, t) => {
		let n = Array.from(t.querySelectorAll(".loopLine")), r = [], i = [], a = [];
		n.forEach((e) => {
			let t = Y(e, Number(e.getAttribute("x1")), Number(e.getAttribute("y1")), Number(e.getAttribute("x2")), Number(e.getAttribute("y2")));
			t.strokeStyle = "dotted", t.strokeColor = "#adb5bd", t.strokeWidth = 2, r.push(t);
		});
		let o = Array.from(t.querySelectorAll(".loopText")), s = e.filter((e) => e.type === X.CRITICAL_START).map((e) => e.message);
		o.forEach((e) => {
			let t = e.textContent || "", n = vt(e, t), r = t.match(/\[(.*?)\]/)?.[1] || "";
			s.includes(r) && (n.x += 16), i.push(n);
		});
		let c = Array.from(t?.querySelectorAll(".labelBox")), l = Array.from(t?.querySelectorAll(".labelText"));
		return c.forEach((e, t) => {
			let n = J(e, "rectangle", { label: { text: l[t]?.textContent || "" } });
			n.strokeColor = "#adb5bd", n.bgColor = "#e9ecef", n.width = void 0, a.push(n);
		}), {
			lines: r,
			texts: i,
			nodes: a
		};
	}, At = (e) => {
		let t = Array.from(e.querySelectorAll(".rect")).filter((e) => e.parentElement?.tagName !== "g"), n = [];
		return t.forEach((e) => {
			let t = J(e, "rectangle", {
				label: { text: "" },
				subtype: "highlight"
			});
			n.push(t);
		}), n;
	}, jt = (e, t) => {
		let n = e.db, r = [], i = n.getBoxes().map((e) => ({
			...e,
			fill: z(e.fill || "")
		})), a = At(t), { nodes: o, lines: s, actorMap: c } = Tt(n.getActors(), t), l = n.getMessages(), u = Et(l, t, c), d = Dt(l, t), f = Ot(t), p = kt(l, t);
		return r.push(a), r.push(...o), r.push(d), r.push(f), {
			type: "sequence",
			lines: s,
			arrows: u,
			nodes: r,
			loops: p,
			groups: i
		};
	};
})), Nt, Z, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on = e((() => {
	E(), R(), yt(), W(), Nt = (e) => {
		let t = {};
		return e && e.forEach((e) => {
			B(e).forEach(({ property: e, value: n }) => {
				e && n && (t[e] = z(n));
			});
		}), t;
	}, Z = {
		AGGREGATION: 0,
		EXTENSION: 1,
		COMPOSITION: 2,
		DEPENDENCY: 3,
		LOLLIPOP: 4
	}, Pt = {
		LINE: 0,
		DOTTED_LINE: 1
	}, Ft = 16, It = (e) => {
		let t;
		switch (e) {
			case Pt.LINE:
				t = "solid";
				break;
			case Pt.DOTTED_LINE:
				t = "dotted";
				break;
			default: t = "solid";
		}
		return t;
	}, Lt = (e) => {
		let t;
		switch (e) {
			case Z.AGGREGATION:
				t = "diamond_outline";
				break;
			case Z.COMPOSITION:
				t = "diamond";
				break;
			case Z.EXTENSION:
				t = "triangle_outline";
				break;
			case "none":
				t = null;
				break;
			case Z.DEPENDENCY:
			default:
				t = "arrow";
				break;
		}
		return t;
	}, Rt = (e, t) => {
		let n = 0, r = 0, i = e;
		for (; i && i !== t;) {
			let { transformX: e, transformY: t } = L(i);
			n += e, r += t, i = i.parentElement;
		}
		return {
			tx: n,
			ty: r
		};
	}, zt = /* @__PURE__ */ new Set([
		"triangle_outline",
		"diamond",
		"diamond_outline"
	]), Bt = (e, t = .5) => {
		if (e.length <= 2) return [...e];
		let n = [e[0]];
		for (let r = 1; r < e.length - 1; r++) {
			let i = n[n.length - 1], a = e[r], o = e[r + 1], s = o.x - i.x, c = o.y - i.y, l = Math.hypot(s, c);
			if (!l) continue;
			let u = Math.abs(s * (a.y - i.y) - c * (a.x - i.x)) / l, d = ((a.x - i.x) * s + (a.y - i.y) * c) / (l * l);
			u <= t && d >= -t && d <= 1 + t || n.push(a);
		}
		return n.push(e[e.length - 1]), n;
	}, Vt = (e) => {
		let t = Xe(Qe(e).map((e) => [e.x, e.y])).map(([e, t]) => ({
			x: e,
			y: t
		})), n = Ze(e);
		return n && t.length >= 2 && (t[0] = {
			x: n.startX,
			y: n.startY
		}, t[t.length - 1] = {
			x: n.endX,
			y: n.endY
		}), Bt(t);
	}, Ht = (e, t, n) => {
		let r = e.x - t.x, i = e.y - t.y, a = Math.hypot(r, i);
		return a ? {
			x: e.x + r / a * n,
			y: e.y + i / a * n
		} : e;
	}, Ut = (e, t) => {
		let n = Xe(t.map((e) => [e.x, e.y])).map(([e, t]) => ({
			x: e,
			y: t
		}));
		if (n.length < 2) throw Error("Arrow route must contain at least two points");
		let r = n[0], i = n[n.length - 1];
		e.startX = r.x, e.startY = r.y, e.endX = i.x, e.endY = i.y, e.points = n.map((e) => [e.x - r.x, e.y - r.y]);
	}, Wt = (e) => {
		let t = e.points?.map(([t, n]) => ({
			x: e.startX + t,
			y: e.startY + n
		})).filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y));
		if (!t || t.length < 2) return e;
		let n = [...t], r = !!e.startArrowhead && zt.has(e.startArrowhead), i = !!e.endArrowhead && zt.has(e.endArrowhead);
		if (!r && !i) return e;
		if (r && (n[0] = Ht(n[0], n[1], Ft)), i) {
			let e = n.length - 1;
			n[e] = Ht(n[e], n[e - 1], Ft);
		}
		return Ut(e, n), e;
	}, Gt = (e, t) => {
		let n = z(e.getAttribute("stroke") || getComputedStyle(e).stroke || ""), r = parseFloat(e.getAttribute("stroke-width") || getComputedStyle(e).strokeWidth || "1");
		V(n) && n !== "none" && (t.strokeColor = n), Number.isFinite(r) && r > 0 && (t.strokeWidth = r);
	}, Kt = (e) => {
		let t = [];
		return e.forEach((e) => {
			Vt(e).forEach((e) => {
				let n = t[t.length - 1];
				n && n.x === e.x && n.y === e.y || t.push(e);
			});
		}), Bt(t);
	}, qt = (e, t, n) => {
		if (e.length < 2) throw Error(`Class diagram edge ${t?.id || "<unknown>"} is missing usable path points`);
		let r = e[0], i = e[e.length - 1], a = _t(r.x, r.y, i.x, i.y, {
			id: t?.getAttribute("data-id") || t?.id || void 0,
			...n,
			points: e.map((e) => [e.x - r.x, e.y - r.y])
		});
		return t && Gt(t, a), Wt(a);
	}, Jt = (e, t) => qt(Kt(e), e[0], t), Yt = (e, t) => {
		let n = Vt(e);
		return qt([n[0], n[n.length - 1]], e, t);
	}, Xt = (e, t) => Jt([e], t), Zt = (e, t) => [
		`${e}-cyclic-special-1`,
		`${e}-cyclic-special-mid`,
		`${e}-cyclic-special-2`
	].map((e) => t.querySelector(`path[id="${e}"][data-edge="true"]`)).filter((e) => e !== null), Qt = (e) => e.points?.map(([t, n]) => ({
		x: e.startX + t,
		y: e.startY + n
	})).filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y)) || [], $t = (e, t) => {
		let n = Qt(e);
		if (n.length < 2) return null;
		let r = t === "start", i = r ? n[0] : n[n.length - 1], a = r ? n[1] : n[n.length - 2], o = a.x === i.x ? r ? -1 : 1 : Math.sign(a.x - i.x), s = a.y === i.y ? 1 : Math.sign(a.y - i.y);
		return {
			x: i.x + o * 20,
			y: i.y + (s >= 0 ? 12 : -28)
		};
	}, en = (e, t) => {
		let n = e;
		for (; n && n !== t;) {
			if (n.classList.contains("annotation-group") || n.classList.contains("label-group")) return "header";
			if (n.classList.contains("members-group")) return "members";
			if (n.classList.contains("methods-group")) return "methods";
			n = n.parentElement;
		}
		return "other";
	}, tn = (e, t, n) => {
		let r = [], i = [], a = [];
		return Object.values(e).forEach((e) => {
			let { domId: o, id: s } = e, c = T(), l = Nt(e.styles || e.cssStyles), u;
			try {
				u = n ? n(s) : void 0;
			} catch {
				u = void 0;
			}
			let d = u && t.querySelector(`#${u}`) || t.querySelector(`#${o}`) || t.querySelector(`[data-id='${s}']`) || ((e) => {
				let n = RegExp(`^classId-${e}(?:-|$)`);
				return Array.from(t.querySelectorAll("[id]")).filter((e) => n.test(e.id))[0];
			})(s);
			if (!d) throw Error(`DOM Node with id ${o} not found`);
			let f = d.querySelector("rect") || d, p = f.getBBox(), { tx: m, ty: h } = Rt(f, t), g = {
				type: "rectangle",
				id: s,
				groupId: c,
				x: p.x + m,
				y: p.y + h,
				width: p.width,
				height: p.height,
				metadata: { classId: s }
			}, _ = f.getAttribute("fill"), v = f.getAttribute("stroke"), y = f.getAttribute("stroke-width"), b = f.getAttribute("stroke-dasharray"), x = getComputedStyle(f), ee = z(_ || l.fill || (_ ? x.fill : "")), te = z(v || l.stroke || (v ? x.stroke : "")), S = y || l["stroke-width"] || (y ? x.strokeWidth : ""), ne = b || l["stroke-dasharray"] || (b ? x.strokeDasharray === "none" ? "" : x.strokeDasharray : ""), re = (e) => {
				if (!e || !V(e)) return !1;
				let t = e.toLowerCase();
				return !(t === "none" || t === "transparent" || t === "rgba(0, 0, 0, 0)" || t === "black" || t === "#000" || t === "#000000" || t === "rgb(0, 0, 0)" || t === "rgba(0, 0, 0, 1)");
			};
			re(ee) ? g.bgColor = ee : g.bgColor = void 0, re(te) ? g.strokeColor = te : g.strokeColor = void 0, S ? g.strokeWidth = Number(S) : g.strokeWidth = void 0, ne && ne.trim().length > 0 ? g.strokeStyle = "dashed" : g.strokeStyle = void 0, r.push(g), [...Array.from(d.querySelectorAll("line")), ...Array.from(d.querySelectorAll("g.divider path"))].forEach((e) => {
				let { tx: n, ty: r } = Rt(e, t), a, o, l, u;
				if (e.tagName.toLowerCase() === "line") a = Number(e.getAttribute("x1")) + n, o = Number(e.getAttribute("y1")) + r, l = Number(e.getAttribute("x2")) + n, u = Number(e.getAttribute("y2")) + r;
				else {
					let t = e.getBBox();
					a = t.x + n, l = t.x + t.width + n;
					let i = t.y + t.height / 2 + r;
					o = i, u = i;
				}
				if (a === l && o === u) return;
				let d = Y(e, a, o, l, u, {
					groupId: c,
					id: T()
				});
				g.strokeColor ? d.strokeColor = g.strokeColor : d.strokeColor = void 0, g.strokeWidth === void 0 ? d.strokeWidth = void 0 : d.strokeWidth = g.strokeWidth, g.strokeStyle ? d.strokeStyle = g.strokeStyle : d.strokeStyle = void 0, d.metadata = { classId: s }, i.push(d);
			});
			let ie = Array.from(d.querySelectorAll("text, foreignObject")), C = [];
			ie.forEach((e) => {
				let n = e.tagName.toLowerCase() === "foreignobject", r = n ? [] : Array.from(e.querySelectorAll("tspan")), i = r.length ? r.map((e) => e.textContent?.trim()).filter(Boolean).join("\n") : e.textContent?.trim() || "";
				if (!i) return;
				let a = e.getBBox(), { ty: o } = Rt(e, t), s = parseFloat(getComputedStyle(e).fontSize || "");
				if (n && (!Number.isFinite(s) || !s)) {
					let t = e.querySelector("div, span, p");
					t && (s = parseFloat(getComputedStyle(t).fontSize || ""));
				}
				(!Number.isFinite(s) || s <= 0) && (s = Math.max(12, a.height * .6)), s *= .9;
				let c = U(e, l.color);
				C.push({
					section: en(e, d),
					text: I(i),
					x: a.x,
					y: a.y + o,
					width: g && g.width ? Math.max(g.width - 8, a.width) : a.width,
					height: a.height,
					fontSize: s,
					color: c
				});
			});
			let w = C.filter((e) => e.section === "header").sort((e, t) => e.y - t.y || e.x - t.x);
			if (!g.label) {
				let e = w.length === 0 && C.length === 1 ? C : w;
				e.length > 0 && (g.label = {
					text: e.map((e) => e.text).join("\n"),
					fontSize: Math.max(...e.map((e) => e.fontSize)),
					color: e.find((e) => e.color)?.color,
					verticalAlign: "top"
				});
			}
			C.filter((e) => w.length > 0 ? e.section !== "header" : !(g.label && C.length === 1)).forEach((e) => {
				let t = q((g?.x || 0) + 4, e.y, e.text, {
					width: e.width,
					height: e.height,
					fontSize: e.fontSize,
					color: e.color,
					id: T(),
					groupId: c,
					metadata: { classId: s }
				});
				a.push(t);
			});
		}), {
			nodes: r,
			lines: i,
			text: a
		};
	}, nn = (e, t, n, r) => {
		let i = Array.from(n.querySelectorAll(".edgePaths path[data-edge=\"true\"]:not([id^=\"edgeNote\"]):not([id*=\"-cyclic-special-\"])"));
		if (e.length === 0) return {
			arrows: [],
			text: []
		};
		let a = [], o = [], s = 0;
		return e.forEach((e) => {
			let { id1: c, id2: l, relation: u } = e, d = t.find((e) => e.id === c), f = t.find((e) => e.id === l);
			if (!d) throw Error(`parseRelations: Cannot find node with id ${c}`);
			if (!f) throw Error(`parseRelations: Cannot find node with id ${l}`);
			let p = It(u.lineType), m = Lt(u.type1), h = Lt(u.type2), g;
			if (c === l) {
				let t = Zt(c, n);
				if (!t.length) throw Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${l}`);
				g = Jt(t, {
					strokeStyle: p,
					startArrowhead: m,
					endArrowhead: h,
					label: e.title ? { text: e.title } : void 0,
					start: {
						type: "rectangle",
						id: d.id
					},
					end: {
						type: "rectangle",
						id: f.id
					}
				});
			} else {
				let t = i[s];
				if (!t) throw Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${l}`);
				s += 1, g = Yt(t, {
					strokeStyle: p,
					startArrowhead: m,
					endArrowhead: h,
					label: e.title ? { text: e.title } : void 0,
					start: {
						type: "rectangle",
						id: d.id
					},
					end: {
						type: "rectangle",
						id: f.id
					}
				});
			}
			a.push(g);
			let { relationTitle1: _, relationTitle2: v } = e, y = c === l, b, x;
			if (_ && _ !== "none") {
				if (y) {
					let e = $t(g, "start");
					e && (b = e.x, x = e.y);
				} else switch (r) {
					case "TB":
						b = g.startX - 20, g.endX < g.startX && (b -= 15), x = g.startY + 15;
						break;
					case "BT":
						b = g.startX + 20, g.endX > g.startX && (b += 15), x = g.startY - 15;
						break;
					case "LR":
						b = g.startX + 20, x = g.startY + 15, g.endY > g.startY && (x += 15);
						break;
					case "RL":
						b = g.startX - 20, x = g.startY - 15, g.startY > g.endY && (x -= 15);
						break;
					default: b = g.startX - 20, x = g.startY + 15;
				}
				b ??= g.startX - 20, x ??= g.startY + 15;
				let e = q(b, x, _, { fontSize: 16 });
				o.push(e);
			}
			if (v && v !== "none") {
				if (y) {
					let e = $t(g, "end");
					e && (b = e.x, x = e.y);
				} else switch (r) {
					case "TB":
						b = g.endX + 20, g.endX < g.startX && (b += 15), x = g.endY - 15;
						break;
					case "BT":
						b = g.endX - 20, g.endX > g.startX && (b -= 15), x = g.endY + 15;
						break;
					case "LR":
						b = g.endX - 20, x = g.endY - 15, g.endY > g.startY && (x -= 15);
						break;
					case "RL":
						b = g.endX + 20, x = g.endY + 15, g.startY > g.endY && (x += 15);
						break;
					default: b = g.endX + 20, x = g.endY - 15;
				}
				b ??= g.endX + 20, x ??= g.endY + 15;
				let e = q(b, x, v, { fontSize: 16 });
				o.push(e);
			}
		}), {
			arrows: a,
			text: o
		};
	}, rn = (e, t, n) => {
		let r = [], i = [];
		return e.forEach((e, a) => {
			let { id: o, text: s, class: c } = e, l = t.querySelector(`#${o}`);
			if (!l) throw Error(`Node with id ${o} not found!`);
			let { transformX: u, transformY: d } = L(l), f = l.firstChild, p = J(f, "rectangle", {
				id: o,
				subtype: "note",
				label: { text: s }
			});
			if (Object.assign(p, {
				x: p.x + u,
				y: p.y + d
			}), r.push(p), c) {
				let e = n.find((e) => e.id === c);
				if (!e) throw Error(`class node with id ${c} not found!`);
				let r = t.querySelector(`path[id="edgeNote${a + 1}"][data-edge="true"]`);
				if (r) {
					i.push(Xt(r, {
						strokeStyle: "dotted",
						startArrowhead: null,
						endArrowhead: null,
						start: {
							id: p.id,
							type: "rectangle"
						},
						end: {
							id: e.id,
							type: "rectangle"
						}
					}));
					return;
				}
				let o = p.x + (p.width || 0) / 2, s = p.y + (p.height || 0), l = o, u = e.y, d = _t(o, s, l, u, {
					strokeStyle: "dotted",
					startArrowhead: null,
					endArrowhead: null,
					start: {
						id: p.id,
						type: "rectangle"
					},
					end: {
						id: e.id,
						type: "rectangle"
					}
				});
				i.push(d);
			}
		}), {
			notes: r,
			connectors: i
		};
	}, an = (e, t) => {
		let n = e.db, r = n.getDirection?.() || "TB", i = [], a = [], o = [], s = [], c = n.getNamespaces?.() || [], l = n.getClasses?.() || {}, u = l instanceof Map ? Object.fromEntries(l) : l;
		if (u && Object.keys(u).length) {
			let e = tn(u, t, typeof n.lookUpDomId == "function" ? n.lookUpDomId.bind(n) : void 0);
			i.push(e.nodes), a.push(...e.lines), o.push(...e.text), s.push(...e.nodes);
		}
		let { arrows: d, text: f } = nn(n.getRelations?.() || [], s, t, r), { notes: p, connectors: m } = rn(n.getNotes?.() || [], t, s);
		return i.push(p), d.push(...m), o.push(...f), {
			type: "class",
			nodes: i,
			lines: a,
			arrows: d,
			text: o,
			namespaces: c
		};
	};
})), sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn = e((() => {
	E(), yt(), R(), W(), sn = 18, cn = (e) => {
		let t = {};
		return e && e.forEach((e) => {
			B(e).forEach(({ property: e, value: n }) => {
				e && n && (t[e] = z(n));
			});
		}), t;
	}, ln = (e) => {
		if (e == null || e === "") return;
		let t = typeof e == "number" ? e : parseFloat(z(e));
		if (!(!Number.isFinite(t) || t <= 0)) return t;
	}, un = (e, t) => {
		let n = 0, r = 0, i = e;
		for (; i && i !== t;) {
			let { transformX: e, transformY: t } = L(i);
			n += e, r += t, i = i.parentElement;
		}
		return {
			tx: n,
			ty: r
		};
	}, dn = (e) => {
		let t = Array.from(e.querySelectorAll("tspan"));
		return I(t.length ? t.map((e) => e.textContent?.trim()).filter(Boolean).join("\n") : e.textContent?.trim() || "");
	}, fn = (e) => {
		let t = e.querySelector("text, foreignObject, div, span, p") || e, n = parseFloat(getComputedStyle(t).fontSize || "");
		return (!Number.isFinite(n) || n <= 0) && (n = Math.max(12, e.getBBox().height * .75)), n;
	}, pn = (e, t, n) => {
		let r = dn(e);
		if (!r) return null;
		let i = e.getBBox(), { tx: a, ty: o } = un(e, t);
		return {
			className: e.getAttribute("class") || "",
			text: r,
			x: i.x + a,
			y: i.y + o,
			width: i.width,
			height: i.height,
			fontSize: fn(e),
			color: U(e, n)
		};
	}, mn = (e, t, n, r, i, a, o) => {
		let { tx: s, ty: c } = un(e, t), l = 0, u = 0, d = 0, f = 0;
		if (e.tagName.toLowerCase() === "line") l = Number(e.getAttribute("x1")) + s, u = Number(e.getAttribute("y1")) + c, d = Number(e.getAttribute("x2")) + s, f = Number(e.getAttribute("y2")) + c;
		else {
			let t = Ze(e);
			if (!t) return null;
			l = t.startX + s, u = t.startY + c, d = t.endX + s, f = t.endY + c;
		}
		let p = {
			type: "line",
			id: T(),
			groupId: n,
			startX: l,
			startY: u,
			endX: d,
			endY: f,
			metadata: { entityId: r }
		};
		return i && V(i) && i !== "none" && (p.strokeColor = i), a !== void 0 && (p.strokeWidth = a), o && (p.strokeStyle = o), p;
	}, hn = (e) => {
		switch (e?.toLowerCase()) {
			case "one": return "cardinality_one";
			case "many": return "cardinality_many";
			case "only_one": return "cardinality_exactly_one";
			case "one_or_more": return "cardinality_one_or_many";
			case "zero_or_one": return "cardinality_zero_or_one";
			case "zero_or_more": return "cardinality_zero_or_many";
			default: return null;
		}
	}, gn = (e) => {
		switch (e) {
			case "dotted": return "dotted";
			case "dashed": return "dashed";
			default: return "solid";
		}
	}, _n = (e, t) => {
		let n = t.querySelector(`path[id="${e.id}"][data-edge="true"]`);
		return n ? [n] : e.start === e.end ? [
			`${e.start}-cyclic-special-1`,
			`${e.start}-cyclic-special-mid`,
			`${e.start}-cyclic-special-2`
		].map((e) => t.querySelector(`path[id="${e}"][data-edge="true"]`)).filter((e) => e !== null) : [];
	}, vn = (e) => {
		let t = [];
		return e.forEach((e) => {
			Qe(e).forEach((e) => {
				let n = t[t.length - 1];
				n && n.x === e.x && n.y === e.y || t.push(e);
			});
		}), t;
	}, yn = (e, t) => {
		let n = t.querySelector(`[id="${e.id}"]`);
		if (!n) throw Error(`ER entity ${e.id} not found in rendered SVG`);
		let r = e.attributes.length ? T() : void 0, i = n.getBBox(), { tx: a, ty: o } = un(n, t), s = cn([...e.cssStyles || [], ...e.cssCompiledStyles || []]), c = z(s.fill || ""), l = z(s.stroke || ""), u = ln(s["stroke-width"]), d = z(s["stroke-dasharray"] || ""), f = Array.from(n.querySelectorAll("g.label")).map((e) => pn(e, t, s.color)).filter((e) => e !== null), p = f.find((e) => e.className.includes("name")) || f[0], m = f.filter((e) => e !== p), h = p?.text || I(e.alias || e.label || ""), g = {
			type: "rectangle",
			id: e.id,
			groupId: r,
			x: i.x + a,
			y: i.y + o,
			width: i.width,
			height: i.height,
			label: {
				text: h,
				fontSize: e.attributes.length ? sn : p?.fontSize || 16,
				color: p?.color,
				textAlign: "center",
				verticalAlign: e.attributes.length ? "top" : "middle"
			},
			metadata: {
				entityId: e.id,
				entityLabel: e.label,
				entityAlias: e.alias
			}
		};
		return V(c) && c !== "none" && (g.bgColor = c), V(l) && l !== "none" && (g.strokeColor = l), u && Number.isFinite(u) && u > 0 && (g.strokeWidth = u), d && d !== "none" && (g.strokeStyle = "dashed"), {
			container: g,
			lines: Array.from(n.querySelectorAll(".divider path, path.divider, line.divider")).map((n) => mn(n, t, r, e.id, g.strokeColor, g.strokeWidth, g.strokeStyle)).filter((e) => e !== null),
			text: m.map((t) => q(t.x, t.y, t.text, {
				id: T(),
				groupId: r,
				width: t.width,
				height: t.height,
				fontSize: sn,
				color: t.color,
				metadata: { entityId: e.id }
			}))
		};
	}, bn = (e, t) => {
		let n = _n(e, t);
		if (!n.length) throw Error(`ER relationship ${e.id} not found in rendered SVG`);
		let r = vn(n);
		if (r.length < 2) throw Error(`ER relationship ${e.id} is missing usable path points`);
		let i = r[0], a = r[r.length - 1], o = n[0], s = z(o.getAttribute("stroke") || getComputedStyle(o).stroke || ""), c = Number(o.getAttribute("stroke-width") || getComputedStyle(o).strokeWidth || 1), l = _t(i.x, i.y, a.x, a.y, {
			id: e.id,
			label: e.label ? {
				text: I(e.label),
				fontSize: 16,
				textAlign: "center"
			} : void 0,
			strokeStyle: gn(e.pattern),
			startArrowhead: hn(e.arrowTypeStart),
			endArrowhead: hn(e.arrowTypeEnd),
			start: {
				type: "rectangle",
				id: e.start
			},
			end: {
				type: "rectangle",
				id: e.end
			},
			points: r.map((e) => [e.x - i.x, e.y - i.y])
		});
		return V(s) && s !== "none" && (l.strokeColor = s), Number.isFinite(c) && c > 0 && (l.strokeWidth = c), l;
	}, xn = (e, t) => {
		let n = e.getData(), r = n.nodes, i = n.edges, a = [], o = [], s = [];
		r.forEach((e) => {
			let n = yn(e, t);
			a.push(n.container), o.push(...n.lines), s.push(...n.text);
		});
		let c = i.map((e) => bn(e, t));
		return {
			type: "erd",
			nodes: [a],
			lines: o,
			arrows: c,
			text: s
		};
	};
})), Q, Cn, wn, Tn, En, Dn, On, kn, $, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn = e((() => {
	f(), R(), W(), Q = (e) => {
		let t = z(e || "");
		return !t || t === "none" || t === "transparent" || t === "rgba(0, 0, 0, 0)" || t === "rgba(0,0,0,0)" ? !1 : V(t);
	}, Cn = (e, t, n) => {
		switch (t) {
			case d.FILL:
			case d.STROKE:
				Q(n) && (e[t] = z(n));
				break;
			case d.STROKE_WIDTH:
			case d.STROKE_DASHARRAY:
				z(n) && (e[t] = z(n));
				break;
		}
	}, wn = (e, t, n) => {
		t === u.COLOR && Q(n) && (e[u.COLOR] = z(n));
	}, Tn = (e, t, n) => {
		e && B(e).forEach(({ property: e, value: r }) => {
			Cn(t, e, r), wn(n, e, r);
		});
	}, En = (e, t) => {
		e && B(e).forEach(({ property: e, value: n }) => {
			if (e === d.FILL && Q(n)) {
				t[u.COLOR] = z(n);
				return;
			}
			wn(t, e, n);
		});
	}, Dn = (e) => {
		let t = /* @__PURE__ */ new Set();
		return e.filter(Boolean).forEach((e) => {
			B(e || "").forEach(({ property: e }) => {
				t.add(e);
			});
		}), t;
	}, On = (e, t, n) => {
		e && [
			[d.FILL, e.getAttribute("fill")],
			[d.STROKE, e.getAttribute("stroke")],
			[d.STROKE_WIDTH, e.getAttribute("stroke-width")],
			[d.STROKE_DASHARRAY, e.getAttribute("stroke-dasharray")]
		].forEach(([e, r]) => {
			if (!n.has(e) || t[e]) return;
			let i = z(r || "");
			i && Cn(t, e, i);
		});
	}, kn = (e, t, n) => {
		if (!e) return;
		let r = [e, ...Array.from(e.querySelectorAll("text, foreignObject, div, span, p"))];
		for (let e of r) {
			if (t[u.COLOR] || (n.has(u.COLOR) || n.has(d.FILL)) && (En(e.getAttribute("style"), t), t[u.COLOR])) break;
			let r = z(e.getAttribute("fill") || e.getAttribute("color") || "");
			(n.has(u.COLOR) || n.has(d.FILL)) && Q(r) && (t[u.COLOR] = r);
		}
	}, $ = (e, t) => {
		let n = 0, r = 0, i = e;
		for (; i && i !== t;) {
			let { transformX: e, transformY: t } = L(i);
			n += e, r += t, i = i.parentElement;
		}
		return {
			tx: n,
			ty: r
		};
	}, An = (e, t) => {
		let n = e.getBBox(), { tx: r, ty: i } = $(e, t);
		return {
			x: n.x + r,
			y: n.y + i,
			width: n.width,
			height: n.height
		};
	}, jn = (e, t) => {
		let n = e.querySelector("line.divider");
		if (!n) return;
		let { tx: r, ty: i } = $(n, t);
		return {
			startX: Number(n.getAttribute("x1")) + r,
			startY: Number(n.getAttribute("y1")) + i,
			endX: Number(n.getAttribute("x2")) + r,
			endY: Number(n.getAttribute("y2")) + i
		};
	}, Mn = (e) => {
		let t = e.getBBox();
		return Math.abs(t.width * t.height);
	}, Nn = (e, t) => {
		let n = e.getAttribute("style");
		if (!n) return;
		let r = B(n).find((e) => e.property === t);
		if (r) return z(r.value);
	}, Pn = (e, t) => {
		let n = e.map((e) => ({
			element: e,
			area: Mn(e)
		})).filter(({ area: e }) => Number.isFinite(e) && e > 0);
		return n.length === 0 ? null : n.sort((e, n) => t === "largest" ? n.area - e.area : e.area - n.area)[0].element;
	}, Fn = (e, t) => {
		if (!e || !t.has(d.FILL) && !t.has(d.STROKE)) return;
		let n = z(e.getAttribute("fill") || Nn(e, d.FILL) || ""), r = z(e.getAttribute("stroke") || Nn(e, d.STROKE) || "");
		if (Q(n)) return n;
		if (Q(r)) return r;
	}, In = (e, t) => Fn(Pn(Array.from(e.querySelectorAll("circle, ellipse, path")), "smallest"), t), Ln = (e) => {
		if (e.length < 2) return e;
		let t = e.slice(1), n = t.filter((e) => e.trim().length > 0).reduce((e, t) => {
			let n = t.match(/^\s*/)?.[0].length ?? 0;
			return Math.min(e, n);
		}, Infinity);
		return !Number.isFinite(n) || n <= 0 ? e.map((e) => e.trimEnd()) : [e[0].trimEnd(), ...t.map((e) => e.replace(RegExp(`^\\s{0,${n}}`), "").trimEnd())];
	}, Rn = (e) => Ln(Array.isArray(e.label) ? e.label.map((e) => I(e)) : I(e.label || "").split("\n")).join("\n"), zn = (e) => e.description ? (Array.isArray(e.description) ? e.description : [e.description]).map((e) => I(e)).filter((e) => e.length > 0) : [], Bn = (e) => {
		let t = /* @__PURE__ */ new Set(), n = (e) => (e && t.add(e), e), r = (e) => n(e.find((e) => !t.has(e)) || null);
		return (t) => {
			let i = [
				`[id='${t.domId}']`,
				`[id='${t.id}']`,
				`[data-id='${t.id}']`
			];
			for (let t of i) {
				let r = e.querySelector(t);
				if (r) return n(r);
			}
			switch (t.shape) {
				case "divider": return r(Array.from(e.querySelectorAll("g.statediagram-cluster-alt")));
				case "stateStart": return r(Array.from(e.querySelectorAll("g.node.default")).filter((e) => e.querySelector("circle.state-start")));
				case "stateEnd": return r(Array.from(e.querySelectorAll("g.node.default")).filter((e) => !e.querySelector("circle.state-start")));
				default: return null;
			}
		};
	}, Vn = (e, t) => {
		switch (t) {
			case "roundedWithTitle": return e.querySelector("rect.outer") || e.querySelector("rect") || e;
			case "divider": return e.querySelector("rect.divider") || e.querySelector("rect") || e;
			case "rectWithTitle": return e.querySelector("rect.outer") || e.querySelector("rect") || e;
			case "stateStart": return Pn(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
			case "stateEnd": return Pn(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
			default: return e.querySelector("rect, path, circle, ellipse, polygon") || e;
		}
	}, Hn = (e, t, n) => {
		let r = n(e);
		if (!r) throw Error(`State node element not found for "${e.id}"`);
		let i = Vn(r, e.shape), a = {}, o = {}, s = [
			e.labelStyle,
			...e.cssCompiledStyles || [],
			...e.cssStyles || []
		], c = Dn(s);
		s.filter(Boolean).forEach((e) => {
			Tn(e, a, o);
		}), On(i, a, c), kn(r, o, c);
		let l = An(i, t);
		return {
			id: e.id,
			shape: e.shape,
			text: Rn(e),
			description: zn(e),
			x: l.x,
			y: l.y,
			width: l.width,
			height: l.height,
			parentId: e.parentId,
			position: e.position,
			containerStyle: a,
			labelStyle: o,
			dividerLine: e.shape === "rectWithTitle" ? jn(r, t) : void 0,
			endInnerColor: e.shape === "stateEnd" ? In(r, c) : void 0,
			isRenderable: e.shape !== "noteGroup"
		};
	}, Un = (e, t) => {
		let n = t.querySelector(`[id='${e.id}']`);
		if (!n) return null;
		let { tx: r, ty: i } = $(n, t), a = $e(n, {
			x: r,
			y: i
		}, "MCL");
		if (a.reflectionPoints.length < 2) return null;
		let o = {}, s = (e, t) => {
			switch (e) {
				case d.STROKE:
					Q(t) && (o.strokeColor = z(t));
					break;
				case d.STROKE_WIDTH: {
					let e = parseFloat(z(t));
					Number.isFinite(e) && e > 0 && (o.strokeWidth = e);
					break;
				}
				case d.STROKE_DASHARRAY:
					z(t) && (o.strokeStyle = "dashed");
					break;
			}
		};
		[e.style].filter(Boolean).forEach((e) => {
			B(e || "").forEach(({ property: e, value: t }) => {
				s(e, t);
			});
		});
		let c = e.arrowhead === "none" || e.classes?.includes("note-edge");
		return {
			id: e.id,
			start: e.start,
			end: e.end,
			text: I(e.label || ""),
			...a,
			strokeColor: o.strokeColor,
			strokeWidth: o.strokeWidth,
			strokeStyle: c ? "dashed" : o.strokeStyle,
			isNoteEdge: c
		};
	}, Wn = (e, t) => {
		let { nodes: n, edges: r } = e.getData(), i = Bn(t);
		return {
			type: "state",
			nodes: n.map((e) => Hn(e, t, i)),
			edges: r.map((e) => Un(e, t)).filter((e) => e !== null)
		};
	};
})), Kn, qn, Jn = e((() => {
	Kn = Promise.resolve(), qn = (e) => {
		let t = Kn.then(e, e);
		return Kn = t.then(() => void 0, () => void 0), t;
	};
})), Yn, Xn, Zn, Qn, $n, er = e((() => {
	r(), o(), R(), ht(), Mt(), on(), Sn(), Gn(), Jn(), Yn = null, Xn = 0, Zn = (e) => JSON.stringify(e), Qn = (e) => {
		let t = e.querySelector("svg");
		if (!t) throw Error("SVG element not found");
		let n = t.getBoundingClientRect(), r = n.width, i = n.height;
		t.setAttribute("width", `${r}`), t.setAttribute("height", `${i}`);
		let a = unescape(encodeURIComponent(t.outerHTML));
		return {
			type: "graphImage",
			mimeType: "image/svg+xml",
			dataURL: `data:image/svg+xml;base64,${btoa(a)}`,
			width: r,
			height: i
		};
	}, $n = async (e, t = a) => qn(async () => {
		let r = t.themeVariables?.fontSize ?? a.themeVariables.fontSize, i = {
			...a,
			...t,
			fontSize: r,
			themeVariables: {
				...a.themeVariables,
				...t.themeVariables,
				fontSize: r
			}
		}, o = Zn(i);
		o !== Yn && (n.initialize(i), Yn = o);
		let s = await n.mermaidAPI.getDiagramFromText(qe(e)), c = `mermaid-to-excalidraw-${Xn++}`, l = document.createElement("div");
		l.setAttribute("style", "opacity: 0; position: fixed; z-index: -1; left: -99999px; top: -99999px;");
		let u = `${c}-container`;
		l.id = u, document.getElementById(u)?.remove(), document.body.appendChild(l);
		try {
			let { svg: t } = await n.render(c, e, l);
			l.innerHTML = t;
			let r;
			try {
				switch (s.type) {
					case "flowchart-v2":
					case "graph":
						r = mt(s.db, l);
						break;
					case "sequence":
						r = jt(s, l);
						break;
					case "class":
					case "classDiagram":
						r = an(s, l);
						break;
					case "er":
						r = xn(s.db, l);
						break;
					case "state":
					case "stateDiagram":
						r = Wn(s.db, l);
						break;
					default: r = Qn(l);
				}
			} catch (e) {
				console.error("Error processing Mermaid diagram:", e), r = Qn(l);
			}
			return r;
		} finally {
			l.remove();
		}
	});
})), tr;
//#endregion
e((() => {
	o(), nt(), er(), tr = async (e, t) => {
		let n = t || {}, r = parseInt(n.themeVariables?.fontSize ?? "") || 20;
		return tt(await $n(e, {
			...n,
			themeVariables: { ...n.themeVariables }
		}), { fontSize: r });
	};
}))();
export { tr as parseMermaidToExcalidraw };
