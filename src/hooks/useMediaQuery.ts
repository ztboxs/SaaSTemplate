import { useState, useEffect } from 'react';

export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    // 服务端渲染或不支持 matchMedia 时返回默认值
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    // 创建媒体查询
    const mediaQuery = window.matchMedia(query);
    
    // 设置初始值
    setMatches(mediaQuery.matches);

    // 定义事件回调
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 添加事件监听
    mediaQuery.addEventListener('change', handleChange);

    // 清理函数
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// 预定义的媒体查询 hooks
export const useIsMobile = () => useMediaQuery('(max-width: 767px)', false);
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)', false);
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)', true);
export const useIsLargeDesktop = () => useMediaQuery('(min-width: 1280px)', false);
export const useIsXLDesktop = () => useMediaQuery('(min-width: 1536px)', false);

// 设备特性查询
export const useIsRetina = () => useMediaQuery('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)', false);
export const useIsTouch = () => useMediaQuery('(hover: none) and (pointer: coarse)', false);
export const useCanHover = () => useMediaQuery('(hover: hover)', true);

// 用户偏好查询
export const useIsDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)', false);
export const useIsLightMode = () => useMediaQuery('(prefers-color-scheme: light)', true);
export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)', false);
export const useHighContrast = () => useMediaQuery('(prefers-contrast: high)', false);

// 方向查询
export const useIsPortrait = () => useMediaQuery('(orientation: portrait)', true);
export const useIsLandscape = () => useMediaQuery('(orientation: landscape)', false);

// 组合查询
export const useIsMobilePortrait = () => {
  const isMobile = useIsMobile();
  const isPortrait = useIsPortrait();
  return isMobile && isPortrait;
};

export const useIsTabletLandscape = () => {
  const isTablet = useIsTablet();
  const isLandscape = useIsLandscape();
  return isTablet && isLandscape;
};

// 自定义断点查询
export const useBreakpoint = (breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl') => {
  const breakpoints = {
    xs: '(min-width: 475px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    '3xl': '(min-width: 1920px)',
  };
  
  return useMediaQuery(breakpoints[breakpoint], false);
};

// 范围查询
export const useBetweenBreakpoints = (min: string, max: string) => {
  return useMediaQuery(`(min-width: ${min}) and (max-width: ${max})`, false);
}; 