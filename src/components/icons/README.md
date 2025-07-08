# Lucide React 图标组件库

本项目使用 [lucide-react](https://lucide.dev/) 作为图标组件库，提供了一套统一、美观的图标系统。

## 安装

```bash
pnpm add lucide-react
```

## 基本使用

### 导入图标

```tsx
import { HomeIcon, SearchIcon, UserIcon } from '@/components/icons';
```

### 使用图标

```tsx
// 基本使用
<HomeIcon />

// 指定尺寸
<HomeIcon size="sm" />
<HomeIcon size="lg" />
<HomeIcon size={24} />

// 添加样式
<HomeIcon className="text-blue-500" />
<HomeIcon className="text-red-500 hover:text-red-600" />
```

## 可用尺寸

我们提供了预设的尺寸选项：

| 尺寸 | 像素值 | 描述 |
|------|--------|------|
| `xs` | 12px | 超小尺寸 |
| `sm` | 16px | 小尺寸 |
| `md` | 20px | 中等尺寸（默认） |
| `lg` | 24px | 大尺寸 |
| `xl` | 32px | 超大尺寸 |
| `2xl` | 40px | 2倍超大尺寸 |

你也可以传入数字来指定自定义像素值：

```tsx
<HomeIcon size={18} />
<HomeIcon size={28} />
```

## 图标分类

### 导航图标
用于导航和菜单：
- `HomeIcon` - 首页
- `AboutIcon` - 关于
- `FAQIcon` - 常见问题
- `LoginIcon` - 登录
- `MenuIcon` - 菜单
- `CloseIcon` - 关闭

### 界面操作图标
用于界面交互：
- `SearchIcon` - 搜索
- `SettingsIcon` - 设置
- `BellIcon` - 通知
- `UserIcon` - 用户
- `EditIcon` - 编辑
- `TrashIcon` - 删除
- `PlusIcon` - 添加
- `MinusIcon` - 减少

### 状态图标
用于显示状态：
- `CheckIcon` - 检查/确认
- `AlertIcon` - 提醒
- `WarningIcon` - 警告
- `SuccessIcon` - 成功
- `ErrorIcon` - 错误

### 箭头和方向图标
用于导航和方向指示：
- `ArrowLeftIcon` - 左箭头
- `ArrowRightIcon` - 右箭头
- `ArrowUpIcon` - 上箭头
- `ArrowDownIcon` - 下箭头
- `ChevronDownIcon` - 下拉箭头
- `ChevronUpIcon` - 上拉箭头
- `ChevronLeftIcon` - 左拉箭头
- `ChevronRightIcon` - 右拉箭头

### 联系方式图标
用于联系信息：
- `MailIcon` - 邮件
- `PhoneIcon` - 电话
- `LocationIcon` - 位置
- `CalendarIcon` - 日历
- `ClockIcon` - 时间

### 社交媒体图标
用于社交平台链接：
- `GithubIcon` - GitHub
- `TwitterIcon` - Twitter
- `FacebookIcon` - Facebook
- `InstagramIcon` - Instagram
- `LinkedinIcon` - LinkedIn
- `YoutubeIcon` - YouTube

### 交互图标
用于用户交互：
- `StarIcon` - 星星/收藏
- `HeartIcon` - 喜欢/点赞
- `ShareIcon` - 分享
- `DownloadIcon` - 下载
- `UploadIcon` - 上传
- `ExternalLinkIcon` - 外部链接

## 高级用法

### 在按钮中使用

```tsx
import { PlusIcon } from '@/components/icons';

function AddButton() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
      <PlusIcon size="sm" />
      添加项目
    </button>
  );
}
```

### 在导航中使用

```tsx
import { HomeIcon, AboutIcon } from '@/components/icons';

const navItems = [
  { to: '/', label: '首页', icon: <HomeIcon size="sm" /> },
  { to: '/about', label: '关于', icon: <AboutIcon size="sm" /> },
];
```

### 状态指示器

```tsx
import { CheckIcon, ErrorIcon } from '@/components/icons';

function StatusIndicator({ status }: { status: 'success' | 'error' }) {
  return (
    <div className="flex items-center gap-2">
      {status === 'success' ? (
        <CheckIcon size="sm" className="text-green-500" />
      ) : (
        <ErrorIcon size="sm" className="text-red-500" />
      )}
      <span>{status === 'success' ? '成功' : '失败'}</span>
    </div>
  );
}
```

## 样式自定义

### 颜色

所有图标都继承父元素的文本颜色，你可以通过 CSS 类或样式来修改：

```tsx
<HomeIcon className="text-blue-500" />
<HomeIcon className="text-gray-400 hover:text-gray-600" />
<HomeIcon style={{ color: '#ff0000' }} />
```

### 动画

结合 Tailwind CSS 或 Framer Motion 添加动画效果：

```tsx
<SearchIcon className="transition-transform hover:scale-110" />
<HeartIcon className="animate-pulse text-red-500" />
```

## 注意事项

1. **一致性**：在整个项目中使用统一的图标库，避免混用不同来源的图标
2. **尺寸**：在相同上下文中保持图标尺寸一致
3. **颜色**：使用项目的设计系统颜色，保持视觉一致性
4. **可访问性**：在需要时为图标添加 `aria-label` 或包装在具有描述性文本的元素中

## 扩展

如果需要添加新的图标，请：

1. 在 `src/components/icons/index.tsx` 中导入新的 Lucide 图标
2. 创建对应的组件并导出
3. 更新此文档
4. 在 `IconDemo.tsx` 中添加演示

```tsx
// 在 index.tsx 中添加新图标
import { NewIcon as LucideNewIcon } from 'lucide-react';

export const NewIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={LucideNewIcon} ref={ref} {...props} />
);
NewIcon.displayName = 'NewIcon';
```

## 演示

查看 `IconDemo.tsx` 组件可以看到所有可用图标的演示效果。 