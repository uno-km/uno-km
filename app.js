import { CreateMLCEngine, prebuiltAppConfig } from "https://esm.run/@mlc-ai/web-llm";

/**
 * ============================================================
 * AMEVA Edge-Native AI Dashboard — Core Application Controller
 * ============================================================
 * 
 * Handles: UI toggles, environment checks (mobile/WebGPU),
 * chat panel animations, and localStorage session memory.
 */

// ─── DOM References ────────────────────────────────────────
const fab           = document.getElementById('fab-chat');
const chatPanel     = document.getElementById('chat-panel');
const btnClose      = document.getElementById('btn-close-chat');
const btnClear      = document.getElementById('btn-clear-chat');
const chatInput     = document.getElementById('chat-input');
const btnSend       = document.getElementById('btn-send');
const chatLog       = document.getElementById('chat-log');
const webgpuDot     = document.getElementById('webgpu-dot');
const webgpuStatus  = document.getElementById('webgpu-status');
const modalMobile   = document.getElementById('modal-mobile');
const modalWebgpu   = document.getElementById('modal-webgpu');
const modalStorage  = document.getElementById('modal-storage');
const codexPanel    = document.getElementById('codex-panel');
const btnCloseCodex = document.getElementById('btn-close-codex');
const btnDismissMobile = document.getElementById('btn-dismiss-mobile');
const btnDismissWebgpu = document.getElementById('btn-dismiss-webgpu');
const btnStartTour  = document.getElementById('btn-start-tour');
const downloadOverlay = document.getElementById('download-overlay');
const btnDownload   = document.getElementById('btn-start-download');
const progressBar   = document.getElementById('progress-bar-fill');
const progressText  = document.getElementById('progress-text');
const progressPct   = document.getElementById('progress-percent');
const downloadProg  = document.getElementById('download-progress');
const engineStatus  = document.getElementById('chat-engine-status');
const btnStopGen    = document.getElementById('btn-stop-gen');
const btnStartTourPc = document.getElementById('btn-start-tour-pc');
const btnJustViewCodex = document.getElementById('btn-just-view-codex');

// ─── WebLLM Config ─────────────────────────────────────────
let engine = null;
let isPanelOpen = false;
let isEngineReady = false;
let isFallbackMode = false;
let isGenerating = false;

const modelId = "Qwen2.5-1.5B-Instruct-q4f16_1-MLC";

// ─── 경로 로직 ───
const repoName = "uno-km";
const localModelUrl = `https://raw.githubusercontent.com/uno-km/${repoName}/ameva-page/models/${modelId}/resolve/main/../../`;

// Dynamically fetch the default config to get the correct WASM URL and HuggingFace Model URL
const defaultModelConfig = prebuiltAppConfig.model_list.find(m => m.model_id === modelId) || {
  model_id: modelId,
  model_lib: "qwen2.5-q4f16_1-ctx4k_cs1k-webgpu.wasm" // safe fallback
};

const appConfigLocal = {
  model_list: [
    {
      ...defaultModelConfig,
      model_url: localModelUrl,
      model: localModelUrl
    }
  ]
};

const appConfigHF = {
  model_list: [
    defaultModelConfig
  ]
};

// ─── LFS 대역폭 체크 함수 ───
// 깃허브 LFS 트래픽이 초과되었는지 확인합니다. 초과되었다면 .bin 파일이 134바이트짜리 포인터로 내려옵니다.
async function checkLocalLfsHealth(url) {
  try {
    const res = await fetch(url + 'params_shard_0.bin', { method: 'HEAD' });
    if (!res.ok) return false;
    
    const size = parseInt(res.headers.get('content-length') || '0', 10);
    // 포인터 파일은 보통 150바이트 미만이므로, 비정상적으로 작으면 LFS 대역폭 소진으로 간주
    if (size > 0 && size < 1024) return false;
    
    return true;
  } catch (e) {
    return false;
  }
}

// ─── Environment Checks ───────────────────────────────────
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent);
}

function hasWebGPU() {
  return !!navigator.gpu;
}

