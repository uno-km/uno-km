import fs from 'fs';
import { SEED_POSTS } from '../api/seed_posts.js';

console.log('=== All 100% Contexts ===');
SEED_POSTS.forEach((p, idx) => {
  const content = p.content || '';
  let pos = 0;
  while ((pos = content.indexOf('100%', pos)) !== -1) {
    const start = Math.max(0, pos - 30);
    const end = Math.min(content.length, pos + 34);
    const snip = content.substring(start, end).replace(/\r?\n/g, ' ');
    console.log(`[#${idx + 1} ${p.menu_id}] ${snip}`);
    pos += 4;
  }
});
