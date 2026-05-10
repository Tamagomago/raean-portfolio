import { Experience, Project, Tool } from '@/app/types/types';

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
    image: '/img/google-exp_.png',
  },
  {
    title: 'National Finalist',
    at: 'eSkolar',
    key_points: [
      'Selected as a Top 10 National Finalist among 433 submissions in the Development Academy of the Philippines NextGen PH Competition.',
      'Worked as a Fullstack Developer along with 4 other members to create a MVP web application that helps students find scholarships.',
    ],
    date_duration: '2025.11',
    image: '/img/eskolar-logo-exp.png',
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
    image: '/img/usls-exp.jpg',
  },
  {
    title: 'Senior High School',
    at: 'UNO-R',
    key_points: [
      'Graduated with High Honors',
      'Specialized in Science, Technology, Engineering, and Mathematics (STEM) strand.',
    ],
    date_duration: '2021.8 - 2023.6',
    image: '/img/unor-exp.jpg',
  },
];

export const projects: Project[] = [
  {
    title: 'eSkolar',
    description:
      'A web application designed to help students find scholarships. It provides a user-friendly interface for searching scholarships, viewing details, and applying for scholarships.',
    tech_stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    link: 'N/A',
    image: '/img/eskolar.png',
  },
  {
    title: 'Motoki',
    description: 'A simple pomodoro timer with a japan-theme aesthetics',
    tech_stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://motoki-pomodoro.vercel.app/',
    image: '/img/motoki.png',
  },
  {
    title: 'Raean.dev',
    description: 'The website you are currently on.',
    tech_stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    link: 'https://raean.dev/',
    image: '/img/portfolio.png',
  },
  {
    title: 'Nimbus',
    description:
      'A weather app based on the weather API of OpenWeatherMap with a dynamic video background.',
    tech_stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://nimbus-indol.vercel.app/',
    image: '/img/nimbus.png',
  },
  {
    title: 'Newton Library',
    description:
      'An online library based on Google Books and NY Times API where users can search for popular books.',
    tech_stack: [
      'Tanstack Router',
      'Tanstack Query',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
    link: 'https://newton-library.vercel.app/',
    image: '/img/newton-library.png',
  },
  {
    title: 'Nixar Auto Glass & Car Tint POS',
    description: 'A web-based POS system for Nixar Auto Glass & Car Tint.',
    tech_stack: ['PHP', 'MySQL', 'Bootstrap', 'Javascript'],
    link: 'N/A',
    image: '/img/nixar.png',
  },
  {
    title: 'RVS Dental Managment System',
    description: 'A web-based dental management system for RVS Dental Clinic.',
    tech_stack: ['PHP', 'MySQL', 'Tailwind CSS', 'Javascript', 'Laravel'],
    link: 'N/A',
    image: '/img/rvs-dental.png',
  },
];
