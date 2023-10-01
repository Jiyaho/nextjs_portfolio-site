import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/atoms/Footer';
import Header from '@/components/organisms/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Background from '@/components/atoms/Background';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Janet and planet',
  description: 'Janet | Portfolio Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="dark" suppressHydrationWarning>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className="flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <Background />
          <main className="min-h-screen ">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
