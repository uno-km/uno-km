# AMEVA OS Dynamic Tool Hub Specifications

This document outlines the specifications of the **Dynamic Tool Hub** integration. The Hub dynamically registers MCP tools inside the browser kernel from a remote repository at boot time, and leverages an SSE channel for zero-latency hot-reloads.

---

## Specifications & Manifest Links

All dynamic tools, specifications, and configurations are maintained in the companion repository [AMEVA-MCP-Hub](https://github.com/uno-km/ameva-mcp-hub). Below are the direct links to the relevant assets:

| Specification Document | Purpose | Location |
| :--- | :--- | :--- |
| **mcp_manifest.json** | The central JSON manifest that defines all dynamic tool signatures, descriptions, input schemas, and inline Pyodide Python codes. | [View mcp_manifest.json](https://github.com/uno-km/ameva-mcp-hub/blob/main/mcp_manifest.json) |
| **mcp_metadata_spec.md** | Detailed design specifications explaining how dynamic tool manifest parameters (signatures, input parameters, inline code, and channel hooks) are mapped and structured. | [View mcp_metadata_spec.md](https://github.com/uno-km/ameva-mcp-hub/blob/main/mcp_metadata_spec.md) |
| **README.md (MCP-Utils)** | General usage instructions, installation scripts, and specifications for running dynamic utils tools. | [View README.md](https://github.com/uno-km/ameva-mcp-hub/blob/main/README.md) |
| **MCP_IDEAS.md** | Ideation, roadmap, and design concepts for expanding browser-compatible WebAssembly dynamic tools. | [View MCP_IDEAS.md](https://github.com/uno-km/ameva-mcp-hub/blob/main/MCP_IDEAS.md) |

---

## How Dynamic Tool Loading Works

1. **Manifest Retrieval**:
   On boot, AMEVA OS retrieves the latest `mcp_manifest.json` from the repository:
   ```javascript
   const manifestUrl = `https://raw.githubusercontent.com/uno-km/ameva-mcp-hub/main/mcp_manifest.json`;
   ```
2. **Dynamic Registration**:
   It maps the tools array directly into `this.dynamicTools` and prepends the `[HUB]` tag to the tool description so they are clearly marked in the MCP tool registry.
3. **SSE Connection**:
   It establishes a connection to `ntfy.sh` (or the channel defined in `ntfy_channel` in the manifest):
   ```javascript
   this.hubSse = new EventSource("https://ntfy.sh/uno-km-ameva-mcp-hub/sse");
   ```
4. **Instant Hot-Reload**:
   When a new commit is pushed, GitHub Actions triggers a POST request to `ntfy.sh`. The browser SSE listener immediately catches the message:
   ```
   Notification received: [verXYZ] "Updated mcp_manifest.json" by developer
   ```
   It waits 3 seconds (to let the raw GitHub CDN propagate) and calls `_autoLoadToolHub()` to hot-swap all tool definitions in memory, updating the status badge to `HUB UPDATED`.
