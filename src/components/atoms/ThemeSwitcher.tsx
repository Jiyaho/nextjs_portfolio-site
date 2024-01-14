'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

function ThemeSwitcher({ className }: { className: string }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleClick = (themeMode: string) => () => {
    setTheme(themeMode);
  };

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
