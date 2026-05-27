import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration — trailing slash stripped to prevent canonical double-slash
export const siteConfig = {
  name: heroConfig.name,
  title: 'Dilpreet Singh | Full-Stack AI Engineer Portfolio',
  description:
    'Portfolio of Dilpreet Singh — Full-Stack AI Engineer specialising in React, Next.js, React Native, Python and intelligent systems.',
  url: (process.env.NEXT_PUBLIC_URL || 'http://localhost:3000').replace(
    /\/$/,
    '',
  ),
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@dp100x',
    github: 'dilpreet579',
    linkedin: 'singhdilpreet8',
    email: 'dilpreet082023@gmail.com',
  },
  keywords: [
    'Dilpreet Singh',
    'dilpreet singh portfolio',
    'full-stack AI engineer',
    'AI developer India',
    'React developer',
    'Next.js developer',
    'TypeScript developer',
    'Python developer',
    'React Native developer',
    'Node.js developer',
    'software engineer India',
    'web development',
    'portfolio',
    'dp100x',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home
  '/': {
    title: 'home / dilpreet',
    description: `${about.description} Explore my projects, work experience, and technical expertise in React, Next.js, Python, and AI systems.`,
    keywords: [
      'Dilpreet Singh',
      'full-stack AI engineer',
      'developer portfolio',
      'React developer India',
      'Next.js',
      'Python',
      'React Native',
      'software engineer',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact
  '/contact': {
    title: 'contact / dilpreet',
    description:
      'Get in touch with Dilpreet Singh for collaborations, projects, or job opportunities. Open to freelance and full-time roles.',
    keywords: [
      'contact Dilpreet Singh',
      'hire developer India',
      'collaboration',
      'freelance developer',
      'full-stack engineer',
    ],
    ogImage: '/assets/logo.png',
    twitterCard: 'summary',
  },

  // Work Experience
  '/work-experience': {
    title: 'work / dilpreet',
    description:
      'Professional work experience of Dilpreet Singh — roles, companies, and achievements in full-stack and AI engineering.',
    keywords: [
      'Dilpreet Singh work experience',
      'software developer career',
      'AI engineer experience',
      'full-stack roles',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects
  '/projects': {
    title: 'projects / dilpreet',
    description:
      'Explore projects by Dilpreet Singh across web development, mobile apps, and AI systems — built with React, Next.js, Python, and more.',
    keywords: [
      'Dilpreet Singh projects',
      'full-stack projects',
      'AI projects',
      'React Native apps',
      'web development portfolio',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Resume
  '/resume': {
    title: 'resume / dilpreet',
    description: `View and download Dilpreet Singh's professional resume — skills, experience, and qualifications as a Full-Stack AI Engineer.`,
    keywords: [
      'Dilpreet Singh resume',
      'developer CV',
      'full-stack engineer resume',
      'AI engineer qualifications',
      'download resume',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  // Journey
  '/journey': {
    title: 'journey / dilpreet',
    description:
      "Follow Dilpreet Singh's personal and professional journey — milestones, achievements, and growth as a developer.",
    keywords: [
      'Dilpreet Singh journey',
      'developer story',
      'software engineer milestones',
      'achievements',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Journey / Certificates
  '/journey/certificates': {
    title: 'certificates / dilpreet',
    description:
      "Dilpreet Singh's professional certificates and credentials in software development, AI, and cloud technologies.",
    keywords: [
      'Dilpreet Singh certificates',
      'developer certifications',
      'AI certifications',
      'professional credentials',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  const allKeywords = [...(pageMeta.keywords || []), ...siteConfig.keywords];

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...new Set(allKeywords)].join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname === '/' ? '' : pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: `@${siteConfig.author.twitter.replace('@', '')}`,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname === '/' ? '' : pathname}`,
    },
  };
}
