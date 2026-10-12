#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
SPDX-License-Identifier: Apache-2.0

Generates official termux/termux-packages compliant build recipes (build.sh)
for the 8 Core AI Modalities + 1 Master Meta-Package.
"""

from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
UPSTREAM_DIR = REPO_ROOT / "upstream" / "termux-packages" / "packages"

RECIPES = {
    "termux-tts": {
        "homepage": "https://uno-km.vercel.app/lib/tts/",
        "description": "Kokoro 82M On-Device High-Speed Speech Synthesis CLI for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.6.0",
        "srcurl": "https://github.com/uno-km/termux-tts/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "28440d7a57a100184913a9e93402a31aff6b9bab61865e760bab082e4c61f874",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-tts"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-tts/bin/cli.js" "$TERMUX_PREFIX/bin/termux-tts"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-tts" """
    },
    "termux-stt": {
        "homepage": "https://uno-km.vercel.app/lib/stt/",
        "description": "On-Device Speech-to-Text & Neural Diarization CLI (Whisper & Sherpa-ONNX)",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.4.0",
        "srcurl": "https://github.com/uno-km/termux-stt/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "50987c5b7b45a07bc23c5560730eba7498b8c7776a03534869f2fa99ee243788",
        "depends": "nodejs, python, libc++, libvulkan",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-stt"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-stt/bin/cli.js" "$TERMUX_PREFIX/bin/termux-stt"
\tln -sf "../lib/node_modules/termux-stt/bin/termux-stt.js" "$TERMUX_PREFIX/bin/termux-stt-install"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-stt" "$TERMUX_PREFIX/bin/termux-stt-install" """
    },
    "termux-bitnet": {
        "homepage": "https://uno-km.vercel.app/lib/bitnet/",
        "description": "BitNet 1.58-bit (i2_s) On-Device ARM NEON Inference Engine",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "2.0.1",
        "srcurl": "https://github.com/uno-km/termux-bitnet/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "2775b29ed1e8312a53c31a95340d27df00b736d7ecac713ce028339c666c33dc",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-bitnet"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-bitnet/bin/cli.js" "$TERMUX_PREFIX/bin/termux-bitnet"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-bitnet" """
    },
    "termux-llamacpp": {
        "homepage": "https://uno-km.vercel.app/lib/llamacpp/",
        "description": "GGUF Universal LLM Runtime, Model Manager & OpenAI Server for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.4.0",
        "srcurl": "https://github.com/uno-km/termux-llamacpp/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "5822233b3322cff0f057dc2e53413261f89c023c3e7d0c21f3ae95bbbd50a0b7",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-llamacpp"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-llamacpp/bin/cli.js" "$TERMUX_PREFIX/bin/termux-llama"
\tln -sf "../lib/node_modules/termux-llamacpp/bin/cli.js" "$TERMUX_PREFIX/bin/termux-llamacpp"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-llama" "$TERMUX_PREFIX/bin/termux-llamacpp" """
    },
    "termux-diffusion": {
        "homepage": "https://uno-km.vercel.app/lib/diffusion/",
        "description": "AmfyUI DAG Studio & Z-Image Turbo (6.0B DiT) On-Device Diffusion CLI",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "2.0.1",
        "srcurl": "https://github.com/uno-km/termux-diffusion/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "6fac42b68ea086117d5e8c9d5d25aa4ad83ae5a0836d3f6509719c3d933a84ff",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-diffusion"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-diffusion/bin/cli.js" "$TERMUX_PREFIX/bin/termux-diffusion"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-diffusion" """
    },
    "termux-vision": {
        "homepage": "https://uno-km.vercel.app/lib/vision/",
        "description": "Moondream2 & LLaVA On-Device Multimodal Computer Vision CLI for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.7.0",
        "srcurl": "https://github.com/uno-km/termux-vision/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "c6f833723e88cc0f51e430d361132d9e9c1958aeae090ca32667d6527d626f59",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-vision"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-vision/bin/cli.js" "$TERMUX_PREFIX/bin/termux-vision"
\tln -sf "../lib/node_modules/termux-vision/bin/cli.js" "$TERMUX_PREFIX/bin/tv"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-vision" "$TERMUX_PREFIX/bin/tv" """
    },
    "termux-aichain": {
        "homepage": "https://uno-km.vercel.app/lib/aichain/",
        "description": "Zero-Dependency AI Chaining and Autonomous Agent Framework for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.1.5",
        "srcurl": "https://files.pythonhosted.org/packages/67/e8/41da166fc5957b897bf75e94b1412598babbaef4efcbc40c99d3f47825ec/termux_aichain-${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "bd8529f3b1a929819b269480d7cfb043bc66e923ca44bd2fcc9f995be9a94d3e",
        "depends": "python",
        "platform_independent": "true",
        "install_script": """\tpip install . --prefix="$TERMUX_PREFIX" --no-deps --no-build-isolation"""
    },
    "termux-train": {
        "homepage": "https://uno-km.vercel.app/lib/train/",
        "description": "On-Device Deep Learning & LoRA Fine-Tuning CLI Framework for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "2.0.1",
        "srcurl": "https://github.com/uno-km/termux-train/archive/refs/tags/v${TERMUX_PKG_VERSION}.tar.gz",
        "sha256": "b2751341a30f37ca7265a9cb3ebd991531dc7dd7849c50c06b5cdf47dee526d2",
        "depends": "nodejs, python, libc++",
        "platform_independent": "false",
        "install_script": """\tlocal _INSTALL_DIR="$TERMUX_PREFIX/lib/node_modules/termux-train"
\tmkdir -p "$_INSTALL_DIR"
\tcp -r . "$_INSTALL_DIR/"
\tmkdir -p "$TERMUX_PREFIX/bin"
\tln -sf "../lib/node_modules/termux-train/bin/cli.js" "$TERMUX_PREFIX/bin/termux-train"
\tln -sf "../lib/node_modules/termux-train/bin/cli.js" "$TERMUX_PREFIX/bin/tt"
\tchmod 755 "$TERMUX_PREFIX/bin/termux-train" "$TERMUX_PREFIX/bin/tt" """
    },
    "termux-ai-suite": {
        "homepage": "https://uno-km.vercel.app/",
        "description": "Unified Sovereign On-Device AI Suite Meta-Package for Termux",
        "license": "Apache-2.0",
        "maintainer": "Uno Kim <contact@uno-km.com>",
        "version": "1.0.0",
        "srcurl": None,
        "sha256": None,
        "depends": "termux-tts, termux-stt, termux-bitnet, termux-llamacpp, termux-diffusion, termux-vision, termux-aichain, termux-train",
        "platform_independent": "true",
        "install_script": """\tmkdir -p "$TERMUX_PREFIX/bin"
\tcat <<- 'EOF' > "$TERMUX_PREFIX/bin/termux-ai-suite"
#!/data/data/com.termux/files/usr/bin/bash
echo "AMEVA Sovereign On-Device AI Suite (8-in-1 Modalities Active)"
echo "Available CLI tools: termux-tts, termux-stt, termux-bitnet, termux-llamacpp, termux-diffusion, termux-vision, termux-aichain, termux-train"
EOF
\tchmod 755 "$TERMUX_PREFIX/bin/termux-ai-suite" """
    }
}

