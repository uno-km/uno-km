/**
 * AMEVA Ecosystem - Unified Common Client Script (shared/common.js)
 * High-Clarity Enterprise Open-Source Standard (SSOT v3.1)
 * 
 * Features:
 * 1. Desktop Sidebar Edge Tab (< / >) Collapse Handle
 * 2. Mobile Responsive Top Header Hamburger Drawer (<= 960px)
 * 3. Collapsible Category Section Accordions
 * 4. Automatic Code Block Copy Tooltips
 * 5. Active Link Highlighting (Clean URLs & Normalization)
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const sidebar = document.querySelector('.sidebar');

    if (!sidebar) return;

    // ── 1. Desktop Sidebar Edge Tab (< / > Toggle Handle) ─────────────────────
    let tabBtn = document.getElementById('sidebar-toggle-tab');
    if (!tabBtn) {
        tabBtn = document.createElement('div');
        tabBtn.id = 'sidebar-toggle-tab';
        tabBtn.className = 'sidebar-toggle-tab';
        tabBtn.setAttribute('title', '사이드바 접기/펼치기 (Toggle Sidebar)');
        tabBtn.setAttribute('aria-label', 'Toggle Sidebar');
        tabBtn.innerHTML = '‹';
        sidebar.appendChild(tabBtn);
    }

    function updateDesktopSidebar(collapsed) {
        if (collapsed) {
            sidebar.classList.add('desktop-collapsed');
            if (container) container.classList.add('sidebar-collapsed');
            tabBtn.classList.add('collapsed-tab');
            tabBtn.innerHTML = '›';
            document.body.appendChild(tabBtn);
        } else {
            sidebar.classList.remove('desktop-collapsed');
            if (container) container.classList.remove('sidebar-collapsed');
            tabBtn.classList.remove('collapsed-tab');
            tabBtn.innerHTML = '‹';
            sidebar.appendChild(tabBtn);
        }
    }

    // Restore saved state
    const isSavedCollapsed = localStorage.getItem('ameva_desktop_sidebar_collapsed') === 'true';
    if (window.innerWidth > 960 && isSavedCollapsed) {
        updateDesktopSidebar(true);
    }

    tabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const willCollapse = !sidebar.classList.contains('desktop-collapsed');
        updateDesktopSidebar(willCollapse);
        localStorage.setItem('ameva_desktop_sidebar_collapsed', willCollapse ? 'true' : 'false');
    });

    // ── 2. Mobile Header Hamburger Button (Active <= 960px) ───────────────────
    if (header) {
        let toggleBtn = header.querySelector('.menu-toggle-btn');
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'menu-toggle-btn';
            toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
            toggleBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <span class="menu-toggle-label">Menu</span>
            `;
            
            const controls = header.querySelector('.header-controls');
            if (controls) {
                controls.insertBefore(toggleBtn, controls.firstChild);
            } else {
                header.appendChild(toggleBtn);
            }
        }

        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = sidebar.classList.toggle('mobile-open');
            toggleBtn.classList.toggle('active', isOpen);
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 960) {
                    sidebar.classList.remove('mobile-open');
                    toggleBtn.classList.remove('active');
                }
            });
        });
    }

    // ── 3. Collapsible Sidebar Section Accordions ─────────────────────────────
    const headers = sidebar.querySelectorAll('h3');
    headers.forEach(h3 => {
        const ul = h3.nextElementSibling;
        if (!ul || ul.tagName !== 'UL') return;

        h3.classList.add('collapsible-header');

        if (!h3.querySelector('.accordion-icon')) {
            const icon = document.createElement('span');
            icon.className = 'accordion-icon';
            icon.textContent = '▾';
            h3.appendChild(icon);
        }

        h3.addEventListener('click', () => {
            const isCollapsed = ul.classList.toggle('collapsed');
            h3.classList.toggle('collapsed', isCollapsed);
            const icon = h3.querySelector('.accordion-icon');
            if (icon) {
                icon.textContent = isCollapsed ? '▸' : '▾';
            }
        });
    });

    // ── 4. Setup Copy Buttons on all <pre><code> blocks ───────────────────────
    document.querySelectorAll('pre').forEach((pre) => {
        if (pre.querySelector('.copy-code-btn')) return;

        const btn = document.createElement('button');
        btn.className = 'copy-code-btn';
        btn.setAttribute('aria-label', 'Copy code');
        btn.textContent = 'Copy';

        btn.addEventListener('click', async () => {
            const codeBlock = pre.querySelector('code') || pre;
            const textToCopy = codeBlock.innerText.trim();
            try {
                await navigator.clipboard.writeText(textToCopy);
                btn.textContent = 'Copied!';
                btn.style.backgroundColor = '#16a34a';
                btn.style.color = '#ffffff';

                setTimeout(() => {
                    btn.textContent = 'Copy';
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        });

        pre.appendChild(btn);
    });

    // ── 5. Auto-highlight Active Link in Sidebar ───────────────────────────────
    function normalizePage(name) {
        if (!name) return 'index';
        let clean = String(name).split('?')[0].split('#')[0].replace(/\/+$/, '');
        if (!clean) return 'index';
        const parts = clean.split('/');
        let last = parts[parts.length - 1];
        if (!last || last === '') return 'index';
        return last.replace(/\.html$/i, '').toLowerCase();
    }

    const currentNorm = normalizePage(window.location.pathname);
    document.querySelectorAll('.sidebar a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        const isExternal = href.startsWith('http') || href.startsWith('//');
        const isTier2 = href.startsWith('/lib/') || href.startsWith('/foundation/');
        
        if (!isExternal && !isTier2) {
            const hrefNorm = normalizePage(href);
            if (hrefNorm === currentNorm) {
                link.classList.add('active');
                const parentUl = link.closest('ul');
                if (parentUl) {
                    parentUl.classList.remove('collapsed');
                    const prevH3 = parentUl.previousElementSibling;
                    if (prevH3 && prevH3.tagName === 'H3') {
                        prevH3.classList.remove('collapsed');
                        const icon = prevH3.querySelector('.accordion-icon');
                        if (icon) icon.textContent = '▾';
                    }
                }
            }
        }
    });
});

// ── 6. AmevaUI Global Enterprise SDK Suite (SSOT v3.2) ─────────────────────
window.AmevaUI = window.AmevaUI || {};

window.AmevaUI.showLoading = function(target, message = 'Loading Data...') {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return null;

  el.classList.add('ameva-loading-container');

  let overlay = el.querySelector(':scope > .ameva-loading-overlay');
  if (overlay) {
    const textEl = overlay.querySelector('.ameva-loading-text');
    if (textEl) textEl.textContent = message;
    overlay.style.opacity = '1';
    return overlay;
  }

  overlay = document.createElement('div');
  overlay.className = 'ameva-loading-overlay';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = `
    <div class="ameva-spinner" aria-hidden="true"></div>
    <div class="ameva-loading-text">${message}</div>
  `;
  el.appendChild(overlay);
  return overlay;
};

window.AmevaUI.hideLoading = function(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  const overlay = el.querySelector(':scope > .ameva-loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      if (overlay.parentNode === el) {
        el.removeChild(overlay);
      }
      el.classList.remove('ameva-loading-container');
    }, 200);
  } else {
    el.classList.remove('ameva-loading-container');
  }
};

window.AmevaUI.createTabs = function(container, options = {}) {
  const root = typeof container === 'string' ? document.querySelector(container) : container;
  if (!root) return null;

  const tabList = root.querySelector('[role="tablist"]');
  const tabs = root.querySelectorAll('[role="tab"]');
  const panels = root.querySelectorAll('[role="tabpanel"]');

  if (!tabs.length || !panels.length) return null;

  function activateTab(targetTab) {
    tabs.forEach(tab => {
      const isTarget = tab === targetTab;
      tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      tab.tabIndex = isTarget ? 0 : -1;
      tab.classList.toggle('active', isTarget);
    });

    const targetPanelId = targetTab.getAttribute('aria-controls');
    panels.forEach(panel => {
      const isTarget = panel.id === targetPanelId;
      panel.hidden = !isTarget;
      panel.classList.toggle('active', isTarget);
    });

    if (typeof options.onTabChange === 'function') {
      options.onTabChange(targetTab, targetPanelId);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(tab);
    });

    tab.addEventListener('keydown', (e) => {
      let index = Array.from(tabs).indexOf(tab);
      if (e.key === 'ArrowRight') {
        index = (index + 1) % tabs.length;
        tabs[index].focus();
        activateTab(tabs[index]);
      } else if (e.key === 'ArrowLeft') {
        index = (index - 1 + tabs.length) % tabs.length;
        tabs[index].focus();
        activateTab(tabs[index]);
      }
    });
  });

  const defaultTab = root.querySelector('[role="tab"][aria-selected="true"]') || tabs[0];
  if (defaultTab) activateTab(defaultTab);

  return { activateTab };
};

window.AmevaUI.showNotification = function(message, type = 'info', durationMs = 4000) {
  let toastContainer = document.getElementById('ameva-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'ameva-toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '24px';
    toastContainer.style.right = '24px';
    toastContainer.style.zIndex = '9999';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '8px';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `ameva-toast ameva-toast-${type}`;
  toast.style.padding = '12px 18px';
  toast.style.borderRadius = '6px';
  toast.style.fontSize = '14px';
  toast.style.fontWeight = '500';
  toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  toast.style.transition = 'all 0.2s ease-in-out';
  toast.style.backgroundColor = type === 'error' ? '#fef2f2' : (type === 'success' ? '#f0fdf4' : '#f8fafc');
  toast.style.color = type === 'error' ? '#991b1b' : (type === 'success' ? '#166534' : '#0f172a');
  toast.style.border = `1px solid ${type === 'error' ? '#f87171' : (type === 'success' ? '#86efac' : '#cbd5e1')}`;
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentNode === toastContainer) {
        toastContainer.removeChild(toast);
      }
    }, 200);
  }, durationMs);
};
