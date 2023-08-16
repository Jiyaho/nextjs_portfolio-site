'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function ThemeModeState() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDarkMode(currentTheme === 'dark' ? true : false);
  }, [currentTheme]);

  return isDarkMode ? true : false;
}
export default ThemeModeState;
