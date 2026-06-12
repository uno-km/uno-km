import { CreateMLCEngine } from "https://esm.run/@mlc-ai/web-llm";

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
const downloadOverlay = document.getElementById('download-overlay');
const btnDownload   = document.getElementById('btn-start-download');
const progressBar   = document.getElementById('progress-bar-fill');
const progressText  = document.getElementById('progress-text');
const progressPct   = document.getElementById('progress-percent');
const downloadProg  = document.getElementById('download-progress');
const engineStatus  = document.getElementById('chat-engine-status');

// ─── WebLLM Config ─────────────────────────────────────────
let engine = null;
let isPanelOpen = false;
let isEngineReady = false;

// We use the hybrid approach: local weights + official wasm binary
const modelId = "Qwen2.5-1.5B-Instruct-q4f16_1-MLC";
const localModelUrl = window.location.origin + "/models/Qwen2.5-1.5B-Instruct-q4f16_1-MLC/";
// The wasm URL for Qwen2.5 1.5B q4f16_1. (Using standard CDN fallback since it's not locally present)
const modelLibUrl = "https://raw.githubusercontent.com/mlc-ai/binary-mlc-llm-libs/main/web-llm-models/v0_2_4/qwen2-q4f16_1-ctx4k_cs1k-webgpu.wasm";

const appConfig = {
  model_list: [
    {
      model_id: modelId,
      model_lib_url: modelLibUrl,
      model_url: localModelUrl
    }
  ]
};

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
    modalMobile.classList.add('is-active');
    fab.style.display = 'none';
    return;
  }

  if (hasWebGPU()) {
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('online');
    webgpuStatus.textContent = 'Online';
  } else {
    webgpuDot.classList.remove('loading');
    webgpuDot.classList.add('offline');
    webgpuStatus.textContent = 'Absent';
    webgpuStatus.style.color = 'var(--danger)';
  }

  bindEvents();
  restoreSession();
}

// ─── Event Bindings ─────────────────────────────────────────
function bindEvents() {
  fab.addEventListener('click', togglePanel);
  btnClose.addEventListener('click', closePanel);
  btnClear.addEventListener('click', clearChat);
  btnSend.addEventListener('click', handleSend);

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

// ─── Panel Toggle ───────────────────────────────────────────
function togglePanel() {
  if (isPanelOpen) closePanel();
  else openPanel();
}

function openPanel() {
  if (!hasWebGPU()) {
    modalWebgpu.classList.add('is-active');
    return;
  }
  isPanelOpen = true;
  chatPanel.classList.add('is-visible');
  fab.classList.add('is-open');
  fab.setAttribute('aria-label', 'Close AI chat');

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

    // Initialize WebLLM using the local model
    engine = await CreateMLCEngine(modelId, {
      appConfig: appConfig,
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

  // Disable input while generating
  chatInput.disabled = true;
  btnSend.disabled = true;

  // Create an empty AI message bubble for streaming
  const aiMsgDiv = document.createElement('div');
  aiMsgDiv.className = 'chat-msg ai';
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'msg-bubble';
  aiMsgDiv.appendChild(bubbleDiv);
  chatLog.appendChild(aiMsgDiv);

  try {
    const messages = [
      { role: "system", content: "You are AMEVA Cortex, a helpful Edge-native AI assistant representing the AMEVA ecosystem. Answer politely in Korean." },
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

    // (RAG Badges would be injected here in the future)

  } catch (e) {
    console.error("LLM Generation error:", e);
    bubbleDiv.innerHTML += "<br/><br/><em style='color:var(--danger)'>[에러가 발생했습니다. 개발자 도구를 확인해주세요.]</em>";
  } finally {
    chatInput.disabled = false;
    btnSend.disabled = false;
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
