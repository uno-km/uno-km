#!/usr/bin/env python3
"""
tools/build_catalog.py — AMEVA Project Catalog Builder
AMV-CAT-20260826  |  v1.0.0

두 페이지의 프로젝트 카드를 shared/ecosystem-catalog.yaml 기반으로 자동 생성·주입.
  - index.html       : 프로필/CV 스타일 (이모지 없음, 3행 카테고리 분리)
  - foundation/index.html : 재단 스타일 (동일 구조, 다른 CSS 클래스)

Usage:
  python tools/build_catalog.py           # 전체 재빌드
  python tools/build_catalog.py --verify  # 주입 마커 존재 여부 검증
  python tools/build_catalog.py --dry-run # 변경 없이 생성 HTML 출력
"""
import re, sys, argparse
from pathlib import Path

ROOT   = Path(__file__).parent.parent
YAML   = ROOT / "shared" / "ecosystem-catalog.yaml"
INDEX  = ROOT / "index.html"
FOUND  = ROOT / "foundation" / "index.html"

# 주입 마커
START_P = "<!-- CATALOG_INJECT_START:profile -->"
END_P   = "<!-- CATALOG_INJECT_END:profile -->"
START_F = "<!-- CATALOG_INJECT_START:foundation -->"
END_F   = "<!-- CATALOG_INJECT_END:foundation -->"

# 카테고리 색상
COLORS = {
    "app":  {"border": "#2563eb", "btn": "#2563eb", "badge_bg": "#eff6ff", "badge_color": "#1d4ed8", "badge_border": "#bfdbfe", "label": "App"},
    "sdk":  {"border": "#16a34a", "btn": "#16a34a", "badge_bg": "#f0fdf4", "badge_color": "#15803d", "badge_border": "#bbf7d0", "label": "SDK"},
    "lib":  {"border": "#d97706", "btn": "#d97706", "badge_bg": "#fffbeb", "badge_color": "#b45309", "badge_border": "#fde68a", "label": "Library"},
}


# ── YAML 파서 (no PyYAML) ──────────────────────────────────────
def parse_catalog():
    text = YAML.read_text(encoding="utf-8")
    result = {"apps": [], "sdks": [], "libs": []}
    current_cat = None
    current_item = None

    for raw_line in text.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()

        if stripped.startswith("#") or not stripped:
            continue

        # Top-level category
        m = re.match(r'^(apps|sdks|libs):', line)
        if m:
            if current_item and current_cat:
                result[current_cat].append(current_item)
                current_item = None
            current_cat = m.group(1)
            continue

        if current_cat is None:
            continue

        # New item
        if re.match(r'^  - id:', line):
            if current_item:
                result[current_cat].append(current_item)
            current_item = {"links": {}}
            current_item["id"] = stripped.split(":", 1)[1].strip()
            continue

        if current_item is None:
            continue

        # Item fields
        m = re.match(r'^    (\w+):\s*(.*)', line)
        if m:
            key, val = m.group(1), m.group(2).strip().strip('"')
            if key != "links":
                current_item[key] = val
            continue

        # Link sub-fields
        m = re.match(r'^      (\w+):\s*"?(.*?)"?\s*$', line)
        if m:
            current_item["links"][m.group(1)] = m.group(2).strip()
            continue

    if current_item and current_cat:
        result[current_cat].append(current_item)

    return result


# ── 링크 버튼 HTML ──────────────────────────────────────────────
def _link_buttons_profile(links: dict, cat: str) -> str:
    c = COLORS[cat]
    btns = []
    if "launch" in links:
        btns.append(f'<a href="{links["launch"]}" target="_blank" class="btn-action primary" style="background:{c["btn"]};border-color:{c["btn"]};">라이브 앱</a>')
    if "docs" in links:
        btns.append(f'<a href="{links["docs"]}" class="btn-action primary" style="background:{c["btn"]};border-color:{c["btn"]};">공식 문서</a>')
    if "npm" in links:
        btns.append(f'<a href="{links["npm"]}" target="_blank" class="btn-action secondary">npm</a>')
    if "pypi" in links:
        label = "PyPI"
        if "npm" in links:
            label = "PyPI · npm"
            # npm already added above, don't add again
        else:
            btns.append(f'<a href="{links["pypi"]}" target="_blank" class="btn-action secondary">{label}</a>')
    if "github" in links:
        btns.append(f'<a href="{links["github"]}" target="_blank" class="btn-action secondary">GitHub</a>')
    if "demo" in links and links["demo"] != links.get("docs", ""):
        btns.append(f'<a href="{links["demo"]}" target="_blank" class="btn-action secondary">데모</a>')
    col = len(btns)
    return f'<div class="card-actions cols-{col}">' + "".join(btns) + "</div>"


