'use client';

import React, { useRef } from 'react';
import { cn } from '@/app/lib/utils';
import { GeistPixelSquare } from 'geist/font/pixel';
import styles from '@/app/components/ui/typography.module.css';
import { Title, Text, ViewMore } from '@/app/components/ui';
import { useParallax } from '@/app/hooks/useParallax';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, contentRef);

  const description = `Hello, I'm Raean Chrissean R. Tamayo, a third-year Computer Science student.\nBorn on March 18, 2005, in Iloilo City, Philippines,\nI am an aspiring full-stack developer passionate about creating beautiful, functional, and user-friendly web applications.`;
  return (
    <div
      ref={containerRef}
      className={cn(
        'bg-dark relative w-full overflow-hidden px-6 py-12 md:px-12 md:py-20 lg:px-24',
        GeistPixelSquare.className,
      )}
    >
      <div ref={contentRef} className={'my-10 pl-0 md:my-32 md:pl-10 lg:pl-20'}>
        <h1
          className={cn(
            styles.s_outline,
            'mt-10 text-5xl font-thin tracking-widest sm:text-6xl md:mt-24 md:text-7xl lg:text-8xl',
          )}
          style={{ WebkitTextStroke: '0.5px white' }}
        >
          ABOUT
        </h1>
        <div className={'mb-4 pl-0 md:mb-8 md:pl-4 lg:pl-8'}>
          <Title
            distortIntervalMs={2000}
            className={'text-[60px] leading-tight sm:text-[100px] md:text-[150px] lg:text-[200px]'}
          >
            RAEAN
          </Title>
        </div>
        <div>
          {description.split('\n').map((sentence, i) => (
            <Text
              key={i}
              stagger={15}
              font={'font-geist-mono'}
              duration={300}
              className={'text-xs md:text-sm'}
            >
              {sentence}
            </Text>
          ))}
        </div>

        <ViewMore href={'/about'} />
      </div>
    </div>
  );
};

export default About;
