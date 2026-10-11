/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
// tools/verify_all_52.js
// Exhaustive verification of all 52 posts in api/seed_posts.js

import { SEED_POSTS } from '../api/seed_posts.js';

console.log('=== AMEVA Labs 74 Posts Corpus Integrity Audit ===\n');

let totalPosts = SEED_POSTS.length;
console.log(`Total Posts in Corpus: ${totalPosts}`);

if (totalPosts !== 74) {
  console.error(`[FAIL] Expected exactly 74 posts, found ${totalPosts}`);
  process.exit(1);
}

const categoryCounts = {};
let allPass = true;

SEED_POSTS.forEach((post, index) => {
  const cat = post.menu_id;
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;

  const errors = [];
  if (!post.title || post.title.trim().length === 0) errors.push('Missing Korean title');
  if (!post.title_eng || post.title_eng.trim().length === 0) errors.push('Missing English title');
  if (!post.content || post.content.trim().length < 100) errors.push('Korean content too short');
  if (!post.content_eng || post.content_eng.trim().length < 150) errors.push(`English content too short (${post.content_eng?.length})`);
  if (!post.tags || !post.tags.includes('#')) errors.push('Missing valid ontology tags');

  const parsedTags = (post.tags || '').match(/#[^#]+/g) || [];
  if (parsedTags.length === 0) errors.push('No parsed hashtags found');

  if (errors.length > 0) {
    console.error(`[FAIL] Post #${post.id} (index ${index}) [${post.menu_id}] "${post.title.substring(0, 30)}...":`, errors.join(', '));
    allPass = false;
  }
});

console.log('\n--- Breakdown by Category ---');
Object.entries(categoryCounts).forEach(([cat, count]) => {
  console.log(` - ${cat.padEnd(22)}: ${count} posts`);
});

const sample = SEED_POSTS[0];
console.log('\n--- Sample Post #0 Check ---');
console.log('Title (KO):', sample.title);
console.log('Title (EN):', sample.title_eng);
console.log('Tags:', sample.tags);
console.log('Parsed Tags Count:', (sample.tags.match(/#[^#]+/g) || []).length);
console.log('Content (KO) Length:', sample.content.length);
console.log('Content (EN) Length:', sample.content_eng.length);

const samplePaper = SEED_POSTS[SEED_POSTS.length - 1];
console.log(`\n--- Sample Paper #${samplePaper.id} Check ---`);
console.log('Title (KO):', samplePaper.title);
console.log('Title (EN):', samplePaper.title_eng);
console.log('Tags:', samplePaper.tags);
console.log('Parsed Tags Count:', (samplePaper.tags.match(/#[^#]+/g) || []).length);
console.log('Content (KO) Length:', samplePaper.content.length);
console.log('Content (EN) Length:', samplePaper.content_eng.length);

if (allPass) {
  console.log(`\n[SUCCESS] All ${totalPosts} posts passed all forensic integrity checks!`);
} else {
  console.error('\n[ERROR] Integrity audit detected failures.');
  process.exit(1);
}
