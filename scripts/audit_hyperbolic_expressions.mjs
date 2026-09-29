import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEED_POSTS } from '../api/seed_posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정밀 정규식 기반 과장·비격식·절대적 수사 탐지 패턴 정의
const AUDIT_RULES = [
  {
    category: '1. 최초성 및 자화자찬 (Primacy & Authority Claims)',
    description: '최초, 최초로 규명 등 과도하게 학술적 권위를 자임하거나 자화자찬하는 표현',
    rules: [
      { id: 'first_claim', pattern: /(?:세계\s*최초|국내\s*최초|역사상\s*최초|최초로\s*규명|최초로\s*밝혀|본\s*연구진이\s*최초)/g, label: '최초성 주장' },
      { id: 'unmatched_claim', pattern: /(?:독보적인|유일무이한|비견할\s*수\s*없는)/g, label: '독보성·우월성 과장' }
    ]
  },
  {
    category: '2. 절대성 및 완벽성 (Absolute & Infallible Assertions)',
    description: '절대 안전, 완벽 등 시스템 공학에서 성립할 수 없는 절대적 무결성 단정',
    rules: [
      { id: 'absolute_assertion', pattern: /(?:절대\s*(?:안전|불가|보장|무결)|절대로\s*(?:안전|터지지|뚫리지))/g, label: '절대적 무결성 단정' },
      { id: 'perfect_assertion', pattern: /(?:완벽하게\s*(?:보호|차단|해결|동작)|완벽한\s*(?:보안|격리|무결성)|완전무결)/g, label: '완벽성 과장' },
      { id: 'completely_excessive', pattern: /완전히\s+(?:새로운|무력화|은닉|소멸|파괴|장악)/g, label: '완전히 수식 과잉' }
    ]
  },
  {
    category: '3. 100% 및 0ms/0초 비현실적 수치 (Unrealistic 100% & 0-Latency Metrics)',
    description: '오픈소스/시스템 표준에서 금기시되는 100% 보장, 0ms, 0초 등 물리적으로 불가능한 수치적 과장',
    rules: [
      { id: 'zero_latency_exaggeration', pattern: /(?:0초\s*만에|0ms\s*만에|다운타임\s*0초|지연시간\s*0ms|0ms로\s*단축)/g, label: '0초/0ms 비현실적 지연시간 과장' },
      { id: 'hundred_percent_guarantee', pattern: /100%\s*(?:무중단|안전|보장|무결|방지)/g, label: '100% 보장/무결성 단정' }
    ]
  },
  {
    category: '4. 당위성 및 강제성 남발 (Prescriptive Overstatement)',
    description: '무조건, 필수불가결 등 아키텍처적 트레이드오프를 배제하고 강제하는 수사',
    rules: [
      { id: 'prescriptive_must', pattern: /(?:필수불가결|무조건적으로|어떤\s*경우에도\s*(?:반드시|타협\s*없이))/g, label: '절대적 강제 수사' }
    ]
  },
  {
    category: '5. 과격성 및 군사적 은유 (Aggressive & Violent Metaphors)',
    description: '사살, 처형, 물리적으로 차단, 박멸 등 기술 문서에 부적합한 자극적·과격한 어휘',
    rules: [
      { id: 'violent_kill', pattern: /(?:프로세스\s*사살|강제\s*사살|워커\s*사살|시스템이\s*사살|LMK\s*사살)/g, label: '사살/처단 과격 어휘' },
      { id: 'violent_eradicate', pattern: /(?:영구\s*박멸|물리적으로\s*(?:차단|증명)|타겟\s*확보|처형|처단|분쇄|섬멸)/g, label: '군사적·폭력적 은유' }
    ]
  },
  {
    category: '6. 극찬 및 감정적 수식어 (Emotional & Hyperbolic Adjectives)',
    description: '기적적, 경이로운, 압도적인 격차 등 마케팅적 흥분이나 부풀리기가 포함된 표현',
    rules: [
      { id: 'hyperbolic_emotion', pattern: /(?:기적적인|경이로운|압도적인\s*(?:성능|격차|속도)|무지막지한|어마어마한|눈부신\s*발전)/g, label: '극찬·감정적 부풀리기' }
    ]
  },
  {
    category: '7. 유치한 비유 및 비격식 구어체 (Childish Metaphors & Colloquialisms)',
    description: '게임 몬스터, 풀피, 마법, 털리다, 터지다 등 학술 및 시스템 표준에 어긋나는 비격식 표현',
    rules: [
      { id: 'slang_metaphor', pattern: /(?:보스\s*몬스터|풀피|불사신\s*리스폰|마법의\s*망토|수학적\s*마법|마법진|초미니\s*비밀\s*정부|합법적\s*신분\s*상승)/g, label: '유치한 은유 및 게임 용어' },
      { id: 'colloquial_verb', pattern: /(?:몽땅\s*털리|트랜잭션이\s*터집|RAM이\s*터지|슉-\s*미끄러|필름\s*한\s*컷이\s*씹혀)/g, label: '비격식 구어체 및 슬랭' }
    ]
  }
];

