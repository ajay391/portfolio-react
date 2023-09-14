import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import dragImg from '../../assets/images/bat.png';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(''); // Default to 'about' section

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Define the IDs of your sections
    const sectionIds = ['about', 'experience', 'skills', 'education' ,'work'];

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


  // dragable 
  useEffect(() => {
    // Function to handle dragging of the mydiv element
    const dragElement = (elmnt) => {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      
      const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        // Get the initial mouse cursor position
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      };
      
      const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
      };
      
      const closeDragElement = () => {
        // Stop moving when the mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
      };

      // Attach the dragMouseDown function to the element's mousedown event
      elmnt.onmousedown = dragMouseDown;
    };

    // Call the dragElement function with the mydiv element
    dragElement(document.getElementById('mydiv'));
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
                    <span>Code creatively </span>
                    <span>React Django Expert</span>
                  </span>
                </span></h3>
            <p>I develop web products and digital experiences with a focus on accessibility and inclusivity.</p>
          </div>

          <div className='links__container'>
            
            <a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href='#skills' className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href='#experience' className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href='#work' className={activeSection === 'work' ? 'active' : ''}>Recent works</a>
            <a href='#education' className={activeSection === 'education' ? 'active' : ''}>Education</a>
          </div>
        </div>

        <div className="sm_container">
          <i className='sm_icon'><AiFillInstagram/></i>
          <i className='sm_icon'><AiFillGithub/></i>
          <i className='sm_icon'><AiFillLinkedin/></i>
        </div>

        {/* drag div */}
        <div id="mydiv">
          <div id="mydivheader"><img src={dragImg} alt="" /></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
