import { o as e } from "./rolldown-runtime-DY7j01NX.js";
import { n as t } from "./jsx-runtime-18mgyzjG.js";
//#region ../../node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var n = /* @__PURE__ */ e(t(), 1), r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), a = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), o = (e) => {
	let t = a(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, s = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, c = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, l = (0, n.createContext)({}), u = () => (0, n.useContext)(l), d = (0, n.forwardRef)(({ color: e, size: t, strokeWidth: i, absoluteStrokeWidth: a, className: o = "", children: l, iconNode: d, ...f }, p) => {
	let { size: m = 24, strokeWidth: h = 2, absoluteStrokeWidth: g = !1, color: _ = "currentColor", className: v = "" } = u() ?? {}, y = a ?? g ? Number(i ?? h) * 24 / Number(t ?? m) : i ?? h;
	return (0, n.createElement)("svg", {
		ref: p,
		...s,
		width: t ?? m ?? s.width,
		height: t ?? m ?? s.height,
		stroke: e ?? _,
		strokeWidth: y,
		className: r("lucide", v, o),
		...!l && !c(f) && { "aria-hidden": "true" },
		...f
	}, [...d.map(([e, t]) => (0, n.createElement)(e, t)), ...Array.isArray(l) ? l : [l]]);
}), f = (e, t) => {
	let a = (0, n.forwardRef)(({ className: a, ...s }, c) => (0, n.createElement)(d, {
		ref: c,
		iconNode: t,
		className: r(`lucide-${i(o(e))}`, `lucide-${e}`, a),
		...s
	}));
	return a.displayName = o(e), a;
}, p = f("pen-line", [["path", {
	d: "M13 21h8",
	key: "1jsn5i"
}], ["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]), m = f("eraser", [["path", {
	d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
	key: "g5wo59"
}], ["path", {
	d: "m5.082 11.09 8.828 8.828",
	key: "1wx5vj"
}]]), h = f("square", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}]]), g = f("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), _ = f("type", [
	["path", {
		d: "M12 4v16",
		key: "1654pz"
	}],
	["path", {
		d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
		key: "e0r10z"
	}],
	["path", {
		d: "M9 20h6",
		key: "s66wpe"
	}]
]);
//#endregion
export { p as a, m as i, g as n, f as o, h as r, _ as t };
