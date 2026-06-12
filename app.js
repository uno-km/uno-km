/**
 * ============================================================
 * AMEVA Edge-Native AI Dashboard — Core Application Controller
 * ============================================================
 * 
 * Handles: UI toggles, environment checks (mobile/WebGPU),
 * chat panel animations, and localStorage session memory.
 * 
 * LLM engine integration (WebLLM), RAG pipeline, and D3 graph
 * will be wired in from separate modules.
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
const downloadOverlay = document.getElementById('download-overlay');
const btnDownload   = document.getElementById('btn-start-download');
const progressBar   = document.getElementById('progress-bar-fill');
const progressText  = document.getElementById('progress-text');
const progressPct   = document.getElementById('progress-percent');
const downloadProg  = document.getElementById('download-progress');
const engineStatus  = document.getElementById('chat-engine-status');


// ─── State ─────────────────────────────────────────────────
let isPanelOpen = false;
let isEngineReady = false;


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
  // 1. Mobile block
  if (isMobileDevice()) {
    modalMobile.classList.add('is-active');
    fab.style.display = 'none';
    return; // Stop all initialization
  }

  // 2. WebGPU check
  if (hasWebGPU()) {
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('online');
    webgpuStatus.textContent = 'Online';
  } else {
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('offline');
    webgpuStatus.textContent = 'Absent';
    webgpuStatus.style.color = 'var(--danger)';
    // Show WebGPU modal on first FAB click instead of blocking outright
  }

  // 3. Bind UI events
  bindEvents();

  // 4. Restore chat session from localStorage
  restoreSession();
}


// ─── Event Bindings ─────────────────────────────────────────
function bindEvents() {
  // FAB toggle
  fab.addEventListener('click', togglePanel);

  // Close button
  btnClose.addEventListener('click', closePanel);

  // Clear chat
  btnClear.addEventListener('click', clearChat);

  // Send message
  btnSend.addEventListener('click', handleSend);

  // Enter to send (Shift+Enter for new line)
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-resize textarea
  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  });

  // Download button
  btnDownload.addEventListener('click', handleDownloadClick);

  // Escape to close panel
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isPanelOpen) {
      closePanel();
    }
  });
}


// ─── Panel Toggle ───────────────────────────────────────────
function togglePanel() {
  if (isPanelOpen) {
    closePanel();
  } else {
    openPanel();
  }
}

function openPanel() {
  // If no WebGPU, show modal instead
  if (!hasWebGPU()) {
    modalWebgpu.classList.add('is-active');
    return;
  }

  isPanelOpen = true;
  chatPanel.classList.add('is-visible');
  fab.classList.add('is-open');
  fab.setAttribute('aria-label', 'Close AI chat');

  // Focus input if engine is ready
  if (isEngineReady) {
    setTimeout(() => chatInput.focus(), 400);
  }
}

function closePanel() {
  isPanelOpen = false;
  chatPanel.classList.remove('is-visible');
  fab.classList.remove('is-open');
  fab.setAttribute('aria-label', 'Open AI chat');
}


// ─── Download Handler (Stub for WebLLM integration) ─────────
async function handleDownloadClick() {
  btnDownload.disabled = true;
  btnDownload.innerHTML = '<div class="spinner"></div> Initializing…';
  downloadProg.style.display = 'flex';

  // --- STUB: Replace with actual WebLLM initialization ---
  // Simulates progress for UI demonstration
  simulateProgress();
}

function simulateProgress() {
  let progress = 0;
  const steps = [
    'Fetching model manifest…',
    'Downloading weights (1/4)…',
    'Downloading weights (2/4)…',
    'Downloading weights (3/4)…',
    'Downloading weights (4/4)…',
    'Compiling WebGPU shaders…',
    'Loading tokenizer…',
    'Warming up inference engine…',
  ];
  let stepIdx = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 8 + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      onEngineReady();
    }

    progressBar.style.width = progress.toFixed(1) + '%';
    progressPct.textContent = Math.floor(progress) + '%';

    if (stepIdx < steps.length && progress > (stepIdx + 1) * (100 / steps.length)) {
      progressText.textContent = steps[stepIdx];
      stepIdx++;
    }
  }, 300);
}

function onEngineReady() {
  isEngineReady = true;

  // Hide overlay
  downloadOverlay.classList.add('is-hidden');

  // Enable input
  chatInput.disabled = false;
  btnSend.disabled = false;
  chatInput.placeholder = 'AMEVA에 대해 질문하세요…';
  chatInput.focus();

  // Update status indicators
  engineStatus.textContent = 'engine: active';
  engineStatus.style.color = 'var(--accent-green)';

  // Update TPS indicators
  document.getElementById('tps-speed').classList.remove('dim');
  document.getElementById('tps-tokens').classList.remove('dim');
  document.getElementById('tps-latency').classList.remove('dim');
}


// ─── Message Handling ──────────────────────────────────────
function handleSend() {
  const text = chatInput.value.trim();
  if (!text || !isEngineReady) return;

  // Add user message
  appendMessage('user', text);

  // Clear input
  chatInput.value = '';
  chatInput.style.height = 'auto';

  // Save session
  saveSession();

  // TODO: Pipe through RAG engine → LLM → stream response
  // For now, show a placeholder response
  setTimeout(() => {
    appendMessage('ai', 
      '해당 질문에 대해 분석 중입니다… (LLM 엔진 연결 후 실제 응답이 생성됩니다.)',
      [{ name: 'graph_index.json', url: '#' }]
    );
    saveSession();
  }, 800);
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