def generate():
    for name, data in RECIPES.items():
        pkg_dir = UPSTREAM_DIR / name
        pkg_dir.mkdir(parents=True, exist_ok=True)
        
        lines = [
            f'TERMUX_PKG_HOMEPAGE="{data["homepage"]}"',
            f'TERMUX_PKG_DESCRIPTION="{data["description"]}"',
            f'TERMUX_PKG_LICENSE="{data["license"]}"',
            f'TERMUX_PKG_MAINTAINER="{data["maintainer"]}"',
            f'TERMUX_PKG_VERSION="{data["version"]}"',
        ]
        
        if data["srcurl"]:
            lines.append(f'TERMUX_PKG_SRCURL="{data["srcurl"]}"')
            lines.append(f'TERMUX_PKG_SHA256="{data["sha256"]}"')
        else:
            lines.append('TERMUX_PKG_SKIP_SRC_EXTRACT=true')
            
        lines.append(f'TERMUX_PKG_DEPENDS="{data["depends"]}"')
        lines.append('TERMUX_PKG_BUILD_IN_SRC=true')
        lines.append(f'TERMUX_PKG_PLATFORM_INDEPENDENT={data["platform_independent"]}')
        lines.append('')
        lines.append('termux_step_make_install() {')
        lines.append(data["install_script"])
        lines.append('}')
        lines.append('')
        
        build_sh_path = pkg_dir / "build.sh"
        build_sh_path.write_text("\n".join(lines), encoding="utf-8")
        print(f"[OK] Generated {build_sh_path}")

if __name__ == "__main__":
    generate()
