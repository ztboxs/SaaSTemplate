import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';
import { SharedLayout } from './SharedLayout';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  // 桌面端特定配置
  desktopConfig?: {
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'screen';
    showSidebar?: boolean;
    sidebar?: React.ReactNode;
    sidebarPosition?: 'left' | 'right';
  };
  // 移动端特定配置
  mobileConfig?: {
    padding?: 'none' | 'sm' | 'md' | 'lg';
    showBottomNavigation?: boolean;
    bottomNavigation?: React.ReactNode;
    showFloatingAction?: boolean;
    floatingAction?: React.ReactNode;
  };
  // 是否强制使用特定布局
  forceLayout?: 'auto' | 'desktop' | 'mobile' | 'shared';
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className,
  desktopConfig = {},
  mobileConfig = {},
  forceLayout = 'auto',
}) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  // 根据配置决定使用哪种布局
  const getLayoutType = () => {
    if (forceLayout !== 'auto') {
      return forceLayout;
    }
    
    if (isMobile) {
      return 'mobile';
    } else if (isTablet) {
      return 'shared'; // 平板使用共享布局
    } else {
      return 'desktop';
    }
  };

  const layoutType = getLayoutType();

  // 桌面端布局
  if (layoutType === 'desktop') {
    return (
      <DesktopLayout
        className={className}
        containerSize={desktopConfig.containerSize}
        showSidebar={desktopConfig.showSidebar}
        sidebar={desktopConfig.sidebar}
        sidebarPosition={desktopConfig.sidebarPosition}
      >
        {children}
      </DesktopLayout>
    );
  }

  // 移动端布局
  if (layoutType === 'mobile') {
    return (
      <MobileLayout
        className={className}
        padding={mobileConfig.padding}
        showBottomNavigation={mobileConfig.showBottomNavigation}
        bottomNavigation={mobileConfig.bottomNavigation}
        showFloatingAction={mobileConfig.showFloatingAction}
        floatingAction={mobileConfig.floatingAction}
      >
        {children}
      </MobileLayout>
    );
  }

  // 共享布局（平板或强制指定）
  return (
    <SharedLayout className={className}>
      <div className="container mx-auto p-4">
        {children}
      </div>
    </SharedLayout>
  );
}; 