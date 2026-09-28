# AMEVA & uno-km Ecosystem Release Notes

---

## [Termux-LlamaCpp v1.3.11] - 2026-09-28

### Overview
**Termux-LlamaCpp v1.3.11** (PyPI: `termux-llamacpp 1.3.11` / NPM: `termux-llamacpp@1.3.11`) introduces dynamic 5-stage exponential backoff model download resumption with HTTP Range 206/416 self-healing, automatically guards Qualcomm Adreno mobile GPUs against closed-source compiler assertion crashes via default `-fa 0` (Flash Attention bypass), isolates pure CPU execution against buggy vendor Vulkan drivers, and integrates official Bionic HAL binding via `LlamaCppAdapter`.

### Key Changes
* **Dynamic 5-Stage Network Resume & Exponential Backoff**:
  * Added resilient multi-stage retry mechanism with automatic HTTP Range 206 partial downloads and 416 range reset logic in `downloader.py`.
  * Added compression encoding validation (`identity` vs `gzip/deflate`) to eliminate corrupted partial model file state.
* **Qualcomm Adreno Vulkan Flash Attention Defense & CPU Device Isolation**:
  * Defaulted `-fa 0` during mobile GPU execution, bypassing closed-source vendor driver compiler assertion crashes on Adreno 700 / 800 series.
  * Injected `GGML_VK_VISIBLE_DEVICES = ""` under pure CPU NEON mode (`device="cpu"`), preventing buggy vendor Vulkan driver crashes during CPU execution.
* **Model-Aware Chat Template Auto-Resolution**:
  * Integrated zero-friction automatic chat template expansion for Qwen (`<|im_start|>`) and Llama-3 (`<|start_header_id|>`) models with deterministic stop token cleanup.
* **Official ameva-runtime Adapter Integration**:
  * Deep binding with `LlamaCppAdapter.get_execution_environment()` for automated Bionic HAL shim injection and dynamic library search path isolation.

---

## [Termux-STT v1.2.13] - 2026-09-28

### Overview
**Termux-STT v1.2.13** (PyPI: `termux-stt 1.2.13` / NPM: `termux-stt@1.2.13`) introduces automated self-healing Vosk STT runtime dependency provisioning (`cffi`, `srt`) on Android Termux, synchronizes full SemVer package manifests across Python and Node.js ecosystems with 100% Zero-Drift, and validates zero silent fallback across all 57 test suites.

### Key Changes
* **Vosk STT Runtime Dependency Auto-Provisioning**:
  * Automatically detects and installs required runtime bindings (`cffi>=1.15.0`, `srt>=3.5.0`) during Vosk STT engine provisioning on Android Termux.
  * Prevents cold-start CFFI/SRT import failures on minimal Termux environments without requiring manual package intervention.
* **Full SemVer Parity & Manifest Synchronization**:
  * Completely aligned `pyproject.toml`, `setup.py`, `package.json`, and `termux_stt/__init__.py` to `1.2.13`.
  * Explicitly declared Python runtime dependencies (`cffi`, `srt`) to prevent environment drift.
* **Zero-Drift & Fail-Fast Validation**:
  * Verified 100% test pass rate (57 passed) with zero silent fallbacks and deterministic hardware execution.

---

## [AMEVA-Runtime v2.5.1] - 2026-09-14

### Overview
**AMEVA-Runtime v2.5.1** (Python: `2.5.1` / NPM: `@ameva/runtime v2.6.0-alpha.4`) delivers critical hardware-aware Vulkan compute stability and neural acceleration for Qualcomm Snapdragon mobile silicon, resolving proprietary driver compiler crashes and deadlocks while establishing single-bundle SSOT provisioning for on-device STT engines.

### Key Changes
* **Qualcomm Adreno Vulkan SoftMax wg64 Alignment**:
  * Constrained Vulkan SoftMax compute shader workgroups to the hardware subgroup size (64), eliminating `VK_ERROR_DEVICE_LOST` driver crashes and cross-warp barrier deadlocks on Qualcomm Adreno 730 / 600 / 800 series GPUs.
* **Automatic Hardware-Aware Routing (Zero CLI Friction)**:
  * Implemented automatic hardware-aware attention routing in Whisper core: automatically detects Qualcomm Adreno silicon and bypasses closed-source driver compiler assertion crashes on Flash Attention, routing directly to the 100% native Vulkan GPU standard attention pipeline without requiring manual `--no-flash-attn` (`-nfa`) CLI flags.
