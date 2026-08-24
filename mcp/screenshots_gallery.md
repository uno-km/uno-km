# AMEVA OS Integration Test v2 Screenshots Gallery

This document showcases the step-by-step visual E2E flow captured by Puppeteer during the automated test run of **AMEVA OS v2.0**.

---

## Group A: Boot & Dynamic Tool Hub

### 1. AMEVA OS Boot Sequence Completed
The system mounts the VFS, boots the virtual kernel, and registers the basic shell commands.
![Group A1: AMEVA OS Booted](../test/2026-06-18/img/mcp_test_A1_booted.png)

### 2. Tool Hub Auto-Loaded & Badged
The Dynamic Tool Hub loads the manifest from GitHub and registers the tools. The status bar displays the green `HUB LIVE` badge.
![Group A2: Hub Tools Loaded](../test/2026-06-18/img/mcp_test_A2_hub_tools.png)

---

## Group B: MCP JSON-RPC `/mcp` HTTP Endpoint

### 3. MCP tools/list Relayed
The proxy injects `run_browser_test` and relays the tools list containing both built-in and dynamic hub tools.
![Group B1: tools/list output](../test/2026-06-18/img/mcp_test_B1_tools_list.png)

---

## Group C: Built-in Tools via MCP `/mcp`

### 4. run_shell_command & python_exec Executed
Built-in MCP tools call execution outputs are successfully printed to the terminal console.
![Group C1: Built-in Tools call](../test/2026-06-18/img/mcp_test_C1_builtin.png)

---

## Group D: HUB Tools via MCP /mcp (Pyodide WASM)

### 5. Dynamic Pyodide HUB Tools Completed
All 7 Pyodide-based dynamic tools (e.g. `calc`, `format_json`, `base64_encode`) calculate results in the browser's sandbox and return successfully.
![Group D1: HUB tools execution](../test/2026-06-18/img/mcp_test_D1_hub_tools.png)

---

## Group E: ntfy.sh Live Update Channel

### 6. ntfy.sh SSE Message Broadcast & Hot-Reloaded
An update pushed to GitHub sends a message via ntfy.sh SSE. The console detects `Notification received` and hot-reloads the Tool Hub. The status bar badge updates to `HUB UPDATED`.
![Group E1: ntfy.sh SSE Live Update](../test/2026-06-18/img/mcp_test_E1_ntfy.png)

---

## Group F: Terminal Commands & Final States

### 7. manual hub-reload
Triggering manual hot-reloads from the terminal console.
![Group F1: hub-reload](../test/2026-06-18/img/mcp_test_F1_hub_reload.png)

### 8. Final Consolidated State
The final terminal state showing the tools command confirmation and updated status badge.
![Group F2: Final State](../test/2026-06-18/img/mcp_test_F2_final.png)
