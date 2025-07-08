import React from 'react';
import { SharedLayout } from './SharedLayout';
import { cn, containerVariants } from '@/utils/responsive';
import { responsiveClasses } from '@/utils/mediaQueries';

interface DesktopLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'screen';
  showSidebar?: boolean;
  sidebar?: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  headerProps?: React.ComponentProps<typeof SharedLayout>['headerProps'];
  footerProps?: React.ComponentProps<typeof SharedLayout>['footerProps'];
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({
  children,
  className,
  containerSize = 'xl',
  showSidebar = false,
  sidebar,
  sidebarPosition = 'left',
  headerProps,
  footerProps,
}) => {
  const renderMainContent = () => {
    if (!showSidebar || !sidebar) {
      return (
        <div className={containerVariants({ size: containerSize })}>
          {children}
        </div>
      );
    }

    return (
      <div className="flex-grow">
        <div className={cn(
          containerVariants({ size: 'full', padding: 'none' }),
          'flex gap-8'
        )}>
          {sidebarPosition === 'left' && (
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {sidebar}
              </div>
            </aside>
          )}
          
          <main className="flex-grow min-w-0">
            <div className="space-y-8">
              {children}
            </div>
          </main>
          
          {sidebarPosition === 'right' && (
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {sidebar}
              </div>
            </aside>
          )}
        </div>
      </div>
    );
  };

  return (
    <SharedLayout
      className={cn(
        responsiveClasses.hide.mobile, // 仅在桌面端显示
        className
      )}
      headerProps={headerProps}
      footerProps={footerProps}
    >
      <div className="py-8">
        {renderMainContent()}
      </div>
    </SharedLayout>
  );
}; 