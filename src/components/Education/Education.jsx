import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [activeDiv, setActiveDiv] = useState(1);
  const [focusedButton, setFocusedButton] = useState(1);

  const showDiv = (divNumber, buttonNumber) => {
    setActiveDiv(divNumber);
    setFocusedButton(buttonNumber);
  };

  const divs = [
    { id: 1, content: 'MG University, Kottayam', course: 'BCA', year: '2018 - 2021' },
    {
      id: 2,
      content: 'SNDP HSS , Udayamperoor',
      course: 'Computer Science',
      year: '2016 - 2018',
    },
    { id: 3, content: 'SVHS , Thripunithura', course: 'SSLC', year: '2015' },
  ];

  return (
    <div id="education">
      <section className="edu_section">
        <h2>Education</h2>
        <p>
          Education has been the foundation of my journey, equipping me with
          essential skills and knowledge. Explore my academic achievements below.
        </p>
        <div className="edu_container">
          {/* <div className="checkbox_container">
            <label className='radio'>
              <input
                type="checkbox"
                checked={focusedButton === 1}
                onChange={() => showDiv(1, 1)}
              />
              <span className="name">Degree</span> 
            </label>
            <label className='radio'>
              <input
                type="checkbox"
                checked={focusedButton === 2}
                onChange={() => showDiv(2, 2)}
              />
             <span className="name">Plus Two</span> 
            </label>
            <label className='radio'>
              <input
                type="checkbox"
                checked={focusedButton === 3}
                onChange={() => showDiv(3, 3)}
              />
             <span className="name">SSLC</span> 
            </label>
          </div> */}
          <div class="edu_btn_container">
              <div class="tabs">
              <input
                type="radio"
                name="tabs"
                id="radio-1"
                checked={focusedButton === 1}
                onChange={() => showDiv(1, 1)}
              />
              <label class="tab" for="radio-1">Degree</label>
              <input
                type="radio"
                name="tabs"
                id="radio-2"
                checked={focusedButton === 2}
                onChange={() => showDiv(2, 2)}
              />
		          <label class="tab" for="radio-2">Plus Two</label>
              <input
                type="radio"
                name="tabs"
                id="radio-3"
                checked={focusedButton === 3}
                onChange={() => showDiv(3, 3)}
              />
                <label class="tab" for="radio-3">SSLC</label>
                <span class="glider"></span>
              </div>
            </div>
            <div class="edu_card">
              <div class="tools">
                <div class="circle">
                  <span class="red box"></span>
                </div>
                <div class="circle">
                  <span class="yellow box"></span>
                </div>
                <div class="circle">
                  <span class="green box"></span>
                </div>
                <div class="edu_text">
                  <span class="">education.jsx</span>
                </div>
              </div>
              <div class="card__content">
                {divs.map((div) => (
                  <div key={div.id} className={div.id === activeDiv ? '' : 'hidden'}>
                    <h5 className="edu_course">{div.course}</h5>
                    <h6>{div.content}</h6>
                    <p>{div.year}</p>
                  </div>
                ))}
              </div>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Education;
