import React from 'react';
import { motion } from 'framer-motion';
import { 
  useIsMobile, 
  useIsTablet, 
  useReducedMotion 
} from '@/hooks/useMediaQuery';
import { useViewport } from '@/hooks/useViewport';
import { 
  containerVariants,
  gridVariants,
  textVariants,
  buttonVariants,
  cardVariants,
  responsive,
  cn 
} from '@/utils/responsive';

interface ResponsiveDemoProps {
  className?: string;
}

export const ResponsiveDemo: React.FC<ResponsiveDemoProps> = ({ className }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const { width, height, orientation } = useViewport();
  const prefersReducedMotion = useReducedMotion();

  // 示例数据
  const cards = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `卡片 ${i + 1}`,
    description: '这是一个响应式卡片组件的示例，在不同屏幕尺寸下会有不同的布局。',
    image: `/images/card-${i + 1}.jpg`,
  }));

  return (
    <div className={cn(containerVariants({ size: 'xl' }), className)}>
      {/* 标题区域 */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        className={responsive.flex.center + ' mb-8'}
      >
        <h1 className={textVariants({ size: '3xl', weight: 'bold', align: 'center' })}>
          响应式布局演示
        </h1>
      </motion.div>

      {/* 设备信息面板 */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.1 }}
        className={cn(
          cardVariants({ padding: 'md', hover: 'shadow' }),
          'mb-8 bg-gradient-to-r from-blue-50 to-indigo-50'
        )}
      >
        <h2 className={textVariants({ size: 'lg', weight: 'semibold' })}>
          当前设备信息
        </h2>
        <div className={gridVariants({ cols: 2, gap: 'sm' }) + ' mt-4'}>
          <div>
            <p className={textVariants({ size: 'sm', weight: 'medium' })}>
              屏幕尺寸: {width} × {height}
            </p>
            <p className={textVariants({ size: 'sm', weight: 'medium' })}>
              方向: {orientation === 'portrait' ? '竖屏' : '横屏'}
            </p>
          </div>
          <div>
            <p className={textVariants({ size: 'sm', weight: 'medium' })}>
              设备类型: {isMobile ? '手机' : isTablet ? '平板' : '桌面'}
            </p>
            <p className={textVariants({ size: 'sm', weight: 'medium' })}>
              减少动画: {prefersReducedMotion ? '是' : '否'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 响应式网格布局 */}
      <section className="mb-12">
        <h2 className={textVariants({ size: 'xl', weight: 'semibold' }) + ' mb-6'}>
          响应式网格布局
        </h2>
        <div className={gridVariants({ cols: 'auto', gap: 'md' })}>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.6, 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className={cardVariants({ hover: 'both' })}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-md mb-4"></div>
              <h3 className={textVariants({ size: 'base', weight: 'semibold' })}>
                {card.title}
              </h3>
              <p className={textVariants({ size: 'sm' }) + ' text-gray-600 mt-2'}>
                {card.description}
              </p>
              <button 
                className={buttonVariants({ 
                  size: 'sm', 
                  variant: 'outline',
                  responsive: true 
                }) + ' mt-4'}
              >
                了解更多
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 响应式文本演示 */}
      <section className="mb-12">
        <h2 className={textVariants({ size: 'xl', weight: 'semibold' }) + ' mb-6'}>
          响应式文字大小
        </h2>
        <div className="space-y-4">
          <p className={textVariants({ size: 'xs' })}>
            超小号文字 (xs) - 在小屏设备上更小，大屏设备上稍大
          </p>
          <p className={textVariants({ size: 'sm' })}>
            小号文字 (sm) - 根据屏幕尺寸自动调整
          </p>
          <p className={textVariants({ size: 'base' })}>
            基础文字 (base) - 默认大小，响应式调整
          </p>
          <p className={textVariants({ size: 'lg' })}>
            大号文字 (lg) - 在移动端适中，桌面端更大
          </p>
          <p className={textVariants({ size: 'xl' })}>
            超大号文字 (xl) - 跨设备的良好可读性
          </p>
        </div>
      </section>

      {/* 响应式按钮演示 */}
      <section className="mb-12">
        <h2 className={textVariants({ size: 'xl', weight: 'semibold' }) + ' mb-6'}>
          响应式按钮
        </h2>
        <div className={responsive.flex.colToRow + ' gap-4 flex-wrap'}>
          <button className={buttonVariants({ size: 'xs' })}>
            超小按钮
          </button>
          <button className={buttonVariants({ size: 'sm', variant: 'secondary' })}>
            小按钮
          </button>
          <button className={buttonVariants({ size: 'default', variant: 'outline' })}>
            默认按钮
          </button>
          <button className={buttonVariants({ size: 'lg', variant: 'destructive' })}>
            大按钮
          </button>
          <button className={buttonVariants({ size: 'xl' })}>
            超大按钮
          </button>
        </div>
        
        <div className="mt-6">
          <button className={buttonVariants({ responsive: true, size: 'lg' })}>
            响应式全宽按钮（移动端全宽，桌面端自适应）
          </button>
        </div>
      </section>

      {/* 条件渲染演示 */}
      <section className="mb-12">
        <h2 className={textVariants({ size: 'xl', weight: 'semibold' }) + ' mb-6'}>
          条件渲染演示
        </h2>
        
        {/* 移动端显示 */}
        <div className={responsive.show.mobile}>
          <div className={cardVariants({ padding: 'md' }) + ' bg-green-50'}>
            <h3 className={textVariants({ size: 'lg', weight: 'semibold' })}>
              移动端专用内容
            </h3>
            <p className={textVariants({ size: 'sm' })}>
              这个内容只在移动设备上显示，为小屏幕优化。
            </p>
          </div>
        </div>

        {/* 平板端显示 */}
        <div className={responsive.show.tablet}>
          <div className={cardVariants({ padding: 'md' }) + ' bg-yellow-50'}>
            <h3 className={textVariants({ size: 'lg', weight: 'semibold' })}>
              平板端专用内容
            </h3>
            <p className={textVariants({ size: 'sm' })}>
              这个内容只在平板设备上显示，为中等屏幕优化。
            </p>
          </div>
        </div>

        {/* 桌面端显示 */}
        <div className={responsive.show.desktop}>
          <div className={cardVariants({ padding: 'md' }) + ' bg-blue-50'}>
            <h3 className={textVariants({ size: 'lg', weight: 'semibold' })}>
              桌面端专用内容
            </h3>
            <p className={textVariants({ size: 'sm' })}>
              这个内容只在桌面设备上显示，为大屏幕优化。
            </p>
          </div>
        </div>
      </section>

      {/* 容器查询演示 */}
      <section className="mb-12">
        <h2 className={textVariants({ size: 'xl', weight: 'semibold' }) + ' mb-6'}>
          容器查询演示
        </h2>
        <div className="@container">
          <div className={cn(
            'border-2 border-dashed border-gray-300 p-4 rounded-lg',
            '@xs:border-green-300 @sm:border-blue-300 @md:border-purple-300 @lg:border-red-300'
          )}>
            <h3 className="@xs:text-sm @sm:text-base @md:text-lg @lg:text-xl @xl:text-2xl font-semibold">
              容器查询响应式标题
            </h3>
            <p className="@xs:text-xs @sm:text-sm @md:text-base @lg:text-lg mt-2">
              这个内容根据容器大小而不是视口大小来调整样式。
              边框颜色和文字大小都会根据容器的尺寸变化。
            </p>
            <div className="@md:flex @md:gap-4 @lg:gap-6 mt-4">
              <div className="@md:w-1/2">
                <h4 className="@sm:text-sm @md:text-base font-medium">左侧内容</h4>
                <p className="@xs:text-xs @sm:text-sm">
                  在容器足够大时，这里会变成两列布局。
                </p>
              </div>
              <div className="@md:w-1/2 @xs:mt-4 @md:mt-0">
                <h4 className="@sm:text-sm @md:text-base font-medium">右侧内容</h4>
                <p className="@xs:text-xs @sm:text-sm">
                  容器查询让组件更加灵活和可重用。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 