FROM mcr.microsoft.com/devcontainers/typescript-node:24 AS base

# Install basic tools
RUN apt-get update -y && apt-get upgrade -y && apt-get install -y curl git

# Configure pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV SHELL="/bin/bash"

RUN mkdir -p "$PNPM_HOME" && chmod 777 "$PNPM_HOME"
RUN corepack enable pnpm

COPY . /app
WORKDIR /app

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=${PNPM_HOME} pnpm install --frozen-lockfile
# RUN pnpm run build

FROM base
COPY --from=deps /app/node_modules /app/node_modules
# COPY --from=build /app/dist /app/dist

RUN pnpm add -g npm-check-updates turbo prettier

# EXPOSE 3000 4200
CMD [ "pnpm", "start" ]