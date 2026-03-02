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
// Technology Components
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
  title: 'Full-Stack AI Engineer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
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
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'React Native (Expo)',
      href: 'https://expo.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'PyTorch',
      href: 'https://pytorch.org/',
      component: 'PyTorch',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build scalable web apps and intelligent AI models using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. Passionate about merging Machine Learning with user-centric development.',
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