* **Empirical Live Device Telemetry (Galaxy S22 / Adreno 730, JFK 1min Audio)**:
  * **Neural Encoder Time**: **5.13s (5,128.94 ms)** on Vulkan GPU vs **19.14s (19,137.16 ms)** on CPU — **3.73x pure GPU speedup**.
  * **Stability & Reliability**: Zero silent fallbacks (`fallbacks = 0 p / 0 h`), zero deadlock, ~14% CPU load, 100% transcript accuracy.
* **Mali-G78 Non-Regression**:
  * Confirmed zero regression on ARM Mali GPUs (Galaxy S21 / Exynos 2100 / Mali-G78 MP14), maintaining native Vulkan Flash Attention (~17.5s total time, 0 fallbacks).
* **Single SSOT STT Bundle Provisioning**:
  * Unified native STT engine deployment under `NATIVE_ASSETS["stt"]` with verified cryptographic SHA-256 (`90a2f4fd275aa13012e95f3fae5b00c2abc5079a50d2997ffb227355e6b6c944`) and atomic release directory deployment (`~/.local/share/ameva/current/stt`).

---

## [Termux-STT v1.2.5] - 2026-09-14

### Overview
**Termux-STT v1.2.5** (PyPI: `termux-stt 1.2.5` / NPM: `termux-stt@1.2.5`) incorporates the Qualcomm Adreno Vulkan SoftMax wg64 patch and automatic hardware routing, delivering plug-and-play 3.73x GPU speech recognition acceleration across Android Termux devices.

### Key Changes
* **Integrated Qualcomm Adreno Native Acceleration**:
  * Default invocation (`termux-stt transcribe <audio>`) automatically leverages native Vulkan GPU acceleration on Snapdragon devices without requiring `--no-flash-attn` or manual hardware tuning.
* **Explicit CPU Fallback Option (`-ng`)**:
  * Added `-ng` flag support when CPU execution is explicitly requested (`-d cpu`), ensuring full compatibility across low-end devices without Vulkan support.
* **Verified Native Bundle Distribution**:
  * Pre-compiled and cryptographically authenticated native bundles (`whisper-cli-vulkan-android-arm64.tar.gz`) published directly to GitHub Releases v1.2.5.

---

## [AMEVA-Runtime v1.0.1] - 2026-09-04

### Overview
**AMEVA-Runtime v1.0.1** establishes the official production-grade on-device AI orchestration runtime for mobile silicon (Qualcomm Snapdragon Adreno and Samsung Exynos ARM Mali). It features a unified 1-liner inference API (`import ameva_runtime as ameva; ameva.run(...)`), dynamic silicon topology routing, strict Zero-Silent-Fallback error propagation, and complete backward compatibility with the existing Termux multi-modal ecosystem (`import ameva_vulkan_runtime as avr`).

### Key Changes
* **Unified 1-Liner Python & Node.js API**: Introduces high-level `run()` and `plan()` APIs returning structured execution telemetry (tokens/sec, prompt eval rate, latency, safety rationale).
* **Silicon-Aware Dynamic Routing**:
  * **Qualcomm Snapdragon 8 Elite (Adreno 830)**: Dispatches 100% VRAM layer offload (25/25 layers) to native Vulkan hardware compute pipelines, achieving **34.08 tokens/sec**.
  * **Samsung Exynos 1380 (ARM Mali-G68)**: Automatically identifies headless driver fence synchronization deadlocks and routes execution to the Cortex-A78 CPU-NEON cluster (**4.27 tokens/sec**), guaranteeing zero UI freeze.
* **Linker Path Optimization & Zero-Silent-Fallback**: Corrects dynamic library search order in Android `linker64` (`ggml/src` and `src` prioritized over `/usr/lib`) and enforces Fail-Fast exception raising on non-zero exit codes.
* **100% Ecosystem Backward Compatibility**: Dual-namespaces `ameva_runtime` and `ameva_vulkan_runtime` packaged in a single unified wheel.

### Empirical Live Device Telemetry (Qwen2.5-0.5B-Instruct)
* **Samsung Galaxy S25 (Adreno 830 GPU / Vulkan)**: **34.08 tokens/sec** (eval time: 445.38 ms / 15 runs, total time: 1,596 ms)
* **Samsung Galaxy A35 (Mali-G68 GPU / Forced Vulkan)**: 0.00 tokens/sec (Proprietary driver deadlock in SPIR-V pipeline compilation)
* **Samsung Galaxy A35 (Cortex-A78 / CPU-NEON Adaptive)**: **4.27 tokens/sec** (eval time: 3,510.69 ms / 15 runs, 100% stable)

