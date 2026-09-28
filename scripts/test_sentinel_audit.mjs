// scripts/test_sentinel_audit.mjs
async function runTests() {
  const baseUrl = 'https://uno-km.vercel.app';
  const tests = [
    {
      name: 'TC-1: AI Crawler (GPTBot) -> /labs/ (Should be Blocked)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)',
      expectedStatus: 403
    },
    {
      name: 'TC-2: AI Crawler (ClaudeBot) -> /labs/ (Should be Blocked)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)',
      expectedStatus: 403
    },
    {
      name: 'TC-3: AI Model Training (Google-Extended) -> /labs/ (Should be Blocked)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 (compatible; Google-Extended/1.0)',
      expectedStatus: 403
    },
    {
      name: 'TC-4: Automated Python Scraper -> /labs/ (Should be Blocked)',
      url: baseUrl + '/labs/',
      ua: 'Python-requests/2.31.0',
      expectedStatus: 403
    },
    {
      name: 'TC-5: Canary Honeypot Trap Hit -> /api/sentinel/trap (Should Trip Trap & 403)',
      url: baseUrl + '/api/sentinel/trap?source=test_runner',
      ua: 'Scrapy/2.11.0 (+https://scrapy.org)',
      expectedStatus: 403
    },
    {
      name: 'TC-6: General Search Engine (Googlebot) -> /labs/ (Should Pass 200 for SEO Indexing)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      expectedStatus: 200
    },
    {
      name: 'TC-7: General Search Engine (Naver Yeti) -> /labs/ (Should Pass 200 for SEO Indexing)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 (compatible; Yeti/1.1; +http://naver.me/bot)',
      expectedStatus: 200
    },
    {
      name: 'TC-8: Human Chrome Browser -> /labs/ (Should Pass 200 for Normal Viewing)',
      url: baseUrl + '/labs/',
      ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      expectedStatus: 200
    },
    {
      name: 'TC-9: General Search Engine (Googlebot) -> / (Root Portal) (Should Pass 200)',
      url: baseUrl + '/',
      ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      expectedStatus: 200
    }
  ];

  console.log('========================================================================');
  console.log('       AMEVA-SENTINEL ACTIVE DEFENSE & SEO COMPATIBILITY AUDIT         ');
  console.log('========================================================================\n');

  let passed = 0;
  for (const t of tests) {
    try {
      const res = await fetch(t.url + '?t=' + Date.now(), {
        headers: { 'User-Agent': t.ua },
        cache: 'no-store'
      });
      const body = await res.text();
      const statusOk = res.status === t.expectedStatus;
      const xRobots = res.headers.get('x-robots-tag') || '';
      const xTrap = res.headers.get('x-sentinel-trap') || res.headers.get('x-sentinel-active-defense') || '';

      const mark = statusOk ? 'PASS' : 'FAIL';
      if (statusOk) passed++;

      console.log(`[${mark}] ${t.name}`);
      console.log(`       Status: ${res.status} (Expected: ${t.expectedStatus}) | X-Robots-Tag: '${xRobots}'`);
      if (xTrap) console.log(`       Sentinel Action: ${xTrap}`);
      console.log(`       Excerpt: ${body.slice(0, 90).replace(/\r?\n/g, ' ')}...\n`);
    } catch (err) {
      console.error(`ERROR on ${t.name}:`, err.message);
    }
  }

  console.log('------------------------------------------------------------------------');
  console.log(`RESULT: ${passed}/${tests.length} TEST CASES PASSED!`);
  console.log('========================================================================');
}

runTests();
