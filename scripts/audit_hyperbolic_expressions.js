const fs = require('fs');
const path = require('path');
const { SEED_POSTS } = require('../api/seed_posts.js');

const patterns = [
  { cat: '최초/독보', regex: /(세계\s*최초|최초로\s*(?:규명|입증|증명|밝혀|제시|분석|구현|보고|확인)|최초의|최초)/g },
  { cat: '절대/완벽', regex: /(절대적(?:으로|인|인)?|절대로|완벽히|완벽하게|완벽한|완전무결|완전히|완전한)/g },
  { cat: '100%/보장', regex: /(100%|100\s*%|백퍼센트|무조건|어떠한\s*경우에도|어떤\s*경우에도|무결점)/g },
  { cat: '필수/강제', regex: /(필수적(?:으로|인)?|필수불가결|필수\s*불가결|반드시\s*(?:수행|도입|적용|필요|구현|해야)|불가피하게)/g },
  { cat: '과격/군사/박멸', regex: /(영구\s*박멸|박멸|분쇄|섬멸|물리적으로\s*(?:차단|격리|박멸|처단)|타겟\s*확보|처단|처형)/g },
  { cat: '압도/기적/극찬', regex: /(압도적(?:으로|인)?|경이로운|기적적인|혁명적(?:으로|인)?|극적인|초월|무소불위|신화)/g },
  { cat: '어색한 AI 번역/학술체', regex: /(규명하였습니다|증명하였습니다|확인되었습니다|봉착하게\s*되었|무한\s*수긍|의사\s*디커플링)/g }
];

let totalHits = 0;
const categoryCounts = {};
patterns.forEach(p => { categoryCounts[p.cat] = 0; });

const postReports = [];

SEED_POSTS.forEach((p, idx) => {
  const content = (p.title || '') + '\n' + (p.content || '');
  const findings = [];

  patterns.forEach(({ cat, regex }) => {
    const r = new RegExp(regex.source, regex.flags);
    let match;
    while ((match = r.exec(content)) !== null) {
      totalHits++;
      categoryCounts[cat]++;
      const start = Math.max(0, match.index - 25);
      const end = Math.min(content.length, match.index + match[0].length + 25);
      const snippet = content.substring(start, end).replace(/\r?\n/g, ' ').trim();
      findings.push({ cat, word: match[0], snippet });
    }
  });

  if (findings.length > 0) {
    postReports.push({
      num: idx + 1,
      id: p.id,
      menu_id: p.menu_id,
      title: p.title,
      hits: findings.length,
      findings
    });
  }
});

console.log('========================================================================');
console.log('       AMEVA-FORGE HYPERBOLIC & OVERSTATED EXPRESSION CENSUS AUDIT       ');
console.log('========================================================================');
console.log(`전체 스캔 대상 게시글/논문 수: ${SEED_POSTS.length}편`);
console.log(`과장/절대적/비격식 표현 검출 게시글 수: ${postReports.length}편`);
console.log(`총 검출 건수: ${totalHits}건`);
console.log('------------------------------------------------------------------------');
console.log('카테고리별 검출 현황:');
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(`  - [${cat}]: ${count}건`);
});
console.log('------------------------------------------------------------------------');
console.log('게시글별 검출 건수 상위 목록:');
postReports.sort((a, b) => b.hits - a.hits).forEach((pr, i) => {
  console.log(`${(i + 1).toString().padStart(2)}. [게시글 #${pr.num}] (${pr.menu_id}) "${pr.title}" -> 총 ${pr.hits}건`);
  // Top 3 unique sample findings
  const uniqueWords = [...new Set(pr.findings.map(f => f.word))].slice(0, 5);
  console.log(`     검출 어휘 예시: ${uniqueWords.join(', ')}`);
});

// Save detailed report JSON for precise review and batch refactoring
fs.writeFileSync(
  path.join(__dirname, 'hyperbolic_audit_report.json'),
  JSON.stringify({ totalHits, categoryCounts, postReports }, null, 2),
  'utf8'
);
console.log('\n상세 리포트 저장 완료: scripts/hyperbolic_audit_report.json');
