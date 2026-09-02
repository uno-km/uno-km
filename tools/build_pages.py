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
from html.parser import HTMLParser

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


# ── Standard YAML Parser (PyYAML Safe Load) ──
def parse_versions_yaml() -> tuple[dict, dict]:
    """Parse ecosystem-versions.yaml using standard PyYAML safe_load."""
    try:
        import yaml
    except ImportError:
        raise ImportError(
            "PyYAML is required to parse ecosystem-versions.yaml with schema validation. "
            "Please install it using: pip install pyyaml"
        )

    text = VERSIONS_YAML.read_text(encoding="utf-8")
    try:
        data = yaml.safe_load(text)
    except Exception as exc:
        raise ValueError(f"Failed to parse ecosystem-versions.yaml: {exc}")

    if not isinstance(data, dict):
        raise ValueError("Invalid format in ecosystem-versions.yaml: Root element must be a dictionary.")

    eco = data.get("ecosystem", {}) or {}
    libs = data.get("libraries", {}) or {}

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


# ── Universal Header Controls Commonization (SSOT) ──
def build_header_controls(rel_path: str, libs: dict) -> str:
    parts = rel_path.split("/")
    if parts[0] == "lib" and len(parts) >= 2:
        lkey = parts[1]
        lib_info = libs.get(lkey, {})
        ver = lib_info.get("version", "1.0.0")
        ver_tag = "v" + ver if not ver.startswith("v") else ver
        repo = lib_info.get("github_repo", f"uno-km/{lkey}")
        github_url = f"https://github.com/{repo}" if not repo.startswith("http") else repo
        pypi = lib_info.get("pypi_package")
        npm = lib_info.get("npm_package")

        pkg_btn = ""
        if pypi and npm:
            pkg_btn = f'''
      <div class="header-btn-dual registry-dual">
        <a href="https://pypi.org/project/{pypi}/" target="_blank" class="dual-link pip-link">pip</a>
        <span class="dual-divider">/</span>
        <a href="https://www.npmjs.com/package/{npm}" target="_blank" class="dual-link npm-link">npm</a>
      </div>'''
        elif pypi:
            pkg_btn = f'\n      <a href="https://pypi.org/project/{pypi}/" target="_blank" class="header-btn pypi-btn" data-i18n="common.pypiBtn">PyPI (pip)</a>'
        elif npm:
            pkg_btn = f'\n      <a href="https://www.npmjs.com/package/{npm}" target="_blank" class="header-btn npm-btn" data-i18n="common.npmBtn">npm</a>'

        return f'''<div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">{ver_tag}</span>
      <div class="lang-selector-wrapper"></div>
      <div class="header-btn-dual foundation-dual">
        <a href="/foundation/index.html" class="dual-link foundation-link" data-i18n="common.foundationIntroBtn">재단 소개</a>
        <span class="dual-divider">/</span>
        <a href="{github_url}" target="_blank" class="dual-link github-link" data-i18n="common.githubBtn">깃허브</a>
      </div>{pkg_btn}
      <a href="https://github.com/sponsors/uno-km" target="_blank" class="header-btn" style="border-color: #ea4aaa; color: #ea4aaa; font-weight: 700;">Sponsor</a>
    </div>'''

    elif parts[0] == "foundation":
        return '''<div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">AOSF Tier 1 TLP</span>
      <div class="lang-selector-wrapper"></div>
      <div class="header-btn-dual foundation-dual">
        <a href="/foundation/index.html" class="dual-link foundation-link" data-i18n="common.foundationIntroBtn">재단 소개</a>
        <span class="dual-divider">/</span>
        <a href="https://github.com/uno-km/uno-km" target="_blank" class="dual-link github-link" data-i18n="common.githubBtn">깃허브</a>
      </div>
      <a href="https://github.com/sponsors/uno-km" target="_blank" class="header-btn" style="border-color: #ea4aaa; color: #ea4aaa; font-weight: 700;">Sponsor</a>
      <a href="/" class="header-btn" style="border-color:#004499;color:#004499;font-weight:600;" data-i18n="common.founderBtn">Founder CV</a>
    </div>'''

    else:
        return '''<div class="header-controls">
      <span class="release-tag" data-i18n="common.releaseTag">AOSF v2.0 (Active)</span>
      <div class="lang-selector-wrapper"></div>
      <div class="header-btn-dual foundation-dual">
        <a href="/foundation/index.html" class="dual-link foundation-link" data-i18n="common.foundationIntroBtn">재단 소개</a>
        <span class="dual-divider">/</span>
        <a href="https://github.com/uno-km/uno-km" target="_blank" class="dual-link github-link" data-i18n="common.githubBtn">깃허브</a>
      </div>
      <a href="https://github.com/sponsors/uno-km" target="_blank" class="header-btn" style="border-color: #ea4aaa; color: #ea4aaa; font-weight: 700;">Sponsor</a>
    </div>'''


