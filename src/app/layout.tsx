import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/organisms/Header';
import Providers from '@/providers/index';
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Janet and planet',
  description: 'Janet | Portfolio Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          {/* <main className="bg-white dark: bg-black">{children}</main> */}
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
