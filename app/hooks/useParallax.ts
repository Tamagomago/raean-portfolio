'use client';

import { useLayoutEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxOptions {
  yOffset?: number;
  opacity?: number;
  start?: string;
  end?: string;
  ease?: string;
}

export const useParallax = (
  containerRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) => {
  const {
    yOffset = -200,
    opacity,
    start = 'top top',
    end = 'bottom top',
    ease = 'power2.out',
  } = options;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub: 1,
        },
      });

      // Content animation
      tl.to(
        contentRef.current,
        {
          y: yOffset,
          ...(opacity !== undefined ? { opacity } : {}),
          ease,
        },
        0,
      );
    });

    return () => ctx.revert();
  }, [containerRef, contentRef, yOffset, opacity, start, end, ease]);
};
