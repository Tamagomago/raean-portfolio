import React from 'react';
import Hero from '@/app/components/home/hero';
import About from '@/app/components/home/about';
import Skills from '@/app/components/home/skills';
import PixelBlast from '@/app/components/ui/pixel-blast';

export default function Home() {
  return (
    <main className={'bg-dark relative min-h-screen w-full overflow-x-hidden text-white'}>
      <div id="global-background" className="absolute inset-0 z-0 h-full w-full">
        <PixelBlast
          variant="diamond"
          pixelSize={3}
          color="#575757"
          patternScale={2.5}
          patternDensity={1}
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
          edgeFade={0}
          transparent
          className={'h-full w-full'}
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center justify-start">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  );
}
