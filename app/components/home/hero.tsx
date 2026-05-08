'use client';

import React, { useEffect, useRef, useState } from 'react';
import PixelBlast from '@/app/components/ui/pixel-blast';
import Title from '@/app/components/ui/title';
import localFont from 'next/font/local';
import Subtitle from '@/app/components/ui/text';

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
    <>
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
        <Title text={'RAEAN'} distortIntervalMs={2000} forceVisible={isVisible} />
        <Subtitle className={rainyhearts.className} forceVisible={isVisible}>
          {'//    FULLSTACK DEVELOPER'}
        </Subtitle>
      </div>
    </>
  );
};

export default Hero;
