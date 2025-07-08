## 备份使用

# Yazeta 前端项目

这是一个使用 React 18 + TypeScript + Vite 构建的现代化前端项目。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: TailwindCSS + shadcn/ui
- **状态管理**: Zustand
- **路由管理**: @tanstack/react-router
- **国际化**: React Intl Universal
- **动画库**: Framer Motion
- **HTTP 客户端**: Axios

## 目录结构

```
yazeta-app/
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── assets/             # 项目资源文件
│   │   ├── common/         # 通用组件
│   │   ├── layout/         # 布局组件
│   │   └── ui/             # UI 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── locales/            # 国际化文件
│   │   ├── en/             # 英文翻译
│   │   └── zh-CN/          # 中文翻译
│   ├── pages/              # 页面组件
│   ├── routes/             # 路由配置
│   ├── services/           # API 服务
│   ├── store/              # 状态管理
│   ├── styles/             # 全局样式
│   └── utils/              # 工具函数
├── .env.example            # 环境变量示例
├── .eslintrc.js            # ESLint 配置
├── index.html              # HTML 模板
├── package.json            # 项目依赖
├── postcss.config.js       # PostCSS 配置
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── vite.config.ts          # Vite 配置
```

## 功能特性

- 🌐 **国际化支持**: 默认支持英文和中文
- 🎨 **主题切换**: 支持亮色/暗色模式
- 📱 **响应式设计**: 适配各种屏幕尺寸
- 🔒 **类型安全**: 严格的 TypeScript 类型检查
- 🚀 **路由管理**: 类型安全的路由系统
- 🧩 **组件化设计**: 清晰的组件分层

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 代码规范

项目使用 ESLint 和 Prettier 进行代码风格检查和格式化，确保代码质量和一致性。

```bash
# 运行 lint 检查
pnpm lint

# 格式化代码
pnpm format
```

## 国际化

项目使用 React Intl Universal 进行国际化处理，支持英文和中文两种语言。

翻译文件位于 `src/locales` 目录下，可以根据需要添加更多语言支持。

## 部署

项目可以轻松部署到 Vercel、Netlify 等现代化托管平台。

## 许可证

[MIT](LICENSE)
