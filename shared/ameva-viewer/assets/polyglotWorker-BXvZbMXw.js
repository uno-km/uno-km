(function(){let e=[];function t(e,t){let n=e.toLowerCase(),r=t;switch(n){case`csharp`:case`cs`:{r=r.replace(/using\s+[a-zA-Z0-9_.]+;/g,``),r=r.replace(/string\.Join\s*\(\s*(".*?")\s*,\s*([^)]+)\)/g,`($2).join($1)`),r=r.replace(/\bConsole\.WriteLine\b/g,`polyglotPrintln`),r=r.replace(/\bConsole\.Write\b/g,`polyglotPrint`),r=r.replace(/\b(?:var|string|int|long|double|float|bool|List<[^>]+>)\s+([a-zA-Z0-9_]+)\s*=/g,`let $1 =`),r=r.replace(/new\s+List<[^>]+>\s*\{([^}]*)\}/g,`[$1]`),r=r.replace(/public\s+class\s+[a-zA-Z0-9_]+\s*\{/g,``),r=r.replace(/public\s+static\s+void\s+Main\s*\([^)]*\)\s*\{/g,`async function main() {`);let e=r.lastIndexOf(`}`);e!==-1&&(r=r.substring(0,e)+r.substring(e+1)),r+=`
;if (typeof main === "function") { await main(); }
`;break}case`swift`:r=r.replace(/import\s+[a-zA-Z0-9_]+/g,``),r=r.replace(/\bprint\s*\(([\s\S]*?)\)/g,(e,t)=>{let n=t.replace(/\\\\\(([^)]+)\)/g,"${$1}").replace(/\\\(([^)]+)\)/g,"${$1}");return n.includes("${")?`polyglotPrintln(\`${n.replace(/^"|"$/g,``)}\`);`:`polyglotPrintln(${n});`}),r=r.replace(/for\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*\)\s*in\s*([a-zA-Z0-9_.]+)\.enumerated\(\)\s*\{/g,`for (const [$1, $2] of ($3).entries()) {`),r=r.replace(/\blet\s+([a-zA-Z0-9_]+)\s*=/g,`const $1 =`),r=r.replace(/\bvar\s+([a-zA-Z0-9_]+)\s*=/g,`let $1 =`);break;case`kotlin`:case`kt`:r=r.replace(/fun\s+main\s*\([^)]*\)\s*\{/g,`async function main() {`),r=r.replace(/\.filter\s*\{\s*it\s*%\s*2\s*==\s*0\s*\}/g,`.filter(it => it % 2 === 0)`),r=r.replace(/\blistOf\s*\(([^)]*)\)/g,`[$1]`),r=r.replace(/\bval\s+([a-zA-Z0-9_]+)\s*=/g,`const $1 =`),r=r.replace(/\bprintln\b/g,`polyglotPrintln`),r=r.replace(/\bprint\b/g,`polyglotPrint`),r+=`
;if (typeof main === "function") { await main(); }
`;break;case`zig`:r=r.replace(/const\s+std\s*=\s*@import\("std"\);?/g,``),r=r.replace(/std\.debug\.print\s*\(\s*(".*?")\s*,\s*\.\{([^}]*)\}\s*\);?/g,(e,t,n)=>`polyglotPrint(${t});`),r=r.replace(/pub\s+fn\s+main\s*\(\s*\)\s*(?:void)?\s*\{/g,`async function main() {`),r+=`
;if (typeof main === "function") { await main(); }
`;break;case`ruby`:case`rb`:r=r.replace(/^\s*#.*$/gm,``),r=r.replace(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=/gm,`let $1 =`),r=r.replace(/#\{([^}]+)\}/g,"${$1}"),r=r.replace(/\bputs\s+"([^"]+)"/gm,"polyglotPrintln(`$1`);"),r=r.replace(/\bputs\s+(.+?)$/gm,`polyglotPrintln($1);`),r=r.replace(/([a-zA-Z0-9_]+)\.each_with_index\s+do\s+\|([a-zA-Z0-9_]+),\s*([a-zA-Z0-9_]+)\|\s*/g,`$1.forEach(($2, $3) => {`),r=r.replace(/([a-zA-Z0-9_]+)\.each\s+do\s+\|([a-zA-Z0-9_]+)\|\s*/g,`$1.forEach(($2) => {`),r=r.replace(/\bend\b/g,`});`);break;case`php`:r=r.replace(/<\?php/g,``),r=r.replace(/\?>/g,``),r=r.replace(/\becho\s+(.+?);/g,`polyglotPrint($1);`),r=r.replace(/\bprint_r\s*\(([^)]*)\);/g,`polyglotPrintln(JSON.stringify($1, null, 2));`),r=r.replace(/\$([a-zA-Z0-9_]+)/g,`$1`);break;case`r`:{let e=t.split(`
`),n=[];for(let t of e){let e=t.trim();e.startsWith(`#`)||e.length===0||(t=t.replace(/^\s*([a-zA-Z0-9_.]+)\s*<-\s*/,`let $1 = `),t=t.replace(/<-/g,`=`),n.push(t))}r=`
function c(...args) { return args.flat(); }
function mean(x) { if (!Array.isArray(x) || x.length === 0) return 0; return x.reduce((a, b) => a + b, 0) / x.length; }
function median(x) { if (!Array.isArray(x) || x.length === 0) return 0; const s = [...x].sort((a,b)=>a-b); const m = Math.floor(s.length/2); return s.length % 2 ? s[m] : (s[m-1]+s[m])/2; }
function sd(x) { if (!Array.isArray(x) || x.length <= 1) return 0; const m = mean(x); return Math.sqrt(x.reduce((a,b)=>a+Math.pow(b-m,2),0)/(x.length-1)); }
function summary(x) {
  if (!Array.isArray(x)) return String(x);
  const s = [...x].sort((a,b)=>a-b);
  const min = Math.min(...s);
  const max = Math.max(...s);
  const m = mean(s);
  const med = median(s);
  const q1 = s[Math.floor(s.length * 0.25)];
  const q3 = s[Math.floor(s.length * 0.75)];
  return '   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \\n' +
         '  ' + min.toFixed(2).padStart(5) + ' ' + q1.toFixed(2).padStart(7) + ' ' + med.toFixed(2).padStart(7) + ' ' + m.toFixed(2).padStart(7) + ' ' + q3.toFixed(2).padStart(7) + ' ' + max.toFixed(2).padStart(7);
}
function cat(...args) {
  const formatted = args.map(a => typeof a === 'number' ? a.toString() : String(a)).join(' ');
  polyglotPrint(formatted.replace(/\\\\n/g, '\\n'));
}
function print(x) {
  if (typeof x === 'object' && x !== null && !Array.isArray(x)) {
    polyglotPrintln(JSON.stringify(x, null, 2));
  } else {
    polyglotPrintln(String(x));
  }
}

`+n.join(`
`);break}default:break}return r}self.onmessage=async function(n){e.length=0;let{language:r,code:i}=n.data||{language:`plaintext`,code:``};try{let n=t(r,i);await Function(`polyglotPrintln`,`polyglotPrint`,`return (async () => { `+n+` })()`)((...t)=>{e.push(t.map(e=>typeof e==`object`?JSON.stringify(e,null,2):String(e)).join(` `))},(...t)=>{let n=t.map(e=>typeof e==`object`?JSON.stringify(e):String(e)).join(` `);e.length>0&&!e[e.length-1].endsWith(`
`)?e[e.length-1]+=n:e.push(n)}),self.postMessage({success:!0,output:e.join(`
`).replace(/\\n/g,`
`)||`(실행 완료 - 출력 없음)`})}catch(e){self.postMessage({success:!1,output:`[${r.toUpperCase()} Runtime Error] `+(e.message||String(e))})}}})();