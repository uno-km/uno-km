/**
 * shared/portfolio-pdf.js
 * AMEVA Open-Source Foundation & Eunho Kim Official Portfolio PDF Generator
 * High-precision, zero-drift Korean typography & hyperlinked layout engine
 * 16 Ecosystem Projects & Disaggregated On-Device AI Architecture (Strict 10 Pages)
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
        font-size: 10px;
        line-height: 1.40;
        box-sizing: border-box;
        box-shadow: 0 10px 25px rgba(0,0,0,0.35);
      `;

      container.innerHTML = `
        <style>
          .pdf-page {
            box-sizing: border-box;
            width: 760px;
            height: 1040px;
            max-height: 1040px;
            padding: 16px 22px;
            background: #ffffff;
            page-break-after: always;
            page-break-inside: avoid;
            break-after: page;
            break-inside: avoid;
            overflow: hidden;
            position: relative;
          }
          .pdf-page:last-child {
            page-break-after: avoid;
            break-after: avoid;
          }
          .pdf-header {
            border-bottom: 2px solid #004499;
            padding-bottom: 3px;
            margin-bottom: 5px;
          }
          .pdf-title {
            font-size: 16.5px;
            font-weight: 800;
            color: #004499;
            margin: 0 0 1px 0;
          }
          .pdf-profile-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
            font-size: 8.8px;
            background: #f8fafc;
            padding: 5px 9px;
            border: 1px solid #e2e8f0;
            border-radius: 3px;
            margin-bottom: 5px;
          }
          .pdf-profile-item {
            margin: 0;
          }
          .pdf-profile-item strong {
            color: #0f172a;
          }
          .pdf-h2 {
            font-size: 10.5px;
            font-weight: 700;
            color: #0f172a;
            border-bottom: 1.2px solid #cbd5e1;
            padding-bottom: 1.5px;
            margin: 5px 0 3px 0;
          }
          .pdf-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2px 0;
            font-size: 7.1px;
            line-height: 1.20;
          }
          .pdf-table th, .pdf-table td {
            border: 1px solid #cbd5e1;
            padding: 1.8px 3px;
            text-align: left;
            vertical-align: middle;
          }
          .pdf-table th {
            background: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 7.1px;
            text-align: center;
          }
          .pdf-table td.center {
            text-align: center;
          }
          .pdf-table td.num {
            text-align: right;
            font-family: monospace;
            font-size: 7.0px;
          }
          .pdf-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 3.5px solid #004499;
            padding: 8px 10px;
            margin-bottom: 10px;
            border-radius: 3px;
            font-size: 10px;
            line-height: 1.45;
          }
          .pdf-card-title {
            font-size: 11.8px;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 3px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .pdf-tag {
            font-size: 8.2px;
            font-weight: 700;
            padding: 1.5px 5px;
            border-radius: 3px;
            background: #e0f2fe;
            color: #0369a1;
          }
          .pdf-code {
            font-family: monospace;
            background: #f1f5f9;
            padding: 1px 3px;
            border-radius: 2px;
            font-size: 7.1px;
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
            padding: 3.5px 7px;
            border-radius: 3px;
            margin-top: 4px;
            font-size: 9.2px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .pdf-bench-box {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 3.5px 7px;
            border-radius: 3px;
            margin: 3.5px 0;
            font-size: 9.2px;
            color: #166534;
          }
          .pdf-footer {
            font-size: 7.8px;
            color: #94a3b8;
            text-align: right;
            margin-top: 5px;
            border-top: 1px solid #f1f5f9;
            padding-top: 2px;
          }
        </style>

        <!-- ==================== PAGE 1: 표지 및 16대 프로젝트 종합 실측 명세 ==================== -->
        <div class="pdf-page">
          <div class="pdf-header">
            <h1 class="pdf-title">엔지니어링 포트폴리오 (Engineering Portfolio)</h1>
            <div style="font-size:9.2px; color:#64748b;">AMEVA Open-Source Foundation (AOSF) 기술 생태계 &amp; 프로젝트 명세서 (기준일자: ${todayStr})</div>
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
                <th style="width: 16%;">프로젝트 / 패키지</th>
                <th style="width: 13%;">분류 (Domain)</th>
                <th style="width: 7%;">배포 버전</th>
                <th style="width: 7%;">NPM</th>
                <th style="width: 7%;">PyPI</th>
                <th style="width: 8%;">총합</th>
                <th style="width: 42%;">비고 / 외부 활용 실측 분석 (pip · npm · GitHub)</th>
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
                <td>AmfyUI 스튜디오 · Sovereign 6.0B DiT 가속 · 1280x720 HD 벤치마크 · SurfaceFlinger 보호 · 클론 511회</td>
              </tr>
              <tr>
                <td><strong>Termux-BitNet</strong></td>
                <td>1.58-bit 온디바이스 LLM</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v2.1.0'}</code></td>
                <td class="num">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].npm) || '4,692'}</td>
                <td class="num">${(liveData['termux-bitnet'] && liveData['termux-bitnet'].pypi) || '3,544'}</td>
                <td class="num"><strong>${(liveData['termux-bitnet'] && liveData['termux-bitnet'].total) || '8,236'}</strong></td>
                <td>1.58비트 저전력 추론 · AMEVA-Cluster 분산 3진수 풀링 · 독자 NEON SIMD 어셈블리 검증</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Runtime</strong></td>
                <td>온디바이스 런타임 코어</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].version) || 'v2.8.0'}</code></td>
                <td class="num">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].npm) || '4,022'}</td>
                <td class="num">${(liveData['ameva-runtime'] && liveData['ameva-runtime'].pypi) || '4,154'}</td>
                <td class="num"><strong>${(liveData['ameva-runtime'] && liveData['ameva-runtime'].total) || '8,176'}</strong></td>
                <td>6-모달리티 네이티브 ABI 및 Vulkan 1.3 코어 · Galaxy 5대 기기 전수 검증 · 번들 격리 · 클론 528회</td>
              </tr>
              <tr>
                <td><strong>Termux-STT</strong></td>
                <td>음성인식 &amp; 화자 분리</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.4.0'}</code></td>
                <td class="num">${(liveData['termux-stt'] && liveData['termux-stt'].npm) || '4,424'}</td>
                <td class="num">${(liveData['termux-stt'] && liveData['termux-stt'].pypi) || '3,717'}</td>
                <td class="num"><strong>${(liveData['termux-stt'] && liveData['termux-stt'].total) || '8,141'}</strong></td>
                <td>Hybrid GPU-Encoder / CPU-Decoder 가속 · 무-PyTorch 2-화자 분리 · 자막 추출 · 클론 442회</td>
              </tr>
              <tr>
                <td><strong>Termux-LlamaCpp</strong></td>
                <td>GGUF LLM 서버</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.4.0'}</code></td>
                <td class="num">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].npm) || '3,680'}</td>
                <td class="num">${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].pypi) || '3,671'}</td>
                <td class="num"><strong>${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].total) || '7,351'}</strong></td>
                <td>사전 빌드 바이너리 · OpenAI 규격 호환 API · Adreno OpenCL 디스패치 · 클론 1,397회 (최다)</td>
              </tr>
              <tr>
                <td><strong>Termux-Train</strong></td>
                <td>온디바이스 딥러닝 학습</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-train'] && liveData['termux-train'].version) || 'v2.0.1'}</code></td>
                <td class="num">${(liveData['termux-train'] && liveData['termux-train'].npm) || '1,684'}</td>
                <td class="num">${(liveData['termux-train'] && liveData['termux-train'].pypi) || '3,735'}</td>
                <td class="num"><strong>${(liveData['termux-train'] && liveData['termux-train'].total) || '5,419'}</strong></td>
                <td>유니파이드 6-모달리티 학습(Diffusion, Vision, STT 등) · AMEVA-Cluster 44GB 분산 RAM 풀링 탑재</td>
              </tr>
              <tr>
                <td><strong>Termux-Playwright</strong></td>
                <td>모바일 웹 자동화 &amp; CDP</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.81.2'}</code></td>
                <td class="num">${(liveData['termux-playwright'] && liveData['termux-playwright'].npm) || '1,858'}</td>
                <td class="num">${(liveData['termux-playwright'] && liveData['termux-playwright'].pypi) || '3,163'}</td>
                <td class="num"><strong>${(liveData['termux-playwright'] && liveData['termux-playwright'].total) || '5,021'}</strong></td>
                <td>안드로이드 Chromium CDP 직접 제어 · WakeLock 표준화 · 5W 저전력 백그라운드 크롤링 운용</td>
              </tr>
              <tr>
                <td><strong>Termux-TTS</strong></td>
                <td>온디바이스 음성 합성</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-tts'] && liveData['termux-tts'].version) || 'v1.6.0'}</code></td>
                <td class="num">${(liveData['termux-tts'] && liveData['termux-tts'].npm) || '2,080'}</td>
                <td class="num">${(liveData['termux-tts'] && liveData['termux-tts'].pypi) || '2,724'}</td>
                <td class="num"><strong>${(liveData['termux-tts'] && liveData['termux-tts'].total) || '4,804'}</strong></td>
                <td>Studio Vulkan 1.3 GPU 엔진 · VITS 신경망 모델 탑재 · 한국어/영어 프로비저닝 · Cluster 분산 풀링</td>
              </tr>
              <tr>
                <td><strong>Termux-Vision</strong></td>
                <td>컴퓨터 비전 &amp; VLM</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.7.0'}</code></td>
                <td class="num">${(liveData['termux-vision'] && liveData['termux-vision'].npm) || '2,589'}</td>
                <td class="num">${(liveData['termux-vision'] && liveData['termux-vision'].pypi) || '1,966'}</td>
                <td class="num"><strong>${(liveData['termux-vision'] && liveData['termux-vision'].total) || '4,555'}</strong></td>
                <td>UltraFace SSD ONNX 얼굴인식 · SmolVLM 멀티모달 질의응답 · Cluster 풀링 · 클론 571회</td>
              </tr>
              <tr>
                <td><strong>Termux-AIChain</strong></td>
                <td>초경량 에이전트 체인</td>
                <td class="center"><code class="pdf-code">${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.4'}</code></td>
                <td class="num">${(liveData['termux-aichain'] && liveData['termux-aichain'].npm) || '2,519'}</td>
                <td class="num">${(liveData['termux-aichain'] && liveData['termux-aichain'].pypi) || '1,910'}</td>
                <td class="num"><strong>${(liveData['termux-aichain'] && liveData['termux-aichain'].total) || '4,429'}</strong></td>
                <td>50KB 미만 Zero-Dependency DAG 엔진 · ameva-runtime 하드웨어 바인딩 · 모바일 에이전트 파이프라인</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td>웹 보안 클라이언트 관측</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.3.0'}</code></td>
                <td class="num">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].npm) || '663'}</td>
                <td class="num">${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].pypi) || '562'}</td>
                <td class="num"><strong>${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].total) || '1,225'}</strong></td>
                <td>0-Data 개인정보 비수집 봇 탐지 · HMAC-SHA256 미들웨어 · 자동화 스크래퍼 선별 차단 레이어 연동</td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td>WASI 인메모리 MCP 허브</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.1.4'}</code></td>
                <td class="num">${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].npm) || '1,061'}</td>
                <td class="center" style="font-size:6.8px; color:#64748b;">NPM 전용</td>
                <td class="num"><strong>${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].total) || '1,061'}</strong></td>
                <td>호스트 오염 없는 WASM 인메모리 도구 실행 엔진 · Claude Desktop / Cursor 도구 공급 인프라 연동</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td>브라우저 WebGPU 딥러닝</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.1'}</code></td>
                <td class="num">${(liveData['ameva-forge'] && liveData['ameva-forge'].npm) || '373'}</td>
                <td class="num">${(liveData['ameva-forge'] && liveData['ameva-forge'].pypi) || '278'}</td>
                <td class="num"><strong>${(liveData['ameva-forge'] && liveData['ameva-forge'].total) || '651'}</strong></td>
                <td>PyTorch 호환 WebGPU Autograd 텐서 엔진 · 서버 비용 0원 클라이언트 GPU 딥러닝 인터랙티브 AI 가속</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Cluster</strong></td>
                <td>분산 메모리 풀링 런타임</td>
                <td class="center"><code class="pdf-code">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].version) || 'v1.0.1'}</code></td>
                <td class="num">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].npm) || '99'}</td>
                <td class="num">${(liveData['ameva-cluster'] && liveData['ameva-cluster'].pypi) || '112'}</td>
                <td class="num"><strong>${(liveData['ameva-cluster'] && liveData['ameva-cluster'].total) || '211'}</strong></td>
                <td>단일 단말 RAM 한계 돌파를 위한 최대 44GB 대칭 분산 가상 RAM 풀링 · 6-모달리티 텐서 샤딩 · RPC 격리</td>
              </tr>
              <tr>
                <td><strong>AMEVA Workstation</strong></td>
                <td>브라우저 온디바이스 앱</td>
                <td class="center"><code class="pdf-code">Live App</code></td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center"><strong>Live App</strong></td>
                <td>서버 통신 0% WebGPU LLM(Qwen2.5) 추론 · 3초 맵리듀스 문서 요약 및 무손실 인앱 편집 · 클론 141회</td>
              </tr>
              <tr>
                <td><strong>Infra-Index Platform</strong></td>
                <td>클라우드 인프라 시황</td>
                <td class="center"><code class="pdf-code">Live App</code></td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center" style="color:#64748b;">-</td>
                <td class="center"><strong>Live App</strong></td>
                <td>글로벌 69개 클라우드 GPU/인프라 실시간 시세 집계 및 AI 반도체 시황 인텔리전스 · 프라이빗 아키텍처</td>
              </tr>
            </tbody>
          </table>

          <h2 class="pdf-h2">2. AMEVA 생태계 정의 및 저수준 하드웨어 엔지니어링 (Architecture &amp; Engineering)</h2>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 6px; margin: 2px 0 3px 0;">
            <!-- Box 1: AMEVA 공식 정의 및 핵심 가치 (사용자 요청 원문 100% 무변경 수록) -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid #004499; padding:4px 6px; border-radius:3px; font-size:6.9px; line-height:1.20;">
              <div style="font-weight:700; color:#0f172a; margin-bottom:1px; font-size:7.4px;">AMEVA 공식 정의 및 핵심 가치 (Autonomous Multi-Agent Edge-AI Ecosystem)</div>
              <div>• <strong>생물학적 기원 (Amoeba):</strong> 가장 척박하고 제한된 환경에서도 형태를 유연하게 바꾸며 자율 증식·적응하는 단세포 생명체 아메바(Amoeba)에서 유래.</div>
              <div style="margin-top:1px;">• <strong>아크로님 정의 (Acronym):</strong></div>
              <div style="padding-left:4px; margin:1px 0;">
                - <strong>A (Autonomous):</strong> 빅테크 클라우드 서버와 외부 네트워크 통신을 배제한 100% 로컬 자율 의사결정<br>
                - <strong>M (Multi-Agent):</strong> 6-모달리티(LLM, Diffusion, VLM, STT, TTS, Train) 계층적 에이전트 오케스트레이션<br>
                - <strong>E (Edge-Native):</strong> 상용 GPU 서버 비용 0원을 달성하는 순수 클라이언트 엣지 컴퓨팅<br>
                - <strong>V (Virtualized):</strong> 격리된 WASM 인메모리 샌드박스 및 P2P 가상 분산 런타임 (Cluster)<br>
                - <strong>A (Automation):</strong> 스마트폰 및 브라우저 하드웨어를 활용한 24시간 무중단 자율화
              </div>
              <div style="margin-top:1px;">• <strong>핵심 가치:</strong> 단 1바이트의 개인·기업 기밀 데이터도 외부로 전송하지 않는 완전한 데이터 주권(Data Sovereignty) 확보.</div>
            </div>

            <!-- Box 2: Android Termux 환경 채택 배경 및 실리콘 계층 최적화 -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid #004499; padding:4px 6px; border-radius:3px; font-size:6.9px; line-height:1.20;">
              <div style="font-weight:700; color:#0f172a; margin-bottom:1px; font-size:7.4px;">Android Termux 환경 채택 배경 및 실리콘 계층 최적화</div>
              <div>• <strong>Termux 환경 채택 배경:</strong> 루팅(Rooting) 없이 표준 안드로이드 환경에서 POSIX Bionic libc 및 시스템 저수준 API에 직접 접근하여, 5W 미만의 저전력 환경에서 공기계 단말을 상시 유효 노드로 운용하는 전력 효율성 확보.</div>
              <div style="margin-top:1px;">• <strong>저수준 하드웨어 아키텍처 최적화 (Silicon-Level Optimization):</strong></div>
              <div style="padding-left:4px; margin:1px 0;">
                - <strong>Qualcomm Snapdragon (Adreno):</strong> 32KB 로컬 메모리(LDS) 경계 조건 방어, Vulkan 드라이버 컨텍스트 안정화 및 OpenCL 네이티브 디스패치 직접 구현.<br>
                - <strong>Samsung Exynos (ARM Mali):</strong> Valhall 아키텍처 커널 타임아웃 방어 및 Vulkan 셰이더 연산 수치 정밀도 보정.<br>
                - <strong>순수 ARM64 NEON 커널 내재화:</strong> 대형 외부 의존성(OpenCV 등)을 배제하고, 순수 C++ 및 ARMv8.2-A NEON/DotProd 어셈블리 직접 설계를 통한 초경량 가속 엔진 구축.
              </div>
            </div>
          </div>

          <h2 class="pdf-h2">3. 글로벌 오픈소스 코어 업스트림 기여 실적 (Upstream Open-Source Contributions)</h2>
          <table class="pdf-table" style="font-size:6.8px; margin-top:2px;">
            <thead>
              <tr>
                <th style="width: 25%;">대상 조직 / 프로젝트</th>
                <th style="width: 26%;">기여 번호 및 연구 명칭</th>
                <th style="width: 49%;">핵심 기여 내용 및 기술적 성과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ggml.ai / OpenAI 아키텍처</strong><br><span style="color:#64748b; font-size:6.5px;">(ggerganov/whisper.cpp)</span></td>
                <td><strong>[whisper.cpp #4089]</strong><br>모바일 SoC 하이브리드 스플릿 모드<br><code class="pdf-code">--split-mode</code></td>
                <td>모바일 이종 컴퓨팅에서 트랜스포머 인코더는 Vulkan GPU, 디코더는 CPU 분할 처리하여 단말 발열을 억제하고 연산 지연시간 개선 (AOSF-TR-2026-UPSTREAM-WHISPER-4089).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:6.5px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #551]</strong><br>ARM 아키텍처 i2_s 양자화<br>텐서 안정성 복원</td>
                <td>ARM 구동 시 발생하던 삼진 텐서 메모리 정렬 오류 및 텍스트 출력 결함 분석·수정, 비-AVX2 CPU 폴백 루틴 복원 (AOSF-TR-2026-UPSTREAM-BITNET-551).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:6.5px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #624]</strong><br>ARMv8.2-A NEON 1x4_32W<br><code class="pdf-code">sdot</code> 가속 커널 완주</td>
                <td>Signed Dot Product(sdot) 명령어를 활용한 하드웨어 가속 텐서 연산 최적화 커널 및 안드로이드 NDK 빌드 툴체인 기여 (AOSF-TR-2026-UPSTREAM-BITNET-624).</td>
              </tr>
              <tr>
                <td><strong>ggml.ai / OpenAI 아키텍처</strong><br><span style="color:#64748b; font-size:6.5px;">(ggerganov/whisper.cpp)</span></td>
                <td><strong>[whisper.cpp 패치]</strong><br>Adreno 6xx Vulkan LDS<br>하드웨어 제한 안전 폴백</td>
                <td>스냅드래곤 GPU 32KB 로컬 데이터 공유(LDS) 하드웨어 제약 드라이버 비정상 종료 방지 및 자동 표준 어텐션 우회 안전 계층 구축 (AOSF-TR-2026-WHISPER-ADRENO6XX-FALLBACK).</td>
              </tr>
              <tr>
                <td><strong>Microsoft Research</strong><br><span style="color:#64748b; font-size:6.5px;">(microsoft/BitNet)</span></td>
                <td><strong>[BitNet #633]</strong><br>ARM64 삼진 가중치 역양자화<br>정밀도 개선 및 디스패처 기여</td>
                <td>ARM64 런타임 삼진 가중치 역양자화 연산 수치 불안정 정밀 보정 및 모델 구조별 동적 활성화 함수 디스패처 업스트림 기여 (AOSF-TR-2026-UPSTREAM-BITNET-633).</td>
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
              <span class="pdf-tag">클라우드 인프라 관측 &amp; 분석</span>
            </div>
            <div><strong>설명:</strong> 글로벌 69개 클라우드 인프라 제공사의 GPU 및 컴퓨팅 자원 시세를 실시간으로 수집하고, 전 세계 AI 반도체 시황을 종합 분석하여 제공하는 엔터프라이즈 인프라 관측 플랫폼.</div>
            <div><strong>기술 스택:</strong> Next.js 14, React 18, TypeScript, Tailwind CSS, Recharts, Cheerio, RSS Parser, Vercel Edge</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['infra-index platform'] && liveData['infra-index platform'].version) || 'Live App'} | <strong>배포일자:</strong> ${(liveData['infra-index platform'] && liveData['infra-index platform'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> GPU 클라우드 업체마다 가격 체계가 다르고 변동 폭이 커서 어떤 서버를 빌려야 가장 저렴한지 일일이 수동으로 비교해야 하는 비효율이 존재함.</div>
            <div><strong>해결 방식:</strong> 글로벌 69개 인프라 기업의 실시간 가격과 뉴스 데이터를 주기적으로 크롤링하여, 전 세계 최저가 GPU 순위와 반도체 시장 동향을 하나의 대시보드에 즉시 제공함.</div>
            <div style="margin-top:4px;"><strong>실제 사용자가 쓰는 핵심 기능:</strong></div>
            <ul style="margin:2px 0 4px 18px; padding:0;">
              <li><strong>글로벌 69개사 GPU 최저가 비교:</strong> H100, A100 등 주요 AI GPU의 시간당 대여 비용을 한눈에 비교하고 가장 저렴한 클라우드를 즉시 추천.</li>
              <li><strong>실시간 반도체 뉴스 &amp; 시황 분석:</strong> 빅테크 기업의 칩 수급 동향과 인프라 이슈를 자동 수집하여 요약 리포트로 제공.</li>
              <li><strong>비용 최적화 계산기:</strong> 자체 보유 서버 구축 비용과 클라우드 대여 비용을 비교하여 월간/연간 예상 절감액을 자동 계산.</li>
            </ul>
            <div class="pdf-link-bar">
              <span><strong>[Web] 서비스 접속:</strong> <a href="https://infra-index.com/" target="_blank" class="pdf-link">https://infra-index.com/</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 2 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 3: 2.1 AMEVA-Runtime & 2.2 Termux-Diffusion ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 온디바이스 엔진 &amp; 런타임 코어 (On-Device Runtime &amp; Diffusion)</h2>

          <!-- 2.1 AMEVA-Runtime -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.1 AMEVA-Runtime</span>
              <span class="pdf-tag">온디바이스 네이티브 런타임 코어</span>
            </div>
            <div><strong>설명:</strong> 모바일 기기에서 LLM, 이미지 생성(Diffusion), 음성인식(STT), 음성합성(TTS), 컴퓨터 비전(Vision) 등 6가지 AI 모델이 단일 환경에서 구동되도록 C/C++ 네이티브 계층과 Vulkan 1.3 하드웨어 가속을 통합 관리하는 런타임 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, Vulkan 1.3, CMake, POSIX Threads, Bionic Libc, Python C-API</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva-runtime'] && liveData['ameva-runtime'].version) || 'v2.8.0'} | <strong>배포일자:</strong> ${(liveData['ameva-runtime'] && liveData['ameva-runtime'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 기기에서 여러 AI 모델을 돌리려면 모델마다 제각각 다른 라이브러리와 C/C++ 컴파일 환경이 필요해 설치가 복잡하고 메모리 충돌이 자주 발생함.</div>
            <div><strong>해결 방식:</strong> 안드로이드 단말에 최적화된 사전 컴파일 바이너리 번들 격리 구조를 구축하고, 5개 이상의 복합 모달리티가 충돌 없이 안전하게 GPU 자원을 나누어 쓰도록 네이티브 브릿지를 일원화함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> Samsung Galaxy S20 (Snapdragon 865) 실기기에서 5개 복합 모델 동시 로드 시 크래시 0건 달성, Vulkan 셰이더 컴파일 지연시간 40% 단축.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-runtime/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-runtime/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-runtime" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-runtime</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-runtime" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-runtime</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/runtime/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.2 Termux-Diffusion -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.2 Termux-Diffusion</span>
              <span class="pdf-tag">모바일 생성형 AI (Stable Diffusion &amp; DiT)</span>
            </div>
            <div><strong>설명:</strong> 스마트폰에서 별도의 유료 API나 고성능 PC 없이도 텍스트 입력만으로 고품질 이미지를 생성할 수 있도록 특화된 온디바이스 생성형 AI 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, Vulkan SDK, GLSL Compute Shaders, Python (CLI), Flask (AmfyUI)</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].version) || 'v2.0.1'} | <strong>배포일자:</strong> ${(liveData['termux-diffusion'] && liveData['termux-diffusion'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 이미지 생성 모델은 연산량이 너무 방대하여 PC GPU가 필수적이었으며, 스마트폰에서 돌리면 발열과 메모리 부족(OOM)으로 시스템 UI가 멈추거나 꺼짐.</div>
            <div><strong>해결 방식:</strong> GPU 메모리 타일링 기법과 Safe-Mode를 도입하여 화면 렌더링(SurfaceFlinger)용 GPU 자원을 보존하면서, 1280x720 고해상도 생성과 6.0B DiT 모델 분할 업로드를 지원함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 512x512 해상도 기준 스텝당 생성 속도 1.8초, 1280x720 HD 고해상도 안정 생성, 스마트폰 화면 멈춤 현상 0건 검증.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-diffusion/" target="_blank" class="pdf-link">https://pypi.org/project/termux-diffusion/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-diffusion" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-diffusion</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-diffusion" target="_blank" class="pdf-link">https://github.com/uno-km/termux-diffusion</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/diffusion/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 3 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 4: 2.3 Termux-BitNet & 2.4 Termux-LlamaCpp ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 온디바이스 엔진 &amp; 런타임 코어 (BitNet &amp; LlamaCpp)</h2>

          <!-- 2.3 Termux-BitNet -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.3 Termux-BitNet</span>
              <span class="pdf-tag">1.58-bit 초저전력 온디바이스 LLM</span>
            </div>
            <div><strong>설명:</strong> 마이크로소프트의 1.58비트 3진수(-1, 0, +1) 가중치 모델을 스마트폰 CPU/NPU에서 연산할 수 있도록 ARM NEON 최적화 커널을 구현한 초경량 언어 모델 엔진.</div>
            <div><strong>기술 스택:</strong> C++17, ARMv8.2-A NEON Int8 Dot-Product, Python CFFI, Bash Toolchain</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].version) || 'v2.1.0'} | <strong>배포일자:</strong> ${(liveData['termux-bitnet'] && liveData['termux-bitnet'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 일반적인 8비트/16비트 LLM은 배터리 소모가 극심하고 모바일 AP 연산 한계로 인해 지속적인 실시간 대화 추론 시 단말 온도가 급상승함.</div>
            <div><strong>해결 방식:</strong> 곱셈 연산 대신 덧셈 연산만으로 동작하는 1.58-bit 구조에 최적화된 독자 NEON 어셈블리 루틴을 개발하고, AMEVA-Cluster 분산 메모리 풀링을 연동하여 기기 부담을 분산함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> Galaxy S20 기준 초당 22.4 토큰(tokens/sec) 생성 속도 달성, 기존 FP16 모델 대비 소비 전력 72% 절감.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-bitnet/" target="_blank" class="pdf-link">https://pypi.org/project/termux-bitnet/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-bitnet" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-bitnet</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-bitnet" target="_blank" class="pdf-link">https://github.com/uno-km/termux-bitnet</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/bitnet/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.4 Termux-LlamaCpp -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.4 Termux-LlamaCpp</span>
              <span class="pdf-tag">모바일 로컬 GGUF LLM API 서버</span>
            </div>
            <div><strong>설명:</strong> 스마트폰을 독립형 AI API 서버로 탈바꿈시켜주는 고성능 GGUF 양자화 모델 추론 엔진. 복잡한 빌드 과정 없이 명령어 한 줄로 즉시 구동 가능.</div>
            <div><strong>기술 스택:</strong> C++17, OpenCL (Adreno GPU), Vulkan Backend, Python Server, REST API</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].version) || 'v1.4.0'} | <strong>배포일자:</strong> ${(liveData['termux-llamacpp'] && liveData['termux-llamacpp'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 기기에서 llama.cpp를 빌드하려면 C++ 컴파일러 설정과 안드로이드 NDK 종속성 문제로 초보자가 실행하기 매우 어려웠음.</div>
            <div><strong>해결 방식:</strong> 스냅드래곤 Adreno GPU용 OpenCL 가속 바이너리를 사전 빌드하여 원클릭 실행을 지원하고, 표준 OpenAI 규격(/v1/chat/completions) 엔드포인트를 내장하여 외부 앱 연동을 간소화함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> Qwen2.5-3B 모델 기준 초당 14.8 토큰 추론, 5개 동시 연결 API 벤치마크 안정 처리.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-llamacpp/" target="_blank" class="pdf-link">https://pypi.org/project/termux-llamacpp/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-llamacpp" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-llamacpp</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-llamacpp" target="_blank" class="pdf-link">https://github.com/uno-km/termux-llamacpp</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/llamacpp/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 4 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 5: 2.5 Termux-STT & 2.6 Termux-TTS ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 온디바이스 음성 AI 파이프라인 (STT &amp; TTS)</h2>

          <!-- 2.5 Termux-STT -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.5 Termux-STT</span>
              <span class="pdf-tag">온디바이스 음성인식 &amp; 화자 분리</span>
            </div>
            <div><strong>설명:</strong> 녹음된 음성이나 실시간 대화를 텍스트로 즉시 변환하고, 누가 말했는지 화자를 분리해내는 고정밀 모바일 음성 인식 솔루션.</div>
            <div><strong>기술 스택:</strong> C++17, Vulkan 1.3, whisper.cpp Core, PyTorch-free Spectral Clustering</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].version) || 'v1.4.0'} | <strong>배포일자:</strong> ${(liveData['termux-stt'] && liveData['termux-stt'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 음성 파일에서 말하는 사람을 구분(화자 분리)하려면 기가바이트급의 무거운 PyTorch와 대형 라이브러리가 필요해 모바일 탑재가 사실상 불가능했음.</div>
            <div><strong>해결 방식:</strong> PyTorch 의존성을 완전히 제거하고 순수 C++ 수치 연산으로 2-화자 분리 알고리즘을 자체 구현함. Whisper GPU 인코더 가속 파이프라인과 자막(.srt/.vtt) 직접 추출 기능을 내장함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 10분 회의 음성 기준 38초 만에 텍스트 및 자막 추출 완료(실시간 대비 15배속), 화자 식별 정확도 94.2% 검증.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-stt/" target="_blank" class="pdf-link">https://pypi.org/project/termux-stt/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-stt" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-stt</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-stt" target="_blank" class="pdf-link">https://github.com/uno-km/termux-stt</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/stt/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.6 Termux-TTS -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.6 Termux-TTS</span>
              <span class="pdf-tag">온디바이스 신경망 음성 합성 (TTS)</span>
            </div>
            <div><strong>설명:</strong> 자연스러운 사람의 목소리로 텍스트를 읽어주는 신경망 음성 합성 엔진. 외부 클라우드 통신 없이 기기 내부에서 한국어 및 영어를 실시간으로 소리로 변환.</div>
            <div><strong>기술 스택:</strong> C++17, Vulkan 1.3, VITS Neural Network, piper-tts Core, ALSA/PulseAudio</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-tts'] && liveData['termux-tts'].version) || 'v1.6.0'} | <strong>배포일자:</strong> ${(liveData['termux-tts'] && liveData['termux-tts'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 기기 기본 음성 합성기는 기계음이 심하고 감정이 부자연스러우며, 고품질 신경망 모델은 연산 지연시간이 길어 실시간 안내가 어려웠음.</div>
            <div><strong>해결 방식:</strong> 고품질 VITS 음향 모델을 모바일 단말에 맞게 최적화하고, Vulkan GPU 가속을 적용하여 텍스트 입력 즉시 0.1초 만에 음성을 스트리밍 생성하는 엔진을 완성함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 한국어 단문 기준 첫 음성 출력 지연시간(TTFB) 95ms 달성, 실시간 합성 배속비 0.08 RTF 기록.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-tts/" target="_blank" class="pdf-link">https://pypi.org/project/termux-tts/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-tts" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-tts</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-tts" target="_blank" class="pdf-link">https://github.com/uno-km/termux-tts</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/tts/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 5 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 6: 2.7 Termux-Vision & 2.8 Termux-Train ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 비전 멀티모달 &amp; 온디바이스 학습 (Vision &amp; Train)</h2>

          <!-- 2.7 Termux-Vision -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.7 Termux-Vision</span>
              <span class="pdf-tag">컴퓨터 비전 &amp; 모바일 VLM (Vision-LLM)</span>
            </div>
            <div><strong>설명:</strong> 스마트폰 카메라 영상에서 사람의 얼굴과 사물을 실시간 검출하고, 사진을 보여주면 내용을 이해하여 한국어로 대답하는 시각-언어 멀티모달(VLM) 엔진.</div>
            <div><strong>기술 스택:</strong> ONNX Runtime Mobile, UltraFace SSD, SmolVLM, Python, PIL/Pillow</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].version) || 'v1.7.0'} | <strong>배포일자:</strong> ${(liveData['termux-vision'] && liveData['termux-vision'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 모바일 환경에서 OpenCV 같은 대용량 라이브러리를 설치하면 패키지 용량이 수백 MB로 비대해지고, VLM 모델은 모바일 RAM 부족으로 실행이 불가능했음.</div>
            <div><strong>해결 방식:</strong> 무거운 OpenCV를 전면 배제하고 경량 ONNX 런타임으로 얼굴 검출 엔진(UltraFace)을 구현했으며, SmolVLM의 메모리 네임스페이스를 격리하여 4GB 램 단말에서도 안전하게 질의응답을 처리함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 카메라 영상 기준 초당 30fps 얼굴 추적 성공, 사진 질의응답 처리 속도 2.1초 달성.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-vision/" target="_blank" class="pdf-link">https://pypi.org/project/termux-vision/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-vision" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-vision</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-vision" target="_blank" class="pdf-link">https://github.com/uno-km/termux-vision</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/vision/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.8 Termux-Train -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.8 Termux-Train</span>
              <span class="pdf-tag">온디바이스 딥러닝 학습 &amp; 미세조정</span>
            </div>
            <div><strong>설명:</strong> 서버로 데이터를 보내지 않고 스마트폰 내부에서 개인 데이터(문서, 음성, 이미지)를 학습하여 나만의 전용 AI 모델로 미세조정(Fine-Tuning)하는 모바일 학습 프레임워크.</div>
            <div><strong>기술 스택:</strong> C++17, PyTorch Mobile / LibTorch C++, LoRA, QLoRA, Autograd Engine</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-train'] && liveData['termux-train'].version) || 'v2.0.1'} | <strong>배포일자:</strong> ${(liveData['termux-train'] && liveData['termux-train'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> AI 모델의 역전파(Backpropagation) 학습은 추론보다 3배 이상의 메모리가 필요하여 모바일 기기 단독으로는 메모리 초과로 학습이 불가능했음.</div>
            <div><strong>해결 방식:</strong> 가중치의 극히 일부분만 학습시키는 LoRA 기법을 모바일에 적용하고, AMEVA-Cluster와 연동해 여러 스마트폰의 RAM을 하나로 묶어 44GB 가상 메모리 공간에서 학습을 완주함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 1.5B 언어 모델 대상 1,000건 대화 데이터셋 파인튜닝 40분 만에 손실값(Loss) 1.42로 수렴 완료.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-train/" target="_blank" class="pdf-link">https://pypi.org/project/termux-train/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-train" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-train</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-train" target="_blank" class="pdf-link">https://github.com/uno-km/termux-train</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/train/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 6 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 7: 2.9 Termux-Playwright & 2.10 Termux-AIChain ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 자동화 에이전트 &amp; 체인 엔진 (Playwright &amp; AIChain)</h2>

          <!-- 2.9 Termux-Playwright -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.9 Termux-Playwright</span>
              <span class="pdf-tag">모바일 웹 자동화 &amp; 브라우저 CDP 제어</span>
            </div>
            <div><strong>설명:</strong> 루팅되지 않은 일반 안드로이드 단말에서 크롬 브라우저를 백그라운드로 실행하고, 사람처럼 웹사이트를 탐색·클릭·스크래핑할 수 있도록 제어하는 자동화 도구.</div>
            <div><strong>기술 스택:</strong> Node.js, Chrome DevTools Protocol (CDP), WebSocket, Chromium Headless</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].version) || 'v1.81.2'} | <strong>배포일자:</strong> ${(liveData['termux-playwright'] && liveData['termux-playwright'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 공식 Playwright 라이브러리는 안드로이드(Bionic libc) 환경을 공식 지원하지 않아 모바일 단말에서 웹 자동화 스크립트를 실행할 수 없었음.</div>
            <div><strong>해결 방식:</strong> Node.js WebSocket을 이용해 안드로이드 크로미움의 CDP 포트에 직결하는 독자 제어 레이어를 구축하고, 절전 모드 방지(WakeLock)를 통합해 24시간 연속 운용이 가능하게 설계함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 소비전력 5W 미만의 공기계 스마트폰에서 24시간 동안 1,200개 웹페이지 무중단 자동 수집 및 스크린샷 캡처 완주.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-playwright/" target="_blank" class="pdf-link">https://pypi.org/project/termux-playwright/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-playwright" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-playwright</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-playwright" target="_blank" class="pdf-link">https://github.com/uno-km/termux-playwright</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/playwright/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.10 Termux-AIChain -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.10 Termux-AIChain</span>
              <span class="pdf-tag">초경량 단일 의존성 에이전트 파이프라인</span>
            </div>
            <div><strong>설명:</strong> 무거운 LangChain이나 LlamaIndex를 대체하여, 모바일 환경에서 여러 AI 도구와 로컬 모델들을 순차적·조건부로 연결해 자율 업무를 수행하는 에이전트 오케스트레이터.</div>
            <div><strong>기술 스택:</strong> 순수 Python 3 (Zero-Dependency), DAG 워크플로우 엔진, JSON Schema</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].version) || 'v1.1.4'} | <strong>배포일자:</strong> ${(liveData['termux-aichain'] && liveData['termux-aichain'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 일반적인 AI 에이전트 프레임워크는 수백 개의 종속성 패키지를 요구하여 설치 용량만 수 GB에 달하고 초기 실행 속도가 수초 이상 지연됨.</div>
            <div><strong>해결 방식:</strong> 외부 종속성이 0개인 순수 50KB 미만의 파이썬 코드로 방향성 비순환 그래프(DAG) 워크플로우 엔진을 직접 개발하여 메모리 낭비를 제로화함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 패키지 용량 48KB, 모바일 초기 실행 시간 0.02초, 복합 에이전트 체인 10단계 연속 실행 완주.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/termux-aichain/" target="_blank" class="pdf-link">https://pypi.org/project/termux-aichain/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/termux-aichain" target="_blank" class="pdf-link">https://www.npmjs.com/package/termux-aichain</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/termux-aichain" target="_blank" class="pdf-link">https://github.com/uno-km/termux-aichain</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/aichain/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 7 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 8: 2.11 AMEVA-Cluster & 2.12 AMEVA-MCP-Hub ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 분산 클러스터 &amp; 인메모리 도구 허브 (Cluster &amp; MCP)</h2>

          <!-- 2.11 AMEVA-Cluster -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.11 AMEVA-Cluster</span>
              <span class="pdf-tag">분산 메모리 풀링 &amp; 엣지 오케스트레이터</span>
            </div>
            <div><strong>설명:</strong> 집이나 사무실에 굴러다니는 구형 스마트폰, 태블릿, 노트북들을 하나의 초고성능 슈퍼컴퓨터처럼 묶어 메모리(RAM)를 공유하는 가상 분산 컴퓨팅 시스템.</div>
            <div><strong>기술 스택:</strong> Python, Asyncio, gRPC/Protobuf, TCP RTT Ping, ZeroMQ, Subprocess Worker</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva-cluster'] && liveData['ameva-cluster'].version) || 'v1.0.1'} | <strong>배포일자:</strong> ${(liveData['ameva-cluster'] && liveData['ameva-cluster'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 개별 스마트폰은 램 용량이 6GB~8GB에 불과해 14B 이상의 거대 AI 모델이나 복합 모델 동시 구동 시 메모리 부족으로 즉시 다운됨.</div>
            <div><strong>해결 방식:</strong> 와이파이 네트워크상의 여러 기기 메모리를 단일 가상 풀로 묶는 대칭형 텐서 샤딩 아키텍처를 구축하여 최대 44GB 가상 메모리 공간을 확보함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> Galaxy 기기 5대를 클러스터로 연동하여 단일 기기로 구동 불가능한 거대 멀티모달 모델 분산 추론 성공, 통신 지연시간 8.4ms 유지.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-cluster/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-cluster/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-cluster" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-cluster</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/ameva-cluster" target="_blank" class="pdf-link">https://github.com/uno-km/ameva-cluster</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/cluster/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.12 AMEVA-MCP-Hub -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.12 AMEVA-MCP-Hub</span>
              <span class="pdf-tag">WASI 샌드박스 인메모리 도구 공급 엔진</span>
            </div>
            <div><strong>설명:</strong> AI 코딩 에이전트(Claude Desktop, Cursor 등)가 컴퓨터를 고장 내지 않고 안전하게 다양한 도구(쉘, 파이썬, 웹 브라우저)를 실행할 수 있도록 보장하는 도구 허브.</div>
            <div><strong>기술 스택:</strong> TypeScript, WASI (WebAssembly), Node.js, JSON-RPC 2.0</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].version) || 'v3.1.4'} | <strong>배포일자:</strong> ${(liveData['ameva-mcp-hub'] && liveData['ameva-mcp-hub'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> AI 모델에게 컴퓨터 파일 제어나 터미널 실행 권한을 줄 경우, 의도치 않은 시스템 파일 삭제나 악성 코드 실행 위험이 존재함.</div>
            <div><strong>해결 방식:</strong> 도구 실행을 호스트 OS와 격리된 WebAssembly 인메모리 가상 샌드박스 내부에서만 수행되도록 원천 통제하여 컴퓨터 시스템 오염을 100% 방지함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 격리된 WASM 환경에서 1,000회 연속 코드 실행 테스트 시 호스트 시스템 침범 0건 달성, 도구 호출 오버헤드 12ms 이내 유지.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-mcp-hub</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/AMEVA-MCP-Hub" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-MCP-Hub</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/mcp-hub/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 8 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 9: 2.13 AMEVA-Forge & 2.14 AMEVA-Sentinel ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">2. 웹 딥러닝 텐서 &amp; 제로-데이터 보안 (Forge &amp; Sentinel)</h2>

          <!-- 2.13 AMEVA-Forge -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.13 AMEVA-Forge</span>
              <span class="pdf-tag">브라우저 WebGPU Autograd 텐서 엔진</span>
            </div>
            <div><strong>설명:</strong> 파이썬이나 복잡한 딥러닝 라이브러리 설치 없이, 웹 브라우저에서 사용자의 그래픽카드(GPU)를 직결 활용해 신경망을 직접 학습시키고 계산하는 순수 웹 딥러닝 엔진.</div>
            <div><strong>기술 스택:</strong> TypeScript, WebGPU Compute Shaders (WGSL), Autograd 역전파 그래프</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].version) || 'v1.0.1'} | <strong>배포일자:</strong> ${(liveData['ameva-forge'] && liveData['ameva-forge'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 웹 브라우저에서 딥러닝을 시연하려면 무거운 백엔드 GPU 서버 비용이 발생하거나, CPU 자바스크립트로 계산하여 화면이 심하게 끊김.</div>
            <div><strong>해결 방식:</strong> 차세대 웹 그래픽 표준인 WebGPU의 WGSL 셰이더로 행렬 곱셈 커널을 자체 구현하고, 자동 미분(Autograd) 엔진을 내장해 서버 비용 0원으로 브라우저 GPU 가속을 실현함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 1024x1024 크기 행렬 연산 기준 순수 자바스크립트 연산 대비 85배 속도 향상, 브라우저 탭 메모리 누수 0KB 검증.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-forge/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-forge/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-forge" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-forge</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Forge</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <!-- 2.14 AMEVA-Sentinel -->
          <div class="pdf-card">
            <div class="pdf-card-title">
              <span>2.14 AMEVA-Sentinel</span>
              <span class="pdf-tag">0-Data 개인정보 비수집 봇 탐지 미들웨어</span>
            </div>
            <div><strong>설명:</strong> 웹사이트에 접속하는 사용자의 개인정보나 IP 주소를 전혀 수집하지 않고도, 매크로 프로그램이나 악성 봇의 비정상 접근을 차단하는 차세대 보안 솔루션.</div>
            <div><strong>기술 스택:</strong> TypeScript, Node.js HTTP Middleware, HMAC-SHA256, Zero-Storage</div>
            <div><strong>배포 버전 / 상태:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].version) || 'v2.3.0'} | <strong>배포일자:</strong> ${(liveData['ameva-sentinel'] && liveData['ameva-sentinel'].date) || '-'}</div>
            <div><strong>기존 문제:</strong> 기존 봇 차단 솔루션은 사용자의 마우스 움직임, IP, 기기 고유값 등 민감한 개인정보를 서버로 전송해 저장하므로 개인정보보호법(GDPR) 저촉 위험이 큼.</div>
            <div><strong>해결 방식:</strong> 클라이언트 브라우저에서 암호화된 시간축 일회용 토큰(HMAC-SHA256)을 생성하여 검증하는 방식을 채택, 서버에 단 1바이트의 개인 식별 데이터도 저장하지 않고 봇을 판별함.</div>
            <div class="pdf-bench-box">
              <strong>실측 검증 성과:</strong> 초당 5,000건의 웹 요청 환경에서 정상 사용자와 자동화 매크로 봇을 99.1% 정확도로 식별, 데이터베이스 저장 비용 0원 유지.
            </div>
            <div class="pdf-link-bar">
              <span><strong>[PyPI]:</strong> <a href="https://pypi.org/project/ameva-sentinel/" target="_blank" class="pdf-link">https://pypi.org/project/ameva-sentinel/</a></span>
              <span><strong>[npm]:</strong> <a href="https://www.npmjs.com/package/ameva-sentinel" target="_blank" class="pdf-link">https://www.npmjs.com/package/ameva-sentinel</a></span>
              <span><strong>[GitHub]:</strong> <a href="https://github.com/uno-km/AMEVA-Sentinel" target="_blank" class="pdf-link">https://github.com/uno-km/AMEVA-Sentinel</a></span>
              <span><strong>[Docs]:</strong> <a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">공식 문서</a></span>
            </div>
          </div>

          <div class="pdf-footer">Page 9 / 10 • 김은호 엔지니어링 포트폴리오</div>
        </div>

        <!-- ==================== PAGE 10: 전체 공식 배포처 및 아키텍처 다이어그램 ==================== -->
        <div class="pdf-page">
          <h2 class="pdf-h2">3. AMEVA 생태계 분산 아키텍처 (Disaggregated Edge AI)</h2>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:9px 12px; border-radius:4px; margin-bottom:12px; font-size:9.5px; line-height:1.5;">
            <div style="font-weight:700; color:#0f172a; margin-bottom:4px;">시스템 통합 구조 (End-to-End Orchestration)</div>
            <div>• <strong>클라이언트 애플리케이션 계층:</strong> AMEVA Workstation(브라우저 WebGPU 기반 오피스 작업) 및 Infra-Index(글로벌 69개 인프라 시황)를 통해 최종 사용자에게 100% 로컬 프라이버시 경험 제공.</div>
            <div>• <strong>분산 런타임 &amp; 오케스트레이션 계층:</strong> AMEVA-Cluster가 모바일 기기 간의 메모리를 묶고(최대 44GB), AMEVA-MCP-Hub가 안전한 WASM 격리 환경에서 도구를 제어하며, Termux-AIChain이 자율 에이전트 워크플로우를 경량 지휘.</div>
            <div>• <strong>네이티브 실리콘 가속 계층:</strong> AMEVA-Runtime 코어 위에서 6-모달리티(Diffusion, BitNet, LlamaCpp, STT, TTS, Vision) 엔진이 스마트폰 하드웨어(Vulkan 1.3 / OpenCL / ARM NEON)를 직결 가속하여 상용 GPU 서버 비용 0원 달성.</div>
          </div>

          <h2 class="pdf-h2">4. 생태계 16대 프로젝트 공식 배포처 &amp; 문서 일람 (Official Links)</h2>
          <table class="pdf-table" style="font-size:7.5px;">
            <thead>
              <tr>
                <th style="width: 25%;">프로젝트명</th>
                <th style="width: 25%;">패키지 배포처</th>
                <th style="width: 25%;">공식 기술 문서</th>
                <th style="width: 25%;">오픈소스 저장소</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AMEVA Workstation</strong></td>
                <td><a href="https://ameva-workstation-web-core.vercel.app/" target="_blank" class="pdf-link">웹 라이브 앱</a></td>
                <td><a href="https://uno-km.vercel.app/workstation" target="_blank" class="pdf-link">소개 페이지</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Workstation-Web" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>Infra-Index Platform</strong></td>
                <td><a href="https://infra-index.com/" target="_blank" class="pdf-link">웹 라이브 서비스</a></td>
                <td><a href="https://infra-index.com/" target="_blank" class="pdf-link">실시간 대시보드</a></td>
                <td>프라이빗 저장소</td>
              </tr>
              <tr>
                <td><strong>AMEVA-Runtime</strong></td>
                <td><a href="https://pypi.org/project/ameva-runtime/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/ameva-runtime" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/runtime/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-runtime" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Cluster</strong></td>
                <td><a href="https://pypi.org/project/ameva-cluster/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/ameva-cluster" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/cluster/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/ameva-cluster" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Forge</strong></td>
                <td><a href="https://pypi.org/project/ameva-forge/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/ameva-forge" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/forge/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Forge" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-Sentinel</strong></td>
                <td><a href="https://pypi.org/project/ameva-sentinel/" target="_blank" class="pdf-link">PyPI</a> / <a href="https://www.npmjs.com/package/ameva-sentinel" target="_blank" class="pdf-link">npm</a></td>
                <td><a href="https://uno-km.vercel.app/lib/sentinel/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-Sentinel" target="_blank" class="pdf-link">GitHub Repo</a></td>
              </tr>
              <tr>
                <td><strong>AMEVA-MCP-Hub</strong></td>
                <td><a href="https://www.npmjs.com/package/ameva-mcp-hub" target="_blank" class="pdf-link">npm (전용)</a></td>
                <td><a href="https://uno-km.vercel.app/lib/mcp-hub/" target="_blank" class="pdf-link">Docs 링크</a></td>
                <td><a href="https://github.com/uno-km/AMEVA-MCP-Hub" target="_blank" class="pdf-link">GitHub Repo</a></td>
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
