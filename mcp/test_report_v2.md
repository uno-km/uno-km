# AMEVA OS Full MCP + HUB + ntfy.sh Integration Test v2 Report

This report documents the E2E verification of **AMEVA OS v2.0**, verifying standard and dynamic MCP tools, HTTP Gateway endpoints, and real-time SSE hot-reloads via ntfy.sh.

---

## Test Execution Summary

- **Date of Run**: 2026-06-19
- **Platform**: AMEVA OS v2.0 (Browser WASM Kernel & Local Proxy Bridge)
- **Status**: ALL 29/29 ASSERTIONS PASSED (100% success rate)

---

## Detailed Test Results

### Group A: Boot & Dynamic Tool Hub
- **[PASS]** AMEVA OS booted successfully -> WASM C-Kernel loaded.
- **[PASS]** Tool Hub auto-loaded -> `mcp_manifest.json` parsed.
- **[PASS]** HUB LIVE badge in status bar -> SSE link initialized.
- **[PASS]** HUB tools loaded (via `tools` command) -> 8 custom tools registered in browser shell.

### Group B: MCP JSON-RPC `/mcp` HTTP Endpoint
- **[PASS]** POST `/mcp` initialize -> Returns server version `2.0.0` & capabilities.
- **[PASS]** `tools/list` builtin tools -> 8 core tools listed (including `llm_generate`, `browser_evaluate`).
- **[PASS]** `tools/list` HUB tools -> 8 dynamic tools listed (including `format_json`, `calc`).
- **[PASS]** Total tools listed >= 10 -> Total of 16 tools active.

### Group C: Built-in Tools via MCP `/mcp`
- **[PASS]** `run_shell_command 'echo MCP_ECHO_OK'` -> Returned stdout `MCP_ECHO_OK`.
- **[PASS]** `gitpull uno-km/MCP-Utils-Toolkit` -> Cloned repo tree to VFS & auto-installed dependencies via micropip.
- **[PASS]** `python_exec quick_test.py (2+2=4)` -> Executed script in Pyodide and returned `4`.

### Group D: HUB Tools via MCP `/mcp` (Pyodide WASM)
- **[PASS]** `format_json` -> Formatted JSON input into pretty-printed string.
- **[PASS]** `text_transform` -> Transformed text to upper-case (`HELLO WORLD`).
- **[PASS]** `calc` -> Calculated math expression `2 ** 10` -> `1024`.
- **[PASS]** `hash_text` -> Generated MD5 hash.
- **[PASS]** `generate_uuid` -> Returned valid UUID v4.
- **[PASS]** `base64_encode` -> Encoded data to Base64 format (`QU1FVkEgT1M=`).
- **[PASS]** `timestamp_convert` -> Converted unix epoch time to formatted strings.

### Group E: ntfy.sh Live Update Channel
- **[PASS]** ntfy.sh POST delivered -> HTTP 200 message dispatch.
- **[PASS]** Browser SSE received notification -> Relayed real-time event shown in shell console.
- **[PASS]** HUB badge updated after notification -> Status badge updated to `HUB UPDATED`.

### Group F: Terminal Commands & Advanced Backlog (New in v2.0)
- **[PASS]** `hub-reload` -> Manually re-fetched manifest from GitHub CDN and reloaded all dynamic tools.
- **[PASS]** Dependency Self-Healing (Static Scan) -> Scanned Python script and auto-installed micropip packages prior to run.
- **[PASS]** Dependency Self-Healing (Runtime Error Recovery) -> Handled ModuleNotFoundError, auto-installed packages, and retried.
- **[PASS]** SharedArrayBuffer Zero-Copy IPC (Init) -> Detect TIER_1 and initialize circular buffer.
- **[PASS]** SharedArrayBuffer Zero-Copy IPC (CRC Verification) -> Validated data checksum integrity in ring buffer.
- **[PASS]** Multi-Repository Mounting -> Loaded manifest from secondary repositories inside VFS concurrently.
- **[PASS]** Tool Toggle Enable/Disable -> Invoked tool toggle API to toggle tool status dynamically.
- **[PASS]** Tool Toggle Filter -> Verified tools/list successfully filtered out disabled tools.

---

## Diagnostics & Fixed Issues

1. **Test Client Socket Hijacking Prevention**
   - We observed that when running automated tests, concurrent default browser sessions (from previous launches) attempted to connect to `localhost:9000` via different loopbacks (`127.0.0.1` and `::1`). This triggered socket termination and reconnect loops, which aborted active tools.
   - We unified connection endpoints to `127.0.0.1` and added **Test Client Protection** to reject normal client hijacking attempts (`ws.close(1008)`) during active automated tests.

2. **Pyodide Initialization Mismatch**
   - The dynamic tools pipeline called `initPyodide()`, which had been refactored into a no-op placeholder. This caused dynamic tools to throw `Cannot read properties of null (reading 'runPython')`.
   - We redirected calls to `_ensurePyodide()` to properly lazy-load the Pyodide runtime upon executing any dynamic tool.

3. **HTTP `/mcp` Gateway Relaying**
   - The JSON-RPC HTTP gateway relayed messages using `mcp-http-` IDs, but the WebSocket receiver only intercepted `http-` IDs. This caused `/mcp` tools calls to hang and timeout.
   - We refactored response routing to perform Map-lookups against `pendingHttpRequests` directly, curing the timeouts.

