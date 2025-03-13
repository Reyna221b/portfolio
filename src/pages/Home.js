import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  const projects = [
    {
      title: 'My Portfolio',
      description: 'A playful yet professional portfolio showcasing my projects, skills, and personality. Built with React, Framer Motion, and lots of love! The image above shows the new theme I am working on for the website!',
      image: '/images/portfolio.png',
      link: 'https://Reyna221b.github.io/portfolio',
    },
  ];

  return (
    <motion.div className='home'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="terminal-box">
        <div className="terminal-header">
          <span className="red-dot"></span>
          <span className="yellow-dot"></span>
          <span className="green-dot"></span>
          <p>reyna@portfolio:~$</p>
        </div>
        <div className="terminal-content">
          <p className="typing-effect">Welcome to Reyna's portfolio!</p>
          <p>Check out my current work in progress below! <span className="blinking-cursor">_</span></p>

          {/* Project Cards Inside the Terminal Box */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