// ─── Initialize ────────────────────────────────────────────
function init() {
  if (isMobileDevice()) {
    isFallbackMode = true;
  } else if (!hasWebGPU()) {
    isFallbackMode = true;
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('offline');
    webgpuStatus.textContent = 'Absent';
    webgpuStatus.style.color = 'var(--danger)';
  } else {
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('online');
    webgpuStatus.textContent = 'Online';
  }

  if (isFallbackMode) {
    // Change FAB to book icon
    fab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`;
  }

  bindEvents();
  restoreSession();
}

// ─── Event Bindings ─────────────────────────────────────────
function bindEvents() {
  fab.addEventListener('click', togglePanel);
  if (btnClose) btnClose.addEventListener('click', closePanel);
  if (btnClear) btnClear.addEventListener('click', clearChat);
  if (btnSend) btnSend.addEventListener('click', handleSend);
  if (btnCloseCodex) btnCloseCodex.addEventListener('click', closePanel);

  if (btnDismissMobile) {
    btnDismissMobile.addEventListener('click', () => {
      modalMobile.classList.remove('is-active');
      openPanel();
    });
  }
  if (btnDismissWebgpu) {
    btnDismissWebgpu.addEventListener('click', () => {
      modalWebgpu.classList.remove('is-active');
      openPanel();
    });
  }

  if (btnStartTour) {
    btnStartTour.addEventListener('click', () => {
      closePanel();
      if (window.startTour) window.startTour();
    });
  }

  // PC Tour button binding
  if (btnStartTourPc) {
    btnStartTourPc.addEventListener('click', () => {
      closePanel();
      if (window.startTour) window.startTour();
    });
  }

  // Just view Codex button binding
  if (btnJustViewCodex) {
    btnJustViewCodex.addEventListener('click', () => {
      isFallbackMode = true; // Switch to fallback mode manually
      closePanel(); // Close chat panel
      fab.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`;
      openPanel(); // Open codex panel (now fallback mode is true)
      if (window.showToast) window.showToast('코덱스(가이드 투어) 모드로 전환되었습니다.');
    });
  }

  // Stop generation button
  if (btnStopGen) {
    btnStopGen.addEventListener('click', () => {
      if (isGenerating && engine) {
        try { engine.interruptGenerate(); } catch(e) { console.warn('[AMEVA] Interrupt failed:', e); }
        isGenerating = false;
      }
    });
  }

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  });

  btnDownload.addEventListener('click', handleDownloadClick);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPanelOpen) {
      closePanel();
    }
  });
}

// ─── Toast System ─────────────────────────────────────────────
window.showToast = function(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => {
    if (t.parentNode === container) container.removeChild(t);
  }, 3500);
};

// ─── Profile Modal Logic ────────────────────────────────────
const btnWhoMade = document.getElementById('btn-who-made');
const modalProfile = document.getElementById('modal-profile');
const btnCloseProfile = document.getElementById('btn-close-profile');
const profileContent = document.getElementById('profile-content');

if (btnWhoMade && modalProfile) {
  btnWhoMade.addEventListener('click', async () => {
    modalProfile.classList.add('is-active');
    try {
      const res = await fetch('profile.md');
      if (!res.ok) throw new Error("Profile not found");
      const text = await res.text();
      profileContent.innerHTML = marked.parse(text);
    } catch (e) {
      profileContent.innerHTML = `<div style="color:var(--danger)">프로필을 불러오지 못했습니다. (${e.message})</div>`;
    }
  });
}
if (btnCloseProfile) {
  btnCloseProfile.addEventListener('click', () => {
    modalProfile.classList.remove('is-active');
  });
}

// ─── Panel Toggle ───────────────────────────────────────────
function togglePanel() {
  if (isPanelOpen) closePanel();
  else openPanel();
}

function openPanel() {
  isPanelOpen = true;
  fab.classList.add('is-open');
  fab.setAttribute('aria-label', 'Close panel');
  
  if (isFallbackMode) {
    codexPanel.classList.add('is-visible');
  } else {
    chatPanel.classList.add('is-visible');
    if (isEngineReady && chatInput) {
      setTimeout(() => chatInput.focus(), 400);
    }
  }
}

function closePanel() {
  isPanelOpen = false;
  if (chatPanel) chatPanel.classList.remove('is-visible');
  if (codexPanel) codexPanel.classList.remove('is-visible');
  fab.classList.remove('is-open');
  fab.setAttribute('aria-label', isFallbackMode ? 'Open Codex' : 'Open AI chat');
}

