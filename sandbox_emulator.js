/**
 * AMEVA Neural Fabric - Sandbox Emulator
 * Intercepts Markdown rendering to add "Run" buttons to JS/HTML code blocks
 * and automatically executes them immediately below the code block.
 */

class SandboxEmulator {
  constructor() {
    this.setupObserver();
    this.setupMessageListener();
  }

  setupObserver() {
    // Observe changes to node-modal-desc to inject run buttons and auto-run code
    const targetNode = document.getElementById('node-modal-desc');
    if (!targetNode) return;

    const config = { childList: true, subtree: true };
    const observer = new MutationObserver((mutations) => {
      this.injectAndAutoRun(targetNode);
    });
    observer.observe(targetNode, config);
  }

  setupMessageListener() {
    // Listen for resize messages from sandboxed iframes
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'resize-sandbox') {
        const iframe = document.getElementById(event.data.id);
        if (iframe) {
          // Fit height perfectly based on content scrollHeight
          iframe.style.height = (event.data.height + 25) + 'px';
        }
      }
    });
  }

  injectAndAutoRun(container) {
    const codeBlocks = container.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
      // Avoid duplicate buttons/iframes
      if (block.parentElement.querySelector('.sandbox-run-btn')) return;

      const lang = block.className || "";
      if (lang.includes('language-javascript') || lang.includes('language-js') || lang.includes('language-html')) {
        const btn = document.createElement('button');
        btn.className = 'sandbox-run-btn';
        btn.innerHTML = '▶ 코드 다시 실행';
        btn.style.display = 'block';
        btn.style.marginBottom = '8px';
        btn.style.marginTop = '0px';
        btn.style.padding = '4px 12px';
        btn.style.background = 'var(--accent-purple)';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.borderRadius = '4px';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '0.8rem';
        btn.style.fontWeight = 'bold';

        const isHtml = lang.includes('html');
        const codeType = isHtml ? 'html' : 'javascript';

        btn.onclick = () => this.runCode(block.textContent, codeType, block);

        // Insert run button on top of the code text inside pre
        block.parentElement.insertBefore(btn, block);

        // Auto-run immediately when loaded
        setTimeout(() => {
          this.runCode(block.textContent, codeType, block);
        }, 100);
      }
    });
  }

  runCode(code, type, block) {
    if (window.audioEngine) window.audioEngine.playSwoosh();

    const preElement = block.parentElement;

    // Find or create the iframe for this specific code block
    let iframe = preElement.nextElementSibling;
    if (!iframe || !iframe.classList.contains('sandbox-iframe')) {
      iframe = document.createElement('iframe');
      iframe.className = 'sandbox-iframe';
      iframe.sandbox = "allow-scripts"; // Only allow scripts
      iframe.style.width = '100%';
      iframe.style.border = '1px solid var(--accent-cyan)';
      iframe.style.background = '#fff';
      iframe.style.borderRadius = '8px';
      iframe.style.marginTop = '12px';
      iframe.style.display = 'block';
      preElement.after(iframe);
    }

    const iframeId = 'sandbox-iframe-' + Math.random().toString(36).substr(2, 9);
    iframe.id = iframeId;
    iframe.style.height = '100px'; // Initial height

    let srcDoc = "";
    if (type === 'html') {
      srcDoc = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: sans-serif; padding: 10px; margin: 0;">
          ${code}
          <script>
            function sendHeight() {
              const height = document.documentElement.scrollHeight || document.body.scrollHeight;
              window.parent.postMessage({ type: 'resize-sandbox', id: '${iframeId}', height: height }, '*');
            }
            window.addEventListener('load', sendHeight);
            // Observe DOM changes to resize
            const observer = new MutationObserver(sendHeight);
            observer.observe(document.body, { childList: true, subtree: true, attributes: true });
          </script>
        </body>
        </html>
      `;
    } else {
      srcDoc = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: sans-serif; padding: 10px; margin: 0; background: #fafafa; color: #333;">
          <h4 style="margin: 0 0 8px 0; color: var(--accent-purple); font-size: 0.85rem; font-family: monospace;">🖥️ Sandbox Console Output</h4>
          <pre id="output" style="background: #1e1e1e; color: #fff; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.85rem; margin: 0; white-space: pre-wrap; word-break: break-all;"></pre>
          <script>
            const ogLog = console.log;
            function sendHeight() {
              const height = document.documentElement.scrollHeight || document.body.scrollHeight;
              window.parent.postMessage({ type: 'resize-sandbox', id: '${iframeId}', height: height }, '*');
            }
            console.log = function(...args) {
              const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
              const output = document.getElementById('output');
              if (output) {
                output.innerHTML += str + '<br>';
                sendHeight();
              }
              ogLog.apply(console, args);
            };
            window.addEventListener('load', () => {
              try {
                ${code}
              } catch (e) {
                document.getElementById('output').innerHTML += '<span style="color:#ff6b6b; font-weight:bold;">⚠️ Error: ' + e.message + '</span>';
              }
              sendHeight();
            });
          </script>
        </body>
        </html>
      `;
    }

    iframe.srcdoc = srcDoc;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.sandboxEmulator = new SandboxEmulator();
});
