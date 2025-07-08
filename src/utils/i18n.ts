import intl from 'react-intl-universal';
import { useEffect, useState } from 'react';

// 支持的语言
export const SUPPORTED_LOCALES = ['en', 'zh-CN'];
export const DEFAULT_LOCALE = 'en';

// 获取当前语言
export const getCurrentLocale = (): string => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
    return savedLocale;
  }
  
  // 浏览器语言
  const browserLang = navigator.language;
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  }
  
  return DEFAULT_LOCALE;
};

// 初始化国际化设置
export const initI18n = async (): Promise<boolean> => {
  const currentLocale = getCurrentLocale();
  
  try {
    const locales = {
      [currentLocale]: await import(`../locales/${currentLocale}/common.json`),
    };
    
    await intl.init({
      currentLocale,
      locales,
      fallbackLocale: DEFAULT_LOCALE,
    });
    
    return true;
  } catch (error) {
    console.error('Failed to initialize internationalization:', error);
    return false;
  }
};

// 切换语言
export const changeLocale = async (locale: string): Promise<boolean> => {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    return false;
  }
  
  try {
    const locales = {
      [locale]: await import(`../locales/${locale}/common.json`),
    };
    
    await intl.init({
      currentLocale: locale,
      locales,
      fallbackLocale: DEFAULT_LOCALE,
    });
    
    localStorage.setItem('locale', locale);
    return true;
  } catch (error) {
    console.error('Failed to change locale:', error);
    return false;
  }
};

// React Hook 用于初始化国际化
export const useI18n = () => {
  const [loading, setLoading] = useState(true);
  const [currentLocale, setCurrentLocale] = useState(getCurrentLocale());
  
  useEffect(() => {
    const initialize = async () => {
      await initI18n();
      setLoading(false);
    };
    
    initialize();
  }, []);
  
  const switchLocale = async (locale: string) => {
    if (await changeLocale(locale)) {
      setCurrentLocale(locale);
      return true;
    }
    return false;
  };
  
  return {
    loading,
    currentLocale,
    switchLocale,
    t: (key: string, options?: Record<string, string | number>) => loading ? key : intl.get(key, options),
    isZh: currentLocale === 'zh-CN',
    isEn: currentLocale === 'en',
  };
}; 