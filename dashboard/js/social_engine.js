/**
 * AMEVA Neural Fabric — Social Engine v2
 * Powered by Neon PostgreSQL (/api/guestbook) & WebRTC Peer Mesh
 */

// Global queue for telemetry
window.telemetryQueue = window.telemetryQueue || [];
window.logTelemetryEvent = function(eventName, details) {
  if (window.socialEngine && typeof window.socialEngine.logInteraction === 'function') {
    window.socialEngine.logInteraction(eventName, details);
  } else {
    window.telemetryQueue.push({ eventName, details, timestamp: new Date().toISOString() });
  }
};

class SocialEngine {
  constructor() {
    this.apiUrl = '/api/guestbook';
    this.peer = null;
    this.connections = [];
    this.ghostCursors = {};
    this.expandTimeout = null;
    this.isCollapsed = window.innerWidth <= 768;
    this.wobbleInterval = null;
    this.lastData = null;

    this.sessionId = 'sess-' + Math.random().toString(36).substr(2, 9);
    this.startTime = Date.now();
    this.visitorCount = 1;
    this.entries = [];

    this.initGuestbookUI();
    this.fetchData();
    this.startWobbleTimer();
  }

  startWobbleTimer() {
    if (this.wobbleInterval) clearInterval(this.wobbleInterval);
    this.wobbleInterval = setInterval(() => {
      if (this.isCollapsed && this.container) {
        this.container.classList.add('wobble-active');
        setTimeout(() => {
          if (this.container) this.container.classList.remove('wobble-active');
        }, 600);
      }
    }, 4000);
  }

  initGuestbookUI() {
    this.container = document.createElement('div');
    this.container.id = 'guestbook-panel';
    this.container.style.position = 'fixed';
    this.container.style.top = '70px';
    this.container.style.right = '24px';
    this.container.style.width = '130px';
    this.container.style.zIndex = '150';
    this.container.style.color = 'var(--text-primary)';
    this.container.style.fontSize = '0.8rem';
    this.container.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

    document.body.appendChild(this.container);
    this.renderGuestbook();
  }

  async fetchData() {
    try {
      const res = await fetch(this.apiUrl);
      if (res.ok) {
        const data = await res.json();
        if (data.ok) {
          this.visitorCount = data.visitor_count || this.visitorCount;
          this.entries = data.entries || [];
          this.renderGuestbook();
        }
      }
    } catch (e) {
      console.warn('[SocialEngine] Guestbook fetch error:', e);
    }
  }

