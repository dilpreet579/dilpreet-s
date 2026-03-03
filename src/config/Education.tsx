export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  description?: string;
}

export const educationList: Education[] = [
  {
    institution: 'National Institute of Technology Delhi',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    startDate: '2023',
    endDate: '2027 (ongoing)',
    location: 'Delhi, India',
    image: '/assets/nitd.png',
    description:
      'Focusing on Applied Machine Learning, Deep Learning, and Software Engineering. Actively translating theoretical foundations into production-ready solutions, from computer vision pipelines to agentic AI assistants. Outside the classroom, leading visual storytelling as a member of the Photography Club.',
  },
];
