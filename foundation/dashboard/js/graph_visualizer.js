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

  // Hacker/Engineering log sequence
  const logs = [
    "Connecting to Neon PostgreSQL Knowledge Graph Engine...",
    "Querying 4-Tier Hierarchical Graph Nodes & N:M Relations...",
    "Hydrating 3D physics coordinates and SIMD metadata...",
    "Allocating D3.js force simulation memory buffer...",
    "Igniting AMEVA Neural Fabric synapses..."
  ];
  let logIdx = 0;
  const logInterval = setInterval(() => {
    if (subtextEl) {
      subtextEl.textContent = logs[logIdx % logs.length];
      logIdx++;
    }
  }, 350);

  try {
    let data = null;

    // 1. Primary: Fetch 4-Tier Graph dynamically from Neon PostgreSQL API
    try {
      const apiRes = await fetch('/api/graph');
      if (apiRes.ok) {
        const json = await apiRes.json();
        if (json.ok && json.data && json.data.nodes && json.data.nodes.length > 0) {
          data = json.data;
          console.log(`[AMEVA Graph] Successfully loaded ${data.nodes.length} nodes from ${json.source}.`);
        }
      }
    } catch (apiErr) {
      console.warn('[AMEVA Graph] Neon DB API fetch failed, trying local fallback:', apiErr.message);
    }

    // 2. Secondary Fallback: Load static 4-tier index if API fails or offline
    if (!data) {
      let fallback;
      try {
        fallback = await fetch('data/graph_index.json');
        if (!fallback.ok) fallback = await fetch('/dashboard/data/graph_index.json');
      } catch (e) {
        fallback = await fetch('/dashboard/data/graph_index.json');
      }
      if (fallback && fallback.ok) {
        data = await fallback.json();
        console.log('[AMEVA Graph] Loaded graph from local graph_index.json fallback.');
      }
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
      triggerGenesisGlow();
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

  // Create Node Groups with Hitboxes & Labels
  const nodeGroup = g.append('g')
    .attr('class', 'nodes-container')
    .selectAll('g.node-item')
    .data(data.nodes)
    .join('g')
    .attr('class', 'node-item')
    .attr('cursor', 'pointer')
    .attr('pointer-events', 'all')
    .attr('data-id', d => d.id);

  // 1. Invisible generous Hitbox circle (Radius = 32px for effortless clicking)
  nodeGroup.append('circle')
    .attr('class', 'node-hitbox')
    .attr('r', d => Math.max(32, (d.radius || 12) + 16))
    .attr('fill', 'transparent')
    .attr('stroke', 'transparent')
    .attr('pointer-events', 'all')
    .attr('cursor', 'pointer');

  // 2. Visible Visual Node Circle (Full radius set immediately on load!)
  node = nodeGroup.append('circle')
    .attr('class', 'node-visual')
    .attr('stroke', 'var(--bg-deep)')
    .attr('stroke-width', 1.5)
    .attr('r', d => Math.max(8, (d.radius || 14)))
    .attr('fill', d => colorScale(d.group))
    .attr('pointer-events', 'none');

  // 3. Text Label (Always visible on load)
  labels = nodeGroup.append('text')
    .attr('class', 'node-label')
    .attr('dx', d => (d.radius || 14) + 8)
    .attr('dy', 4)
    .text(d => d.name || d.id)
    .attr('font-family', 'var(--font-mono)')
    .attr('font-size', '13px')
    .attr('font-weight', 'bold')
    .attr('fill', 'var(--text-secondary)')
    .attr('pointer-events', 'all')
    .attr('cursor', 'pointer')
    .attr('opacity', 1);

  window.nodeElements = node;
  window.nodeGroups = nodeGroup;
  window.linkElements = link;

  // Bind Interactions IMMEDIATELY so clicks work without waiting for animation end
  bindNodeEvents();

  // Cascade Animation & Physics Launch
  return new Promise(resolve => {
    link.transition()
      .duration(600)
      .attr('opacity', 0.6);

    node.attr('r', d => Math.max(8, (d.radius || 14)));
    labels.attr('opacity', 1);

    simulation.on('tick', tick);
    simulation.alpha(1).alphaTarget(0.05).restart();
    resolve();
  });
}

let time = 0;
function tick() {
  time += 0.05;
  if (window.nodeGroups && typeof window.nodeGroups.data === 'function') {
    window.nodeGroups.data().forEach((d, i) => {
      d.vx += Math.sin(time + i) * 0.04;
      d.vy += Math.cos(time + i * 0.8) * 0.2;
    });
  }

  if (link) {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);
  }

  if (window.nodeGroups) {
    window.nodeGroups.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
  }
}

