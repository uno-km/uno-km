/**
 * ============================================================
 * AMEVA Edge-Native AI Dashboard — Graph Visualizer (D3.js)
 * ============================================================
 * 
 * Handles rendering the interactive Force-directed graph representing
 * the AMEVA codebase and ecosystem using D3.js.
 */

// We assume D3 is available globally via the CDN script tag.
// If using a bundler later, this would be: import * as d3 from 'd3';

const container = document.getElementById('graph-container');

const placeholder = document.getElementById('graph-placeholder');

// Color palette mapping to Supabase x Obsidian aesthetic
const colorScale = d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range([
    '#7C3AED', // Root - Obsidian Purple
    '#3ECF8E', // LLM - Supabase Green
    '#00EFFF', // RAG - Cyan
    '#F59E0B', // Vis - Amber
    '#EF4444'  // Python - Red
  ]);

let svg, simulation, link, node, labels;
let zoomBehavior = null;  // Module-scope zoom (was local to renderGraph — caused TTS crash)

/**
 * Initialize the graph by loading the JSON data
 */
export async function initGraph() {
  const subtextEl = document.getElementById('loading-subtext');

  // Fake Hacker-style log sequence
  const logs = [
    "Establishing secure connection to GitHub API...",
    "Querying uno-km repository list...",
    "Filtering repositories by 'AMEVA' prefix...",
    "Parsing metadata and categorizing nodes...",
    "Allocating D3.js physics layout memory...",
    "Igniting Neural Fabric synapses..."
  ];
  let logIdx = 0;
  const logInterval = setInterval(() => {
    if (subtextEl) {
      subtextEl.textContent = logs[logIdx % logs.length];
      logIdx++;
    }
  }, 400);

  try {
    // 1. Fetch from GitHub API dynamically
    const username = 'uno-km'; // GitHub username
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);

    let data;

    if (response.ok) {
      const repos = await response.json();

      // 1. Fetch Ecosystem DB
      const dbResponse = await fetch('ecosystem_db.json');
      const dbRoot = await dbResponse.json();

      const nodes = [];
      const links = [];
      const branchMap = new Map(); // topic -> branchNodeId

      // 재귀적으로 DB 트리를 파싱하여 노드와 링크 배열 생성
      function parseTree(nodeData, parentId = null) {
        const nodeObj = {
          id: nodeData.id,
          group: parentId ? 2 : 1, // Root is 1, branches are 2
          radius: nodeData.metadata?.root ? 28 : (parentId ? 20 : 16),
          description: nodeData.description || "",
          metadata: nodeData.metadata || {},
          matchTopics: nodeData.match_topics || [],
          phaseX: Math.random() * Math.PI * 2, phaseY: Math.random() * Math.PI * 2,
          freqX: 0.001 + Math.random() * 0.001, freqY: 0.001 + Math.random() * 0.001
        };
        nodes.push(nodeObj);

        if (parentId) {
          links.push({ source: parentId, target: nodeData.id, value: 3 });
        }

        if (nodeData.match_topics) {
          nodeData.match_topics.forEach(t => {
            branchMap.set(t.toLowerCase(), nodeData.id);
          });
        }

        if (nodeData.children) {
          nodeData.children.forEach(child => parseTree(child, nodeData.id));
        }
      }

      parseTree(dbRoot);

      repos.forEach(repo => {
        const name = repo.name;
        if (!name.startsWith('AMEVA')) return; // AMEVA 프리픽스만 허용

        const topics = (repo.topics || []).map(t => t.toLowerCase());
        let attached = false;
        const linkedParents = new Set();

        topics.forEach(topic => {
          if (branchMap.has(topic)) {
            // DB에 정의된 브랜치에 매칭
            const targetId = branchMap.get(topic);
            if (!linkedParents.has(targetId)) {
              links.push({ source: targetId, target: repo.name, value: 1 });
              linkedParents.add(targetId);
            }
            attached = true;
          } else {
            // DB에 없는 새로운 토픽 발견! 동적으로 새로운 중간 브랜치 생성
            const newBranchId = `Category: ${topic}`;
            if (!nodes.find(n => n.id === newBranchId)) {
              nodes.push({
                id: newBranchId,
                group: 4,
                radius: 16,
                description: `동적으로 생성된 [${topic}] 토픽 브랜치입니다.`,
                metadata: { dynamic: true },
                phaseX: Math.random() * Math.PI * 2, phaseY: Math.random() * Math.PI * 2,
                freqX: 0.002, freqY: 0.002
              });
              // 루트(dbRoot.id)에 새 브랜치를 붙임
              links.push({ source: dbRoot.id, target: newBranchId, value: 2 });
              branchMap.set(topic, newBranchId);
            }
            if (!linkedParents.has(newBranchId)) {
              links.push({ source: newBranchId, target: repo.name, value: 1 });
              linkedParents.add(newBranchId);
            }
            attached = true;
          }
        });

        // 토픽이 없거나 매칭 실패 시 루트 노드에 직접 연결 (Fallback)
        if (!attached) {
          links.push({ source: dbRoot.id, target: repo.name, value: 1 });
        }

        // 레포지토리 노드 추가
        nodes.push({
          id: repo.name,
          group: 5,
          radius: 12,
          description: repo.description || "No description provided.",
          url: repo.html_url,
          isRepo: true,
          matchTopics: topics,
          phaseX: Math.random() * Math.PI * 2, phaseY: Math.random() * Math.PI * 2,
          freqX: 0.003 + Math.random() * 0.003, freqY: 0.003 + Math.random() * 0.003
        });
      });

      data = { nodes, links };
    } else {
      console.warn("GitHub API limit exceeded or failed. Falling back to local index.");
      const fallback = await fetch('graph_index.json');
      data = await fallback.json();
    }

    if (window.tagCloud) {
      window.tagCloud.buildFromGraph(data);
    }

    if (placeholder) placeholder.style.display = 'none';

    // Start drawing sequence
    if (subtextEl) subtextEl.textContent = "Initiating cascade sequence...";
    await renderGraph(data);

    // Hide global loading screen
    clearInterval(logInterval);
    const globalLoading = document.getElementById('global-loading');
    if (globalLoading) {
      globalLoading.classList.add('is-hidden');
    }

    // 로딩 완료 후 친절한 안내 메시지 띄우기 (1~2초 사이)
    setTimeout(() => {
      if (window.showToast) {
        window.showToast("각 노드들을 눌러서 AMEVA 프로젝트를 탐험해 보세요!");
      }
    }, 800);

    window.addEventListener('resize', handleResize);
  } catch (error) {
    clearInterval(logInterval);
    console.error('[AMEVA D3] Failed to load graph:', error);
    if (placeholder) {
      placeholder.innerHTML = `<span style="color:var(--danger)">Graph Loading Failed</span>`;
    }
    // Hide loading screen even on error
    const globalLoading = document.getElementById('global-loading');
    if (globalLoading) globalLoading.classList.add('is-hidden');
  }
}

