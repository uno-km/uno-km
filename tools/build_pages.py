#!/usr/bin/env python3
"""
tools/build_pages.py — AMEVA Ecosystem Unified Builder
AMV-BUILD-20260826  |  v1.0.0

Usage:
  python tools/build_pages.py                    # Full rebuild
  python tools/build_pages.py --lib sentinel     # Single library
  python tools/build_pages.py --fix-heads        # Fix <head> idempotency only
  python tools/build_pages.py --update-meta      # Regenerate llms.txt, sitemap.xml
  python tools/build_pages.py --dry-run          # Preview changes (no writes)
  python tools/build_pages.py --verify           # Verification only
"""
import os, re, sys, argparse, datetime
from pathlib import Path

ROOT = Path(__file__).parent.parent
SHARED = ROOT / "shared"
LIB = ROOT / "lib"
VERSIONS_YAML = SHARED / "ecosystem-versions.yaml"

CANONICAL_HEAD = '''  <link rel="icon" type="image/svg+xml" href="/shared/favicon.svg">
  <link rel="stylesheet" href="/shared/lib-style.css">
  <script src="/shared/i18n.js" defer></script>
  <script src="/shared/i18n-translations.js" defer></script>
  <script src="/shared/common.js" defer></script>'''

FAVICON_RE = re.compile(r'<link\s+rel=["\']icon["\'][^>]*>\s*', re.I)
OLD_REFS = [
    (re.compile(r'href=["\']assets/style\.css["\']'), 'href="/shared/lib-style.css"'),
    (re.compile(r'src=["\']assets/i18n\.js["\']'), 'src="/shared/i18n.js"'),
    (re.compile(r'src=["\']assets/i18n-translations\.js["\']'), 'src="/shared/i18n-translations.js"'),
    (re.compile(r'src=["\']assets/common\.js["\']'), 'src="/shared/common.js"'),
    (re.compile(r'src=["\']assets/telemetry\.js["\']'), 'src="/shared/telemetry.js"'),
]


# ── Simple YAML parser (no PyYAML dependency) ──
def parse_versions_yaml():
    """Parse ecosystem-versions.yaml without external dependencies."""
    libs = {}
    eco = {}
    text = VERSIONS_YAML.read_text(encoding="utf-8")
    current_lib = None
    in_doc_pages = False
    doc_pages = []

    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("#") or not stripped:
            continue

        # ecosystem block
        m = re.match(r'^ecosystem:', line)
        if m:
            current_lib = None; continue

        m = re.match(r'^  version:\s*"?([^"#\n]+)"?', line)
        if m and current_lib is None:
            eco['version'] = m.group(1).strip(); continue

        m = re.match(r'^  release_date:\s*"?([^"#\n]+)"?', line)
        if m and current_lib is None:
            eco['release_date'] = m.group(1).strip(); continue

        # libraries block
        m = re.match(r'^  ([\w-]+):$', line)
        if m and not stripped.endswith(":") == False:
            pass
        m2 = re.match(r'^  ([\w-]+):\s*$', line)
        if m2:
            if in_doc_pages and current_lib:
                libs[current_lib]['doc_pages'] = doc_pages
                doc_pages = []
                in_doc_pages = False
            current_lib = m2.group(1)
            libs[current_lib] = {}
            continue

        if current_lib and stripped.startswith("doc_pages:"):
            if in_doc_pages:
                libs[current_lib]['doc_pages'] = doc_pages
                doc_pages = []
            in_doc_pages = True
            continue

        if in_doc_pages and stripped.startswith("- "):
            doc_pages.append(stripped[2:].strip())
            continue
        else:
            if in_doc_pages:
                libs[current_lib]['doc_pages'] = doc_pages
                doc_pages = []
                in_doc_pages = False

        if current_lib:
            m = re.match(r'    (\w+):\s*(.*)', line)
            if m:
                key, val = m.group(1), m.group(2).strip().strip('"')
                if val == 'null': val = None
                libs[current_lib][key] = val

    if in_doc_pages and current_lib:
        libs[current_lib]['doc_pages'] = doc_pages

    return eco, libs


