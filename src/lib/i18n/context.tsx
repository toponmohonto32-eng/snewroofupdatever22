'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isSpanish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Get initial language from localStorage if available
function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      return savedLang;
    }
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, []);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || key;
  }, [language]);

  const isSpanish = language === 'es';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isSpanish }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