/**
 * Render the force-directed graph with cinematic cascade effect
 */
async function renderGraph(data) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  d3.select('#graph-container').select('svg').remove();

  svg = d3.select('#graph-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;');

  const g = svg.append('g');

  zoomBehavior = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    });

  svg.call(zoomBehavior);
  svg.on("dblclick.zoom", null);

  // Initialize simulation WITH nodes but STOP it so physics don't run yet
  simulation = d3.forceSimulation(data.nodes)
    // 원래의 텐션으로 되돌려 카테고리별 군집 형태를 단단하게 유지
    .force('link', d3.forceLink(data.links).id(d => d.id).distance(120))
    .force('charge', d3.forceManyBody().strength(-400))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collide', d3.forceCollide().radius(d => d.radius + 15).iterations(2))
    .stop(); // PREVENT initial CPU spike

  link = g.append('g')
    .attr('stroke', 'var(--border-subtle)')
    .attr('stroke-opacity', 0.6)
    .selectAll('line')
    .data(data.links)
    .join('line')
    .attr('stroke-width', d => Math.sqrt(d.value))
    .attr('opacity', 0); // start invisible

  node = g.append('g')
    .attr('stroke', 'var(--bg-deep)')
    .attr('stroke-width', 1.5)
    .selectAll('circle')
    .data(data.nodes)
    .join('circle')
    .attr('r', 0) // start radius 0
    .attr('fill', d => colorScale(d.group))
    .attr('cursor', d => d.url ? 'pointer' : 'grab');

  window.nodeElements = node;
  window.linkElements = link;

  labels = g.append('g')
    .selectAll('text')
    .data(data.nodes)
    .join('text')
    .attr('dx', d => d.radius + 8)
    .attr('dx', d => d.radius + 8)
    .attr('dy', 4)
    .text(d => d.id)
    .attr('font-family', 'var(--font-mono)')
    .attr('font-size', '14px')
    .attr('font-weight', 'bold')
    .attr('fill', 'var(--text-secondary)')
    .attr('pointer-events', 'none')
    .attr('opacity', 0); // start invisible

  // Cascade Animation (Fly-in / Grow)
  // We return a Promise that resolves when the animation finishes
  return new Promise(resolve => {
    // 1. Links fade in slowly
    link.transition()
      .duration(800)
      .attr('opacity', 1);

    // 2. Nodes pop in one by one (cascade)
    const totalNodes = data.nodes.length;
    let finishedNodes = 0;

    node.transition()
      .duration(400)
      .delay((d, i) => i * 30) // cascade effect
      .attr('r', d => d.radius)
      .on('end', () => {
        finishedNodes++;
        if (finishedNodes === totalNodes) {
          // Show labels
          labels.transition().duration(400).attr('opacity', 1);

          // 3. Start simulation AFTER all nodes are drawn
          simulation.on('tick', tick);
          // alphaTarget을 조금 더 높여서(0.05) 물리 엔진이 더 활발하게 반응하도록 함
          simulation.alpha(1).alphaTarget(0.05).restart();

          // 4. Bind Interactions AFTER rendering
          bindNodeEvents();
          resolve();
        }
      });
  });
}

