import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import About from '../About/About';
import HeroSection from '../HeroSection/HeroSection';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

import './layout.css';

const Layout = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
    });

    document.addEventListener('click', () => {
      cursor.classList.add('expand');

      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    });

    return () => {
      document.removeEventListener('mousemove', (e) => {
        cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`);
      });
      document.removeEventListener('click', () => {
        cursor.classList.add('expand');
        setTimeout(() => {
          cursor.classList.remove('expand');
        }, 500);
      });
    };
  }, []);

  return (
    <>
      <Container className='layout_container'>
        
        <div className='hero-row gx-0'>
          <div className=' fixed-column'>
            <HeroSection />
          </div>
          <div className=' scrollable-column'>
            <About />
            <Skills />
            <Experience />
            <Education />
          </div>
        </div>

        <div className="cursor"></div>
      </Container>
    </>
  );
};

export default Layout;
