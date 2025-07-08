import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 定义状态接口
interface AppState {
  theme: 'light' | 'dark';
  locale: string;
  isAuthenticated: boolean;
  user: {
    id?: string;
    name?: string;
    email?: string;
  } | null;
  // 状态更新函数
  setTheme: (theme: 'light' | 'dark') => void;
  setLocale: (locale: string) => void;
  setUser: (user: AppState['user']) => void;
  login: (user: AppState['user']) => void;
  logout: () => void;
}

// 创建状态管理 store
const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // 初始状态 - 默认使用光亮模式
      theme: 'light',
      locale: 'en',
      isAuthenticated: false,
      user: null,
      
      // 状态更新函数
      setTheme: (theme) => set({ theme }),
      setLocale: (locale) => set({ locale }),
      setUser: (user) => set({ user }),
      login: (user) => set({ isAuthenticated: true, user }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    {
      name: 'app-storage', // 持久化存储名称
      partialize: (state) => ({
        theme: state.theme,
        locale: state.locale,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
      }),
    }
  )
);

export default useAppStore; 