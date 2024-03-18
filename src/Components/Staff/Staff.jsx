import React,{useEffect} from 'react'
import './Staff.css'

import user4 from '../Assets/user5.jpg'
import user5 from '../Assets/user3.jpg'
import user6 from '../Assets/USER_2.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Staff = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='staff container section' id='contact'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>
        <div className="staffContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user6} />
            </div>
            <span className='name'>
              Ayush Thakur
            </span>
            <span className='jobTitle'>
              Software Eng
            </span>
            <span className='contact'>
              +91 7060805400
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user5} />
            </div>
            <span className='name'>
              Mel Gupta
            </span>
            <span className='jobTitle'>
              CEO Travel
            </span>
            <span className='contact'>
              +344 367 7758 90
            </span>
          </div>
          <div data-aos='fade-up' data-aos-duration='2000' className="singleStaff">
            <div className="imgDiv">
              <img src={user4} />
            </div>
            <span className='name'>
              Joe Charmaine
            </span>
            <span className='jobTitle'>
              IT Specialist
            </span>
            <span className='contact'>
              +344 990 7758 90
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff
