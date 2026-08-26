# AMEVA-Sentinel Official Release Notes

---

## [v2.1.1] - 2026-08-26

### 🚀 Overview
**AMEVA-Sentinel v2.1.1** transitions from experimental deterministic identity heuristics to a **Shadow-first, multi-axis automation risk observation architecture** and delivers the official **Python SDK (FastAPI, Starlette, Flask, Django)** alongside updated TypeScript/Node.js packages. This release resolves historical specification-implementation drifts, enforces strict application-level data minimization (Zero Raw IP Persistence in Application Tables), introduces pluggable Edge Provider Adapters (Cloudflare, Vercel, Fastly, Generic), formalizes Trust Boundary verification guardrails, and provides transparent Signal Coverage metrics.

---

### 🌟 Key Changes & New Features

#### 1. Multi-Axis Semantic Separation (`schemaVersion: 2.0`)
* **Taxonomy Decoupling**: Deconstructs legacy monolithic triage into 4 independent evaluation dimensions:
  * `riskLevel`: Pure automation risk estimation (`LOW_AUTOMATION_RISK`, `ELEVATED_AUTOMATION_RISK`, `HIGH_AUTOMATION_RISK`).
  * `actorClaim`: Declared client identity claim (`UNKNOWN`, `AI_OPERATOR`, `AUTOMATION_TOOL`, `BROWSER_USER`).
  * `verification`: Independent claim verification state (`UNVERIFIED`, `VERIFIED`, `NOT_APPLICABLE`, `CONTRADICTORY`).
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
* **Anti-Spoofing Guardrail**: Provider verified-bot flags (`isCdnVerifiedBot`) escalate to `VERIFIED` only when both `edgeAuthenticated` and `directOriginBlocked` are confirmed. Unauthenticated requests retain `UNVERIFIED` with `trustBoundary: { directOriginBlocked: 'UNVERIFIED_NETWORK_BOUNDARY' }`.
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
