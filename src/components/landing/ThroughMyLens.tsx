'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const photos = [
  { src: '/photography/7.JPG', alt: 'Campus moment' },
  { src: '/photography/2.JPG', alt: 'Campus moment' },
  { src: '/photography/3.JPG', alt: 'Campus moment' },
  { src: '/photography/4.JPG', alt: 'Campus moment' },
  { src: '/photography/5.jpg', alt: 'Campus moment' },
  { src: '/photography/6.jpg', alt: 'Campus moment' },
  { src: '/photography/1.jpeg', alt: 'Campus moment' },
  { src: '/photography/8.jpeg', alt: 'Campus moment' },
];

export default function ThroughMyLens() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };

  const onMouseLeave = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  return (
    <Container className="mt-20">
      {/* Header row: heading left, nav buttons right (desktop only) */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <SectionHeading subHeading="Creative" heading="Through My Lens" />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="flex size-9 items-center justify-center rounded-full border border-black/15 bg-black/5 transition-all duration-200 hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="flex size-9 items-center justify-center rounded-full border border-black/15 bg-black/5 transition-all duration-200 hover:bg-black/10 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable gallery strip */}
      <div
        ref={scrollRef}
        className="mt-6 flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ cursor: 'grab' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] h-52 shrink-0 overflow-hidden rounded-lg md:h-64"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              draggable={false}
            />
            {/* Subtle dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>
    </Container>
  );
}
