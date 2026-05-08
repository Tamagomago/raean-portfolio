import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import '@/app/globals.css';
import Navbar from './components/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const rainyhearts = localFont({
  src: '../public/fonts/rainyhearts.ttf',
  variable: '--font-rainyhearts',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rainyhearts.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
