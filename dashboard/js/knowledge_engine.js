/**
 * Korean Choseong (Consonant) Extractor Helper
 */
function getChoseong(str) {
  const choseongs = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 
    'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 0xAC00;
    if (code >= 0 && code < 11172) {
      result += choseongs[Math.floor(code / 588)];
    } else {
      result += str.charAt(i);
    }
  }
  return result.toLowerCase();
}

window.knowledgeEngine = {
  readmeMap: new Map(), // repoName -> raw markdown text
  fuseIndex: null,      // Fuse.js instance
  documents: [],        // Chunked text documents

  async init() {
    console.log("[Knowledge Engine] Initializing...");
    try {
      // 1. Fetch local README.md if on localhost/127.0.0.1
      const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.startsWith('192.168.');
      if (isLocal) {
        try {
          const localReadmeRes = await fetch('README.md');
          if (localReadmeRes.ok) {
            const localReadmeText = await localReadmeRes.text();
            this.readmeMap.set('AMEVA Neural Fabric', localReadmeText);
            this.readmeMap.set('AMEVA-LLM-Trainer', localReadmeText);
            this._chunkAndStore('AMEVA Neural Fabric', localReadmeText);
            this._chunkAndStore('AMEVA-LLM-Trainer', localReadmeText);
            console.log("[Knowledge Engine] Loaded local README.md for sandbox testing.");
          }
        } catch (e) {
          console.warn("[Knowledge Engine] Failed to fetch local README.md:", e);
        }
      }

      // 2. Fetch from GitHub API
      const username = 'uno-km';
      try {
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (reposRes.ok) {
          const repos = await reposRes.json();
          const amevaRepos = repos.filter(r => r.name.startsWith('AMEVA'));

          // Fetch all READMEs concurrently
          const fetchPromises = amevaRepos.map(async repo => {
            try {
              const branch = repo.default_branch || 'main';
              const readmeUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/${branch}/README.md`;
              
              const readmeRes = await fetch(readmeUrl);
              if (readmeRes.ok) {
                const text = await readmeRes.text();
                this.readmeMap.set(repo.name, text);
                this._chunkAndStore(repo.name, text);
              }
            } catch (e) {
              console.warn(`[Knowledge Engine] Failed to fetch README for ${repo.name}`, e);
            }
          });

          await Promise.all(fetchPromises);
        } else {
          console.warn("[Knowledge Engine] GitHub API request not OK. Using local/fallback only.");
        }
      } catch (err) {
        console.warn("[Knowledge Engine] GitHub API fetch error:", err);
      }

      console.log(`[Knowledge Engine] Loaded ${this.readmeMap.size} READMEs into memory.`);

      // Initialize Fuse.js with choseong support
      const fuseOptions = {
        includeScore: true,
        includeMatches: true,
        useExtendedSearch: true,
        ignoreLocation: true,
        minMatchCharLength: 2,
        threshold: 0.3, // Lower is stricter
        keys: [
          { name: 'repoName', weight: 0.3 },
          { name: 'text', weight: 0.5 },
          { name: 'choseongRepo', weight: 0.3 },
          { name: 'choseongText', weight: 0.4 }
        ]
      };

      this.fuseIndex = new Fuse(this.documents, fuseOptions);
      console.log("[Knowledge Engine] Fuse.js Index built successfully.");
      
    } catch (e) {
      console.error("[Knowledge Engine] Initialization failed:", e);
    }
  },

  _chunkAndStore(repoName, markdown) {
    // Basic chunking: split by paragraphs (double newline)
    const chunks = markdown.split(/\n\s*\n/);
    chunks.forEach(chunk => {
      const trimmed = chunk.trim();
      // Ignore tiny chunks
      if (trimmed.length > 20) {
        this.documents.push({
          id: `${repoName}-${Math.random().toString(36).substr(2, 9)}`,
          repoName: repoName,
          text: trimmed,
          choseongRepo: getChoseong(repoName),
          choseongText: getChoseong(trimmed)
        });
      }
    });
  },

  /**
   * Search the loaded knowledge base with support for Korean consonant/choseong queries.
   */
  search(query, limit = 5) {
    if (!this.fuseIndex) return [];
    
    const cleanQuery = query.replace(/\s+/g, '');
    const isConsonants = /^[ㄱ-ㅎ]+$/.test(cleanQuery);
    
    let searchStr = query;
    if (!isConsonants && query.length > 5) {
      // Extract key terms to construct an extended search query
      const words = query.replace(/은|는|이|가|을|를|의|에|에서|로|으로|과|와|도|만|해|무슨|뭐야/g, ' ')
                         .replace(/[^가-힣a-zA-Z0-9\s]/g, ' ')
                         .split(/\s+/)
                         .filter(w => w.length > 1);
      if (words.length > 0) {
        // Build OR query for Fuse.js extended search (e.g. "word1 | word2")
        searchStr = words.join(' | ');
      }
    }
    
    let results = this.fuseIndex.search(searchStr);
    
    if (isConsonants) {
      // Direct substring matches in choseongs get boosted to the very top
      const directMatches = [];
      const otherMatches = [];
      
      results.forEach(res => {
        const item = res.item;
        if (item.choseongRepo.includes(cleanQuery) || item.choseongText.includes(cleanQuery)) {
          res.score = (res.score || 0) * 0.05; // Boost score significantly (lower is better in Fuse)
          directMatches.push(res);
        } else {
          otherMatches.push(res);
        }
      });
      
      results = [...directMatches, ...otherMatches].sort((a, b) => (a.score || 0) - (b.score || 0));
    }
    
    return results.slice(0, limit);
  }
};

// Auto-initialize when loaded
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Fuse !== 'undefined') {
    window.knowledgeEngine.init();
  } else {
    console.error("[Knowledge Engine] Fuse.js is not loaded! Include the script tag in index.html.");
  }
});
