#!/usr/bin/env python3
# Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
# SPDX-License-Identifier: Apache-2.0 OR Commercial-License
"""
tools/enforce_code_governance.py - AMEVA Code Governance & Licensing Enforcer
=============================================================================
Automated compliance tool for ensuring REUSE v3.0 SPDX identifiers and
dual-licensing copyright headers across SDK and runtime codebases.

Usage:
    py -3 tools/enforce_code_governance.py --check
    py -3 tools/enforce_code_governance.py --apply
    py -3 tools/enforce_code_governance.py --apply --verbose
"""

import os
import sys
import argparse
from pathlib import Path

# Ensure UTF-8 output on Windows consoles
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = Path(__file__).resolve().parent.parent
DEV_DIR = ROOT_DIR.parent

EXCLUDE_DIRS = {
    'node_modules', 'dist', 'build', '.git', '.pytest_cache', '__pycache__',
    'venv', '.venv', 'env', 'third_party', 'thirdparty', '3rdparty', 'vendor',
    'extern', 'external', 'upstream', '.egg-info', 'releases', 'models',
    'coverage', '.cache', 'out', 'ameva-viewer', 'vault_git_archives',
    'sherpa-ncnn', 'c-api-examples', 'dotnet-examples', 'go-api-examples',
    'ios-swift', 'ios-swiftui', 'kotlin-api-examples', 'mfc-examples',
    'swift-api-examples', 'patches'
}

EXCLUDE_EXTENSIONS = {
    '.min.js', '.bundle.js', '.es.js', '.umd.js'
}

EXTENSIONS_C_STYLE = {'.js', '.cjs', '.mjs', '.ts', '.c', '.cpp', '.cc', '.h', '.hpp'}
EXTENSIONS_HASH_STYLE = {'.py', '.sh'}
TARGET_EXTENSIONS = EXTENSIONS_C_STYLE | EXTENSIONS_HASH_STYLE

HEADER_C_STYLE = """/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
"""

HEADER_HASH_STYLE = """# Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
# SPDX-License-Identifier: Apache-2.0 OR Commercial-License
"""


def get_target_packages():
    """Discover eligible SDK and runtime packages, strictly excluding end-user apps."""
    packages = []

    # 1. termux-* on-device SDKs
    termux_dir = DEV_DIR / 'termux'
    if termux_dir.exists():
        for p in termux_dir.glob('termux-*'):
            if p.is_dir():
                packages.append(p)

    # 2. ameva-* SDKs and foundation runtimes (excluding GUI apps and archives)
    ameva_dir = DEV_DIR / 'ameva'
    if ameva_dir.exists():
        for p in ameva_dir.glob('ameva-*'):
            if p.is_dir() and p.name not in ['ameva-foundation', 'ameva-runtime-releases']:
                packages.append(p)

    # 3. uno-km central web hub and SDKs
    if ROOT_DIR.exists():
        packages.append(ROOT_DIR)

    return sorted(packages, key=lambda x: str(x))


def is_excluded_file(file_path: Path) -> bool:
    name = file_path.name.lower()
    for excl in EXCLUDE_EXTENSIONS:
        if name.endswith(excl):
            return True
    return False


def is_third_party_copyright(content: str) -> bool:
    """Identify upstream third-party copyright to avoid inappropriate overwriting."""
    lines = content[:1500].splitlines()
    for line in lines:
        lower = line.lower()
        if 'copyright' in lower:
            if 'uno kim' not in lower and 'ameva' not in lower:
                return True
    return False


