/**
 * AMEVA Ecosystem - Unified Common Client Script (shared/common.js)
 * Provides:
 * 1. Automatic Code Block Copy Tooltips
 * 2. Sidebar Navigation Active Link Highlighting
 * 3. Mobile Navigation Drawer Toggle
 * 4. Smooth Anchor Scrolling
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Copy Buttons on all <pre><code> blocks
    document.querySelectorAll('pre > code').forEach((codeBlock) => {
        const pre = codeBlock.parentElement;
        if (pre.querySelector('.copy-btn')) return; // Already exists

        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.setAttribute('aria-label', 'Copy code to clipboard');
        btn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
        `;

        btn.addEventListener('click', async () => {
            const textToCopy = codeBlock.innerText.trim();
            try {
                await navigator.clipboard.writeText(textToCopy);
                btn.classList.add('copied');
                btn.querySelector('span').textContent = 'Copied!';
                
                // Trigger Telemetry Event if available
                if (window.AMEVA_TELEMETRY && typeof window.AMEVA_TELEMETRY.trackEvent === 'function') {
                    window.AMEVA_TELEMETRY.trackEvent('copy_code', {
                        snippet: textToCopy.slice(0, 100),
                        tag: 'code'
                    });
                }

                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.querySelector('span').textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });

        pre.style.position = 'relative';
        pre.appendChild(btn);
    });

    // 2. Auto-highlight current active link in sidebar
    const currentPath = window.location.pathname;
    document.querySelectorAll('.sidebar a').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath === ''))) {
            link.classList.add('active');
        }
    });

    // 3. Mobile Header Hamburger Toggle (if present)
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
});
