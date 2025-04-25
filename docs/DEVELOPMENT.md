# Development Guide

## Project Structure

The project follows a monorepo structure with the following organization:

- `apps/`: Contains demo applications
  - `demo/`: Main demo application
- `packages/`: Contains shared packages
  - `core/`: Core functionality and utilities
  - `vue/`: Vue components and related functionality
- `docs/`: Project documentation
- `scripts/`: Build and deployment scripts

## Development Setup

1. Install dependencies:
```bash
pnpm install
```

2. Start development:
```bash
pnpm dev
```

This will start:
- Core package in watch mode
- Vue package in watch mode
- Demo application development server

## Package Naming Convention

All packages follow the `@monorepo-starter/` namespace:
- `@monorepo-starter/core`: Core package
- `@monorepo-starter/vue`: Vue components
- `@monorepo-starter/demo`: Demo application

## Development Workflow

1. Create a new branch for your feature/fix
2. Make your changes
3. Run tests: `pnpm test`
4. Create a changeset: `pnpm changeset`
5. Submit a pull request

## Building

To build all packages:
```bash
pnpm build
```

## Testing

To run tests:
```bash
pnpm test
```

## Version Management

We use Changesets for version management:

1. Create a changeset:
```bash
pnpm changeset
```

2. Version packages:
```bash
pnpm version-packages
```

3. Publish packages:
```bash
pnpm release
```
