
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
        <p className="text-2xl text-slate-600 mb-8">页面未找到</p>
        <Link
          to="/"
          className="px-6 py-3 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors"
        >
          返回首页
        </Link>
      </motion.div>
    </div>
  );
}; 