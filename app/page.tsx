import React from 'react';
import Hero from '@/app/components/home/hero';
import About from '@/app/components/home/about';

export default function Home() {
  return (
    <main
      className={
        'bg-dark relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden text-white'
      }
    >
      <Hero />
      <About />
    </main>
  );
}
