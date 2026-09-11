# 🧬 AMEVA Ecosystem Unified Design System & Brand Identity

> **Brand Vision**: **Cyber Holographic Prism & Organic AI Fusion**
> AMEVA(아메바) 프로젝트 생태계를 위한 공통 상표(Logo), 통합 파비콘(Favicon), 프로그램 아이콘(App Icon), 그리고 모듈별 공통 색감(Color System) 가이드라인입니다.

---

## 1. 🖼️ 브랜드 비주얼 자산 (Brand Assets Preview)

### ① 메인 상표 및 브랜드 로고 (Brand Trademark & Logo)
![AMEVA Brand Logo](C:/Users/GAME/.gemini/antigravity/brain/6f4039ba-c3b3-4b74-ad93-9a205c4aab4c/ameva_brand_logo_1785132608736.jpg)

> [!NOTE]
> **디자인 개념**: 유기적으로 변화하는 유체(Amoeba Cell) 외형에 홀로그래픽 글래스모피즘 라이팅과 신경망 AI 코어 노드가 결합된 상표 디자인입니다. 고성능 멀티미디어 저작 및 다중 에지 에이전트의 유기적 융합을 상징합니다.

---

### ② 데스크톱 프로그램 아이콘 (Desktop Application Icon)
![AMEVA Desktop App Icon](C:/Users/GAME/.gemini/antigravity/brain/6f4039ba-c3b3-4b74-ad93-9a205c4aab4c/ameva_app_icon_1785132619422.jpg)

> [!TIP]
> **적용 위치**: Electron 데스크톱 앱 실행 파일 (`.exe`, `.app`), 작업 표시줄(Taskbar), 시스템 트레이(System Tray)
> **디자인 특징**: 스퀘어클(Squircle) 플레이트 위에 입체적인 홀로그램 프리즘 유체 셀과 시그니처 림 라이트(Rim Light)를 가미하여 고급스러운 3D 뎁스감을 전달합니다.

---

### ③ 생태계 공통 파비콘 (Unified Favicon & Micro Symbol)
![AMEVA Common Favicon](C:/Users/GAME/.gemini/antigravity/brain/6f4039ba-c3b3-4b74-ad93-9a205c4aab4c/ameva_favicon_preview_1785132630106.jpg)

> [!IMPORTANT]
> **적용 위치**: 웹 브라우저 탭, 마켓플레이스 탭, 타이틀바 미니 아이콘 (16x16, 32x32, 64x64, SVG 표준)
> **디자인 특징**: 소형 해상도에서도 시인성이 탁월하도록 명확한 유체 실루엣과 3개 핵심 AI 연동 노드 포인트를 강조한 시그니처 심볼입니다.

---

## 2. 🎨 AMEVA 공통 컬러 시스템 (Unified Color System)

모든 AMEVA 서브 프로젝트(Workstation, Conductor, Agent Orchestra 등)에 공통으로 주입할 CSS 디자인 토큰입니다.

```css
:root {
  /* Default Theme: Cyber Holographic Dark */
  --ameva-bg-base: #0f1117;          /* Obsidian Deep Background */
  --ameva-bg-surface: #171a24;       /* Card & Panel Surface */
  --ameva-bg-overlay: #1e2230;       /* Hover & Active Overlay */

  /* Glassmorphism Tokens */
  --ameva-glass-bg: rgba(23, 26, 36, 0.65);
  --ameva-glass-border: rgba(255, 255, 255, 0.12);
  --ameva-glass-blur: blur(16px);
  --ameva-glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  /* Primary Brand Gradients */
  --ameva-grad-primary: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #f43f5e 100%);
  --ameva-grad-glow: radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(244,63,94,0) 70%);

  /* Accent Colors */
  --ameva-accent-indigo: #6366f1;   /* AI & Core Logic */
  --ameva-accent-magenta: #f43f5e;  /* Multimedia & Creative */
  --ameva-accent-cyan: #38bdf8;     /* Network & Sync */
  --ameva-accent-emerald: #10b981;  /* Runtime & Execution */

  /* Typography Colors */
  --ameva-text-primary: #f8fafc;
  --ameva-text-secondary: #94a3b8;
  --ameva-text-muted: #64748b;
}
```

---

## 3. 🧩 AMEVA 생태계 모듈별 서브 서명 컬러 (Sub-Module Accents)

통합감을 유지하면서 모듈별 특성을 나타내는 서브 포인트 컬러 매핑 테이블입니다:

| 모듈 이름 | 서브 포인트 컬러 | 의미 및 톤앤매너 |
| :--- | :--- | :--- |
| **AMEVA Workstation** | `Indigo -> Coral Gradient` (`#6366F1` ➔ `#F43F5E`) | 통합 마크다운 & 리치 멀티미디어 허브 |
| **AMEVA Conductor** | `Electric Violet` (`#A855F7`) | 오케스트레이션 및 파이프라인 중앙 제어 |
| **AMEVA Agent Orchestra** | `Neon Cyan` (`#38BDF8`) | 자율 에이전트 협업 및 통신 네트워크 |
| **AMEVA Data Harvester** | `Emerald Mint` (`#10B981`) | 데이터 수집 및 파싱 파이프라인 |
| **AMEVA Doc AI** | `Amber Gold` (`#F59E0B`) | 지능형 문서 처리 및 요약 모델 |
| **AMEVA LLM Trainer** | `Bright Coral` (`#FF4B4B`) | 모델 튜닝 및 학습 모니터링 |

---

## 4. 💻 벡터 SVG 파비콘 소스 (favicon.svg)

프로젝트에 바로 적용할 수 있는 SVG 원본 코드입니다:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F1117" />
      <stop offset="100%" stop-color="#1A1D27" />
    </linearGradient>
    <linearGradient id="amoeba-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5" />
      <stop offset="50%" stop-color="#7C3AED" />
      <stop offset="100%" stop-color="#F43F5E" />
    </linearGradient>
    <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="1" />
      <stop offset="60%" stop-color="#818CF8" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#C084FC" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect x="16" y="16" width="480" height="480" rx="108" fill="url(#bg-grad)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="4" />
  <path d="M 256 100 C 340 90, 410 150, 410 240 C 410 330, 350 410, 260 410 C 170 410, 102 330, 102 240 C 102 150, 172 110, 256 100 Z" fill="url(#amoeba-grad)" opacity="0.92" />
  <circle cx="256" cy="246" r="42" fill="url(#core-glow)" />
  <circle cx="256" cy="246" r="18" fill="#FFFFFF" />
  <circle cx="190" cy="180" r="14" fill="#38BDF8" />
  <circle cx="330" cy="290" r="16" fill="#F43F5E" />
</svg>
```

---

## 5. 🚀 후속 적용 제안 (Next Steps)
1. **각 모듈 패키지 적용**: `AMEVA-Workstation`, `AMEVA-Conductor` 등 각 프로젝트의 `public/favicon.svg` 및 `index.html` title bar 스타일 업데이트
2. **데스크톱 앱 빌드 자산 등록**: Electron electron-builder용 `icon.ico` / `icon.png` 배포 설정 반영
3. **공통 CSS 테마 분리**: `packages/ui` 또는 공통 css 파일에 디자인 토큰 통합 주입

