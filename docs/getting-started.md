# Getting Started

This guide will help you get started with the Monorepo Starter project.

## Prerequisites

- Node.js (v16 or later)
- pnpm (v8 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/monorepo-starter.git
cd monorepo-starter
```

2. Install dependencies:

```bash
pnpm install
```

## Project Structure

The project is organized as follows:

```
monorepo-starter/
├── apps/                # Applications
│   └── demo/           # Demo application
├── packages/           # Shared packages
│   ├── core/          # Core utilities
│   ├── utils/         # Utility functions
│   └── vue/           # Vue components
├── docs/              # Documentation
└── package.json       # Root package.json
```

## Development

To start the development server:

```bash
pnpm dev
```

This will start the demo application in development mode.

## Building

To build all packages:

```bash
pnpm build
```

This will build all packages in the correct order.

## Testing

To run tests:

```bash
pnpm test
```

## Adding a New Package

1. Create a new directory in the `packages` folder
2. Initialize a new package with `pnpm init`
3. Add the package to the workspace in `pnpm-workspace.yaml`
4. Create necessary configuration files (tsconfig.json, etc.)
5. Add the package to the build pipeline in `turbo.json`

## Next Steps

- Read the [Development Guide](./DEVELOPMENT.md) for more detailed information
- Check out the [Project Structure](./project-structure.md) documentation
- Learn how to [contribute](./CONTRIBUTING.md) to the project