'use client';

import { useLanguage } from '@/lib/i18n/context';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage, isSpanish } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
      className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#F97316] hover:bg-orange-50"
    >
      <Globe className="w-4 h-4" />
      <span>{isSpanish ? 'EN' : 'ES'}</span>
    </Button>
  );
}

export function LanguageSwitcherMobile() {
  const { language, setLanguage, isSpanish } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(isSpanish ? 'en' : 'es')}
      className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-[#F97316] rounded-lg min-h-[44px] w-full"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{isSpanish ? 'English' : 'Español'}</span>
    </button>
  );
}
