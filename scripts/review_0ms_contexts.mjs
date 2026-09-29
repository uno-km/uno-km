import fs from 'fs';
import { SEED_POSTS } from '../api/seed_posts.js';

console.log('=== All 0ms and 0초 Contexts ===');
SEED_POSTS.forEach((p, idx) => {
  const content = p.content || '';
  ['0ms', '0초'].forEach(target => {
    let pos = 0;
    while ((pos = content.indexOf(target, pos)) !== -1) {
      const start = Math.max(0, pos - 30);
      const end = Math.min(content.length, pos + 34);
      const snip = content.substring(start, end).replace(/\r?\n/g, ' ');
      console.log(`[#${idx + 1} ${target}] ${snip}`);
      pos += target.length;
    }
  });
});
