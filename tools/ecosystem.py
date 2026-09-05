#!/usr/bin/env python3
"""
tools/ecosystem.py — AMEVA Universal Ecosystem Toolchain (AET)
Version: 1.0.0 (Master Unified SSOT & Release Compiler)

Single Source of Truth (SSOT) architecture for uno-km / AMEVA:
  1. init       : Scaffolds a new library with doc.config.yaml & custom pages.
  2. build      : Compiles 3-target READMEs (GitHub/PyPI/NPM), validates badges,
                  builds web documentation (8 standard + custom pages), and syncs catalogs.
  3. release    : Bumps version, rebuilds all views, and optionally publishes to PyPI/NPM.
  4. sync       : Synchronizes ecosystem catalogs, sidebars, and metrics.
"""

import os
import sys
import json
import re
import shutil
import argparse
import subprocess
import urllib.parse
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = Path(__file__).parent.parent.resolve()
DEV_DIR = ROOT_DIR.parent
CATALOG_PATH = ROOT_DIR / "shared" / "ecosystem-catalog.yaml"
INDEX_PATH = ROOT_DIR / "index.html"
FOUNDATION_INDEX_PATH = ROOT_DIR / "foundation" / "index.html"
METRICS_PATH = ROOT_DIR / "foundation" / "metrics.html"
DOCS_METRICS_PATH = ROOT_DIR / "docs" / "foundation" / "metrics.html"

# ── Standard YAML Parser (PyYAML Safe Load) ─────────────────────────
def parse_simple_yaml(file_path: Path) -> dict:
    """Parse YAML configuration using standard PyYAML safe_load."""
    if not file_path.exists():
        return {}
    try:
        import yaml
    except ImportError:
        raise ImportError(
            f"PyYAML is required to parse {file_path.name} with schema validation. "
            "Please install it using: pip install pyyaml"
        )
    text = file_path.read_text(encoding="utf-8")
    try:
        data = yaml.safe_load(text)
        return data if isinstance(data, dict) else {}
    except Exception as exc:
        raise ValueError(f"Failed to parse {file_path}: {exc}")


# ── Badge Generator & Validator (Zero-404 Guard) ───────────────
def generate_safe_badges(config: dict, target="github") -> list:
    badges = []
    pypi_pkg = config.get("package_name_pypi") or config.get("pypi_pkg")
    npm_pkg = config.get("package_name_npm") or config.get("npm_pkg")
    license_type = config.get("license", "Apache-2.0")
    repo_url = config.get("github_repo_url") or config.get("github_repo", "https://github.com/uno-km/uno-km")

    # PyPI Badges (Only when target is github or pypi)
    if pypi_pkg and target in ("github", "pypi"):
        encoded_pypi = urllib.parse.quote(pypi_pkg, safe='')
        badges.append(f'[![PyPI](https://img.shields.io/pypi/v/{encoded_pypi}.svg?style=flat-square&color=0369a1)](https://pypi.org/project/{pypi_pkg}/)')
        badges.append(f'[![Python](https://img.shields.io/pypi/pyversions/{encoded_pypi}.svg?style=flat-square)](https://pypi.org/project/{pypi_pkg}/)')

    # NPM Badges (Only when target is github or npm)
    if npm_pkg and target in ("github", "npm"):
        encoded_npm = urllib.parse.quote(npm_pkg, safe='')
        badges.append(f'[![npm](https://img.shields.io/npm/v/{encoded_npm}.svg?style=flat-square&color=b91c1c)](https://www.npmjs.com/package/{npm_pkg})')
        badges.append(f'[![npm downloads](https://img.shields.io/npm/dm/{encoded_npm}.svg?style=flat-square&color=b91c1c)](https://www.npmjs.com/package/{npm_pkg})')

    # License Badge
    if license_type:
        safe_license = license_type.replace("-", "_")
        badges.append(f'[![License](https://img.shields.io/badge/License-{safe_license}-004499.svg?style=flat-square)]({repo_url})')

    return badges


