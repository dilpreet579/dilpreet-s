import Container from '@/components/common/Container';
// import About from '@/components/landing/About';
// import CTA from '@/components/landing/CTA';
import Education from '@/components/landing/Education';
import Experience from '@/components/landing/Experience';
import Hero from '@/components/landing/Hero';
import Journey from '@/components/landing/Journey';
import Work from '@/components/landing/Projects';
import ThroughMyLens from '@/components/landing/ThroughMyLens';
import React from 'react';

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Education />
      <Work />
      <ThroughMyLens />
      {/* <CTA /> // Removed CTA for now, can be added back later if needed */}
      <Journey />
    </Container>
  );
}
