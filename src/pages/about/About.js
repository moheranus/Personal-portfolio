import React from 'react';
import './about.css';

function About() {
  // Function to handle download resume button click
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual path to your PDF resume file
    window.location.href = '../../assets/resume.pdf';
  };

  return (
    <>
      <div className='about-container' id='about'>
        <div className='about-wrapper'>
          <p>Welcome to my corner of the digital realm! I'm Daniel Shobe, a passionate software developer who embarked on a journey into the world of technology at Addis Ababa Science and Technology University. In 2023, I proudly graduated with a degree in Software Engineering, equipped with the knowledge and skills to navigate the ever-evolving landscape of software development.</p> <br/>
          <p>Currently, I'm contributing my expertise as a software developer at HST Digital, where each day presents new opportunities to innovate and create. My commitment to excellence drives me to stay at the forefront of industry trends and deliver solutions that make a meaningful impact.</p><br/>
        </div>
        <div className='view-resume'>
          {/* Add onClick event handler to trigger download */}
          <button onClick={handleDownloadResume}>View Full Resume</button>
        </div>
      </div>
    </>
  );
}

export default About;