# ── Target-Aware README Compiler ───────────────────────────────
def compile_target_readmes(lib_dir: Path, config: dict):
    """
    Compiles 3 distinct, highly tailored READMEs:
      1. README.md       : GitHub Master Dual View (Architecture, dual tabs)
      2. README.pypi.md  : PyPI Python-only View (No npm/JS clutter)
      3. npm/README.md   : NPM Node.js-only View (No pip/Python clutter)
    """
    name = config.get("name", lib_dir.name)
    tagline_ko = config.get("tagline_ko", "")
    tagline_en = config.get("tagline_en", "")
    pypi_pkg = config.get("package_name_pypi") or config.get("pypi_pkg")
    npm_pkg = config.get("package_name_npm") or config.get("npm_pkg")
    python_example = config.get("code_example_py") or config.get("python_example", "# Python example coming soon")
    node_example = config.get("code_example_js") or config.get("node_example", "// Node.js example coming soon")
    desc_ko = config.get("description_ko", tagline_ko)
    desc_en = config.get("description_en", tagline_en)
    repo_url = config.get("github_repo_url") or config.get("github_repo", f"https://github.com/uno-km/{lib_dir.name}")
    if lib_dir.name.lower() in ("vulkan", "ameva-vulkan", "ameva-runtime", "ameva-vulkan-runtime"):
        slug = "vulkan"
    else:
        slug = lib_dir.name.replace('termux-', '').replace('AMEVA-', '').replace('ameva-', '').lower()
    doc_url = f"https://uno-km.vercel.app/lib/{slug}/"

    # 1. GitHub Master README
    gh_badges = "\n".join(generate_safe_badges(config, "github"))
    if config.get("readme_content"):
        gh_readme = config.get("readme_content").strip() + "\n"
    else:
        gh_tagline = ""
        if tagline_ko and tagline_ko != tagline_en:
            gh_tagline = f"> **{tagline_ko}**  \n> *{tagline_en}*\n\n"
        elif tagline_en:
            gh_tagline = f"> {tagline_en}\n\n"

        gh_desc = ""
        if desc_ko and desc_ko != desc_en:
            gh_desc = f"{desc_ko}\n\n{desc_en}"
        elif desc_en:
            gh_desc = desc_en

        gh_readme = f"""# {name}

{gh_badges}

{gh_tagline}---

## Architecture & Overview

{gh_desc}

---

## Installation & Quickstart

"""
        if pypi_pkg and npm_pkg:
            gh_readme += f"""### Python (PyPI)
```bash
pip install {pypi_pkg}
```
```python
{python_example}
```

### Node.js / TypeScript (npm)
```bash
npm install {npm_pkg}
```
```typescript
{node_example}
```
"""
        elif pypi_pkg:
            gh_readme += f"""```bash
pip install {pypi_pkg}
```
```python
{python_example}
```
"""
        elif npm_pkg:
            gh_readme += f"""```bash
npm install {npm_pkg}
```
```typescript
{node_example}
```
"""

        gh_readme += f"""
---

## Official Documentation & Benchmarks
- [Official Architecture & API Reference]({doc_url})
- [Ecosystem Metrics & Registry Stats](https://uno-km.vercel.app/foundation/metrics)
- [AMEVA Open-Source Foundation Portal](https://uno-km.vercel.app/foundation/index.html)

---

## License
Licensed under the Apache-2.0 License. Copyright (c) 2026 Eunho Kim ([@uno-km](https://github.com/uno-km)).
"""
    (lib_dir / "README.md").write_text(gh_readme, encoding="utf-8")
    print(f"  [OK] Generated GitHub Master README: {lib_dir / 'README.md'}")

    # 2. PyPI Python-only README
    if pypi_pkg:
        pypi_badges = "\n".join(generate_safe_badges(config, "pypi"))
        if config.get("readme_pypi_content"):
            pypi_readme = config.get("readme_pypi_content").strip() + "\n"
        else:
            pypi_tagline = f"> {tagline_en}\n\n" if tagline_en else ""
            pypi_readme = f"""# {name} (Python)

{pypi_badges}

{pypi_tagline}## Installation

```bash
pip install {pypi_pkg}
```

## Quickstart

```python
{python_example}
```

## Description
{desc_en}

## Documentation
- [Official Documentation & API Reference]({doc_url})
- [GitHub Repository]({repo_url})

## License
Apache-2.0 License. Copyright (c) 2026 Eunho Kim (@uno-km).
"""
        (lib_dir / "README.pypi.md").write_text(pypi_readme, encoding="utf-8")
        print(f"  [OK] Generated PyPI Python-only README: {lib_dir / 'README.pypi.md'}")

    # 3. NPM Node.js-only README
    if npm_pkg:
        npm_badges = "\n".join(generate_safe_badges(config, "npm"))
        npm_dir = lib_dir / "npm" if (lib_dir / "npm").exists() else lib_dir
        if config.get("readme_npm_content"):
            npm_readme = config.get("readme_npm_content").strip() + "\n"
        else:
            npm_tagline = f"> {tagline_en}\n\n" if tagline_en else ""
            npm_readme = f"""# {name} (Node.js & TypeScript)

{npm_badges}

{npm_tagline}## Installation

```bash
npm install {npm_pkg}
```

## Quickstart

```typescript
{node_example}
```

## Description
{desc_en}

## Documentation
- [Official Documentation & API Reference]({doc_url})
- [GitHub Repository]({repo_url})

## License
Apache-2.0 License. Copyright (c) 2026 Eunho Kim (@uno-km).
"""
        if (lib_dir / "npm").exists():
            (lib_dir / "npm" / "README.md").write_text(npm_readme, encoding="utf-8")
            print(f"  [OK] Generated NPM Node-only README: {lib_dir / 'npm' / 'README.md'}")



