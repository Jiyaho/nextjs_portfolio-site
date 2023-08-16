'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeSwitcher({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleClick = (themeMode: string) => () => {
    setTheme(themeMode);
  };

  useEffect(() => {
    setMounted(true);
  }, [currentTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={className}>
      {currentTheme === 'dark' ? (
        <BsFillMoonFill onClick={handleClick('light')} />
      ) : (
        <BsFillSunFill onClick={handleClick('dark')} />
      )}
    </div>
  );
}
export default ThemeSwitcher;
