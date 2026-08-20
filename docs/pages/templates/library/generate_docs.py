#!/usr/bin/env python3
"""
AMEVA Ecosystem - 1-Click Library Documentation Site Generator
Wrapper around the deterministic ameva_doc engine.
"""

import sys
import argparse
from pathlib import Path

# Add doc_builder to path
DOC_BUILDER_DIR = Path(__file__).resolve().parents[3] / "tools/doc_builder"
if str(DOC_BUILDER_DIR) not in sys.path:
    sys.path.insert(0, str(DOC_BUILDER_DIR))

try:
    from ameva_doc import build_documentation
except ImportError:
    print(f"❌ [ERROR] Could not import ameva_doc from {DOC_BUILDER_DIR}")
    sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="AMEVA Library Docs 1-Click Zero-Drift Generator")
    parser.add_argument("--config", "-c", default="docs/doc.config.yaml", help="Path to doc.config.yaml or json")
    parser.add_argument("--output", "-o", default="docs", help="Target output directory")
    parser.add_argument("--assets", "-a", default=str(Path(__file__).resolve().parents[4] / "ameva_assets"), help="Path to ameva_assets")
    args = parser.parse_args()

    cfg_path = Path(args.config)
    if not cfg_path.exists():
        # Fallback to example
        example_cfg = Path(__file__).parent / "doc.config.example.yaml"
        if example_cfg.exists():
            print(f"ℹ️ [INFO] '{cfg_path}' not found, using default example config: {example_cfg}")
            cfg_path = example_cfg

    build_documentation(cfg_path, Path(args.output), Path(args.assets))
