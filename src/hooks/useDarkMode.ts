import { useEffect } from 'react';

import { usePrefersDarkMode } from '@/hooks/usePrefersDarkMode';
import { useSafeLocalStorage } from '@/hooks/useSafeLocalStorage';

export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage(
    'darkMode',
    prefersDarkMode,
  );

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (window === undefined) return;

    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  });

  return [enabled, setIsEnabled] as const;
};
