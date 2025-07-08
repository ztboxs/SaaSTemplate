import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/utils/i18n';
import useAppStore from '@/store/useAppStore';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LAYOUT_SIZES, ANIMATION_DURATION } from '@/utils/constants';
import { cn } from '@/utils/responsive';
import { 
  MenuIcon, 
  CloseIcon, 
  SunIcon, 
  MoonIcon, 
  GlobeIcon
} from '@/components/icons';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { t, currentLocale, switchLocale } = useI18n();
  const { theme, setTheme } = useAppStore();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    switchLocale(currentLocale === 'en' ? 'zh-CN' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { to: '/', label: t('nav.home')},
    { to: '/about', label: t('nav.about')},
    { to: '/landing', label: '落地页'},
    { to: '/faq', label: 'FAQ' },
    { to: '/login', label: '登录'},
  ];

  return (
    <>
      <header 
        className={cn(
          'sticky top-0 w-full z-50',
          'bg-[var(--header-bg)] border-b border-[var(--header-border)]',
          'backdrop-blur-sm bg-opacity-95 transition-all duration-300',
          className
        )}
        style={{ 
          height: isMobile ? LAYOUT_SIZES.header.mobile : LAYOUT_SIZES.header.desktop,
        }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* 左侧：Logo 和导航菜单 */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link 
                to="/" 
                className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                {t('app.title')}
              </Link>

              {/* 桌面端导航菜单 */}
              <nav className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-lg',
                      'text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]',
                      'hover:bg-[var(--surface)] transition-all duration-200',
                      'text-sm font-medium'
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* 右侧：功能按钮 */}
            <div className="flex items-center space-x-3">
              
              {/* 桌面端功能按钮 */}
              <div className="hidden md:flex items-center space-x-2">
                {/* 语言切换按钮 */}
                <button
                  onClick={toggleLanguage}
                  className={cn(
                    'p-2 rounded-lg transition-all duration-200',
                    'text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]',
                    'hover:bg-[var(--surface)] hover:shadow-sm',
                    'flex items-center gap-1'
                  )}
                  title={currentLocale === 'en' ? '切换到中文' : 'Switch to English'}
                >
                  <GlobeIcon size="sm" />
                  <span className="text-xs font-medium">
                    {currentLocale === 'en' ? 'CN' : 'EN'}
                  </span>
                </button>

                {/* 主题切换按钮 */}
                <button
                  onClick={toggleTheme}
                  className={cn(
                    'p-2 rounded-lg transition-all duration-200',
                    'text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]',
                    'hover:bg-[var(--surface)] hover:shadow-sm'
                  )}
                  title={theme === 'light' ? '切换到深色模式' : '切换到浅色模式'}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: theme === 'light' ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === 'light' ? <MoonIcon size="sm" /> : <SunIcon size="sm" />}
                  </motion.div>
                </button>
              </div>

              {/* 移动端菜单按钮 */}
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  'md:hidden p-2 rounded-lg transition-all duration-200',
                  'text-[var(--nav-text)] hover:text-[var(--nav-text-hover)]',
                  'hover:bg-[var(--surface)]'
                )}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <motion.div
                    variants={{
                      closed: { rotate: 0, opacity: 1 },
                      open: { rotate: 90, opacity: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <MenuIcon size="md" />
                  </motion.div>
                  <motion.div
                    variants={{
                      closed: { rotate: -90, opacity: 0 },
                      open: { rotate: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <CloseIcon size="md" />
                  </motion.div>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 移动端菜单覆盖层 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION.fast / 1000 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMobileMenu}
            />
            
            {/* 菜单内容 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: ANIMATION_DURATION.normal / 1000 }}
              className={cn(
                'fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50',
                'bg-[var(--header-bg)] border-l border-[var(--header-border)]',
                'shadow-2xl backdrop-blur-sm'
              )}
              style={{ 
                paddingTop: isMobile ? LAYOUT_SIZES.header.mobile : LAYOUT_SIZES.header.desktop 
              }}
            >
              <nav className="p-6">
                <div className="space-y-2">
                  {/* 移动端导航菜单 */}
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: ANIMATION_DURATION.normal / 1000 
                      }}
                    >
                      <Link
                        to={item.to}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-xl',
                          'text-[var(--text-primary)] hover:text-[var(--primary)]',
                          'hover:bg-[var(--surface)] transition-all duration-200',
                          'font-medium'
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* 移动端功能按钮 */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: navigationItems.length * 0.1,
                      duration: ANIMATION_DURATION.normal / 1000 
                    }}
                    className="pt-6 border-t border-[var(--border)] space-y-2"
                  >
                    {/* 语言切换 */}
                    <button
                      onClick={() => {
                        toggleLanguage();
                        closeMobileMenu();
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 rounded-xl',
                        'text-[var(--text-primary)] hover:text-[var(--primary)]',
                        'hover:bg-[var(--surface)] transition-all duration-200',
                        'font-medium'
                      )}
                    >
                      <GlobeIcon size="sm" />
                      <span>{currentLocale === 'en' ? '切换到中文' : 'Switch to English'}</span>
                    </button>

                    {/* 主题切换 */}
                    <button
                      onClick={() => {
                        toggleTheme();
                        closeMobileMenu();
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-3 rounded-xl',
                        'text-[var(--text-primary)] hover:text-[var(--primary)]',
                        'hover:bg-[var(--surface)] transition-all duration-200',
                        'font-medium'
                      )}
                    >
                      {theme === 'light' ? <MoonIcon size="sm" /> : <SunIcon size="sm" />}
                      <span>{theme === 'light' ? '深色模式' : '浅色模式'}</span>
                    </button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}; 