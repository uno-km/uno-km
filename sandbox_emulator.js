/**
 * AMEVA Neural Fabric - Sandbox Emulator
 * Intercepts Markdown rendering to add "Run" buttons to JS/HTML code blocks
 */

class SandboxEmulator {
  constructor() {
    this.setupObserver();
  }

  setupObserver() {
    // Observe changes to node-modal-desc to inject run buttons
    const targetNode = document.getElementById('node-modal-desc');
    if (!targetNode) return;

    const config = { childList: true, subtree: true };
    const observer = new MutationObserver((mutations) => {
      this.injectButtons(targetNode);
    });
    observer.observe(targetNode, config);
  }

  injectButtons(container) {
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
      // Avoid duplicate buttons
      if (block.parentElement.querySelector('.sandbox-run-btn')) return;

      const lang = block.className || "";
      if (lang.includes('language-javascript') || lang.includes('language-js') || lang.includes('language-html')) {
        const btn = document.createElement('button');
        btn.className = 'sandbox-run-btn';
        btn.innerHTML = '▶ 브라우저 에뮬레이터에서 실행';
        btn.style.display = 'block';
        btn.style.marginTop = '8px';
        btn.style.padding = '4px 12px';
        btn.style.background = 'var(--accent-purple)';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '0.8rem';
        btn.style.fontWeight = 'bold';

        btn.onclick = () => this.runCode(block.textContent, lang.includes('html') ? 'html' : 'javascript');
        
        block.parentElement.appendChild(btn);
      }
    });
  }

  runCode(code, type) {
    if(window.audioEngine) window.audioEngine.playSwoosh();
    
    // Create an iframe to sandbox the code
    const iframe = document.createElement('iframe');
    iframe.sandbox = "allow-scripts"; // Only allow scripts, no same-origin
    iframe.style.width = '100%';
    iframe.style.height = '300px';
    iframe.style.border = '1px solid var(--accent-cyan)';
    iframe.style.background = '#fff';
    iframe.style.borderRadius = '8px';
    iframe.style.marginTop = '12px';

    let srcDoc = "";
    if (type === 'html') {
      srcDoc = code;
    } else {
      srcDoc = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: sans-serif; padding: 10px;">
          <h3>Sandbox Output:</h3>
          <pre id="output" style="background: #f4f4f4; padding: 10px; border-radius: 4px;"></pre>
          <script>
            // Intercept console.log
            const ogLog = console.log;
            console.log = function(...args) {
              const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
              document.getElementById('output').innerHTML += str + '<br>';
              ogLog.apply(console, args);
            };
            try {
              ${code}
            } catch (e) {
              document.getElementById('output').innerHTML += '<span style="color:red">' + e.message + '</span>';
            }
          </script>
        </body>
        </html>
      `;
    }
    
    iframe.srcdoc = srcDoc;

    // Show it in a simple popup or append below the button
    const modalBody = document.querySelector('#modal-node-detail .modal-body') || document.getElementById('node-modal-desc');
    
    // Remove old iframe if exists
    const old = modalBody.querySelector('.sandbox-iframe');
    if (old) old.remove();

    iframe.className = 'sandbox-iframe';
    modalBody.appendChild(iframe);
    
    // Scroll to it
    iframe.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.sandboxEmulator = new SandboxEmulator();
});