function bindNodeEvents() {
  const modalNode = document.getElementById('modal-node-detail');
  const btnCloseModal = document.getElementById('btn-close-node-modal');
  const tooltipSmall = document.getElementById('graph-tooltip-small');
  const tTitle = document.getElementById('tooltip-small-title');

  if (btnCloseModal && modalNode) {
    btnCloseModal.onclick = (e) => {
      e.stopPropagation();
      modalNode.classList.remove('is-active');
      modalNode.style.cssText = 'display: none !important;';
    };
  }

  if (modalNode) {
    modalNode.onclick = (e) => {
      if (e.target === modalNode) {
        modalNode.classList.remove('is-active');
        modalNode.style.cssText = 'display: none !important;';
      }
    };
  }

  // Attach D3 Drag to node groups
  if (window.nodeGroups) {
    window.nodeGroups.call(drag(simulation));
  }

  // NATIVE CAPTURE EVENT DELEGATION ON SVG ROOT (Cannot be stopped by D3 zoom or drag!)
  const svgRoot = document.querySelector('#graph-container svg');
  if (svgRoot && !svgRoot.__hasCaptureListeners) {
    svgRoot.__hasCaptureListeners = true;

    let pDown = { x: 0, y: 0, time: 0, targetData: null };

    svgRoot.addEventListener('pointerdown', (e) => {
      const group = e.target.closest('.node-item');
      if (group && group.__data__) {
        pDown = { x: e.clientX, y: e.clientY, time: Date.now(), targetData: group.__data__ };
      } else {
        pDown.targetData = null;
      }
    }, true); // CAPTURE PHASE!

    svgRoot.addEventListener('pointerup', (e) => {
      if (pDown.targetData) {
        const dx = Math.abs(e.clientX - pDown.x);
        const dy = Math.abs(e.clientY - pDown.y);
        const dt = Date.now() - pDown.time;

        // If moved less than 10px and released within 1000ms -> 100% UNCONDITIONAL CLICK!
        if (dx <= 10 && dy <= 10 && dt <= 1000) {
          e.stopPropagation();
          e.preventDefault();
          if (window.audioEngine) window.audioEngine.playDeepBass();
          if (tooltipSmall) tooltipSmall.classList.remove('is-visible');
          console.log('[Capture Click] Opening node modal for:', pDown.targetData.id);
          renderNodeModal(pDown.targetData);
        }
        pDown.targetData = null;
      }
    }, true); // CAPTURE PHASE!

    // Direct click fallback
    svgRoot.addEventListener('click', (e) => {
      const group = e.target.closest('.node-item');
      if (group && group.__data__) {
        e.stopPropagation();
        e.preventDefault();
        if (window.audioEngine) window.audioEngine.playDeepBass();
        if (tooltipSmall) tooltipSmall.classList.remove('is-visible');
        console.log('[Direct Click] Opening node modal for:', group.__data__.id);
        renderNodeModal(group.__data__);
      }
    }, true);
  }

  // Hover animations on node groups
  if (window.nodeGroups) {
    window.nodeGroups
      .on('mouseover', function (event, d) {
        if (window.audioEngine) window.audioEngine.playTick();
        d3.select(this).select('.node-visual')
          .transition().duration(150)
          .attr('r', (d.radius || 12) * 1.3)
          .attr('stroke', '#fff')
          .attr('stroke-width', 2.5);

        if (tooltipSmall && tTitle) {
          tTitle.textContent = d.name || d.id;
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
        d3.select(this).select('.node-visual')
          .transition().duration(150)
          .attr('r', d.radius || 12)
          .attr('stroke', 'var(--bg-deep)')
          .attr('stroke-width', 1.5);

        if (tooltipSmall) tooltipSmall.classList.remove('is-visible');
      });
  }
}

/**
 * Handle Drag events
 */
let isNodeDragging = false;
let dragStartCoords = { x: 0, y: 0 };

function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
    isNodeDragging = false;
    dragStartCoords = { x: event.x, y: event.y };
  }

  function dragged(event) {
    const dx = Math.abs(event.x - dragStartCoords.x);
    const dy = Math.abs(event.y - dragStartCoords.y);
    if (dx > 4 || dy > 4) {
      isNodeDragging = true;
    }
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
    const res = await fetch('data/tour_data.json');
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


/**
 * ═════════════════════════════════════════════════════════════
 * AMEVA SOVEREIGN MUSEUM DOCENT ENGINE (Cinematic Audio Guide)
 * ═════════════════════════════════════════════════════════════
 */
let docentTourSteps = [];
let currentDocentTrack = 'full';
let currentDocentIndex = 0;
let isDocentPaused = false;
let docentProgressInterval = null;
let docentTypewriterTimeout = null;

async function loadMuseumDocentData() {
  try {
    let tourRes;
    try {
      tourRes = await fetch('data/tour_data.json');
      if (!tourRes.ok) tourRes = await fetch('/dashboard/data/tour_data.json');
    } catch(e) {
      tourRes = await fetch('/dashboard/data/tour_data.json');
    }
    const tourJson = await tourRes.json();
    return tourJson.steps || [];
  } catch (err) {
    console.warn('[DocentTour] Failed to load tour_data.json:', err);
    return [];
  }
}

function filterTrackSteps(rawSteps, trackId) {
  if (!rawSteps || rawSteps.length === 0) return [];
  if (trackId === 'full') return rawSteps;
  return rawSteps.filter(s => s.track && s.track.includes(trackId));
}

window.startMuseumDocentTour = async function(track = 'full') {
  const overlay = document.getElementById('tour-overlay');
  if (!overlay) return;

  const rawSteps = await loadMuseumDocentData();
  docentTourSteps = filterTrackSteps(rawSteps, track);
  if (docentTourSteps.length === 0) {
    if (window.showToast) window.showToast('도슨트 해설 대본을 불러올 수 없습니다.');
    return;
  }

  overlay.classList.remove('is-hidden');
  isDocentPaused = false;

  const btnPrev = document.getElementById('btn-tour-prev');
  const btnNext = document.getElementById('btn-tour-next');
  const btnPlayPause = document.getElementById('btn-tour-playpause');
  const playPauseIcon = document.getElementById('tour-playpause-icon');
  const btnExit = document.getElementById('btn-tour-exit');
  const btnTts = document.getElementById('btn-tour-tts');
  const ttsIcon = document.getElementById('tts-icon');
  const ttsSpeedSelect = document.getElementById('tts-speed-select');
  const trackSelect = document.getElementById('docent-track-select');
  
  const stepCounter = document.getElementById('tour-step-counter');
  const tourTitle = document.getElementById('tour-title');
  const tourCuratorNote = document.getElementById('tour-curator-note');
  const tourTypeTag = document.getElementById('tour-type-tag');
  const tourTech = document.getElementById('tour-tech');
  const tourCommand = document.getElementById('tour-command');
  const commandContainer = document.getElementById('tour-command-container');
  const tourDesc = document.getElementById('tour-desc');
  const progressCircle = document.getElementById('tour-progress-circle');

  if (trackSelect) trackSelect.value = track;
  if (playPauseIcon) playPauseIcon.textContent = '⏸';

  function showExhibitionStep(index) {
    if (index < 0 || index >= docentTourSteps.length) return;

    currentDocentIndex = index;
    const step = docentTourSteps[index];

    if (docentProgressInterval) clearInterval(docentProgressInterval);
    if (docentTypewriterTimeout) clearTimeout(docentTypewriterTimeout);
    if (window.audioEngine) window.audioEngine.stopSpeech();

    // 1. Update UI
    if (stepCounter) stepCounter.textContent = `전시실 ${index + 1} / ${docentTourSteps.length}`;
    if (tourTitle) tourTitle.textContent = step.title;
    if (tourCuratorNote) tourCuratorNote.textContent = step.curatorNote || '';
    if (tourTypeTag) tourTypeTag.textContent = step.type === 'repo' ? 'TLP 프로젝트' : (step.type === 'kernel' ? '핵심 커널' : '전시관');
    if (tourTech) tourTech.textContent = step.tech || 'AMEVA Native';
    if (commandContainer && tourCommand) {
      if (step.command) {
        tourCommand.textContent = step.command;
        commandContainer.style.display = 'block';
      } else {
        commandContainer.style.display = 'none';
      }
    }

    // 2. 3D Camera Warp & Chime
    let targetNode = null;
    if (node && typeof node.each === 'function') {
      node.each(function(d) {
        if (d.id === step.nodeId) targetNode = d;
      });
    }
    if (targetNode) {
      zoomToNode(targetNode);
      if (window.audioEngine) window.audioEngine.playMuseumChime();
    }

    // 3. Live Markdown & Architecture Showcase Rendering & Auto-Scroll
    const showcaseViewport = document.getElementById('showcase-viewport');
    const showcaseScrollStatus = document.getElementById('showcase-scroll-status');
    const tourTierTag = document.getElementById('tour-tier-tag');
    const tourLiveLink = document.getElementById('tour-live-link');

    if (tourTierTag) {
      tourTierTag.textContent = targetNode ? `Tier ${targetNode.group || 1} ${targetNode.category || ''}` : 'TLP Project';
    }

    if (tourLiveLink && targetNode) {
      const targetUrl = targetNode.docs_url || targetNode.url || targetNode.repo_url || '#';
      tourLiveLink.href = targetUrl;
      tourLiveLink.style.display = targetUrl !== '#' ? 'inline-flex' : 'none';
    }

    // Calculate total duration for this exhibition step
    const totalDurationMs = Math.max(7500, (step.description.length * 85));

    if (showcaseViewport) {
      showcaseViewport.scrollTop = 0;
      showcaseViewport.innerHTML = `
        <div class="showcase-loading">
          <div class="spinner" style="width:16px; height:16px; border:2px solid var(--accent-cyan); border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite;"></div>
          <span>Rendering live documentation for <strong>${step.title}</strong>...</span>
        </div>
      `;

      // Cancel previous auto-scroll animation frame
      if (window.docentScrollRaf) cancelAnimationFrame(window.docentScrollRaf);

      // Fetch & Render README / Specs
      const nodeForReadme = targetNode || { id: step.nodeId, name: step.title };
      loadReadmeContent(nodeForReadme).then(rawMd => {
        if (!showcaseViewport) return;
        if (typeof marked !== 'undefined' && rawMd) {
          showcaseViewport.innerHTML = marked.parse(rawMd);
        } else {
          showcaseViewport.innerHTML = `<div style="padding:10px 0;"><h4>${step.title}</h4><p>${step.description}</p></div>`;
        }

        // Start Smooth Cinematic Auto-Scroll
        let scrollStart = null;
        let isHovered = false;

        showcaseViewport.onmouseenter = () => {
          isHovered = true;
          if (showcaseScrollStatus) {
            showcaseScrollStatus.textContent = '⏸ Paused (Manual Scroll)';
            showcaseScrollStatus.style.color = '#f59e0b';
          }
        };
        showcaseViewport.onmouseleave = () => {
          isHovered = false;
          if (showcaseScrollStatus) {
            showcaseScrollStatus.textContent = '⚡ Auto-Scrolling';
            showcaseScrollStatus.style.color = '#3ECF8E';
          }
        };

        function smoothScrollStep(timestamp) {
          if (!scrollStart) scrollStart = timestamp;
          const elapsed = timestamp - scrollStart;
          const maxScroll = showcaseViewport.scrollHeight - showcaseViewport.clientHeight;

          if (maxScroll > 0 && !isHovered && !isDocentPaused) {
            // Eased cinematic progression from top to bottom
            const progress = Math.min(1, elapsed / (totalDurationMs - 1000));
            showcaseViewport.scrollTop = maxScroll * progress;
          }

          if (elapsed < totalDurationMs && currentDocentIndex === index) {
            window.docentScrollRaf = requestAnimationFrame(smoothScrollStep);
          }
        }

        window.docentScrollRaf = requestAnimationFrame(smoothScrollStep);
      });
    }

    // 4. Subtitle Typewriter
    if (tourDesc) {
      tourDesc.textContent = '';
      const text = step.description;
      let charIdx = 0;
      const typeNext = () => {
        if (charIdx < text.length && currentDocentIndex === index) {
          tourDesc.textContent += text.charAt(charIdx);
          charIdx++;
          docentTypewriterTimeout = setTimeout(typeNext, 28);
        }
      };
      typeNext();
    }

    // 5. Progress Ring & Auto-Advance Timer
    let elapsedMs = 0;
    const updateFreqMs = 50;

    if (progressCircle) {
      const radius = 16;
      const circ = 2 * Math.PI * radius;
      progressCircle.style.strokeDasharray = `${circ}`;
      progressCircle.style.strokeDashoffset = `${circ}`;

      docentProgressInterval = setInterval(() => {
        if (isDocentPaused) return;
        elapsedMs += updateFreqMs;
        const pct = Math.min(1.0, elapsedMs / totalDurationMs);
        progressCircle.style.strokeDashoffset = `${circ * (1 - pct)}`;

        if (pct >= 1.0) {
          clearInterval(docentProgressInterval);
          if (currentDocentIndex + 1 < docentTourSteps.length) {
            showExhibitionStep(currentDocentIndex + 1);
          } else {
            exitMuseumTour();
          }
        }
      }, updateFreqMs);
    }

    // 6. Voice Narration
    if (window.audioEngine && !window.audioEngine.isMuted) {
      window.audioEngine.speakDocentNarration(step.description);
    }
  }

  function exitMuseumTour() {
    overlay.classList.add('is-hidden');
    if (docentProgressInterval) clearInterval(docentProgressInterval);
    if (docentTypewriterTimeout) clearTimeout(docentTypewriterTimeout);
    if (window.docentScrollRaf) cancelAnimationFrame(window.docentScrollRaf);
    if (window.audioEngine) window.audioEngine.stopSpeech();
    isDocentPaused = false;
    if (svg && zoomBehavior) {
      const width = container.clientWidth;
      const height = container.clientHeight;
      svg.transition().duration(1200)
        .call(zoomBehavior.transform, d3.zoomIdentity.translate(width / 2, height / 2).scale(0.8).translate(-width / 2, -height / 2));
    }
  }

  // Controls Event Listeners
  if (btnNext) {
    btnNext.onclick = () => {
      if (currentDocentIndex + 1 < docentTourSteps.length) {
        showExhibitionStep(currentDocentIndex + 1);
      } else {
        exitMuseumTour();
      }
    };
  }

  if (btnPrev) {
    btnPrev.onclick = () => {
      if (currentDocentIndex > 0) {
        showExhibitionStep(currentDocentIndex - 1);
      }
    };
  }

  if (btnPlayPause) {
    btnPlayPause.onclick = () => {
      isDocentPaused = !isDocentPaused;
      if (playPauseIcon) playPauseIcon.textContent = isDocentPaused ? '▶' : '⏸';
      if (isDocentPaused && window.audioEngine) {
        window.audioEngine.stopSpeech();
      } else if (!isDocentPaused && window.audioEngine) {
        const step = docentTourSteps[currentDocentIndex];
        if (step) window.audioEngine.speakDocentNarration(step.description);
      }
    };
  }

  if (btnTts) {
    btnTts.onclick = () => {
      if (window.audioEngine) {
        const muted = window.audioEngine.toggleMute();
        if (ttsIcon) ttsIcon.textContent = muted ? '🔇' : '🔈';
      }
    };
  }

  if (ttsSpeedSelect) {
    ttsSpeedSelect.onchange = (e) => {
      if (window.audioEngine) {
        window.audioEngine.setSpeechRate(e.target.value);
      }
    };
  }

  if (trackSelect) {
    trackSelect.onchange = (e) => {
      window.startMuseumDocentTour(e.target.value);
    };
  }

  if (btnExit) {
    btnExit.onclick = exitMuseumTour;
  }

  // Start from Step 0
  showExhibitionStep(0);
};

window.startTour = function() {
  window.startMuseumDocentTour('full');
};


// Global In-Memory Cache for fetched Readmes
const readmeCache = new Map();

async function loadReadmeContent(d) {
  if (readmeCache.has(d.id)) {
    return readmeCache.get(d.id);
  }

  const urlsToTry = [];
  if (d.readme_url) urlsToTry.push(d.readme_url);
  if (d.metadata && d.metadata.readme_url) urlsToTry.push(d.metadata.readme_url);
  
  const repoName = d.id;
  urlsToTry.push(`https://raw.githubusercontent.com/uno-km/${repoName}/main/README.md`);
  urlsToTry.push(`https://raw.githubusercontent.com/uno-km/${repoName}/master/README.md`);
  if (repoName === 'AMEVA-Universe' || repoName === 'Eunho-Kim-CV') {
    urlsToTry.push('https://raw.githubusercontent.com/uno-km/uno-km/main/README.md');
  }
  if (repoName === 'AMEVA-Foundation') {
    urlsToTry.push('https://raw.githubusercontent.com/uno-km/uno-km/main/FOUNDATION.md');
  }
  if (repoName === 'termux-playwright') {
    urlsToTry.push('https://raw.githubusercontent.com/uno-km/termux-playwright-demo/main/README.md');
  }
  if (repoName === 'AMEVA-Workstation') {
    urlsToTry.push('https://raw.githubusercontent.com/uno-km/AMEVA-Workstation-Web/main/README.md');
  }

  for (const url of urlsToTry) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const text = await res.text();
        if (text && text.length > 50 && !text.includes('404: Not Found')) {
          readmeCache.set(d.id, text);
          return text;
        }
      }
    } catch (e) {
      // Continue next candidate
    }
  }

  // Structured Fallback Markdown
  let fallbackMd = `# ${d.name || d.id}\n\n${d.description || 'AMEVA Sovereign Edge AI Ecosystem Component'}\n\n`;
  if (d.tech_stack && d.tech_stack.length > 0) {
    fallbackMd += '### 🛠️ Tech Stack\n' + d.tech_stack.map(t => `- **${t}**`).join('\n') + '\n\n';
  }
  if (d.docs_url) {
    fallbackMd += `### 📖 Official Documentation\n- [Visit Documentation Portal](${d.docs_url})\n`;
  }
  if (d.repo_url) {
    fallbackMd += `### 📦 GitHub Repository\n- [View Source Code](${d.repo_url})\n`;
  }
  readmeCache.set(d.id, fallbackMd);
  return fallbackMd;
}