def _link_buttons_foundation(links: dict, cat: str) -> str:
    c = COLORS[cat]
    btns = []
    if "launch" in links:
        btns.append(f'<a href="{links["launch"]}" target="_blank" class="btn-sm fnd-primary" style="background:{c["btn"]};border-color:{c["btn"]};">Launch App</a>')
    if "docs" in links:
        btns.append(f'<a href="{links["docs"]}" class="btn-sm fnd-primary" style="background:{c["btn"]};border-color:{c["btn"]};">Docs</a>')
    if "npm" in links:
        btns.append(f'<a href="{links["npm"]}" target="_blank" class="btn-sm fnd-pkg" style="background:#cb3837;color:#fff;border-color:#cb3837;">npm</a>')
    if "pypi" in links:
        btns.append(f'<a href="{links["pypi"]}" target="_blank" class="btn-sm fnd-pkg">PyPI</a>')
    if "github" in links:
        btns.append(f'<a href="{links["github"]}" target="_blank" class="btn-sm">GitHub</a>')
    if "demo" in links and links["demo"] != links.get("docs", ""):
        btns.append(f'<a href="{links["demo"]}" target="_blank" class="btn-sm">Demo</a>')
    return '<div class="card-links">' + "".join(btns) + "</div>"


# ── 카드 HTML 생성: 프로필 ─────────────────────────────────────
def build_profile_cards(catalog: dict) -> str:
    lines = []

    def render_category(cat_key: str, items: list, full_width_first=False):
        if not items:
            return
        c = COLORS[cat_key]
        lines.append(f'  <div class="catalog-category">')
        lines.append(f'    <div class="catalog-cat-header" style="background:{c["badge_bg"]};color:{c["badge_color"]};border:1px solid {c["badge_border"]};">{c["label"]}</div>')
        lines.append(f'    <div class="cards-grid">')
        for i, item in enumerate(items):
            span = ' style="grid-column: 1 / -1;"' if (full_width_first and i == 0 and len(items) == 1) else ""
            lines.append(f'      <div class="item-card catalog-card-{cat_key}"{span}>')
            lines.append(f'        <div class="item-card-top">')
            lines.append(f'          <h3><span>{item["name"]}</span> <span class="card-badge" style="background:{c["badge_bg"]};color:{c["badge_color"]};border:1px solid {c["badge_border"]};">{item.get("badge","")}</span></h3>')
            tagline = item.get("tagline_ko", item.get("tagline_en", ""))
            lines.append(f'          <p>{tagline}</p>')
            lines.append(f'        </div>')
            lines.append(f'        {_link_buttons_profile(item["links"], cat_key)}')
            lines.append(f'      </div>')
        lines.append(f'    </div>')
        lines.append(f'  </div>')

    render_category("app", catalog["apps"], full_width_first=True)
    render_category("sdk", catalog["sdks"])
    render_category("lib", catalog["libs"])
    return "\n".join(lines)


