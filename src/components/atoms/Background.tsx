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
    <div className="fixed -z-50 w-full h-full">
      <Image
        src={isDarkMode ? '/bg/dark1.jpg' : '/bg/light2.jpg' || '/bg/light2.jpg'}
        alt="bg_img"
        fill
        sizes="100vw, 50vw"
        className="-z-100"
      />
    </div>
  );
}
export default Background;