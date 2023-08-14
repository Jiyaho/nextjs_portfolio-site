'use client';

import DarkMode from '../atoms/DarkMode';
import Navigation from '../molecules/Navigation';
import { useTheme } from 'next-themes';

function Header() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header className={currentTheme === 'dark' ? 'top-0 sticky bg-[rgb(0,0,0,0.9)]' : 'top-0 sticky bg-[rgb(255,255,255,0.9)]'}>
      <nav className="max-w-6xl mx-auto px-4 flex justify-between p-3">
        <Navigation />
        <DarkMode />
      </nav>
    </header>
  );
}
export default Header;
