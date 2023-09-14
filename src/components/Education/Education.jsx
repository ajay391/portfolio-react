import React ,{useState}from 'react'

// import { Col, Row,  } from 'reactstrap';
import {MdOutlineArrowRight} from 'react-icons/md'
import './Education.css'

const Education = () => {

   const [activeDiv, setActiveDiv] = useState(null);
const [focusedButton, setFocusedButton] = useState(null);

 const showDiv = (divNumber, buttonNumber) => {
 setActiveDiv(divNumber);
setFocusedButton(buttonNumber);
 };

const divs = [
 { id: 1, content: 'MG University' , course :'BCA', year:'2018 - 2021'},
 { id: 2, content: 'SNDP HSS , Udayamperoor', course :'Computer Science', year:'2016 - 2018'},
{ id: 3, content: 'SVHS , Thripunithura', course :'SSLC', year:'2015'},
 ];

  return (
    <div id='education'>
      <section className='edu_section'>
      <h2>Education</h2>
      <div className='edu_container'>
        <div className='btn_container'>
       
          <button
          className={focusedButton === 1 ? 'button-focused' : ''}
          onClick={() => showDiv(1, 1)}
          >
          Degree
          </button>
          <button
          className={focusedButton === 2 ? 'button-focused' : ''}
          onClick={() => showDiv(2, 2)}
          >
          Plus Two
          </button>
          <button
          className={focusedButton === 3 ? 'button-focused' : ''}
          onClick={() => showDiv(3, 3)}
          >
          SSLC
          </button>
        
        </div>

        <div className='edu_content'>
          {divs.map((div) => (
          <div key={div.id} className={div.id === activeDiv ? '' : 'hidden'}>
            <h5>{div.course}</h5>
            <h6>{div.content}</h6>
            <p>{div.year}</p>
          </div>
          ))}
          </div>
        </div>
        
       </section>
   
    </div>

    
  )
}

export default Education

