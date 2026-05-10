'use client';

import React, { useRef } from 'react';
import { cn } from '@/app/lib/utils';
import { GeistPixelSquare } from 'geist/font/pixel';
import styles from '@/app/components/ui/typography.module.css';
import { Title } from '@/app/components/ui';
import Image from 'next/image';
import { useParallax } from '@/app/hooks/useParallax';

const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const certContainerRef = useRef<HTMLDivElement>(null);
  const certImageRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, titleContainerRef, { yOffset: -100 });
  useParallax(certContainerRef, certImageRef, { yOffset: -80 });

  const description = [
    "Hello, I'm Raean Chrissean R. Tamayo, a third-year Computer Science student. Born on March 18, 2005, in Iloilo City, Philippines, I am an aspiring full-stack developer passionate about creating beautiful, functional, and user-friendly web applications.",
    'I started my journey around mid-2024 when I saw my friends getting into web development, which sparked my interest as well. From there, I began learning the basics of HTML and CSS through the FreeCodeCamp course, then moved on to Bro Code on YouTube to study basic JavaScript. After that, I built several small projects to practice and become more familiar with web development.',
    'Later on, I learned React, TypeScript, and Vite simultaneously through Scrimba. Along the way, I also discovered interesting libraries and tools like TanStack while working on projects. Afterward, I continued learning by studying Next.js, again through Scrimba.',
    'At the time of writing this, looking back, I feel that I’ve made solid progress in my web development skills within a year. However, deep inside, I also feel some disappointment and regret because I know I could have built more projects and improved even further if I hadn’t procrastinated at times.',
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full px-6 py-12 md:px-12 md:py-20 lg:px-24',
        GeistPixelSquare.className,
      )}
    >
      <div className={'flex flex-col items-center justify-start'}>
        <div
          ref={titleContainerRef}
          className="mb-8 flex flex-col items-center gap-0 md:flex-row md:items-baseline md:gap-4"
        >
          <h1
            className={cn(
              styles.s_outline,
              'text-4xl font-thin tracking-widest sm:text-5xl md:text-6xl lg:text-7xl',
            )}
            style={{ WebkitTextStroke: '0.5px white' }}
          >
            ABOUT
          </h1>
          <Title
            distortIntervalMs={2000}
            className={'text-[50px] leading-tight sm:text-[80px] md:text-[120px] lg:text-[160px]'}
          >
            RAEAN
          </Title>
        </div>

        <div className="flex max-w-4xl flex-col justify-center gap-6">
          {description.map((para, index) => (
            <p key={index} className={'font-geist-mono text-xs leading-relaxed md:text-sm'}>
              {para}
            </p>
          ))}
        </div>

        <div
          ref={certContainerRef}
          className="relative mt-12 aspect-16/10 w-full max-w-4xl overflow-hidden grayscale transition-all duration-300 hover:grayscale-0"
        >
          <div ref={certImageRef} className="absolute inset-0 top-[-10%] h-[120%] w-full">
            <Image
              src={'/img/Scrimba-Next-Cert.png'}
              alt={'Scrimba Nextjs Certificate'}
              fill
              className={'object-contain'}
            />
          </div>
        </div>
      </div>
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-linear-to-b from-transparent" />
    </div>
  );
};

export default Intro;
