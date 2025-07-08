
import { motion } from 'framer-motion';
import { useI18n } from '@/utils/i18n';

export default function AboutPage() {
  const { t } = useI18n();
  
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">{t('nav.about')}</h1>
        <div className="prose lg:prose-lg">
          <p>
            Yazeta 是一个使用现代前端技术栈构建的应用程序，旨在提供优秀的开发体验和用户体验。
          </p>
          <p>
            我们使用了以下技术：
          </p>
          <ul>
            <li><strong>React 18 + TypeScript</strong> - 为构建用户界面提供强大的类型安全保障</li>
            <li><strong>Vite</strong> - 快速的开发服务器和构建工具</li>
            <li><strong>TailwindCSS + shadcn/ui</strong> - 高效的样式解决方案和组件库</li>
            <li><strong>Zustand</strong> - 简洁的状态管理库</li>
            <li><strong>TanStack Router</strong> - 类型安全的路由解决方案</li>
            <li><strong>React Intl Universal</strong> - 为应用提供国际化支持</li>
            <li><strong>Framer Motion</strong> - 强大的动画库</li>
            <li><strong>Axios</strong> - 可靠的 HTTP 客户端</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}; 