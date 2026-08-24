# AMEVA OS - LLM & AI 비서 연동 가이드 (Integration Guide)

이 문서는 Cursor, Cline, Roo Code 등 AI 코딩 에이전트와 llama.cpp, Ollama 등 로컬 LLM 환경을 AMEVA OS의 브라우저 기반 WASM 가상 커널에 연동하여 안전하고 이식성 높은 개발 환경을 구성하는 방법을 안내합니다.

---

## 1. 개요 및 동작 구조

사용자가 AI 어시스턴트에게 코딩 테스트 및 명령어 실행을 요청하면, 명령어가 호스트 컴퓨터의 실제 파일 시스템이 아니라 **AMEVA OS 브라우저 탭(WASM Sandbox)** 내부에서 연산되어 결과를 전달합니다.

```
┌──────────────────────────┐               ┌──────────────────────────┐
│  AI Client (Cursor 등)   │ ──(Stdio)──>  │  mcp_proxy.js (Port11553)│
└──────────────────────────┘               └─────────────┬────────────┘
                                                         │ (WebSocket)
                                                         ▼
┌──────────────────────────┐               ┌──────────────────────────┐
│  llama.cpp / curl script │ ──(HTTP)───>  │  AMEVA OS Browser client │
└──────────────────────────┘               │  (Monaco + Pyodide + C)  │
                                           └──────────────────────────┘
```

---

## 2. AI 코딩 비서 연동 (MCP 설정)

Cursor, Cline, Roo Code 등 MCP(Model Context Protocol)를 지원하는 플러그인에 아래와 같이 `mcp_proxy.js`를 등록하면 즉시 AI 에이전트가 가상 샌드박스 자원을 제어할 수 있게 됩니다.

### A. Cursor 연동
1. Cursor 설정 (`Ctrl + ,` 혹은 우측 상단 톱니바퀴) 진입
2. **Features** -> **MCP** 메뉴 클릭
3. **+ Add New MCP Server** 버튼 클릭
   * **Name**: `ameva-os`
   * **Type**: `stdio`
   * **Command**: `node "C:/Users/ATSAdmin/Documents/UNO/small_prj/MCP-Wasm-Toolkit/mcp_proxy.js"`
4. Save 후 활성화 상태를 확인합니다.

### B. Cline / Roo Code 연동
설정 파일(`%APPDATA%/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`)에 아래 설정을 직접 추가합니다:

```json
{
  "mcpServers": {
    "ameva-os": {
      "command": "node",
      "args": [
        "C:/Users/ATSAdmin/Documents/UNO/small_prj/MCP-Wasm-Toolkit/mcp_proxy.js"
      ],
      "disabled": false
    }
  }
}
```

---

## 3. 로컬 LLM (llama.cpp / Ollama) 및 커스텀 스크립트 연동

llama.cpp 또는 Ollama의 에이전트 스크립트가 실행 결과를 테스트하고자 할 때, 로컬 호스트 컴퓨터의 쉘 대신 **프록시 HTTP Exec API**를 통해 브라우저 커널로 직접 명령을 쏠 수 있습니다.

### HTTP Exec API 명세
* **URL**: `POST http://localhost:11553/exec`
* **Content-Type**: `application/json`
* **요청 포맷 (JSON)**:
  ```json
  {
    "command": "실행할_명령어"
  }
  ```
* **응답 포맷 (JSON)**:
  ```json
  {
    "stdout": "명령어 표준 출력 결과",
    "stderr": "명령어 표준 에러 결과",
    "exitCode": 0
  }
  ```

### 예제: curl로 파이썬 스크립트 실행하기
로컬 터미널에서 다음 curl 명령을 던지면 브라우저의 Pyodide WASM 인터프리터가 코드를 수행하고 그 결과값을 가져옵니다.
```bash
curl -X POST http://localhost:11553/exec \
  -H "Content-Type: application/json" \
  -d '{"command": "python -c \"import math; print(math.factorial(5))\""}'
```

**출력 결과:**
```json
{"stdout":"120\n","stderr":"","exitCode":0}
```

---

## 4. 로컬 연동 테스트 확인하기

1. 터미널을 열고 프록시 서버를 가동합니다:
   ```bash
   node mcp_proxy.js
   ```
2. 웹 브라우저에서 `frontend/ameva_os.html` 파일을 엽니다.
   * 브라우저 화면의 Status Bar에 **Link: CONNECTED** (녹색 불) 표시가 켜지면 준비가 완료된 것입니다.
3. 동봉된 테스트 스크립트를 실행하여 통합 연동 상태를 확인합니다:
   ```bash
   python test_api.py
   ```
   * 이 스크립트는 포트 11553으로 파이썬 코드를 던지고, 브라우저가 이를 받아 실행한 뒤 생성된 VFS 파일을 로컬 파일 손상 없이 확인하는 과정을 시뮬레이션합니다.
