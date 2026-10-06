/**
 * shared/portfolio-pdf.js
 * AMEVA Open-Source Foundation & Eunho Kim Official Portfolio PDF Generator
 * High-precision, zero-drift Korean typography & hyperlinked layout engine
 * 16 Ecosystem Projects & Disaggregated On-Device AI Architecture (10 Pages)
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

      const dateVal = row.getAttribute('data-release-date') || row.dataset.releaseDate || '-';
      dataMap[name] = {
        version: verElem ? verElem.textContent.trim() : '-',
        npm: npmElem ? npmElem.textContent.trim() : '-',
        pypi: pypiElem ? pypiElem.textContent.trim() : '-',
        total: totalElem ? totalElem.textContent.trim() : '-',
        date: (dateVal && dateVal !== 'null' && dateVal !== 'undefined') ? dateVal : '-'
      };
    });
    return dataMap;
  },

  generatePortfolioPDF: async function(buttonElem) {
    if (this.isGenerating) return;
    this.isGenerating = true;

    const originalText = buttonElem ? buttonElem.innerHTML : '';
    if (buttonElem) {
      buttonElem.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">*</span> PDF 생성 중...';
      buttonElem.style.pointerEvents = 'none';
      buttonElem.style.opacity = '0.8';
    }

    let wrapper = null;

    try {
      await this.loadHtml2Pdf();
      if (window._metricsRefreshPromise) {
        try {
          await window._metricsRefreshPromise;
        } catch (e) {}
      }
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
      notification.innerHTML = '[PDF] 하이퍼링크가 포함된 상세 포트폴리오 PDF를 생성 중입니다... 잠시만 기다려주세요.';
      wrapper.appendChild(notification);

      const container = document.createElement('div');
      container.id = 'pdf-render-canvas';
      container.style.cssText = `
        width: 760px;
        background: #ffffff;
        color: #1e293b;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Malgun Gothic", sans-serif;
        font-size: 10.5px;
        line-height: 1.48;
        box-sizing: border-box;
        box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      `;

      container.innerHTML = `
        <style>
          .pdf-page {
            box-sizing: border-box;
            width: 760px;
            min-height: 1040px;
            padding: 22px 26px;
            background: #ffffff;
            page-break-after: always;
            position: relative;
          }
          .pdf-page:last-child {
            page-break-after: avoid;
          }
          .pdf-header {
            border-bottom: 2.5px solid #004499;
            padding-bottom: 5px;
            margin-bottom: 8px;
          }
          .pdf-title {
            font-size: 18.5px;
            font-weight: 800;
            color: #004499;
            margin: 0 0 2px 0;
          }
          .pdf-profile-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3px;
            font-size: 10.2px;
            background: #f8fafc;
            padding: 7px 11px;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            margin-bottom: 8px;
          }
          .pdf-profile-item {
            margin: 1px 0;
          }
          .pdf-profile-item strong {
            color: #0f172a;
          }
          .pdf-h2 {
            font-size: 12px;
            font-weight: 700;
            color: #0f172a;
            border-bottom: 1.5px solid #cbd5e1;
            padding-bottom: 2.5px;
            margin: 8px 0 5px 0;
          }
          .pdf-table {
            width: 100%;
            border-collapse: collapse;
            margin: 4px 0;
            font-size: 7.9px;
            line-height: 1.28;
          }
          .pdf-table th, .pdf-table td {
            border: 1px solid #cbd5e1;
            padding: 2.5px 3.5px;
            text-align: left;
            vertical-align: middle;
          }
          .pdf-table th {
            background: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 7.9px;
            text-align: center;
          }
          .pdf-table td.center {
            text-align: center;
          }
          .pdf-table td.num {
            text-align: right;
            font-family: monospace;
            font-size: 7.8px;
          }
          .pdf-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 3.5px solid #004499;
            padding: 9px 11px;
            margin-bottom: 12px;
            border-radius: 3px;
            font-size: 10.2px;
            line-height: 1.48;
          }
          .pdf-card-title {
            font-size: 12px;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 3px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .pdf-tag {
            font-size: 8.5px;
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
            font-size: 8.2px;
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
            padding: 4px 7px;
            border-radius: 3px;
            margin-top: 5px;
            font-size: 9.5px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .pdf-bench-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 4px 7px;
            border-radius: 3px;
            margin: 4px 0;
            font-size: 9.5px;
            color: #166534;
          }
          .pdf-footer {
            font-size: 8.2px;
            color: #94a3b8;
            text-align: right;
            margin-top: 8px;
            border-top: 1px solid #f1f5f9;
            padding-top: 3px;
          }
        </style>

        <!-- ==================== PAGE 1: 표지 및 16대 프로젝트 종합 실측 명세 ==================== -->
        <div class="pdf-page">
          <div class="pdf-header">
            <h1 class="pdf-title">엔지니어링 포트폴리오 (Engineering Portfolio)</h1>
            <div style="font-size:10.2px; color:#64748b;">AMEVA Open-Source Foundation (AOSF) 기술 생태계 &amp; 프로젝트 명세서 (기준일자: ${todayStr})</div>
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

          <h2 class="pdf-h2">1. 16대 프로젝트 현황 및 생태계 실측 명세 (Ecosystem Status &amp; Telemetry)</h2>
          <table class="pdf-table">
            <thead>
              <tr>
                <th style="width: 15%;">프로젝트 / 패키지</th>
                <th style="width: 13%;">분류 (Domain)</th>
                <th style="width: 7%;">배포 버전</th>
                <th style="width: 7%;">NPM</th>
                <th style="width: 7%;">PyPI</th>
                <th style="width: 8%;">총합</th>
                <th style="width: 43%;">비고 / 외부 활용 실측 분석 (pip · npm · GitHub)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Termux-Diffusion</strong></td>
                <td>모바일 생성형 AI</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || 'v2.0.1'}</code></td>
                <td class="num">${(liveData['termux-diffusion'] && liveData['termux-diffusion'].npm) || '4,059'}</td>
                <td class="num">${(liveData['termux-diffusion'] && liveData['termux-diffusion'].pypi) || '7,080'}</td>
                <td class="num"><strong>${(liveData['termux-diffusion'] && liveData['termux-diffusion'].total) || '11,139'}</strong></td>
                <td>AmfyUI 모바일 스튜디오 및 Sovereign 6.0B DiT 가속. 1280x720 HD 고해상도 생성 벤치마크, Safe-Mode SurfaceFlinger 보호, GitHub 클론 511회.</td>
              </tr>
              <tr>
                <td><strong>Termux-BitNet</strong></td>
                <td>1.58-bit 온디바이스 LLM</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v2.1.0'}</code></td>
                <td class="num">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].npm) || '4,692'}</td>
                <td class="num">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].pypi) || '3,544'}</td>
                <td class="num"><strong>${(liveData['termux-bitnet'] && liveData['termux-bitnet'].total) || '8,236'}</strong></td>
                <td>1.58비트 저전력 추론. AMEVA-Cluster 분산 3진수 텐서 풀링(v2.1.0), GPU 메모리 슬라이싱 및 독자 NEON SIMD 어셈블리 검증.</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Runtime</strong></td>
                <td>온디바이스 런타임 코어</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].version) || 'v2.8.0'}</code></td>
                <td class="num">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].npm) || '4,022'}</td>
                <td class="num">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].pypi) || '4,154'}</td>
                <td class="num"><strong>${(liveData['ameva-runtime'] && liveData['ameva-runtime'].total) || '8,176'}</strong></td>
                <td>6-모달리티 공통 네이티브 ABI 및 Vulkan 1.3 하드웨어 가속 코어. Samsung Galaxy 5대 기기 전수 검증, 번들 격리 구동, GitHub 클론 528회.</td>
              </tr>
              <tr>
                <td><strong>Termux-STT</strong></td>
                <td>음성인식 &amp; 화자 분리</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.4.0'}</code></td>
                <td class="num">${(liveData['termux-stt'] && liveData['termux-stt'].npm) || '4,424'}</td>
                <td class="num">${(liveData['termux-stt'] && liveData['termux-stt'].pypi) || '3,717'}</td>
                <td class="num"><strong>${(liveData['termux-stt'] && liveData['termux-stt'].total) || '8,141'}</strong></td>
                <td>Hybrid GPU-Encoder / CPU-Decoder 가속. PyTorch 없는 2-화자 순수 화자 분리 및 자막(.srt/.vtt) 직접 추출, AMEVA-Cluster 분산 풀링, GitHub 클론 442회.</td>
              </tr>
              <tr>
                <td><strong>Termux-LlamaCpp</strong></td>
                <td>GGUF LLM 서버</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.4.0'}</code></td>
                <td class="num">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].npm) || '3,680'}</td>
                <td class="num">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].pypi) || '3,671'}</td>
                <td class="num"><strong>${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].total) || '7,351'}</strong></td>
                <td>제로 컴파일 사전 빌드 바이너리 및 OpenAI 규격 호환 API 서버. Adreno OpenCL 자동 디스패치 &amp; Flash Attention, GitHub 클론 1,397회 (최다).</td>
              </tr>
              <tr>
                <td><strong>Termux-Train</strong></td>
                <td>온디바이스 딥러닝 학습</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-train'] && liveData['termux-train'].version) || 'v2.0.1'}</code></td>
                <td class="num">${(liveData['termux-train'] && liveData['termux-train'].npm) || '1,684'}</td>
                <td class="num">${(liveData['termux-train'] && liveData['termux-train'].pypi) || '3,735'}</td>
                <td class="num"><strong>${(liveData['termux-train'] && liveData['termux-train'].total) || '5,419'}</strong></td>
                <td>유니파이드 6-모달리티 학습(Diffusion, Vision, STT, TTS, LLM PEFT, BitNet). AMEVA-Cluster 44GB 분산 가상 RAM 풀링 파이프라인 탑재.</td>
              </tr>
              <tr>
                <td><strong>Termux-Playwright</strong></td>
                <td>모바일 웹 자동화 &amp; CDP</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.81.2'}</code></td>
                <td class="num">${(liveData['termux-playwright'] && liveData['termux-playwright'].npm) || '1,858'}</td>
                <td class="num">${(liveData['termux-playwright'] && liveData['termux-playwright'].pypi) || '3,163'}</td>
                <td class="num"><strong>${(liveData['termux-playwright'] && liveData['termux-playwright'].total) || '5,021'}</strong></td>
                <td>안드로이드 비루팅 Chromium CDP 직접 제어. TermuxWakeLock 표준화로 5W 초저전력 24시간 무중단 백그라운드 웹 크롤링/모니터링 도입.</td>
              </tr>
              <tr>
                <td><strong>Termux-TTS</strong></td>
                <td>온디바이스 음성 합성</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-tts'] && liveData['termux-tts'].version) || 'v1.6.0'}</code></td>
                <td class="num">${(liveData['termux-tts'] && liveData['termux-tts'].npm) || '2,080'}</td>
                <td class="num">${(liveData['termux-tts'] && liveData['termux-tts'].pypi) || '2,724'}</td>
                <td class="num"><strong>${(liveData['termux-tts'] && liveData['termux-tts'].total) || '4,804'}</strong></td>
                <td>Studio Vulkan 1.3 GPU 신경망 음성 합성 엔진. VITS 신경망 모델 탑재, 한국어/영어 온디맨드 프로비저닝, AMEVA-Cluster 분산 음성합성 풀링.</td>
              </tr>
              <tr>
                <td><strong>Termux-Vision</strong></td>
                <td>컴퓨터 비전 &amp; VLM</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.7.0'}</code></td>
                <td class="num">${(liveData['termux-vision'] && liveData['termux-vision'].npm) || '2,589'}</td>
                <td class="num">${(liveData['termux-vision'] && liveData['termux-vision'].pypi) || '1,966'}</td>
                <td class="num"><strong>${(liveData['termux-vision'] && liveData['termux-vision'].total) || '4,555'}</strong></td>
                <td>UltraFace SSD ONNX 얼굴인식 업그레이드, SmolVLM 멀티모달 질의응답. AMEVA-Cluster 분산 VLM 풀링, VLM 네임스페이스 격리, GitHub 클론 571회.</td>
              </tr>
              <tr>
                <td><strong>Termux-AIChain</strong></td>
                <td>초경량 에이전트 체인</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.4'}</code></td>
                <td class="num">${(liveData['termux-aichain'] && liveData['termux-aichain'].npm) || '2,519'}</td>
                <td class="num">${(liveData['termux-aichain'] && liveData['termux-aichain'].pypi) || '1,910'}</td>
                <td class="num"><strong>${(liveData['termux-aichain'] && liveData['termux-aichain'].total) || '4,429'}</strong></td>
                <td>50KB 미만 Zero-Dependency 경량 DAG 파이프라인. ameva-runtime 하드웨어 가속 바인딩, 모바일 자율 에이전트 구축 도입.</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td>웹 보안 클라이언트 관측</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.3.0'}</code></td>
                <td class="num">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].npm) || '663'}</td>
                <td class="num">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].pypi) || '562'}</td>
                <td class="num"><strong>${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].total) || '1,225'}</strong></td>
                <td>0-Data 개인정보 비수집 봇 탐지 및 HMAC-SHA256 미들웨어. 웹 서비스 자동화 스크래퍼/크롤러 선별 차단 보안 레이어로 연동.</td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td>WASI 인메모리 MCP 허브</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.1.4'}</code></td>
                <td class="num">${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].npm) || '1,061'}</td>
                <td class="center" style="font-size:7.5px; color:#64748b;">NPM 전용</td>
                <td class="num"><strong>${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].total) || '1,061'}</strong></td>
                <td>호스트 환경 오염 없는 WASM 인메모리 도구 실행 엔진. Claude Desktop / Cursor 등 AI 코딩 에이전트 도구 공급 인프라로 연동.</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td>브라우저 WebGPU 딥러닝</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.1'}</code></td>
                <td class="num">${(liveData['ameva-forge'] && liveData['ameva-forge'].npm) || '373'}</td>
                <td class="num">${(liveData['ameva-forge'] && liveData['ameva-forge'].pypi) || '278'}</td>
                <td class="num"><strong>${(liveData['ameva-forge'] && liveData['ameva-forge'].total) || '651'}</strong></td>
                <td>PyTorch 호환 WebGPU Autograd 텐서 엔진. 서버 비용 0원 클라이언트 브라우저 GPU 딥러닝 가속 및 인터랙티브 웹 AI에 활용.</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Cluster</strong></td>
                <td>분산 메모리 풀링 런타임</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].version) || 'v1.0.1'}</code></td>
                <td class="num">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].npm) || '99'}</td>
                <td class="num">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].pypi) || '112'}</td>
                <td class="num"><strong>${(liveData['ameva-cluster'] && liveData['ameva-cluster'].total) || '211'}</strong></td>
                <td>단일 기기 RAM 한계 돌파를 위한 최대 44GB 대칭형 분산 가상 RAM 풀링 런타임. 6-모달리티 텐서 샤딩, TCP RTT 프리플라이트 진단, RPC 격리.</td>
              </tr>
              <tr>
                <td><strong>AMEVA Workstation</strong></td>
                <td>브라우저 온디바이스 앱</td>
                <td class="center"><code class="pdf-code">Live App</code></td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center"><strong>Live App</strong></td>
                <td>서버 통신 0% 로컬 WebGPU LLM(Qwen2.5) 추론, 대용량 문서 3초 맵리듀스 요약 및 무손실 인앱 미디어 편집, GitHub 클론 141회 (고유 60명).</td>
              </tr>
              <tr>
                <td><strong>Infra-Index Platform</strong></td>
                <td>클라우드 인프라 시황</td>
                <td class="center"><code class="pdf-code">Live App</code></td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center"><strong>Live App</strong></td>
                <td>글로벌 69개 클라우드 GPU/인프라 실시간 시세 집계 및 AI 반도체 시황 인텔리전스 제공. 엔터프라이즈 프라이빗 아키텍처.</td>
              </tr>
            </tbody>
          </table>

          <h2 class="pdf-h2">2. AMEVA 생태계 정의 및 저수준 하드웨어 엔지니어링 (Architecture &amp; Engineering)</h2>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 7px; margin: 3px 0 5px 0;">
            <!-- Box 1: AMEVA 공식 정의 및 핵심 가치 (사용자 요청 원문 100% 무변경 수록) -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid #004499; padding:5px 7px; border-radius:3px; font-size:7.5px; line-height:1.30;">
              <div style="font-weight:700; color:#0f172a; margin-bottom:2px; font-size:8px;">AMEVA 공식 정의 및 핵심 가치 (Autonomous Multi-Agent Edge-AI Ecosystem)</div>
              <div>• <strong>생물학적 기원 (Amoeba):</strong> 가장 척박하고 제한된 환경에서도 형태를 유연하게 바꾸며 자율 증식·적응하는 단세포 생명체 아메바(Amoeba)에서 유래.</div>
              <div style="margin-top:2px;">• <strong>아크로님 정의 (Acronym):</strong></div>
              <div style="padding-left:5px; margin:1px 0;">
                - <strong>A (Autonomous):</strong> 빅테크 클라우드 서버와 외부 네트워크 통신을 배제한 100% 로컬 자율 의사결정<br>
                - <strong>M (Multi-Agent):</strong> 6-모달리티(LLM, Diffusion, VLM, STT, TTS, Train) 계층적 에이전트 오케스트레이션<br>
                - <strong>E (Edge-Native):</strong> 상용 GPU 서버 비용 0원을 달성하는 순수 클라이언트 엣지 컴퓨팅<br>
                - <strong>V (Virtualized):</strong> 격리된 WASM 인메모리 샌드박스 및 P2P 가상 분산 런타임 (Cluster)<br>
                - <strong>A (Automation):</strong> 스마트폰 및 브라우저 하드웨어를 활용한 24시간 무중단 자율화
              </div>
              <div style="margin-top:2px;">• <strong>핵심 가치:</strong> 단 1바이트의 개인·기업 기밀 데이터도 외부로 전송하지 않는 완전한 데이터 주권(Data Sovereignty) 확보.</div>
            </div>

            <!-- Box 2: Android Termux 환경 채택 배경 및 실리콘 계층 최적화 -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid #004499; padding:5px 7px; border-radius:3px; font-size:7.5px; line-height:1.30;">
              <div style="font-weight:700; color:#0f172a; margin-bottom:2px; font-size:8px;">Android Termux 환경 채택 배경 및 실리콘 계층 최적화</div>
              <div>• <strong>Termux 환경 채택 배경:</strong> 루팅(Rooting) 없이 표준 안드로이드 환경에서 POSIX Bionic libc 및 시스템 저수준 API에 직접 접근하여, 5W 미만의 저전력 환경에서 공기계 단말을 상시 유효 노드로 운용하는 전력 효율성 확보.</div>
              <div style="margin-top:2px;">• <strong>저수준 하드웨어 아키텍처 최적화 (Silicon-Level Optimization):</strong></div>
              <div style="padding-left:5px; margin:1px 0;">
                - <strong>Qualcomm Snapdragon (Adreno):</strong> 32KB 로컬 메모리(LDS) 경계 조건 방어, Vulkan 드라이버 컨텍스트 안정화 및 OpenCL 네이티브 디스패치 직접 구현.<br>
                - <strong>Samsung Exynos (ARM Mali):</strong> Valhall 아키텍처 커널 타임아웃 방어 및 Vulkan 셰이더 연산 수치 정밀도 보정.<br>
                - <strong>순수 ARM64 NEON 커널 내재화:</strong> 대형 외부 의존성(OpenCV 등)을 배제하고, 순수 C++ 및 ARMv8.2-A NEON/DotProd 어셈블리 직접 설계를 통한 초경량 가속 엔진 구축.
              </div>
            </div>
          </div>

          <h2 class="pdf-h2">3. 글로벌 오픈소스 코어 업스트림 기여 실적 (Upstream Open-Source Contributions)</h2>
          <table class="pdf-table" style="font-size:7.4px; margin-top:2px;">
            <thead>
              <tr>
                <th style="width: 25%;">대상 조직 / 프로젝트</th>
                <th style="width: 27%;">기여 번호 및 연구 명칭</th>
                <th style="width: 48%;">핵심 기여 내용 및 기술적 성과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ggml.ai / OpenAI 아키텍처</strong><br><span style="color:#64748b; font-size:7px;">(ggerganov/whisper.cpp)</span></td>
                <td><strong>[whisper.cpp #4089]</strong><br>모바일 SoC 하이브리드 스플릿 모드<br><code class="pdf-code">--split-mode</code></td>
                <td>모바일 이종 컴퓨팅 환경에서 트랜스포머 인코더는 Vulkan GPU, 디코더는 CPU로 분할 처리하여 단말 발열을 억제하고 연산 지연시간을 개선한 파이프라인 기여 (AOSF-TR-2026-UPSTREAM-WHISPER-4089).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:7px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #551]</strong><br>ARM 아키텍처 i2_s 양자화<br>텐서 안정성 복원</td>
                <td>ARM 디바이스 구동 시 발생하던 삼진 텐서 메모리 정렬 오류 및 텍스트 출력 결함을 분석·수정하고 비-AVX2 CPU 폴백 루틴 복원 (AOSF-TR-2026-UPSTREAM-BITNET-551).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:7px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #624]</strong><br>ARMv8.2-A NEON 1x4_32W<br><code class="pdf-code">sdot</code> 가속 커널 완주</td>
                <td>Signed Dot Product(sdot) 명령어를 활용한 하드웨어 가속 텐서 연산 최적화 커널 및 안드로이드 NDK 빌드 툴체인 기여 (AOSF-TR-2026-UPSTREAM-BITNET-624).</td>
              </tr>
              <tr>
                <td><strong>ggml.ai / OpenAI 아키텍처</strong><br><span style="color:#64748b; font-size:7px;">(ggerganov/whisper.cpp)</span></td>
                <td><strong>[whisper.cpp 패치]</strong><br>Adreno 6xx Vulkan LDS<br>하드웨어 제한 안전 폴백</td>
                <td>스냅드래곤 GPU의 32KB 로컬 데이터 공유(LDS) 하드웨어 제약으로 인한 드라이버 비정상 종료를 방지하고 자동 표준 어텐션으로 우회하는 안전 계층 구축 (AOSF-TR-2026-WHISPER-ADRENO6XX-FALLBACK).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:7px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #633]</strong><br>ARM64 삼진 가중치 역양자화<br>정밀도 개선 및 디스패처 기여</td>
                <td>ARM64 런타임의 삼진 가중치 역양자화 연산 수치 불안정을 정밀 보정하고 모델 구조에 따른 동적 활성화 함수 디스패처 엔진 업스트림 기여 (AOSF-TR-2026-UPSTREAM-BITNET-633).</td>
              </tr>
            </tbody>
          </table>

          <div class="pdf-footer">Page 1 / 10 • 김은호 엔지니어링 포트폴리오</div>
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
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva workstation'] && liveData['ameva workstation'].version) || 'Live App'} | <strong>배포일자:</strong> ${(liveData['ameva workstation'] && liveData['ameva workstation'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 대용량 문서 분석이나 AI 편집을 하려면 유료 클라우드 서비스를 써야 하고, 기밀 문서나 개인 데이터가 외부 서버로 전송되어 유출 위험이 발생함.</div>
            <div><strong>해결 방식:</strong> 서버와의 데이터 송수신을 100% 차단하고, 브라우저의 WebGPU와 웹 워커를 활용해 AI 모델(Qwen2.5)과 미디어 엔진을 사용자 컴퓨터 내부에서 직접 구동함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>대용량 문서 3초 요약:</strong> 수백 페이지의 PDF/DOCX 파일을 화면에 끌어다 놓으면 웹 워커가 병렬로 읽어 3초 안에 챕터별 핵심 내용을 맵리듀스로 요약.</li>
              <li><strong>무손실 인앱 미디어 편집:</strong> 무거운 인코딩 없이 브라우저에서 바로 영상 구간을 자르고, 음성 파일에서 말이 없는 무음 구간을 자동으로 잘라내며, 1초 만에 인물 배경을 분리.</li>
              <li><strong>완전한 로컬 보안:</strong> 모든 작업 데이터가 브라우저 로컬 저장소(OPFS)에만 저장되므로 인터넷이 끊겨도 정상 작동하며 사내 기밀 유출 위험이 없음.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[Web] 앱 실행:</strong> <a href="https://ameva-workstation-web-core.vercel.app/" target="_blank" class="pdf-link">https://ameva-workstation-web-core.vercel.app/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/AMEVA-Workstation-Web" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Workstation-Web</a></span>
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
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['infra-index platform'] && liveData['infra-index platform'].version) || 'Live App'} | <strong>배포일자:</strong> ${(liveData['infra-index platform'] && liveData['infra-index platform'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> AWS, GCP, Azure, Lambda Labs, RunPod 등 수십 개 벤더의 GPU/인프라 가격이 파편화되어 있어 최적 견적 산출과 가격 변동 추적이 극도로 어려움.</div>
            <div><strong>해결 방식:</strong> 글로벌 69개 클라우드 공급사의 실시간 단가를 자동 수집·정규화하고 AI 반도체 시황 및 최신 연구 논문 인텔리전스를 실시간 시각화하여 제공.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>69개 클라우드 실시간 시세 비교:</strong> GPU(H100, A100, L40S 등), CPU, 스토리지 시간당 단가를 한눈에 비교하고 최저가 인프라 탐색.</li>
              <li><strong>AI 반도체 시황 인텔리전스:</strong> 최신 엔비디아, AMD 및 커스텀 ASIC 수급 동향과 연구 논문 트렌드 분석 리포트 제공.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[Web] 웹 앱:</strong> <a href="https://infraindex-platform-front.vercel.app/" target="_blank" class="pdf-link">https://infraindex-platform-front.vercel.app/</a></span>
              <span><strong>[Security] 저장소:</strong> Private Enterprise Repository</span>
            </div>
          </div>

          <div class="pdf-footer">Page 2 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 3: 1.3 MCP-Hub & 1.4 Sentinel ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (SDK &amp; Developer Infrastructure)</h2>

          <!-- 1.3 AMEVA-MCP-Hub -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.3 AMEVA-MCP-Hub</span>
              <span class="pdf-tag">개발자 도구 / AI 에이전트 인프라</span>
            </div>
            <div><strong>설명:</strong> Claude Desktop, Cursor 등 AI 에이전트에 필요한 다양한 언어(C++, Rust, Java, Python 등)의 도구들을 PC에 컴파일러나 런타임 설치 없이 명령어 한 줄로 즉시 구동해 주는 통합 MCP 허브 &amp; SDK.</div>
            <div><strong>기술 스택:</strong> Node.js, TypeScript, WebAssembly (WASI), In-Memory Execution</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> AI 에이전트에 새 도구를 붙이려면 언어마다 Python 가상환경, Rust 컴파일러, Java JDK 등을 PC에 일일이 깔아야 하고, 도구마다 백그라운드 프로세스가 떠서 메모리를 수백 MB씩 낭비함.</div>
            <div><strong>해결 방식:</strong> 이미 컴파일된 WebAssembly(WASM) 바이너리를 단일 Node.js 프로세스 메모리에 직접 띄워, 개발 환경 오염 없이 &lt;1ms 속도로 도구를 실행함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>설치 없는 1초 연동:</strong> <span class="pdf-code">npx ameva-mcp-hub</span> 실행 후 설정 파일에 포트만 적어주면 호스트 PC 환경 오염 없이 수십 가지 도구를 즉시 사용.</li>
              <li><strong>자연어 도구 자동 매칭:</strong> 사용자가 "이 파일 해시값 계산해줘"라고 질문하면 질문 의도에 딱 맞는 도구를 찾아내 자동 실행.</li>
              <li><strong>GitHub 저장소 실시간 도구 추가:</strong> GitHub 주소만 적어두면 서버 재부팅 없이 실시간으로 새 도구를 내려받아 즉시 활성화.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-mcp-hub</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/mcp/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/mcp/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-mcp-hub" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-mcp-hub</a></span>
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
            <div><strong>배포 버전:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 기존 봇 탐지 솔루션은 사용자 키 입력이나 마우스 움직임을 서버로 전송해 개인정보 침해(GDPR 위반) 논란이 크고 사이트 로딩 속도를 저하시킴.</div>
            <div><strong>해결 방식:</strong> 사용자 입력값 수집은 0%로 배제하고, 브라우저의 구조적 이상 신호(자동화 툴 흔적, 환경 변조 등)만 클라이언트 내부에서 즉시 계산해 0~100점 위험도를 산출함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스크립트 1줄로 봇 차단:</strong> 웹사이트에 SDK를 넣으면 매크로, 크롤러, 무단 스크래퍼를 0.001초 만에 감지.</li>
              <li><strong>개인정보 침해 0%:</strong> 키로깅이나 화면 추적이 전혀 없어 국내외 개인정보보호법(GDPR) 규제 리스크를 원천 해결.</li>
              <li><strong>위변조 방지 암호화 토큰:</strong> WebCrypto 기반 HMAC-SHA256으로 서명된 토큰을 발급하여 백엔드 서버에서 0.1ms 안에 유효성 검증.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/@ameva/sentinel" target="_blank" class="pdf-link">https://www.npmjs.com/package/@ameva/sentinel</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/sentinel/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-sentinel" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-sentinel</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 3 / 10 • 김은호 엔지니어링 포트폴리오</div>
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
            <div><strong>배포 버전:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 웹에서 딥러닝 모델을 돌리려면 비싼 GPU 서버를 빌려야 해서 매달 서버 비용이 수백만 원씩 발생함.</div>
            <div><strong>해결 방식:</strong> 사용자의 웹 브라우저가 가진 GPU 자원(WebGPU)을 직접 끌어다 쓰는 연산 셰이더(WGSL)를 작성하여, 서버 비용 0원으로 클라이언트 PC에서 딥러닝 모델을 학습·추론함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>서버 비용 0원 AI 서비스:</strong> 서버가 모델을 계산하지 않고 사용자의 브라우저 GPU가 계산하므로 트래픽이 폭증해도 서버 비용이 0원.</li>
              <li><strong>PyTorch 개발자 친화 문법:</strong> <span class="pdf-code">torch.Tensor</span>, <span class="pdf-code">tensor.backward()</span> 등 파이토치와 똑같은 문법을 제공하여 기존 AI 개발자가 러닝 커브 없이 즉시 웹에 모델을 배포.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-forge/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-forge/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/@ameva/forge" target="_blank" class="pdf-link">https://www.npmjs.com/package/@ameva/forge</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/forge/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Forge</a></span>
            </div>
          </div>

          <!-- 1.6 Termux-AIChain -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.6 Termux-AIChain</span>
              <span class="pdf-tag">모바일 온디바이스 에이전트 프레임워크</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 LangChain 같은 무거운 외부 라이브러리 없이, 외부 의존성 0개(Zero-Dependency)로 LLM 체이닝과 자율 에이전트 워크플로우를 구성하는 초경량 에이전트 프레임워크.</div>
            <div><strong>기술 스택:</strong> Python 3, TypeScript, Zero-Dependency, DAG Pipeline, ameva-runtime v2.0 직결</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> LangChain, LlamaIndex 같은 대형 프레임워크는 수백 개의 무거운 외부 패키지를 요구하여 안드로이드 Termux에서 패키지 충돌이 나고 메모리 부족으로 다운됨.</div>
            <div><strong>해결 방식:</strong> 외부 의존성 패키지 설치를 0개로 설계하여, 50KB 미만의 순수 코어만으로 순차 체인, 조건부 분기, 도구 호출을 완벽히 지원함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스마트폰 단독 AI 에이전트 워크플로우:</strong> Termux-BitNet 등 온디바이스 로컬 모델과 묶어 인터넷 없이 복잡한 다단계 질문-답변 및 분석 파이프라인 자동 실행.</li>
              <li><strong>의존성 충돌 0%:</strong> 무거운 외부 의존성 없이 <span class="pdf-code">pip install termux-aichain</span> 단 1초 만에 설치 완료 및 정상 작동.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-aichain/" target="_blank" class="pdf-link">https://pypi.org/project/termux-aichain/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-aichain" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-aichain</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/aichain/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/aichain/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-aichain" target="_blank" class="pdf-link">https://github.com/uno-km/termux-aichain</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 4 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 5: 1.7 Runtime & 1.8 Cluster ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (On-Device Distributed Runtime &amp; Cluster)</h2>

          <!-- 1.7 AMEVA-Runtime -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.7 AMEVA-Runtime</span>
              <span class="pdf-tag">온디바이스 하드웨어 가속 런타임 코어</span>
            </div>
            <div><strong>설명:</strong> Android Termux ARM64 환경에서 C++/Vulkan/OpenCL 네이티브 바이너리와 6-모달리티 AI 엔진들을 유기적으로 결합하고 하드웨어 자원을 직접 제어하는 핵심 런타임 오케스트레이터.</div>
            <div><strong>기술 스택:</strong> C++17, Vulkan 1.3, OpenCL, POSIX IPC, Bionic libc, ARM64 NEON &amp; DotProd</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-runtime'] && liveData['ameva-runtime'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['ameva-runtime'] && liveData['ameva-runtime'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['ameva-runtime'] && liveData['ameva-runtime'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 Linux 환경에서 libc++ 버전 불일치로 인한 바이너리 충돌, Qualcomm GPU 컨텍스트 손실, 하드웨어 파편화로 인한 잦은 크래시 발생.</div>
            <div><strong>해결 방식:</strong> 번들 격리 레이아웃으로 호스트 libc++ 충돌을 원천 차단하고, Adreno 650 컨텍스트 시프트 패치 및 ggml-ameva KV 캐시 최적화를 통해 5대 실기기 연속 추론을 안정화함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>Samsung Galaxy 5대 기기 전수 검증:</strong> Galaxy S25, S21, A35, S20 등 주요 SoC 전 라인업에서 하드웨어 가속 패스율 100% 검증 완료.</li>
              <li><strong>6-모달리티 공통 ABI 백엔드:</strong> LLM, Diffusion, STT, TTS, Vision, Train 모듈이 단일 런타임 인터페이스를 통해 Vulkan/OpenCL 가속을 공유.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-runtime/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-runtime/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/@ameva/runtime" target="_blank" class="pdf-link">https://www.npmjs.com/package/@ameva/runtime</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/runtime/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/runtime/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-runtime" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-runtime</a></span>
            </div>
          </div>

          <!-- 1.8 AMEVA-Cluster -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.8 AMEVA-Cluster</span>
              <span class="pdf-tag">대칭형 온디바이스 분산 메모리 풀링 런타임</span>
            </div>
            <div><strong>설명:</strong> 여러 대의 안드로이드 스마트폰 자원을 대칭형 분산 네트워크로 결합하여 단일 기기의 RAM 용량 한계를 극복하고 최대 44GB 가상 RAM을 형성하는 온디바이스 분산 텐서 샤딩 런타임.</div>
            <div><strong>기술 스택:</strong> Python 3, Node.js, TCP Sockets, Granular Scoring Telemetry, Bytecode Shielding</div>
            <div><strong>배포 버전:</strong> ${(liveData['ameva-cluster'] && liveData['ameva-cluster'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['ameva-cluster'] && liveData['ameva-cluster'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['ameva-cluster'] && liveData['ameva-cluster'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 기기는 개별 RAM이 4~8GB로 한정되어 있어 6.0B 이상의 거대 모델이나 대규모 배치 학습 구동 시 OOM(Out of Memory)으로 앱이 강제 종료됨.</div>
            <div><strong>해결 방식:</strong> 스마트폰 여러 대를 P2P로 연결해 단일 가상 RAM(Virtual Distributed RAM) 풀을 생성하고 레이어 단위 텐서 샤딩을 수행하여 최대 44GB 메모리 공간을 확보함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>최대 44GB 분산 가상 RAM:</strong> 공기계 스마트폰들을 묶어 단일 기기에서 돌릴 수 없던 대형 AI 모델과 LoRA 학습을 협업 수행.</li>
              <li><strong>사전 무결성 진단 (Pre-Flight):</strong> TCP RTT 핑과 텐서 루프백 진단으로 네트워크 레이턴시를 측정하고 최적 샤딩 비율을 자동 결정.</li>
              <li><strong>RPC 포트 보안 격리:</strong> 외부 노출 50052 포트와 내부 연산 50055 루프백 포트를 물리적으로 분리하여 무단 원격 침투 차단.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-cluster/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-cluster/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/@ameva/cluster" target="_blank" class="pdf-link">https://www.npmjs.com/package/@ameva/cluster</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/cluster/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/cluster/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-cluster" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-cluster</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 5 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 6: 1.9 BitNet & 1.10 Diffusion ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile On-Device AI: LLM &amp; Image)</h2>

          <!-- 1.9 Termux-BitNet -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.9 Termux-BitNet</span>
              <span class="pdf-tag">모바일 온디바이스 1.58-bit LLM 추론</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰(Termux) 환경에서 1.58비트(3진수 {-1,0,+1}) LLM을 스마트폰 전용 SIMD 명령어로 가속하여 빠르게 구동하는 경량 온디바이스 AI 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON Assembly, Python C-API, Node.js N-API, AMEVA-Cluster 연동</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 스마트폰은 RAM 용량이 4~8GB 수준으로 작아, 일반 거대 언어 모델(LLM)을 올리면 메모리 부족(OOM)으로 앱이 튕기거나 속도가 초당 1글자 미만으로 느림.</div>
            <div><strong>해결 방식:</strong> 1.58비트 가중치 압축과 ARM64 NEON 전용 어셈블리 커널을 결합하여, 곱셈 연산 대신 덧셈 연산 위주로 처리하여 연산량과 메모리를 70% 이상 대폭 삭감함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>스마트폰 단독 AI 챗봇:</strong> 인터넷 연결 없이 스마트폰 CPU만으로 초당 8~15토큰 속도의 오프라인 AI 대화 가능.</li>
              <li><strong>AMEVA-Cluster 3진수 텐서 풀링:</strong> 단말 간 분산 추론을 지원하여 4GB 보급형 기기에서도 메모리 부담 없이 안정 구동.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-bitnet/" target="_blank" class="pdf-link">https://pypi.org/project/termux-bitnet/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-bitnet" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-bitnet</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/bitnet/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/bitnet/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-bitnet" target="_blank" class="pdf-link">https://github.com/uno-km/termux-bitnet</a></span>
            </div>
          </div>

          <!-- 1.10 Termux-Diffusion -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.10 Termux-Diffusion</span>
              <span class="pdf-tag">모바일 온디바이스 생성형 AI &amp; AmfyUI 스튜디오</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰에서 클라우드 GPU 없이 C++ GGML 및 Vulkan 1.3 엔진으로 Stable Diffusion 및 Sovereign 6.0B DiT 이미지를 생성하는 모바일 네이티브 프레임워크 &amp; AmfyUI(ComfyUI 모바일 스튜디오).</div>
            <div><strong>기술 스택:</strong> C++17 GGML, Vulkan 1.3, ARM64 NEON &amp; DotProd, AmfyUI DAG Engine, Safe-Mode Guard</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> Stable Diffusion 및 DiT 모델은 6GB 이상의 VRAM을 요구하여 모바일에서 실행 시 OOM 크래시가 발생하고 장시간 연산 시 단말 과열로 UI가 프리징됨.</div>
            <div><strong>해결 방식:</strong> VAE Tiling과 GGML 메모리 풀링, GPU Duty-Cycle 쓰로틀링(SCRUM-493) 및 Safe-Mode SurfaceFlinger 보호를 적용하여 시스템 안정성을 확보함.</div>
            <div class="pdf-bench-box">
              <strong>[Benchmark] 실기기 실측 벤치마크 및 고해상도 검증:</strong><br>
              • <strong>Galaxy S25</strong> (Snapdragon 8 Elite / Adreno 830): <strong>4.39초</strong> (Vulkan 가속, 651MB VRAM 점유)<br>
              • <strong>Galaxy S20 HD 1280x720</strong>: 4계절 포트레이트 고해상도 생성 파이프라인 실증 완료<br>
              • <strong>AmfyUI Mobile Studio</strong>: <span class="pdf-code">0.0.0.0:11553</span> 자동 바인딩으로 PC 및 모바일 브라우저에서 ComfyUI 노드 워크플로우 직접 실행
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-diffusion/" target="_blank" class="pdf-link">https://pypi.org/project/termux-diffusion/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-diffusion" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-diffusion</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/diffusion/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/diffusion/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-diffusion" target="_blank" class="pdf-link">https://github.com/uno-km/termux-diffusion</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 6 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 7: 1.11 STT & 1.12 TTS ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile Speech &amp; Audio Processing)</h2>

          <!-- 1.11 Termux-STT -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.11 Termux-STT</span>
              <span class="pdf-tag">모바일 온디바이스 음성인식 &amp; 화자 분리</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 Whisper.cpp 및 Vosk 엔진을 결합하고, Hybrid GPU-Encoder/CPU-Decoder 가속과 순수 파이썬 128차원 벡터 화자 분리를 지원하는 음성 처리 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++, Python, Whisper.cpp, Vosk, Hybrid GPU/CPU Acceleration, AMEVA-Cluster</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 음성 인식을 위해 외부 클라우드 API를 쓰면 통신 비용과 기밀 회의록 유출 위험이 발생하며, 기존 화자 분리 패키지는 PyTorch 의존성으로 모바일 설치 불가.</div>
            <div><strong>해결 방식:</strong> GPU로 인코더를 가속하고 CPU로 디코더를 처리하는 하이브리드 파이프라인을 구축하고, 순수 파이썬 128차원 음성 특징 벡터 코사인 유사도 연산으로 화자를 분리함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>회의록 자동 작성 &amp; 화자 구분:</strong> 오디오 녹음 파일을 넣으면 발화자별로 구분하여 텍스트 및 자막(.srt/.vtt) 파일로 즉시 출력.</li>
              <li><strong>AMEVA-Cluster 분산 풀링:</strong> 녹음 길이가 길 경우 클러스터 내 여러 기기로 오디오 청크를 분산 전사하여 처리 시간 대폭 단축.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-stt/" target="_blank" class="pdf-link">https://pypi.org/project/termux-stt/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-stt" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-stt</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/stt/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/stt/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-stt" target="_blank" class="pdf-link">https://github.com/uno-km/termux-stt</a></span>
            </div>
          </div>

          <!-- 1.12 Termux-TTS -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.12 Termux-TTS</span>
              <span class="pdf-tag">모바일 온디바이스 신경망 음성 합성</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 Studio Vulkan 1.3 GPU 컴퓨트 가속과 VITS 신경망 모델을 통해 고품질 자연어 음성을 지연 없이 실시간 합성하는 온디바이스 음성 출력 엔진.</div>
            <div><strong>기술 스택:</strong> C++, Python, Node.js, Studio Vulkan 1.3 GPU Compute, VITS Neural Vocoder, AMEVA-Cluster</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-tts'] && liveData['termux-tts'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-tts'] && liveData['termux-tts'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-tts'] && liveData['termux-tts'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 기본 TTS 엔진은 기계음이 심하고 감정 표현이 제한적이며, 고품질 신경망 TTS는 무거운 딥러닝 런타임으로 인해 모바일 실시간 구동 불가.</div>
            <div><strong>해결 방식:</strong> Studio Vulkan GPU 컴퓨트 셰이더로 VITS 신경망 인버터를 최적화하여 1초 미만의 첫 발화 지연(TTFT)으로 사람과 유사한 자연스러운 음성을 합성함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>다국어 자동 프로비저닝:</strong> 한국어 KSS 모델 및 영어 Lessac 모델을 명령어 한 줄로 자동 다운로드 및 캐싱.</li>
              <li><strong>AMEVA-Cluster 분산 음성합성:</strong> 텍스트가 방대할 경우 클러스터 기기들이 문단별로 병렬 합성하여 지연 없는 스트리밍 출력.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-tts/" target="_blank" class="pdf-link">https://pypi.org/project/termux-tts/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-tts" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-tts</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/tts/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/tts/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-tts" target="_blank" class="pdf-link">https://github.com/uno-km/termux-tts</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 7 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 8: 1.13 Train & 1.14 LlamaCpp ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (On-Device Training &amp; LLM Server)</h2>

          <!-- 1.13 Termux-Train -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.13 Termux-Train</span>
              <span class="pdf-tag">6-모달리티 온디바이스 딥러닝 학습 &amp; 44GB 클러스터 엔진</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 스마트폰 자원과 AMEVA-Cluster 44GB 가상 RAM을 결합하여 모바일 기기 단독으로 멀티모달 인공신경망의 미분 계산과 LoRA 파인튜닝을 수행하는 통합 학습 엔진.</div>
            <div><strong>기술 스택:</strong> C, SafeTensors, Python C-API, Node.js CLI, AMEVA-Cluster 44GB Virtual RAM</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-train'] && liveData['termux-train'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-train'] && liveData['termux-train'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-train'] && liveData['termux-train'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일에서 AI 모델을 학습시키는 것은 RAM 부족과 메모리 누수로 인해 불가능하다고 여겨졌으며, 프레임워크 크기가 수 GB에 달함.</div>
            <div><strong>해결 방식:</strong> 순수 C 언어로 역전파 DAG를 직접 구현하고, AMEVA-Cluster 분산 가상 RAM을 연동하여 6개 모달리티의 LoRA 파인튜닝 파이프라인을 구축함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>6-모달리티 학습 지원:</strong> Diffusion 이미지 폴더 LoRA, Vision VLM LoRA, STT 음성 LoRA, TTS 스타일 LoRA, LLM PEFT, BitNet 1.58b QAT 지원.</li>
              <li><strong>단일 기기 GPU 슬라이싱 &amp; 44GB 클러스터 풀링:</strong> 단일 단말에서는 GPU 메모리를 슬라이싱하고, 다중 단말에서는 가상 RAM으로 대규모 학습 수행.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-train/" target="_blank" class="pdf-link">https://pypi.org/project/termux-train/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-train" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-train</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/train/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/train/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-train" target="_blank" class="pdf-link">https://github.com/uno-km/termux-train</a></span>
            </div>
          </div>

          <!-- 1.14 Termux-LlamaCpp -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.14 Termux-LlamaCpp</span>
              <span class="pdf-tag">모바일 온디바이스 GGUF LLM 런타임 &amp; OpenAI 서버</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux ARM64 전용으로 사전 빌드된 제로 컴파일 GGUF LLM 런타임, Qualcomm Adreno OpenCL 최적화 디스패치 및 OpenAI 규격 호환 REST/SSE 서버 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++17, ARM64 NEON &amp; DotProd SIMD, Adreno OpenCL, Flash Attention, POSIX Sockets, AMEVA-Cluster</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> llama.cpp를 모바일에서 빌드하려면 CMake/NDK 컴파일 툴체인 설정이 복잡하고 타 앱 및 웹 프론트엔드와의 표준 연동 인터페이스 부재.</div>
            <div><strong>해결 방식:</strong> ARM64 NEON 최적화 바이너리를 패키지에 내장하여 제로 컴파일 1-Touch 실행과 <span class="pdf-code">localhost:8080/v1/chat/completions</span> OpenAI 호환 서버를 자동 구동.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>Adreno OpenCL 자동 디스패치:</strong> 스냅드래곤 GPU 환경에서 OpenCL 가속을 자동 활성화하고 Flash Attention으로 토큰 생성 속도 극대화.</li>
              <li><strong>AMEVA-Cluster 분산 메모리 풀링:</strong> 8B 이상의 대형 모델을 여러 스마트폰에 분산 적재하여 단일 기기 메모리 한계 극복.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-llamacpp/" target="_blank" class="pdf-link">https://pypi.org/project/termux-llamacpp/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-llamacpp" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-llamacpp</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/llamacpp/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/llamacpp/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-llamacpp" target="_blank" class="pdf-link">https://github.com/uno-km/termux-llamacpp</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 8 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 9: 1.15 Vision & 1.16 Playwright ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">1. 프로젝트 상세 명세 (Mobile Vision &amp; Automation)</h2>

          <!-- 1.15 Termux-Vision -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.15 Termux-Vision</span>
              <span class="pdf-tag">모바일 온디바이스 컴퓨터 비전 &amp; VLM 엔진</span>
            </div>
            <div><strong>설명:</strong> 외부 무거운 의존성 없이 순수 ARM64 NEON 비전 커널, UltraFace SSD ONNX 얼굴 인식 및 SmolVLM/Qwen2-VL 온디바이스 멀티모달 VLM 추론을 수행하는 초경량 비전 프레임워크.</div>
            <div><strong>기술 스택:</strong> Python 3, JavaScript/TypeScript, ARM64 NEON SIMD, UltraFace SSD ONNX, Vulkan 1.3, AMEVA-Cluster</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> OpenCV, torchvision 같은 패키지는 모바일 환경에서 수백 MB 용량과 복잡한 빌드 의존성을 유발하며 VLM 멀티모달 구동 불가.</div>
            <div><strong>해결 방식:</strong> UltraFace SSD ONNX 런타임 얼굴 인식 엔진과 5단계 Canny 엣지 검출을 순수 경량 커널로 탑재하고, SmolVLM/Qwen2-VL 온디바이스 시각 질의응답을 통합 구현.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>온디바이스 VLM 멀티모달 질의응답:</strong> 카메라로 찍은 사진을 모델에 입력하여 "이 물건의 특징이 뭐야?" 같은 자연어 질문에 즉각 답변.</li>
              <li><strong>AMEVA-Cluster VLM 풀링:</strong> 비전 인코더와 텍스트 디코더를 클러스터 노드로 샤딩하여 VRAM 부족 없이 고성능 VLM 실행.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-vision/" target="_blank" class="pdf-link">https://pypi.org/project/termux-vision/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-vision" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-vision</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/vision/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/vision/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-vision" target="_blank" class="pdf-link">https://github.com/uno-km/termux-vision</a></span>
            </div>
          </div>

          <!-- 1.16 Termux-Playwright -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>1.16 Termux-Playwright</span>
              <span class="pdf-tag">모바일 웹 자동화 &amp; 크롤링 런타임</span>
            </div>
            <div><strong>설명:</strong> 안드로이드 Termux 환경에서 루팅(Rooting) 없이 정품 크로미움 브라우저를 직접 제어하며, TermuxWakeLock 표준화로 화면 꺼짐 상태에서도 5W 초저전력 24시간 무중단 웹 자동화를 수행하는 런타임.</div>
            <div><strong>기술 스택:</strong> Android Bionic libc, Chrome DevTools Protocol (CDP), Node.js, Python, TermuxWakeLock</div>
            <div><strong>배포 버전:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || '-'} | <strong>배포일자:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].date) || '-'} | <strong>총 다운로드:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].total) || '-'}</div>
            <div><strong>기존 문제:</strong> 일반 PC나 클라우드 서버는 24시간 크롤링 시 수백 W의 전력과 월 수십만 원의 서버 비용이 발생하며 모바일에서는 화면이 꺼지면 프로세스가 종료됨.</div>
            <div><strong>해결 방식:</strong> TermuxWakeLock 인터페이스를 내장하여 스마트폰 화면이 꺼진 절전 상태에서도 CDP 세션을 유지하여 공기계 스마트폰을 상시 무인 크롤러 노드로 전환.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>5W 초저전력 24시간 무중단 자동화:</strong> PC 대비 전력 소모를 98% 절감하며 공기계 스마트폰에서 24시간 상시 웹 데이터 스크래핑 및 테스트 수행.</li>
              <li><strong>스마트폰 비루팅 무인 자동화:</strong> 시스템 루팅 없이 안전하게 정품 크로미움 브라우저를 백그라운드에서 직접 제어.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-playwright/" target="_blank" class="pdf-link">https://pypi.org/project/termux-playwright/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-playwright" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-playwright</a></span>
              <span><strong>[Docs] 공식 문서:</strong> <a href="https://uno-km.vercel.app/lib/playwright/" target="_blank" class="pdf-link">https://uno-km.vercel.app/lib/playwright/</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-playwright" target="_blank" class="pdf-link">https://github.com/uno-km/termux-playwright</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 9 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 10: 종합 요약 및 전체 링크 색인 ==================== -->
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
                <td><strong>클라우드 &amp; 에이전트 인프라</strong></td>
                <td>Infra-Index Platform, AMEVA-MCP-Hub, Termux-AIChain</td>
                <td>Node.js, TypeScript, Python 3, WASI WebAssembly, Zero-Dependency. 호스트 개발 환경 오염 없는 인메모리 실행 및 경량 에이전트 파이프라인.</td>
              </tr>
              <tr>
                <td><strong>온디바이스 분산 런타임 &amp; 가상 RAM</strong></td>
                <td>AMEVA-Runtime, AMEVA-Cluster</td>
                <td>C++17, Vulkan 1.3, OpenCL, POSIX IPC, Bionic libc, TCP Sockets. 단일 기기 RAM 한계를 극복하는 최대 44GB 분산 가상 RAM 풀링.</td>
              </tr>
              <tr>
                <td><strong>모바일 온디바이스 AI &amp; 오디오</strong></td>
                <td>Termux-Diffusion, Termux-BitNet, Termux-STT, Termux-TTS, Termux-Train, Termux-LlamaCpp, Termux-Vision</td>
                <td>C++17, C, ARM64 NEON &amp; DotProd, Vulkan 1.3, AmfyUI, VITS Vocoder, Whisper.cpp, SafeTensors. 100% 로컬 고성능 AI 학습/추론.</td>
              </tr>
              <tr>
                <td><strong>모바일 시스템 자동화</strong></td>
                <td>Termux-Playwright</td>
                <td>Chrome DevTools Protocol (CDP), Android Bionic libc, TermuxWakeLock. 비루팅 모바일 5W 초저전력 24시간 무중단 웹 자동화.</td>
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
                <td><strong>InfraIndex | GPU Scanner</strong></td>
                <td><a href="https://infraindex-platform-front.vercel.app/" target="_blank" class="pdf-link">Web App 실행</a></td>
                <td>- (내부 시스템)</td>
                <td>Private Enterprise Repo</td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td><a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">npm: ameva-mcp-hub</a></td>
                <td><a href="https://uno-km.vercel.app/lib/mcp/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-mcp-hub" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td><a href="https://www.npmjs.com/package/@ameva/sentinel" target="_blank" class="pdf-link">npm: @ameva/sentinel</a></td>
                <td><a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-sentinel" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td><a href="https://pypi.org/project/ameva-forge/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/@ameva/forge" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Runtime</strong></td>
                <td><a href="https://pypi.org/project/ameva-runtime/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/@ameva/runtime" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/runtime/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-runtime" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Cluster</strong></td>
                <td><a href="https://pypi.org/project/ameva-cluster/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/@ameva/cluster" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/cluster/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-cluster" target="_blank" class="pdf-link">GitHub Repo</a></td>
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
                <td><strong>Termux-TTS</strong></td>
                <td><a href="https://pypi.org/project/termux-tts/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-tts" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/tts/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/termux-tts" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Termux-Train</strong></td>
                <td><a href="https://pypi.org/project/termux-train/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/termux-train" target="_blank" class="pdf-link">npm</a></td>
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

          <div style="margin-top: 8px; text-align: center; font-size: 8.8px; color: #64748b;">
            © 2026 Eunho Kim (@uno-km). AMEVA Open-Source Foundation (AOSF). All Rights Reserved.
          </div>
          <div class="pdf-footer">Page 10 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>
      `;

      wrapper.appendChild(container);
      document.body.appendChild(wrapper);

      // Wait for layout calculation and font rendering
      await new Promise(resolve => setTimeout(resolve, 300));

      const opt = {
        margin: [5, 5, 5, 5],
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
