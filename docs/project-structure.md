# Project Structure

This document explains the structure of the Monorepo Starter project and the purpose of each directory and file.

## Root Directory

```
monorepo-starter/
├── apps/                # Applications
├── packages/           # Shared packages
├── docs/              # Documentation
├── .github/           # GitHub configuration
├── .vscode/           # VSCode configuration
├── package.json       # Root package.json
├── pnpm-workspace.yaml # pnpm workspace configuration
├── turbo.json         # Turborepo configuration
└── tsconfig.base.json # Base TypeScript configuration
```

## Applications (`apps/`)

The `apps/` directory contains all the applications in the monorepo.

### Demo Application (`apps/demo/`)

A Vue 3 application that demonstrates the usage of all packages.

```
apps/demo/
├── src/               # Source code
│   ├── App.vue       # Main application component
│   └── main.ts       # Application entry point
├── index.html        # HTML template
├── package.json      # Application package.json
└── vite.config.ts    # Vite configuration
```

## Packages (`packages/`)

The `packages/` directory contains all the shared packages.

### Core Package (`packages/core/`)

Contains core utilities and shared logic.

```
packages/core/
├── src/              # Source code
│   └── index.ts     # Package entry point
├── package.json     # Package configuration
├── tsconfig.json    # TypeScript configuration
└── tsup.config.ts   # Build configuration
```

### Utils Package (`packages/utils/`)

Contains common utility functions.

```
packages/utils/
├── src/              # Source code
│   └── index.ts     # Package entry point
├── package.json     # Package configuration
├── tsconfig.json    # TypeScript configuration
└── tsup.config.ts   # Build configuration
```

### Vue Package (`packages/vue/`)

Contains Vue 3 components and composables.

```
packages/vue/
├── src/              # Source code
│   ├── components/   # Vue components
│   ├── composables/  # Vue composables
│   └── index.ts     # Package entry point
├── package.json     # Package configuration
├── tsconfig.json    # TypeScript configuration
└── vite.config.ts   # Build configuration
```

## Documentation (`docs/`)

The `docs/` directory contains all documentation.

```
docs/
├── README.md         # Main documentation
├── CONTRIBUTING.md   # Contributing guide
├── DEVELOPMENT.md    # Development guide
├── getting-started.md # Getting started guide
├── project-structure.md # Project structure guide
└── zh/              # Chinese documentation
```

## Configuration Files

### `package.json`

The root `package.json` contains:
- Workspace-wide dependencies
- Common scripts
- Project metadata

### `pnpm-workspace.yaml`

Defines the workspace structure for pnpm:
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### `turbo.json`

Configures Turborepo for build pipelines:
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "outputs": []
    }
  }
}
```

### `tsconfig.base.json`

Base TypeScript configuration shared by all packages:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```