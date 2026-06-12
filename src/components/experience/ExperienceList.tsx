import { type Experience } from '@/config/Experience';
import React from 'react';

import { ExperienceCard } from './ExperienceCard';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No work experiences found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {experiences.map((experience: Experience, index: number) => (
        <React.Fragment key={experience.company}>
          {index > 0 && (
            <div className="h-px w-full bg-black/10 dark:bg-white/10" />
          )}
          <ExperienceCard experience={experience} />
        </React.Fragment>
      ))}
    </div>
  );
}
