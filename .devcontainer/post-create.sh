#!/bin/bash
set -ex

echo "[INFO] Running post-create..."

# Install pnpm dependencies
echo "[INFO] Installing pnpm global dependencies..."
pnpm add -g npm-check-updates turbo prettier

echo "[INFO] Installing pnpm dependencies..."
pnpm install --config.confirmModulesPurge=false

# Set up pnpm tab completion
echo "[INFO] Setting up pnpm tab completion..."
pnpm completion bash > ~/completion-for-pnpm.bash
echo 'source ~/completion-for-pnpm.bash' >> ~/.bashrc

echo "[INFO] Post-create script completed."