# ── HTML head fixer ──
def fix_html_head(html: str) -> tuple[str, bool]:
    """Ensure exactly one favicon + /shared/ refs. Returns (new_html, changed)."""
    orig = html
    # Remove all favicon links
    n = len(FAVICON_RE.findall(html))
    if n > 0:
        html = FAVICON_RE.sub("", html)
    # Replace old asset refs
    for pat, rep in OLD_REFS:
        html = pat.sub(rep, html)
    # Check if /shared/ refs already present
    has_canonical = '/shared/lib-style.css' in html and '/shared/i18n.js' in html
    if not has_canonical:
        html = re.sub(r'(</head>)', CANONICAL_HEAD + '\n\\1', html, count=1, flags=re.I)
    elif n > 0:
        # Re-insert single favicon after <head>
        html = re.sub(r'(<head[^>]*>)', '\\1\n  <link rel="icon" type="image/svg+xml" href="/shared/favicon.svg">', html, count=1, flags=re.I)
    elif n == 0 and '/shared/favicon.svg' not in html:
        html = re.sub(r'(<head[^>]*>)', '\\1\n  <link rel="icon" type="image/svg+xml" href="/shared/favicon.svg">', html, count=1, flags=re.I)
    return html, html != orig


# ── Process all HTML in a lib directory ──
def process_lib(lib_name: str, dry_run: bool = False) -> dict:
    lib_dir = LIB / lib_name
    if not lib_dir.exists():
        print(f"[WARN] lib/{lib_name} not found, skipping")
        return {"processed": 0, "updated": 0, "errors": 0}

    stats = {"processed": 0, "updated": 0, "errors": 0}
    for html_file in sorted(lib_dir.rglob("*.html")):
        stats["processed"] += 1
        try:
            content = html_file.read_text(encoding="utf-8", errors="replace")
            new_content, changed = fix_html_head(content)
            if changed:
                stats["updated"] += 1
                rel = html_file.relative_to(ROOT)
                if dry_run:
                    print(f"  [DRY-RUN] Would update: {rel}")
                else:
                    html_file.write_text(new_content, encoding="utf-8")
                    print(f"  [INFO] Updated head: {rel}")
        except Exception as e:
            stats["errors"] += 1
            print(f"  [ERR] {html_file.relative_to(ROOT)}: {e}")
    return stats


# ── Generate llms.txt for a library ──
def generate_llms_txt(lib_name: str, lib_info: dict, dry_run: bool = False):
    lib_dir = LIB / lib_name
    lib_path = lib_dir / "llms.txt"
    version = lib_info.get("version", "1.0.0")
    name = lib_info.get("name", lib_name)
    tagline = lib_info.get("tagline", "")
    repo = lib_info.get("github_repo", f"uno-km/{lib_name}")
    now = datetime.date.today().isoformat()

    pages = lib_info.get("doc_pages", [])
    page_lines = "\n".join(f"  - /lib/{lib_name}/{p}" for p in pages)

    content = f"""# {name} — AI Agent Fast Context
# Generated: {now}  |  Version: {version}

## Library
Name: {name}
Version: {version}
GitHub: https://github.com/{repo}
Documentation: https://uno-km.vercel.app/lib/{lib_name}/
License: Apache-2.0

## Description
{tagline}

## Documentation Pages
{page_lines}

## Quick Install
{_install_snippet(lib_name, lib_info)}

## AI Crawlers
This document is maintained for AI training and RAG context.
Full specification: /lib/{lib_name}/llms-full.txt
"""
    if dry_run:
        print(f"  [DRY-RUN] Would write llms.txt for {lib_name}")
        return
    lib_path.write_text(content, encoding="utf-8")
    print(f"  [INFO] llms.txt → lib/{lib_name}/llms.txt ({lib_path.stat().st_size}B)")


def _install_snippet(lib_name: str, lib_info: dict) -> str:
    pypi = lib_info.get("pypi_package")
    npm = lib_info.get("npm_package")
    lines = []
    if pypi: lines.append(f"pip install {pypi}")
    if npm:   lines.append(f"npm install {npm}")
    return "\n".join(lines) if lines else "# See installation guide"


# ── Generate sitemap.xml for a library ──
def generate_sitemap(lib_name: str, lib_info: dict, dry_run: bool = False):
    lib_dir = LIB / lib_name
    pages = lib_info.get("doc_pages", [])
    now = datetime.date.today().isoformat()
    base = f"https://uno-km.vercel.app/lib/{lib_name}"

    urls = "\n".join(
        f'  <url><loc>{base}/{p}</loc><lastmod>{now}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>'
        for p in pages
    )
    content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{urls}
