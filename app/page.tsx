import localFont from 'next/font/local';
import React from 'react';
import Hero from '@/app/components/home/hero';

const rainyhearts = localFont({
  src: '../public/fonts/rainyhearts.ttf',
});

export default function Home() {
  return (
    <main
      className={
        'bg-dark relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden text-white'
      }
    >
      <Hero />
    </main>
  );
}
