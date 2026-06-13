# 🌌 AMEVA Dashboard & Codex

AMEVA(Autonomous Multi-Agent Edge-AI Ecosystem)의 철학과 기술 생태계를 시각적으로 보여주고, 브라우저 환경에서 직접 Edge-AI를 체험할 수 있도록 구축된 대시보드 웹 애플리케이션입니다. 클라우드 서버나 외부 API 의존 없이 브라우저 내장 하드웨어만으로 LLM을 구동하는 제로 풋프린트 아키텍처를 시연합니다.

🌐 **Live Demo:** [uno-km.github.io/uno-km](https://uno-km.github.io/uno-km/)

---

## 🎮 브라우저 에뮬레이터 테스트 (Sandbox Run)

아래 코드 블록은 노드 상세 모달이 열리면 자동으로 감지되어 그 하단에 `▶ 브라우저 에뮬레이터에서 실행` 버튼이 생성됩니다. 클릭 시 안전한 샌드박스 내에서 즉시 구동됩니다.

```javascript
// Sandbox Emulator Test Code
console.log("🚀 AMEVA Sandbox Emulator Initialized!");
console.log("현재 브라우저 화면 크기:", window.innerWidth, "x", window.innerHeight);
const mathResult = Math.sqrt(256) * Math.PI;
console.log("계산 연산 결과 (sqrt(256) * PI):", mathResult.toFixed(4));
```

```html
<div style="padding: 15px; background: linear-gradient(135deg, #7C3AED, #00EFFF); color: #fff; border-radius: 8px; font-family: sans-serif; text-align: center; box-shadow: 0 4px 15px rgba(0,239,255,0.3);">
  <h3>🌌 Hello from Sandbox!</h3>
  <p>이 영역은 iframe 샌드박스 내부에서 안전하게 실행된 HTML 뷰포트입니다.</p>
  <button onclick="alert('샌드박스 클릭!')" style="background: #3ECF8E; border: none; padding: 8px 16px; border-radius: 4px; color: #111; cursor: pointer; font-weight: bold;">대화상자 띄우기</button>
</div>
```

---

## 🎯 핵심 기능

- **WebGPU 로컬 챗봇 엔진**: WebLLM을 활용하여 Qwen 1.5B 모델을 사용자 기기의 GPU 메모리 위에서 직접 구동합니다.
- **D3.js 시네마틱 가이드 투어 (Codex)**: WebGPU를 지원하지 않는 기기(구형 PC, 저사양 모바일 등)를 위한 Fallback 경험입니다. AMEVA 생태계를 노드 그래프로 시각화하고 TTS(음성 합성)로 투어를 진행합니다.
- **Glassmorphism UI/UX**: 우주 공간을 떠다니는 듯한 신비로운 노드 애니메이션과 세련된 다크 테마 기반의 모던 웹 디자인을 채택했습니다.

---

## ⚖️ 트레이드오프 (Trade-offs)

### 1. "Sovereign Hosting" vs. "High Availability"
**배경**: AMEVA의 완전한 오프라인/주권 철학을 지키기 위해, 900MB에 달하는 언어 모델을 GitHub LFS를 통해 직접 호스팅하고자 했습니다.
**문제**: 무료 GitHub 계정의 LFS 대역폭 제한은 월 1GB입니다. 개발 중 단 두세 번의 로드 테스트만으로도 대역폭이 완전히 고갈되었고, 깃허브는 원본 바이너리 대신 134바이트짜리 LFS 포인터 텍스트 파일을 반환하기 시작했습니다.
**결정**: 100% 로컬 호스팅이라는 이념적 목표를 약간 양보하는 대신, 서비스의 안정성(HA)을 택했습니다. 기본적으로 GitHub LFS에서 로드를 시도하되, 실패가 감지되면 즉시 트래픽이 무제한인 **Hugging Face CDN으로 우회(Fallback)**하도록 하이브리드 다운로드 아키텍처를 설계했습니다.

### 2. "모든 기기 챗봇 지원" vs. "안정적인 브라우저 경험"
**배경**: 초창기에는 모든 모바일 기기 접속을 차단하고 챗봇 대신 시네마틱 투어(Codex)만 보여주도록 설계했습니다.
**문제**: 모바일 브라우저에서 1.5GB가 넘는 VRAM을 할당하려 하면 브라우저 탭이 강제 종료(OOM Crash)되는 빈도가 높았기 때문입니다.
**결정**: 모바일 접속 여부로 기능을 제한하는 대신, 오직 **WebGPU 지원 여부**만을 기준으로 제한 기준을 완화했습니다. 따라서 갤럭시 S24와 같은 최신 하이엔드 모바일 기기는 챗봇을 실행할 수 있는 기회를 갖게 되며, 사양이 부족한 기기는 우아하게 Codex 모드로 Fallback됩니다.

---

## 🧗‍♂️ 개발 중 마주한 난제 및 해결책

### 난제 1: LFS 대역폭 소진 판별 시 CORS 문제 (Content-Length 은닉)
WebLLM이 LFS 포인터 파일을 116MB짜리 진짜 가중치 파일로 오인하여 파싱하다가 `size mismatch` 에러로 뻗어버리는 문제가 있었습니다. 이를 방지하기 위해 파일 용량을 검사하려 했으나, 브라우저에서 외부 도메인(`raw.githubusercontent.com`)으로 `HEAD` 요청을 보낼 때 깃허브 서버 측의 CORS 정책으로 인해 `Content-Length` 헤더를 읽을 수 없었습니다.
💡 **해결책 (Streaming First-Chunk Cancel)**: `HEAD` 요청 대신 실제 `GET` 요청으로 파일을 `fetch`하고, `ReadableStream`을 통해 **딱 첫 번째 청크(Chunk)만 읽은 뒤 즉시 다운로드를 `cancel()` 시키는 기법**을 도입했습니다. 읽어들인 앞부분의 8바이트 텍스트가 `"version "` (LFS 포인터 파일의 시작 문자열)인지 확인하여 파일이 포인터인지 확실히 판별하면서도, 116MB의 데이터를 낭비하지 않는 완벽한 방어 로직을 구축했습니다.

### 난제 2: WebLLM 브라우저 캐시 오염 (Cache Poisoning) 방지
위의 LFS 다운로드 실패를 겪는 과정에서, WebLLM 엔진이 잘못된 134바이트짜리 포인터 파일을 내부 `IndexedDB`에 정상적인 모델 파일로 저장(캐싱)해 버리는 현상이 발생했습니다. 이로 인해 이후 Hugging Face로 다운로드 경로를 우회했음에도 엔진이 오염된 캐시를 계속 불러와 뻗어버렸습니다.
💡 **해결책 (Dynamic Model ID)**: Hugging Face 경로로 Fallback 시, WebLLM 초기화 객체에 들어가는 `model_id` 문자열 뒤에 `-HF` 라는 접미사를 동적으로 붙였습니다. 이를 통해 WebLLM이 기존에 오염된 캐시(`Qwen2.5-1.5B...`)를 무시하고 새로운 모델 환경(`Qwen2.5-1.5B...-HF`)으로 인식하게 만들어, 사용자가 직접 F12를 눌러 캐시를 비우지 않아도 시스템이 스스로 복구될 수 있도록 조치했습니다.

### 난제 3: 시네마틱 투어 중 TTS와 D3.js 줌 객체 간의 스코프 충돌
투어 콘텐츠를 읽어주는 TTS(Text-to-Speech)가 끝날 때마다 자동으로 다음 노드로 D3 카메라를 줌인시키는 로직에서, `zoom` 객체를 찾을 수 없다는 `ReferenceError`가 발생했습니다.
💡 **해결책**: `d3.zoom()` 객체가 `initGraph()` 함수 내부에 지역 변수로 고립되어 있던 것을 파악하고, 모듈(Module) 스코프로 끌어올렸습니다(Hoisting). 이후 외부에서 카메라 시점을 제어할 수 있는 Setter 함수를 구현해 TTS 이벤트 사이클과 시각화 라이브러리를 안전하게 결합했습니다.

---

## 🛠 기술 스택

- **Core**: Vanilla JavaScript, HTML5, CSS3 (No Frontend Frameworks)
- **AI Inference**: WebLLM, WebGPU, TVM (Qwen2.5-1.5B-Instruct-q4f16_1-MLC)
- **Visualization**: D3.js
- **Typography & Markdown**: Google Fonts (Inter, Roboto), Marked.js

---
*“생물학적인 아메바가 형태를 자유자재로 바꾸며 가장 척박한 환경에서도 끝내 살아남듯이, AMEVA 역시 제한된 컴퓨팅 자원과 단절된 네트워크 속에서 스스로 생각하고 호흡하며 진화하는 코드가 되기를 지향합니다.”*
