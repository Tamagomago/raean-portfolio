'use client';

import React, { useLayoutEffect } from 'react';
import Hero from '@/app/components/home/hero';
import About from '@/app/components/home/about';
import Tools from './components/home/tools';
import PixelBlast from '@/app/components/ui/pixel-blast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Works from './components/home/works';
import Experience from '@/app/components/home/experience';
import Contact from './components/home/contact';
import Footer from './components/layout/footer';

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('#global-background', {
        scrollTrigger: {
          trigger: 'main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
        y: '20%',
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={'bg-dark relative min-h-dvh w-full overflow-x-hidden text-white'}>
      <div id="global-background" className="fixed top-[-50%] left-0 z-0 h-[200%] w-full">
        <PixelBlast
          variant="diamond"
          pixelSize={3}
          color="#575757"
          patternScale={2.5}
          patternDensity={1.3}
          pixelSizeJitter={1.15}
          enableRipples={false}
          rippleSpeed={0.01}
          rippleThickness={0.1}
          rippleIntensityScale={0.2}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={3}
          autoPauseOffscreen={false}
          edgeFade={0}
          transparent
          className={'h-full w-full'}
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-start">
        <Hero />
        <About />
        <Tools />
        <Works />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
