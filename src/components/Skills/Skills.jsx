import React from 'react';
import './Skills.css'

import {MdOutlineArrowRight} from 'react-icons/md'

import reactIcon from '../../assets/images/reactjs.png'
import htmlIcon from '../../assets/images/html.png'
import cssIcon from '../../assets/images/css.png'
import bootIcon from '../../assets/images/boot.png'
import jsIcon from '../../assets/images/js.png'

import pythonIcon from '../../assets/images/python.png'
import djangoIcon from '../../assets/images/django.png'
import mysqlIcon from '../../assets/images/mysql.png'
import postIcon from '../../assets/images/post.png'

import gitIcon from '../../assets/images/git.png'
import githubIcon from '../../assets/images/github.png'
import netlifyIcon from '../../assets/images/netlify.png'
import postmanIcon from '../../assets/images/postman.png'
import vscodeIcon from '../../assets/images/vscode.png'
import figmaIcon from '../../assets/images/figma.png'


const Skills = () => {
  return (
    <div id='skills'>
      <section className='skill_section'>
        <div>
          <h2 className='skill_head'>Skills</h2>
          <p>I bring proficiency in frontend, backend languages, and various tools to every project.</p>
          {/* <p>With proficiency in both frontend and backend programming languages and hands-on experience with various development tools, I am well-equipped to contribute effectively to a wide array of development endeavors.</p> */}
        </div>
      
      <div className='skill_container'>
        <h5 className='skill_sub_head'>Frontend</h5>
        <div className='skill_card'>
        {/* <div class="circle"></div> */}
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
        
      </div>
      {/* backend */}
      <div className='skill_container'>
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
      </div>
      {/* others */}
      <div className='skill_container'>
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
      </div>
      
      

      </section>

    </div>
  )
}

export default Skills