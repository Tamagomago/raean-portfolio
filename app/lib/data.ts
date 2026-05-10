import { Experience, Tool } from '@/app/types/types';

export const tools: Tool[] = [
  // Languages
  { name: 'Typescript', logo: 'typescript.svg' },
  { name: 'Javascript', logo: 'javascript.svg' },

  // Frameworks & Libraries
  { name: 'Next.js', logo: 'nextjs.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'Vite', logo: 'vite.svg' },
  { name: 'Express', logo: 'express.svg' },
  { name: 'Tailwind_CSS', logo: 'tailwindcss.svg' },

  // State & Data Management
  { name: 'Tanstack', logo: 'tanstack.svg' },
  { name: 'Prisma', logo: 'prisma.svg' },
  { name: 'Supabase', logo: 'supabase.svg' },

  // Development Tools
  { name: 'Git', logo: 'git.svg' },
  { name: 'Github', logo: 'github.svg' },
  { name: 'Webstorm', logo: 'webstorm.svg' },
  { name: 'Figma', logo: 'figma.svg' },

  // Deployment
  { name: 'Vercel', logo: 'vercel.svg' },
];

export const experience: Experience[] = [
  {
    title: 'Frontend Officer',
    at: 'GDG OC USLS',
    key_points: [
      'Built event websites for the club.',
      'Collaborated with a team of developers and UI/UX designers to create visually appealing and user-friendly websites.',
    ],
    date_duration: '2025.7 - Present',
  },
  {
    title: 'National Finalist',
    at: 'eSkolar',
    key_points: [
      'Selected as a Top 10 National Finalist among 433 submissions in the Development Academy of the Philippines NextGen PH Competition.',
      'Worked as a Fullstack Developer along with 4 other members to create a MVP web application that helps students find scholarships.',
    ],
    date_duration: '2025.11',
  },
  {
    title: 'Computer Science',
    at: 'USLS',
    key_points: [
      'Current GWA: 1.32',
      'Consistent Dean’s Lister from first year to present.',
      'Completed relevant courses on Web Development, Data Structures, Algorithms, and Database Management.',
    ],
    date_duration: '2023.8 - Present',
  },
];