def fix_header_controls(html: str, rel_path: str, libs: dict) -> tuple[str, bool]:
    orig = html
    header_match = re.search(r'<header>(.*?)</header>', html, re.DOTALL)
    if not header_match:
        return html, False

    old_header = header_match.group(0)
    brand_match = re.search(r'(<a\s+href="[^"]*"\s+class="header-brand">.*?</a>)', old_header, re.DOTALL)
    if not brand_match:
        return html, False

    brand_html = brand_match.group(1).strip()
    new_controls = build_header_controls(rel_path, libs)
    new_header = f'''<header>
    {brand_html}
    {new_controls}
  </header>'''

    new_html = html[:header_match.start()] + new_header + html[header_match.end():]
    return new_html, new_html != orig


# ── Process all HTML in a lib directory ──
def process_lib(lib_name: str, libs: dict, dry_run: bool = False) -> dict:
    lib_dir = LIB / lib_name
    if not lib_dir.exists():
        print(f"[WARN] lib/{lib_name} not found, skipping")
        return {"processed": 0, "updated": 0, "errors": 0}

    stats = {"processed": 0, "updated": 0, "errors": 0}
    for html_file in sorted(lib_dir.rglob("*.html")):
        stats["processed"] += 1
        try:
            rel = html_file.relative_to(ROOT).as_posix()
            content = html_file.read_text(encoding="utf-8", errors="replace")
            
            # 1. Head canonicalization
            new_content, changed_head = fix_html_head(content)
            # 2. Header controls SSOT sync
            new_content, changed_header = fix_header_controls(new_content, rel, libs)
            
            if changed_head or changed_header:
                stats["updated"] += 1
                if dry_run:
                    print(f"  [DRY-RUN] Would update: {rel}")
                else:
                    html_file.write_text(new_content, encoding="utf-8")
                    print(f"  [INFO] Synchronized: {rel}")
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


# ── HTML Validator & Multi-Stage Integrity Suite ──
class HTMLDocumentValidator(HTMLParser):
    def __init__(self, file_path: Path, root_path: Path):
        super().__init__()
        self.file_path = file_path
        self.root_path = root_path
        self.links = []  # (tag, attr, val, line_no)
        self.has_title = False
        self.has_viewport = False
        self.has_charset = False
        self.has_canonical_css = False
        self.has_i18n_js = False
        self.has_i18n_trans = False
        self.favicon_count = 0
        self.legacy_refs = []
        self.parse_errors = []

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        line, _ = self.getpos()
        if tag == "title":
            self.has_title = True
        elif tag == "meta":
            if "charset" in attr_dict:
                self.has_charset = True
            if attr_dict.get("name", "").lower() == "viewport":
                self.has_viewport = True
        elif tag == "link":
            rel = attr_dict.get("rel", "").lower()
            href = attr_dict.get("href", "")
            if "icon" in rel:
                self.favicon_count += 1
            if "/shared/lib-style.css" in href or "/shared/style.css" in href:
                self.has_canonical_css = True
            if "assets/style.css" in href:
                self.legacy_refs.append((tag, "href", href, line))
        elif tag == "script":
            src = attr_dict.get("src", "")
            if "/shared/i18n.js" in src:
                self.has_i18n_js = True
            if "/shared/i18n-translations.js" in src:
                self.has_i18n_trans = True
            if any(old in src for old in ["assets/i18n.js", "assets/i18n-translations.js", "assets/common.js"]):
                self.legacy_refs.append((tag, "src", src, line))

        for attr in ("href", "src"):
            if attr in attr_dict:
                self.links.append((tag, attr, attr_dict[attr], line))

    def error(self, message):
        self.parse_errors.append(message)