# ── 카드 HTML 생성: 재단 ──────────────────────────────────────
def build_foundation_cards(catalog: dict) -> str:
    lines = []

    def render_category(cat_key: str, items: list, label_en: str):
        if not items:
            return
        c = COLORS[cat_key]
        lines.append(f'  <div class="fnd-category">')
        lines.append(f'    <h4 class="fnd-cat-label" style="color:{c["badge_color"]};border-bottom:2px solid {c["border"]};padding-bottom:4px;margin-bottom:12px;">{label_en}</h4>')
        lines.append(f'    <div class="features-grid">')
        for item in items:
            lines.append(f'      <div class="feature-card fnd-card-{cat_key}" style="border-left:4px solid {c["border"]};">')
            lines.append(f'        <div class="fnd-card-header">')
            lines.append(f'          <h4>{item["name"]}</h4>')
            lines.append(f'          <span class="fnd-badge" style="background:{c["badge_bg"]};color:{c["badge_color"]};border:1px solid {c["badge_border"]};">{item.get("badge","")}</span>')
            lines.append(f'        </div>')
            tagline = item.get("tagline_en", item.get("tagline_ko", ""))
            lines.append(f'        <p>{tagline}</p>')
            lines.append(f'        {_link_buttons_foundation(item["links"], cat_key)}')
            lines.append(f'      </div>')
        lines.append(f'    </div>')
    lines.append(f'  </div>')

    render_category("app", catalog["apps"], "Applications")
    render_category("sdk", catalog["sdks"], "SDKs & Runtime Engines")
    render_category("lib", catalog["libs"], "Libraries")
    return "\n".join(lines)


# ── HTML 주입 ─────────────────────────────────────────────────
def inject(html: str, start_marker: str, end_marker: str, content: str) -> tuple[str, bool]:
    pattern = re.compile(
        re.escape(start_marker) + r".*?" + re.escape(end_marker),
        re.DOTALL
    )
    new_block = f"{start_marker}\n{content}\n{end_marker}"
    new_html, count = pattern.subn(new_block, html)
    if count == 0:
        # Markers not found — append warning
        return html, False
    return new_html, True


# ── Verify ────────────────────────────────────────────────────
def verify():
    ok = True
    for path, sm, em in [(INDEX, START_P, END_P), (FOUND, START_F, END_F)]:
        content = path.read_text(encoding="utf-8", errors="replace")
        has_start = sm in content
        has_end = em in content
        status = "PASS" if (has_start and has_end) else "FAIL"
        print(f"  [{status}] {path.relative_to(ROOT)}: start={has_start}, end={has_end}")
        if status == "FAIL":
            ok = False
    return ok


# ── Main ──────────────────────────────────────────────────────
def main():
    parser = argparse.ArgumentParser(description="AMEVA Catalog Builder v1.0.0")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--verify", action="store_true")
    args = parser.parse_args()

    print(f"AMEVA Catalog Builder v1.0.0 | YAML={YAML.relative_to(ROOT)}")

    if args.verify:
        ok = verify()
        sys.exit(0 if ok else 1)

    catalog = parse_catalog()
    apps_n  = len(catalog["apps"])
    sdks_n  = len(catalog["sdks"])
    libs_n  = len(catalog["libs"])
    print(f"Catalog loaded: App={apps_n}, SDK={sdks_n}, Lib={libs_n}")

    profile_html    = build_profile_cards(catalog)
    foundation_html = build_foundation_cards(catalog)

    if args.dry_run:
        print("\n── Profile Cards HTML ──")
        print(profile_html[:800] + "...")
        print("\n── Foundation Cards HTML ──")
        print(foundation_html[:800] + "...")
        return

    # index.html
    idx_content = INDEX.read_text(encoding="utf-8", errors="replace")
    idx_new, ok1 = inject(idx_content, START_P, END_P, profile_html)
    if ok1:
        INDEX.write_text(idx_new, encoding="utf-8")
        print(f"  [OK] index.html updated ({INDEX.stat().st_size}B)")
    else:
        print(f"  [WARN] index.html: injection markers not found. Run: add markers first.")

    # foundation/index.html
    fnd_content = FOUND.read_text(encoding="utf-8", errors="replace")
    fnd_new, ok2 = inject(fnd_content, START_F, END_F, foundation_html)
    if ok2:
        FOUND.write_text(fnd_new, encoding="utf-8")
        print(f"  [OK] foundation/index.html updated ({FOUND.stat().st_size}B)")
    else:
        print(f"  [WARN] foundation/index.html: injection markers not found.")

    verify()


if __name__ == "__main__":
    main()
