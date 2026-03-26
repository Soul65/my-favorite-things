FROM mcr.microsoft.com/devcontainers/typescript-node:24 AS base

# Install basic tools
RUN apt update && apt upgrade -y && \
    apt clean && \
    rm -rf /var/lib/apt/lists/*

# Configure pnpm
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV SHELL="/bin/bash"

RUN corepack enable pnpm

RUN pnpm config set store-dir "${PNPM_HOME}/store"
RUN pnpm add -g npm-check-updates turbo prettier

RUN chown -R node:node /home/node

# EXPOSE 3000 4200
CMD [ "pnpm", "start" ]