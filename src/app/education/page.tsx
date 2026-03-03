import Container from '@/components/common/Container';
import { EducationCard } from '@/components/education/EducationCard';
import { Separator } from '@/components/ui/separator';
import { educationList } from '@/config/Education';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  ...getMetadata('/education'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  } as Robots,
};

export default function EducationPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Education
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My academic journey and qualifications.
          </p>
        </div>

        <Separator />

        {/* Education List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              All Qualifications
              {educationList.length > 0 && (
                <span className="text-muted-foreground ml-2 text-sm font-normal">
                  ({educationList.length}{' '}
                  {educationList.length === 1
                    ? 'qualification'
                    : 'qualifications'}
                  )
                </span>
              )}
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {educationList.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
