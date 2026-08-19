#!/usr/bin/env python3
"""
AMEVA Ecosystem - 1-Click Library Documentation Site Generator
Stamps out a complete, responsive, multilingual GitHub Pages documentation site for any library.
"""

import os
import sys
import json
import shutil
import argparse
from pathlib import Path

# Ensure UTF-8 output encoding on Windows terminals
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

DEFAULT_CONFIG = {
    "name": "Sample-Lib",
    "package_name_pypi": "sample-lib",
    "package_name_npm": "@sample/lib",
    "tagline_ko": "브라우저 및 엣지 환경을 위한 고성능 오픈소스 라이브러리",
    "tagline_en": "High-Performance Edge & Browser Native Open-Source Systems Library",
    "description_ko": "복잡한 저수준 시스템 제약 조건을 해결하고 엣지 하드웨어의 성능을 극한으로 끌어올립니다.",
    "description_en": "Solves complex low-level constraints and maximizes edge hardware performance with zero server overhead.",
    "version": "v1.0.0",
    "release_name": "Genesis",
    "license": "Apache 2.0",
    "github_repo_url": "https://github.com/uno-km/sample-lib",
    "quick_install_cmd": "pip install sample-lib",
    "primary_color": "#004499",
    "accent_color": "#00f5d4",
    "features": [
        {
            "title_ko": "무설치 네이티브 실행",
            "title_en": "Zero-Config Native Execution",
            "desc_ko": "별도의 복잡한 바이너리 컴파일 없이 즉시 임베디드 및 엣지 환경에서 구동됩니다.",
            "desc_en": "Executes instantly on embedded and edge environments with zero build bloat."
        },
        {
            "title_ko": "수학적 무결성 및 자동 미분",
            "title_en": "Mathematical Integrity & Autograd",
            "desc_ko": "닫힌 형태(Closed-form)의 정확한 수식 계산과 자동 역전파 엔진을 내장합니다.",
            "desc_en": "Built-in closed-form mathematical precision and autograd computation engine."
        },
        {
            "title_ko": "하드웨어 메모리 보호",
            "title_en": "Hardware Memory Protection",
            "desc_ko": "버퍼 풀링 및 가비지 컬렉션 최적화로 메모리 누수를 100% 방지합니다.",
            "desc_en": "Zero-leak buffer pooling and weakref memory management."
        }
    ],
    "code_example_py": """import sample_lib as sl

# Initialize hardware engine
engine = sl.Engine(device="auto")
result = engine.compute([1.0, 2.0, 3.0])
print(f"Computed Output: {result}")""",
    "code_example_js": """import { Engine } from '@sample/lib';

const engine = new Engine({ device: 'webgpu' });
const result = await engine.compute([1.0, 2.0, 3.0]);
console.log('Computed Output:', result);"""
}

def generate_docs(config_path=None, output_dir=None):
    template_root = Path(__file__).parent.resolve()
    src_dir = template_root / "template_src"
    
    if config_path and os.path.exists(config_path):
        with open(config_path, "r", encoding="utf-8") as f:
            cfg = json.load(f)
    else:
        cfg = DEFAULT_CONFIG
        
    out_path = Path(output_dir) if output_dir else template_root / "dist_sample"
    out_path.mkdir(parents=True, exist_ok=True)
    
    if not src_dir.exists():
        print(f"❌ [ERROR] Source template directory {src_dir} does not exist.")
        return

    # Copy assets & static files
    for item in src_dir.iterdir():
        dest = out_path / item.name
        if item.is_dir():
            if dest.exists():
                shutil.rmtree(dest)
            shutil.copytree(item, dest)
        else:
            # Render template placeholders
            content = item.read_text(encoding="utf-8")
            for key, val in cfg.items():
                if isinstance(val, str):
                    content = content.replace(f"{{{{{key}}}}}", val)
            dest.write_text(content, encoding="utf-8")
            
    print(f"✅ [SUCCESS] Generated documentation site at: {out_path.resolve()}")
    print(f"🚀 You can now publish this folder to GitHub Pages or serve it locally with: python -m http.server -d {out_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="AMEVA Library Docs 1-Click Generator")
    parser.add_argument("--config", "-c", help="Path to config.json file")
    parser.add_argument("--output", "-o", help="Target output directory")
    args = parser.parse_args()
    
    generate_docs(args.config, args.output)
