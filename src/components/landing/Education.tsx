import { educationList } from '@/config/Education';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { EducationCard } from '../education/EducationCard';

export default function Education() {
  return (
    <section id="education">
      <Container className="mt-20">
        <SectionHeading subHeading="Academic" heading="Education" />
        <div className="mt-4 flex flex-col gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </Container>
    </section>
  );
}
