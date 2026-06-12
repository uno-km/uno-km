# 📖 AMEVA Cinematic Tour — 콘텐츠 유지보수 가이드

> **이 문서는 시네마틱 투어(Codex) 콘텐츠의 "설계도"입니다.**
> 다음 시즌에 투어를 최신화하려면 `tour_data.json` 파일을 이 가이드에 맞춰 수정하세요.

---

## 📂 파일 구조

```
uno-km/
├── tour_data.json          ← JS가 런타임에 로드하는 실제 데이터
├── codex_tour_data.md      ← 이 문서 (유지보수 가이드)
├── graph_config.md          ← 노드 그래프 구성 가이드
└── graph_visualizer.js      ← 투어 로직 (데이터는 tour_data.json에서 로드)
```

---

## 🔧 tour_data.json 구조

```jsonc
{
  "meta": {
    "version": "시즌 버전 (예: 2026-S1)",
    "lastUpdated": "YYYY-MM-DD",
    "description": "설명"
  },
  "steps": [
    {
      "nodeId": "D3 그래프 노드 ID (정확히 일치해야 줌 이동 작동)",
      "title": "🌌 표시될 제목 (이모지 포함 권장)",
      "type": "category | repo",
      "parentCategory": "(repo만 해당) 부모 카테고리 nodeId",
      "description": "투어 카드에 표시되고 TTS가 읽을 설명 텍스트",
      "tech": "핵심 기술 스택 (쉼표 구분)",
      "github": "(repo만 해당) GitHub 리포지토리 URL"
    }
  ]
}
```

### 필드 설명

| 필드 | 필수 | 설명 |
|------|------|------|
| `nodeId` | ✅ | D3 그래프의 노드 ID. **정확히 일치**해야 카메라가 해당 노드로 줌인합니다 |
| `title` | ✅ | 투어 카드 상단에 표시되는 제목. 이모지를 앞에 붙이면 시각적 구분이 좋습니다 |
| `type` | ✅ | `"category"` (카테고리 노드) 또는 `"repo"` (리포지토리 노드) |
| `parentCategory` | ❌ | repo 타입일 때 부모 카테고리의 nodeId |
| `description` | ✅ | 투어 카드 본문 + TTS 음성으로 읽어줄 텍스트. **TTS 읽기 시간 기반으로 자동 진행 타이머가 설정됨** |
| `tech` | ✅ | 기술 스택 (TTS에서도 읽어줌) |
| `github` | ❌ | repo 타입일 때 GitHub URL. 투어 카드에 링크 버튼으로 표시됨 |

---

## 🗺 현재 투어 순서 (2026-S1)

```
유니버스 → MLOps → MLOps 하위 리포 → LLM → LLM Applications → LLM 하위 리포 → STT → STT 하위 리포 → MA → MA 하위 리포 → SR → SR 하위 리포
```

### 상세 순서

| # | nodeId | 타입 | 카테고리 |
|---|--------|------|----------|
| 1 | AMEVA Universe | category | — |
| 2 | MLOps | category | — |
| 3 | AMEVA-Model-Nexus | repo | MLOps |
| 4 | AMEVA-Data-Harvester | repo | MLOps |
| 5 | AMEVA-Conductor | repo | MLOps |
| 6 | AMEVA-Database | repo | MLOps |
| 7 | LLM | category | — |
| 8 | LLM Applications | category | — |
| 9 | AMEVA-Doc-AI | repo | LLM Applications |
| 10 | AMEVA-Benchmark-Suite | repo | LLM Applications |
| 11 | STT | category | — |
| 12 | AMEVA-STT-Trainer | repo | STT |
| 13 | AMEVA-STT-Agent | repo | STT |
| 14 | Multiplex Applications | category | — |
| 15 | AMEVA-Agent-Orchestra | repo | Multiplex Applications |
| 16 | AMEVA-Window-Assistant | repo | Multiplex Applications |
| 17 | Social Research | category | — |
| 18 | AMEVA-Dead-Internet-Threatre | repo | Social Research |

---

## ✏️ 업데이트 방법

### 새 리포지토리 추가
1. `tour_data.json`의 `steps` 배열에서 해당 카테고리 뒤에 새 항목 삽입
2. `nodeId`는 GitHub 리포지토리 이름과 **정확히 일치**해야 합니다
3. `type`을 `"repo"`로, `parentCategory`를 부모 카테고리 nodeId로 설정
4. `description`에 리포지토리 README의 핵심 내용 요약 작성

