'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink, Title } from '@/app/components/ui';

const Footer = () => {
  return (
    <footer className="mt-20 w-full border-t border-dashed border-white/70">
      <div className="grid grid-cols-[1fr_120px] md:grid-cols-[1fr_300px]">
        {/* Main Links Column */}
        <div className="flex flex-col border-l border-dashed border-white/70">
          <div className="border-b border-dashed border-white/70">
            <NavLink
              href="/about_raean"
              className="w-full"
              textClassName="text-2xl md:text-5xl px-8 py-4"
            >
              about
            </NavLink>
          </div>
          <div className="border-b border-dashed border-white/70">
            <NavLink
              href="/works"
              className="w-full"
              textClassName="text-2xl md:text-5xl px-8 py-4"
            >
              works
            </NavLink>
          </div>
          <div className="border-b border-dashed border-white/70">
            <NavLink
              href="/contact"
              className="w-full"
              textClassName="text-2xl md:text-5xl px-8 py-4"
            >
              contact
            </NavLink>
          </div>
        </div>

        {/* Socials Column */}
        <div className="grid grid-rows-[1fr_2fr] border-l border-r border-dashed border-white/70">
          <div className="grid grid-cols-2 border-b border-dashed border-white/70">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="group flex items-center justify-center border-r border-dashed border-white/70 transition-colors duration-300 hover:bg-white/5"
            >
              <div className="relative h-6 w-6 md:h-8 md:w-8">
                <Image src="/svg/linkedin.svg" alt="LinkedIn" fill />
              </div>
            </Link>
            <Link
              href="https://github.com/Tamagomago"
              target="_blank"
              className="group flex items-center justify-center transition-colors duration-300 hover:bg-white/5"
            >
              <div className="relative h-6 w-6 md:h-8 md:w-8">
                <Image src="/svg/github.svg" alt="GitHub" fill />
              </div>
            </Link>
          </div>

          <Link
            href="mailto:tamayoraeanchrissean@gmail.com"
            className="group flex items-center justify-center border-b border-dashed border-white/70 transition-colors duration-300 hover:bg-white/5"
          >
            <div className="relative h-12 w-12 md:h-20 md:w-20">
              <Image src="/svg/email.svg" alt="Email" fill />
            </div>
          </Link>
        </div>

        <div className="col-span-2 flex justify-center border-r border-b border-l border-dashed border-white/70 p-4">
          <Link href={'/'}>
            <Title className="text-[15vw] leading-none">RAEAN</Title>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
