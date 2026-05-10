import React from 'react';
import { Title } from '@/app/components/ui';

export default function Loading() {
  return (
    <div className="bg-dark flex h-screen w-full items-center justify-center">
      <Title distortIntervalMs={500} className="text-[50px] md:text-[100px]">
        LOADING...
      </Title>
    </div>
  );
}
