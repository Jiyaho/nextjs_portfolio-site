'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function Background() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDarkMode(currentTheme === 'dark' ? true : false);
  }, [currentTheme]);

  return (
    <div className="fixed -z-50 w-screen h-screen">
      <Image src={isDarkMode ? '/bg/dark1.jpg' : '/bg/light1.jpg'} alt="bg_img" fill className="-z-100" />
    </div>
  );
}
export default Background;
