import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';
import GCP from '@/components/technologies/GCP';
import Python from '@/components/technologies/Python';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    isBlur: false,
    company: 'Soundverse AI',
    position: 'Applied AI Intern',
    location: 'New York, USA (Remote)',
    image: '/company/soundverse.png',
    description: [
      'Worked on an Agentic AI assistant to power real-time, voice-first conversational user experiences.',
      'Developed a Model Context Protocol (MCP) server to expose Soundverse’s music generation APIs inside MCP-supported environments (e.g., Claude Desktop, IDEs like Cursor and Windsurf).',
      'Optimized audio generation pipelines with deep learning and statistical modeling, improving the output quality scores by 25%.',
    ],
    startDate: 'Jul 2025',
    endDate: 'Sept 2025',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'NodeJs',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Postman',
        href: 'https://postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Google Cloud Platform',
        href: 'https://cloud.google.com/',
        icon: <GCP />,
      },
    ],
    website: 'https://www.soundverse.ai/',
    // github: 'https://github.com/upsurgeio',
    x: 'https://x.com/soundverse_ai',
    linkedin: 'https://www.linkedin.com/company/soundverseai',
  }
];
