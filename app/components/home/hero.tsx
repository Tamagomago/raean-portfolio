'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Title, Text } from '@/app/components/ui';
import localFont from 'next/font/local';
import { cn } from '@/app/lib/utils';
import { useParallax } from '@/app/hooks/useParallax';

const rainyhearts = localFont({
  src: '../../../public/fonts/rainyhearts.ttf',
});

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    // Fallback for mobile
    const fallbackTimeout = setTimeout(() => {
      setIsVisible(true);
      observer.disconnect();
    }, 1000);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  useParallax(containerRef, contentRef, { opacity: 0 });

  return (
    <div
      ref={containerRef}
      className={
        'relative flex h-dvh w-full max-w-full shrink-0 flex-col items-center justify-center overflow-hidden'
      }
    >
      <div ref={contentRef} className="relative z-10 flex flex-col items-center">
        <Title
          distortIntervalMs={2000}
          forceVisible={isVisible}
          className={'text-[15vw] sm:text-[12vw] md:text-[200px] md:font-black lg:text-[300px]'}
        >
          RAEAN
        </Title>
        <Text
          className={cn(rainyhearts.className, 'px-8 text-sm md:text-xl')}
          forceVisible={isVisible}
          align="center"
        >
          {'//    FULLSTACK_DEVELOPER'}
        </Text>
      </div>

      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-linear-to-b from-transparent" />
    </div>
  );
};

export default Hero;
