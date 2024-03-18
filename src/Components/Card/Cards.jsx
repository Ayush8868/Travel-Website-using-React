import React,{useEffect} from "react";
import './Cards.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import img from "../Assets/img (13).jpg"
import img2 from "../Assets/img (12).jpg"
import img3 from "../Assets/img (9).jpg"
import { AiOutlineSwapRight } from "react-icons/ai";


const Cards = () =>{

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    return(
        <div className="cards" id="cards">
            <div data-aos='fade-up' data-aos-duration='2000' className="cardContainer container grid">
                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={img} alt="cardImg"></img>
                    </div>
                    <h4 className="textDiv">
                        Mountain Tours
                    </h4>
                </div>

                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={img2} alt="cardImg"></img>
                    </div>
                    <h4 className="textDiv">
                        Ballon Flight
                    </h4>
                </div>

                <div className="singleCard">
                    <div className="imgDiv">
                        <img src={img3} alt="cardImg"></img>
                    </div>
                    <h4 className="textDiv">
                        Boat Tours
                    </h4>
                </div>
            </div>
            <div className="spanText flex">
                Other Tours <AiOutlineSwapRight  className="icon"/>
            </div>
        </div>
    )
}

export default Cards