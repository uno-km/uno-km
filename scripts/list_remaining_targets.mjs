import fs from 'fs';
import { SEED_POSTS } from '../api/seed_posts.js';

const targets = [
  '완전히', '완벽히', '완벽한', '완전한', '완벽하게', '절대 ',
  '100%', '필수적', '증명하였습니다', '압도적', '비약적', '무조건'
];

targets.forEach(t => {
  console.log(`\n==================== [${t}] ====================`);
  SEED_POSTS.forEach((p, idx) => {
    const text = p.content || '';
    let pos = 0;
    while ((pos = text.indexOf(t, pos)) !== -1) {
      const snip = text.substring(Math.max(0, pos - 25), Math.min(text.length, pos + t.length + 25)).replace(/\r?\n/g, ' ');
      console.log(`[#${idx + 1} ${p.menu_id}] "${snip}"`);
      pos += t.length;
    }
  });
});
