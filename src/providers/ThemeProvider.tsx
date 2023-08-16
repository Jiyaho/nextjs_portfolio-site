'use client';
// import { ThemeProvider } from 'next-themes';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

// export function Provider({ children }: { children: React.ReactNode }) {
//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// }

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
