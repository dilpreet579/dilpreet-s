import DRF from '@/components/technologies/DRF';
import Django from '@/components/technologies/Django';
import Docker from '@/components/technologies/Docker';
import GCP from '@/components/technologies/GCP';
import Neo4j from '@/components/technologies/Neo4j';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';

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
    isCurrent: true,
    isBlur: false,
    company: 'FischerJordan',
    position: 'SDE Intern',
    location: 'New York, United States (Remote)',
    image: '/company/fischerjordan.jpg',
    description: [
      'Contributing to engineering projects and software development efforts.',
    ],
    startDate: 'Jun 2026',
    endDate: 'Present',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'Django',
        href: 'https://www.djangoproject.com/',
        icon: <Django />,
      },
      {
        name: 'Django REST Framework',
        href: 'https://www.django-rest-framework.org/',
        icon: <DRF />,
      },
      {
        name: 'Redis',
        href: 'https://redis.io/',
        icon: <Redis />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
    ],
    website: 'https://fischerjordan.com/',
    linkedin: 'https://www.linkedin.com/company/fischerjordan/',
    x: 'https://twitter.com/fischerjordanNY',
  },
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
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        icon: <Docker />,
      },
      {
        name: 'Neo4j',
        href: 'https://neo4j.com/',
        icon: <Neo4j key="neo4j" />,
      },
    ],
    website: 'https://www.soundverse.ai/',
    // github: 'https://github.com/upsurgeio',
    x: 'https://x.com/soundverse_ai',
    linkedin: 'https://www.linkedin.com/company/soundverseai',
  },
];
