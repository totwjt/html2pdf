# Monorepo Starter

A modern monorepo starter template with TypeScript, Vue 3, Turborepo, and Changesets.

## Features

- 🚀 Modern development setup
- 📦 Monorepo with pnpm workspaces
- ⚡️ Fast builds with Turborepo
- 📝 Automatic versioning with Changesets
- 🧪 Testing with Vitest
- 📚 TypeScript support
- 🎨 Vue 3 components

## Project Structure

```
monorepo-starter/
├── packages/
│   ├── core/           # Core package
│   └── vue/            # Vue components
└── apps/
    └── playground/     # Demo application
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development:
```bash
pnpm dev
```

3. Build packages:
```bash
pnpm build
```

4. Run tests:
```bash
pnpm test
```

## Version Management

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

## License

MIT
