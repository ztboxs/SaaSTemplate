import { useEffect, useState } from 'react'
import { AppRouter } from '@/routes'
import { useI18n } from '@/utils/i18n'
import useAppStore from '@/store/useAppStore'

function App() {
  const { loading } = useI18n()
  const { theme } = useAppStore()
  const [mounted, setMounted] = useState(false)

  // 确保挂载后才渲染，防止水合不一致
  useEffect(() => {
    setMounted(true)
  }, [])

  // 应用主题模式 - 使用 data-theme 属性
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  if (!mounted || loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">加载中...</div>
    </div>
  }

  return <AppRouter />
}

export default App
