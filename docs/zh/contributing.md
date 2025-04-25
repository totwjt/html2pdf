# 贡献指南

感谢您对 Monorepo Starter 项目的关注！我们欢迎各种形式的贡献，包括但不限于：

- 报告问题
- 提交功能请求
- 提交代码修复
- 改进文档
- 分享使用经验

## 开始之前

1. 确保您已经阅读并理解了项目的 [开发指南](./development.md)
2. 检查现有的 Issue 和 Pull Request，避免重复提交
3. 如果您要提交代码，请确保您已经签署了贡献者许可协议

## 贡献流程

### 1. Fork 项目

1. 访问项目主页
2. 点击 "Fork" 按钮
3. 克隆您的 fork：

```bash
git clone https://github.com/your-username/monorepo-starter.git
cd monorepo-starter
```

### 2. 设置开发环境

1. 安装依赖：

```bash
pnpm install
```

2. 创建开发分支：

```bash
git checkout -b feature/your-feature-name
```

### 3. 开发

1. 遵循项目的代码规范
2. 编写测试用例
3. 更新文档
4. 提交更改：

```bash
git add .
git commit -m "feat: your feature description"
```

### 4. 提交 Pull Request

1. 推送到您的 fork：

```bash
git push origin feature/your-feature-name
```

2. 创建 Pull Request
3. 等待审查和反馈

## 代码规范

### 提交信息

使用 Conventional Commits 格式：

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

### 代码风格

- 使用 ESLint 和 Prettier 进行代码格式化
- 遵循 TypeScript 最佳实践
- 使用 Vue 3 组合式 API
- 保持代码简洁和可读性

### 测试

- 为新功能编写单元测试
- 确保所有测试通过
- 保持测试覆盖率

## 文档

- 更新相关文档
- 添加代码注释
- 提供使用示例

## 审查流程

1. 提交 Pull Request 后，项目维护者会进行审查
2. 可能需要根据反馈进行修改
3. 审查通过后，维护者会合并您的代码

## 行为准则

请遵守以下行为准则：

- 尊重他人
- 保持专业和友善
- 接受建设性的批评
- 关注问题本身，而不是个人

## 问题报告

报告问题时，请提供：

1. 问题的详细描述
2. 复现步骤
3. 期望的行为
4. 实际的行为
5. 环境信息（Node.js 版本、操作系统等）
6. 相关代码或错误信息

## 功能请求

提交功能请求时，请提供：

1. 功能的详细描述
2. 使用场景
3. 可能的实现方案
4. 相关的参考资料

## 许可证

通过提交代码，您同意将您的贡献按照项目的许可证进行授权。

## 联系方式

如果您有任何问题，可以通过以下方式联系我们：

- 提交 Issue
- 发送邮件
- 加入我们的社区

感谢您的贡献！