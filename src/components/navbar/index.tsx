import React from 'react';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { useI18n } from '@/utils/i18n';
import { responsiveClasses } from '@/utils/mediaQueries';
import { ANIMATION_DURATION } from '@/utils/constants';
import { cn, textVariants } from '@/utils/responsive';
import { HomeIcon, AboutIcon, FAQIcon, LoginIcon } from '@/components/icons';

interface NavItem {
  to: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  external?: boolean;
}

interface NavbarProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'mobile';
  items?: NavItem[];
  onItemClick?: (item: NavItem) => void;
  showAnimation?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  variant = 'horizontal',
  items: customItems,
  onItemClick,
  showAnimation = true,
}) => {
  const { t } = useI18n();

  // 默认导航项
  const defaultItems: NavItem[] = [
    { to: '/', label: t('nav.home'), icon: <HomeIcon size="sm" /> },
    { to: '/about', label: t('nav.about'), icon: <AboutIcon size="sm" /> },
    { to: '/landing', label: '落地页', icon: <HomeIcon size="sm" /> },
    { to: '/faq', label: 'FAQ', icon: <FAQIcon size="sm" /> },
    { to: '/login', label: '登录', icon: <LoginIcon size="sm" /> },
  ];

  const items = customItems || defaultItems;

  const handleItemClick = (item: NavItem) => {
    onItemClick?.(item);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'vertical':
        return 'flex flex-col space-y-2';
      case 'mobile':
        return 'flex flex-col space-y-4';
      case 'horizontal':
      default:
        return responsiveClasses.flex.center + ' space-x-6';
    }
  };

  const getLinkClasses = () => {
    const baseClasses = 'transition-colors relative';
    
    switch (variant) {
      case 'vertical':
        return cn(
          baseClasses,
          textVariants({ size: 'sm', weight: 'medium' }),
          'text-slate-300 hover:text-white py-2 px-3 rounded-md hover:bg-slate-700'
        );
      case 'mobile':
        return cn(
          baseClasses,
          textVariants({ size: 'lg', weight: 'medium' }),
          'text-white hover:text-slate-300 py-3 border-b border-slate-700 block w-full'
        );
      case 'horizontal':
      default:
        return cn(
          baseClasses,
          textVariants({ size: 'sm', weight: 'medium' }),
          'text-slate-300 hover:text-white',
          'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5',
          'after:bg-white after:transition-all after:duration-300',
          'hover:after:w-full'
        );
    }
  };

  const renderNavItem = (item: NavItem, index: number) => {
    const motionProps = showAnimation ? {
      initial: { opacity: 0, y: variant === 'mobile' ? 20 : 0, x: variant === 'horizontal' ? -20 : 0 },
      animate: { opacity: 1, y: 0, x: 0 },
      transition: { 
        delay: index * 0.1,
        duration: ANIMATION_DURATION.normal / 1000 
      }
    } : {};

    const content = (
      <span className="flex items-center gap-2">
        {item.icon && <span className="text-lg">{item.icon}</span>}
        <span>{item.label}</span>
        {item.badge && (
          <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
            {item.badge}
          </span>
        )}
      </span>
    );

    if (item.external) {
             return (
         <motion.a
           key={item.to}
           href={item.to}
           target="_blank"
           rel="noopener noreferrer"
           className={getLinkClasses()}
           onClick={() => handleItemClick(item)}
           {...motionProps}
         >
           {content}
         </motion.a>
       );
    }

         return (
       <motion.div key={item.to} {...motionProps}>
         <Link
           to={item.to}
           className={getLinkClasses()}
           onClick={() => handleItemClick(item)}
         >
           {content}
         </Link>
       </motion.div>
     );
  };

  return (
    <nav className={cn(getVariantClasses(), className)}>
      {items.map((item, index) => renderNavItem(item, index))}
    </nav>
  );
}; 