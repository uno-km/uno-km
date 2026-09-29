import fs from 'fs';
import { SEED_POSTS } from '../api/seed_posts.js';

const words = ['완전히', '완벽히', '완벽한', '완벽하게', '완전한'];

words.forEach(w => {
  console.log(`\n==================== [${w}] ====================`);
  SEED_POSTS.forEach((p, idx) => {
    const text = p.content || '';
    let pos = 0;
    while ((pos = text.indexOf(w, pos)) !== -1) {
      const snip = text.substring(Math.max(0, pos - 20), Math.min(text.length, pos + w.length + 20)).replace(/\r?\n/g, ' ');
      console.log(`[#${idx + 1}] "${snip}"`);
      pos += w.length;
    }
  });
});
