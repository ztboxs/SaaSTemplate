
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">常见问题</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">什么是 Yazeta？</h2>
            <p className="text-gray-600">
              Yazeta 是一个使用现代前端技术栈构建的应用程序，旨在提供优秀的开发体验和用户体验。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">支持哪些技术栈？</h2>
            <p className="text-gray-600">
              我们使用 React 18、TypeScript、TailwindCSS、Zustand、TanStack Router 等现代技术。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">如何开始使用？</h2>
            <p className="text-gray-600">
              请参考我们的文档和示例代码，快速上手开发。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
