'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Initialize Lenis with more performant lerp settings
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness intensity (0.1 is standard)
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const scrollFn = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(scrollFn);
    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(scrollFn);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
