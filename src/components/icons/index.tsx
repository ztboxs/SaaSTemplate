import { forwardRef } from 'react';
import { 
  Home,
  Info,
  Users,
  HelpCircle,
  LogIn,
  Search,
  Settings,
  Bell,
  User,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Star,
  Heart,
  Share,
  Download,
  Upload,
  Edit,
  Trash,
  Plus,
  Minus,
  Check,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Sun,
  Moon,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/utils/responsive';
import { iconSizes, type IconProps } from './types';

// 通用图标组件
export const Icon = forwardRef<SVGSVGElement, IconProps & { icon: LucideIcon }>(
  ({ icon: IconComponent, size = 'md', className, ...props }, ref) => {
    const sizeClass = typeof size === 'string' ? iconSizes[size] : undefined;
    const sizeValue = typeof size === 'number' ? size : undefined;
    
    return (
      <IconComponent
        ref={ref}
        size={sizeValue}
        className={cn(sizeClass, className)}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

// 导航相关图标
export const HomeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Home} ref={ref} {...props} />
);
HomeIcon.displayName = 'HomeIcon';

export const AboutIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Info} ref={ref} {...props} />
);
AboutIcon.displayName = 'AboutIcon';

export const UsersIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Users} ref={ref} {...props} />
);
UsersIcon.displayName = 'UsersIcon';

export const FAQIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={HelpCircle} ref={ref} {...props} />
);
FAQIcon.displayName = 'FAQIcon';

export const LoginIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={LogIn} ref={ref} {...props} />
);
LoginIcon.displayName = 'LoginIcon';

export const MenuIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Menu} ref={ref} {...props} />
);
MenuIcon.displayName = 'MenuIcon';

export const CloseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={X} ref={ref} {...props} />
);
CloseIcon.displayName = 'CloseIcon';

// 主题切换图标
export const SunIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Sun} ref={ref} {...props} />
);
SunIcon.displayName = 'SunIcon';

export const MoonIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Moon} ref={ref} {...props} />
);
MoonIcon.displayName = 'MoonIcon';

// 语言切换图标
export const GlobeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Globe} ref={ref} {...props} />
);
GlobeIcon.displayName = 'GlobeIcon';

// 界面操作图标
export const SearchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Search} ref={ref} {...props} />
);
SearchIcon.displayName = 'SearchIcon';

export const SettingsIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Settings} ref={ref} {...props} />
);
SettingsIcon.displayName = 'SettingsIcon';

export const BellIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Bell} ref={ref} {...props} />
);
BellIcon.displayName = 'BellIcon';

export const UserIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={User} ref={ref} {...props} />
);
UserIcon.displayName = 'UserIcon';

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ChevronDown} ref={ref} {...props} />
);
ChevronDownIcon.displayName = 'ChevronDownIcon';

export const ChevronUpIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ChevronUp} ref={ref} {...props} />
);
ChevronUpIcon.displayName = 'ChevronUpIcon';

export const ChevronLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ChevronLeft} ref={ref} {...props} />
);
ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export const ChevronRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ChevronRight} ref={ref} {...props} />
);
ChevronRightIcon.displayName = 'ChevronRightIcon';

export const EditIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Edit} ref={ref} {...props} />
);
EditIcon.displayName = 'EditIcon';

export const TrashIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Trash} ref={ref} {...props} />
);
TrashIcon.displayName = 'TrashIcon';

export const PlusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Plus} ref={ref} {...props} />
);
PlusIcon.displayName = 'PlusIcon';

export const MinusIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Minus} ref={ref} {...props} />
);
MinusIcon.displayName = 'MinusIcon';

// 状态图标
export const CheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Check} ref={ref} {...props} />
);
CheckIcon.displayName = 'CheckIcon';

export const AlertIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={AlertCircle} ref={ref} {...props} />
);
AlertIcon.displayName = 'AlertIcon';

export const WarningIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={AlertTriangle} ref={ref} {...props} />
);
WarningIcon.displayName = 'WarningIcon';

export const SuccessIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={CheckCircle} ref={ref} {...props} />
);
SuccessIcon.displayName = 'SuccessIcon';

export const ErrorIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={XCircle} ref={ref} {...props} />
);
ErrorIcon.displayName = 'ErrorIcon';

// 箭头图标
export const ArrowLeftIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ArrowLeft} ref={ref} {...props} />
);
ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export const ArrowRightIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ArrowRight} ref={ref} {...props} />
);
ArrowRightIcon.displayName = 'ArrowRightIcon';

export const ArrowUpIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ArrowUp} ref={ref} {...props} />
);
ArrowUpIcon.displayName = 'ArrowUpIcon';

export const ArrowDownIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ArrowDown} ref={ref} {...props} />
);
ArrowDownIcon.displayName = 'ArrowDownIcon';

// 联系方式图标
export const MailIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Mail} ref={ref} {...props} />
);
MailIcon.displayName = 'MailIcon';

export const PhoneIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Phone} ref={ref} {...props} />
);
PhoneIcon.displayName = 'PhoneIcon';

export const LocationIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={MapPin} ref={ref} {...props} />
);
LocationIcon.displayName = 'LocationIcon';

export const CalendarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Calendar} ref={ref} {...props} />
);
CalendarIcon.displayName = 'CalendarIcon';

export const ClockIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Clock} ref={ref} {...props} />
);
ClockIcon.displayName = 'ClockIcon';

// 社交媒体图标
export const GithubIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Github} ref={ref} {...props} />
);
GithubIcon.displayName = 'GithubIcon';

export const TwitterIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Twitter} ref={ref} {...props} />
);
TwitterIcon.displayName = 'TwitterIcon';

export const FacebookIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Facebook} ref={ref} {...props} />
);
FacebookIcon.displayName = 'FacebookIcon';

export const InstagramIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Instagram} ref={ref} {...props} />
);
InstagramIcon.displayName = 'InstagramIcon';

export const LinkedinIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Linkedin} ref={ref} {...props} />
);
LinkedinIcon.displayName = 'LinkedinIcon';

export const YoutubeIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Youtube} ref={ref} {...props} />
);
YoutubeIcon.displayName = 'YoutubeIcon';

// 交互图标
export const StarIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Star} ref={ref} {...props} />
);
StarIcon.displayName = 'StarIcon';

export const HeartIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Heart} ref={ref} {...props} />
);
HeartIcon.displayName = 'HeartIcon';

export const ShareIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Share} ref={ref} {...props} />
);
ShareIcon.displayName = 'ShareIcon';

export const DownloadIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Download} ref={ref} {...props} />
);
DownloadIcon.displayName = 'DownloadIcon';

export const UploadIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={Upload} ref={ref} {...props} />
);
UploadIcon.displayName = 'UploadIcon';

export const ExternalLinkIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => 
  <Icon icon={ExternalLink} ref={ref} {...props} />
);
ExternalLinkIcon.displayName = 'ExternalLinkIcon'; 