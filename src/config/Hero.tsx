import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import PyTorch from '@/components/technologies/PyTorch';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Python: Python,
  PyTorch: PyTorch,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Dilpreet Singh',
  title: 'Software Engineer',
  avatar: '/assets/logo.png',

  // Start Time
  startTime: new Date('2005-01-08').getTime(),

  // Skills Configuration
  skills: [
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Typescript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Python',
      href: 'https://python.org/',
      component: 'Python',
    },
    {
      name: 'ReactNative(Expo)',
      href: 'https://expo.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template: `I build products at the intersection of software engineering and AI.

Computer Science student at NIT Delhi, currently working as a SDE Intern at FischerJordan. Interested in backend systems, machine learning, and developer tools.`,
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/singhdilpreet8/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/dilpreet579',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:dilpreet082023@gmail.com',
    icon: <Mail />,
  },
];