export function renderNodeModal(d) {
  if (!d) return;
  console.log('[AMEVA Docent] renderNodeModal triggered for:', d.id || d.name);

  const modalNode = document.getElementById('modal-node-detail');
  const mTitle = document.getElementById('node-modal-title');
  const mDesc = document.getElementById('node-modal-desc');
  const mLink = document.getElementById('node-modal-link');

  if (!modalNode || !mTitle || !mDesc) {
    console.error('[AMEVA Docent] Modal DOM elements missing!');
    return;
  }

  // 1. GUARANTEED ZERO-DELAY MODAL DISPLAY (Open first before anything else)
  modalNode.classList.add('is-active');
  modalNode.style.cssText = 'display: flex !important; visibility: visible !important; opacity: 1 !important; z-index: 999999 !important; pointer-events: auto !important; position: fixed !important; inset: 0 !important;';

  const tierBadge = d.group ? `<span style="font-size:0.75rem; background:rgba(0,239,255,0.15); color:var(--accent-cyan); padding:3px 10px; border-radius:6px; margin-left:10px; border:1px solid rgba(0,239,255,0.3); font-weight:600;">Tier ${d.group} ${d.category || ''}</span>` : '';
  mTitle.innerHTML = `${d.name || d.id} ${tierBadge}`;

  try {
    // 2. Safe Parent Node Navigation Button
    let backBtnHTML = '';
    let parentNode = null;
    if (window.linkElements && typeof window.linkElements.data === 'function') {
      const parentLink = window.linkElements.data().find(l => {
        const targetId = l.target ? (l.target.id || l.target) : null;
        return targetId === d.id;
      });
      if (parentLink && parentLink.source) {
        parentNode = parentLink.source;
        backBtnHTML = `<div class="back-btn-container" style="margin-bottom:14px;">
          <button class="btn-node-back" data-id="${parentNode.id || parentNode}" style="background:rgba(124,58,237,0.15); border:1px solid var(--accent-purple); color:#c4b5fd; padding:6px 14px; border-radius:6px; cursor:pointer; font-family:var(--font-mono); font-size:0.82rem; transition:all 0.2s ease;">
            ⬅️ 상위: ${parentNode.name || parentNode.id || parentNode} (으)로 이동
          </button>
        </div>`;
      }
    }

    // 3. Safe Child Nodes Hierarchy
    let childrenHTML = '';
    if (window.linkElements && typeof window.linkElements.data === 'function') {
      const childLinks = window.linkElements.data().filter(l => {
        const sourceId = l.source ? (l.source.id || l.source) : null;
        return sourceId === d.id;
      });
      const children = childLinks.map(l => l.target).filter(Boolean);
      if (children.length > 0) {
        childrenHTML = '<div class="child-nodes-container" style="margin-top:20px; border-top:1px solid var(--border-subtle); padding-top:16px;">';
        childrenHTML += '<h4 style="color:var(--accent-cyan); font-family:var(--font-mono); margin-bottom:12px; font-size:0.9rem;">🪐 하위 연결 노드 (' + children.length + '개)</h4>';
        childrenHTML += '<ul class="child-node-list" style="list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:8px;">';
        children.forEach(child => {
          childrenHTML += `<li class="child-node-item" data-id="${child.id || child}" style="background:rgba(255,255,255,0.06); padding:8px 12px; border-radius:8px; cursor:pointer; font-family:var(--font-mono); font-size:0.82rem; border:1px solid rgba(255,255,255,0.1); transition:all 0.2s ease;">
             <span style="margin-right:6px;">🔹</span> <strong>${child.name || child.id || child}</strong>
          </li>`;
        });
        childrenHTML += '</ul></div>';
      }
    }

    // 4. Executive Summary 3-Line Card
    let executiveCardHTML = `
      <div style="background:linear-gradient(135deg, rgba(124,58,237,0.12), rgba(0,239,255,0.08)); border:1px solid rgba(0,239,255,0.3); border-radius:8px; padding:14px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px; color:var(--accent-cyan); font-family:var(--font-mono); font-weight:bold; font-size:0.85rem;">
          <span>📌 Executive Summary &amp; Core Specs</span>
        </div>
        <p style="font-size:0.92rem; color:#f8fafc; line-height:1.55; margin:0 0 10px 0; font-weight:500;">
          ${d.description || 'Sovereign On-Device AI & Autonomous Software Engineering Component.'}
        </p>
    `;

    if (d.tech_stack && d.tech_stack.length > 0) {
      const badges = d.tech_stack.map(t => `<span style="font-size:0.75rem; background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.2); padding:2px 8px; border-radius:4px; margin-right:4px; color:#e2e8f0; font-family:var(--font-mono);">${t}</span>`).join('');
      executiveCardHTML += `<div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:10px;">${badges}</div>`;
    }

    if ((d.metadata && d.metadata.pypi) || (d.metadata && d.metadata.npm) || d.repo_url) {
      executiveCardHTML += `<div style="background:rgba(0,0,0,0.5); padding:8px 12px; border-radius:6px; font-family:var(--font-mono); font-size:0.8rem; border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:4px;">`;
      if (d.metadata && d.metadata.pypi) executiveCardHTML += `<div style="color:#3ECF8E;">$ pip install ${d.metadata.pypi}</div>`;
      if (d.metadata && d.metadata.npm) executiveCardHTML += `<div style="color:#00EFFF;">$ npm install ${d.metadata.npm}</div>`;
      if (d.repo_url) executiveCardHTML += `<div style="color:#cbd5e1; font-size:0.75rem;">📦 Repo: <a href="${d.repo_url}" target="_blank" style="color:var(--accent-cyan);">${d.repo_url}</a></div>`;
      executiveCardHTML += `</div>`;
    }
    executiveCardHTML += `</div>`;

    // 5. Initial placeholder with loading spinner for README
    const readmeContainerId = `readme-body-${Date.now()}`;
    const initialReadmeHTML = `<div id="${readmeContainerId}" class="markdown-body" style="background:rgba(15,23,42,0.6); padding:20px; border-radius:10px; border:1px solid var(--border-subtle); max-height:50vh; overflow-y:auto; font-size:0.9rem; line-height:1.65;">
      <div style="display:flex; align-items:center; gap:10px; color:var(--text-secondary);">
        <div class="spinner" style="width:18px; height:18px; border:2px solid var(--accent-cyan); border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite;"></div>
        <span>📖 Fetching repository README documentation from GitHub...</span>
      </div>
    </div>`;

    mDesc.innerHTML = `${backBtnHTML}${executiveCardHTML}${initialReadmeHTML}${childrenHTML}`;

    // Asynchronously load and parse full README markdown
    loadReadmeContent(d).then(rawMd => {
      const el = document.getElementById(readmeContainerId);
      if (el) {
        if (typeof marked !== 'undefined' && rawMd) {
          el.innerHTML = marked.parse(rawMd);
        } else {
          el.innerHTML = `<pre style="white-space:pre-wrap;">${rawMd}</pre>`;
        }
      }
    });

    // 6. Action Button Link
    const targetUrl = d.docs_url || d.url || d.repo_url;
    if (mLink) {
      if (targetUrl) {
        mLink.href = targetUrl;
        mLink.style.display = 'inline-flex';
        mLink.innerHTML = `<span>Explore Documentation &amp; Code</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="width:18px; height:18px; margin-left:6px;"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>`;
      } else {
        mLink.style.display = 'none';
      }
    }

    // 7. Event Delegation for child and parent navigation
    mDesc.onclick = (e) => {
      const backBtn = e.target.closest('.btn-node-back');
      if (backBtn && window.nodeGroups && typeof window.nodeGroups.data === 'function') {
        const parentId = backBtn.getAttribute('data-id');
        const pNode = window.nodeGroups.data().find(n => n.id === parentId);
        if (pNode) {
          zoomToNode(pNode);
          renderNodeModal(pNode);
        }
        return;
      }

      const item = e.target.closest('.child-node-item');
      if (item && window.nodeGroups && typeof window.nodeGroups.data === 'function') {
        const childId = item.getAttribute('data-id');
        const childNode = window.nodeGroups.data().find(n => n.id === childId);
        if (childNode) {
          zoomToNode(childNode);
          renderNodeModal(childNode);
        }
      }
    };
  } catch (renderErr) {
    console.error('[AMEVA Docent] renderNodeModal error:', renderErr);
    mDesc.innerHTML = `<div style="padding:16px; color:#f87171;"><h4>${d.name || d.id}</h4><p>${d.description || ''}</p></div>`;
  }

  zoomToNode(d);
}

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

