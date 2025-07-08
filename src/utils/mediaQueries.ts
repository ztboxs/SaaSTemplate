import { BREAKPOINTS, DEVICE_BREAKPOINTS, type DeviceType } from './constants';

/**
 * 媒体查询字符串生成器
 */
export const mediaQueries = {
  // 最小宽度查询
  up: (breakpoint: keyof typeof BREAKPOINTS) => 
    `(min-width: ${BREAKPOINTS[breakpoint]}px)`,
  
  // 最大宽度查询
  down: (breakpoint: keyof typeof BREAKPOINTS) => 
    `(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`,
  
  // 范围查询
  between: (min: keyof typeof BREAKPOINTS, max: keyof typeof BREAKPOINTS) =>
    `(min-width: ${BREAKPOINTS[min]}px) and (max-width: ${BREAKPOINTS[max] - 1}px)`,
  
  // 仅在指定断点
  only: (breakpoint: keyof typeof BREAKPOINTS) => {
    const breakpointKeys = Object.keys(BREAKPOINTS) as (keyof typeof BREAKPOINTS)[];
    const currentIndex = breakpointKeys.indexOf(breakpoint);
    const nextBreakpoint = breakpointKeys[currentIndex + 1];
    
    if (nextBreakpoint) {
      return `(min-width: ${BREAKPOINTS[breakpoint]}px) and (max-width: ${BREAKPOINTS[nextBreakpoint] - 1}px)`;
    }
    return `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
  },
  
  // 设备类型查询
  mobile: `(max-width: ${DEVICE_BREAKPOINTS.mobile - 1}px)`,
  tablet: `(min-width: ${DEVICE_BREAKPOINTS.mobile}px) and (max-width: ${DEVICE_BREAKPOINTS.tablet - 1}px)`,
  desktop: `(min-width: ${DEVICE_BREAKPOINTS.tablet}px)`,
  
  // 设备特性查询
  touch: '(hover: none) and (pointer: coarse)',
  hover: '(hover: hover)',
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  
  // 方向查询
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  
  // 用户偏好查询
  darkMode: '(prefers-color-scheme: dark)',
  lightMode: '(prefers-color-scheme: light)',
  reducedMotion: '(prefers-reduced-motion: reduce)',
  highContrast: '(prefers-contrast: high)',
} as const;

/**
 * 获取当前设备类型
 */
export const getDeviceType = (width: number): DeviceType => {
  if (width < DEVICE_BREAKPOINTS.mobile) return 'mobile';
  if (width < DEVICE_BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
};

/**
 * 检查是否为移动设备
 */
export const isMobileDevice = (width: number): boolean => {
  return width < DEVICE_BREAKPOINTS.mobile;
};

/**
 * 检查是否为平板设备
 */
export const isTabletDevice = (width: number): boolean => {
  return width >= DEVICE_BREAKPOINTS.mobile && width < DEVICE_BREAKPOINTS.tablet;
};

/**
 * 检查是否为桌面设备
 */
export const isDesktopDevice = (width: number): boolean => {
  return width >= DEVICE_BREAKPOINTS.tablet;
};

/**
 * 获取响应式值
 */
export const getResponsiveValue = <T>(
  values: {
    mobile?: T;
    tablet?: T;
    desktop?: T;
    default: T;
  },
  deviceType: DeviceType
): T => {
  return values[deviceType] ?? values.default;
};

/**
 * CSS类名条件工具
 */
export const responsiveClasses = {
  // 显示/隐藏
  show: {
    mobile: 'block md:hidden',
    tablet: 'hidden md:block lg:hidden',
    desktop: 'hidden lg:block',
    tabletUp: 'hidden md:block',
    desktopOnly: 'hidden lg:block',
  },
  hide: {
    mobile: 'hidden md:block',
    tablet: 'block md:hidden lg:block',
    desktop: 'block lg:hidden',
    tabletUp: 'block md:hidden',
    desktopOnly: 'block lg:hidden',
  },
  // 布局方向
  flex: {
    colToRow: 'flex flex-col md:flex-row',
    rowToCol: 'flex flex-row md:flex-col',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    responsive: 'flex flex-col md:flex-row items-center justify-between',
  },
  // 网格
  grid: {
    responsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    auto: 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
  },
  // 文字对齐
  text: {
    responsive: 'text-center md:text-left',
    centerToLeft: 'text-center md:text-left',
    leftToCenter: 'text-left md:text-center',
  },
} as const; 