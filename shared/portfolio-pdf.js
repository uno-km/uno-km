/**
 * shared/portfolio-pdf.js
 * AMEVA Open-Source Foundation & Eunho Kim Official Portfolio PDF Generator
 * High-precision, zero-drift Korean typography & hyperlinked layout engine
 */

window.AmevaPortfolioPDF = {
  isGenerating: false,

  loadHtml2Pdf: function() {
    return new Promise((resolve, reject) => {
      if (window.html2pdf) {
        return resolve(window.html2pdf);
      }
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => resolve(window.html2pdf);
      script.onerror = (e) => reject(new Error('html2pdf 라이브러리 로드 실패: ' + e));
      document.head.appendChild(script);
    });
  },

  getLiveTableData: function() {
    const dataMap = {};
    const rows = document.querySelectorAll('#metrics-tbody tr');
    rows.forEach(row => {
      const nameElem = row.querySelector('strong');
      if (!nameElem) return;
      const name = nameElem.textContent.trim().toLowerCase();
      const verElem = row.querySelector('.cell-version') || row.querySelector('td:nth-child(3) code');
      const npmElem = row.querySelector('.cell-npm');
      const pypiElem = row.querySelector('.cell-pypi');
      const totalElem = row.querySelector('.cell-total');

      dataMap[name] = {
        version: verElem ? verElem.textContent.trim() : '-',
        npm: npmElem ? npmElem.textContent.trim() : '-',
        pypi: pypiElem ? pypiElem.textContent.trim() : '-',
        total: totalElem ? totalElem.textContent.trim() : '-'
      };
    });
    return dataMap;
  },

  generatePortfolioPDF: async function(buttonElem) {
    if (this.isGenerating) return;
    this.isGenerating = true;

    const originalText = buttonElem ? buttonElem.innerHTML : '';
    if (buttonElem) {
      buttonElem.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">⏳</span> PDF 생성 중...';
      buttonElem.style.pointerEvents = 'none';
      buttonElem.style.opacity = '0.8';
    }

    let wrapper = null;

    try {
      await this.loadHtml2Pdf();
      const liveData = this.getLiveTableData();
      const todayStr = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

      // Create modal wrapper for deterministic visible canvas capture
      wrapper = document.createElement('div');
      wrapper.id = 'pdf-render-wrapper';
      wrapper.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(15, 23, 42, 0.75);
        backdrop-filter: blur(4px);
        z-index: 999999;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        box-sizing: border-box;
      `;

      const notification = document.createElement('div');
      notification.style.cssText = `
        background: #004499;
        color: #ffffff;
        padding: 10px 24px;
        border-radius: 20px;
        font-weight: 700;
        font-size: 13px;
        margin-bottom: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
      `;
      notification.innerHTML = '📄 하이퍼링크가 포함된 상세 포트폴리오 PDF를 생성 중입니다... 잠시만 기다려주세요.';
      wrapper.appendChild(notification);

      const container = document.createElement('div');
      container.id = 'pdf-render-canvas';
      container.style.cssText = `
        width: 760px;
        background: #ffffff;
        color: #1e293b;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
        font-size: 11px;
        line-height: 1.5;
        box-sizing: border-box;
        box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      `;

      container.innerHTML = `
        <style>
          .pdf-page {
            box-sizing: border-box;
            width: 760px;
            min-height: 1040px;
            padding: 28px 32px;
            background: #ffffff;
            page-break-after: always;
            position: relative;
          }
          .pdf-page:last-child {
            page-break-after: avoid;
          }
          .pdf-header {
            border-bottom: 2.5px solid #004499;
            padding-bottom: 8px;
            margin-bottom: 12px;
          }
          .pdf-title {
            font-size: 20px;
            font-weight: 800;
            color: #004499;
            margin: 0 0 4px 0;
          }
          .pdf-profile-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            font-size: 11px;
            background: #f8fafc;
            padding: 10px 14px;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            margin-bottom: 12px;
          }
          .pdf-profile-item {
            margin: 1px 0;
          }
          .pdf-profile-item strong {
            color: #0f172a;
          }
          .pdf-h2 {
            font-size: 13.5px;
            font-weight: 700;
            color: #0f172a;
            border-bottom: 1.5px solid #cbd5e1;
            padding-bottom: 3px;
            margin: 12px 0 7px 0;
          }
          .pdf-table {
            width: 100%;
            border-collapse: collapse;
            margin: 6px 0;
            font-size: 9.8px;
          }
          .pdf-table th, .pdf-table td {
            border: 1px solid #cbd5e1;
            padding: 4px 6px;
            text-align: left;
          }
          .pdf-table th {
            background: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
          }
          .pdf-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 3.5px solid #004499;
            padding: 10px 12px;
            margin-bottom: 14px;
            border-radius: 3px;
            font-size: 10.5px;
            line-height: 1.52;
          }
          .pdf-card-title {
            font-size: 12.5px;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 4px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .pdf-tag {
            font-size: 9px;
            font-weight: 700;
            padding: 1.5px 5px;
            border-radius: 3px;
            background: #e0f2fe;
            color: #0369a1;
          }
          .pdf-code {
            font-family: monospace;
            background: #f1f5f9;
            padding: 1px 4px;
            border-radius: 3px;
            font-size: 10px;
            color: #0f172a;
          }
          .pdf-link {
            color: #004499;
            text-decoration: underline;
            font-weight: 600;
          }
          .pdf-link-bar {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 5px 8px;
            border-radius: 3px;
            margin-top: 6px;
            font-size: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .pdf-bench-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 5px 8px;
            border-radius: 3px;
            margin: 5px 0;
            font-size: 10px;
            color: #166534;
          }
          .pdf-footer {
            font-size: 9px;
            color: #94a3b8;
            text-align: right;
            margin-top: 14px;
            border-top: 1px solid #f1f5f9;
            padding-top: 4px;
          }
        </style>

        <!-- ==================== PAGE 1: 표지 및 프로젝트 요약표 ==================== -->
        <div class="pdf-page">
          <div class="pdf-header">
            <h1 class="pdf-title">엔지니어링 포트폴리오 (Engineering Portfolio)</h1>
            <div style="font-size:10.5px; color:#64748b;">AMEVA Open-Source Foundation (AOSF) 기술 생태계 &amp; 프로젝트 명세서 (기준일자: ${todayStr})</div>
          </div>

          <div class="pdf-profile-grid">
            <div class="pdf-profile-item"><strong>작성자:</strong> 김은호 (Eunho Kim)</div>
            <div class="pdf-profile-item"><strong>직무:</strong> 시스템 소프트웨어 엔지니어 / 풀스택 엔지니어</div>
            <div class="pdf-profile-item"><strong>이메일:</strong> <a href="mailto:uno.kim@kakao.com" class="pdf-link">uno.kim@kakao.com</a> / <a href="mailto:zhfldk014745@naver.com" class="pdf-link">zhfldk014745@naver.com</a></div>
            <div class="pdf-profile-item"><strong>공식 웹사이트:</strong> <a href="https://uno-km.vercel.app/" target="_blank" class="pdf-link">https://uno-km.vercel.app/</a></div>
            <div class="pdf-profile-item"><strong>기술 블로그:</strong> <a href="https://uno-kim.tistory.com/" target="_blank" class="pdf-link">https://uno-kim.tistory.com/</a></div>
            <div class="pdf-profile-item"><strong>GitHub:</strong> <a href="https://github.com/uno-km" target="_blank" class="pdf-link">https://github.com/uno-km</a></div>
            <div class="pdf-profile-item" style="grid-column: 1 / -1;"><strong>재단 포털:</strong> <a href="https://uno-km.vercel.app/foundation/" target="_blank" class="pdf-link">https://uno-km.vercel.app/foundation/</a></div>
          </div>

          <h2 class="pdf-h2">13대 프로젝트 개요 (Ecosystem Summary)</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 22%;">프로젝트 명</th>
                <th style="width: 36%;">핵심 사명 및 해결 과제</th>
                <th style="width: 20%;">분류 (Domain)</th>
                <th style="width: 11%;">배포 버전</th>
                <th style="width: 11%;">총 다운로드</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AMEVA Workstation</strong></td>
                <td>100% 로컬 WebGPU LLM, 대용량 문서 3초 맵리듀스 및 인앱 미디어 편집</td>
                <td>브라우저 온디바이스</td>
                <td>${(liveData['ameva workstation'] && liveData['ameva workstation'].version) || 'Live App'}</td>
                <td>Live App</td>
              </tr>
              <tr>
                <td><strong>Infra-Index Platform</strong></td>
                <td>글로벌 69개 클라우드 GPU/인프라 실시간 시세 집계 및 AI 반도체 시황 인텔리전스</td>
                <td>클라우드 인프라 웹</td>
                <td>v1.0.0</td>
                <td>Live App</td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td>호스트 컴파일러 없이 C++/Rust/Java 도구를 인메모리 실행하는 WASM MCP 허브</td>
                <td>개발자 도구 / SDK</td>
                <td>${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.0.0'}</td>
                <td>${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td>0-Data 프라이버시 봇 탐지 및 HMAC-SHA256 다계층 트래픽 거버넌스 SDK</td>
                <td>웹 보안 관측 SDK</td>
                <td>${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.1.1'}</td>
                <td>${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td>PyTorch 호환 문법의 브라우저 네이티브 WebGPU 딥러닝 Autograd 텐서 엔진</td>
                <td>브라우저 WebGPU</td>
                <td>${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.0'}</td>
                <td>${(liveData['ameva-forge'] && liveData['ameva-forge'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-AIChain</strong></td>
                <td>외부 의존성 0개(Zero-Dep) 50KB 초경량 모바일 LLM 체이닝 &amp; DAG 에이전트</td>
                <td>모바일 AI 에이전트</td>
                <td>${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.0'}</td>
                <td>${(liveData['termux-aichain'] && liveData['termux-aichain'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-BitNet</strong></td>
                <td>1.58-bit(3진수) 온디바이스 LLM을 ARM64 NEON SIMD로 가속하는 경량 엔진</td>
                <td>모바일 LLM 추론</td>
                <td>${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v1.0.7'}</td>
                <td>${(liveData['termux-bitnet'] && liveData['termux-bitnet'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-Playwright</strong></td>
                <td>Android Termux 비루팅 Chromium 브라우저 CDP 직접 제어 자동화 런타임</td>
                <td>모바일 웹 자동화</td>
                <td>${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.80.0'}</td>
                <td>${(liveData['termux-playwright'] && liveData['termux-playwright'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-Diffusion</strong></td>
                <td>Multi-SoC Vulkan GPU 가속 온디바이스 Stable Diffusion 이미지 생성 런타임</td>
                <td>모바일 생성형 AI</td>
                <td>${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || 'v1.3.1'}</td>
                <td>${(liveData['termux-diffusion'] && liveData['termux-diffusion'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-STT</strong></td>
                <td>Whisper.cpp + Vosk 결합 및 순수 파이썬 128차원 화자 분리 음성인식 엔진</td>
                <td>온디바이스 음성인식</td>
                <td>${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.0.0'}</td>
                <td>${(liveData['termux-stt'] && liveData['termux-stt'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-Train</strong></td>
                <td>Bionic C 기반 텐서 DAG 자동미분 및 모바일 온디바이스 LoRA 파인튜닝</td>
                <td>온디바이스 딥러닝 학습</td>
                <td>${(liveData['termux-train'] && liveData['termux-train'].version) || 'v1.0.0'}</td>
                <td>${(liveData['termux-train'] && liveData['termux-train'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-LlamaCpp</strong></td>
                <td>ARM64 전용 제로 컴파일 사전 빌드 GGUF 런타임 및 OpenAI 호환 서버</td>
                <td>GGUF LLM 서버</td>
                <td>${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.1.0'}</td>
                <td>${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].total) || '-'}</td>
              </tr>
              <tr>
                <td><strong>Termux-Vision</strong></td>
                <td>ARM64 NEON 비전 필터 및 SmolVLM/Qwen2-VL 온디바이스 VLM 멀티모달 추론</td>
                <td>컴퓨터 비전 &amp; VLM</td>
                <td>${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.0.0'}</td>
                <td>${(liveData['termux-vision'] && liveData['termux-vision'].total) || '-'}</td>
              </tr>
            </tbody>
          </table>
          <div class="pdf-footer">Page 1 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 2: 1.1 Workstation & 1.2 Infra-Index ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Web / Cloud Applications)</h2>

          <!-- 1.1 AMEVA Workstation -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.1 AMEVA Workstation (Web)</span>
              <span class="pdf-tag">브라우저 온디바이스 애플리케이션</span>
            </div>
            <div><strong>설명:</strong> 클라이언트 브라우저 환경에서 서버 통신 없이 사용자 PC의 WebGPU 자원만으로 거대 언어 모델(LLM) 추론 및 멀티미디어 작업을 수행하는 로컬 워크스테이션 웹 애플리케이션.</div>
            <div><strong>기술 스택:</strong> TypeScript, WebGPU, Web Audio, WebCodecs, HTML5 Canvas, OPFS (Origin Private File System)</div>
            <div><strong>배포 버전 / 상태:</strong> v0.8.19 (Live Web App) | <strong>배포일자:</strong> 2026-08-26</div>
            <div><strong>기존 문제:</strong> 대용량 문서 분석이나 AI 편집을 하려면 유료 클라우드 서비스를 써야 하고, 기밀 문서나 개인 데이터가 외부 서버로 전송되어 유출 위험이 있음.</div>
            <div><strong>해결 방식:</strong> 서버와의 데이터 송수신을 100% 차단하고, 브라우저의 WebGPU와 웹 워커를 활용해 AI 모델(Qwen2.5)과 미디어 엔진을 사용자 컴퓨터 내부에서 직접 구동함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>대용량 문서 3초 요약:</strong> 수백 페이지의 PDF/DOCX 파일을 화면에 끌어다 놓으면 웹 워커가 병렬로 읽어 3초 안에 챕터별 핵심 내용을 요약.</li>
              <li><strong>무손실 인앱 미디어 편집:</strong> 무거운 인코딩 없이 브라우저에서 바로 영상 구간을 자르고, 음성 파일에서 말이 없는 무음 구간을 자동으로 잘라내며, 1초 만에 인물 배경을 분리.</li>
              <li><strong>완전한 로컬 보안:</strong> 모든 작업 데이터가 브라우저 로컬 저장소(OPFS)에만 저장되므로 인터넷이 끊겨도 정상 작동하며 사내 기밀 유출 위험이 전혀 없음.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>🌐 <strong>웹 앱 실행:</strong> <a href="https://ameva-workstation-web-core.vercel.app/" target="_blank" class="pdf-link">https://ameva-workstation-web-core.vercel.app/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/AMEVA-Workstation-Web" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Workstation-Web</a></span>
            </div>
          </div>

          <!-- 1.2 Infra-Index Platform -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.2 Infra-Index Platform</span>
              <span class="pdf-tag">클라우드 인프라 시황 &amp; AI 반도체 인텔리전스</span>
            </div>
            <div><strong>설명:</strong> 글로벌 69개 클라우드 공급사의 실시간 GPU/CPU/스토리지 단가 집계, AI 반도체 시황 및 최신 연구 논문/뉴스 인텔리전스를 제공하는 클라우드 인프라 모니터링 플랫폼.</div>
            <div><strong>기술 스택:</strong> Next.js, TypeScript, Python, FastAPI, Serverless Edge, Real-Time Ingestion</div>
            <div><strong>배포 버전 / 상태:</strong> v1.0.0 (Live App) | <strong>배포일자:</strong> 2026-08-26</div>
            <div><strong>기존 문제:</strong> AWS, GCP, Azure, Lambda Labs, RunPod 등 수십 개 벤더의 GPU/인프라 가격이 파편화되어 있어 최적 견적 산출과 가격 변동 추적이 극도로 어려움.</div>
            <div><strong>해결 방식:</strong> 글로벌 69개 클라우드 공급사의 실시간 단가를 자동 수집·정규화하고 AI 반도체 시황 및 최신 연구 논문 인텔리전스를 실시간 시각화하여 제공.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>69개 클라우드 실시간 시세 비교:</strong> GPU(H100, A100, L40S 등), CPU, 스토리지 시간당 단가를 한눈에 비교하고 최저가 인프라 탐색.</li>
              <li><strong>AI 반도체 시황 인텔리전스:</strong> 최신 엔비디아, AMD 및 커스텀 ASIC 수급 동향과 연구 논문 트렌드 분석 리포트 제공.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>🌐 <strong>웹 앱:</strong> <a href="https://infraindex-platform-front.vercel.app/" target="_blank" class="pdf-link">https://infraindex-platform-front.vercel.app/</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/infra-index/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/infra-index/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/infraindex-platform" target="_blank" class="pdf-link">https://github.com/uno-km/infraindex-platform</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 2 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 3: 1.3 MCP-Hub & 1.4 Sentinel ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (SDK &amp; Developer Tooling)</h2>

          <!-- 1.3 AMEVA-MCP-Hub -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.3 AMEVA-MCP-Hub</span>
              <span class="pdf-tag">개발자 도구 / AI 에이전트 인프라</span>
            </div>
            <div><strong>설명:</strong> Claude Desktop, Cursor 등 AI 에이전트에 필요한 다양한 언어(C++, Rust, Java, Python 등)의 도구들을 PC에 컴파일러나 런타임 설치 없이 명령어 한 줄로 즉시 구동해 주는 통합 MCP 허브 &amp; SDK.</div>
            <div><strong>기술 스택:</strong> Node.js, TypeScript, WebAssembly (WASI), In-Memory Execution</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.0.0'} | <strong>배포일자:</strong> 2026-07-15 | <strong>총 다운로드:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> AI 에이전트에 새 도구를 붙이려면 언어마다 Python 가상환경, Rust 컴파일러, Java JDK 등을 PC에 일일이 깔아야 하고, 도구마다 백그라운드 프로세스가 떠서 메모리를 수백 MB씩 낭비함.</div>
            <div><strong>해결 방식:</strong> 이미 컴파일된 WebAssembly(WASM) 바이너리를 단일 Node.js 프로세스 메모리에 직접 띄워, 개발 환경 오염 없이 &lt;1ms 속도로 도구를 실행함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>설치 없는 1초 연동:</strong> <span class="pdf-code">npx ameva-mcp-hub</span> 실행 후 설정 파일에 포트만 적어주면 호스트 PC 환경 오염 없이 수십 가지 도구를 즉시 사용.</li>
              <li><strong>자연어 도구 자동 매칭:</strong> 사용자가 "이 파일 해시값 계산해줘"라고 질문하면 질문 의도에 딱 맞는 도구를 찾아내 자동 실행.</li>
              <li><strong>GitHub 저장소 실시간 도구 추가:</strong> GitHub 주소만 적어두면 서버 재부팅 없이 실시간으로 새 도구를 내려받아 즉시 활성화.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-mcp-hub</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/mcp/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/mcp/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/ameva-mcp-hub" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-mcp-hub</a></span>
            </div>
          </div>

          <!-- 1.4 AMEVA-Sentinel -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.4 AMEVA-Sentinel</span>
              <span class="pdf-tag">웹 보안 / 클라이언트 관측 SDK</span>
            </div>
            <div><strong>설명:</strong> 사용자의 키 입력이나 마우스 궤적 같은 민감한 개인정보를 일절 수집하지 않고, 브라우저 구조 신호만으로 봇과 정상 사용자를 식별하여 위험도 점수를 산출하는 클라이언트 보안 SDK.</div>
            <div><strong>기술 스택:</strong> TypeScript, WebCrypto API, Browser Internals, Node.js / Python Middleware</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.1.1'} | <strong>배포일자:</strong> 2026-08-26 | <strong>총 다운로드:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 기존 봇 탐지 솔루션은 사용자 키 입력이나 마우스 움직임을 서버로 전송해 개인정보 침해(GDPR 위반) 논란이 크고 사이트 속도를 저하시킴.</div>
            <div><strong>해결 방식:</strong> 사용자 입력값 수집은 0%로 배제하고, 브라우저의 구조적 이상 신호(자동화 툴 흔적, 확장 프로그램 변조 등)만 클라이언트 내부에서 즉시 계산해 0~100점 위험도를 산출함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스크립트 1줄로 봇 차단:</strong> 웹사이트에 SDK를 넣으면 매크로, 크롤러, 무단 스크래퍼를 0.001초 만에 감지.</li>
              <li><strong>개인정보 침해 0%:</strong> 키로깅이나 화면 추적이 전혀 없어 국내외 개인정보보호법(GDPR) 규제 리스크를 원천 해결.</li>
              <li><strong>위변조 불가 암호화 토큰:</strong> WebCrypto 기반 HMAC-SHA256으로 서명된 토큰을 발급하여 백엔드 서버에서 0.1ms 안에 유효성 검증.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/ameva-sentinel" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-sentinel</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/sentinel/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/ameva-sentinel" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-sentinel</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 3 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 4: 1.5 Forge & 1.6 AIChain ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (WebGPU Engine &amp; Mobile Agent)</h2>

          <!-- 1.5 AMEVA-Forge -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.5 AMEVA-Forge</span>
              <span class="pdf-tag">브라우저 딥러닝 텐서 엔진</span>
            </div>
            <div><strong>설명:</strong> 사용자 브라우저에서 PyTorch와 똑같은 문법으로 딥러닝 코드를 작성하면 브라우저 GPU(WebGPU)를 활용해 연산을 가속하는 텐서 엔진.</div>
            <div><strong>기술 스택:</strong> WebGPU (WGSL), JavaScript/TypeScript, Python (Pyodide), WASM</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.0'} | <strong>배포일자:</strong> 2026-08-10 | <strong>총 다운로드:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 웹에서 딥러닝 모델을 돌리려면 비싼 GPU 서버를 빌려야 해서 매달 서버 비용이 수백만 원씩 발생함.</div>
            <div><strong>해결 방식:</strong> 사용자의 웹 브라우저가 가진 GPU 자원(WebGPU)을 직접 끌어다 쓰는 연산 셰이더(WGSL)를 작성하여, 서버 비용 0원으로 클라이언트 PC에서 딥러닝 모델을 학습·추론함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>서버 비용 0원 AI 서비스:</strong> 서버가 모델을 계산하지 않고 사용자의 브라우저 GPU가 계산하므로 트래픽이 폭증해도 서버 비용이 0원.</li>
              <li><strong>PyTorch 개발자 친화 문법:</strong> <span class="pdf-code">torch.Tensor</span>, <span class="pdf-code">tensor.backward()</span> 등 파이토치와 똑같은 문법을 제공하여 기존 AI 개발자가 러닝 커브 없이 즉시 웹에 모델을 배포.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/ameva/" target="_blank" class="pdf-link">https://pypi.org/project/ameva/</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/forge/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Forge</a></span>
            </div>
          </div>

          <!-- 1.6 Termux-AIChain -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.6 Termux-AIChain</span>
              <span class="pdf-tag">모바일 온디바이스 에이전트 프레임워크</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 LangChain 같은 무거운 외부 라이브러리 없이, 외부 의존성 0개(Zero-Dependency)로 LLM 체이닝과 자율 에이전트 워크플로우를 구성하는 초경량 에이전트 프레임워크.</div>
            <div><strong>기술 스택:</strong> Python 3, TypeScript, Zero-Dependency, DAG Pipeline</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.0'} | <strong>배포일자:</strong> 2026-08-27 | <strong>총 다운로드:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> LangChain, LlamaIndex 같은 대형 프레임워크는 수백 개의 무거운 외부 패키지를 요구하여 안드로이드 Termux에서 패키지 충돌이 나고 메모리 부족으로 다운됨.</div>
            <div><strong>해결 방식:</strong> 외부 의존성 패키지 설치를 0개로 설계하여, 50KB 미만의 순수 코어만으로 순차 체인, 조건부 분기, 도구 호출을 완벽히 지원함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스마트폰 단독 AI 에이전트 워크플로우:</strong> Termux-BitNet 등 온디바이스 로컬 모델과 묶어 인터넷 없이 복잡한 다단계 질문-답변 및 분석 파이프라인 자동 실행.</li>
              <li><strong>의존성 충돌 0%:</strong> 무거운 pip 패키지 설치 없이 <span class="pdf-code">pip install termux-aichain</span> 단 1초 만에 설치 완료 및 100% 정상 작동.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-aichain/" target="_blank" class="pdf-link">https://pypi.org/project/termux-aichain/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-aichain" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-aichain</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/aichain/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/aichain/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-aichain" target="_blank" class="pdf-link">https://github.com/uno-km/termux-aichain</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 4 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 5: 1.7 BitNet & 1.8 Diffusion ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile On-Device AI: LLM &amp; Image)</h2>

          <!-- 1.7 Termux-BitNet -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.7 Termux-BitNet</span>
              <span class="pdf-tag">모바일 온디바이스 LLM 추론</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰(Termux) 환경에서 1.58비트(3진수 {-1,0,+1}) LLM을 스마트폰 전용 SIMD 명령어로 가속하여 빠르게 구동하는 경량 온디바이스 AI 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON Assembly, Python C-API, Node.js N-API</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v1.0.7'} | <strong>배포일자:</strong> 2026-08-27 | <strong>총 다운로드:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 스마트폰은 RAM 용량이 4~8GB 수준으로 작아, 일반 거대 언어 모델(LLM)을 올리면 메모리 부족(OOM)으로 앱이 튕기거나 속도가 초당 1글자 미만으로 느림.</div>
            <div><strong>해결 방식:</strong> 1.58비트 가중치 압축과 ARM64 NEON 전용 어셈블리 커널을 결합하여, 곱셈 연산 대신 덧셈 연산 위주로 처리하여 연산량과 메모리를 70% 이상 대폭 삭감함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스마트폰 단독 AI 챗봇:</strong> 인터넷 연결이나 데이터 소모 없이 스마트폰 자체 CPU만으로 초당 8~15토큰 속도의 오프라인 AI 대화 가능.</li>
              <li><strong>초저메모리 구동:</strong> 4GB RAM을 가진 보급형 스마트폰에서도 백그라운드 앱 종료 없이 안정적으로 작동.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-bitnet/" target="_blank" class="pdf-link">https://pypi.org/project/termux-bitnet/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-bitnet" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-bitnet</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/bitnet/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/bitnet/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-bitnet" target="_blank" class="pdf-link">https://github.com/uno-km/termux-bitnet</a></span>
            </div>
          </div>

          <!-- 1.8 Termux-Diffusion -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.8 Termux-Diffusion</span>
              <span class="pdf-tag">모바일 온디바이스 생성형 AI</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰(Termux) 환경에서 고가의 클라우드 GPU 없이 로컬 2~4GB 메모리 안에서 C++ GGML 텐서 엔진으로 Stable Diffusion AI 이미지를 생성하는 모바일 네이티브 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++17 GGML, Qualcomm Adreno &amp; ARM Mali Vulkan 1.3, ARM64 NEON &amp; DotProd SIMD, Bionic libc</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || 'v1.3.1'} | <strong>배포일자:</strong> 2026-08-27 | <strong>총 다운로드:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> Stable Diffusion은 VRAM 6GB 이상을 요구해 모바일 GPU에서 1장 생성 시 앱이 즉시 강제 종료됨.</div>
            <div><strong>해결 방식:</strong> VAE Tiling 기법과 C++ GGML 메모리 풀링을 통해 피크 메모리를 52% 절감하고, Multi-SoC Vulkan GPU 가속 파이프라인을 구축함.</div>
            <div class="pdf-bench-box">
              <strong>📱 실기기 실측 벤치마크 (20 Steps 512x512):</strong><br>
              • <strong>Galaxy S25</strong> (Snapdragon 8 Elite / Adreno 830): <strong>4.39초</strong> (Vulkan 가속, 651MB VRAM 점유)<br>
              • <strong>Galaxy S21</strong> (Exynos 2100 / Mali-G78): <strong>19.82초</strong> (Vulkan 가속, 1.84GB 점유)<br>
              • <strong>Galaxy A35</strong> (Exynos 1380 / 8 Cores): <strong>4.08초</strong> (CPU Signed DotProd 가속, 1.91GB 점유)
            </div>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-diffusion/" target="_blank" class="pdf-link">https://pypi.org/project/termux-diffusion/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-diffusion" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-diffusion</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/diffusion/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/diffusion/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-diffusion" target="_blank" class="pdf-link">https://github.com/uno-km/termux-diffusion</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 5 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 6: 1.9 STT & 1.10 Train ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile Audio &amp; On-Device Training)</h2>

          <!-- 1.9 Termux-STT -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.9 Termux-STT</span>
              <span class="pdf-tag">모바일 온디바이스 음성인식 &amp; 화자 분리</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 Whisper.cpp, Vosk 등 고성능 음성인식 엔진을 통합하고, 순수 파이썬으로 128차원 벡터 화자 분리를 스마트폰 안에서 100% 로컬로 판별하는 음성 처리 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++, Python, Whisper.cpp, Vosk, ONNX Runtime</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.0.0'} | <strong>배포일자:</strong> 2026-02-20 | <strong>총 다운로드:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 음성을 텍스트로 바꾸려면 구글이나 네이버 API를 써야 해서 비용이 들고, 회의 내용 등 민감한 음성 파일이 유출될 수 있음. 화자 분리 라이브러리는 무거워서 스마트폰 설치 불가.</div>
            <div><strong>해결 방식:</strong> 가벼운 Vosk와 Whisper.cpp 엔진을 안드로이드 ARM64에 맞게 컴파일해 탑재하고, 128차원 음성 특징 벡터 코사인 유사도 연산을 순수 파이썬으로 가볍게 구현함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>회의록 자동 작성 &amp; 화자 구분:</strong> 회의 녹음 파일을 넣으면 "참여자 1: ...", "참여자 2: ..." 형태로 말한 사람을 구분해 텍스트 문서로 출력.</li>
              <li><strong>음성 데이터 100% 로컬 보안:</strong> 스마트폰 마이크로 들어온 음성이 외부 서버로 나가지 않아 완벽한 보안 환경 제공.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-stt/" target="_blank" class="pdf-link">https://pypi.org/project/termux-stt/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-stt" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-stt</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/stt/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/stt/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-stt" target="_blank" class="pdf-link">https://github.com/uno-km/termux-stt</a></span>
            </div>
          </div>

          <!-- 1.10 Termux-Train -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.10 Termux-Train</span>
              <span class="pdf-tag">온디바이스 딥러닝 학습 엔진</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰 CPU 자원만으로 인공신경망의 미분 계산과 LoRA 파인튜닝을 수행할 수 있는 C 언어 기반 딥러닝 학습 엔진.</div>
            <div><strong>기술 스택:</strong> C, SafeTensors, Python C-API</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-train'] && liveData['termux-train'].version) || 'v1.0.0'} | <strong>배포일자:</strong> 2026-01-10 | <strong>총 다운로드:</strong> ${(liveData['termux-train'] && liveData['termux-train'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> PyTorch나 TensorFlow 같은 프레임워크는 수 기가바이트 크기라 스마트폰에 설치조차 불가능하고, 스마트폰에서 모델을 직접 학습시키는 것은 불가능하다고 여겨짐.</div>
            <div><strong>해결 방식:</strong> 무거운 프레임워크를 걷어내고 순수 C 언어로 역전파(Backpropagation)와 자동미분(Autograd) 엔진을 직접 코딩하여, 단 몇 MB 크기의 가벼운 라이브러리로 완성함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스마트폰 단독 AI 모델 학습 (LoRA):</strong> PC나 GPU 서버 없이 스마트폰 안에서 사용자의 개인 데이터를 모델에 추가 학습시켜 나만의 맞춤형 AI 모델 제작.</li>
              <li><strong>메모리 누수 0%의 안정성:</strong> C 언어 수준에서 메모리 풀링을 관리하여 스마트폰이 과열되거나 멈추지 않고 밤새 안정적으로 학습 수행.</li>
            </ul>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-train/" target="_blank" class="pdf-link">https://pypi.org/project/termux-train/</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/train/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/train/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-train" target="_blank" class="pdf-link">https://github.com/uno-km/termux-train</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 6 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 7: 1.11 LlamaCpp, 1.12 Vision, 1.13 Playwright ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile Runtime, Vision &amp; Automation)</h2>

          <!-- 1.11 Termux-LlamaCpp -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.11 Termux-LlamaCpp</span>
              <span class="pdf-tag">모바일 온디바이스 GGUF LLM 런타임 &amp; OpenAI 서버</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux ARM64 전용으로 사전 빌드된 제로 컴파일 GGUF LLM 런타임, 모델 매니저 및 OpenAI 규격 호환 REST/SSE 서버 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON &amp; DotProd SIMD, GGUF Runtime, POSIX Sockets</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.1.0'} | <strong>배포일자:</strong> 2026-08-31 | <strong>총 다운로드:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> llama.cpp를 모바일에서 빌드하려면 CMake/NDK 컴파일 툴체인 설정이 복잡하고, 타 앱과의 호환 인터페이스 부재.</div>
            <div><strong>해결 방식:</strong> ARM64 NEON 최적화 바이너리를 휠 패키지에 내장하여 제로 컴파일 1-Touch 실행과 <span class="pdf-code">localhost:8080/v1/chat/completions</span> OpenAI 호환 서버를 자동 구동.</div>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-llamacpp/" target="_blank" class="pdf-link">https://pypi.org/project/termux-llamacpp/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-llamacpp" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-llamacpp</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/llamacpp/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/llamacpp/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-llamacpp" target="_blank" class="pdf-link">https://github.com/uno-km/termux-llamacpp</a></span>
            </div>
          </div>

          <!-- 1.12 Termux-Vision -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.12 Termux-Vision</span>
              <span class="pdf-tag">모바일 온디바이스 컴퓨터 비전 &amp; VLM 엔진</span>
            </div>
            <div><strong>설명:</strong> 외부 무거운 의존성 없이 순수 ARM64 NEON 비전 커널과 Vulkan GPU 가속을 통해 온디바이스 컴퓨터 비전 및 VLM 멀티모달 추론을 수행하는 초경량 엔진.</div>
            <div><strong>기술 스택:</strong> Python 3, JavaScript/TypeScript, ARM64 NEON SIMD, Vulkan 1.3 GPU Engine</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.0.0'} | <strong>배포일자:</strong> 2026-08-27 | <strong>총 다운로드:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> OpenCV, torchvision 같은 패키지는 모바일 환경에서 수백 MB 용량과 복잡한 빌드 의존성 발생.</div>
            <div><strong>해결 방식:</strong> 5단계 Canny 엣지 검출, 얼굴 인식 및 SmolVLM/Qwen2-VL 온디바이스 VLM 멀티모달 질의응답을 순수 경량 커널로 통합 구현.</div>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-vision/" target="_blank" class="pdf-link">https://pypi.org/project/termux-vision/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-vision" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-vision</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/vision/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/vision/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-vision" target="_blank" class="pdf-link">https://github.com/uno-km/termux-vision</a></span>
            </div>
          </div>

          <!-- 1.13 Termux-Playwright -->
          <div class="pdf-card" style="margin-bottom:0;">
            <div class="pdf-card-title">
              <span>1.13 Termux-Playwright</span>
              <span class="pdf-tag">모바일 웹 자동화 / 크롤링</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 루팅(Rooting) 권한 없이 정품 크로미움 브라우저를 직접 제어하는 모바일 브라우저 자동화 런타임.</div>
            <div><strong>기술 스택:</strong> Android Bionic libc, Chrome DevTools Protocol (CDP), Node.js, Python | <strong>배포 버전:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.80.0'} | <strong>총 다운로드:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].total) || '-'}</div>
            <div><strong>핵심 기능:</strong> 스마트폰 비루팅 무인 자동화, 5W 초저전력 24시간 무중단 크롤링 및 웹 테스트 자동화.</div>
            <div class="pdf-link-bar">
              <span>📦 <strong>PyPI:</strong> <a href="https://pypi.org/project/termux-playwright/" target="_blank" class="pdf-link">https://pypi.org/project/termux-playwright/</a></span>
              <span>📦 <strong>npm:</strong> <a href="https://www.npmjs.com/package/termux-playwright" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-playwright</a></span>
              <span>📘 <strong>공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/playwright/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/playwright/</a></span>
              <span>🐙 <strong>GitHub:</strong> <a href="https://github.com/uno-km/termux-playwright" target="_blank" class="pdf-link">https://github.com/uno-km/termux-playwright</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 7 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 8: 종합 요약 및 전체 링크 색인 ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 공통 기술 스택 및 카테고리 요약</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 24%;">카테고리</th>
                <th style="width: 36%;">해당 프로젝트</th>
                <th style="width: 40%;">핵심 기술 스택 및 공통 특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>웹 &amp; WebGPU</strong></td>
                <td>AMEVA Workstation, AMEVA-Forge, AMEVA-Sentinel</td>
                <td>TypeScript, WebGPU (WGSL), WebAssembly, WebCrypto, OPFS. 서버 전송 없이 브라우저 로컬 하드웨어 가속 및 완전한 데이터 격리.</td>
              </tr>
              <tr>
                <td><strong>클라우드 &amp; 에이전트 도구</strong></td>
                <td>Infra-Index Platform, AMEVA-MCP-Hub, Termux-AIChain</td>
                <td>Node.js, TypeScript, Python 3, WASI WebAssembly, Zero-Dependency. 호스트 개발 환경 오염 없는 인메모리 실행 및 경량 에이전트 파이프라인.</td>
              </tr>
              <tr>
                <td><strong>모바일 온디바이스 AI (Termux)</strong></td>
                <td>Termux-BitNet, Termux-Diffusion, Termux-STT, Termux-Train, Termux-LlamaCpp, Termux-Vision</td>
                <td>C++17, C, ARM64 NEON &amp; DotProd Assembly, Vulkan 1.3, Bionic libc, GGML, SafeTensors. 클라우드 비용 0원, 스마트폰 단독 고성능 AI 학습/추론.</td>
              </tr>
              <tr>
                <td><strong>모바일 시스템 자동화</strong></td>
                <td>Termux-Playwright</td>
                <td>Chrome DevTools Protocol (CDP), Android Bionic libc. 비루팅 모바일 5W 초저전력 24시간 무중단 웹 자동화.</td>
              </tr>
            </tbody>
          </table>

          <h2 class="pdf-h2">3. 패키지 레지스트리 및 공식 문서 링크 색인</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 25%;">프로젝트</th>
                <th style="width: 25%;">패키지 설치 (PyPI / npm)</th>
                <th style="width: 25%;">공식 기술 문서 (Docs)</th>
                <th style="width: 25%;">소스코드 저장소 (GitHub)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AMEVA Workstation</strong></td>
                <td><a href="https://ameva-workstation-web-core.vercel.app/" target="_blank" class="pdf-link">Web App 실행</a></td>
                <td><a href="https://uno-km.vercel.app/" target="_blank" class="pdf-link">Founder CV</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Workstation-Web" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Infra-Index Platform</strong></td>
                <td><a href="https://infraindex-platform-front.vercel.app/" target="_blank" class="pdf-link">Web App 실행</a></td>
                <td><a href="https://uno-km.vercel.app/lib/infra-index/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/infraindex-platform" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td><a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">npm: ameva-mcp-hub</a></td>
                <td><a href="https://uno-km.vercel.app/lib/mcp/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-mcp-hub" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td><a href="https://www.npmjs.com/package/ameva-sentinel" target="_blank" class="pdf-link">npm: ameva-sentinel</a></td>
                <td><a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-sentinel" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td><a href="https://pypi.org/project/ameva/" target="_blank" class="pdf-link">PyPI: ameva</a></td>
                <td><a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-AIChain</strong></td>
                <td><a href="https://pypi.org/project/termux-aichain/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-aichain" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/aichain/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-aichain" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-BitNet</strong></td>
                <td><a href="https://pypi.org/project/termux-bitnet/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-bitnet" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/bitnet/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-bitnet" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-Playwright</strong></td>
                <td><a href="https://pypi.org/project/termux-playwright/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-playwright" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/playwright/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-playwright" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-Diffusion</strong></td>
                <td><a href="https://pypi.org/project/termux-diffusion/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-diffusion" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/diffusion/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-diffusion" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-STT</strong></td>
                <td><a href="https://pypi.org/project/termux-stt/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-stt" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/stt/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-stt" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-Train</strong></td>
                <td><a href="https://pypi.org/project/termux-train/" target="_blank" class="pdf-link">PyPI: termux-train</a></td>
                <td><a href="https://uno-km.vercel.app/lib/train/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-train" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-LlamaCpp</strong></td>
                <td><a href="https://pypi.org/project/termux-llamacpp/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-llamacpp" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/llamacpp/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-llamacpp" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-Vision</strong></td>
                <td><a href="https://pypi.org/project/termux-vision/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-vision" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/vision/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-vision" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 14px; text-align: center; font-size: 9.5px; color: #64748b;">
            © 2026 Eunho Kim (@uno-km). AMEVA Open-Source Foundation (AOSF). All Rights Reserved.
          </div>
          <div class="pdf-footer">Page 8 / 8 • 김은호 엔지니어링 포트폴리오</div>
        </div>
      `;

      wrapper.appendChild(container);
      document.body.appendChild(wrapper);

      // Wait for layout calculation and font rendering
      await new Promise(resolve => setTimeout(resolve, 250));

      const opt = {
        margin: [6, 6, 6, 6],
        filename: '김은호_엔지니어링_포트폴리오.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        enableLinks: true,
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollY: 0,
          scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      await window.html2pdf().set(opt).from(container).save();

    } catch (err) {
      console.error('Portfolio PDF generation error:', err);
      alert('PDF 생성 중 오류가 발생했습니다: ' + err.message);
    } finally {
      if (wrapper && wrapper.parentNode) {
        wrapper.parentNode.removeChild(wrapper);
      }
      this.isGenerating = false;
      if (buttonElem) {
        buttonElem.innerHTML = originalText;
        buttonElem.style.pointerEvents = '';
        buttonElem.style.opacity = '1';
      }
    }
  }
};
