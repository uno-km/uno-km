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

// ── Universal Responsive Sidebar & Drawer Controller (SSOT v4.0) ───────────────
(function() {
  'use strict';

  function initUniversalSidebar() {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.resume-sidebar');
    const header = document.querySelector('header');
    const container = document.querySelector('.container') || document.querySelector('.portfolio-container');

    if (!sidebar) {
      return false;
    }

    if (sidebar.__sidebarInitDone) {
      return true;
    }
    sidebar.__sidebarInitDone = true;

    // 1. Ensure Backdrop exists for Mobile / Tablet off-canvas
    let backdrop = document.querySelector('.sidebar-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'sidebar-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }

    // 2. Ensure Mobile/Tablet Drawer Top Bar exists inside sidebar
    let drawerHeader = sidebar.querySelector('.sidebar-drawer-header');
    if (!drawerHeader) {
      drawerHeader = document.createElement('div');
      drawerHeader.className = 'sidebar-drawer-header';
      drawerHeader.innerHTML = `
        <div class="sidebar-drawer-brand">
          <img src="/shared/favicon.svg" alt="AMEVA Logo" width="20" height="20">
          <span>내비게이션 (Navigation)</span>
        </div>
        <button type="button" class="sidebar-drawer-close" aria-label="메뉴 닫기 (Close)">&times;</button>
      `;
      sidebar.insertBefore(drawerHeader, sidebar.firstChild);
    }

    const drawerCloseBtn = drawerHeader.querySelector('.sidebar-drawer-close');

    // 3. Ensure Header Sidebar Toggle Button exists in <header>
    let headerToggleBtn = document.getElementById('headerSidebarToggle') || document.querySelector('.header-sidebar-toggle');
    if (!headerToggleBtn && header) {
      headerToggleBtn = document.createElement('button');
      headerToggleBtn.type = 'button';
      headerToggleBtn.id = 'headerSidebarToggle';
      headerToggleBtn.className = 'header-sidebar-toggle';
      headerToggleBtn.setAttribute('aria-label', '사이드바 메뉴 토글');
      headerToggleBtn.setAttribute('title', '사이드바 접기/펼치기 (Ctrl+B)');
      headerToggleBtn.innerHTML = `
        <svg class="icon-toggle-panel" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
        <svg class="icon-toggle-hamburger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span class="header-sidebar-toggle-text">메뉴</span>
      `;
      
      const brand = header.querySelector('.header-brand') || header.querySelector('.brand-group');
      if (brand) {
        header.insertBefore(headerToggleBtn, brand);
      } else {
        header.insertBefore(headerToggleBtn, header.firstChild);
      }
    }

    // Also support legacy .menu-toggle-btn if already present
    const legacyToggle = header ? header.querySelector('.menu-toggle-btn') : null;
    if (legacyToggle && legacyToggle !== headerToggleBtn) {
      legacyToggle.style.display = 'none';
    }

    // 4. Desktop Sidebar Edge Tab (< / > Toggle Handle)
    let tabBtn = document.getElementById('sidebar-toggle-tab');
    if (!tabBtn) {
      tabBtn = document.createElement('div');
      tabBtn.id = 'sidebar-toggle-tab';
      tabBtn.className = 'sidebar-toggle-tab';
      tabBtn.setAttribute('title', '사이드바 접기/펼치기 (Ctrl+B)');
      tabBtn.setAttribute('aria-label', 'Toggle Sidebar');
      tabBtn.innerHTML = '‹';
      sidebar.appendChild(tabBtn);
    }

    function isMobileOrTablet() {
      return window.innerWidth <= 960;
    }

    function setDesktopCollapsed(collapsed) {
      if (collapsed) {
        sidebar.classList.add('desktop-collapsed', 'mini-rail');
        if (container) container.classList.add('sidebar-collapsed');
        document.body.classList.add('sidebar-collapsed');
        tabBtn.classList.add('collapsed-tab');
        tabBtn.innerHTML = '›';
        tabBtn.setAttribute('title', '사이드바 펼치기 (Ctrl+B)');
        document.body.appendChild(tabBtn);
        if (headerToggleBtn) {
          headerToggleBtn.classList.add('collapsed');
          headerToggleBtn.setAttribute('aria-expanded', 'false');
          headerToggleBtn.setAttribute('title', '사이드바 펼치기 (Ctrl+B)');
        }
      } else {
        sidebar.classList.remove('desktop-collapsed', 'mini-rail');
        if (container) container.classList.remove('sidebar-collapsed');
        document.body.classList.remove('sidebar-collapsed');
        tabBtn.classList.remove('collapsed-tab');
        tabBtn.innerHTML = '‹';
        tabBtn.setAttribute('title', '사이드바 접기 (Ctrl+B)');
        sidebar.appendChild(tabBtn);
        if (headerToggleBtn) {
          headerToggleBtn.classList.remove('collapsed');
          headerToggleBtn.setAttribute('aria-expanded', 'true');
          headerToggleBtn.setAttribute('title', '사이드바 접기 (Ctrl+B)');
        }
      }
    }

    function setMobileDrawerOpen(open) {
      if (open) {
        sidebar.classList.add('mobile-open');
        backdrop.classList.add('active');
        document.body.classList.add('sidebar-drawer-open');
        if (headerToggleBtn) {
          headerToggleBtn.classList.add('active');
          headerToggleBtn.setAttribute('aria-expanded', 'true');
        }
      } else {
        sidebar.classList.remove('mobile-open');
        backdrop.classList.remove('active');
        document.body.classList.remove('sidebar-drawer-open');
        if (headerToggleBtn) {
          headerToggleBtn.classList.remove('active');
          headerToggleBtn.setAttribute('aria-expanded', 'false');
        }
      }
    }

    function toggleSidebar() {
      if (isMobileOrTablet()) {
        const isOpen = sidebar.classList.contains('mobile-open');
        setMobileDrawerOpen(!isOpen);
      } else {
        const isCollapsed = sidebar.classList.contains('desktop-collapsed') || sidebar.classList.contains('mini-rail');
        const willCollapse = !isCollapsed;
        setDesktopCollapsed(willCollapse);
        try {
          const val = willCollapse ? 'true' : 'false';
          localStorage.setItem('uno_sidebar_collapsed', val);
          localStorage.setItem('ameva_desktop_sidebar_collapsed', val);
          localStorage.setItem('ameva_sidebar_collapsed', val);
        } catch (e) {}
      }
    }

    // Restore desktop saved state (Default: OPEN / Expanded)
    try {
      const savedCollapsed = localStorage.getItem('uno_sidebar_collapsed') === 'true' ||
                             localStorage.getItem('ameva_desktop_sidebar_collapsed') === 'true' ||
                             localStorage.getItem('ameva_sidebar_collapsed') === 'true';
      if (!isMobileOrTablet() && savedCollapsed) {
        setDesktopCollapsed(true);
      } else if (!isMobileOrTablet()) {
        setDesktopCollapsed(false);
      }
    } catch (e) {
      if (!isMobileOrTablet()) {
        setDesktopCollapsed(false);
      }
    }

    // Event Bindings
    if (headerToggleBtn) {
      headerToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSidebar();
      });
    }

    tabBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleSidebar();
    });

    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setMobileDrawerOpen(false);
      });
    }

    backdrop.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      setMobileDrawerOpen(false);
    });

    // Close mobile/tablet drawer when any navigation link is clicked
    sidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (isMobileOrTablet()) {
          setTimeout(() => setMobileDrawerOpen(false), 120);
        }
      });
    });

    // Keyboard Shortcuts: Ctrl+B or Cmd+B to toggle, Escape to close mobile drawer
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        toggleSidebar();
      } else if (e.key === 'Escape') {
        if (sidebar.classList.contains('mobile-open')) {
          setMobileDrawerOpen(false);
        }
      }
    });

    // Handle Window Resize (Desktop <-> Tablet/Mobile transitions)
    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      const curWidth = window.innerWidth;
      if (curWidth > 960 && lastWidth <= 960) {
        setMobileDrawerOpen(false);
        try {
          const shouldCollapse = localStorage.getItem('uno_sidebar_collapsed') === 'true' ||
                                 localStorage.getItem('ameva_desktop_sidebar_collapsed') === 'true' ||
                                 localStorage.getItem('ameva_sidebar_collapsed') === 'true';
          setDesktopCollapsed(shouldCollapse);
        } catch (e) {
          setDesktopCollapsed(false);
        }
      } else if (curWidth <= 960 && lastWidth > 960) {
        setDesktopCollapsed(false);
        setMobileDrawerOpen(false);
      }
      lastWidth = curWidth;
    });

    return true;
  }

  function initSidebarAccordions() {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.resume-sidebar');
    if (!sidebar) return;

    const headers = sidebar.querySelectorAll('h3');
    headers.forEach(h3 => {
      const ul = h3.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;

      if (!h3.classList.contains('collapsible-header')) {
        h3.classList.add('collapsible-header');
      }

      if (!h3.querySelector('.accordion-icon')) {
        const icon = document.createElement('span');
        icon.className = 'accordion-icon';
        icon.textContent = ul.classList.contains('collapsed') ? '▸' : '▾';
        h3.appendChild(icon);
      }

      if (h3.__accordionBound) return;
      h3.__accordionBound = true;

      h3.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return;
        const isCollapsed = ul.classList.toggle('collapsed');
        h3.classList.toggle('collapsed', isCollapsed);
        const icon = h3.querySelector('.accordion-icon');
        if (icon) {
          icon.textContent = isCollapsed ? '▸' : '▾';
        }
      });
    });
  }

  // Lifecycle Initialization Hooks
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initUniversalSidebar();
      initSidebarAccordions();
    });
  } else {
    initUniversalSidebar();
    initSidebarAccordions();
  }

  window.addEventListener('ameva:sidebar-ready', () => {
    initUniversalSidebar();
    initSidebarAccordions();
  });

  if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(() => {
      if (document.querySelector('.sidebar, .resume-sidebar')) {
        if (initUniversalSidebar()) {
          initSidebarAccordions();
          observer.disconnect();
        }
      }
    });
    observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 6000);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar') || document.querySelector('.resume-sidebar');
    if (!sidebar) return;

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

window.AmevaUI.animateCount = function(target, targetValue, durationMs = 800, suffix = '') {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;

  const startVal = parseInt(el.getAttribute('data-current-val') || '0', 10) || 0;
  const endVal = parseInt(targetValue, 10) || 0;
  el.setAttribute('data-current-val', String(endVal));

  if (startVal === endVal) {
    el.textContent = endVal.toLocaleString() + suffix;
    return;
  }

  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / durationMs, 1);
    // Ease out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(startVal + (endVal - startVal) * easeOut);
    el.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = endVal.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
};

window.AmevaUI.withLoading = async function(target, asyncFn, message = 'Loading Data...') {
  window.AmevaUI.showLoading(target, message);
  try {
    return await asyncFn();
  } finally {
    window.AmevaUI.hideLoading(target);
  }
};