def process_file(file_path: Path, apply_changes: bool = False):
    """
    Check or apply SPDX and Copyright header.
    Returns: ('COMPLIANT' | 'SKIPPED_3RD_PARTY' | 'UPDATED' | 'NEEDS_UPDATE' | 'ERROR', reason)
    """
    try:
        raw_bytes = file_path.read_bytes()
    except Exception as exc:
        return 'ERROR', str(exc)

    try:
        content = raw_bytes.decode('utf-8')
    except UnicodeDecodeError:
        try:
            content = raw_bytes.decode('utf-8-sig')
        except UnicodeDecodeError:
            return 'SKIPPED_BINARY', 'Non-UTF8 file'

    # Check if already compliant
    if 'SPDX-License-Identifier' in content and ('Uno Kim' in content or 'AMEVA' in content):
        return 'COMPLIANT', 'Already contains AMEVA SPDX header'

    # Check upstream third-party copyright protection
    if is_third_party_copyright(content):
        return 'SKIPPED_3RD_PARTY', 'Preserving upstream third-party copyright'

    ext = file_path.suffix.lower()
    if ext in EXTENSIONS_C_STYLE:
        header_text = HEADER_C_STYLE
    elif ext in EXTENSIONS_HASH_STYLE:
        header_text = HEADER_HASH_STYLE
    else:
        return 'SKIPPED_UNSUPPORTED', 'Unsupported extension'

    lines = content.splitlines(keepends=True)
    insert_idx = 0

    # Shebang preservation
    if lines and lines[0].startswith('#!'):
        insert_idx = 1
        # Check encoding declaration on line 2
        if len(lines) > 1 and ('coding:' in lines[1] or 'coding=' in lines[1]):
            insert_idx = 2

    if not apply_changes:
        return 'NEEDS_UPDATE', 'SPDX header missing'

    # Insert header
    new_lines = lines[:insert_idx] + [header_text] + lines[insert_idx:]
    new_content = ''.join(new_lines)

    try:
        file_path.write_text(new_content, encoding='utf-8')
        return 'UPDATED', 'Injected SPDX and Copyright header'
    except Exception as exc:
        return 'ERROR', str(exc)


def main():
    parser = argparse.ArgumentParser(description='AMEVA SDK Code Governance & Licensing Enforcer')
    parser.add_argument('--check', action='store_true', help='Perform read-only compliance check')
    parser.add_argument('--apply', action='store_true', help='Inject missing headers into target files')
    parser.add_argument('--verbose', action='store_true', help='Print detailed file results')
    args = parser.parse_args()

    if not args.check and not args.apply:
        print('[ERROR] Please specify either --check or --apply')
        sys.exit(1)

    packages = get_target_packages()
    print(f'[AMEVA GOVERNANCE] Scanning {len(packages)} SDK and runtime packages...')

    counts = {
        'COMPLIANT': 0,
        'UPDATED': 0,
        'NEEDS_UPDATE': 0,
        'SKIPPED_3RD_PARTY': 0,
        'SKIPPED_BINARY': 0,
        'ERROR': 0
    }
    action_files = []

    for pkg in packages:
        for root, dirs, files in os.walk(pkg):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.endswith('.egg-info')]
            for f in files:
                fpath = Path(root) / f
                ext = fpath.suffix.lower()
                if ext in TARGET_EXTENSIONS and not is_excluded_file(fpath):
                    status, msg = process_file(fpath, apply_changes=args.apply)
                    counts[status] = counts.get(status, 0) + 1
                    if status in ('UPDATED', 'NEEDS_UPDATE'):
                        action_files.append((fpath, status, msg))
                    if args.verbose:
                        rel = fpath.relative_to(DEV_DIR)
                        print(f'[{status}] {rel} - {msg}')

    print('\n[GOVERNANCE AUDIT SUMMARY]')
    print(f'  Already Compliant       : {counts["COMPLIANT"]}')
    if args.apply:
        print(f'  Successfully Updated    : {counts["UPDATED"]}')
    else:
        print(f'  Files Needing Update    : {counts["NEEDS_UPDATE"]}')
    print(f'  Upstream 3rd-Party Kept : {counts["SKIPPED_3RD_PARTY"]}')
    print(f'  Errors                  : {counts["ERROR"]}')

    if not args.verbose and action_files:
        sample_count = min(10, len(action_files))
        action_name = 'Updated' if args.apply else 'Candidate'
        print(f'\n[Sample {action_name} Files ({sample_count}/{len(action_files)})]')
        for fpath, status, msg in action_files[:sample_count]:
            rel = fpath.relative_to(DEV_DIR)
            print(f'  - {rel}')

    if args.check and counts['NEEDS_UPDATE'] > 0:
        print('\n[STATUS] Non-compliant files detected. Run with --apply to resolve.')
        sys.exit(1)
    else:
        print('\n[STATUS] Code governance status: Clean.')
        sys.exit(0)


if __name__ == '__main__':
    main()