let grandTotal = 0;
const categoryStats = {};
const ruleStats = {};
const postStats = [];

AUDIT_RULES.forEach(cat => {
  categoryStats[cat.category] = 0;
  cat.rules.forEach(r => {
    ruleStats[r.id] = { label: r.label, count: 0, category: cat.category, hits: [] };
  });
});

SEED_POSTS.forEach((p, idx) => {
  const content = (p.title || '') + '\n' + (p.content || '');
  let postHits = 0;
  const postFindings = [];

  AUDIT_RULES.forEach(cat => {
    cat.rules.forEach(rule => {
      let match;
      const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
      while ((match = regex.exec(content)) !== null) {
        grandTotal++;
        categoryStats[cat.category]++;
        ruleStats[rule.id].count++;

        const pos = match.index;
        const matchedText = match[0];
        const start = Math.max(0, pos - 30);
        const end = Math.min(content.length, pos + matchedText.length + 30);
        const snippet = content.substring(start, end).replace(/\r?\n/g, ' ').trim();

        ruleStats[rule.id].hits.push({
          postNum: idx + 1,
          postId: p.id,
          title: p.title,
          matchedText,
          snippet
        });

        postHits++;
        postFindings.push({
          category: cat.category,
          label: rule.label,
          matchedText,
          snippet
        });
      }
    });
  });

  if (postHits > 0) {
    postStats.push({
      num: idx + 1,
      id: p.id,
      menu_id: p.menu_id,
      title: p.title,
      total: postHits,
      findings: postFindings
    });
  }
});

console.log('========================================================================');
console.log('   AMEVA LABS 7대 카테고리 과장·비격식·절대적 수사 정밀 감사 리포트');
console.log('========================================================================\n');
console.log(`[전체 통계 요약]`);
console.log(`- 전수 조사 대상 문서: 총 ${SEED_POSTS.length}편`);
console.log(`- 결함 수사 검출 문서: 총 ${postStats.length}편 / ${SEED_POSTS.length}편 (${((postStats.length / SEED_POSTS.length) * 100).toFixed(1)}%)`);
console.log(`- 총 검출 결함 수사 건수: 총 ${grandTotal}건\n`);

console.log('------------------------------------------------------------------------');
console.log('[1] 7대 카테고리별 검출 현황');
console.log('------------------------------------------------------------------------\n');

AUDIT_RULES.forEach(cat => {
  console.log(`▶ ${cat.category} : 총 ${categoryStats[cat.category]}건`);
  console.log(`  설명: ${cat.description}`);
  cat.rules.forEach(r => {
    const st = ruleStats[r.id];
    console.log(`   - "${r.label}" : ${st.count}회`);
  });
  console.log('');
});

if (postStats.length > 0) {
  console.log('------------------------------------------------------------------------');
  console.log('[2] 검출 발생 상세 문서 내역');
  console.log('------------------------------------------------------------------------');
  postStats.forEach(ps => {
    console.log(`\n* [문서 #${ps.num}] ${ps.title} (총 ${ps.total}건)`);
    ps.findings.forEach(f => {
      console.log(`   - [${f.label}] "${f.matchedText}": ...${f.snippet}...`);
    });
  });
} else {
  console.log('------------------------------------------------------------------------');
  console.log('🎉 축하합니다! 모든 44편 문서에서 과장·비격식·절대적 수사가 0건으로 완벽히 정제되었습니다.');
  console.log('------------------------------------------------------------------------');
}

// 결과 JSON 파일 저장
const reportData = {
  timestamp: new Date().toISOString(),
  grandTotal,
  inspectedPostsCount: SEED_POSTS.length,
  flaggedPostsCount: postStats.length,
  categoryStats,
  ruleStats,
  postStats
};

fs.writeFileSync(
  path.join(__dirname, 'hyperbolic_audit_report.json'),
  JSON.stringify(reportData, null, 2),
  'utf8'
);

console.log(`\n[3] 상세 리포트 JSON 저장 완료: scripts/hyperbolic_audit_report.json\n`);
