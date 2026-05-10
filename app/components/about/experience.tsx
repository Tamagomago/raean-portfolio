'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { experience } from '@/app/lib/data';
import { Experience as ExperienceType } from '@/app/types/types';
import { Text, Title } from '@/app/components/ui';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParallax } from '@/app/hooks/useParallax';

const ExperienceItem = ({ exp, index }: { exp: ExperienceType; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useParallax(itemRef, imageContainerRef, { yOffset: -80 });

  return (
    <section
      ref={itemRef}
      className="exp-section bg-dark relative flex h-screen w-full flex-col overflow-hidden border-t border-dashed border-white/70 md:flex-row"
      style={{ zIndex: index + 10 }}
    >
      <div className="relative h-[40vh] w-full overflow-hidden md:h-full md:w-[30%]">
        <div ref={imageContainerRef} className="absolute inset-0 top-[-10%] h-[120%] w-full">
          <Image
            src={exp.image}
            alt={exp.title}
            fill
            className="object-cover brightness-50 contrast-150 grayscale transition-all duration-700 ease-in-out hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 30vw"
            priority={index < 2}
          />
        </div>
      </div>

      <div className="z-20 flex w-full flex-col justify-center p-8 md:w-[70%] md:p-12 lg:p-20">
        <div className="mx-auto w-full max-w-2xl">
          <div className="mb-2">
            <Text className="text-[10px] tracking-[0.4em] text-white uppercase">
              {exp.date_duration}
            </Text>
          </div>

          <div className="mb-6">
            <Title className="text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {exp.title.replace(/ /g, '_')}
            </Title>
            <div className="mt-4 flex items-center gap-3">
              <Text className="text-sm font-light text-white md:text-base">{`@ ${exp.at}`}</Text>
            </div>
          </div>

          <div className="w-full">
            <ul className="space-y-4">
              {exp.key_points.map((point, i) => (
                <li key={i} className="group flex gap-4">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 border border-white transition-colors duration-300 group-hover:bg-white" />
                  <Text stagger={5} className="text-sm leading-relaxed text-white md:text-base">
                    {point}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useParallax(introRef, titleRef, { yOffset: 100 });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.exp-section');

      sections.forEach((section, i) => {
        const isLast = i === sections.length - 1;
        // Pin each section to create the stacking effect
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          pin: true,
          pinSpacing: isLast, // Last section pushes the footer
          scrub: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-dark w-full overflow-hidden">
      {/* Introduction Title */}
      <div ref={introRef} className="flex min-h-screen items-center justify-center">
        <div ref={titleRef}>
          <Title
            distortIntervalMs={2000}
            className="text-[50px] leading-tight sm:text-[80px] md:text-[120px] lg:text-[160px]"
          >
            EXPERIENCE
          </Title>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {experience.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
