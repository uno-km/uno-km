import { n as e } from "./rolldown-runtime-DY7j01NX.js";
//#region ../../node_modules/browser-fs-access/dist/file-open-002ab408.js
var t, n;
//#endregion
e((() => {
	t = async (e) => {
		let t = await e.getFile();
		return t.handle = e, t;
	}, n = async (e = [{}]) => {
		Array.isArray(e) || (e = [e]);
		let n = [];
		e.forEach((e, t) => {
			n[t] = {
				description: e.description || "",
				accept: {}
			}, e.mimeTypes ? e.mimeTypes.map((r) => {
				n[t].accept[r] = e.extensions || [];
			}) : n[t].accept["*/*"] = e.extensions || [];
		});
		let r = await window.showOpenFilePicker({
			id: e[0].id,
			startIn: e[0].startIn,
			types: n,
			multiple: e[0].multiple || !1,
			excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
		}), i = await Promise.all(r.map(t));
		return e[0].multiple ? i : i[0];
	};
}))();
export { n as default };
