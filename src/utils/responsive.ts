import { type ClassValue, clsx } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';

// 合并类名的工具函数
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// 响应式容器变体
export const containerVariants = cva(
  'mx-auto px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        sm: 'max-w-2xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
        full: 'max-w-full',
        screen: 'max-w-screen-2xl',
      },
      padding: {
        none: 'px-0',
        sm: 'px-4 sm:px-6',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-12',
        xl: 'px-8 sm:px-12 lg:px-16',
      },
    },
    defaultVariants: {
      size: 'lg',
      padding: 'md',
    },
  }
);

// 响应式网格变体
export const gridVariants = cva(
  'grid gap-4',
  {
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
        6: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
        auto: 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
        autoSm: 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]',
        autoLg: 'grid-cols-[repeat(auto-fit,minmax(350px,1fr))]',
      },
      gap: {
        none: 'gap-0',
        sm: 'gap-2 sm:gap-4',
        md: 'gap-4 sm:gap-6',
        lg: 'gap-6 sm:gap-8',
        xl: 'gap-8 sm:gap-12',
      },
    },
    defaultVariants: {
      cols: 3,
      gap: 'md',
    },
  }
);

// 响应式文本变体
export const textVariants = cva(
  '',
  {
    variants: {
      size: {
        xs: 'text-xs sm:text-sm',
        sm: 'text-sm sm:text-base',
        base: 'text-base sm:text-lg',
        lg: 'text-lg sm:text-xl',
        xl: 'text-xl sm:text-2xl',
        '2xl': 'text-2xl sm:text-3xl',
        '3xl': 'text-3xl sm:text-4xl lg:text-5xl',
        '4xl': 'text-4xl sm:text-5xl lg:text-6xl',
        '5xl': 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
        responsive: 'text-left sm:text-center lg:text-left',
      },
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      align: 'left',
    },
  }
);

// 响应式按钮变体
export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        xs: 'h-7 px-2 text-xs sm:h-8 sm:px-3',
        sm: 'h-8 px-3 text-sm sm:h-9 sm:px-4',
        default: 'h-9 px-4 text-sm sm:h-10 sm:px-6 sm:text-base',
        lg: 'h-10 px-6 text-base sm:h-11 sm:px-8 sm:text-lg',
        xl: 'h-12 px-8 text-lg sm:h-14 sm:px-10 sm:text-xl',
        icon: 'h-9 w-9 sm:h-10 sm:w-10',
      },
      responsive: {
        true: 'w-full sm:w-auto',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      responsive: false,
    },
  }
);

// 响应式卡片变体
export const cardVariants = cva(
  'rounded-lg border bg-card text-card-foreground shadow-sm',
  {
    variants: {
      padding: {
        none: 'p-0',
        sm: 'p-3 sm:p-4',
        md: 'p-4 sm:p-6',
        lg: 'p-6 sm:p-8',
        xl: 'p-8 sm:p-10',
      },
      hover: {
        none: '',
        lift: 'transition-transform hover:scale-105',
        shadow: 'transition-shadow hover:shadow-md',
        both: 'transition-all hover:scale-105 hover:shadow-md',
      },
    },
    defaultVariants: {
      padding: 'md',
      hover: 'none',
    },
  }
);

// 响应式间距变体
export const spacingVariants = cva(
  '',
  {
    variants: {
      margin: {
        none: 'm-0',
        xs: 'm-1 sm:m-2',
        sm: 'm-2 sm:m-4',
        md: 'm-4 sm:m-6',
        lg: 'm-6 sm:m-8',
        xl: 'm-8 sm:m-12',
      },
      marginY: {
        none: 'my-0',
        xs: 'my-1 sm:my-2',
        sm: 'my-2 sm:my-4',
        md: 'my-4 sm:my-6',
        lg: 'my-6 sm:my-8',
        xl: 'my-8 sm:my-12',
      },
      marginX: {
        none: 'mx-0',
        xs: 'mx-1 sm:mx-2',
        sm: 'mx-2 sm:mx-4',
        md: 'mx-4 sm:mx-6',
        lg: 'mx-6 sm:mx-8',
        xl: 'mx-8 sm:mx-12',
        auto: 'mx-auto',
      },
      padding: {
        none: 'p-0',
        xs: 'p-1 sm:p-2',
        sm: 'p-2 sm:p-4',
        md: 'p-4 sm:p-6',
        lg: 'p-6 sm:p-8',
        xl: 'p-8 sm:p-12',
      },
      paddingY: {
        none: 'py-0',
        xs: 'py-1 sm:py-2',
        sm: 'py-2 sm:py-4',
        md: 'py-4 sm:py-6',
        lg: 'py-6 sm:py-8',
        xl: 'py-8 sm:py-12',
      },
      paddingX: {
        none: 'px-0',
        xs: 'px-1 sm:px-2',
        sm: 'px-2 sm:px-4',
        md: 'px-4 sm:px-6',
        lg: 'px-6 sm:px-8',
        xl: 'px-8 sm:px-12',
      },
    },
    defaultVariants: {
      margin: 'none',
      marginY: 'none',
      marginX: 'none',
      padding: 'none',
      paddingY: 'none',
      paddingX: 'none',
    },
  }
);

// 响应式布局工具函数
export const responsive = {
  // 获取响应式类名
  getClasses: (
    base: string,
    variants: Record<string, string | undefined>
  ) => {
    return cn(base, variants);
  },

  // 响应式显示/隐藏
  show: {
    mobile: 'block sm:hidden',
    tablet: 'hidden sm:block lg:hidden',
    desktop: 'hidden lg:block',
    mobileTablet: 'block lg:hidden',
    tabletDesktop: 'hidden sm:block',
  },

  // 响应式 Flexbox
  flex: {
    col: 'flex flex-col',
    row: 'flex flex-row',
    colToRow: 'flex flex-col sm:flex-row',
    rowToCol: 'flex flex-row sm:flex-col',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    around: 'flex items-center justify-around',
    start: 'flex items-start justify-start',
    end: 'flex items-end justify-end',
  },

  // 响应式宽度
  width: {
    full: 'w-full',
    auto: 'w-auto',
    fit: 'w-fit',
    half: 'w-full sm:w-1/2',
    third: 'w-full sm:w-1/3',
    quarter: 'w-full sm:w-1/4',
    twoThirds: 'w-full sm:w-2/3',
    threeQuarters: 'w-full sm:w-3/4',
  },

  // 响应式高度
  height: {
    auto: 'h-auto',
    full: 'h-full',
    screen: 'h-screen',
    halfScreen: 'h-[50vh] sm:h-[60vh] lg:h-[70vh]',
    threeQuarterScreen: 'h-[75vh] sm:h-[80vh] lg:h-[85vh]',
  },
};

// 类型导出
export type ContainerVariants = VariantProps<typeof containerVariants>;
export type GridVariants = VariantProps<typeof gridVariants>;
export type TextVariants = VariantProps<typeof textVariants>;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type CardVariants = VariantProps<typeof cardVariants>;
export type SpacingVariants = VariantProps<typeof spacingVariants>; 