import React , {  useEffect, useRef, useState } from 'react';


import './Skills.css'

import {MdOutlineArrowRight , MdArrowBackIosNew ,MdArrowForwardIos} from 'react-icons/md'

import front from '../../assets/images/frontend.png'
import gifMon from '../../assets/images/monitor.gif'
// import reactIcon from '../../assets/images/reactjs.png'
// import htmlIcon from '../../assets/images/html.png'
// import cssIcon from '../../assets/images/css.png'
// import bootIcon from '../../assets/images/boot.png'
// import jsIcon from '../../assets/images/js.png'

// import pythonIcon from '../../assets/images/python.png'
// import djangoIcon from '../../assets/images/django.png'
// import mysqlIcon from '../../assets/images/mysql.png'
// import postIcon from '../../assets/images/post.png'

// import gitIcon from '../../assets/images/git.png'
// import githubIcon from '../../assets/images/github.png'
// import netlifyIcon from '../../assets/images/netlify.png'
// import postmanIcon from '../../assets/images/postman.png'
// import vscodeIcon from '../../assets/images/vscode.png'
// import figmaIcon from '../../assets/images/figma.png'


const Skills = () => {

  // on each scroll
  // const spansRef = useRef([]);
  // const hedsRef = useRef([]);
  // const parRef = useRef([]);

  // useEffect(() => {
  //   function checkVisibility() {
  //     const spans = spansRef.current;
  //     const heds = hedsRef.current;
  //     const par = parRef.current;

  //     const isInViewport = (element) => {
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         return (
  //           rect.top >= 0 &&
  //           rect.left >= 0 &&
  //           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //         );
  //       }
  //       return false;
  //     };

  //     const setVisibility = (elements, className) => {
  //       elements.forEach((element) => {
  //         if (element && element.classList) {
  //           if (isInViewport(element)) {
  //             element.classList.add(className);
  //           } else {
  //             element.classList.remove(className);
  //           }
  //         }
  //       });
  //     };

  //     setVisibility(spans, 'animate');
  //     setVisibility(heds, 'animate');
  //     setVisibility(par, 'animate'); // Apply the same logic to paragraphs
  //   }

  //   checkVisibility(); // Call it once to check initially
  //   window.addEventListener('scroll', checkVisibility);
  //   window.addEventListener('resize', checkVisibility);

  //   return () => {
  //     window.removeEventListener('scroll', checkVisibility);
  //     window.removeEventListener('resize', checkVisibility);
  //   };
  // }, []);

  const spansRef = useRef([]);
  const hedsRef = useRef([]);
  const parRef = useRef([]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Adjust this threshold as needed
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const createObserver = (elements) => {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      elements.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });
      return observer; // Return the observer instance
    };
  
    const spans = spansRef.current;
    const heds = hedsRef.current;
    const par = parRef.current;
  
    const spansObserver = createObserver(spans);
    const hedsObserver = createObserver(heds);
    const parObserver = createObserver(par);
  
    return () => {
      // Cleanup by disconnecting observers
      spansObserver.disconnect();
      hedsObserver.disconnect();
      parObserver.disconnect();
    };
  }, []);
  

  return (
    <div id='skills'>
      <section className='skill_section'>
        <div>
          <h2 className='skill_head'>Skills</h2>
          <p>I bring proficiency in frontend, backend languages, and various tools to every project.</p>
          {/* <p>With proficiency in both frontend and backend programming languages and hands-on experience with various development tools, I am well-equipped to contribute effectively to a wide array of development endeavors.</p> */}
        </div>
        <div className="skill_container">
          <div className="skill_card">
            <div className='main_skill_head'>
              <div className='skill_img_div'>
                <img src={front} alt="" />
              </div>
              <div className="head-div" ref={(el) => hedsRef.current.push(el)}>
                <span className="main-heading-1">Frontend</span>
                <span className="main-heading-2">Development</span>
              </div>
              
            </div>

            <div>
              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
              <div className="p-ta">
              <p className="para" ref={(el) => parRef.current.push(el)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dicta, vel alias blnditiis a,
                  impedit quo ipsam est delectus faclis esse.
                </p>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> HTML</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> CSS</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> JavaScript</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> ReactJS</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Bootstrap</span>
              </div>

              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
            </div>
          </div>
    </div>
        <div className="skill_container">
          <div className="skill_card">
            <div className='main_skill_head'>
              <div className='skill_img_div'>
                <img src={front} alt="" />
              </div>
              <div className="head-div" ref={(el) => hedsRef.current.push(el)}>
                <span className="main-heading-1">Backend</span>
                <span className="main-heading-2">Development</span>
              </div>
              
            </div>

            <div>
              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
              <div className="p-ta">
              <p className="para" ref={(el) => parRef.current.push(el)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dicta, vel alias blnditiis a,
                  impedit quo ipsam est delectus faclis esse.
                </p>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Django</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Python</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> MySQL</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Postgresql</span>
                
              </div>

              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
            </div>
          </div>
    </div>

        <div className="skill_container">
          <div className="skill_card">
            <div className='main_skill_head'>
              <div className='skill_img_div'>
                <img src={front} alt="" />
              </div>
              <div className="head-div" ref={(el) => hedsRef.current.push(el)}>
                <span className="main-heading-1">Development</span>
                <span className="main-heading-2">Environment</span>
              </div>
              
            </div>

            <div>
              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
              <div className="p-ta">
              <p className="para" ref={(el) => parRef.current.push(el)}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dicta, vel alias blnditiis a,
                  impedit quo ipsam est delectus faclis esse.
                </p>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Git</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Github</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Postman</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Figma</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> Netlify</span>
                <span className='skill_icon' ref={(el) => spansRef.current.push(el)}><MdOutlineArrowRight/> VS Code</span>
                
              </div>

              <span className='skill_h3_tag'><MdArrowBackIosNew/>h3<MdArrowForwardIos/></span>
            </div>
          </div>
    </div>
      
      {/* <div className='skill_container'>
        <h5 className='skill_sub_head'>Frontend</h5>
        <div className='skill_card'>
        <div className="skills_div">
          
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>ReactJS
            </div>
            <div class="hover-btn">
              <img src={reactIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>HTML
            </div>
            <div class="hover-btn">
              <img src={htmlIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>CSS
            </div>
            <div class="hover-btn">
              <img src={cssIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Bootstrap
            </div>
            <div class="hover-btn">
              <img src={bootIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>JavaScript
            </div>
            <div class="hover-btn">
              <img src={jsIcon} alt="" />
            </div>
          </span>
        </div>
        </div>
        
      </div> */}
      {/* backend */}
      {/* <div className='skill_container'>
        <h5 className='skill_sub_head'>Backend</h5>
        <div className="skills_div">
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Python
            </div>
            <div class="hover-btn">
              <img src={pythonIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Django
            </div>
            <div class="hover-btn">
              <img src={djangoIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>MySQL
            </div>
            <div class="hover-btn">
              <img src={mysqlIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Postgresql
            </div>
            <div class="hover-btn">
              <img src={postIcon} alt="" />
            </div>
          </span>
        </div>
      </div> */}
      {/* others */}
      {/* <div className='skill_container'>
        <h5 className='skill_sub_head'>Other</h5>
        <div className="skills_div">
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Git
            </div>
            <div class="hover-btn">
              <img src={gitIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Github
            </div>
            <div class="hover-btn">
              <img src={githubIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Netlify
            </div>
            <div class="hover-btn">
              <img src={netlifyIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Postman
            </div>
            <div class="hover-btn">
              <img src={postmanIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>VS Code
            </div>
            <div class="hover-btn">
              <img src={vscodeIcon} alt="" />
            </div>
          </span>
          <span className='skill_btn_span'>
            <div class="default-btn">
              <MdOutlineArrowRight/>Figma
            </div>
            <div class="hover-btn">
              <img src={figmaIcon} alt="" />
            </div>
          </span>
        </div>
      </div> */}

      </section>

    </div>
  )
}

export default Skills