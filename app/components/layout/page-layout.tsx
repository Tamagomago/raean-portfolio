'use client';

import React, { useLayoutEffect } from 'react';
import PixelBlast from '@/app/components/ui/pixel-blast';
import Footer from './footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
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
      <div
        id="global-background"
        className="fixed top-[-50%] left-0 z-0 h-[200%] w-full will-change-transform"
      >
        <PixelBlast
          variant="diamond"
          pixelSize={6} // Increased pixel size for better performance
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
          speed={2} // Reduced speed slightly
          autoPauseOffscreen={true} // Enable auto-pause
          edgeFade={0}
          transparent
          className={'h-full w-full'}
        />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-start">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default PageLayout;
