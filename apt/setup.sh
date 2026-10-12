#!/data/data/com.termux/files/usr/bin/bash
# ==============================================================================
# AMEVA Sovereign On-Device AI Official APT Repository Installer for Termux
# SPDX-License-Identifier: Apache-2.0
# Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
# ==============================================================================
set -e

PREFIX="/data/data/com.termux/files/usr"
SOURCES_DIR="$PREFIX/etc/apt/sources.list.d"

echo "------------------------------------------------------------"
echo "  AMEVA Sovereign On-Device AI Termux Repository Setup"
echo "------------------------------------------------------------"

# 1. Verify Termux environment
if [ ! -d "$PREFIX" ]; then
    echo "[ERROR] Not running inside standard Termux environment."
    exit 1
fi

# 2. Register trusted repository
mkdir -p "$SOURCES_DIR"
cat << 'EOF' > "$SOURCES_DIR/ameva.list"
# AMEVA Foundation Sovereign On-Device AI APT Repository
deb [trusted=yes] https://uno-km.vercel.app/apt termux main
EOF

echo "[INFO] Added repository mirror: $SOURCES_DIR/ameva.list"

# 3. Update APT cache
echo "[INFO] Updating APT package catalog..."
apt update -y -o Acquire::AllowInsecureRepositories=true -o Acquire::AllowDowngradeToInsecureRepositories=true

echo "------------------------------------------------------------"
echo "  AMEVA APT Repository Successfully Registered"
echo "------------------------------------------------------------"
echo "Available packages for installation:"
echo "  - pkg install termux-tts       (Speech Synthesis)"
echo "  - pkg install termux-stt       (Speech Recognition)"
echo "  - pkg install termux-bitnet    (BitNet 1.58-bit Engine)"
echo "  - pkg install termux-llamacpp  (GGUF LLM Engine)"
echo "  - pkg install termux-diffusion (Diffusion Synthesis)"
echo "  - pkg install termux-vision    (Vision Analysis)"
echo "  - pkg install termux-aichain   (Autonomous Agent Chain)"
echo "  - pkg install termux-train     (On-Device Trainer)"
echo ""
echo "Full suite bundle:"
echo "  - pkg install termux-ai-suite"
echo "------------------------------------------------------------"
