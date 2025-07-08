import React from 'react';
import { Link } from '@tanstack/react-router';
import { useI18n } from '@/utils/i18n';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { responsiveClasses } from '@/utils/mediaQueries';
import { LAYOUT_SIZES } from '@/utils/constants';
import { cn, gridVariants, textVariants } from '@/utils/responsive';
import { TwitterIcon, GithubIcon, LinkedinIcon, ExternalLinkIcon } from '@/components/icons';

interface FooterProps {
  className?: string;
}

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    to: string;
    external?: boolean;
    icon?: React.ReactNode;
  }>;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const { t } = useI18n();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const footerSections: FooterSection[] = [
    {
      title: '产品',
      links: [
        { label: '首页', to: '/' },
        { label: '关于我们', to: '/about' },
        { label: '落地页', to: '/landing' },
        { label: 'FAQ', to: '/faq' },
      ],
    },
    {
      title: '支持',
      links: [
        { label: '帮助中心', to: '/help' },
        { label: '联系我们', to: '/contact' },
        { label: '意见反馈', to: '/feedback' },
        { label: '状态页', to: '/status', external: true },
      ],
    },
    {
      title: '法律',
      links: [
        { label: '隐私政策', to: '/privacy' },
        { label: '服务条款', to: '/terms' },
        { label: 'Cookie 政策', to: '/cookies' },
        { label: '许可协议', to: '/license' },
      ],
    },
    {
      title: '社交媒体',
      links: [
        { label: 'Twitter', to: 'https://twitter.com', external: true, icon: <TwitterIcon size="xs" /> },
        { label: 'GitHub', to: 'https://github.com', external: true, icon: <GithubIcon size="xs" /> },
        { label: 'LinkedIn', to: 'https://linkedin.com', external: true, icon: <LinkedinIcon size="xs" /> },
        { label: '微信公众号', to: '/wechat', icon: <ExternalLinkIcon size="xs" /> },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={cn(
        'bg-slate-800 text-white border-t border-slate-700',
        'mt-auto',
        className
      )}
      style={{ 
        minHeight: isMobile ? LAYOUT_SIZES.footer.mobile : LAYOUT_SIZES.footer.desktop 
      }}
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* 主要内容区域 */}
        <div className={cn(
          gridVariants({ 
            cols: isMobile ? 2 : 4, 
            gap: isMobile ? 'md' : 'lg' 
          }),
          'mb-8'
        )}>
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className={textVariants({ 
                size: 'base', 
                weight: 'semibold' 
              })}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          textVariants({ size: 'sm' }),
                          'text-slate-300 hover:text-white transition-colors',
                          'flex items-center gap-2'
                        )}
                      >
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className={cn(
                          textVariants({ size: 'sm' }),
                          'text-slate-300 hover:text-white transition-colors',
                          'flex items-center gap-2'
                        )}
                      >
                        {link.icon && <span>{link.icon}</span>}
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-slate-700 pt-6">
          {/* 底部信息 */}
          <div className={cn(
            responsiveClasses.flex.colToRow,
            'items-center justify-between gap-4'
          )}>
            {/* 版权信息 */}
            <div className={responsiveClasses.text.centerToLeft}>
              <p className={textVariants({ size: 'sm' })}>
                © {currentYear} {t('app.title')}. 保留所有权利。
              </p>
            </div>

                         {/* 额外链接 */}
             <div className={cn(
               responsiveClasses.flex.center,
               'gap-4'
             )}>
               <a
                 href="/privacy"
                 className={cn(
                   textVariants({ size: 'sm' }),
                   'text-slate-300 hover:text-white transition-colors'
                 )}
               >
                 隐私政策
               </a>
               <span className="text-slate-500">|</span>
               <a
                 href="/terms"
                 className={cn(
                   textVariants({ size: 'sm' }),
                   'text-slate-300 hover:text-white transition-colors'
                 )}
               >
                 服务条款
               </a>
             </div>
          </div>

          {/* 移动端额外信息 */}
          <div className={cn(
            responsiveClasses.show.mobile,
            'mt-4 text-center'
          )}>
            <p className={cn(
              textVariants({ size: 'xs' }),
              'text-slate-400'
            )}>
              技术支持：React + TypeScript + TailwindCSS
            </p>
          </div>

          {/* 桌面端备案信息 */}
          <div className={cn(
            responsiveClasses.hide.mobile,
            'mt-4 text-center'
          )}>
            <p className={cn(
              textVariants({ size: 'xs' }),
              'text-slate-400'
            )}>
              ICP备案号：京ICP备12345678号-1 | 
              网安备案号：11010802012345 | 
              技术支持：React + TypeScript + TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 