### 카테고리 추가/변경
1. 카테고리를 먼저 추가한 후, 관련 리포 항목들을 그 뒤에 배치
2. `graph_visualizer.js`의 카테고리 노드 정의에도 추가 필요 (→ `graph_config.md` 참조)

### description 작성 팁 (TTS 품질)
- **한국어**로 작성하세요 (TTS가 한국어로 읽어줍니다)
- 문장을 짧고 명확하게 유지 (TTS 자연스러움 향상)
- 기술 약어는 풀어서 설명 (예: "SRE" → "Site Reliability Engineering(SRE)")
- description 길이에 따라 **자동 진행 타이머가 동적으로 조절**됩니다

---

## ⚙️ 자동 진행 타이머 계산식

```
estimatedDurationMs = max(4000, (charCount / 4.5) * 1000) + 1500
```

- `charCount`: `{title}. {description}. 핵심 기술 스택은 {tech} 입니다.` 전체 길이
- `4.5`: 한국어 초당 읽기 속도 (chars/sec)
- `4000ms`: 최소 체류 시간
- `1500ms`: 전환 버퍼

---

## 📋 각 리포지토리 요약 (README 기반)

### MLOps 카테고리

#### AMEVA-Model-Nexus
> 제한된 리소스 환경에서 AI를 안정적으로 서빙하기 위한 통합 API 게이트웨이.
> Dynamic Scoped-Throttling으로 하드웨어 온도/전력을 실시간 감지하여 Context Window와 Sampling 파라미터를 동적 조절.
> High-Availability Serving으로 복잡한 Agent 요청 우선 처리.

#### AMEVA-Data-Harvester
> 데이터 손실 없는 극도의 복원력을 갖춘 엣지 데이터 수집기.
> SCP, HTTPS, Telegram Bot을 통한 하이브리드 전송 + Payload Validation으로 제로-로스 보장.

#### AMEVA-Conductor
> AMEVA 생태계를 원격 제어하는 크로스 플랫폼 UI.
> Human-Agent 인터랙션을 위한 통합 컨트롤 인터페이스.

#### AMEVA-Database
> 분산 AMEVA 에코시스템을 위한 경량 SQLite 기반 DB 및 로그 인스펙터.
> 에이전트 활동 로그, 시스템 메트릭, 추론 결과 수집/분석.

---

### LLM 카테고리

#### AMEVA-Doc-AI
> 프라이버시 최우선 오프라인 문서 지능 파이프라인.
> 인터넷 없이 로컬에서 문서 분석/이해. Data Sovereignty 아키텍처.

#### AMEVA-Benchmark-Suite (Singularity)
> '측정할 수 없으면 개선할 수 없다.' 실증적 벤치마크 스위트.
> TPS와 mW 소모량 동기화 분석 = Synchronized Power Tracking.

---

### STT 카테고리

#### AMEVA-STT-Trainer
> Whisper 기반 한국어 STT LoRA 파인 튜닝 훈련기.
> 데이터 스크래핑 → 전처리 → LoRA 학습 → 모델 병합 End-to-End 자동화.

#### AMEVA-STT-Agent
> Edge Device 실시간 음성 처리 에이전트.
> 훈련된 STT 모델을 에이전트 시스템에 통합, 실시간 한국어 음성 명령 처리.

---

### Multiplex Applications 카테고리

#### AMEVA-Agent-Orchestra
> AMEVA 생태계의 오케스트레이터.
> User Intent → Nobles → Workers 계층적 태스크 분해.
> Semantic Drift 최소화, GGUF 최적화 Graph-based State Management.

#### AMEVA-Window-Assistant
> Windows 네이티브 로컬 AI 데스크톱 어시스턴트.
> OCR-First Perception + Vision Fallback. 완전 오프라인 음성 I/O + llama.cpp 통합.

---

### Social Research 카테고리

#### AMEVA-Dead-Internet-Theatre
> Docker 기반 완전 자율 다중 에이전트 시뮬레이션.
> 'Dead Internet Theory' 영감, AI 에이전트만으로 구성된 가상 인터넷 공간.
> 각 에이전트는 독립 컨테이너에서 자율적으로 콘텐츠 생성/소통.
