# 项目结构

本文档解释了 Monorepo Starter 项目的结构以及每个目录和文件的用途。

## 根目录

```
monorepo-starter/
├── apps/                # 应用
├── packages/           # 共享包
├── docs/              # 文档
├── .github/           # GitHub 配置
├── .vscode/           # VSCode 配置
├── package.json       # 根 package.json
├── pnpm-workspace.yaml # pnpm 工作区配置
├── turbo.json         # Turborepo 配置
└── tsconfig.base.json # 基础 TypeScript 配置
```

## 应用 (`apps/`)

`apps/` 目录包含 monorepo 中的所有应用。

### 示例应用 (`apps/demo/`)

一个展示所有包用法的 Vue 3 应用。

```
apps/demo/
├── src/               # 源代码
│   ├── App.vue       # 主应用组件
│   └── main.ts       # 应用入口
├── index.html        # HTML 模板
├── package.json      # 应用 package.json
└── vite.config.ts    # Vite 配置
```

## 包 (`packages/`)

`packages/` 目录包含所有共享包。

### 核心包 (`packages/core/`)

包含核心工具和共享逻辑。

```
packages/core/
├── src/              # 源代码
│   └── index.ts     # 包入口
├── package.json     # 包配置
├── tsconfig.json    # TypeScript 配置
└── tsup.config.ts   # 构建配置
```

### 工具包 (`packages/utils/`)

包含通用工具函数。

```
packages/utils/
├── src/              # 源代码
│   └── index.ts     # 包入口
├── package.json     # 包配置
├── tsconfig.json    # TypeScript 配置
└── tsup.config.ts   # 构建配置
```

### Vue 包 (`packages/vue/`)

包含 Vue 3 组件和组合式函数。

```
packages/vue/
├── src/              # 源代码
│   ├── components/   # Vue 组件
│   ├── composables/  # Vue 组合式函数
│   └── index.ts     # 包入口
├── package.json     # 包配置
├── tsconfig.json    # TypeScript 配置
└── vite.config.ts   # 构建配置
```

## 文档 (`docs/`)

`docs/` 目录包含所有文档。

```
docs/
├── README.md         # 主文档
├── CONTRIBUTING.md   # 贡献指南
├── DEVELOPMENT.md    # 开发指南
├── getting-started.md # 快速开始指南
├── project-structure.md # 项目结构指南
└── zh/              # 中文文档
```

## 配置文件

### `package.json`

根 `package.json` 包含：
- 工作区范围的依赖
- 通用脚本
- 项目元数据

### `pnpm-workspace.yaml`

定义 pnpm 的工作区结构：
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### `turbo.json`

配置 Turborepo 的构建管道：
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

所有包共享的基础 TypeScript 配置：
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