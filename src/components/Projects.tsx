import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'City-Connect',
    description: 'City Connect is a smart city service platform designed to simplify communication between citizens and municipal departments.',
    image: '/assets/notesneo.png',
    link: 'https://city-connect-sitee.netlify.app/',
    tags: ['React.js', 'Node.js', 'Express','MongoDB'],
   },
  {
    title: 'OA Generator',
    description: 'A robust, full stack online assessment platform for coding evaluations. Includes full screen enforcement, real time violation detection, tab-switch prevention and secure test submission.',
    image: '/assets/oagen.png', // You'll need to add this image
    link: 'https://oagen.netlify.app/',
    tags: ['React.js', 'Custom State Management', 'Real-time Monitoring', 'Security Features'],
  },
  {
    title: 'Lintelligence',
    description: 'AI-powered code reviewer using Google Gemini API. Provides lexical analysis, error detection, bug identification, code quality assessment, and code transparency insights for comprehensive code analysis.',
    image: '/assets/lintelligence.png', // You'll need to add this image
    link: 'https://lintelligencee.netlify.app/', // Add your project link here
    tags: ['React.js', 'Tailwind CSS', 'Google Gemini API', 'Code Analysis'],
  },
  {
    title: 'Code Transpiler',
    description: 'Intelligent code transpilation tool that seamlessly converts code from Python to C and Python to Java. Built with Flask backend to provide efficient cross-language code conversion.',
    image: '/assets/code-transpiler.png', // You'll need to add this image
    link: 'https://code-transpilerrr.netlify.app/', // Add your project link here
    tags: ['Python', 'Flask', 'Code Transpiler', 'Python to C', 'Python to Java'],
  },
  {
    title: 'Drowsiness Detection',
    description: 'AI-powered system that detects driver drowsiness in real time using facial landmarks.',
    image: '/assets/sleep.jpg',
    link:'https://github.com/KHUSHITYAGII/Drowsiness-Detection',
    tags: ['Machine Learning', 'PostgreSQL','OpenCV','Python'],
  },
  {
    title: 'Py-Game',
    description: 'An engaging Python-based game designed to spread autism awareness among kids.',
    image: '/assets/pygame.jpg',
    link:'https://github.com/KHUSHITYAGII/PY-GAMEE',
    tags: ['Python','Pygame'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}