import React from 'react';
import './Skills.css'

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
      <h2 className='skill_head'>Skills</h2>
      
      <div className='skill_container'>
        <h5 className='skill_sub_head'>Frontend</h5>
        <div className="skills_div">
          <span className='skill_btn_span'>
            <img src={reactIcon} alt="icon"/>React Js
          </span>
          <span className='skill_btn_span'>
          <img src={htmlIcon} alt="icon"/>HTML
          </span>
          <span className='skill_btn_span'>
          <img src={cssIcon} alt="icon"/>CSS
          </span>
          <span className='skill_btn_span'>
          <img src={bootIcon} alt="icon"/>Bootstrap
          </span>
          <span className='skill_btn_span'>
          <img src={jsIcon} alt="icon"/>JavaScript
          </span>
        </div>
      </div>
      {/* backend */}
      <div className='skill_container'>
        <h5 className='skill_sub_head'>Backend</h5>
        <div className="skills_div">
          <span className='skill_btn_span'>
            <img src={pythonIcon} alt="icon"/>Python
          </span>
          <span className='skill_btn_span'>
          <img src={djangoIcon} alt="icon"/>Django
          </span>
          <span className='skill_btn_span'>
          <img src={mysqlIcon} alt="icon"/>MySQL
          </span>
          <span className='skill_btn_span'>
          <img src={postIcon} alt="icon"/>Postgresql
          </span>
        </div>
      </div>
      {/* others */}
      <div className='skill_container'>
        <h5 className='skill_sub_head'>Other</h5>
        <div className="skills_div">
          <span className='skill_btn_span'>
            <img src={gitIcon} alt="icon"/>Git
          </span>
          <span className='skill_btn_span'>
          <img src={githubIcon} alt="icon"/>Github
          </span>
          <span className='skill_btn_span'>
          <img src={netlifyIcon} alt="icon"/>Netlify
          </span>
          <span className='skill_btn_span'>
          <img src={postmanIcon} alt="icon"/>Postman
          </span>
          <span className='skill_btn_span'>
          <img src={vscodeIcon} alt="icon"/>VS Code
          </span>
          <span className='skill_btn_span'>
          <img src={figmaIcon} alt="icon"/>VS Code
          </span>
        </div>
      </div>
      
      

      </section>

    </div>
  )
}

export default Skills