import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(''); // Default to 'about' section

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Define the IDs of your sections
    const sectionIds = ['about', 'experience', 'skills', 'education'];

    // Loop through section IDs to find the active section
    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);

      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        // Calculate the middle of the screen
        const middleOfScreen = scrollY + windowHeight / 2;

        if (middleOfScreen >= sectionTop && middleOfScreen < sectionBottom) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='hero_sec'>

        <div className='home_c_container'>
          <div>
            <h1>Im Hisenberg</h1>
            <h3><span className="type">
                  <span>
                    <span>Full Stack Developer</span>
                    <span>Coding with Creativity </span>
                    <span>React Django Expert</span>
                  </span>
                </span></h3>
            <p>I develop web products and digital experiences with a focus on accessibility and inclusivity.</p>
          </div>

          <div className='links__container'>
            <a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href='#experience' className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href='#education' className={activeSection === 'education' ? 'active' : ''}>Education</a>
          </div>
        </div>

        <div className="sm_container">
          <i className='sm_icon'><AiFillInstagram/></i>
          <i className='sm_icon'><AiFillGithub/></i>
          <i className='sm_icon'><AiFillLinkedin/></i>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
