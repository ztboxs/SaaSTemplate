import type { LucideProps } from 'lucide-react';

// 图标尺寸预设
export const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4', 
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
} as const;

export type IconSize = keyof typeof iconSizes;

// 基础图标组件接口
export interface IconProps extends Omit<LucideProps, 'size'> {
  size?: IconSize | number;
  className?: string;
} 