#!/data/data/com.termux/files/usr/bin/bash
# AMEVA-Runtime (AMUDA) one-click Termux installer.
# curl -fsSL https://uno-km.vercel.app/install.sh | bash
#
# Wraps the already-documented, already-verified install flow (README.md of
# https://github.com/uno-km/ameva-runtime): pip install -> ameva install --all -> ameva doctor.
# Termux-only: ameva-runtime's native engines are built for the Termux environment.
set -euo pipefail

if [ -z "${PREFIX:-}" ] || [[ "$PREFIX" != *"com.termux"* ]]; then
    echo "ERROR: this installer targets Termux on Android only (\$PREFIX is not a Termux prefix)." >&2
    echo "        See https://github.com/uno-km/ameva-runtime for other platforms." >&2
    exit 1
fi

echo "==> [1/4] Updating the Termux package index"
pkg update -y

echo "==> [2/4] Ensuring Python/pip are installed"
pkg install -y python

echo "==> [3/4] Installing the ameva-runtime Python SDK"
pip install --upgrade ameva-runtime

echo "==> [4/4] Provisioning native engines and validating hardware readiness"
ameva install --all
ameva doctor

echo ""
echo "AMUDA/ameva-runtime installed. Run 'ameva doctor' any time to re-check hardware readiness."
