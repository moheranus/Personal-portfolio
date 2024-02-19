import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./leftGrid.css";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

function LeftGrid() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const experienceSection = document.getElementById('experience');
      const projectSection = document.getElementById('project');
      const scrollPosition = window.scrollY;

      if (scrollPosition < experienceSection.offsetTop) {
        setActiveLink('about');
      } else if (scrollPosition < projectSection.offsetTop) {
        setActiveLink('experience');
      } else {
        setActiveLink('project');
      }
    };
    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='leftGrid-container'>
        <div className="left-ribbon">
          <div className='logo-wrapper'>
            <h2>Daniel.<span>Shobe</span></h2>
          </div>
        </div>
        <div className='leftGrid-content'>
          <div className='leftGrid-content-wrapper'>
            <div className='leftGrid-content-wrapper-text'>
              <h1>Hi, I'm Daniel.</h1>
              <h3>Software Developer at HST</h3>
              <p>I build pixel-perfect, accessible products for the web and beyond.</p>
            </div>
          </div>
          <nav className="rightGrid-nav">
            <ul>
              <li>
                <Link to="/about" href="#about" className={location.pathname === '/about' || activeLink === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/experience" href="#experience" className={location.pathname === '/experience' || activeLink === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/project" href="#project" className={location.pathname === '/project' || activeLink === 'project' ? 'active' : ''} onClick={() => scrollToSection('project')}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <div className='new-icon-wrapper'>
            
          </div>
          <div className='icon-container'>
            <div className='icon-wrapper'>
              {/* <ul>
                <li><FaGithub className='icon' id='github' /></li>
                <li><FaLinkedin className='icon' id='linkedin' /></li>
                <li><FaInstagram className='icon' id='instagram' /></li>
                <li><FaTelegram className='icon' id='telegram' /></li>
                <li><MdOutgoingMail className='icon' id='gmail' /></li>
              </ul> */}
              <div className="parent">
        <div className="contact-card">
            <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5">
                   D.SH
                </span>

            </div>
            <div className="glass"></div>
            <div className="content">
                <span className="title">Contact Info</span>
                
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container">
                    <button className="social-button .social-button1">
                      <FaGithub className='icon' id='github' />
                      <a href='https://github.com/moheranus'/>
                        </button>
                      <button className="social-button .social-button2">
                      <FaLinkedin className='icon' id='linkedin' />
                      <a href='https://www.linkedin.com/in/daniel-shobe-911279199/'/>
                      </button>
                      {/* <button className="social-button .social-button3">
                      <FaInstagram className='icon' id='instagram' />
                      </button> */}
                      {/* <button className="social-button .social-button4">
                      <FaTelegram className='icon' id='telegram' />
                      </button> */}
                      <button className="social-button .social-button5">
                      <MdOutgoingMail className='icon' id='gmail' />
                      <a href='mailto:daniel.shobe@hst-et.com'/>
                      </button>
                </div>
               
            </div>
        </div>
    </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default LeftGrid;
