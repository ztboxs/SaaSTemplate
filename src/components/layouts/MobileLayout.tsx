import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SharedLayout } from './SharedLayout';
import { cn, containerVariants } from '@/utils/responsive';
import { responsiveClasses } from '@/utils/mediaQueries';
import { ANIMATION_DURATION, Z_INDEX } from '@/utils/constants';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  showBottomNavigation?: boolean;
  bottomNavigation?: React.ReactNode;
  showFloatingAction?: boolean;
  floatingAction?: React.ReactNode;
  headerProps?: React.ComponentProps<typeof SharedLayout>['headerProps'];
  footerProps?: React.ComponentProps<typeof SharedLayout>['footerProps'];
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  className,
  padding = 'md',
  showBottomNavigation = false,
  bottomNavigation,
  showFloatingAction = false,
  floatingAction,
  headerProps,
  footerProps,
}) => {
  const [isFloatingActionVisible, setIsFloatingActionVisible] = useState(true);

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'px-2 py-2';
      case 'lg':
        return 'px-6 py-6';
      case 'md':
      default:
        return 'px-4 py-4';
    }
  };

  // 处理滚动时隐藏/显示浮动按钮
  React.useEffect(() => {
    if (!showFloatingAction) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrollingDown = currentScrollY > lastScrollY;
          
          setIsFloatingActionVisible(!isScrollingDown || currentScrollY < 100);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFloatingAction]);

  return (
    <SharedLayout
      className={cn(
        responsiveClasses.show.mobile, // 仅在移动端显示
        className
      )}
      headerProps={headerProps}
      footerProps={showBottomNavigation ? { ...footerProps, className: 'hidden' } : footerProps}
    >
      <div className={cn('flex-grow relative', getPaddingClasses())}>
        {/* 主要内容区域 */}
        <div className={cn(
          containerVariants({ size: 'full', padding: 'none' }),
          'space-y-4',
          showBottomNavigation && 'pb-20' // 为底部导航预留空间
        )}>
          {children}
        </div>

        {/* 底部导航栏 */}
        {showBottomNavigation && bottomNavigation && (
          <div 
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
            style={{ zIndex: Z_INDEX.navbar }}
          >
            <div className="px-4 py-2">
              {bottomNavigation}
            </div>
          </div>
        )}

        {/* 浮动操作按钮 */}
        <AnimatePresence>
          {showFloatingAction && floatingAction && isFloatingActionVisible && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION.normal / 1000 }}
              className="fixed bottom-20 right-4"
              style={{ zIndex: Z_INDEX.navbar + 1 }}
            >
              {floatingAction}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SharedLayout>
  );
}; 