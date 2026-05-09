'use client';

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { Title, Text } from '@/app/components/ui';
import localFont from 'next/font/local';
import { cn } from '@/app/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Text moves up first and more noticeably
      tl.to(
        contentRef.current,
        {
          y: -200,
          opacity: 0,
          ease: 'power2.out',
        },
        0,
      );

      // Background parallax targets the global background
      tl.to(
        '#global-background',
        {
          yPercent: 15,
          ease: 'none',
        },
        0.2,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={
        'relative flex h-screen w-full max-w-full shrink-0 flex-col items-center justify-center overflow-hidden'
      }
    >
      <div ref={contentRef} className="relative z-10">
        <Title
          distortIntervalMs={2000}
          forceVisible={isVisible}
          className={'sm:text-[12vw] md:text-[200px] md:font-black lg:text-[300px]'}
        >
          RAEAN
        </Title>
        <Text className={cn(rainyhearts.className, 'px-8')} forceVisible={isVisible}>
          {'//    FULLSTACK_DEVELOPER'}
        </Text>
      </div>

      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-linear-to-b from-transparent" />
    </div>
  );
};

export default Hero;
