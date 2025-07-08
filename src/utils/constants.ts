/**
 * 布局和响应式设计常量
 */

// 媒体查询断点
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;

// 设备类型断点
export const DEVICE_BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

// 布局尺寸常量
export const LAYOUT_SIZES = {
  header: {
    mobile: 56,
    desktop: 64,
  },
  sidebar: {
    mobile: 280,
    desktop: 320,
  },
  footer: {
    mobile: 120,
    desktop: 80,
  },
} as const;

// Z-index 层级
export const Z_INDEX = {
  dropdown: 1000,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  navbar: 1030,
  sidebar: 1020,
  backdrop: 1040,
} as const;

// 动画时长
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// 容器最大宽度
export const CONTAINER_MAX_WIDTH = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
} as const;

// 间距系统
export const SPACING = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem',  // 64px
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
export type DeviceType = 'mobile' | 'tablet' | 'desktop';
export type SpacingKey = keyof typeof SPACING; 