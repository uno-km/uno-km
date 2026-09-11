/**
 * AMEVA Neural Fabric — Premium Audio & Docent Voice Synthesizer Engine
 * High-fidelity Web Audio API chimes & Natural Voice Speech Synthesis
 */
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.currentUtterance = null;
    this.preferredVoice = null;
    this.isMuted = false;
    this.speechRate = 1.05;
    this.init();
    this.initVoiceSelector();
  }

  init() {
    const unlock = () => {
      try {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx) {
          if (this.ctx.state === 'suspended') {
            this.ctx.resume();
          }
          if (this.ctx.state === 'running') {
            this.enabled = true;
            events.forEach(e => document.removeEventListener(e, unlock));
          }
        }
      } catch (err) {
        console.warn('[AudioEngine] AudioContext init note:', err);
      }
    };
    
    const events = ['click', 'keydown', 'touchstart', 'mouseover'];
    events.forEach(e => document.addEventListener(e, unlock, { passive: true }));
  }

  initVoiceSelector() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Look for premium natural Korean voices
        const naturalKo = voices.find(v => v.lang.startsWith('ko') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Heami') || v.name.includes('SunHi') || v.name.includes('Yuna')));
        const standardKo = voices.find(v => v.lang.startsWith('ko'));
        const englishNatural = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Guy') || v.name.includes('Jenny')));
        
        this.preferredVoice = naturalKo || standardKo || englishNatural || voices[0];
        if (this.preferredVoice) {
          console.log('[AudioEngine] Selected Natural Voice:', this.preferredVoice.name, this.preferredVoice.lang);
        }
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  /**
   * Speak museum docent narration with typewriter subtitle sync
   */
  speakDocentNarration(text, onWordCallback, onEndCallback) {
    if (this.isMuted || !('speechSynthesis' in window) || !text) {
      if (onEndCallback) onEndCallback();
      return;
    }

    try {
      window.speechSynthesis.cancel();

      // Clean markdown tags for natural speech
      const cleanText = text.replace(/[*_#`~\[\]\(\)>]/g, '').replace(/https?:\/\/\S+/g, '');

      this.currentUtterance = new SpeechSynthesisUtterance(cleanText);
      if (this.preferredVoice) {
        this.currentUtterance.voice = this.preferredVoice;
        this.currentUtterance.lang = this.preferredVoice.lang;
      } else {
        this.currentUtterance.lang = 'ko-KR';
      }

      this.currentUtterance.rate = this.speechRate;
      this.currentUtterance.pitch = 1.03; // Gentle natural tone

      this.currentUtterance.onboundary = (event) => {
        if (event.name === 'word' && onWordCallback) {
          onWordCallback(event.charIndex, event.charLength);
        }
      };

      this.currentUtterance.onend = () => {
        if (onEndCallback) onEndCallback();
      };

      this.currentUtterance.onerror = (err) => {
        console.warn('[AudioEngine] Narration error:', err);
        if (onEndCallback) onEndCallback();
      };

      this.playMuseumChime();
      window.speechSynthesis.speak(this.currentUtterance);
    } catch (e) {
      console.warn('[AudioEngine] Failed to speak:', e);
      if (onEndCallback) onEndCallback();
    }
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  setSpeechRate(rate) {
    this.speechRate = parseFloat(rate) || 1.05;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) this.stopSpeech();
    return this.isMuted;
  }

  /**
   * Procedural Sci-Fi Museum Ethereal Chime on node warp
   */
  playMuseumChime() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        
        gain.gain.setValueAtTime(0.04, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.6);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.65);
      });
    } catch (e) {}
  }

  playTick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch(e) {}
  }

  playSwoosh() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(now + 0.3);
    } catch(e) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.audioEngine = new AudioEngine();
});
