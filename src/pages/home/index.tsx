
import { motion } from 'framer-motion';
import { useI18n } from '@/utils/i18n';

export default function HomePage() {
  const { t } = useI18n();
  
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">{t('app.title')}</h1>
        <p className="text-xl mb-8">{t('app.description')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">React 18 + TypeScript</h2>
            <p className="text-gray-600">
              最新的 React 版本，结合 TypeScript 提供类型安全和更好的开发体验。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">TailwindCSS + shadcn/ui</h2>
            <p className="text-gray-600">
              现代化的 CSS 框架，搭配可重用的组件库，打造精美的用户界面。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Zustand</h2>
            <p className="text-gray-600">
              简洁高效的状态管理解决方案，无需样板代码。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">TanStack Router</h2>
            <p className="text-gray-600">
              类型安全的现代路由解决方案，为 React 应用提供强大的路由能力。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 