/**
 * shared/portfolio-pdf.js
 * AMEVA Open-Source Foundation & Eunho Kim Official Portfolio PDF Generator
 * High-precision, zero-drift Korean typography & layout engine via html2pdf.js
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

      // Create modal wrapper for deterministic 100% visible canvas capture
      wrapper = document.createElement('div');
      wrapper.id = 'pdf-render-wrapper';
      wrapper.style.cssText = `
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(15, 23, 42, 0.7);
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
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
      `;
      notification.innerHTML = '📄 포트폴리오 PDF를 렌더링하고 다운로드합니다... 잠시만 기다려주세요.';
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
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
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
            padding-bottom: 10px;
            margin-bottom: 14px;
          }
          .pdf-title {
            font-size: 21px;
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
            margin-bottom: 14px;
          }
          .pdf-profile-item {
            margin: 1px 0;
          }
          .pdf-profile-item strong {
            color: #0f172a;
          }
          .pdf-h2 {
            font-size: 14px;
            font-weight: 700;
            color: #0f172a;
            border-bottom: 1.5px solid #cbd5e1;
            padding-bottom: 3px;
            margin: 14px 0 8px 0;
          }
          .pdf-table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0;
            font-size: 10px;
          }
          .pdf-table th, .pdf-table td {
            border: 1px solid #cbd5e1;
            padding: 4.5px 6px;
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
            padding: 8px 11px;
            margin-bottom: 9px;
            border-radius: 3px;
            font-size: 10.5px;
          }
          .pdf-card-title {
            font-size: 12px;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 3px 0;
          }
          .pdf-tag {
            display: inline-block;
            font-size: 9px;
            font-weight: 700;
            padding: 1px 4px;
            border-radius: 3px;
            background: #e0f2fe;
            color: #0369a1;
            margin-left: 4px;
          }
          .pdf-code {
            font-family: monospace;
            background: #f1f5f9;
            padding: 1px 4px;
            border-radius: 3px;
            font-size: 10px;
            color: #0f172a;
          }
          .pdf-footer {
            font-size: 9px;
            color: #94a3b8;
            text-align: right;
            margin-top: 12px;
            border-top: 1px solid #f1f5f9;
            padding-top: 4px;
          }
        </style>

        <!-- PAGE 1: 표지 및 프로젝트 개요 -->
        <div class="pdf-page">
          <div class="pdf-header">
            <h1 class="pdf-title">엔지니어링 포트폴리오 (Engineering Portfolio)</h1>
            <div style="font-size:10.5px; color:#64748b;">AMEVA Open-Source Foundation (AOSF) 기술 생태계 &amp; 프로젝트 명세서 (기준일자: ${todayStr})</div>
          </div>

          <div class="pdf-profile-grid">
            <div class="pdf-profile-item"><strong>작성자:</strong> 김은호 (Eunho Kim)</div>
            <div class="pdf-profile-item"><strong>직무:</strong> 시스템 소프트웨어 엔지니어 / 풀스택 엔지니어</div>
            <div class="pdf-profile-item"><strong>이메일:</strong> zhfldk014745@naver.com / uno.kim@kakao.com</div>
            <div class="pdf-profile-item"><strong>공식 웹사이트:</strong> https://uno-km.vercel.app/</div>
            <div class="pdf-profile-item"><strong>기술 블로그:</strong> https://uno-kim.tistory.com/</div>
            <div class="pdf-profile-item"><strong>GitHub:</strong> https://github.com/uno-km</div>
            <div class="pdf-profile-item" style="grid-column: 1 / -1;"><strong>재단 포털:</strong> https://uno-km.vercel.app/foundation/</div>
          </div>

          <h2 class="pdf-h2">프로젝트 개요 (Ecosystem Summary)</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 22%;">프로젝트 명</th>
                <th style="width: 38%;">핵심 사명 및 해결 과제</th>
                <th style="width: 18%;">분류 (Domain)</th>
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
          <div class="pdf-footer">Page 1 / 4 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- PAGE 2: 웹/클라우드 & SDK 핵심 상세 명세 -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Web / Cloud &amp; SDK)</h2>

          <div class="pdf-card">
            <div class="pdf-card-title">1.1 AMEVA Workstation (Web) <span class="pdf-tag">WebGPU App</span></div>
            <div><strong>개요:</strong> 클라이언트 브라우저 환경에서 서버 통신 없이 사용자 PC의 WebGPU 자원만으로 거대 언어 모델(Qwen2.5) 추론 및 대용량 문서 맵리듀스 요약, 인앱 비디오 스튜디오를 구동하는 로컬 워크스테이션 웹 애플리케이션.</div>
            <div><strong>기술 스택:</strong> TypeScript, WebGPU, Web Audio, WebCodecs, HTML5 Canvas, OPFS</div>
            <div><strong>배포 버전:</strong> v0.8.19 (Live Web App) | <strong>배포 링크:</strong> https://ameva-workstation-web-core.vercel.app/</div>
            <div><strong>문제 해결:</strong> 서버와의 데이터 송수신을 100% 차단하고 WebGPU와 웹 워커를 통해 대용량 PDF/DOCX를 3초 안에 요약하며 사내 기밀 유출 위험을 원천 해소.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">1.2 Infra-Index Platform <span class="pdf-tag">Cloud Intelligence</span></div>
            <div><strong>개요:</strong> 글로벌 69개 클라우드 공급사의 실시간 GPU/CPU/스토리지 단가 집계, AI 반도체 시황 및 최신 연구 논문/뉴스 인텔리전스를 제공하는 클라우드 인프라 모니터링 플랫폼.</div>
            <div><strong>기술 스택:</strong> Next.js, TypeScript, Python, FastAPI, Serverless Edge</div>
            <div><strong>배포 버전:</strong> v1.0.0 | <strong>웹 앱:</strong> https://infraindex-platform-front.vercel.app/ | <strong>문서:</strong> /lib/infra-index/</div>
            <div><strong>핵심 기능:</strong> 69개 클라우드 실시간 시세 비교, AI 반도체 시황 인텔리전스, 아키텍처별 최적 비용 견적 산출.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">1.3 AMEVA-MCP-Hub <span class="pdf-tag">WASM MCP Hub</span></div>
            <div><strong>개요:</strong> 다양한 언어(C++, Rust, Java, Python 등)의 도구들을 PC에 컴파일러 설치 없이 명령어 한 줄로 즉시 구동해 주는 통합 MCP 허브 &amp; SDK.</div>
            <div><strong>기술 스택:</strong> Node.js, TypeScript, WebAssembly (WASI), In-Memory Execution</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.0.0'} | <strong>설치:</strong> <span class="pdf-code">npx ameva-mcp-hub</span></div>
            <div><strong>핵심 기능:</strong> 설치 없는 1초 연동, 자연어 도구 자동 매칭, GitHub 다중 리포지토리 실시간 구독.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">1.4 AMEVA-Sentinel <span class="pdf-tag">Security SDK</span></div>
            <div><strong>개요:</strong> 마우스 좌표 수집 0%, 키로깅 0%의 0-Data 프라이버시 봇 탐지 및 HMAC-SHA256 기반 다계층 트래픽 거버넌스 보안 관측 SDK.</div>
            <div><strong>기술 스택:</strong> TypeScript, WebCrypto API, Browser Internals, Node.js / Python Middleware</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.1.1'} | <strong>설치:</strong> <span class="pdf-code">npm install ameva-sentinel</span></div>
            <div><strong>핵심 기능:</strong> 스크립트 1줄 봇 감지, GDPR 규제 리스크 해결, 멀티 CDN 엣지 어댑터(Cloudflare, Vercel, Fastly).</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">1.5 AMEVA-Forge <span class="pdf-tag">WebGPU Autograd</span></div>
            <div><strong>개요:</strong> PyTorch 문법 그대로 브라우저 WebGPU 셰이더로 변환하여 사용자 컴퓨터 GPU에서 딥러닝 연산을 가속하는 텐서 엔진.</div>
            <div><strong>기술 스택:</strong> WebGPU (WGSL), JavaScript/TypeScript, Python (Pyodide), WASM</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.0'} | <strong>설치:</strong> <span class="pdf-code">pip install ameva</span></div>
            <div><strong>핵심 기능:</strong> 서버 비용 0원 클라이언트 오프로딩, PyTorch 친화 API (torch.Tensor, backward()).</div>
          </div>

          <div class="pdf-footer">Page 2 / 4 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- PAGE 3: 모바일 온디바이스 AI (Termux) 상세 명세 -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 프로젝트 상세 명세 (Mobile On-Device AI / Termux)</h2>

          <div class="pdf-card">
            <div class="pdf-card-title">2.1 Termux-BitNet <span class="pdf-tag">1.58-bit LLM</span></div>
            <div><strong>개요:</strong> 안드로이드 스마트폰(Termux) 환경에서 1.58비트(3진수 {-1,0,+1}) LLM을 ARM64 NEON SIMD 명령어로 가속하여 빠르게 구동하는 경량 온디바이스 AI 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON Assembly, Python C-API, Node.js N-API</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v1.0.7'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-bitnet</span></div>
            <div><strong>핵심 지표:</strong> 메모리 점유율 70% 이상 삭감 (4GB RAM 보급형 단말기에서 온디바이스 AI 구동).</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">2.2 Termux-Diffusion <span class="pdf-tag">On-Device SD</span></div>
            <div><strong>개요:</strong> 스마트폰 로컬 2~4GB 메모리 안에서 C++ GGML 텐서 엔진과 Multi-SoC Vulkan GPU 가속으로 Stable Diffusion 이미지를 생성하는 프레임워크.</div>
            <div><strong>실기기 실측치:</strong> Galaxy S25(Vulkan 4.39초 / 651MB VRAM), S21(Vulkan 19.82초), A35(CPU 4.08초).</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || 'v1.3.1'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-diffusion</span></div>
            <div><strong>핵심 기능:</strong> VAE Tiling 메모리 52% 절감, 삼성 갤러리 자동 동기화, 오프라인 1-Click 생성.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">2.3 Termux-AIChain <span class="pdf-tag">Zero-Dep Agent</span></div>
            <div><strong>개요:</strong> 외부 의존성 0개(Zero-Dependency)로 LLM 체이닝과 자율 에이전트 DAG 파이프라인을 실행하는 50KB 초경량 에이전트 프레임워크.</div>
            <div><strong>기술 스택:</strong> Python 3, TypeScript, Zero-Dependency Core (<50KB)</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-aichain</span></div>
            <div><strong>핵심 기능:</strong> 스마트폰 단독 자율 에이전트 워크플로우, pip 의존성 충돌 0%.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">2.4 Termux-Vision <span class="pdf-tag">CV &amp; VLM</span></div>
            <div><strong>개요:</strong> OpenCV/PyTorch 의존성 없이 순수 ARM64 NEON 비전 커널과 Vulkan GPU 가속으로 SmolVLM/Qwen2-VL 온디바이스 VLM 멀티모달 추론을 수행하는 엔진.</div>
            <div><strong>기술 스택:</strong> Python 3, JS, ARM64 NEON SIMD, Vulkan 1.3 GPU Engine</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.0.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-vision</span></div>
            <div><strong>핵심 기능:</strong> 5단계 Canny 엣지/얼굴 인식, VQA 시각 질의응답, termux-train 1:1 자동미분 연동.</div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">2.5 Termux-LlamaCpp <span class="pdf-tag">GGUF Server</span></div>
            <div><strong>개요:</strong> 안드로이드 ARM64 전용 제로 컴파일 사전 빌드 GGUF LLM 런타임 및 OpenAI 규격 호환 REST/SSE 서버 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON &amp; DotProd SIMD, GGUF Runtime, POSIX Sockets</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.1.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-llamacpp</span></div>
            <div><strong>핵심 기능:</strong> 제로 컴파일 1-Touch 실행, 모바일 로컬 <span class="pdf-code">localhost:8080</span> OpenAI 호환 엔드포인트 제공.</div>
          </div>

          <div class="pdf-footer">Page 3 / 4 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- PAGE 4: 시스템 자동화, 훈련, 종합 레퍼런스 -->
        <div class="pdf-page">
          <h2 class="pdf-h2">3. 시스템 자동화 및 온디바이스 훈련</h2>

          <div class="pdf-card">
            <div class="pdf-card-title">3.1 Termux-Playwright <span class="pdf-tag">Mobile Automation</span></div>
            <div><strong>개요:</strong> 안드로이드 Termux 환경에서 루팅(Rooting) 권한 없이 정품 Chromium 브라우저를 CDP 소켓으로 직접 제어하는 5W 초저전력 자동화 런타임.</div>
            <div><strong>기술 스택:</strong> Android Bionic libc, Chrome DevTools Protocol (CDP), Node.js, Python</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.80.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-playwright</span></div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">3.2 Termux-STT <span class="pdf-tag">Voice STT</span></div>
            <div><strong>개요:</strong> Whisper.cpp, Vosk를 결합하고 순수 파이썬 128차원 화자 분리(Diarization)를 스마트폰 안에서 100% 로컬로 수행하는 오디오 엔진.</div>
            <div><strong>기술 스택:</strong> C++, Python, Whisper.cpp, Vosk, ONNX Runtime</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.0.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-stt</span></div>
          </div>

          <div class="pdf-card">
            <div class="pdf-card-title">3.3 Termux-Train <span class="pdf-tag">LoRA Engine</span></div>
            <div><strong>개요:</strong> 스마트폰 CPU만으로 인공신경망의 역전파(DAG Autograd) 계산과 SafeTensors LoRA 파인튜닝을 구동하는 C 언어 기반 딥러닝 학습 엔진.</div>
            <div><strong>기술 스택:</strong> C, SafeTensors, Python C-API</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-train'] && liveData['termux-train'].version) || 'v1.0.0'} | <strong>설치:</strong> <span class="pdf-code">pip install termux-train</span></div>
          </div>

          <h2 class="pdf-h2">4. 공통 기술 스택 및 패키지 요약</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 25%;">분류</th>
                <th style="width: 35%;">해당 프로젝트</th>
                <th style="width: 40%;">핵심 기술 특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>브라우저 &amp; WebGPU</strong></td>
                <td>Workstation, Forge, Sentinel</td>
                <td>서버 전송 없이 브라우저 로컬 WebGPU 가속 및 0-Data 보안 격리</td>
              </tr>
              <tr>
                <td><strong>클라우드 &amp; 에이전트 도구</strong></td>
                <td>Infra-Index, MCP-Hub, AIChain</td>
                <td>실시간 단가 집계, 호스트 오염 없는 인메모리 도구 실행 및 경량 에이전트</td>
              </tr>
              <tr>
                <td><strong>모바일 온디바이스 AI</strong></td>
                <td>BitNet, Diffusion, STT, Train, LlamaCpp, Vision</td>
                <td>안드로이드 Bionic 네이티브 C/C++ 커널, ARM64 NEON &amp; Vulkan 하드웨어 가속</td>
              </tr>
              <tr>
                <td><strong>모바일 시스템 자동화</strong></td>
                <td>Playwright</td>
                <td>5W 초저전력 모바일 단말기 기반 무인 Chromium 자동화 및 데이터 수집</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 18px; text-align: center; font-size: 9.5px; color: #64748b;">
            © 2026 Eunho Kim (@uno-km). AMEVA Open-Source Foundation (AOSF). All Rights Reserved.
          </div>
          <div class="pdf-footer">Page 4 / 4 • 김은호 엔지니어링 포트폴리오</div>
        </div>
      `;

      wrapper.appendChild(container);
      document.body.appendChild(wrapper);

      // Wait for layout calculation and font rendering
      await new Promise(resolve => setTimeout(resolve, 200));

      const opt = {
        margin: [6, 6, 6, 6],
        filename: '김은호_엔지니어링_포트폴리오.pdf',
        image: { type: 'jpeg', quality: 0.98 },
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
