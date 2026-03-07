import { type Education } from '@/config/Education';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={education.image}
            alt={education.institution}
            width={100}
            height={100}
            className="size-12 rounded-md border bg-white object-contain p-1 dark:bg-black"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{education.institution}</h3>
              {education.website && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={education.website}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Website</p>
                  </TooltipContent>
                </Tooltip>
              )}
              {education.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={education.linkedin}
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground size-4 transition-colors"
                    >
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            <p className="text-secondary text-base font-normal">
              {education.degree}
            </p>
          </div>
        </div>
        <div className="text-secondary flex flex-col self-start text-sm md:items-end md:self-auto">
          <span>
            {education.startDate} - {education.endDate}
          </span>
          <span>{education.location}</span>
        </div>
      </div>
      {education.description && (
        <p className="text-secondary ml-16 text-sm">{education.description}</p>
      )}
    </div>
  );
}