export function triggerGenesisGlow() {
  if (!window.nodeElements || !window.linkElements) return;

  if (window.audioEngine && typeof window.audioEngine.playPowerUp === 'function') {
    window.audioEngine.playPowerUp();
  }

  // 1. Nodes inflate, pulse drop-shadow, and return to baseline size
  window.nodeElements.transition()
    .duration(800)
    .ease(d3.easeExpoOut)
    .attr('r', d => d.radius * 2.5)
    .style('filter', 'drop-shadow(0 0 20px #00EFFF) drop-shadow(0 0 10px #7C3AED)')
    .style('stroke', '#3ECF8E')
    .style('stroke-width', '3px')
    .transition()
    .duration(1200)
    .ease(d3.easeSineInOut)
    .attr('r', d => d.radius)
    .style('filter', null)
    .style('stroke', null)
    .style('stroke-width', null);

  // 2. Links briefly glow and expand, then return to normal opacity/width
  window.linkElements.transition()
    .duration(800)
    .ease(d3.easeExpoOut)
    .attr('stroke', '#00EFFF')
    .attr('stroke-width', d => Math.sqrt(d.value) * 3)
    .attr('stroke-opacity', 1)
    .transition()
    .duration(1200)
    .ease(d3.easeSineInOut)
    .attr('stroke', 'var(--border-subtle)')
    .attr('stroke-width', d => Math.sqrt(d.value))
    .attr('stroke-opacity', 0.6);
}

window.triggerGenesisGlow = triggerGenesisGlow;




/**
 * Smoothly zoom and center 3D camera to target node
 */
export function zoomToNode(d) {
  if (!d || !svg || !zoomBehavior || !container) return;
  try {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const targetX = (typeof d.x === 'number') ? d.x : width / 2;
    const targetY = (typeof d.y === 'number') ? d.y : height / 2;
    const scale = 1.35;

    svg.transition()
      .duration(850)
      .ease(d3.easeCubicOut)
      .call(
        zoomBehavior.transform,
        d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(scale)
          .translate(-targetX, -targetY)
      );
  } catch (err) {
    console.warn('[ZoomToNode] Transition warning:', err);
  }
}


// GLOBAL WINDOW-LEVEL DIRECT CLICK DISPATCHER (100% UNCONDITIONAL TRIGGER)
if (typeof window !== 'undefined') {
  window.addEventListener('click', (e) => {
    const nodeEl = e.target.closest('.node-item, circle, text');
    if (nodeEl && nodeEl.__data__) {
      console.log('[Global Window Click] Node detected:', nodeEl.__data__.id);
      renderNodeModal(nodeEl.__data__);
    }
  }, true);
}
