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
    this.expandTimeout = null;

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
      console.log("[SocialEngine] Sending unique visit tracking hit with environment info...");

      const visitorInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language || "Unknown",
        platform: navigator.platform || "Unknown",
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        cores: navigator.hardwareConcurrency || "Unknown",
        memory: navigator.deviceMemory || "Unknown",
        webgpu: !!navigator.gpu,
        connection: navigator.connection ? navigator.connection.effectiveType : "Unknown",
        referrer: document.referrer || "Direct"
      };

      // 구글 앱스 스크립트 POST 리디렉션 시 발생하는 브라우저 CORS 차단 정책을 피하기 위해
      // Response JSON 파싱을 거치지 않고 바로 세션 스토리지 플래그를 저장합니다.
      await fetch(this.GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ type: 'visit', visitorInfo: visitorInfo, key: this.API_SECRET_KEY }),
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
    this.container.style.width = '125px';
    this.container.style.zIndex = '150';
    this.container.style.color = 'var(--text-primary)';
    this.container.style.fontSize = '0.8rem';
    this.container.style.transition = 'all 0.3s ease';

    document.body.appendChild(this.container);

    this.isCollapsed = window.innerWidth <= 768; // Collapse by default on mobile
    this.wobbleInterval = null;
    this.lastData = null;
    this.startWobbleTimer();

    // Render initial empty state (Loading...)
    this.renderGuestbook(null);

    // Load initial data
    this.fetchData();
  }

  startWobbleTimer() {
    if (this.wobbleInterval) clearInterval(this.wobbleInterval);
    this.wobbleInterval = setInterval(() => {
      if (this.isCollapsed && this.container) {
        this.container.classList.add('wobble-active');
        setTimeout(() => {
          this.container.classList.remove('wobble-active');
        }, 600);
      }
    }, 3000);
  }

  renderGuestbook(data) {
    if (!this.container) return;

    if (this.expandTimeout) {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = null;
    }

    // Apply container styling based on collapse state
    if (this.isCollapsed) {
      this.container.style.background = 'rgba(15, 23, 42, 0.8)';
      this.container.style.border = '1px dashed var(--accent-cyan)';
      this.container.style.borderRadius = 'var(--radius-sm)';
      this.container.style.padding = '8px 12px';
      this.container.style.width = '125px';
      this.container.style.boxShadow = '0 4px 15px rgba(0, 239, 255, 0.1)';
      this.container.style.backdropFilter = 'blur(8px)';

      this.renderCollapsedHeader();
    } else {
      this.container.style.background = 'rgba(28, 28, 28, 0.85)';
      this.container.style.border = '1px solid var(--border-subtle)';
      this.container.style.borderRadius = 'var(--radius-md)';
      this.container.style.padding = '16px';
      this.container.style.width = '280px';
      this.container.style.boxShadow = 'none';
      this.container.style.backdropFilter = 'blur(12px)';

      this.renderExpandedSkeleton();

      this.expandTimeout = setTimeout(() => {
        this.renderExpandedContent(data);
      }, 300); // 300ms transition delay
    }
  }

  renderCollapsedHeader() {
    this.container.innerHTML = '';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '100%';
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';

    const title = document.createElement('span');
    title.textContent = 'Guest book';
    title.style.fontSize = '0.75rem';
    title.style.color = 'var(--accent-cyan)';
    title.style.fontFamily = 'var(--font-mono)';
    title.style.fontWeight = 'bold';
    header.appendChild(title);

    const toggle = document.createElement('span');
    toggle.textContent = '[+]';
    toggle.style.fontSize = '0.7rem';
    toggle.style.color = 'var(--text-secondary)';
    toggle.style.fontFamily = 'var(--font-mono)';
    header.appendChild(toggle);

    header.onclick = (e) => {
      e.stopPropagation();
      this.isCollapsed = false;
      this.renderGuestbook(this.lastData);
      if (window.audioEngine) window.audioEngine.playTick();
    };

    this.container.appendChild(header);
  }

  renderExpandedSkeleton() {
    this.container.innerHTML = '';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    header.style.width = '100%';
    header.style.cursor = 'pointer';
    header.style.userSelect = 'none';

    const title = document.createElement('span');
    title.textContent = 'Guest book';
    title.style.fontSize = '0.75rem';
    title.style.color = 'var(--accent-cyan)';
    title.style.fontFamily = 'var(--font-mono)';
    title.style.fontWeight = 'bold';
    header.appendChild(title);

    const toggle = document.createElement('span');
    toggle.textContent = '[-]';
    toggle.style.fontSize = '0.7rem';
    toggle.style.color = 'var(--text-secondary)';
    toggle.style.fontFamily = 'var(--font-mono)';
    header.appendChild(toggle);

    header.onclick = (e) => {
      e.stopPropagation();
      this.isCollapsed = true;
      this.renderGuestbook(this.lastData);
      if (window.audioEngine) window.audioEngine.playTick();
    };

    this.container.appendChild(header);
  }

  renderExpandedContent(data) {
    if (this.isCollapsed) return;

    // Divider line
    const hr = document.createElement('div');
    hr.style.width = '100%';
    hr.style.height = '1px';
    hr.style.background = 'var(--border-subtle)';
    hr.style.margin = '8px 0';
    this.container.appendChild(hr);

    // Visitor count
    const countEl = document.createElement('div');
    countEl.id = 'gb-count';
    countEl.style.color = 'var(--text-secondary)';
    countEl.style.marginBottom = '12px';
    if (data && data.total_visitors !== undefined) {
      countEl.textContent = `누적 방문자: ${data.total_visitors}명`;
    } else {
      countEl.textContent = '방문자: 로딩중...';
    }
    this.container.appendChild(countEl);

    // Guestbook Messages list
    const listEl = document.createElement('div');
    listEl.id = 'gb-list';
    listEl.style.maxHeight = '150px';
    listEl.style.overflowY = 'auto';
    listEl.style.marginBottom = '12px';
    listEl.style.fontFamily = 'var(--font-mono)';
    listEl.style.fontSize = '0.7rem';
    listEl.style.color = 'var(--text-muted)';

    if (data && data.recent) {
      listEl.innerHTML = data.recent.map(r => `<div><span style="color:var(--accent-purple)">[${r[1] || 'Explorer'}]</span> ${r[2]}</div>`).join('');
    } else {
      listEl.innerHTML = '<div>불러오는 중...</div>';
    }
    this.container.appendChild(listEl);

    // Input form
    const formDiv = document.createElement('div');
    formDiv.style.display = 'flex';
    formDiv.style.gap = '4px';

    // Fade-in animation for guestbook elements
    formDiv.style.opacity = '0';
    formDiv.style.transform = 'translateY(5px)';
    formDiv.style.animation = 'tagFadeIn 0.3s ease forwards';
    listEl.style.opacity = '0';
    listEl.style.transform = 'translateY(5px)';
    listEl.style.animation = 'tagFadeIn 0.3s ease forwards';
    countEl.style.opacity = '0';
    countEl.style.transform = 'translateY(5px)';
    countEl.style.animation = 'tagFadeIn 0.3s ease forwards';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'gb-input';
    input.placeholder = '메시지 남기기...';
    input.style.flex = '1';
    input.style.background = 'rgba(0,0,0,0.3)';
    input.style.border = '1px solid var(--border-subtle)';
    input.style.color = '#fff';
    input.style.padding = '4px 8px';
    input.style.borderRadius = '4px';
    input.style.outline = 'none';

    const sendBtn = document.createElement('button');
    sendBtn.id = 'gb-send';
    sendBtn.textContent = 'Sync';
    sendBtn.style.background = 'var(--accent-cyan)';
    sendBtn.style.color = '#000';
    sendBtn.style.border = 'none';
    sendBtn.style.padding = '4px 8px';
    sendBtn.style.borderRadius = '4px';
    sendBtn.style.cursor = 'pointer';
    sendBtn.style.fontWeight = 'bold';

    sendBtn.onclick = () => {
      const msg = input.value;
      if (msg) this.postMessage(msg);
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const msg = input.value;
        if (msg) this.postMessage(msg);
      }
    });

    formDiv.appendChild(input);
    formDiv.appendChild(sendBtn);
    this.container.appendChild(formDiv);
  }

  async fetchData() {
    if (!this.GAS_URL) {
      this.lastData = { total_visitors: "(config.json 설정 필요)", recent: [] };
      this.renderGuestbook(this.lastData);
      return;
    }
    try {
      const res = await fetch(`${this.GAS_URL}?key=${encodeURIComponent(this.API_SECRET_KEY)}`);
      const data = await res.json();
      if (data.status === 'success') {
        this.lastData = data;
        this.renderGuestbook(data);
      }
    } catch (e) {
      console.warn("Guestbook fetch error", e);
      this.lastData = { total_visitors: "Offline", recent: [["", "System", "네트워크 오류 또는 오프라인 상태입니다."]] };
      this.renderGuestbook(this.lastData);
    }
  }

  async postMessage(message) {
    if (!this.GAS_URL) {
      alert("config.json 파일에 웹앱 URL을 설정해주세요!");
      return;
    }
    try {
      const btn = document.getElementById('gb-send');
      if (btn) {
        btn.textContent = "...";
        btn.disabled = true;
      }

      await fetch(this.GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ type: 'guestbook', name: "Explorer", message: message, key: this.API_SECRET_KEY }),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      });

      const input = document.getElementById('gb-input');
      if (input) input.value = "";
      if (btn) {
        btn.textContent = "Sync";
        btn.disabled = false;
      }
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
