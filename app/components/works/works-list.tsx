'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { projects } from '@/app/lib/data';
import { cn } from '@/app/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { Text } from '@/app/components/ui';

const WorksList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const scrollElement = scrollRef.current;
      const containerElement = containerRef.current;

      if (!scrollElement || !containerElement) return;

      const getScrollAmount = () => {
        return scrollElement.scrollWidth - window.innerWidth;
      };

      gsap.to(scrollElement, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerElement,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-dark relative h-screen w-full overflow-hidden">
      <div ref={scrollRef} className="flex h-full w-fit items-center gap-20 px-[20vw] md:gap-40">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col gap-4',
              index % 2 === 0 ? 'mt-[10vh] self-start' : 'mb-[10vh] self-end',
            )}
          >
            <Link
              href={project.link === 'N/A' ? '#' : project.link}
              target={project.link === 'N/A' ? undefined : '_blank'}
              className="aspect-16/10 h-[40vh] shrink-0 overflow-hidden bg-zinc-800 grayscale transition-all duration-500 hover:grayscale-0 md:h-[45vh]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={625}
                className="h-full w-full object-cover"
                priority={index < 2}
              />
            </Link>
            <div className="flex flex-col gap-1 text-white">
              <Text className="font-rainyhearts text-4xl md:text-5xl">{project.title}</Text>
              <p className="font-geist-mono max-w-[400px] text-sm leading-relaxed opacity-80">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-geist-mono border border-dashed border-white/20 px-2 py-0.5 text-[10px] tracking-wider uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                {project.link === 'N/A' ? (
                  <span className="font-geist-mono text-xs tracking-widest uppercase opacity-40">
                    not live
                  </span>
                ) : (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="font-geist-mono group flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  >
                    view project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {'>'}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksList;
