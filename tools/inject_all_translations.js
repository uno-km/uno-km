// tools/inject_all_translations.js
// Inject academic English translations and ontology tags across all 52 posts in api/seed_posts.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { PART1_TRANSLATIONS } from './translations/paper_translations_part1.js';
import { PART2_TRANSLATIONS } from './translations/paper_translations_part2.js';
import { PART3_TRANSLATIONS } from './translations/paper_translations_part3.js';
import { PART4_TRANSLATIONS } from './translations/paper_translations_part4.js';
import { GROUP_A_TRANSLATIONS } from './translations/paper_translations_groupA.js';
import { GROUP_B_TRANSLATIONS } from './translations/paper_translations_groupB.js';
import { GROUP_C_TRANSLATIONS } from './translations/paper_translations_groupC.js';
import { GROUP_D_TRANSLATIONS } from './translations/paper_translations_groupD.js';
import { GROUP_E_TRANSLATIONS } from './translations/paper_translations_groupE.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPostsPath = path.resolve(__dirname, '../api/seed_posts.js');
const labsJsPath = path.resolve(__dirname, '../api/labs.js');

const rawFile = fs.readFileSync(seedPostsPath, 'utf8');
const jsonStart = rawFile.indexOf('[');
const jsonEnd = rawFile.lastIndexOf(']');
if (jsonStart === -1 || jsonEnd === -1) {
  throw new Error('Failed to find JSON array in seed_posts.js');
}

const seedPosts = JSON.parse(rawFile.slice(jsonStart, jsonEnd + 1));
console.log(`Loaded ${seedPosts.length} posts from seed_posts.js`);

const mergedTranslations = {
  ...PART1_TRANSLATIONS,
  ...PART2_TRANSLATIONS,
  ...PART3_TRANSLATIONS,
  ...PART4_TRANSLATIONS,
  ...GROUP_A_TRANSLATIONS,
  ...GROUP_B_TRANSLATIONS,
  ...GROUP_C_TRANSLATIONS,
  ...GROUP_D_TRANSLATIONS,
  ...GROUP_E_TRANSLATIONS,
};

console.log(`Total translation entries available: ${Object.keys(mergedTranslations).length}`);

let updatedCount = 0;
for (let i = 0; i < seedPosts.length; i++) {
  const trans = mergedTranslations[i];
  if (!trans) {
    console.error(`[ERROR] Missing translation for index ${i}: "${seedPosts[i].title}"`);
    process.exit(1);
  }

  seedPosts[i].title_eng = trans.title_eng.trim();
  seedPosts[i].content_eng = trans.content_eng.trim();
  seedPosts[i].tags = trans.tags.trim();
  updatedCount++;
}

console.log(`Successfully mapped all ${updatedCount} posts.`);

// Verification checks
for (let i = 0; i < seedPosts.length; i++) {
  const p = seedPosts[i];
  if (!p.title_eng || p.title_eng.length < 5) {
    throw new Error(`Invalid title_eng at index ${i}`);
  }
  if (!p.content_eng || p.content_eng.length < 200) {
    throw new Error(`Invalid content_eng at index ${i} (length: ${p.content_eng?.length})`);
  }
  if (!p.tags || !p.tags.includes('#')) {
    throw new Error(`Invalid tags at index ${i}: ${p.tags}`);
  }
}

console.log('All 52 posts passed strict validation (title_eng, content_eng > 200 chars, valid ontology tags).');

// Write out updated seed_posts.js
const header = `// api/seed_posts.js - AMEVA Centralized Documentation Hub & Portfolio
// Auto-generated master archive with dual-language (KO/EN) and ontology tags

export const SEED_POSTS = `;

const updatedFileContent = header + JSON.stringify(seedPosts, null, 2) + ';\n';
fs.writeFileSync(seedPostsPath, updatedFileContent, 'utf8');
console.log(`Successfully wrote ${updatedFileContent.length} bytes to ${seedPostsPath}`);

// Update SEED_VERSION in api/labs.js
let labsJsContent = fs.readFileSync(labsJsPath, 'utf8');
const oldVersionRegex = /const SEED_VERSION = ['"][^'"]+['"];/;
const newVersion = "const SEED_VERSION = 'v21_full_corpus_english_and_tags';";

if (!oldVersionRegex.test(labsJsContent)) {
  throw new Error('Failed to find SEED_VERSION in api/labs.js');
}

labsJsContent = labsJsContent.replace(oldVersionRegex, newVersion);
fs.writeFileSync(labsJsPath, labsJsContent, 'utf8');
console.log(`Successfully updated SEED_VERSION to 'v21_full_corpus_english_and_tags' in ${labsJsPath}`);

console.log('--- 100% Full Corpus Translation Injection Complete ---');
