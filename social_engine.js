/**
 * AMEVA Neural Fabric - Social Engine
 * Handles Google Sheets Guestbook & WebRTC Multiplayer
 */

class SocialEngine {
  constructor() {
    this.GAS_URL = "";
    this.API_SECRET_KEY = "";
    this.peer = null;
    this.connections = [];
    this.ghostCursors = {};

    this.loadConfig().then(() => {
      this.initGuestbookUI();
      this.initWebRTC();
      this.trackVisitor();
    });
  }

  async loadConfig() {
    try {
      const res = await fetch('config.json');
      if (res.ok) {
        const config = await res.json();
        this.GAS_URL = config.GAS_URL || "";
        this.API_SECRET_KEY = config.API_SECRET_KEY || "";
      }
    } catch (e) {
      console.warn("Failed to load config.json, running without credentials.", e);
    }
  }

  async trackVisitor() {
    if (!this.GAS_URL) return;

    // session에 방문 이력이 있는지 체크
    const sessionVisited = sessionStorage.getItem('ameva_visited');
    if (sessionVisited) {
      console.log("[SocialEngine] Visit already recorded in this session.");
      return;
    }

    try {
      console.log("[SocialEngine] Sending unique visit tracking hit...");
      const userAgent = navigator.userAgent;
      
      // 구글 앱스 스크립트 POST 리디렉션 시 발생하는 브라우저 CORS 차단 정책을 피하기 위해
      // Response JSON 파싱을 거치지 않고 바로 세션 스토리지 플래그를 저장합니다.
      await fetch(this.GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ type: 'visit', userAgent: userAgent, key: this.API_SECRET_KEY }),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });

      sessionStorage.setItem('ameva_visited', 'true');
      console.log("[SocialEngine] Unique visit logged (ignoring response parse for CORS compatibility).");
      
      // 구글 스프레드시트 기록 시간 버퍼를 고려하여 1.5초 뒤 조회수를 갱신합니다.
      setTimeout(() => this.fetchData(), 1500);
    } catch (e) {
      console.warn("[SocialEngine] Visit tracking post failed:", e);
    }
  }

  // --- 1. Google Sheets Guestbook ---
  initGuestbookUI() {
    this.container = document.createElement('div');
    this.container.id = 'guestbook-panel';
    this.container.style.position = 'fixed';
    this.container.style.top = '70px';
    this.container.style.right = '24px';
    this.container.style.width = '280px';
    this.container.style.background = 'rgba(28, 28, 28, 0.85)';
    this.container.style.backdropFilter = 'blur(12px)';
    this.container.style.border = '1px solid var(--border-subtle)';
    this.container.style.borderRadius = 'var(--radius-md)';
    this.container.style.padding = '16px';
    this.container.style.zIndex = '150';
    this.container.style.color = 'var(--text-primary)';
    this.container.style.fontSize = '0.8rem';

    this.container.innerHTML = `
      <div style="font-weight: 600; color: var(--accent-cyan); margin-bottom: 8px;">🌐 Neural Sync (방명록)</div>
      <div id="gb-count" style="color: var(--text-secondary); margin-bottom: 12px;">방문자: 로딩중...</div>
      <div id="gb-list" style="max-height: 85px; overflow-y: auto; margin-bottom: 12px; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted); transition: max-height 0.2s ease;">
      </div>
      <div id="gb-toggle-container" style="display: none; text-align: right; margin-bottom: 8px;">
        <button id="gb-toggle" style="background: transparent; border: none; color: var(--accent-cyan); font-size: 0.7rem; cursor: pointer; padding: 0; outline: none;">펼치기 ▾</button>
      </div>
      <div style="display: flex; gap: 4px;">
        <input type="text" id="gb-input" placeholder="메시지 남기기..." style="flex:1; background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); color: #fff; padding: 4px 8px; border-radius: 4px; outline:none;">
        <button id="gb-send" style="background: var(--accent-cyan); color: #000; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold;">Sync</button>
      </div>
    `;

    document.body.appendChild(this.container);

    const toggleBtn = document.getElementById('gb-toggle');
    const listEl = document.getElementById('gb-list');
    let isExpanded = false;

    toggleBtn.onclick = () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        listEl.style.maxHeight = '250px';
        toggleBtn.textContent = '접기 ▴';
      } else {
        listEl.style.maxHeight = '85px';
        toggleBtn.textContent = '펼치기 ▾';
      }
    };

    document.getElementById('gb-send').onclick = () => {
      const msg = document.getElementById('gb-input').value;
      if (msg) this.postMessage(msg);
    };

    // Load initial data
    this.fetchData();
  }

  async fetchData() {
    if (!this.GAS_URL) {
      document.getElementById('gb-count').textContent = "방문자: (config.json 설정 필요)";
      return;
    }
    try {
      const res = await fetch(`${this.GAS_URL}?key=${encodeURIComponent(this.API_SECRET_KEY)}`);
      const data = await res.json();
      if (data.status === 'success') {
        document.getElementById('gb-count').textContent = `누적 방문자: ${data.total_visitors}명`;
        const list = document.getElementById('gb-list');
        list.innerHTML = data.recent.map(r => `<div><span style="color:var(--accent-purple)">[${r[1] || 'Explorer'}]</span> ${r[2]}</div>`).join('');
        
        // 메시지가 4개 이상일 때만 펼치기/접기 버튼을 노출합니다.
        const toggleContainer = document.getElementById('gb-toggle-container');
        if (data.recent && data.recent.length >= 4) {
          toggleContainer.style.display = 'block';
        } else {
          toggleContainer.style.display = 'none';
        }
      }
    } catch (e) {
      console.warn("Guestbook fetch error", e);
    }
  }

  async postMessage(message) {
    if (!this.GAS_URL) {
      alert("config.json 파일에 웹앱 URL을 설정해주세요!");
      return;
    }
    try {
      const btn = document.getElementById('gb-send');
      btn.textContent = "...";
      btn.disabled = true;

      await fetch(this.GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ type: 'guestbook', name: "Explorer", message: message, key: this.API_SECRET_KEY }),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' } // CORS 우회를 위해 text/plain 사용
      });

      document.getElementById('gb-input').value = "";
      btn.textContent = "Sync";
      btn.disabled = false;
      this.fetchData();
    } catch (e) {
      console.warn("Guestbook post error", e);
    }
  }

  // --- 2. WebRTC Multiplayer Cursors ---
  initWebRTC() {
    // Load PeerJS dynamically
    const script = document.createElement('script');
    script.src = "https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js";
    script.onload = () => this.setupPeer();
    document.head.appendChild(script);
  }

  setupPeer() {
    // Generate a random ID
    const myId = 'ameva-' + Math.random().toString(36).substr(2, 6);
    this.peer = new Peer(myId);

    this.peer.on('open', (id) => {
      console.log('My WebRTC ID is: ' + id);
      // In a real app with a backend, we would get a list of active peers.
      // Since we are serverless, we could use the Google Sheet to exchange IDs,
      // but for "Mad Science" we'll just broadcast our mouse movements to anyone who connects to us.
      // A full lobby requires a signaling server. We are using PeerJS cloud.
    });

    this.peer.on('connection', (conn) => {
      this.connections.push(conn);
      conn.on('data', (data) => this.handlePeerData(conn.peer, data));
      conn.on('close', () => this.removeGhostCursor(conn.peer));
    });

    // Capture mouse movements
    document.addEventListener('mousemove', (e) => {
      const data = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
      this.connections.forEach(conn => {
        if (conn.open) conn.send(data);
      });
    });
  }

  handlePeerData(peerId, data) {
    if (!this.ghostCursors[peerId]) {
      const cursor = document.createElement('div');
      cursor.innerHTML = '🎯'; // User cursor icon
      cursor.style.position = 'fixed';
      cursor.style.zIndex = '9999';
      cursor.style.pointerEvents = 'none';
      cursor.style.transition = 'all 0.1s linear';
      document.body.appendChild(cursor);
      this.ghostCursors[peerId] = cursor;
    }

    const cursor = this.ghostCursors[peerId];
    cursor.style.left = (data.x * window.innerWidth) + 'px';
    cursor.style.top = (data.y * window.innerHeight) + 'px';
  }

  removeGhostCursor(peerId) {
    if (this.ghostCursors[peerId]) {
      this.ghostCursors[peerId].remove();
      delete this.ghostCursors[peerId];
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.socialEngine = new SocialEngine();
});
