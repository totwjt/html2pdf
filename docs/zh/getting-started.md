# 快速开始

本指南将帮助你快速开始使用 Monorepo Starter 项目。

## 前提条件

- Node.js (v16 或更高版本)
- pnpm (v8 或更高版本)

## 安装

1. 克隆仓库：

```bash
git clone https://github.com/your-username/monorepo-starter.git
cd monorepo-starter
```

2. 安装依赖：

```bash
pnpm install
```

## 项目结构

项目结构如下：

```
monorepo-starter/
├── apps/                # 应用
│   └── demo/           # 示例应用
├── packages/           # 共享包
│   ├── core/          # 核心工具
│   ├── utils/         # 工具函数
│   └── vue/           # Vue 组件
├── docs/              # 文档
└── package.json       # 根 package.json
```

## 开发

启动开发服务器：

```bash
pnpm dev
```

这将启动示例应用的开发模式。

## 构建

构建所有包：

```bash
pnpm build
```

这将按正确的顺序构建所有包。

## 测试

运行测试：

```bash
pnpm test
```

## 使用 Changesets 进行版本管理

项目使用 Changesets 进行版本管理。以下是使用方法：

### 1. 创建 Changeset

当你的更改需要触发版本更新时：

```bash
pnpm changeset
```

这将：
- 询问哪些包需要更新版本
- 询问版本更新类型（主版本、次版本或修订版本）
- 在 `.changeset/` 目录下创建 changeset 文件

### 2. 查看 Changesets

查看待处理的 changesets：

```bash
pnpm changeset status
```

### 3. 应用 Changesets

应用所有待处理的 changesets 并更新包版本：

```bash
pnpm changeset version
```

这将：
- 根据 changesets 更新包版本
- 更新变更日志
- 删除已应用的 changeset 文件

### 4. 发布包

发布所有更新的包：

```bash
pnpm changeset publish
```

这将：
- 发布所有有新版本的包
- 为新版本创建 Git 标签
- 将标签推送到远程仓库

### 5. 常见工作流程

1. 进行更改
2. 创建 changeset：`pnpm changeset`
3. 提交更改和 changeset
4. 准备发布时：
   - 应用 changesets：`pnpm changeset version`
   - 发布包：`pnpm changeset publish`

## 添加新包

1. 在 `packages` 文件夹中创建新目录
2. 使用 `pnpm init` 初始化新包
3. 在 `pnpm-workspace.yaml` 中添加包到工作区
4. 创建必要的配置文件（tsconfig.json 等）
5. 在 `turbo.json` 中将包添加到构建管道

## 下一步

- 阅读[开发指南](./development.md)获取更详细的信息
- 查看[项目结构](./project-structure.md)文档
- 了解如何[贡献](./contributing.md)项目