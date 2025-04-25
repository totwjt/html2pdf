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

## Version Management with Changesets

The project uses Changesets for version management. Here's how to use it:

### 1. Creating a Changeset

When you make changes that should trigger a version bump:

```bash
pnpm changeset
```

This will:
- Ask you which packages should be versioned
- Ask you what kind of version bump (major, minor, or patch)
- Create a changeset file in `.changeset/`

### 2. Reviewing Changesets

To see what changesets are pending:

```bash
pnpm changeset status
```

### 3. Applying Changesets

To apply all pending changesets and update package versions:

```bash
pnpm changeset version
```

This will:
- Update package versions based on changesets
- Update changelogs
- Remove the applied changeset files

### 4. Publishing Packages

To publish all updated packages:

```bash
pnpm changeset publish
```

This will:
- Publish all packages that have new versions
- Create Git tags for the new versions
- Push the tags to the remote repository

### 5. Common Workflow

1. Make your changes
2. Create a changeset: `pnpm changeset`
3. Commit your changes and the changeset
4. When ready to release:
   - Apply changesets: `pnpm changeset version`
   - Publish packages: `pnpm changeset publish`

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