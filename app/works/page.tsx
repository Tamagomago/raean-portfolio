'use client';

import React from 'react';
import PageLayout from '@/app/components/layout/page-layout';
import { Title } from '@/app/components/ui';
import WorksList from '@/app/components/works/works-list';

const WorksPage = () => {
  return (
    <PageLayout>
      <div className="relative flex min-h-screen w-full items-center justify-center">
        <Title
          distortIntervalMs={2000}
          className="text-[50px] leading-tight sm:text-[80px] md:text-[120px] lg:text-[160px]"
        >
          WORKS
        </Title>
        {/* Fade-to-background overlay */}
        <div className="to-dark pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-linear-to-b from-transparent" />
      </div>
      <WorksList />
    </PageLayout>
  );
};

export default WorksPage;
