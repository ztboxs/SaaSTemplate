import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/utils/responsive';

interface SharedLayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  headerProps?: React.ComponentProps<typeof Header>;
  footerProps?: React.ComponentProps<typeof Footer>;
}

export const SharedLayout: React.FC<SharedLayoutProps> = ({
  children,
  className,
  showHeader = true,
  showFooter = true,
  headerProps,
  footerProps,
}) => {
  return (
    <div className={cn('min-h-screen flex flex-col', className)}>
      {showHeader && <Header {...headerProps} />}
      
      <main className="flex-grow">
        {children}
      </main>
      
      {showFooter && <Footer {...footerProps} />}
    </div>
  );
}; 