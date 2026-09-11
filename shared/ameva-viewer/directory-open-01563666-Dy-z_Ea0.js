import { n as e } from "./rolldown-runtime-DY7j01NX.js";
//#region ../../node_modules/browser-fs-access/dist/directory-open-01563666.js
var t;
//#endregion
e((() => {
	t = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, n) => {
		let r = document.createElement("input");
		r.type = "file", r.webkitdirectory = !0;
		let i = (e) => {
			typeof a == "function" && a(), t(e);
		}, a = e[0].legacySetup && e[0].legacySetup(i, () => a(n), r);
		r.addEventListener("change", () => {
			let t = Array.from(r.files);
			e[0].recursive ? e[0].recursive && e[0].skipDirectory && (t = t.filter((t) => t.webkitRelativePath.split("/").every((t) => !e[0].skipDirectory({
				name: t,
				kind: "directory"
			})))) : t = t.filter((e) => e.webkitRelativePath.split("/").length === 2), i(t);
		}), r.click();
	}));
}))();
export { t as default };