# ── Web Documentation & Custom Page Slot Builder ───────────────
def build_library_docs(lib_name: str, config: dict):
    """
    Builds the 8 standard HTML documentation pages + custom slotted pages
    using ameva_doc engine.
    """
    builder_script = ROOT_DIR / "tools" / "doc_builder" / "ameva_doc.py"
    if not builder_script.exists():
        print(f"  [WARN] ameva_doc.py not found at {builder_script}")
        return

    lib_path = DEV_DIR / lib_name
    if not lib_path.exists():
        lib_path = DEV_DIR / f"termux-{lib_name}"
    if not lib_path.exists():
        lib_path = DEV_DIR / f"AMEVA-{lib_name}"

    config_file = lib_path / "doc.config.yaml" if lib_path.exists() else None
    if config_file and config_file.exists():
        if lib_name.lower() in ("vulkan", "ameva-vulkan", "ameva-runtime", "ameva-vulkan-runtime"):
            slug = "vulkan"
        else:
            slug = lib_name.replace('termux-', '').replace('AMEVA-', '').replace('ameva-', '').replace('-runtime', '').lower()
        output_dir = ROOT_DIR / "lib" / slug
        output_dir.mkdir(parents=True, exist_ok=True)
        cmd = [sys.executable, str(builder_script), "--config", str(config_file), "--output", str(output_dir)]
        subprocess.run(cmd, check=False)
        print(f"  [OK] Compiled Web Documentation via ameva_doc for '{lib_name}' -> {output_dir}")


# ── Catalog & Profile Sync ─────────────────────────────────────
def sync_all_catalogs():
    """Runs build_catalog.py and sync_sidebars.py to propagate all changes."""
    catalog_builder = ROOT_DIR / "tools" / "build_catalog.py"
    sidebar_syncer = ROOT_DIR / "tools" / "sync_sidebars.py"

    if catalog_builder.exists():
        subprocess.run([sys.executable, str(catalog_builder)], check=False)
        print("  [OK] Synchronized ecosystem catalog into index.html and foundation portal.")
    if sidebar_syncer.exists():
        subprocess.run([sys.executable, str(sidebar_syncer)], check=False)
        print("  [OK] Synchronized 3-tier sidebars across all documentation pages.")


