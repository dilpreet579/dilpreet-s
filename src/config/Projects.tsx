import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Python from '@/components/technologies/Python';
import PyTorch from '@/components/technologies/PyTorch';
import TypeScript from '@/components/technologies/TypeScript';
import ReactIcon from '@/components/technologies/ReactIcon';
import Firebase from '@/components/technologies/Firebase';
import Expo from '@/components/technologies/Expo';
import { Project } from '@/types/project';
import FramerMotion from '@/components/technologies/FramerMotion';
import TailwindCss from '@/components/technologies/TailwindCss';
import FastAPI from '@/components/technologies/FastAPI';
import Streamlit from '@/components/technologies/Streamlit';
import Selenium from '@/components/technologies/Selenium';
import Puppeteer from '@/components/technologies/Puppeteer';

export const projects: Project[] = [
  {
    title: 'UniPool - University Carpooling Platform',
    description: 'An exclusive carpooling application designed for university students to share rides securely, currently in development with a focus on verified student matching.',
    image: '/project/unipool.png',
    link: '',
    technologies: [
      { name: 'Expo', icon: <Expo key="expo" /> },
      { name: 'React Native', icon: <ReactIcon key="react-native" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Firebase', icon: <Firebase key="firebase" /> },
    ],
    github: 'https://github.com/dilpreet579/unipool',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/unipool',
    isWorking: false,
  },
  {
    title: 'RideShare - Premium AI Ride Platform',
    description: 'A dark-mode first ride-sharing platform with AI driver negotiation, real-time simulation, and Leaflet map integration.',
    image: '/project/rideshare.png',
    link: 'https://fj-fe-r2-dilpreet-nit-delhi.vercel.app/',
    technologies: [
      { name: 'Next.js 14', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Framer Motion', icon: <FramerMotion key="framer-motion" /> },
    ],
    github: 'https://github.com/dilpreet579/FJ-FE-R2-Dilpreet-NIT-Delhi',
    live: 'https://fj-fe-r2-dilpreet-nit-delhi.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/rideshare',
    isWorking: true,
  },
  {
    title: 'ClairVision - AI-Powered Event Photo Curation System',
    description: 'Built an AI-powered computer vision pipeline for event photo curation, automating duplicate detection, blur filtering.',
    image: '/project/clairvision.png',
    link: '#',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'PyTorch', icon: <PyTorch key="pytorch" /> },
      { name: 'NextJS', icon: <NextJs key="nextjs" /> },
    ],
    github: 'https://github.com/dilpreet579/clairvision-model',
    live: '#',
    details: true,
    projectDetailsPageSlug: '/projects/clairvision',
    isWorking: false,
  },
  {
    title: 'Real-Time Bot Detection System (Walmart Sparkathon 2025)',
    description: 'Built a real-time ML system to detect and block malicious bot purchases during high-demand holiday sales.',
    image: '/project/botdetection.png',
    link: 'https://bot-detector-model-dashboard.onrender.com/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'FastAPI', icon: <FastAPI key="fastapi" /> },
      { name: 'Streamlit', icon: <Streamlit key="streamlit" /> },
      { name: 'Selenium', icon: <Selenium key="selenium" /> },
      { name: 'Puppeteer', icon: <Puppeteer key="puppeteer" /> },
    ],
    github: 'https://github.com/dilpreet579/Real-time-Grinch-Bots-Detection',
    live: 'https://bot-detector-model-dashboard.onrender.com/',
    details: true,
    projectDetailsPageSlug: '/projects/bot-detection',
    isWorking: true,
  },
  {
    title: 'VocaAI - AI Receptionist for Businesses',
    description: 'Launched an AI-powered virtual receptionist, enabling 24/7 customer support and call automation.',
    image: '/project/vocaai.png',
    link: 'https://voca-ai.vercel.app/',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/dilpreet579/voca-ai',
    live: 'https://voca-ai.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/vocaai',
    isWorking: true,
  },
];

export const featuredProjectSlugs = [
  'rideshare',
  'unipool',
  'clairvision',
  'bot-detection',
  'vocaai',
];

export const heroProjects = [
  {
    title: 'RideShare',
    description: 'AI-powered ride-sharing platform with real-time simulation.',
    image: '/project/rideshare.png',
    link: '/projects/rideshare',
  },
  {
    title: 'UniPool',
    description: 'University carpooling application built with React Native and Firebase.',
    image: '/project/unipool.png',
    link: '/projects/unipool',
  },
  {
    title: 'ClairVision - Event Photo Curation',
    description: 'An AI-powered computer vision pipeline for event photo curation.',
    image: '/project/clairvision.png',
    link: '/projects/clairvision',
  },
  {
    title: 'Real-Time Bot Detection',
    description: 'A real-time ML system to detect and block malicious bot purchases.',
    image: '/project/botdetection.png',
    link: '/projects/bot-detection',
  },
];