// ─── Download Handler (WebLLM Integration) ──────────────────
async function handleDownloadClick() {
  btnDownload.disabled = true;
  btnDownload.innerHTML = '<div class="spinner"></div> Initializing…';
  downloadProg.style.display = 'flex';

  try {
    const initProgressCallback = (report) => {
      const pct = Math.floor(report.progress * 100);
      progressBar.style.width = pct + '%';
      progressPct.textContent = pct + '%';
      progressText.textContent = report.text;
    };

    // Verify LFS health before initializing WebLLM to avoid cache poisoning
    progressText.textContent = "Verifying local model repository health...";
    const isLocalHealthy = await checkLocalLfsHealth(localModelUrl);
    
    let selectedConfig = appConfigHF;
    if (isLocalHealthy) {
      progressText.textContent = "Local LFS is healthy. Loading model from GitHub...";
      selectedConfig = appConfigLocal;
    } else {
      progressText.textContent = "Local LFS bandwidth exhausted. Falling back to Hugging Face...";
      progressText.style.color = "var(--accent-purple)";
      // Wait a brief moment so the user can see the message
      await new Promise(resolve => setTimeout(resolve, 1500));
      progressText.style.color = "";
    }

    // Initialize WebLLM using the selected configuration
    engine = await CreateMLCEngine(modelId, {
      appConfig: selectedConfig,
      initProgressCallback: initProgressCallback
    });

    onEngineReady();
  } catch (error) {
    console.error("[AMEVA] WebLLM Initialization Error:", error);
    btnDownload.innerHTML = 'Initialization Failed';
    progressText.textContent = "Error: Check console for details.";
    progressText.style.color = "var(--danger)";
  }
}

function onEngineReady() {
  isEngineReady = true;
  downloadOverlay.classList.add('is-hidden');
  
  chatInput.disabled = false;
  btnSend.disabled = false;
  chatInput.placeholder = 'AMEVA에 대해 질문하세요…';
  chatInput.focus();

  engineStatus.textContent = 'engine: active';
  engineStatus.style.color = 'var(--accent-green)';

  document.getElementById('tps-speed').classList.remove('dim');
  document.getElementById('tps-tokens').classList.remove('dim');
  document.getElementById('tps-latency').classList.remove('dim');
}

