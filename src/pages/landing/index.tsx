
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

export default function LandingPage() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          欢迎来到 Yazeta
        </h1>
        <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          现代化的前端开发框架，为您提供最佳的开发体验和用户体验
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">快速开发</h3>
            <p className="text-gray-600">
              使用现代化工具链，提升开发效率
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">类型安全</h3>
            <p className="text-gray-600">
              TypeScript 支持，减少运行时错误
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">响应式设计</h3>
            <p className="text-gray-600">
              完美适配各种设备和屏幕尺寸
            </p>
          </motion.div>
        </div>
        
        <div className="space-x-4">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            开始使用
          </Link>
          <a
            href="/about"
            className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
          >
            了解更多
          </a>
        </div>
      </motion.div>
    </div>
  );
};
