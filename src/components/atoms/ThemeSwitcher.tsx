'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeSwitcher({ className }: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // if (typeof window !== 'undefined') {
  //   const newTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
  //   localStorage.theme = newTheme;
  //   document.body.dataset.theme = newTheme;
  // }

  const handleClick = (themeMode: string) => () => {
    setTheme(themeMode);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={className}>
      {theme === 'dark' ? (
        <BsFillMoonFill onClick={handleClick('light')} />
      ) : (
        <BsFillSunFill onClick={handleClick('dark')} />
      )}
    </div>
  );
}
export default ThemeSwitcher;
