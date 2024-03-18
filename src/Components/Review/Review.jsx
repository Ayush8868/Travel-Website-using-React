import React,{useEffect} from 'react'
import './Review.css'

import user1 from '../Assets/USER_1.jpg'
import user2 from '../Assets/USER_2.jpg' 
import user3 from '../Assets/user4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='review section' id='about'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>

        <div className="reviewContainer container grid">

          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={user1} />
            </div>

            <p>Excellent customer service, quick responses to inquiries,accurate information smooth travel experience.</p>
            <div className="name">
              Naina Thakur
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={user2} />
            </div>

            <p>Competitive prices and a wide range of options for accommodations. Will use again for my next trip.</p>
            <div className="name">
              Ayush Thakur
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={user3} />
            </div>

            <p>User-friendly website with accurate information about destinations. Made planning my trip a breeze!</p>
            <div className="name">
              katherine langford
            </div>

          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Review
