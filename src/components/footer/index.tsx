import React from 'react';
import { Link } from '@tanstack/react-router';
import { useI18n } from '@/utils/i18n';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LAYOUT_SIZES } from '@/utils/constants';
import { cn } from '@/utils/responsive';
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
        'mt-auto border-t transition-all duration-300',
        'bg-[var(--header-bg)] border-[var(--header-border)]',
        'text-[var(--text-primary)]',
        className
      )}
      style={{ 
        minHeight: isMobile ? LAYOUT_SIZES.footer.mobile : LAYOUT_SIZES.footer.desktop 
      }}
    >
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* 主要内容区域 */}
        <div className={cn(
          'grid gap-8 mb-12',
          isMobile ? 'grid-cols-2' : 'grid-cols-4 gap-12'
        )}>
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className={cn(
                'text-base font-semibold mb-4',
                'text-[var(--text-primary)]'
              )}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'flex items-center gap-2 text-sm font-medium',
                          'text-[var(--text-secondary)] hover:text-[var(--primary)]',
                          'transition-all duration-200 hover:translate-x-1',
                          'group'
                        )}
                      >
                        {link.icon && (
                          <span className="group-hover:scale-110 transition-transform duration-200">
                            {link.icon}
                          </span>
                        )}
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className={cn(
                          'flex items-center gap-2 text-sm font-medium',
                          'text-[var(--text-secondary)] hover:text-[var(--primary)]',
                          'transition-all duration-200 hover:translate-x-1',
                          'group'
                        )}
                      >
                        {link.icon && (
                          <span className="group-hover:scale-110 transition-transform duration-200">
                            {link.icon}
                          </span>
                        )}
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-[var(--border)] pt-8">
          {/* 底部信息 */}
          <div className={cn(
            'flex flex-col md:flex-row items-center justify-between gap-6'
          )}>
            {/* 版权信息 */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                © {currentYear} {t('app.title')}. 保留所有权利。
              </p>
            </div>

            {/* 额外链接 */}
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className={cn(
                  'text-sm font-medium',
                  'text-[var(--text-secondary)] hover:text-[var(--primary)]',
                  'transition-colors duration-200'
                )}
              >
                隐私政策
              </a>
              <span className="text-[var(--border)] text-lg">|</span>
              <a
                href="/terms"
                className={cn(
                  'text-sm font-medium',
                  'text-[var(--text-secondary)] hover:text-[var(--primary)]',
                  'transition-colors duration-200'
                )}
              >
                服务条款
              </a>
            </div>
          </div>

          {/* 移动端额外信息 */}
          <div className={cn(
            'md:hidden mt-6 text-center'
          )}>
            <p className={cn(
              'text-xs text-[var(--text-secondary)]',
              'bg-[var(--background)] px-4 py-2 rounded-lg inline-block',
              'border border-[var(--border)]'
            )}>
              技术支持：React + TypeScript + TailwindCSS
            </p>
          </div>

          {/* 桌面端备案信息 */}
          <div className={cn(
            'hidden md:block mt-6 text-center'
          )}>
            <div className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
              'bg-[var(--background)] border border-[var(--border)]'
            )}>
              <p className="text-xs text-[var(--text-secondary)]">
                ICP备案号：京ICP备12345678号-1
              </p>
              <span className="text-[var(--border)]">•</span>
              <p className="text-xs text-[var(--text-secondary)]">
                网安备案号：11010802012345
              </p>
              <span className="text-[var(--border)]">•</span>
              <p className="text-xs text-[var(--text-secondary)]">
                技术支持：React + TypeScript + TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 