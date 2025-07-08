import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/utils/i18n';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { responsiveClasses } from '@/utils/mediaQueries';
import { LAYOUT_SIZES, Z_INDEX, ANIMATION_DURATION } from '@/utils/constants';
import { cn } from '@/utils/responsive';
import { MenuIcon, CloseIcon } from '@/components/icons';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { t, currentLocale, switchLocale } = useI18n();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    switchLocale(currentLocale === 'en' ? 'zh-CN' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/landing', label: '落地页' },
    { to: '/faq', label: 'FAQ' },
    { to: '/login', label: '登录' },
  ];

  return (
    <>
      <header 
        className={cn(
          'bg-slate-800 text-white border-b border-slate-700',
          'sticky top-0 w-full',
          className
        )}
        style={{ 
          height: isMobile ? LAYOUT_SIZES.header.mobile : LAYOUT_SIZES.header.desktop,
          zIndex: Z_INDEX.navbar 
        }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-bold hover:text-slate-300 transition-colors"
              onClick={closeMobileMenu}
            >
              {t('app.title')}
            </Link>

            {/* 桌面端导航 */}
            <nav className={responsiveClasses.hide.mobile}>
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="hover:text-slate-300 transition-colors text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1 bg-slate-700 rounded-md hover:bg-slate-600 transition-colors text-sm"
                >
                  {currentLocale === 'en' ? '中文' : 'English'}
                </button>
              </div>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className={responsiveClasses.show.mobile}>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-slate-700 transition-colors"
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
                    <MenuIcon size="lg" />
                  </motion.div>
                  <motion.div
                    variants={{
                      closed: { rotate: -90, opacity: 0 },
                      open: { rotate: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                  >
                    <CloseIcon size="lg" />
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
              className="fixed inset-0 bg-black bg-opacity-50"
              style={{ zIndex: Z_INDEX.backdrop }}
              onClick={closeMobileMenu}
            />
            
            {/* 菜单内容 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: ANIMATION_DURATION.normal / 1000 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-800 shadow-xl"
              style={{ 
                zIndex: Z_INDEX.sidebar,
                paddingTop: isMobile ? LAYOUT_SIZES.header.mobile : LAYOUT_SIZES.header.desktop 
              }}
            >
              <nav className="p-6">
                <div className="space-y-4">
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
                        className="block text-white hover:text-slate-300 transition-colors py-3 text-lg font-medium border-b border-slate-700"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: navigationItems.length * 0.1,
                      duration: ANIMATION_DURATION.normal / 1000 
                    }}
                    className="pt-4"
                  >
                    <button
                      onClick={() => {
                        toggleLanguage();
                        closeMobileMenu();
                      }}
                      className="w-full px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors"
                    >
                      {currentLocale === 'en' ? '中文' : 'English'}
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