---

## [Termux-Vision v1.1.0] - 2026-09-01

### Overview
**Termux-Vision v1.1.0** introduces the **4-Tier Image Quality Preset System (`fast`, `optimal`, `high`, `original`)**, full-layer **Adreno & Mali Vulkan GPU hardware acceleration**, expanded subprocess execution guardrails (300s timeout), multi-layer binary cache integrity defense (>10MB valid size validation & GGUF/mmproj pair checks), and verified end-to-end parity across Python and Node.js SDKs and global CLIs.

### Key Changes
* **4-Tier Resolution Scaler**: `fast` (384px, 38s), `optimal` (768px, 81s), `high` (1280px, 266s), and `original` (1:1 pass-through) with aspect-ratio preserving bilinear resampling and lifecycle self-cleanup.
* **Full-Layer Vulkan GPU Acceleration**: Injects `-ngl 99` targeting Qualcomm Adreno 830 and ARM Mali-G68 GPU shaders, achieving 11.8 ~ 14.2 tokens/sec generation speed.
* **Subprocess Hardening**: Extended execution timeout to 300s, corrected `<|im_start|>assistant` delimiter parsing, and removed raw vision control tokens.
* **Strict Binary Cache Integrity**: Enforces `> 10MB` minimum valid binary threshold across Python and Node.js to filter out corrupted downloads and 404 HTML error pages.

### Verification Matrix
* **Samsung Galaxy S25**: VLM FAST 38.19s (14.2 t/s), OPTIMAL 81.57s (12.4 t/s), HIGH 266.71s (11.8 t/s), Canny 16.2ms (Validated by automated checks)
* **Samsung Galaxy A35**: Spatial Canny FAST 1.18s, OPTIMAL 4.69s, HIGH 13.2s (Validated by automated checks)

---

## [AMEVA-Sentinel v2.1.1] - 2026-08-26

### 🚀 Overview
**AMEVA-Sentinel v2.1.1** transitions from experimental deterministic identity heuristics to a **Shadow-first, multi-axis automation risk observation architecture** and delivers the official **Python SDK (FastAPI, Starlette, Flask, Django)** alongside updated TypeScript/Node.js packages. This release resolves historical specification-implementation drifts, enforces strict application-level data minimization (Zero Raw IP Persistence in Application Tables), introduces pluggable Edge Provider Adapters (Cloudflare, Vercel, Fastly, Generic), formalizes Trust Boundary verification guardrails, and provides transparent Signal Coverage metrics.

---

### 🌟 Key Changes & New Features

#### 1. Multi-Axis Semantic Separation (`schemaVersion: 2.0`)
* **Taxonomy Decoupling**: Deconstructs legacy monolithic triage into 4 independent evaluation dimensions:
  * `riskLevel`: Pure automation risk estimation (`LOW_AUTOMATION_RISK`, `ELEVATED_AUTOMATION_RISK`, `HIGH_AUTOMATION_RISK`).
  * `actorClaim`: Declared client identity claim (`UNKNOWN`, `AI_OPERATOR`, `AUTOMATION_TOOL`, `BROWSER_USER`).
  * `verification`: Independent claim verification state (`Theoretical Model`, `VERIFIED`, `NOT_APPLICABLE`, `CONTRADICTORY`).
  * `decision`: Policy enforcement outcome (`ALLOW`, `OBSERVE`, `CHALLENGE`, `TEMPORARY_DENY`).
* **Unknown Baseline**: Absences of automation signatures default to `actorClaim.type = 'UNKNOWN'` rather than asserting human identity.
* **Single-Signal Protection**: Single passive heuristics (e.g. `isWebdriver`) cannot trigger `TEMPORARY_DENY`; enforced action is automatically downgraded to `OBSERVE`.
* **Legacy Compatibility**: Legacy `triageCategory` is preserved in `assessment.legacy` with `deprecated: true`.

