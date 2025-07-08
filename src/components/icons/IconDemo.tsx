import React from 'react';
import { cn, textVariants } from '@/utils/responsive';
import {
  HomeIcon,
  AboutIcon,
  FAQIcon,
  LoginIcon,
  SearchIcon,
  SettingsIcon,
  BellIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  CheckIcon,
  AlertIcon,
  WarningIcon,
  SuccessIcon,
  ErrorIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
  CalendarIcon,
  ClockIcon,
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  StarIcon,
  HeartIcon,
  ShareIcon,
  DownloadIcon,
  UploadIcon,
  ExternalLinkIcon,
  EditIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from './index';

interface IconDemoSectionProps {
  title: string;
  icons: Array<{
    name: string;
    component: React.ReactNode;
  }>;
}

const IconDemoSection: React.FC<IconDemoSectionProps> = ({ title, icons }) => (
  <div className="mb-8">
    <h3 className={cn(textVariants({ size: 'lg', weight: 'semibold' }), 'mb-4')}>
      {title}
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {icons.map(({ name, component }) => (
        <div
          key={name}
          className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <div className="mb-2 text-gray-700 dark:text-gray-300">
            {component}
          </div>
          <span className={cn(textVariants({ size: 'xs' }), 'text-center text-gray-600 dark:text-gray-400')}>
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const IconDemo: React.FC = () => {
  const navigationIcons = [
    { name: 'HomeIcon', component: <HomeIcon size="lg" /> },
    { name: 'AboutIcon', component: <AboutIcon size="lg" /> },
    { name: 'FAQIcon', component: <FAQIcon size="lg" /> },
    { name: 'LoginIcon', component: <LoginIcon size="lg" /> },
    { name: 'MenuIcon', component: <MenuIcon size="lg" /> },
    { name: 'CloseIcon', component: <CloseIcon size="lg" /> },
  ];

  const uiIcons = [
    { name: 'SearchIcon', component: <SearchIcon size="lg" /> },
    { name: 'SettingsIcon', component: <SettingsIcon size="lg" /> },
    { name: 'BellIcon', component: <BellIcon size="lg" /> },
    { name: 'UserIcon', component: <UserIcon size="lg" /> },
    { name: 'EditIcon', component: <EditIcon size="lg" /> },
    { name: 'TrashIcon', component: <TrashIcon size="lg" /> },
    { name: 'PlusIcon', component: <PlusIcon size="lg" /> },
    { name: 'MinusIcon', component: <MinusIcon size="lg" /> },
  ];

  const statusIcons = [
    { name: 'CheckIcon', component: <CheckIcon size="lg" className="text-green-500" /> },
    { name: 'AlertIcon', component: <AlertIcon size="lg" className="text-blue-500" /> },
    { name: 'WarningIcon', component: <WarningIcon size="lg" className="text-yellow-500" /> },
    { name: 'SuccessIcon', component: <SuccessIcon size="lg" className="text-green-500" /> },
    { name: 'ErrorIcon', component: <ErrorIcon size="lg" className="text-red-500" /> },
  ];

  const arrowIcons = [
    { name: 'ArrowLeftIcon', component: <ArrowLeftIcon size="lg" /> },
    { name: 'ArrowRightIcon', component: <ArrowRightIcon size="lg" /> },
    { name: 'ArrowUpIcon', component: <ArrowUpIcon size="lg" /> },
    { name: 'ArrowDownIcon', component: <ArrowDownIcon size="lg" /> },
    { name: 'ChevronDownIcon', component: <ChevronDownIcon size="lg" /> },
    { name: 'ChevronUpIcon', component: <ChevronUpIcon size="lg" /> },
    { name: 'ChevronLeftIcon', component: <ChevronLeftIcon size="lg" /> },
    { name: 'ChevronRightIcon', component: <ChevronRightIcon size="lg" /> },
  ];

  const contactIcons = [
    { name: 'MailIcon', component: <MailIcon size="lg" /> },
    { name: 'PhoneIcon', component: <PhoneIcon size="lg" /> },
    { name: 'LocationIcon', component: <LocationIcon size="lg" /> },
    { name: 'CalendarIcon', component: <CalendarIcon size="lg" /> },
    { name: 'ClockIcon', component: <ClockIcon size="lg" /> },
  ];

  const socialIcons = [
    { name: 'GithubIcon', component: <GithubIcon size="lg" /> },
    { name: 'TwitterIcon', component: <TwitterIcon size="lg" /> },
    { name: 'FacebookIcon', component: <FacebookIcon size="lg" /> },
    { name: 'InstagramIcon', component: <InstagramIcon size="lg" /> },
    { name: 'LinkedinIcon', component: <LinkedinIcon size="lg" /> },
    { name: 'YoutubeIcon', component: <YoutubeIcon size="lg" /> },
  ];

  const interactionIcons = [
    { name: 'StarIcon', component: <StarIcon size="lg" className="text-yellow-500" /> },
    { name: 'HeartIcon', component: <HeartIcon size="lg" className="text-red-500" /> },
    { name: 'ShareIcon', component: <ShareIcon size="lg" /> },
    { name: 'DownloadIcon', component: <DownloadIcon size="lg" /> },
    { name: 'UploadIcon', component: <UploadIcon size="lg" /> },
    { name: 'ExternalLinkIcon', component: <ExternalLinkIcon size="lg" /> },
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900">
      <div className="mb-8">
        <h2 className={cn(textVariants({ size: '2xl', weight: 'bold' }), 'mb-4')}>
          Lucide React 图标库演示
        </h2>
        <p className={cn(textVariants({ size: 'base' }), 'text-gray-600 dark:text-gray-400')}>
          这里展示了项目中可用的所有 Lucide React 图标。每个图标都支持不同的尺寸和样式。
        </p>
      </div>

      <IconDemoSection title="导航图标" icons={navigationIcons} />
      <IconDemoSection title="界面操作图标" icons={uiIcons} />
      <IconDemoSection title="状态图标" icons={statusIcons} />
      <IconDemoSection title="箭头和方向图标" icons={arrowIcons} />
      <IconDemoSection title="联系方式图标" icons={contactIcons} />
      <IconDemoSection title="社交媒体图标" icons={socialIcons} />
      <IconDemoSection title="交互图标" icons={interactionIcons} />

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className={cn(textVariants({ size: 'lg', weight: 'semibold' }), 'mb-3')}>
          使用示例
        </h3>
        <div className="space-y-3">
          <div>
            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {'<HomeIcon size="sm" />'}
            </code>
            <span className="ml-2 text-gray-600 dark:text-gray-400">小尺寸图标</span>
          </div>
          <div>
            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {'<CheckIcon size="lg" className="text-green-500" />'}
            </code>
            <span className="ml-2 text-gray-600 dark:text-gray-400">带颜色的大尺寸图标</span>
          </div>
          <div>
            <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {'<SettingsIcon size={24} />'}
            </code>
            <span className="ml-2 text-gray-600 dark:text-gray-400">自定义像素尺寸</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 