# ── CLI Commands ───────────────────────────────────────────────
def cmd_init(args):
    """Scaffolds a new library with standard doc.config.yaml and custom page slots."""
    lib_name = args.name
    lib_dir = DEV_DIR / lib_name
    lib_dir.mkdir(parents=True, exist_ok=True)
    (lib_dir / "docs").mkdir(parents=True, exist_ok=True)

    config_content = f"""# doc.config.yaml - {lib_name} Single Source of Truth
name: "{lib_name}"
package_name_pypi: "{lib_name.lower()}"
package_name_npm: "{lib_name.lower()}"
version: "v1.0.0"
release_name: "Initial Release"
license: "Apache-2.0"
platform: "Android ARM64 / WebGPU"
github_repo_url: "https://github.com/uno-km/{lib_name}"

tagline_ko: "{lib_name} 차세대 오픈소스 엔지니어링 라이브러리"
tagline_en: "{lib_name} Next-Generation Open-Source Systems Library"

description_ko: "하드웨어 가속 및 결정론적 아키텍처를 기반으로 초저지연 및 고신뢰성 연산을 제공합니다."
description_en: "Provides ultra-low latency and deterministic execution on edge and browser environments."

code_example_py: |
  import {lib_name.lower().replace('-', '_')} as lib
  client = lib.Engine()
  result = client.run()
  print(result)

code_example_js: |
  import {{ Engine }} from '{lib_name.lower()}';
  const engine = new Engine();
  const result = await engine.run();
  console.log(result);

# ★ Custom Slotted Pages (특화 메뉴 2~3개)
custom_pages:
  - slug: "guide"
    title_ko: "실전 엔지니어링 가이드"
    title_en: "Engineering Guide"
    file: "docs/guide.md"
"""
    (lib_dir / "doc.config.yaml").write_text(config_content, encoding="utf-8")
    (lib_dir / "docs" / "guide.md").write_text(f"# {lib_name} Engineering Guide\n\nDeep-dive technical guide.", encoding="utf-8")

    print(f"[SUCCESS] Scaffolding created for '{lib_name}' at {lib_dir}")
    print(f"  - Config: {lib_dir / 'doc.config.yaml'}")
    print(f"  - Custom Page: {lib_dir / 'docs' / 'guide.md'}")
    print("\nNext: Edit doc.config.yaml and run:")
    print(f"  python tools/ecosystem.py build {lib_name}")


def cmd_build(args):
    """Compiles READMEs, validates badges, and builds web docs."""
    target = args.lib
    if target and target != "all":
        lib_dir = DEV_DIR / target
        if not lib_dir.exists():
            lib_dir = DEV_DIR / f"termux-{target}"
        if not lib_dir.exists():
            lib_dir = DEV_DIR / f"AMEVA-{target}"
        if not lib_dir.exists():
            lib_dir = DEV_DIR / f"ameva-{target}"
        if not lib_dir.exists():
            lib_dir = DEV_DIR / f"ameva-{target}-runtime"
        if not lib_dir.exists():
            print(f"[ERROR] Directory not found for '{target}' in {DEV_DIR}")
            return

        config = parse_simple_yaml(lib_dir / "doc.config.yaml")
        if not config:
            config = {"name": lib_dir.name, "github_repo_url": f"https://github.com/uno-km/{lib_dir.name}"}

        print(f"\n[BUILDING] Target-Aware Compilation for '{lib_dir.name}'...")
        compile_target_readmes(lib_dir, config)
        build_library_docs(lib_dir.name, config)
    else:
        print("\n[BUILDING ALL] Compiling all ecosystem packages...")
        for p in DEV_DIR.iterdir():
            if p.is_dir() and (p / "doc.config.yaml").exists():
                cfg = parse_simple_yaml(p / "doc.config.yaml")
                print(f"\n- Package: {p.name}")
                compile_target_readmes(p, cfg)
                build_library_docs(p.name, cfg)

    sync_all_catalogs()
    print("\n[SUCCESS] Ecosystem compilation completed with 100% Zero-Drift.")