let time = 0;
function tick() {
  time += 0.05;
  // 부드러운 아메바(Amoeba) 무빙 이펙트: 모든 노드에 아주 미세한 사인 곡선 힘을 가함 (제자리 둥실둥실)
  if (node && node.data) {
    node.data().forEach((d, i) => {
      d.vx += Math.sin(time + i) * 0.04;
      d.vy += Math.cos(time + i * 0.8) * 0.2;
    });
  }

  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  node
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  if (labels) {
    labels
      .attr('x', d => d.x)
      .attr('y', d => d.y);
  }
}

function bindNodeEvents() {
  node.call(drag(simulation));

  // UI Elements
  const tooltipSmall = document.getElementById('graph-tooltip-small');
  const tTitle = document.getElementById('tooltip-small-title');

  const modalNode = document.getElementById('modal-node-detail');
  const mTitle = document.getElementById('node-modal-title');
  const mDesc = document.getElementById('node-modal-desc');
  const mLink = document.getElementById('node-modal-link');
  const btnCloseModal = document.getElementById('btn-close-node-modal');

  // Close modal event
  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      modalNode.classList.remove('is-active');
    });
  }

  if (modalNode) {
    modalNode.addEventListener('click', (e) => {
      // Close only if the backdrop itself was clicked (not the modal card inside)
      if (e.target === modalNode) {
        modalNode.classList.remove('is-active');
      }
    });
  }

  // Node Interactions
  node.on('mouseover', function (event, d) {
    if (window.audioEngine) window.audioEngine.playTick();
    d3.select(this)
      .transition().duration(200)
      .attr('r', d.radius * 1.3)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2);

    link.transition().duration(200)
      .attr('stroke', l => l.source.id === d.id || l.target.id === d.id ? colorScale(d.group) : 'var(--border-subtle)')
      .attr('stroke-opacity', l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.2);

    // Show Small Tooltip tracking mouse
    if (tooltipSmall && tTitle) {
      tTitle.textContent = d.id;
      tooltipSmall.classList.add('is-visible');
      tooltipSmall.style.left = (event.pageX + 15) + 'px';
      tooltipSmall.style.top = (event.pageY + 15) + 'px';
    }
  })
    .on('mousemove', function (event) {
      if (tooltipSmall) {
        tooltipSmall.style.left = (event.pageX + 15) + 'px';
        tooltipSmall.style.top = (event.pageY + 15) + 'px';
      }
    })
    .on('mouseout', function (event, d) {
      d3.select(this)
        .transition().duration(200)
        .attr('r', d.radius)
        .attr('stroke', 'var(--bg-deep)')
        .attr('stroke-width', 1.5);

      link.transition().duration(200)
        .attr('stroke', 'var(--border-subtle)')
        .attr('stroke-opacity', 0.6);

      if (tooltipSmall) {
        tooltipSmall.classList.remove('is-visible');
      }
    })
    .on('click', function (event, d) {
      if (window.audioEngine) window.audioEngine.playDeepBass();
      // Hide small tooltip
      if (tooltipSmall) tooltipSmall.classList.remove('is-visible');

      // 렌더링 함수 호출
      renderNodeModal(d);
    });

  // End of bindNodeEvents
}

