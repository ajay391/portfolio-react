import React from 'react';
import './Experience.css';
// import { Chrono } from "react-chrono";
// import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = () => {

  // const items = [{
  //   title: "2012-2013",
  //   cardTitle:<h2>Candorcode</h2>,
  //   cardSubtitle:
  //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
  // },{
  //   title: "May 1940",
  //   cardTitle: "Dunkirk",
  //   cardSubtitle:
  //     "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
  // }];
 
  return (
    <div id='experience'>
      <section className='exp_section'>
        <h2 className='exp_heading'>Experience</h2>
        <p>I bring a wealth of experience in web development and design, having worked on a variety of projects for clients from different industries. Explore my journey and notable achievements below.</p>
        
          {/* <Chrono items={items} 
            mode="VERTICAL_ALTERNATING" 
            slideShow
            slideItemDuration={4500}
            slideShowType="reveal"
            hideControls={true}
            theme={{
              primary: '#5eead4', // Customize the primary color
              secondary: '#000', // Customize the secondary color
              cardBg: 'black', // Customize the card background color
              cardForeColor: 'black', // Customize the card text color
            }}
            /> */}


        <div class="timeline_container">
        
          <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Password Publications Ptv. Ltd.</h3>
                <h5>Junior Web Developer</h5>
                <h6>Jan 2023 - Present</h6>
                <p>Experienced web developer proficient in HTML, CSS, and PHP, dedicated to crafting user-centered online experiences.</p>
              </div>
          </div>
        
          <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Candorcode Ptv. Ltd.</h3>
                <h5>Junior Software Engineer</h5>
                <h6>April 2022 - Dec 2022</h6>
                <p>Junior software engineer skilled in ReactJS and Django, focused on delivering innovative solutions and enhancing user interactions.</p>
              </div>
          </div>
        
          <div class="timeline-block timeline-block-right">
              <div class="marker"></div>
              <div class="timeline-content">
                <h3>Govt. Law College, Ernakulam</h3>
                <h5>Data Entry Operator</h5>
                <h6>Aug 2021 - Nov 2021</h6>
                <p>Data entry operator experienced in Excel, ensuring accurate and efficient data management.</p>
              </div>
          </div>
        
          
        </div>

      </section>
    </div>
  );
};

export default Experience;
