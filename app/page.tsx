'use client';

import React from 'react';
import Hero from '@/app/components/home/hero';
import About from '@/app/components/home/about';
import Tools from './components/home/tools';
import Works from './components/home/works';
import Experience from '@/app/components/home/experience';
import Contact from './components/home/contact';
import PageLayout from './components/layout/page-layout';

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Tools />
      <Works />
      <Experience />
      <Contact />
    </PageLayout>
  );
}