  renderGuestbook() {
    if (!this.container) return;

    if (this.isCollapsed) {
      this.container.style.background = 'rgba(15, 23, 42, 0.85)';
      this.container.style.border = '1px dashed var(--accent-cyan)';
      this.container.style.borderRadius = 'var(--radius-sm)';
      this.container.style.padding = '8px 12px';
      this.container.style.width = '130px';
      this.container.style.boxShadow = '0 4px 15px rgba(0, 239, 255, 0.15)';
      this.container.style.backdropFilter = 'blur(10px)';

      this.container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; cursor:pointer;" id="guestbook-collapsed-header">
          <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:bold; font-size:0.78rem;">Guest book</span>
          <span style="color:var(--text-secondary); font-size:0.7rem;">[+]</span>
        </div>
        <div style="font-size:0.72rem; color:var(--text-secondary); margin-top:4px; font-family:var(--font-mono);">
          방문자: <strong style="color:#3ECF8E;">${this.visitorCount.toLocaleString()}</strong>명
        </div>
      `;

      const header = this.container.querySelector('#guestbook-collapsed-header');
      if (header) {
        header.onclick = () => {
          this.isCollapsed = false;
          this.renderGuestbook();
        };
      }
    } else {
      this.container.style.background = 'rgba(20, 20, 28, 0.92)';
      this.container.style.border = '1px solid rgba(0, 239, 255, 0.35)';
      this.container.style.borderRadius = 'var(--radius-md)';
      this.container.style.padding = '14px';
      this.container.style.width = '300px';
      this.container.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 16px rgba(0, 239, 255, 0.15)';
      this.container.style.backdropFilter = 'blur(14px)';

      let listHtml = '';
      if (this.entries.length === 0) {
        listHtml = '<div style="color:var(--text-secondary); font-size:0.75rem; text-align:center; padding:12px 0;">방명록을 작성해보세요! ✍️</div>';
      } else {
        listHtml = '<div class="guestbook-msg-list" style="max-height:140px; overflow-y:auto; margin:10px 0; display:flex; flex-direction:column; gap:6px; padding-right:4px;">';
        this.entries.slice(0, 8).forEach(entry => {
          const dateStr = entry.created_at ? new Date(entry.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          listHtml += `
            <div style="background:rgba(255,255,255,0.05); padding:6px 10px; border-radius:6px; font-size:0.75rem; border-left:2px solid ${entry.avatar_color || '#00EFFF'};">
              <div style="display:flex; justify-content:space-between; margin-bottom:2px; color:var(--text-secondary); font-size:0.68rem;">
                <strong style="color:${entry.avatar_color || '#00EFFF'};">${entry.author}</strong>
                <span>${dateStr}</span>
              </div>
              <div style="color:#e2e8f0; word-break:break-word;">${entry.message}</div>
            </div>
          `;
        });
        listHtml += '</div>';
      }

      this.container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="color:var(--accent-cyan); font-family:var(--font-mono); font-weight:bold; font-size:0.82rem;">🏛️ Neon DB Guestbook</span>
          <span id="btn-collapse-guestbook" style="color:var(--text-secondary); font-size:0.75rem; cursor:pointer; font-family:var(--font-mono);">[-]</span>
        </div>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px; font-family:var(--font-mono);">
          누적 방문자: <strong style="color:#3ECF8E; font-size:0.85rem;">${this.visitorCount.toLocaleString()}</strong>명
        </div>
        ${listHtml}
        <div style="display:flex; gap:6px; margin-top:8px;">
          <input type="text" id="guestbook-input" placeholder="메시지 남기기..." maxlength="100" style="flex:1; background:rgba(0,0,0,0.5); border:1px solid var(--border-subtle); color:#fff; padding:6px 10px; border-radius:6px; font-size:0.78rem; outline:none;" />
          <button id="btn-guestbook-sync" style="background:#00EFFF; border:none; color:#000; padding:6px 12px; border-radius:6px; font-size:0.78rem; font-weight:bold; cursor:pointer; transition:all 0.2s;">Sync</button>
        </div>
      `;

      const collapseBtn = this.container.querySelector('#btn-collapse-guestbook');
      if (collapseBtn) {
        collapseBtn.onclick = () => {
          this.isCollapsed = true;
          this.renderGuestbook();
        };
      }

      const syncBtn = this.container.querySelector('#btn-guestbook-sync');
      const inputEl = this.container.querySelector('#guestbook-input');

      const submitMessage = async () => {
        const msg = inputEl.value.trim();
        if (!msg) return;

        syncBtn.disabled = true;
        syncBtn.textContent = '...';

        try {
          const res = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              author: '방문자',
              message: msg,
              country: 'KR',
              avatarColor: '#3ECF8E'
            })
          });

          if (res.ok) {
            inputEl.value = '';
            if (window.showToast) window.showToast('✅ 방명록이 Neon DB에 등록되었습니다.');
            await this.fetchData();
          }
        } catch (e) {
          console.warn('[SocialEngine] Post message error:', e);
        } finally {
          syncBtn.disabled = false;
          syncBtn.textContent = 'Sync';
        }
      };

      if (syncBtn) syncBtn.onclick = submitMessage;
      if (inputEl) {
        inputEl.onkeydown = (e) => {
          if (e.key === 'Enter') submitMessage();
        };
      }
    }
  }

  logInteraction(name, details) {
    // Optional telemetry logging
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.socialEngine = new SocialEngine();
});
