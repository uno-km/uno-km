/**
 * AMEVA Neural Fabric - Voice Shell OS
 * Uses Web Speech API to provide voice commands
 */
class VoiceShell {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.init();
  }

  init() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("[VoiceShell] Web Speech API not supported in this browser.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.lang = 'ko-KR';

    this.recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("[VoiceShell] Heard:", transcript);
      this.handleCommand(transcript);
    };

    this.recognition.onerror = (event) => {
      console.error("[VoiceShell] Error:", event.error);
      this.stop();
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.updateUI();
    };

    this.createUI();
  }

  createUI() {
    this.btn = document.createElement('button');
    this.btn.id = 'fab-voice';
    this.btn.innerHTML = '🎤';
    this.btn.style.position = 'fixed';
    this.btn.style.bottom = '24px';
    // Position it to the left of the search FAB
    this.btn.style.right = 'calc(24px + 56px + 140px)'; 
    this.btn.style.width = '48px';
    this.btn.style.height = '48px';
    this.btn.style.borderRadius = '50%';
    this.btn.style.border = '1px solid var(--accent-purple)';
    this.btn.style.background = 'rgba(15, 15, 15, 0.7)';
    this.btn.style.backdropFilter = 'blur(8px)';
    this.btn.style.color = 'var(--text-primary)';
    this.btn.style.cursor = 'pointer';
    this.btn.style.zIndex = '200';
    this.btn.style.fontSize = '1.2rem';
    this.btn.style.boxShadow = '0 0 10px rgba(124, 58, 237, 0.2)';
    this.btn.style.transition = 'all 0.2s';
    
    this.btn.onclick = () => this.toggle();
    document.body.appendChild(this.btn);
  }

  updateUI() {
    if (this.isListening) {
      this.btn.style.background = 'var(--accent-purple)';
      this.btn.style.boxShadow = '0 0 20px var(--accent-purple)';
      this.btn.style.animation = 'pulse-dot 1s infinite';
    } else {
      this.btn.style.background = 'rgba(15, 15, 15, 0.7)';
      this.btn.style.boxShadow = '0 0 10px rgba(124, 58, 237, 0.2)';
      this.btn.style.animation = 'none';
    }
  }

  toggle() {
    if (this.isListening) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (!this.recognition) return;
    try {
      this.recognition.start();
      this.isListening = true;
      this.updateUI();
      if(window.audioEngine) window.audioEngine.playTick();
      if(window.showToast) window.showToast("음성 인식 중... (예: '아메바 검색', '채팅 열어')");
    } catch (e) {}
  }

  stop() {
    if (!this.recognition) return;
    this.recognition.stop();
    this.isListening = false;
    this.updateUI();
  }

  handleCommand(text) {
    if(window.audioEngine) window.audioEngine.playSwoosh();
    
    // Command parsing
    if (text.includes("검색")) {
      const query = text.replace("검색", "").trim();
      if (window.closeSpotlight) window.closeSpotlight();
      // Click the search FAB programmatically
      document.getElementById('fab-search').click();
      setTimeout(() => {
        const input = document.getElementById('spotlight-input');
        if (input) {
          input.value = query;
          // Trigger input event to run search
          input.dispatchEvent(new Event('input'));
        }
      }, 100);
    } else if (text.includes("채팅") || text.includes("열어")) {
      const fabChat = document.getElementById('fab-chat');
      if (fabChat && !fabChat.classList.contains('is-open')) {
        fabChat.click();
      }
    } else {
      // Just put it into the search input if open, or chat if open
      const chatInput = document.getElementById('chat-input');
      const spotlightInput = document.getElementById('spotlight-input');
      
      if (document.getElementById('chat-panel').classList.contains('is-visible')) {
        chatInput.value = text;
      } else {
        document.getElementById('fab-search').click();
        setTimeout(() => {
          spotlightInput.value = text;
          spotlightInput.dispatchEvent(new Event('input'));
        }, 100);
      }
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.voiceShell = new VoiceShell();
});
