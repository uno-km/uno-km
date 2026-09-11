import { n as e } from "./rolldown-runtime-DY7j01NX.js";
import { a as t } from "./chunk-SRAX5OIU-CLKYmKdq.js";
import { a as n, n as r, r as i } from "./chunk-EIO257PC-CrOvPnVa.js";
//#region ../../node_modules/@excalidraw/excalidraw/dist/prod/subset-worker.chunk.js
var a;
//#endregion
e((() => {
	n(), t(), a = import.meta.url ? new URL(import.meta.url) : void 0, typeof window > "u" && typeof self < "u" && (self.onmessage = async (e) => {
		switch (e.data.command) {
			case r.Subset:
				let t = await i(e.data.arrayBuffer, e.data.codePoints);
				self.postMessage(t, { transfer: [t] });
				break;
		}
	});
}))();
export { a as WorkerUrl };
