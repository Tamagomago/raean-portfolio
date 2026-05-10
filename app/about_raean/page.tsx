'use client';

import React from 'react';
import PageLayout from '@/app/components/layout/page-layout';
import Intro from '@/app/components/about/intro';
import Experience from '@/app/components/about/experience';

const Page = () => {
  return (
    <PageLayout>
      <Intro />
      <Experience />
    </PageLayout>
  );
};

export default Page;
