'use client';

import React, { useEffect, useRef, useState } from 'react';
import PixelBlast from '@/app/components/ui/pixel-blast';
import Title from '@/app/components/ui/title';
import localFont from 'next/font/local';
import Subtitle from '@/app/components/ui/text';
import { cn } from '@/app/lib/utils';

const rainyhearts = localFont({
  src: '../../../public/fonts/rainyhearts.ttf',
});

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={
        'relative flex h-screen w-full max-w-full shrink-0 flex-col items-center justify-center overflow-hidden'
      }
    >
      <PixelBlast
        variant="diamond"
        pixelSize={3}
        color="#575757"
        patternScale={2.25}
        patternDensity={1.2}
        pixelSizeJitter={1.15}
        enableRipples
        rippleSpeed={0.01}
        rippleThickness={0.1}
        rippleIntensityScale={0.2}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={3}
        edgeFade={0}
        transparent
        className={'absolute inset-0 h-full w-full'}
      />
      <div ref={containerRef}>
        <Title
          text={'RAEAN'}
          distortIntervalMs={2000}
          forceVisible={isVisible}
          className={'sm:text-[12vw] md:text-[200px] md:font-black lg:text-[300px]'}
        />
        <Subtitle className={cn(rainyhearts.className, 'px-8')} forceVisible={isVisible}>
          {'//    FULLSTACK_DEVELOPER'}
        </Subtitle>
      </div>

      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-linear-to-b from-transparent" />
    </div>
  );
};

export default Hero;