// ─── Message Handling (Actual LLM streaming) ────────────────
async function handleSend() {
  const text = chatInput.value.trim();
  if (!text || !isEngineReady || !engine) return;

  // Append User message
  appendMessage('user', text);
  chatInput.value = '';
  chatInput.style.height = 'auto';
  saveSession();

  // Disable input, show stop button, hide send button
  chatInput.disabled = true;
  btnSend.disabled = true;
  isGenerating = true;
  if (btnStopGen) btnStopGen.classList.remove('is-hidden');
  if (btnSend) btnSend.style.display = 'none';

  // Create an empty AI message bubble for streaming
  const aiMsgDiv = document.createElement('div');
  aiMsgDiv.className = 'chat-msg ai';
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'msg-bubble';
  aiMsgDiv.appendChild(bubbleDiv);
  chatLog.appendChild(aiMsgDiv);

  try {
    let contextStr = "AMEVA는 곰팡이나 생물학적 아메바가 아닙니다. AMEVA 프로젝트는 오프라인 엣지 환경에서 구동되는 로컬 AI 에코시스템 및 레포지토리들의 집합체입니다.\n주요 카테고리: 멀티플렉스 어플리케이션(에이전트 오케스트라, 윈도우 어시스턴트, 뷰포트 등), 소셜 리서치(데드 인터넷 씨어터 등), LLM, STT, MLOps.\n\n";
    let sources = [];

    if (window.graphData && window.graphData.nodes) {
      const queryWords = text.toLowerCase().split(/\s+/).filter(w => w.length > 1);
      
      // Calculate a basic score for each repo based on keyword matches
      const scoredNodes = window.graphData.nodes
        .filter(n => n.isRepo)
        .map(n => {
          const targetText = (n.id + " " + (n.description || "")).toLowerCase();
          let score = 0;
          queryWords.forEach(w => {
            if (targetText.includes(w)) score++;
            if (w === '소셜리서치' && targetText.includes('social research')) score += 2;
            if (w === '아메바' && targetText.includes('ameva')) score += 2;
          });
          return { node: n, score };
        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score);

      if (scoredNodes.length > 0) {
        contextStr += "[검색된 레포지토리 정보]\n";
        scoredNodes.slice(0, 3).forEach(x => {
          contextStr += `- ${x.node.id}: ${x.node.description || '설명 없음'}\n`;
          sources.push({ name: x.node.id, url: x.node.url || "#" });
        });
      } else {
        contextStr += "[검색된 특정 레포지토리 정보가 없습니다.]";
      }
    }

    const messages = [
      { role: "system", content: `You are AMEVA Cortex, a helpful Edge-native AI assistant representing the AMEVA ecosystem. Answer politely in Korean.
Base your answers ON THE FOLLOWING CONTEXT. DO NOT hallucinate biological facts about Amoeba.
CONTEXT:
${contextStr}
` },
      { role: "user", content: text }
    ];

    const asyncChunkGenerator = await engine.chat.completions.create({
      messages,
      stream: true,
      temperature: 0.7,
      max_tokens: 512,
    });

    let fullResponse = "";
    const startTime = performance.now();
    let tokenCount = 0;

    for await (const chunk of asyncChunkGenerator) {
      // Check if generation was interrupted
      if (!isGenerating) {
        fullResponse += "\n\n[⏹ 생성이 중지되었습니다.]";
        bubbleDiv.innerHTML = escapeHtml(fullResponse).replace(/\n/g, '<br/>');
        break;
      }

      const chunkText = chunk.choices[0]?.delta?.content || "";
      fullResponse += chunkText;
      bubbleDiv.innerHTML = escapeHtml(fullResponse).replace(/\n/g, '<br/>');
      chatLog.scrollTop = chatLog.scrollHeight;
      tokenCount++;

      // Update TPS metrics occasionally
      if (tokenCount % 5 === 0) {
        const elapsedSec = (performance.now() - startTime) / 1000;
        document.getElementById('tps-speed').textContent = (tokenCount / elapsedSec).toFixed(1) + ' t/s';
        document.getElementById('tps-tokens').textContent = tokenCount;
      }
    }

    // Final metrics update
    const elapsedSec = (performance.now() - startTime) / 1000;
    document.getElementById('tps-speed').textContent = (tokenCount / elapsedSec).toFixed(1) + ' t/s';
    document.getElementById('tps-tokens').textContent = tokenCount;
    document.getElementById('tps-latency').textContent = (performance.now() - startTime).toFixed(0) + ' ms';

    // Inject RAG Badges
    if (sources.length > 0) {
      const badgesDiv = document.createElement('div');
      badgesDiv.className = 'source-badges';
      sources.forEach(s => {
        const a = document.createElement('a');
        a.className = 'source-badge';
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = 'View source';
        a.innerHTML = `<span class="badge-icon">🔗</span> <span>${escapeHtml(s.name)}</span>`;
        badgesDiv.appendChild(a);
      });
      aiMsgDiv.appendChild(badgesDiv);
      chatLog.scrollTop = chatLog.scrollHeight;
    }

  } catch (e) {
    console.error("LLM Generation error:", e);
    if (e.message && !e.message.includes('interrupt')) {
      bubbleDiv.innerHTML += "<br/><br/><em style='color:var(--danger)'>[에러가 발생했습니다. 개발자 도구를 확인해주세요.]</em>";
    }
  } finally {
    isGenerating = false;
    chatInput.disabled = false;
    btnSend.disabled = false;
    if (btnStopGen) btnStopGen.classList.add('is-hidden');
    if (btnSend) btnSend.style.display = 'flex';
    chatInput.focus();
    saveSession();
  }
}

function appendMessage(role, text, sources = []) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${role}`;

  let html = `<div class="msg-bubble">${escapeHtml(text)}</div>`;

  if (sources.length > 0) {
    html += `<div class="source-badges">`;
    sources.forEach(s => {
      html += `<a class="source-badge" href="${s.url}" target="_blank" rel="noopener noreferrer" title="View source">
        <span class="badge-icon">🔗</span>
        <span>${escapeHtml(s.name)}</span>
      </a>`;
    });
    html += `</div>`;
  }

  msgDiv.innerHTML = html;
  chatLog.appendChild(msgDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


// ─── Clear Chat ──────────────────────────────────────────────
function clearChat() {
  // Keep only the welcome message (first child)
  while (chatLog.children.length > 1) {
    chatLog.removeChild(chatLog.lastChild);
  }
  localStorage.removeItem('ameva_chat_session');
}


// ─── Session Persistence (localStorage) ─────────────────────
function saveSession() {
  try {
    const messages = [];
    chatLog.querySelectorAll('.chat-msg').forEach(msg => {
      messages.push({
        role: msg.classList.contains('user') ? 'user' : 'ai',
        html: msg.innerHTML,
      });
    });
    localStorage.setItem('ameva_chat_session', JSON.stringify(messages));
  } catch (e) {
    // Storage quota exceeded
    if (e.name === 'QuotaExceededError') {
      modalStorage.classList.add('is-active');
    }
    console.warn('[AMEVA] Session save failed:', e);
  }
}

function restoreSession() {
  try {
    const saved = localStorage.getItem('ameva_chat_session');
    if (!saved) return;

    const messages = JSON.parse(saved);
    if (!Array.isArray(messages) || messages.length === 0) return;

    // Clear default content and restore
    chatLog.innerHTML = '';
    messages.forEach(msg => {
      const div = document.createElement('div');
      div.className = `chat-msg ${msg.role}`;
      div.innerHTML = msg.html;
      chatLog.appendChild(div);
    });

    chatLog.scrollTop = chatLog.scrollHeight;
  } catch (e) {
    console.warn('[AMEVA] Session restore failed:', e);
  }
}


// ─── Boot ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
