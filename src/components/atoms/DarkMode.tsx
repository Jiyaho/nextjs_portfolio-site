'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function DarkMode() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const handleClick = (screenMode: string) => () => {
    setTheme(screenMode);
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

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
export default DarkMode;
