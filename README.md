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
├── apps/
│   └── demo/           # Demo application
├── packages/
│   ├── core/          # Core package
│   └── vue/           # Vue components
├── docs/              # Project documentation
│   ├── README.md      # Documentation index
│   ├── CONTRIBUTING.md # Contribution guide
│   └── DEVELOPMENT.md # Development guide
└── scripts/           # Build and deployment scripts
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

## Documentation

- [Development Guide](./docs/DEVELOPMENT.md)
- [Contributing Guide](./docs/CONTRIBUTING.md)

## License

MIT
