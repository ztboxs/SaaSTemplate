import { useState, useEffect } from 'react';

interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouch: boolean;
  orientation: 'portrait' | 'landscape';
  devicePixelRatio: number;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const useViewport = (): ViewportInfo => {
  const [viewport, setViewport] = useState<ViewportInfo>(() => {
    // 初始化时的默认值
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    return {
      width,
      height,
      isMobile: width < BREAKPOINTS.mobile,
      isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
      isDesktop: width >= BREAKPOINTS.tablet,
      isTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
      orientation: width > height ? 'landscape' : 'portrait',
      devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
    };
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setViewport({
        width,
        height,
        isMobile: width < BREAKPOINTS.mobile,
        isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
        isDesktop: width >= BREAKPOINTS.tablet,
        isTouch: 'ontouchstart' in window,
        orientation: width > height ? 'landscape' : 'portrait',
        devicePixelRatio: window.devicePixelRatio,
      });
    };

    // 立即更新一次
    updateViewport();

    // 监听窗口大小变化
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    // 清理监听器
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return viewport;
}; 