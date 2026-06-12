# 🗺 AMEVA Graph Configuration — 노드 그래프 유지보수 가이드

> **이 문서는 메인 노드 그래프(D3.js Knowledge Graph)의 "설계도"입니다.**
> 새 카테고리 추가, 색상 변경, 분류 규칙 수정 시 이 문서를 참조하세요.

---

## 📂 관련 파일

```
uno-km/
├── graph_visualizer.js      ← 그래프 렌더링 + 카테고리 정의 + 분류 로직
├── graph_index.json         ← GitHub API 실패 시 사용되는 폴백 데이터
├── graph_config.md          ← 이 문서 (유지보수 가이드)
└── styles.css               ← 그래프 관련 CSS (tooltip, modal 등)
```

---

## 🎨 카테고리 정의

### 현재 카테고리 (2026-S1)

| 카테고리 이름 | 그룹 번호 | 색상 | 반지름 | 설명 |
|--------------|----------|------|--------|------|
| AMEVA Universe | 1 | `#7C3AED` (보라) | 28 | 생태계 루트 노드 |
| LLM | 2 | `#3ECF8E` (초록) | 20 | LLM 코어 엔진 |
| LLM Applications | 2 | `#3ECF8E` (초록) | 16 | LLM 응용 서비스 |
| STT | 3 | `#00EFFF` (시안) | 20 | 음성 인식 생태계 |
| Multiplex Applications | 4 | `#F59E0B` (앰버) | 20 | 복합 에이전트/앱 |
| Social Research | 4 | `#F59E0B` (앰버) | 20 | 사회학 연구 |
| MLOps | 5 | `#EF4444` (레드) | 20 | 인프라/운영 |

### 색상 팔레트 (`colorScale`)
```javascript
const colorScale = d3.scaleOrdinal()
  .domain([1, 2, 3, 4, 5])
  .range([
    '#7C3AED', // 그룹1: Root — 보라
    '#3ECF8E', // 그룹2: LLM — 초록
    '#00EFFF', // 그룹3: STT — 시안
    '#F59E0B', // 그룹4: MA/SR — 앰버
    '#EF4444'  // 그룹5: MLOps — 레드
  ]);
```

### 하위 리포지토리 노드
- 그룹 번호: 부모 카테고리의 그룹 번호를 상속
- 반지름: 12 (고정)
- `isRepo: true` 플래그로 구분
- `url`: GitHub 리포지토리 URL

---

## 🔀 리포지토리 분류 규칙

### 1순위: GitHub Topics

리포지토리에 GitHub Topic이 설정되어 있으면 아래 매핑을 따릅니다:

| GitHub Topic | → 카테고리 |
|-------------|-----------|
| `STT` | STT |
| `LLM` | LLM |
| `MA` | Multiplex Applications |
| `SR` | Social Research |
| `MLOPS` | MLOps |

### 2순위: 리포지토리 이름 패턴 (폴백)

Topic이 없는 경우 리포지토리 이름(대문자)에서 패턴 매칭합니다:

| 이름에 포함된 문자열 | → 카테고리 |
|--------------------|-----------| 
| `STT` | STT |
| `LLM` | LLM |
| `DOC-AI`, `BENCHMARK` | LLM Applications |
| `MODEL`, `DATA`, `CONDUCTOR`, `DATABASE` | MLOps |
| `WINDOWS-ASSIST`, `VIEWPORT`, `AGENT-ORCHESTRA` | Multiplex Applications |
| `DEAD-INTERNET` | Social Research |

### 3순위: 기본값

위 어떤 규칙에도 해당하지 않으면 `AMEVA Universe` (루트)에 직접 연결됩니다.

---

## 🔗 그래프 링크 구조

```
AMEVA Universe ─┬─ LLM ─── LLM Applications
                ├─ STT
                ├─ MLOps
                ├─ Multiplex Applications
                └─ Social Research

각 카테고리 ─── 하위 리포지토리들
```

### 링크 가중치 (`value`)
- 루트 → 카테고리: `3` (굵은 선)
- 카테고리 → 하위 카테고리: `2`
- 카테고리 → 리포지토리: `1` (기본)

---

## ⚙️ D3.js 시뮬레이션 파라미터

```javascript
simulation = d3.forceSimulation(data.nodes)
  .force('link',    d3.forceLink(data.links).id(d => d.id).distance(120))
  .force('charge',  d3.forceManyBody().strength(-400))
  .force('center',  d3.forceCenter(width / 2, height / 2))
  .force('collide', d3.forceCollide().radius(d => d.radius + 15).iterations(2))
```

| 파라미터 | 현재 값 | 설명 |
|---------|--------|------|
| link distance | 120 | 노드 간 목표 거리 (px) |
| charge strength | -400 | 노드 간 반발력 (음수 = 반발) |
| collide radius | `radius + 15` | 충돌 방지 반경 |
| collide iterations | 2 | 충돌 해결 반복 횟수 |

---

## ✏️ 업데이트 방법

### 새 카테고리 추가

1. `graph_visualizer.js`에서 `nodes` 배열에 카테고리 노드 추가:
   ```javascript
   { id: "New Category", group: 6, radius: 20, description: "..." }
   ```
2. `links` 배열에 루트와의 연결 추가:
   ```javascript
   { source: "AMEVA Universe", target: "New Category", value: 3 }
   ```
3. `colorScale`의 domain과 range에 새 그룹 색상 추가
4. 분류 로직에 새 Topic/이름 패턴 규칙 추가

### 새 리포지토리 추가

- GitHub에 `AMEVA-` 접두사로 리포지토리를 만들면 **자동으로 감지**됩니다
- 올바른 카테고리에 분류되도록 GitHub Topic을 설정하거나, 이름 패턴 규칙을 확인하세요

### 색상 변경

1. `graph_visualizer.js`의 `colorScale` range 배열에서 해당 그룹 인덱스의 색상 수정
2. 투어 오버레이의 CSS 변수와도 조화를 확인

---

## 🐛 알려진 이슈 & 대처

| 이슈 | 원인 | 해결 |
|------|------|------|
| GitHub API 호출 실패 | Rate Limit (미인증: 60회/시간) | `graph_index.json` 폴백 자동 적용 |
| 노드가 너무 많아 성능 저하 | 50+ 노드 시 렌더링 부하 | `forceCollide` iterations 감소 고려 |
| 리포지토리가 분류 안 됨 | Topic 미설정 + 이름 패턴 미매칭 | GitHub Topic 설정 또는 폴백 규칙 추가 |
