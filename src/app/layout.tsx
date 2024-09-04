'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayoutHeader from '@/components/organism/layout-header';
import LayoutFooter from '@/components/organism/layout-footer';
import { FavoritesProvider } from '@/FavoritesContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <FavoritesProvider>
        <body className={`${inter.className} flex min-h-screen w-full flex-col`}>
          <MainLayoutHeader />
          <main className='flex-grow bg-gray-100 p-8'>{children}</main>
          <LayoutFooter />
        </body>
      </FavoritesProvider>
    </html>
  );
}