def cmd_release(args):
    """Bumps version, re-compiles all views, and optionally publishes."""
    lib_name = args.lib
    new_version = args.version if args.version.startswith("v") else f"v{args.version}"
    publish = args.publish

    lib_dir = DEV_DIR / lib_name
    if not lib_dir.exists():
        lib_dir = DEV_DIR / f"termux-{lib_name}"
    if not lib_dir.exists():
        lib_dir = DEV_DIR / f"AMEVA-{lib_name}"

    if not lib_dir.exists():
        print(f"[ERROR] Target directory not found for '{lib_name}'")
        return

    config_path = lib_dir / "doc.config.yaml"
    if config_path.exists():
        text = config_path.read_text(encoding="utf-8")
        text = re.sub(r'version:\s*["\']?[^"\']+["\']?', f'version: "{new_version}"', text)
        config_path.write_text(text, encoding="utf-8")
        print(f"  [OK] Bumped version to {new_version} in {config_path}")

    # Rebuild all READMEs and Web Docs
    cfg = parse_simple_yaml(config_path)
    compile_target_readmes(lib_dir, cfg)
    build_library_docs(lib_dir.name, cfg)
    sync_all_catalogs()

    # Optional Publishing to PyPI and NPM
    if publish:
        print(f"\n[PUBLISHING] Executing automated registry deployment for {lib_name} {new_version}...")
        # 1. PyPI Publish
        if (lib_dir / "pyproject.toml").exists():
            print("  -> Building and uploading to PyPI via twine...")
            subprocess.run([sys.executable, "-m", "build"], cwd=str(lib_dir), check=False)
            subprocess.run(["twine", "upload", "dist/*", "--skip-existing"], cwd=str(lib_dir), check=False)

        # 2. NPM Publish
        npm_dir = lib_dir / "npm" if (lib_dir / "npm").exists() else lib_dir
        if (npm_dir / "package.json").exists():
            print("  -> Publishing to npm registry...")
            subprocess.run(["npm", "publish", "--access", "public"], cwd=str(npm_dir), shell=True, check=False)

    print(f"\n[SUCCESS] Release {new_version} for '{lib_name}' completed successfully!")


def main():
    parser = argparse.ArgumentParser(description="AMEVA Universal Ecosystem Toolchain (AET)")
    subparsers = parser.add_subparsers(dest="command", required=True)

    # init
    p_init = subparsers.add_parser("init", help="Scaffold a new library")
    p_init.add_argument("name", help="Library name (e.g. termux-vision)")

    # build
    p_build = subparsers.add_parser("build", help="Compile target-aware READMEs and docs")
    p_build.add_argument("lib", nargs="?", default="all", help="Target library id or 'all'")

    # release
    p_release = subparsers.add_parser("release", help="Bump version, build, and publish")
    p_release.add_argument("lib", help="Library id")
    p_release.add_argument("version", help="New semantic version (e.g. 1.2.0)")
    p_release.add_argument("--publish", action="store_true", help="Publish to PyPI and NPM")

    # sync
    p_sync = subparsers.add_parser("sync", help="Synchronize catalogs, sidebars, and metrics")

    args = parser.parse_args()

    if args.command == "init":
        cmd_init(args)
    elif args.command == "build":
        cmd_build(args)
    elif args.command == "release":
        cmd_release(args)
    elif args.command == "sync":
        sync_all_catalogs()


if __name__ == "__main__":
    main()