def check_internal_link(file_path: Path, root_path: Path, link_val: str) -> tuple[bool, str]:
    """Validates whether an internal link or asset exists on disk."""
    clean = link_val.strip()
    if not clean:
        return True, ""
    if clean.startswith(("http://", "https://", "mailto:", "tel:", "javascript:", "#", "data:")):
        return True, ""

    target = clean.split("#")[0].split("?")[0].strip()
    if not target:
        return True, ""

    if target.startswith("/"):
        resolved = (root_path / target.lstrip("/")).resolve()
    else:
        resolved = (file_path.parent / target).resolve()

    if resolved.is_dir():
        resolved = resolved / "index.html"

    if not resolved.exists():
        return False, f"Broken link reference -> {target}"
    return True, ""


def check_null_bytes(target_dirs: list[Path]) -> list[tuple[Path, int]]:
    """Scans all web and configuration files for 0x00 null byte corruption."""
    corrupted = []
    for t_dir in target_dirs:
        if not t_dir.exists():
            continue
        for root, dirs, files in os.walk(t_dir):
            if any(p in root for p in [".git", "node_modules", "__pycache__"]):
                continue
            for f in files:
                if f.endswith((".html", ".xml", ".txt", ".yaml", ".json", ".css", ".js", ".md")):
                    p = Path(root) / f
                    try:
                        with open(p, "rb") as fp:
                            raw = fp.read()
                            if b"\x00" in raw:
                                corrupted.append((p, raw.count(b"\x00")))
                    except Exception:
                        pass
    return corrupted