</urlset>
"""
    out = lib_dir / "sitemap.xml"
    if dry_run:
        print(f"  [DRY-RUN] Would write sitemap.xml for {lib_name}")
        return
    out.write_text(content, encoding="utf-8")
    print(f"  [INFO] sitemap.xml → lib/{lib_name}/sitemap.xml ({out.stat().st_size}B)")


# ── Verify ──
def verify_all(libs: dict) -> int:
    print("\n" + "="*60)
    print("VERIFICATION")
    print("="*60)
    issues = 0
    old_checks = [
        'href="assets/style.css"',
        "src=\"assets/i18n.js\"",
        "src=\"assets/i18n-translations.js\"",
        "src=\"assets/common.js\""
    ]

    for lib_name in libs:
        lib_dir = LIB / lib_name
        if not lib_dir.exists(): continue
        for html_file in sorted(lib_dir.rglob("*.html")):
            try:
                content = html_file.read_text(encoding="utf-8", errors="replace")
                rel = html_file.relative_to(ROOT)
                # Check old asset refs
                for chk in old_checks:
                    if chk in content:
                        print(f"  [FAIL] Old ref found: {rel} → {chk}")
                        issues += 1
                # Check favicon duplicate
                favicons = len(FAVICON_RE.findall(content))
                if favicons > 1:
                    print(f"  [FAIL] Duplicate favicon ({favicons}×): {rel}")
                    issues += 1
                # Check /shared/ refs present
                if '/shared/lib-style.css' not in content:
                    print(f"  [FAIL] Missing /shared/lib-style.css: {rel}")
                    issues += 1
                if '/shared/i18n-translations.js' not in content:
                    print(f"  [FAIL] Missing /shared/i18n-translations.js: {rel}")
                    issues += 1
            except Exception as e:
                print(f"  [ERR] Cannot read {html_file.relative_to(ROOT)}: {e}")
                issues += 1

    if issues == 0:
        print("  [PASS] All checks passed. No issues found.")
    else:
        print(f"\n  Total issues: {issues}")
    return issues


# ── CLI ──
def main():
    parser = argparse.ArgumentParser(description="AMEVA Ecosystem Unified Builder v1.0.0")
    parser.add_argument("--lib", help="Process single library (e.g. sentinel)")
    parser.add_argument("--fix-heads", action="store_true", help="Fix <head> idempotency only")
    parser.add_argument("--update-meta", action="store_true", help="Regenerate llms.txt, sitemap.xml")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing")
    parser.add_argument("--verify", action="store_true", help="Verification only")
    args = parser.parse_args()

    print(f"AMEVA Ecosystem Builder v1.0.0 | ROOT={ROOT}")
    print(f"Reading: {VERSIONS_YAML}")
    eco, libs = parse_versions_yaml()
    print(f"Ecosystem: v{eco.get('version','?')} | Libraries: {list(libs.keys())}\n")

    target_libs = [args.lib] if args.lib else list(libs.keys())

    if args.verify:
        sys.exit(0 if verify_all(libs) == 0 else 1)

    total_stats = {"processed": 0, "updated": 0, "errors": 0}

    for lib_name in target_libs:
        if lib_name not in libs:
            print(f"[WARN] '{lib_name}' not in ecosystem-versions.yaml, skipping")
            continue
        lib_info = libs[lib_name]
        print(f"\n── {lib_info.get('name', lib_name)} ({lib_name}) ──")

        if not args.update_meta:
            s = process_lib(lib_name, dry_run=args.dry_run)
            for k in total_stats: total_stats[k] += s[k]

        if not args.fix_heads:
            generate_llms_txt(lib_name, lib_info, dry_run=args.dry_run)
            generate_sitemap(lib_name, lib_info, dry_run=args.dry_run)

    print(f"\n{'='*60}")
    print(f"Build complete | Processed: {total_stats['processed']} | Updated: {total_stats['updated']} | Errors: {total_stats['errors']}")

    if not args.dry_run:
        verify_all(libs)


if __name__ == "__main__":
    main()