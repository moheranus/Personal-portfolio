import React, { useEffect, useState } from 'react';
import About from '../../pages/about/About';
import Experience from '../../pages/experience/Experience';
import Project from '../../pages/projects/Project';
import "./rightGrid.css";

function RightGrid() {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const projectSection = document.getElementById('project');

    const scrollPosition = window.scrollY;

    if (scrollPosition < experienceSection.offsetTop) {
      setActiveSection('about');
    } else if (scrollPosition < projectSection.offsetTop) {
      setActiveSection('experience');
    } else {
      setActiveSection('project');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='right-grid'>
      <section id="about" className={activeSection === 'about' ? 'active' : ''}>
        {/* Content for About section */}
        
        <About />
      </section>

      <section id="experience" className={activeSection === 'experience' ? 'active' : ''}>
        {/* Content for Experience section */}
        <Experience />
      </section>

      <section id="project" className={activeSection === 'project' ? 'active' : ''}>
        {/* Content for Project section */}
        <Project />
      </section>
    </div>
  );
}

export default RightGrid;
