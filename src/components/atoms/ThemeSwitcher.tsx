'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
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
    <div className="bg-darkModeBg cursor-pointer rounded-[50%] p-5">
      {currentTheme === 'dark' ? (
        <BsFillMoonFill onClick={handleClick('light')} />
      ) : (
        <BsFillSunFill onClick={handleClick('dark')} />
      )}
    </div>
  );
}
export default ThemeSwitcher;