#### 2. Application-Level Data Minimization (Privacy Remediation)
* **Zero Raw IP Persistence**: Raw IPv4/IPv6 addresses are masked (`203.0.***.***` / `2001:0db8::`) before database writes via `maskIpAddress()`.
* **Coordinate Collection Dropped**: Latitude/longitude telemetry is permanently discontinued (`null` enforced).
* **Click Text Sanitization**: Arbitrary free-text click logging (`target_text`) is discontinued (`null` enforced).
* **Target Type Allowlist**: Restricted to server-side enum (`BUTTON`, `LINK`, `CODE`, `INPUT`, `NAVIGATION`, `OTHER`) enforced by database CHECK constraints.
* **Database Sanitation**: Existing database rows sanitized (163 IPs, 160 coordinates, 324 target texts set to NULL in primary application tables).

#### 3. Pluggable Edge Provider Adapters (`lib/sentinel/providers/`)
* **Multi-CDN Normalization**: Standardized `EdgeClientInfo` extraction across heterogeneous edge runtimes:
  * `CloudflareEdgeAdapter`: Interprets `CF-Connecting-IP`, `CF-IPCountry`, `CF-RAY`, and `CF-Bot-Management` metadata.
  * `VercelEdgeAdapter`: Interprets Vercel Edge Middleware IP, Geo, ASN, and request ID headers.
  * `FastlyEdgeAdapter`: Interprets Fastly Compute@Edge / VCL headers and bot challenge indicators.
  * `GenericEdgeAdapter`: Standard Node.js / Express / Fastify fallback.
  * `resolveProviderAdapter()`: Automatic signature-based adapter resolution.
* **Explicit Capabilities Contract**: Missing provider signals safely return `undefined` rather than misleading falsy/zero values.

#### 4. Trust Boundary Enforcement Layer (`lib/sentinel/policy/`)
* **Anti-Spoofing Guardrail**: Provider verified-bot flags (`isCdnVerifiedBot`) escalate to `VERIFIED` only when both `edgeAuthenticated` and `directOriginBlocked` are confirmed. Unauthenticated requests retain `Theoretical Model` with `trustBoundary: { directOriginBlocked: 'Theoretical Model_NETWORK_BOUNDARY' }`.
* **Structured Provenance**: Records `verificationEvidence` with explicit verification methods (`PROVIDER_VERIFIED_BOT_SIGNAL`).

#### 5. Availability & Fail-Open Hardening
* **Zero Business Impact**: Handler runtime errors return HTTP 200 with degraded assessment (`status: 'degraded'`, `failOpen: true`, `action: 'ALLOW'`).
* **Adversarial Resilience**: Ingestion endpoints gracefully handle null, non-object, and malformed signals without throwing 500 errors.

#### 6. Observability & Dashboard Precision
* **Risk Terminology Alignment**: Replaces identity-asserting labels (`Verified Human` → `Low Automation Risk Sessions`, `Identified AI Bots` → `Bot Claims & Automation Signals (Unverified)`).
* **Signal Coverage Metric**: Replaces hardcoded confidence with a dynamic 5-category availability ratio:
  $$\text{Coverage} = \frac{\text{Available Categories}}{\text{Expected Categories}} \quad (\ge 0.8: \text{High}, \ge 0.4: \text{Medium}, < 0.4: \text{Low})$$
* **Aggregation Alignment**: Replaced multi-table UNION queries with unified session deduplication (`metric: 'sessions'`, `consistency_model: 'EVENTUAL'`).
#### 7. Official Python SDK Package (`pip install ameva-sentinel`)
* **FastAPI, Starlette & Flask Middleware**: Native Python integration for Sentinel v2.1 with ASGI middleware (`SentinelMiddleware`), multi-CDN edge provider resolution, and IP subnet masking.
* **Pure Python Direct Evaluator**: Lightweight zero-heavy-dependency Python implementation supporting direct assessment and 3-tier Fail-Open safety.

---

### 🧪 Verification & Audit Matrix

```yaml
release_audit:
  release_version: "v2.1.0"
  release_date: "2026-08-26"
  git_commit: "c15d060"
  deployment_status: "production_active"

  verification_summary:
    unit_tests:
      tested_scenarios: 21
      passed: 21
      failed: 0
    e2e_tests:
      tested_scenarios: 28
      passed: 28
      failed: 0
    hardcore_stress_and_concurrency:
      tested_assertions: 55
      passed: 55
      failed: 0

  compliance_and_operational_bounds:
    primary_database_sanitization: completed_zero_remaining
    application_fail_open: verified_http_200_degraded
    code_coverage: not_measured
    false_positive_rate: not_measured_shadow_collection_in_progress
    legal_compliance_status: organizational_review_required
```
