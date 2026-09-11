import { n as e } from "./rolldown-runtime-DY7j01NX.js";
//#region ../../node_modules/browser-fs-access/dist/directory-open-4ed118d0.js
function t(e) {
	function n(e) {
		if (Object(e) !== e) return Promise.reject(/* @__PURE__ */ TypeError(e + " is not an object."));
		var t = e.done;
		return Promise.resolve(e.value).then(function(e) {
			return {
				value: e,
				done: t
			};
		});
	}
	return t = function(e) {
		this.s = e, this.n = e.next;
	}, t.prototype = {
		s: null,
		n: null,
		next: function() {
			return n(this.n.apply(this.s, arguments));
		},
		return: function(e) {
			var t = this.s.return;
			return t === void 0 ? Promise.resolve({
				value: e,
				done: !0
			}) : n(t.apply(this.s, arguments));
		},
		throw: function(e) {
			var t = this.s.return;
			return t === void 0 ? Promise.reject(e) : n(t.apply(this.s, arguments));
		}
	}, new t(e);
}
var n, r;
//#endregion
e((() => {
	n = async (e, r, i = e.name, a) => {
		let o = [], s = [];
		var c, l = !1, u = !1;
		try {
			for (var d, f = function(e) {
				var n, r, i, a = 2;
				for (typeof Symbol < "u" && (r = Symbol.asyncIterator, i = Symbol.iterator); a--;) {
					if (r && (n = e[r]) != null) return n.call(e);
					if (i && (n = e[i]) != null) return new t(n.call(e));
					r = "@@asyncIterator", i = "@@iterator";
				}
				throw TypeError("Object is not async iterable");
			}(e.values()); l = !(d = await f.next()).done; l = !1) {
				let t = d.value, c = `${i}/${t.name}`;
				t.kind === "file" ? s.push(t.getFile().then((n) => (n.directoryHandle = e, n.handle = t, Object.defineProperty(n, "webkitRelativePath", {
					configurable: !0,
					enumerable: !0,
					get: () => c
				})))) : t.kind !== "directory" || !r || a && a(t) || o.push(n(t, r, c, a));
			}
		} catch (e) {
			u = !0, c = e;
		} finally {
			try {
				l && f.return != null && await f.return();
			} finally {
				if (u) throw c;
			}
		}
		return [...(await Promise.all(o)).flat(), ...await Promise.all(s)];
	}, r = async (e = {}) => (e.recursive = e.recursive || !1, n(await window.showDirectoryPicker({
		id: e.id,
		startIn: e.startIn
	}), e.recursive, void 0, e.skipDirectory));
}))();
export { r as default };
