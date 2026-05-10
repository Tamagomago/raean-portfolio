import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import '@/app/globals.css';
import Navbar from './components/layout/navbar';

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
  title: 'Raean',
  description:
    "Hello, I'm Raean Chrissean R. Tamayo, a third-year Computer Science student. Born on March 18, 2005, in Iloilo City, Philippines, I am an aspiring full-stack developer passionate about creating beautiful, functional, and user-friendly web applications.",
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
