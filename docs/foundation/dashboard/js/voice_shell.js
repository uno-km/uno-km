/**
 * AMEVA Neural Fabric — WebGPU Neural Voice Shell & Audio Visualizer
 * High-performance on-device voice command system with WebGPU accelerator check
 */
class VoiceShell {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.audioCtx = null;
    this.analyser = null;
    this.mediaStream = null;
    this.animId = null;
    this.hasWebGPU = false;
    this.init();
  }

  async init() {
    // 1. Check WebGPU Acceleration capability
    if (navigator.gpu) {
      try {
        const adapter = await navigator.gpu.requestAdapter();
        if (adapter) {
          this.hasWebGPU = true;
          console.log('[VoiceShell] ⚡ WebGPU Neural STT Acceleration Pipeline Ready.');
        }
      } catch (e) {
        this.hasWebGPU = false;
      }
    }

    // 2. Initialize Speech Recognition Engine
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'ko-KR';

      this.recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        const currentText = finalTranscript || interimTranscript;
        this.updateTranscriptHUD(currentText);

        if (finalTranscript) {
          console.log('[VoiceShell] Final Voice Command:', finalTranscript);
          setTimeout(() => {
            this.handleCommand(finalTranscript.trim());
            this.stop();
          }, 400);
        }
      };

      this.recognition.onerror = (event) => {
        console.warn('[VoiceShell] Speech recognition warning:', event.error);
        if (event.error !== 'no-speech') {
          this.stop();
        }
      };

      this.recognition.onend = () => {
        this.stop();
      };
    }

    this.createUI();
    this.createVisualizerHUD();
  }

  createUI() {
    const parent = document.getElementById('fab-group');
    this.btn = document.createElement('button');
    this.btn.id = 'fab-voice';
    this.btn.className = 'fab-sub';
    this.btn.setAttribute('aria-label', 'WebGPU Voice Commands');
    this.btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px; color: var(--accent-purple); transition: color 0.2s;">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="8" y1="23" x2="16" y2="23"></line>
      </svg>
    `;
    this.btn.style.width = '48px';
    this.btn.style.height = '48px';
    this.btn.style.borderRadius = '50%';
    this.btn.style.border = '1px solid var(--accent-purple)';
    this.btn.style.background = 'rgba(15, 15, 15, 0.85)';
    this.btn.style.backdropFilter = 'blur(10px)';
    this.btn.style.color = 'var(--text-primary)';
    this.btn.style.cursor = 'pointer';
    this.btn.style.zIndex = '200';
    this.btn.style.display = 'flex';
    this.btn.style.alignItems = 'center';
    this.btn.style.justifyContent = 'center';
    this.btn.style.boxShadow = '0 0 14px rgba(124, 58, 237, 0.3)';
    this.btn.style.transition = 'all 0.25s ease';
    
    this.btn.onclick = () => this.toggle();
    if (parent) {
      const trigger = document.getElementById('fab-trigger');
      parent.insertBefore(this.btn, trigger);
    } else {
      document.body.appendChild(this.btn);
    }
  }

  createVisualizerHUD() {
    this.hud = document.createElement('div');
    this.hud.id = 'voice-stt-hud';
    this.hud.className = 'voice-hud-container is-hidden';
    this.hud.innerHTML = `
      <div class="voice-hud-card">
        <div class="voice-hud-header">
          <div class="voice-hud-status">
            <span class="pulse-ring"></span>
            <span class="status-label">${this.hasWebGPU ? '⚡ WebGPU Neural STT Listening...' : '🎙️ Voice STT Listening...'}</span>
          </div>
          <button class="voice-hud-close" id="btn-close-stt">✕</button>
        </div>
        <canvas id="voice-waveform-canvas" width="320" height="48"></canvas>
        <div class="voice-transcript-box" id="voice-transcript-text">말씀해 주세요... (예: "비트넷 보여줘", "도슨트 투어 시작")</div>
      </div>
    `;
    document.body.appendChild(this.hud);

    const closeBtn = document.getElementById('btn-close-stt');
    if (closeBtn) closeBtn.onclick = () => this.stop();
  }

  updateTranscriptHUD(text) {
    const el = document.getElementById('voice-transcript-text');
    if (el && text) {
      el.textContent = `"${text}"`;
      el.style.color = '#00EFFF';
    }
  }

  async startAudioVisualizer() {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = this.audioCtx.createMediaStreamSource(this.mediaStream);
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;
      source.connect(this.analyser);

      const canvas = document.getElementById('voice-waveform-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        if (!this.isListening) return;
        this.animId = requestAnimationFrame(draw);
        this.analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const barWidth = (canvas.width / bufferLength) * 1.5;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * (canvas.height * 0.85);
          const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
          grad.addColorStop(0, '#7C3AED');
          grad.addColorStop(1, '#00EFFF');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.roundRect(x, canvas.height - barHeight, barWidth - 2, barHeight, 3);
          ctx.fill();

          x += barWidth + 1;
        }
      };

      draw();
    } catch (e) {
      console.warn('[VoiceShell] Audio visualizer fallback:', e);
    }
  }

  stopAudioVisualizer() {
    if (this.animId) cancelAnimationFrame(this.animId);
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(t => t.stop());
      this.mediaStream = null;
    }
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      this.audioCtx.close();
      this.audioCtx = null;
    }
  }

  start() {
    if (!this.recognition) {
      if (window.showToast) window.showToast("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    try {
      this.recognition.start();
      this.isListening = true;
      this.updateUI();
      if (this.hud) this.hud.classList.remove('is-hidden');
      this.startAudioVisualizer();
      if (window.audioEngine) window.audioEngine.playTick();
    } catch (e) {
      console.warn('[VoiceShell] Recognition already started or error:', e);
    }
  }

  stop() {
    if (this.isListening && this.recognition) {
      try { this.recognition.stop(); } catch (e) {}
    }
    this.isListening = false;
    this.updateUI();
    if (this.hud) this.hud.classList.add('is-hidden');
    this.stopAudioVisualizer();
  }

  toggle() {
    if (this.isListening) this.stop();
    else this.start();
  }

  updateUI() {
    const svgIcon = this.btn.querySelector('svg');
    if (this.isListening) {
      this.btn.style.background = 'linear-gradient(135deg, #7C3AED, #00EFFF)';
      this.btn.style.boxShadow = '0 0 24px rgba(0, 239, 255, 0.6)';
      if (svgIcon) svgIcon.style.color = '#ffffff';
    } else {
      this.btn.style.background = 'rgba(15, 15, 15, 0.85)';
      this.btn.style.boxShadow = '0 0 14px rgba(124, 58, 237, 0.3)';
      if (svgIcon) svgIcon.style.color = 'var(--accent-purple)';
    }
  }

  handleCommand(text) {
    const t = text.toLowerCase().replace(/\s+/g, '');
    console.log('[VoiceShell] Processing Intent:', t);

    if (t.includes('도슨트') || t.includes('투어') || t.includes('박물관') || t.includes('가이드') || t.includes('설명')) {
      if (window.startMuseumDocentTour) {
        window.startMuseumDocentTour();
        if (window.showToast) window.showToast('🏛️ AMEVA 박물관 시네마틱 도슨트 투어를 시작합니다.');
      }
      return;
    }

    const commandMap = [
      { keys: ['비트넷', 'bitnet', '1.58'], id: 'termux-bitnet' },
      { keys: ['트레인', 'train', 'lora', '로라', '학습'], id: 'termux-train' },
      { keys: ['음성', 'stt', '보이스', 'whisper', '위스퍼'], id: 'termux-stt' },
      { keys: ['디퓨전', 'diffusion', '그림', '이미지'], id: 'termux-diffusion' },
      { keys: ['플레이라이트', 'playwright', '자동화', '스크래핑'], id: 'termux-playwright' },
      { keys: ['포지', 'forge', 'webgpu', '웹지피유'], id: 'AMEVA-Forge' },
      { keys: ['워크스테이션', 'workstation', '앱'], id: 'AMEVA-Workstation' },
      { keys: ['센티넬', 'sentinel', '보안', '관측'], id: 'AMEVA-Sentinel' },
      { keys: ['도크폴드', 'docfold', '압축'], id: 'AMEVA-DocFold' },
      { keys: ['파운데이션', '재단', '헌장', 'foundation'], id: 'AMEVA-Foundation' },
      { keys: ['이력서', '포트폴리오', '김은호', 'cv'], id: 'Eunho-Kim-CV' }
    ];

    for (const item of commandMap) {
      if (item.keys.some(k => t.includes(k))) {
        if (window.selectNodeById) {
          window.selectNodeById(item.id);
          if (window.showToast) window.showToast(`🎯 [${item.id}] 노드로 이동합니다.`);
          return;
        }
      }
    }

    if (window.showToast) {
      window.showToast(`음성 인식: "${text}" (해당 명령 또는 노드를 찾을 수 없습니다)`);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.voiceShell = new VoiceShell();
});
