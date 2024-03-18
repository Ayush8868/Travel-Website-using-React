import React,{useState} from 'react'
import './Navbar.css'

import { AiFillCloseCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiCredly } from "react-icons/si";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  //display the navbar
  const[active, setActive] =  useState('menueDiv')

  const removeNavbar = ()=>{
    setActive('menueDiv')  
  }

  // remove the navbar
  const showNavbar = ()=>{
    setActive('menueDiv activeNavbar')  
  }



  return (
    <div>
      <div className='header flex'>
        <div className='logoDiv'>
          <h3 className='logo'>Travel</h3>
        </div>

        <div className={active}>
          <ul className='menueLists'>
            <li className='navItem'>
              <a href='#' onClick={removeNavbar} className='menueLink'>Home</a>
            </li>
            <li className='navItem'>
              <a href='#cards' onClick={removeNavbar} className='menueLink'>Gallery</a>
            </li>
            <li className='navItem'>
              <a href='#tours' onClick={removeNavbar} className='menueLink'>Our Tours</a>
            </li>
            
            {/* <li className='navItem'>
              <a href='#' onClick={removeNavbar} className='menueLink'>Blog</a>
            </li> */}
            <li className='navItem'>
              <a href='#about' onClick={removeNavbar} className='menueLink'>About</a>
            </li>
            <li className='navItem'>
              <a href='#contact' onClick={removeNavbar} className='menueLink'>Contact</a>
            </li>
            <li className='navItem'>
              <a href='#' onClick={removeNavbar} className='menueLink'>Pages</a>
            </li>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div className="socialIcons flex">
        <a href='https://www.linkedin.com/in/ayush-chauhan-54b163250/'><FaLinkedinIn  className='icon'/></a>
        <a href='https://github.com/Ayush8868'><FaGithub className='icon'/></a>
        <a href='https://www.instagram.com/ayush_thakur_up_15/'><RiInstagramFill className='icon'/></a>
        <a href='https://www.credly.com/users/ayush-chauhan.f7fd51bf/badges'><SiCredly className=' credlyIcon'/></a>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
        <TbGridDots className='icon'/>
        </div>

      </div>
    </div>

  )
}

export default Navbar