/**
 * Handle Drag events
 */
function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);
}

/**
 * Resize handler to keep graph centered
 */
function handleResize() {
  if (!svg || !simulation) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  svg
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  simulation.force('center', d3.forceCenter(width / 2, height / 2));
  simulation.alpha(0.3).restart();
}

// Auto-initialize when loaded as a module
document.addEventListener('DOMContentLoaded', () => {
  // Add a slight delay to ensure CSS variables and fonts are loaded
  setTimeout(initGraph, 100);
});

// ─── Cinematic Tour & TTS Logic (REWRITTEN — loads from tour_data.json) ───
let currentTourIndex = 0;
let tourSteps = [];
let isTourActive = false;
let isTtsEnabled = true;
let autoAdvanceTimer = null;
let currentUtterance = null;
let ringAnimFrame = null;
let cachedTourData = null;
let currentTtsRate = 1.2;

// Constants
const CIRCUMFERENCE = 2 * Math.PI * 16; // ~100.53
const MIN_STEP_DURATION_MS = 3500;
const TRANSITION_BUFFER_MS = 1500;

// Preload tour data from JSON
async function loadTourData() {
  if (cachedTourData) return cachedTourData;
  try {
    const res = await fetch('tour_data.json');
    if (!res.ok) throw new Error('Tour data not found');
    cachedTourData = await res.json();
    return cachedTourData;
  } catch (err) {
    console.warn('[AMEVA Tour] Failed to load tour_data.json:', err);
    return null;
  }
}

// Warm up speechSynthesis for Chrome
function warmUpTTS() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      window.speechSynthesis.getVoices();
    }, { once: true });
  }
}
warmUpTTS();

// Find best Korean voice
function getKoreanVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  // Prioritize modern high-quality Edge Azure Neural voices if available
  const bestVoice = voices.find(v => v.lang.includes('ko') && (v.name.includes('Natural') || v.name.includes('Online')));
  return bestVoice || voices.find(v => v.lang === 'ko-KR') || voices.find(v => v.lang.startsWith('ko')) || null;
}

// Estimate TTS duration from text length
function estimateTTSDuration(text) {
  const charsPerSecondKo = 4.5 * currentTtsRate;
  const charCount = text.length;
  const estimatedMs = (charCount / charsPerSecondKo) * 1000;
  return Math.max(MIN_STEP_DURATION_MS, estimatedMs) + TRANSITION_BUFFER_MS;
}

