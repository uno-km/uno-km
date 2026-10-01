// tools/build_seed_posts_json.js
// Synchronize SEED_POSTS with deterministic IDs, fix Mermaid diagram text, and generate static shared/seed_posts.json

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedPostsPath = path.resolve(__dirname, '../api/seed_posts.js');
const targetJsonPath = path.resolve(__dirname, '../shared/seed_posts.json');

const rawFile = fs.readFileSync(seedPostsPath, 'utf8');
const jsonStart = rawFile.indexOf('[');
const jsonEnd = rawFile.lastIndexOf(']');
const posts = JSON.parse(rawFile.slice(jsonStart, jsonEnd + 1));

console.log(`Loaded ${posts.length} posts from ${seedPostsPath}`);

// Fix Post 1 Mermaid Diagram if needed
if (posts[1] && posts[1].content) {
  const oldDiagram = `    Hub["AMEVA Sovereign Edge AI 3대 도약"]:::main
    D1["1. Diffusion: 6.0B DiT 오프라인 완주<br/>(Galaxy S21 / --stream-layers / TAESD 1.2s)"]:::pillar
    D2["2. STT: whisper.cpp #4089 스플릿 모드<br/>(CPU 408% -> 16% 냉각 / 24.8% 가속)"]:::pillar
    D3["3. BitNet: v2.0.0 Sovereign Ternary<br/>(Word Salad 박멸 / PR #633 / 6GB RAM 7B 완주)"]:::pillar`;

  const newDiagram = `    Hub["AMEVA Sovereign Edge AI<br/>3대 핵심 연구 도약"]:::main
    D1["1. Diffusion: 6.0B DiT 완주<br/>Galaxy S21 · TAESD 1.2s"]:::pillar
    D2["2. STT: whisper.cpp #4089<br/>CPU 408% ➔ 16% 냉각"]:::pillar
    D3["3. BitNet: v2.0.0 Sovereign<br/>Ternary 1.58-bit 완주"]:::pillar`;

  if (posts[1].content.includes(oldDiagram)) {
    posts[1].content = posts[1].content.replace(oldDiagram, newDiagram);
    console.log('Fixed Post 1 Mermaid Diagram to prevent text clipping.');
  }
}

// Assign explicit 1-indexed IDs to all posts
posts.forEach((p, index) => {
  p.id = index + 1;
});

// Write updated api/seed_posts.js
const header = `// api/seed_posts.js - AMEVA Centralized Documentation Hub & Portfolio
// Auto-generated master archive with dual-language (KO/EN) and ontology tags

export const SEED_POSTS = `;

const updatedFileContent = header + JSON.stringify(posts, null, 2) + ';\n';
fs.writeFileSync(seedPostsPath, updatedFileContent, 'utf8');
console.log(`Updated ${seedPostsPath} with explicit IDs.`);

// Write shared/seed_posts.json for instant Edge CDN client loading
fs.writeFileSync(targetJsonPath, JSON.stringify(posts), 'utf8');
const stats = fs.statSync(targetJsonPath);
console.log(`Generated ${targetJsonPath} (${(stats.size / 1024).toFixed(1)} KB)`);
