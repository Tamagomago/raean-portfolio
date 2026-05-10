import React, { useRef } from 'react';
import { Text, Title, ViewMore } from '@/app/components/ui';
import { useParallax } from '@/app/hooks/useParallax';

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const description =
    "Let's try working together!\nFeel free to reach out for collaborations, projects, or just to say hi.";

  useParallax(containerRef, contentRef);

  return (
    <div
      ref={containerRef}
      className={
        'relative flex w-full flex-col items-center justify-center gap-10 overflow-hidden px-6 py-30 md:flex-row md:gap-5 md:px-24 md:py-50'
      }
    >
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute top-0 left-0 z-20 h-48 w-full bg-linear-to-t from-transparent" />
      <div
        ref={contentRef}
        className={'flex flex-col items-center justify-center md:flex-1 md:items-start'}
      >
        <Title distortIntervalMs={2000} className={'text-[50px] leading-tight md:text-[125px]'}>
          WORK_WITH_ME
        </Title>
        <div className={'mt-8 flex flex-col items-center md:ml-4 md:items-start'}>
          {description.split('\n').map((sentence, i) => (
            <Text
              key={i}
              font={'font-geist-mono'}
              className={'text-xs md:text-left md:text-sm'}
              align={'center'}
            >
              {sentence}
            </Text>
          ))}
        </div>
        <ViewMore href={'/contact'} className={'md:ml-4'} />
      </div>
    </div>
  );
};

export default Contact;
