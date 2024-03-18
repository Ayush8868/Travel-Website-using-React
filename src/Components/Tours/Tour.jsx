import React,{useEffect} from 'react'
import './Tour.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import tourImage1 from '../Assets/img (14).jpg'
import tourImage2 from '../Assets/img (11).jpg'

import { AiFillStar } from "react-icons/ai";

const Tour = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='tours container section' id='tours'>
      <div className="secContainer">
        <span className="secTitle">
          Hot Tours
        </span>

        <div className="tourContainer">

          <div data-aos='fade-up' data-aos-duration='2000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage1}></img>
            </div>
            <div data-aos='fade-up' data-aos-duration='3000' className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorm
              </span>
              <div className="starts_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>

              <p>Spain, a country on Europe's Eberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters.</p>
              <button className="btn">Buy This Tour</button>
            </div>

            <span className="price">
              Rs. 49,999
            </span>

          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImage2}></img>
            </div>
            <div data-aos='fade-up' data-aos-duration='3500' className="tourInfo">
              <span className="tourTitle">
                Mauritius Island, India
              </span>
              <div className="starts_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>

                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>

              <p>Welcome to a unique and exhilarating adventure—an exploration of mountainous landscapes from the serene vantage point of a boat! Join us on an unforgettable journey through winding rivers, hidden lakes, and majestic mountain waterscapes.</p>
              <button className="btn">Buy This Tour</button>
            </div>

            <span className="price">
              Rs. 54,999
            </span>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Tour