window.startTour = async function () {
  const tourOverlay = document.getElementById('tour-overlay');
  if (!tourOverlay || !node) return;

  // Load tour data
  const tourData = await loadTourData();
  if (!tourData || !tourData.steps || tourData.steps.length === 0) {
    if (window.showToast) window.showToast('투어 데이터를 불러올 수 없습니다.');
    return;
  }

  tourSteps = tourData.steps;

  // UI Elements
  let btnNext = document.getElementById('btn-tour-next');
  let btnPrev = document.getElementById('btn-tour-prev');
  let btnExit = document.getElementById('btn-tour-exit');
  let btnTts = document.getElementById('btn-tour-tts');
  let ttsSpeedSelect = document.getElementById('tts-speed-select');

  const titleEl = document.getElementById('tour-title');
  const descEl = document.getElementById('tour-desc');
  const detailsEl = document.getElementById('tour-details');
  const techEl = document.getElementById('tour-tech');
  const algEl = document.getElementById('tour-alg');

  // Clear old listeners by cloning
  btnNext.replaceWith(btnNext.cloneNode(true)); btnNext = document.getElementById('btn-tour-next');
  btnPrev.replaceWith(btnPrev.cloneNode(true)); btnPrev = document.getElementById('btn-tour-prev');
  btnExit.replaceWith(btnExit.cloneNode(true)); btnExit = document.getElementById('btn-tour-exit');
  btnTts.replaceWith(btnTts.cloneNode(true)); btnTts = document.getElementById('btn-tour-tts');
  if (ttsSpeedSelect) {
    ttsSpeedSelect.replaceWith(ttsSpeedSelect.cloneNode(true));
    ttsSpeedSelect = document.getElementById('tts-speed-select');
    // Initialize select to current rate
    ttsSpeedSelect.value = currentTtsRate.toFixed(1);
  }

  // Select DOM elements inside wrappers AFTER cloning
  let ttsIcon = document.getElementById('tts-icon');
  const progressRing = document.getElementById('tour-progress-circle');

  isTourActive = true;
  currentTourIndex = 0;
  tourOverlay.classList.remove('is-hidden');

  // Stop TTS + timers + ring
  const stopAll = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    clearTimeout(autoAdvanceTimer);
    cancelAnimationFrame(ringAnimFrame);
    if (progressRing) {
      progressRing.style.strokeDashoffset = CIRCUMFERENCE;
      progressRing.classList.remove('ring-intense');
    }
  };

  // Exit tour
  const exitTour = () => {
    isTourActive = false;
    stopAll();
    tourOverlay.classList.add('is-hidden');
    // Zoom out
    if (svg && zoomBehavior) {
      const width = container.clientWidth;
      const height = container.clientHeight;
      svg.transition().duration(1500)
        .call(zoomBehavior.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8).translate(-width / 2, -height / 2));
    }
    if (window.showToast) window.showToast('웰컴 아메바 유니버스!');
  };

  // Show a tour step
  const showStep = (index) => {
    if (!isTourActive || index < 0 || index >= tourSteps.length) return;
    stopAll();

    const step = tourSteps[index];

    // Update UI
    titleEl.textContent = step.title;
    descEl.textContent = step.description || '';
    detailsEl.style.display = 'block';
    techEl.textContent = step.tech || '';

    // Show/hide algorithm field (repurpose as GitHub link for repos)
    if (step.github) {
      algEl.innerHTML = `<a href="${step.github}" target="_blank" rel="noopener noreferrer" class="tour-github-link">🔗 GitHub 리포지토리</a>`;
    } else {
      algEl.innerHTML = step.type === 'category' ? '<span class="tour-tech-badge">카테고리 노드</span>' : '';
    }

    // Step counter — inject or update
    let counterEl = tourOverlay.querySelector('.tour-step-counter');
    if (!counterEl) {
      counterEl = document.createElement('div');
      counterEl.className = 'tour-step-counter';
      tourOverlay.querySelector('.tour-content').prepend(counterEl);
    }
    counterEl.textContent = `${index + 1} / ${tourSteps.length}`;

    // Find matching D3 node and zoom to it
    let targetNode = null;
    node.each(function (d) {
      if (d.id === step.nodeId) targetNode = d;
    });

    if (targetNode) {
      zoomToNode(targetNode);
    }

    // Build speech text
    // Remove emojis and special markdown/symbol characters
    const cleanTtsText = (str) => {
      if (!str) return '';
      return str
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[\[\]*#_~`>+\-=/|\\(){}]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    };

    const rawText = `${step.title}. ${step.description}. 핵심 기술 스택은 ${step.tech} 입니다.`;
    const speechText = cleanTtsText(rawText);
    const estimatedDurationMs = estimateTTSDuration(speechText);

    // ── Progress Ring Animation (drives auto-advance) ──
    const ringStartTime = performance.now();
    const animateRing = (now) => {
      if (!isTourActive) return;
      const elapsed = now - ringStartTime;
      const progress = Math.min(1, elapsed / estimatedDurationMs);
      const offset = CIRCUMFERENCE - (CIRCUMFERENCE * progress);
      if (progressRing) {
        progressRing.style.strokeDashoffset = offset;
        // 75% intensity change
        if (progress >= 0.75) {
          progressRing.classList.add('ring-intense');
        } else {
          progressRing.classList.remove('ring-intense');
        }
      }

      if (progress < 1) {
        ringAnimFrame = requestAnimationFrame(animateRing);
      } else {
        // Ring complete → auto-advance
        if (currentTourIndex + 1 < tourSteps.length) {
          currentTourIndex++;
          showStep(currentTourIndex);
        } else {
          exitTour();
        }
      }
    };
    ringAnimFrame = requestAnimationFrame(animateRing);

    // ── TTS (plays alongside ring, doesn't control timing) ──
    if (isTtsEnabled && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel(); // Cancel any pending
        currentUtterance = new SpeechSynthesisUtterance(speechText);
        currentUtterance.lang = 'ko-KR';
        currentUtterance.rate = currentTtsRate;

        const koVoice = getKoreanVoice();
        if (koVoice) currentUtterance.voice = koVoice;

        currentUtterance.onerror = (e) => {
          console.warn('[AMEVA TTS] Speech error:', e.error);
        };

        window.speechSynthesis.speak(currentUtterance);
      } catch (e) {
        console.warn('[AMEVA TTS] Failed to speak:', e);
      }
    }
  };

  // ── Navigation Controls ──
  btnNext.addEventListener('click', () => {
    if (currentTourIndex + 1 < tourSteps.length) {
      currentTourIndex++;
      showStep(currentTourIndex);
    } else {
      exitTour();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentTourIndex > 0) {
      currentTourIndex--;
      showStep(currentTourIndex);
    }
  });

  btnTts.addEventListener('click', () => {
    isTtsEnabled = !isTtsEnabled;
    if (ttsIcon) ttsIcon.textContent = isTtsEnabled ? '🔈' : '🔇';
    if (!isTtsEnabled && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    // Re-show current step (restarts ring + optionally TTS)
    showStep(currentTourIndex);
  });

  if (ttsSpeedSelect) {
    ttsSpeedSelect.addEventListener('change', (e) => {
      currentTtsRate = parseFloat(e.target.value);
      showStep(currentTourIndex);
    });
  }

  btnExit.addEventListener('click', exitTour);

  // Start first step
  showStep(currentTourIndex);
};

/**
 * Helper to smoothly zoom and pan to a specific node
 */
export function zoomToNode(targetNode) {
  if (targetNode && svg && zoomBehavior) {
    const scale = 2.0;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const tx = -targetNode.x * scale + width / 2;
    const ty = -targetNode.y * scale + height / 2;
    svg.transition().duration(1200).ease(d3.easeCubicOut)
      .call(zoomBehavior.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
  }
}

/**
 * Render the modal detail card for a selected node
 */
export function renderNodeModal(d) {
  const modalNode = document.getElementById('modal-node-detail');
  const mTitle = document.getElementById('node-modal-title');
  const mDesc = document.getElementById('node-modal-desc');
  const mLink = document.getElementById('node-modal-link');
  if (!modalNode || !mTitle || !mDesc) return;

  mTitle.textContent = d.id;

  // 1. Parent Node Back Button
  let backBtnHTML = '';
  const parentLink = link.data().find(l => l.target.id === d.id);
  if (parentLink) {
    const parentNode = parentLink.source;
    backBtnHTML = `<div class="back-btn-container" style="margin-bottom:15px;">
      <button class="btn-node-back" data-id="${parentNode.id}" style="background:transparent; border:1px solid var(--accent-purple); color:var(--accent-purple); padding:6px 12px; border-radius:6px; cursor:pointer; font-family:var(--font-mono); font-size:0.8rem; transition:all 0.2s ease;">
        ⬅️ ${parentNode.id} (으)로 돌아가기
      </button>
    </div>`;
  }

  // 2. Child Nodes List
  let childrenHTML = '';
  const children = link.data()
    .filter(l => l.source.id === d.id)
    .map(l => l.target);

  if (children.length > 0) {
    childrenHTML = '<div class="child-nodes-container" style="margin-top:20px; border-top:1px solid var(--border-subtle); padding-top:15px;">';
    childrenHTML += '<h4 style="color:var(--accent-cyan); font-family:var(--font-mono); margin-bottom:12px; font-size:0.9rem;">👇 하위 노드 목록</h4>';
    childrenHTML += '<ul class="child-node-list" style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px;">';
    children.forEach(child => {
      childrenHTML += `<li class="child-node-item" data-id="${child.id}" style="background:rgba(255,255,255,0.05); padding:10px 14px; border-radius:8px; cursor:pointer; font-family:var(--font-mono); font-size:0.85rem; border:1px solid transparent; transition:all 0.2s ease;">
         <span style="margin-right:8px;">${child.isRepo ? '📦' : '📂'}</span> ${child.id}
      </li>`;
    });
    childrenHTML += '</ul></div>';
  }

  let descHTML = d.description || 'No description provided.';
  if (d.isRepo && window.knowledgeEngine && window.knowledgeEngine.readmeMap.has(d.id)) {
    const readmeMarkdown = window.knowledgeEngine.readmeMap.get(d.id);
    if (typeof marked !== 'undefined') {
      descHTML = marked.parse(readmeMarkdown);
    }
  } else {
    descHTML = `<p>${descHTML}</p>`;
  }

  mDesc.innerHTML = `${backBtnHTML}${descHTML}${childrenHTML}`;

  if (d.url) {
    mLink.href = d.url;
    mLink.style.display = 'inline-flex';
  } else {
    mLink.style.display = 'none';
  }

  // Event delegation
  mDesc.onclick = (e) => {
    const backBtn = e.target.closest('.btn-node-back');
    if (backBtn) {
      const parentId = backBtn.getAttribute('data-id');
      const pNode = node.data().find(n => n.id === parentId);
      if (pNode) {
        zoomToNode(pNode);
        renderNodeModal(pNode);
      }
      return;
    }

    const item = e.target.closest('.child-node-item');
    if (item) {
      const childId = item.getAttribute('data-id');
      const childNode = node.data().find(n => n.id === childId);
      if (childNode) {
        zoomToNode(childNode);
        renderNodeModal(childNode);
      }
    }
  };

  modalNode.classList.add('is-active');
  zoomToNode(d);
}

/**
 * Expose selecting and navigating to a node by ID to the window object
 */
export function selectNodeById(id) {
  if (!node || !node.data) return false;
  const targetNode = node.data().find(n => n.id === id || n.id.toLowerCase() === id.toLowerCase());
  if (targetNode) {
    renderNodeModal(targetNode);
    zoomToNode(targetNode);
    return true;
  }
  return false;
}

window.selectNodeById = selectNodeById;


