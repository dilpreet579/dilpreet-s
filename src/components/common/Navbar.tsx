import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 lowercase backdrop-blur-sm">
      <div className="flex items-center justify-between px-2 sm:px-6">
        <div className="flex items-baseline gap-4">
          <Link href="/">
            <Image
              className="h-8 w-8 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 md:h-12 md:w-12 dark:bg-yellow-300"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 md:gap-8">
          {navbarConfig.navItems.map((item) => (
            <Link
              className="text-xs transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 sm:text-sm md:text-base"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