def verify_all(libs: dict) -> int:
    print("\n" + "="*70)
    print("AMEVA ECOSYSTEM RIGOROUS VERIFICATION SUITE")
    print("="*70)
    issues = 0
    total_files_checked = 0
    total_links_checked = 0
    total_yaml_pages_checked = 0

    # 1. Null-Byte Binary Guard
    print("[1/4] Scanning for raw Null-Byte (0x00) binary corruption...")
    scan_dirs = [LIB, ROOT / "foundation", SHARED]
    corrupted_files = check_null_bytes(scan_dirs)
    if corrupted_files:
        for p, count in corrupted_files:
            rel = p.relative_to(ROOT)
            print(f"  [FAIL] Null-byte corruption detected ({count} null bytes): {rel}")
            issues += 1
    else:
        print("  [PASS] 0 Null-byte corruptions found across all web and config files.")

    # 2. YAML SSOT Alignment Verification
    print("\n[2/4] Verifying ecosystem-versions.yaml doc_pages alignment...")
    for lib_name, lib_info in libs.items():
        lib_dir = LIB / lib_name
        if not lib_dir.exists():
            print(f"  [FAIL] Missing library directory: lib/{lib_name}")
            issues += 1
            continue

        doc_pages = lib_info.get("doc_pages", [])
        for page in doc_pages:
            total_yaml_pages_checked += 1
            page_path = lib_dir / page
            if not page_path.exists():
                print(f"  [FAIL] YAML doc_page missing on disk: lib/{lib_name}/{page}")
                issues += 1

    if issues == 0:
        print(f"  [PASS] All {total_yaml_pages_checked} YAML doc_pages verified on disk.")

    # 3. HTML Parser, Syntax, Head Compliance & Link Resolution
    print("\n[3/4] Parsing HTML well-formedness, required meta tags, and resolving links...")
    for lib_name in libs:
        lib_dir = LIB / lib_name
        if not lib_dir.exists():
            continue
        for html_file in sorted(lib_dir.rglob("*.html")):
            total_files_checked += 1
            rel = html_file.relative_to(ROOT)
            try:
                content = html_file.read_text(encoding="utf-8", errors="replace")
                validator = HTMLDocumentValidator(html_file, ROOT)
                validator.feed(content)

                # Syntax errors
                if validator.parse_errors:
                    for err in validator.parse_errors:
                        print(f"  [FAIL] HTML Syntax Error in {rel}: {err}")
                        issues += 1

                # Legacy asset references
                if validator.legacy_refs:
                    for tag, attr, val, line in validator.legacy_refs:
                        print(f"  [FAIL] Legacy relative asset found: {rel}:L{line} -> <{tag} {attr}=\"{val}\">")
                        issues += 1

                # Duplicate favicon
                if validator.favicon_count > 1:
                    print(f"  [FAIL] Duplicate favicon ({validator.favicon_count}x): {rel}")
                    issues += 1

                # Missing canonical stylesheet
                if not validator.has_canonical_css:
                    print(f"  [FAIL] Missing canonical stylesheet (/shared/lib-style.css): {rel}")
                    issues += 1

                # Missing i18n scripts
                if not validator.has_i18n_trans:
                    print(f"  [FAIL] Missing i18n translations (/shared/i18n-translations.js): {rel}")
                    issues += 1

                # Internal link validation
                for tag, attr, val, line in validator.links:
                    total_links_checked += 1
                    valid, err_msg = check_internal_link(html_file, ROOT, val)
                    if not valid:
                        print(f"  [FAIL] {rel}:L{line} -> {err_msg}")
                        issues += 1

            except Exception as e:
                print(f"  [ERR] Failed to read/parse {rel}: {e}")
                issues += 1

    # 4. Summary Scorecard
    print("\n" + "="*70)
    print("VERIFICATION SCORECARD:")
    print(f"  - Total HTML Documents Checked : {total_files_checked}")
    print(f"  - Total Links/Assets Resolved  : {total_links_checked}")
    print(f"  - YAML Document Pages Verified : {total_yaml_pages_checked}")
    print(f"  - Total Detected Issues        : {issues}")
    print("="*70)

    if issues == 0:
        print("  [PASS] All verification stages passed with zero issues.")
    else:
        print(f"  [FAIL] Verification encountered {issues} issue(s). Please review logs.")
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
            s = process_lib(lib_name, libs, dry_run=args.dry_run)
            for k in total_stats: total_stats[k] += s[k]

        if not args.fix_heads:
            generate_llms_txt(lib_name, lib_info, dry_run=args.dry_run)
            generate_sitemap(lib_name, lib_info, dry_run=args.dry_run)

    # Also process foundation/ and docs/ directories
    if not args.lib and not args.update_meta:
        for extra_dir in [ROOT / "foundation", ROOT / "docs"]:
            if extra_dir.exists():
                for html_file in sorted(extra_dir.rglob("*.html")):
                    total_stats["processed"] += 1
                    try:
                        rel = html_file.relative_to(ROOT).as_posix()
                        content = html_file.read_text(encoding="utf-8", errors="replace")
                        new_content, c_head = fix_html_head(content)
                        new_content, c_hdr = fix_header_controls(new_content, rel, libs)
                        if c_head or c_hdr:
                            total_stats["updated"] += 1
                            if not args.dry_run:
                                html_file.write_text(new_content, encoding="utf-8")
                                print(f"  [INFO] Synchronized: {rel}")
                    except Exception as e:
                        total_stats["errors"] += 1
                        print(f"  [ERR] {html_file.relative_to(ROOT)}: {e}")

    print(f"\n{'='*60}")
    print(f"Build complete | Processed: {total_stats['processed']} | Updated: {total_stats['updated']} | Errors: {total_stats['errors']}")

    if not args.dry_run:
        verify_all(libs)


if __name__ == "__main__":
    main()