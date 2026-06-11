export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  description?: string;
  website?: string;
  linkedin?: string;
}

export const educationList: Education[] = [
  {
    institution: 'National Institute of Technology Delhi',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    startDate: '2023',
    endDate: '2027 (ongoing)',
    location: 'Delhi, India',
    image: '/assets/nitd.png',
    website: 'https://nitdelhi.ac.in/',
    linkedin:
      'https://www.linkedin.com/school/national-institute-of-technology-delhi/',
    description:
      "At NIT Delhi, I've explored software engineering, machine learning, and AI through coursework, internships, and hands-on projects. From AI-powered applications to full-stack products, I enjoy turning ideas into systems people can use. Beyond engineering, I'm actively involved in the Photography Club, capturing and documenting campus life.",
  },
];
