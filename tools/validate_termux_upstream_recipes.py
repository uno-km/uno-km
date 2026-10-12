#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
SPDX-License-Identifier: Apache-2.0

Strict Compliance Validator for termux/termux-packages Upstream Recipes
Verifies syntax, mandatory metadata, SPDX compliance, cryptographic checksums,
and installation hooks.
"""

import re
import sys
import hashlib
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
UPSTREAM_DIR = REPO_ROOT / "upstream" / "termux-packages" / "packages"

PACKAGES = [
    "termux-tts",
    "termux-stt",
    "termux-bitnet",
    "termux-llamacpp",
    "termux-diffusion",
    "termux-vision",
    "termux-aichain",
    "termux-train",
    "termux-ai-suite"
]

MANDATORY_VARS = [
    "TERMUX_PKG_HOMEPAGE",
    "TERMUX_PKG_DESCRIPTION",
    "TERMUX_PKG_LICENSE",
    "TERMUX_PKG_MAINTAINER",
    "TERMUX_PKG_VERSION",
    "TERMUX_PKG_DEPENDS"
]

def parse_shell_vars(content: str):
    vars_dict = {}
    for line in content.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        m = re.match(r"^([A-Z0-9_]+)=(.*)$", line)
        if m:
            k = m.group(1)
            v = m.group(2).strip('"').strip("'")
            vars_dict[k] = v
    return vars_dict

def validate_package(pkg_name: str, check_network: bool = True):
    pkg_dir = UPSTREAM_DIR / pkg_name
    build_sh = pkg_dir / "build.sh"
    
    score = 0
    max_score = 100
    errors = []
    
    if not build_sh.exists():
        return 0, max_score, [f"Missing build.sh at {build_sh}"]
    
    content = build_sh.read_text(encoding="utf-8")
    vars_dict = parse_shell_vars(content)
    
    # Check 1: Mandatory variables (30 pts)
    var_points = 30 // len(MANDATORY_VARS)
    for mv in MANDATORY_VARS:
        if mv in vars_dict and vars_dict[mv]:
            score += var_points
        else:
            errors.append(f"Missing mandatory variable: {mv}")
            
    # Check 2: SPDX License compliance (10 pts)
    license_val = vars_dict.get("TERMUX_PKG_LICENSE", "")
    if license_val in ["Apache-2.0", "MIT", "GPL-3.0", "BSD-3-Clause"]:
        score += 10
    else:
        errors.append(f"Non-standard SPDX license: {license_val}")
        
    # Check 3: Install step hook definition (20 pts)
    if "termux_step_make_install()" in content:
        score += 20
    else:
        errors.append("Missing termux_step_make_install() function hook")
        
    # Check 4: Source URL & Cryptographic SHA256 (40 pts)
    is_meta = vars_dict.get("TERMUX_PKG_SKIP_SRC_EXTRACT") == "true"
    if is_meta:
        score += 40  # Meta-package skips src extract legally
    else:
        srcurl = vars_dict.get("TERMUX_PKG_SRCURL", "")
        expected_sha = vars_dict.get("TERMUX_PKG_SHA256", "")
        version = vars_dict.get("TERMUX_PKG_VERSION", "")
        
        # Expand version in URL if templated
        srcurl = srcurl.replace("${TERMUX_PKG_VERSION}", version)
        
        if not srcurl or not expected_sha:
            errors.append("Missing TERMUX_PKG_SRCURL or TERMUX_PKG_SHA256")
        else:
            score += 20  # Declared correctly
            if check_network:
                try:
                    req = urllib.request.Request(srcurl, headers={"User-Agent": "curl/7.88.1"})
                    with urllib.request.urlopen(req, timeout=15) as resp:
                        data = resp.read()
                        actual_sha = hashlib.sha256(data).hexdigest()
                        if actual_sha == expected_sha:
                            score += 20
                        else:
                            errors.append(f"SHA256 Mismatch: expected {expected_sha[:16]}..., got {actual_sha[:16]}...")
                except Exception as e:
                    errors.append(f"Failed to fetch source archive: {e}")
            else:
                score += 20
                
    return score, max_score, errors

def main():
    print("=" * 70)
    print("  TERMUX/TERMUX-PACKAGES UPSTREAM RECIPE SPECIFICATION AUDIT")
    print("=" * 70)
    
    total_score = 0
    total_max = len(PACKAGES) * 100
    all_passed = True
    
    for pkg in PACKAGES:
        score, max_score, errors = validate_package(pkg, check_network=True)
        total_score += score
        status = "PASS" if score == max_score else "FAIL"
        if status == "FAIL":
            all_passed = False
            
        print(f"[{status}] {pkg:<20} Score: {score:>3}/{max_score}")
        if errors:
            for err in errors:
                print(f"       -> {err}")
                
    print("-" * 70)
    print(f"OVERALL AUDIT SCORE: {total_score} / {total_max} ({(total_score / total_max) * 100:.1f}%)")
    print("=" * 70)
    
    if not all_passed:
        sys.exit(1)

if __name__ == "__main__":
    main()
