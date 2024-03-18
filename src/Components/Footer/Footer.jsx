import React,{useEffect} from 'react'
import './Footer.css'

import { HiPhone } from "react-icons/hi";
import { MdMail } from "react-icons/md";

import { FaLocationArrow } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiCredly } from "react-icons/si";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='footer' id='contact'>
      <div className='setContainer container'>
      <div className="content grid">

        <div data-aos='fade-up' data-aos-duration='2000' className="row">
          <div className="spanText">
            CONTACT US
          </div>
          <div className="contactDiv">   
            <span className='flex'>
              <HiPhone className='icon'/>
              <span>+91 7060805400</span>
            </span>
            <span className='flex'>
              <MdMail className='icon'/>
              <span>ayushchauhan8868@gmail.com</span>
            </span>
            <span className='flex'>
              <FaLocationArrow className='icon'/>
              <span>Meerut, Uttar Pradesh</span>
            </span>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="row">
          <div className="spanText">
            POPULAR NEWS
          </div>
          <div className="singleNews">
            <span className='text'>
              Your Personal Guide to the most places to visit in the world
            </span>
            <p>Jan 04,2024</p>
          </div>
          <div className="singleNews">
            <span className='text'>
              The grand reveal of the most iconic hotel in the world - Atlantis The Royal
            </span>
            <p>Jan 20,2024</p>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="row">
          <div className="spanText">
            QUICK LINKS
          </div>
          <div className="footerLinks">
            <ul>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Career</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="bottomDiv flex">
        <p>© Copyright 2024 Travel(Ayush Thakur) - All rights reserved</p>
        <div className="socials flex">
        <a href='https://www.linkedin.com/in/ayush-chauhan-54b163250/'><FaLinkedinIn  className='icon'/></a>
        <a href='https://github.com/Ayush8868'><FaGithub className='icon'/></a>
        <a href='https://www.instagram.com/ayush_thakur_up_15/'><RiInstagramFill className='icon'/></a>
        <a href='https://www.credly.com/users/ayush-chauhan.f7fd51bf/badges'><SiCredly className=' credlyIcon'/></a>
        </div>
        <p>Privacy Policy</p>
      </div>
    </div>
    </div>
    
  )
}

export default Footer
