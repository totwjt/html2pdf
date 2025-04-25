# 开发指南

本文档提供了 Monorepo Starter 项目的详细开发指南。

## 开发环境设置

1. 安装 Node.js (v16 或更高版本)
2. 安装 pnpm (v8 或更高版本)
3. 安装 VSCode 和推荐的扩展：
   - Volar (Vue 语言支持)
   - ESLint
   - Prettier
   - TypeScript Vue Plugin

## 项目设置

1. 克隆仓库：

```bash
git clone https://github.com/your-username/monorepo-starter.git
cd monorepo-starter
```

2. 安装依赖：

```bash
pnpm install
```

## 开发工作流

### 启动开发服务器

```bash
pnpm dev
```

这将启动示例应用的开发服务器。

### 构建项目

```bash
pnpm build
```

这将构建所有包。

### 运行测试

```bash
pnpm test
```

### 代码格式化

```bash
pnpm format
```

### 代码检查

```bash
pnpm lint
```

## 包开发

### 创建新包

1. 在 `packages` 目录下创建新目录
2. 初始化包：

```bash
cd packages/new-package
pnpm init
```

3. 创建必要的配置文件：
   - `tsconfig.json`
   - `package.json`
   - 构建配置文件（`tsup.config.ts` 或 `vite.config.ts`）

4. 在 `pnpm-workspace.yaml` 中添加包：

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

5. 在 `turbo.json` 中添加构建配置：

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

### 包依赖管理

- 使用 `workspace:*` 引用工作区内的包
- 使用 `pnpm add` 添加依赖
- 使用 `pnpm remove` 移除依赖

## 版本管理

使用 Changesets 管理版本：

1. 创建变更：

```bash
pnpm changeset
```

2. 应用变更：

```bash
pnpm changeset version
```

3. 发布包：

```bash
pnpm changeset publish
```

## 代码规范

- 使用 ESLint 和 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 使用 Vue 3 组合式 API
- 编写单元测试
- 保持文档更新

## 提交规范

使用 Conventional Commits：

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

类型：
- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档
- `style`: 格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建过程或辅助工具的变动

## 问题排查

### 常见问题

1. 依赖安装失败
   - 检查 Node.js 和 pnpm 版本
   - 清除 pnpm 缓存：`pnpm store prune`

2. 构建失败
   - 检查 TypeScript 配置
   - 检查构建配置文件
   - 查看错误日志

3. 测试失败
   - 检查测试环境
   - 查看测试报告

### 调试技巧

- 使用 `console.log` 进行调试
- 使用 VSCode 调试器
- 检查构建日志
- 查看错误堆栈

## 性能优化

- 使用 Turborepo 缓存
- 优化构建配置
- 使用代码分割
- 优化依赖关系

## 安全最佳实践

- 定期更新依赖
- 使用安全依赖
- 遵循最小权限原则
- 保护敏感信息

## 贡献指南

请参考 [贡献指南](./contributing.md) 了解如何为项目做出贡献。